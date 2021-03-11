<template>
  <div
    class="experience-img"
    :class="
      showFormat === 1
        ? 'offset-md-1 col-12 col-md-5 text-right pr'
        : 'col-12 col-md-5 text-left pl'
    "
  >
    <router-link :to="{ name: ctaRouteName }">
      <img class="img-fluid" :src="src" />
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    showFormat: {
      type: Number,
      required: true
    },
    src: {
      type: String,
      required: true
    },
    someClass: {
      type: String,
      required: false
    },
    ctaRouteName: {
      type: String,
      required: true
    }
  }
};
</script>
