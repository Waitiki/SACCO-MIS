
<template>
    <div class="pageWrapper">
        <div class="smsFORM">
            
                
                <div class="cancel">
                        <span @click="$emit('closeForm')">
                            <i class="fa-solid fa-xmark" />
                        </span>
                </div>
                    <h2 class="formTitle">LOAN APPLICATION</h2>
                    <hr>
                <div class="userInput">
                    
                    <label for="" class="y">ID NUMBER:</label>
                    <label for="" class="y">LOAN PRODUCT:</label>
                    <label for="" class="y">PRINCIPAL:</label>
                    <input class="x" type="number" placeholder="Enter ID Number:">

                    <select class="x" name="" id="">
                        <option value="">Select Loan</option>
                        <option value="">Instant Loan</option>
                        <option value="">Motor vehicle Loan</option>
                        <option value="">Development loan</option>
                        <option value="">School fee Loan</option>
                    </select>

            
                    <input class="x" type="number" placeholder="Principal amount:">
                    <label for="" class="y">INTEREST:</label>
                    <label for="" class="y">PROCESSING FEE:</label>
                    <label for="" class="y">LOAN AMOUNT:</label>
                    <input class="x" type="number" placeholder="Interest amount:">
                    <input class="x" type="number" placeholder="Processing fee">
                    <input class="x" type="number" placeholder="Loan amount">
                    <label for="" class="y">LOAN DURATION:</label>
                    <label for="" class="y">GUARANTOR-1:</label>
                    <label for="" class="y">GUARANTOR-2:</label>
                    <input class="x" type="number" placeholder="Loan duration">
                    <input class="x" type="number" placeholder="Guarantor-1's ID">
                    <input class="x" type="number" placeholder="Guarantor-2's ID">
      
                </div>
                <hr>
                <div class="useInput-1">

                    <label for="" class="y">ACTIVE LOANS:</label>
                    <label for="" class="y">SELECT LOAN STATUS:</label>
                    <select class="x" name="" id="">
                        <option value="">Select Options</option>
                    </select>

                    <select class="x" name="" id="">
                        <option value="">Select Status</option>
                    </select>
                    <label for="" class="y">DATE DISBURSED:</label>
                    <label for="" class="y">FIRST INSTALLMENT:</label>
                    <input class="x" type="date">
                    <input class="x" type="date">
                </div>
                <hr>
                <div class="useInput-2">

                    <label for="" class="y">UPLOAD APPLICATION FORM:</label>
                    <input class="x" type="file">

                    <textarea class="x" placeholder="Officer Note: " name="" id="" cols="20" rows="4" />
                </div>
                <hr>
                <div class="btn-Loan">

                        <button class="btn-form" type="submit">APPLY</button>

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

.btn-form{
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 5px;
        padding-bottom: 5px;
    
}

.btn-Loan{
    padding-top: 10px;
}
.pageWrapper
{
    width: 50vw;
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
    position: absolute;
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
    grid-template-columns: repeat(3,1fr);
    gap: .5rem;
    padding-top: 10px;
    
   
    
}

.useInput-1{
    padding-top: 10px;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: .5rem;
}

.useInput-1 select, input{
    width: 100% !important;
    padding: 8px;
}


.useInput-2{
    padding-top: 10px;
}
.useInput-2 textarea ,input{
    width: 100% !important;
    padding: 8px;
}


.userInput select, input
{
    width: 100% !important;
    padding: 8px;
   
    
}
.cancel
{
    display: flex;
    flex-direction: row-reverse;
    color: white;
}




</style>