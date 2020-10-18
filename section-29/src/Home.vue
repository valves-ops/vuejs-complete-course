<template>
    <div class="container">
        <NavBar></NavBar>
        <hr>
        <ServerListing></ServerListing>
        <hr>
        <ServerManager></ServerManager>
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import ServerListing from './components/ServerListing.vue'
import ServerManager from './components/ServerManager.vue'

export default {
    components: {
        NavBar,
        ServerListing,
        ServerManager,
    }
}
</script>

<style scoped>
</style>