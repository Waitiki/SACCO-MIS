<template>

    <div class="popeSpace">
         <h2> {{ message }} </h2>
    </div>       
             
</template>

<script>
export default{
    props: {
        message: String
    },
    data(){
        this
        return {

        }
    }
}
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    
}

.popeSpace h2{
    padding-top: 2rem;
}
.popeSpace{
    background-color: aqua;
    position: fixed;
    z-index: 100;
    border-radius: 5px;
    width: 25rem;
    height: 7rem;
    margin:auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    align-items: center;
    justify-content: center;
    
    /* width: 25rem;
    height: 7rem;
    background-color: aqua;
    border-radius: 15px;
    text-align: center;
    justify-content: center;
    align-items: center;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0; */
    
}

/* .container{
    display: flex;  
    flex-direction: row-reverse;
    gap: .5rem;
} */


</style>