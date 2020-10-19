<template>
   <div>
        <h1>Quotes Added</h1>
        <div class="progress">
            <div class="progress-bar" 
                role="progressbar"
                :style="progressWidth" 
                aria-valuemin="0" 
                aria-valuemax="10">
                {{ numberOfQuotes }}/10
            </div>
        </div>
   </div>
</template>

<script>
    export default {
        props: {
            numberOfQuotes: {
                type: Number,
                default: 0
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

<style>
</style>
