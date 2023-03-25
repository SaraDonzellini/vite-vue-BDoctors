<script>
// import { store } from '../store';

export default {
    name: 'PageDoctors',
    data() {
        return {
            // store,
            doctors: [],
        }
    },
    props: {
        'doctor': {
            type: Object,
            required: false,
        },
        // 'isShow':{
        //     type: Boolean,
        //     required: false,
        //     default: false,
        // }
    }
}
</script>

<template>
    <article id="doctor-profile" class="card col-12 col-md-6 col-lg-3 mb-5 shadow rounded-lg my-card">

        <!-- Doctor's photo -->
        <div class="d-flex justify-content-center">
            <img :src="doctor.photo" :alt="doctor.user.name" class="img-fluid">
        </div>

        <!-- Doctor's infos -->
        <div class="p-4">
            <h5>
                {{ doctor.user.name }} {{ doctor.user.surname }}
            </h5>

            <p v-for="(specialization, index) in doctor.specializations" :key="index">
                {{ specialization.title }}
            </p>
            <p>
                {{ doctor.performance }}
            </p>
            <div class="dash-bio">
                Biografia: {{ doctor.bio }}
            </div>

            <!-- v-if="!isShow" questa andrebbe nel router link -->
            <router-link class="btn btn-primary" :to="{ name: 'doctor', params: { id: doctor.id } }">
                Vai al profilo
            </router-link>
        </div>
    </article>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;
</style>



