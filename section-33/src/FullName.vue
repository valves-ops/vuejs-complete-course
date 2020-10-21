<template>
    <div class="form-group">
        <label for="first-name">First Name</label>
        <input type="text" 
                id="first-name" 
                class="form-control"
                @input="inputted(true, $event)">
        <label for="last-name">Last Name</label>
        <input type="text" 
                id="last-name" 
                class="form-control"
                @input="inputted(false, $event)">
    </div>
</template>

<script>
export default {
    props: {
        fullName: {
            type: String,
            default: ''
        },
    },
    data: function() {
        return {
            dataFullName: ''
        }
    },
    methods: {
        inputted: function(isFirstName, event){
            console.log('inputted')
            let inpFullName
            if(isFirstName){
                inpFullName = event.target.value + ' ' + this.lastName
            } else {
                inpFullName = this.firstName + ' ' + event.target.value
            }
            this.dataFullName = inpFullName
            this.$emit('input', inpFullName)
        }
    },
    computed: {
        firstName() {
            return this.dataFullName.split(" ")[0];
        },
        lastName() {
            if(this.fullName.split(' ').length > 1) {
                return this.dataFullName.split(" ")[1];
            } else {
                return ''
            }
            
        }
    }
}
</script>

<style scoped>

</style>