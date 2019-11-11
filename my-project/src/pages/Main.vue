<template>
    <div>
         <Header/>
         <Tabbar/>
         <router-view></router-view>
    </div>
</template>
<script>
import Tabbar from '../components/Tabbar'
import Header from '../components/Header'
export default {
    components:{
        Tabbar,
        Header
    }
}
</script>
