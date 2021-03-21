<template>
  <footer>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <!-- <div class="col-11 col-sm-5 col-lg-2"> -->
        <div class="col-11 col-sm-4 col-lg-3">
          <br class="d-block d-lg-none" />
          <p>
            <router-link :to="{ name: 'experiences' }">
              <span
                class="experience-cta subtitle subtitle-black subtitle-left"
                v-html="$t('footer.experiences')"
              >
              </span>
            </router-link>
          </p>
        </div>
        <!-- <div class="col-7 col-sm-5 col-lg-2"> -->
        <div class="col-7 col-sm-4 col-lg-3">
          <br class="d-block d-lg-none" />
          <p>
            <router-link :to="{ name: 'contact' }">
              <span
                class="experience-cta subtitle subtitle-black subtitle-left"
                v-html="$t('footer.contact')"
              >
              </span>
            </router-link>
          </p>
        </div>
        <div class="col-4 col-sm-3 col-lg-5 text-right">
          <br class="d-block d-lg-none" />
          <a
            href="https://www.instagram.com/polina.prod/"
            target="_blank"
            class="pr-4"
          >
            <icon-instagram
              colorClass="custom-icon-black"
              otherClass="svg-linkedin"
              height="30"
              width="30"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/polina-gusarova-2791a4198/"
            target="_blank"
          >
            <icon-linkedin
              colorClass="custom-icon-black"
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
            2021
            <span class="d-none d-md-inline">Polina Gusarova.</span>
          </p>
        </div>
        <div class="col-6 text-right">
          <p>
            <span v-html="$t('footer.madeBy')"></span>
            <a
              href="https://www.linkedin.com/in/yvann-marivint-60810b121/"
              target="_blank"
              ><img
                id="logo-ym"
                width="20"
                height="20"
                src="@/assets/logos/logo-ym.png"
                alt=""
            /></a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import iconLinkedin from "../components/icons/icon-linkedin.vue";
import iconInstagram from "../components/icons/icon-instagram.vue";

export default {
  components: {
    iconLinkedin,
    iconInstagram
  }
};
</script>
