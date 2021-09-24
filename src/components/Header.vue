<template>
  <header class="d-center">
    <div class="container d-center-header">
        <!----------- LOGO----- -->
      <div class="logo">
        <p>BOOLFLIX</p>
      </div>
      <!----------- SEARCH----- -->
      <div class="search">
        <input type="text" placeholder="Search films" v-model="inputText">
        <button class="btn-search" @click="getName" @click.prevent="getFilmList">
          Search
        </button>
      </div>
    </div>
    

  </header>
</template>

<script>
export default {
  name: 'Header',
  props: [
    
  ],
  data() {
    return {
      inputText:'',
    }
  },
  methods: {
    getName() {
      this.$emit('getName',this.inputText.toLowerCase())

    },
    getFilmList() {
      this.$emit('getFilmList')
    },
  }
}
</script>

<style lang="scss">
@import '../style/general.scss';

  header {
    width: 100vw;
    height: 100px;
    background-color: #000;

    .logo {
      p {
        color: $red;
        font-weight: bold;
        font-size: 40px;
      }
    }
    button {
      background-color: $red;
      color: $white;
      border: none;
      padding: 5px;
      cursor: pointer;
    }
  }
  input {
    border: none;
    padding: 5px;
  }

</style>
