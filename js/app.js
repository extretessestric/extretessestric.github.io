/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./info.js":
/*!*****************!*\
  !*** ./info.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet info = {\n  name: \"Gaurav Jain\",\n  logo_name: \"GJ\",\n  flat_picture: __webpack_require__(/*! ./src/assets/potrait.png */ \"./src/assets/potrait.png\"),\n  config: {\n    use_cookies: true,\n    navbar: {\n      blur: false\n    }\n  },\n  description: \"💼10+ years in the game and still making tech chaos look classy. <br />\" + \"🚀I don’t just manage projects — I make them behave. <br />\" + \"💡Across every flavor of tech, I’ve streamlined it, scaled it, and shipped it. <br />\" + \"⏰Deadlines respect me. 💰Budgets stay in line. ✅Results? Always delivered.\",\n  links: {\n    linkedin: \"https://www.linkedin.com/in/extretessestric/\",\n    gmail: \"mailto:jigerjain4.gj@gmail.com\",\n    resume: \"https://drive.google.com/file/d/1e_ZawaNQ6FmOxEHcxYQZVRqwMj-aeL7C/view?usp=sharing\"\n  },\n  education: [{\n    name: \"Jai Hind College\",\n    place: \"Mumbai, Maharashtra, India\",\n    date: \"2016 - 2019\",\n    degree: \"Bachelor of Science in Information Technology (B.Sc. I.T.\",\n    score: \"9.57/10\",\n    description: \"\",\n    skills: [\"Artificial Intelligence\", \"Networking\", \"Software Engineering\", \"Algorithms\", \"Computer Vision\", \"IoT\", \"OS\"]\n  }, {\n    name: \"Shankar Narayan College\",\n    place: \"Mumbai, Maharashtra, India\",\n    date: \"2014 - 2016\",\n    degree: \"HSC\",\n    score: \"76%\",\n    description: \"\",\n    skills: [\"Commerce\"]\n  }, {\n    name: \"Om Swami Vivekanand High School\",\n    place: \"Mumbai, Maharashtra, India\",\n    date: \"2014\",\n    degree: \"SSC\",\n    score: \"72%\",\n    description: \"\",\n    skills: [\"Schooling\"]\n  }],\n  experience: [{\n    name: \"Technoark Solutions\",\n    place: \"Mumbai, Maharashtra, India\",\n    date: \"Jan, 2019 - Present\",\n    position: \"CTO cum Sr. Technical Project / Product / Program Manager\",\n    description: \"Started in the code, ended in the C-suite. Built, planned, shipped, led — one decade, every role, same result: execution done right.\",\n    skills: [\"MERN\", \"MEAN\", \"VueJs\", \"HTML/CSS/JS\", \"Java\", \"Python\", \".Net\", \"Go\", \"React Native\", \"Flutter\", \"AWS\", \"Azure\", \"GCP\", \"Oracle\", \"SQL\", \"MySQL\", \"PostgreSQL\", \"SQLite\", \"Firebase\", \"Docker\", \"Kubernetes\", \"Jenkins\"]\n  }],\n  skills: [{\n    title: \"Leadership & Management\",\n    info: [\"Effective communication\", \"Business Process Analysis and Optimization\", \"Data Migration and Integration\", \"SAP Customization and Configuration\", \"End-User Training and Documentation\", \"Ownership skill\", \"Team leadership\", \"Stakeholder management\", \"Complex decision making\", \"Problem solving and Troubleshooting\", \"E-governance & Security Compliances\", \"Liquidity, Risk & Compliance\"],\n    icon: \"fas fa-group\"\n  }, {\n    title: \"Project / Product / Program Management\",\n    info: [\"Microsoft Projects\", \"SAP Activate Methodology\", \"Aha!\", \"Agile\", \"Scrum\", \"Waterfall\", \"Kanban\", \"Treasury Project Delivery\", \"JIRA\", \"Trello\", \"Basecamp\", \"Asana\", \"ClickUp\", \"Notion\", \"Taskade\", \"Confluence\", \"Monday.com\", \"Miro\", \"Radar\"],\n    icon: \"fas fa-user-circle\"\n  }, {\n    title: \"Technical Skills (Web/Mobile/Cloud) \",\n    info: [\"Angular\", \"ReactJS\", \"React Native\", \"GoLang\", \"Rust\", \"Bash Scripting\", \"Powershell\", \"Blockchain\", \"Web3\", \"VueJS\", \"PHP (Laravel)\", \"JS/HTML5/CSS3\", \"JSP\", \"JSON/XML\", \"Python (Django / Flask / FastAPI)\", \"NodeJS (NestJS / Express)\", \"Java (Spring Boot / MVC)\", \"Kotlin\", \"Cordova\", \"Flutter (Dart)\", \".Net (C# / Core)\", \"AWS\", \"Azure\", \"Jenkins\", \"R\", \"Google Cloud Platform\", \"SQL\", \"MySQL\", \"PostgreSQL\", \"SQLite\", \"MongoDB\", \"Oracle\", \"AI/ML\", \"IoT\"],\n    icon: \"fas fa-laptop-code\"\n  }, {\n    title: \"Tools\",\n    info: [\"WordPress\", \"Shopify\", \"Magento\", \"Drupal\", \"Salesforce\", \"HubSpot\", \"Zoho CRM\", \"Microsoft Dynamic 360 CRM\", \"AEM\", \"Microsoft Office Suite\", \"SharePoint\", \"Adobe Suite\", \"Figma\", \"Visio\", \"Miro\", \"Balsamiq\", \"Draw.io\", \"Microsoft Office\", \"Advanced Excel\", \"Mettle\", \"Slack\", \"Microsoft Teams\", \"Skype\", \"Zoom API Integration\", \"UIDAI Aadhaar Integration\", \"Linux\", \"Unix\", \"Stripe\", \"PayU\", \"Razorpay\", \"Braintree\", \"PayPal\", \"Alipay\", \"Paytm\", \"R\", \"Google Analytics\", \"Mixpanel\", \"Amplitude\", \"Power BI\", \"Tableau\", \"Apache Tomcat\", \"Redis\", \"Solr\", \"Firebase\", \"Elastic Search\", \"Kafka\", \"Spark\", \"Camel\", \"Cassandra\"],\n    icon: \"fa fa-tools\"\n  }],\n  industries: [{\n    title: \"IT & Operations\",\n    icon: \"fas fa-gears\",\n    domains: [\"IT Service & Product Management\", \"Digital / Website Business Analysis\", \"Web Accessibility\", \"ERP Embedded Systems (IoT)\", \"Supply Chain Management\", \"Inventory Management\"]\n  }, {\n    title: \"E-Commerce & Business Models\",\n    icon: \"fas fa-shopping-cart\",\n    domains: [\"E-Commerce Platform\", \"Inventory Management\", \"Sales / E-Commerce Business Models\", \"B2B (Business-to-Business)\", \"B2C (Business-to-Consumer)\", \"C2B (Consumer-to-Business)\", \"C2C (Consumer-to-Consumer)\", \"D2C (Direct-to-Consumer)\", \"B2G (Business-to-Government)\", \"G2C (Government-to-Consumer)\", \"B2B2C (Business-to-Business-to-Consumer)\", \"Product-as-a-Service (PaaS)\", \"Software-as-a-Service (SaaS)\", \"Infrastructure-as-a-Service (IaaS)\", \"Retailer / Manufacturing\", \"Subscription\", \"Affiliate\", \"Freelance\"]\n  }, {\n    title: \"Enterprise Systems & Management\",\n    icon: \"fas fa-sitemap\",\n    domains: [\"ERP (Enterprise Resource Planning)\", \"CRM (Customer Relationship Management)\", \"CMS (Content Management System)\", \"LMS (Learning Management System)\", \"HRM (Human Resource Management)\", \"SAP (Manufacturing)\", \"SAP (Retail)\", \"SAP (Telecommunication)\", \"SAP (Consumer Goods)\", \"SAP (Pharmaceuticals)\", \"SAP (Utilities)\", \"SAP (Public Sector)\"]\n  }, {\n    title: \"Specialized Industry Verticals\",\n    icon: \"fas fa-industry\",\n    domains: [\"Healthcare (HealthTech / Pharmaceutical)\", \"Healthcare (Medical [Insurance / Device])\", \"FMCG (Fast-Moving Consumer Goods)\", \"Interior Design\", \"LegalTech\", \"EdTech\", \"RegTech / InsurTech\", \"FinTech (BaaS / BFSI / DeFi)\", \"AdTech\", \"RealTech / PropTech\", \"AgriTech\", \"AtmosTech\"]\n  }, {\n    title: \"Public & Non-Commercial Sectors\",\n    icon: \"fas fa-landmark\",\n    domains: [\"Government Sector\", \"Non-Profit Organizations\"]\n  }],\n  portfolio: [{\n    name: \"CARMA\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/carmaldn.png */ \"./src/assets/portfolio/carmaldn.png\")\n    }],\n    technologies: [\"React\", \"JSP\", \"Java\", \"Postgres\", \"AWS\", \"Trello\"],\n    link: \"https://carmaldn.com\",\n    description: \"CARMA is an Online Vegan Marketplace, bringing UK fashion, beauty and lifestyle brands together onto one platform to make shopping vegan, ethically and sustainably easy.\"\n  }, {\n    name: \"Franchise Direct\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/franchisedirect.png */ \"./src/assets/portfolio/franchisedirect.png\")\n    }],\n    technologies: [\"Java\", \"Brightspot\", \"Postgres\", \"AWS\", \"JIRA\"],\n    link: \"https://www.franchisedirect.com/\",\n    description: \"Franchise Direct's goal is to provide a reliable, authoritative platform where entrepreneurs can connect with franchisors seeking investors. \" + \"In support of this objective, our mission is to be the leading online resource for franchise opportunities and the knowledge center of choice \" + \"for anyone seeking information on the franchise industry.\"\n  }, {\n    name: \"NGA-SCE\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/ngasce.png */ \"./src/assets/portfolio/ngasce.png\")\n    }],\n    technologies: [\"React\", \"Java Spring Boot\", \"Mysql\", \"AWS\", \"Redis\", \"Trello\"],\n    link: \"https://studentzone-ngasce.nmims.edu/\",\n    description: \"NGASCE stands for NMIMS Global Access – School for Continuing Education, a part of Narsee Monjee Institute of Management Studies (NMIMS) \" + \"that offers distance and online programs. It focuses on providing quality management education to students who cannot attend full-time programs, \" + \"with a variety of diploma, certificate, and master's level courses. The institution uses technology to deliver its programs and caters to working \" + \"professionals who want to enhance their skills and knowledge. \"\n  }, {\n    name: \"Curated Medical\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/curatedmedical.png */ \"./src/assets/portfolio/curatedmedical.png\")\n    }],\n    technologies: [\"Shopify\", \"PHP\", \"SQL\", \"Path(PM Tool)\"],\n    link: \"https://curatedmed.com/\",\n    description: \"Curated Medical takes pride in providing top-tier aesthetic treatments for both men and women. \" + \"Our unwavering commitment to excellence, coupled with our founder’s expertise, creates an environment where quality meets luxury. \" + \"In this inspiring space, each client is warmly guided towards a transformative path to feeling beautiful — inside and out.\"\n  }, {\n    name: \"Pillows.com\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/pillows.png */ \"./src/assets/portfolio/pillows.png\")\n    }],\n    technologies: [\"Shopify\", \"PHP\", \"SQL\", \"Path(PM Tool)\"],\n    link: \"https://pillows.com/\",\n    description: \"Pillows.com is specifically focused on bringing luxury bedding into homes around the United States at reasonable prices.<br />\" + \"We only feature products found in luxury hotels and resorts around the world and are constantly adding and updating our inventory \" + \"to best meet the needs of our customers. Craig and Abby each have over 10 years of mail order retail experience and, along with the Pillows.com team, \" + \"are dedicated to giving you the service you deserve! All of our products are kept in a smoke free environment.\"\n  }, {\n    name: \"KUPA INC.\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/kupainc.png */ \"./src/assets/portfolio/kupainc.png\")\n    }],\n    technologies: [\"Shopify\", \"PHP\", \"SQL\", \"Path(PM Tool)\"],\n    link: \"https://kupainc.com/\",\n    description: \"KUPA Inc is the leading manufacturer of Electric Nail Files and Nail Drills in the Nail Industry.\"\n  }, {\n    name: \"The Shed\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/theshed.png */ \"./src/assets/portfolio/theshed.png\")\n    }],\n    technologies: [\"VueJs\", \"Java Spring boot\", \"AWS\", \"MySQL\", \"JIRA\"],\n    link: \"http://www.ished.com/\",\n    description: \"The Shed is the first online consumer goods rental marketplace that provides one-click rental and delivery across categories ranging from tools \" + \"to recreation to carpet cleaners. The Shed has built a platform with a new commerce model that enables manufacturers, retailers, entrepreneurs and \" + \"existing rental businesses to actively participate in the sharing economy and capture more revenue than just wholesale. We are changing \" + \"the rental industry experience for consumers and businesses for good!\"\n  }, {\n    name: \"LeXi AI\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/lexiai.png */ \"./src/assets/portfolio/lexiai.png\")\n    }],\n    technologies: [\"ReactJS\", \"Python + FastAPI\", \"OpenAI\", \"LLM\", \"NLP\", \"MongoDB\"],\n    link: \"https://www.lexiai.legal/\",\n    description: \"LeXi AI is a legal intelligence platform that combines AI-powered tools for both contract lifecycle management (CLM) and litigation preparation. \" + \"It includes two modules: LeXi Desk (for contracts) and LeXi LiTT (for litigation).\"\n  }, {\n    name: \"GoDecor\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/godecor.png */ \"./src/assets/portfolio/godecor.png\")\n    }],\n    technologies: [\"ReactJS\", \"Shopify\", \"PHP\", \"PostgreSQL\", \"JIRA\"],\n    link: \"https://godecor.app/\",\n    description: \"GoDecor is a design-forward company dedicated to transforming spaces and elevating lifestyles through innovative interior and exterior design solutions. \" + \"We blend aesthetics with functionality to create personalized environments that reflect our client’s unique tastes and preferences. \" + \"Whether you’re looking for smart space optimization, eco-friendly designs, or the latest trends, GoDecor offers tailored solutions to turn your vision into reality.\"\n  }, {\n    name: \"Hunnit\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/hunnit.png */ \"./src/assets/portfolio/hunnit.png\")\n    }],\n    technologies: [\"WooCommerce\", \"PHP\", \"MySQL\", \"JIRA\"],\n    link: \"https://hunnit.com/\",\n    description: \"Hunnit is an Indian fashion & apparel brand focused on sustainable activewear and lifestyle clothing. The name comes from “100%”—symbolizing quality and \" + \"commitment to comfort, style, and performance in everyday and activewear pieces. Their products are designed to merge fashion with comfort and \" + \"are sold primarily through their online store.\"\n  }, {\n    name: \"Walkent\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/walkent.png */ \"./src/assets/portfolio/walkent.png\")\n    }],\n    technologies: [\"Shopify\", \"PHP\", \"PostgreSQL\", \"Google Analytics\", \"JIRA\"],\n    link: \"https://www.walkent.com/\",\n    description: \"Walkent is an Indian direct-to-consumer (D2C) brand specializing in bags and accessories. Their product range includes backpacks, laptop bags, sling bags, \" + \"travel bags, and everyday carry gear designed for both style and functionality.\"\n  }, {\n    name: \"Eterna Health\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/eterna.png */ \"./src/assets/portfolio/eterna.png\")\n    }],\n    technologies: [\"Shopify\", \"PHP\", \"PostgreSQL\", \"Asana\"],\n    link: \"https://tryeterna.com/\",\n    description: \"Intelligent products that support the aging process head-on.\"\n  }, {\n    name: \"Moraze Cosmetics\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/moraze.png */ \"./src/assets/portfolio/moraze.png\")\n    }],\n    technologies: [\"Shopify\", \"PHP\", \"MySQL\", \"Meta Pixels\", \"Asana\"],\n    link: \"https://morazecosmetics.com/\",\n    description: \"Moraze Cosmetics is an Indian beauty and makeup brand that focuses on color cosmetics and skincare products with an emphasis on nourishing, skin-friendly formulas. \" + \"The brand’s product range includes items like lipsticks, matte liquid lipsticks, nail polish, eyeliners, makeup kits, and \" + \"other beauty essentials designed to be long-lasting, vegan, cruelty-free, and suitable for everyday use.\"\n  }, {\n    name: \"Scallop\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/scallopx.png */ \"./src/assets/portfolio/scallopx.png\")\n    }],\n    technologies: [\"React\", \"Java Spring Boot\", \"Postgres\", \"AWS\", \"Blockchain\", \"DeFi\", \"JIRA\"],\n    link: \"https://scallopx.com\",\n    description: \"Scallop and E Money Network together represent our vision for the future of finance. By combining a user-friendly banking and crypto app with a \" + \"MiCA-compliant modular Layer 1 blockchain, we bridge the gap between traditional systems and the world of digital assets. This is where BankFi meets PayFi.\"\n  }, {\n    name: \"ArealYou.ai\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/arealyou.png */ \"./src/assets/portfolio/arealyou.png\")\n    }],\n    technologies: [\"React\", \"Python (Django)\", \"OpenCV\", \"Mysql\", \"AWS\", \"JIRA\"],\n    link: \"https://arealyou.ai\",\n    description: \"Arealyou.ai is an AI-driven personal care startup that analyzes skin and hair via video scanning to deliver personalized insights. \" + \"It identifies hair type, color, length, age, scalp health, and premature greying percentage for customized care recommendations.\"\n  }, {\n    name: \"SCAN Health Plan\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/scanhealth.png */ \"./src/assets/portfolio/scanhealth.png\")\n    }],\n    technologies: [\"React\", \"Python\", \".Net Core\", \"Azure Functions\", \"Azure DevOps\", \"OCR / ICR\"],\n    link: \"https://www.scanhealthplan.com/\",\n    description: \"SCAN Health Plan is a nonprofit Medicare Advantage provider focused on delivering senior-centered healthcare services. It offers plans with $0 primary care, \" + \"prescription drug coverage, dental/vision, telehealth, chronic care support, and specialized plans for diverse older adult communities—empowering seniors to \" + \"stay healthy and independent.\"\n  }, {\n    name: \"MHCET\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/mhcet.png */ \"./src/assets/portfolio/mhcet.png\")\n    }],\n    technologies: [\"React\", \"Java\", \"Mysql\", \"On-prem Data Center\"],\n    link: \"https://cetcell.mahacet.org/\",\n    description: \"The Government of Maharashtra has established State Common Entrance Test Cell as per Section 10 of the Maharashtra Unaided Private Professional \" + \"Educational Institutions (Regulation of Admissions and Fees) Act, 2015. The CET Cell conducts various entrance exams for Admission to Professional \" + \"courses in the state of Maharashtra, India. <br /> <br /> Its primary purpose is to facilitate the admission process for Professional courses such as \" + \"Engineering, Management, Pharmacy, Agriculture, law, Medical, AYUSH & Fine Arts .\"\n  }, {\n    name: \"DMF - Career Counselling (Pathadarshi)\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/dmf.png */ \"./src/assets/portfolio/dmf.png\")\n    }],\n    technologies: [\"Angular\", \"Java\", \"Mysql\", \"On-prem Data Center\"],\n    link: \"https://pathadarshi.dmfkeonjhar.in/\",\n    description: \"Career counselling and life skills education are indispensable \" + \"components in the educational framework, crucial for fostering comprehensive development. In a nation like India, characterized by a plethora of \" + \"career options and a dynamically changing job market, the imperative for career counselling has escalated to guide students in making judicious \" + \"decisions based on their unique strengths. Concurrently, life skills education, an integral facet of the National Education Policy's (NEP) \" + \"emphasis on holistic development, seeks to endow students with vital skills such as critical thinking and proficient communication, preparing them for \" + \"both personal and professional triumphs. The NEP's acknowledgment of the significance of vocational education and life skills aligns seamlessly with the \" + \"imperative to alleviate academic stress, enhance adaptability to technological advancements, and encourage entrepreneurship. Collectively, the roles of \" + \"career counselling and life skills education aim to contribute significantly to crafting a wellrounded educational milieu that not only caters to academic \" + \"pursuits but also nurtures the diverse talents and aspirations of the district's youth. The project aims to implement a transformative initiative, \" + \"the Career Counselling and Life Skills Program, set to benefit a substantial student community in the district of Kendujhar, Odisha.\"\n  }, {\n    name: \"Swachh Bharat Mission - DDM, ELoader, Tricycle\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/sbm.png */ \"./src/assets/portfolio/sbm.png\")\n    }],\n    technologies: [\"React\", \"Java\", \"Mysql\", \"On-prem Data Center\"],\n    link: \"https://swachhbharatmission.ddws.gov.in/\",\n    description: \"A digital initiative under the Swachh Bharat Mission to streamline urban waste collection and management. <br />\" + \"<li>DDM (Dustbin Distribution Management): <br/>\" + \"Digitized the end-to-end process of dustbin allocation and tracking across municipal zones to ensure efficient waste resource distribution.</li>\" + \"<li>ELoader: <br />\" + \"Developed a procurement and tracking system for garbage collector vehicles (e-loaders) to optimize fleet operations and real-time monitoring.</li>\" + \"<li>Tricycle (E-Rickshaw Module): <br />\" + \"Enabled digital tracking and scheduling of tricycle-based waste collection, improving collection efficiency and accountability at ward level.</li>\"\n  }, {\n    name: \"StudentKare\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/studentkare.png */ \"./src/assets/portfolio/studentkare.png\")\n    }],\n    technologies: [\"VueJS\", \"NodeJS\", \"Postgres\", \"On-prem Data Center\"],\n    link: \"https://www.studentkare.com/\",\n    description: \"StudentKare is a dedicated e-marketplace for school essentials: uniforms, books, stationery, and more.<br />\" + \"With 14+ years of experience serving schools, students, and parents, we offer a trusted platform for effortless online ordering, quality products, and reliable delivery.\"\n  }, {\n    name: \"ARA (Admission Regulatory Authority)\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/ara.png */ \"./src/assets/portfolio/ara.png\")\n    }],\n    technologies: [\"React\", \"Java\", \"Mysql\", \"On-prem Data Center\"],\n    link: \"https://maha-ara.org/\",\n    description: \"The Admission Regulatory Authority (ARA) project is a centralized system designed to simplify and improve the college admissions process across a \" + \"variety of educational sectors, including technical, medical, higher education, agriculture, and fine arts. Its goal is to ensure that admissions are \" + \"transparent, well-regulated, and easily manageable for all involved.\"\n  }, {\n    name: \"Digital MSME & IKC - NSIC\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/nsic.png */ \"./src/assets/portfolio/nsic.png\")\n    }],\n    technologies: [\"React\", \"Java\", \"Postgres\", \"On-prem Data Center\"],\n    link: \"https://www.nsic.co.in/\",\n    description: \"Digital MSME Portal & ERP Suite:<br />\" + \"A government-backed digital ecosystem enabling MSMEs to adopt ERP, website, and mobile solutions for business automation. \" + \"The platform supports multilingual access, GST compliance, and cloud-based ERP modules (Sales, HR, Finance, CRM). \" + \"It empowers enterprises to streamline operations, enhance productivity, and transition smoothly into digital workflows.\"\n  }, {\n    name: \"Skill Development Center - MIDC\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/sdc.png */ \"./src/assets/portfolio/sdc.png\")\n    }],\n    technologies: [\"React\", \"Java\", \"Postgres\", \"On-prem Data Center\", \"SDC - Civil\", \"Hardware\", \"Command Center\"],\n    link: \"\",\n    description: \"The establishment of a Skill Development Centre (SDC) is envisioned as a proactive measure to address the critical need for skilled professionals \" + \"across Food Industry to offer skilling programs leading to certification, placement , capacity building and entrepreneurship focusing on the Food Processing Industry.\"\n  }, {\n    name: \"Telemedicine Services - NHM, MP Govt.\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/telemedicine.png */ \"./src/assets/portfolio/telemedicine.png\")\n    }],\n    technologies: [\"React\", \"Flutter\", \"Java\", \"MongoDB\", \"On-prem Data Center\", \"Hardware Kiosk\", \"IoT Kits\"],\n    link: \"\",\n    description: \"This project establishes a statewide telemedicine network under the Hub-and-Spoke model, connecting 6 medical colleges (hubs) with \" + \"1,206 Primary Health Centers (spokes) across Madhya Pradesh. It enables real-time video consultations between specialists and rural doctors, \" + \"covering general medicine, gynecology, pediatrics, and cardiology. The system integrates a cloud-based telemedicine platform, digital health records, \" + \"and e-prescriptions to deliver quality healthcare remotely, reduce patient travel, and ensure efficient specialist access through centralized monitoring and management\"\n  }, {\n    name: \"HMIS - MP Govt.\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/hmis.png */ \"./src/assets/portfolio/hmis.png\")\n    }],\n    technologies: [\"React\", \"Java\", \"Mysql\", \"On-prem Data Center\", \"Command Center\"],\n    link: \"\",\n    description: \"This project aims to develop and implement a statewide Hospital Management Information System (HMIS) integrated with the Ayushman Bharat Digital Mission (ABDM). \" + \"It includes modules like registration, billing, OPD/IPD, pharmacy, lab, radiology, asset, and inventory management, along with EHR, citizen portal, \" + \"and mobile apps for patients and staff. The solution establishes a Command & Control Center, integrates IoT medical devices, and ensures interoperability with \" + \"national health standards (FHIR, HL7, DICOM). The system strengthens data-driven governance, real-time performance monitoring, and efficient healthcare delivery \" + \"across all public health facilities in Madhya Pradesh\"\n  }, {\n    name: \"Disaster & Rescue Management - Uttrakhand Govt.\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/drm.png */ \"./src/assets/portfolio/drm.png\")\n    }],\n    technologies: [\"React\", \"Java\", \"Mysql\", \"On-prem Data Center\", \"Command Center\", \"Drones\", \"Hub & Spoke\", \"AI/ML\", \"GIS\", \"LiDAR\"],\n    link: \"\",\n    description: \"A smart disaster response system leveraging drone technology for real-time monitoring, assessment, and rescue during landslides and cloudbursts in Uttarakhand. \" + \"The solution integrates AI-driven analytics, GIS mapping, and a Command & Control Center for live coordination and damage reporting. Drones equipped with thermal and \" + \"LiDAR sensors provide aerial surveillance, victim detection, and infrastructure assessment, enabling faster decisions, improved rescue accuracy, and reduced response time.\"\n  }, {\n    name: \"Digitization for Grassroot Governance\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/grassroot.png */ \"./src/assets/portfolio/grassroot.png\")\n    }],\n    technologies: [\"React\", \"Java\", \"Mysql\", \"On-prem Data Center\", \"Command Center\", \"Hub & Spoke\", \"VSAT\"],\n    link: \"\",\n    description: \"This project focuses on bridging the digital divide across Gram Panchayats in Maharashtra by enabling reliable internet connectivity through VSAT, 4G, and \" + \"broadband solutions. It aims to empower local governance with access to e-services, agriculture, banking, insurance, and education portals, improving transparency \" + \"and citizen engagement. The initiative ensures real-time communication between state headquarters and village administrations, promoting inclusive digital growth and \" + \"rural empowerment at the grassroots level.\"\n  }, {\n    name: \"EduSpark\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/eduspark.png */ \"./src/assets/portfolio/eduspark.png\")\n    }],\n    technologies: [\"React\", \"Flutter\", \"Java\", \"Mysql\", \"GCP\", \"LMS\"],\n    link: \"https://eduspark.world/\",\n    description: \"EduSpark is a professional online learning platform designed by educators to empower school leaders and teachers with high-impact, evidence-based courses. \" + \"The platform offers interactive lessons, real-time progress analytics, and a portfolio system to showcase professional development. <br />\" + \"With subscription tiers and pay-per-course options, EduSpark fits the needs of individual educators and full school teams alike. <br />\" + \"Its mission is to shift professional learning from content consumption to actionable classroom impact, fostering learning networks and measurable growth.\"\n  }, {\n    name: \"RNS.ID\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/rns.png */ \"./src/assets/portfolio/rns.png\")\n    }],\n    technologies: [\"VueJS\", \"Smart Contract (Solana)\", \"Blockchain\", \"NodeJS\", \"MongoDB\", \"AWS\", \"MetaMask\", \"Jenkins\", \"Docker & Kubernetes\"],\n    link: \"https://rns.id/\",\n    description: \"RNS.ID is a blockchain-native digital identity platform backed by the sovereign nation of the Republic of Palau, offering a physical government-issued ID along with an on-chain Legal Decentralised Identity (LDID) token. \" + \"The platform enables cross-border digital residency—letting applicants from 80+ countries gain KYC-ready identity credentials without relocating. \" + \"RNS.ID leverages zero-knowledge proofs and multi-chain compatibility (currently Ethereum and planning Solana) to maintain user privacy while enabling trusted verifications. \" + \"Ideal for freelancers, digital nomads and Web3 users, it offers global access to virtual government services, reduced tax jurisdiction, and a next-gen identity model for the metaverse era.\"\n  }, {\n    name: \"SimplifyPI\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/simplifypi.png */ \"./src/assets/portfolio/simplifypi.png\")\n    }],\n    technologies: [\"Angular\", \"Java\", \"Mysql\", \"AWS\", \"Lombok\", \"JUnit\", \"OpenCV\"],\n    link: \"https://simplifypi.com/\",\n    description: \"SimplifyPI is your leading solution for Personal Injury Case Management. \" + \"Our Case Management Software is designed to empower attorneys and providers by reducing time spent on administrative tasks and increasing transparency for lienholders.\"\n  }, {\n    name: \"BigShip\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/bigship.png */ \"./src/assets/portfolio/bigship.png\")\n    }],\n    technologies: [\"Angular\", \".Net Core\", \"PHP\", \"Flutter\", \"SQL\", \"On-Prem Server\", \"Redis\", \"Kafka\", \"Jenkins\", \"Docker & Kubernetes\"],\n    link: \"https://bigship.in/\",\n    description: \"Bigship is India’s first business hub that offers you solutions for all your eCommerce business needs. This is a robust platform for \" + \"a best-in-class shipping experience for all the social sellers, marketplace sellers, shop owners and high-volume eCommerces. Focus on growing \" + \"your business while we help you keep your costs and tasks in line. Keep connected and make us a part of your success story.\"\n  }, {\n    name: \"Vitality Living College\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/vlc.png */ \"./src/assets/portfolio/vlc.png\")\n    }],\n    technologies: [\"CRM\", \"LMS\", \"Emotional Freedom Technique (EFT)\", \"Energy Flow Program\", \"Lead Generation\", \"Content Development\"],\n    link: \"https://vitalitylivingcollege.info/\",\n    description: \"Vitality Living College® is a global learning organisation with satellites worldwide, conducting seminars in stress relief, emotional well-being, \" + \"communication, confidence and spiritual realisation along with creating practitioners, coaches and trainers of EFT, NLP, Hypnosis, Timeline, Journey work, \" + \"Inner Child, Past Life Regression and Breakthrough Coaching. It is the only global college of its kind dedicated to leadership and personal development, \" + \"emotional well-being and spiritual growth.\"\n  }, {\n    name: \"BE-AgSmart – eKrishi AI-driven Digital Agriculture Platform, Bharat Electronics Limited\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/ekrishi.png */ \"./src/assets/portfolio/ekrishi.png\")\n    }],\n    technologies: [\"React\", \"Java\", \"Flutter\", \"VirtualBox\", \"MongoDB\"],\n    link: \"\",\n    description: \"A web- and mobile-based AI-driven digital agriculture platform developed for Bharat Electronics Limited (BEL) called BE-AgSmart – eKrishi. \" + \"It automates Farmer Producer Organization (FPO) operations and empowers farmers with smart tools such as IoT sensors, weather data, \" + \"and GIS services to enhance productivity, streamline farm management, and drive sustainable agriculture.\"\n  }, {\n    name: \"AyurVidya - All India Institute of Ayurveda\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/ayurvidya.png */ \"./src/assets/portfolio/ayurvidya.png\")\n    }],\n    technologies: [\"React\", \"PHP\", \"SQL\", \"AWS\"],\n    link: \"https://ayurvidya.aiia.gov.in/\",\n    description: \"The Ayurvidya is an e-learning project, aims to create a digital platform that hosts a wide range of service-oriented online courses \" + \"through our state-of-the-art Learning Management System (LMS). The technical content for these courses is meticulously curated and encompasses \" + \"a diverse range of learning materials.\"\n  }, {\n    name: \"Forest Department of Himachal Pradesh\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/forest.png */ \"./src/assets/portfolio/forest.png\")\n    }],\n    technologies: [\"React\", \"Java\", \"Flutter\", \"Mysql\", \"AWS\"],\n    link: \"https://hpforest.gov.in/\",\n    description: \"This project aims to digitize and location tag all forest nurseries in the state with Custom Web & Mobile Application. \" + \"This streamlined record-keeping and reporting, enhancing data accuracy and accessibility. Our efforts have significantly improved operational efficiency.\"\n  }, {\n    name: \"Thread Research\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/thread.png */ \"./src/assets/portfolio/thread.png\")\n    }],\n    technologies: [\"React\", \"Java\", \"Flutter\", \"Mysql\", \"AWS\", \"ERP\"],\n    link: \"https://www.threadresearch.com/\",\n    description: \"THREAD Research offers a fully configurable, no-code platform and professional services to support decentralized, hybrid and site-based clinical trials, \" + \"including eCOA, telehealth virtual visits and multi-channel patient engagement.\"\n  }, {\n    name: \"WORKPLACE21\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/wp21.png */ \"./src/assets/portfolio/wp21.png\")\n    }],\n    technologies: [\"React\", \"Java\", \"Mysql\", \"AWS\", \"JIRA\", \"Confluence\"],\n    link: \"https://heyvicky.com/\",\n    description: \"WP21 is instrumental in helping organizations and professionals unleash high performance and grow faster by helping professionals and \" + \"teams learn and develop conveniently, quickly, and effectively.\"\n  }, {\n    name: \"Imagine Cup (Microsoft)\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/imaginecup.png */ \"./src/assets/portfolio/imaginecup.png\")\n    }],\n    technologies: [\".Net\", \"SQL\", \"AWS\"],\n    link: \"https://imaginecup.microsoft.com/\",\n    description: \"Project to improve their image among students by engaging them in a global technology competition. Support millions of registered users, \" + \"Handle millions of page hits per day, Support 32+ different roles, Run 15+ competitions simultaneously, Include all functionality needed to run the competitions online\"\n  }, {\n    name: \"Adored Vintage\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/adoredvintage.png */ \"./src/assets/portfolio/adoredvintage.png\")\n    }],\n    technologies: [\"Shopify\", \"Preact\", \"Google Analytics\", \"Envoy\", \"PayPal\", \"MasterCard\", \"USPS\"],\n    link: \"https://www.adoredvintage.com/\",\n    description: \"Adored Vintage is a women’s ecommerce apparel brand based in Portland, Oregon, USA. It was founded in 2012 by Rodellee Bas and started as \" + \"an online vintage clothing shop that curates and sells romantic, vintage-inspired clothing and accessories for modern women. \" + \"The brand blends nostalgic silhouettes with contemporary styling and offers items such as dresses, tops, and accessories that evoke timeless, feminine fashion.\"\n  }, {\n    name: \"Jumia Uganda\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/jumia.png */ \"./src/assets/portfolio/jumia.png\")\n    }],\n    technologies: [\"ReactJS\", \"Java\", \"Oracle\", \"Apache\", \"Webtrekk\", \"LiveChat / Zopim\", \"WebEngage\", \"Cedexis\"],\n    link: \"https://www.jumia.ug/\",\n    description: \"Jumia Uganda is the Ugandan branch of Jumia Group, one of Africa’s largest e-commerce marketplaces. It operates an online shopping platform where users can buy \" + \"a wide variety of products — including electronics, fashion, home appliances, beauty items, and more — with options like cash on delivery and digital payments. <br />\" + \"Jumia is often referred to as the “Amazon of Africa,” and serves as a marketplace connecting consumers with sellers, supported by logistics services for delivery and \" + \"digital payment options like JumiaPay to facilitate online transactions.\"\n  }, {\n    name: \"Sorta Club\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/sorta.png */ \"./src/assets/portfolio/sorta.png\")\n    }],\n    technologies: [\"Shopify\", \"PHP\", \"Google Analytics\", \"GCP\", \"MySQL\", \"ClickUp\"],\n    link: \"https://sorta.club/\",\n    description: \"Sorta Club is an Indian fashion and lifestyle brand offering streetwear-inspired apparel and accessories for men and women. The brand describes its style \" + \"as “unisex luxury hustlewear,” creating bold, expressive pieces like t-shirts, hoodies, bomber jackets, cargos, socks, and accessories that appeal to \" + \"<i>creative hustlers and individualistic youth.</i>\"\n  }, {\n    name: \"Simply Herbal\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/simplyherbal.png */ \"./src/assets/portfolio/simplyherbal.png\")\n    }],\n    technologies: [\"WooCommerce\", \"JavaScript\", \"Google Analytics\", \"WordPress Hosted\", \"Razorpay\", \"MySQL\", \"Asana\"],\n    link: \"https://simplyherbal.in/\",\n    description: \"Simply Herbal is an Indian wellness and natural health supplements brand founded in 2016 in Indore, Madhya Pradesh by Yuvraj Soni. \" + \"The company focuses on producing and selling herbal and plant-based health, wellness, skin care, hair care, and nutritional supplement products that aim to harness \" + \"the benefits of natural ingredients such as vitamins, minerals, herbs, and botanical extracts. The brand emphasizes natural, vegan, non-GMO, and chemical-free \" + \"formulations for daily health and beauty needs.\"\n  }, {\n    name: \"Pet's Choice Supply\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/petschoice.png */ \"./src/assets/portfolio/petschoice.png\")\n    }],\n    technologies: [\"Shopify\", \"Liquid\", \"JavaScript\", \"Google Analytics\", \"Shopify Hosted\", \"PayU\", \"PostgreSQL\", \"JIRA\"],\n    link: \"http://petschoicesupply.com/\",\n    description: \"Pet’s Choice Supply is a U.S.-based online pet supplies retailer offering a wide range of products for pet owners and professionals. \" + \"The store’s catalog includes items such as pet doors, grooming equipment, cages, crates, veterinary equipment, training supplies, and \" + \"other accessories catering to dogs, cats, and other animals.\"\n  }, {\n    name: \"Aqualogica\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/aqualogica.png */ \"./src/assets/portfolio/aqualogica.png\")\n    }],\n    technologies: [\"Day.js\", \"Handlebars\", \"Cloudfare\", \"Google Tag Manager\", \"Chatwoot\", \"MySQL\", \"JIRA\"],\n    link: \"https://aqualogica.in/\",\n    description: \"Aqualogica is an Indian skincare and personal-care brand known for hydration-focused, science-driven formulations specifically designed for Indian skin and climate. \" + \"The brand emphasizes lightweight, toxin-free products enriched with natural ingredients (like papaya, coconut water, niacinamide, and hyaluronic acid), and \" + \"its formulations are built around Unique Water Lock Technology™ to deeply hydrate skin. The product range includes face washes, serums, moisturizers, sunscreens, and \" + \"other skincare essentials.\"\n  }, {\n    name: \"Allpha\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/allpha.png */ \"./src/assets/portfolio/allpha.png\")\n    }],\n    technologies: [\"JavaScript\", \"Bootstrap\", \"Custom CMS\", \"NodeJs\", \"AWS\", \"SQL\", \"JIRA\"],\n    link: \"https://allpha.org/\",\n    description: \"Allpha is a health and wellness platform that provides online health consultations and resources for both mental and physical health. \" + \"The service aims to offer 24/7 access to expert healthcare support, including personalized healthcare advice and curated health content. \" + \"The site also features training courses and educational resources related to general health and mental wellbeing.\"\n  }, {\n    name: \"Exotic Gas House\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/exoticgashouse.png */ \"./src/assets/portfolio/exoticgashouse.png\")\n    }],\n    technologies: [\"Custom CMS\", \"PHP\", \"Google Analytics\", \"MySQL\", \"Notion\"],\n    link: \"https://www.exoticgashouse.com/\",\n    description: \"Exotic Gas House is a family-owned online cannabis dispensary based in Los Angeles, California, USA. The store sells a variety of cannabis products such as \" + \"vape cartridges, edibles, CBD products, concentrates, tinctures, flowers, and vaporizers, targeting customers looking to buy premium cannabis products online.\"\n  }, {\n    name: \"Paper ID\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/paperid.png */ \"./src/assets/portfolio/paperid.png\")\n    }],\n    technologies: [\"Angular\", \"GoLang\", \"Apache\", \"Mautic / Ahrefs\", \"Google Cloud\", \"Vertex AI\"],\n    link: \"https://www.paper.id/\",\n    description: \"Paper.id is a Indonesian fintech SaaS (Software-as-a-Service) platform that helps small and medium enterprises (SMEs) digitize invoicing, payments, and \" + \"financial workflows. It enables businesses to create digital invoices, send them via email/WhatsApp/SMS, and collect payments using 30+ payment methods including \" + \"credit cards, bank transfers, e-wallets, QR codes, and marketplace payments. It also offers features like automatic payment reminders, reconciliation, \" + \"accounting reports, stock management, and supplier portals—effectively helping companies manage receivables, payables, and cash flow in one place.\"\n  }, {\n    name: \"Haladoc\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/haladoc.png */ \"./src/assets/portfolio/haladoc.png\")\n    }],\n    technologies: [\"Angular\", \"Java Spring Boot\", \"Apache\", \"Native iOS & Android\", \"Kafka & Airflow\", \"New Relic\", \"NLP\", \"AWS\"],\n    link: \"https://www.halodoc.com/\",\n    description: \"Halodoc is one of Indonesia’s largest digital health tech platforms, offering telemedicine and online healthcare services that connect patients with licensed doctors, \" + \"pharmacies, and lab services. It enables video/voice/text consultations, medicine delivery, lab test booking, and health information all in one place — aiming to \" + \"simplify access to medical care across Indonesia.\"\n  }, {\n    name: \"Green Future Project\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/greenfutureproject.png */ \"./src/assets/portfolio/greenfutureproject.png\")\n    }],\n    technologies: [\"JavaScript\", \"Java Spring Boot\", \"AWS\", \"PostgreSQL\", \"JIRA\"],\n    link: \"https://greenfutureproject.com/\",\n    description: \"Green Future Project (GFP) is an Italian climate-tech and sustainability solutions company that helps businesses on their environmental, social, and governance (ESG) and \" + \"decarbonisation journeys. It provides a cloud-based platform + consultancy to help companies measure, monitor, and reduce their CO₂ emissions, implement sustainability \" + \"strategies, track progress in real time, and communicate environmental impact to stakeholders. GFP also offers solutions such as carbon footprint monitoring, ESG analytics, \" + \"carbon credits & biodiversity tokens, employee engagement, and training services. The company is B Corp certified and works with clients across industries including \" + \"luxury brands, education, and energy sectors.\"\n  }, {\n    name: \"Fairatmos\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/fairatmos.png */ \"./src/assets/portfolio/fairatmos.png\")\n    }],\n    technologies: [\"ReactJS\", \"Python\", \"GCP\", \"Google Earth Engine\", \"BigQuery\", \"Vertex AI\", \"MongoDB\", \"JIRA\"],\n    link: \"https://www.fairatmos.com/\",\n    description: \"Fairatmos is a climate-tech company and carbon project developer based in Jakarta, Indonesia that helps landowners, developers, and corporates discover, develop, and \" + \"deliver high-quality nature-based carbon offset projects at scale. They focus on forest restoration, biodiversity conservation, peatland protection, and other \" + \"carbon solutions across Southeast Asia, with a strong technology and remote-sensing foundation.\"\n  }, {\n    name: \"Solelands\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/solelands.png */ \"./src/assets/portfolio/solelands.png\")\n    }],\n    technologies: [\"Unity\", \"JavaScript\", \"NodeJs\", \"MongoDB\", \"AWS\", \"Google Analytics\", \"Github Actions\", \"JIRA\"],\n    link: \"https://www.solelands.com/\",\n    description: \"Solelands is an immersive game-based learning platform designed for children that combines education with interactive gaming mechanics. The platform lets kids \" + \"explore virtual worlds, solve quests, and develop life skills, creativity, problem-solving ability, virtues, and applied competencies through play-based challenges. \" + \"It’s intended to help children love learning and prepare them with future-ready skills in a safe, engaging environment. The company behind it is Sole Technologies Pte Ltd, \" + \"headquartered in Singapore with operations in Indonesia. Founded around 2022, it has a small team and has received backing from investors including East Ventures.\"\n  }, {\n    name: \"Louise Life\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/louise.png */ \"./src/assets/portfolio/louise.png\")\n    }],\n    technologies: [\"JavaScript\", \"Python\", \"AI/ML\", \"AWS\", \"Google Analytics\", \"Jenkins\", \"JIRA\"],\n    link: \"https://louise.life/\",\n    description: \"Louise Life (operated by Louise Life Inc), is a reproductive intelligence and healthcare platform focused on transforming fertility care and reproductive medicine. \" + \"It aims to connect and streamline reproductive health data, workflows, and clinical decision-making by integrating clinical, operational, and biological data into \" + \"a unified system. The platform supports clinics, healthcare professionals, life sciences/payers, and patients with tools to automate tasks, improve outcomes, and \" + \"drive real-time insights during fertility treatment journeys. It emphasizes creating an adaptive system that learns from multimodal data to enhance precision in \" + \"reproductive care and discovery.\"\n  }, {\n    name: \"Edufarmers\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/edufarmers.png */ \"./src/assets/portfolio/edufarmers.png\")\n    }],\n    technologies: [\"JavaScript\", \"WordPress\", \"PHP\", \"MySQL\", \"AWS\"],\n    link: \"https://www.edufarmers.org/\",\n    description: \"EduFarmers is a community and education platform for farmers, focused on agricultural learning, training, and sustainable farming practices to help farmers \" + \"improve productivity and livelihoods through digital resources and guidance.\"\n  }, {\n    name: \"Happy Skin Cosmetics\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/happyskin.png */ \"./src/assets/portfolio/happyskin.png\")\n    }],\n    technologies: [\"JavaScript\", \"Shopify\", \"PHP\", \"MySQL\", \"AWS\"],\n    link: \"https://happyskincosmetics.com/\",\n    description: \"Happy Skin Cosmetics is a Philippines-based beauty and skincare brand that offers makeup and skincare products formulated for modern lifestyles, \" + \"often with a focus on skin-friendly ingredients and inclusive shade ranges.\"\n  }, {\n    name: \"Buy It Carl\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/buyitcarl.png */ \"./src/assets/portfolio/buyitcarl.png\")\n    }],\n    technologies: [\"JavaScript\", \"Shopify\", \"PHP\", \"MySQL\", \"AWS\"],\n    link: \"https://buyitcarl.com/\",\n    description: \"BuyItCarl appears to be an e-commerce retail site selling various consumer products (electronics, accessories, home goods, etc.) \" + \"online — typically a small direct-to-consumer online store.\"\n  }, {\n    name: \"Xtreeme Tech\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/xtreeme.png */ \"./src/assets/portfolio/xtreeme.png\")\n    }],\n    technologies: [\"JavaScript\", \"Python\", \"AI/ML\", \"MongoDB\", \"AWS\", \"Docker\"],\n    link: \"https://xtreemetech.com/\",\n    description: \"Xtreeme Tech is an AI solutions and software development company specializing in custom AI chatbots, voice caller systems, automation, machine learning solutions, \" + \"and web/app development services to help businesses improve efficiency and growth.\"\n  }, {\n    name: \"Kidoriman\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/kidoriman.png */ \"./src/assets/portfolio/kidoriman.png\")\n    }],\n    technologies: [\"JavaScript\", \"Shopify\", \"Mixpanel\", \"MySQL\", \"AWS\"],\n    link: \"https://kidoriman.com/\",\n    description: \"Kidoriman is a kids footwear brand/store offering a range of children’s shoes and related products online, focusing on comfort, style, and quality for \" + \"kids’ active lifestyles. (Inferred from the site’s product catalog and positioning.)\"\n  }, {\n    name: \"ElevenFlo\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/elevenflo.png */ \"./src/assets/portfolio/elevenflo.png\")\n    }],\n    technologies: [\"ReactJs\", \"Anthropic Claude\", \"Google Gemini\", \"OpenAI\", \"Agent Ochestration\", \"ElasticSearch\", \"AWS\", \"MongoDB\"],\n    link: \"https://elevenflo.com/\",\n    description: \"ElevenFlo is an agentic AI platform for Chapter 11 intelligence, built to help restructuring professionals and companies navigate U.S. \" + \"bankruptcy (Chapter 11) with tools like document analysis, docket search, AI research, and productivity helpers powered by agentic/autonomous AI.\"\n  }, {\n    name: \"Cofetti.ai\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/cofetti.png */ \"./src/assets/portfolio/cofetti.png\")\n    }],\n    technologies: [\"JavaScript\", \"Python\", \"OpenAI\", \"Managed DB\", \"AWS\"],\n    link: \"https://cofetti.ai/\",\n    description: \"Cofetti.ai is an AI-powered web app for creating and sending personalized greeting cards and invitations using natural language prompts — \" + \"letting users describe images and messages and generate tailored cards automatically.\"\n  }, {\n    name: \"Acuitey Solutions\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/acuitey.png */ \"./src/assets/portfolio/acuitey.png\")\n    }],\n    technologies: [\"JavaScript\", \"Wordpress\", \"PHP\", \"MySQL\", \"AWS\", \"Amplitude\"],\n    link: \"https://acuiteysolutions.com/\",\n    description: \"Acuitey Solutions is an EdTech and IT services company offering expert-led online courses, live classes, corporate training, and \" + \"custom software/IT consulting solutions to help businesses and individuals upskill and adopt technology effectively.\"\n  }, {\n    name: \"Waayu\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/waayu.png */ \"./src/assets/portfolio/waayu.png\")\n    }],\n    technologies: [\"React Native\", \"Java Spring Boot\", \"WEbSockets\", \"ONDC\", \"GIS\", \"MongoDB\", \"AWS\", \"Amplitude\"],\n    link: \"https://waayu.app/\",\n    description: \"Waayu is an Indian zero-commission food delivery and restaurant-empowerment platform, \" + \"letting restaurants accept orders without commissions and offering customers affordable delivery via app and now also WhatsApp ordering.\"\n  }, {\n    name: \"Lovers AI\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/loversai.png */ \"./src/assets/portfolio/loversai.png\")\n    }],\n    technologies: [\"JavaScript\", \"OpenAI / Gemini / Midjourney\", \"PHP\", \"MySQL\", \"AWS\", \"Google Analytics\"],\n    link: \"https://www.theloversai.co.in/\",\n    description: \"The Lovers AI (found at theloversai.co.in) appears to be an Indian brand/venture using AI to enhance experiences around love, relationships, weddings, and/or \" + \"intimate shopping, often described as connecting couples with vendors or offering discreet product experiences. Specific public info about the company’s mission \" + \"and exact offerings is limited from the website itself.\"\n  }, {\n    name: \"CPV - Auto\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/cpvauto.png */ \"./src/assets/portfolio/cpvauto.png\")\n    }],\n    technologies: [\"ReactJs\", \"Python\", \"AI/ML\", \"OCR + NLP\", \"MongoDB\", \"AWS\", \"Google Analytics\"],\n    link: \"https://www.cpvauto.com/\",\n    description: \"CPV Auto is a cloud-based Data-as-a-Service platform that uses AI/ML to automate the digitization of paper batch records and unstructured pharma/biopharma data \" + \"into structured, searchable, GxP-compliant digital formats for analysis and quality control.\"\n  }, {\n    name: \"RuutIQ\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/ruutiq.png */ \"./src/assets/portfolio/ruutiq.png\")\n    }],\n    technologies: [\"JavaScript\", \"React Native\", \"NodeJs\", \"MongoDB\", \"AWS\", \"GraphQL\", \"ERP / CRM\", \"AI/ML\"],\n    link: \"https://www.ruutiq.com/\",\n    description: \"RuutIQ is a cloud-based sales force automation and operations platform designed to help distribution-focused businesses (especially in food & beverage) \" + \"streamline orders, deliveries, demand planning, and field operations with real-time tracking, AI-driven forecasting, and ERP integrations.\"\n  }, {\n    name: \"BarrierBreak\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/barrierbreak.png */ \"./src/assets/portfolio/barrierbreak.png\")\n    }],\n    technologies: [\"JavaScript\", \"A11yNow\", \"A11yInspect\", \"AI-Powered Solutions\", \"Web Accessibility\", \"VPAT / ACR\", \"WCAG / ADA / EAA / RPWD\"],\n    link: \"https://www.barrierbreak.com/\",\n    description: \"BarrierBreak is a global digital accessibility leader and based in India that helps organizations make digital products truly accessible and inclusive for people with \" + \"disabilities. It combines AI-powered automation with human expertise to provide end-to-end accessibility services — from automated and manual accessibility testing to \" + \"remediation, compliance reporting (like VPAT/ACR), consulting, and training. BarrierBreak’s solutions support compliance with global standards such as WCAG, ADA, \" + \"Section 508 and EAA, ensuring digital experiences are usable by everyone, regardless of ability. The company serves clients across multiple countries and has been \" + \"recognized as a Representative Vendor in the 2025 Gartner® Market Guide for Digital Accessibility.\"\n  }, {\n    name: \"BwanguBwangu\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/bwangu.png */ \"./src/assets/portfolio/bwangu.png\")\n    }],\n    technologies: [\"Flutter\", \"NextJs\", \"NodeJs\", \"MongoDB\", \"Socket.io\", \"Google Maps API\", \"Stripe / Flutterwave\", \"AWS\", \"Firebase Cloud Messaging\"],\n    link: \"https://www.bwangubwangu.com/\",\n    description: \"BwanguBwangu pickup N delivery is a registered and licensed courier and delivery company. Whose goal is to become the leading courier and delivery services company in \" + \"Zambia, we make sure that every service deliveries we handle competes favorably with the best in the industry in terms of time and safety.\"\n  }, {\n    name: \"BizVidya\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/bizvidya.png */ \"./src/assets/portfolio/bizvidya.png\")\n    }],\n    technologies: [\"NextJs\", \"React Native\", \"NodeJs\", \"PostgreSQL\", \"WebSockets\", \"Python (Analytics)\", \"AWS\", \"Docker\", \"Kubernetes\"],\n    link: \"https://bizvidya.com/\",\n    description: \"BizVidya is an India-based EdTech and consulting platform founded in 2022 that offers industry-driven learning courses, MSME consulting, and \" + \"college collaboration programs to enhance skills and bridge the gap between academia and real-world needs.\"\n  }, {\n    name: \"Groupe Orqual\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/orqual.png */ \"./src/assets/portfolio/orqual.png\")\n    }],\n    technologies: [\"Delphi\", \"Orthalis Connect\", \"AI & Automation\", \"Kitview\", \"Doctolib\", \"3Shape\", \"DentalMonitoring\", \"Spark\", \"Enterprise DB\"],\n    link: \"https://www.orqual.fr/en/\",\n    description: \"Orqual is a French software publisher specializing in orthodontic and dental practice management solutions, providing a suite of tools such as practice management, \" + \"digital imaging, cephalometric analysis, and intelligent photo libraries tailored for dental professionals. The company emphasizes innovation, customizable software, \" + \"and AI-enhanced features to streamline clinic workflows and patient care.\"\n  }, {\n    name: \"GO WFO\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/gowfo.png */ \"./src/assets/portfolio/gowfo.png\")\n    }],\n    technologies: [\"ReactJs\", \"NodeJs\", \"PostgreSQL\", \"WebSockets\", \"Web3 (Blockchain)\", \"Vercel\", \"AWS S3\"],\n    link: \"https://www.gowfo.com/\",\n    description: \"GO WFO is the ultimate playground for extreme sports enthusiasts. We're a community-driven network where fearless creators and influencers come together to fuel \" + \"the passion and excitement of the world's most daring athletes. As the first network built on the Autheo platform, we're revolutionizing the way extreme sports fans \" + \"connect, learn, and get inspired. Our network empowers the next generation of thrill-seekers, providing a platform for creators to share their stories, showcase their \" + \"skills, and push the limits of what's possible.\"\n  }, {\n    name: \"Hindustan Times\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/hindustantimes.png */ \"./src/assets/portfolio/hindustantimes.png\")\n    }],\n    technologies: [\"ReactJs\", \"Java Spring Boot\", \"Google Ads\", \"MoEngage / Outbrain\", \"PostgreSQL\", \"AWS\", \"Docker\", \"ELastic / Solr\", \"Custom CMS\", \"Cloudfare\"],\n    link: \"https://www.hindustantimes.com/\",\n    description: \"Hindustan Times is part of HT Media Ltd, a leading Indian media company whose digital arm (HT Digital Streams) runs English and regional language news platforms such as \" + \"Hindustantimes.com and LiveHindustan.com to reach diverse audiences across India. The language vertical delivers news in English, Hindi and other regional formats, \" + \"driving strong readership and engagement. On the monetization side, the company has recently expanded into affiliate-led shoppable content and commerce, \" + \"integrating affiliate partnerships and product recommendations to diversify beyond traditional advertising revenue. This content-to-commerce approach enables \" + \"performance-based revenue alongside display ads and subscriptions.\"\n  }, {\n    name: \"iGlobal Impluso\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/iglobal.png */ \"./src/assets/portfolio/iglobal.png\")\n    }],\n    technologies: [\"WordPress\", \"JavaScript\", \"PHP\", \"MySQL\", \"AWS\", \"HubSpot\", \"Zoom / Slack\"],\n    link: \"https://www.iglobalimpulso.com/\",\n    description: \"iGlobal Impulso provides managed, professionally trained virtual assistant services that integrate into a client’s workflow to handle admin, CRM, e-commerce, \" + \"and operational tasks so leaders can focus on core strategy. Their assistants act like productivity partners rather than freelancers, serving entrepreneurs, \" + \"startups, SMBs, and enterprise teams with flexible support plans.\"\n  }, {\n    name: \"JV EdTech Medovation\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/jvedtech.png */ \"./src/assets/portfolio/jvedtech.png\")\n    }],\n    technologies: [\"Angular\", \"NodeJs\", \"React Native\", \"MySQL\", \"AWS\", \"Firebase\", \"LMS / CMS\"],\n    link: \"https://jvedtech.com/\",\n    description: \"JV EdTech Medovation is a health-tech and education innovation company based in Mumbai focused on empowering individuals with quality healthcare solutions and \" + \"digital learning services. It offers e-learning development, digital marketing, and medical educational services to improve health outcomes and awareness.\"\n  }, {\n    name: \"KAItchens\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/kaitchens.png */ \"./src/assets/portfolio/kaitchens.png\")\n    }],\n    technologies: [\"NextJs\", \"NodeJs\", \"PostgreSQL\", \"GCP\", \"Docker / nginx\", \"Mixpanel\"],\n    link: \"https://kaitchens.com/\",\n    description: \"kAItchens is a Pune-based startup offering portable cloud kitchens (“Kitchen as a Service”) that help food brands scale operations with reduced capital and \" + \"operational costs. They provide tech-enabled kitchen infrastructure and services to culinary businesses.\"\n  }, {\n    name: \"Central Data Storage\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/centraldata.png */ \"./src/assets/portfolio/centraldata.png\")\n    }],\n    technologies: [\"VueJs\", \"Java\", \"VMWare\", \"PostgreSQL\", \"AWS\", \"Docker\"],\n    link: \"https://centraldatastorage.com/\",\n    description: \"Central Data Storage (CDS) is a U.S.-based managed data backup, disaster recovery, and protection provider focused on securing sensitive business data with \" + \"HIPAA-compliant solutions and private hybrid cloud infrastructure. Founded in 2008, it serves healthcare and other regulated industries with secure, automated \" + \"backups and rapid recovery services.\"\n  }, {\n    name: \"Park N Jet\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/parknjet.png */ \"./src/assets/portfolio/parknjet.png\")\n    }],\n    technologies: [\"Javascript / JQuery\", \"WordPress\", \"PHP\", \"Google Analytics\", \"AWS\", \"Docker / Kubernetes\"],\n    link: \"https://www.parknjetchicago.com/\",\n    description: \"Park N Jet is a family-owned off-site parking service near Chicago O’Hare International Airport (ORD) that provides secure, affordable long-term parking with \" + \"free shuttle transfers to and from the terminals. It has been serving travelers since 1997 and offers services like self-park, valet, and vehicle care (wash/detail).\"\n  }, {\n    name: \"Parenting Connections\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/parenting.png */ \"./src/assets/portfolio/parenting.png\")\n    }],\n    technologies: [\"Shopify\", \"JavaScript\", \"MySQL\", \"AWS\", \"Google Analytics\"],\n    link: \"https://www.parentingconnections.com.au/\",\n    description: \"Parenting Connections Australia (PCA) is a specialist parenting and psychology book and resource store, operating online and from our clinical psychology practice in Sydney. \" + \"Our Vision is to provide resources that support and inspire, and to reinvest in the parenting community through charitable donations.\"\n  }, {\n    name: \"UNBOX\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/unbox.png */ \"./src/assets/portfolio/unbox.png\")\n    }],\n    technologies: [\"JavaScript\", \"NodeJs\", \"LiveChat\", \"HubSpot\", \"Azure\", \"Google Analytics\"],\n    link: \"https://unboxinc.com/\",\n    description: \"UNBOX is a premium coworking and flexible workspace provider based in Dubai offering hot desks, private offices, meeting rooms, virtual offices, \" + \"and event spaces designed for freelancers, startups, and growing teams. It focuses on community, productivity, and flexible membership plans tailored to \" + \"diverse business needs.\"\n  }, {\n    name: \"Vastu Housing Finance\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/vastu.png */ \"./src/assets/portfolio/vastu.png\")\n    }],\n    technologies: [\"WordPress\", \"JQuery QI\", \"MySQL\", \"AWS\", \"Google Workspace\", \"Yoast\", \"GoDaddy\"],\n    link: \"https://www.vastuhfc.com/\",\n    description: \"Vastu Housing Finance is a Mumbai-based housing finance company focused on driving financial inclusion by offering affordable home loans and related credit products \" + \"across India, particularly to underserved and self-employed customers. It leverages proprietary digital technology and data analytics to enable a paperless, \" + \"streamlined lending experience.\"\n  }, {\n    name: \"Webdew\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/webdew.png */ \"./src/assets/portfolio/webdew.png\")\n    }],\n    technologies: [\"VueJs\", \"NodeJs\", \"MySQL\", \"AWS\", \"React Native\", \"WhatsApp API\", \"Google Analytics\"],\n    link: \"https://wedew.id/\",\n    description: \"Wedew is an Indonesian digital wedding platform that lets couples create personalized wedding websites and e-invitations with automated guest management, RSVPs, \" + \"cashless gifts, and sharing via WhatsApp or email. It simplifies wedding communication and guest tracking for events.\"\n  }, {\n    name: \"XPayBack\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/xpayback.png */ \"./src/assets/portfolio/xpayback.png\")\n    }],\n    technologies: [\"ReactJs\", \"Python\", \"PostgreSQL\", \"AWS\", \"React Native\", \"Google Analytics\"],\n    link: \"https://xpayback.com/\",\n    description: \"XPayBack is a FinTech rewards & cashback platform that lets users earn guaranteed cashback on online and in-store purchases while providing merchants with \" + \"tools to boost loyalty and sales. It offers cashback rewards, deals, prepaid card benefits, and merchant analytics through its app and payment solutions.\"\n  }, {\n    name: \"Find My Tuition\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/fmt.png */ \"./src/assets/portfolio/fmt.png\")\n    }],\n    technologies: [\"ReactJs\", \"NodeJs\", \"MySQL\", \"AWS\", \"JIRA\"],\n    link: \"http://www.findmytuition.com/\",\n    description: \"ind My Tuition is an education platform that connects students with qualified tutors and coaching services, offering personalized academic support and \" + \"a searchable tutor network to help with exam prep and ongoing study needs. The platform also has a mobile app published by Intelliteach Tech Study Help Private Limited.\"\n  }, {\n    name: \"Watch Your Health\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/watchyourhealth.png */ \"./src/assets/portfolio/watchyourhealth.png\")\n    }],\n    technologies: [\"JQuery\", \"NodeJs\", \"MySQL\", \"Apache\", \"Cloufare\", \"AWS & Nginx\", \"Vimeo / Gmail\", \"WhatsApp API\", \"Google Tag Manager & Analytics\"],\n    link: \"https://www.watchyourhealth.com/\",\n    description: \"WatchYourHealth is an Indian InsurTech & HealthTech SaaS platform that provides digital health engagement, personalized wellness tools, AI-driven health monitoring, \" + \"and patient engagement solutions to insurance companies, hospitals, and healthcare partners to improve health outcomes and policyholder retention. \" + \"It integrates wellness tracking, gamification, rewards, and AI-based assessments in its ecosystem.\"\n  }, {\n    name: \"InternGrad\",\n    pictures: [{\n      img: __webpack_require__(/*! ./src/assets/portfolio/interngrad.png */ \"./src/assets/portfolio/interngrad.png\")\n    }],\n    technologies: [\"JQuery\", \"PHP\", \"MySQL\", \"AWS\", \"React Native\", \"Google Analytics\", \"AI/ML\", \"Advanced LMS\", \"ATS\"],\n    link: \"https://interngrad.in/\",\n    description: \"InternGrad is an online e-learning and career skills platform offering industry-relevant courses and certification programs in areas like programming, \" + \"DevOps, data science, digital marketing, and HR fundamentals to help students and professionals upskill and prepare for careers. \" + \"It’s operated by InternGrad SkillUp Solutions Pvt Ltd with offices in Pune/Mumbai & Bengaluru.\"\n  }]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (info);\n\n//# sourceURL=webpack:///./info.js?");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Navbar.vue */ \"./src/components/Navbar.vue\");\n/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Home */ \"./src/components/Home.vue\");\n/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/About */ \"./src/components/About.vue\");\n/* harmony import */ var _components_Skills__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Skills */ \"./src/components/Skills.vue\");\n/* harmony import */ var _components_Industries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Industries */ \"./src/components/Industries.vue\");\n/* harmony import */ var _components_Portfolio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Portfolio */ \"./src/components/Portfolio.vue\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Footer */ \"./src/components/Footer.vue\");\n/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../info */ \"./info.js\");\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"App\",\n  components: {\n    Navbar: _components_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    Home: _components_Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    About: _components_About__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    Skills: _components_Skills__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    Industries: _components_Industries__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    Portfolio: _components_Portfolio__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    Footer: _components_Footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n  },\n  data() {\n    return {\n      nightMode: false,\n      config: _info__WEBPACK_IMPORTED_MODULE_7__[\"default\"].config\n    };\n  },\n  created() {\n    if (this.config.use_cookies) {\n      this.nightMode = this.$cookie.get(\"nightMode\") === \"true\" ? true : false;\n    }\n  },\n  mounted() {\n    [\"about\", \"contact\", \"skills\", \"industries\", \"portfolio\"].forEach(l => {\n      if (window.location.href.includes(l)) {\n        var elementPosition = document.getElementById(l).offsetTop;\n        window.scrollTo({\n          top: elementPosition - 35,\n          behavior: \"smooth\"\n        });\n      }\n    });\n  },\n  methods: {\n    switchMode(mode) {\n      if (this.config.use_cookies) {\n        this.$cookie.set(\"nightMode\", mode);\n      }\n      this.nightMode = mode;\n    },\n    scrollTo(ele) {\n      if (ele == \"home\") {\n        this.$router.push(`/`);\n        window.scrollTo({\n          top: -80,\n          behavior: \"smooth\"\n        });\n      } else {\n        var elementPosition = document.getElementById(ele).offsetTop;\n        window.scrollTo({\n          top: elementPosition - 35,\n          behavior: \"smooth\"\n        });\n        if (this.$router.history.current.path !== `/${ele}`) this.$router.push(`/${ele}`);\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/About.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/About.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_Timeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/Timeline */ \"./src/components/helpers/Timeline.vue\");\n/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../info */ \"./info.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"About\",\n  components: {\n    Timeline: _helpers_Timeline__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  props: {\n    nightMode: {\n      type: Boolean\n    }\n  },\n  data() {\n    return {\n      education: {\n        title: \"education\",\n        data: _info__WEBPACK_IMPORTED_MODULE_1__[\"default\"].education\n      },\n      experience: {\n        title: \"experiences\",\n        data: _info__WEBPACK_IMPORTED_MODULE_1__[\"default\"].experience\n      }\n    };\n  }\n});\n\n//# sourceURL=webpack:///./src/components/About.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Footer.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Footer.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../info */ \"./info.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Footer\",\n  data() {\n    return {\n      linkedin: _info__WEBPACK_IMPORTED_MODULE_0__[\"default\"].links.linkedin,\n      gmail: _info__WEBPACK_IMPORTED_MODULE_0__[\"default\"].links.gmail,\n      resume: _info__WEBPACK_IMPORTED_MODULE_0__[\"default\"].links.resume\n    };\n  },\n  methods: {\n    open(link) {\n      switch (link) {\n        case \"linkedin\":\n          window.open(this.linkedin, \"_blank\");\n          break;\n        case \"gmail\":\n          window.open(this.gmail, \"_blank\");\n          break;\n        case \"resume\":\n          window.open(this.resume, \"_blank\");\n          break;\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/Footer.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Home.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Home.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../info */ \"./info.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Home\",\n  components: {},\n  props: {\n    nightMode: {\n      type: Boolean\n    }\n  },\n  data() {\n    return {\n      picture: _info__WEBPACK_IMPORTED_MODULE_0__[\"default\"].flat_picture,\n      description: _info__WEBPACK_IMPORTED_MODULE_0__[\"default\"].description,\n      name: _info__WEBPACK_IMPORTED_MODULE_0__[\"default\"].name,\n      linkedin: _info__WEBPACK_IMPORTED_MODULE_0__[\"default\"].links.linkedin,\n      gmail: _info__WEBPACK_IMPORTED_MODULE_0__[\"default\"].links.gmail,\n      resume: _info__WEBPACK_IMPORTED_MODULE_0__[\"default\"].links.resume\n    };\n  },\n  methods: {\n    open(link) {\n      switch (link) {\n        case \"linkedin\":\n          window.open(this.linkedin, \"_blank\");\n          break;\n        case \"gmail\":\n          window.open(this.gmail, \"_blank\");\n          break;\n        case \"resume\":\n          window.open(this.resume, \"_blank\");\n          break;\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/Home.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Industries.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Industries.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../info */ \"./info.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Industries\",\n  props: {\n    nightMode: {\n      type: Boolean\n    }\n  },\n  data() {\n    return {\n      industries: _info__WEBPACK_IMPORTED_MODULE_0__[\"default\"].industries\n    };\n  }\n});\n\n//# sourceURL=webpack:///./src/components/Industries.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Navbar.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Navbar.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_Logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/Logo */ \"./src/components/helpers/Logo.vue\");\n/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../info */ \"./info.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Navbar\",\n  props: {\n    nightMode: {\n      type: Boolean\n    }\n  },\n  data() {\n    return {\n      navbarConfig: _info__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.navbar,\n      localNightMode: this.nightMode\n    };\n  },\n  components: {\n    Logo: _helpers_Logo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  methods: {\n    switchMode() {\n      this.localNightMode = !this.localNightMode;\n      this.$emit(\"nightMode\", this.localNightMode);\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/Navbar.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Portfolio.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Portfolio.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/Card */ \"./src/components/helpers/Card.vue\");\n/* harmony import */ var _helpers_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/Modal */ \"./src/components/helpers/Modal.vue\");\n/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../info */ \"./info.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Portfolio\",\n  components: {\n    Card: _helpers_Card__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    Modal: _helpers_Modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  props: {\n    nightMode: {\n      type: Boolean\n    }\n  },\n  data() {\n    return {\n      folio_info: _info__WEBPACK_IMPORTED_MODULE_2__[\"default\"].portfolio,\n      portfolio_info: [],\n      showModal: false,\n      modal_info: {},\n      number: 30,\n      showBtn: \"show more\",\n      shower: 0,\n      data: ['<div class=\"example-slide\">Slide 1</div>', '<div class=\"example-slide\">Slide 2</div>', '<div class=\"example-slide\">Slide 3</div>']\n    };\n  },\n  created() {\n    for (var i = 0; i < this.number; i++) {\n      this.portfolio_info.push(this.folio_info[i]);\n    }\n  },\n  watch: {\n    number() {\n      this.portfolio_info = [];\n      for (var i = 0; i < this.number; i++) {\n        this.portfolio_info.push(this.folio_info[i]);\n      }\n    }\n  },\n  mounted() {\n    window.addEventListener(\"keydown\", this.handleEsc);\n  },\n  beforeDestroy() {\n    window.removeEventListener(\"keydown\", this.handleEsc);\n  },\n  methods: {\n    next() {\n      this.$refs.flickity.next();\n    },\n    previous() {\n      this.$refs.flickity.previous();\n    },\n    closeModal() {\n      this.showModal = false;\n      document.getElementsByTagName(\"body\")[0].classList.remove(\"modal-open\");\n    },\n    showModalFn(portfolio) {\n      this.model_info = portfolio;\n      this.showModal = true;\n    },\n    showMore() {\n      if (this.number != this.folio_info.length) {\n        this.number += 30;\n        window.scrollBy({\n          top: document.getElementsByClassName(\"smcard\")[0].clientHeight,\n          behavior: \"smooth\"\n        });\n        if (this.number > this.folio_info.length) this.number = this.folio_info.length;\n      }\n      if (this.number == this.folio_info.length && this.shower == 0) {\n        this.shower = 1;\n        this.showBtn = \"show less\";\n      } else if (this.number == this.folio_info.length && this.shower == 1) {\n        var elementPosition = document.getElementById(\"portfolio\").offsetTop;\n        window.scrollTo({\n          top: elementPosition + 5,\n          behavior: \"smooth\"\n        });\n        this.shower = 0;\n        this.number = 3;\n        this.showBtn = \"show more\";\n      }\n    },\n    handleEsc(e) {\n      if (e.key === \"Escape\" && this.showModal) {\n        this.closeModal();\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/Portfolio.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Skills.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Skills.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../info */ \"./info.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Skills\",\n  props: {\n    nightMode: {\n      type: Boolean\n    }\n  },\n  data() {\n    return {\n      skills: _info__WEBPACK_IMPORTED_MODULE_0__[\"default\"].skills\n    };\n  }\n});\n\n//# sourceURL=webpack:///./src/components/Skills.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/helpers/Card.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/helpers/Card.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Card\",\n  props: {\n    portfolio: {\n      type: Object\n    },\n    nightMode: {\n      type: Boolean\n    }\n  },\n  methods: {\n    open(url) {\n      window.open(url, \"_blank\");\n    },\n    showModal() {\n      this.$emit(\"show\", this.portfolio);\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/helpers/Card.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/helpers/Logo.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/helpers/Logo.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../info */ \"./info.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Logo\",\n  props: {\n    nightMode: {\n      type: Boolean\n    }\n  },\n  data() {\n    return {\n      name: _info__WEBPACK_IMPORTED_MODULE_0__[\"default\"].logo_name,\n      dot: \".\"\n    };\n  }\n});\n\n//# sourceURL=webpack:///./src/components/helpers/Logo.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/helpers/Modal.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/helpers/Modal.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Modal\",\n  components: {},\n  props: {\n    showModal: {\n      type: Boolean\n    },\n    portfolio: {\n      type: Object\n    },\n    nightMode: {\n      type: Boolean\n    }\n  },\n  created() {\n    document.getElementsByTagName(\"body\")[0].classList.add(\"modal-open\");\n  },\n  methods: {\n    open(url) {\n      window.open(url, \"_blank\");\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/helpers/Modal.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/helpers/Timeline.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/helpers/Timeline.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Timeline\",\n  props: {\n    data: {\n      type: Object\n    },\n    nightMode: {\n      type: Boolean\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/helpers/Timeline.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"1809fece-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1809fece-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"div\", {\n    class: {\n      \"text-dark\": !_vm.nightMode,\n      \"text-light\": _vm.nightMode\n    },\n    attrs: {\n      id: \"app\"\n    }\n  }, [_c(\"Navbar\", {\n    attrs: {\n      nightMode: _vm.nightMode\n    },\n    on: {\n      scroll: _vm.scrollTo,\n      nightMode: _vm.switchMode\n    }\n  }), _c(\"div\", {\n    staticClass: \"parent\"\n  }, [_c(\"Home\", {\n    attrs: {\n      nightMode: _vm.nightMode\n    }\n  }), _c(\"About\", {\n    attrs: {\n      id: \"about\",\n      nightMode: _vm.nightMode\n    }\n  }), _c(\"Skills\", {\n    attrs: {\n      id: \"skills\",\n      nightMode: _vm.nightMode\n    }\n  }), _c(\"Industries\", {\n    attrs: {\n      id: \"industries\",\n      nightMode: _vm.nightMode\n    }\n  }), _c(\"Portfolio\", {\n    attrs: {\n      id: \"portfolio\",\n      nightMode: _vm.nightMode\n    }\n  }), _c(\"Footer\", {\n    attrs: {\n      nightMode: _vm.nightMode\n    }\n  })], 1)], 1);\n};\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%221809fece-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"1809fece-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/About.vue?vue&type=template&id=c226fde6&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1809fece-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/About.vue?vue&type=template&id=c226fde6&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"div\", {\n    staticClass: \"py-4 p-st\",\n    class: {\n      \"bg-light\": !_vm.nightMode,\n      \"bg-dark2\": _vm.nightMode,\n      \"text-light\": _vm.nightMode\n    }\n  }, [_c(\"div\", {\n    staticClass: \"container\"\n  }, [_c(\"div\", {\n    staticClass: \"text-center\",\n    attrs: {\n      \"data-aos\": \"fade\",\n      \"data-aos-once\": \"true\",\n      \"data-aos-duration\": \"1000\"\n    }\n  }, [_c(\"span\", {\n    staticClass: \"title text-center\",\n    class: {\n      pgray: !_vm.nightMode,\n      \"text-light\": _vm.nightMode\n    }\n  }, [_vm._v(\"about me.\")])]), _c(\"hr\", {\n    class: {\n      pgray: !_vm.nightMode,\n      \"bg-secondary\": _vm.nightMode\n    },\n    attrs: {\n      width: \"50%\"\n    }\n  }), _c(\"div\", {\n    staticClass: \"row\"\n  }, [_c(\"div\", {\n    staticClass: \"col-xl-6 col-bg-6 col-md-6 col-sm-12\"\n  }, [_c(\"Timeline\", {\n    attrs: {\n      data: _vm.education,\n      nightMode: _vm.nightMode\n    }\n  })], 1), _c(\"div\", {\n    staticClass: \"col-xl-6 col-bg-6 col-md-6 col-sm-12\"\n  }, [_c(\"Timeline\", {\n    attrs: {\n      data: _vm.experience,\n      nightMode: _vm.nightMode\n    }\n  })], 1)])])]);\n};\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack:///./src/components/About.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%221809fece-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"1809fece-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Footer.vue?vue&type=template&id=40ab164b&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1809fece-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Footer.vue?vue&type=template&id=40ab164b&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"div\", {\n    staticClass: \"bg-secondary\"\n  }, [_c(\"div\", {\n    staticClass: \"container py-3\"\n  }, [_c(\"div\", {\n    staticClass: \"row pt-1 align-items-center\"\n  }, [_vm._m(0), _c(\"div\", {\n    staticClass: \"col-xl-6 col-bg-6 col-md-6 col-sm-12\"\n  }, [_c(\"div\", {\n    staticClass: \"text-center\"\n  }, [_c(\"button\", {\n    directives: [{\n      name: \"tooltip\",\n      rawName: \"v-tooltip.top\",\n      value: \"Mail\",\n      expression: \"'Mail'\",\n      modifiers: {\n        top: true\n      }\n    }],\n    staticClass: \"btn btn-outline-secondary mx-2\",\n    on: {\n      click: function ($event) {\n        return _vm.open(\"gmail\");\n      }\n    }\n  }, [_c(\"i\", {\n    staticClass: \"fas fa-envelope\"\n  })]), _c(\"button\", {\n    directives: [{\n      name: \"tooltip\",\n      rawName: \"v-tooltip.top\",\n      value: \"LinkedIn\",\n      expression: \"'LinkedIn'\",\n      modifiers: {\n        top: true\n      }\n    }],\n    staticClass: \"btn btn-outline-secondary mx-2\",\n    on: {\n      click: function ($event) {\n        return _vm.open(\"linkedin\");\n      }\n    }\n  }, [_c(\"i\", {\n    staticClass: \"fab fa-linkedin\"\n  })]), _c(\"button\", {\n    directives: [{\n      name: \"tooltip\",\n      rawName: \"v-tooltip.top\",\n      value: \"Resume\",\n      expression: \"'Resume'\",\n      modifiers: {\n        top: true\n      }\n    }],\n    staticClass: \"btn btn-outline-secondary mx-2\",\n    on: {\n      click: function ($event) {\n        return _vm.open(\"resume\");\n      }\n    }\n  }, [_c(\"i\", {\n    staticClass: \"fa fa-file\"\n  })])])])])])]);\n};\nvar staticRenderFns = [function () {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"div\", {\n    staticClass: \"col-xl-6 col-bg-6 col-md-6 col-sm-12 pbelow\",\n    staticStyle: {\n      color: \"white\"\n    }\n  }, [_c(\"span\", [_vm._v(\"© 2025 Copyright: Gaurav Jain\")])]);\n}];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack:///./src/components/Footer.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%221809fece-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"1809fece-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Home.vue?vue&type=template&id=8dc7cce2&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1809fece-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Home.vue?vue&type=template&id=8dc7cce2&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"div\", {\n    staticClass: \"p-st\",\n    class: {\n      \"bg-white\": !_vm.nightMode,\n      \"bg-dark\": _vm.nightMode\n    }\n  }, [_c(\"div\", {\n    staticClass: \"container\",\n    attrs: {\n      \"data-aos\": \"fade\",\n      \"data-aos-once\": \"true\",\n      \"data-aos-duration\": \"1000\"\n    }\n  }, [_c(\"div\", {\n    staticClass: \"row align-items-center\"\n  }, [_c(\"div\", {\n    staticClass: \"col-xl-6 col-bg-6 col-md-6 col-sm-12 text-center\"\n  }, [_c(\"img\", {\n    attrs: {\n      src: _vm.picture\n    }\n  })]), _c(\"div\", {\n    staticClass: \"col-xl-6 col-bg-6 col-md-6 col-sm-12 pt-5\"\n  }, [_c(\"span\", {\n    staticClass: \"home-title\",\n    class: {\n      pgray: !_vm.nightMode,\n      \"text-light\": _vm.nightMode\n    }\n  }, [_vm._v(\"hello world!\")]), _c(\"div\", [_c(\"p\", {\n    domProps: {\n      innerHTML: _vm._s(_vm.description)\n    }\n  })]), _c(\"div\", {\n    staticClass: \"text-center pb-4\"\n  }, [_c(\"button\", {\n    directives: [{\n      name: \"tooltip\",\n      rawName: \"v-tooltip.bottom\",\n      value: \"Mail\",\n      expression: \"'Mail'\",\n      modifiers: {\n        bottom: true\n      }\n    }],\n    staticClass: \"btn btn-outline-secondary mx-2\",\n    on: {\n      click: function ($event) {\n        return _vm.open(\"gmail\");\n      }\n    }\n  }, [_c(\"i\", {\n    staticClass: \"fas fa-envelope\"\n  })]), _c(\"button\", {\n    directives: [{\n      name: \"tooltip\",\n      rawName: \"v-tooltip.bottom\",\n      value: \"LinkedIn\",\n      expression: \"'LinkedIn'\",\n      modifiers: {\n        bottom: true\n      }\n    }],\n    staticClass: \"btn btn-outline-secondary mx-2\",\n    on: {\n      click: function ($event) {\n        return _vm.open(\"linkedin\");\n      }\n    }\n  }, [_c(\"i\", {\n    staticClass: \"fab fa-linkedin\"\n  })]), _c(\"button\", {\n    directives: [{\n      name: \"tooltip\",\n      rawName: \"v-tooltip.bottom\",\n      value: \"Resume\",\n      expression: \"'Resume'\",\n      modifiers: {\n        bottom: true\n      }\n    }],\n    staticClass: \"btn btn-outline-secondary mx-2\",\n    on: {\n      click: function ($event) {\n        return _vm.open(\"resume\");\n      }\n    }\n  }, [_c(\"i\", {\n    staticClass: \"fa fa-file\"\n  })])])])])])]);\n};\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack:///./src/components/Home.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%221809fece-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"1809fece-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Industries.vue?vue&type=template&id=76e44f2c&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1809fece-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Industries.vue?vue&type=template&id=76e44f2c&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"div\", {\n    staticClass: \"p-st\",\n    class: {\n      \"bg-light\": !_vm.nightMode,\n      \"bg-dark2\": _vm.nightMode,\n      \"text-light\": _vm.nightMode\n    }\n  }, [_c(\"div\", {\n    staticClass: \"container py-4\"\n  }, [_c(\"div\", {\n    staticClass: \"text-center\",\n    attrs: {\n      \"data-aos\": \"fade\",\n      \"data-aos-once\": \"true\",\n      \"data-aos-duration\": \"1000\"\n    }\n  }, [_c(\"span\", {\n    staticClass: \"title text-center\",\n    class: {\n      pgray: !_vm.nightMode,\n      \"text-light\": _vm.nightMode\n    }\n  }, [_vm._v(\"industries.\")])]), _c(\"hr\", {\n    class: {\n      pgray: !_vm.nightMode,\n      \"bg-secondary\": _vm.nightMode\n    },\n    attrs: {\n      width: \"50%\"\n    }\n  }), _c(\"br\"), _c(\"div\", {\n    staticClass: \"row\"\n  }, _vm._l(_vm.industries, function (industry, idx) {\n    return _c(\"div\", {\n      key: industry.title,\n      staticClass: \"col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 text-center pb-5 px-4\",\n      style: {\n        \"transition-delay\": idx / 4.2 + \"s\"\n      },\n      attrs: {\n        \"data-aos\": \"fade-up\",\n        \"data-aos-offset\": \"10\",\n        \"data-aos-delay\": \"30\",\n        \"data-aos-duration\": \"500\",\n        \"data-aos-easing\": \"ease-in-out\",\n        \"data-aos-mirror\": \"true\",\n        \"data-aos-once\": \"true\"\n      }\n    }, [_c(\"div\", {\n      staticClass: \"bg-div\"\n    }, [_c(\"i\", {\n      class: industry.icon\n    })]), _c(\"div\", {\n      staticClass: \"title2 pt-2\"\n    }, [_vm._v(_vm._s(industry.title))]), _c(\"hr\", {\n      class: {\n        pgray: !_vm.nightMode,\n        \"bg-secondary\": _vm.nightMode\n      },\n      attrs: {\n        width: \"50%\"\n      }\n    }), _vm._l(industry.domains, function (d) {\n      return _c(\"span\", {\n        key: d,\n        staticClass: \"mx-1 badge p-2 mb-2\",\n        class: {\n          \"bg-dark\": _vm.nightMode\n        }\n      }, [_vm._v(_vm._s(d) + \" \")]);\n    })], 2);\n  }), 0)])]);\n};\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack:///./src/components/Industries.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%221809fece-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"1809fece-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Navbar.vue?vue&type=template&id=41458b80&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1809fece-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Navbar.vue?vue&type=template&id=41458b80&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"div\", [_c(\"nav\", {\n    staticClass: \"navbar navbar-expand-lg navbar-light fixed-top p-st\",\n    class: {\n      \"bg-light\": !_vm.nightMode,\n      \"navbar-blur\": _vm.navbarConfig.blur,\n      \"bg-dark2\": _vm.nightMode\n    }\n  }, [_c(\"div\", {\n    staticClass: \"container\"\n  }, [_c(\"a\", {\n    staticClass: \"navbar-brand\",\n    attrs: {\n      href: \"/\"\n    },\n    on: {\n      click: function ($event) {\n        $event.preventDefault();\n        return _vm.$emit(\"scroll\", \"home\");\n      }\n    }\n  }, [_c(\"Logo\", {\n    attrs: {\n      nightMode: _vm.nightMode\n    }\n  })], 1), _vm._m(0), _c(\"div\", {\n    staticClass: \"collapse navbar-collapse\",\n    attrs: {\n      id: \"navbarSupportedContent\"\n    }\n  }, [_c(\"ul\", {\n    staticClass: \"navbar-nav ml-auto\"\n  }, [_c(\"li\", {\n    staticClass: \"nav-item mx-2\"\n  }, [_c(\"a\", {\n    staticClass: \"nav-link\",\n    class: {\n      \"text-light\": _vm.nightMode\n    },\n    attrs: {\n      href: \"/about\"\n    },\n    on: {\n      click: function ($event) {\n        $event.preventDefault();\n        return _vm.$emit(\"scroll\", \"about\");\n      }\n    }\n  }, [_vm._v(\"about\")])]), _c(\"li\", {\n    staticClass: \"nav-item mx-2\"\n  }, [_c(\"a\", {\n    staticClass: \"nav-link\",\n    class: {\n      \"text-light\": _vm.nightMode\n    },\n    attrs: {\n      href: \"/skills\"\n    },\n    on: {\n      click: function ($event) {\n        $event.preventDefault();\n        return _vm.$emit(\"scroll\", \"skills\");\n      }\n    }\n  }, [_vm._v(\"skills\")])]), _c(\"li\", {\n    staticClass: \"nav-item mx-2\"\n  }, [_c(\"a\", {\n    staticClass: \"nav-link\",\n    class: {\n      \"text-light\": _vm.nightMode\n    },\n    attrs: {\n      href: \"/industries\"\n    },\n    on: {\n      click: function ($event) {\n        $event.preventDefault();\n        return _vm.$emit(\"scroll\", \"industries\");\n      }\n    }\n  }, [_vm._v(\"industires\")])]), _c(\"li\", {\n    staticClass: \"nav-item mx-2\"\n  }, [_c(\"a\", {\n    staticClass: \"nav-link\",\n    class: {\n      \"text-light\": _vm.nightMode\n    },\n    attrs: {\n      href: \"/portfolio\"\n    },\n    on: {\n      click: function ($event) {\n        $event.preventDefault();\n        return _vm.$emit(\"scroll\", \"portfolio\");\n      }\n    }\n  }, [_vm._v(\"portfolio\")])]), _c(\"li\", {\n    staticClass: \"nav-item ml-2\"\n  }, [_c(\"a\", {\n    staticClass: \"nav-link\",\n    class: {\n      \"text-light\": _vm.nightMode\n    },\n    attrs: {\n      href: \"#\"\n    },\n    on: {\n      click: function ($event) {\n        $event.preventDefault();\n        return _vm.switchMode.apply(null, arguments);\n      }\n    }\n  }, [_c(\"i\", {\n    directives: [{\n      name: \"tooltip\",\n      rawName: \"v-tooltip.bottom\",\n      value: _vm.nightMode ? \"Light Mode\" : \"Night Mode\",\n      expression: \"nightMode ? 'Light Mode' : 'Night Mode'\",\n      modifiers: {\n        bottom: true\n      }\n    }],\n    class: {\n      \"fas fa-moon\": _vm.nightMode,\n      \"far fa-moon\": !_vm.nightMode\n    }\n  })])])])])])])]);\n};\nvar staticRenderFns = [function () {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"button\", {\n    staticClass: \"navbar-toggler\",\n    attrs: {\n      type: \"button\",\n      \"data-toggle\": \"collapse\",\n      \"data-target\": \"#navbarSupportedContent\",\n      \"aria-controls\": \"navbarSupportedContent\",\n      \"aria-expanded\": \"false\",\n      \"aria-label\": \"Toggle navigation\"\n    }\n  }, [_c(\"span\", {\n    staticStyle: {\n      color: \"gray\",\n      \"font-size\": \"23px\"\n    }\n  }, [_c(\"i\", {\n    staticClass: \"fas fa-bars\"\n  })])]);\n}];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack:///./src/components/Navbar.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%221809fece-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"1809fece-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Portfolio.vue?vue&type=template&id=a9a7cd70&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1809fece-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Portfolio.vue?vue&type=template&id=a9a7cd70&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"div\", {\n    staticClass: \"py-4 p-st\",\n    class: {\n      \"bg-white\": !_vm.nightMode,\n      \"bg-dark\": _vm.nightMode\n    }\n  }, [_c(\"div\", {\n    staticClass: \"container\"\n  }, [_c(\"div\", {\n    staticClass: \"text-center\",\n    attrs: {\n      \"data-aos\": \"fade\",\n      \"data-aos-once\": \"true\",\n      \"data-aos-duration\": \"1000\"\n    }\n  }, [_c(\"span\", {\n    staticClass: \"title text-center\",\n    class: {\n      pgray: !_vm.nightMode,\n      \"text-light\": _vm.nightMode\n    }\n  }, [_vm._v(\"portfolio.\")])]), _c(\"hr\", {\n    class: {\n      pgray: !_vm.nightMode,\n      \"bg-secondary\": _vm.nightMode\n    },\n    attrs: {\n      width: \"50%\"\n    }\n  }), _c(\"div\", {\n    staticClass: \"row\"\n  }, _vm._l(_vm.portfolio_info, function (portfolio, idx) {\n    return _c(\"div\", {\n      key: portfolio.name,\n      staticClass: \"col-xl-4 col-bg-4 col-md-6 col-sm-12\"\n    }, [_c(\"Card\", {\n      style: {\n        \"transition-delay\": idx % 3 / 4.2 + \"s\"\n      },\n      attrs: {\n        portfolio: portfolio,\n        \"data-aos\": \"fade-up\",\n        nightMode: _vm.nightMode,\n        \"data-aos-offset\": \"100\",\n        \"data-aos-delay\": \"10\",\n        \"data-aos-duration\": \"500\",\n        \"data-aos-easing\": \"ease-in-out\",\n        \"data-aos-mirror\": \"true\",\n        \"data-aos-once\": \"true\"\n      },\n      on: {\n        show: _vm.showModalFn\n      }\n    })], 1);\n  }), 0), _vm.showBtn !== \"show less\" ? _c(\"div\", {\n    staticClass: \"text-center py-3\"\n  }, [_c(\"button\", {\n    staticClass: \"btn\",\n    on: {\n      click: function ($event) {\n        $event.preventDefault();\n        return _vm.showMore.apply(null, arguments);\n      }\n    }\n  }, [_vm._v(_vm._s(_vm.showBtn))])]) : _vm._e()]), _c(\"transition\", {\n    attrs: {\n      name: \"modal\"\n    }\n  }, [_vm.showModal ? _c(\"Modal\", {\n    attrs: {\n      showModal: _vm.showModal,\n      portfolio: _vm.model_info,\n      nightMode: _vm.nightMode\n    },\n    on: {\n      close: _vm.closeModal\n    }\n  }) : _vm._e()], 1)], 1);\n};\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack:///./src/components/Portfolio.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%221809fece-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"1809fece-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Skills.vue?vue&type=template&id=4cdb3572&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1809fece-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Skills.vue?vue&type=template&id=4cdb3572&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"div\", {\n    staticClass: \"p-st\",\n    class: {\n      \"bg-white\": !_vm.nightMode,\n      \"bg-dark\": _vm.nightMode\n    }\n  }, [_c(\"div\", {\n    staticClass: \"container py-4\"\n  }, [_c(\"div\", {\n    staticClass: \"text-center\",\n    attrs: {\n      \"data-aos\": \"fade\",\n      \"data-aos-once\": \"true\",\n      \"data-aos-duration\": \"1000\"\n    }\n  }, [_c(\"span\", {\n    staticClass: \"title text-center\",\n    class: {\n      pgray: !_vm.nightMode,\n      \"text-light\": _vm.nightMode\n    }\n  }, [_vm._v(\"skills.\")])]), _c(\"hr\", {\n    class: {\n      pgray: !_vm.nightMode,\n      \"bg-secondary\": _vm.nightMode\n    },\n    attrs: {\n      width: \"50%\"\n    }\n  }), _c(\"br\"), _c(\"div\", {\n    staticClass: \"row\"\n  }, _vm._l(_vm.skills, function (skill, idx) {\n    return _c(\"div\", {\n      key: skill.title,\n      staticClass: \"col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 text-center pb-5 px-4\",\n      style: {\n        \"transition-delay\": idx / 4.2 + \"s\"\n      },\n      attrs: {\n        \"data-aos\": \"fade-up\",\n        \"data-aos-offset\": \"10\",\n        \"data-aos-delay\": \"30\",\n        \"data-aos-duration\": \"500\",\n        \"data-aos-easing\": \"ease-in-out\",\n        \"data-aos-mirror\": \"true\",\n        \"data-aos-once\": \"true\"\n      }\n    }, [_c(\"div\", {\n      staticClass: \"bg-div\"\n    }, [_c(\"i\", {\n      class: skill.icon\n    })]), _c(\"div\", {\n      staticClass: \"title2 pt-2\"\n    }, [_vm._v(_vm._s(skill.title))]), _c(\"hr\", {\n      class: {\n        pgray: !_vm.nightMode,\n        \"bg-secondary\": _vm.nightMode\n      },\n      attrs: {\n        width: \"50%\"\n      }\n    }), _vm._l(skill.info, function (s) {\n      return _c(\"span\", {\n        key: s,\n        staticClass: \"mx-1 badge p-2 mb-2\",\n        class: {\n          \"bg-dark2\": _vm.nightMode\n        }\n      }, [_vm._v(_vm._s(s) + \" \")]);\n    })], 2);\n  }), 0)])]);\n};\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack:///./src/components/Skills.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%221809fece-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"1809fece-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/helpers/Card.vue?vue&type=template&id=d909b0ec&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1809fece-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/helpers/Card.vue?vue&type=template&id=d909b0ec&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"div\", {\n    staticClass: \"my-3 mx-3\"\n  }, [_c(\"div\", {\n    staticClass: \"card smcard\",\n    class: {\n      \"pcard-dark\": _vm.nightMode,\n      pcard: !_vm.nightMode,\n      \"bg-dark3\": _vm.nightMode\n    }\n  }, [_c(\"div\", {\n    staticStyle: {\n      height: \"180px\"\n    }\n  }, [_c(\"img\", {\n    staticClass: \"card-img-top\",\n    attrs: {\n      src: _vm.portfolio.pictures[0].img,\n      alt: \"Card image cap\"\n    }\n  })]), _c(\"div\", {\n    staticClass: \"card-body pborder-top\"\n  }, [_c(\"h5\", {\n    staticClass: \"title2\"\n  }, [_vm._v(_vm._s(_vm.portfolio.name))]), _c(\"div\", [_c(\"div\", {\n    staticClass: \"pb-1 bheight\"\n  }, _vm._l(_vm.portfolio.technologies, function (tech) {\n    return _c(\"span\", {\n      key: tech,\n      staticClass: \"badge mr-2 mb-2\",\n      class: {\n        \"bg-dark4\": _vm.nightMode\n      }\n    }, [_vm._v(_vm._s(tech))]);\n  }), 0), _c(\"p\", {\n    staticClass: \"title3 m-0 pb-2 pheight pt-1\",\n    domProps: {\n      innerHTML: _vm._s(_vm.portfolio.description.length > 100 ? _vm.portfolio.description.substring(0, 105) + \"...\" : _vm.portfolio.description)\n    }\n  })]), _c(\"div\", {\n    staticClass: \"text-center mt-2\"\n  }, [_c(\"button\", {\n    staticClass: \"btn-sm btn btn-outline-secondary no-outline\",\n    attrs: {\n      href: \"\"\n    },\n    on: {\n      click: function ($event) {\n        $event.preventDefault();\n        return _vm.showModal.apply(null, arguments);\n      }\n    }\n  }, [_vm._v(\" read more \")]), _vm.portfolio.link ? _c(\"button\", {\n    staticClass: \"btn-sm btn btn-outline-secondary no-outline ml-4\",\n    attrs: {\n      href: \"#\"\n    },\n    on: {\n      click: function ($event) {\n        $event.preventDefault();\n        return _vm.open(_vm.portfolio.link);\n      }\n    }\n  }, [_vm._v(\" visit website \")]) : _vm._e()])])])]);\n};\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack:///./src/components/helpers/Card.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%221809fece-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"1809fece-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/helpers/Logo.vue?vue&type=template&id=0cd2aca5&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1809fece-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/helpers/Logo.vue?vue&type=template&id=0cd2aca5&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"div\", {\n    staticClass: \"logo-div\"\n  }, [_c(\"span\", {\n    staticClass: \"logo-title-name\",\n    class: {\n      pgray: !_vm.nightMode,\n      \"text-light\": _vm.nightMode\n    }\n  }, [_vm._v(_vm._s(_vm.name))]), _c(\"span\", {\n    staticClass: \"logo-title-dot pblue\"\n  }, [_vm._v(_vm._s(_vm.dot))])]);\n};\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack:///./src/components/helpers/Logo.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%221809fece-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"1809fece-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/helpers/Modal.vue?vue&type=template&id=6e79c923&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1809fece-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/helpers/Modal.vue?vue&type=template&id=6e79c923&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"div\", [_c(\"div\", {\n    staticClass: \"modal-mask\"\n  }, [_c(\"div\", {\n    staticClass: \"modal-wrapper\",\n    on: {\n      click: function ($event) {\n        if ($event.target !== $event.currentTarget) return null;\n        return _vm.$emit(\"close\");\n      }\n    }\n  }, [_c(\"div\", {\n    staticClass: \"modal-container\",\n    class: {\n      \"bg-light\": !_vm.nightMode,\n      \"bg-dark\": _vm.nightMode,\n      \"text-light\": _vm.nightMode\n    }\n  }, [_c(\"div\", {\n    staticClass: \"title1 px-4 pt-3\"\n  }, [_c(\"span\", [_c(\"a\", {\n    class: {\n      \"text-light\": _vm.nightMode\n    },\n    attrs: {\n      href: \"#\"\n    },\n    on: {\n      click: function ($event) {\n        $event.preventDefault();\n        return _vm.open(_vm.portfolio.visit);\n      }\n    }\n  }, [_vm._v(_vm._s(_vm.portfolio.name))])]), _c(\"a\", {\n    staticClass: \"pull-right\",\n    staticStyle: {\n      \"font-size\": \"18px\"\n    },\n    on: {\n      click: function ($event) {\n        return _vm.$emit(\"close\");\n      }\n    }\n  }, [_c(\"i\", {\n    staticClass: \"fas fa-times\"\n  })]), _c(\"hr\", {\n    staticClass: \"my-1\",\n    class: {\n      pgray: !_vm.nightMode,\n      \"bg-secondary\": _vm.nightMode\n    }\n  })]), _c(\"div\", {\n    staticClass: \"modal-body my-0 pb-3 px-4 pt-0\"\n  }, [_c(\"div\", {\n    staticClass: \"pb-1 bheight\"\n  }, _vm._l(_vm.portfolio.technologies, function (tech) {\n    return _c(\"span\", {\n      key: tech,\n      staticClass: \"badge mr-2 mb-2\",\n      class: {\n        \"bg-dark4\": _vm.nightMode\n      }\n    }, [_vm._v(_vm._s(tech))]);\n  }), 0), _c(\"div\", {\n    staticStyle: {\n      \"text-align\": \"justify\"\n    }\n  }, [_c(\"span\", {\n    domProps: {\n      innerHTML: _vm._s(_vm.portfolio.description)\n    }\n  })])]), _vm.portfolio.link ? _c(\"div\", {\n    staticClass: \"text-center pb-3\"\n  }, [_c(\"hr\", {\n    staticClass: \"mt-1 mb-3\",\n    class: {\n      pgray: !_vm.nightMode,\n      \"bg-secondary\": _vm.nightMode\n    }\n  }), _c(\"button\", {\n    staticClass: \"btn w-25 mr-3\",\n    on: {\n      click: function ($event) {\n        $event.preventDefault();\n        return _vm.open(_vm.portfolio.link);\n      }\n    }\n  }, [_vm._v(\" Visit \")])]) : _vm._e()])])])]);\n};\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack:///./src/components/helpers/Modal.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%221809fece-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"1809fece-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/helpers/Timeline.vue?vue&type=template&id=1e28818a&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1809fece-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/helpers/Timeline.vue?vue&type=template&id=1e28818a&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"div\", [_c(\"div\", {\n    staticClass: \"mx-3 mt-3 mb-5\"\n  }, [_c(\"div\", {\n    staticClass: \"row\"\n  }, [_c(\"div\", {\n    staticClass: \"col-xl-12 col-bg-12 col-md-12 col-sm-12\"\n  }, [_c(\"p\", {\n    staticClass: \"title1\",\n    attrs: {\n      \"data-aos\": \"fade\",\n      \"data-aos-once\": \"true\",\n      \"data-aos-easing\": \"ease-in-out\",\n      \"data-aos-mirror\": \"true\",\n      \"data-aos-duration\": \"1000\"\n    }\n  }, [_vm._v(\" \" + _vm._s(_vm.data.title) + \" \")]), _vm._l(_vm.data.data, function (e, idx) {\n    return _c(\"ul\", {\n      key: e.name,\n      staticClass: \"timeline m-0 pt-1\",\n      style: {\n        \"transition-delay\": idx / 4.2 + \"s\"\n      },\n      attrs: {\n        \"data-aos\": \"fade-up\",\n        \"data-offset\": \"10\",\n        \"data-aos-once\": \"true\",\n        \"data-aos-easing\": \"ease-in-out\",\n        \"data-aos-mirror\": \"true\",\n        \"data-aos-duration\": \"500\"\n      }\n    }, [_c(\"li\", {\n      staticClass: \"m-0 pb-2\"\n    }, [_c(\"div\", [_c(\"div\", {\n      staticClass: \"px-2 title2\"\n    }, [_vm._v(_vm._s(e.name) + \", \" + _vm._s(e.place))]), _c(\"div\", {\n      staticClass: \"px-2 title3\"\n    }, [_vm._v(\" \" + _vm._s(e.degree || e.position) + \" \" + _vm._s(e.score ? \"(\" + e.score + \")\" : \"\") + \" \")]), _c(\"div\", {\n      staticClass: \"px-2 date\"\n    }, [_vm._v(_vm._s(e.date))]), _c(\"div\", {\n      staticClass: \"px-2 pb-2 pt-2\",\n      staticStyle: {\n        \"text-align\": \"justify\"\n      }\n    }, [_vm._v(\" \" + _vm._s(e.description) + \" \")]), _vm._l(e.skills, function (s) {\n      return _c(\"span\", {\n        key: s,\n        staticClass: \"mx-2 badge p-2 mb-2\",\n        class: {\n          \"bg-dark2\": _vm.nightMode\n        }\n      }, [_vm._v(_vm._s(s))]);\n    }), _c(\"p\", {\n      staticClass: \"m-2\"\n    })], 2)])]);\n  })], 2)])])]);\n};\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack:///./src/components/helpers/Timeline.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%221809fece-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\n#app {\\r\\n  font-family: \\\"Montserrat\\\", sans-serif;\\r\\n  -webkit-font-smoothing: antialiased;\\r\\n  -moz-osx-font-smoothing: grayscale;\\r\\n  color: #2c3e50;\\r\\n  width: 100%;\\n}\\n@media screen and (max-width: 580px) {\\n#app {\\r\\n    width: -moz-fit-content;\\r\\n    width: fit-content;\\n}\\n}\\n.parent {\\r\\n  margin-top: 38px;\\r\\n  padding-top: 40px;\\r\\n  position: relative;\\n}\\n.pgray {\\r\\n  color: #535a5e;\\n}\\n.pblue {\\r\\n  color: #669db3ff;\\n}\\n.bg-dark2 {\\r\\n  background-color: #262c30 !important;\\n}\\n.text-light {\\r\\n  color: #d3d2d2 !important;\\n}\\n.p-st {\\r\\n  transition: all 0.5s !important;\\n}\\r\\n\\r\\n/* To set scrollbar width */\\n::-webkit-scrollbar {\\r\\n  width: 5px;\\n}\\r\\n\\r\\n/* Track */\\n::-webkit-scrollbar-track {\\r\\n  background: #f1f1f1;\\r\\n  border-radius: 9px;\\r\\n  border: 2px solid white; /* Use your background color instead of White */\\r\\n  background-clip: content-box;\\n}\\r\\n\\r\\n/* Handle */\\n::-webkit-scrollbar-thumb {\\r\\n  background: #888;\\r\\n  border-radius: 9px;\\n}\\r\\n\\r\\n/* Handle on hover */\\n::-webkit-scrollbar-thumb:hover {\\r\\n  background: #555;\\n}\\n.tooltip {\\r\\n  display: block !important;\\r\\n  z-index: 10000;\\n}\\n.tooltip .tooltip-inner {\\r\\n  background: rgb(212, 149, 97);\\r\\n  color: white;\\r\\n  border-radius: 8px;\\r\\n  font-size: 10px;\\r\\n  /* padding: 5px 10px 4px; */\\n}\\n.tooltip .tooltip-arrow {\\r\\n  width: 0;\\r\\n  height: 0;\\r\\n  border-style: solid;\\r\\n  position: absolute;\\r\\n  margin: 5px;\\r\\n  border-color: rgb(212, 149, 97);\\r\\n  z-index: 1;\\n}\\n.tooltip[x-placement^=\\\"top\\\"] {\\r\\n  margin-bottom: 5px;\\n}\\n.tooltip[x-placement^=\\\"top\\\"] .tooltip-arrow {\\r\\n  border-width: 5px 5px 0 5px;\\r\\n  border-left-color: transparent !important;\\r\\n  border-right-color: transparent !important;\\r\\n  border-bottom-color: transparent !important;\\r\\n  bottom: -5px;\\r\\n  left: calc(50% - 5px);\\r\\n  margin-top: 0;\\r\\n  margin-bottom: 0;\\n}\\n.tooltip[x-placement^=\\\"bottom\\\"] {\\r\\n  margin-top: 10px;\\n}\\n.tooltip[x-placement^=\\\"bottom\\\"] .tooltip-arrow {\\r\\n  border-width: 0 5px 5px 5px;\\r\\n  border-left-color: transparent !important;\\r\\n  border-right-color: transparent !important;\\r\\n  border-top-color: transparent !important;\\r\\n  top: -5px;\\r\\n  left: calc(50% - 5px);\\r\\n  margin-top: 0;\\r\\n  margin-bottom: 0;\\n}\\n.tooltip[x-placement^=\\\"right\\\"] {\\r\\n  margin-left: 5px;\\n}\\n.tooltip[x-placement^=\\\"right\\\"] .tooltip-arrow {\\r\\n  border-width: 5px 5px 5px 0;\\r\\n  border-left-color: transparent !important;\\r\\n  border-top-color: transparent !important;\\r\\n  border-bottom-color: transparent !important;\\r\\n  left: -5px;\\r\\n  top: calc(50% - 5px);\\r\\n  margin-left: 0;\\r\\n  margin-right: 0;\\n}\\n.tooltip[x-placement^=\\\"left\\\"] {\\r\\n  margin-right: 5px;\\n}\\n.tooltip[x-placement^=\\\"left\\\"] .tooltip-arrow {\\r\\n  border-width: 5px 0 5px 5px;\\r\\n  border-top-color: transparent !important;\\r\\n  border-right-color: transparent !important;\\r\\n  border-bottom-color: transparent !important;\\r\\n  right: -5px;\\r\\n  top: calc(50% - 5px);\\r\\n  margin-left: 0;\\r\\n  margin-right: 0;\\n}\\n.tooltip.popover .popover-inner {\\r\\n  background: #f9f9f9;\\r\\n  color: black;\\r\\n  padding: 24px;\\r\\n  border-radius: 5px;\\r\\n  box-shadow: 0 5px 30px rgba(black, 0.1);\\n}\\n.tooltip.popover .popover-arrow {\\r\\n  border-color: #f9f9f9;\\n}\\n.tooltip[aria-hidden=\\\"true\\\"] {\\r\\n  visibility: hidden;\\r\\n  opacity: 0;\\r\\n  transition: opacity 0.5s, visibility 0.5s;\\n}\\n.tooltip[aria-hidden=\\\"false\\\"] {\\r\\n  visibility: visible;\\r\\n  opacity: 1;\\r\\n  transition: opacity 0.5s;\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/About.vue?vue&type=style&index=0&id=c226fde6&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/About.vue?vue&type=style&index=0&id=c226fde6&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\n.title[data-v-c226fde6] {\\r\\n  font-size: 30px;\\r\\n  font-weight: 500;\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/About.vue?./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Footer.vue?vue&type=style&index=0&id=40ab164b&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Footer.vue?vue&type=style&index=0&id=40ab164b&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\nspan[data-v-40ab164b] {\\r\\n  font-weight: 500;\\n}\\n.btn[data-v-40ab164b] {\\r\\n  border-color: white;\\r\\n  color: white;\\n}\\n.btn[data-v-40ab164b]:hover {\\r\\n  background-color: white;\\r\\n  border-color: white;\\r\\n  color: gray;\\n}\\n.btn[data-v-40ab164b]:focus {\\r\\n  background-color: white;\\r\\n  border-color: white;\\r\\n  color: gray;\\n}\\n@media screen and (max-width: 580px) {\\n.pbelow[data-v-40ab164b] {\\r\\n    padding-bottom: 20px;\\r\\n    text-align: center;\\n}\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/Footer.vue?./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Home.vue?vue&type=style&index=0&id=8dc7cce2&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Home.vue?vue&type=style&index=0&id=8dc7cce2&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\n.home-title[data-v-8dc7cce2] {\\r\\n  font-size: 28px;\\r\\n  font-weight: 500;\\n}\\nimg[data-v-8dc7cce2] {\\r\\n  max-width: 300px;\\r\\n  margin-top: 60px;\\r\\n  transform: rotateY(180deg);\\n}\\n@media only screen and (max-width: 580px) {\\nimg[data-v-8dc7cce2] {\\r\\n    -o-object-fit: cover;\\r\\n       object-fit: cover;\\r\\n    border-radius: 50%;\\r\\n    height: 200px;\\r\\n    width: 200px;\\r\\n    margin-top: 10px;\\r\\n    margin-bottom: 10px;\\r\\n    border: 2px solid rgb(205, 205, 205);\\n}\\n}\\n.fa[data-v-8dc7cce2] {\\r\\n  font-size: 15px;\\n}\\n.btn[data-v-8dc7cce2] {\\r\\n  border-color: #669db3ff;\\r\\n  color: #669db3ff;\\n}\\n.btn[data-v-8dc7cce2]:hover {\\r\\n  background-color: #669db3ff;\\r\\n  border-color: #669db3ff;\\r\\n  color: white;\\n}\\n.btn[data-v-8dc7cce2]:focus {\\r\\n  background-color: #669db3ff;\\r\\n  border-color: #669db3ff;\\r\\n  color: white;\\n}\\n.btn[data-v-8dc7cce2]:focus {\\r\\n  outline: none !important;\\n}\\np[data-v-8dc7cce2] {\\r\\n  text-align: justify;\\r\\n  font-weight: 400;\\n}\\r\\n\\r\\n/* LEAVES */\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/Home.vue?./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Industries.vue?vue&type=style&index=0&id=76e44f2c&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Industries.vue?vue&type=style&index=0&id=76e44f2c&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\n.title[data-v-76e44f2c] {\\r\\n  font-size: 30px;\\r\\n  font-weight: 500;\\n}\\n.title1[data-v-76e44f2c] {\\r\\n  font-size: 24px;\\r\\n  font-weight: 400;\\n}\\n.title2[data-v-76e44f2c] {\\r\\n  font-size: 20px;\\r\\n  font-weight: 500;\\n}\\n.title3[data-v-76e44f2c] {\\r\\n  font-size: 16px;\\r\\n  font-weight: 400;\\n}\\n.badge[data-v-76e44f2c] {\\r\\n  background-color: #d3e3e9;\\r\\n  transition: all 0.5s;\\r\\n  font-weight: 500;\\n}\\n.bg-dark2[data-v-76e44f2c] {\\r\\n  background-color: #2f3132 !important;\\n}\\n.fa[data-v-76e44f2c] {\\r\\n  color: rgb(212, 149, 97);\\r\\n  font-size: 40px;\\r\\n  transition: all 0.5s;\\n}\\n.fas[data-v-76e44f2c] {\\r\\n  color: rgb(212, 149, 97);\\r\\n  font-size: 40px;\\r\\n  /* font-weight: bold; */\\r\\n  transition: all 0.5s;\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/Industries.vue?./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Navbar.vue?vue&type=style&index=0&id=41458b80&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Navbar.vue?vue&type=style&index=0&id=41458b80&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\n.nav-link[data-v-41458b80] {\\r\\n  font-weight: 500;\\n}\\nbutton[data-v-41458b80] {\\r\\n  border: none;\\r\\n  outline: none;\\n}\\nbutton[data-v-41458b80]:hover {\\r\\n  border: none;\\r\\n  outline: none;\\n}\\nnav[data-v-41458b80] {\\r\\n  border-bottom: 1px solid rgba(160, 159, 159, 0.336);\\r\\n  position: fixed !important;\\n}\\n.navbar-blur[data-v-41458b80] {\\r\\n  background-color: #ffffff7e;\\r\\n  backdrop-filter: blur(12px);\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/Navbar.vue?./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Portfolio.vue?vue&type=style&index=0&id=a9a7cd70&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Portfolio.vue?vue&type=style&index=0&id=a9a7cd70&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\n.title[data-v-a9a7cd70] {\\r\\n  font-size: 30px;\\r\\n  font-weight: 500;\\n}\\n.title1[data-v-a9a7cd70] {\\r\\n  font-size: 24px;\\r\\n  font-weight: 400;\\n}\\n.title2[data-v-a9a7cd70] {\\r\\n  font-size: 20px;\\r\\n  font-weight: 400;\\n}\\n.title3[data-v-a9a7cd70] {\\r\\n  font-size: 16px;\\r\\n  font-weight: 400;\\n}\\n.modal-enter[data-v-a9a7cd70] {\\r\\n  opacity: 0;\\n}\\n.modal-leave-active[data-v-a9a7cd70] {\\r\\n  opacity: 0;\\n}\\n.modal-enter .modal-container[data-v-a9a7cd70],\\r\\n.modal-leave-active .modal-container[data-v-a9a7cd70] {\\r\\n  transform: scale(1.1);\\n}\\n.btn[data-v-a9a7cd70] {\\r\\n  border-color: rgb(212, 149, 97);\\r\\n  color: rgb(212, 149, 97);\\n}\\n.btn[data-v-a9a7cd70]:hover {\\r\\n  background-color: rgb(212, 149, 97);\\r\\n  border-color: rgb(212, 149, 97);\\r\\n  color: white;\\n}\\n.btn[data-v-a9a7cd70]:focus {\\r\\n  background-color: rgb(212, 149, 97);\\r\\n  border-color: rgb(212, 149, 97);\\r\\n  color: white;\\n}\\n[data-v-a9a7cd70] .vue-tabs .nav-tabs {\\r\\n  border: none;\\r\\n  font-size: 20px;\\r\\n  font-weight: 500;\\r\\n  display: flex;\\r\\n\\r\\n  justify-content: center;\\n}\\n[data-v-a9a7cd70] .vue-tabs .tabs__link {\\r\\n  color: #a0a0a0;\\n}\\n[data-v-a9a7cd70] .vue-tabs .nav-tabs > li.active > a {\\r\\n  background: transparent;\\r\\n  border: none;\\r\\n  transition: all 0.5s;\\r\\n  padding-right: 0;\\r\\n  padding-left: 0;\\r\\n  margin-right: 15px;\\r\\n  margin-left: 15px;\\n}\\n[data-v-a9a7cd70] .vue-tabs .nav-tabs > li > a:hover {\\r\\n  background: transparent;\\r\\n  color: #cbcbcb;\\r\\n  transition: all 0.5s;\\n}\\n[data-v-a9a7cd70] .vue-tabs .nav-tabs > li > a {\\r\\n  background: transparent;\\r\\n  border: none;\\r\\n  transition: all 0.5s;\\n}\\n[data-v-a9a7cd70] .vue-tabs .nav-tabs > li > a:after {\\r\\n  content: \\\"\\\";\\r\\n  width: 20%;\\r\\n  position: absolute;\\r\\n  bottom: 3px;\\r\\n  border-width: 0 0 2px;\\r\\n  border-style: solid;\\r\\n  transition: all 0.5s;\\n}\\n[data-v-a9a7cd70] .vue-tabs .nav-tabs > li.active > a:after {\\r\\n  width: 100%;\\r\\n  transition: all 0.5s;\\n}\\n.design-img[data-v-a9a7cd70] {\\r\\n  width: 100%;\\r\\n  border-radius: 15px;\\r\\n  transition: all 0.5s;\\n}\\n.dimg[data-v-a9a7cd70] {\\r\\n  position: relative;\\r\\n  border-radius: 15px;\\n}\\n.middle[data-v-a9a7cd70] {\\r\\n  transition: all 0.5s;\\r\\n  opacity: 0;\\r\\n  position: absolute;\\r\\n  bottom: 0px;\\r\\n  left: 70px;\\r\\n  transform: translate(-50%, -50%);\\r\\n  -ms-transform: translate(-50%, -50%);\\r\\n  text-align: center;\\r\\n  padding: 20px;\\n}\\n.dimg:hover .design-img[data-v-a9a7cd70] {\\r\\n  position: relative;\\r\\n  border-radius: 15px;\\r\\n  opacity: 0.1;\\r\\n  cursor: pointer;\\n}\\n.dimg:hover .middle[data-v-a9a7cd70] {\\r\\n  opacity: 1;\\n}\\n[data-v-a9a7cd70] .vueperslide {\\r\\n  border-radius: 10px !important;\\n}\\n[data-v-a9a7cd70] .vueperslides__parallax-wrapper {\\r\\n  border-radius: 10px !important;\\n}\\n.btn[data-v-a9a7cd70] {\\r\\n  border-color: #669db3ff;\\r\\n  color: #669db3ff;\\n}\\n.btn[data-v-a9a7cd70]:hover {\\r\\n  background-color: #669db3ff;\\r\\n  border-color: #669db3ff;\\r\\n  color: white;\\n}\\n.btn[data-v-a9a7cd70]:focus {\\r\\n  background-color: #669db3ff;\\r\\n  border-color: #669db3ff;\\r\\n  color: white;\\n}\\n[data-v-a9a7cd70] .vueperslides__arrow {\\r\\n  outline: none !important;\\r\\n  border: none;\\r\\n  color: grey;\\n}\\n.badge[data-v-a9a7cd70] {\\r\\n  background-color: rgb(211, 227, 233);\\r\\n  transition: all 0.5s;\\r\\n  font-weight: 500;\\r\\n  font-size: 13px;\\n}\\n.bg-dark4[data-v-a9a7cd70] {\\r\\n  background-color: #494e55 !important;\\n}\\n.date[data-v-a9a7cd70] {\\r\\n  font-size: 14px;\\r\\n  font-weight: 400;\\r\\n  opacity: 0.75\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/Portfolio.vue?./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Skills.vue?vue&type=style&index=0&id=4cdb3572&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Skills.vue?vue&type=style&index=0&id=4cdb3572&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\n.title[data-v-4cdb3572] {\\r\\n  font-size: 30px;\\r\\n  font-weight: 500;\\n}\\n.title1[data-v-4cdb3572] {\\r\\n  font-size: 24px;\\r\\n  font-weight: 400;\\n}\\n.title2[data-v-4cdb3572] {\\r\\n  font-size: 20px;\\r\\n  font-weight: 500;\\n}\\n.title3[data-v-4cdb3572] {\\r\\n  font-size: 16px;\\r\\n  font-weight: 400;\\n}\\n.badge[data-v-4cdb3572] {\\r\\n  background-color: #d3e3e9;\\r\\n  transition: all 0.5s;\\r\\n  font-weight: 500;\\n}\\n.bg-dark2[data-v-4cdb3572] {\\r\\n  background-color: #3c4148 !important;\\n}\\n.fa[data-v-4cdb3572] {\\r\\n  color: rgb(212, 149, 97);\\r\\n  font-size: 40px;\\r\\n  transition: all 0.5s;\\n}\\n.fas[data-v-4cdb3572] {\\r\\n  color: rgb(212, 149, 97);\\r\\n  font-size: 40px;\\r\\n  /* font-weight: bold; */\\r\\n  transition: all 0.5s;\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/Skills.vue?./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/helpers/Card.vue?vue&type=style&index=0&id=d909b0ec&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/helpers/Card.vue?vue&type=style&index=0&id=d909b0ec&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\nimg[data-v-d909b0ec] {\\r\\n  border-top-left-radius: 7px;\\r\\n  border-top-right-radius: 7px;\\r\\n  max-width: 100%;\\r\\n  max-height: 100%;\\r\\n  -o-object-fit: cover;\\r\\n     object-fit: cover;\\n}\\n.img-div img[data-v-d909b0ec] {\\r\\n  /* object-fit: cover;\\r\\n    overflow: hidden; */\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n  display: block;\\r\\n  /* object-position: 50% 120%;\\r\\n    max-width: 300px !important; */\\n}\\n.bheight[data-v-d909b0ec] {\\r\\n  height: 65px;\\r\\n  overflow: auto;\\n}\\n.pheight[data-v-d909b0ec] {\\r\\n  height: 110px;\\r\\n  max-height: 130px;\\r\\n  overflow: auto;\\r\\n  text-align: justify;\\n}\\ndiv.img-div[data-v-d909b0ec] {\\r\\n  position: absolute;\\r\\n  width: 100%;\\r\\n  height: 100%;\\n}\\n.pborder-top[data-v-d909b0ec] {\\r\\n  border-top: 1px solid rgb(193, 193, 193);\\n}\\n.pcard[data-v-d909b0ec] {\\r\\n  background-color: rgb(255, 255, 255);\\r\\n  border-radius: 7px;\\r\\n  border: none;\\r\\n  box-shadow: 1px 1px 12px rgb(233, 233, 233);\\r\\n  transition: all 0.5s;\\r\\n  height: auto;\\n}\\n.pcard[data-v-d909b0ec]:hover {\\r\\n  transition: all 0.5s;\\r\\n  /* cursor: pointer; */\\r\\n  box-shadow: 1px 1px 15px rgb(216, 216, 216);\\n}\\n.pcard-dark[data-v-d909b0ec] {\\r\\n  border-radius: 7px;\\r\\n  border: none;\\r\\n  background-color: #30363a !important;\\r\\n  /* box-shadow: 1px 1px 12px rgb(53, 53, 53); */\\r\\n  transition: all 0.5s;\\r\\n  height: auto;\\n}\\n.pcard-dark[data-v-d909b0ec]:hover {\\r\\n  transition: all 0.5s;\\r\\n  /* cursor: pointer; */\\r\\n  box-shadow: 1px 1px 12px rgb(53, 53, 53);\\n}\\n.pcard-body[data-v-d909b0ec] {\\r\\n  border-top: 1px solid rgb(220, 220, 220);\\r\\n  z-index: -1;\\r\\n  background-color: rgb(253, 254, 255);\\n}\\n.title[data-v-d909b0ec] {\\r\\n  font-size: 30px;\\r\\n  font-weight: 500;\\n}\\n.title1[data-v-d909b0ec] {\\r\\n  font-size: 24px;\\r\\n  font-weight: 400;\\n}\\n.title2[data-v-d909b0ec] {\\r\\n  font-size: 20px;\\r\\n  font-weight: 400;\\n}\\n.title3[data-v-d909b0ec] {\\r\\n  font-size: 16px;\\r\\n  font-weight: 400;\\n}\\n.badge[data-v-d909b0ec] {\\r\\n  background-color: rgb(211, 227, 233);\\r\\n  transition: all 0.5s;\\r\\n  font-weight: 500;\\r\\n  font-size: 13px;\\n}\\n.btn[data-v-d909b0ec] {\\r\\n  border-color: #669db3ff;\\r\\n  color: #669db3ff;\\n}\\n.btn[data-v-d909b0ec]:hover {\\r\\n  background-color: #669db3ff;\\r\\n  border-color: #669db3ff;\\r\\n  color: white;\\n}\\n.btn[data-v-d909b0ec]:focus {\\r\\n  background-color: #669db3ff;\\r\\n  border-color: #669db3ff;\\r\\n  color: white;\\n}\\n.bg-dark3[data-v-d909b0ec] {\\r\\n  background-color: rgb(82, 82, 82);\\n}\\n.bg-dark4[data-v-d909b0ec] {\\r\\n  background-color: #494e55 !important;\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/helpers/Card.vue?./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/helpers/Logo.vue?vue&type=style&index=0&id=0cd2aca5&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/helpers/Logo.vue?vue&type=style&index=0&id=0cd2aca5&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\n.logo-div:hover .logo-title-name[data-v-0cd2aca5] {\\r\\n  letter-spacing: 0px;\\r\\n  transition: 0.5s all;\\n}\\n.logo-title-name[data-v-0cd2aca5] {\\r\\n  font-size: 35px;\\r\\n  font-weight: 500;\\r\\n  letter-spacing: 2px;\\r\\n  transition: 0.5s all;\\n}\\n.logo-title-dot[data-v-0cd2aca5] {\\r\\n  font-size: 30px;\\r\\n  font-weight: 700;\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/helpers/Logo.vue?./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/helpers/Modal.vue?vue&type=style&index=0&id=6e79c923&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/helpers/Modal.vue?vue&type=style&index=0&id=6e79c923&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\nbody.modal-open[data-v-6e79c923] {\\r\\n  overflow: hidden;\\n}\\na[data-v-6e79c923] {\\r\\n  text-decoration: none;\\r\\n  color: black;\\r\\n  transition: all 0.2s;\\r\\n  cursor: pointer;\\n}\\na[data-v-6e79c923]:hover {\\r\\n  transition: all 0.2s;\\r\\n  color: gray;\\n}\\n.date[data-v-6e79c923] {\\r\\n  font-size: 14px;\\r\\n  font-weight: 400;\\n}\\n.modal-mask[data-v-6e79c923] {\\r\\n  position: fixed;\\r\\n  z-index: 9998;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  background-color: rgba(0, 0, 0, 0.5);\\r\\n  transition: opacity 0.5s ease;\\n}\\n.modal-wrapper[data-v-6e79c923] {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\n}\\n.modal-container[data-v-6e79c923] {\\r\\n  width: 40%;\\r\\n  max-height: 70%;\\r\\n  margin: 0px auto;\\r\\n  border-radius: 7px;\\r\\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);\\r\\n  transition: all 0.3s ease;\\r\\n  flex-direction: column;\\r\\n  display: flex; /*added*/\\n}\\n@media screen and (max-width: 1600px) {\\n.modal-container[data-v-6e79c923] {\\r\\n    width: 60%;\\n}\\n}\\n@media screen and (max-width: 1200px) {\\n.modal-container[data-v-6e79c923] {\\r\\n    width: 80%;\\n}\\n}\\n@media screen and (max-width: 580px) {\\n.modal-container[data-v-6e79c923] {\\r\\n    width: 90%;\\n}\\n}\\n.modal-body[data-v-6e79c923] {\\r\\n  margin: 20px 0;\\r\\n  overflow-y: scroll;\\r\\n  max-height: inherit;\\n}\\n.modal-enter[data-v-6e79c923] {\\r\\n  opacity: 0;\\n}\\n.modal-leave-active[data-v-6e79c923] {\\r\\n  opacity: 0;\\n}\\n.modal-enter .modal-container[data-v-6e79c923],\\r\\n.modal-leave-active .modal-container[data-v-6e79c923] {\\r\\n  transform: scale(1.1);\\n}\\n.title[data-v-6e79c923] {\\r\\n  font-size: 30px;\\r\\n  font-weight: 500;\\n}\\n.title1[data-v-6e79c923] {\\r\\n  font-size: 24px;\\r\\n  font-weight: 400;\\n}\\n.title2[data-v-6e79c923] {\\r\\n  font-size: 20px;\\r\\n  font-weight: 400;\\n}\\n.title3[data-v-6e79c923] {\\r\\n  font-size: 16px;\\r\\n  font-weight: 400;\\n}\\n.badge[data-v-6e79c923] {\\r\\n  background-color: rgb(211, 227, 233);\\r\\n  transition: all 0.5s;\\r\\n  font-weight: 500;\\n}\\n.badge[data-v-6e79c923]:hover {\\r\\n  transition: all 0.5s;\\r\\n  box-shadow: 2px 2px 5px rgb(179, 179, 179);\\n}\\n.btn[data-v-6e79c923] {\\r\\n  border-color: #669db3ff;\\r\\n  color: #669db3ff;\\n}\\n.btn[data-v-6e79c923]:hover {\\r\\n  background-color: #669db3ff;\\r\\n  border-color: #669db3ff;\\r\\n  color: white;\\n}\\n.btn[data-v-6e79c923]:focus {\\r\\n  background-color: #669db3ff;\\r\\n  border-color: #669db3ff;\\r\\n  color: white;\\n}\\n.bg-dark4[data-v-6e79c923] {\\r\\n  background-color: #494e55 !important;\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/helpers/Modal.vue?./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/helpers/Timeline.vue?vue&type=style&index=0&id=1e28818a&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/helpers/Timeline.vue?vue&type=style&index=0&id=1e28818a&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\n.title1[data-v-1e28818a] {\\r\\n  font-size: 24px;\\r\\n  font-weight: 500;\\n}\\n.title2[data-v-1e28818a] {\\r\\n  font-size: 20px;\\r\\n  font-weight: 400;\\n}\\n.title3[data-v-1e28818a] {\\r\\n  font-size: 16px;\\r\\n  font-weight: 400;\\n}\\n.badge[data-v-1e28818a] {\\r\\n  background-color: rgb(211, 227, 233);\\r\\n  transition: all 0.5s;\\r\\n  font-weight: 500;\\n}\\n.date[data-v-1e28818a] {\\r\\n  font-size: 14px;\\r\\n  font-weight: 300;\\n}\\nul.timeline[data-v-1e28818a] {\\r\\n  list-style-type: none;\\r\\n  position: relative;\\n}\\nul.timeline[data-v-1e28818a]:before {\\r\\n  content: \\\" \\\";\\r\\n  background: #d4d9df;\\r\\n  display: inline-block;\\r\\n  position: absolute;\\r\\n  left: 29px;\\r\\n  width: 2px;\\r\\n  height: 93%;\\r\\n  margin-top: 20px;\\r\\n  z-index: 400;\\n}\\nul.timeline > li[data-v-1e28818a] {\\r\\n  margin: 20px 0;\\r\\n  padding-left: 20px;\\n}\\nul.timeline > li[data-v-1e28818a]:before {\\r\\n  content: \\\" \\\";\\r\\n  background: rgb(212, 149, 97);\\r\\n  display: inline-block;\\r\\n  position: absolute;\\r\\n  border-radius: 50%;\\r\\n  border: 2px solid rgb(236, 159, 117);\\r\\n  left: 20px;\\r\\n  width: 20px;\\r\\n  height: 20px;\\r\\n  z-index: 400;\\n}\\n.bg-dark2[data-v-1e28818a] {\\r\\n  background-color: #3c4148 !important;\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/helpers/Timeline.vue?./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"36b1a43f\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/About.vue?vue&type=style&index=0&id=c226fde6&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/About.vue?vue&type=style&index=0&id=c226fde6&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=style&index=0&id=c226fde6&scoped=true&lang=css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/About.vue?vue&type=style&index=0&id=c226fde6&scoped=true&lang=css\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"339ae90a\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/About.vue?./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Footer.vue?vue&type=style&index=0&id=40ab164b&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Footer.vue?vue&type=style&index=0&id=40ab164b&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=style&index=0&id=40ab164b&scoped=true&lang=css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Footer.vue?vue&type=style&index=0&id=40ab164b&scoped=true&lang=css\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"648d0520\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/Footer.vue?./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Home.vue?vue&type=style&index=0&id=8dc7cce2&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Home.vue?vue&type=style&index=0&id=8dc7cce2&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=8dc7cce2&scoped=true&lang=css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Home.vue?vue&type=style&index=0&id=8dc7cce2&scoped=true&lang=css\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"685e5cdb\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/Home.vue?./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Industries.vue?vue&type=style&index=0&id=76e44f2c&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Industries.vue?vue&type=style&index=0&id=76e44f2c&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Industries.vue?vue&type=style&index=0&id=76e44f2c&scoped=true&lang=css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Industries.vue?vue&type=style&index=0&id=76e44f2c&scoped=true&lang=css\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"5b8da15e\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/Industries.vue?./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Navbar.vue?vue&type=style&index=0&id=41458b80&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Navbar.vue?vue&type=style&index=0&id=41458b80&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=style&index=0&id=41458b80&scoped=true&lang=css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Navbar.vue?vue&type=style&index=0&id=41458b80&scoped=true&lang=css\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"323322aa\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/Navbar.vue?./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Portfolio.vue?vue&type=style&index=0&id=a9a7cd70&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Portfolio.vue?vue&type=style&index=0&id=a9a7cd70&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Portfolio.vue?vue&type=style&index=0&id=a9a7cd70&scoped=true&lang=css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Portfolio.vue?vue&type=style&index=0&id=a9a7cd70&scoped=true&lang=css\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"ed8ae3a0\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/Portfolio.vue?./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Skills.vue?vue&type=style&index=0&id=4cdb3572&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Skills.vue?vue&type=style&index=0&id=4cdb3572&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Skills.vue?vue&type=style&index=0&id=4cdb3572&scoped=true&lang=css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Skills.vue?vue&type=style&index=0&id=4cdb3572&scoped=true&lang=css\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"e664abf8\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/Skills.vue?./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/helpers/Card.vue?vue&type=style&index=0&id=d909b0ec&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/helpers/Card.vue?vue&type=style&index=0&id=d909b0ec&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Card.vue?vue&type=style&index=0&id=d909b0ec&scoped=true&lang=css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/helpers/Card.vue?vue&type=style&index=0&id=d909b0ec&scoped=true&lang=css\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"0bd43cb9\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/helpers/Card.vue?./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/helpers/Logo.vue?vue&type=style&index=0&id=0cd2aca5&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/helpers/Logo.vue?vue&type=style&index=0&id=0cd2aca5&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Logo.vue?vue&type=style&index=0&id=0cd2aca5&scoped=true&lang=css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/helpers/Logo.vue?vue&type=style&index=0&id=0cd2aca5&scoped=true&lang=css\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"efb51ffc\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/helpers/Logo.vue?./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/helpers/Modal.vue?vue&type=style&index=0&id=6e79c923&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/helpers/Modal.vue?vue&type=style&index=0&id=6e79c923&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=style&index=0&id=6e79c923&scoped=true&lang=css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/helpers/Modal.vue?vue&type=style&index=0&id=6e79c923&scoped=true&lang=css\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"310ddc15\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/helpers/Modal.vue?./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/helpers/Timeline.vue?vue&type=style&index=0&id=1e28818a&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/helpers/Timeline.vue?vue&type=style&index=0&id=1e28818a&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Timeline.vue?vue&type=style&index=0&id=1e28818a&scoped=true&lang=css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/helpers/Timeline.vue?vue&type=style&index=0&id=1e28818a&scoped=true&lang=css\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"1edf082e\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/helpers/Timeline.vue?./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90 */ \"./src/App.vue?vue&type=template&id=7ba5bd90\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./src/App.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css */ \"./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=js":
