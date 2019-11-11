<template>
    <div class="top_menu_bar ">
    <div class="top_menu_more">
        <div class="list_shadow"></div>
        <a class="more_btn" href="javascript:void(0)">
            <span class="cross"></span>
        </a>
    </div>
    <div class="top_menu_list">
        <!-- <a v-for="(n,index) in tabbar" :key="index" @click="toggle(index,n)" href="javascript:void(0)" data-channel="video" data-query="channel=video" :class="['btn',{'cur':offset==index}]" v-text="n.title"></a> -->
        
  
        <van-tabbar>
            <van-tabbar-item to="/main/tuijian"> 
               <a href="javascript:void(0)" data-channel="video" data-query="channel=video" class="btn">推荐</a>
            </van-tabbar-item> 
            <van-tabbar-item to="/main/redian"> 
               <a href="javascript:void(0)" data-channel="video" data-query="channel=video" class="btn">热点</a>
            </van-tabbar-item> 
            <van-tabbar-item to="/main/tuijian"> 
               <a href="javascript:void(0)" data-channel="video" data-query="channel=video" class="btn">视频</a>
            </van-tabbar-item> 
            <van-tabbar-item to="/main/yule"> 
               <a href="javascript:void(0)" data-channel="video" data-query="channel=video" class="btn">社会</a>
            </van-tabbar-item> 
            <van-tabbar-item to="/main/tuijian"> 
               <a href="javascript:void(0)" data-channel="video" data-query="channel=video" class="btn">娱乐</a>
            </van-tabbar-item> 
            <van-tabbar-item to="/main/redian"> 
               <a href="javascript:void(0)" data-channel="video" data-query="channel=video" class="btn">推荐</a>
            </van-tabbar-item> 
        </van-tabbar>
           
    </div>
</div>
</template>
<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
Vue.use(Tabbar).use(TabbarItem);
import store from "../store";
export default {
  data() {
    return {
      active: 0,
      tabbar: [
        {
          title: "推荐",
          route: "tujian"
        },
        {
          title: "热点",
          route: "redian"
        },
        {
          title: "视频",
          route: "shipin"
        },
        {
          title: "社会",
          route: "shehui"
        },
        {
          title: "娱乐",
          route: "yule"
        },
        {
          title: "军事",
          route: "junshi"
        },
        {
          title: "科技",
          route: "keji"
        },
        {
          title: "汽车",
          route: "qiche"
        },
        {
          title: "房产",
          route: "fangchan"
        },
        {
          title: "家居",
          route: "jiaju"
        },
        {
          title: "体育",
          route: "tiyu"
        },
        {
          title: "财经",
          route: "caijing"
        }
      ],
      offset: 0
    };
  },
  methods: {
    toggle(index) {
      store.setTabbar(index);
      this.offset = index;
    },
    // navtoPage(index){
    //   this.$router.push({
    //     // name:this.tabbar[index].route
    //     path:"/main/${this.tabbar[index].route}",
    //     //  path: /main/${this.tabbar[index].route}`,
    //   })
    //   window.console.log(index)
    //   window.console.log(this.tabbar[index].route)
    // }
  }
};
</script>
<style>
.top_menu_bar {
  top: 50px;
  height: 37px;
}
.top_menu_bar {
  background: #f4f5f6;
  box-sizing: border-box;
  width: 100%;
  position: fixed;
  z-index: 999;
}
.top_menu_bar .top_menu_more {
  float: right;
  position: relative;
  overflow: hidden;
}
.top_menu_bar .top_menu_more .list_shadow {
  left: -20px;
  height: 72px;
  width: 20px;
}
.top_menu_bar .top_menu_more .list_shadow {
  position: absolute;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAABXCAQAAACjUt0DAAAAAmJLR…AwtDMDRwAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII=);
  background-size: contain;
  background-color: rgba(244, 245, 246, 0.3);
}
.top_menu_bar .top_menu_more .more_btn {
  line-height: 72px;
  font-size: 70px;
  background-size: 20px;
  height: 23px;
  width: 36px;
}
.top_menu_bar .top_menu_more .more_btn {
  display: block;
  position: relative;
  color: #f85959;
  text-align: center;
}
.cross {
  height: 10px;
  width: 34px;
}
.cross {
  position: absolute;
  opacity: 0.9;
  left: 68%;
  top: 68%;
  transform: translate(-50%, -50%);
}
.cross:before {
  transform: rotate(90deg);
}
.cross:before,
.cross:after {
  position: absolute;
  content: " ";
  height: 12px;
  width: 2px;
  background-color: #f85959;
}
.top_menu_bar .top_menu_list {
  overflow: hidden;
  overflow-x: scroll;
  white-space: nowrap;
}
.top_menu_bar .top_menu_list .btn.cur {
  color: #f85959;
}
.top_menu_bar .top_menu_list .btn {
  margin-bottom: 10px;
  margin-top: 10px;
  margin-left: 10px;
  height: 52px;
  line-height: 52px;
  font-size: 34px;
  padding-right: 20px;
  padding-left: 20px;
}
.top_menu_bar .top_menu_list .btn {
  white-space: nowrap;
  display: inline-block;
  text-decoration: none;
  font-size: 17px;
  line-height: 26px;
  height: 26px;
  margin-left: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  color: black;
}
/*vant的样式*/
.van-tabbar--fixed {
  position: fixed;
  top: 50px;
  left: 0;
}
</style>

