var __awaiter=this&&this.__awaiter||function(e,t,i,n){function a(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,s){function r(e){try{c(n.next(e))}catch(t){s(t)}}function o(e){try{c(n["throw"](e))}catch(t){s(t)}}function c(e){e.done?i(e.value):a(e.value).then(r,o)}c((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var i={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},n,a,s,r;return r={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(r[Symbol.iterator]=function(){return this}),r;function o(e){return function(t){return c([e,t])}}function c(r){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,a&&(s=r[0]&2?a["return"]:r[0]?a["throw"]||((s=a["return"])&&s.call(a),0):a.next)&&!(s=s.call(a,r[1])).done)return s;if(a=0,s)r=[r[0]&2,s.value];switch(r[0]){case 0:case 1:s=r;break;case 4:i.label++;return{value:r[1],done:false};case 5:i.label++;a=r[1];r=[0];continue;case 7:r=i.ops.pop();i.trys.pop();continue;default:if(!(s=i.trys,s=s.length>0&&s[s.length-1])&&(r[0]===6||r[0]===2)){i=0;continue}if(r[0]===3&&(!s||r[1]>s[0]&&r[1]<s[3])){i.label=r[1];break}if(r[0]===6&&i.label<s[1]){i.label=s[1];s=r;break}if(s&&i.label<s[2]){i.label=s[2];i.ops.push(r);break}if(s[2])i.ops.pop();i.trys.pop();continue}r=t.call(e,i)}catch(o){r=[6,o];a=0}finally{n=s=0}if(r[0]&5)throw r[1];return{value:r[0]?r[1]:void 0,done:true}}};System.register(["./p-4105a996.system.js","./p-7bf86ee3.system.js","./p-2c235db8.system.js"],(function(e){"use strict";var t,i,n,a,s,r,o,c;return{setters:[function(e){t=e.r;i=e.c;n=e.h;a=e.H;s=e.g},function(e){r=e.f;o=e.g},function(e){c=e.g}],execute:function(){var l="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]){--calcite-checkbox-size:var(--calcite-font-size--2);--calcite-checkbox-grid-gap:0.5rem}:host([scale=m]){--calcite-checkbox-size:var(--calcite-font-size--1);--calcite-checkbox-grid-gap:0.5rem}:host([scale=l]){--calcite-checkbox-size:var(--calcite-font-size-1);--calcite-checkbox-grid-gap:0.75rem}:host{display:-ms-inline-flexbox;display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}:host .check-svg{width:var(--calcite-checkbox-size);height:var(--calcite-checkbox-size);overflow:hidden;display:inline-block;background-color:var(--calcite-ui-foreground-1);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input);box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input);fill:var(--calcite-ui-background);pointer-events:none;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out}:host .hasLabel{display:grid;grid-gap:var(--calcite-checkbox-grid-gap);-ms-flex-align:center;align-items:center;--calcite-label-margin-bottom:0}:host ::slotted(input){width:var(--calcite-checkbox-size);height:var(--calcite-checkbox-size)}:host(:hover) .check-svg,:host([hovered]) .check-svg{-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-brand);box-shadow:inset 0 0 0 2px var(--calcite-ui-brand)}:host([checked]) .check-svg,:host([indeterminate]) .check-svg{background-color:var(--calcite-ui-brand);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand)}:host .focused .check-svg{-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-brand);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host([disabled]){cursor:default;opacity:var(--calcite-ui-opacity-disabled);pointer-events:none}:host([scale=s]) .hasLabel{grid-template-columns:12px 1fr 4px;grid-template-rows:16px 1fr}:host([scale=m]) .hasLabel{grid-template-columns:16px 1fr 4px;grid-template-rows:20px 1fr}:host([scale=l]) .hasLabel{grid-template-columns:20px 1fr 4px;grid-template-rows:24px 1fr}";var h=e("calcite_checkbox",function(){function e(e){var n=this;t(this,e);this.calciteCheckboxChange=i(this,"calciteCheckboxChange",7);this.calciteCheckboxFocusedChange=i(this,"calciteCheckboxFocusedChange",7);this.checked=false;this.disabled=false;this.hovered=false;this.indeterminate=false;this.name="";this.scale="m";this.checkedPath="M12.753 3l-7.319 7.497L3.252 8.31 2 9.373l3.434 3.434L14 4.24z";this.indeterminatePath="M4 7h8v2H4z";this.focused=false;this.getPath=function(){return n.indeterminate?n.indeterminatePath:n.checked?n.checkedPath:""};this.toggle=function(){if(!n.disabled){n.checked=!n.checked;r(n.input);n.indeterminate=false;n.calciteCheckboxChange.emit()}};this.formResetHandler=function(){n.checked=n.initialChecked};this.nativeLabelClickHandler=function(e){var t=e.target;if(!n.el.closest("calcite-label")&&t.nodeName==="LABEL"&&t.parentNode.nodeName!=="CALCITE-LABEL"&&n.el.id&&t.htmlFor===n.el.id){n.toggle()}}}e.prototype.checkedWatcher=function(e){this.input.checked=e};e.prototype.disabledChanged=function(e){this.input.disabled=e};e.prototype.nameChanged=function(e){this.input.name=e};e.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){r(this.input);return[2]}))}))};e.prototype.onClick=function(e){if(e.target===this.el){e.preventDefault()}this.toggle()};e.prototype.mouseenter=function(){this.hovered=true};e.prototype.mouseleave=function(){this.hovered=false};e.prototype.onInputBlur=function(){this.focused=false;this.calciteCheckboxFocusedChange.emit(false)};e.prototype.onInputFocus=function(){this.focused=true;this.calciteCheckboxFocusedChange.emit(true)};e.prototype.connectedCallback=function(){this.guid=this.el.id||"calcite-checkbox-"+c();this.initialChecked=this.checked;this.renderHiddenCheckboxInput();var e=this.el.closest("form");if(e){e.addEventListener("reset",this.formResetHandler)}document.addEventListener("click",this.nativeLabelClickHandler)};e.prototype.disconnectedCallback=function(){this.input.parentNode.removeChild(this.input);var e=this.el.closest("form");if(e){e.removeEventListener("reset",this.formResetHandler)}document.removeEventListener("click",this.nativeLabelClickHandler)};e.prototype.renderHiddenCheckboxInput=function(){this.input=document.createElement("input");this.checked&&this.input.setAttribute("checked","");this.input.disabled=this.disabled;this.input.id=this.guid+"-input";this.input.name=this.name;this.input.onblur=this.onInputBlur.bind(this);this.input.onfocus=this.onInputFocus.bind(this);this.input.style.setProperty("bottom","0","important");this.input.style.setProperty("left","0","important");this.input.style.setProperty("margin","0","important");this.input.style.setProperty("opacity","0","important");this.input.style.setProperty("outline","none","important");this.input.style.setProperty("padding","0","important");this.input.style.setProperty("position","absolute","important");this.input.style.setProperty("right","0","important");this.input.style.setProperty("top",this.el.textContent?this.scale==="s"?"0.125em":"0.25em":"0","important");this.input.style.setProperty("transform","none","important");this.input.style.setProperty("-webkit-appearance","none","important");this.input.style.setProperty("z-index","-1","important");this.input.type="checkbox";if(this.value){this.input.value=this.value}this.el.appendChild(this.input)};e.prototype.render=function(){if(this.el.textContent){return n(a,null,n("div",{class:{focused:this.focused,hasLabel:true}},n("svg",{class:"check-svg",viewBox:"0 0 16 16"},n("path",{d:this.getPath()})),n("calcite-label",{dir:o(this.el),"disable-spacing":true,scale:this.scale},n("slot",null))))}return n(a,null,n("div",{class:{focused:this.focused}},n("svg",{class:"check-svg",viewBox:"0 0 16 16"},n("path",{d:this.getPath()})),n("slot",null)))};Object.defineProperty(e.prototype,"el",{get:function(){return s(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{checked:["checkedWatcher"],disabled:["disabledChanged"],name:["nameChanged"]}},enumerable:false,configurable:true});return e}());h.style=l}}}));