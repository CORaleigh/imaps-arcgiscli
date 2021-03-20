var __awaiter=this&&this.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,a){function o(e){try{c(r.next(e))}catch(t){a(t)}}function l(e){try{c(r["throw"](e))}catch(t){a(t)}}function c(e){e.done?n(e.value):i(e.value).then(o,l)}c((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o;return o={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function l(e){return function(t){return c([e,t])}}function c(o){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(a=o[0]&2?i["return"]:o[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;if(i=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;i=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(a=n.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){n.label=o[1];break}if(o[0]===6&&n.label<a[1]){n.label=a[1];a=o;break}if(a&&n.label<a[2]){n.label=a[2];n.ops.push(o);break}if(a[2])n.ops.pop();n.trys.pop();continue}o=t.call(e,n)}catch(l){o=[6,l];i=0}finally{r=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-4105a996.system.js","./p-466a0799.system.js"],(function(e){"use strict";var t,n,r,i,a,o,l,c;return{setters:[function(e){t=e.r;n=e.c;r=e.h;i=e.H;a=e.g},function(e){o=e.b;l=e.f;c=e.g}],execute:function(){var s=e("calcite_option",function(){function e(e){var r=this;t(this,e);this.calciteOptionChange=n(this,"calciteOptionChange",7);this.disabled=false;this.mutationObserver=new MutationObserver((function(){r.ensureTextContentDependentProps();r.calciteOptionChange.emit()}))}e.prototype.handlePropChange=function(e,t,n){if(n==="label"||n==="value"){this.ensureTextContentDependentProps()}this.calciteOptionChange.emit()};e.prototype.ensureTextContentDependentProps=function(){var e=this.el.textContent;if(!this.label||this.label===this.internallySetLabel){this.label=e;this.internallySetLabel=e}if(!this.value||this.value===this.internallySetValue){this.value=e;this.internallySetValue=e}};e.prototype.connectedCallback=function(){this.ensureTextContentDependentProps();this.mutationObserver.observe(this.el,{characterData:true,subtree:true,attributeFilter:["label","value"]})};e.prototype.disconnectedCallback=function(){this.mutationObserver.disconnect()};e.prototype.render=function(){return r(i,null,r("slot",null,this.label))};Object.defineProperty(e.prototype,"el",{get:function(){return a(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{disabled:["handlePropChange"],label:["handlePropChange"],selected:["handlePropChange"],value:["handlePropChange"]}},enumerable:false,configurable:true});return e}());var u=e("calcite_option_group",function(){function e(e){t(this,e);this.calciteOptionGroupChange=n(this,"calciteOptionGroupChange",7);this.disabled=false}e.prototype.handlePropChange=function(){this.calciteOptionGroupChange.emit()};e.prototype.render=function(){return r(i,null,r("div",null,this.label),r("slot",null))};Object.defineProperty(e,"watchers",{get:function(){return{disabled:["handlePropChange"],label:["handlePropChange"]}},enumerable:false,configurable:true});return e}());var p={icon:"icon",iconContainer:"icon-container",select:"select"};var h="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{--calcite-icon-size:1rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{-ms-flex-align:stretch;align-items:stretch;display:-ms-flexbox;display:flex;position:relative;width:var(--select-width);--calcite-select-spacing-end:2rem}:host([scale=s]){--calcite-select-font-size:var(--calcite-font-size--2);--calcite-select-spacing:0.5rem}:host([scale=m]){--calcite-select-font-size:var(--calcite-font-size--1);--calcite-select-spacing:0.75rem}:host([scale=l]){--calcite-select-font-size:var(--calcite-font-size-1);--calcite-select-spacing:1rem}:host([width=auto]){--select-width:auto}:host([width=half]){--select-width:50%}:host([width=full]){--select-width:100%}.select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--calcite-ui-foreground-1);border:solid 1px var(--calcite-ui-border-1);border-right:none;border-radius:0;color:var(--calcite-ui-text-2);cursor:pointer;font-family:inherit;font-size:var(--calcite-select-font-size);margin:0;padding:var(--calcite-select-spacing);padding-right:var(--calcite-select-spacing-end);width:100%;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.select:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.select:hover{background-color:var(--calcite-ui-foreground-2)}:host([dir=rtl]) .select{padding-left:var(--calcite-select-spacing-end);padding-right:var(--calcite-select-spacing);border-right:solid 1px var(--calcite-ui-border-1);border-left:none}select:disabled{border-color:var(--calcite-ui-border-1);opacity:1}:host([disabled]){pointer-events:none;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}.icon-container{-ms-flex-align:center;align-items:center;background-color:transparent;border:solid 1px var(--calcite-ui-border-1);border-left:none;color:var(--calcite-ui-text-2);display:-ms-flexbox;display:flex;padding:0 var(--calcite-spacing-half);pointer-events:none;position:absolute;right:0;bottom:0;top:0}:host([dir=rtl]) .icon-container{border-left:solid 1px var(--calcite-ui-border-1);border-right:none;right:unset;left:0}.select:focus~.icon-container{border-color:transparent}";function f(e){return e.tagName==="CALCITE-OPTION"}function d(e){return e.tagName==="CALCITE-OPTION-GROUP"}var m=e("calcite_select",function(){function e(e){var r=this;t(this,e);this.calciteSelectChange=n(this,"calciteSelectChange",7);this.disabled=false;this.scale="m";this.width="auto";this.componentToNativeEl=new Map;this.mutationObserver=new MutationObserver((function(){return r.populateInternalSelect()}));this.handleInternalSelectChange=function(){var e=r.selectEl.selectedOptions[0];r.selectFromNativeOption(e);requestAnimationFrame((function(){return r.emitChangeEvent()}))};this.populateInternalSelect=function(){var e=Array.from(r.el.children);r.clearInternalSelect();e.forEach((function(e){var t;return(t=r.selectEl)===null||t===void 0?void 0:t.append(r.toNativeElement(e))}))};this.storeSelectRef=function(e){r.selectEl=e;r.populateInternalSelect();var t=r.selectEl.selectedOptions[0];r.selectFromNativeOption(t)};this.emitChangeEvent=function(){r.calciteSelectChange.emit()}}e.prototype.connectedCallback=function(){var e=this.el;this.mutationObserver.observe(e,{subtree:true,childList:true});if(!this.theme)this.theme=o(this.el,"theme","light")};e.prototype.disconnectedCallback=function(){this.mutationObserver.disconnect()};e.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){l(this.selectEl);return[2]}))}))};e.prototype.handleOptionOrGroupChange=function(e){e.stopPropagation();var t=e.target;var n=this.componentToNativeEl.get(t);if(!n){return}this.updateNativeElements(t,n);if(f(t)&&t.selected){this.deselectAllExcept(t)}};e.prototype.handleLabelFocus=function(e){var t=e.detail,n=t.requestedInput,r=t.labelEl;var i=this.el;if(r.contains(i)||n&&n===i.getAttribute("id")){this.setFocus();e.stopImmediatePropagation()}};e.prototype.updateNativeElements=function(e,t){t.disabled=e.disabled;t.label=e.label;if(f(e)){var n=t;n.selected=e.selected;n.value=e.value}};e.prototype.clearInternalSelect=function(){this.componentToNativeEl.forEach((function(e){return e.remove()}));this.componentToNativeEl.clear()};e.prototype.selectFromNativeOption=function(e){var t=this;if(!e){return}var n;this.componentToNativeEl.forEach((function(r,i){if(f(i)&&r===e){i.selected=true;n=i;t.deselectAllExcept(i)}}));if(n){requestAnimationFrame((function(){return t.selectedOption=n}))}};e.prototype.toNativeElement=function(e){var t=this;if(f(e)){var n=document.createElement("option");n.disabled=e.disabled;n.label=e.label;n.selected=e.selected;n.value=e.value;this.componentToNativeEl.set(e,n);return n}if(d(e)){var r=document.createElement("optgroup");r.disabled=e.disabled;r.label=e.label;Array.from(e.children).forEach((function(n){var i=t.toNativeElement(n);r.append(i);t.componentToNativeEl.set(e,i)}));this.componentToNativeEl.set(e,r);return r}throw new Error("unsupported element child provided")};e.prototype.deselectAllExcept=function(e){this.el.querySelectorAll("calcite-option").forEach((function(t){if(t===e){return}t.selected=false}))};e.prototype.renderChevron=function(){var e;return r("div",{class:(e={},e[p.iconContainer]=true,e)},r("calcite-icon",{class:p.icon,icon:"chevron-down",scale:"s"}))};e.prototype.render=function(){var e;var t=c(this.el);return r(i,{dir:t},r("select",{"aria-label":this.label,class:(e={},e[p.select]=true,e),disabled:this.disabled,onChange:this.handleInternalSelectChange,ref:this.storeSelectRef},r("slot",null)),this.renderChevron())};Object.defineProperty(e.prototype,"el",{get:function(){return a(this)},enumerable:false,configurable:true});return e}());m.style=h}}}));