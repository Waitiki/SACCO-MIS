<script>
import SidebarLink from './SidebarLink.vue';
import { collapsed, toggleSidebar, sidebarWidth } from './state'
import navBar  from '../../views/navBar.vue'


export default {
    props: {},
    components: { SidebarLink ,navBar},
    setup() {
        return { collapsed, toggleSidebar, sidebarWidth }
    }
}
</script>

<template>
    <div class="mycontainer">
            <div class="sidebar" :style="{ width: sidebarWidth }">
                <h1>
                    <span v-if="collapsed">
                        <div>D</div>
                        <div>b</div>
                    </span>
                    <span class="y" v-else>Dashboard</span>
                </h1>

                <SidebarLink to="/dashboard" icon="fas fa-home" default="true">Home</SidebarLink>
                <SidebarLink to="/Members" icon="fas fa-users">Members</SidebarLink>
                <SidebarLink to="/Products" icon="fa-solid fa-coins">Products</SidebarLink>
                <SidebarLink to="/Savings" icon="fa-solid fa-piggy-bank fa-xl">Savings</SidebarLink>
                <SidebarLink to="/Loans" icon="fas fa-chart-bar">Loan Management</SidebarLink>
                <SidebarLink to="/Expenses" icon="fa-solid fa-sack-dollar">Expenses</SidebarLink>
                <SidebarLink to="/SMS" icon="fa-solid fa-message fa-beat">SMS</SidebarLink>
                <SidebarLink to="/Email" icon="fa-solid fa-envelope">EMAIL</SidebarLink>
                <SidebarLink to="/Reports" icon="fa-solid fa-diagram-project">Reports</SidebarLink>
                
            
                
                <span 
                class="collapse-icon"
                :class="{'rotate-180': collapsed}"
                @click="toggleSidebar">

                <i class="fas fa-angle-double-left"></i>    
            
                </span>
            </div>
            <div class="mynav">

                <navBar/>

            </div>
</div>
</template>

<style>
:root{
    --sidebar-bg-color: #2f855a;
    --sidebar-item-hover: #38a169;
    --sidebar-item-active: #276749;
}
</style>
<style scoped>

.mycontainer
{
    display: grid;
    grid-template-columns:13fr 1fr;
}
.mynav
{
    padding-left:210px ;
   
}
.sidebar{
    color: white;
    background-color: var(--sidebar-bg-color);

    float: left;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 28px;

    transition: 0.3s ease;

    display: flex;
    flex-direction: column;
}

.collapse-icon{
    position: absolute;
    bottom: 0;
    padding: 0.75em;

    color: rgba(255,.255,.255,.0.7);

    transition: 0.2s linear;
}
.rotate-180{
    transform: rotate(180deg);
    transition: 0.2s linear;
}
</style>