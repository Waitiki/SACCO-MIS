<template>

    <div class="btn-space">
        <button @click="openEmail" >
            <button>
                <button>NEW EMAIL</button>                 
            </button>
        </button>     
    </div>

<sendEmail @closeForm="openEmail" v-if="show" /> 
</template>

<script>

import sendEmail from './sendEmail.vue';
export default{
    components:{ sendEmail },
    data(){
        return{
            show: false,
        }
    },
    methods:{
        openEmail(){
            if(this.show)
            {
                this.show= false
            }else
            {
                this.show = true
            }
        }
    }
}

</script>

<style scoped></style>
