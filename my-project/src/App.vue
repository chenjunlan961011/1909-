<template>
  <div id="app">
   <!-- <Header/> -->
   <!-- <Tabbar /> -->
      <keep-alive>
        <router-view />
      <!-- <component :is="componentNameComputed"></component> -->
    </keep-alive>
    
  </div>
</template>

<script>
// import Header from './components/Header.vue'
// import Tabbar from './components/Tabbar.vue'
// import Tuijian from './pages/Tuijian.vue'
// import Redian from './pages/Redian.vue'
import store from "./store";
export default {
  name: 'app',
  data(){
    return{
      componentName:0,
      state: store.state
    };
  },
  components: {
    // Header,
    // Tabbar,
    // Tuijian,
    // Redian
  },
  computed: {
    componentNameComputed() {
      return this.state.tabbar === 0 ? "Tuijian" : "Redian";
    }
  }
}
</script>

<style>
</style>
