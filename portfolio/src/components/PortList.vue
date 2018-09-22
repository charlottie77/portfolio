<template>
  <div id="port-list">
    <div class="pl-item">
      <div class="pli-img i-1" @mouseover='showCover(1)' ></div>
      <div @click="goToCase(1)"  class="pli-cover" id="pli1-cover" v-show="show1" @mouseout='hideCover(1)'>
        <label class="pli-title t-1">AI Course Platform</label>
        <label class="pli-des d-1">Create an all-in-one platform for K-12 AI education.</label>
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
  data: function(){
    return {
      show1: false
    }
  },
  methods: {
    goToCase:function(i){
      this.$router.push({path:'/' + i + '-case'});
    },
    showCover: function(i) {
      if(i == 1){
        this.show1 = true;
      }
    },
    hideCover: function(i) {
      if(i == 1){
        this.show1 = false;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#port-list {
  display:flex;
  flex-direction: column;
  left: 18.5%;
  position: relative;
  margin-top: 100px;
}
.pli-img {
  width: 400px;
  height: 259px;
  box-shadow: 0 2px 12px 0 rgba(180,180,180,0.50);
}

#pli1-cover {
  background: transparent url("../assets/thumb1_cover.png") no-repeat;
  background-size: 100% 100%;
  width: 424px;
  height: 274px;
}
 .i-1 {
  background: transparent url("../assets/thumb_ai_course.png") no-repeat;
  background-size: 100% 100%;
 }

 .pl-item {
   display: flex;
   margin-bottom: 80px; 
   position: relative;
 }

 .pli-cover {
   position: absolute;
   left: 0px;
   display: flex;
   flex-direction: column;
 }

 .pli-title {
  font-size: 28px;
  color: #FFFFFF;
  letter-spacing: 1.12px;
  font-family: 'SF-Pro-Bold';
  margin: 150px 38px 0px 38px;
 }

 .pli-des {
  font-size: 18px;
  color: #FFFFFF;
  letter-spacing: 0.75px;
   margin: 0px 38px 0px 38px;
 }


</style>
