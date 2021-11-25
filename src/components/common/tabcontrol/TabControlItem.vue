<template>
  <div class="tabcontrolitem">
    <slot @click="itemclick()"></slot>
  </div>
</template>

<script>
    export default {
        name: "TabControlItem",
      methods:{
          itemclick:function () {

          }
      }
    }
</script>

<style scoped>
.tabcontrolitem{
  text-align: center;
  flex: 1;
  padding-top: 10px;
}
  .tabcontrolitem a{
    font-size: 18px;
    color:brown;
  }
.tabcontrolitem a:hover{
  color: blue;
}
</style>
