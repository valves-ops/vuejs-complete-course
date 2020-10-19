<template>
   <div>
        <div class="textAlign">
            <div>
                <h3>Quote</h3>
            </div>
            <textarea v-model="quote" class="form-control rounded-0" rows=8 cols=55></textarea>
        </div>
        <div class="textAlign">
            <button 
                    @click="addQuote()"
                    type="button"
                    class="btn btn-primary">
                Add Quote
            </button>
        </div>
        <div class="">
            <div class="row">
                <Quote v-for="(quoteItem, i) in quotes" 
                       :quoteText="quoteItem"
                       @click.native="deleteQuote(i)"></Quote>
            </div>
        </div>
        
   </div>
</template>

<script>
    import Quote from './Quote.vue'
    export default {
        props: {
            numberOfQuotes: {
                type: Number,
                default: 0
            }
        },
        components: {
            Quote
        },
        data: function(){
            return {
                quotes: [],
                quote: '',
            }
        },
        methods: {
            addQuote: function() {
                if (this.quotes.length < 10){
                    this.quotes.push(this.quote)
                    this.$emit('quoteAdded')
                } else {
                    alert('Delete some quotes before adding new ones!')
                }
                
            },
            deleteQuote: function(i) {
                console.log('Delete Called!')
                this.quotes.splice(i, 1)
                this.$emit('quoteDeleted')
            }
        },
        computed: {
            progressWidth: function() {
                return {
                    width: 100*this.numberOfQuotes/10+'%'
                }
            }
        }
    }
</script>

<style scoped>
    .inputBoxRow {
        padding-left: 25%;
    }
    .textAlign {
        text-align: center;
        padding-bottom: 3rem;
    }
    textarea {
        display: block;
        margin-left: auto;
        margin-right: auto;
        resize: none;
        width: auto; 
    }
</style>
