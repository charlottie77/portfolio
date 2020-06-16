<template>
  <div id="Robi">
    <Banner height="32.2rem" backgroundColor="rgba(168, 216, 185, 0.683047)"/>
    <div class="container" style="margin-top:-17.7rem">
      <div class="row">
        <div>
          <div id='project-title'>Robi’s Room</div>
          <div id='project-description'>A game-like activity to teach the concepts of “Machine can learn”.</div>
        </div>
        <div><img :src='require("@/assets/img/robi-title.svg")' alt=""></div>
      </div>
      <div class="row" style="margin-top:2.9rem;">
        <div style=" position:relative; width:50%">
          <img :src='require("@/assets/img/blob-shape (2).svg")' style="position:absolute; left:-2rem; top:-1.3rem;" alt="">
          <div id='robi-q1'>How might we help <span class="highlight">kids to understand the concepts of “Machine can learn”</span> in a <span class="highlight">motivating</span> way? </div>
          <div id='robi-p1'>In this project, we designed a <span class="bold">gamification learning activity</span> as a part of trial extra-curriculum course for <span class="bold"><span style="display:inline-block">K-12</span> Artificial Intelligence learning</span> in Shanghai, China. </div>
        </div>
        <div><img :src='require("@/assets/img/Robi-question.svg")' alt=""></div>
      </div>
      <div id='my-role'>
        <p id='my-role-title'>My Role</p>
        <p id='my-role-left'>
          I led our group to complete the UX design and the subsequent game development as the scrum master.
        </p>
        <p id="my-role-right">
          <ul>
            <li>Developer (Scrum Master)</li>
            <li>Learning Experience Designer</li>
            <li>UX Designer</li>
          </ul>
        </p>
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
          <img class='solution-row-icon' :src='require("@/assets/img/Robi Indicator.svg")' alt="">
          <div class='robi-solution'>
            <h5 class='solution-title'>Let’s teach Robi how to keep in a healthy state.</h5>
            <p class='solution-content'>Robi is a young little robot who relies on the player’s instruction to stay healthy. He needs to take <span class="highlight">appropriate actions to maintain three categories — power,</span> maintenance, and mood. </p>
          </div>
          <img :src='require("@/assets/img/teach-robi-hwoto-keep-health.svg")' alt="" style="width:500px">
        </div>
        <div class="row align-items-start solution-row">
          <img class='solution-row-icon' :src='require("@/assets/img/Robi Indicator_2.svg")' alt="">
          <div class='robi-solution'>
            <h5 class='solution-title'>Introduce AI concepts using the language of kids. </h5>
            <p class='solution-content'>We use common elements in everyday life to illustrate the otherwise abstract idea of “machine can learn”. <span class="highlight">Establishing a familiar learning context</span> has been shown <span class="highlight">to promote the knowledge acquisition and synthesis process in learners. </span></p>
          </div>
          <img :src='require("@/assets/img/introduce-ai-concepts.svg")' alt="">
        </div>
        <div class="row align-items-start solution-row">
          <img class='solution-row-icon' :src='require("@/assets/img/Robi Indicator_3.svg")' alt="">
          <div class='robi-solution'>
            <h5 class='solution-title'>Gamification & Character</h5>
            <p class='solution-content'>We applied gamification and designed a character to <span class="highlight">engage and motivate kids for their future learning.</span> For parents, the main goal of attending an AI extracurricular course is <span class="highlight">to cultivate the interests of their kids.</span></p>
          </div>
          <img :src='require("@/assets/img/robi-gamification-n-character.svg")' alt="">
        </div>
        <div class="row align-items-start solution-row">
          <img class='solution-row-icon' :src='require("@/assets/img/Robi Indicator_4.svg")' alt="">
          <div class='robi-solution'>
            <h5 class='solution-title'>Combine teachable agent and direct manipulation.</h5>
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
        <div id='launch-result' class="row col-17 justify-center" style="margin:5.2rem auto 0">
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
    <img :src='require("@/assets/img/Group 8.jpg")' alt="" style="width:100%; margin:22.7rem 0">
    <div class="container">
      <h2 style="margin-top:0">How did we get there</h2>
      <div class="row justify-center" style="margin:6.6rem auto 13.8rem"><img :src='require("@/assets/img/dotdotdot.svg")' alt=""></div>
    </div>
    <div id="design-process" class='gray-bg'>
      <h1 style="margin:0">Design Process</h1>
      <div class="row justify-center" style="margin-top:10.3rem">
        <img :src='require("@/assets/img/Group 60.svg")' alt="">
      </div>
    </div>
    <div class="container" id='design-research'>
      <h1 id='design-research-title'>Design Research</h1>
      <div class='black-center'>Learners in Context</div>
      <img :src='require("@/assets/img/Group 59.svg")' alt="" class='img-center' style="margin-top:5rem;margin-bottom:7rem">
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
          <img :src='require("@/assets/img/Group 41.svg")' alt="" style="position:relative; top:2rem">
        </div>
      </div>
    </div>
    <div class="container">
      <div id="research-2">
        <div class="row align-items-start research-title">
          <span>2</span>
          <h4 style="margin-top: 0.7rem;">Learning characteristic in related extracurricular courses</h4>
        </div>
        <p style="margin:2.2rem 0 2.7rem">In order to understand the current study situation, we interviewed five groups of parents. At the same time, we conducted observations, both in the programming classes and in the experimental AI course which our lab is teaching (without using our product platform)</p>
        <div class="row align-left"><img :src='require("@/assets/img/Group 37.svg")' alt=""></div>
        <div class="row align-right"><img :src='require("@/assets/img/Group 38.svg")' alt="" style="margin-top: 0.8rem;"></div>
        <div class="row align-left"><img :src='require("@/assets/img/Group 39.svg")' alt="" style="margin-top: -0.575rem;"></div>
        <div class="row align-right"><img :src='require("@/assets/img/Group 40.svg")' alt="" style="margin-top: 0.8rem;"></div>
      </div>
    </div>
    <div class="gray-bg">
      <div id="research-3">
        <div class="row align-items-center research-title">
          <span>3</span>
          <h4>Which learning strategy is most effective for kids?</h4>
        </div>
        <p style="margin-top:2.5rem;">We conducted <span class="green">expert interviews</span> and <span class="green">literature review</span> to explore the children's learning model. During our discussion with Jerry Dong, a learning expert, he claimed that <span class="bold">children would “absorb” new knowledge by fitting it into their existing schemas. Learners could build connections between the new knowledge and their prior knowledge to reach the state of equilibrium, the new schemas. </span></p>
        <img :src='require("@/assets/img/Group 43.svg")' alt="" style="margin:4.8rem auto">
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
  </div>
