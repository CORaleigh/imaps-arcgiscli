(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[4926],{69308:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>_});var s=i(32656),n=i(39105),r=i(27780),a=i(56885),l=i(4665),d=i(88210),u=i(31036),o=i(61121),c=i(71951),p=i(56471),y=i(77142),f=i(21895),h=i(73456);const m=r.Zn,g={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:r.Zn},b={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function I(e){return(0,a.wp)(e)?null!=e.z:!!e.hasZ}function F(e){return(0,a.wp)(e)?null!=e.m:!!e.hasM}const _=class{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._requiredFields=this._fieldsIndex=this._createDefaultAttributes=null}async load(e){const t=[],{features:i}=e,n=this._inferLayerProperties(i,e.fields),r=e.fields||[],a=null!=e.hasM?e.hasM:n.hasM,u=null!=e.hasZ?e.hasZ:n.hasZ,h=!e.spatialReference&&!n.spatialReference,I=h?m:e.spatialReference||n.spatialReference,F=h?g:null,_=e.geometryType||n.geometryType,T=!_;let E=e.objectIdField||n.objectIdField,q=e.timeInfo;if(!T&&(h&&t.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!_))throw new s.Z("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!E)throw new s.Z("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(n.objectIdField&&E!==n.objectIdField&&(t.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${E}" doesn't match the field name "${n.objectIdField}", found in the provided fields`}),E=n.objectIdField),E&&!n.objectIdField){let e=null;r.some((t=>t.name===E&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):r.unshift({alias:E,name:E,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const e of r){if(null==e.name&&(e.name=e.alias),null==e.alias&&(e.alias=e.name),!e.name)throw new s.Z("feature-layer:invalid-field-name","field name is missing",{field:e});if(e.name===E&&(e.type="esriFieldTypeOID"),-1===d.v.jsonValues.indexOf(e.type))throw new s.Z("feature-layer:invalid-field-type",`invalid type for field "${e.name}"`,{field:e})}const j={};this._requiredFields=[];for(const e of r)if("esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type){e.editable=null==e.editable||!!e.editable,e.nullable=null==e.nullable||!!e.nullable;const t=(0,l.os)(e);e.nullable||void 0!==t?j[e.name]=t:this._requiredFields.push(e)}if(this._fieldsIndex=new o.Z(r),this._createDefaultAttributes=(0,p.Dm)(j,E),q){if(q.startTimeField){const e=this._fieldsIndex.get(q.startTimeField);e?(q.startTimeField=e.name,e.type="esriFieldTypeDate"):q.startTimeField=null}if(q.endTimeField){const e=this._fieldsIndex.get(q.endTimeField);e?(q.endTimeField=e.name,e.type="esriFieldTypeDate"):q.endTimeField=null}if(q.trackIdField){const e=this._fieldsIndex.get(q.trackIdField);e?q.trackIdField=e.name:(q.trackIdField=null,t.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:q}}))}q.startTimeField||q.endTimeField||(t.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:q}}),q=null)}const x={warnings:t,featureErrors:[],layerDefinition:{...b,drawingInfo:(0,p.bU)(_),templates:(0,p.Hq)(j),extent:F,geometryType:_,objectIdField:E,fields:r,hasZ:!!u,hasM:!!a,timeInfo:q},assignedObjectIds:{}};if(this._queryEngine=new f.Z({fields:r,geometryType:_,hasM:a,hasZ:u,objectIdField:E,spatialReference:I,featureStore:new y.Z({geometryType:_,hasM:a,hasZ:u}),timeInfo:q}),!i||!i.length)return this._nextObjectId=1,x;const w=i.reduce(((e,t)=>{const i=t.attributes&&t.attributes[E];return null==i||isNaN(i)||!isFinite(i)?e:Math.max(e,i)}),0);return this._nextObjectId=1+w,await(0,c._W)(i,I),this._loadInitialFeatures(x,i)}async applyEdits(e){const{spatialReference:t,geometryType:i}=this._queryEngine;return await(0,n.all)([(0,h.b)(t,i),(0,c._W)(e.adds,t),(0,c._W)(e.updates,t)]),this._applyEdits(e)}async queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}_inferLayerProperties(e,t){let i,s,n=null,r=null,l=null;for(const t of e){const e=t.geometry;if(e&&(n||(n=(0,a.Ji)(e)),r||(r=e.spatialReference),null==i&&(i=I(e)),null==s&&(s=F(e)),n&&r&&null!=i&&null!=s))break}if(t&&t.length){let e=null;t.some((t=>{const i="esriFieldTypeOID"===t.type,s=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,i||s}))&&(l=e.name)}return{geometryType:n,spatialReference:r,objectIdField:l,hasM:s,hasZ:i}}_loadInitialFeatures(e,t){const{geometryType:i,hasM:s,hasZ:n,objectIdField:r,spatialReference:l,featureStore:d}=this._queryEngine,o=[];for(const s of t){if(null!=s.uid&&(e.assignedObjectIds[s.uid]=-1),s.geometry&&i!==(0,a.Ji)(s.geometry)){e.featureErrors.push((0,h.av)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),n=(0,h.O0)(this._fieldsIndex,this._requiredFields,t,s.attributes,!0,e.warnings);n?e.featureErrors.push(n):(this._assignObjectId(t,s.attributes,!0),s.attributes=t,null!=s.uid&&(e.assignedObjectIds[s.uid]=s.attributes[r]),s.geometry&&(s.geometry=(0,c.iV)(s.geometry,s.geometry.spatialReference,l)),o.push(s))}if(d.addMany((0,u.Yn)([],o,i,n,s,r)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:t,end:i}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[t,i]}return e}_applyEdits(e){const{adds:t,updates:i,deletes:s}=e,n={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(n,t),i&&i.length&&this._applyUpdateEdits(n,i),s&&s.length){for(const e of s)n.deleteResults.push((0,h.d1)(e));this._queryEngine.featureStore.removeManyById(s)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:n}}_applyAddEdits(e,t){const{addResults:i}=e,{geometryType:s,hasM:n,hasZ:r,objectIdField:l,spatialReference:d,featureStore:o}=this._queryEngine,p=[];for(const n of t){if(n.geometry&&s!==(0,a.Ji)(n.geometry)){i.push((0,h.av)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),r=(0,h.O0)(this._fieldsIndex,this._requiredFields,t,n.attributes);if(r)i.push(r);else{if(this._assignObjectId(t,n.attributes),n.attributes=t,null!=n.uid){const t=n.attributes[l];e.uidToObjectId[n.uid]=t}n.geometry&&(n.geometry=(0,c.iV)((0,h.og)(n.geometry,d),n.geometry.spatialReference,d)),p.push(n),i.push((0,h.d1)(n.attributes[l]))}}o.addMany((0,u.Yn)([],p,s,r,n,l))}_applyUpdateEdits({updateResults:e},t){const{geometryType:i,hasM:s,hasZ:n,objectIdField:r,spatialReference:l,featureStore:d}=this._queryEngine;for(const o of t){const{attributes:t,geometry:p}=o,y=t&&t[r];if(null==y){e.push((0,h.av)(`Identifier field ${r} missing`));continue}if(!d.has(y)){e.push((0,h.av)(`Feature with object id ${y} missing`));continue}const f=(0,u.EI)(d.getFeature(y),i,n,s);if(p){if(i!==(0,a.Ji)(p)){e.push((0,h.av)("Incorrect geometry type."));continue}f.geometry=(0,c.iV)((0,h.og)(p,l),p.spatialReference,l)}if(t){const i=(0,h.O0)(this._fieldsIndex,this._requiredFields,f.attributes,t);if(i){e.push(i);continue}}d.add((0,u.XA)(f,i,n,s,r)),e.push((0,h.d1)(y))}}_assignObjectId(e,t,i=!1){const s=this._queryEngine.objectIdField;i&&t&&isFinite(t[s])?e[s]=t[s]:e[s]=this._nextObjectId++}}},73456:(e,t,i)=>{"use strict";i.d(t,{av:()=>l,d1:()=>u,b:()=>h,O0:()=>c,og:()=>f});var s=i(27780),n=i(4665);class r{constructor(){this.code=null,this.description=null}}class a{constructor(e){this.error=new r,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function l(e){return new a(e)}class d{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function u(e){return new d(e)}const o=new Set;function c(e,t,i,s,r=!1,a){o.clear();for(const t in s){const d=e.get(t);if(!d)continue;const u=s[t],c=p(d,u);if(c!==u&&a&&a.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:d,originalValue:u,sanitizedValue:c}}),o.add(d.name),d&&(r||d.editable)){const e=(0,n.Qc)(d,c);if(e)return l((0,n.vP)(e,d,c));i[d.name]=c}}for(const e of t)if(!o.has(e.name))return l(`missing required field "${e.name}"`);return null}function p(e,t){let i=t;return"string"==typeof t&&(0,n.H7)(e)?i=parseFloat(t):null!=t&&(0,n.qN)(e)&&"string"!=typeof t&&(i=String(t)),(0,n.Pz)(i)}let y;function f(e,t){if(!e||!(0,s.JY)(t))return e;if("rings"in e||"paths"in e){if(!y)throw new TypeError("geometry engine not loaded");return y.simplify(t,e)}return e}async function h(e,t){!(0,s.JY)(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return y||(y=await Promise.all([i.e(5798),i.e(508)]).then(i.bind(i,93134)),y)}()}},88210:(e,t,i)=>{"use strict";i.d(t,{v:()=>s});const s=new(i(56274).Xn)({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml"})}}]);
//# sourceMappingURL=4926.js.map