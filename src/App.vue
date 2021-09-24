<template>
  <div id="app">
    <Header />
    <Main />
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
      APIUrl: ''
    }
  },
  created(){
    this.getFilm();
  },
  methods:{
    getFilm(){
      axios.get(this.APIUrl).then(ris=>{
        this.disclist = ris.data.response;
        
      })
    }
 /*  methods: {
    get
  } */
}
}
</script>

<style lang="scss">

#app {
  width: 100vw;
  height: 100vh;

}
</style>
