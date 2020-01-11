<template>
	<div class="header">
        <p class="header__p--title">{{title}}</p>
    </div>
</template>

<script>
	export default {
	  data(){return {}},
	  props:{
	    title:{
	      type:String,
	      default:'标题'
	    }
	  },
	  components:{},
	  mounted(){},
	  updated(){},
	  methods:{}
	}
</script>

<style>
	.header{height:1.36rem;font:.38rem/1.36rem "";position:fixed;left:0;right:0;top:0;z-index:10;padding:0 .24rem;background:#00a4c0;}
	.header__p--title{color:#fff;text-align:center;}
</style>
