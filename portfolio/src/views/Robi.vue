<template>
  <div id="Robi">
    <Banner height="322px" backgroundColor="rgba(168, 216, 185, 0.683047)"/>
    <div class="container" style="margin-top:-200px">
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
        <div class="row">
          <div id='final-launch-content'>
            In June 2018, we held a <span class="green">trial course, named “The first class of AI — Machine can learn” at the LEGO Activity Center in Pudong New Area, Shanghai.</span> We used <span class="green">Robi’s Room</span> to scaffold the class successfully. After the course, we received very positive feedback on the practice from both students and their parents. 
          </div>
        </div>
        <div class="row" id='final-launch-images'>
          <div>
            <img :src='require("@/assets/img/launch-image-1.jpg")' alt="">
            <img :src='require("@/assets/img/launch-image-2.jpg")' alt="">
          </div>
        </div>
        <div class="row" id="photo-credit">
          Photo by Xiaoteng Ge
        </div>
        <div id='launch-result' class="row col-15 justify-center" style="margin:52px auto">
          <div class="col-8 column">
            <div class="column justify-center">
              <span class="green">17/20</span>
              <span class="green">Students</span>
            </div>
            <div>Successfully Completed the Practice</div>
          </div>
          <div class="col-8 column">
            <div class="column justify-center">
              <span class="green">3 Sessions</span>
            </div>
            <div>Trial course conducted</div>
          </div>
          <div class="col-8 column">
            <div class="column justify-center">
              <span class="green"> 90% </span>
            </div>
            <div>Positive Feedback</div>
          </div>
        </div>
      </div>
    </div>
    <img :src='require("@/assets/img/Group 8.jpg")' alt="" style="width:100%; margin:170px 0">
    <div class="container">
      <h2>How did we get there</h2>
      <div class="row justify-center" style="margin:64px auto 93px"><img :src='require("@/assets/img/dotdotdot.svg")' alt=""></div>
    </div>
    <div id="design-process" class='gray-bg'>
      <h1>Design Process</h1>
      <div class="row justify-center" style="margin-top:88px">
        <img :src='require("@/assets/img/Group 60.svg")' alt="">
      </div>
    </div>
    <div class="container">
      <h1 style="margin:114px auto 119px">Design Research</h1>
      <div class='black-center'>Learners in Context</div>
      <img :src='require("@/assets/img/Group 59.svg")' alt="" class='img-center' style="margin-top:51px;margin-bottom:35px">
      <div class="text">In this project, our targeted users are 11-12 years old children in elementary school. We went backward and started by outlining the key research questions and investigated them through <span class="green">interviews, observations, and literature reviews.</span> Here are <span class="SSP-bold">three questions I want to share:</span></div>
      <div id='three-questions'>
        <div>
          <img :src='require("@/assets/img/circle-1.svg")' alt="">
          <p>When parents mentioned learning AI, what do they expect children to learn?</p>
        </div>
        <div>
          <img :src='require("@/assets/img/circle-2.svg")' alt="">
          <p>What is the learning characteristic of extracurricular courses in this domain?</p>
        </div>
        <div>
          <img :src='require("@/assets/img/circle-3.svg")' alt="">
          <p>Which learning strategy is most effective for primary school students at age 11-12?</p>
        </div>
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
.SSP-bold{
  font-family: 'Source Sans Pro-B';
}
.text{
  font-family: 'Source Sans Pro';
  font-size: 22px;
  line-height: 30px;
  letter-spacing: 0.488889px;
  color: #000000;
}
#Robi{
  width: 100%;
}
h1{
  font-family: 'Ubuntu-Bold';
  font-size: 40px;
  line-height: 46px;
  text-align: center;
  letter-spacing: 0.875px;
  color: #C0C0C0;
}
h2{
  font-family: 'Ubuntu-Bold';
  font-style: italic;
  font-size: 40px;
  line-height: 46px;
  text-align: center;
  letter-spacing: 0.875px;
  color: #51BAA1;
}
h3{
  margin: 16px 0;
  font-family: 'Ubuntu-Bold';
  font-size: 22px;
  line-height: 25px;
  letter-spacing: 0.6875px;
  color: #838383;
}
.gray-bg{
  background: #FAFAFA;
}
</style>

<style scoped>
#three-questions{
  width:590px;
  margin:84px auto 111px;
}
#three-questions>div{
  display: flex;
}
#three-questions p{
  margin: 22.5px 0 22.5px 32px;
  font-family: 'Source Sans Pro';
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.75px;
  color: #4A4A4A;
}
.img-center{
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.black-center{
  font-family: 'Ubuntu-Bold';
  font-size: 27px;
  line-height: 31px;
  text-align: center;
  letter-spacing: 0.84375px;
  color: #4A4A4A;
}
#design-process{
  padding-top: 44px;
  padding-bottom: 39px;
}
#launch-result>.col-8{
  align-items: center;
}
#launch-result>.col-8>div:nth-of-type(1){
  font-family: 'Source Sans Pro-B';
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  letter-spacing: 1.06px;
  width: 156px;
  height: 103px;
  background: #ECF5F3;
  border-radius: 8px;
  margin-bottom: 9px;
}
#launch-result>.col-8>div:nth-of-type(2){
  font-family: 'Source Sans Pro';
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.942222px;
  color: #4A4A4A;;
}
#photo-credit{
  margin-top: 16px;
  justify-content: center;
  font-family: Charter;
  font-style: italic;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.5625px;
  color: #979797;
}
#final-launch-images{
  margin-top: 38px;
}
#final-launch-images>div{
  display: flex;
  justify-content: space-between;
  width: 826px;
}
#final-launch-images img{
  width: 48%;
}
#final-launch-content{
  margin-top: 43px;
  width: 826px;
  font-family: 'Source Sans Pro';
  font-size: 22px;
  line-height: 30px;
  letter-spacing: 0.488889px;
  color: #000000;
}
.green{
  color: #189779;
}
#final-launch .row{
  justify-content: center;
  
}
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
  margin: 0 16% 0;
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