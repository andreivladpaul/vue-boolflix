<template>
            
          <div class="card" >
              
              <img v-if="src !='https://www.themoviedb.org/t/p/w342null'" :src="imgUrl + film.poster_path" alt="">

                <div class="info" v-else>
                    <p> <b>Title:</b> {{film.title}}</p>
                    <p> <b>Original Title:</b>: {{film.original_title}}</p>
                    <p class="language d-flex-align-center"> 
                        <b>Language:</b><country-flag :country='showLang(film.original_language)' size='normal'/>
                    </p>
                    <p> <b>Vote:</b> {{film.vote_average}}</p>
                </div>
              
             
          </div> 
</template>

<script>
import CountryFlag from 'vue-country-flag';

export default {
  name: 'Film',
  props: ['film', 'imgUrl'],
  components: {
      CountryFlag
  },
  methods: {
      showLang(lang) {
          if(lang == 'de') return 'de'
          else if (lang == 'en')  return 'gb'
          else if (lang == 'ja')  return 'jp'
          else return lang

      },
      getImg(path) {
          let imgUrl = imgUrl+path
          return imgUrl
      }
  }
}
</script>

<style lang="scss">
@import '../style/card.scss';

</style>