
<template>
  <div id="myfooter">
   <div class="row animate__animated" id='social-network' data-scroll-watch >
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
.animate__animated{
  opacity: 0;
}

#copyright{
  margin-bottom: 26.4rem;
  color: #4A4A4A;
  font-family: 'Open Sans-LI';
  font-size: 1.4rem;
  line-height: 2.3rem;
  letter-spacing: 1.31667px;
  text-align: center;
}
#social-network{
  margin:3rem -19px 1.8rem;
}
.sn-item{
  margin: 0 19px;
  height: 2.8rem ;
}

#myfooter{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
}


</style>