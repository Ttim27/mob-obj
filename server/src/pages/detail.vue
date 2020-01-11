<template>
  <div class="detail">
    <h3 class="detail__h3">DETAIL</h3>
	<img src="/images/banner.png" class="detail__img"/>
	<div class="clear">
		<p class="detail__p--author">非酋</p>
		<p class="detail__p--time">2020年1月1日17:23:35</p>
	</div>
	<p class="detail__p--cont">三言财经1月1日消息，今日，滴滴出行、小桔车服发布公告，宣布滴滴出行将从1月9日零点起至1月16日零点，暂停全国范围内的新司机注册审核工作，以完善平台规则杜绝漏洞。期间新司机可以提交注册资料，平台将从1月16日零点起恢复审核。</p>
  </div>
</template>

<script>
  export default {
    name:'detail',
    data() {
      return {
        detail:{}
      }
    },
    components: {
    },
    /* filters:{
      date(data){
        return '过滤后的时间'
      }
    }, */
    mounted() {
      this.$axios({
        url: '/api/' + this.$route.query.dataName + '/' + this.$route.params._id,
      }).then(
        res => this.detail = res.data.data
      )
    },
    updated(){
		},
    methods: {}

  }
</script>

<style scoped="scoped">
  .detail__h3{font: .4rem/3 "";text-align: center;}
  .detail__img{width:100%;height:4.31rem;}
  .detail__p--author{font: .3rem/2 "";float: left;}
  .detail__p--time{font: .3rem/2 "";color: #999;float: right;}
  .detail__p--cont{font: .4rem/2 "";text-indent: 2em;}
  
</style>
