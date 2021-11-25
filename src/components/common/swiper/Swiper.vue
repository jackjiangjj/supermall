<template>
    <div id="swiper">
     <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Swiper",
      data(){
          return{

          }
      },
      computed:{
      }
    }
</script>

<style scoped>
#swiper{
  width: 100%;
  padding-top: 44px;
}
</style>
