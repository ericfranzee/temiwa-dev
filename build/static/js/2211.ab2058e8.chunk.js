"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[2211],{28645:(e,t,a)=>{a.d(t,{A:()=>f});var n=a(9950),d=a(66362),o=a(69216),l=a(80737),r=a(25933),i=a(57811),s=a(81541),c=a(48538),u=a(89323),v=a(70030),h=a(44414);const{Text:m}=d.A,f=e=>{let{columns:t=[],setColumns:a,style:d,size:f="",iconOnly:g}=e;const{t:p}=(0,v.B)(),[x,A]=(0,n.useState)(!1),y=(0,h.jsx)(o.A,{children:null===t||void 0===t?void 0:t.map(((e,n)=>(0,h.jsx)(o.A.Item,{children:(0,h.jsxs)(l.A,{className:"d-flex justify-content-between",children:[(0,h.jsx)(m,{children:e.title}),(0,h.jsx)(r.A,{defaultChecked:!0,onClick:()=>function(e){const n=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));a(n)}(e),disabled:1===n})]})},e+n)))});return(0,h.jsx)(i.A,{overlay:y,trigger:["click"],onVisibleChange:e=>{A(e)},visible:x,children:(0,h.jsx)(s.A,{title:p("change.columns"),children:(0,h.jsx)(c.A,{style:{...d},size:f,icon:(0,h.jsx)(u.A,{}),children:g?null:p("Columns")})})})}},8297:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(9950),d=a(55902),o=a(41397),l=a(60767),r=a(44414);function i(e){let{handleChange:t,defaultValue:a,resetSearch:i,...s}=e;const[c,u]=(0,n.useState)(a),v=(0,n.useMemo)((()=>(0,o.debounce)((e=>{t(e)}),800)),[]);return(0,n.useEffect)((()=>{u(a)}),[i]),(0,r.jsx)(d.A,{value:c,onChange:e=>{u(e.target.value),v(e.target.value)},prefix:(0,r.jsx)(l.A,{}),...s})}},80415:(e,t,a)=>{a.d(t,{G:()=>l,HV:()=>d,LH:()=>n,PR:()=>o,wO:()=>i,xt:()=>r});const n={new:[1,2,3,4,5],accepted:[1,2,3,4,5],ready:[1,2,3,4,5],on_a_way:[1,2,3,4,5],delivered:[1,2,3,4,5],canceled:[1,2,3,4,5],cooking:[1,2,3,4,5]},d=(new Date,new Date,["new","accepted","ready","on_a_way","pause","delivered","canceled"]),o=30,l="HH:mm",r="hh:mm a",i=!0},8168:(e,t,a)=>{function n(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}a.d(t,{A:()=>n})},51066:(e,t,a)=>{a.d(t,{Q:()=>o});var n=a(17706),d=a(80415);const o=()=>{var e,t,a,o;return null!==(e=null===(t=n.M.getState())||void 0===t||null===(a=t.globalSettings)||void 0===a||null===(o=a.settings)||void 0===o?void 0:o.hour_format)&&void 0!==e?e:d.G}},53774:(e,t,a)=>{function n(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"after";const a=Number(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");return"after"===t?"".concat(a," ").concat(e):"".concat(e," ").concat(a)}a.r(t),a.d(t,{default:()=>n})},2211:(e,t,a)=>{a.r(t),a.d(t,{default:()=>z});var n=a(9950),d=a(54909),o=a(80737),l=a(48538),r=a(23263),i=a(52913),s=a(28429),c=a(12678),u=a(91854),v=a(74623),h=a(70030),m=a(88986),f=a(53177),g=a(8168),p=a(8297),x=a(53774),A=a(28645),y=a(90352),w=a(59051),_=a.n(w),j=a(51066),b=a(44414);const{TabPane:k}=d.A;function z(){var e,t,a;const w=(0,u.wA)(),z=(0,s.Zp)(),{t:C}=(0,h.B)(),{defaultCurrency:H}=(0,u.d4)((e=>e.currency),u.bN),{statusList:V}=(0,u.d4)((e=>e.orderStatus),u.bN),S=[{name:"all",id:"0",active:!0,sort:0},...V],{activeMenu:I}=(0,u.d4)((e=>e.menu),u.bN),[M,N]=(0,n.useState)("accepted"),P=(null===(e=I.data)||void 0===e?void 0:e.role)||M,D=null===I||void 0===I?void 0:I.data,E={search:null===D||void 0===D?void 0:D.search,sort:null===D||void 0===D?void 0:D.sort,column:null===D||void 0===D?void 0:D.column,perPage:null===D||void 0===D?void 0:D.perPage,page:null===D||void 0===D?void 0:D.page,user_id:null===D||void 0===D?void 0:D.userId,status:"all"===P?void 0:P},O=(0,j.Q)(),[Y,B]=(0,n.useState)([{title:C("id"),dataIndex:"id",key:"id",sorter:!0,is_show:!0},{title:C("client"),dataIndex:"user",key:"user",is_show:!0,render:e=>(null===e||void 0===e?void 0:e.full_name)||C("N/A")},{title:C("number.of.products"),dataIndex:"order_details_count",key:"rate",is_show:!0,render:e=>(0,b.jsxs)("div",{className:"text-lowercase",children:[e||0," ",C("products")]})},{title:C("amount"),dataIndex:"details",key:"price",is_show:!0,render:(e,t)=>(0,x.default)(null===t||void 0===t?void 0:t.total_price,H.symbol)},{title:C("payment.type"),dataIndex:"transaction",key:"transaction",is_show:!0,render:e=>{var t;return C(null===e||void 0===e||null===(t=e.payment_system)||void 0===t?void 0:t.tag)||"-"}},{title:"created.at",dataIndex:"created_at",key:"created_at",is_show:!0,render:e=>_()(e).format("YYYY-MM-DD ".concat(O))},{title:C("options"),key:"options",is_show:!0,render:(e,t)=>(0,b.jsx)(o.A,{children:(0,b.jsx)(l.A,{icon:(0,b.jsx)(c.A,{}),onClick:()=>(e=>{w((0,v.X4)({url:"deliveryman/order/details/".concat(e.id),id:"order_details",name:C("order.details")})),z("/deliveryman/order/details/".concat(e.id))})(t)})})}]),{orders:G,meta:K,loading:L,params:Q}=(0,u.d4)((e=>e.orders),u.bN);(0,m.A)((()=>{w((0,f.oP)(E))}),[null===I||void 0===I?void 0:I.data]),(0,n.useEffect)((()=>{null!==I&&void 0!==I&&I.refetch&&(w((0,f.oP)(E)),w((0,v.km)(I)))}),[null===I||void 0===I?void 0:I.refetch]),(0,n.useEffect)((()=>{console.log("fetching..."),w((0,y.nr)({}))}),[]);const R=e=>{const t=I.data;w((0,v.Ok)({activeMenu:I,data:{...t,...e}}))};return(0,b.jsxs)(r.A,{title:C("orders"),extra:(0,b.jsxs)(o.A,{wrap:!0,children:[(0,b.jsx)(p.A,{placeholder:C("search"),handleChange:e=>R({search:e}),defaultValue:null===(t=I.data)||void 0===t?void 0:t.search,resetSearch:!(null!==(a=I.data)&&void 0!==a&&a.search)}),(0,b.jsx)(A.A,{columns:Y,setColumns:B})]}),children:[(0,b.jsx)(d.A,{onChange:e=>{R({role:e,page:1}),N(e)},type:"card",activeKey:P,children:S.filter((e=>e.active)).map((e=>(0,b.jsx)(k,{tab:C(e.name)},e.name)))}),(0,b.jsx)(i.A,{scroll:{x:!0},columns:null===Y||void 0===Y?void 0:Y.filter((e=>e.is_show)),dataSource:G,loading:L,pagination:{pageSize:Q.perPage,page:Q.page,total:K.total,defaultCurrent:Q.page},rowKey:e=>e.id,onChange:function(e,t,a){const{pageSize:n,current:d}=e,{field:o,order:l}=a,r=(0,g.A)(l);w((0,v.Ok)({activeMenu:I,data:{...I.data,perPage:n,page:d,column:o,sort:r}}))}})]})}},89323:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(89379),d=a(9950);const o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var l=a(25085),r=function(e,t){return d.createElement(l.A,(0,n.A)((0,n.A)({},e),{},{ref:t,icon:o}))};const i=d.forwardRef(r)}}]);