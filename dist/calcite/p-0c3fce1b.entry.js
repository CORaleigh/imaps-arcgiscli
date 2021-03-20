import{r as t,h as i,H as e,g as n}from"./p-0f61cfe6.js";import{g as o}from"./p-bdd3281d.js";const a=class{constructor(i){t(this,i),this.checked=!1,this.disabled=!1,this.hidden=!1,this.name="",this.inputEnabled=!1,this.inputAlignment="start",this.theme="light",this.type="radio",this.width="auto",this.focused=!1}checkedChanged(t){this.input.checked=t}nameChanged(t){this.input.name=t}async setFocus(){this.input.setFocus()}calciteCheckboxChangeEvent(t){const i=t.target;i===this.input&&(this.checked=i.checked)}calciteCheckboxFocusedChangeEvent(t){t.target===this.input&&(this.focused=t.detail)}calciteRadioButtonCheckedChangeEvent(t){const i=t.target;i===this.input&&(this.checked=i.checked),t.stopPropagation()}calciteRadioButtonFocusedChangeEvent(t){const i=t.target;i===this.input&&(this.focused=i.focused)}click(t){["calcite-tile","calcite-tile-select"].includes(t.target.localName)&&this.input.click()}mouseenter(){"calcite-radio-button"===this.input.localName&&(this.input.hovered=!0),"calcite-checkbox"===this.input.localName&&(this.input.hovered=!0)}mouseleave(){"calcite-radio-button"===this.input.localName&&(this.input.hovered=!1),"calcite-checkbox"===this.input.localName&&(this.input.hovered=!1)}connectedCallback(){this.renderInput()}disconnectedCallback(){this.input.parentNode.removeChild(this.input)}renderInput(){this.input=document.createElement("radio"===this.type?"calcite-radio-button":"calcite-checkbox"),this.input.checked=this.checked,this.input.disabled=this.disabled,this.input.hidden=this.hidden,this.input.id=this.el.id,this.name&&(this.input.name=this.name),this.input.theme=this.theme,this.value&&(this.input.value=this.value),this.el.insertAdjacentElement("beforeend",this.input)}render(){const t=o(this.el);return i(e,{dir:t},i("div",{class:{focused:this.focused,root:!0}},i("calcite-tile",{active:this.checked,description:this.description,embed:!0,heading:this.heading,icon:this.icon}),i("slot",null)))}get el(){return n(this)}static get watchers(){return{checked:["checkedChanged"],name:["nameChanged"]}}};a.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}.root{background-color:var(--calcite-ui-foreground-1);-webkit-box-shadow:0 0 0 1px var(--calcite-ui-border-2);box-shadow:0 0 0 1px var(--calcite-ui-border-2);-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;display:inline-block;height:100%;max-width:300px;padding:0.75rem;position:relative;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;vertical-align:top;z-index:10}:host(:hover) .root{z-index:20;-webkit-box-shadow:0 0 0 1px var(--calcite-ui-border-1);box-shadow:0 0 0 1px var(--calcite-ui-border-1)}:host([checked]) .root{z-index:30;-webkit-box-shadow:0 0 0 1px var(--calcite-ui-brand);box-shadow:0 0 0 1px var(--calcite-ui-brand)}.root.focused{z-index:30}:host(:not([input-enabled]):hover) .root{-webkit-box-shadow:0 0 0 1px var(--calcite-ui-brand);box-shadow:0 0 0 1px var(--calcite-ui-brand)}:host(:not([input-enabled])) .root.focused{-webkit-box-shadow:0 0 0 1px var(--calcite-ui-brand), inset 0 0 0 2px var(--calcite-ui-foreground-1), inset 0 0 0 5px var(--calcite-ui-brand);box-shadow:0 0 0 1px var(--calcite-ui-brand), inset 0 0 0 2px var(--calcite-ui-foreground-1), inset 0 0 0 5px var(--calcite-ui-brand)}:host([width=full]) .root{max-width:none;display:block}:host(:not([input-enabled])) ::slotted(calcite-checkbox),:host(:not([input-enabled])) ::slotted(calcite-radio-button){position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host([heading]:not([icon]):not([description])) .root{-ms-flex-align:center;align-items:center}:host([input-enabled][input-alignment=start][icon][heading][description]) .root,:host([input-enabled][input-alignment=start]:not([icon])[heading]:not([description])) .root{display:inline-grid;grid-gap:0.75rem;grid-template-columns:-webkit-max-content 1fr;grid-template-columns:max-content 1fr}:host([input-enabled][input-alignment=start][icon][heading][description]) ::slotted(calcite-checkbox),:host([input-enabled][input-alignment=start][icon][heading][description]) ::slotted(calcite-radio-button),:host([input-enabled][input-alignment=start]:not([icon])[heading]:not([description])) ::slotted(calcite-checkbox),:host([input-enabled][input-alignment=start]:not([icon])[heading]:not([description])) ::slotted(calcite-radio-button){-ms-flex-order:0;order:0}:host([input-enabled][input-alignment=start][icon][heading][description]) calcite-tile,:host([input-enabled][input-alignment=start]:not([icon])[heading]:not([description])) calcite-tile{-ms-flex-order:1;order:1}:host([input-enabled][input-alignment=start][icon][heading]:not([description])) ::slotted(calcite-checkbox),:host([input-enabled][input-alignment=start][icon][heading]:not([description])) ::slotted(calcite-radio-button){position:absolute;top:0.75rem;left:0.75rem}:host([dir=rtl][input-enabled][input-alignment=start][icon][heading]:not([description])) ::slotted(calcite-checkbox),:host([dir=rtl][input-enabled][input-alignment=start][icon][heading]:not([description])) ::slotted(calcite-radio-button){right:0.75rem;left:unset}:host([input-enabled][input-alignment=end][icon][heading]) ::slotted(calcite-checkbox),:host([input-enabled][input-alignment=end][icon][heading]) ::slotted(calcite-radio-button){position:absolute;top:0.75rem;right:0.75rem}:host([dir=rtl][input-enabled][input-alignment=end][icon][heading]) ::slotted(calcite-checkbox),:host([dir=rtl][input-enabled][input-alignment=end][icon][heading]) ::slotted(calcite-radio-button){right:unset;left:0.75rem}:host([input-enabled][input-alignment=end][heading]:not([icon]):not([description])) .root{display:inline-grid;grid-gap:0.75rem;grid-template-columns:-webkit-max-content 1fr;grid-template-columns:max-content 1fr}:host([input-enabled][input-alignment=end][heading]:not([icon]):not([description])) ::slotted(calcite-checkbox),:host([input-enabled][input-alignment=end][heading]:not([icon]):not([description])) ::slotted(calcite-radio-button){justify-self:flex-end}:host([hidden]){display:none}:host([disabled]){opacity:0.5;pointer-events:none}";export{a as calcite_tile_select}