/*!*********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js??ref--12-0!../node_modules/babel-loader/lib!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css":
/*!*****************************************************************!*\
  !*** ./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader??ref--6-oneOf-1-0!../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90":
/*!***************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \***************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1809fece_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"1809fece-vue-loader-template\"}!../node_modules/cache-loader/dist/cjs.js??ref--12-0!../node_modules/babel-loader/lib!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=7ba5bd90 */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"1809fece-vue-loader-template\\\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1809fece_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1809fece_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/assets/portfolio/acuitey.png":
/*!******************************************!*\
  !*** ./src/assets/portfolio/acuitey.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/acuitey.419b7a17.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/acuitey.png?");

/***/ }),

/***/ "./src/assets/portfolio/adoredvintage.png":
/*!************************************************!*\
  !*** ./src/assets/portfolio/adoredvintage.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/adoredvintage.34a95f7c.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/adoredvintage.png?");

/***/ }),

/***/ "./src/assets/portfolio/allpha.png":
/*!*****************************************!*\
  !*** ./src/assets/portfolio/allpha.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/allpha.fbe6f3bf.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/allpha.png?");

/***/ }),

/***/ "./src/assets/portfolio/aqualogica.png":
/*!*********************************************!*\
  !*** ./src/assets/portfolio/aqualogica.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATwAAADpCAYAAAC5gYsuAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAypSURBVHhe7dt5bNf1HcfxH96N0zkyJx5xWTymc0anMZnsiFvcMueibuiMOt1iHEdLS/EAJwqCqCAqU1ARRUSYQhZP5JJLRVGQ/n7tr/21/fU+6EELtPT6/Xq+ls/nR2l/FbdsSzT2/Xz8I7/j+/39atJnPlcDAgAjAkOfAIDhiuABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4A0z20vbtGRb49CnvzIPranVMalZ/nsBXzWCN8xkrKzSyXeGtL+9Z+hLSbp6+tQSS35Pb1/yv3v7Bj0x6PnBz8a7+9Qe7x70TLJ/F7yKxrjiXb1Dn05yoKNHLbFedff2+e/T4/879F2f565rjX/+3u7aoT837CB4w8jupi59+85sBTJKtWDznqEve3sOdGnm6lr9fF5U338gV7curdLO8ja9H23RmEUlCu+OqaOzV399pUKPbahLurahpVu3v1ymv2+q949dPMYtr9Clcyv0erAp6b39vih4O8radOa0Qs1eW5v0fL+c6naNXVGts6bl6pz7c/Wr+VFdv6hUVz9Trimv71asq1eL3m/QXf+sVmf3QAGj9TGlvVals6bl6fzpeRqzuELLtu/1gXfezm7SOTOKNHlVlY8ibCF4w8jDa+sUGLtLR03M0yWz89U85Bc6r6ZDF8+O+iBePrdQqa9W6qLZhRo5OaTLHo0qMC6o9/JbfAhOygzpt08XJ11f1hjXCRlBjXmuxD9ui/dq1uoafe+BIo0YF9KGyIGk9zuHC17F3k6dPyNfgYwSjRgf1PJP9iZds624VSMnh3XE+KCufbZENzxfquPTgwpkVmjUlDxlrqrywbt6QbFOzAj5QDvr85p1yj25CqTl63cLi3XLkjKdOiXXf86c9Yl4r8lt1q+fLlcgvUhjX6lI+lwMfwRvmNjf3q0zpuToisejenxDnf+lf23n/kOvu6ngVU8VKZBWoAVbGv1jJ97dqwdX1yiQlqejJ2RpS2GLn/KdPiVHfzgYtn4uVKPuztYtL5b5x/0z3rrmuB+FXTQr8rlpZH/wPi5p9Y+bO7r1k7mFSskIa+Vn+3Tl/CKlTMrX1sJELNs7e3XZIwU6cXKeth+8xsmqbNeZ9xVo9Jz8QyO6654t0elTwn6kWX+gS2fel6+TpxRobe5AeBtbupT6apX+sWPg/4Vz31s1CkwIa8vBz4UNBG+YeP7DBj9qWfFpYvrmRjqXP1pwaL0rWNWuI8ft0h3Lyode6l2/qESB1Nz/Knj92uI9uunFcj8CW/lZclj6g7ejvM1/l1teKPHRfW3nPv96xd64zpleqNOm5qlqX6eK6mMKpEb0yGGmunPX1ykwbpd2VrT7x4ng5fh/r9ixX4H0Yq08eN//5NUd+/z73UjwMEuVGKYI3jDgRjwXzszz61bdBwdYM/2oLf/QNNOFIDAuS6uGBKnfgi17FJiQq00FXxy8yn1dOvWe5OC9nd2s82YV67SpEZ0ytVCj5xQc+g5Of/DcdHprtNV/p4fWJK8N7ixrVUpGnia+WuXf594zNJzO0o8bFRibpY35Lf6xC94ZU8M+WNPe2q2jJwS1u6lz6GVJShvi+v1zJUqZmKVzZ0R1bGpQ24o/v6GC4YngDQNvBJsUmFioaW/W+NGWW7v7tKxNKelhXftMYh3unZwmBcaHtPjDwx9ZeXRdnQ/e5kPBC+uPi5NHcpX7OjUyM6hbX0o8/+K2Rh2TUaCrFparpCGm595v8LF6K7v50DUueMelBZVd1a7Za2p9dOsOdA26a8IV8wp14cyIovVxfeeuHN24ODm2zjULi3TGlLD2tiZ2hfuD57h7HzEhR4V1sSFXDSjaE9N5MyJ+3c9tspQ2xHRCRsiPbmEDwfuac7MxvzaXWe53NC+dHdHFsyJ+08JtYByXHlZeTUyNrd36VmZIF83KV2NrcnDqmrt0wYyIRozP9lPajq4+nTE1R794Ipr0PvfaiLSI7ji42O8+z63b9XNTabeW97N5A9fNejcRvPDuDs3fWO+ns25HeDC3AXHe9Ij/bh1dvZq3IfE+t6kSqe1QYX3MH7cJTCrVlU8O3Lt/Dc/5oKjVR3/s8qpBd04o39upfW3deujdWr9uN/jzZ7xTqyNSw/77YfgjeF9zbjF/xPiQfjS7QH9aUu53NG9YVKobF5dqzKJSHw53xMTxa2CTSjX6sSJ9WNTqR0Mb8w/4kVVgYlQpaUE/BXZTRLe2FUiL6MmNdYrUxvzO6SWzC/w63djlifv98MGITr834keTNU1dyqps8+Fyu8DzN+3xR2DcyOvI8buUXd3hj4yckBnW2dML/Oe6awrqYrptaaXfSX1iY+IoTU+vNPPdOp0wKVcpE4N+FPbdv4V14axCP219PZiY7l7zTIlG3Z3jQ+vWB29+oVSByVW6bWmFH1EW1HVoTbhZ504v0Jx1dVq4tcH/nPM21PnRaklDXJmrqhW4q1ZXL3BHcojecEfwvubcetqxE8PK/YJf1l8+EdVxaSEV74mpt7dPD7xdo6NScxQYF9JJk0IKjM/WTx8r1O3LynVsapZW5ySmo7sq2/WDmVG/EfKN9JBS0rI0em5UI+8M688Hp7Tv5DTrlKn5SknP0dn35/kw/XhOVL95qliBSWX+vN/TWxp09PiBYylvhZo0amqBjpiQrbOn5eqkzBw/6nJn69wh5sFctBZu3aNFHzT4DY3a5k4dnx7SX5YmNl7cGqMb4fUfS2lq7/Gvufu5MH7T/XwTcnXBzEJ9UtqmvW09flfYvX7mvWGdPjVPJ9+ZrZuXlOv49Gz/fgxvBO9rbl1usz4qTp4iDlbeGPcbC9X7Bxbz3cbAwq2NenhtrVbuavZHQV7e3ujP4a0OD6y/uaMeL23fpyc31vtRnFvbcyO9nOqBuJY1xrTsk/1+JLcur9kfS3GbKG+EDmhrtEXV+7v0XqRFTYPOBFbujfv7PrSmRvM31ftDyEN1Dt75OKits9dH+qYXEsHNrYnpo5K2pF3Wvr4+P+p9anODHllbp9c+a1JT+8BfgrifdX2kxa9ZvrCt0YfUCVW165mtDQM3wrBE8OA96zYcxgX9qO2r5naSR88t0keDzuG1xns0adVuvynidmuB/wXBg/f05j1+ze7N0OH/ROzL5HZQ3cFjF+Drni31a5Nn3R/xsXNrbv2HpoH/FsGD587fufXAYOXh1wK/bG6q6aalbn3R/U3sHSuqtSmfv4rA/4fgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATDjXyhKzIRa0c+UAAAAAElFTkSuQmCC\"\n\n//# sourceURL=webpack:///./src/assets/portfolio/aqualogica.png?");

/***/ }),

