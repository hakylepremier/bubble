import{j as o}from"./app.js";import i from"./ProfileLayout.js";import a from"./ThinkerCard.js";import{A as m}from"./AuthLayout.js";import"./ProfileLogo.js";import"./NavLink.js";import"./FollowButton.js";import"./LOGO2.js";import"./Stack.js";const n=({followers:t})=>o.jsx("div",{className:"max-w-2xl",children:o.jsx("div",{className:"flex flex-col gap-4 pt-3",children:t.length!==0?t.map(r=>o.jsx(a,{user:r})):o.jsx("div",{className:"text-center text-white pt-6",children:o.jsx("h3",{className:"text-xl",children:"You do not have any followers"})})})});n.layout=t=>{const{props:r}=t,e=r.user,l=r.follow,s=r.followed_by;return o.jsx(m,{title:"Followers",children:o.jsx(i,{follow:l,followed_by:s,user:e,children:t})})};export{n as default};
