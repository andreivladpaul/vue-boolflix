<template>
          <div class="card-container">
                <div class="card" >
                    <!-- FRONT -->
                    <div class="front">
                        <img v-if="(serie.poster_path != null)" :src="imgUrl + serie.poster_path" alt="" >
                        <img v-else class="error" src="https://www.simonefinotti.com/wp-content/uploads/2016/05/error-404.jpg" alt="">
                    </div>
                    
                    <!-- BACK -->
                    <div class=" back">
                          <p> <b>Title:</b> {{serie.name}}</p>
                          <p> <b>Original Title:</b>: {{serie.original_name}}</p>
                          <p class="language d-flex-align-center"> 
                              <b>Language:</b><country-flag :country='showLang(serie.original_language)' size='normal'/>
                          </p>
                          <p> <b>Storyline:</b> {{serie.overview}}</p>
                          <p> <b>Vote:</b> {{serie.vote_average}}</p>

                    </div>
             
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
  data() {
      return {
          noPath: 'https://www.themoviedb.org/t/p/w342null'
      }
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