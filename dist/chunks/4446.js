(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[4446],{3766:(e,t,n)=>{"use strict";n.d(t,{Ze:()=>y,Kd:()=>h,qe:()=>g});var o,r,s,i=n(7584);let l,u;const c=null!=(o=null==(r=i.Z.esriConfig)?void 0:r.locale)?o:null==(s=i.Z.dojoConfig)?void 0:s.locale;function a(){var e,t;return null!=(e=null!=c?c:null==(t=i.Z.navigator)?void 0:t.language)?e:"en"}function h(){return void 0===u&&(u=a()),u}const d=[];function g(e){return d.push(e),{remove(){d.splice(d.indexOf(e),1)}}}const f=[];function y(e){return f.push(e),{remove(){d.splice(f.indexOf(e),1)}}}function p(){var e;const t=null!=(e=l)?e:a();u!==t&&(u=t,[...f].forEach((e=>{e.call(null,t)})),[...d].forEach((e=>{e.call(null,t)})))}null==i.Z.addEventListener||i.Z.addEventListener("languagechange",p)},44195:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});class o{constructor(e=null,t={},n,o){this.displayId=0,this.geohashIndexed=!1,this.geohashX=0,this.geohashY=0,this.geometry=e,t&&(this.attributes=t),n&&(this.centroid=n),null!=o&&(this.objectId=o)}get hasGeometry(){return!(!this.geometry||!this.geometry.coords||!this.geometry.coords.length)}weakClone(){const e=new o(this.geometry,this.attributes,this.centroid,this.objectId);return e.displayId=this.displayId,e.geohashIndexed=this.geohashIndexed,e.geohashX=this.geohashX,e.geohashY=this.geohashY,e}}const r=o},60151:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});class o{constructor(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}weakClone(){const e=new o;return e.objectIdFieldName=this.objectIdFieldName,e.globalIdFieldName=this.globalIdFieldName,e.geohashFieldName=this.geohashFieldName,e.geometryProperties=this.geometryProperties,e.geometryType=this.geometryType,e.spatialReference=this.spatialReference,e.hasZ=this.hasZ,e.hasM=this.hasM,e.features=this.features,e.fields=this.fields,e.transform=this.transform,e.exceededTransferLimit=this.exceededTransferLimit,e.uniqueIdField=this.uniqueIdField,e.queryGeometry=this.queryGeometry,e.queryGeometryType=this.queryGeometryType,e}}const r=o},73127:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});class o{constructor(e=[],t=[],n=!1){this.lengths=null!=e?e:[],this.coords=null!=t?t:[],this.hasIndeterminateRingOrder=n}get isPoint(){return 0===this.lengths.length}forEachVertex(e){let t=0;this.lengths.length||e(this.coords[0],this.coords[1]);for(let n=0;n<this.lengths.length;n++){const o=this.lengths[n];for(let n=0;n<o;n++)e(this.coords[2*(n+t)],this.coords[2*(n+t)+1]);t+=o}}clone(){return new o(this.lengths.slice(),this.coords.slice(),this.hasIndeterminateRingOrder)}}const r=o},31036:(e,t,n)=>{"use strict";n.d(t,{XA:()=>A,h_:()=>Q,Yn:()=>D,GH:()=>J,E7:()=>X,ks:()=>z,Uy:()=>L,u0:()=>E,EI:()=>$,cn:()=>K,di:()=>B,Iv:()=>q,fQ:()=>T,eG:()=>R,J6:()=>O,oB:()=>ce,zj:()=>te,$:()=>re,lz:()=>ue,RZ:()=>W,Nh:()=>ee,Jd:()=>m,IN:()=>b,hY:()=>ie,$g:()=>se});var o=n(36544),r=n(32656),s=n(56885),i=n(44195),l=n(60151),u=n(73127);function c(e,t){return e?t?4:3:t?3:2}const a=o.Z.getLogger("esri.tasks.support.optimizedFeatureSet"),h={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0},d=(e,t,n,o,r,s)=>{e[n]=r,e[n+1]=s},g=(e,t,n,o,r,s)=>{e[n]=r,e[n+1]=s,e[n+2]=t[o+2]},f=(e,t,n,o,r,s)=>{e[n]=r,e[n+1]=s,e[n+2]=t[o+3]},y=(e,t,n,o,r,s)=>{e[n]=r,e[n+1]=s,e[n+2]=t[o+2],e[n+3]=t[o+3]};function p(e,t,n,o){if(e){if(n)return t&&o?y:g;if(t&&o)return f}else if(t&&o)return g;return d}function m({scale:e,translate:t},n){return Math.round((n-t[0])/e[0])}function b({scale:e,translate:t},n){return Math.round((t[1]-n)/e[1])}function I({scale:e,translate:t},n){return n*e[0]+t[0]}function w({scale:e,translate:t},n){return t[1]-n*e[1]}function T(e,t,n){return e?t?n?k(e):v(e):n?N(e):Z(e):null}function Z(e){const t=e.coords;return{x:t[0],y:t[1]}}function F(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e}function v(e){const t=e.coords;return{x:t[0],y:t[1],z:t[2]}}function G(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e}function N(e){const t=e.coords;return{x:t[0],y:t[1],m:t[2]}}function M(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.m,e}function k(e){const t=e.coords;return{x:t[0],y:t[1],z:t[2],m:t[3]}}function x(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e.coords[3]=t.m,e}function j(e,t){return e&&t?x:e?G:t?M:F}function P(e,t,n,o,r){const s=j(n,o);for(const n of t){const{geometry:t,attributes:o}=n;let l;t&&(l=s(new u.Z,t)),e.push(new i.Z(l,o,null,o[r]))}return e}function q(e,t,n){if(!e)return null;const o=c(t,n),r=[];for(let t=0;t<e.coords.length;t+=o){const n=[];for(let r=0;r<o;r++)n.push(e.coords[t+r]);r.push(n)}return t?n?{points:r,hasZ:t,hasM:n}:{points:r,hasZ:t}:n?{points:r,hasM:n}:{points:r}}function _(e,t,n,o,r){const s=c(n,o);for(const n of t){const t=n.geometry,o=n.attributes;let l;t&&(l=C(new u.Z,t,s)),e.push(new i.Z(l,o,null,o[r]))}return e}function C(e,t,n=c(t.hasZ,t.hasM)){e.lengths[0]=t.points.length;const o=e.coords;let r=0;for(const e of t.points)for(let t=0;t<n;t++)o[r++]=e[t];return e}function O(e,t,n){if(!e)return null;const o=c(t,n),{coords:r,lengths:s}=e,i=[];let l=0;for(const e of s){const t=[];for(let n=0;n<e;n++){const e=[];for(let t=0;t<o;t++)e.push(r[l++]);t.push(e)}i.push(t)}return t?n?{paths:i,hasZ:t,hasM:n}:{paths:i,hasZ:t}:n?{paths:i,hasM:n}:{paths:i}}function S(e,t,n,o,r){const s=c(n,o);for(const n of t){const t=n.geometry,o=n.attributes;let l;t&&(l=E(new u.Z,t,s)),e.push(new i.Z(l,o,null,o[r]))}return e}function E(e,t,n=c(t.hasZ,t.hasM)){const{lengths:o,coords:r}=e;let s=0;for(const e of t.paths){for(const t of e)for(let e=0;e<n;e++)r[s++]=t[e];o.push(e.length)}return e}function R(e,t,n){if(!e)return null;const o=c(t,n),{coords:r,lengths:s}=e,i=[];let l=0;for(const e of s){const t=[];for(let n=0;n<e;n++){const e=[];for(let t=0;t<o;t++)e.push(r[l++]);t.push(e)}i.push(t)}return t?n?{rings:i,hasZ:t,hasM:n}:{rings:i,hasZ:t}:n?{rings:i,hasM:n}:{rings:i}}function V(e,t,n,o,r){for(const s of t){const t=s.geometry,l=s.centroid,c=s.attributes;let a;t&&(a=L(new u.Z,t,n,o)),l?e.push(new i.Z(a,c,F(new u.Z,l),c[r])):e.push(new i.Z(a,c,null,c[r]))}return e}function L(e,t,n=t.hasZ,o=t.hasM){return z(e,t.rings,n,o),e}function z(e,t,n,o){const r=c(n,o),{lengths:s,coords:i}=e;let l=0;s.length=i.length=0;for(const e of t){for(const t of e)for(let e=0;e<r;e++)i[l++]=t[e];s.push(e.length)}return e}const Y=[],U=[];function A(e,t,n,o,r){Y[0]=e;const[s]=D(U,Y,t,n,o,r);return Y.length=U.length=0,s}function D(e,t,n,o,s,l){if(e.length=0,!n){for(const n of t){const t=n.attributes[l];e.push(new i.Z(null,n.attributes,null,t))}return e}switch(n){case"esriGeometryPoint":return P(e,t,o,s,l);case"esriGeometryMultipoint":return _(e,t,o,s,l);case"esriGeometryPolyline":return S(e,t,o,s,l);case"esriGeometryPolygon":return V(e,t,o,s,l);default:a.error("convertToFeatureSet:unknown-geometry",new r.Z(`Unable to parse unknown geometry type '${n}'`)),e.length=0}return e}function X(e,t,n,o,s,i){const l=e.length;switch(n){case"esriGeometryPoint":P(e,t,o,s,i);break;case"esriGeometryMultipoint":_(e,t,o,s,i);break;case"esriGeometryPolyline":S(e,t,o,s,i);break;case"esriGeometryPolygon":V(e,t,o,s,i);break;default:a.error("convertToFeatureSet:unknown-geometry",new r.Z(`Unable to parse unknown geometry type '${n}'`))}for(let o=0;o<t.length;o++)e[o+l].geometryType=n,e[o+l].insertAfter=t[o].insertAfter,e[o+l].groupId=t[o].groupId;return e}function $(e,t,n,o){U[0]=e,H(Y,U,t,n,o);const r=Y[0];return Y.length=U.length=0,r}function J(e,t,n){if(!e)return null;const o=new u.Z;return"hasZ"in e&&null==t&&(t=e.hasZ),"hasM"in e&&null==n&&(n=e.hasM),(0,s.wp)(e)?j(null!=t?t:null!=e.z,null!=n?n:null!=e.m)(o,e):(0,s.oU)(e)?L(o,e,t,n):(0,s.l9)(e)?E(o,e,c(t,n)):(0,s.aW)(e)?C(o,e,c(t,n)):void a.error("convertFromGeometry:unknown-geometry",new r.Z(`Unable to parse unknown geometry type '${e}'`))}function B(e,t,n,o){const s=e&&("coords"in e?e:e.geometry);if(!s)return null;switch(t){case"esriGeometryPoint":{let e=Z;return n&&o?e=k:n?e=v:o&&(e=N),e(s)}case"esriGeometryMultipoint":return q(s,n,o);case"esriGeometryPolyline":return O(s,n,o);case"esriGeometryPolygon":return R(s,n,o);default:return void a.error("convertToGeometry:unknown-geometry",new r.Z(`Unable to parse unknown geometry type '${t}'`))}}function H(e,t,n,o,s){switch(e.length=0,n){case"esriGeometryPoint":return function(e,t,n,o){let r=Z;n&&o?r=k:n?r=v:o&&(r=N);for(const n of t){const{geometry:t,attributes:o}=n,s=t?r(t):null;e.push({attributes:o,geometry:s})}return e}(e,t,o,s);case"esriGeometryMultipoint":return function(e,t,n,o){for(const r of t){const{geometry:t,attributes:s}=r;let i;t&&(i=q(t,n,o)),e.push({attributes:s,geometry:i})}return e}(e,t,o,s);case"esriGeometryPolyline":return function(e,t,n,o){for(const r of t){const{geometry:t,attributes:s}=r;let i;t&&(i=O(t,n,o)),e.push({attributes:s,geometry:i})}return e}(e,t,o,s);case"esriGeometryPolygon":return function(e,t,n,o){for(const r of t){const{geometry:t,attributes:s,centroid:i}=r;let l;if(t&&(l=R(t,n,o)),i){const t=Z(i);e.push({attributes:s,centroid:t,geometry:l})}else e.push({attributes:s,geometry:l})}return e}(e,t,o,s);default:a.error("convertToFeatureSet:unknown-geometry",new r.Z(`Unable to parse unknown geometry type '${n}'`))}return e}function K(e){const{objectIdFieldName:t,spatialReference:n,transform:o,fields:r,hasM:s,hasZ:i,features:l,geometryType:u,exceededTransferLimit:c,uniqueIdField:a,queryGeometry:h,queryGeometryType:d}=e,g={features:H([],l,u,i,s),fields:r,geometryType:u,objectIdFieldName:t,spatialReference:n,uniqueIdField:a,queryGeometry:B(h,d,!1,!1)};return o&&(g.transform=o),c&&(g.exceededTransferLimit=c),s&&(g.hasM=s),i&&(g.hasZ=i),g}function Q(e,t){const n=new l.Z,{hasM:o,hasZ:s,features:i,objectIdFieldName:u,spatialReference:c,geometryType:h,exceededTransferLimit:d,transform:g,fields:f}=e;return f&&(n.fields=f),n.geometryType=h,n.objectIdFieldName=u||t,n.spatialReference=c,n.objectIdFieldName?(i&&D(n.features,i,h,s,o,n.objectIdFieldName),d&&(n.exceededTransferLimit=d),o&&(n.hasM=o),s&&(n.hasZ=s),g&&(n.transform=g),n):(a.error(new r.Z("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),n)}function W(e,t){const{geometryType:n,features:o,hasM:r,hasZ:s}=t;if(!e)return t;for(let t=0;t<o.length;t++){const i=o[t],l=i.weakClone();l.geometry=new u.Z,ee(l.geometry,i.geometry,r,s,n,e),i.centroid&&(l.centroid=new u.Z,ee(l.centroid,i.centroid,r,s,"esriGeometryPoint",e)),o[t]=l}return t.transform=e,t}function ee(e,t,n,o,r,s,i=n,l=o){if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),!t||!t.coords.length)return null;const u=h[r],{coords:a,lengths:d}=t,g=c(n,o),f=c(n&&i,o&&l),y=p(n,o,i,l);if(!d.length)return y(e.coords,a,0,0,m(s,a[0]),b(s,a[1])),e.lengths.length&&(e.lengths.length=0),e.coords.length=g,e;let I,w,T,Z,F=0,v=0,G=v;for(const t of d){if(t<u)continue;let n=0;v=G,T=I=m(s,a[F]),Z=w=b(s,a[F+1]),y(e.coords,a,v,F,T,Z),n++,F+=g,v+=f;for(let o=1;o<t;o++,F+=g)T=m(s,a[F]),Z=b(s,a[F+1]),T===I&&Z===w||(y(e.coords,a,v,F,T-I,Z-w),v+=f,n++,I=T,w=Z);n>=u&&(e.lengths.push(n),G=v)}return e.coords.length=G,e.coords.length?e:null}function te(e,t,n,o,r,s,i=n,l=o){if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),!t||!t.coords.length)return null;const u=h[r],{coords:a,lengths:d}=t,g=c(n,o),f=c(n&&i,o&&l),y=p(n,o,i,l);if(!d.length)return y(e.coords,a,0,0,a[0],a[1]),e.lengths.length&&(e.lengths.length=0),e.coords.length=g,e;let m=0;const b=s*s;for(const t of d){if(t<u){m+=t*g;continue}const n=e.coords.length/f,o=m,r=m+(t-1)*g;y(e.coords,a,e.coords.length,o,a[o],a[o+1]),oe(e.coords,a,g,b,y,o,r),y(e.coords,a,e.coords.length,r,a[r],a[r+1]);const s=e.coords.length/f-n;s>=u?e.lengths.push(s):e.coords.length=n*f,m+=t*g}return e.coords.length?e:null}function ne(e,t,n,o){const r=e[t],s=e[t+1],i=e[n],l=e[n+1],u=e[o],c=e[o+1];let a=i,h=l,d=u-a,g=c-h;if(0!==d||0!==g){const e=((r-a)*d+(s-h)*g)/(d*d+g*g);e>1?(a=u,h=c):e>0&&(a+=d*e,h+=g*e)}return d=r-a,g=s-h,d*d+g*g}function oe(e,t,n,o,r,s,i){let l,u=o,c=0;for(let e=s+n;e<i;e+=n)l=ne(t,e,s,i),l>u&&(c=e,u=l);u>o&&(c-s>n&&oe(e,t,n,o,r,s,c),r(e,t,e.length,c,t[c],t[c+1]),i-c>n&&oe(e,t,n,o,r,c,i))}function re(e,t,n,o){if(!t||!t.coords||!t.coords.length)return null;const r=c(n,o);let s=Number.POSITIVE_INFINITY,i=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY,u=Number.NEGATIVE_INFINITY;if(t&&t.coords){const e=t.coords;for(let t=0;t<e.length;t+=r){const n=e[t],o=e[t+1];s=Math.min(s,n),l=Math.max(l,n),i=Math.min(i,o),u=Math.max(u,o)}}return e[0]=s,e[1]=i,e[2]=l,e[3]=u,e}function se(e,t,n,o,r){const{coords:s,lengths:i}=t,l=n?o?y:g:o?g:d,u=c(n,o);if(!s.length)return e!==t&&(e.lengths.length=0,e.coords.length=0),e;if(!i.length)return l(e.coords,s,0,0,I(r,s[0]),w(r,s[1])),e!==t&&(e.lengths.length=0,e.coords.length=u),e;const[a,h]=r.scale;let f=0;for(let t=0;t<i.length;t++){const n=i[t];e.lengths[t]=n;let o=I(r,s[f]),c=w(r,s[f+1]);l(e.coords,s,f,f,o,c),f+=u;for(let t=1;t<n;t++,f+=u)o+=s[f]*a,c-=s[f+1]*h,l(e.coords,s,f,f,o,c)}return e!==t&&(e.lengths.length=i.length,e.coords.length=s.length),e}function ie(e,t,n,o,r,s){const i=c(n,o),l=p(n,o,r,s),u=t.coords;e.coords.length=0,e.lengths.length=0,e.lengths.push(...t.lengths);for(let t=0;t<u.length;t+=i)l(e.coords,u,e.coords.length,t,u[t],u[t+1]);return e}function le(e,t,n,o){let r=0,s=e[o*t],i=e[o*(t+1)];for(let l=1;l<n;l++){const n=s+e[o*(t+l)],u=i+e[o*(t+l)+1],c=(n-s)*(u+i);s=n,i=u,r+=c}return.5*r}function ue(e,t){const{coords:n,lengths:o}=e;let r=0,s=0;for(let e=0;e<o.length;e++)s+=le(n,r,o[e],t),r+=e;return Math.abs(s)}function ce(e,t){const n=e.clone(),o=e.coords,r=e.lengths;let s=0;for(let e=0;e<r.length;e++){const i=r[e];let l=o[t*s],u=o[t*s+1];for(let e=1;e<i;e++){const r=l+o[t*(s+e)],i=u+o[t*(s+e)+1];n.coords[t*(s+e)]=r,n.coords[t*(s+e)+1]=i,l=r,u=i}s+=i}return n}},70834:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var o,r=n(56140),s=(n(95830),n(36544),n(68055)),i=n(79881),l=n(56274),u=n(9870),c=n(30590),a=n(87566),h=(n(10923),n(57002),n(86035),n(58385)),d=n(6585),g=n(88210);const f=new l.Xn({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});let y=o=class extends h.wq{constructor(e){super(e),this.alias=null,this.defaultValue=void 0,this.description=null,this.domain=null,this.editable=!0,this.length=-1,this.name=null,this.nullable=!0,this.type=null,this.valueType=null}readDescription(e,{description:t}){let n;try{n=JSON.parse(t)}catch(e){}return n?n.value:null}readValueType(e,{description:t}){let n;try{n=JSON.parse(t)}catch(e){}return n?f.fromJSON(n.fieldValueType):null}clone(){return new o({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType})}};(0,r._)([(0,i.Cb)({type:String,json:{write:!0}})],y.prototype,"alias",void 0),(0,r._)([(0,i.Cb)({type:[String,Number],json:{write:{allowNull:!0}}})],y.prototype,"defaultValue",void 0),(0,r._)([(0,i.Cb)()],y.prototype,"description",void 0),(0,r._)([(0,c.r)("description")],y.prototype,"readDescription",null),(0,r._)([(0,i.Cb)({types:d.V5,json:{read:{reader:d.im},write:!0}})],y.prototype,"domain",void 0),(0,r._)([(0,i.Cb)({type:Boolean,json:{write:!0}})],y.prototype,"editable",void 0),(0,r._)([(0,i.Cb)({type:s.z8,json:{write:!0}})],y.prototype,"length",void 0),(0,r._)([(0,i.Cb)({type:String,json:{write:!0}})],y.prototype,"name",void 0),(0,r._)([(0,i.Cb)({type:Boolean,json:{write:!0}})],y.prototype,"nullable",void 0),(0,r._)([(0,u.J)(g.v)],y.prototype,"type",void 0),(0,r._)([(0,i.Cb)()],y.prototype,"valueType",void 0),(0,r._)([(0,c.r)("valueType",["description"])],y.prototype,"readValueType",null),y=o=(0,r._)([(0,a.j)("esri.layers.support.Field")],y);const p=y},88210:(e,t,n)=>{"use strict";n.d(t,{v:()=>o});const o=new(n(56274).Xn)({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml"})}}]);
//# sourceMappingURL=4446.js.map