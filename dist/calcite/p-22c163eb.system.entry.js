var __awaiter=this&&this.__awaiter||function(t,e,i,n){function o(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,a){function s(t){try{c(n.next(t))}catch(t){a(t)}}function r(t){try{c(n.throw(t))}catch(t){a(t)}}function c(t){t.done?i(t.value):o(t.value).then(s,r)}c((n=n.apply(t,e||[])).next())}))},__generator=this&&this.__generator||function(t,e){var i,n,o,a,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function r(t){return function(e){return c([t,e])}}function c(a){if(i)throw new TypeError("Generator is already executing.");for(;s;)try{if(i=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=e.call(t,s)}catch(t){a=[6,t],n=0}finally{i=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}},__spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,e=0,i=arguments.length;e<i;e++)t+=arguments[e].length;var n=Array(t),o=0;for(e=0;e<i;e++)for(var a=arguments[e],s=0,r=a.length;s<r;s++,o++)n[o]=a[s];return n};System.register(["./p-4105a996.system.js","./p-7bf86ee3.system.js","./p-f1259a9b.system.js","./p-2c235db8.system.js","./p-c0a71790.system.js","./p-19c49287.system.js","./p-5dbae16d.system.js"],(function(t){"use strict";var e,i,n,o,a,s,r,c,l,p,m,d,u,h,b;return{setters:[function(t){e=t.r,i=t.c,n=t.h,o=t.H,a=t.g},function(t){s=t.n,r=t.g,c=t.c},function(t){l=t.g},function(t){p=t.g},function(t){m=t.u,d=t.c,u=t.C},function(t){h=t.d},function(t){b=t.f}],execute:function(){var f="CALCITE-COMBOBOX-ITEM",x="CALCITE-COMBOBOX-ITEM-GROUP",v=f+", "+x,g="bottom-start";function y(t){var e,i,n=null===(e=t.parentElement)||void 0===e?void 0:e.closest(v);return[n,null===(i=null==n?void 0:n.parentElement)||void 0===i?void 0:i.closest(v)].filter((function(t){return t}))}function I(t){var e;return(null===(e=t.ancestors)||void 0===e?void 0:e.filter((function(t){return"CALCITE-COMBOBOX-ITEM"===t.nodeName})))||[]}function w(t){return s(t.querySelectorAll("calcite-combobox-item")).filter((function(t){return t.selected})).length>0}function k(t){var e=y(t),i=e[0],n=e[1];return i?n?2:1:0}t("calcite_combobox",function(){function t(t){var n=this;e(this,t),this.calciteLookupChange=i(this,"calciteLookupChange",7),this.calciteComboboxFilterChange=i(this,"calciteComboboxFilterChange",7),this.calciteComboboxChipDismiss=i(this,"calciteComboboxChipDismiss",7),this.active=!1,this.disabled=!1,this.maxItems=0,this.selectionMode="multi",this.scale="m",this.items=[],this.groupItems=[],this.selectedItems=[],this.visibleItems=[],this.hideList=!this.active,this.activeItemIndex=-1,this.activeChipIndex=-1,this.activeDescendant="",this.text="",this.textInput=null,this.observer=null,this.guid=p(),this.maxScrollerHeight=0,this.inputHeight=0,this.setFocusClick=function(){n.setFocus()},this.setInactiveIfNotContained=function(t){n.active&&!t.composedPath().includes(n.el)&&("single"===n.selectionMode&&(n.textInput.value="",n.text="",n.filterItems(""),n.updateActiveItemIndex(-1)),n.active=!1)},this.setMenuEl=function(t){n.menuEl=t},this.setListContainerEl=function(t){n.listContainerEl=t},this.setReferenceEl=function(t){n.referenceEl=t},this.inputHandler=function(t){var e=t.target.value;n.text=e,n.filterItems(e),e&&(n.activeChipIndex=-1)},this.getTextValue=function(t){return t?t.tagName===x?t.label:t.value:null},this.filterItems=h((function(t){var e=function(t,e){var i=new RegExp(e,"ig");0===t.length&&console.warn("No data was passed to the filter function.\n    The data argument should be an array of objects");var n=function(t,e){var i=!1;return b(t,(function(t){"function"!=typeof t&&(Array.isArray(t)||"object"==typeof t&&null!==t?n(t,e)&&(i=!0):e.test(t)&&(i=!0))})),i};return t.filter((function(t){return n(t,i)}))}(n.data,t).map((function(t){return t.value}));n.getCombinedItems().forEach((function(t){var i=!e.includes(n.getTextValue(t));t.hidden=i;var o=t.ancestors,a=o[0],s=o[1];(a||s)&&(e.includes(n.getTextValue(a))||e.includes(n.getTextValue(s)))&&(t.hidden=!1),i||t.ancestors.forEach((function(t){return t.hidden=!1}))})),n.visibleItems=n.getVisibleItems(),n.calciteComboboxFilterChange.emit({visibleItems:__spreadArrays(n.visibleItems),text:t})}),100),this.updateItems=function(){n.items=n.getItems(),n.groupItems=n.getGroupItems(),n.data=n.getData(),n.selectedItems=n.getSelectedItems(),n.visibleItems=n.getVisibleItems(),n.needsIcon=n.getNeedsIcon(),"single"===n.selectionMode&&n.selectedItems.length&&(n.selectedItem=n.selectedItems[0])},this.comboboxFocusHandler=function(){n.active=!0,n.textInput.focus()},this.comboboxBlurHandler=function(t){n.setInactiveIfNotContained(t)}}return t.prototype.activeHandler=function(t,e){var i=this;clearTimeout(this.hideListTimeout),e&&!t?this.hideListTimeout=window.setTimeout((function(){i.hideList=!0}),150):!e&&t&&(this.hideList=!1),this.reposition()},t.prototype.documentClickHandler=function(t){this.setInactiveIfNotContained(t)},t.prototype.calciteComboboxItemChangeHandler=function(t){this.toggleSelection(t.detail)},t.prototype.calciteChipDismissHandler=function(t){var e;this.active=!1;var i=null===(e=t.detail)||void 0===e?void 0:e.value,n=this.items.find((function(t){return t.value===i}));n&&this.toggleSelection(n,!1),this.calciteComboboxChipDismiss.emit(t.detail)},t.prototype.keydownHandler=function(t){switch(l(t.key,r(this.el))){case"Tab":this.activeChipIndex=-1,this.activeItemIndex=-1,this.active=!1;break;case"ArrowLeft":this.previousChip();break;case"ArrowRight":this.nextChip();break;case"ArrowUp":t.preventDefault(),this.active=!0,this.shiftActiveItemIndex(-1);break;case"ArrowDown":t.preventDefault(),this.active=!0,this.shiftActiveItemIndex(1);break;case"Home":this.active=!0,this.updateActiveItemIndex(0);break;case"End":this.active=!0,this.updateActiveItemIndex(this.visibleItems.length-1);break;case"Escape":this.active=!1;break;case"Enter":this.activeItemIndex>-1?this.toggleSelection(this.visibleItems[this.activeItemIndex]):this.activeChipIndex>-1?this.removeActiveChip():this.allowCustomValues&&this.text&&this.addCustomChip(this.text);break;case"Delete":case"Backspace":this.activeChipIndex>-1?this.removeActiveChip():!this.text&&this.isMulti()&&this.removeLastChip();break;default:this.active||this.setFocus()}},t.prototype.reposition=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,i,n;return __generator(this,(function(o){return e=(t=this).popper,i=t.menuEl,n=this.getModifiers(),e?m({el:i,modifiers:n,placement:g,popper:e}):this.createPopper(),[2]}))}))},t.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){return this.active=!0,null===(t=this.textInput)||void 0===t||t.focus(),this.activeChipIndex=-1,this.activeItemIndex=-1,[2]}))}))},t.prototype.connectedCallback=function(){this.observer=new MutationObserver(this.updateItems),this.createPopper()},t.prototype.componentWillLoad=function(){this.updateItems()},t.prototype.componentDidLoad=function(){var t;null===(t=this.observer)||void 0===t||t.observe(this.el,{childList:!0,subtree:!0}),this.maxScrollerHeight=this.getMaxScrollerHeight(this.getCombinedItems())},t.prototype.componentDidRender=function(){this.el.offsetHeight!==this.inputHeight&&(this.reposition(),this.inputHeight=this.el.offsetHeight)},t.prototype.disconnectedCallback=function(){var t;null===(t=this.observer)||void 0===t||t.disconnect(),this.destroyPopper()},t.prototype.textHandler=function(){this.updateActiveItemIndex(-1)},t.prototype.getModifiers=function(){var t={name:"flip",enabled:!0,options:{fallbackPlacements:["top-start","top","top-end","bottom-start","bottom","bottom-end"]}};return[t]},t.prototype.createPopper=function(){this.destroyPopper();var t=this.menuEl,e=this.referenceEl,i=this.getModifiers();this.popper=d({el:t,modifiers:i,placement:g,referenceEl:e})},t.prototype.destroyPopper=function(){var t=this.popper;t&&t.destroy(),this.popper=null},t.prototype.getMaxScrollerHeight=function(t){var e=this,i=this.maxItems,n=0,o=0;return t.forEach((function(t){n<i&&i>0&&(o+=e.calculateSingleItemHeight(t),n++)})),o},t.prototype.calculateSingleItemHeight=function(t){var e=t.offsetHeight;return t.querySelectorAll(v).forEach((function(t){e-=t.offsetHeight})),e},t.prototype.getCombinedItems=function(){return __spreadArrays(this.groupItems,this.items)},t.prototype.toggleSelection=function(t,e){void 0===e&&(e=!t.selected),t&&(this.isMulti()?(t.selected=e,this.updateAncestors(t),this.selectedItems=this.getSelectedItems(),this.calciteLookupChange.emit(this.selectedItems),this.resetText(),this.textInput.focus(),this.filterItems("")):(this.items.forEach((function(t){return t.toggleSelected(!1)})),t.toggleSelected(!0),this.selectedItem=t,this.textInput.value=t.textLabel,this.active=!1,this.updateActiveItemIndex(-1),this.resetText(),this.filterItems("")))},t.prototype.updateAncestors=function(t){if("ancestors"===this.selectionMode){var e=I(t),i=function(t){return s(t.querySelectorAll("calcite-combobox-item"))}(t);t.selected?e.forEach((function(t){t.selected=!0})):(i.forEach((function(t){return t.selected=!1})),__spreadArrays(e).forEach((function(t){w(t)||(t.selected=!1)})))}},t.prototype.getVisibleItems=function(){return this.items.filter((function(t){return!t.hidden}))},t.prototype.getSelectedItems=function(){var t=this;return this.items.filter((function(e){return e.selected&&("ancestors"!==t.selectionMode||!w(e))})).sort((function(e,i){var n=t.selectedItems.indexOf(e),o=t.selectedItems.indexOf(i);return n>-1&&o>-1?n-o:o-n}))},t.prototype.getData=function(){return this.items.map((function(t){return{value:t.value,label:t.textLabel,guid:t.guid}}))},t.prototype.getNeedsIcon=function(){return"single"===this.selectionMode&&this.items.some((function(t){return t.icon}))},t.prototype.resetText=function(){this.textInput.value="",this.text=""},t.prototype.getItems=function(){return Array.from(this.el.querySelectorAll(f)).filter((function(t){return!t.disabled}))},t.prototype.getGroupItems=function(){return Array.from(this.el.querySelectorAll(x))},t.prototype.addCustomChip=function(t){var e=this.items.find((function(e){return e.value===t||e.textLabel===t}));if(e)this.toggleSelection(e,!0);else{var i=document.createElement(f);i.value=t,i.textLabel=t,i.guid=p(),i.selected=!0,this.el.appendChild(i),this.resetText(),this.setFocus(),this.updateItems(),this.filterItems("")}},t.prototype.removeActiveChip=function(){this.toggleSelection(this.selectedItems[this.activeChipIndex],!1),this.setFocus()},t.prototype.removeLastChip=function(){this.toggleSelection(this.selectedItems[this.selectedItems.length-1],!1),this.setFocus()},t.prototype.previousChip=function(){if(!this.text){var t=this.selectedItems.length-1,e=this.activeChipIndex;this.activeChipIndex=-1===e?t:Math.max(e-1,0),this.updateActiveItemIndex(-1),this.focusChip()}},t.prototype.nextChip=function(){if(!this.text&&-1!==this.activeChipIndex){var t=this.selectedItems.length-1,e=this.activeChipIndex+1;e>t?(this.activeChipIndex=-1,this.setFocus()):(this.activeChipIndex=e,this.focusChip()),this.updateActiveItemIndex(-1)}},t.prototype.focusChip=function(){var t,e=null===(t=this.selectedItems[this.activeChipIndex])||void 0===t?void 0:t.guid,i=this.referenceEl.querySelector("#chip-"+e);null==i||i.setFocus()},t.prototype.shiftActiveItemIndex=function(t){var e=this.visibleItems.length,i=(this.activeItemIndex+e+t)%e;this.updateActiveItemIndex(i);var n=this.visibleItems[this.activeItemIndex],o=this.calculateSingleItemHeight(n),a=this.listContainerEl,s=a.offsetHeight,r=a.scrollTop;s+r<n.offsetTop+o?this.listContainerEl.scrollTop=n.offsetTop-s+o:n.offsetTop<r&&(this.listContainerEl.scrollTop=n.offsetTop)},t.prototype.updateActiveItemIndex=function(t){this.activeItemIndex=t;var e=null;this.visibleItems.forEach((function(i,n){n===t?(i.active=!0,e=i.guid):i.active=!1})),this.activeDescendant=e,this.activeItemIndex>-1&&(this.activeChipIndex=-1,this.textInput.focus())},t.prototype.isMulti=function(){return"multi"===this.selectionMode||"ancestors"===this.selectionMode},t.prototype.renderChips=function(){var t=this,e=t.activeChipIndex,i=t.scale,o=t.selectionMode;return this.selectedItems.map((function(t,a){var s={chip:!0,"chip--active":e===a},r=__spreadArrays(I(t)).reverse(),c=__spreadArrays(r,[t]).map((function(t){return t.textLabel})),l="ancestors"!==o?t.textLabel:c.join(" / ");return n("calcite-chip",{class:s,dismissLabel:"remove tag",dismissible:!0,icon:t.icon,id:"chip-"+t.guid,key:t.value,scale:i,value:t.value},l)}))},t.prototype.renderInput=function(){var t=this,e=this,i=e.active,o=e.disabled,a=e.placeholder,s=e.selectionMode,r=e.needsIcon,c=e.label,l="single"===s,m=!i&&l&&!!this.selectedItem;return n("span",{class:{"input-wrap":!0,"input-wrap--single":l}},m&&n("span",{class:{label:!0,"label--spaced":r},key:"label",onFocus:this.comboboxFocusHandler,tabindex:"0"},this.selectedItem.textLabel),n("input",{"aria-activedescendant":this.activeDescendant,"aria-autocomplete":"list","aria-controls":p,"aria-label":c,class:{input:!0,"input--transparent":this.activeChipIndex>-1,"input--single":l,"input--hidden":m,"input--icon":l&&r},disabled:o,id:p+"-input",key:"input",onBlur:this.comboboxBlurHandler,onFocus:this.comboboxFocusHandler,onInput:this.inputHandler,placeholder:a,ref:function(e){return t.textInput=e},type:"text"}))},t.prototype.renderListBoxOptions=function(){return this.visibleItems.map((function(t){return n("li",{"aria-selected":(!!t.selected).toString(),id:t.guid,role:"option",tabindex:"-1"},t.textLabel||t.value)}))},t.prototype.renderPopperContainer=function(){var t,e=this,i=e.active,o=e.maxScrollerHeight,a=e.setMenuEl,s=e.setListContainerEl,r=e.hideList,c=((t={"list-container":!0})[u.animation]=!0,t[u.animationActive]=i,t);return n("div",{"aria-hidden":"true",class:"popper-container",ref:a},n("div",{class:c,ref:s,style:{maxHeight:o>0?o+"px":""}},n("ul",{class:{list:!0,"list--hide":r}},n("slot",null))))},t.prototype.renderIconStart=function(){var t=this,e=t.selectionMode,i=t.needsIcon,o=t.selectedItem,a="l"===this.scale?"m":"s";return"single"===e&&i&&n("span",{class:"icon-start"},(null==o?void 0:o.icon)&&n("calcite-icon",{class:"selected-icon",icon:null==o?void 0:o.icon,scale:a}))},t.prototype.renderIconEnd=function(){var t="l"===this.scale?"m":"s";return"single"===this.selectionMode&&n("span",{class:"icon-end"},n("calcite-icon",{icon:"chevron-down",scale:t}))},t.prototype.render=function(){var t=this,e=t.guid,i=t.active,a=t.el,s=t.label,c="single"===this.selectionMode,l=r(a),p=e+"-label";return n(o,{active:i,dir:l},n("div",{"aria-autocomplete":"list","aria-expanded":i.toString(),"aria-haspopup":"listbox","aria-labelledby":p,"aria-owns":e,class:{wrapper:!0,"wrapper--active":i,"wrapper--single":c},onClick:this.setFocusClick,ref:this.setReferenceEl,role:"combobox"},this.renderIconStart(),!c&&this.renderChips(),n("label",{class:"screen-readers-only",htmlFor:e+"-input",id:p},s),this.renderInput(),this.renderIconEnd()),n("ul",{"aria-labelledby":p,"aria-multiselectable":"true",class:"screen-readers-only",id:e,role:"listbox",tabIndex:-1},this.renderListBoxOptions()),this.renderPopperContainer())},Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{active:["activeHandler"],text:["textHandler"]}},enumerable:!1,configurable:!0}),t}()).style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block;position:relative}:host([disabled]){pointer-events:none;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;opacity:0.5}:host([scale=s]){font-size:var(--calcite-font-size--2);--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-m:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-input-height:1.25rem}:host([scale=m]){font-size:var(--calcite-font-size--1);--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-m:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-input-height:2rem}:host([scale=l]){font-size:var(--calcite-font-size-0);--calcite-combobox-item-spacing-unit-l:1.25rem;--calcite-combobox-item-spacing-unit-m:1rem;--calcite-combobox-item-spacing-unit-s:0.75rem;--calcite-combobox-input-height:2.5rem}.wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:var(--calcite-combobox-item-spacing-unit-m) var(--calcite-combobox-item-spacing-unit-l) 0 var(--calcite-combobox-item-spacing-unit-l);background-color:var(--calcite-ui-foreground-1);border:1px solid var(--calcite-ui-border-1);color:var(--calcite-ui-text-1);outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.wrapper--active{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.wrapper--single{padding:var(--calcite-combobox-item-spacing-unit-s) var(--calcite-combobox-item-spacing-unit-m);cursor:pointer}.input{-ms-flex-positive:1;flex-grow:1;font-size:inherit;font-family:inherit;padding:0;background-color:transparent;border:none;color:var(--calcite-ui-text-1);-webkit-appearance:none;-moz-appearance:none;appearance:none;height:var(--calcite-combobox-input-height);line-height:var(--calcite-combobox-input-height);min-width:120px;margin-top:1px;margin-bottom:var(--calcite-combobox-item-spacing-unit-m)}.input:focus{outline:none}.input--transparent{opacity:0}.input--single{margin-bottom:0;margin-top:0;cursor:pointer;padding:0}.wrapper--active .input-single{cursor:text}.input--hidden{width:0;min-width:0;opacity:0;pointer-events:none}.input--icon{padding:0 var(--calcite-combobox-item-spacing-unit-m)}.input-wrap{display:-ms-flexbox;display:flex}.input-wrap--single{-ms-flex:1 1 auto;flex:1 1 auto}.label{height:var(--calcite-combobox-input-height);line-height:var(--calcite-combobox-input-height);padding:0;display:block;-ms-flex:1 1 auto;flex:1 1 auto;pointer-events:none}.label--spaced{padding:0 var(--calcite-combobox-item-spacing-unit-m)}.icon-end,.icon-start{cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:var(--calcite-combobox-item-spacing-unit-l)}.popper-container{display:block;position:absolute;z-index:900;-webkit-transform:scale(0);transform:scale(0);visibility:hidden;pointer-events:none;width:100%}.popper-container .calcite-popper-anim{position:relative;z-index:1;-webkit-transition:var(--calcite-popper-transition);transition:var(--calcite-popper-transition);visibility:hidden;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform;opacity:0;-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);border-radius:var(--calcite-border-radius)}.popper-container[data-popper-placement^=bottom] .calcite-popper-anim{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.popper-container[data-popper-placement^=top] .calcite-popper-anim{-webkit-transform:translateY(5px);transform:translateY(5px)}.popper-container[data-popper-placement^=left] .calcite-popper-anim{-webkit-transform:translateX(5px);transform:translateX(5px)}.popper-container[data-popper-placement^=right] .calcite-popper-anim{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.popper-container[data-popper-placement] .calcite-popper-anim--active{opacity:1;visibility:visible;-webkit-transform:translate(0);transform:translate(0)}:host([active]) .popper-container{pointer-events:initial;visibility:visible}.screen-readers-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.list-container{overflow-y:auto;max-height:100vh;width:var(--calcite-dropdown-width);background:var(--calcite-ui-foreground-1)}.list{display:block;margin:0;padding:0}.list--hide{height:0;overflow:hidden}.chip{margin-right:var(--calcite-combobox-item-spacing-unit-s);margin-bottom:var(--calcite-combobox-item-spacing-unit-s)}.chip--active{background-color:var(--calcite-ui-foreground-3)}.chip:last-child{margin-right:0}:host([dir=rtl]) .chip{margin-right:unset;margin-left:var(--calcite-combobox-item-spacing-unit-m)}:host([dir=rtl]) .chip:last-child{margin-left:0}.item{display:block}";var C="icon",D="icon--active",S="icon--custom",E="icon--dot",A="label--single",_="label",H="label--active",L="label--selected",M="title";t("calcite_combobox_item",function(){function t(t){var n=this;e(this,t),this.calciteComboboxItemChange=i(this,"calciteComboboxItemChange",7),this.disabled=!1,this.selected=!1,this.active=!1,this.guid=p(),this.isSelected=this.selected,this.itemClickHandler=function(t){t.preventDefault(),n.disabled||(n.isSelected=!n.isSelected,n.calciteComboboxItemChange.emit(n.el))}}return t.prototype.selectedWatchHandler=function(t){this.isSelected=t},t.prototype.componentWillLoad=function(){this.ancestors=y(this.el),this.hasDefaultSlot=null!==this.el.querySelector(":not([slot])")},t.prototype.toggleSelected=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){return this.disabled||(this.isSelected="boolean"==typeof t?t:!this.isSelected),[2]}))}))},t.prototype.renderIcon=function(t,e){var i,o,a=this,s=a.icon,r=a.el,c=a.disabled,l=a.isSelected,p=C+"--indent-"+k(r),m="l"!==t?"s":"m",d=c?"circle-disallowed":e?"dot":"check";return e&&!s&&!c?n("span",{class:(i={},i[C]=!0,i[E]=!0,i[p]=!0,i)}):n("calcite-icon",{class:(o={},o[C]=!s,o[S]=!!s,o[D]=s&&l,o[p]=!0,o),icon:s||d,scale:m})},t.prototype.renderChildren=function(){return this.hasDefaultSlot?n("ul",null,n("slot",null)):null},t.prototype.render=function(){var t,e=this,i="single"===c(this.el,"selection-mode","multi"),a=((t={})[_]=!0,t[L]=this.isSelected,t[H]=this.active,t[A]=i,t),s=c(this.el,"scale","m"),l=r(this.el);return n(o,{"aria-hidden":!0,dir:l,disabled:this.disabled,scale:s,tabIndex:-1},n("li",{class:a,id:this.guid,onClick:this.itemClickHandler,ref:function(t){return e.comboboxItemEl=t},tabIndex:-1},this.renderIcon(s,i),n("span",{class:M},this.textLabel)),this.renderChildren())},Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{selected:["selectedWatchHandler"]}},enumerable:!1,configurable:!0}),t}()).style='@charset "UTF-8";@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]){font-size:var(--calcite-font-size--2);--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-item-spacing-indent-1:0.5rem;--calcite-combobox-item-spacing-indent-2:1rem}:host([scale=m]){font-size:var(--calcite-font-size--1);--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.75rem;--calcite-combobox-item-spacing-indent-1:0.75rem;--calcite-combobox-item-spacing-indent-2:1.5rem}:host([scale=l]){font-size:var(--calcite-font-size-0);--calcite-combobox-item-spacing-unit-l:1.25rem;--calcite-combobox-item-spacing-unit-s:1rem;--calcite-combobox-item-spacing-indent-1:1rem;--calcite-combobox-item-spacing-indent-2:2rem}:host{--calcite-combobox-item-indent-start-1:var(--calcite-combobox-item-spacing-indent-1);--calcite-combobox-item-indent-end-1:unset;--calcite-combobox-item-indent-start-2:var(--calcite-combobox-item-spacing-indent-2);--calcite-combobox-item-indent-end-2:unset}:host([dir=rtl]){--calcite-combobox-item-indent-start-1:unset;--calcite-combobox-item-indent-end-1:var(--calcite-combobox-item-spacing-indent-1);--calcite-combobox-item-indent-start-2:unset;--calcite-combobox-item-indent-end-2:var(--calcite-combobox-item-spacing-indent-2)}:host(:focus){-webkit-box-shadow:none;box-shadow:none}:host,ul{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;margin:0;padding:0;outline:2px solid transparent;outline-offset:2px}.label{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;min-width:100%;-ms-flex-align:center;align-items:center;color:var(--calcite-ui-text-3);cursor:pointer;position:relative;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;padding:var(--calcite-combobox-item-spacing-unit-s);text-decoration:none}:host([disabled]) .label{cursor:default}.label--selected{color:var(--calcite-ui-text-1);font-weight:var(--calcite-font-weight-medium)}.label--active{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.label:hover,.label:active{color:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-2);-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.title{padding:0 var(--calcite-combobox-item-spacing-unit-s)}.icon{display:-ms-inline-flexbox;display:inline-flex;opacity:0;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;}.icon--indent-1{padding-left:var(--calcite-combobox-item-indent-start-1);padding-right:var(--calcite-combobox-item-indent-end-1)}.icon--indent-2{padding-left:var(--calcite-combobox-item-indent-start-2);padding-right:var(--calcite-combobox-item-indent-end-2)}.icon--custom{margin-top:-1px;color:var(--calcite-ui-text-3)}.icon--active{color:var(--calcite-ui-text-1)}.icon--dot{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;width:var(--calcite-combobox-item-spacing-unit-l)}.icon--dot:before{content:"•"}:host([dir=rtl]) .icon--dot:before{text-align:right}.label--active .icon{opacity:1}.label--selected .icon{opacity:1;color:var(--calcite-ui-brand)}:host(:hover[disabled]) .icon{opacity:1}';var T="list",z="label",F="title";t("calcite_combobox_item_group",function(){function t(t){e(this,t),this.guid=p()}return t.prototype.componentWillLoad=function(){this.ancestors=y(this.el)},t.prototype.render=function(){var t,e=this.el,i=c(e,"scale","m"),a=r(e),s=z+"--indent-"+k(e);return n(o,{dir:a,scale:i},n("ul",{"aria-labelledby":this.guid,class:T,role:"group"},n("li",{class:(t={},t[z]=!0,t[s]=!0,t),id:this.guid,role:"presentation"},n("span",{class:F},this.label)),n("slot",null)))},Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:!1,configurable:!0}),t}()).style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]){font-size:var(--calcite-font-size--2);--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-item-spacing-indent-1:0.5rem;--calcite-combobox-item-spacing-indent-2:1rem}:host([scale=m]){font-size:var(--calcite-font-size--1);--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.75rem;--calcite-combobox-item-spacing-indent-1:0.75rem;--calcite-combobox-item-spacing-indent-2:1.5rem}:host([scale=l]){font-size:var(--calcite-font-size-0);--calcite-combobox-item-spacing-unit-l:1.25rem;--calcite-combobox-item-spacing-unit-s:1rem;--calcite-combobox-item-spacing-indent-1:1rem;--calcite-combobox-item-spacing-indent-2:2rem}:host{--calcite-combobox-item-indent-start-1:var(--calcite-combobox-item-spacing-indent-1);--calcite-combobox-item-indent-end-1:unset;--calcite-combobox-item-indent-start-2:var(--calcite-combobox-item-spacing-indent-2);--calcite-combobox-item-indent-end-2:unset}:host([dir=rtl]){--calcite-combobox-item-indent-start-1:unset;--calcite-combobox-item-indent-end-1:var(--calcite-combobox-item-spacing-indent-1);--calcite-combobox-item-indent-start-2:unset;--calcite-combobox-item-indent-end-2:var(--calcite-combobox-item-spacing-indent-2)}:host,.list{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;margin:0;padding:0;outline:2px solid transparent;outline-offset:2px}.label{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;max-width:100%;min-width:0;color:var(--calcite-ui-text-3);display:-ms-flexbox;display:flex}.label--indent-1{padding-left:var(--calcite-combobox-item-indent-start-1);padding-right:var(--calcite-combobox-item-indent-end-1)}.label--indent-2{padding-left:var(--calcite-combobox-item-indent-start-2);padding-right:var(--calcite-combobox-item-indent-end-2)}.title{border:0 solid;display:block;-ms-flex:1 1 0%;flex:1 1 0%;border-bottom-color:var(--calcite-ui-border-3);border-bottom-width:1px;margin-bottom:-1px;color:var(--calcite-ui-text-2);font-weight:var(--calcite-font-weight-bold);word-wrap:break-word;word-break:break-word;padding:var(--calcite-combobox-item-spacing-unit-s) 0;margin-left:var(--calcite-combobox-item-spacing-unit-s);margin-right:var(--calcite-combobox-item-spacing-unit-s)}"}}}));