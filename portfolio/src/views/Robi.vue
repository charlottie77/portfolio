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
    <div class="container" id='design-research'>
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
    <div class='gray-bg'>
      <div id="research-1">
        <div class="row align-items-center research-title">
          <span>1</span>
          <h4>What do parents expect children to learn?</h4>
        </div>
        <p>While our end users are children, the most important stakeholder is their parents, who typically have control over their children's extracurricular activities.</p>
        <p>Thus, it is crucial to incorporate the parents' expectations from the beginning of the design process. To this end, in the semi-structured interview, we prepared a card-sorting exercise where each card contains one potential objective of the AI courses. We then conducted interviews with 4 parents and ask them to sort the cards in their perceived order of importance.</p>
        <div id='insights'>Insights</div>
        <div class="row">
          <div class='insights'>
            <div>
              <img :src='require("@/assets/img/blob-shape (2).svg")' alt="">
              <div class="title">Cultivating interest is the top priority. </div>
              <div class='content'>To our surprise, in every card-sorting activity, parents always put “cultivate interests” at the top position. Rather than expecting kids to acquire AI basic concepts after finishing the course, they want kids to be motivated to continue learning with the big ideas of AI in the future. </div>
            </div>
            <div>
              <img :src='require("@/assets/img/blob-shape (2).svg")' alt="">
              <div class="title">Parents prefer soft skills over academic skill development.</div>
              <div class='content'>Parents put soft skills, like communication, logical thinking, and personality traits, such as patience and perseverance, in higher positions. Generally, they expect their kids to build these soft skills at this early stage and learn specific skills in or after high school. </div>
            </div>
          </div>
          <img :src='require("@/assets/img/Group 41.svg")' alt="">
        </div>
      </div>
    </div>
    <div class="container">
      <div id="research-2">
        <div class="row align-items-center research-title">
          <span>2</span>
          <h4>Learning characteristic in related extracurricular courses</h4>
        </div>
        <p style="margin:34px 0 43px">In order to understand the current study situation, we interviewed five groups of parents. At the same time, we conducted observations, both in the programming classes and in the experimental AI course which our lab is teaching (without using our product platform)</p>
        <div class="row align-left"><img :src='require("@/assets/img/Group 37.svg")' alt=""></div>
        <div class="row align-right"><img :src='require("@/assets/img/Group 38.svg")' alt="" style="margin-top: -48.5px;"></div>
        <div class="row align-left"><img :src='require("@/assets/img/Group 39.svg")' alt="" style="margin-top: -48.5px;"></div>
        <div class="row align-right"><img :src='require("@/assets/img/Group 40.svg")' alt="" style="margin-top: -48.5px;"></div>
      </div>
    </div>
    <div class="gray-bg">
      <div id="research-3">
        <div class="row align-items-center research-title">
          <span>3</span>
          <h4>Which learning strategy is most effective for kids?</h4>
        </div>
        <p>We conducted <span class="green">expert interviews</span> and <span class="green">literature review</span> to explore the children's learning model. During our discussion with Jerry Dong, a learning expert, he claimed that <span class="bold">children would “absorb” new knowledge by fitting it into their existing schemas. Learners could build connections between the new knowledge and their prior knowledge to reach the state of equilibrium, the new schemas. </span></p>
        <img :src='require("@/assets/img/Group 43.svg")' alt="" style="margin:43px auto">
        <p>Based on our <span class="green">background research</span>, traditional AI instructions are <span class="bold">heavy on math notations</span>, and most of the <span class="bold">examples are unfamiliar to children</span>. To facilitate the above connection process, we need to address this issue thoroughly.</p>
      </div>
    </div>
    <div class="container" id='design-challenges'>
      <h1 style="margin:52px auto 26px">Design Challenges</h1>
      <p>With all the insights from research in mind,  we started to define the design challenges. Here is the big picture of the learning content in thie module. </p>
      <img :src='require("@/assets/img/Group 44.svg")' alt="" class='img-center' style='margin-top:24px;margin-bottom:64px'>
      <p>The practice we need to design should scaffold learners in identifying the conceptual knowledge of each element as well as the overall process as portrayed above. Thus, </p>
      <img :src='require("@/assets/img/Group 46.svg")' alt="" class="img-center" style="margin-top:38px">
      <div  style="margin-top:24px;margin-left:-110px"><img class="img-center" :src='require("@/assets/img/Group 45.svg")' alt="" style=""></div>
      <img :src='require("@/assets/img/Group 47.svg")' alt="" class="img-center" style="margin-top:17px; margin-bottom:49px">
    </div>
    <div class="gray-bg" id='ideation'>
      <div class="container">
        <h1>Ideation</h1>
        <p>After reviewing the existing resources on science education in general and AI education in particular, including books and learning products, we brainstormed elements that can help children learn basic AI concepts in a motivating way.</p>
        <img :src='require("@/assets/img/Group 48.svg")' alt="" class="img-center" style="margin:54px auto 83px">
        <p>Finally, after the <span class="green">voting session</span>, we decided to <span class="bold">develop a game-like learning practice where the main character</span>, consistent with the AI theme, is a <span class="bold">robot agent</span>. Inspired also by the concept of virtual pets, we set the primary goal of the game to be "<span class="bold">teaching little Robi how to take care of himself.</span>"</p>
      </div>
    </div>
    <div class="container" id='prototyping' style="padding: 81px 0 63px;">
      <h1>Prototyping</h1>
      <div style='margin:70px auto 84px' class="black-center">Paper Prototype</div>
      <p style="margin:84px auto 33px">Then Jan and I quickly came up with a rough paper prototype about teaching a robot to take care of himself. We recruited two kids and several novices (people who do not have background in computer science-related areas).</p>
      <img :src='require("@/assets/img/Group 49.png")' alt="" class="img-center" style="max-width:894px">
      <p style="margin:80px 0 32px">Here is the main <span class="bold">feedback</span> we got from the first user test:</p>
      <div style="position:relative">
        <img :src='require("@/assets/img/Group 50.svg")' alt="" style="position:absolute">
      </div>
      <div style="margin:444px 396px -46px 15px; width:702px">
        <p>The instructions and feedback were considered confusing and took participants some time to understand. Therefore, we needed to modify the writing and provided more guidance. </p>
        <p>Furthermore, the game length of 20 rounds was too long for kids,  and we realized that this is only the training process. There should be a validation phase for learners to “assess” Robi’s learning, which is also the assessment of players’ learning. </p>
      </div>
    </div>
    <div class="gray-bg" id="midfi">
      <div class="container">
        <div class="black-center">Mid-fi Prototype</div>
        <p style="margin:36px auto 67px">While our visual designer was working on illustration and animation, Jan and I started to make a medium-fidelity prototype based on previous feedback. Since it was hard for us to recruit more kids, in this round, we conducted more prototype testing with high-school students, who were novices as well.  Here are some <span class="bold">key improvements we made in this iteration: </span></p>
        <div class="midfi-iter">
          <div style="width:467px;position:absolute">
            <p><span class="green bold">#1 Feedback Improvement</span></p>
            <p style="width:467px;">When Robi takes action, it will generate a memory block that contains the values, action, and permission. There is also a memory stack for learners to trace back all the data. (which acts like training dataset)</p>
          </div>
          <img :src='require("@/assets/img/Group 52.svg")' alt="" style="width:100%;">
        </div>
        <div class="midfi-iter" style="margin-top:96px">
          <div style="width:403px;position:absolute">
            <p><span class="green">#2 Instructional Text Adjustment</span></p>
            <p>We clarified the instructional texts and made them more conversational to promote the psychological engagement of learners better.</p>
          </div>
          <img :src='require("@/assets/img/Group 54.svg")' alt="" style="width: 100%">
        </div>
        <div class="row" style="margin:0 -12px">
          <div class="midfi-iter">
            <img :src='require("@/assets/img/robis_room-07.png")' alt="">
            <p><span class="green">#3 Inclusion of Validation Stage</span></p>
            <p>We added an automatic validation stage where Robi acts according to the training he received. This stage also makes the overall process closer to actual machine learning.</p>
          </div>
          <div class="midfi-iter">
            <img :src='require("@/assets/img/robis_room-08.png")' alt="">
            <p><span class="green">#4 Additional Guidance and Instruction</span></p>
            <p>We added some guidance and instruction at the beginning of each stage. </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container" id='final-design' style="margin-top:60px">
      <div class="black-center">Final Design</div>
      <div style="position:relative">
        <img :src='require("@/assets/img/Group 58.svg")' alt="">
        <p style="width:478px;left:50px;top:111px;position:absolute">Robi's condition includes <span class="bold">three categories:</span> power, mood, and maintenance. These three categories <span class="bold">correspond to three kinds of actions</span>, including charging, watering flowers, and maintenance work. </p>
        <p style="width:507px;right:-160px;top:250px;position:absolute;">Learners should <span class="bold">train Robi to stay in good condition</span> by giving Robi instructions of Yes/No in the training phase. Those <span class="bold">instructions will change Robi’s mindset</span>, which will <span class="bold">guide Robi’s behavior</span> in the validation phase automatically. </p>
        <p style="width:376px;position:absolute;top:495px;left:50px">Thus, if Robi was trained well, he could 'survive' the validation phase. </p>
      </div>
      <p style="margin-top:74px">Here is a <span class="bold">mapping</span> between each element in the big picture of ‘machine could learn’ and our final solution.</p>
      <img class='img-center' :src='require("@/assets/img/Group 42.svg")' alt="" style="margin-top:23px">
    </div>
    <div class="container" id="result" style="margin-top:164px">
      <h1>Result</h1>
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
.img-center{
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.align-left{
  justify-content: flex-start;
}
.align-right{
  justify-content: flex-end;
}
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
h4{
  font-family: 'Ubuntu-Bold';
  font-size: 36px;
  line-height: 41px;
  letter-spacing: 1.125px;
  color: #4A4A4A; 
  margin: 0;
}
.gray-bg{
  background: #FAFAFA;
}
</style>

<style scoped>
#midfi{
  padding:58px 0 32px;
}
.midfi-iter{
  position: relative;
}
.row>.midfi-iter{
  flex:1;
  margin: 57px 12px;
}
.row>.midfi-iter>img{
  width: 100%;
}
#ideation{
  padding-top: 47px;
  padding-bottom: 120px;
}
.insights>div{
  position: relative;
  padding-left: 26px;
  padding-right: 84px;
  margin-bottom: 76px;
}
.insights .title{
  font-family: 'Source Sans Pro-M';
  font-size: 25px;
  line-height: 29px;
  letter-spacing: 1.47222px;
  color: #008757;
}
.insights>div>img{
  position: absolute;
  top: -11px;
  left: 0;
}
#insights{
  font-family: 'Ubuntu-Bold';
  font-size: 22px;
  line-height: 25px;
  letter-spacing: 0.6875px;
  color: #4A4A4A;
  margin-top: 32px;
  margin-bottom: 37px;
}
#research-1, #research-2, #research-3{
  padding-top: 60px;
  padding-left: 42px;
  padding-bottom: 97px;
}
#research-1 p,#research-1 .content, #research-2 p, #research-3 p, .container p{
  font-family: 'Source Sans Pro';
  font-size: 22px;
  line-height: 30px;
  letter-spacing: 0.488889px;
  color: #000000;
  margin: 8px 0;
}
.research-title{
  margin-left: -42px;
}
.research-title>span{
  margin-right: 7px;
  font-family: 'Ubuntu-Bold';
  font-size: 59px;
  line-height: 68px;
  letter-spacing: 1.22917px;
  color: #CDCDCD;
}
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
.container,#research-1, #research-3{
  margin: 0 auto 0;
  max-width: 1000px;
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