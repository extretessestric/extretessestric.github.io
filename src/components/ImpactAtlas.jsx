import { useMemo } from "react";
import {
  ReactFlow,
  Handle,
  Position,
} from "@xyflow/react";
import {
  ArrowRight,
  CreditCard,
  FirstAidKit,
  Scales,
  ShieldCheck,
} from "@phosphor-icons/react";
import { lensConfig, projects } from "../data/projectLibrary.js";

const iconMap = {
  legal: Scales,
  health: FirstAidKit,
  safety: ShieldCheck,
  fintech: CreditCard,
};

function CenterNode({ data }) {
  return (
    <div className="atlas-center" aria-label={`${data.lens} leadership lens`}>
      <Handle id="top" type="source" position={Position.Top} />
      <Handle id="right" type="source" position={Position.Right} />
      <Handle id="bottom" type="source" position={Position.Bottom} />
      <Handle id="left" type="source" position={Position.Left} />
      <span>{data.eyebrow}</span>
      <strong>
        {data.lines.map((line, index) => (
          <span key={line}>
            {line}
            {index < data.lines.length - 1 ? <ArrowRight aria-hidden="true" /> : null}
          </span>
        ))}
      </strong>
    </div>
  );
}

function ProjectNode({ data }) {
  const Icon = iconMap[data.icon];
  return (
    <button
      className={`atlas-project atlas-project--${data.accent} nodrag nopan ${data.isActive ? "is-active" : "is-muted"}`}
      type="button"
      onClick={data.onSelect}
      aria-label={`Open ${data.label} project details`}
    >
      <Handle id="main" type="target" position={data.targetPosition} />
      <Handle id="satellite" type="source" position={data.satellitePosition} />
      <Icon aria-hidden="true" weight="duotone" />
      <strong>{data.label}</strong>
      <span>{data.domain}</span>
    </button>
  );
}

function SatelliteNode({ data }) {
  return (
    <div className={`atlas-satellite atlas-satellite--${data.accent}`}>
      <Handle type="target" position={data.targetPosition} />
      {data.label}
    </div>
  );
}

const nodeTypes = {
  center: CenterNode,
  project: ProjectNode,
  satellite: SatelliteNode,
};

const projectNodeDefinitions = [
  {
    id: "lexi",
    projectName: "LeXi AI",
    label: "LeXi AI",
    domain: "Legal intelligence",
    icon: "legal",
    accent: "blue",
    position: { x: 310, y: 18 },
    targetPosition: Position.Bottom,
    satellitePosition: Position.Top,
    sourceHandle: "top",
  },
  {
    id: "telemedicine",
    projectName: "Telemedicine Services - NHM, MP Govt.",
    label: "Statewide\nTelemedicine",
    domain: "Digital health",
    icon: "health",
    accent: "green",
    position: { x: 42, y: 222 },
    targetPosition: Position.Right,
    satellitePosition: Position.Left,
    sourceHandle: "left",
  },
  {
    id: "disaster",
    projectName: "Disaster & Rescue Management - Uttrakhand Govt.",
    label: "Disaster &\nRescue",
    domain: "Public safety",
    icon: "safety",
    accent: "orange",
    position: { x: 578, y: 222 },
    targetPosition: Position.Left,
    satellitePosition: Position.Right,
    sourceHandle: "right",
  },
  {
    id: "scallop",
    projectName: "Scallop",
    label: "Scallop /\nE Money",
    domain: "FinTech",
    icon: "fintech",
    accent: "orange",
    position: { x: 310, y: 426 },
    targetPosition: Position.Top,
    satellitePosition: Position.Bottom,
    sourceHandle: "bottom",
  },
];

const satelliteDefinitions = [
  {
    id: "ai",
    label: "AI",
    accent: "blue",
    position: { x: 115, y: 66 },
    targetPosition: Position.Right,
    projectId: "lexi",
  },
  {
    id: "govtech",
    label: "GovTech",
    accent: "blue",
    position: { x: 680, y: 70 },
    targetPosition: Position.Left,
    projectId: "lexi",
  },
  {
    id: "healthtech",
    label: "HealthTech",
    accent: "green",
    position: { x: 690, y: 270 },
    targetPosition: Position.Left,
    projectId: "disaster",
  },
  {
    id: "fintech",
    label: "FinTech",
    accent: "orange",
    position: { x: 616, y: 456 },
    targetPosition: Position.Left,
    projectId: "disaster",
  },
  {
    id: "commerce",
    label: "Commerce",
    accent: "orange",
    position: { x: 500, y: 540 },
    targetPosition: Position.Top,
    projectId: "scallop",
  },
  {
    id: "saas",
    label: "SaaS",
    accent: "green",
    position: { x: 94, y: 458 },
    targetPosition: Position.Right,
    projectId: "telemedicine",
  },
];

export function ImpactAtlas({ activeLens, onSelectProject }) {
  const config = lensConfig[activeLens];
  const activeNames = new Set(config.projectNames);

  const nodes = useMemo(() => {
    const center = {
      id: "center",
      type: "center",
      position: { x: 286, y: 210 },
      draggable: false,
      selectable: false,
      data: {
        lens: activeLens,
        eyebrow: config.eyebrow,
        lines: config.centerLines,
      },
    };

    const projectNodes = projectNodeDefinitions.map((definition) => {
      const project = projects.find((item) => item.name === definition.projectName);
      return {
        id: definition.id,
        type: "project",
        position: definition.position,
        draggable: false,
        selectable: false,
        data: {
          ...definition,
          isActive: activeNames.has(definition.projectName),
          onSelect: () => project && onSelectProject(project),
        },
      };
    });

    const satellites = satelliteDefinitions.map((definition) => ({
      id: definition.id,
      type: "satellite",
      position: definition.position,
      draggable: false,
      selectable: false,
      data: definition,
    }));

    return [center, ...projectNodes, ...satellites];
  }, [activeLens, activeNames, config, onSelectProject]);

  const edges = useMemo(() => {
    const mainEdges = projectNodeDefinitions.map((definition) => ({
      id: `center-${definition.id}`,
      source: "center",
      sourceHandle: definition.sourceHandle,
      target: definition.id,
      targetHandle: "main",
      type: "default",
      animated: false,
      style: {
        stroke: activeNames.has(definition.projectName) ? "var(--atlas-edge-active)" : "var(--atlas-edge-muted)",
        strokeWidth: activeNames.has(definition.projectName) ? 1.7 : 1.05,
      },
    }));

    const satelliteEdges = satelliteDefinitions.map((definition) => ({
      id: `${definition.projectId}-${definition.id}`,
      source: definition.projectId,
      sourceHandle: "satellite",
      target: definition.id,
      type: "default",
      style: {
        stroke: "#c9c1b7",
        strokeWidth: 1,
        strokeDasharray: "4 6",
      },
    }));

    return [...mainEdges, ...satelliteEdges];
  }, [activeNames]);

  return (
    <div className="impact-atlas" aria-label="Interactive project impact atlas">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.08 }}
        minZoom={0.65}
        maxZoom={1.15}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        preventScrolling={false}
        proOptions={{ hideAttribution: true }}
        nodesConnectable={false}
        elementsSelectable={false}
        onNodeClick={(_, node) => {
          if (node.type !== "project") return;
          const project = projects.find((item) => item.name === node.data.projectName);
          if (project) onSelectProject(project);
        }}
      />
    </div>
  );
}
