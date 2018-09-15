<template>
  <div id="port-list">
    <div class="pl-item">
      <div class="pli-img i-1" ></div>
      <div class="pli-text">
        <label class="pli-title t-1">AI Course Platform</label>
        <label class="pli-des d-1">Create an all-in-one platform for K-12 AI education.</label>
        <button @click="goToCase(1)" class="pli-btn b-1">Read More</button>
      </div>    
    </div>
    <!-- <div class="pl-item">
      <div class="pli-img i-1"></div>
      <div class="pli-text">
        <label class="pli-title t-1">AI Course Platform</label>
        <label class="pli-des d-1">Create an all-in-one platform for K-12 AI education.</label>
        <button class="pli-btn b-1">Read More</button>
      </div>    
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'PortList',
  props: {
  },
  methods: {
    goToCase:function(i){
      this.$router.push({path:'/' + i + '-case'});
    }
  }

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#port-list {
  display:flex;
  flex-direction: column;
  left: 200px;
  position: relative;
  margin-top: 140px;
}
.pli-img {
  width: 400px;
  height: 232px;
}
 .i-1 {
  background: transparent url("../assets/portList_img_1.png") no-repeat;
  background-size: 100% 100%;
 }

 .pl-item {
   display: flex;
   margin-bottom: 80px;
 }

.pli-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 40px;
}

.pli-title {
  font-size: 28px;
  color: #000000;
  letter-spacing: 1.5px;
  font-family: 'SFD-Regular';
  margin-bottom: 8px;

}

.pli-des {
  font-size: 16px;
  color: #000000;
  letter-spacing: 1.5px;
  margin-bottom: 8px;
}

.pli-btn {
  font-size: 16px;
  color: #000000;
  letter-spacing: 1.5px;
  height: 35px;
  width: 153px;
  border-radius: 0px 17.5px 17.5px 17.5px;
  border: none;
  background-color: aliceblue;
}
</style>
