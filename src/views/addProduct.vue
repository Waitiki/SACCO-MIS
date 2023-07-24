<template>

<popMenu :message="messagePop" v-if="showPopMenu" />

    <div class="pageWrapper">
            <div class="addProductForm">
                    <div class="cancel">
                            <span @click="$emit('closeForm')">
                                <i class="fa-solid fa-xmark" />
                            </span>
                    </div>
                    <h2 class="formTitle">NEW PRODUCT</h2>
                    <hr>
                    <div class="userInput">

                        <label for="" class="y">LOAN NAME:</label>
                        <label for="" class="y">LOAN INTEREST:</label>
                        <input type="text" class="x" v-model="loanName">
                        <input type="text" class="x" v-model="loanInterest">

                        <label for="" class="y">LOAN DURATION:</label>
                        <label for="" class="y">PROCESSING FEE:</label>
                        <input type="text" class="x" v-model="loanDuration">
                        <input type="number" class="x" v-model="processingFee">

                        <label for="" class="y">MAXIMUM LIMIT:</label>
                        <label for="" class="y">MINIMUM LIMIT:</label>
                        <input type="number" class="x" v-model="maximumLimit">
                        <input type="number" class="x" v-model="minimumLimit">

                        <label for="" class="y">GUARANTORS:</label>
                        <label for="" class="y">PRODUCT CODE:</label>
                        <!-- <input type="text" class="x"> -->
                        <select name="" id="" class="x" v-model="guarantors">
                            <option disabled value="">Select option</option>
                            <option>YES</option>
                            <option>NO</option>
                        </select>
                        
                        <input type="text" class="x" v-model="productCode">
                         <!-- <select class="x" name="" id="">
                            <option>Select Option</option>
                         </select>
                         -->
                        <label for="" class="y">PRODUCT THUMBNAIL:</label>
                        <label for="" class="y">LOAN PENALTY:</label>
                        <input type="file" class="x">
                        <input type="text" class="x" v-model="loanPenalty">
                        
                        
                    </div>
                    <div class="bottom">

                        
                        <textarea class="x" name="" id="" cols="20" rows="4" placeholder="Description:" v-model="description"/>
                         
                    </div>
                    <hr>

                    <div class="btn-Send">

                            <button class="btn-form" type="submit" @click="addProduct">ADD PRODUCT</button>

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
            loanName: null,
            loanInterest: null,
            loanDuration: null,
            processingFee: null,
            maximumLimit: null,
            minimumLimit: null,
            guarantors: null,
            productCode: null,
            loanPenalty: null,
            description: null,
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

        addProduct(){

            if(this.loanName == null ||
                this.loanInterest == null ||
                this.loanDuration == null ||
                this.processingFee == null ||
                this.maximumLimit == null ||
                this.minimumLimit == null ||
                this.guarantors == null ||
                this.productCode == null ||
                this.loanPenalty == null ||
                this.description == null
        ){
            this.invokeMenu("All fields required!!");
        }else{
            this.invokeMenu("Registering the product....");

            let data = {
                loanName: this.loanName,
                loanInterest: this.loanInterest,
                loanDuration: this.loanDuration,
                processingFee: this.processingFee,
                maximumLimit: this.maximumLimit,
                minimumLimit: this.minimumLimit,
                guarantors: this.guarantors,
                productCode: this.productCode,
                loanPenalty: this.loanPenalty,
                description: this.description,
            };

            axios.post("/addProducts", data)
            .then((res) => {
                res = res.data;
                this.invokeMenu("Product added");
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
.userInput textarea, select, input
{
    width: 90% !important;
    padding: 10px;
}

.bottom textarea{
    width: 95% !important;
    padding: 10px;
}


.cancel
{
    display: flex;
    flex-direction: row-reverse;
    color: white;
}




</style>