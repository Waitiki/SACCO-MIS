<template>
    
    <div class="btn-space">
        <button>
            <button @click="openForm">
                <button>ADD NEW PRODUCT</button>
            </button>
        </button>
    </div>

    <AddProduct @closeForm="openForm" v-if="show"/> 
</template>

<script>
import AddProduct from './addProduct.vue';


export default {
    data() {
        return {
            show: false,
        };
    },
    components: { AddProduct },
    methods: {
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


</style>