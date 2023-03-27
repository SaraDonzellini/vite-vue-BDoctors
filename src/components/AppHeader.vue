<script>
export default {
  name: 'AppHeader',
  components: {
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-md navbar-bg navbar-dark fixed-top shadow-lg bg-nav">
    <div class="container">

      <a class="navbar-brand">
        <img src="../assets/Doctor-logo.png" class="img-fluid" alt="" width="40">
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls=" navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto">
          <li class="nav-item d-flex flex-column text-center me-3">
            <router-link :to="{ name: 'home' }" :class="this.$route.name == 'home' ? 'active' : ''">
              Home
            </router-link>
          </li>
          <li class="nav-item d-flex flex-column text-center me-3">
            <router-link :to="{ name: 'doctors' }" :class="this.$route.name == 'doctors' ? 'active' : ''">
              Dottori
            </router-link>
          </li>
        </ul>
      </div>

    </div>
  </nav>
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

select {
  width: 300px;
}

.bg-nav {
  background-color: $primary-bg-color;
  backdrop-filter: blur(50px);

}

.navbar {
  min-height: 10vh;
}
</style>
