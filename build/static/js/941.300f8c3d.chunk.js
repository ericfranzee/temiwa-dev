"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[941],{78498:(e,l,r)=>{r.d(l,{A:()=>g});var a=r(9950),n=r(97239);const i=r.p+"static/media/pin.0e41858db80c699cd8a2.png";var o=r(96011),t=r.n(o),s=r(63620);async function d(e){let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.CJ,r={latlng:"".concat(null===e||void 0===e?void 0:e.lat,",").concat(null===e||void 0===e?void 0:e.lng),key:l};return t().get("https://maps.googleapis.com/maps/api/geocode/json",{params:r}).then((e=>{var l;let{data:r}=e;return null===(l=r.results[0])||void 0===l?void 0:l.formatted_address})).catch((e=>"not found"))}var u=r(39174),c=r(85923),m=r(70030),v=r(6566),h=r(44414);const p=(0,v.A)();const g=(0,n.GoogleApiWrapper)({apiKey:p,libraries:["places","geometry"]})((function(e){var l,r;const[o,t]=(0,a.useState)(),{t:s}=(0,m.B)(),v=async()=>{await navigator.geolocation.getCurrentPosition((function(e){const l={lat:e.coords.latitude,lng:e.coords.longitude};t(l)}),(function(e){c.oR.warning(s("turn.on.gps"))}))};(0,a.useEffect)((()=>{v()}),[]);const g=[{lat:Number(null===e||void 0===e||null===(l=e.location)||void 0===l?void 0:l.lat)||0,lng:Number(null===e||void 0===e||null===(r=e.location)||void 0===r?void 0:r.lng)||0}];for(var j=new e.google.maps.LatLngBounds,x=0;x<g.length;x++)j.extend(g[x]);return(0,h.jsxs)("div",{className:"map-container",style:{height:400,width:"100%"},children:[(0,h.jsx)("button",{className:"map-button",type:"button",onClick:()=>{v(),o&&(async l=>{const r={lat:null===l||void 0===l?void 0:l.lat,lng:null===l||void 0===l?void 0:l.lng};e.setLocation(r);const a=await d(r,p);e.setAddress(a)})(o)},children:(0,h.jsx)(u.uFi,{})}),(0,h.jsx)(n.Map,{cursor:"pointer",onClick:async(l,r,a)=>{const{latLng:n}=a,i={lat:n.lat(),lng:n.lng()};e.setLocation(i);const o=await d(i,p);e.setAddress(o)},google:e.google,defaultZoom:12,zoom:10,className:"clickable",initialCenter:e.location,center:e.location,children:(0,h.jsx)(n.Marker,{position:e.location,icon:{url:i,scaledSize:new e.google.maps.Size(32,32)},className:"marker"})})]})}))},79406:(e,l,r)=>{r.d(l,{a:()=>d});var a=r(9950),n=r(95491),i=r.n(n),o=r(99674),t=r(90650),s=r(44414);const d=e=>{let{fetchOptions:l,debounceTimeout:r=400,refetch:n=!1,...d}=e;const[u,c]=(0,a.useState)(!1),[m,v]=(0,a.useState)([]),h=(0,a.useMemo)((()=>i()((e=>{v([]),c(!0),l(e).then((e=>{v(e),c(!1)}))}),r)),[l,r]);return(0,s.jsx)(o.A,{showSearch:!0,allowClear:!0,labelInValue:!0,onClear:()=>h(""),filterOption:!1,onSearch:h,notFoundContent:u?(0,s.jsx)(t.A,{size:"small"}):"no results",...d,options:m,onFocus:()=>{m.length&&!n||h("")}})}},47992:(e,l,r)=>{r.d(l,{G:()=>d});var a=r(9950),n=r(95491),i=r.n(n),o=r(99674),t=r(90650),s=r(44414);const d=e=>{let{fetchOptions:l,debounceTimeout:r=400,onClear:n,refetchOptions:d=!1,...u}=e;const[c,m]=(0,a.useState)(!1),[v,h]=(0,a.useState)([]),p=(0,a.useMemo)((()=>i()((e=>{h([]),m(!0),l(e).then((e=>{h(e),m(!1)}))}),r)),[l,r]);return(0,s.jsx)(o.A,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:p,onClear:()=>{p(""),n&&n()},notFoundContent:c?(0,s.jsx)(t.A,{size:"small"}):"no results",...u,options:v,onFocus:()=>{v.length&&!d||p("")}})}},29597:(e,l,r)=>{function a(e){var l;if(null===e||void 0===e||!e.location)return{lat:47.4143302506288,lng:8.532059477976883};const r=null===e||void 0===e||null===(l=e.location)||void 0===l?void 0:l.split(", ");return{lat:Number(null===r||void 0===r?void 0:r[0]),lng:Number(null===r||void 0===r?void 0:r[1])}}r.d(l,{A:()=>a})},6566:(e,l,r)=>{r.d(l,{A:()=>n});var a=r(17706);const n=()=>{var e,l;const r={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IS_DEMO:"false"}.MAP_API_KEY,{google_map_key:n}=null===(e=a.M.getState())||void 0===e||null===(l=e.globalSettings)||void 0===l?void 0:l.settings;return n||r}},16166:(e,l,r)=>{r.r(l),r.d(l,{default:()=>K});var a=r(9950),n=r(59233),i=r(23263),o=r(87094),t=r(41988),s=r(55902),d=r(40577),u=r(86971),c=r(99674),m=r(40895),v=r(48538),h=r(28429),p=r(85923),g=r(91854),j=r(74623),x=r(53271),A=r(70030),b=r(59051),y=r.n(b),f=r(48970),w=r(47992),_=r(58547),q=r(39539),P=r(64272),S=r(29597),k=r(25933),I=r(78498),E=r(44414);const C=[{label:"Benzine",value:"benzine"},{label:"Diesel",value:"diesel"},{label:"Gas",value:"gas"},{label:"Motorbike",value:"motorbike"},{label:"Bike",value:"bike"},{label:"Foot",value:"foot"},{label:"Electric",value:"electric"}],N=e=>{let{location:l,setLocation:r,form:a,image:i,setImage:d}=e;const{t:u}=(0,A.B)();return(0,E.jsxs)(o.A,{gutter:12,children:[(0,E.jsx)(t.A,{span:12,children:(0,E.jsx)(n.A.Item,{label:u("brand"),name:"brand",rules:[{required:!0,message:u("required")},{validator(e,l){var r;return l&&(null===l||void 0===l||null===(r=l.trim())||void 0===r?void 0:r.length)<2?Promise.reject(new Error(u("must.be.at.least.2"))):Promise.resolve()}}],children:(0,E.jsx)(s.A,{placeholder:u("type.here"),maxLength:20})})}),(0,E.jsx)(t.A,{span:12,children:(0,E.jsx)(n.A.Item,{label:u("model"),name:"model",rules:[{required:!0,message:u("required")},{validator(e,l){var r;return l&&(null===l||void 0===l||null===(r=l.trim())||void 0===r?void 0:r.length)<2?Promise.reject(new Error(u("must.be.at.least.2"))):Promise.resolve()}}],children:(0,E.jsx)(s.A,{placeholder:u("type.here"),maxLength:20})})}),(0,E.jsx)(t.A,{span:12,children:(0,E.jsx)(n.A.Item,{label:u("type.of.technique"),name:"type_of_technique",rules:[{required:!0,message:u("required")}],children:(0,E.jsx)(c.A,{options:C,placeholder:u("select.technique")})})}),(0,E.jsx)(t.A,{span:12,children:(0,E.jsx)(n.A.Item,{label:u("car.number"),name:"number",rules:[{required:!0,message:u("required")},{validator(e,l){var r;return l&&(null===l||void 0===l||null===(r=l.trim())||void 0===r?void 0:r.length)<2?Promise.reject(new Error(u("must.be.at.least.2"))):Promise.resolve()}}],children:(0,E.jsx)(s.A,{placeholder:u("type.here"),maxLength:20})})}),(0,E.jsx)(t.A,{span:12,children:(0,E.jsx)(n.A.Item,{label:u("car.color"),name:"color",rules:[{required:!0,message:u("required")},{validator(e,l){var r;return l&&(null===l||void 0===l||null===(r=l.trim())||void 0===r?void 0:r.length)<2?Promise.reject(new Error(u("must.be.at.least.2"))):Promise.resolve()}}],children:(0,E.jsx)(s.A,{placeholder:u("type.here"),maxLength:20})})}),(0,E.jsx)(t.A,{span:12,children:(0,E.jsx)(n.A.Item,{label:u("image"),name:"deliveryman-settings-images",rules:[{required:!(null!==i&&void 0!==i&&i.length),message:u("required")}],children:(0,E.jsx)(f.A,{type:"deliveryman/settings",imageList:i,setImageList:d,form:a,length:"1",multiple:!0})})}),(0,E.jsx)(t.A,{span:6,children:(0,E.jsx)(n.A.Item,{label:u("online"),name:"online",rules:[{required:!0,message:u("required")}],valuePropName:"checked",children:(0,E.jsx)(k.A,{})})}),(0,E.jsx)(t.A,{span:24,children:(0,E.jsx)(n.A.Item,{label:u("map"),name:"location",children:(0,E.jsx)(I.A,{location:l,setLocation:r})})})]})};var O=r(76372),F=r(64988),L=r(82206),R=r(78687),z=r(2905),T=r(79406);const B=e=>{let{form:l}=e;const{t:r}=(0,A.B)(),[i,o]=(0,a.useState)({}),{country:s,region:d,city:u}=i;return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(t.A,{span:12,children:(0,E.jsx)(n.A.Item,{label:r("region"),name:"region",rules:[{required:!0,message:r("required")}],children:(0,E.jsx)(T.a,{fetchOptions:async function(e){const l={search:e,status:1,perPage:10};return z.A.get(l).then((e=>{let{data:l}=e;return l.map((e=>({label:e.translation.title||"no name",value:e.id,key:null===e||void 0===e?void 0:e.id})))}))},dropdownRender:e=>(0,E.jsx)(E.Fragment,{children:e}),refetch:!0,onChange:e=>{o((l=>({...l,region:e}))),l.resetFields(["city","area","country"])},placeholder:r("select.region"),autoComplete:"none"})})}),(0,E.jsx)(t.A,{span:12,children:(0,E.jsx)(n.A.Item,{label:r("country"),name:"country",rules:[{required:!0,message:r("required")}],children:(0,E.jsx)(T.a,{fetchOptions:async function(e){const l={search:e,status:1,perPage:10,region_id:null===d||void 0===d?void 0:d.value};return R.A.get(l).then((e=>{let{data:l}=e;return l.map((e=>({label:e.translation.title||"no name",value:e.id,key:null===e||void 0===e?void 0:e.id})))}))},dropdownRender:e=>(0,E.jsx)(E.Fragment,{children:e}),refetch:!0,onChange:e=>{o((l=>({...l,country:e}))),l.resetFields(["city","area"])},disabled:!Boolean(null===d||void 0===d?void 0:d.value),placeholder:r("select.country"),autoComplete:"none"})})}),(0,E.jsx)(t.A,{span:12,children:(0,E.jsx)(n.A.Item,{label:r("city"),name:"city",rules:[{required:!1,message:r("required")}],children:(0,E.jsx)(T.a,{fetchOptions:async function(e){const l={search:e,status:1,perPage:10,country_id:null===s||void 0===s?void 0:s.value};return L.A.get(l).then((e=>{let{data:l}=e;return l.map((e=>({label:e.translation.title||"no name",value:e.id,key:null===e||void 0===e?void 0:e.id})))}))},dropdownRender:e=>(0,E.jsx)(E.Fragment,{children:e}),refetch:!0,disabled:!Boolean(null===s||void 0===s?void 0:s.value),onChange:e=>{o((l=>({...l,city:e}))),l.resetFields(["area"])},placeholder:r("select.city"),autoComplete:"none"})})}),(0,E.jsx)(t.A,{span:12,children:(0,E.jsx)(n.A.Item,{label:r("area"),name:"area",rules:[{required:!1,message:r("required")}],children:(0,E.jsx)(T.a,{fetchOptions:async function(e){const l={search:e,status:1,perPage:10,city_id:null===u||void 0===u?void 0:u.value};return F.A.get(l).then((e=>{let{data:l}=e;return l.map((e=>{var l;return{label:(null===e||void 0===e||null===(l=e.translation)||void 0===l?void 0:l.title)||"no name",value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id}}))}))},dropdownRender:e=>(0,E.jsx)(E.Fragment,{children:e}),refetch:!0,disabled:!Boolean(null===u||void 0===u?void 0:u.value),placeholder:r("select.area")})})})]})};var M=r(71999),D=r(98591);function K(){var e,l;const{t:r}=(0,A.B)(),[b]=n.A.useForm(),[k,I]=(0,a.useState)(),[C,F]=(0,a.useState)(null),[L,R]=(0,a.useState)(!1),z=(0,h.Zp)(),T=(0,g.d4)((e=>e.user),g.bN),{defaultLang:K,languages:V}=(0,g.d4)((e=>e.formLang),g.bN),{role:G}=(0,h.g)(),{settings:U}=(0,g.d4)((e=>e.globalSettings),g.bN),[W,H]=(0,a.useState)((0,S.A)(U));(0,a.useEffect)((()=>()=>{const e=b.getFieldsValue(!0);e.birthday=JSON.stringify(null===e||void 0===e?void 0:e.birthday),Y((0,j.Ok)({activeMenu:Z,data:{...Z.data,...e}}))}),[]);const J=(0,h.zy)(),Z=(0,g.d4)((e=>e.menu.activeMenu)),Y=(0,g.wA)(),[Q,X]=(0,a.useState)(null!==Z&&void 0!==Z&&null!==(e=Z.data)&&void 0!==e&&e.images?null===Z||void 0===Z||null===(l=Z.data)||void 0===l?void 0:l.images:[]),[$,ee]=(0,a.useState)([]);async function le(e){const l={search:e,status:"approved"};return _.A.search(l).then((e=>e.data.map((e=>({label:null!==e.translation?e.translation.title:"no name",value:e.id,key:e.id})))))}return(0,E.jsx)(i.A,{title:r("add.user"),extra:"master"===G?(0,E.jsx)(M.A,{}):null,children:(0,E.jsx)(n.A,{form:b,layout:"vertical",initialValues:{online:!0,gender:"male",...Z.data,...(()=>{var e,l;if(null===(e=Z.data)||void 0===e||!e.birthday)return{};const r=JSON.parse(null===(l=Z.data)||void 0===l?void 0:l.birthday);return{birthday:y()(r)}})()},onFinish:e=>{var l,a,n,i,o,t;R(!0);const s={firstname:e.firstname,lastname:e.lastname,email:e.user_email,phone:e.phone,birthday:k,gender:e.gender,password_confirmation:e.password_confirmation,password:e.password,images:Q[0]?[null===(l=Q[0])||void 0===l?void 0:l.name]:void 0,shop_id:null!==e&&void 0!==e&&e.shop_id?void 0!==(null===e||void 0===e?void 0:e.shop_id.length)?null===e||void 0===e||null===(a=e.shop_id)||void 0===a?void 0:a.map((e=>e.value)):[null===e||void 0===e?void 0:e.shop_id.value]:void 0,role:G||void 0,online:Number(e.online),height:e.height,kg:e.kg,length:e.length,price:e.price,price_per_km:e.price_per_km,width:e.width,area_id:null===e||void 0===e||null===(n=e.area)||void 0===n?void 0:n.value,city_id:null===e||void 0===e||null===(i=e.city)||void 0===i?void 0:i.value,country_id:null===e||void 0===e||null===(o=e.country)||void 0===o?void 0:o.value,region_id:null===e||void 0===e||null===(t=e.region)||void 0===t?void 0:t.value};"master"===G&&(s.title={},s.description={},V.forEach((l=>{const r=l.locale;s.title[r]=e["title[".concat(r,"]")],s.description[r]=e["description[".concat(r,"]")]})));const d=J.pathname.search("/user/delivery/")?"deliveries/list":"users/admin";x.A.create(s).then((l=>{let{data:a}=l;if("deliveryman"===G){var n,i,o,t;const l={color:e.color,number:e.number,type_of_technique:e.type_of_technique,brand:e.brand,model:e.model,user_id:a.id,images:Q.map((e=>e.name)),location:{latitude:W.lat,longitude:W.lng},online:Number(e.online),height:e.height,kg:e.kg,length:e.length,price:e.price,price_per_km:e.price_per_km,width:e.width,area_id:null===e||void 0===e||null===(n=e.area)||void 0===n?void 0:n.value,city_id:null===e||void 0===e||null===(i=e.city)||void 0===i?void 0:i.value,country_id:null===e||void 0===e||null===(o=e.country)||void 0===o?void 0:o.value,region_id:null===e||void 0===e||null===(t=e.region)||void 0===t?void 0:t.value};P.A.create(l).then((()=>{p.oR.success(r("successfully.created")),(0,g.vA)((()=>{Y((0,j.EK)({...Z,nextUrl:d})),Y(J.pathname.search("/user/delivery/")?(0,O.N)({}):(0,q.hU)({role:G}))})),z("/".concat(d))}))}else{const e="users/admin",l={...T.params,role:a.role};(0,g.vA)((()=>{Y((0,j.EK)({...Z,menu:e})),Y((0,q.hU)(l))})),z("/".concat(e))}})).catch((e=>{var l,r,a,n,i,o,t,s,d;null!==e&&void 0!==e&&null!==(l=e.response)&&void 0!==l&&null!==(r=l.data)&&void 0!==r&&r.params&&(p.oR.dismiss(),null===(t=Object.values(null===e||void 0===e||null===(s=e.response)||void 0===s||null===(d=s.data)||void 0===d?void 0:d.params))||void 0===t||t.map((e=>p.oR.error(e[0]))));console.log(null===e||void 0===e||null===(a=e.response)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.params),F(null===e||void 0===e||null===(i=e.response)||void 0===i||null===(o=i.data)||void 0===o?void 0:o.params)})).finally((()=>R(!1)))},children:(0,E.jsxs)(o.A,{gutter:12,children:[(0,E.jsx)(t.A,{span:24,children:(0,E.jsx)(n.A.Item,{rules:[{validator:()=>0===(null===Q||void 0===Q?void 0:Q.length)?Promise.reject(new Error(r("required"))):Promise.resolve()}],name:"images",label:r("avatar"),children:(0,E.jsx)(f.A,{type:"users",imageList:Q,setImageList:X,form:b,multiple:!1})})}),(0,E.jsx)(t.A,{span:12,children:(0,E.jsx)(n.A.Item,{label:r("firstname"),name:"firstname",help:null!==C&&void 0!==C&&C.firstname?C.firstname[0]:null,validateStatus:null!==C&&void 0!==C&&C.firstname?"error":"success",rules:[{validator:(e,l)=>l?l&&""===(null===l||void 0===l?void 0:l.trim())?Promise.reject(new Error(r("no.empty.space"))):l&&(null===l||void 0===l?void 0:l.trim().length)<2?Promise.reject(new Error(r("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(r("required")))}],children:(0,E.jsx)(s.A,{placeholder:r("type.here")})})}),(0,E.jsx)(t.A,{span:12,children:(0,E.jsx)(n.A.Item,{label:"lastname",name:"lastname",help:null!==C&&void 0!==C&&C.lastname?C.lastname[0]:null,validateStatus:null!==C&&void 0!==C&&C.lastname?"error":"success",rules:[{validator:(e,l)=>l?l&&""===(null===l||void 0===l?void 0:l.trim())?Promise.reject(new Error(r("no.empty.space"))):l&&(null===l||void 0===l?void 0:l.trim().length)<2?Promise.reject(new Error(r("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(r("required")))}],children:(0,E.jsx)(s.A,{placeholder:r("type.here")})})}),"master"===G&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(t.A,{span:12,children:V.map(((e,l)=>(0,E.jsx)(n.A.Item,{label:r("title"),name:"title[".concat(e.locale,"]"),rules:[{validator:(l,a)=>a||(null===e||void 0===e?void 0:e.locale)!==K?a&&""===(null===a||void 0===a?void 0:a.trim())?Promise.reject(new Error(r("no.empty.space"))):a&&(null===a||void 0===a?void 0:a.length)<2?Promise.reject(new Error(r("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(r("required")))}],hidden:e.locale!==K,children:(0,E.jsx)(s.A,{})},"title"+l)))}),(0,E.jsx)(t.A,{span:12,children:V.map(((e,l)=>(0,E.jsx)(n.A.Item,{label:r("description"),name:"description[".concat(e.locale,"]"),rules:[{validator:(l,a)=>a||(null===e||void 0===e?void 0:e.locale)!==K?a&&""===(null===a||void 0===a?void 0:a.trim())?Promise.reject(new Error(r("no.empty.space"))):a&&(null===a||void 0===a?void 0:a.length)<5?Promise.reject(new Error(r("must.be.at.least.5"))):Promise.resolve():Promise.reject(new Error(r("required")))}],hidden:e.locale!==K,children:(0,E.jsx)(D.A,{rows:4})},"desc"+l)))})]}),(0,E.jsx)(t.A,{span:12,children:(0,E.jsx)(n.A.Item,{label:r("phone"),name:"phone",help:null!==C&&void 0!==C&&C.phone?C.phone[0]:null,validateStatus:null!==C&&void 0!==C&&C.phone?"error":"success",rules:[{required:!0,message:r("required")}],children:(0,E.jsx)(d.A,{min:0,className:"w-100",placeholder:r("type.here")})})}),(0,E.jsx)(t.A,{span:12,children:(0,E.jsx)(n.A.Item,{label:r("birthday"),name:"birthday",rules:[{required:!0,message:r("required")}],valuePropName:"date",children:(0,E.jsx)(u.A,{onChange:(e,l)=>I(l),className:"w-100",disabledDate:e=>y()().add(-18,"years")<=e,defaultPickerValue:y()().add(-18,"years")})})}),(0,E.jsx)(t.A,{span:12,children:(0,E.jsx)(n.A.Item,{label:r("gender"),name:"gender",rules:[{required:!0,message:r("required")}],children:(0,E.jsxs)(c.A,{picker:"dayTime",className:"w-100",children:[(0,E.jsx)(c.A.Option,{value:"male",children:r("male")}),(0,E.jsx)(c.A.Option,{value:"female",children:r("female")})]})})}),(0,E.jsx)(t.A,{span:12,children:(0,E.jsx)(n.A.Item,{label:r("email"),name:"user_email",help:null!==C&&void 0!==C&&C.email?C.email[0]:null,validateStatus:null!==C&&void 0!==C&&C.email?"error":"success",rules:[{required:!0,message:r("required")},{type:"email",message:r("invalid.email")}],children:(0,E.jsx)(s.A,{type:"email",placeholder:r("type.here")})})}),(0,E.jsx)(t.A,{span:12,children:(0,E.jsx)(n.A.Item,{label:r("password"),name:"password",help:null!==C&&void 0!==C&&C.password?C.password[0]:null,validateStatus:null!==C&&void 0!==C&&C.password?"error":"success",rules:[{required:!0,message:r("required")},{validator:(e,l)=>l&&(null===l||void 0===l?void 0:l.length)<6?Promise.reject(new Error(r("min.6.letters"))):Promise.resolve()}],normalize:e=>""===(null===e||void 0===e?void 0:e.trim())?null===e||void 0===e?void 0:e.trim():e,children:(0,E.jsx)(s.A.Password,{type:"password",className:"w-100",placeholder:r("type.here")})})}),"admin"!==G&&"manager"!==G&&"moderator"!==G&&"seller"!==G&&"cook"!==G&&"user"!==G&&(0,E.jsx)(t.A,{span:12,children:(0,E.jsx)(n.A.Item,{label:r("shop"),name:"shop_id",rules:[{required:!0,message:r("required")}],children:(0,E.jsx)(w.G,{mode:"multiple",className:"w-100",placeholder:r("select.shop"),fetchOptions:le,allowClear:!1})})}),"cook"===G&&(0,E.jsx)(t.A,{span:12,children:(0,E.jsx)(n.A.Item,{label:r("shop"),name:"shop_id",rules:[{required:!0,message:r("required")}],children:(0,E.jsx)(w.G,{fetchOptions:le,className:"w-100",placeholder:r("select.shop"),allowClear:!1})})}),"moderator"===G&&(0,E.jsx)(t.A,{span:12,children:(0,E.jsx)(n.A.Item,{label:r("branches"),name:"shop_id",rules:[{required:!0,message:r("required")}],children:(0,E.jsx)(w.G,{fetchOptions:le,className:"w-100",placeholder:r("select.shop"),allowClear:!1})})}),(0,E.jsx)(t.A,{span:12,children:(0,E.jsx)(n.A.Item,{label:r("password.confirmation"),help:null!==C&&void 0!==C&&C.password_confirmation?C.password_confirmation[0]:null,validateStatus:null!==C&&void 0!==C&&C.password_confirmation?"error":"success",name:"password_confirmation",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:r("required")},e=>{let{getFieldValue:l}=e;return{validator:(e,a)=>a&&l("password")!==a?Promise.reject(r("two.passwords.dont.match")):Promise.resolve()}}],normalize:e=>""===(null===e||void 0===e?void 0:e.trim())?null===e||void 0===e?void 0:e.trim():e,children:(0,E.jsx)(s.A.Password,{type:"password",placeholder:r("type.here")})})}),"deliveryman"===G&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(m.A,{className:"pt-3 pb-3",dashed:!0,orientation:"left",plain:!0,children:r("deliveryman.address")}),(0,E.jsx)(B,{form:b})]}),"deliveryman"===G&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(m.A,{className:"pt-3 pb-3",dashed:!0,orientation:"left",plain:!0,children:r("deliveryman.settings")}),(0,E.jsx)(N,{setLocation:H,location:W,setImage:ee,image:$,form:b})]}),(0,E.jsx)(t.A,{span:24,children:(0,E.jsx)(v.A,{type:"primary",htmlType:"submit",loading:L,children:r("save")})})]})})})}}}]);