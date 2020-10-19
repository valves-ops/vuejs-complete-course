<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click="selectedComponent='appBlue'" class="btn btn-primary">Load Blue Template</button>
                <button @click="selectedComponent='appGreen'" class="btn btn-success">Load Green Template</button>
                <button @click="selectedComponent='appRed'" class="btn btn-danger">Load Red Template</button>
                <hr>
                <component v-if="selectedComponent" :is="selectedComponent">
                    <h1>{{ content }}</h1>
                </component>
                <div v-else>
                    <h1>Select a Template!</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        data: function(){
            return {
                selectedComponent: null,
                componentContent: {
                    appBlue: 'Bluish',
                    appGreen: 'Greenish',
                    appRed: 'Redish'
                }
            }
        },
        computed: {
            content: function(){
                return this.componentContent[this.selectedComponent]
            }
        }
    }
</script>

<style>
</style>
