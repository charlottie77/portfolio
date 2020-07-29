<template>
  <div id="m-fr">
    <Banner height="33.7rem" backgroundColor="#BDE6F7"/>
    <div id="title" padding>
      <div id="title-l">
        <div id="project-name">FoodRoute</div>
        <div id="project-description">A mobile app plans the food truck dining route for busy CMU students.</div>
      </div>
      <div id="title-r">
        <img :src='require("@/assets/img/m-fr-title-img.svg")' alt="">
      </div>
    </div>
    <div padding id="question">
      How might we incorporate the food truck visiting into the daily route of CMU students with tight schedules?
    </div>
    <p padding id='answer-1'>In this project, I designed a mobile app that helps with food truck route planning and re-ordering for CMU students to fit their tight daily schedules. For food truck owners, FoodRoute could increase their profit by collecting feedback and branding. </p>
    <div padding id="my-role">
      <div id="my-role-title">My Role</div>
      <p id="role-1">I <span class="bold">led our group in completing the design research and ideation phase. </span></p>
      <p id="role-2">I also finished the design phases — <span class="bold">prototype work, from sketch to high-fidelity, and user testing — on my own. </span></p>
      <p id="my-role-list">
        <ul>
          <li>Developer (Scrum Master)</li>
          <li>Learning Experience Designer</li>
          <li>UX Designer</li>
        </ul>
      </p>
    </div>
    <div padding id="overview">
      <div id="overview-title" class='title'>Overview</div>
      <p>Duration:  1.5 months </p>
      <p>Tools: Figma, Adobe Illustration. </p>
      <p>Research Collaborators: Romi Jin, Mike Jin, Brandon Huang</p>
    </div>
    <div padding id="nda">
      This project is <span class="bold">based on my course project of Interaction Design Overview course in CMU, 2019</span>. Our group (four people) conducted generative design research within the scope of food truck service on the campus of CMU. Due to a switch in our course project after the ideation phase, I finished the remaining design work on my own, including sketch, wireframes, hi-fi prototype, and user testing. 
    </div>
    <div class="row justify-center" id='splitter-1'><img :src='require("@/assets/img/fr-splitter.svg")' alt=""></div>
    <div padding id="background">
      <div id="background-title" class='title'>Background</div>
      <p id="background-p-1"><span class="bold">Food Trucks are an important part of the CMU dining experience</span>. There are several popular food trucks in and around CMU campus, such as Tartan Express, Taco Food Truck, and Indian on Wheels. </p>
      <img  :src='require("@/assets/img/m-fr-background-1.png")' alt="" class="img-center w-100" id="background-img-1">
      <p id="background-p-2">A large portion of students choose to buy foods from trucks for lunch or dinner with the expectation of low price, convenience, and more cuisine options. <span class="bold">My goal is to explore the issue and opportunities of food truck experience and develop my concepts into a valid human-centered solution.</span> </p>
    </div>
    <div padding id="final-design">
      <div id="final-design-title" class='title'>Final Design</div>
      <div id="fd-list">
        <div id="fd-1" class='fd-item'>
          <div id="fd-1-title" class='fd-item-title'><span class="fr-title-circle">1</span>Plan FoodRoute</div>
          <div id="fd-1-content-1" class="fd-item-content">
            <div id="fd-1-content-1-title">Quick Campus POI</div>
            <p>Users can plan FoodRoute by entering a starting point and destination via quick campus POI.</p>
          </div>
          <div id="fd-1-content-2" class="fd-item-content">
            <div id="fd-1-content-2-title">Plan vs. Food ASAP</div>
            <p>Using the segmented controls, users can switch between two modes for different scenarios, including planning ahead and Food ASAP. </p>
          </div>
          <img :src='require("@/assets/img/m-fr-fd-img1.svg")' alt="" class="fd-content-img w-100">
        </div>
        <div id="fd-2" class='fd-item'>
          <div id="fd-2-title" class='fd-item-title'><span class="fr-title-circle">2</span>Browse Food Truck & Menu</div>
          <p>Users can browse food trucks based on the various factors of interest, such as special cuisine options, time estimates, featured foods. These factors also connect with food truck owners’ values because they want to be special and meet students' needs. </p>
          <img :src='require("@/assets/img/m-fr-fd-img2.svg")' alt="" class="fd-content-img w-100">
        </div>
        <div id="fd-3" class='fd-item'>
          <div id="fd-3-title" class='fd-item-title'><span class="fr-title-circle">3</span>Follow FoodRoute</div>
          <p>After planning, users can follow the food route through several steps, such as departing, going to the food truck, picking up, and completing. The transition will automatically be trigged to make the dining experience smoother. </p>
          <img :src='require("@/assets/img/m-fr-fd-img3.svg")' alt="" class="fd-content-img w-100">
        </div>
        <div id="fd-4" class='fd-item'>
          <div id="fd-4-title" class='fd-item-title'><span class="fr-title-circle">4</span>Quick Feedback</div>
          <p>FoodRoute encourages users to provide feedback by making it simple (only three questions) and offering coupons to motivate users.  </p>
          <p>In this way, users become the value creators by providing data valuable for both CMU students and food truck owners. </p>
          <img :src='require("@/assets/img/m-fr-fd-img4.svg")' alt="" class="fd-content-img w-100">
        </div>
      </div>
    </div>
    <img :src='require("@/assets/img/m-fr-img-splitter.png")' alt="" id="img-splitter" style="width:60.8rem; overflow-x: hidden">
    <div class="row justify-center" id='how-did-I-get-there'>How did I get there?</div>
    <div class="row justify-center" id='splitter-2'><img :src='require("@/assets/img/fr-splitter.svg")' alt=""></div>
    <div padding id="design-process" class='gray-bg'>
      <div class='title'>Design Process</div>
      <img :src='require("@/assets/img/m-fr-dp-img.svg")' alt="" class="w-100">
    </div>
    <div padding id="generative-research">
      <div class="title" id="generative-research-title">Generative Research</div>
      <div id="gr-list">
        <div class="gr-list-item" id="gr-list-item-1">
          <div class="title">Immerse in the Food Truck Experience</div>
          <p>As CMU students ourselves, we choose contextual research methods to immerse ourselves in the food truck experience, which is readily accessible to us. We conducted contextual inquiries with students buying foods from the truck and conducted intercept with both customers and potential customers, who bought lunch at other places near campus. Every team member did a contextual observation by sitting near a food truck and waiting in the line. I also conducted a semi-structured interview with the food truck owner to understand their challenges and needs. </p>
          <div class="column align-items-center">
            <div class="column-item">
              <span>9</span>
              <p>intercepts</p>
            </div>
            <div class="column-item">
              <span>8</span>
              <p>observations</p>
            </div>
            <div class="column-item">
              <span>4</span>
              <p>contextual inquiries</p>
            </div>
            <div class="column-item">
              <span>2</span>
              <p>semi-structured interviews</p>
            </div>
          </div>
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
        <div class="gr-list-item" id="gr-list-item-2">
          <div class="title">Idea Consolidation Using Affinity Diagram</div>
          <p>With all the notes from the interview and observation, we conducted an affinity diagram session to go through and <span class="bold">interpret our data</span>. The affinity diagram session's primary goal is to <span class="bold">understand our stakeholders under the whole context of the CMU campus</span>. Since the current scope is broad and vague, we roughly identified several potential directions and target users we want to focus on. Based on that, we <span class="bold">wrote down insights and built personas</span> for further synthesis. </p>
        </div>
      </div>
      <div class="column align-items-center">
        <img :src='require("@/assets/img/m-fr-the-toal.svg")' alt="" class="img-center" id="the-goal">
        <img :src='require("@/assets/img/m-fr-gr-notes.svg")' alt="" class='img-center'>
        <img :src='require("@/assets/img/m-fr-gr-session.png")' alt="" class='img-center w-100'>
      </div>
      
    </div>
    <div padding id="synthesis">
      <div class="title">Synthesis</div>
      <h1>We focus on busy CMU students</h1>
      <p>Among the potential directions, we decided to focus on busy CMU students who always have tight schedules. Their main pain points are the long waiting line and slow serving of food trucks. </p>
      <p>Here are the insights of our key stakeholders, CMU students, and food truck owners. </p>
      <div id="student-insights" class='column align-items-center'>
        <div class="title">Insights from CMU Students</div>
        <div class="insights-item" id="student-insights-1">
          <img :src='require("@/assets/img/m-fr-stu-insights-1.svg")' alt="" class="img-center">
          <div class="insight-content">
            <div class="blue-title">Due to students' tight schedules, waiting in a long line at a food truck is not feasible. </div>
            <p>“ Yes, sometimes you have to wait for a pretty long time to get the food. Sometimes it takes 20 minutes to get the food. ”</p>
            <p>I will see it. If the line is too long, I will change to another place definitely. </p>
          </div>
        </div>
        <div class="insights-item" id="student-insights-2">
          <img :src='require("@/assets/img/m-fr-stu-insights-2.svg")' alt="" class="img-center">
          <div class="insight-content">
            <div class="blue-title">“I don’t have too much time and mind in deciding which food truck or place to go to.”</div>
            <p>“… lunch is not about picking something they enjoy, but a routine task I need to finish ASAP. ”</p>
          </div>
        </div>
        <div class="insights-item" id="student-insights-3">
          <img :src='require("@/assets/img/m-fr-stu-insights-3.svg")' alt="" class="img-center">
          <div class="insight-content">
            <div class="blue-title">Students valued the most that food trucks could provide special cuisine options, such as vegetarian or Indian foods. </div>
            <p>“It is the only Mediterranean food place on campus.”</p>
            <p>“I have dietary restrictions, and the food in school doesn’t have too many vegetarian options.”</p>
          </div>
        </div>
      </div>
      <div id="owner-insights" class="column align-items-center">
        <div class="title">Insights from Food Truck Owner</div>
        <div class="insights-item" id="owner-insights-1">
          <img :src='require("@/assets/img/m-fr-owner-insights-1.svg")' alt="" class="img-center">
          <div class="insight-content">
            <div class="red-title">“We try to meet their needs and schedule.”</div>
            <p>“…I understand CMU students. My kid is in college as well. They only have 20-30mins between the classes. So we try to meet their needs and schedule. ”</p>
          </div>
        </div>
        <div class="insights-item" id="owner-insights-2">
          <img :src='require("@/assets/img/m-fr-owner-insights-2.svg")' alt="" class="img-center">
          <div class="insight-content">
            <div class="red-title">The primary value of food truck owners is to be special, providing more choices to be different, and keeping customers exciting. </div>
            <p>“Now, my goal is to provide a different menu for lunch and dinner. I want to keep customers exciting.”</p>
            <p>“We decide to do it differently because there are over 21 restaurants on campus, we want to be different. ”</p>
          </div>
        </div>
        <div class="insights-item" id="owner-insights-3">
          <img :src='require("@/assets/img/m-fr-owner-insights-3.svg")' alt="" class="img-center">
          <div class="insight-content">
            <div class="red-title">There is little communication between food truck staff and customers. </div>
            <p>As to the owner and employees, their main pain point is that it is hard to get feedback from customers. With feedbacks, they could improve their service effectively. Customers are busy buying foods or waiting in the line browsing mobile phone or chatting with friends. There is barely any communication between these two sides. </p>
          </div>
        </div>
      </div>
    </div>
    <div padding id="design-challenge">
      <div class="title">Design Challenge</div>
      <div class="challenge-item">
        <div class="title">Current food truck dining experience</div>
        <p>According to the data from contextual inquiry, I also build a journey map to model CMU students' current dining experience. I call out the main pain points I want to focus here: </p>
        <img :src='require("@/assets/img/m-fr-dc-img1.svg")' alt="" class="img-center w-100">
      </div>
      <div class="challenge-item">
        <div class="title">Reframing Problem using Five Whys</div>
        <p>For all the pain points I tried to handle, I asked ‘five whys’ to dig into each of them. Then I did brainstorming and drew a series of storyboards shown to interviewees in the following speed-dating session, where I collected the feedback of CMU students to validate my ideas and extract potential needs. Finally, I decided to go deeper with the idea of planning a dining route fitting to CMU students’ tight schedules. </p>
        <p>I highlighted the basic needs of <span class="highlight-blue">CMU students (blue)</span> and the value of both students and <span class="highlight-yellow">food truck owners (yellow)</span>. During the ideation, the values guided me to brainstorm solutions that fulfill these basic needs. </p>
        <img :src='require("@/assets/img/m-fr-dc-img2.svg")' alt="" class="img-center w-100">
        <img :src='require("@/assets/img/m-fr-dc-img3.svg")' alt="" class="img-center w-100">
        <img :src='require("@/assets/img/m-fr-dc-img4.svg")' alt="" class="img-center w-100">
        <img :src='require("@/assets/img/m-fr-dc-img5.svg")' alt="" class="img-center w-100">
      </div>
    </div>
    <div padding id="prototyping">
      <div class="title">Prototyping</div>
      <div class="subtitle">Scenario in FoodRoute</div>
      <p>With the general ideal journey, I went back to specific scenarios I found in the research phase and speed dating session. There are two kinds of scenarios I want to tackle at this stage. Some users are planners who prefer to plan ahead, but some users will think about buying food at the last minute. To redefine the food truck dining experience in CMU, I mapped each scenario's step with the service FoodRoute will provide.  </p>
      <div class="scenario-list">
        <div class="prototyping-item">
          <div class="title">Scenario 01: Plan ahead</div>
          <p>Many CMU students are good planners who always arrange their schedules ahead efficiently. They claimed that they want to plan their next meal 1-2 hours beforehand. </p>
          <img :src='require("@/assets/img/m-fr-scen-img1.svg")' alt="" class="img-center w-100">
        </div>
        <div class="prototyping-item">
          <div class="title">Scenario 02: Food ASAP</div>
          <p>Some CMU students are too busy to remember buying foods until the last minutes. So another scenario is that the users need to order food as soon as possible to fit their schedule. In this case, there is not too much space for planning. </p>
          <img :src='require("@/assets/img/m-fr-scen-img2.svg")' alt="" class="img-center w-100">
        </div>
      </div>
      <div class="subtitle">Initial Sketch</div>
      <p>Based on the two scenarios above, I started my initial sketch.</p>
      <img :src='require("@/assets/img/m-fr-sketch-img1.png")' alt="" class="img-center w-100">
      <div class="subtitle">Wireframe</div>
      <p>Then, I made three rounds of wireframe prototype and conducted user tests with CMU students iteratively. I built on the FoodRoute prototype gradually by incorporating students’ feedback. Here are some key design improvements of FoodRoute I want to share: </p>
      <div class="wireframe-list">
        <div class="wireframe-item">
          <div class="title">1. Two plan modes using quick Campus POI</div>
          <p>The first design is that student can import their course schedule or other calendars (such as google calendar, iOS calendar) to plan their food route. However, during the user testing, people said their schedule was always changing, and some people used their calendar software as a “notebook”, which could be messy. Thus, a more efficient and intuitive way is to use the campus POI to plan their food route, where users can locate POI via familiar abbreviation among CMU students. Also, for the two scenarios, I added the two plan modes. </p>
          <img :src='require("@/assets/img/m-fr-wf-img1.svg")' alt="" class="img-center w-100">
        </div>
        <div class="wireframe-item">
          <div class="title">2. Choosing Food Truck, Food ASAP vs. Plan Ahead</div>
          <p>Since there are two planning modes for different scenarios, the users will value different factors as well. When they need food ASAP, time is always the prioritized factor. But when they plan ahead (usually in the class before lunch/dinner ), they will pay more attention to special cuisine, walk distance, and diet options. </p>
          <div class="wf-subitem">
            <div class="title">Food ASAP: Less information</div>
            <p>The design should keep each item simple by only providing the necessary info. Because the students need to make choices quickly and effortlessly. </p>
            <img :src='require("@/assets/img/m-fr-wf-img2.svg")' alt="" class="img-center w-100">
          </div>
          <div class="wf-subitem">
            <div class="title">Plan ahead: Emphasize on the signature</div>
            <p>In plan ahead scenario, users could pay more attention to special cuisine type, distance, etc. And the time will be valuable in the later procedure. </p>
            <img :src='require("@/assets/img/m-fr-wf-img3.svg")' alt="" class="img-center w-100">
          </div>
        </div>
        <div class="wireframe-item">
          <div class="title">3. FoodRoute & Tweak the pick time </div>
          <p>For plan ahead mode, users will review their route and tweak the pick time. In the beginning, I did not add the step of tweaking the pick time because FoodRoute should plan it for users to make the overall experience more effortless. But during the user testing, students said that they actually want more control if they are busy. In this way, setting an estimated pick time became one sub-step. </p>
          <div class="wf-subitem">
            <div class="title">FoodRoute timeline</div>
            <p>Before finally place the order, users will review their FoodRoute timeline and tweak the picking time.</p>
            <img :src='require("@/assets/img/m-fr-wf-img4.svg")' alt="" class="img-center w-100">
            <p class="note">During the user testing, users claimed that they want to make sure that they set some time for eating or they need to eat in the class, which happens frequently. In this way, the reserved meal time will adjust automatically based on other time settings. This also makes users feel more controllable and safe. </p>
          </div>
        </div>
        <div class="wireframe-item">
          <div class="title">4. Make the menu more efficient</div>
          <p>During the user testing, the first draft of the menu design may include too much information, such as the detailed description. Also, users confused about why some featured items and items in other categories are the same. They were not sure what kind of differences those two items have. </p>
          <img :src='require("@/assets/img/m-fr-wf-img5.svg")' alt="" class="img-center">
          <img :src='require("@/assets/img/m-fr-wf-img6.svg")' alt="" class="img-center w-100">
          <img :src='require("@/assets/img/m-fr-wf-img7.svg")' alt="" class="img-center w-100">
        </div>
      </div>
    </div>
    <div padding id="final-design-2">
      <div class="title">Final Design</div>
      <p>I only showed the final design of the “planning ahead” scenario here. You could check the whole worked-prototype to check more. </p>
      <div class="fd-list">
        <div class="fd-item">
          <div class="title">1. Locate FoodRoute via Quick Campus POI </div>
          <p>Quick Campus POI is more efficient and intuitive for busy CMU students to plan their food route, where users can locate POI via familiar abbreviation among CMU students, such as UC, DH, GHC, etc. </p>
          <img :src='require("@/assets/img/m-fr-ffd-img1.svg")' alt="" class="w-100 img-center">
        </div>
        <div class="fd-item">
          <div class="title">2. Set Arrival Time</div>
          <p>Setting Arrival Time is intuitive because users always have an idea of the scheduled time. Instead of worrying whether I can get lunch before some time, just through that time to FoodRoute and follow it effortlessly. </p>
          <img :src='require("@/assets/img/m-fr-ffd-img2.svg")' alt="" class="w-100 img-center">
        </div>
        <div class="fd-item">
          <div class="title">3. Browse Food Truck & Menu</div>
          <p>Users can browse food trucks based on the factors they care about, such as special cuisine options, time estimates, featured foods. Those factors also connect with food truck owners' values because they want to be special and meet students' needs. </p>
          <img :src='require("@/assets/img/m-fr-ffd-img3.svg")' alt="" class="w-100 img-center">
        </div>
        <div class="fd-item">
          <div class="title">4. Pre-Order & Set FoodRoute</div>
          <div class="yellow-title">Drag to tweak the food picking time</div>
          <p>To reduce the annoyment of setting time again, the default picking time will be 30 minutes ahead of arrival time and adapt to the user’s routine by applying AI algorithm. </p>
          <img :src='require("@/assets/img/m-fr-ffd-img4.svg")' alt="" class="w-100 img-center">
        </div>
        <div class="fd-item">
          <div class="title">5. Follow FoodRoute</div>
          <p>After planning, users can follow the foodroute through 6 steps. The transition will automatically be trigged when: (1) It is the depart time; (2) User is approaching the food truck or destination; (3) Food was picked or QR code scanned. Users can mannually go to different steps by tapping the time line or control button since the route could be flexible enough to meet their time schedules. </p>
          <img :src='require("@/assets/img/m-fr-ffd-img5.svg")' alt="" class="w-100 img-center">
        </div>
        <div class="fd-item">
          <div class="title">6. Quick Feedback</div>
          <p>After planning, users can follow the food route through 6 steps. The transition will automatically be triggered when: (1) It is the depart time; (2) User is approaching the food truck or destination; (3) Food was picked, or QR code scanned. Users can manually go to different steps by tapping the timeline or control button since the route could be flexible enough to meet their time schedules. </p>
          <img :src='require("@/assets/img/m-fr-ffd-img6.svg")' alt="" class="w-100 img-center">
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

<style lang="scss" scoped>
.w-100 {width: 100%;}
*[padding] {padding: 0 2.2rem;}
#m-fr{
  width: 100%;
}
</style>