<template>
  <header class="d-center">
    <div class="container d-center-header">
        <!----------- LOGO----- -->
      <div class="logo">
        <p>BOOLFLIX</p>
      </div>
      <!----------- SEARCH----- -->
      <div class="search">
        <input type="text" placeholder="Search films">
        <button class="btn-search">
          Search
        </button>
      </div>
    </div>
    

  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    
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
    }
  }
  input {
    border: none;
    padding: 5px;
  }

</style>
