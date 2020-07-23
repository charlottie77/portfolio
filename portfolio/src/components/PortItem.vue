<template>
  <div class="port-item">
    <div v-if='!showDetail' class="simple" @click='gotoProject(link)'>
      <div class="row">
        <div class="item-discription">
          <div class="name">{{projectName}}</div>
          <div class="discription">{{projectDiscription}}</div>
        </div>
        <div class="item-img">
          <img :src='simpleImgSrc' alt="">
        </div>
      </div>
      <div class="hr"></div>
    </div>
    <div v-if="showDetail" class="detail" @click='gotoProject(link)'>
      <div class="row">
        <div class="item-detail">
          <div class="name" :style="styleSetting.detail.projectName">{{projectName}}</div>
          <div class="subtitle" :style="styleSetting.detail.projectSubtitle">{{subtitle}}</div>
          <div class="item-params">
            <div class="outcome"><label for="">Outcome:</label>{{params.outcome}}</div>
            <div class="client"><label for="">Client: </label>{{params.client}}</div>
            <div class="myrole"><label for="">My Role: </label>{{params.myrole}}</div>
            <div class="duration"><label for="">Duration: </label>{{params.duration}}</div>
          </div>
          <div class="tags row">
            <div
            class="tag" 
            v-for="(tag,idx) in tags"
            :key='idx'
            :style="styleSetting.detail.tag">
            {{tag}}
            </div>
          </div>
        </div>
        <div class="item-img">
          <img :src='detailImgSrc' alt="">
        </div>
      </div>
      <div class="hr"></div>
    </div>
    
    
  </div>
</template>

<script>
export default {
  name: 'PortItem',
  props: ['showDetail','simpleImgSrc','detailImgSrc','projectName','projectDiscription','subtitle','params','tags','link','styleSetting'],
  methods:{
    gotoProject: function(url){
      this.$router.push(url)
    }
  }
}
</script>

<style scoped>
.tags{
  margin: 1.3rem -8px 1.925rem;
}
.tag{
  background: #F9F3EF;
  border-radius: 15px;
  font-family: 'Source Sans Pro';
  font-style: italic;
  font-size: 1.8rem;
  line-height: 2.1rem;
  text-align: center;
  letter-spacing: 0.05625rem;
  color: #82492A;
  height: 30px;
  display: flex;
  align-items: center;

  padding: 0 25px;
  margin: 0 8px;
}
.item-params{
  font-family: 'Source Sans Pro';
  margin-top: 1.3rem;
  font-style: normal;
  font-weight: normal;
  font-size: 1.6rem;
  line-height: 2.3rem;
  letter-spacing: 0.5px;
  color: #909090;
}
.item-params>div>label{
  width: 8.6rem;
  display: inline-block;
}
.simple{
  width:693px;
}
.detail{
  width:86rem;
}
.item-discription{
  padding-top: 10.6rem;
}
.item-detail{
  width: 62rem;
}
.item-detail,.item-discription{
  flex-grow:1
}
.item-detail>.subtitle{
  width: 54rem;
  margin-top: 1.2rem;
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 600;
  font-size: 2.1rem;
  line-height: 2.4rem;
  letter-spacing: 0.65625px;
  color: #825B46;
}
.name{
  font-family: 'Ubuntu-Bold';
  font-size: 2.6rem;
  line-height: 3rem;
  letter-spacing: 0.08125rem;
  color: #5F5F5F;
}
.item-discription>.discription{
  width: 41.9rem;
  padding-bottom: 2.9rem;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 2.3rem;
  letter-spacing: 0.5625px;
  color: #848484;
}
.item-img>img{
  margin-top: 4.2rem;
  height: 19.8rem;
}
.detail .item-img>img{
  height: 15.6rem;
}
.hr{
  border: 1px solid #D2D2D2;
}
</style>