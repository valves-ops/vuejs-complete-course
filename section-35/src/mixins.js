export const computedMixins = {
    computed: {
        reverseComputed: function(){
            return this.text.split("").reverse().join("")
        },
        countDisplayComputed: function(){
            return this.text + " " + "(" + this.text.length + ")"; 
        }
    }
}