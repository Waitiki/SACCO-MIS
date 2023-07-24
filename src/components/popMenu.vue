<template>

    <div class="space-wrap">
        <div class="popeSpace">
            <div class="message-space">
                <h2> {{ message }} </h2>
            </div>
            
        </div>
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
    padding-top: 2.5rem;
}

.message-space{
    width: 30rem;
    height: 7rem;
    background-color: aqua;
    margin: auto;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-top: 300px;
    border-radius: 5px;
    /* color: white; */
    
   

}
.popeSpace{
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    z-index: 1000;  
    width: 98rem;
    height: 49rem;
    /* margin:auto; */
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  
   
    
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