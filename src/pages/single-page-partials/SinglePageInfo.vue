<script>

export default {
    name: 'SinglePageInfo',
    data() {
        return {

        }
    },
    props: {
        'doctor': {
            type: Object,
            required: true,
        },
    }
}
</script>

<template>
    <div class="info-container d-flex">
        <div class=" image-box d-flex justify-content-center">
            <img class="image-doctor img-fluid" :src="`../../public/${doctor.photo}`" :alt="doctor.user.name">
        </div>
        <div class="info-box ms-5">
            <h1>
                {{ doctor.user.name }} {{ doctor.user.surname }}
            </h1>
            <p v-for="(specialization, index) in doctor.specializations" :key="index">
                {{ specialization.title }}
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.info-container {
    padding: 4rem;

    .image-box {
        width: 400px;
        height: 400px;
        border-radius: 50%;
        overflow: hidden;
        border: 1px solid black;
    };

    p{
        line-height: 0.5rem;
    }
}
</style>
