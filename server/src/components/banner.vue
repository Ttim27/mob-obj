<template>
  <div class="banner">
    <ul>
		<router-link
		  v-for="(item,index) of data"  
		  :key="item._id"
		  :to="{path:'/detail/'+item._id+'?dataName='+dataName}"
		  tag="li"
		>
			<img :src="$baseUrl + item.banner" alt=""/>
		</router-link>
	</ul>
  </div>
</template>

<script>
	import $ from 'jquery';
	import Swipe from "../assets/js/swipe.js";
	
	export default{
		data(){return{}},
		props:['data','dataName'],
		components:{},
    // updated(){},
    methods:{},
    updated(){
      // console.log('mounted banner');
      new Swipe($('.banner')[0],{
        auto:2000,
        continuous:true,
        stopPropation:true,
        callback:function (index,element){
          $('.banner ol li').removeClass('active');
          $('.banner ol li').eq(index).addClass('active');
        }
      })
    }
	}
</script>

<style scoped>
  .banner{margin-top:1.36rem;position: relative;overflow: hidden; z-index: 1}
  li{height:4.31rem;float:left;position: relative;}
  img{width:100%;height:4.31rem; display:block;}
  
</style>
