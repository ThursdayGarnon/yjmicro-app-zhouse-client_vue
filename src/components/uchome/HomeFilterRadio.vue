<template>
  <div class="home_filterRadio">
    <van-radio-group v-model="radio" direction="horizontal">
      <van-radio
          v-for="(key,value) in radioList"
          v-bind:class="{'radio_active__st':key.id === 'all'}"
          :key="value"
          :name="value"
          @click="clickRadio(key,value)">{{ key.name }}
      </van-radio>
      <div class="option">
        <div class="item filter_icon">
          <img src="../../assets/img/uchome/icon_sx.png"/>
        </div>
        <div class="item map_icon">
          <img src="../../assets/img/uchome/icon_dt.png"/>
        </div>
      </div>
    </van-radio-group>
  </div>
</template>

<script>
import {getCateGoryList} from "@/api/uchome";

export default {
  name: "HomeFilterRadio",
  data() {
    return {
      radio: '0',
      radioList: [],
      radioListIndex: [],
    }
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      getCateGoryList().then((data) => {
        console.log(data)
        data.unshift({
          id: 'all',
          name: '全部'
        });
        this.radioList = data;
      }).catch(() => {
      })
    },
    clickRadio(key, value) {
      this.radioList[0].id = '';
      this.radio = value;
      console.log(this.radio)
    }
  }
}
</script>

<style lang="scss" scoped>
.home_filterRadio {
  padding: 10px 20px;
  background: #fff;
  ::v-deep .van-radio-group--horizontal{position: relative}
  ::v-deep .van-radio__icon{display:none;opacity:0}
  ::v-deep .van-radio span{height:30px;border-radius:15px;display:flex;align-items:center;justify-content:center;padding:0 10px;margin-left:0px}
  ::v-deep .van-radio:nth-child(1) span{}
  ::v-deep .van-radio[aria-checked="false"] span{border-color:#EEEEEE;color:#333333;background-color:#EEEEEE;transition:all .3s}
  ::v-deep .van-radio[aria-checked="true"] span{border-color:rgb(0,0,0);color:rgb(255,255,255);background-color:rgb(0,0,0);transition:all .3s}
  ::v-deep .radio_active__st .van-radio__label{border-color:rgb(0,0,0) !important;color:rgb(255,255,255) !important;background-color:rgb(0,0,0) !important;transition:all 0.3s}
  .option{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    .item{
      display: inline-block;
      img{width: 20px;height: 20px;display: block}
    }
    .item:nth-child(1){margin-right: 23px;}
  }
}
</style>
