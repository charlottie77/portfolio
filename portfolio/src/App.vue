<template>
    <div id="app">
      <!-- <div id="header-group" >
           <label v-for="(item, index) in nav" :key="index" 
            @click="routerLink(index, item.path)" 
            :class=" navIndex === index ? 'label-active' : 'label-unactive'">
             {{ item.title}} 
          </label>
      </div> -->
    <router-view/>
    </div>

</template>

<script>
export default {
  name: 'App',
  props: {
  },
  data: function(){
    return {
      nav: [
        {title: 'Portfolio', path: '/'},
        {title: 'About', path: '/about'}
      ],
      navIndex: 0,
    }  
  },
  watch: {
    "$route"() {
    // 获取当前路径
    let path = this.$route.path;
    // 检索当前路径
    this.checkRouterLocal(path);
    }
  },
  methods: {
    goToMain:function(){
      this.$router.push({path:'/'});
    },
    goToAbout: function() {
      this.$router.push({path:'/about'});
    },
    routerLink(index, path) {
      // 点击哪个路由就赋值给自定义的下下标
      this.navIndex = index;
      // 路由跳转
      this.$router.push(path)
    },
    checkRouterLocal(path) {
      // 查找当前路由下标高亮
      this.navIndex = this.nav.findIndex(item => item.path === path);
    }
  }
}
  
</script>

<style>
@import url("./assets/fonts/SF-Pro.css");
/* #app {
  font-family: 'SF-Pro-Regular';
  width: 100%;
  max-width: 1920px;
} */
#app {
  font-family: 'SF-Pro-Regular';
  width: 100%;
  /* max-width: 1920px; */
  display: flex;
  flex-direction: column;
  align-items: center;
}
#header-group {
  display: flex;
  right: 10px;
  position: fixed;
  margin-top: 30px;
  margin-right: 80px;
  z-index: 1;
}

#header-group label {
  font-size: 16px;
  /* color: #979797; */
  letter-spacing: 2px;
  margin: 0px 16px;
  /* background-color: #fff;
  border-radius: 8px; */
  padding: 4px 8px;
  font-family: 'SF-Pro-Regular';
  /* box-shadow: 0px 2px 6px rgba(124, 124, 124, 0.5); */
}

#header-group label:hover {
  color: #8c3800;
}

.label-active {
  color: #4a4a4a;
}
.label-unactive {
  color: #979797;
}

body {
  margin: 0;
  min-width: 1280px;
  display: flex;
  justify-content: center;
  width: 100%;
  flex-shrink: 0;
}

</style>
