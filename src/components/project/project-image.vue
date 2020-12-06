<template>
  <div
    class="project-img"
    :class="
      showFormat === 1
        ? 'offset-md-1 col-12 col-md-5 text-right pr'
        : 'col-12 col-md-5 text-left pl'
    "
  >
    <img class="img-fluid" :src="src" />
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
    }
  }
};
</script>
