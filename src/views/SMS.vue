<template>
    

    <div class="btn">
        <button>
            <button>
                <button @click="newSMS">NEW SMS</button>
            </button>
        </button>
    </div>

    <SendSMS  @closeForm="newSMS" v-if="show"/>
</template>

<script>

import SendSMS from './sendSMS.vue';

export default{
    data() {
        return {
            show: false,
        }
    },
    components: { SendSMS },
    methods:{
        newSMS(){
            if(this.show)
            {
                this.show=false
            }else{
                this.show=true
            }
            
        }
    }
}

</script>

<style scoped>

.btn{
    padding-left: 2rem;
}

</style>