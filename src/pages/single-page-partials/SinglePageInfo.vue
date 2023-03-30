<script>

export default {
    name: 'SinglePageInfo',
    data() {
        return {
            fullStars: [],
            emptyStars: [],
            averageVote: null,
        }
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
        reviewsCount: Number,
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
            //console.log(this.averageVote)
            return this.averageVote
        },

        getStarsVote(num) {
            let fullStarElement = num / num
            //console.log(fullStarElement)

            for (let i = 0; i < num; i++) {
                this.fullStars.push(fullStarElement);
            }
            //console.log(`Lunghezza stelle piene${this.fullStars.length}`)

            let emptyStarElement = 1
            for (let i = 0; i < (5 - num); i++) {
                this.emptyStars.push(emptyStarElement)
            }
            //console.log(`Lunghezza stelle vuote${this.emptyStars.length}`)
        },
    },
    created() {
        this.averageByKey(this.review, "vote")
        this.getStarsVote(this.averageVote);
    }
}
</script>

<template>
    <div class="info-container mt-5">
        <div class="row w-100 justify-content-around">
            <section class="image-box col-10 col-lg-6 d-flex justify-content-center">
                <img class="image-doctor img-fluid" :src="`http://127.0.0.1:8000/storage/${doctor.photo}`" :alt="doctor.user.name">
            </section>

            <section class="info-box pt-3 col-12 col-lg-6 ps-5">
                <div class="infos mb-5">
                    <h1 class="d-flex justify-content-center justify-content-lg-start text-light">
                        {{ doctor.user.name }} {{ doctor.user.surname }}
                    </h1>

                    <h6 class="mt-4 text-light">
                        Specializzazione:
                    </h6>
                    <span class="text-light" v-for="(specialization, index) in doctor.specializations" :key="index">
                        {{ specialization.title }} |
                    </span>

                    <div class="review-info">
                        <div class="vote-stars text-light">
                            <h6 class="mt-3">Voto: </h6>
                            <i v-for="starEL in fullStars" class="fa-solid fa-star"></i>
                            <i v-for="star in emptyStars" class="fa-regular fa-star"></i>
                            <span class="ms-2">{{ reviewsCount }} recensioni</span>
                        </div>
                    </div>
                </div>
                <div class="buttons d-flex">
                    <a class="btn btn-info me-5" href="#messaggi">Invia un messaggio</a>
                    <a class="btn btn-success" href="#recensioni">Scrivi una recensione</a>
                </div>
            </section>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.info-container {
    padding: 4rem;

    .image-box {
        width: 300px;
        min-width: 300px;
        height: 300px;
        border-radius: 50%;
        overflow: hidden;
        // border: 1px solid black;
    }

    .fa-star {
        color: rgba(255, 208, 0, 0.815);
    }
}
</style>