/***/ "./src/assets/portfolio/ara.png":
/*!**************************************!*\
  !*** ./src/assets/portfolio/ara.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/ara.0531344d.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/ara.png?");

/***/ }),

/***/ "./src/assets/portfolio/arealyou.png":
/*!*******************************************!*\
  !*** ./src/assets/portfolio/arealyou.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/arealyou.f919d149.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/arealyou.png?");

/***/ }),

/***/ "./src/assets/portfolio/ayurvidya.png":
/*!********************************************!*\
  !*** ./src/assets/portfolio/ayurvidya.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/ayurvidya.c35aeae3.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/ayurvidya.png?");

/***/ }),

/***/ "./src/assets/portfolio/barrierbreak.png":
/*!***********************************************!*\
  !*** ./src/assets/portfolio/barrierbreak.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/barrierbreak.026c8e14.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/barrierbreak.png?");

/***/ }),

/***/ "./src/assets/portfolio/bigship.png":
/*!******************************************!*\
  !*** ./src/assets/portfolio/bigship.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/bigship.38ae0d1c.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/bigship.png?");

/***/ }),

/***/ "./src/assets/portfolio/bizvidya.png":
/*!*******************************************!*\
  !*** ./src/assets/portfolio/bizvidya.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/bizvidya.fafcef59.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/bizvidya.png?");

/***/ }),

