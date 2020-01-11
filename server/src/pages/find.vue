<template>
  <div class="find">
    <div id="sport">
		<Header title='发现'/>

		<a href="#" class="clear"><p>阿速达东方人同意通过身份大热天</p><span>剩余89天1小时</span></a>
		<img src="/images/banner.png"/>
		<a href="#" class="clear"><p>阿速达东方人同意通过身份大热天</p><span>剩余89天1小时</span></a>

        <div class="more">更多</div>
    </div>
    <div id="kong"></div>
    <div id="ganhuo" class="clear">
        <h3>干货</h3>
<!-- 		<router-link
		  v-for="n of 8"
		  :key="n"
		  :to="`/detail/n`"
		> -->
			<find-cell
				v-for="(item,index) of list"
				:key="item._id"
				:data="item"
				:data-name="'column'"
			 />
		<!-- </router-link> -->
    </div>
  </div>
</template>

<script>
	import FindCell from "@/components/find-cell.vue"
	import Header from "@/components/Header.vue"
  export default {
    name:'column',
    data(){
		return {
      list:[]
	  }
    },
    components:{
		"Header":Header,
		"find-cell":FindCell
	},
    mounted(){
      this.$axios({
        url:'/api/column',
        params:{_page:1,_limit:8}
      }).then(
        res=>this.list=res.data.data
      )
    },
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  #sport{margin:0 .24rem;background:#f8f8f8;margin-top:1.36rem;}
  #sport a{display:block;overflow:hidden;font:.32rem/.74rem "";}
  #sport a p{color:#383838;float:left;}
  #sport a span{color:#afafaf;float:right;}
  #sport img{width:10.3rem;heighr:3.56rem;display:block;border:.01rem solid #bcc4c6;margin:.23rem 0 .09rem 0;}
  #sport .more{font:.34rem/1.24rem "";color:#343434;text-align:center;border:.01rem solid #e2e2e2;margin:.29rem 0 .39rem 0;}
  
  #kong{height:.2rem;background:#eee;}
  
  #ganhuo{background:#f8f8f8;margin-bottom:1.64rem;}
  #ganhuo h3{font:.32rem/1.14rem "";color:#7d7d7d;}

</style>
