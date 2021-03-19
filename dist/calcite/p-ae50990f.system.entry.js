System.register(["./p-4105a996.system.js","./p-466a0799.system.js"],(function(e){"use strict";var t,a,l,c,i,s;return{setters:[function(e){t=e.r,a=e.c,l=e.h,c=e.H,i=e.g},function(e){s=e.g}],execute:function(){e("calcite_label",function(){function e(e){var l=this;t(this,e),this.calciteLabelFocus=a(this,"calciteLabelFocus",7),this.alignment="start",this.status="idle",this.scale="m",this.layout="default",this.handleCalciteHtmlForClicks=function(e){if(l.for){var t=document.getElementById(l.for);if(t&&t.localName.startsWith("calcite")&&e!==t){if(!["button","input","meter","output","progress","select","textarea"].includes(e.localName)){var a=["calcite-button","calcite-checkbox","calcite-date","calcite-inline-editable","calcite-input","calcite-radio","calcite-radio-button","calcite-radio-button-group","calcite-radio-group","calcite-rating","calcite-select","calcite-slider","calcite-switch"];if(!a.includes(e.localName)){for(var c=0;c<a.length;c++)if(e.closest(a[c]))return;t.click()}}}}}}return e.prototype.disabledWatcher=function(){this.disabled&&this.setDisabledControls()},e.prototype.onClick=function(e){var t=e.target;this.calciteLabelFocus.emit({labelEl:this.el,interactedEl:t,requestedInput:this.for}),this.handleCalciteHtmlForClicks(t)},e.prototype.getAttributes=function(){var e=["disabled","id","layout","scale","status","theme"];return Array.from(this.el.attributes).filter((function(t){return t&&!e.includes(t.name)})).reduce((function(e,t){var a,l=t.name,c=t.value;return Object.assign(Object.assign({},e),((a={})[l]=c,a))}),{})},e.prototype.componentDidLoad=function(){this.disabled&&this.setDisabledControls()},e.prototype.render=function(){var e=this,t=this.getAttributes(),a=s(this.el);return l(c,{dir:a},l("label",Object.assign({},t,{ref:function(t){return e.labelEl=t}}),l("slot",null)))},e.prototype.setDisabledControls=function(){var e;null===(e=this.labelEl)||void 0===e||e.childNodes.forEach((function(e){e.nodeName.includes("CALCITE")&&e.setAttribute("disabled","")}))},Object.defineProperty(e.prototype,"el",{get:function(){return i(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{disabled:["disabledWatcher"]}},enumerable:!1,configurable:!0}),e}()).style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}.sc-calcite-label:root{--calcite-popper-transition:150ms ease-in-out}[hidden].sc-calcite-label-h{display:none}[theme=dark].sc-calcite-label-h,[theme=dark] .sc-calcite-label-h{--calcite-ui-brand:#009AF2;--calcite-ui-brand-hover:#007AC2;--calcite-ui-brand-press:#00619B;--calcite-ui-background:#353535;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#202020;--calcite-ui-foreground-3:#151515;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-text-inverse:#151515;--calcite-ui-text-link:#00A0FF;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-input:#757575;--calcite-ui-info:#00A0FF;--calcite-ui-success:#36DA43;--calcite-ui-warning:#FFC900;--calcite-ui-danger:#FE583E;--calcite-ui-danger-hover:#FF0015;--calcite-ui-danger-press:#D90012}[alignment=start].sc-calcite-label-h,[alignment=end][dir=rtl].sc-calcite-label-h{text-align:left}[alignment=end].sc-calcite-label-h,[alignment=start][dir=rtl].sc-calcite-label-h{text-align:right}[alignment=center].sc-calcite-label-h{text-align:center}[scale=s].sc-calcite-label-h{--calcite-label-margin-bottom:12px}[scale=s].sc-calcite-label-h label.sc-calcite-label{font-size:var(--calcite-font-size--2)}[scale=m].sc-calcite-label-h{--calcite-label-margin-bottom:14px}[scale=m].sc-calcite-label-h label.sc-calcite-label{font-size:var(--calcite-font-size--1)}[scale=l].sc-calcite-label-h{--calcite-label-margin-bottom:18px}[scale=l].sc-calcite-label-h label.sc-calcite-label{font-size:var(--calcite-font-size-1)}.sc-calcite-label-h label.sc-calcite-label{cursor:pointer;width:100%;margin:0 0 var(--calcite-label-margin-bottom, 1.5rem) 0;line-height:1.3}[layout=default].sc-calcite-label-h label.sc-calcite-label{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:4px}[layout=inline].sc-calcite-label-h label.sc-calcite-label,[layout=inline-space-between].sc-calcite-label-h label.sc-calcite-label{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;gap:0.75rem}[layout=inline-space-between].sc-calcite-label-h label.sc-calcite-label{-ms-flex-pack:justify;justify-content:space-between}[disabled].sc-calcite-label-h>label.sc-calcite-label{pointer-events:none;opacity:var(--calcite-ui-opacity-disabled)}.sc-calcite-label-h[disabled] .sc-calcite-label-s>*{pointer-events:none}.sc-calcite-label-h[disabled] .sc-calcite-label-s>*[disabled],.sc-calcite-label-h[disabled] .sc-calcite-label-s>*[disabled] *{opacity:1}.sc-calcite-label-h[disabled] .sc-calcite-label-s>calcite-input-message:not([active]){opacity:0}[status=invalid].sc-calcite-label-h label.sc-calcite-label{color:var(--calcite-ui-danger)}[status=valid].sc-calcite-label-h label.sc-calcite-label{color:var(--calcite-ui-text-2)}[status=idle].sc-calcite-label-h label.sc-calcite-label{color:var(--calcite-ui-text-2)}[disable-spacing].sc-calcite-label-h label.sc-calcite-label{gap:0;margin:0}"}}}));