/***/ "./src/assets/portfolio/buyitcarl.png":
/*!********************************************!*\
  !*** ./src/assets/portfolio/buyitcarl.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/buyitcarl.790e5955.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/buyitcarl.png?");

/***/ }),

/***/ "./src/assets/portfolio/bwangu.png":
/*!*****************************************!*\
  !*** ./src/assets/portfolio/bwangu.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/bwangu.5c1cc8f4.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/bwangu.png?");

/***/ }),

/***/ "./src/assets/portfolio/carmaldn.png":
/*!*******************************************!*\
  !*** ./src/assets/portfolio/carmaldn.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/carmaldn.87f5b4b6.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/carmaldn.png?");

/***/ }),

/***/ "./src/assets/portfolio/centraldata.png":
/*!**********************************************!*\
  !*** ./src/assets/portfolio/centraldata.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/centraldata.74960e78.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/centraldata.png?");

/***/ }),

/***/ "./src/assets/portfolio/cofetti.png":
/*!******************************************!*\
  !*** ./src/assets/portfolio/cofetti.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/cofetti.dc3e7638.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/cofetti.png?");

/***/ }),

/***/ "./src/assets/portfolio/cpvauto.png":
/*!******************************************!*\
  !*** ./src/assets/portfolio/cpvauto.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/cpvauto.64d31374.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/cpvauto.png?");

/***/ }),

