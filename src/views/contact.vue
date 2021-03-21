<template>
  <main>
    <!-- Contact -->
    <section id="contact">
      <div class="container-fluid">
        <div class="row justify-content-center align-items-center">
          <div id="contact-card" class="col-12 col-md-10 col-lg-9">
            <div class="row">
              <div class="col-12">
                <span
                  class="experience-cta subtitle subtitle-blue subtitle-left"
                  v-html="$t('page.contact.subtitle')"
                >
                </span>
                <br />
                <h2 v-html="$t('page.contact.title')"></h2>
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
                    <div
                      class="col-12 col-sm"
                      v-html="$t('page.contact.form.success')"
                    ></div>
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
                        <span
                          v-html="$t('page.contact.form.error.send')"
                        ></span>
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
                      <div
                        class="col-12 col-sm"
                        v-html="$t('page.contact.form.error.email')"
                      ></div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6">
                  <div class="form-label-group">
                    <input
                      type="text"
                      id="inputName"
                      class="form-control"
                      v-model="contactForm.name"
                      :placeholder="$t('page.contact.form.name')"
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
                      :placeholder="$t('page.contact.form.email')"
                      required
                    />
                  </div>

                  <!-- <br /> -->

                  <textarea
                    class="form-control"
                    id="inputMessage"
                    v-model="contactForm.message"
                    :placeholder="$t('page.contact.form.message')"
                    rows="10"
                    required
                  ></textarea>

                  <!-- <br /> -->

                  <button class="btn col-12 col-lg-7">
                    {{ $t("page.contact.form.send") }}
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
  </main>
</template>

<script>
import axios from "axios";
import $ from "jquery";
const querystring = require("querystring");
// Icons
import iconMessage from "../components/icons/icon-message.vue";
import iconLocation from "../components/icons/icon-location.vue";
import iconArrowRight from "../components/icons/icon-arrow-right.vue";
// import iconLinkedin from "../components/icons/icon-linkedin.vue";
import iconTick from "../components/icons/icon-tick.vue";
import iconClose from "../components/icons/icon-close.vue";
import iconDanger from "../components/icons/icon-danger.vue";

export default {
  components: {
    iconMessage,
    iconLocation,
    iconArrowRight,
    // iconLinkedin,
    iconTick,
    iconClose,
    iconDanger
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
