<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="serverId === nll">Server Details are currently not updated</p>
        <div v-else>
            <button @click="$emit('server-status-changed', serverId)">
                Change server #{{serverId}} status
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        serverId: {
            type: Number,
            default: null
        }
    }
}
</script>

<style scoped>
</style>