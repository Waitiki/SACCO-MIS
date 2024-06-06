import{_ as h,a as m,f,o as a,c as i,g as b,h as N,b as e,w as d,v as p,F as _,p as v,e as T,r as w,t as r}from"./index-8a6f2ca1.js";import{p as C}from"./popMenu-d1ca3591.js";const S={components:{popMenu:C},data(){return{sourceAccountNumber:null,destinationAccountNumber:null,amount:null,messagePop:"",showPopMenu:!1}},methods:{invokeMenu(n){this.messagePop=n,this.showPopMenu=!0,setTimeout(()=>{this.showPopMenu=!1},3e3)},transferFunds(){if(this.sourceAccountNumber==null||this.destinationAccountNumber==null||this.amount==null)this.invokeMenu("All fields required!!");else{this.invokeMenu("Transfering funds...");let n={sourceAccountNumber:this.accountNumber,destinationAccountNumber:this.destinationAccountNumber,amount:this.amount};m.post("/transfer",n).then(s=>{this.invokeMenu("Transfer success!!"),s=s.data}).catch(s=>{this.messagePop=s.response.data,(s.response.data==""||s.response.data==null)&&(this.messagePop="Try again later!!"),this.invokeMenu=!0,setTimeout(()=>{this.invokeMenu=!1},200)})}}}},l=n=>(v("data-v-ec1fc9db"),n=n(),T(),n),M={class:"pageWrapper"},k={class:"newTransferForm"},F={class:"cancel"},R=l(()=>e("i",{class:"fa-solid fa-xmark"},null,-1)),x=[R],U=l(()=>e("h2",{class:"formTitle"},"NEW TRANSFER",-1)),I=l(()=>e("hr",null,null,-1)),O={class:"userInput"},B=l(()=>e("label",{for:"",class:"y"},"SOURCE-ACCOUNT-NUMBER:",-1)),D=l(()=>e("label",{for:"",class:"y"},"DESTINATION-ACCOUNT-NUMBER:",-1)),P=l(()=>e("label",{for:"",class:"y"},"AMOUNT:",-1)),V=l(()=>e("label",{for:"",class:"y"},"SERVED BY:",-1)),$=l(()=>e("input",{class:"x",type:"number",placeholder:"Enter amount"},null,-1)),W=l(()=>e("hr",null,null,-1)),L={class:"btn-Send"};function q(n,s,E,y,o,u){const c=f("popMenu");return a(),i(_,null,[o.showPopMenu?(a(),b(c,{key:0,message:o.messagePop},null,8,["message"])):N("",!0),e("div",M,[e("div",k,[e("div",F,[e("span",{onClick:s[0]||(s[0]=t=>n.$emit("closeForm"))},x)]),U,I,e("div",O,[B,D,d(e("input",{class:"x",type:"number",placeholder:"Enter source-account-number","onUpdate:modelValue":s[1]||(s[1]=t=>o.sourceAccountNumber=t)},null,512),[[p,o.sourceAccountNumber]]),d(e("input",{class:"x",type:"number",placeholder:"Enter destination-account-number","onUpdate:modelValue":s[2]||(s[2]=t=>o.destinationAccountNumber=t)},null,512),[[p,o.destinationAccountNumber]]),P,V,d(e("input",{class:"x",type:"number",placeholder:"Enter amount","onUpdate:modelValue":s[3]||(s[3]=t=>o.amount=t)},null,512),[[p,o.amount]]),$]),W,e("div",L,[e("button",{class:"btn-form",type:"submit",onClick:s[4]||(s[4]=(...t)=>u.transferFunds&&u.transferFunds(...t))},"TRANSFER NOW")])])])],64)}const H=h(S,[["render",q],["__scopeId","data-v-ec1fc9db"]]);const Y={components:{newTransfer:H},data(){return{show:!1,transfers:[]}},created(){this.transfersReload()},methods:{openForm(){this.show?this.show=!1:this.show=!0},async transfersReload(){try{const n=await m.get("/listOfTransfers");this.transfers=n.data}catch(n){console.log(n)}},async deleteSavings(n){window.confirm("Are you sure you want to delete this transfers?")&&(await m.delete("/deleteSavings/"+n),alert("Savings deleted"),this.savingsReload())}}},A=n=>(v("data-v-d8358f16"),n=n(),T(),n),j={class:"pageWrap"},z={class:"btn-space"},G=A(()=>e("div",{class:"search-bar"},[e("input",{class:"x",type:"text",placeholder:"SEARCH TRANSFERS"})],-1)),J=A(()=>e("div",{class:"header"},[e("ul",null,[e("li",null,[e("h3",null,"SOUNCE-ACCOUNT-NUMBER")]),e("li",null,[e("h3",null,"DESTINATION-ACCOUNT-NUMBER")]),e("li",null,[e("h3",null,"AMOUNT")]),e("li",null,[e("h3",null,"DATE")]),e("li",null,[e("h3",null,"ACTION")])])],-1)),K={class:"space"},Q={class:"action-buttons"},X=["onClick"];function Z(n,s,E,y,o,u){const c=f("newTransfer");return a(),i(_,null,[e("div",j,[e("div",z,[e("button",null,[e("button",null,[e("button",{onClick:s[0]||(s[0]=(...t)=>u.openForm&&u.openForm(...t))},"FUND TRANSFER")])])]),G,J,e("div",K,[(a(!0),i(_,null,w(o.transfers,t=>(a(),i("ul",{key:t.id},[e("li",null,r(t.sourceAccountNumber),1),e("li",null,r(t.destinationAccountNumber),1),e("li",null,r(t.amount),1),e("li",null,r(t.createdAt),1),e("li",Q,[e("button",{onClick:s[1]||(s[1]=g=>n.editExpense(n.expense))},"EDIT"),e("button",{onClick:g=>u.deleteSavings(t.id)},"DELETE",8,X)])]))),128))])]),o.show?(a(),b(c,{key:0,onCloseForm:u.openForm},null,8,["onCloseForm"])):N("",!0)],64)}const ne=h(Y,[["render",Z],["__scopeId","data-v-d8358f16"]]);export{ne as default};
