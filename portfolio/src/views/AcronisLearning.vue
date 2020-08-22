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
              <p>I collaborated with one researcher to conduct 15+ contextual interviews, six speed-dating, three rounds of usability testings to uncover the insights. I translated needs into concepts & features with one designer.   </p>
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
        <div>
          <p>Duration:  8 months 
          <p>Tools: Figma, Illustrator, iMovie </p>
          <p>Collaborators: Estelle Jiang, Chuyao Hua, Ruwen You, Gautam Yadav.  </p>
          <!-- <div class="note">To comply with my non-disclosure agreement, I have omitted and obfuscated confidential information in this case study. All information in this case study is my own and does not necessarily reflect the views of others.</div> -->
        </div>
      </div>

       
        
      <!-- <div id="nda">
        <label>To comply with my <span class="blue-text">non-disclosure agreement</span>, The complete case study would only be shared with potential recruiters. </label>
        <label>Contact me for it if you are intereseted!</label>
      </div> -->
      <div id="overview">
        <div id="overview-title">Overview</div>
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
            <img class="fdi-gif" style="position: relative; width: 96rem; border: none" :src='require("@/assets/img/al_design_sys.png")'/>
            <p>I consolidated and built the design system for both sides iteratively. Check the complete design system <a target="_blank" rel="noopener" href="https://www.figma.com/proto/xdUmhLMyCxzxtXiGV0QTKV/System?node-id=1%3A4&viewport=758%2C306%2C0.19736886024475098&scaling=min-zoom">here</a>  </p>
        </div>

        


      </div>
      <div id="concept-video">
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
    <div id="more">
       <img :src='require("@/assets/img/al_more.svg")' >
    </div>

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
        font-size: 2rem;
        line-height: 2.8rem;
        letter-spacing: 0.04rem;
        min-width: 45rem;
        color: #A6A6A6;
      }
    }
    #intro {
      display: flex;
      #intro-text {
        flex: 1.1;
        #question{
          position: relative;
          margin-top: 3.5rem;
          margin-bottom: 3.6rem;
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
            margin-top: 2.4rem;
            margin-right: 1.2rem;
            label {
              font-size: 1.7rem;
              color: #0D44CC;
              font-family: 'Open Sans-SB';
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
    #concept-video {
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
      color: #9BB6FB;
      margin-top: 1.6rem;
    }
  }
    #next-block:hover{
      cursor: pointer;
    }
}
#gallery, #gallery-1 {
  img {
    width: 100vw;
    
  }
}
#more{
  @include in-flex-col();
  margin-top: 12rem;
  margin-bottom: 12rem;
}
    
</style>