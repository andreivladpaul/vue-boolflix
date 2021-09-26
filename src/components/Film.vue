<template>
            
          <div class="card" >
              
              <p> <b>Title:</b> {{film.title}}</p>
              <p> <b>Original Title:</b>: {{film.original_title}}</p>
              <p class="language d-flex-align-center"> 
                  <b>Language:</b><country-flag :country='showLang(film.original_language)' size='normal'/>
              </p>
              <p> <b>Vote:</b> {{film.vote_average}}</p>
             
          </div> 
</template>

<script>
import CountryFlag from 'vue-country-flag';

export default {
  name: 'Film',
  props: ['film'],
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
@import '../style/card.scss';

    .film {
        background-color: $light-greysh;
        margin: 5px;
        float: left;
        width: 300px;
        height: 400px;
        
       


    }
  

</style>