<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">首页</div></nav-bar>
    <scroll  ref="wra" class="scroll">
    <swiper class="swiper">
      <swiper-item><img src="~assets/imges/nvzhuang/nv13.jpeg"></swiper-item>
    </swiper>
  <p style="text-align: center;padding: 0;margin: 0" >本周流行</p>
  <reconmend-bar>
    <ChildReconmendBar><img src="~assets/imges/nvzhuang/nv8.jpeg"><p>十点抢券</p></ChildReconmendBar>
    <ChildReconmendBar><img src="~assets/imges/nvzhuang/nv11.jpeg"><p>好物特卖</p></ChildReconmendBar>
    <ChildReconmendBar><img src="~assets/imges/nvzhuang/nv12.jpeg"><p>内购福利</p></ChildReconmendBar>
    <ChildReconmendBar><img src="~assets/imges/nvzhuang/nv15.jpeg"><p>好物上新</p></ChildReconmendBar>
  </reconmend-bar>
  <reconmend-bar>
    <ChildReconmendBar><img src="~assets/imges/nvzhuang/nv8.jpeg"><p>十点抢券</p></ChildReconmendBar>
    <ChildReconmendBar><img src="~assets/imges/nvzhuang/nv11.jpeg"><p>好物特卖</p></ChildReconmendBar>
    <ChildReconmendBar><img src="~assets/imges/nvzhuang/nv12.jpeg"><p>内购福利</p></ChildReconmendBar>
    <ChildReconmendBar><img src="~assets/imges/nvzhuang/nv15.jpeg"><p>好物上新</p></ChildReconmendBar>
  </reconmend-bar>
  <tab-control>
    <tab-control-item ><a @click="itemclick(0)">流行</a></tab-control-item>
    <tab-control-item><a @click="itemclick(1)">新款</a></tab-control-item>
    <tab-control-item><a @click="itemclick(2)">精选</a></tab-control-item>
  </tab-control>
  <list-view>
    <list-view-item v-for="item in currentList"><img src="../../assets/imges/nvzhuang/nv5.jpeg" ><p>{{item.title}}</p></list-view-item>
  </list-view>
      <ul><li>hhhhhhhhhhhhhhhhh</li>
        <li>hhhhhhhhhhhhhhhhh</li>
        <li>hhhhhhhhhhhhhhhhh</li>
        <li>hhhhhhhhhhhhhhhhh</li>
        <li>hhhhhhhhhhhhhhhhh</li>
        <li>hhhhhhhhhhhhhhhhh</li>
        <li>hhhhhhhhhhhhhhhhh</li>
        <li>hhhhhhhhhhhhhhhhh</li>
        <li>hhhhhhhhhhhhhhhhh</li>
        <li>hhhhhhhhhhhhhhhhh</li>
        <li>hhhhhhhhhhhhhhhhh</li>
        <li>hhhhhhhhhhhhhhhhh</li>
        <li>hhhhhhhhhhhhhhhhh</li>
        <li>hhhhhhhhhhhhhhhhh</li>
        <li>hhhhhhhhhhhhhhhhh</li>
        <li>hhhhhhhhhhhhhhhhh</li>
        <li>hhhhhhhhhhhhhhhhh</li>
        <li>hhhhhhhhhhhhhhhhh</li>
        <li>hhhhhhhhhhhhhhhhh</li>
        <li>hhhhhhhhhhhhhhhhh</li>
        <li>hhhhhhhhhhhhhhhhh</li>
        <li>hhhhhhhhhhhhhhhhh</li>
        <li>hhhhhhhhhhhhhhhhh</li>
        <li>hhhhhhhhhhhhhhhhh</li>
      </ul>
    </scroll>
    <a href="#"><back-top @click.native="backtop()"></back-top></a>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
 // import {getHomeMultidata1} from "../../network/home";
  import ListViewItem from "../../components/common/listview/ListViewItem";
  import ReconmendBar from "../../components/common/reconmend/ReconmendBar";
  import ChildReconmendBar from "../../components/common/reconmend/ChildReconmendBar";
  import Swiper from "components/common/swiper/Swiper";
  import SwiperItem from "components/common/swiper/SwiperItem";
  import TabControl from "../../components/common/tabcontrol/TabControl";
  import TabControlItem from "../../components/common/tabcontrol/TabControlItem";
  import ListView from "../../components/common/listview/ListView";
  import Scroll from "../../components/common/scroll/Scroll";
