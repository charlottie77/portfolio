<template>
  <div class="port-item"  @click='gotoProject(link)'>
    <div class="item-img">
      <img :src='projectImgSrc' alt="">
    </div>
    <div class="name">{{projectName}}</div>
    <div class="discription">{{projectDiscription}}</div>
    <div class="hr"></div>
  </div>
</template>

<script>
export default {
  name: 'MobilePortItem',
  props: ['projectImgSrc','projectName','projectDiscription','link'],
  methods:{
    gotoProject: function(url){
      this.$router.push(url)
    }
  }
}
</script>

<style scoped>
.port-item{
  margin-top: 4.2rem;
}
.name{
  margin-top: 0.5rem;
  font-family: 'Ubuntu-Bold';
  font-size: 2.2rem;
  line-height: 2.5rem;
  letter-spacing: 0.6875px;
}
.discription{
  margin-top: 0.5rem;
  font-family: 'Source Sans Pro';
  font-size: 1.4rem;
  line-height: 1.9rem;
  letter-spacing: 0.4375px;
  color: #848484;
}
.hr{
  background:  #D2D2D2;
  height: 1px;
  margin-top: 1.8rem;
}
.item-img img {
 width: 12rem;
}
</style>