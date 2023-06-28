<template>
  <div class="pageWrapper">
          <div class="loginFORM">
                
                  <h2 class="formTitle">LOGIN FORM</h2>
                  <hr>
                  <div class="userInput">

                      <label for="" class="y">EMAIL</label>   
                      <input class="x" type="text">     
                      
                      <label for="" class="y">PASSWORD</label>   
                      <input class="x" type="password">   

                        
                  </div>
                  <hr>

                  <div class="btn-Send">

                          <button class="btn-form" type="submit">LOGIN</button>

                  </div>
          
          </div>



  </div>

</template>

<script>
export default{

  
  methods:{
    
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
  height: 100vh;
  padding-top: 150px;
  
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


.loginFORM{
  
  background-color: #2f855a;
  position: fixed;
  z-index: 1;
  border-radius: 5px;
  padding: 20px !important;
  min-height: 20rem;
  margin:auto;
  left: 0;
  right: 0;
  width:25rem;

}
.formTitle{
  padding: 10px;
  /* text-align: center; */
  color: white;
}
.userInput
{
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  gap: .5rem;
  padding-top: 10px;
}
.userInput input
{
  width: 100% !important;
  padding: 10px;
}

</style>
