<template>
    <div id="app">
      <div id="header-group">
         <label>Portfolio</label>
          <label>About</label>
      </div>
    <router-view/>
    </div>

</template>

<script>
  
</script>

<style>
@import url("./assets/fonts/SanFranciscoDisplay.css");
#app {
  font-family: 'SFD-Regular';
}
#header-group {
  /* display: flex; */
  right: 10px;
  position: fixed;
  margin-top: 30px;
  margin-right: 100px;
  z-index: 1;
}

#header-group label {
  font-size: 16px;
  color: #979797;
  letter-spacing: 0.75px;
  margin: 0px 16px;
  background-color: #fff;
  border-radius: 8px;
  padding: 4px 8px;
  font-family: 'SFD-Regular';
}

body {
  margin: 0;
}

  




</style>
