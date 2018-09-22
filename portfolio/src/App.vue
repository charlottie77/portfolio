<template>
    <div id="app">
      <div id="header-group">
         <label @click="goToMain()">Portfolio</label>
         <label @click="goToAbout()">About</label>
      </div>
    <router-view/>
    </div>

</template>

<script>
export default {
  name: 'App',
  props: {
  },
  methods: {
    goToMain:function(){
      this.$router.push({path:'/'});
    },
    goToAbout: function() {
      this.$router.push({path:'/about'});
    }
  }
}
  
</script>

<style>
@import url("./assets/fonts/SF-Pro.css");
#app {
  font-family: 'SF-Pro-Regular';
}
#header-group {
  /* display: flex; */
  right: 10px;
  position: fixed;
  margin-top: 30px;
  margin-right: 80px;
  z-index: 1;
}

#header-group label {
  font-size: 16px;
  color: #979797;
  letter-spacing: 2px;
  margin: 0px 16px;
  /* background-color: #fff;
  border-radius: 8px; */
  padding: 4px 8px;
  font-family: 'SF-Pro-Regular';
  /* box-shadow: 0px 2px 6px rgba(124, 124, 124, 0.5); */
}

body {
  margin: 0;
}

</style>
