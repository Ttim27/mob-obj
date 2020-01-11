<template>
  <div class="login">
    <a href="#" class="ma">
		<img src="../assets/img/ma.png"/>
	</a>
    <div class="logo">
		<img src="../assets/img/xiaomi.png"/>
	</div>
    <p class="p1">使用小米账号登录<b>小米运动</b></p>
	<div class="iput">
		<xt-input/>
	</div>
	<div class="iput">
		<xt-button text="立即登录"/>
	</div>
    <div class="tishi">
        <router-link tag="a" to="/reg">注册小米账号</router-link><span>|</span><a href="#">忘记密码</a>
    </div>
  </div>
</template>

<script>
	import XtInput from "../components/xt-input.vue"
	import XtButton from "../components/xt-button.vue"
	
  export default {
    data(){return {}},
    components:{
		"xt-input":XtInput,
		"xt-button":XtButton
	},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>

  .login{margin-top: 3rem;}
  .iput{text-align:center;}
  a.ma{display:block;position:absolute;right:0;top:0;}
  a.ma img{width:2.07rem;height:2.07rem;}
  .logo{width:1.47rem;height:1.44rem;margin:0 auto;margin-top:1.2rem;}
  .logo img{width:100%;height:100%;display:block;}
  .p1{font:.3rem/2rem "";color:#424242;text-align:center;}
  .p1 b{color:#ff7400;}
  .tishi{text-align:center;font:.38rem/3 "";margin-top:1.7rem;}
  .tishi a{color:#777;margin-top:0.2rem;}
  .tishi span{color:#e0e0e0;margin:0 .44rem 0 .32rem;}
</style>
