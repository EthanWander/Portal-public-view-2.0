(this.webpackJsonpportal=this.webpackJsonpportal||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(7),r=a.n(i),c=(a(13),a(1)),o=(a(14),a(15),a(16),a(17),a(18),a.p+"static/media/LinkedIn1.531c1bc7.jpeg"),s=a(4);var u=function(e){var t=e.item,a=e.setItem,i=e.viewProj,r=e.setViewProj,o=e.x,s=e.setX,u=e.v,m=e.setV,f=e.a,d=e.setA,p=e.dims,b=e.list,v=e.openPopUp,E=e.date,j=e.onBtn,h=e.color,O=Object(n.useState)(null),g=Object(c.a)(O,2),w=(g[0],g[1]),N=Object(n.useRef)(!0),y=Object(n.useRef)(null),x=Object(n.useRef)(null);return Object(n.useEffect)((function(){y.current.getContext("2d");var e=t.x+o+p.d/2;if(N.current)N.current=!1;else{if(e>p.winDim.width-p.startOpac-p.l/2){var n=(e-(p.winDim.width-p.startOpac)-1.5*p.l)/(-2*p.l);if(null!==x.current&&(x.current.style.opacity=n>0?n:0),t.x+o>p.winDim.width/2+p.listWidth/2){console.log("here");var l=t;l.x=t.x-p.listWidth+p.l-p.pad,a(l)}}else if(e<p.startOpac+p.l/2){var i=(e-p.startOpac+1.5*p.l)/(2*p.l);if(null!==x.current&&(x.current.style.opacity=i>0?i:0),t.x+o<p.winDim.width/2-p.listWidth/2){console.log("here");var r=t;r.x=t.x+p.listWidth-p.l+p.pad,a(r)}}0===u||j||(d((function(e){return-u/20})),u<.2&&u>-.2&&(m(0),d(0))),(u<=5||f<=0)&&(u>=-5||f>=0)&&m((function(e){return e+f})),s((function(e){return e+u}))}}),[E]),Object(n.useEffect)((function(){var e=y.current.getContext("2d");if(null===t.imgUrl)e.fillStyle=h,e.fillRect(0,0,2*p.l,2*p.l),w(e.getImageData(0,0,2*p.l,2*p.l));else{var a=new Image;a.onload=function(){a.crossOrigin="Anonymous",e.drawImage(a,0,0),w(e.getImageData(0,0,2*p.l,2*p.l))},a.src=t.imgUrl}}),[b]),l.a.createElement("div",{className:"item",style:{top:t.y,left:o+t.x,width:p.d,height:p.d}},l.a.createElement("canvas",{id:"canvas",ref:y,width:2*p.l,height:2*p.l}),l.a.createElement("div",{className:"all-in-item",ref:x},l.a.createElement("button",{className:"edit-proj-btn",onClick:function(e){v(t.index)},style:{color:"rgb("+t.textColor+")",display:t.empty?"none":"inline-block"}},l.a.createElement("i",{className:"fas fa-pencil-alt"})),l.a.createElement("div",{className:"in-item"},l.a.createElement("button",{onClick:function(){v(t.index)},style:function(){if(!t.empty)return{display:"none"}}(),className:"plus-btn"},l.a.createElement("i",{className:"fas fa-plus"})),l.a.createElement("button",{className:"proj-text",onClick:function(){!1===i&&r(!0)},style:{color:"rgb("+t.textColor+")",display:t.empty?"none":"block"}},t.text))))};var m=function(e){var t=e.showPopUp,a=e.setShowPopUp,i=e.editItem,r=e.item,o=Object(n.useState)(!0),s=Object(c.a)(o,2),u=s[0],m=(s[1],Object(n.useRef)(null)),f=Object(n.useRef)(null),d=Object(n.useRef)(null);return l.a.createElement("div",{className:"pop-up",style:{display:t?"flex":"none"}},l.a.createElement("form",{className:"new-proj-form",style:{display:u?"flex":"none"}},l.a.createElement("div",{className:"enter-url"},"Image URL: ",l.a.createElement("input",{type:"text",ref:f,id:"img-url-input",defaultValue:r.empty?"":r.imgUrl,autoComplete:"off"})),l.a.createElement("div",{className:"enter-text"},"Text: ",l.a.createElement("input",{type:"text",ref:m,id:"txt-input",defaultValue:r.empty?"":r.text,autoComplete:"off"})),l.a.createElement("div",{className:"enter-text-color"},"Text Color: rgb(",l.a.createElement("input",{type:"text",ref:d,id:"txt-color-input",defaultValue:r.empty?"":r.textColor,autoComplete:"off"}),")"),l.a.createElement("div",{className:"forum-btns"},l.a.createElement("button",{id:"cancel-proj",onClick:function(e){e.preventDefault(),a(!1)}},"Cancel"),l.a.createElement("button",{id:"confirm-proj",onClick:function(e){e.preventDefault();var t=r;t.imgUrl=f.current.value,t.text=m.current.value,t.textColor=d.current.value,t.empty=!1,i(t),a(!1)}},"Confirm"))))};var f=function(e){var t=e.date,a=e.viewProj,i=e.setViewProj,r=e.winDim,o=Object(n.useState)([]),f=Object(c.a)(o,2),d=f[0],p=f[1],b=Object(n.useState)(!1),v=Object(c.a)(b,2),E=v[0],j=v[1],h=Object(n.useState)({}),O=Object(c.a)(h,2),g=O[0],w=O[1],N=Object(n.useState)(!1),y=Object(c.a)(N,2),x=y[0],C=y[1],S=Object(n.useState)("rgb(0,130,130)"),k=Object(c.a)(S,2),P=k[0],D=(k[1],150*Math.sqrt(2)),V=11*D+135,I={winDim:r,num:10,pad:15,startOpac:300,d:300,l:D,top:100,listWidth:V},U=Object(n.useState)(r.width/2-V/2),R=Object(c.a)(U,2),A=R[0],W=R[1],J=Object(n.useState)(0),M=Object(c.a)(J,2),L=M[0],T=M[1],B=Object(n.useState)(0),H=Object(c.a)(B,2),q=H[0],X=H[1],z=function(e){j(!0),w(d[e])},$=function(e){C(!0),X("left"===e?.05:-.05)},F=function(e){C(!1),X(0)};return Object(n.useEffect)((function(){for(var e=0,t=100,a=[],n=0;n<10;n++)0!==n?(e+=D+15,100===t?t+=D+15:t-=D+15):e+=D-150,a.push({x:e,y:t,key:100*Math.random(),index:n,empty:!0,imgUrl:null,textColor:null,text:null});var l=JSON.parse(localStorage.getItem("list")),i=a;if(null!==l){if(10===l.length)for(var r=0;r<a.length;r++)i[r].empty=l[r].empty,i[r].imgUrl=l[r].imgUrl,i[r].text=l[r].text,i[r].textColor=l[r].textColor}else i[4].empty=!1,i[4].imgUrl="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&w=1000&q=80",i[4].text="Lorem Ipsum",i[4].textColor="255,255,255";p(i)}),[]),Object(n.useEffect)((function(){localStorage.setItem("list",JSON.stringify(d))}),[d]),l.a.createElement("div",{className:"proj-strip"},l.a.createElement("button",{onMouseEnter:function(){return $("left")},onMouseLeave:function(){return F()},className:"scrl-btn left-scrl-btn"},l.a.createElement("i",{className:"fas fa-angle-left"})),d.map((function(e){return l.a.createElement(u,{x:A,setX:W,v:L,setV:T,a:q,setA:X,item:e,setItem:w,list:d,openPopUp:z,dims:I,date:t,key:e.key,onBtn:x,color:P,viewProj:a,setViewProj:i})})),l.a.createElement("button",{onMouseEnter:function(){return $("right")},onMouseLeave:function(){return F()},className:"scrl-btn right-scrl-btn"},l.a.createElement("i",{className:"fas fa-angle-right"})),l.a.createElement(m,{setShowPopUp:j,showPopUp:E,editItem:function(e){p([].concat(Object(s.a)(d.slice(0,e.index)),[e],Object(s.a)(d.slice(e.index+1))))},item:g}))};var d=function(e){var t=e.profile,a=e.setProfile,i=e.onProfileEditor,r=e.setOnProfileEditor,c=Object(n.useRef)(null),o=Object(n.useRef)(null),s=Object(n.useRef)(null);return l.a.createElement("div",{className:"pop-up editor-pop-up",style:{display:i?"block":"none"}},l.a.createElement("div",{className:"edit-header"},l.a.createElement("div",null,"Edit Profile"),l.a.createElement("button",{className:"exit-edit-btn",onClick:function(e){e.preventDefault(),r(!1)}},l.a.createElement("i",{className:"fas fa-times"}))),l.a.createElement("form",{id:"edit-main"},l.a.createElement("div",null,"Name: ",l.a.createElement("input",{type:"text",ref:c,defaultValue:t.name,id:"name-input",autoComplete:"off"})),l.a.createElement("div",null,"Occupation: ",l.a.createElement("input",{type:"text",ref:o,defaultValue:t.occupation,id:"occupation-input",autoComplete:"off"})),l.a.createElement("div",null,"Email: ",l.a.createElement("input",{type:"text",ref:s,defaultValue:t.email,id:"email-input",autoComplete:"off"})),l.a.createElement("div",{className:"form-btns"},l.a.createElement("button",{id:"save-btn",onClick:function(e){e.preventDefault(),a({name:c.current.value,occupation:o.current.value,email:s.current.value}),r(!1)}},"Save"))))};var p=function(e){var t=e.onAboutEditor,a=e.setOnAboutEditor,i=e.aboutTxt,r=e.setAboutTxt,c=Object(n.useRef)(null);return l.a.createElement("div",{className:"pop-up editor-pop-up",style:{display:t?"block":"none"}},l.a.createElement("div",{className:"edit-header"},l.a.createElement("div",null,"Edit About"),l.a.createElement("button",{className:"exit-edit-btn",onClick:function(e){e.preventDefault(),a(!1)}},l.a.createElement("i",{className:"fas fa-times"}))),l.a.createElement("form",{id:"edit-main"},l.a.createElement("textarea",{type:"text",rows:"4",defaultValue:i,ref:c,id:"about-input",autoComplete:"off"}),l.a.createElement("div",{className:"form-btns"},l.a.createElement("button",{id:"save-btn",onClick:function(e){r(c.current.value),a(!1),e.preventDefault()}},"Save"))))},b=a(8);a(20),a(21),a(22),a(23);var v=function(e){var t=e.viewProj,a=e.setViewProj,i=Object(n.useRef)(null),r=Object(n.useRef)(null),o=Object(n.useState)(function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}()),s=Object(c.a)(o,2),u=s[0],m=(s[1],Object(n.useState)(null)),f=Object(c.a)(m,2),d=f[0],p=f[1];return Object(n.useEffect)((function(){var e=.8*u.height,t=2*i.current.style.fontSize;p(e+t)}),[]),l.a.createElement("div",{className:"view-proj",ref:i,style:{height:d,display:t?"block":"none"}},l.a.createElement("div",{className:"proj-nav-bar"},l.a.createElement("div",{className:"nav-list"},l.a.createElement("div",{className:"code-tab nav-item"},"code")),l.a.createElement("div",{className:"proj-window-options"},l.a.createElement("button",{onClick:function(){a(!1)},className:"x-btn nav-item"},l.a.createElement("i",{className:"fas fa-times"})))),l.a.createElement("div",{className:"proj-content"},l.a.createElement("div",{className:"file-tree-container"}),l.a.createElement("div",{className:"code-window"},l.a.createElement(b.UnControlled,{value:"<h1>I \u2665 react-codemirror2</h1>",options:{mode:"xml",theme:"material",lineNumbers:!0,lineWrapping:!0,lint:!0},onChange:function(e,t,a){},ref:r}))))},E=a.p+"static/media/Eitan Wander - CV.aa8e59d5.pdf";var j=function(e){var t=e.viewCV,a=e.setViewCV;return e.winDim,l.a.createElement("div",{className:"SeeCV",style:{display:t?"flex":"none"}},l.a.createElement("embed",{src:E,width:"700",className:"cv-container"}),l.a.createElement("button",{className:"exit-cv-btn",onClick:function(){a(!1)}},l.a.createElement("i",{className:"fas fa-times"})))};var h=function(e){var t=e.date,a=Object(n.useState)(!1),i=Object(c.a)(a,2),r=i[0],s=i[1],u=Object(n.useState)(!1),m=Object(c.a)(u,2),b=m[0],E=m[1],h=Object(n.useState)(function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}()),O=Object(c.a)(h,2),g=O[0],w=(O[1],Object(n.useState)({name:"Eitan Wander",occupation:"Software Engineer",email:"ethanwander@gmail.com"})),N=Object(c.a)(w,2),y=N[0],x=N[1],C=Object(n.useState)(!1),S=Object(c.a)(C,2),k=S[0],P=S[1],D=Object(n.useState)("Experienced Software Developer with a thorough knowledge in the following coding languages: C#, Java, Python, JavaScript, HTML, CSS and React. Currently studying for my Bachelor\u2019s Degree in Mathematics and Physics at the University of Bar Ilan (1 year to graduation). Highly motivated, passionate about technology, a self-learner with a proactive and a hands on approach. Looking for a part time Software Development job."),V=Object(c.a)(D,2),I=V[0],U=V[1],R=Object(n.useState)(!1),A=Object(c.a)(R,2),W=A[0],J=A[1],M=Object(n.useState)(!1),L=Object(c.a)(M,2),T=L[0],B=L[1];return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("profile")),t=JSON.parse(localStorage.getItem("about"));null!==e&&x(e),null!==t&&U(t)}),[]),Object(n.useEffect)((function(){localStorage.setItem("profile",JSON.stringify(y))}),[y]),Object(n.useEffect)((function(){localStorage.setItem("about",JSON.stringify(I))}),[I]),l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"profile-strip"},l.a.createElement("div",{className:"profile"},l.a.createElement("img",{className:"profile-img",alt:"profile",src:o}),l.a.createElement("h1",null,y.name),l.a.createElement("p",null,y.occupation),l.a.createElement("p",null,y.email)),l.a.createElement("div",{className:"contact-btns"},l.a.createElement("button",{className:"edit-profile-btn",onClick:function(e){e.preventDefault(),E(!0)}},"edit ",l.a.createElement("i",{className:"fas fa-pencil-alt"})))),l.a.createElement(d,{setProfile:x,profile:y,onProfileEditor:b,setOnProfileEditor:E}),l.a.createElement("div",{className:"about-strip"},l.a.createElement("div",{className:"about"},l.a.createElement("div",{className:"about-header"},l.a.createElement("h1",null,"About"),l.a.createElement("button",{className:"edit-about-btn",onClick:function(e){e.preventDefault(),P(!0)}},l.a.createElement("i",{className:"fas fa-pencil-alt"}))),l.a.createElement("p",null,!1===r?I.substring(0,300)+"...":I,l.a.createElement("button",{className:"read-more-btn",onClick:function(){s(!r)}},"read ",r?"less":"more"))),l.a.createElement("button",{className:"see-cv-btn",onClick:function(e){e.preventDefault(),B(!0)}},"See C.V.")),l.a.createElement(p,{onAboutEditor:k,setOnAboutEditor:P,aboutTxt:I,setAboutTxt:U}),l.a.createElement(j,{viewCV:T,setViewCV:B,winDim:g}),l.a.createElement(v,{viewProj:W,setViewProj:J}),l.a.createElement(f,{date:t,winDim:g,viewProj:W,setViewProj:J}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));setInterval((function(){r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,{date:new Date})),document.getElementById("root"))}),1e3/30),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[24,1,2]]]);
//# sourceMappingURL=main.1ef3eeba.chunk.js.map