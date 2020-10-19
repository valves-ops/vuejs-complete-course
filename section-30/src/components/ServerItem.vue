<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
            class="list-group-item"
            v-for="server in servers">
                <span 
                style="cursor: pointer"
                @click="$emit('server-selected', server.id)">
                    Server #{{ server.id }}
                </span>
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