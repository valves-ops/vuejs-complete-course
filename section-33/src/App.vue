<template>
    <div class="container">
            <form v-if="!submitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    
                    <!-- Full Name (First Name + Last Name) -->
                    <full-name v-model="fullName"></full-name>
                    <!-- Mail -->
                    <div class="form-group">
                        <label for="email">E-mail</label>
                        <input type="text" 
                               id="email" 
                               class="form-control"
                               v-model="email">
                    </div>
                    <!-- Password -->
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="text" 
                               id="password" 
                               class="form-control"
                               v-model="password">
                    </div>
                    <!-- Store Data? Yes/No -->
                    <label for="store-data">Store Data?</label>
                    <div class="form-group">
                        
                        <label for="yes">
                            <input type="radio" 
                               id="yes"
                               value="Yes" 
                               v-model="storeData"> Yes
                        </label>
                        <label for="no">
                            <input type="radio" 
                               id="no" 
                               value="No"
                               v-model="storeData"> No
                        </label>         
                    </div>
                    <button type="submit" @click.prevent="submitted=true">
                        Submit
                    </button> 
                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div v-if="submitted" class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName }}</p>
                        <p>Mail: {{ email }}</p>
                        <p>Password: {{ password }} </p>
                        <p>Store in Database?: {{ storeData }} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './FullName.vue'
    export default {
        components: {
            FullName
        },
        data: function(){
            return {
                fullName: '',
                email: '',
                password: '',
                storeData: null,
                submitted: false,
            }
        }
    }
</script>

<style>
</style>
