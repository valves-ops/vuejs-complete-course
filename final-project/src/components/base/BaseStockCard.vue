<template>
    <v-col  cols=6>
        <v-card>
        <v-card-title :class="coloringClasses + ' lighten-4'">
            <span class="text-h6">{{ stockName }}</span>
            <span class="text-caption ps-1">
                <slot name="price"></slot>
            </span>
        </v-card-title>
        <v-card-text>
            <v-row class="pt-5" align="center">
                <v-col cols="4">
                    <v-text-field
                    v-model="quantity"
                    placeholder=Quantity
                    type="number"
                    outlined
                    hide-details
                    >
                    </v-text-field>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="4" lg="2">
                    <slot name="button" :quantity="quantity"></slot>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
    </v-col>
    
</template>

<script>
    export default {
        data: function(){
            return {
                quantity: null,
            }
        },
        props: {
            stockName: {
                required: true,
                type: String
            },
            coloringClasses: {
                type: String,
                default: 'green green--text'
            }
        }
    }
</script>

<style>

</style>