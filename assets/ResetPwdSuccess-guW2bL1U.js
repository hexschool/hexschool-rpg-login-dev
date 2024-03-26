import{a as h,u as v,A as V,o as g,b as r,c as y,x as k,g as x,h as M,e as s,f as a,n as u,q as R,s as S,m as q}from"./index-yneSRaZ5.js";const A=s("h1",{class:"h2 mb-4"}," 重設密碼 ",-1),C={class:"mb-4"},F={class:"mb-3"},P=s("label",{for:"account",class:"form-label"},"帳號（Email）",-1),z=["value"],B={class:"mb-3"},E=s("label",{for:"password",class:"form-label"},"新密碼",-1),U={class:"mb-4"},I=s("label",{for:"confirmation",class:"form-label"},"確認新密碼",-1),N=["disabled"],j={__name:"ResetPwdSuccess",setup(Z){const{apiPostResetPwd:_}=q,p=h(),l=v(),e=V({account:"",password:"",confirm_password:""});let d="";g(()=>{const{token:t,email:o}=p.query;t?(d=t,e.account=decodeURIComponent(o)):l.push("/password/reset")});const w=R(async()=>{await _(d,e),sessionStorage.setItem("resetStatus","true"),S.toastMessage("success","","重設密碼成功"),l.push("/")});return(t,o)=>{const c=r("VField"),i=r("ErrorMessage"),f=r("VForm");return y(),k(f,{ref:"form",onSubmit:M(w)},{default:x(({errors:m,meta:b})=>[A,s("div",C,[s("div",F,[P,s("input",{id:"account",type:"email",class:"form-control",value:e.account,disabled:"",readonly:""},null,8,z)]),s("div",B,[E,a(c,{id:"password",modelValue:e.password,"onUpdate:modelValue":o[0]||(o[0]=n=>e.password=n),modelModifiers:{trim:!0},name:"new_password",label:"新密碼",type:"password",class:u(["form-control",{"is-invalid":m.new_password}]),rules:{required:!0,regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/}},null,8,["modelValue","class","rules"]),a(i,{name:"new_password",class:"invalid-feedback"})]),s("div",U,[I,a(c,{id:"confirmation",modelValue:e.confirm_password,"onUpdate:modelValue":o[1]||(o[1]=n=>e.confirm_password=n),name:"confirm_new_password",type:"password",label:"確認新密碼",class:u(["form-control",{"is-invalid":m.confirm_new_password}]),rules:"required|confirmed:@new_password"},null,8,["modelValue","class"]),a(i,{name:"confirm_new_password",class:"invalid-feedback"})]),s("button",{type:"submit",class:"btn btn-primary w-100",disabled:!b.valid}," 重設密碼 ",8,N)])]),_:1},8,["onSubmit"])}}};export{j as default};
