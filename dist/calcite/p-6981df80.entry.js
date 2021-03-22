import{r as t,c as e,h as a,H as r,g as o}from"./p-0f61cfe6.js";import{g as i,e as s}from"./p-bdd3281d.js";import{g as n}from"./p-a4e6e35b.js";import{C as l}from"./p-28355066.js";import{d as c,u as p,c as f,C as m}from"./p-96d57826.js";const d="data-calcite-popover-reference",h=class{constructor(o){t(this,o),this.calcitePopoverClose=e(this,"calcitePopoverClose",7),this.calcitePopoverOpen=e(this,"calcitePopoverOpen",7),this.closeButton=!1,this.disableFlip=!1,this.disablePointer=!1,this.offsetDistance=c,this.offsetSkidding=0,this.open=!1,this.placement="auto",this.intlClose="Close",this._referenceElement=this.getReferenceElement(),this.guid=`calcite-popover-${n()}`,this.getId=()=>this.el.id||this.guid,this.setExpandedAttr=()=>{const{_referenceElement:e,open:t}=this;e&&e.setAttribute("aria-expanded",t.toString())},this.addReferences=()=>{const{_referenceElement:e}=this;if(!e)return;const t=this.getId();e.setAttribute(d,t),e.setAttribute("aria-controls",t),this.setExpandedAttr()},this.removeReferences=()=>{const{_referenceElement:e}=this;e&&(e.removeAttribute(d),e.removeAttribute("aria-controls"),e.removeAttribute("aria-expanded"))},this.hide=()=>{this.open=!1}}offsetDistanceOffsetHandler(){this.reposition()}offsetSkiddingHandler(){this.reposition()}openHandler(e){this.reposition(),this.setExpandedAttr(),e?this.calcitePopoverOpen.emit():this.calcitePopoverClose.emit()}placementHandler(){this.reposition()}referenceElementHandler(){this.removeReferences(),this._referenceElement=this.getReferenceElement(),this.addReferences(),this.createPopper()}componentDidLoad(){this.createPopper(),this.addReferences()}disconnectedCallback(){this.removeReferences(),this.destroyPopper()}async reposition(){const{popper:e,el:t,placement:o}=this,r=this.getModifiers();e?p({el:t,modifiers:r,placement:o,popper:e}):this.createPopper()}async setFocus(e){var t,o;"close-button"!==e?null===(o=this.el)||void 0===o||o.focus():null===(t=this.closeButtonEl)||void 0===t||t.focus()}async toggle(e=!this.open){this.open=e}getReferenceElement(){const{referenceElement:e}=this;return("string"==typeof e?document.getElementById(e):e)||null}getModifiers(){const{arrowEl:e,flipPlacements:t,disableFlip:o,disablePointer:r,offsetDistance:a,offsetSkidding:i}=this,s={name:"flip",enabled:!o};t&&(s.options={fallbackPlacements:t});const n={name:"arrow",enabled:!r};return e&&(n.options={element:e}),[n,s,{name:"offset",enabled:!0,options:{offset:[i,a]}}]}createPopper(){this.destroyPopper();const{el:e,placement:t,_referenceElement:o}=this,r=this.getModifiers();this.popper=f({el:e,modifiers:r,placement:t,referenceEl:o})}destroyPopper(){const{popper:e}=this;e&&e.destroy(),this.popper=null}renderImage(){return this.el.querySelector("[slot=image]")?a("div",{class:"image-container"},a("slot",{name:"image"})):null}renderCloseButton(){const{closeButton:e,intlClose:t}=this;return e?a("button",{"aria-label":t,class:{"close-button":!0},onClick:this.hide,ref:e=>this.closeButtonEl=e,title:t},a("calcite-icon",{icon:"x",scale:"m"})):null}render(){const{_referenceElement:e,el:t,label:o,open:s,disablePointer:n}=this,c="rtl"===i(t),p=e&&s,d=!p,f=n?null:a("div",{class:"arrow",ref:e=>this.arrowEl=e});return a(r,{"aria-hidden":d.toString(),"aria-label":o,"calcite-hydrated-hidden":d,id:this.getId(),role:"dialog"},a("div",{class:{[l.rtl]:c,[m.animation]:!0,[m.animationActive]:p}},f,a("div",{class:"container"},this.renderImage(),a("div",{class:"content"},a("slot",null),this.renderCloseButton()))))}get el(){return o(this)}static get watchers(){return{offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}}};h.style='@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block;position:absolute;z-index:900;-webkit-transform:scale(0);transform:scale(0)}.calcite-popper-anim{position:relative;z-index:1;-webkit-transition:var(--calcite-popper-transition);transition:var(--calcite-popper-transition);visibility:hidden;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform;opacity:0;-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);border-radius:var(--calcite-border-radius)}:host([data-popper-placement^=bottom]) .calcite-popper-anim{-webkit-transform:translateY(-5px);transform:translateY(-5px)}:host([data-popper-placement^=top]) .calcite-popper-anim{-webkit-transform:translateY(5px);transform:translateY(5px)}:host([data-popper-placement^=left]) .calcite-popper-anim{-webkit-transform:translateX(5px);transform:translateX(5px)}:host([data-popper-placement^=right]) .calcite-popper-anim{-webkit-transform:translateX(-5px);transform:translateX(-5px)}:host([data-popper-placement]) .calcite-popper-anim--active{opacity:1;visibility:visible;-webkit-transform:translate(0);transform:translate(0)}.arrow,.arrow::before{position:absolute;width:8px;height:8px;z-index:-1}.arrow::before{content:"";-webkit-box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--calcite-ui-foreground-1)}:host([data-popper-placement^=top]) .arrow{bottom:-4px}:host([data-popper-placement^=bottom]) .arrow{top:-4px}:host([data-popper-placement^=left]) .arrow{right:-4px}:host([data-popper-placement^=right]) .arrow{left:-4px}:host{pointer-events:none}:host([open]){pointer-events:initial}.container{background-color:var(--calcite-ui-foreground-1);position:relative;display:-ms-flexbox;display:flex;overflow:hidden;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-direction:column;flex-direction:column;color:var(--calcite-ui-text-1)}.content{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-pack:start;justify-content:flex-start;line-height:1.5rem}.close-button{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.close-button:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.close-button{display:block;padding:0.75rem;border-style:none;color:var(--calcite-ui-text-1);cursor:pointer;background-color:var(--calcite-ui-foreground-1);-ms-flex:0 0 auto;flex:0 0 auto;border-radius:0 var(--calcite-border-radius) 0 0;z-index:1}.close-button:hover{background-color:var(--calcite-ui-foreground-2)}.close-button:active{background-color:var(--calcite-ui-foreground-3)}.calcite--rtl .close-button{border-radius:var(--calcite-border-radius) 0 0 0}.image-container{overflow:hidden;max-height:200px;margin:5px}slot[name=image]::slotted(img){height:auto;width:100%;-o-object-fit:cover;object-fit:cover;max-height:200px;-o-object-position:50% 50%;object-position:50% 50%}::slotted(calcite-panel),::slotted(calcite-flow){height:100%}';const b=class{constructor(e){t(this,e),this.selector=`[${d}]`,this.getRelatedPopover=e=>s(e.closest(this.selector),d)}render(){return a(r,null)}closeOpenPopovers(e){const t=e.target,{autoClose:o,el:r}=this,a="calcite-popover",i=t.closest(a),s=this.getRelatedPopover(t);o&&!i&&Array.from(document.body.querySelectorAll(a)).filter((e=>e.open&&e!==s)).forEach((e=>e.toggle(!1))),r.contains(t)&&s&&s.toggle()}get el(){return o(this)}};export{h as calcite_popover,b as calcite_popover_manager};