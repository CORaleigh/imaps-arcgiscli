System.register([],(function(r){"use strict";return{execute:function(){r({a:u,c:g,h:f,i:a,n:S,p:v,r:t});function t(r){var t=r.r,n=r.g,e=r.b;return("#"+t.toString(16).padStart(2,"0")+n.toString(16).padStart(2,"0")+e.toString(16).padStart(2,"0")).toLowerCase()}var n=r("b",/^[0-9A-F]{1}$/i);var e=/^#[0-9A-F]{3}$/i;var i=/^#[0-9A-F]{6}$/i;function a(r){return s(r)||u(r)}function s(r){return r&&r.length===4&&e.test(r)}function u(r){return r&&r.length===7&&i.test(r)}function S(r){r=r.toLowerCase();if(!r.startsWith("#")){r="#"+r}if(s(r)){return t(f(r))}return r}function f(r){if(!a(r)){return null}r=r.replace("#","");if(r.length===3){var t=r.split(""),n=t[0],e=t[1],i=t[2];var s=parseInt(""+n+n,16);var u=parseInt(""+e+e,16);var S=parseInt(""+i+i,16);return{r:s,g:u,b:S}}var f=parseInt(r.slice(0,2),16);var o=parseInt(r.slice(2,4),16);var c=parseInt(r.slice(4,6),16);return{r:f,g:o,b:c}}var o=function(r){return r};var c=r("C",o({HEX:"hex",HEXA:"hexa",RGB_CSS:"rgb-css",RGBA_CSS:"rgba-css",HSL_CSS:"hsl-css",HSLA_CSS:"hsla-css"}));var l=o({RGB:"rgb",RGBA:"rgba",HSL:"hsl",HSLA:"hsla",HSV:"hsv",HSVA:"hsva"});function v(r){if(typeof r==="string"){if(r.startsWith("#")){var t=r.length;if(t===4||t===7){return c.HEX}if(t===5||t===9){return c.HEXA}}if(r.startsWith("rgba(")){return c.RGBA_CSS}if(r.startsWith("rgb(")){return c.RGB_CSS}if(r.startsWith("hsl(")){return c.HSL_CSS}if(r.startsWith("hsla(")){return c.HSLA_CSS}}if(typeof r==="object"){if(h(r,"r","g","b")){return h(r,"a")?l.RGBA:l.RGB}if(h(r,"h","s","l")){return h(r,"a")?l.HSLA:l.HSL}if(h(r,"h","s","v")){return h(r,"a")?l.HSVA:l.HSV}}return null}function h(r){var t=[];for(var n=1;n<arguments.length;n++){t[n-1]=arguments[n]}return t.every((function(t){return t&&r&&""+t in r}))}function g(r,t){return(r===null||r===void 0?void 0:r.rgbNumber())===(t===null||t===void 0?void 0:t.rgbNumber())}}}}));