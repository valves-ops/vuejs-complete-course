<template>
    <BaseStockCard :stockName="stockName" :coloringClasses="'blue blue--text'">
        <template v-slot:price>
            (Price: {{ stockPrice | currency }} 
            | Quantity: {{ stockQuantity }})
        </template>
        <template v-slot:button="slotProps">
            <v-col cols="2">
                <v-btn color="red" @click="sellStock(slotProps.quantity)">Sell</v-btn>
            </v-col>
        </template>
    </BaseStockCard>
</template>

<script>
    import BaseStockCard from './base/BaseStockCard.vue'
    import { mapGetters } from 'vuex'
    export default {
        props: {
            stockName: {
                required: true,
                type: String
            }
        },
        components: {
            BaseStockCard
        },
        methods: {
            sellStock: function(quantity) {
                this.$store.dispatch('sellStock', {
                    stockName: this.stockName,
                    quantity: parseInt(quantity),
                })
            }
        },
        computed: {
            stockQuantity: function(){
                return this.$store.state.portfolio.find(obj => obj.stockName === this.stockName).quantity
            },
            stockPrice: function() {
                return this.$store.state.portfolio.find(obj => obj.stockName === this.stockName).avgPrice
            }
        }
    }
</script>

<style>

</style>