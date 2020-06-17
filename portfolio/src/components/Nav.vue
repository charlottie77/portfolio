<template>
  <div id="navbar" class="row">
    <label class='nav-label' v-for="(item, index) in nav" :key="index" 
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
  created: function(){
    if(this.$router.currentRoute.name=='about')this.navIndex = 1
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
    // checkRouterLocal(path) {
    //   // 查找当前路由下标高亮
    //   this.navIndex = this.nav.findIndex(item => item.path === path);
    // }
  }
}
</script>

<style >
.nav-label:hover{
  cursor: pointer;
}
#navbar {
  right: 12rem;
  top: 8.3rem;
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
  font-size: 2rem;
  line-height: 2.5rem;
  letter-spacing: 1.55px;
}

#navbar label:hover {
  color: #8c3800;
}
</style>