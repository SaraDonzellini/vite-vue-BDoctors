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
            required: true,
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
    <section id="doctor-profiles" class="d-flex justify-content-center flex-wrap">

        <div class="card col-12 col-md-6 col-lg-7 mb-5 bg-white shadow rounded-lg my-card">

            <!-- Doctor's photo -->
            <div class="d-flex justify-content-center">
                <img :src="doctor.photo" :alt="doctor.user.name">
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
                <router-link v-if="!isShow" class="btn btn-primary" :to="{ name: 'doctor', params: { id: doctor.id } }">
                    Vai al profilo
                </router-link>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;
</style>



