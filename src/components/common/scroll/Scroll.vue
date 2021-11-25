<template>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <slot></slot>
      </div>
    </div>
</template>

<script>
  import BScroll from  'better-scroll'
    export default {
        name: "Scroll",
      data(){
          return{
            scroll:null
          }
      },
      mounted() {
          console.log(this.$refs.wrapper)
          this.scroll=new BScroll(this.$refs.wrapper,{
                  probeType:3,
            pullUpLoad:true,
            click:true,
            hasHorizontalScroll:true
          })
        this.scroll.scrollTo(0,0)
      },
      methods:{
          scrollTo(x,y,time){
            this.scroll.scrollTo(x,y,time);
          }
      }
    }
</script>

<style scoped>
/*.wrapper{*/
/*  height:600px;*/
/*  overflow: hidden;*/
/*}*/

</style>
