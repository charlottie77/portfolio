<template>
  <div id='smart-node'>
    <Banner height="32.2rem" backgroundColor="#ECECEC"/>
    <div class='container' id='container-1'>
      <img :src='require("@/assets/img/sn_illu.svg")' alt="" id="phone-icon">
      <div id="brief-description">
        <div id="project-title">Smart Node</div>
        <div id="project-summary">A web programming tool for coding novices to build open-source hardware maker projects in a visual and low-coding way.</div>
      </div>
      <div id="my-role">
        <div id="my-role-title">My Role</div>
        <div id='my-role-detail' class="row">
          <div id="my-role-1" class="col-12">
            <p><span class="bold">Front-end Development @ IfCreate</span></p>
          </div>
          <img id="my-role-2" :src='require("@/assets/img/sn_role_pic.png")'>
          <div id="my-role-3">
            <p> I am responsible for the <span class="bold-green "> front-end implementation of  “Grammar Section” module </span> which includes 10 components, such as the Logic Patch, Control Flow Patch, Operator Patch, Math Patch, and Unititly Patch. I <span class="bold-green "> attuned the code with designers to deliver the pixel-perfect experience </span> in both interactive and visual aspects. </p>
            <p id="mr3-1">Duration:  4 months </p>
            <p>Collaborators: Evan Feng (Designer), Zenan Sun, Jay Zhu</p>
          </div>
        </div>
      </div>
      <div id="demo">
         <div id="demo-title">Online Demo (Chinese)</div>
         <div id="demo-link">
           <a target="_blank" rel="noopener" href="https://dognan.gitee.io/test/#/playground/1"><p>https://dognan.gitee.io/test/#/playground/1 </p></a>
         </div>
      </div>
     
       <div class="row" id='sn-mock-line-1' >
        <img :src='require("@/assets/img/sn_mock_s_1.png")'>
        <img :src='require("@/assets/img/sn_mock_s_2.png")'>
        <img :src='require("@/assets/img/sn_mock_s_3.png")'>
      </div>

      <img :src='require("@/assets/img/sn-splitter.svg")' alt="" class="img-center" id="splitter-1">

      <div id="final-design-1">
        <div id="fd1-title">Final Product</div>
        <p>In the maker learning process, the novices, such as primary students and designers,  always spend a lot of time on the line-by-line coding or debugging but feel frustrated because they are lack of programming knowledge. Thus, we designed and built SmartNode to provide development aids. Thus, the problem statement is:</p>
        <div id="fd1-ps">
           <img  :src='require("@/assets/img/sn_ps.svg")' />
        </div>
        <p>Using SmartNode, by dragging, dropping and connecting the nodes, novices can do programming for their maker project in a visual and “light on coding” way. The learning with SmartNode is clearer and more straightforward. Students can do technical innovation with lower barrier. </p>
        <div id="fd1-curated-list">
          <div class="fd1-cl-item">
            <div class="fd1-cli-title">
              <span>1</span>
              <label>Login & Browse project</label>
            </div>
            <img class="fd1-cli-gif" :src='require("@/assets/img/sn_mock_s_1.png")'/>
          </div>
          <div class="fd1-cl-item">
            <div class="fd1-cli-title">
              <span>2</span>
              <label>Maker Toolbox</label>
            </div>
            <img class="fd1-cli-gif" :src='require("@/assets/img/sn_mock_s_1.png")'/>
            <p>With the toolbox, student can browse the connected hardware, add new hardware, and use grammar blocks for advanced programming.</p>
          </div>
          <div class="fd1-cl-item">
            <div class="fd1-cli-title">
              <span>3</span>
              <label>Visual Programming</label>
            </div>
            <img class="fd1-cli-gif" :src='require("@/assets/img/sn_mock_s_1.png")'/>
            <p>Students can do visual programming by dragging, dropping and connecting the hardware/grammer nodes in the canvas. </p>
          </div>
          <div class="fd1-cl-item">
            <div class="fd1-cli-title">
              <span>4</span>
              <label>Test & Debug</label>
            </div>
            <img class="fd1-cli-gif" :src='require("@/assets/img/sn_mock_s_1.png")'/>
            <p>After building a complete flow, students can click “test” to see the values flowing.</p>
          </div>

        </div>
      </div>

      <div id="question"><img :src='require("@/assets/img/sn_ps_dot.svg")' alt="" id="bullet"><span>How might we provide more development aids for coding novice to help with their design and innovation of the open-source hardware project? </span></div>
      
      <div id="overview">
        <div id="overview-title">Overview</div>
        <div id="overview-summary">
          <p>Duration:  1.5 months </p>
          <p>Tools: Figma, Adobe Illustration. </p>
          <p>Research Collaborators: Romi Jin, Mike Jin, Brandon Huang</p>
        </div>
        <p id="overview-detail">
          This project is based on my course project of Interaction Design Overview course in CMU, 2019. Our group (four people) conducted generative design research within the scope of food truck service on the campus of CMU. Due to a switch in our course project after the ideation phase, I finished the remaining design work on my own, including sketch, wireframes, hi-fi prototype, and user testing. 
        </p>
      </div>
    
      <div id="background">
        <div id="background-title">Background</div>
        <p><span class="bold">Food Trucks are an important part of the CMU dining experience.</span> There are several popular food trucks in and around CMU campus, such as Tartan Express, Taco Food Truck, and Indian on Wheels. </p>
        <div class="row">
          <div id="background-1" class='col-12'>
            <p>A large portion of students choose to buy foods from trucks for lunch or dinner with the expectation of low price, convenience, and more cuisine options. <span class="bold">My goal is to explore the issue and opportunities of food truck experience and develop my concepts into a valid human-centered solution.</span></p>
            <img :src='require("@/assets/img/background-1.svg")' alt="">
          </div>
          <div id="background-2" class='col-12'>
            <img :src='require("@/assets/img/background-2.jpg")' alt="">
          </div>
        </div>
      </div>
     
    </div>
    <img :src='require("@/assets/img/FR-bg-splitter.svg")' alt="" id='bg-splitter'>
    <div id="how-did">How did I get there?</div>
    <img :src='require("@/assets/img/foodrouter-splitter.svg")' alt="" class="img-center" id="splitter-2">
    <div class="gray-bg" id='design-process'>
      <div id="design-process-title">Design Process</div>
      <img :src='require("@/assets/img/FR_design-process-img.svg")' class="img-center" id="design-process-img">
    </div>
    <div class="container">
      <div id="generative-research">
        <div id="generative-research-title">Generative Research</div>
        <div id="immerse">
          <div class="generative-research-subtitle">Immerse in the Food Truck Experience</div>
          <p>As CMU students ourselves, we choose <span class="blue-text"> contextual research methods </span> to immerse ourselves in the food truck experience, which is readily accessible to us. We conducted <span class="blue-text"> contextual inquiries </span> with students buying foods from the truck and conducted <span class="blue-text"> intercept </span> with both customers and potential customers, who bought lunch at other places near campus. Also, every team member did a <span class="blue-text"> contextual observation </span> by sitting near a food truck and waiting in the line. I also conducted a <span class="blue-text"> semi-structured interview </span> with the food truck owner to understand their challenges and needs. </p>
          <img :src='require("@/assets/img/FR_gr-img-1.svg")' alt="" id="gr-img-1" class='img-center'>
          <div id="scroll-note">> Scroll horizontally to view more photos</div>
          <div id="gr-scroller">
            <div class="scroll-item">
              <img :src='require("@/assets/img/FR_gr-scroller-1.png")' alt="">
              <div class='credit-note'>Photo by Mike</div>
            </div>
            <div class="scroll-item">
              <img :src='require("@/assets/img/FR_gr-scroller-2.png")' alt="">
              <div class='credit-note'>Photo by Mike</div>
            </div>
            <div class="scroll-item">
              <img :src='require("@/assets/img/FR_gr-scroller-3.png")' alt="">
              <div class='credit-note'>Photo by Mike</div>
            </div>
          </div>
        </div>
        <div id="idea">
          <div class="generative-research-subtitle">Idea Consolidation Using Affinity Diagram</div>
          <p>With all the notes from the interview and observation, we conducted an <span class="blue-text"> affinity diagram </span> session to go through and <span class="bold">interpret our data</span>. The affinity diagram session's primary goal is to <span class="bold">understand our stakeholders under the whole context of the CMU campus</span>. Since the current scope is broad and vague, we roughly identified several potential directions and target users we want to focus on. Based on that, we <span class="bold">wrote down insights and built personas</span> for further synthesis. </p>
          <div id="blue-quote"><img :src='require("@/assets/img/quote-mark.svg")' alt="" id="quote-mark"> The goal is not to finish the diagram, but discuss, validate, and mutual inquire from the perspective of users. </div>
          <img :src='require("@/assets/img/FR_idea.svg")' alt="" class="img-center" id="idea-img">
        </div>
      </div>
      <div id="synthesis">
        <div id="synthesis-title">Synthesis</div>
        <div id="synthesis-subtitle">We focus on busy CMU students</div>
        <p>Among the potential directions, we decided to focus on <span class="bold">busy CMU students</span> who always have tight schedules. <span class="highlight"> Their main pain points are the long waiting line and slow serving of food trucks. </span> </p>
        <p>Here are the insights of our key stakeholders, CMU students, and food truck owners. </p>
        <div id="student-insights">
          <div id="student-insights-title">Insights from <span class="blue-text-2"> CMU Students</span> </div>
          <div class="insight-row coulmn" style="margin-top:1.2rem">
            <img :src='require("@/assets/img/stu-insights-1.svg")' alt="" class="insight-img">
            <div class="insight-title-blue">Due to students' tight schedules, waiting in a long line at a food truck is not feasible. </div>
            <p>“ Yes, sometimes you have to wait for a pretty long time to get the food. Sometimes it takes 20 minutes to get the food. ” </p>
            <p>I will see it. If the line is too long, I will change to another place definitely. </p>
          </div>
          <div class="insight-row coulmn">
            <img :src='require("@/assets/img/stu-insights-2.svg")' alt="" class="insight-img">
            <div class="insight-title-blue">“I don’t have too much time and mind in deciding which food truck or place to go to.”</div>
            <p>“… lunch is not about picking something they enjoy, but a routine task I need to finish ASAP. ”</p>
          </div>
          <div class="insight-row coulmn">
            <img :src='require("@/assets/img/stu-insights-3.svg")' alt="" class="insight-img">
            <div class="insight-title-blue">Students valued the most that food trucks could provide special cuisine options, such as vegetarian or Indian foods. </div>
            <p>“It is the only Mediterranean food place on campus.”</p>
            <p>“I have dietary restrictions, and the food in school doesn’t have too many vegetarian options.”</p>
          </div>
        </div>
        <div id="owner-insights">
          <div id="owner-insights-title">Insights from <span class="red-text"> Food Truck Owner </span></div>
          <div class="insight-row coulmn" style="margin-top:1.2rem">
            <img :src='require("@/assets/img/owner-insights-1.svg")' alt="" class="insight-img">
            <div class="insight-title-red">Due to students' tight schedules, waiting in a long line at a food truck is not feasible. </div>
            <p>“ Yes, sometimes you have to wait for a pretty long time to get the food. Sometimes it takes 20 minutes to get the food. ” </p>
            <p>I will see it. If the line is too long, I will change to another place definitely. </p>
          </div>
          <div class="insight-row coulmn">
            <img :src='require("@/assets/img/owner-insights-2.svg")' alt="" class="insight-img">
            <div class="insight-title-red">“I don’t have too much time and mind in deciding which food truck or place to go to.”</div>
            <p>“… lunch is not about picking something they enjoy, but a routine task I need to finish ASAP. ”</p>
          </div>
          <div class="insight-row coulmn">
            <img :src='require("@/assets/img/owner-insights-3.svg")' alt="" class="insight-img">
            <div class="insight-title-red">Students valued the most that food trucks could provide special cuisine options, such as vegetarian or Indian foods. </div>
            <p>“It is the only Mediterranean food place on campus.”</p>
            <p>“I have dietary restrictions, and the food in school doesn’t have too many vegetarian options.”</p>
          </div>
        </div>
      </div>
      <div id="design-challenge">
        <div id="design-challenge-title">Design Challenge</div>
        <div class="design-challenge-subtitle">Current food truck dining experience</div>
        <p style="width:87rem">Based on the data from contextual inquiry, I also built a <span class="blue-text"> journey map </span> to model CMU students' current dining experience. The primary pain points are highlighted as follows: </p>
        <img id='design-challenge-img-1' :src='require("@/assets/img/design-challenge-1.png")' alt="" class="img-center">
        <div class="design-challenge-subtitle">Reframing Problem using Five Whys</div>
        <p>For all the pain points I tried to handle, I asked <span class="blue-text">‘five whys’</span> to dig into each of them. Then I did <span class="blue-text">brainstorming</span> and drew a series of <span class="blue-text">storyboards</span> shown to interviewees in the following <span class="blue-text">speed-dating session </span>, where I collected the feedback of CMU students to <span class="bold">validate my ideas and extract potential needs</span>. Finally, I decided to go deeper with the idea of <span class="bold">planning a dining route fitting to CMU students’ tight schedules. </span></p>
        <p>I highlighted the basic needs of <span class="highlight">CMU students (blue)</span> and the value of both students and <span class="highlight-yellow">food truck owners (yellow) </span>. During the ideation, the values guided me to brainstorm solutions that fulfill these basic needs. </p>
        <img id="design-challenge-img-2" :src='require("@/assets/img/design-challenge-2.svg")' alt="" class="img-center">
        <!-- <div id="click-benefit">Click to see the <a href="">Benefit</a></div> -->
      </div>
      <div id="prototyping">
        <div id="prototyping-title">Prototyping</div>
        <div class="prototyping-subtitle">Scenario in FoodRoute</div>
        <p>With the general ideal journey, I went back to specific scenarios I found in the research phase and speed dating session. <span class="bold">There are two kinds of scenarios I want to tackle at this stage</span>. Some users are <span class="bold">planners</span> who prefer to plan ahead, but some users will think about buying food at the <span class="bold">last minute</span>. To redefine the food truck dining experience in CMU, I mapped each scenario's step with the service FoodRoute will provide.  </p>
        <div id="scenarios">
          <div id="scenario-1">
            <div class="scenario-title">Scenario 01: Plan ahead</div>
            <p>Many CMU students are good planners who always arrange their schedules ahead efficiently. They claimed that they want to plan their next meal 1-2 hours beforehand. </p>
            <img :src='require("@/assets/img/scenario-img-1.png")' alt="" class="img-center scenario-img" id="scenario-img-1">
          </div>
          <div id="scenario-2">
            <div class="scenario-title">Scenario 02: Food ASAP</div>
            <p>Some CMU students are too busy to remember buying foods until the last minutes. So another scenario is that the users need to order food as soon as possible to fit their schedule. In this case, there is <span class="bold">not too much space for planning</span>. </p>
            <img :src='require("@/assets/img/scenario-img-2.png")' alt="" class="img-center scenario-img" id="scenario-img-2">
          </div>
        </div>
        <div id="initial-sketch">
          <div class="prototyping-subtitle" id="initial-sketch-title">Initial Sketch</div>
          <p>Based on the two scenarios above, I started my initial sketch.</p>
          <img :src='require("@/assets/img/initial-sketch-img.png")' alt="" class="img-center" id="initial-sketch-img">
        </div>
        <div id="wireframe">
          <div class="prototyping-subtitle">Wireframe</div>
          <p>Then, I made three rounds of wireframe prototype and conducted user tests with CMU students iteratively. I built on the FoodRoute prototype gradually by incorporating students’ feedback. Here are some key design improvements of FoodRoute I want to share: </p>
          <div class='wireframe-list-item column justify-content-center align-items-center' id="wireframe-1">
            <div class="wireframe-subtitle">1. Two plan modes using quick Campus POI</div>
            <p>The first design is that student can import their course schedule or other calendars (such as google calendar, iOS calendar) to plan their food route. However, during the user testing, people said <span class="bold">their schedule was always changing</span>, and some people used their calendar software as a “notebook”, which could be <span class="bold">messy</span>. Thus, a more efficient and intuitive way is to use the <span class="bold">campus POI</span> to plan their food route, where users can <span class="bold">locate POI via familiar abbreviation among CMU students</span>. Also, for the two scenarios, I added the two plan modes. </p>
            <div><img :src='require("@/assets/img/wireframe-img-1.png")' alt="" class="img-center" id="wireframe-img-1"></div>
            <!-- <img :src='require("@/assets/img/wireframe-img-1.png")' alt="" class="img-center" id="wireframe-img-1"> -->
          </div>
          <div class="wireframe-list-item" id="wireframe-2">
            <div class="wireframe-subtitle">2. Choosing Food Truck, Food ASAP vs. Plan Ahead</div>
            <p>Since there are two planning modes for different scenarios, the <span class="bold">users will value different factors</span> as well. When they need food ASAP, time is always the prioritized factor. But when they plan ahead (usually in the class before lunch/dinner ), they will pay more attention to special cuisine, walk distance, and diet options. </p>
            <div><img :src='require("@/assets/img/wireframe-img-2.png")' alt="" class="img-center" id="wireframe-img-2"></div>
          </div>
          <div class="wireframe-list-item" id="wireframe-3">
            <div class="wireframe-subtitle">3. FoodRoute & Tweak the pick time </div>
            <p>For the plan ahead mode, users will review their route and tweak the pick time. In the beginning, I did not add the step of tweaking the pick time because FoodRoute should plan it for users to make the overall experience more effortless. But during the user testing, students said that they actually <span class="bold">want more control if they are busy</span>. In this way, setting an estimated pick time became one sub-step. </p>
            <img :src='require("@/assets/img/wireframe-img-3.png")' alt="" class="img-center" id="wireframe-img-3">
          </div>
          <div class="wireframe-list-item" id="wireframe-4">
            <div class="wireframe-subtitle">4. Make the menu more efficient</div>
            <p>During the user testing, the first draft of the menu design may include too much information, such as the detailed description. Also, <span class="bold">users were confused about the overlap</span> between the featured items and those in other categories. They were not sure about the differences in these item groups. </p>
            <img :src='require("@/assets/img/wireframe-img-4.png")' alt="" class="img-center" id="wireframe-img-4">
          </div>
          <!-- <div id="complete-wireframe-link">Click to see complete wireframe</div> -->
        </div>
      </div>
      <div id="final-design-2">
        <div id="final-design-title">Final Design</div>
        <p id='note'>I only showed the final design of the “planning ahead” scenario here. You could check the whole worked-prototype to check more. </p>
        <div class="fd-list-item column align-items-center" id="fd-1" style="margin-top:5rem">
          <div class="fd-list-item-title">1. Locate FoodRoute via Quick Campus POI </div>
          <div>
            <p class="fd-content">Quick Campus POI is more efficient and intuitive for busy CMU students to plan their food route, where users can <span class="bold">locate POI via familiar abbreviation among CMU students</span>, such as UC, DH, GHC, etc. </p>
            <img :src='require("@/assets/img/fd2-img-1.png")' alt="">
          </div>
        </div>
        <div class="fd-list-item column align-items-center" id="fd-2">
          <div class="fd-list-item-title">2. Set Arrival Time</div>
          <p>Setting Arrival Time is intuitive because users always have an idea of the scheduled time. Users now do not have to worry about getting lunch on time because FoodRoute will handle the planning </p>
          <div>
            <p class="fd-content"><span>Analog Time Picker</span>To achieve a more efficient time picking interaction, I choose analog time picker to minimize this step into simple drags. </p>
            <img :src='require("@/assets/img/fd2-img-2.png")' alt="">
          </div>
        </div>
        <div class="fd-list-item column align-items-center" id="fd-3">
          <div class="fd-list-item-title">3. Browse Food Truck & Menu</div>
          <div>
            <p class="fd-content">Users can browse food trucks based on the factors they care about, such as special cuisine options, time estimates, featured dishes. Those factors also connect with food truck owners' values because they want to be special and meet students' needs. </p>
            <img :src='require("@/assets/img/fd2-img-3.png")' alt="">
          </div>
        </div>
        <div class="fd-list-item column align-items-center" id="fd-4">
          <div class="fd-list-item-title">4. Pre-Order & Set FoodRoute</div>
          <div>
            <p class="fd-content">To reduce the annoyance of setting time again, the default picking time will be 30 minutes ahead of arrival time and adapt to the user’s routine by applying AI algorithm. </p>
            <img :src='require("@/assets/img/fd2-img-4.png")' alt="">
          </div>
        </div>
        <div class="fd-list-item column align-items-center" id="fd-5">
          <div class="fd-list-item-title">5. Follow FoodRoute</div>
          <p class="fd-content">After planning, users can follow the foodroute through 6 steps. The transition will automatically be trigged when: (1) It is the depart time; (2) User is approaching the food truck or destination; (3) Food was picked or QR code scanned. Users can mannually go to different steps by tapping the time line or control button since the route could be flexible enough to meet their time schedules. </p>
          <div><img :src='require("@/assets/img/fd2-img-5.png")' alt=""></div>
        </div>
        <div class="fd-list-item column align-items-center" id="fd-6">
          <div class="fd-list-item-title">6. Quick Feedback</div>
          <p class="fd-content">FoodRoute encourages users to provide feedback by making it <span class="bold"> simple</span> (only three questions) and <span class="bold"> offering coupons to motivate</span> users. In this way, <span class="bold"> users become the value creators</span> by providing data valuable for both CMU students and food truck owners.  </p>
          <div><img :src='require("@/assets/img/fd2-img-6.png")' alt=""></div>
        </div>
        <div class="row" id="final-pro">
          <div class="fp-subtitle">Hi-fi Prototype</div>
          <div class="fp-arrow-check">
            <img :src='require("@/assets/img/download.png")' alt=""/>
            <label>Check the clickable prototype here</label>
          </div>
          <div class="fp-figma">
            <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="375" height="840" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FVtrzvKULOlMf98OcxXVbRb%2Ffood-route-final-prototype%3Fnode-id%3D1%253A6%26viewport%3D362%252C467%252C0.05300828069448471%26scaling%3Dmin-zoom&chrome=DOCUMENTATION" allowfullscreen></iframe>
          </div>
          <a target="_blank" rel="noopener" href="https://www.figma.com/proto/VtrzvKULOlMf98OcxXVbRb/food-route-final-prototype?node-id=1%3A6&viewport=201%2C454%2C0.05433259904384613&scaling=min-zoom"><button class="fp-btn">Open In New Tab</button></a>
        </div>
      </div>
      <img :src='require("@/assets/img/foodrouter-splitter.svg")' alt="" class="img-center" id="splitter-2">
    </div>
    <!-- <div class="container">
      <div id="next-block" @click='route_to("/food-route")'>
        <div class="hr"></div>
        <div id="next-project-title">Food Route</div>
        <div id="next-project-description">A mobile app plans the food truck dining route for busy CMU students.</div>
        <span id="next-btn">NEXT <img :src='require("@/assets/img/next-project-btn.svg")' alt=""></span>
      </div>
    </div> -->
    <OnTopTools themeColor='#1B75AD' heightToShow='332' :navOnly='false' activeSpan='work'/>
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import OnTopTools from '@/components/OnTopTools'

