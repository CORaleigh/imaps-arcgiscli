var __awaiter=this&&this.__awaiter||function(t,e,a,n){function r(t){return t instanceof a?t:new a((function(e){e(t)}))}return new(a||(a=Promise))((function(a,i){function s(t){try{l(n.next(t))}catch(e){i(e)}}function o(t){try{l(n["throw"](t))}catch(e){i(e)}}function l(t){t.done?a(t.value):r(t.value).then(s,o)}l((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var a={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,r,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(t){return function(e){return l([t,e])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(a)try{if(n=1,r&&(i=s[0]&2?r["return"]:s[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;if(r=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:a.label++;return{value:s[1],done:false};case 5:a.label++;r=s[1];s=[0];continue;case 7:s=a.ops.pop();a.trys.pop();continue;default:if(!(i=a.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){a=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(s[0]===6&&a.label<i[1]){a.label=i[1];i=s;break}if(i&&a.label<i[2]){a.label=i[2];a.ops.push(s);break}if(i[2])a.ops.pop();a.trys.pop();continue}s=e.call(t,a)}catch(o){s=[6,o];r=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-4105a996.system.js","./p-466a0799.system.js","./p-2c235db8.system.js"],(function(t){"use strict";var e,a,n,r,i,s,o,l;return{setters:[function(t){e=t.r;a=t.c;n=t.h;r=t.H;i=t.g},function(t){s=t.h;o=t.g},function(t){l=t.g}],execute:function(){var c={rating:"Rating",stars:"stars: ${num}"};var u="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]){--calcite-rating-spacing-unit:0.25rem}:host{--calcite-rating-spacing-unit:0.5rem}:host([scale=l]){--calcite-rating-spacing-unit:0.75rem}:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:relative;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}:host([disabled]){pointer-events:none;opacity:0.5}:host([read-only]){pointer-events:none}.fieldset{padding:0;margin:0;border-width:0;display:inline-block}.wrapper{margin-right:var(--calcite-rating-spacing-unit)}:host([dir=rtl]) .wrapper{margin-right:0;margin-left:var(--calcite-rating-spacing-unit)}.star{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;position:relative;display:inline-block;color:var(--calcite-ui-border-1);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;-webkit-transform:scale(1);transform:scale(1);cursor:pointer}.star:active{-webkit-transform:scale(1.1);transform:scale(1.1)}.focused{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.average,.fraction{color:var(--calcite-ui-warning)}.hovered,.selected,:host([read-only]) .average,:host([read-only]) .fraction{color:var(--calcite-ui-brand)}.hovered:not(.selected){-webkit-transform:scale(0.9);transform:scale(0.9)}:host .fraction{position:absolute;overflow:hidden;pointer-events:none;top:0;left:0;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host([dir=rtl]) .fraction{right:0;left:unset}calcite-chip{cursor:default;pointer-events:none}.number--average{font-weight:700}.number--count{font-style:italic;color:var(--calcite-ui-text-2)}.number--count:not(:first-child){margin-left:var(--calcite-rating-spacing-unit)}:host([dir=rtl]) .number--count:not(:first-child){margin-right:var(--calcite-rating-spacing-unit);margin-left:0}.visually-hidden{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}";var f=t("calcite_rating",function(){function t(t){e(this,t);this.calciteRatingChange=a(this,"calciteRatingChange",7);this.scale="m";this.value=0;this.readOnly=false;this.disabled=false;this.showChip=false;this.intlRating=c.rating;this.intlStars=c.stars;this.guid="calcite-ratings-"+l()}t.prototype.handleLabelFocus=function(t){if(s(t.detail.labelEl,this.el)&&t.detail.interactedEl!==this.el&&!this.el.contains(t.detail.interactedEl)){this.setFocus()}};t.prototype.blurHandler=function(){this.hasFocus=false};t.prototype.renderStars=function(){var t=this;return[1,2,3,4,5].map((function(e){var a=t.value>=e;var r=t.average&&!t.value&&e<=t.average;var i=e<=t.hoverValue;var s=t.average&&t.average+1-e;var o=!t.value&&!i&&s>0&&s<1;var l=t.hasFocus&&t.focusValue===e;return n("span",{class:{wrapper:true}},n("label",{class:{star:true,focused:l,selected:a,average:r,hovered:i,partial:o},htmlFor:t.guid+"-"+e,onMouseOver:function(){t.hoverValue=e}},n("calcite-icon",{"aria-hidden":"true",class:"icon",icon:a||r||t.readOnly?"star-f":"star",scale:t.scale}),o&&n("div",{class:"fraction",style:{width:s*100+"%"}},n("calcite-icon",{icon:"star-f",scale:t.scale,theme:t.theme})),n("span",{class:"visually-hidden"},t.intlStars.replace("${num}",""+e))),n("input",{checked:e===t.value,class:"visually-hidden",disabled:t.disabled||t.readOnly,id:t.guid+"-"+e,name:t.guid,onChange:function(){return t.updateValue(e)},onFocus:function(){t.hasFocus=true;t.focusValue=e},ref:function(a){return(e===1||e===t.value)&&(t.inputFocusRef=a)},type:"radio",value:e}))}))};t.prototype.render=function(){var t=this;var e=this,a=e.intlRating,i=e.showChip,s=e.scale,l=e.theme,c=e.count,u=e.average;var f=o(this.el);return n(r,{dir:f},n("fieldset",{class:"fieldset",onBlur:function(){return t.hoverValue=null},onMouseLeave:function(){return t.hoverValue=null},onTouchEnd:function(){return t.hoverValue=null}},n("legend",{class:"visually-hidden"},a),this.renderStars()),(c||u)&&i?n("calcite-chip",{dir:f,scale:s,theme:l,value:c===null||c===void 0?void 0:c.toString()},!!u&&n("span",{class:"number--average"},u.toString()),!!c&&n("span",{class:"number--count"},"(",c===null||c===void 0?void 0:c.toString(),")")):null)};t.prototype.updateValue=function(t){this.value=t;this.calciteRatingChange.emit({value:t})};t.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.inputFocusRef.focus();return[2]}))}))};Object.defineProperty(t.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});return t}());f.style=u}}}));