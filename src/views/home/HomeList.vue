<template>

  <div class="tab-content">
    <div class="page n-hot active" data-hot=".n-hot" data-cid="c_dmLad">
      <div class="list-wrap" style="margin-top: 0px;">
        <div v-if = "movies">
          <home-item :data = "item" v-for = "item in movies.movieList" :key = "item.id"></home-item>
        </div>
      </div>
    </div>
  </div>

</template>


<script>
import HomeItem from './HomeItem'
import BScroll from 'better-scroll'
import _ from 'loadsh'
import { mapActions } from 'vuex'
export default {
    components: {
    HomeItem
  },
  props:['movies'],
    
//   mounted(){
//     // console.log('movies')
    
// }
  methods:{

  ...mapActions(['getComingMovies'])
  },
  mounted () {
    let count  = 0
    // 上拉开关,true或对象
     const bs = new BScroll('.page',{
       pullUpLoad:{
         threshold:30
       }
     })


     bs.on('pullingUp',()=>{
       const movieIds = this.movies.movieIds.slice(10)
       const ids = _.chunk(movieIds,10)
       if(count == ids.length){
         console.log('已经没有数据了')
         return
       }
        if(count < ids.length){
        this.getComingMovies(ids[count].join(','))


        }

       console.log(ids[count])
       count ++
      //  拉动结束，重复触发
       bs.finishPullUp()

     })

  }
}

</script>

<style lang="stylus" scoped>
  .tab-content 
    height 100% 
    .page 
        height 100% 
</style>


