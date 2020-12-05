<template>
  <header>
    <div class="container-fluid">
      <nav class="row header-center">
        <div class="col-auto col-md-11">
          <div class="d-inline header-item-logo">
            Polina Gusarova
          </div>

          <div class="d-inline header-item header-item-grey">
            <icon-profile
              colorClass="custom-icon-black"
              otherClass="header-item-icon"
              height="24"
              width="24"
            ></icon-profile>
            About
          </div>

          <div class="d-inline header-item header-item-grey">
            <icon-category
              colorClass="custom-icon-black"
              otherClass="header-item-icon"
              height="24"
              width="24"
            ></icon-category>
            Work
          </div>

          <div class="d-inline header-item header-item-grey">
            <icon-message
              colorClass="custom-icon-black"
              otherClass="header-item-icon"
              height="24"
              width="24"
            ></icon-message>
            Contact
          </div>
        </div>
        <div class="col text-right">
          <button class="header-burger"></button>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>
import iconProfile from "../components/icons/icon-profile.vue";
import iconCategory from "../components/icons/icon-category.vue";
import iconMessage from "../components/icons/icon-message.vue";

export default {
  components: {
    iconProfile,
    iconCategory,
    iconMessage
  },
  data: function() {
    return {};
  },
  mounted() {}
};
</script>
