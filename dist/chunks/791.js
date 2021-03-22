(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[791],{91535:(e,t,a)=>{"use strict";a.d(t,{aX:()=>$,or:()=>E,hR:()=>v});var s=a(34926),n=a(59472),r=a(36544),i=a(32656),o=a(39105),l=a(27780),d=a(73032),u=a(41241),p=a(53817),c=a(93833),h=a(10923),f=a(56885),m=(a(36348),a(54721));async function y(e,t,a){const s="string"==typeof e?(0,h.mN)(e):e,n=t[0].spatialReference,r=(0,f.Ji)(t[0]),i={...a,query:{...s.query,f:"json",sr:n.wkid?n.wkid:JSON.stringify(n),geometries:JSON.stringify((o=t,{geometryType:(0,f.Ji)(o[0]),geometries:o.map((e=>e.toJSON()))}))}};var o;return function(e,t,a){const s=(0,f.q9)(t);return e.map((e=>{const t=s.fromJSON(e);return t.spatialReference=a,t}))}((await(0,m.default)(s.path+"/simplify",i)).data,r,n)}const g=r.Z.getLogger("esri.geometry.support.normalizeUtils"),b={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new c.Z({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:d.Z.WebMercator}),minus180Line:new c.Z({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:d.Z.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new c.Z({paths:[[[180,-180],[180,180]]],spatialReference:d.Z.WGS84}),minus180Line:new c.Z({paths:[[[-180,-180],[-180,180]]],spatialReference:d.Z.WGS84})}};function w(e){return"polygon"===e.type}function F(e){return"polyline"===e[0].type}function A(e){return w(e)?e.rings:e.paths}function Z(e,t){return Math.ceil((e-t)/(2*t))}function I(e,t){const a=A(e);for(const e of a)for(const a of e)a[0]+=t;return e}function v(e,t){if(!(e instanceof c.Z||e instanceof p.Z)){const e="straightLineDensify: the input geometry is neither polyline nor polygon";throw g.error(e),new i.Z(e)}const a=A(e),s=[];for(const e of a){const a=[];s.push(a),a.push([e[0][0],e[0][1]]);for(let s=0;s<e.length-1;s++){const n=e[s][0],r=e[s][1],i=e[s+1][0],o=e[s+1][1],l=Math.sqrt((i-n)*(i-n)+(o-r)*(o-r)),d=(o-r)/l,u=(i-n)/l,p=l/t;if(p>1){for(let e=1;e<=p-1;e++){const s=e*t,i=u*s+n,o=d*s+r;a.push([i,o])}const e=(l+Math.floor(p-1)*t)/2,s=u*e+n,i=d*e+r;a.push([s,i])}a.push([i,o])}}return w(e)?new p.Z({rings:s,spatialReference:e.spatialReference}):new c.Z({paths:s,spatialReference:e.spatialReference})}function R(e,t,a){if(t){const t=v(e,1e6);e=(0,u.Sx)(t,!0)}return a&&(e=I(e,a)),e}function x(e,t,a){if(Array.isArray(e)){const s=e[0];if(s>t){const a=Z(s,t);e[0]=s+a*(-2*t)}else if(s<a){const t=Z(s,a);e[0]=s+t*(-2*a)}}else{const s=e.x;if(s>t){const a=Z(s,t);e=e.clone().offset(a*(-2*t),0)}else if(s<a){const t=Z(s,a);e=e.clone().offset(t*(-2*a),0)}}return e}async function $(e,t,a){if(!Array.isArray(e))return $([e],t);const r=t?t.url:s.Z.geometryServiceUrl;let i,d,g,w,v,E,S,L,U=0;const J=[],O=[];for(const t of e)if((0,n.Wi)(t))O.push(t);else if(i||(i=t.spatialReference,d=(0,l.C5)(i),g=i.isWebMercator,E=g?102100:4326,w=b[E].maxX,v=b[E].minX,S=b[E].plus180Line,L=b[E].minus180Line),d)if("mesh"===t.type)O.push(t);else if("point"===t.type)O.push(x(t.clone(),w,v));else if("multipoint"===t.type){const e=t.clone();e.points=e.points.map((e=>x(e,w,v))),O.push(e)}else if("extent"===t.type){const e=t.clone()._normalize(!1,!1,d);O.push(e.rings?new p.Z(e):e)}else if(t.extent){const e=t.extent,a=Z(e.xmin,v)*(2*w);let s=0===a?t.clone():I(t.clone(),a);e.offset(a,0),e.intersects(S)&&e.xmax!==w?(U=e.xmax>U?e.xmax:U,s=R(s,g),J.push(s),O.push("cut")):e.intersects(L)&&e.xmin!==v?(U=e.xmax*(2*w)>U?e.xmax*(2*w):U,s=R(s,g,360),J.push(s),O.push("cut")):O.push(s)}else O.push(t.clone());else O.push(t);let k=Z(U,w),N=-90;const C=k,W=new c.Z;for(;k>0;){const e=360*k-180;W.addPath([[e,N],[e,-1*N]]),N*=-1,k--}if(J.length>0&&C>0){const t=function(e,t){let a=-1;for(let s=0;s<t.cutIndexes.length;s++){const n=t.cutIndexes[s],r=t.geometries[s],i=A(r);for(let e=0;e<i.length;e++){const t=i[e];t.some((a=>{if(a[0]<180)return!0;{let a=0;for(let e=0;e<t.length;e++){const s=t[e][0];a=s>a?s:a}a=Number(a.toFixed(9));const s=-360*Z(a,180);for(let a=0;a<t.length;a++){const t=r.getPoint(e,a);r.setPoint(e,a,t.clone().offset(s,0))}return!0}}))}if(n===a){if("polygon"===e[0].type)for(const t of A(r))e[n]=e[n].addRing(t);else if(F(e))for(const t of A(r))e[n]=e[n].addPath(t)}else a=n,e[n]=r}return e}(J,await async function(e,t,a,s){const n="string"==typeof e?(0,h.mN)(e):e,r=t[0].spatialReference,i={...s,query:{...n.query,f:"json",sr:JSON.stringify(r),target:JSON.stringify({geometryType:(0,f.Ji)(t[0]),geometries:t}),cutter:JSON.stringify(a)}},o=await(0,m.default)(n.path+"/cut",i),{cutIndexes:l,geometries:d=[]}=o.data;return{cutIndexes:l,geometries:d.map((e=>{const t=(0,f.im)(e);return t.spatialReference=r,t}))}}(r,J,W,a)),s=[],i=[];for(let a=0;a<O.length;a++){const r=O[a];if("cut"!==r)i.push(r);else{const r=t.shift(),o=e[a];(0,n.pC)(o)&&"polygon"===o.type&&o.rings&&o.rings.length>1&&r.rings.length>=o.rings.length?(s.push(r),i.push("simplify")):i.push(g?(0,u.$)(r):r)}}if(!s.length)return i;const o=await y(r,s,a),l=[];for(let e=0;e<i.length;e++){const t=i[e];"simplify"!==t?l.push(t):l.push(g?(0,u.$)(o.shift()):o.shift())}return l}const q=[];for(let e=0;e<O.length;e++){const t=O[e];if("cut"!==t)q.push(t);else{const e=J.shift();q.push(!0===g?(0,u.$)(e):e)}}return(0,o.resolve)(q)}function E(e,t){const a=(0,l.C5)(t);if(a){const[t,s]=a.valid,n=s-t;if(e<t)for(;e<t;)e+=n;if(e>s)for(;e>s;)e-=n}return e}},20791:(e,t,a)=>{"use strict";a.r(t),a.d(t,{applyEdits:()=>c,isEditableLayer:()=>p});var s=a(82550),n=a(59472),r=a(32656),i=a(10923),o=a(39105),l=a(83477),d=a(15988),u=a(91535);function p(e){var t,a;return!0===(null==e||null==(t=e.capabilities)||null==(a=t.operations)?void 0:a.supportsEditing)&&e&&(!("editingEnabled"in e)||e.editingEnabled)}async function c(e,t,a,n){let i,d;const p={edits:a,result:(0,o.create)(((e,t)=>{i=e,d=t}))};e.emit("apply-edits",p);try{const{results:d,edits:p}=await async function(e,t,a,s){if(await e.load(),!function(e){return e&&null!=e.applyEdits}(t))return(0,o.reject)(new r.Z(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e}));if(!e.editingEnabled)throw new r.Z(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const n=await function(e,t,a){const s=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),n=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments);if(!t||!s&&!n)throw new r.Z(`${e.type}-layer:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!e.capabilities.data.isVersioned&&a&&a.gdbVersion)throw new r.Z(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!e.capabilities.editing.supportsRollbackOnFailure&&a&&a.rollbackOnFailureEnabled)throw new r.Z(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");if(!e.capabilities.editing.supportsGlobalId&&a&&a.globalIdUsed)throw new r.Z(`${e.type}-layer:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!e.capabilities.editing.supportsGlobalId&&n)throw new r.Z(`${e.type}-layer:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if((!a||!a.globalIdUsed)&&n)throw new r.Z(`${e.type}-layer:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");const i={...t};if(i.addFeatures=t&&l.Z.isCollection(t.addFeatures)?t.addFeatures.toArray():i.addFeatures||[],i.updateFeatures=t&&l.Z.isCollection(t.updateFeatures)?t.updateFeatures.toArray():i.updateFeatures||[],i.deleteFeatures=t&&l.Z.isCollection(t.deleteFeatures)?t.deleteFeatures.toArray():i.deleteFeatures||[],i.addFeatures.length&&!e.capabilities.operations.supportsAdd)throw new r.Z(`${e.type}-layer:unsupported-operation`,"Layer does not support adding features.");if(i.updateFeatures.length&&!e.capabilities.operations.supportsUpdate)throw new r.Z(`${e.type}-layer:unsupported-operation`,"Layer does not support updating features.");if(i.deleteFeatures.length&&!e.capabilities.operations.supportsDelete)throw new r.Z(`${e.type}-layer:unsupported-operation`,"Layer does not support deleting features.");i.addAttachments=i.addAttachments||[],i.updateAttachments=i.updateAttachments||[],i.deleteAttachments=i.deleteAttachments||[],i.addFeatures=i.addFeatures.map(m),i.updateFeatures=i.updateFeatures.map(m);const o=a&&a.globalIdUsed;return i.addFeatures.forEach((t=>h(t,e,o))),i.updateFeatures.forEach((t=>h(t,e,o))),i.deleteFeatures.forEach((t=>h(t,e,o))),i.addAttachments.forEach((t=>f(t,e))),i.updateAttachments.forEach((t=>f(t,e))),async function(e){const t=e.addFeatures,a=e.updateFeatures,s=t.concat(a).map((e=>e.geometry)),n=await(0,u.aX)(s),r=t.length,i=a.length;return n.slice(0,r).forEach(((t,a)=>{e.addFeatures[a].geometry=t})),n.slice(r,r+i).forEach(((t,a)=>{e.updateFeatures[a].geometry=t})),e}(i)}(e,a,s);return n.addFeatures.length||n.updateFeatures.length||n.deleteFeatures.length||n.addAttachments.length||n.updateAttachments.length||n.deleteAttachments.length?{edits:n,results:await t.applyEdits(n,s)}:{edits:n,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}(e,t,a,n),c=e=>e.filter((e=>!e.error)).map(s.d9),y={edits:p,addedFeatures:c(d.addFeatureResults),updatedFeatures:c(d.updateFeatureResults),deletedFeatures:c(d.deleteFeatureResults),addedAttachments:c(d.addAttachmentResults),updatedAttachments:c(d.updateAttachmentResults),deletedAttachments:c(d.deleteAttachmentResults)};return(y.addedFeatures.length||y.updatedFeatures.length||y.deletedFeatures.length||y.addedAttachments.length||y.updatedAttachments.length||y.deletedAttachments.length)&&e.emit("edits",y),i(y),d}catch(e){throw d(e),e}}function h(e,t,a){if(a){if("attributes"in e&&!e.attributes[t.globalIdField])throw new r.Z(`${t.type}-layer:invalid-parameter`,"Feature should have 'globalId' when 'globalIdUsed' is true");if(!("attributes"in e)&&!e.globalId)throw new r.Z(`${t.type}-layer:invalid-parameter`,"'globalId' of the feature should be passed when 'globalIdUsed' is true")}if("geometry"in e&&(0,n.pC)(e.geometry)){if(e.geometry.hasZ&&!1===t.capabilities.data.supportsZ)throw new r.Z(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===t.capabilities.data.supportsM)throw new r.Z(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function f(e,t){const{feature:a,attachment:s}=e;if(!a||"attributes"in a&&!a.attributes[t.globalIdField])throw new r.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in a)&&!a.globalId)throw new r.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!s.globalId)throw new r.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!s.data&&!s.uploadId)throw new r.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(s.data instanceof File&&s.data.name||s.name))throw new r.Z(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities.editing.supportsUploadWithItemId&&s.uploadId)throw new r.Z(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof s.data){const e=(0,i.sJ)(s.data);if(e&&!e.isBase64)throw new r.Z(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}function m(e){const t=new d.Z;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}}}]);
//# sourceMappingURL=791.js.map