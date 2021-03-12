import{r as t,c as e,h as i,H as s,g as r}from"./p-0f61cfe6.js";import{g as a,b as o}from"./p-fbd3d700.js";import{g as n}from"./p-e75286c4.js";const c=JSON.stringify({display:"flex",flexDirection:"column",flexWrap:"wrap",width:"100%",minWidth:"100%"}).replace(/([a-z0-9])([A-Z])/g,"$1-$2").replace(/[,]/g,";").replace(/["{}]/g,"").toLowerCase(),l=class{constructor(i){t(this,i),this.calciteStepperItemChange=e(this,"calciteStepperItemChange",7),this.icon=!1,this.layout="horizontal",this.numbered=!1,this.scale="m",this.items=[],this.sortedItems=[]}contentWatcher(){"horizontal"===this.layout&&(!this.stepperContentContainer&&this.requestedContent&&this.addHorizontalContentContainer(),this.updateContent(this.requestedContent))}componentDidLoad(){this.currentPosition||this.calciteStepperItemChange.emit({position:0})}componentWillLoad(){"horizontal"!==this.layout||this.stepperContentContainer||this.addHorizontalContentContainer()}render(){const t=a(this.el);return i(s,{dir:t},i("slot",null))}calciteStepperItemKeyEvent(t){const e=t.detail.item,i=t.target,s=0===this.itemIndex(i),r=this.itemIndex(i)===this.sortedItems.length-1;switch(n(e.key)){case"ArrowDown":case"ArrowRight":r?this.focusFirstItem():this.focusNextItem(i);break;case"ArrowUp":case"ArrowLeft":s?this.focusLastItem():this.focusPrevItem(i);break;case"Home":this.focusFirstItem();break;case"End":this.focusLastItem()}}registerItem(t){const e={item:t.target,position:t.detail.position,content:t.detail.content};e.content&&e.item.active&&(this.requestedContent=e.content),this.items.includes(e)||this.items.push(e),this.sortedItems=this.sortItems()}updateItem(t){t.detail.content&&(this.requestedContent=t.detail.content),this.currentPosition=t.detail.position,this.calciteStepperItemChange.emit({position:this.currentPosition})}async nextStep(){this.currentPosition=this.currentPosition+1<this.items.length?this.currentPosition+1:this.currentPosition,this.emitChangedItem()}async prevStep(){this.currentPosition=this.currentPosition-1>=0?this.currentPosition-1:this.currentPosition,this.emitChangedItem()}async goToStep(t){this.currentPosition=t-1,this.emitChangedItem()}async startStep(){this.currentPosition=0,this.emitChangedItem()}async endStep(){this.currentPosition=this.items.length-1,this.emitChangedItem()}addHorizontalContentContainer(){this.stepperContentContainer=document.createElement("div"),this.stepperContentContainer.classList.add("calcite-stepper-content"),!(!navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/MSIE/))&&(this.stepperContentContainer.style.cssText=c),this.el.insertAdjacentElement("beforeend",this.stepperContentContainer)}emitChangedItem(){this.calciteStepperItemChange.emit({position:this.currentPosition})}focusFirstItem(){this.focusElement(this.sortedItems[0])}focusLastItem(){this.focusElement(this.sortedItems[this.sortedItems.length-1])}focusNextItem(t){const e=this.itemIndex(t);this.focusElement(this.sortedItems[e+1]||this.sortedItems[0])}focusPrevItem(t){const e=this.itemIndex(t);this.focusElement(this.sortedItems[e-1]||this.sortedItems[this.sortedItems.length-1])}itemIndex(t){return this.sortedItems.indexOf(t)}focusElement(t){t.focus()}sortItems(){const t=Array.from(this.items).filter((t=>!t.item.disabled)).sort(((t,e)=>t.position-e.position)).map((t=>t.item));return[...Array.from(new Set(t))]}updateContent(t){this.stepperContentContainer.innerHTML="",navigator.userAgent.match(/Trident/)&&!navigator.userAgent.match(/MSIE/)?t.forEach((t=>{if("#text"===t.nodeName){const e=document.createTextNode(t.textContent.trim());e.length>0&&this.stepperContentContainer.appendChild(e)}else{if(!t.nodeName)return;this.stepperContentContainer.insertAdjacentHTML("beforeend",t.outerHTML)}})):this.stepperContentContainer.append(...t)}get el(){return r(this)}static get watchers(){return{requestedContent:["contentWatcher"]}}};l.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:stretch;align-items:stretch;width:100%;min-width:100%}:host([layout=vertical]){-ms-flex-direction:column;flex-direction:column;-ms-flex:1 auto auto;flex:1 auto auto}:host ::slotted(.calcite-stepper-content){display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;min-width:100%}";const p=class{constructor(i){t(this,i),this.calciteStepperItemKeyEvent=e(this,"calciteStepperItemKeyEvent",7),this.calciteStepperItemSelect=e(this,"calciteStepperItemSelect",7),this.calciteStepperItemRegister=e(this,"calciteStepperItemRegister",7),this.active=!1,this.complete=!1,this.error=!1,this.disabled=!1,this.icon=!1,this.numbered=!1,this.scale="m"}disabledWatcher(){this.registerStepperItem()}componentWillLoad(){this.icon=o(this.el,"icon",!1),this.numbered=o(this.el,"numbered",!1),this.layout=o(this.el,"layout",!1),this.scale=o(this.el,"scale","m"),this.parentStepperEl=this.el.parentElement}componentDidLoad(){this.itemPosition=this.getItemPosition(),this.itemContent=this.getItemContent(),this.registerStepperItem(),this.active&&this.emitRequestedItem()}componentDidUpdate(){this.active&&this.emitRequestedItem()}render(){const t=a(this.el);return i(s,{"aria-expanded":this.active.toString(),dir:t,onClick:()=>this.emitRequestedItem(),tabindex:this.disabled?null:0},i("div",{class:"stepper-item-header"},this.icon?this.renderIcon():null,this.numbered?i("div",{class:"stepper-item-number"},this.getItemPosition()+1,"."):null,i("div",{class:"stepper-item-header-text"},i("span",{class:"stepper-item-title"},this.itemTitle),i("span",{class:"stepper-item-subtitle"},this.itemSubtitle))),i("div",{class:"stepper-item-content"},i("slot",null)))}keyDownHandler(t){if(!this.disabled&&t.target===this.el)switch(n(t.key)){case" ":case"Enter":this.emitRequestedItem(),t.preventDefault();break;case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"Home":case"End":this.calciteStepperItemKeyEvent.emit({item:t}),t.preventDefault()}}updateActiveItemOnChange(t){t.target===this.parentStepperEl&&(this.activePosition=t.detail.position,this.determineActiveItem())}renderIcon(){return i("calcite-icon",{class:"stepper-item-icon",icon:this.active?"circleF":this.error?"exclamationMarkCircleF":this.complete?"checkCircleF":"circle",scale:"s"})}determineActiveItem(){this.active=!this.disabled&&this.itemPosition===this.activePosition}registerStepperItem(){this.calciteStepperItemRegister.emit({position:this.itemPosition,content:this.itemContent})}emitRequestedItem(){this.disabled||this.calciteStepperItemSelect.emit({position:this.itemPosition,content:this.itemContent})}getItemContent(){var t;return(null===(t=this.el.shadowRoot)||void 0===t?void 0:t.querySelector("slot"))?this.el.shadowRoot.querySelector("slot").assignedNodes({flatten:!0}):this.el.querySelector(".stepper-item-content")?this.el.querySelector(".stepper-item-content").childNodes:null}getItemPosition(){return Array.prototype.indexOf.call(this.parentStepperEl.querySelectorAll("calcite-stepper-item"),this.el)}get el(){return r(this)}static get watchers(){return{disabled:["disabledWatcher"]}}};p.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]){--calcite-stepper-item-spacing-unit-s:0.1875rem;--calcite-stepper-item-spacing-unit-m:0.375rem;--calcite-stepper-item-spacing-unit-l:0.75rem;font-size:0.875rem;line-height:1.5}:host([scale=m]){--calcite-stepper-item-spacing-unit-s:0.25rem;--calcite-stepper-item-spacing-unit-m:0.5rem;--calcite-stepper-item-spacing-unit-l:1rem;font-size:0.9375rem;line-height:1.5}:host([scale=l]){--calcite-stepper-item-spacing-unit-s:0.375rem;--calcite-stepper-item-spacing-unit-m:0.75rem;--calcite-stepper-item-spacing-unit-l:1.5rem;font-size:1rem;line-height:1.5}:host-context([theme=dark]){--calcite-ui-brand:#009AF2;--calcite-ui-brand-hover:#007AC2;--calcite-ui-brand-press:#00619B;--calcite-ui-background:#353535;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#202020;--calcite-ui-foreground-3:#151515;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-text-inverse:#151515;--calcite-ui-text-link:#00A0FF;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-input:#757575;--calcite-ui-info:#00A0FF;--calcite-ui-success:#36DA43;--calcite-ui-warning:#FFC900;--calcite-ui-danger:#FE583E;--calcite-ui-danger-hover:#FF0015;--calcite-ui-danger-press:#D90012}:host{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;color:var(--calcite-ui-text-3);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;text-decoration:none;outline:none;position:relative;border-top:3px solid var(--calcite-ui-border-3);cursor:pointer;margin-right:var(--calcite-stepper-item-spacing-unit-l)}:host([dir=rtl]){margin-left:var(--calcite-stepper-item-spacing-unit-l);margin-right:0}:host{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus){outline:2px solid var(--calcite-ui-brand);outline-offset:2px}:host .stepper-item-header{display:-ms-flexbox;display:flex;-ms-flex-direction:var(--calcite-stepper-item-flex-direction);flex-direction:var(--calcite-stepper-item-flex-direction);-ms-flex-align:start;align-items:flex-start;cursor:pointer}:host .stepper-item-content,:host .stepper-item-header{padding:var(--calcite-stepper-item-spacing-unit-l) var(--calcite-stepper-item-spacing-unit-m);padding-left:0;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;text-align:left}:host([dir=rtl]) .stepper-item-content,:host([dir=rtl]) .stepper-item-header{padding-left:initial;padding-right:0;text-align:right}:host .stepper-item-header *{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host .stepper-item-content{-ms-flex-direction:column;flex-direction:column;width:100%;display:none}:host .stepper-item-icon{margin-right:var(--calcite-stepper-item-spacing-unit-l);margin-top:var(--calcite-stepper-item-spacing-unit-s);color:var(--calcite-ui-text-3);opacity:var(--calcite-ui-opacity-disabled);height:12px;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-item-align:start;align-self:flex-start;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host([dir=rtl]) .stepper-item-icon{margin-left:var(--calcite-stepper-item-spacing-unit-l);margin-right:0}:host .stepper-item-header-text{margin-right:auto;-ms-flex-direction:column;flex-direction:column;text-align:initial}:host([dir=rtl]) .stepper-item-header-text{margin-left:auto;margin-right:0}:host .stepper-item-title,:host .stepper-item-subtitle{display:-ms-flexbox;display:flex;width:100%}:host .stepper-item-title{color:var(--calcite-ui-text-2);font-weight:500}:host .stepper-item-subtitle{color:var(--calcite-ui-text-3)}:host([dir=rtl]) .stepper-item-title{margin-right:0;margin-left:auto}:host .stepper-item-number{font-weight:bold;color:var(--calcite-ui-text-3);margin-right:var(--calcite-stepper-item-spacing-unit-l);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host([dir=rtl]) .stepper-item-number{margin-left:var(--calcite-stepper-item-spacing-unit-l);margin-right:initial}:host([disabled]){opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]),:host([disabled]) *{cursor:not-allowed;pointer-events:none}:host([complete]){border-top-color:rgba(0, 122, 194, 0.5)}:host([complete]) .stepper-item-icon{color:var(--calcite-ui-brand)}:host([error]){border-top-color:var(--calcite-ui-danger)}:host([error]) .stepper-item-number{color:var(--calcite-ui-danger)}:host([error]) .stepper-item-icon{color:var(--calcite-ui-danger);opacity:1}:host(:hover:not([disabled]):not([active])),:host(:focus:not([disabled]):not([active])){border-top-color:rgba(0, 122, 194, 0.75)}:host(:hover:not([disabled]):not([active])) .stepper-item-title,:host(:focus:not([disabled]):not([active])) .stepper-item-title{color:var(--calcite-ui-text-1)}:host(:hover:not([disabled]):not([active])) .stepper-item-subtitle,:host(:focus:not([disabled]):not([active])) .stepper-item-subtitle{color:var(--calcite-ui-text-2)}:host([error]:hover:not([disabled]):not([active])),:host([error]:focus:not([disabled]):not([active])){border-top-color:rgba(216, 48, 32, 0.75)}:host([active]){border-top-color:var(--calcite-ui-brand)}:host([active]) .stepper-item-title{color:var(--calcite-ui-text-1)}:host([active]) .stepper-item-subtitle{color:var(--calcite-ui-text-2)}:host([active]) .stepper-item-number{color:var(--calcite-ui-brand)}:host([active]) .stepper-item-icon{color:var(--calcite-ui-brand);opacity:1}:host([layout=vertical]){-ms-flex:1 1 auto;flex:1 1 auto;border-top:0;border-left:3px solid var(--calcite-ui-border-3);padding:0 0 0 var(--calcite-stepper-item-spacing-unit-l);margin:0 0 var(--calcite-stepper-item-spacing-unit-m) 0}:host([layout=vertical]) .stepper-item-icon{margin:var(--calcite-stepper-item-spacing-unit-m) 0 0 auto;padding-left:var(--calcite-stepper-item-spacing-unit-l);-ms-flex-order:3;order:3}:host([layout=vertical]) .stepper-item-header{padding-right:0}:host([layout=vertical]) .stepper-item-content{padding:0}:host([layout=vertical][active]) .stepper-item-content{display:-ms-flexbox;display:flex}:host([layout=vertical][active]) .stepper-item-content ::slotted(:last-child){margin-bottom:var(--calcite-stepper-item-spacing-unit-l)}:host([layout=vertical][dir=rtl]){border-left:0;border-right:3px solid var(--calcite-ui-border-3);padding:0 var(--calcite-stepper-item-spacing-unit-l) 0 0}:host([layout=vertical][dir=rtl]) .stepper-item-icon{margin:var(--calcite-stepper-item-spacing-unit-m) auto 0 0;padding-left:0;padding-right:var(--calcite-stepper-item-spacing-unit-l)}:host([layout=vertical][dir=rtl]) .stepper-item-header{padding-left:0;padding-right:intial}:host([layout=vertical][complete]){border-color:rgba(0, 122, 194, 0.5)}:host([layout=vertical][error]){border-color:var(--calcite-ui-danger)}:host([layout=vertical][active]){border-color:var(--calcite-ui-brand)}:host([layout=vertical]:hover:not([disabled]):not([active])),:host([layout=vertical]:focus:not([disabled]):not([active])){border-color:rgba(0, 122, 194, 0.75)}:host([layout=vertical][error]:hover:not([disabled]):not([active])),:host([layout=vertical][error]:focus:not([disabled]):not([active])){border-color:rgba(216, 48, 32, 0.75)}";export{l as calcite_stepper,p as calcite_stepper_item}