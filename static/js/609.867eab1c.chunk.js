"use strict";(self.webpackChunkestudio_juridico_ch=self.webpackChunkestudio_juridico_ch||[]).push([[609],{4609:function(e,n,i){i.r(n),i.d(n,{default:function(){return R}});var t=i(605),a=i(9603),r=i(4720),s=i(1758),d=i(4942),l=i(1413),o=i(9439),c=i(2791),m=i(8691),h=i(4569),u=i.n(h),p=function(e){var n=(0,c.useState)({}),i=(0,o.Z)(n,2),t=i[0],a=i[1],r=(0,c.useState)({}),s=(0,o.Z)(r,2),h=s[0],p=s[1],x=(0,c.useState)(!1),Z=(0,o.Z)(x,2),g=Z[0],j=Z[1];(0,c.useEffect)((function(){0===Object.keys(h).length&&g&&(a(""),m.Z.success({message:"Success",description:"Your message has been sent!"}))}),[h,g]);return{handleChange:function(e){e.persist(),a((function(n){return(0,l.Z)((0,l.Z)({},n),{},(0,d.Z)({},e.target.name,e.target.value))})),p((function(n){return(0,l.Z)((0,l.Z)({},n),{},(0,d.Z)({},e.target.name,""))}))},handleSubmit:function(n){n.preventDefault(),p(e(t));3===Object.keys(t).length&&u().post("",(0,l.Z)({},t)).then((function(){j(!0)}))},values:t,errors:h}};function x(e){var n={};return e.name||(n.name="Name is required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(n.email="Email address is invalid"):n.email="Email address is required",e.message||(n.message="Message is required"),n}var Z,g,j,f,v,b,y,w,C,P,S,k,z=i(5224),E=i(168),M=i(1191),Y=(0,M.ZP)("p")(Z||(Z=(0,E.Z)(["\n  margin-top: 1.5rem;\n"]))),_=(0,M.ZP)("div")(g||(g=(0,E.Z)(["\n  position: relative;\n  max-width: 700px;\n"]))),q=(0,M.ZP)("div")(j||(j=(0,E.Z)(["\n  border-radius: 3rem;\n  max-width: 400px;\n"]))),F=i(184),N=(0,r.Z)()((function(e){var n=e.title,i=e.content,t=e.t;return(0,F.jsxs)(_,{children:[(0,F.jsx)("h6",{children:t(n)}),(0,F.jsx)(q,{children:(0,F.jsx)(Y,{children:t(i)})})]})})),O=(0,M.ZP)("div")(f||(f=(0,E.Z)(["\n  display: inline-block;\n  width: 100%;\n  padding: 10px 5px;\n"]))),D=(0,M.ZP)("input")(v||(v=(0,E.Z)(["\n  font-size: 0.875rem;\n"]))),G=(0,M.ZP)("div")(b||(b=(0,E.Z)(["\n  display: inline-block;\n  width: 100%;\n  padding: 10px 5px;\n  margin-bottom: -0.625rem;\n"]))),L=(0,M.ZP)("textarea")(y||(y=(0,E.Z)(["\n  resize: none;\n  font-size: 0.875rem;\n  height: 185px;\n"]))),A=(0,M.ZP)("label")(w||(w=(0,E.Z)(["\n  display: block;\n  padding-bottom: 10px;\n  text-transform: capitalize;\n"]))),B=(0,r.Z)()((function(e){var n=e.name,i=e.placeholder,t=e.onChange,a=e.t;return(0,F.jsxs)(O,{children:[(0,F.jsx)(A,{htmlFor:n,children:a(n)}),(0,F.jsx)(D,{placeholder:a(i),name:n,id:n,onChange:t})]})})),H=(0,r.Z)()((function(e){var n=e.name,i=e.placeholder,t=e.onChange,a=e.t;return(0,F.jsxs)(G,{children:[(0,F.jsx)(A,{htmlFor:n,children:a(n)}),(0,F.jsx)(L,{placeholder:a(i),id:n,name:n,onChange:t})]})})),I=(0,M.ZP)("div")(C||(C=(0,E.Z)(["\n  padding: 5rem 0;\n\n  @media only screen and (max-width: 1024px) {\n    padding: 3rem 0;\n  }\n"]))),J=(0,M.ZP)("form")(P||(P=(0,E.Z)(["\n  width: 100%;\n  max-width: 520px;\n\n  @media only screen and (max-width: 1045px) {\n    max-width: 100%;\n    margin-top: 2rem;\n  }\n"]))),K=(0,M.ZP)("span")(S||(S=(0,E.Z)(["\n  display: block;\n  font-weight: 600;\n  color: rgb(255, 130, 92);\n  height: 0.775rem;\n  padding: 0 0.675rem;\n"]))),Q=(0,M.ZP)("div")(k||(k=(0,E.Z)(["\n  text-align: end;\n  position: relative;\n\n  @media only screen and (max-width: 414px) {\n    padding-top: 0.75rem;\n  }\n"]))),R=(0,r.Z)()((function(e){var n=e.title,i=e.content,r=e.id,d=e.t,l=p(x),o=l.values,c=l.errors,m=l.handleChange,h=l.handleSubmit,u=function(e){var n=e.type,i=c[n];return(0,F.jsx)(s.LG,{direction:"left",children:(0,F.jsx)(K,{erros:c[n],children:i})})};return(0,F.jsx)(I,{id:r,children:(0,F.jsxs)(t.Z,{justify:"space-between",align:"middle",children:[(0,F.jsx)(a.Z,{lg:12,md:11,sm:24,xs:24,children:(0,F.jsx)(s.Mi,{direction:"left",children:(0,F.jsx)(N,{title:n,content:i})})}),(0,F.jsx)(a.Z,{lg:12,md:12,sm:24,xs:24,children:(0,F.jsx)(s.Mi,{direction:"right",children:(0,F.jsxs)(J,{autoComplete:"off",onSubmit:h,children:[(0,F.jsxs)(a.Z,{span:24,children:[(0,F.jsx)(B,{type:"text",name:"name",placeholder:"Your Name",value:o.name||"",onChange:m}),(0,F.jsx)(u,{type:"name"})]}),(0,F.jsxs)(a.Z,{span:24,children:[(0,F.jsx)(B,{type:"text",name:"email",placeholder:"Your Email",value:o.email||"",onChange:m}),(0,F.jsx)(u,{type:"email"})]}),(0,F.jsxs)(a.Z,{span:24,children:[(0,F.jsx)(H,{placeholder:"Your Message",value:o.message||"",name:"message",onChange:m}),(0,F.jsx)(u,{type:"message"})]}),(0,F.jsx)(Q,{children:(0,F.jsx)(z.z,{name:"submit",children:d("Submit")})})]})})})]})})}))}}]);
//# sourceMappingURL=609.867eab1c.chunk.js.map