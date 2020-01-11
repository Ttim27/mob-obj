<template>
  <div class="home">
	<Header title='首页'/>
	<Banner :data="banner" dataName="banner" />

	<div class="nav">
		<Nav v-for = 'n in 8' :key='n'/>
	</div>

		<Cell  :isJump="false" />

  </div>

</template>

<script>

	import Banner from "@/components/banner.vue"
	import Nav from "../components/xt-nav.vue"
	import Cell from "@/components/Cell.vue"
	import Header from "@/components/Header.vue"
	
  export default {
    name:'home',
    data(){
      return {
				list:[],
        banner:[]
      }
    },
    components:{
		Header,Banner,Nav,Cell
	},
    mounted(){
      this.$axios({
        url:'/api/column',
        params:{_page:1,_limit:3}
      }).then(
        res=>this.banner=res.data.data
      )
    },
    updated(){

    },
    methods:{
			getDetail(){
			  this.isJump && this.$router.push('/detail/'+this.data._id+'?dataName='+this.dataName)
			}
		}
  }
</script>

<style>
	.nav{background:#f8f8f8;padding-top:.41rem;
		display:flex;justify-content:space-around;flex-flow: row wrap;}
</style>
