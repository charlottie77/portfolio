<template>
    <div id="app">
    <Nav/>
    <router-view/>
    </div>

</template>

<script>
import Nav from './components/Nav'

export default {
  name: 'App',
  components:{
    Nav
  },
  props: {
  },
  data: function(){
    return {
    }  
  }
}
  
</script>

<style>
@import url("./assets/fonts/SF-Pro.css");
@import url("./css/MyGrid.css");
/* #app {
  font-family: 'SF-Pro-Regular';
  width: 100%;
  max-width: 1920px;
} */
#app {
  font-family: 'SF-Pro-Regular';
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
  min-width: 1280px;
  display: flex;
  justify-content: center;
  width: 100%;
  flex-shrink: 0;
}

</style>
