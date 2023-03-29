<script>

export default {
    name: 'PageDoctors',
    data() {
        return {
            doctors: [],
            averageVoteCard
        }
    },

    methods: {
        averageByKey(array, key) {
            if (!array || array.length === 0 || !key) {
                return 0;
            }
            const sum = array.reduce((acc, obj) => {
                return acc + obj[key];
            }, 0);
            this.averageVote = Math.ceil(sum / array.length);
            console.log(this.averageVote)
            return this.averageVoteCard
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
        },
    }
}
</script>

<template>
    <article class="card col-12 col-md-5 col-lg-3 shadow-lg my-card">
        <router-link :to="{ name: 'doctor', params: { id: doctor.id } }">

            <!-- Doctor's photo -->
            <div class="d-flex justify-content-center mb-4">
                <img :src="`http://127.0.0.1:8000/storage/${doctor.photo}`" :alt="doctor.user.name" class="doctor-photo">
            </div>

            <!-- Doctor's infos -->
            <div class="text-center">
                <h5>
                    {{ doctor.user.name }} {{ doctor.user.surname }}
                </h5>

                <!--Reviews-->
                <div class="reviews">
                    <p>
                        N° Recensioni: {{ doctor.user.reviews.length }}
                    </p>

                    <p>
                        Media voti: 
                    </p>

                </div>

                <p v-for="(specialization, index) in doctor.specializations" :key="index">
                    {{ specialization.title }}
                </p>

                <p>
                    {{ doctor.performance }}
                </p>
                <div class="dash-bio text-start">
                    Biografia: {{ doctor.bio.substr(0, 140) }}...
                </div>

            </div>
        </router-link>
    </article>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

a {
    color: $pine-green;
    text-decoration: none;
}

a:hover {
    color: $primary-text-color;
}

.my-card {
    border-radius: 25px;
    border-width: 0 !important;
    background-color: $secondary-text-color !important;
    padding: 3rem;
    backdrop-filter: blur(50px);

    .doctor-photo {
        border-radius: 50%;
        width: 125px;
        height: 125px;
        object-fit: cover;
    }
}
</style>

