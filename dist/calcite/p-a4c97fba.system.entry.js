System.register(["./p-4105a996.system.js","./p-466a0799.system.js","./p-f1259a9b.system.js"],(function(t){"use strict";var e,i,r,a,c,s,o,n;return{setters:[function(t){e=t.r;i=t.c;r=t.h;a=t.H;c=t.g},function(t){s=t.h;o=t.g},function(t){n=t.g}],execute:function(){var l="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-brand:#009AF2;--calcite-ui-brand-hover:#007AC2;--calcite-ui-brand-press:#00619B;--calcite-ui-background:#353535;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#202020;--calcite-ui-foreground-3:#151515;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-text-inverse:#151515;--calcite-ui-text-link:#00A0FF;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-input:#757575;--calcite-ui-info:#00A0FF;--calcite-ui-success:#36DA43;--calcite-ui-warning:#FFC900;--calcite-ui-danger:#FE583E;--calcite-ui-danger-hover:#FF0015;--calcite-ui-danger-press:#D90012}:host{--calcite-switch-hover-handle-border:var(--calcite-ui-brand);--calcite-switch-switched-track-background:var(--calcite-ui-brand);--calcite-switch-switched-track-border:var(--calcite-ui-brand);--calcite-switch-switched-handle-border:var(--calcite-ui-brand);--calcite-switch-switched-hover-track-background:var(--calcite-ui-brand);--calcite-switch-switched-hover-track-border:var(--calcite-ui-brand);--calcite-switch-switched-hover-handle-border:var(--calcite-ui-brand-hover)}:host([scale=s]){--calcite-switch-track-width:28px;--calcite-switch-track-height:16px;--calcite-switch-handle-size:14px}:host([scale=m]){--calcite-switch-track-width:36px;--calcite-switch-track-height:20px;--calcite-switch-handle-size:18px}:host([scale=l]){--calcite-switch-track-width:44px;--calcite-switch-track-height:24px;--calcite-switch-handle-size:22px}::slotted(input){display:none}:host{display:inline-block;position:relative;width:auto;cursor:pointer;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;tap-highlight-color:transparent}:host([disabled]){opacity:var(--calcite-ui-opacity-disabled);pointer-events:none;cursor:default}:host{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;width:auto}:host(:focus){outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.track{position:relative;display:inline-block;vertical-align:top;width:var(--calcite-switch-track-width);height:var(--calcite-switch-track-height);background-color:var(--calcite-ui-foreground-2);border-radius:30px;border:1px solid var(--calcite-ui-border-2);pointer-events:none;-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out}.handle{position:absolute;display:block;width:var(--calcite-switch-handle-size);height:var(--calcite-switch-handle-size);top:-1px;left:-1px;right:auto;background-color:var(--calcite-ui-foreground-1);border-radius:30px;border:2px solid var(--calcite-ui-border-input);pointer-events:none;-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out}:host(:hover) .handle,:host(:focus) .handle{border-color:var(--calcite-switch-hover-handle-border);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-switch-hover-handle-border);box-shadow:inset 0 0 0 1px var(--calcite-switch-hover-handle-border);right:auto}:host([switched]) .track{background-color:var(--calcite-switch-switched-track-background);border-color:var(--calcite-switch-switched-track-border)}:host([switched]) .handle{right:-1px;left:auto;border-color:var(--calcite-switch-switched-handle-border)}:host([switched]:hover) .track{background-color:var(--calcite-switch-switched-hover-track-background);border-color:var(--calcite-switch-switched-hover-track-border)}:host([switched]:hover) .handle{border-color:var(--calcite-switch-switched-hover-handle-border);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-switch-switched-hover-handle-border);box-shadow:inset 0 0 0 1px var(--calcite-switch-switched-hover-handle-border)}:host([dir=rtl]){margin-right:0;margin-left:0.5em}:host([dir=rtl]) .handle{left:auto;right:-1px}:host([dir=rtl][switched]) .handle{right:auto;left:-1px}:host([dir=rtl][switched]:active) .handle,:host([dir=rtl][switched]:focus) .handle{right:auto;left:-1px}";var h=t("calcite_switch",function(){function t(t){var r=this;e(this,t);this.calciteSwitchChange=i(this,"calciteSwitchChange",7);this.disabled=false;this.name="";this.scale="m";this.switched=false;this.value="";this.syncThisToProxyInput=function(){r.switched=r.inputProxy.hasAttribute("checked");r.name=r.inputProxy.name;r.value=r.inputProxy.value};this.syncProxyInputToThis=function(){r.switched?r.inputProxy.setAttribute("checked",""):r.inputProxy.removeAttribute("checked");r.inputProxy.setAttribute("name",r.name);r.inputProxy.setAttribute("value",r.value)}}t.prototype.handleLabelFocus=function(t){if(!this.disabled&&!this.el.contains(t.detail.interactedEl)&&s(t.detail.labelEl,this.el)){this.el.focus()}else return};t.prototype.onClick=function(t){if(!this.disabled&&this.el.closest("label")&&t.target===this.inputProxy||!this.el.closest("label")&&t.target===this.el){this.updateSwitch(t)}};t.prototype.keyDownHandler=function(t){var e=n(t.key);if(!this.disabled&&(e===" "||e==="Enter")){this.updateSwitch(t)}};t.prototype.switchWatcher=function(){this.switched?this.inputProxy.setAttribute("checked",""):this.inputProxy.removeAttribute("checked")};t.prototype.connectedCallback=function(){this.setupProxyInput()};t.prototype.disconnectedCallback=function(){this.observer.disconnect()};t.prototype.componentWillRender=function(){this.syncProxyInputToThis()};t.prototype.render=function(){var t=o(this.el);return r(a,{"aria-checked":this.switched.toString(),dir:t,tabIndex:this.disabled?-1:this.tabIndex},r("div",{class:"track"},r("div",{class:"handle"})))};Object.defineProperty(t.prototype,"tabIndex",{get:function(){var t=this.el.hasAttribute("tabindex");if(t){return Number(this.el.getAttribute("tabindex"))}return 0},enumerable:false,configurable:true});t.prototype.setupProxyInput=function(){this.inputProxy=this.el.querySelector("input");if(!this.inputProxy){this.inputProxy=document.createElement("input");this.inputProxy.type="checkbox";this.inputProxy.disabled=this.disabled;this.syncProxyInputToThis();this.el.appendChild(this.inputProxy)}this.syncThisToProxyInput();{this.observer=new MutationObserver(this.syncThisToProxyInput);this.observer.observe(this.inputProxy,{attributes:true})}};t.prototype.updateSwitch=function(t){t.preventDefault();this.switched=!this.switched;this.calciteSwitchChange.emit({switched:this.switched})};Object.defineProperty(t.prototype,"el",{get:function(){return c(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{switched:["switchWatcher"]}},enumerable:false,configurable:true});return t}());h.style=l}}}));