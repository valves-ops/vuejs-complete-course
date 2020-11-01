<template>
    <v-app-bar>
        <v-col cols=3 md="2" lg="1  ">
            <router-link class="green--text text-decoration-none" to="/home" >
                <span class="stock-trader">
                    Stock Trader
                </span>
            </router-link>
            
        </v-col>
        <v-tabs>
            <v-tab to="/portfolio">Portfolio</v-tab>
            <v-tab to="/stocks">Stocks</v-tab>
        </v-tabs>
        <v-btn
            text
            class="text-capitalize"
            @click="endDay"
        >
            End Day
        </v-btn>
        <v-menu>
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    v-bind="attrs"
                    v-on="on"
                    text
                    class="text-capitalize"
                >
                    Save & Load
                    <v-icon right>
                        mdi-chevron-down
                    </v-icon>
                </v-btn>
            </template>
            <v-list>
                    <v-list-item>
                        <v-list-item-title>
                            Load Data
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>
                            Save Data                       
                        </v-list-item-title>
                    </v-list-item>
            </v-list>
        </v-menu>
        <v-col cols="2" md="1">
            Funds: ${{ fundsFormated }}
        </v-col>
    </v-app-bar>
</template>

<script>
    export default {
        data: function() {
            return {
                loadselect: [],
            }
        },
        computed: {
            fundsFormated: function() {
                return this.$store.state.funds
            }
        },
        methods: {
            endDay: function(){
                this.$store.dispatch('updatePrices')
            }
        }
    }
</script>

<style scoped>
    .stock-trader {
        font-size: 18px;
    }
</style>
