<template>

<popMenu :message="messagePop" v-if="showPopMenu" />

    <div class="pageWrapper">
            <div class="addProductForm">
                    <div class="cancel">
                            <span @click="$emit('closeForm')">
                                <i class="fa-solid fa-xmark" />
                            </span>
                    </div>
                    <h2 class="formTitle">WITHDRAWAL</h2>
                    <hr>
                    <div class="userInput">

                        <label for="" class="y">ACCOUNT NUMBER:</label>
                        <label for="" class="y">AMOUNT:</label>
                        <input type="number" class="x" v-model="accountNumber">
                        <input type="number" class="x" v-model="amount">

                    <!-- <div class="bottom">

                        
                        <textarea class="x" name="" id="" cols="20" rows="4" placeholder="Description:" v-model="description"/>
                         
                    </div> -->
                 

                    <div class="btn-Send">

                            <button class="btn-form" type="submit" @click="withdraw">Withdraw</button>

                    </div>
            
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
            accountNumber: null,
            amount: null,
            showPopMenu: false,
            messagePop: ''
            
        }
    },

    methods: {
        invokeMenu(value){
            this.messagePop = value;
            this.showPopMenu = true;

            setTimeout(() => {
                this.showPopMenu = false;
            }, 3000)
        },

        withdraw(){

            if(this.accountNumber == null ||
                this.amount == null
        ){
            this.invokeMenu("All fields required!!");
        }else{
            this.invokeMenu("Withdrawing....");

            let data = {
                accountNumber: this.accountNumber,
                amount: this.amount
            };

            axios.post("/debit", data)
            .then((res) => {
                res = res.data;
                this.invokeMenu("Withdrawal success");
            })
            .catch((err) => {
                this.messagePop = err.response.data;
                if(err.response.data == "" || err.response.data == null){
                    this.messagePop = "Try again later!!";
                }

                this.showPopMenu = true;

                setTimeout(() => {
                    this.showPopMenu = false;
                }, 2000)
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


.addProductForm{
    
    background-color: #2f855a;
    position: fixed;
    border-radius: 5px;
    padding: 20px !important;
    min-height: 15rem;
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
}
.userInput textarea, select, input
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