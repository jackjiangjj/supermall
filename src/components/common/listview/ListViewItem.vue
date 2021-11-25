<template>
    <div class="listviewitem" @click="toDetail()">
      <slot class="slotview"></slot>
    </div>
</template>

<script>
    export default {
        name: "ListViewItem",
      data(){
          return{
            id:2
          }
      },
      methods:{
          toDetail(){
            this.$router.push('/detail/'+this.id)
          }
      }
    }
</script>

<style scoped>
  .listviewitem img{
  height: 250px;
  width:150px;
  }
  .listviewitem p{
    text-align: center;
    font-size: 18px;
    padding: 0;
    margin: 0;
  }

</style>
