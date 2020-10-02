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
      <div class="column align-items-center" style="margin-top:0.8rem;margin-bottom:4.8rem">
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
    <div padding class="gray-bg" style="padding-top:5.2rem;padding-bottom:3rem">
      <div id="research-1">
        <span class="research-no">1</span>
        <h2>What do parents expect children to learn?</h2>
        <p>While our end users are children, the most important stakeholder is their parents, who typically have control over their children's extracurricular activities.</p>
        <p>Thus, it is crucial to incorporate the parents' expectations from the beginning of the design process. To this end, in the semi-structured interview, we prepared a <span class="green">card-sorting exercise</span> where each card contains one potential objective of the AI courses. We then conducted interviews with 12 parents and ask them to sort the cards in their perceived order of importance.</p>
        <span id='research-insights'>Insights</span>
        <div class="research-insights-item">
          <div class="insights-item-title title-green">
            <img :src='require("@/assets/img/insights-item-title-icon.svg")' alt="" class="insights-item-title-icon">
            <span>Cultivating interest is the top priority. </span>
          </div>
          <p>To our surprise, in every card-sorting activity, parents always put “cultivate interests” at the top position. Rather than expecting kids to acquire AI basic concepts after finishing the course, they want kids to be motivated to continue learning with the big ideas of AI in the future. </p>
        </div>
        <div class="research-insights-item">
          <div class="insights-item-title  title-green">
            <img :src='require("@/assets/img/insights-item-title-icon.svg")' alt="" class="insights-item-title-icon">
            <span>Parents prefer soft skills over academic skill development.</span>
          </div>
          <p>Parents put soft skills, like communication, logical thinking, and personality traits, such as patience and perseverance, in higher positions. Generally, they expect their kids to build these soft skills at this early stage and learn specific skills in or after high school. </p>
        </div>
      </div>
      <img :src='require("@/assets/img/research-1-img.svg")' alt="" class="img-center" style="margin-top:4.8rem;margin-bottom:3rem">
    </div>
    <div padding style="padding-top:7rem;padding-bottom:3rem">
      <div id="research-2">
        <span class="research-no">2</span>
        <h2>Learning characteristic in related extracurricular courses</h2>
        <p>In order to understand the current study situation, we interviewed five groups of parents. At the same time, we conducted observations, both in the programming classes and in the experimental AI course which our lab is teaching (without using our product platform)</p>
        <div class="column align-items-center">
          <img :src='require("@/assets/img/research-2-icon-1.svg")' alt="" style="margin-top:3.2rem">
          <div class="research-insights-item">
            <div class="insights-item-title title-purple">
              <img :src='require("@/assets/img/insights-item-title-icon-purple.svg")' alt="" class="insights-item-title-icon">
              <span>Parents lack professional knowledge and time to build an AI learning environment for their children.</span>
            </div>
            <p class="parents-answer">
              “I don't know anything about computer-related content, let alone teaching him by myself.”
            </p>
            <p class="parents-answer">
              “…only have time after dinner or on weekends. But we also need to visit grandparents on weekends, so actually,  we don't have too much time for extracurricular studies. ”
            </p>
          </div>
          <div class="research-insights-item" style="margin-top:0.6rem">
            <div class="insights-item-title title-purple">
              <img :src='require("@/assets/img/insights-item-title-icon-purple.svg")' alt="" class="insights-item-title-icon">
              <span>Parents have strict time control for kids using screen-based devices.</span>
            </div>
            <p class="parents-answer">
              “We made an agreement to play iPad or computer for only 30 minutes daily, and he is usually very obedient.”
            </p>
          </div>
          <img :src='require("@/assets/img/research-2-icon-2.svg")' alt="" style="margin-top:4.4rem;margin-bottom:2.4rem">
          <div class="research-insights-item">
            <div class="insights-item-title title-yellow">
              <img :src='require("@/assets/img/insights-item-title-icon-yellow.svg")' alt="" class="insights-item-title-icon">
              <span>Kids are more interested in visually attractive content.</span>
            </div>
            <p class="parents-answer">
              Based on our observation, kids pay more attention to visually engaging content, like colorful objects, illustrations, and animations. They tend to know more about those elements, which could be a potential approach for motivating.
            </p>
          </div>
          <div class="research-insights-item" style="margin-top:1.1rem">
            <div class="insights-item-title title-yellow">
              <img :src='require("@/assets/img/insights-item-title-icon-yellow.svg")' alt="" class="insights-item-title-icon">
              <span>Learning by doing is the most acceptable way. </span>
            </div>
            <p class="parents-answer">
              We found that the courses with more hands-on practices have more positive feedback. Children demonstrated more engagement in this context than in traditional lecture- or demonstration-based sessions. 
            </p>
          </div>
        </div>
      </div>
    </div>
    <div padding class="gray-bg" style="padding-top: 4.6rem; padding-bottom:6.3rem;">
      <div id="research-3">
        <span class="research-no">3</span>
        <h2>Which learning strategy is most effective for kids?</h2>
        <p>We conducted <span class="green">expert interviews</span> and <span class="green">literature review</span> to explore the children's learning model. During our discussion with Jerry Dong, a learning expert, he claimed that <span class="bold">children would “absorb” new knowledge by fitting it into their existing schemas. Learners could build connections between the new knowledge and their prior knowledge to reach the state of equilibrium, the new schemas.</span></p>
        <div style="margin-left:-1.7rem;margin-top:3.2rem;margin-bottom:3.6rem"><img :src='require("@/assets/img/research-3-img.svg")' alt="" class="img-center"></div>
        <p>Based on our <span class="green">background research</span>, traditional AI instructions are <span class="bold">heavy on math notations</span>, and most of the <span class="bold">examples are unfamiliar to children</span>. To facilitate the above connection process, we need to address this issue thoroughly.</p>
      </div>
    </div>
    <div padding id="design-challenges">
      <h1 id='design-challenges-title'>Design Challenges</h1>
      <p style="margin:2.5rem auto">With all the insights from research in mind,  we started to define the design challenges. Here is the big picture of the learning content in thie module. </p>
      <img :src='require("@/assets/img/design-challenges-img-1.svg")' alt="" class="img-center">
      <p style="margin:2.8rem auto 3.3rem">The practice we need to design should scaffold learners in identifying the conceptual knowledge of each element as well as the overall process as portrayed above. Thus, </p>
      <img src="" alt="">
      <img :src='require("@/assets/img/design-challenges-img-2.svg")' alt="" class="img-center">
    </div>
    <div padding id="ideation" class="gray-bg">
      <h1 id="ideation-title">Ideation</h1>
      <p>After reviewing the existing resources on science education in general and AI education in particular, including books and learning products, we brainstormed elements that can help children learn basic AI concepts in a motivating way.</p>
      <img :src='require("@/assets/img/ideation-img.svg")' alt="" class="img-center" style="margin:3.2rem auto 6.7rem">
      <p>Finally, after the <span class="green">voting session</span>, we decided to <span class="bold">develop a game-like learning practice where the main character</span>, consistent with the AI theme, is a <span class="bold">robot agent</span>. Inspired also by the concept of virtual pets, we set the primary goal of the game to be "<span class="bold">teaching little Robi how to take care of himself.</span>"</p>
    </div>
    <div padding id="prototyping">
      <h1 id="prototyping-title">Prototyping</h1>
      <div id="paper-prototype" class="prototyping-subtitle">Paper Prototype</div>
      <p style="margin:2.4rem auto">Then Jan and I quickly came up with a rough paper prototype about teaching a robot to take care of himself. We recruited two kids and several novices (people who do not have background in computer science-related areas).</p>
      <img :src='require("@/assets/img/paper-proto-img-1.png")' class='img-center' alt="" style="width:100%; max-width:32.9rem; margin:2.4rem auto">
      <img :src='require("@/assets/img/paper-proto-img-2.png")' class='img-center' alt="" style="width:100%; max-width:29.6rem; margin:2.4rem auto">
      <span id='paper-proto-notes'>Paper prototype</span>
      <p>Here is the main <span class="bold">feedback</span> we got from the first user test:</p>
      <img :src='require("@/assets/img/paper-proto-img-3.svg")' class="img-center" style="margin-top:1.8rem">
      <p style="margin:2.4rem auto">The instructions and feedback were considered confusing and took participants some time to understand. Therefore, we needed to modify the writing and provided more guidance. </p>
      <p>Furthermore, the game length of 20 rounds was too long for kids,  and we realized that this is only the training process. There should be a validation phase for learners to “assess” Robi’s learning, which is also the assessment of players’ learning. </p>
      <div id="mid-fi-prototype" class="prototyping-subtitle">Mid-fi Prototype</div>
      <p>While our visual designer was working on illustration and animation, Jan and I started to make a medium-fidelity prototype based on previous feedback. Since it was hard for us to recruit more kids, in this round, we conducted more prototype testing with high-school students, who were novices as well.  Here are some <span class="bold">key improvements we made in this iteration</span>: </p>
      <div id="midfi-no1">
        <h3>#1 Feedback Improvement</h3>
        <p>When Robi takes action, it will generate a memory block that contains the values, action, and permission. There is also a memory stack for learners to trace back all the data. (which acts like training dataset)</p>
        <img :src='require("@/assets/img/midfi-1.svg")' alt="" class='img-center width-100' style="margin-top:2.4rem">
      </div>
      <div id="midfi-no2">
        <h3>#2 Instructional Text Adjustment</h3>
        <p>We clarified the instructional texts and made them more conversational to promote the psychological engagement of learners better.</p>
        <img :src='require("@/assets/img/midfi-2.svg")' alt="" class='img-center width-100' style="margin-top:1.4rem">
      </div>
      <div id="midfi-no3">
        <h3>#3 Inclusion of Validation Stage</h3>
        <p>We added an automatic validation stage where Robi acts according to the training he received. This stage also makes the overall process closer to actual machine learning.</p>
        <img :src='require("@/assets/img/midfi-3.svg")' alt="" class='img-center width-100' style="margin-top:2.2rem">
      </div>
      <div id="midfi-no4">
        <h3>#4 Additional Guidance and Instruction</h3>
        <p>We added some guidance and instruction at the beginning of each stage. </p>
        <img :src='require("@/assets/img/midfi-4.svg")' alt="" class='img-center width-100' style="margin-top:2rem">
      </div>
      <div id="final-design" class="prototyping-subtitle">Final Design</div>
      <img :src='require("@/assets/img/final-design-img-1.svg")' alt="" class="img-center" style="margin:3.1rem auto 2.6rem">
      <p><span class="circle-no">1</span> Robi's condition includes <span class="bold">three categories</span>: power, mood, and maintenance. These three categories <span class="bold">correspond to three kinds of actions</span>, including charging, watering flowers, and maintenance work. </p>
      <img :src='require("@/assets/img/final-design-img-2.svg")' alt="" class="img-center" style="margin:5.6rem auto 2.7rem">
      <p><span class="circle-no">2</span> Learners should <span class="bold">train Robi to stay in good condition</span> by giving Robi instructions of Yes/No in the training phase. Those <span class="bold">instructions will change Robi’s mindset</span>, which will <span class="bold">guide Robi’s behavior</span> in the validation phase automatically. </p>
      <img :src='require("@/assets/img/final-design-img-3.svg")' alt="" class="img-center" style="margin:5.6rem auto 3rem">
      <p><span class="circle-no">3</span> Thus, if Robi was trained well, he could 'survive' the validation phase.</p>
      <p style="margin-top:7.2rem">Here is <span class="bold">a mapping</span> between each element in the big picture of ‘machine could learn’ and our final solution.</p>
      <img :src='require("@/assets/img/training-phase-1.svg")' alt="" class="img-center" style="margin-top:6.7rem">
      <img :src='require("@/assets/img/training-phase-2.svg")' alt="" class="img-center" style="margin-top:1.4rem">
      <img :src='require("@/assets/img/training-phase-3.svg")' alt="" class="img-center" style="margin-top:1.4rem">
      <img :src='require("@/assets/img/validation-phase.svg")' alt="" class="img-center" style="margin-top:5.2rem">
    </div>
    <div id="result">
      <h1>Result</h1>
      <div padding class="swipper" style="height:20.4rem;">
        <img :src='require("@/assets/img/gallery_c_1.jpg")' alt="" style="height:20.4rem;">
        <img :src='require("@/assets/img/gallery_c_2.jpg")' alt="" style="height:20.4rem;">
        <img :src='require("@/assets/img/gallery_c_3.jpg")' alt="" style="height:20.4rem;">
        <img :src='require("@/assets/img/gallery_c_4.png")' alt="" style="height:20.4rem;">
        <img :src='require("@/assets/img/gallery_c_5.jpg")' alt="" style="height:20.4rem;">
      </div>
      <div id='scroll-notes'>Scroll vertically to see more</div>
      <div id='demo-video-title'>Demo Video</div>
      <iframe style="margin: 1.2rem auto 10.2rem auto; display:block" width="328" height="213" src="https://www.youtube.com/embed/1YLQf-1B_vE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
