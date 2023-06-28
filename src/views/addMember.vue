<template>
    <div class="pageWrapper">
            <div class="smsFORM">
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

                        <input class="x" type="text" placeholder="Enter full name" required>
                        <input class="x" type="number" placeholder="Enter national ID" required>
                        <input class="x" type="number" placeholder="Enter KRA pin" required>

                        <label for="" class="y">PHONE LINE-1:</label>     
                        <label for="" class="y">PHONE LINE-2:</label>
                        <label for="" class="y">EMAIL:</label>

                        <input class="x" type="number" placeholder="07..." required>
                        <input class="x" type="phone" placeholder="07..." required>
                        <input class="x" type="email" placeholder="email@gmail.com" required>

                        <label for="" class="y">USERNAME:</label>
                        <label for="" class="y">OCCUPATION:</label>
                        <label for="" class="y">D.O.B:</label>

                        <input class="x" type="text" placeholder="Username" required>
                        <input class="x" type="text" placeholder="Occupation" required>
                        <input class="x" type="date">

                        <label for="" class="y">COUNTY:</label>
                        <label for="" class="y">CONSTITUENCY:</label>
                        <label for="" class="y">WARD:</label>

                        <input class="x" type="text" required>
                        <input class="x" type="text" required>
                        <input class="x" type="text" required>

                        <label for="" class="y">PHYSICAL ADDRESS:</label>
                        <label for="" class="y">GENDER:</label>
                        <label for="" class="y">POSITION:</label>

                        <input class="x" type="number" required>
                        <input class="x" type="text" required>
                        <input class="x" type="text" required>

                        <label for="" class="y">NEXT OF KIN-1:</label>
                        <label for="" class="y">PHONE NUMBER:</label>
                        <label for="" class="y">RELATIONSHIP:</label>

                        <input class="x" type="text" placeholder="Next of kin-1" required>
                        <input class="x" type="numbr" placeholder="Kin-1's phone number" required>
                        <input class="x" type="text" required placeholder="Relationsip to kin-1">
                            

                        <label for="" class="y">NEXT OF KIN-2:</label>
                        <label for="" class="y">PHONE NUMBER:</label>
                        <label for="" class="y">RELATIONSHIP:</label>

                        <input class="x" type="text" placeholder="Next of kin-2" required>
                        <input class="x" type="numbr" placeholder="@Kin-2's phone number" required>
                        <input class="x" type="text" required placeholder="Relationsip to kin-2">
                            
                         
                    </div>
                    <hr>

                    <div class="part-2">
                        <label for="" class="y">APPLOAD PASSPORT PHOTO:</label>
                        <label for="" class="y">APPLOAD APPLICATION FORM:</label>
                        

                        <input class="x" type="file" required>
                        <input class="x" type="file" required>
                        
                    </div>
                    <hr>

                    <div class="btn-Send">

                            <button class="btn-form" type="submit">REGISTER</button>

                    </div>
            
            </div>



    </div>
  
</template>



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
    height: 100vh;   

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


.smsFORM{
    
    background-color: #2f855a;
    position: absolute;
    z-index: 1;
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