import{r as t,h as a,H as o,g as e}from"./p-0f61cfe6.js";import{g as r}from"./p-fbd3d700.js";const c=class{constructor(a){t(this,a),this.appearance="solid",this.color="blue",this.intlLoading="Loading",this.alignment="center",this.loading=!1,this.round=!1,this.scale="m",this.splitChild=!1,this.width="auto",this.childElType="button",this.hasContent=!1,this.handleClick=t=>{if("button"===this.childElType&&"button"!==this.type){const a=this.el.getAttribute("form"),o=a?document.getElementsByName(`${a}`)[0]:this.el.closest("form");if(o){const t=o.onsubmit;switch(this.type){case"submit":t?t():o.checkValidity()?o.submit():o.reportValidity();break;case"reset":o.reset()}}t.preventDefault()}}}connectedCallback(){this.childElType=this.href?"a":"button",this.setupTextContentObserver()}disconnectedCallback(){this.observer.disconnect()}componentWillLoad(){{this.updateHasContent();const t=this.el.getAttribute("type");this.type="button"===this.childElType&&t?t:"submit"}}render(){const t=r(this.el),e=this.getAttributes(),c=this.childElType,n=a("div",{class:"calcite-button--loader"},a("calcite-loader",{active:!0,inline:!0,label:this.intlLoading})),i="l"===this.scale?"m":"s",l=a("calcite-icon",{class:{icon:!0,"icon--start":!0},dir:t,flipRtl:"start"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconStart,scale:i}),s=a("calcite-icon",{class:{icon:!0,"icon--end":!0},dir:t,flipRtl:"end"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconEnd,scale:i}),p=a("span",{class:"content"},a("slot",null));return a(o,{dir:t},a(c,Object.assign({},e,this.hasContent?{class:"content--slotted"}:null,{disabled:this.disabled,onClick:this.handleClick,ref:t=>this.childEl=t,tabIndex:this.disabled?-1:null}),this.loading?n:null,this.iconStart?l:null,this.hasContent?p:null,this.iconEnd?s:null))}async setFocus(){this.childEl.focus()}updateHasContent(){var t,a;const o=this.el.textContent.trim().length>0||this.el.childNodes.length>0;this.hasContent=1===this.el.childNodes.length&&"#text"===(null===(t=this.el.childNodes[0])||void 0===t?void 0:t.nodeName)?(null===(a=this.el.textContent)||void 0===a?void 0:a.trim().length)>0:o}setupTextContentObserver(){this.observer=new MutationObserver((()=>{this.updateHasContent()})),this.observer.observe(this.el,{childList:!0,subtree:!0})}getAttributes(){const t=["appearance","alignment","calcite-hydrated","class","color","dir","icon-start","icon-end","id","splitChild","loading","scale","slot","width","theme"];return Array.from(this.el.attributes).filter((a=>a&&!t.includes(a.name))).reduce(((t,{name:a,value:o})=>Object.assign(Object.assign({},t),{[a]:o})),{})}get el(){return e(this)}};c.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-brand:#009AF2;--calcite-ui-brand-hover:#007AC2;--calcite-ui-brand-press:#00619B;--calcite-ui-background:#353535;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#202020;--calcite-ui-foreground-3:#151515;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-text-inverse:#151515;--calcite-ui-text-link:#00A0FF;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-input:#757575;--calcite-ui-info:#00A0FF;--calcite-ui-success:#36DA43;--calcite-ui-warning:#FFC900;--calcite-ui-danger:#FE583E;--calcite-ui-danger-hover:#FF0015;--calcite-ui-danger-press:#D90012}:host{display:inline-block;width:auto;vertical-align:middle;--calcite-button-dark:#404040;--calcite-button-dark-hover:#4a4a4a;--calcite-button-dark-press:#353535;--calcite-button-transparent-hover:rgba(0, 0, 0, 0.05);--calcite-button-transparent-press:rgba(0, 0, 0, 0.08)}:host([theme=dark]){--calcite-button-dark:#404040;--calcite-button-dark-hover:#353535;--calcite-button-dark-press:#4a4a4a;--calcite-button-transparent-hover:rgba(255, 255, 255, 0.05);--calcite-button-transparent-press:rgba(255, 255, 255, 0.08)}:host([round]){border-radius:50px}:host([round]) a,:host([round]) button{border-radius:50px}:host button,:host a{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host button:focus,:host a:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}:host button,:host a{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:0.375rem 1rem;text-decoration:none;width:100%;height:100%;border-radius:0;border:none;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;font-family:inherit;-webkit-appearance:none;cursor:pointer;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:background-color 0.15s ease-in-out, border 0.15s ease-in-out, outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out, -webkit-box-shadow 0.15s ease-in-out;transition:background-color 0.15s ease-in-out, border 0.15s ease-in-out, outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out, -webkit-box-shadow 0.15s ease-in-out;transition:background-color 0.15s ease-in-out, border 0.15s ease-in-out, box-shadow 0.15s ease-in-out, outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:background-color 0.15s ease-in-out, border 0.15s ease-in-out, box-shadow 0.15s ease-in-out, outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out, -webkit-box-shadow 0.15s ease-in-out}:host button:hover,:host a:hover{text-decoration:none}.content{display:-ms-flexbox;display:flex;-ms-flex-preferred-size:auto;flex-basis:auto;margin-left:0.5rem;margin-right:0.5rem}:host(:not([icon-start])) .content{margin-left:unset}:host(:not([icon-end])) .content{margin-right:unset}:host([icon-start][dir=rtl]:not([icon-end])) .content{margin-left:unset;margin-right:0.5rem}:host([icon-end][dir=rtl]:not([icon-start])) .content{margin-right:unset;margin-left:0.5rem}:host([width=auto]){width:auto}:host([width=half]){width:50%}:host([width=full]){width:100%}:host([alignment=center]:not([width=auto])) a,:host([alignment=center]:not([width=auto])) button{-ms-flex-pack:center;justify-content:center}:host([alignment=start]:not([width=auto])) a,:host([alignment=start]:not([width=auto])) button{-ms-flex-pack:start;justify-content:flex-start}:host([alignment=end]:not([width=auto])) a,:host([alignment=end]:not([width=auto])) button{-ms-flex-pack:end;justify-content:flex-end}:host([alignment*=space-between]:not([width=auto])) a,:host([alignment*=space-between]:not([width=auto])) button{-ms-flex-pack:justify;justify-content:space-between}:host([alignment=icon-start-space-between]:not([width=auto])) .icon--start{margin-right:auto}:host([alignment=icon-end-space-between]:not([width=auto])) .icon--end{margin-left:auto}:host([dir=rtl][alignment=icon-start-space-between]:not([width=auto])) .icon--start{margin-right:unset;margin-left:auto}:host([dir=rtl][alignment=icon-end-space-between]:not([width=auto])) .icon--end{margin-left:unset;margin-right:auto}:host([alignment=center]) a:not(.content--slotted) .icon--start+.icon--end,:host([alignment=center]) button:not(.content--slotted) .icon--start+.icon--end{margin-left:0.5rem}:host([dir=rtl][alignment=center]) a:not(.content--slotted) .icon--start+.icon--end,:host([dir=rtl][alignment=center]) button:not(.content--slotted) .icon--start+.icon--end{margin-left:unset;margin-right:0.5rem}.icon{display:-ms-inline-flexbox;display:inline-flex;position:relative;margin:0;line-height:inherit;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host([disabled]){pointer-events:none}:host([disabled]) button,:host([disabled]) a{pointer-events:none;opacity:var(--calcite-ui-opacity-disabled)}.calcite-button--loader{display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;right:0;bottom:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.calcite-button--loader calcite-loader{margin:0}:host([loading]) button,:host([loading]) a{color:transparent !important;pointer-events:none}:host([loading]) button .calcite-button--icon,:host([loading]) a .calcite-button--icon{opacity:0}:host([appearance=solid][color=blue]) button,:host([appearance=solid][color=blue]) a{color:var(--calcite-ui-foreground-1);background-color:var(--calcite-ui-brand);border:1px solid transparent}:host([appearance=solid][color=blue]) button:hover,:host([appearance=solid][color=blue]) button:focus,:host([appearance=solid][color=blue]) a:hover,:host([appearance=solid][color=blue]) a:focus{background-color:var(--calcite-ui-brand-hover)}:host([appearance=solid][color=blue]) button:active,:host([appearance=solid][color=blue]) a:active{background-color:var(--calcite-ui-brand)}:host([appearance=solid][color=blue]) button .calcite-button--icon,:host([appearance=solid][color=blue]) a .calcite-button--icon{fill:var(--calcite-ui-foreground-1)}:host([appearance=solid][color=blue]) button calcite-loader,:host([appearance=solid][color=blue]) a calcite-loader{color:var(--calcite-ui-foreground-1)}:host([appearance=solid][color=red]) button,:host([appearance=solid][color=red]) a{color:var(--calcite-ui-foreground-1);background-color:var(--calcite-ui-danger);border:1px solid transparent}:host([appearance=solid][color=red]) button:hover,:host([appearance=solid][color=red]) button:focus,:host([appearance=solid][color=red]) a:hover,:host([appearance=solid][color=red]) a:focus{background-color:var(--calcite-ui-danger-hover)}:host([appearance=solid][color=red]) button:active,:host([appearance=solid][color=red]) a:active{background-color:var(--calcite-ui-danger)}:host([appearance=solid][color=red]) button .calcite-button--icon,:host([appearance=solid][color=red]) a .calcite-button--icon{fill:var(--calcite-ui-foreground-1)}:host([appearance=solid][color=red]) button calcite-loader,:host([appearance=solid][color=red]) a calcite-loader{color:var(--calcite-ui-foreground-1)}:host([appearance=solid][color=light]) button,:host([appearance=solid][color=light]) a{color:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-3);border:1px solid transparent}:host([appearance=solid][color=light]) button:hover,:host([appearance=solid][color=light]) button:focus,:host([appearance=solid][color=light]) a:hover,:host([appearance=solid][color=light]) a:focus{background-color:var(--calcite-ui-foreground-2)}:host([appearance=solid][color=light]) button:active,:host([appearance=solid][color=light]) a:active{background-color:var(--calcite-ui-foreground-3)}:host([appearance=solid][color=light]) button .calcite-button--icon,:host([appearance=solid][color=light]) a .calcite-button--icon{fill:var(--calcite-ui-text-1)}:host([appearance=solid][color=light]) button calcite-loader,:host([appearance=solid][color=light]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=solid][color=dark]) button,:host([appearance=solid][color=dark]) a{color:#ffffff;background-color:var(--calcite-button-dark);border:1px solid transparent}:host([appearance=solid][color=dark]) button:hover,:host([appearance=solid][color=dark]) button:focus,:host([appearance=solid][color=dark]) a:hover,:host([appearance=solid][color=dark]) a:focus{background-color:var(--calcite-button-dark-hover)}:host([appearance=solid][color=dark]) button:active,:host([appearance=solid][color=dark]) a:active{background-color:var(--calcite-button-dark)}:host([appearance=solid][color=dark]) button .calcite-button--icon,:host([appearance=solid][color=dark]) a .calcite-button--icon{fill:#ffffff}:host([appearance=solid][color=dark]) button calcite-loader,:host([appearance=solid][color=dark]) a calcite-loader{color:#ffffff}:host([appearance=outline][color=blue]) button,:host([appearance=outline][color=blue]) a{color:var(--calcite-ui-brand);background-color:var(--calcite-ui-foreground-1);border:1px solid var(--calcite-ui-brand);-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=outline][color=blue]) button:hover,:host([appearance=outline][color=blue]) a:hover{border-color:var(--calcite-ui-brand);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand)}:host([appearance=outline][color=blue]) button:active,:host([appearance=outline][color=blue]) button:focus,:host([appearance=outline][color=blue]) a:active,:host([appearance=outline][color=blue]) a:focus{color:var(--calcite-ui-brand-press);border-color:var(--calcite-ui-brand-press);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-brand-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-brand-press)}:host([appearance=outline][color=blue]) button:active .calcite-button--icon,:host([appearance=outline][color=blue]) button:focus .calcite-button--icon,:host([appearance=outline][color=blue]) a:active .calcite-button--icon,:host([appearance=outline][color=blue]) a:focus .calcite-button--icon{fill:var(--calcite-ui-brand-press)}:host([appearance=outline][color=blue]) button .calcite-button--icon,:host([appearance=outline][color=blue]) a .calcite-button--icon{fill:var(--calcite-ui-brand)}:host([appearance=outline][color=blue]) button calcite-loader,:host([appearance=outline][color=blue]) a calcite-loader{color:var(--calcite-ui-brand)}:host([appearance=outline][color=red]) button,:host([appearance=outline][color=red]) a{color:var(--calcite-ui-danger);background-color:var(--calcite-ui-foreground-1);border:1px solid var(--calcite-ui-danger);-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=outline][color=red]) button:hover,:host([appearance=outline][color=red]) a:hover{border-color:var(--calcite-ui-danger);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-danger);box-shadow:inset 0 0 0 1px var(--calcite-ui-danger)}:host([appearance=outline][color=red]) button:active,:host([appearance=outline][color=red]) button:focus,:host([appearance=outline][color=red]) a:active,:host([appearance=outline][color=red]) a:focus{color:var(--calcite-ui-danger-press);border-color:var(--calcite-ui-danger-press);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-danger-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-danger-press)}:host([appearance=outline][color=red]) button:active .calcite-button--icon,:host([appearance=outline][color=red]) button:focus .calcite-button--icon,:host([appearance=outline][color=red]) a:active .calcite-button--icon,:host([appearance=outline][color=red]) a:focus .calcite-button--icon{fill:var(--calcite-ui-danger-press)}:host([appearance=outline][color=red]) button .calcite-button--icon,:host([appearance=outline][color=red]) a .calcite-button--icon{fill:var(--calcite-ui-danger)}:host([appearance=outline][color=red]) button calcite-loader,:host([appearance=outline][color=red]) a calcite-loader{color:var(--calcite-ui-danger)}:host([appearance=outline][color=light]) button,:host([appearance=outline][color=light]) a{color:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-1);border:1px solid var(--calcite-ui-foreground-3);-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=outline][color=light]) button:hover,:host([appearance=outline][color=light]) a:hover{border-color:var(--calcite-ui-foreground-3);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-foreground-3);box-shadow:inset 0 0 0 1px var(--calcite-ui-foreground-3)}:host([appearance=outline][color=light]) button:active,:host([appearance=outline][color=light]) button:focus,:host([appearance=outline][color=light]) a:active,:host([appearance=outline][color=light]) a:focus{color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-border-2);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-border-2);box-shadow:inset 0 0 0 2px var(--calcite-ui-border-2)}:host([appearance=outline][color=light]) button:active .calcite-button--icon,:host([appearance=outline][color=light]) button:focus .calcite-button--icon,:host([appearance=outline][color=light]) a:active .calcite-button--icon,:host([appearance=outline][color=light]) a:focus .calcite-button--icon{fill:var(--calcite-ui-text-1)}:host([appearance=outline][color=light]) button .calcite-button--icon,:host([appearance=outline][color=light]) a .calcite-button--icon{fill:var(--calcite-ui-text-1)}:host([appearance=outline][color=light]) button calcite-loader,:host([appearance=outline][color=light]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=outline][color=dark]) button,:host([appearance=outline][color=dark]) a{color:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-1);border:1px solid #404040;-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=outline][color=dark]) button:hover,:host([appearance=outline][color=dark]) a:hover{border-color:#404040;-webkit-box-shadow:inset 0 0 0 1px #404040;box-shadow:inset 0 0 0 1px #404040}:host([appearance=outline][color=dark]) button:active,:host([appearance=outline][color=dark]) button:focus,:host([appearance=outline][color=dark]) a:active,:host([appearance=outline][color=dark]) a:focus{color:var(--calcite-ui-text-1);border-color:#4a4a4a;-webkit-box-shadow:inset 0 0 0 2px #4a4a4a;box-shadow:inset 0 0 0 2px #4a4a4a}:host([appearance=outline][color=dark]) button:active .calcite-button--icon,:host([appearance=outline][color=dark]) button:focus .calcite-button--icon,:host([appearance=outline][color=dark]) a:active .calcite-button--icon,:host([appearance=outline][color=dark]) a:focus .calcite-button--icon{fill:var(--calcite-ui-text-1)}:host([appearance=outline][color=dark]) button .calcite-button--icon,:host([appearance=outline][color=dark]) a .calcite-button--icon{fill:var(--calcite-ui-text-1)}:host([appearance=outline][color=dark]) button calcite-loader,:host([appearance=outline][color=dark]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=clear][color=blue]) button,:host([appearance=clear][color=blue]) a{color:var(--calcite-ui-brand);background-color:transparent;border:1px solid var(--calcite-ui-brand);-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=clear][color=blue]) button:hover,:host([appearance=clear][color=blue]) a:hover{border-color:var(--calcite-ui-brand);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand)}:host([appearance=clear][color=blue]) button:active,:host([appearance=clear][color=blue]) button:focus,:host([appearance=clear][color=blue]) a:active,:host([appearance=clear][color=blue]) a:focus{color:var(--calcite-ui-brand-press);border-color:var(--calcite-ui-brand-press);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-brand-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-brand-press)}:host([appearance=clear][color=blue]) button:active .calcite-button--icon,:host([appearance=clear][color=blue]) button:focus .calcite-button--icon,:host([appearance=clear][color=blue]) a:active .calcite-button--icon,:host([appearance=clear][color=blue]) a:focus .calcite-button--icon{fill:var(--calcite-ui-brand-press)}:host([appearance=clear][color=blue]) button .calcite-button--icon,:host([appearance=clear][color=blue]) a .calcite-button--icon{fill:var(--calcite-ui-brand)}:host([appearance=clear][color=blue]) button calcite-loader,:host([appearance=clear][color=blue]) a calcite-loader{color:var(--calcite-ui-brand)}:host([appearance=clear][color=red]) button,:host([appearance=clear][color=red]) a{color:var(--calcite-ui-danger);background-color:transparent;border:1px solid var(--calcite-ui-danger);-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=clear][color=red]) button:hover,:host([appearance=clear][color=red]) a:hover{border-color:var(--calcite-ui-danger);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-danger);box-shadow:inset 0 0 0 1px var(--calcite-ui-danger)}:host([appearance=clear][color=red]) button:active,:host([appearance=clear][color=red]) button:focus,:host([appearance=clear][color=red]) a:active,:host([appearance=clear][color=red]) a:focus{color:var(--calcite-ui-danger-press);border-color:var(--calcite-ui-danger-press);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-danger-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-danger-press)}:host([appearance=clear][color=red]) button:active .calcite-button--icon,:host([appearance=clear][color=red]) button:focus .calcite-button--icon,:host([appearance=clear][color=red]) a:active .calcite-button--icon,:host([appearance=clear][color=red]) a:focus .calcite-button--icon{fill:var(--calcite-ui-danger-press)}:host([appearance=clear][color=red]) button .calcite-button--icon,:host([appearance=clear][color=red]) a .calcite-button--icon{fill:var(--calcite-ui-danger)}:host([appearance=clear][color=red]) button calcite-loader,:host([appearance=clear][color=red]) a calcite-loader{color:var(--calcite-ui-danger)}:host([appearance=clear][color=light]) button,:host([appearance=clear][color=light]) a{color:var(--calcite-ui-text-1);background-color:transparent;border:1px solid var(--calcite-ui-foreground-3);-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=clear][color=light]) button:hover,:host([appearance=clear][color=light]) a:hover{border-color:var(--calcite-ui-foreground-3);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-foreground-3);box-shadow:inset 0 0 0 1px var(--calcite-ui-foreground-3)}:host([appearance=clear][color=light]) button:active,:host([appearance=clear][color=light]) button:focus,:host([appearance=clear][color=light]) a:active,:host([appearance=clear][color=light]) a:focus{color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-border-2);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-border-2);box-shadow:inset 0 0 0 2px var(--calcite-ui-border-2)}:host([appearance=clear][color=light]) button:active .calcite-button--icon,:host([appearance=clear][color=light]) button:focus .calcite-button--icon,:host([appearance=clear][color=light]) a:active .calcite-button--icon,:host([appearance=clear][color=light]) a:focus .calcite-button--icon{fill:var(--calcite-ui-text-1)}:host([appearance=clear][color=light]) button .calcite-button--icon,:host([appearance=clear][color=light]) a .calcite-button--icon{fill:var(--calcite-ui-text-1)}:host([appearance=clear][color=light]) button calcite-loader,:host([appearance=clear][color=light]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=clear][color=dark]) button,:host([appearance=clear][color=dark]) a{color:var(--calcite-ui-text-1);background-color:transparent;border:1px solid #404040;-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=clear][color=dark]) button:hover,:host([appearance=clear][color=dark]) a:hover{border-color:#404040;-webkit-box-shadow:inset 0 0 0 1px #404040;box-shadow:inset 0 0 0 1px #404040}:host([appearance=clear][color=dark]) button:active,:host([appearance=clear][color=dark]) button:focus,:host([appearance=clear][color=dark]) a:active,:host([appearance=clear][color=dark]) a:focus{color:var(--calcite-ui-text-1);border-color:#4a4a4a;-webkit-box-shadow:inset 0 0 0 2px #4a4a4a;box-shadow:inset 0 0 0 2px #4a4a4a}:host([appearance=clear][color=dark]) button:active .calcite-button--icon,:host([appearance=clear][color=dark]) button:focus .calcite-button--icon,:host([appearance=clear][color=dark]) a:active .calcite-button--icon,:host([appearance=clear][color=dark]) a:focus .calcite-button--icon{fill:var(--calcite-ui-text-1)}:host([appearance=clear][color=dark]) button .calcite-button--icon,:host([appearance=clear][color=dark]) a .calcite-button--icon{fill:var(--calcite-ui-text-1)}:host([appearance=clear][color=dark]) button calcite-loader,:host([appearance=clear][color=dark]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([dir=ltr][appearance=outline][split-child=primary]) button,:host([dir=rtl][appearance=outline][split-child=secondary]) button,:host([dir=ltr][appearance=clear][split-child=primary]) button,:host([dir=rtl][appearance=clear][split-child=secondary]) button{border-right:0}:host([dir=ltr][appearance=outline][split-child=secondary]) button,:host([dir=rtl][appearance=outline][split-child=primary]) button,:host([dir=ltr][appearance=clear][split-child=secondary]) button,:host([dir=rtl][appearance=clear][split-child=primary]) button{border-left:0}:host([appearance=transparent][color=blue]) button,:host([appearance=transparent][color=blue]) a{color:var(--calcite-ui-text-link);background-color:transparent}:host([appearance=transparent][color=blue]) button:hover,:host([appearance=transparent][color=blue]) button:focus,:host([appearance=transparent][color=blue]) a:hover,:host([appearance=transparent][color=blue]) a:focus{background-color:var(--calcite-button-transparent-hover)}:host([appearance=transparent][color=blue]) button:active,:host([appearance=transparent][color=blue]) a:active{background-color:var(--calcite-button-transparent-press)}:host([appearance=transparent][color=blue]) button calcite-loader,:host([appearance=transparent][color=blue]) a calcite-loader{color:var(--calcite-ui-text-link)}:host([appearance=transparent][color=red]) button,:host([appearance=transparent][color=red]) a{color:var(--calcite-ui-danger-press);background-color:transparent}:host([appearance=transparent][color=red]) button:hover,:host([appearance=transparent][color=red]) button:focus,:host([appearance=transparent][color=red]) a:hover,:host([appearance=transparent][color=red]) a:focus{background-color:var(--calcite-button-transparent-hover)}:host([appearance=transparent][color=red]) button:active,:host([appearance=transparent][color=red]) a:active{background-color:var(--calcite-button-transparent-press)}:host([appearance=transparent][color=red]) button calcite-loader,:host([appearance=transparent][color=red]) a calcite-loader{color:var(--calcite-ui-danger-press)}:host([appearance=transparent][color=light]) button,:host([appearance=transparent][color=light]) a{color:var(--calcite-ui-foreground-1);background-color:transparent}:host([appearance=transparent][color=light]) button:hover,:host([appearance=transparent][color=light]) button:focus,:host([appearance=transparent][color=light]) a:hover,:host([appearance=transparent][color=light]) a:focus{background-color:var(--calcite-button-transparent-hover)}:host([appearance=transparent][color=light]) button:active,:host([appearance=transparent][color=light]) a:active{background-color:var(--calcite-button-transparent-press)}:host([appearance=transparent][color=light]) button calcite-loader,:host([appearance=transparent][color=light]) a calcite-loader{color:var(--calcite-ui-foreground-1)}:host([appearance=transparent][color=dark]) button,:host([appearance=transparent][color=dark]) a{color:var(--calcite-ui-text-1);background-color:transparent}:host([appearance=transparent][color=dark]) button:hover,:host([appearance=transparent][color=dark]) button:focus,:host([appearance=transparent][color=dark]) a:hover,:host([appearance=transparent][color=dark]) a:focus{background-color:var(--calcite-button-transparent-hover)}:host([appearance=transparent][color=dark]) button:active,:host([appearance=transparent][color=dark]) a:active{background-color:var(--calcite-button-transparent-press)}:host([appearance=transparent][color=dark]) button calcite-loader,:host([appearance=transparent][color=dark]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([scale=s]:not([appearance=transparent])) button.content--slotted,:host([scale=s]:not([appearance=transparent])) a.content--slotted{padding:7px 12px;font-size:12px;line-height:1.33}:host([scale=s][appearance=transparent]) button.content--slotted,:host([scale=s][appearance=transparent]) a.content--slotted{padding:8px 12px;font-size:12px;line-height:1.33}:host([scale=m]:not([appearance=transparent])) button.content--slotted,:host([scale=m]:not([appearance=transparent])) a.content--slotted{padding:13px 20px;font-size:14px;line-height:1.15}:host([scale=m][appearance=transparent]) button.content--slotted,:host([scale=m][appearance=transparent]) a.content--slotted{padding:14px 20px;font-size:14px;line-height:1.15}:host([scale=l]:not([appearance=transparent])) button.content--slotted,:host([scale=l]:not([appearance=transparent])) a.content--slotted{padding:15px 24px;font-size:18px;line-height:1.2}:host([scale=l][appearance=transparent]) button.content--slotted,:host([scale=l][appearance=transparent]) a.content--slotted{padding:16px 24px;font-size:18px;line-height:1.2}:host([scale=s]) button:not(.content--slotted),:host([scale=s]) a:not(.content--slotted){height:32px;width:32px;font-size:12px}:host([scale=m]) button:not(.content--slotted),:host([scale=m]) a:not(.content--slotted){height:44px;width:44px;font-size:14px}:host([scale=l]) button:not(.content--slotted),:host([scale=l]) a:not(.content--slotted){height:56px;width:56px;font-size:18px}:host([scale=s][icon-start][icon-end]) button:not(.content--slotted),:host([scale=s][icon-start][icon-end]) a:not(.content--slotted){height:32px;width:48px;font-size:12px}:host([scale=m][icon-start][icon-end]) button:not(.content--slotted),:host([scale=m][icon-start][icon-end]) a:not(.content--slotted){height:44px;width:66px;font-size:14px}:host([scale=l][icon-start][icon-end]) button:not(.content--slotted),:host([scale=l][icon-start][icon-end]) a:not(.content--slotted){height:56px;width:84px;font-size:18px}";export{c as calcite_button}