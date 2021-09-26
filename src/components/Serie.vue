<template>
            
          <div class="card" >

              <img :src="imgUrl + serie.poster_path" alt="" v-if="src !='https://www.themoviedb.org/t/p/w342null'">
              
              <div class="info" v-else>
                    <p> <b>Title:</b> {{serie.name}}</p>
                    <p> <b>Original Title:</b>: {{serie.original_name}}</p>
                    <p class="language d-flex-align-center"> 
                        <b>Language:</b><country-flag :country='showLang(serie.original_language)' size='normal'/>
                    </p>
                    <p> <b>Vote:</b> {{serie.vote_average}}</p>

                </div>
             
          </div> 
</template>

<script>
import CountryFlag from 'vue-country-flag';

export default {
  name: 'Serie',
  props: ['serie', 'imgUrl'],
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