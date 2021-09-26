<template>
  <main class="clearfix">
      <div class="container">
          <div class="film" v-for="(film,index) in filmlist" :key="index">
              <p> Title: {{film.title}}</p>
              <p> Original title: {{film.original_title}}</p>
              <p class="language d-flex-align-center"> Language: 
                  <country-flag :country='showLang(film.original_language)' size='normal'/>
              </p>
              <p> Vote: {{film.vote_average}}</p>
             
          </div> 

      </div>

  </main>
</template>

<script>
import CountryFlag from 'vue-country-flag';

export default {
  name: 'Main',
  props: ['filmlist'],
  components: {
      CountryFlag
  },
  methods: {
      showLang(lang) {
          if(lang == 'de') return 'de'
          else if (lang == 'en')  return 'gb'
          else if (lang == 'ja')  return 'jp'
          else return lang

      }
  }
}
</script>

<style lang="scss">
@import '../style/general.scss';

    main {
        background-color: $greysh;
        width: 100vw;
        height: calc(100vh - 100px);
        
    }
    .film {
        background-color: $light-greysh;
        margin: 5px;
        
       


    }
  

</style>
