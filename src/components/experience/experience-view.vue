<template>
  <main id="experience-view">
    <div class="container-fluid">
      <div class="row">
        <div id="experience-view-title" class="col-12 text-left">
          <router-link
            :to="{ name: 'home', hash: '#experiences' }"
            v-on:click="anchorHashCheck"
          >
            <span class="experience-cta subtitle subtitle-left subtitle-purple">
              Experience {{ date }}
            </span>
          </router-link>
          <!-- <span>Experience {{ date }}</span> -->
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
                v-for="(imagePath, index) in phototeque"
                v-bind:key="imagePath"
                class="carousel-item"
                :class="[index == 0 ? 'active' : '']"
              >
                <img :src="imagePath" class="d-block w-100" alt="..." />
                <video controls width="250">
                  <source
                    :src="
                      require('@/assets/experiences/yana-kishko/cover-yana-kishko-video-1.mp4')
                    "
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carousel-experience"
              role="button"
              data-slide="prev"
            >
              <div class="wrapper-carousel-icon wrapper-carousel-icon-left">
                <icon-arrow-left-small
                  colorClass="custom-icon-white"
                  height="30"
                  width="30"
                />
                <span
                  class="d-none carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
              </div>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carousel-experience"
              role="button"
              data-slide="next"
            >
              <div class="wrapper-carousel-icon wrapper-carousel-icon-right">
                <icon-arrow-right-small
                  colorClass="custom-icon-white"
                  height="30"
                  width="30"
                />
                <span
                  class="d-none carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
              </div>
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
import iconArrowRightSmall from "../../components/icons/icon-arrow-right-small.vue";
import iconArrowLeftSmall from "../../components/icons/icon-arrow-left-small.vue";

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    phototeque: {
      type: Array,
      required: false
    }
  },
  components: { iconArrowRightSmall, iconArrowLeftSmall },
  data: function() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
