<template>
    
    <div class="btn-space">
        <button>
            <button>
                <button @click="openForm">NEW EXPENSES</button>
            </button>
        </button>
    </div>

    <div class="btn-space">
        <input class="x" type="text" placeholder="SEARCH EXPENSE">
    </div>



    <addExpenses @closeForm="openForm" v-if="show"/>

</template>

<script>

import addExpenses from './addExpenses.vue'

export default{ 

    components: { addExpenses },

    data(){
        return{ 
            show: false,
           
         }
         
    },
    
    methods:{
        openForm(){ 
            if (this.show) {
                this.show= false
            }else{
                this.show= true
            }
        }

        
    }
}

</script>

<style scoped>

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