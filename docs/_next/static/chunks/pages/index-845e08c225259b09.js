(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4343)}])},4343:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return App}});var s=n(5893),i=n(7294),a=n(9008),l=n.n(a),o=n(6991),c=n.n(o),components_FormRadioButtonField=e=>{let{label:t,value:n,option:i,checked:a=!1,onChange:l=()=>{}}=e;return(0,s.jsx)("div",{className:"dynamic-form-field dynamic-form-radio-button-field ".concat(a?"dynamic-form-radio-button-field-checked":""),children:(0,s.jsxs)("label",{children:[(0,s.jsx)("input",{type:"radio",placeholder:n,onClick:e=>{e.stopPropagation(),e.preventDefault(),l(n,i)},checked:a,onChange:()=>{}}),(0,s.jsx)("span",{className:"dynamic-form-radio-button-field-label-text",dangerouslySetInnerHTML:{__html:t}})]})})};let r={Radio:e=>{let{id:t="",title:n="",description:a="",options:l=[],value:o="",onChange:c=()=>{}}=e,[r,d]=(0,i.useState)(o),onCheckedHandler=(e,n)=>{d(e),c(t,e,n)};return(0,i.useEffect)(()=>{d(o)},[o,t]),(0,s.jsxs)("div",{className:"dynamic-form-field dynamic-form-radio-question",children:[(0,s.jsx)("p",{dangerouslySetInnerHTML:{__html:n},className:"dynamic-form-field-question-title"}),a&&(0,s.jsx)("p",{dangerouslySetInnerHTML:{__html:a},className:"dynamic-form-field-question-description"}),l.map(e=>(0,s.jsx)(components_FormRadioButtonField,{label:e.label,value:e.value,option:e.option,checked:r===e.option,onChange:onCheckedHandler},e.label))]})},Dropdown:e=>{let{id:t="",title:n="",description:a="",options:l=[],value:o="",onChange:c=()=>{}}=e,[r,d]=(0,i.useState)(!1),[m,u]=(0,i.useState)(o),onOptionSelected=(e,n)=>{u(n),d(!1),c(t,e,n)};return(0,s.jsxs)("div",{className:"dynamic-form-field dynamic-form-dropdown-question",children:[(0,s.jsx)("p",{dangerouslySetInnerHTML:{__html:n},className:"dynamic-form-field-question-title"}),a&&(0,s.jsx)("p",{dangerouslySetInnerHTML:{__html:a},className:"dynamic-form-field-question-description"}),(0,s.jsxs)("div",{className:"dynamic-form-dropdown-question-options-wrapper",children:[(0,s.jsx)("label",{onClick:()=>d(!r),children:m?l.filter(e=>e.option===m)[0].label:"Please select an option"}),r&&(0,s.jsx)("ul",{className:"dynamic-form-select-field-options",children:l.map((e,t)=>(0,s.jsx)("li",{onClick:()=>onOptionSelected(e.value,e.option),className:m===e.option?"dynamic-form-select-field-option-active":"",children:e.label},t))})]})]})}},getParameterValueByName=e=>{e=e.replace(/[[]/,"\\[").replace(/[\]]/,"\\]");let t=RegExp("[\\?&]"+e+"=([^&#]*)"),n=t.exec(location.search);return null===n?"":decodeURIComponent(n[1].replace(/\+/g," "))};var components_Form=e=>{let{data:t={},output:n={}}=e,[a,l]=(0,i.useState)(!1),[o,c]=(0,i.useState)([]),[d,m]=(0,i.useState)(),[u,p]=(0,i.useState)({}),[f,h]=(0,i.useState)(null),[y,g]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let e=t.static;e&&e.length>0&&(m(e[0]),c([e[0]]))},[t]),(0,i.useEffect)(()=>{g(!!getParameterValueByName("debug"))},[]),(0,s.jsxs)("div",{className:"dynamic-form",children:[y&&(0,s.jsx)("pre",{dangerouslySetInnerHTML:{__html:JSON.stringify(u,null,4)}}),y&&(0,s.jsx)("pre",{dangerouslySetInnerHTML:{__html:JSON.stringify(n,null,4)}}),!a&&d&&(0,s.jsxs)("div",{className:"question-item-wrapper",children:[o.length>1&&!a&&(0,s.jsx)("button",{className:"dynamic-form-go-back-button",onClick:()=>{m(o[o.length-(d?2:1)]),d&&c(o.slice(0,-1)),l(!1)},children:"Go Back"}),(0,s.jsx)("img",{className:"question-item-logo",src:"https://paperprisons.org/images/logo.png"}),i.createElement(r[d.type],{...d,onChange:(e,n,s)=>{p({...u,[e]:s});let i="#End"===n,a=t.dynamic[e],r=a.staticId,d=f;a.isStatic&&t.dynamic[n]?d=n:!a.isStatic&&t.dynamic["".concat(e).concat(n)]&&(d="".concat(e).concat(n)),d&&h(i?null:d),r<t.static.length-1&&!i?(m(t.static[r+1]),c(t.static.slice(0,r+2))):!i&&d?(m(t.dynamic[d]),c([...o,t.dynamic[d]])):(m(null),l(!0))},value:u[d.id]})]}),a&&(0,s.jsxs)("div",{className:"dynamic-form-output",children:[(0,s.jsx)("img",{className:"question-item-logo",src:"https://paperprisons.org/images/logo.png"}),(0,s.jsx)("div",{className:"dynamic-form-output-item",children:(0,s.jsx)("p",{className:"dynamic-form-output-item-title",children:"Here is what you need to do:"})}),t.raw.map(e=>{let t=u[e.id],i=n[e.id];return t&&i?(0,s.jsxs)("div",{className:"dynamic-form-output-item",children:[y&&(0,s.jsx)("p",{className:"dynamic-form-output-item-title",dangerouslySetInnerHTML:{__html:e.title}}),(0,s.jsx)("p",{dangerouslySetInnerHTML:{__html:i.options[t]}})]},e.id):null})]})]})};function App(){let[e,t]=(0,i.useState)({}),[n,a]=(0,i.useState)({});return(0,i.useEffect)(()=>{let e=new(c());e.parse("1S9Ac06eAesmc4J8mgEdO6A083H2sfkPKEk7sbg3USGY","Questions-Cloned-Yabo").then(e=>{let n={static:[],dynamic:{},raw:[]};e.forEach((e,t)=>{let s={id:e["Unique ID"],staticId:t,title:e.Question,description:e["Sub Description"],type:e.Type,isStatic:"Static"===e.QuestionFlowType,options:Object.keys(e).filter(e=>e.startsWith("A")).map(t=>{let n=e[t].trim(),s=n.match(/^(.*?)\s*{{(.*?)}}$/);if(s){let e=s[1].trim(),n=s[2].trim();return{label:e,value:n,option:t}}return{label:n,value:n,option:t}})};n.dynamic[s.id]=s,s.isStatic&&n.static.push(s),n.raw.push(s)}),t(n)})},[]),(0,i.useEffect)(()=>{let e=new(c());e.parse("1S9Ac06eAesmc4J8mgEdO6A083H2sfkPKEk7sbg3USGY","Answer Output Key").then(e=>{let t={};e.forEach(e=>{let n=e["Question Unique ID (For reference purpose only)"],s={id:n,title:e.Question,options:Object.keys(e).filter(e=>e.startsWith("A")).reduce((t,n)=>(t[n.replace(" Output","").trim()]=e[n].trim(),t),{})};t[n]=s}),a(t)})},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(l(),{children:[(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,s.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Open+Sans:400,600,300",rel:"stylesheet",type:"text/css"})]}),(0,s.jsx)(components_Form,{data:e,output:n})]})}}},function(e){e.O(0,[136,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);