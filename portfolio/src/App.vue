<template>
    <div id="app">
    <!-- <Nav v-if="!isMobile && $route.path==='/'"/> -->
    <router-view/>
    </div>

</template>

<script>
import Nav from './components/Nav'
import {_isMobile} from '@/util.js'


export default {
  name: 'App',
  components:{
    Nav
  },
  computed: {
    isMobile: function(){
      return _isMobile()
    }
  },
  props: {
  },
  data: function(){
    return {
      sw:undefined
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
}
  
</script>

<style>
html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}
@import url("./assets/fonts/ubuntu_font.css");
@import url("./assets/fonts/SSP.css");
@import url("./assets/fonts/OpenSans.css");
@import url("./assets/fonts/charter.css");
@import url("./css/MyGrid.css");

/* #app {
  font-family: 'SF-Pro-Regular';
  width: 100%;
  max-width: 1920px;
} */
#app {
  /* font-family: 'SF-Pro-Regular'; */
  width: 100%;
  /* max-width: 1920px; */
  display: flex;
  flex-direction: column;
  align-items: center;
}


.label-active {
  color: #404040;
}
.label-unactive {
  color: #979797;
}

body {
  margin: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  flex-shrink: 0;
  /* min-width: 128rem; */
}
@media screen and (min-width: 600px)
{
  body {
    min-width: 1280px;
  }
}

</style>
