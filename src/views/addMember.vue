<template>
    <popMenu :message="messagePop" v-if="showPopMenu" />


    <div class="pageWrapper">
            <div class="addMemberForm">
                    <div class="cancel">
                            <span @click="$emit('closeForm')">
                                <i class="fa-solid fa-xmark" />
                            </span>
                    </div>
                    <h2 class="formTitle">MEMBER REGISTRATION FORM</h2>
                    <hr>
                    <div class="userInput">

                        <label for="" class="y">FULL NAME:</label>
                        <label for="" class="y">ID NUMBER:</label>
                        <label for="" class="y">KRA PIN:</label>

                        <input class="x" type="text" placeholder="Enter full name" v-model="fullName">
                        <input class="x" type="number" placeholder="Enter national ID" v-model="idNumber">
                        <input class="x" type="text" placeholder="Enter KRA pin" v-model="kraPin">

                        <label for="" class="y">PHONE LINE-1:</label>     
                        <label for="" class="y">PHONE LINE-2:</label>
                        <label for="" class="y">EMAIL:</label>

                        <input class="x" type="number" placeholder="07..." v-model="phone1">
                        <input class="x" type="phone" placeholder="07..." v-model="phone2">
                        <input class="x" type="email" placeholder="email@gmail.com" required v-model="email">

                        <label for="" class="y">USERNAME:</label>
                        <label for="" class="y">OCCUPATION:</label>
                        <label for="" class="y">D.O.B:</label>

                        <input class="x" type="text" placeholder="Username" v-model="username">
                        <input class="x" type="text" placeholder="Occupation" v-model="occupation">
                        <input class="x" type="date" v-model="dob">

                        <label for="" class="y">COUNTY:</label>
                        <label for="" class="y">CONSTITUENCY:</label>
                        <label for="" class="y">WARD:</label>

                        <input class="x" type="text" v-model="county">
                        <input class="x" type="text" v-model="constituency">
                        <input class="x" type="text" v-model="ward">

                        <label for="" class="y">PHYSICAL ADDRESS:</label>
                        <label for="" class="y">GENDER:</label>
                        <label for="" class="y">POSITION:</label>

                        <input class="x" type="number" v-model="address">

                        <select class="x" v-model="gender">
                            <option disabled value="">Select gender</option>
                            <option>MALE</option>
                            <option>FEMALE</option>
                        </select>

                        <!-- <input class="x" type="radio" v-model="gender"> -->
                        <!-- <input class="x" type="text" v-model="position"> -->
                        <select class="x" v-model="position">
                            <option disabled value="">Select position</option>
                            <option>Member</option>
                            <option>Officer</option>
                            <option>Adminstrator</option>
                        </select>

                        <label for="" class="y">NEXT OF KIN-1:</label>
                        <label for="" class="y">PHONE NUMBER:</label>
                        <label for="" class="y">RELATIONSHIP:</label>

                        <input class="x" type="text" placeholder="Next of kin-1" v-model="kinOne">
                        <input class="x" type="number" placeholder="Kin-1's phone number" v-model="kinOnePhone">
                        <input class="x" type="text" placeholder="Relationsip to kin-1" v-model="relationshipOne">
                            

                        <label for="" class="y">NEXT OF KIN-2:</label>
                        <label for="" class="y">PHONE NUMBER:</label>
                        <label for="" class="y">RELATIONSHIP:</label>

                        <input class="x" type="text" placeholder="Next of kin-2" v-model="kinTwo">
                        <input class="x" type="number" placeholder="Kin-2's phone number" v-model="kinTwoPhone">
                        <input class="x" type="text" placeholder="Relationsip to kin-2" v-model="relationshipTwo">
                            
                         
                    </div>
                    <hr>

                    <div class="part-2">
                        <label for="" class="y">APPLOAD PASSPORT PHOTO:</label>
                        <label for="" class="y">APPLOAD APPLICATION FORM:</label>
                        

                        <input class="x" type="file">
                        <input class="x" type="file">
                        
                    </div>
                    <hr>

                    <div class="btn-Send">

                            <button @click="registerMember" class="btn-form" type="submit">REGISTER</button>

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
            fullName: null,
            idNumber: null,
            kraPin: null,
            phone1: null,
            phone2: null,
            email: null,
            username: null,
            occupation: null,
            dob: null,
            county: null,
            constituency: null,
            ward: null,
            address: null,
            gender: null,
            position: null,
            kinOne: null,
            kinOnePhone: null,
            relationshipOne: null,
            kinTwo: null,
            kinTwoPhone: null,
            relationshipTwo: null,
            messagePop: ' ',
            showPopMenu: false,
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

        registerMember(){
            if(
                this.fullName == null ||
                this.idNumber == null ||
                this.kraPin == null ||
                this.phone1 == null ||
                this.phone2 == null ||
                this.email == null ||
                this.username == null ||
                this.occupation == null ||
                this.dob == null ||
                this.county == null ||
                this.constituency == null ||
                this.ward == null ||
                this.address == null ||
                this.gender == null ||
                this.position == null ||
                this.kinOne == null ||
                this.kinOnePhone == null ||
                this.relationshipOne == null ||
                this.kinTwo == null ||
                this.kinTwoPhone == null ||
                this.relationshipTwo == null

            ){
                this.invokeMenu("All fields required!!");
            }else{
                this.invokeMenu("Registering Member....");
                let data = {
                    fullName: this.fullName,
                    idNumber: this.idNumber,
                    kraPin: this.kraPin,
                    phone1: this.phone1,
                    phone2: this.phone2,
                    email: this.email,
                    username: this.username,
                    occupation: this.occupation,
                    dob: this.dob,
                    county: this.county,
                    constituency: this.constituency,
                    ward: this.ward,
                    address: this.address,
                    gender: this.gender,
                    position: this.position,
                    kinOne: this.kinOne,
                    kinOnePhone: this.kinOnePhone,
                    relationshipOne: this.relationshipOne,
                    kinTwo: this.kinTwo,
                    kinTwoPhone: this.kinTwoPhone,
                    relationshipTwo: this.relationshipTwo,
                };
                axios.post("/addMembers", data)
                .then((res) => {
                    this.invokeMenu("Successfully registered.");
                    res=res.data;
                })
                .catch((err) => {
                    this.messagePop = err.response.data;
                    if(err.response.data == "" || err.response.data == null)
                    {
                        this.messagePop = "Try again later!!";

                    }    
                        this.showPopMenu = true;

                        setTimeout(() => {
                            this.showPopMenu = false;
                        }, 2000)

                    
                });




            }
        },






        
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
    width: 100vw;
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


.addMemberForm{
    
    background-color: #2f855a;
    position: fixed;
    border-radius: 5px;
    padding: 40px !important;
    padding-top: 20px !important;
    min-height: 40rem;
    margin:auto;
    left: 0;
    right: 0;
    bottom: 3;
    top: 0;
    width: 60rem;
    height: 49rem;
   

}
.formTitle{
    padding: 10px;
    text-align: center;
    color: white;
}
.userInput
{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: .5rem;
    padding-top: 10px;
    align-items: center !important;
    justify-content: center !important;
}
.userInput select, input, .part-2 input
{
    width: 90% !important;
    padding: 8px;

}


.part-2{
    padding-top: 10px;
    display: grid;
    grid-template-columns: repeat(2,1fr);
}
.cancel
{
    display: flex;
    flex-direction: row-reverse;
    color: white;
}




</style>