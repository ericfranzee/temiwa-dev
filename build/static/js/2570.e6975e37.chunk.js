"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[2570],{28257:(e,s,r)=>{r.d(s,{A:()=>m});r(9950);var n=r(84619),a=r(96011),l=r.n(a),i=r(63620);var t=r(91854),o=r(99674),d=r(59233),c=r(74635),u=r(44414);const h=i.bo?{componentRestrictions:{country:i.bo}}:{},m=e=>{let{value:s,setValue:r,setLocation:a,withLanguages:m=!0}=e;const{placePredictions:v,getPlacePredictions:p,isPlacePredictionsLoading:x}=(0,n.A)({apiKey:i.CJ,libraries:["places","geocode"],options:h}),{defaultLang:j,languages:A}=(0,t.d4)((e=>e.formLang),t.bN),g=()=>(0,u.jsx)(o.A,{allowClear:!0,searchValue:s,showSearch:!0,autoClearSearchValue:!0,loading:x,options:null===v||void 0===v?void 0:v.map((e=>({label:e.description,value:e.description}))),onSearch:e=>{r(e),e.length>0&&p({input:e})},onSelect:async e=>{const s=await async function(e){let s={address:e,key:arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.CJ};return l().get("https://maps.googleapis.com/maps/api/geocode/json",{params:s}).then((e=>{let{data:s}=e;return s.results[0]})).catch((e=>"not found"))}(e);a({lat:null===s||void 0===s?void 0:s.geometry.location.lat,lng:null===s||void 0===s?void 0:s.geometry.location.lng})},getPopupContainer:e=>e.parentNode});return m?(0,u.jsx)(u.Fragment,{children:A.map(((e,s)=>(0,u.jsx)(d.A.Item,{label:(0,c.t)("address"),name:"address[".concat(e.locale,"]"),rules:[{required:e.locale===j,message:(0,c.t)("required")}],hidden:e.locale!==j,children:g()},"address"+s)))}):(0,u.jsx)(d.A.Item,{label:(0,c.t)("address"),name:"address",rules:[{required:!0,message:(0,c.t)("required")}],children:g()})}},78498:(e,s,r)=>{r.d(s,{A:()=>x});var n=r(9950),a=r(97239);const l=r.p+"static/media/pin.0e41858db80c699cd8a2.png";var i=r(96011),t=r.n(i),o=r(63620);async function d(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.CJ,r={latlng:"".concat(null===e||void 0===e?void 0:e.lat,",").concat(null===e||void 0===e?void 0:e.lng),key:s};return t().get("https://maps.googleapis.com/maps/api/geocode/json",{params:r}).then((e=>{var s;let{data:r}=e;return null===(s=r.results[0])||void 0===s?void 0:s.formatted_address})).catch((e=>"not found"))}var c=r(39174),u=r(85923),h=r(70030),m=r(6566),v=r(44414);const p=(0,m.A)();const x=(0,a.GoogleApiWrapper)({apiKey:p,libraries:["places","geometry"]})((function(e){var s,r;const[i,t]=(0,n.useState)(),{t:o}=(0,h.B)(),m=async()=>{await navigator.geolocation.getCurrentPosition((function(e){const s={lat:e.coords.latitude,lng:e.coords.longitude};t(s)}),(function(e){u.oR.warning(o("turn.on.gps"))}))};(0,n.useEffect)((()=>{m()}),[]);const x=[{lat:Number(null===e||void 0===e||null===(s=e.location)||void 0===s?void 0:s.lat)||0,lng:Number(null===e||void 0===e||null===(r=e.location)||void 0===r?void 0:r.lng)||0}];for(var j=new e.google.maps.LatLngBounds,A=0;A<x.length;A++)j.extend(x[A]);return(0,v.jsxs)("div",{className:"map-container",style:{height:400,width:"100%"},children:[(0,v.jsx)("button",{className:"map-button",type:"button",onClick:()=>{m(),i&&(async s=>{const r={lat:null===s||void 0===s?void 0:s.lat,lng:null===s||void 0===s?void 0:s.lng};e.setLocation(r);const n=await d(r,p);e.setAddress(n)})(i)},children:(0,v.jsx)(c.uFi,{})}),(0,v.jsx)(a.Map,{cursor:"pointer",onClick:async(s,r,n)=>{const{latLng:a}=n,l={lat:a.lat(),lng:a.lng()};e.setLocation(l);const i=await d(l,p);e.setAddress(i)},google:e.google,defaultZoom:12,zoom:10,className:"clickable",initialCenter:e.location,center:e.location,children:(0,v.jsx)(a.Marker,{position:e.location,icon:{url:l,scaledSize:new e.google.maps.Size(32,32)},className:"marker"})})]})}))},47992:(e,s,r)=>{r.d(s,{G:()=>d});var n=r(9950),a=r(95491),l=r.n(a),i=r(99674),t=r(90650),o=r(44414);const d=e=>{let{fetchOptions:s,debounceTimeout:r=400,onClear:a,refetchOptions:d=!1,...c}=e;const[u,h]=(0,n.useState)(!1),[m,v]=(0,n.useState)([]),p=(0,n.useMemo)((()=>l()((e=>{v([]),h(!0),s(e).then((e=>{v(e),h(!1)}))}),r)),[s,r]);return(0,o.jsx)(i.A,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:p,onClear:()=>{p(""),a&&a()},notFoundContent:u?(0,o.jsx)(t.A,{size:"small"}):"no results",...c,options:m,onFocus:()=>{m.length&&!d||p("")}})}},6566:(e,s,r)=>{r.d(s,{A:()=>a});var n=r(17706);const a=()=>{var e,s;const r={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IS_DEMO:"false"}.MAP_API_KEY,{google_map_key:a}=null===(e=n.M.getState())||void 0===e||null===(s=e.globalSettings)||void 0===s?void 0:s.settings;return a||r}},37295:(e,s,r)=>{r.d(s,{A:()=>a});var n=r(9950);function a(e,s){const[r,a]=(0,n.useState)(e);return(0,n.useEffect)((()=>{const r=setTimeout((()=>{a(e)}),s);return()=>{clearTimeout(r)}}),[e,s]),r}},91474:(e,s,r)=>{r.d(s,{A:()=>a});var n=r(82371);const a={get:e=>n.A.get("rest/cities",{params:e})}},15923:(e,s,r)=>{r.d(s,{A:()=>a});var n=r(82371);const a={get:e=>n.A.get("rest/countries",{params:e})}},16637:(e,s,r)=>{r.r(s),r.d(s,{default:()=>re});var n=r(9950),a=r(54909),l=r(23263),i=r(70030),t=r(52281),o=r(91854),d=r(74623),c=r(62466),u=r(81446),h=r(59233),m=r(87094),v=r(41988),p=r(55902),x=r(99674),j=r(40577),A=r(80737),g=r(48538),_=r(85923),b=r(32599);const f=[{label:5,value:5},{label:10,value:10},{label:15,value:15},{label:20,value:20},{label:25,value:25},{label:30,value:30},{label:35,value:35},{label:40,value:40},{label:45,value:45},{label:50,value:50},{label:55,value:55}];var y=r(9690),k=r(13311),C=r(44414);const w=e=>{var s;let{setFavicon:r,favicon:a,setLogo:l,logo:d}=e;const{t:c}=(0,i.B)(),{activeMenu:u}=(0,o.d4)((e=>e.menu),o.bN),w=(0,o.wA)(),[N,I]=(0,n.useState)(!1),[P]=h.A.useForm(),{isDemo:S}=(0,k.A)();return(0,C.jsxs)(h.A,{layout:"vertical",form:P,name:"global-settings",onFinish:e=>{const s={...e,favicon:a.name,logo:d.name,hour_format:"1"===e.using_12_hour_format?"hh:mm a":"HH:mm"};var r;r=s,I(!0),t.A.update(r).then((()=>{_.oR.success(c("successfully.updated")),w((0,y.Uc)())})).finally((()=>I(!1)))},initialValues:{delivery:"1",deliveryman_order_acceptance_time:30,...u.data,max_day_booking:(null===(s=u.data)||void 0===s?void 0:s.max_day_booking)||90},children:[(0,C.jsxs)(m.A,{gutter:12,children:[(0,C.jsx)(v.A,{span:12,children:(0,C.jsx)(h.A.Item,{label:c("title"),name:"title",rules:[{validator:(e,s)=>s?s&&""===(null===s||void 0===s?void 0:s.trim())?Promise.reject(new Error(c("no.empty.space"))):s&&(null===s||void 0===s?void 0:s.trim().length)<2?Promise.reject(new Error(c("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(c("required")))}],children:(0,C.jsx)(p.A,{})})}),(0,C.jsx)(v.A,{span:12,children:(0,C.jsx)(h.A.Item,{label:c("deliveryman.order.acceptance.time"),name:"deliveryman_order_acceptance_time",children:(0,C.jsx)(x.A,{options:f})})}),(0,C.jsx)(v.A,{span:12,children:(0,C.jsx)(h.A.Item,{label:c("service.fee"),name:"service_fee",rules:[{required:!0,message:c("required")}],children:(0,C.jsx)(j.A,{min:0,className:"w-100"})})}),(0,C.jsx)(v.A,{span:12,children:(0,C.jsx)(h.A.Item,{label:c("min.amount"),name:"min_amount",rules:[{required:!0,message:c("required")}],children:(0,C.jsx)(j.A,{min:0,className:"w-100"})})}),(0,C.jsx)(v.A,{span:12,children:(0,C.jsx)(h.A.Item,{label:c("max.day.booking"),name:"max_day_booking",rules:[{required:!0,message:c("required")}],children:(0,C.jsx)(j.A,{min:0,className:"w-100"})})}),(0,C.jsx)(v.A,{span:12,children:(0,C.jsx)(h.A.Item,{label:c("booking.refund.canceled.hour"),name:"booking_refund_canceled_hour",rules:[{required:!0,message:c("required")}],children:(0,C.jsx)(j.A,{min:0,className:"w-100"})})}),(0,C.jsx)(v.A,{span:12,children:(0,C.jsx)(h.A.Item,{label:c("booking.service.fee"),name:"booking_service_fee",rules:[{required:!0,message:c("required")}],children:(0,C.jsx)(j.A,{min:0,className:"w-100"})})}),(0,C.jsx)(v.A,{span:12,children:(0,C.jsx)(h.A.Item,{label:c("booking_canceled_commission"),name:"booking_canceled_commission",rules:[{validator:(e,s)=>s&&(s<0||s>100)?Promise.reject(new Error(c("must.be.between.0.and.100"))):Promise.resolve()},{required:!0,message:c("required")}],children:(0,C.jsx)(j.A,{min:0,className:"w-100",addonAfter:"%"})})}),(0,C.jsx)(v.A,{span:12,children:(0,C.jsx)(h.A.Item,{label:c("time.format"),name:"using_12_hour_format",rules:[{required:!0,message:c("required")}],children:(0,C.jsx)(x.A,{options:[{label:c("24.hour.format"),value:"0"},{label:c("12.hour.format"),value:"1"}]})})}),(0,C.jsx)(v.A,{span:12,children:(0,C.jsxs)(A.A,{children:[(0,C.jsx)(h.A.Item,{label:c("favicon"),name:"favicon",rules:[{required:!0,message:c("required")}],children:(0,C.jsx)(b.A,{type:"languages",image:a,setImage:r,form:P,name:"favicon"})}),(0,C.jsx)(h.A.Item,{label:c("logo"),name:"logo",rules:[{required:!0,message:c("required")}],children:(0,C.jsx)(b.A,{type:"languages",image:d,setImage:l,form:P,name:"logo"})})]})})]}),(0,C.jsx)(g.A,{onClick:()=>P.submit(),type:"primary",disabled:S,loading:N,children:c("save")})]})};var N=r(78498),I=r(28257);const P=e=>{let{location:s,setLocation:r}=e;const{t:a}=(0,i.B)(),[d]=h.A.useForm(),{activeMenu:c}=(0,o.d4)((e=>e.menu),o.bN),u=(0,o.wA)(),[x,j]=(0,n.useState)(!1),{isDemo:A}=(0,k.A)(),[b,f]=(0,n.useState)("");return(0,C.jsx)(h.A,{layout:"vertical",form:d,name:"global-settings",onFinish:e=>{const r={...e,location:"".concat(s.lat,", ").concat(s.lng)};var n;n=r,j(!0),t.A.update(n).then((()=>{_.oR.success(a("successfully.updated")),u((0,y.Uc)())})).finally((()=>j(!1)))},initialValues:{...c.data},children:(0,C.jsxs)(l.A,{children:[(0,C.jsxs)(m.A,{children:[(0,C.jsxs)(v.A,{span:24,children:[(0,C.jsx)(h.A.Item,{label:a("google.map.key"),name:"google_map_key",rules:[{required:!0,message:a("required")}],children:(0,C.jsx)(p.A,{})}),(0,C.jsx)(I.A,{withLanguages:!1,setLocation:r,value:b,setValue:f})]}),(0,C.jsx)(v.A,{span:24,children:(0,C.jsx)(h.A.Item,{label:a("map"),name:"location",style:{borderRadius:"50px"},children:(0,C.jsx)(N.A,{location:s,setLocation:r,setAddress:e=>d.setFieldsValue({address:e})})})})]}),(0,C.jsx)(g.A,{type:"primary",onClick:()=>d.submit(),loading:x,disabled:A,children:a("save")})]})})},S=()=>{const{t:e}=(0,i.B)(),[s]=h.A.useForm(),{activeMenu:r}=(0,o.d4)((e=>e.menu),o.bN),a=(0,o.wA)(),[c,u]=(0,n.useState)(!1);(0,n.useEffect)((()=>()=>{const e=s.getFieldsValue(!0);a((0,d.Ok)({activeMenu:r,data:e}))}),[]);return(0,C.jsx)(h.A,{layout:"vertical",form:s,name:"global-settings",onFinish:s=>{return r=s,u(!0),void t.A.update(r).then((()=>{_.oR.success(e("successfully.updated")),a((0,y.Uc)())})).finally((()=>u(!1)));var r},initialValues:{...r.data},children:(0,C.jsxs)(l.A,{title:e("footer"),children:[(0,C.jsxs)(m.A,{gutter:12,children:[(0,C.jsx)(v.A,{span:12,children:(0,C.jsx)(h.A.Item,{label:e("phone"),name:"phone",rules:[{required:!0,message:e("required")}],children:(0,C.jsx)(p.A,{})})}),(0,C.jsx)(v.A,{span:12,children:(0,C.jsx)(h.A.Item,{label:e("address"),name:"address",rules:[{required:!0,message:e("required")}],children:(0,C.jsx)(p.A,{})})}),(0,C.jsx)(v.A,{span:12,children:(0,C.jsx)(h.A.Item,{label:e("footer.text"),name:"footer_text",rules:[{required:!0,message:e("required")}],children:(0,C.jsx)(p.A,{})})})]}),(0,C.jsx)(g.A,{type:"primary",onClick:()=>s.submit(),loading:c,children:e("save")})]})})};var q=r(25933),V=r(13239),F=r(94118),L=r(37295),R=r(88986);const E=()=>{var e,s;const{t:r}=(0,i.B)(),{isDemo:a}=(0,k.A)(),[c]=h.A.useForm(),{activeMenu:u}=(0,o.d4)((e=>e.menu),o.bN),p=(0,o.wA)(),[x,A]=(0,n.useState)(!1),[g,b]=(0,n.useState)({orderRefreshTimeout:null===(e=u.data)||void 0===e?void 0:e.order_refresh_timeout});function f(e){A(!0),t.A.update(e).then((()=>{_.oR.success(r("successfully.updated")),p((0,d.Ms)(u))})).finally((()=>A(!1)))}const y=(0,L.A)(null===g||void 0===g?void 0:g.orderRefreshTimeout,1e3);return(0,R.A)((()=>{(0===y||y>=30)&&f({order_refresh_timeout:y})}),[y]),(0,C.jsx)(h.A,{layout:"vertical",form:c,name:"global-settings",initialValues:{...u.data,active_parcel:Number(null===(s=u.data)||void 0===s?void 0:s.active_parcel)},children:(0,C.jsx)(l.A,{title:r("permission"),children:(0,C.jsxs)(m.A,{gutter:24,children:[(0,C.jsx)(v.A,{span:24,children:(0,C.jsxs)(m.A,{gutter:24,children:[(0,C.jsxs)(v.A,{span:21,children:[(0,C.jsx)("b",{children:r("system.refund")}),(0,C.jsx)("p",{className:"text-overflow",children:r("You.decide.whether.the.project.has.a.refund.system.or.not")})]}),(0,C.jsx)(v.A,{span:3,className:"mt-3",children:(0,C.jsx)(h.A.Item,{name:"system_refund",valuePropName:"checked",children:(0,C.jsx)(q.A,{checkedChildren:(0,C.jsx)(V.A,{}),unCheckedChildren:(0,C.jsx)(F.A,{}),loading:x,onChange:e=>f({system_refund:e})})})})]})}),(0,C.jsx)(v.A,{span:24,children:(0,C.jsxs)(m.A,{gutter:24,children:[(0,C.jsxs)(v.A,{span:21,children:[(0,C.jsx)("b",{children:r("order.auto.approved")}),(0,C.jsx)("p",{className:"text-overflow",children:r("When.you.create.the.status.of.the.order.you.choose.the.approved.status")})]}),(0,C.jsx)(v.A,{span:3,className:"mt-3",children:(0,C.jsx)(h.A.Item,{name:"order_auto_approved",valuePropName:"checked",children:(0,C.jsx)(q.A,{checkedChildren:(0,C.jsx)(V.A,{}),unCheckedChildren:(0,C.jsx)(F.A,{}),loading:x,onChange:e=>f({order_auto_approved:e})})})})]})}),(0,C.jsx)(v.A,{span:24,children:(0,C.jsxs)(m.A,{gutter:24,children:[(0,C.jsxs)(v.A,{span:21,children:[(0,C.jsx)("b",{children:r("parcel.order.auto.approved")}),(0,C.jsx)("p",{className:"text-overflow",children:r("When.you.create.parcel.order.it.creates.with.status.approved")})]}),(0,C.jsx)(v.A,{span:3,className:"mt-3",children:(0,C.jsx)(h.A.Item,{name:"parcel_order_auto_approved",valuePropName:"checked",children:(0,C.jsx)(q.A,{checkedChildren:(0,C.jsx)(V.A,{}),unCheckedChildren:(0,C.jsx)(F.A,{}),loading:x,onChange:e=>f({parcel_order_auto_approved:e})})})})]})}),(0,C.jsx)(v.A,{span:24,children:(0,C.jsxs)(m.A,{gutter:24,children:[(0,C.jsxs)(v.A,{span:21,children:[(0,C.jsx)("b",{children:r("move.next.bookings")}),(0,C.jsx)("p",{className:"text-overflow",children:r("you.choose.whether.to.move.on.to.the.next.one.if.you.have.multiple.bookings.at.the.same.time")})]}),(0,C.jsx)(v.A,{span:3,className:"mt-3",children:(0,C.jsx)(h.A.Item,{name:"can_move_the_reservation_time",valuePropName:"checked",children:(0,C.jsx)(q.A,{checkedChildren:(0,C.jsx)(V.A,{}),unCheckedChildren:(0,C.jsx)(F.A,{}),loading:x,onChange:e=>f({can_move_the_reservation_time:e})})})})]})}),(0,C.jsx)(v.A,{span:24,children:(0,C.jsxs)(m.A,{gutter:24,children:[(0,C.jsxs)(v.A,{span:21,children:[(0,C.jsx)("b",{children:r("refund.delete")}),(0,C.jsx)("p",{className:"text-overflow",children:r("You.decide.whether.to.show.the.refund.system.disable.button")})]}),(0,C.jsx)(v.A,{span:3,className:"mt-3",children:(0,C.jsx)(h.A.Item,{name:"refund_delete",valuePropName:"checked",children:(0,C.jsx)(q.A,{checkedChildren:(0,C.jsx)(V.A,{}),unCheckedChildren:(0,C.jsx)(F.A,{}),loading:x,onChange:e=>f({refund_delete:e})})})})]})}),(0,C.jsx)(v.A,{span:24,children:(0,C.jsxs)(m.A,{gutter:24,children:[(0,C.jsxs)(v.A,{span:21,children:[(0,C.jsx)("b",{children:r("order.auto.deliveryMan")}),(0,C.jsx)("p",{className:"text-overflow",children:r("You.choose.the.deliveryman.yourself.when.you.create.the.order")})]}),(0,C.jsx)(v.A,{span:3,className:"mt-3",children:(0,C.jsx)(h.A.Item,{name:"order_auto_delivery_man",valuePropName:"checked",children:(0,C.jsx)(q.A,{checkedChildren:(0,C.jsx)(V.A,{}),unCheckedChildren:(0,C.jsx)(F.A,{}),loading:x,onChange:e=>f({order_auto_delivery_man:e})})})})]})}),(0,C.jsx)(v.A,{span:24,children:(0,C.jsxs)(m.A,{gutter:24,children:[(0,C.jsxs)(v.A,{span:21,children:[(0,C.jsx)("b",{children:r("blog.active")}),(0,C.jsx)("p",{className:"text-overflow",children:r("Automatically.activate.blogs")})]}),(0,C.jsx)(v.A,{span:3,className:"mt-3",children:(0,C.jsx)(h.A.Item,{name:"blog_active",valuePropName:"checked",children:(0,C.jsx)(q.A,{checkedChildren:(0,C.jsx)(V.A,{}),unCheckedChildren:(0,C.jsx)(F.A,{}),loading:x,onChange:e=>f({blog_active:e})})})})]})}),(0,C.jsx)(v.A,{span:24,children:(0,C.jsxs)(m.A,{gutter:24,children:[(0,C.jsxs)(v.A,{span:21,children:[(0,C.jsx)("b",{children:r("prompt.email.modal")}),(0,C.jsx)("p",{className:"text-overflow",children:r("Send.sms.to.email.subscribers")})]}),(0,C.jsx)(v.A,{span:3,className:"mt-3",children:(0,C.jsx)(h.A.Item,{name:"prompt_email_modal",valuePropName:"checked",children:(0,C.jsx)(q.A,{checkedChildren:(0,C.jsx)(V.A,{}),unCheckedChildren:(0,C.jsx)(F.A,{}),loading:x,onChange:e=>f({prompt_email_modal:e})})})})]})}),(0,C.jsx)(v.A,{span:24,children:(0,C.jsxs)(m.A,{gutter:24,children:[(0,C.jsxs)(v.A,{span:21,children:[(0,C.jsx)("b",{children:r("referral.active")}),(0,C.jsx)("p",{className:"text-overflow",children:r("You.choose.whether.the.referral.will.work.or.not")})]}),(0,C.jsx)(v.A,{span:3,className:"mt-3",children:(0,C.jsx)(h.A.Item,{name:"referral_active",valuePropName:"checked",children:(0,C.jsx)(q.A,{checkedChildren:(0,C.jsx)(V.A,{}),unCheckedChildren:(0,C.jsx)(F.A,{}),loading:x,onChange:e=>f({referral_active:e})})})})]})}),(0,C.jsx)(v.A,{span:24,children:(0,C.jsxs)(m.A,{gutter:24,children:[(0,C.jsxs)(v.A,{span:21,children:[(0,C.jsx)("b",{children:r("aws.active")}),(0,C.jsx)("p",{className:"text-overflow",children:r("You.choose.whether.the.aws.will.work.or.not")})]}),(0,C.jsx)(v.A,{span:3,className:"mt-3",children:(0,C.jsx)(h.A.Item,{name:"aws",valuePropName:"checked",children:(0,C.jsx)(q.A,{checkedChildren:(0,C.jsx)(V.A,{}),unCheckedChildren:(0,C.jsx)(F.A,{}),loading:x,disabled:a,onChange:e=>f({aws:e})})})})]})}),(0,C.jsx)(v.A,{span:24,children:(0,C.jsxs)(m.A,{gutter:24,children:[(0,C.jsxs)(v.A,{span:21,children:[(0,C.jsx)("b",{children:r("by.subscription")}),(0,C.jsx)("p",{className:"text-overflow",children:r("You.choose.whether.the.by.subscription.will.work.or.not")})]}),(0,C.jsx)(v.A,{span:3,className:"mt-3",children:(0,C.jsx)(h.A.Item,{name:"by_subscription",valuePropName:"checked",children:(0,C.jsx)(q.A,{checkedChildren:(0,C.jsx)(V.A,{}),unCheckedChildren:(0,C.jsx)(F.A,{}),loading:x,disabled:a,onChange:e=>f({by_subscription:e})})})})]})}),(0,C.jsx)(v.A,{span:24,children:(0,C.jsxs)(m.A,{gutter:24,children:[(0,C.jsxs)(v.A,{span:21,children:[(0,C.jsx)("b",{children:r("group.order")}),(0,C.jsx)("p",{className:"text-overflow",children:r("You.choose.whether.enable.group.order.or.not")})]}),(0,C.jsx)(v.A,{span:3,className:"mt-3",children:(0,C.jsx)(h.A.Item,{name:"group_order",valuePropName:"checked",children:(0,C.jsx)(q.A,{checkedChildren:(0,C.jsx)(V.A,{}),unCheckedChildren:(0,C.jsx)(F.A,{}),loading:x,disabled:a,onChange:e=>f({group_order:e})})})})]})}),(0,C.jsx)(v.A,{span:24,children:(0,C.jsxs)(m.A,{gutter:24,children:[(0,C.jsxs)(v.A,{span:21,children:[(0,C.jsx)("b",{children:r("is_demo")}),(0,C.jsx)("p",{className:"text-overflow",children:r("You.choose.whether.enable.is.demo.or.not")})]}),(0,C.jsx)(v.A,{span:3,className:"mt-3",children:(0,C.jsx)(h.A.Item,{name:"is_demo",valuePropName:"checked",children:(0,C.jsx)(q.A,{checkedChildren:(0,C.jsx)(V.A,{}),unCheckedChildren:(0,C.jsx)(F.A,{}),loading:x,onChange:e=>f({is_demo:e})})})})]})}),(0,C.jsx)(v.A,{span:24,children:(0,C.jsxs)(m.A,{gutter:24,children:[(0,C.jsxs)(v.A,{span:21,children:[(0,C.jsx)("b",{children:r("activate.parcel.mode")}),(0,C.jsx)("p",{className:"text-overflow",children:r("You.choose.whether.enable.parcel.or.not")})]}),(0,C.jsx)(v.A,{span:3,className:"mt-3",children:(0,C.jsx)(h.A.Item,{name:"active_parcel",valuePropName:"checked",children:(0,C.jsx)(q.A,{checkedChildren:(0,C.jsx)(V.A,{}),unCheckedChildren:(0,C.jsx)(F.A,{}),loading:x,onChange:e=>{f({active_parcel:e})}})})})]})}),(0,C.jsx)(v.A,{span:24,children:(0,C.jsxs)(m.A,{gutter:24,children:[(0,C.jsxs)(v.A,{span:21,children:[(0,C.jsx)("b",{children:r("auto.approve.products")}),(0,C.jsx)("p",{className:"text-overflow",children:r("You.choose.whether.auto.approve.products.or.not")})]}),(0,C.jsx)(v.A,{span:3,className:"mt-3",children:(0,C.jsx)(h.A.Item,{name:"product_auto_approve",valuePropName:"checked",children:(0,C.jsx)(q.A,{checkedChildren:(0,C.jsx)(V.A,{}),unCheckedChildren:(0,C.jsx)(F.A,{}),loading:x,onChange:e=>{f({product_auto_approve:e})}})})})]})}),(0,C.jsx)(v.A,{span:24,children:(0,C.jsxs)(m.A,{gutter:24,children:[(0,C.jsxs)(v.A,{span:21,children:[(0,C.jsx)("b",{children:r("auto.approve.categories")}),(0,C.jsx)("p",{className:"text-overflow",children:r("You.choose.whether.auto.approve.categories.or.not")})]}),(0,C.jsx)(v.A,{span:3,className:"mt-3",children:(0,C.jsx)(h.A.Item,{name:"category_auto_approve",valuePropName:"checked",children:(0,C.jsx)(q.A,{checkedChildren:(0,C.jsx)(V.A,{}),unCheckedChildren:(0,C.jsx)(F.A,{}),loading:x,onChange:e=>{f({category_auto_approve:e})}})})})]})}),(0,C.jsx)(v.A,{span:24,children:(0,C.jsxs)(m.A,{gutter:24,children:[(0,C.jsxs)(v.A,{span:21,children:[(0,C.jsx)("b",{children:r("require.phone.for.create.order")}),(0,C.jsx)("p",{className:"text-overflow",children:r("You.choose.whether.require.phone.number.or.not.for.create.order")})]}),(0,C.jsx)(v.A,{span:3,className:"mt-3",children:(0,C.jsx)(h.A.Item,{name:"before_order_phone_required",valuePropName:"checked",children:(0,C.jsx)(q.A,{checkedChildren:(0,C.jsx)(V.A,{}),unCheckedChildren:(0,C.jsx)(F.A,{}),loading:x,onChange:e=>{f({before_order_phone_required:e})}})})})]})}),(0,C.jsx)(v.A,{span:24,children:(0,C.jsxs)(m.A,{gutter:24,children:[(0,C.jsxs)(v.A,{span:21,children:[(0,C.jsx)("b",{children:r("products.enabled")}),(0,C.jsx)("p",{className:"text-overflow",children:r("You.choose.whether.enable.or.disable.products")})]}),(0,C.jsx)(v.A,{span:3,className:"mt-3",children:(0,C.jsx)(h.A.Item,{name:"products_enabled",valuePropName:"checked",children:(0,C.jsx)(q.A,{checkedChildren:(0,C.jsx)(V.A,{}),unCheckedChildren:(0,C.jsx)(F.A,{}),loading:x,onChange:e=>{f({products_enabled:e})}})})})]})}),(0,C.jsx)(v.A,{span:24,children:(0,C.jsxs)(m.A,{gutter:24,children:[(0,C.jsxs)(v.A,{span:21,children:[(0,C.jsx)("b",{children:r("shop.reviews.enabled")}),(0,C.jsx)("p",{className:"text-overflow",children:r("You.choose.whether.enable.or.disable.reviews")})]}),(0,C.jsx)(v.A,{span:3,className:"mt-3",children:(0,C.jsx)(h.A.Item,{name:"shop_reviews_enabled",valuePropName:"checked",children:(0,C.jsx)(q.A,{checkedChildren:(0,C.jsx)(V.A,{}),unCheckedChildren:(0,C.jsx)(F.A,{}),loading:x,onChange:e=>{f({shop_reviews_enabled:e})}})})})]})}),(0,C.jsx)(v.A,{span:24,children:(0,C.jsxs)(m.A,{gutter:24,children:[(0,C.jsxs)(v.A,{span:21,children:[(0,C.jsx)("b",{children:r("product.reviews.enabled")}),(0,C.jsx)("p",{className:"text-overflow",children:r("You.choose.whether.enable.or.disable.reviews")})]}),(0,C.jsx)(v.A,{span:3,className:"mt-3",children:(0,C.jsx)(h.A.Item,{name:"product_reviews_enabled",valuePropName:"checked",children:(0,C.jsx)(q.A,{checkedChildren:(0,C.jsx)(V.A,{}),unCheckedChildren:(0,C.jsx)(F.A,{}),loading:x,onChange:e=>{f({product_reviews_enabled:e})}})})})]})}),(0,C.jsx)(v.A,{span:24,children:(0,C.jsxs)(m.A,{gutter:24,children:[(0,C.jsxs)(v.A,{span:21,children:[(0,C.jsx)("b",{children:r("enable.auto.refresh.order")}),(0,C.jsx)("p",{children:r("you.can.enable.or.disable.auto.refresh.order")})]}),(0,C.jsx)(v.A,{span:3,className:"mt-3",children:(0,C.jsx)(h.A.Item,{name:"enable_order_refresh_timeout",valuePropName:"checked",children:(0,C.jsx)(q.A,{checkedChildren:(0,C.jsx)(V.A,{}),unCheckedChildren:(0,C.jsx)(F.A,{}),loading:x,onChange:e=>{b((s=>({...s,orderRefreshTimeout:e?30:0})))}})})})]})}),Number(u.data.order_refresh_timeout)>0&&(0,C.jsx)(v.A,{span:24,children:(0,C.jsxs)(m.A,{gutter:24,children:[(0,C.jsxs)(v.A,{span:17,children:[(0,C.jsx)("b",{children:r("order.refresh.timeout")}),(0,C.jsxs)("p",{children:[r("duration.of.order.refresh.timeout")," ",r("min.val.30")]})]}),(0,C.jsx)(v.A,{span:6,className:"mt-3",children:(0,C.jsx)(h.A.Item,{rules:[{type:"number",min:30,message:r("minimum.is.30")}],name:"order_refresh_timeout",style:{justifyContent:"end"},children:(0,C.jsx)(j.A,{min:30,className:"w-100",onChange:e=>b((s=>({...s,orderRefreshTimeout:e}))),placeholder:r("order.refresh.timeout"),disabled:x})})})]})})]})})})},O=e=>{let{loading:s}=e;const{t:r}=(0,i.B)(),[a]=h.A.useForm(),{activeMenu:d}=(0,o.d4)((e=>e.menu),o.bN),c=(0,o.wA)(),[u,p]=(0,n.useState)(!1);return(0,C.jsx)(h.A,{layout:"vertical",form:a,name:"global-settings",onFinish:e=>{return s=e,p(!0),void t.A.update(s).then((()=>{_.oR.success(r("successfully.updated")),c((0,y.Uc)())})).finally((()=>p(!1)));var s},initialValues:{...d.data},children:(0,C.jsxs)(l.A,{title:r("auth.settings"),children:[(0,C.jsx)(m.A,{gutter:12,children:(0,C.jsx)(v.A,{span:12,children:(0,C.jsx)(h.A.Item,{label:r("otp.expire.time")+" "+"( ".concat(r("minut")," )"),name:"otp_expire_time",rules:[{required:!0,message:r("required")}],children:(0,C.jsx)(j.A,{addonAfter:r("minut"),className:"w-100",min:0})})})}),(0,C.jsx)(g.A,{type:"primary",onClick:()=>a.submit(),loading:u,children:r("save")})]})})};var M=r(82706),T=r(74930),Y=r(63620);function B(e){let{title:s,checked:r,imgPath:n,onClick:a}=e;const{t:l}=(0,i.B)();return(0,C.jsxs)("div",{className:r?"radio-card radio-checked":"radio-card",children:[(0,C.jsx)("div",{className:"view",children:(0,C.jsx)("a",{href:Y.CY,target:"_blank",rel:"noreferrer",children:(0,C.jsx)(T.HaR,{size:40})})}),!r&&(0,C.jsx)(g.A,{className:"change-button",onClick:a,children:l("change")}),(0,C.jsx)("div",{className:"header",children:s}),(0,C.jsx)("img",{src:n,alt:"regular focus"})]})}var z=r(53557);const{confirm:U}=M.A,D=[{title:"View 1",value:1,img:"/img/ui-type1.png"},{title:"View 2",value:2,img:"/img/ui-type2.png"},{title:"View 3",value:3,img:"/img/ui-type3.png"},{title:"View 4",value:4,img:"/img/ui-type4.png"}],K=[{title:"View 1",value:1,img:"/img/product-ui-1.png"},{title:"View 2",value:2,img:"/img/product-ui-2.png"}],H=[{title:"View 1",value:1,img:"/img/cart-ui-1.png"},{title:"View 2",value:2,img:"/img/cart-ui-2.png"}],W=()=>{var e,s,r;const{t:a}=(0,i.B)(),[c]=h.A.useForm(),{activeMenu:u}=(0,o.d4)((e=>e.menu),o.bN),p=(0,o.wA)(),[x,j]=(0,n.useState)((null===(e=u.data)||void 0===e?void 0:e.ui_type)||D[0].value),[A,g]=(0,n.useState)((null===(s=u.data)||void 0===s?void 0:s.product_ui_type)||K[0].value),[b,f]=(0,n.useState)((null===(r=u.data)||void 0===r?void 0:r.cart_ui_type)||H[0].value);function k(e){t.A.update(e).then((()=>{_.oR.success(a("successfully.updated")),p((0,y.Uc)())}))}return(0,n.useEffect)((()=>()=>{const e=c.getFieldsValue(!0);p((0,d.Ok)({activeMenu:u,data:e}))}),[]),(0,C.jsxs)(h.A,{layout:"vertical",form:c,name:"global-settings",initialValues:{ui_type:Number(x)},children:[(0,C.jsx)(l.A,{title:a("cart.ui"),children:(0,C.jsx)(m.A,{gutter:12,children:H.map((e=>(0,C.jsx)(v.A,{span:12,children:(0,C.jsx)(B,{title:e.title,onClick:()=>(e=>{U({title:a("do_you_want_to_change_cart_ui_type"),centered:!0,icon:(0,C.jsx)(z.A,{}),onOk(){f(e),k({cart_ui_type:e})}})})(e.value),checked:Number(b)===e.value,imgPath:e.img})},e.value)))})}),(0,C.jsx)(l.A,{title:a("product.ui"),children:(0,C.jsx)(m.A,{gutter:12,children:K.map((e=>(0,C.jsx)(v.A,{span:12,children:(0,C.jsx)(B,{title:e.title,onClick:()=>(e=>{U({title:a("do_you_want_to_change_product_ui_type"),centered:!0,icon:(0,C.jsx)(z.A,{}),onOk(){g(e),k({product_ui_type:e})}})})(e.value),checked:Number(A)===e.value,imgPath:e.img})},e.value)))})}),(0,C.jsx)(l.A,{title:a("ui"),children:(0,C.jsx)(m.A,{gutter:12,children:D.map((e=>(0,C.jsx)(v.A,{span:12,children:(0,C.jsx)(B,{title:e.title,onClick:()=>(e=>{U({title:a("do_you_want_to_change_ui_type"),centered:!0,icon:(0,C.jsx)(z.A,{}),onOk(){j(e),k({ui_type:e})}})})(e.value),checked:Number(x)===e.value,imgPath:e.img})},e.value)))})})]})};var G=r(48970);const J=()=>{var e,s,r;const{t:a}=(0,i.B)(),d=(0,o.wA)(),[u]=h.A.useForm(),{settings:p}=(0,o.d4)((e=>e.globalSettings),o.bN),[x,j]=(0,n.useState)(!1),[A,b]=(0,n.useState)({first:[],second:[],third:[]});return(0,n.useEffect)((()=>{null!==p&&void 0!==p&&p.driver_story_image_1&&b((e=>({...e,first:[(0,c.A)(null===p||void 0===p?void 0:p.driver_story_image_1)]}))),null!==p&&void 0!==p&&p.driver_story_image_2&&b((e=>({...e,second:[(0,c.A)(null===p||void 0===p?void 0:p.driver_story_image_2)]}))),null!==p&&void 0!==p&&p.driver_story_image_3&&b((e=>({...e,third:[(0,c.A)(null===p||void 0===p?void 0:p.driver_story_image_3)]})))}),[p]),(0,C.jsxs)(l.A,{children:[(0,C.jsx)("h1",{style:{fontSize:"24px"},children:a("deliveryman.story.images")}),(0,C.jsx)("p",{style:{fontSize:"16px",marginBottom:"50px"},children:a("deliveryman.story.images.recommended.size")}),(0,C.jsxs)(h.A,{form:u,layout:"vertical",onFinish:()=>{var e,s,r,n,l,i;j(!0);const o={driver_story_image_1:null===(e=A.first)||void 0===e||null===(s=e[0])||void 0===s?void 0:s.name,driver_story_image_2:null===(r=A.second)||void 0===r||null===(n=r[0])||void 0===n?void 0:n.name,driver_story_image_3:null===(l=A.third)||void 0===l||null===(i=l[0])||void 0===i?void 0:i.name};t.A.update(o).then((()=>{_.oR.success(a("successfully.updated")),d((0,y.Uc)())})).finally((()=>{j(!1)}))},children:[(0,C.jsxs)(m.A,{gutter:12,children:[(0,C.jsx)(v.A,{span:8,children:(0,C.jsx)(h.A.Item,{name:"driver_story_image_1",label:a("deliveryman.story.1"),rules:[{required:!(null!==(e=A.first)&&void 0!==e&&e.length),message:a("required")}],children:(0,C.jsx)(G.A,{form:u,type:"deliveryman",name:"driver_story_image_1",imageList:A.first,setImageList:e=>{b((s=>({...s,first:e})))},multiple:!1})})}),(0,C.jsx)(v.A,{span:8,children:(0,C.jsx)(h.A.Item,{name:"driver_story_image_2",label:a("deliveryman.story.2"),rules:[{required:!(null!==(s=A.second)&&void 0!==s&&s.length),message:a("required")}],children:(0,C.jsx)(G.A,{form:u,type:"deliveryman",name:"driver_story_image_2",imageList:A.second,setImageList:e=>{b((s=>({...s,second:e})))},multiple:!1})})}),(0,C.jsx)(v.A,{span:8,children:(0,C.jsx)(h.A.Item,{name:"driver_story_image_3",label:a("deliveryman.story.3"),rules:[{required:!(null!==(r=A.third)&&void 0!==r&&r.length),message:a("required")}],children:(0,C.jsx)(G.A,{form:u,name:"driver_story_image_3",type:"deliveryman",imageList:A.third,setImageList:e=>{b((s=>({...s,third:e})))},multiple:!1})})})]}),(0,C.jsx)(g.A,{type:"primary",htmlType:"submit",style:{marginTop:"50px"},loading:x,children:a("submit")})]})]})};var Z=r(47992),Q=r(15923),X=r(91474);const $=()=>{var e;const{t:s}=(0,i.B)(),r=(0,o.wA)(),[a]=h.A.useForm(),{activeMenu:d}=(0,o.d4)((e=>e.menu),o.bN),[c,u]=(0,n.useState)((null===(e=d.data)||void 0===e?void 0:e.country)||null),[p,x]=(0,n.useState)(!1);return(0,C.jsx)(l.A,{children:(0,C.jsxs)(h.A,{form:a,layout:"vertical",onFinish:e=>{var n,a,l,i,o,d,c;const u={default_region_id:null===e||void 0===e||null===(n=e.country)||void 0===n||null===(a=n.key)||void 0===a||null===(l=a.split(","))||void 0===l?void 0:l[1],default_country_id:null===e||void 0===e||null===(i=e.country)||void 0===i?void 0:i.value,default_country_title:null===e||void 0===e||null===(o=e.country)||void 0===o?void 0:o.label,default_city_id:null===e||void 0===e||null===(d=e.city)||void 0===d?void 0:d.value,default_city_title:null===e||void 0===e||null===(c=e.city)||void 0===c?void 0:c.label};x(!0),t.A.update(u).then((()=>{_.oR.success(s("successfully.updated")),r((0,y.Uc)())})).finally((()=>x(!1)))},initialValues:{...d.data},children:[(0,C.jsxs)(m.A,{gutter:12,children:[(0,C.jsx)(v.A,{span:24,children:(0,C.jsx)(h.A.Item,{name:"country",label:s("country"),rules:[{required:!0,message:s("required")}],children:(0,C.jsx)(Z.G,{fetchOptions:async e=>{const s={perPage:20,page:1,search:null!==e&&void 0!==e&&e.length?e:void 0,has_price:1};return Q.A.get(s).then((e=>{var s;return null===e||void 0===e||null===(s=e.data)||void 0===s?void 0:s.map((e=>{var s;return{label:null===e||void 0===e||null===(s=e.translation)||void 0===s?void 0:s.title,value:null===e||void 0===e?void 0:e.id,key:"".concat(null===e||void 0===e?void 0:e.id,",").concat(null===e||void 0===e?void 0:e.region_id)}}))}))},labelInValue:!0,allowClear:!1,onSelect:e=>{u(e),a.setFieldsValue({city:null})}})})}),(0,C.jsx)(v.A,{span:24,children:(0,C.jsx)(h.A.Item,{name:"city",label:s("city"),children:(0,C.jsx)(Z.G,{fetchOptions:async e=>{const s={perPage:20,page:1,search:null!==e&&void 0!==e&&e.length?e:void 0,country_id:null===c||void 0===c?void 0:c.value,has_price:1};return X.A.get(s).then((e=>{return null===(s=null===e||void 0===e?void 0:e.data)||void 0===s?void 0:s.map((e=>{var s;return{label:null===e||void 0===e||null===(s=e.translation)||void 0===s?void 0:s.title,value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id}}));var s}))},labelInValue:!0,allowClear:!1,disabled:!(null!==c&&void 0!==c&&c.value),refetchOptions:!0})})})]}),(0,C.jsx)(g.A,{type:"primary",onClick:()=>a.submit(),loading:p,children:s("save")})]})})},{TabPane:ee}=a.A,se={lat:47.4143302506288,lng:8.532059477976883};function re(){var e,s,r;const{t:h}=(0,i.B)(),[m,v]=(0,n.useState)("settings"),[p,x]=(0,n.useState)(!1),{activeMenu:j}=(0,o.d4)((e=>e.menu),o.bN),A=(0,o.wA)(),[g,_]=(0,n.useState)((null===(e=j.data)||void 0===e?void 0:e.logo)||null),[b,f]=(0,n.useState)((null===(s=j.data)||void 0===s?void 0:s.favicon)||null),[k,N]=(0,n.useState)((null===(r=j.data)||void 0===r?void 0:r.location)||se);function I(){x(!0),t.A.get().then((e=>{var s;const r=(e=>{const s=e.map((e=>({[e.key]:e.value})));return Object.assign({},...s)})(null===e||void 0===e?void 0:e.data);A((0,y.Sj)(r));const n=null===r||void 0===r||null===(s=r.location)||void 0===s?void 0:s.split(",");r.order_auto_delivery_man="1"===r.order_auto_delivery_man,r.order_auto_approved="1"===r.order_auto_approved,r.parcel_order_auto_approved="1"===r.parcel_order_auto_approved,r.can_move_the_reservation_time="1"===r.can_move_the_reservation_time,r.system_refund="1"===r.system_refund,r.refund_delete="1"===r.refund_delete,r.prompt_email_modal="1"===r.prompt_email_modal,r.blog_active="1"===r.blog_active,r.referral_active="1"===r.referral_active,r.aws="1"===r.aws,r.group_order="1"===r.group_order,r.by_subscription="1"===r.by_subscription,r.reservation_enable_for_user="1"===r.reservation_enable_for_user,r.is_demo="1"===r.is_demo,r.product_auto_approve="1"===(null===r||void 0===r?void 0:r.product_auto_approve),r.category_auto_approve="1"===(null===r||void 0===r?void 0:r.category_auto_approve),r.before_order_phone_required="1"===(null===r||void 0===r?void 0:r.before_order_phone_required),r.shop_reviews_enabled="1"===(null===r||void 0===r?void 0:r.shop_reviews_enabled),r.product_reviews_enabled="1"===(null===r||void 0===r?void 0:r.product_reviews_enabled),r.enable_order_refresh_timeout=Number(null===r||void 0===r?void 0:r.order_refresh_timeout)>0,r.products_enabled="1"===(null===r||void 0===r?void 0:r.products_enabled),r.location={lat:Number(null===n||void 0===n?void 0:n[0]),lng:Number(null===n||void 0===n?void 0:n[1])},N(r.location),r.logo=(0,c.A)(r.logo),r.favicon=(0,c.A)(r.favicon),r.country={label:null===r||void 0===r?void 0:r.default_country_title,value:null===r||void 0===r?void 0:r.default_country_id,key:"".concat(null===r||void 0===r?void 0:r.default_country_id,",").concat(null===r||void 0===r?void 0:r.default_region_id)},r.city={label:null===r||void 0===r?void 0:r.default_city_title,value:null===r||void 0===r?void 0:r.default_city_id,key:null===r||void 0===r?void 0:r.default_city_id},_(r.logo),f(r.favicon),A((0,d.Ok)({activeMenu:j,data:r}))})).finally((()=>{x(!1),A((0,d.km)(j))}))}return(0,n.useEffect)((()=>{j.refetch&&I()}),[j.refetch]),(0,C.jsx)(l.A,{title:h("project.settings"),children:p?(0,C.jsx)(u.A,{}):(0,C.jsxs)(a.A,{activeKey:m,onChange:e=>v(e),tabPosition:"left",size:"small",children:[(0,C.jsx)(ee,{tab:h("settings"),children:(0,C.jsx)(w,{logo:g,setLogo:_,favicon:b,setFavicon:f})},"settings"),(0,C.jsx)(ee,{tab:h("location"),children:(0,C.jsx)(P,{location:k,setLocation:N})},"location"),(0,C.jsx)(ee,{tab:h("default.country"),children:(0,C.jsx)($,{})},"default-country"),(0,C.jsx)(ee,{tab:h("permission"),children:(0,C.jsx)(E,{})},"permission"),(0,C.jsx)(ee,{tab:h("ui.type"),children:(0,C.jsx)(W,{})},"ui_type"),(0,C.jsx)(ee,{tab:h("deliveryman"),children:(0,C.jsx)(J,{})},"deliveryman"),(0,C.jsx)(ee,{tab:h("auth.settings"),children:(0,C.jsx)(O,{})},"auth"),(0,C.jsx)(ee,{tab:h("footer"),children:(0,C.jsx)(S,{})},"footer")]})})}}}]);