import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/HomeView.vue";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: import('../views/Dashboard.vue'),
  },

  {
    path: "/Email",
    name: "Email",
    component: import('../views/Email.vue'),
  },

  {
    path: "/SMS",
    name: "SMS",
    component: import('../views/SMS.vue'),
  },

  {
    path: "/Members",
    name: "Members",
    component: import('../views/Members.vue'),
  },

  {
    path: "/Loans",
    name: "Loans",
    component: import('../views/Loans.vue'),
  },

  {
    path: "/Products",
    name: "Products",
    component: import('../views/Products.vue'),
  },

  {
    path: "/Savings",
    name: "Savings",
    component: import('../views/Savings.vue'),
  },

  {
    path: "/navBar",
    name: "navBar",
    component: import('../views/navBar.vue'),
  },

  {
    path: "/Reports",
    name: "Reports",
    component: import('../views/Reports.vue'),
  },

  {
    path: "/addMember",
    name: "addMember",
    component: import('../views/addMember.vue'),
  },

    // {
    // path: "/Login",
    // name: "Login.vue",
    // component: import('../Registration-module/Login.vue'),
    // },
    {
      path: "/Expenses",
      name: "Expenses",
      component: import('../views/Expenses.vue'),
    },

    {
      path: "/addExpenses",
      name: "addExpenses",
      component: import('../views/addExpenses.vue'),
    },

    {
      path: "/addLoan",
      name: "/addLoan",
      component: import('../views/addLoan.vue'),
    },

    {
      path: "/addSavings",
      name: "/addSavings.vue",
      component: import('../views/addSavings.vue'),
    },

    {
      path: "/importSavings",
      name: "/importSavings",
      component: import('../views/importSavings.vue'),
    },

    {
      path: "/addProduct",
      name: "/addProduct",
      component: import('../views/addProduct.vue'),
    },

    {
      path: "/importMembers",
      name: "/importMembers",
      component: import('../views/importMembers.vue'),
    },

    {
      path: "/Help",
      name: "/Help",
      component: import('../views/Help.vue'),
    },

    
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;