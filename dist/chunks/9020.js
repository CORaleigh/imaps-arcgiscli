(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[9020,1012,995],{71012:(t,e,n)=>{"use strict";n.d(e,{b:()=>a,c:()=>r,g:()=>i});"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function i(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function r(t,e,n){return t(n={path:e,exports:{},require:function(t,e){return a(null==e&&n.path)}},n.exports),n.exports}function a(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}},87040:(t,e,n)=>{"use strict";n.d(e,{q:()=>i});var i=(0,n(71012).c)((function(t){var e;void 0!==(e=function(){function t(n,i,r,a,s){for(;a>r;){if(a-r>600){var o=a-r+1,h=i-r+1,l=Math.log(o),c=.5*Math.exp(2*l/3),u=.5*Math.sqrt(l*c*(o-c)/o)*(h-o/2<0?-1:1);t(n,i,Math.max(r,Math.floor(i-h*c/o+u)),Math.min(a,Math.floor(i+(o-h)*c/o+u)),s)}var m=n[i],d=r,f=a;for(e(n,r,i),s(n[a],m)>0&&e(n,r,a);d<f;){for(e(n,d,f),d++,f--;s(n[d],m)<0;)d++;for(;s(n[f],m)>0;)f--}0===s(n[r],m)?e(n,r,f):e(n,++f,a),f<=i&&(r=f+1),i<=f&&(a=f-1)}}function e(t,e,n){var i=t[e];t[e]=t[n],t[n]=i}function n(t,e){return t<e?-1:t>e?1:0}return function(e,i,r,a,s){t(e,i,r||0,a||e.length-1,s||n)}}())&&(t.exports=e)}))},59020:(t,e,n)=>{"use strict";n.r(e),n.d(e,{ElevationSamplerWorker:()=>A,default:()=>E});var i=n(95830),r=n(59472),a=n(19677),s=n(62698),o=n(87040);class h{constructor(t=9,e){this.compareMinX=m,this.compareMinY=d,this.toBBox=function(t){return t},this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&("function"==typeof e?this.toBBox=e:this._initFormat(e)),this.clear()}destroy(){this.clear(),Y.prune(),B.prune(),_.prune(),w.prune()}all(t){this._all(this.data,t)}search(t,e){let n=this.data;const i=this.toBBox;if(g(t,n))for(Y.clear();n;){for(let r=0,a=n.children.length;r<a;r++){const a=n.children[r],s=n.leaf?i(a):a;g(t,s)&&(n.leaf?e(a):M(t,s)?this._all(a,e):Y.push(a))}n=Y.pop()}}collides(t){let e=this.data;const n=this.toBBox;if(!g(t,e))return!1;for(Y.clear();e;){for(let i=0,r=e.children.length;i<r;i++){const r=e.children[i],a=e.leaf?n(r):r;if(g(t,a)){if(e.leaf||M(t,a))return!0;Y.push(r)}}e=Y.pop()}return!1}load(t,e=t.length){if(!e)return this;if(e<this._minEntries){for(let n=0,i=e;n<i;n++)this.insert(t[n]);return this}let n=this._build(t.slice(0,e),0,e-1,0);if(this.data.children.length)if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){const t=this.data;this.data=n,n=t}this._insert(n,this.data.height-n.height-1,!0)}else this.data=n;return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=new v([]),this}remove(t){if(!t)return this;let e,n=this.data,i=null,s=0,o=!1;const h=this.toBBox(t);for(_.clear(),w.clear();n||_.length>0;){var l;if(n||(n=(0,r.j0)(_.pop()),i=_.data[_.length-1],s=null!=(l=w.pop())?l:0,o=!0),n.leaf&&(e=(0,a.cq)(n.children,t,n.children.length,n.indexHint),-1!==e))return n.children.splice(e,1),_.push(n),this._condense(_),this;o||n.leaf||!M(n,h)?i?(s++,n=i.children[s],o=!1):n=null:(_.push(n),w.push(s),s=0,i=n,n=n.children[0])}return this}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,e){let n=t;for(B.clear();n;){var i;if(!0===n.leaf)for(const t of n.children)e(t);else B.pushArray(n.children);n=null!=(i=B.pop())?i:null}}_build(t,e,n,i){const r=n-e+1;let a=this._maxEntries;if(r<=a){const i=new v(t.slice(e,n+1));return l(i,this.toBBox),i}i||(i=Math.ceil(Math.log(r)/Math.log(a)),a=Math.ceil(r/Math.pow(a,i-1)));const s=new y([]);s.height=i;const o=Math.ceil(r/a),h=o*Math.ceil(Math.sqrt(a));X(t,e,n,h,this.compareMinX);for(let r=e;r<=n;r+=h){const e=Math.min(r+h-1,n);X(t,r,e,o,this.compareMinY);for(let n=r;n<=e;n+=o){const r=Math.min(n+o-1,e);s.children.push(this._build(t,n,r,i-1))}}return l(s,this.toBBox),s}_chooseSubtree(t,e,n,i){for(;i.push(e),!0!==e.leaf&&i.length-1!==n;){let n,i=1/0,s=1/0;for(let o=0,h=e.children.length;o<h;o++){const h=e.children[o],l=f(h),c=(r=t,a=h,(Math.max(a.maxX,r.maxX)-Math.min(a.minX,r.minX))*(Math.max(a.maxY,r.maxY)-Math.min(a.minY,r.minY))-l);c<s?(s=c,i=l<i?l:i,n=h):c===s&&l<i&&(i=l,n=h)}e=n||e.children[0]}var r,a;return e}_insert(t,e,n){const i=this.toBBox,r=n?t:i(t);_.clear();const a=this._chooseSubtree(r,this.data,e,_);for(a.children.push(t),u(a,r);e>=0&&_.data[e].children.length>this._maxEntries;)this._split(_,e),e--;this._adjustParentBBoxes(r,_,e)}_split(t,e){const n=t.data[e],i=n.children.length,r=this._minEntries;this._chooseSplitAxis(n,r,i);const a=this._chooseSplitIndex(n,r,i);if(!a)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const s=n.children.splice(a,n.children.length-a),o=n.leaf?new v(s):new y(s);o.height=n.height,l(n,this.toBBox),l(o,this.toBBox),e?t.data[e-1].children.push(o):this._splitRoot(n,o)}_splitRoot(t,e){this.data=new y([t,e]),this.data.height=t.height+1,l(this.data,this.toBBox)}_chooseSplitIndex(t,e,n){let i,r,a;i=r=1/0;for(let s=e;s<=n-e;s++){const e=c(t,0,s,this.toBBox),o=c(t,s,n,this.toBBox),h=x(e,o),l=f(e)+f(o);h<i?(i=h,a=s,r=l<r?l:r):h===i&&l<r&&(r=l,a=s)}return a}_chooseSplitAxis(t,e,n){const i=t.leaf?this.compareMinX:m,r=t.leaf?this.compareMinY:d;this._allDistMargin(t,e,n,i)<this._allDistMargin(t,e,n,r)&&t.children.sort(i)}_allDistMargin(t,e,n,i){t.children.sort(i);const r=this.toBBox,a=c(t,0,e,r),s=c(t,n-e,n,r);let o=p(a)+p(s);for(let i=e;i<n-e;i++){const e=t.children[i];u(a,t.leaf?r(e):e),o+=p(a)}for(let i=n-e-1;i>=e;i--){const e=t.children[i];u(s,t.leaf?r(e):e),o+=p(s)}return o}_adjustParentBBoxes(t,e,n){for(let i=n;i>=0;i--)u(e.data[i],t)}_condense(t){for(let e=t.length-1;e>=0;e--){const n=t.data[e];if(0===n.children.length)if(e>0){const i=t.data[e-1],r=i.children;r.splice((0,a.cq)(r,n,r.length,i.indexHint),1)}else this.clear();else l(n,this.toBBox)}}_initFormat(t){const e=["return a"," - b",";"];this.compareMinX=new Function("a","b",e.join(t[0])),this.compareMinY=new Function("a","b",e.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function l(t,e){c(t,0,t.children.length,e,t)}function c(t,e,n,i,r){r||(r=new v([])),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(let a,s=e;s<n;s++)a=t.children[s],u(r,t.leaf?i(a):a);return r}function u(t,e){t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY)}function m(t,e){return t.minX-e.minX}function d(t,e){return t.minY-e.minY}function f(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function p(t){return t.maxX-t.minX+(t.maxY-t.minY)}function x(t,e){const n=Math.max(t.minX,e.minX),i=Math.max(t.minY,e.minY),r=Math.min(t.maxX,e.maxX),a=Math.min(t.maxY,e.maxY);return Math.max(0,r-n)*Math.max(0,a-i)}function M(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function g(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function X(t,e,n,i,a){const s=[e,n];for(;s.length;){const e=(0,r.j0)(s.pop()),n=(0,r.j0)(s.pop());if(e-n<=i)continue;const h=n+Math.ceil((e-n)/i/2)*i;(0,o.q)(t,h,n,e,a),s.push(n,h,h,e)}}const Y=new s.Z,B=new s.Z,_=new s.Z,w=new s.Z({deallocator:void 0});class b extends class{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}{constructor(){super(...arguments),this.height=1,this.indexHint=new a.SO}}class v extends b{constructor(t){super(),this.children=t,this.leaf=!0}}class y extends b{constructor(t){super(),this.children=t,this.leaf=!1}}class A{async createIndex(t,e){const n=new Array;if(!t.vertexAttributes||!t.vertexAttributes.position)return new h;const i=this.createMeshData(t),a=(0,r.pC)(e)?await e.invoke("createIndexThread",i,{transferList:n}):this.createIndexThread(i).result;return this.createPooledRBush().fromJSON(a)}createIndexThread(t){const e=new Float64Array(t.position),n=this.createPooledRBush();return t.components?this.createIndexComponentsThread(n,e,t.components.map((t=>new Uint32Array(t)))):this.createIndexAllThread(n,e)}createIndexAllThread(t,e){const n=new Array(e.length/9);let i=0;for(let t=0;t<e.length;t+=9)n[i++]=S(e,t+0,t+3,t+6);return t.load(n),{result:t.toJSON()}}createIndexComponentsThread(t,e,n){let i=0;for(const t of n)i+=t.length/3;const r=new Array(i);let a=0;for(const t of n)for(let n=0;n<t.length;n+=3)r[a++]=S(e,3*t[n+0],3*t[n+1],3*t[n+2]);return t.load(r),{result:t.toJSON()}}createMeshData(t){const e=t.vertexAttributes.position.buffer;return!t.components||t.components.some((t=>!t.faces))?{position:e}:{position:e,components:t.components.map((t=>t.faces))}}createPooledRBush(){return new h(9,(0,i.Z)("csp-restrictions")?t=>t:[".minX",".minY",".maxX",".maxY"])}}function S(t,e,n,i){return{minX:Math.min(t[e+0],t[n+0],t[i+0]),maxX:Math.max(t[e+0],t[n+0],t[i+0]),minY:Math.min(t[e+1],t[n+1],t[i+1]),maxY:Math.max(t[e+1],t[n+1],t[i+1]),p0:[t[e+0],t[e+1],t[e+2]],p1:[t[n+0],t[n+1],t[n+2]],p2:[t[i+0],t[i+1],t[i+2]]}}const E=A}}]);
//# sourceMappingURL=9020.js.map