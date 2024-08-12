"use strict";(self.webpackChunkmatx_react=self.webpackChunkmatx_react||[]).push([[884],{7884:(e,s,l)=>{l.r(s),l.d(s,{default:()=>N});var r=l(7621),i=l(1889),a=l(6934),n=l(4554),t=l(3967),c=l(6748),o=(l(8007),l(8890)),d=l.n(o),m=l(2791),h=l(7689),u=l(1087),x=l(709),f=(l(1830),l(2214)),g=l(6295),p=l(184);const j=(0,a.ZP)(n.Z)((()=>({display:"flex",alignItems:"center"}))),b=(0,a.ZP)(j)((()=>({justifyContent:"center"}))),v=(0,a.ZP)(n.Z)((()=>({height:"100%",padding:"32px",position:"relative",background:"rgba(0, 0, 0, 0.01)"}))),w=(0,a.ZP)(b)((()=>({background:"white",minHeight:"100% !important","& .card":{maxWidth:800,minHeight:400,margin:"1rem",display:"flex",borderRadius:0,alignItems:"center"}}))),N=()=>{var e=(0,h.s0)();const[s,l]=(0,m.useState)(!1),a=(0,t.Z)();var n=(0,m.useRef)(),o=(0,m.useRef)(),j=(0,m.useRef)(),N=(0,m.useRef)();const k=e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()},P=e=>{console.log("Error fetching user role:",e)},Z=(s,r)=>{s.status?(r.target.reset(),l(!1),(0,f.Z)("Create").then((()=>{e("/session/signin")}))):(l(!1),(0,f.Z)("Fail-Create",s.message))};return(0,m.useEffect)((()=>{d()("#PhoneCodes").keydown((e=>8===e.which||!String.fromCharCode(e.which).match(/[^0-9 \-]/)))}),[]),(0,p.jsxs)(w,{children:[(0,p.jsx)("title",{children:"Digi2l - Sign Up"}),(0,p.jsx)(r.Z,{className:"card ",children:(0,p.jsxs)(i.ZP,{container:!0,children:[(0,p.jsx)(i.ZP,{item:!0,sm:6,xs:12,className:"bg-body",children:(0,p.jsx)(b,{p:4,height:"100%",sx:{minWidth:256},children:(0,p.jsx)("img",{src:"/Digi2limage/works_3-1.png.webp",width:"100%",alt:"body"})})}),(0,p.jsx)(i.ZP,{item:!0,sm:6,xs:12,children:(0,p.jsx)(v,{children:(0,p.jsxs)("div",{children:[(0,p.jsx)(b,{p:4,sx:{minWidth:320},children:(0,p.jsx)("img",{className:"loginlogowrap",src:"/Digi2limage/logo12223231.svg",alt:""})}),(0,p.jsxs)("form",{onSubmit:async e=>{e.preventDefault();var s=N.current.value,l=j.current.value,r=n.current.value,i=o.current.value,a=JSON.stringify({first_name:s,last_name:null,user_email:l,user_phone:i,user_pass:r,Gender:null,user_role_Id:3});(0,g.Z)(x.Z.RegisterAPi,a).then(k).then((s=>Z(s,e))).catch(P)},className:s?"was-validated":"",children:[(0,p.jsx)("h1",{className:"mb-3 text-center",children:"Register"}),(0,p.jsxs)("div",{className:"row",children:[(0,p.jsxs)("div",{className:"mb-3 col-md-12",children:[(0,p.jsx)("label",{children:"Your Name "}),(0,p.jsx)("input",{id:"UserNameText",placeholder:"Enter name",ref:N,className:"form-control",required:!0,autoComplete:"off",maxLength:20}),(0,p.jsx)("div",{class:"invalid-feedback",children:"Please fill out name field."})]}),(0,p.jsxs)("div",{className:"mb-3 col-md-12",children:[(0,p.jsx)("label",{children:"Your Email"}),(0,p.jsx)("input",{placeholder:"Enter email",className:"form-control",required:!0,ref:j,autoComplete:"off",maxLength:50}),(0,p.jsx)("div",{class:"invalid-feedback",children:"Please fill out email field."})]}),(0,p.jsxs)("div",{className:"mb-3 col-md-12",children:[(0,p.jsx)("label",{children:"Your Phone"}),(0,p.jsx)("input",{id:"PhoneCodes",placeholder:"Enter phone",ref:o,className:"form-control",required:!0,autoComplete:"off",maxLength:10,minLength:10}),(0,p.jsx)("div",{class:"invalid-feedback",children:"Please fill out phone field."})]}),(0,p.jsxs)("div",{className:"mb-3 col-md-12",children:[(0,p.jsx)("label",{children:"Your Password"}),(0,p.jsx)("input",{ref:n,placeholder:"Enter password",className:"form-control",required:!0,autoComplete:"off",maxLength:50}),(0,p.jsx)("div",{class:"invalid-feedback",children:"Please fill out password field."})]}),(0,p.jsx)("input",{onClick:()=>l(!0),type:"submit",value:"Sign Up",className:"btn btn-primary w-100 mb-3 mt-2 "})]}),(0,p.jsxs)(c.nv,{children:[" ",(0,p.jsx)("label",{children:" Don't have an account? "}),(0,p.jsx)(u.OL,{to:"/session/signin",style:{color:a.palette.primary.main,marginLeft:5},children:(0,p.jsx)("label",{children:"Login"})})]})]})]})})})]})})]})}}}]);
//# sourceMappingURL=884.df05bc9c.chunk.js.map