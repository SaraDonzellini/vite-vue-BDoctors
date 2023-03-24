<script>
import { store } from '../store';
import AppHeader from '../components/AppHeader.vue';
import PageSpecDoctor from '../pages/PageSpecDoctor.vue';
import CallsApi from '../components/CallsApi.vue';

export default {
  name: 'PageHome',
  components: {
    AppHeader,
    PageSpecDoctor,
    CallsApi,

  },
    data() {
        return {
            store,
        }
    },
    
}

</script>

<template>
    <div class="container mt-4">
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4">
          <AppHeader @changeType="doctorsSelect"/>
        </div>
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4 text-dark">
          <PageSpecDoctor/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

</style>
