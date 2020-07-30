<template>
  <div id="on-top-tools-container">
    <div id="fixed">
      <!-- <div id="btn-back" @click="backToMain()"><img :src='require("@/assets/img/btn-back-img.svg")' alt=""></div> -->
      <div id="btn-scrolltop" @click="scrollToTop()"><img :src='require("@/assets/img/btn-scrolltop-img.svg")' alt=""></div>
    </div>
    <div id="topbar" :class="{blur:sTop>heightToShow&&!navOnly}">
      <div id="tohome" @click="backToMain()" >
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" id='topbar-point' v-show="!navOnly">
          <path d="M15.3713 1.6825C16.9241 2.74192 18.1464 4.29498 18.96 6.05309C19.7773 7.815 20.1859 9.78196 19.9184 11.6464C19.651 13.5146 18.7036 15.2765 17.4182 16.6625C16.1329 18.0485 14.5057 19.0624 12.6965 19.7307C10.891 20.4028 8.90719 20.7293 7.03854 20.3192C5.17362 19.9091 3.42385 18.7586 2.20162 17.2055C0.9831 15.6525 0.288396 13.6931 0.0729264 11.7071C-0.142543 9.71741 0.117506 7.70488 0.879081 5.89361C1.64065 4.08234 2.90747 2.47611 4.51978 1.44327C6.13209 0.410429 8.08617 -0.0490347 10.0068 0.00412632C11.9275 0.0572874 13.8147 0.623073 15.3713 1.6825Z" :fill="themeColor"/>
        </svg>
        <span :style="{color:themeColor}" v-show="!navOnly">Yuqing</span>
      </div>
      <div id="navigator">
        <span :class="{active:activeSpan==='work'}" @click="backToMain()">Work</span><span @click="gotoUrl('/about')" :class="{active:activeSpan==='about'}">About</span><div> </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['themeColor','heightToShow','navOnly','activeSpan'],
  data: ()=>({
    sTop: document.documentElement.scrollTop
  }),
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  methods: { 
    scrollToTop() {
      window.scrollTo(0,0);
    },
    handleScroll(e){
      this.sTop = document.documentElement.scrollTop
    },
    backToMain() {
      this.$router.push('/')
    },
    gotoUrl(url) {
      this.$router.push(url)
    }
  }
}
</script>

<style lang="scss" scoped>
  #fixed{
    position: fixed;
    width: 100%;
    z-index: 3;
    #btn-back,#btn-scrolltop{
      position: fixed;
      width: 4.4rem;
      height: 4.4rem;
      border-radius: 2.2rem;
      background: #ffffff;
      display: flex;
      justify-content: center;
      box-shadow: 0px 4px 12px rgba(170, 170, 170, 0.25);
    }
    #btn-back{
      top: 12.6rem;
      left: 16.5rem;
    }
    #btn-scrolltop{
      right: 3.6rem;
      bottom: 3.6rem;
    }
    #btn-back:hover,#btn-scrolltop:hover{
      cursor: pointer;
    }
    
  }
  #on-top-tools-container{
    position: fixed;
    // height: 100vh;
    width: 100%;
    top: 0;
  }
  #topbar>div {display: inline-block;}
  #topbar{
    &.blur {
      backdrop-filter: blur(0.3rem);
      background: rgba(255,255,255,0.3);
    }
    padding: 1.6rem 3.9rem;
    display: flex;
    // display: none;
    position: relative;
    
    z-index: 10;
    justify-content: space-between;
    #tohome{
      display: flex;
      align-items: center;
      span {
        margin-left: 0.8rem;
        font-family: 'Ubuntu-Bold';
        font-size: 1.8rem;
        line-height: 2.1rem;
        letter-spacing: 0.55px;
        color: #3FAB91;
      }
    }
    #tohome:hover{
      cursor: pointer;
    }
    #navigator{
      margin: 0 -12px;
      span{
        &:hover {cursor: pointer;}
        font-family: 'Ubuntu-Light';
        font-size: 1.6rem;
        line-height: 1.8rem;
        letter-spacing: 1px;
        color: #000000;
        margin: 0 12px;
      }
      span.active{
        font-family: 'Ubuntu-Bold'
      }
    }
  }

</style>