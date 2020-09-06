<template>
  <div id='acronis-learning'>
    <Banner height="32.2rem" backgroundColor="#DBE5FD"/>
    <div class='container' id='container-1'>
      <img :src='require("@/assets/img/al_title_illu.png")' alt="" id="title-mock">
      <div id="brief-description">
        <div id="project-title">Acronis Learning</div>
        <div id="project-summary">A learning platform that delivers hands-on modules with customized learning paths.</div>
      </div>
      <div id="intro">
        <div id="intro-text"> 
          <div id="question"><img :src='require("@/assets/img/al_q_bullet.svg")' alt="" id="bullet"><span>How might we improve efficiency & learner engagement in Acronis software training?</span></div>
          <p>In this capstone project, I worked as a product designer for Acronis, a global technology company that delivers data protection and disaster recovery services for virtual, physical, mobile, and cloud environments. </p>
          <p>Our team's goal is to improve efficiency & learner engagement for Acronis Certified Engineer Training. The ACE training enables administrators to manage their IT infrastructures better and ultimately save costs by providing guidance on project implementation, rollout, and troubleshooting for channel partners and end-users. </p>
        </div>
        <div id="intro-pic">
          <img :src='require("@/assets/img/acronis_backup_logo.png")' alt="" />
          <img :src='require("@/assets/img/acronis_academy_logo.png")' alt="" style="margin-top: 3.4rem;"/>
        </div>

      </div>
      

      <img :src='require("@/assets/img/al-splitter.svg")' alt="" class="img-center" id="splitter-1">

      <div id="my-role">
        <div id="mr-title">My Role</div>
        <div id="mr-overview">
            <ul>
              <li>Product Designer & Manager</li>
              <li>Learning Experience Designer</li>
            </ul>
          <p>I was responsible for the product design work and mainly focused on designing the learner side experience, from concepts to visual execution. I also consolidated and built the design system. </p>
        </div>
        <div id="mr-sub4">
          <div class="mrs-row">
            <div class="mrs-item">
              <label>INSIGHTS & IDEATION</label>
              <p>I collaborated with one researcher to conduct 15+ contextual interviews, six speed-dating, tree rounds of usability testings to uncover the insights. I translated needs into concepts & features with one designer.   </p>
            </div>
            <div class="mrs-item">
              <label>SCOPE DEFINATION</label>
              <p>As a designer and also the product manager, I defined the product with one researcher and one designer. Based on the client’s requirements and priority, I negotiated features for our design phrase.    </p>
            </div>
          </div>
          <div class="mrs-row">
            <div class="mrs-item">
              <label>DESIGN EXECUTION & VALIDATION</label>
              <p>I led and executed the product design of the learner side platform solely. Meanwhile, I designed the hands-on lab part with another designer, collaboratively. I built user journeys, stakeholder maps, wireframes, and prototypes.    </p>
            </div>
            <div class="mrs-item">
              <label>CONSOLIDATION & DESIGN SYSTEM</label>
              <p> I built the information architecture of the learner side and designed the overall navigation for the whole platform, including both learner and trainer side. I consolidated and built the design system for our project iteratively.    </p>
            </div>
          </div>
        </div>
        
      </div>

       
        
      <!-- <div id="nda">
        <label>To comply with my <span class="blue-text">non-disclosure agreement</span>, The complete case study would only be shared with potential recruiters. </label>
        <label>Contact me for it if you are intereseted!</label>
      </div> -->
      <div id="overview">
        <div id="overview-title">Overview</div>

        <div style="margin-top: 1.4rem; margin-bottom: 9.4rem;display: flex; flex-direction: column; align-items: center;">
        <p style="color: #868686;">Duration:  8 months 
        <p style="color: #868686;">Tools: Figma, Illustrator, iMovie </p>
        <p style="color: #868686;">Collaborators: Estelle Jiang, Chuyao Hua, Ruwen You, Gautam Yadav  </p>
        <!-- <div class="note">To comply with my non-disclosure agreement, I have omitted and obfuscated confidential information in this case study. All information in this case study is my own and does not necessarily reflect the views of others.</div> -->
      </div>

        <div id="over-sec1">
          <div class="os-title">01 Initial Challenge</div>
          <p>How to improve their current Acronis Certified Engineer Training (I will call it ACE training) generally?</p>
          <img :src='require("@/assets/img/al_over_arrow_1.svg")' alt="" />
        </div>
        <div id="over-sec2">
          <div class="os-title">02 What is current training?</div>
          <img :src='require("@/assets/img/al_over_sec_2.svg")' alt="" />
        </div>
        <div id="over-sec3">
          <div class="os-title">03 Design Challenge</div>
          <img :src='require("@/assets/img/al_over_sec_3.svg")' alt="" />
        </div>
        <div id="over-sec4">
          <div class="os-title" >04 Final Deliverable</div>
          <img style="position: relative; width: 87.1rem" :src='require("@/assets/img/al_over_sec_4.png")' alt="" />
        </div>
        

      </div>
    </div>
    
      <div class="row" id="gallery-1">
        <img :src='require("@/assets/img/al_over_small_gallery.png")' >
      </div>
    <div class='container'>
      <div id="final-design-showcase">
        <div id="fds-learner-title">
          <div class="fdslt-1">Learner Side</div>
          <div class="fdslt-2">(My focus)</div>
        </div>
        <div class="fds-item">
          <div class="fdi-title" style="margin-top: 1.2rem;">
              <span>1</span>
              <label>Learning Path</label>
          </div>
            <img class="fdi-gif" :src='require("@/assets/img/First_Time.png")' style="position: relative; width: 96rem;"/>
            <p>When learners start the trainer, Acronis Learning will recommend a learning path for them to follow and finish the training on time. They can customized the path and ask for trainer’s permission.</p>
        </div>
        <div class="fds-item">
          <div class="fdi-title">
              <span>2</span>
              <label>Personalized Homepage</label>
          </div>
            <img class="fdi-gif" :src='require("@/assets/img/al_gif_1.gif")'/>
            <p>In the homepage, after seeing the personalized welcome, learners can keep track of their training progress via in-progress card, overall progress, and learning path. There are also additinal materials offering freedom for learners to explore more related topics.</p>
        </div>
        <div class="fds-item">
          <div class="fdi-title">
              <span>3</span>
              <label>Bite-Sized Elements</label>
          </div>
            <img class="fdi-gif" :src='require("@/assets/img/al_gif_2.gif")'/>
            <p>Each learning element is bite-sized to decrease the cognitive overload. To be more flexible and efficient, learners can also use the side drawer to switch between different modules and learning elements. </p>
        </div>
        <div class="fds-item">
          <div class="fdi-title">
              <span>4</span>
              <label>Hands-On Lab</label>
          </div>
            <div class="fdsi-sub-title">Real Work Scenario</div>
            <img class="fdi-gif" :src='require("@/assets/img/al_gif_3.gif")'/>
            <p>Learners will go to real work scenarios in each hands-on lab where they need to solve authentic problems for their virtual customers. It simulates the tasks that learners will face in day-to-day work.  </p>

            <div class="fdsi-sub-title" style="margin-top: 8.4rem;">Step by step lab with Immediate Feedback</div>
            <img class="fdi-gif" :src='require("@/assets/img/al_gif_4.gif")'/>
            <p>The hands-on lab provides a step-by-step walkthrough of how to solve the real-work problem with immediate feedback.  </p>
            
            <div class="fdsi-sub-title" style="margin-top: 8.4rem;">Just-in-time Instruction</div>
            <img class="fdi-gif" :src='require("@/assets/img/al_gif_5.gif")'/>
            <p>Acronis Learning provides just-in-time instruction via annotation tips. Also, if learners take more than three incorrect attempts, the platform will provide video instruction to show them how to complete this step.   </p>
 
            <div class="fdsi-sub-title" style="margin-top: 8.4rem; ">Review</div>
            <img class="fdi-gif" style="position: relative; width: 96rem;" :src='require("@/assets/img/al_review.png")'/>
            <p>After finishing the task, learners will review the learning objectives and all the steps. Each step is curated by screenshots and highlighted correct actions in a magnifying lens way.  </p>
        </div>
        <div id="fds-learner-title" style="margin-top: 11rem;">
          <div class="fdslt-1">Trainer Side</div>
          <div class="fdslt-2">(Estelle & Chuyao's focus)</div>
        </div>
        <div class="fds-item">
          <div class="fdi-title" style="margin-top: 1.2rem;">
              <span>5</span>
              <label>Trainer Dashboard</label>
          </div>
            <img class="fdi-gif" style="position: relative; width: 108.8rem; border: none;" :src='require("@/assets/img/al_dashboard.png")'/>
            <p>Trainer dashboard provides the visualization of data in all different granularity, including training, module, and lab level.  </p>
        </div>
        <div id="fds-learner-title" style="margin-top: 12rem;">
          <div class="fdslt-1">Design System</div>
          <div class="fdslt-2">(My focus)</div>
        </div>
        <div class="fds-item"  style="margin-bottom: 12rem;">
            <img class="fdi-gif" style="position: relative; width: 96rem; border: none; margin-top: 9rem;" :src='require("@/assets/img/al_d_color.svg")'/>
            <img class="fdi-gif" style="position: relative; width: 96rem; border: none; margin-top: 12rem; margin-bottom: 6rem;" :src='require("@/assets/img/al_d_font.svg")'/>
            <p>I consolidated and built the design system for both sides iteratively. Check the complete design system <a target="_blank" rel="noopener" href="https://www.figma.com/proto/xdUmhLMyCxzxtXiGV0QTKV/System?node-id=1%3A4&viewport=758%2C306%2C0.19736886024475098&scaling=min-zoom">here</a>  </p>
        </div>

        


      </div>
      <div class="concept-video">
        <div>Concept Video</div>
        <label>Youtube</label>
        <iframe width="862" height="485" src="https://www.youtube.com/embed/lFdL57xFqJk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <label>Bilibili</label>
       <iframe width="862" height="485" src="//player.bilibili.com/player.html?aid=201864992&bvid=BV11h41197zU&cid=227411662&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
        <p>Contact me via Email (yuqingg@andrew.cmu.edu) if you want to check a clickable prototype.</p>
      </div>
      <div id="impact-overview">
        <div id="io-title">Impact Overview</div>
        <p>The most prioritized goal for Acronis Learning is to improve efficiency. In other words, shorten the 15 hours of learning time. In our final design, we make the 15-hour passive learning into 5-15 hours of flexible training with well-designed hands-on labs.  </p>
        <div id="io-1">
          <img :src='require("@/assets/img/al_impact_effi.svg")'/>
        </div>
        <p>We conducted task-based final usability testing to evaluate users’ overall satisfaction. We asked participants filled out surveys after each task and all four tasks. Besides, we also conducted 6 final heuristic evaluation with Acronis experts, including trainers, designers, PM, etc.  </p>
        <div id="io-2">
           <img :src='require("@/assets/img/al_impact_usability.svg")'/>
            <img :src='require("@/assets/img/al_impact_heu.svg")'/>
        </div>
      </div>


      
    </div>
    <div class="row" id="gallery">
        <img :src='require("@/assets/img/al_gallery_pic.png")' >
    </div>
    <div class="container">
       <div id="how-did">
         <label>How did I get there?</label>
       </div>
       <img :src='require("@/assets/img/al-splitter.svg")' alt="" class="img-center" id="splitter-1" style="margin-top: 8.4rem;">
       <div id="research">
         <div id="r-big-title">Research</div>
         <div id="r-kick">
           <div id="rk-title-1">
             <label class="method-title">Kick-Off</label>
             <label class="sub-title">Understand the 15-hour training</label>
           </div>
           
           <p>In the Kick-Off meeting with Acronis, we got our inital problem space: Acronis is exploring how to improve their current Acronis Certified Engineer Training (I will call it ACE training) generally. For example, how to shorten the training time, strategically develop and document a general methodology for continuous improvement of the training, etc. They want a methodology or tool to be widely applicable to all Acronis’ courses related to cybersecurity for their diverse training programs.</p>
           <div id="rk-photo">
             <img :src='require("@/assets/img/al_r_kick_photo.png")'/>
           </div>
           <p>During the meeting, to get an overview of this big problem space, we started to understand the current ACE training experience. This is the current learning experience:</p>
            <div id="rk-labels">
             <img :src='require("@/assets/img/al_r_kick_labels.svg")'/>
           </div>
         </div>
       </div>
    </div>
    <div class="row" id="r-journey">
       <img :src='require("@/assets/img/al_r_journey.svg")' >
    </div>
    <div id="r-get" class="gray-bg">
      <div id="rg-inner">
        <div id="rg-title-1">
          <label class="method-title">Stakeholder Map, Contextual Interview, Market Research, & Literature Review </label>
          <label class="sub-title">Get to know the design space in a generative way</label>
        </div>
        <p>While validating all the main pain points in the learner journey, we also started to map out the stakeholders. </p>
        <div id="rg-map" >
          <img :src='require("@/assets/img/al_r_get_map.svg")'/>
        </div>
        <p>With the rough stakeholder map above in mind, we started to conduct customer and market research to drive our planning phase. At the beginning, we recruited interviewees and designed protocols based on the groups we highlighted in the map to get more information.  </p>
        <div id="rg-numbers">
          <img :src='require("@/assets/img/al_r_get_numbers.svg")'/>
        </div>
        <p> On the other hand, we also started to do some market research and literature review.  </p>
       
      </div> 
       <div id="rg-pages">
        <img :src='require("@/assets/img/al_r_get_pages.png")'/>
      </div>
    </div>
    <div class="container">
      <div id="r-what">
        <div id="rw-title-1">
          <label class="method-title">Interpretation, Affinity Diagram, Insights, & Persona </label>
          <label class="sub-title">What do learners and trainers want?</label>
        </div>
        <p>Given a huge amount of data, we conducted interpretation session within our capstone group to do more mutual inquiries and dig deeper by generating interpretation notes. By organizing 500+ interpretation notes, we used 4 affinity diagram sessions to synthesize and digest all the data.  </p>
        <div id="rw-pics">
          <div class="rw-row">
            <div class="rw-pic-item">
              <img :src='require("@/assets/img/al_w_p1.png")'/>
              <label>Photo by Estelle</label>
            </div>
            <div class="rw-pic-item">
              <img :src='require("@/assets/img/al_w_p2.png")'/>
              <label>Interpretation Notes</label>
            </div>
          </div>
          <div class="rw-row">
            <div class="rw-pic-item">
              <img :src='require("@/assets/img/al_w_p3.png")'/>
              <label>Photo by Chuyao</label>
            </div>
            <div class="rw-pic-item">
              <img :src='require("@/assets/img/al_w_p4.png")'/>
              <label>Color Code for tracing back</label>
            </div>
          </div>    
        </div>
        <p>Among 60+ insights,  these are the key insights that most directly defined the final version of the product:</p>
      </div>
    </div>
    <div id="rw-insights">
       <img :src='require("@/assets/img/al_w_insights.svg")'/>
    </div>
    <div class="container">
      <p>Moreover, we identified two kinds on learners, the novice learner and expert learner. Then we built personas for both of them. Trainers are also important stakeholders. So we built persona for them as well. During this process, we discussed and extracted potential needs and putting them together with priority. We can see that the efficiency is always the most salient and important need. </p>
    </div>
    <div id="rw-needs">
      <img :src='require("@/assets/img/al_w_needs.png")'/>
    </div>
    <div class="container">
      <div id="r-validate">
        <div id="rv-title-1">
          <label class="method-title">Storyboard, Speed-Dating</label>
          <label class="sub-title">Validate needs before going deeper</label>
        </div>
        <p>Before we go deeper into ideation phrase, I decided to validate all those potential needs first using storyboards. So we drew 12 sets of storyboards based on the needs above and led a speed-dating session with trainers and target learners.  To keep the visual style consistent, I consolidated and redrew all the boards into the final ones. </p>
        <p>I asked simple leading question like “how do you feel about this experience?” or “do you have similar experience?” to validate the needs or even probe real needs. </p>
        <div id="rv_pics">
          <img :src='require("@/assets/img/al_v_p1.png")'/>
          <img :src='require("@/assets/img/al_v_p2.png")'/>
        </div>
        <p>Then, we organized all the feedbacks and findings we got from the speed-dating session together. With all the feedback and rating results, we grouped and reframed some needs into more solid ones.</p>
   </div>
    </div>
    <div id="rv-notes">
      <img :src='require("@/assets/img/al_v_notes.jpg")'/>
    </div>
    <div class="container" style="margin-top: 8.6rem">
      <p >Then we discussed with Acronis in the mid-semester meeting to prioritize and evaluate them by thinking about the feasiblity and the current plan of Acronis. Finally, we got the needs we decided to go with: </p>
      <div id="rv-needs">
        <img :src='require("@/assets/img/al_v_fneeds.svg")'/>
      </div>

      <div class="design-challenge">
        <div id="dc-title-1">
          <div id="dct1-1">Design Challenge</div>
          <div id="dct1-2">The balance among trainer, learner, and Acronis</div>
        </div>
        <p>With the final validated and chosen needs, we started to balance and connect them with the business goals. We found that the third business goal is a little bit far to reach, so we would mainly contribute to ‘shorten the training time’ and ‘improve training quality’. Thus, by synthesizing needs with the higher-level value, we came up with the three design challenges: </p>
      </div>
    </div>
    <div id="dc-connect">
      <img :src='require("@/assets/img/al_dc_needconnect.svg")'/>
    </div>
    <div class="container">
      <div class="design-challenge">
        <div id="dct2-1">Identify the gap</div>
        <p>For ideation phrase, I borrowed the “identifying & bridging gaps” model from <span style="font-family: 'Open Sans-I'">Julie Dirksen’s book: Design for how people learn. </span> In this model, designers ask a series of questions to identify the gap between the current learner state and the preferred state, then designers will build solutions to bridge the gap. </p>
        <div id="dc-model">
          <img :src='require("@/assets/img/al_dc_model.png")'/>
        </div>
        <p>In our project, I decided to use this model as a scaffolding tool for ideation, where all the group members brainstormed ideas to bridge the gap. With the gap and needs clearly in the front of our eyes, we can brainstorm more concrete and targeted ideas. </p>
      </div>
    </div>
    <div id="dc-gap">
      <img id="dcg-1" :src='require("@/assets/img/al_dc_gap.png")'/>
      <img id="dcg-2" :src='require("@/assets/img/al_dc_voting.jpg")'/>
    </div>
    <div class="container">
      <div class="design-challenge">
        <div id="dct3-1">Blueprint of the bridge</div>
        <p>With all the ideas, we conducted voting session both within group and with Acronis. People rated and evaluated ideas especially in two perspectives, time estimation & feasibility. Here are the final ideas we picked for bridging the gap: </p>
      </div>
    </div>
    <div id="dc-blue">
      <img :src='require("@/assets/img/al_dc_blue_cards.png")'/>
    </div>
    <div class="container">
      <div class="design-challenge">
        <div id="dct4-1">Set Success Matrix</div>
        <p>Finally, with both business goal and design goals in mind, we summarized the following success criteria to guide our design phrase:  </p>
        <div id="dc-matrix">
          <img :src='require("@/assets/img/al_dc_matrix.svg")'/>
        </div>
        <p>Overall, efficiency is still the most prioritized goal here and we will use quantitive measurement for it. Moreover, since we did not have the latest content of ACE training, so we did not add learning outcome into our success matrix. </p>
      </div>

      <div class="design">
        <div id="d-title-0">Design</div>
        <div id="d-title-1">Parallel design for the core concept</div>
        <p>We used parallel design technique at the begining to explore more possibility. Each group member, including non-design role, would draw sketched independently based on the concepts. </p>
        <div id="d-parallel">
          <img :src='require("@/assets/img/al_d_parallel.png")'/>
        </div>
        <div id="d-title-1-1">A/B Testing for two ideas</div>
        <p>With all the sketches, we consolidated them into two versions of Lo-fi prototype. To gauge the intuitiveness of these two versions, we conducted A/B testing with users: </p>
        <div id="d-title-2">Idea 01: Click-through</div>    
        <div id="d-idea-1">
          <img id="di1-1" :src='require("@/assets/img/al_d_idea1_flow.svg")'/>
          <img id="di1-2" :src='require("@/assets/img/al_d_idea1_pic.png")'/>
        </div>
        <div id="d-title-3" style="margin-top: 10rem;">Idea 02: Interactive Video </div>    
        <div id="d-idea-2">
          <img id="di2-1" :src='require("@/assets/img/al_d_idea2_flow.svg")'/>
          <img id="di2-2" :src='require("@/assets/img/al_d_idea2_pic.png")'/>
        </div>

        <div id="d-title-1-2">Consolidate into new flow: Scaffolding for Novices</div>
        <p>As a result, we found that novice learners prefer the video while expert learners prefer the click-through version.</p>
        <div id="d-prefer">
          <img :src='require("@/assets/img/al_d_prefer.svg")'/>
        </div>
        <p>Considering the efforts of generating two set of scripts and learning materials, we decided to consolidate these two versions into one flow: </p>
      </div>
    </div>
  
    <div id="d-merge-flow" style="margin-top: 4.8rem;">
        <img :src='require("@/assets/img/al_d_merge_flow.svg")'/>
    </div>
    <div class="container" style="margin-top: 4.8rem">
      <div class="design" style="margin-top: 7.8rem">
        <p>These are the added screens of watching video and just-in-time tips:</p>
        <div id="d-title-4">Watch video if stucked</div> 
        <div id="d-add-1">
          <img :src='require("@/assets/img/al_d_add1.png")'/>
        </div>
        <div id="d-title-5">Just-in-time Tips/Instruction</div> 
        <div id="d-add-2">
          <img :src='require("@/assets/img/al_d_add2.png")'/>
        </div>

        <div id="d-title-1-3">Key Iterations of Core Components</div>
        <p>Moreover, I want to share several key iterations of some core components here:</p>
        <div id="d-title-6">Feedback Card</div>
        <div id="d-iteration-1-0">
          <img :src='require("@/assets/img/al_d_feedback_v0.png")'/>
        </div>
        <p>For the initial design of feedback card, there are several feedback: 1. Too many clicks. Users need to click for both right and wrong cases.  2. The feedback card is not attracting, most users did not read it. (Stay time of cards < 1 sec)</p>
        <div id="d-iteration-1-1">
          <img :src='require("@/assets/img/al_d_feedback_v1.png")'/>
        </div>
        <label class="bold-improve" >Improvement: Deleted the click of right feedback to reduce the repetitive interaction.</label>
        <p style="margin-top: 1.2rem">Based on the feedback, we deleted the click of right feedback. Also, we added Emoji to indicate the correctness with some fun. In this way, we thought that we can attract learners but the results were the same. They still stayed in the card less than 1 second and claimed that the Emoji is not professional and not suitable for ToB product.  </p>

        <div id="d-iteration-1-2">
          <img :src='require("@/assets/img/al_d_feedback_v2.png")'/>
        </div>
        <label class="bold-improve">Improvement: Deleted the Emoji but emphasized on text. </label>
        <p style="margin-top: 1.2rem; margin-bottom: 0.8rem;">In the version 2, we added more focus on text. So we highlighted the correctness text with color cue in a professional and business way. In this time, learners started to stay in feedback card for 1-2 sec. </p>
        <p>However, learner claimes that the negative words, such as “Not quite right”, was over addressed and looked like criticizm. So it made them feel uncomfortable. Even thought we tried to reduce the use of alert color, like in V2.1. The testing result was basically the same. We put too much emphasize on text. </p>

        <div id="d-iteration-1-3">
          <img :src='require("@/assets/img/al_d_feedback_v3.png")'/>
        </div>
        <label class="bold-improve">Improvement: Top indicator to balance the visual propotion; Added highlights to reduce the cognitive overload.  </label>
        <p style="margin-top: 1.2rem">In the final version, we added a top indicator to render the overal color cue for correctness. On the other hand, we probed that learner felt the feedback is too long so they don’t want to read. Then, we hightlighted the important information to reduce their cognitive overload and help them to focuse. </p>

        <div id="d-title-7">Scenario Card</div>
        <div id="d-iteration-2-0">
          <img :src='require("@/assets/img/al_d_scenario_v0.png")'/>
        </div>
        <p>This is the first version of scenario card we designed, we used a paragraph to tell the stories, we highlighted some key information which are necessary for the learners to make decisions during the task. In the usability test, we found that people did not read the text and the highlight words. As a result, they took the actions based on their intuition instead of the requirements from the scenario. We probe the reason during the testing, and we assume that it is because people don’t want to read a whole paragrah, it is not digestable. </p>
      
        <div id="d-iteration-2-1">
          <img :src='require("@/assets/img/al_d_scenario_v1.png")'/>
        </div>
        <label class="bold-improve">Improvement: Break the paragraph into smaller chunks, in a conversational way. So every participants started to read the scenario. </label>
        <p style="margin-top: 1.2rem; margin-bottom: 0.8rem;">In our second version, we broke this paragraph block into smaller digestible chunks. Thus, we decided to use a conversational style to deliver the scenario. Also, we chose to use a real human photo here to provoke more visual sense-making of real world. </p>
        <p>In the testing, the good thing was that every participants in the testing started to read the conversation, we can tell that by the time they stayed in this page and some of the them even read aloud the words emotionally. We got a lot of positive feedback about this part, they said they like this conversation. it is elegant and immersive. However, we still had some problems: 1)  It is too distracting to focus on learning. Some of the participants told us the character doesn’t really look like the real customers they met in their work. They will think a lot about his age, job, expression and appearance.  2) The layout of overall card design is a poor use of space. </p>

        <div id="d-iteration-2-2">
          <img :src='require("@/assets/img/al_d_scenario_v2.png")'/>
        </div>
        <label class="bold-improve">Improvement: Use flat illustration for less distracting; Add pagination for more user control;</label>
        <p style="margin-top: 1.2rem">Based on feedback, we changed the photo into a flat illustration. It is more abstract, better aligned with our design system and less distracting. We added a blue indicator at the bottom to show how many chunks of conversation learner needs to go through. We make the next btn obviously to call for the action. And in the final test and evaluation, we got more positive feedback of this part. </p>

        <div id="d-title-8">Zoom out for a big picture</div>
        <p>After validating the core concept, the hands-on lab part, we went backward and zoom out to consider the bigger picture. Based on the research, we come up with the complete user flow and infomation architecture. </p>
        
        
      </div>
    </div>

    <div id="d-user-flow">
          <img :src='require("@/assets/img/al_d_user_flow.png")'/>
    </div>
        
      

    <div class="container" >
      <div class="design" style="margin-top: 12rem">
        <p>Due to the time limitation and currrent progress, we planned to only focus on the Module section of learner side platform. </p>

        <div id="d-info-arc">
          <img :src='require("@/assets/img/al_d_info_arc.png")'/>
        </div>

        <p>Based on the design and analysis above, we build our final prototype iteratively with usability testing. </p>

        <div id="d-title-9">Visual Execution</div>
        <p>After three rounds of iteration, I started to lead the process of consolidating our work into a design system. For the typography, we use Poppins pairs with Roboto, the geometric san serif combination to convey a sense of clean and technology. </p>
        <div id="d-font">
          <img :src='require("@/assets/img/al_d_font.svg")'/>
        </div>
        <p>For the color, we choose the acronis blue as our branding color to keep consistent with Acronis’s current design language. We also use semantic colors, for example, the analogous /əˈnæləɡəs/ sky blue for info, black for text, yellow for highlight, red for alert, and green for success. </p>
        <div id="d-color">
          <img :src='require("@/assets/img/al_d_color.svg")'/>
        </div>
        <p>Iteratively, I consolidated more design components to build the final design system. Even though the system is simple, but I still learned a lot when I put everything together. If you are interested, you can check the complete design system in Figma to learn more. </p>
        <div id="d-design-system-check">
          <a target="_blank" rel="noopener" href="https://www.figma.com/proto/xdUmhLMyCxzxtXiGV0QTKV/System?node-id=1%3A4&viewport=671%2C121%2C0.08914807438850403&scaling=min-zoom">
            <button>Check Design System</button>
            
          </a>
        </div>
      </div>

      <div class="concept-video" style="margin-top: 16rem">
        <div>Concept Video</div>
        <label>Youtube</label>
        <iframe width="862" height="485" src="https://www.youtube.com/embed/lFdL57xFqJk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <label>Bilibili</label>
        <iframe width="862" height="485" src="//player.bilibili.com/player.html?aid=201864992&bvid=BV11h41197zU&cid=227411662&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
        <p>Contact me via Email (yuqingg@andrew.cmu.edu) if you want to check a clickable prototype.</p>
      </div>

      <div id="impact">
        <div id="im-title">Evaluation & Impact</div>
        <p>The most prioritized goal for Acronis Learning is to improve efficiency. In other words, shorten the 15 hours of learning time. In our final design, we make the 15-hour passive learning into 5-15 hours of flexible training with well-designed hands-on labs.  </p>
        <div id="im-1">
          <img :src='require("@/assets/img/al_impact_effi.svg")'/>
        </div>
        <p>We conducted task-based final usability testing to evaluate users’ overall satisfaction. We asked participants filled out surveys after each tasks and all four tasks. </p>
        <div id="im-2">
           <img :src='require("@/assets/img/al_impact_usability.svg")'/>
        </div>
        <p>After the third rounds of iteration, we conducted 6 final heuristic evaluation with trainers, engineers, and PMs in Acronis by asking them to finish 4 cognitive walkthrough tasks and an overall evaluation survey. For each task, we also prepared evaluation survey from 7 matrics we tailored based on our project scope, including visilbility of system status, user control & freedom, flexibility, etc. </p>
        <div id="im-3">
          <img :src='require("@/assets/img/al_impact_heu.svg")'/>
        </div>
        <p>For 6 experts we interviewd, they expressed praises for our product. They all gave the highest score on efficiency of use, and visibility of system status. However, some of them expressed disagreement on the user control part. </p>
        <div id="im-4">
          <img :src='require("@/assets/img/al_im_review.svg")'/>
        </div>
      </div>


    </div>
  
   
  





    <!-- <div id="more">
       <img :src='require("@/assets/img/al_more.svg")' >
    </div> -->

    <div class="container">
      <div id="next-block" @click='route_to("/robi")'>
        <div class="hr"></div>
        <div id="next-project-title">Robi’s Room</div>
        <div id="next-project-description">A game-like activity to teach the concepts of “Machine can learn”.</div>
        <span id="next-btn">NEXT <img :src='require("@/assets/img/next-project-btn-blue.svg")' alt=""></span>
      </div>
    </div>
    <OnTopTools themeColor='#0D44CC' heightToShow='332' :navOnly='false' activeSpan='work'/>
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
  methods: {
    route_to: function(url){
      this.$router.push(url)
    }
  }
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



