<template>
  <section id="experiences">
    <div class="container-fluid">
      <div
        id="subtitle-portfolio"
        class="row justify-content-center animate__animated animate__faster animate__fadeIn"
      >
        <div class="col-12 text-center user-select-none">
          <h2>My experiences</h2>
        </div>
        <div
          id="border-experiences"
          class="col-2 col-lg-1 align-self-center user-select-none"
        ></div>
      </div>

      <div
        id="experiences-filter"
        class="row justify-content-center user-select-none text-center"
      >
        <div class="col-md-auto">
          <span
            v-bind:class="[filterExperience === 'all' ? 'active' : '']"
            @click="activeFilter('all')"
            >All</span
          >
        </div>
        <div class="col-md-auto">
          <span
            v-bind:class="[filterExperience === 'fashion' ? 'active' : '']"
            @click="activeFilter('fashion')"
            >Fashion</span
          >
        </div>
        <div class="col-md-auto">
          <span
            v-bind:class="[filterExperience === 'management' ? 'active' : '']"
            @click="activeFilter('management')"
            >Cultural management</span
          >
        </div>
        <div class="col-md-auto">
          <span
            v-bind:class="[filterExperience === 'creation' ? 'active' : '']"
            @click="activeFilter('creation')"
            >Creation</span
          >
        </div>
      </div>

      <br />
      <br />
      <br />

      <template v-for="exp in arrayExperiences" v-bind:key="exp">
        <experience
          v-bind="exp"
          :format="exp.format"
          :page="exp.page"
          :title="exp.title"
          :subtitles="exp.subtitles"
          :src="exp.src"
          :ctaRouteName="exp.ctaRouteName"
          :otherClass="exp.otherClass"
        ></experience>
      </template>
    </div>
  </section>
</template>

<script>
import experience from "../components/experience/experience.vue";
// import Vue from "vue";
var Vue = require("vue");

export default {
  components: { experience },
  data: function() {
    return {
      datasExperiences: [],
      arrayExperiences: [],
      filterExperience: "all"
    };
  },
  methods: {
    activeFilter: function(filter) {
      this.filterExperience = filter;
    },
    displayArrayExperiences: function() {
      let scope = this;
      let format = "left";
      this.arrayExperiences = [];
      Vue.nextTick(function() {
        scope.datasExperiences.forEach(function(exp) {
          if (
            scope.filterExperience == "all" ||
            scope.filterExperience == exp.filter
          ) {
            if (scope.filterExperience != "all") {
              exp.otherClass = "animate__animated animate__fadeIn";
            }
            exp.format = format;
            scope.arrayExperiences.push(exp);
            format = format == "left" ? "right" : "left";
          }
        });
      });
    }
  },
  watch: {
    filterExperience: function() {
      this.displayArrayExperiences();
    },
    datasExperiences: function() {
      this.displayArrayExperiences();
    }
  },
  mounted() {
    this.datasExperiences = [
      {
        format: "right",
        filter: "fashion",
        page: "1-6",
        title: "Yana Kishko video",
        subtitles: ["Production management", "Partnership"],
        src: require("@/assets/experiences/yana-kishko/cover-yana-kishko.jpg"),
        ctaRouteName: "yanaKishko",
        otherClass:
          "animate__animated animate__faster animate__fadeIn first__experience"
      },
      {
        format: "left",
        filter: "management",
        page: "1-6",
        title: "Lambinet Museum in complete privacy",
        subtitles: ["Conception", "Management", "Production"],
        src: require("@/assets/experiences/musee-lambinet/cover-musee-lambinet.jpg"),
        ctaRouteName: "museeLambinet",
        otherClass: "scroll-animate animate__animated"
      },
      {
        format: "right",
        filter: "management",
        page: "2-6",
        title: "Meet my project",
        subtitles: ["Partnership", "Production"],
        src: require("@/assets/experiences/meet-my-project/cover-meet-my-project.jpg"),
        ctaRouteName: "meetMyProject",
        otherClass: "scroll-animate animate__animated"
      },
      {
        format: "left",
        filter: "management",
        page: "3-6",
        title: "Svez'da production",
        subtitles: ["Management", "Production", "Communication"],
        src: require("@/assets/experiences/svezda-production/cover-svezda-production.jpg"),
        ctaRouteName: "svezdaProduction",
        otherClass: "scroll-animate animate__animated"
      },
      {
        format: "right",
        filter: "fashion",
        page: "4-6",
        title: "Alexander Vasiliev’s Volga Seasons",
        subtitles: ["Pre-production", "Production"],
        src: require("@/assets/experiences/alexander-vassiliev/cover-alexander-vassiliev.jpg"),
        ctaRouteName: "alexanderVasilievVolga",
        otherClass: "scroll-animate animate__animated"
      },
      {
        format: "left",
        filter: "creation",
        page: "5-6",
        title: "Fashion Collection",
        subtitles: ["Conception", "Realisation"],
        src: require("@/assets/experiences/fashion-collection/cover-fashion-collection.jpg"),
        ctaRouteName: "fashionCollection",
        otherClass: "scroll-animate animate__animated"
      },
      {
        format: "right",
        filter: "creation",
        page: "6-6",
        title: "Life Flight’ Performance",
        subtitles: ["Conception", "Creation"],
        src: require("@/assets/experiences/life-flight-performance/cover-life-flight-performance.jpg"),
        ctaRouteName: "lifeFlightPerformance",
        otherClass: "scroll-animate animate__animated"
      }
    ];
  }
};
</script>
