import{q as t,j as e,d as i}from"./app.js";import o from"./ProfileLogo.js";import a from"./FollowButton.js";const m=({user:s})=>{const{auth:r}=t().props;return e.jsxs("div",{className:"flex justify-between items-center max-w-2xl",children:[e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("div",{className:"h-12 w-12 p-3 bg-gray-700 rounded-full ",children:e.jsx(o,{})}),e.jsx(i,{href:route("thinker.show",s.id),children:e.jsx("p",{className:"text-white ",children:s.name})})]}),e.jsx(a,{authId:r.user.id,userId:s.id})]})};export{m as default};
