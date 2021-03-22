import{r as t,c as e,h as i,H as a,g as s}from"./p-0f61cfe6.js";import{h as r,g as c}from"./p-bdd3281d.js";import{g as o}from"./p-e75286c4.js";const h=class{constructor(i){t(this,i),this.calciteSwitchChange=e(this,"calciteSwitchChange",7),this.disabled=!1,this.name="",this.scale="m",this.switched=!1,this.value="",this.syncThisToProxyInput=()=>{this.switched=this.inputProxy.hasAttribute("checked"),this.name=this.inputProxy.name,this.value=this.inputProxy.value},this.syncProxyInputToThis=()=>{this.switched?this.inputProxy.setAttribute("checked",""):this.inputProxy.removeAttribute("checked"),this.inputProxy.setAttribute("name",this.name),this.inputProxy.setAttribute("value",this.value)}}handleLabelFocus(t){this.disabled||this.el.contains(t.detail.interactedEl)||!r(t.detail.labelEl,this.el)||this.el.focus()}onClick(t){(!this.disabled&&this.el.closest("label")&&t.target===this.inputProxy||!this.el.closest("label")&&t.target===this.el)&&this.updateSwitch(t)}keyDownHandler(t){const e=o(t.key);this.disabled||" "!==e&&"Enter"!==e||this.updateSwitch(t)}switchWatcher(){this.switched?this.inputProxy.setAttribute("checked",""):this.inputProxy.removeAttribute("checked")}connectedCallback(){this.setupProxyInput()}disconnectedCallback(){this.observer.disconnect()}componentWillRender(){this.syncProxyInputToThis()}render(){const t=c(this.el);return i(a,{"aria-checked":this.switched.toString(),dir:t,tabIndex:this.disabled?-1:this.tabIndex},i("div",{class:"track"},i("div",{class:"handle"})))}get tabIndex(){return this.el.hasAttribute("tabindex")?Number(this.el.getAttribute("tabindex")):0}setupProxyInput(){this.inputProxy=this.el.querySelector("input"),this.inputProxy||(this.inputProxy=document.createElement("input"),this.inputProxy.type="checkbox",this.inputProxy.disabled=this.disabled,this.syncProxyInputToThis(),this.el.appendChild(this.inputProxy)),this.syncThisToProxyInput(),this.observer=new MutationObserver(this.syncThisToProxyInput),this.observer.observe(this.inputProxy,{attributes:!0})}updateSwitch(t){t.preventDefault(),this.switched=!this.switched,this.calciteSwitchChange.emit({switched:this.switched})}get el(){return s(this)}static get watchers(){return{switched:["switchWatcher"]}}};h.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{--calcite-switch-hover-handle-border:var(--calcite-ui-brand);--calcite-switch-switched-track-background:var(--calcite-ui-brand);--calcite-switch-switched-track-border:var(--calcite-ui-brand);--calcite-switch-switched-handle-border:var(--calcite-ui-brand);--calcite-switch-switched-hover-track-background:var(--calcite-ui-brand);--calcite-switch-switched-hover-track-border:var(--calcite-ui-brand);--calcite-switch-switched-hover-handle-border:var(--calcite-ui-brand-hover)}:host([scale=s]){--calcite-switch-track-width:28px;--calcite-switch-track-height:16px;--calcite-switch-handle-size:14px}:host([scale=m]){--calcite-switch-track-width:36px;--calcite-switch-track-height:20px;--calcite-switch-handle-size:18px}:host([scale=l]){--calcite-switch-track-width:44px;--calcite-switch-track-height:24px;--calcite-switch-handle-size:22px}::slotted(input){display:none}:host{display:inline-block;position:relative;width:auto;cursor:pointer;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;tap-highlight-color:transparent}:host([disabled]){opacity:var(--calcite-ui-opacity-disabled);pointer-events:none;cursor:default}:host{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;width:auto}:host(:focus){outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.track{position:relative;display:inline-block;vertical-align:top;width:var(--calcite-switch-track-width);height:var(--calcite-switch-track-height);background-color:var(--calcite-ui-foreground-2);border-radius:30px;border:1px solid var(--calcite-ui-border-2);pointer-events:none;-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out}.handle{position:absolute;display:block;width:var(--calcite-switch-handle-size);height:var(--calcite-switch-handle-size);top:-1px;left:-1px;right:auto;background-color:var(--calcite-ui-foreground-1);border-radius:30px;border:2px solid var(--calcite-ui-border-input);pointer-events:none;-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out}:host(:hover) .handle,:host(:focus) .handle{border-color:var(--calcite-switch-hover-handle-border);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-switch-hover-handle-border);box-shadow:inset 0 0 0 1px var(--calcite-switch-hover-handle-border);right:auto}:host([switched]) .track{background-color:var(--calcite-switch-switched-track-background);border-color:var(--calcite-switch-switched-track-border)}:host([switched]) .handle{right:-1px;left:auto;border-color:var(--calcite-switch-switched-handle-border)}:host([switched]:hover) .track{background-color:var(--calcite-switch-switched-hover-track-background);border-color:var(--calcite-switch-switched-hover-track-border)}:host([switched]:hover) .handle{border-color:var(--calcite-switch-switched-hover-handle-border);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-switch-switched-hover-handle-border);box-shadow:inset 0 0 0 1px var(--calcite-switch-switched-hover-handle-border)}:host([dir=rtl]){margin-right:0;margin-left:0.5em}:host([dir=rtl]) .handle{left:auto;right:-1px}:host([dir=rtl][switched]) .handle{right:auto;left:-1px}:host([dir=rtl][switched]:active) .handle,:host([dir=rtl][switched]:focus) .handle{right:auto;left:-1px}";export{h as calcite_switch};