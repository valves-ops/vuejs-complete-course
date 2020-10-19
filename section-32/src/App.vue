<template>
    <div class="container wrapper">
        <Header :numberOfQuotes="numberOfQuotes"></Header>
        <QuotesManager 
            @quoteAdded="numberOfQuotes++"
            @quoteDeleted="numberOfQuotes--"
        ></QuotesManager>
        <div class="footer">
            <span class="valign">Info: Click on a quote to delete it</span>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    import QuotesManager from './components/QuotesManager.vue'
    export default {
        components: {
            Header,
            QuotesManager,
        },
        data: function(){
            return {
                numberOfQuotes: 0
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        padding-left: 7rem;
        padding-right: 7rem;
    }
    .footer {
        background: lightblue;
        color: blue;
        font-size: 1.5rem;
        text-align: center;
        height: 5rem;
        width: 100%;
        border-radius: 10px;
    }
    .valign {
        line-height: 5rem;
    }
</style>
