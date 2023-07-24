
<template>

<popMenu :message="messagePop" v-if="showPopMenu" />

    <div class="pageWrapper">
        <div class="addLoanForm">
            
                
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
                    <input class="x" type="number" placeholder="Enter ID Number:" v-model="idNumber">

                    <select class="x" name="" id="" v-model="loanProduct">
                        <option disabled>Select Loan</option>
                        <option>Instant Loan</option>
                        <option>Motor vehicle Loan</option>
                        <option>Development loan</option>
                        <option>School fee Loan</option>
                    </select>

                    <input class="x" type="number" placeholder="Principal amount:" v-model="principalAmount">

                    <label for="" class="y">INTEREST:</label>
                    <label for="" class="y">PROCESSING FEE:</label>
                    <label for="" class="y">LOAN AMOUNT:</label>
                    <input class="x" type="text" placeholder="Interest amount:" v-model="interestAmount">
                    <input class="x" type="number" placeholder="Processing fee" v-model="processingFee">
                    <input class="x" type="number" placeholder="Loan amount" v-model="amount">
                    <label for="" class="y">LOAN DURATION:</label>
                    <label for="" class="y">GUARANTOR-1:</label>
                    <label for="" class="y">GUARANTOR-2:</label>
                    <input class="x" type="text" placeholder="Loan duration" v-model="loanDuration">
                    <input class="x" type="number" placeholder="Guarantor-1's ID" v-model="guarantor1">
                    <input class="x" type="number" placeholder="Guarantor-2's ID" v-model="guarantor2">
      
                </div>
                <hr>
                <div class="useInput-1">

                    <label for="" class="y">ACTIVE LOANS:</label>
                    <label for="" class="y">SELECT LOAN STATUS:</label>
                    <select class="x" name="" id="" v-model="activeLoans">
                        <option disabled>Select Options</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>

                    <select class="x" name="" id="" v-model="loanStatus">
                        <option disabled value="">Select Status</option>
                        <option>Active</option>
                        <option>Closed</option>
                    </select>

                    <label for="" class="y">DATE DISBURSED:</label>
                    <label for="" class="y">FIRST INSTALLMENT:</label>
                    <input class="x" type="date" v-model="dateDisbursed">
                    <input class="x" type="date" v-model="firstInstallment">
                </div>
                <hr>
                <div class="useInput-2">

                    <label for="" class="y">UPLOAD APPLICATION FORM:</label>
                    <input class="x" type="file">

                    <textarea class="x" placeholder="Officer Note: " name="" id="" cols="20" rows="4" v-model="officerNote"/>
                </div>
                <hr>
                <div class="btn-Loan">

                        <button class="btn-form" type="submit" @click="apply">APPLY</button>

                </div>
        
        </div>

    </div>
  
</template>

<script>
import axios from 'axios';
import popMenu from '../components/popMenu.vue'

export default{

    components: { popMenu },

    data(){
        return {
            idNumber: null,
            loanProduct: null,
            principalAmount: null,
            interestAmount: null,
            processingFee: null,
            amount: null,
            loanDuration: null,
            guarantor1: null,
            guarantor2: null,
            activeLoans: null,
            loanStatus: null,
            dateDisbursed: null,
            firstInstallment: null,
            officerNote: null,
            messagePop: "",
            showPopMenu: false,
        }
    },

    methods: {

        invokeMenu(value){
            this,this.messagePop = value;
            this.showPopMenu = true;

            setTimeout(() => {
                this.showPopMenu = false;
            },3000)
        },


        apply(){
            if(
                this.idNumber == null ||
                this.loanProduct == null ||
                this.principalAmount == null ||
                this.interestAmount == null ||
                this.processingFee == null ||
                this.amount == null ||
                this.loanDuration == null ||
                this.guarantor1 == null ||
                this.guarantor2 == null ||
                this.activeLoans == null ||
                this.loanStatus == null ||
                this.dateDisbursed == null ||
                this.firstInstallment == null ||
                this.officerNote == null
            ){
                this.invokeMenu("All fields required!!");
            }else{
                this.invokeMenu("Requesting loan...");

                let data = {
                    idNumber: this.idNumber,
                    loanProduct: this.loanProduct,
                    principalAmount: this.principalAmount,
                    interestAmount: this.interestAmount,
                    processingFee: this.processingFee,
                    amount: this.amount,
                    loanDuration: this.loanDuration,
                    guarantor1: this.guarantor1,
                    guarantor2: this.guarantor2,
                    activeLoans: this.activeLoans,
                    loanStatus: this.loanStatus,
                    dateDisbursed: this.dateDisbursed,
                    firstInstallment: this.firstInstallment,
                    officerNote: this.officerNote,
                };
                axios.post("/newLoan", data)
                .then((res) => {
                    this.invokeMenu("Loan Application accepted");
                    res = res.data;
                })
                .catch((err) => {
                    messagePop = err.response.data;
                    if(err.response.data == "" || err.response.data == null){
                        this.messagePop = "Try again later";
                    }

                    this.showPopMenu = true;
                    setTimeout(() => {
                        this.showPopMenu = false;
                    },2000)



                });



            }




        },



    }
}

</script>


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
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    z-index: 100;  
    width: 98rem;
    height: 49rem;
    /* margin:auto; */
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    
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



.addLoanForm{
    
    background-color: #2f855a;
    position: fixed;
    border-radius: 5px;
    padding: 20px !important;
    min-height: 20rem;
    margin:auto;
    top: 0;
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