self.webpackChunkRemoteClient([204],{221:function(e,t,s){"use strict";s.r(t);var i,r=s(18),n=(s(7),s(5)),o=s(1),a=s(37),l=s(3),c=(s(4),s(20)),u=s(19),h=s(51),b=s(14),p=(s(24),s(34),s(35),s(2)),f=s(182),y=s(71),d=s(60),m=s(264),g=s(55),j=s(154),O=s(238),_=s(199);const w=l.a.getLogger("esri.renderers.DictionaryRenderer");let v=i=class extends(Object(O.a)(j.a)){constructor(e){super(e),this._ongoingRequests=new Map,this._symbolCache=new _.a(100),this.config=null,this.fieldMap=null,this.scaleExpression=null,this.scaleExpressionTitle=null,this.url=null,this.type="dictionary"}writeData(e,t){e&&(t.scalingExpressionInfo={expression:e,returnType:"number"})}writeVisualVariables(e,t,s,i){null!=i&&i.origin||super.writeVisualVariables(e,t,s,i)}clone(){return new i({config:Object(n.a)(this.config),scaleExpression:this.scaleExpression,scaleExpressionTitle:this.scaleExpressionTitle,fieldMap:Object(n.a)(this.fieldMap),url:Object(n.a)(this.url),visualVariables:Object(n.a)(this.visualVariables)})}async getSymbolAsync(e,t){let s;this._dictionaryPromise||(this._dictionaryPromise=this.fetchResources(t));try{s=await this._dictionaryPromise}catch(e){if(Object(p.l)(e))return this._dictionaryPromise=null,null}const i={};if(this.fieldMap)for(const t of this._symbolFields){const s=this.fieldMap[t];if(s&&null!==e.attributes[s]&&void 0!==e.attributes[s]){const r=""+e.attributes[s];i[t]=r}else i[t]=""}const r=s(i,t);if(!r||"string"!=typeof r)return null;const n=Object(a.b)(r).toString(),o=this._symbolCache.get(n);if(o)return o.catch((()=>{this._symbolCache.pop(n)})),o;const l=r.split(";"),c=[],u=[];for(const e of l)if(e&&0!==e.length)if(-1===e.indexOf("po:"))if(-1!==e.indexOf("|"))for(const t of e.split("|"))this._itemNames.has(t)&&c.push(t);else this._itemNames.has(e)&&c.push(e);else{const t=e.substr(3).split("|");if(3===t.length){const e=t[0],s=t[1];let i=t[2];if("DashTemplate"===s)i=i.split(" ").map((e=>Number(e)));else if("Color"===s){const e=new d.a(i).toRgba();i=[e[0],e[1],e[2],255*e[3]]}else i=Number(i);u.push({primitiveName:e,propertyName:s,value:i})}}const h=this._cimPartsToCIMSymbol(c,u,t);return this._symbolCache.put(n,h,1),h}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t),this.scaleExpression&&await Object(y.a)(e,t,this.scaleExpression);const s=t.map((e=>e.name));for(const t in this.fieldMap)s.indexOf(this.fieldMap[t])<0||e.add(this.fieldMap[t])}get arcadeRequired(){return!0}async fetchResources(e){if(this._dictionaryPromise)return this._dictionaryPromise;if(!this.url)return void w.error("no valid URL!");const t=Object(o.g)(e)?e.abortOptions:null,s=Object(g.default)(this.url+"/resources/styles/dictionary-info.json",{responseType:"json",query:{f:"json"},...t}),[{data:i}]=await Object(p.b)([s,Object(f.e)()]);if(!i)throw this._dictionaryPromise=null,new b.a("esri.renderers.DictionaryRenderer","Bad dictionary data!");const r=i.expression,n=i.authoringInfo;this._refSymbolUrlTemplate=this.url+"/"+i.cimRefTemplateUrl,this._itemNames=new Set(i.itemsNames),this._symbolFields=n.symbol;const a={};if(this.config){const e=this.config;for(const t in e)a[t]=e[t]}for(const e of n.configuration)a.hasOwnProperty(e.name)||(a[e.name]=e.value);const l=[];if(Object(o.g)(e)&&e.fields&&this.fieldMap)for(const t of this._symbolFields){const s=this.fieldMap[t],i=e.fields.filter((e=>e.name===s));i.length>0&&l.push({...i[0],name:t})}return this._dictionaryPromise=Object(f.b)(r,Object(o.g)(e)?e.spatialReference:null,l,a).then((e=>{const t={scale:0};return(s,i)=>{const r=e.repurposeFeature({geometry:null,attributes:s});return t.scale=Object(o.g)(i)?i.scale:void 0,e.evaluate({$feature:r,$view:t})}})).catch((e=>(w.error("Creating dictinoary expression failed:",e),null))),this._dictionaryPromise}getSymbol(){return null}getSymbols(){return[]}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce(((e,t)=>e+t.getAttributeHash()),"")}getMeshHash(){return`${this.url}-${JSON.stringify(this.fieldMap)}`}getSymbolFields(){return this._symbolFields}async _getSymbolPart(e,t){if(this._ongoingRequests.has(e))return this._ongoingRequests.get(e).then((e=>e.data));const s=this._refSymbolUrlTemplate.replace(/\{itemName\}/gi,e),i=Object(g.default)(s,{responseType:"json",query:{f:"json"},...t});this._ongoingRequests.set(e,i);try{return(await i).data}catch(t){return this._ongoingRequests.delete(e),Object(p.r)(t)}}_combineSymbolParts(e,t){if(!e||0===e.length)return null;if(1===e.length)return{type:"CIMSymbolReference",symbol:e[0],primitiveOverrides:t};const s={...e[0]};s.symbolLayers=[];for(const t of e){const e=t;s.symbolLayers.unshift(...e.symbolLayers)}return{type:"CIMSymbolReference",symbol:s,primitiveOverrides:t}}async _cimPartsToCIMSymbol(e,t,s){const i=new Array(e.length);for(let t=0;t<e.length;t++)i[t]=this._getSymbolPart(e[t],s);const r=await Object(p.b)(i);return new m.a({data:this._combineSymbolParts(r,t)})}};Object(r.a)([Object(c.b)({type:Object,json:{read:{source:"configuration"},write:{target:"configuration"}}})],v.prototype,"config",void 0),Object(r.a)([Object(c.b)({type:Object,json:{write:!0}})],v.prototype,"fieldMap",void 0),Object(r.a)([Object(c.b)({type:String,json:{read:{source:"scalingExpressionInfo.expression"},write:!0}})],v.prototype,"scaleExpression",void 0),Object(r.a)([Object(h.a)("scaleExpression")],v.prototype,"writeData",null),Object(r.a)([Object(c.b)({type:String,json:{read:{source:"scalingExpressionInfo.title"},write:{target:"scalingExpressionInfo.title",overridePolicy(e){return{enabled:!!e&&!!this.scaleExpression}}}}})],v.prototype,"scaleExpressionTitle",void 0),Object(r.a)([Object(c.b)({type:String,json:{write:!0}})],v.prototype,"url",void 0),Object(r.a)([Object(h.a)("visualVariables")],v.prototype,"writeVisualVariables",null),v=i=Object(r.a)([Object(u.a)("esri.renderers.DictionaryRenderer")],v);var x=v;t.default=x}});