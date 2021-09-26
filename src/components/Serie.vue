<template>
            
          <div class="card" >
              
              <p> <b>Title:</b> {{serie.name}}</p>
              <p> <b>Original Title:</b>: {{serie.original_name}}</p>
              <p class="language d-flex-align-center"> 
                  <b>Language:</b><country-flag :country='showLang(serie.original_language)' size='normal'/>
              </p>
              <p> <b>Vote:</b> {{serie.vote_average}}</p>
             
          </div> 
</template>

<script>
import CountryFlag from 'vue-country-flag';

export default {
  name: 'Serie',
  props: ['serie'],
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


</style>