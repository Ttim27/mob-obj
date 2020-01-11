<template>
	<div class="find-cell clear">
		<img :src="$baseUrl + data.banner"/>
		<a href="#">
			<h4>{{data.title}}</h4>
			<b>{{data.p}}</b>
		</a>
	</div>
</template>

<script>
  export default {
    data(){return {}},
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
    mounted(){},
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
.find-cell{margin-top:.05rem;}
.find-cell img{display:block;width:2rem;height:1rem;float:left;border:.01rem solid #bcc4c6;margin-right:.31rem;}
.find-cell a{float:left;width:7.13rem;background: bottom repeat-x;height:2.25rem;overflow:hidden;}
.find-cell a h4{font:.48rem/.96rem "";color:#383838;}
.find-cell a b{font:.28rem/.48rem "";color:#b6b6b6;}
</style>
