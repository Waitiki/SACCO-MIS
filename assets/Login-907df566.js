import{_ as m,a as _,f as r,c as g,g as w,h as f,b as e,w as p,v as u,j as v,k as y,o as d,l as P,p as k,e as M}from"./index-8a6f2ca1.js";import{p as S}from"./popMenu-d1ca3591.js";const x={components:{popMenu:S},data(){return{currStatues:" visibility_off",email:null,password:null,showPopMenu:!1,messagePop:" "}},methods:{displaymenu(o){this.messagePop=o,this.showPopMenu=!0,setTimeout(()=>{this.showPopMenu=!1},3e3)},tooglePassword(){let o=document.getElementById("password");this.currStatues=="visibility"?(this.currStatues="visibility_off",o.type="password"):(this.currStatues="visibility",o.type="text")},login(){if(this.email==null||this.password==null)this.displaymenu("All fields required!!");else{this.displaymenu("Authenticating!");let o={email:this.email,password:this.password};_.post("/authenticate",o).then(s=>{this.displaymenu("Successfully logged in!"),setTimeout(()=>{let l=s.data.token;localStorage.setItem("token",l),this.$router.push({name:"Dashboard"})},2e3)}).catch(s=>{this.messagePop=s.response.data,(s.response.data==""||s.response.data==null)&&(this.messagePop="Wrong password!!"),console.log(this.messagePop),this.showPopMenu=!0,setTimeout(()=>{this.showPopMenu=!1},2e3)})}},logout(){localStorage.removeItem("token"),this$router.push({name:"Login"})}}},n=o=>(k("data-v-5b723468"),o=o(),M(),o),L={class:"page-wrap"},b={class:"Login-wraper"},I={class:"Login-Form"},T=n(()=>e("div",{class:"header"},[e("h1",null,"Login Form")],-1)),V=n(()=>e("hr",null,null,-1)),B={class:"inputs"},C={class:"input"},N={class:"input"},q=["innerHTML"],D=n(()=>e("hr",null,null,-1));function E(o,s,l,A,t,a){const c=r("popMenu"),h=r("RouterLink");return d(),g("div",L,[t.showPopMenu?(d(),w(c,{key:0,message:t.messagePop},null,8,["message"])):f("",!0),e("div",b,[e("div",I,[T,V,e("div",B,[e("div",C,[p(e("input",{type:"email",class:"x",placeholder:"Input Your Email",required:"","onUpdate:modelValue":s[0]||(s[0]=i=>t.email=i)},null,512),[[u,t.email]])]),e("div",N,[p(e("input",{type:"password",class:"x",placeholder:"Input Password",required:"","onUpdate:modelValue":s[1]||(s[1]=i=>t.password=i),id:"password"},null,512),[[u,t.password]]),e("span",{class:"material-icons password-toggle",onClick:s[2]||(s[2]=(...i)=>a.tooglePassword&&a.tooglePassword(...i)),innerHTML:t.currStatues},null,8,q)]),D,e("button",{onClick:s[3]||(s[3]=(...i)=>a.login&&a.login(...i))},"LOGIN"),v(h,{to:"/Sign-up"},{default:y(()=>[P("Don't have an account")]),_:1})])])])])}const R=m(x,[["render",E],["__scopeId","data-v-5b723468"]]);export{R as default};
