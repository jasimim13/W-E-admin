import{j as e,q as Ae,T as R,P as o,r as t,bS as de,S as h,aA as re,I as Q,a as O,aE as $,B as y,bT as q,b8 as Oe,c as We,W as Me}from"./index-10cf8504.js";import{k as L,g as f,i as Be,l as $e,T as ie,h as qe,e as Le,f as ze,j as He,S as De,A as Ye}from"./TableSortLabel-419ad1f9.js";import{L as Ge}from"./label-f88da8ce.js";import{C as pe}from"./Checkbox-89a0d18e.js";import{B as k}from"./Button-d54db9e7.js";import{O as Je,T as I}from"./TextField-d7688593.js";import{I as Ke}from"./InputAdornment-26a6ce61.js";import{C as Qe}from"./Container-e053fb78.js";import{C as Ve}from"./Card-18804dcb.js";import"./Menu-91585512.js";function he({query:s}){return e.jsx(L,{children:e.jsx(f,{align:"center",colSpan:6,sx:{py:3},children:e.jsxs(Ae,{sx:{textAlign:"center"},children:[e.jsx(R,{variant:"h6",paragraph:!0,children:"Not found"}),e.jsxs(R,{variant:"body2",children:["No results found for  ",e.jsxs("strong",{children:['"',s,'"']}),".",e.jsx("br",{})," Try checking for typos or using complete words."]})]})})})}he.propTypes={query:o.string};const le={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:600,bgcolor:"background.paper",boxShadow:24,p:4};function xe({id:s,selected:l,name:a,avatarUrl:p,company:c,role:u,isVerified:j,status:S,handleClick:d}){const[N,W]=t.useState(null),[F,M]=t.useState(!1),[g,v]=t.useState(!1),[U,z]=t.useState(null),[r,H]=t.useState([]),C=m=>{W(m.currentTarget)},{token:D}=t.useContext(de),w=m=>{z(m),v(!0)},A=()=>{v(!1)},P=()=>{M(!0)},Y=()=>{M(!1)},B=async()=>{try{v(!0);const m=await q.post(`/user/deleteUser/${U}`,{},{headers:{Authorization:`Bearer ${D}`}});console.log(m),A()}catch(m){console.error("Error deleting:",m)}};return t.useEffect(()=>{(async T=>{try{const E=await q.get(`calculate/results/${T}`);H(E.data.results[0]),console.log(E.data.results)}catch(E){console.error("Error fetching results:",E)}})(s)},[]),console.log(g),e.jsxs(e.Fragment,{children:[e.jsxs(L,{hover:!0,tabIndex:-1,role:"checkbox",selected:l,children:[e.jsx(f,{padding:"checkbox",onClick:m=>m.stopPropagation(),children:e.jsx(pe,{disableRipple:!0,checked:l,onChange:d})}),e.jsx(f,{component:"th",scope:"row",padding:"none",onClick:P,children:e.jsxs(h,{direction:"row",alignItems:"center",spacing:2,children:[e.jsx(re,{alt:a,src:p}),e.jsx(R,{variant:"subtitle2",noWrap:!0,children:a})]})}),e.jsx(f,{children:c}),e.jsx(f,{children:u}),e.jsx(f,{align:"center",children:j||"N/A"}),e.jsx(f,{children:e.jsx(Ge,{color:S==="banned"&&"error"||"success",children:S})}),e.jsx(f,{children:e.jsx(k,{variant:"contained",size:"small",color:"error",onClick:()=>w(s),children:"Delete"})}),e.jsx(f,{align:"right",children:e.jsx(Q,{onClick:C,children:e.jsx(O,{icon:"eva:more-vertical-fill"})})})]}),e.jsx($,{open:F,onClose:Y,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(y,{sx:le,borderRadius:3,children:[e.jsxs(h,{direction:"row",alignItems:"center",spacing:2,children:[e.jsx(re,{alt:a,src:p,style:{height:70,width:70}}),e.jsx(R,{variant:"subtitle2",noWrap:!0,style:{marginRight:"8px",fontWeight:600,fontSize:20},children:a})]}),e.jsx(y,{mt:3,children:e.jsx("span",{style:{fontWeight:600,fontSize:18},children:"Personal Information:"})}),e.jsxs(y,{direction:"row",spacing:4,sx:{display:"inline-flex",flexWrap:"wrap"},children:[e.jsxs(h,{spacing:1,mt:2,sx:{marginRight:2,marginBottom:2},children:[e.jsx("span",{style:{marginRight:"8px",fontWeight:600},children:"Email"}),e.jsx("p",{style:{backgroundColor:"#f5f5f5",borderRadius:"8px",padding:"8px 12px",display:"inline-block"},children:c})]}),e.jsxs(h,{spacing:1,mt:2,sx:{marginRight:2,marginBottom:2},children:[e.jsx("span",{style:{marginRight:"8px",fontWeight:600},children:"Phone Number"}),e.jsx("p",{style:{backgroundColor:"#f5f5f5",borderRadius:"8px",padding:"8px 12px",display:"inline-block"},children:j||"N/A"})]})]}),e.jsx(y,{mt:1,children:e.jsx("span",{style:{fontWeight:600,fontSize:18},children:"Calculator Results:"})})," ",e.jsxs(y,{direction:"row",spacing:4,sx:{display:"inline-flex",flexWrap:"wrap"},children:[e.jsxs(h,{spacing:1,mt:2,sx:{marginRight:2,marginBottom:2},children:[e.jsx("span",{style:{marginRight:"8px",fontWeight:600},children:"Income Replacement"}),e.jsxs("p",{style:{backgroundColor:"#f5f5f5",borderRadius:"8px",padding:"8px 12px",display:"inline-block"},children:["$ ",r==null?void 0:r.annualIncome]})]}),e.jsxs(h,{spacing:1,mt:2,sx:{marginRight:2,marginBottom:2},children:[e.jsx("span",{style:{marginRight:"8px",fontWeight:600},children:"Debt Elimination"}),e.jsxs("p",{style:{backgroundColor:"#f5f5f5",borderRadius:"8px",padding:"8px 12px",display:"inline-block"},children:["$ ",r==null?void 0:r.eliminateDebt]})]})," ",e.jsxs(h,{spacing:1,mt:2,sx:{marginRight:2,marginBottom:2},children:[e.jsx("span",{style:{marginRight:"8px",fontWeight:600},children:"Childcare"}),e.jsxs("p",{style:{backgroundColor:"#f5f5f5",borderRadius:"8px",padding:"8px 12px",display:"inline-block"},children:["$ ",r==null?void 0:r.childcare]})]})," ",e.jsxs(h,{spacing:1,mt:2,sx:{marginRight:2,marginBottom:2},children:[e.jsx("span",{style:{marginRight:"8px",fontWeight:600},children:"Extended Healthcare"}),e.jsxs("p",{style:{backgroundColor:"#f5f5f5",borderRadius:"8px",padding:"8px 12px",display:"inline-block"},children:["$ ",r==null?void 0:r.extendedHealthcare]})]})," ",e.jsxs(h,{spacing:1,mt:2,sx:{marginRight:2,marginBottom:2},children:[e.jsx("span",{style:{marginRight:"8px",fontWeight:600},children:"Education Fund"}),e.jsxs("p",{style:{backgroundColor:"#f5f5f5",borderRadius:"8px",padding:"8px 12px",display:"inline-block"},children:["$ ",r==null?void 0:r.education]})]}),e.jsxs(h,{spacing:1,mt:2,sx:{marginRight:2,marginBottom:2},children:[e.jsx("span",{style:{marginRight:"8px",fontWeight:600},children:"Emergency Fund"}),e.jsxs("p",{style:{backgroundColor:"#f5f5f5",borderRadius:"8px",padding:"8px 12px",display:"inline-block"},children:["$ ",r==null?void 0:r.emergencyFund]})]}),e.jsxs(h,{spacing:1,mt:2,sx:{marginRight:2,marginBottom:2},children:[e.jsx("span",{style:{marginRight:"8px",fontWeight:600},children:"Final Expenses "}),e.jsxs("p",{style:{backgroundColor:"#f5f5f5",borderRadius:"8px",padding:"8px 12px",display:"inline-block"},children:["$ ",r==null?void 0:r.finalExpense]})]})]})]})}),e.jsx($,{open:g,onClose:A,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(y,{sx:le,borderRadius:3,children:[e.jsx(h,{spacing:2,width:800}),e.jsxs("div",{children:[e.jsx("p",{children:"Are you sure you want to delete this user?"}),e.jsx(k,{variant:"contained",color:"error",sx:{width:"150px",alignSelf:"center"},onClick:B,children:"Yes"}),e.jsx(k,{variant:"contained",color:"inherit",sx:{width:"150px",alignSelf:"center",marginLeft:"20px"},mr:4,onClick:A,children:"No"})]})]})})]})}xe.propTypes={avatarUrl:o.any,company:o.any,handleClick:o.func,isVerified:o.any,name:o.any,role:o.any,selected:o.any,status:o.string};const Xe={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function Ze(s,l,a){return s?Math.max(0,(1+s)*l-a):0}function oe(s,l,a){return s[a]===null?1:l[a]===null||l[a]<s[a]?-1:l[a]>s[a]?1:0}function _e(s,l){return s==="desc"?(a,p)=>oe(a,p,l):(a,p)=>-oe(a,p,l)}function en({inputData:s,comparator:l,filterName:a}){const p=s.map((c,u)=>[c,u]);return p.sort((c,u)=>{const j=l(c[0],u[0]);return j!==0?j:c[1]-u[1]}),s=p.map(c=>c[0]),s&&a&&(s=s.filter(c=>c.name.toLowerCase().indexOf(a.toLowerCase())!==-1)),s}function ge({order:s,orderBy:l,rowCount:a,headLabel:p,numSelected:c,onRequestSort:u,onSelectAllClick:j}){const S=d=>N=>{u(N,d)};return e.jsx(Be,{children:e.jsxs(L,{children:[e.jsx(f,{padding:"checkbox",children:e.jsx(pe,{indeterminate:c>0&&c<a,checked:a>0&&c===a,onChange:j})}),p.map(d=>e.jsx(f,{align:d.align||"left",sortDirection:l===d.id?s:!1,sx:{width:d.width,minWidth:d.minWidth},children:e.jsxs($e,{hideSortIcon:!0,active:l===d.id,direction:l===d.id?s:"asc",onClick:S(d.id),children:[d.label,l===d.id?e.jsx(y,{sx:{...Xe},children:s==="desc"?"sorted descending":"sorted ascending"}):null]})},d.id))]})})}ge.propTypes={order:o.oneOf(["asc","desc"]),orderBy:o.string,rowCount:o.number,headLabel:o.array,numSelected:o.number,onRequestSort:o.func,onSelectAllClick:o.func};function ue({emptyRows:s,height:l}){return s?e.jsx(L,{sx:{...l&&{height:l*s}},children:e.jsx(f,{colSpan:9})}):null}ue.propTypes={emptyRows:o.number,height:o.number};function me({numSelected:s,filterName:l,onFilterName:a}){return e.jsxs(Oe,{sx:{height:96,display:"flex",justifyContent:"space-between",p:p=>p.spacing(0,1,0,3),...s>0&&{color:"primary.main",bgcolor:"primary.lighter"}},children:[s>0?e.jsxs(R,{component:"div",variant:"subtitle1",children:[s," selected"]}):e.jsx(Je,{value:l,onChange:a,placeholder:"Search user...",startAdornment:e.jsx(Ke,{position:"start",children:e.jsx(O,{icon:"eva:search-fill",sx:{color:"text.disabled",width:20,height:20}})})}),s>0?e.jsx(ie,{title:"Delete",children:e.jsx(Q,{children:e.jsx(O,{icon:"eva:trash-2-fill"})})}):e.jsx(ie,{title:"Filter list",children:e.jsx(Q,{children:e.jsx(O,{icon:"ic:round-filter-list"})})})]})}me.propTypes={numSelected:o.number,filterName:o.string,onFilterName:o.func};function nn(){const[s,l]=t.useState(!1),{token:a}=t.useContext(de),p=()=>l(!1),[c,u]=t.useState(0),[j,S]=t.useState(!1),[d,N]=t.useState([]),W=()=>{S(!1)},[F,M]=t.useState("asc"),[g,v]=t.useState([]),[U,z]=t.useState("fullName"),[r,H]=t.useState(""),[C,D]=t.useState(5),[w,A]=t.useState(""),[P,Y]=t.useState(""),[B,m]=t.useState(""),[T,E]=t.useState(""),[fe,je]=t.useState(null),[V,X]=t.useState(""),[Z,G]=t.useState(""),[_,be]=t.useState(""),[ee,J]=t.useState(""),[ye,K]=t.useState(!1),[Se,ne]=t.useState(""),[ve,se]=t.useState("success");t.useEffect(()=>{(async()=>{try{const i=await q.get("/user/getUsers");console.log(i),N(i.data.users)}catch(i){console.log("Error fetching users",i)}})()},[]);const Ce=()=>{let n=!0;return X(""),G(""),be(""),J(""),w.trim()||(X("Name is required"),n=!1),P?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(P)||(G("Invalid email format"),n=!1):(G("Email is required"),n=!1),T?T.length<6&&(J("Password should be at least 6 characters long"),n=!1):(J("Password is required"),n=!1),n},ke=(n,i)=>{i!==""&&(M(U===i&&F==="asc"?"desc":"asc"),z(i))},te=(n,i)=>{K(!1)},Re=n=>{if(n.target.checked){const i=d.map(x=>x.fullName);v(i);return}v([])},Pe=()=>{S(!0)},Te=(n,i)=>{const x=g.indexOf(i);let b=[];x===-1?b=b.concat(g,i):x===0?b=b.concat(g.slice(1)):x===g.length-1?b=b.concat(g.slice(0,-1)):x>0&&(b=b.concat(g.slice(0,x),g.slice(x+1))),v(b)},Ee=(n,i)=>{u(i)},Ie=n=>{u(0),D(parseInt(n.target.value,10))},Ne=n=>{u(0),H(n.target.value)},ae=en({inputData:d,comparator:_e(F,U),filterName:r}),Fe=async n=>{if(n.preventDefault(),!Ce())return;const i=new FormData;i.append("name",w),i.append("email",P),i.append("phone",B),i.append("password",T),i.append("file",fe);try{const x=await q.post("/user/createAdminUser",i,{headers:{Authorization:`Bearer ${a}`,"Content-Type":"multipart/form-data"}});if(x.status===201){W(),ne("User added successfully!"),se("success"),K(!0);const b=x.data.user;N(we=>[...we,b])}}catch(x){console.error("Error adding user:",x),ne("Error adding user. Please try again."),se("error"),K(!0)}},Ue=!ae.length&&!!r;return e.jsxs(Qe,{children:[e.jsxs(h,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:5,children:[e.jsx(R,{variant:"h4",children:"Users"}),e.jsx(k,{variant:"contained",color:"inherit",onClick:Pe,startIcon:e.jsx(O,{icon:"eva:plus-fill"}),children:"New User"})]}),e.jsxs(Ve,{children:[e.jsx(me,{numSelected:g.length,filterName:r,onFilterName:Ne}),e.jsx(We,{children:e.jsx(qe,{sx:{overflow:"unset"},children:e.jsxs(Le,{sx:{minWidth:800},children:[e.jsx(ge,{order:F,orderBy:U,rowCount:d.length,numSelected:g.length,onRequestSort:ke,onSelectAllClick:Re,headLabel:[{id:"fullName",label:"Name"},{id:"company",label:"Email"},{id:"role",label:"Role"},{id:"isVerified",label:"Phone Number",align:"center"},{id:"status",label:"Status"},{id:"actions",label:"Actions"},{id:""}]}),e.jsxs(ze,{children:[ae.slice(c*C,c*C+C).map(n=>e.jsx(xe,{id:n==null?void 0:n.id,name:n==null?void 0:n.fullName,role:n==null?void 0:n.role,status:n==null?void 0:n.status,avatarUrl:n.profileImage&&n.profileImage,isVerified:n==null?void 0:n.phone,selected:g.indexOf(n==null?void 0:n.fullName)!==-1,handleClick:i=>Te(i,n==null?void 0:n.fullName)},n==null?void 0:n.id)),e.jsx(ue,{height:77,emptyRows:Ze(c,C,d.length)}),Ue&&e.jsx(he,{query:r})]}),e.jsx($,{open:s,onClose:p,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsx(y,{sx:ce,children:e.jsxs(h,{spacing:2,mt:2,width:500,children:[e.jsx(I,{id:"outlined-basic",label:"Heading",variant:"outlined"}),e.jsx(I,{id:"outlined-basic",label:"Description",variant:"outlined"}),e.jsx(k,{variant:"contained",color:"inherit",children:"Upload Images"})]})})})]})})}),e.jsx(He,{page:c,component:"div",count:d.length,rowsPerPage:C,onPageChange:Ee,rowsPerPageOptions:[5,10,25],onRowsPerPageChange:Ie})]}),e.jsx($,{open:j,onClose:W,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsx(y,{sx:ce,borderRadius:3,children:e.jsxs(h,{spacing:2,mt:2,width:800,children:[e.jsx(R,{children:"Add New User"}),e.jsx(I,{id:"name",label:"Name",variant:"outlined",value:w,onChange:n=>A(n.target.value),error:!!V,helperText:V}),e.jsx(I,{id:"email",label:"Email",variant:"outlined",type:"email",value:P,onChange:n=>Y(n.target.value),error:!!Z,helperText:Z}),e.jsx(I,{id:"phone",label:"Phone",type:"phone",variant:"outlined",value:B,onChange:n=>m(n.target.value),error:!!_,helperText:_}),e.jsx(I,{id:"password",label:"Password",type:"password",variant:"outlined",value:T,onChange:n=>E(n.target.value),error:!!ee,helperText:ee}),e.jsxs(k,{variant:"contained",component:"label",color:"info",children:["Upload File",e.jsx("input",{type:"file",hidden:!0,onChange:n=>je(n.target.files[0])})]}),e.jsx(k,{variant:"contained",color:"inherit",sx:{width:"150px",alignSelf:"center"},onClick:Fe,children:"Save"})]})})}),e.jsx(De,{open:ye,autoHideDuration:6e3,onClose:te,children:e.jsx(Ye,{onClose:te,severity:ve,variant:"filled",sx:{width:"100%"},children:Se})})]})}const ce={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",boxShadow:24,p:4};function xn(){return e.jsxs(e.Fragment,{children:[e.jsx(Me,{children:e.jsx("title",{children:" User | Minimal UI "})}),e.jsx(nn,{})]})}export{xn as default};
