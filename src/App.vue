<template>
  <!-- Header -->
  <header>
    <div class="container-fluid">
      <nav class="row header-center">
        <div class="col-10">
          <div class="d-inline header-item-logo">
            <!-- <logo class="header-logo"></logo> -->
            Polina Gusarova
          </div>

          <div class="d-inline header-item header-item-grey">
            <!-- <img src="@/assets/icon/chart.svg" /> -->
            About
          </div>

          <div class="d-inline header-item header-item-grey">
            Work
          </div>

          <div class="d-inline header-item header-item-grey">
            Contact
          </div>
        </div>
        <div class="col text-right">
          <button class="header-burger"></button>
        </div>
      </nav>
    </div>
  </header>
  <!-- End header -->

  <!-- Router view -->
  <router-view />
  <!-- End router view -->

  <footer></footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "./scss/app.scss";
</style>
