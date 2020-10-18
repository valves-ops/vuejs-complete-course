<template>
    <div class="row">
        <ServerItem 
        :servers="servers"
        @server-selected="selectedServerId=$event">
        </ServerItem>
        <ServerDetail 
        :serverId="selectedServerId"
        @server-status-changed="servers.find(s => s.id === $event).status = 'Normal'">
        </ServerDetail>
    </div>
</template>
<script>
import ServerItem from './ServerItem.vue'
import ServerDetail from './ServerDetail.vue'
export default {
    components: {
        ServerItem,
        ServerDetail
    },
    data: function() {
        return {
            servers: [
                { id: 1, status: 'Normal' },
                { id: 2, status: 'Critical' },
                { id: 3, status: 'Unkown' },
                { id: 4, status: 'Normal' },
            ],
            selectedServerId: null,

        }
    },
    methods: {
        changeStatus: function(event){
            servers.map(function(server){
                if(server.id === event){
                    server.status = 'Normal'
                }
                return server
            })
        }
    }
}
</script>

<style scoped>

</style>