/***/ "./src/assets/portfolio/curatedmedical.png":
/*!*************************************************!*\
  !*** ./src/assets/portfolio/curatedmedical.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/curatedmedical.9bd68c43.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/curatedmedical.png?");

/***/ }),

/***/ "./src/assets/portfolio/dmf.png":
/*!**************************************!*\
  !*** ./src/assets/portfolio/dmf.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/dmf.0f321c24.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/dmf.png?");

/***/ }),

/***/ "./src/assets/portfolio/drm.png":
/*!**************************************!*\
  !*** ./src/assets/portfolio/drm.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/drm.54e20570.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/drm.png?");

/***/ }),

/***/ "./src/assets/portfolio/edufarmers.png":
/*!*********************************************!*\
  !*** ./src/assets/portfolio/edufarmers.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/edufarmers.ffbfc812.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/edufarmers.png?");

/***/ }),

/***/ "./src/assets/portfolio/eduspark.png":
/*!*******************************************!*\
  !*** ./src/assets/portfolio/eduspark.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/eduspark.8f9da1b6.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/eduspark.png?");

/***/ }),

/***/ "./src/assets/portfolio/ekrishi.png":
/*!******************************************!*\
  !*** ./src/assets/portfolio/ekrishi.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/ekrishi.d36991c3.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/ekrishi.png?");

/***/ }),

