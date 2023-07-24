<template>
    <div class="pageWrap">
  
      <!-- <button>
        <button @click="getExpenses">Get Expense</button> <br />
      </button> -->
          <div>
            <button>
                <button>
                    <button @click="openForm">ADD NEW PRODUCT</button>
                </button>
            </button>
          </div>

          <div class="search-bar">
              <input class="x" type="text" placeholder="SEARCH PRODUCTS">
          </div>
        
          <div class="header">
                <ul>
                  <li><h3>PRODUCT CODE</h3></li>
                  <li><h3>LOAN NAME</h3></li>
                  <li><h3>INTEREST</h3></li>
                  <li><h3>DURATION</h3></li>
                  <li><h3>LIMIT</h3></li>
                  <li><h3>GUARANTORS</h3></li>
                  <!-- <li><h3>STATUS</h3></li> -->
                  <li><h3>ACTION</h3></li>
                </ul>
          </div>
  
          <div class="space">
              <ul v-for="product in products" :key="product.id">
                <li>{{ product.productCode }}</li>
                <li>{{ product.loanName }}</li>
                <li>{{ product.loanInterest }}</li>
                <li>{{ product.loanDuration }}</li>
                <li>{{ product.maximumLimit }}</li>
                <li>{{ product.guarantors }}</li>
                <!-- <li>{{ product.status }}</li> -->
                <li class="action-buttons">
                    <button @click="editExpense(expense)">EDIT</button>
                    <button @click="deleteProduct(product.id)">DELETE</button>
                </li>
              </ul>
          </div>
  
    </div>

    <addProduct @closeForm="openForm" v-if="show"/>
  </template>
  
  <script>
  import axios from 'axios';
  import addProduct from './addProduct.vue'



  export default{

    components: { addProduct },

    data(){
      return {
    //    vendor: '',
    //    expense: '',
    //    refNumber: '',
    //    amount: '',
       show: false,
       products: [],
    //    expense: {}
      }
    },

    created(){
        this.productsReload();
    },
  
    methods: {

        openForm(){
            if(this.show){
                this.show = false
            }else{
                this.show = true
            }
        },

      async productsReload(){
  
        try{
  
         
          const products = await axios.get("/viewProducts");
  
          this.products = products.data;
        }catch(e){
          console.log(e);
        }
  
      },
  
      async deleteProduct(id){
            let x = window.confirm("Are you sure you want to delete this member?");

            if(x){
                await axios.delete("/deleteProducts/" + id);
                alert("Product deleted");
                this.productsReload();
            }
      },
  
  
  
  
  
  
    }
  }
  
  </script>
  
  <style scoped>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .pageWrap{
    margin-left: 1.8rem;
  }

  .search-bar{
    margin-top: .5rem;
  }
  
  button{
    padding: 5px;
    background-color: #2f855a;
    color: white;
    cursor: pointer;
    border-radius: 12px;
  }
  button :hover{
  background-color: gold;
  }
  
  /* .space{
    padding-top: 1rem;
  } */
  
  .header{
    padding-top: 1rem;
  }
  .header ul{
      display: flex;
      gap: .2rem;
      margin-bottom: .5em;
      
  }
  
  .header ul li{
      padding: 6px;
      background-color: #185335;
      color: white;
      padding: 6px;
      width: 15rem;
      list-style: none;
      text-align: center;
      justify-content: center;
      margin-bottom: .2rem;
  }
  
  .space ul{
      display: flex;
      gap: .2rem;
      margin-bottom: .1em;
      
  }
  
  .space ul li{
      padding: 6px;
      background-color: #2f855a;
      color: white;
      padding: 6px;
      width: 15rem;
      list-style: none;
      text-align: center;
      justify-content: center;
      margin-bottom: .2rem;
  }
  
  /* .space ul li button{
    display: flex;
    background-color: red;

 } */

 .action-buttons{
  display: flex;
  gap: .5em;
 }

  .x{
    width: 90%;
    margin-bottom: 8px;
    padding: 15px;
    border: none;
    /* border: 1px solid #808080; */
    border-radius: 5px;
    background: #2f855a;
    color: white;
}
  </style>