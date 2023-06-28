<template>
    
    <div class="btn-space">
            <div class="btn-save">
                <button @click="openForm">
                    <button>
                        <button>ADD NEW MEMBER</button>
                    </button>
                </button>

                <button @click="openImport">
                    <button>
                        <button>IMPORT MEMBERS</button>
                    </button>
                </button>

            </div>
    </div>

    <addMember  @closeForm="openForm" v-if="show" />

    <importMembers @closeImport="openImport" v-if="appear"/>
    
</template>

<script>

import addMember from './addMember.vue';
import importMembers from './importMembers.vue'

export default{
    data() {
        return {
            show: false,
            appear: false,
        };
    },
    components: { addMember, importMembers },

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