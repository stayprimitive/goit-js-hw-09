import"./assets/modulepreload-polyfill-3cfb730f.js";const s=document.querySelector(".feedback-form"),t={email:"",message:""};s.addEventListener("input",()=>{const e=new FormData(s),a=e.get("email"),o=e.get("message");t.email=a,t.message=o,m("feedback-form-state",t)});function m(e,a){const o=JSON.stringify(a);localStorage.setItem(e,o)}function n(e){const a=localStorage.getItem(e);try{return JSON.parse(a)}catch{return a}}window.addEventListener("DOMContentLoaded",()=>{const e=n("feedback-form-state");s.elements.email.value=(e==null?void 0:e.email)||"",s.elements.message.value=(e==null?void 0:e.message)||""});s.addEventListener("submit",e=>{if(e.preventDefault(),t.email===""||t.message===""){alert("Fill please all fields");return}localStorage.removeItem("feedback-form-state"),t.email="",t.message="",s.reset()});
//# sourceMappingURL=commonHelpers2.js.map
