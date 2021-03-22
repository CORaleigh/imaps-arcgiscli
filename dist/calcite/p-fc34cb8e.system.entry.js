var __awaiter=this&&this.__awaiter||function(t,e,i,c){function n(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,a){function l(t){try{s(c.next(t))}catch(t){a(t)}}function r(t){try{s(c.throw(t))}catch(t){a(t)}}function s(t){t.done?i(t.value):n(t.value).then(l,r)}s((c=c.apply(t,e||[])).next())}))},__generator=this&&this.__generator||function(t,e){var i,c,n,a,l={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function r(t){return function(e){return s([t,e])}}function s(a){if(i)throw new TypeError("Generator is already executing.");for(;l;)try{if(i=1,c&&(n=2&a[0]?c.return:a[0]?c.throw||((n=c.return)&&n.call(c),0):c.next)&&!(n=n.call(c,a[1])).done)return n;switch(c=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return l.label++,{value:a[1],done:!1};case 5:l.label++,c=a[1],a=[0];continue;case 7:a=l.ops.pop(),l.trys.pop();continue;default:if(!(n=l.trys,(n=n.length>0&&n[n.length-1])||6!==a[0]&&2!==a[0])){l=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){l.label=a[1];break}if(6===a[0]&&l.label<n[1]){l.label=n[1],n=a;break}if(n&&l.label<n[2]){l.label=n[2],l.ops.push(a);break}n[2]&&l.ops.pop(),l.trys.pop();continue}a=e.call(t,l)}catch(t){a=[6,t],c=0}finally{i=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}};System.register(["./p-4105a996.system.js","./p-7bf86ee3.system.js","./p-f1259a9b.system.js"],(function(t){"use strict";var e,i,c,n,a,l,r,s,u,o;return{setters:[function(t){e=t.r,i=t.c,c=t.h,n=t.H,a=t.g},function(t){l=t.s,r=t.c,s=t.g,u=t.b},function(t){o=t.g}],execute:function(){var p={tel:"phone",password:"lock",email:"email-address",date:"calendar",time:"clock",search:"search"};t("calcite_input",function(){function t(t){var c=this;e(this,t),this.calciteInputFocus=i(this,"calciteInputFocus",7),this.calciteInputBlur=i(this,"calciteInputBlur",7),this.calciteInputInput=i(this,"calciteInputInput",7),this.alignment="start",this.autofocus=!1,this.loading=!1,this.numberButtonType="vertical",this.required=!1,this.scale="m",this.status="idle",this.type="text",this.value="",this.childElType="input",this.reset=function(){c.value=c.defaultValue},this.inputInputHandler=function(t){c.value=t.target.value},this.inputBlurHandler=function(){c.calciteInputBlur.emit({element:c.childEl,value:c.value})},this.inputFocusHandler=function(t){t.target!==c.slottedActionEl&&c.setFocus(),c.calciteInputFocus.emit({element:c.childEl,value:c.value})},this.clearInputValue=function(){c.value=""},this.updateNumberValue=function(t){if(t.preventDefault(),"input"===c.childElType&&"number"===c.type){var e=c.maxString?parseFloat(c.maxString):null,i=c.minString?parseFloat(c.minString):null,n=Number(c.stepString)>0?parseFloat(c.stepString):1,a=c.value&&""!==c.value?parseFloat(c.value):0;switch(t.target.dataset.adjustment){case"up":(!e&&0!==e||a<e)&&(c.childEl.value=(a+=n).toString());break;case"down":(!i&&0!==i||a>i)&&(c.childEl.value=(a-=n).toString())}c.value=c.childEl.value.toString()}}}return t.prototype.disabledWatcher=function(){this.disabled&&this.setDisabledAction()},t.prototype.maxWatcher=function(){var t;this.maxString=(null===(t=this.max)||void 0===t?void 0:t.toString())||null},t.prototype.minWatcher=function(){var t;this.minString=(null===(t=this.min)||void 0===t?void 0:t.toString())||null},t.prototype.stepWatcher=function(){var t;this.stepString=(null===(t=this.step)||void 0===t?void 0:t.toString())||null},t.prototype.valueWatcher=function(){this.calciteInputInput.emit({element:this.childEl,value:this.value})},t.prototype.updateRequestedIcon=function(){this.requestedIcon=l(p,this.icon,this.type)},t.prototype.connectedCallback=function(){var t;this.status=r(this.el,"status",this.status),this.scale=r(this.el,"scale",this.scale),this.form=this.el.closest("form"),null===(t=this.form)||void 0===t||t.addEventListener("reset",this.reset)},t.prototype.disconnectedCallback=function(){var t;null===(t=this.form)||void 0===t||t.removeEventListener("reset",this.reset)},t.prototype.componentWillLoad=function(){var t,e,i;this.defaultValue=this.value,this.childElType="textarea"===this.type?"textarea":"input",this.requestedIcon=l(p,this.icon,this.type),this.minString=null===(t=this.min)||void 0===t?void 0:t.toString(),this.maxString=null===(e=this.max)||void 0===e?void 0:e.toString(),this.stepString=null===(i=this.step)||void 0===i?void 0:i.toString()},t.prototype.componentDidLoad=function(){this.slottedActionEl=this.el.querySelector("[slot=input-action]"),this.disabled&&this.setDisabledAction()},Object.defineProperty(t.prototype,"isTextarea",{get:function(){return"textarea"===this.childElType},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isClearable",{get:function(){return!this.isTextarea&&(this.clearable||"search"===this.type)&&this.value.length>0},enumerable:!1,configurable:!0}),t.prototype.render=function(){var t=this,e=s(this.el),i=u(this.el,["alignment","dir","clearable","min","max","step","value","icon","loading","prefix-text","scale","status","suffix-text","theme","number-button-type"]),a=c("div",{class:"calcite-input-loading"},c("calcite-progress",{type:"indeterminate"})),l="s"===this.scale||"m"===this.scale?"s":"m",r=c("button",{class:"calcite-input-clear-button",disabled:this.loading,onClick:this.clearInputValue},c("calcite-icon",{icon:"x",scale:l,theme:this.theme})),o=c("calcite-icon",{class:"calcite-input-icon",dir:e,flipRtl:this.iconFlipRtl,icon:this.requestedIcon,scale:l,theme:this.theme}),p="horizontal"===this.numberButtonType?"number-button-item-horizontal":null,h=c("div",{class:"calcite-input-number-button-item "+p,"data-adjustment":"up",onMouseDown:this.updateNumberValue},c("calcite-icon",{icon:"chevron-up",scale:l,theme:this.theme})),d=c("div",{class:"calcite-input-number-button-item "+p,"data-adjustment":"down",onMouseDown:this.updateNumberValue},c("calcite-icon",{icon:"chevron-down",scale:l,theme:this.theme})),b=c("div",{class:"calcite-input-number-button-wrapper"},h,d),m=c("div",{class:"calcite-input-prefix"},this.prefixText),f=c("div",{class:"calcite-input-suffix"},this.suffixText),x=[c(this.childElType,Object.assign({},i,{autofocus:!!this.autofocus||null,defaultValue:this.defaultValue,disabled:!!this.disabled||null,max:this.maxString,maxlength:this.maxlength,min:this.minString,onBlur:this.inputBlurHandler,onFocus:this.inputFocusHandler,onInput:this.inputInputHandler,placeholder:this.placeholder||"",ref:function(e){return t.childEl=e},required:!!this.required||null,step:this.stepString,tabIndex:this.disabled?-1:null,type:this.type,value:this.value}),this.value),this.isTextarea?c("div",{class:"calcite-input-resize-icon-wrapper"},c("calcite-icon",{icon:"chevron-down",scale:"s"})):null];return c(n,{dir:e,onClick:this.inputFocusHandler},c("div",{class:"calcite-input-wrapper"},"number"===this.type&&"horizontal"===this.numberButtonType?d:null,this.prefixText?m:null,c("div",{class:"calcite-input-element-wrapper"},x,this.isClearable?r:null,this.requestedIcon?o:null,this.loading?a:null),c("div",{class:"calcite-input-action-wrapper"},c("slot",{name:"input-action"})),"number"===this.type&&"vertical"===this.numberButtonType?b:null,this.suffixText?f:null,"number"===this.type&&"horizontal"===this.numberButtonType?h:null))},t.prototype.keyDownHandler=function(t){this.isClearable&&"Escape"===o(t.key)&&this.clearInputValue()},t.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){return null===(t=this.childEl)||void 0===t||t.focus(),[2]}))}))},t.prototype.setDisabledAction=function(){this.slottedActionEl&&this.slottedActionEl.setAttribute("disabled","")},Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{disabled:["disabledWatcher"],max:["maxWatcher"],min:["minWatcher"],step:["stepWatcher"],value:["valueWatcher"],icon:["updateRequestedIcon"],type:["updateRequestedIcon"]}},enumerable:!1,configurable:!0}),t}()).style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}.sc-calcite-input:root{--calcite-popper-transition:150ms ease-in-out}[hidden].sc-calcite-input-h{display:none}[scale=s].sc-calcite-input-h textarea.sc-calcite-input,[scale=s].sc-calcite-input-h input.sc-calcite-input,[scale=s].sc-calcite-input-h .calcite-input-prefix.sc-calcite-input,[scale=s].sc-calcite-input-h .calcite-input-suffix.sc-calcite-input{font-size:var(--calcite-font-size--2);padding:0.5rem;height:2rem}[scale=s].sc-calcite-input-h textarea.sc-calcite-input{min-height:32px}[scale=s].sc-calcite-input-h .calcite-input-number-button-wrapper.sc-calcite-input,[scale=s].sc-calcite-input-h .calcite-input-action-wrapper.sc-calcite-input calcite-button.sc-calcite-input,[scale=s].sc-calcite-input-h .calcite-input-action-wrapper.sc-calcite-input calcite-button.sc-calcite-input button.sc-calcite-input{height:2rem}[scale=s].sc-calcite-input-h textarea.sc-calcite-input,[scale=s].sc-calcite-input-h input[type=file].sc-calcite-input{height:auto}[scale=s].sc-calcite-input-h .calcite-input-clear-button.sc-calcite-input{min-height:32px;min-width:32px}[scale=m].sc-calcite-input-h textarea.sc-calcite-input,[scale=m].sc-calcite-input-h input.sc-calcite-input,[scale=m].sc-calcite-input-h .calcite-input-prefix.sc-calcite-input,[scale=m].sc-calcite-input-h .calcite-input-suffix.sc-calcite-input{font-size:var(--calcite-font-size--1);padding:0.75rem;height:44px}[scale=m].sc-calcite-input-h textarea.sc-calcite-input{min-height:44px}[scale=m].sc-calcite-input-h .calcite-input-number-button-wrapper.sc-calcite-input,[scale=m].sc-calcite-input-h .calcite-input-action-wrapper.sc-calcite-input calcite-button.sc-calcite-input,[scale=m].sc-calcite-input-h .calcite-input-action-wrapper.sc-calcite-input calcite-button.sc-calcite-input button.sc-calcite-input{height:44px}[scale=m].sc-calcite-input-h textarea.sc-calcite-input,[scale=m].sc-calcite-input-h input[type=file].sc-calcite-input{height:auto}[scale=m].sc-calcite-input-h .calcite-input-clear-button.sc-calcite-input{min-height:44px;min-width:44px}[scale=l].sc-calcite-input-h textarea.sc-calcite-input,[scale=l].sc-calcite-input-h input.sc-calcite-input,[scale=l].sc-calcite-input-h .calcite-input-prefix.sc-calcite-input,[scale=l].sc-calcite-input-h .calcite-input-suffix.sc-calcite-input{font-size:var(--calcite-font-size-1);padding:1rem;height:56px}[scale=l].sc-calcite-input-h textarea.sc-calcite-input{min-height:56px}[scale=l].sc-calcite-input-h .calcite-input-number-button-wrapper.sc-calcite-input,[scale=l].sc-calcite-input-h .calcite-input-action-wrapper.sc-calcite-input calcite-button.sc-calcite-input,[scale=l].sc-calcite-input-h .calcite-input-action-wrapper.sc-calcite-input calcite-button.sc-calcite-input button.sc-calcite-input{height:56px}[scale=l].sc-calcite-input-h textarea.sc-calcite-input,[scale=l].sc-calcite-input-h input[type=file].sc-calcite-input{height:auto}[scale=l].sc-calcite-input-h .calcite-input-clear-button.sc-calcite-input{min-height:56px;min-width:56px}[disabled].sc-calcite-input-h{pointer-events:none}[disabled].sc-calcite-input-h .calcite-input-wrapper.sc-calcite-input{opacity:var(--calcite-ui-opacity-disabled);pointer-events:none}[disabled].sc-calcite-input-h textarea.sc-calcite-input,[disabled].sc-calcite-input-h input.sc-calcite-input{pointer-events:none}.sc-calcite-input-h textarea.sc-calcite-input,.sc-calcite-input-h input.sc-calcite-input{display:-ms-flexbox;display:flex;position:relative;min-width:20%;max-width:100%;max-height:100%;-ms-flex:1;flex:1;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;font-family:inherit;-webkit-transition:150ms ease-in-out, height 0s;transition:150ms ease-in-out, height 0s;-webkit-box-shadow:0 0 0 0 transparent;box-shadow:0 0 0 0 transparent;outline:0;margin:0;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-1);font-weight:400;border-radius:0;-webkit-border-radius:0}.sc-calcite-input-h input[type=search].sc-calcite-input::-webkit-search-decoration{-webkit-appearance:none}.sc-calcite-input-h textarea.sc-calcite-input,.sc-calcite-input-h input.sc-calcite-input{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.sc-calcite-input-h textarea.sc-calcite-input:focus,.sc-calcite-input-h input.sc-calcite-input:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.sc-calcite-input-h input.sc-calcite-input,.sc-calcite-input-h textarea.sc-calcite-input{color:var(--calcite-ui-text-1);border:1px solid var(--calcite-ui-border-1)}.sc-calcite-input-h input.sc-calcite-input:-ms-input-placeholder,.sc-calcite-input-h textarea.sc-calcite-input:-ms-input-placeholder{color:var(--calcite-ui-text-3);font-weight:400}.sc-calcite-input-h input.sc-calcite-input::-ms-input-placeholder,.sc-calcite-input-h textarea.sc-calcite-input::-ms-input-placeholder{color:var(--calcite-ui-text-3);font-weight:400}.sc-calcite-input-h input.sc-calcite-input::placeholder,.sc-calcite-input-h input.sc-calcite-input:-ms-input-placeholder,.sc-calcite-input-h input.sc-calcite-input::-ms-input-placeholder,.sc-calcite-input-h textarea.sc-calcite-input::placeholder,.sc-calcite-input-h textarea.sc-calcite-input:-ms-input-placeholder,.sc-calcite-input-h textarea.sc-calcite-input::-ms-input-placeholder{color:var(--calcite-ui-text-3);font-weight:400}.sc-calcite-input-h input.sc-calcite-input:focus,.sc-calcite-input-h textarea.sc-calcite-input:focus{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-1)}.sc-calcite-input-h input[readonly].sc-calcite-input,.sc-calcite-input-h textarea[readonly].sc-calcite-input{background-color:var(--calcite-ui-background)}.sc-calcite-input-h input[readonly].sc-calcite-input:focus,.sc-calcite-input-h textarea[readonly].sc-calcite-input:focus{color:var(--calcite-ui-text-1)}.sc-calcite-input-h calcite-icon.sc-calcite-input{color:var(--calcite-ui-text-1)}.sc-calcite-input-h slot.sc-calcite-input:not[name=input-message]{display:block;margin-bottom:0.375rem;color:var(--calcite-ui-text-2);font-weight:500}[icon].sc-calcite-input-h input.sc-calcite-input{padding-left:2.25rem}[dir=rtl][icon].sc-calcite-input-h input.sc-calcite-input{padding-right:2.25rem;padding-left:0.75rem}[dir=rtl][icon][scale=l].sc-calcite-input-h input.sc-calcite-input{padding-right:3rem;padding-left:0.75rem}[icon][scale=l].sc-calcite-input-h input.sc-calcite-input{padding-left:3rem}.calcite-input-element-wrapper.sc-calcite-input{display:-ms-inline-flexbox;display:inline-flex;-ms-flex:1;flex:1;min-width:20%;position:relative;-ms-flex-order:3;order:3}.calcite-input-icon.sc-calcite-input{display:block;position:absolute;pointer-events:none;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;top:calc(50% - 9px);left:0.75rem;margin:1px auto 0;z-index:1}[scale=l].sc-calcite-input-h .calcite-input-icon.sc-calcite-input{top:calc(50% - 12px)}[dir=rtl].sc-calcite-input-h .calcite-input-icon.sc-calcite-input{left:unset;right:0.75rem}input[type=text].sc-calcite-input::-ms-clear{display:none;width:0;height:0}input[type=text].sc-calcite-input::-ms-reveal{display:none;width:0;height:0}input[type=search].sc-calcite-input::-webkit-search-decoration,input[type=search].sc-calcite-input::-webkit-search-cancel-button,input[type=search].sc-calcite-input::-webkit-search-results-button,input[type=search].sc-calcite-input::-webkit-search-results-decoration,input[type=date].sc-calcite-input::-webkit-clear-button,input[type=time].sc-calcite-input::-webkit-clear-button{display:none}.calcite-input-clear-button.sc-calcite-input{display:-ms-flexbox;display:flex;-ms-flex-item-align:stretch;align-self:stretch;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;min-height:100%;border:1px solid var(--calcite-ui-border-1);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;pointer-events:initial;background-color:var(--calcite-ui-foreground-1);border-left:none;-ms-flex-order:4;order:4}.calcite-input-clear-button.sc-calcite-input:hover,.calcite-input-clear-button.sc-calcite-input:focus{background-color:var(--calcite-ui-foreground-2)}.calcite-input-clear-button.sc-calcite-input:active{background-color:var(--calcite-ui-foreground-3)}.calcite-input-clear-button.sc-calcite-input:disabled{opacity:var(--calcite-ui-opacity-disabled)}[dir=rtl].sc-calcite-input-h .calcite-input-clear-button.sc-calcite-input{border-left:1px solid var(--calcite-ui-border-1);border-right:none}.calcite-input-clear-button.sc-calcite-input{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.calcite-input-clear-button.sc-calcite-input:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.calcite-input-loading.sc-calcite-input{display:block;pointer-events:none;position:absolute;top:1px;left:1px;right:1px}.calcite-input-action-wrapper.sc-calcite-input{display:-ms-flexbox;display:flex;-ms-flex-order:7;order:7}.calcite-input-prefix.sc-calcite-input,.calcite-input-suffix.sc-calcite-input{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;height:auto;min-height:100%;word-break:break-word;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;font-weight:500;border:1px solid var(--calcite-ui-border-1);background-color:var(--calcite-ui-background);color:var(--calcite-ui-text-2);line-height:1}.calcite-input-prefix.sc-calcite-input{-ms-flex-order:2;order:2;border-right-width:0px}.calcite-input-suffix.sc-calcite-input{-ms-flex-order:5;order:5;border-left-width:0px}[dir=rtl].sc-calcite-input-h .calcite-input-prefix.sc-calcite-input{border-right-width:1px;border-left-width:0px}[dir=rtl].sc-calcite-input-h .calcite-input-suffix.sc-calcite-input{border-left-width:1px;border-right-width:0px}[readonly].sc-calcite-input-h .calcite-input-number-button-item.sc-calcite-input{pointer-events:none}[alignment=start].sc-calcite-input-h textarea.sc-calcite-input,[alignment=start].sc-calcite-input-h input.sc-calcite-input{text-align:left}[alignment=end].sc-calcite-input-h textarea.sc-calcite-input,[alignment=end].sc-calcite-input-h input.sc-calcite-input{text-align:right}[dir=rtl][alignment=start].sc-calcite-input-h textarea.sc-calcite-input,[dir=rtl][alignment=start].sc-calcite-input-h input.sc-calcite-input{text-align:right}[dir=rtl][alignment=end].sc-calcite-input-h textarea.sc-calcite-input,[dir=rtl][alignment=end].sc-calcite-input-h input.sc-calcite-input{text-align:left}.sc-calcite-input-h input[type=number].sc-calcite-input{-moz-appearance:textfield}.sc-calcite-input-h input[type=number].sc-calcite-input::-webkit-inner-spin-button,.sc-calcite-input-h input[type=number].sc-calcite-input::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:textfield;margin:0}.calcite-input-number-button-wrapper.sc-calcite-input{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;box-sizing:border-box;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;pointer-events:none;-ms-flex-order:6;order:6}[number-button-type=vertical].sc-calcite-input-h .calcite-input-wrapper.sc-calcite-input{-ms-flex-direction:row;flex-direction:row;display:-ms-flexbox;display:flex}[number-button-type=vertical].sc-calcite-input-h input.sc-calcite-input,[number-button-type=vertical].sc-calcite-input-h textarea.sc-calcite-input{-ms-flex-order:2;order:2}[dir=rtl][number-button-type=horizontal].sc-calcite-input-h .calcite-input-number-button-item[data-adjustment=down].sc-calcite-input calcite-icon.sc-calcite-input{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}[dir=rtl][number-button-type=horizontal].sc-calcite-input-h .calcite-input-number-button-item[data-adjustment=up].sc-calcite-input calcite-icon.sc-calcite-input{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.calcite-input-number-button-item.number-button-item-horizontal[data-adjustment=down].sc-calcite-input,.calcite-input-number-button-item.number-button-item-horizontal[data-adjustment=up].sc-calcite-input{min-height:100%;max-height:100%;-ms-flex-order:1;order:1;-ms-flex-item-align:auto;align-self:auto}.calcite-input-number-button-item.number-button-item-horizontal[data-adjustment=down].sc-calcite-input calcite-icon.sc-calcite-input,.calcite-input-number-button-item.number-button-item-horizontal[data-adjustment=up].sc-calcite-input calcite-icon.sc-calcite-input{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.calcite-input-number-button-item.number-button-item-horizontal[data-adjustment=down].sc-calcite-input{border-left:1px solid var(--calcite-ui-border-1);border-right:0px}.calcite-input-number-button-item.number-button-item-horizontal[data-adjustment=up].sc-calcite-input{-ms-flex-order:5;order:5}[dir=rtl].sc-calcite-input-h .calcite-input-number-button-item.number-button-item-horizontal[data-adjustment=down].sc-calcite-input{border-right:1px solid var(--calcite-ui-border-1);border-left:0px}[dir=rtl].sc-calcite-input-h .calcite-input-number-button-item.number-button-item-horizontal[data-adjustment=up].sc-calcite-input{border-left:1px solid var(--calcite-ui-border-1);border-right:0px}[number-button-type=vertical].sc-calcite-input-h .calcite-input-number-button-item[data-adjustment=down].sc-calcite-input{border-top:0}.calcite-input-number-button-item.sc-calcite-input{display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;max-height:50%;min-height:50%;padding:0 0.75rem;border:1px solid var(--calcite-ui-border-1);-webkit-transition:background-color 0.15s ease-in-out;transition:background-color 0.15s ease-in-out;pointer-events:initial;background-color:var(--calcite-ui-foreground-1);border-left:none}.calcite-input-number-button-item.sc-calcite-input calcite-icon.sc-calcite-input{pointer-events:none}.calcite-input-number-button-item.sc-calcite-input:hover,.calcite-input-number-button-item.sc-calcite-input:focus{background-color:var(--calcite-ui-foreground-2)}.calcite-input-number-button-item.sc-calcite-input:active{background-color:var(--calcite-ui-foreground-3)}[dir=rtl][number-button-type=vertical].sc-calcite-input-h .calcite-input-number-button-item.sc-calcite-input{border-right:none;border-left:1px solid var(--calcite-ui-border-1)}.calcite-input-wrapper.sc-calcite-input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;position:relative}.sc-calcite-input-h input.sc-calcite-input::-webkit-calendar-picker-indicator{display:none}.sc-calcite-input-h input[type=date].sc-calcite-input::-webkit-input-placeholder{visibility:hidden !important}.sc-calcite-input-h textarea.sc-calcite-input::-webkit-resizer{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;bottom:0;right:0;padding:0 0.375rem}@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none){.calcite-input-resize-icon-wrapper.sc-calcite-input{display:none}}.calcite-input-resize-icon-wrapper.sc-calcite-input{background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-3);position:absolute;z-index:1;bottom:2px;right:2px;pointer-events:none;width:16px;height:16px}.calcite-input-resize-icon-wrapper.sc-calcite-input calcite-icon.sc-calcite-input{bottom:4px;right:4px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}[dir=rtl].sc-calcite-input-h textarea.sc-calcite-input::-webkit-resizer{left:0;right:unset}[dir=rtl].sc-calcite-input-h .calcite-input-resize-icon-wrapper.sc-calcite-input{left:2px;right:unset}[dir=rtl].sc-calcite-input-h .calcite-input-resize-icon-wrapper.sc-calcite-input calcite-icon.sc-calcite-input{bottom:4px;right:4px;-webkit-transform:rotate(45deg);transform:rotate(45deg)}[type=file].sc-calcite-input-h input.sc-calcite-input,[type=file].sc-calcite-input-h textarea.sc-calcite-input{cursor:pointer;padding:1.5rem;border:1px dashed #d4d4d4;background-color:#f8f8f8;text-align:center}.no-bottom-border.sc-calcite-input-h input.sc-calcite-input.sc-calcite-input{border-bottom:none}[status=invalid].sc-calcite-input-h .calcite-input-icon.sc-calcite-input{color:var(--calcite-ui-danger)}[status=valid].sc-calcite-input-h .calcite-input-icon.sc-calcite-input{color:var(--calcite-ui-success)}[status=idle].sc-calcite-input-h .calcite-input-icon.sc-calcite-input{color:var(--calcite-ui-text-2)}"}}}));