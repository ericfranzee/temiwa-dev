"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[1334],{8297:(e,t,l)=>{l.d(t,{A:()=>r});var s=l(9950),n=l(55902),a=l(41397),i=l(60767),o=l(44414);function r(e){let{handleChange:t,defaultValue:l,resetSearch:r,...d}=e;const[c,u]=(0,s.useState)(l),v=(0,s.useMemo)((()=>(0,a.debounce)((e=>{t(e)}),800)),[]);return(0,s.useEffect)((()=>{u(l)}),[r]),(0,o.jsx)(n.A,{value:c,onChange:e=>{u(e.target.value),v(e.target.value)},prefix:(0,o.jsx)(i.A,{}),...d})}},47992:(e,t,l)=>{l.d(t,{G:()=>d});var s=l(9950),n=l(95491),a=l.n(n),i=l(99674),o=l(90650),r=l(44414);const d=e=>{let{fetchOptions:t,debounceTimeout:l=400,onClear:n,refetchOptions:d=!1,...c}=e;const[u,v]=(0,s.useState)(!1),[h,p]=(0,s.useState)([]),g=(0,s.useMemo)((()=>a()((e=>{p([]),v(!0),t(e).then((e=>{p(e),v(!1)}))}),l)),[t,l]);return(0,r.jsx)(i.A,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:g,onClear:()=>{g(""),n&&n()},notFoundContent:u?(0,r.jsx)(o.A,{size:"small"}):"no results",...c,options:h,onFocus:()=>{h.length&&!d||g("")}})}},91334:(e,t,l)=>{l.r(t),l.d(t,{default:()=>V});var s=l(9950),n=l(72243),a=l(80737),i=l(12916),o=l(48538),r=l(23263),d=l(52913),c=l(70030),u=l(54764),v=l(91854),h=l(88986),p=l(28429),g=l(5478),x=l(74623),j=l(24513),A=l(44070),m=l(62572),y=l(55660),w=l(47992),f=l(8297),C=l(44414);const k=e=>{let{filters:t,setFilters:l}=e;const{t:s}=(0,c.B)();return(0,C.jsxs)(a.A,{wrap:!0,children:[(0,C.jsx)(f.A,{placeholder:s("search"),className:"w-200px",onChange:e=>{var s;return l({...t,search:null===e||void 0===e||null===(s=e.target)||void 0===s?void 0:s.value})}}),(0,C.jsx)(w.G,{fetchOptions:e=>{const t={type:"service",perPage:20,page:1,search:null!==e&&void 0!==e&&e.length?e:void 0};return m.A.getAll(t).then((e=>{var t;return null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.map((e=>{var t;return{label:null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title,value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id}}))}))},className:"w-200px",placeholder:s("select.category"),onChange:e=>l({...t,category:e})}),(0,C.jsx)(w.G,{fetchOptions:e=>{const t={search:null!==e&&void 0!==e&&e.length?e:void 0,page:1,perPage:20};return y.A.getAll(t).then((e=>{var t;return null===(t=e.data)||void 0===t?void 0:t.map((e=>{var t;return{label:null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title,value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id}}))}))},className:"w-200px",placeholder:s("select.shop"),onChange:e=>l({...t,shop:e})})]})};var b=l(59233),S=l(82706),_=l(41988),I=l(99674),F=l(98591);const O=e=>{let{statuses:t,visible:l,data:n,handleSubmit:a,handleCancel:i}=e;const{t:r}=(0,c.B)(),[d]=b.A.useForm(),[u,v]=(0,s.useState)(!1),[h,p]=(0,s.useState)(null===n||void 0===n?void 0:n.status);return(0,C.jsx)(S.A,{title:r("change.status"),visible:l,onCancel:i,footer:[(0,C.jsx)(o.A,{type:"primary",onClick:()=>d.submit(),loading:u,children:r("save")}),(0,C.jsx)(o.A,{type:"default",onClick:i,children:r("cancel")})],children:(0,C.jsxs)(b.A,{form:d,onFinish:e=>{v(!0);const t={status:null===e||void 0===e?void 0:e.status,id:null===n||void 0===n?void 0:n.id,status_note:null===e||void 0===e?void 0:e.status_note};a(t).finally((()=>{v(!1),i()}))},layout:"vertical",initialValues:{status:null===n||void 0===n?void 0:n.status},children:[(0,C.jsx)(_.A,{span:24,children:(0,C.jsx)(b.A.Item,{label:r("status"),name:"status",rules:[{required:!0,message:r("please.select.status")}],children:(0,C.jsx)(I.A,{onChange:e=>p(e),children:t.map(((e,t)=>(0,C.jsx)(I.A.Option,{value:e,children:r(e)},e+t)))})})}),h===t[2]&&(0,C.jsx)(_.A,{span:24,children:(0,C.jsx)(b.A.Item,{label:r("status.note"),name:"status_note",rules:[{required:h===t[2],message:r("required")}],children:(0,C.jsx)(F.A,{rows:2})})})]})})};var N=l(55386),z=l(76083),E=l(85923);const M=["new","accepted","canceled"];var R=l(63620);const T=["blue","red","gold","volcano","cyan","lime"],V=()=>{var e,t,l;const{t:m}=(0,c.B)(),y=(0,p.Zp)(),w=(0,v.wA)(),{services:f,loading:b,meta:S,params:_}=(0,v.d4)((e=>e.servicesSlice),v.bN),{activeMenu:I}=(0,v.d4)((e=>e.menu),v.bN),{setIsModalVisible:F}=(0,s.useContext)(N.o),[V,q]=(0,s.useState)(null),[B,G]=(0,s.useState)(null),[P,K]=(0,s.useState)(null),[X,Z]=(0,s.useState)({search:"",category:{}}),[D,H]=(0,s.useState)(X),[J,L]=(0,s.useState)(!1),Q={..._,search:null===X||void 0===X?void 0:X.search,category_id:null===X||void 0===X||null===(e=X.category)||void 0===e?void 0:e.value,shop_id:null===X||void 0===X||null===(t=X.shop)||void 0===t?void 0:t.value};null!==X&&void 0!==X&&null!==(l=X.search)&&void 0!==l&&l.length||null===Q||void 0===Q||delete Q.search;const U={selectedRowKeys:V,onChange:e=>{q(e)}},W=[{title:m("id"),dataIndex:"id",is_show:!0,key:"id"},{title:m("image"),dataIndex:"img",is_show:!1,render:e=>(0,C.jsx)(n.A,{width:100,src:e?R.sE+e:"https://via.placeholder.com/150",placeholder:!0,style:{borderRadius:4}})},{title:m("title"),dataIndex:"slug",is_show:!0,key:"translation",render:(e,t)=>{var l;return null===t||void 0===t||null===(l=t.translation)||void 0===l?void 0:l.title}},{title:m("translations"),dataIndex:"translations",is_show:!0,key:"translations",render:(e,t)=>{var l;return(0,C.jsx)(a.A,{children:null===(l=t.locales)||void 0===l?void 0:l.map(((e,t)=>(0,C.jsx)(i.A,{className:"text-uppercase",color:[T[t]],children:e})))})}},{title:m("shop"),dataIndex:"shop",is_show:!0,key:"shop",render:e=>{var t;return(null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title)||"--"}},{title:m("status"),dataIndex:"status",key:"status",is_show:!0,render:(e,t)=>(0,C.jsxs)(a.A,{wrap:!0,children:["new"===e?(0,C.jsx)(i.A,{color:"blue",children:m(e)}):"canceled"===e?(0,C.jsx)(i.A,{color:"error",children:m(e)}):(0,C.jsx)(i.A,{color:"cyan",children:m(e)}),(0,C.jsx)(j.A,{onClick:()=>K(t)})]})},{title:m("interval"),dataIndex:"interval",key:"interval",is_show:!0},{title:m("type"),dataIndex:"type",key:"type",is_show:!0},{title:m("category"),dataIndex:"category",key:"category",is_show:!0,render:(e,t)=>{var l,s;return null===t||void 0===t||null===(l=t.category)||void 0===l||null===(s=l.translation)||void 0===s?void 0:s.title}},{title:m("options"),is_show:!0,key:"options",render:(e,t)=>(0,C.jsxs)(a.A,{wrap:!0,children:[(0,C.jsx)(o.A,{type:"primary",icon:(0,C.jsx)(j.A,{}),onClick:()=>Y(null===t||void 0===t?void 0:t.id)}),(0,C.jsx)(o.A,{icon:(0,C.jsx)(A.A,{}),onClick:()=>{q([null===t||void 0===t?void 0:t.id]),F(!0),G(!0)}})]})}];(0,s.useEffect)((()=>{I.refetch&&(0,v.vA)((()=>{w((0,g.jg)(Q)),w((0,x.km)(I))}))}),[I.refetch]),(0,s.useEffect)((()=>{const e=setTimeout((()=>{H(X)}),400);return()=>{clearTimeout(e)}}),[X,400]),(0,h.A)((()=>{w((0,g.jg)(Q))}),[D]);const Y=e=>{const t="services/".concat(e);w((0,x.X4)({id:"edit.service",url:t,name:m("edit.service")})),y("/".concat(t),{state:{params:Q}})};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(r.A,{children:(0,C.jsxs)(a.A,{wrap:!0,children:[(0,C.jsx)(k,{filters:X,setFilters:Z}),(0,C.jsx)(o.A,{onClick:()=>{null===V||0===V.length?E.oR.warning(m("select.the.product")):(F(!0),G(!1))},children:m("delete.selected")}),(0,C.jsx)(o.A,{type:"primary",onClick:()=>{const e="services/add";w((0,x.X4)({id:"create.service",url:e,name:m("add.service")})),y("/".concat(e),{state:{params:Q}})},children:m("add.service")})]})}),(0,C.jsx)(r.A,{children:(0,C.jsx)(d.A,{scroll:{x:!0},rowSelection:U,columns:null===W||void 0===W?void 0:W.filter((e=>e.is_show)),rowKey:e=>null===e||void 0===e?void 0:e.id,dataSource:f,loading:b,pagination:{pageSize:(null===S||void 0===S?void 0:S.per_page)||10,total:S.total||0,current:(null===S||void 0===S?void 0:S.current_page)||1},onChange:e=>{const{pageSize:t,current:l}=e,s={...Q,perPage:t,page:l};w((0,g.jg)(s))}})}),P&&(0,C.jsx)(O,{statuses:M,data:P,visible:P,handleSubmit:e=>{var t;const l={category_id:null===e||void 0===e||null===(t=e.category)||void 0===t?void 0:t.id,status:null===e||void 0===e?void 0:e.status,status_note:null===e||void 0===e?void 0:e.status_note};return u.A.statusChange(null===e||void 0===e?void 0:e.id,l).then((()=>w((0,g.jg)(Q))))},handleCancel:()=>K(null)}),(0,C.jsx)(z.A,{click:()=>{L(!0);const e={...Object.assign({},...V.map(((e,t)=>({["ids[".concat(t,"]")]:e}))))};u.A.delete(e).then((()=>{E.oR.success(m("successfully.deleted")),q(null),F(!1),G(!1),w((0,g.jg)(Q))})).finally((()=>L(!1)))},text:m(B?"delete":"all.delete"),setText:q,loading:J})]})}}}]);