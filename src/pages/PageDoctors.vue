<script>
import DoctorCard from '../components/DoctorCard.vue';

import { store } from '../store';

export default {
  name: 'PageDoctors',
  components: {
    DoctorCard,
  },
  data() {
    return {
      store,
    }
  },
}
</script>

<template>
  <DoctorCard />
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;
</style>



