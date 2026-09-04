import{r as l,j as o,g as y,d as w}from"./index-BkS9S1GA.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),f=(...t)=>t.filter((e,s,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===s).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=l.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:n="",children:i,iconNode:p,...c},x)=>l.createElement("svg",{ref:x,..._,width:e,height:e,stroke:t,strokeWidth:a?Number(s)*24/Number(e):s,className:f("lucide",n),...c},[...p.map(([d,h])=>l.createElement(d,h)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=(t,e)=>{const s=l.forwardRef(({className:a,...n},i)=>l.createElement(j,{ref:i,iconNode:e,className:f(`lucide-${v(t)}`,a),...n}));return s.displayName=`${t}`,s};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=k("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),C={primary:"text-white bg-gradient-to-br from-brand-500 to-brand-700 shadow-[0_10px_30px_-8px_rgba(63,102,240,0.55)] hover:shadow-[0_16px_40px_-8px_rgba(63,102,240,0.7)]",peach:"text-white bg-gradient-to-br from-peach-400 to-peach-600 shadow-[0_10px_30px_-8px_rgba(234,92,29,0.5)] hover:shadow-[0_16px_40px_-8px_rgba(234,92,29,0.65)]",glass:"text-ink glass-strong hover:bg-white/90",ghost:"text-ink-soft hover:text-ink hover:bg-white/60"},A={sm:"h-9 px-4 text-[13px] gap-1.5 rounded-xl",md:"h-11 px-5 text-sm gap-2 rounded-2xl",lg:"h-[52px] px-7 text-[15px] gap-2.5 rounded-2xl"};function R({children:t,variant:e="primary",size:s="md",className:a,onClick:n,type:i="button",icon:p,iconRight:c}){const[x,d]=l.useState([]),h=r=>{const u=r.currentTarget.getBoundingClientRect(),g=Date.now();d(m=>[...m,{id:g,x:r.clientX-u.left,y:r.clientY-u.top}]),setTimeout(()=>d(m=>m.filter(b=>b.id!==g)),650),n==null||n(r)};return o.jsxs(y.button,{type:i,onClick:h,whileHover:{y:-2},whileTap:{scale:.97},transition:{type:"spring",stiffness:400,damping:22},className:w("relative inline-flex select-none items-center justify-center overflow-hidden font-semibold","transition-colors duration-300",C[e],A[s],a),children:[p&&o.jsx("span",{className:"relative z-10 -ml-0.5 inline-flex",children:p}),o.jsx("span",{className:"relative z-10",children:t}),c&&o.jsx("span",{className:"relative z-10 -mr-0.5 inline-flex",children:c}),x.map(r=>o.jsx("span",{className:"pointer-events-none absolute z-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 animate-[ripple_0.65s_ease-out] rounded-full bg-white/40",style:{left:r.x,top:r.y}},r.id)),o.jsx("style",{children:"@keyframes ripple{from{transform:translate(-50%,-50%) scale(1);opacity:.5}to{transform:translate(-50%,-50%) scale(46);opacity:0}}"})]})}const z={type:"spring",stiffness:220,damping:30,mass:.9},E={hidden:{opacity:0,y:26,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{duration:.7,ease:[.22,1,.36,1]}}},B=(t=.09,e=0)=>({hidden:{},visible:{transition:{staggerChildren:t,delayChildren:e}}}),$={hidden:{opacity:0,y:18},visible:{opacity:1,y:0,transition:{duration:.6,ease:[.22,1,.36,1]}}},I={hidden:{opacity:0,scale:.94,filter:"blur(8px)"},visible:{opacity:1,scale:1,filter:"blur(0px)",transition:{duration:.7,ease:[.22,1,.36,1]}}};export{L as A,R as L,I as a,z as b,k as c,$ as f,E as r,B as s};