</template>

<script>
import Banner from '@/components/Banner'

export default {
  name:'Robi',
  components:{
    Banner,
  },
  computed:{
    swipper_img_url: function(){
      if (this.showIdx == 0 || this.showIdx == 4) return this.swipper_imgs.Mockup[this.showIdx]
      else if(this.selected === 'mockup') return this.swipper_imgs.Mockup[this.showIdx]
      else return this.swipper_imgs.Note[this.showIdx]
    }
  },
  data: ()=>({
    showIdx:0,
    transitionName:'slide-fade',
    selected:'mockup',
    swipper_imgs:{
      Mockup:['gallery_c_1.jpg','gallery_c_2.jpg','gallery_c_3.jpg','gallery_c_4.png','gallery_c_5.jpg'],
      Note:['','gallery_b_2.png','gallery_b_4.png','gallery_b_3.png','']
    }
  }),
  methods:{
    turnLeft: function(){
      if(this.showIdx == 0) return
      this.transitionName = 'slide-fade-reverse'
      this.showIdx--
    },
    turnRight: function(){
      if(this.showIdx == 4) return
      this.transitionName = 'slide-fade'
      this.showIdx++
    },
    swipe: function(){
      this.showIdx = this.targetIdx
      if (this.transitionName == 'slide-fade') this.transitionName = 'slide-fade-reverse'
      else this.transitionName = 'slide-fade'
    },
    change_switcher: function(target){
      if (this.showIdx === 0 || this.showIdx === 4) return
      this.selected = target
    }
  }
}
</script>
<style>
.hover-pointer:hover{
  cursor: pointer;
}
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
  font-size: 2rem;
  line-height: 2.6rem;
  letter-spacing: 0.0667rem;
  color: #000000;
}
#Robi{
  width: 100%;
}
h1{
  font-family: 'Ubuntu-Bold';
  font-size: 3.4rem;
  line-height: 3.9rem;
  text-align: center;
  letter-spacing: 0.074375rem;
  color: #C0C0C0;
}
h2{
  font-family: 'Ubuntu-Bold';
  font-style: italic;
  font-size: 3.6rem;
  line-height: 4.1rem;
  text-align: center;
  letter-spacing: 0.07875rem;
  color: #51BAA1;
}
h3{
  margin: 0.7rem 0;
  font-family: 'Ubuntu-Bold';
  font-size: 2.4rem;
  line-height: 2.8rem;
  letter-spacing: 0.075rem;
  color: #838383;
}
h4{
  font-family: 'Ubuntu-Bold';
  font-size: 3.2rem;
  line-height: 3.7rem;
  letter-spacing: 0.1rem;
  color: #4A4A4A; 
  margin: 0;
}
.gray-bg{
  background: #FAFAFA;
}
</style>

