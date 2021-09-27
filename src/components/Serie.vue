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
                          <p> <b>Original Title:</b> {{serie.original_name}}</p>
                          <p class="language d-flex-align-center"> 
                              <b>Language:</b><country-flag :country='showLang(serie.original_language)' size='normal'/>
                          </p>
                          <p> <b>Storyline:</b> {{serie.overview}}</p>
                          <p> <b>Vote:</b>
                            <fa icon="star" v-for="(i, index) in 5" :class="getStarsActive (serie.vote_average,i)" :key="index"/>
                          </p>

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
         
      }
  },
  methods: {
      showLang(lang) {
          if(lang == 'de') return 'de'
          else if (lang == 'en')  return 'gb'
          else if (lang == 'ja')  return 'jp'
          else return lang
      },
      getStarsActive(vote,n){
            vote = parseInt(vote);
            vote = Math.ceil(vote / 2);
            if(n <= vote) return "yellow";
            return "standard"
        }
  }
}
</script>

<style lang="scss">
@import '../style/card.scss';


</style>