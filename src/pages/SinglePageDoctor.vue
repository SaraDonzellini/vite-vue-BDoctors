<script>
// import { store } from '../store';
import axios from 'axios';

import SinglePageDash from './single-page-partials/SinglePageDash.vue';
import SinglePageInfo from './single-page-partials/SinglePageInfo.vue';

export default {
  name: 'SinglePageDoctor',
  components: {
    SinglePageDash,
    SinglePageInfo,
  },
  data() {
    return {
      // store,
      doctor: null,
      review: [],
      reviewsCount: null,
    }
  },
  methods: {
    getDoctor() {
      axios.get(`http://127.0.0.1:8000/api/doctor/${this.$route.params.id}`, {
        params: {

        }
      })
        .then((response) => {
          // console.log(response.data.response);
          this.doctor = (response.data.doctor);
          this.review = response.data.reviews;
          this.reviewsCount = response.data.reviews.length;
          console.log(response.data.reviews.length)
        })
        .catch(function (error) {
          console.warn(error);
        });
    },
  },
  created() {
    this.getDoctor();
  }
}
</script>

<template>
  <div class="wallpaper w-100 h-100 pt-5">
    <div class="container card-doctor">
      <SinglePageInfo :doctor="doctor" :review="review" :reviewsCount="reviewsCount" />
      <SinglePageDash :doctor="doctor" :review="review" />
    </div>
  </div>
</template>

<style lang="scss" >
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

.wallpaper {
  background-image: url('../../public/imgs/Bg-image.jpg');
  background-size: cover;
  background-position: center;

  .card-doctor {
    border-radius: 20px;
    background-color: white;
    width: 100%;
  }
}
</style>



