"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[6469],{86469:(e,s,r)=>{r.r(s),r.d(s,{default:()=>q});var a=r(9950),i=r(59233),n=r(23263),l=r(48538),d=r(87094),u=r(41988),t=r(55902),c=r(70030),m=r(52281),A=r(85923),j=r(91854),x=r(74623),h=r(9690),p=r(81446),o=r(13311),g=r(44414);function q(){const{t:e}=(0,c.B)(),[s]=i.A.useForm(),{activeMenu:r}=(0,j.d4)((e=>e.menu),j.bN),q=(0,j.wA)(),[k,b]=(0,a.useState)(!1),[f,y]=(0,a.useState)(!1),{isDemo:_}=(0,o.A)();(0,a.useEffect)((()=>()=>{const e=s.getFieldsValue(!0);q((0,x.Ok)({activeMenu:r,data:e}))}),[]);function I(){b(!0),m.A.get().then((e=>{const r=(e=>{const s=e.map((e=>({[e.key]:e.value})));return Object.assign({},...s)})(e.data);s.setFieldsValue(r)})).finally((()=>{b(!1),q((0,x.km)(r))}))}(0,a.useEffect)((()=>{r.refetch&&I()}),[r.refetch]);return(0,g.jsx)(i.A,{layout:"vertical",form:s,name:"global-settings",onFinish:s=>{var r;r=s,y(!0),m.A.update(r).then((()=>{A.oR.success(e("successfully.updated")),q((0,h.Uc)())})).finally((()=>y(!1)))},initialValues:{...r.data},children:k?(0,g.jsx)(p.A,{}):(0,g.jsx)(n.A,{title:e("firebase.config"),extra:(0,g.jsx)(l.A,{type:"primary",onClick:()=>{_?A.oR.warning(e("cannot.work.demo")):s.submit()},loading:f,children:e("save")}),children:(0,g.jsxs)(d.A,{gutter:12,children:[(0,g.jsx)(u.A,{span:12,children:(0,g.jsx)(i.A.Item,{label:e("api.key"),name:"api_key",rules:[{required:!0,message:e("required")}],children:(0,g.jsx)(t.A,{})})}),(0,g.jsx)(u.A,{span:12,children:(0,g.jsx)(i.A.Item,{label:"IOS "+e("api.key"),name:"ios_api_key",rules:[{required:!0,message:e("required")}],children:(0,g.jsx)(t.A,{})})}),(0,g.jsx)(u.A,{span:12,children:(0,g.jsx)(i.A.Item,{label:"Android "+e("api.key"),name:"android_api_key",rules:[{required:!0,message:e("required")}],children:(0,g.jsx)(t.A,{})})}),(0,g.jsx)(u.A,{span:12,children:(0,g.jsx)(i.A.Item,{label:e("server.key"),name:"server_key",rules:[{required:!0,message:e("required")}],children:(0,g.jsx)(t.A,{})})}),(0,g.jsx)(u.A,{span:12,children:(0,g.jsx)(i.A.Item,{label:e("vapid.key"),name:"vapid_key",rules:[{required:!0,message:e("required")}],children:(0,g.jsx)(t.A,{})})}),(0,g.jsx)(u.A,{span:12,children:(0,g.jsx)(i.A.Item,{label:e("auth.domain"),name:"auth_domain",rules:[{required:!0,message:e("required")}],children:(0,g.jsx)(t.A,{})})}),(0,g.jsx)(u.A,{span:12,children:(0,g.jsx)(i.A.Item,{label:e("project.id"),name:"project_id",rules:[{required:!0,message:e("required")}],children:(0,g.jsx)(t.A,{})})}),(0,g.jsx)(u.A,{span:12,children:(0,g.jsx)(i.A.Item,{label:e("storage.bucket"),name:"storage_bucket",rules:[{required:!0,message:e("required")}],children:(0,g.jsx)(t.A,{})})}),(0,g.jsx)(u.A,{span:12,children:(0,g.jsx)(i.A.Item,{label:e("messaging.sender.id"),name:"messaging_sender_id",rules:[{required:!0,message:e("required")}],children:(0,g.jsx)(t.A,{})})}),(0,g.jsx)(u.A,{span:12,children:(0,g.jsx)(i.A.Item,{label:e("app.id"),name:"app_id",rules:[{required:!0,message:e("required")}],children:(0,g.jsx)(t.A,{})})}),(0,g.jsx)(u.A,{span:12,children:(0,g.jsx)(i.A.Item,{label:e("measurement.id"),name:"measurement_id",rules:[{required:!0,message:e("required")}],children:(0,g.jsx)(t.A,{})})})]})})})}}}]);