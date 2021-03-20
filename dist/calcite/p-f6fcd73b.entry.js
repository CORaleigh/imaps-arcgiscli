import{r as t,c as e,h as o,H as i,g as a}from"./p-0f61cfe6.js";import{s,g as n}from"./p-bdd3281d.js";import{S as c}from"./p-559ffa87.js";const l=class{constructor(o){t(this,o),this.calciteNoticeClose=e(this,"calciteNoticeClose",7),this.calciteNoticeOpen=e(this,"calciteNoticeOpen",7),this.active=!1,this.color="blue",this.dismissible=!1,this.intlClose="Close",this.scale="m",this.width="auto",this.close=()=>{this.active=!1,this.calciteNoticeClose.emit()}}updateRequestedIcon(){this.requestedIcon=s(c,this.icon,this.color)}componentWillLoad(){this.requestedIcon=s(c,this.icon,this.color)}componentDidLoad(){this.noticeLinkEl=this.el.querySelectorAll("calcite-link")[0]}render(){const t=n(this.el),e=o("button",{"aria-label":this.intlClose,class:"notice-close",onClick:this.close,ref:()=>this.closeButton},o("calcite-icon",{icon:"x",scale:"m"}));return o(i,{active:this.active,dir:t},this.requestedIcon?o("div",{class:"notice-icon"},o("calcite-icon",{icon:this.requestedIcon,scale:"m"})):null,o("div",{class:"notice-content"},o("slot",{name:"notice-title"}),o("slot",{name:"notice-message"}),o("slot",{name:"notice-link"})),this.dismissible?e:null)}async setFocus(){(this.closeButton||this.noticeLinkEl)&&(this.noticeLinkEl?this.noticeLinkEl.setFocus():this.closeButton&&this.closeButton.focus())}get el(){return a(this)}static get watchers(){return{icon:["updateRequestedIcon"],color:["updateRequestedIcon"]}}};l.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]){--calcite-notice-spacing-token-small:0.5rem;--calcite-notice-spacing-token-large:0.75rem}:host([scale=s]) slot[name=notice-title]::slotted(*),:host([scale=s]) *::slotted([slot=notice-title]){font-size:var(--calcite-font-size--1);line-height:1.375;margin-bottom:0.25rem}:host([scale=s]) slot[name=notice-message]::slotted(*),:host([scale=s]) *::slotted([slot=notice-message]){font-size:var(--calcite-font-size--2);line-height:1.375;margin-bottom:0.25rem}:host([scale=s]) ::slotted(calcite-link){font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=m]){--calcite-notice-spacing-token-small:0.75rem;--calcite-notice-spacing-token-large:1rem}:host([scale=m]) slot[name=notice-title]::slotted(*),:host([scale=m]) *::slotted([slot=notice-title]){font-size:var(--calcite-font-size-0);line-height:1.375;margin-bottom:0.25rem}:host([scale=m]) slot[name=notice-message]::slotted(*),:host([scale=m]) *::slotted([slot=notice-message]){font-size:var(--calcite-font-size--1);line-height:1.375;margin-bottom:0.25rem}:host([scale=m]) ::slotted(calcite-link){font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=l]){--calcite-notice-spacing-token-small:1.25rem;--calcite-notice-spacing-token-large:1.5rem}:host([scale=l]) slot[name=notice-title]::slotted(*),:host([scale=l]) *::slotted([slot=notice-title]){font-size:var(--calcite-font-size-1);line-height:1.375;margin-bottom:0.25rem}:host([scale=l]) slot[name=notice-message]::slotted(*),:host([scale=l]) *::slotted([slot=notice-message]){font-size:var(--calcite-font-size-0);line-height:1.375;margin-bottom:0.25rem}:host([scale=l]) ::slotted(calcite-link){font-size:var(--calcite-font-size-0);line-height:1.375}:host([width=auto]){--calcite-notice-width:auto}:host([width=half]){--calcite-notice-width:50%}:host([width=full]){--calcite-notice-width:100%}:host{display:none;text-align:left;margin-top:0;margin-bottom:0;margin-left:auto;margin-right:auto;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%;opacity:0;pointer-events:none;background-color:var(--calcite-ui-foreground-1);width:var(--calcite-notice-width);max-height:0;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;border-left:0px solid;-webkit-box-shadow:0 0 0 0 transparent;box-shadow:0 0 0 0 transparent}.notice-close{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.notice-close:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host([dir=rtl]){text-align:right;border-left:none;border-right:0px solid}:host([active]){display:-ms-flexbox;display:flex;-webkit-box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);-ms-flex-align:center;align-items:center;opacity:1;max-height:100%;border-width:2px;pointer-events:auto}slot[name=notice-title]::slotted(*),*::slotted([slot=notice-title]){margin:0;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}slot[name=notice-message]::slotted(*),*::slotted([slot=notice-message]){display:inline;margin:0;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2);margin-right:var(--calcite-notice-spacing-token-small)}:host([dir=rtl]) slot[name=notice-message]::slotted(*),:host([dir=rtl]) *::slotted([slot=notice-message]){margin-right:0;margin-left:var(--calcite-notice-spacing-token-small)}.notice-content{-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-width:0;word-wrap:break-word;overflow-wrap:break-word;-ms-flex:1 1 0px;flex:1 1 0;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-small) 0}.notice-content:first-of-type:not(:only-child){padding-left:var(--calcite-notice-spacing-token-large)}.notice-content:only-of-type{padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large)}:host([dir=rtl]) .notice-content{padding:var(--calcite-notice-spacing-token-small) 0 var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-small)}:host([dir=rtl]) .notice-content:first-of-type:not(:only-child){padding-right:var(--calcite-notice-spacing-token-large)}:host([dir=rtl]) .notice-content:only-of-type{padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large)}.notice-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out}.notice-close{-ms-flex-item-align:stretch;align-self:stretch;background-color:transparent;border-style:none;outline:2px solid transparent;outline-offset:2px;cursor:pointer;color:var(--calcite-ui-text-3);-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;-webkit-appearance:none}.notice-close:hover,.notice-close:focus{background-color:var(--calcite-ui-foreground-2)}.notice-close:active{background-color:var(--calcite-ui-foreground-3)}:host([color=blue]){border-color:var(--calcite-ui-brand)}:host([color=blue]) .notice-icon{color:var(--calcite-ui-brand)}:host([color=red]){border-color:var(--calcite-ui-danger)}:host([color=red]) .notice-icon{color:var(--calcite-ui-danger)}:host([color=yellow]){border-color:var(--calcite-ui-warning)}:host([color=yellow]) .notice-icon{color:var(--calcite-ui-warning)}:host([color=green]){border-color:var(--calcite-ui-success)}:host([color=green]) .notice-icon{color:var(--calcite-ui-success)}";export{l as calcite_notice}