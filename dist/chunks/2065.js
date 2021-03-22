(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[2065],{90011:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var s=r(95830),n=r(38035);const o=(0,s.Z)("esri-text-decoder")?new TextDecoder("utf-8"):null,i=(0,s.Z)("safari")||(0,s.Z)("ios")?6:(0,s.Z)("ff")?12:32;class a{constructor(e,t,r=0,s=(e?e.byteLength:0)){this._tag=0,this._dataType=99,this.init(e,t,r,s)}init(e,t,r,s){this._data=e,this._dataView=t,this._pos=r,this._end=s}clone(){return new a(this._data,this._dataView,this._pos,this._end)}pos(){return this._pos}move(e){this._pos=e}nextTag(e){for(;;){if(this._pos===this._end)return!1;const t=this._decodeVarint();if(this._tag=t>>3,this._dataType=7&t,!e||e===this._tag)break;this.skip()}return!0}next(){if(this._pos===this._end)return!1;const e=this._decodeVarint();return this._tag=e>>3,this._dataType=7&e,!0}empty(){return this._pos>=this._end}tag(){return this._tag}getInt32(){return this._decodeVarint()}getInt64(){return this._decodeVarint()}getUInt32(){let e=4294967295;return e=(127&this._data[this._pos])>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<7)>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<14)>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<21)>>>0,this._data[this._pos++]<128?e:(e=(e|(15&this._data[this._pos])<<28)>>>0,this._data[this._pos++]<128?e:void 0))))}getUInt64(){return this._decodeVarint()}getSInt32(){const e=this.getUInt32();return e>>>1^-(1&e)|0}getSInt64(){return this._decodeSVarint()}getBool(){const e=0!==this._data[this._pos];return this._skip(1),e}getEnum(){return this._decodeVarint()}getFixed64(){const e=this._dataView,t=this._pos,r=e.getUint32(t,!0)+4294967296*e.getUint32(t+4,!0);return this._skip(8),r}getSFixed64(){const e=this._dataView,t=this._pos,r=e.getUint32(t,!0)+4294967296*e.getInt32(t+4,!0);return this._skip(8),r}getDouble(){const e=this._dataView.getFloat64(this._pos,!0);return this._skip(8),e}getFixed32(){const e=this._dataView.getUint32(this._pos,!0);return this._skip(4),e}getSFixed32(){const e=this._dataView.getInt32(this._pos,!0);return this._skip(4),e}getFloat(){const e=this._dataView.getFloat32(this._pos,!0);return this._skip(4),e}getString(){const e=this._getLength(),t=this._pos,r=this._toString(this._data,t,t+e);return this._skip(e),r}getBytes(){const e=this._getLength(),t=this._pos,r=this._toBytes(this._data,t,t+e);return this._skip(e),r}getLength(){return this._getLengthUnsafe()}processMessageWithArgs(e,t,r,s){const n=this.getMessage(),o=e(n,t,r,s);return n.release(),o}processMessage(e){const t=this.getMessage(),r=e(t);return t.release(),r}getMessage(){const e=this._getLength(),t=a.pool.acquire();return t.init(this._data,this._dataView,this._pos,this._pos+e),this._skip(e),t}release(){a.pool.release(this)}dataType(){return this._dataType}skip(){switch(this._dataType){case 0:this._decodeVarint();break;case 1:this._skip(8);break;case 2:this._skip(this._getLength());break;case 5:this._skip(4);break;default:throw new Error("Invalid data type!")}}skipLen(e){this._skip(e)}_skip(e){if(this._pos+e>this._end)throw new Error("Attempt to skip past the end of buffer!");this._pos+=e}_decodeVarint(){const e=this._data;let t,r=this._pos,s=0;if(this._end-r>=10)do{if(t=e[r++],s|=127&t,0==(128&t))break;if(t=e[r++],s|=(127&t)<<7,0==(128&t))break;if(t=e[r++],s|=(127&t)<<14,0==(128&t))break;if(t=e[r++],s|=(127&t)<<21,0==(128&t))break;if(t=e[r++],s+=268435456*(127&t),0==(128&t))break;if(t=e[r++],s+=34359738368*(127&t),0==(128&t))break;if(t=e[r++],s+=4398046511104*(127&t),0==(128&t))break;if(t=e[r++],s+=562949953421312*(127&t),0==(128&t))break;if(t=e[r++],s+=72057594037927940*(127&t),0==(128&t))break;if(t=e[r++],s+=0x8000000000000000*(127&t),0==(128&t))break;throw new Error("Varint too long!")}while(0);else{let n=1;for(;r!==this._end&&(t=e[r],0!=(128&t));)++r,s+=(127&t)*n,n*=128;if(r===this._end)throw new Error("Varint overrun!");++r,s+=t*n}return this._pos=r,s}_decodeSVarint(){const e=this._decodeVarint();return e%2?-(e+1)/2:e/2}_getLength(){if(2!==this._dataType)throw new Error("Not a delimited data type!");return this._decodeVarint()}_getLengthUnsafe(){return this.getUInt32()}_toString(e,t,r){if((r=Math.min(this._end,r))-t>i&&o){const s=e.subarray(t,r);return o.decode(s)}let s="",n="";for(let o=t;o<r;++o){const t=e[o];128&t?n+="%"+t.toString(16):(s+=decodeURIComponent(n)+String.fromCharCode(t),n="")}return n.length&&(s+=decodeURIComponent(n)),s}_toBytes(e,t,r){return r=Math.min(this._end,r),new Uint8Array(e.buffer,t,r-t)}}a.pool=new n.Z(a,null,(e=>{e._data=null,e._dataView=null}));const c=a},32366:(e,t,r)=>{"use strict";r.d(t,{D:()=>n});let s=0;function n(){return s++}},93533:(e,t,r)=>{"use strict";r.d(t,{WB:()=>G,En:()=>U,yT:()=>V,Z7:()=>A,c9:()=>C,_R:()=>N,qE:()=>E,cM:()=>v,hd:()=>u,YH:()=>Z,ZO:()=>T,ty:()=>x,j3:()=>I,fN:()=>_,oD:()=>w,Yl:()=>R,FN:()=>F,qv:()=>P,tQ:()=>S,KU:()=>M,OG:()=>q,$C:()=>B});r(95830);var s=r(56274),n=r(72206),o=r(27780),i=r(73032),a=r(49840),c=r(89333);const u=39.37,l=a.sv.radius*Math.PI/200,h=/UNIT\[([^\]]+)\]\]$/i,f=n.Z,d=/UNIT\[([^\]]+)\]/i,g=new Set([4261,4305,4807,4810,4811,4812,4816,4819,4821,4901,4902,37225,104139,104140]),p=(0,s.wY)()({meter:"meters",foot:"feet",foot_us:"us-feet",foot_clarke:"clarke-feet",yard_clarke:"clarke-yards",link_clarke:"clarke-links",yard_sears:"sears-yards",foot_sears:"sears-feet",chain_sears:"sears-chains",chain_benoit_1895_b:"benoit-1895-b-chains",yard_indian:"indian-yards",yard_indian_1937:"indian-1937-yards",foot_gold_coast:"gold-coast-feet",chain_sears_1922_truncated:"sears-1922-truncated-chains","50_kilometers":"50-kilometers","150_kilometers":"150-kilometers"}),y=e=>e*e,m=e=>e*e*e,b={length:{baseUnit:"meters",units:{millimeters:{inBaseUnits:.001},centimeters:{inBaseUnits:.01},decimeters:{inBaseUnits:.1},meters:{inBaseUnits:1},kilometers:{inBaseUnits:1e3},inches:{inBaseUnits:.0254},feet:{inBaseUnits:.3048},yards:{inBaseUnits:.9144},miles:{inBaseUnits:1609.344},"nautical-miles":{inBaseUnits:1852},"us-feet":{inBaseUnits:1200/3937}}},area:{baseUnit:"square-meters",units:{"square-millimeters":{inBaseUnits:y(.001)},"square-centimeters":{inBaseUnits:y(.01)},"square-decimeters":{inBaseUnits:y(.1)},"square-meters":{inBaseUnits:1},"square-kilometers":{inBaseUnits:y(1e3)},"square-inches":{inBaseUnits:y(.0254)},"square-feet":{inBaseUnits:y(.3048)},"square-yards":{inBaseUnits:y(.9144)},"square-miles":{inBaseUnits:y(1609.344)},"square-us-feet":{inBaseUnits:y(1200/3937)},acres:{inBaseUnits:.0015625*y(1609.344)},ares:{inBaseUnits:100},hectares:{inBaseUnits:1e4}}},volume:{baseUnit:"liters",units:{liters:{inBaseUnits:1},"cubic-millimeters":{inBaseUnits:1e3*m(.001)},"cubic-centimeters":{inBaseUnits:1e3*m(.01)},"cubic-decimeters":{inBaseUnits:1e3*m(.1)},"cubic-meters":{inBaseUnits:1e3},"cubic-kilometers":{inBaseUnits:1e3*m(1e3)},"cubic-inches":{inBaseUnits:1e3*m(.0254)},"cubic-feet":{inBaseUnits:1e3*m(.3048)},"cubic-yards":{inBaseUnits:1e3*m(.9144)},"cubic-miles":{inBaseUnits:1e3*m(1609.344)}}},angle:{baseUnit:"radians",units:{radians:{inBaseUnits:1},degrees:{inBaseUnits:Math.PI/180}}}},k=function(){const e={};for(const t in b)for(const r in b[t].units)e[r]=t;return e}(),_=["metric","imperial","square-inches","square-feet","square-yards","square-miles","square-us-feet","square-meters","square-kilometers","acres","ares","hectares"],w=["metric","imperial","inches","feet","yards","miles","nautical-miles","us-feet","meters","kilometers"];function T(e){return"imperial"===e||"metric"===e}function I(e){const t=k[e];if(t)return t;throw new Error("unknown measure")}function G(e){return function(e){return b[e].baseUnit}(I(e))}function Z(e,t=null){return t=t||I(e),b[t].baseUnit===e}function U(e,t,r){if(t===r)return e;const s=I(t);if(s!==I(r))throw new Error("incompatible units");const n=Z(t,s)?e:function(e,t,r){return e*b[r].units[t].inBaseUnits}(e,t,s);return Z(r,s)?n:function(e,t,r){return e/b[r].units[t].inBaseUnits}(n,r,s)}function M(e,t){return U(e,t,"meters")<3e3?"meters":"kilometers"}function q(e,t){return U(e,t,"meters")<1e5?"meters":"kilometers"}function F(e,t){return U(e,t,"feet")<1e3?"feet":"miles"}function P(e,t){return U(e,t,"feet")<1e5?"feet":"miles"}function S(e,t){return U(e,t,"square-meters")<3e6?"square-meters":"square-kilometers"}function R(e,t){return U(e,t,"square-feet")<1e6?"square-feet":"square-miles"}function x(e,t,r){return U(e,t,"meters")/(r*Math.PI/180)}function B(e){return p.fromJSON(e.toLowerCase())||null}function N(e){if(e&&"object"==typeof e&&!(0,o.N$)(e))return 1;const t=C(e);return t>1e5?1:t}function v(e){return C(e)>=(e instanceof i.Z?(0,c.Iu)(e).metersPerDegree:1e5)?"meters":E(e)}function C(e,t=a.sv.metersPerDegree){return A(e,!0)||t}function A(e,t=!1){let r,s,n=null;if(null!=e&&("object"==typeof e?(r=e.wkid,s=e.wkt):"number"==typeof e?r=e:"string"==typeof e&&(s=e)),r){if((0,o.o$)(r))return a.yr.metersPerDegree;if((0,o.ME)(r))return a.Z1.metersPerDegree;n=f.values[f[r]],!n&&t&&g.has(r)&&(n=l)}else if(s)if(-1!==s.search(/^PROJCS/i)){const e=h.exec(s);e&&e[1]&&(n=parseFloat(e[1].split(",")[1]))}else if(-1!==s.search(/^GEOCCS/i)){const e=d.exec(s);e&&e[1]&&(n=parseFloat(e[1].split(",")[1]))}return n}function E(e){let t,r,s=null;if(null!=e&&("object"==typeof e?(t=e.wkid,r=e.wkt):"number"==typeof e?t=e:"string"==typeof e&&(r=e)),t)s=f.units[f[t]];else if(r&&-1!==r.search(/^PROJCS/i)){let e=h.exec(r);e&&e[1]&&(e=/[\\"\\']{1}([^\\"\\']+)/.exec(e[1]),s=e&&e[1])}return s?B(s):null}function V(e){if(!e)return null;switch(E(e)){case"feet":case"us-feet":case"clarke-feet":case"clarke-yards":case"clarke-links":case"sears-yards":case"sears-feet":case"sears-chains":case"benoit-1895-b-chains":case"indian-yards":case"indian-1937-yards":case"gold-coast-feet":case"sears-1922-truncated-chains":return"imperial";case"50-kilometers":case"150-kilometers":case"meters":return"metric";case null:case void 0:return null}return null}},89333:(e,t,r)=>{"use strict";r.d(t,{GG:()=>a,HQ:()=>c,VY:()=>u,wY:()=>l,Iu:()=>f,e8:()=>d,rS:()=>h});var s=r(27780),n=r(73032),o=r(49840);function i(e){return new n.Z({wkt:`GEOCCS["Spherical geocentric",\n    DATUM["Not specified",\n      SPHEROID["Sphere",${e.radius},0]],\n    PRIMEM["Greenwich",0.0,\n      AUTHORITY["EPSG","8901"]],\n    UNIT["m",1.0],\n    AXIS["Geocentric X",OTHER],\n    AXIS["Geocentric Y",EAST],\n    AXIS["Geocentric Z",NORTH]\n  ]`})}const a=i(o.sv),c=i(o.yr),u=i(o.Z1),l=new n.Z({wkt:`GEOCCS["WGS 84",\n  DATUM["WGS_1984",\n    SPHEROID["WGS 84",${o.sv.radius},298.257223563,\n      AUTHORITY["EPSG","7030"]],\n    AUTHORITY["EPSG","6326"]],\n  PRIMEM["Greenwich",0,\n    AUTHORITY["EPSG","8901"]],\n  UNIT["m",1.0,\n    AUTHORITY["EPSG","9001"]],\n  AXIS["Geocentric X",OTHER],\n  AXIS["Geocentric Y",OTHER],\n  AXIS["Geocentric Z",NORTH],\n  AUTHORITY["EPSG","4978"]\n]`});function h(e){return e&&((0,s.BZ)(e)||e===c)?c:e&&((0,s.V2)(e)||e===u)?u:a}function f(e){return e&&((0,s.BZ)(e)||e===c)?o.yr:e&&((0,s.V2)(e)||e===u)?o.Z1:o.sv}function d(e){return(0,s.o$)(e)?o.yr:(0,s.ME)(e)?o.Z1:o.sv}},50897:(e,t,r)=>{"use strict";r.d(t,{Gv:()=>w,SO:()=>f,d9:()=>o,r3:()=>b,BD:()=>d,Qn:()=>g,Zm:()=>y,jE:()=>p,Ue:()=>n,cS:()=>_,Ho:()=>u,oJ:()=>a,al:()=>i,Cb:()=>h,kK:()=>m,vk:()=>k,HH:()=>c,bf:()=>l});r(95830);var s=r(52937);function n(e=T){return[e[0],e[1],e[2],e[3]]}function o(e){return[e[0],e[1],e[2],e[3]]}function i(e,t,r,s,o=n()){return o[0]=e,o[1]=t,o[2]=r,o[3]=s,o}function a(e,t=n()){return t[0]=e.xmin,t[1]=e.ymin,t[2]=e.xmax,t[3]=e.ymax,t}function c(e,t){return new s.Z({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:t})}function u(e,t){t[0]<e[0]&&(e[0]=t[0]),t[0]>e[2]&&(e[2]=t[0]),t[1]<e[1]&&(e[1]=t[1]),t[1]>e[3]&&(e[3]=t[1])}function l(e){return e[0]>=e[2]?0:e[2]-e[0]}function h(e){return e[1]>=e[3]?0:e[3]-e[1]}function f(e){return l(e)*h(e)}function d(e,t){return p(e,t[0],t[1])}function g(e,t){return p(e,t.x,t.y)}function p(e,t,r){return t>=e[0]&&r>=e[1]&&t<=e[2]&&r<=e[3]}function y(e,t,r){return t[0]>=e[0]-r&&t[1]>=e[1]-r&&t[0]<=e[2]+r&&t[1]<=e[3]+r}function m(e,t){return Math.max(t[0],e[0])<=Math.min(t[2],e[2])&&Math.max(t[1],e[1])<=Math.min(t[3],e[3])}function b(e,t){return t[0]>=e[0]&&t[2]<=e[2]&&t[1]>=e[1]&&t[3]<=e[3]}function k(e,t,r=e){return r[0]=e[0]-t,r[1]=e[1]-t,r[2]=e[2]+t,r[3]=e[3]+t,r}function _(e){return e?function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}(e,w):n(w)}const w=[1/0,1/0,-1/0,-1/0],T=[0,0,0,0]},44195:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});class s{constructor(e=null,t={},r,s){this.displayId=0,this.geohashIndexed=!1,this.geohashX=0,this.geohashY=0,this.geometry=e,t&&(this.attributes=t),r&&(this.centroid=r),null!=s&&(this.objectId=s)}get hasGeometry(){return!(!this.geometry||!this.geometry.coords||!this.geometry.coords.length)}weakClone(){const e=new s(this.geometry,this.attributes,this.centroid,this.objectId);return e.displayId=this.displayId,e.geohashIndexed=this.geohashIndexed,e.geohashX=this.geohashX,e.geohashY=this.geohashY,e}}const n=s},60151:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});class s{constructor(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}weakClone(){const e=new s;return e.objectIdFieldName=this.objectIdFieldName,e.globalIdFieldName=this.globalIdFieldName,e.geohashFieldName=this.geohashFieldName,e.geometryProperties=this.geometryProperties,e.geometryType=this.geometryType,e.spatialReference=this.spatialReference,e.hasZ=this.hasZ,e.hasM=this.hasM,e.features=this.features,e.fields=this.fields,e.transform=this.transform,e.exceededTransferLimit=this.exceededTransferLimit,e.uniqueIdField=this.uniqueIdField,e.queryGeometry=this.queryGeometry,e.queryGeometryType=this.queryGeometryType,e}}const n=s},73127:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});class s{constructor(e=[],t=[],r=!1){this.lengths=null!=e?e:[],this.coords=null!=t?t:[],this.hasIndeterminateRingOrder=r}get isPoint(){return 0===this.lengths.length}forEachVertex(e){let t=0;this.lengths.length||e(this.coords[0],this.coords[1]);for(let r=0;r<this.lengths.length;r++){const s=this.lengths[r];for(let r=0;r<s;r++)e(this.coords[2*(r+t)],this.coords[2*(r+t)+1]);t+=s}}clone(){return new s(this.lengths.slice(),this.coords.slice(),this.hasIndeterminateRingOrder)}}const n=s},31036:(e,t,r)=>{"use strict";r.d(t,{XA:()=>j,h_:()=>Q,Yn:()=>Y,GH:()=>$,E7:()=>W,ks:()=>L,Uy:()=>V,u0:()=>C,EI:()=>H,cn:()=>J,di:()=>z,Iv:()=>R,fQ:()=>w,eG:()=>A,J6:()=>N,oB:()=>ue,zj:()=>te,$:()=>ne,lz:()=>ce,RZ:()=>K,Nh:()=>ee,Jd:()=>m,IN:()=>b,hY:()=>ie,$g:()=>oe});var s=r(36544),n=r(32656),o=r(56885),i=r(44195),a=r(60151),c=r(73127);function u(e,t){return e?t?4:3:t?3:2}const l=s.Z.getLogger("esri.tasks.support.optimizedFeatureSet"),h={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0},f=(e,t,r,s,n,o)=>{e[r]=n,e[r+1]=o},d=(e,t,r,s,n,o)=>{e[r]=n,e[r+1]=o,e[r+2]=t[s+2]},g=(e,t,r,s,n,o)=>{e[r]=n,e[r+1]=o,e[r+2]=t[s+3]},p=(e,t,r,s,n,o)=>{e[r]=n,e[r+1]=o,e[r+2]=t[s+2],e[r+3]=t[s+3]};function y(e,t,r,s){if(e){if(r)return t&&s?p:d;if(t&&s)return g}else if(t&&s)return d;return f}function m({scale:e,translate:t},r){return Math.round((r-t[0])/e[0])}function b({scale:e,translate:t},r){return Math.round((t[1]-r)/e[1])}function k({scale:e,translate:t},r){return r*e[0]+t[0]}function _({scale:e,translate:t},r){return t[1]-r*e[1]}function w(e,t,r){return e?t?r?q(e):G(e):r?U(e):T(e):null}function T(e){const t=e.coords;return{x:t[0],y:t[1]}}function I(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e}function G(e){const t=e.coords;return{x:t[0],y:t[1],z:t[2]}}function Z(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e}function U(e){const t=e.coords;return{x:t[0],y:t[1],m:t[2]}}function M(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.m,e}function q(e){const t=e.coords;return{x:t[0],y:t[1],z:t[2],m:t[3]}}function F(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e.coords[3]=t.m,e}function P(e,t){return e&&t?F:e?Z:t?M:I}function S(e,t,r,s,n){const o=P(r,s);for(const r of t){const{geometry:t,attributes:s}=r;let a;t&&(a=o(new c.Z,t)),e.push(new i.Z(a,s,null,s[n]))}return e}function R(e,t,r){if(!e)return null;const s=u(t,r),n=[];for(let t=0;t<e.coords.length;t+=s){const r=[];for(let n=0;n<s;n++)r.push(e.coords[t+n]);n.push(r)}return t?r?{points:n,hasZ:t,hasM:r}:{points:n,hasZ:t}:r?{points:n,hasM:r}:{points:n}}function x(e,t,r,s,n){const o=u(r,s);for(const r of t){const t=r.geometry,s=r.attributes;let a;t&&(a=B(new c.Z,t,o)),e.push(new i.Z(a,s,null,s[n]))}return e}function B(e,t,r=u(t.hasZ,t.hasM)){e.lengths[0]=t.points.length;const s=e.coords;let n=0;for(const e of t.points)for(let t=0;t<r;t++)s[n++]=e[t];return e}function N(e,t,r){if(!e)return null;const s=u(t,r),{coords:n,lengths:o}=e,i=[];let a=0;for(const e of o){const t=[];for(let r=0;r<e;r++){const e=[];for(let t=0;t<s;t++)e.push(n[a++]);t.push(e)}i.push(t)}return t?r?{paths:i,hasZ:t,hasM:r}:{paths:i,hasZ:t}:r?{paths:i,hasM:r}:{paths:i}}function v(e,t,r,s,n){const o=u(r,s);for(const r of t){const t=r.geometry,s=r.attributes;let a;t&&(a=C(new c.Z,t,o)),e.push(new i.Z(a,s,null,s[n]))}return e}function C(e,t,r=u(t.hasZ,t.hasM)){const{lengths:s,coords:n}=e;let o=0;for(const e of t.paths){for(const t of e)for(let e=0;e<r;e++)n[o++]=t[e];s.push(e.length)}return e}function A(e,t,r){if(!e)return null;const s=u(t,r),{coords:n,lengths:o}=e,i=[];let a=0;for(const e of o){const t=[];for(let r=0;r<e;r++){const e=[];for(let t=0;t<s;t++)e.push(n[a++]);t.push(e)}i.push(t)}return t?r?{rings:i,hasZ:t,hasM:r}:{rings:i,hasZ:t}:r?{rings:i,hasM:r}:{rings:i}}function E(e,t,r,s,n){for(const o of t){const t=o.geometry,a=o.centroid,u=o.attributes;let l;t&&(l=V(new c.Z,t,r,s)),a?e.push(new i.Z(l,u,I(new c.Z,a),u[n])):e.push(new i.Z(l,u,null,u[n]))}return e}function V(e,t,r=t.hasZ,s=t.hasM){return L(e,t.rings,r,s),e}function L(e,t,r,s){const n=u(r,s),{lengths:o,coords:i}=e;let a=0;o.length=i.length=0;for(const e of t){for(const t of e)for(let e=0;e<n;e++)i[a++]=t[e];o.push(e.length)}return e}const D=[],O=[];function j(e,t,r,s,n){D[0]=e;const[o]=Y(O,D,t,r,s,n);return D.length=O.length=0,o}function Y(e,t,r,s,o,a){if(e.length=0,!r){for(const r of t){const t=r.attributes[a];e.push(new i.Z(null,r.attributes,null,t))}return e}switch(r){case"esriGeometryPoint":return S(e,t,s,o,a);case"esriGeometryMultipoint":return x(e,t,s,o,a);case"esriGeometryPolyline":return v(e,t,s,o,a);case"esriGeometryPolygon":return E(e,t,s,o,a);default:l.error("convertToFeatureSet:unknown-geometry",new n.Z(`Unable to parse unknown geometry type '${r}'`)),e.length=0}return e}function W(e,t,r,s,o,i){const a=e.length;switch(r){case"esriGeometryPoint":S(e,t,s,o,i);break;case"esriGeometryMultipoint":x(e,t,s,o,i);break;case"esriGeometryPolyline":v(e,t,s,o,i);break;case"esriGeometryPolygon":E(e,t,s,o,i);break;default:l.error("convertToFeatureSet:unknown-geometry",new n.Z(`Unable to parse unknown geometry type '${r}'`))}for(let s=0;s<t.length;s++)e[s+a].geometryType=r,e[s+a].insertAfter=t[s].insertAfter,e[s+a].groupId=t[s].groupId;return e}function H(e,t,r,s){O[0]=e,X(D,O,t,r,s);const n=D[0];return D.length=O.length=0,n}function $(e,t,r){if(!e)return null;const s=new c.Z;return"hasZ"in e&&null==t&&(t=e.hasZ),"hasM"in e&&null==r&&(r=e.hasM),(0,o.wp)(e)?P(null!=t?t:null!=e.z,null!=r?r:null!=e.m)(s,e):(0,o.oU)(e)?V(s,e,t,r):(0,o.l9)(e)?C(s,e,u(t,r)):(0,o.aW)(e)?B(s,e,u(t,r)):void l.error("convertFromGeometry:unknown-geometry",new n.Z(`Unable to parse unknown geometry type '${e}'`))}function z(e,t,r,s){const o=e&&("coords"in e?e:e.geometry);if(!o)return null;switch(t){case"esriGeometryPoint":{let e=T;return r&&s?e=q:r?e=G:s&&(e=U),e(o)}case"esriGeometryMultipoint":return R(o,r,s);case"esriGeometryPolyline":return N(o,r,s);case"esriGeometryPolygon":return A(o,r,s);default:return void l.error("convertToGeometry:unknown-geometry",new n.Z(`Unable to parse unknown geometry type '${t}'`))}}function X(e,t,r,s,o){switch(e.length=0,r){case"esriGeometryPoint":return function(e,t,r,s){let n=T;r&&s?n=q:r?n=G:s&&(n=U);for(const r of t){const{geometry:t,attributes:s}=r,o=t?n(t):null;e.push({attributes:s,geometry:o})}return e}(e,t,s,o);case"esriGeometryMultipoint":return function(e,t,r,s){for(const n of t){const{geometry:t,attributes:o}=n;let i;t&&(i=R(t,r,s)),e.push({attributes:o,geometry:i})}return e}(e,t,s,o);case"esriGeometryPolyline":return function(e,t,r,s){for(const n of t){const{geometry:t,attributes:o}=n;let i;t&&(i=N(t,r,s)),e.push({attributes:o,geometry:i})}return e}(e,t,s,o);case"esriGeometryPolygon":return function(e,t,r,s){for(const n of t){const{geometry:t,attributes:o,centroid:i}=n;let a;if(t&&(a=A(t,r,s)),i){const t=T(i);e.push({attributes:o,centroid:t,geometry:a})}else e.push({attributes:o,geometry:a})}return e}(e,t,s,o);default:l.error("convertToFeatureSet:unknown-geometry",new n.Z(`Unable to parse unknown geometry type '${r}'`))}return e}function J(e){const{objectIdFieldName:t,spatialReference:r,transform:s,fields:n,hasM:o,hasZ:i,features:a,geometryType:c,exceededTransferLimit:u,uniqueIdField:l,queryGeometry:h,queryGeometryType:f}=e,d={features:X([],a,c,i,o),fields:n,geometryType:c,objectIdFieldName:t,spatialReference:r,uniqueIdField:l,queryGeometry:z(h,f,!1,!1)};return s&&(d.transform=s),u&&(d.exceededTransferLimit=u),o&&(d.hasM=o),i&&(d.hasZ=i),d}function Q(e,t){const r=new a.Z,{hasM:s,hasZ:o,features:i,objectIdFieldName:c,spatialReference:u,geometryType:h,exceededTransferLimit:f,transform:d,fields:g}=e;return g&&(r.fields=g),r.geometryType=h,r.objectIdFieldName=c||t,r.spatialReference=u,r.objectIdFieldName?(i&&Y(r.features,i,h,o,s,r.objectIdFieldName),f&&(r.exceededTransferLimit=f),s&&(r.hasM=s),o&&(r.hasZ=o),d&&(r.transform=d),r):(l.error(new n.Z("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),r)}function K(e,t){const{geometryType:r,features:s,hasM:n,hasZ:o}=t;if(!e)return t;for(let t=0;t<s.length;t++){const i=s[t],a=i.weakClone();a.geometry=new c.Z,ee(a.geometry,i.geometry,n,o,r,e),i.centroid&&(a.centroid=new c.Z,ee(a.centroid,i.centroid,n,o,"esriGeometryPoint",e)),s[t]=a}return t.transform=e,t}function ee(e,t,r,s,n,o,i=r,a=s){if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),!t||!t.coords.length)return null;const c=h[n],{coords:l,lengths:f}=t,d=u(r,s),g=u(r&&i,s&&a),p=y(r,s,i,a);if(!f.length)return p(e.coords,l,0,0,m(o,l[0]),b(o,l[1])),e.lengths.length&&(e.lengths.length=0),e.coords.length=d,e;let k,_,w,T,I=0,G=0,Z=G;for(const t of f){if(t<c)continue;let r=0;G=Z,w=k=m(o,l[I]),T=_=b(o,l[I+1]),p(e.coords,l,G,I,w,T),r++,I+=d,G+=g;for(let s=1;s<t;s++,I+=d)w=m(o,l[I]),T=b(o,l[I+1]),w===k&&T===_||(p(e.coords,l,G,I,w-k,T-_),G+=g,r++,k=w,_=T);r>=c&&(e.lengths.push(r),Z=G)}return e.coords.length=Z,e.coords.length?e:null}function te(e,t,r,s,n,o,i=r,a=s){if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),!t||!t.coords.length)return null;const c=h[n],{coords:l,lengths:f}=t,d=u(r,s),g=u(r&&i,s&&a),p=y(r,s,i,a);if(!f.length)return p(e.coords,l,0,0,l[0],l[1]),e.lengths.length&&(e.lengths.length=0),e.coords.length=d,e;let m=0;const b=o*o;for(const t of f){if(t<c){m+=t*d;continue}const r=e.coords.length/g,s=m,n=m+(t-1)*d;p(e.coords,l,e.coords.length,s,l[s],l[s+1]),se(e.coords,l,d,b,p,s,n),p(e.coords,l,e.coords.length,n,l[n],l[n+1]);const o=e.coords.length/g-r;o>=c?e.lengths.push(o):e.coords.length=r*g,m+=t*d}return e.coords.length?e:null}function re(e,t,r,s){const n=e[t],o=e[t+1],i=e[r],a=e[r+1],c=e[s],u=e[s+1];let l=i,h=a,f=c-l,d=u-h;if(0!==f||0!==d){const e=((n-l)*f+(o-h)*d)/(f*f+d*d);e>1?(l=c,h=u):e>0&&(l+=f*e,h+=d*e)}return f=n-l,d=o-h,f*f+d*d}function se(e,t,r,s,n,o,i){let a,c=s,u=0;for(let e=o+r;e<i;e+=r)a=re(t,e,o,i),a>c&&(u=e,c=a);c>s&&(u-o>r&&se(e,t,r,s,n,o,u),n(e,t,e.length,u,t[u],t[u+1]),i-u>r&&se(e,t,r,s,n,u,i))}function ne(e,t,r,s){if(!t||!t.coords||!t.coords.length)return null;const n=u(r,s);let o=Number.POSITIVE_INFINITY,i=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY,c=Number.NEGATIVE_INFINITY;if(t&&t.coords){const e=t.coords;for(let t=0;t<e.length;t+=n){const r=e[t],s=e[t+1];o=Math.min(o,r),a=Math.max(a,r),i=Math.min(i,s),c=Math.max(c,s)}}return e[0]=o,e[1]=i,e[2]=a,e[3]=c,e}function oe(e,t,r,s,n){const{coords:o,lengths:i}=t,a=r?s?p:d:s?d:f,c=u(r,s);if(!o.length)return e!==t&&(e.lengths.length=0,e.coords.length=0),e;if(!i.length)return a(e.coords,o,0,0,k(n,o[0]),_(n,o[1])),e!==t&&(e.lengths.length=0,e.coords.length=c),e;const[l,h]=n.scale;let g=0;for(let t=0;t<i.length;t++){const r=i[t];e.lengths[t]=r;let s=k(n,o[g]),u=_(n,o[g+1]);a(e.coords,o,g,g,s,u),g+=c;for(let t=1;t<r;t++,g+=c)s+=o[g]*l,u-=o[g+1]*h,a(e.coords,o,g,g,s,u)}return e!==t&&(e.lengths.length=i.length,e.coords.length=o.length),e}function ie(e,t,r,s,n,o){const i=u(r,s),a=y(r,s,n,o),c=t.coords;e.coords.length=0,e.lengths.length=0,e.lengths.push(...t.lengths);for(let t=0;t<c.length;t+=i)a(e.coords,c,e.coords.length,t,c[t],c[t+1]);return e}function ae(e,t,r,s){let n=0,o=e[s*t],i=e[s*(t+1)];for(let a=1;a<r;a++){const r=o+e[s*(t+a)],c=i+e[s*(t+a)+1],u=(r-o)*(c+i);o=r,i=c,n+=u}return.5*n}function ce(e,t){const{coords:r,lengths:s}=e;let n=0,o=0;for(let e=0;e<s.length;e++)o+=ae(r,n,s[e],t),n+=e;return Math.abs(o)}function ue(e,t){const r=e.clone(),s=e.coords,n=e.lengths;let o=0;for(let e=0;e<n.length;e++){const i=n[e];let a=s[t*o],c=s[t*o+1];for(let e=1;e<i;e++){const n=a+s[t*(o+e)],i=c+s[t*(o+e)+1];r.coords[t*(o+e)]=n,r.coords[t*(o+e)+1]=i,a=n,c=i}o+=i}return r}},42162:(e,t,r)=>{"use strict";r.d(t,{K9:()=>P,O7:()=>d,G$:()=>Z});var s=r(59472),n=r(36544),o=r(32656),i=r(73127),a=r(90011),c=r(95157);const u=n.Z.getLogger("esri.tasks.operations.pbfFeatureServiceParser"),l=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString","esriFieldTypeDate","esriFieldTypeOID","esriFieldTypeGeometry","esriFieldTypeBlob","esriFieldTypeRaster","esriFieldTypeGUID","esriFieldTypeGlobalID","esriFieldTypeXML"],h=["sqlTypeBigInt","sqlTypeBinary","sqlTypeBit","sqlTypeChar","sqlTypeDate","sqlTypeDecimal","sqlTypeDouble","sqlTypeFloat","sqlTypeGeometry","sqlTypeGUID","sqlTypeInteger","sqlTypeLongNVarchar","sqlTypeLongVarbinary","sqlTypeLongVarchar","sqlTypeNChar","sqlTypeNVarchar","sqlTypeOther","sqlTypeReal","sqlTypeSmallInt","sqlTypeSqlXml","sqlTypeTime","sqlTypeTimestamp","sqlTypeTimestamp2","sqlTypeTinyInt","sqlTypeVarbinary","sqlTypeVarchar"],f=["upperLeft","lowerLeft"];function d(e){return e>=l.length?null:l[e]}function g(e){return e>=f.length?null:f[e]}function p(e,t){return t>=e.geometryTypes.length?null:e.geometryTypes[t]}function y(e,t,r){const s=t.createPointGeometry(r);for(;e.next();)switch(e.tag()){case 3:{const r=e.getUInt32(),n=e.pos()+r;let o=0;for(;e.pos()<n;)t.addCoordinatePoint(s,e.getSInt64(),o++);break}case 1:case 2:default:e.skip()}return s}function m(e,t,r){const s=t.createGeometry(r),n=2+(r.hasZ?1:0)+(r.hasM?1:0);for(;e.next();)switch(e.tag()){case 2:{const r=e.getUInt32(),n=e.pos()+r;let o=0;for(;e.pos()<n;)t.addLength(s,e.getUInt32(),o++);break}case 3:{const r=e.getUInt32(),o=e.pos()+r;let i=0;for(;e.pos()<o;)t.addCoordinate(s,e.getSInt64(),i),i++,i===n&&(i=0);break}case 1:default:e.skip()}return s}function b(e){const t=new i.Z;let r="esriGeometryPoint";for(;e.next();)switch(e.tag()){case 2:{const r=e.getUInt32(),s=e.pos()+r;for(;e.pos()<s;)t.lengths.push(e.getUInt32());break}case 3:{const r=e.getUInt32(),s=e.pos()+r;for(;e.pos()<s;)t.coords.push(e.getSInt64());break}case 1:r=c.A[e.getEnum()];break;default:e.skip()}return{queryGeometry:t,queryGeometryType:r}}function k(e){for(;e.next();)switch(e.tag()){case 1:return e.getString();case 2:return e.getFloat();case 3:return e.getDouble();case 4:return e.getSInt32();case 5:return e.getUInt32();case 6:return e.getInt64();case 7:return e.getUInt64();case 8:return e.getSInt64();case 9:return e.getBool();default:return e.skip(),null}return null}function _(e){const t={type:d(0)};for(;e.next();)switch(e.tag()){case 1:t.name=e.getString();break;case 2:t.type=d(e.getEnum());break;case 3:t.alias=e.getString();break;case 4:t.sqlType=(r=e.getEnum())>=h.length?null:h[r];break;case 5:try{t.domain=JSON.parse(e.getString())}catch(e){u.error(new o.Z("query:parsing-pbf","Failed to parse domain",{error:e})),t.domain=null}break;case 6:t.defaultValue=e.getString();break;default:e.skip()}var r;return t}function w(e){const t={};for(;e.next();)switch(e.tag()){case 1:t.name=e.getString();break;case 2:t.isSystemMaintained=e.getBool();break;default:e.skip()}return t}function T(e,t,r,s){const n=t.createFeature(r);let o=0;for(;e.next();)switch(e.tag()){case 1:{const t=s[o++].name;n.attributes[t]=e.processMessage(k);break}case 2:n.geometry=e.processMessageWithArgs(m,t,r);break;case 4:n.centroid=e.processMessageWithArgs(y,t,r);break;default:e.skip()}return n}function I(e){const t=[1,1,1,1];for(;e.next();)switch(e.tag()){case 1:t[0]=e.getDouble();break;case 2:t[1]=e.getDouble();break;case 4:t[2]=e.getDouble();break;case 3:t[3]=e.getDouble();break;default:e.skip()}return t}function G(e){const t=[0,0,0,0];for(;e.next();)switch(e.tag()){case 1:t[0]=e.getDouble();break;case 2:t[1]=e.getDouble();break;case 4:t[2]=e.getDouble();break;case 3:t[3]=e.getDouble();break;default:e.skip()}return t}function Z(e){const t={originPosition:g(0)};for(;e.next();)switch(e.tag()){case 1:t.originPosition=g(e.getEnum());break;case 2:t.scale=e.processMessage(I);break;case 3:t.translate=e.processMessage(G);break;default:e.skip()}return t}function U(e){const t={};for(;e.next();)switch(e.tag()){case 1:t.shapeAreaFieldName=e.getString();break;case 2:t.shapeLengthFieldName=e.getString();break;case 3:t.units=e.getString();break;default:e.skip()}return t}function M(e,t){const r=t.createSpatialReference();for(;e.next();)switch(e.tag()){case 1:r.wkid=e.getUInt32();break;case 5:r.wkt=e.getString();break;case 2:r.latestWkid=e.getUInt32();break;case 3:r.vcsWkid=e.getUInt32();break;case 4:r.latestVcsWkid=e.getUInt32();break;default:e.skip()}return r}function q(e,t){const r=t.createFeatureResult();r.geometryType=p(t,0);let s=!1;for(;e.next();)switch(e.tag()){case 1:r.objectIdFieldName=e.getString();break;case 3:r.globalIdFieldName=e.getString();break;case 4:r.geohashFieldName=e.getString();break;case 5:r.geometryProperties=e.processMessage(U);break;case 7:r.geometryType=p(t,e.getEnum());break;case 8:r.spatialReference=e.processMessageWithArgs(M,t);break;case 10:r.hasZ=e.getBool();break;case 11:r.hasM=e.getBool();break;case 12:r.transform=e.processMessage(Z);break;case 9:{const t=e.getBool();r.exceededTransferLimit=t;break}case 13:t.addField(r,e.processMessage(_));break;case 15:s||(t.prepareFeatures(r),s=!0),t.addFeature(r,e.processMessageWithArgs(T,t,r,r.fields));break;case 2:r.uniqueIdField=e.processMessage(w);break;case 6:default:e.skip()}return t.finishFeatureResult(r),r}function F(e,t){const r={};let n=null;for(;e.next();)switch(e.tag()){case 4:n=e.processMessageWithArgs(b);break;case 1:r.featureResult=e.processMessageWithArgs(q,t);break;case 2:case 3:default:e.skip()}return(0,s.pC)(n)&&r.featureResult&&t.addQueryGeometry(r,n),r}function P(e,t){try{const r=2,s=new a.Z(new Uint8Array(e),new DataView(e)),n={};for(;s.next();)switch(s.tag()){case r:n.queryResult=s.processMessageWithArgs(F,t);break;default:s.skip()}return n}catch(e){throw new o.Z("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:e})}}},95157:(e,t,r)=>{"use strict";r.d(t,{A:()=>c,J:()=>u});var s=r(27780),n=r(93533),o=r(44195),i=r(60151),a=r(73127);const c=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"];class u{constructor(e){this.options=e,this.geometryTypes=c}createFeatureResult(){return new i.Z}prepareFeatures(){}finishFeatureResult(e){if(!e||!e.features||!e.hasZ||!this.options.sourceSpatialReference||!e.spatialReference||(0,s.fS)(e.spatialReference,this.options.sourceSpatialReference)||e.spatialReference.vcsWkid)return;const t=(0,n._R)(this.options.sourceSpatialReference)/(0,n._R)(e.spatialReference);if(1!==t)for(const r of e.features){if(!r.geometry||!r.geometry.coords)continue;const e=r.geometry.coords;for(let r=2;r<e.length;r+=3)e[r]*=t}}addFeature(e,t){e.features.push(t)}createFeature(){return new o.Z}createSpatialReference(){return{wkid:0}}createGeometry(){return new a.Z}addField(e,t){e.fields.push(t)}addCoordinate(e,t){e.coords.push(t)}addCoordinatePoint(e,t){e.coords.push(t)}addLength(e,t){e.lengths.push(t)}addQueryGeometry(e,t){e.queryGeometry=t.queryGeometry,e.queryGeometryType=t.queryGeometryType}createPointGeometry(){return new a.Z}}},91814:(e,t,r)=>{"use strict";r.d(t,{C:()=>n});var s=r(42162);function n(e,t){const r=(0,s.K9)(e,t),n=r.queryResult.featureResult,o=r.queryResult.queryGeometry,i=r.queryResult.queryGeometryType;if(n&&n.features&&n.features.length&&n.objectIdFieldName){const e=n.objectIdFieldName;for(const t of n.features)t.attributes&&(t.objectId=t.attributes[e])}return n&&(n.queryGeometry=o,n.queryGeometryType=i),n}},72094:(e,t,r)=>{"use strict";r.d(t,{k:()=>i,P:()=>c});var s=r(59472),n=r(27780),o=r(93533);function i(e,t,r){if((0,s.Wi)(t)||(0,s.Wi)(r)||r.vcsWkid||(0,n.fS)(t,r))return null;const i=(0,o._R)(t)/(0,o._R)(r);if(1===i)return null;switch(e){case"point":case"esriGeometryPoint":return e=>{return r=i,void((t=e)&&null!=t.z&&(t.z*=r));var t,r};case"polyline":case"esriGeometryPolyline":return e=>function(e,t){if(e)for(const r of e.paths)for(const e of r)e.length>2&&(e[2]*=t)}(e,i);case"polygon":case"esriGeometryPolygon":return e=>function(e,t){if(e)for(const r of e.rings)for(const e of r)e.length>2&&(e[2]*=t)}(e,i);case"multipoint":case"esriGeometryMultipoint":return e=>function(e,t){if(e)for(const r of e.points)r.length>2&&(r[2]*=t)}(e,i);default:return null}}function a(e,t,r){if(null==e.hasM||e.hasZ)for(const e of t)for(const t of e)t.length>2&&(t[2]*=r)}function c(e,t,r){if(!e&&!t||!r)return;const s=(0,o._R)(r);u(e,r,s),u(t,r,s)}function u(e,t,r){if(e)for(const s of e)l(s.geometry,t,r)}function l(e,t,r){if(!e||!e.spatialReference||(0,n.fS)(e.spatialReference,t))return;const s=(0,o._R)(e.spatialReference)/r;if(1!==s)if("x"in e)null!=e.z&&(e.z*=s);else if("rings"in e)a(e,e.rings,s);else if("paths"in e)a(e,e.paths,s);else if("points"in e&&(null==e.hasM||e.hasZ))for(const t of e.points)t.length>2&&(t[2]*=s)}},29424:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>_});var s=r(39105),n=r(91814),o=r(94588),i=r(73032),a=r(32366),c=r(70834),u=r(31036),l=r(72094),h=r(1586);function f(e,t){return t}function d(e,t,r,s){switch(r){case 0:return m(e,t+s,0);case 1:return"lowerLeft"===e.originPosition?m(e,t+s,1):function({translate:e,scale:t},r,s){return e[s]-r*t[s]}(e,t+s,1)}}function g(e,t,r,s){switch(r){case 2:return m(e,t,2);default:return d(e,t,r,s)}}function p(e,t,r,s){switch(r){case 2:return m(e,t,3);default:return d(e,t,r,s)}}function y(e,t,r,s){switch(r){case 3:return m(e,t,3);default:return g(e,t,r,s)}}function m({translate:e,scale:t},r,s){return e[s]+r*t[s]}class b{constructor(e){this.options=e,this.geometryTypes=["point","multipoint","polyline","polygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=f,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this.AttributesConstructor=function(){}}createFeatureResult(){return new h.Pj}finishFeatureResult(e){if(this.options.applyTransform&&(e.transform=null),this.AttributesConstructor=function(){},this.coordinateBuffer=null,this.lengths.length=0,!e.hasZ)return;const t=(0,l.k)(e.geometryType,this.options.sourceSpatialReference,e.spatialReference);if(t)for(const r of e.features)t(r.geometry)}createSpatialReference(){return new i.Z}addField(e,t){e.fields.push(c.Z.fromJSON(t));const r=e.fields.map((e=>e.name));this.AttributesConstructor=function(){for(const e of r)this[e]=null}}addFeature(e,t){const r=this.options.maxStringAttributeLength?this.options.maxStringAttributeLength:0;if(r>0)for(const e in t.attributes){const s=t.attributes[e];"string"==typeof s&&s.length>r&&(t.attributes[e]="")}e.features.push(t)}addQueryGeometry(e,t){const{queryGeometry:r,queryGeometryType:s}=t,n=(0,u.$g)(r.clone(),r,!1,!1,this.transform),o=(0,u.di)(n,s,!1,!1);let i=null;switch(s){case"esriGeometryPoint":i="point";break;case"esriGeometryPolygon":i="polygon";break;case"esriGeometryPolyline":i="polyline";break;case"esriGeometryMultipoint":i="multipoint"}o.type=i,e.queryGeometryType=s,e.queryGeometry=o}prepareFeatures(e){switch(this.transform=e.transform,this.options.applyTransform&&e.transform&&(this.applyTransform=this.deriveApplyTransform(e)),this.vertexDimension=2,e.hasZ&&this.vertexDimension++,e.hasM&&this.vertexDimension++,e.geometryType){case"point":this.addCoordinate=(e,t,r)=>this.addCoordinatePoint(e,t,r),this.createGeometry=e=>this.createPointGeometry(e);break;case"polygon":this.addCoordinate=(e,t,r)=>this.addCoordinatePolygon(e,t,r),this.createGeometry=e=>this.createPolygonGeometry(e);break;case"polyline":this.addCoordinate=(e,t,r)=>this.addCoordinatePolyline(e,t,r),this.createGeometry=e=>this.createPolylineGeometry(e);break;case"multipoint":this.addCoordinate=(e,t,r)=>this.addCoordinateMultipoint(e,t,r),this.createGeometry=e=>this.createMultipointGeometry(e);break;default:(0,o.Bg)(e.geometryType)}}createFeature(){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,new h.Wh((0,a.D)(),null,new this.AttributesConstructor)}addLength(e,t,r){0===this.lengths.length&&(this.toAddInCurrentPath=t),this.lengths.push(t)}createPointGeometry(e){const t={type:"point",x:0,y:0,spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM};return t.hasZ&&(t.z=0),t.hasM&&(t.m=0),t}addCoordinatePoint(e,t,r){switch(t=this.applyTransform(this.transform,t,r,0),r){case 0:e.x=t;break;case 1:e.y=t;break;case 2:e.hasZ?e.z=t:e.m=t;break;case 3:e.m=t}}transformPathLikeValue(e,t){let r=0;return t<=1&&(r=this.previousCoordinate[t],this.previousCoordinate[t]+=e),this.applyTransform(this.transform,e,t,r)}addCoordinatePolyline(e,t,r){this.dehydratedAddPointsCoordinate(e.paths,t,r)}addCoordinatePolygon(e,t,r){this.dehydratedAddPointsCoordinate(e.rings,t,r)}addCoordinateMultipoint(e,t,r){0===r&&e.points.push([]);const s=this.transformPathLikeValue(t,r);e.points[e.points.length-1].push(s)}createPolygonGeometry(e){return{type:"polygon",rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}createPolylineGeometry(e){return{type:"polyline",paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}createMultipointGeometry(e){return{type:"multipoint",points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}dehydratedAddPointsCoordinate(e,t,r){if(null===this.coordinateBuffer){const e=this.lengths.reduce(((e,t)=>e+t),0);this.coordinateBuffer=new Float64Array(e*this.vertexDimension)}0===r&&0==this.toAddInCurrentPath--&&(e.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);const s=this.transformPathLikeValue(t,r),n=e[e.length-1];0===r&&n.push(new Float64Array(this.coordinateBuffer.buffer,this.coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT,this.vertexDimension)),this.coordinateBuffer[this.coordinateBufferPtr++]=s}deriveApplyTransform(e){const{hasZ:t,hasM:r}=e;return t&&r?y:t?g:r?p:d}}class k{_parseFeatureQuery(e){const t=(0,n.C)(e.buffer,new b(e.options)),r={...t,spatialReference:t.spatialReference.toJSON(),fields:t.fields?t.fields.map((e=>e.toJSON())):void 0};return(0,s.resolve)(r)}}const _=function(){return new k}}}]);
//# sourceMappingURL=2065.js.map