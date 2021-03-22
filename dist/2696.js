(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[2696],{22696:(e,r,a)=>{"use strict";a.r(r),a.d(r,{default:()=>G});var s,t=a(56140),i=(a(95830),a(82550)),l=a(59472),c=a(36544),o=(a(68055),a(79881)),y=a(87566),p=a(60538),n=a(10923),d=(a(57002),a(86035),a(39105)),g=a(58385),m=a(73032),h=a(83477),b=a(32105),v=a(809),L=a(32797),u=a(1721),S=a(80192),f=a(93776),M=a(87837);let T=0;const I=c.Z.getLogger("esri.Basemap");let w=s=class extends((0,g.eC)(v.Z)){constructor(e){super(e),this.id=null,this.portalItem=null,this.spatialReference=null,this.thumbnailUrl=null,this.title="Basemap",this.id=Date.now().toString(16)+"-basemap-"+T++,this.baseLayers=new h.Z,this.referenceLayers=new h.Z;const r=e=>{e.parent&&e.parent!==this&&"remove"in e.parent&&e.parent.remove(e),e.parent=this,"elevation"===e.type&&I.error(`Layer '${e.title}, id:${e.id}' of type '${e.type}' is not supported as a basemap layer and will therefore be ignored.`)},a=e=>{e.parent=null};this.baseLayers.on("after-add",(e=>r(e.item))),this.referenceLayers.on("after-add",(e=>r(e.item))),this.baseLayers.on("after-remove",(e=>a(e.item))),this.referenceLayers.on("after-remove",(e=>a(e.item)))}initialize(){this.when().catch((e=>{I.error("#load()",`Failed to load basemap (title: '${this.title}', id: '${this.id}')`,e)})),this.resourceInfo&&this.read(this.resourceInfo.data,this.resourceInfo.context)}destroy(){var e;const r=this.baseLayers.removeAll();for(const e of r)e.destroy();const a=this.referenceLayers.removeAll();for(const e of a)e.destroy();this.baseLayers.destroy(),this.referenceLayers.destroy(),null==(e=this.portalItem)||e.destroy(),this.portalItem=null}normalizeCtorArgs(e){return e&&"resourceInfo"in e&&(this._set("resourceInfo",e.resourceInfo),delete(e={...e}).resourceInfo),e}set baseLayers(e){this._set("baseLayers",(0,b.Z)(e,this._get("baseLayers")))}_writeBaseLayers(e,r,a){const s=[];e?(a={...a,layerContainerType:"basemap"},this.baseLayers.forEach((e=>{const r=(0,M.Nw)(e,a.webmap?a.webmap.getLayerJSONFromResourceInfo(e):null,a);(0,l.pC)(r)&&s.push(r)})),this.referenceLayers.forEach((e=>{const r=(0,M.Nw)(e,a.webmap?a.webmap.getLayerJSONFromResourceInfo(e):null,a);(0,l.pC)(r)&&(r.isReference=!0,s.push(r))})),r.baseMapLayers=s):r.baseMapLayers=s}set referenceLayers(e){this._set("referenceLayers",(0,b.Z)(e,this._get("referenceLayers")))}writeTitle(e,r){r.title=e||"Basemap"}load(e){return this.addResolvingPromise(this._loadFromSource(e)),(0,d.resolve)(this)}loadAll(){return(0,u.GZ)(this,(e=>{e(this.baseLayers,this.referenceLayers)}))}clone(){const e={id:this.id,title:this.title,portalItem:this.portalItem,baseLayers:this.baseLayers.slice(),referenceLayers:this.referenceLayers.slice()};return this.loaded&&(e.loadStatus="loaded"),new s({resourceInfo:this.resourceInfo}).set(e)}read(e,r){this.resourceInfo||this._set("resourceInfo",{data:e,context:r}),super.read(e,r)}write(e,r){return e=e||{},r&&r.origin||(r={origin:"web-map",...r}),super.write(e,r),!this.loaded&&this.resourceInfo&&this.resourceInfo.data.baseMapLayers&&(e.baseMapLayers=this.resourceInfo.data.baseMapLayers.map((e=>{const r=(0,i.d9)(e);return r.url&&(0,n.oC)(r.url)&&(r.url=`https:${r.url}`),r.templateUrl&&(0,n.oC)(r.templateUrl)&&(r.templateUrl=`https:${r.templateUrl}`),r}))),e}async _loadFromSource(e){const{resourceInfo:r,portalItem:a}=this;(0,d.throwIfAborted)(e);const s=[];if(r){const a=r.context?r.context.url:null;if(s.push(this._loadLayersFromJSON(r.data,a,e)),r.data.id&&!r.data.title){const e=r.data.id;s.push((0,f.g)(e).then((e=>{e&&this.read({title:e},r.context)})))}}else a&&s.push(this._loadFromItem(a,e));await(0,d.all)(s)}async _loadLayersFromJSON(e,r,s){const t=this.resourceInfo&&this.resourceInfo.context,i=this.portalItem&&this.portalItem.portal||t&&t.portal||null,l=t&&"web-scene"===t.origin?"web-scene":"web-map",{populateOperationalLayers:c}=await a.e(7254).then(a.bind(a,87254)),o=[];if((0,d.throwIfAborted)(s),e.baseMapLayers&&Array.isArray(e.baseMapLayers)){const a={context:{origin:l,url:r,portal:i,layerContainerType:"basemap"},defaultLayerType:"DefaultTileLayer"},s=c(this.baseLayers,e.baseMapLayers.filter((e=>!e.isReference)),a);o.push(s);const t=c(this.referenceLayers,e.baseMapLayers.filter((e=>e.isReference)),a);o.push(t)}await(0,d.eachAlways)(o)}async _loadFromItem(e,r){const a=await e.load(r),s=await a.fetchData("json",r),t=(0,n.mN)(e.itemUrl);return this._set("resourceInfo",{data:s.baseMap,context:{origin:"web-map",portal:e.portal||L.Z.getDefault(),url:t}}),this.read(this.resourceInfo.data,this.resourceInfo.context),this.read({spatialReference:s.spatialReference},this.resourceInfo.context),this.read({title:e.title,thumbnailUrl:e.thumbnailUrl},{origin:"portal-item",portal:e.portal||L.Z.getDefault(),url:t}),this._loadLayersFromJSON(this.resourceInfo.data,t,r)}static fromId(e){const r=f.s[e];return r?s.fromJSON(r):null}};(0,t._)([(0,o.Cb)({json:{write:{ignoreOrigin:!0,target:"baseMapLayers",writer(e,r,a,s){this._writeBaseLayers(e,r,s)}},origins:{"web-scene":{write:{ignoreOrigin:!0,target:{baseMapLayers:{type:h.Z}},writer(e,r,a,s){this._writeBaseLayers(e,r,s)}}}}}})],w.prototype,"baseLayers",null),(0,t._)([(0,o.Cb)({type:String,json:{origins:{"web-scene":{write:!0}}}})],w.prototype,"id",void 0),(0,t._)([(0,o.Cb)({type:S.default})],w.prototype,"portalItem",void 0),(0,t._)([(0,o.Cb)()],w.prototype,"referenceLayers",null),(0,t._)([(0,o.Cb)({readOnly:!0})],w.prototype,"resourceInfo",void 0),(0,t._)([(0,o.Cb)({type:m.Z})],w.prototype,"spatialReference",void 0),(0,t._)([(0,o.Cb)()],w.prototype,"thumbnailUrl",void 0),(0,t._)([(0,o.Cb)({type:String,json:{origins:{"web-scene":{write:{isRequired:!0}}}}})],w.prototype,"title",void 0),(0,t._)([(0,p.c)("title")],w.prototype,"writeTitle",null),w=s=(0,t._)([(0,y.j)("esri.Basemap")],w);const G=w},1721:(e,r,a)=>{"use strict";a.d(r,{GZ:()=>c,wF:()=>o});var s=a(59472),t=a(83477),i=a(809),l=a(59351);async function c(e,r){return await e.load(),o(e,r)}async function o(e,r){const a=[],c=(...e)=>{for(const r of e)(0,s.Wi)(r)||(Array.isArray(r)?c(...r):t.Z.isCollection(r)?r.forEach((e=>c(e))):i.Z.isLoadable(r)&&a.push(r))};r(c);let o=null;if(await(0,l.UI)(a,(async e=>{var r;!1!==(await(0,l.q6)((r=e,"loadAll"in r&&"function"==typeof r.loadAll?e.loadAll():e.load()))).ok||o||(o=e)})),o)throw o.loadError;return e}},93776:(e,r,a)=>{"use strict";a.d(r,{s:()=>l,g:()=>i});var s=a(14071),t=a(12973);async function i(e){if(!e)return;const r=e.indexOf("-vector")>-1?e.slice(0,e.indexOf("-vector")):e,a=await(0,s.ME)("esri/t9n/basemaps");return a[e]||a[r]}const l={streets:{id:"streets",thumbnailUrl:(0,t.V)("esri/images/basemap/streets.jpg"),baseMapLayers:[{id:"streets-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Street Map",showLegend:!1,visibility:!0,opacity:1}]},satellite:{id:"satellite",thumbnailUrl:(0,t.V)("esri/images/basemap/satellite.jpg"),baseMapLayers:[{id:"satellite-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Imagery",showLegend:!1,visibility:!0,opacity:1}]},hybrid:{id:"hybrid",thumbnailUrl:(0,t.V)("esri/images/basemap/hybrid.jpg"),baseMapLayers:[{id:"hybrid-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Imagery",showLegend:!1,visibility:!0,opacity:1},{id:"hybrid-reference-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Boundaries and Places",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},terrain:{id:"terrain",thumbnailUrl:(0,t.V)("esri/images/basemap/terrain.jpg"),baseMapLayers:[{id:"terrain-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Terrain Base",showLegend:!1,visibility:!0,opacity:1},{id:"terrain-reference-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Reference Overlay",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},topo:{id:"topo",thumbnailUrl:(0,t.V)("esri/images/basemap/topo.jpg"),baseMapLayers:[{id:"topo-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Topo Map",showLegend:!1,visibility:!0,opacity:1}]},gray:{id:"gray",thumbnailUrl:(0,t.V)("esri/images/basemap/gray.jpg"),baseMapLayers:[{id:"gray-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Light Gray Base",showLegend:!1,visibility:!0,opacity:1},{id:"gray-reference-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Light Gray Reference",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},"dark-gray":{id:"dark-gray",thumbnailUrl:(0,t.V)("esri/images/basemap/dark-gray.jpg"),baseMapLayers:[{id:"dark-gray-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Dark Gray Base",showLegend:!1,visibility:!0,opacity:1},{id:"dark-gray-reference-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Dark Gray Reference",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},oceans:{id:"oceans",thumbnailUrl:(0,t.V)("esri/images/basemap/oceans.jpg"),baseMapLayers:[{id:"oceans-base-layer",url:"//services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Ocean Base",showLegend:!1,visibility:!0,opacity:1},{id:"oceans-reference-layer",url:"//services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Reference/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Ocean Reference",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},"national-geographic":{id:"national-geographic",thumbnailUrl:(0,t.V)("esri/images/basemap/national-geographic.jpg"),baseMapLayers:[{id:"national-geographic-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer",title:"NatGeo World Map",showLegend:!1,layerType:"ArcGISTiledMapServiceLayer",visibility:!0,opacity:1}]},osm:{id:"osm",thumbnailUrl:(0,t.V)("esri/images/basemap/osm.jpg"),baseMapLayers:[{id:"osm-base-layer",layerType:"OpenStreetMap",title:"Open Street Map",showLegend:!1,visibility:!0,opacity:1}]},"dark-gray-vector":{id:"dark-gray-vector",thumbnailUrl:(0,t.V)("esri/images/basemap/dark-gray-vector.jpg"),baseMapLayers:[{id:"dark-gray-base-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/5e9b3685f4c24d8781073dd928ebda50/resources/styles/root.json",layerType:"VectorTileLayer",title:"Dark Gray Base",visibility:!0,opacity:1},{id:"dark-gray-reference-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/747cb7a5329c478cbe6981076cc879c5/resources/styles/root.json",layerType:"VectorTileLayer",title:"Dark Gray Reference",isReference:!0,visibility:!0,opacity:1}]},"gray-vector":{id:"gray-vector",thumbnailUrl:(0,t.V)("esri/images/basemap/gray-vector.jpg"),baseMapLayers:[{id:"gray-base-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/291da5eab3a0412593b66d384379f89f/resources/styles/root.json",layerType:"VectorTileLayer",title:"Light Gray Base",visibility:!0,opacity:1},{id:"gray-reference-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/1768e8369a214dfab4e2167d5c5f2454/resources/styles/root.json",layerType:"VectorTileLayer",title:"Light Gray Reference",isReference:!0,visibility:!0,opacity:1}]},"streets-vector":{id:"streets-vector",thumbnailUrl:(0,t.V)("esri/images/basemap/streets-vector.jpg"),baseMapLayers:[{id:"streets-vector-base-layer",styleUrl:"//cdn.arcgis.com/sharing/rest/content/items/de26a3cf4cc9451298ea173c4b324736/resources/styles/root.json",layerType:"VectorTileLayer",title:"World Streets",visibility:!0,opacity:1}]},"topo-vector":{id:"topo-vector",thumbnailUrl:(0,t.V)("esri/images/basemap/topo-vector.jpg"),baseMapLayers:[{id:"world-hillshade-layer",url:"//services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Hillshade",showLegend:!1,visibility:!0,opacity:1},{id:"topo-vector-base-layer",styleUrl:"//cdn.arcgis.com/sharing/rest/content/items/7dc6cea0b1764a1f9af2e679f642f0f5/resources/styles/root.json",layerType:"VectorTileLayer",title:"World Topo",visibility:!0,opacity:1}]},"streets-night-vector":{id:"streets-night-vector",thumbnailUrl:(0,t.V)("esri/images/basemap/streets-night.jpg"),baseMapLayers:[{id:"streets-night-vector-base-layer",styleUrl:"//cdn.arcgis.com/sharing/rest/content/items/86f556a2d1fd468181855a35e344567f/resources/styles/root.json",layerType:"VectorTileLayer",title:"World Streets Night",visibility:!0,opacity:1}]},"streets-relief-vector":{id:"streets-relief-vector",thumbnailUrl:(0,t.V)("esri/images/basemap/streets-relief.jpg"),baseMapLayers:[{id:"world-hillshade-layer",url:"//services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Hillshade",showLegend:!1,visibility:!0,opacity:1},{id:"streets-relief-vector-base-layer",styleUrl:"//www.arcgis.com/sharing/rest/content/items/b266e6d17fc345b498345613930fbd76/resources/styles/root.json",title:"World Streets Relief",layerType:"VectorTileLayer",visibility:!0,opacity:1}]},"streets-navigation-vector":{id:"streets-navigation-vector",thumbnailUrl:(0,t.V)("esri/images/basemap/streets-navigation.jpg"),baseMapLayers:[{id:"streets-navigation-vector-base-layer",styleUrl:"//cdn.arcgis.com/sharing/rest/content/items/63c47b7177f946b49902c24129b87252/resources/styles/root.json",layerType:"VectorTileLayer",title:"World Streets Navigation",visibility:!0,opacity:1}]},"arcgis-imagery":{thumbnailUrl:(0,t.V)("esri/images/basemap/hybrid.jpg"),title:"Imagery Hybrid",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Imagery",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/World_Imagery/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Imagery:Labels",title:"Hybrid Reference Layer",isReference:!0}]},"arcgis-imagery-standard":{thumbnailUrl:(0,t.V)("esri/images/basemap/satellite.jpg"),title:"Imagery",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Imagery",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/World_Imagery/MapServer"}]},"arcgis-imagery-labels":{title:"Hybrid [Reference]",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Imagery:Labels",title:"Hybrid Reference Layer",isReference:!0}]},"arcgis-light-gray":{thumbnailUrl:(0,t.V)("esri/images/basemap/gray-vector.jpg"),title:"Light Gray Canvas",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:LightGray:Base",title:"Light Gray Canvas Base"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:LightGray:Labels",title:"Light Gray Canvas Labels",isReference:!0}]},"arcgis-dark-gray":{thumbnailUrl:(0,t.V)("esri/images/basemap/dark-gray.jpg"),title:"Dark Gray Canvas",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:DarkGray:Base",title:"Dark Gray Canvas Base"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:DarkGray:Labels",title:"Dark Gray Canvas Labels",isReference:!0}]},"arcgis-navigation":{thumbnailUrl:(0,t.V)("esri/images/basemap/streets-navigation.jpg"),title:"Navigation",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Navigation",title:"World Navigation Map"}]},"arcgis-navigation-night":{title:"Navigation (Dark Mode)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:NavigationNight",title:"World Navigation Map (Dark Mode)"}]},"arcgis-streets":{thumbnailUrl:(0,t.V)("esri/images/basemap/streets-vector.jpg"),title:"Streets",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Streets",title:"World Street Map"}]},"arcgis-streets-night":{thumbnailUrl:(0,t.V)("esri/images/basemap/streets-night.jpg"),title:"Streets (Night)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:StreetsNight",title:"World Street Map (Night)"}]},"arcgis-streets-relief":{thumbnailUrl:(0,t.V)("esri/images/basemap/streets-relief.jpg"),title:"Streets (with Relief)",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:StreetsRelief:Base",title:"World Street Map (with Relief)"}]},"arcgis-topographic":{thumbnailUrl:(0,t.V)("esri/images/basemap/topo.jpg"),title:"Topographic",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Topographic:Base",title:"World Topographic Map"}]},"arcgis-oceans":{thumbnailUrl:(0,t.V)("esri/images/basemap/oceans.jpg"),title:"Oceans",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Ocean Base",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Oceans:Labels",title:"World Ocean Reference",isReference:!0}]},"osm-standard":{title:"OpenStreetMap",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:Standard",title:"OpenStreetMap"}]},"osm-standard-relief":{title:"OpenStreetMap (with relief)",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:StandardRelief:Base",layerType:"VectorTileLayer",title:"OpenStreetMap Relief Base"}]},"osm-streets":{title:"OpenStreetMap (Streets)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:Streets",title:"OpenStreetMap (Streets)"}]},"osm-streets-relief":{title:"OpenStreetMap (Streets with relief)",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:StreetsRelief:Base",layerType:"VectorTileLayer",title:"OpenStreetMap Relief Base"}]},"osm-light-gray":{title:"OpenStreetMap (Light Gray Canvas)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:LightGray:Base",title:"OSM (Light Gray Base)"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:LightGray:Labels",title:"OSM (Light Gray Reference)",isReference:!0}]},"osm-dark-gray":{title:"OpenStreetMap (Dark Gray Canvas)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:DarkGray:Base",title:"OSM (Dark Gray Base)"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:DarkGray:Labels",title:"OSM (Dark Gray Reference)",isReference:!0}]},"arcgis-terrain":{title:"Terrain with Labels",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Terrain:Base",title:"World Terrain Base"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Terrain:Detail",title:"World Terrain Reference",isReference:!0}]},"arcgis-community":{title:"Community",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Community",title:"Community"}]},"arcgis-charted-territory":{title:"Charted Territory",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:ChartedTerritory:Base",title:"Charted Territory"}]},"arcgis-colored-pencil":{title:"Colored Pencil",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:ColoredPencil",title:"Colored Pencil"}]},"arcgis-nova":{title:"Nova",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Nova",title:"Nova"}]},"arcgis-modern-antique":{title:"Modern Antique",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:ModernAntique:Base",title:"Modern Antique"}]},"arcgis-midcentury":{title:"Mid-Century",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Midcentury",title:"Mid-Century"}]},"arcgis-newspaper":{title:"Newspaper",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Newspaper",title:"Newspaper"}]},"arcgis-hillshade-light":{title:"Hillshade",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"}]},"arcgis-hillshade-dark":{title:"Hillshade (Dark)",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade (Dark)",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade_Dark/MapServer"}]}}},87837:(e,r,a)=>{"use strict";a.d(r,{Nw:()=>d});var s=a(82550),t=a(10103),i=a(59472),l=a(25881),c=a(32656);const o=new Set(["bing-maps","open-street-map","tile","unknown","unsupported","vector-tile","web-tile"]),y=new Set(["csv","feature","geo-rss","group","kml","tile","unknown","unsupported","vector-tile","web-tile"]);function p(e){return!("feature"!==e.type||e.url||!e.source||"memory"!==e.source.type)}function n(e,r){if(r.restrictedWebMapWriting){const a=function(e){return"basemap"===e.layerContainerType?o:"operational-layers"===e.layerContainerType?y:null}(r);return!(0,i.pC)(a)||a.has(e.type)&&!p(e)}return!0}function d(e,r,a){if(!("write"in e)||!e.write)return a&&a.messages&&a.messages.push(new c.Z("layer:unsupported",`Layers (${e.title}, ${e.id}) of type '${e.declaredClass}' cannot be persisted`,{layer:e})),null;if(n(e,a)){const r={};return e.write(r,a)?r:null}return(0,i.pC)(r)&&function(e,r){if(function(e,r){if(p(e)){const a=(0,t.hS)("featureCollection.layers",r),s=a&&a[0]&&a[0].layerDefinition;s&&("maxScale"in e&&(s.maxScale=(0,l.k)(e.maxScale)),"minScale"in e&&(s.minScale=(0,l.k)(e.minScale)))}else"group"!==e.type&&("maxScale"in e&&(r.maxScale=(0,l.k)(e.maxScale)),"minScale"in e&&(r.minScale=(0,l.k)(e.minScale)))}(e,r),"blendMode"in e&&(r.blendMode=e.blendMode,"normal"===r.blendMode&&delete r.blendMode),r.opacity=(0,l.k)(e.opacity),r.title=e.title||"Layer",r.visibility=e.visible,"legendEnabled"in e&&"wmts"!==e.type)if(p(e)){const a=r.featureCollection;a&&(a.showLegend=e.legendEnabled)}else r.showLegend=e.legendEnabled}(e,r=(0,s.d9)(r)),r}}}]);
//# sourceMappingURL=2696.js.map