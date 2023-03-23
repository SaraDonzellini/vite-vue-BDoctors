<script>
import { store } from '../store';

export default {
  name: 'PageDoctors',
  components: {
    
  },
  data() {
    return {
      store,
    }
  },
}
</script>

<template>
  <div class="container">
    <div v-for="element in store.doctorsList" class="text-danger">
      <h1>{{ element.user.name }}</h1>
      <h1>{{ element.user.surname }}</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as * ;
</style>



