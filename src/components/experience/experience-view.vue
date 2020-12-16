<template>
  <main id="experience-view">
    <div class="container-fluid">
      <div class="row">
        <div id="experience-view-title" class="col-12 text-left">
          <span class="experience-cta subtitle subtitle-left subtitle-purple">
            Experience 01/02/2020
          </span>
          <br />
          <h3>{{ title }}</h3>
        </div>
        <div class="offset-0 col-12 col-lg-5 text-center">
          <div
            id="carousel-experience"
            class="carousel slide d-block"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div
                v-for="(imagePath, index) in images"
                v-bind:key="imagePath"
                class="carousel-item"
                :class="[index == 0 ? 'active' : '']"
              >
                <img :src="imagePath" class="d-block w-100" alt="..." />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carousel-experience"
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
              href="#carousel-experience"
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
        <div id="experience-view-text" class="col-12 col-lg-6">
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
