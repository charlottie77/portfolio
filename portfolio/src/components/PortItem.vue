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
          <div class="name">{{projectName}}</div>
          <div class="subtitle">{{subtitle}}</div>
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
            :key='idx'>
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
  props: ['showDetail','simpleImgSrc','detailImgSrc','projectName','projectDiscription','subtitle','params','tags','link'],
  methods:{
    gotoProject: function(url){
      this.$router.push(url)
    }
  }
}
</script>

<style scoped>
.tags{
  margin: 19px -8px 43.5px;
}
.tag{
  background: #F9F3EF;
  border-radius: 15px;
  /* font-family: SourceSansPro; */
  font-size: 21px;
  line-height: 25px;
  text-align: center;
  letter-spacing: 0.65625px;
  color: #82492A;

  display: flex;
  align-items: center;

  padding: 7px 25px;
  margin: 0 8px;
}
.item-params{
  /* font-family: Source Sans Pro; */
  margin-top: 13px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.5px;
  color: #909090;
}
.item-params>div>label{
  width: 86px;
  display: inline-block;
}
.simple{
  width:693px;
}
.detail{
  width:999px;
}
.item-discription{
  padding-top: 160px;
}
.item-detail,.item-discription{
  flex-grow:1
}
.item-detail>.subtitle{
  margin-top: 12px;
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 500;
  font-size: 21px;
  line-height: 24px;
  letter-spacing: 0.65625px;
  color: #825B46;
}
.name{
  font-family: 'Ubuntu-Bold';
  font-size: 26px;
  line-height: 30px;
  letter-spacing: 0.8125px;
  color: #5F5F5F;
}
.item-discription>.discription{
  /* approximate */
  padding-right: 40px; 
  padding-bottom: 17px;
  /* font-family: Source Sans Pro */
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0.5625px;
  color: #848484;
}
.item-img>img{
  height: 225px;
}
.hr{
  border: 1px solid #D2D2D2;
}
</style>