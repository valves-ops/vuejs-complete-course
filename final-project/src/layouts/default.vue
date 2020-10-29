<template>
    <div class="container">
        <Navbar></Navbar>
        <router-view></router-view>
    </div>
</template>

<script>
    import Navbar from '../components/Navbar.vue'

    export default {
        name: 'Container',
        components: {
            Navbar,
        }
    }
</script>

<style>

</style>
