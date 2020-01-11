<template>
	<div class="cell" @click="getDetail">
		<h3>活动</h3>
		<router-link
				v-for="(item,index) of list"
				:key="item._id"
				:to="`/detail/${item._id}?dataName=cell`"
			>
			<a href="#">
				<img :src="$baseUrl + item.banner"/>
			</a>
			<a href="#" class="clear">
				<p>{{item.title}}</p>
				<span>剩余89天1小时</span>
			</a>
		</router-link>
	</div>
</template>

<script>
	export default {
		name:'cell',
	  data(){return {
			list:[]
		}},
		props:{
		  data:{
		    type:Object,
		    default:function(){
		      return {}
		    }
		  },
		  dataName:{
		    type:String,
		    default:null
		  },
		  index:{
		    type:Number,
		    default:null
		  },
		  isJump:{
		    type:Boolean,
		    default:true
		  }
		},
	  components:{},
	  mounted(){
			this.$axios({
			  url:'/api/home',
			  params:{_page:1,_limit:10}
			}).then(
			  res=>this.list=res.data.data
			)
		},
	  updated(){},
	  methods:{
	    getDetail(){
	      //                            '/detail/234234234?dataName=home'
	      this.isJump && this.$router.push('/detail/'+this.data._id+'?dataName='+this.dataName)
	    }
		}
	}
</script>

<style scoped>
	.cell{background:#f8f8f8;background:url(../assets/img/bgt1.png) top repeat-x;margin:0 .24rem 1.64rem;}
	.cell h3{font:.32rem/3 "";color:#7d7d7d;padding-top:.08rem;}
	.cell a{display:block;}
	.cell a img{display:block;width:10.3rem;height:3.56rem;border:.01rem solid #b4c9ce;}
	.cell a p{font:.32rem/.92rem "";color:#4c4c4c;float:left;}
	.cell a span{font:.32rem/.92rem "";color:#b1b1b1;float:right;}
</style>
