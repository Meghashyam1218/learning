import{a as S,e as _,t as f,b as x,c as d,d as g,g as h,h as l,f as q,l as m,m as v,o as $,n as E,p as y}from"../chunks/scheduler.6XUfPiCK.js";import{S as C,i as H}from"../chunks/index.u7qvFAmV.js";import{s as P}from"../chunks/entry.C5LlPNOW.js";const j=()=>{const s=P;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},k={subscribe(s){return j().page.subscribe(s)}};function w(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",u;return{c(){t=_("h1"),o=f(r),n=x(),i=_("p"),u=f(c)},l(e){t=d(e,"H1",{});var a=g(t);o=h(a,r),a.forEach(l),n=q(e),i=d(e,"P",{});var p=g(i);u=h(p,c),p.forEach(l)},m(e,a){m(e,t,a),v(t,o),m(e,n,a),m(e,i,a),v(i,u)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&$(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&$(u,c)},i:E,o:E,d(e){e&&(l(t),l(n),l(i))}}}function z(s,t,r){let o;return y(s,k,n=>r(0,o=n)),[o]}let F=class extends C{constructor(t){super(),H(this,t,z,w,S,{})}};export{F as component};
