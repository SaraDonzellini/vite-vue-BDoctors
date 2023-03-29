<script>

export default {
    name: 'PageDoctors',
    data() {
        return {
            doctors: [],
            numReviews: null,
        }
    },

    methods: {
        getStars(voteStar) {
            let stars = '';
            for (let i = 0; i < voteStar; i++) {
                stars += '*';
            }
            return stars;

        },

    },
    props: {
        'doctor': {
            type: Object,
            required: true,
        },
        'isShow': {
            type: Boolean,
            required: false,
            default: false,
        }
    }
}
</script>

<template>
    <article class="card col-12 col-md-5 col-lg-3 shadow-lg my-card">
        <router-link :to="{ name: 'doctor', params: { id: doctor.id } }">

            <!-- Doctor's photo -->
            <div class="doctor-image d-flex justify-content-center mb-4">
                <img :src="`http://127.0.0.1:8000/storage/${doctor.photo}`" :alt="doctor.user.name"
                    class="doctor-photo img-fluid">
            </div>

            <!-- Doctor's infos -->
            <div class="doctor-info text-center">
                <h5>
                    {{ doctor.user.name }} {{ doctor.user.surname }}
                </h5>

                <!--Reviews-->
                <div class="reviews">
                    <p>
                        N° Recensioni: {{ doctor.user.reviews.length }}
                    </p>

                    <p v-for="voteStar in doctor.user.reviews">
                        Media voti: {{ getStars(voteStar.vote) }}
                    </p>

                </div>

                <p v-for="(specialization, index) in doctor.specializations" :key="index">
                    {{ specialization.title }}
                </p>

                <p>
                    {{ doctor.performance }}
                </p>
                <!-- <div class="dash-bio text-start">
                                    Biografia: {{ doctor.bio.substr(0, 140) }}...
                                </div> -->

            </div>
        </router-link>
    </article>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

a {
    color: $secondary-color;
    text-decoration: none;
}

a:hover {
    color: $primary-text-color;
}

.my-card {
    border-radius: 25px;
    border-width: 0 !important;
    background-color: $secondary-text-color !important;
    padding: 0;
    backdrop-filter: blur(50px);
    overflow: hidden;

    .doctor-photo {
        object-fit: cover;
        width: 100%;
    }

    .doctor-info {
        padding: 2rem;
    }
}
</style>

