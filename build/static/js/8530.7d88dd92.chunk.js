"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[8530],{28645:(e,t,n)=>{n.d(t,{A:()=>x});var a=n(9950),l=n(66362),s=n(69216),i=n(80737),d=n(25933),r=n(57811),o=n(81541),c=n(48538),u=n(89323),v=n(70030),h=n(44414);const{Text:m}=l.A,x=e=>{let{columns:t=[],setColumns:n,style:l,size:x="",iconOnly:p}=e;const{t:A}=(0,v.B)(),[f,j]=(0,a.useState)(!1),g=(0,h.jsx)(s.A,{children:null===t||void 0===t?void 0:t.map(((e,a)=>(0,h.jsx)(s.A.Item,{children:(0,h.jsxs)(i.A,{className:"d-flex justify-content-between",children:[(0,h.jsx)(m,{children:e.title}),(0,h.jsx)(d.A,{defaultChecked:!0,onClick:()=>function(e){const a=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));n(a)}(e),disabled:1===a})]})},e+a)))});return(0,h.jsx)(r.A,{overlay:g,trigger:["click"],onVisibleChange:e=>{j(e)},visible:f,children:(0,h.jsx)(o.A,{title:A("change.columns"),children:(0,h.jsx)(c.A,{style:{...l},size:x,icon:(0,h.jsx)(u.A,{}),children:p?null:A("Columns")})})})}},80415:(e,t,n)=>{n.d(t,{G:()=>i,HV:()=>l,LH:()=>a,PR:()=>s,wO:()=>r,xt:()=>d});const a={new:[1,2,3,4,5],accepted:[1,2,3,4,5],ready:[1,2,3,4,5],on_a_way:[1,2,3,4,5],delivered:[1,2,3,4,5],canceled:[1,2,3,4,5],cooking:[1,2,3,4,5]},l=(new Date,new Date,["new","accepted","ready","on_a_way","pause","delivered","canceled"]),s=30,i="HH:mm",d="hh:mm a",r=!0},8168:(e,t,n)=>{function a(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}n.d(t,{A:()=>a})},51066:(e,t,n)=>{n.d(t,{Q:()=>s});var a=n(17706),l=n(80415);const s=()=>{var e,t,n,s;return null!==(e=null===(t=a.M.getState())||void 0===t||null===(n=t.globalSettings)||void 0===n||null===(s=n.settings)||void 0===s?void 0:s.hour_format)&&void 0!==e?e:l.G}},68530:(e,t,n)=>{n.r(t),n.d(t,{default:()=>H});var a=n(9950),l=n(12916),s=n(80737),i=n(48538),d=n(23263),r=n(52913),o=n(89822),c=n(59233),u=n(82706),v=n(55902),h=n(24893),m=n(70030),x=n(91854),p=n(43453),A=n(44414);function f(e){let{inviteId:t,handleCancel:n}=e;const{t:l}=(0,m.B)(),[s]=c.A.useForm(),d=(0,x.wA)(),[r,f]=(0,a.useState)(!1);return(0,A.jsx)(u.A,{title:l("accept.invite"),visible:!!t,onCancel:n,footer:[(0,A.jsx)(i.A,{type:"primary",onClick:()=>s.submit(),loading:r,children:l("save")},"save-btn"),(0,A.jsx)(i.A,{type:"default",onClick:n,children:l("cancel")},"cancel-btn")],children:(0,A.jsxs)(c.A,{form:s,layout:"vertical",onFinish:e=>{const a={role:e.role};f(!0),o.A.statusUpdate(t.id,a).then((()=>{n(),d((0,p.P)())})).finally((()=>f(!1)))},children:[(0,A.jsx)(c.A.Item,{label:l("user"),children:(0,A.jsx)(v.A,{value:t.user.firstname+" "+t.user.lastname,disabled:!0})}),(0,A.jsx)(c.A.Item,{label:l("select.role"),name:"role",rules:[{required:!0,message:l("required")}],children:(0,A.jsxs)(h.Ay.Group,{optionType:"button",children:[(0,A.jsx)(h.Ay,{value:"moderator",children:l("moderator")}),(0,A.jsx)(h.Ay,{value:"deliveryman",children:l("deliveryman")})]})})]})})}var j=n(55386),g=n(76083),y=n(74623),w=n(8168),b=n(88986),k=n(28645),C=n(51066),z=n(59051),_=n.n(z);function H(){const{t:e}=(0,m.B)(),t=(0,x.wA)(),{activeMenu:n}=(0,x.d4)((e=>e.menu),x.bN),{loading:c,invites:u,params:v,meta:h}=(0,x.d4)((e=>e.invite),x.bN),[z,H]=(0,a.useState)(null),{setIsModalVisible:I}=(0,a.useContext)(j.o),[V,S]=(0,a.useState)(null),[P,M]=(0,a.useState)(!1),B=(0,C.Q)(),[D,Y]=(0,a.useState)([{title:e("id"),dataIndex:"id",key:"id",sorter:!0,is_show:!0},{title:e("fullname"),dataIndex:"user",key:"user",is_show:!0,render:e=>(0,A.jsxs)(A.Fragment,{children:[null===e||void 0===e?void 0:e.firstname," ",(null===e||void 0===e?void 0:e.lastname)||""]})},{title:e("role"),dataIndex:"role",key:"role",is_show:!0},{title:e("status"),dataIndex:"status",key:"status",is_show:!0,render:t=>(0,A.jsx)(l.A,{color:"rejected"===t?"red":"new"===t?"blue":"cyan",children:e(t)})},{title:e("created.at"),dataIndex:"created_at",key:"created_at",is_show:!0,render:e=>_()(e).format("YYYY-MM-DD ".concat(B))},{title:e("options"),key:"options",dataIndex:"options",is_show:!0,render:(t,n)=>(0,A.jsxs)(s.A,{children:[(0,A.jsx)(i.A,{type:"primary",onClick:()=>H(n),disabled:"accepted"===n.status,children:e("accept")}),(0,A.jsx)(i.A,{type:"primary",danger:!0,onClick:()=>{I(!0),S(n.id)},disabled:"rejected"===n.status,children:e("reject")})]})}]);return(0,a.useEffect)((()=>{n.refetch&&(t((0,p.P)()),t((0,y.km)(n)))}),[n.refetch]),(0,b.A)((()=>{const e=n.data,a={sort:null===e||void 0===e?void 0:e.sort,column:null===e||void 0===e?void 0:e.column,perPage:null===e||void 0===e?void 0:e.perPage,page:null===e||void 0===e?void 0:e.page};t((0,p.P)(a))}),[n.data]),(0,A.jsxs)(d.A,{title:e("invites"),extra:(0,A.jsx)(s.A,{children:(0,A.jsx)(k.A,{columns:D,setColumns:Y})}),children:[(0,A.jsx)(r.A,{scroll:{x:!0},columns:null===D||void 0===D?void 0:D.filter((e=>e.is_show)),dataSource:u,pagination:{pageSize:v.perPage,page:v.page,total:h.total,defaultCurrent:v.page},rowKey:e=>e.id,onChange:function(e,a,l){const{pageSize:s,current:i}=e,{field:d,order:r}=l,o=(0,w.A)(r);t((0,y.Ok)({activeMenu:n,data:{perPage:s,page:i,column:d,sort:o}}))},loading:c}),!!z&&(0,A.jsx)(f,{inviteId:z,handleCancel:()=>H(null)}),(0,A.jsx)(g.A,{click:function(){M(!0),o.A.statusUpdate(V).then((()=>{I(!1),S(null),t((0,p.P)())})).finally((()=>M(!1)))},text:e("reject.invite"),loading:P})]})}},89323:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(89379),l=n(9950);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var i=n(25085),d=function(e,t){return l.createElement(i.A,(0,a.A)((0,a.A)({},e),{},{ref:t,icon:s}))};const r=l.forwardRef(d)}}]);