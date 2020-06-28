<template>
  <div id="m-robi-main">
    <Banner height="33.7rem" backgroundColor="#C4E4CF"/>
    <div padding id="banner-content">
      <img :src='require("@/assets/img/m-robi-title.svg")' alt="">
      <div id='banner-title'>Robi's Room</div>
    </div>
    <div padding id="project-description">
      A game-like activity to teach the concepts of “Machine can learn”.
    </div>
    <div padding id="project-question">
      <div id='question-content'>How might we help kids to understand the concepts of “Machine can learn” in a motivating way? </div>
    </div>
    <p padding id="project-how">
      In this project, we designed <span class="bold">a gamification learning activity</span> as a part of trial extra-curriculum course for <span class="bold">K-12 Artificial Intelligence learning</span> in Shanghai, China. 
    </p>
    <div padding id="my-role">
      <div class='green-title'>My Role</div>
      <p id="role-description">I led our group to complete the UX design and the subsequent game development as the scrum master.</p>
      <p id="my-role-list">
        <ul>
          <li>Developer (Scrum Master)</li>
          <li>Learning Experience Designer</li>
          <li>UX Designer</li>
        </ul>
      </p>
    </div>
    <div padding id="overview">
      <div class="green-title">Overview</div>
      <p>Duration: 2 months</p>
      <p>Tools: Sketch, Unity, Illustrator, After Effects.</p>
      <p>Collaborators: Dachang Liu, Jan Doring, Jay Zhu</p>
    </div>
    <div padding id="nda">
      To comply with my non-disclosure agreement, I have omitted and obfuscated confidential information in this case study. All information in this case study is my own and does not necessarily reflect the views of others.
    </div>
    <div class="row justify-center" id='splitter-1'><img :src='require("@/assets/img/robi-splitter.svg")' alt=""></div>
    <div padding id="final-solution">
      <h1>Final Solution</h1>
      <div id="fs-robi-1" class='fs-item'>
        <div class="row justify-center" id='fs-robi-icon'>
          <img :src='require("@/assets/img/m-robi-indicator.svg")' alt="">
        </div>
        <div class='fs-title'>Let’s teach Robi how to keep in a healthy state.</div>
        <p class='fs-content'>Robi is a young little robot who relies on the player’s instruction to stay healthy. He needs to <span class="highlight">take appropriate actions to maintain three categories</span> — power, maintenance, and mood. </p>
        <div class="row justify-center fs-illu">
          <img :src='require("@/assets/img/fs-robi-ill.svg")' alt="">
        </div>
      </div>
      <div id="fs-robi-2" class='fs-item'>
        <div class="row justify-center" id='fs-flower-icon'>
          <img :src='require("@/assets/img/m-flower-indicator.svg")' alt="">
        </div>
        <div class='fs-title'>Introduce AI concepts using the language of kids. </div>
        <p class='fs-content'>We use common elements in everyday life to illustrate the otherwise abstract idea of “machine can learn”. <span class="highlight">Establishing a familiar learning context</span> has been shown <span class="highlight">to promote the knowledge acquisition and synthesis process in learners.</span> </p>
        <div class="row justify-center fs-illu">
          <img :src='require("@/assets/img/fs-flower-illu.svg")' alt="">
        </div>
      </div>
      <div class="fs-item" id="fs-robi-3">
        <div class="row justify-center" id='fs-game-icon'>
          <img :src='require("@/assets/img/m-game-indicator.svg")' alt="">
        </div>
        <div class='fs-title'>Gamification & Character</div>
        <p class='fs-content'>We applied gamification and designed a character to <span class="highlight">engage and motivate kids for their future learning.</span>  For parents, the main goal of attending an AI extracurricular course is to <span class="highlight">cultivate the interests of their kids.</span></p>
        <div class="row justify-center fs-illu">
          <img :src='require("@/assets/img/fs-game-illu.svg")' alt="">
        </div>
      </div>
      <div class="fs-item" id="fs-robi-4">
        <div class="row justify-center" id='fs-agent-icon'>
          <img :src='require("@/assets/img/m-agent-indicator.svg")' alt="">
        </div>
        <div class='fs-title'>Combine teachable agent and direct manipulation.</div>
        <p class='fs-content'>The game environment combines the teachable agent(Robi) with visually appealing UI elements <span class="highlight">to scaffold learning in a motivating way. </span> </p>
        <div class="row justify-center fs-illu">
          <img :src='require("@/assets/img/fs-agent-illu.svg")' alt="">
        </div>
      </div>
    </div>
    <div padding id="launch">
      <h1>Launch</h1>
      <p id='launch-p1'>In June 2018, we held <span class="highlight">a trial course, named “The first class of AI — Machine can learn” at the LEGO Activity Center in Pudong New Area, Shanghai.</span> We used Robi’s Room to scaffold the class successfully. After the course, we received very positive feedback on the practice from both students and their parents. </p>
      <div class="column align-items-center">
        <div id="launch-pics" class="column align-items-center">
          <img :src='require("@/assets/img/launch-pic-1.png")' alt="" style="max-width:296px">
          <img :src='require("@/assets/img/launch-pic-2.png")' alt="" style="max-width:296px">
          <div class="row" id="photo-credit">
            Photo by Xiaoteng Ge
          </div>
        </div>
        <div class="column align-items-center">
          <div class="column justify-center launch-item">
            <span class="green">17/20</span>
            <span class="green">Students</span>
          </div>
          <p>Successfully</p>
          <p>Completed the Practice</p>
        </div>
        <div class="column align-items-center">
          <div class="column justify-center launch-item">
            <span class="green">3 Sessions</span>
          </div>
          <p>Trial course conducted</p>
        </div>
        <div class="column align-items-center">
          <div class="column justify-center launch-item">
            <span class="green"> 90% </span>
          </div>
          <p>Positive Feedback</p>
        </div>
      </div>
    </div>
    <div id="waterfall-robi-splitter"><img :src='require("@/assets/img/waterfall_robi.png")' alt=""></div>
    <div class="row justify-center" id='how-did-we-got-there'>How did we got there?</div>
    <div class="row justify-center" id='splitter-2'><img :src='require("@/assets/img/robi-splitter.svg")' alt=""></div>
    <div padding class="gray-bg column algin-items-center" id='design-process'>
      <h1>Design Process</h1>
      <img :src='require("@/assets/img/new_design_process.svg")' alt="">
    </div>
    <div padding id="design-research">
      <h1 id='design-research-title'>Design Research</h1>
      <div id='design-research-subtitle'>Learners in Context</div>
      <div id="learners-in-context">
        <img class="img-center" :src='require("@/assets/img/learners-in-context-illu.svg")' alt="" id='learners-in-context-illu'>
        <p>In this project, our targeted users are 11-12 years old children in elementary school. We went backward and started by outlining the key research questions and investigated them through <span class="green">interviews, observations, and literature reviews.</span> Here are <span class="bold">three questions I want to share:</span></p>
      </div>
      <div class="column align-items-center" style="margin-top:2.4rem;margin-bottom:4.8rem">
        <div class="row learners-in-context-list-item align-items-start">
          <img :src='require("@/assets/img/learners-in-context-ol-1.svg")' alt="">
          <div>When parents mentioned learning AI, what do they expect children to learn?</div>
        </div>
        <div class="row learners-in-context-list-item align-items-start">
          <img :src='require("@/assets/img/learners-in-context-ol-2.svg")' alt="">
          <div>What is the learning characteristic of extracurricular courses in this domain?</div>
        </div>
        <div class="row learners-in-context-list-item align-items-start">
          <img :src='require("@/assets/img/learners-in-context-ol-3.svg")' alt="">
          <div>Which learning strategy is most effective for primary school students at age 11-12?</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {_isMobile} from '@/util.js'
