import{r as t,c as a,h as e,g as r}from"./p-0f61cfe6.js";const s=class{constructor(e){t(this,e),this.calciteHandleNudge=a(this,"calciteHandleNudge",7),this.activated=!1,this.textTitle="handle",this.handleKeyDown=t=>{switch(t.key){case" ":this.activated=!this.activated;break;case"ArrowUp":case"ArrowDown":if(!this.activated)return;const e=t.key.toLowerCase().replace("arrow","");this.calciteHandleNudge.emit({handle:this.el,direction:e})}},this.handleBlur=()=>{this.activated=!1}}async setFocus(){this.handleButton.focus()}render(){return e("span",{"aria-pressed":this.activated.toString(),class:{handle:!0,"handle--activated":this.activated},onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,ref:t=>{this.handleButton=t},role:"button",tabindex:"0",title:this.textTitle},e("calcite-icon",{icon:"drag",scale:"s"}))}get el(){return r(this)}};s.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex}.handle{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-item-align:stretch;align-self:stretch;-ms-flex-pack:center;justify-content:center;padding:var(--calcite-spacing-three-quarters) var(--calcite-spacing-quarter);background-color:var(--calcite-ui-foreground-3);background-color:transparent;border:none;color:var(--calcite-ui-border-3);line-height:0;cursor:move;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.handle:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-app-foreground)}.handle:focus{color:var(--calcite-ui-text-1);outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.handle--activated{background-color:var(--calcite-ui-foreground-3);color:var(--calcite-ui-text-1)}";export{s as calcite_handle};