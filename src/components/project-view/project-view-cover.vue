<template>
  <section id="project-view">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-12">
          <div
            id="carouselExampleFade"
            class="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="@/assets/projects/recadre/01-museelambinet.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="@/assets/projects/recadre/02-academie-fast.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="@/assets/projects/recadre/03-alexander-vassiliev.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleFade"
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
        <div class="col-12">
          <h3>Lambinet Museum in complete privacy</h3>
          <p>
            In February 2020, the "Culture Sans Frontières" association proposed
            an innovative cultural mediation project "Musée Lambinet en toute
            intimité" within the Lambinet museum in the city of Versailles. More
            than a visit, it's an immersive and sensitive experience during
            which visitors interfere in the daily life of bourgeois in the time
            of Louis XV.
            <br />
            <br />
            The visit consisted of 4 workshops, each based on the different
            rhythms of the day: getting up, having lunch, afternoon games and
            reception in the evening. Visitors were invited to discover the
            codes of the court's pageantry and social life: how to put on a wig?
            What types of perfumes and makeup were used and how were they
            applied? What games were we playing at that time while having tea?
            And many other themes. A period tea room in partnership with a
            pastry chef from Versailles where young and old could come and eat
            throughout the event was also set up.
            <br />
            <br />
            With the association's team, I participated in all stages of the
            event: conception, promotion, management, production of mediation
            tools and project implementation.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    format: {
      type: String,
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
