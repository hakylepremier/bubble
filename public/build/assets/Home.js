import{j as e}from"./app.js";import{A as i}from"./AuthenticatedLayout.js";import{T as a}from"./ThoughtCard.js";import"./ApplicationLogo.js";import"./transition.js";import"./InputError.js";import"./PrimaryButton.js";function p({auth:r,thoughts:s}){return e.jsx(i,{user:r.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Home"}),title:"Home",children:e.jsx("div",{className:"text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsx("div",{className:"mt-6 shadow-sm rounded-lg divide-y bg-[#164863]",children:s.map(t=>e.jsx("div",{className:"hover:bg-slate-700 hover:rounded-lg",children:e.jsx(a,{thought:t})},t.id))})})})}export{p as default};
