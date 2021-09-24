<template>
  <div id="app">
    <!-- <button @click="getFilmAfter">film</button> -->
    <Header @getName="getName"
            @getFilmList="getFilmAfter"
            
                    
    />
    
    <Main :filmlist="filmList" />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Header, Main,
  },
  data() {
    return {
      APIUrl: '',
      filmList: [],
      inputText:'',
    }
  },
  
  methods:{

    getFilmAfter(){
      setTimeout(this.getFilm,10)
    },
    getFilm(){
      this.APIUrl = 'https://api.themoviedb.org/3/search/movie?api_key=5587cb1bcc9fd429c2444a268e12bd61&query=' + this.inputText;

      axios
        .get(this.APIUrl)
          .then(res=>{ this.filmList = res.data.results;})
    },
    getName(filmName){
      this.inputText=filmName
    }
}
}
</script>

<style lang="scss">

#app {
  width: 100vw;
  height: 100vh;

}
</style>
