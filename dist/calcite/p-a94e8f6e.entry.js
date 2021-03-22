import{r as t,h as e,H as i,g as a}from"./p-0f61cfe6.js";import{e as s}from"./p-bdd3281d.js";import{g as r}from"./p-e75286c4.js";import{g as o}from"./p-a4e6e35b.js";import{d as n,u as p,c as l,C as c}from"./p-96d57826.js";const h="data-calcite-tooltip-reference",f=class{constructor(e){t(this,e),this.offsetDistance=n,this.offsetSkidding=0,this.open=!1,this.placement="auto",this._referenceElement=this.getReferenceElement(),this.guid=`calcite-tooltip-${o()}`,this.getId=()=>this.el.id||this.guid,this.addReferences=()=>{const{_referenceElement:t}=this;if(!t)return;const e=this.getId();t.setAttribute(h,e),t.setAttribute("aria-describedby",e)},this.removeReferences=()=>{const{_referenceElement:t}=this;t&&(t.removeAttribute(h),t.removeAttribute("aria-describedby"))},this.show=()=>{this.open=!0},this.hide=()=>{this.open=!1}}offsetDistanceOffsetHandler(){this.reposition()}offsetSkiddingHandler(){this.reposition()}openHandler(){this.reposition()}placementHandler(){this.reposition()}referenceElementHandler(){this.removeReferences(),this._referenceElement=this.getReferenceElement(),this.addReferences(),this.createPopper()}componentDidLoad(){this.addReferences(),this.createPopper()}disconnectedCallback(){this.removeReferences(),this.destroyPopper()}async reposition(){const{popper:t,el:e,placement:o}=this,i=this.getModifiers();t?p({el:e,modifiers:i,placement:o,popper:t}):this.createPopper()}getReferenceElement(){const{referenceElement:t}=this;return("string"==typeof t?document.getElementById(t):t)||null}getModifiers(){const{arrowEl:t,offsetDistance:e,offsetSkidding:o}=this;return[{name:"arrow",enabled:!0,options:{element:t}},{name:"offset",enabled:!0,options:{offset:[o,e]}}]}createPopper(){this.destroyPopper();const{el:t,placement:e,_referenceElement:o}=this,i=this.getModifiers();this.popper=l({el:t,modifiers:i,placement:e,referenceEl:o})}destroyPopper(){const{popper:t}=this;t&&t.destroy(),this.popper=null}render(){const{_referenceElement:t,label:o,open:r}=this,s=t&&r,a=!s;return e(i,{"aria-hidden":a.toString(),"aria-label":o,"calcite-hydrated-hidden":a,id:this.getId(),role:"tooltip"},e("div",{class:{[c.animation]:!0,[c.animationActive]:s}},e("div",{class:"arrow",ref:t=>this.arrowEl=t}),e("div",{class:"container"},e("slot",null))))}get el(){return a(this)}static get watchers(){return{offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}}};f.style='@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block;position:absolute;z-index:999;-webkit-transform:scale(0);transform:scale(0)}.calcite-popper-anim{position:relative;z-index:1;-webkit-transition:var(--calcite-popper-transition);transition:var(--calcite-popper-transition);visibility:hidden;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform;opacity:0;-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);border-radius:var(--calcite-border-radius)}:host([data-popper-placement^=bottom]) .calcite-popper-anim{-webkit-transform:translateY(-5px);transform:translateY(-5px)}:host([data-popper-placement^=top]) .calcite-popper-anim{-webkit-transform:translateY(5px);transform:translateY(5px)}:host([data-popper-placement^=left]) .calcite-popper-anim{-webkit-transform:translateX(5px);transform:translateX(5px)}:host([data-popper-placement^=right]) .calcite-popper-anim{-webkit-transform:translateX(-5px);transform:translateX(-5px)}:host([data-popper-placement]) .calcite-popper-anim--active{opacity:1;visibility:visible;-webkit-transform:translate(0);transform:translate(0)}.arrow,.arrow::before{position:absolute;width:8px;height:8px;z-index:-1}.arrow::before{content:"";-webkit-box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--calcite-ui-foreground-1)}:host([data-popper-placement^=top]) .arrow{bottom:-4px}:host([data-popper-placement^=bottom]) .arrow{top:-4px}:host([data-popper-placement^=left]) .arrow{right:-4px}:host([data-popper-placement^=right]) .arrow{left:-4px}.container{position:relative;background:var(--calcite-ui-foreground-1);max-width:300px;max-height:300px;display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-direction:column;flex-direction:column;font-weight:500;color:var(--calcite-ui-text-1);padding:12px 16px;overflow:hidden;font-size:0.8125rem;line-height:1.5}';const m=class{constructor(e){t(this,e),this.hoverTimeouts=new WeakMap,this.selector=`[${h}]`,this.queryTooltip=t=>s(t.closest(this.selector),h),this.clearHoverTimeout=t=>{const{hoverTimeouts:e}=this;e.has(t)&&window.clearTimeout(e.get(t))},this.closeExistingTooltip=()=>{const{tooltipEl:t}=this;t&&this.toggleTooltip(t,!1)},this.focusTooltip=({tooltip:t,value:e})=>{this.closeExistingTooltip(),e&&this.clearHoverTimeout(t),this.toggleTooltip(t,e)},this.toggleTooltip=(t,e)=>{t.open=e,e&&(this.tooltipEl=t)},this.hoverToggle=({tooltip:t,value:e})=>{const{hoverTimeouts:o}=this;o.delete(t),e&&this.closeExistingTooltip(),this.toggleTooltip(t,e)},this.hoverTooltip=({tooltip:t,value:e})=>{this.clearHoverTimeout(t);const{hoverTimeouts:o}=this,i=window.setTimeout((()=>this.hoverToggle({tooltip:t,value:e})),500);o.set(t,i)},this.activeTooltipHover=t=>{const{tooltipEl:e,hoverTimeouts:o}=this;e&&o.has(e)&&(t.composedPath().includes(e)?this.clearHoverTimeout(e):this.hoverTooltip({tooltip:e,value:!1}))},this.hoverEvent=(t,e)=>{const o=this.queryTooltip(t.target);this.activeTooltipHover(t),o&&this.hoverTooltip({tooltip:o,value:e})},this.focusEvent=(t,e)=>{const o=this.queryTooltip(t.target);o&&this.focusTooltip({tooltip:o,value:e})}}render(){return e(i,null)}keyUpHandler(t){if("Escape"===r(t.key)){const{tooltipEl:t}=this;t&&(this.clearHoverTimeout(t),this.toggleTooltip(t,!1))}}mouseEnterShow(t){this.hoverEvent(t,!0)}mouseLeaveHide(t){this.hoverEvent(t,!1)}focusShow(t){this.focusEvent(t,!0)}blurHide(t){this.focusEvent(t,!1)}};export{f as calcite_tooltip,m as calcite_tooltip_manager};