import BackTop from "../../components/content/backTop/BackTop";
  export default {
        name: "Home",
      type:[],
      components:{
          NavBar,Swiper,SwiperItem,ChildReconmendBar,ReconmendBar,
        TabControl,TabControlItem,ListView,ListViewItem,Scroll,BackTop
      },
    data(){
          return{
            imgx:'',
            currentList: {},
            imgurl:['~assets/imges/nvzhuang/nv13.jpeg','~assets/imges/nvzhuang/nv16.jpeg','~assets/imges/nvzhuang/nv17.jpeg'],
            goods:[
              {
                type:'pop',
                list:[{url:'../../assets/imges/nvzhuang/nv2.jpeg',title:'wwwwwwwwww'},
                  {url:'../../assets/imges/nvzhuang/nv2.jpeg',title:'wwwwwwwwww'},
                  {url:'../../assets/imges/nvzhuang/nv2.jpeg',title:'wwwwwwwwww'},
                  {url:'../../assets/imges/nvzhuang/nv2.jpeg',title:'wwwwwwwwww'},
                  {url:'../../assets/imges/nvzhuang/nv2.jpeg',title:'wwwwwwwwww'},
                  {url:'../../assets/imges/nvzhuang/nv2.jpeg',title:'wwwwwwwwww'},
                  {url:'../../assets/imges/nvzhuang/nv2.jpeg',title:'wwwwwwwwww'},
                  {url:'../../assets/imges/nvzhuang/nv2.jpeg',title:'wwwwwwwwww'},
                ],

              },
              {
                type:'new',
                list:[{url:'../../assets/imges/nvzhuang/nv4.jpeg',title:'eeeeeeeeeeee'},
                  {url:'../../assets/imges/nvzhuang/nv4.jpeg',title:'eeeeeeeeeeee'},
                  {url:'../../assets/imges/nvzhuang/nv4.jpeg',title:'eeeeeeeeeeee'},
                  {url:'../../assets/imges/nvzhuang/nv4.jpeg',title:'eeeeeeeeeeee'},
                  {url:'../../assets/imges/nvzhuang/nv4.jpeg',title:'eeeeeeeeeeee'},
                  {url:'../../assets/imges/nvzhuang/nv4.jpeg',title:'eeeeeeeeeeee'},
                  {url:'../../assets/imges/nvzhuang/nv4.jpeg',title:'eeeeeeeeeeee'},
                  {url:'../../assets/imges/nvzhuang/nv4.jpeg',title:'eeeeeeeeeeee'},
                ],
              },
              {
                type:'sell',
                list:[{url:'../../assets/imges/nvzhuang/nv3.jpeg',title:'rrrrrrrrrrrrr'},
                  {url:'../../assets/imges/nvzhuang/nv3.jpeg',title:'rrrrrrrrrrrrr'},
                  {url:'../../assets/imges/nvzhuang/nv3.jpeg',title:'rrrrrrrrrrrrr'},
                  {url:'../../assets/imges/nvzhuang/nv3.jpeg',title:'rrrrrrrrrrrrr'},
                  {url:'../../assets/imges/nvzhuang/nv3.jpeg',title:'rrrrrrrrrrrrr'},
                  {url:'../../assets/imges/nvzhuang/nv3.jpeg',title:'rrrrrrrrrrrrr'},
                  {url:'../../assets/imges/nvzhuang/nv3.jpeg',title:'rrrrrrrrrrrrr'},
                  {url:'../../assets/imges/nvzhuang/nv3.jpeg',title:'rrrrrrrrrrrrr'},
                ],
              }
            ]
          }
    },
    mounted() {
          this.currentList=this.goods[0].list;
          // console.log(this.$refs.wrapper)
          // this.scroll=new BScroll(this.$refs.wrapper,{
          //
          // })
    },
    methods:{
          itemclick:function (index) {
              this.currentList=this.goods[index].list;
              console.log(this.currentList);
          },
      backtop(){//得组件对象就可以用组件中数据，方法
          this.$refs.wra.scrollTo(0,0)
              console.log(this.$refs.wra.scroll)
      }
    },
    //组件活跃时
    activated() {
    },
    //组件不活跃时
    deactivated() {
    }
  }
</script>

<style scoped>
  .home-nav{
    margin: 0;
  background-color:peachpuff;
    color: black;
  }
  .swiper img{
  height: 150px;
    width: 100%;
  }
  #home{
    position: absolute;
    /*padding-top: 44px;*/
    /*padding-bottom: 49px;*/
    left: 0;
    right: 0;
    height: 100vh;
    /*overflow: scroll;*/
  }
  .scroll{
    height: calc(100% - 44px);
    overflow: hidden;
  }
</style>
