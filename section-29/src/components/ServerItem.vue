<template>
    <span>Server #{{ index }}</span>
</template>

<script>
export default {
    props: {
        index: {
            type: Number,
            default: 0,
        }
    }
}
</script>

<style scoped>
</style>