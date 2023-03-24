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
        <img :src="doctor.photo" :alt="doctor.user.name">
    </div>
</template>

<style lang="scss" scoped>

</style>
