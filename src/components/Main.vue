<template>
  <main class="clearfix">
      <div class="container">
          <div class="film" v-for="(film,index) in filmlist" :key="index">
              <p> Title: {{film.title}}</p>
              <p> Original title: {{film.original_title}}</p>
              <p> Language: {{film.original_language}}</p>
              <p> Vote: {{film.vote_average}}</p>
             
          </div> 

      </div>

  </main>
</template>

<script>
export default {
  name: 'Main',
  props: ['filmlist']
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
        background-color: $white;
        margin: 5px;

    }
  

</style>
