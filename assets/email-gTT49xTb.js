const r=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,s=e=>{if(typeof e!="string"||!e)return"";let t="";try{t=decodeURIComponent(e).trim()}catch{return""}return r.test(t)?t:""};export{s as r};
