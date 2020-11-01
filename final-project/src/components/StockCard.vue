<template>
    <BaseStockCard :stockName="stockName">
        <template v-slot:price>
            (Price: {{ stockPrice | currency }})
        </template>
        <template v-slot:button="slotProps">
            <v-col cols="2">
                <v-btn :disabled="slotProps.quantity == null"
                 color="green" @click="buyStock(slotProps.quantity)">Buy</v-btn>
            </v-col>
        </template>
    </BaseStockCard>
</template>

<script>
    import BaseStockCard from './base/BaseStockCard.vue'
    export default {
        props: {
            stockName: {
                required: true,
                type: String
            },
            stockPrice: {
                required: true,
                type: Number,
            },
        },
        components: {
            BaseStockCard
        },
        methods: {
            buyStock: function(quantity){
                this.$store.dispatch('buyStock', {
                    stockName: this.stockName,
                    avgPrice: this.stockPrice,
                    quantity: parseInt(quantity),
                })
            }
        }
    }
</script>

<style>

</style>