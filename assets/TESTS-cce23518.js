import{_,a as h,f as E,c as a,b as e,F as r,r as m,g as f,h as v,o as t,t as l,p as S,e as x}from"./index-333801f9.js";import C from"./addExpenses-ffb8f984.js";import"./popMenu-71106d44.js";const N={components:{addExpenses:C},data(){return{show:!1,expenses:[]}},created(){this.getExpenses()},methods:{openForm(){this.show?this.show=!1:this.show=!0},async getExpenses(){try{const s=await h.get("/viewExpenses");this.expenses=s.data}catch(s){console.log(s)}}}},d=s=>(S("data-v-daf07a9e"),s=s(),x(),s),k={class:"pageWrap"},b=d(()=>e("div",{class:"search-bar"},[e("input",{class:"x",type:"text",placeholder:"SEARCH EXPENSE"})],-1)),g=d(()=>e("div",{class:"header"},[e("ul",null,[e("li",null,[e("h3",null,"VENDOR")]),e("li",null,[e("h3",null,"EXPENSE")]),e("li",null,[e("h3",null,"REF NUMBER")]),e("li",null,[e("h3",null,"AMOUNT")]),e("li",null,[e("h3",null,"ACTION")])])],-1)),F={class:"space"},w={class:"action-buttons"},y=["onClick"],T=["onClick"];function I(s,c,B,D,i,n){const u=E("addExpenses");return t(),a(r,null,[e("div",k,[e("div",null,[e("button",null,[e("button",null,[e("button",{onClick:c[0]||(c[0]=(...o)=>n.openForm&&n.openForm(...o))},"NEW EXPENSES")])])]),b,g,e("div",F,[(t(!0),a(r,null,m(i.expenses,o=>(t(),a("ul",{class:"users",key:o.id},[e("li",null,l(o.vendor),1),e("li",null,l(o.expense),1),e("li",null,l(o.refNumber),1),e("li",null,l(o.amount),1),e("li",w,[e("button",{onClick:p=>s.editExpense(o)},"EDIT",8,y),e("button",{onClick:p=>s.deleteExpense(o.id)},"DELETE",8,T)])]))),128))])]),i.show?(t(),f(u,{key:0,onCloseForm:n.openForm},null,8,["onCloseForm"])):v("",!0)],64)}const P=_(N,[["render",I],["__scopeId","data-v-daf07a9e"]]);export{P as default};