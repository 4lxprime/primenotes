import{s as j,n as x,h as k}from"../chunks/scheduler.3ef1b4ce.js";import{S as y,i as q,g as d,m as E,s as C,h as f,j as b,n as $,f as m,c as D,k as g,a as H,x as p,o as S}from"../chunks/index.051df08a.js";import{d as I}from"../chunks/singletons.2607f8de.js";const P=()=>{const s=I;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},V={subscribe(s){return P().page.subscribe(s)}};function w(s){var _;let e,a,r=s[0].status+"",o,h,c,i=((_=s[0].error)==null?void 0:_.message)+"",u;return{c(){e=d("div"),a=d("h1"),o=E(r),h=C(),c=d("p"),u=E(i),this.h()},l(n){e=f(n,"DIV",{class:!0});var t=b(e);a=f(t,"H1",{class:!0});var l=b(a);o=$(l,r),l.forEach(m),h=D(t),c=f(t,"P",{class:!0});var v=b(c);u=$(v,i),v.forEach(m),t.forEach(m),this.h()},h(){g(a,"class","font-black text-8xl"),g(c,"class","font-light text-3xl"),g(e,"class","justify-center text-center items-center")},m(n,t){H(n,e,t),p(e,a),p(a,o),p(e,h),p(e,c),p(c,u)},p(n,[t]){var l;t&1&&r!==(r=n[0].status+"")&&S(o,r),t&1&&i!==(i=((l=n[0].error)==null?void 0:l.message)+"")&&S(u,i)},i:x,o:x,d(n){n&&m(e)}}}function z(s,e,a){let r;return k(s,V,o=>a(0,r=o)),[r]}let G=class extends y{constructor(e){super(),q(this,e,z,w,j,{})}};export{G as component};
