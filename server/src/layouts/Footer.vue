<template>
	<div class="footer">
		<router-link class="home" tag="a" to="/home" active-class="home_active">
			<i class="a__i--i1"></i>
			<span class="a__span--title">首页</span>
		</router-link>
		<router-link class="find" tag="a" to="/find" active-class="find_active">
			<i class="a__i--i2"></i>
			<span class="a__span--title">发现</span>
		</router-link>
		<router-link class="user" tag="a" to="/user" active-class="user_active">
			<i class="a__i--i4"></i>
			<span class="a__span--title">我的</span>
		</router-link>
	</div>
</template>

<script>
</script>

<style scoped>
	.footer{height:1.64rem;background:#fff;border-top:.01rem solid #e4e4e4;position:fixed;left:0;right:0;bottom:0;display:flex;justify-content:space-around;}
	.footer a{text-align:center;margin-top:.34rem;}
	.footer a i{display:block;width:.57rem;height:.57rem;background:url(../assets/img/t1.png) no-repeat;background-size:1.14rem 1.14rem;margin:0 auto;position:relative;}
	.a__i--i2{background-position:0 -.57rem;}
	.a__i--i3{background-position:0 -.57rem;}
	.a__i--i4{background-position:0 -.57rem;}
	.home_active .a__i--i1{background-position:-.57rem 0;}
	.find_active .a__i--i2{background-position:-.57rem 0;}
	.user_active .a__i--i4{background-position:-.57rem 0;}
	.a__span--title{font:.3rem/1.5 "";color:#6a6a6a;display:block;}
</style>
