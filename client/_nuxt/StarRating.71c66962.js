import{_ as c,y as u,o as s,c as e,F as o,B as l,b as i,A as _,d as f,t as m}from"./entry.a6b52d29.js";const p={name:"StarRating",props:["blok"],data:function(){return{fullStars:[],emptyStars:[]}},created(){if(this.blok.stars==5)for(let t=0;t<this.blok.stars;t++)this.fullStars.push("fas");else{for(let t=0;t<this.blok.stars;t++)this.fullStars.push("fas");for(let t=0;t<5-this.blok.stars;t++)this.emptyStars.push("far")}}},d={class:"rating-stars-container"};function k(t,h,a,y,S,b){const n=u("font-awesome-icon");return s(),e("div",d,[(s(!0),e(o,null,l(t.fullStars,r=>(s(),e("div",{key:a.blok.fullName},[i(n,{icon:[r,"star"],class:"rating-stars"},null,8,["icon"])]))),128)),t.emptyStars?(s(!0),e(o,{key:0},l(t.emptyStars,r=>(s(),e("div",{key:a.blok.fullName},[i(n,{icon:[r,"star"],class:"rating-stars"},null,8,["icon"])]))),128)):_("",!0),f(" "+m(a.blok.stars),1)])}const v=c(p,[["render",k]]);export{v as _};