/***/ "./src/assets/portfolio/elevenflo.png":
/*!********************************************!*\
  !*** ./src/assets/portfolio/elevenflo.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/elevenflo.29849b2c.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/elevenflo.png?");

/***/ }),

/***/ "./src/assets/portfolio/eterna.png":
/*!*****************************************!*\
  !*** ./src/assets/portfolio/eterna.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/eterna.c0553cd9.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/eterna.png?");

/***/ }),

/***/ "./src/assets/portfolio/exoticgashouse.png":
/*!*************************************************!*\
  !*** ./src/assets/portfolio/exoticgashouse.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/exoticgashouse.d77a8279.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/exoticgashouse.png?");

/***/ }),

/***/ "./src/assets/portfolio/fairatmos.png":
/*!********************************************!*\
  !*** ./src/assets/portfolio/fairatmos.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/fairatmos.97f302eb.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/fairatmos.png?");

/***/ }),

/***/ "./src/assets/portfolio/fmt.png":
/*!**************************************!*\
  !*** ./src/assets/portfolio/fmt.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/fmt.014051c8.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/fmt.png?");

/***/ }),

/***/ "./src/assets/portfolio/forest.png":
/*!*****************************************!*\
  !*** ./src/assets/portfolio/forest.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/forest.7ffa99e3.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/forest.png?");

/***/ }),

