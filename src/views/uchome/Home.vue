<template>
  <div>
    <div class="home_page">
      <div class="section1">
        <van-swipe class="my-swipe"
                   indicator-color="white"
                   :loop="false"
        >
          <van-swipe-item v-for="(val,key) in swiperData" :key="key" @click="linkWeb(val.link)">
            <img :src="val.imgUrl"/>
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="section2">
        <div class="title">
          <span class="title_name">热门商圈</span>
          <div class="near">
            <span class="nearby">附近</span>
            <span class="nearby_name">红星美凯龙</span>
          </div>
        </div>
        <ul>
          <div class="arrow">
            <span>更多</span>
            <van-icon name="arrow"/>
          </div>
          <li v-for="(val,key) in BusinessCircle" :key="key">
            <img :src="val.imagePath"/>
          </li>
        </ul>
      </div>
      <div class="section3">
        <HomeFilterRadio></HomeFilterRadio>
        <van-list
            v-model="loading"
            :finished="finished"
            :immediate-check="false"
            :offset="10"
            finished-text="没有更多了"
            @load="onLoad">
          <ul class="van-clearfix">
            <li v-for="item in itemList" :key="item.key">
              <div class="item_img">
                <img class="house_img"
                     :src="item.imagePath"/>
                <div class="bride_vr">VR</div>
                <div class="bride_eye">
                  <span>{{ item.visitNum || 0 }}</span>
                </div>
              </div>
              <div class="item_content">
                <div class="u_title">
                  <span class="u_name">{{ item.name }}</span>
                </div>
                <div class="subTitle">{{ item.parentName }}
                  <span class="distance">{{ item.distance }}</span>
                </div>
              </div>
            </li>
          </ul>
        </van-list>
      </div>
    </div>
    <TabBar/>
  </div>
</template>

<script>

import {getBannerList} from "@/api/uchome";
import {getSearchForH5} from "@/api/uchome";
import TabBar from '@/components/uchome/TabBar'
import HomeFilterRadio from '@/components/uchome/HomeFilterRadio'

export default {
  name: "uchome_Home",
  data() {
    return {
      active: 0,
      swiperData: [],
      BusinessCircle: [],

      // 下拉刷新
      loading: false,
      finished: false,
      offset: 0,//请求第几页
      pageSize: 5,//每页请求的数量
      total: 0,//总共的数据条数
      itemList: [],
    };
  },
  components: {
    TabBar,
    HomeFilterRadio
  },
  create() {
  },
  mounted() {
    this.initData();
    this.getroadList();
  },
  methods: {
    initData() {
      getBannerList({
        condition: {
          homeCityId: '3502',
          homeAreaId: '35026',
        },
        fetchSize: 6,}).then((data) => {this.swiperData = data.data.list}).catch(() => {})
      getSearchForH5({
            condition: {
              cityId: '3502',
              areaId: '',
              platformType: 'SQPT',
              // lng: this.lng, // 经纬度
              // lat: this.lat  // 经纬度
            },
            order: 'order by a.distance asc, a.seq_num desc,a.visit_num desc, a.create_time desc',
            fetchSize: 3, offset: 0}).then((data) => {this.BusinessCircle = data.data.list})
    },
    getroadList() {
      console.log('传递pageSize'+this.pageSize);
      console.log('传递offset'+this.offset);
      let params = {
        condition: {
          cityId: '3502',
          areaId: '',
          platformType: 'SJPT',
          // lng: this.lng, // 经纬度
          // lat: this.lat  // 经纬度
        },
        fetchSize: this.pageSize, offset: this.offset
      }
      getSearchForH5(params)
          .then((data) => {
            let rows = data.data.list; //请求返回当页的列表
            console.log(rows.length)
            // console.log(rows.length)
            this.loading = false;
            this.total = data.data.total;
            if (rows == null || rows.length === 0) {
              // 加载结束
              this.finished = true;
              return;
            }
            this.offset = this.offset + rows.length
            // 将新数据与老数据进行合并
            this.itemList = this.itemList.concat(rows);
            //如果列表数据条数>=总条数，不再触发滚动加载
            if (this.offset >= this.total) {
              this.finished = true;
            }
          })
          .catch((error) => {
            console.log(error)
          })
    },
    //滚动加载时触发，list组件定义的方法
    onLoad() {
      this.getroadList();
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/css/uchome/home.scss";
</style>
