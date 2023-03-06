<template>
  <div class="app">
    <HeroPage/>
  </div>
</template>

<script>
  import HeroPage from "./components/HeroPage.vue"

  export default {
    name: "App",
    components: {
      HeroPage,

    }
  }
</script>
<style>
html, body {
  font-family: "Outfit", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 2rem;
  margin: 0 auto;
  background-color: rgb(196, 237, 250);
  display: flex;
  text-align: center;
  align-items: center;
}
/* @media (max-width: 678px){
  html, body {
  display: flex;
  text-align: center;
  align-items: center;
  padding: 2.1rem;
  margin: 0;
  }
} */
</style>
