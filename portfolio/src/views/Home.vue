<template>
  <div id="main">
    
    <div id="home">
      <div id="home-text-div">
          <label class="htd-1">Hi, I am</label>
          <label class="htd-2">Yuqing Guo</label>
          <label class="htd-3">a designer, and a programmer.</label>
        </div>
    </div>

    <PortList msg=""/>
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
    background: transparent url("../assets/main_bg.png") no-repeat;
    background-size: 100% auto;
    width: 100%;
    height: 480px;
    display: flex;
  }

  #main {
    position: relative;
    font-family: 'SF-Pro-Regular';
    width: 100%;
  }

  

  #home-text-div {
    display: flex;
    flex-direction: column;
    top: 250px;
    left: 18.5%;
    position: relative;
  }

  .htd-1 {
    font-size: 24px;
    color: #000000;
    letter-spacing: 2.5px;
  }

  .htd-2 {
    font-size: 36px;
    color: #000000;
    letter-spacing: 2.5px;
    font-family: 'SF-Pro-Semibold';
    margin-top: 0px;
  }

  .htd-3 {
    font-size: 18px;
    color: #000000;
    letter-spacing: 2.5px;
    margin-top: 24px;
  }
</style>
