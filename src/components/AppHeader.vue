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

      <div class="d-flex align-items-center">
        <a class="navbar-brand">
          <img src="../assets/Doctor-logo.png" class="img-fluid" alt="" width="40">
        </a>
        <h2 class="text-logo mb-0">Bdoctors</h2>
      </div>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls=" navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto align-middle">

          <li class="nav-link d-flex flex-column text-center align-self-center">
            <router-link :to="{ name: 'home' }" :class="this.$route.name == 'home' ? 'active' : ''">
              Home
            </router-link>
          </li>

          <li class="nav-link d-flex flex-column text-center align-self-center">
            <router-link :to="{ name: 'doctors' }" :class="this.$route.name == 'doctors' ? 'active' : ''">
              Dottori
            </router-link>
          </li>

          <li class="nav-link flex-column text-center me-3">
            <a class="my-btn" href="http://127.0.0.1:8000/register">
              Sei un dottore? Registrati!
            </a>
          </li>

        </ul>
      </div>

    </div>
  </nav>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

a.my-btn {
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

li {
  list-style-type: none;

  a {
    text-decoration: none;
    color: white;
    transition: border-bottom-color 1s ease-in-out;
  }
}

.active {
  color: $secondary-color;
  text-decoration: none;
  border-bottom: 2px solid $secondary-color;
  transition: color 1.2s ease-in-out, border-bottom-color 1s ease-in-out;
}

.active:hover {
  color: $secondary-variant-color;
  border-bottom-color: $secondary-variant-color ;
}

select {
  width: 300px;
}

.bg-nav {
  background-color: $primary-color;
  backdrop-filter: blur(50px);

}

.navbar {
  min-height: 10vh;
}

.text-logo {
  color: $secondary-color;
}
</style>
