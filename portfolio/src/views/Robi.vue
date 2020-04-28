<template>
  <div id="Robi">
    <Banner height="322px" backgroundColor="rgba(168, 216, 185, 0.683047)"/>
    <div class="container">
      <div class="row">
        <div>
          <div id='project-title'>Robi’s Room</div>
          <div id='project-description'>A game-like activity to teach the concepts of “Machine can learn”.</div>
        </div>
        <div><img :src='require("@/assets/img/robi-title.svg")' alt=""></div>
      </div>
      <div class="row" style="margin-top:65px">
        <div style="padding:11px 0 0 33px; position:relative">
          <img :src='require("@/assets/img/blob-shape (2).svg")' style="position:absolute; left:0; top:0;" alt="">
          <div id='robi-q1'>How might we help <span class="highlight">kids</span> to <span class="highlight">understand the concepts</span> of “Machine can learn” in a <span class="highlight">motivating</span> way? </div>
          <div id='robi-p1'>In this project, we designed a <span class="bold">gamification learning activity</span> as a part of trial extra-curriculum course for <span class="bold"><span style="display:inline-block">K-12</span> Artificial Intelligence learning</span> in Shanghai, China. </div>
        </div>
        <div style="margin-left:45px"><img :src='require("@/assets/img/Robi-question.svg")' alt=""></div>
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
  data: ()=>({

  }),
}
</script>
<style>

#Robi{
  width: 100%;
}
</style>
<style scoped>
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
.container{
  margin: -200px 16% 0;
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