import Banner from "@/components/Banner"

export default {
  components: {
    Banner,
  },
  beforeCreate: function(){
    if(!_isMobile()) {
      this.$router.replace('/robi');
    }
  },
}
</script>

<style scoped>
.learners-in-context-list-item>div{
  margin-left: 1.1rem;
  font-family: 'Source Sans Pro-M';
  font-size: 1.8rem;
  line-height: 2.1rem;
  letter-spacing: 0.5625px;
  color: #4A4A4A;
}
#design-research-title{
  margin-top: 11rem;
}
#design-research-subtitle{
  margin-top: 4.8rem;
  font-family: 'Ubuntu-M';
  font-size: 1.8rem;
  line-height: 2.1rem;
  text-align: center;
  letter-spacing: 0.5625px;
  color: #4A4A4A;
}
#learners-in-context-illu{
  margin-top: 3.5rem;
  margin-bottom: 3.2rem;
}
.img-center{
  margin-left: auto;
  margin-right: auto;
}
#design-process{
  padding-top: 2.1rem;
  padding-bottom: 3rem;
}
#design-process h1{
  margin: 0 auto 2.7rem;
}
.gray-bg{
  background: #FAFAFA;
}
#how-did-we-got-there{
  margin-top: 10rem;
  font-family: 'Ubuntu-Bold';
  font-style: italic;
  font-size: 2rem;
  line-height: 2.3rem;
  text-align: center;
  letter-spacing: 0.4375px;
  color: #51BAA1;
}
#waterfall-robi-splitter{
  margin-top: 6.4rem;
}
#waterfall-robi-splitter img{
  width: 100%;
}
#photo-credit{
  margin-top: 0.8rem;
  justify-content: center;
  font-family: 'Charter';
  font-style: italic;
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 1.5rem;
  text-align: center;
  letter-spacing: 0.375px;
  color: #979797;
}
.launch-item~p{
  font-family: 'Source Sans Pro';
  font-size: 1.6rem;
  line-height: 2.0rem;
  text-align: center;
  letter-spacing: 0.942222px;
  max-width: 19rem;
  color: #4A4A4A;
}
.green{
  color: #189779;
}
.launch-item{
  font-family: 'Source Sans Pro-B';
  font-size: 2rem;
  line-height: 2.5rem;
  text-align: center;
  letter-spacing: 0.1178rem;
  width: 15.6rem;
  height: 10.3rem;
  background: #ECF5F3;
  border-radius: 0.8rem;
  margin-bottom: 0.9rem;
  margin-top: 3.6rem;
}
#launch-pics{
  margin-top: 2.5rem;
}
#launch-pics img{
  margin-top: 0.8rem;
}
#launch-p1{
  margin-top: 2.4rem;
}
#launch{
  margin-top: 11rem;
}
div.fs-illu{
  margin-top: 1.5rem;
}
p.fs-content{
  padding: 0.7rem 0;
}
.highlight{
  background: #F8DA06;
  background: rgba(248,218,6,0.35);
  border-radius: 6px;
}
.fs-item{
  /* margin-top: 4.7rem; */
  margin-top: 7.2rem;
}
.fs-title{
  font-family: 'Source Sans Pro-B';
  font-size: 1.8rem;
  line-height: 2.1rem;
  display: flex;
  align-items: center;
  letter-spacing: 0.372414px;
  color: #000000;
}
h1{
  font-family: 'Ubuntu-Bold';
  font-size: 2rem;
  line-height: 2.3rem;
  text-align: center;
  letter-spacing: 0.4375px;
  color: #C0C0C0;
}
#final-solution{
  margin-top: 7.2rem;
}
#splitter-1{
  margin-top: 11rem;
}
#splitter-2{
  margin-top: 6.4rem;
  margin-bottom: 9rem;
}
#nda{
  margin-top: 1.8rem;
  font-family: 'Charter';
  font-style: italic;
  font-size: 1.4rem;
  line-height: 1.7rem;
  letter-spacing: 0.4375px;
  color: #979797;
}
#overview{
  margin-top: 5.2rem;
}
#overview p{
  margin: 7px auto;
}
#my-role-list ul{
  margin: 1.2rem 0 0;
  list-style: none;
  padding-left: 0;
}
#my-role-list li::before{
  content: "\2022";
  color: #D8D8D8;
  font-size: 2.4rem;
  margin-right: 0.7rem;
}
#my-role>#role-description{
  margin-top: 0.7rem;
}
#my-role>.green-title{
  margin-top: 5.1rem;
}
.green-title{
  font-family: 'Ubuntu-Bold';
  font-size: 1.8rem;
  line-height: 2.1rem;
  letter-spacing: 0.5625px;
  color: #50C7AA;
}
#project-how{
  margin-top: 1.7rem;
}
p{
  margin: 0;
  font-family: 'Source Sans Pro';
  font-size: 1.8rem;
  line-height: 2.2rem;
  letter-spacing: 0.54px;
  color: #4A4A4A;
}
.bold{
  font-family: 'Source Sans Pro-B';
}
#question-content{
  font-family: 'Ubuntu-M';
  font-size: 1.8rem;
  line-height: 2.4rem;
  letter-spacing: 0.39375px;
  color: #3FAB91;
  margin-left: 0.9rem;
  height: 8.8rem;
  position: relative;
  ;
}
#question-content::before{
  content:'';
  width: 2px;
  height: 100%;
  background: #3FAB91;
  position: absolute;
  left: -0.9rem;
  top: 0.6rem;
}
#project-question{
  margin-top: 3.4rem;
  max-width: 32.1rem;
  position: relative;
}
#project-description{
  margin-top: 0.5rem;
  font-family: 'Ubuntu';
  font-size: 1.8rem;
  line-height: 2.1rem;
  letter-spacing: 0.5625px;
  color: #A6A6A6;
}
#banner-title{
  font-family: 'Ubuntu-Bold';
  font-size: 3.6rem;
  line-height: 4.1rem;
  text-align: left;
  letter-spacing: 1.125px;
}
#m-robi-main{
  width: 100%;
}
#banner-content{
  position: absolute;
  top: 13rem;
}
</style>