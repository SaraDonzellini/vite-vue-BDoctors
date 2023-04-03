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

body {
  font-family: 'Work Sans', sans-serif;
}

.secondary-text-color {
  font-weight: bold;
  color: $primary-color;
}

.my-btn {
  text-decoration: none;
  border-radius: 25px;
  color: $secondary-text-color;
  background-color: $secondary-color;
  padding: .5rem 1rem;
  transition: .25s;
  border: 0px;

  &:hover {
    background-color: $secondary-variant-color;
    color: $secondary-text-color;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
}
</style>
