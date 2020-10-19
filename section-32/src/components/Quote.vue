<template>
    <div class="col-sm-4 quote">
        <div class="quoteBox">
            {{ quoteText }}
        </div>
        
    </div>
</template>

<script>
    export default {
        props: {
            quoteText: {
                type: String,
                default: null
            }
        }
    }
</script>

<style scoped>
    .quote {
        height: 15rem;
    }
    .quoteBox:hover {
        background: lightcoral;
    }
    .quoteBox {
        display: flex;
        cursor: pointer;
        font-family: Arizonia;
        font-size: 2rem;
        border: 1px solid black;
        border-radius: 5px;
        margin: 5px;
        height: 80%;
        justify-content: center;
        align-items: center;
    }
</style>
