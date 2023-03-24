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
    <section id="doctor-profiles" class="d-flex justify-content-center flex-wrap">

        <div v-for="element in store.doctorsList"
            class="card col-12 col-md-6 col-lg-7 mb-5 bg-white shadow rounded-lg my-card">

            <!-- Doctor's photo -->
            <div class="d-flex justify-content-center">
                <img :src="element.photo" :alt="element.user.name">
            </div>

            <!-- Doctor's infos -->
            <div class="p-4">
                <h5>
                    {{ element.user.name }} {{ element.user.surname }}
                </h5>

                <p v-for="(specialization, index) in specializations" :key="index">
                    {{ specialization.title }}
                </p>
                <p>
                    {{ element.performance }}
                </p>
                <div class="dash-bio">
                    Biografia: {{ element.bio }}
                </div>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;
</style>



