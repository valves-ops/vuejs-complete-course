<template>
    <div class="container">
        <Navbar></Navbar>
        <transition name="slide" mode="out-in">
            <router-view></router-view>
        </transition>
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
.slide-enter-active {
    animation: slide-in 200ms ease-out forwards;
}

.slide-leave-active {
    animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-out {
    from {
        opacity: 1;
        transform: translateY(0px);
    }
    to {
        opacity: 0;
        transform: translateY(-30px);
    }
}

@keyframes slide-in {
    from {
        opacity: 0;
        transform: translateY(-30px);
    }
    to {
        opacity: 1;
        transform: translateY(0px);
    }
}
</style>
