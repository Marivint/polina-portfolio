<template>
  <!-- About -->
  <section id="about">
    <div class="container-fluid">
      <div class="row justify-content-md-center">
        <div id="about-text" class="col-8">
          <h1 class="user-select-none">
            I am a junior <br />Production Manager.
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

  <!-- Projects -->
  <section id="projects">
    <div class="container-fluid">
      <project
        format="left"
        page="1-7"
        title="Lambinet Museum in complete privacy"
        :subtitles="['Conception', 'Management', 'Production']"
        :src="require('@/assets/projects/placeholder-400x500.png')"
      ></project>

      <project
        format="right"
        page="1-7"
        title="Lambinet Museum in complete privacy"
        :subtitles="['Conception', 'Management', 'Production']"
        :src="require('@/assets/projects/placeholder-400x500.png')"
      ></project>
    </div>
  </section>

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
            <div class="col-6 text-center">
              <img
                id="contact-portrait"
                src="@/assets/portrait/black-white.png"
                alt=""
              />
            </div>
          </div>
          <div id="contact-form" class="row">
            <div class="col-6">
              <p>gusarova@gmail.com</p>
              <p>06 55 44 66 89</p>
              <p>Charenton-le-pont</p>
            </div>
            <div class="col-6">
              <div class="form-label-group">
                <input
                  type="email"
                  id="inputEmail"
                  class="form-control"
                  placeholder="Email address"
                  required
                  autofocus
                />
                <label for="inputEmail">Email address</label>
              </div>

              <div class="form-label-group">
                <input
                  type="password"
                  id="inputPassword"
                  class="form-control"
                  placeholder="Password"
                  required
                />
                <label for="inputPassword">Password</label>
              </div>

              <textarea
                class="form-control"
                id="inputMessage"
                placeholder="Your message"
                required
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import project from "../components/project/project.vue";

export default {
  components: { project }
};
</script>
