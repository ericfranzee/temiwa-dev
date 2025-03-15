"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[5937],{45937:(e,a,r)=>{r.r(a),r.d(a,{default:()=>f});var t=r(9950),l=r(59233),i=r(23263),s=r(87094),n=r(41988),o=r(55902),c=r(99674),d=r(25933),m=r(48538),u=r(85923),v=r(28429),h=r(71999),p=r(98591),j=r(91854),g=r(74623),x=r(62572),A=r(85427),y=r(70030),b=r(48970),w=r(44414);const f=()=>{var e,a;const{t:r}=(0,y.B)(),f=(0,v.Zp)(),k=(0,j.wA)(),{activeMenu:P}=(0,j.d4)((e=>e.menu),j.bN),{params:E}=(0,j.d4)((e=>e.careerCategory),j.bN),[I,q]=(0,t.useState)(null!==(e=P.data)&&void 0!==e&&e.image?[null===(a=P.data)||void 0===a?void 0:a.image]:[]),[L]=l.A.useForm(),[N,S]=(0,t.useState)(!1),[C,F]=(0,t.useState)(null),{defaultLang:z,languages:M}=(0,j.d4)((e=>e.formLang),j.bN);(0,t.useEffect)((()=>()=>{const e=L.getFieldsValue(!0);k((0,g.Ok)({activeMenu:P,data:e}))}),[]);return(0,w.jsx)(i.A,{title:r("add.category"),extra:(0,w.jsx)(h.A,{}),children:(0,w.jsxs)(l.A,{name:"basic",layout:"vertical",onFinish:e=>{var a;S(!0);const t={...e,type:"career",active:e.active?1:0,keywords:e.keywords.join(","),parent_id:null,"images[0]":null===(a=I[0])||void 0===a?void 0:a.name},l="catalog/career-categories";x.A.create(t).then((()=>{u.oR.success(r("successfully.created")),k((0,g.EK)({...P,nextUrl:l})),k((0,A.b)(E)),f("/".concat(l))})).catch((e=>F(e.response.data.params))).finally((()=>S(!1)))},initialValues:{parent_id:{title:"---",value:0,key:0},active:!0,...P.data},form:L,children:[(0,w.jsxs)(s.A,{gutter:12,children:[(0,w.jsx)(n.A,{span:12,children:M.map(((e,a)=>(0,w.jsx)(l.A.Item,{label:r("name"),name:"title[".concat(e.locale,"]"),help:C&&C["title.".concat(z)]?C["title.".concat(z)][0]:null,validateStatus:C?"error":"success",rules:[{validator:(a,t)=>t||(null===e||void 0===e?void 0:e.locale)!==z?t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(r("no.empty.space"))):t&&(null===t||void 0===t?void 0:t.trim().length)<2?Promise.reject(new Error(r("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(r("required")))}],hidden:e.locale!==z,children:(0,w.jsx)(o.A,{placeholder:r("name")})},e.title+a)))}),(0,w.jsx)(n.A,{span:12,children:M.map(((e,a)=>(0,w.jsx)(l.A.Item,{label:r("description"),name:"description[".concat(e.locale,"]"),rules:[{validator:(a,t)=>t||(null===e||void 0===e?void 0:e.locale)!==z?t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(r("no.empty.space"))):t&&(null===t||void 0===t?void 0:t.trim().length)<5?Promise.reject(new Error(r("must.be.at.least.5"))):Promise.resolve():Promise.reject(new Error(r("required")))}],hidden:e.locale!==z,children:(0,w.jsx)(p.A,{rows:4,maxLength:150})},e.locale+a)))}),(0,w.jsx)(n.A,{span:12,children:(0,w.jsx)(l.A.Item,{label:r("keywords"),name:"keywords",rules:[{required:!0,message:r("required")}],children:(0,w.jsx)(c.A,{mode:"tags",style:{width:"100%"}})})}),(0,w.jsx)(n.A,{span:4,children:(0,w.jsx)(l.A.Item,{label:r("image"),name:"images",rules:[{validator:(e,a)=>0===(null===I||void 0===I?void 0:I.length)?Promise.reject(new Error(r("required"))):Promise.resolve()}],children:(0,w.jsx)(b.A,{type:"categories",imageList:I,setImageList:q,form:L,multiple:!1})})}),(0,w.jsx)(n.A,{span:2,children:(0,w.jsx)(l.A.Item,{label:r("active"),name:"active",valuePropName:"checked",children:(0,w.jsx)(d.A,{})})})]}),(0,w.jsx)(m.A,{type:"primary",htmlType:"submit",loading:N,children:r("submit")})]})})}}}]);