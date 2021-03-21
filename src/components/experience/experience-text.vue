<template>
  <div
    class="experience-text"
    :class="
      showFormat === 1
        ? 'offset-1 col-11 offset-md-0 col-md-5 text-left pl'
        : 'offset-1 col-11 col-md-5 text-right pr'
    "
  >
    <p class="experience-page">{{ page }}</p>

    <h3>{{ title }}</h3>

    <p>{{ subCategoryDisplay }}</p>

    <span
      class="experience-cta subtitle subtitle-purple"
      :class="showFormat === 1 ? 'subtitle-left' : 'subtitle-right'"
    >
      <router-link :to="{ name: ctaRouteName }">{{
        $t("learnMore")
      }}</router-link>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    showFormat: {
      type: Number,
      required: true
    },
    page: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subCategory: {
      type: Array,
      required: true
    },
    ctaRouteName: {
      type: String,
      required: true
    },
    someClass: {
      type: String,
      required: false
    }
  },
  computed: {
    subCategoryDisplay: function() {
      let scope = this;
      let subCategory = "";
      this.subCategory.forEach(subtitle => {
        subCategory +=
          scope.$t("page.experiences.subCategory." + subtitle) + " - ";
      });
      //   Delete last -
      if (subCategory.length > 0) {
        subCategory = subCategory.slice(0, -2);
      }
      return subCategory;
    }
  },
  mounted() {}
};
</script>
