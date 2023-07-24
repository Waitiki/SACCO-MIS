<template>
    
    <div class="nav-bar">
        
            <button>LOGOUT</button>
            <button @click="openForm" >HELP</button>
            <button>PROFILE</button>
            
        
    </div>

    <Help @closeForm="openForm" v-if="show" />
    
</template>

<script>
import Help from './Help.vue';


export default{

    components: { Help },
    
    data() {
        return {
            show: false,
        };
    },
    methods: {
        openForm() {
            if (this.show) {
                this.show = false;
            }
            else {
                this.show = true;
            }
        }
    },
    
}

</script>

<style scoped>

.nav-bar{
        width: 105%;
		box-shadow: 0px 0px 5px red;;
        display: flex;
        background-color: #2f855a;
        border-radius: 5px;
        padding: 15px;
        flex-direction: row-reverse;
        gap: 0.8rem;
        
}

</style>