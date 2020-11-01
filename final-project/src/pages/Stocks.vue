<template>
    <v-container>
        <v-row>
            <StockCard 
            v-for="stock in $store.state.stocks" 
            :stockName="stock.stockName"
            :stockPrice="stock.stockPrice"></StockCard>           
        </v-row>
    </v-container>
</template>

<script>
import StockCard from '../components/StockCard.vue'
export default {
    data: function() {
        return {

        }
    },
    components: {
        StockCard,
    },
}
</script>

<style>

</style>
