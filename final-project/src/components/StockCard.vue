<template>
    <v-col  cols=6>
        <v-card>
        <v-card-title class="green lighten-4 green--text ">
            <span class="text-h6">{{ stockName }}</span>
            <span class="text-caption ps-1">(Price: 110)</span>
        </v-card-title>
        <v-card-text>
            <v-row class="pt-5" align="center">
                <v-col cols="4">
                    <v-text-field
                    placeholder="Quantity"
                    outlined
                    hide-details
                    >
                    </v-text-field>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="2">
                    <v-btn color="green">Buy</v-btn>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
    </v-col>
    
</template>

<script>
    export default {
        props: {
            stockName: {
                required: true,
                type: String
            }
        }
    }
</script>

<style>

</style>