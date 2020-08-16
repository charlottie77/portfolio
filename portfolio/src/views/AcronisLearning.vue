<template>
  <div id='smart-node'>
    <Banner height="32.2rem" backgroundColor="#DBE5FD"/>
    <div class='container' id='container-1'>
      <img :src='require("@/assets/img/sn_illu.svg")' alt="" id="phone-icon">
      <div id="brief-description">
        <div id="project-title">Acronis Learning</div>
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
              <label>Login & Browse Project</label>
            </div>
            <img class="fd1-cli-gif" :src='require("@/assets/img/sn_final_1.gif")'/>
          </div>
          <div class="fd1-cl-item">
            <div class="fd1-cli-title">
              <span>2</span>
              <label>Maker Toolbox</label>
            </div>
            <img class="fd1-cli-gif" :src='require("@/assets/img/sn_final_2.gif")'/>
            <p>With the toolbox, student can browse the connected hardware, add new hardware, and use grammar blocks for advanced programming.</p>
          </div>
          <div class="fd1-cl-item">
            <div class="fd1-cli-title">
              <span>3</span>
              <label>Visual Programming</label>
            </div>
            <img class="fd1-cli-gif" :src='require("@/assets/img/sn_final_3.gif")'/>
            <p>Students can do visual programming by dragging, dropping and connecting the hardware/grammer nodes in the canvas. </p>
          </div>
          <div class="fd1-cl-item">
            <div class="fd1-cli-title">
              <span>4</span>
              <label>Test & Debug</label>
            </div>
            <img class="fd1-cli-gif" :src='require("@/assets/img/sn_final_4.gif")'/>
            <p>After building a complete flow, students can click “test” to see the values flowing.</p>
          </div>

        </div>
      </div>

      <div id="background">
        <div id="background-title">Background</div>
        <div class="background-sub-title">Maker Education & Open-Sourced Hardware</div>
        <p>Building on the work of educational theorists like <a class="green-text" target="_blank" rel="noopener" href="https://en.wikipedia.org/wiki/Jean_Piaget"><span>Jean Piaget (constructivism)</span></a> and Seymour Papert (constructionism) maker-centered learning develops that awareness through interactive, open-ended, student-driven, multi-disciplinary experiences that allow for the time and space needed to develop diverse skills, knowledge, and ways of thinking. In maker-centered learning environments, students imagine, design, and create projects that align the content of learning with hands-on application.</p>
        <div class="bg-duo-pic">
          <div class="bgd-item">
            <img :src='require("@/assets/img/sn_pic_1.png")' />
            <label>from Unsplash</label>
          </div>
          <div class="bgd-item">
            <img :src='require("@/assets/img/sn_pic_2.png")' />
            <label>from Unsplash</label>
          </div>
        </div>
        <p>Open-source hardware consists of physical artifacts of technology designed and offered by the open-design movement and it is becoming increasingly popular due to some nice but low-cost technologies, such as Raspberry Pi, micro-controllers(e.g. Arduino), 3D-printers, sensors, and actuators. </p>
        <p>Thus, open-source hardware is a good resource that students can use for the technical innovation in maker education. For example, students can use Arduino Uno to build a <a target="_blank" rel="noopener" href="https://maker.pro/arduino/projects/ice-cube-detection-system-in-the-refrigerator"> <span class="green-text">ice cube detection system.  </span> </a> </p>
        <div class="bg-duo-pic">
          <div class="bgd-item">
            <img :src='require("@/assets/img/sn_pic_3.png")' />
            <label>from Unsplash</label>
          </div>
          <div class="bgd-item">
            <img :src='require("@/assets/img/sn_pic_4.png")' />
            <label>from Unsplash</label>
          </div>
        </div>
         <div class="background-sub-title" id="bgst-2" >Our Goal</div>
         <p>IfCreate aims to create better Maker Education for K-12 in China. SmartNode is designed for for the coding novice, such as primary students, middle school students, and designers, who are lack of programming knowledge. The goal of Maker Education is more about design, and innovation that align the content of learning with hands-on application.</p>
         <p>However, students always spend a lot of time on the line-by-line coding or debugging and feel frustrated by doing that. Thus, we designed and built SmartNode to provide development aids. </p>
         <p>By dragging, dropping and connecting the nodes, they can do programming for their maker project in a visual and “light on coding” way. The learning with SmartNode is clearer and more straightforward. Students can do technical innovation with lower barrier. </p>
         <div class="background-sub-title" id="bgst-3" >How visual development aids can help? </div>
         <div id="visual-aids">
            <img :src='require("@/assets/img/sn_visual_aids.png")' />
         </div>
        
      </div>

      <div id="demo" style="margin-bottom:6.4rem;">
        <div id="d-title">Final Product</div>
         <div id="demo-title">Online Demo (Chinese)</div>
         <div id="demo-link">
           <a target="_blank" rel="noopener" href="https://dognan.gitee.io/test/#/playground/1"><p>https://dognan.gitee.io/test/#/playground/1 </p></a>
         </div>
      </div>
       <div class="row" id='sn-mock-line-1' style="margin-bottom:22rem;">
        <img :src='require("@/assets/img/sn_mock_s_1.png")'>
        <img :src='require("@/assets/img/sn_mock_s_2.png")'>
        <img :src='require("@/assets/img/sn_mock_s_3.png")'>
      </div>
     
    </div>
    <OnTopTools themeColor='#41988E' heightToShow='332' :navOnly='false' activeSpan='work'/>
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
.green-text {
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
      #d-title{
        @include gray-title();
        margin-bottom: 10rem;;
      }
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
            margin-bottom: 2.4rem;
            width: 85%;
            box-shadow: 2px 2px 12px #D1D1D1;
          }
        }
      }

    }
    
    #splitter-1{
      margin-top: 13.9rem;
    }
    #background{
      p{
        margin-top: 1.2rem;
        a{
          text-decoration: none;
        }
      }
      #background-title{
        @include gray-title();
        margin-top: 13.8rem;
        margin-bottom:4.8rem;
      }
      .background-sub-title {
        @include black-subtitle();
        margin-bottom: 2.4rem;
      }
      #bgst-2{
        margin-top: 14.4rem;
      }
      #bgst-3 {
         margin-top: 14.4rem;
      }
      #visual-aids{
        display: flex;
        justify-content: center;
        img{
          width: 70%;
        }

      }
      .bg-duo-pic {
        display: flex;
        margin-top: 3.6rem;
        margin-bottom: 3.6rem;
        .bgd-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          img{
            padding: 1.2rem;
            width: 90%;
          }
          label{
            font-family: 'Charter-I';
            font-weight: 100;
            font-size: 1.4rem;;
            color: #888888;
          }
        }
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
      color: #45B6E8;
      margin-top: 1.6rem;
    }
  }
    #next-block:hover{
      cursor: pointer;
    }
}
</style>