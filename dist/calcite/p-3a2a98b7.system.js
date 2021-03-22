System.register(["./p-4105a996.system.js","./p-7bf86ee3.system.js","./p-19c49287.system.js","./p-482ec054.system.js","./p-94d2ed32.system.js"],(function(e){"use strict";var t,i,n,r,s,l,a,u,c;return{setters:[function(e){t=e.h,i=e.H},function(e){n=e.f,r=e.d,s=e.g,l=e.a},function(e){a=e.d},function(e){u=e.g},function(e){c=e.C}],execute:function(){e({a:function(){this.observer.observe(this.el,{childList:!0,subtree:!0})},b:function(e){var t=this.selectedValues,i=e.detail,n=i.item,r=i.value,s=i.selected,l=i.shiftPressed;s?(this.multiple||this.deselectSiblingItems(n),this.multiple&&l&&this.selectSiblings(n),t.set(r,n)):(t.delete(r),this.multiple&&l&&this.selectSiblings(n,!0));this.multiple||m(n,s);this.lastSelectedItem=n,this.emitCalciteListChange()},c:function(){this.observer.disconnect()},d:function(e){var t=this;this.items.forEach((function(i){i.value!==e.value&&(i.toggleSelected(!1),t.selectedValues.has(i.value)&&t.selectedValues.delete(i.value))}))},e:function(e){e.stopPropagation();var t=e.detail.oldValue,i=this.selectedValues;if(i.has(t)){var n=i.get(t);i.delete(t),i.set(e.detail.newValue,n)}},f:function(e){var t=this;this.items=Array.from(this.el.querySelectorAll(e));var i=!1,n=this.items;n.forEach((function(e){e.icon=t.getIconType(),t.multiple||(e.disableDeselect=!0,m(e,!1)),e.selected&&(i=!0,m(e,!0),t.selectedValues.set(e.value,e))}));var r=n[0];!i&&r&&m(r,!0)},g:function(){return this.items.map((function(e){return{label:e.label,description:e.description,metadata:e.metadata,value:e.value}}))},h:function(e){var t=e.detail.map((function(e){return e.value}));o||(o=new Set);var i=this.items.filter((function(e){var i=e.parentElement;i.matches("calcite-pick-list-group")&&o.add(i);var n=t.includes(e.value);return e.hidden=!n,n}));o.forEach((function(e){var t=i.some((function(t){return e.contains(t)}));if(e.hidden=!t,t){var n=r(e,"parent-item");n&&(n.hidden=!1,i.includes(n)&&Array.from(e.children).forEach((function(e){return e.hidden=!1})))}})),o.clear()},i:function(){this.setUpItems(),this.setUpFilter(),this.emitCalciteListChange=a(h.bind(this),0)},j:function(){var e=this.multiple,t=this.items;if(0===t.length)return;if(e)return t[0].setFocus();var i=t.find((function(e){return e.selected}));return(i||t[0]).setFocus()},k:function(e){var t=e.key,i=e.target;if(!f(t))return;var r=this.items,s=this.multiple,l=r.length,a=r.indexOf(i);if(!l||-1===a)return;e.preventDefault();var c=u(a+("ArrowUp"===t?-1:1),l),o=r[c];m(o,!0),n(o),s||(o.selected=!0)},m:function(){this.setUpItems(),this.setUpFilter()},r:function(e){if(e.defaultPrevented)return;var t=e.target,i=this.selectedValues;"CALCITE-PICK-LIST-GROUP"===t.parentElement.tagName?(t.parentElement.remove(),Array.from(t.parentElement.children).forEach((function(e){return i.delete(e.value)}))):(t.remove(),i.delete(t.value));this.emitCalciteListChange()},s:function(e,t){var i=this;void 0===t&&(t=!1);if(!this.lastSelectedItem)return;var n=this.items,r=n.findIndex((function(e){return e.value===i.lastSelectedItem.value})),s=n.findIndex((function(t){return t.value===e.value}));n.slice(Math.min(r,s),Math.max(r,s)).forEach((function(e){e.toggleSelected(!t),t?i.selectedValues.delete(e.value):i.selectedValues.set(e.value,e)}))}});var o,d=["ArrowUp","ArrowDown"];function f(e){return!!d.find((function(t){return t===e}))}function h(){this.calciteListChange.emit(this.selectedValues)}function m(e,t){t?e.removeAttribute("tabindex"):e.setAttribute("tabindex","-1")}var v=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(i[n[r]]=e[n[r]])}return i};e("L",(function(e){var n,r=e.props,a=r.disabled,u=r.loading,o=r.filterEnabled,d=r.dataForFilter,f=r.handleFilter,h=r.filterPlaceholder,m=r.el,p=v(e,["props"]),g=t("slot",null);return t(i,Object.assign({"aria-busy":u.toString(),"aria-disabled":a.toString(),role:"menu"},p),t("section",null,t("header",{class:(n={},n[c.sticky]=!0,n)},o?t("calcite-filter",{"aria-label":h,data:d,dir:s(m),onCalciteFilterChange:f,placeholder:h}):null,t("slot",{name:"menu-actions"})),u||a?t("calcite-scrim",{loading:u,theme:l(m)},g):g))}))}}}));