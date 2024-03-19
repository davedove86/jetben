import{s as G,e as ne,u as oe,g as re,f as ie,h as de,n as O}from"../chunks/scheduler.7VkZYFbt.js";import{S as Q,i as Y,e as _,s as L,b,p as x,d as u,a as B,g as P,j as D,k as w,r as C,B as ue,t as T,y as he,l as E,w as me,C as Z,c as z,h as pe,f as K,m as U,n as W,A as ge,o as le,q as ce}from"../chunks/index.i7fBVTud.js";import{e as fe}from"../chunks/each.6w4Ej4nR.js";import{C as ve}from"../chunks/ContactCta.MTmroOmW.js";function _e(r){const e=r-1;return e*e*e+1}function ee(r,{delay:e=0,duration:s=400,easing:a=_e,axis:o="y"}={}){const t=getComputedStyle(r),i=+t.opacity,l=o==="y"?"height":"width",g=parseFloat(t[l]),y=o==="y"?["top","bottom"]:["left","right"],f=y.map(v=>`${v[0].toUpperCase()}${v.slice(1)}`),j=parseFloat(t[`padding${f[0]}`]),p=parseFloat(t[`padding${f[1]}`]),c=parseFloat(t[`margin${f[0]}`]),d=parseFloat(t[`margin${f[1]}`]),h=parseFloat(t[`border${f[0]}Width`]),$=parseFloat(t[`border${f[1]}Width`]);return{delay:e,duration:s,easing:a,css:v=>`overflow: hidden;opacity: ${Math.min(v*20,1)*i};${l}: ${v*g}px;padding-${y[0]}: ${v*j}px;padding-${y[1]}: ${v*p}px;margin-${y[0]}: ${v*c}px;margin-${y[1]}: ${v*d}px;border-${y[0]}-width: ${v*h}px;border-${y[1]}-width: ${v*$}px;`}}const be=r=>({}),te=r=>({}),ye=r=>({}),se=r=>({});function ae(r){let e,s,a;const o=r[3].details,t=ne(o,r,r[2],te);return{c(){e=_("div"),t&&t.c(),this.h()},l(i){e=b(i,"DIV",{class:!0});var l=x(e);t&&t.l(l),l.forEach(u),this.h()},h(){D(e,"class","details svelte-15iorz7")},m(i,l){w(i,e,l),t&&t.m(e,null),a=!0},p(i,l){t&&t.p&&(!a||l&4)&&oe(t,o,i,i[2],a?ie(o,i[2],l,be):re(i[2]),te)},i(i){a||(T(t,i),i&&de(()=>{a&&(s||(s=Z(e,ee,{},!0)),s.run(1))}),a=!0)},o(i){E(t,i),i&&(s||(s=Z(e,ee,{},!1)),s.run(0)),a=!1},d(i){i&&u(e),t&&t.d(i),i&&s&&s.end()}}}function we(r){let e,s,a,o,t,i="+",l,g,y,f;const j=r[3].head,p=ne(j,r,r[2],se);let c=r[0]&&ae(r);return{c(){e=_("div"),s=_("button"),a=_("div"),p&&p.c(),o=L(),t=_("span"),t.textContent=i,l=L(),c&&c.c(),this.h()},l(d){e=b(d,"DIV",{class:!0});var h=x(e);s=b(h,"BUTTON",{class:!0});var $=x(s);a=b($,"DIV",{class:!0});var v=x(a);p&&p.l(v),v.forEach(u),o=B($),t=b($,"SPAN",{class:!0,"data-svelte-h":!0}),P(t)!=="svelte-1bk58id"&&(t.textContent=i),$.forEach(u),l=B(h),c&&c.l(h),h.forEach(u),this.h()},h(){D(a,"class","text svelte-15iorz7"),D(t,"class","open-button svelte-15iorz7"),D(s,"class","header svelte-15iorz7"),D(e,"class","accordion svelte-15iorz7")},m(d,h){w(d,e,h),C(e,s),C(s,a),p&&p.m(a,null),C(s,o),C(s,t),C(e,l),c&&c.m(e,null),g=!0,y||(f=ue(s,"click",r[1]),y=!0)},p(d,[h]){p&&p.p&&(!g||h&4)&&oe(p,j,d,d[2],g?ie(j,d[2],h,ye):re(d[2]),se),d[0]?c?(c.p(d,h),h&1&&T(c,1)):(c=ae(d),c.c(),T(c,1),c.m(e,null)):c&&(he(),E(c,1,1,()=>{c=null}),me())},i(d){g||(T(p,d),T(c),g=!0)},o(d){E(p,d),E(c),g=!1},d(d){d&&u(e),p&&p.d(d),c&&c.d(),y=!1,f()}}}function Ce(r,e,s){let{$$slots:a={},$$scope:o}=e,{open:t=!1}=e;const i=()=>s(0,t=!t);return r.$$set=l=>{"open"in l&&s(0,t=l.open),"$$scope"in l&&s(2,o=l.$$scope)},[t,i,o,a]}class $e extends Q{constructor(e){super(),Y(this,e,Ce,we,G,{open:0})}}const ke=[{id:1,question:"Is there a charge for any of our visits?",answer:"No, the Jet and Ben project is fully funded and supported by Durham Constabulary and local charge meaning there is no charge to schools or the local community."},{id:2,question:"Do you hold risk assessments for attending schools and community events?",answer:"Yes, the Jet and Ben project is thoroughly risk assessed on a regular basis, both dogs are trained and assessed to ensure that they can fulfil the role safely.It is important though that each school and community group ensure that they have informed parents or people attending of the presence of the dogs to check for any allergies or adverse fears that we need to be made aware of before attending or during our visit."},{id:3,question:"Do you have the correct clearances to visit schools and community groups?",answer:"Since we are Durham Constabulary staff members, we are given the same clearances and checks as a Police Officer or teacher would have and these are repeated and checked on a regular basis."},{id:4,question:"How do we go about booking Jet and Ben for a visit?",answer:"There are many different avenues you can now use to make contact with us to book a visit; there are many contact links on this website which will send the message directly to us, if you would prefer we also have a Facebook messenger, Twitter and an Instagram account."},{id:5,question:"How long can you stay at our school or community group?",answer:"To make it as fair as we can for everybody to book in, we try to commit a morning or an afternoon to each individual school or group."},{id:6,question:"How long has the Jet and Ben programme been running for?",answer:"Durham Constabulary has been coordinating the Jet and Ben programme with support from charities such as Durham Agency Against Crime for over 30 years."},{id:7,question:"Will the children be able to approach the dogs and touch them during their visit?",answer:"This is an individual school or group choice, if the school or group would like this to take place then yes the children can approach the dogs at the end of the session for strokes and photo opportunities, this will be done in a safe and organised fashion with the correct hygiene instructions in place also."}];function De(r){let e,s='<h2 class="center">Our Partners</h2> <p class="center">We work alongside a number of organisations and charities</p> <div class="photobanner svelte-62mip9"><img class="first svelte-62mip9" src="../client-banner/pcc.svg" alt="Durham PCC Logo"/> <img src="../client-banner/daac.svg" alt="Durham Agency Agaist Crime Logo" class="svelte-62mip9"/> <img src="../client-banner/ceop.svg" alt="CEOP logo" class="svelte-62mip9"/> <img src="../client-banner/dbc.svg" alt="Darlington Borough Council" class="svelte-62mip9"/> <img src="../client-banner/dcc.svg" alt="Durham County Council Logo" class="svelte-62mip9"/> <img src="../client-banner/dc.svg" alt="Durham Constabulary logo" class="svelte-62mip9"/> <img src="../client-banner/ok9.svg" alt="OK9 Logo" class="svelte-62mip9"/> <img src="../client-banner/pcc.svg" alt="Durham PCC Logo" class="svelte-62mip9"/> <img src="../client-banner/daac.svg" alt="Durham Agency Agaist Crime Logo" class="svelte-62mip9"/> <img src="../client-banner/ceop.svg" alt="CEOP logo" class="svelte-62mip9"/> <img src="../client-banner/dbc.svg" alt="Darlington Borough Council" class="svelte-62mip9"/> <img src="../client-banner/dcc.svg" alt="Durham County Council Logo" class="svelte-62mip9"/> <img src="../client-banner/dc.svg" alt="Durham Constabulary logo" class="svelte-62mip9"/> <img src="../client-banner/ok9.svg" alt="OK9 Logo" class="svelte-62mip9"/> <img src="../client-banner/pcc.svg" alt="Durham PCC Logo" class="svelte-62mip9"/> <img src="../client-banner/daac.svg" alt="Durham Agency Agaist Crime Logo" class="svelte-62mip9"/> <img src="../client-banner/ceop.svg" alt="CEOP logo" class="svelte-62mip9"/> <img src="../client-banner/dbc.svg" alt="Darlington Borough Council" class="svelte-62mip9"/> <img src="../client-banner/dcc.svg" alt="Durham County Council Logo" class="svelte-62mip9"/> <img src="../client-banner/dc.svg" alt="Durham Constabulary logo" class="svelte-62mip9"/> <img src="../client-banner/ok9.svg" alt="OK9 Logo" class="svelte-62mip9"/></div>';return{c(){e=_("section"),e.innerHTML=s,this.h()},l(a){e=b(a,"SECTION",{id:!0,class:!0,"data-svelte-h":!0}),P(e)!=="svelte-olrugp"&&(e.innerHTML=s),this.h()},h(){D(e,"id","banner-container"),D(e,"class","svelte-62mip9")},m(a,o){w(a,e,o)},p:O,i:O,o:O,d(a){a&&u(e)}}}class Le extends Q{constructor(e){super(),Y(this,e,null,De,G,{})}}function Be(r,e,s){const a=r.slice();return a[0]=e[s],a}function xe(r){let e,s=r[0].question+"",a;return{c(){e=_("h3"),a=le(s),this.h()},l(o){e=b(o,"H3",{slot:!0});var t=x(e);a=ce(t,s),t.forEach(u),this.h()},h(){D(e,"slot","head")},m(o,t){w(o,e,t),C(e,a)},p:O,d(o){o&&u(e)}}}function Te(r){let e,s,a=r[0].answer+"",o,t;return{c(){e=_("div"),s=_("p"),o=le(a),t=L(),this.h()},l(i){e=b(i,"DIV",{slot:!0});var l=x(e);s=b(l,"P",{});var g=x(s);o=ce(g,a),g.forEach(u),t=B(l),l.forEach(u),this.h()},h(){D(e,"slot","details")},m(i,l){w(i,e,l),C(e,s),C(s,o),C(e,t)},p:O,d(i){i&&u(e)}}}function je(r){let e,s;return e=new $e({props:{$$slots:{details:[Te],head:[xe]},$$scope:{ctx:r}}}),{c(){z(e.$$.fragment)},l(a){K(e.$$.fragment,a)},m(a,o){U(e,a,o),s=!0},p(a,o){const t={};o&8&&(t.$$scope={dirty:o,ctx:a}),e.$set(t)},i(a){s||(T(e.$$.fragment,a),s=!0)},o(a){E(e.$$.fragment,a),s=!1},d(a){W(e,a)}}}function Ee(r){let e,s,a='<div class="hero-wrapper"><div class="hero-text"><h1>About Us</h1> <p class="kicker">Learn more about Ben who is a cute and cuddly Golden Labrador Police Safety Dog.</p> <a class="button" href="/contact">Contact Us</a></div> <img src="/../clairejetben.jpg" alt="Jet &amp; Ben with Claire"/></div>',o,t,i='<div class="container"><h2 class="center">Meet The Team</h2> <p class="center">Click below to learn more about our team and read their bios.</p> <div class="card-wrapper"><div class="card svelte-13t7p0d"><img class="profile svelte-13t7p0d" src="/../jet/jet-profile.jpg" alt="Ben the Police Dog"/> <h3 class="svelte-13t7p0d">Jet</h3> <p>Hello my name is Jet I am fun and friendly Black Labrador.</p> <div class="learn-more-wrapper"><a href="/jet" class="learn-more">Learn More</a> <img src="/../arrow.svg" alt="arrow icon"/></div></div> <div class="card svelte-13t7p0d"><img class="profile svelte-13t7p0d" src="/../clairejetben-2.jpg" alt="Claire with Jet &amp; Ben"/> <h3 class="svelte-13t7p0d">Claire</h3> <p>Hello my name is Claire and I am Jet &amp; Ben’s favourite two legged human.</p> <div class="learn-more-wrapper"><a href="/claire" class="learn-more">Learn More</a> <img src="/../arrow.svg" alt="arrow icon"/></div></div> <div class="card svelte-13t7p0d"><img class="profile svelte-13t7p0d" src="/../ben-profile.jpg" alt="Ben the Police Dog"/> <h3 class="svelte-13t7p0d">Ben</h3> <p>Hello my name is Ben I am cute and cuddly Golden Labrador.</p> <div class="learn-more-wrapper"><a href="/ben" class="learn-more">Learn More</a> <img src="/../arrow.svg" alt="arrow icon"/></div></div></div></div>',l,g,y,f,j='<div class="container"><h2 class="center">Gallery</h2> <div class="grid-col-3-images"><img src="/../about/about-1.jpg" alt="Ben"/> <img src="/../about/about-2.jpg" alt="Jet"/> <img src="/../about/about-3.jpg" alt="Bens"/> <img src="/../about/about-4.jpg" alt="Kids stroking Ben"/> <img src="/../about/about-5.jpg" alt="Claire teaching a class"/> <img src="/../about/about-6.jpg" alt="Kids stroking Ben"/></div></div>',p,c,d,h,$,v="FAQ's",S,I,R="Below we answer some of the most frequently asked questions",F,M,q,J;g=new Le({});let N=fe(ke),k=[];for(let n=0;n<N.length;n+=1)k[n]=je(Be(r,N,n));return q=new ve({}),{c(){e=L(),s=_("div"),s.innerHTML=a,o=L(),t=_("section"),t.innerHTML=i,l=L(),z(g.$$.fragment),y=L(),f=_("section"),f.innerHTML=j,p=L(),c=_("section"),d=_("div"),h=_("div"),$=_("h2"),$.textContent=v,S=L(),I=_("p"),I.textContent=R,F=L();for(let n=0;n<k.length;n+=1)k[n].c();M=L(),z(q.$$.fragment),this.h()},l(n){pe("svelte-97hhqn",document.head).forEach(u),e=B(n),s=b(n,"DIV",{class:!0,"data-svelte-h":!0}),P(s)!=="svelte-1rpraxm"&&(s.innerHTML=a),o=B(n),t=b(n,"SECTION",{"data-svelte-h":!0}),P(t)!=="svelte-rck7un"&&(t.innerHTML=i),l=B(n),K(g.$$.fragment,n),y=B(n),f=b(n,"SECTION",{"data-svelte-h":!0}),P(f)!=="svelte-1b7irav"&&(f.innerHTML=j),p=B(n),c=b(n,"SECTION",{});var H=x(c);d=b(H,"DIV",{class:!0});var X=x(d);h=b(X,"DIV",{class:!0});var A=x(h);$=b(A,"H2",{class:!0,"data-svelte-h":!0}),P($)!=="svelte-1bq868"&&($.textContent=v),S=B(A),I=b(A,"P",{class:!0,"data-svelte-h":!0}),P(I)!=="svelte-axyv5s"&&(I.textContent=R),F=B(A);for(let V=0;V<k.length;V+=1)k[V].l(A);A.forEach(u),X.forEach(u),H.forEach(u),M=B(n),K(q.$$.fragment,n),this.h()},h(){document.title="About Us | Jet & Ben | Durham Constabulary",D(s,"class","container-full-width"),D($,"class","svelte-13t7p0d"),D(I,"class","center"),D(h,"class","faq svelte-13t7p0d"),D(d,"class","container")},m(n,m){w(n,e,m),w(n,s,m),w(n,o,m),w(n,t,m),w(n,l,m),U(g,n,m),w(n,y,m),w(n,f,m),w(n,p,m),w(n,c,m),C(c,d),C(d,h),C(h,$),C(h,S),C(h,I),C(h,F);for(let H=0;H<k.length;H+=1)k[H]&&k[H].m(h,null);w(n,M,m),U(q,n,m),J=!0},p:O,i(n){if(!J){T(g.$$.fragment,n);for(let m=0;m<N.length;m+=1)T(k[m]);T(q.$$.fragment,n),J=!0}},o(n){E(g.$$.fragment,n),k=k.filter(Boolean);for(let m=0;m<k.length;m+=1)E(k[m]);E(q.$$.fragment,n),J=!1},d(n){n&&(u(e),u(s),u(o),u(t),u(l),u(y),u(f),u(p),u(c),u(M)),W(g,n),ge(k,n),W(q,n)}}}class Ae extends Q{constructor(e){super(),Y(this,e,null,Ee,G,{})}}export{Ae as component};
