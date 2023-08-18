<template>

    <popMenu :message="messagePop" v-if="showPopMenu" />
    
        <div class="pageWrapper">
                <div class="newTransferForm">
                        <div class="cancel">
                                <span @click="$emit('closeForm')">
                                    <i class="fa-solid fa-xmark" />
                                </span>
                        </div>
                        <h2 class="formTitle">NEW TRANSFER</h2>
                        <hr>
                        <div class="userInput">
    
                            <label for="" class="y">SOURCE-ACCOUNT-NUMBER:</label>
                            <label for="" class="y">DESTINATION-ACCOUNT-NUMBER:</label>
    
                            <input class="x" type="number" placeholder="Enter source-account-number" v-model="sourceAccountNumber">
                            <input class="x" type="number" placeholder="Enter destination-account-number" v-model="destinationAccountNumber">
    
                            <label for="" class="y">AMOUNT:</label>
                            <label for="" class="y">SERVED BY:</label>
    
                            <input class="x" type="number" placeholder="Enter amount" v-model="amount">
                            <input class="x" type="number" placeholder="Enter amount">
                            
                                
                             
                        </div>
                        <hr>
    
                        <div class="btn-Send">
    
                                <button class="btn-form" type="submit" @click="transferFunds">TRANSFER NOW</button>
    
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
                sourceAccountNumber: null,
                destinationAccountNumber: null,
                amount: null,
                // servedBy: null,
                messagePop: '',
                showPopMenu: false
            }
        },
    
        methods: {
    
            invokeMenu(value){
                this.messagePop = value;
                this.showPopMenu = true;
                setTimeout(() => {
                    this.showPopMenu = false;
                },3000)
            },
    
            transferFunds(){
                if(
                    this.sourceAccountNumber == null ||
                    this.destinationAccountNumber == null ||
                    this.amount == null 
                ){
                    this.invokeMenu("All fields required!!");
                }else{
    
                    this.invokeMenu("Transfering funds...");
    
                    let data = {
                        sourceAccountNumber: this.accountNumber,
                        destinationAccountNumber: this.destinationAccountNumber,
                        amount: this.amount,
                        
                    };
    
                    axios.post("/transfer", data)
                    .then((res) => {
                        this.invokeMenu("Transfer success!!");
                        res = res.data;
                    })
                    .catch((err) => {
                        this.messagePop = err.response.data;
                        if(err.response.data == "" || err.response.data == null){
                            this.messagePop = "Try again later!!"
                        }
    
                        this.invokeMenu = true;
                        setTimeout(() => {
                            this.invokeMenu= false;
                        },200)
    
                    });
    
    
    
    
                }
    
    
    
            },
    
    
    
    
    
        },
    
    
    }
    
    </script>
    
    
    
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
    
    
    .newTransferForm{
        
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