/***/ "./src/assets/portfolio/franchisedirect.png":
/*!**************************************************!*\
  !*** ./src/assets/portfolio/franchisedirect.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/franchisedirect.b0227f03.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/franchisedirect.png?");

/***/ }),

/***/ "./src/assets/portfolio/godecor.png":
/*!******************************************!*\
  !*** ./src/assets/portfolio/godecor.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/godecor.5029c00d.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/godecor.png?");

/***/ }),

/***/ "./src/assets/portfolio/gowfo.png":
/*!****************************************!*\
  !*** ./src/assets/portfolio/gowfo.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/gowfo.36866d9b.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/gowfo.png?");

/***/ }),

/***/ "./src/assets/portfolio/grassroot.png":
/*!********************************************!*\
  !*** ./src/assets/portfolio/grassroot.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/grassroot.2698c725.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/grassroot.png?");

/***/ }),

/***/ "./src/assets/portfolio/greenfutureproject.png":
/*!*****************************************************!*\
  !*** ./src/assets/portfolio/greenfutureproject.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/greenfutureproject.7752f4de.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/greenfutureproject.png?");

/***/ }),

/***/ "./src/assets/portfolio/haladoc.png":
/*!******************************************!*\
  !*** ./src/assets/portfolio/haladoc.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/haladoc.381daa2f.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/haladoc.png?");

/***/ }),

/***/ "./src/assets/portfolio/happyskin.png":
/*!********************************************!*\
  !*** ./src/assets/portfolio/happyskin.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/happyskin.8451af67.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/happyskin.png?");

/***/ }),

/***/ "./src/assets/portfolio/hindustantimes.png":
/*!*************************************************!*\
  !*** ./src/assets/portfolio/hindustantimes.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/hindustantimes.e833a41c.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/hindustantimes.png?");

/***/ }),

/***/ "./src/assets/portfolio/hmis.png":
/*!***************************************!*\
  !*** ./src/assets/portfolio/hmis.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/hmis.f6f6c608.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/hmis.png?");

/***/ }),

/***/ "./src/assets/portfolio/hunnit.png":
/*!*****************************************!*\
  !*** ./src/assets/portfolio/hunnit.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/hunnit.fe67b5a3.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/hunnit.png?");

/***/ }),

/***/ "./src/assets/portfolio/iglobal.png":
/*!******************************************!*\
  !*** ./src/assets/portfolio/iglobal.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/iglobal.3752ad7e.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/iglobal.png?");

/***/ }),

/***/ "./src/assets/portfolio/imaginecup.png":
/*!*********************************************!*\
  !*** ./src/assets/portfolio/imaginecup.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/imaginecup.65d604d5.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/imaginecup.png?");

/***/ }),

/***/ "./src/assets/portfolio/interngrad.png":
/*!*********************************************!*\
  !*** ./src/assets/portfolio/interngrad.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/interngrad.0dc04859.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/interngrad.png?");

/***/ }),

/***/ "./src/assets/portfolio/jumia.png":
/*!****************************************!*\
  !*** ./src/assets/portfolio/jumia.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/jumia.69d7bbc8.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/jumia.png?");

/***/ }),

/***/ "./src/assets/portfolio/jvedtech.png":
/*!*******************************************!*\
  !*** ./src/assets/portfolio/jvedtech.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/jvedtech.bcaedbc5.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/jvedtech.png?");

/***/ }),

/***/ "./src/assets/portfolio/kaitchens.png":
/*!********************************************!*\
  !*** ./src/assets/portfolio/kaitchens.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/kaitchens.87a87986.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/kaitchens.png?");

/***/ }),

/***/ "./src/assets/portfolio/kidoriman.png":
/*!********************************************!*\
  !*** ./src/assets/portfolio/kidoriman.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/kidoriman.dfc37146.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/kidoriman.png?");

/***/ }),

/***/ "./src/assets/portfolio/kupainc.png":
/*!******************************************!*\
  !*** ./src/assets/portfolio/kupainc.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/kupainc.c32abb59.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/kupainc.png?");

/***/ }),

/***/ "./src/assets/portfolio/lexiai.png":
/*!*****************************************!*\
  !*** ./src/assets/portfolio/lexiai.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/lexiai.814d87ae.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/lexiai.png?");

/***/ }),

/***/ "./src/assets/portfolio/louise.png":
/*!*****************************************!*\
  !*** ./src/assets/portfolio/louise.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/louise.3409f595.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/louise.png?");

/***/ }),

/***/ "./src/assets/portfolio/loversai.png":
/*!*******************************************!*\
  !*** ./src/assets/portfolio/loversai.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/loversai.4d3b4755.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/loversai.png?");

/***/ }),

/***/ "./src/assets/portfolio/mhcet.png":
/*!****************************************!*\
  !*** ./src/assets/portfolio/mhcet.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/mhcet.5fe4b697.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/mhcet.png?");

/***/ }),

/***/ "./src/assets/portfolio/moraze.png":
/*!*****************************************!*\
  !*** ./src/assets/portfolio/moraze.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/moraze.3cd359e8.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/moraze.png?");

/***/ }),

/***/ "./src/assets/portfolio/ngasce.png":
/*!*****************************************!*\
  !*** ./src/assets/portfolio/ngasce.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/ngasce.50c5bb4f.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/ngasce.png?");

/***/ }),

/***/ "./src/assets/portfolio/nsic.png":
/*!***************************************!*\
  !*** ./src/assets/portfolio/nsic.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/nsic.775b9f97.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/nsic.png?");

/***/ }),

/***/ "./src/assets/portfolio/orqual.png":
/*!*****************************************!*\
  !*** ./src/assets/portfolio/orqual.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/orqual.c18f36c8.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/orqual.png?");

/***/ }),

/***/ "./src/assets/portfolio/paperid.png":
/*!******************************************!*\
  !*** ./src/assets/portfolio/paperid.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/paperid.88dfdf18.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/paperid.png?");

/***/ }),

/***/ "./src/assets/portfolio/parenting.png":
/*!********************************************!*\
  !*** ./src/assets/portfolio/parenting.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/parenting.6ed44f0c.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/parenting.png?");

/***/ }),

/***/ "./src/assets/portfolio/parknjet.png":
/*!*******************************************!*\
  !*** ./src/assets/portfolio/parknjet.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/parknjet.ff2669e0.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/parknjet.png?");

/***/ }),

/***/ "./src/assets/portfolio/petschoice.png":
/*!*********************************************!*\
  !*** ./src/assets/portfolio/petschoice.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/petschoice.58d109ea.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/petschoice.png?");

/***/ }),

/***/ "./src/assets/portfolio/pillows.png":
/*!******************************************!*\
  !*** ./src/assets/portfolio/pillows.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/pillows.2e4dd7dd.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/pillows.png?");

/***/ }),

/***/ "./src/assets/portfolio/rns.png":
/*!**************************************!*\
  !*** ./src/assets/portfolio/rns.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/rns.9f1c4d62.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/rns.png?");

/***/ }),

/***/ "./src/assets/portfolio/ruutiq.png":
/*!*****************************************!*\
  !*** ./src/assets/portfolio/ruutiq.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/ruutiq.6b11ff45.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/ruutiq.png?");

/***/ }),

/***/ "./src/assets/portfolio/sbm.png":
/*!**************************************!*\
  !*** ./src/assets/portfolio/sbm.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/sbm.d10225b5.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/sbm.png?");

/***/ }),

/***/ "./src/assets/portfolio/scallopx.png":
/*!*******************************************!*\
  !*** ./src/assets/portfolio/scallopx.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/scallopx.37726b39.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/scallopx.png?");

/***/ }),

/***/ "./src/assets/portfolio/scanhealth.png":
/*!*********************************************!*\
  !*** ./src/assets/portfolio/scanhealth.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/scanhealth.4ef107a5.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/scanhealth.png?");

/***/ }),

/***/ "./src/assets/portfolio/sdc.png":
/*!**************************************!*\
  !*** ./src/assets/portfolio/sdc.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/sdc.2731e72e.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/sdc.png?");

/***/ }),

/***/ "./src/assets/portfolio/simplifypi.png":
/*!*********************************************!*\
  !*** ./src/assets/portfolio/simplifypi.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/simplifypi.3082ee75.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/simplifypi.png?");

/***/ }),

/***/ "./src/assets/portfolio/simplyherbal.png":
/*!***********************************************!*\
  !*** ./src/assets/portfolio/simplyherbal.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/simplyherbal.ab425977.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/simplyherbal.png?");

/***/ }),

/***/ "./src/assets/portfolio/solelands.png":
/*!********************************************!*\
  !*** ./src/assets/portfolio/solelands.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/solelands.ad745ad7.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/solelands.png?");

/***/ }),

/***/ "./src/assets/portfolio/sorta.png":
/*!****************************************!*\
  !*** ./src/assets/portfolio/sorta.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/sorta.bb2d0d12.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/sorta.png?");

/***/ }),

/***/ "./src/assets/portfolio/studentkare.png":
/*!**********************************************!*\
  !*** ./src/assets/portfolio/studentkare.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/studentkare.bba30f98.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/studentkare.png?");

/***/ }),

/***/ "./src/assets/portfolio/telemedicine.png":
/*!***********************************************!*\
  !*** ./src/assets/portfolio/telemedicine.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/telemedicine.de3e5c95.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/telemedicine.png?");

/***/ }),

/***/ "./src/assets/portfolio/theshed.png":
/*!******************************************!*\
  !*** ./src/assets/portfolio/theshed.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/theshed.a8403cf4.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/theshed.png?");

/***/ }),

/***/ "./src/assets/portfolio/thread.png":
/*!*****************************************!*\
  !*** ./src/assets/portfolio/thread.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/thread.be96d8af.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/thread.png?");

/***/ }),

/***/ "./src/assets/portfolio/unbox.png":
/*!****************************************!*\
  !*** ./src/assets/portfolio/unbox.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/unbox.f319f053.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/unbox.png?");

/***/ }),

/***/ "./src/assets/portfolio/vastu.png":
/*!****************************************!*\
  !*** ./src/assets/portfolio/vastu.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/vastu.8e0c53fc.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/vastu.png?");

/***/ }),

/***/ "./src/assets/portfolio/vlc.png":
/*!**************************************!*\
  !*** ./src/assets/portfolio/vlc.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/vlc.b04ef19f.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/vlc.png?");

/***/ }),

/***/ "./src/assets/portfolio/waayu.png":
/*!****************************************!*\
  !*** ./src/assets/portfolio/waayu.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/waayu.6f2d956b.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/waayu.png?");

/***/ }),

/***/ "./src/assets/portfolio/walkent.png":
/*!******************************************!*\
  !*** ./src/assets/portfolio/walkent.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/walkent.de2901fd.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/walkent.png?");

/***/ }),

/***/ "./src/assets/portfolio/watchyourhealth.png":
/*!**************************************************!*\
  !*** ./src/assets/portfolio/watchyourhealth.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/watchyourhealth.68b63ab0.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/watchyourhealth.png?");

/***/ }),

/***/ "./src/assets/portfolio/webdew.png":
/*!*****************************************!*\
  !*** ./src/assets/portfolio/webdew.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/webdew.d8f33952.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/webdew.png?");

/***/ }),

/***/ "./src/assets/portfolio/wp21.png":
/*!***************************************!*\
  !*** ./src/assets/portfolio/wp21.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/wp21.8c1533d1.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/wp21.png?");

/***/ }),

/***/ "./src/assets/portfolio/xpayback.png":
/*!*******************************************!*\
  !*** ./src/assets/portfolio/xpayback.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/xpayback.c88f0e14.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/xpayback.png?");

/***/ }),

/***/ "./src/assets/portfolio/xtreeme.png":
/*!******************************************!*\
  !*** ./src/assets/portfolio/xtreeme.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/xtreeme.c52a37af.png\";\n\n//# sourceURL=webpack:///./src/assets/portfolio/xtreeme.png?");

/***/ }),

/***/ "./src/assets/potrait.png":
/*!********************************!*\
  !*** ./src/assets/potrait.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/potrait.0eff1d95.png\";\n\n//# sourceURL=webpack:///./src/assets/potrait.png?");

/***/ }),

/***/ "./src/components/About.vue":
/*!**********************************!*\
  !*** ./src/components/About.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _About_vue_vue_type_template_id_c226fde6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About.vue?vue&type=template&id=c226fde6&scoped=true */ \"./src/components/About.vue?vue&type=template&id=c226fde6&scoped=true\");\n/* harmony import */ var _About_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About.vue?vue&type=script&lang=js */ \"./src/components/About.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _About_vue_vue_type_style_index_0_id_c226fde6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./About.vue?vue&type=style&index=0&id=c226fde6&scoped=true&lang=css */ \"./src/components/About.vue?vue&type=style&index=0&id=c226fde6&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _About_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _About_vue_vue_type_template_id_c226fde6_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _About_vue_vue_type_template_id_c226fde6_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"c226fde6\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/About.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/About.vue?");

/***/ }),

/***/ "./src/components/About.vue?vue&type=script&lang=js":
/*!**********************************************************!*\
  !*** ./src/components/About.vue?vue&type=script&lang=js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=script&lang=js */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/About.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/About.vue?");

/***/ }),

/***/ "./src/components/About.vue?vue&type=style&index=0&id=c226fde6&scoped=true&lang=css":
/*!******************************************************************************************!*\
  !*** ./src/components/About.vue?vue&type=style&index=0&id=c226fde6&scoped=true&lang=css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_c226fde6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--6-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=style&index=0&id=c226fde6&scoped=true&lang=css */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/About.vue?vue&type=style&index=0&id=c226fde6&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_c226fde6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_c226fde6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_c226fde6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_c226fde6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/components/About.vue?");

/***/ }),

/***/ "./src/components/About.vue?vue&type=template&id=c226fde6&scoped=true":
/*!****************************************************************************!*\
  !*** ./src/components/About.vue?vue&type=template&id=c226fde6&scoped=true ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1809fece_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_c226fde6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"1809fece-vue-loader-template\"}!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=template&id=c226fde6&scoped=true */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"1809fece-vue-loader-template\\\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/About.vue?vue&type=template&id=c226fde6&scoped=true\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1809fece_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_c226fde6_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1809fece_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_c226fde6_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/About.vue?");

/***/ }),

/***/ "./src/components/Footer.vue":
/*!***********************************!*\
  !*** ./src/components/Footer.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Footer_vue_vue_type_template_id_40ab164b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=40ab164b&scoped=true */ \"./src/components/Footer.vue?vue&type=template&id=40ab164b&scoped=true\");\n/* harmony import */ var _Footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js */ \"./src/components/Footer.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Footer_vue_vue_type_style_index_0_id_40ab164b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer.vue?vue&type=style&index=0&id=40ab164b&scoped=true&lang=css */ \"./src/components/Footer.vue?vue&type=style&index=0&id=40ab164b&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Footer_vue_vue_type_template_id_40ab164b_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Footer_vue_vue_type_template_id_40ab164b_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"40ab164b\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/Footer.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/Footer.vue?");

/***/ }),

/***/ "./src/components/Footer.vue?vue&type=script&lang=js":
/*!***********************************************************!*\
  !*** ./src/components/Footer.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=script&lang=js */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Footer.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/Footer.vue?");

/***/ }),

/***/ "./src/components/Footer.vue?vue&type=style&index=0&id=40ab164b&scoped=true&lang=css":
/*!*******************************************************************************************!*\
  !*** ./src/components/Footer.vue?vue&type=style&index=0&id=40ab164b&scoped=true&lang=css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_40ab164b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--6-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=style&index=0&id=40ab164b&scoped=true&lang=css */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Footer.vue?vue&type=style&index=0&id=40ab164b&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_40ab164b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_40ab164b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_40ab164b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_40ab164b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/components/Footer.vue?");

/***/ }),

