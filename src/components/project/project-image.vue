<template>
  <div
    class="col-5 project-img"
    :class="showFormat === 1 ? 'text-left' : 'text-right'"
  >
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
