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
              <p>I collaborated with one researcher to conduct 15+ contextual interviews, six speed-dating, three rounds of usability testings to uncover the insights. I translated needs into concepts & features with one designer.  </p>
            </div>
            <div class="mrs-item">
              <label>INSIGHTS & IDEATION</label>
              <p>I collaborated with one researcher to conduct 15+ contextual interviews, six speed-dating, three rounds of usability testings to uncover the insights. I translated needs into concepts & features with one designer.  </p>
            </div>
          </div>
          <div class="mrs-row">
            <div class="mrs-item">
              <label>INSIGHTS & IDEATION</label>
              <p>I collaborated with one researcher to conduct 15+ contextual interviews, six speed-dating, three rounds of usability testings to uncover the insights. I translated needs into concepts & features with one designer.  </p>
            </div>
            <div class="mrs-item">
              <label>INSIGHTS & IDEATION</label>
              <p>I collaborated with one researcher to conduct 15+ contextual interviews, six speed-dating, three rounds of usability testings to uncover the insights. I translated needs into concepts & features with one designer.  </p>
            </div>
          </div>
        </div>

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
        .mrs-row{
          display: flex;
          .mrs-item {
            flex:1;
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