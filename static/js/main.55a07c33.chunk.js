(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e){e.exports={form:{id:-1,text:"",bolded:!1,color:"color1",formState:"add",checked:!1},lists:[{id:0,text:"\uc624\ub298\uc758 \ud560 \uc77c1",checked:!1,color:"color1",bolded:!0,timestamp:"Sat Mar 12 2016 16:12:09 GMT-0800 (PST)"},{id:1,text:"\ud074\ub9ad\ud558\uba74 \uccb4\ud06c\uac00 \ub429\ub2c8\ub2e4.",checked:!0,color:"color1",bolded:!1,timestamp:"Sat Mar 12 2016 16:12:09 GMT-0800 (PST)"},{id:2,text:"\uae00\uc528 \uc0c9\ub3c4 \ubc14\uafd4\ubcf4\uc138\uc694.",checked:!1,color:"color3",bolded:!1,timestamp:"Fri Mar 11 2016 12:00:00 GMT-0800 (PST)"}],realignmentMode:{modeState:!1,fId:-1,lId:-1}}},21:function(e,t,n){e.exports=n(45)},26:function(e,t,n){},28:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),r=n(17),c=n.n(r),a=n(6),d=n(7),l=n(9),u=n(8),m=n(10),s=(n(26),n(28),function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.form,n=e.children;return i.a.createElement("main",{className:"todo-list-template"},i.a.createElement("div",{className:"title"},"\uc624\ub298 \ud560 \uc77c"),i.a.createElement("section",{className:"form-wrapper"},t),i.a.createElement("section",{className:"todos-wrapper"},n))}}]),t}(o.Component)),f=n(5),E=n(4),v=(n(34),n(36),function(e){var t=e.color,n=e.onColor,o=e.selected;return i.a.createElement("span",{className:"palette-".concat(t," color ").concat(o===t?"active":""),onClick:function(e){e.stopPropagation(),n(t)}})}),g=function(e){var t=e.colors,n=void 0===t?["color1","color2","color3","color4"]:t,o=e.input,r=e.onEdit,c=void 0===r?function(e){return e}:r,a=function(e){o.color!==e&&(o.color=e,c(o.text,o.color,o.bolded,o.formState,o.id))};return i.a.createElement("div",{className:"palette"},n.map(function(e){return i.a.createElement(v,{key:e,color:e,selected:o.color,onColor:a})}),i.a.createElement("div",{className:"make-bold",onClick:function(e){e.stopPropagation(),o.bolded=!o.bolded,c(o.text,o.color,o.bolded,o.formState,o.id)}},i.a.createElement("img",{src:"imgs/bold.png",alt:"bold \ucc98\ub9ac\ud558\uae30"})))},p=function(e){var t=e.onChange,n=e.submit,o=e.input,r=e._inputText;return i.a.createElement("form",{className:"form",onSubmit:n},i.a.createElement("input",{onChange:t,className:"".concat(o.color," ").concat(o.bolded?"bold-font":""),ref:r}),i.a.createElement("button",{className:"create-button"},"\ucd94\uac00"))},T=function(e){var t=e.onChange,n=e.input,o=e.submit,r=e._inputText;return i.a.createElement("form",{className:"form",onSubmit:o},i.a.createElement("input",{onChange:t,className:"".concat(n.color," ").concat(n.bolded?"bold-font":""),ref:r}),i.a.createElement("button",{className:"edit-button"},"\uc218\uc815"))},b=function(e){var t,n=e.onEdit,o=void 0===n?function(e){return e}:n,r=e.onAdd,c=void 0===r?function(e){return e}:r,a=e.onEditSubmit,d=void 0===a?function(e){return e}:a,l=e.form,u=void 0===l?{}:l,m=e.lists,s=void 0===m?{}:m,f=e.realignmentMode,E=void 0===f?{}:f,v=e.input,b=void 0===v?{id:u.id,text:u.text,bolded:u.bolded,color:u.color,formState:u.formState,checked:u.checked}:v,I=e.onRealignMode,S=void 0===I?function(e){return e}:I,_=function(e){b.text=e.target.value},h=function(e){if(e.preventDefault(),!(b.text.length<1)){if("add"===u.formState){var n=s.length;c(n,b.text,b.color,b.bolded)}else d(b.id,b.text,b.color,b.bolded,b.checked);o("","color1",!1,"add",0),t.value="",t.className="",t.focus()}};return"edit"===u.formState?setTimeout(function(){t.value=b.text},1):setTimeout(function(){t.focus()},1),i.a.createElement("div",{className:"todo-form"},i.a.createElement("div",{className:"palette-with-btns"},i.a.createElement("div",{className:"sort-btn"},i.a.createElement("img",{src:"imgs/list_sort2.png",alt:"Rearrange list button",onClick:function(){S(!E.modeState)}})),i.a.createElement(g,{input:b,onEdit:o})),"add"===u.formState?i.a.createElement(p,{onChange:_,input:b,submit:h,_inputText:function(e){t=e}}):i.a.createElement(T,{onChange:_,input:b,_inputText:function(e){t=e},submit:h}))},I=(n(38),function(e){var t=e.text,n=void 0===t?"":t,o=e.bolded,r=void 0!==o&&o,c=e.checked,a=void 0!==c&&c,d=e.color,l=void 0===d?"color1":d,u=e.id,m=void 0===u?-1:u,s=e.form,f=void 0===s?{}:s,E=e.onAddList,v=void 0===E?function(e){return e}:E,g=e.onEditList,p=void 0===g?function(e){return e}:g,T=e.onCheckToggle,b=void 0===T?function(e){return e}:T,I=e.onRemoveList,S=void 0===I?function(e){return e}:I;return i.a.createElement("div",{className:"todo-item ".concat("edit"===f.formState&&f.id===m?"edit-item":""),onClick:function(){return b(m,!a)}},i.a.createElement("div",{className:"remove",onClick:function(e){e.stopPropagation(),S(m)}}," \xd7 "),i.a.createElement("div",{className:"todo-text ".concat(l," ").concat(a?"checked":""," ").concat(r?"bold-font":"")},i.a.createElement("div",null,n)),a&&i.a.createElement("div",{className:"check-mark"},"\u2713"),i.a.createElement("div",{className:"edit-btn",onClick:function(e){e.stopPropagation(),"add"===f.formState?p(m,n,l,r,a):f.id===m?v():p(m,n,l,r,a)}},i.a.createElement("img",{src:"imgs/edit.png",alt:"edit_pecil_Image"})))}),S=(n(40),function(e){var t=e.text,n=void 0===t?"":t,o=e.id,r=void 0===o?-1:o,c=e.color,a=void 0===c?"color1":c,d=e.bolded,l=void 0!==d&&d,u=e.checked,m=void 0!==u&&u,s=e.realignmentMode,f=void 0===s?{}:s,E=e.onRealign_Fid,v=void 0===E?function(e){return e}:E,g=e.onRealignList,p=void 0===g?function(e){return e}:g,T=f.fId===r;return i.a.createElement("div",{className:"realignment-item  ".concat(T?"r_checked":""),onClick:function(){var e,t;f.fId<0?v(r):((e=f.fId)!==(t=r)&&p(e,t),v(-1))}},i.a.createElement("div",{className:"realignment-btn"},T?i.a.createElement("img",{src:"imgs/realignment_checked.png",alt:"edit_pecil_Image"}):i.a.createElement("img",{src:"imgs/realignment.png",alt:"edit_pecil_Image"})),i.a.createElement("div",{className:"realignment-text ".concat(a," ").concat(m?"checked":""," ").concat(l?"bold-font":"")},i.a.createElement("div",null,n)))}),_=function(e){var t=e.form,n=void 0===t?{}:t,o=e.lists,r=void 0===o?[]:o,c=e.realignmentMode,a=void 0===c?{}:c,d=e.onEditList,l=void 0===d?function(e){return e}:d,u=e.onAddList,m=void 0===u?function(e){return e}:u,s=e.onRemoveList,f=void 0===s?function(e){return e}:s,E=e.onCheckToggle,v=void 0===E?function(e){return e}:E,g=e.onRealign_Fid,p=void 0===g?function(e){return e}:g,T=e.onRealignList,b=void 0===T?function(e){return e}:T;return i.a.createElement("div",null,r.map(function(e){return!1===a.modeState?i.a.createElement(I,Object.assign({form:n},e,{onRemoveList:f,onAddList:m,onEditList:l,onCheckToggle:v,key:e.id})):i.a.createElement(S,Object.assign({},e,{key:e.id,realignmentMode:a,onRealign_Fid:p,onRealignList:b}))}))},h={EDIT_INPUT:"EDIT_INPUT",ADD_LIST:"ADD_LIST",CHECK_TOGGLE_LIST:"CHECK_TOGGLE_LIST",EDIT_LIST:"EDIT_LIST",REMOVE_LIST:"REMOVE_LIST",REALIGN_LIST:"REALIGN_LIST",ADD_STATE:"ADD_STATE",EDIT_STATE:"EDIT_STATE",REALIGN_MODE:"REALIGN_MODE",REALIGN_GET_FID:"REALIGN_GET_FID"},L=Object(E.b)(function(e){return{form:e.form,lists:e.lists,realignmentMode:e.realignmentMode}},function(e){return{onEdit:function(t,n,o,i,r){e(function(e,t,n,o,i){return{type:h.EDIT_INPUT,text:e,color:t,bolded:n,formState:o,id:i}}(t,n,o,i,r))},onAdd:function(t,n,o,i){e(function(e,t,n,o){return{type:h.ADD_LIST,id:e,text:t,color:n,bolded:o,timestamp:(new Date).toString()}}(t,n,o,i))},onEditSubmit:function(t,n,o,i,r){e(function(e,t,n,o,i){return{type:h.EDIT_LIST,id:e,text:t,color:n,bolded:o,checked:i,timestamp:(new Date).toString()}}(t,n,o,i,r))},onRealignMode:function(t){e(function(e){return{type:h.REALIGN_MODE,modeState:e}}(t))}}})(b),N=Object(E.b)(function(e){return{form:e.form,lists:Object(f.a)(e.lists).sort(function(e,t){return t.id-e.id}),realignmentMode:e.realignmentMode}},function(e){return{onEditList:function(t,n,o,i){e(function(e,t,n,o,i){return{type:h.EDIT_STATE,id:e,text:t,color:n,bolded:o,checked:i}}(t,n,o,i))},onAddList:function(){e({type:h.ADD_STATE})},onRemoveList:function(t){e(function(e){return{type:h.REMOVE_LIST,id:e}}(t))},onCheckToggle:function(t,n){e(function(e,t){return{type:h.CHECK_TOGGLE_LIST,id:e,checked:t}}(t,n))},onRealign_Fid:function(t){e(function(e){return{type:h.REALIGN_GET_FID,fId:e}}(t))},onRealignList:function(t,n){e(function(e,t){return{type:h.REALIGN_LIST,fId:e,lId:t}}(t,n))}}})(_),x=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement(s,{form:i.a.createElement(L,null)},i.a.createElement(N,null))}}]),t}(o.Component),D=(n(42),n(2)),k=n(14),O=n(19),A=n.n(O),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.EDIT_INPUT:return{text:t.text,bolded:t.bolded,color:t.color,formState:t.formState,id:t.id};case h.ADD_STATE:return{text:"",bolded:!1,color:"color1",formState:"add",id:-1};case h.EDIT_STATE:return{text:t.text,bolded:t.bolded,color:t.color,formState:"edit",id:t.id};default:return e}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.ADD_LIST:return{id:t.id,text:t.text,bolded:t.bolded,color:t.color,timestamp:t.timestamp};case h.EDIT_LIST:return e.id!==t.id?e:Object(k.a)({},e,{text:t.text,checked:t.checked,bolded:t.bolded,color:t.color,timestamp:t.timestamp});case h.CHECK_TOGGLE_LIST:return e.id!==t.id?e:Object(k.a)({},e,{checked:t.checked});default:return e}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.ADD_LIST:return A()(e,{$push:[R({},t)]});case h.CHECK_TOGGLE_LIST:case h.EDIT_LIST:return e.map(function(e){return R(e,t)});case h.REMOVE_LIST:return Object(f.a)(e).filter(function(e){return e.id!==t.id}).map(function(e,t){return e.id=t,e});case h.REALIGN_LIST:var n=e.findIndex(function(e){return e.id===t.fId}),o=e.findIndex(function(e){return e.id===t.lId}),i=e[n],r=Object(f.a)(e);return r.splice(n,1),r.splice(o,0,i),r.map(function(e,t){return e.id=t,e});default:return e}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.REALIGN_MODE:return{modeState:t.modeState,fId:-1,lId:-1};case h.REALIGN_GET_FID:return{modeState:!0,fId:t.fId,lId:-1};default:return e}},y=n(20),j=function(e){return function(t){return function(n){console.groupCollapsed("dispatching",n.type),console.log("prev state",e.getState()),console.log("action",n);var o=t(n);return console.log("next state",e.getState()),console.groupEnd(),o}}},w=function(e){return function(t){return function(n){var o=t(n);return localStorage["redux-store"]=JSON.stringify(e.getState()),o}}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y;return Object(D.a)(j,w)(D.d)(Object(D.c)({form:C,lists:G,realignmentMode:M}),localStorage["redux-store"]?JSON.parse(localStorage["redux-store"]):e)}();c.a.render(i.a.createElement(E.a,{store:P},i.a.createElement(x,null)),document.getElementById("root"))}},[[21,2,1]]]);
//# sourceMappingURL=main.55a07c33.chunk.js.map