<style scoped>
p{
  margin: 7px 0;;
}
#design-research-title{
  margin-bottom: 11.2rem;

}
#design-research{
  margin-top: 20rem;
}
#my-role{
  margin-top: 6.4rem;
}
#my-role-title{
  display: block !important;
  font-family: 'Ubuntu-Bold';
  font-size: 2.4rem;
  line-height: 2.8rem;
  letter-spacing: 0.075rem;
  color: #50C7AA;

}
#my-role>p{
  display: inline-block;
}
#my-role-left{
  width: 37.9rem;
}
#my-role-right{
  margin-left:5rem;
}
#my-role-right ul{
  margin: 0;
  list-style: none;
  padding-left: 0.7rem;
}
#my-role-right li::before{
  content: "\2022";
  color: #D8D8D8;
  font-size: 2.4rem;
  margin-right: 0.7rem;
}
#indicators{
  margin-top: 23px;
  margin-bottom: 38px;
}
.indicator{
  background: #D8D8D8;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin: 0 5px;
}
.indicator.active{
  background: #189779;
}
.swiper-switcher.disabled>div{
  border: 1px solid #B9B9B9;
  background: white;
  color: #B9B9B9;
}
.swiper-switcher.disabled>div:hover{
  cursor: auto;
}
.swiper-switcher{
  display: flex;
  justify-content: center;
  margin-top: 38px;
}
.swiper-switcher>div:hover{
  cursor: pointer;
}
#mockup{
  border-radius: 8px 0px 0px 8px;
}
#note{
  border-radius: 0px 8px 8px 0px;
}
.switcher-button.active{
  background: #189779;
  
  color: #FFFFFF;
  border-color: #189779;
}
.switcher-button{
  border: 1px solid #9E9E9E;
  box-sizing: border-box;
  
  width: 90px;
  height: 28px;
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.288889px;
  color: #9E9E9E;
}
.slide-fade-enter-active,.slide-fade-reverse-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active,.slide-fade-reverse-leave-active {
  transition: all 0.3s ease;
  
}
.slide-fade-enter,.slide-fade-reverse-leave-to {
  transform: translateX(800px);
  opacity: 0;
}
.slide-fade-leave-to,.slide-fade-reverse-enter{
  transform: translateX(-800px);
  opacity: 0;
}
.swipper{
  white-space: nowrap;
  overflow: hidden;
  position: relative;
  margin-left: 34.5px;
  margin-right: 34.5px;
}
.swipper-item{
  width: 800px;
  overflow: hidden;
}
#midfi{
  margin-top: 120px;
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
.insights{
  width: 47rem;
  margin-right: 4.3rem;
}
.insights>div{
  position: relative;
  padding-left: 26px;
}
.insights .content{
  width: 41.1rem;
}
.insights .title{
  font-family: 'Source Sans Pro-M';
  font-size: 2.4rem;
  line-height: 2.8rem;
  letter-spacing: 0.141333rem;
  color: #008757;
  position: relative;
  margin-top: 3rem;
}
.insights>div>img{
  position: absolute;
    top: -1.8rem;
    left: 0.2rem;
}
#insights{
  font-family: 'Ubuntu-Bold';
  font-size: 2.2rem;
  line-height: 2.5rem;
  letter-spacing: 0. 6875rem;
  color: #4A4A4A;
  margin-top: 7.4rem;
}
#research-1, #research-2, #research-3{
  padding-top: 10.2rem;
  /* padding-left: 42px; */
  /* padding-bottom: 97px; */
  padding-bottom: 10rem;
}
#research-1 p,#research-1 .content, #research-2 p, #research-3 p, .container p{
  font-family: 'Source Sans Pro';
  font-size: 2rem;
  line-height: 2.6rem;
  letter-spacing: 0.06rem;
  color: #000000;
  margin: 0.9rem 0;
}
.research-title{
  position: relative;
}
.research-title>span{
  position: absolute;
  left: -3.8rem;
  /* margin-right: 7px; */
  font-family: 'Ubuntu-Bold';
  font-size: 4.2rem;
  line-height: 4.8rem;
  letter-spacing: 0.0875rem;
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
  margin: 1.4rem 0 1.4rem 2.8rem;
  font-family: 'Source Sans Pro';
  font-size: 2.2rem;
  line-height: 2.6rem;
  letter-spacing: 0.06875rem;
  color: #4A4A4A;
  width: 42.4rem;
  /* font-weight: 600; 加了太粗，不加太细 */
}

