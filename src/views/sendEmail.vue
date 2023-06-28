<template>
    <div class="pageWrapper">
        <div class="smsFORM">
      
           
      <div class="cancel">
            <span @click="$emit('closeForm')">
                 <i class="fa-solid fa-xmark" />
            </span>
    </div>
      <h2 class="formTitle">SEND BULKY EMAILS</h2>
      <hr>
  <div class="userInput">
        <select class="x" name="" id="">
            <option>Select Option</option>
            <option>All Members</option>
            <option>Active Members</option>
            <option>Members with active loans</option>
        </select>

        <input class="x" type="text" placeholder="Subject: ">
        
        <textarea class="x" placeholder="Write here: " name="" id="" cols="20" rows="7" />
</div>
<hr>

<div class="btn-div">

        <button class="btn-form" type="submit">SEND EMAIL</button>

</div>
  
</div>



    </div>
  
</template>



<style scoped>
*
{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    

}

.btn-div{
    padding-top: 10px;
}
.btn-form{
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 5px;
        padding-bottom: 5px;
    
}
.pageWrapper
{
    width: 100vw;
    height: 100vh;
    
}
.x{
    width: 60%;
    margin-bottom: 8px;
    padding: 8px;
    border: none;
    border: 1px solid #808080;
    border-radius: 5px;
    background: #f9edf3;
    color: #000;
}


.smsFORM{
    
    background-color: #2f855a;
    position: fixed;
    z-index: 1;
    border-radius: 5px;
    padding: 20px !important;
    min-height: 20rem;
    margin:auto;
    left: 0;
    right: 0;
    width:30rem;

}
.formTitle{
    padding: 10px;
    text-align: center;
    color: white;
}
.userInput
{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    padding-top: 10px;
}
.userInput textarea ,.userInput select, .userInput input
{
    width: 90% !important;
    padding: 10px;
}
.cancel
{
    display: flex;
    flex-direction: row-reverse;
    color: white;
}




</style>