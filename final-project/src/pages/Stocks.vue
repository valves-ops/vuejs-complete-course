<template>
    <v-container>
        <v-row>
            <StockCard stockName="BMW"></StockCard>
            <StockCard stockName="Google"></StockCard>            
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
    }
}
</script>

<style>

</style>
