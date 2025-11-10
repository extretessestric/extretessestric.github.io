<template>
  <div :class="{
      'bg-light': !nightMode,
      'bg-dark2': nightMode,
      'text-light': nightMode,
    }" class="p-st">
    <div class="container py-4">
      <div
        class="text-center"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <span
          class="title text-center"
          :class="{ pgray: !nightMode, 'text-light': nightMode }"
          >industries.</span
        >
      </div>
      <hr
        width="50%"
        :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
      />
      <br />
      <div class="row">
        <div
          class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 text-center pb-5 px-4"
          v-for="(industry, idx) in industries"
          :key="industry.title"
          data-aos="fade-up"
          data-aos-offset="10"
          data-aos-delay="30"
          :style="{ 'transition-delay': idx / 4.2 + 's' }"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <div class="bg-div"><i :class="industry.icon"></i></div>
          <div class="title2 pt-2">{{ industry.title }}</div>
          <hr
            width="50%"
            :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
          />
           <span
                  class="mx-1 badge p-2 mb-2"
                  v-for="d in industry.domains"
                  :class="{                    
                    'bg-dark': nightMode,                    
                    }"
                  :key="d"                  
                  >{{ d }}
            </span>          
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
import info from "../../info";

export default {
  name: "Industries",
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      industries: info.industries,
    };
  },
};
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 500;
}
.title1 {
  font-size: 24px;
  font-weight: 400;
}

.title2 {
  font-size: 20px;
  font-weight: 500;
}

.title3 {
  font-size: 16px;
  font-weight: 400;
}

.badge {
  background-color: #d3e3e9;
  transition: all 0.5s;
  font-weight: 500;
}

.bg-dark2 {
  background-color: #2f3132 !important;
}

.fa {
  color: rgb(212, 149, 97);
  font-size: 40px;
  transition: all 0.5s;
}

.fas {
  color: rgb(212, 149, 97);
  font-size: 40px;
  /* font-weight: bold; */
  transition: all 0.5s;
}
</style>
