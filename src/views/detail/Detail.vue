<template>
    <div id="detail">
      <nav-bar>
        <div slot="left" @click="back()">
          <img src="~assets/imges/nvzhuang/nv4.jpeg" style="width: 40px;height: 40px">
        </div>
        <div slot="center" class="title">
          <div v-for="(item,index) in title" class="title-item" @click="itemclick(index)">{{item}}</div>
        </div>
      </nav-bar>
    </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
    export default {
        name: "Detail",
      components:{
        NavBar
      },
      data(){
          return{
            id:null,
            title:['商品','参数','评论','推荐']
          }
      },
      created() {
          this.id=this.$route.params.id;
      },
      methods:{
          itemclick(index){
            console.log(index)
          },
        back(){
            this.$router.back();
        }
      }
    }
</script>

<style scoped>
.title{
  display: flex;
}
  .title-item{
    flex: 1;
  }
  .title-item:hover{
    color: #ff5777;
  }
</style>
