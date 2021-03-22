var __awaiter=this&&this.__awaiter||function(t,e,i,a){function n(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,s){function r(t){try{l(a.next(t))}catch(t){s(t)}}function o(t){try{l(a.throw(t))}catch(t){s(t)}}function l(t){t.done?i(t.value):n(t.value).then(r,o)}l((a=a.apply(t,e||[])).next())}))},__generator=this&&this.__generator||function(t,e){var i,a,n,s,r={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(t){return function(e){return l([t,e])}}function l(s){if(i)throw new TypeError("Generator is already executing.");for(;r;)try{if(i=1,a&&(n=2&s[0]?a.return:s[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,s[1])).done)return n;switch(a=0,n&&(s=[2&s[0],n.value]),s[0]){case 0:case 1:n=s;break;case 4:return r.label++,{value:s[1],done:!1};case 5:r.label++,a=s[1],s=[0];continue;case 7:s=r.ops.pop(),r.trys.pop();continue;default:if(!(n=r.trys,(n=n.length>0&&n[n.length-1])||6!==s[0]&&2!==s[0])){r=0;continue}if(3===s[0]&&(!n||s[1]>n[0]&&s[1]<n[3])){r.label=s[1];break}if(6===s[0]&&r.label<n[1]){r.label=n[1],n=s;break}if(n&&r.label<n[2]){r.label=n[2],r.ops.push(s);break}n[2]&&r.ops.pop(),r.trys.pop();continue}s=e.call(t,r)}catch(t){s=[6,t],a=0}finally{i=n=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}};System.register(["./p-4105a996.system.js","./p-7bf86ee3.system.js"],(function(t){"use strict";var e,i,a,n,s,r;return{setters:[function(t){e=t.r,i=t.c,a=t.h,n=t.H,s=t.g},function(t){r=t.g}],execute:function(){var o="page",l="is-selected",c="previous",u="next",p="is-disabled",h="ellipsis",f="ellipsis--start",m="ellipsis--end",d="next",g="previous";t("calcite_pagination",function(){function t(t){var a=this;e(this,t),this.calcitePaginationUpdate=i(this,"calcitePaginationUpdate",7),this.calcitePaginationChange=i(this,"calcitePaginationChange",7),this.num=20,this.start=1,this.total=0,this.textLabelNext=d,this.textLabelPrevious=g,this.scale="m",this.previousClicked=function(){a.previousPage().then(),a.emitUpdate()},this.nextClicked=function(){a.nextPage(),a.emitUpdate()}}return t.prototype.nextPage=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return this.start=Math.min(this.getLastStart(),this.start+this.num),[2]}))}))},t.prototype.previousPage=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return this.start=Math.max(1,this.start-this.num),[2]}))}))},t.prototype.getLastStart=function(){var t=this.total,e=this.num;return(t%e==0?t-e:Math.floor(t/e)*e)+1},t.prototype.showLeftEllipsis=function(){return Math.floor(this.start/this.num)>3},t.prototype.showRightEllipsis=function(){return(this.total-this.start)/this.num>3},t.prototype.emitUpdate=function(){var t={start:this.start,total:this.total,num:this.num};this.calcitePaginationChange.emit(t),this.calcitePaginationUpdate.emit(t)},t.prototype.renderPages=function(){var t,e,i=this,a=this.getLastStart();this.total/this.num<=5?(e=1+this.num,t=a-this.num):this.start/this.num<4?(e=1+this.num,t=1+4*this.num):this.start+3*this.num>=this.total?(e=a-4*this.num,t=a-this.num):(e=this.start-this.num,t=this.start+this.num);for(var n=[];e<=t;)n.push(e),e+=this.num;return n.map((function(t){return i.renderPage(t)}))},t.prototype.renderPage=function(t){var e,i=this,n=Math.floor(t/this.num)+(1===this.num?0:1);return a("button",{class:(e={},e[o]=!0,e[l]=t===this.start,e),onClick:function(){i.start=t,i.emitUpdate()}},n)},t.prototype.renderLeftEllipsis=function(t){if(this.total/this.num>5&&this.showLeftEllipsis())return a("span",{class:h+" "+f},a("calcite-icon",{icon:"ellipsis",scale:t}))},t.prototype.renderRightEllipsis=function(t){if(this.total/this.num>5&&this.showRightEllipsis())return a("span",{class:h+" "+m},a("calcite-icon",{icon:"ellipsis",scale:t}))},t.prototype.render=function(){var t,e,i=r(this.el),s=this,o=s.total,l=s.num,h=s.start,f="l"===this.scale?"m":"s",m=1===l?h<=l:h<l,d=h+l>o;return a(n,{dir:i},a("button",{"aria-label":this.textLabelPrevious,class:(t={},t[c]=!0,t[p]=m,t),disabled:m,onClick:this.previousClicked},a("calcite-icon",{dir:i,flipRtl:!0,icon:"chevronLeft",scale:f})),o>l?this.renderPage(1):null,this.renderLeftEllipsis(f),this.renderPages(),this.renderRightEllipsis(f),this.renderPage(this.getLastStart()),a("button",{"aria-label":this.textLabelNext,class:(e={},e[u]=!0,e[p]=d,e),disabled:d,onClick:this.nextClicked},a("calcite-icon",{dir:i,flipRtl:!0,icon:"chevronRight",scale:f})))},Object.defineProperty(t.prototype,"el",{get:function(){return s(this)},enumerable:!1,configurable:!0}),t}()).style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]){--calcite-pagination-spacing:0.25rem 0.5rem}:host([scale=s]) .previous,:host([scale=s]) .next,:host([scale=s]) .page{font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){--calcite-pagination-spacing:0.5rem 0.75rem}:host([scale=m]) .previous,:host([scale=m]) .next,:host([scale=m]) .page{font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){--calcite-pagination-spacing:0.75rem 1rem}:host([scale=l]) .previous,:host([scale=l]) .next,:host([scale=l]) .page{font-size:var(--calcite-font-size-1);line-height:1.5rem}:host{display:-ms-flexbox;display:flex;-ms-writing-mode:lr-tb;-webkit-writing-mode:horizontal-tb;writing-mode:horizontal-tb}:host button{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host button:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.previous,.next,.page{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background-color:transparent;border-style:none;--border-opacity:0;font-size:var(--calcite-font-size-0);line-height:1.25rem;color:var(--calcite-ui-text-3);cursor:pointer;font-family:inherit;border-top:2px solid transparent;border-bottom:2px solid transparent}.previous:hover,.next:hover,.page:hover{color:var(--calcite-ui-text-1);-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out}.page:hover{border-bottom-color:var(--calcite-ui-border-2)}.page.is-selected{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);border-bottom-color:var(--calcite-ui-brand)}.previous,.next{padding:var(--calcite-pagination-spacing)}.previous:hover,.next:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-link)}.previous:active,.next:active{background-color:var(--calcite-ui-foreground-3)}.previous.is-disabled,.next.is-disabled{background-color:transparent;pointer-events:none}.previous.is-disabled>calcite-icon,.next.is-disabled>calcite-icon{opacity:0.5}.next{margin-right:0}.page,.ellipsis{padding:var(--calcite-pagination-spacing)}.ellipsis{display:-ms-flexbox;display:flex;-ms-flex-align:end;align-items:flex-end;color:var(--calcite-ui-text-3)}"}}}));