<template>
    <div id="listview">
      <slot></slot>
    </div>
</template>

<script>
  import ListViewItem from "./ListViewItem";
    export default {
        name: "ListView",
      components:{
          ListViewItem
      },
      props: {}
    }
</script>

<style scoped>
#listview{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

}
</style>
