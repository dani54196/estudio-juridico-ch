"use strict";(self.webpackChunkestudio_juridico_ch=self.webpackChunkestudio_juridico_ch||[]).push([[741],{2741:(n,e,r)=>{r.r(e),r.d(e,{default:()=>b});var a=r(5043),t=r(854),o=r.n(t);const i=async()=>{try{return(await o().get("https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=".concat("IGQWRQanN0UUNwblpxNWRMeDRUVTBxSG9fclBER0RxYlBrZAlI0eklieEJQM1NvRDBQbDgwSW1LUE1UTFgtdDUweF91ZA2FHWk1Gb0l3UUpSb204Q1J3djJPS3ZA2VDVldk1wWTIxLU5EcHd4Ym95SlhpSFQ4WEgza0kZD"))).data.data}catch(n){console.error(n)}};i();const s=i;var d,c,l,p=r(7528),m=r(9);const g=(0,m.Ay)("div")(d||(d=(0,p.A)(["\n  h2 {\n    text-align: center;\n    margin-bottom: 2rem;\n  }\n\n  @media only screen and (max-width: 1024px) {\n    padding: 3rem 0;\n  }\n\n  button {\n    display: block;\n    margin: 0 auto;\n    padding: 0.5rem 1rem;\n    background-color: rgb(27, 57, 111);\n    color: white;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n\n    &:hover {\n      color: #1b396f;\n      border: 1px solid #1b396f;\n      background-color: #fff;\n    }\n  }\n  a {\n    display: block;\n    margin-top: 10px;\n    color: #333;\n    text-decoration: none;\n    text-align: center;\n  }\n"]))),u=(0,m.Ay)("div")(c||(c=(0,p.A)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 20px;\n"]))),h=(0,m.Ay)("div")(l||(l=(0,p.A)(["\n  padding: 0.5rem;\n  margin-bottom: 1rem;\n  img,\n  video {\n    width: 100%;\n    height: auto;\n    border-radius: 5px;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  }\n\n  a {\n    display: block;\n    margin-top: 10px;\n    color: #333;\n    text-decoration: none;\n  }\n\n  p {\n    margin: 1rem 0;\n  }\n"])));var x=r(579);const b=()=>{const[n,e]=(0,a.useState)([]),[r,t]=(0,a.useState)(3),[o,i]=(0,a.useState)(25);return(0,a.useEffect)((()=>{s().then((n=>{e(n)}))}),[]),(0,x.jsxs)(g,{children:[(0,x.jsx)("h2",{children:"Nuestro Instagram"}),(0,x.jsx)(u,{children:n.slice(0,r).map((n=>(0,x.jsxs)(h,{children:["IMAGE"===n.media_type&&(0,x.jsx)("img",{src:n.media_url,alt:n.caption}),"CAROUSEL_ALBUM"===n.media_type&&(0,x.jsx)("img",{src:n.media_url,alt:n.caption}),"VIDEO"===n.media_type&&(0,x.jsx)("video",{controls:!0,children:(0,x.jsx)("source",{src:n.media_url,type:"video/mp4"})}),(0,x.jsxs)("p",{children:["VIDEO"===n.media_type?n.caption.substring(0,200):n.caption.substring(0,300),"..."]}),(0,x.jsx)("a",{href:n.permalink,target:"_blank",rel:"noopener noreferrer",children:"Ver m\xe1s"})]},n.id)))}),r<o&&(0,x.jsx)("button",{onClick:()=>t((n=>n+4)),children:"Cargar m\xe1s posts"}),(0,x.jsx)("a",{href:"https://www.instagram.com/abogadoschyasociados/",target:"_blank",rel:"noopener noreferrer",children:(0,x.jsx)("p",{children:"Ir a nuestro Instagram"})})]})}}}]);
//# sourceMappingURL=741.226c02de.chunk.js.map