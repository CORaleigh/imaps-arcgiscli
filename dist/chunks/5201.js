(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[5201],{75201:(e,n,t)=>{"use strict";t.r(n),t.d(n,{registerFunctions:()=>p});var r=t(39105),a=t(39718),i=t(45674),s=t(28022),l=t(18136),u=t(41700),c=t(30329);function o(e){return e instanceof a.Z}function f(e,n,t,f,p){return p(e,n,(function(e,n,p){if(p.length<2)return f(new Error("Missing Parameters"));if(null===(p=(0,i.J)(p))[0]&&null===p[1])return(0,r.resolve)(!1);if((0,i.z)(p[0]))return p[1]instanceof a.Z?(0,r.resolve)(new c.Z({parentfeatureset:p[0],relation:t,relationGeom:p[1]})):null===p[1]?(0,r.resolve)(new u.Z({parentfeatureset:p[0]})):f("Spatial Relation cannot accept this parameter type");if(o(p[0])){if(o(p[1])){let e=null;switch(t){case"esriSpatialRelEnvelopeIntersects":e=(0,l.kK)((0,s.SV)(p[0]),(0,s.SV)(p[1]));break;case"esriSpatialRelIntersects":e=(0,l.kK)(p[0],p[1]);break;case"esriSpatialRelContains":e=(0,l.r3)(p[0],p[1]);break;case"esriSpatialRelOverlaps":e=(0,l.Nm)(p[0],p[1]);break;case"esriSpatialRelWithin":e=(0,l.uh)(p[0],p[1]);break;case"esriSpatialRelTouches":e=(0,l.W4)(p[0],p[1]);break;case"esriSpatialRelCrosses":e=(0,l.jU)(p[0],p[1])}return null!==e?e:(0,r.reject)(new Error("Unrecognised Relationship"))}return(0,i.z)(p[1])?(0,r.resolve)(new c.Z({parentfeatureset:p[1],relation:t,relationGeom:p[0]})):null===p[1]?(0,r.resolve)(!1):f("Spatial Relation cannot accept this parameter type")}return null!==p[0]?f("Spatial Relation cannot accept this parameter type"):(0,i.z)(p[1])?(0,r.resolve)(new u.Z({parentfeatureset:p[1]})):p[1]instanceof a.Z||null===p[1]?(0,r.resolve)(!1):void 0}))}function p(e){"async"===e.mode&&(e.functions.intersects=function(n,t){return f(n,t,"esriSpatialRelIntersects",e.failDefferred,e.standardFunctionAsync)},e.functions.envelopeintersects=function(n,t){return f(n,t,"esriSpatialRelEnvelopeIntersects",e.failDefferred,e.standardFunctionAsync)},e.signatures.push({name:"envelopeintersects",min:"2",max:"2"}),e.functions.contains=function(n,t){return f(n,t,"esriSpatialRelContains",e.failDefferred,e.standardFunctionAsync)},e.functions.overlaps=function(n,t){return f(n,t,"esriSpatialRelOverlaps",e.failDefferred,e.standardFunctionAsync)},e.functions.within=function(n,t){return f(n,t,"esriSpatialRelWithin",e.failDefferred,e.standardFunctionAsync)},e.functions.touches=function(n,t){return f(n,t,"esriSpatialRelTouches",e.failDefferred,e.standardFunctionAsync)},e.functions.crosses=function(n,t){return f(n,t,"esriSpatialRelCrosses",e.failDefferred,e.standardFunctionAsync)},e.functions.relate=function(n,t){return e.standardFunctionAsync(n,t,(function(e,n,t){if(t=(0,i.J)(t),(0,i.p)(t,3,3),o(t[0])&&o(t[1]))return(0,l.LV)(t[0],t[1],(0,i.e)(t[2]));if(t[0]instanceof a.Z&&null===t[1])return!1;if(t[1]instanceof a.Z&&null===t[0])return!1;if((0,i.z)(t[0])&&null===t[1])return new u.Z({parentfeatureset:t[0]});if((0,i.z)(t[1])&&null===t[0])return new u.Z({parentfeatureset:t[1]});if((0,i.z)(t[0])&&t[1]instanceof a.Z)return t[0].relate(t[1],(0,i.e)(t[2]));if((0,i.z)(t[1])&&t[0]instanceof a.Z)return t[1].relate(t[0],(0,i.e)(t[2]));if(null===t[0]&&null===t[1])return!1;throw new Error("Illegal Argument")}))})}}}]);
//# sourceMappingURL=5201.js.map