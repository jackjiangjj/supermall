<template>
  <div id="childcommendbar">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "ChildReconmendBar"
    }
</script>

<style scoped>
#childcommendbar{
  height: 80px;
  flex: 1;
  text-align: center;
}
  #childcommendbar img{
    border-radius: 80%;
    height: 70px;
    width: 70px;
  }
  #childcommendbar p{
    padding: 0;
    margin: 0;
    font-size: 15px;
    color: cadetblue;
  }
</style>
