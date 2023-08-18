<template>

    <div class="home-wraper">
   
       

       <div class="home-page">
           
         
          <div class="pelet-1">
              <div class="icon-l">
                  <i class="fas fa-users"/> 
              </div>
              <div class="content">
                  <h2 class="y">Total Members</h2>
                  <span>
                    <h3 class="pele-text">{{ memberCount }}</h3>
                  </span>
              </div>
          </div>

          <div class="pelet-1">
              <div class="icon-l">
                <i class="fa-brands fa-product-hunt" size="xl" />
              </div>
              <div class="content">
                <h2 class="y">Total Products</h2>
                  <span>
                    <h3 class="pele-text">{{ productCount }}</h3>
                  </span>
              </div>
          </div>

          <div class="pelet-1">
              <div class="icon-l">
                  <i class="fa-solid fa-coins"/> 
              </div>
              <div class="content">
                <h2 class="y">Active Loans</h2>
                  <span>
                    <h3 class="pele-text">8000</h3>
                  </span>
              </div>
          </div>

          <div class="pelet-1">
              <div class="icon-l">
                  <i class="fa-solid fa-piggy-bank fa-xl"/> 
              </div>
              <div class="content">
                <h2 class="y">Total Savings</h2>
                  <span>
                    <h3 class="pele-text">{{ totalBalance }}</h3>
                  </span>
              </div>
          </div>

          <div class="pelet-1">
              <div class="icon-l">
                <i class="fa-solid fa-coins" />
                
              </div>
              <div class="content">
                  <h2 class="y">Badget</h2>
                  <span>
                    <h3 class="pele-text">8000</h3>
                  </span>
              </div>
          </div>

        
       </div>

       
       <div class="recents">
        <h1 class="Head-title">Recent Transactions</h1>

        <div class="transactions-header">
          <ul>
            <li>ACCOUNT NUMBER</li>
            <li>TRANSACTION TYPE</li>
            <li>AMOUNT</li>
            <li>STATUS</li>
            <li>TIME</li>
          </ul>
        </div>

        <div class="transactions-body">
          <ul v-for="transaction in transactions" :key="transaction.transactionId">
              <li>{{ transaction.accountNumber }}</li>
              <li>{{ transaction.transactionType }}</li>
              <li>{{ transaction.amount }}</li>
              <li>{{ transaction.status }}</li>
              <li>{{ transaction.createdAt }}</li>
          </ul>
        </div>
       </div>
   
    </div>
    
   
   </template>

   <script>
  import axios from 'axios';

  export default {
    data(){
      return {
        memberCount: 0,
        productCount: 0,
        totalBalance: 0,
        transactions: [],
      }
    },
    created(){
      this.fetchMemberCount();
      this.fetchProductCount();
      this.fetchTotalBalance();
      this.transactionsReload();
    },

    methods: {
      fetchMemberCount(){
        axios.get("/totalUsers")
        .then((res) => {
          this.memberCount = res.data;
        })
        .catch((err) => {
          console.error('Error fetching member count:', err);
        })
      },

      fetchProductCount(){
        axios.get("/numberOfProducts")
        .then((res) => {
          this.productCount = res.data;
        })
        .catch((err) => {
          console.error('Error fetching number count', err);
        })
      },

      fetchTotalBalance(){
        axios.get("/totalBalance")
        .then((res) => {
          this.totalBalance = res.data;
        })
        .catch((err) => {
          console.error('Error fetching total balance', err)
        })
      },

      // transactionsReload(){
      //   axios.get("/viewTransactions")
      //   .then((res) => {
      //     res = res.data;
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   })
      
      // },
       async transactionsReload(){

        try{

           const transactions = await axios.get("/viewTransactions");
           this.transactions = transactions.data;

        }catch(e){
          console.log(e);
        }
      },







    },

     





    }




    



  
  
  </script>
   
   <style scoped>

   *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
   }

  
   
   .home-wraper{
     width: 100vw;
     height: 100vh;
     
   }

   .recents{
    padding-top: 2rem;
    padding-left: 5rem;
   }

   .pelet-1 {
    background-color: #2f855a;
    color: white;
    border-radius: 5px;
    width: 17rem;
    height: 5rem;
    gap: .5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center !important;
    padding-left: 15px;
    
    box-shadow: 0px 0px 5px red;
   }

   .icon-l{
    background-color: gold;
    padding: 14px;
    border-radius: 80px;
   }

   .pelet-1 .icon-l i{
    font-size: 25px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 50%;
    text-align: center;
    color: white;
    background: gold;
   }
   

   .home-page{
     display: grid;
     grid-template-columns: repeat(4,1fr);
     gap: 1rem;
     padding-top: 8px;
     padding-left: 33rem;
     padding-right: 12rem !important;
     /* border:  3px solid #2f855a; */
     border-radius: .5rem;
     width: 60%;
     justify-content: center;
   }
   
   .transactions-header{
    padding-top: 1rem;
   }
   .transactions-header ul{
    display: flex;
    gap: .2rem;
    margin-bottom: .5em;
   }
   .transactions-header ul li{
    padding: 6px;
    background-color: #185335;
    color: white;
    width: 15rem;
    list-style: none;
    text-align: center;
    justify-content: center;
    margin-bottom: .2rem;
    
   }
   .transactions-body ul{
    display: flex;
    gap: .2rem;
    margin-bottom: .5rem;
   }
   .transactions-body ul li{
    padding: 8px;
    background-color: #2f855a;
    color: white;
    width: 15rem;
    list-style: none;
    text-align: center;
    justify-content: center;
    margin-bottom: .2rem;
   }
   
   .Head-title{
    color: #185335;
   }
   
   </style> 