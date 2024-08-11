(function(c,g){typeof exports=="object"&&typeof module<"u"?g(exports,require("three")):typeof define=="function"&&define.amd?define(["exports","three"],g):(c=typeof globalThis<"u"?globalThis:c||self,g(c["@dgreenheck-tree-js"]={},c.THREE))})(this,function(c,g){"use strict";var N=Object.defineProperty;var W=(c,g,b)=>g in c?N(c,g,{enumerable:!0,configurable:!0,writable:!0,value:b}):c[g]=b;var y=(c,g,b)=>(W(c,typeof g!="symbol"?g+"":g,b),b);var b=typeof document<"u"?document.currentScript:null;function F(p){const d=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(p){for(const e in p)if(e!=="default"){const n=Object.getOwnPropertyDescriptor(p,e);Object.defineProperty(d,e,n.get?n:{enumerable:!0,get:()=>p[e]})}}return d.default=p,Object.freeze(d)}const t=F(g);class Q{constructor(d){y(this,"m_w",123456789);y(this,"m_z",987654321);y(this,"mask",4294967295);this.m_w=123456789+d&this.mask,this.m_z=987654321-d&this.mask}random(d=1,e=0){this.m_z=36969*(this.m_z&65535)+(this.m_z>>16)&this.mask,this.m_w=18e3*(this.m_w&65535)+(this.m_w>>16)&this.mask;let n=(this.m_z<<16)+(this.m_w&65535)>>>0;return n/=4294967296,(d-e)*n+e}}class ${constructor(d=new t.Vector3,e=new t.Euler,n=0,s=0,u=0,h=0,l=0){this.origin=d.clone(),this.orientation=e.clone(),this.length=n,this.radius=s,this.level=u,this.sectionCount=h,this.segmentCount=l}}const O={Birch:"birch",Oak:"oak",Pine:"pine",Willow:"willow"},V={Single:"single",Double:"double"},E={Ash:"ash",Aspen:"aspen",Pine:"pine",Oak:"oak"},k={Ash:"ash",Aspen:"aspen",Pine:"pine",Oak:"oak"},M={Deciduous:"deciduous",Evergreen:"evergreen"};class _{constructor(){this.seed=0,this.type=M.Deciduous,this.bark={type:O.Oak,tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},this.branch={levels:3,angle:{1:70,2:60,3:60},children:{0:7,1:7,2:5},force:{direction:{x:0,y:1,z:0},strength:.01},gnarliness:{0:.15,1:.2,2:.3,3:.02},length:{0:20,1:20,2:10,3:1},radius:{0:1.5,1:.7,2:.7,3:.7},sections:{0:12,1:10,2:8,3:6},segments:{0:8,1:6,2:4,3:3},start:{1:.4,2:.3,3:.3},taper:{0:.7,1:.7,2:.7,3:.7},twist:{0:0,1:0,2:0,3:0}},this.leaves={type:E.Oak,billboard:V.Double,angle:10,count:1,start:0,size:2.5,sizeVariance:.7,tint:16777215,alphaTest:.5}}}const j={seed:31701,type:"deciduous",bark:{type:"oak",tint:13552830,flatShading:!1,textured:!0,textureScale:{x:1,y:3}},branch:{levels:3,angle:{1:48,2:75,3:60},children:{0:7,1:4,2:3},force:{direction:{x:0,y:1,z:0},strength:0},gnarliness:{0:.18,1:.25,2:.2,3:.09},length:{0:20,1:18,2:9.51,3:4.6},radius:{0:1.5,1:.63,2:.76,3:.7},sections:{0:12,1:10,2:10,3:10},segments:{0:8,1:6,2:4,3:3},start:{1:.12,2:.33,3:0},taper:{0:.7,1:.7,2:.7,3:.7},twist:{0:.13,1:-.07,2:0,3:0}},leaves:{type:"ash",billboard:"double",angle:55,count:6,start:0,size:2.665,sizeVariance:.717,tint:16777215,alphaTest:.5}},C={seed:18020,type:"deciduous",bark:{type:"birch",tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},branch:{levels:2,angle:{1:75,2:32,3:7},children:{0:10,1:3,2:3},force:{direction:{x:0,y:1,z:0},strength:.0148},gnarliness:{0:.05,1:.12,2:.12,3:.02},length:{0:50,1:6.07,2:11.19,3:1},radius:{0:.72,1:.41,2:.7,3:.7},sections:{0:12,1:10,2:8,3:6},segments:{0:8,1:6,2:4,3:3},start:{1:.59,2:.35,3:0},taper:{0:.37,1:.13,2:.7,3:.7},twist:{0:0,1:0,2:0,3:0}},leaves:{type:"aspen",billboard:"double",angle:30,count:11,start:.124,size:2.5,sizeVariance:.7,tint:16775778,alphaTest:.5}},L={seed:17124,type:"deciduous",bark:{type:"oak",tint:11902609,flatShading:!1,textured:!0,textureScale:{x:1,y:10}},branch:{levels:3,angle:{1:54,2:48,3:60},children:{0:5,1:7,2:5},force:{direction:{x:0,y:1,z:0},strength:0},gnarliness:{0:-.04,1:.32,2:.29,3:.02},length:{0:15.59,1:12.66,2:11.93,3:1},radius:{0:2,1:.69,2:.41,3:.7},sections:{0:16,1:16,2:8,3:1},segments:{0:8,1:6,2:4,3:3},start:{1:.19,2:.21,3:.54},taper:{0:.49,1:.43,2:.7,3:.7},twist:{0:.06,1:-.12,2:0,3:0}},leaves:{type:"oak",billboard:"double",angle:10,count:3,start:0,size:2.125,sizeVariance:.7,tint:10546069,alphaTest:.5}},P={seed:11744,type:"evergreen",bark:{type:"pine",tint:16761758,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},branch:{levels:1,angle:{1:117,2:60,3:60},children:{0:91,1:7,2:5},force:{direction:{x:0,y:1,z:0},strength:0},gnarliness:{0:.05,1:.08,2:0,3:0},length:{0:39.55,1:12.12,2:10,3:1},radius:{0:.55,1:.41,2:.7,3:.7},sections:{0:12,1:10,2:8,3:6},segments:{0:8,1:6,2:4,3:3},start:{1:.16,2:.3,3:.3},taper:{0:.7,1:.7,2:.7,3:.7},twist:{0:0,1:0,2:0,3:0}},leaves:{type:"pine",billboard:"double",angle:10,count:21,start:0,size:.965,sizeVariance:.7,tint:16777215,alphaTest:.5}};function q(p){switch(p){case k.Ash:return j;case k.Aspen:return C;case k.Oak:return L;case k.Pine:return P;default:return new _}}const T={},I=new t.TextureLoader,A=(p,d={x:1,y:1},e=null)=>{if(!T[p]){const s=new URL("../src/textures/"+p,typeof document>"u"&&typeof location>"u"?require("url").pathToFileURL(__filename).href:typeof document>"u"?location.href:b&&b.src||new URL("@dgreenheck-tree-js.umd.js",document.baseURI).href).href;T[p]=I.load(s)}const n=T[p];return n.wrapS=t.MirroredRepeatWrapping,n.wrapT=t.MirroredRepeatWrapping,n.repeat.x=d.x,n.repeat.y=1/d.y,e&&(n.colorSpace=e,n.premultiplyAlpha=!0),n};class R extends t.Group{constructor(e=new _){super();y(this,"rng");y(this,"options");y(this,"branchQueue",[]);this.branchesMesh=new t.Mesh,this.leavesMesh=new t.Mesh,this.add(this.branchesMesh),this.add(this.leavesMesh),this.options=e}loadPreset(e){this.options=q(e),this.generate()}generate(){for(this.branches={verts:[],normals:[],indices:[],uvs:[]},this.leaves={verts:[],normals:[],indices:[],uvs:[]},this.rng=new Q(this.options.seed),this.branchQueue.push(new $(new t.Vector3,new t.Euler,this.options.branch.length[0],this.options.branch.radius[0],0,this.options.branch.sections[0],this.options.branch.segments[0]));this.branchQueue.length>0;){const e=this.branchQueue.shift();this.generateBranch(e)}this.createBranchesGeometry(),this.createLeavesGeometry()}generateBranch(e){const n=this.branches.verts.length/3;let s=e.orientation.clone(),u=e.origin.clone(),h=e.length/e.sectionCount/(this.options.type==="Deciduous"?this.options.branch.levels-1:1),l=[];for(let r=0;r<=e.sectionCount;r++){let a=e.radius;r===e.sectionCount&&e.level===this.options.branch.levels?a=.001:this.options.type===M.Deciduous?a*=1-this.options.branch.taper[e.level]*(r/e.sectionCount):this.options.type===M.Evergreen&&(a*=1-r/e.sectionCount);let i;for(let m=0;m<e.segmentCount;m++){let v=2*Math.PI*m/e.segmentCount;const w=new t.Vector3(Math.cos(v),0,Math.sin(v)).multiplyScalar(a).applyEuler(s).add(u),x=new t.Vector3(Math.cos(v),0,Math.sin(v)).applyEuler(s).normalize(),B=new t.Vector2(m/e.segmentCount,r%2===0?0:1);this.branches.verts.push(...Object.values(w)),this.branches.normals.push(...Object.values(x)),this.branches.uvs.push(...Object.values(B)),m===0&&(i={vertex:w,normal:x,uv:B})}this.branches.verts.push(...Object.values(i.vertex)),this.branches.normals.push(...Object.values(i.normal)),this.branches.uvs.push(1,i.uv.y),l.push({origin:u.clone(),orientation:s.clone(),radius:a}),u.add(new t.Vector3(0,h,0).applyEuler(s));const o=Math.max(1,1/Math.sqrt(a))*this.options.branch.gnarliness[e.level];s.x+=this.rng.random(o,-o),s.z+=this.rng.random(o,-o);const f=new t.Quaternion().setFromEuler(s),S=new t.Quaternion().setFromAxisAngle(new t.Vector3(0,1,0),this.options.branch.twist[e.level]),z=new t.Quaternion().setFromUnitVectors(new t.Vector3(0,1,0),new t.Vector3().copy(this.options.branch.force.direction));f.multiply(S),f.rotateTowards(z,this.options.branch.force.strength/a),s.setFromQuaternion(f)}if(this.generateBranchIndices(n,e),this.options.type==="deciduous"){const r=l[l.length-1];e.level<this.options.branch.levels?this.branchQueue.push(new $(r.origin,r.orientation,this.options.branch.length[e.level+1],r.radius,e.level+1,e.sectionCount,e.segmentCount)):this.generateLeaf(r.origin,r.orientation)}e.level===this.options.branch.levels?this.generateLeaves(l):e.level<this.options.branch.levels&&this.generateChildBranches(this.options.branch.children[e.level],e.level+1,l)}generateChildBranches(e,n,s){const u=this.rng.random();for(let h=0;h<e;h++){let l=this.rng.random(1,this.options.branch.start[n]);const r=Math.floor(l*(s.length-1));let a,i;a=s[r],r===s.length-1?i=a:i=s[r+1];const o=(l-r/(s.length-1))/(1/(s.length-1)),f=new t.Vector3().lerpVectors(a.origin,i.origin,o),S=this.options.branch.radius[n]*((1-o)*a.radius+o*i.radius),z=new t.Quaternion().setFromEuler(a.orientation),m=new t.Quaternion().setFromEuler(i.orientation),v=new t.Euler().setFromQuaternion(m.slerp(z,o)),w=2*Math.PI*(u+h/e),x=new t.Quaternion().setFromAxisAngle(new t.Vector3(1,0,0),this.options.branch.angle[n]/(180/Math.PI)),B=new t.Quaternion().setFromAxisAngle(new t.Vector3(0,1,0),w),D=new t.Quaternion().setFromEuler(v),G=new t.Euler().setFromQuaternion(D.multiply(B.multiply(x)));let U=this.options.branch.length[n]*(this.options.type===M.Evergreen?1-l:1);this.branchQueue.push(new $(f,G,U,S,n,this.options.branch.sections[n],this.options.branch.segments[n]))}}generateLeaves(e){const n=this.rng.random();for(let s=0;s<this.options.leaves.count;s++){let u=this.rng.random(1,this.options.leaves.start);const h=Math.floor(u*(e.length-1));let l,r;l=e[h],h===e.length-1?r=l:r=e[h+1];const a=(u-h/(e.length-1))/(1/(e.length-1)),i=new t.Vector3().lerpVectors(l.origin,r.origin,a),o=new t.Quaternion().setFromEuler(l.orientation),f=new t.Quaternion().setFromEuler(r.orientation),S=new t.Euler().setFromQuaternion(f.slerp(o,a)),z=2*Math.PI*(n+s/this.options.leaves.count),m=new t.Quaternion().setFromAxisAngle(new t.Vector3(1,0,0),this.options.leaves.angle/(180/Math.PI)),v=new t.Quaternion().setFromAxisAngle(new t.Vector3(0,1,0),z),w=new t.Quaternion().setFromEuler(S),x=new t.Euler().setFromQuaternion(w.multiply(v.multiply(m)));this.generateLeaf(i,x)}}generateLeaf(e,n){let s=this.leaves.verts.length/3,u=this.options.leaves.size*(1+this.rng.random(this.options.leaves.sizeVariance,-this.options.leaves.sizeVariance));const h=u,l=1.5*u,r=a=>{const i=[new t.Vector3(-h/2,l,0),new t.Vector3(-h/2,0,0),new t.Vector3(h/2,0,0),new t.Vector3(h/2,l,0)].map(f=>f.applyEuler(new t.Euler(0,a,0)).applyEuler(n).add(e));this.leaves.verts.push(i[0].x,i[0].y,i[0].z,i[1].x,i[1].y,i[1].z,i[2].x,i[2].y,i[2].z,i[3].x,i[3].y,i[3].z);const o=new t.Vector3(0,0,1).applyEuler(n);this.leaves.normals.push(o.x,o.y,o.z,o.x,o.y,o.z,o.x,o.y,o.z,o.x,o.y,o.z),this.leaves.uvs.push(0,1,0,0,1,0,1,1),this.leaves.indices.push(s,s+1,s+2,s,s+2,s+3),s+=4};r(0),this.options.leaves.billboard===V.Double&&r(Math.PI/2)}generateBranchIndices(e,n){let s,u,h,l;const r=n.segmentCount+1;for(let a=0;a<n.sectionCount;a++)for(let i=0;i<n.segmentCount;i++)s=e+a*r+i,u=e+a*r+(i+1),h=s+r,l=u+r,this.branches.indices.push(s,h,u,u,h,l)}createBranchesGeometry(){const e=new t.BufferGeometry;e.setAttribute("position",new t.BufferAttribute(new Float32Array(this.branches.verts),3)),e.setAttribute("normal",new t.BufferAttribute(new Float32Array(this.branches.normals),3)),e.setAttribute("uv",new t.BufferAttribute(new Float32Array(this.branches.uvs),2)),e.setIndex(new t.BufferAttribute(new Uint16Array(this.branches.indices),1)),e.computeBoundingSphere();const n=new t.MeshStandardMaterial({name:"branches",flatShading:this.options.bark.flatShading,color:this.options.bark.tint});if(this.branchesMesh.geometry.dispose(),this.branchesMesh.geometry=e,this.branchesMesh.material.dispose(),this.branchesMesh.material=n,this.branchesMesh.castShadow=!0,this.branchesMesh.receiveShadow=!0,this.options.bark.textured){const s=this.options.bark.textureScale;this.branchesMesh.material.aoMap=A(`bark/${this.options.bark.type}_ao_1k.jpg`,s),this.branchesMesh.material.map=A(`bark/${this.options.bark.type}_color_1k.jpg`,s),this.branchesMesh.material.normalMap=A(`bark/${this.options.bark.type}_normal_1k.jpg`,s),this.branchesMesh.material.roughnessMap=A(`bark/${this.options.bark.type}_roughness_1k.jpg`,s)}}createLeavesGeometry(){const e=new t.BufferGeometry;e.setAttribute("position",new t.BufferAttribute(new Float32Array(this.leaves.verts),3)),e.setAttribute("uv",new t.BufferAttribute(new Float32Array(this.leaves.uvs),2)),e.setIndex(new t.BufferAttribute(new Uint16Array(this.leaves.indices),1)),e.computeVertexNormals(),e.computeBoundingSphere();const n=new t.MeshStandardMaterial({name:"leaves",color:this.options.leaves.tint,side:t.DoubleSide,alphaTest:this.options.leaves.alphaTest});this.leavesMesh.geometry.dispose(),this.leavesMesh.geometry=e,this.leavesMesh.material.dispose(),this.leavesMesh.material=n,this.leavesMesh.material.map=A(`leaves/${this.options.leaves.type}_color.png`,new t.Vector2(1,1),t.SRGBColorSpace),this.leavesMesh.castShadow=!0,this.leavesMesh.receiveShadow=!0}}c.BarkType=O,c.Billboard=V,c.LeafType=E,c.Presets=k,c.Tree=R,c.TreeType=M,Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=@dgreenheck-tree-js.umd.js.map
