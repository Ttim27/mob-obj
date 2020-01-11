<template>
	<div class="mima">
		<input type="text" placeholder="账号"/>
		<input type="password" placeholder="密码"/>
		<a href="#">
			<img src="../assets/img/yanjing.png"/>
		</a>
	</div>
</template>

<script>
	export default {
	  data(){return {}},
	  components:{},
	  mounted(){},
	  updated(){},
	  methods:{}
	}
</script>

<style scoped>

	.mima{position:relative;}
	.mima input{width:9.6rem;height:1.17rem;background:#fff;border-color:#666;font:.44rem/1.17rem "";color:#9a9a9a;margin-bottom:.03rem;padding-left:.34rem;}
	.mima input:nth-child(1){border-radius:.42rem .42rem 0 0;}
	.mima input:nth-child(2){border-radius:0 0 .42rem .42rem;}
	
	.mima a{display:block;position:absolute;right:.3rem;bottom:.4rem;}
	.mima img{display:block;width:.6rem;height:.36rem;padding-right: .4rem;}
</style>