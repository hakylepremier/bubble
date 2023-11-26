import{q as a,W as h,j as e,d as l}from"./app.js";import c from"./ProfileLogo.js";import{N as s}from"./NavLink.js";import i from"./FollowButton.js";const m=({follow:t=!1,followed_by:d=!1,user:o,children:n})=>{const{auth:r}=a().props;return h({message:""}),e.jsxs("div",{className:"max-w-2xl mx-auto p-4 sm:p-6 lg:p-8",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{children:[e.jsx("div",{className:"h-24 w-24 p-6 bg-slate-400 rounded-full ",children:e.jsx(c,{})}),e.jsx("p",{className:"text-white",children:o.name}),e.jsx("p",{className:"text-white",children:"Joined "}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(l,{href:route("profile.following"),className:"text-white",children:"Following"}),e.jsx(l,{href:route("profile.followers"),className:"text-white",children:"Followers"})]})]}),e.jsx("div",{className:"text-white",children:r.user.id===o.id?e.jsx(l,{href:route("settings.edit"),children:e.jsx("p",{children:"Settings"})}):e.jsx("div",{children:d?t?e.jsx(i,{authId:r.user.id,userId:o.id}):e.jsx(i,{authId:r.user.id,userId:o.id,followText:"Follow Back",unfollowText:"Follow Back",colorGreen:!0}):t?e.jsx(i,{authId:r.user.id,userId:o.id}):e.jsx(i,{authId:r.user.id,userId:o.id,followText:"Follow",unfollowText:"Follow",colorGreen:!0})})})]}),e.jsxs("div",{className:"space-x-8 sm:-my-px sm:ms-10 flex pt-4 justify-center",children:[e.jsx(s,{href:r.user.id===o.id?route("profile.show"):route("thinker.show",o.id),active:r.user.id===o.id?route().current("profile.show"):route().current("thinker.show"),children:"Thoughts"}),e.jsx(s,{href:r.user.id===o.id?route("profile.following"):route("thinker.following",o.id),active:r.user.id===o.id?route().current("profile.following"):route().current("thinker.following"),children:"Following"}),e.jsx(s,{href:r.user.id===o.id?route("profile.followers"):route("thinker.followers",o.id),active:r.user.id===o.id?route().current("profile.followers"):route().current("thinker.followers"),children:"Followers"})]}),n]})};export{m as default};
