(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[7061],{67061:(e,r,t)=>{"use strict";t.r(r),t.d(r,{createContextOrErrorHTML:()=>s.s,Program:()=>a.Z,BufferObject:()=>n.Z,Texture:()=>o.Z,VertexArrayObject:()=>c.Z,Renderbuffer:()=>i.Z,FramebufferObject:()=>h.Z,createProgram:()=>l.H,glslifyDefineMap:()=>l.K,ProgramCache:()=>p.Z,RenderingContext:()=>f.Z,ShaderCompiler:()=>u.Z});var s=t(27938),a=t(51007),n=t(69595),o=t(8634),c=t(74038),i=t(29581),h=t(84570),l=t(22212),p=t(99356),f=t(89930),u=t(65025)},99356:(e,r,t)=>{"use strict";t.d(r,{Z:()=>a});var s=t(22212);const a=class{constructor(e){this._programCacheByTemplate=new Map,this._rctx=e}dispose(){this._programCacheByTemplate.forEach((e=>{e.programs.forEach((e=>{e.dispose()}))})),this._programCacheByTemplate=null}getProgram(e,r){return this._programCacheByTemplate.has(e)||this.addProgramTemplate(e,(r=>(0,s.H)(this._rctx,e,r))),this.getProgramTemplateInstance(e,r)}addProgramTemplate(e,r){this._programCacheByTemplate.set(e,{constructor:r,programs:new Map})}getProgramTemplateInstance(e,r){const t=this._programCacheByTemplate.get(e);if(t){const e=r?JSON.stringify(r):"default";if(!t.programs.has(e)){const s=t.constructor(r);t.programs.set(e,s)}return t.programs.get(e)}return null}}},65025:(e,r,t)=>{"use strict";t.d(r,{Z:()=>s});const s=class{constructor(e){this.readFile=e}resolveIncludes(e){return this.resolve(e)}resolve(e,r=new Map){if(r.has(e))return r.get(e);const t=this.read(e);if(!t)throw new Error(`cannot find shader file ${e}`);const s=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;let a=s.exec(t);const n=[];for(;null!=a;)n.push({path:a[1],start:a.index,length:a[0].length}),a=s.exec(t);let o=0,c="";return n.forEach((e=>{c+=t.slice(o,e.start),c+=r.has(e.path)?"":this.resolve(e.path,r),o=e.start+e.length})),c+=t.slice(o),r.set(e,c),c}read(e){return this.readFile(e)}}},22212:(e,r,t)=>{"use strict";t.d(r,{H:()=>n,K:()=>a});var s=t(51007);function a(e){let r="";for(const t in e){const s=e[t];if("boolean"==typeof s)s&&(r+=`#define ${t}\n`);else if("number"==typeof s)r+=`#define ${t} ${s.toFixed()}\n`;else if("object"==typeof s){const e=s.options;let a=0;for(const t in e)r+=`#define ${e[t]} ${(a++).toFixed()}\n`;r+=`#define ${t} ${e[s.value]}\n`}}return r}function n(e,r,t,a){t=t||{},a=a||"";const n="function"==typeof r.shaders?r.shaders(t):r.shaders;return new s.Z(e,a+n.vertexShader,a+n.fragmentShader,r.attributes)}}}]);
//# sourceMappingURL=7061.js.map