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
                    <h3 class="pele-text">8000</h3>
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
                    <h3 class="pele-text">8000</h3>
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
                    <h3 class="pele-text">8000</h3>
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
        <h3 class="">Recent Transactions</h3>
       </div>
   
    </div>
    
   
   </template>
   
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
   
   
   
   
   </style> 