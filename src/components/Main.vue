<template>
  <main class="clearfix">
      <div class="container ">
          <!-- FILMS -->
          <div class="films">
                <h1>Film</h1>
                <div v-if="(inputText == '')" class="film-section">
                    <li class="film " v-for="(film,index) in discoverlist" :key="index">
                        <Film :film="film" :imgUrl="imgUrl" />
                    </li>   
                </div>

                <div v-else class="film-section">
                    <li class="film " v-for="(film,index) in filmlist" :key="index">
                        <Film :film="film" :imgUrl="imgUrl" />
                    </li>   
                </div>
          </div>
            <!-- SERIE -->
          <div class="series">
                <h1>TV Series</h1>
                <div class="serie-section">
                    <li class="film " v-for="(serie,index) in discoverserie" :key="index">
                        <Serie :serie="serie" :imgUrl="imgUrl"  />
                    </li>
                </div>

                <div class="serie-section">
                    <li class="film " v-for="(serie,index) in serielist" :key="index">
                        <Serie :serie="serie" :imgUrl="imgUrl"  />
                    </li>
                </div>
                
          </div>
      </div>

  </main>
</template>

<script>
import Film from './Film.vue'
import Serie from './Serie.vue'

export default {
  name: 'Main',
  props: ['filmlist', 'serielist', 'discoverlist','inputText', 'discoverserie'],
  components: {
     Film,
     Serie
  },
  data() {
      return {
          imgUrl:'https://www.themoviedb.org/t/p/w342'
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

        
        .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            

            .films, 
            .series {
                text-align: center;

                h1 {
                color: $red;
                margin: 20px 0 ;
                }
            }
            .film-section, .serie-section {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
        }
            
        }

        .film {
            list-style: none;
        }
        
    }
    
  

</style>
