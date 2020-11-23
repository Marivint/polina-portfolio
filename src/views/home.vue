<template>
  <!-- About -->
  <section id="about">
    <div class="container-fluid">
      <div class="row justify-content-md-center">
        <div id="about-text" class="col-8">
          <h1 class="user-select-none">
            I am a junior production manager.
          </h1>
          <p>
            Passionate about creating and development of cultural projects, I
            bring my managerial and artistic skills acquired during my
            international career.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Skills -->
  <section id="skills">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-4"><h2>Production</h2></div>
        <div class="col-4"><h2>Communication</h2></div>
        <div class="col-4"><h2>Creation</h2></div>
      </div>
    </div>
  </section>

  <section id="projects">
    <div class="container-fluid">
      <project
        format="left"
        page="1-7"
        title="Lambinet Museum in complete privacy"
        :subtitles="['Conception', 'Management', 'Production']"
        :src="require('@/assets/projects/museelambinet.jpg')"
      ></project>
      <project
        format="right"
        page="1-7"
        title="Lambinet Museum in complete privacy"
        :subtitles="['Conception', 'Management', 'Production']"
        :src="require('@/assets/projects/museelambinet.jpg')"
      ></project>
    </div>
  </section>
</template>

<script>
import project from "../components/project/project.vue";

export default {
  components: { project }
};
</script>
