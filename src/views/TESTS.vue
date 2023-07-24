<template>
    <div class="pageWrap">
  
      <!-- <button>
        <button @click="getExpenses">Get Expense</button> <br />
      </button> -->
          <div>
            <button>
                <button>
                    <button @click="openForm">NEW EXPENSES</button>
                </button>
            </button>
          </div>

          <div class="search-bar">
              <input class="x" type="text" placeholder="SEARCH EXPENSE">
          </div>
        
          <div class="header">
                <ul>
                  <li><h3>VENDOR</h3></li>
                  <li><h3>EXPENSE</h3></li>
                  <li><h3>REF NUMBER</h3></li>
                  <li><h3>AMOUNT</h3></li>
                  <li><h3>ACTION</h3></li>
                </ul>
          </div>
  
          <div class="space">
              <ul class="users" v-for="expense in expenses" :key="expense.id">
                <li>{{ expense.vendor }}</li>
                <li>{{ expense.expense }}</li>
                <li>{{ expense.refNumber }}</li>
                <li>{{ expense.amount }}</li>
                <li class="action-buttons">
                    <button @click="editExpense(expense)">EDIT</button>
                    <button @click="deleteExpense(expense.id)">DELETE</button>
                </li>
              </ul>
          </div>
          
              <!-- <div class="forms">
                  <div class="form-space">
          
                        <h2>NEW EXPENSE</h2>
          
                        <div class="inputs">
                          <input type="text" placeholder="Enter Vendor" v-model="vendor">
                          <input type="text" placeholder="Enter Expense" v-model="expense">
                          <input type="text" placeholder="Enter refNuberm" v-model="refNumber">
                          <input type="number" placeholder="Enter Amount" v-model="amount">
                          <button @click="addExpense">ADD EXPENSE</button>
                        </div>
                  </div>
          
                  <div class="form-space">
          
                      <h2>EDIT EXPENSE</h2>
          
                      <div class="inputs">
                        <input type="text" placeholder="Enter Vendor" v-model="expense.vendor">
                        <input type="text" placeholder="Enter Expense" v-model="expense.expense">
                        <input type="text" placeholder="Enter refNuberm" v-model="expense.refNumber">
                        <input type="number" placeholder="Enter Amount" v-model="expense.amount">
                        <button @click="updateExpense">UPDATE EXPENSE</button>
                      </div>
                  </div>
              </div> -->
  
    </div>

    <addExpenses @closeForm="openForm" v-if="show"/>
  </template>
  
  <script>
  import axios from 'axios';
  import addExpenses from './addExpenses.vue'



  export default{

    components: { addExpenses },

    data(){
      return {
    //    vendor: '',
    //    expense: '',
    //    refNumber: '',
    //    amount: '',
       show: false,
       expenses: [],
    //    expense: {}
      }
    },

    created(){
        this.getExpenses();
    },
  
    methods: {

        openForm(){
            if(this.show){
                this.show = false
            }else{
                this.show = true
            }
        },

      async getExpenses(){
  
        try{
  
         
          const expenses = await axios.get("/viewExpenses");
  
          this.expenses = expenses.data;
        }catch(e){
          console.log(e);
        }
  
      },
  
    //   async addExpense(){
    //     try{
  
    //       let data = {
    //           vendor: this.vendor,
    //           expense: this.expense,
    //           refNumber: this.refNumber,
    //           amount: this.amount,
    //       }
    //       await axios.post("http://127.0.0.1:8082/api/v1/addExpenses", data);
    //       alert("Expense Added!!");
    //       this.getExpenses();
    //     }catch(e){
    //       console.log(e);
    //     }
    //   },
  
    //   async updateExpense(){
    //     try{
  
    //       let updates = {
    //          vendor: this.expense.vendor,
    //           expense: this.expense.expense,
    //           refNumber: this.expense.refNumber,
    //           amount: this.expense.amount,
    //       }
    //       await axios.put("http://127.0.0.1:8082/api/v1/updateExpenses/" + this.expense.id, updates);
    //       alert("Expense updated!");
    //       this.getExpenses();
    //     }catch(e){
    //       console.log(e);
    //     }
  
    //   },
  
    //   async editExpense(expense){
    //     // this.user.name = user.name;
    //     this.expense.vendor = expense.vendor;
    //     this.expense.expense = expense.expense;
    //     this.expense.refNumber = expense.refNumber;
    //     this.expense.amount = expense.amount;
    //     this.expense.id = expense.id;
    //   },
  
    //   async deleteExpense(id){
  
    //     let x = window.confirm("Are you sure you want to delete this Expense?");
  
    //     if(x){
    //       await axios.delete("http://127.0.0.1:8082/api/v1/deleteExpenses/" + id);
    //       alert("Expense deleted!!");
    //       this.getExpenses();
    //     }
    //   },
  
  
  
  
  
  
  
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
  
  h2{
    color: white;
  }
  
  .forms{
    display: flex;
    gap: .5rem;
  }
  
  .form-space{
    background-color: #185335;
    height: 13rem;
    width: 16rem;
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  
  .inputs{
    display: grid;
    gap: .5em;
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