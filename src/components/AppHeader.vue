<script>
import { store } from '../store.js'
import selectNav from './SelectNav.vue'

export default {
  name: 'AppHeader',
  components: {
    selectNav,
  },
  data() {
    return {
      store,
      selectOutput:""
    }
  },
  methods: {},
  created() {},
}
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-bg navbar-dark bg-nav">
      <div class="container ">
        <div class="logo">
          <h3>Logo</h3>
        </div>

        <selectNav />

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse flex-grow-0" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link :to="{ name: 'home' }" :class="this.$route.name == 'home' ? 'active' : ''">
                Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'doctors' }" :class="this.$route.name == 'doctors' ? 'active' : ''">
                Dottori
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

li {
  list-style-type: none;
  margin-left: 1rem;

  a {
    text-decoration: none;
    color: white;
  }
}

.active {
  color: $primary-text-color;
}

select{
  width: 300px;
}

.bg-nav {
  background-color: $primary-bg-color ;
  height: 10vh;
}

img {
  width: 250px;
}

.logo {
  color: $primary-text-color;
}
</style>
