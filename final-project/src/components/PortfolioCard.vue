<template>
    <BaseStockCard :stockName="stockName" :coloringClasses="'blue blue--text'">
        <template v-slot:price>
            (Price: 110 | Quantity: 100)
        </template>
        <template v-slot:button>
            <v-col cols="2">
                <v-btn color="red">Sell</v-btn>
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
            }
        },
        components: {
            BaseStockCard
        }
    }
</script>

<style>

</style>