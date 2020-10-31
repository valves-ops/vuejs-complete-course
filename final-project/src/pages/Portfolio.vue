<template>
    <v-container>
        <v-row>
            <PortfolioCard stockName="BMW"></PortfolioCard>
            <PortfolioCard stockName="Google"></PortfolioCard>            
        </v-row>
    </v-container>
</template>

<script>
    import PortfolioCard from '../components/PortfolioCard.vue'
    export default {
        components: {
            PortfolioCard
        }
    }
</script>

<style>

</style>
