<template>
    <BaseStockCard :stockName="stockName">
        <template v-slot:price>
            (Price: 110)
        </template>
        <template v-slot:button>
            <v-col cols="2">
                <v-btn color="green">Buy</v-btn>
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