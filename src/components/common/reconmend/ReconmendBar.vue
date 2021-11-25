<template>
  <div id="commendbar">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "ReconmendBar"
    }
</script>

<style scoped>
  #commendbar{
    height: 100px;
    width: 100%;
    display: flex;
    padding: 0;
    margin: 0;
    border-bottom: lavender 6px solid;
    border-top:lavender 3px solid ;
  }
</style>
