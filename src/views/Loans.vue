<template>
    
    <div class="btn-space">
        <button>
            <button>
                <button @click="openForm">NEW LOAN</button>
            </button>
        </button>
    </div>

    <addLoan @closeForm="openForm" v-if="show"/>
</template>

<script>

import addLoan from './addLoan.vue'
export default{ 
    data()
    {
        return{
            show: false,
        }
    },
    components: { addLoan },
    methods: {
        openForm(){
            if(this.show){
                this.show= false
            }else{
                this.show= true
            }
        }
    }
}

</script>

<style scoped>


</style>