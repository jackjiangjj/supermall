<template>
  <div id="app">
    <router-view></router-view>
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
import TarBarItem from "./components/common/tarbar/TarBarItem";
import TarBar from "./components/common/tarbar/TarBar";
import SwiperItem from "./components/common/swiper/SwiperItem";
import Swiper from "./components/common/swiper/Swiper";
import MainTabbar from "./components/content/mainTabbar/MainTabbar";
export default {
  name: 'app',
  components: {
    MainTabbar,
    TarBar,
    TarBarItem,
    Swiper,
    SwiperItem
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
