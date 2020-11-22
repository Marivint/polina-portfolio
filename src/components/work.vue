<template>
    <article class="card card-work">
      <img :src="src" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title"><span class="subtitle subtitle-blue subtitle-left">{{ title }}</span></h5>
        <p class="card-text">{{ description }}</p>
      </div>
    </article>
</template> 

<script>  
    export default {
        props:{
            title:{
                type: String,
                required: true,
            },
            description:{
                type: String,
                required: true,
            },
            src:{
                type: String,
                required: true, 
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
 