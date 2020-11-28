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

  <footer>
    <br />
    <br />
    <div class="container-fluid">
      <div class="row">
        <div class="col-2 offset-md-1">
          <span class="project-cta subtitle subtitle-grey subtitle-left"
            >About me
          </span>
        </div>
        <div class="col-2">
          <span class="project-cta subtitle subtitle-grey subtitle-left"
            >My projects
          </span>
        </div>
        <div class="col-2">
          <span class="project-cta subtitle subtitle-grey subtitle-left"
            >Contact me
          </span>
        </div>
      </div>
      <div class="row justify-content-around" id="footer-copyright">
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
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "./scss/app.scss";
</style>