#demo-video-title{
  margin-top: 5.3rem;
  font-family: 'Ubuntu-M';
  font-size: 1.8rem;
  line-height: 2.1rem;
  text-align: center;
  letter-spacing: 0.5625px;
  color: #4A4A4A;
}
#scroll-notes{
  margin-top: 1.1rem;
  font-family: 'Charter';
  font-style: italic;
  font-size: 1.2rem;
  line-height: 1.5rem;
  text-align: center;
  letter-spacing: 0.375px;
  color: #979797;
}
.swipper{
  white-space: nowrap;
  overflow: scroll;
  position: relative;
  /* padding-left: 1.5rem; */

}
.swipper img{
  width: 32.8rem;
  margin: 0 0.5rem;
  overflow: hidden;
}
.circle-no{
  width: 2.6rem;
  height: 2.6rem;
  background: #51BAA1;
  color: white;
  display: inline-block;
  text-align: center;
  border-radius: 1.3rem;
}
#final-design{
  margin-top: 13rem;
}
#midfi-no1,#midfi-no2,#midfi-no3,#midfi-no4{
  margin-top: 4.2rem;
}
h3{
  font-family: 'Source Sans Pro-B';
  font-size: 1.8rem;
  line-height: 3rem;
  letter-spacing: 0.4px;
  color: #51BAA1;
}
#mid-fi-prototype{
  margin: 8rem auto 2.9rem;
}
#paper-proto-notes{
  font-family: 'Charter';
  font-style: italic;
  font-size: 1.2rem;
  line-height: 1.5rem;
  text-align: center;
  letter-spacing: 0.375px;
  color: #979797;
  display: block;
  margin-bottom:4.8rem
}
#paper-prototype{
  margin-top: 4.8rem;
}
#prototyping{
  padding-top: 9.4rem;
  padding-bottom: 4.5rem;
}
.prototyping-subtitle{
  font-family: 'Ubuntu-M';
  font-size: 1.8rem;
  line-height: 2.1rem;
  text-align: center;
  letter-spacing: 0.5625px;
  color: #4A4A4A;
}
#ideation{
  padding-top: 4.1rem;
  padding-bottom: 7.7rem;
}
#design-challenges{
  padding-top: 11rem;
  padding-bottom: 4.1rem;
}
p.parents-answer{
  background: #F1F1F1;
  border-radius: 4px;
  padding: 1.4rem 0.6rem 1.6rem 1.1rem;
  margin: 1.2rem auto;
  font-family: 'Source Sans Pro';
  font-size: 1.6rem;
  line-height: 1.9rem;
  font-style: italic;
}
.insights-item-title-icon{
  position: absolute;
  left: -1.8rem;
  top: -1.1rem;
}
.title-yellow{
  color: #565233;
}
.title-green{
  color: #008757;
}
.title-purple{
  color: #4D59D3;
}
.insights-item-title span{
  position: relative;
}
.insights-item-title{
  margin-top: 2.6rem;
  font-family: 'Source Sans Pro-M';
  font-size: 1.8rem;
  line-height: 2.1rem;
  letter-spacing: 1.06px;
  position: relative;
}
#research-insights{
  display: block;
  margin-top: 3.6rem;
  font-family: 'Ubuntu-Bold';
  font-size: 1.8rem;
  line-height: 2.1rem;
  letter-spacing: 0.5625px;
  color: #4A4A4A;
}
#research-1,#research-2,#research-3{
  position:relative;
  padding-left: 1.7rem;
  margin: -0.7rem auto;
}
#research-1 p{
  margin:0.7rem auto;
}
.research-no{
  position: absolute;
  left: 0;
  font-family: 'Ubuntu-Bold';
  font-size: 2.2rem;
  line-height: 2.5rem;
  letter-spacing: 0.458333px;
  color: #CDCDCD;
}
h2{
  font-family: 'Ubuntu-Bold';
  font-style: normal;
  text-align: start;
  font-size: 2.1rem;
  line-height: 2.6rem;
  letter-spacing: 0.625px;
  color: #4A4A4A;
}
.learners-in-context-list-item{
  margin-top: 1.6rem;
}
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