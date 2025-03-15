"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[269],{269:(e,s,a)=>{a.r(s),a.d(s,{default:()=>w});var l=a(9950),r=a(59233),i=a(23263),d=a(87094),n=a(41988),t=a(99674),u=a(55902),m=a(25933),c=a(80737),j=a(48538),A=a(70030),x=a(62960),h=a(24455),p=a(91854),o=a(85923),_=a(74623),b=a(28429),q=a(81446),y=a(44414);const g=[{title:"firebase",value:"firebase"},{title:"twilio",value:"twilio"}];function w(){const[e]=r.A.useForm(),{t:s}=(0,A.B)(),[a,w]=(0,l.useState)(!1),[f,k]=(0,l.useState)(!1),N=(0,p.wA)(),I=(0,b.Zp)(),{activeMenu:v}=(0,p.d4)((e=>e.menu),p.bN),{type:F}=(0,b.g)(),[B,C]=(0,l.useState)(null),{smsGatewaysList:S}=(0,p.d4)((e=>e.sms),p.bN);(0,l.useEffect)((()=>{v.refetch&&(s=>{k(!0),x.A.getById(s).then((s=>{console.log("res",s.data);const a=s.data;e.setFieldsValue({default:Boolean(a.default),...a.payload}),C(a.type)})).finally((()=>{k(!1),N((0,_.km)(v))}))})(F)}),[v.refetch]);return(0,y.jsx)(i.A,{title:s("edit.sms.payload"),className:"h-100",children:f?(0,y.jsx)(q.A,{}):(0,y.jsx)(r.A,{form:e,layout:"vertical",onFinish:e=>{w(!0);const a={type:B,default:Number(e.default),payload:{type:void 0,default:void 0,...e}},l="settings/sms-payload";x.A.update(F,a).then((()=>{N((0,h.M)()),o.oR.success(s("successfully.updated")),N((0,_.EK)({...v,nextUrl:l})),I("/".concat(l))})).finally((()=>w(!1)))},children:(0,y.jsxs)(i.A,{title:s("add.sms.payload"),children:[(0,y.jsxs)(d.A,{gutter:12,children:[(0,y.jsx)(n.A,{span:12,children:(0,y.jsx)(r.A.Item,{label:s("select.type"),rules:[{required:!0,message:s("required")}],children:(0,y.jsx)(t.A,{disabled:!0,className:"w-100",onChange:e=>C(e),value:B,options:g.filter((e=>!S.some((s=>s.type===e.value))))})})}),"firebase"===F&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(n.A,{span:12,children:(0,y.jsx)(r.A.Item,{label:s("android_api_key"),name:"android_api_key",rules:[{required:!0,message:s("required")}],children:(0,y.jsx)(u.A,{className:"w-100"})})}),(0,y.jsx)(n.A,{span:12,children:(0,y.jsx)(r.A.Item,{label:s("api_key"),name:"api_key",rules:[{required:!0,message:s("required")}],children:(0,y.jsx)(u.A,{className:"w-100"})})}),(0,y.jsx)(n.A,{span:12,children:(0,y.jsx)(r.A.Item,{label:s("app_id"),name:"app_id",rules:[{required:!0,message:s("required")}],children:(0,y.jsx)(u.A,{className:"w-100"})})}),(0,y.jsx)(n.A,{span:12,children:(0,y.jsx)(r.A.Item,{label:s("auth_domain"),name:"auth_domain",rules:[{required:!0,message:s("required")}],children:(0,y.jsx)(u.A,{className:"w-100"})})}),(0,y.jsx)(n.A,{span:12,children:(0,y.jsx)(r.A.Item,{label:s("ios_api_key"),name:"ios_api_key",rules:[{required:!0,message:s("required")}],children:(0,y.jsx)(u.A,{className:"w-100"})})}),(0,y.jsx)(n.A,{span:12,children:(0,y.jsx)(r.A.Item,{label:s("measurement_id"),name:"measurement_id",rules:[{required:!0,message:s("required")}],children:(0,y.jsx)(u.A,{className:"w-100"})})}),(0,y.jsx)(n.A,{span:12,children:(0,y.jsx)(r.A.Item,{label:s("message_sender_id"),name:"message_sender_id",rules:[{required:!0,message:s("required")}],children:(0,y.jsx)(u.A,{className:"w-100"})})}),(0,y.jsx)(n.A,{span:12,children:(0,y.jsx)(r.A.Item,{label:s("project_id"),name:"project_id",rules:[{required:!0,message:s("required")}],children:(0,y.jsx)(u.A,{className:"w-100"})})}),(0,y.jsx)(n.A,{span:12,children:(0,y.jsx)(r.A.Item,{label:s("server_key"),name:"server_key",rules:[{required:!0,message:s("required")}],children:(0,y.jsx)(u.A,{className:"w-100"})})}),(0,y.jsx)(n.A,{span:12,children:(0,y.jsx)(r.A.Item,{label:s("storage_bucket"),name:"storage_bucket",rules:[{required:!0,message:s("required")}],children:(0,y.jsx)(u.A,{className:"w-100"})})}),(0,y.jsx)(n.A,{span:12,children:(0,y.jsx)(r.A.Item,{label:s("vapid_key"),name:"vapid_key",rules:[{required:!0,message:s("required")}],children:(0,y.jsx)(u.A,{className:"w-100"})})}),(0,y.jsx)(n.A,{span:12,children:(0,y.jsx)(r.A.Item,{label:s("default"),name:"default",valuePropName:"checked",children:(0,y.jsx)(m.A,{})})})]}),"twilio"===F&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(n.A,{span:12,children:(0,y.jsx)(r.A.Item,{label:s("twilio_auth_token"),name:"twilio_auth_token",rules:[{required:!0,message:s("required")}],children:(0,y.jsx)(u.A,{min:0,className:"w-100"})})}),(0,y.jsx)(n.A,{span:12,children:(0,y.jsx)(r.A.Item,{label:s("twilio_account_id"),name:"twilio_account_id",rules:[{required:!0,message:s("required")}],children:(0,y.jsx)(u.A,{className:"w-100"})})}),(0,y.jsx)(n.A,{span:12,children:(0,y.jsx)(r.A.Item,{label:s("twilio_number"),name:"twilio_number",rules:[{required:!0,message:s("required")}],children:(0,y.jsx)(u.A,{className:"w-100"})})}),(0,y.jsx)(n.A,{span:12,children:(0,y.jsx)(r.A.Item,{label:s("default"),name:"default",valuePropName:"checked",children:(0,y.jsx)(m.A,{})})})]})]}),(0,y.jsx)(c.A,{children:(0,y.jsx)(j.A,{type:"primary",htmlType:"submit",loading:a,children:s("submit")})})]})})})}}}]);