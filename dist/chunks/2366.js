(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[2366],{47977:(e,r,t)=>{"use strict";t.d(r,{E:()=>o});class s{constructor(e={}){this._options=e}toQueryParams(e){if(!e)return null;const r=e.toJSON(),t={};return Object.keys(r).forEach((e=>{const s=this._options[e];if(s){const o="boolean"!=typeof s&&s.name?s.name:e,i="boolean"!=typeof s&&s.getter?s.getter(r):r[e];null!=i&&(t[o]=(e=>{if(!Array.isArray(e))return!1;const[r]=e;return"number"==typeof r||"string"==typeof r})(i)?i.join(","):"object"==typeof i?JSON.stringify(i):i)}else t[e]=r[e]}),this),t}}function o(e){return new s(e)}},62366:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>Z});var s=t(56140),o=(t(95830),t(36544),t(68055),t(79881)),i=t(87566),a=(t(10923),t(57002),t(86035),t(39105)),n=t(54721),l=t(91535),u=t(95986),p=t(47977),c=t(10532),d=t(59472),f=t(30590),y=t(58385),v=t(73032),h=t(61106),g=t(53817),m=t(93833),_=t(56885),B=(t(36348),t(15988)),w=t(36405);function M(e){return e.features.map((r=>{const t=v.Z.fromJSON(e.spatialReference),s=B.Z.fromJSON(r);return(0,d.Wg)(s.geometry).spatialReference=t,s}))}function T(e){return e.features.map((r=>(r.geometry.spatialReference=e.spatialReference,(0,_.im)(r.geometry))))}let b=class extends y.wq{constructor(e){super(e),this.facilities=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.serviceAreaPolylines=null,this.serviceAreaPolygons=null}readFacilities(e){return T(e)}readPointBarriers(e,r){return T(r.barriers)}readPolylineBarriers(e){return T(e)}readPolygonBarriers(e){return T(e)}readIncidents(e,r){return M(r.saPolylines)}readServiceAreaPolygons(e,r){return M(r.saPolygons)}};(0,s._)([(0,o.Cb)({type:[h.Z]})],b.prototype,"facilities",void 0),(0,s._)([(0,f.r)("facilities")],b.prototype,"readFacilities",null),(0,s._)([(0,o.Cb)({type:[w.Z]})],b.prototype,"messages",void 0),(0,s._)([(0,o.Cb)({type:[h.Z]})],b.prototype,"pointBarriers",void 0),(0,s._)([(0,f.r)("pointBarriers",["barriers"])],b.prototype,"readPointBarriers",null),(0,s._)([(0,o.Cb)({type:[m.Z]})],b.prototype,"polylineBarriers",void 0),(0,s._)([(0,f.r)("polylineBarriers")],b.prototype,"readPolylineBarriers",null),(0,s._)([(0,o.Cb)({type:[g.Z]})],b.prototype,"polygonBarriers",void 0),(0,s._)([(0,f.r)("polygonBarriers")],b.prototype,"readPolygonBarriers",null),(0,s._)([(0,o.Cb)({type:[B.Z]})],b.prototype,"serviceAreaPolylines",void 0),(0,s._)([(0,f.r)("serviceAreaPolylines",["saPolylines"])],b.prototype,"readIncidents",null),(0,s._)([(0,o.Cb)({type:[B.Z]})],b.prototype,"serviceAreaPolygons",void 0),(0,s._)([(0,f.r)("serviceAreaPolygons",["saPolygons"])],b.prototype,"readServiceAreaPolygons",null),b=(0,s._)([(0,i.j)("esri.tasks.support.ServiceAreaSolveResult")],b);const S=b,A=(0,p.E)({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,defaultBreaks:!0,facilities:!0,outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},travelMode:!0});let P=class extends((0,c.Y)(u.Z)){constructor(e){super(e),this.url=null}solve(e,r){const t=[],s=[],o={},i={};return e.facilities&&e.facilities.features&&this._collectGeometries(e.facilities.features,s,"facilities.features",o),e.pointBarriers&&e.pointBarriers.features&&this._collectGeometries(e.pointBarriers.features,s,"pointBarriers.features",o),e.polylineBarriers&&e.polylineBarriers.features&&this._collectGeometries(e.polylineBarriers.features,s,"polylineBarriers.features",o),e.polygonBarriers&&e.polygonBarriers.features&&this._collectGeometries(e.polygonBarriers.features,s,"polygonBarriers.features",o),(0,l.aX)(s).then((e=>{for(const r in o){const s=o[r];t.push(r),i[r]=e.slice(s[0],s[1])}return this._isInputGeometryZAware(i,t)?this.getServiceDescription():(0,a.resolve)({dontCheck:!0})})).then((s=>{("dontCheck"in s?s.dontCheck:s.hasZ)||this._dropZValuesOffInputGeometry(i,t);for(const r in i)i[r].forEach(((t,s)=>{e.get(r)[s].geometry=t}));let o={query:{...this.parsedUrl.query,f:"json",...A.toQueryParams(e)}};return(this.requestOptions||r)&&(o={...this.requestOptions,...r,...o}),(0,n.default)(`${this.parsedUrl.path}/solveServiceArea`,o)})).then((e=>S.fromJSON(e.data)))}_collectGeometries(e,r,t,s){s[t]=[r.length,r.length+e.length],e.forEach((e=>{r.push(e.geometry)}))}};(0,s._)([(0,o.Cb)()],P.prototype,"url",void 0),P=(0,s._)([(0,i.j)("esri.tasks.ServiceAreaTask")],P);const Z=P},10532:(e,r,t)=>{"use strict";t.d(r,{Y:()=>c});var s=t(56140),o=(t(95830),t(10103)),i=t(59472),a=(t(36544),t(68055),t(79881),t(87566)),n=t(32656),l=t(10923),u=(t(57002),t(86035),t(54721)),p=t(95986);const c=e=>{let r=class extends e{async getServiceDescription(){return this._serviceDescriptionPromise||(this._serviceDescriptionPromise=this._fetchServiceDescription()),this._serviceDescriptionPromise}async _fetchServiceDescription(){if(!this.url||!this.parsedUrl)throw new n.Z("network-service:missing-url","Url to Network service is missing");const e=this.url,{data:r}=await(0,u.default)(e,{query:{f:"json"}});r.supportedTravelModes||(r.supportedTravelModes=[]);for(let e=0;e<r.supportedTravelModes.length;e++)r.supportedTravelModes[e].id||(r.supportedTravelModes[e].id=r.supportedTravelModes[e].itemId);const t=r.currentVersion>=10.4?async function(e){try{const{data:{supportedTravelModes:r,defaultTravelMode:t}}=await(0,u.default)(e+("/"===e[e.length-1]?"":"/")+"retrieveTravelModes",{query:{f:"json"}});return{supportedTravelModes:r,defaultTravelMode:t}}catch(e){throw new n.Z("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:e})}}(e):async function(e){const{data:r}=await(0,u.default)(e.substring(0,e.indexOf("/rest/")+6)+"info",{query:{f:"json"}});if(!r||!r.owningSystemUrl)return{supportedTravelModes:[],defaultTravelMode:null};e=r.owningSystemUrl;const{data:t}=await(0,u.default)(e+("/"===e[e.length-1]?"":"/")+"sharing/rest/portals/self",{query:{f:"json"}}),s=(0,o.hS)("helperServices.routingUtilities.url",t);if(!s)return{supportedTravelModes:[],defaultTravelMode:null};const i=(0,l.mN)(e),a=/\/solveClosestFacility$/.test(i.path)?"Route":/\/solveClosestFacility$/.test(i.path)?"ClosestFacility":"ServiceAreas",n=await(0,u.default)(s+("/"===s[s.length-1]?"":"/")+"GetTravelModes/execute",{query:{f:"json",serviceName:a}}),p=[];let c=null;if(n&&n.data&&n.data.results&&n.data.results.length){const e=n.data.results;for(const r of e)if("supportedTravelModes"===r.paramName){if(r.value&&r.value.features)for(const{attributes:e}of r.value.features)if(e){const r=JSON.parse(e.TravelMode);p.push(r)}}else"defaultTravelMode"===r.paramName&&(c=r.value)}return{supportedTravelModes:p,defaultTravelMode:c}}(e),{defaultTravelMode:s,supportedTravelModes:i}=await t;return r.defaultTravelMode=s,r.supportedTravelModes=i,r}_isInputGeometryZAware(e,r){for(let t=0;t<r.length;t++){const s=e[r[t]];if(s&&s.length)for(const e of s)if((0,i.pC)(e)&&e.hasZ)return!0}return!1}_dropZValuesOffInputGeometry(e,r){for(let t=0;t<r.length;t++){const s=e[r[t]];if(s&&s.length)for(const e of s)e.z=void 0}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")}};return r=(0,s._)([(0,a.j)("esri.tasks.mixins.NAServiceDescription")],r),r};let d=class extends(c(p.Z)){};d=(0,s._)([(0,a.j)("esri.tasks.mixins.NAServiceDescription")],d)},36405:(e,r,t)=>{"use strict";t.d(r,{Z:()=>p});var s=t(56140),o=(t(95830),t(36544),t(68055),t(79881)),i=t(56274),a=t(87566),n=(t(10923),t(57002),t(86035),t(21544));const l=new i.Xn({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});let u=class extends n.Z{constructor(e){super(e),this.type=null}};(0,s._)([(0,o.Cb)({type:String,json:{read:l.read,write:l.write}})],u.prototype,"type",void 0),u=(0,s._)([(0,a.j)("esri.tasks.support.NAMessage")],u);const p=u}}]);
//# sourceMappingURL=2366.js.map