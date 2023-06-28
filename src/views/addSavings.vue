<template>
    <div class="pageWrapper">
            <div class="smsFORM">
                    <div class="cancel">
                            <span @click="$emit('closeForm')">
                                <i class="fa-solid fa-xmark" />
                            </span>
                    </div>
                    <h2 class="formTitle">ADD NEW SAVINGS</h2>
                    <hr>
                    <div class="userInput">

                        <label for="" class="y">ID NUMBER:</label>
                        <label for="" class="y">SERVED BY:</label>

                        <input class="x" type="number" placeholder="Enter ID number">
                        <input class="x" type="number">

                        <label for="" class="y">AMOUNT:</label>
                        <label for="" class="y">DATE RECEIVED:</label>

                        <input class="x" type="number" placeholder="Enter ID number">
                        <input class="x" type="date">

                        <label for="" class="y">PAYMENT METHOD:</label>
                        <label for="" class="y">REF NUMBER:</label>

                        <select class="x" name="" id="">
                            <option>Select Option</option>
                            <option>Cash</option>
                            <option>Cheque</option>
                            <option>Mpesa</option>
                        </select>
                        <input class="x" type="number">
                            
                         
                    </div>
                    <hr>

                    <div class="btn-Send">

                            <button class="btn-form" type="submit">ADD SAVINGS</button>

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

.btn-Send{
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
    width: 50vw;
    height: 50vh;
    
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
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: .5rem;
    padding-top: 10px;
    align-items: center !important;
    justify-content: center !important;
}
.userInput select, input
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