/***/ "./src/components/Footer.vue?vue&type=template&id=40ab164b&scoped=true":
/*!*****************************************************************************!*\
  !*** ./src/components/Footer.vue?vue&type=template&id=40ab164b&scoped=true ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1809fece_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_40ab164b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"1809fece-vue-loader-template\"}!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=template&id=40ab164b&scoped=true */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"1809fece-vue-loader-template\\\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Footer.vue?vue&type=template&id=40ab164b&scoped=true\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1809fece_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_40ab164b_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1809fece_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_40ab164b_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/Footer.vue?");

/***/ }),

/***/ "./src/components/Home.vue":
/*!*********************************!*\
  !*** ./src/components/Home.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Home_vue_vue_type_template_id_8dc7cce2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=8dc7cce2&scoped=true */ \"./src/components/Home.vue?vue&type=template&id=8dc7cce2&scoped=true\");\n/* harmony import */ var _Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js */ \"./src/components/Home.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_id_8dc7cce2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&id=8dc7cce2&scoped=true&lang=css */ \"./src/components/Home.vue?vue&type=style&index=0&id=8dc7cce2&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Home_vue_vue_type_template_id_8dc7cce2_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Home_vue_vue_type_template_id_8dc7cce2_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"8dc7cce2\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/Home.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/Home.vue?");

/***/ }),

/***/ "./src/components/Home.vue?vue&type=script&lang=js":
/*!*********************************************************!*\
  !*** ./src/components/Home.vue?vue&type=script&lang=js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Home.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/Home.vue?");

/***/ }),

/***/ "./src/components/Home.vue?vue&type=style&index=0&id=8dc7cce2&scoped=true&lang=css":
/*!*****************************************************************************************!*\
  !*** ./src/components/Home.vue?vue&type=style&index=0&id=8dc7cce2&scoped=true&lang=css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_8dc7cce2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--6-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=8dc7cce2&scoped=true&lang=css */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Home.vue?vue&type=style&index=0&id=8dc7cce2&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_8dc7cce2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_8dc7cce2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_8dc7cce2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_8dc7cce2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/components/Home.vue?");

/***/ }),

/***/ "./src/components/Home.vue?vue&type=template&id=8dc7cce2&scoped=true":
/*!***************************************************************************!*\
  !*** ./src/components/Home.vue?vue&type=template&id=8dc7cce2&scoped=true ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1809fece_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_8dc7cce2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"1809fece-vue-loader-template\"}!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=8dc7cce2&scoped=true */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"1809fece-vue-loader-template\\\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Home.vue?vue&type=template&id=8dc7cce2&scoped=true\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1809fece_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_8dc7cce2_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1809fece_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_8dc7cce2_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/Home.vue?");

/***/ }),

/***/ "./src/components/Industries.vue":
/*!***************************************!*\
  !*** ./src/components/Industries.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Industries_vue_vue_type_template_id_76e44f2c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Industries.vue?vue&type=template&id=76e44f2c&scoped=true */ \"./src/components/Industries.vue?vue&type=template&id=76e44f2c&scoped=true\");\n/* harmony import */ var _Industries_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Industries.vue?vue&type=script&lang=js */ \"./src/components/Industries.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Industries_vue_vue_type_style_index_0_id_76e44f2c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Industries.vue?vue&type=style&index=0&id=76e44f2c&scoped=true&lang=css */ \"./src/components/Industries.vue?vue&type=style&index=0&id=76e44f2c&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Industries_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Industries_vue_vue_type_template_id_76e44f2c_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Industries_vue_vue_type_template_id_76e44f2c_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"76e44f2c\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/Industries.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/Industries.vue?");

/***/ }),

/***/ "./src/components/Industries.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./src/components/Industries.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Industries_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Industries.vue?vue&type=script&lang=js */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Industries.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Industries_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/Industries.vue?");

/***/ }),

/***/ "./src/components/Industries.vue?vue&type=style&index=0&id=76e44f2c&scoped=true&lang=css":
/*!***********************************************************************************************!*\
  !*** ./src/components/Industries.vue?vue&type=style&index=0&id=76e44f2c&scoped=true&lang=css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Industries_vue_vue_type_style_index_0_id_76e44f2c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--6-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Industries.vue?vue&type=style&index=0&id=76e44f2c&scoped=true&lang=css */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Industries.vue?vue&type=style&index=0&id=76e44f2c&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Industries_vue_vue_type_style_index_0_id_76e44f2c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Industries_vue_vue_type_style_index_0_id_76e44f2c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Industries_vue_vue_type_style_index_0_id_76e44f2c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Industries_vue_vue_type_style_index_0_id_76e44f2c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/components/Industries.vue?");

/***/ }),

/***/ "./src/components/Industries.vue?vue&type=template&id=76e44f2c&scoped=true":
/*!*********************************************************************************!*\
  !*** ./src/components/Industries.vue?vue&type=template&id=76e44f2c&scoped=true ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1809fece_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Industries_vue_vue_type_template_id_76e44f2c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"1809fece-vue-loader-template\"}!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Industries.vue?vue&type=template&id=76e44f2c&scoped=true */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"1809fece-vue-loader-template\\\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Industries.vue?vue&type=template&id=76e44f2c&scoped=true\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1809fece_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Industries_vue_vue_type_template_id_76e44f2c_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1809fece_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Industries_vue_vue_type_template_id_76e44f2c_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/Industries.vue?");

/***/ }),

/***/ "./src/components/Navbar.vue":
/*!***********************************!*\
  !*** ./src/components/Navbar.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Navbar_vue_vue_type_template_id_41458b80_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.vue?vue&type=template&id=41458b80&scoped=true */ \"./src/components/Navbar.vue?vue&type=template&id=41458b80&scoped=true\");\n/* harmony import */ var _Navbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.vue?vue&type=script&lang=js */ \"./src/components/Navbar.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Navbar_vue_vue_type_style_index_0_id_41458b80_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar.vue?vue&type=style&index=0&id=41458b80&scoped=true&lang=css */ \"./src/components/Navbar.vue?vue&type=style&index=0&id=41458b80&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Navbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Navbar_vue_vue_type_template_id_41458b80_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Navbar_vue_vue_type_template_id_41458b80_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"41458b80\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/Navbar.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/Navbar.vue?");

/***/ }),

/***/ "./src/components/Navbar.vue?vue&type=script&lang=js":
/*!***********************************************************!*\
  !*** ./src/components/Navbar.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=script&lang=js */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Navbar.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/Navbar.vue?");

/***/ }),

/***/ "./src/components/Navbar.vue?vue&type=style&index=0&id=41458b80&scoped=true&lang=css":
/*!*******************************************************************************************!*\
  !*** ./src/components/Navbar.vue?vue&type=style&index=0&id=41458b80&scoped=true&lang=css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_41458b80_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--6-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=style&index=0&id=41458b80&scoped=true&lang=css */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Navbar.vue?vue&type=style&index=0&id=41458b80&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_41458b80_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_41458b80_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_41458b80_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_41458b80_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/components/Navbar.vue?");

/***/ }),

/***/ "./src/components/Navbar.vue?vue&type=template&id=41458b80&scoped=true":
/*!*****************************************************************************!*\
  !*** ./src/components/Navbar.vue?vue&type=template&id=41458b80&scoped=true ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1809fece_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_41458b80_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"1809fece-vue-loader-template\"}!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=template&id=41458b80&scoped=true */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"1809fece-vue-loader-template\\\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Navbar.vue?vue&type=template&id=41458b80&scoped=true\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1809fece_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_41458b80_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1809fece_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_41458b80_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/Navbar.vue?");

/***/ }),

/***/ "./src/components/Portfolio.vue":
/*!**************************************!*\
  !*** ./src/components/Portfolio.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Portfolio_vue_vue_type_template_id_a9a7cd70_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Portfolio.vue?vue&type=template&id=a9a7cd70&scoped=true */ \"./src/components/Portfolio.vue?vue&type=template&id=a9a7cd70&scoped=true\");\n/* harmony import */ var _Portfolio_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Portfolio.vue?vue&type=script&lang=js */ \"./src/components/Portfolio.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Portfolio_vue_vue_type_style_index_0_id_a9a7cd70_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Portfolio.vue?vue&type=style&index=0&id=a9a7cd70&scoped=true&lang=css */ \"./src/components/Portfolio.vue?vue&type=style&index=0&id=a9a7cd70&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Portfolio_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Portfolio_vue_vue_type_template_id_a9a7cd70_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Portfolio_vue_vue_type_template_id_a9a7cd70_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"a9a7cd70\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/Portfolio.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/Portfolio.vue?");

/***/ }),

/***/ "./src/components/Portfolio.vue?vue&type=script&lang=js":
/*!**************************************************************!*\
  !*** ./src/components/Portfolio.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Portfolio_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Portfolio.vue?vue&type=script&lang=js */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Portfolio.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Portfolio_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/Portfolio.vue?");

/***/ }),

/***/ "./src/components/Portfolio.vue?vue&type=style&index=0&id=a9a7cd70&scoped=true&lang=css":
/*!**********************************************************************************************!*\
  !*** ./src/components/Portfolio.vue?vue&type=style&index=0&id=a9a7cd70&scoped=true&lang=css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Portfolio_vue_vue_type_style_index_0_id_a9a7cd70_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--6-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Portfolio.vue?vue&type=style&index=0&id=a9a7cd70&scoped=true&lang=css */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Portfolio.vue?vue&type=style&index=0&id=a9a7cd70&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Portfolio_vue_vue_type_style_index_0_id_a9a7cd70_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Portfolio_vue_vue_type_style_index_0_id_a9a7cd70_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Portfolio_vue_vue_type_style_index_0_id_a9a7cd70_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Portfolio_vue_vue_type_style_index_0_id_a9a7cd70_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/components/Portfolio.vue?");

/***/ }),

/***/ "./src/components/Portfolio.vue?vue&type=template&id=a9a7cd70&scoped=true":
/*!********************************************************************************!*\
  !*** ./src/components/Portfolio.vue?vue&type=template&id=a9a7cd70&scoped=true ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1809fece_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Portfolio_vue_vue_type_template_id_a9a7cd70_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"1809fece-vue-loader-template\"}!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Portfolio.vue?vue&type=template&id=a9a7cd70&scoped=true */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"1809fece-vue-loader-template\\\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Portfolio.vue?vue&type=template&id=a9a7cd70&scoped=true\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1809fece_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Portfolio_vue_vue_type_template_id_a9a7cd70_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1809fece_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Portfolio_vue_vue_type_template_id_a9a7cd70_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/Portfolio.vue?");

/***/ }),

/***/ "./src/components/Skills.vue":
/*!***********************************!*\
  !*** ./src/components/Skills.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Skills_vue_vue_type_template_id_4cdb3572_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Skills.vue?vue&type=template&id=4cdb3572&scoped=true */ \"./src/components/Skills.vue?vue&type=template&id=4cdb3572&scoped=true\");\n/* harmony import */ var _Skills_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Skills.vue?vue&type=script&lang=js */ \"./src/components/Skills.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Skills_vue_vue_type_style_index_0_id_4cdb3572_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Skills.vue?vue&type=style&index=0&id=4cdb3572&scoped=true&lang=css */ \"./src/components/Skills.vue?vue&type=style&index=0&id=4cdb3572&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Skills_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Skills_vue_vue_type_template_id_4cdb3572_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Skills_vue_vue_type_template_id_4cdb3572_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"4cdb3572\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/Skills.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/Skills.vue?");

/***/ }),

/***/ "./src/components/Skills.vue?vue&type=script&lang=js":
/*!***********************************************************!*\
  !*** ./src/components/Skills.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Skills_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Skills.vue?vue&type=script&lang=js */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Skills.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Skills_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/Skills.vue?");

/***/ }),

/***/ "./src/components/Skills.vue?vue&type=style&index=0&id=4cdb3572&scoped=true&lang=css":
/*!*******************************************************************************************!*\
  !*** ./src/components/Skills.vue?vue&type=style&index=0&id=4cdb3572&scoped=true&lang=css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Skills_vue_vue_type_style_index_0_id_4cdb3572_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--6-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Skills.vue?vue&type=style&index=0&id=4cdb3572&scoped=true&lang=css */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Skills.vue?vue&type=style&index=0&id=4cdb3572&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Skills_vue_vue_type_style_index_0_id_4cdb3572_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Skills_vue_vue_type_style_index_0_id_4cdb3572_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Skills_vue_vue_type_style_index_0_id_4cdb3572_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Skills_vue_vue_type_style_index_0_id_4cdb3572_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/components/Skills.vue?");

/***/ }),

/***/ "./src/components/Skills.vue?vue&type=template&id=4cdb3572&scoped=true":
/*!*****************************************************************************!*\
  !*** ./src/components/Skills.vue?vue&type=template&id=4cdb3572&scoped=true ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1809fece_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Skills_vue_vue_type_template_id_4cdb3572_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"1809fece-vue-loader-template\"}!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Skills.vue?vue&type=template&id=4cdb3572&scoped=true */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"1809fece-vue-loader-template\\\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Skills.vue?vue&type=template&id=4cdb3572&scoped=true\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1809fece_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Skills_vue_vue_type_template_id_4cdb3572_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1809fece_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Skills_vue_vue_type_template_id_4cdb3572_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/Skills.vue?");

/***/ }),

/***/ "./src/components/helpers/Card.vue":
/*!*****************************************!*\
  !*** ./src/components/helpers/Card.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Card_vue_vue_type_template_id_d909b0ec_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card.vue?vue&type=template&id=d909b0ec&scoped=true */ \"./src/components/helpers/Card.vue?vue&type=template&id=d909b0ec&scoped=true\");\n/* harmony import */ var _Card_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.vue?vue&type=script&lang=js */ \"./src/components/helpers/Card.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Card_vue_vue_type_style_index_0_id_d909b0ec_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card.vue?vue&type=style&index=0&id=d909b0ec&scoped=true&lang=css */ \"./src/components/helpers/Card.vue?vue&type=style&index=0&id=d909b0ec&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Card_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Card_vue_vue_type_template_id_d909b0ec_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Card_vue_vue_type_template_id_d909b0ec_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"d909b0ec\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/helpers/Card.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/helpers/Card.vue?");

/***/ }),

/***/ "./src/components/helpers/Card.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./src/components/helpers/Card.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Card.vue?vue&type=script&lang=js */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/helpers/Card.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/helpers/Card.vue?");

/***/ }),

/***/ "./src/components/helpers/Card.vue?vue&type=style&index=0&id=d909b0ec&scoped=true&lang=css":
/*!*************************************************************************************************!*\
  !*** ./src/components/helpers/Card.vue?vue&type=style&index=0&id=d909b0ec&scoped=true&lang=css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_d909b0ec_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--6-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Card.vue?vue&type=style&index=0&id=d909b0ec&scoped=true&lang=css */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/helpers/Card.vue?vue&type=style&index=0&id=d909b0ec&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_d909b0ec_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_d909b0ec_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_d909b0ec_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_d909b0ec_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/components/helpers/Card.vue?");

/***/ }),

/***/ "./src/components/helpers/Card.vue?vue&type=template&id=d909b0ec&scoped=true":
/*!***********************************************************************************!*\
  !*** ./src/components/helpers/Card.vue?vue&type=template&id=d909b0ec&scoped=true ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1809fece_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_d909b0ec_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"1809fece-vue-loader-template\"}!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Card.vue?vue&type=template&id=d909b0ec&scoped=true */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"1809fece-vue-loader-template\\\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/helpers/Card.vue?vue&type=template&id=d909b0ec&scoped=true\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1809fece_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_d909b0ec_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1809fece_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_d909b0ec_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/helpers/Card.vue?");

/***/ }),

/***/ "./src/components/helpers/Logo.vue":
/*!*****************************************!*\
  !*** ./src/components/helpers/Logo.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Logo_vue_vue_type_template_id_0cd2aca5_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo.vue?vue&type=template&id=0cd2aca5&scoped=true */ \"./src/components/helpers/Logo.vue?vue&type=template&id=0cd2aca5&scoped=true\");\n/* harmony import */ var _Logo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logo.vue?vue&type=script&lang=js */ \"./src/components/helpers/Logo.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Logo_vue_vue_type_style_index_0_id_0cd2aca5_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Logo.vue?vue&type=style&index=0&id=0cd2aca5&scoped=true&lang=css */ \"./src/components/helpers/Logo.vue?vue&type=style&index=0&id=0cd2aca5&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Logo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Logo_vue_vue_type_template_id_0cd2aca5_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Logo_vue_vue_type_template_id_0cd2aca5_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"0cd2aca5\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/helpers/Logo.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/helpers/Logo.vue?");

/***/ }),

/***/ "./src/components/helpers/Logo.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./src/components/helpers/Logo.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Logo.vue?vue&type=script&lang=js */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/helpers/Logo.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/helpers/Logo.vue?");

/***/ }),

/***/ "./src/components/helpers/Logo.vue?vue&type=style&index=0&id=0cd2aca5&scoped=true&lang=css":
/*!*************************************************************************************************!*\
  !*** ./src/components/helpers/Logo.vue?vue&type=style&index=0&id=0cd2aca5&scoped=true&lang=css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_id_0cd2aca5_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--6-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Logo.vue?vue&type=style&index=0&id=0cd2aca5&scoped=true&lang=css */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/helpers/Logo.vue?vue&type=style&index=0&id=0cd2aca5&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_id_0cd2aca5_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_id_0cd2aca5_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_id_0cd2aca5_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_id_0cd2aca5_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/components/helpers/Logo.vue?");

/***/ }),

/***/ "./src/components/helpers/Logo.vue?vue&type=template&id=0cd2aca5&scoped=true":
/*!***********************************************************************************!*\
  !*** ./src/components/helpers/Logo.vue?vue&type=template&id=0cd2aca5&scoped=true ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1809fece_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_0cd2aca5_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"1809fece-vue-loader-template\"}!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Logo.vue?vue&type=template&id=0cd2aca5&scoped=true */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"1809fece-vue-loader-template\\\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/helpers/Logo.vue?vue&type=template&id=0cd2aca5&scoped=true\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1809fece_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_0cd2aca5_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1809fece_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_0cd2aca5_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/helpers/Logo.vue?");

/***/ }),

/***/ "./src/components/helpers/Modal.vue":
/*!******************************************!*\
  !*** ./src/components/helpers/Modal.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Modal_vue_vue_type_template_id_6e79c923_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal.vue?vue&type=template&id=6e79c923&scoped=true */ \"./src/components/helpers/Modal.vue?vue&type=template&id=6e79c923&scoped=true\");\n/* harmony import */ var _Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.vue?vue&type=script&lang=js */ \"./src/components/helpers/Modal.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Modal_vue_vue_type_style_index_0_id_6e79c923_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal.vue?vue&type=style&index=0&id=6e79c923&scoped=true&lang=css */ \"./src/components/helpers/Modal.vue?vue&type=style&index=0&id=6e79c923&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Modal_vue_vue_type_template_id_6e79c923_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Modal_vue_vue_type_template_id_6e79c923_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"6e79c923\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/helpers/Modal.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/helpers/Modal.vue?");

/***/ }),

/***/ "./src/components/helpers/Modal.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./src/components/helpers/Modal.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=script&lang=js */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/helpers/Modal.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/helpers/Modal.vue?");

/***/ }),

/***/ "./src/components/helpers/Modal.vue?vue&type=style&index=0&id=6e79c923&scoped=true&lang=css":
/*!**************************************************************************************************!*\
  !*** ./src/components/helpers/Modal.vue?vue&type=style&index=0&id=6e79c923&scoped=true&lang=css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_6e79c923_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--6-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=style&index=0&id=6e79c923&scoped=true&lang=css */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/helpers/Modal.vue?vue&type=style&index=0&id=6e79c923&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_6e79c923_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_6e79c923_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_6e79c923_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_6e79c923_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/components/helpers/Modal.vue?");

/***/ }),

/***/ "./src/components/helpers/Modal.vue?vue&type=template&id=6e79c923&scoped=true":
/*!************************************************************************************!*\
  !*** ./src/components/helpers/Modal.vue?vue&type=template&id=6e79c923&scoped=true ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1809fece_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_6e79c923_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"1809fece-vue-loader-template\"}!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=template&id=6e79c923&scoped=true */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"1809fece-vue-loader-template\\\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/helpers/Modal.vue?vue&type=template&id=6e79c923&scoped=true\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1809fece_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_6e79c923_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1809fece_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_6e79c923_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/helpers/Modal.vue?");

/***/ }),

/***/ "./src/components/helpers/Timeline.vue":
/*!*********************************************!*\
  !*** ./src/components/helpers/Timeline.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Timeline_vue_vue_type_template_id_1e28818a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Timeline.vue?vue&type=template&id=1e28818a&scoped=true */ \"./src/components/helpers/Timeline.vue?vue&type=template&id=1e28818a&scoped=true\");\n/* harmony import */ var _Timeline_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Timeline.vue?vue&type=script&lang=js */ \"./src/components/helpers/Timeline.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Timeline_vue_vue_type_style_index_0_id_1e28818a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Timeline.vue?vue&type=style&index=0&id=1e28818a&scoped=true&lang=css */ \"./src/components/helpers/Timeline.vue?vue&type=style&index=0&id=1e28818a&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Timeline_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Timeline_vue_vue_type_template_id_1e28818a_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Timeline_vue_vue_type_template_id_1e28818a_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"1e28818a\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/helpers/Timeline.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/helpers/Timeline.vue?");

/***/ }),

/***/ "./src/components/helpers/Timeline.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./src/components/helpers/Timeline.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Timeline.vue?vue&type=script&lang=js */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/helpers/Timeline.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/helpers/Timeline.vue?");

/***/ }),

/***/ "./src/components/helpers/Timeline.vue?vue&type=style&index=0&id=1e28818a&scoped=true&lang=css":
/*!*****************************************************************************************************!*\
  !*** ./src/components/helpers/Timeline.vue?vue&type=style&index=0&id=1e28818a&scoped=true&lang=css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_style_index_0_id_1e28818a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--6-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Timeline.vue?vue&type=style&index=0&id=1e28818a&scoped=true&lang=css */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/helpers/Timeline.vue?vue&type=style&index=0&id=1e28818a&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_style_index_0_id_1e28818a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_style_index_0_id_1e28818a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_style_index_0_id_1e28818a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_style_index_0_id_1e28818a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/components/helpers/Timeline.vue?");

/***/ }),

/***/ "./src/components/helpers/Timeline.vue?vue&type=template&id=1e28818a&scoped=true":
/*!***************************************************************************************!*\
  !*** ./src/components/helpers/Timeline.vue?vue&type=template&id=1e28818a&scoped=true ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1809fece_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_template_id_1e28818a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"1809fece-vue-loader-template\"}!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Timeline.vue?vue&type=template&id=1e28818a&scoped=true */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"1809fece-vue-loader-template\\\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/helpers/Timeline.vue?vue&type=template&id=1e28818a&scoped=true\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1809fece_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_template_id_1e28818a_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1809fece_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_template_id_1e28818a_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/helpers/Timeline.vue?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ \"./node_modules/aos/dist/aos.js\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos/dist/aos.css */ \"./node_modules/aos/dist/aos.css\");\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var vue_parallax_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-parallax-js */ \"./node_modules/vue-parallax-js/lib/vue-parallax-js.es.js\");\n/* harmony import */ var vue_scrollto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-scrollto */ \"./node_modules/vue-scrollto/vue-scrollto.js\");\n/* harmony import */ var vue_scrollto__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_scrollto__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm.js\");\n/* harmony import */ var v_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! v-tooltip */ \"./node_modules/v-tooltip/dist/v-tooltip.esm.js\");\n\n\n\n\n\n\n\n\nvar VueCookie = __webpack_require__(/*! vue-cookie */ \"./node_modules/vue-cookie/src/vue-cookie.js\");\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(v_tooltip__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vue_router__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vue_scrollto__WEBPACK_IMPORTED_MODULE_5___default.a);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(VueCookie);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vue_parallax_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\nconst routes = [{\n  path: '/'\n}];\nconst router = new vue_router__WEBPACK_IMPORTED_MODULE_6__[\"default\"]({\n  mode: 'history',\n  base: \"/\",\n  routes // short for `routes: routes`\n});\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  created() {\n    aos__WEBPACK_IMPORTED_MODULE_2___default.a.init();\n  },\n  router,\n  render: h => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n}).$mount('#app');\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/main.js */\"./src/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/main.js?");

/***/ })

/******/ });