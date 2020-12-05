<template>
  <div id="lotte-hotel">
    <!-- Contact -->
    <section id="contact">
      <div class="container-fluid">
        <div class="row justify-content-center align-items-center">
          <div id="contact-card" class="col-9">
            <div class="row">
              <div class="col-6">
                <span class="project-cta subtitle subtitle-white subtitle-left"
                  >Contact me
                </span>

                <br />

                <h2>Let's Work <br />Together.</h2>

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
              <div class="col-6">
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
              <div class="col-6">
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

                <button class="btn btn-blue col-8">
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
        <div class="row">
          <div class="col-2 offset-md-1">
            <span class="project-cta subtitle subtitle-white subtitle-left"
              >About me
            </span>
          </div>
          <div class="col-2">
            <span class="project-cta subtitle subtitle-white subtitle-left"
              >My projects
            </span>
          </div>
          <div class="col-2">
            <span class="project-cta subtitle subtitle-white subtitle-left"
              >Contact me
            </span>
          </div>
          <div class="col-4 text-right">
            <icon-linkedin
              colorClass="custom-icon-white"
              otherClass=""
              height="30"
              width="30"
            />
          </div>
        </div>
        <div class="row justify-content-around" id="footer-copyright">
          <div class="col-10 footer-hr"></div>
          <div class="w-100"></div>
          <div class="col-4 text-left" id="copyright">
            &copy; Copyright 2020, Polina Gusarova.
          </div>
          <div class="col-4 text-right">
            Made by
            <a href="#"
              ><img id="logo-ym" src="@/assets/logos/logo-ym.png" alt=""
            /></a>
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
    height: {
      type: String,
      required: false
    },
    width: {
      type: String,
      required: false
    },
    alt: {
      type: String,
      required: false
    },
    someClass: {
      type: String,
      required: false
    }
  },
  data: function() {
    return {};
  },
  mounted() {}
};
</script>
