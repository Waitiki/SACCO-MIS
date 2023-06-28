<template>
    <div class="pageWrapper">
            <div class="smsFORM">
                    <div class="cancel">
                            <span @click="$emit('closeForm')">
                                <i class="fa-solid fa-xmark" />
                            </span>
                    </div>
                    <h2 class="formTitle">NEW PRODUCT</h2>
                    <hr>
                    <div class="userInput">

                        <label for="" class="y">LOAN NAME:</label>
                        <label for="" class="y">LOAN INTEREST:</label>
                        <input type="text" class="x">
                        <input type="number" class="x">

                        <label for="" class="y">LOAN DURATION:</label>
                        <label for="" class="y">PROCESSING FEE:</label>
                        <input type="number" class="x">
                        <input type="number" class="x">

                        <label for="" class="y">MAXIMUM LIMIT:</label>
                        <label for="" class="y">MINIMUM LIMIT:</label>
                        <input type="number" class="x">
                        <input type="number" class="x">

                        <label for="" class="y">GUARANTORS:</label>
                        <label for="" class="y">SAVINGS:</label>
                        <input type="text" class="x">
                         <select class="x" name="" id="">
                            <option>Select Option</option>
                         </select>
                        
                        <label for="" class="y">PRODUCT THUMBNAIL:</label>
                        <label for="" class="y">LOAN PENALTY:</label>
                        <input type="file" class="x">
                        <input type="number" class="x">
                        
                        
                    </div>
                    <div class="bottom">

                        
                        <textarea class="x" name="" id="" cols="20" rows="4" placeholder="Description:" />
                         
                    </div>
                    <hr>

                    <div class="btn-Send">

                            <button class="btn-form" type="submit">ADD PRODUCT</button>

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
    padding: 20px !important;
    min-height: 20rem;
    margin:auto;
    left: 0;
    right: 0;
    width:30rem;

}
.formTitle{
    padding: 10px;
    text-align: center;
    color: white;
}
.userInput
{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    
    gap: .5rem;
    padding-top: 10px;
}
.userInput textarea, select, input
{
    width: 90% !important;
    padding: 10px;
}

.bottom textarea{
    width: 95% !important;
    padding: 10px;
}


.cancel
{
    display: flex;
    flex-direction: row-reverse;
    color: white;
}




</style>