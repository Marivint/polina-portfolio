<template>
  <main>
    <section id="experiences">
      <div class="container-fluid">
        <div
          id="subtitle-portfolio"
          class="row justify-content-center animate__animated animate__fadeIn"
        >
          <div class="col-12 text-center user-select-none">
            <h2 v-html="$t('page.experiences.title')"></h2>
          </div>
          <div
            id="border-experiences"
            class="col-2 col-lg-1 align-self-center user-select-none"
          ></div>
        </div>

        <div
          id="experiences-filter"
          class="row justify-content-center user-select-none text-center animate__animated animate__fadeIn"
        >
          <div class="col-md-auto">
            <span
              v-bind:class="[filterCategory === 'all' ? 'active' : '']"
              @click="activeFilter('all')"
              v-html="$t('page.experiences.category.all')"
            ></span>
          </div>
          <div class="col-md-auto">
            <span
              v-bind:class="[filterCategory === 'fashion' ? 'active' : '']"
              @click="activeFilter('fashion')"
              v-html="$t('page.experiences.category.fashion')"
            ></span>
          </div>
          <div class="col-md-auto">
            <span
              v-bind:class="[filterCategory === 'management' ? 'active' : '']"
              @click="activeFilter('management')"
              v-html="$t('page.experiences.category.cultural')"
            ></span>
          </div>
          <div class="col-md-auto">
            <span
              v-bind:class="[filterCategory === 'creation' ? 'active' : '']"
              @click="activeFilter('creation')"
              v-html="$t('page.experiences.category.creation')"
            ></span>
          </div>
        </div>

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
  </main>
</template>

<script>
import experience from "../components/experience/experience.vue";
var Vue = require("vue");

export default {
  components: { experience },
  data: function() {
    return {
      datasExperiences: [],
      arrayExperiences: [],
      filterCategory: "all"
    };
  },
  methods: {
    activeFilter: function(category) {
      this.filterCategory = category;
    },
    displayArrayExperiences: function(disableDelay = false) {
      let scope = this;
      let format = "left";
      this.arrayExperiences = [];
      Vue.nextTick(function() {
        scope.$root.translate.page.experiences.datas.forEach(function(
          datasExp
        ) {
          let exp = Object.assign({}, datasExp);
          if (window.isMobile) {
            exp.otherClass = "animate__animated animate__fadeIn";
          }
          if (disableDelay == true) {
            exp.otherClass = "animate__animated animate__fadeIn";
          }
          if (
            scope.filterCategory == "all" ||
            scope.filterCategory == exp.category
          ) {
            if (scope.filterCategory != "all") {
              exp.otherClass = "animate__animated animate__fadeIn";
            }
            exp.src = require("@/assets/experiences/" + exp.src);
            exp.format = format;
            scope.arrayExperiences.push(exp);
            format = format == "left" ? "right" : "left";
          }
        });
      });
    }
  },
  watch: {
    filterCategory: function() {
      this.displayArrayExperiences(true);
    },
    "$root.translate": function() {
      this.displayArrayExperiences();
    }
  },
  mounted() {
    this.displayArrayExperiences();
  }
};
</script>
