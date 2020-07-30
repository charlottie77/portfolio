
<template>
  <div id="footer">
   <div class="row" id='social-network'>
        <a href="https://www.linkedin.com/in/yuqinguo/" target="_blank" rel="noopener noreferrer"> 
            <img class="sn-item" :src="require('@/assets/img/linkedin.svg')" alt="" >
        </a>
        <a href="https://dribbble.com/mint7g" target="_blank" rel="noopener noreferrer">
            <img class="sn-item" :src="require('@/assets/img/dribbble.svg')" alt="">
        </a>
        <a href="https://github.com/charlottie77" target="_blank" rel="noopener noreferrer">
            <img class="sn-item" :src="require('@/assets/img/github.svg')" alt="">
        </a>
        
    </div>
    <div id="copyright" style="width:69.5rem">This site was designed and developed from scratch by Yuqing. </div>
  </div>
</template>

<script>
// @ is an alias to /src



export default {
  name: "footer",
  components: {
   
  },
  data:()=>({
    
    
  }),
 
};
</script>

<style>

#copyright{
  margin-bottom: 26.4rem;
  color: #4A4A4A;
  font-family: 'Source Sans Pro-L';
  font-size: 1.8rem;
  line-height: 2.3rem;
  font-style: italic;
  letter-spacing: 1.31667px;
  text-align: center;
}
#social-network{
  margin:9rem -19px 1.8rem;
}
.sn-item{
  margin: 0 19px;
}

#footer{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 12rem;
}


</style>