<template>
  <div id="main">
    <Banner height="443px" backgroundColor="#E9E0D9" />
    <div class="container row">
      <div>
        <img src="@/assets/img/banner_illu.png" alt="" id='selfy'/>
      </div>
      <div id="home">
        <div id="home-text-div">
          <label class="htd-1">Hi, I am</label>
          <label class="htd-2">Yuqing Guo</label>
          <label class="htd-3">a technical UX designer.</label>
        </div>
      </div>
    </div>

    <!-- <PortList msg=""/> -->
  </div>
</template>

<script>
// @ is an alias to /src

import PortList from "@/components/PortList.vue";
import Banner from "@/components/Banner.vue";
export default {
  name: "home",
  components: {
    PortList,
    Banner
  }
};
</script>

<style>

#main {
  /* position: relative; */
  font-family: "SF-Pro-Regular";
  width: 100%;
}
</style>

<style scoped>

#selfy{
  width: 407px;
}
.container{
  margin: -250px 97px 0px;
  background-color: transparent;
}

#home {
  /* background: transparent url("../assets/main_bg.png") no-repeat; */
  /* background-size: 100% auto; */
  width: 100%;
  display: flex;
  flex-grow: 1;
}
#home-text-div {
  display: flex;
  flex-direction: column;
  top:80px;
  position: relative;
}

.htd-1 {
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 41px;
  letter-spacing: 2.5px;
  color: #000000;
}

.htd-2 {
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 55px;
  letter-spacing: 2.5px;
  color: #000000;
}

.htd-3 {
  margin-top: 24px;
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 2.5px;
  color: #000000;
}
</style>