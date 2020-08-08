<template>
  <div id="main">
    <Banner height="443px" backgroundColor="rgba(233,224,217,0.75)"/>
    <div class="container row">
      <div>
        <img src="@/assets/img/banner_illu.png" alt="" id='selfy'/>
      </div>
      <div id="home">
        <div id="home-text-div">
          <label class="htd-1">Hi, I am</label>
          <label class="htd-2">Yuqing Guo</label>
          <label class="htd-3">a technical UX designer.</label>
        </div>
        <div id='simpleview-toggle' @click='toggleSimpleView()'>
          <svg :class="{filled:!simpleView}"  width="30" height="30" viewBox="-4 -4 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M13.5285 3.98463C14.6931 4.75982 15.6098 5.89621 16.22 7.18263C16.8329 8.47183 17.1394 9.91107 16.9388 11.2753C16.7382 12.6423 16.0277 13.9315 15.0637 14.9456C14.0996 15.9598 12.8793 16.7016 11.5224 17.1906C10.1682 17.6824 8.68039 17.9213 7.27891 17.6213C5.88021 17.3212 4.56789 16.4793 3.65121 15.3429C2.73733 14.2066 2.2163 12.7729 2.05469 11.3197C1.89309 9.86384 2.08813 8.39126 2.65931 7.06594C3.23049 5.74062 4.1806 4.56533 5.38983 3.80959C6.59906 3.05385 8.06463 2.71766 9.50512 2.75656C10.9456 2.79546 12.361 3.20945 13.5285 3.98463Z"/>
          </svg>
          <label for="">{{simpleView ? 'Click to view detailed list' : 'Back to simple view '}}</label>
        </div>
        <div id="home-content">
          <PortItem
          v-for="(item,index) in projectList"
          :key='index'
          :showDetail='!simpleView'
          :simpleImgSrc='item.simpleImgSrc'
          :detailImgSrc='item.detailImgSrc'
          :projectName='item.projectName'
          :projectDiscription='item.projectDiscription'
          :subtitle='item.subtitle'
          :params='item.params'
          :tags='item.tags'
          :link='item.link'
          :styleSetting="item.styleSetting"
          />
        </div>
      </div>
    </div>

    <!-- <PortList msg=""/> -->
    <OnTopTools themeColor='#3FAB91' heightToShow='443' :navOnly='true' activeSpan='work'/>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src

import Banner from "@/components/Banner"
import PortItem from "@/components/PortItem"
import OnTopTools from '@/components/OnTopTools'
import Footer from '@/components/Footer'
import ScrollWatch from 'scrollwatch'
import {_isMobile} from '@/util.js'

export default {
  name: "home",
  components: {
    Banner,
    PortItem,
    OnTopTools,
    Footer
  },
  data:()=>({
    simpleView: true,
    projectList:[
      {
        projectName: 'Robi’s Room',
        projectDiscription: 'A game-like practice to teach the concepts of “Machine could learn”.',
        simpleImgSrc: require('@/assets/img/work_list_illu.png'),
        detailImgSrc: require('@/assets/img/wdi_mockup.png'),
        subtitle: 'How might we help kids to understand the concepts of “Machine could learn” in a motivating way? ',
        params:{
          outcome: 'A game-like practice launched to scaffold AI trial course in Shanghai. ',
          client: 'Design & Innovation College, Tonjig University; If create Edu Tech. ',
          myrole: 'Scrum Master, UX Design, Developer',
          duration: '3 months'
        },
        tags:['Game Design','Learning Experience Design'],
        link:'/robi',
        styleSetting:{
          simple:{},
          detail:{
            projectName:{},
            projectSubtitle:{},
            tag:{}
          }
        }
      },
      {
        projectName: 'Food Route',
        projectDiscription: 'A mobile app plans the food truck dining route for busy CMU students.',
        simpleImgSrc: require('@/assets/img/food-route-simple.svg'),
        detailImgSrc: require('@/assets/img/food_route_detail.png'),
        subtitle: 'How might we incorporate the food truck visiting into the daily route of CMU students with tight schedules?',
        params:{
          outcome: 'A mobile app plans the food truck dining route for busy CMU students.',
          client: 'CMU Student & Campus Food Truck; IXDO Course Project ',
          myrole: 'UX Researcher, UX/UI Designer',
          duration: '1.5 months'
        },
        tags:['Mobile App Design','UX Design'],
        link:'/food-route',
        styleSetting:{
          simple:{},
          detail:{
            projectName:{},
            projectSubtitle:{color: '#1B75AD'},
            tag:{background: '#F3FAFD', color: '#1B75AD'}
          }
        }
      }
    ]
  }),
  methods:{
    toggleSimpleView: function(){
      this.simpleView = !this.simpleView
      console.log(123,!this.simpleView)
    }
  },
  beforeCreate: function(){
    if (_isMobile()) {
      this.$router.replace('/m-index');
    }
  },
  mounted() {
    let sw = new ScrollWatch({
      onElementInView: function(data) {
        console.log(data.el, '...is now in view')
      },
      inViewClass: 'animate__fadeInUp',
      watchOnce: false
    })
  }
};
</script>

<style>

#main {
  /* position: relative; */
  font-family: "Source Sans Pro";
  width: 100%;
}
</style>

<style scoped>
.port-item{
  margin-bottom: 85px;
  /* height: 265px; */
  /* width: 693px; */
}
#selfy{
  width: 370px;
}
.container{
  margin: -250px 97px 0px;
  background-color: transparent;
}
#home {
  width: 100%;
  flex-grow: 1;
  
}

#home-text-div {
  margin-top:6.1rem;
  padding-left: 2rem;
  
}
#home-text-div>label{
  display: block;
}
.htd-1 {
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 600;
  font-size: 3.2rem;
  line-height: 3.7rem;
  letter-spacing: 0.2222rem;
  color: #000000;
}

.htd-2 {
  font-family: 'Ubuntu-Bold';
  font-style: normal;
  font-weight: bold;
  font-size: 4.4rem;
  line-height: 5.1rem;
  letter-spacing: 0.229rem;
  color: #000000;
}

.htd-3 {
  margin-top: 2.3rem;
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 300;
  font-size: 2.2rem;
  line-height: 2.5rem;
  letter-spacing: 0.229rem;
  color: #000000;
}
#simpleview-toggle{
  margin-top: 10.4rem;
  margin-bottom: 5rem;
  padding-left: 2rem;
  display: inline-flex;
  align-items: center;
}
#simpleview-toggle *:hover{
  cursor:pointer;
}
#simpleview-toggle label{
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 1.1625px;
  color: #A7A7A7;
  margin-bottom: 0.3rem;
  margin-left: 0.8rem;
}

#simpleview-toggle label:hover {
  color: #4A4A4A;
}
#simpleview-toggle label::selection{
  background: transparent;
}
@keyframes clickIndi {
  0% {
    stroke: #CDB19A;
    stroke-width: 3;
    opacity: 0.3;
  }

  50% {
    stroke: #FDCE65;
    stroke-width: 5;
    opacity: 1;
    fill:#FDCE65;
  }
  100% {
    stroke: #CDB19A;
    stroke-width: 3;
    opacity: 0.3;
  }
}
#simpleview-toggle>svg{
  opacity: 0.3;
  stroke: #CDB19A;
  stroke-width: 2;
  animation: clickIndi;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

#simpleview-toggle>svg.filled{
  fill:#CDB19A
}


</style>