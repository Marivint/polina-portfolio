<template>
  <div id="lotte-hotel">
    <!-- Contact -->
    <section id="contact" v-if="enableContact">
      <div class="container-fluid">
        <div class="row justify-content-center align-items-center">
          <div id="contact-card" class="col-12 col-md-10 col-lg-9">
            <div class="row">
              <div class="col-12">
                <span class="project-cta subtitle subtitle-blue subtitle-left"
                  >Contact me
                </span>
                <br />
                <h2>Let's Work <br />Together.</h2>
              </div>
              <div class="col-12 col-md-6">
                <br />
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Deleniti, esse architecto dolorum alias iusto ab voluptatum,
                  assumenda natus.
                </p>
              </div>
              <div class="col-6 text-center"></div>
            </div>
            <form id="contact-form" class="row">
              <div class="col-12 col-lg-6">
                <span class="svg-text">
                  <icon-message
                    colorClass="custom-icon-white"
                    otherClass=""
                    height="30"
                    width="30"
                  />
                  <div class="text-wrapper">gusarova@gmail.com</div>
                </span>

                <span class="svg-text">
                  <icon-location
                    colorClass="custom-icon-white"
                    otherClass=""
                    height="30"
                    width="30"
                  />
                  <div class="text-wrapper">Charenton-le-pont</div>
                </span>
              </div>
              <div class="col-12 col-lg-6">
                <div class="form-label-group">
                  <input
                    type="text"
                    id="inputName"
                    class="form-control"
                    placeholder="Name"
                    required
                  />
                </div>

                <br />

                <div class="form-label-group">
                  <input
                    type="email"
                    id="inputEmail"
                    class="form-control"
                    placeholder="Email address"
                    required
                  />
                </div>

                <br />

                <textarea
                  class="form-control"
                  id="inputMessage"
                  placeholder="Your message"
                  rows="10"
                  required
                ></textarea>

                <br />

                <button class="btn col-5 col-lg-7">
                  Send
                  <icon-arrow-right
                    colorClass="custom-icon-white"
                    otherClass=""
                    height="30"
                    width="30"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-11 col-lg-2">
            <br class="d-block d-lg-none" />
            <p>
              <a href="#">
                <span class="project-cta subtitle subtitle-white subtitle-left"
                  >About me
                </span>
              </a>
            </p>
          </div>
          <div class="col-11 col-sm-5 col-lg-2">
            <br class="d-block d-lg-none" />
            <p>
              <a href="#projects">
                <span class="project-cta subtitle subtitle-white subtitle-left"
                  >My projects
                </span>
              </a>
            </p>
          </div>
          <div class="col-7 col-sm-5 col-lg-2">
            <br class="d-block d-lg-none" />
            <p>
              <a href="#contact">
                <span class="project-cta subtitle subtitle-white subtitle-left"
                  >Contact me
                </span>
              </a>
            </p>
          </div>
          <div class="col-4 col-sm-1 col-lg-5 text-right">
            <br class="d-block d-lg-none" />
            <a
              href="https://www.linkedin.com/in/polina-gusarova-2791a4198/"
              target="_blank"
            >
              <icon-linkedin
                colorClass="custom-icon-white"
                otherClass="svg-linkedin"
                height="30"
                width="30"
              />
            </a>
          </div>
        </div>
        <div id="footer-copyright" class="row justify-content-center">
          <div class="col-11"><hr /></div>
          <div class="w-100"></div>
          <div class="col-5 text-left" id="copyright">
            <p>
              &copy; <span class="d-none d-md-inline">Copyright</span>
              2020
              <span class="d-none d-md-inline">Polina Gusarova.</span>
            </p>
          </div>
          <div class="col-6 text-right">
            <p>
              Made by
              <a
                href="https://www.linkedin.com/in/yvann-marivint-60810b121/"
                target="_blank"
                ><img id="logo-ym" src="@/assets/logos/logo-ym.png" alt=""
              /></a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import iconMessage from "../components/icons/icon-message.vue";
import iconLocation from "../components/icons/icon-location.vue";
import iconArrowRight from "../components/icons/icon-arrow-right.vue";
import iconLinkedin from "../components/icons/icon-linkedin.vue";
// import iconHeart from "../components/icons/icon-heart.vue";

export default {
  components: {
    iconMessage,
    iconLocation,
    iconArrowRight,
    iconLinkedin
  },
  props: {
    enableContact: {
      type: Boolean,
      required: true
    }
  },
  data: function() {
    return {};
  },
  mounted() {}
};
</script>
