import{j as i}from"./app.js";import{T as e}from"./ThoughtCard.js";import{A as a}from"./AuthLayout.js";import"./Stack.js";import"./LOGO2.js";function m({auth:r,thoughts:t}){return i.jsx("div",{className:"p-4 sm:p-6 lg:p-8",children:i.jsx("div",{className:"text-white",children:i.jsx("div",{className:"rounded-lg ",children:t.map(s=>i.jsx("div",{children:i.jsx(e,{thought:s})},s.id))})})})}m.layout=r=>i.jsx(a,{title:"Home",children:r});export{m as default};
