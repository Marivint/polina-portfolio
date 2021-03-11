<template>
  <header>
    <div class="container-fluid">
      <nav class="row header-center">
        <div class="col-auto col-md-10">
          <div class="d-inline header-item-logo">
            <router-link id="header-logo" :to="{ name: 'home' }">
              <!-- <img id="logo-black" src="@/assets/logos/logo-b.png" alt="" />
              <img
                id="logo-white"
                class="hidden"
                src="@/assets/logos/logo-w.png"
                alt=""
              /> -->
              Polina Gusarova
            </router-link>
          </div>

          <!-- <div class="d-inline header-item header-item-grey">
            <a href="#">
              <icon-profile
                colorClass="custom-icon-black"
                otherClass="header-item-icon"
                height="24"
                width="24"
              ></icon-profile>
              About
            </a>
          </div> -->

          <div class="d-inline header-item header-item-grey">
            <router-link :to="{ name: 'experiences' }">
              <icon-category
                colorClass="custom-icon-black"
                otherClass="header-item-icon"
                height="24"
                width="24"
              ></icon-category>
              Experiences
            </router-link>
          </div>

          <div class="d-inline header-item header-item-grey">
            <router-link
              :to="{ name: 'home', hash: '#contact' }"
              v-on:click="anchorHashCheck()"
            >
              <icon-message
                colorClass="custom-icon-black"
                otherClass="header-item-icon"
                height="24"
                width="24"
              ></icon-message>
              Contact
            </router-link>
          </div>
        </div>
        <div class="col text-right">
          <button id="header-burger"></button>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>
// import iconProfile from "../components/icons/icon-profile.vue";
import iconCategory from "../components/icons/icon-category.vue";
import iconMessage from "../components/icons/icon-message.vue";

export default {
  components: {
    // iconProfile,
    iconCategory,
    iconMessage
  },
  data: function() {
    return {};
  },
  mounted() {}
};
</script>
