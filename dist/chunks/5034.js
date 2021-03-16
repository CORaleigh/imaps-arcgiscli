(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[5034],{65034:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>K});var r,n=i(56140),o=i(7584),s=(i(95830),i(59472)),l=i(36544),a=i(68055),p=i(79881),u=i(56274),d=i(30590),c=i(84300),y=i(87566),m=i(60538),f=i(32656),h=(i(10923),i(57002),i(86035),i(39105)),v=i(73032),b=i(52937),g=(i(36348),i(4665)),w=i(58484),_=i(54721),S=i(54734),I=i(56700),C=i(43072),x=i(79710),T=i(18152),j=i(78910),F=(i(71598),i(38474),i(42952)),R=(i(43925),i(3642),i(81882),i(4037)),Z=i(89772),O=i(142),E=i(70834),D=i(61121),N=i(48899),U=i(57407),k=i(33716),z=i(2194),L=i(10113),A=i(2584),q=i(26360),V=i(47679),J=i(68510),M=i(79663),P=i(43551),G=i(31518),W=i(58385);let B=r=class extends W.wq{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new r({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};(0,n._)([(0,p.Cb)({type:Number,json:{write:!0}})],B.prototype,"age",void 0),(0,n._)([(0,p.Cb)({type:Number,json:{write:!0}})],B.prototype,"ageReceived",void 0),(0,n._)([(0,p.Cb)({type:Number,json:{write:!0}})],B.prototype,"displayCount",void 0),(0,n._)([(0,p.Cb)({type:Number,json:{write:!0}})],B.prototype,"maxObservations",void 0),B=r=(0,n._)([(0,y.j)("esri.layers.support.PurgeOptions")],B);const Q=B,Y=l.Z.getLogger("esri.layers.StreamLayer"),$=new u.Xn({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"});let H=class extends((0,U.h)((0,A.n)((0,L.M)((0,z.Q)((0,N.Y)((0,j.q)((0,k.I)((0,C.R)(I.Z))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new Q,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=v.Z.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){"WebSocket"in o.Z||(0,h.reject)(new f.Z("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."));const t=(0,s.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service"]},e).catch((e=>e)).then((()=>this._fetchService(t)))),(0,h.resolve)(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}readFeatureReduction(e,t){return(0,V.ij)(e,t)}writeWebSceneFeatureReduction(e,t,i,r){(0,V.Q6)(e,t,"layerDefinition.featureReduction",r)}get fieldsIndex(){return new D.Z(this.fields)}set renderer(e){(0,g.YN)(e,this.fields),this._set("renderer",e)}readRenderer(e,t,i){const r=(t=t.layerDefinition||t).drawingInfo&&t.drawingInfo.renderer||void 0;if(r){const e=(0,O.ij)(r,t,i)||void 0;return e||Y.error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:i}),e}if(t.defaultSymbol)return t.types&&t.types.length?new F.Z({defaultSymbol:X(t.defaultSymbol,t,i),field:t.typeIdField,uniqueValueInfos:t.types.map((e=>({id:e.id,symbol:X(e.symbol,e,i)})))}):new R.Z({symbol:X(t.defaultSymbol,t,i)})}writeRenderer(e,t,i,r){(0,O.cW)(e,t,i,r)}writeWebSceneRenderer(e,t,i,r){(0,O.cW)(e,t,"layerDefinition.drawingInfo.renderer",r)}createPopupTemplate(e){return(0,P.eZ)(this,e)}createQuery(){const e=new G.Z;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,t){if(!this.fields)return null;let i=null;return this.fields.some((t=>(t.name===e&&(i=t.domain),!!i))),i}getField(e){return this.fieldsIndex.get(e)}async _fetchService(e){var t;if(this.webSocketUrl){var i;if(null==(i=this.timeInfo)||!i.trackIdField)throw new f.Z("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField)throw new f.Z("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");if(!this.fields)throw new f.Z("stream-layer:missing-metadata","The stream layer fields must be specified.");if(!this.geometryType)throw new f.Z("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.url=this.webSocketUrl}else if(!this.sourceJSON){const{data:t}=await(0,_.default)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=t}return this.sourceJSON={...null!=(t=this.sourceJSON)?t:{},objectIdField:"__esri_stream_id__"},this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),(0,g.YN)(this.renderer,this.fields),(0,g.UF)(this.timeInfo,this.fields),(0,M.y)(this,{origin:"service"})}};(0,n._)([(0,p.Cb)({type:String})],H.prototype,"copyright",void 0),(0,n._)([(0,p.Cb)({readOnly:!0,dependsOn:["fields","title"]})],H.prototype,"defaultPopupTemplate",null),(0,n._)([(0,p.Cb)({type:String})],H.prototype,"definitionExpression",void 0),(0,n._)([(0,p.Cb)({type:String})],H.prototype,"displayField",void 0),(0,n._)([(0,p.Cb)({type:x.Z})],H.prototype,"elevationInfo",void 0),(0,n._)([(0,d.r)("featureReduction",["layerDefinition.featureReduction"])],H.prototype,"readFeatureReduction",null),(0,n._)([(0,m.c)("web-scene","featureReduction",{"layerDefinition.featureReduction":{types:V.Gx}})],H.prototype,"writeWebSceneFeatureReduction",null),(0,n._)([(0,p.Cb)({type:[E.Z]})],H.prototype,"fields",void 0),(0,n._)([(0,p.Cb)({readOnly:!0,dependsOn:["fields"]})],H.prototype,"fieldsIndex",null),(0,n._)([(0,p.Cb)({type:b.Z})],H.prototype,"geometryDefinition",void 0),(0,n._)([(0,p.Cb)({type:["point","polygon","polyline","multipoint"],json:{read:{reader:$.read}}})],H.prototype,"geometryType",void 0),(0,n._)([(0,p.Cb)(T.iR)],H.prototype,"labelsVisible",void 0),(0,n._)([(0,p.Cb)({type:[q.Z],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:J.r},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],H.prototype,"labelingInfo",void 0),(0,n._)([(0,p.Cb)(T.rn)],H.prototype,"legendEnabled",void 0),(0,n._)([(0,p.Cb)({type:["show","hide"]})],H.prototype,"listMode",void 0),(0,n._)([(0,p.Cb)({type:a.z8})],H.prototype,"maxReconnectionAttempts",void 0),(0,n._)([(0,p.Cb)({type:a.z8})],H.prototype,"maxReconnectionInterval",void 0),(0,n._)([(0,p.Cb)({type:String})],H.prototype,"objectIdField",void 0),(0,n._)([(0,p.Cb)({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],H.prototype,"operationalLayerType",void 0),(0,n._)([(0,p.Cb)(T.C_)],H.prototype,"popupEnabled",void 0),(0,n._)([(0,p.Cb)({type:w.default,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],H.prototype,"popupTemplate",void 0),(0,n._)([(0,p.Cb)({type:Q})],H.prototype,"purgeOptions",void 0),(0,n._)([(0,p.Cb)({types:Z.A,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],H.prototype,"renderer",null),(0,n._)([(0,d.r)("service","renderer",["drawingInfo.renderer","defaultSymbol"]),(0,d.r)("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],H.prototype,"readRenderer",null),(0,n._)([(0,m.c)("renderer")],H.prototype,"writeRenderer",null),(0,n._)([(0,m.c)("web-scene","renderer",{"layerDefinition.drawingInfo.renderer":{types:Z.o}})],H.prototype,"writeWebSceneRenderer",null),(0,n._)([(0,p.Cb)(T.YI)],H.prototype,"screenSizePerspectiveEnabled",void 0),(0,n._)([(0,p.Cb)({type:v.Z,json:{origins:{service:{read:{source:"spatialReference"}}}}})],H.prototype,"spatialReference",void 0),(0,n._)([(0,p.Cb)({json:{read:!1}})],H.prototype,"type",void 0),(0,n._)([(0,p.Cb)(T.HQ)],H.prototype,"url",void 0),(0,n._)([(0,p.Cb)({type:Number})],H.prototype,"updateInterval",void 0),(0,n._)([(0,p.Cb)({type:String})],H.prototype,"webSocketUrl",void 0),H=(0,n._)([(0,y.j)("esri.layers.StreamLayer")],H);const X=(0,c.d)({types:S.a});const K=H},2584:(e,t,i)=>{"use strict";i.d(t,{n:()=>c});var r=i(56140),n=(i(95830),i(36544),i(68055),i(79881)),o=i(30590),s=i(87566),l=(i(10923),i(57002),i(86035),i(4665)),a=i(98034),p=i(87864),u=i(40522),d=i(56602);const c=e=>{let t=class extends e{constructor(){super(...arguments),this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0}readOffset(e,t){const i=t.timeInfo.exportOptions;if(!i)return null;const r=i.timeOffset,n=a.vU.fromJSON(i.timeOffsetUnits);return r&&n?new u.Z({value:r,unit:n}):null}set timeInfo(e){(0,l.UF)(e,this.fields),this._set("timeInfo",e)}};return(0,r._)([(0,n.Cb)({type:p.Z,json:{write:!1}})],t.prototype,"timeExtent",void 0),(0,r._)([(0,n.Cb)({type:u.Z})],t.prototype,"timeOffset",void 0),(0,r._)([(0,o.r)("service","timeOffset",["timeInfo.exportOptions"])],t.prototype,"readOffset",null),(0,r._)([(0,n.Cb)({value:null,type:d.Z,json:{write:!0,origins:{"web-document":{read:!1,write:!1}}}})],t.prototype,"timeInfo",null),(0,r._)([(0,n.Cb)({type:Boolean,json:{read:{source:"timeAnimation"},write:{target:"timeAnimation"},origins:{"web-scene":{read:!1,write:!1}}}})],t.prototype,"useViewTime",void 0),t=(0,r._)([(0,s.j)("esri.layers.mixins.TemporalLayer")],t),t}},59386:(e,t,i)=>{"use strict";i.d(t,{Z:()=>a});var r=i(56140),n=(i(95830),i(36544),i(68055),i(79881)),o=i(87566),s=(i(10923),i(57002),i(86035),i(58385));let l=class extends s.wq{constructor(){super(...arguments),this.type=null}};(0,r._)([(0,n.Cb)({type:["selection","cluster"],readOnly:!0,json:{read:!1,write:!0}})],l.prototype,"type",void 0),l=(0,r._)([(0,o.j)("esri.layers.support.FeatureReduction")],l);const a=l},10452:(e,t,i)=>{"use strict";i.d(t,{Z:()=>w});var r,n=i(56140),o=(i(95830),i(82550)),s=(i(36544),i(68055),i(79881)),l=i(87566),a=(i(10923),i(57002),i(86035),i(58385)),p=i(58484),u=i(96071),d=i(18152);let c=r=class extends a.wq{constructor(){super(...arguments),this.statisticType=null,this.onStatisticField=null,this.onStatisticValueExpression=null}clone(){return new r({statisticType:this.statisticType,onStatisticField:this.onStatisticField,onStatisticValueExpression:this.onStatisticValueExpression})}};(0,n._)([(0,s.Cb)({type:String,json:{write:!0}})],c.prototype,"statisticType",void 0),(0,n._)([(0,s.Cb)({type:String,json:{write:!0}})],c.prototype,"onStatisticField",void 0),(0,n._)([(0,s.Cb)({type:String,json:{write:!0}})],c.prototype,"onStatisticValueExpression",void 0),c=r=(0,n._)([(0,l.j)("esri.layers.support.OutStatistic")],c);const y=c;var m;let f=m=class extends a.wq{constructor(){super(...arguments),this.name=null}clone(){return new m({name:this.name,outStatistic:this.outStatistic.clone()})}};(0,n._)([(0,s.Cb)({type:String,json:{write:!0}})],f.prototype,"name",void 0),(0,n._)([(0,s.Cb)({type:y,json:{write:!0}})],f.prototype,"outStatistic",void 0),f=m=(0,n._)([(0,l.j)("esri.layers.support.AggregateField")],f);const h=f;var v,b=i(26360);let g=v=class extends a.wq{constructor(e){super(e),this.type="cluster",this.clusterRadius=(0,u.t_)("80px"),this.clusterMinSize=(0,u.t_)("12px"),this.clusterMaxSize=(0,u.t_)("50px"),this.popupEnabled=!0,this.popupTemplate=null,this.labelingInfo=null,this.labelsVisible=!0,this.fields=null}clone(){return new v({clusterRadius:this.clusterRadius,clusterMinSize:this.clusterMinSize,clusterMaxSize:this.clusterMaxSize,labelingInfo:(0,o.d9)(this.labelingInfo),labelsVisible:this.labelsVisible,fields:(0,o.d9)(this.fields),popupEnabled:this.popupEnabled,popupTemplate:(0,o.d9)(this.popupTemplate)})}};(0,n._)([(0,s.Cb)({type:["cluster"],readOnly:!0,json:{write:!0}})],g.prototype,"type",void 0),(0,n._)([(0,s.Cb)({type:Number,cast:e=>"auto"===e?e:(0,u.t_)(e),json:{write:!0}})],g.prototype,"clusterRadius",void 0),(0,n._)([(0,s.Cb)({type:Number,cast:u.t_,json:{write:!0}})],g.prototype,"clusterMinSize",void 0),(0,n._)([(0,s.Cb)({type:Number,cast:u.t_,json:{write:!0}})],g.prototype,"clusterMaxSize",void 0),(0,n._)([(0,s.Cb)(d.C_)],g.prototype,"popupEnabled",void 0),(0,n._)([(0,s.Cb)({type:p.default,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],g.prototype,"popupTemplate",void 0),(0,n._)([(0,s.Cb)({type:[b.Z],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],g.prototype,"labelingInfo",void 0),(0,n._)([(0,s.Cb)(d.iR)],g.prototype,"labelsVisible",void 0),(0,n._)([(0,s.Cb)({type:[h],json:{write:!0}})],g.prototype,"fields",void 0),g=v=(0,n._)([(0,l.j)("esri.layers.support.FeatureReductionCluster")],g);const w=g},52794:(e,t,i)=>{"use strict";i.d(t,{Z:()=>p});var r,n=i(56140),o=(i(95830),i(36544),i(68055),i(79881)),s=i(87566),l=(i(10923),i(57002),i(86035),i(59386));let a=r=class extends l.Z{constructor(e){super(e),this.type="selection"}clone(){return new r}};(0,n._)([(0,o.Cb)({type:["selection"]})],a.prototype,"type",void 0),a=r=(0,n._)([(0,s.j)("esri.layers.support.FeatureReductionSelection")],a);const p=a},56602:(e,t,i)=>{"use strict";i.d(t,{Z:()=>b});var r,n=i(56140),o=(i(95830),i(82550)),s=(i(36544),i(68055),i(79881)),l=i(30590),a=i(87566),p=i(60538),u=(i(10923),i(57002),i(86035),i(58385)),d=i(98034),c=i(87864),y=i(40522);let m=r=class extends u.wq{constructor(e){super(e),this.respectsDaylightSaving=!1,this.timezone=null}readRespectsDaylightSaving(e,t){return void 0!==t.respectsDaylightSaving?t.respectsDaylightSaving:void 0!==t.respectDaylightSaving&&t.respectDaylightSaving}clone(){const{respectsDaylightSaving:e,timezone:t}=this;return new r({respectsDaylightSaving:e,timezone:t})}};(0,n._)([(0,s.Cb)({type:Boolean,json:{write:!0}})],m.prototype,"respectsDaylightSaving",void 0),(0,n._)([(0,l.r)("respectsDaylightSaving",["respectsDaylightSaving","respectDaylightSaving"])],m.prototype,"readRespectsDaylightSaving",null),(0,n._)([(0,s.Cb)({type:String,json:{read:{source:"timeZone"},write:{target:"timeZone"}}})],m.prototype,"timezone",void 0),m=r=(0,n._)([(0,a.j)("esri.layers.support.TimeReference")],m);const f=m;var h;let v=h=class extends u.wq{constructor(e){super(e),this.cumulative=!1,this.endField=null,this.fullTimeExtent=null,this.hasLiveData=!1,this.interval=null,this.startField=null,this.timeReference=null,this.trackIdField=null,this.useTime=!0}readFullTimeExtent(e,t){if(!t.timeExtent||!Array.isArray(t.timeExtent)||2!==t.timeExtent.length)return null;const i=new Date(t.timeExtent[0]),r=new Date(t.timeExtent[1]);return new c.Z({start:i,end:r})}writeFullTimeExtent(e,t){e&&e.start&&e.end?t.timeExtent=[e.start.getTime(),e.end.getTime()]:t.timeExtent=null}readInterval(e,t){return t.timeInterval&&t.timeIntervalUnits?new y.Z({value:t.timeInterval,unit:d.vU.fromJSON(t.timeIntervalUnits)}):t.defaultTimeInterval&&t.defaultTimeIntervalUnits?new y.Z({value:t.defaultTimeInterval,unit:d.vU.fromJSON(t.defaultTimeIntervalUnits)}):null}writeInterval(e,t){if(e){const i=e.toJSON();t.timeInterval=i.value,t.timeIntervalUnits=i.unit}else t.timeInterval=null,t.timeIntervalUnits=null}clone(){const{cumulative:e,endField:t,hasLiveData:i,interval:r,startField:n,timeReference:s,fullTimeExtent:l,trackIdField:a,useTime:p}=this;return new h({cumulative:e,endField:t,hasLiveData:i,interval:r,startField:n,timeReference:(0,o.d9)(s),fullTimeExtent:(0,o.d9)(l),trackIdField:a,useTime:p})}};(0,n._)([(0,s.Cb)({type:Boolean,json:{read:{source:"exportOptions.timeDataCumulative"},write:{target:"exportOptions.timeDataCumulative"}}})],v.prototype,"cumulative",void 0),(0,n._)([(0,s.Cb)({type:String,json:{read:{source:"endTimeField"},write:{target:"endTimeField",allowNull:!0}}})],v.prototype,"endField",void 0),(0,n._)([(0,s.Cb)({type:c.Z,json:{write:{enabled:!0,allowNull:!0}}})],v.prototype,"fullTimeExtent",void 0),(0,n._)([(0,l.r)("fullTimeExtent",["timeExtent"])],v.prototype,"readFullTimeExtent",null),(0,n._)([(0,p.c)("fullTimeExtent")],v.prototype,"writeFullTimeExtent",null),(0,n._)([(0,s.Cb)({type:Boolean,json:{write:!0}})],v.prototype,"hasLiveData",void 0),(0,n._)([(0,s.Cb)({type:y.Z,json:{write:{enabled:!0,allowNull:!0}}})],v.prototype,"interval",void 0),(0,n._)([(0,l.r)("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],v.prototype,"readInterval",null),(0,n._)([(0,p.c)("interval")],v.prototype,"writeInterval",null),(0,n._)([(0,s.Cb)({type:String,json:{read:{source:"startTimeField"},write:{target:"startTimeField",allowNull:!0}}})],v.prototype,"startField",void 0),(0,n._)([(0,s.Cb)({type:f,json:{write:{enabled:!0,allowNull:!0}}})],v.prototype,"timeReference",void 0),(0,n._)([(0,s.Cb)({type:String,json:{write:{enabled:!0,allowNull:!0}}})],v.prototype,"trackIdField",void 0),(0,n._)([(0,s.Cb)({type:Boolean,json:{read:{source:"exportOptions.useTime"},write:{target:"exportOptions.useTime"}}})],v.prototype,"useTime",void 0),v=h=(0,n._)([(0,a.j)("esri.layers.support.TimeInfo")],v);const b=v},47679:(e,t,i)=>{"use strict";i.d(t,{ij:()=>p,Gx:()=>a,Q6:()=>u});var r=i(10103),n=i(32656),o=i(59386),s=i(10452),l=i(52794);const a={key:"type",base:o.Z,typeMap:{selection:l.Z}};function p(e,t){const i=(t=t.layerDefinition||t).featureReduction;if(i)switch(i.type){case"selection":return l.Z.fromJSON(i);case"cluster":return s.Z.fromJSON(i)}return null}function u(e,t,i,o){const s=function(e,t,i){return e?"selection"!==e.type?(i.messages&&i.messages.push(new n.Z("featureReduction:unsupported",`FeatureReduction of type '${e.declaredClass}' are not supported in scenes.`,{featureReduction:e,context:i})),null):e.write(t,i):null}(e,{},o);s&&(0,r.RB)(i,s,t)}},68510:(e,t,i)=>{"use strict";i.d(t,{r:()=>o});var r=i(26360);const n=/\[([^\[\]]+)\]/gi;function o(e,t,i){return e?e.map((e=>{const o=new r.Z;if(o.read(e,i),o.labelExpression){const e=t.fields||t.layerDefinition&&t.layerDefinition.fields||this.fields;o.labelExpression=o.labelExpression.replace(n,((t,i)=>`[${function(e,t){if(!t)return e;const i=e.toLowerCase();for(let e=0;e<t.length;e++){const r=t[e].name;if(r.toLowerCase()===i)return r}return e}(i,e)}]`))}return o})):null}},79663:(e,t,i)=>{"use strict";i.d(t,{y:()=>s});var r=i(15307),n=i(39105),o=i(59351);async function s(e,t,i){const s=e&&e.getAtOrigin&&e.getAtOrigin("renderer",t.origin);if(s&&"unique-value"===s.type&&s.styleOrigin){const l=await(0,o.q6)(s.populateFromStyle());if((0,n.throwIfAborted)(i),!1===l.ok){const i=l.error;t&&t.messages&&t.messages.push(new r.Z("renderer:style-reference",`Failed to create unique value renderer from style reference: ${i.message}`,{error:i,context:t})),e.clear("renderer",t.origin)}}}}}]);
//# sourceMappingURL=5034.js.map