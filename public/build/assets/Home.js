import{j as e,a as i}from"./app.js";import{A as a}from"./AuthenticatedLayout.js";import{T as m}from"./ThoughtCard.js";import"./ApplicationLogo.js";import"./transition.js";import"./InputError.js";import"./PrimaryButton.js";function c({auth:r,thoughts:s}){return e.jsxs(a,{user:r.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Home"}),children:[e.jsx(i,{title:"Home"}),e.jsx("div",{className:"text-white p-6",children:e.jsx("div",{className:"mt-6 shadow-sm rounded-lg divide-y bg-[#164863]",children:s.map(t=>e.jsx(m,{thought:t},t.id))})})]})}export{c as default};