<script>

export default {
    name: 'HomeDocCard',
    data() {
        return {
            doctors: [],
            averageVoteCard: null,
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
            this.averageVoteCard = Math.ceil(sum / array.length);
            console.log(`Media voti doctor Card ${this.averageVoteCard}`)
            this.$emit('findVote', this.averageVoteCard);
            return this.averageVoteCard
        },
    },
    props: {
        'doctor': {
            type: Object,
            required: true,
        },
        'review': {
            type: Object,
            required: true,
        },
        'isShow': {
            type: Boolean,
            required: false,
            default: false,
        }
    },
    created() {
        this.averageByKey(this.review, "vote")
    },
}
</script>

<template>
    <article class="card col-12 shadow-lg my-card">
        <router-link :to="{ name: 'doctor', params: { id: doctor.id } }">

            <!-- Doctor's photo
            <div class="d-flex justify-content-center mb-4">
                <img :src="`http://127.0.0.1:8000/storage/${doctor.photo}`" :alt="doctor.user.name" class="doctor-photo">
            </div> -->

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
                        Media voti: {{ averageVoteCard }}
                    </p>

                </div>

                <p v-for="(specialization, index) in doctor.specializations" :key="index">
                    {{ specialization.title }}
                </p>

                <p>
                    {{ doctor.performance }}
                </p>

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
    background-color: $background-color;
    padding: 3rem;
    // .doctor-photo {
    //     border-radius: 50%;
    //     width: 125px;
    //     height: 125px;
    //     object-fit: cover;
    // }
}
</style>

