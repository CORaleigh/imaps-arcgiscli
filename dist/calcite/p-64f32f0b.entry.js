import{r as e,c as t,h as a,H as i,g as r}from"./p-0f61cfe6.js";import{a as n,d as o,g as s}from"./p-bdd3281d.js";import{g as l}from"./p-a4e6e35b.js";import{C as c}from"./p-28355066.js";import{C as d}from"./p-fe7af860.js";const m=class{constructor(a){e(this,a),this.calciteBlockToggle=t(this,"calciteBlockToggle",7),this.collapsible=!1,this.disabled=!1,this.dragHandle=!1,this.headingLevel=4,this.intlLoading="Loading",this.loading=!1,this.open=!1,this.onHeaderClick=()=>{this.open=!this.open,this.calciteBlockToggle.emit()}}renderScrim(){const{disabled:e,loading:t,el:i}=this,r=a("slot",null);return t||e?a("calcite-scrim",{loading:t,theme:n(i)},r):r}render(){const{collapsible:e,disabled:t,el:r,heading:n,intlCollapse:l,intlExpand:m,loading:p,open:g,summary:f,intlLoading:h,headingLevel:b}=this,u=g?l||"Collapse":m||"Expand",x=o(r,"icon"),w=a("header",{class:"header"},x?a("div",{class:"icon"},a("slot",{name:"icon"})):null,a("div",{class:"title"},a(d,{class:"heading",level:b},n),f?a("div",{class:"summary"},f):null)),k=o(r,"control"),y=a("div",{class:"header-container"},this.dragHandle?a("calcite-handle",null):null,e?a("button",{"aria-label":u,class:"toggle",onClick:this.onHeaderClick,title:u},w):w,p?a("calcite-loader",{inline:!0,"is-active":!0,label:h}):k?a("div",{class:"control-container"},a("slot",{name:"control"})):null),v="rtl"===s(r);return a(i,{tabIndex:t?-1:null},a("article",{"aria-busy":p.toString(),"aria-expanded":e?g.toString():null,class:{article:!0,[c.rtl]:v}},y,a("div",{class:"content",hidden:!g},this.renderScrim())))}get el(){return r(this)}};m.style='@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;-ms-flex-direction:column;flex-direction:column;padding:0;-webkit-transition-property:margin;transition-property:margin;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.215, 0.440, 0.420, 0.880);transition-timing-function:cubic-bezier(0.215, 0.440, 0.420, 0.880);border-width:0;border-bottom-width:1px;border-color:var(--calcite-ui-border-3);border-style:solid;-ms-flex-preferred-size:auto;flex-basis:auto}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;color:var(--calcite-ui-text-2);fill:var(--calcite-ui-text-2)}.heading{padding:0;margin:0;font-weight:var(--calcite-font-weight-medium);line-height:1.5}.header .heading{-ms-flex:1 0 auto;flex:1 0 auto;padding:var(--calcite-spacing-half) var(--calcite-spacing-half)}h1.heading{font-size:var(--calcite-font-size-2)}h2.heading{font-size:var(--calcite-font-size-1)}h3.heading{font-size:var(--calcite-font-size-0)}h4.heading,h5.heading{font-size:var(--calcite-font-size--1)}.header{-ms-flex-pack:start;justify-content:flex-start;padding:0}.header,.toggle{grid-area:header}.header-container{display:grid;-ms-flex-align:stretch;align-items:stretch;grid-template:auto/auto 1fr auto;grid-template-areas:"handle header control";grid-column:header-start/control-end;grid-row:1/2}.header-container>.header{padding-top:0.75rem;padding-bottom:0.75rem;padding-left:0;padding-right:0}.toggle{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;font-family:inherit;-ms-flex-align:center;align-items:center;margin:0;padding-top:0.75rem;padding-bottom:0.75rem;padding-left:0;padding-right:0;border-style:none;cursor:pointer;text-align:left;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;background-color:transparent}.toggle:hover{background-color:var(--calcite-ui-foreground-2)}.toggle:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}calcite-loader[inline]{grid-area:control;align-self:center}calcite-handle{grid-area:handle}.title{margin:0;padding-left:0.75rem;padding-right:0.75rem;padding-top:0;padding-bottom:0}.header .title .heading{padding:0;font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-3);word-wrap:break-word;word-break:break-word;-webkit-transition-property:color;transition-property:color;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.summary{padding:0;font-size:var(--calcite-font-size--2);color:var(--calcite-ui-text-3);word-wrap:break-word;word-break:break-word}.icon{margin-left:0.75rem}.toggle-icon{-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;fill:currentColor;margin:0;margin-right:1rem;-ms-flex-preferred-size:1rem;flex-basis:1rem}.content{padding-left:0.75rem;padding-right:0.75rem;padding-top:0.5rem;padding-bottom:0.5rem;position:relative;-webkit-animation:in 300ms ease-in-out;animation:in 300ms ease-in-out}.control-container{display:-ms-flexbox;display:flex;margin:0;grid-area:control}calcite-scrim{pointer-events:none}.calcite--rtl .icon{margin-left:0;margin-right:0.75rem}:host([open]){margin-top:0.75rem;margin-bottom:0.75rem;-webkit-box-shadow:1px 0 0 var(--calcite-ui-border-1) inset;box-shadow:1px 0 0 var(--calcite-ui-border-1) inset}:host([open]).calcite--rtl{-webkit-box-shadow:-1px 0 0 var(--calcite-ui-border-1) inset;box-shadow:-1px 0 0 var(--calcite-ui-border-1) inset}:host([open]) .header .title .heading{color:var(--calcite-ui-text-1)}:host([disabled]){pointer-events:none;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none;user-select:none}:host([disabled]) .header-container{opacity:0.5}:host([drag-handle]) .title{padding-left:0.25rem}:host([drag-handle]) .icon{margin-left:0;margin-right:0.5rem}:host([drag-handle]) .calcite--rtl .title{padding-left:0;padding-right:0.25rem}:host([drag-handle]) .calcite--rtl .icon{margin-right:0;margin-left:0.25rem}';const p=class{constructor(a){e(this,a),this.calciteBlockSectionToggle=t(this,"calciteBlockSectionToggle",7),this.open=!1,this.toggleDisplay="button",this.guid=`calcite-block-section-${l()}`,this.toggleSection=()=>{this.open=!this.open,this.calciteBlockSectionToggle.emit()}}handleHeaderLabelKeyDown(e){" "!==e.key&&"Enter"!==e.key||(e.preventDefault(),e.stopPropagation(),this.click())}render(){const{el:e,guid:t,intlCollapse:i,intlExpand:r,open:n,text:o,toggleDisplay:l}=this,d=s(e),m=n?"chevron-down":"rtl"===d?"chevron-left":"chevron-right",p=n?i||"Collapse":r||"Expand",g=`${t}__label`,f="switch"===l?a("label",{"aria-label":p,class:{toggle:!0,"toggle--switch":!0},id:g,onKeyDown:this.handleHeaderLabelKeyDown,tabIndex:0,title:p},o,a("calcite-switch",{"aria-labelledby":g,onCalciteSwitchChange:this.toggleSection,scale:"s",switched:n,tabIndex:-1})):a("button",{"aria-label":p,class:{"section-header":!0,toggle:!0},name:p,onClick:this.toggleSection,onKeyDown:this.handleHeaderLabelKeyDown},a("calcite-icon",{icon:m,scale:"s"}),a("span",{class:"section-header__text"},o));return a("section",{"aria-expanded":n.toString(),class:{[c.rtl]:"rtl"===d}},f,a("div",{class:"content",hidden:!n},a("slot",null)))}get el(){return r(this)}};p.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block}:host([open]){border-bottom:1px solid var(--calcite-ui-border-3)}:host(:last-child){border-bottom:none}.toggle{background-color:transparent;border:none;color:var(--calcite-ui-text-2);font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-normal);width:100%}.toggle--switch,.section-header{-ms-flex-align:center;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;margin:var(--calcite-spacing-quarter) 0;padding:var(--calcite-spacing-half) 0;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;font-size:var(--calcite-font-size--1);outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.toggle--switch:focus,.section-header:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.toggle--switch:hover,.section-header:hover{color:var(--calcite-ui-text-1)}.section-header__text{margin:0 var(--calcite-spacing-quarter)}.toggle--switch{-ms-flex-pack:justify;justify-content:space-between}.toggle--switch calcite-switch{pointer-events:none;margin:0 0 0 var(--calcite-spacing-half)}.calcite--rtl .toggle--switch calcite-switch{margin-left:0;margin-right:var(--calcite-spacing-half)}";export{m as calcite_block,p as calcite_block_section}