(this["webpackJsonpM\xe1rio Batalha"]=this["webpackJsonpM\xe1rio Batalha"]||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/me.a93d6325.png"},28:function(e,t,a){e.exports=a.p+"static/media/askme.be1e1dc7.png"},29:function(e,t,a){e.exports=a.p+"static/media/color-generate.a5bace0b.png"},30:function(e,t,a){e.exports=a.p+"static/media/cocktails.de9776f7.png"},31:function(e,t,a){e.exports=a.p+"static/media/contentribe.0023f9af.png"},32:function(e,t,a){e.exports=a.p+"static/media/food.15d37c7e.png"},33:function(e,t,a){e.exports=a.p+"static/media/be-the-hero.d33119c9.png"},34:function(e,t,a){e.exports=a.p+"static/media/happy.276c3de7.png"},35:function(e,t,a){e.exports=a.p+"static/media/proffy.e3a2f21c.png"},36:function(e,t,a){e.exports=a.p+"static/media/game-play.9169fbf3.png"},37:function(e,t,a){e.exports=a.p+"static/media/QR.7d15779c.png"},39:function(e,t,a){e.exports=a(66)},53:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(7),r=a.n(c),o=a(4),i=a(3),m=a(13),s=[{id:3,url:"about",title:"about"},{id:1,url:"cases",title:"cases"},{id:2,url:"scan",title:"scan"}],u=(a(53),function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(function(){var e="light-theme";return localStorage.getItem("theme")&&(e=localStorage.getItem("theme")),e}()),u=Object(o.a)(r,2),p=u[0],f=u[1],d=Object(n.useRef)(null),E=Object(n.useRef)(null);return Object(n.useEffect)((function(){document.documentElement.className=p,localStorage.setItem("theme",p)}),[p]),Object(n.useEffect)((function(){var e=E.current.getBoundingClientRect().height;d.current.style.height=a?"".concat(e,"px"):"0px"}),[a]),l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-center"},l.a.createElement("div",{className:"nav-header"},l.a.createElement("h2",{className:"logo",onClick:function(){return m.animateScroll.scrollToTop()}},"<M\xe1rio Batalha />")),l.a.createElement("div",{className:"links-container",ref:d},l.a.createElement("ul",{className:"links",ref:E},s.map((function(e){var t=e.id,a=e.url,n=e.title;return l.a.createElement("li",{key:t},l.a.createElement(m.Link,{to:a,smooth:!0,duration:1e3},n))})))),l.a.createElement("div",{className:"nav-mode"},l.a.createElement("button",{className:"button-mode",onClick:function(){f("light-theme"===p?"dark-theme":"light-theme")}},l.a.createElement(i.b,null)),l.a.createElement("button",{className:"nav-toggle",onClick:function(){c(!a)}},l.a.createElement(i.a,null)))))}),p=a(8),f=a.n(p),d=(a(55),function(){return l.a.createElement("div",{className:"main-container"},l.a.createElement(u,null),l.a.createElement("div",{className:"main-content"},l.a.createElement(f.a,null,l.a.createElement("h1",null,"Software developer"),l.a.createElement("p",null,"Developer, UI Design and cryptocurrency enthusiast."))))}),E=a(22),h=a.n(E),g=(a(56),function(){return l.a.createElement("div",{className:"about"},l.a.createElement(f.a,null,l.a.createElement("div",{className:"about-content"},l.a.createElement("div",{className:"about-img"},l.a.createElement("img",{src:h.a,alt:"developer"})),l.a.createElement("div",{className:"about-description"},l.a.createElement("h1",null,"who am I ?"),l.a.createElement("p",null,"Software developer with some experience developing software that leaves a positive impact on people, the environment, and before of all solving problems with an intuitive solution."),l.a.createElement("h1",null,"what I do ?"),l.a.createElement("p",null,"As a developer, I have a mission to design and build a solution that improves the quality of life of a million people.")))))}),v=a(38),b=a(28),N=a.n(b),k=a(29),w=a.n(k),x=a(30),y=a.n(x),j=a(31),O=a.n(j),S=a(32),C=a.n(S),I=a(33),R=a.n(I),B=a(34),M=a.n(B),A=a(35),D=a.n(A),F=a(36),J=a.n(F),Q=(a(61),a(62),function(e){return l.a.createElement("img",Object.assign({},e,{alt:e}))}),T=[C.a,N.a,w.a,y.a,O.a,R.a,M.a,D.a,J.a],q=function(){var e=Object(n.useState)(T),t=Object(o.a)(e,1)[0];return l.a.createElement("div",{className:"cases"},l.a.createElement("h1",null,"Cases"),l.a.createElement("div",{className:"carousel-wrapper"},l.a.createElement(v.a,null,t.map((function(e,t){return l.a.createElement("div",{className:"carousel"},l.a.createElement(Q,{src:e,key:t,alt:e}))})))))},G=a(37),L=a.n(G),U=(a(63),function(){return l.a.createElement("div",{class:"scan"},l.a.createElement("h2",null,"Scan ",l.a.createElement("br",null)," &Gotta Resume"),l.a.createElement("p",{className:"scan-subtitle"},"Check out my resume for more details about me"),l.a.createElement("img",{src:L.a,alt:"QR Code Resume"}))}),Y=(a(64),function(){var e=(new Date).getFullYear();return l.a.createElement("footer",null,l.a.createElement("p",{className:"copyright"},"Copyright\xa9 ",e," All rights reserved to M\xe1rio Batalha"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/m%C3%A1rio-batalha-silva-5a4068180/",target:"blank"},l.a.createElement(i.c,null))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://stackoverflow.com/users/14004075/m%c3%a1rio-batalha",target:"blank"},l.a.createElement(i.e,null))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://mariobatalha9.medium.com/",target:"blank"},l.a.createElement(i.d,null)))))}),z=(a(65),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d,null),l.a.createElement(g,null),l.a.createElement(q,null),l.a.createElement(U,null),l.a.createElement(Y,null))});r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(z,null)),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.0f84339b.chunk.js.map