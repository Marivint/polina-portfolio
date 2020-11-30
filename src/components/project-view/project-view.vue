<template>
  <section id="project-view">
    <div class="container-fluid">
      <div class="row justify-content-center align-items-center">
        <div class="col-4">
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
        <div class="offset-1 col-5">
          <h3>Lambinet Museum in complete privacy</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea ut,
            autem iusto aut pariatur minima libero odio earum. Est nemo soluta
            cupiditate laudantium reprehenderit ad fugit tenetur dolorum
            corporis modi. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Dolor neque, rerum sapiente iste ipsum maxime aperiam vitae
            adipisci modi non nesciunt incidunt molestiae dolorem aspernatur
            totam consequatur minus magni. Natus. Officiis quasi fuga similique
            illum. Mollitia suscipit esse voluptate quam corrupti culpa quia,
            accusantium eum tempora tenetur id blanditiis quasi molestiae
            aperiam et dolorum, repellat omnis dolore ipsam, perspiciatis
            reiciendis. Suscipit neque unde autem accusamus, architecto vero
            dolor beatae repellat fugit distinctio maxime a quia facere?
            Repellendus, quis? Qui consectetur consequuntur non cupiditate
            veritatis nesciunt aperiam accusamus, voluptate est delectus? Culpa
            neque blanditiis ab est laudantium omnis asperiores molestiae,
            officiis ratione voluptate nobis voluptates repellendus mollitia.
            Tempore beatae neque officiis voluptates. Ratione adipisci nulla
            itaque possimus molestias aliquam sequi saepe. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Debitis ipsa ipsum provident
            perferendis a in quibusdam, unde velit ad, minus, animi perspiciatis
            quod numquam! Laboriosam animi ratione omnis. Alias, iste.
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