import {_isMobile} from '@/util.js'
export default {
  name:'FoodRoute',
  components:{
    Banner,
    OnTopTools,
  },
  // beforeCreate: function(){
  //   if(_isMobile()) {
  //     this.$router.replace('/m-food-route');
  //   }
  // },
}
</script>

<style lang="scss" scoped>
@mixin gray-title {
  font-family: 'Ubuntu-Bold';
  font-size: 3.4rem;
  line-height: 3.9rem;
  text-align: center;
  letter-spacing: 0.74375px;
  color: #C0C0C0;
}
@mixin black-subtitle{
  font-family: 'Ubuntu-M';
  font-size: 2.4rem;
  line-height: 2.8rem;
  text-align: center;
  letter-spacing: 0.75px;
  color: #4A4A4A;
}
.bold{
  font-family: 'Open Sans-B';
  color: #000;
}
.bold-green {
  font-family: 'Open Sans-B';
  color: #41988E;
}


#smart-node{
  width: 100%;
  #Banner { position: absolute; width:100%}
  #phone-icon{ position: absolute; right:8rem; top: 5rem;}
  .container {
    position: relative;
    max-width: 85.7rem;
    margin: 11.7rem auto 0;
    p{
      font-family: 'Open Sans-R';
      font-size: 1.7rem;
      line-height: 2.8rem;
      letter-spacing: 0.04rem;
      color: #404040;
      margin-block-start: 0;
      margin-block-end: 0;
    }
    #brief-description{
      padding-top: 15.3rem;
      padding-right: 39rem;
      #project-title{
        font-family: 'Ubuntu-Bold';
        font-size: 4rem;
        line-height: 4.6rem;
        letter-spacing: 1.25px;
        color: #262626;
      }
      #project-summary{
        margin-top: 1.4rem;
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: normal;
        font-size: 2rem;
        line-height: 2.8rem;
        letter-spacing: 0.04rem;
        min-width: 50rem;
        color: #A6A6A6;
      }
    }
    #question{
        position: relative;
        margin-top: 3.5rem;
        width: 70%;
        #bullet{
          position: absolute;
          left: -2.2rem;
          top: -0.5rem;
        }
        span{
          position: relative;
          font-family: 'Ubuntu-M';
          font-size: 2.2rem;
          line-height: 2.8rem;
          letter-spacing: 0.48125px;
          color: #57A79E;
        }
      }
    #sn-mock-line-1 {
      margin-top: 3.6rem;
      position: relative;
      left: calc( 50% - 55.25rem);
      margin-left: auto;
      margin-right: auto;
      img {
        width: 34.2rem;
      }
    }
    #my-role{
      margin-top: 9rem;
      #my-role-title{
        font-family: 'Ubuntu-Bold';
        font-size: 2.4rem;
        line-height: 2.8rem;
        letter-spacing: 0.75px;
        color: #41988E;
      }
      #my-role-detail{
        margin-top: 1.1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        #my-role-1{
          padding: 0rem 2rem 0rem 0rem;
          max-width: 43.1rem;
          align-self: flex-start;
          margin-top: 0.8rem;
          p:nth-child(2){
            margin-top: 1.5rem;
          }
        }
      }
      #my-role-2 {
        width: 52.4rem;
        margin-top: 3.6rem;
      }
      #my-role-3 {
        margin-top: 3.6rem;
        #mr3-1{
          margin-top: 2.4rem;
        }
      }
    }
    #demo{
      margin-top: 16rem;
      #demo-title {
        @include black-subtitle();
      }
      #demo-link {
        margin-top: 3.6rem;
        padding: 1.6rem 5.2rem;
        
        a{
          background-color: #F2F8F7;
          display: flex;
          justify-content: center;
          padding: 1.6rem 0rem;
          border-radius: 0.6rem;
          text-decoration-color: #41988E;
          p{
            font-size: 2rem;
            font-family: 'Open Sans-SB';
            color: #41988E;
          }
        }
        
      }
    }
    #final-design-1 {
      margin-top: 16rem;
      #fd1-title {
        @include gray-title();
        margin-bottom: 3.6rem;
      }
      #fd1-ps {
        margin-top: 4.6rem;
        margin-bottom: 4.6rem;
        display: flex;
        justify-content: center;
      }
      #fd1-curated-list{
        margin-top: 6.4rem;;
      }
      #fd1-curated-list {
        .fd1-cl-item{
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 10rem;
          .fd1-cli-title{
            display: flex;
            span{
              width: 2.6rem;
              height: 2.6rem;
              background: #41988E;
              border-radius: 1.3rem;

              font-family: 'Open Sans-B';
              font-size: 1.8rem;
              line-height: 2.3rem;
              display: flex;
              align-items: center;
              justify-content: center;
              letter-spacing: 0.4px;
              color: #FFFFFF;
              margin-right: 1.2rem;
            }
            label{
              font-family: 'Open Sans-BI';
              font-size: 2.6rem;
              line-height: 3rem;
              letter-spacing: 0.577778px;
              color: #41988E;
            }
          }
          p{
            width: 80%;
          }
          .fd1-cli-gif{
            margin-top: 2.4rem;
            width: 85%;
          }
        }
      }

    }
    #overview{
      margin-top: 6rem;
      #overview-title{
        font-family: 'Ubuntu-Bold';
        font-size: 2.4rem;
        line-height: 2.8rem;
        letter-spacing: 0.75px;
        color: #2E7390;
      }
      #overview-summary{
        margin-top: 1.3rem;
        p{
          font-family: 'Open Sans-R';
          font-size: 1.7rem;
          line-height: 2.8rem;
          letter-spacing: 0.04rem;
          color: #404040;
        }
      }
      #overview-detail{
        margin-top: 2.4rem;
        font-family: 'Open Sans-R';
        font-size: 1.7rem;
        line-height: 2.8rem;
        letter-spacing: 0.04rem;
        color: #404040;
      }
    }
    #splitter-1{
      margin-top: 13.9rem;
    }
    #background{
      #background-title{
        @include gray-title();
        margin-top: 13.8rem;
        margin-bottom:4.8rem;
      }
      .row{
        margin-top: 2rem;
        #background-1>img {
          width: 35rem;
          display: block;
          margin: 4.3rem auto;
        }
        #background-2>img {
          width: calc( 100% - 2.2rem);
          float: right;
        }
        
      }
    }
    
    #generative-research{
      #generative-research-title{
        @include gray-title();
        margin-top: 16rem;
      }
      .generative-research-subtitle{
        font-family: 'Ubuntu-M';
        font-size: 2.4rem;
        line-height: 2.8rem;
        text-align: center;
        letter-spacing: 0.75px;
        color: #4A4A4A;
      }
      #immerse{
        .generative-research-subtitle { margin-top: 10.2rem; margin-bottom: 1.1rem;}
        #gr-img-1{
          margin: 3.2rem auto 6.4rem;
          width: 70%;
          }
        #scroll-note{
          font-family: 'Open Sans';
          font-size: 1.7rem;
          line-height: 2.1rem;
          letter-spacing: 0.377778px;
          color: #828282;
        }
        position: relative;
        #gr-scroller{
          margin-top: 1.2rem;
          position: relative;
          display: flex;
          height: 35.5rem;
          overflow-x: scroll;
          .scroll-item{display: inline-block;}
          div>img{
            height: 30rem;
          }
          div>.credit-note{
            font-family: Charter;
            font-style: italic;
            font-weight: normal;
            font-size: 1.6rem;
            line-height: 2.4rem;
            text-align: center;
            letter-spacing: 0.625px;
            color: #888888;
          }
        }
      } 
      #idea{
        margin-top: 16rem;
        p{
          margin-top: 3.3rem;
        }
        #blue-quote{
          width: 71.1rem;
          margin: 6.1rem auto 8.1rem;
          position: relative;
          font-family: 'Ubuntu-BI';
          font-size: 2.5rem;
          line-height: 2.9rem;
          text-align: center;
          letter-spacing: 0.555556px;
          color: #1B75AD;
          #quote-mark{
            position: absolute;
            left: -7px;
            top: -12px;
            z-index: -1;
          }
        }
      }
    }
    #synthesis{
      margin-top: 27rem;
      #synthesis-title{ @include gray-title(); }
      #synthesis-subtitle{
        @include black-subtitle();
        margin-top: 3.7rem;
      }
      .insight-img{
        position: absolute;
        left: -4.2rem;
        top: 1.8rem;
        width: 7rem;
      }
      .insight-row{
          position: relative;
          background: #FAFAFA;
          border-radius: 32px;
          padding: 3.2rem 3rem 3.2rem 4.4rem;
          margin-top: 4.8rem;
          width: 70%;
          .insight-title-blue,.insight-title-red{
            font-family: 'Ubuntu-M';
            font-size: 2rem;
            line-height: 3.0rem;
            letter-spacing: 0.04rem;
            max-width: 60rem;
          }
          .insight-title-blue {color: #1B75AD;}
          .insight-title-red{color: #A50E07;}
          p{
            &:nth-of-type(2){
              margin-top: 0.6rem;
            }
            margin-top: 1.5rem;
            font-family: 'Open Sans-I';
            font-size: 1.6rem;
            line-height: 2.2rem;
            letter-spacing: 0.04rem;
            color: #4A4A4A;
          }
        }
      #student-insights{
        margin-top: 4.9rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        #student-insights-title{
          font-family: 'Ubuntu-M';
          font-size: 2rem;
          line-height: 2.3rem;
          letter-spacing: 0.625px;
          color: #4A4A4A;
        }
      }
      #owner-insights{
        margin-top: 8.6rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        #owner-insights-title{
          font-family: 'Ubuntu-M';
          font-size: 2rem;
          line-height: 2.3rem;
          letter-spacing: 0.625px;
          color: #4A4A4A;
        }
      }
    }
    #synthesis>p:nth-of-type(1){ margin-top: 3.6rem; }
    #synthesis>p:nth-of-type(2){
      margin-top: 1.6rem;
    }
    #design-challenge{
      margin-top: 16rem;
      #design-challenge-img-1{
        position: relative; 
        left: calc( 50% - 65.5rem);
        width: 150%;
        }

      #design-challenge-img-2{position: relative; left: calc( 50% - 65.9rem)}
      #design-challenge-title{@include gray-title();}
      .design-challenge-subtitle{@include black-subtitle(); margin-top: 6.4rem; margin-bottom: 2.4rem;}
      p{margin-top:1.1rem; margin-bottom:1.1rem}
      #design-challenge-img-1{margin-top: 4.8rem; margin-bottom: 16rem;}
      #design-challenge-img-2{margin-top: 4.8rem; margin-bottom: 9.1rem;}
      #click-benefit{
        font-family: 'Open Sans-I';
        text-align: center;
        letter-spacing: 0.942222px;
        color: #9E9E9E;
        position: relative;
        width: 17rem;
        margin-left: auto;
        margin-right: auto;
      }
      #click-benefit::after{
        content:'';
        position: absolute;
        height: 0px;
        width: 3.4rem;
        border: 1.5px solid #E6E6E6;
        border-radius: 1.5px;
        bottom: 0;
        left: calc( 50% - 1.7rem );
        bottom: -8px;
      }
    }
    #prototyping{
      margin-top: 25rem;
      #prototyping-title {@include gray-title();}
      .prototyping-subtitle{@include black-subtitle(); margin-top: 10rem; margin-bottom: 3.5rem;}
      #scenarios{
        .scenario-title{
          font-family: 'Open Sans-B';
          font-size: 2.2rem;
          line-height: 3.3rem;
          text-align: start;
          letter-spacing: 0.04rem;
          color: #4A4A4A;
          margin-bottom: 1.2rem;
        }
        .scenario-img{
          width: 100%;
          margin-top: 2.4rem;
        }
        #scenario-1{ margin-top: 4.7rem; }
        #scenario-2{ margin-top: 7.2rem; margin-bottom: 9.6rem;}
      }
      #initial-sketch #initial-sketch-img{
        width: 100%;
        margin-top: 2.8rem;
        margin-bottom: 7.2rem;
      }
      #wireframe{
        .wireframe-list-item{
          .wireframe-subtitle{
            font-family: 'Open Sans-SB';
            font-size: 2rem;
            line-height: 2.8rem;
            letter-spacing: 0.533333px;
            color: #4A4A4A;
            text-align: start;
            width: 100%;
            margin-top: 8.4rem;
            margin-bottom: 0.8rem;
          }
          img{ margin-top: 4.8rem; }
        }
        #wireframe-img-1{ width: 101.3rem; }
        #wireframe-img-2{ width: 77.7rem; }
        #wireframe-img-3{ width: 75.3rem; }
        #wireframe-img-4{ width: 91.3rem; margin-left: 3.8rem;}
        #complete-wireframe-link{
          font-family: 'Open Sans-I';
          font-size: 1.6rem;
          line-height: 1.9rem;
          text-align: center;
          letter-spacing: 0.942222px;
          color: #9E9E9E;
          margin-top: 6.4rem;
        }
        #complete-wireframe-link::after{
          content:'';
          position: absolute;
          height: 0px;
          width: 3.4rem;
          border: 1.5px solid #E6E6E6;
          border-radius: 1.5px;
          bottom: 0;
          left: calc( 50% - 1.7rem );
          bottom: -8px;
        }
      }
      
    }
    #final-design-2{
      margin-top: 14.2rem;
      // padding-bottom: 19rem;
      #final-design-title{@include gray-title()}
      p#note{
        font-family: 'Open Sans-I';
        font-size: 1.6rem;
        line-height: 1.9rem;
        letter-spacing: 0.942222px;
        color: #4A4A4A;
        margin-top: 4.8rem;

      }
      .fd-list-item{
        margin-top: 12rem;
        .fd-list-item-title{
          font-family: 'Ubuntu-M';
          font-size: 2.4rem;
          line-height: 2.8rem;
          text-align: center;
          letter-spacing: 0.75px;
          color: #4A4A4A;
        }
        div:nth-of-type(2){
          position: relative;
          p {position: absolute;}
        }
      }

      #fd-1 div:nth-of-type(2){
        margin-top: 2.4rem;
        p {
          width: 25.5rem;
          right: 0;
          top: 0.8rem;
        }
        img{ width: 106rem; }
      }
      #fd-2>div.fd-list-item-title {margin-bottom: 2.3rem;}
      #fd-2 div:nth-of-type(2){
        margin-top: 2.4rem;
        img { width: 106.2rem}
        p {
          width: 25.8rem;
          right: -1.1rem;
          top:16.8rem;
          span{
            display: block;
            font-family: 'Open Sans-SBI';
            font-size: 21px;
            line-height: 25px;
            letter-spacing: 0.466667px;
            color: #EF9C00;
          }
        }
      }
      #fd-3 div:nth-of-type(2){
        margin-top: 2.1rem;
        img {width: 106rem;}
        p {
          width: 59.6rem;
          top: 0;
          left: 28.3rem;
        }
      }
      #fd-4 div:nth-of-type(2){
        margin-top: 2.3rem;
        img { width: 107.4rem;}
        p {
          width: 25.5rem;
          top: 17.1rem;
          right: 1.5rem;
        }
      }
      #fd-5>div.fd-list-item-title {margin-bottom: 2.3rem;}
      #fd-5 div:nth-of-type(2){
        margin-top: 2.4rem;
        img {width: 105.9rem;}
      }
      #fd-6>div.fd-list-item-title {margin-bottom: 2.3rem;}
      #fd-6 div:nth-of-type(2){
        margin-top: 2.4rem;
        img {width: 106.1rem;}
      }
      #final-pro {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 12rem;
        .fp-subtitle{
          @include black-subtitle()
        }
        .fp-arrow-check{
          display: flex;
          align-items: center;
          margin-top: 2.4rem;
          margin-bottom: 1.2rem;
          img {
            width: 1.5rem;
            margin-right: 1.2rem;
          }
          label {
            font-family: 'Open Sans-I';
            font-size: 1.7rem;
            line-height: 2.8rem;
            letter-spacing: 0.04rem;
            color: #1B75AD;
          }

        }
        a {
          text-decoration: none;
        }
        .fp-btn{
          margin-top: 3.6rem;
          width: 25rem;
          height: 5rem;
          border-radius: 1.7rem;
          background-color: #BDE6F7;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: 'Ubuntu-Bold';
          font-size: 1.8rem;
          color: #1B75AD;
          
          border:none;

        }
        .fp-btn:hover{
            background-color: #1B75AD;
            color: #fff;
          }
      }
    }
  }
  #bg-splitter{
    width: 100%;
    margin-top: 23.4rem;
  }
  #how-did{
    margin-top: 6.4rem;
    font-family: 'Ubuntu-BI';
    font-size: 3.6rem;
    line-height: 4.1rem;
    text-align: center;
    letter-spacing: 0.7875px;
    color: #1B75AD;
  }
  #splitter-2{
    margin-top: 12rem;
    margin-bottom: 9.7rem;
  }
  #design-process{
    padding-top: 6.3rem;
    padding-bottom: 8.6rem;
    #design-process-title{ @include gray-title(); }
    #design-process-img{
      margin-top: 5.7rem;
      max-width: 97rem;
    }
  }
  #next-block{
  width: 28rem;
  float: right;
  margin-bottom: 20rem;
    .hr{
      height: 1px;
      background: #DEDEDE;
      margin-bottom: 2.4rem;
    }
    #next-project-title{
      font-family: 'Ubuntu-Bold';
      font-size: 2rem;
      line-height: 2.6rem;
      text-align: right;
      letter-spacing: 0.6px;
      color: #000000;
    }
    #next-project-description{
      font-family: 'Open Sans';
      font-size: 1.6rem;
      line-height: 2.1rem;
      text-align: right;
      letter-spacing: 0.5625px;
      color: #848484;
    }
    #next-btn{
      float: right;
      font-family: 'Ubuntu-Bold';
      font-size: 1.8rem;
      line-height: 2.3rem;
      letter-spacing: 0.56px;
      color: #45B6E8;
      margin-top: 1.6rem;
    }
  }
    #next-block:hover{
      cursor: pointer;
    }
}
</style>