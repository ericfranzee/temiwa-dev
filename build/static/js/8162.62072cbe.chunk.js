"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[8162],{47992:(e,l,r)=>{r.d(l,{G:()=>o});var a=r(9950),n=r(95491),t=r.n(n),s=r(99674),i=r(90650),d=r(44414);const o=e=>{let{fetchOptions:l,debounceTimeout:r=400,onClear:n,refetchOptions:o=!1,...u}=e;const[c,m]=(0,a.useState)(!1),[p,h]=(0,a.useState)([]),x=(0,a.useMemo)((()=>t()((e=>{h([]),m(!0),l(e).then((e=>{h(e),m(!1)}))}),r)),[l,r]);return(0,d.jsx)(s.A,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:x,onClear:()=>{x(""),n&&n()},notFoundContent:c?(0,d.jsx)(i.A,{size:"small"}):"no results",...u,options:p,onFocus:()=>{p.length&&!o||x("")}})}},98162:(e,l,r)=>{r.r(l),r.d(l,{default:()=>v});r(9950);var a=r(59233),n=r(23263),t=r(71999),s=r(28429),i=r(36642),d=r(59051),o=r.n(d),u=r(91854),c=r(74623),m=r(70030),p=r(2894),h=r(74715),x=r(85923),A=r(44414);const v=()=>{const{t:e}=(0,m.B)(),[l]=a.A.useForm(),r=(0,u.wA)(),d=(0,s.Zp)(),{activeMenu:v}=(0,u.d4)((e=>e.menu),u.bN);return(0,A.jsx)(n.A,{title:e("add.coupon"),extra:(0,A.jsx)(t.A,{}),children:(0,A.jsx)(h.A,{form:l,handleSubmit:l=>{const a={...l,expired_at:o()(l.expired_at).format("YYYY-MM-DD"),qty:Number(l.qty),price:Number(l.price)},n="coupons";return i.A.create(a).then((()=>{x.oR.success(e("successfully.added")),(0,u.vA)((()=>{r((0,c.EK)({...v,nextUrl:n})),r((0,p.F)({}))})),d("/".concat(n))}))}})})}},74715:(e,l,r)=>{r.d(l,{A:()=>b});var a=r(9950),n=r(59233),t=r(87094),s=r(41988),i=r(55902),d=r(99674),o=r(86971),u=r(40577),c=r(48538),m=r(59051),p=r.n(m),h=r(70030),x=r(91854),A=r(55660),v=r(47992),j=r(44414);function b(e){let{form:l,handleSubmit:r}=e;const{t:m}=(0,h.B)(),{defaultLang:b,languages:f}=(0,x.d4)((e=>e.formLang),x.bN),{activeMenu:g}=(0,x.d4)((e=>e.menu),x.bN),y=[{label:m("delivery.fee"),value:"delivery_fee",key:"delivery_fee"},{label:m("total.price"),value:"total_price",key:"total_price"},{label:m("bookin.total.price"),value:"booking_total_price",key:"booking_total_price"}],[q,_]=(0,a.useState)(!1);return(0,j.jsxs)(n.A,{form:l,name:"coupon-form",layout:"vertical",onFinish:e=>{var l;_(!0),r({...e,shop_id:null===e||void 0===e||null===(l=e.shop_id)||void 0===l?void 0:l.value}).finally((()=>_(!1)))},initialValues:{for:"delivery_fee",type:"fix",...null===g||void 0===g?void 0:g.data},children:[(0,j.jsxs)(t.A,{gutter:12,children:[(0,j.jsx)(s.A,{span:12,children:f.map((e=>(0,j.jsx)(n.A.Item,{label:m("title"),name:"title[".concat(e.locale,"]"),rules:[{required:e.locale===b,message:m("required")}],hidden:e.locale!==b,children:(0,j.jsx)(i.A,{maxLength:20})},"title"+e.id)))}),(0,j.jsx)(s.A,{span:12,children:(0,j.jsx)(n.A.Item,{label:m("name"),name:"name",rules:[{required:!0,message:m("required")}],children:(0,j.jsx)(i.A,{maxLength:20})})}),(0,j.jsx)(s.A,{span:12,children:(0,j.jsx)(n.A.Item,{label:m("type"),name:"type",rules:[{required:!0,message:m("required")}],children:(0,j.jsxs)(d.A,{children:[(0,j.jsx)(d.A.Option,{value:"fix",children:m("fix")}),(0,j.jsx)(d.A.Option,{value:"percent",children:m("percent")})]})})}),(0,j.jsx)(s.A,{span:12,children:(0,j.jsx)(n.A.Item,{name:"expired_at",label:m("expired.at"),rules:[{required:!0,message:m("required")}],children:(0,j.jsx)(o.A,{className:"w-100",placeholder:"",disabledDate:e=>p()().add(-1,"days")>=e})})}),(0,j.jsx)(s.A,{span:12,children:(0,j.jsx)(n.A.Item,{label:m("quantity"),name:"qty",rules:[{required:!0,message:m("required")},{type:"number",max:9999999999,message:m("max.length.10")}],children:(0,j.jsx)(u.A,{min:0,className:"w-100"})})}),(0,j.jsx)(s.A,{span:12,children:(0,j.jsx)(n.A.Item,{label:m("price"),name:"price",rules:[{required:!0,message:m("required")},{type:"number",max:9999999999,message:m("max.length.10")}],children:(0,j.jsx)(u.A,{min:0,className:"w-100"})})}),(0,j.jsx)(s.A,{span:12,children:(0,j.jsx)(n.A.Item,{label:m("shop"),name:"shop_id",rules:[{required:!0,message:m("required")}],children:(0,j.jsx)(v.G,{fetchOptions:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const l={search:e,perPage:10,page:1};return""===e.trim()&&delete l.search,A.A.getAll(l).then((e=>{var l;return null===e||void 0===e||null===(l=e.data)||void 0===l?void 0:l.map((e=>{var l;return{label:null===e||void 0===e||null===(l=e.translation)||void 0===l?void 0:l.title,value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id}}))}))}})})}),(0,j.jsx)(s.A,{span:12,children:(0,j.jsx)(n.A.Item,{name:"for",label:"for",rules:[{required:!0,message:m("required")}],children:(0,j.jsx)(d.A,{options:y})})})]}),(0,j.jsx)(c.A,{type:"primary",htmlType:"submit",loading:q,children:m("submit")})]})}}}]);