<template>
  <div id="Robi">
    <Banner height="322px" backgroundColor="rgba(168, 216, 185, 0.683047)"/>
    <div class="container">
      <div class="row">
        <div>
          <div id='project-title'>Robi’s Room</div>
          <div id='project-description'>A game-like activity to teach the concepts of “Machine can learn”.</div>
        </div>
        <div><img :src='require("@/assets/img/robi-title.svg")' alt=""></div>
      </div>
      <div class="row" style="margin-top:65px; margin-left:-33px">
        <div style="padding:11px 0 0 33px; position:relative">
          <img :src='require("@/assets/img/blob-shape (2).svg")' style="position:absolute; left:0; top:0;" alt="">
          <div id='robi-q1'>How might we help <span class="highlight">kids</span> to <span class="highlight">understand the concepts</span> of “Machine can learn” in a <span class="highlight">motivating</span> way? </div>
          <div id='robi-p1'>In this project, we designed a <span class="bold">gamification learning activity</span> as a part of trial extra-curriculum course for <span class="bold"><span style="display:inline-block">K-12</span> Artificial Intelligence learning</span> in Shanghai, China. </div>
        </div>
        <div style="margin-left:45px"><img :src='require("@/assets/img/Robi-question.svg")' alt=""></div>
      </div>
      <div id="Overview">
        <h3>Overview</h3>
        <div class="info">Duration:  2 months</div> 
        <div class="info">Tools: Sketch, Unity, Illustrator, After Effects.</div>
        <div class="info">Collaborators: Dachang Liu, Jan Doring, Jay Zhu</div>
        <div id="overview-content">Our team is responsible for the design and development of the learning experience in a series of K-12 Artificial Intelligence courses, which were created by IfCreate and the College of Design & Innovation, Tongji University. The program was intended to engage earlier grade students in the basic concepts of Artificial Intelligence. The course envisions a future where students will develop a foundation of computational thinking and AI. </div>
        <div id="overview-footnote">To comply with my non-disclosure agreement, I have omitted and obfuscated confidential information in this case study. All information in this case study is my own and does not necessarily reflect the views of others.</div>
      </div>
      <div class="row splitter justify-center"><img :src='require("@/assets/img/robi-splitter.svg")' alt=""></div>
      <div id="final-solution">
        <h1 id="final-solution-title">Final Solution</h1>
        <div class="row align-items-start solution-row">
          <img :src='require("@/assets/img/Robi Indicator.svg")' alt="">
          <div class='robi-solution'>
            <p class='solution-title'>Let’s teach Robi how to keep in a healthy state.</p>
            <p class='solution-content'>Robi is a young little robot who relies on the player’s instruction to stay healthy. He needs to take <span class="highlight">appropriate actions to maintain three categories — power,</span> maintenance, and mood. </p>
          </div>
          <img :src='require("@/assets/img/teach-robi-hwoto-keep-health.svg")' alt="">
        </div>
        <div class="row align-items-start solution-row">
          <img :src='require("@/assets/img/Robi Indicator-2.svg")' alt="">
          <div class='robi-solution'>
            <p class='solution-title'>Introduce AI concepts using the language of kids. </p>
            <p class='solution-content'>We use common elements in everyday life to illustrate the otherwise abstract idea of “machine can learn”. <span class="highlight">Establishing a familiar learning context</span> has been shown <span class="highlight">to promote the knowledge acquisition and synthesis process in learners. </span></p>
          </div>
          <img :src='require("@/assets/img/introduce-ai-concepts.svg")' alt="">
        </div>
        <div class="row align-items-start solution-row">
          <img :src='require("@/assets/img/Robi Indicator-3.svg")' alt="">
          <div class='robi-solution'>
            <p class='solution-title'>Gamification & Character</p>
            <p class='solution-content'>We applied gamification and designed a character to <span class="highlight">engage and motivate kids for their future learning.</span> For parents, the main goal of attending an AI extracurricular course is <span class="highlight">to cultivate the interests of their kids.</span></p>
          </div>
          <img :src='require("@/assets/img/robi-gamification-n-character.svg")' alt="">
        </div>
        <div class="row align-items-start solution-row">
          <img :src='require("@/assets/img/Robi Indicator-4.svg")' alt="">
          <div class='robi-solution'>
            <p class='solution-title'>Combine teachable agent and direct manipulation.</p>
            <p class='solution-content'>The game environment combines the teachable agent(Robi) with visually appealing UI elements <span class="highlight">to scaffold learning in a motivating way. </span></p>
          </div>
          <img :src='require("@/assets/img/combine-teachable-agent.svg")' alt="">
        </div>
      </div>
      <div id="final-launch">
        <h1 id="final-launch-title">Launch</h1>
      </div>
    </div>
  </div>
  
</template>

<script>
import Banner from '@/components/Banner'

export default {
  name:'Robi',
  components:{
    Banner,
  },
  data: ()=>({

  }),
}
</script>
<style>
#Robi{
  width: 100%;
}
</style>

<style scoped>
#final-launch{
  margin-top: 255px;
}
.solution-row{
  margin: 108px 0;
}
.robi-solution{
  flex-grow: 1;
  min-width: 413px;
  max-width: 501px;
  width: 413px;
}
.solution-content{
  font-family: 'Source Sans Pro';
  font-size: 21px;
  line-height: 28px;
  letter-spacing: 0.466667px;
  color: #4A4A4A;
}
.solution-title{
  font-family: 'Source Sans Pro-B';
  font-size: 30px;
  line-height: 32px;
  display: flex;
  align-items: center;
  letter-spacing: 0.62069px;
  color: #000000;
}
#final-solution-title{
  margin-bottom: 129px;
}
h1{
  font-family: 'Ubuntu-Bold';
  font-size: 40px;
  line-height: 46px;
  text-align: center;
  letter-spacing: 0.875px;
  color: #C0C0C0;
}
.row.splitter{
  margin: 86px 0;
}
#Overview>#overview-footnote{
  margin: 20px 0 271px;
  font-family: Charter;
  font-style: italic;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.4375px;
  color: #979797;
}
#Overview>#overview-content{
  margin-top: 19px;
  font-family: 'Source Sans Pro';
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.4px;
  color: #636363;
}
#Overview>div.info{
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.4px;
  color: #636363;
}
#Overview{
  margin-top: 76px;
}
h3{
  margin: 16px 0;
  font-family: 'Ubuntu-Bold';
  font-size: 22px;
  line-height: 25px;
  letter-spacing: 0.6875px;
  color: #838383;
}
#robi-p1{
  margin-top: 15px;
  width:549px;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 30px;
  letter-spacing: 0.48125px;
  color: #4A4A4A;
}
.bold{
  font-family: 'Source Sans Pro-B';
}
.highlight{
  background: #F8DA06;
  background: rgba(248,218,6,0.35);
  /* mix-blend-mode: normal; */
  border-radius: 6px;
  /* opacity: 0.36; */
}
#robi-q1{
  width: 516px;
  font-family: 'Ubuntu-M';
  font-style: normal;
  font-size: 28px;
  line-height: 37px;
  letter-spacing: 0.6125px;
  color: #3FAB91;
}
.container{
  margin: -200px 16% 0;
}
#project-description{
  margin-top: 10px;
  width: 516px;
  font-family: 'Ubuntu';
  font-size: 23px;
  line-height: 32px;
  letter-spacing: 0.71875px;
  color: #A6A6A6;
}
#project-title{
  margin-top: 135px;
  font-family: 'Ubuntu-Bold';
  font-size: 48px;
  line-height: 55px;
  letter-spacing: 1.5px;
  color: #262626;
}
</style>