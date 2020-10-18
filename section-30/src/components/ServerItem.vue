<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
            class="list-group-item"
            v-for="server in servers">
                <button @click="$emit('server-selected', server.id)">
                    Server #{{ server.id }}
                </button>
                <span>
                    Server Status: {{server.status}}
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        servers: {
            type: Array,
            default: [],
        }
    }
}
</script>

<style scoped>
</style>