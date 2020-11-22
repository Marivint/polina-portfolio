<template>
    <img :src="asset('img/logo.png')" :height="height" :width="width" :alt="alt" :class="someClass">
</template>

<script> 
    export default {
        props:{
            height:{
                type: String,
                required: false,
            },
            width:{
                type: String,
                required: false,
            },
            alt:{
                type: String,
                required: false, 
            },
            someClass:{
                type: String,
                required: false,
            },
        },
        data:function(){
            return{

            }
        },
        mounted() {
            
        }
    }
</script>
 