<template>
  <div class="weui-panel weui-panel_access">
    <!-- <div class="weui-panel__hd">图文组合列表</div> -->
    <div class="weui-panel__bd">
        <a @click="navToDetail(index)" v-for="(n,index) in news" :key="index" href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
            <div v-if="n.has_image" class="weui-media-box__hd">
                <img class="weui-media-box__thumb"
                    :src="n.image_url"
                    alt="">
            </div>
            <div class="weui-media-box__bd">
                <h4 class="weui-media-box__title" v-text="n.title"></h4>
                <p class="weui-media-box__desc" v-text="n.abstract"></p>
            </div>
        </a>
    </div>
    <div @click="loadMore" class="weui-panel__ft">
        <a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
            <div class="weui-cell__bd">查看更多</div>
            <span class="weui-cell__ft"></span>
        </a>
    </div>
</div>
</template>
<script>
import Vue from "vue";
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import "../assets/styles.scss";
// import $ from "jquery";
// import axios from "axios";
export default {
  data() {
    return {
      news: [
        {
          media_name: "央视新闻",
          ban_comment: 0,
          abstract:
            "江海通津，东南都会历史，曾在这里起笔开启全球贸易发展史上一大创举迎五洲客，计天下利历史，又在这里续写见证中国开放的大门越开越大中央广播电视总台推出微纪录片《潮涌东方 海纳百川》全景记录习近平主席出席第二届进博会（央视记者 申勇 彭柏闳 龚雪辉 陈汉章 李铮 马亚阳 荆伟 王哈男 ",
          image_list: [],
          datetime: "2019-11-07 16:31",
          article_type: 0,
          tag: "video_traditional_culture",
          has_m3u8_video: 0,
          display_dt: 1573086301,
          has_mp4_video: 0,
          aggr_type: 1,
          cell_type: 0,
          article_sub_type: 0,
          bury_count: 0,
          title: "微纪录片《潮涌东方 海纳百川》",
          source_icon_style: 6,
          tip: 0,
          has_video: false,
          share_url:
            "http://m.toutiao.com/a6756354219847975428/?app=news_article&is_hit_share_recommend=0",
          label: "置顶",
          source: "央视新闻",
          comment_count: 452,
          article_url: "http://toutiao.com/group/6756354219847975428/",
          publish_time: 1573086301,
          group_flags: 0,
          has_image: false,
          tag_id: "6756354219847975428",
          source_url: "/i6756354219847975428/",
          display_url: "http://toutiao.com/group/6756354219847975428/",
          is_stick: true,
          item_id: "6756354219847975428",
          repin_count: 2052,
          cell_flag: 262155,
          source_open_url: "sslocal://profile?refer=video&uid=4492956276",
          level: 0,
          digg_count: 3033,
          behot_time: 1573115469,
          hot: 0,
          cursor: 1573115469999,
          url: "http://toutiao.com/group/6756354219847975428/",
          user_repin: 0,
          label_style: 6,
          video_style: 0,
          media_info: {
            avatar_url: "http://p2.pstatp.com/large/2dd3b0002ddb188f08d77",
            media_id: 4492956276,
            name: "央视新闻",
            user_verified: true
          },
          group_id: "6756354219847975428"
        },
        {
          media_name: "新华网客户端",
          ban_comment: 0,
          abstract:
            "新华社北京11月6日电 题：筑牢中国长治久安的制度根基——《中共中央关于坚持和完善中国特色社会主义制度、推进国家治理体系和治理能力现代化若干重大问题的决定》诞生记新华社记者赵承、霍小光、张晓松、邹伟、施雨岑2019年10月31日，中国共产党第十九届中央委员会第四次全体会议表决通过",
          image_list: [],
          datetime: "2019-11-07 16:31",
          article_type: 0,
          tag: "news_politics",
          has_m3u8_video: 0,
          display_dt: 1573104274,
          has_mp4_video: 0,
          aggr_type: 1,
          cell_type: 0,
          article_sub_type: 0,
          bury_count: 0,
          title:
            "筑牢中国长治久安的制度根基——《中共中央关于坚持和完善中国特色社会主义制度、推进国家治理体系和治理能力现代化若干重大问题的决定》诞生记",
          source_icon_style: 6,
          tip: 0,
          has_video: false,
          share_url:
            "http://m.toutiao.com/group/6756431410048795150/?app=news_article&is_hit_share_recommend=0",
          label: "置顶",
          source: "新华网客户端",
          comment_count: 266,
          article_url:
            "http://www.xinhuanet.com/politics/2019-11/06/c_1125200770.htm",
          publish_time: 1573104274,
          group_flags: 0,
          has_image: false,
          tag_id: "6756431410048795150",
          source_url: "/i6756431410048795150/",
          display_url: "http://toutiao.com/group/6756431410048795150/",
          is_stick: true,
          item_id: "6756431410048795150",
          repin_count: 2117,
          cell_flag: 262155,
          source_open_url: "sslocal://profile?uid=4377795668",
          level: 0,
          digg_count: 3210,
          behot_time: 1573115467,
          hot: 0,
          cursor: 1573115467999,
          url: "http://www.xinhuanet.com/politics/2019-11/06/c_1125200770.htm",
          user_repin: 0,
          label_style: 1,
          video_style: 0,
          media_info: {
            avatar_url: "http://p9.pstatp.com/large/ff1b0000332acf4a6c2e",
            media_id: 4377795668,
            name: "新华网客户端",
            user_verified: true
          },
          group_id: "6756431410048795150"
        },
        {
          media_name: "帆辰科技",
          ban_comment: 0,
          abstract:
            "目前的智能手机市场可以说是竞争非常的激烈，各大手机厂商都是在不断的推出子品牌，以增加其自身的产品竞争力，说起iQOO这款品牌，对于用户来说最为直观的就是其强劲的硬件配置性能，再加上其极低的价格，可以说是新一代的“价格屠夫”，而iQOO前面推出了一款极具竞争力的5G手机-iQOO ",
          image_list: [],
          datetime: "2019-11-07 16:31",
          article_type: 0,
          tag: "news_tech",
          has_m3u8_video: 0,
          display_dt: 1573005600,
          has_mp4_video: 0,
          aggr_type: 1,
          cell_type: 0,
          article_sub_type: 0,
          bury_count: 0,
          title: "iQOO Pro 5G版全面测评：不负5G旗舰之名",
          source_icon_style: 5,
          tip: 0,
          has_video: false,
          share_url:
            "http://m.toutiao.com/a6755787799221240327/?app=news_article&is_hit_share_recommend=0",
          source: "帆辰科技",
          comment_count: 0,
          article_url: "http://toutiao.com/group/6755787799221240327/",
          publish_time: 1573005600,
          group_flags: 0,
          middle_mode: true,
          gallary_image_count: 4,
          tag_id: "6755787799221240327",
          source_url: "/i6755787799221240327/",
          display_url: "http://toutiao.com/group/6755787799221240327/",
          is_stick: false,
          item_id: "6755787799221240327",
          repin_count: 0,
          cell_flag: 262155,
          source_open_url: "sslocal://profile?uid=87395661853",
          level: 0,
          digg_count: 0,
          behot_time: 1573115466,
          hot: 0,
          cursor: 1573115466999,
          url: "http://toutiao.com/group/6755787799221240327/",
          image_url:
            "https://p3.pstatp.com/list/pgc-image/5844068b45394e74bd949efdb2439a3b",
          user_repin: 0,
          has_image: true,
          video_style: 0,
          media_info: {
            avatar_url: "http://p3.pstatp.com/large/5b420004a1646752f6cc",
            media_id: 1590294844363779,
            name: "帆辰科技",
            user_verified: true
          },
          group_id: "6755787799221240327"
        },
        {
          log_extra:
            '{"ad_price":"XcPWTQAX1Zhdw9ZNABfVmGpGm0GRzw9H5I7syg","convert_component_suspend":0,"convert_id":0,"external_action":0,"orit":1,"req_id":"32355986573115469257","rit":1}',
          ban_comment: 1,
          abstract: "",
          image_list: [],
          datetime: "2019-11-07 16:31",
          article_type: 1,
          tag: "ad.platform.site",
          display_info: "天猫双11来啦！油卡优惠充，充2000送100！",
          has_m3u8_video: 0,
          display_dt: 1572591054,
          has_mp4_video: 0,
          aggr_type: 1,
          expire_seconds: 315349710,
          cell_type: 0,
          article_sub_type: 0,
          bury_count: 0,
          title: "天猫双11来啦！油卡优惠充，充2000送100！",
          source_icon_style: 3,
          tip: 0,
          has_video: false,
          share_url:
            "http://m.toutiao.com/group/6754226901126021646/?app=news_article",
          label: "广告",
          source: "天猫双11加油狂欢节",
          comment_count: 0,
          article_url:
            "https://pages.tmall.com/wow/a/act/tmall/tmc/23759/wupr?spm=a2o5r.9022594.0.0&wh_pid=industry-172052&subSource=11mldt",
          large_mode: true,
          large_image_url:
            "http://sf3-ttcdn-tos.pstatp.com/img/web.business.image/201911015d0d7855dbf6a39e4d7bb01f~640x0.image",
          publish_time: 1572591054,
          ad_id: 1648981237144637,
          group_flags: 4096,
          has_image: false,
          tag_id: "6754226901126021646",
          source_url: "/item/6754226901126021646/",
          display_url:
            "https://pages.tmall.com/wow/a/act/tmall/tmc/23759/wupr?spm=a2o5r.9022594.0.0&wh_pid=industry-172052&subSource=11mldt",
          is_stick: false,
          item_id: "6754226901126021646",
          repin_count: 1,
          cell_flag: 262154,
          source_open_url:
            "sslocal://search?from=feed_source&keyword=%E5%A4%A9%E7%8C%AB%E5%8F%8C11%E5%8A%A0%E6%B2%B9%E7%8B%82%E6%AC%A2%E8%8A%82",
          level: 0,
          source_avatar:
            "http://sf3-ttcdn-tos.pstatp.com/obj/web.business.image/201905145d0dc594130066b34e83ae2f",
          digg_count: 0,
          behot_time: 1573115465,
          hot: 0,
          cursor: 1573115465999,
          url:
            "https://pages.tmall.com/wow/a/act/tmall/tmc/23759/wupr?spm=a2o5r.9022594.0.0&wh_pid=industry-172052&subSource=11mldt",
          ad_label: "广告",
          user_repin: 0,
          label_style: 3,
          video_style: 0,
          group_id: "6754226901126021646"
        },
        {
          media_name: "中国经济网",
          ban_comment: 0,
          abstract:
            "来源：钱江晚报·小时新闻钱江晚报·小时新闻记者 陈蕾在浙江公安里,有两位很厉害的画像专家,对犯罪嫌疑人来说,他们堪称是双子杀手。他们的网名一个叫大猫,一个叫镖头,他们的一部分故事钱江晚报小时新闻之前进行了推送(详情戳这里,就是这个人!",
          image_list: [],
          datetime: "2019-11-07 16:31",
          article_type: 0,
          tag: "news_society",
          has_m3u8_video: 0,
          display_dt: 1573090946,
          has_mp4_video: 0,
          aggr_type: 1,
          cell_type: 0,
          article_sub_type: 0,
          bury_count: 0,
          title: "画得实在太像了！被抓时，逃犯珍藏了自己的悬赏画像",
          source_icon_style: 4,
          tip: 0,
          has_video: false,
          share_url:
            "http://m.toutiao.com/group/6756374167764861447/?app=news_article&is_hit_share_recommend=0",
          source: "中国经济网",
          comment_count: 1,
          article_url: "http://m.ce.cn/ttt/201911/07/t20191107_33548786.shtml",
          publish_time: 1573090946,
          group_flags: 0,
          middle_mode: true,
          gallary_image_count: 1,
          tag_id: "6756374167764861447",
          source_url: "/i6756374167764861447/",
          display_url: "http://toutiao.com/group/6756374167764861447/",
          is_stick: false,
          item_id: "6756374167764861447",
          repin_count: 4,
          cell_flag: 262155,
          source_open_url: "sslocal://profile?uid=50502346296",
          level: 0,
          digg_count: 6,
          behot_time: 1573115464,
          hot: 0,
          cursor: 1573115464999,
          url: "http://m.ce.cn/ttt/201911/07/t20191107_33548786.shtml",
          image_url: "https://p3.pstatp.com/list/pgc-image/Rh69GnlCgrtyxh",
          user_repin: 0,
          has_image: true,
          video_style: 0,
          media_info: {
            avatar_url:
              "http://p7.pstatp.com/large/pgc-image/e2c79d5500bc495799ee86d64dee9d25",
            media_id: 50502346296,
            name: "中国经济网",
            user_verified: true
          },
          group_id: "6756374167764861447"
        },
        {
          media_name: "光明日报",
          ban_comment: 0,
          abstract:
            "溯源君，一切来路皆可追。翻开我国数千年的地名演变史，有一些地名沿用到了今天，比如“河北”；有一些地名消失于历史烟尘之中，比如“西域”；还有一些地名名称依旧，但所指范围早已不同，比如“山东”。以山东为例，古籍中的“山东”与现代山东省是不一样的。",
          image_list: [],
          datetime: "2019-11-07 16:31",
          article_type: 0,
          tag: "news_history",
          has_m3u8_video: 0,
          keywords:
            "楚辞·招魂,荆州,史记·货殖列传,哀江南赋,江南道,韩非子·初见秦,庾信,江南,节度使",
          display_dt: 1572497920,
          has_mp4_video: 0,
          aggr_type: 1,
          cell_type: 0,
          article_sub_type: 0,
          bury_count: 0,
          title: "“江南”，到底是哪里？",
          source_icon_style: 2,
          tip: 0,
          has_video: false,
          share_url:
            "http://m.toutiao.com/a6753827140837310980/?app=news_article&is_hit_share_recommend=0",
          source: "光明日报",
          comment_count: 339,
          article_url: "http://toutiao.com/group/6753827140837310980/",
          publish_time: 1572497920,
          group_flags: 0,
          middle_mode: true,
          gallary_image_count: 18,
          tag_id: "6753827140837310980",
          source_url: "/i6753827140837310980/",
          display_url: "http://toutiao.com/group/6753827140837310980/",
          is_stick: false,
          item_id: "6753827140837310980",
          repin_count: 1102,
          cell_flag: 262155,
          source_open_url: "sslocal://profile?uid=5744321132",
          level: 0,
          digg_count: 917,
          behot_time: 1573115460,
          hot: 0,
          cursor: 1573115460999,
          url: "http://toutiao.com/group/6753827140837310980/",
          image_url:
            "https://p3.pstatp.com/list/pgc-image/00afac7d17534b5f9d6fe807cbfe0ba7",
          user_repin: 0,
          has_image: true,
          video_style: 0,
          media_info: {
            avatar_url: "http://p1.pstatp.com/large/9501/7078032657",
            media_id: 5756505707,
            name: "光明日报",
            user_verified: true
          },
          group_id: "6753827140837310980"
        },
        {
          media_name: "人民日报海外网",
          ban_comment: 0,
          abstract:
            "来源:中国新闻网中新社北京11月6日电(李晗雪)6日，香港特别行政区行政长官林郑月娥在北京出席由国务院副总理韩正主持召开的粤港澳大湾区建设领导小组会议。领导小组会议后，林郑月娥于当日媒体见面会上介绍三类16项下一阶段将展开的普及惠民及便利香港专业界别到大湾区发展的政策措施。",
          image_list: [],
          datetime: "2019-11-07 16:34",
          article_type: 1,
          tag: "news_politics",
          has_m3u8_video: 0,
          display_dt: 1573105037,
          has_mp4_video: 0,
          aggr_type: 1,
          cell_type: 0,
          article_sub_type: 1,
          bury_count: 0,
          title: "林郑月娥北京记者会介绍十六项大湾区惠民措施",
          source_icon_style: 2,
          tip: 1,
          has_video: false,
          share_url:
            "http://m.toutiao.com/group/6756434690313290254/?app=news_article&is_hit_share_recommend=0",
          source: "人民日报海外网",
          comment_count: 4,
          article_url:
            "https://m.haiwainet.cn/ttc/3541068/2019/1107/content_31660153_1.html",
          publish_time: 1573105037,
          group_flags: 0,
          tag_id: "6756434690313290254",
          source_url: "/item/6756434690313290254/",
          display_url: "http://toutiao.com/group/6756434690313290254/",
          is_stick: false,
          item_id: "6756434690313290254",
          repin_count: 24,
          cell_flag: 262155,
          source_open_url: "sslocal://profile?uid=3242684112",
          level: 0,
          digg_count: 49,
          behot_time: 1573115665,
          hot: 1,
          cursor: 1573115665999,
          url:
            "https://m.haiwainet.cn/ttc/3541068/2019/1107/content_31660153_1.html",
          user_repin: 0,
          has_image: false,
          video_style: 0,
          media_info: {
            avatar_url:
              "http://p9.pstatp.com/large/pgc-image/6f7b7a71bcf84fd693c1dfe8f2ebd668",
            media_id: 3244931401,
            name: "人民日报海外网",
            user_verified: true
          },
          group_id: "6756434690313290254"
        },
        {
          media_name: "深蓝文化",
          ban_comment: 0,
          abstract:
            "和珅是清朝历史上有名的大贪官，乾隆帝驾崩没多久，嘉庆帝就软禁了他。在和珅遭到软禁之际，大学士朱珪、王杰等人也开始搜集和珅贪腐的证据，仅仅半个月，和珅就从一个一品大员沦落为囚徒。因为其贪污数额巨大，嘉庆帝遂趁机将其处死。",
          image_list: [],
          datetime: "2019-11-07 16:33",
          article_type: 0,
          tag: "news_history",
          has_m3u8_video: 0,
          display_dt: 1573055554,
          has_mp4_video: 0,
          aggr_type: 1,
          cell_type: 0,
          article_sub_type: 0,
          bury_count: 0,
          title: "乾隆死后不久，和珅被嘉庆处死，那嘉庆是怎么对待纪晓岚的呢？",
          source_icon_style: 4,
          tip: 0,
          has_video: false,
          share_url:
            "http://m.toutiao.com/a6756222161557389831/?app=news_article&is_hit_share_recommend=0",
          source: "深蓝文化",
          comment_count: 4,
          article_url: "http://toutiao.com/group/6756222161557389831/",
          publish_time: 1573055554,
          group_flags: 0,
          middle_mode: true,
          gallary_image_count: 5,
          tag_id: "6756222161557389831",
          source_url: "/i6756222161557389831/",
          display_url: "http://toutiao.com/group/6756222161557389831/",
          is_stick: false,
          item_id: "6756222161557389831",
          repin_count: 83,
          cell_flag: 262155,
          source_open_url: "sslocal://profile?uid=6673017768",
          level: 0,
          digg_count: 339,
          behot_time: 1573115633,
          hot: 0,
          cursor: 1573115633999,
          url: "http://toutiao.com/group/6756222161557389831/",
          image_url:
            "https://p3.pstatp.com/list/pgc-image/49a091e6a3984bac97db8e5124dbe870",
          user_repin: 0,
          has_image: true,
          video_style: 0,
          media_info: {
            avatar_url: "http://p2.pstatp.com/large/1dce001a0099a93dcc5d",
            media_id: 6673112351,
            name: "深蓝文化",
            user_verified: true
          },
          group_id: "6756222161557389831"
        },
        {
          media_name: "河青帮帮帮",
          ban_comment: 0,
          abstract:
            "前两天有微博网友说，在泰山顶上活捉了一枚外卖小哥。你没听错，真的是泰山顶碧霞祠！外卖小哥高先生为了送外卖，爬泰山上万层台阶，让不少网友表示：外卖小哥真是个人才，泰山顶上点的外卖你也敢接，太牛了！",
          image_list: [
            {
              url:
                "https://p3.pstatp.com/list/pgc-image/0547c96d264d4a7db3f92ca312dff123",
              width: 640,
              height: 360
            },
            {
              url:
                "https://p3.pstatp.com/list/pgc-image/8c59bdf4d51441209c3495394a8bdd48",
              width: 640,
              height: 360
            },
            {
              url:
                "https://p3.pstatp.com/list/pgc-image/74391b656fe0462194f0836b89043fc7",
              width: 640,
              height: 394
            }
          ],
          datetime: "2019-11-07 16:33",
          article_type: 0,
          more_mode: true,
          tag: "news_society",
          has_m3u8_video: 0,
          display_dt: 1572861473,
          has_mp4_video: 0,
          aggr_type: 1,
          cell_type: 0,
          article_sub_type: 0,
          bury_count: 0,
          title:
            "一个真敢点，一个真敢接！泰山顶上送外卖的小哥，有人找到了！顺便问了问配送费",
          source_icon_style: 1,
          tip: 0,
          has_video: false,
          share_url:
            "http://m.toutiao.com/a6755379640149213704/?app=news_article&is_hit_share_recommend=0",
          source: "河青帮帮帮",
          comment_count: 3325,
          article_url: "http://toutiao.com/group/6755379640149213704/",
          publish_time: 1572861473,
          group_flags: 0,
          gallary_image_count: 18,
          tag_id: "6755379640149213704",
          source_url: "/i6755379640149213704/",
          display_url: "http://toutiao.com/group/6755379640149213704/",
          is_stick: false,
          item_id: "6755379640149213704",
          repin_count: 2812,
          cell_flag: 262155,
          source_open_url: "sslocal://profile?uid=6428355439",
          level: 0,
          digg_count: 9544,
          behot_time: 1573115622,
          hot: 0,
          cursor: 1573115622999,
          url: "http://toutiao.com/group/6755379640149213704/",
          user_repin: 0,
          has_image: true,
          video_style: 0,
          media_info: {
            avatar_url: "http://p3.pstatp.com/large/411000c1e47c1ff422c",
            media_id: 6428355439,
            name: "河青帮帮帮",
            user_verified: true
          },
          group_id: "6755379640149213704"
        },
        {
          media_name: "仪陇手机台",
          ban_comment: 0,
          abstract:
            "随着网络的发展，不少“情书”、“信件”都流传了出来，尤其是一些小学生所写的“情书”更是为不少人所津津乐道。无他，小学生稚嫩的笔力与成熟的语句形成的反差萌，让不少人都忍俊不禁。材料中选择了北宋哲学家邵雍所作的一首诗《山村咏怀》，让学生们仿照类似格式，进行改写编纂。",
          image_list: [
            {
              url: "https://p3.pstatp.com/list/pgc-image/Rg567QmHxhVc0n",
              width: 619,
              height: 348
            },
            {
              url: "https://p3.pstatp.com/list/pgc-image/Rg567Rc8ZYogZY",
              width: 406,
              height: 228
            },
            {
              url: "https://p3.pstatp.com/list/pgc-image/Rh7crEuHOhI8bO",
              width: 442,
              height: 248
            }
          ],
          datetime: "2019-11-07 16:33",
          article_type: 0,
          more_mode: true,
          tag: "news_edu",
          has_m3u8_video: 0,
          display_dt: 1573112769,
          has_mp4_video: 0,
          aggr_type: 1,
          cell_type: 0,
          article_sub_type: 0,
          bury_count: 0,
          title: "小学生在作文上写情书，被评30分，没想到老师评语更出彩",
          source_icon_style: 1,
          tip: 0,
          has_video: false,
          share_url:
            "http://m.toutiao.com/group/6756467896383177223/?app=news_article&is_hit_share_recommend=0",
          source: "仪陇手机台",
          comment_count: 0,
          article_url:
            "http://weixin.121mai.com/index.php?g=Rss&m=Trans&a=view&id=cf99a883f6f44f25b49bce983acc6a22&mcnid=mcn000764",
          publish_time: 1573112769,
          group_flags: 0,
          gallary_image_count: 3,
          tag_id: "6756467896383177223",
          source_url: "/i6756467896383177223/",
          display_url: "http://toutiao.com/group/6756467896383177223/",
          is_stick: false,
          item_id: "6756467896383177223",
          repin_count: 0,
          cell_flag: 262155,
          source_open_url: "sslocal://profile?uid=3188224710425627",
          level: 0,
          digg_count: 0,
          behot_time: 1573115612,
          hot: 0,
          cursor: 1573115612999,
          url:
            "http://weixin.121mai.com/index.php?g=Rss&m=Trans&a=view&id=cf99a883f6f44f25b49bce983acc6a22&mcnid=mcn000764",
          user_repin: 0,
          has_image: true,
          video_style: 0,
          media_info: {
            avatar_url: "http://p3.pstatp.com/large/ff7b00004b9dc39f377a",
            media_id: 1632127929304075,
            name: "仪陇手机台",
            user_verified: true
          },
          group_id: "6756467896383177223"
        },
        {
          media_name: "39健康网",
          ban_comment: 0,
          abstract:
            "昨个儿吃饭，吃着吃着就说起哪家哪家亲戚，感染了螺旋杆菌。九妈听了很害怕：可不得了呢，听说会传染，还致癌的。你们可小心点，九九别老在外面吃东西。九爹大手一挥：别听他们说，得的人多了去了，怕什么？也没见个个都胃癌。",
          image_list: [],
          datetime: "2019-11-07 16:33",
          article_type: 0,
          tag: "news_health",
          has_m3u8_video: 0,
          display_dt: 1573036854,
          has_mp4_video: 0,
          aggr_type: 1,
          cell_type: 0,
          article_sub_type: 0,
          bury_count: 0,
          title: "医生：感染幽门螺杆菌，身体会有几个明显表现！早发现很幸运",
          source_icon_style: 5,
          tip: 0,
          has_video: false,
          share_url:
            "http://m.toutiao.com/a6756141846214214152/?app=news_article&is_hit_share_recommend=0",
          source: "39健康网",
          comment_count: 58,
          article_url: "http://toutiao.com/group/6756141846214214152/",
          publish_time: 1573036854,
          group_flags: 0,
          middle_mode: true,
          gallary_image_count: 15,
          tag_id: "6756141846214214152",
          source_url: "/i6756141846214214152/",
          display_url: "http://toutiao.com/group/6756141846214214152/",
          is_stick: false,
          item_id: "6756141846214214152",
          repin_count: 4846,
          cell_flag: 262155,
          source_open_url: "sslocal://profile?uid=3414105634",
          level: 0,
          digg_count: 2751,
          behot_time: 1573115601,
          hot: 0,
          cursor: 1573115601999,
          url: "http://toutiao.com/group/6756141846214214152/",
          image_url:
            "https://p3.pstatp.com/list/pgc-image/2173377ca65840df9c8cbd195108ffaf",
          user_repin: 0,
          has_image: true,
          video_style: 0,
          media_info: {
            avatar_url:
              "http://p3.pstatp.com/large/pgc-image/7e361166c67d40b0875c15a4a08d1727",
            media_id: 3430114949,
            name: "39健康网",
            user_verified: true
          },
          group_id: "6756141846214214152"
        }
      ]
    };
  },
  methods: {
    //查看更多
    loadMore() {
      let _ = this;
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.status == 200 && xhr.readyState == 4) {
          // console.log(JSON.parse(xhr.responseText))
          _.news = _.news.concat(JSON.parse(xhr.responseText));
        }
      };
      xhr.open("GET", "http://localhost:3000/news", true);
      xhr.send();
    },
    // created() {
    //   this.loadMore();
    // },
    // loadMore() {
    //    let _ = this;
    //   axios.get("/user?ID=12345");
    //   $.ajax({
    //     url: "http://localhost:3000/news",
    //     type: "GET",
    //     success(data) {
    //       _.news = _.news.concat(JSON.parse(data));
    //     }
    //   });
    // }
     //跳转详情页
    
    navToDetail(index){
      this.$router.push({
        // /detail/123?plan=private
        name:'detail',
        params:{id:index},
        query:{plan:'private'}
      })
      window.console.log(index)
    }
    
  }
};
</script>
<style>
</style>

