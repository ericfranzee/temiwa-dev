"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[1021],{47992:(e,t,n)=>{n.d(t,{G:()=>c});var i=n(9950),a=n(95491),l=n.n(a),s=n(99674),r=n(90650),o=n(44414);const c=e=>{let{fetchOptions:t,debounceTimeout:n=400,onClear:a,refetchOptions:c=!1,...u}=e;const[d,m]=(0,i.useState)(!1),[v,f]=(0,i.useState)([]),h=(0,i.useMemo)((()=>l()((e=>{f([]),m(!0),t(e).then((e=>{f(e),m(!1)}))}),n)),[t,n]);return(0,o.jsx)(s.A,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:h,onClear:()=>{h(""),a&&a()},notFoundContent:d?(0,o.jsx)(r.A,{size:"small"}):"no results",...u,options:v,onFocus:()=>{v.length&&!c||h("")}})}},80415:(e,t,n)=>{n.d(t,{G:()=>s,HV:()=>a,LH:()=>i,PR:()=>l,wO:()=>o,xt:()=>r});const i={new:[1,2,3,4,5],accepted:[1,2,3,4,5],ready:[1,2,3,4,5],on_a_way:[1,2,3,4,5],delivered:[1,2,3,4,5],canceled:[1,2,3,4,5],cooking:[1,2,3,4,5]},a=(new Date,new Date,["new","accepted","ready","on_a_way","pause","delivered","canceled"]),l=30,s="HH:mm",r="hh:mm a",o=!0},51066:(e,t,n)=>{n.d(t,{Q:()=>l});var i=n(17706),a=n(80415);const l=()=>{var e,t,n,l;return null!==(e=null===(t=i.M.getState())||void 0===t||null===(n=t.globalSettings)||void 0===n||null===(l=n.settings)||void 0===l?void 0:l.hour_format)&&void 0!==e?e:a.G}},41021:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});var i=n(59233),a=n(23263),l=n(70030),s=n(82063),r=n(71999),o=n(9584),c=n(28429),u=n(9950),d=n(91854),m=n(74623),v=n(59051),f=n.n(v),h=n(44414);const _=function(){const{t:e}=(0,l.B)(),{id:t}=(0,c.g)(),n=(0,d.wA)(),[v]=i.A.useForm(),{activeMenu:_}=(0,d.d4)((e=>e.menu),d.bN),{languages:p}=(0,d.d4)((e=>e.formLang),d.bN),[g,A]=(0,u.useState)(!1);function x(e){if(!e)return{};const{translations:t}=e,n=p.map((e=>{var n;return{["title[".concat(e.locale,"]")]:null===(n=t.find((t=>t.locale===e.locale)))||void 0===n?void 0:n.title}}));return Object.assign({},...n)}return(0,u.useEffect)((()=>{_.refetch&&(n((0,m.km)(_.refetch)),(e=>{A(!0),o.A.getById(e).then((e=>{var t,n,i,a;let{data:l}=e;v.setFieldsValue({...x(l),service_master:{value:null===(t=l.service_master)||void 0===t?void 0:t.id,label:null===(n=l.service_master)||void 0===n||null===(i=n.service)||void 0===i||null===(a=i.translation)||void 0===a?void 0:a.title},notification_time:l.notification_time,notification_type:l.notification_type,last_sent_at:f()(l.last_sent_at)})})).finally((()=>A(!1)))})(t))}),[_.refetch]),(0,h.jsx)(a.A,{title:e("add.service.notification"),extra:(0,h.jsx)(r.A,{}),loading:g,children:(0,h.jsx)(s.A,{form:v,onSubmit:e=>o.A.update(t,e)})})}},82063:(e,t,n)=>{n.d(t,{A:()=>S});var i=n(59233),a=n(87094),l=n(41988),s=n(99674),r=n(40577),o=n(55902),c=n(86971),u=n(48538),d=n(70030),m=n(91854),v=n(9950),f=n(47992),h=n(72124),_=n(85923),p=n(74623),g=n(28429),A=n(59051),x=n.n(A),j=n(27940),b=n(51066),y=n(44414);const w=["day","week"];const S=function(e){let{form:t,onSubmit:n}=e;const{t:A}=(0,d.B)(),S=(0,m.wA)(),q=(0,g.Zp)(),{languages:M,defaultLang:O}=(0,m.d4)((e=>e.formLang),m.bN),{activeMenu:Y}=(0,m.d4)((e=>e.menu),m.bN),k=(0,m.d4)((e=>{var t,n;return null===(t=e.globalSettings)||void 0===t||null===(n=t.settings)||void 0===n?void 0:n.using_12_hour_format}),m.bN),H=(0,b.Q)(),[I,N]=(0,v.useState)(!1);function C(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"title";const n=M.map((n=>({[n.locale]:e["".concat(t,"[").concat(n.locale,"]")]})));return Object.assign({},...n)}return(0,y.jsxs)(i.A,{form:t,layout:"vertical",onFinish:function(e){var t;N(!0);const i={service_master_id:null===(t=e.service_master)||void 0===t?void 0:t.value,notification_time:e.notification_time,notification_type:e.notification_type,last_sent_at:x()(e.last_sent_at).format("YYYY-MM-DD HH:mm"),title:C(e,"title")};delete i.service_master;const a="master/service-notifications";n(i).then((()=>{_.oR.success("successfully.added"),(0,m.vA)((()=>{S((0,p.EK)({...Y,nextUrl:a})),S((0,j.M5)({})),q("/"+a)}))})).finally((()=>N(!1)))},children:[(0,y.jsxs)(a.A,{gutter:24,children:[(0,y.jsx)(l.A,{span:12,children:(0,y.jsx)(i.A.Item,{name:"service_master",label:A("service.master"),rules:[{required:!0,message:"required"}],children:(0,y.jsx)(f.G,{fetchOptions:async function(e){const t={search:0===e.length?null:e};return h.A.get(t).then((e=>{let{data:t}=e;return t.map((e=>{var t,n;return{label:null===(t=e.service)||void 0===t||null===(n=t.translation)||void 0===n?void 0:n.title,value:e.id}}))}))}})})}),(0,y.jsx)(l.A,{span:12,children:(0,y.jsx)(i.A.Item,{name:"notification_type",label:A("notification.type"),rules:[{required:!0,message:A("required")}],children:(0,y.jsx)(s.A,{children:w.map((e=>(0,y.jsx)(s.A.Option,{children:A(e)},e)))})})}),(0,y.jsx)(l.A,{span:12,children:(0,y.jsx)(i.A.Item,{name:"notification_time",label:A("notification.time"),rules:[{required:!0,message:A("required")}],children:(0,y.jsx)(r.A,{className:"w-100"})})}),(0,y.jsx)(l.A,{span:12,children:M.map((e=>(0,y.jsx)(i.A.Item,{label:A("title"),name:"title[".concat(e.locale,"]"),rules:[{required:e.locale===O,message:A("required")}],hidden:e.locale!==O,children:(0,y.jsx)(o.A,{})},"title"+e.locale)))}),(0,y.jsx)(l.A,{span:12,children:(0,y.jsx)(i.A.Item,{name:"last_sent_at",label:A("last.sent.at"),rules:[{required:!0,message:A("required")}],children:(0,y.jsx)(c.A,{format:"YYYY-MM-DD ".concat(H),use12Hour:"1"===k,className:"w-100",showTime:!0,placeholder:""})})})]}),(0,y.jsx)(u.A,{loading:I,type:"primary",htmlType:"submit",children:A("submit")})]})}}}]);