import{r as t,c as e,h as a,g as i}from"./p-0f61cfe6.js";import"./p-bdd3281d.js";import"./p-7758183a.js";import{g as s}from"./p-0ae16e31.js";import"./p-39515aa9.js";import{m as r,d as o,s as n,h as l,g as c,k as m,i as p,a as h,c as f,r as d,b,e as u,f as x,j as g,L as y}from"./p-38b150b8.js";import{S as w}from"./p-b5f138bd.js";var k;(k||(k={})).grip="grip";const D=class{constructor(a){t(this,a),this.calciteListChange=e(this,"calciteListChange",7),this.calciteListOrderChange=e(this,"calciteListOrderChange",7),this.disabled=!1,this.dragEnabled=!1,this.filterEnabled=!1,this.loading=!1,this.multiple=!1,this.selectedValues=new Map,this.dataForFilter=[],this.lastSelectedItem=null,this.observer=new MutationObserver(r.bind(this)),this.deselectSiblingItems=o.bind(this),this.selectSiblings=n.bind(this),this.handleFilter=l.bind(this),this.getItemData=c.bind(this),this.keyDownHandler=e=>{const t=e.composedPath().find((e=>{var t;return void 0!==(null===(t=e.dataset)||void 0===t?void 0:t.jsHandle)})),a=e.composedPath().find((e=>{var t;return"calcite-value-list-item"===(null===(t=e.tagName)||void 0===t?void 0:t.toLowerCase())}));if(!t||!a.handleActivated)return void m.call(this,e);if("ArrowUp"!==e.key&&"ArrowDown"!==e.key)return;e.preventDefault();const{el:i,items:r}=this,l="ArrowDown"===e.key?1:-1,n=r.indexOf(a),o=s(n+l,r.length);if(o===r.length-1)i.appendChild(a);else{const e=i.children[o];i.insertBefore(a,e===a.nextElementSibling?e.nextElementSibling:e)}requestAnimationFrame((()=>t.focus())),a.handleActivated=!0}}connectedCallback(){p.call(this),h.call(this)}componentDidLoad(){this.setUpDragAndDrop()}disconnectedCallback(){f.call(this),this.cleanUpDragAndDrop()}calciteListItemRemoveHandler(e){d.call(this,e)}calciteListItemChangeHandler(e){b.call(this,e)}calciteListItemPropsChangeHandler(e){e.stopPropagation(),this.setUpFilter()}calciteListItemValueChangeHandler(e){u.call(this,e)}setUpItems(){x.call(this,"calcite-value-list-item")}setUpFilter(){this.filterEnabled&&(this.dataForFilter=this.getItemData())}setUpDragAndDrop(){this.dragEnabled&&(this.sortable=w.create(this.el,{handle:".handle",draggable:"calcite-value-list-item",group:this.group,onSort:()=>{this.items=Array.from(this.el.querySelectorAll("calcite-value-list-item"));const e=this.items.map((e=>e.value));this.calciteListOrderChange.emit(e)}}))}cleanUpDragAndDrop(){this.dragEnabled&&this.sortable.destroy()}async getSelectedItems(){return this.selectedValues}async setFocus(){return g.call(this)}getIconType(){let e=null;return this.dragEnabled&&(e=k.grip),e}render(){return a(y,{onKeyDown:this.keyDownHandler,props:this})}get el(){return i(this)}};D.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{-ms-flex-align:stretch;align-items:stretch;background-color:transparent;display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-flow:column;flex-flow:column;position:relative}calcite-value-list-item:last-of-type{-webkit-box-shadow:none;box-shadow:none}header{background-color:var(--calcite-ui-foreground-1);display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center;margin-bottom:var(--calcite-spacing-quarter);-webkit-box-shadow:0 1px 0 var(--calcite-ui-border-3);box-shadow:0 1px 0 var(--calcite-ui-border-3)}header.sticky{position:-webkit-sticky;position:sticky;top:0;z-index:1}calcite-filter{margin-bottom:1px}calcite-scrim{display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-flow:column;flex-flow:column;pointer-events:none}";export{D as calcite_value_list};