@mixin normal-text {
  font-family: 'Open Sans-R';
  font-size: 1.7rem;
  line-height: 2.8rem;
  letter-spacing: 0.04rem;
  color: #404040;
  margin-block-start: 0;
  margin-block-end: 0;
}

@mixin in-flex-col {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cl-flex-col {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bold{
  font-family: 'Open Sans-B';
  color: #000;
}
.bold-improve {
  font-family: 'Open Sans-B';
  color: #000;
  font-size: 1.7rem;

}
.bold-green {
  font-family: 'Open Sans-B';
  color: #41988E;
}
.green-text {
  color: #41988E;
}
.blue-text {
  color: #0D44CC;
}
.method-title {
  font-size: 1.8rem;
  font-family: 'Ubuntu';
  color: #7EA1F9;
  line-height: 2.2rem;
  margin-bottom: 0.8rem;
  letter-spacing: 0.08rem;
}
.sub-title {
  font-family: 'Ubuntu-M';
  font-size: 2.4rem;
  line-height: 2.8rem;
  text-align: center;
  letter-spacing: 0.75px;
  color: #4A4A4A;
}

.note {
  margin-top: 2.4rem;
  font-family: 'Charter';
  color: #979797;
  font-size: 1.6rem;
}

#acronis-learning{
  width: 100%;
  #Banner { position: absolute; width:100%}
  #title-mock{ 
    position: absolute; 
    width: 37.6rem;
    right:0rem; 
    top: 5rem;
    }
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
        font-size: 1.8rem;
        line-height: 2.6rem;
        letter-spacing: 0.04rem;
        min-width: 45rem;
        color: #A6A6A6;
      }
    }
    #intro {
      display: flex;
      margin-top: 5.2rem;
      #intro-text {
        flex: 1.1;
        #question{
          position: relative;
          margin-top: 3.5rem;
          margin-bottom: 1.6rem;
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
            color: #0D44CC;
          }
        }
        p{
          margin-top: 1.2rem;
        }
      }
      #intro-pic {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          width: 60%;
          
        }
      }
      
    }
    #splitter-1{
      margin-top: 13.9rem;
    }
   

    #my-role {
      margin-top: 10rem;
      #mr-title {
        @include gray-title();
      }
      #mr-overview {
        display: flex;
        flex-direction: column;
        align-items: center;
        ul{
          margin: 5.2rem 0 0;
          list-style: none;
          padding-left: 0;
          li{
            font-family: 'Open Sans-R';
            font-size: 1.7rem;
            line-height: 2.8rem;
            letter-spacing: 0.04rem;
            color: #404040;
          }
        }
        li::before{
          content: "\2022";
          color:  rgba(16, 81, 244, 0.3);
          font-size: 2.4rem;
          margin-right: 0.7rem;
        }
        p{
          margin-top: 2.4rem;
          width: 55%;
        }
      
      }
      #mr-sub4 {
        display: flex;
        flex-direction: column;
        margin-top: 2.4rem;
        .mrs-row{
          display: flex;
          .mrs-item {
            flex:1;
            margin-top: 5.4rem;
            margin-right: 7.2rem;
            label {
              font-size: 1.7rem;
              color: #0D44CC;
              font-family: 'Open Sans-B';
            }
          }
        }
      }
      
    }
    #overview {
      display:flex;
      flex-direction: column;
      align-items: center;
      margin-top: 10rem;
        #overview-title {
          @include gray-title();
          margin-bottom: 4.8rem;
        }
        .os-title {
          font-size: 2.2rem;
          font-family: 'Open Sans-B';
          color: #717171;
          text-align: center;
          margin-bottom: 2.4rem;
        }
        #over-sec1, #over-sec2, #over-sec3, #over-sec4 {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        #over-sec1 {
          // width: 50%;
          p {
            text-align: center;
            width: 60%;
            margin-bottom: 1.2rem;
          }
          img {
            margin-top: 3.6rem;
            margin-bottom: 3.6rem;
          }
        }
        #over-sec2 {
          img {
            margin-top: 3.6rem;
            margin-bottom: 3.6rem;
            position: relative;
            left: -3.7rem;
          }
        }
        #over-sec3 {
          img {
            margin-top: 5.2rem;
            margin-bottom: 3.6rem;
          }
        }
        #over-sec4 {
          img {
            margin-top: 2.4rem;
            margin-bottom: 5.2rem;
          }
        }
    }
    #gallery-1 {
      position: relative;
      left: calc( 50% - 96rem);
      img {
        width: 192rem;
      }
    }
    #final-design-showcase{
      margin-top: 10rem;
      #fds-learner-title{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 3.6rem;
        .fdslt-1 {
          @include black-subtitle();
        }
        .fdslt-2 {
          @include normal-text();
        }
      }
      .fds-item {
        @include in-flex-col();
        margin-bottom: 3.6rem;
        .fdi-gif{
          border: solid 1px #dcdcdc;
        }
        .fdsi-sub-title {
          font-size: 2rem;
          font-family: 'Open Sans-B';
          color: #346EFF;
          text-align: center;
          margin-top: 4.8rem;
          margin-bottom: 1.2rem;
        }
        .fdi-title{
          display: flex;
          margin-bottom: 2.8rem;
          margin-top: 6.4rem;
            span{
              width: 2.6rem;
              height: 2.6rem;
              background: #1051F4;
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
              color: #1051F4;
            }
            
        }
        p{
          margin-top: 1.2rem;
          width: 90%;
        }
      }
    }
    .concept-video {
      @include in-flex-col();
      div{
        @include black-subtitle();
        margin-bottom: 3.6rem;
      }
      iframe{
        margin-bottom: 3.6rem;
      }
      p {
        margin-bottom: 12rem;
      }
      label {
        @include normal-text();
      }
    }
    #impact-overview{
      #io-title{
        @include black-subtitle();
        margin: 3.6rem 0;
      }
      #io2-title {
        @include gray-title();
        margin-bottom: 2.2rem;
      }
      #io-1, #io-2{
        @include in-flex-col();
      }
      #io-1{
        margin-top: 3.6rem;
        margin-bottom: 3.6rem;
      }
      #io-2 {
        margin-bottom: 12rem;
        img{
          margin: 3.6rem 0;
        }
      }
    }
    
    #nda {
      display: flex;
      align-items: center;
      margin-top: 4.8rem;
      flex-direction: column;
      margin-bottom: 12rem;
      label {
        font-size: 2.0rem;
        font-family: 'Ubuntu';
        line-height: 3.2rem;
        width: 50%;
        text-align: center;
        margin-top: 2.4rem;
      }
      
    }
    #research{
      margin-top: 8.8rem;
      #r-big-title {
        @include gray-title();
      }
      #r-kick {
        #rk-title-1{
          margin-top: 7.2rem;
          margin-bottom: 3.6rem;
          @include in-flex-col();
        }
        #rk-photo {
           @include in-flex-col();
           margin-top: 3.6rem;
           margin-bottom: 3.6rem;
           img{
             width: 60%;
           }
        }
        #rk-labels {
           margin-top: 3.6rem;
           margin-bottom: 5.2rem;
          @include in-flex-col();
        }
      }

    }
    #r-what {
      #rw-title-1 {
        @include in-flex-col();
       margin-bottom: 3.6rem;
      }
      #rw-pics {
        @include in-flex-col();
        margin-top: 3.6rem;
        margin-bottom: 4.8rem;
        .rw-row {
          display:flex;
          .rw-pic-item {
            @include in-flex-col();
            img {
              width: 40rem;
              padding: 0.8rem;
            }
            label {
              font-family: 'Charter-I';
              color: #979797;
              font-size: 1.6rem;
              margin: 0.4rem 0 1.6rem 0;
            }
          }
        }
      }

    }
    #r-validate{
      #rv-title-1 {
        @include in-flex-col();
        margin-bottom: 2.4rem;
      }
      p{
        margin: 0.8rem 0;
      }
      #rv_pics{
        display: flex;
        margin-top: 3.6rem;
        margin-bottom: 3.6rem;
        img {
          width: 41.5rem;
          margin: 1.2rem 0.8rem;
        }
      }
    }
    #rv-needs{
      @include in-flex-col();
      img {
        margin-top: 7.4rem;
        width: 70%;
      }
    }
    .design-challenge {
      #dc-title-1 {
        margin-top: 20rem;
        margin-bottom: 3.6rem;
        #dct1-1 {
          @include gray-title();
        }
        #dct1-2{
          @include black-subtitle();
          margin-top: 8.4rem;
        }
      }
      #dct2-1, #dct3-1, #dct4-1 {
        @include black-subtitle();
        margin-bottom: 2.4rem;
      }
      #dc-model {
        @include in-flex-col();
        margin-top: 2.4rem;
        margin-bottom: 3.6rem;
        img {
          width: 80%;
        }
      }
      #dc-matrix{
        @include in-flex-col();
        margin-top: 4.4rem;
        margin-bottom: 4.4rem;
      }
    }
    .design {
      margin-top: 20rem;
      #d-title-0 {
        @include gray-title();
        margin-bottom: 0.8rem;
      }
      #d-title-1 {
        @include black-subtitle();
        margin-top: 8.4rem;
        margin-bottom: 2.4rem;
      }
      #d-parallel {
        @include in-flex-col();
        margin-top: 2.4rem;
        margin-bottom: 4.6rem;
        img{
          width: 85%;
        }
      }
      #d-title-1-1 {
        @include black-subtitle();
        margin-bottom: 0.8rem;
        margin-top: 16rem;
      }
      #d-title-1-2 {
        @include black-subtitle();
        margin-top: 16rem;
      }
      #d-title-1-3 {
        @include black-subtitle();
      }
      #d-title-2, #d-title-3 {
        font-family: 'Ubuntu-M';
        font-size: 2rem;
        line-height: 2.8rem;
        text-align: center;
        letter-spacing: 0.75px;
        color: #717171;
        margin-top: 5.2rem;
        margin-bottom: 1.2rem;
      }
      
      #d-idea-1, #d-idea-2 {
        @include in-flex-col();
        #di1-1, #di2-1 {
          margin-top: 3.6rem;
          margin-bottom: 4.8rem;
        }
        #di1-2, #di2-2{
          width: 80%;
        }
      }

      #d-idea-2 {
        margin-bottom: 5.2rem;
      }
      #d-prefer{
        @include in-flex-col();
        img {
          width: 60%;
        }
      }
      #d-title-4, #d-title-5 {
        font-family: 'Ubuntu-M';
        font-size: 2rem;
        line-height: 2.8rem;
        text-align: center;
        letter-spacing: 0.75px;
        color: #717171;
      }
      #d-add-1, #d-add-2 {
        @include in-flex-col();
        img{
          width: 80%;
        }
      }
      #d-title-1-2 {
        margin-bottom: 1.2rem;
      }
      #d-prefer{
        margin-top: 4.8rem;
        margin-bottom: 4.8rem;
      }
      #d-title-4 {
        margin-top: 3.2rem;
        margin-bottom: 1.2rem;
      }
      #d-title-5 {
        margin-top: 7.2rem;
        margin-bottom: 1.2rem;
      }
      #d-title-1-3 {
        margin-top: 8.4rem;
        margin-bottom: 1.2rem;
      }
      #d-title-6 {
        font-family: 'Ubuntu-M';
        font-size: 2rem;
        line-height: 2.8rem;
        text-align: center;
        letter-spacing: 0.75px;
        color: #717171;
        margin-top: 5.2rem;
        margin-bottom: 2.4rem;
      }
      #d-iteration-1-0 {
        @include in-flex-col();
        margin-bottom: 3.6rem;
        img{
          width: 60%;
        }
      }
      #d-iteration-1-1 {
        @include in-flex-col();
        margin-top: 9.4rem;
        margin-bottom: 3.6rem;
        img{
          width: 60%;
        }
      }
      #d-iteration-1-2 {
        @include in-flex-col();
        margin-top: 9.4rem;
        margin-bottom: 3.6rem;
        img{
          width: 95%;
        }
      }
      #d-iteration-1-3 {
        @include in-flex-col();
        margin-top: 9.4rem;
        margin-bottom: 3.6rem;
        img{
          width: 60%;
        }
      }
      #d-title-7 {
        font-family: 'Ubuntu-M';
        font-size: 2rem;
        line-height: 2.8rem;
        text-align: center;
        letter-spacing: 0.75px;
        color: #717171;
        margin-top: 10rem;
        margin-bottom: 3.6rem;
      }
      #d-iteration-2-0 {
        @include in-flex-col();
        margin-bottom: 2.4rem;
        img{
          width: 65%;
        }
      }
      #d-iteration-2-1 {
        @include in-flex-col();
        margin-top: 9.4rem;
        margin-bottom: 2.4rem;
        img{
          width: 65%;
        }
      }
      #d-iteration-2-2 {
        @include in-flex-col();
        margin-top: 9.4rem;
        margin-bottom: 2.4rem;
        img{
          width: 55%;
        }
      }
      #d-title-8 {
        @include black-subtitle();
        margin-top: 16rem;
        margin-bottom: 1.2rem;
      }

      #d-info-arc {
        @include in-flex-col();
        margin-top: 4.6rem;
        margin-bottom: 3.6rem;
        img {
          width: 100%;
        }
      }
      #d-title-9 {
        @include black-subtitle();
        margin-top: 16rem;
        margin-bottom: 1.2rem;
      }
      #d-font{
        @include in-flex-col();
        margin-top: 4.8rem;
        margin-bottom: 4.8rem;
      }
      #d-color {
        @include in-flex-col();
        margin-top: 4.8rem;
        margin-bottom: 4.8rem;
      }
      #d-design-system-check {
        @include in-flex-col();
        a {
           text-decoration-line: none;
        }
        button {
          margin-top: 3.6rem;
          width: 25rem;
          height: 5rem;
          border-radius: 1.7rem;
          background-color: #CFDCFD;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          font-family: 'Ubuntu-Bold';
          font-size: 1.8rem;
          color: #0D44CC;
          border: none;
          cursor: pointer;
        }
      }
    }
    #impact {
      margin-bottom: 7rem;
      #im-title {
        @include gray-title();
        margin-top: 12rem;
        margin-bottom: 4.8rem;
      }
      #im-1{
        @include in-flex-col();
        margin-top: 4.8rem;
        margin-bottom: 4.8rem;
        
      }
      #im-2{
        @include in-flex-col();
        margin-top: 3.4rem;
        margin-bottom: 4.8rem;
      }
      #im-3{
        @include in-flex-col();
        margin-top: 6.8rem;
        margin-bottom: 6.8rem;
      }
      #im-4{
        @include in-flex-col();
        margin-top: 5.2rem;
        margin-bottom: 10.8rem;
      }
    }
   
    
   
    
    
  }
 //out of container
 
  #next-block{
  width: 28rem;
  float: right;
  margin-top: 8rem;
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
      color: #9BB6FB;
      margin-top: 1.6rem;
    }
  }
    #next-block:hover{
      cursor: pointer;
    }
    #gallery, #gallery-1 {
      img {
        width: 100vw;
        
      }
    }
    #how-did {
      @include in-flex-col();
      label {
        font-size: 3.2rem;
        color: #1051F4;
        font-family: 'Ubuntu-BI';
      }
    }
    #r-journey{
      @include in-flex-col();
      img{
        width: 70%;
      }

    }
    #r-get {
      margin-top: 5.2rem;
      padding-top: 10rem;
      padding-bottom: 6rem;
      p{
        font-family: 'Open Sans-R';
        font-size: 1.7rem;
        line-height: 2.8rem;
        letter-spacing: 0.04rem;
        color: #404040;
        margin-block-start: 0;
        margin-block-end: 0;
      }
      #rg-inner {
        margin: 0 auto 0;
        max-width: 86.6rem;
        #rg-title-1 {
          margin-bottom: 3.6rem;
          @include  in-flex-col();
        }
        #rg-map {
          margin-top: 3.6rem;
          margin-bottom: 3.6rem;
          img{
            width: 90rem;
            position: relative;
            left: -5rem;
          }
        }
      }
      #rg-pages {
        @include in-flex-col();
        margin-top: 3.6rem;
        margin-bottom: 3.6rem;
        img {
          width: 123.7rem;

        }
      }
      #rg-numbers{
        margin-top: 8.4rem;
        margin-bottom: 8.4rem;
        @include in-flex-col();
      }
    }
    #rw-insights {
      @include in-flex-col();
      margin-top: 5.4rem;
      margin-bottom: 3.6rem;
    }
    #rw-needs {
      @include in-flex-col();
      margin-top: 12.4rem;
      margin-bottom: 3.6rem;
      img {
        width: 144rem;
      }
      
    }
    #rv-notes {
      @include in-flex-col();
      margin-top: 7.2rem;
    
      img{
        width: 100%;
      }
    }
    #dc-connect {
      @include in-flex-col();
      margin-top: 3.4rem;
      img{
        position: relative;
        left: -3.2rem;
      }
    }
    #dc-gap{
      @include in-flex-col();
      margin-top: 4.6rem;
      #dcg-1{
        width: 60%;
        position: relative;
        left: 1.8rem;
      }
      #dcg-2 {
        margin-top: 1.2rem;
        width: 30%;
        position: relative;
      }
    }
    #dc-blue {
      @include in-flex-col();
      margin-top: 2.4rem;
      img {
        width: 80%;
      }
    }
    #d-merge-flow{
      @include in-flex-col();
    }
    #d-user-flow {
      @include in-flex-col();
      margin-top: 3.6rem;
        img {
          width: 90%;
        }
        
      }
}

#more{
  @include in-flex-col();
  margin-top: 12rem;
  margin-bottom: 12rem;
}


    
</style>