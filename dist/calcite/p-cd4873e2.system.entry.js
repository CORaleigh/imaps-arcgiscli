var __awaiter=this&&this.__awaiter||function(t,e,r,o){function i(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,n){function a(t){try{p(o.next(t))}catch(e){n(e)}}function s(t){try{p(o["throw"](t))}catch(e){n(e)}}function p(t){t.done?r(t.value):i(t.value).then(a,s)}p((o=o.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},o,i,n,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return p([t,e])}}function p(a){if(o)throw new TypeError("Generator is already executing.");while(r)try{if(o=1,i&&(n=a[0]&2?i["return"]:a[0]?i["throw"]||((n=i["return"])&&n.call(i),0):i.next)&&!(n=n.call(i,a[1])).done)return n;if(i=0,n)a=[a[0]&2,n.value];switch(a[0]){case 0:case 1:n=a;break;case 4:r.label++;return{value:a[1],done:false};case 5:r.label++;i=a[1];a=[0];continue;case 7:a=r.ops.pop();r.trys.pop();continue;default:if(!(n=r.trys,n=n.length>0&&n[n.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!n||a[1]>n[0]&&a[1]<n[3])){r.label=a[1];break}if(a[0]===6&&r.label<n[1]){r.label=n[1];n=a;break}if(n&&r.label<n[2]){r.label=n[2];r.ops.push(a);break}if(n[2])r.ops.pop();r.trys.pop();continue}a=e.call(t,r)}catch(s){a=[6,s];i=0}finally{o=n=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-4105a996.system.js","./p-466a0799.system.js","./p-f1259a9b.system.js","./p-2c235db8.system.js","./p-9b59fbd8.system.js"],(function(t){"use strict";var e,r,o,i,n,a,s,p,l,c,f;return{setters:[function(t){e=t.r;r=t.h;o=t.H;i=t.g},function(t){n=t.d},function(t){a=t.g},function(t){s=t.g},function(t){p=t.d;l=t.u;c=t.c;f=t.C}],execute:function(){var u={container:"container",arrow:"arrow"};var m=500;var h="data-calcite-tooltip-reference";var d="aria-describedby";var v='@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block;position:absolute;z-index:999;-webkit-transform:scale(0);transform:scale(0)}.calcite-popper-anim{position:relative;z-index:1;-webkit-transition:var(--calcite-popper-transition);transition:var(--calcite-popper-transition);visibility:hidden;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform;opacity:0;-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);border-radius:var(--calcite-border-radius)}:host([data-popper-placement^=bottom]) .calcite-popper-anim{-webkit-transform:translateY(-5px);transform:translateY(-5px)}:host([data-popper-placement^=top]) .calcite-popper-anim{-webkit-transform:translateY(5px);transform:translateY(5px)}:host([data-popper-placement^=left]) .calcite-popper-anim{-webkit-transform:translateX(5px);transform:translateX(5px)}:host([data-popper-placement^=right]) .calcite-popper-anim{-webkit-transform:translateX(-5px);transform:translateX(-5px)}:host([data-popper-placement]) .calcite-popper-anim--active{opacity:1;visibility:visible;-webkit-transform:translate(0);transform:translate(0)}.arrow,.arrow::before{position:absolute;width:8px;height:8px;z-index:-1}.arrow::before{content:"";-webkit-box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--calcite-ui-foreground-1)}:host([data-popper-placement^=top]) .arrow{bottom:-4px}:host([data-popper-placement^=bottom]) .arrow{top:-4px}:host([data-popper-placement^=left]) .arrow{right:-4px}:host([data-popper-placement^=right]) .arrow{left:-4px}.container{position:relative;background:var(--calcite-ui-foreground-1);max-width:300px;max-height:300px;display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-direction:column;flex-direction:column;font-weight:500;color:var(--calcite-ui-text-1);padding:12px 16px;overflow:hidden;font-size:0.8125rem;line-height:1.5}';var y=t("calcite_tooltip",function(){function t(t){var r=this;e(this,t);this.offsetDistance=p;this.offsetSkidding=0;this.open=false;this.placement="auto";this._referenceElement=this.getReferenceElement();this.guid="calcite-tooltip-"+s();this.getId=function(){return r.el.id||r.guid};this.addReferences=function(){var t=r._referenceElement;if(!t){return}var e=r.getId();t.setAttribute(h,e);t.setAttribute(d,e)};this.removeReferences=function(){var t=r._referenceElement;if(!t){return}t.removeAttribute(h);t.removeAttribute(d)};this.show=function(){r.open=true};this.hide=function(){r.open=false}}t.prototype.offsetDistanceOffsetHandler=function(){this.reposition()};t.prototype.offsetSkiddingHandler=function(){this.reposition()};t.prototype.openHandler=function(){this.reposition()};t.prototype.placementHandler=function(){this.reposition()};t.prototype.referenceElementHandler=function(){this.removeReferences();this._referenceElement=this.getReferenceElement();this.addReferences();this.createPopper()};t.prototype.componentDidLoad=function(){this.addReferences();this.createPopper()};t.prototype.disconnectedCallback=function(){this.removeReferences();this.destroyPopper()};t.prototype.reposition=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,r,o,i;return __generator(this,(function(n){t=this,e=t.popper,r=t.el,o=t.placement;i=this.getModifiers();e?l({el:r,modifiers:i,placement:o,popper:e}):this.createPopper();return[2]}))}))};t.prototype.getReferenceElement=function(){var t=this.referenceElement;return(typeof t==="string"?document.getElementById(t):t)||null};t.prototype.getModifiers=function(){var t=this,e=t.arrowEl,r=t.offsetDistance,o=t.offsetSkidding;var i={name:"arrow",enabled:true,options:{element:e}};var n={name:"offset",enabled:true,options:{offset:[o,r]}};return[i,n]};t.prototype.createPopper=function(){this.destroyPopper();var t=this,e=t.el,r=t.placement,o=t._referenceElement;var i=this.getModifiers();this.popper=c({el:e,modifiers:i,placement:r,referenceEl:o})};t.prototype.destroyPopper=function(){var t=this.popper;if(t){t.destroy()}this.popper=null};t.prototype.render=function(){var t;var e=this;var i=this,n=i._referenceElement,a=i.label,s=i.open;var p=n&&s;var l=!p;return r(o,{"aria-hidden":l.toString(),"aria-label":a,"calcite-hydrated-hidden":l,id:this.getId(),role:"tooltip"},r("div",{class:(t={},t[f.animation]=true,t[f.animationActive]=p,t)},r("div",{class:u.arrow,ref:function(t){return e.arrowEl=t}}),r("div",{class:u.container},r("slot",null))))};Object.defineProperty(t.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}},enumerable:false,configurable:true});return t}());y.style=v;var b=t("calcite_tooltip_manager",function(){function t(t){var r=this;e(this,t);this.hoverTimeouts=new WeakMap;this.selector="["+h+"]";this.queryTooltip=function(t){return n(t.closest(r.selector),h)};this.clearHoverTimeout=function(t){var e=r.hoverTimeouts;if(e.has(t)){window.clearTimeout(e.get(t))}};this.closeExistingTooltip=function(){var t=r.tooltipEl;if(t){r.toggleTooltip(t,false)}};this.focusTooltip=function(t){var e=t.tooltip,o=t.value;r.closeExistingTooltip();if(o){r.clearHoverTimeout(e)}r.toggleTooltip(e,o)};this.toggleTooltip=function(t,e){t.open=e;if(e){r.tooltipEl=t}};this.hoverToggle=function(t){var e=t.tooltip,o=t.value;var i=r.hoverTimeouts;i.delete(e);if(o){r.closeExistingTooltip()}r.toggleTooltip(e,o)};this.hoverTooltip=function(t){var e=t.tooltip,o=t.value;r.clearHoverTimeout(e);var i=r.hoverTimeouts;var n=window.setTimeout((function(){return r.hoverToggle({tooltip:e,value:o})}),m);i.set(e,n)};this.activeTooltipHover=function(t){var e=r,o=e.tooltipEl,i=e.hoverTimeouts;if(!o||!i.has(o)){return}var n=t.composedPath().includes(o);n?r.clearHoverTimeout(o):r.hoverTooltip({tooltip:o,value:false})};this.hoverEvent=function(t,e){var o=r.queryTooltip(t.target);r.activeTooltipHover(t);if(!o){return}r.hoverTooltip({tooltip:o,value:e})};this.focusEvent=function(t,e){var o=r.queryTooltip(t.target);if(!o){return}r.focusTooltip({tooltip:o,value:e})}}t.prototype.render=function(){return r(o,null)};t.prototype.keyUpHandler=function(t){if(a(t.key)==="Escape"){var e=this.tooltipEl;if(e){this.clearHoverTimeout(e);this.toggleTooltip(e,false)}}};t.prototype.mouseEnterShow=function(t){this.hoverEvent(t,true)};t.prototype.mouseLeaveHide=function(t){this.hoverEvent(t,false)};t.prototype.focusShow=function(t){this.focusEvent(t,true)};t.prototype.blurHide=function(t){this.focusEvent(t,false)};return t}())}}}));