#three-questions img{
  width: 48px;
}
.img-center{
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.black-center{
  font-family: 'Ubuntu';
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 2.8rem;
  text-align: center;
  letter-spacing: 0.075rem;
  color: #4A4A4A;
}
#design-process{
  padding-top: 7.2rem;
  padding-bottom: 7.2rem;
}
#launch-result>.col-8{
  align-items: center;

}
#launch-result>.col-8>div:nth-of-type(1){
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
}
#launch-result>.col-8>div:nth-of-type(2){
  font-family: 'Source Sans Pro';
  font-size: 1.6rem;
  line-height: 2rem;
  text-align: center;
  letter-spacing: 0.09422rem;
  color: #4A4A4A;;
}
#photo-credit{
  margin-top: 1.6rem;
  justify-content: center;
  font-family: 'Charter';
  font-style: italic;
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 2.2rem;
  text-align: center;
  letter-spacing: 0.05625rem;
  color: #979797;
}
#final-launch-images{
  margin-top: 1.8rem;
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
  margin-top: 5.3rem;
  width: 86.5rem;
  font-family: 'Source Sans Pro';
  font-size: 2rem;
  line-height: 2.6rem;
  letter-spacing: 0.06rem;
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
/* .solution-row>.solution-row-icon{
  width: 8.1rem;
  height: 8.1rem;
} */
.solution-row{
  margin-top: 108px;
  margin-bottom: 108px;
  justify-content: center;
}
.robi-solution{
  flex-grow: 1;
  min-width: 413px;
  max-width: 501px;
  width: 413px;
}
.solution-content{
  font-family: 'Source Sans Pro';
  font-size: 2rem;
  line-height: 2.6rem;
  letter-spacing: 0.04rem;
  color: #4A4A4A;
}
.solution-title{
  font-family: 'Source Sans Pro-B';
  font-size: 2.6rem;
  line-height: 3rem;
  display: flex;
  align-items: center;
  letter-spacing: 0.05379rem;
  color: #000000;
  margin:1.5rem 0 0.2rem;
}
#final-solution-title{
  margin-bottom: 11.6rem;
}
.row.splitter{
  margin: 86px 0;
}
#Overview>#overview-footnote{
  margin: 1.2rem 0 14rem;
  font-family: Charter;
  font-style: italic;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 1.7rem;
  letter-spacing: 0.04375rem;
  color: #979797;
}
#Overview>#overview-content{
  margin-top: 1.8rem;
}
#Overview>div.info,#Overview>#overview-content{
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: normal;
  font-size: 2rem;
  line-height: 2.6rem;
  letter-spacing: 0.06rem;
  color: #636363;
}
#Overview{
  margin-top: 5.5rem;
}
#robi-p1{
  margin-top: 1.7rem;
  width:42.8rem;
  height:9.6rem;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: normal;
  font-size: 2rem;
  line-height: 2.6rem;
  letter-spacing: 0.06rem;
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
  width: 40.7rem;
  font-family: 'Ubuntu-M';
  font-style: normal;
  font-size: 2.2rem;
  line-height: 2.8rem;
  letter-spacing: 0.048125rem;
  color: #3FAB91;
}
.container,#research-1, #research-3{
  margin: 0 auto 0;
  max-width: 86.6rem;
}
#project-description{
  margin-top: 1.2rem;
  width: 44.8rem;
  font-family: 'Ubuntu';
  font-size: 1.8rem;
  line-height: 2.4rem;
  letter-spacing: 0.05625rem;
  color: #A6A6A6;
}
#project-title{
  margin-top: 12.5rem;
  font-family: 'Ubuntu-Bold';
  font-size: 4rem;
  line-height: 4.1rem;
  letter-spacing: 0.1125rem;
  color: #262626;
}
</style>