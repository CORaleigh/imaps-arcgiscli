var __awaiter=this&&this.__awaiter||function(t,e,a,i){function s(t){return t instanceof a?t:new a((function(e){e(t)}))}return new(a||(a=Promise))((function(a,n){function r(t){try{o(i.next(t))}catch(t){n(t)}}function l(t){try{o(i.throw(t))}catch(t){n(t)}}function o(t){t.done?a(t.value):s(t.value).then(r,l)}o((i=i.apply(t,e||[])).next())}))},__generator=this&&this.__generator||function(t,e){var a,i,s,n,r={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return n={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function l(t){return function(e){return o([t,e])}}function o(n){if(a)throw new TypeError("Generator is already executing.");for(;r;)try{if(a=1,i&&(s=2&n[0]?i.return:n[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,n[1])).done)return s;switch(i=0,s&&(n=[2&n[0],s.value]),n[0]){case 0:case 1:s=n;break;case 4:return r.label++,{value:n[1],done:!1};case 5:r.label++,i=n[1],n=[0];continue;case 7:n=r.ops.pop(),r.trys.pop();continue;default:if(!(s=r.trys,(s=s.length>0&&s[s.length-1])||6!==n[0]&&2!==n[0])){r=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){r.label=n[1];break}if(6===n[0]&&r.label<s[1]){r.label=s[1],s=n;break}if(s&&r.label<s[2]){r.label=s[2],r.ops.push(n);break}s[2]&&r.ops.pop(),r.trys.pop();continue}n=e.call(t,r)}catch(t){n=[6,t],i=0}finally{a=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}};System.register(["./p-4105a996.system.js","./p-7bf86ee3.system.js","./p-f1259a9b.system.js","./p-2c235db8.system.js"],(function(t){"use strict";var e,a,i,s,n,r,l,o;return{setters:[function(t){e=t.r,a=t.c,i=t.h,s=t.H,n=t.g},function(t){r=t.h},function(t){l=t.g},function(t){o=t.g}],execute:function(){t("calcite_slider",function(){function t(t){e(this,t),this.calciteSliderChange=a(this,"calciteSliderChange",7),this.calciteSliderUpdate=a(this,"calciteSliderUpdate",7),this.disabled=!1,this.min=0,this.max=100,this.value=null,this.snap=!1,this.step=1,this.hasHistogram=!1,this.guid="calcite-slider-"+o(),this.isRange=!1,this.tickValues=[],this.activeProp="value",this.minMaxValueRange=null,this.minValueDragRange=null,this.maxValueDragRange=null}return t.prototype.histogramWatcher=function(t){this.hasHistogram=!!t},t.prototype.componentWillLoad=function(){this.isRange=!(!this.maxValue&&0!==this.maxValue),this.tickValues=this.generateTickValues(),this.value=this.bound(this.value),this.snap&&(this.value=this.getClosestStep(this.value)),this.histogram&&(this.hasHistogram=!0),this.emitChange()},t.prototype.componentDidRender=function(){this.labelHandles&&(this.adjustHostObscuredHandleLabel("value"),this.isRange&&(this.adjustHostObscuredHandleLabel("minValue"),this.precise&&this.isRange&&!this.hasHistogram||this.hyphenateCollidingRangeHandleLabels())),this.hideObscuredBoundingTickLabels()},t.prototype.render=function(){var t=this,e=this.el.id||this.guid,a=this.minValue||this.min,n=this.maxValue||this.value,r=this.isRange?"maxValue":"value",l=this[r],o=100*this.getUnitInterval(a)+"%",h=100-100*this.getUnitInterval(n)+"%",u=i("button",{"aria-label":this.isRange?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":l,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===r},disabled:this.disabled,onBlur:function(){return t.activeProp=null},onFocus:function(){return t.activeProp=r},onMouseDown:function(){return t.dragStart(r)},onTouchStart:function(e){return t.dragStart(r,e)},ref:function(e){return t.maxHandle=e},role:"slider",style:{right:h}},i("div",{class:"handle"})),c=i("button",{"aria-label":this.isRange?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":l,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===r},disabled:this.disabled,onBlur:function(){return t.activeProp=null},onFocus:function(){return t.activeProp=r},onMouseDown:function(){return t.dragStart(r)},onTouchStart:function(e){return t.dragStart(r,e)},ref:function(e){return t.maxHandle=e},role:"slider",style:{right:h}},i("span",{"aria-hidden":"true",class:"handle__label handle__label--value"},l?l.toLocaleString():l),i("span",{"aria-hidden":"true",class:"handle__label handle__label--value static"},l?l.toLocaleString():l),i("span",{"aria-hidden":"true",class:"handle__label handle__label--value transformed"},l?l.toLocaleString():l),i("div",{class:"handle"})),d=i("button",{"aria-label":this.isRange?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":l,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===r},disabled:this.disabled,onBlur:function(){return t.activeProp=null},onFocus:function(){return t.activeProp=r},onMouseDown:function(){return t.dragStart(r)},onTouchStart:function(e){return t.dragStart(r,e)},ref:function(e){return t.maxHandle=e},role:"slider",style:{right:h}},i("div",{class:"handle"}),i("span",{"aria-hidden":"true",class:"handle__label handle__label--value"},l?l.toLocaleString():l),i("span",{"aria-hidden":"true",class:"handle__label handle__label--value static"},l?l.toLocaleString():l),i("span",{"aria-hidden":"true",class:"handle__label handle__label--value transformed"},l?l.toLocaleString():l)),m=i("button",{"aria-label":this.isRange?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":l,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===r,"thumb--precise":!0},disabled:this.disabled,onBlur:function(){return t.activeProp=null},onFocus:function(){return t.activeProp=r},onMouseDown:function(){return t.dragStart(r)},onTouchStart:function(e){return t.dragStart(r,e)},ref:function(e){return t.maxHandle=e},role:"slider",style:{right:h}},i("div",{class:"handle"}),i("div",{class:"handle-extension"})),p=i("button",{"aria-label":this.isRange?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":l,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===r,"thumb--precise":!0},disabled:this.disabled,onBlur:function(){return t.activeProp=null},onFocus:function(){return t.activeProp=r},onMouseDown:function(){return t.dragStart(r)},onTouchStart:function(e){return t.dragStart(r,e)},ref:function(e){return t.maxHandle=e},role:"slider",style:{right:h}},i("div",{class:"handle-extension"}),i("div",{class:"handle"})),b=i("button",{"aria-label":this.isRange?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":l,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===r,"thumb--precise":!0},disabled:this.disabled,onBlur:function(){return t.activeProp=null},onFocus:function(){return t.activeProp=r},onMouseDown:function(){return t.dragStart(r)},onTouchStart:function(e){return t.dragStart(r,e)},ref:function(e){return t.maxHandle=e},role:"slider",style:{right:h}},i("span",{"aria-hidden":"true",class:"handle__label handle__label--value"},l?l.toLocaleString():l),i("span",{"aria-hidden":"true",class:"handle__label handle__label--value static"},l?l.toLocaleString():l),i("span",{"aria-hidden":"true",class:"handle__label handle__label--value transformed"},l?l.toLocaleString():l),i("div",{class:"handle"}),i("div",{class:"handle-extension"})),g=i("button",{"aria-label":this.isRange?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":l,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===r,"thumb--precise":!0},disabled:this.disabled,onBlur:function(){return t.activeProp=null},onFocus:function(){return t.activeProp=r},onMouseDown:function(){return t.dragStart(r)},onTouchStart:function(e){return t.dragStart(r,e)},ref:function(e){return t.maxHandle=e},role:"slider",style:{right:h}},i("div",{class:"handle-extension"}),i("div",{class:"handle"}),i("span",{"aria-hidden":"true",class:"handle__label handle__label--value"},l?l.toLocaleString():l),i("span",{"aria-hidden":"true",class:"handle__label handle__label--value static"},l?l.toLocaleString():l),i("span",{"aria-hidden":"true",class:"handle__label handle__label--value transformed"},l?l.toLocaleString():l)),f=i("button",{"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:!0,"thumb--minValue":!0,"thumb--active":"minValue"===this.dragProp},disabled:this.disabled,onBlur:function(){return t.activeProp=null},onFocus:function(){return t.activeProp="minValue"},onMouseDown:function(){return t.dragStart("minValue")},onTouchStart:function(e){return t.dragStart("minValue",e)},ref:function(e){return t.minHandle=e},role:"slider",style:{left:o}},i("div",{class:"handle"})),x=i("button",{"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:!0,"thumb--minValue":!0,"thumb--active":"minValue"===this.dragProp},disabled:this.disabled,onBlur:function(){return t.activeProp=null},onFocus:function(){return t.activeProp="minValue"},onMouseDown:function(){return t.dragStart("minValue")},onTouchStart:function(e){return t.dragStart("minValue",e)},ref:function(e){return t.minHandle=e},role:"slider",style:{left:o}},i("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue"},this.minValue&&this.minValue.toLocaleString()),i("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue static"},this.minValue&&this.minValue.toLocaleString()),i("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue transformed"},this.minValue&&this.minValue.toLocaleString()),i("div",{class:"handle"})),v=i("button",{"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:!0,"thumb--minValue":!0,"thumb--active":"minValue"===this.dragProp},disabled:this.disabled,onBlur:function(){return t.activeProp=null},onFocus:function(){return t.activeProp="minValue"},onMouseDown:function(){return t.dragStart("minValue")},onTouchStart:function(e){return t.dragStart("minValue",e)},ref:function(e){return t.minHandle=e},role:"slider",style:{left:o}},i("div",{class:"handle"}),i("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue"},this.minValue&&this.minValue.toLocaleString()),i("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue static"},this.minValue&&this.minValue.toLocaleString()),i("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue transformed"},this.minValue&&this.minValue.toLocaleString())),_=i("button",{"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:!0,"thumb--minValue":!0,"thumb--active":"minValue"===this.dragProp,"thumb--precise":!0},disabled:this.disabled,onBlur:function(){return t.activeProp=null},onFocus:function(){return t.activeProp="minValue"},onMouseDown:function(){return t.dragStart("minValue")},onTouchStart:function(e){return t.dragStart("minValue",e)},ref:function(e){return t.minHandle=e},role:"slider",style:{left:o}},i("div",{class:"handle-extension"}),i("div",{class:"handle"})),y=i("button",{"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:!0,"thumb--minValue":!0,"thumb--active":"minValue"===this.dragProp,"thumb--precise":!0},disabled:this.disabled,onBlur:function(){return t.activeProp=null},onFocus:function(){return t.activeProp="minValue"},onMouseDown:function(){return t.dragStart("minValue")},onTouchStart:function(e){return t.dragStart("minValue",e)},ref:function(e){return t.minHandle=e},role:"slider",style:{left:o}},i("div",{class:"handle-extension"}),i("div",{class:"handle"}),i("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue"},this.minValue&&this.minValue.toLocaleString()),i("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue static"},this.minValue&&this.minValue.toLocaleString()),i("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue transformed"},this.minValue&&this.minValue.toLocaleString()));return i(s,{id:e,"is-range":this.isRange},this.renderGraph(),i("div",{class:"track"},i("div",{class:"track__range",onMouseDown:function(){return t.dragStart("minMaxValue")},onTouchStart:function(e){return t.dragStart("minMaxValue",e)},style:{left:o,right:h}}),i("div",{class:"ticks"},this.tickValues.map((function(e){return i("span",{class:{tick:!0,"tick--active":e>=a&&e<=n},style:{left:100*t.getUnitInterval(e)+"%"}},t.renderTickLabel(e))})))),!this.precise&&!this.labelHandles&&this.isRange&&f,!this.hasHistogram&&!this.precise&&this.labelHandles&&this.isRange&&x,this.precise&&!this.labelHandles&&this.isRange&&_,this.precise&&this.labelHandles&&this.isRange&&y,this.hasHistogram&&!this.precise&&this.labelHandles&&this.isRange&&v,!this.precise&&!this.labelHandles&&u,!this.hasHistogram&&!this.precise&&this.labelHandles&&c,!this.hasHistogram&&this.precise&&!this.labelHandles&&m,this.hasHistogram&&this.precise&&!this.labelHandles&&p,!this.hasHistogram&&this.precise&&this.labelHandles&&b,this.hasHistogram&&!this.precise&&this.labelHandles&&d,this.hasHistogram&&this.precise&&this.labelHandles&&g)},t.prototype.renderGraph=function(){return this.histogram?i("div",{class:"graph"},i("calcite-graph",{data:this.histogram,height:48,highlightMax:this.isRange?this.maxValue:this.value,highlightMin:this.isRange?this.minValue:this.min,width:300})):null},t.prototype.renderTickLabel=function(t){var e=t===this.min,a=t===this.max,s=i("span",{class:{tick__label:!0,"tick__label--min":e,"tick__label--max":a}},t.toLocaleString());return(!this.labelTicks||this.hasHistogram||this.isRange)&&(!this.labelTicks||this.hasHistogram||!this.isRange||this.precise||this.labelHandles)?this.labelTicks&&!this.hasHistogram&&this.isRange&&!this.precise&&this.labelHandles||this.labelTicks&&!this.hasHistogram&&this.isRange&&this.precise&&(e||a)||this.labelTicks&&this.hasHistogram&&!this.precise&&!this.labelHandles||this.labelTicks&&this.hasHistogram&&this.precise&&!this.labelHandles&&(e||a)||this.labelTicks&&this.hasHistogram&&!this.precise&&this.labelHandles&&(e||a)||this.labelTicks&&this.hasHistogram&&this.precise&&this.labelHandles&&(e||a)?s:null:s},t.prototype.handleLabelFocus=function(t){t.detail.interactedEl!==this.el&&r(t.detail.labelEl,this.el)&&this.setFocus()},t.prototype.keyDownHandler=function(t){var e=this[this.activeProp];switch(l(t.key)){case"ArrowUp":case"ArrowRight":t.preventDefault(),this[this.activeProp]=this.bound(e+this.step,this.activeProp),this.emitChange();break;case"ArrowDown":case"ArrowLeft":t.preventDefault(),this[this.activeProp]=this.bound(e-this.step,this.activeProp),this.emitChange();break;case"PageUp":this.pageStep&&(t.preventDefault(),this[this.activeProp]=this.bound(e+this.pageStep,this.activeProp),this.emitChange());break;case"PageDown":this.pageStep&&(t.preventDefault(),this[this.activeProp]=this.bound(e-this.pageStep,this.activeProp),this.emitChange());break;case"Home":t.preventDefault(),this[this.activeProp]=this.bound(this.min,this.activeProp),this.emitChange();break;case"End":t.preventDefault(),this[this.activeProp]=this.bound(this.max,this.activeProp),this.emitChange()}},t.prototype.clickHandler=function(t){var e=t.clientX||t.pageX,a=this.translate(e),i="value";this.isRange&&(i="minMaxValue"===this.lastDragProp?"minMaxValue":Math.abs(this.maxValue-a)<Math.abs(this.minValue-a)?"maxValue":"minValue");switch(this[i]=this.bound(a,i),this.emitChange(),i){default:case"maxValue":this.maxHandle.focus();break;case"minValue":this.minHandle.focus();break;case"minMaxValue":}},t.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return(this.minHandle?this.minHandle:this.maxHandle).focus(),[2]}))}))},t.prototype.generateTickValues=function(){for(var t=[],e=this.min;this.ticks&&e<this.max+this.ticks;)t.push(e),e+=this.ticks;return t},t.prototype.dragStart=function(t,e){e&&e.preventDefault(),this.dragListener&&this.dragEnd(),this.dragProp=t,this.lastDragProp=this.dragProp,this.activeProp=t,this.dragListener=this.dragListener||this.dragUpdate.bind(this),document.addEventListener("mousemove",this.dragListener),document.addEventListener("touchmove",this.dragListener,{capture:!1}),document.addEventListener("mouseup",this.dragEnd.bind(this)),document.addEventListener("touchend",this.dragEnd.bind(this),!1),document.addEventListener("touchcancel",this.dragEnd.bind(this))},t.prototype.dragUpdate=function(t){if(t.preventDefault(),t.stopPropagation(),this.dragProp){var e=this.translate(t.clientX||t.pageX);if(this.isRange&&"minMaxValue"===this.dragProp)if(this.minValueDragRange&&this.maxValueDragRange&&this.minMaxValueRange){var a=e-this.minValueDragRange,i=e+this.maxValueDragRange;i<=this.max&&a>=this.min&&i-a===this.minMaxValueRange&&(this.minValue=this.bound(a,"minValue"),this.maxValue=this.bound(i,"maxValue"))}else this.minValueDragRange=e-this.minValue,this.maxValueDragRange=this.maxValue-e,this.minMaxValueRange=this.maxValue-this.minValue;else this[this.dragProp]=this.bound(e,this.dragProp);this.emitChange()}},t.prototype.emitChange=function(){this.calciteSliderChange.emit(),this.calciteSliderUpdate.emit()},t.prototype.dragEnd=function(){this.dragProp=null,document.removeEventListener("mousemove",this.dragListener),document.removeEventListener("touchmove",this.dragListener),this.minValueDragRange=null,this.maxValueDragRange=null,this.minMaxValueRange=null},t.prototype.bound=function(t,e){return t=Math.min(t,this.max),t=Math.max(t,this.min),"maxValue"===e&&(t=Math.max(t,this.minValue)),"minValue"===e&&(t=Math.min(t,this.maxValue)),t},t.prototype.translate=function(t){var e=this.max-this.min,a=this.el.getBoundingClientRect(),i=(t-a.left)/a.width,s=this.bound(this.min+e*i);return this.snap&&this.step&&(s=this.getClosestStep(s)),s},t.prototype.getClosestStep=function(t){if(t=this.bound(t),this.step){var e=Math.round(t/this.step)*this.step;t=this.bound(e)}return t},t.prototype.getFontSizeForElement=function(t){return Number(window.getComputedStyle(t).getPropertyValue("font-size").match(/\d+/)[0])},t.prototype.getUnitInterval=function(t){t=this.bound(t);var e=this.max-this.min;return(t-this.min)/e},t.prototype.adjustHostObscuredHandleLabel=function(t){var e=this.el.shadowRoot.querySelector(".handle__label--"+t),a=this.el.shadowRoot.querySelector(".handle__label--"+t+".static"),i=this.el.shadowRoot.querySelector(".handle__label--"+t+".transformed"),s=this.getHostOffset(a.getBoundingClientRect().left,a.getBoundingClientRect().right);e.style.transform="translateX("+s+"px)",i.style.transform="translateX("+s+"px)"},t.prototype.hyphenateCollidingRangeHandleLabels=function(){var t=this.el.shadowRoot.querySelector(".handle__label--minValue"),e=this.el.shadowRoot.querySelector(".handle__label--minValue.static"),a=this.el.shadowRoot.querySelector(".handle__label--minValue.transformed"),i=this.getHostOffset(e.getBoundingClientRect().left,e.getBoundingClientRect().right),s=this.el.shadowRoot.querySelector(".handle__label--value"),n=this.el.shadowRoot.querySelector(".handle__label--value.static"),r=this.el.shadowRoot.querySelector(".handle__label--value.transformed"),l=this.getHostOffset(n.getBoundingClientRect().left,n.getBoundingClientRect().right),o=this.getFontSizeForElement(t),h=this.getRangeLabelOverlap(a,r);if(h>0)if(t.classList.add("hyphen"),0===l&&0===i){var u=h/2-o/2;u=-1===Math.sign(u)?Math.abs(u):-u;var c=this.getHostOffset(a.getBoundingClientRect().left+u-o/2,a.getBoundingClientRect().right+u-o/2),d=h/2,m=this.getHostOffset(r.getBoundingClientRect().left+d,r.getBoundingClientRect().right+d);0!==c&&(u+=c,d+=c),0!==m&&(u+=m,d+=m),t.style.transform="translateX("+u+"px)",a.style.transform="translateX("+(u-o/2)+"px)",s.style.transform="translateX("+d+"px)",r.style.transform="translateX("+d+"px)"}else if(0===i||0!==Math.sign(l)&&1!==Math.sign(l)){if(0!==l){u=Math.abs(i)+h-o/2;u=-1===Math.sign(u)?Math.abs(u):-u,t.style.transform="translateX("+u+"px)",a.style.transform="translateX("+(u-o/2)+"px)"}}else t.style.transform="translateX("+(i+o/2)+"px)",s.style.transform="translateX("+(h+l)+"px)",r.style.transform="translateX("+(h+l)+"px)";else t.classList.remove("hyphen"),t.style.transform="translateX("+i+"px)",a.style.transform="translateX("+i+"px)",s.style.transform="translateX("+l+"px)",r.style.transform="translateX("+l+"px)"},t.prototype.hideObscuredBoundingTickLabels=function(){if((this.hasHistogram||this.isRange||this.labelHandles||this.precise)&&(this.hasHistogram||this.isRange||!this.labelHandles||this.precise)&&(this.hasHistogram||this.isRange||this.labelHandles||!this.precise)&&(this.hasHistogram||this.isRange||!this.labelHandles||!this.precise)&&(this.hasHistogram||!this.isRange||this.precise)&&(!this.hasHistogram||this.precise||this.labelHandles)){var t=this.el.shadowRoot.querySelector(".thumb--minValue"),e=this.el.shadowRoot.querySelector(".thumb--value"),a=this.el.shadowRoot.querySelector(".tick__label--min"),i=this.el.shadowRoot.querySelector(".tick__label--max");!t&&e&&a&&i&&(this.isMinTickLabelObscured(a,e)?a.style.opacity="0":a.style.opacity="1",this.isMaxTickLabelObscured(i,e)?i.style.opacity="0":i.style.opacity="1"),t&&e&&a&&i&&(this.isMinTickLabelObscured(a,t)||this.isMinTickLabelObscured(a,e)?a.style.opacity="0":a.style.opacity="1",this.isMaxTickLabelObscured(i,t)||this.isMaxTickLabelObscured(i,e)&&this.hasHistogram?i.style.opacity="0":i.style.opacity="1")}},t.prototype.getHostOffset=function(t,e){var a=this.el.getBoundingClientRect();return t+7<a.left?a.left-t-7:e-7>a.right?7-(e-a.right):0},t.prototype.getRangeLabelOverlap=function(t,e){var a=t.getBoundingClientRect(),i=e.getBoundingClientRect(),s=this.getFontSizeForElement(t),n=a.right+s-i.left;return n>0?n:0},t.prototype.isMinTickLabelObscured=function(t,e){var a=t.getBoundingClientRect();return e.getBoundingClientRect().left<a.right},t.prototype.isMaxTickLabelObscured=function(t,e){var a=t.getBoundingClientRect();return e.getBoundingClientRect().right>a.left},Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{histogram:["histogramWatcher"]}},enumerable:!1,configurable:!0}),t}()).style='@charset "UTF-8";@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block;padding:7px 0;margin:7px 0;position:relative}:host([disabled]){opacity:var(--calcite-ui-opacity-disabled);pointer-events:none}:host([disabled]) .track__range,:host([disabled]) .tick--active{background-color:var(--calcite-ui-text-3)}:host([disabled]) .graph .graph-path--highlight{fill:var(--calcite-ui-text-3)}:host([label-handles]),:host([precise]:not([precise=false])){margin-top:21px}:host([label-ticks]),:host([precise]:not([precise=false])[is-range]){margin-bottom:21px}:host([precise]:not([precise=false])[label-handles]){margin-top:35px}:host([precise]:not([precise=false])[label-handles][is-range]){margin-bottom:35px}.thumb{position:absolute;border:none;background:transparent;cursor:pointer;font-family:inherit;z-index:2;outline:none;padding:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-webkit-transform:translate(7px, -8px);transform:translate(7px, -8px)}.thumb .handle__label{font-size:0.75rem;line-height:1.5;font-weight:500;line-height:1;color:var(--calcite-ui-text-2);margin-bottom:5px}.thumb .handle__label.static,.thumb .handle__label.transformed{opacity:0;position:absolute;top:0;bottom:0}.thumb .handle__label--minValue.hyphen::after{content:"—";display:inline-block;width:1em}.thumb .handle{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;height:14px;width:14px;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:100%;background-color:var(--calcite-ui-foreground-1);-webkit-box-shadow:0 0 0 2px var(--calcite-ui-text-3) inset;box-shadow:0 0 0 2px var(--calcite-ui-text-3) inset;-webkit-transition:border 0.25s ease, background-color 0.25s ease, -webkit-box-shadow 0.25s ease;transition:border 0.25s ease, background-color 0.25s ease, -webkit-box-shadow 0.25s ease;transition:border 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease;transition:border 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease, -webkit-box-shadow 0.25s ease}.thumb .handle-extension{width:2px;height:7px;background-color:var(--calcite-ui-text-3)}.thumb:hover .handle{-webkit-box-shadow:0 0 0 3px var(--calcite-ui-brand) inset;box-shadow:0 0 0 3px var(--calcite-ui-brand) inset}.thumb:hover .handle-extension{background-color:var(--calcite-ui-brand)}.thumb:focus .handle{outline:2px solid var(--calcite-ui-brand);outline-offset:2px;outline-offset:2px}.thumb:focus .handle-extension{background-color:var(--calcite-ui-brand)}.thumb--minValue{-webkit-transform:translate(-7px, -8px);transform:translate(-7px, -8px)}:host([label-handles]) .thumb{-webkit-transform:translate(50%, -25px);transform:translate(50%, -25px)}:host([label-handles]) .thumb--minValue{-webkit-transform:translate(-50%, -25px);transform:translate(-50%, -25px)}:host([has-histogram][label-handles]) .thumb{-webkit-transform:translate(50%, -8px);transform:translate(50%, -8px)}:host([has-histogram][label-handles]) .thumb .handle__label{margin-bottom:unset;margin-top:5px}:host([has-histogram][label-handles]) .thumb--minValue{-webkit-transform:translate(-50%, -8px);transform:translate(-50%, -8px)}:host([precise]:not([precise=false])) .thumb{-webkit-transform:translate(7px, -21px);transform:translate(7px, -21px)}:host([precise]:not([precise=false])) .thumb--minValue{-webkit-transform:translate(-7px, -2px);transform:translate(-7px, -2px)}:host([precise]:not([precise=false])) .thumb--minValue .handle__label{margin-bottom:unset;margin-top:5px}:host([has-histogram][precise]:not([precise=false])) .thumb{-webkit-transform:translate(7px, -2px);transform:translate(7px, -2px)}:host([has-histogram][precise]:not([precise=false])) .thumb--minValue{-webkit-transform:translate(-50%, -2px);transform:translate(-50%, -2px)}:host([ticks][precise]:not([precise=false])) .thumb{-webkit-transform:translate(7px, -20px);transform:translate(7px, -20px)}:host([ticks][precise]:not([precise=false])) .thumb--minValue{-webkit-transform:translate(-7px, -3px);transform:translate(-7px, -3px)}:host([has-histogram][ticks][precise]:not([precise=false])) .thumb{-webkit-transform:translate(7px, -3px);transform:translate(7px, -3px)}:host([has-histogram][ticks][precise]:not([precise=false])) .thumb--minValue{-webkit-transform:translate(-50%, -3px);transform:translate(-50%, -3px)}:host([label-handles][precise]:not([precise=false])) .thumb{-webkit-transform:translate(50%, -38px);transform:translate(50%, -38px)}:host([label-handles][precise]:not([precise=false])) .thumb--minValue{-webkit-transform:translate(-50%, -2px);transform:translate(-50%, -2px)}:host([has-histogram][label-handles][precise]:not([precise=false])) .thumb{-webkit-transform:translate(50%, -2px);transform:translate(50%, -2px)}:host([has-histogram][label-handles][precise]:not([precise=false])) .thumb--minValue{-webkit-transform:translate(-50%, -2px);transform:translate(-50%, -2px)}:host([ticks][label-handles][precise]:not([precise=false])) .thumb{-webkit-transform:translate(50%, -37px);transform:translate(50%, -37px)}:host([ticks][label-handles][precise]:not([precise=false])) .thumb--minValue{-webkit-transform:translate(-50%, -3px);transform:translate(-50%, -3px)}:host([has-histogram][ticks][label-handles][precise]:not([precise=false])) .thumb{-webkit-transform:translate(50%, -3px);transform:translate(50%, -3px)}:host([has-histogram][ticks][label-handles][precise]:not([precise=false])) .thumb--minValue{-webkit-transform:translate(-50%, -3px);transform:translate(-50%, -3px)}.thumb:focus,.thumb--active{z-index:3}.thumb:focus .handle,.thumb--active .handle{background-color:var(--calcite-ui-brand);-webkit-box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.16)}.thumb:hover.thumb--precise:after,.thumb:focus.thumb--precise:after,.thumb--active.thumb--precise:after{background-color:var(--calcite-ui-brand)}.track{height:2px;border-radius:0;z-index:1;background-color:var(--calcite-ui-border-2);-webkit-transition:all 250ms ease-in;transition:all 250ms ease-in;position:relative}.track__range{position:absolute;top:0;height:2px;background-color:var(--calcite-ui-brand)}:host([is-range]) .track__range:hover{cursor:ew-resize}:host([is-range]) .track__range:after{content:"";position:absolute;top:-5px;width:100%;height:14px}.tick{position:absolute;top:-2px;width:2px;height:4px;left:var(--calcite-ui-border-1-offset);margin-left:-2px;border:1px solid var(--calcite-ui-foreground-1);background-color:var(--calcite-ui-border-1)}.tick--active{background-color:var(--calcite-ui-brand)}.tick__label{position:absolute;font-size:0.75rem;line-height:1.5;font-weight:500;color:var(--calcite-ui-text-2);width:4em;margin:14px -2em;text-align:center;display:block;pointer-events:none}.tick__label--min{left:0;margin:14px -3px;text-align:left;-webkit-transition:opacity 150ms;transition:opacity 150ms}.tick__label--max{left:unset;right:0;margin:14px -3px;text-align:right;-webkit-transition:opacity 50ms;transition:opacity 50ms}:host([has-histogram][label-handles]) .tick__label--min,:host([has-histogram][label-handles]) .tick__label--max{margin:6px -3px;font-weight:300;color:var(--calcite-ui-text-3)}:host([has-histogram][precise]:not([precise=false])) .tick__label--min,:host([has-histogram][precise]:not([precise=false])) .tick__label--max{margin:6px -3px;font-weight:300;color:var(--calcite-ui-text-3)}.graph{width:100%;height:48px;position:relative;color:var(--calcite-ui-foreground-2)}.graph svg{position:absolute;width:100%;height:48px}.graph .graph-path--highlight{fill:var(--calcite-ui-brand);opacity:0.25}'}}}));