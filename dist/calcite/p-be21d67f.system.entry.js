var __awaiter=this&&this.__awaiter||function(t,e,i,a){function s(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,r){function n(t){try{l(a.next(t))}catch(e){r(e)}}function o(t){try{l(a["throw"](t))}catch(e){r(e)}}function l(t){t.done?i(t.value):s(t.value).then(n,o)}l((a=a.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},a,s,r,n;return n={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(n[Symbol.iterator]=function(){return this}),n;function o(t){return function(e){return l([t,e])}}function l(n){if(a)throw new TypeError("Generator is already executing.");while(i)try{if(a=1,s&&(r=n[0]&2?s["return"]:n[0]?s["throw"]||((r=s["return"])&&r.call(s),0):s.next)&&!(r=r.call(s,n[1])).done)return r;if(s=0,r)n=[n[0]&2,r.value];switch(n[0]){case 0:case 1:r=n;break;case 4:i.label++;return{value:n[1],done:false};case 5:i.label++;s=n[1];n=[0];continue;case 7:n=i.ops.pop();i.trys.pop();continue;default:if(!(r=i.trys,r=r.length>0&&r[r.length-1])&&(n[0]===6||n[0]===2)){i=0;continue}if(n[0]===3&&(!r||n[1]>r[0]&&n[1]<r[3])){i.label=n[1];break}if(n[0]===6&&i.label<r[1]){i.label=r[1];r=n;break}if(r&&i.label<r[2]){i.label=r[2];i.ops.push(n);break}if(r[2])i.ops.pop();i.trys.pop();continue}n=e.call(t,i)}catch(o){n=[6,o];s=0}finally{a=r=0}if(n[0]&5)throw n[1];return{value:n[0]?n[1]:void 0,done:true}}};System.register(["./p-4105a996.system.js","./p-7bf86ee3.system.js"],(function(t){"use strict";var e,i,a,s,r,n;return{setters:[function(t){e=t.r;i=t.c;a=t.h;s=t.H;r=t.g},function(t){n=t.g}],execute:function(){var o={page:"page",selected:"is-selected",previous:"previous",next:"next",disabled:"is-disabled",ellipsis:"ellipsis",ellipsisStart:"ellipsis--start",ellipsisEnd:"ellipsis--end"};var l={nextLabel:"next",previousLabel:"previous"};var c="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]){--calcite-pagination-spacing:0.25rem 0.5rem}:host([scale=s]) .previous,:host([scale=s]) .next,:host([scale=s]) .page{font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){--calcite-pagination-spacing:0.5rem 0.75rem}:host([scale=m]) .previous,:host([scale=m]) .next,:host([scale=m]) .page{font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){--calcite-pagination-spacing:0.75rem 1rem}:host([scale=l]) .previous,:host([scale=l]) .next,:host([scale=l]) .page{font-size:var(--calcite-font-size-1);line-height:1.5rem}:host{display:-ms-flexbox;display:flex;-ms-writing-mode:lr-tb;-webkit-writing-mode:horizontal-tb;writing-mode:horizontal-tb}:host button{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host button:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.previous,.next,.page{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background-color:transparent;border-style:none;--border-opacity:0;font-size:var(--calcite-font-size-0);line-height:1.25rem;color:var(--calcite-ui-text-3);cursor:pointer;font-family:inherit;border-top:2px solid transparent;border-bottom:2px solid transparent}.previous:hover,.next:hover,.page:hover{color:var(--calcite-ui-text-1);-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out}.page:hover{border-bottom-color:var(--calcite-ui-border-2)}.page.is-selected{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);border-bottom-color:var(--calcite-ui-brand)}.previous,.next{padding:var(--calcite-pagination-spacing)}.previous:hover,.next:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-link)}.previous:active,.next:active{background-color:var(--calcite-ui-foreground-3)}.previous.is-disabled,.next.is-disabled{background-color:transparent;pointer-events:none}.previous.is-disabled>calcite-icon,.next.is-disabled>calcite-icon{opacity:0.5}.next{margin-right:0}.page,.ellipsis{padding:var(--calcite-pagination-spacing)}.ellipsis{display:-ms-flexbox;display:flex;-ms-flex-align:end;align-items:flex-end;color:var(--calcite-ui-text-3)}";var u=5;var p=t("calcite_pagination",function(){function t(t){var a=this;e(this,t);this.calcitePaginationUpdate=i(this,"calcitePaginationUpdate",7);this.calcitePaginationChange=i(this,"calcitePaginationChange",7);this.num=20;this.start=1;this.total=0;this.textLabelNext=l.nextLabel;this.textLabelPrevious=l.previousLabel;this.scale="m";this.previousClicked=function(){a.previousPage().then();a.emitUpdate()};this.nextClicked=function(){a.nextPage();a.emitUpdate()}}t.prototype.nextPage=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.start=Math.min(this.getLastStart(),this.start+this.num);return[2]}))}))};t.prototype.previousPage=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.start=Math.max(1,this.start-this.num);return[2]}))}))};t.prototype.getLastStart=function(){var t=this,e=t.total,i=t.num;var a=e%i===0?e-i:Math.floor(e/i)*i;return a+1};t.prototype.showLeftEllipsis=function(){return Math.floor(this.start/this.num)>3};t.prototype.showRightEllipsis=function(){return(this.total-this.start)/this.num>3};t.prototype.emitUpdate=function(){var t={start:this.start,total:this.total,num:this.num};this.calcitePaginationChange.emit(t);this.calcitePaginationUpdate.emit(t)};t.prototype.renderPages=function(){var t=this;var e=this.getLastStart();var i;var a;if(this.total/this.num<=u){a=1+this.num;i=e-this.num}else{if(this.start/this.num<u-1){a=1+this.num;i=1+4*this.num}else{if(this.start+3*this.num>=this.total){a=e-4*this.num;i=e-this.num}else{a=this.start-this.num;i=this.start+this.num}}}var s=[];while(a<=i){s.push(a);a=a+this.num}return s.map((function(e){return t.renderPage(e)}))};t.prototype.renderPage=function(t){var e;var i=this;var s=Math.floor(t/this.num)+(this.num===1?0:1);return a("button",{class:(e={},e[o.page]=true,e[o.selected]=t===this.start,e),onClick:function(){i.start=t;i.emitUpdate()}},s)};t.prototype.renderLeftEllipsis=function(t){if(this.total/this.num>u&&this.showLeftEllipsis()){return a("span",{class:o.ellipsis+" "+o.ellipsisStart},a("calcite-icon",{icon:"ellipsis",scale:t}))}};t.prototype.renderRightEllipsis=function(t){if(this.total/this.num>u&&this.showRightEllipsis()){return a("span",{class:o.ellipsis+" "+o.ellipsisEnd},a("calcite-icon",{icon:"ellipsis",scale:t}))}};t.prototype.render=function(){var t,e;var i=n(this.el);var r=this,l=r.total,c=r.num,u=r.start;var p=this.scale==="l"?"m":"s";var h=c===1?u<=c:u<c;var f=c===1?u+c>l:u+c>l;return a(s,{dir:i},a("button",{"aria-label":this.textLabelPrevious,class:(t={},t[o.previous]=true,t[o.disabled]=h,t),disabled:h,onClick:this.previousClicked},a("calcite-icon",{dir:i,flipRtl:true,icon:"chevronLeft",scale:p})),l>c?this.renderPage(1):null,this.renderLeftEllipsis(p),this.renderPages(),this.renderRightEllipsis(p),this.renderPage(this.getLastStart()),a("button",{"aria-label":this.textLabelNext,class:(e={},e[o.next]=true,e[o.disabled]=f,e),disabled:f,onClick:this.nextClicked},a("calcite-icon",{dir:i,flipRtl:true,icon:"chevronRight",scale:p})))};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:false,configurable:true});return t}());p.style=c}}}));