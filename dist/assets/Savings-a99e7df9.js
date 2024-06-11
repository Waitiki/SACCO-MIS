import{_ as S,a as p,f as u,c as i,b as e,F as d,r as f,g as c,h as m,o as l,t as r,p as b,e as I}from"./index-333801f9.js";import C from"./addSavings-977a8e03.js";import y from"./importSavings-9ff63f7a.js";import"./popMenu-71106d44.js";const k={components:{addSavings:C,importSavings:y},data(){return{show:!1,appear:!1,savings:[]}},created(){this.savingsReload()},methods:{openForm(){this.show?this.show=!1:this.show=!0},openImport(){this.appear?this.appear=!1:this.appear=!0},async savingsReload(){try{const s=await p.get("/listOfSavings");this.savings=s.data}catch(s){console.log(s)}},async deleteSavings(s){window.confirm("Are you sure you want to delete this savings?")&&(await p.delete("/deleteSavings/"+s),alert("Savings deleted"),this.savingsReload())}}},_=s=>(b("data-v-41b1f8b2"),s=s(),I(),s),w={class:"pageWrap"},N={class:"btn-space"},A=_(()=>e("div",{class:"search-bar"},[e("input",{class:"x",type:"text",placeholder:"SEARCH SAVINGS"})],-1)),E=_(()=>e("div",{class:"header"},[e("ul",null,[e("li",null,[e("h3",null,"ACCOUNT NUMBER")]),e("li",null,[e("h3",null,"AMOUNT")]),e("li",null,[e("h3",null,"DATE")]),e("li",null,[e("h3",null,"ACTION")])])],-1)),x={class:"space"},F={class:"action-buttons"},T=["onClick"];function R(s,n,B,O,a,o){const h=u("addSavings"),v=u("importSavings");return l(),i(d,null,[e("div",w,[e("div",N,[e("button",null,[e("button",null,[e("button",{onClick:n[0]||(n[0]=(...t)=>o.openForm&&o.openForm(...t))},"NEW SAVINGS")])]),e("button",null,[e("button",null,[e("button",{onClick:n[1]||(n[1]=(...t)=>o.openImport&&o.openImport(...t))},"IMPORT SAVINGS")])])]),A,E,e("div",x,[(l(!0),i(d,null,f(a.savings,t=>(l(),i("ul",{key:t.id},[e("li",null,r(t.accountNumber),1),e("li",null,r(t.amount),1),e("li",null,r(t.createdAt),1),e("li",F,[e("button",{onClick:n[2]||(n[2]=g=>s.editExpense(s.expense))},"EDIT"),e("button",{onClick:g=>o.deleteSavings(t.id)},"DELETE",8,T)])]))),128))])]),a.show?(l(),c(h,{key:0,onCloseForm:o.openForm},null,8,["onCloseForm"])):m("",!0),a.appear?(l(),c(v,{key:1,onCloseImport:o.openImport},null,8,["onCloseImport"])):m("",!0)],64)}const U=S(k,[["render",R],["__scopeId","data-v-41b1f8b2"]]);export{U as default};
