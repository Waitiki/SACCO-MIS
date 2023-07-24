<template>

<popMenu :message="messagePop" v-if="showPopMenu" />

    <div class="pageWrapper">
            <div class="addSavingsForm">
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

                        <input class="x" type="number" placeholder="Enter ID number" v-model="idNumber">
                        <input class="x" type="number" v-model="servedBy">

                        <label for="" class="y">AMOUNT:</label>
                        <label for="" class="y">DATE RECEIVED:</label>

                        <input class="x" type="number" placeholder="Enter ID number" v-model="amount">
                        <input class="x" type="date" v-model="dateReceived">

                        <label for="" class="y">PAYMENT METHOD:</label>
                        <label for="" class="y">REF NUMBER:</label>

                        <select class="x" name="" id="" v-model="paymentMethod">
                            <option disabled>Select Option</option>
                            <option>Cash</option>
                            <option>Cheque</option>
                            <option>Mpesa</option>
                        </select>
                        <input class="x" type="text" v-model="refNumber">
                            
                         
                    </div>
                    <hr>

                    <div class="btn-Send">

                            <button class="btn-form" type="submit" @click="addSavings">ADD SAVINGS</button>

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
            servedBy: null,
            amount: null,
            dateReceived: null,
            paymentMethod: null,
            refNumber: null,
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

        addSavings(){
            if(
                this.idNumber == null ||
                this.servedBy == null ||
                this.amount == null ||
                this.dateReceived == null ||
                this.paymentMethod == null ||
                this.refNumber == null 
            ){
                this.invokeMenu("All fields required!!");
            }else{

                this.invokeMenu("Recording savings...");

                let data = {
                    idNumber: this.idNumber,
                    servedBy: this.servedBy,
                    amount: this.amount,
                    dateReceived: this.dateReceived,
                    paymentMethod: this.paymentMethod,
                    refNumber: this.refNumber,
                };

                axios.post("/addSavings", data)
                .then((res) => {
                    this.invokeMenu("Savings recorded");
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


.addSavingsForm{
    
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