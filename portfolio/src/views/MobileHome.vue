<template>
  <div id="m-main">
    <a href="https://drive.google.com/file/d/189Dg3HKdWIiyQdvahWGtUuL_v_hkkDTZ/view?usp=sharing"><span id="resume">Resume</span></a>
    <Banner height="33.7rem" backgroundColor="rgba(233,224,217,1)"/>
    <div padding id="banner-content">
      <img :src='require("@/assets/img/bread-icon.svg")' alt="">
    </div>
    <div padding id='title'>
      <div id='title-hi'>Hi, I am</div>
      <div id='title-name'>Yuqing Guo</div>
      <div class="discription" style="margin-top:1.7rem">a technical designer, with passion for</div>
      <div class="discription"><span class="bold">UX Design, Illustration, and Coding</span></div>
    </div>
    <div padding id='now-position'>
      Right now, I am a master student and UX Designer at <span class="at-text">@HCII, Carnegie Mellon University. </span>
    </div>
    <div padding style="margin-top:1.8rem"><a href="mailto:yuqingg@andrew.cmu.edu" id="email-link" style="">yuqingg@andrew.cmu.edu</a></div>
    <div padding id='project-list-title'><img :src='require("@/assets/img/arrow-down.svg")' alt=""> Learn more about my projects</div>
    <div padding id='project-list'>
      <MobilePortItem
        v-for="(item,index) in projectList"
        :key='index'
        :projectImgSrc='item.projectImgSrc'
        :projectName='item.projectName'
        :projectDiscription='item.projectDiscription'
        :link='item.link'
        />
    </div>
    <div padding class="row" id='social-network'>
      <img :src="require('@/assets/img/linkedin.svg')" alt="">
      <img :src="require('@/assets/img/dribbble.svg')" alt="">
      <img :src="require('@/assets/img/github.svg')" alt="">
    </div>
    <div padding id="copyright" style="width:25.1rem">This site was designed and developed from scratch by Yuqing. </div>
  </div>
</template>

<script>
import {_isMobile} from '@/util.js'
import Banner from "@/components/Banner"
import MobilePortItem from "@/components/MobilePortItem"

export default {
  components: {
    Banner,
    MobilePortItem
  },
  beforeCreate: function(){
    if(!_isMobile()) {
      this.$router.replace('/m-robi');
    }
  },
  data:()=>({
    projectList:[
      {
        projectName: 'Robi’s Room',
        projectDiscription: 'A game-like practice to teach the concepts of “Machine could learn”.',
        projectImgSrc: require('@/assets/img/robi-project-icon.svg'),
        link:'/robi'
      },
      // {
      //   projectName: 'Acronis Learning',
      //   projectDiscription: 'Improving the efficiency & learner engagement in Acronis software training.',
      //   projectImgSrc: require('@/assets/img/al-list-logo.png'),
      //   link:'/acronis-learning'
      // },
      {
        projectName: 'Food Route',
        projectDiscription: 'A mobile app plans the food truck dining route for busy CMU students.',
        projectImgSrc: require('@/assets/img/food-route-simple.svg'),
        link:'/m-food-route'
      },
      // {
      //   projectName: 'Smart Node',
      //   projectDiscription: 'Providing visual development aids for better design & innovation in Maker Education.',
      //   projectImgSrc: require('@/assets/img/sn_illu.svg'),
      //   link:'/smart-node'
      // }
    ]
  })
}
</script>

<style>
*[padding] {
  padding: 0 2.3rem;
}
</style>

<style scoped>
#copyright{
  width: 25.1rem;
  margin-top: 1.3rem;
  margin-bottom: 13.5rem;
  font-family: 'Source Sans Pro-L';
  font-size: 1.4rem;
  line-height: 1.6rem;
  font-style: italic;
  letter-spacing: 0.4375px;
  color: #848484;
}
#social-network{
  margin: 16.6rem 0 0 -1.45rem;
}
#social-network img{
  width: 2.8rem;
  margin: auto 1.45rem;
}
#project-list-title{
  margin-top: 8rem;
  font-family: 'Ubuntu-Bold';
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: #000000;
}
a,a:link,a:visited,a:hover,a:active{
  text-decoration: none;
  color:inherit;
}
#email-link{
  position: relative;
  font-family: 'Ubuntu-Light';
  font-size: 1.4rem;
  line-height: 1.6rem;
  letter-spacing: 1.12892px;
  color: #666666;
}
#email-link::after{
  content:'';
  width: 100%;
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  height: 1px;
  background: #B7B7B7;
}
.at-text{
  color: #AD0202;
}
#now-position{
  margin-top: 2.1rem;
  font-family: 'Ubuntu';
  font-size: 1.4rem;
  line-height: 1.6rem;
  letter-spacing: 1.12892px;
  color: #000000;
}
#title{
  margin-top: 1.8rem;
}
#title .discription{
font-family: 'Ubuntu';
font-size: 1.4rem;
line-height: 1.6rem;
letter-spacing: 1.12892px;
color: #000000;
}
#title .bold{
  font-family: 'Ubuntu-Bold';
}
#title-hi{
  font-family: 'Ubuntu-Bold';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 25px;
  letter-spacing: 1.52778px;
  color: #000000; 
}
#title-name{
  font-family: 'Ubuntu-Bold';
  font-size: 3.4rem;
  line-height: 3.9rem;
  letter-spacing: 0.6375px;
  color: #000000;
}

#resume{
  position: absolute;
  top: 6.1rem;
  right: 2.3rem;
  font-family: 'Source Sans Pro';
  font-size: 1.7rem;
  line-height: 2.1rem;
  text-align: center;
  letter-spacing: 0.137083rem;
  color: #000000;
}
#resume::after{
  content:'';
  width: 100%;
  position: absolute;
  bottom: -0.3rem;
  left: 0;
  height: 2px;
  background: #000000;
}
#m-main{
  width: 100%;
}
#banner-content{
  margin-top: -16.9rem;
}
</style>