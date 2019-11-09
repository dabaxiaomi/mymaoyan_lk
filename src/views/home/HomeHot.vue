<template>
  <div>
    <HomeList :movies="movies">
      
    </HomeList>
  </div>
</template>

<script>
import { mapState,mapActions, mapMutations } from 'vuex'
import HomeList from './HomeList'
import BScroll from 'better-scroll'
export default {
  components:{
    HomeList
  },

  mounted(){
    // console.log(this.getMovies())
    // console.log( this.$store)
    this.getMovies()
    new BScroll('.page')


// console.log(mapActions)
  },
  methods:{
   ...mapActions(['getMovies','getComingMovies'])
  },
  computed:{
    // movies(){
    //   return this.$store.state.home.movies
    // },
    // 快速遍历得到数据
    ...mapState({
      movies: state => state.home.movies,
      name: state => state.home.name 
    })
  }

}
</script>>
<style lang="stylus" scoped>
  div
    flex 1 
    overflow hidden
</style>

