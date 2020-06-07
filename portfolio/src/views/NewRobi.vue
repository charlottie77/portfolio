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
      <div class="row" style="margin-top:2.9rem; margin-left:-2rem">
        <div style="padding:1.3rem 0 0 2rem; position:relative">
          <img :src='require("@/assets/img/blob-shape (2).svg")' style="position:absolute; left:0; top:0;" alt="">
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
  font-size: 22px;
  line-height: 30px;
  letter-spacing: 0.488889px;
  color: #000000;
}
#Robi{
  width: 100%;
}
h1{
  font-family: 'Ubuntu-Bold';
  font-size: 40px;
  line-height: 46px;
  text-align: center;
  letter-spacing: 0.875px;
  color: #C0C0C0;
}
h2{
  font-family: 'Ubuntu-Bold';
  font-style: italic;
  font-size: 40px;
  line-height: 46px;
  text-align: center;
  letter-spacing: 0.875px;
  color: #51BAA1;
}
h3{
  margin: 16px 0;
  font-family: 'Ubuntu-Bold';
  font-size: 22px;
  line-height: 25px;
  letter-spacing: 0.6875px;
  color: #838383;
}
h4{
  font-family: 'Ubuntu-Bold';
  font-size: 36px;
  line-height: 41px;
  letter-spacing: 1.125px;
  color: #4A4A4A; 
  margin: 0;
}
.gray-bg{
  background: #FAFAFA;
}
</style>

<style scoped>
#my-role{
  margin-top: 5.5rem;
}
#my-role-title{
  display: block !important;
  font-family: 'Ubuntu-Bold';
  font-size: 2rem;
  line-height: 2.3rem;
  letter-spacing: 0.0625rem;
  color: #50C7AA;
}
#my-role>p{
  display: inline-block;
}
#my-role-left{
  width: 37.9rem;
}
#my-role-right ul{
  margin: 0;
  list-style: none;
  padding-left: 5.7rem;
}
#my-role-right li::before{
  content: "\2022";
  color: #D8D8D8;
  font-size: 1.85rem;
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
.insights>div{
  position: relative;
  padding-left: 26px;
  padding-right: 84px;
  margin-bottom: 76px;
}
.insights .title{
  font-family: 'Source Sans Pro-M';
  font-size: 25px;
  line-height: 29px;
  letter-spacing: 1.47222px;
  color: #008757;
}
.insights>div>img{
  position: absolute;
  top: -11px;
  left: 0;
}
#insights{
  font-family: 'Ubuntu-Bold';
  font-size: 22px;
  line-height: 25px;
  letter-spacing: 0.6875px;
  color: #4A4A4A;
  margin-top: 32px;
  margin-bottom: 37px;
}
#research-1, #research-2, #research-3{
  padding-top: 60px;
  padding-left: 42px;
  padding-bottom: 97px;
}
#research-1 p,#research-1 .content, #research-2 p, #research-3 p, .container p{
  font-family: 'Source Sans Pro';
  font-size: 1.8rem;
  line-height: 2.4rem;
  letter-spacing: 0.039375rem;
  color: #000000;
  margin: 0.9rem 0;
}
.research-title{
  margin-left: -42px;
}
.research-title>span{
  margin-right: 7px;
  font-family: 'Ubuntu-Bold';
  font-size: 59px;
  line-height: 68px;
  letter-spacing: 1.22917px;
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
  margin: 18px 0 18px 12px;
  font-family: 'Source Sans Pro';
  font-size: 22px;
  line-height: 28px;
  letter-spacing: 0.75px;
  color: #4A4A4A;
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
  font-family: 'Ubuntu-Bold';
  font-size: 27px;
  line-height: 31px;
  text-align: center;
  letter-spacing: 0.84375px;
  color: #4A4A4A;
}
#design-process{
  padding-top: 44px;
  padding-bottom: 39px;
}
#launch-result>.col-8{
  align-items: center;
}
#launch-result>.col-8>div:nth-of-type(1){
  font-family: 'Source Sans Pro-B';
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  letter-spacing: 1.06px;
  width: 156px;
  height: 103px;
  background: #ECF5F3;
  border-radius: 8px;
  margin-bottom: 9px;
}
#launch-result>.col-8>div:nth-of-type(2){
  font-family: 'Source Sans Pro';
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.942222px;
  color: #4A4A4A;;
}
#photo-credit{
  margin-top: 16px;
  justify-content: center;
  font-family: Charter;
  font-style: italic;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.5625px;
  color: #979797;
}
#final-launch-images{
  margin-top: 38px;
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
  margin-top: 43px;
  width: 826px;
  font-family: 'Source Sans Pro';
  font-size: 22px;
  line-height: 30px;
  letter-spacing: 0.488889px;
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
.solution-row{
  margin-top: 108px;
  margin-bottom: 108px;
  margin-left: -30px;
}
.robi-solution{
  flex-grow: 1;
  min-width: 413px;
  max-width: 501px;
  width: 413px;
}
.solution-content{
  font-family: 'Source Sans Pro';
  font-size: 21px;
  line-height: 28px;
  letter-spacing: 0.466667px;
  color: #4A4A4A;
}
.solution-title{
  font-family: 'Source Sans Pro-B';
  font-size: 30px;
  line-height: 32px;
  display: flex;
  align-items: center;
  letter-spacing: 0.62069px;
  color: #000000;
  margin:31px 0 25px;
}
#final-solution-title{
  margin-bottom: 129px;
}
.row.splitter{
  margin: 86px 0;
}
#Overview>#overview-footnote{
  margin: 20px 0 271px;
  font-family: Charter;
  font-style: italic;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.4375px;
  color: #979797;
}
#Overview>#overview-content{
  margin-top: 19px;
  font-family: 'Source Sans Pro';
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.4px;
  color: #636363;
}
#Overview>div.info{
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.4px;
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
  font-size: 1.8rem;
  line-height: 2.4rem;
  letter-spacing: 0.039375rem;
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
  max-width: 86rem;
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
  font-size: 3.6rem;
  line-height: 4.1rem;
  letter-spacing: 0.1125rem;
  color: #262626;
}
</style>