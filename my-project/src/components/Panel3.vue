<template>
 <div class="weui-panel weui-panel_access">
    <!-- <div class="weui-panel__hd">图文组合列表</div> -->
    <div class="weui-panel__bd">
        <a v-for="(n,index) in news3" :key="index" href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
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
import "../assets/styles.scss";
export default {
  data() {
    return {
      news3: [
        {
          media_name: "娱乐EMBA",
          ban_comment: 0,
          abstract:
            "近日，金希澈在直播时被拍到有一只无毛猫在走动，这只不小心入镜的猫咪，身份引来很多网友的好奇。​有网友问金希澈，这只猫咪是什么来历，金希澈只回复网友说猫咪是秘密。不过，有网友根据猫咪耳朵的模样，推测可能是雪莉生前养的爱猫“布林”。",
          image_list: [
            {
              url:
                "https://p3.pstatp.com/list/pgc-image/01e6a7505dd24fc09e94211898630a32",
              width: 1024,
              height: 576
            },
            {
              url:
                "https://p3.pstatp.com/list/pgc-image/7b78146d55b94c638dfe6d58d2f33f5b",
              width: 569,
              height: 320
            },
            {
              url:
                "https://p3.pstatp.com/list/pgc-image/5c10462df7184d0893d609afeb8d90f5",
              width: 690,
              height: 388
            }
          ],
          datetime: "2019-11-07 15:14",
          article_type: 0,
          more_mode: true,
          tag: "news_pet",
          has_m3u8_video: 0,
          display_dt: 1573096350,
          has_mp4_video: 0,
          aggr_type: 1,
          cell_type: 0,
          article_sub_type: 0,
          bury_count: 0,
          title: "兄妹情深！金希澈疑似收养雪莉爱猫，网友：哥哥很了不起",
          source_icon_style: 2,
          tip: 0,
          has_video: false,
          share_url:
            "http://m.toutiao.com/a6756397379433284103/?app=news_article&is_hit_share_recommend=0",
          source: "娱乐EMBA",
          comment_count: 2,
          article_url: "http://toutiao.com/group/6756397379433284103/",
          publish_time: 1573096350,
          group_flags: 0,
          gallary_image_count: 18,
          action_extra: '{"channel_id": 3189398972}',
          tag_id: "6756397379433284103",
          source_url: "/i6756397379433284103/",
          display_url: "http://toutiao.com/group/6756397379433284103/",
          is_stick: false,
          item_id: "6756397379433284103",
          repin_count: 11,
          cell_flag: 262155,
          source_open_url: "sslocal://profile?uid=5935926261",
          level: 0,
          digg_count: 21,
          behot_time: 1573110862,
          hot: 0,
          cursor: 1573110862999,
          url: "http://toutiao.com/group/6756397379433284103/",
          user_repin: 0,
          has_image: true,
          video_style: 0,
          media_info: {
            avatar_url: "http://p2.pstatp.com/large/4d00022bd4b799e337",
            media_id: 5937632436,
            name: "娱乐EMBA",
            user_verified: true
          },
          group_id: "6756397379433284103"
        },
        {
          media_name: "洛玲娱乐说",
          ban_comment: 0,
          abstract:
            "吴京《战狼3》终于过审，演员阵容强大，票房稳了哈喽大家好，这里是洛玲。吴京这个钢铁直男肯定已经家喻户晓了，在拍摄《战狼》系列电影的时候就给观众留下了非常不错的印象。这部电影有着浓厚的军旅风情，也有着保家卫国的壮志豪情，让人看完电影后都久久不能平静。",
          image_list: [
            {
              url:
                "https://p3.pstatp.com/list/pgc-image/a31d7fc664a3438484c5cd43f819eeca",
              width: 973,
              height: 546
            },
            {
              url:
                "https://p3.pstatp.com/list/pgc-image/1047a5ba9cc44400a2f3f27789241c60",
              width: 975,
              height: 548
            },
            {
              url:
                "https://p3.pstatp.com/list/pgc-image/7757f25827104a9a9e6c80e39b27e3c1",
              width: 629,
              height: 335
            }
          ],
          datetime: "2019-11-07 15:09",
          article_type: 0,
          more_mode: true,
          tag: "news_entertainment",
          has_m3u8_video: 0,
          display_dt: 1573005468,
          has_mp4_video: 0,
          aggr_type: 1,
          cell_type: 0,
          article_sub_type: 0,
          bury_count: 0,
          title: "吴京《战狼3》终于过审，演员阵容强大，票房稳了",
          source_icon_style: 1,
          tip: 0,
          has_video: false,
          share_url:
            "http://m.toutiao.com/a6756007044588765700/?app=news_article&is_hit_share_recommend=0",
          source: "洛玲娱乐说",
          comment_count: 48,
          article_url: "http://toutiao.com/group/6756007044588765700/",
          publish_time: 1573005468,
          group_flags: 0,
          gallary_image_count: 4,
          action_extra: '{"channel_id": 3189398972}',
          tag_id: "6756007044588765700",
          source_url: "/i6756007044588765700/",
          display_url: "http://toutiao.com/group/6756007044588765700/",
          is_stick: false,
          item_id: "6756007044588765700",
          repin_count: 14,
          cell_flag: 262155,
          source_open_url: "sslocal://profile?uid=3425696440395438",
          level: 0,
          digg_count: 44,
          behot_time: 1573110562,
          hot: 0,
          cursor: 1573110562999,
          url: "http://toutiao.com/group/6756007044588765700/",
          user_repin: 0,
          has_image: true,
          video_style: 0,
          media_info: {
            avatar_url:
              "http://p9.pstatp.com/large/pgc-image/cedc48a6945e4ff8be3a5c9f764f6f39",
            media_id: 1643887947635715,
            name: "洛玲娱乐说",
            user_verified: true
          },
          group_id: "6756007044588765700"
        },
        {
          media_name: "易天vlog",
          ban_comment: 0,
          abstract:
            "这几年国内的综艺节目可以说是百花齐放，各大卫视都推出了自己的综艺节目，浙江卫视《奔跑吧》就深受观众的喜欢，每一季的收视率都非常高。",
          image_list: [
            {
              url:
                "https://p3.pstatp.com/list/pgc-image/667e5f236f4240e0bcdd80485081370c",
              width: 659,
              height: 370
            },
            {
              url:
                "https://p3.pstatp.com/list/pgc-image/20989cd3082840e4baa0abc63fd2feee",
              width: 644,
              height: 367
            },
            {
              url:
                "https://p3.pstatp.com/list/pgc-image/71eafe1c096f423fac0464bcf52a77ac",
              width: 874,
              height: 490
            }
          ],
          datetime: "2019-11-07 15:04",
          article_type: 0,
          more_mode: true,
          tag: "news_entertainment",
          has_m3u8_video: 0,
          keywords: "浙江卫视,代言人,奔跑吧,安慕希,邓超",
          display_dt: 1571407434,
          has_mp4_video: 0,
          aggr_type: 1,
          cell_type: 0,
          article_sub_type: 0,
          bury_count: 0,
          title: "邓超是《跑男》唯一不敢喝安慕希的人，官方：喝了就是天价罚款",
          source_icon_style: 6,
          tip: 0,
          has_video: false,
          share_url:
            "http://m.toutiao.com/a6749143538350424588/?app=news_article&is_hit_share_recommend=0",
          source: "易天vlog",
          comment_count: 84,
          article_url: "http://toutiao.com/group/6749143538350424588/",
          publish_time: 1571407434,
          group_flags: 0,
          gallary_image_count: 5,
          action_extra: '{"channel_id": 3189398972}',
          tag_id: "6749143538350424588",
          source_url: "/i6749143538350424588/",
          display_url: "http://toutiao.com/group/6749143538350424588/",
          is_stick: false,
          item_id: "6749143538350424588",
          repin_count: 117,
          cell_flag: 262155,
          source_open_url: "sslocal://profile?uid=110700826271",
          level: 0,
          digg_count: 417,
          behot_time: 1573110262,
          hot: 0,
          cursor: 1573110262999,
          url: "http://toutiao.com/group/6749143538350424588/",
          user_repin: 0,
          has_image: true,
          video_style: 0,
          media_info: {
            avatar_url: "http://p3.pstatp.com/large/ff8b0000401c311f72d3",
            media_id: 1639231387518987,
            name: "易天vlog",
            user_verified: false
          },
          group_id: "6749143538350424588"
        },
        {
          media_name: "豆嘟那些情感事",
          ban_comment: 0,
          abstract:
            "娱乐圈中向来有明星之间感情会非常好。例如杨幂和唐嫣，胡歌和霍建华等等。但除了这些外，还有很多在一起很尴尬的明星，他们都是谁呢？首先我们看到刘亦菲和王宝强两人。刘亦菲一身白色连衣裙，笑起来的样子十分温柔，整个人很有仙气，而王宝强则笑的十分憨厚，两人同框有些不搭。",
          image_list: [
            {
              url:
                "https://p3.pstatp.com/list/pgc-image/bd873330d5f64bd69902e947b4b355b4",
              width: 580,
              height: 298
            },
            {
              url:
                "https://p3.pstatp.com/list/dfic-imagehandler/7c12bcff-b6c5-440b-8775-8d601a55df17",
              width: 400,
              height: 220
            },
            {
              url:
                "https://p3.pstatp.com/list/pgc-image/cdb174db813e40c2b229cadd145f3791",
              width: 500,
              height: 298
            }
          ],
          datetime: "2019-11-07 14:59",
          article_type: 0,
          more_mode: true,
          tag: "news_entertainment",
          has_m3u8_video: 0,
          display_dt: 1572940229,
          has_mp4_video: 0,
          aggr_type: 1,
          cell_type: 0,
          article_sub_type: 0,
          bury_count: 0,
          title: "最尴尬的明星合影，看完之后，你觉得哪一组最尴尬？",
          source_icon_style: 4,
          tip: 0,
          has_video: false,
          share_url:
            "http://m.toutiao.com/a6755726845062169091/?app=news_article&is_hit_share_recommend=0",
          source: "豆嘟那些情感事",
          comment_count: 47,
          article_url: "http://toutiao.com/group/6755726845062169091/",
          publish_time: 1572940229,
          group_flags: 0,
          gallary_image_count: 6,
          action_extra: '{"channel_id": 3189398972}',
          tag_id: "6755726845062169091",
          source_url: "/i6755726845062169091/",
          display_url: "http://toutiao.com/group/6755726845062169091/",
          is_stick: false,
          item_id: "6755726845062169091",
          repin_count: 9,
          cell_flag: 262155,
          source_open_url: "sslocal://profile?uid=2897935136203996",
          level: 0,
          digg_count: 50,
          behot_time: 1573109962,
          hot: 0,
          cursor: 1573109962999,
          url: "http://toutiao.com/group/6755726845062169091/",
          user_repin: 0,
          has_image: true,
          video_style: 0,
          media_info: {
            avatar_url:
              "http://p1.pstatp.com/large/pgc-image/e99d2111c7a44ce69e787f06dc68ea81",
            media_id: 1645175896605707,
            name: "豆嘟那些情感事",
            user_verified: true
          },
          group_id: "6755726845062169091"
        },
        {
          media_name: "FashionWeek",
          ban_comment: 0,
          abstract:
            "叶童和赵雅芝版的《白娘子传奇》应该是很多网友的童年回忆，这部剧自从问世后，火爆程度可以说是前无古人后无来者，之后翻拍的很多个版本依然都无法超越，即使是剧中的歌曲也成为了大众随口都能哼上一两句的程度，而赵雅芝更是大众心目中对白娘子的完美诠释。",
          image_list: [
            {
              url:
                "https://p3.pstatp.com/list/pgc-image/1033969d2bd8482ab1a5913fe25a0ff3",
              width: 640,
              height: 360
            },
            {
              url:
                "https://p3.pstatp.com/list/pgc-image/63d6593952c6461b9dfef12758677827",
              width: 640,
              height: 360
            },
            {
              url:
                "https://p3.pstatp.com/list/pgc-image/f1363d42f01a454d9a4bf38c1addfa2f",
              width: 640,
              height: 360
            }
          ],
          datetime: "2019-11-07 14:54",
          article_type: 0,
          more_mode: true,
          tag: "news_entertainment",
          has_m3u8_video: 0,
          keywords: "白娘子,叶童,白娘子传奇,陈美琪,赵雅芝,许仙",
          display_dt: 1571283144,
          has_mp4_video: 0,
          aggr_type: 1,
          cell_type: 0,
          article_sub_type: 0,
          bury_count: 0,
          title: "56岁许仙与61岁小青再相遇，脸上皱纹显现，缺了白娘子赵雅芝",
          source_icon_style: 1,
          tip: 0,
          has_video: false,
          share_url:
            "http://m.toutiao.com/a6748593821157687816/?app=news_article&is_hit_share_recommend=0",
          source: "FashionWeek",
          comment_count: 220,
          article_url: "http://toutiao.com/group/6748593821157687816/",
          publish_time: 1571283144,
          group_flags: 0,
          gallary_image_count: 7,
          action_extra: '{"channel_id": 3189398972}',
          tag_id: "6748593821157687816",
          source_url: "/i6748593821157687816/",
          display_url: "http://toutiao.com/group/6748593821157687816/",
          is_stick: false,
          item_id: "6748593821157687816",
          repin_count: 788,
          cell_flag: 262155,
          source_open_url: "sslocal://profile?uid=3738539171",
          level: 0,
          digg_count: 4666,
          behot_time: 1573109662,
          hot: 0,
          cursor: 1573109662999,
          url: "http://toutiao.com/group/6748593821157687816/",
          user_repin: 0,
          has_image: true,
          video_style: 0,
          media_info: {
            avatar_url: "http://p3.pstatp.com/large/8893/8121972128",
            media_id: 5579525386,
            name: "FashionWeek",
            user_verified: true
          },
          group_id: "6748593821157687816"
        },
        {
          media_name: "娱乐秀666",
          ban_comment: 0,
          abstract:
            "近日，随着电视剧《光荣时代》中尚春芝的下线，作为扮演者的薛佳凝也是特意更博：尚春芝下线了，她把自己活成了秦招娣，她心里一定希望故事就在这一刻定格了。她得到了那个环境下最难得到的爱情。可是，这个故事的开始就注定了她会为此付出生命。",
          image_list: [
            {
              url:
                "https://p3.pstatp.com/list/pgc-image/950570acc9ab49ef933533e75350745e",
              width: 680,
              height: 444
            },
            {
              url:
                "https://p3.pstatp.com/list/pgc-image/5ef9cb74c8a441cb92f46949269c8539",
              width: 1600,
              height: 900
            },
            {
              url:
                "https://p3.pstatp.com/list/pgc-image/a1a8bb716456453684288c3dcdd83b48",
              width: 800,
              height: 514
            }
          ],
          datetime: "2019-11-07 14:49",
          article_type: 0,
          more_mode: true,
          tag: "news_entertainment",
          has_m3u8_video: 0,
          display_dt: 1573100494,
          has_mp4_video: 0,
          aggr_type: 1,
          cell_type: 0,
          article_sub_type: 0,
          bury_count: 0,
          title: "她是胡歌最知名前任，39岁皈依佛门，今41岁脸垮变老认不出",
          source_icon_style: 1,
          tip: 0,
          has_video: false,
          share_url:
            "http://m.toutiao.com/a6756415179057005069/?app=news_article&is_hit_share_recommend=0",
          source: "娱乐秀666",
          comment_count: 6,
          article_url: "http://toutiao.com/group/6756415179057005069/",
          publish_time: 1573100494,
          group_flags: 0,
          gallary_image_count: 29,
          action_extra: '{"channel_id": 3189398972}',
          tag_id: "6756415179057005069",
          source_url: "/i6756415179057005069/",
          display_url: "http://toutiao.com/group/6756415179057005069/",
          is_stick: false,
          item_id: "6756415179057005069",
          repin_count: 65,
          cell_flag: 262155,
          source_open_url: "sslocal://profile?uid=104375933781",
          level: 0,
          digg_count: 723,
          behot_time: 1573109362,
          hot: 0,
          cursor: 1573109362999,
          url: "http://toutiao.com/group/6756415179057005069/",
          user_repin: 0,
          has_image: true,
          video_style: 0,
          media_info: {
            avatar_url: "http://p1.pstatp.com/large/b76f000b52db82d00ec6",
            media_id: 1611368527405063,
            name: "娱乐秀666",
            user_verified: true
          },
          group_id: "6756415179057005069"
        },
        {
          media_name: "因为我是大白",
          ban_comment: 0,
          abstract:
            "大家好，我是大白，欢迎大家关注~对于一个明星来说，形象非常重要，现在连男明星都化妆了，女明星就更少以素颜出现在大众面前了。但是节目《口红王子》就是要求嘉宾素颜出场的。最近，何炅邀请了沈梦辰上节目 ，但是沈梦辰出场就已经化好妆了，这让何炅也调侃道沈梦辰开辟了本季节目的首个特例。",
          image_list: [
            {
              url:
                "https://p3.pstatp.com/list/pgc-image/f8feedd7d2e5473a8619ef5ab1397bf5",
              width: 534,
              height: 265
            },
            {
              url:
                "https://p3.pstatp.com/list/pgc-image/537828dc7ae4400babb07718455c2540",
              width: 954,
              height: 340
            },
            {
              url:
                "https://p3.pstatp.com/list/pgc-image/4c8e9b808ee041df8be997720ed8b56a",
              width: 529,
              height: 259
            }
          ],
          datetime: "2019-11-07 14:44",
          article_type: 0,
          more_mode: true,
          tag: "news_entertainment",
          has_m3u8_video: 0,
          display_dt: 1573027185,
          has_mp4_video: 0,
          aggr_type: 1,
          cell_type: 0,
          article_sub_type: 0,
          bury_count: 0,
          title: "沈梦辰节目卸妆，爆交往两年杜海涛才看到素颜，这不是挺好看的吗",
          source_icon_style: 4,
          tip: 0,
          has_video: false,
          share_url:
            "http://m.toutiao.com/a6756048095554830860/?app=news_article&is_hit_share_recommend=0",
          source: "因为我是大白",
          comment_count: 13,
          article_url: "http://toutiao.com/group/6756048095554830860/",
          publish_time: 1573027185,
          group_flags: 0,
          gallary_image_count: 8,
          action_extra: '{"channel_id": 3189398972}',
          tag_id: "6756048095554830860",
          source_url: "/i6756048095554830860/",
          display_url: "http://toutiao.com/group/6756048095554830860/",
          is_stick: false,
          item_id: "6756048095554830860",
          repin_count: 23,
          cell_flag: 262155,
          source_open_url: "sslocal://profile?uid=2905086092",
          level: 0,
          digg_count: 89,
          behot_time: 1573109062,
          hot: 0,
          cursor: 1573109062999,
          url: "http://toutiao.com/group/6756048095554830860/",
          user_repin: 0,
          has_image: true,
          video_style: 0,
          media_info: {
            avatar_url: "http://p7.pstatp.com/large/95ec0013e246634b369a",
            media_id: 1594926347771917,
            name: "因为我是大白",
            user_verified: true
          },
          group_id: "6756048095554830860"
        },
        {
          media_name: "全球娱乐一点通",
          ban_comment: 0,
          abstract:
            "随着现在社会的经济发展迅速起来了，不管是男孩子还是女孩子都希望自己的身高能够更高一点，身高高一点不仅穿衣服好看，而且也会看起来很瘦，所以不管是素人还是明星都会很在意自己的身高，特别是一些个子比较矮的女星，她们参加活动或者综艺恨不得踩着恨天高去参加，所以身高对于她们来说还是相当重要",
          image_list: [
            {
              url:
                "https://p3.pstatp.com/list/pgc-image/aff9d4c5088342c8be3b9cbd6d1f5049",
              width: 603,
              height: 339
            },
            {
              url:
                "https://p3.pstatp.com/list/pgc-image/56d9b2c6e256432294184a1074fe8782",
              width: 605,
              height: 340
            },
            {
              url:
                "https://p3.pstatp.com/list/pgc-image/93e167b7721c4a6b85f36af7a2f74829",
              width: 602,
              height: 338
            }
          ],
          datetime: "2019-11-07 14:39",
          article_type: 0,
          more_mode: true,
          tag: "news_entertainment",
          has_m3u8_video: 0,
          display_dt: 1573093620,
          has_mp4_video: 0,
          aggr_type: 1,
          cell_type: 0,
          article_sub_type: 0,
          bury_count: 0,
          title: "当1米59鞠婧祎撞上1米55郭敬明，网友：谁谎报身高，心里没点数吗",
          source_icon_style: 6,
          tip: 0,
          has_video: false,
          share_url:
            "http://m.toutiao.com/a6756215829634744844/?app=news_article&is_hit_share_recommend=0",
          source: "全球娱乐一点通",
          comment_count: 79,
          article_url: "http://toutiao.com/group/6756215829634744844/",
          publish_time: 1573093620,
          group_flags: 0,
          gallary_image_count: 5,
          action_extra: '{"channel_id": 3189398972}',
          tag_id: "6756215829634744844",
          source_url: "/i6756215829634744844/",
          display_url: "http://toutiao.com/group/6756215829634744844/",
          is_stick: false,
          item_id: "6756215829634744844",
          repin_count: 51,
          cell_flag: 262155,
          source_open_url: "sslocal://profile?uid=593353875930839",
          level: 0,
          digg_count: 186,
          behot_time: 1573108762,
          hot: 0,
          cursor: 1573108762999,
          url: "http://toutiao.com/group/6756215829634744844/",
          user_repin: 0,
          has_image: true,
          video_style: 0,
          media_info: {
            avatar_url:
              "http://p1.pstatp.com/large/pgc-image/ae4aa3f335544f65b3302169900a3eec",
            media_id: 1649072119139335,
            name: "全球娱乐一点通",
            user_verified: true
          },
          group_id: "6756215829634744844"
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
          _.news3 = _.news3.concat(JSON.parse(xhr.responseText));
        }
      };
      xhr.open("GET", "http://localhost:3000/news2", true);
      xhr.send();
    }
  }
};
</script>

<style>
</style>