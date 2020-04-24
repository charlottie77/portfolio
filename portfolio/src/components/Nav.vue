<template>
  <div id="navbar" class="row">
    <label v-for="(item, index) in nav" :key="index" 
      @click="routerLink(index, item.path)" 
      :class=" navIndex === index ? 'label-active' : 'label-unactive'">
        {{item.title}} 
    </label>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
  },
  data: ()=>({
    nav: [
      {title: 'Work', path: '/'},
      {title: 'About', path: '/about'}
    ],
    navIndex: 0,
  }),
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
    // checkRouterLocal(path) {
    //   // 查找当前路由下标高亮
    //   this.navIndex = this.nav.findIndex(item => item.path === path);
    // }
  }
}
</script>

<style >
#navbar {
  right: 214px;
  top: 100px;
  position: fixed;
  z-index: 1;
}

#navbar label {
  margin: 0px 14px;
  font-family: 'SF-Pro-Regular';
  /* TODO: change font-family from SF-Pro to Source Sans Pro */
  /* font-family: Source Sans Pro; */
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 1.55px;
}

#navbar label:hover {
  color: #8c3800;
}
</style>