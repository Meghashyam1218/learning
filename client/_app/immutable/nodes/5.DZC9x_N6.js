import{a as ie,e as u,b as I,c,d as $,q as T,f as N,h as O,k as o,l as ue,m as l,u as w,v as A,I as He,n as V,r as me,J as $e,K as fe,L as Be,B as Z,w as qe,M as ee}from"../chunks/scheduler.6XUfPiCK.js";import{S as ce,i as de,f as te,c as ne,a as oe,m as re,t as le,b as ae,d as se}from"../chunks/index.u7qvFAmV.js";import{L as Ke}from"../chunks/LoginImage.Zr8_5fYL.js";function Je(a){let n,t,s='Age <span class="text-red-500">*</span>',f,e,r,b="-",d,i,m,_,h="+",C,y;return{c(){n=u("div"),t=u("label"),t.innerHTML=s,f=I(),e=u("div"),r=u("button"),r.textContent=b,d=I(),i=u("input"),m=I(),_=u("button"),_.textContent=h,this.h()},l(x){n=c(x,"DIV",{class:!0});var p=$(n);t=c(p,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),T(t)!=="svelte-15h70nf"&&(t.innerHTML=s),f=N(p),e=c(p,"DIV",{class:!0});var L=$(e);r=c(L,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),T(r)!=="svelte-mnf1a7"&&(r.textContent=b),d=N(L),i=c(L,"INPUT",{id:!0,name:!0,type:!0,min:!0,max:!0,placeholder:!0,class:!0}),m=N(L),_=c(L,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),T(_)!=="svelte-ptwfv3"&&(_.textContent=h),L.forEach(O),p.forEach(O),this.h()},h(){o(t,"for","age"),o(t,"class","font-medium"),o(r,"type","button"),o(r,"class","bg-transparent border-[1px] basis-1/5 border-zinc-800 p-2 rounded-l-lg text-indigo-800 font-medium text-xl focus:outline-indigo-900"),o(i,"id","age"),o(i,"name","age"),o(i,"type","number"),o(i,"min","0"),o(i,"max","100"),o(i,"placeholder","Enter your mail address"),o(i,"class","outline-none py-2 text-center px-4 basis-3/5 bg-transparent border-[1px] border-y-zinc-800 focus:border-transparent focus:outline-indigo-900 tracking-wide svelte-6isbck"),o(_,"type","button"),o(_,"class","bg-transparent border-[1px] basis-1/5 border-zinc-800 p-2 rounded-r-lg text-indigo-800 font-medium text-xl focus:outline-indigo-900"),o(e,"class","mt-2 flex gap-0 w-[100%]"),o(n,"class","input-field flex flex-col")},m(x,p){ue(x,n,p),l(n,t),l(n,f),l(n,e),l(e,r),l(e,d),l(e,i),w(i,a[0]),l(e,m),l(e,_),C||(y=[A(r,"click",a[2]),A(i,"input",a[3]),A(_,"click",a[1])],C=!0)},p(x,[p]){p&1&&He(i.value)!==x[0]&&w(i,x[0])},i:V,o:V,d(x){x&&O(n),C=!1,me(y)}}}function Ye(a,n,t){let{age:s=18}=n;const f=()=>t(0,s+=1),e=()=>{s>0&&t(0,s-=1)};function r(){s=He(this.value),t(0,s)}return a.$$set=b=>{"age"in b&&t(0,s=b.age)},[s,f,e,r]}class Ge extends ce{constructor(n){super(),de(this,n,Ye,Je,ie,{age:0})}}function We(a){let n,t,s='Location <span class="text-red-500">*</span>',f,e,r,b="Kolkata",d,i="Bangalore",m,_="Chennai",h,C="Mumbai",y,x="Delhi",p,L="Hyderabad",P,D;return{c(){n=u("div"),t=u("label"),t.innerHTML=s,f=I(),e=u("select"),r=u("option"),r.textContent=b,d=u("option"),d.textContent=i,m=u("option"),m.textContent=_,h=u("option"),h.textContent=C,y=u("option"),y.textContent=x,p=u("option"),p.textContent=L,this.h()},l(R){n=c(R,"DIV",{class:!0});var k=$(n);t=c(k,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),T(t)!=="svelte-1u8q3fp"&&(t.innerHTML=s),f=N(k),e=c(k,"SELECT",{id:!0,class:!0});var v=$(e);r=c(v,"OPTION",{"data-svelte-h":!0}),T(r)!=="svelte-i19qeg"&&(r.textContent=b),d=c(v,"OPTION",{"data-svelte-h":!0}),T(d)!=="svelte-1535afs"&&(d.textContent=i),m=c(v,"OPTION",{"data-svelte-h":!0}),T(m)!=="svelte-1nf9vyi"&&(m.textContent=_),h=c(v,"OPTION",{"data-svelte-h":!0}),T(h)!=="svelte-ko9mwm"&&(h.textContent=C),y=c(v,"OPTION",{"data-svelte-h":!0}),T(y)!=="svelte-g6j0su"&&(y.textContent=x),p=c(v,"OPTION",{"data-svelte-h":!0}),T(p)!=="svelte-gpx5em"&&(p.textContent=L),v.forEach(O),k.forEach(O),this.h()},h(){o(t,"for","location"),o(t,"class","font-medium"),r.__value="Kolkata",w(r,r.__value),d.__value="Bangalore",w(d,d.__value),m.__value="Chennai",w(m,m.__value),h.__value="Mumbai",w(h,h.__value),y.__value="Delhi",w(y,y.__value),p.__value="Hyderabad",w(p,p.__value),o(e,"id","location"),o(e,"class","mt-2 rounded-lg border-[1px] border-zinc-800 bg-transparent px-4 py-2 tracking-wide outline-none focus:border-transparent focus:outline-indigo-900"),a[0]===void 0&&$e(()=>a[1].call(e)),o(n,"class","input-field flex flex-col")},m(R,k){ue(R,n,k),l(n,t),l(n,f),l(n,e),l(e,r),l(e,d),l(e,m),l(e,h),l(e,y),l(e,p),fe(e,a[0],!0),P||(D=A(e,"change",a[1]),P=!0)},p(R,[k]){k&1&&fe(e,R[0])},i:V,o:V,d(R){R&&O(n),P=!1,D()}}}function Qe(a,n,t){let{location:s="Kolkata"}=n;function f(){s=Be(this),t(0,s)}return a.$$set=e=>{"location"in e&&t(0,s=e.location)},[s,f]}class Xe extends ce{constructor(n){super(),de(this,n,Qe,We,ie,{location:0})}}function Ze(a){let n,t,s='Years of Experience <span class="text-red-500">*</span>',f,e,r,b="-",d,i,m,_,h="+",C,y;return{c(){n=u("div"),t=u("label"),t.innerHTML=s,f=I(),e=u("div"),r=u("button"),r.textContent=b,d=I(),i=u("input"),m=I(),_=u("button"),_.textContent=h,this.h()},l(x){n=c(x,"DIV",{class:!0});var p=$(n);t=c(p,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),T(t)!=="svelte-120bioo"&&(t.innerHTML=s),f=N(p),e=c(p,"DIV",{class:!0});var L=$(e);r=c(L,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),T(r)!=="svelte-d9z6oa"&&(r.textContent=b),d=N(L),i=c(L,"INPUT",{id:!0,name:!0,type:!0,class:!0}),m=N(L),_=c(L,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),T(_)!=="svelte-1okc846"&&(_.textContent=h),L.forEach(O),p.forEach(O),this.h()},h(){o(t,"for","experience"),o(t,"class","font-medium"),o(r,"type","button"),o(r,"class","bg-transparent border-[1px] basis-1/5 border-zinc-800 p-2 rounded-l-lg text-indigo-800 font-medium text-xl focus:outline-indigo-900"),o(i,"id","experience"),o(i,"name","experience"),o(i,"type","text"),i.readOnly=!0,o(i,"class","outline-none py-2 text-center px-4 basis-3/5 bg-transparent border-[1px] border-y-zinc-800 focus:border-transparent focus:outline-indigo-900 tracking-wide"),o(_,"type","button"),o(_,"class","bg-transparent border-[1px] basis-1/5 border-zinc-800 p-2 rounded-r-lg text-indigo-800 font-medium text-xl focus:outline-indigo-900"),o(e,"class","mt-2 flex gap-0 w-[100%]"),o(n,"class","input-field flex flex-col")},m(x,p){ue(x,n,p),l(n,t),l(n,f),l(n,e),l(e,r),l(e,d),l(e,i),w(i,a[0]),l(e,m),l(e,_),C||(y=[A(r,"click",a[2]),A(i,"input",a[3]),A(_,"click",a[1])],C=!0)},p(x,[p]){p&1&&i.value!==x[0]&&w(i,x[0])},i:V,o:V,d(x){x&&O(n),C=!1,me(y)}}}function et(a,n,t){let{experience:s="<2"}=n;const f=()=>{s==="<2"?t(0,s="2-4"):s==="2-4"&&t(0,s=">4")},e=()=>{s===">4"?t(0,s="2-4"):s==="2-4"&&t(0,s="<2")};function r(){s=this.value,t(0,s)}return a.$$set=b=>{"experience"in b&&t(0,s=b.experience)},[s,f,e,r]}class tt extends ce{constructor(n){super(),de(this,n,et,Ze,ie,{experience:0})}}function nt(a){let n,t,s='Current Role <span class="text-red-500">*</span>',f,e,r,b="Full-Stack Developer",d,i="Frontend Developer",m,_="Backend Developer",h,C="Mobile App Developer",y,x="Game Developer",p,L="Data Scientist",P,D="Software Engineer",R,k;return{c(){n=u("div"),t=u("label"),t.innerHTML=s,f=I(),e=u("select"),r=u("option"),r.textContent=b,d=u("option"),d.textContent=i,m=u("option"),m.textContent=_,h=u("option"),h.textContent=C,y=u("option"),y.textContent=x,p=u("option"),p.textContent=L,P=u("option"),P.textContent=D,this.h()},l(v){n=c(v,"DIV",{class:!0});var M=$(n);t=c(M,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),T(t)!=="svelte-3c7bw1"&&(t.innerHTML=s),f=N(M),e=c(M,"SELECT",{id:!0,class:!0});var S=$(e);r=c(S,"OPTION",{"data-svelte-h":!0}),T(r)!=="svelte-1mf1ae"&&(r.textContent=b),d=c(S,"OPTION",{"data-svelte-h":!0}),T(d)!=="svelte-5froiy"&&(d.textContent=i),m=c(S,"OPTION",{"data-svelte-h":!0}),T(m)!=="svelte-bnybv2"&&(m.textContent=_),h=c(S,"OPTION",{"data-svelte-h":!0}),T(h)!=="svelte-32tnqu"&&(h.textContent=C),y=c(S,"OPTION",{"data-svelte-h":!0}),T(y)!=="svelte-1rfrefi"&&(y.textContent=x),p=c(S,"OPTION",{"data-svelte-h":!0}),T(p)!=="svelte-db2tje"&&(p.textContent=L),P=c(S,"OPTION",{"data-svelte-h":!0}),T(P)!=="svelte-mhlzym"&&(P.textContent=D),S.forEach(O),M.forEach(O),this.h()},h(){o(t,"for","currentRole"),o(t,"class","font-medium"),r.__value="Full-Stack Developer",w(r,r.__value),d.__value="Frontend Developer",w(d,d.__value),m.__value="Backend Developer",w(m,m.__value),h.__value="Mobile App Developer",w(h,h.__value),y.__value="Game Developer",w(y,y.__value),p.__value="Data Scientist",w(p,p.__value),P.__value="Software Engineer",w(P,P.__value),o(e,"id","currentRole"),o(e,"class","mt-2 rounded-lg border-[1px] border-zinc-800 bg-transparent px-4 py-2 tracking-wide outline-none focus:border-transparent focus:outline-indigo-900"),a[0]===void 0&&$e(()=>a[1].call(e)),o(n,"class","input-field flex flex-col")},m(v,M){ue(v,n,M),l(n,t),l(n,f),l(n,e),l(e,r),l(e,d),l(e,m),l(e,h),l(e,y),l(e,p),l(e,P),fe(e,a[0],!0),R||(k=A(e,"change",a[1]),R=!0)},p(v,[M]){M&1&&fe(e,v[0])},i:V,o:V,d(v){v&&O(n),R=!1,k()}}}function ot(a,n,t){let{currentRole:s="Full-Stack Developer"}=n;function f(){s=Be(this),t(0,s)}return a.$$set=e=>{"currentRole"in e&&t(0,s=e.currentRole)},[s,f]}class rt extends ce{constructor(n){super(),de(this,n,ot,nt,ie,{currentRole:0})}}function lt(a){let n,t,s='Phone Number <span class="text-red-500">*</span>',f,e,r,b,d,i,m;return{c(){n=u("div"),t=u("label"),t.innerHTML=s,f=I(),e=u("div"),r=u("input"),b=I(),d=u("input"),this.h()},l(_){n=c(_,"DIV",{class:!0});var h=$(n);t=c(h,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),T(t)!=="svelte-qvrytc"&&(t.innerHTML=s),f=N(h),e=c(h,"DIV",{class:!0});var C=$(e);r=c(C,"INPUT",{id:!0,name:!0,type:!0,placeholder:!0,class:!0}),b=N(C),d=c(C,"INPUT",{id:!0,name:!0,type:!0,placeholder:!0,class:!0}),C.forEach(O),h.forEach(O),this.h()},h(){o(t,"for","phone"),o(t,"class","font-medium"),o(r,"id","countryCode"),o(r,"name","countryCode"),o(r,"type","text"),o(r,"placeholder","+91"),o(r,"class","outline-none py-2 px-4 rounded-l-lg bg-transparent border-[1px] border-zinc-800 focus:border-r-zinc-800 focus:border-transparent focus:outline-indigo-900 tracking-wide w-20 text-center"),o(d,"id","phone"),o(d,"name","phone"),o(d,"type","tel"),o(d,"placeholder","Enter your phone number"),o(d,"class","outline-none py-2 px-4 rounded-r-lg bg-transparent border-l-0 border-[1px] border-zinc-800 focus:border-transparent focus:outline-indigo-900 tracking-wide w-full"),o(e,"class","flex mt-2"),o(n,"class","input-field mt-2 flex flex-col")},m(_,h){ue(_,n,h),l(n,t),l(n,f),l(n,e),l(e,r),w(r,a[0]),l(e,b),l(e,d),w(d,a[1]),i||(m=[A(r,"input",a[2]),A(d,"input",a[3])],i=!0)},p(_,[h]){h&1&&r.value!==_[0]&&w(r,_[0]),h&2&&w(d,_[1])},i:V,o:V,d(_){_&&O(n),i=!1,me(m)}}}function at(a,n,t){let{countryCode:s="+91"}=n,{phoneNumber:f=""}=n;function e(){s=this.value,t(0,s)}function r(){f=this.value,t(1,f)}return a.$$set=b=>{"countryCode"in b&&t(0,s=b.countryCode),"phoneNumber"in b&&t(1,f=b.phoneNumber)},[s,f,e,r]}class st extends ce{constructor(n){super(),de(this,n,at,lt,ie,{countryCode:0,phoneNumber:1})}}function it(a){let n,t,s,f,e,r,b='<h2 class="welcome font-mono text-4xl font-semibold tracking-tight text-zinc-700">Welcome!</h2> <h3 class="welcome-text">Your gateway to knowledge starts here.</h3>',d,i,m,_='Username <span class="text-red-500">*</span>',h,C,y,x,p,L='Email <span class="text-red-500">*</span>',P,D,R,k,v,M='Password <span class="text-red-500">*</span>',S,B,X,z,ge,_e,U,he,ve,be,j,xe,Ce,F,ye,Te,q,we,Le,K,ke="Register",Ee,J,Oe='Already have an account? <a href="/login" class="font-medium text-indigo-800 underline underline-offset-2">Login here</a>',pe,Ie,De;t=new Ke({props:{name:"Register"}});function ze(g){a[13](g)}let Pe={};a[0]!==void 0&&(Pe.age=a[0]),z=new Ge({props:Pe}),Z.push(()=>te(z,"age",ze));function Ae(g){a[14](g)}function Ue(g){a[15](g)}let Ne={};a[4]!==void 0&&(Ne.countryCode=a[4]),a[5]!==void 0&&(Ne.phoneNumber=a[5]),U=new st({props:Ne}),Z.push(()=>te(U,"countryCode",Ae)),Z.push(()=>te(U,"phoneNumber",Ue));function Ve(g){a[16](g)}let Re={};a[6]!==void 0&&(Re.location=a[6]),j=new Xe({props:Re}),Z.push(()=>te(j,"location",Ve));function je(g){a[17](g)}let Me={};a[7]!==void 0&&(Me.experience=a[7]),F=new tt({props:Me}),Z.push(()=>te(F,"experience",je));function Fe(g){a[18](g)}let Se={};return a[8]!==void 0&&(Se.currentRole=a[8]),q=new rt({props:Se}),Z.push(()=>te(q,"currentRole",Fe)),{c(){n=u("section"),ne(t.$$.fragment),s=I(),f=u("div"),e=u("form"),r=u("div"),r.innerHTML=b,d=I(),i=u("div"),m=u("label"),m.innerHTML=_,h=I(),C=u("input"),y=I(),x=u("div"),p=u("label"),p.innerHTML=L,P=I(),D=u("input"),R=I(),k=u("div"),v=u("label"),v.innerHTML=M,S=I(),B=u("input"),X=I(),ne(z.$$.fragment),_e=I(),ne(U.$$.fragment),be=I(),ne(j.$$.fragment),Ce=I(),ne(F.$$.fragment),Te=I(),ne(q.$$.fragment),Le=I(),K=u("button"),K.textContent=ke,Ee=I(),J=u("p"),J.innerHTML=Oe,this.h()},l(g){n=c(g,"SECTION",{class:!0});var H=$(n);oe(t.$$.fragment,H),s=N(H),f=c(H,"DIV",{class:!0});var Y=$(f);e=c(Y,"FORM",{class:!0});var E=$(e);r=c(E,"DIV",{class:!0,"data-svelte-h":!0}),T(r)!=="svelte-bs2n27"&&(r.innerHTML=b),d=N(E),i=c(E,"DIV",{class:!0});var G=$(i);m=c(G,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),T(m)!=="svelte-1b6zelh"&&(m.innerHTML=_),h=N(G),C=c(G,"INPUT",{id:!0,name:!0,type:!0,placeholder:!0,class:!0}),G.forEach(O),y=N(E),x=c(E,"DIV",{class:!0});var W=$(x);p=c(W,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),T(p)!=="svelte-1mct039"&&(p.innerHTML=L),P=N(W),D=c(W,"INPUT",{id:!0,name:!0,type:!0,placeholder:!0,class:!0}),W.forEach(O),R=N(E),k=c(E,"DIV",{class:!0});var Q=$(k);v=c(Q,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),T(v)!=="svelte-4iuwm9"&&(v.innerHTML=M),S=N(Q),B=c(Q,"INPUT",{id:!0,name:!0,type:!0,placeholder:!0,class:!0}),Q.forEach(O),X=N(E),oe(z.$$.fragment,E),_e=N(E),oe(U.$$.fragment,E),be=N(E),oe(j.$$.fragment,E),Ce=N(E),oe(F.$$.fragment,E),Te=N(E),oe(q.$$.fragment,E),Le=N(E),K=c(E,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),T(K)!=="svelte-7xgpjv"&&(K.textContent=ke),E.forEach(O),Ee=N(Y),J=c(Y,"P",{class:!0,"data-svelte-h":!0}),T(J)!=="svelte-1ckrrd6"&&(J.innerHTML=Oe),Y.forEach(O),H.forEach(O),this.h()},h(){o(r,"class","header"),o(m,"for","username"),o(m,"class","font-medium"),o(C,"id","username"),o(C,"name","username"),o(C,"type","text"),o(C,"placeholder","Enter your username"),o(C,"class","mt-2 rounded-lg border-[1px] border-zinc-800 bg-transparent px-4 py-2 tracking-wide outline-none focus:border-transparent focus:outline-indigo-900"),o(i,"class","input-field mt-2 flex flex-col"),o(p,"for","email"),o(p,"class","font-medium"),o(D,"id","email"),o(D,"name","email"),o(D,"type","email"),o(D,"placeholder","Enter your email address"),o(D,"class","mt-2 rounded-lg border-[1px] border-zinc-800 bg-transparent px-4 py-2 tracking-wide outline-none focus:border-transparent focus:outline-indigo-900"),o(x,"class","input-field flex flex-col"),o(v,"for","password"),o(v,"class","font-medium"),o(B,"id","password"),o(B,"name","password"),o(B,"type","password"),o(B,"placeholder","Enter your password"),o(B,"class","mt-2 rounded-lg border-[1px] border-zinc-800 bg-transparent px-4 py-2 tracking-wide outline-none focus:border-transparent focus:outline-indigo-900"),o(k,"class","input-field flex flex-col"),o(K,"type","submit"),o(K,"class","mt-4 rounded-md bg-indigo-800 px-1 py-2 text-xl text-slate-200"),o(e,"class","mx-auto mt-10 flex w-[100%] max-w-[400px] flex-col gap-4"),o(J,"class","mx-auto mb-10 mt-5 w-[100%] max-w-[400px] text-center"),o(f,"class","form-container mx-auto flex flex-col justify-center bg-slate-100 px-4 sm:basis-2/3 md:basis-1/2 md:px-10"),o(n,"class","login container mx-auto flex min-h-[100vh] w-[100vw] rounded-md p-4")},m(g,H){ue(g,n,H),re(t,n,null),l(n,s),l(n,f),l(f,e),l(e,r),l(e,d),l(e,i),l(i,m),l(i,h),l(i,C),w(C,a[1]),l(e,y),l(e,x),l(x,p),l(x,P),l(x,D),w(D,a[2]),l(e,R),l(e,k),l(k,v),l(k,S),l(k,B),w(B,a[3]),l(e,X),re(z,e,null),l(e,_e),re(U,e,null),l(e,be),re(j,e,null),l(e,Ce),re(F,e,null),l(e,Te),re(q,e,null),l(e,Le),l(e,K),l(f,Ee),l(f,J),pe=!0,Ie||(De=[A(C,"input",a[10]),A(D,"input",a[11]),A(B,"input",a[12]),A(e,"submit",qe(a[9]))],Ie=!0)},p(g,[H]){H&2&&C.value!==g[1]&&w(C,g[1]),H&4&&D.value!==g[2]&&w(D,g[2]),H&8&&B.value!==g[3]&&w(B,g[3]);const Y={};!ge&&H&1&&(ge=!0,Y.age=g[0],ee(()=>ge=!1)),z.$set(Y);const E={};!he&&H&16&&(he=!0,E.countryCode=g[4],ee(()=>he=!1)),!ve&&H&32&&(ve=!0,E.phoneNumber=g[5],ee(()=>ve=!1)),U.$set(E);const G={};!xe&&H&64&&(xe=!0,G.location=g[6],ee(()=>xe=!1)),j.$set(G);const W={};!ye&&H&128&&(ye=!0,W.experience=g[7],ee(()=>ye=!1)),F.$set(W);const Q={};!we&&H&256&&(we=!0,Q.currentRole=g[8],ee(()=>we=!1)),q.$set(Q)},i(g){pe||(le(t.$$.fragment,g),le(z.$$.fragment,g),le(U.$$.fragment,g),le(j.$$.fragment,g),le(F.$$.fragment,g),le(q.$$.fragment,g),pe=!0)},o(g){ae(t.$$.fragment,g),ae(z.$$.fragment,g),ae(U.$$.fragment,g),ae(j.$$.fragment,g),ae(F.$$.fragment,g),ae(q.$$.fragment,g),pe=!1},d(g){g&&O(n),se(t),se(z),se(U),se(j),se(F),se(q),Ie=!1,me(De)}}}function ut(a,n,t){let s=18,f="",e="",r="",b="+91",d="",i="Kolkata",m="<2",_="Full-Stack Developer";async function h(){const v={username:f,email:e,password:r,mob:b+d,age:s};console.log("Form submitted with:",v);try{const M=await fetch("{ngrokURL}/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)}),S=await M.json();if(M.status===201){const B={email:v.email,password:v.password},X=await fetch("{ngrokURL}/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(B)}),z=await X.json();X.status==201&&z.token?(typeof window<"u"&&(localStorage.setItem("token",z.token),localStorage.setItem("username",f),localStorage.setItem("userAge",s),localStorage.setItem("userLocation",i),localStorage.setItem("userExperience",m),localStorage.setItem("userRole",_)),console.log("Registration successful:",S.message),alert("Registration successful! Redirecting to onboarding..."),window.location.href="/onBoarding"):(console.error("Login failed:",z.error),alert(`Login failed: ${z.message}`))}else console.error("Registration failed:",S.error),alert(`Registration failed: ${S.message}`)}catch(M){console.error("Error occurred:",M),alert("An error occurred. Please try again.")}}function C(){f=this.value,t(1,f)}function y(){e=this.value,t(2,e)}function x(){r=this.value,t(3,r)}function p(v){s=v,t(0,s)}function L(v){b=v,t(4,b)}function P(v){d=v,t(5,d)}function D(v){i=v,t(6,i)}function R(v){m=v,t(7,m)}function k(v){_=v,t(8,_)}return[s,f,e,r,b,d,i,m,_,h,C,y,x,p,L,P,D,R,k]}class ft extends ce{constructor(n){super(),de(this,n,ut,it,ie,{})}}export{ft as component};
