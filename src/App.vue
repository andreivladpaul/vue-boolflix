<template>
  <div id="app">
    <!-- <button @click="getFilmAfter">film</button> -->
    <Header @getName="getName"
            @getFilmList="getFilmAfter"
                          
    />
    
    <Main :filmlist="filmList" 
          :serielist="serieList" 
          
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
      APIUrl: '',
      filmList: [],
      serieList: [],
      inputText:'',
      apiURL: 'https://api.themoviedb.org/3/search/',
      apiMovie: 'movie',
      apiSerie: 'tv',
      apiKeyQuery:'?api_key=5587cb1bcc9fd429c2444a268e12bd61&query='
      
    }
  },
  
  methods:{

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
