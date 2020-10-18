<template>
    <div class="row">
            <div class="col-xs-12 col-sm-6">
                <ul class="list-group">
                    <li
                        class="list-group-item"
                        v-for="index in 5">
                            <ServerItem :index="index"></ServerItem>
                    </li>
                </ul>
            </div>
            <ServerDetail></ServerDetail>
        </div>
</template>
<script>
import ServerItem from './ServerItem.vue'
import ServerDetail from './ServerDetail.vue'
export default {
    components: {
        ServerItem,
        ServerDetail
    }
}
</script>

<style scoped>

</style>