<template>
  <div id="m-fr">
    <img :src='require("@/assets/img/fr_mobile/Frame 1.png")' alt="" />
    <img :src='require("@/assets/img/fr_mobile/Frame 2.png")' alt="" />
    <img :src='require("@/assets/img/fr_mobile/Frame 3.png")' alt="" />
    <img :src='require("@/assets/img/fr_mobile/Frame 4.png")' alt="" />
    <img :src='require("@/assets/img/fr_mobile/Frame 5.png")' alt="" />
    <img :src='require("@/assets/img/fr_mobile/Frame 6.png")' alt="" />
    <img :src='require("@/assets/img/fr_mobile/Frame 7.png")' alt="" />
    <img :src='require("@/assets/img/fr_mobile/Frame 8.png")' alt="" />
    <img :src='require("@/assets/img/fr_mobile/Frame 9.png")' alt="" />
    <img :src='require("@/assets/img/fr_mobile/Frame 10.png")' alt="" />
    <img :src='require("@/assets/img/fr_mobile/Frame 11.png")' alt="" />
    <img :src='require("@/assets/img/fr_mobile/Frame 12.png")' alt="" />
    <img :src='require("@/assets/img/fr_mobile/Frame 13.png")' alt="" />
    <img :src='require("@/assets/img/fr_mobile/Frame 14.png")' alt="" />
    <img :src='require("@/assets/img/fr_mobile/Frame 15.png")' alt="" />
    <img :src='require("@/assets/img/fr_mobile/Frame 16.png")' alt="" />
    <img :src='require("@/assets/img/fr_mobile/Frame 17.png")' alt="" />
    <img :src='require("@/assets/img/fr_mobile/Frame 18.png")' alt="" />
    <img :src='require("@/assets/img/fr_mobile/Frame 19.png")' alt="" />
    <img :src='require("@/assets/img/fr_mobile/Frame 20.png")' alt="" />
    <img :src='require("@/assets/img/fr_mobile/Frame 21.png")' alt="" />
    <img :src='require("@/assets/img/fr_mobile/3.png")' alt="" />
    <img :src='require("@/assets/img/fr_mobile/Frame 22.png")' alt="" />
    <img :src='require("@/assets/img/fr_mobile/Frame 23.png")' alt="" />
    <img :src='require("@/assets/img/fr_mobile/Frame 24.png")' alt="" />
    <img :src='require("@/assets/img/fr_mobile/Frame 25.png")' alt="" />
    <img :src='require("@/assets/img/fr_mobile/Frame 26.png")' alt="" />
    <img :src='require("@/assets/img/fr_mobile/Frame 27.png")' alt="" />
    <img :src='require("@/assets/img/fr_mobile/Frame 28.png")' alt="" />
    <img :src='require("@/assets/img/fr_mobile/Frame 29.png")' alt="" />
    
  </div>
</template>

<script>
import {_isMobile} from '@/util.js'
import Banner from "@/components/Banner"
export default {
  components: {
    Banner,
  },
  beforeCreate: function(){
    
      // this.$router.replace('/food-route');
    
  },
}
</script>

<style lang="scss" scoped>
.w-100 {width: 100%;}
*[padding] {padding: 0 2.2rem;}
#m-fr{
  width: 100%;
  img{
    width: 100%;
  }
}
</style>