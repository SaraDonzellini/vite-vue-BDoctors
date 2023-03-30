<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';


export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  data() {
    return {
    }
  },

  methods: {
  },

  created() {

  }

}
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <main>
    <AppMain />
  </main>
  <footer>
    <AppFooter />
  </footer>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;
@use 'bootstrap/scss/bootstrap' as *;

main {
  margin-top: 10vh;
}

/* .my-btn {
  border-radius: 15px;
  background-color: $primary-color;
  text-decoration: none;
  color: $primary-text-color;
  padding: .5rem 1rem;
  font-weight: bold;
} */

body{
    font-family: 'Work Sans', sans-serif;
}

</style>
