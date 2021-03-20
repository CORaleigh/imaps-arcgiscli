import{r as t,c as i,h as s,H as a,g as e}from"./p-0f61cfe6.js";import{f as r,g as n}from"./p-bdd3281d.js";import{g as o}from"./p-a4e6e35b.js";const h=class{constructor(s){t(this,s),this.calciteRadioButtonChange=i(this,"calciteRadioButtonChange",7),this.calciteRadioButtonCheckedChange=i(this,"calciteRadioButtonCheckedChange",7),this.calciteRadioButtonFocusedChange=i(this,"calciteRadioButtonFocusedChange",7),this.checked=!1,this.disabled=!1,this.focused=!1,this.hidden=!1,this.hovered=!1,this.required=!1,this.scale="m",this.theme="light",this.setInputEl=t=>{this.inputEl=t},this.formResetHandler=()=>{var t;this.checked=this.initialChecked,this.initialChecked&&(null===(t=this.inputEl)||void 0===t||t.setAttribute("checked",""))},this.hideInputEl=()=>{this.inputEl.style.setProperty("margin","0","important"),this.inputEl.style.setProperty("opacity","0","important"),this.inputEl.style.setProperty("padding","0","important"),this.inputEl.style.setProperty("position","absolute","important"),this.inputEl.style.setProperty("transform","none","important"),this.inputEl.style.setProperty("z-index","-1","important")},this.onInputBlur=()=>{this.focused=!1,this.calciteRadioButtonFocusedChange.emit()},this.onInputFocus=()=>{this.focused=!0,this.calciteRadioButtonFocusedChange.emit()}}checkedChanged(t){t&&this.uncheckOtherRadioButtonsInGroup(),this.inputEl&&(this.inputEl.checked=t),this.calciteRadioButtonCheckedChange.emit(t)}disabledChanged(t){this.inputEl.disabled=t}focusedChanged(t){this.inputEl&&(t&&!this.el.hasAttribute("hidden")?this.inputEl.focus():this.inputEl.blur())}hiddenChanged(t){this.inputEl.hidden=t}nameChanged(t){if(this.name===t)return;this.inputEl&&(this.inputEl.name=t),this.checkLastRadioButton();const i=this.rootNode.querySelector(`input[name="${this.name}"]:checked`);(null==i?void 0:i.value)||this.uncheckAllRadioButtonsInGroup()}requiredChanged(t){this.inputEl.required=t}async setFocus(){r(this.inputEl)}checkLastRadioButton(){const t=Array.from(this.rootNode.querySelectorAll("calcite-radio-button")).filter((t=>t.name===this.name)).filter((t=>t.checked));if((null==t?void 0:t.length)>1){const i=t[t.length-1];t.filter((t=>t!==i)).forEach((t=>{t.checked=!1,t.emitCheckedChange()}))}}async emitCheckedChange(){this.calciteRadioButtonCheckedChange.emit()}uncheckAllRadioButtonsInGroup(){Array.from(this.rootNode.querySelectorAll("calcite-radio-button")).filter((t=>t.name===this.name)).forEach((t=>{t.checked&&(t.checked=!1,t.focused=!1)}))}uncheckOtherRadioButtonsInGroup(){Array.from(this.rootNode.querySelectorAll("calcite-radio-button")).filter((t=>t.name===this.name&&t.guid!==this.guid)).forEach((t=>{t.checked&&(t.checked=!1,t.focused=!1)}))}check(t){!this.el.closest("label")||t.target!==this.el&&t.target!==this.radio||t.preventDefault(),this.disabled||this.hidden||(this.uncheckOtherRadioButtonsInGroup(),this.checked=!0,this.focused=!0,this.calciteRadioButtonChange.emit())}mouseenter(){this.hovered=!0}mouseleave(){this.hovered=!1}connectedCallback(){this.rootNode=this.el.getRootNode(),this.guid=this.el.id||`calcite-radio-button-${o()}`,this.initialChecked=this.checked,this.name&&this.checkLastRadioButton();const t=this.el.closest("form");t&&t.addEventListener("reset",this.formResetHandler)}componentDidLoad(){this.hideInputEl(),this.focused&&this.inputEl.focus()}disconnectedCallback(){const t=this.el.closest("form");t&&t.removeEventListener("reset",this.formResetHandler)}renderLabel(){return this.el.textContent?s("calcite-label",{dir:n(this.el),"disable-spacing":!0,disabled:this.disabled,for:`${this.guid}-input`,layout:"inline",scale:this.scale},s("slot",null)):s("slot",null)}render(){return s(a,{labeled:!!this.el.textContent},s("input",{"aria-label":this.value||this.guid,checked:this.checked,disabled:this.disabled,hidden:this.hidden,id:`${this.guid}-input`,name:this.name,onBlur:this.onInputBlur,onFocus:this.onInputFocus,ref:this.setInputEl,required:this.required,type:"radio",value:this.value}),s("calcite-radio",{checked:this.checked,disabled:this.disabled,focused:this.focused,hidden:this.hidden,hovered:this.hovered,ref:t=>this.radio=t,scale:this.scale,theme:this.theme}),this.renderLabel())}get el(){return e(this)}static get watchers(){return{checked:["checkedChanged"],disabled:["disabledChanged"],focused:["focusedChanged"],hidden:["hiddenChanged"],name:["nameChanged"],required:["requiredChanged"]}}};h.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}.sc-calcite-radio-button:root{--calcite-popper-transition:150ms ease-in-out}[hidden].sc-calcite-radio-button-h{display:none}.sc-calcite-radio-button-h{cursor:pointer;display:inline-block}[labeled].sc-calcite-radio-button-h{--calcite-label-margin-bottom:0;-ms-flex-align:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex;gap:8px}[disabled].sc-calcite-radio-button-h{cursor:default}.sc-calcite-radio-button-h[disabled]>.sc-calcite-radio-button-s>calcite-label{cursor:default}[scale=s][labeled].sc-calcite-radio-button-h{line-height:1.33;margin-bottom:8px;margin-right:12px}@supports not (display: grid){[scale=s][labeled].sc-calcite-radio-button-h calcite-radio.sc-calcite-radio-button{margin-right:8px}}[scale=m][labeled].sc-calcite-radio-button-h{line-height:1.15;margin-bottom:8px;margin-right:16px}@supports not (display: grid){[scale=m][labeled].sc-calcite-radio-button-h calcite-radio.sc-calcite-radio-button{margin-right:8px}}[scale=l][labeled].sc-calcite-radio-button-h{gap:12px;line-height:1.2;margin-bottom:10px;margin-right:20px}@supports not (display: grid){[scale=l][labeled].sc-calcite-radio-button-h calcite-radio.sc-calcite-radio-button{margin-right:12px}}[hidden].sc-calcite-radio-button-h{display:none}";export{h as calcite_radio_button}