<template>
  <div id="main">
    
    <div id="home"> 
      <div class="home-left">
        <div id="home-text-div">
          <label class="htd-1">Hi, I am</label>
          <label class="htd-2">Yuqing Guo</label>
          <label class="htd-3">a designer, and a programmer.</label>
        </div>
      </div>
      <div class="home-right">

      </div>
    </div>

    <PortList msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src

import PortList from '@/components/PortList.vue'

export default {
  name: 'home',
  components: {
    PortList
  }
}
</script>

<style>

  @import url("/../assets/fonts/SanFranciscoDisplay.css");

  #home {
    /* background: transparent url("../assets/home_bg.png") no-repeat;
    background-size: 100% auto; */
    width: auto;
    height: 700px;
    margin-top: 40px;
    display: flex;
  }

  .home-left,
  .home-right {
    flex: 1;
  }

  .home-left {
    background: transparent url("../assets/home_bg_left.png") no-repeat;
    /* background-size: 600px auto; */
    background-size: calc(100% - 100px) auto;
  }

  .home-right {
    background: transparent url("../assets/home_bg_right.png") no-repeat;
    /* background-size: 450px auto; */
    background-size: calc(100% - 200px) auto;
    background-position: 50% 30%;
  }


  #main {
    position: relative;
    font-family: 'SFD-Regular';
    width: 100%;
  }

  

  #home-text-div {
    display: flex;
    flex-direction: column;
    top: 150px;
    left: 200px;
    position: relative;
  }

  .htd-1 {
    font-size: 24px;
    color: #000000;
    letter-spacing: 1.5px;
  }

  .htd-2 {
    font-size: 36px;
    color: #000000;
    letter-spacing: 1.5px;
  }

  .htd-3 {
    font-size: 18px;
    color: #000000;
    letter-spacing: 1.5px;
  }
</style>
