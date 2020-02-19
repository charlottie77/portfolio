<template>
  <div id="main">
    
    <div id="construction">
        <img src="../assets/blob-shape.png">
      <p class="con-p-1">Hi there, </p>
      <p class="con-p-2">This website is under construction. Coming soon…</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'construction',
  components: {
    
  }
}
</script>

<style>

  @import url("../assets/fonts/ubuntu_font.css");
  @import url("../assets/fonts/SF-Pro.css");
    #main {
        width: 60%;
    }
    #construction {
        position: relative;
        margin-top: 200px;
    }
  .con-p-1 {
      font-family: 'Ubuntu-M';
      font-size: 36px;
      letter-spacing: 2px;
  }

  .con-p-2 {
      font-family: 'Ubuntu-Light';
      font-size: 24px;
      letter-spacing: 2px;

  }

  #construction img {
      width: 222px;
      height: 222px;
      z-index: -1;
      position:absolute;
        top: -70px;
        left: -140px;
  }
</style>
