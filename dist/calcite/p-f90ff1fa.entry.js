import{r as t,c as i,h as e,H as s,g as a}from"./p-0f61cfe6.js";import{g as o}from"./p-fbd3d700.js";import{g as r}from"./p-e75286c4.js";import{g as n}from"./p-a4e6e35b.js";import{d as c}from"./p-fc8feabd.js";import{f as l}from"./p-c10ca461.js";import{u as p,c as h,C as m}from"./p-5ec16bde.js";const d=class{constructor(e){t(this,e),this.calciteLookupChange=i(this,"calciteLookupChange",7),this.calciteComboboxChipDismiss=i(this,"calciteComboboxChipDismiss",7),this.active=!1,this.disabled=!1,this.maxItems=0,this.selectionMode="multi",this.scale="m",this.items=[],this.selectedItems=[],this.visibleItems=[],this.activeItemIndex=-1,this.activeChipIndex=-1,this.activeDescendant="",this.text="",this.textInput=null,this.observer=null,this.guid=n(),this.maxScrollerHeight=0,this.inputHeight=0,this.setInactiveIfNotContained=t=>{this.active&&!t.composedPath().includes(this.el)&&("single"===this.selectionMode&&(this.textInput.value="",this.text="",this.filterItems(""),this.updateActiveItemIndex(-1)),this.active=!1)},this.setMenuEl=t=>{this.menuEl=t},this.setListContainerEl=t=>{this.listContainerEl=t},this.setReferenceEl=t=>{this.referenceEl=t},this.inputHandler=t=>{const i=t.target.value;this.text=i,this.filterItems(i),i&&(this.activeChipIndex=-1)},this.filterItems=c((t=>{const i=((t,i)=>{const e=new RegExp(i,"ig");0===t.length&&console.warn("No data was passed to the filter function.\n    The data argument should be an array of objects");const s=(t,i)=>{let e=!1;return l(t,(t=>{"function"!=typeof t&&(Array.isArray(t)||"object"==typeof t&&null!==t?s(t,i)&&(e=!0):i.test(t)&&(e=!0))})),e};return t.filter((t=>s(t,e)))})(this.data,t).map((t=>t.value));this.items.forEach((t=>{const e=-1===i.indexOf(t.value);t.hidden=e;const[s,a]=t.anscestors;(s||a)&&(i.indexOf(null==s?void 0:s.value)>-1||i.indexOf(null==a?void 0:a.value)>-1)&&(t.hidden=!1),e||t.anscestors.forEach((t=>t.hidden=!1))})),this.visibleItems=this.getVisibleItems()}),100),this.updateItems=()=>{this.items=this.getItems(),this.data=this.getData(),this.selectedItems=this.getSelectedItems(),this.visibleItems=this.getVisibleItems(),this.needsIcon=this.getNeedsIcon(),"single"===this.selectionMode&&this.selectedItems.length&&(this.selectedItem=this.selectedItems[0])},this.comboboxFocusHandler=()=>{this.active=!0,this.textInput.focus()},this.comboboxBlurHandler=t=>{this.setInactiveIfNotContained(t)}}activeHandler(){this.reposition()}documentClickHandler(t){this.setInactiveIfNotContained(t)}calciteComboboxItemChangeHandler(t){this.toggleSelection(t.detail)}calciteChipDismissHandler(t){var i;this.active=!1;const e=null===(i=t.detail)||void 0===i?void 0:i.value,s=this.items.find((t=>t.value===e));s&&this.toggleSelection(s,!1),this.calciteComboboxChipDismiss.emit(t.detail)}keydownHandler(t){switch(r(t.key,o(this.el))){case"Tab":this.activeChipIndex=-1,this.activeItemIndex=-1,this.active=!1;break;case"ArrowLeft":this.previousChip();break;case"ArrowRight":this.nextChip();break;case"ArrowUp":t.preventDefault(),this.active=!0,this.shiftActiveItemIndex(-1);break;case"ArrowDown":t.preventDefault(),this.active=!0,this.shiftActiveItemIndex(1);break;case"Home":this.active=!0,this.updateActiveItemIndex(0);break;case"End":this.active=!0,this.updateActiveItemIndex(this.visibleItems.length-1);break;case"Escape":this.active=!1;break;case"Enter":this.activeItemIndex>-1?this.toggleSelection(this.visibleItems[this.activeItemIndex]):this.activeChipIndex>-1?this.removeActiveChip():this.allowCustomValues&&this.text&&this.addCustomChip(this.text);break;case"Delete":case"Backspace":this.activeChipIndex>-1?this.removeActiveChip():this.text||"multi"!==this.selectionMode||this.removeLastChip();break;default:this.active||this.setFocus()}}async reposition(){const{popper:t,menuEl:i}=this,e=this.getModifiers();t?p({el:i,modifiers:e,placement:"bottom-start",popper:t}):this.createPopper()}async setFocus(){var t;this.active=!0,null===(t=this.textInput)||void 0===t||t.focus(),this.activeChipIndex=-1,this.activeItemIndex=-1}connectedCallback(){this.observer=new MutationObserver(this.updateItems),this.createPopper()}componentWillLoad(){this.updateItems()}componentDidLoad(){var t;null===(t=this.observer)||void 0===t||t.observe(this.el,{childList:!0,subtree:!0}),this.maxScrollerHeight=this.getMaxScrollerHeight(this.items)}componentDidRender(){this.el.offsetHeight!==this.inputHeight&&(this.reposition(),this.inputHeight=this.el.offsetHeight)}disconnectedCallback(){var t;null===(t=this.observer)||void 0===t||t.disconnect(),this.destroyPopper()}textHandler(){this.updateActiveItemIndex(-1)}getModifiers(){return[{name:"flip",enabled:!0,options:{fallbackPlacements:["top-start","top","top-end","bottom-start","bottom","bottom-end"]}}]}createPopper(){this.destroyPopper();const{menuEl:t,referenceEl:i}=this,e=this.getModifiers();this.popper=h({el:t,modifiers:e,placement:"bottom-start",referenceEl:i})}destroyPopper(){const{popper:t}=this;t&&t.destroy(),this.popper=null}getMaxScrollerHeight(t){const{maxItems:i}=this;let e=0,s=0;return t.forEach((t=>{e<i&&i>0&&(s+=this.calculateSingleItemHeight(t),e++)})),s}calculateSingleItemHeight(t){let i=t.offsetHeight;return t.querySelectorAll("calcite-combobox-item").forEach((t=>{i-=t.offsetHeight})),i}toggleSelection(t,i=!t.selected){"multi"===this.selectionMode?(t.selected=i,this.selectedItems=this.getSelectedItems(),this.calciteLookupChange.emit(this.selectedItems),this.resetText(),this.textInput.focus(),this.filterItems("")):(this.items.forEach((t=>t.toggleSelected(!1))),t.toggleSelected(!0),this.selectedItem=t,this.textInput.value=t.textLabel,this.active=!1,this.updateActiveItemIndex(-1),this.resetText(),this.filterItems(""))}getVisibleItems(){return this.items.filter((t=>!t.hidden))}getSelectedItems(){return this.items.filter((t=>t.selected)).sort(((t,i)=>{const e=this.selectedItems.indexOf(t),s=this.selectedItems.indexOf(i);return e>-1&&s>-1?e-s:s-e}))}getData(){return this.items.map((t=>({value:t.value,label:t.textLabel,guid:t.guid})))}getNeedsIcon(){return"single"===this.selectionMode&&this.items.some((t=>t.icon))}resetText(){this.textInput.value="",this.text=""}getItems(){return Array.from(this.el.querySelectorAll("calcite-combobox-item")).filter((t=>!t.disabled))}addCustomChip(t){const i=this.items.find((i=>i.value===t||i.textLabel===t));if(i)this.toggleSelection(i,!0);else{const i=document.createElement("calcite-combobox-item");i.value=t,i.textLabel=t,i.guid=n(),i.selected=!0,this.el.appendChild(i),this.resetText(),this.setFocus(),this.updateItems(),this.filterItems("")}}removeActiveChip(){this.toggleSelection(this.selectedItems[this.activeChipIndex],!1),this.setFocus()}removeLastChip(){this.toggleSelection(this.selectedItems[this.selectedItems.length-1],!1),this.setFocus()}previousChip(){if(this.text)return;const t=this.activeChipIndex;this.activeChipIndex=-1===t?this.selectedItems.length-1:Math.max(t-1,0),this.updateActiveItemIndex(-1),this.focusChip()}nextChip(){if(this.text||-1===this.activeChipIndex)return;const t=this.activeChipIndex+1;t>this.selectedItems.length-1?(this.activeChipIndex=-1,this.setFocus()):(this.activeChipIndex=t,this.focusChip()),this.updateActiveItemIndex(-1)}focusChip(){var t;const i=null===(t=this.selectedItems[this.activeChipIndex])||void 0===t?void 0:t.guid,e=this.referenceEl.querySelector(`#chip-${i}`);null==e||e.setFocus()}shiftActiveItemIndex(t){const i=this.visibleItems.length;this.updateActiveItemIndex((this.activeItemIndex+i+t)%i);const e=this.visibleItems[this.activeItemIndex],s=this.calculateSingleItemHeight(e),{offsetHeight:a,scrollTop:o}=this.listContainerEl;a+o<e.offsetTop+s?this.listContainerEl.scrollTop=e.offsetTop-a+s:e.offsetTop<o&&(this.listContainerEl.scrollTop=e.offsetTop)}updateActiveItemIndex(t){this.activeItemIndex=t;let i=null;this.visibleItems.forEach(((e,s)=>{s===t?(e.active=!0,i=e.guid):e.active=!1})),this.activeDescendant=i,this.activeItemIndex>-1&&(this.activeChipIndex=-1,this.textInput.focus())}renderChips(){const{activeChipIndex:t,scale:i}=this;return this.selectedItems.map(((s,a)=>e("calcite-chip",{class:{chip:!0,"chip--active":t===a},dismissLabel:"remove tag",dismissible:!0,icon:s.icon,id:`chip-${s.guid}`,key:s.value,scale:i,value:s.value},s.textLabel)))}renderInput(){const{active:t,disabled:i,placeholder:s,selectionMode:a,needsIcon:o,label:r}=this,c="single"===a,l=!t&&c&&!!this.selectedItem;return e("span",{class:{"input-wrap":!0,"input-wrap--single":c}},l&&e("span",{class:{label:!0,"label--spaced":o},key:"label",onFocus:this.comboboxFocusHandler,tabindex:"0"},this.selectedItem.textLabel),e("input",{"aria-activedescendant":this.activeDescendant,"aria-autocomplete":"list","aria-controls":n,"aria-label":r,class:{input:!0,"input--transparent":this.activeChipIndex>-1,"input--single":c,"input--hidden":l,"input--icon":c&&o},disabled:i,id:`${n}-input`,key:"input",onBlur:this.comboboxBlurHandler,onFocus:this.comboboxFocusHandler,onInput:this.inputHandler,placeholder:s,ref:t=>this.textInput=t,type:"text"}))}renderListBoxOptions(){return this.visibleItems.map((t=>e("li",{"aria-selected":(!!t.selected).toString(),id:t.guid,role:"option",tabindex:"-1"},t.textLabel||t.value)))}renderPopperContainer(){const{active:t,maxScrollerHeight:i,setMenuEl:s,setListContainerEl:a}=this;return e("div",{"aria-hidden":"true",class:"popper-container",ref:s},e("div",{class:{"list-container":!0,[m.animation]:!0,[m.animationActive]:t},ref:a,style:{maxHeight:i>0?`${i}px`:""}},e("ul",{class:"list"},e("slot",null))))}renderIconStart(){const{selectionMode:t,needsIcon:i,selectedItem:s}=this;return"single"===t&&i&&e("span",{class:"icon-start"},(null==s?void 0:s.icon)&&e("calcite-icon",{class:"selected-icon",icon:null==s?void 0:s.icon,scale:"l"===this.scale?"m":"s"}))}renderIconEnd(){return"single"===this.selectionMode&&e("span",{class:"icon-end"},e("calcite-icon",{icon:"chevron-down",scale:"l"===this.scale?"m":"s"}))}render(){const{guid:t,active:i,el:a,label:r}=this,n="single"===this.selectionMode,c=o(a),l=`${t}-label`;return e(s,{active:i,dir:c},e("div",{"aria-autocomplete":"list","aria-expanded":i.toString(),"aria-haspopup":"listbox","aria-labelledby":l,"aria-owns":t,class:{wrapper:!0,"wrapper--active":i,"wrapper--single":n},onClick:()=>this.setFocus(),ref:this.setReferenceEl,role:"combobox"},this.renderIconStart(),!n&&this.renderChips(),e("label",{class:"screen-readers-only",htmlFor:`${t}-input`,id:l},r),this.renderInput(),this.renderIconEnd()),e("ul",{"aria-labelledby":l,"aria-multiselectable":"true",class:"screen-readers-only",id:t,role:"listbox",tabIndex:-1},this.renderListBoxOptions()),this.renderPopperContainer())}get el(){return a(this)}static get watchers(){return{active:["activeHandler"],text:["textHandler"]}}};d.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block;position:relative}:host-context([theme=dark]){--calcite-ui-brand:#009AF2;--calcite-ui-brand-hover:#007AC2;--calcite-ui-brand-press:#00619B;--calcite-ui-background:#353535;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#202020;--calcite-ui-foreground-3:#151515;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-text-inverse:#151515;--calcite-ui-text-link:#00A0FF;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-input:#757575;--calcite-ui-info:#00A0FF;--calcite-ui-success:#36DA43;--calcite-ui-warning:#FFC900;--calcite-ui-danger:#FE583E;--calcite-ui-danger-hover:#FF0015;--calcite-ui-danger-press:#D90012}:host([disabled]){pointer-events:none;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;opacity:0.5}:host([scale=s]){font-size:var(--calcite-font-size--2);--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-m:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-input-height:1.25rem}:host([scale=m]){font-size:var(--calcite-font-size--1);--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-m:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-input-height:2rem}:host([scale=l]){font-size:var(--calcite-font-size-0);--calcite-combobox-item-spacing-unit-l:1.25rem;--calcite-combobox-item-spacing-unit-m:1rem;--calcite-combobox-item-spacing-unit-s:0.75rem;--calcite-combobox-input-height:2.5rem}.wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:var(--calcite-combobox-item-spacing-unit-m) var(--calcite-combobox-item-spacing-unit-l) 0 var(--calcite-combobox-item-spacing-unit-l);background-color:var(--calcite-ui-foreground-1);border:1px solid var(--calcite-ui-border-1);color:var(--calcite-ui-text-1);outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.wrapper--active{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.wrapper--single{padding:var(--calcite-combobox-item-spacing-unit-s) var(--calcite-combobox-item-spacing-unit-m);cursor:pointer}.input{-ms-flex-positive:1;flex-grow:1;font-size:inherit;font-family:inherit;padding:0;background-color:transparent;border:none;color:var(--calcite-ui-text-1);-webkit-appearance:none;-moz-appearance:none;appearance:none;height:var(--calcite-combobox-input-height);line-height:var(--calcite-combobox-input-height);min-width:120px;margin-top:1px;margin-bottom:var(--calcite-combobox-item-spacing-unit-m)}.input:focus{outline:none}.input--transparent{opacity:0}.input--single{margin-bottom:0;margin-top:0;cursor:pointer;padding:0}.wrapper--active .input-single{cursor:text}.input--hidden{width:0;min-width:0;opacity:0;pointer-events:none}.input--icon{padding:0 var(--calcite-combobox-item-spacing-unit-m)}.input-wrap{display:-ms-flexbox;display:flex}.input-wrap--single{-ms-flex:1 1 auto;flex:1 1 auto}.label{height:var(--calcite-combobox-input-height);line-height:var(--calcite-combobox-input-height);padding:0;display:block;-ms-flex:1 1 auto;flex:1 1 auto;pointer-events:none}.label--spaced{padding:0 var(--calcite-combobox-item-spacing-unit-m)}.icon-end,.icon-start{cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:var(--calcite-combobox-item-spacing-unit-l)}.popper-container{display:block;position:absolute;z-index:999;-webkit-transform:scale(0);transform:scale(0);visibility:hidden;pointer-events:none;width:100%}.popper-container .calcite-popper-anim{position:relative;z-index:1;-webkit-transition:var(--calcite-popper-transition);transition:var(--calcite-popper-transition);visibility:hidden;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform;opacity:0;-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);border-radius:var(--calcite-border-radius)}.popper-container[data-popper-placement^=bottom] .calcite-popper-anim{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.popper-container[data-popper-placement^=top] .calcite-popper-anim{-webkit-transform:translateY(5px);transform:translateY(5px)}.popper-container[data-popper-placement^=left] .calcite-popper-anim{-webkit-transform:translateX(5px);transform:translateX(5px)}.popper-container[data-popper-placement^=right] .calcite-popper-anim{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.popper-container[data-popper-placement] .calcite-popper-anim--active{opacity:1;visibility:visible;-webkit-transform:translate(0);transform:translate(0)}:host([active]) .popper-container{pointer-events:initial;visibility:visible}.screen-readers-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.list-container{overflow-y:auto;max-height:100vh;width:var(--calcite-dropdown-width);background:var(--calcite-ui-foreground-1)}.list{display:block;margin:0;padding:0}.chip{margin-right:var(--calcite-combobox-item-spacing-unit-s);margin-bottom:var(--calcite-combobox-item-spacing-unit-s)}.chip--active{background-color:var(--calcite-ui-foreground-3)}.chip:last-child{margin-right:0}:host([dir=rtl]) .chip{margin-right:unset;margin-left:var(--calcite-combobox-item-spacing-unit-m)}:host([dir=rtl]) .chip:last-child{margin-left:0}.item{display:block}";export{d as calcite_combobox}