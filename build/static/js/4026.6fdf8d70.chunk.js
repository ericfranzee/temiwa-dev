"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[4026],{47992:(e,l,o)=>{o.d(l,{G:()=>s});var t=o(9950),d=o(95491),i=o.n(d),n=o(99674),a=o(90650),r=o(44414);const s=e=>{let{fetchOptions:l,debounceTimeout:o=400,onClear:d,refetchOptions:s=!1,...u}=e;const[v,c]=(0,t.useState)(!1),[p,h]=(0,t.useState)([]),f=(0,t.useMemo)((()=>i()((e=>{h([]),c(!0),l(e).then((e=>{h(e),c(!1)}))}),o)),[l,o]);return(0,r.jsx)(n.A,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:f,onClear:()=>{f(""),d&&d()},notFoundContent:v?(0,r.jsx)(a.A,{size:"small"}):"no results",...u,options:p,onFocus:()=>{p.length&&!s||f("")}})}},8168:(e,l,o)=>{function t(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}o.d(l,{A:()=>t})},53774:(e,l,o)=>{function t(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$",l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"after";const o=Number(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");return"after"===l?"".concat(o," ").concat(e):"".concat(e," ").concat(o)}o.r(l),o.d(l,{default:()=>t})},44026:(e,l,o)=>{o.r(l),o.d(l,{default:()=>b});var t=o(9950),d=o(86971),i=o(23263),n=o(80737),a=o(52913),r=o(28429),s=o(91854),u=o(74623),v=o(70030),c=o(88986),p=o(8168),h=o(53774),f=o(47992),m=o(53271),_=o(59051),y=o.n(_),g=o(58547),x=o(43430),w=o(44414);const{RangePicker:Y}=d.A;function b(){var e,l,o,d,_,b,k;const{type:A}=(0,r.g)(),M=(0,s.wA)(),j=(0,r.Zp)(),{t:D}=(0,v.B)(),{defaultCurrency:C}=(0,s.d4)((e=>e.currency),s.bN),I=[{title:D("order.id"),is_show:!0,dataIndex:"model_id",key:"model_id",sorter:!0,render:e=>(0,w.jsxs)("span",{className:"text-hover",onClick:()=>(e=>{e&&(M((0,u.X4)({url:"order/details/".concat(e),id:"order_details",name:D("order.details")})),j("/order/details/".concat(e)))})(e),children:["#",e]})},{title:D(A),is_show:!0,dataIndex:"user",key:"user",render:(e,l)=>{const o=null===l||void 0===l?void 0:l.user;return(0,w.jsxs)("div",{children:[null===o||void 0===o?void 0:o.firstname," ",(null===o||void 0===o?void 0:o.lastname)||""]})}},{title:D("order.total_price"),is_show:!0,dataIndex:"transaction",key:"transaction",render:(e,l)=>{var o;return(0,w.jsx)("span",{children:(0,h.default)(null===l||void 0===l||null===(o=l.model)||void 0===o?void 0:o.total_price,null===C||void 0===C?void 0:C.symbol,null===C||void 0===C?void 0:C.position)})}},..."seller"===A?[{title:D("coupon.price"),is_show:!0,dataIndex:"coupon_price",key:"coupon_price",render:e=>(0,h.default)(e,null===C||void 0===C?void 0:C.symbol,null===C||void 0===C?void 0:C.position)}]:[],..."seller"===A?[{title:D("total.cashback"),is_show:!0,dataIndex:"point_histories",key:"point_histories",render:e=>{var l;return(0,h.default)(null===e||void 0===e||null===(l=e[0])||void 0===l?void 0:l.price,null===C||void 0===C?void 0:C.symbol,null===C||void 0===C?void 0:C.position)}}]:[],{title:D("delivery.fee"),is_show:!0,dataIndex:"delivery_fee",key:"delivery_fee",render:(e,l)=>{var o;return(0,h.default)(null===l||void 0===l||null===(o=l.model)||void 0===o?void 0:o.delivery_fee,null===C||void 0===C?void 0:C.symbol,null===C||void 0===C?void 0:C.position)}},..."seller"===A?[{title:D("service.fee"),is_show:!0,dataIndex:"service_fee",key:"service_fee",render:(e,l)=>{var o,t;return(0,h.default)(((null===l||void 0===l||null===(o=l.model)||void 0===o?void 0:o.service_fee)||0)+((null===l||void 0===l||null===(t=l.model)||void 0===t?void 0:t.commission_fee)||0),null===C||void 0===C?void 0:C.symbol,null===C||void 0===C?void 0:C.position)}}]:[],..."seller"===A?[{title:D("seller.fee"),is_show:!0,dataIndex:"seller_fee",key:"seller_fee",render:(e,l)=>{var o;return(0,h.default)(null===l||void 0===l||null===(o=l.model)||void 0===o?void 0:o.seller_fee,null===C||void 0===C?void 0:C.symbol,null===C||void 0===C?void 0:C.position)}}]:[],{title:D("payment.type"),is_show:!0,dataIndex:"transaction",key:"transaction",render:e=>{var l;return D(null===e||void 0===e||null===(l=e.payment_system)||void 0===l?void 0:l.tag)||"-"}}],{activeMenu:S}=(0,s.d4)((e=>e.menu),s.bN),[O,N]=(0,t.useState)(y()().subtract(1,"month"),y()()),{completedList:P,loading:z,params:F,meta:G}=(0,s.d4)((e=>e.paymentToPartners),s.bN),L=S.data,E={search:null===L||void 0===L?void 0:L.search,sort:null===L||void 0===L?void 0:L.sort,column:null===L||void 0===L?void 0:L.column,perPage:null===L||void 0===L?void 0:L.perPage,page:null===L||void 0===L?void 0:L.page,user_id:null===L||void 0===L?void 0:L.user_id,shop_id:null!==(null===(e=S.data)||void 0===e?void 0:e.shop_id)?null===(l=S.data)||void 0===l?void 0:l.shop_id:null,date_from:Array.isArray(O)?null===(o=O[0])||void 0===o?void 0:o.format("YYYY-MM-DD"):y()().subtract(1,"month").format("YYYY-MM-DD"),date_to:Array.isArray(O)?null===(d=O[1])||void 0===d?void 0:d.format("YYYY-MM-DD"):y()().format("YYYY-MM-DD"),type:A};(0,c.A)((()=>{M((0,x.eL)(E))}),[L,O,A]);const T=(e,l)=>{M((0,u.Ok)({activeMenu:S,data:{...L,[l]:e}}))};return(0,t.useEffect)((()=>{null!==S&&void 0!==S&&S.refetch&&(M((0,x.eL)(E)),M((0,u.km)(S)))}),[null===S||void 0===S?void 0:S.refetch]),(0,t.useEffect)((()=>()=>{M((0,u.Ok)({activeMenu:S,data:{}}))}),[]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(i.A,{children:(0,w.jsx)("div",{className:"flex justify-content-space-between",children:(0,w.jsxs)(n.A,{wrap:!0,className:"order-filter",style:{flex:1,width:"100%"},children:[(0,w.jsx)(f.G,{placeholder:D("select.shop"),fetchOptions:async function(e){const l={search:e,status:"approved"};return g.A.getAll(l).then((e=>{let{data:l}=e;return l.map((e=>{var l;return{label:null===(l=e.translation)||void 0===l?void 0:l.title,value:e.id}}))}))},style:{width:"100%"},onSelect:e=>T(e.value,"shop_id"),onDeselect:()=>T(null,"shop_id"),allowClear:!0,value:null===L||void 0===L?void 0:L.shop_id}),(0,w.jsx)(f.G,{placeholder:D("select.user"),fetchOptions:async function(e){const l={search:e,perPage:10,role:A};return m.A.search(l).then((e=>{let{data:l}=e;return l.map((e=>({label:"".concat(e.firstname," ").concat(e.lastname),value:e.id})))}))},onSelect:e=>T(e.value,"user_id"),onDeselect:()=>T(null,"user_id"),style:{width:"100%"},value:null===L||void 0===L?void 0:L.user_id}),(0,w.jsx)(Y,{value:O,onChange:e=>{T((l=>{var o,t;return{...l,date_from:null===e||void 0===e||null===(o=e[0])||void 0===o?void 0:o.format("YYYY-MM-DD"),date_to:null===e||void 0===e||null===(t=e[1])||void 0===t?void 0:t.format("YYYY-MM-DD")}})),N(e)},disabledDate:e=>e&&e>y()().endOf("day"),style:{width:"100%"}})]})})}),(0,w.jsx)(i.A,{children:(0,w.jsx)(a.A,{scroll:{x:!0},columns:null===I||void 0===I?void 0:I.filter((e=>e.is_show)),dataSource:P,loading:z,pagination:{pageSize:F.perPage,page:(null===(_=S.data)||void 0===_?void 0:_.page)||1,total:null===G||void 0===G?void 0:G.total,defaultCurrent:null===(b=S.data)||void 0===b?void 0:b.page,current:null===(k=S.data)||void 0===k?void 0:k.page},rowKey:e=>null===e||void 0===e?void 0:e.id,onChange:function(e,l,o){const{pageSize:t,current:d}=e,{field:i,order:n}=o,a=(0,p.A)(n);M((0,u.Ok)({activeMenu:S,data:{...L,perPage:t,page:d,column:i,sort:a}}))}})})]})}}}]);