<template>
  <main id="project-view">
    <div class="container-fluid h-100">
      <div class="row align-items-center h-100">
        <div class="offset-0 col-12 offset-md-1 col-md-4">
          <div
            id="carouselExampleFade"
            class="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div
                v-for="(imagePath, index) in images"
                v-bind:key="imagePath"
                class="carousel-item"
                :class="[!index ? 'active' : '']"
              >
                <img :src="imagePath" class="d-block w-100" alt="..." />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleFade"
              z
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleFade"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div class="offset-1 col-10 offset-md-1 col-md-5">
          <h3>{{ title }}</h3>
          <slot></slot>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    images: {
      type: Array,
      required: true
    }
  },
  components: {},
  data: function() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
