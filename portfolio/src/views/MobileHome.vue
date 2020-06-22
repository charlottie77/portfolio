<template>
  <div id="m-main">
    this is mobile home page
  </div>
</template>

<script>
import {_isMobile} from '@/util.js'

export default {
  beforeCreate: function(){
    if(!_isMobile()) {
      this.$router.replace('/');
    }
  }
}
</script>

<style>

</style>