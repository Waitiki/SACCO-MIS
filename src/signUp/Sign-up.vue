<template>
    <div class="page-wrap">
        <popMenu :message="messagePop" :borderColor="popBorderColor" v-if="showPopMenu"/>
        <!-- <popMenu :message="popMessage" :borderColor="popBorderColor" v-if="showPopMenu"/> -->
        <div class="Login-wraper">
            <div class="Login-Form">
                <div class="header">
                    <h1>Sign up Form</h1>
                </div>
                <hr>

                <div class="inputs">

                    <div class="input">
                          <input type="text" class="x" placeholder="Sacco's First Name" required v-model="firstName">
                    </div>

                    <div class="input">
                          <input type="email" class="x" placeholder="Sacco's Second Name" required v-model="secondName">
                    </div>

                    <div class="input">
                          <input type="email" class="x" placeholder="Input Your Email" required v-model="email">
                    </div>

                    <!-- <div class="input">
                          <input type="email" class="x" placeholder="Input Your Email" required v-model="email">
                    </div> -->

                    <div class="input">
                         <input 
                         type="password" 
                         class="x" 
                         placeholder="Input Password" 
                         required 
                         v-model="password"
                         id="password">
                         <span
                         class="material-icons password-toggle"
                         @click="tooglePassword"
                         v-html="currStatues">

                         </span>
                    </div>
                    <hr>
                    <button @click="login">SIGNUP</button>
                    
                    <RouterLink to="/Login">Login now</RouterLink>
                    
                </div>
                
                    
                
            </div>
        </div>
    </div>
</template>


<script>
import { RouterLink } from 'vue-router';
import axios from 'axios'
// import popMenu from '../components/popMenu.vue';
import popMenu from '../components/popMenu.vue';

export default{

  components: { popMenu},
    data() {
        return {
            currStatues: " visibility_off",
            firstName: null,
            secondName: null,
            email: null,
            password: null,
            showPopMenu: false,
            messagePop: " ",
            popBorderColor: "gold"
        };
    },
    methods: {

        displaymenu(value, borderColor = 'gold'){
            this.messagePop = value;
            this.popBorderColor = borderColor;
            this.showPopMenu = true;
            setTimeout(() =>{
                this.showPopMenu = false;
            },3000);
        },

      tooglePassword() {
        let checktype = document.getElementById("password");
        if (this.currStatues == "visibility") {
            this.currStatues = "visibility_off";
            checktype.type = "password";
        } else {
            this.currStatues = "visibility";
            checktype.type = "text";
        }
        },

    login() {
        if (this.firstName == null ||
            this.secondName == null ||
            this.email == null ||
            this.password == null){
            this.displaymenu("All fields required!!", 'red');
        }else{
            this.displaymenu("Registering an account!", "blue");
            let data = {
                firstName: this.firstName,
                secondName: this.secondName,
                email: this.email,
                password: this.password,
            };
            axios.post("/register", data)
                .then((res) => 
                {
                this.displaymenu("Successfully created an Account!");
                setTimeout(() =>{
                    this.$router.push({ name: "Login" });
                    // let hello= localStorage.getItem("token");
                    // console.log(hello);
                },2000);
                })     
                .catch((err) => {
                    this.messagePop = err.response.data;
                    if (err.response.data == "" || err.response.data == null){
                        this.messagePop = "Try again later!!";
                        this.popBorderColor = "red";
                    }

                    console.log(this.messagePop);
                    this.showPopMenu = true;

                    setTimeout(() => {
                        this.showPopMenu = false;
                    },2000 )
                }) ;  
            } 
        },


logout() {
    localStorage.removeItem("token");
    this$router.push({ name: "Login" });
},







}



};


//         logout() {
//             localStorage.removeItem("token");
//             this$router.push({ name: "Login" });
//         }

    
      
    
    

     
//     }
// }


    

</script>
<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    
}
button{
    padding: 10px;
    align-items: center;
    justify-content: center;
}

button :hover{
    background-color: gold;
}
.page-wrap{
    width: 100vw;
    height: 100vh;
}
.password-toggle {
  font-size: 2rem;
  position: absolute;
  /* right: 65rem;
  bottom: 31.5rem; */
  left: 44rem;
  cursor: pointer;
}

.Login-Form{
    width: 30rem;
    height: 23rem;
    background-color: #2f855a;
    border-radius: 15px;
    
}
.Login-wraper{
    padding-top: 3rem;
    padding-left: 5rem;
}
/* .container{
    display: flex;  
    flex-direction: row-reverse;
    gap: .5rem;
} */


.inputs{
    display: grid;
    gap: .8rem;
    justify-content: center;
    padding-top: 1rem;
}
.header{

    display: grid;
    justify-content: center;
    padding-top: 1rem;
    color: white;
}
.x{
    /* width: 100%; */
    padding: .5rem;
    border-radius: 5px;
    width: 25rem;
}
RouterLink{
    color: white;
}



</style>