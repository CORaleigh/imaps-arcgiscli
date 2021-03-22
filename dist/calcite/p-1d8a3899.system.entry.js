var __awaiter=this&&this.__awaiter||function(e,a,r,o){function t(e){return e instanceof r?e:new r((function(a){a(e)}))}return new(r||(r=Promise))((function(r,c){function i(e){try{l(o.next(e))}catch(e){c(e)}}function n(e){try{l(o.throw(e))}catch(e){c(e)}}function l(e){e.done?r(e.value):t(e.value).then(i,n)}l((o=o.apply(e,a||[])).next())}))},__generator=this&&this.__generator||function(e,a){var r,o,t,c,i={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return c={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function n(e){return function(a){return l([e,a])}}function l(c){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,o&&(t=2&c[0]?o.return:c[0]?o.throw||((t=o.return)&&t.call(o),0):o.next)&&!(t=t.call(o,c[1])).done)return t;switch(o=0,t&&(c=[2&c[0],t.value]),c[0]){case 0:case 1:t=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,o=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!(t=i.trys,(t=t.length>0&&t[t.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!t||c[1]>t[0]&&c[1]<t[3])){i.label=c[1];break}if(6===c[0]&&i.label<t[1]){i.label=t[1],t=c;break}if(t&&i.label<t[2]){i.label=t[2],i.ops.push(c);break}t[2]&&i.ops.pop(),i.trys.pop();continue}c=a.call(e,i)}catch(e){c=[6,e],o=0}finally{r=t=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}};System.register(["./p-4105a996.system.js","./p-7bf86ee3.system.js","./p-2c235db8.system.js"],(function(e){"use strict";var a,r,o,t,c,i,n;return{setters:[function(e){a=e.r,r=e.c,o=e.h,t=e.H,c=e.g},function(e){i=e.g},function(e){n=e.g}],execute:function(){var l="close",s="close";e("calcite_chip",function(){function e(e){var o=this;a(this,e),this.calciteChipDismiss=r(this,"calciteChipDismiss",7),this.appearance="solid",this.color="grey",this.dismissible=!1,this.dismissLabel=s,this.scale="m",this.closeClickHandler=function(e){e.preventDefault(),o.calciteChipDismiss.emit(o.el)},this.guid=n()}return e.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(a){return null===(e=this.closeButton)||void 0===e||e.focus(),[2]}))}))},e.prototype.render=function(){var e=this,a=i(this.el),r="l"!==this.scale?"s":"m",c=o("calcite-icon",{class:"calcite-chip--icon",dir:a,flipRtl:this.iconFlipRtl,icon:this.icon,scale:r}),n=o("button",{"aria-describedby":this.guid,"aria-label":this.dismissLabel,class:l,onClick:this.closeClickHandler,ref:function(a){return e.closeButton=a}},o("calcite-icon",{icon:"x",scale:r}));return o(t,{dir:a},o("slot",{name:"chip-image"}),this.icon?c:null,o("span",{id:this.guid},o("slot",null)),this.dismissible?n:null)},Object.defineProperty(e.prototype,"el",{get:function(){return c(this)},enumerable:!1,configurable:!0}),e}()).style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{--calcite-chip-transparent-hover:rgba(0, 0, 0, 0.05);--calcite-chip-transparent-press:rgba(0, 0, 0, 0.08)}:host([theme=dark]){--calcite-chip-transparent-hover:rgba(255, 255, 255, 0.05);--calcite-chip-transparent-press:rgba(255, 255, 255, 0.08)}:host([scale=s]){height:1.25rem;font-size:var(--calcite-font-size--3);--calcite-chip-spacing-unit-l:0.5rem;--calcite-chip-spacing-unit-s:0.25rem}:host([scale=s]) slot[name=chip-image]::slotted(*){height:1.25rem;width:1.25rem}:host([scale=m]){height:2rem;font-size:var(--calcite-font-size--2);--calcite-chip-spacing-unit-l:0.75rem;--calcite-chip-spacing-unit-s:6px}:host([scale=m]) slot[name=chip-image]::slotted(*){height:1.5rem;width:1.5rem;padding-left:0.25rem}:host([scale=l]){height:2.5rem;font-size:var(--calcite-font-size--1);--calcite-chip-spacing-unit-l:1rem;--calcite-chip-spacing-unit-s:0.5rem}:host([scale=l]) slot[name=chip-image]::slotted(*){height:2rem;width:2rem;padding-left:0.25rem}:host([dir=rtl][scale=m]) slot[name=chip-image]::slotted(*){padding-left:0;padding-right:0.25rem}:host([dir=rtl][scale=l]) slot[name=chip-image]::slotted(*){padding-left:0;padding-right:0.25rem}:host{--calcite-chip-button-border-radius:0 50px 50px 0;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;background-color:var(--calcite-ui-foreground-2);border-radius:50px;border:1px solid var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1);font-weight:500;cursor:default}:host button{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host button:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host([dir=rtl]){--calcite-chip-button-border-radius:50px 0 0 50px;text-align:right}:host span{padding:var(--calcite-chip-spacing-unit-s) var(--calcite-chip-spacing-unit-l)}:host([dismissible]) span{padding:var(--calcite-chip-spacing-unit-s) var(--calcite-chip-spacing-unit-s) var(--calcite-chip-spacing-unit-s) var(--calcite-chip-spacing-unit-l)}:host([dir=rtl][dismissible]) span{padding:var(--calcite-chip-spacing-unit-s) var(--calcite-chip-spacing-unit-l) var(--calcite-chip-spacing-unit-s) var(--calcite-chip-spacing-unit-s)}:host([icon]:not([dismissible])) span{padding:var(--calcite-chip-spacing-unit-s) var(--calcite-chip-spacing-unit-l) var(--calcite-chip-spacing-unit-s) var(--calcite-chip-spacing-unit-s)}:host([dir=rtl][icon]:not([dismissible])) span{padding:var(--calcite-chip-spacing-unit-s) var(--calcite-chip-spacing-unit-s) var(--calcite-chip-spacing-unit-s) var(--calcite-chip-spacing-unit-l)}:host button{margin:0;padding:0;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-item-align:stretch;align-self:stretch;-ms-flex-align:center;align-items:center;border-style:none;cursor:pointer;-webkit-appearance:none;background-color:transparent;border-radius:var(--calcite-chip-button-border-radius);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;padding:var(--calcite-chip-spacing-unit-s);cursor:pointer;color:var(--calcite-ui-text-1)}:host button:hover,:host button:focus{background-color:var(--calcite-ui-foreground-2);border-color:var(--calcite-ui-foreground-2)}:host button:active{background-color:var(--calcite-ui-foreground-3)}:host slot[name=chip-image]::slotted(*){border-radius:50%;overflow:hidden;display:-ms-inline-flexbox;display:inline-flex}.calcite-chip--icon{display:-ms-inline-flexbox;display:inline-flex;position:relative;margin:0 0 0 var(--calcite-chip-spacing-unit-l);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;border-radius:var(--calcite-chip-button-border-radius)}:host([dir=rtl]) .calcite-chip--icon{margin:0 var(--calcite-chip-spacing-unit-l) 0 0}:host([color=blue][appearance=solid]),:host([color=blue][appearance=solid]) button{border-color:var(--calcite-ui-brand);background-color:var(--calcite-ui-brand);color:var(--calcite-ui-foreground-1)}:host([appearance=solid]) button:hover,:host([appearance=solid]) button:focus{background-color:rgba(255, 255, 255, 0.1)}:host([appearance=solid]) button:active{background-color:rgba(0, 0, 0, 0.1)}:host([theme=dark][color=blue][appearance=solid]:not([color=grey])),:host([theme=dark][color=blue][appearance=solid]:not([color=grey])) button{color:var(--calcite-ui-background)}:host([color=blue][appearance=clear]){color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-brand-press);background-color:transparent}:host([color=blue][appearance=clear]) .calcite-chip--icon{color:var(--calcite-ui-brand-press)}:host([theme=dark][color=blue][appearance=clear]){border-color:var(--calcite-ui-brand-hover)}:host([color=blue][appearance=clear]) button:hover,:host([color=blue][appearance=clear]) button:focus{background-color:var(--calcite-chip-transparent-hover)}:host([color=blue][appearance=clear]) button:active{background-color:var(--calcite-chip-transparent-press)}:host([color=red][appearance=solid]),:host([color=red][appearance=solid]) button{border-color:var(--calcite-ui-danger);background-color:var(--calcite-ui-danger);color:var(--calcite-ui-foreground-1)}:host([appearance=solid]) button:hover,:host([appearance=solid]) button:focus{background-color:rgba(255, 255, 255, 0.1)}:host([appearance=solid]) button:active{background-color:rgba(0, 0, 0, 0.1)}:host([theme=dark][color=red][appearance=solid]:not([color=grey])),:host([theme=dark][color=red][appearance=solid]:not([color=grey])) button{color:var(--calcite-ui-background)}:host([color=red][appearance=clear]){color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-danger-press);background-color:transparent}:host([color=red][appearance=clear]) .calcite-chip--icon{color:var(--calcite-ui-danger-press)}:host([theme=dark][color=red][appearance=clear]){border-color:var(--calcite-ui-danger-hover)}:host([color=red][appearance=clear]) button:hover,:host([color=red][appearance=clear]) button:focus{background-color:var(--calcite-chip-transparent-hover)}:host([color=red][appearance=clear]) button:active{background-color:var(--calcite-chip-transparent-press)}:host([color=yellow][appearance=solid]),:host([color=yellow][appearance=solid]) button{border-color:var(--calcite-ui-warning);background-color:var(--calcite-ui-warning);color:var(--calcite-ui-text-1)}:host([appearance=solid]) button:hover,:host([appearance=solid]) button:focus{background-color:rgba(255, 255, 255, 0.1)}:host([appearance=solid]) button:active{background-color:rgba(0, 0, 0, 0.1)}:host([theme=dark][color=yellow][appearance=solid]:not([color=grey])),:host([theme=dark][color=yellow][appearance=solid]:not([color=grey])) button{color:var(--calcite-ui-background)}:host([color=yellow][appearance=clear]){color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-warning);background-color:transparent}:host([color=yellow][appearance=clear]) .calcite-chip--icon{color:var(--calcite-ui-warning)}:host([theme=dark][color=yellow][appearance=clear]){border-color:var(--calcite-ui-warning)}:host([color=yellow][appearance=clear]) button:hover,:host([color=yellow][appearance=clear]) button:focus{background-color:var(--calcite-chip-transparent-hover)}:host([color=yellow][appearance=clear]) button:active{background-color:var(--calcite-chip-transparent-press)}:host([color=green][appearance=solid]),:host([color=green][appearance=solid]) button{border-color:var(--calcite-ui-success);background-color:var(--calcite-ui-success);color:var(--calcite-ui-text-1)}:host([appearance=solid]) button:hover,:host([appearance=solid]) button:focus{background-color:rgba(255, 255, 255, 0.1)}:host([appearance=solid]) button:active{background-color:rgba(0, 0, 0, 0.1)}:host([theme=dark][color=green][appearance=solid]:not([color=grey])),:host([theme=dark][color=green][appearance=solid]:not([color=grey])) button{color:var(--calcite-ui-background)}:host([color=green][appearance=clear]){color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-success);background-color:transparent}:host([color=green][appearance=clear]) .calcite-chip--icon{color:var(--calcite-ui-success)}:host([theme=dark][color=green][appearance=clear]){border-color:var(--calcite-ui-success)}:host([color=green][appearance=clear]) button:hover,:host([color=green][appearance=clear]) button:focus{background-color:var(--calcite-chip-transparent-hover)}:host([color=green][appearance=clear]) button:active{background-color:var(--calcite-chip-transparent-press)}:host([color=grey][appearance=solid]),:host([color=grey][appearance=solid]) button{border-color:var(--calcite-ui-foreground-2);background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}:host([appearance=solid]) button:hover,:host([appearance=solid]) button:focus{background-color:rgba(255, 255, 255, 0.1)}:host([appearance=solid]) button:active{background-color:rgba(0, 0, 0, 0.1)}:host([theme=dark][color=grey][appearance=solid]:not([color=grey])),:host([theme=dark][color=grey][appearance=solid]:not([color=grey])) button{color:var(--calcite-ui-background)}:host([color=grey][appearance=clear]){color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-text-3);background-color:transparent}:host([color=grey][appearance=clear]) .calcite-chip--icon{color:var(--calcite-ui-text-1)}:host([theme=dark][color=grey][appearance=clear]){border-color:var(--calcite-ui-text-3-dark)}:host([color=grey][appearance=clear]) button:hover,:host([color=grey][appearance=clear]) button:focus{background-color:var(--calcite-chip-transparent-hover)}:host([color=grey][appearance=clear]) button:active{background-color:var(--calcite-chip-transparent-press)}"}}}));