"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[770],{79406:(e,s,l)=>{l.d(s,{a:()=>u});var n=l(9950),a=l(95491),r=l.n(a),t=l(99674),i=l(90650),o=l(44414);const u=e=>{let{fetchOptions:s,debounceTimeout:l=400,refetch:a=!1,...u}=e;const[d,c]=(0,n.useState)(!1),[m,v]=(0,n.useState)([]),h=(0,n.useMemo)((()=>r()((e=>{v([]),c(!0),s(e).then((e=>{v(e),c(!1)}))}),l)),[s,l]);return(0,o.jsx)(t.A,{showSearch:!0,allowClear:!0,labelInValue:!0,onClear:()=>h(""),filterOption:!1,onSearch:h,notFoundContent:d?(0,o.jsx)(i.A,{size:"small"}):"no results",...u,options:m,onFocus:()=>{m.length&&!a||h("")}})}},47992:(e,s,l)=>{l.d(s,{G:()=>u});var n=l(9950),a=l(95491),r=l.n(a),t=l(99674),i=l(90650),o=l(44414);const u=e=>{let{fetchOptions:s,debounceTimeout:l=400,onClear:a,refetchOptions:u=!1,...d}=e;const[c,m]=(0,n.useState)(!1),[v,h]=(0,n.useState)([]),p=(0,n.useMemo)((()=>r()((e=>{h([]),m(!0),s(e).then((e=>{h(e),m(!1)}))}),l)),[s,l]);return(0,o.jsx)(t.A,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:p,onClear:()=>{p(""),a&&a()},notFoundContent:c?(0,o.jsx)(i.A,{size:"small"}):"no results",...d,options:v,onFocus:()=>{v.length&&!u||p("")}})}},90770:(e,s,l)=>{l.r(s),l.d(s,{default:()=>u});var n=l(70030),a=l(59233),r=l(23263),t=l(30020),i=l(50971),o=l(44414);const u=function(){const{t:e}=(0,n.B)(),[s]=a.A.useForm();return(0,o.jsx)(r.A,{title:e("add.service.master"),children:(0,o.jsx)(i.A,{form:s,onSubmit:e=>t.A.create(e)})})}},50971:(e,s,l)=>{l.d(s,{A:()=>I});var n=l(70030),a=l(91854),r=l(28429),t=l(9950),i=l(85923),o=l(74623),u=l(59233),d=l(87094),c=l(41988),m=l(40577),v=l(99674),h=l(25933),p=l(48538),A=l(47992),j=l(79406),x=l(54764),f=l(75751),b=l(55660),g=l(53271),y=l(44414);const q=["online","offline_in","offline_out"],w=[{value:1,label:"male"},{value:2,label:"female"},{value:3,label:"all"}];const I=function(e){let{form:s,onSubmit:l,initialValues:I={}}=e;const{t:C}=(0,n.B)(),S=(0,a.wA)(),O=(0,r.Zp)(),{activeMenu:_}=(0,a.d4)((e=>e.menu)),{defaultCurrency:k}=(0,a.d4)((e=>e.currency),a.bN),F=(0,t.useRef)([]),[N,P]=(0,t.useState)(!1);return(0,y.jsxs)(u.A,{onFinish:e=>{var s;P(!0);const n="service-master",r={...e,shop_id:e.shop.value,service_id:e.service.value,active:e.active?1:0,master_id:null===(s=e.master)||void 0===s?void 0:s.value,shop:void 0,service:void 0,master:void 0};return l(r).then((()=>{i.oR.success("successfully.added"),(0,a.vA)((()=>{S((0,o.EK)({..._,nextUrl:n})),S((0,f.hP)({})),O("/"+n)}))})).finally((()=>{P(!1)}))},form:s,layout:"vertical",initialValues:{active:!0},children:[(0,y.jsxs)(d.A,{gutter:24,children:[(0,y.jsx)(c.A,{span:8,children:(0,y.jsx)(u.A.Item,{label:C("master"),name:"master",rules:[{required:!0,message:C("required")}],children:(0,y.jsx)(A.G,{fetchOptions:e=>{var s;const l={page:1,perPage:20,search:null!==e&&void 0!==e&&e.length?e:void 0,role:"master",invite_status:"accepted"};return null!==e&&void 0!==e&&null!==(s=e.trim())&&void 0!==s&&s.length||delete l.search,g.A.getAll(l).then((e=>e.data.map((e=>({label:"".concat(e.firstname," ").concat(e.lastname),value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id})))))}})})}),(0,y.jsx)(c.A,{span:8,children:(0,y.jsx)(u.A.Item,{label:C("shop"),name:"shop",rules:[{required:!0,message:C("required")}],children:(0,y.jsx)(A.G,{fetchOptions:e=>{var s;const l={page:1,perPage:20,status:"approved",search:e};return null!==e&&void 0!==e&&null!==(s=e.trim())&&void 0!==s&&s.length||delete l.search,b.A.getAll(l).then((e=>e.data.map((e=>{var s;return{label:null===e||void 0===e||null===(s=e.translation)||void 0===s?void 0:s.title,value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id}}))))}})})}),(0,y.jsx)(c.A,{span:8,children:(0,y.jsx)(u.A.Item,{label:C("service"),name:"service",rules:[{required:!0,message:C("required")}],children:(0,y.jsx)(j.a,{fetchOptions:e=>{const s={search:e,active:1};return x.A.getAll(s).then((e=>{const s=e.data.map((e=>({label:e.translation?e.translation.title:"no name",value:e.id,key:e.id,price:e.price,interval:e.interval,pause:e.pause,commission_fee:e.commission_fee,type:e.type,gender:e.gender})));return F.current=s,s}))},refetch:!0,onChange:e=>{var l;const n=null===(l=F.current)||void 0===l?void 0:l.find((s=>s.value===e.value));s.setFieldsValue({service:e,...n})}})})}),(0,y.jsx)(c.A,{span:8,children:(0,y.jsx)(u.A.Item,{label:C("price"),name:"price",rules:[{required:!0,message:C("required")}],children:(0,y.jsx)(m.A,{min:0,className:"w-100",addonAfter:null===k||void 0===k?void 0:k.symbol})})}),(0,y.jsx)(c.A,{span:8,children:(0,y.jsx)(u.A.Item,{label:C("interval"),name:"interval",rules:[{required:!0,message:C("required")}],children:(0,y.jsx)(m.A,{min:0,className:"w-100"})})}),(0,y.jsx)(c.A,{span:8,children:(0,y.jsx)(u.A.Item,{label:C("pause"),name:"pause",rules:[{required:!0,message:C("required")}],children:(0,y.jsx)(m.A,{min:0,className:"w-100"})})}),(0,y.jsx)(c.A,{span:8,children:(0,y.jsx)(u.A.Item,{label:"type",name:"type",rules:[{required:!0,message:C("required")}],children:(0,y.jsx)(v.A,{children:q.map(((e,s)=>(0,y.jsx)(v.A.Option,{value:e,children:e},e)))})})}),(0,y.jsx)(c.A,{span:8,children:(0,y.jsx)(u.A.Item,{label:C("commission.fee"),name:"commission_fee",children:(0,y.jsx)(m.A,{min:1,className:"w-100"})})}),(0,y.jsx)(c.A,{span:8,children:(0,y.jsx)(u.A.Item,{label:C("discount"),name:"discount",rules:[{validator:(e,s)=>void 0!==s&&(s<0||s>100)?Promise.reject(new Error(C("must.be.between.0.and.100"))):Promise.resolve()}],children:(0,y.jsx)(m.A,{min:0,className:"w-100",addonAfter:(null===k||void 0===k?void 0:k.symbol)||"$"})})}),(0,y.jsx)(c.A,{span:8,children:(0,y.jsx)(u.A.Item,{label:C("gender"),name:"gender",rules:[{required:!0,message:C("required")}],children:(0,y.jsx)(v.A,{children:w.map(((e,s)=>(0,y.jsx)(v.A.Option,{value:e.value,children:C(e.label)},e.value)))})})}),(0,y.jsx)(c.A,{span:8,children:(0,y.jsx)(u.A.Item,{label:C("active"),name:"active",valuePropName:"checked",children:(0,y.jsx)(h.A,{})})})]}),(0,y.jsx)(p.A,{type:"primary",htmlType:"submit",loading:N,children:C("submit")})]})}}}]);