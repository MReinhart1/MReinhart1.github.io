"use strict";exports.id=877,exports.ids=[877],exports.modules={3877:(e,t,s)=>{s.r(t),s.d(t,{default:()=>o,metadata:()=>n});var r=s(5036),d=s(196),i=s(1066),l=s(5081),a=s(3996);function c({article:e}){return(0,r.jsxs)("article",{className:"md:grid md:grid-cols-4 md:items-baseline",children:[(0,r.jsxs)(d.Z,{className:"md:col-span-3",children:[r.jsx(d.Z.Title,{href:`/articles/${e.slug}`,children:e.title}),r.jsx(d.Z.Eyebrow,{as:"time",dateTime:e.date,className:"md:hidden",decorate:!0,children:(0,a.p)(e.date)}),r.jsx(d.Z.Description,{children:e.description}),r.jsx(d.Z.Cta,{children:"Read article"})]}),r.jsx(d.Z.Eyebrow,{as:"time",dateTime:e.date,className:"mt-1 hidden md:block",children:(0,a.p)(e.date)})]})}let n={title:"Articles",description:"All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."};async function o(){let e=await (0,l.z)();return r.jsx(i.X,{title:"Writing on software design, company building, and the aerospace industry.",intro:"All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.",children:r.jsx("div",{className:"md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40",children:r.jsx("div",{className:"flex max-w-3xl flex-col space-y-16",children:e.map(e=>r.jsx(c,{article:e},e.slug))})})})}},1066:(e,t,s)=>{s.d(t,{X:()=>i});var r=s(5036),d=s(9091);function i({title:e,intro:t,children:s}){return(0,r.jsxs)(d.W2,{className:"mt-16 sm:mt-32",children:[(0,r.jsxs)("header",{className:"max-w-2xl",children:[r.jsx("h1",{className:"text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100",children:e}),r.jsx("p",{className:"mt-6 text-base text-zinc-600 dark:text-zinc-400",children:t})]}),s&&r.jsx("div",{className:"mt-16 sm:mt-20",children:s})]})}}};