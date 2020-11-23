<template>
  <div class="col-6 project-img">
    <img :src="src" />
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
