<template>
  <div class="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/><!--$route当前路由，$router路由控制器-->
  </div>
</template>

<script>
  import FooterGuide from "./components/FooterGuide/FooterGuide.vue";
  import {mapActions} from "vuex";
  import {reqFoodCategories} from "./api"
    export default {
      components:{
        FooterGuide
      },
      mounted(){
        this.getAddress();
      },
      methods:{
        ...mapActions(["getAddress"])
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background-color  #f5f5f5
</style>
