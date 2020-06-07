<!-- header 中的主文件 -->
<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar" :gutter="10">
      <el-col :span="3" class="left">
        <img
          src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png"
          alt=""
        />
      </el-col>
      <el-col :span="21" class="center">
        <div class="wrapper">
          <el-input
            v-model="searchContent"
            placeholder="搜索商家或地点"
            @focus="focus"
            @blur="outFocus"
            @input="input"
          ></el-input>
          <el-button type="primary"><i class="el-icon-search"></i></el-button>
          <dl v-if="isHotPlace" class="hotPlace">
            <dt>热门搜索</dt>
            <dd>火锅</dd>
            <dd>火锅</dd>
            <dd>火锅</dd>
            <dd>火锅</dd>
            <dd>火锅</dd>
          </dl>
          <dl v-else-if="isSearchList" class="searchList">
            <dd>火锅底料</dd>
            <dd>火锅底料</dd>
            <dd>火锅底料</dd>
            <dd>火锅底料</dd>
            <dd>火锅底料</dd>
            <dd>火锅底料</dd>
          </dl>
        </div>
        <p class="suggest">
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
        </p>
        <ul class="nav">
          <li>
            <nuxt-link class="takeout" to="/">美团外卖</nuxt-link>
          </li>
          <li>
            <nuxt-link class="apartment" to="/">猫眼电影</nuxt-link>
          </li>
          <li>
            <nuxt-link class="business" to="/">美团酒店</nuxt-link>
          </li>
          <li>
            <nuxt-link class="apartment" to="/">民宿 / 公寓</nuxt-link>
          </li>
          <li>
            <nuxt-link class="business" to="/">商家入驻</nuxt-link>
          </li>
          <li>
            <nuxt-link class="apartment" to="/">美团公益</nuxt-link>
          </li>
        </ul>
      </el-col>
      <!-- <el-col :span="6" class="right">
        <ur class="security">
          <li class="refund">
            <p class="txt">随时退</p>
          </li>
          <li class="single">
            <p class="txt">不满意免单</p>
          </li>
          <li class="overdue">
            <p class="txt">过期退</p>
          </li>
        </ur>
      </el-col>-->
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'index',
  components: {},
  props: {},
  data() {
    return {
      // 搜索框的值
      searchContent: '',
      // input 聚焦状态
      isFocus: false
    }
  },
  computed: {
    isHotPlace() {
      return this.isFocus && !this.searchContent
    },
    isSearchList() {
      return this.isFocus && this.searchContent
    }
  },
  watch: {},
  created() {},
  mounted() {

  },
  methods: {
    /**
     * @author: WangXinYu
     * @describe: 获得焦点
     * @param: {}
     * @return:
     **/
    focus() {
      this.isFocus = true
    },
    /**
    * @author: WangXinYu
    * @describe: 失去焦点
    * @param: {}
    * @return:
    **/
    outFocus() {
      setTimeout(()=> {
        this.isFocus = false
      },300)
    },
    /**
    * @author: WangXinYu
    * @describe: input事件
    * @param: {}
    * @return: 
    **/
    input() {
      console.log('input')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/public/header/searchbar.scss';
</style>
