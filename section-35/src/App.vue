<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <h3>{{ text | reverse }}</h3>
                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <h3>{{ text | countDisplay }}</h3>
                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <hr>
                <h3>{{ reverseComputed }}</h3>
                <h3>{{ countDisplayComputed }}</h3>
                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
            </div>
        </div>
    </div>
</template>

<script>
    import { computedMixins } from './mixins'
    export default {
        data: function() {
            return {
                text: "Hamlet"
            }
        },
        mixins: [computedMixins],
        filters: {
            reverse: function(value){
                return value.split("").reverse().join("")
            }
        },
        // computed: {
        //     reverseComputed: function(){
        //         return this.text.split("").reverse().join("")
        //     },
        //     countDisplayComputed: function(){
        //         return this.text + " " + "(" + this.text.length + ")"; 
        //     }
        // },
    }
</script>

<style>
</style>
