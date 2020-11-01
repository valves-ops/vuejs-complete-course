import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        stocks: [
            {
                stockName: 'BMW',
                stockPrice: 76
            },
            {
                stockName: 'Google',
                stockPrice: 75,
            },
            {
                stockName: 'ARKG',
                stockPrice: 75,
            },
            {
                stockName: 'Tesla',
                stockPrice: 75,
            },
            {
                stockName: 'Apple',
                stockPrice: 75,
            },
        ],
        portfolio: [],
        funds: 10000,
    },
    mutations: {
        UPDATE_FUNDS: function(state, newFunds){
            state.funds = newFunds
        },
        ADD_STOCK: function(state, stock) {
            if (state.portfolio.find(obj => obj.stockName === stock.stockName) == null) {
                state.portfolio.push(stock)
            } else {
                let currentStock = state.portfolio.find(obj => obj.stockName === stock.stockName)
                currentStock.avgPrice = 
                (currentStock.avgPrice*currentStock.quantity 
                    + stock.avgPrice*stock.quantity)/(currentStock.quantity + stock.quantity)
                currentStock.quantity += stock.quantity
            }
        },
        DEL_STOCK: function(state, stock) {
            let currentStock = state.portfolio.find(obj => obj.stockName === stock.stockName)
            if (currentStock.quantity <= stock.quantity) {
                let stockIndex = state.portfolio.findIndex(obj => obj.stockName === stock.stockName)
                state.portfolio.splice(stockIndex, 1)
            } else {
                currentStock.quantity -= stock.quantity
            }
        },
        UPDATE_PRICE: function(state, { stock, variation } ){
            let stockIndex = state.stocks.findIndex(obj => obj.stockName === stock.stockName)
            console.log(stock)
            console.log(variation)
            state.stocks[stockIndex].stockPrice += variation
        },
        LOAD_DATA: function(state, data) {
            state.portfolio = data.portfolio
        },
        LOAD_FUNDS: function(state, data) {
            state.funds = data.funds
        }
    },
    getters: {
        funds: function(state){
            return state.funds
        },
    },
    actions: {
        buyStock: function({ commit, state }, stock) {
            commit('ADD_STOCK', stock)
            let spent = stock.quantity*stock.avgPrice
            let newFunds = state.funds - spent
            commit('UPDATE_FUNDS', newFunds)
        },
        sellStock: function({ commit, state }, stock) {
            let currentStock = state.stocks.find(obj => obj.stockName === stock.stockName)
            let newFunds = state.funds + stock.quantity*currentStock.stockPrice
            commit('UPDATE_FUNDS', newFunds)
            commit('DEL_STOCK', stock)
        },
        updatePrices: function({ commit, state }) {
            for (let stock of state.stocks) {
                let variation = Math.floor(20*(Math.random() - 0.5))
                commit('UPDATE_PRICE', { stock, variation })
                
            }
        },
        loadData: function({ commit }) {
            axios.get('/portfolio.json').then(response => {
                commit('LOAD_DATA', response.data)
            })
            axios.get('/funds.json').then(response => {
                commit('LOAD_FUNDS', response.data)
            })
        }
    }
})