<template>

        <div class="card-container">
            <div class="card" >
                    <!-- FRONT -->
                    <div class="front">
                        <img v-if="(film.poster_path != null)" :src="imgUrl + film.poster_path" alt="">
                        <img v-else class="error" src="https://www.simonefinotti.com/wp-content/uploads/2016/05/error-404.jpg" alt="">
                    </div>
                    <!-- BACK -->
                    <div class=" back">
                        <p> <b>Title:</b> {{film.title}}</p>
                        <p> <b>Original Title:</b> {{film.original_title}}</p>
                        <p class="language d-flex-align-center"> 
                            <b>Language:</b><country-flag :country='showLang(film.original_language)' size='normal'/>
                        </p>
                        <p> <b>Storyline:</b> {{film.overview}}</p>
                        <p> <b>Vote:</b> 
                            <fa icon="star" v-for="(i, index) in 5" :class="getStarsActive  (film.vote_average,i)" :key="index"/>
                        </p>

                    </div>
              
            </div>
                
        </div> 
</template>

<script>
import CountryFlag from 'vue-country-flag';


export default {
    name: 'Film',
    props: ['film', 'imgUrl'],
    components: {
      CountryFlag,
     
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
      getImg(path) {
          let imgUrl = imgUrl+path
          return imgUrl
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