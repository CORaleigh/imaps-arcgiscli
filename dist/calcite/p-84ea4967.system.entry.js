System.register(["./p-4105a996.system.js","./p-7bf86ee3.system.js","./p-6fd79f4e.system.js"],(function(t){"use strict";var e,r,a,n,i,s,o,l;return{setters:[function(t){e=t.r;r=t.h;a=t.g;n=t.H},function(t){i=t.g;s=t.a},function(t){o=t.h;l=t.i}],execute:function(){function c(t){var e=0;for(var r=0;r<t.length;r++){e=t.charCodeAt(r)+((e<<5)-e)}var a="#";for(var n=0;n<3;n++){var i=e>>n*8&255;a+=("00"+i.toString(16)).substr(-2)}return a}function f(t){var e=t.r,r=t.g,a=t.b;e/=255;r/=255;a/=255;var n=Math.max(e,r,a);var i=Math.min(e,r,a);var s=n-i;if(n===i){return 0}var o=(n+i)/2;switch(n){case e:o=(r-a)/s+(r<a?6:0);break;case r:o=(a-e)/s+2;break;case a:o=(e-r)/s+4;break}return Math.round(o*60)}function m(t){return f(o(t))}var u="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;border-radius:50%;overflow:hidden}:host([scale=s]){width:1.5rem;height:1.5rem;font-size:var(--calcite-font-size--3)}:host([scale=m]){width:2rem;height:2rem;font-size:var(--calcite-font-size--2)}:host([scale=l]){width:2.5rem;height:2.5rem;font-size:var(--calcite-font-size--1)}.icon{display:-ms-flexbox;display:flex}.background{width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:50%}.initials{font-weight:var(--calcite-font-weight-bold);text-transform:uppercase;color:var(--calcite-ui-text-3)}.thumbnail{width:100%;height:100%;border-radius:50%}";var h=t("calcite_avatar",function(){function t(t){e(this,t);this.scale="m";this.error=false}t.prototype.render=function(){var t=i(this.el);var e=this.determineContent();return r(n,{dir:t},e)};t.prototype.determineContent=function(){var t=this;if(this.thumbnail&&!this.error){return r("img",{alt:"",class:"thumbnail",onError:function(){return t.error=true},src:this.thumbnail})}var e=this.generateInitials();var a=this.generateFillColor();return r("span",{class:"background",style:{backgroundColor:a}},e?r("span",{"aria-hidden":"true",class:"initials"},e):r("calcite-icon",{class:"icon",icon:"user",scale:this.scale,theme:this.theme}))};t.prototype.generateFillColor=function(){var t=this,e=t.userId,r=t.username,a=t.fullName;var n=s(this.el);var i=e&&"#"+e.substr(e.length-6);var o=r||a||"";var f=i&&l(i)?i:c(o);if(!e&&!o||!l(f)){return"var(--calcite-ui-foreground-2)"}var u=m(f);var h=n==="dark"?20:90;return"hsl("+u+", 60%, "+h+"%)"};t.prototype.generateInitials=function(){var t=this,e=t.fullName,r=t.username;if(e){return e.trim().split(" ").map((function(t){return t.substring(0,1)})).join("")}else if(r){return r.substring(0,2)}return false};Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:false,configurable:true});return t}());h.style=u}}}));