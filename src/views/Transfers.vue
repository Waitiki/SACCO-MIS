<template>
    <div class="pageWrap">
  
      <!-- <button>
        <button @click="getExpenses">Get Expense</button> <br />
      </button> -->
          <div class="btn-space">
            <button>
                <button>
                    <button @click="openForm">FUND TRANSFER</button>
                </button>
            </button>
          </div>

          <div class="search-bar">
              <input class="x" type="text" placeholder="SEARCH TRANSFERS">
          </div>
        
          <div class="header">
                <ul>
                  <li><h3>SOUNCE-ACCOUNT-NUMBER</h3></li>
                  <li><h3>DESTINATION-ACCOUNT-NUMBER</h3></li>
                  <li><h3>AMOUNT</h3></li>
                  <li><h3>DATE</h3></li>
                  <li><h3>ACTION</h3></li>
                </ul>
          </div>
  
          <div class="space">
              <ul v-for="transfer in transfers" :key="transfer.id">
                <li>{{ transfer.sourceAccountNumber }}</li>
                <li>{{ transfer.destinationAccountNumber }}</li>
                <li>{{ transfer.amount }}</li>
                <li>{{ transfer.createdAt }}</li>
                <li class="action-buttons">
                    <button @click="editExpense(expense)">EDIT</button>
                    <button @click="deleteSavings(transfer.id)">DELETE</button>
                </li>
              </ul>
          </div>
  
    </div>

    <newTransfer @closeForm="openForm" v-if="show"/>
    
  </template>
  
  <script>
  import axios from 'axios';
  import newTransfer from '../views/newTransfer.vue'



  export default{

    components: { newTransfer },

    data(){
      return {
    //    vendor: '',
    //    expense: '',
    //    refNumber: '',
    //    amount: '',
       show: false,
       transfers: [],
    //    expense: {}
      }
    },

    created(){
        this.transfersReload();
    },
  
    methods: {

        openForm(){
            if(this.show){
                this.show = false
            }else{
                this.show = true
            }
        },

      async transfersReload(){
  
        try{
  
         
          const transfers = await axios.get("/listOfTransfers");
  
          this.transfers = transfers.data;
        }catch(e){
          console.log(e);
        }
  
      },

      async deleteSavings(id){

        let x = window.confirm("Are you sure you want to delete this transfers?");

        if(x){
            await axios.delete("/deleteSavings/" + id);
            alert("Savings deleted");
            this.savingsReload();
        }
      }
  
  
  
  
  
  
  
  
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

  .btn-space{
    display: flex;
    gap: .5rem;
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