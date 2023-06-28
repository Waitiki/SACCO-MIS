<template>
    
    <div class="btn-space">
        <div class="btn-save">
            <button @click="openForm">
                <button>
                    <button>ADD SAVINGS</button>
                </button>
            </button>

            <button @click="openImport">
                <button>
                    <button>IMPORT SAVINGS</button>
                </button>
            </button>

        </div>
    </div>

    <AddSavings  @closeForm="openForm" v-if="show" />

    <importSavings @closeImport="openImport" v-if="appear"/>
    
</template>

<script>

import AddSavings from './addSavings.vue';
import importSavings from './importSavings.vue'

export default{
    data() {
        return {
            show: false,
            appear: false,
        };
    },
    components: { AddSavings, importSavings },

    methods: {
       openForm(){
        if(this.show){
            this.show= false
        }else{
            this.show= true
        }
       },
       openImport(){
        if(this.appear){
            this.appear= false
        }else{
            this.appear= true
        }
       }
    }
}

</script>

<style scoped>
.btn-save{
    display: flex;
    gap: .5em;
}

</style>