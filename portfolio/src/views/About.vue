<template>
  <div id="about">
    <Banner height="439px" backgroundColor="rgba(255,210,119,0.14)"/>
    <div class="row" id="hr-1">
      <span class="line left-line"></span>
      <span class="blank-line"></span>
      <span class="line right-line"></span>
    </div>
    <div class="row" id="hr-2">
      <span class="line left-line"></span>
      <span class="blank-line"></span>
      <span class="line right-line"></span>
    </div>

    <div class="container row">
      <div>
        <img src="@/assets/img/avatar.png" alt="" id='avatar'/>
      </div>
      <div id="about-content">
        <div id="content-line1">Hi, I am Yuqing</div>
        <div id="content-line2">a technical designer, with passion for</div>
        <div id="content-line3" class="row">
          <img :src='require("@/assets/img/skill-point.svg")' alt="">
          <span class="skill-name">UX design</span>
          <img :src='require("@/assets/img/skill-point.svg")' alt="">
          <span class="skill-name">Illustration</span>
          <img :src='require("@/assets/img/skill-point.svg")' alt="">
          <span class="skill-name">Coding</span>
        </div>
        <div id="detail">
          <p class="detail-line">Currently, I am interested in <span class='highlight'>design for learning.</span><img :src="require('@/assets/img/learning.svg')" alt=""> </p>
          <p class="detail-line">Right now, I am an HCI student and UX Designer at Carnegie Mellon University.  </p>
          <p class="detail-line">Outside of design work, I enjoy video games (a big fan of Nintendo) <img :src="require('@/assets/img/nintendo-switch.svg')" alt=""> , cooking <img :src="require('@/assets/img/cooking.svg')" alt=""> (good at cooking but a novice in baking), and journaling. <img :src="require('@/assets/img/journaling.svg')" alt=""></p>
          <p class="detail-line">Previously, I studied software engineering & new media technology <img :src="require('@/assets/img/coding.svg')" alt=""> at Tongji University. After graduation, I worked as a software engineer (full-stack) in Shanghai for two years. </p>
        </div>
        <div style='mix-blend-mode: normal;opacity: 0.51;border: 1.5px solid #F8E5C7;width: 11.8rem; margin:5.2rem 0 1.7rem; border-radius:1.5px;'/>
        <div id="contact-info">
          <div class="row">
            <span class="contact-method">E-mail</span>
            <span class="contact-detail">yuqingg@andrew.cmu.edu</span>
          </div>
          <div class="row" style="margin-top:1rem">
            <span class="contact-method">Resume</span>
            <span class="contact-detail"> <a href="https://drive.google.com/file/d/189Dg3HKdWIiyQdvahWGtUuL_v_hkkDTZ/view?usp=sharing">English</a> </span>
          </div>
        </div>
        
      </div>
    </div>
    <OnTopTools themeColor='#3FAB91' heightToShow='439' :navOnly='true' activeSpan='about'/>
    <Footer />
  </div>
</template>

<script>
import Banner from "@/components/Banner"
import OnTopTools from '@/components/OnTopTools'
import Footer from '@/components/Footer'
export default {
  name: 'About',
  components: {
    Banner,
    OnTopTools,
    Footer
  },
  props: {
  },
  methods: {
  }
}
</script>

<style>
#about{
  width: 100%;
}
</style>

<style scoped>
.highlight{
  position: relative;
  cursor: default;
  display: inline-block;
}
.highlight:hover:after {
  top: 0%;
}
.highlight::after{
  content: "";
  position: absolute;
  z-index: -1;
  top: 60%;
  left: -0.1em;
  right: -0.1em;
  bottom: 0;
  transition: top 200ms cubic-bezier(0, .8, .13, 1);
  background-color: rgba(252,233,155,0.74);
}

.contact-detail,.contact-detail>a{
  font-family: 'Source Sans Pro';
  font-size: 2.2rem;
  line-height: 2.8rem;
  letter-spacing: 0.199rem;
  color: #4A4A4A;
}
.contact-method{
  font-family: 'Ubuntu-Bold';
  font-size: 2.2rem;
  line-height: 2.6rem;
  letter-spacing: 0.199rem;
  color: #825B46;
  width: 9.5rem;
  margin-right: 2.2rem;
}
#detail{
  margin-top: 4.8rem;
}
.detail-line{
  overflow-wrap: break-word;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: normal;
  font-size: 2rem;
  line-height: 2.6rem;
  letter-spacing: 0.06rem;
  color: #4A4A4A;
}
.detail-line:nth-of-type(2){
  margin-top: 14px;
}
.detail-line:nth-of-type(3),.detail-line:nth-of-type(4){
  margin-top: 25px;
}
.skill-name{
  margin-left: 8px;
  margin-right: 12px;
  font-family: 'Ubuntu-Bold';
  font-size: 21px;
  line-height: 31px;
  letter-spacing: 1.806px;
  color: #4A4A4A;
}
#content-line1{
  font-family: 'Ubuntu-Bold';
  font-size: 30px;
  line-height: 31px;
  letter-spacing: 2.58px;
  color: #4A4A4A;
}
#content-line2{
  margin-top: 16px;
  font-family: 'Ubuntu';
  font-size: 21px;
  line-height: 31px;
  letter-spacing: 1.806px;
  color: #4A4A4A;
}
#avatar{
  width: 218.88px;
}
.container{
  margin-top: -140px;
  padding: 0 276px;
}
#about-content{
  flex-grow: 1;
  padding-top: 40px;
  padding-left: 31px;
  max-width: 57.5rem;
}
.line{
  border: 1.5px solid rgba(239,195,123,0.42);
}
.blank-line{
  width: 480px;
}
.left-line{
  width: 510px;
}
.right-line{
  flex-grow: 2;
}
#hr-1{
  margin:0
}
#hr-2{
  margin: 5px 0 0;
}

</style>

