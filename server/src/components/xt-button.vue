<template>

		<input class="login-btn" type="button" :value="text" />

</template>

<script>
  export default {
    data(){return {}},
    props:{
      text:{
        type:String,
        default:'按 钮'
      }
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
	.login-btn{width:9.6rem;height:1.22rem;border-radius:.55rem;background:#32b4ff;color:#fff;font:.42rem/1.22rem "";border-color:#83a8bb;margin-top:1.55rem;}
</style>
