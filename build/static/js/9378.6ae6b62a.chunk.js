"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[9378],{35116:(e,t,n)=>{n.d(t,{A:()=>d});n(9950);var s=n(48538),c=n(44070),l=n(85923),i=n(70030),o=n(13311),a=n(44414);function d(e){let{size:t="",onClick:n,type:d="default",...r}=e;const{t:u}=(0,i.B)(),{isDemo:h}=(0,o.A)();return(0,a.jsx)(s.A,{size:t,icon:(0,a.jsx)(c.A,{}),onClick:e=>{h?l.oR.warning(u("cannot.work.demo")):n(e)},type:d,...r})}},28645:(e,t,n)=>{n.d(t,{A:()=>x});var s=n(9950),c=n(66362),l=n(69216),i=n(80737),o=n(25933),a=n(57811),d=n(81541),r=n(48538),u=n(89323),h=n(70030),v=n(44414);const{Text:m}=c.A,x=e=>{let{columns:t=[],setColumns:n,style:c,size:x="",iconOnly:A}=e;const{t:y}=(0,h.B)(),[f,p]=(0,s.useState)(!1),j=(0,v.jsx)(l.A,{children:null===t||void 0===t?void 0:t.map(((e,s)=>(0,v.jsx)(l.A.Item,{children:(0,v.jsxs)(i.A,{className:"d-flex justify-content-between",children:[(0,v.jsx)(m,{children:e.title}),(0,v.jsx)(o.A,{defaultChecked:!0,onClick:()=>function(e){const s=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));n(s)}(e),disabled:1===s})]})},e+s)))});return(0,v.jsx)(a.A,{overlay:j,trigger:["click"],onVisibleChange:e=>{p(e)},visible:f,children:(0,v.jsx)(d.A,{title:y("change.columns"),children:(0,v.jsx)(r.A,{style:{...c},size:x,icon:(0,v.jsx)(u.A,{}),children:A?null:y("Columns")})})})}},99378:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var s=n(9950),c=n(80737),l=n(48538),i=n(23263),o=n(52913),a=n(24513),d=n(44070),r=n(53387),u=n(28429),h=n(85923),v=n(55386),m=n(76083),x=n(13567),A=n(91854),y=n(74623),f=n(94258),p=n(70030),j=n(28645),g=n(35116),w=n(88986),k=n(44414);const C=()=>{const{t:e}=(0,p.B)(),{setIsModalVisible:t}=(0,s.useContext)(v.o),[n,C]=(0,s.useState)(null),z=(0,A.wA)(),b=(0,u.Zp)(),[V,H]=(0,s.useState)(null),[I,S]=(0,s.useState)(!1),{activeMenu:_}=(0,A.d4)((e=>e.menu),A.bN),{currencies:M,loading:R}=(0,A.d4)((e=>e.currency),A.bN),[B,E]=(0,s.useState)([{title:e("title"),dataIndex:"title",key:"title",is_show:!0},{title:e("symbol"),dataIndex:"symbol",key:"symbol",is_show:!0},{title:e("rate"),dataIndex:"rate",key:"rate",is_show:!0},{title:e("options"),key:"options",dataIndex:"options",is_show:!0,render:(n,s)=>(0,k.jsxs)(c.A,{children:[(0,k.jsx)(l.A,{type:"primary",icon:(0,k.jsx)(a.A,{}),onClick:()=>(t=>{z((0,y.X4)({url:"currency/".concat(t.id),id:"currency_edit",name:e("edit.currency")})),b("/currency/".concat(t.id))})(s)}),s.default?"":(0,k.jsx)(g.A,{icon:(0,k.jsx)(d.A,{}),onClick:()=>{C([s.id]),t(!0),H(!0)}})]})}]);(0,w.A)((()=>{const e=_.data,t={status:(null===e||void 0===e?void 0:e.role)||"published",perPage:null===e||void 0===e?void 0:e.perPage,page:null===e||void 0===e?void 0:e.page};z((0,f.CW)(t))}),[_.data]),(0,s.useEffect)((()=>{const e=_.data,t={status:(null===e||void 0===e?void 0:e.role)||"published"};_.refetch&&(z((0,f.CW)(t)),z((0,y.km)(_)))}),[_.refetch]);const N={selectedRowKeys:n,onChange:e=>{C(e)}};return(0,k.jsxs)(i.A,{title:e("currencies"),extra:(0,k.jsxs)(c.A,{children:[(0,k.jsx)(l.A,{icon:(0,k.jsx)(r.A,{}),type:"primary",onClick:()=>{z((0,y.X4)({id:"add-currencies",url:"currency/add",name:e("add.currency")})),b("/currency/add")},children:e("add.currency")}),(0,k.jsx)(g.A,{onClick:()=>{null===n||0===n.length?h.oR.warning(e("select.the.product")):(t(!0),H(!1))},children:e("delete.selected")}),(0,k.jsx)(j.A,{columns:B,setColumns:E})]}),children:[(0,k.jsx)(o.A,{scroll:{x:!0},rowSelection:N,columns:null===B||void 0===B?void 0:B.filter((e=>e.is_show)),dataSource:M,rowKey:e=>e.id,loading:R,pagination:!1}),(0,k.jsx)(m.A,{click:()=>{S(!0);const s={...Object.assign({},...n.map(((e,t)=>({["ids[".concat(t,"]")]:e}))))};x.A.delete(s).then((()=>{h.oR.success(e("successfully.deleted")),t(!1),z((0,f.CW)()),H(null)})).finally((()=>{C(null),S(!1)}))},text:e(V?"delete":"all.delete"),setText:C,loading:I})]})}},53387:(e,t,n)=>{n.d(t,{A:()=>a});var s=n(89379),c=n(9950);const l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var i=n(25085),o=function(e,t){return c.createElement(i.A,(0,s.A)((0,s.A)({},e),{},{ref:t,icon:l}))};const a=c.forwardRef(o)},89323:(e,t,n)=>{n.d(t,{A:()=>a});var s=n(89379),c=n(9950);const l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var i=n(25085),o=function(e,t){return c.createElement(i.A,(0,s.A)((0,s.A)({},e),{},{ref:t,icon:l}))};const a=c.forwardRef(o)}}]);