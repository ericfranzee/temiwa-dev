"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[7715],{35116:(e,t,a)=>{a.d(t,{A:()=>r});a(9950);var s=a(48538),l=a(44070),c=a(85923),n=a(70030),i=a(13311),o=a(44414);function r(e){let{size:t="",onClick:a,type:r="default",...d}=e;const{t:u}=(0,n.B)(),{isDemo:h}=(0,i.A)();return(0,o.jsx)(s.A,{size:t,icon:(0,o.jsx)(l.A,{}),onClick:e=>{h?c.oR.warning(u("cannot.work.demo")):a(e)},type:r,...d})}},28645:(e,t,a)=>{a.d(t,{A:()=>g});var s=a(9950),l=a(66362),c=a(69216),n=a(80737),i=a(25933),o=a(57811),r=a(81541),d=a(48538),u=a(89323),h=a(70030),v=a(44414);const{Text:m}=l.A,g=e=>{let{columns:t=[],setColumns:a,style:l,size:g="",iconOnly:p}=e;const{t:A}=(0,h.B)(),[x,f]=(0,s.useState)(!1),y=(0,v.jsx)(c.A,{children:null===t||void 0===t?void 0:t.map(((e,s)=>(0,v.jsx)(c.A.Item,{children:(0,v.jsxs)(n.A,{className:"d-flex justify-content-between",children:[(0,v.jsx)(m,{children:e.title}),(0,v.jsx)(i.A,{defaultChecked:!0,onClick:()=>function(e){const s=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));a(s)}(e),disabled:1===s})]})},e+s)))});return(0,v.jsx)(o.A,{overlay:y,trigger:["click"],onVisibleChange:e=>{f(e)},visible:x,children:(0,v.jsx)(r.A,{title:A("change.columns"),children:(0,v.jsx)(d.A,{style:{...l},size:g,icon:(0,v.jsx)(u.A,{}),children:p?null:A("Columns")})})})}},8297:(e,t,a)=>{a.d(t,{A:()=>o});var s=a(9950),l=a(55902),c=a(41397),n=a(60767),i=a(44414);function o(e){let{handleChange:t,defaultValue:a,resetSearch:o,...r}=e;const[d,u]=(0,s.useState)(a),h=(0,s.useMemo)((()=>(0,c.debounce)((e=>{t(e)}),800)),[]);return(0,s.useEffect)((()=>{u(a)}),[o]),(0,i.jsx)(l.A,{value:d,onChange:e=>{u(e.target.value),h(e.target.value)},prefix:(0,i.jsx)(n.A,{}),...r})}},8168:(e,t,a)=>{function s(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}a.d(t,{A:()=>s})},97715:(e,t,a)=>{a.r(t),a.d(t,{default:()=>O});var s=a(9950),l=a(24513),c=a(67376),n=a(44070),i=a(13700),o=a(53387),r=a(54909),d=a(80737),u=a(12916),h=a(72243),v=a(25933),m=a(48538),g=a(23263),p=a(52913),A=a(63620),x=a(55386),f=a(28429),y=a(85923),j=a(76083),w=a(91854),k=a(74623),C=a(12598),z=a(70030),b=a(35116),V=a(28645),H=a(8297),S=a(88986),_=a(38525),M=a(8168),I=a(61707),N=a(44414);const R=["blue","red","gold","volcano","cyan","lime"],{TabPane:B}=r.A,E=["all","pending","published","unpublished"],O=()=>{var e,t,a,O;const{t:W}=(0,z.B)(),X=(0,w.wA)(),K=(0,f.Zp)(),{activeMenu:T}=(0,w.d4)((e=>e.menu),w.bN),[P,D]=(0,s.useState)("all"),[F,Z]=(0,s.useState)(null),$=(null===(e=T.data)||void 0===e?void 0:e.role)||P;const[q,G]=(0,s.useState)([{title:W("id"),dataIndex:"id",key:"id",is_show:!0},{title:W("name"),dataIndex:"name",key:"name",is_show:!0},{title:W("translations"),dataIndex:"locales",is_show:!0,render:(e,t)=>{var a;return(0,N.jsx)(d.A,{children:null===(a=t.locales)||void 0===a?void 0:a.map(((e,t)=>(0,N.jsx)(u.A,{className:"text-uppercase",color:[R[t]],children:e})))})}},{title:W("image"),dataIndex:"img",key:"img",is_show:!0,render:(e,t)=>(0,N.jsx)(h.A,{src:e||"https://via.placeholder.com/150",alt:"img_gallery",width:100,className:"rounded",preview:!0,placeholder:!0},e+t.id)},{title:W("active"),dataIndex:"active",key:"active",is_show:!0,render:(e,t)=>(0,N.jsx)(v.A,{onChange:()=>{J(!0),Q(t.uuid),Z(!0)},checked:e})},{title:W("options"),key:"options",dataIndex:"options",is_show:!0,render:(e,t)=>(0,N.jsxs)(d.A,{children:[(0,N.jsx)(m.A,{type:"primary",icon:(0,N.jsx)(l.A,{}),onClick:()=>function(e){X((0,k.X4)({url:"seller/recipe-category/edit/".concat(e.uuid),id:"category_edit",name:W("edit.category")})),K("/seller/recipe-category/edit/".concat(e.uuid),{state:"edit"})}(t)}),(0,N.jsx)(m.A,{icon:(0,N.jsx)(c.A,{}),onClick:()=>{return e=t.uuid,X((0,k.X4)({id:"category-clone",url:"seller/recipe-category-clone/".concat(e),name:W("category.clone")})),void K("/seller/recipe-category-clone/".concat(e),{state:"clone"});var e}}),(0,N.jsx)(b.A,{icon:(0,N.jsx)(n.A,{}),onClick:()=>{Q([t.id]),J(!0),se(!0)}})]})}]),{setIsModalVisible:J}=(0,s.useContext)(x.o),[L,Q]=(0,s.useState)(null),[U,Y]=(0,s.useState)(!1),[ee,te]=(0,s.useState)(!1),[ae,se]=(0,s.useState)(null),{categories:le,meta:ce,loading:ne}=(0,w.d4)((e=>e.recipeCategory),w.bN),ie=T.data,oe={search:null===ie||void 0===ie?void 0:ie.search,pageSize:ce.per_page,page:(null===ie||void 0===ie?void 0:ie.page)||1,status:"all"===$?void 0:$};(0,s.useEffect)((()=>{T.refetch&&(X((0,I.ss)(oe)),X((0,k.km)(T)))}),[T.refetch]),(0,S.A)((()=>{X((0,I.ss)(oe))}),[T.data]);const re={selectedRowKeys:L,onChange:e=>{Q(e)}},de=e=>{const t=T.data;X((0,k.Ok)({activeMenu:T,data:{...t,...e}}))};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(g.A,{className:"p-0",children:(0,N.jsxs)(d.A,{wrap:!0,size:[14,20],children:[(0,N.jsx)(H.A,{placeholder:W("search"),className:"w-25",handleChange:e=>{de({search:e})},defaultValue:null===(t=T.data)||void 0===t?void 0:t.search,resetSearch:!(null!==(a=T.data)&&void 0!==a&&a.search),style:{minWidth:300}}),(0,N.jsx)(b.A,{size:"",onClick:()=>{null===L||0===L.length?y.oR.warning(W("select.the.product")):(J(!0),se(!1))},children:W("delete.selected")}),(0,N.jsxs)(m.A,{style:{minWidth:150},onClick:()=>{X((0,k.X4)({url:"seller/recipe-categories/import",id:"category_import",name:W("import.category")})),K("/seller/recipe-categories/import")},children:[(0,N.jsx)(_.I8R,{className:"mr-2"}),W("import")]}),(0,N.jsxs)(m.A,{style:{minWidth:150},loading:ee,onClick:()=>{te(!0),C.A.export().then((e=>{const t=A.bb+e.data.file_name;window.location.href=t})).finally((()=>te(!1)))},children:[(0,N.jsx)(_.$tV,{className:"mr-2"}),W("export")]}),(0,N.jsx)(m.A,{icon:(0,N.jsx)(i.A,{}),onClick:()=>{X((0,k.Ok)({activeMenu:T,data:void 0}))},disabled:!T.data,style:{minWidth:100}}),(0,N.jsx)(m.A,{type:"primary",icon:(0,N.jsx)(o.A,{}),onClick:()=>{X((0,k.X4)({id:"category-add",url:"seller/recipe-category/add",name:W("add.category")})),K("/seller/recipe-category/add")},children:W("add.category")}),(0,N.jsx)(V.A,{columns:q,setColumns:G})]})}),(0,N.jsxs)(g.A,{title:W("categories"),children:[(0,N.jsx)(r.A,{className:"mt-3",activeKey:$,onChange:e=>{de({role:e,page:1}),D(e)},type:"card",children:E.map((e=>(0,N.jsx)(B,{tab:W(e)},e)))}),(0,N.jsx)(p.A,{scroll:{x:!0},rowSelection:re,columns:null===q||void 0===q?void 0:q.filter((e=>e.is_show)),dataSource:le,pagination:{pageSize:ce.per_page,page:(null===ie||void 0===ie?void 0:ie.page)||1,total:ce.total,defaultCurrent:null===ie||void 0===ie?void 0:ie.page,current:null===(O=T.data)||void 0===O?void 0:O.page},rowKey:e=>e.id,onChange:function(e,t,a){const{pageSize:s,current:l}=e,{field:c,order:n}=a,i=(0,M.A)(n);X((0,k.Ok)({activeMenu:T,data:{...T.data,perPage:s,page:l,column:c,sort:i}}))},loading:ne})]}),(0,N.jsx)(j.A,{click:F?()=>{Y(!0),C.A.setActive(L).then((()=>{Y(!1),X((0,I.ss)(oe)),J(!1)}))}:()=>{Y(!0);const e={...Object.assign({},...L.map(((e,t)=>({["ids[".concat(t,"]")]:e}))))};C.A.delete(e).then((()=>{X((0,I.ss)(oe)),y.oR.success(W("successfully.deleted"))})).finally((()=>{J(!1),Y(!1),se(null),Q(null)}))},text:W(F?"set.active.product":ae?"delete":"all.delete"),setText:Q,setActive:Z,loading:U})]})}},13700:(e,t,a)=>{a.d(t,{A:()=>o});var s=a(89379),l=a(9950);const c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6a25.95 25.95 0 0025.6 30.4h723c1.5 0 3-.1 4.4-.4a25.88 25.88 0 0021.2-30zM204 390h272V182h72v208h272v104H204V390zm468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260H672z"}}]},name:"clear",theme:"outlined"};var n=a(25085),i=function(e,t){return l.createElement(n.A,(0,s.A)((0,s.A)({},e),{},{ref:t,icon:c}))};const o=l.forwardRef(i)},53387:(e,t,a)=>{a.d(t,{A:()=>o});var s=a(89379),l=a(9950);const c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var n=a(25085),i=function(e,t){return l.createElement(n.A,(0,s.A)((0,s.A)({},e),{},{ref:t,icon:c}))};const o=l.forwardRef(i)},89323:(e,t,a)=>{a.d(t,{A:()=>o});var s=a(89379),l=a(9950);const c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var n=a(25085),i=function(e,t){return l.createElement(n.A,(0,s.A)((0,s.A)({},e),{},{ref:t,icon:c}))};const o=l.forwardRef(i)}}]);