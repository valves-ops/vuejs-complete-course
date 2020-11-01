<template>
    <v-container>
        <v-row>
            <PortfolioCard 
            v-for="stock in $store.state.portfolio" 
            :stockName="stock.stockName"></PortfolioCard>           
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
