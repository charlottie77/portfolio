<template>
  <div id="m-main">
   
    <Banner height="33.7rem" backgroundColor="rgba(233,224,217,1)"/>
    <div padding id="banner-content">
      <img :src='require("@/assets/img/bread-icon.svg")' alt="">
    </div>
    <div padding id='title'>
      <div id='title-hi'>Hi there, the mobile site is under construction.</div>
      <div class="discription" style="margin-top:3.6rem">You can open this website on the PC/iPad to continue your browsing.</div>
      <div class="discription" style="margin-top:1.6rem">Sorry for the inconvenience :(</div>
    </div>
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