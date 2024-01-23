import{b as g,r as u,e as nt,R as oe,j as p,W as rt}from"./app.js";import{I as ot}from"./InputError.js";import{I as lt}from"./InputLabel.js";import{l as Z,s as B,a as k,u as A,b as de,D as x,X as $,o as y,t as fe,y as P,p as at,f as Te,T as it,c as Se,S as ye,C as ut,d as K,e as te}from"./transition.js";import{T as st}from"./TextInput.js";var Ee;let O=(Ee=g.useId)!=null?Ee:function(){let e=Z(),[t,n]=g.useState(e?()=>B.nextId():null);return k(()=>{t===null&&n(B.nextId())},[t]),t!=null?""+t:void 0};function Pe(e){return B.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let le=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var F=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(F||{}),Le=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Le||{}),ct=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(ct||{});function dt(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(le)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var De=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(De||{});function ft(e,t=0){var n;return e===((n=Pe(e))==null?void 0:n.body)?!1:A(t,{0(){return e.matches(le)},1(){let r=e;for(;r!==null;){if(r.matches(le))return!0;r=r.parentElement}return!1}})}var mt=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(mt||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function N(e){e==null||e.focus({preventScroll:!0})}let pt=["textarea","input"].join(",");function gt(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,pt))!=null?n:!1}function vt(e,t=n=>n){return e.slice().sort((n,r)=>{let l=t(n),a=t(r);if(l===null||a===null)return 0;let o=l.compareDocumentPosition(a);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function z(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:l=[]}={}){let a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,o=Array.isArray(e)?n?vt(e):e:dt(e);l.length>0&&o.length>1&&(o=o.filter(m=>!l.includes(m))),r=r??a.activeElement;let i=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,o.indexOf(r))-1;if(t&4)return Math.max(0,o.indexOf(r))+1;if(t&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=t&32?{preventScroll:!0}:{},d=0,f=o.length,v;do{if(d>=f||d+f<=0)return 0;let m=s+d;if(t&16)m=(m+f)%f;else{if(m<0)return 3;if(m>=f)return 1}v=o[m],v==null||v.focus(c),d+=i}while(v!==a.activeElement);return t&6&&gt(v)&&v.select(),2}function X(e,t,n){let r=de(t);u.useEffect(()=>{function l(a){r.current(a)}return document.addEventListener(e,l,n),()=>document.removeEventListener(e,l,n)},[e,n])}function Fe(e,t,n){let r=de(t);u.useEffect(()=>{function l(a){r.current(a)}return window.addEventListener(e,l,n),()=>window.removeEventListener(e,l,n)},[e,n])}function ht(e,t,n=!0){let r=u.useRef(!1);u.useEffect(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);function l(o,i){if(!r.current||o.defaultPrevented)return;let s=i(o);if(s===null||!s.getRootNode().contains(s)||!s.isConnected)return;let c=function d(f){return typeof f=="function"?d(f()):Array.isArray(f)||f instanceof Set?f:[f]}(e);for(let d of c){if(d===null)continue;let f=d instanceof HTMLElement?d:d.current;if(f!=null&&f.contains(s)||o.composed&&o.composedPath().includes(f))return}return!ft(s,De.Loose)&&s.tabIndex!==-1&&o.preventDefault(),t(o,s)}let a=u.useRef(null);X("pointerdown",o=>{var i,s;r.current&&(a.current=((s=(i=o.composedPath)==null?void 0:i.call(o))==null?void 0:s[0])||o.target)},!0),X("mousedown",o=>{var i,s;r.current&&(a.current=((s=(i=o.composedPath)==null?void 0:i.call(o))==null?void 0:s[0])||o.target)},!0),X("click",o=>{a.current&&(l(o,()=>a.current),a.current=null)},!0),X("touchend",o=>l(o,()=>o.target instanceof HTMLElement?o.target:null),!0),Fe("blur",o=>l(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function wt(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&yt(n)?!1:r}function yt(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}let Et="div";var J=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(J||{});function bt(e,t){let{features:n=1,...r}=e,l={ref:t,"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return $({ourProps:l,theirProps:r,slot:{},defaultTag:Et,name:"Hidden"})}let ae=x(bt);var Ce=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Ce||{});function me(e,t){let n=u.useRef([]),r=y(e);u.useEffect(()=>{let l=[...n.current];for(let[a,o]of t.entries())if(n.current[a]!==o){let i=r(t,l);return n.current=t,i}},[r,...t])}function xt(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function U(...e){return u.useMemo(()=>Pe(...e),[...e])}var H=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(H||{});function $t(){let e=u.useRef(0);return Fe("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function Ne(e,t,n,r){let l=de(n);u.useEffect(()=>{e=e??window;function a(o){l.current(o)}return e.addEventListener(t,a,r),()=>e.removeEventListener(t,a,r)},[e,t,r])}function Tt(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}function ke(e){let t=y(e),n=u.useRef(!1);u.useEffect(()=>(n.current=!1,()=>{n.current=!0,fe(()=>{n.current&&t()})}),[t])}function Me(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let St="div";var Re=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Re||{});function Pt(e,t){let n=u.useRef(null),r=P(n,t),{initialFocus:l,containers:a,features:o=30,...i}=e;Z()||(o=1);let s=U(n);Ft({ownerDocument:s},!!(o&16));let c=Ct({ownerDocument:s,container:n,initialFocus:l},!!(o&2));Nt({ownerDocument:s,container:n,containers:a,previousActiveElement:c},!!(o&8));let d=$t(),f=y(h=>{let T=n.current;T&&(L=>L())(()=>{A(d.current,{[H.Forwards]:()=>{z(T,F.First,{skipElements:[h.relatedTarget]})},[H.Backwards]:()=>{z(T,F.Last,{skipElements:[h.relatedTarget]})}})})}),v=at(),m=u.useRef(!1),M={ref:r,onKeyDown(h){h.key=="Tab"&&(m.current=!0,v.requestAnimationFrame(()=>{m.current=!1}))},onBlur(h){let T=Me(a);n.current instanceof HTMLElement&&T.add(n.current);let L=h.relatedTarget;L instanceof HTMLElement&&L.dataset.headlessuiFocusGuard!=="true"&&(Ae(T,L)||(m.current?z(n.current,A(d.current,{[H.Forwards]:()=>F.Next,[H.Backwards]:()=>F.Previous})|F.WrapAround,{relativeTo:h.target}):h.target instanceof HTMLElement&&N(h.target)))}};return g.createElement(g.Fragment,null,!!(o&4)&&g.createElement(ae,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:J.Focusable}),$({ourProps:M,theirProps:i,defaultTag:St,name:"FocusTrap"}),!!(o&4)&&g.createElement(ae,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:J.Focusable}))}let Lt=x(Pt),j=Object.assign(Lt,{features:Re}),D=[];Tt(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&D[0]!==t.target&&(D.unshift(t.target),D=D.filter(n=>n!=null&&n.isConnected),D.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function Dt(e=!0){let t=u.useRef(D.slice());return me(([n],[r])=>{r===!0&&n===!1&&fe(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=D.slice())},[e,D,t]),y(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function Ft({ownerDocument:e},t){let n=Dt(t);me(()=>{t||(e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&N(n())},[t]),ke(()=>{t&&N(n())})}function Ct({ownerDocument:e,container:t,initialFocus:n},r){let l=u.useRef(null),a=Te();return me(()=>{if(!r)return;let o=t.current;o&&fe(()=>{if(!a.current)return;let i=e==null?void 0:e.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===i){l.current=i;return}}else if(o.contains(i)){l.current=i;return}n!=null&&n.current?N(n.current):z(o,F.First)===Le.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),l.current=e==null?void 0:e.activeElement})},[r]),l}function Nt({ownerDocument:e,container:t,containers:n,previousActiveElement:r},l){let a=Te();Ne(e==null?void 0:e.defaultView,"focus",o=>{if(!l||!a.current)return;let i=Me(n);t.current instanceof HTMLElement&&i.add(t.current);let s=r.current;if(!s)return;let c=o.target;c&&c instanceof HTMLElement?Ae(i,c)?(r.current=c,N(c)):(o.preventDefault(),o.stopPropagation(),N(s)):N(r.current)},!0)}function Ae(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let Oe=u.createContext(!1);function kt(){return u.useContext(Oe)}function ie(e){return g.createElement(Oe.Provider,{value:e.force},e.children)}function Mt(e){let t=kt(),n=u.useContext(je),r=U(e),[l,a]=u.useState(()=>{if(!t&&n!==null||B.isServer)return null;let o=r==null?void 0:r.getElementById("headlessui-portal-root");if(o)return o;if(r===null)return null;let i=r.createElement("div");return i.setAttribute("id","headlessui-portal-root"),r.body.appendChild(i)});return u.useEffect(()=>{l!==null&&(r!=null&&r.body.contains(l)||r==null||r.body.appendChild(l))},[l,r]),u.useEffect(()=>{t||n!==null&&a(n.current)},[n,a,t]),l}let Rt=u.Fragment;function At(e,t){let n=e,r=u.useRef(null),l=P(it(d=>{r.current=d}),t),a=U(r),o=Mt(r),[i]=u.useState(()=>{var d;return B.isServer?null:(d=a==null?void 0:a.createElement("div"))!=null?d:null}),s=u.useContext(ue),c=Z();return k(()=>{!o||!i||o.contains(i)||(i.setAttribute("data-headlessui-portal",""),o.appendChild(i))},[o,i]),k(()=>{if(i&&s)return s.register(i)},[s,i]),ke(()=>{var d;!o||!i||(i instanceof Node&&o.contains(i)&&o.removeChild(i),o.childNodes.length<=0&&((d=o.parentElement)==null||d.removeChild(o)))}),c?!o||!i?null:nt.createPortal($({ourProps:{ref:l},theirProps:n,defaultTag:Rt,name:"Portal"}),i):null}let Ot=u.Fragment,je=u.createContext(null);function jt(e,t){let{target:n,...r}=e,l={ref:P(t)};return g.createElement(je.Provider,{value:n},$({ourProps:l,theirProps:r,defaultTag:Ot,name:"Popover.Group"}))}let ue=u.createContext(null);function It(){let e=u.useContext(ue),t=u.useRef([]),n=y(a=>(t.current.push(a),e&&e.register(a),()=>r(a))),r=y(a=>{let o=t.current.indexOf(a);o!==-1&&t.current.splice(o,1),e&&e.unregister(a)}),l=u.useMemo(()=>({register:n,unregister:r,portals:t}),[n,r,t]);return[t,u.useMemo(()=>function({children:a}){return g.createElement(ue.Provider,{value:l},a)},[l])]}let Ht=x(At),Bt=x(jt),se=Object.assign(Ht,{Group:Bt}),Ie=u.createContext(null);function He(){let e=u.useContext(Ie);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,He),t}return e}function Ut(){let[e,t]=u.useState([]);return[e.length>0?e.join(" "):void 0,u.useMemo(()=>function(n){let r=y(a=>(t(o=>[...o,a]),()=>t(o=>{let i=o.slice(),s=i.indexOf(a);return s!==-1&&i.splice(s,1),i}))),l=u.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props}),[r,n.slot,n.name,n.props]);return g.createElement(Ie.Provider,{value:l},n.children)},[t])]}let Wt="p";function _t(e,t){let n=O(),{id:r=`headlessui-description-${n}`,...l}=e,a=He(),o=P(t);k(()=>a.register(r),[r,a.register]);let i={ref:o,...a.props,id:r};return $({ourProps:i,theirProps:l,slot:a.slot||{},defaultTag:Wt,name:a.name||"Description"})}let Vt=x(_t),Yt=Object.assign(Vt,{}),pe=u.createContext(()=>{});pe.displayName="StackContext";var ce=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(ce||{});function Gt(){return u.useContext(pe)}function qt({children:e,onUpdate:t,type:n,element:r,enabled:l}){let a=Gt(),o=y((...i)=>{t==null||t(...i),a(...i)});return k(()=>{let i=l===void 0||l===!0;return i&&o(0,n,r),()=>{i&&o(1,n,r)}},[o,n,r,l]),g.createElement(pe.Provider,{value:o},e)}function Kt(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const Xt=typeof Object.is=="function"?Object.is:Kt,{useState:zt,useEffect:Jt,useLayoutEffect:Qt,useDebugValue:Zt}=oe;function en(e,t,n){const r=t(),[{inst:l},a]=zt({inst:{value:r,getSnapshot:t}});return Qt(()=>{l.value=r,l.getSnapshot=t,ne(l)&&a({inst:l})},[e,r,t]),Jt(()=>(ne(l)&&a({inst:l}),e(()=>{ne(l)&&a({inst:l})})),[e]),Zt(r),r}function ne(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!Xt(n,r)}catch{return!0}}function tn(e,t,n){return t()}const nn=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",rn=!nn,on=rn?tn:en,ln="useSyncExternalStore"in oe?(e=>e.useSyncExternalStore)(oe):on;function an(e){return ln(e.subscribe,e.getSnapshot,e.getSnapshot)}function un(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(l){return r.add(l),()=>r.delete(l)},dispatch(l,...a){let o=t[l].call(n,...a);o&&(n=o,r.forEach(i=>i()))}}}function sn(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,l=r.clientWidth-r.offsetWidth,a=e-l;n.style(r,"paddingRight",`${a}px`)}}}function cn(){if(!xt())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:r}){function l(a){return r.containers.flatMap(o=>o()).some(o=>o.contains(a))}n.microTask(()=>{if(window.getComputedStyle(t.documentElement).scrollBehavior!=="auto"){let o=Se();o.style(t.documentElement,"scroll-behavior","auto"),n.add(()=>n.microTask(()=>o.dispose()))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let a=null;n.addEventListener(t,"click",o=>{if(o.target instanceof HTMLElement)try{let i=o.target.closest("a");if(!i)return;let{hash:s}=new URL(i.href),c=t.querySelector(s);c&&!l(c)&&(a=c)}catch{}},!0),n.addEventListener(t,"touchmove",o=>{o.target instanceof HTMLElement&&!l(o.target)&&o.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+e),a&&a.isConnected&&(a.scrollIntoView({block:"nearest"}),a=null)})})}}}function dn(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function fn(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let C=un(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:Se(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:fn(n)},l=[cn(),sn(),dn()];l.forEach(({before:a})=>a==null?void 0:a(r)),l.forEach(({after:a})=>a==null?void 0:a(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});C.subscribe(()=>{let e=C.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",l=n.count!==0;(l&&!r||!l&&r)&&C.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&C.dispatch("TEARDOWN",n)}});function mn(e,t,n){let r=an(C),l=e?r.get(e):void 0,a=l?l.count>0:!1;return k(()=>{if(!(!e||!t))return C.dispatch("PUSH",e,n),()=>C.dispatch("POP",e,n)},[t,e]),a}let re=new Map,I=new Map;function be(e,t=!0){k(()=>{var n;if(!t)return;let r=typeof e=="function"?e():e.current;if(!r)return;function l(){var o;if(!r)return;let i=(o=I.get(r))!=null?o:1;if(i===1?I.delete(r):I.set(r,i-1),i!==1)return;let s=re.get(r);s&&(s["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",s["aria-hidden"]),r.inert=s.inert,re.delete(r))}let a=(n=I.get(r))!=null?n:0;return I.set(r,a+1),a!==0||(re.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),l},[e,t])}function pn({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){var r;let l=u.useRef((r=n==null?void 0:n.current)!=null?r:null),a=U(l),o=y(()=>{var i;let s=[];for(let c of e)c!==null&&(c instanceof HTMLElement?s.push(c):"current"in c&&c.current instanceof HTMLElement&&s.push(c.current));if(t!=null&&t.current)for(let c of t.current)s.push(c);for(let c of(i=a==null?void 0:a.querySelectorAll("html > *, body > *"))!=null?i:[])c!==document.body&&c!==document.head&&c instanceof HTMLElement&&c.id!=="headlessui-portal-root"&&(c.contains(l.current)||s.some(d=>c.contains(d))||s.push(c));return s});return{resolveContainers:o,contains:y(i=>o().some(s=>s.contains(i))),mainTreeNodeRef:l,MainTreeNode:u.useMemo(()=>function(){return n!=null?null:g.createElement(ae,{features:J.Hidden,ref:l})},[l,n])}}var gn=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(gn||{}),vn=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(vn||{});let hn={0(e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},Q=u.createContext(null);Q.displayName="DialogContext";function W(e){let t=u.useContext(Q);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,W),n}return t}function wn(e,t,n=()=>[document.body]){mn(e,t,r=>{var l;return{containers:[...(l=r.containers)!=null?l:[],n]}})}function yn(e,t){return A(t.type,hn,e,t)}let En="div",bn=ye.RenderStrategy|ye.Static;function xn(e,t){var n;let r=O(),{id:l=`headlessui-dialog-${r}`,open:a,onClose:o,initialFocus:i,__demoMode:s=!1,...c}=e,[d,f]=u.useState(0),v=ut();a===void 0&&v!==null&&(a=(v&K.Open)===K.Open);let m=u.useRef(null),M=P(m,t),h=U(m),T=e.hasOwnProperty("open")||v!==null,L=e.hasOwnProperty("onClose");if(!T&&!L)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!T)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!L)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof a!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${a}`);if(typeof o!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${o}`);let E=a?0:1,[_,Be]=u.useReducer(yn,{titleId:null,descriptionId:null,panelRef:u.createRef()}),R=y(()=>o(!1)),ge=y(w=>Be({type:0,id:w})),V=Z()?s?!1:E===0:!1,Y=d>1,ve=u.useContext(Q)!==null,[Ue,We]=It(),{resolveContainers:ee,mainTreeNodeRef:G,MainTreeNode:_e}=pn({portals:Ue,defaultContainers:[(n=_.panelRef.current)!=null?n:m.current]}),Ve=Y?"parent":"leaf",he=v!==null?(v&K.Closing)===K.Closing:!1,Ye=(()=>ve||he?!1:V)(),Ge=u.useCallback(()=>{var w,S;return(S=Array.from((w=h==null?void 0:h.querySelectorAll("body > *"))!=null?w:[]).find(b=>b.id==="headlessui-portal-root"?!1:b.contains(G.current)&&b instanceof HTMLElement))!=null?S:null},[G]);be(Ge,Ye);let qe=(()=>Y?!0:V)(),Ke=u.useCallback(()=>{var w,S;return(S=Array.from((w=h==null?void 0:h.querySelectorAll("[data-headlessui-portal]"))!=null?w:[]).find(b=>b.contains(G.current)&&b instanceof HTMLElement))!=null?S:null},[G]);be(Ke,qe);let Xe=(()=>!(!V||Y))();ht(ee,R,Xe);let ze=(()=>!(Y||E!==0))();Ne(h==null?void 0:h.defaultView,"keydown",w=>{ze&&(w.defaultPrevented||w.key===Ce.Escape&&(w.preventDefault(),w.stopPropagation(),R()))});let Je=(()=>!(he||E!==0||ve))();wn(h,Je,ee),u.useEffect(()=>{if(E!==0||!m.current)return;let w=new ResizeObserver(S=>{for(let b of S){let q=b.target.getBoundingClientRect();q.x===0&&q.y===0&&q.width===0&&q.height===0&&R()}});return w.observe(m.current),()=>w.disconnect()},[E,m,R]);let[Qe,Ze]=Ut(),et=u.useMemo(()=>[{dialogState:E,close:R,setTitleId:ge},_],[E,_,R,ge]),we=u.useMemo(()=>({open:E===0}),[E]),tt={ref:M,id:l,role:"dialog","aria-modal":E===0?!0:void 0,"aria-labelledby":_.titleId,"aria-describedby":Qe};return g.createElement(qt,{type:"Dialog",enabled:E===0,element:m,onUpdate:y((w,S)=>{S==="Dialog"&&A(w,{[ce.Add]:()=>f(b=>b+1),[ce.Remove]:()=>f(b=>b-1)})})},g.createElement(ie,{force:!0},g.createElement(se,null,g.createElement(Q.Provider,{value:et},g.createElement(se.Group,{target:m},g.createElement(ie,{force:!1},g.createElement(Ze,{slot:we,name:"Dialog.Description"},g.createElement(j,{initialFocus:i,containers:ee,features:V?A(Ve,{parent:j.features.RestoreFocus,leaf:j.features.All&~j.features.FocusLock}):j.features.None},g.createElement(We,null,$({ourProps:tt,theirProps:c,slot:we,defaultTag:En,features:bn,visible:E===0,name:"Dialog"}))))))))),g.createElement(_e,null))}let $n="div";function Tn(e,t){let n=O(),{id:r=`headlessui-dialog-overlay-${n}`,...l}=e,[{dialogState:a,close:o}]=W("Dialog.Overlay"),i=P(t),s=y(d=>{if(d.target===d.currentTarget){if(wt(d.currentTarget))return d.preventDefault();d.preventDefault(),d.stopPropagation(),o()}}),c=u.useMemo(()=>({open:a===0}),[a]);return $({ourProps:{ref:i,id:r,"aria-hidden":!0,onClick:s},theirProps:l,slot:c,defaultTag:$n,name:"Dialog.Overlay"})}let Sn="div";function Pn(e,t){let n=O(),{id:r=`headlessui-dialog-backdrop-${n}`,...l}=e,[{dialogState:a},o]=W("Dialog.Backdrop"),i=P(t);u.useEffect(()=>{if(o.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[o.panelRef]);let s=u.useMemo(()=>({open:a===0}),[a]);return g.createElement(ie,{force:!0},g.createElement(se,null,$({ourProps:{ref:i,id:r,"aria-hidden":!0},theirProps:l,slot:s,defaultTag:Sn,name:"Dialog.Backdrop"})))}let Ln="div";function Dn(e,t){let n=O(),{id:r=`headlessui-dialog-panel-${n}`,...l}=e,[{dialogState:a},o]=W("Dialog.Panel"),i=P(t,o.panelRef),s=u.useMemo(()=>({open:a===0}),[a]),c=y(d=>{d.stopPropagation()});return $({ourProps:{ref:i,id:r,onClick:c},theirProps:l,slot:s,defaultTag:Ln,name:"Dialog.Panel"})}let Fn="h2";function Cn(e,t){let n=O(),{id:r=`headlessui-dialog-title-${n}`,...l}=e,[{dialogState:a,setTitleId:o}]=W("Dialog.Title"),i=P(t);u.useEffect(()=>(o(r),()=>o(null)),[r,o]);let s=u.useMemo(()=>({open:a===0}),[a]);return $({ourProps:{ref:i,id:r},theirProps:l,slot:s,defaultTag:Fn,name:"Dialog.Title"})}let Nn=x(xn),kn=x(Pn),Mn=x(Dn),Rn=x(Tn),An=x(Cn),xe=Object.assign(Nn,{Backdrop:kn,Panel:Mn,Overlay:Rn,Title:An,Description:Yt});function $e({className:e="",disabled:t,children:n,...r}){return p.jsx("button",{...r,className:`inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150 ${t&&"opacity-25"} `+e,disabled:t,children:n})}function On({children:e,show:t=!1,maxWidth:n="2xl",closeable:r=!0,onClose:l=()=>{}}){const a=()=>{r&&l()},o={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[n];return p.jsx(te,{show:t,as:u.Fragment,leave:"duration-200",children:p.jsxs(xe,{as:"div",id:"modal",className:"fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",onClose:a,children:[p.jsx(te.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:p.jsx("div",{className:"absolute inset-0 bg-gray-500/75 dark:bg-gray-900/75"})}),p.jsx(te.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:p.jsx(xe.Panel,{className:`mb-6 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${o}`,children:e})})]})})}function jn({type:e="button",className:t="",disabled:n,children:r,...l}){return p.jsx("button",{...l,type:e,className:`inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 rounded-md font-semibold text-xs text-gray-700 dark:text-gray-300 uppercase tracking-widest shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-25 transition ease-in-out duration-150 ${n&&"opacity-25"} `+t,disabled:n,children:r})}function _n({className:e=""}){const[t,n]=u.useState(!1),r=u.useRef(),{data:l,setData:a,delete:o,processing:i,reset:s,errors:c}=rt({password:""}),d=()=>{n(!0)},f=m=>{m.preventDefault(),o(route("settings.destroy"),{preserveScroll:!0,onSuccess:()=>v(),onError:()=>{var M;return(M=r.current)==null?void 0:M.focus()},onFinish:()=>s()})},v=()=>{n(!1),s()};return p.jsxs("section",{className:`space-y-6 ${e}`,children:[p.jsxs("header",{children:[p.jsx("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Delete Account"}),p.jsx("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),p.jsx($e,{onClick:d,children:"Delete Account"}),p.jsx(On,{show:t,onClose:v,children:p.jsxs("form",{onSubmit:f,className:"p-6",children:[p.jsx("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Are you sure you want to delete your account?"}),p.jsx("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),p.jsxs("div",{className:"mt-6",children:[p.jsx(lt,{htmlFor:"password",value:"Password",className:"sr-only"}),p.jsx(st,{id:"password",type:"password",name:"password",ref:r,value:l.password,onChange:m=>a("password",m.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),p.jsx(ot,{message:c.password,className:"mt-2"})]}),p.jsxs("div",{className:"mt-6 flex justify-end",children:[p.jsx(jn,{onClick:v,children:"Cancel"}),p.jsx($e,{className:"ms-3",disabled:i,children:"Delete Account"})]})]})})]})}export{_n as default};
