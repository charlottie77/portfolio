<template>
  <div id="about">
    <div class="about-header">

    </div>
    <div class="about-content">
      <div class="ac-1">
        <label class="ac1-title">HI, I'M YUQING.</label>
        <label class="ac1-line"></label>
        <div class="ac1-des">
          <p>I’m currently working as a UX Designer and Front-end Developer in Shanghai.</p>
          <p>I focus on the interactions with technology, especially AI algorithms, in education and daily life.</p>
          <p>Thanks for stopping by.</p>
        </div>
        <div class="ac1-email">
          <label class="ac1-sub-title">E-MAIL</label>
          <label class="ac1-sub-text sub-margin1">yuqing.kwok@outlook.com</label>
        </div>
        <!-- <div class="ac1-resume">
          <label class="ac1-sub-title">RESUME</label>
          <label class="ac1-sub-text sub-margin2">English</label>
          <label class="ac1-sub-text sub-margin3">|</label>
          <label class="ac1-sub-text sub-margin3">中文简体</label>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
  },
  methods: {
  }
}
</script>

<style scoped>
.about-header {
    background: transparent url("../assets/about_bg.png") no-repeat;
    background-size: 100% auto;
    width: 100%;
    height: 286px;
}

.about-content {
  display: flex;
  justify-content: center;
}

.ac-1 {
  display: flex;
  flex-direction: column;
  margin: 0 30%;
}

.ac1-title {
  font-family: 'SF-Pro-Bold';
  font-size: 24px;
  color: #4a4a4a;
  letter-spacing: 2.18px;
  line-height: 26px;
}

.ac1-line {
  background: transparent url("../assets/about_line.png") no-repeat;
  background-size: 100% auto;
  width: 57px;
  height: 2px;
  margin-top: 26px;
}

.ac1-des p {
  font-size: 18px;
  color: #4A4A4A;
  letter-spacing: 1.72px;
  line-height: 26px;
}

.ac1-sub-title {
  font-family: 'SF-Pro-Bold';
  font-size: 18px;
  color: #8C3800;
  letter-spacing: 2.18px;
  line-height: 26px;
  min-width: 110px;
}

.ac1-sub-text {
  font-size: 18px;
  color: #4A4A4A;
  letter-spacing: 2.18px;
}

.sub-margin1 {
  margin-left: 38px;
}

.sub-margin2 {
  margin-left: 26px;
}

.sub-margin3 {
  margin-left: 24px;
}

.ac1-email {
  margin-top: 86px;
}

.ac1-resume {
  margin-top: 28px;
  margin-bottom: 70px;
}
</style>

