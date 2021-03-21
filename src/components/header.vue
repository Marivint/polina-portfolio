<template>
  <header>
    <div class="container-fluid">
      <nav class="row header-center">
        <div class="col-auto col-sm-8 col-md-9">
          <div class="d-inline header-item-logo">
            <router-link id="header-logo" :to="{ name: 'home' }">
              Polina Gusarova
            </router-link>
          </div>

          <div class="d-inline header-item header-item-grey">
            <router-link :to="{ name: 'experiences' }">
              <icon-category
                colorClass="custom-icon-black"
                otherClass="header-item-icon"
                height="24"
                width="24"
              ></icon-category>
              <span v-html="$t('header.experiences')"></span>
            </router-link>
          </div>

          <div class="d-inline header-item header-item-grey">
            <router-link :to="{ name: 'contact' }">
              <icon-message
                colorClass="custom-icon-black"
                otherClass="header-item-icon"
                height="24"
                width="24"
              ></icon-message>
              <span v-html="$t('header.contact')"></span>
            </router-link>
          </div>
        </div>
        <div class="col-auto text-right d-none d-sm-block">
          <lang-switcher />
        </div>
        <div class="col text-right">
          <button id="header-burger"></button>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>
import langSwitcher from "../components/lang-switcher.vue";
import iconCategory from "../components/icons/icon-category.vue";
import iconMessage from "../components/icons/icon-message.vue";

export default {
  components: {
    langSwitcher,
    iconCategory,
    iconMessage
  },
  data: function() {
    return {};
  },
  mounted() {}
};
</script>
