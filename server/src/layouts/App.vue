<template>
	<div id="app">
		<!-- <Header/> -->
		<router-view></router-view>
		<Footer/>
	</div>
</template>

<script>

	import Home from "../pages/home.vue"
	import Footer from "./Footer.vue"
	
	export default{
		name:'App',
		components:{
			Home,
			Footer
		},
		mounted(){

		},
		updated(){

		},
		methods:{}
	}

</script>

<style>
</style>
