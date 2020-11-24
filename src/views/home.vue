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
            <div class="col-6 text-center"></div>
          </div>
          <form id="contact-form" class="row">
            <div class="col-6">
              <span class="svg-text">
                <icon-message
                  colorClass="custom-icon-white"
                  otherClass=""
                  height="30"
                  width="30"
                />
                <div class="text-wrapper">gusarova@gmail.com</div>
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
            <div class="col-6">
              <div class="form-label-group">
                <input
                  type="email"
                  id="inputEmail"
                  class="form-control"
                  placeholder="Email address"
                  required
                />
              </div>

              <br />

              <div class="form-label-group">
                <input
                  type="password"
                  id="inputPassword"
                  class="form-control"
                  placeholder="Password"
                  required
                />
              </div>

              <br />

              <textarea
                class="form-control"
                id="inputMessage"
                placeholder="Your message"
                rows="10"
                required
              ></textarea>

              <br />

              <button class="btn btn-blue col-8">
                Send
                <icon-arrow-right
                  colorClass="custom-icon-white"
                  otherClass=""
                  height="30"
                  width="30"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import project from "../components/project/project.vue";
import iconMessage from "../components/icons/icon-message.vue";
import iconLocation from "../components/icons/icon-location.vue";
import iconArrowRight from "../components/icons/icon-arrow-right.vue";

export default {
  components: { project, iconMessage, iconLocation, iconArrowRight }
};
</script>
