<template>
  <div class="user">
	<div class="user__header">
		<img src="../assets/img/xiaomi.png" class="header__img--head" />
		<p>昵称</p>
		<router-link tag="i" to="/login">登陆</router-link> | <router-link tag="i" to="/reg">注册</router-link>
		<p class="header__p--mysql">我的动态 <span>0</span> | 我的粉丝 <span>0</span></p>
	</div>
	<div class="nav">
		<Nav v-for = ' n in 4'/>
	</div>
	<h3 class="user__h3--title">更多操作</h3>
	<ul class="user__ul-more">
		<li>目标设定</li>
		<li>亲友</li>
		<li>我的订单</li>
		<li>行为标注</li>
		<li>第三方接入</li>
		<li>意见反馈</li>
		<li>设置</li>
	</ul>
  </div>
</template>

<script>
	import Nav from "../components/xt-nav.vue"
  export default {
    data(){return {}},
    components:{
		Nav
	},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
	.nav{background:#f8f8f8;padding-top:.41rem;
		display:flex;justify-content:space-around;flex-flow: row wrap;}
	.user{font:.2rem/2 "";background-color: #f8f8f8;}
	.user__header{text-align:center;font:.2rem/2 "";padding: 1rem 0 .5rem;}
	.header__img--head{border-radius: 50%;width:2rem;height:2rem;}
	.user__h3--title{font:900 .4rem/4 "";padding-left: .7rem;border-bottom: .01rem #999 solid;border-top: .01rem #999 solid;}
	.user__ul-more{margin-top: .5rem;}
	.user__ul-more li{margin:0 .5rem .5rem .7rem;}
</style>
