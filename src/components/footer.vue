<template>
  <div id="lotte-hotel">
    <!-- Contact -->
    <section id="contact" v-if="enableContact">
      <div class="container-fluid">
        <div class="row justify-content-center align-items-center">
          <div id="contact-card" class="col-12 col-md-10 col-lg-9">
            <div class="row">
              <div class="col-12">
                <span
                  class="experience-cta subtitle subtitle-blue subtitle-left"
                  >Contact me
                </span>
                <br />
                <h2>Let's Work <br class="d-none d-lg-inline" />Together.</h2>
              </div>

              <div class="col-6 text-center"></div>
            </div>
            <form id="contact-form" class="row" @submit="submitContact">
              <div v-show="contactForm.sent == true" class="col-12">
                <div class="mb-5 alert alert-light" role="alert">
                  <div class="row justify-content-center align-items-center">
                    <div class="col-auto">
                      <icon-tick
                        colorClass="custom-icon-green"
                        otherClass="custom-icon-big"
                        height="30"
                        width="30"
                      />
                    </div>
                    <div class="col-12 col-sm">
                      Thank you for contacting me. <br />
                      Your message has been successfully sent. I will contact
                      you very soon!
                    </div>
                  </div>
                </div>
              </div>
              <div v-show="contactForm.sent == false" class="col-12">
                <div class="mb-5 alert alert-danger" role="alert">
                  <div class="row justify-content-center align-items-center">
                    <div class="col-auto">
                      <icon-close
                        colorClass="custom-icon-red"
                        otherClass="custom-icon-big"
                        height="30"
                        width="30"
                      />
                    </div>
                    <div class="col-12 col-sm">
                      Sorry, your message has not been send. <br />
                      Please contact me on
                      <a href="mailto:{{emailTo}}">{{ emailTo }}</a>
                    </div>
                  </div>
                </div>
              </div>
              <div v-show="emailValid == false" class="col-12">
                <div class="mb-5 alert alert-danger" role="alert">
                  <div class="row justify-content-center align-items-center">
                    <div class="col-auto">
                      <icon-danger
                        colorClass="custom-icon-red"
                        otherClass="custom-icon-big"
                        height="30"
                        width="30"
                      />
                    </div>
                    <div class="col-12 col-sm">
                      Invalid email address field.
                    </div>
                  </div>
                </div>
              </div>
              <template
                v-if="contactForm.sent == null || contactForm.sent == false"
              >
                <div class="col-12 col-lg-6">
                  <span class="svg-text">
                    <icon-message
                      colorClass="custom-icon-white"
                      otherClass=""
                      height="30"
                      width="30"
                    />
                    <div class="text-wrapper">
                      <a href="mailto:{{emailTo}}">{{ emailTo }}</a>
                    </div>
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
                      v-model="contactForm.name"
                      placeholder="Name"
                      required
                    />
                  </div>

                  <!-- <br /> -->

                  <div class="form-label-group">
                    <input
                      type="email"
                      id="inputEmail"
                      class="form-control"
                      v-model="contactForm.email"
                      placeholder="Email address"
                      required
                    />
                  </div>

                  <!-- <br /> -->

                  <textarea
                    class="form-control"
                    id="inputMessage"
                    v-model="contactForm.message"
                    placeholder="Your message"
                    rows="10"
                    required
                  ></textarea>

                  <!-- <br /> -->

                  <button class="btn col-12 col-lg-7">
                    Send
                    <icon-arrow-right
                      colorClass="custom-icon-white"
                      height="30"
                      width="30"
                    />
                  </button>
                </div>
              </template>
            </form>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <!-- <div class="col-11 col-lg-2">
            <br class="d-block d-lg-none" />
            <p>
              <router-link id="header-logo" :to="{ name: 'home' }">
                <span
                  class="experience-cta subtitle subtitle-white subtitle-left"
                  >About me
                </span>
              </router-link>
            </p>
          </div> -->
          <!-- <div class="col-11 col-sm-5 col-lg-2"> -->
          <div class="col-11 col-sm-5 col-lg-3">
            <br class="d-block d-lg-none" />
            <p>
              <router-link
                :to="{ name: 'home', hash: '#experiences' }"
                v-on:click="anchorHashCheck"
              >
                <span
                  class="experience-cta subtitle subtitle-white subtitle-left"
                  >My experiences
                </span>
              </router-link>
            </p>
          </div>
          <!-- <div class="col-7 col-sm-5 col-lg-2"> -->
          <div class="col-7 col-sm-5 col-lg-3">
            <br class="d-block d-lg-none" />
            <p>
              <router-link
                :to="{ name: 'home', hash: '#contact' }"
                v-on:click="anchorHashCheck"
              >
                <span
                  class="experience-cta subtitle subtitle-white subtitle-left"
                  >Contact me
                </span>
              </router-link>
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
import axios from "axios";
const querystring = require("querystring");

// Icons
import iconMessage from "../components/icons/icon-message.vue";
import iconLocation from "../components/icons/icon-location.vue";
import iconArrowRight from "../components/icons/icon-arrow-right.vue";
import iconLinkedin from "../components/icons/icon-linkedin.vue";
// import iconInfoCircle from "../components/icons/icon-info-circle.vue";
import iconTick from "../components/icons/icon-tick.vue";
import iconClose from "../components/icons/icon-close.vue";
import iconDanger from "../components/icons/icon-danger.vue";
import $ from "jquery";

export default {
  components: {
    iconMessage,
    iconLocation,
    iconArrowRight,
    iconLinkedin,
    iconTick,
    iconClose,
    iconDanger
  },
  props: {
    enableContact: {
      type: Boolean,
      required: true
    }
  },
  data: function() {
    return {
      emailTo: process.env.VUE_APP_CONTACT_EMAIL,
      emailValid: true,
      // eslint-disable-next-line no-useless-escape
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      contactForm: {
        toEmail: process.env.VUE_APP_CONTACT_EMAIL,
        name: "",
        email: "",
        message: "",
        sent: null
      }
    };
  },
  mounted() {},
  methods: {
    submitContact(e) {
      e.preventDefault();
      if (this.isEmailValid() === true) {
        axios
          .post(
            process.env.BASE_URL + "mail.php",
            querystring.stringify(this.contactForm)
          )
          .then(() => {
            this.contactForm.sent = true;
          })
          .catch(function() {
            this.contactForm.sent = false;
          });
      }
    },
    isEmailValid() {
      let res =
        this.contactForm.email == ""
          ? false
          : this.reg.test(this.contactForm.email)
          ? true
          : false;
      this.emailValid = res == true ? true : false;
      return res;
    }
  },
  watch: {
    "contactForm.sent": function() {
      var form = $("#contact-form");
      window.scrollTo(form);
    }
  }
};
</script>
