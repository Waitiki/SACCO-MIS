<template>
    <div class="pageWrap">
  
      <!-- <button>
        <button @click="getExpenses">Get Expense</button> <br />
      </button> -->
          <div class="btn-space">
            <button>
                <button>
                    <button @click="openForm">ADD MEMBER</button>
                </button>
            </button>

            <button>
                <button>
                    <button @click="openImport">IMPORT MEMBERS</button>
                </button>
            </button>
          </div>

          <div class="search-bar">
              <input class="x" type="text" placeholder="SEARCH MEMBER">
          </div>
        
          <div class="header">
                <ul>
                    <li><h3>NAME</h3></li>
                    <li><h3>CONTACT</h3></li>
                    <li><h3>GENDER</h3></li>
                    <li><h3>POSITION</h3></li>
                    <li><h3>NEXT OF KIN</h3></li>
                    <li><h3>KINS CONTACT</h3></li>
                    <li><h3>DOCUMENTS</h3></li>
                    <li><h3>ACTIONS</h3></li>
                </ul>
          </div>
  
          <div class="space">
            <ul v-for="member in members" :key="member.id">
        <!-- <ul v-for="(member,index) in members" :key="index"> -->
            
                <li>{{ member.fullName }}</li>
                <li>{{ member.phone1 }}</li>
                <li>{{ member.gender }}</li>
                <li>{{ member.position }}</li>
                <li>{{ member.kinOne }}</li>
                <li>{{ member.kinOnePhone }}</li>
                <li><i>Download</i></li>
                <li class="action-buttons">
                    <button @click="editExpense(expense)">EDIT</button>
                    <button @click="deleteMember(member.id)">DELETE</button>
                </li>
            </ul>
          </div>
  
    </div>

    <addMember @closeForm="openForm" v-if="show"/>
    <importMembers @closeImport="openImport" v-if="appear" />
  </template>
  
  <script>
  import axios from 'axios';
  import addMember from './addMember.vue'
  import importMembers from './importMembers.vue'



  export default{

    components: { addMember, importMembers },

    data(){
      return {
    //    vendor: '',
    //    expense: '',
    //    refNumber: '',
    //    amount: '',
       show: false,
       appear: false,
       members: [],
    //    member: {},
    //    expense: {}
      }
    },

    created(){
        this.membersReload();
    },
  
    methods: {

        openForm(){
            if(this.show){
                this.show = false
            }else{
                this.show = true
            }
        },

        openImport(){
            if(this.appear){
                this.appear = false
            }else{
                this.appear = true
            }
        },

      async membersReload(){
  
        try{
  
         
          const members = await axios.get("/viewMembers");
  
          this.members = members.data;
        }catch(e){
          console.log(e);
        }
  
      },
  
      async deleteMember(id){

        let x = window.confirm("Are you sure you want to delete this member?");

        if(x){
            await axios.delete("/deleteMembers/" + id);
            alert("Member deleted!!");
            this.membersReload();
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