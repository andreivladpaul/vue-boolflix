<template>
  <div id="app">
    <!-- <button @click="getFilmAfter">film</button> -->
    <Header @getName="getName"
            @getFilmList="getFilmAfter"                  
    />
    
    <Main :filmlist="filmList" 
          :serielist="serieList" 
          :discoverlist="discoverList"
          :discoverserie="discoverSerie"
          :inputText="inputText" 
    />
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
      discoverList: [],
      discoverSerie: [],
      discoverApi: 'https://api.themoviedb.org/3/discover/movie?api_key=5587cb1bcc9fd429c2444a268e12bd61&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=free',
      discoverSerieApi: 'https://api.themoviedb.org/3/discover/tv?api_key=5587cb1bcc9fd429c2444a268e12bd61&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=free',
      APIUrl: '',
      filmList: [],
      serieList: [],
      inputText:'',
      apiURL: 'https://api.themoviedb.org/3/search/',
      apiMovie: 'movie',
      apiSerie: 'tv',
      apiKeyQuery:'?api_key=5587cb1bcc9fd429c2444a268e12bd61&query=',
    }
  },
  created() {
    this.discoverFilm();
    this.discoverSerieList()
  },
  
  methods:{
    discoverFilm() {
      axios
        .get(this.discoverApi)
          .then(res=>{ this.discoverList = res.data.results;})
    },
    discoverSerieList() {
      axios
        .get(this.discoverSerieApi)
          .then(res=>{ this.discoverSerie = res.data.results;})
    },

    getFilmAfter(){
      setTimeout(this.getFilm,10)
      setTimeout(this.getSerie,10)
    },
    getFilm(){
      this.APIUrl = this.apiURL + this.apiMovie + this.apiKeyQuery + this.inputText;

      axios
        .get(this.APIUrl)
          .then(res=>{ this.filmList = res.data.results;})
    },

    getSerie() {
      this.APIUrl = this.apiURL + this.apiSerie + this.apiKeyQuery + this.inputText;

      axios
        .get(this.APIUrl)
          .then(res=>{ this.serieList = res.data.results;})
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
