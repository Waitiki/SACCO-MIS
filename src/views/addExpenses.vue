<template>

<popMenu :message="popMessage" v-if="showPopMenu" />

    <div class="pageWrapper">
        <div class="addExpensesForm">
            
                
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
                    <input class="x" type="text" placeholder="Enter Vendor:" v-model="vendor">
                    <input class="x" type="text" placeholder="Enter Expense:" v-model="expense">
                    <label for="" class="y">REF NUMBER:</label>
                    <label for="" class="y">AMOUNT:</label>
                    <input class="x" type="text" placeholder="Ref Number:" v-model="refNumber">
                    <input class="x" type="number" placeholder="Amount" v-model="amount">
                        
                        
                </div>
                <hr>

                <div class="btn-Exp">

                        <button class="btn-form" type="submit" @click="addExpense">ADD EXPENSE</button>

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
            vendor: null,
            expense: null,
            refNumber: null,
            amount: null,
            popMessage: "",
            showPopMenu: false,
        }
    },

    methods: {

        invokeMenu(value){
            this.popMessage = value;
            this.showPopMenu = true;

            setTimeout(() => {
                this.showPopMenu = false;
            }, 3000)

        },

        addExpense(){

            if(
                this.vendor == null ||
                this.expense == null ||
                this.refNumber == null ||
                this.amount == null
            ){
                this.invokeMenu("All fields required!!");
            }else{
                this.invokeMenu("Recording expense...");
                let data = {
                    vendor: this.vendor,
                    expense: this.expense,
                    refNumber: this.refNumber,
                    amount: this.amount
                };
                axios.post("/addExpenses", data)
                .then((res) => {
                    res = res.data;
                    this.invokeMenu("Expense recorded");
                    

                    setTimeout(() => {
                        this.showPopMenu = false;
                    },2000)
                })
                .catch((err) => {
                this.popMessage = err.response.data;
                if (err.response.data == "" || err.response.data == null) {
                this.popMessage = "Try again later!!";
                }
                console.log(this.popMessage);
                this.showPopMenu = true;
                

                setTimeout(() => {
                this.showPopMenu = false;
                }, 2000);
            });



            }



        }




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


.addExpensesForm{
    
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