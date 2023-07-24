<template>
    <div class="pageWrap">
  
      <!-- <button>
        <button @click="getExpenses">Get Expense</button> <br />
      </button> -->
          <div>
            <button>
                <button>
                    <button @click="openForm">NEW APPLICATION</button>
                </button>
            </button>
          </div>

          <div class="search-bar">
              <input class="x" type="text" placeholder="SEARCH LOANS">
          </div>
        
          <div class="header">
                <ul>
                  <li class="idNumber"><h3>ID</h3></li>
                  <li><h3>LOAN NAME</h3></li>
                  <li class="amount"><h3>AMOUNT</h3></li>
                  <li class="interest"><h3>INTEREST</h3></li>
                  <li><h3>DURATION</h3></li>
                  <li class="status"><h3>STATUS</h3></li>
                  <li class="loanForm"><h3>LOAN FORM</h3></li>
                  <li><h3>ACTION</h3></li>
                </ul>
          </div>
  
          <div class="space">
              <ul v-for="loan in loans" :key="loan.id">
                <li class="idNumber">{{ loan.idNumber }}</li>
                <li>{{ loan.loanProduct }}</li>
                <li class="amount">{{ loan.principalAmount }}</li>
                <li class="interest">{{ loan.interestAmount }}</li>
                <li>{{ loan.loanDuration }}</li>
                <li class="status">{{ loan.loanStatus }}</li>
                <li class="loanForm"><i>download</i></li>
                <li class="action-buttons">
                    <button @click="editExpense(expense)">EDIT</button>
                    <button @click="deleteLoan(loan.id)">DELETE</button>
                </li>
              </ul>
          </div>
  
    </div>

    <addLoan @closeForm="openForm" v-if="show"/>
  </template>
  
  <script>
  import axios from 'axios';
  import addLoan from './addLoan.vue'



  export default{

    components: { addLoan },

    data(){
      return {
    //    vendor: '',
    //    expense: '',
    //    refNumber: '',
    //    amount: '',
       show: false,
       loans: [],
    //    expense: {}
      }
    },

    created(){
        this.loansReload();
    },
  
    methods: {

        openForm(){
            if(this.show){
                this.show = false
            }else{
                this.show = true
            }
        },

      async loansReload(){
  
        try{
  
         
          const loans = await axios.get("/viewLoans");
  
          this.loans = loans.data;
        }catch(e){
          console.log(e);
        }
  
      },

      async deleteLoan(id){
        let x = window.confirm("Are you sure you want to delete this loan application?");

        if(x){
            await axios.delete("/deleteApplications/" + id);
            alert("Loan application deleted!!");
            this.loansReload();
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

  .interest{
    width: 8rem !important;
  }
  
  .amount{
    width: 8rem !important;
  }

  .idNumber{
    width: 8rem !important;
  }

  .status{
    width: 8rem !important;
  }
  
  .loanForm{
    width: 10rem !important;
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