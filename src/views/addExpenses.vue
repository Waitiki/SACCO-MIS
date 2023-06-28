
<template>
    <div class="pageWrapper">
        <div class="smsFORM">
            
                
                <div class="cancel">
                        <span @click="$emit('closeForm')">
                            <i class="fa-solid fa-xmark" />
                        </span>
                </div>
                    <h2 class="formTitle">ADD EXPENSES</h2>
                <hr>
                <div class="userInput">
                    
                    <label for="" class="y">VENDOR:</label>
                    <label for="" class="y">EXPENSE:</label>
                    <input class="x" type="text" placeholder="Enter Vendor:">
                    <input class="x" type="text" placeholder="Enter Expense:">
                    <label for="" class="y">REF NUMBER:</label>
                    <label for="" class="y">AMOUNT:</label>
                    <input class="x" type="number" placeholder="Ref Number:">
                    <input class="x" type="number" placeholder="Amount">
                        
                        
                </div>
                <hr>

                <div class="btn-Exp">

                        <button class="btn-form" type="submit">ADD EXPENSE</button>

                </div>
        
        </div>

    </div>
  
</template>

<script>

</script>

<style scoped>
*
{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    

}

.btn-Exp{
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
}
.userInput input
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