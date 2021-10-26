!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VideoEffects=t():e.VideoEffects=t()}(self,(function(){return(()=>{var e={8166:(e,t,n)=>{"use strict";n.d(t,{H:()=>a});var r=n(6586);
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a(e,t){Array.isArray(e)||(e=[e]),e.forEach((e=>{null!=e&&r.D5U.assert("complex64"!==e.dtype,(()=>`${t} does not support complex64 tensors in the CPU backend.`))}))}},6839:(e,t,n)=>{"use strict";n.r(t),n.d(t,{MathBackendCPU:()=>o,shared:()=>i,version_cpu:()=>u});var r=n(6586),a=n(8166);
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const s=r.GDt.ZA;class o extends r.Zuw{constructor(){super(),this.blockSize=48,this.firstUse=!0,this.data=new r.JLz(this,(0,r.SRH)())}nextDataId(){return o.nextDataId++}write(e,t,n){this.firstUse&&(this.firstUse=!1,(0,r.OBj)().get("IS_NODE")&&r.Wap.warn("\n============================\nHi there 👋. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.\n============================"));const a={id:this.nextDataId()};return this.data.set(a,{values:e,dtype:n,refCount:1}),a}makeTensorInfo(e,t,n){let a;if("string"===t&&null!=n&&n.length>0&&r.D5U.isString(n[0])){const s=n.map((e=>r.D5U.encodeString(e)));a=this.write(s,e,t)}else a=this.write(n,e,t);return{dataId:a,shape:e,dtype:t}}refCount(e){if(this.data.has(e)){return this.data.get(e).refCount}return 0}incRef(e){this.data.get(e).refCount++}decRef(e){if(this.data.has(e)){this.data.get(e).refCount--}}move(e,t,n,r,a){this.data.set(e,{values:t,dtype:r,refCount:a})}numDataIds(){return this.data.numDataIds()}async read(e){return this.readSync(e)}readSync(e){const{dtype:t,complexTensorInfos:n}=this.data.get(e);if("complex64"===t){const e=this.readSync(n.real.dataId),t=this.readSync(n.imag.dataId);return r.Wap.mergeRealAndImagArrays(e,t)}return this.data.get(e).values}bufferSync(e){const t=this.readSync(e.dataId);let n=t;if("string"===e.dtype)try{n=t.map((e=>r.D5U.decodeString(e)))}catch(e){throw new Error("Failed to decode encoded string bytes into utf-8")}return(0,r.f3b)(e.shape,e.dtype,n)}makeOutput(e,t,n){const a=this.write(e,t,n);return(0,r.SRH)().makeTensorFromDataId(a,t,n,this)}disposeData(e,t=!1){if(this.data.has(e)){if(this.data.get(e).refCount--,!t&&this.data.get(e).refCount>0)return!1;const{complexTensorInfos:n}=this.data.get(e);null!=n&&(this.disposeData(n.real.dataId,!0),this.disposeData(n.imag.dataId,!0)),this.data.delete(e)}return!0}disposeIntermediateTensorInfo(e){this.disposeData(e.dataId)}async time(e){const t=r.D5U.now();e();return{kernelMs:r.D5U.now()-t}}memory(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}}where(e){(0,a.H)([e],"where");const t=this.readSync(e.dataId);return s(e.shape,t)}dispose(){}floatPrecision(){return 32}epsilon(){return super.epsilon()}}o.nextDataId=0;var i=n(5226);
/** @license See the LICENSE file. */
const u="3.9.0";
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
(0,r.jqO)("cpu",(()=>new o),1);var l=n(6738);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const c=(0,l.A)(r.SX0,(e=>e>=0?e:Math.exp(e)-1)),d={kernelName:r.SX0,backendName:"cpu",kernelFunc:c};var p=n(1775);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function h(e){const{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{alpha:i}=s;(0,a.H)([o],"leakyRelu");const u=r.D5U.sizeFromShape(o.shape),l=n.data.get(o.dataId).values,c=r.D5U.getTypedArrayFromDType("float32",u);for(let e=0;e<l.length;e++)c[e]=l[e]<0?i*l[e]:l[e];return n.makeTensorInfo(o.shape,"float32",c)}const f={kernelName:r.J$2,backendName:"cpu",kernelFunc:h};var m=n(3533);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const g=(0,m.b)(((e,t)=>e<0?t*e:e));function x(e){const{inputs:t,backend:n}=e,{x:r,alpha:s}=t;(0,a.H)([r,s],"prelu");const o=n.data.get(r.dataId).values,i=n.data.get(s.dataId).values,[u,l]=g(r.shape,s.shape,o,i,r.dtype);return n.makeTensorInfo(l,r.dtype,u)}const b={kernelName:r.o0g,backendName:"cpu",kernelFunc:x},v=(0,l.A)(r.qkr,(e=>Math.max(0,e))),k={kernelName:r.qkr,backendName:"cpu",kernelFunc:v},y=(0,l.A)(r.SbG,(e=>Math.min(Math.max(0,e),6))),I={kernelName:r.SbG,backendName:"cpu",kernelFunc:y};var w=n(108);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function C(e,t,n,r,a){if("linear"===n)return(0,p.y)({inputs:{x:t},backend:e});if("relu"===n)return v({inputs:{x:t},backend:e});if("elu"===n)return c({inputs:{x:t},backend:e});if("relu6"===n)return y({inputs:{x:t},backend:e});if("prelu"===n)return x({inputs:{x:t,alpha:r},backend:e});if("leakyrelu"===n)return h({inputs:{x:t},backend:e,attrs:{alpha:a}});if("sigmoid"===n)return(0,w.XD)({inputs:{x:t},backend:e});throw new Error(`Activation ${n} has not been implemented for the CPU backend.`)}var S=n(2779);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function $(e){const{inputs:t,backend:n,attrs:a}=e,{x:s}=t,{shape:o}=a,i=r.D5U.sizeFromShape(s.shape),u=r.D5U.inferFromImplicitShape(o,i),l=r.D5U.sizeFromShape(u);r.D5U.assert(i===l,(()=>`The new shape (${u}) has ${l} elements and the old shape (${s.shape}) has ${i} elements. The new shape and old shape must have the same number of elements.`)),n.incRef(s.dataId);const c=n.data.get(s.dataId);if(null!=c.complexTensorInfos){const e=c.complexTensorInfos.real,t=c.complexTensorInfos.imag;e.shape=u,t.shape=u}return{dataId:s.dataId,shape:u,dtype:s.dtype}}const T={kernelName:r.HZH,backendName:"cpu",kernelFunc:$};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function E(e){const{inputs:t,backend:n,attrs:s}=e,{a:o,b:i}=t,{transposeA:u,transposeB:l}=s;(0,a.H)([o,i],"matMul");const c=o.shape.length,d=i.shape.length,p=u?o.shape[c-2]:o.shape[c-1],h=l?i.shape[d-1]:i.shape[d-2],f=u?o.shape[c-1]:o.shape[c-2],m=l?i.shape[d-2]:i.shape[d-1],g=o.shape.slice(0,-2),x=i.shape.slice(0,-2),b=r.D5U.sizeFromShape(g),v=r.D5U.sizeFromShape(x),k=b===v||1===b||1===v;r.D5U.assert(c>=2&&d>=2&&k,(()=>`Error in matMul: the input batch dimensions must either be the same or at least one input batch dimension must be 1. Got input batch dimensions of (${g}) and (${x}).`));const y=(b>v?o.shape.slice(0,-2):i.shape.slice(0,-2)).concat([f,m]);r.D5U.assert(p===h,(()=>`Error in matMul: inner shapes (${p}) and (${h}) of Tensors with shapes ${o.shape} and ${i.shape} and transposeA=${u} and transposeB=${l} must match.`));const I=l?[v,m,h]:[v,h,m],w=$({inputs:{x:o},backend:n,attrs:{shape:u?[b,p,f]:[b,f,p]}}),C=$({inputs:{x:i},backend:n,attrs:{shape:I}}),S=u?w.shape[1]:w.shape[2],T=u?w.shape[2]:w.shape[1],E=l?C.shape[1]:C.shape[2],N=Math.max(b,v),R=n.data.get(w.dataId).values,D=n.data.get(C.dataId).values,A=r.D5U.computeStrides(w.shape),F=r.D5U.computeStrides(C.shape),[_,O,M]=u?[A[0],1,A[1]]:[A[0],A[1],1],[U,P,W]=l?[1,F[1],F[0]]:[F[1],1,F[0]],B=T*E,L=(0,r.f3b)([N,T,E],w.dtype),z=L.values,V=n.blockSize;for(let e=0;e<N;e++)for(let t=0;t<T;t+=V)for(let n=0;n<E;n+=V)for(let r=0;r<S;r+=V){const a=Math.min(t+V,T),s=Math.min(n+V,E),o=Math.min(r+V,S);for(let i=t;i<a;i++)for(let t=n;t<s;t++){let n=0;for(let a=r;a<o;a++){const r=Math.min(e,b-1)*_,s=Math.min(e,v-1)*W;n+=R[r+i*O+a*M]*D[a*U+t*P+s]}z[e*B+(i*E+t)]+=n}}return n.disposeIntermediateTensorInfo(w),n.disposeIntermediateTensorInfo(C),n.makeTensorInfo(y,L.dtype,L.values)}const N={kernelName:r.XLW,backendName:"cpu",kernelFunc:E};const R={kernelName:r.usg,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{a,b:s,bias:o,preluActivationWeights:i}=t,{transposeA:u,transposeB:l,activation:c,leakyreluAlpha:d}=r;let p,h,f;const m=[];p=E({inputs:{a,b:s},attrs:{transposeA:u,transposeB:l},backend:n}),o&&(h=(0,S.IH)({inputs:{a:p,b:o},backend:n}),m.push(p),p=h),c&&(f=C(n,p,c,i,d),m.push(p),p=f);for(const e of m)n.disposeIntermediateTensorInfo(e);return p}};var D=n(224);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const A=(0,l.A)(r.VGw,(e=>Math.acos(e))),F={kernelName:r.VGw,backendName:"cpu",kernelFunc:A},_=(0,l.A)(r.SpW,(e=>Math.acosh(e))),O={kernelName:r.SpW,backendName:"cpu",kernelFunc:_};const M={kernelName:r.Xze,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n}=e,s=t;(0,a.H)(t,"addN");const o=s.map((e=>n.data.get(e.dataId).values)),i=(0,r.f3b)(s[0].shape,s[0].dtype),u=i.values;for(let e=0;e<s.length;e++){const t=o[e];for(let e=0;e<u.length;e++)u[e]+=t[e]}return n.makeTensorInfo(i.shape,i.dtype,i.values)}};var U=n(4802);const P={kernelName:r.oT6,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{axis:i,keepDims:u}=s;(0,a.H)(o,"all");const l=r.D5U.parseAxisParam(i,o.shape);let c=l;const d=r.Wap.getAxesPermutation(c,o.shape.length);let p=o;null!=d&&(p=(0,U.p)({inputs:{x:o},backend:n,attrs:{perm:d}}),c=r.Wap.getInnerMostAxes(c.length,o.shape.length)),r.Wap.assertAxesAreInnerMostDims("all",c,p.shape.length);const[h,f]=r.Wap.computeOutAndReduceShapes(p.shape,c),m=r.D5U.sizeFromShape(f),g=r.D5U.makeZerosTypedArray(r.D5U.sizeFromShape(h),p.dtype),x=n.data.get(p.dataId).values;for(let e=0;e<g.length;++e){const t=e*m;let n=x[t];for(let e=0;e<m;++e){const r=x[t+e];n=n&&r}g[e]=n}null!=d&&n.disposeIntermediateTensorInfo(p);const b=n.makeTensorInfo(h,p.dtype,g);if(u){const e=$({inputs:{x:b},backend:n,attrs:{shape:r.Wap.expandShapeToKeepDim(h,l)}});return n.disposeIntermediateTensorInfo(b),e}return b}};const W={kernelName:r.IKK,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{axis:i,keepDims:u}=s;(0,a.H)(o,"any");const l=r.D5U.parseAxisParam(i,o.shape);let c=l;const d=r.Wap.getAxesPermutation(c,o.shape.length);let p=o;null!=d&&(p=(0,U.p)({inputs:{x:o},backend:n,attrs:{perm:d}}),c=r.Wap.getInnerMostAxes(c.length,o.shape.length)),r.Wap.assertAxesAreInnerMostDims("any",c,p.shape.length);const[h,f]=r.Wap.computeOutAndReduceShapes(p.shape,c),m=r.D5U.sizeFromShape(f),g=r.D5U.makeZerosTypedArray(r.D5U.sizeFromShape(h),p.dtype),x=n.data.get(p.dataId).values;for(let e=0;e<g.length;++e){const t=e*m;let n=x[t];for(let e=0;e<m;++e){const r=x[t+e];n=n||r}g[e]=n}null!=d&&n.disposeIntermediateTensorInfo(p);const b=n.makeTensorInfo(h,p.dtype,g);if(u){const e=$({inputs:{x:b},backend:n,attrs:{shape:r.Wap.expandShapeToKeepDim(h,l)}});return n.disposeIntermediateTensorInfo(b),e}return b}};const B={kernelName:r.sJF,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{axis:i}=s;(0,a.H)(o,"argMax");let u=r.D5U.parseAxisParam(i,o.shape);const l=r.Wap.getAxesPermutation(u,o.shape.length);let c=o;const d=[];null!=l&&(c=(0,U.p)({inputs:{x:o},backend:n,attrs:{perm:l}}),d.push(c),u=r.Wap.getInnerMostAxes(u.length,c.shape.length)),u=[u[0]],r.Wap.assertAxesAreInnerMostDims("argMax",u,c.shape.length);const[p,h]=r.Wap.computeOutAndReduceShapes(c.shape,u),f=r.D5U.sizeFromShape(p),m=r.D5U.makeZerosTypedArray(f,"int32"),g=r.D5U.sizeFromShape(h),x=n.data.get(c.dataId).values;for(let e=0;e<m.length;++e){const t=e*g;let n=x[t],r=0;for(let e=0;e<g;++e){const a=x[t+e];a>n&&(n=a,r=e)}m[e]=r}return d.forEach((e=>n.disposeIntermediateTensorInfo(e))),n.makeTensorInfo(p,"int32",m)}};const L={kernelName:r.aJk,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{axis:i}=s;(0,a.H)(o,"argMin");let u=r.D5U.parseAxisParam(i,o.shape);const l=r.Wap.getAxesPermutation(u,o.shape.length);let c=o;const d=[];null!=l&&(c=(0,U.p)({inputs:{x:o},backend:n,attrs:{perm:l}}),d.push(c),u=r.Wap.getInnerMostAxes(u.length,c.shape.length)),u=[u[0]],r.Wap.assertAxesAreInnerMostDims("argMin",u,c.shape.length);const[p,h]=r.Wap.computeOutAndReduceShapes(c.shape,u),f=r.D5U.sizeFromShape(p),m=r.D5U.makeZerosTypedArray(f,"int32"),g=r.D5U.sizeFromShape(h),x=n.data.get(c.dataId).values;for(let e=0;e<m.length;++e){const t=e*g;let n=x[t],r=0;for(let e=0;e<g;++e){const a=x[t+e];a<n&&(n=a,r=e)}m[e]=r}return d.forEach((e=>n.disposeIntermediateTensorInfo(e))),n.makeTensorInfo(p,"int32",m)}},z=(0,l.A)(r.M2y,(e=>Math.asin(e))),V={kernelName:r.M2y,backendName:"cpu",kernelFunc:z},G=(0,l.A)(r.qw7,(e=>Math.asinh(e))),H={kernelName:r.qw7,backendName:"cpu",kernelFunc:G},j=(0,l.A)(r.jMg,(e=>Math.atan(e))),X={kernelName:r.jMg,backendName:"cpu",kernelFunc:j};var q=n(6205);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const K=(0,m.b)(((e,t)=>Math.atan2(e,t))),Y=(0,q.j)(r.QCc,K),Z={kernelName:r.QCc,backendName:"cpu",kernelFunc:Y},Q=(0,l.A)(r.Oyi,(e=>Math.atanh(e))),J={kernelName:r.Oyi,backendName:"cpu",kernelFunc:Q};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ee(e,t,n,a,s,o){const i=s.strideHeight,u=s.strideWidth,l=s.dilationHeight,c=s.dilationWidth,d=s.effectiveFilterHeight,p=s.effectiveFilterWidth,h=s.padInfo.top,f=s.padInfo.left,m="max"===o?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,g=(0,r.f3b)(s.outShape,n),x=g.values,b=s.outShape[1]*s.outShape[2]*s.outShape[3],v=s.outShape[2]*s.outShape[3],k=s.outShape[3];for(let t=0;t<s.batchSize;++t){const n=t*b,r=t*a[0];for(let t=0;t<s.inChannels;++t)for(let g=0;g<s.outHeight;++g){const b=g*i-h,y=Math.max(0,b),I=Math.min(s.inHeight,d+b),w=n+g*v;for(let n=0;n<s.outWidth;++n){const i=n*u-f,d=Math.max(0,i),h=Math.min(s.inWidth,p+i);let g=m,b=0,v=0;for(let n=y;n<I;n+=l){const s=r+n*a[1];for(let n=d;n<h;n+=c){const r=e[s+n*a[2]+t];"max"===o&&r>g?g=r:"avg"===o&&(b+=r,v++)}if(isNaN(g))break}x[w+n*k+t]="avg"===o?b/v:g}}}return g}function te(e,t,n,a,s=!1,o=!1){const i=(0,r.f3b)(a.outShape,"int32"),u=a.strideHeight,l=a.strideWidth,c=a.dilationHeight,d=a.dilationWidth,p=a.effectiveFilterHeight,h=a.effectiveFilterWidth,f=a.padInfo.top,m=a.padInfo.left,g=(0,r.f3b)(t,n,e);for(let e=0;e<a.batchSize;++e)for(let t=0;t<a.inChannels;++t)for(let n=0;n<a.outHeight;++n){const r=n*u-f;let x=r;for(;x<0;)x+=c;const b=Math.min(a.inHeight,p+r);for(let u=0;u<a.outWidth;++u){const p=u*l-m;let f=p;for(;f<0;)f+=d;const v=Math.min(a.inWidth,h+p);let k=Number.NEGATIVE_INFINITY,y=-1;for(let n=x;n<b;n+=c){const i=n-r;for(let r=f;r<v;r+=d){const u=r-p,l=g.get(e,n,r,t);l>k&&(k=l,y=s?o?((e*a.inHeight+n)*a.inWidth+r)*a.inChannels+t:(n*a.inWidth+r)*a.inChannels+t:i*h+u)}}i.set(y,e,n,u,t)}}return i}function ne(e,t,n,a,s,o){const i=s.strideDepth,u=s.strideHeight,l=s.strideWidth,c=s.dilationDepth,d=s.dilationHeight,p=s.dilationWidth,h=s.effectiveFilterDepth,f=s.effectiveFilterHeight,m=s.effectiveFilterWidth,g=s.padInfo.front,x=s.padInfo.top,b=s.padInfo.left,v="max"===o?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,k=(0,r.f3b)(s.outShape,n),y=k.values,I=s.outShape[1]*s.outShape[2]*s.outShape[3]*s.outShape[4],w=s.outShape[2]*s.outShape[3]*s.outShape[4],C=s.outShape[3]*s.outShape[4],S=s.outShape[4];for(let t=0;t<s.batchSize;++t){const n=t*I,r=t*a[0];for(let t=0;t<s.inChannels;++t)for(let k=0;k<s.outDepth;++k){const I=k*i-g;let $=I;for(;$<0;)$+=c;const T=Math.min(s.inDepth,h+I),E=n+k*w;for(let n=0;n<s.outHeight;++n){const i=n*u-x;let h=i;for(;h<0;)h+=d;const g=Math.min(s.inHeight,f+i),k=E+n*C;for(let n=0;n<s.outWidth;++n){const i=n*l-b;let u=i;for(;u<0;)u+=p;const f=Math.min(s.inWidth,m+i),x=k+n*S;let I=v,w=0,C=0;for(let n=$;n<T;n+=c){const s=r+n*a[1];for(let n=h;n<g;n+=d){const r=s+n*a[2];for(let n=u;n<f;n+=p){const s=e[r+n*a[3]+t];if("max"===o&&s>I?I=s:"avg"===o&&(w+=s,C++),isNaN(I))break}if(isNaN(I))break}if(isNaN(I))break}y[x+t]="avg"===o?w/C:I}}}}return k}const re={kernelName:r.JhU,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{x:o}=t;(0,a.H)(o,"avgPool");const{filterSize:i,strides:u,pad:l,dimRoundingMode:c}=s;r.D5U.assert(r.Wap.eitherStridesOrDilationsAreOne(u,1),(()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${u} and dilations '1'`));const d=r.Wap.computePool2DInfo(o.shape,i,u,1,l,c);let h;if(1===d.filterWidth&&1===d.filterHeight&&r.D5U.arraysEqual(d.inShape,d.outShape))h=(0,p.y)({inputs:{x:o},backend:n});else{const e=n.data.get(o.dataId).values,t=r.D5U.computeStrides(o.shape),a=ee(e,o.shape,o.dtype,t,d,"avg");h=n.makeTensorInfo(d.outShape,o.dtype,a.values)}return h}};const ae={kernelName:r._k9,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{filterSize:i,strides:u,pad:l,dimRoundingMode:c,dataFormat:d}=s;(0,a.H)(o,"avgPool3d");const p=r.Wap.computePool3DInfo(o.shape,i,u,1,l,c,d),h=ne(n.data.get(o.dataId).values,o.shape,o.dtype,r.D5U.computeStrides(o.shape),p,"avg");return n.makeTensorInfo(h.shape,"float32",h.values)}};const se={kernelName:r.IMb,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{dy:o,input:i}=t,{filterSize:u,strides:l,pad:c,dimRoundingMode:d}=s;(0,a.H)([o,i],"avgPool3DGrad");const p=r.Wap.computePool3DInfo(i.shape,u,l,1,c,d),h=p.strideDepth,f=p.strideHeight,m=p.strideWidth,g=p.filterDepth,x=p.filterHeight,b=p.filterWidth,v=p.dilationDepth,k=p.dilationHeight,y=p.dilationWidth,I=p.effectiveFilterDepth,w=p.effectiveFilterHeight,C=p.effectiveFilterWidth,S=I-1-p.padInfo.front,$=C-1-p.padInfo.left,T=w-1-p.padInfo.top,E=(0,r.f3b)(i.shape,"float32"),N=1/(g*x*b),R=n.bufferSync(o);for(let e=0;e<p.batchSize;++e)for(let t=0;t<p.inChannels;++t)for(let n=0;n<p.inDepth;++n)for(let r=0;r<p.inHeight;++r)for(let a=0;a<p.inWidth;++a){const s=n-S,o=r-T,i=a-$;let u=0;for(let n=0;n<I;n+=v){const r=(s+n)/h;if(!(r<0||r>=p.outDepth||Math.floor(r)!==r))for(let n=0;n<w;n+=k){const a=(o+n)/f;if(!(a<0||a>=p.outHeight||Math.floor(a)!==a))for(let n=0;n<C;n+=y){const s=(i+n)/m;if(s<0||s>=p.outWidth||Math.floor(s)!==s)continue;u+=R.get(e,r,a,s,t)}}}E.set(u*N,e,n,r,a,t)}return n.makeTensorInfo(E.shape,E.dtype,E.values)}};const oe={kernelName:r.ROF,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{dy:o,input:i}=t,u=i;(0,a.H)([o,i],"avgPoolGrad");const{filterSize:l,strides:c,pad:d}=s,p=r.Wap.computePool2DInfo(u.shape,l,c,1,d),h=p.strideHeight,f=p.strideWidth,m=p.filterHeight,g=p.filterWidth,x=p.dilationHeight,b=p.dilationWidth,v=p.effectiveFilterHeight,k=p.effectiveFilterWidth,y=k-1-p.padInfo.left,I=v-1-p.padInfo.top,w=(0,r.f3b)(u.shape,"float32"),C=1/(m*g),S=n.data.get(o.dataId).values,$=(0,r.f3b)(o.shape,"float32",S);for(let e=0;e<p.batchSize;++e)for(let t=0;t<p.inChannels;++t)for(let n=0;n<p.inHeight;++n)for(let r=0;r<p.inWidth;++r){const a=n-I,s=r-y;let o=0;for(let n=0;n<v;n+=x){const r=(a+n)/h;if(!(r<0||r>=p.outHeight||Math.floor(r)!==r))for(let n=0;n<k;n+=b){const a=(s+n)/f;if(a<0||a>=p.outWidth||Math.floor(a)!==a)continue;o+=$.get(e,r,a,t)}}w.set(o*C,e,n,r,t)}return n.makeTensorInfo(w.shape,w.dtype,w.values)}};const ie={kernelName:r.sHE,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{x:o,scale:i,offset:u,mean:l,variance:c}=t;r.D5U.assert(l.shape.length===c.shape.length,(()=>"Batch normalization gradient requires mean and variance to have equal ranks.")),r.D5U.assert(null==u||l.shape.length===u.shape.length,(()=>"Batch normalization gradient requires mean and offset to have equal ranks.")),r.D5U.assert(null==i||l.shape.length===i.shape.length,(()=>"Batch normalization gradient requires mean and scale to have equal ranks.")),(0,a.H)([o,l,c,i,u],"batchNorm");let{varianceEpsilon:d}=s;null==d&&(d=.001);const p=n.data.get(o.dataId).values,h=n.data.get(l.dataId).values,f=n.data.get(c.dataId).values,m=i?n.data.get(i.dataId).values:new Float32Array([1]),g=u?n.data.get(u.dataId).values:new Float32Array([0]),x=new Float32Array(p.length),b=g.length,v=m.length,k=f.length,y=h.length;let I=0,w=0,C=0,S=0;for(let e=0;e<p.length;++e)x[e]=g[I++]+(p[e]-h[w++])*m[C++]/Math.sqrt(f[S++]+d),I>=b&&(I=0),w>=y&&(w=0),C>=v&&(C=0),S>=k&&(S=0);return n.makeTensorInfo(o.shape,o.dtype,x)}};var ue=n(2578);const le={kernelName:r.zws,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{blockShape:i,crops:u}=s;(0,a.H)([o],"batchToSpaceND");const l=i.reduce(((e,t)=>e*t)),c=r.Wap.getReshaped(o.shape,i,l),d=r.Wap.getPermuted(c.length,i.length),p=r.Wap.getReshapedPermuted(o.shape,i,l),h=r.Wap.getSliceBeginCoords(u,i.length),f=r.Wap.getSliceSize(p,u,i.length),m=$({inputs:{x:o},backend:n,attrs:{shape:c}}),g=(0,U.p)({inputs:{x:m},backend:n,attrs:{perm:d}}),x=$({inputs:{x:g},backend:n,attrs:{shape:p}}),b=(0,ue.tP)({inputs:{x},backend:n,attrs:{begin:h,size:f}});return n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(g),n.disposeIntermediateTensorInfo(x),b}};var ce=n(8607);const de={kernelName:r.zvY,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a,weights:s}=t,{size:o}=r,i=n.data.get(a.dataId).values,u=n.data.get(s.dataId).values,l=(0,ce.W)(i,u,s.dtype,s.shape,o);return n.makeTensorInfo([o],s.dtype,l)}};const pe={kernelName:r.eEB,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n}=e,{s0:a,s1:s}=t,o=n.data.get(a.dataId).values,i=n.data.get(s.dataId).values,u=r.Wap.assertAndGetBroadcastShape(Array.from(o),Array.from(i));return n.makeTensorInfo([u.length],"int32",Int32Array.from(u))}};var he=n(9258),fe=n(4769);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const me=(0,l.A)(r.xnO,((e,t)=>{const n=t;return e>n.clipValueMax?n.clipValueMax:e<n.clipValueMin?n.clipValueMin:e})),ge={kernelName:r.xnO,backendName:"cpu",kernelFunc:me};var xe=n(6961);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const be={kernelName:r.yj2,backendName:"cpu",kernelFunc:e=>{const{x:t}=e.inputs,n=e.backend,a=new Float32Array(r.D5U.sizeFromShape(t.shape)),s=n.data.get(t.dataId),o=s.complexTensorInfos.real,i=s.complexTensorInfos.imag,u=n.data.get(o.dataId).values,l=n.data.get(i.dataId).values;for(let e=0;e<u.length;e++){const t=u[e],n=l[e];a[e]=Math.hypot(t,n)}return n.makeOutput(a,t.shape,"float32")}};var ve=n(8926);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ke(e){const{inputs:t,backend:n}=e,{input:r}=t,a=n.data.get(r.dataId).complexTensorInfos.imag,s=n.data.get(a.dataId).values;return n.makeTensorInfo(a.shape,a.dtype,s)}const ye={kernelName:r.J_u,backendName:"cpu",kernelFunc:ke};var Ie=n(2186);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function we(e){const{inputs:t,backend:n,attrs:a}=e,{axis:s}=a,o=r.D5U.parseAxisParam(s,t[0].shape)[0];let i=r.Wap.computeOutShape(t.map((e=>e.shape)),o);if(0===r.D5U.sizeFromShape(i))return n.makeTensorInfo(i,t[0].dtype,[]);const u=t.filter((e=>r.D5U.sizeFromShape(e.shape)>0));if(1===u.length)return(0,p.y)({inputs:{x:u[0]},backend:n});const l=u.map((e=>e.shape));if(r.Wap.assertParamsConsistent(l,o),"complex64"===u[0].dtype){const e=u.map((e=>(0,Ie.k)({inputs:{input:e},backend:n}))),t=u.map((e=>ke({inputs:{input:e},backend:n}))),r=we({inputs:e,backend:n,attrs:{axis:o}}),a=we({inputs:t,backend:n,attrs:{axis:o}}),s=(0,xe.P)({inputs:{real:r,imag:a},backend:n});return e.forEach((e=>n.disposeIntermediateTensorInfo(e))),t.forEach((e=>n.disposeIntermediateTensorInfo(e))),n.disposeIntermediateTensorInfo(r),n.disposeIntermediateTensorInfo(a),s}const c=u.map((e=>{const t=r.D5U.sizeFromShape(e.shape.slice(o));return $({inputs:{x:e},backend:n,attrs:{shape:[-1,t]}})})),d=c.map((e=>({vals:n.data.get(e.dataId).values,shape:e.shape})));i=r.Wap.computeOutShape(c.map((e=>e.shape)),1);const h=1===c[0].shape[0],f=(0,ve.j)(d,i,t[0].dtype,h),m=r.Wap.computeOutShape(u.map((e=>e.shape)),o),g=n.makeTensorInfo(m,t[0].dtype,f);return c.forEach((e=>n.disposeIntermediateTensorInfo(e))),g}const Ce={kernelName:r.Eh3,backendName:"cpu",kernelFunc:we};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Se(e){const{inputs:t,backend:n,attrs:s}=e,{x:o,filter:i}=t,{strides:u,pad:l,dataFormat:c,dilations:d,dimRoundingMode:p}=s;(0,a.H)([o,i],"conv2d");const h=r.Wap.convertConv2DDataFormat(c),f=r.Wap.computeConv2DInfo(o.shape,i.shape,u,d,l,p,!1,h),m=f.filterHeight,g=f.filterWidth,x=f.dilationHeight,b=f.dilationWidth,v=f.padInfo.left,k=f.padInfo.top,y="channelsLast"===f.dataFormat,I=new r.YDk(f.outShape,o.dtype),w=r.D5U.computeStrides(o.shape),C=r.D5U.computeStrides(i.shape),S=w[0],$=y?w[1]:w[2],T=y?w[2]:1,E=y?1:w[1],N=I.strides[0],R=y?I.strides[1]:I.strides[2],D=y?I.strides[2]:1,A=y?1:I.strides[1],F=n.data.get(o.dataId).values,_=n.data.get(i.dataId).values,O=I.values;for(let e=0;e<f.batchSize;++e){const t=e*S,n=e*N;for(let e=0;e<f.outHeight;++e){const r=n+e*R,a=e*f.strideHeight-k;for(let e=0;e<m;++e){const n=a+e*x;if(n<0||n>=f.inHeight)continue;const s=e*C[0],o=t+n*$;for(let e=0;e<f.outWidth;++e){const t=r+e*D,n=e*f.strideWidth-v;for(let e=0;e<g;++e){const r=n+e*b;if(r<0||r>=f.inWidth)continue;const a=o+r*T;let i=s+e*C[1];for(let e=0;e<f.inChannels;++e){const n=F[a+e*E];for(let e=0;e<f.outChannels;++e)O[t+e*A]+=n*_[i+e];i+=f.outChannels}}}}}}return n.makeTensorInfo(I.shape,I.dtype,O)}const $e={kernelName:r.mhS,backendName:"cpu",kernelFunc:Se};const Te={kernelName:r.wUP,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{x:o,dy:i}=t,{strides:u,pad:l,dataFormat:c,dimRoundingMode:d,filterShape:p}=s;(0,a.H)([o,i],"conv2dBackpropFilter");const h=r.Wap.convertConv2DDataFormat(c),f=r.Wap.computeConv2DInfo(o.shape,p,u,1,l,d,!1,h),{strideHeight:m,strideWidth:g,filterHeight:x,filterWidth:b}=f,v="channelsLast"===f.dataFormat,k=new r.YDk(f.filterShape,"float32"),y=f.padInfo.left,I=f.padInfo.top,w=n.data.get(o.dataId).values,C=n.data.get(i.dataId).values,S=new r.YDk(o.shape,o.dtype,w),$=new r.YDk(i.shape,i.dtype,C);for(let e=0;e<x;++e){const t=Math.max(0,Math.ceil((I-e)/m)),n=Math.min(f.outHeight,(f.inHeight+I-e)/m);for(let r=0;r<b;++r){const a=Math.max(0,Math.ceil((y-r)/g)),s=Math.min(f.outWidth,(f.inWidth+y-r)/g);for(let o=0;o<f.inChannels;++o)for(let i=0;i<f.outChannels;++i){let u=0;for(let l=0;l<f.batchSize;++l)for(let c=t;c<n;++c){const t=e+c*m-I;for(let e=a;e<s;++e){const n=r+e*g-y;u+=v?S.get(l,t,n,o)*$.get(l,c,e,i):S.get(l,o,t,n)*$.get(l,i,c,e)}}k.set(u,e,r,o,i)}}}return n.makeTensorInfo(k.shape,k.dtype,k.values)}};const Ee={kernelName:r.wm,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{dy:o,filter:i}=t,{inputShape:u,strides:l,pad:c,dataFormat:d,dimRoundingMode:p}=s;(0,a.H)([o,i],"conv2dBackpropInput");const h=r.D5U.computeStrides(i.shape),f=r.D5U.computeStrides(o.shape);let m=r.Wap.convertConv2DDataFormat(d);const g=r.Wap.computeConv2DInfo(u,i.shape,l,1,c,p,!1,m),x=new r.YDk(g.inShape,"float32"),b=x.values,v=n.data.get(o.dataId).values,k=n.data.get(i.dataId).values,[y,I,w]=h,{batchSize:C,filterHeight:S,filterWidth:$,inChannels:T,inHeight:E,inWidth:N,outChannels:R,outHeight:D,outWidth:A,strideHeight:F,strideWidth:_}=g;m=g.dataFormat;const O=S-1-g.padInfo.top,M=$-1-g.padInfo.left,U="channelsLast"===m,P=x.strides[0],W=U?x.strides[1]:x.strides[2],B=U?x.strides[2]:1,L=U?1:x.strides[1],z=f[0],V=U?f[1]:f[2],G=U?f[2]:1,H=U?1:f[1];for(let e=0;e<C;++e)for(let t=0;t<T;++t)for(let n=0;n<E;++n){const r=n-O,a=Math.max(0,Math.ceil(r/F)),s=Math.min(D,(S+r)/F);for(let o=0;o<N;++o){const i=o-M,u=Math.max(0,Math.ceil(i/_)),l=Math.min(A,($+i)/_);let c=0;for(let n=a;n<s;++n){const a=n*F-r;for(let r=u;r<l;++r){const s=z*e+V*n+G*r,o=y*(S-1-a)+I*($-1-(r*_-i))+w*t;for(let e=0;e<R;++e){c+=v[s+H*e]*k[o+e]}}}b[P*e+W*n+B*o+L*t]=c}}return n.makeTensorInfo(x.shape,x.dtype,x.values)}};const Ne={kernelName:r.x12,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{x:o,filter:i}=t,{strides:u,pad:l,dilations:c}=s;(0,a.H)([o,i],"conv3d");const d=r.Wap.computeConv3DInfo(o.shape,i.shape,u,c,l),{filterDepth:p,filterHeight:h,filterWidth:f,dilationDepth:m,dilationHeight:g,dilationWidth:x,padInfo:b}=d,v=b.front,k=b.left,y=b.top,I=new r.YDk(d.outShape,o.dtype),w=n.data.get(o.dataId).values,C=n.data.get(i.dataId).values,S=I.values,$=r.D5U.computeStrides(o.shape),T=r.D5U.computeStrides(i.shape);for(let e=0;e<d.batchSize;++e){const t=e*$[0],n=e*I.strides[0];for(let e=0;e<d.outDepth;++e){const r=n+e*I.strides[1],a=e*d.strideDepth-v;for(let e=0;e<p;++e){const n=a+e*m;if(n<0||n>=d.inDepth)continue;const s=e*T[0],o=t+n*$[1];for(let e=0;e<d.outHeight;++e){const t=r+e*I.strides[2],n=e*d.strideHeight-y;for(let e=0;e<h;++e){const r=n+e*g;if(r<0||r>=d.inHeight)continue;const a=s+e*T[1],i=o+r*$[2];for(let e=0;e<d.outWidth;++e){const n=t+e*d.outChannels,r=e*d.strideWidth-k;for(let e=0;e<f;++e){const t=r+e*x;if(t<0||t>=d.inWidth)continue;const s=a+e*T[2],o=i+t*d.inChannels;let u=s;for(let e=0;e<d.inChannels;++e){const t=w[o+e];for(let e=0;e<d.outChannels;++e)S[n+e]+=t*C[u+e];u+=d.outChannels}}}}}}}}return n.makeTensorInfo(I.shape,I.dtype,I.values)}};const Re={kernelName:r.o2y,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{x:o,dy:i}=t,{strides:u,pad:l,filterShape:c}=s;(0,a.H)([o,i],"conv3dBackpropFilterV2");const d=r.D5U.computeStrides(o.shape),p=r.D5U.computeStrides(i.shape),h=r.Wap.computeConv3DInfo(o.shape,c,u,1,l),f=h.strideDepth,m=h.strideHeight,g=h.strideWidth,x=h.filterDepth,b=h.filterHeight,v=h.filterWidth,k=new r.YDk(h.filterShape,"float32"),y=k.values,[I,w,C,S]=k.strides,$=n.data.get(i.dataId).values,[T,E,N,R]=p,D=n.data.get(o.dataId).values,[A,F,_,O]=d,M=h.padInfo.front,U=h.padInfo.left,P=h.padInfo.top;for(let e=0;e<x;++e){const t=Math.max(0,Math.ceil((M-e)/f)),n=Math.min(h.outDepth,(h.inDepth+M-e)/f),r=e*I;for(let a=0;a<b;++a){const s=Math.max(0,Math.ceil((P-a)/m)),o=Math.min(h.outHeight,(h.inHeight+P-a)/m),i=a*w+r;for(let r=0;r<v;++r){const u=Math.max(0,Math.ceil((U-r)/g)),l=Math.min(h.outWidth,(h.inWidth+U-r)/g),c=r*C+i;for(let i=0;i<h.inChannels;++i){const d=i*S+c;for(let c=0;c<h.outChannels;++c){let p=0;for(let d=0;d<h.batchSize;++d){const h=d*A,x=d*T;for(let d=t;d<n;++d){const t=(e+d*f-M)*F+h,n=d*E+x;for(let e=s;e<o;++e){const s=(a+e*m-P)*_+t,o=e*N+n;for(let e=u;e<l;++e){const t=e*R+o;p+=D[(r+e*g-U)*O+s+i]*$[t+c]}}}}y[d+c]=p}}}}}return n.makeTensorInfo(k.shape,k.dtype,k.values)}};const De={kernelName:r.ik2,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{dy:o,filter:i}=t,{pad:u,strides:l,inputShape:c}=s;(0,a.H)([o],"conv3dBackpropInputV2");const d=r.D5U.computeStrides(o.shape),p=r.D5U.computeStrides(i.shape),h=r.Wap.computeConv3DInfo(c,i.shape,l,1,u),f=new r.YDk(h.inShape,"float32"),m=f.values,[g,x,b,v]=f.strides,k=n.data.get(o.dataId).values,[y,I,w,C]=d,S=n.data.get(i.dataId).values,[$,T,E,N]=p,{batchSize:R,filterDepth:D,filterHeight:A,filterWidth:F,inChannels:_,inDepth:O,inHeight:M,inWidth:U,outChannels:P,outDepth:W,outHeight:B,outWidth:L,strideDepth:z,strideHeight:V,strideWidth:G}=h,H=D-1-h.padInfo.front,j=A-1-h.padInfo.top,X=F-1-h.padInfo.left;for(let e=0;e<R;++e)for(let t=0;t<_;++t)for(let n=0;n<O;++n){const r=n-H,a=Math.max(0,Math.ceil(r/z)),s=Math.min(W,(D+r)/z);for(let o=0;o<M;++o){const i=o-j,u=Math.max(0,Math.ceil(i/V)),l=Math.min(B,(A+i)/V);for(let c=0;c<U;++c){const d=c-X,p=Math.max(0,Math.ceil(d/G)),h=Math.min(L,(F+d)/G);let f=0;for(let n=a;n<s;++n){const a=n*z-r;for(let r=u;r<l;++r){const s=r*V-i;for(let o=p;o<h;++o){const i=y*e+I*n+w*r+C*o,u=$*(D-1-a)+T*(A-1-s)+E*(F-1-(o*G-d))+N*t;for(let e=0;e<P;++e){f+=k[i+e]*S[u+e]}}}}m[g*e+x*n+b*o+v*c+t]=f}}}return n.makeTensorInfo(f.shape,f.dtype,f.values)}},Ae=(0,l.A)(r.mc4,(e=>Math.cos(e))),Fe={kernelName:r.mc4,backendName:"cpu",kernelFunc:Ae},_e=(0,l.A)(r.TR1,(e=>Math.cosh(e))),Oe={kernelName:r.TR1,backendName:"cpu",kernelFunc:_e};const Me={kernelName:r.VcC,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:a}=e,{image:s,boxes:o,boxInd:i}=t,{cropSize:u,method:l,extrapolationValue:c}=a,[d,p,h,f]=s.shape,m=o.shape[0],[g,x]=u,b=(0,r.f3b)([m,g,x,f],"float32"),v=n.data.get(o.dataId).values,k=n.data.get(i.dataId).values,y=n.data.get(s.dataId).values,I=r.D5U.computeStrides(s.shape),w=r.D5U.computeStrides(b.shape);for(let e=0;e<m;e++){const t=4*e,n=v[t],r=v[t+1],a=v[t+2],s=v[t+3],o=k[e];if(o>=d)continue;const i=g>1?(a-n)*(p-1)/(g-1):0,u=x>1?(s-r)*(h-1)/(x-1):0;for(let t=0;t<g;t++){const d=g>1?n*(p-1)+t*i:.5*(n+a)*(p-1);if(d<0||d>p-1)for(let n=0;n<x;n++)for(let r=0;r<f;r++){const a=r+n*w[2]+t*w[1]+e*w[0];b.values[a]=c}else if("bilinear"===l){const n=Math.floor(d),a=Math.ceil(d),i=d-n;for(let l=0;l<x;l++){const d=x>1?r*(h-1)+l*u:.5*(r+s)*(h-1);if(d<0||d>h-1){for(let n=0;n<f;n++){const r=n+l*w[2]+t*w[1]+e*w[0];b.values[r]=c}continue}const p=Math.floor(d),m=Math.ceil(d),g=d-p;for(let r=0;r<f;r++){let s=r+p*I[2]+n*I[1]+o*I[0];const u=y[s];s=r+m*I[2]+n*I[1]+o*I[0];const c=y[s];s=r+p*I[2]+a*I[1]+o*I[0];const d=y[s];s=r+m*I[2]+a*I[1]+o*I[0];const h=u+(c-u)*g,f=d+(y[s]-d)*g;s=r+l*w[2]+t*w[1]+e*w[0],b.values[s]=h+(f-h)*i}}}else for(let n=0;n<x;++n){const a=x>1?r*(h-1)+n*u:.5*(r+s)*(h-1);if(a<0||a>h-1){for(let r=0;r<f;r++){const a=r+n*w[2]+t*w[1]+e*w[0];b.values[a]=c}continue}const i=Math.round(a),l=Math.round(d);for(let r=0;r<f;r++){const a=r+i*I[2]+l*I[1]+o*I[0],s=r+n*w[2]+t*w[1]+e*w[0];b.values[s]=y[a]}}}}return n.makeTensorInfo(b.shape,b.dtype,b.values)}};const Ue={kernelName:r.iHb,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{axis:i,exclusive:u,reverse:l}=s;(0,a.H)(o,"cumsum");const c=r.Wap.getAxesPermutation([i],o.shape.length);let d=o;null!=c&&(d=(0,U.p)({inputs:{x:o},backend:n,attrs:{perm:c}}));const p=r.Wap.getInnerMostAxes(1,o.shape.length)[0];if(p!==d.shape.length-1)throw new Error(`backend.cumsum in CPU expects an inner-most axis=${d.shape.length-1} but got axis=${p}`);const h=(0,r.x8V)(d.dtype,"int32"),f=r.D5U.makeZerosTypedArray(r.D5U.sizeFromShape(d.shape),h),m=n.data.get(d.dataId).values,g=d.shape[d.shape.length-1],x=l?(e,t)=>e+g-t-1:(e,t)=>e+t;for(let e=0;e<m.length;e+=g)for(let t=0;t<g;t++){const n=x(e,t);if(0===t)f[n]=u?0:m[n];else{const r=x(e,t-1);f[n]=u?m[r]+f[r]:m[n]+f[r]}}const b=n.makeTensorInfo(d.shape,h,f);if(null!=c){const e=r.Wap.getUndoAxesPermutation(c),t=(0,U.p)({inputs:{x:b},backend:n,attrs:{perm:e}});return n.disposeIntermediateTensorInfo(b),n.disposeIntermediateTensorInfo(d),t}return b}};const Pe={kernelName:r.QRR,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a,weights:s}=t,{size:o,binaryOutput:i}=r;if(1===a.shape.length){const e=n.data.get(a.dataId).values,t=n.data.get(s.dataId).values,r=(0,ce.W)(e,t,s.dtype,s.shape,o);return n.makeTensorInfo([o],s.dtype,r)}if(2===a.shape.length){const e=n.bufferSync(a),t=n.bufferSync(s),r=(0,ce.i)(e,t,o,i);return n.makeTensorInfo(r.shape,s.dtype,r.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${a.shape.length}.`)}};const We={kernelName:r.T0n,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:a}=e,{x:s}=t,{blockSize:o,dataFormat:i}=a;r.D5U.assert("NHWC"===i,(()=>`Only NHWC dataFormat supported on CPU for depthToSpace. Got ${i}`)),r.D5U.assert(o>1,(()=>`blockSize should be > 1 for depthToSpace, but was: ${o}`));const u=s.shape[0],l=s.shape[1],c=s.shape[2],d=s.shape[3],p=l*o,h=c*o,f=d/(o*o),m=n.data.get(s.dataId).values,g=new Float32Array(u*p*h*f);let x=0;for(let e=0;e<u;++e)for(let t=0;t<p;++t){const n=Math.floor(t/o),r=t%o;for(let t=0;t<h;++t){const a=Math.floor(t/o),s=(r*o+t%o)*f;for(let t=0;t<f;++t){const r=t+s+d*(a+c*(n+l*e));g[x++]=m[r]}}}return n.makeTensorInfo([u,p,h,f],s.dtype,g)}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Be(e){const{inputs:t,backend:n,attrs:s}=e,{x:o,filter:i}=t,{strides:u,pad:l,dilations:c,dimRoundingMode:d}=s;(0,a.H)([o,i],"depthwiseConv2DNative");const p=r.D5U.computeStrides(o.shape),h=r.D5U.computeStrides(i.shape);let f=c;null==f&&(f=[1,1]),r.D5U.assert(r.Wap.eitherStridesOrDilationsAreOne(u,f),(()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${u} and dilations '${f}'`));const m=r.Wap.computeConv2DInfo(o.shape,i.shape,u,f,l,d,!0),{filterHeight:g,filterWidth:x,dilationHeight:b,dilationWidth:v,padInfo:k}=m,y=k.left,I=k.top,w=m.outChannels/m.inChannels,C=new r.YDk(m.outShape,o.dtype),S=n.data.get(o.dataId).values,$=n.data.get(i.dataId).values,T=C.values;for(let e=0;e<m.batchSize;++e){const t=e*p[0],n=e*C.strides[0];for(let e=0;e<m.outHeight;++e){const r=n+e*C.strides[1],a=e*m.strideHeight-I;for(let e=0;e<g;++e){const n=a+e*b;if(n<0||n>=m.inHeight)continue;const s=e*h[0],o=t+n*p[1];for(let e=0;e<m.outWidth;++e){const t=r+e*C.strides[2],n=e*m.strideWidth-y;for(let e=0;e<x;++e){const r=n+e*v;if(r<0||r>=m.inWidth)continue;const a=s+e*h[1],i=o+r*m.inChannels;let u=t,l=a;for(let e=0;e<m.inChannels;++e){const t=S[i+e];for(let e=0;e<w;++e)T[u+e]+=t*$[l+e];u+=w,l+=w}}}}}}return n.makeTensorInfo(C.shape,C.dtype,C.values)}const Le={kernelName:r.cie,backendName:"cpu",kernelFunc:Be};const ze={kernelName:r.sL$,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{x:o,dy:i}=t,{strides:u,dilations:l,pad:c,dimRoundingMode:d,filterShape:p}=s;(0,a.H)([o,i],"depthwiseConv2dNativeBackpropFilter");const h=r.Wap.computeConv2DInfo(o.shape,p,u,l,c,d,!0),{strideHeight:f,strideWidth:m,filterHeight:g,filterWidth:x}=h,b=new r.YDk(h.filterShape,"float32"),v=h.padInfo.left,k=h.padInfo.top,y=h.outChannels/h.inChannels,I=n.data.get(o.dataId).values,w=new r.YDk(o.shape,o.dtype,I),C=n.data.get(i.dataId).values,S=new r.YDk(i.shape,i.dtype,C);for(let e=0;e<g;++e){const t=Math.max(0,Math.ceil((k-e)/f)),n=Math.min(h.outHeight,(h.inHeight+k-e)/f);for(let r=0;r<x;++r){const a=Math.max(0,Math.ceil((v-r)/m)),s=Math.min(h.outWidth,(h.inWidth+v-r)/m);for(let o=0;o<h.outChannels;++o){const i=Math.trunc(o/y),u=o%y;let l=0;for(let u=0;u<h.batchSize;++u)for(let c=t;c<n;++c){const t=e+c*f-k;for(let e=a;e<s;++e){const n=r+e*m-v;l+=w.get(u,t,n,i)*S.get(u,c,e,o)}}b.set(l,e,r,i,u)}}}return n.makeTensorInfo(b.shape,b.dtype,b.values)}};const Ve={kernelName:r.y7R,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{dy:o,filter:i}=t,{strides:u,dilations:l,pad:c,dimRoundingMode:d,inputShape:p}=s;(0,a.H)([o,i],"depthwiseConv2DNativeBackpropInput");const h=r.D5U.computeStrides(o.shape),f=r.D5U.computeStrides(i.shape),m=r.Wap.computeConv2DInfo(p,i.shape,u,l,c,d,!0),g=new r.YDk(m.inShape,"float32"),x=g.values,[b,v,k]=g.strides,y=n.data.get(o.dataId).values,[I,w,C]=h,S=n.data.get(i.dataId).values,[$,T,E]=f,{batchSize:N,filterHeight:R,filterWidth:D,inChannels:A,inHeight:F,inWidth:_,outChannels:O,outHeight:M,outWidth:U,strideHeight:P,strideWidth:W}=m,B=R-1-m.padInfo.top,L=D-1-m.padInfo.left,z=O/A;for(let e=0;e<N;++e)for(let t=0;t<A;++t)for(let n=0;n<F;++n){const r=n-B,a=Math.max(0,Math.ceil(r/P)),s=Math.min(M,(R+r)/P);for(let o=0;o<_;++o){const i=o-L,u=Math.max(0,Math.ceil(i/W)),l=Math.min(U,(D+i)/W);let c=0;for(let n=a;n<s;++n){const a=n*P-r;for(let r=u;r<l;++r){const s=I*e+w*n+C*r,o=$*(R-1-a)+T*(D-1-(r*W-i))+E*t;for(let e=0;e<z;++e){c+=y[s+(t*z+e)]*S[o+e]}}}x[b*e+v*n+k*o+t]=c}}return n.makeTensorInfo(g.shape,g.dtype,g.values)}};const Ge={kernelName:r.$w,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n}=e,{x:a}=t,s=r.D5U.sizeFromShape(a.shape),o=n.data.get(a.dataId).values,i=(0,r.f3b)([s,s],a.dtype),u=i.values;for(let e=0;e<o.length;e++)u[e*s+e]=o[e];const l=[...a.shape,...a.shape];return n.makeTensorInfo(l,i.dtype,i.values)}},He={kernelName:r.p4S,backendName:"cpu",kernelFunc:({inputs:e,backend:t,attrs:n})=>{const{x:a,filter:s}=e,{strides:o,pad:i,dilations:u}=n,l=t,c=l.data.get(a.dataId).values,d=a.shape.length,p=l.data.get(s.dataId).values,h=s.shape.length,{batchSize:f,inHeight:m,inWidth:g,inChannels:x,outHeight:b,outWidth:v,padInfo:k,strideHeight:y,strideWidth:I,filterHeight:w,filterWidth:C,dilationHeight:S,dilationWidth:$,outShape:T}=r.Wap.computeDilation2DInfo(a.shape,s.shape,o,i,"NHWC",u),E=r.D5U.sizeFromShape(T),N=T.length,R=r.D5U.getArrayFromDType(a.dtype,E);for(let e=0;e<f;++e)for(let t=0;t<b;++t){const n=t*y-k.top;for(let o=0;o<v;++o){const i=o*I-k.left;for(let u=0;u<x;++u){let l=Number.MIN_SAFE_INTEGER;for(let t=0;t<w;++t){const o=n+t*S;if(o>=0&&o<m)for(let n=0;n<C;++n){const f=i+n*$;if(f>=0&&f<g){const i=r.D5U.locToIndex([e,o,f,u],d,r.D5U.computeStrides(a.shape)),m=r.D5U.locToIndex([t,n,u],h,r.D5U.computeStrides(s.shape)),g=c[i]+p[m];g>l&&(l=g)}}}R[r.D5U.locToIndex([e,t,o,u],N,r.D5U.computeStrides(T))]=l}}}return{dataId:l.write(r.D5U.toTypedArray(R,a.dtype),T,a.dtype),shape:T,dtype:a.dtype}}},je={kernelName:r.Vn9,backendName:"cpu",kernelFunc:({inputs:e,backend:t,attrs:n})=>{const{x:a,filter:s,dy:o}=e,{strides:i,pad:u,dilations:l}=n,c=t,d=r.D5U.toNestedArray(a.shape,c.data.get(a.dataId).values),p=r.D5U.toNestedArray(s.shape,c.data.get(s.dataId).values),{batchSize:h,inHeight:f,inWidth:m,inChannels:g,outHeight:x,outWidth:b,padInfo:v,strideHeight:k,strideWidth:y,filterHeight:I,filterWidth:w,dilationHeight:C,dilationWidth:S,outShape:$}=r.Wap.computeDilation2DInfo(a.shape,s.shape,i,u,"NHWC",l);r.D5U.assert(o.rank===$.length,(()=>`Error in ${r.Vn9}, dy must have the same rank as output ${$.length}, but got ${o.rank}`));const T=r.D5U.toNestedArray($,c.data.get(o.dataId).values),E=r.D5U.makeZerosNestedTypedArray(s.shape,s.dtype);for(let e=0;e<h;++e)for(let t=0;t<x;++t){const n=t*k-v.top;for(let r=0;r<b;++r){const a=r*y-v.left;for(let s=0;s<g;++s){let o=Number.MIN_SAFE_INTEGER,i=0,u=0;for(let t=0;t<I;++t){const r=n+t*C;if(r>=0&&r<f)for(let n=0;n<w;++n){const l=a+n*S;if(l>=0&&l<m){const a=d[e][r][l][s]+p[t][n][s];a>o&&(o=a,i=t,u=n)}}}E[i][u][s]+=T[e][t][r][s]}}}return{dataId:c.write(r.D5U.toTypedArray(E,a.dtype),s.shape,s.dtype),shape:s.shape,dtype:s.dtype}}},Xe={kernelName:r.ekb,backendName:"cpu",kernelFunc:({inputs:e,backend:t,attrs:n})=>{const{x:a,filter:s,dy:o}=e,{strides:i,pad:u,dilations:l}=n,c=t,d=r.D5U.toNestedArray(a.shape,c.data.get(a.dataId).values),p=r.D5U.toNestedArray(s.shape,c.data.get(s.dataId).values),{batchSize:h,inHeight:f,inWidth:m,inChannels:g,outHeight:x,outWidth:b,padInfo:v,strideHeight:k,strideWidth:y,filterHeight:I,filterWidth:w,dilationHeight:C,dilationWidth:S,outShape:$}=r.Wap.computeDilation2DInfo(a.shape,s.shape,i,u,"NHWC",l);r.D5U.assert(o.rank===$.length,(()=>`Error in ${r.ekb}, dy must have the same rank as output ${$.length}, but got ${o.rank}`));const T=r.D5U.toNestedArray($,c.data.get(o.dataId).values),E=r.D5U.makeZerosNestedTypedArray(a.shape,a.dtype);for(let e=0;e<h;++e)for(let t=0;t<x;++t){const n=t*k-v.top;for(let r=0;r<b;++r){const a=r*y-v.left;for(let s=0;s<g;++s){let o=Number.MIN_SAFE_INTEGER,i=n<0?0:n,u=a<0?0:a;for(let t=0;t<I;++t){const r=n+t*C;if(r>=0&&r<f)for(let n=0;n<w;++n){const l=a+n*S;if(l>=0&&l<m){const a=d[e][r][l][s]+p[t][n][s];a>o&&(o=a,i=r,u=l)}}}E[e][i][u][s]+=T[e][t][r][s]}}}return{dataId:c.write(r.D5U.toTypedArray(E,a.dtype),a.shape,a.dtype),shape:a.shape,dtype:a.dtype}}};var qe=n(1917),Ke=n(4391);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ye(e){const{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{axis:i,keepDims:u}=s;let l;(0,a.H)(o,"sum"),l="bool"===o.dtype?(0,he.p)({inputs:{x:o},backend:n,attrs:{dtype:"int32"}}):(0,p.y)({inputs:{x:o},backend:n});const c=l.shape.length,d=r.D5U.parseAxisParam(i,l.shape),h=r.Wap.getAxesPermutation(d,c);let f=d,m=l;null!=h&&(m=(0,U.p)({inputs:{x:l},backend:n,attrs:{perm:h}}),f=r.Wap.getInnerMostAxes(f.length,c)),r.Wap.assertAxesAreInnerMostDims("sum",f,m.shape.length);const[g,x]=r.Wap.computeOutAndReduceShapes(m.shape,f),b=r.Wap.upcastType(m.dtype,"int32");let v=(0,Ke.l)(n,g,b);const k=r.D5U.sizeFromShape(x),y=n.data.get(v.dataId).values,I=n.data.get(m.dataId).values;for(let e=0;e<y.length;++e){const t=e*k;let n=0;for(let e=0;e<k;++e)n+=I[t+e];y[e]=n}if(u){const e=v;v=$({inputs:{x:v},backend:n,attrs:{shape:r.Wap.expandShapeToKeepDim(v.shape,d)}}),n.disposeIntermediateTensorInfo(e)}return n.disposeIntermediateTensorInfo(l),null!=h&&n.disposeIntermediateTensorInfo(m),v}const Ze={kernelName:r.GBy,backendName:"cpu",kernelFunc:Ye};const Qe={kernelName:r.$g6,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:a}=e,{equation:s}=a,o=t,{allDims:i,summedDims:u,idDims:l}=r.Wap.decodeEinsumEquation(s,o.length);r.Wap.checkEinsumDimSizes(i.length,l,o);const{path:c,steps:d}=r.Wap.getEinsumComputePath(u,l),p=d.length;let h=null,f=i.length;const m=[];for(let e=0;e<p;++e){for(const t of d[e]){const{permutationIndices:e,expandDims:a}=r.Wap.getEinsumPermutation(f,l[t]);let s;r.Wap.isIdentityPermutation(e)?s=o[t]:(s=(0,U.p)({inputs:{x:o[t]},backend:n,attrs:{perm:e}}),m.push(s));const i=s.shape.slice();for(let e=0;e<a.length;++e)i.splice(a[e],0,1);r.D5U.arraysEqual(s.shape,i)||(s=$({inputs:{x:s},backend:n,attrs:{shape:i}}),m.push(s)),null===h?h=s:(h=(0,qe.Jp)({inputs:{a:s,b:h},backend:n}),m.push(h))}e<p-1&&(c[e]>=0&&(h=Ye({inputs:{x:h},backend:n,attrs:{axis:c[e]-(i.length-f),keepDims:!1}}),m.push(h)),f--)}for(const e of m)e!==h&&n.disposeIntermediateTensorInfo(e);return h}};const Je={kernelName:r.HEU,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n}=e,{dy:s,y:o}=t;(0,a.H)([s,o],"eluGrad");const i=new Float32Array(r.D5U.sizeFromShape(o.shape)),u=n.data.get(o.dataId).values,l=n.data.get(s.dataId).values;for(let e=0;e<u.length;++e){const t=u[e];i[e]=t>=1?l[e]:l[e]*(t+1)}return n.makeTensorInfo(o.shape,"float32",i)}};var et=n(7679);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const tt=r.Wap.ERF_P,nt=r.Wap.ERF_A1,rt=r.Wap.ERF_A2,at=r.Wap.ERF_A3,st=r.Wap.ERF_A4,ot=r.Wap.ERF_A5,it=(0,l.A)(r.Omj,(e=>{const t=Math.sign(e),n=Math.abs(e),r=1/(1+tt*n);return t*(1-((((ot*r+st)*r+at)*r+rt)*r+nt)*r*Math.exp(-n*n))})),ut={kernelName:r.Omj,backendName:"cpu",kernelFunc:it};var lt=n(1211);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ct(e){const{inputs:t,backend:n,attrs:a}=e,{input:s}=t,{dim:o}=a,i=s.shape.length,u=s.shape.slice();let l=o;return o<0&&(r.D5U.assert(-(i+1)<=o,(()=>`Axis must be in the interval [${-(i+1)}, ${i}]`)),l=i+o+1),u.splice(l,0,1),$({inputs:{x:s},backend:n,attrs:{shape:u}})}const dt={kernelName:r.YFo,backendName:"cpu",kernelFunc:ct};var pt=n(969);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const ht=(0,m.b)(((e,t)=>e/t)),ft=(0,q.j)(r.oHH,ht),mt={kernelName:r.oHH,backendName:"cpu",kernelFunc:ft};var gt=n(1649);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function xt(e,t,n){const a=e.shape,s=a[0],o=a[1],i=n.data.get(e.dataId),u=i.complexTensorInfos.real,l=i.complexTensorInfos.imag,c=[s,o],d=r.D5U.sizeFromShape(c),p=r.D5U.getTypedArrayFromDType("float32",d),h=r.D5U.getTypedArrayFromDType("float32",d);for(let e=0;e<s;e++){const a=(0,ue.tP)({inputs:{x:u},backend:n,attrs:{begin:[e,0],size:[1,o]}}),s=(0,ue.tP)({inputs:{x:l},backend:n,attrs:{begin:[e,0],size:[1,o]}}),i=(0,xe.P)({inputs:{real:a,imag:s},backend:n}),{real:c,imag:d}=bt(i,t,n),f=r.Wap.mergeRealAndImagArrays(c,d);for(let t=0;t<o;t++){const n=r.Wap.getComplexWithIndex(f,t);p[e*o+t]=n.real,h[e*o+t]=n.imag}n.disposeIntermediateTensorInfo(a),n.disposeIntermediateTensorInfo(s),n.disposeIntermediateTensorInfo(i)}const f=n.makeTensorInfo(c,"float32",p),m=n.makeTensorInfo(c,"float32",h),g=(0,xe.P)({inputs:{real:f,imag:m},backend:n});return n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(m),g}function bt(e,t,n){const a=r.D5U.sizeFromShape(e.shape),s=n.data.get(e.dataId),o=n.data.get(s.complexTensorInfos.real.dataId).values,i=n.data.get(s.complexTensorInfos.imag.dataId).values;if(0==((u=a)&u-1)){const s=vt(o,i,a,t,n),u=[e.shape[0],e.shape[1]];if(t){const e=n.makeTensorInfo(u,"float32",s.real),t=n.makeTensorInfo(u,"float32",s.imag),o=n.makeTensorInfo([],"float32",r.D5U.createScalarValue(a,"float32")),i=(0,p.y)({inputs:{x:o},backend:n}),l=mt.kernelFunc({inputs:{a:e,b:o},backend:n}),c=mt.kernelFunc({inputs:{a:t,b:i},backend:n}),d=n.data.get(l.dataId).values,h=n.data.get(c.dataId).values;return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(o),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(l),n.disposeIntermediateTensorInfo(c),{real:d,imag:h}}return s}{const e=function(e,t,n){const a=new Float32Array(2*t);for(let s=0;s<t;s++){let o=0,i=0;for(let a=0;a<t;a++){const u=r.Wap.exponent(s*a,t,n),l=r.Wap.getComplexWithIndex(e,a);o+=l.real*u.real-l.imag*u.imag,i+=l.real*u.imag+l.imag*u.real}n&&(o/=t,i/=t),r.Wap.assignToTypedArray(a,o,i,s)}return a}(r.Wap.mergeRealAndImagArrays(o,i),a,t);return r.Wap.splitRealAndImagArrays(e)}var u}function vt(e,t,n,a,s){if(1===n)return{real:e,imag:t};const o=r.Wap.mergeRealAndImagArrays(e,t),i=n/2,u=r.Wap.complexWithEvenIndex(o),l=u.real,c=u.imag,d=[l.length],p=s.makeTensorInfo(d,"float32",l),h=s.makeTensorInfo(d,"float32",c),f=(0,xe.P)({inputs:{real:p,imag:h},backend:s}),m=r.Wap.complexWithOddIndex(o),g=m.real,x=m.imag,b=[g.length],v=s.makeTensorInfo(b,"float32",g),k=s.makeTensorInfo(b,"float32",x),y=(0,xe.P)({inputs:{real:v,imag:k},backend:s}),I=vt(l,c,i,a,s),w=I.real,C=I.imag,$=[w.length],T=s.makeTensorInfo($,"float32",w),E=s.makeTensorInfo($,"float32",C),N=(0,xe.P)({inputs:{real:T,imag:E},backend:s}),R=vt(g,x,i,a,s),D=R.real,A=R.imag,F=[D.length],_=s.makeTensorInfo(F,"float32",D),O=s.makeTensorInfo(F,"float32",A),M=(0,xe.P)({inputs:{real:_,imag:O},backend:s}),U=r.Wap.exponents(n,a),P=[U.real.length],W=s.makeTensorInfo(P,"float32",U.real),B=s.makeTensorInfo(P,"float32",U.imag),L=(0,xe.P)({inputs:{real:W,imag:B},backend:s}),z=(0,qe.Jp)({inputs:{a:L,b:M},backend:s}),V=(0,S.IH)({inputs:{a:N,b:z},backend:s}),G=(0,gt.lu)({inputs:{a:N,b:z},backend:s}),H=(0,Ie.k)({inputs:{input:V},backend:s}),j=(0,Ie.k)({inputs:{input:G},backend:s}),X=ke({inputs:{input:V},backend:s}),q=ke({inputs:{input:G},backend:s}),K=we({inputs:[H,j],backend:s,attrs:{axis:0}}),Y=we({inputs:[X,q],backend:s,attrs:{axis:0}}),Z=s.data.get(K.dataId).values,Q=s.data.get(Y.dataId).values;return s.disposeIntermediateTensorInfo(p),s.disposeIntermediateTensorInfo(h),s.disposeIntermediateTensorInfo(f),s.disposeIntermediateTensorInfo(v),s.disposeIntermediateTensorInfo(k),s.disposeIntermediateTensorInfo(y),s.disposeIntermediateTensorInfo(T),s.disposeIntermediateTensorInfo(E),s.disposeIntermediateTensorInfo(N),s.disposeIntermediateTensorInfo(_),s.disposeIntermediateTensorInfo(O),s.disposeIntermediateTensorInfo(M),s.disposeIntermediateTensorInfo(W),s.disposeIntermediateTensorInfo(B),s.disposeIntermediateTensorInfo(L),s.disposeIntermediateTensorInfo(z),s.disposeIntermediateTensorInfo(V),s.disposeIntermediateTensorInfo(G),s.disposeIntermediateTensorInfo(H),s.disposeIntermediateTensorInfo(X),s.disposeIntermediateTensorInfo(j),s.disposeIntermediateTensorInfo(q),s.disposeIntermediateTensorInfo(K),s.disposeIntermediateTensorInfo(Y),{real:Z,imag:Q}}const kt={kernelName:r.vwp,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n}=e,{input:a}=t,s=r.D5U.sizeFromShape(a.shape),o=a.shape[a.shape.length-1],i=$({inputs:{x:a},backend:n,attrs:{shape:[s/o,o]}}),u=xt(i,!1,n),l=$({inputs:{x:u},backend:n,attrs:{shape:a.shape}});return n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(u),l}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function yt(e){const{backend:t,attrs:n}=e,{shape:a,value:s,dtype:o}=n,i=o||r.D5U.inferDtype(s),u=r.D5U.getArrayFromDType(i,r.D5U.sizeFromShape(a));return function(e,t,n){e.fill(t)}(u,s),t.makeTensorInfo(a,i,u)}const It={kernelName:r.deh,backendName:"cpu",kernelFunc:yt};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const wt={kernelName:r.Uyb,backendName:"cpu",kernelFunc:({inputs:e,attrs:t,backend:n})=>{const{image:a}=e,s=n,o=r.D5U.getTypedArrayFromDType(a.dtype,r.D5U.sizeFromShape(a.shape)),[i,u,l,c]=a.shape,d=s.data.get(a.dataId).values;for(let e=0;e<i;e++){const t=e*l*u*c;for(let e=0;e<u;e++){const n=e*(l*c);for(let e=0;e<l;e++){const r=e*c;for(let a=0;a<c;a++){const s=Math.round(l-e-1),i=t+n+r+a;let u=d[i];if(s>=0&&s<l){u=d[t+n+s*c+a]}o[i]=u}}}}return{dataId:s.write(o,a.shape,a.dtype),shape:a.shape,dtype:a.dtype}}};var Ct=n(6574);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const St=(0,m.b)(((e,t)=>Math.floor(e/t))),$t=(0,q.j)(r.jeX,St,null,"int32"),Tt={kernelName:r.jeX,backendName:"cpu",kernelFunc:$t};const Et={kernelName:r._V0,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a,filter:s,bias:o,preluActivationWeights:i}=t,{strides:u,pad:l,dataFormat:c,dilations:d,dimRoundingMode:p,activation:h,leakyreluAlpha:f}=r;let m=Se({inputs:{x:a,filter:s},backend:n,attrs:{strides:u,pad:l,dataFormat:c,dilations:d,dimRoundingMode:p}});if(o){const e=m;m=(0,S.IH)({inputs:{a:m,b:o},backend:n}),n.disposeIntermediateTensorInfo(e)}if(h){const e=m;m=C(n,m,h,i,f),n.disposeIntermediateTensorInfo(e)}return m}};const Nt={kernelName:r.luS,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a,filter:s,bias:o,preluActivationWeights:i}=t,{strides:u,pad:l,dataFormat:c,dilations:d,dimRoundingMode:p,activation:h,leakyreluAlpha:f}=r;let m=Be({inputs:{x:a,filter:s},backend:n,attrs:{strides:u,pad:l,dataFormat:c,dilations:d,dimRoundingMode:p}});if(o){const e=m;m=(0,S.IH)({inputs:{a:m,b:o},backend:n}),n.disposeIntermediateTensorInfo(e)}if(h){const e=m;m=C(n,m,h,i,f),n.disposeIntermediateTensorInfo(e)}return m}};var Rt=n(1820);const Dt={kernelName:r.q1x,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n}=e,{params:a,indices:s}=t,o=r.D5U.sizeFromShape(a.shape),i=s.shape,u=i[i.length-1],[l,c,d,p]=r.Wap.prepareAndValidate(a,s);if(0===c)return n.makeTensorInfo(l,a.dtype,[]);const h=n.data.get(s.dataId).values,f=n.bufferSync(a),m=(0,Rt.m)(h,f,a.dtype,c,u,d,p,a.shape,o);return n.makeTensorInfo(l,a.dtype,m.values)}};var At=n(4468);const Ft={kernelName:r.qi_,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{x:o,indices:i}=t,{axis:u,batchDims:l}=s;(0,a.H)([o,i],"gatherV2");let c=l;null==l&&(c=0);const d=r.D5U.sizeFromShape(i.shape),p=r.D5U.parseAxisParam(u,o.shape)[0],h=r.Wap.segment_util.collectGatherOpShapeInfo(o,i,p,c),f=$({inputs:{x:o},backend:n,attrs:{shape:[h.batchSize,h.outerSize,h.dimSize,h.sliceSize]}}),m=$({inputs:{x:i},backend:n,attrs:{shape:[h.batchSize,d/h.batchSize]}}),g=[h.batchSize,h.outerSize,d/h.batchSize,h.sliceSize],x=n.bufferSync(m),b=n.bufferSync(f),v=(0,At.i)(b,x,g);return n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(m),n.makeTensorInfo(h.outputShape,v.dtype,v.values)}};var _t=n(6272),Ot=n(6259);const Mt={kernelName:r.Qg5,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n}=e,{input:a}=t,s=r.D5U.sizeFromShape(a.shape),o=a.shape[a.shape.length-1],i=$({inputs:{x:a},backend:n,attrs:{shape:[s/o,o]}}),u=xt(i,!0,n),l=$({inputs:{x:u},backend:n,attrs:{shape:a.shape}});return n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(u),l}},Ut=(0,l.A)(r.avt,(e=>Number.isFinite(e)?1:0),"bool"),Pt={kernelName:r.avt,backendName:"cpu",kernelFunc:Ut},Wt=(0,l.A)(r.iWB,(e=>Math.abs(e)===1/0?1:0),"bool"),Bt={kernelName:r.iWB,backendName:"cpu",kernelFunc:Wt},Lt=(0,l.A)(r.r7n,(e=>Number.isNaN(e)?1:0),"bool"),zt={kernelName:r.r7n,backendName:"cpu",kernelFunc:Lt};var Vt=n(8405),Gt=n(635),Ht=n(1325);const jt={kernelName:r.e7N,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{backend:t,attrs:n}=e,{start:r,stop:a,num:s}=n,o=(0,Ht.b)(r,a,s);return t.makeTensorInfo([o.length],"float32",o)}};var Xt=n(5223);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const qt=(0,l.A)(r.kU,(e=>Math.log1p(e))),Kt={kernelName:r.kU,backendName:"cpu",kernelFunc:qt},Yt=(0,m.b)(((e,t)=>e&&t)),Zt=(0,q.j)(r.PYm,Yt,null,"bool"),Qt={kernelName:r.PYm,backendName:"cpu",kernelFunc:Zt},Jt=(0,l.A)(r.VfG,(e=>e?0:1),"bool"),en={kernelName:r.VfG,backendName:"cpu",kernelFunc:Jt},tn=(0,m.b)(((e,t)=>e||t)),nn=(0,q.j)(r.MZg,tn,null,"bool"),rn={kernelName:r.MZg,backendName:"cpu",kernelFunc:nn};const an={kernelName:r.eZ0,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{depthRadius:i,bias:u,alpha:l,beta:c}=s;(0,a.H)(o,"LRN");const d=o.shape[3],p=d-1,h=n.data.get(o.dataId).values,f=r.D5U.sizeFromShape(o.shape),m=new Float32Array(f);function g(e){const t=e%d;let n=e-t+Math.max(0,t-i);const r=e-t+Math.min(t+i,p);let a=0;for(;n<=r;n++){const e=h[n];a+=e*e}return a}for(let e=0;e<f;e++){const t=g(e),n=h[e]*Math.pow(u+l*t,-c);m[e]=n}return n.makeTensorInfo(o.shape,o.dtype,m)}};const sn={kernelName:r.Hhh,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{x:o,y:i,dy:u}=t,{depthRadius:l,bias:c,alpha:d,beta:p}=s;(0,a.H)(u,"LRNGrad");const h=r.D5U.sizeFromShape(u.shape),f=u.shape[3],m=n.data.get(u.dataId).values,g=n.data.get(o.dataId).values,x=n.data.get(i.dataId).values,b=new Float32Array(h),v=h;for(let e=0;e<v;e++){const t=e%f,n=e-t+Math.max(0,t-l),r=e-t+Math.min(f,t+l+1);let a=0;for(let e=n;e<r;e++)a+=Math.pow(g[e],2);a=d*a+c;for(let t=n;t<r;t++){let n=-2*d*p*g[t]*x[e]/a;e===t&&(n+=Math.pow(a,-p)),n*=m[e],b[t]+=n}}return n.makeTensorInfo(u.shape,o.dtype,b)}};var on=n(5126),un=n(7107);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ln(e){const{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{reductionIndices:i,keepDims:u}=s,l=n;let c=o.shape;const d=c.length,p=r.D5U.parseAxisParam(i,c);let h=p;const f=r.Wap.getAxesPermutation(h,d);let m=l.data.get(o.dataId).values;if(null!=f){const e=new Array(d);for(let t=0;t<e.length;t++)e[t]=c[f[t]];m=(0,un.H)(m,c,o.dtype,f,e),h=r.Wap.getInnerMostAxes(h.length,d),c=e}(0,a.H)(o,"max"),r.Wap.assertAxesAreInnerMostDims("max",h,d);const[g,x]=r.Wap.computeOutAndReduceShapes(c,h),b=r.D5U.sizeFromShape(x),v=(0,on.B)(m,b,g,o.dtype),k=l.write(v,g,o.dtype);let y=g;if(u){y=r.Wap.expandShapeToKeepDim(g,p)}return{dataId:k,shape:y,dtype:o.dtype}}const cn={kernelName:r.YoZ,backendName:"cpu",kernelFunc:ln};var dn=n(1717);const pn={kernelName:r.mTV,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{x:o}=t;(0,a.H)(o,"maxPool");const{filterSize:i,strides:u,pad:l,dimRoundingMode:c}=s;r.D5U.assert(r.Wap.eitherStridesOrDilationsAreOne(u,1),(()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${u} and dilations '1'`));const d=r.Wap.computePool2DInfo(o.shape,i,u,1,l,c);let h;if(1===d.filterWidth&&1===d.filterHeight&&r.D5U.arraysEqual(d.inShape,d.outShape))h=(0,p.y)({inputs:{x:o},backend:n});else{const e=n.data.get(o.dataId).values,t=r.D5U.computeStrides(o.shape),a=ee(e,o.shape,o.dtype,t,d,"max");h=n.makeTensorInfo(d.outShape,o.dtype,a.values)}return h}};const hn={kernelName:r.OAf,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{filterSize:i,strides:u,pad:l,dimRoundingMode:c,dataFormat:d}=s;(0,a.H)(o,"maxPool3d");const p=r.Wap.computePool3DInfo(o.shape,i,u,1,l,c,d),h=ne(n.data.get(o.dataId).values,o.shape,o.dtype,r.D5U.computeStrides(o.shape),p,"max");return n.makeTensorInfo(h.shape,"float32",h.values)}};const fn={kernelName:r.OU7,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{dy:o,input:i}=t,{filterSize:u,strides:l,pad:c,dimRoundingMode:d}=s;(0,a.H)([o,i],"maxPool3DGrad");const p=r.Wap.computePool3DInfo(i.shape,u,l,1,c,d),h=function(e,t){const n=(0,r.f3b)(t.outShape,"int32"),a=t.strideDepth,s=t.strideHeight,o=t.strideWidth,i=t.dilationDepth,u=t.dilationHeight,l=t.dilationWidth,c=t.effectiveFilterDepth,d=t.effectiveFilterHeight,p=t.effectiveFilterWidth,h=t.padInfo.front,f=t.padInfo.top,m=t.padInfo.left;for(let r=0;r<t.batchSize;++r)for(let g=0;g<t.inChannels;++g)for(let x=0;x<t.outDepth;++x){const b=x*a-h;let v=b;for(;v<0;)v+=i;const k=Math.min(t.inDepth,c+b);for(let a=0;a<t.outHeight;++a){const c=a*s-f;let h=c;for(;h<0;)h+=u;const y=Math.min(t.inHeight,d+c);for(let s=0;s<t.outWidth;++s){const f=s*o-m;let I=f;for(;I<0;)I+=l;const w=Math.min(t.inWidth,p+f);let C=Number.NEGATIVE_INFINITY,S=-1;for(let t=v;t<k;t+=i){const n=t-b;for(let a=h;a<y;a+=u){const s=a-c;for(let o=I;o<w;o+=l){const i=o-f,u=e.get(r,t,a,o,g);u>=C&&(C=u,S=n*d*p+s*d+i)}}}n.set(S,r,x,a,s,g)}}}return n}(n.bufferSync(i),p),f=p.strideDepth,m=p.strideHeight,g=p.strideWidth,x=p.dilationDepth,b=p.dilationHeight,v=p.dilationWidth,k=p.effectiveFilterDepth,y=p.effectiveFilterHeight,I=p.effectiveFilterWidth,w=k-1-p.padInfo.front,C=I-1-p.padInfo.left,S=y-1-p.padInfo.top,$=(0,r.f3b)(i.shape,"float32"),T=n.bufferSync(o);for(let e=0;e<p.batchSize;++e)for(let t=0;t<p.inChannels;++t)for(let n=0;n<p.inDepth;++n)for(let r=0;r<p.inHeight;++r)for(let a=0;a<p.inWidth;++a){const s=n-w,o=r-S,i=a-C;let u=0;for(let n=0;n<k;n+=x){const r=(s+n)/f;if(!(r<0||r>=p.outDepth||Math.floor(r)!==r))for(let a=0;a<y;a+=b){const s=(o+a)/m;if(!(s<0||s>=p.outHeight||Math.floor(s)!==s))for(let o=0;o<I;o+=v){const l=(i+o)/g;if(l<0||l>=p.outWidth||Math.floor(l)!==l)continue;const c=k*y*I-1-h.get(e,r,s,l,t)===n*y*I+a*I+o?1:0;if(0===c)continue;u+=T.get(e,r,s,l,t)*c}}}$.set(u,e,n,r,a,t)}return n.makeTensorInfo($.shape,$.dtype,$.values)}};const mn={kernelName:r.OV7,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{dy:o,input:i,output:u}=t,l=i;(0,a.H)([i,u],"maxPoolGrad");const{filterSize:c,strides:d,pad:p,dimRoundingMode:h}=s,f=r.Wap.computePool2DInfo(l.shape,c,d,1,p,h),m=n.data.get(l.dataId).values,g=(0,r.f3b)(f.outShape,l.dtype,te(m,l.shape,l.dtype,f).values),x=f.strideHeight,b=f.strideWidth,v=f.dilationHeight,k=f.dilationWidth,y=f.effectiveFilterHeight,I=f.effectiveFilterWidth,w=I-1-f.padInfo.left,C=y-1-f.padInfo.top,S=(0,r.f3b)(l.shape,"float32"),$=n.data.get(o.dataId).values,T=(0,r.f3b)(o.shape,"float32",$);for(let e=0;e<f.batchSize;++e)for(let t=0;t<f.inChannels;++t)for(let n=0;n<f.inHeight;++n)for(let r=0;r<f.inWidth;++r){const a=n-C,s=r-w;let o=0;for(let n=0;n<y;n+=v){const r=(a+n)/x;if(!(r<0||r>=f.outHeight||Math.floor(r)!==r))for(let a=0;a<I;a+=k){const i=(s+a)/b;if(i<0||i>=f.outWidth||Math.floor(i)!==i)continue;const u=y*I-1-g.get(e,r,i,t)===n*I+a?1:0;if(0===u)continue;o+=T.get(e,r,i,t)*u}}S.set(o,e,n,r,t)}return n.makeTensorInfo(S.shape,S.dtype,S.values)}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const gn={kernelName:r.vFR,backendName:"cpu",kernelFunc:({inputs:e,attrs:t,backend:n})=>{const{x:s}=e,{filterSize:o,strides:i,pad:u,includeBatchInIndex:l}=t,c=n;(0,a.H)(s,"MaxPoolWithArgmax");const d=c.data.get(s.dataId).values,p=r.Wap.computePool2DInfo(s.shape,o,i,[1,1],u),[h,f]=
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n,a,s){const o=ee(e,0,n,r.D5U.computeStrides(t),s,"max"),i=te(e,t,n,s,!0,a);return[o.values,i.values]}(d,s.shape,s.dtype,l,p),m=c.write(h,p.outShape,s.dtype),g=c.write(f,p.outShape,s.dtype);return[{dataId:m,shape:p.outShape,dtype:s.dtype},{dataId:g,shape:p.outShape,dtype:"int32"}]}};const xn={kernelName:r.q2K,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:a}=e,{x:s}=t,{axis:o,keepDims:i}=a,u=r.D5U.parseAxisParam(o,s.shape),l=r.Wap.computeOutAndReduceShapes(s.shape,u)[1],c=r.D5U.sizeFromShape(l),d=[],p=n.makeTensorInfo([],"float32",new Float32Array([c]));d.push(p);const h=(0,he.p)({inputs:{x:s},backend:n,attrs:{dtype:"float32"}});d.push(h);const f=ft({inputs:{a:h,b:p},backend:n});d.push(f);const m=Ye({inputs:{x:f},backend:n,attrs:{axis:o,keepDims:i}});return d.forEach((e=>n.disposeIntermediateTensorInfo(e))),m}};const bn={kernelName:r.c17,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{axis:i,keepDims:u}=s;(0,a.H)(o,"min");const l=r.D5U.parseAxisParam(i,o.shape);let c=l;const d=r.Wap.getAxesPermutation(c,o.shape.length);let p=o;null!=d&&(p=(0,U.p)({inputs:{x:o},backend:n,attrs:{perm:d}}),c=r.Wap.getInnerMostAxes(c.length,o.shape.length)),r.Wap.assertAxesAreInnerMostDims("min",c,p.shape.length);const[h,f]=r.Wap.computeOutAndReduceShapes(p.shape,c),m=r.D5U.sizeFromShape(f),g=r.D5U.makeZerosTypedArray(r.D5U.sizeFromShape(h),p.dtype),x=n.data.get(p.dataId).values;for(let e=0;e<g.length;++e){const t=e*m;let n=x[t];for(let e=0;e<m;++e){const r=x[t+e];(Number.isNaN(r)||r<n)&&(n=r)}g[e]=n}null!=d&&n.disposeIntermediateTensorInfo(p);const b=n.makeTensorInfo(h,p.dtype,g);if(u){const e=$({inputs:{x:b},backend:n,attrs:{shape:r.Wap.expandShapeToKeepDim(h,l)}});return n.disposeIntermediateTensorInfo(b),e}return b}};var vn=n(612);const kn={kernelName:r.jQs,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{paddings:i,mode:u}=s;(0,a.H)(o,"mirrorPad");const l=i.map(((e,t)=>e[0]+o.shape[t]+e[1])),c=i.map((e=>e[0])),d=i.map(((e,t)=>e[0]+o.shape[t])),p="reflect"===u?0:1,h=n.data.get(o.dataId).values,f=o.shape.length,m=r.D5U.computeStrides(o.shape),g=r.D5U.sizeFromShape(l),x=l.length,b=r.D5U.computeStrides(l),v=r.D5U.getTypedArrayFromDType(o.dtype,g);for(let e=0;e<g;e++){let t=r.D5U.indexToLoc(e,x,b);for(let e=0;e<x;e++)t[e]<c[e]?t[e]=2*c[e]-t[e]-p:t[e]>=d[e]&&(t[e]=2*(d[e]-1)-t[e]+p);t=t.map(((e,t)=>e-c[t]));const n=r.D5U.locToIndex(t,f,m);v[e]=h[n]}return{dataId:n.write(v,l,o.dtype),shape:l,dtype:o.dtype}}},yn=(0,m.b)(((e,t)=>{const n=e%t;return e<0&&t<0||e>=0&&t>=0?n:(n+t)%t})),In=(0,q.j)(r.Vbg,yn),wn={kernelName:r.Vbg,backendName:"cpu",kernelFunc:In};var Cn=n(6377);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Sn(e){const{inputs:t,backend:n,attrs:a}=e,{logits:s}=t,{dim:o}=a,i=s.shape.length;let u=o;if(-1===u&&(u=i-1),u!==i-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${i} and dim was ${u}`);const l=r.D5U.parseAxisParam([u],s.shape),c=ln({inputs:{x:s},backend:n,attrs:{reductionIndices:l,keepDims:!1}}),d=r.Wap.expandShapeToKeepDim(c.shape,l),p=$({inputs:{x:c},backend:n,attrs:{shape:d}}),h=(0,gt.lu)({inputs:{a:s,b:p},backend:n}),f=(0,lt.Qq)({inputs:{x:h},backend:n}),m=Ye({inputs:{x:f},backend:n,attrs:{axis:l,keepDims:!1}}),g=$({inputs:{x:m},backend:n,attrs:{shape:d}}),x=ft({inputs:{a:f,b:g},backend:n});return n.disposeIntermediateTensorInfo(c),n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(g),x}const $n={kernelName:r.Gcp,backendName:"cpu",kernelFunc:Sn};const Tn={kernelName:r.NZg,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{logits:o}=t,{numSamples:i,seed:u,normalized:l}=s;(0,a.H)(o,"multinomial");const c=l?o:Sn({inputs:{logits:o},backend:n,attrs:{dim:-1}}),d=c.shape[0],p=c.shape[1],h=n.data.get(c.dataId).values,f=[d,i],m=r.D5U.makeZerosTypedArray(r.D5U.sizeFromShape(f),"int32");for(let e=0;e<d;++e){const t=e*p,n=new Float32Array(p-1);n[0]=h[t];for(let e=1;e<n.length;++e)n[e]=n[e-1]+h[t+e];const r=Cn.alea(u.toString()),a=e*i;for(let e=0;e<i;++e){const t=r();m[a+e]=n.length;for(let r=0;r<n.length;r++)if(t<n[r]){m[a+e]=r;break}}}return l||n.disposeIntermediateTensorInfo(c),n.makeTensorInfo(f,"int32",m)}};var En=n(854);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Nn=r.GDt.GP;const Rn={kernelName:r.uv1,backendName:"cpu",kernelFunc:function(e){const{inputs:t,backend:n,attrs:r}=e,{boxes:s,scores:o}=t,{maxOutputSize:i,iouThreshold:u,scoreThreshold:l}=r;(0,a.H)(s,"NonMaxSuppression");const c=n.data.get(s.dataId).values,d=n.data.get(o.dataId).values,{selectedIndices:p}=Nn(c,d,i,u,l);return n.makeTensorInfo([p.length],"int32",new Int32Array(p))}},Dn=r.GDt.qP;const An={kernelName:r.cye,backendName:"cpu",kernelFunc:function(e){const{inputs:t,backend:n,attrs:r}=e,{boxes:s,scores:o}=t,{maxOutputSize:i,iouThreshold:u,scoreThreshold:l,padToMaxOutputSize:c}=r;(0,a.H)(s,"NonMaxSuppressionPadded");const d=n.data.get(s.dataId).values,p=n.data.get(o.dataId).values,{selectedIndices:h,validOutputs:f}=Dn(d,p,i,u,l,c);return[n.makeTensorInfo([h.length],"int32",new Int32Array(h)),n.makeTensorInfo([],"int32",new Int32Array([f]))]}},Fn=r.GDt.pA;const _n={kernelName:r.W0H,backendName:"cpu",kernelFunc:function(e){const{inputs:t,backend:n,attrs:r}=e,{boxes:s,scores:o}=t,{maxOutputSize:i,iouThreshold:u,scoreThreshold:l,softNmsSigma:c}=r;(0,a.H)(s,"NonMaxSuppressionWithScore");const d=n.data.get(s.dataId).values,p=n.data.get(o.dataId).values,h=i,f=u,m=l,g=c,{selectedIndices:x,selectedScores:b}=Fn(d,p,h,f,m,g);return[n.makeTensorInfo([x.length],"int32",new Int32Array(x)),n.makeTensorInfo([b.length],"float32",new Float32Array(b))]}};var On=n(8584);const Mn={kernelName:r.we_,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{indices:o}=t,{depth:i,onValue:u,offValue:l}=s;(0,a.H)(o,"oneHot");const c=r.D5U.sizeFromShape(o.shape),d=new Float32Array(c*i);d.fill(l);const p=n.data.get(o.dataId).values;for(let e=0;e<c;++e)p[e]>=0&&p[e]<i&&(d[e*i+p[e]]=u);return n.makeTensorInfo([...o.shape,i],"int32",d)}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Un(e){const{inputs:t,backend:n}=e,{x:r}=t;if("string"===r.dtype)throw new Error("zerosLike is not supported for string tensors");if("complex64"===r.dtype){const e=(0,Ie.k)({inputs:{input:r},backend:n}),t=Un({inputs:{x:e},backend:n}),a=ke({inputs:{input:r},backend:n}),s=Un({inputs:{x:a},backend:n}),o=(0,xe.P)({inputs:{real:t,imag:s},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(a),n.disposeIntermediateTensorInfo(s),o}return yt({backend:n,attrs:{shape:r.shape,value:0,dtype:r.dtype}})}const Pn={kernelName:r.RuY,backendName:"cpu",kernelFunc:Un};const Wn={kernelName:r.qWM,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function e(t){const{inputs:n,backend:r}=t,{x:a}=n;if("string"===a.dtype)throw new Error("onesLike is not supported for string tensors");if("complex64"===a.dtype){const t=(0,Ie.k)({inputs:{input:a},backend:r}),n=e({inputs:{x:t},backend:r}),s=ke({inputs:{input:a},backend:r}),o=Un({inputs:{x:s},backend:r}),i=(0,xe.P)({inputs:{real:n,imag:o},backend:r});return r.disposeIntermediateTensorInfo(t),r.disposeIntermediateTensorInfo(n),r.disposeIntermediateTensorInfo(s),r.disposeIntermediateTensorInfo(o),i}return yt({backend:r,attrs:{shape:a.shape,value:1,dtype:a.dtype}})}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Bn(e){const{inputs:t,backend:n,attrs:a}=e,{axis:s}=a;if(1===t.length)return ct({inputs:{input:t[0]},backend:n,attrs:{dim:s}});const o=t[0].shape,i=t[0].dtype;t.forEach((e=>{r.D5U.assertShapesMatch(o,e.shape,"All tensors passed to stack must have matching shapes"),r.D5U.assert(i===e.dtype,(()=>"All tensors passed to stack must have matching dtypes"))}));const u=[],l=we({inputs:t.map((e=>{const t=ct({inputs:{input:e},backend:n,attrs:{dim:s}});return u.push(t),t})),backend:n,attrs:{axis:s}});return u.forEach((e=>n.disposeIntermediateTensorInfo(e))),l}const Ln={kernelName:r.QiL,backendName:"cpu",kernelFunc:Bn};const zn={kernelName:r.lyA,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{paddings:i,constantValue:u}=s;(0,a.H)(o,"pad");const l=i.map(((e,t)=>e[0]+o.shape[t]+e[1])),c=i.map((e=>e[0])),d=n.data.get(o.dataId).values,p=r.D5U.sizeFromShape(o.shape),h=o.shape.length,f=r.D5U.computeStrides(o.shape),m=r.D5U.sizeFromShape(l),g=l.length,x=r.D5U.computeStrides(l),b=r.D5U.getTypedArrayFromDType(o.dtype,m);0!==u&&b.fill(u);for(let e=0;e<p;e++){const t=r.D5U.indexToLoc(e,h,f).map(((e,t)=>e+c[t]));b[r.D5U.locToIndex(t,g,x)]=d[e]}return{dataId:n.write(b,l,o.dtype),shape:l,dtype:o.dtype}}},Vn=(0,m.b)(((e,t)=>Math.pow(e,t))),Gn=(0,q.j)(r.pe_,Vn),Hn={kernelName:r.pe_,backendName:"cpu",kernelFunc:Gn};var jn=n(9560),Xn=n(9230);const qn={kernelName:r.e6w,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{backend:t,attrs:n}=e,{start:r,stop:a,dtype:s,step:o}=n,i=(0,Xn.b)(r,a,o,s);return t.makeTensorInfo([i.length],s,i)}},Kn=(0,l.A)(r.$HU,(e=>1/e)),Yn={kernelName:r.$HU,backendName:"cpu",kernelFunc:Kn};const Zn={kernelName:r._Yw,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{images:o}=t,{alignCorners:i,halfPixelCenters:u,size:l}=s;(0,a.H)(o,"resizeBilinear");const c=r.D5U.computeStrides(o.shape),[d,p]=l,[h,f,m,g]=o.shape,x=n.data.get(o.dataId).values,b=new Float32Array(r.D5U.sizeFromShape([h,d,p,g])),v=[i&&d>1?f-1:f,i&&p>1?m-1:m],k=[i&&d>1?d-1:d,i&&p>1?p-1:p];let y=0;const I=v[0]/k[0],w=v[1]/k[1];for(let e=0;e<h;e++)for(let t=0;t<d;t++){let n;n=u?I*(t+.5)-.5:I*t;const r=Math.max(0,Math.floor(n)),a=n-r,s=Math.min(f-1,Math.ceil(n)),o=e*c[0]+r*c[1],i=e*c[0]+s*c[1];for(let e=0;e<p;e++){let t;t=u?w*(e+.5)-.5:w*e;const n=Math.max(0,Math.floor(t)),r=t-n,s=Math.min(m-1,Math.ceil(t)),l=o+n*c[2],d=i+n*c[2],p=o+s*c[2],h=i+s*c[2];for(let e=0;e<g;e++){const t=x[l+e],n=x[d+e],s=t+(x[p+e]-t)*r,o=s+(n+(x[h+e]-n)*r-s)*a;b[y++]=o}}}return n.makeTensorInfo([h,d,p,g],"float32",b)}};const Qn={kernelName:r.zbQ,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{images:o,dy:i}=t,{alignCorners:u}=s;(0,a.H)([i,o],"resizeBilinearGrad");const l=r.D5U.computeStrides(o.shape),[c,d,p,h]=o.shape,[,f,m]=i.shape,g=new Float32Array(c*d*p*h),x=[u&&f>1?d-1:d,u&&m>1?p-1:p],b=[u&&f>1?f-1:f,u&&m>1?m-1:m],v=x[0]/b[0],k=x[1]/b[1],y=n.data.get(i.dataId).values;let I=0;for(let e=0;e<c;e++){const t=e*l[0];for(let e=0;e<f;e++){const n=e*v,r=Math.floor(n),a=Math.min(Math.ceil(n),d-1),s=t+r*l[1],o=t+a*l[1],i=n-r,u=1-i;for(let e=0;e<m;e++){const t=e*k,n=Math.floor(t),r=Math.min(Math.ceil(t),p-1),a=t-n,c=1-a,d=s+n*l[2],f=s+r*l[2],m=o+n*l[2],x=o+r*l[2],b=u*c,v=u*a,w=i*c,C=i*a;for(let e=0;e<h;e++){const t=y[I++];g[d+e]+=t*b,g[f+e]+=t*v,g[m+e]+=t*w,g[x+e]+=t*C}}}}return n.makeTensorInfo([c,p,d,h],"float32",g)}};const Jn={kernelName:r.dpD,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{images:o}=t,{alignCorners:i,halfPixelCenters:u,size:l}=s;(0,a.H)(o,"resizeNearestNeighbor");const c=r.D5U.computeStrides(o.shape),[d,p]=l,[h,f,m,g]=o.shape,x=n.data.get(o.dataId).values,b=new Float32Array(h*d*p*g),v=[i&&d>1?f-1:f,i&&p>1?m-1:m],k=[i&&d>1?d-1:d,i&&p>1?p-1:p],y=v[0]/k[0],I=v[1]/k[1];let w=0;for(let e=0;e<h;e++){const t=e*c[0];for(let e=0;e<d;e++){const n=u?y*(e+.5):y*e;let r=Math.min(f-1,i?Math.round(n):Math.floor(n));u&&(r=Math.max(0,r));const a=t+r*c[1];for(let e=0;e<p;e++){const t=u?I*(e+.5):I*e;let n=Math.min(m-1,i?Math.round(t):Math.floor(t));u&&(n=Math.max(0,n));const r=a+n*c[2];for(let e=0;e<g;e++){const t=x[r+e];b[w++]=t}}}}return n.makeTensorInfo([h,d,p,g],o.dtype,b)}};const er={kernelName:r.Hmb,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{images:o,dy:i}=t,{alignCorners:u}=s;(0,a.H)([i,o],"resizeNearestNeighborGrad");const l=r.D5U.computeStrides(o.shape),c=r.D5U.computeStrides(i.shape),[d,p,h,f]=o.shape,[,m,g]=i.shape,x=new Float32Array(d*p*h*f),b=n.data.get(i.dataId).values,v=[u&&m>1?p-1:p,u&&g>1?h-1:h],k=[u&&m>1?m-1:m,u&&g>1?g-1:g],y=v[0]/k[0],I=v[1]/k[1],w=1/y,C=1/I,S=2*Math.ceil(w)+2,$=2*Math.ceil(C)+2;for(let e=0;e<d;e++){const t=e*l[0];for(let e=0;e<p;e++){const n=t+e*l[1],r=Math.floor(e*w),a=Math.floor(r-S/2);for(let r=0;r<h;r++){const s=n+r*l[2],o=Math.floor(r*C),i=Math.floor(o-$/2);for(let n=0;n<f;n++){let o=0;for(let s=0;s<S;s++){const l=s+a;if(l<0||l>=m)continue;const d=t+l*c[1],f=l*y;if(e===Math.min(p-1,u?Math.round(f):Math.floor(f)))for(let e=0;e<$;e++){const t=e+i;if(t<0||t>=g)continue;const a=d+t*c[2],s=t*I;r===Math.min(h-1,u?Math.round(s):Math.floor(s))&&(o+=b[a+n])}}x[s+n]=o}}}}return n.makeTensorInfo(o.shape,o.dtype,x)}};const tr={kernelName:r.mKl,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{dims:i}=s;(0,a.H)(o,"reverse");const u=o.shape.length,l=r.D5U.parseAxisParam(i,o.shape);if(0===u)return(0,p.y)({inputs:{x:o},backend:n});const c=new r.YDk(o.shape,o.dtype),d=n.bufferSync(o);for(let e=0;e<c.size;e++){const t=c.indexToLoc(e),n=t.slice();l.forEach((e=>n[e]=o.shape[e]-1-n[e])),c.set(d.get(...n),...t)}return n.makeTensorInfo(c.shape,c.dtype,c.values)}},nr={kernelName:r.b9H,backendName:"cpu",kernelFunc:({inputs:e,attrs:t,backend:n})=>{const{image:a}=e,{radians:s,fillValue:o,center:i}=t,u=n,l=r.D5U.getTypedArrayFromDType(a.dtype,r.D5U.sizeFromShape(a.shape)),[c,d,p,h]=a.shape,[f,m]=r.Wap.getImageCenter(i,d,p),g=Math.sin(s),x=Math.cos(s),b=u.data.get(a.dataId).values;for(let e=0;e<c;e++){const t=e*p*d*h;for(let e=0;e<d;e++){const n=e*(p*h);for(let r=0;r<p;r++){const a=r*h;for(let s=0;s<h;s++){const i=[c,e,r,s],u=i[2],v=i[1];let k=(u-f)*x-(v-m)*g,y=(u-f)*g+(v-m)*x;k=Math.round(k+f),y=Math.round(y+m);let I=o;if("number"!=typeof o&&(I=3===s?255:o[s]),k>=0&&k<p&&y>=0&&y<d){I=b[t+y*(p*h)+k*h+s]}l[t+n+a+s]=I}}}}return{dataId:u.write(l,a.shape,a.dtype),shape:a.shape,dtype:a.dtype}}},rr=(0,l.A)(r.e07,(e=>{const t=Math.floor(e);return e-t<.5?Math.floor(e):e-t>.5?Math.ceil(e):t%2==0?t:t+1})),ar={kernelName:r.e07,backendName:"cpu",kernelFunc:rr};var sr=n(7742);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function or(e,t,n,a,s,o,i,u,l,c){const d=[a/s,s],p=e.values,h=t.values;if(0===a)return(0,r.f3b)(n,t.dtype);const f=(0,r.f3b)(d,t.dtype);f.values.fill(l);for(let e=0;e<o;e++){const r=[];let o=0;for(let t=0;t<i;t++){const n=p[e*i+t];r.push(n),o+=n*u[t]}if(o<0||o>=a/s)throw new Error(`Invalid indices: ${r} does not index into ${n}`);for(let n=0;n<s;n++)c?f.values[o*s+n]+=h[e*s+n]:f.values[o*s+n]=0===t.rank?h[0]:h[e*s+n]}return f}const ir={kernelName:r.xQA,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:a}=e,{indices:s,updates:o}=t,{shape:i}=a,{sliceRank:u,numUpdates:l,sliceSize:c,strides:d,outputSize:p}=r.Wap.calculateShapes(o,s,i),h=or(n.bufferSync(s),n.bufferSync(o),i,p,c,l,u,d,0,!0);return n.makeTensorInfo(i,h.dtype,h.values)}};const ur={kernelName:r.PhF,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n}=e,{condition:s,t:o,e:i}=t;(0,a.H)([s,o,i],"select");const u=s.shape.length,l=n.data.get(s.dataId).values,c=n.data.get(o.dataId).values,d=n.data.get(i.dataId).values,p=(0,r.x8V)(o.dtype,i.dtype),h=r.D5U.makeZerosTypedArray(r.D5U.sizeFromShape(o.shape),p);let f=0;const m=0===u||u>1||1===o.shape.length?1:r.D5U.sizeFromShape(o.shape.slice(1));for(let e=0;e<l.length;e++)for(let t=0;t<m;t++)1===l[e]?h[f++]=c[e]:h[f++]=d[e];return n.makeTensorInfo(o.shape,p,h)}},lr=r.Wap.SELU_SCALEALPHA,cr=r.Wap.SELU_SCALE,dr=(0,l.A)(r.oFR,(e=>e>=0?cr*e:lr*(Math.exp(e)-1))),pr={kernelName:r.oFR,backendName:"cpu",kernelFunc:dr},hr=(0,l.A)(r.i5y,(e=>e<0?-1:e>0?1:0)),fr={kernelName:r.i5y,backendName:"cpu",kernelFunc:hr},mr=(0,l.A)(r.RQH,(e=>Math.sin(e))),gr={kernelName:r.RQH,backendName:"cpu",kernelFunc:mr},xr=(0,l.A)(r.wYB,(e=>Math.sinh(e))),br={kernelName:r.wYB,backendName:"cpu",kernelFunc:xr},vr=Math.log(1.1920928955078125e-7)+2,kr=(0,l.A)(r.MRv,(e=>{const t=e>-vr,n=e<vr,r=Math.exp(e);let a;return a=n?r:t?e:Math.log(1+r),a})),yr={kernelName:r.MRv,backendName:"cpu",kernelFunc:kr};const Ir={kernelName:r.TQc,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{blockShape:i,paddings:u}=s;(0,a.H)([o],"spaceToBatchND");const l=r.D5U.sizeFromShape(i),c=[[0,0]];c.push(...u);for(let e=1+i.length;e<o.shape.length;++e)c.push([0,0]);const d=zn.kernelFunc({inputs:{x:o},backend:n,attrs:{paddings:c,constantValue:0}}),p=r.Wap.getReshaped(d.shape,i,l,!1),h=r.Wap.getPermuted(p.length,i.length,!1),f=r.Wap.getReshapedPermuted(d.shape,i,l,!1),m=$({inputs:{x:d},backend:n,attrs:{shape:p}}),g={x:m},x={perm:h},b=(0,U.p)({inputs:g,backend:n,attrs:x}),v=$({inputs:{x:b},backend:n,attrs:{shape:f}});return n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(b),v}};var wr=n(2123);const Cr={kernelName:r.O3z,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n}=e,{indices:r,values:a,denseShape:s,defaultValue:o}=t;if(1!==s.shape.length)throw new Error(`Dense shape must be a vector, saw:\n        ${s.shape}`);if(2!==r.shape.length)throw new Error(`Indices must be a matrix, saw:\n        ${r.shape}`);if(1!==a.shape.length)throw new Error(`Values must be a vector, saw:\n        ${a.shape}`);if(0!==o.shape.length)throw new Error(`Default value must be a scalar, saw:\n        ${o.shape}`);const i=n.data.get(r.dataId).values,u=n.data.get(a.dataId).values,l=n.data.get(s.dataId).values,c=n.data.get(o.dataId).values[0],[d,p,h,f,m]=(0,wr.c)(i,r.shape,r.dtype,u,a.dtype,l,c);return[n.makeTensorInfo(p,r.dtype,d),n.makeTensorInfo([p[0]],a.dtype,h),n.makeTensorInfo([f.length],"bool",new Uint8Array(f.map((e=>Number(e))))),n.makeTensorInfo([m.length],r.dtype,new Int32Array(m))]}};var Sr=n(3849);const $r={kernelName:r.nhH,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n}=e,{inputIndices:r,inputShape:a,newShape:s}=t;if(2!==r.shape.length)throw new Error(`Input indices should be a matrix but received shape\n        ${r.shape}`);if(1!==a.shape.length)throw new Error(`Input shape should be a vector but received shape\n        ${a.shape}`);if(1!==s.shape.length)throw new Error(`Target shape should be a vector but received shape ${s.shape}`);const o=Array.from(n.data.get(a.dataId).values),i=n.data.get(r.dataId).values,u=Array.from(n.data.get(s.dataId).values),[l,c,d]=(0,Sr.U)(i,r.shape,r.dtype,o,u);return[n.makeTensorInfo(c,r.dtype,l),n.makeTensorInfo([d.length],s.dtype,new Int32Array(d))]}};var Tr=n(3989);const Er={kernelName:r.w3H,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n}=e,{data:r,indices:a,segmentIds:s}=t;if(r.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(1!==a.shape.length)throw new Error(`Indices should be a vector but received shape\n          ${a.shape}`);if(1!==s.shape.length)throw new Error(`Segment ids should be a vector but received shape\n          ${s.shape}`);const o=n.data.get(r.dataId).values,i=n.data.get(a.dataId).values,u=n.data.get(s.dataId).values,[l,c]=(0,Tr.V)(o,r.shape,r.dtype,i,u,!0);return n.makeTensorInfo(c,r.dtype,l)}};const Nr={kernelName:r.ZjV,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n}=e,{data:r,indices:a,segmentIds:s}=t;if(r.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(1!==a.shape.length)throw new Error(`Indices should be a vector but received shape\n         ${a.shape}`);if(1!==s.shape.length)throw new Error(`Segment ids should be a vector but received shape\n         ${s.shape}`);const o=n.data.get(r.dataId).values,i=n.data.get(a.dataId).values,u=n.data.get(s.dataId).values,[l,c]=(0,Tr.V)(o,r.shape,r.dtype,i,u);return n.makeTensorInfo(c,r.dtype,l)}};const Rr={kernelName:r.D2d,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:a}=e,{sparseIndices:s,sparseValues:o,defaultValue:i}=t,{outputShape:u}=a,{sliceRank:l,numUpdates:c,sliceSize:d,strides:p,outputSize:h}=r.Wap.calculateShapes(o,s,u),f=or(n.bufferSync(s),n.bufferSync(o),u,h,d,c,l,p,n.data.get(i.dataId).values[0],!1);return n.makeTensorInfo(u,f.dtype,f.values)}};const Dr={kernelName:r.L8s,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:a}=e,{x:s}=t,{numOrSizeSplits:o,axis:i}=a,u=r.D5U.parseAxisParam(i,s.shape)[0],l=r.Wap.prepareSplitSize(s,o,u),c=new Array(s.shape.length).fill(0),d=s.shape.slice();return l.map((e=>{const t=[...d];t[u]=e;const r=(0,ue.tP)({inputs:{x:s},backend:n,attrs:{begin:c,size:t}});return c[u]+=e,r}))}};var Ar=n(440);
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Fr={kernelName:r.bK0,backendName:"cpu",kernelFunc:({inputs:e,backend:t})=>{const{x:n}=e,r=t;(0,a.H)(n,"square");const s=r.data.get(n.dataId).values,o=new Float32Array(s.length);for(let e=0;e<s.length;++e){const t=s[e];o[e]=t*t}return{dataId:r.write(o,n.shape,n.dtype),shape:n.shape,dtype:n.dtype}}};var _r=n(212);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Or=(0,l.A)(r.h8e,((e,t)=>{const n=t;return isNaN(e)?NaN:e>0?1:n.alpha})),Mr={kernelName:r.h8e,backendName:"cpu",kernelFunc:Or};var Ur=n(2210);const Pr={kernelName:r.jQk,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{begin:i,end:u,strides:l,beginMask:c,endMask:d,ellipsisMask:p,newAxisMask:h,shrinkAxisMask:f}=s;(0,a.H)(o,"stridedSlice");const{nonStrided:m,$begin:g,$strides:x,size:b,newShape:v,outShape:k}=r.kuN.sliceInfo(o.shape,i,u,l,c,d,p,h,f),y=$({inputs:{x:o},backend:n,attrs:{shape:v}});let I;if(m){const e=(0,ue.tP)({inputs:{x:y},backend:n,attrs:{begin:g,size:b}});I=$({inputs:{x:e},backend:n,attrs:{shape:k}}),n.disposeIntermediateTensorInfo(e)}else if(k.some((e=>0===e)))I=n.makeTensorInfo(k,o.dtype,[]);else{const e=n.bufferSync(y),t=(0,Ur.t)(k,e,x,g);I=n.makeTensorInfo(t.shape,t.dtype,t.values)}const w=$({inputs:{x:I},backend:n,attrs:{shape:k}});return n.disposeIntermediateTensorInfo(y),n.disposeIntermediateTensorInfo(I),w}};var Wr=n(6841);const Br={kernelName:r._JP,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{separator:a,nGramWidths:s,leftPad:o,rightPad:i,padWidth:u,preserveShortSequences:l}=r,{data:c,dataSplits:d}=t,p=n.data.get(c.dataId).values,h=n.data.get(d.dataId).values,[f,m]=(0,Wr.A)(p,h,a,s,o,i,u,l);return[n.makeTensorInfo([f.length],"string",f),n.makeTensorInfo(d.shape,"int32",m)]}};var Lr=n(8639);const zr={kernelName:r.s1s,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{skipEmpty:a}=r,{input:s,delimiter:o}=t;if("string"!==s.dtype)throw new Error("Input must be of datatype string");if(1!==s.shape.length)throw new Error(`Input must be a vector, got shape: ${s.shape}`);if(0!==o.shape.length)throw new Error(`Delimiter must be a scalar, got shape: ${o.shape}`);const i=n.data.get(s.dataId).values,u=n.data.get(o.dataId).values[0],[l,c,d]=(0,Lr.Q)(i,u,a),p=c.length;return[n.makeTensorInfo([p,2],"int32",l),n.makeTensorInfo([p],"string",c),n.makeTensorInfo([2],"int32",new Int32Array(d))]}};var Vr=n(6626);const Gr={kernelName:r.XkS,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{numBuckets:a}=r,{input:s}=t;if("string"!==s.dtype)throw new Error("Input must be of datatype string");if(a<=0)throw new Error("Number of buckets must be at least 1");const o=n.data.get(s.dataId).values,i=(0,Vr.h)(o,a);return n.makeTensorInfo(s.shape,"int32",i)}},Hr=(0,l.A)(r.sEM,(e=>Math.tan(e))),jr={kernelName:r.sEM,backendName:"cpu",kernelFunc:Hr},Xr=(0,l.A)(r.MIZ,(e=>Math.tanh(e))),qr={kernelName:r.MIZ,backendName:"cpu",kernelFunc:Xr};var Kr=n(7723);const Yr={kernelName:r.n9L,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:s}=t,{reps:o}=r;(0,a.H)(s,"tile");const i=(0,Kr.R)(n.bufferSync(s),o);return n.makeTensorInfo(i.shape,i.dtype,i.values)}};var Zr=n(9556);const Qr={kernelName:r.cWu,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:s}=t,{k:o,sorted:i}=r;(0,a.H)(s,"topk");const u=n.data.get(s.dataId).values,[l,c]=(0,Zr.W)(u,s.shape,s.dtype,o,i);return[n.makeTensorInfo(l.shape,l.dtype,l.values),n.makeTensorInfo(c.shape,c.dtype,c.values)]}};const Jr={kernelName:r.wx7,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,attrs:n,backend:a}=e,{image:s,transforms:o}=t,{interpolation:i,fillMode:u,fillValue:l,outputShape:c}=n,[d,p,h,f]=s.shape,[m,g]=null!=c?c:[p,h],x=[d,m,g,f],b=r.D5U.computeStrides(s.shape),v=b[0],k=b[1],y=b[2],I=r.D5U.getTypedArrayFromDType(s.dtype,r.D5U.sizeFromShape(x));I.fill(l);const w=a.data.get(s.dataId).values,C=a.data.get(o.dataId).values;for(let e=0;e<d;++e){const t=1===o.shape[0]?C:C.subarray(8*e,8*e+8);for(let n=0;n<m;++n)for(let r=0;r<g;++r)for(let a=0;a<f;++a){let s;const o=t[6]*r+t[7]*n+1;if(0===o)continue;const c=(t[0]*r+t[1]*n+t[2])/o,d=(t[3]*r+t[4]*n+t[5])/o,f=ea(c,h,u),m=ea(d,p,u);switch(i){case"nearest":s=na(w,p,h,v,k,y,e,m,f,a,l);break;case"bilinear":s=ra(w,p,h,v,k,y,e,m,f,a,l);break;default:throw new Error(`Error in Transform: Expect 'nearest' or 'bilinear', but got ${i}`)}I[e*v+n*k+r*y+a]=s}return a.makeTensorInfo(x,s.dtype,I)}return{dataId:a.write(I,x,s.dtype),shape:s.shape,dtype:s.dtype}}};function ea(e,t,n){switch(n){case"reflect":return function(e,t){let n=e;if(n<0)if(t<=1)n=0;else{const e=2*t;n<e&&(n=e*Math.trunc(-n/e)+n),n=n<-t?n+e:-n-1}else if(n>t-1)if(t<=1)n=0;else{const e=2*t;n-=e*Math.trunc(n/e),n>=t&&(n=e-n-1)}return r.D5U.clamp(0,n,t-1)}(e,t);case"wrap":return function(e,t){let n=e;if(n<0)if(t<=1)n=0;else{const e=t-1;n+=t*(Math.trunc(-n/e)+1)}else if(n>t-1)if(t<=1)n=0;else{const e=t-1;n-=t*Math.trunc(n/e)}return r.D5U.clamp(0,n,t-1)}(e,t);case"nearest":return function(e,t){return r.D5U.clamp(0,e,t-1)}(e,t);default:return function(e,t){return e}(e)}}function ta(e,t,n,r,a,s,o,i,u,l,c){return 0<=i&&i<t&&0<=u&&u<n?e[o*r+i*a+u*s+l]:c}function na(e,t,n,r,a,s,o,i,u,l,c){return ta(e,t,n,r,a,s,o,Math.round(i),Math.round(u),l,c)}function ra(e,t,n,r,a,s,o,i,u,l,c){const d=Math.floor(i),p=Math.floor(u),h=d+1,f=p+1;return(h-i)*((f-u)*ta(e,t,n,r,a,s,o,d,p,l,c)+(u-p)*ta(e,t,n,r,a,s,o,d,f,l,c))+(i-d)*((f-u)*ta(e,t,n,r,a,s,o,h,p,l,c)+(u-p)*ta(e,t,n,r,a,s,o,h,f,l,c))}var aa=n(5638);const sa={kernelName:r.kpP,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,attrs:n,backend:r}=e,{axis:s}=n,{x:o}=t;(0,a.H)(o,"unique");const i=r.data.get(o.dataId).values,{outputValues:u,outputShape:l,indices:c}=(0,aa.S)(i,s,o.shape,o.dtype);return[r.makeTensorInfo(l,o.dtype,u),r.makeTensorInfo([c.length],"int32",c)]}};const oa={kernelName:r.ToN,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{value:a}=t;let{axis:s}=r;s<0&&(s+=a.shape.length);const o=a.shape.length,i=a.shape[s],u=new Array(o-1);let l=0;for(let e=0;e<o;e++)e!==s&&(u[l++]=a.shape[e]);const c=new Array(o).fill(0),d=a.shape.slice();d[s]=1;const p=new Array(i);for(let e=0;e<p.length;e++){c[s]=e;const t=(0,ue.tP)({inputs:{x:a},backend:n,attrs:{begin:c,size:d}});p[e]=$({inputs:{x:t},backend:n,attrs:{shape:u}}),n.disposeIntermediateTensorInfo(t)}return p}};const ia={kernelName:r.Qvg,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{x:o,segmentIds:i}=t,{numSegments:u}=s;(0,a.H)(o,"unsortedSegmentSum");const l=[],c=[],d=o.shape.length-i.shape.length;let p=i;for(let e=0;e<d;++e){const t=ct({inputs:{input:p},backend:n,attrs:{dim:e+1}});p=t,c.push(t)}for(let e=0;e<u;++e){const t=r.D5U.createScalarValue(e,"int32"),a=n.makeTensorInfo([],"int32",t),s=(0,et.Dg)({inputs:{a,b:p},backend:n}),i=(0,he.p)({inputs:{x:s},backend:n,attrs:{dtype:"float32"}}),u=(0,qe.Jp)({inputs:{a:i,b:o},backend:n}),d=Ye({inputs:{x:u},backend:n,attrs:{axis:0,keepDims:!1}});l.push(d),c.push(a),c.push(s),c.push(i),c.push(u),c.push(d)}const h=Bn({inputs:l,backend:n,attrs:{axis:0}});return c.forEach((e=>n.disposeIntermediateTensorInfo(e))),h}},ua=[R,D.fC,F,O,S.j4,M,P,W,B,L,V,H,X,Z,J,re,ae,se,oe,N,ie,le,de,pe,he.M,fe.y2,ge,xe.z,be,Ce,Te,Ee,$e,Re,De,Ne,Fe,Oe,Me,Ue,Pe,We,Le,ze,Ve,Ge,He,Xe,je,mt,Qe,d,Je,et.Kx,ut,lt.SX,dt,pt.Vu,kt,It,wt,Ct.Ao,Tt,Et,Nt,Dt,Ft,_t.Ce,Ot.V,p.I,Mt,ye,Pt,Bt,zt,f,Vt.zh,Gt.m3,jt,Xt.xM,Kt,Qt,en,rn,an,sn,dn.eJ,pn,hn,fn,mn,gn,cn,xn,bn,vn.u0,kn,wn,Tn,qe.f$,En.AF,Rn,An,_n,On.nP,Mn,Wn,Ln,zn,Hn,b,jn.Iz,qn,Ie.O,Yn,k,I,T,Zn,Qn,Jn,er,tr,nr,ar,sr.FY,ir,ur,pr,w.BP,fr,gr,br,ue.C6,$n,yr,Ir,Cr,$r,Er,Nr,Rr,Dr,Ar.cz,Fr,_r.MS,Mr,Pr,Br,zr,Gr,gt.GR,Ze,jr,qr,Yr,Qr,U.b,Jr,sa,oa,ia,Pn];for(const e of ua)(0,r.wCN)(e)}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */,224:(e,t,n)=>{"use strict";n.d(t,{bk:()=>s,fC:()=>o});var r=n(6586),a=n(8166);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function s(e){const t=new Float32Array(e.length);for(let n=0;n<e.length;++n)t[n]=Math.abs(e[n]);return t}const o={kernelName:r.SYM,backendName:"cpu",kernelFunc:e=>{const{x:t}=e.inputs,n=e.backend;(0,a.H)(t,"abs");let o=new Float32Array(r.D5U.sizeFromShape(t.shape));return o=s(n.data.get(t.dataId).values),n.makeOutput(o,t.shape,"float32")}}},2779:(e,t,n)=>{"use strict";n.d(t,{EH:()=>o,IH:()=>u,j4:()=>l});var r=n(6586),a=n(3533),s=n(6205);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,a.b)(((e,t)=>e+t)),i=(0,s.H)(((e,t,n,r)=>({real:e+n,imag:t+r}))),u=(0,s.j)(r.mm_,o,i),l={kernelName:r.mm_,backendName:"cpu",kernelFunc:u}},8607:(e,t,n)=>{"use strict";n.d(t,{W:()=>a,i:()=>s});var r=n(6586);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a(e,t,n,a,s){const o=r.D5U.sizeFromShape(a),i=r.D5U.makeZerosTypedArray(s,n);for(let n=0;n<e.length;n++){const r=e[n];if(r<0)throw new Error("Input x must be non-negative!");r>=s||(i[r]+=o>0?t[n]:1)}return i}function s(e,t,n,a=!1){const s=e.shape[0],o=e.shape[1],i=(0,r.f3b)([s,n],t.dtype);for(let r=0;r<s;r++)for(let s=0;s<o;s++){const o=e.get(r,s);if(o<0)throw new Error("Input x must be non-negative!");o>=n||(a?i.set(1,r,o):t.size>0?i.set(i.get(r,o)+t.get(r,s),r,o):i.set(i.get(r,o)+1,r,o))}return i}},9258:(e,t,n)=>{"use strict";n.d(t,{p:()=>l,M:()=>c});var r=n(6586),a=n(3533),s=n(4391),o=n(6961),i=n(1775),u=n(2186);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function l(e){const{inputs:t,backend:n,attrs:c}=e,{x:d}=t,{dtype:p}=c;if("complex64"===p){if("complex64"===d.dtype)return(0,i.y)({inputs:{x:d},backend:n});const e=(0,s.l)(n,d.shape,d.dtype),t=l({inputs:{x:d},backend:n,attrs:{dtype:"float32"}}),r=(0,o.P)({inputs:{real:t,imag:e},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),r}if("complex64"===d.dtype){const e=(0,u.k)({inputs:{input:d},backend:n}),t=l({inputs:{x:e},backend:n,attrs:{dtype:p}});return n.disposeIntermediateTensorInfo(e),t}if(!r.D5U.hasEncodingLoss(d.dtype,p)){const e=(0,i.y)({inputs:{x:d},backend:n});return{dataId:e.dataId,shape:e.shape,dtype:p}}if("int32"===p){const e=n.data.get(d.dataId).values,t=Int32Array.from(e);return n.makeTensorInfo(d.shape,"int32",t)}if("bool"===p){const e=n.data.get(d.dataId).values,t=r.D5U.toTypedArray([0],d.dtype),[s,o]=(0,a.b)(((e,t)=>e!==t?1:0))(d.shape,[],e,t,"bool");return n.makeTensorInfo(o,"bool",s)}throw new Error(`Error in Cast: failed to cast ${d.dtype} to ${p}`)}const c={kernelName:r.RFZ,backendName:"cpu",kernelFunc:l}},4769:(e,t,n)=>{"use strict";n.d(t,{__:()=>o,y2:()=>u});var r=n(6586),a=n(8029),s=n(6738);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,a.a)((e=>Math.ceil(e))),i=(0,s.O)(r.gJX,o),u={kernelName:r.gJX,backendName:"cpu",kernelFunc:i}},6961:(e,t,n)=>{"use strict";
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function r(e){const{inputs:t,backend:n}=e,{real:r,imag:a}=t,s=n.data.get(r.dataId).values,o=n.data.get(a.dataId).values,i=n.makeTensorInfo(r.shape,"complex64");return n.data.get(i.dataId).complexTensorInfos={real:n.makeTensorInfo(r.shape,"float32",s),imag:n.makeTensorInfo(a.shape,"float32",o)},i}n.d(t,{P:()=>r,z:()=>a});const a={kernelName:n(6586).Zz9,backendName:"cpu",kernelFunc:r}},8926:(e,t,n)=>{"use strict";n.d(t,{j:()=>a});var r=n(6586);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a(e,t,n,a){const s=r.D5U.getArrayFromDType(n,r.D5U.sizeFromShape(t));if(a&&"string"!==n){let t=0;e.forEach((e=>{const n=r.D5U.sizeFromShape(e.shape);s.set(e.vals,t),t+=n}))}else{let a=0;e.forEach((e=>{const o="string"===n?r.Wap.fromUint8ToStringArray(e.vals):e.vals;let i=0;for(let n=0;n<e.shape[0];++n){const r=n*t[1]+a;for(let t=0;t<e.shape[1];++t)s[r+t]=o[i++]}a+=e.shape[1]}))}return s}},7679:(e,t,n)=>{"use strict";n.d(t,{tW:()=>o,Dg:()=>i,Kx:()=>u});var r=n(6586),a=n(3533),s=n(6205);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,a.b)(((e,t)=>e===t?1:0)),i=(0,s.j)(r.hdR,o,null,"bool"),u={kernelName:r.hdR,backendName:"cpu",kernelFunc:i}},1211:(e,t,n)=>{"use strict";n.d(t,{Ro:()=>o,Qq:()=>i,SX:()=>u});var r=n(6586),a=n(8029),s=n(6738);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,a.a)((e=>Math.exp(e))),i=(0,s.O)(r.NEP,o),u={kernelName:r.NEP,backendName:"cpu",kernelFunc:i}},969:(e,t,n)=>{"use strict";n.d(t,{OF:()=>o,Vu:()=>u});var r=n(6586),a=n(8029),s=n(6738);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,a.a)((e=>Math.expm1(e))),i=(0,s.O)(r.Y0y,o),u={kernelName:r.Y0y,backendName:"cpu",kernelFunc:i}},6574:(e,t,n)=>{"use strict";n.d(t,{r6:()=>o,Ao:()=>u});var r=n(6586),a=n(8029),s=n(6738);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,a.a)((e=>Math.floor(e))),i=(0,s.O)(r.OR,o),u={kernelName:r.OR,backendName:"cpu",kernelFunc:i}},1820:(e,t,n)=>{"use strict";n.d(t,{m:()=>a});var r=n(6586);
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a(e,t,n,a,s,o,i,u,l){const c=(0,r.f3b)([a,o],n);for(let n=0;n<a;n++){const r=[];let a=0;for(let t=0;t<s;t++){const o=e[n*s+t];a+=o*i[t],r.push(o)}if(a<0||a>=l/o)throw new Error(`Invalid indices: ${r} does not index into ${u}`);for(let e=0;e<o;e++)c.values[n*o+e]=t.get(...t.indexToLoc(a*o+e))}return c}},4468:(e,t,n)=>{"use strict";n.d(t,{i:()=>a});var r=n(6586);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a(e,t,n){const a=(0,r.f3b)(n,e.dtype);for(let n=0;n<a.size;++n){const r=a.indexToLoc(n).slice(),s=r[0],o=r[2],i=t.locToIndex([s,o]);r[2]=t.values[i];const u=e.locToIndex(r);a.values[n]=e.values[u]}return a}},6272:(e,t,n)=>{"use strict";n.d(t,{o:()=>o,Ce:()=>u});var r=n(6586),a=n(3533),s=n(6205);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,a.b)(((e,t)=>e>t?1:0)),i=(0,s.j)(r.iZT,o,null,"bool"),u={kernelName:r.iZT,backendName:"cpu",kernelFunc:i}},6259:(e,t,n)=>{"use strict";n.d(t,{HL:()=>o,V:()=>u});var r=n(6586),a=n(3533),s=n(6205);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,a.b)(((e,t)=>e>=t?1:0)),i=(0,s.j)(r.Acj,o,null,"bool"),u={kernelName:r.Acj,backendName:"cpu",kernelFunc:i}},1775:(e,t,n)=>{"use strict";
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function r(e){const{inputs:t,backend:n}=e,{x:r}=t;return n.incRef(r.dataId),{dataId:r.dataId,shape:r.shape,dtype:r.dtype}}n.d(t,{y:()=>r,I:()=>a});const a={kernelName:n(6586).iJz,backendName:"cpu",kernelFunc:r}},8405:(e,t,n)=>{"use strict";n.d(t,{rO:()=>o,zh:()=>u});var r=n(6586),a=n(3533),s=n(6205);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,a.b)(((e,t)=>e<t?1:0)),i=(0,s.j)(r.vtC,o,null,"bool"),u={kernelName:r.vtC,backendName:"cpu",kernelFunc:i}},635:(e,t,n)=>{"use strict";n.d(t,{lx:()=>o,m3:()=>u});var r=n(6586),a=n(3533),s=n(6205);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,a.b)(((e,t)=>e<=t?1:0)),i=(0,s.j)(r.CAk,o,null,"bool"),u={kernelName:r.CAk,backendName:"cpu",kernelFunc:i}},1325:(e,t,n)=>{"use strict";n.d(t,{b:()=>a});var r=n(6586);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a(e,t,n){const a=(t-e)/(n-1),s=r.D5U.makeZerosTypedArray(n,"float32");s[0]=e;for(let e=1;e<s.length;e++)s[e]=s[e-1]+a;return s}},5223:(e,t,n)=>{"use strict";n.d(t,{vX:()=>o,xM:()=>u});var r=n(6586),a=n(8029),s=n(6738);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,a.a)((e=>Math.log(e))),i=(0,s.O)(r.ZbH,o),u={kernelName:r.ZbH,backendName:"cpu",kernelFunc:i}},5126:(e,t,n)=>{"use strict";n.d(t,{B:()=>a});var r=n(6586);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a(e,t,n,a){const s=r.D5U.getTypedArrayFromDType(a,r.D5U.sizeFromShape(n));for(let n=0;n<s.length;++n){const r=n*t;let a=e[r];for(let n=0;n<t;++n){const t=e[r+n];(Number.isNaN(t)||t>a)&&(a=t)}s[n]=a}return s}},1717:(e,t,n)=>{"use strict";n.d(t,{wS:()=>o,eJ:()=>u});var r=n(6586),a=n(3533),s=n(6205);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,a.b)(((e,t)=>Math.max(e,t))),i=(0,s.j)(r.BMI,o),u={kernelName:r.BMI,backendName:"cpu",kernelFunc:i}},612:(e,t,n)=>{"use strict";n.d(t,{vP:()=>o,u0:()=>u});var r=n(6586),a=n(3533),s=n(6205);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,a.b)(((e,t)=>Math.min(e,t))),i=(0,s.j)(r.q8u,o),u={kernelName:r.q8u,backendName:"cpu",kernelFunc:i}},1917:(e,t,n)=>{"use strict";n.d(t,{$3:()=>o,Jp:()=>u,f$:()=>l});var r=n(6586),a=n(3533),s=n(6205);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,a.b)(((e,t)=>e*t)),i=(0,s.H)(((e,t,n,r)=>({real:e*n-t*r,imag:e*r+t*n}))),u=(0,s.j)(r.wYn,o,i),l={kernelName:r.wYn,backendName:"cpu",kernelFunc:u}},854:(e,t,n)=>{"use strict";n.d(t,{uC:()=>o,AF:()=>i});var r=n(6586),a=n(8166),s=n(1917);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function o(e,t,n){const a=r.D5U.createScalarValue(-1,n);return(0,s.$3)([],t,a,e,n)}const i={kernelName:r.kuV,backendName:"cpu",kernelFunc:function(e){const{inputs:t,backend:n}=e,{x:r}=t;(0,a.H)(r,"neg");const s=n.data.get(r.dataId).values,[i,u]=o(s,r.shape,r.dtype);return n.makeTensorInfo(u,r.dtype,i)}}},8584:(e,t,n)=>{"use strict";n.d(t,{Gj:()=>o,nP:()=>u});var r=n(6586),a=n(3533),s=n(6205);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,a.b)(((e,t)=>e!==t?1:0)),i=(0,s.j)(r.yQU,o,null,"bool"),u={kernelName:r.yQU,backendName:"cpu",kernelFunc:i}},9560:(e,t,n)=>{"use strict";n.d(t,{Qg:()=>o,Iz:()=>i});var r=n(6586),a=n(8166),s=n(4802);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function o(e,t,n,a){const[s,o]=r.Wap.computeOutAndReduceShapes(e,a),i=(0,r.x8V)(t,"int32"),u=r.D5U.makeZerosTypedArray(r.D5U.sizeFromShape(s),i),l=r.D5U.sizeFromShape(o);for(let e=0;e<u.length;++e){const t=e*l;let r=1;for(let e=0;e<l;++e)r*=n[t+e];u[e]=r}return{outVals:u,outShape:s,outDtype:i}}const i={kernelName:r.DlI,backendName:"cpu",kernelFunc:function(e){const{inputs:t,backend:n,attrs:i}=e,{x:u}=t,{axis:l,keepDims:c}=i;(0,a.H)(u,"prod");const d=u.shape.length,p=r.D5U.parseAxisParam(l,u.shape),h=r.Wap.getAxesPermutation(p,d);let f=p,m=u;const g=[];null!=h&&(m=(0,s.p)({inputs:{x:u},backend:n,attrs:{perm:h}}),g.push(m),f=r.Wap.getInnerMostAxes(f.length,d));const x=n.data.get(m.dataId).values,{outVals:b,outShape:v,outDtype:k}=o(m.shape,m.dtype,x,f);let y=v;return c&&(y=r.Wap.expandShapeToKeepDim(v,p)),g.forEach((e=>n.disposeIntermediateTensorInfo(e))),n.makeTensorInfo(y,k,b)}}},9230:(e,t,n)=>{"use strict";n.d(t,{b:()=>a});var r=n(6586);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a(e,t,n,a){if(e===t||e<t&&n<0||t<e&&n>1)return r.D5U.makeZerosTypedArray(0,a);const s=Math.abs(Math.ceil((t-e)/n)),o=r.D5U.makeZerosTypedArray(s,a);t<e&&1===n&&(n=-1),o[0]=e;for(let e=1;e<o.length;e++)o[e]=o[e-1]+n;return o}},2186:(e,t,n)=>{"use strict";
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function r(e){const{inputs:t,backend:n}=e,{input:r}=t,a=n.data.get(r.dataId).complexTensorInfos.real,s=n.data.get(a.dataId).values;return n.makeTensorInfo(a.shape,a.dtype,s)}n.d(t,{k:()=>r,O:()=>a});const a={kernelName:n(6586).xJR,backendName:"cpu",kernelFunc:r}},7742:(e,t,n)=>{"use strict";n.d(t,{zd:()=>o,FY:()=>u});var r=n(6586),a=n(8029),s=n(6738);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,a.a)((e=>1/Math.sqrt(e))),i=(0,s.O)(r.bV0,o),u={kernelName:r.bV0,backendName:"cpu",kernelFunc:i}},108:(e,t,n)=>{"use strict";n.d(t,{VY:()=>o,XD:()=>i,BP:()=>u});var r=n(6586),a=n(8029),s=n(6738);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,a.a)((e=>1/(1+Math.exp(-e)))),i=(0,s.A)(r.a5O,(e=>1/(1+Math.exp(-e)))),u={kernelName:r.a5O,backendName:"cpu",kernelFunc:i}},2578:(e,t,n)=>{"use strict";n.d(t,{rT:()=>s,tP:()=>o,C6:()=>i});var r=n(6586),a=n(8166);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function s(e,t,n,a,s){const o=r.kuN.isSliceContinous(a,t,n),i=r.D5U.sizeFromShape(n),u=r.D5U.computeStrides(a);if(o){const n=r.kuN.computeFlatOffset(t,u);return"string"===s?e.slice(n,n+i):e.subarray(n,n+i)}const l="string"===s?r.Wap.fromUint8ToStringArray(e):e,c=(0,r.f3b)(a,s,l),d=(0,r.f3b)(n,s);for(let e=0;e<d.size;++e){const n=d.indexToLoc(e),r=n.map(((e,n)=>e+t[n]));d.set(c.get(...r),...n)}return"string"===s?r.Wap.fromStringArrayToUint8(d.values):d.values}function o(e){const{inputs:t,backend:n,attrs:o}=e,{x:i}=t,{begin:u,size:l}=o;(0,a.H)(i,"slice");const[c,d]=r.kuN.parseSliceParams(i,u,l);r.kuN.assertParamsValid(i,c,d);const p=s(n.data.get(i.dataId).values,c,d,i.shape,i.dtype);return n.makeTensorInfo(d,i.dtype,p)}const i={kernelName:r.p2w,backendName:"cpu",kernelFunc:o}},2123:(e,t,n)=>{"use strict";n.d(t,{c:()=>a});var r=n(6586);
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a(e,t,n,a,s,o,i){const u=t[0],l=o[0],c=new Array(l),d=new Array(u),p=t[1];if(0===l){if(0!==u)throw new Error(`Received SparseTensor with denseShape[0] = 0 but\n         indices.shape[0] = ${u}`);return[r.D5U.getArrayFromDType(n,0),[0,p],r.D5U.getArrayFromDType(s,0),c,d]}let h=!0,f=0;const m=new Array(l).fill(0);for(let t=0;t<u;++t){const n=e[t*p];if(n<0)throw new Error(`indices(${t}, 0) is invalid: ${n} < 0`);if(n>=l)throw new Error(`indices(${t}, 0) is invalid: ${n} >= ${l}`);++m[n],h=h&&n>=f,f=n}let g=!0;for(let e=0;e<l;++e){const t=0===m[e];c[e]=t,g=g&&!t,m[e]=Math.max(m[e],1),e>0&&(m[e]+=m[e-1])}if(g&&h){const t=e,n=a;for(let e=0;e<u;++e)d[e]=e;return[t,[u,p],n,c,d]}{const t=m[l-1],o=r.D5U.getArrayFromDType(n,t*p),h=r.D5U.getArrayFromDType(s,t),f=new Array(l).fill(0);for(let t=0;t<u;++t){const n=e[t*p],r=f[n],s=(0===n?0:m[n-1])+r;f[n]++;for(let n=0;n<p;++n)o[s*p+n]=e[t*p+n];h[s]=a[t],d[t]=s}for(let e=0;e<l;++e){if(0===f[e]){const t=0===e?0:m[e-1];o[t*p+0]=e;for(let e=1;e<p;++e)o[t*p+e]=0;h[t]=i}}return[o,[t,p],h,c,d]}}},3849:(e,t,n)=>{"use strict";n.d(t,{U:()=>a});var r=n(6586);
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a(e,t,n,a,s){const o=r.D5U.sizeFromShape(a),i=t[0],u=s.length,l=[];let c=1,d=-1;for(let e=0;e<u;++e){const t=s[e];if(-1===t){if(-1!==d)throw new Error(`only one output dimension may be -1, not both ${d} and ${e}`);d=e,l.push(1)}else{if(t<0)throw new Error(`size ${e} must be non-negative, not ${t}`);c*=t,l.push(t)}}if(-1!==d){if(c<=0)throw new Error("reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero");const e=Math.trunc(o/c);if(c*e!==o)throw new Error(`Input to reshape is a SparseTensor with ${o}\n          dense values, but the requested shape requires a multiple of ${c}. inputShape=${a} outputShape= ${l}`);l[d]=e}const p=r.D5U.sizeFromShape(l);if(p!==o)throw new Error(`Input to reshape is a tensor with ${o} dense values, but the requested shape has ${p}. inputShape=${a} outputShape=${l}`);const h=a.length,f=[];if(h>0){f[h-1]=1;for(let e=h-2;e>=0;--e)f[e]=f[e+1]*a[e+1]}const m=[];if(u>0){m[u-1]=1;for(let e=u-2;e>=0;--e)m[e]=m[e+1]*l[e+1]}const g=r.D5U.getArrayFromDType(n,i*u);for(let t=0;t<i;++t){let n=0;for(let r=0;r<h;++r)n+=e[t*h+r]*f[r];for(let e=0;e<u;++e)g[t*u+e]=Math.trunc(n/m[e]),n%=m[e]}return[g,[i,u],l]}},3989:(e,t,n)=>{"use strict";n.d(t,{V:()=>a});var r=n(6586);
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a(e,t,n,a,s,o=!1,i=0){const u=a.length;if(u!==s.length)throw new Error("segmentIds and indices should have same size.");const l=[t[0],e.length/t[0]],c=l[1],d=u>0?s[u-1]+1:0;if(d<0)throw new Error("segment ids must be >= 0");const p=t.slice();p[0]=d;const h=p.reduce(((e,t)=>e*t),1),f=r.D5U.getArrayFromDType(n,h);if(0===u)return d>0&&f.fill(i),[f,p];if(d<=0)throw new Error("segment ids must be >= 0");let m=0,g=1,x=0,b=s[m];for(;;){let t=0;if(g<u){if(t=s[g],b===t){++g;continue}if(b>=t)throw new Error("segment ids are not increasing")}if(b<0||b>=d)throw new Error(`Segment id ${b} out of range [0, ${d}), possibly because segmentIds input is not sorted.`);b>x&&f.fill(i,x*c,b*c);for(let t=m;t<g;++t){const n=a[t];if(n<0||n>=l[0])throw new Error(`Bad: indices[${t}] == ${a[t]} out of range [0, ${l[0]})`);for(let t=0;t<c;t++)f[b*c+t]+=e[n*c+t]}if(o)for(let e=0;e<c;e++)f[b*c+e]/=g-m;if(m=g,++g,x=b+1,b=t,g>u)break}return x<d&&f.fill(i,x*c,d*c),[f,p]}},440:(e,t,n)=>{"use strict";n.d(t,{zT:()=>o,cz:()=>u});var r=n(6586),a=n(8029),s=n(6738);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,a.a)((e=>Math.sqrt(e))),i=(0,s.A)(r.FKq,(e=>Math.sqrt(e))),u={kernelName:r.FKq,backendName:"cpu",kernelFunc:i}},212:(e,t,n)=>{"use strict";n.d(t,{Hz:()=>o,MS:()=>u});var r=n(6586),a=n(3533),s=n(6205);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,a.b)(((e,t)=>{const n=e-t;return n*n})),i=(0,s.j)(r._tC,o),u={kernelName:r._tC,backendName:"cpu",kernelFunc:i}},2210:(e,t,n)=>{"use strict";n.d(t,{t:()=>a});var r=n(6586);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a(e,t,n,a){const s=(0,r.f3b)(e,t.dtype);for(let e=0;e<s.size;e++){const r=s.indexToLoc(e),o=new Array(r.length);for(let e=0;e<o.length;e++)o[e]=r[e]*n[e]+a[e];s.set(t.get(...o),...r)}return s}},6841:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var r=n(6586);
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class a{constructor(e,t,n,a,s,o){this.separator=r.D5U.encodeString(e),this.nGramWidths=t,this.leftPad=r.D5U.encodeString(n),this.rightPad=r.D5U.encodeString(a),this.padWidth=s,this.preserveShort=o}getPadWidth(e){return Math.min(this.padWidth<0?e-1:this.padWidth,e-1)}getNumNGrams(e,t){const n=this.getPadWidth(t);return Math.max(0,e+2*n-t+1)}createNGrams(e,t,n,r,a,s){for(let o=0;o<a;++o){const i=this.getPadWidth(s),u=Math.max(0,i-o),l=Math.max(0,i-(a-(o+1))),c=s-(u+l),d=t+(u>0?0:o-i);let p=0;p+=u*this.leftPad.length;for(let t=0;t<c;++t)p+=e[d+t].length;p+=l*this.rightPad.length;p+=(u+l+c-1)*this.separator.length,n[r+o]=new Uint8Array(p);const h=n[r+o];let f=0;const m=e=>e.forEach((e=>h[f++]=e));for(let e=0;e<u;++e)m(this.leftPad),m(this.separator);for(let t=0;t<c-1;++t)m(e[d+t]),m(this.separator);if(c>0){m(e[d+c-1]);for(let e=0;e<l;++e)m(this.separator),m(this.rightPad)}else{for(let e=0;e<l-1;++e)m(this.rightPad),m(this.separator);m(this.rightPad)}}}compute(e,t){const n=e.length,a=t.length;if(a>0){let e=t[0];if(0!==e)throw new Error(`First split value must be 0, got ${e}`);for(let r=1;r<a;++r){let a=t[r]>=e;if(a=a&&t[r]<=n,!a)throw new Error(`Invalid split value ${t[r]}, must be in [${e}, ${n}]`);e=t[r]}if(e!==n)throw new Error(`Last split value must be data size. Expected ${n}, got ${e}`)}const s=a-1,o=r.D5U.getArrayFromDType("int32",a);if(0===n||0===a){const e=new Array(n);for(let e=0;e<=s;++e)o[e]=0;return[e,o]}o[0]=0;for(let e=1;e<=s;++e){const n=t[e]-t[e-1];let r=0;this.nGramWidths.forEach((e=>{r+=this.getNumNGrams(n,e)})),this.preserveShort&&n>0&&0===r&&(r=1),o[e]=o[e-1]+r}const i=new Array(o[s]);for(let n=0;n<s;++n){const r=t[n];let a=o[n];if(this.nGramWidths.forEach((s=>{const o=t[n+1]-t[n],u=this.getNumNGrams(o,s);this.createNGrams(e,r,i,a,u,s),a+=u})),this.preserveShort&&a===o[n]){const s=t[n+1]-t[n];if(0===s)continue;const o=s+2*this.padWidth,u=1;this.createNGrams(e,r,i,a,u,o)}}return[i,o]}}function s(e,t,n,r,s,o,i,u){return new a(n,r,s,o,i,u).compute(e,t)}},8639:(e,t,n)=>{"use strict";n.d(t,{Q:()=>s});var r=n(6586);
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a(e,t,n,r){if(!e.length)return;if(0===t.length){for(let t=0;t<e.length;++t)r.push(e.subarray(t,t+1));return}if(1===t.length){const a=t[0];let s=e.indexOf(a);for(;-1!==s;){const t=e.subarray(0,s);n&&0===t.length||r.push(t),s=(e=e.subarray(s+1)).indexOf(a)}return void(n&&0===e.length||r.push(e))}let a=0;for(let s=0;s<e.length+1;s++)if(s===e.length||-1!==t.indexOf(e[s])){const t=e.subarray(a,s);n&&0===t.length||r.push(t),a=s+1}}function s(e,t,n){const s=e.length,o=[];let i=0,u=0;const l=new Array(s);for(let r=0;r<s;++r){const s=o.length;a(e[r],t,n,o);const c=o.length-s;l[r]=c,i+=c,u=Math.max(u,c)}const c=r.D5U.getArrayFromDType("int32",2*i),d=new Array(i),p=[s,u];let h=0;for(let e=0;e<s;++e)for(let t=0;t<l[e];++t)c[2*h]=e,c[2*h+1]=t,d[h]=o[h],++h;return[c,d,p]}},6626:(e,t,n)=>{"use strict";n.d(t,{h:()=>a});var r=n(6586);
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a(e,t){const n=r.D5U.getArrayFromDType("int32",e.length);for(let a=0;a<e.length;++a)n[a]=r.D5U.fingerPrint64(e[a]).modulo(t).getLowBitsUnsigned();return n}},1649:(e,t,n)=>{"use strict";n.d(t,{VY:()=>o,lu:()=>u,GR:()=>l});var r=n(6586),a=n(3533),s=n(6205);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,a.b)(((e,t)=>e-t)),i=(0,s.H)(((e,t,n,r)=>({real:e-n,imag:t-r}))),u=(0,s.j)(r.Tr8,o,i),l={kernelName:r.Tr8,backendName:"cpu",kernelFunc:u}},7723:(e,t,n)=>{"use strict";n.d(t,{R:()=>a});var r=n(6586);
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a(e,t){const n=new Array(e.rank);for(let r=0;r<n.length;r++)n[r]=e.shape[r]*t[r];const a=(0,r.f3b)(n,e.dtype);for(let t=0;t<a.values.length;++t){const n=a.indexToLoc(t),r=new Array(e.rank);for(let t=0;t<r.length;t++)r[t]=n[t]%e.shape[t];const s=e.locToIndex(r);a.values[t]=e.values[s]}return a}},9556:(e,t,n)=>{"use strict";n.d(t,{W:()=>o});var r=n(6586);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const a=(e,t)=>{const n=t.value-e.value;return 0===n?e.index-t.index:n};function s(e,t,n=0,o=e.length-1){for(;o>n;){if(o-n>600){const r=o-n+1,a=t-n+1,i=Math.log(r),u=.5*Math.exp(2*i/3),l=.5*Math.sqrt(i*u*(r-u)/r)*Math.sign(a-r/2);s(e,t,Math.max(n,Math.floor(t-a*u/r+l)),Math.min(o,Math.floor(t+(r-a)*u/r+l)))}const i=e[t];let u=n,l=o;for(r.D5U.swap(e,n,t),a(e[o],i)>0&&r.D5U.swap(e,n,o);u<l;){for(r.D5U.swap(e,u,l),u++,l--;a(e[u],i)<0;)u+=1;for(;a(e[l],i)>0;)l-=1}0===a(e[n],i)?r.D5U.swap(e,n,l):(l+=1,r.D5U.swap(e,l,o)),l<=t&&(n=l+1),t<=l&&(o=l-1)}}function o(e,t,n,o,i){const u=t[t.length-1],[l,c]=[e.length/u,u],d=r.D5U.getTypedArrayFromDType(n,l*o),p=r.D5U.getTypedArrayFromDType("int32",l*o);for(let t=0;t<l;t++){const n=t*c,r=e.subarray(n,n+c);let u=new Array(r.length);r.forEach(((e,t)=>u[t]={value:e,index:t})),o<u.length&&(s(u,o),u=u.slice(0,o)),i&&u.sort(a);const l=t*o,h=d.subarray(l,l+o),f=p.subarray(l,l+o);for(let e=0;e<o;e++)h[e]=u[e].value,f[e]=u[e].index}const h=t.slice();return h[h.length-1]=o,[(0,r.f3b)(h,n,d),(0,r.f3b)(h,"int32",p)]}},4802:(e,t,n)=>{"use strict";n.d(t,{p:()=>o,b:()=>i});var r=n(6586),a=n(8166),s=n(7107);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function o(e){const{inputs:t,attrs:n,backend:r}=e,{x:o}=t,{perm:i}=n;(0,a.H)(o,"transpose");const u=o.shape.length,l=new Array(u);for(let e=0;e<l.length;e++)l[e]=o.shape[i[e]];const c=r.data.get(o.dataId).values,d=(0,s.H)(c,o.shape,o.dtype,i,l);return{dataId:r.write(d,l,o.dtype),shape:l,dtype:o.dtype}}const i={kernelName:r.G3Y,backendName:"cpu",kernelFunc:o}},7107:(e,t,n)=>{"use strict";n.d(t,{H:()=>a});var r=n(6586);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a(e,t,n,a,s){const o=t.length,i=r.D5U.sizeFromShape(t),u=r.D5U.computeStrides(t),l=r.D5U.computeStrides(s),c=r.D5U.getTypedArrayFromDType(n,r.D5U.sizeFromShape(s));for(let t=0;t<i;++t){const n=r.D5U.indexToLoc(t,o,u),s=new Array(n.length);for(let e=0;e<s.length;e++)s[e]=n[a[e]];c[r.D5U.locToIndex(s,o,l)]=e[t]}return c}},5638:(e,t,n)=>{"use strict";n.d(t,{S:()=>a});var r=n(6586);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a(e,t,n,a){const s=r.D5U.parseAxisParam(t,n)[0],o=[1,n[0],1];for(let e=0;e<s;e++)o[0]*=n[e];o[1]=n[s];for(let e=s+1;e<n.length;e++)o[2]*=n[e];const i={},u=new Int32Array(n[s]),l=new r.YDk(o,a,e),c=[],d=1===o[0]&&1===o[2];for(let t=0;t<n[s];t++){let n;if(d)n=e[t].toString();else{const e=[];for(let n=0;n<o[0];n++)for(let r=0;r<o[2];r++)e.push(l.get(n,t,r));n=e.join(",")}if(void 0!==i[n])u[t]=i[n];else{const e=Object.keys(i).length;i[n]=e,u[t]=e,c.push(t)}}const p=o.slice();p[1]=Object.keys(i).length;const h=new r.YDk(p,a);c.forEach(((e,t)=>{for(let n=0;n<o[0];n++)for(let r=0;r<o[2];r++)h.set(l.get(n,e,r),n,t,r)}));const f=n.slice();return f[s]=p[1],{outputValues:h.values,outputShape:f,indices:u}}},5226:(e,t,n)=>{"use strict";n.r(t),n.d(t,{simpleAbsImpl:()=>r.bk,addImpl:()=>a.EH,bincountImpl:()=>s.W,bincountReduceImpl:()=>s.i,ceilImpl:()=>o.__,concatImpl:()=>i.j,equalImpl:()=>u.tW,expImpl:()=>l.Ro,expm1Impl:()=>c.OF,floorImpl:()=>d.r6,gatherNdImpl:()=>p.m,gatherV2Impl:()=>h.i,greaterImpl:()=>f.o,greaterEqualImpl:()=>m.HL,lessImpl:()=>g.rO,lessEqualImpl:()=>x.lx,linSpaceImpl:()=>b.b,logImpl:()=>v.vX,maxImpl:()=>k.B,maximumImpl:()=>y.wS,minimumImpl:()=>I.vP,multiplyImpl:()=>w.$3,negImpl:()=>C.uC,notEqualImpl:()=>S.Gj,prodImpl:()=>$.Qg,rangeImpl:()=>T.b,rsqrtImpl:()=>E.zd,sigmoidImpl:()=>N.VY,sliceImpl:()=>R.rT,sparseFillEmptyRowsImpl:()=>D.c,sparseReshapeImpl:()=>A.U,sparseSegmentReductionImpl:()=>F.V,sqrtImpl:()=>_.zT,squaredDifferenceImpl:()=>O.Hz,stridedSliceImpl:()=>M.t,stringNGramsImpl:()=>U.A,stringSplitImpl:()=>P.Q,stringToHashBucketFastImpl:()=>W.h,subImpl:()=>B.VY,tileImpl:()=>L.R,topKImpl:()=>z.W,transposeImpl:()=>V.H,uniqueImpl:()=>G.S});var r=n(224),a=n(2779),s=n(8607),o=n(4769),i=n(8926),u=n(7679),l=n(1211),c=n(969),d=n(6574),p=n(1820),h=n(4468),f=n(6272),m=n(6259),g=n(8405),x=n(635),b=n(1325),v=n(5223),k=n(5126),y=n(1717),I=n(612),w=n(1917),C=n(854),S=n(8584),$=n(9560),T=n(9230),E=n(7742),N=n(108),R=n(2578),D=n(2123),A=n(3849),F=n(3989),_=n(440),O=n(212),M=n(2210),U=n(6841),P=n(8639),W=n(6626),B=n(1649),L=n(7723),z=n(9556),V=n(7107),G=n(5638)}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */,3533:(e,t,n)=>{"use strict";n.d(t,{b:()=>a});var r=n(6586);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a(e){return(t,n,a,s,o)=>{const i=r.Wap.assertAndGetBroadcastShape(t,n),u=i.length,l=r.D5U.computeStrides(i),c=r.D5U.sizeFromShape(i),d=r.D5U.getTypedArrayFromDType(o,c),p=t.length,h=n.length,f=r.D5U.computeStrides(t),m=r.D5U.computeStrides(n),g=r.Wap.getBroadcastDims(t,i),x=r.Wap.getBroadcastDims(n,i);if(g.length+x.length===0)for(let t=0;t<d.length;++t)d[t]=e(a[t%a.length],s[t%s.length]);else for(let t=0;t<d.length;++t){const n=r.D5U.indexToLoc(t,u,l),o=n.slice(-p);g.forEach((e=>o[e]=0));const i=r.D5U.locToIndex(o,p,f),c=n.slice(-h);x.forEach((e=>c[e]=0));const b=r.D5U.locToIndex(c,h,m);d[t]=e(a[i],s[b])}return[d,i]}}},6205:(e,t,n)=>{"use strict";n.d(t,{j:()=>i,H:()=>u});var r=n(6586),a=n(8166),s=n(9258),o=n(6961);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function i(e,t,n,i){return null==n?({inputs:n,backend:s})=>{const{a:o,b:u}=n,l=s;(0,a.H)([o,u],e);const c=l.data.get(o.dataId).values,d=l.data.get(u.dataId).values,p="string"===o.dtype?r.Wap.fromUint8ToStringArray(c):c,h="string"===o.dtype?r.Wap.fromUint8ToStringArray(d):d,f=i||o.dtype,[m,g]=t(o.shape,u.shape,p,h,f);return l.makeTensorInfo(g,f,m)}:({inputs:e,backend:r})=>{const{a,b:u}=e,l=r;if("complex64"===a.dtype||"complex64"===u.dtype){const e=(0,s.p)({inputs:{x:a},backend:l,attrs:{dtype:"complex64"}}),t=l.data.get(e.dataId),r=t.complexTensorInfos.real,i=t.complexTensorInfos.imag,c=l.data.get(r.dataId).values,d=l.data.get(i.dataId).values,p=(0,s.p)({inputs:{x:u},backend:l,attrs:{dtype:"complex64"}}),h=l.data.get(p.dataId),f=h.complexTensorInfos.real,m=h.complexTensorInfos.imag,g=l.data.get(f.dataId).values,x=l.data.get(m.dataId).values,[b,v,k]=n(a.shape,u.shape,c,d,g,x),y=l.makeTensorInfo(k,"float32",b),I=l.makeTensorInfo(k,"float32",v),w=(0,o.P)({inputs:{real:y,imag:I},backend:l});return l.disposeIntermediateTensorInfo(e),l.disposeIntermediateTensorInfo(p),l.disposeIntermediateTensorInfo(y),l.disposeIntermediateTensorInfo(I),w}{const e=l.data.get(a.dataId).values,n=l.data.get(u.dataId).values,r=i||a.dtype,[s,o]=t(a.shape,u.shape,e,n,r);return l.makeTensorInfo(o,r,s)}}}function u(e){return(t,n,a,s,o,i)=>{const u=r.Wap.assertAndGetBroadcastShape(t,n),l=r.D5U.sizeFromShape(u),c=u.length,d=r.D5U.computeStrides(u),p=r.D5U.getTypedArrayFromDType("float32",l),h=r.D5U.getTypedArrayFromDType("float32",l),f=r.Wap.getBroadcastDims(t,u),m=r.Wap.getBroadcastDims(n,u),g=r.Wap.mergeRealAndImagArrays(a,s),x=r.Wap.mergeRealAndImagArrays(o,i),b=t.length,v=r.D5U.computeStrides(t),k=n.length,y=r.D5U.computeStrides(n);if(f.length+m.length===0)for(let t=0;t<p.length;t++){const n=t%g.length,r=t%x.length,a=e(g[2*n],g[2*n+1],x[2*r],x[2*r+1]);p[t]=a.real,h[t]=a.imag}else for(let t=0;t<p.length;t++){const n=r.D5U.indexToLoc(t,c,d),a=n.slice(-b);f.forEach((e=>a[e]=0));const s=r.D5U.locToIndex(a,b,v),o=n.slice(-k);m.forEach((e=>o[e]=0));const i=r.D5U.locToIndex(o,k,y),u=e(g[2*s],g[2*s+1],x[2*i],x[2*i+1]);p[t]=u.real,h[t]=u.imag}return[p,h,u]}}},8029:(e,t,n)=>{"use strict";n.d(t,{a:()=>a});var r=n(6586);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a(e){return(t,n,a)=>{const s=r.D5U.getTypedArrayFromDType(n,t.length);for(let n=0;n<t.length;++n)s[n]=e(t[n],a);return s}}},6738:(e,t,n)=>{"use strict";n.d(t,{A:()=>s,O:()=>o});var r=n(6586),a=n(8166);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function s(e,t,n){return({inputs:s,attrs:o,backend:i})=>{const{x:u}=s;if((0,a.H)(u,e),"string"===u.dtype||"string"===n)throw new Error("unaryKernelFunc does not support string input/output");const l=i,c=l.data.get(u.dataId).values,d=r.D5U.sizeFromShape(u.shape),p=n||u.dtype,h=r.D5U.getArrayFromDType(p,d);for(let e=0;e<d;++e)h[e]=t(c[e],o);return l.makeTensorInfo(u.shape,p,h)}}function o(e,t,n){return({inputs:r,attrs:s,backend:o})=>{const{x:i}=r;if((0,a.H)(i,e),"string"===i.dtype||"string"===n)throw new Error("unaryKernelFunc does not support string input/output");const u=o,l=u.data.get(i.dataId).values,c=n||i.dtype,d=t(l,c,s);return u.makeTensorInfo(i.shape,c,d)}}},4391:(e,t,n)=>{"use strict";n.d(t,{l:()=>s});var r=n(6586),a=n(6961);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function s(e,t,n="float32"){if("complex64"===n){const n=s(e,t,"float32"),r=s(e,t,"float32");return(0,a.P)({inputs:{real:n,imag:r},backend:e})}const o=r.D5U.makeZerosTypedArray(r.D5U.sizeFromShape(t),n);return e.makeTensorInfo(t,n,o)}},8721:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GPGPUContext:()=>ct,MathBackendWebGL:()=>xn,forceHalfFloat:()=>vn,gpgpu_util:()=>a,setWebGLContext:()=>u,version_webgl:()=>bn,webgl:()=>kn,webgl_util:()=>r});var r={};n.r(r),n.d(r,{assertNotComplex:()=>de,bindCanvasToFramebuffer:()=>W,bindColorTextureToFramebuffer:()=>B,bindTextureToProgramUniformSampler:()=>P,bindTextureUnit:()=>_,bindVertexBufferToProgramAttribute:()=>F,callAndCheck:()=>x,canBeRepresented:()=>b,createFragmentShader:()=>I,createFramebuffer:()=>A,createProgram:()=>C,createStaticIndexBuffer:()=>E,createStaticVertexBuffer:()=>T,createTexture:()=>R,createVertexShader:()=>y,getBatchDim:()=>j,getExtensionOrThrow:()=>k,getFramebufferErrorMessage:()=>V,getMaxTexturesInShader:()=>re,getNumChannels:()=>N,getProgramUniformLocation:()=>U,getProgramUniformLocationOrThrow:()=>M,getRowsCols:()=>X,getShapeAs3D:()=>q,getTextureShapeFromLogicalShape:()=>K,getWebGLDisjointQueryTimerVersion:()=>ae,getWebGLErrorMessage:()=>v,getWebGLMaxTextureSize:()=>ee,hasExtension:()=>se,isCapableOfRenderingToFloatTexture:()=>ie,isDownloadFloatTextureEnabled:()=>ue,isReshapeFree:()=>Z,isWebGLFenceEnabled:()=>ce,isWebGLVersionEnabled:()=>oe,linkProgram:()=>S,resetMaxTextureSize:()=>te,resetMaxTexturesInShader:()=>ne,unbindColorTextureFromFramebuffer:()=>L,unbindTextureUnit:()=>O,validateFramebuffer:()=>z,validateProgram:()=>$,validateTextureSize:()=>D});var a={};n.r(a),n.d(a,{bindVertexProgramAttributeStreams:()=>nt,createBufferFromOutputTexture:()=>st,createFloat16MatrixTexture:()=>Ke,createFloat16PackedMatrixTexture:()=>tt,createFloat32MatrixTexture:()=>Xe,createIndexBuffer:()=>Ge,createPackedMatrixTexture:()=>Je,createUnsignedBytesMatrixTexture:()=>Ze,createVertexBuffer:()=>Ve,createVertexShader:()=>ze,downloadByteEncodedFloatMatrixFromOutputTexture:()=>it,downloadFloat32MatrixFromBuffer:()=>ot,downloadMatrixFromPackedOutputTexture:()=>lt,downloadPackedMatrixFromBuffer:()=>ut,getInternalFormatForFloat16MatrixTexture:()=>qe,getInternalFormatForFloat16PackedMatrixTexture:()=>et,getInternalFormatForFloat32MatrixTexture:()=>je,getInternalFormatForPackedMatrixTexture:()=>Qe,getInternalFormatForUnsignedBytesMatrixTexture:()=>Ye,uploadDenseMatrixToTexture:()=>rt,uploadPixelDataToTexture:()=>at});var s=n(6586);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o={},i={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function u(e,t){o[e]=t}function l(e){if(!(e in o)){const t=function(e){if(1!==e&&2!==e)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");const t=function(e){if("undefined"!=typeof OffscreenCanvas&&2===e)return new OffscreenCanvas(300,150);if("undefined"!=typeof document)return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}(e);if(t.addEventListener("webglcontextlost",(t=>{t.preventDefault(),delete o[e]}),!1),1===e)return t.getContext("webgl",i)||t.getContext("experimental-webgl",i);return t.getContext("webgl2",i)}(e);if(null===t)return console.log("Could not get context for WebGL version",e),null;o[e]=t}const t=o[e];return t.isContextLost()?(delete o[e],l(e)):(t.disable(t.DEPTH_TEST),t.disable(t.STENCIL_TEST),t.disable(t.BLEND),t.disable(t.DITHER),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SAMPLE_COVERAGE),t.enable(t.SCISSOR_TEST),t.enable(t.CULL_FACE),t.cullFace(t.BACK),o[e])}
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var c,d,p;function h(e,t){return[t,e]}function f(e){const t=s.D5U.sizeFromShape(e),n=Math.ceil(t/4);return s.D5U.sizeToSquarishShape(n)}function m(e,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(e/2))]}function g(e,t){const n=e;let r,a,o,i,u,l,c,d,p,h;return 2===(0,s.OBj)().getNumber("WEBGL_VERSION")?(r=n.R32F,a=n.R16F,o=n.RGBA16F,i=n.RGBA32F,u=n.RED,c=4,d=1,p=n.HALF_FLOAT,h=n.FLOAT):(r=e.RGBA,a=e.RGBA,o=e.RGBA,i=n.RGBA,u=e.RGBA,c=4,d=4,p=null!=t?t.HALF_FLOAT_OES:null,h=e.FLOAT),l=e.RGBA,{internalFormatFloat:r,internalFormatHalfFloat:a,internalFormatPackedHalfFloat:o,internalFormatPackedFloat:i,textureFormatFloat:u,downloadTextureFormat:l,downloadUnpackNumChannels:c,defaultNumChannels:d,textureTypeHalfFloat:p,textureTypeFloat:h}}
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function x(e,t){const n=t();return(0,s.OBj)().getBool("DEBUG")&&function(e){const t=e.getError();if(t!==e.NO_ERROR)throw new Error("WebGL Error: "+v(e,t))}(e),n}!function(e){e[e.DENSE=0]="DENSE",e[e.SHARED_BATCH=1]="SHARED_BATCH"}(c||(c={})),function(e){e[e.RENDER=0]="RENDER",e[e.UPLOAD=1]="UPLOAD",e[e.PIXELS=2]="PIXELS",e[e.DOWNLOAD=3]="DOWNLOAD"}(d||(d={})),function(e){e[e.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",e[e.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",e[e.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",e[e.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",e[e.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"}(p||(p={}));function b(e){return!!((0,s.OBj)().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||0===e||5.96e-8<Math.abs(e)&&Math.abs(e)<65504)}function v(e,t){switch(t){case e.NO_ERROR:return"NO_ERROR";case e.INVALID_ENUM:return"INVALID_ENUM";case e.INVALID_VALUE:return"INVALID_VALUE";case e.INVALID_OPERATION:return"INVALID_OPERATION";case e.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case e.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case e.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return`Unknown error code ${t}`}}function k(e,t){return G(e,(()=>e.getExtension(t)),'Extension "'+t+'" not supported on this browser.')}function y(e,t){const n=G(e,(()=>e.createShader(e.VERTEX_SHADER)),"Unable to create vertex WebGLShader.");if(x(e,(()=>e.shaderSource(n,t))),x(e,(()=>e.compileShader(n))),!1===e.getShaderParameter(n,e.COMPILE_STATUS))throw console.log(e.getShaderInfoLog(n)),new Error("Failed to compile vertex shader.");return n}function I(e,t){const n=G(e,(()=>e.createShader(e.FRAGMENT_SHADER)),"Unable to create fragment WebGLShader.");if(x(e,(()=>e.shaderSource(n,t))),x(e,(()=>e.compileShader(n))),!1===e.getShaderParameter(n,e.COMPILE_STATUS))throw function(e,t){const n=w.exec(t);if(null==n)return console.log(`Couldn't parse line number in error: ${t}`),void console.log(e);const r=+n[1],a=e.split("\n"),o=a.length.toString().length+2,i=a.map(((e,t)=>s.D5U.rightPad((t+1).toString(),o)+e));let u=0;for(let e=0;e<i.length;e++)u=Math.max(i[e].length,u);const l=i.slice(0,r-1),c=i.slice(r-1,r),d=i.slice(r);console.log(l.join("\n")),console.log(t.split("\n")[0]),console.log(`%c ${s.D5U.rightPad(c[0],u)}`,"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(d.join("\n"))}(t,e.getShaderInfoLog(n)),new Error("Failed to compile fragment shader.");return n}const w=/ERROR: [0-9]+:([0-9]+):/g;function C(e){return G(e,(()=>e.createProgram()),"Unable to create WebGLProgram.")}function S(e,t){if(x(e,(()=>e.linkProgram(t))),!1===e.getProgramParameter(t,e.LINK_STATUS))throw console.log(e.getProgramInfoLog(t)),new Error("Failed to link vertex and fragment shaders.")}function $(e,t){if(x(e,(()=>e.validateProgram(t))),!1===e.getProgramParameter(t,e.VALIDATE_STATUS))throw console.log(e.getProgramInfoLog(t)),new Error("Shader program validation failed.")}function T(e,t){const n=G(e,(()=>e.createBuffer()),"Unable to create WebGLBuffer");return x(e,(()=>e.bindBuffer(e.ARRAY_BUFFER,n))),x(e,(()=>e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW))),n}function E(e,t){const n=G(e,(()=>e.createBuffer()),"Unable to create WebGLBuffer");return x(e,(()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n))),x(e,(()=>e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW))),n}function N(){return 2===(0,s.OBj)().getNumber("WEBGL_VERSION")?1:4}function R(e){return G(e,(()=>e.createTexture()),"Unable to create WebGLTexture.")}function D(e,t){const n=(0,s.OBj)().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(e<=0||t<=0){throw new Error("Requested texture size "+`[${e}x${t}]`+" is invalid.")}if(e>n||t>n){throw new Error("Requested texture size "+`[${e}x${t}]`+" greater than WebGL maximum on this browser / GPU "+`[${n}x${n}]`+".")}}function A(e){return G(e,(()=>e.createFramebuffer()),"Unable to create WebGLFramebuffer.")}function F(e,t,n,r,a,s,o){const i=e.getAttribLocation(t,n);return-1!==i&&(x(e,(()=>e.bindBuffer(e.ARRAY_BUFFER,r))),x(e,(()=>e.vertexAttribPointer(i,a,e.FLOAT,!1,s,o))),x(e,(()=>e.enableVertexAttribArray(i))),!0)}function _(e,t,n){H(e,n),x(e,(()=>e.activeTexture(e.TEXTURE0+n))),x(e,(()=>e.bindTexture(e.TEXTURE_2D,t)))}function O(e,t){H(e,t),x(e,(()=>e.activeTexture(e.TEXTURE0+t))),x(e,(()=>e.bindTexture(e.TEXTURE_2D,null)))}function M(e,t,n){return G(e,(()=>e.getUniformLocation(t,n)),'uniform "'+n+'" not present in program.')}function U(e,t,n){return e.getUniformLocation(t,n)}function P(e,t,n,r){x(e,(()=>_(e,t,r))),x(e,(()=>e.uniform1i(n,r)))}function W(e){x(e,(()=>e.bindFramebuffer(e.FRAMEBUFFER,null))),x(e,(()=>e.viewport(0,0,e.canvas.width,e.canvas.height))),x(e,(()=>e.scissor(0,0,e.canvas.width,e.canvas.height)))}function B(e,t,n){x(e,(()=>e.bindFramebuffer(e.FRAMEBUFFER,n))),x(e,(()=>e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)))}function L(e,t){x(e,(()=>e.bindFramebuffer(e.FRAMEBUFFER,t))),x(e,(()=>e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,null,0)))}function z(e){const t=e.checkFramebufferStatus(e.FRAMEBUFFER);if(t!==e.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+V(e,t))}function V(e,t){switch(t){case e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case e.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return`unknown error ${t}`}}function G(e,t,n){const r=x(e,(()=>t()));if(null==r)throw new Error(n);return r}function H(e,t){const n=e.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,r=t+e.TEXTURE0;if(r<e.TEXTURE0||r>n){throw new Error(`textureUnit must be in ${`[gl.TEXTURE0, gl.TEXTURE${n}]`}.`)}}function j(e,t=2){return s.D5U.sizeFromShape(e.slice(0,e.length-t))}function X(e){if(0===e.length)throw Error("Cannot get rows and columns of an empty shape array.");return[e.length>1?e[e.length-2]:1,e[e.length-1]]}function q(e){let t=[1,1,1];return 0===e.length||1===e.length&&1===e[0]||(t=[j(e),...X(e)]),t}function K(e,t=!1){let n=(0,s.OBj)().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(t&&(n*=2,1===(e=e.map(((t,n)=>n>=e.length-2?s.D5U.nearestLargerEven(e[n]):e[n]))).length&&(e=[2,e[0]])),2!==e.length){const t=s.D5U.squeezeShape(e);e=t.newShape}let r=s.D5U.sizeFromShape(e);if(e.length<=1&&r<=n)return[1,r];if(2===e.length&&e[0]<=n&&e[1]<=n)return e;if(3===e.length&&e[0]*e[1]<=n&&e[2]<=n)return[e[0]*e[1],e[2]];if(3===e.length&&e[0]<=n&&e[1]*e[2]<=n)return[e[0],e[1]*e[2]];if(4===e.length&&e[0]*e[1]*e[2]<=n&&e[3]<=n)return[e[0]*e[1]*e[2],e[3]];if(4===e.length&&e[0]<=n&&e[1]*e[2]*e[3]<=n)return[e[0],e[1]*e[2]*e[3]];if(t){const t=j(e);let n=2,a=2;return e.length&&([n,a]=X(e)),r=t*(n/2)*(a/2),s.D5U.sizeToSquarishShape(r).map((e=>2*e))}return s.D5U.sizeToSquarishShape(r)}function Y(e){return e%2==0}function Z(e,t){if(e=e.slice(-2),t=t.slice(-2),s.D5U.arraysEqual(e,t))return!0;if(!e.length||!t.length)return!0;if(0===e[0]||0===e[1]||0===t[0]||0===t[1])return!0;if(e.length!==t.length){const n=e.slice(-1)[0],r=t.slice(-1)[0];if(n===r)return!0;if(Y(n)&&Y(r)&&(1===e[0]||1===t[0]))return!0}return e[1]===t[1]&&Y(e[0])&&Y(t[0])}let Q,J;function ee(e){if(null==Q){const t=l(e);Q=t.getParameter(t.MAX_TEXTURE_SIZE)}return Q}function te(){Q=null}function ne(){J=null}function re(e){if(null==J){const t=l(e);J=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,J)}function ae(e){if(0===e)return 0;let t;const n=l(e);return t=se(n,"EXT_disjoint_timer_query_webgl2")&&2===e?2:se(n,"EXT_disjoint_timer_query")?1:0,t}function se(e,t){return null!=e.getExtension(t)}function oe(e){try{if(null!=l(e))return!0}catch(e){return console.log("Error when getting WebGL context: ",e),!1}return!1}function ie(e){if(0===e)return!1;const t=l(e);if(1===e){if(!se(t,"OES_texture_float"))return!1}else if(!se(t,"EXT_color_buffer_float"))return!1;return le(t)}function ue(e){if(0===e)return!1;const t=l(e);if(1!==e){if(se(t,"EXT_color_buffer_float"))return le(t);const e="EXT_color_buffer_half_float";if(se(t,e)){const n=t.getExtension(e);return function(e,t){const n=g(e,t),r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r);const a=1,s=1;e.texImage2D(e.TEXTURE_2D,0,n.internalFormatHalfFloat,a,s,0,n.textureFormatFloat,n.textureTypeHalfFloat,null);const o=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0);const i=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(r),e.deleteFramebuffer(o),i}(t,n)}return!1}if(!se(t,"OES_texture_float"))return!1;if(!se(t,"WEBGL_color_buffer_float"))return!1;return le(t)}function le(e){const t=g(e),n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n);e.texImage2D(e.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);const r=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,r),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0);const a=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(n),e.deleteFramebuffer(r),a}function ce(e){if(2!==e)return!1;return null!=l(e).fenceSync}function de(e,t){Array.isArray(e)||(e=[e]),e.forEach((e=>{null!=e&&s.D5U.assert("complex64"!==e.dtype,(()=>`${t} does not support complex64 tensors in the WebGL backend.`))}))}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const pe=(0,s.OBj)();
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function he(){let e,t,n,r,a,o,i,u,l,c;return 2===(0,s.OBj)().getNumber("WEBGL_VERSION")?(e="#version 300 es",t="in",n="out",r="in",a="texture",o="outputColor",i="out vec4 outputColor;",u="\n      bool isnan_custom(float val) {\n        return (val > 0.0 || val < 0.0) ? false : val != 0.0;\n      }\n\n      bvec4 isnan_custom(vec4 val) {\n        return bvec4(isnan_custom(val.x),\n          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));\n      }\n\n      #define isnan(value) isnan_custom(value)\n    ",l="",c="\n      #define round(value) newRound(value)\n      int newRound(float value) {\n        return int(floor(value + 0.5));\n      }\n\n      ivec4 newRound(vec4 value) {\n        return ivec4(floor(value + vec4(0.5)));\n      }\n    "):(e="",t="attribute",n="varying",r="varying",a="texture2D",o="gl_FragColor",i="",u="\n      #define isnan(value) isnan_custom(value)\n      bool isnan_custom(float val) {\n        return (val > 0. || val < 1. || val == 0.) ? false : true;\n      }\n      bvec4 isnan_custom(vec4 val) {\n        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));\n      }\n    ",l="\n      uniform float INFINITY;\n\n      bool isinf(float val) {\n        return abs(val) == INFINITY;\n      }\n      bvec4 isinf(vec4 val) {\n        return equal(abs(val), vec4(INFINITY));\n      }\n    ",c="\n      int round(float value) {\n        return int(floor(value + 0.5));\n      }\n\n      ivec4 round(vec4 value) {\n        return ivec4(floor(value + vec4(0.5)));\n      }\n    "),{version:e,attribute:t,varyingVs:n,varyingFs:r,texture2D:a,output:o,defineOutput:i,defineSpecialNaN:u,defineSpecialInf:l,defineRound:c}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function fe(e,t,n="index"){const r=s.D5U.computeStrides(t);return r.map(((t,a)=>`${`int ${e[a]} = ${n} / ${t}`}; ${a===r.length-1?`int ${e[a+1]} = ${n} - ${e[a]} * ${t}`:`index -= ${e[a]} * ${t}`};`)).join("")}function me(e,t,n="index"){const r=s.D5U.computeStrides(t);return r.map(((t,a)=>`${`int ${e[a]} = ${n} / outShapeStrides[${a}]`}; ${a===r.length-1?`int ${e[a+1]} = ${n} - ${e[a]} * outShapeStrides[${a}]`:`index -= ${e[a]} * outShapeStrides[${a}]`};`)).join("")}function ge(e,t,n="index"){const r=function(e,t){const n=e.length,r=e.map((e=>`${t}[${e}]`)),a=new Array(n-1);a[n-2]=r[n-1];for(let e=n-3;e>=0;--e)a[e]=`(${a[e+1]} * ${r[e+1]})`;return a}(e.map(((e,t)=>t)),t);return r.map(((t,a)=>`${`int ${e[a]} = ${n} / ${r[a]}`}; ${a===r.length-1?`int ${e[a+1]} = ${n} - ${e[a]} * ${r[a]}`:`index -= ${e[a]} * ${r[a]}`};`)).join("")}function xe(e){const t=s.D5U.computeStrides(e).map((e=>e.toString()));return`\n  int getFlatIndex(ivec3 coords) {\n    return coords.x * ${t[0]} + coords.y * ${t[1]} + coords.z;\n  }\n`}pe.registerFlag("HAS_WEBGL",(()=>pe.getNumber("WEBGL_VERSION")>0)),pe.registerFlag("WEBGL_VERSION",(()=>oe(2)?2:oe(1)?1:0)),pe.registerFlag("WEBGL_CHECK_NUMERICAL_PROBLEMS",(()=>!1)),pe.registerFlag("WEBGL_BUFFER_SUPPORTED",(()=>2===pe.get("WEBGL_VERSION"))),pe.registerFlag("WEBGL_CPU_FORWARD",(()=>!0)),pe.registerFlag("WEBGL_FORCE_F16_TEXTURES",(()=>!1)),pe.registerFlag("WEBGL_PACK",(()=>pe.getBool("HAS_WEBGL"))),pe.registerFlag("WEBGL_PACK_NORMALIZATION",(()=>pe.getBool("WEBGL_PACK"))),pe.registerFlag("WEBGL_PACK_CLIP",(()=>pe.getBool("WEBGL_PACK"))),pe.registerFlag("WEBGL_PACK_DEPTHWISECONV",(()=>pe.getBool("WEBGL_PACK"))),pe.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",(()=>pe.getBool("WEBGL_PACK"))),pe.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",(()=>pe.getBool("WEBGL_PACK"))),pe.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",(()=>pe.getBool("WEBGL_PACK"))),pe.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",(()=>pe.getBool("WEBGL_PACK"))),pe.registerFlag("WEBGL_PACK_REDUCE",(()=>pe.getBool("WEBGL_PACK"))),pe.registerFlag("WEBGL_LAZILY_UNPACK",(()=>pe.getBool("WEBGL_PACK"))),pe.registerFlag("WEBGL_CONV_IM2COL",(()=>pe.getBool("WEBGL_PACK"))),pe.registerFlag("WEBGL_MAX_TEXTURE_SIZE",(()=>ee(pe.getNumber("WEBGL_VERSION")))),pe.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",(()=>re(pe.getNumber("WEBGL_VERSION")))),pe.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",(()=>{const e=pe.getNumber("WEBGL_VERSION");return 0===e?0:ae(e)})),pe.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",(()=>pe.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&!s.C2$.isMobile())),pe.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",(()=>ie(pe.getNumber("WEBGL_VERSION")))),pe.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",(()=>!pe.getBool("WEBGL_FORCE_F16_TEXTURES")&&pe.getBool("WEBGL_RENDER_FLOAT32_CAPABLE"))),pe.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",(()=>ue(pe.getNumber("WEBGL_VERSION")))),pe.registerFlag("WEBGL_FENCE_API_ENABLED",(()=>ce(pe.getNumber("WEBGL_VERSION")))),pe.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",(()=>pe.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0)),pe.registerFlag("WEBGL_DELETE_TEXTURE_THRESHOLD",(()=>-1),(e=>{if(e<0&&-1!==e)throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${e}.`)})),pe.registerFlag("WEBGL_FLUSH_THRESHOLD",(()=>s.C2$.isMobile()&&pe.getBool("IS_CHROME")?1:-1),(e=>{if(e<0&&-1!==e)throw new Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${e}.`)})),pe.registerFlag("CPU_HANDOFF_SIZE_THRESHOLD",(()=>128)),pe.registerFlag("WEBGL_USE_SHAPES_UNIFORMS",(()=>!1)),pe.registerFlag("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD",(()=>1e5)),pe.registerFlag("TOPK_K_CPU_HANDOFF_THRESHOLD",(()=>128));const be="\n  const float FLOAT_MAX = 1.70141184e38;\n  const float FLOAT_MIN = 1.17549435e-38;\n\n  lowp vec4 encode_float(highp float v) {\n    if (isnan(v)) {\n      return vec4(255, 255, 255, 255);\n    }\n\n    highp float av = abs(v);\n\n    if(av < FLOAT_MIN) {\n      return vec4(0.0, 0.0, 0.0, 0.0);\n    } else if(v > FLOAT_MAX) {\n      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;\n    } else if(v < -FLOAT_MAX) {\n      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;\n    }\n\n    highp vec4 c = vec4(0,0,0,0);\n\n    highp float e = floor(log2(av));\n    highp float m = exp2(fract(log2(av))) - 1.0;\n\n    c[2] = floor(128.0 * m);\n    m -= c[2] / 128.0;\n    c[1] = floor(32768.0 * m);\n    m -= c[1] / 32768.0;\n    c[0] = floor(8388608.0 * m);\n\n    highp float ebias = e + 127.0;\n    c[3] = floor(ebias / 2.0);\n    ebias -= c[3] * 2.0;\n    c[2] += floor(ebias) * 128.0;\n\n    c[3] += 128.0 * step(0.0, -v);\n\n    return c / 255.0;\n  }\n",{getBroadcastDims:ve}=s.Wap;function ke(e,t,n){const r=[];if(e.forEach((e=>{const t=s.D5U.sizeFromShape(e.shapeInfo.logicalShape);if(e.shapeInfo.isUniform?r.push(`uniform float ${e.name}${t>1?`[${t}]`:""};`):(r.push(`uniform sampler2D ${e.name};`),r.push(`uniform int offset${e.name};`)),n.enableShapeUniforms){const{uniformShape:t}=De(n.packedInputs,e.shapeInfo.logicalShape,e.shapeInfo.texShape);switch(t.length){case 1:r.push(`uniform int ${e.name}Shape;`);break;case 2:r.push(`uniform ivec2 ${e.name}Shape;`);break;case 3:r.push(`uniform ivec3 ${e.name}Shape;`);break;case 4:r.push(`uniform ivec4 ${e.name}Shape;`)}r.push(`uniform ivec2 ${e.name}TexShape;`)}})),n.enableShapeUniforms){switch(t.logicalShape.length){case 1:r.push("uniform int outShape;");break;case 2:r.push("uniform ivec2 outShape;"),r.push("uniform int outShapeStrides;");break;case 3:r.push("uniform ivec3 outShape;"),r.push("uniform ivec2 outShapeStrides;");break;case 4:r.push("uniform ivec4 outShape;"),r.push("uniform ivec3 outShapeStrides;")}r.push("uniform ivec2 outTexShape;")}n.customUniforms&&n.customUniforms.forEach((e=>{r.push(`uniform ${e.type} ${e.name}${e.arrayIndex?`[${e.arrayIndex}]`:""};`)}));const a=r.join("\n"),o=e.map((e=>function(e,t,n=!1,r){let a="";a+=n?Ie(e,r):ye(e,r);const o=e.shapeInfo.logicalShape,i=t.logicalShape;o.length<=i.length&&(a+=n?function(e,t){const n=e.name,r=n.charAt(0).toUpperCase()+n.slice(1),a="get"+r+"AtOutCoords",o=e.shapeInfo.logicalShape.length,i=t.logicalShape.length,u=ve(e.shapeInfo.logicalShape,t.logicalShape),l=Re(i),c=i-o;let d;const p=["x","y","z","w","u","v"];d=0===o?"":i<2&&u.length>=1?"coords = 0;":u.map((e=>`coords.${p[e+c]} = 0;`)).join("\n");let h="";h=i<2&&o>0?"coords":e.shapeInfo.logicalShape.map(((e,t)=>`coords.${p[t+c]}`)).join(", ");let f="return outputValue;";const m=1===s.D5U.sizeFromShape(e.shapeInfo.logicalShape),g=1===s.D5U.sizeFromShape(t.logicalShape);if(1!==o||m||g){if(m&&!g)f=1===i?"\n        return vec4(outputValue.x, outputValue.x, 0., 0.);\n      ":"\n        return vec4(outputValue.x);\n      ";else if(u.length){const e=o-2,t=o-1;u.indexOf(e)>-1&&u.indexOf(t)>-1?f="return vec4(outputValue.x);":u.indexOf(e)>-1?f="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":u.indexOf(t)>-1&&(f="return vec4(outputValue.xx, outputValue.zz);")}}else f="\n      return vec4(outputValue.xy, outputValue.xy);\n    ";return`\n    vec4 ${a}() {\n      ${l} coords = getOutputCoords();\n      ${d}\n      vec4 outputValue = get${r}(${h});\n      ${f}\n    }\n  `}(e,t):function(e,t){const n=e.name,r=n.charAt(0).toUpperCase()+n.slice(1),a="get"+r+"AtOutCoords",o=t.texShape,i=e.shapeInfo.texShape,u=e.shapeInfo.logicalShape.length,l=t.logicalShape.length;if(!e.shapeInfo.isUniform&&u===l&&null==e.shapeInfo.flatOffset&&s.D5U.arraysEqual(i,o))return`\n      float ${a}() {\n        return sampleTexture(${n}, resultUV);\n      }\n    `;const c=Re(l),d=ve(e.shapeInfo.logicalShape,t.logicalShape),p=l-u;let h;const f=["x","y","z","w","u","v"];h=0===u?"":l<2&&d.length>=1?"coords = 0;":d.map((e=>`coords.${f[e+p]} = 0;`)).join("\n");let m="";m=l<2&&u>0?"coords":e.shapeInfo.logicalShape.map(((e,t)=>`coords.${f[t+p]}`)).join(", ");return`\n    float ${a}() {\n      ${c} coords = getOutputCoords();\n      ${h}\n      return get${r}(${m});\n    }\n  `}(e,t));return a}(e,t,n.packedInputs,n.enableShapeUniforms))).join("\n"),i=t.texShape,u=he(),l=function(e){return`\n    float sampleTexture(sampler2D textureSampler, vec2 uv) {\n      return ${e.texture2D}(textureSampler, uv).r;\n    }\n  `}(u);let c,d,p=function(e){return`${e.version}\n    precision highp float;\n    precision highp int;\n    precision highp sampler2D;\n    ${e.varyingFs} vec2 resultUV;\n    ${e.defineOutput}\n    const vec2 halfCR = vec2(0.5, 0.5);\n\n    struct ivec5\n    {\n      int x;\n      int y;\n      int z;\n      int w;\n      int u;\n    };\n\n    struct ivec6\n    {\n      int x;\n      int y;\n      int z;\n      int w;\n      int u;\n      int v;\n    };\n\n    uniform float NAN;\n    ${e.defineSpecialNaN}\n    ${e.defineSpecialInf}\n    ${e.defineRound}\n\n    int imod(int x, int y) {\n      return x - y * (x / y);\n    }\n\n    int idiv(int a, int b, float sign) {\n      int res = a / b;\n      int mod = imod(a, b);\n      if (sign < 0. && mod != 0) {\n        res -= 1;\n      }\n      return res;\n    }\n\n    //Based on the work of Dave Hoskins\n    //https://www.shadertoy.com/view/4djSRW\n    #define HASHSCALE1 443.8975\n    float random(float seed){\n      vec2 p = resultUV * seed;\n      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);\n      p3 += dot(p3, p3.yzx + 19.19);\n      return fract((p3.x + p3.y) * p3.z);\n    }\n\n    ${we}\n    ${Ce}\n    ${Se}\n  `}(u);t.isPacked?(c=function(e,t,n){switch(e.length){case 0:return Te();case 1:return function(e,t,n){const r=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];if(1===r[0])return n?"\n      int getOutputCoords() {\n        return 2 * int(resultUV.x * ceil(float(outTexShape[1]) / 2.0));\n      }\n    ":`\n      int getOutputCoords() {\n        return 2 * int(resultUV.x * ${r[1]}.0);\n      }\n    `;if(1===r[1])return n?"\n      int getOutputCoords() {\n        return 2 * int(resultUV.y * ceil(float(outTexShape[0]) / 2.0));\n      }\n    ":`\n      int getOutputCoords() {\n        return 2 * int(resultUV.y * ${r[0]}.0);\n      }\n    `;if(n)return"\n    int getOutputCoords() {\n      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(packedTexShape[0], packedTexShape[1]));\n      return 2 * (resTexRC.x * packedTexShape[1] + resTexRC.y);\n    }\n  ";return`\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(${r[0]}, ${r[1]}));\n      return 2 * (resTexRC.x * ${r[1]} + resTexRC.y);\n    }\n  `}(0,t,n);case 2:return function(e,t,n){const r=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];if(s.D5U.arraysEqual(e,t))return n?"\n      ivec2 getOutputCoords() {\n        ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));\n        return 2 * ivec2(resultUV.yx * vec2(packedTexShape[0], packedTexShape[1]));\n      }\n    ":`\n      ivec2 getOutputCoords() {\n        return 2 * ivec2(resultUV.yx * vec2(${r[0]}, ${r[1]}));\n      }\n    `;const a=Math.ceil(e[1]/2);if(n)return"\n    ivec2 getOutputCoords() {\n      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));\n      int texelsInLogicalRow = int(ceil(float(outShape[1]) / 2.0));\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(packedTexShape[0], packedTexShape[1]));\n\n      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;\n      int r = 2 * (index / texelsInLogicalRow);\n      int c = imod(index, texelsInLogicalRow) * 2;\n\n      return ivec2(r, c);\n    }\n  ";return`\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(${r[0]}, ${r[1]}));\n\n      int index = resTexRC.x * ${r[1]} + resTexRC.y;\n      int r = 2 * (index / ${a});\n      int c = imod(index, ${a}) * 2;\n\n      return ivec2(r, c);\n    }\n  `}(e,t,n);case 3:return function(e,t,n){if(n)return"\n    ivec3 getOutputCoords() {\n      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));\n      int texelsInLogicalRow = int(ceil(float(outShape[2]) / 2.0));\n      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[1]) / 2.0));\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(packedTexShape[0], packedTexShape[1]));\n      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;\n\n      int b = index / texelsInBatch;\n      index -= b * texelsInBatch;\n\n      int r = 2 * (index / texelsInLogicalRow);\n      int c = imod(index, texelsInLogicalRow) * 2;\n\n      return ivec3(b, r, c);\n    }\n  ";const r=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],a=Math.ceil(e[2]/2),s=a*Math.ceil(e[1]/2);return`\n    ivec3 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(${r[0]}, ${r[1]}));\n      int index = resTexRC.x * ${r[1]} + resTexRC.y;\n\n      int b = index / ${s};\n      index -= b * ${s};\n\n      int r = 2 * (index / ${a});\n      int c = imod(index, ${a}) * 2;\n\n      return ivec3(b, r, c);\n    }\n  `}(e,t,n);default:return function(e,t,n){if(n)return"\n    ivec4 getOutputCoords() {\n      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(packedTexShape[0], packedTexShape[1]));\n      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;\n\n      int texelsInLogicalRow = int(ceil(float(outShape[3]) / 2.0));\n      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[2]) / 2.0));\n      int texelsInBatchN = texelsInBatch * outShape[1];\n\n      int b2 = index / texelsInBatchN;\n      index -= b2 * texelsInBatchN;\n\n      int b = index / texelsInBatch;\n      index -= b * texelsInBatch;\n\n      int r = 2 * (index / texelsInLogicalRow);\n      int c = imod(index, texelsInLogicalRow) * 2;\n\n      return ivec4(b2, b, r, c);\n    }\n  ";const r=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],a=Math.ceil(e[e.length-1]/2),s=a*Math.ceil(e[e.length-2]/2);let o=s,i="",u="b, r, c";for(let t=2;t<e.length-1;t++)o*=e[e.length-t-1],i=`\n      int b${t} = index / ${o};\n      index -= b${t} * ${o};\n    `+i,u=`b${t}, `+u;return`\n    ivec${e.length} getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(${r[0]}, ${r[1]}));\n      int index = resTexRC.x * ${r[1]} + resTexRC.y;\n\n      ${i}\n\n      int b = index / ${s};\n      index -= b * ${s};\n\n      int r = 2 * (index / ${a});\n      int c = imod(index, ${a}) * 2;\n\n      return ivec${e.length}(${u});\n    }\n  `}(e,t,n)}}(t.logicalShape,i,n.enableShapeUniforms),d=function(e){return`\n    void setOutput(vec4 val) {\n      ${e.output} = val;\n    }\n  `}(u)):(c=function(e,t,n){switch(e.length){case 0:return Te();case 1:return function(e,t,n){if(1===t[0])return n?"\n      int getOutputCoords() {\n        return int(resultUV.x * float(outTexShape[1]));\n      }\n    ":`\n      int getOutputCoords() {\n        return int(resultUV.x * ${t[1]}.0);\n      }\n    `;if(1===t[1])return n?"\n      int getOutputCoords() {\n        return int(resultUV.y * float(outTexShape[0]));\n      }\n    ":`\n      int getOutputCoords() {\n        return int(resultUV.y * ${t[0]}.0);\n      }\n    `;if(n)return"\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(outTexShape[0], outTexShape[1]));\n      return resTexRC.x * outTexShape[1] + resTexRC.y;\n    }\n  ";return`\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(${t[0]}, ${t[1]}));\n      return resTexRC.x * ${t[1]} + resTexRC.y;\n    }\n  `}(0,t,n);case 2:return function(e,t,n){if(s.D5U.arraysEqual(e,t))return n?"\n      ivec2 getOutputCoords() {\n        return ivec2(resultUV.yx * vec2(outTexShape[0], outTexShape[1]));\n      }\n    ":`\n      ivec2 getOutputCoords() {\n        return ivec2(resultUV.yx * vec2(${t[0]}, ${t[1]}));\n      }\n    `;if(1===e[1])return n?"\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(outTexShape[0], outTexShape[1]));\n        int index = resTexRC.x * outTexShape[1] + resTexRC.y;\n        return ivec2(index, 0);\n      }\n    ":`\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(${t[0]}, ${t[1]}));\n        int index = resTexRC.x * ${t[1]} + resTexRC.y;\n        return ivec2(index, 0);\n      }\n    `;if(1===e[0])return n?"\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(outTexShape[0], outTexShape[1]));\n        int index = resTexRC.x * outTexShape[1] + resTexRC.y;\n        return ivec2(0, index);\n      }\n    ":`\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(${t[0]}, ${t[1]}));\n        int index = resTexRC.x * ${t[1]} + resTexRC.y;\n        return ivec2(0, index);\n      }\n    `;if(n)return"\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(outTexShape[0], outTexShape[1]));\n      int index = resTexRC.x * outTexShape[1] + resTexRC.y;\n      int r = index / outShape[1];\n      int c = index - r * outShape[1];\n      return ivec2(r, c);\n    }\n  ";return`\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(${t[0]}, ${t[1]}));\n      int index = resTexRC.x * ${t[1]} + resTexRC.y;\n      int r = index / ${e[1]};\n      int c = index - r * ${e[1]};\n      return ivec2(r, c);\n    }\n  `}(e,t,n);case 3:return function(e,t,n){if(n){return`\n  ivec3 getOutputCoords() {\n    ivec2 resTexRC = ivec2(resultUV.yx *\n                           vec2(outTexShape[0], outTexShape[1]));\n    int index = resTexRC.x * outTexShape[1] + resTexRC.y;\n    ${me(["r","c","d"],e)}\n    return ivec3(r, c, d);\n  }\n`}const r=fe(["r","c","d"],e);return`\n    ivec3 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(${t[0]}, ${t[1]}));\n      int index = resTexRC.x * ${t[1]} + resTexRC.y;\n      ${r}\n      return ivec3(r, c, d);\n    }\n  `}(e,t,n);case 4:return function(e,t,n){if(n){return`\n    ivec4 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2(outTexShape[0], outTexShape[1]));\n      int index = resTexRC.x * outTexShape[1] + resTexRC.y;\n      ${me(["r","c","d","d2"],e)}\n      return ivec4(r, c, d, d2);\n    }\n  `}const r=fe(["r","c","d","d2"],e);return`\n    ivec4 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2(${t[0]}, ${t[1]}));\n      int index = resTexRC.x * ${t[1]} + resTexRC.y;\n      ${r}\n      return ivec4(r, c, d, d2);\n    }\n  `}(e,t,n);case 5:return function(e,t){const n=fe(["r","c","d","d2","d3"],e);return`\n    ivec5 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx * vec2(${t[0]},\n                             ${t[1]}));\n\n      int index = resTexRC.x * ${t[1]} + resTexRC.y;\n\n      ${n}\n\n      ivec5 outShape = ivec5(r, c, d, d2, d3);\n      return outShape;\n    }\n  `}(e,t);case 6:return function(e,t){const n=fe(["r","c","d","d2","d3","d4"],e);return`\n    ivec6 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2(${t[0]}, ${t[1]}));\n      int index = resTexRC.x * ${t[1]} + resTexRC.y;\n\n      ${n}\n\n      ivec6 result = ivec6(r, c, d, d2, d3, d4);\n      return result;\n    }\n  `}(e,t);default:throw new Error(`${e.length}-D output sampling is not yet supported`)}}(t.logicalShape,i,n.enableShapeUniforms),d=function(e){return`\n    void setOutput(float val) {\n      ${e.output} = vec4(val, 0, 0, 0);\n    }\n  `}(u)),n.packedInputs&&(p+=$e);return[p,l,d,a,c,o,n.userCode].join("\n")}function ye(e,t=!1){const n=e.shapeInfo.logicalShape;switch(n.length){case 0:return function(e,t){const n=e.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return`float ${r}() {return ${n};}`;const[a,s]=e.shapeInfo.texShape;if(1===a&&1===s)return`\n      float ${r}() {\n        return sampleTexture(${n}, halfCR);\n      }\n    `;const o=Ee(n);if(t)return`\n    float ${r}() {\n      vec2 uv = uvFromFlat(${n}TexShape[0], ${n}TexShape[1], ${o});\n      return sampleTexture(${n}, uv);\n    }\n  `;const[i,u]=e.shapeInfo.texShape;return`\n    float ${r}() {\n      vec2 uv = uvFromFlat(${i}, ${u}, ${o});\n      return sampleTexture(${n}, uv);\n    }\n  `}(e,t);case 1:return function(e,t){const n=e.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return`\n      float ${r}(int index) {\n        ${Ne(e)}\n      }\n    `;const a=e.shapeInfo.texShape,s=a[0],o=a[1];if(1===o&&1===s)return`\n      float ${r}(int index) {\n        return sampleTexture(${n}, halfCR);\n      }\n    `;const i=Ee(n);if(1===o)return t?`\n      float ${r}(int index) {\n        vec2 uv = vec2(0.5, (float(index + ${i}) + 0.5) / float(${n}TexShape[0]));\n        return sampleTexture(${n}, uv);\n      }\n    `:`\n      float ${r}(int index) {\n        vec2 uv = vec2(0.5, (float(index + ${i}) + 0.5) / ${s}.0);\n        return sampleTexture(${n}, uv);\n      }\n    `;if(1===s)return t?`\n      float ${r}(int index) {\n        vec2 uv = vec2((float(index + ${i}) + 0.5) / float(${n}TexShape[1]), 0.5);\n        return sampleTexture(${n}, uv);\n      }\n    `:`\n      float ${r}(int index) {\n        vec2 uv = vec2((float(index + ${i}) + 0.5) / ${o}.0, 0.5);\n        return sampleTexture(${n}, uv);\n      }\n    `;if(t)return`\n    float ${r}(int index) {\n      vec2 uv = uvFromFlat(${n}TexShape[0], ${n}TexShape[1], index + ${i});\n      return sampleTexture(${n}, uv);\n    }\n  `;return`\n    float ${r}(int index) {\n      vec2 uv = uvFromFlat(${s}, ${o}, index + ${i});\n      return sampleTexture(${n}, uv);\n    }\n  `}(e,t);case 2:return function(e,t){const n=e.shapeInfo.logicalShape,r=e.name,a="get"+r.charAt(0).toUpperCase()+r.slice(1),o=e.shapeInfo.texShape;if(null!=o&&s.D5U.arraysEqual(n,o)){if(t)return`\n      float ${a}(int row, int col) {\n        vec2 uv = (vec2(col, row) + halfCR) / vec2(${r}TexShape[1], ${r}TexShape[0]);\n        return sampleTexture(${r}, uv);\n      }\n    `;const e=o[0];return`\n    float ${a}(int row, int col) {\n      vec2 uv = (vec2(col, row) + halfCR) / vec2(${o[1]}.0, ${e}.0);\n      return sampleTexture(${r}, uv);\n    }\n  `}const{newShape:i,keptDims:u}=s.D5U.squeezeShape(n),l=i;if(l.length<n.length){const n=["row","col"];return`\n      ${ye(Ae(e,l),t)}\n      float ${a}(int row, int col) {\n        return ${a}(${Fe(n,u)});\n      }\n    `}if(e.shapeInfo.isUniform)return`\n      float ${a}(int row, int col) {\n        int index = round(dot(vec2(row, col), vec2(${n[1]}, 1)));\n        ${Ne(e)}\n      }\n    `;const c=o[0],d=o[1],p=Ee(r);if(1===d)return t?`\n      float ${a}(int row, int col) {\n        float index = dot(vec3(row, col, ${p}), vec3(${r}Shape[1], 1, 1));\n        vec2 uv = vec2(0.5, (index + 0.5) / float(${r}TexShape[0]));\n        return sampleTexture(${r}, uv);\n      }\n    `:`\n    float ${a}(int row, int col) {\n      float index = dot(vec3(row, col, ${p}), vec3(${n[1]}, 1, 1));\n      vec2 uv = vec2(0.5, (index + 0.5) / ${c}.0);\n      return sampleTexture(${r}, uv);\n    }\n  `;if(1===c)return t?`\n      float ${a}(int row, int col) {\n        float index = dot(vec3(row, col, ${p}), vec3(${r}Shape[1], 1, 1));\n        vec2 uv = vec2((index + 0.5) / float(${r}TexShape[1]), 0.5);\n        return sampleTexture(${r}, uv);\n      }\n    `:`\n    float ${a}(int row, int col) {\n      float index = dot(vec3(row, col, ${p}), vec3(${n[1]}, 1, 1));\n      vec2 uv = vec2((index + 0.5) / ${d}.0, 0.5);\n      return sampleTexture(${r}, uv);\n    }\n  `;if(t)return`\n      float ${a}(int row, int col) {\n        // Explicitly use integer operations as dot() only works on floats.\n        int index = row * ${r}Shape[1] + col + ${p};\n        vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], index);\n        return sampleTexture(${r}, uv);\n      }\n    `;return`\n  float ${a}(int row, int col) {\n    // Explicitly use integer operations as dot() only works on floats.\n    int index = row * ${n[1]} + col + ${p};\n    vec2 uv = uvFromFlat(${c}, ${d}, index);\n    return sampleTexture(${r}, uv);\n  }\n`}(e,t);case 3:return function(e,t){const n=e.shapeInfo.logicalShape,r=e.name,a="get"+r.charAt(0).toUpperCase()+r.slice(1),o=n[1]*n[2],i=n[2],{newShape:u,keptDims:l}=s.D5U.squeezeShape(n),c=u;if(c.length<n.length){const n=["row","col","depth"];return`\n        ${ye(Ae(e,c),t)}\n        float ${a}(int row, int col, int depth) {\n          return ${a}(${Fe(n,l)});\n        }\n      `}if(e.shapeInfo.isUniform)return`\n      float ${a}(int row, int col, int depth) {\n        int index = round(dot(vec3(row, col, depth),\n                          vec3(${o}, ${i}, 1)));\n        ${Ne(e)}\n      }\n    `;const d=e.shapeInfo.texShape,p=d[0],h=d[1],f=e.shapeInfo.flatOffset;if(h===o&&null==f)return t?`\n      float ${a}(int row, int col, int depth) {\n        int stride1 = ${r}Shape[2];\n        float texR = float(row);\n        float texC = dot(vec2(col, depth), vec2(stride1, 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(${r}TexShape[1], ${r}TexShape[0]);\n        return sampleTexture(${r}, uv);\n      }\n    `:`\n        float ${a}(int row, int col, int depth) {\n          float texR = float(row);\n          float texC = dot(vec2(col, depth), vec2(${i}, 1));\n          vec2 uv = (vec2(texC, texR) + halfCR) /\n                     vec2(${h}.0, ${p}.0);\n          return sampleTexture(${r}, uv);\n        }\n      `;if(h===i&&null==f)return t?`\n      float ${a}(int row, int col, int depth) {\n        float texR = dot(vec2(row, col), vec2(${r}Shape[1], 1));\n        float texC = float(depth);\n        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${r}TexShape[1], ${r}TexShape[0]);\n        return sampleTexture(${r}, uv);\n      }\n    `:`\n    float ${a}(int row, int col, int depth) {\n      float texR = dot(vec2(row, col), vec2(${n[1]}, 1));\n      float texC = float(depth);\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${h}.0, ${p}.0);\n      return sampleTexture(${r}, uv);\n    }\n  `;const m=Ee(r);if(t)return`\n    float ${a}(int row, int col, int depth) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int stride0 = ${r}Shape[1] * ${r}Shape[2];\n      int stride1 = ${r}Shape[2];\n      int index = row * ${o} + col * ${i} + depth + ${m};\n      vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], index);\n      return sampleTexture(${r}, uv);\n    }\n    `;return`\n      float ${a}(int row, int col, int depth) {\n        // Explicitly use integer operations as dot() only works on floats.\n        int index = row * ${o} + col * ${i} + depth + ${m};\n        vec2 uv = uvFromFlat(${p}, ${h}, index);\n        return sampleTexture(${r}, uv);\n      }\n  `}(e,t);case 4:return function(e,t){const n=e.shapeInfo.logicalShape,r=e.name,a="get"+r.charAt(0).toUpperCase()+r.slice(1),o=n[3],i=n[2]*o,u=n[1]*i,{newShape:l,keptDims:c}=s.D5U.squeezeShape(n);if(l.length<n.length){const n=["row","col","depth","depth2"];return`\n      ${ye(Ae(e,l),t)}\n      float ${a}(int row, int col, int depth, int depth2) {\n        return ${a}(${Fe(n,c)});\n      }\n    `}if(e.shapeInfo.isUniform)return`\n      float ${a}(int row, int col, int depth, int depth2) {\n        int index = round(dot(vec4(row, col, depth, depth2),\n                          vec4(${u}, ${i}, ${o}, 1)));\n        ${Ne(e)}\n      }\n    `;const d=e.shapeInfo.flatOffset,p=e.shapeInfo.texShape,h=p[0],f=p[1],m=`int stride2 = ${r}Shape[3];`,g=`int stride1 = ${r}Shape[2] * stride2;`,x=`int stride0 = ${r}Shape[1] * stride1;`;if(f===u&&null==d)return t?`\n      float ${a}(int row, int col, int depth, int depth2) {\n        ${m}\n        ${g}\n        float texR = float(row);\n        float texC =\n            dot(vec3(col, depth, depth2),\n                vec3(stride1, stride2, 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(${r}TexShape[1], ${r}TexShape[0]);\n        return sampleTexture(${r}, uv);\n      }\n    `:`\n      float ${a}(int row, int col, int depth, int depth2) {\n        float texR = float(row);\n        float texC =\n            dot(vec3(col, depth, depth2),\n                vec3(${i}, ${o}, 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(${f}.0, ${h}.0);\n        return sampleTexture(${r}, uv);\n      }\n    `;if(f===o&&null==d)return t?`\n      float ${a}(int row, int col, int depth, int depth2) {\n        float texR = dot(vec3(row, col, depth),\n                         vec3(${r}Shape[1] * ${r}Shape[2], ${r}Shape[2], 1));\n        float texC = float(depth2);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(${r}TexShape[1], ${r}TexShape[0]);\n        return sampleTexture(${r}, uv);\n      }\n    `:`\n      float ${a}(int row, int col, int depth, int depth2) {\n        float texR = dot(vec3(row, col, depth),\n                         vec3(${n[1]*n[2]}, ${n[2]}, 1));\n        float texC = float(depth2);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(${f}.0, ${h}.0);\n        return sampleTexture(${r}, uv);\n      }\n    `;const b=Ee(r);if(t)return`\n    float ${a}(int row, int col, int depth, int depth2) {\n      // Explicitly use integer operations as dot() only works on floats.\n      ${m}\n      ${g}\n      ${x}\n      int index = row * stride0 + col * stride1 +\n          depth * stride2 + depth2;\n      vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], index + ${b});\n      return sampleTexture(${r}, uv);\n    }\n  `;return`\n    float ${a}(int row, int col, int depth, int depth2) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * ${u} + col * ${i} +\n          depth * ${o} + depth2;\n      vec2 uv = uvFromFlat(${h}, ${f}, index + ${b});\n      return sampleTexture(${r}, uv);\n    }\n  `}(e,t);case 5:return function(e){const t=e.shapeInfo.logicalShape,n=e.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),a=t[4],o=t[3]*a,i=t[2]*o,u=t[1]*i,{newShape:l,keptDims:c}=s.D5U.squeezeShape(t);if(l.length<t.length){const t=["row","col","depth","depth2","depth3"];return`\n      ${ye(Ae(e,l))}\n      float ${r}(int row, int col, int depth, int depth2, int depth3) {\n        return ${r}(${Fe(t,c)});\n      }\n    `}if(e.shapeInfo.isUniform)return`\n      float ${r}(int row, int col, int depth, int depth2, int depth3) {\n        float index = dot(\n          vec4(row, col, depth, depth2),\n          vec4(${u}, ${i}, ${o}, ${a})) +\n          depth3;\n        ${Ne(e)}\n      }\n    `;const d=e.shapeInfo.flatOffset,p=e.shapeInfo.texShape,h=p[0],f=p[1];if(f===u&&null==d)return`\n      float ${r}(int row, int col, int depth, int depth2, int depth3) {\n        int texR = row;\n        float texC = dot(vec4(col, depth, depth2, depth3),\n                         vec4(${i}, ${o}, ${a}, 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(${f}.0, ${h}.0);\n        return sampleTexture(${n}, uv);\n      }\n    `;if(f===a&&null==d)return`\n      float ${r}(int row, int col, int depth, int depth2, int depth3) {\n        float texR = dot(\n          vec4(row, col, depth, depth2),\n          vec4(${t[1]*t[2]*t[3]},\n               ${t[2]*t[3]}, ${t[3]}, 1));\n        int texC = depth3;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(${f}.0, ${h}.0);\n        return sampleTexture(${n}, uv);\n      }\n    `;const m=Ee(n);return`\n    float ${r}(int row, int col, int depth, int depth2, int depth3) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * ${u} + col * ${i} + depth * ${o} +\n          depth2 * ${a} + depth3 + ${m};\n      vec2 uv = uvFromFlat(${h}, ${f}, index);\n      return sampleTexture(${n}, uv);\n    }\n  `}(e);case 6:return function(e){const t=e.shapeInfo.logicalShape,n=e.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),{newShape:a,keptDims:o}=s.D5U.squeezeShape(t);if(a.length<t.length){const t=["row","col","depth","depth2","depth3","depth4"];return`\n      ${ye(Ae(e,a))}\n      float ${r}(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        return ${r}(${Fe(t,o)});\n      }\n    `}const i=t[5],u=t[4]*i,l=t[3]*u,c=t[2]*l,d=t[1]*c;if(e.shapeInfo.isUniform)return`\n      float ${r}(int row, int col, int depth,\n                  int depth2, int depth3, int depth4) {\n        int index = round(dot(\n          vec4(row, col, depth, depth2),\n          vec4(${d}, ${c}, ${l}, ${u})) +\n          dot(\n            vec2(depth3, depth4),\n            vec2(${i}, 1)));\n        ${Ne(e)}\n      }\n    `;const p=e.shapeInfo.flatOffset,h=e.shapeInfo.texShape,f=h[0],m=h[1];if(m===d&&null==p)return`\n      float ${r}(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        int texR = row;\n        float texC = dot(vec4(col, depth, depth2, depth3),\n          vec4(${c}, ${l}, ${u}, ${i})) +\n               float(depth4);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(${m}.0, ${f}.0);\n        return sampleTexture(${n}, uv);\n      }\n    `;if(m===i&&null==p)return`\n      float ${r}(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        float texR = dot(vec4(row, col, depth, depth2),\n          vec4(${t[1]*t[2]*t[3]*t[4]},\n               ${t[2]*t[3]*t[4]},\n               ${t[3]*t[4]},\n               ${t[4]})) + float(depth3);\n        int texC = depth4;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(${m}.0, ${f}.0);\n        return sampleTexture(${n}, uv);\n      }\n    `;const g=Ee(n);return`\n    float ${r}(int row, int col, int depth,\n                  int depth2, int depth3, int depth4) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * ${d} + col * ${c} + depth * ${l} +\n          depth2 * ${u} + depth3 * ${i} + depth4 + ${g};\n      vec2 uv = uvFromFlat(${f}, ${m}, index);\n      return sampleTexture(${n}, uv);\n    }\n  `}(e);default:throw new Error(`${n.length}-D input sampling is not yet supported`)}}function Ie(e,t){switch(e.shapeInfo.logicalShape.length){case 0:return function(e){const t=e.name,n="get"+t.charAt(0).toUpperCase()+t.slice(1),r=he();return`\n    vec4 ${n}() {\n      return ${r.texture2D}(${t}, halfCR);\n    }\n  `}(e);case 1:return function(e,t){const n=e.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),a=e.shapeInfo.texShape,s=he();if(t)return`\n    vec4 ${r}(int index) {\n      ivec2 packedTexShape = ivec2(ceil(float(${n}TexShape[0]) / 2.0), ceil(float(${n}TexShape[1]) / 2.0));\n      vec2 uv = packedUVfrom1D(\n        packedTexShape[0], packedTexShape[1], index);\n      return ${s.texture2D}(${n}, uv);\n    }\n  `;const o=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)];return`\n    vec4 ${r}(int index) {\n      vec2 uv = packedUVfrom1D(\n        ${o[0]}, ${o[1]}, index);\n      return ${s.texture2D}(${n}, uv);\n    }\n  `}(e,t);case 2:return function(e,t){const n=e.shapeInfo.logicalShape,r=e.name,a="get"+r.charAt(0).toUpperCase()+r.slice(1),o=e.shapeInfo.texShape,i=o[0],u=o[1],l=he();if(null!=o&&s.D5U.arraysEqual(n,o))return t?`\n      vec4 ${a}(int row, int col) {\n        vec2 uv = (vec2(col, row) + halfCR) / vec2(${r}TexShape[1], ${r}TexShape[0]);\n\n        return ${l.texture2D}(${r}, uv);\n      }\n    `:`\n      vec4 ${a}(int row, int col) {\n        vec2 uv = (vec2(col, row) + halfCR) / vec2(${u}.0, ${i}.0);\n\n        return ${l.texture2D}(${r}, uv);\n      }\n    `;if(t)return`\n    vec4 ${a}(int row, int col) {\n      ivec2 packedTexShape = ivec2(ceil(float(${r}TexShape[0]) / 2.0), ceil(float(${r}TexShape[1]) / 2.0));\n      int valuesPerRow = int(ceil(float(${r}Shape[1]) / 2.0));\n      vec2 uv = packedUVfrom2D(valuesPerRow, packedTexShape[0], packedTexShape[1], row, col);\n      return ${l.texture2D}(${r}, uv);\n    }\n  `;const c=[Math.ceil(o[0]/2),Math.ceil(o[1]/2)],d=Math.ceil(n[1]/2);return`\n    vec4 ${a}(int row, int col) {\n      vec2 uv = packedUVfrom2D(${d}, ${c[0]}, ${c[1]}, row, col);\n      return ${l.texture2D}(${r}, uv);\n    }\n  `}(e,t);case 3:return function(e,t){const n=e.shapeInfo.logicalShape,r=e.name,a="get"+r.charAt(0).toUpperCase()+r.slice(1),s=e.shapeInfo.texShape,o=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)];if(1===n[0]){const r=[1,2],s=["b","row","col"];return`\n        ${Ie(Ae(e,n.slice(1)),t)}\n        vec4 ${a}(int b, int row, int col) {\n          return ${a}(${Fe(s,r)});\n        }\n      `}const i=he();if(t)return`\n    vec4 ${a}(int b, int row, int col) {\n      ivec2 packedTexShape = ivec2(ceil(float(${r}TexShape[0]) / 2.0), ceil(float(${r}TexShape[1]) / 2.0));\n      int valuesPerRow = int(ceil(float(${r}Shape[2]) / 2.0));\n      int texelsInBatch = valuesPerRow * int(ceil(float(${r}Shape[1]) / 2.0));\n      vec2 uv = packedUVfrom3D(\n        packedTexShape[0], packedTexShape[1], texelsInBatch, valuesPerRow, b, row, col);\n      return ${i.texture2D}(${r}, uv);\n    }\n  `;const u=o[0],l=o[1],c=Math.ceil(n[2]/2),d=c*Math.ceil(n[1]/2);return`\n    vec4 ${a}(int b, int row, int col) {\n      vec2 uv = packedUVfrom3D(\n        ${u}, ${l}, ${d}, ${c}, b, row, col);\n      return ${i.texture2D}(${r}, uv);\n    }\n  `}(e,t);default:return function(e,t){const n=e.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),a=he();if(t)return`\n    vec4 ${r}(int b2, int b, int row, int col) {\n      int valuesPerRow = int(ceil(float(${n}Shape[3]) / 2.0));\n      int texelsInBatch = valuesPerRow * int(ceil(float(${n}Shape[2]) / 2.0));\n      int index = b * texelsInBatch + (row / 2) * valuesPerRow + (col / 2);\n      texelsInBatch *= ${n}Shape[1];\n      index = b2 * texelsInBatch + index;\n      ivec2 packedTexShape = ivec2(ceil(float(${n}TexShape[0]) / 2.0), ceil(float(${n}TexShape[1]) / 2.0));\n      int texR = index / packedTexShape[1];\n      int texC = index - texR * packedTexShape[1];\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(packedTexShape[1], packedTexShape[0]); return ${a.texture2D}(${n}, uv);\n    }\n  `;const s=e.shapeInfo.logicalShape,o=s.length,i=e.shapeInfo.texShape,u=[Math.ceil(i[0]/2),Math.ceil(i[1]/2)],l=u[0],c=u[1],d=Math.ceil(s[o-1]/2);let p=d*Math.ceil(s[o-2]/2),h="int b, int row, int col",f=`b * ${p} + (row / 2) * ${d} + (col / 2)`;for(let e=2;e<o-1;e++)h=`int b${e}, `+h,p*=s[o-e-1],f=`b${e} * ${p} + `+f;return`\n    vec4 ${r}(${h}) {\n      int index = ${f};\n      int texR = index / ${c};\n      int texC = index - texR * ${c};\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${c}, ${l});\n      return ${a.texture2D}(${n}, uv);\n    }\n  `}(e,t)}}const we="\nvec2 uvFromFlat(int texNumR, int texNumC, int index) {\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\nvec2 packedUVfrom1D(int texNumR, int texNumC, int index) {\n  int texelIndex = index / 2;\n  int texR = texelIndex / texNumC;\n  int texC = texelIndex - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",Ce="\nvec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,\n  int texNumC, int row, int col) {\n  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);\n  int texR = texelIndex / texNumC;\n  int texC = texelIndex - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",Se="\nvec2 packedUVfrom3D(int texNumR, int texNumC,\n    int texelsInBatch, int texelsInLogicalRow, int b,\n    int row, int col) {\n  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",$e="\n  float getChannel(vec4 frag, vec2 innerDims) {\n    vec2 modCoord = mod(innerDims, 2.);\n    return modCoord.x == 0. ?\n      (modCoord.y == 0. ? frag.r : frag.g) :\n      (modCoord.y == 0. ? frag.b : frag.a);\n  }\n  float getChannel(vec4 frag, int dim) {\n    float modCoord = mod(float(dim), 2.);\n    return modCoord == 0. ? frag.r : frag.g;\n  }\n";function Te(){return"\n    int getOutputCoords() {\n      return 0;\n    }\n  "}function Ee(e){return`offset${e}`}function Ne(e){const t=e.name,n=s.D5U.sizeFromShape(e.shapeInfo.logicalShape);return n<2?`return ${t};`:`\n    for (int i = 0; i < ${n}; i++) {\n      if (i == index) {\n        return ${t}[i];\n      }\n    }\n  `}function Re(e){if(e<=1)return"int";if(2===e)return"ivec2";if(3===e)return"ivec3";if(4===e)return"ivec4";if(5===e)return"ivec5";if(6===e)return"ivec6";throw Error(`GPU for rank ${e} is not yet supported`)}function De(e,t,n){const{newShape:r,keptDims:a}=s.D5U.squeezeShape(t),o=t.length,i=e&&3===o&&1===t[0],u=i?t.slice(1):r,l=!e&&o>1&&!s.D5U.arraysEqual(t,n)&&r.length<o||i;return{useSqueezeShape:l,uniformShape:l?u:t,keptDims:a}}function Ae(e,t){const n=JSON.parse(JSON.stringify(e));return n.shapeInfo.logicalShape=t,n}function Fe(e,t){return t.map((t=>e[t])).join(", ")}function _e(e,t){if(e.length!==t.length)throw Error(`Binary was compiled with ${e.length} inputs, but was executed with ${t.length} inputs`);e.forEach(((e,n)=>{const r=e.logicalShape,a=t[n],o=a.shape;if(!s.D5U.arraysEqual(r,o))throw Error(`Binary was compiled with different shapes than the current args. Shapes ${r} and ${o} must match`);if(e.isUniform&&a.isUniform)return;const i=e.texShape,u=a.isUniform?null:a.texData.texShape;if(!s.D5U.arraysEqual(i,u))throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${i} and ${u} must match`)}))}function Oe(e){return(0,s.OBj)().getBool("WEBGL_USE_SHAPES_UNIFORMS")&&e<=4}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Me{constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=c.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const t=he();this.outputShape=e,this.enableShapeUniforms=Oe(this.outputShape.length),this.userCode=`\n      ivec3 outCoordsFromFlatIndex(int index) {\n        ${this.enableShapeUniforms?me(["r","c","d"],e):fe(["r","c","d"],e)}\n        return ivec3(r, c, d);\n      }\n\n      void main() {\n        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));\n        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);\n\n        vec4 result = vec4(0.);\n\n        for (int i=0; i<4; i++) {\n          int flatIndex = index + i;\n          ivec3 rc = outCoordsFromFlatIndex(flatIndex);\n          result[i] = getA(rc.x, rc.y, rc.z);\n        }\n\n        ${t.output} = result;\n      }\n    `}}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Ue{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=c.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const t=he();this.outputShape=e,this.enableShapeUniforms=Oe(this.outputShape.length),this.userCode=`\n      ivec3 outCoordsFromFlatIndex(int index) {\n        ${this.enableShapeUniforms?me(["r","c","d"],e):fe(["r","c","d"],e)}\n        return ivec3(r, c, d);\n      }\n\n      void main() {\n        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));\n        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);\n\n        vec4 result = vec4(0.);\n\n        for (int i=0; i<4; i++) {\n          int flatIndex = index + i;\n          ivec3 rc = outCoordsFromFlatIndex(flatIndex);\n          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));\n        }\n\n        ${t.output} = result;\n      }\n    `}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Pe{constructor(e){this.variableNames=["A"],this.outTexUsage=d.DOWNLOAD;const t=he();this.outputShape=e,this.userCode=`\n      ${be}\n\n      void main() {\n        float x = getAAtOutCoords();\n        ${t.output} = encode_float(x);\n      }\n    `}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class We{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=d.DOWNLOAD;const t=he();this.outputShape=e,this.userCode=`\n      ${be}\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));\n        ${t.output} = encode_float(x);\n      }\n    `}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Be{constructor(e,t=!1){this.variableNames=["A"],this.customUniforms=[{name:"texShape",type:"ivec2"}];const n=he();this.outputShape=e,this.enableShapeUniforms=Oe(this.outputShape.length);let r="result";t&&(r="floor(result * 255. + 0.5)"),this.userCode=`\n      ${this.enableShapeUniforms?"\n  int getFlatIndex(ivec3 coords) {\n    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;\n  }\n":xe(e)}\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n\n        int flatIndex = getFlatIndex(coords);\n        int offset = imod(flatIndex, 4);\n\n        flatIndex = idiv(flatIndex, 4, 1.);\n\n        int r = flatIndex / texShape[1];\n        int c = imod(flatIndex, texShape[1]);\n        vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);\n        vec4 values = ${n.texture2D}(A, uv);\n\n        float result;\n\n        if(offset == 0) {\n          result = values[0];\n        } else if(offset == 1) {\n          result = values[1];\n        } else if(offset == 2) {\n          result = values[2];\n        } else {\n          result = values[3];\n        }\n\n        ${n.output} = vec4(${r}, 0., 0., 0.);\n      }\n    `}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Le{constructor(e,t=!1){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:"texShape",type:"ivec2"}];const n=he();this.outputShape=e,this.enableShapeUniforms=Oe(this.outputShape.length);let r="",a="result";t&&(a="floor(result * 255. + 0.5)");for(let t=0;t<=1;t++)for(let a=0;a<=1;a++){const s=2*t+a;r+=`\n          localCoords = coords;\n          if(localCoords[2] + ${a} < ${this.enableShapeUniforms?"outShape[2]":`${e[2]}`}) {\n          localCoords[2] += ${a};\n          if (localCoords[1] + ${t} < ${this.enableShapeUniforms?"outShape[1]":`${e[1]}`}) {\n            localCoords[1] += ${t};\n\n            flatIndex = getFlatIndex(localCoords);\n            offset = imod(flatIndex, 4);\n\n            flatIndex = idiv(flatIndex, 4, 1.);\n\n            int r = flatIndex / texShape[1];\n            int c = imod(flatIndex, texShape[1]);\n            vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);\n            values = ${n.texture2D}(A, uv);\n\n            if (offset == 0) {\n              result[${s}] = values[0];\n            } else if (offset == 1) {\n              result[${s}] = values[1];\n            } else if (offset == 2) {\n              result[${s}] = values[2];\n            } else {\n              result[${s}] = values[3];\n            }\n          }\n        }\n        `}this.userCode=`\n        ${this.enableShapeUniforms?"\n  int getFlatIndex(ivec3 coords) {\n    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;\n  }\n":xe(e)}\n\n        void main() {\n          ivec3 coords = getOutputCoords();\n\n          vec4 result = vec4(0.);\n          int flatIndex, r, c, offset;\n          ivec3 localCoords;\n          vec2 uv;\n          vec4 values;\n\n          ${r}\n\n          ${n.output} = ${a};\n        }\n    `}}
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ze(e){const t=he();return y(e,`${t.version}\n    precision highp float;\n    ${t.attribute} vec3 clipSpacePos;\n    ${t.attribute} vec2 uv;\n    ${t.varyingVs} vec2 resultUV;\n\n    void main() {\n      gl_Position = vec4(clipSpacePos, 1);\n      resultUV = uv;\n    }`)}function Ve(e){return T(e,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function Ge(e){return E(e,new Uint16Array([0,1,2,2,1,3]))}function He(e,t,n,r,a,s){D(t,n);const o=R(e),i=e.TEXTURE_2D;return x(e,(()=>e.bindTexture(i,o))),x(e,(()=>e.texParameteri(i,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE))),x(e,(()=>e.texParameteri(i,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE))),x(e,(()=>e.texParameteri(i,e.TEXTURE_MIN_FILTER,e.NEAREST))),x(e,(()=>e.texParameteri(i,e.TEXTURE_MAG_FILTER,e.NEAREST))),x(e,(()=>e.texImage2D(i,0,r,t,n,0,a,s,null))),x(e,(()=>e.bindTexture(e.TEXTURE_2D,null))),o}function je(e){return e.internalFormatFloat}function Xe(e,t,n,r){const[a,s]=h(t,n);return He(e,a,s,je(r),r.textureFormatFloat,e.FLOAT)}function qe(e){return e.internalFormatHalfFloat}function Ke(e,t,n,r){const[a,s]=h(t,n);return He(e,a,s,qe(r),r.textureFormatFloat,r.textureTypeHalfFloat)}function Ye(e){return e.downloadTextureFormat}function Ze(e,t,n,r){const[a,s]=h(t,n);return He(e,a,s,Ye(r),e.RGBA,e.UNSIGNED_BYTE)}function Qe(e){return e.internalFormatPackedFloat}function Je(e,t,n,r){const[a,s]=m(t,n);return He(e,a,s,Qe(r),e.RGBA,e.FLOAT)}function et(e){return e.internalFormatPackedHalfFloat}function tt(e,t,n,r){const[a,s]=m(t,n);return He(e,a,s,et(r),e.RGBA,r.textureTypeHalfFloat)}function nt(e,t,n){x(e,(()=>e.bindBuffer(e.ARRAY_BUFFER,n)));return F(e,t,"clipSpacePos",n,3,20,0)&&F(e,t,"uv",n,2,20,12)}function rt(e,t,n,r,a,s){let o,i,u;x(e,(()=>e.bindTexture(e.TEXTURE_2D,t))),a instanceof Uint8Array?(o=new Uint8Array(n*r*4),i=e.UNSIGNED_BYTE,u=e.RGBA):(o=new Float32Array(n*r*4),i=e.FLOAT,u=s.internalFormatPackedFloat),o.set(a),x(e,(()=>e.texImage2D(e.TEXTURE_2D,0,u,n,r,0,e.RGBA,i,o))),x(e,(()=>e.bindTexture(e.TEXTURE_2D,null)))}function at(e,t,n){x(e,(()=>e.bindTexture(e.TEXTURE_2D,t))),n.data instanceof Uint8Array?x(e,(()=>e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n.width,n.height,0,e.RGBA,e.UNSIGNED_BYTE,n.data))):x(e,(()=>e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,n))),x(e,(()=>e.bindTexture(e.TEXTURE_2D,null)))}function st(e,t,n,r){const a=e.createBuffer();x(e,(()=>e.bindBuffer(e.PIXEL_PACK_BUFFER,a)));const s=16*t*n;return x(e,(()=>e.bufferData(e.PIXEL_PACK_BUFFER,s,e.STREAM_READ))),x(e,(()=>e.readPixels(0,0,n,t,e.RGBA,e.FLOAT,0))),x(e,(()=>e.bindBuffer(e.PIXEL_PACK_BUFFER,null))),a}function ot(e,t,n){const r=e,a=new Float32Array(n);return r.bindBuffer(r.PIXEL_PACK_BUFFER,t),r.getBufferSubData(r.PIXEL_PACK_BUFFER,0,a),r.bindBuffer(r.PIXEL_PACK_BUFFER,null),a}function it(e,t,n,r){const[a,s]=h(t,n),o=new Uint8Array(t*n*4);return x(e,(()=>e.readPixels(0,0,a,s,r.downloadTextureFormat,e.UNSIGNED_BYTE,o))),new Float32Array(o.buffer)}function ut(e,t,n,r,a,s,o,i){const u=e,l=new Float32Array(function(e,t){const[n,r]=m(e,t);return n*r*4}(s,o));return u.bindBuffer(u.PIXEL_PACK_BUFFER,t),u.getBufferSubData(u.PIXEL_PACK_BUFFER,0,l),u.bindBuffer(u.PIXEL_PACK_BUFFER,null),l}function lt(e,t,n){const r=new Float32Array(t*n*4);return x(e,(()=>e.readPixels(0,0,n,t,e.RGBA,e.FLOAT,r))),r}
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class ct{constructor(e){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];const t=(0,s.OBj)().getNumber("WEBGL_VERSION");null!=e?(this.gl=e,u(t,e)):this.gl=l(t);let n="WEBGL_color_buffer_float";const r="EXT_color_buffer_half_float";if(1===(0,s.OBj)().getNumber("WEBGL_VERSION")){const e="OES_texture_float",t="OES_texture_half_float";if(this.textureFloatExtension=k(this.gl,e),se(this.gl,t))this.textureHalfFloatExtension=k(this.gl,t);else if((0,s.OBj)().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(n),se(this.gl,r))this.colorBufferHalfFloatExtension=k(this.gl,r);else if((0,s.OBj)().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(n="EXT_color_buffer_float",se(this.gl,n))this.colorBufferFloatExtension=this.gl.getExtension(n);else{if(!se(this.gl,r))throw new Error("GL context does not support color renderable floats");this.colorBufferHalfFloatExtension=this.gl.getExtension(r)}this.vertexBuffer=Ve(this.gl),this.indexBuffer=Ge(this.gl),this.framebuffer=A(this.gl),this.textureConfig=g(this.gl,this.textureHalfFloatExtension)}get debug(){return(0,s.OBj)().getBool("DEBUG")}dispose(){if(this.disposed)return;null!=this.program&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),null!=this.outputTexture&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");const e=this.gl;x(e,(()=>e.finish())),x(e,(()=>e.bindFramebuffer(e.FRAMEBUFFER,null))),x(e,(()=>e.deleteFramebuffer(this.framebuffer))),x(e,(()=>e.bindBuffer(e.ARRAY_BUFFER,null))),x(e,(()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null))),x(e,(()=>e.deleteBuffer(this.indexBuffer))),this.disposed=!0}createFloat32MatrixTexture(e,t){return this.throwIfDisposed(),Xe(this.gl,e,t,this.textureConfig)}createFloat16MatrixTexture(e,t){return this.throwIfDisposed(),Ke(this.gl,e,t,this.textureConfig)}createUnsignedBytesMatrixTexture(e,t){return this.throwIfDisposed(),Ze(this.gl,e,t,this.textureConfig)}uploadPixelDataToTexture(e,t){this.throwIfDisposed(),at(this.gl,e,t)}uploadDenseMatrixToTexture(e,t,n,r){this.throwIfDisposed(),rt(this.gl,e,t,n,r,this.textureConfig)}createFloat16PackedMatrixTexture(e,t){return this.throwIfDisposed(),tt(this.gl,e,t,this.textureConfig)}createPackedMatrixTexture(e,t){return this.throwIfDisposed(),Je(this.gl,e,t,this.textureConfig)}deleteMatrixTexture(e){this.throwIfDisposed(),this.outputTexture===e&&(L(this.gl,this.framebuffer),this.outputTexture=null),x(this.gl,(()=>this.gl.deleteTexture(e)))}downloadByteEncodedFloatMatrixFromOutputTexture(e,t,n){return this.downloadMatrixDriver(e,(()=>it(this.gl,t,n,this.textureConfig)))}downloadPackedMatrixFromBuffer(e,t,n,r,a,s){return ut(this.gl,e,0,0,0,a,s,this.textureConfig)}downloadFloat32MatrixFromBuffer(e,t){return ot(this.gl,e,t)}createBufferFromTexture(e,t,n){this.bindTextureToFrameBuffer(e);const r=st(this.gl,t,n,this.textureConfig);return this.unbindTextureToFrameBuffer(),r}createAndWaitForFence(){const e=this.createFence(this.gl);return this.pollFence(e)}createFence(e){let t,n;if((0,s.OBj)().getBool("WEBGL_FENCE_API_ENABLED")){const r=e,a=r.fenceSync(r.SYNC_GPU_COMMANDS_COMPLETE,0);e.flush(),n=()=>{const e=r.clientWaitSync(a,0,0);return e===r.ALREADY_SIGNALED||e===r.CONDITION_SATISFIED},t=a}else(0,s.OBj)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(t=this.beginQuery(),this.endQuery(),n=()=>this.isQueryAvailable(t,(0,s.OBj)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))):n=()=>!0;return{query:t,isFencePassed:n}}downloadMatrixFromPackedTexture(e,t,n){return this.downloadMatrixDriver(e,(()=>lt(this.gl,t,n)))}createProgram(e){this.throwIfDisposed();const t=this.gl,n=I(t,e);null==this.vertexShader&&(this.vertexShader=ze(t));const r=C(t);return x(t,(()=>t.attachShader(r,this.vertexShader))),x(t,(()=>t.attachShader(r,n))),S(t,r),this.debug&&$(t,r),this.vertexAttrsAreBound||(this.setProgram(r),this.vertexAttrsAreBound=nt(t,this.program,this.vertexBuffer)),r}deleteProgram(e){this.throwIfDisposed(),e===this.program&&(this.program=null),null!=e&&x(this.gl,(()=>this.gl.deleteProgram(e)))}setProgram(e){this.throwIfDisposed(),this.program=e,null!=this.program&&this.debug&&$(this.gl,this.program),x(this.gl,(()=>this.gl.useProgram(e)))}getUniformLocation(e,t,n=!0){return this.throwIfDisposed(),n?M(this.gl,e,t):U(this.gl,e,t)}getAttributeLocation(e,t){return this.throwIfDisposed(),x(this.gl,(()=>this.gl.getAttribLocation(e,t)))}getUniformLocationNoThrow(e,t){return this.throwIfDisposed(),this.gl.getUniformLocation(e,t)}setInputMatrixTexture(e,t,n){this.throwIfDisposed(),this.throwIfNoProgram(),P(this.gl,e,t,n)}setOutputMatrixTexture(e,t,n){this.setOutputMatrixTextureDriver(e,n,t)}setOutputPackedMatrixTexture(e,t,n){this.throwIfDisposed();const[r,a]=m(t,n);this.setOutputMatrixTextureDriver(e,r,a)}setOutputMatrixWriteRegion(e,t,n,r){this.setOutputMatrixWriteRegionDriver(n,e,r,t)}setOutputPackedMatrixWriteRegion(e,t,n,r){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")}debugValidate(){null!=this.program&&$(this.gl,this.program),z(this.gl)}executeProgram(){this.throwIfDisposed(),this.throwIfNoProgram();const e=this.gl;this.debug&&this.debugValidate(),x(e,(()=>e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0)))}blockUntilAllProgramsCompleted(){this.throwIfDisposed(),x(this.gl,(()=>this.gl.finish()))}getQueryTimerExtension(){return null==this.disjointQueryTimerExtension&&(this.disjointQueryTimerExtension=k(this.gl,2===(0,s.OBj)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension}getQueryTimerExtensionWebGL2(){return this.getQueryTimerExtension()}getQueryTimerExtensionWebGL1(){return this.getQueryTimerExtension()}beginQuery(){if(2===(0,s.OBj)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")){const e=this.gl,t=this.getQueryTimerExtensionWebGL2(),n=e.createQuery();return e.beginQuery(t.TIME_ELAPSED_EXT,n),n}const e=this.getQueryTimerExtensionWebGL1(),t=e.createQueryEXT();return e.beginQueryEXT(e.TIME_ELAPSED_EXT,t),t}endQuery(){if(2===(0,s.OBj)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")){const e=this.gl,t=this.getQueryTimerExtensionWebGL2();return void e.endQuery(t.TIME_ELAPSED_EXT)}const e=this.getQueryTimerExtensionWebGL1();e.endQueryEXT(e.TIME_ELAPSED_EXT)}async waitForQueryAndGetTime(e){return await s.D5U.repeatedTry((()=>this.disposed||this.isQueryAvailable(e,(0,s.OBj)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")))),this.getQueryTime(e,(0,s.OBj)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}getQueryTime(e,t){if(0===t)return null;if(2===t){const t=this.gl;return t.getQueryParameter(e,t.QUERY_RESULT)/1e6}{const t=this.getQueryTimerExtensionWebGL1();return t.getQueryObjectEXT(e,t.QUERY_RESULT_EXT)/1e6}}isQueryAvailable(e,t){if(0===t)return!0;if(2===t){const t=this.gl,n=this.getQueryTimerExtensionWebGL2(),r=t.getQueryParameter(e,t.QUERY_RESULT_AVAILABLE);return null==this.disjoint&&(this.disjoint=this.gl.getParameter(n.GPU_DISJOINT_EXT)),r&&!this.disjoint}{const t=this.getQueryTimerExtensionWebGL1(),n=t.getQueryObjectEXT(e,t.QUERY_RESULT_AVAILABLE_EXT);return null==this.disjoint&&(this.disjoint=this.gl.getParameter(t.GPU_DISJOINT_EXT)),n&&!this.disjoint}}pollFence(e){return new Promise((t=>{this.addItemToPoll((()=>e.isFencePassed()),(()=>t()))}))}pollItems(){const e=function(e){let t=0;for(;t<e.length;++t){if(!e[t]())break}return t-1}(this.itemsToPoll.map((e=>e.isDoneFn)));for(let t=0;t<=e;++t){const{resolveFn:e}=this.itemsToPoll[t];e()}this.itemsToPoll=this.itemsToPoll.slice(e+1)}addItemToPoll(e,t){this.itemsToPoll.push({isDoneFn:e,resolveFn:t}),this.itemsToPoll.length>1||s.D5U.repeatedTry((()=>(this.pollItems(),0===this.itemsToPoll.length)))}bindTextureToFrameBuffer(e){this.throwIfDisposed(),B(this.gl,e,this.framebuffer),this.debug&&z(this.gl)}unbindTextureToFrameBuffer(){null!=this.outputTexture?(B(this.gl,this.outputTexture,this.framebuffer),this.debug&&z(this.gl)):L(this.gl,this.framebuffer)}downloadMatrixDriver(e,t){this.bindTextureToFrameBuffer(e);const n=t();return this.unbindTextureToFrameBuffer(),n}setOutputMatrixTextureDriver(e,t,n){this.throwIfDisposed();const r=this.gl;B(r,e,this.framebuffer),this.debug&&z(r),this.outputTexture=e,x(r,(()=>r.viewport(0,0,t,n))),x(r,(()=>r.scissor(0,0,t,n)))}setOutputMatrixWriteRegionDriver(e,t,n,r){this.throwIfDisposed(),x(this.gl,(()=>this.gl.scissor(e,t,n,r)))}throwIfDisposed(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")}throwIfNoProgram(){if(null==this.program)throw new Error("No GPU program is currently set.")}}var dt=n(5226);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const{addImpl:pt,bincountImpl:ht,bincountReduceImpl:ft,ceilImpl:mt,concatImpl:gt,equalImpl:xt,expImpl:bt,expm1Impl:vt,floorImpl:kt,gatherNdImpl:yt,gatherV2Impl:It,greaterImpl:wt,greaterEqualImpl:Ct,lessImpl:St,lessEqualImpl:$t,linSpaceImpl:Tt,logImpl:Et,maxImpl:Nt,maximumImpl:Rt,minimumImpl:Dt,multiplyImpl:At,negImpl:Ft,notEqualImpl:_t,prodImpl:Ot,rangeImpl:Mt,rsqrtImpl:Ut,sigmoidImpl:Pt,simpleAbsImpl:Wt,sliceImpl:Bt,sparseFillEmptyRowsImpl:Lt,sparseReshapeImpl:zt,sparseSegmentReductionImpl:Vt,sqrtImpl:Gt,stridedSliceImpl:Ht,stringNGramsImpl:jt,stringSplitImpl:Xt,stringToHashBucketFastImpl:qt,subImpl:Kt,tileImpl:Yt,topKImpl:Zt,transposeImpl:Qt,uniqueImpl:Jt}=dt;
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function en(e,t){return["x","y","z","w","u","v"].slice(0,t).map((t=>`${e}.${t}`))}function tn(e,t){return 1===t?[e]:en(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class nn{constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=e;const t=e.length;if(0===t)this.userCode="\n        void main() {\n          setOutput(vec4(getA(), 0., 0., 0.));\n        }\n      ";else{const n=tn("rc",t),r=Re(t),a=function(e,t,n){if(1===e)return`rc > ${t[0]}`;let r="";for(let a=e-2;a<e;a++)r+=`${n[a]} >= ${t[a]}`,a<e-1&&(r+="||");return r}(t,e,n),s=function(e,t,n,r){if(1===e)return"";const a=r.slice(-2);return`\n    int r = ${a[0]};\n    int c = ${a[1]};\n    int rp1 = r + 1;\n    int cp1 = c + 1;\n\n    bool cEdge = cp1 >= ${t};\n    bool rEdge = rp1 >= ${n};\n  `}(t,e[e.length-1],e[e.length-2],n),o=function(e,t){const n=e.length,r=function(e,t){const n=[];for(let r=0;r<=1;r++)for(let a=0;a<=1;a++){let s=`${0===r?"r":"rp1"}, ${0===a?"c":"cp1"}`;for(let n=2;n<e;n++)s=`${t[t.length-1-n]},`+s;n.push(s)}return n}(n,t);if(1===n)return`getA(rc),\n            rc + 1 >= ${e[0]} ? 0. : getA(rc + 1),\n            0, 0`;return`getA(${r[0]}),\n          cEdge ? 0. : getA(${r[1]}),\n          rEdge ? 0. : getA(${r[2]}),\n          rEdge || cEdge ? 0. : getA(${r[3]})`}(e,n);this.userCode=`\n        void main() {\n          ${r} rc = getOutputCoords();\n\n          if(${a}) {\n            setOutput(vec4(0));\n          } else {\n            ${s}\n\n            setOutput(vec4(${o}));\n          }\n        }\n      `}}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class rn{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec3"}],this.outputShape=e,this.enableShapeUniforms=Oe(this.outputShape.length);let n="";for(let e=0;e<4;e++){let t="thisRC = rc;";e%2==1&&(t+="thisRC.z += 1;"),e>1&&(t+="thisRC.y += 1;"),n+=`\n        ${t}\n        ${e>0?"if(thisRC.y < rows && thisRC.z < cols){":""}\n          int flatIndex = getFlatIndex(thisRC);\n\n          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);\n          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));\n\n          result[${e}] =\n            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);\n        ${e>0?"}":""}\n      `}var r,a;this.userCode=`\n      ${r=t,a=this.enableShapeUniforms,`\n    ivec3 inputCoordsFromReshapedOutCoords(int index) {\n      ${a?ge(["r","c","d"],"inputShape"):fe(["r","c","d"],r)}\n      return ivec3(r, c, d);\n    }\n  `}\n      ${this.enableShapeUniforms?"\n  int getFlatIndex(ivec3 coords) {\n    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;\n  }\n":xe(e)}\n\n      void main() {\n        ivec3 rc = getOutputCoords();\n\n        vec4 result = vec4(0.);\n\n        ivec3 thisRC;\n        int rows = ${this.enableShapeUniforms?"outShape[1]":e[1]};\n        int cols = ${this.enableShapeUniforms?"outShape[2]":e[2]};\n\n        ${n}\n\n        setOutput(result);\n      }\n    `}}
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class an{constructor(e){this.gpgpu=e,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}acquireTexture(e,t,n){const r=on(t,n),a=un(e,r,n);a in this.freeTextures||(this.freeTextures[a]=[]),a in this.usedTextures||(this.usedTextures[a]=[]);const s=sn(e,r,this.gpgpu.gl,this.gpgpu.textureConfig,n);if(this.freeTextures[a].length>0){this.numFreeTextures--,this.numUsedTextures++,this._numBytesFree-=s,this.log();const e=this.freeTextures[a].shift();return this.usedTextures[a].push(e),e}let o;return r===p.PACKED_2X2_FLOAT32?o=this.gpgpu.createPackedMatrixTexture(e[0],e[1]):r===p.PACKED_2X2_FLOAT16?o=this.gpgpu.createFloat16PackedMatrixTexture(e[0],e[1]):r===p.UNPACKED_FLOAT32?o=this.gpgpu.createFloat32MatrixTexture(e[0],e[1]):r===p.UNPACKED_FLOAT16?o=this.gpgpu.createFloat16MatrixTexture(e[0],e[1]):r===p.PACKED_4X1_UNSIGNED_BYTE&&(o=this.gpgpu.createUnsignedBytesMatrixTexture(e[0],e[1])),this.usedTextures[a].push(o),this.numUsedTextures++,this._numBytesAllocated+=s,this.log(),o}releaseTexture(e,t,n,r){if(null==this.freeTextures)return;const a=on(n,r),o=un(t,a,r);o in this.freeTextures||(this.freeTextures[o]=[]);const i=sn(t,a,this.gpgpu.gl,this.gpgpu.textureConfig,r),u=(0,s.OBj)().get("WEBGL_DELETE_TEXTURE_THRESHOLD");-1!==u&&this._numBytesAllocated>u?(this.gpgpu.deleteMatrixTexture(e),this._numBytesAllocated-=i):(this.freeTextures[o].push(e),this.numFreeTextures++,this._numBytesFree+=i),this.numUsedTextures--;const l=this.usedTextures[o],c=l.indexOf(e);if(c<0)throw new Error("Cannot release a texture that was never provided by this texture manager");l.splice(c,1),this.log()}log(){if(!this.logEnabled)return;const e=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",`${this.numFreeTextures} / ${this.numUsedTextures}`,`(${e})`);const t=this._numBytesFree/this._numBytesAllocated;console.log(`Bytes allocated: ${this._numBytesAllocated}`),console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100*t)}%)`)}get numBytesAllocated(){return this._numBytesAllocated}get numBytesFree(){return this._numBytesFree}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){if(null!=this.freeTextures){for(const e in this.freeTextures)this.freeTextures[e].forEach((e=>{this.gpgpu.deleteMatrixTexture(e)}));for(const e in this.usedTextures)this.usedTextures[e].forEach((e=>{this.gpgpu.deleteMatrixTexture(e)}));this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0}}}function sn(e,t,n,r,a){const s=function(e,t){switch(e){case p.PACKED_2X2_FLOAT32:return Qe(t);case p.PACKED_2X2_FLOAT16:return et(t);case p.UNPACKED_FLOAT32:return je(t);case p.UNPACKED_FLOAT16:return qe(t);case p.PACKED_4X1_UNSIGNED_BYTE:return Ye(t);default:throw new Error(`Unknown physical texture type ${e}`)}}(t,r);let o;if(a){const[t,n]=m(e[0],e[1]);o=t*n}else{const[t,n]=h(e[0],e[1]);o=t*n}const i=function(e,t){const n=e;if(t===n.R32F)return 4;if(t===n.R16F)return 2;if(t===n.RGBA32F)return 16;if(t===e.RGBA)return 16;if(t===n.RGBA16F)return 8;throw new Error(`Unknown internal format ${t}`)}(n,s);return o*i}function on(e,t){if(e===d.UPLOAD)return p.PACKED_2X2_FLOAT32;if(e===d.RENDER||null==e)return function(e){return(0,s.OBj)().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?e?p.PACKED_2X2_FLOAT32:p.UNPACKED_FLOAT32:e?p.PACKED_2X2_FLOAT16:p.UNPACKED_FLOAT16}(t);if(e===d.DOWNLOAD||e===d.PIXELS)return p.PACKED_4X1_UNSIGNED_BYTE;throw new Error(`Unknown logical texture type ${e}`)}function un(e,t,n){return`${e[0]}_${e[1]}_${t}_${n}`}
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class ln{constructor(e,t){this.variableNames=["A"],this.outputShape=e,this.enableShapeUniforms=Oe(this.outputShape.length),this.userCode=`\n      float unaryOperation(float x) {\n        ${t}\n      }\n\n      void main() {\n        float x = getAAtOutCoords();\n        float y = unaryOperation(x);\n\n        setOutput(y);\n      }\n    `}}const cn="return abs(x);";const dn="return x;";class pn{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.enableShapeUniforms=Oe(this.outputShape.length),this.userCode=`\n      vec4 unaryOperation(vec4 x) {\n        ${t}\n      }\n\n      void main() {\n        vec4 x = getAAtOutCoords();\n        vec4 y = unaryOperation(x);\n\n        setOutput(y);\n      }\n    `}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class hn{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=e;const t=e.length,n=tn("rc",t),r=Re(t),a=function(e,t){if(1===e)return"rc";let n="";for(let r=0;r<e;r++)n+=t[r],r<e-1&&(n+=",");return n}(t,n),s=n.slice(-2),o=t<=1?"rc":`vec2(${s.join(",")})`;this.userCode=`\n      void main() {\n        ${r} rc = getOutputCoords();\n        vec4 packedInput = getA(${a});\n\n        setOutput(getChannel(packedInput, ${o}));\n      }\n    `}}
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const fn=s.GDt.ZA,mn={};const gn=(0,s.OBj)().getNumber("CPU_HANDOFF_SIZE_THRESHOLD");class xn extends s.Zuw{constructor(e){if(super(),this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.dataRefCount=new WeakMap,this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.lastGlFlushTime=0,this.warnedAboutMemory=!1,this.pendingDeletes=0,this.disposed=!1,!(0,s.OBj)().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");if(null==e){const e=l((0,s.OBj)().getNumber("WEBGL_VERSION"));this.binaryCache=((t=(0,s.OBj)().getNumber("WEBGL_VERSION"))in mn||(mn[t]={}),mn[t]),this.gpgpu=new ct(e),this.canvas=e.canvas,this.gpgpuCreatedLocally=!0}else this.gpgpu=e,this.binaryCache={},this.gpgpuCreatedLocally=!1,this.canvas=e.gl.canvas;var t;this.textureManager=new an(this.gpgpu),this.numMBBeforeWarning=null==(0,s.OBj)().global.screen?1024:(0,s.OBj)().global.screen.height*(0,s.OBj)().global.screen.width*window.devicePixelRatio*600/1024/1024,this.texData=new s.JLz(this,(0,s.SRH)())}nextDataId(){return xn.nextDataId++}numDataIds(){return this.texData.numDataIds()-this.pendingDeletes}write(e,t,n){if(((0,s.OBj)().getBool("WEBGL_CHECK_NUMERICAL_PROBLEMS")||(0,s.OBj)().getBool("DEBUG"))&&this.checkNumericalProblems(e),"complex64"===n&&null!=e)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");const r={id:this.nextDataId()};return this.texData.set(r,{shape:t,dtype:n,values:e,usage:d.UPLOAD,refCount:1}),r}refCount(e){if(this.texData.has(e)){return this.texData.get(e).refCount}return 0}incRef(e){this.texData.get(e).refCount++}decRef(e){if(this.texData.has(e)){this.texData.get(e).refCount--}}move(e,t,n,r,a){if((0,s.OBj)().getBool("DEBUG")&&this.checkNumericalProblems(t),"complex64"===r)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(e,{shape:n,dtype:r,values:t,usage:d.UPLOAD,refCount:a})}disposeIntermediateTensorInfo(e){this.disposeData(e.dataId)}readSync(e){const t=this.texData.get(e),{values:n,dtype:r,complexTensorInfos:a,slice:o,shape:i,isPacked:u}=t;if(null!=o){let t;t=u?new pn(i,dn):new ln(i,dn);const n=this.runWebGLProgram(t,[{dataId:e,shape:i,dtype:r}],r),a=this.readSync(n.dataId);return this.disposeIntermediateTensorInfo(n),a}if(null!=n)return this.convertAndCacheOnCPU(e);if("string"===r)return n;const l=null!=this.activeTimers;let c,d;if(l&&(c=s.D5U.now()),"complex64"===r){const e=this.readSync(a.real.dataId),t=this.readSync(a.imag.dataId);d=s.Wap.mergeRealAndImagArrays(e,t)}else d=this.getValuesFromTexture(e);return l&&(this.downloadWaitMs+=s.D5U.now()-c),this.convertAndCacheOnCPU(e,d)}async read(e){if(this.pendingRead.has(e)){const t=this.pendingRead.get(e);return new Promise((e=>t.push(e)))}const t=this.texData.get(e),{values:n,shape:r,slice:a,dtype:o,complexTensorInfos:i,isPacked:u}=t;if(null!=a){let t;t=u?new pn(r,dn):new ln(r,dn);const n=this.runWebGLProgram(t,[{dataId:e,shape:r,dtype:o}],o),a=this.read(n.dataId);return this.disposeIntermediateTensorInfo(n),a}if(null!=n)return this.convertAndCacheOnCPU(e);if(!(0,s.OBj)().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&2===(0,s.OBj)().getNumber("WEBGL_VERSION"))throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");let l,c,d=null;if("complex64"!==o&&(0,s.OBj)().get("WEBGL_BUFFER_SUPPORTED")){l=this.decode(e);const t=this.texData.get(l.dataId);d=this.gpgpu.createBufferFromTexture(t.texture,...f(r))}if(this.pendingRead.set(e,[]),"complex64"!==o&&await this.gpgpu.createAndWaitForFence(),"complex64"===o){const e=await Promise.all([this.read(i.real.dataId),this.read(i.imag.dataId)]),t=e[0],n=e[1];c=s.Wap.mergeRealAndImagArrays(t,n)}else if(null==d)c=this.getValuesFromTexture(e);else{const e=s.D5U.sizeFromShape(r);c=this.gpgpu.downloadFloat32MatrixFromBuffer(d,e)}if(null!=l&&this.disposeIntermediateTensorInfo(l),null!=d){const e=this.gpgpu.gl;x(e,(()=>e.deleteBuffer(d)))}const p=this.convertAndCacheOnCPU(e,c),h=this.pendingRead.get(e);return this.pendingRead.delete(e),h.forEach((e=>e(p))),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e)&&(0,s.SRH)().removeDataId(e,this),this.pendingDeletes--),p}bufferSync(e){const t=this.readSync(e.dataId);let n=t;if("string"===e.dtype)try{n=t.map((e=>s.D5U.decodeString(e)))}catch(e){throw new Error("Failed to decode encoded string bytes into utf-8")}return(0,s.f3b)(e.shape,e.dtype,n)}checkNumericalProblems(e){if(null!=e)for(let t=0;t<e.length;t++){const n=e[t];if(!b(n)){if((0,s.OBj)().getBool("WEBGL_RENDER_FLOAT32_CAPABLE"))throw Error(`The value ${n} cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`);throw Error(`The value ${n} cannot be represented on this device.`)}}}getValuesFromTexture(e){const{shape:t,dtype:n,isPacked:r}=this.texData.get(e),a=s.D5U.sizeFromShape(t);if((0,s.OBj)().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){const n=this.decode(e),r=this.texData.get(n.dataId),s=this.gpgpu.downloadMatrixFromPackedTexture(r.texture,...f(t)).subarray(0,a);return this.disposeIntermediateTensorInfo(n),s}const o=(0,s.OBj)().getBool("WEBGL_PACK")&&!0===r,i=o?q(t):t,u=o?new We(i):new Pe(i),l=this.runWebGLProgram(u,[{shape:i,dtype:n,dataId:e}],"float32"),c=this.texData.get(l.dataId),d=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(c.texture,c.texShape[0],c.texShape[1]).subarray(0,a);return this.disposeIntermediateTensorInfo(l),d}timerAvailable(){return(0,s.OBj)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0}async time(e){const t=this.activeTimers,n=[];let r=!1;null==this.programTimersStack?(this.programTimersStack=n,r=!0):this.activeTimers.push(n),this.activeTimers=n,e();const a=s.D5U.flatten(this.activeTimers.map((e=>e.query))).filter((e=>null!=e)),o=s.D5U.flatten(this.activeTimers.map((e=>e.name))).filter((e=>null!=e));this.activeTimers=t,r&&(this.programTimersStack=null);const i={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null};if((0,s.OBj)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0){const e=await Promise.all(a);i.kernelMs=s.D5U.sum(e),i.getExtraProfileInfo=()=>e.map(((e,t)=>({name:o[t],ms:e}))).map((e=>`${e.name}: ${e.ms}`)).join(", ")}else i.kernelMs={error:"WebGL query timers are not supported in this environment."};return this.uploadWaitMs=0,this.downloadWaitMs=0,i}memory(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU,numBytesInGPUAllocated:this.textureManager.numBytesAllocated,numBytesInGPUFree:this.textureManager.numBytesFree}}startTimer(){return(0,s.OBj)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:s.D5U.now(),endMs:null}}endTimer(e){return(0,s.OBj)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),e):(e.endMs=s.D5U.now(),e)}async getQueryTime(e){if((0,s.OBj)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0)return this.gpgpu.waitForQueryAndGetTime(e);const t=e;return t.endMs-t.startMs}disposeData(e,t=!1){if(this.pendingDisposal.has(e))return!1;if(!this.texData.has(e))return!0;if(t?this.texData.get(e).refCount=0:this.texData.get(e).refCount--,!t&&this.texData.get(e).refCount>0)return!1;if(this.pendingRead.has(e))return this.pendingDisposal.add(e),this.pendingDeletes++,!1;this.releaseGPUData(e);const{complexTensorInfos:n}=this.texData.get(e);return null!=n&&(this.disposeData(n.real.dataId,t),this.disposeData(n.imag.dataId,t)),this.texData.delete(e),!0}releaseGPUData(e){const{texture:t,dtype:n,texShape:r,usage:a,isPacked:s,slice:o}=this.texData.get(e),i=o&&o.origDataId||e,u=this.dataRefCount.get(i);u>1?this.dataRefCount.set(i,u-1):(this.dataRefCount.delete(i),null!=t&&(this.numBytesInGPU-=this.computeBytes(r,n),this.textureManager.releaseTexture(t,r,a,s)));const l=this.texData.get(e);l.texture=null,l.texShape=null,l.isPacked=!1,l.slice=null}getTexture(e){return this.uploadToGPU(e),this.texData.get(e).texture}getDataInfo(e){return this.texData.get(e)}shouldExecuteOnCPU(e,t=gn){return(0,s.OBj)().getBool("WEBGL_CPU_FORWARD")&&e.every((e=>null==this.texData.get(e.dataId).texture&&s.D5U.sizeFromShape(e.shape)<t))}getGPGPUContext(){return this.gpgpu}where(e){s.Wap.warn("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");const t=e.dataSync();return fn(e.shape,t)}packedUnaryOp(e,t,n){const r=new pn(e.shape,t),a=this.compileAndRun(r,[e],n);return(0,s.SRH)().makeTensorFromDataId(a.dataId,a.shape,a.dtype)}abs(e){if(this.shouldExecuteOnCPU([e])&&"complex64"!==e.dtype){const t=Wt(this.texData.get(e.dataId).values);return this.makeOutput(e.shape,e.dtype,t)}if((0,s.OBj)().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,cn,e.dtype);const t=new ln(e.shape,cn),n=this.compileAndRun(t,[e]);return(0,s.SRH)().makeTensorFromDataId(n.dataId,n.shape,n.dtype)}makeTensorInfo(e,t,n){let r;if("string"===t&&null!=n&&n.length>0&&s.D5U.isString(n[0])){const a=n.map((e=>s.D5U.encodeString(e)));r=this.write(a,e,t)}else r=this.write(n,e,t);return this.texData.get(r).usage=null,{dataId:r,shape:e,dtype:t}}makeOutput(e,t,n){const{dataId:r}=this.makeTensorInfo(e,t,n);return(0,s.SRH)().makeTensorFromDataId(r,e,t,this)}unpackTensor(e){const t=new hn(e.shape);return this.runWebGLProgram(t,[e],e.dtype)}packTensor(e){const t=new nn(e.shape);return this.runWebGLProgram(t,[e],e.dtype,null,!0)}packedReshape(e,t){const n=[j(e.shape),...X(e.shape)],r={dtype:e.dtype,shape:n,dataId:e.dataId},a=[j(t),...X(t)],s=new rn(a,n),o=[n],i=this.runWebGLProgram(s,[r],e.dtype,o,!0);return{dataId:i.dataId,shape:t,dtype:i.dtype}}decode(e){const t=this.texData.get(e),{isPacked:n,shape:r,dtype:a}=t,s=q(r);let o;const i=f(s);o=n?new Ue(s):new Me(s);const u=[i];return{dtype:a,shape:r,dataId:this.runWebGLProgram(o,[{shape:s,dtype:a,dataId:e}],a,u,!0).dataId}}runWebGLProgram(e,t,n,r,a=!1){const o=this.makeTensorInfo(e.outputShape,n),i=this.texData.get(o.dataId);if(e.packedOutput&&(i.isPacked=!0),e.outPackingScheme===c.DENSE){const t=f(e.outputShape);i.texShape=t.map((e=>2*e))}if(null!=e.outTexUsage&&(i.usage=e.outTexUsage),0===s.D5U.sizeFromShape(o.shape))return i.values=s.D5U.getTypedArrayFromDType(o.dtype,0),o;const u=[],l=t.map((t=>{if("complex64"===t.dtype)throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");let n=this.texData.get(t.dataId);if(null==n.texture){if(!e.packedInputs&&s.D5U.sizeFromShape(t.shape)<=(0,s.OBj)().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:t.shape,texData:null,isUniform:!0,uniformValues:n.values};e.packedInputs&&(n.isPacked=!0,n.shape=t.shape)}else if(!!n.isPacked!=!!e.packedInputs)t=n.isPacked?this.unpackTensor(t):this.packTensor(t),u.push(t),n=this.texData.get(t.dataId);else if(n.isPacked&&!Z(n.shape,t.shape)){const e=t,r=t.shape;t.shape=n.shape,t=this.packedReshape(t,r),u.push(t),n=this.texData.get(t.dataId),e.shape=r}return this.uploadToGPU(t.dataId),{shape:t.shape,texData:n,isUniform:!1}}));this.uploadToGPU(o.dataId);const d={shape:o.shape,texData:i,isUniform:!1},p=function(e,t,n){let r="";t.concat(n).forEach((t=>{const a=null!=t.texData&&null!=t.texData.slice&&t.texData.slice.flatOffset>0;if(e.enableShapeUniforms&&!t.isUniform){const o=t.texData.texShape,{useSqueezeShape:i,uniformShape:u,keptDims:l}=De(e.packedInputs,t.shape,o);let c="",d="",p="";if(1===u.length&&e.packedInputs){const e=[Math.ceil(o[0]/2),Math.ceil(o[1]/2)];c=`${e[0]>1}_${e[1]>1}`}else if(2!==u.length||e.packedInputs){if(u.length>2&&!e.packedInputs){const e=s.D5U.computeStrides(u);p=`${e[0]===o[1]}_${e[e.length-1]===o[1]}`}}else d=`${u[0]>1}_${u[1]>1}`;const h=t.shape.length,f=2===u.length&&s.D5U.arraysEqual(t.shape,o),m=1===s.D5U.sizeFromShape(t.shape),g=s.Wap.getBroadcastDims(t.shape,n.shape),x=!e.packedInputs&&h===n.shape.length&&s.D5U.arraysEqual(o,n.texData.texShape),b=e.packedInputs||u.length>2?"":`${o[0]>1}_${o[1]>1}`;r+=`${h}_${x}_${i?l:""}_${u.length}_${m}_${g}_${f}_${c}_${d}_${p}_${b}_${a}`}else{const e=t.isUniform?"uniform":t.texData.texShape;r+=`${t.shape}_${e}_${a}`}}));const a=e.userCode;let o=e.constructor.name;return o+="_"+r+"_"+a+`${(0,s.OBj)().getNumber("WEBGL_VERSION")}`,o}(e,l,d),h=this.getAndSaveBinary(p,(()=>
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n,r){const a=n.map(((e,n)=>{const r={logicalShape:e.shape,texShape:e.isUniform?null:e.texData.texShape,isUniform:e.isUniform,isPacked:!e.isUniform&&e.texData.isPacked,flatOffset:null};return null!=e.texData&&null!=e.texData.slice&&e.texData.slice.flatOffset>0&&(r.flatOffset=e.texData.slice.flatOffset),{name:t.variableNames[n],shapeInfo:r}})),o=a.map((e=>e.shapeInfo)),i={logicalShape:r.shape,texShape:r.texData.texShape,isUniform:!1,isPacked:r.texData.isPacked,flatOffset:null},u=ke(a,i,t),l=e.createProgram(u);let c=null;const d=e.getUniformLocation(l,"NAN",!1);1===(0,s.OBj)().getNumber("WEBGL_VERSION")&&(c=e.getUniformLocation(l,"INFINITY",!1));const p=!1,h={},f={},m={};for(let n=0;n<t.variableNames.length;n++){const r=t.variableNames[n];h[r]=e.getUniformLocation(l,r,p),h[`offset${r}`]=e.getUniformLocation(l,`offset${r}`,p),t.enableShapeUniforms&&(f[`${r}Shape`]=e.getUniformLocation(l,`${r}Shape`,p),m[`${r}TexShape`]=e.getUniformLocation(l,`${r}TexShape`,p))}let g,x,b;t.enableShapeUniforms&&(g=e.getUniformLocation(l,"outShape",p),b=e.getUniformLocation(l,"outShapeStrides",p),x=e.getUniformLocation(l,"outTexShape",p));const v=[];return t.customUniforms&&t.customUniforms.forEach(((t,n)=>{v[n]=e.getUniformLocation(l,t.name,p)})),{program:t,source:u,webGLProgram:l,uniformLocations:h,customUniformLocations:v,inShapeInfos:o,outShapeInfo:i,infLoc:c,nanLoc:d,inShapesLocations:f,inTexShapesLocations:m,outShapeLocation:g,outShapeStridesLocation:b,outTexShapeLocation:x}}(this.gpgpu,e,l,d))),m=null!=this.activeTimers;let g;m&&(g=this.startTimer()),function(e,t,n,r,a){t.program.enableShapeUniforms||(_e(t.inShapeInfos,n),_e([t.outShapeInfo],[r]));const o=r.texData.texture,i=r.texData.texShape;r.texData.isPacked?e.setOutputPackedMatrixTexture(o,i[0],i[1]):e.setOutputMatrixTexture(o,i[0],i[1]),e.setProgram(t.webGLProgram),1===(0,s.OBj)().getNumber("WEBGL_VERSION")&&null!==t.infLoc&&e.gl.uniform1f(t.infLoc,1/0),null!==t.nanLoc&&e.gl.uniform1f(t.nanLoc,NaN),n.forEach(((n,r)=>{const a=t.program.variableNames[r],o=t.uniformLocations[a],i=t.uniformLocations[`offset${a}`],u=t.inShapesLocations[`${a}Shape`],l=t.inTexShapesLocations[`${a}TexShape`];if(u){const{uniformShape:r}=De(t.program.packedInputs,n.shape,n.texData.texShape);switch(r.length){case 1:e.gl.uniform1iv(u,new Int32Array(r));break;case 2:e.gl.uniform2iv(u,new Int32Array(r));break;case 3:e.gl.uniform3iv(u,new Int32Array(r));break;case 4:e.gl.uniform4iv(u,new Int32Array(r))}}if(l&&e.gl.uniform2i(l,n.texData.texShape[0],n.texData.texShape[1]),null!=o)if(n.isUniform)if(s.D5U.sizeFromShape(n.shape)<2)e.gl.uniform1f(o,n.uniformValues[0]);else{let t=n.uniformValues;t instanceof Float32Array||(t=new Float32Array(t)),e.gl.uniform1fv(o,t)}else null!=n.texData.slice&&null!=i&&e.gl.uniform1i(i,n.texData.slice.flatOffset),e.setInputMatrixTexture(n.texData.texture,o,r)}));const u=t.outShapeLocation;if(u)switch(r.shape.length){case 1:e.gl.uniform1iv(u,new Int32Array(r.shape));break;case 2:e.gl.uniform2iv(u,new Int32Array(r.shape));break;case 3:e.gl.uniform3iv(u,new Int32Array(r.shape));break;case 4:e.gl.uniform4iv(u,new Int32Array(r.shape))}if(t.outShapeStridesLocation){const n=s.D5U.computeStrides(r.shape);switch(r.shape.length){case 2:e.gl.uniform1iv(t.outShapeStridesLocation,new Int32Array(n));break;case 3:e.gl.uniform2iv(t.outShapeStridesLocation,new Int32Array(n));break;case 4:e.gl.uniform3iv(t.outShapeStridesLocation,new Int32Array(n))}}t.outTexShapeLocation&&e.gl.uniform2i(t.outTexShapeLocation,r.texData.texShape[0],r.texData.texShape[1]),t.program.customUniforms&&a&&t.program.customUniforms.forEach(((n,r)=>{const s=t.customUniformLocations[r],o=a[r];if("float"===n.type)e.gl.uniform1fv(s,o);else if("vec2"===n.type)e.gl.uniform2fv(s,o);else if("vec3"===n.type)e.gl.uniform3fv(s,o);else if("vec4"===n.type)e.gl.uniform4fv(s,o);else if("int"===n.type)e.gl.uniform1iv(s,o);else if("ivec2"===n.type)e.gl.uniform2iv(s,o);else if("ivec3"===n.type)e.gl.uniform3iv(s,o);else{if("ivec4"!==n.type)throw Error(`uniform type ${n.type} is not supported yet.`);e.gl.uniform4iv(s,o)}})),e.executeProgram()}(this.gpgpu,h,l,d,r),u.forEach((e=>this.disposeIntermediateTensorInfo(e))),m&&(g=this.endTimer(g),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(g)}));const x=(0,s.OBj)().get("WEBGL_FLUSH_THRESHOLD");if(x>0){const e=s.D5U.now();e-this.lastGlFlushTime>x&&(this.gpgpu.gl.flush(),this.lastGlFlushTime=e)}if(!(0,s.OBj)().getBool("WEBGL_LAZILY_UNPACK")&&i.isPacked&&!1===a){const e=this.unpackTensor(o);return this.disposeIntermediateTensorInfo(o),e}return o}compileAndRun(e,t,n,r,a=!1){n=n||t[0].dtype;return this.runWebGLProgram(e,t,n,r,a)}getAndSaveBinary(e,t){return e in this.binaryCache||(this.binaryCache[e]=t()),this.binaryCache[e]}getTextureManager(){return this.textureManager}dispose(){if(!this.disposed){if(!(0,s.OBj)().getBool("IS_TEST")){Object.keys(this.binaryCache).forEach((e=>{this.gpgpu.deleteProgram(this.binaryCache[e].webGLProgram),delete this.binaryCache[e]}))}this.textureManager.dispose(),null!=this.canvas&&"undefined"!=typeof HTMLCanvasElement&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0}}floatPrecision(){return null==this.floatPrecisionValue&&(this.floatPrecisionValue=(0,s.lub)((()=>{if(!(0,s.OBj)().get("WEBGL_RENDER_FLOAT32_ENABLED")){const e=(0,s.OBj)().getBool("DEBUG");(0,s.OBj)().set("DEBUG",!1);const t=this.abs((0,s.iD$)(1e-8)).dataSync()[0];if((0,s.OBj)().set("DEBUG",e),t>0)return 32}return 16}))),this.floatPrecisionValue}epsilon(){return 32===this.floatPrecision()?1e-7:1e-4}uploadToGPU(e){const t=this.texData.get(e),{shape:n,dtype:r,values:a,texture:o,usage:i,isPacked:u}=t;if(null!=o)return;const l=null!=this.activeTimers;let c;l&&(c=s.D5U.now());let p=t.texShape;if(null==p&&(p=K(n,u),t.texShape=p),null!=a){const e=q(n);let o,i=p[1],h=p[0];const f=a instanceof Uint8Array;u?([i,h]=m(p[0],p[1]),o=new Le(e,f)):o=new Be(e,f);const g=this.makeTensorInfo([h,i],r);this.texData.get(g.dataId).usage=f?d.PIXELS:d.UPLOAD,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(g.dataId),i,h,a);const x=[[h,i]],b=!0,v=this.runWebGLProgram(o,[g],r,x,b),k=this.texData.get(v.dataId);t.texture=k.texture,t.texShape=k.texShape,t.isPacked=k.isPacked,t.usage=k.usage,this.disposeIntermediateTensorInfo(g),this.texData.delete(v.dataId),t.values=null,l&&(this.uploadWaitMs+=s.D5U.now()-c)}else{const e=this.acquireTexture(p,i,r,u);t.texture=e}}convertAndCacheOnCPU(e,t){const n=this.texData.get(e),{dtype:r}=n;return this.releaseGPUData(e),null!=t&&(n.values=function(e,t){if("float32"===t||"complex64"===t)return e;if("int32"===t||"bool"===t){const n="int32"===t?new Int32Array(e.length):new Uint8Array(e.length);for(let t=0;t<n.length;++t)n[t]=Math.round(e[t]);return n}throw new Error(`Unknown dtype ${t}`)}(t,r)),n.values}acquireTexture(e,t,n,r){if(this.numBytesInGPU+=this.computeBytes(e,n),!this.warnedAboutMemory&&this.numBytesInGPU>1024*this.numMBBeforeWarning*1024){const e=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn(`High memory usage in GPU: ${e} MB, most likely due to a memory leak`)}return this.textureManager.acquireTexture(e,t,r)}computeBytes(e,t){return e[0]*e[1]*s.D5U.bytesPerElement(t)}}xn.nextDataId=0;
/** @license See the LICENSE file. */
const bn="3.9.0";
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function vn(){(0,s.OBj)().set("WEBGL_FORCE_F16_TEXTURES",!0)}
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
s.C2$.isBrowser()&&(0,s.jqO)("webgl",(()=>new xn),2);const kn={forceHalfFloat:vn};class yn{constructor(e,t,n){this.variableNames=["A","B"],this.outputShape=s.Wap.assertAndGetBroadcastShape(t,n),this.enableShapeUniforms=Oe(this.outputShape.length),this.userCode=`\n      float binaryOperation(float a, float b) {\n        ${e}\n      }\n\n      void main() {\n        float a = getAAtOutCoords();\n        float b = getBAtOutCoords();\n        setOutput(binaryOperation(a, b));\n      }\n    `}}class In{constructor(e,t,n,r=!1){this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=s.Wap.assertAndGetBroadcastShape(t,n);const a=this.outputShape.length;this.enableShapeUniforms=Oe(a);let o="";if(r)if(0===a||1===s.D5U.sizeFromShape(this.outputShape))o="\n          result.y = 0.;\n          result.z = 0.;\n          result.w = 0.;\n        ";else{if(o=`\n          ${Re(a)} coords = getOutputCoords();\n        `,1===a)this.enableShapeUniforms?o+="\n            result.y = (coords + 1) >= outShape ? 0. : result.y;\n            result.z = 0.;\n            result.w = 0.;\n          ":o+=`\n            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;\n            result.z = 0.;\n            result.w = 0.;\n          `;else{const e=tn("coords",a);this.enableShapeUniforms?o+=`\n            bool nextRowOutOfBounds =\n              (${e[a-2]} + 1) >= outShape[${a} - 2];\n            bool nextColOutOfBounds =\n              (${e[a-1]} + 1) >= outShape[${a} - 1];\n            result.y = nextColOutOfBounds ? 0. : result.y;\n            result.z = nextRowOutOfBounds ? 0. : result.z;\n            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;\n          `:o+=`\n            bool nextRowOutOfBounds =\n              (${e[a-2]} + 1) >= ${this.outputShape[a-2]};\n            bool nextColOutOfBounds =\n              (${e[a-1]} + 1) >= ${this.outputShape[a-1]};\n            result.y = nextColOutOfBounds ? 0. : result.y;\n            result.z = nextRowOutOfBounds ? 0. : result.z;\n            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;\n          `}}this.userCode=`\n      vec4 binaryOperation(vec4 a, vec4 b) {\n        ${e}\n      }\n\n      void main() {\n        vec4 a = getAAtOutCoords();\n        vec4 b = getBAtOutCoords();\n\n        vec4 result = binaryOperation(a, b);\n        ${o}\n\n        setOutput(result);\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function wn(e){const{inputs:t,backend:n}=e,{x:r}=t;return n.incRef(r.dataId),{dataId:r.dataId,shape:r.shape,dtype:r.dtype}}const Cn={kernelName:s.iJz,backendName:"webgl",kernelFunc:wn};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Sn(e){const{inputs:t,backend:n}=e,{real:r,imag:a}=t,s=n.makeTensorInfo(r.shape,"complex64"),o=n.texData.get(s.dataId),i=wn({inputs:{x:r},backend:n}),u=wn({inputs:{x:a},backend:n});return o.complexTensorInfos={real:i,imag:u},s}const $n={kernelName:s.Zz9,backendName:"webgl",kernelFunc:Sn},Tn="return (a < 0.) ? b * a : a;",En="\n  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));\n  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);\n";const Nn={kernelName:s.J$2,backendName:"webgl",kernelFunc:function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{alpha:o}=r,i=n.makeTensorInfo([],"float32",s.D5U.createScalarValue(o,"float32")),u=(0,s.OBj)().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new In(En,a.shape,i.shape):new yn(Tn,a.shape,i.shape),l=n.runWebGLProgram(u,[a,i],a.dtype);return n.disposeIntermediateTensorInfo(i),l}},Rn="return (a < 0.) ? b * a : a;",Dn="\n  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));\n  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);\n";const An={kernelName:s.o0g,backendName:"webgl",kernelFunc:function(e){const{inputs:t,backend:n}=e,{x:r,alpha:a}=t,o=(0,s.OBj)().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new In(Dn,r.shape,a.shape):new yn(Rn,r.shape,a.shape);return n.runWebGLProgram(o,[r,a],r.dtype)}};function Fn({opSnippet:e,packedOpSnippet:t,cpuKernelImpl:n,dtype:r}){return({inputs:a,backend:o})=>{const{x:i}=a,u=o,l=r||i.dtype;if(u.shouldExecuteOnCPU([i])&&null!=n){const e=u.texData.get(i.dataId),t=n(e.values,l);return u.makeTensorInfo(i.shape,l,t)}let c;return c=(0,s.OBj)().getBool("WEBGL_PACK_UNARY_OPERATIONS")&&null!=t?new pn(i.shape,t):new ln(i.shape,e),u.runWebGLProgram(c,[i],l)}}function _n({opSnippet:e,packedOpSnippet:t,checkOutOfBounds:n=!1,supportsComplex:r=!1,cpuKernelImpl:a,dtype:o}){return({inputs:i,backend:u})=>{const{a:l,b:c}=i,d=u;if(r&&"complex64"===l.dtype){const t=d.texData.get(l.dataId),n=d.texData.get(c.dataId),[r,a]=[[t.complexTensorInfos.real,n.complexTensorInfos.real],[t.complexTensorInfos.imag,n.complexTensorInfos.imag]].map((t=>{const[n,r]=t,a={dataId:n.dataId,dtype:n.dtype,shape:l.shape},o={dataId:r.dataId,dtype:r.dtype,shape:c.shape},i=new yn(e,l.shape,c.shape);return d.runWebGLProgram(i,[a,o],(0,s.x8V)(n.dtype,r.dtype))})),o=Sn({inputs:{real:r,imag:a},backend:d});return d.disposeIntermediateTensorInfo(r),d.disposeIntermediateTensorInfo(a),o}const p=o||(0,s.x8V)(l.dtype,c.dtype);if(("string"===l.dtype||"string"===c.dtype||d.shouldExecuteOnCPU([l,c]))&&null!=a){const e=d.texData.get(l.dataId).values,t=d.texData.get(c.dataId).values,n="string"===l.dtype?s.Wap.fromUint8ToStringArray(e):e,r="string"===l.dtype?s.Wap.fromUint8ToStringArray(t):t,[o,i]=a(l.shape,c.shape,n,r,p),u=d.makeTensorInfo(i,p);return d.texData.get(u.dataId).values=o,u}let h;return h=(0,s.OBj)().getBool("WEBGL_PACK_BINARY_OPERATIONS")&&null!=t?new In(t,l.shape,c.shape,n):new yn(e,l.shape,c.shape),d.runWebGLProgram(h,[l,c],p)}}function On(e,t=!1){if("linear"===e)return"return x;";if("relu"===e)return t?"\n  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n":"if (isnan(x)) return x;\n  return (x < 0.0) ? 0.0 : x;\n";if("elu"===e)return t?"\n  vec4 result;\n\n  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);\n  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);\n  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);\n  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);\n\n  return result;\n":"return (x >= 0.0) ? x : (exp(x) - 1.0);";if("relu6"===e)return t?"\n  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n":"if (isnan(x)) return x;\n  return (x < 0.0) ? 0.0 : min(6.0, x);\n";if("prelu"===e)return t?Dn:Rn;if("leakyrelu"===e)return t?En:Tn;if("sigmoid"===e)return"return 1.0 / (1.0 + exp(-1.0 * x));";throw new Error(`Activation ${e} has not been implemented for the WebGL backend.`)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Mn{constructor(e,t,n,r=!1,a=!1,s=!1,o=null,i=!1,u=!1){this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n,this.enableShapeUniforms=Oe(this.outputShape.length);const l=r?e[1]:e[2],c=Math.ceil(l/2),d=r?"i * 2, rc.y":"rc.y, i * 2",p=a?"rc.z, i * 2":"i * 2, rc.z",h=r?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],f=a?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"];let m="",g="";o&&(m=i?`vec4 activation(vec4 a) {\n          vec4 b = getPreluActivationWeightsAtOutCoords();\n          ${o}\n        }`:u?`vec4 activation(vec4 a) {\n          vec4 b = getLeakyreluAlphaAtOutCoords();\n          ${o}\n        }`:`vec4 activation(vec4 x) {\n          ${o}\n        }`,g="result = activation(result);");const x=s?"result += getBiasAtOutCoords();":"";s&&this.variableNames.push("bias"),i&&this.variableNames.push("preluActivationWeights"),u&&this.variableNames.push("leakyreluAlpha");let b="rc.x",v="rc.x";e[0]<t[0]?b=`int(min(float(rc.x), ${e[0]-1}.))`:t[0]<e[0]&&(v=`int(min(float(rc.x), ${t[0]-1}.))`),this.userCode=`\n      ${m}\n      // Don't use uniform for sharedDimensionPacked for performance.\n      const float sharedDimension = ${c}.0;\n\n      vec4 dot2x2ARowBCol(ivec3 rc) {\n        vec4 result = vec4(0);\n        for (int i = 0; i < ${c}; i++) {\n          int batchA = ${b};\n          int batchB = ${v};\n          vec4 a = getMatrixA(batchA, ${d});\n          vec4 b = getMatrixB(batchB, ${p});\n\n          // These swizzled products need to be separately added.\n          // See: https://github.com/tensorflow/tfjs/issues/1735\n          result += (${h[0]} * ${f[0]});\n          result += (${h[1]} * ${f[1]});\n        }\n        return result;\n      }\n\n      void main() {\n        ivec3 rc = getOutputCoords();\n        vec4 result = dot2x2ARowBCol(rc);\n\n        ${x}\n\n        ${g}\n\n        setOutput(result);\n      }\n    `}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Un="return areal * breal - aimag * bimag;",Pn="return areal * bimag + aimag * breal;";class Wn{constructor(e,t,n){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=s.Wap.assertAndGetBroadcastShape(t,n),this.userCode=`\n      float binaryOpComplex(\n          float areal, float aimag, float breal, float bimag) {\n        ${e}\n      }\n\n      void main() {\n        float areal = getARealAtOutCoords();\n        float aimag = getAImagAtOutCoords();\n        float breal = getBRealAtOutCoords();\n        float bimag = getBImagAtOutCoords();\n        setOutput(binaryOpComplex(areal, aimag, breal, bimag));\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Bn="return a * b;";function Ln(e){const{inputs:t,backend:n}=e,{a:r,b:a}=t,o=s.Wap.upcastType(r.dtype,a.dtype);if("complex64"===r.dtype){const e=n.texData.get(r.dataId),t=n.texData.get(a.dataId),s=new Wn(Un,r.shape,a.shape),o=new Wn(Pn,r.shape,a.shape),i=[{dataId:e.complexTensorInfos.real.dataId,dtype:e.complexTensorInfos.real.dtype,shape:r.shape},{dataId:e.complexTensorInfos.imag.dataId,dtype:e.complexTensorInfos.imag.dtype,shape:r.shape},{dataId:t.complexTensorInfos.real.dataId,dtype:t.complexTensorInfos.real.dtype,shape:a.shape},{dataId:t.complexTensorInfos.imag.dataId,dtype:t.complexTensorInfos.imag.dtype,shape:a.shape}],u=n.runWebGLProgram(s,i,"float32"),l=n.runWebGLProgram(o,i,"float32"),c=Sn({inputs:{real:u,imag:l},backend:n});return n.disposeIntermediateTensorInfo(u),n.disposeIntermediateTensorInfo(l),c}if(n.shouldExecuteOnCPU([r,a])){const e=n.texData.get(r.dataId),t=n.texData.get(a.dataId),[s,i]=At(r.shape,a.shape,e.values,t.values,o),u=n.makeTensorInfo(i,o);return n.texData.get(u.dataId).values=s,u}let i;return i=(0,s.OBj)().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new In(Bn,r.shape,a.shape):new yn(Bn,r.shape,a.shape),n.runWebGLProgram(i,[r,a],o)}const zn={kernelName:s.wYn,backendName:"webgl",kernelFunc:Ln};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Vn(e){const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{shape:o}=r,i=n,u=s.D5U.sizeFromShape(a.shape),l=s.D5U.inferFromImplicitShape(o,u),c=s.D5U.sizeFromShape(l);s.D5U.assert(u===c,(()=>`The new shape (${l}) has ${c} elements and the old shape (${a.shape}) has ${u} elements. The new shape and old shape must have the same number of elements.`));const d=i.texData.get(a.dataId);return!d.isPacked||Z(a.shape,l)||null!==d.texture&&Z(d.shape,l)?(i.incRef(a.dataId),{dataId:a.dataId,shape:l,dtype:a.dtype}):
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n){const r=[j(e.shape),...X(e.shape)],a={dtype:e.dtype,shape:r,dataId:e.dataId},s=[j(t),...X(t)],o=new rn(s,r),i=[r],u=n.runWebGLProgram(o,[a],e.dtype,i,!0);return{dataId:u.dataId,shape:t,dtype:u.dtype}}(a,l,i)}const Gn={kernelName:s.HZH,backendName:"webgl",kernelFunc:Vn};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Hn{constructor(e,t){this.variableNames=["x"];const{windowSize:n,batchSize:r,inSize:a,outSize:o}=e;this.outputShape=[r,o];const i=4*Math.floor(n/4),u=n%4;let l="sumValue += dot(values, ones);";if(null!=t){const e=1/t;l=`sumValue += dot(values * ${s.D5U.isInt(e)?e.toPrecision(2):e}, ones);`}let c="";a%n>0&&(c=`\n        if (inIdx < 0 || inIdx >= ${a}) {\n          return 0.0;\n        }\n      `),this.userCode=`\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float getValue(int batch, int inIdx) {\n        ${c}\n        return getX(batch, inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * ${n};\n\n        float sumValue = 0.0;\n\n        for (int i = 0; i < ${i}; i += 4) {\n          int inIdx = inOffset + i;\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          ${l}\n        }\n\n        int inIdx = inOffset + ${i};\n        if (${1===u}) {\n          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);\n\n          ${l}\n        } else if (${2===u}) {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1), 0.0, 0.0);\n\n          ${l}\n        } else if (${3===u}) {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2), 0.0);\n\n          ${l}\n        }\n        setOutput(sumValue);\n      }\n    `}}
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class jn{constructor(e,t){this.variableNames=["x"];const{windowSize:n,batchSize:r,inSize:a,outSize:s}=e;this.outputShape=[r,s];let o="0.0",i="";"prod"===t?o="1.0":"min"===t?(o="1.0 / 1e-20",i="min"):"max"===t&&(o="-1.0 / 1e-20",i="max");let u=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;"sum"===t?u="sumValue":"prod"===t?u="prodValue":"all"===t?u="allValue":"any"===t&&(u="anyValue");const l=4*Math.floor(n/4),c=n%4;let d=`\n      if (${"sum"===t}) {\n        sumValue += dot(values, ones);\n      } else if (${"prod"===t}) {\n        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);\n        prodValue *= tmp[0] * tmp[1];\n      } else {\n        minMaxValue = ${i}(values, minMaxValue);\n        if (${"min"===t} || ${"max"===t}) {\n          minMaxValue = ${i}(values, minMaxValue);\n          bvec4 isNaN = isnan(values);\n          if (isNaN.r || isNaN.g || isNaN.b || isNaN.a) {\n            minMaxValue = vec4(NAN);\n          }\n        }\n      }\n    `,p="vec4";"all"===t?(o="1.0",d="\n        bool reducedAllValue = all(values);\n        float floatedReducedAllValue = float(reducedAllValue);\n        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);\n      ",p="bvec4"):"any"===t&&(o="0.0",d="\n        bool reducedAnyValue = any(values);\n        float floatedReducedAnyValue = float(reducedAnyValue);\n        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);\n      ",p="bvec4");let h="";a%n>0&&(h=`\n        if (inIdx < 0 || inIdx >= ${a}) {\n          return initializationValue;\n        }\n      `),this.userCode=`\n      const float initializationValue = ${o};\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float getValue(int batch, int inIdx) {\n        ${h}\n        return getX(batch, inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * ${n};\n\n        vec4 minMaxValue = vec4(${o});\n        float prodValue = 1.0;\n        float sumValue = 0.0;\n        float allValue = 1.0;\n        float anyValue = 0.0;\n\n        for (int i = 0; i < ${l}; i += 4) {\n          int inIdx = inOffset + i;\n          ${p} values = ${p}(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          ${d}\n        }\n\n        int inIdx = inOffset + ${l};\n        if (${1===c}) {\n          ${p} values = ${p}(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n\n          ${d}\n        } else if (${2===c}) {\n          ${p} values = ${p}(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n\n          ${d}\n        } else if (${3===c}) {\n          ${p} values = ${p}(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n\n          ${d}\n        }\n        setOutput(${u});\n      }\n    `}}function Xn(e,t,n,r){const a=
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const t=[];for(;0===t.length||1!==t[t.length-1].outSize;){const n=t.length?t[t.length-1].outSize:e[1],r=s.Wap.computeOptimalWindowSize(n);t.push({inSize:n,windowSize:r,outSize:Math.ceil(n/r)})}return t}(e.shape);let o=e;for(let s=0;s<a.length;s++){const{inSize:i,windowSize:u,outSize:l}=a[s];let c,d;c="mean"===n?0===s?new Hn({windowSize:u,inSize:i,batchSize:e.shape[0],outSize:l},i):new Hn({windowSize:u,inSize:i,batchSize:e.shape[0],outSize:l}):new jn({windowSize:u,inSize:i,batchSize:e.shape[0],outSize:l},n),d=o,o=r.runWebGLProgram(c,[o],t),d.dataId!==e.dataId&&r.disposeIntermediateTensorInfo(d)}return o}
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class qn{constructor(e,t){this.variableNames=["A"];const n=new Array(e.length);for(let r=0;r<n.length;r++)n[r]=e[t[r]];this.outputShape=n,this.rank=n.length;const r=Re(this.rank),a=function(e){const t=e.length;if(t>6)throw Error(`Transpose for rank ${t} is not yet supported`);const n=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],r=new Array(t);for(let t=0;t<e.length;t++)r[e[t]]=n[t];return r.join()}(t);this.userCode=`\n    void main() {\n      ${r} resRC = getOutputCoords();\n      setOutput(getA(${a}));\n    }\n    `}}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Kn{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;const n=new Array(e.length);for(let r=0;r<n.length;r++)n[r]=e[t[r]];if(this.outputShape=n,this.rank=n.length,this.rank>6)throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);const r=Re(this.rank),a=en("rc",this.rank),s=new Array(this.rank);for(let e=0;e<t.length;e++)s[t[e]]=a[e];const o=`vec2(${s.slice(-2).join()})`,i=`++${a[this.rank-1]} < ${n[this.rank-1]}`,u=`getChannel(getA(${s.join()}), ${o})`;this.userCode=`\n    void main() {\n      ${r} rc = getOutputCoords();\n      vec4 result = vec4(0.);\n      result[0] = ${u};\n      if(${i}) {\n        result[1] = ${u};\n      }\n      --${a[this.rank-1]};\n      if(++${a[this.rank-2]} < ${n[this.rank-2]}) {\n        result[2] = ${u};\n        if(${i}) {\n          result[3] = ${u};\n        }\n      }\n      setOutput(result);\n    }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Yn(e,t,n){const r=(0,s.OBj)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Kn(e.shape,t):new qn(e.shape,t);return n.runWebGLProgram(r,[e],e.dtype)}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Zn(e){const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{axis:o,keepDims:i}=r;
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
return function(e,t,n,r){const a=t,o=e.shape.length,i=s.D5U.parseAxisParam(a,e.shape);let u=i;const l=s.Wap.getAxesPermutation(u,o),c=null!=l;let d=e;c&&(d=Yn(e,l,r),u=s.Wap.getInnerMostAxes(u.length,o)),s.Wap.assertAxesAreInnerMostDims("sum",u,o);const[p,h]=s.Wap.computeOutAndReduceShapes(d.shape,u);let f=p;n&&(f=s.Wap.expandShapeToKeepDim(p,i));const m=s.D5U.sizeFromShape(h),g=Vn({inputs:{x:d},attrs:{shape:[s.D5U.sizeFromShape(e.shape)/m,m]},backend:r}),x=Xn(g,(0,s.z4k)(e.dtype),"sum",r),b=Vn({inputs:{x},attrs:{shape:f},backend:r});return r.disposeIntermediateTensorInfo(g),r.disposeIntermediateTensorInfo(x),c&&r.disposeIntermediateTensorInfo(d),b}(a,o,i,n)}const Qn={kernelName:s.GBy,backendName:"webgl",kernelFunc:Zn};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Jn(e){const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{perm:s}=r,o=n,i=a.shape.length,u=new Array(i);for(let e=0;e<u.length;e++)u[e]=a.shape[s[e]];let l;if(o.shouldExecuteOnCPU([a])){const e=o.texData.get(a.dataId).values,t=Qt(e,a.shape,a.dtype,s,u);l=o.makeTensorInfo(u,a.dtype);o.texData.get(l.dataId).values=t}else l=Yn(a,s,o);return l}const er={kernelName:s.G3Y,backendName:"webgl",kernelFunc:Jn};function tr({a:e,b:t,transposeA:n,transposeB:r,backend:a,bias:o=null,preluActivationWeights:i=null,leakyreluAlpha:u=0,activation:l=null}){const c=e.shape.length,d=t.shape.length,p=n?e.shape[c-2]:e.shape[c-1],h=r?t.shape[d-1]:t.shape[d-2],f=n?e.shape[c-1]:e.shape[c-2],m=r?t.shape[d-2]:t.shape[d-1],g=e.shape.slice(0,-2),x=t.shape.slice(0,-2),b=s.D5U.sizeFromShape(g),v=s.D5U.sizeFromShape(x),k=b===v||1===b||1===v;s.D5U.assert(c>=2&&d>=2&&k,(()=>`Error in matMul: the input batch dimensions must either be the same or at least one input batch dimension must be 1. Got input batch dimensions of (${g}) and (${x}).`));const y=(b>v?e.shape.slice(0,-2):t.shape.slice(0,-2)).concat([f,m]);s.D5U.assert(p===h,(()=>`Error in matMul: inner shapes (${p}) and (${h}) of Tensors with shapes ${e.shape} and ${t.shape} and transposeA=${n} and transposeB=${r} must match.`));const I=n?[b,p,f]:[b,f,p],w=r?[v,m,h]:[v,h,m],C=Vn({inputs:{x:e},backend:a,attrs:{shape:I}}),S=Vn({inputs:{x:t},backend:a,attrs:{shape:w}}),$=[C,S],T=Math.max(b,v),E=n?C.shape[1]:C.shape[2],N=null!=o,R=null!=i,D="leakyrelu"===l,A=null!=l?On(l,!0):null;let F;if((1===f||1===m)&&E>1e3&&!1===(N||R||D||null!=A)){let e=C,t=S;n&&(e=Jn({inputs:{x:C},backend:a,attrs:{perm:[0,2,1]}}),$.push(e)),r&&(t=Jn({inputs:{x:S},backend:a,attrs:{perm:[0,2,1]}}),$.push(t));const s=1===m;let o=e;1!==m&&(o=Vn({inputs:{x:e},backend:a,attrs:{shape:[T,E,1]}}),$.push(o));const i=1===m?2:1;let u=t;s&&(u=Vn({inputs:{x:t},backend:a,attrs:{shape:[T,1,E]}}),$.push(u));const l=Ln({inputs:{a:o,b:u},backend:a});F=Zn({inputs:{x:l},backend:a,attrs:{axis:i,keepDims:!0}}),$.push(l)}else{const l=(0,s.x8V)(e.dtype,t.dtype),c=new Mn(I,w,[T,f,m],n,r,N,A,R,D),d=[C,S];if(null!=o&&d.push(o),R&&d.push(i),D){const e=a.makeTensorInfo([],"float32",s.D5U.createScalarValue(u,"float32"));d.push(e),$.push(e)}F=a.runWebGLProgram(c,d,l)}const _=Vn({inputs:{x:F},backend:a,attrs:{shape:y}});$.push(F);for(const e of $)a.disposeIntermediateTensorInfo(e);return _}const nr={kernelName:s.usg,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{a,b:s,bias:o,preluActivationWeights:i}=t,{transposeA:u,transposeB:l,activation:c,leakyreluAlpha:d}=r;return tr({a,b:s,transposeA:u,transposeB:l,backend:n,bias:o,preluActivationWeights:i,leakyreluAlpha:d,activation:c})}},rr="return abs(x);";const ar={kernelName:s.SYM,backendName:"webgl",kernelFunc:function(e){const{inputs:t,backend:n}=e,{x:r}=t;if(n.shouldExecuteOnCPU([r])&&"complex64"!==r.dtype){const e=n.texData.get(r.dataId),t=Wt(e.values);return n.makeTensorInfo(r.shape,r.dtype,t)}let a;return a=(0,s.OBj)().getBool("WEBGL_PACK_UNARY_OPERATIONS")?new pn(r.shape,rr):new ln(r.shape,rr),n.runWebGLProgram(a,[r],r.dtype)}},sr=Fn({opSnippet:"if (isnan(x)) return x;\n  if (abs(x) > 1.) {\n    return NAN;\n  }\n  return acos(x);\n"}),or={kernelName:s.VGw,backendName:"webgl",kernelFunc:sr},ir=Fn({opSnippet:"if (isnan(x)) return x;\n  if (x < 1.0) return NAN;\nreturn log(x + sqrt(x * x - 1.0));"}),ur={kernelName:s.SpW,backendName:"webgl",kernelFunc:ir},lr="return a + b;",cr=_n({opSnippet:lr,packedOpSnippet:lr,supportsComplex:!0,cpuKernelImpl:pt}),dr={kernelName:s.mm_,backendName:"webgl",kernelFunc:cr};
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class pr{constructor(e,t){this.outputShape=[],this.outputShape=e,this.variableNames=t.map(((e,t)=>`T${t}`));const n=[];this.variableNames.forEach((e=>{n.push(`float v${e} = get${e}AtOutCoords();`)}));const r=this.variableNames.map((e=>`v${e}`)).join(" + ");this.userCode=`\n      void main() {\n        ${n.join("\n        ")}\n\n        float result = ${r};\n        setOutput(result);\n      }\n    `}}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class hr{constructor(e,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.variableNames=t.map(((e,t)=>`T${t}`));const n=[];this.variableNames.forEach((e=>{n.push(`vec4 v${e} = get${e}AtOutCoords();`)}));const r=this.variableNames.map((e=>`v${e}`)).join(" + ");this.userCode=`\n      void main() {\n        ${n.join("\n        ")}\n\n        vec4 result = ${r};\n        setOutput(result);\n      }\n    `}}const fr={kernelName:s.Xze,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function e(t){const{inputs:n,backend:r}=t,a=n;if(1===a.length)return wn({inputs:{x:a[0]},backend:r});if(a.length>(0,s.OBj)().get("WEBGL_MAX_TEXTURES_IN_SHADER")){const t=Math.floor(a.length/2),n=e({inputs:a.slice(0,t),backend:r}),s=e({inputs:a.slice(t),backend:r});return e({inputs:[n,s],backend:r})}const o=a.map((e=>e.dtype)).reduce(((e,t)=>(0,s.x8V)(e,t))),i=a.map((e=>e.shape)),u=(0,s.OBj)().getBool("WEBGL_PACK")?new hr(a[0].shape,i):new pr(a[0].shape,i);return r.runWebGLProgram(u,a,o)}};const mr={kernelName:s.oT6,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{axis:o,keepDims:i}=r,u=a.shape.length,l=s.D5U.parseAxisParam(o,a.shape);let c=l;const d=s.Wap.getAxesPermutation(c,u);let p=a;null!=d&&(p=Jn({inputs:{x:a},backend:n,attrs:{perm:d}}),c=s.Wap.getInnerMostAxes(c.length,u)),s.Wap.assertAxesAreInnerMostDims("all",c,u);const[h,f]=s.Wap.computeOutAndReduceShapes(p.shape,c),m=Vn({inputs:{x:p},backend:n,attrs:{shape:[-1,s.D5U.sizeFromShape(f)]}}),g=Xn(m,m.dtype,"all",n);let x;if(i){x=Vn({inputs:{x:g},backend:n,attrs:{shape:s.Wap.expandShapeToKeepDim(h,l)}})}else x=Vn({inputs:{x:g},backend:n,attrs:{shape:h}});return n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(g),null!=d&&n.disposeIntermediateTensorInfo(p),x}};const gr={kernelName:s.IKK,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{axis:o,keepDims:i}=r,u=a.shape.length,l=s.D5U.parseAxisParam(o,a.shape);let c=l;const d=s.Wap.getAxesPermutation(c,u);let p=a;null!=d&&(p=Jn({inputs:{x:a},backend:n,attrs:{perm:d}}),c=s.Wap.getInnerMostAxes(c.length,u)),s.Wap.assertAxesAreInnerMostDims("any",c,u);const[h,f]=s.Wap.computeOutAndReduceShapes(p.shape,c),m=Vn({inputs:{x:p},backend:n,attrs:{shape:[-1,s.D5U.sizeFromShape(f)]}}),g=Xn(m,m.dtype,"any",n);let x;if(i){x=Vn({inputs:{x:g},backend:n,attrs:{shape:s.Wap.expandShapeToKeepDim(h,l)}})}else x=Vn({inputs:{x:g},backend:n,attrs:{shape:h}});return n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(g),null!=d&&n.disposeIntermediateTensorInfo(p),x}};
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class xr{constructor(e,t,n){this.variableNames=["A"];const{windowSize:r,batchSize:a,outSize:s}=e;n||this.variableNames.push("bestIndicesA"),this.outputShape=[a,s];const o="max"===t?">":"<",i=n?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * ${r};\n\n        int bestIndex = inOffset;\n        float bestValue = getA(batch, bestIndex);\n\n        for (int i = 0; i < ${r}; i++) {\n          int inIdx = ${i};\n          float candidate = getA(batch, inIdx);\n          if (candidate ${o} bestValue) {\n            bestValue = candidate;\n            bestIndex = inIdx;\n          }\n        }\n        setOutput(float(bestIndex));\n      }\n    `}}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class br{constructor(e,t,n,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,s.D5U.assert(e.length>2,(()=>`Packed arg${n.charAt(0).toUpperCase()+n.slice(1)} supports only inputs with rank above 2.`));const a=e[e.length-1],o=Math.ceil(a/t);this.outputShape=e.slice(0,-1),o>1&&this.outputShape.push(o),r||this.variableNames.push("bestIndicesA");const i=this.outputShape,u=i.length,l=Re(u),c=tn("coords",u);let d,p;if(1===o){p=u+1;const e=Re(p);d=`\n        ${e} sourceLocR = ${e}(${c.join()}, 0);\n        ++${c[u-1]};\n        ${e} sourceLocG = ${e}(${c.join()}, 0);\n        ++${c[u-2]};\n        ${e} sourceLocA = ${e}(${c.join()}, 0);\n        --${c[u-1]};\n        ${e} sourceLocB = ${e}(${c.join()}, 0);\n        --${c[u-2]};`}else p=u,d=`\n        ${l} sourceLocR = coords;\n        ++${c[u-1]};\n        ${l} sourceLocG = coords;\n        ++${c[u-2]};\n        ${l} sourceLocA = coords;\n        --${c[u-1]};\n        ${l} sourceLocB = coords;\n        --${c[u-2]};`;const h=["x","y","z","w","u","v"].slice(0,p),f="."+h[p-1],m=h.map((e=>"int "+e)),g=tn("sourceLocR",p-1).concat("inIdx.r"),x=tn("sourceLocG",p-1).concat("inIdx.g"),b=tn("sourceLocB",p-1).concat("inIdx.b"),v=tn("sourceLocA",p-1).concat("inIdx.a"),k="max"===n?"greaterThan":"lessThan",y=r?"":`\n          inIdx = round(vec4(getBestIndicesAChannel(${g.join()}),\n                             getBestIndicesAChannel(${x.join()}),\n                             getBestIndicesAChannel(${b.join()}),\n                             getBestIndicesAChannel(${v.join()})));`,I=`vec4(\n            getAChannel(${g.join()}),\n            hasNextCol ? getAChannel(${x.join()}) : 0.,\n            hasNextRow ? getAChannel(${b.join()}) : 0.,\n            hasNextRow && hasNextCol ? getAChannel(${v.join()}) : 0.)`,w=r?"":`\n      float getBestIndicesAChannel(${m.join()}) {\n        return getChannel(getBestIndicesA(${h.join()}),\n                                          vec2(${h.slice(-2).join()}));\n      }`;this.userCode=`\n      float getAChannel(${m.join()}) {\n        return getChannel(getA(${h.join()}),\n                               vec2(${h.slice(-2).join()}));\n      }\n      ${w}\n      void main() {\n        ${l} coords = getOutputCoords();\n        bool hasNextCol = ${c[u-1]} < ${i[u-1]-1};\n        bool hasNextRow = ${c[u-2]} < ${i[u-2]-1};\n        ${d}\n        ivec4 srcIdx = ivec4(sourceLocR${f}, sourceLocG${f},\n          sourceLocB${f}, sourceLocA${f}) * ${t};\n        ivec4 inIdx = srcIdx;\n        vec4 bestIndex = vec4(inIdx);\n        vec4 bestValue = ${I};\n\n        for (int i = 0; i < ${t}; i++) {\n          inIdx = srcIdx;\n          ${y}\n          vec4 candidate = ${I};\n          bvec4 nan = isnan(candidate);\n          bvec4 replace = bvec4(\n            vec4(${k}(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));\n\n          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,\n                           replace.y  ? candidate.y : bestValue.y,\n                           replace.z  ? candidate.z : bestValue.z,\n                           replace.w  ? candidate.w : bestValue.w);\n          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));\n          srcIdx++;\n        }\n        setOutput(bestIndex);\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function vr(e,t,n,r=null){let a=t.shape[0],o=t.shape[1];null!=r&&(a=r.shape[0],o=r.shape[1]);const i=s.Wap.computeOptimalWindowSize(o),u={windowSize:i,inSize:o,batchSize:a,outSize:Math.ceil(o/i)},l=new xr(u,n,null==r),c=[t];null!=r&&c.push(r);const d=e.runWebGLProgram(l,c,"int32");if(1===d.shape[1])return d;const p=vr(e,t,n,d);return e.disposeIntermediateTensorInfo(d),p}function kr(e,t,n,r=null){const a=null!=r?r.shape:t.shape,o=a[a.length-1],i=s.Wap.computeOptimalWindowSize(o),u=new br(a,i,n,null==r),l=null==r?[t]:[t,r],c=e.runWebGLProgram(u,l,"int32");if(c.shape.length===t.shape.length){const r=kr(e,t,n,c);return e.disposeIntermediateTensorInfo(c),r}return c}function yr(e,t,n,r){const a=[n];if(s.Wap.assertAxesAreInnerMostDims("arg"+r.charAt(0).toUpperCase()+r.slice(1),a,t.shape.length),!(0,s.OBj)().getBool("WEBGL_PACK_REDUCE")||t.shape.length<=2){const n=[],o=e.texData.get(t.dataId);let i=t;null!==o&&o.isPacked&&(i=e.unpackTensor(t),n.push(i));const[u,l]=s.Wap.computeOutAndReduceShapes(i.shape,a),c=s.D5U.sizeFromShape(l),d=Vn({inputs:{x:i},backend:e,attrs:{shape:[-1,c]}});n.push(d);const p=vr(e,d,r);n.push(p);const h=Vn({inputs:{x:p},backend:e,attrs:{shape:u}});return n.forEach((t=>e.disposeIntermediateTensorInfo(t))),h}return kr(e,t,r)}const Ir={kernelName:s.sJF,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{axis:o}=r;let i=s.D5U.parseAxisParam(o,a.shape);const u=s.Wap.getAxesPermutation(i,a.shape.length);let l=a;const c=[];null!=u&&(l=Jn({inputs:{x:a},backend:n,attrs:{perm:u}}),c.push(l),i=s.Wap.getInnerMostAxes(i.length,l.shape.length)),s.Wap.assertAxesAreInnerMostDims("argMax",[i[0]],l.shape.length);const d=yr(n,l,i[0],"max");return c.forEach((e=>n.disposeIntermediateTensorInfo(e))),d}};const wr={kernelName:s.aJk,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{axis:o}=r;let i=s.D5U.parseAxisParam(o,a.shape);const u=s.Wap.getAxesPermutation(i,a.shape.length);let l=a;const c=[];null!=u&&(l=Jn({inputs:{x:a},backend:n,attrs:{perm:u}}),c.push(l),i=s.Wap.getInnerMostAxes(i.length,l.shape.length)),s.Wap.assertAxesAreInnerMostDims("argMin",[i[0]],l.shape.length);const d=yr(n,l,i[0],"min");return c.forEach((e=>n.disposeIntermediateTensorInfo(e))),d}},Cr=Fn({opSnippet:"if (isnan(x)) return x;\n  if (abs(x) > 1.) {\n    return NAN;\n  }\n  return asin(x);\n"}),Sr={kernelName:s.M2y,backendName:"webgl",kernelFunc:Cr},$r=Fn({opSnippet:"if (isnan(x)) return x;return log(x + sqrt(x * x + 1.0));"}),Tr={kernelName:s.qw7,backendName:"webgl",kernelFunc:$r},Er=Fn({opSnippet:"if (isnan(x)) return x;\n  return atan(x);\n"}),Nr={kernelName:s.jMg,backendName:"webgl",kernelFunc:Er},Rr=_n({opSnippet:"\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return atan(a, b);\n",packedOpSnippet:"\n  vec4 result = atan(a, b);\n  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n"}),Dr={kernelName:s.QCc,backendName:"webgl",kernelFunc:Rr},Ar=Fn({opSnippet:"if (isnan(x)) return x;\n  if ((x < -1.0) || (x > 1.0)) return NAN;\nreturn (log(1.0 + x) - log(1.0 - x)) / 2.0;"}),Fr={kernelName:s.Oyi,backendName:"webgl",kernelFunc:Ar};
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class _r{constructor(e,t,n,r=!1,a=!1){if(this.variableNames=["x"],"avg"===t&&n)throw new Error("Cannot compute positions for average pool.");const s=e.filterWidth,o=e.strideHeight,i=e.strideWidth,u=e.dilationHeight,l=e.dilationWidth,c=e.effectiveFilterHeight,d=e.effectiveFilterWidth,p=e.padInfo.top,h=e.padInfo.left;this.outputShape=e.outShape;const f="avg"===t,m=`((batch  * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + d`,g=`(xR * ${e.inWidth} + xC) * ${e.inChannels} + d`;let x="0.0";if(f||(x="-1.0 / 1e-20"),n){const t=">=";return void(this.userCode=`\n        const ivec2 strides = ivec2(${o}, ${i});\n        const ivec2 pads = ivec2(${p}, ${h});\n\n        void main() {\n          ivec4 coords = getOutputCoords();\n          int batch = coords[0];\n          int d = coords[3];\n\n          ivec2 xRCCorner = coords.yz * strides - pads;\n          int xRCorner = xRCCorner.x;\n          int xCCorner = xRCCorner.y;\n\n          // max/min x(?, ?, d) to get y(yR, yC, d).\n          // ? = to be determined\n          float minMaxValue = 0.0;\n          float minMaxValueFound = 0.0;\n          int minMaxPosition = 0;\n          float avgValue = 0.0;\n\n          for (int wR = 0; wR < ${c};\n              wR += ${u}) {\n            int xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= ${e.inHeight}) {\n              continue;\n            }\n\n            for (int wC = 0; wC < ${d};\n                wC += ${l}) {\n              int xC = xCCorner + wC;\n\n              if (xC < 0 || xC >= ${e.inWidth}) {\n                continue;\n              }\n\n              float value = getX(batch, xR, xC, d);\n\n              // If a min / max value has already been found, use it. If not,\n              // use the current value.\n              float currMinMaxValue = mix(\n                  value, minMaxValue, minMaxValueFound);\n              if (value ${t} currMinMaxValue) {\n                minMaxValue = value;\n                minMaxValueFound = 1.0;\n                minMaxPosition = ${r?a?m:g:`wR * ${d} + wC`};\n              }\n            }\n          }\n          setOutput(float(minMaxPosition));\n        }\n      `)}let b=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;"avg"===t&&(b="avgValue / count");const v=4*Math.floor(s/4),k=s%4,y=`\n      if (${f}) {\n        avgValue += dot(values, ones);\n      } else {\n        minMaxValue = max(values, minMaxValue);\n      }\n    `;this.userCode=`\n      const ivec2 strides = ivec2(${o}, ${i});\n      const ivec2 pads = ivec2(${p}, ${h});\n      const float initializationValue = ${x};\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float count = 0.0;\n\n      float getValue(int batch, int xR, int xC, int d) {\n        if (xC < 0 || xC >= ${e.inWidth}) {\n          return initializationValue;\n        }\n        count += 1.0;\n        return getX(batch, xR, xC, d);\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d = coords[3];\n\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // max/min x(?, ?, d) to get y(yR, yC, d).\n        // ? = to be determined\n        vec4 minMaxValue = vec4(${x});\n        float avgValue = 0.0;\n        count = 0.0;\n\n        for (int wR = 0; wR < ${c};\n            wR += ${u}) {\n          int xR = xRCorner + wR;\n\n          if (xR < 0 || xR >= ${e.inHeight}) {\n            continue;\n          }\n\n          for (int wC = 0; wC < ${v}; wC += 4) {\n            int xC = xCCorner + wC * ${l};\n\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + ${l}, d),\n              getValue(batch, xR, xC + 2 * ${l}, d),\n              getValue(batch, xR, xC + 3 * ${l}, d)\n            );\n\n            ${y}\n          }\n\n          int xC = xCCorner + ${v};\n          if (${1===k}) {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              initializationValue,\n              initializationValue,\n              initializationValue\n            );\n\n            ${y}\n          } else if (${2===k}) {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + ${l}, d),\n              initializationValue,\n              initializationValue\n            );\n\n            ${y}\n          } else if (${3===k}) {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + ${l}, d),\n              getValue(batch, xR, xC + 2 * ${l}, d),\n              initializationValue\n            );\n\n            ${y}\n          }\n        }\n        setOutput(${b});\n      }\n    `}}class Or{constructor(e,t,n,r=!1,a=!1){if(this.variableNames=["x"],"avg"===t&&n)throw new Error("Cannot compute positions for average pool.");const s=e.filterWidth,o=e.strideDepth,i=e.strideHeight,u=e.strideWidth,l=e.dilationDepth,c=e.dilationHeight,d=e.dilationWidth,p=e.effectiveFilterDepth,h=e.effectiveFilterHeight,f=e.effectiveFilterWidth,m=e.padInfo.front,g=e.padInfo.top,x=e.padInfo.left;this.outputShape=e.outShape;const b="avg"===t;let v="0.0";if(b||(v="-1.0 / 1e-20"),n){const t=">=";return void(this.userCode=`\n        const ivec3 strides =\n            ivec3(${o}, ${i}, ${u});\n        const ivec3 pads = ivec3(${m}, ${g}, ${x});\n\n        void main() {\n          ivec5 coords = getOutputCoords();\n          int batch = coords.x;\n          int ch = coords.u;\n\n          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n          int xDCorner = xCorner.x;\n          int xRCorner = xCorner.y;\n          int xCCorner = xCorner.z;\n\n          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).\n          // ? = to be determined\n          float minMaxValue = 0.0;\n          float minMaxValueFound = 0.0;\n          int minMaxPosition = 0;\n\n          for (int wD = 0; wD < ${p};\n              wD += ${l}) {\n            int xD = xDCorner + wD;\n\n            if (xD < 0 || xD >= ${e.inDepth}) {\n              continue;\n            }\n\n            for (int wR = 0; wR < ${h};\n                wR += ${c}) {\n              int xR = xRCorner + wR;\n\n              if (xR < 0 || xR >= ${e.inHeight}) {\n                continue;\n              }\n\n              for (int wC = 0; wC < ${f};\n                  wC += ${d}) {\n                int xC = xCCorner + wC;\n\n                if (xC < 0 || xC >= ${e.inWidth}) {\n                  continue;\n                }\n\n                float value = getX(batch, xD, xR, xC, ch);\n\n                // If a min / max value has already been found, use it. If not,\n                // use the current value.\n                float currMinMaxValue = mix(\n                    value, minMaxValue, minMaxValueFound);\n                if (value ${t} currMinMaxValue) {\n                  minMaxValue = value;\n                  minMaxValueFound = 1.0;\n                  minMaxPosition = ${r?a?`(((batch * ${e.inDepth} + xD) * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`((xD * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`wD * ${h} * ${f} +\n                      wR * ${f} + wC`};\n                }\n              }\n            }\n          }\n          setOutput(float(minMaxPosition));\n        }\n      `)}let k=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;"avg"===t&&(k="avgValue / count");const y=4*Math.floor(s/4),I=s%4,w=`\n      if (${b}) {\n        avgValue += dot(values, ones);\n      } else {\n        minMaxValue = max(values, minMaxValue);\n      }\n    `;this.userCode=`\n      const ivec3 strides =\n        ivec3(${o}, ${i}, ${u});\n      const ivec3 pads = ivec3(${m}, ${g}, ${x});\n      const float initializationValue = ${v};\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float count = 0.0;\n\n      float getValue(int batch, int xD, int xR, int xC, int ch) {\n        if (xC < 0 || xC >= ${e.inWidth}) {\n          return initializationValue;\n        }\n        count += 1.0;\n        return getX(batch, xD, xR, xC, ch);\n      }\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n        int xDCorner = xCorner.x;\n        int xRCorner = xCorner.y;\n        int xCCorner = xCorner.z;\n\n        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).\n        // ? = to be determined\n        vec4 minMaxValue = vec4(${v});\n        float avgValue = 0.0;\n        count = 0.0;\n\n        for (int wD = 0; wD < ${p};\n            wD += ${l}) {\n          int xD = xDCorner + wD;\n\n          if (xD < 0 || xD >= ${e.inDepth}) {\n            continue;\n          }\n\n          for (int wR = 0; wR < ${h};\n            wR += ${c}) {\n            int xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= ${e.inHeight}) {\n              continue;\n            }\n\n            for (int wC = 0; wC < ${y}; wC += 4) {\n              int xC = xCCorner + wC * ${d};\n\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + ${d}, ch),\n                getValue(batch, xD, xR, xC + 2 * ${d}, ch),\n                getValue(batch, xD, xR, xC + 3 * ${d}, ch)\n              );\n\n              ${w}\n            }\n\n            int xC = xCCorner + ${y};\n            if (${1===I}) {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                initializationValue,\n                initializationValue,\n                initializationValue\n              );\n\n              ${w}\n            } else if (${2===I}) {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + ${d}, ch),\n                initializationValue,\n                initializationValue\n              );\n\n              ${w}\n            } else if (${3===I}) {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + ${d}, ch),\n                getValue(batch, xD, xR, xC + 2 * ${d}, ch),\n                initializationValue\n              );\n\n              ${w}\n            }\n          }\n          setOutput(${k});\n        }\n      }\n    `}}const Mr={kernelName:s.JhU,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a}=t;de(a,"avgPool");const{filterSize:o,strides:i,pad:u,dimRoundingMode:l}=r;s.D5U.assert(s.Wap.eitherStridesOrDilationsAreOne(i,1),(()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${i} and dilations '1'`));const c=s.Wap.computePool2DInfo(a.shape,o,i,1,u,l);if(1===c.filterWidth&&1===c.filterHeight&&s.D5U.arraysEqual(c.inShape,c.outShape))return wn({inputs:{x:a},backend:n});const d=new _r(c,"avg",!1);return n.runWebGLProgram(d,[a],"float32")}};const Ur={kernelName:s._k9,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{filterSize:o,strides:i,pad:u,dimRoundingMode:l,dataFormat:c}=r,d=s.Wap.computePool3DInfo(a.shape,o,i,[1,1,1],u,l,c),p=new Or(d,"avg",!1);return n.runWebGLProgram(p,[a],"float32")}};
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Pr{constructor(e){this.variableNames=["dy"],this.outputShape=e.inShape;const t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,a=e.strideWidth,s=e.dilationHeight,o=e.dilationWidth,i=e.effectiveFilterHeight,u=e.effectiveFilterWidth,l=i-1-e.padInfo.top,c=u-1-e.padInfo.left,d=1/(t*n);this.userCode=`\n      const ivec2 pads = ivec2(${l}, ${c});\n      const float avgMultiplier = float(${d});\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < ${i};\n            wR += ${s}) {\n          float dyR = float(dyRCorner + wR) / ${r}.0;\n\n          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < ${u};\n            wC+= ${o}) {\n            float dyC = float(dyCCorner + wC) / ${a}.0;\n\n            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n\n            dotProd += dyValue * avgMultiplier;\n          }\n        }\n        setOutput(dotProd);\n      }\n    `}}class Wr{constructor(e){this.variableNames=["dy"],this.outputShape=e.inShape;const t=e.filterDepth,n=e.filterHeight,r=e.filterWidth,a=e.strideDepth,s=e.strideHeight,o=e.strideWidth,i=e.dilationDepth,u=e.dilationHeight,l=e.dilationWidth,c=e.effectiveFilterDepth,d=e.effectiveFilterHeight,p=e.effectiveFilterWidth,h=c-1-e.padInfo.front,f=d-1-e.padInfo.top,m=p-1-e.padInfo.left,g=1/(t*n*r);this.userCode=`\n      const ivec3 pads = ivec3(${h}, ${f}, ${m});\n      const float avgMultiplier = float(${g});\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyDCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get\n        // dx(xD, xR, xC, ch).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int wD = 0; wD < ${c};\n            wD += ${i}) {\n          float dyD = float(dyDCorner + wD) / ${a}.0;\n\n          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {\n            continue;\n          }\n          int idyD = int(dyD);\n\n          for (int wR = 0; wR < ${d};\n              wR += ${u}) {\n            float dyR = float(dyRCorner + wR) / ${s}.0;\n\n            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||\n                fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            for (int wC = 0; wC < ${p};\n                wC += ${l}) {\n              float dyC = float(dyCCorner + wC) / ${o}.0;\n\n              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              float dyValue = getDy(batch, idyD, idyR, idyC, ch);\n\n              dotProd += dyValue * avgMultiplier;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    `}}const Br={kernelName:s.IMb,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{dy:a,input:o}=t,i=o,{filterSize:u,strides:l,pad:c,dimRoundingMode:d}=r,p=s.Wap.computePool3DInfo(i.shape,u,l,[1,1,1],c,d),h=new Wr(p);return n.runWebGLProgram(h,[a],i.dtype)}};const Lr={kernelName:s.ROF,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{dy:a,input:o}=t,i=o;de([a,o],"avgPoolGrad");const{filterSize:u,strides:l,pad:c}=r,d=s.Wap.computePool2DInfo(i.shape,u,l,1,c),p=new Pr(d);return n.runWebGLProgram(p,[a],i.dtype)}};const zr={kernelName:s.XLW,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{a,b:s}=t,{transposeA:o,transposeB:i}=r;return tr({a,b:s,transposeA:o,transposeB:i,backend:n})}};
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Vr{constructor(e,t,n,r,a,o){this.outputShape=[],this.variableNames=["x","mean","variance"],s.Wap.assertAndGetBroadcastShape(e,t),s.Wap.assertAndGetBroadcastShape(e,n);let i="0.0";null!=r&&(s.Wap.assertAndGetBroadcastShape(e,r),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");let u="1.0";null!=a&&(s.Wap.assertAndGetBroadcastShape(e,a),this.variableNames.push("scale"),u="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`\n      void main() {\n        float x = getXAtOutCoords();\n        float mean = getMeanAtOutCoords();\n        float variance = getVarianceAtOutCoords();\n        float offset = ${i};\n        float scale = ${u};\n        float inv = scale * inversesqrt(variance + float(${o}));\n        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));\n      }\n    `}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Gr{constructor(e,t,n,r,a,o){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],s.Wap.assertAndGetBroadcastShape(e,t),s.Wap.assertAndGetBroadcastShape(e,n);let i="vec4(0.0)";null!=r&&(s.Wap.assertAndGetBroadcastShape(e,r),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");let u="vec4(1.0)";null!=a&&(s.Wap.assertAndGetBroadcastShape(e,a),this.variableNames.push("scale"),u="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`\n      void main() {\n        vec4 offset = ${i};\n        vec4 scale = ${u};\n\n        vec4 x = getXAtOutCoords();\n        vec4 mean = getMeanAtOutCoords();\n        vec4 variance = getVarianceAtOutCoords();\n\n        vec4 inv = scale * inversesqrt(variance + vec4(${o}));\n\n        setOutput((x - mean) * inv + offset);\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Hr={kernelName:s.sHE,backendName:"webgl",kernelFunc:({inputs:e,backend:t,attrs:n})=>{const{x:r,mean:a,variance:o,offset:i,scale:u}=e;s.D5U.assert(a.shape.length===o.shape.length,(()=>"Batch normalization gradient requires mean and variance to have equal ranks.")),s.D5U.assert(null==i||a.shape.length===i.shape.length,(()=>"Batch normalization gradient requires mean and offset to have equal ranks.")),s.D5U.assert(null==u||a.shape.length===u.shape.length,(()=>"Batch normalization gradient requires mean and scale to have equal ranks."));let{varianceEpsilon:l}=n;null==l&&(l=.001);const c=[r,a,o];let d=null;null!=i&&(d=i.shape,c.push(i));let p=null;null!=u&&(p=u.shape,c.push(u));const h=(0,s.OBj)().getBool("WEBGL_PACK_NORMALIZATION")?new Gr(r.shape,a.shape,o.shape,d,p,l):new Vr(r.shape,a.shape,o.shape,d,p,l);return t.runWebGLProgram(h,c,c[0].dtype)}};
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class jr{constructor(e){this.variableNames=["source"],this.outputShape=e,this.rank=e.length;const t=Re(this.rank);this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const n=function(e){if(1===e)return"sourceLoc";if(e<=6)return Xr.slice(0,e).map((e=>"sourceLoc."+e)).join(",");throw Error(`Slicing for rank ${e} is not yet supported`)}(this.rank);let r;r=`\n        ${t} sourceLoc;\n        ${t} coords = getOutputCoords();\n        ${e.map(((e,t)=>`sourceLoc.${Xr[t]} = start[${t}] + coords.${Xr[t]};`)).join("\n")}\n      `,this.userCode=`\n      void main() {\n        ${r}\n        setOutput(getSource(${n}));\n      }\n    `}}const Xr=["x","y","z","w","u","v"];
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class qr{constructor(e){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const t=Re(this.rank),n=tn("coords",this.rank),r=tn("sourceLoc",this.rank),a=1===this.rank?"sourceLoc":`vec2(${r.slice(-2).join()})`,s=`getChannel(getSource(${r.join()}), ${a})`,o=`\n      result.x = ${s};\n      if (++${n[this.rank-1]} < ${e[this.rank-1]}) {\n        ++${r[this.rank-1]};\n        result.y = ${s};\n        --${r[this.rank-1]};\n      }\n    `,i=1===this.rank?"":`\n      --${n[this.rank-1]};\n      if (++${n[this.rank-2]} < ${e[this.rank-2]}) {\n        ++${r[this.rank-2]};\n        result.z = ${s};\n        if (++${n[this.rank-1]} < ${e[this.rank-1]}) {\n          ++${r[this.rank-1]};\n          result.w = ${s};\n        }\n      }\n    `,u=this.rank<=4?`sourceLoc = coords +\n            ${t}(${e.map(((e,t)=>`start[${t}]`)).join()});`:e.map(((e,t)=>`${r[t]} = ${n[t]} + start[${t}];`)).join("\n");this.userCode=`\n      void main() {\n        ${t} coords = getOutputCoords();\n        ${t} sourceLoc;\n        ${u}\n        vec4 result = vec4(0.);\n        ${o}\n        ${i}\n        setOutput(result);\n      }\n    `}}function Kr(e){const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{begin:o,size:i}=r,[u,l]=s.kuN.parseSliceParams(a,o,i);if(s.kuN.assertParamsValid(a,u,l),0===s.D5U.sizeFromShape(l))return n.makeTensorInfo(l,a.dtype,[]);if(n.shouldExecuteOnCPU([a])||"string"===a.dtype){const e=n.texData.get(a.dataId),t=Bt(e.values,u,l,a.shape,a.dtype);return n.makeTensorInfo(l,a.dtype,t)}const{isPacked:c}=n.texData.get(a.dataId),d=s.kuN.isSliceContinous(a.shape,u,l);if(c||!d){const e=(0,s.OBj)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new qr(l):new jr(l),t=[u];return n.runWebGLProgram(e,[a],a.dtype,t)}return n.uploadToGPU(a.dataId),
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n,r){const a=r.texData.get(e.dataId),o=r.makeTensorInfo(n,e.dtype),i=r.texData.get(o.dataId);Object.assign(i,a),i.refCount=1,i.shape=n,i.dtype=e.dtype;let u=s.kuN.computeFlatOffset(t,s.D5U.computeStrides(e.shape));a.slice&&(u+=a.slice.flatOffset),i.slice={flatOffset:u,origDataId:a.slice&&a.slice.origDataId||e.dataId};const l=r.dataRefCount.get(i.slice.origDataId)||1;return r.dataRefCount.set(i.slice.origDataId,l+1),o}(a,u,l,n)}const Yr={kernelName:s.p2w,backendName:"webgl",kernelFunc:Kr},Zr={kernelName:s.zws,backendName:"webgl",kernelFunc:e=>{const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{blockShape:o,crops:i}=r;s.D5U.assert(a.shape.length<=4,(()=>"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet"));const u=o.reduce(((e,t)=>e*t)),l=s.Wap.getReshaped(a.shape,o,u),c=s.Wap.getPermuted(l.length,o.length),d=s.Wap.getReshapedPermuted(a.shape,o,u),p=s.Wap.getSliceBeginCoords(i,o.length),h=s.Wap.getSliceSize(d,i,o.length),f=[],m=Vn({inputs:{x:a},backend:n,attrs:{shape:l}}),g=Jn({inputs:{x:m},backend:n,attrs:{perm:c}}),x=Vn({inputs:{x:g},backend:n,attrs:{shape:d}}),b=Kr({inputs:{x},backend:n,attrs:{begin:p,size:h}});return f.push(m),f.push(g),f.push(x),f.forEach((e=>n.disposeIntermediateTensorInfo(e))),b}};const Qr={kernelName:s.zvY,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a,weights:s}=t,{size:o}=r,i=n.readSync(a.dataId),u=n.readSync(s.dataId),l=ht(i,u,s.dtype,s.shape,o);return n.makeTensorInfo([o],s.dtype,l)}},Jr=_n({opSnippet:"return float(a != b);",cpuKernelImpl:_t,dtype:"bool"}),ea={kernelName:s.yQU,backendName:"webgl",kernelFunc:Jr};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ta(e){const{inputs:t,backend:n}=e,{input:r}=t;return wn({inputs:{x:n.texData.get(r.dataId).complexTensorInfos.real},backend:n})}const na={kernelName:s.xJR,backendName:"webgl",kernelFunc:ta};const ra={kernelName:s.RFZ,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function e(t){const{inputs:n,backend:r,attrs:a}=t,{x:o}=n,{dtype:i}=a;if("complex64"===i){if("complex64"===o.dtype)return wn({inputs:{x:o},backend:r});const t=s.lls(o.shape),n=e({inputs:{x:o},backend:r,attrs:{dtype:"float32"}}),a=Sn({inputs:{real:n,imag:t},backend:r});return t.dispose(),r.disposeIntermediateTensorInfo(n),a}if("complex64"===o.dtype){const t=ta({inputs:{input:o},backend:r}),n=e({inputs:{x:t},backend:r,attrs:{dtype:i}});return r.disposeIntermediateTensorInfo(t),n}if(!s.D5U.hasEncodingLoss(o.dtype,i)){const e=wn({inputs:{x:o},backend:r});return{dataId:e.dataId,shape:e.shape,dtype:i}}if("int32"===i)return function(e,t){const n=new ln(e.shape,"return float(int(x));"),r=t.runWebGLProgram(n,[e],"int32");return{dataId:r.dataId,shape:r.shape,dtype:r.dtype}}(o,r);if("bool"===i){const e=r.makeTensorInfo([],"bool",s.D5U.getTypedArrayFromDType("bool",1)),t=Jr({inputs:{a:o,b:e},backend:r});return r.disposeIntermediateTensorInfo(e),t}throw new Error(`Error in Cast: failed to cast ${o.dtype} to ${i}`)}},aa="return ceil(x);",sa=Fn({opSnippet:aa,packedOpSnippet:aa,cpuKernelImpl:mt}),oa={kernelName:s.gJX,backendName:"webgl",kernelFunc:sa};
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class ia{constructor(e){this.variableNames=["A"],this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=e,this.userCode="\n\n      void main() {\n        float value = getAAtOutCoords();\n        if (isnan(value)) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, minVal, maxVal));\n      }\n    "}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class ua{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=e,this.userCode="\n      void main() {\n        vec4 value = getAAtOutCoords();\n\n        if (any(isnan(value))) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));\n      }\n    "}}const la={kernelName:s.xnO,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{clipValueMin:o,clipValueMax:i}=r;let u;u=(0,s.OBj)().getBool("WEBGL_PACK_CLIP")?new ua(a.shape):new ia(a.shape);const l=[[o],[i]];return n.runWebGLProgram(u,[a],a.dtype,l)}};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class ca{constructor(e){this.variableNames=["real","imag"],this.outputShape=e,this.userCode="\n      void main() {\n        float re = abs(getRealAtOutCoords());\n        float im = abs(getImagAtOutCoords());\n        float mx = max(re, im);\n\n        // sadly the length function in glsl is not underflow-safe\n        // (at least not on Intel GPUs). So the safe solution is\n        // to ensure underflow-safety in all cases.\n        setOutput(\n          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))\n        );\n      }\n    "}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function da(e,t){return{dataId:t.dataId,dtype:t.dtype,shape:e.shape}}const pa={kernelName:s.yj2,backendName:"webgl",kernelFunc:function(e){const{inputs:t,backend:n}=e,{x:r}=t,a=n.texData.get(r.dataId),s=new ca(r.shape),o=[da(r,a.complexTensorInfos.real),da(r,a.complexTensorInfos.imag)];return n.runWebGLProgram(s,o,o[0].dtype)}};
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class ha{constructor(e){this.outputShape=[],this.outputShape=s.Wap.computeOutShape(e,1),this.variableNames=e.map(((e,t)=>`T${t}`));const t=new Array(e.length-1);t[0]=e[0][1];for(let n=1;n<t.length;n++)t[n]=t[n-1]+e[n][1];const n=[`if (yC < ${t[0]}) setOutput(getT0(yR, yC));`];for(let e=1;e<t.length;e++){const r=t[e-1];n.push(`else if (yC < ${t[e]}) setOutput(getT${e}(yR, yC-${r}));`)}const r=t.length,a=t[t.length-1];n.push(`else setOutput(getT${r}(yR, yC-${a}));`),this.userCode=`\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int yR = coords.x;\n        int yC = coords.y;\n\n        ${n.join("\n        ")}\n      }\n    `}}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class fa{constructor(e,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=s.Wap.computeOutShape(e,t);const n=this.outputShape,r=n.length,a=Re(r),o=tn("coords",r),i=["x","y","z","w","u","v"].slice(0,r);this.variableNames=e.map(((e,t)=>`T${t}`));const u=new Array(e.length-1);u[0]=e[0][t];for(let n=1;n<u.length;n++)u[n]=u[n-1]+e[n][t];const l=i[t],c=i.slice(-2),d=i.join();let p=`if (${l} < ${u[0]}) {\n        return getChannel(\n            getT0(${d}), vec2(${c.join()}));\n        }`;for(let e=1;e<u.length;e++){const t=u[e-1];p+=`\n        if (${l} < ${u[e]}  && ${l} >= ${u[e-1]}) {\n          return getChannel(\n            getT${e}(${ma(i,l,t)}),\n            vec2(${ma(c,l,t)}));\n        }`}const h=u.length,f=u[u.length-1];p+=`\n        return getChannel(\n          getT${h}(${ma(i,l,f)}),\n          vec2(${ma(c,l,f)}));`,this.userCode=`\n      float getValue(${i.map((e=>"int "+e))}) {\n        ${p}\n      }\n\n      void main() {\n        ${a} coords = getOutputCoords();\n        vec4 result = vec4(getValue(${o}), 0., 0., 0.);\n\n        ${o[r-1]} = ${o[r-1]} + 1;\n        if (${o[r-1]} < ${n[r-1]}) {\n          result.g = getValue(${o});\n        }\n\n        ${o[r-2]} = ${o[r-2]} + 1;\n        if (${o[r-2]} < ${n[r-2]}) {\n          result.a = getValue(${o});\n        }\n\n        ${o[r-1]} = ${o[r-1]} - 1;\n        if (${o[r-2]} < ${n[r-2]} &&\n            ${o[r-1]} < ${n[r-1]}) {\n          result.b = getValue(${o});\n        }\n        setOutput(result);\n      }\n    `}}function ma(e,t,n){const r=e.indexOf(t);return e.map(((e,t)=>t===r?`${e} - ${n}`:e)).join()}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ga(e){const{inputs:t,backend:n}=e,{input:r}=t;return wn({inputs:{x:n.texData.get(r.dataId).complexTensorInfos.imag},backend:n})}const xa={kernelName:s.J_u,backendName:"webgl",kernelFunc:ga};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ba(e,t,n){const r=e[0].dtype;if("complex64"===r){const r=e.map((e=>ta({inputs:{input:e},backend:n}))),a=e.map((e=>ga({inputs:{input:e},backend:n}))),s=ba(r,t,n),o=ba(a,t,n),i=Sn({inputs:{real:s,imag:o},backend:n});return r.forEach((e=>n.disposeIntermediateTensorInfo(e))),a.forEach((e=>n.disposeIntermediateTensorInfo(e))),n.disposeIntermediateTensorInfo(s),n.disposeIntermediateTensorInfo(o),i}let a=n.shouldExecuteOnCPU(e);if("string"===r&&(a=!0),a){const a=e.map((e=>{const r=s.D5U.sizeFromShape(e.shape.slice(t));return Vn({inputs:{x:e},backend:n,attrs:{shape:[-1,r]}})})),o=a.map((e=>({vals:n.readSync(e.dataId),shape:e.shape}))),i=s.Wap.computeOutShape(a.map((e=>e.shape)),1),u=1===a[0].shape[0],l=gt(o,i,r,u),c=s.Wap.computeOutShape(e.map((e=>e.shape)),t),d=n.makeTensorInfo(c,r,l);return a.forEach((e=>n.disposeIntermediateTensorInfo(e))),d}if(e.length>(0,s.OBj)().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){const r=Math.floor(e.length/2),a=ba(e.slice(0,r),t,n),s=ba(e.slice(r),t,n),o=ba([a,s],t,n);return n.disposeIntermediateTensorInfo(a),n.disposeIntermediateTensorInfo(s),o}if((0,s.OBj)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&e[0].shape.length>1){const a=new fa(e.map((e=>e.shape)),t);return n.runWebGLProgram(a,e,r)}const{tensors2D:o,outShape:i}=function(e,t,n){const r=s.Wap.computeOutShape(e.map((e=>e.shape)),t);return{tensors2D:e.map((e=>Vn({inputs:{x:e},attrs:{shape:[-1,s.D5U.sizeFromShape(e.shape.slice(t))]},backend:n}))),outShape:r}}(e,t,n),u=new ha(o.map((e=>e.shape))),l=n.runWebGLProgram(u,o,r);o.forEach((e=>n.disposeIntermediateTensorInfo(e)));const c=Vn({inputs:{x:l},attrs:{shape:i},backend:n});return n.disposeIntermediateTensorInfo(l),c}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function va(e){const{inputs:t,backend:n,attrs:r}=e,{axis:a}=r,o=s.D5U.parseAxisParam(a,t[0].shape)[0],i=s.Wap.computeOutShape(t.map((e=>e.shape)),o);if(0===s.D5U.sizeFromShape(i))return n.makeTensorInfo(i,t[0].dtype,[]);const u=t.filter((e=>s.D5U.sizeFromShape(e.shape)>0));if(1===u.length)return wn({inputs:{x:u[0]},backend:n});const l=u.map((e=>e.shape));return s.Wap.assertParamsConsistent(l,o),ba(u,o,n)}const ka={kernelName:s.Eh3,backendName:"webgl",kernelFunc:va};
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class ya{constructor(e,t=!1,n=null,r=!1,a=!1){this.variableNames=["x","W"],this.outputShape=e.outShape;const s=e.padInfo.top,o=e.padInfo.left,i=e.strideHeight,u=e.strideWidth,l=e.dilationHeight,c=e.dilationWidth,d=e.filterHeight,p=e.filterWidth,h=4*Math.floor(e.inChannels/4),f=e.inChannels%4,m="channelsLast"===e.dataFormat,g=m?1:2,x=m?2:3,b=m?3:1;let v="",k="";n&&(v=r?`float activation(float a) {\n          float b = getPreluActivationWeightsAtOutCoords();\n          ${n}\n        }`:a?`float activation(float a) {\n          float b = getLeakyreluAlphaAtOutCoords();\n          ${n}\n        }`:`\n          float activation(float x) {\n            ${n}\n          }\n        `,k="result = activation(result);");const y=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),a&&this.variableNames.push("leakyreluAlpha"),this.userCode=`\n      ${v}\n\n      const ivec2 strides = ivec2(${i}, ${u});\n      const ivec2 pads = ivec2(${s}, ${o});\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d2 = coords[${b}];\n\n        ivec2 xRCCorner =\n            ivec2(coords[${g}], coords[${x}]) * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < ${d}; wR++) {\n          int xR = xRCorner + wR * ${l};\n\n          if (xR < 0 || xR >= ${e.inHeight}) {\n            continue;\n          }\n\n          for (int wC = 0; wC < ${p}; wC++) {\n            int xC = xCCorner + wC * ${c};\n\n            if (xC < 0 || xC >= ${e.inWidth}) {\n              continue;\n            }\n\n            for (int d1 = 0; d1 < ${h}; d1 += 4) {\n              vec4 wValues = vec4(\n                getW(wR, wC, d1, d2),\n                getW(wR, wC, d1 + 1, d2),\n                getW(wR, wC, d1 + 2, d2),\n                getW(wR, wC, d1 + 3, d2)\n              );\n\n              if (${m}) {\n                vec4 xValues = vec4(\n                  getX(batch, xR, xC, d1),\n                  getX(batch, xR, xC, d1 + 1),\n                  getX(batch, xR, xC, d1 + 2),\n                  getX(batch, xR, xC, d1 + 3)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec4 xValues = vec4(\n                  getX(batch, d1, xR, xC),\n                  getX(batch, d1 + 1, xR, xC),\n                  getX(batch, d1 + 2, xR, xC),\n                  getX(batch, d1 + 3, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n            }\n\n            if (${1===f}) {\n\n              if (${m}) {\n                dotProd +=\n                    getX(batch, xR, xC, ${h}) *\n                    getW(wR, wC, ${h}, d2);\n              } else {\n                dotProd +=\n                    getX(batch, ${h}, xR, xC) *\n                    getW(wR, wC, ${h}, d2);\n              }\n\n            } else if (${2===f}) {\n              vec2 wValues = vec2(\n                getW(wR, wC, ${h}, d2),\n                getW(wR, wC, ${h} + 1, d2)\n              );\n\n              if (${m}) {\n                vec2 xValues = vec2(\n                  getX(batch, xR, xC, ${h}),\n                  getX(batch, xR, xC, ${h} + 1)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec2 xValues = vec2(\n                  getX(batch, ${h}, xR, xC),\n                  getX(batch, ${h} + 1, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n\n            } else if (${3===f}) {\n              vec3 wValues = vec3(\n                getW(wR, wC, ${h}, d2),\n                getW(wR, wC, ${h} + 1, d2),\n                getW(wR, wC, ${h} + 2, d2)\n              );\n\n              if (${m}) {\n                vec3 xValues = vec3(\n                  getX(batch, xR, xC, ${h}),\n                  getX(batch, xR, xC, ${h} + 1),\n                  getX(batch, xR, xC, ${h} + 2)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec3 xValues = vec3(\n                  getX(batch, ${h}, xR, xC),\n                  getX(batch, ${h} + 1, xR, xC),\n                  getX(batch, ${h} + 2, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n\n            }\n          }\n        }\n\n        float result = dotProd;\n        ${y}\n        ${k}\n        setOutput(result);\n      }\n    `}}class Ia{constructor(e){this.variableNames=["x","W"],this.outputShape=e.outShape;const t=e.padInfo.front,n=e.padInfo.top,r=e.padInfo.left,a=e.strideDepth,s=e.strideHeight,o=e.strideWidth,i=e.dilationDepth,u=e.dilationHeight,l=e.dilationWidth,c=e.filterDepth,d=e.filterHeight,p=e.filterWidth,h=4*Math.floor(e.inChannels/4),f=e.inChannels%4;this.userCode=`\n      const ivec3 strides = ivec3(${a}, ${s}, ${o});\n      const ivec3 pads = ivec3(${t}, ${n}, ${r});\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int d2 = coords.u;\n\n        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n        int xFCorner = xFRCCorner.x;\n        int xRCorner = xFRCCorner.y;\n        int xCCorner = xFRCCorner.z;\n\n        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get\n        // y(yF, yR, yC, d2). ? = to be determined. : = across all\n        // values in that axis.\n        float dotProd = 0.0;\n        for (int wF = 0; wF < ${c}; wF++) {\n          int xF = xFCorner + wF * ${i};\n\n          if (xF < 0 || xF >= ${e.inDepth}) {\n            continue;\n          }\n\n          for (int wR = 0; wR < ${d}; wR++) {\n            int xR = xRCorner + wR * ${u};\n\n            if (xR < 0 || xR >= ${e.inHeight}) {\n              continue;\n            }\n\n            for (int wC = 0; wC < ${p}; wC++) {\n              int xC = xCCorner + wC * ${l};\n\n              if (xC < 0 || xC >= ${e.inWidth}) {\n                continue;\n              }\n\n              for (int d1 = 0; d1 < ${h}; d1 += 4) {\n                vec4 xValues = vec4(\n                  getX(batch, xF, xR, xC, d1),\n                  getX(batch, xF, xR, xC, d1 + 1),\n                  getX(batch, xF, xR, xC, d1 + 2),\n                  getX(batch, xF, xR, xC, d1 + 3)\n                );\n                vec4 wValues = vec4(\n                  getW(wF, wR, wC, d1, d2),\n                  getW(wF, wR, wC, d1 + 1, d2),\n                  getW(wF, wR, wC, d1 + 2, d2),\n                  getW(wF, wR, wC, d1 + 3, d2)\n                );\n\n                dotProd += dot(xValues, wValues);\n              }\n\n              if (${1===f}) {\n                dotProd +=\n                  getX(batch, xF, xR, xC, ${h}) *\n                  getW(wF, wR, wC, ${h}, d2);\n              } else if (${2===f}) {\n                vec2 xValues = vec2(\n                  getX(batch, xF, xR, xC, ${h}),\n                  getX(batch, xF, xR, xC, ${h} + 1)\n                );\n                vec2 wValues = vec2(\n                  getW(wF, wR, wC, ${h}, d2),\n                  getW(wF, wR, wC, ${h} + 1, d2)\n                );\n                dotProd += dot(xValues, wValues);\n              } else if (${3===f}) {\n                vec3 xValues = vec3(\n                  getX(batch, xF, xR, xC, ${h}),\n                  getX(batch, xF, xR, xC, ${h} + 1),\n                  getX(batch, xF, xR, xC, ${h} + 2)\n                );\n                vec3 wValues = vec3(\n                  getW(wF, wR, wC, ${h}, d2),\n                  getW(wF, wR, wC, ${h} + 1, d2),\n                  getW(wF, wR, wC, ${h} + 2, d2)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    `}}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class wa{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec3"},{name:"pad",type:"ivec2"},{name:"stride",type:"ivec2"},{name:"dilation",type:"ivec2"},{name:"inChannels",type:"int"},{name:"itemsPerBlockRow",type:"int"},{name:"outWidth",type:"int"}],this.outputShape=e,this.enableShapeUniforms=Oe(this.outputShape.length);const{dataFormat:n}=t,r=he(),a="channelsLast"===n,s=a?0:1,o=a?1:2,i=this.enableShapeUniforms?"if(blockIndex < outShape[1] && pos < outShape[0]) {":`if(blockIndex < ${e[1]} && pos < ${e[0]}) {`;let u="";for(let e=0;e<=1;e++)for(let t=0;t<=1;t++)u+=`\n          blockIndex = rc.y + ${t};\n          pos = rc.x + ${e};\n\n          ${i}\n            offsetY = int(blockIndex / outWidth) * stride[0] - pad[0];\n            d0 = offsetY + dilation[0] * (pos / itemsPerBlockRow);\n\n            if(d0 < inputShape[${s}] && d0 >= 0) {\n              // Use custom imod instead mod. On Intel GPU, mod may generate\n              // unexpected value.\n              // https://github.com/tensorflow/tfjs/issues/5447\n              offsetX = imod(blockIndex, outWidth) * stride[1] - pad[1];\n              d1 = offsetX + dilation[1] * (imod(pos, itemsPerBlockRow) /\n                  inChannels);\n\n              if(d1 < inputShape[${o}] && d1 >= 0) {\n\n                ch = imod(pos, inChannels);\n\n                if (${a}) {\n                  innerDims = vec2(d1, ch);\n                  result[${2*e+t}] = getChannel(\n                    getA(d0, int(innerDims.x),\n                    int(innerDims.y)), innerDims);\n                } else {\n                  innerDims = vec2(d0, d1);\n                  result[${2*e+t}] = getChannel(\n                    getA(ch, int(innerDims.x),\n                    int(innerDims.y)), innerDims);\n                }\n              }\n            }\n          }\n        `;this.userCode=`\n      void main() {\n        ivec2 rc = getOutputCoords();\n\n        vec4 result = vec4(0);\n\n        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;\n        vec2 innerDims;\n\n        ${u}\n\n        ${r.output} = result;\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ca({x:e,filter:t,convInfo:n,backend:r,bias:a=null,preluActivationWeights:o=null,leakyreluAlpha:i=0,activation:u=null}){const l=e.shape,c=r.texData.get(e.dataId),d=n.inChannels,p=l[0]*l[1]*l[2],h=n.outChannels,f="channelsLast"===n.dataFormat;let m;const g=[];if(!((1===p||1===h)&&d>1e3)&&c.isPacked&&f&&null!=c.texture&&l[2]%2!=0&&s.D5U.arraysEqual(c.shape.slice(-3),l.slice(-3))){const d=l[0]*l[1]*(l[2]+1),p={dataId:e.dataId,shape:[1,d,n.inChannels],dtype:e.dtype},h=c.shape;c.shape=c.shape.slice(),c.shape[c.shape.length-2]++,s.D5U.assert(Z(c.shape,p.shape),(()=>`packed reshape ${c.shape} to ${p.shape} isn't free`));const f=Vn({inputs:{x:t},backend:r,attrs:{shape:[1,n.inChannels,n.outChannels]}});g.push(f);const x=tr({a:p,b:f,backend:r,transposeA:false,transposeB:false,bias:a,activation:u,preluActivationWeights:o,leakyreluAlpha:i}),b=r.texData.get(x.dataId);s.D5U.assert(b.isPacked,(()=>"batchMatMul result is expected to be packed")),c.shape=h,b.shape=n.outShape,m=wn({inputs:{x},backend:r}),m.shape=n.outShape,g.push(x)}else{const s=Vn({inputs:{x:e},backend:r,attrs:{shape:[1,f?l[0]*l[1]*l[2]:l[0]*l[2]*l[3],n.inChannels]}}),c=Vn({inputs:{x:t},backend:r,attrs:{shape:[1,n.inChannels,n.outChannels]}}),d=tr({a:s,b:c,transposeA:false,transposeB:false,backend:r,bias:a,activation:u,preluActivationWeights:o,leakyreluAlpha:i});m=Vn({inputs:{x:d},backend:r,attrs:{shape:n.outShape}}),g.push(s),g.push(c),g.push(d)}for(const e of g)r.disposeIntermediateTensorInfo(e);return m}function Sa({x:e,filter:t,convInfo:n,backend:r,bias:a=null,preluActivationWeights:o=null,leakyreluAlpha:i=0,activation:u=null}){const{filterWidth:l,filterHeight:c,inChannels:d,outWidth:p,outHeight:h,dataFormat:f}=n,m="channelsLast"===f,g=l*c*d,x=h*p,b=[g,x],v=[],k=Vn({inputs:{x:e},backend:r,attrs:{shape:e.shape.slice(1)}}),y=Vn({inputs:{x:t},backend:r,attrs:{shape:[1,g,s.D5U.sizeFromShape(t.shape)/g]}});v.push(k),v.push(y);const I=new wa(b,n),w=[k.shape,[n.padInfo.top,n.padInfo.left],[n.strideHeight,n.strideWidth],[n.dilationHeight,n.dilationWidth],[n.inChannels],[n.filterWidth*n.inChannels],[n.outWidth]],C=r.runWebGLProgram(I,[k],"float32",w),S=Vn({inputs:{x:C},backend:r,attrs:{shape:[1,b[0],b[1]]}});v.push(C),v.push(S);const $=null!=a,T=null!=o,E="leakyrelu"===u,N=u?On(u,!0):null,R=new Mn(S.shape,y.shape,[1,x,n.outChannels],!0,!1,$,N,T,E),D=[S,y];if(a&&D.push(a),T&&D.push(o),E){const e=r.makeTensorInfo([],"float32",s.D5U.createScalarValue(i,"float32"));D.push(e),v.push(e)}const A=r.runWebGLProgram(R,D,"float32"),F=Vn({inputs:{x:A},backend:r,attrs:{shape:m?[1,h,p,n.outChannels]:[1,n.outChannels,h,p]}});v.push(A);for(const e of v)r.disposeIntermediateTensorInfo(e);return F}const $a={kernelName:s.mhS,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a,filter:o}=t,{strides:i,pad:u,dataFormat:l,dilations:c,dimRoundingMode:d}=r,p=s.Wap.convertConv2DDataFormat(l),h=s.Wap.computeConv2DInfo(a.shape,o.shape,i,c,u,d,!1,p);let f;if(1!==h.filterHeight||1!==h.filterWidth||1!==h.dilationHeight||1!==h.dilationWidth||1!==h.strideHeight||1!==h.strideWidth||"SAME"!==h.padInfo.type&&"VALID"!==h.padInfo.type)if((0,s.OBj)().getBool("WEBGL_CONV_IM2COL")&&1===a.shape[0])f=Sa({x:a,filter:o,convInfo:h,backend:n});else{const e=new ya(h);f=n.runWebGLProgram(e,[a,o],"float32")}else f=Ca({x:a,filter:o,convInfo:h,backend:n});const m=Vn({inputs:{x:f},backend:n,attrs:{shape:h.outShape}});return n.disposeIntermediateTensorInfo(f),m}};
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Ta{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const t=e.strideHeight,n=e.strideWidth,r=e.padInfo.top,a=e.padInfo.left,s="channelsLast"===e.dataFormat;this.userCode=`\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int wR = coords.x;\n        int wC = coords.y;\n        int d1 = coords.z;\n        int d2 = coords.w;\n\n        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int b = 0; b < ${e.batchSize}; b++) {\n          for (int yR = 0; yR < ${e.outHeight}; yR++) {\n            int xR = wR + yR * ${t} - ${r};\n\n            if (xR < 0 || xR >= ${e.inHeight}) {\n              continue;\n            }\n\n            for (int yC = 0; yC < ${e.outWidth}; yC++) {\n              int xC = wC + yC * ${n} - ${a};\n\n              if (xC < 0 || xC >= ${e.inWidth}) {\n                continue;\n              }\n\n              if (${s}) {\n                float dyValue = getDy(b, yR, yC, d2);\n                float xValue = getX(b, xR, xC, d1);\n                dotProd += (xValue * dyValue);\n              } else {\n                float dyValue = getDy(b, d2, yR, yC);\n                float xValue = getX(b, d1, xR, xC);\n                dotProd += (xValue * dyValue);\n              }\n\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    `}}class Ea{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,a=e.strideWidth,s="channelsLast"===e.dataFormat,o=t-1-e.padInfo.top,i=n-1-e.padInfo.left,u=s?1:2,l=s?2:3,c=s?3:1;this.userCode=`\n      const ivec2 pads = ivec2(${o}, ${i});\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords[${c}];\n\n        ivec2 dyCorner = ivec2(coords[${u}], coords[${l}]) - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < ${t}; wR++) {\n          float dyR = float(dyRCorner + wR) / ${r}.0;\n\n          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          int wRPerm = ${t} - 1 - wR;\n\n          for (int wC = 0; wC < ${n}; wC++) {\n            float dyC = float(dyCCorner + wC) / ${a}.0;\n\n            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            int wCPerm = ${n} - 1 - wC;\n\n            for (int d2 = 0; d2 < ${e.outChannels}; d2++) {\n\n              if (${s}) {\n                float xValue = getDy(batch, idyR, idyC, d2);\n                float wValue = getW(wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              } else {\n                float xValue = getDy(batch, d2, idyR, idyC);\n                float wValue = getW(wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              }\n\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    `}}class Na{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const t=e.strideDepth,n=e.strideHeight,r=e.strideWidth,a=e.padInfo.front,s=e.padInfo.top,o=e.padInfo.left;this.userCode=`\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int wF = coords.x;\n        int wR = coords.y;\n        int wC = coords.z;\n        int d1 = coords.w;\n        int d2 = coords.u;\n\n        float dotProd = 0.0;\n\n        for (int b = 0; b < ${e.batchSize}; b++) {\n          for (int yF = 0; yF < ${e.outDepth}; yF++) {\n            int xF = wF + yF * ${t} - ${a};\n\n            if (xF < 0 || xF >= ${e.inDepth}) {\n              continue;\n            }\n\n            for (int yR = 0; yR < ${e.outHeight}; yR++) {\n              int xR = wR + yR * ${n} - ${s};\n\n              if (xR < 0 || xR >= ${e.inHeight}) {\n                continue;\n              }\n\n              for (int yC = 0; yC < ${e.outWidth}; yC++) {\n                int xC = wC + yC * ${r} - ${o};\n\n                if (xC < 0 || xC >= ${e.inWidth}) {\n                  continue;\n                }\n\n                float dyValue = getDy(b, yF, yR, yC, d2);\n                float xValue = getX(b, xF, xR, xC, d1);\n                dotProd += (xValue * dyValue);\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    `}}class Ra{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const t=e.filterDepth,n=e.filterHeight,r=e.filterWidth,a=e.strideDepth,s=e.strideHeight,o=e.strideWidth,i=t-1-e.padInfo.front,u=n-1-e.padInfo.top,l=r-1-e.padInfo.left;this.userCode=`\n      const ivec3 pads = ivec3(${i}, ${u}, ${l});\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int d1 = coords.u;\n\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyFCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        float dotProd = 0.0;\n        for (int wF = 0; wF < ${t}; wF++) {\n          float dyF = float(dyFCorner + wF) / ${a}.0;\n\n          if (dyF < 0.0 || dyF >= ${e.outDepth}.0 || fract(dyF) > 0.0) {\n            continue;\n          }\n          int idyF = int(dyF);\n\n          int wFPerm = ${t} - 1 - wF;\n\n          for (int wR = 0; wR < ${n}; wR++) {\n            float dyR = float(dyRCorner + wR) / ${s}.0;\n\n            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||\n              fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            int wRPerm = ${n} - 1 - wR;\n\n            for (int wC = 0; wC < ${r}; wC++) {\n              float dyC = float(dyCCorner + wC) / ${o}.0;\n\n              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              int wCPerm = ${r} - 1 - wC;\n\n              for (int d2 = 0; d2 < ${e.outChannels}; d2++) {\n                float xValue = getDy(batch, idyF, idyR, idyC, d2);\n                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    `}}const Da={kernelName:s.wUP,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a,dy:o}=t,{strides:i,pad:u,dataFormat:l,dimRoundingMode:c,filterShape:d}=r,p=s.Wap.convertConv2DDataFormat(l),h=s.Wap.computeConv2DInfo(a.shape,d,i,1,u,c,!1,p),f=new Ta(h);return n.runWebGLProgram(f,[a,o],"float32")}};const Aa={kernelName:s.wm,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{dy:a,filter:o}=t,{inputShape:i,strides:u,pad:l,dataFormat:c,dimRoundingMode:d}=r,p=s.Wap.convertConv2DDataFormat(c),h=s.Wap.computeConv2DInfo(i,o.shape,u,1,l,d,!1,p),f=new Ea(h);return n.runWebGLProgram(f,[a,o],"float32")}};const Fa={kernelName:s.x12,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a,filter:o}=t,{strides:i,pad:u,dilations:l}=r,c=s.Wap.computeConv3DInfo(a.shape,o.shape,i,l,u),d=new Ia(c);return n.runWebGLProgram(d,[a,o],"float32")}};const _a={kernelName:s.o2y,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a,dy:o}=t,{strides:i,pad:u,filterShape:l}=r,c=s.Wap.computeConv3DInfo(a.shape,l,i,1,u),d=new Na(c);return n.runWebGLProgram(d,[a,o],"float32")}};const Oa={kernelName:s.ik2,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{dy:a,filter:o}=t,{pad:i,strides:u,inputShape:l}=r,c=s.Wap.computeConv3DInfo(l,o.shape,u,1,i),d=new Ra(c);return n.runWebGLProgram(d,[a,o],"float32")}},Ma=Fn({opSnippet:"if (isnan(x)) return x;\n  return cos(x);\n"}),Ua={kernelName:s.mc4,backendName:"webgl",kernelFunc:Ma},Pa=Fn({opSnippet:"\n  float e2x = exp(-x);\n  return (e2x + 1.0 / e2x) / 2.0;\n"}),Wa={kernelName:s.TR1,backendName:"webgl",kernelFunc:Pa};
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Ba{constructor(e,t,n,r,a){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];const[s,o,i,u]=e,[l]=t,[c,d]=n;this.outputShape=[l,c,d,u];const p="bilinear"===r?1:0,[h,f]=[o-1+".0",i-1+".0"],[m,g,x]=c>1?[""+(o-1)/(c-1),"(y2-y1) * height_ratio",`y1*${h} + float(y)*(height_scale)`]:["0.0","0.0",`0.5 * (y1+y2) * ${h}`],[b,v,k]=d>1?[""+(i-1)/(d-1),"(x2-x1) * width_ratio",`x1*${f} + float(x)*(width_scale)`]:["0.0","0.0",`0.5 * (x1+x2) * ${f}`];this.userCode=`\n      const float height_ratio = float(${m});\n      const float width_ratio = float(${b});\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int y = coords[1];\n        int x = coords[2];\n        int d = coords[3];\n\n        // get box vals\n        float y1 = getBoxes(b,0);\n        float x1 = getBoxes(b,1);\n        float y2 = getBoxes(b,2);\n        float x2 = getBoxes(b,3);\n\n        // get image in batch index\n        int bInd = round(getBoxInd(b));\n        if(bInd < 0 || bInd >= ${s}) {\n          return;\n        }\n\n        float height_scale = ${g};\n        float width_scale = ${v};\n\n        float in_y = ${x};\n        if( in_y < 0.0 || in_y > ${h} ) {\n          setOutput(float(${a}));\n          return;\n        }\n        float in_x = ${k};\n        if( in_x < 0.0 || in_x > ${f} ) {\n          setOutput(float(${a}));\n          return;\n        }\n\n        vec2 sourceFracIndexCR = vec2(in_x,in_y);\n        if(${p} == 1) {\n          // Compute the four integer indices.\n          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);\n          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));\n\n          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);\n          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);\n          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);\n          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);\n\n          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);\n\n          float top = topLeft + (topRight - topLeft) * fracCR.x;\n          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;\n          float newValue = top + (bottom - top) * fracCR.y;\n          setOutput(newValue);\n        } else {\n          // Compute the coordinators of nearest neighbor point.\n          ivec2 sourceNearestCR = ivec2(floor(\n            sourceFracIndexCR + vec2(0.5,0.5)));\n          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);\n          setOutput(newValue);\n        }\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const La={kernelName:s.VcC,backendName:"webgl",kernelFunc:e=>{const{inputs:t,backend:n,attrs:r}=e,{image:a,boxes:s,boxInd:o}=t,{cropSize:i,method:u,extrapolationValue:l}=r,c=new Ba(a.shape,s.shape,i,u,l);return n.runWebGLProgram(c,[a,s,o],"float32")}};class za{constructor(e,t,n){this.variableNames=["x"],this.customUniforms=[{name:"index",type:"float"}],this.outputShape=e;const r=e.length,a=t?"0.0":`getX(${Va(r,"coords")})`,s=e[e.length-1];let o="",i="";t?(o=n?"end != "+(s-1):"end != 0",i=n?"end + 1":"end - 1"):(o=n?`end + pow2 < ${s}`:"end >= pow2",i=n?"end + pow2":"end - pow2"),this.userCode=`\n      void main() {\n        ${Re(r)} coords = getOutputCoords();\n        int end = ${Ga(r,"coords")};\n        float val = ${a};\n        int pow2 = int(pow(2.0, index));\n        if (${o}) {\n          int idx = ${i};\n          ${Ga(r,"coords")} = idx;\n          val += getX(${Va(r,"coords")});\n        }\n        setOutput(val);\n      }\n    `}}function Va(e,t){if(1===e)return`${t}`;if(2===e)return`${t}.x, ${t}.y`;if(3===e)return`${t}.x, ${t}.y, ${t}.z`;if(4===e)return`${t}.x, ${t}.y, ${t}.z, ${t}.w`;throw Error(`Cumulative sum for rank ${e} is not yet supported`)}function Ga(e,t){if(1===e)return`${t}`;if(2===e)return`${t}.y`;if(3===e)return`${t}.z`;if(4===e)return`${t}.w`;throw Error(`Cumulative sum for rank ${e} is not yet supported`)}const Ha={kernelName:s.iHb,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{axis:o,exclusive:i,reverse:u}=r,l=a.shape.length,c=s.Wap.getAxesPermutation([o],l);let d=a;null!=c&&(d=Jn({inputs:{x:a},backend:n,attrs:{perm:c}}));const p=s.Wap.getInnerMostAxes(1,l)[0];if(p!==l-1)throw new Error(`WebGL cumsum shader expects an inner-most axis=${a.shape.length-1} but got axis=${o}`);const h=d.shape[p];let f=wn({inputs:{x:d},backend:n});for(let e=0;e<=Math.ceil(Math.log2(h))-1;e++){const t=new za(d.shape,!1,u),r=[[e]],a=f;f=n.runWebGLProgram(t,[f],f.dtype,r),n.disposeIntermediateTensorInfo(a)}if(i){const e=new za(d.shape,i,u),t=f;f=n.runWebGLProgram(e,[f],f.dtype),n.disposeIntermediateTensorInfo(t)}if(null!=c){const e=Jn({inputs:{x:f},backend:n,attrs:{perm:s.Wap.getUndoAxesPermutation(c)}});return n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(d),e}return f}};const ja={kernelName:s.QRR,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a,weights:s}=t,{size:o,binaryOutput:i}=r;if(1===a.shape.length){const e=n.readSync(a.dataId),t=n.readSync(s.dataId),r=ht(e,t,s.dtype,s.shape,o);return n.makeTensorInfo([o],s.dtype,r)}if(2===a.shape.length){const e=n.bufferSync(a),t=n.bufferSync(s),r=ft(e,t,o,i);return n.makeTensorInfo(r.shape,s.dtype,r.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${a.shape.length}.`)}};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Xa{constructor(e,t,n){this.variableNames=["x"],this.outputShape=[],this.outputShape=e,this.blockSize=t,this.dataFormat=n,this.userCode=`\n    void main() {\n      ivec4 coords = getOutputCoords();\n      int b = coords[0];\n      int h = ${this.getHeightCoordString()};\n      int w = ${this.getWidthCoordString()};\n      int d = ${this.getDepthCoordString()};\n\n      int in_h = h / ${t};\n      int offset_h = imod(h, ${t});\n      int in_w = w / ${t};\n      int offset_w = imod(w, ${t});\n      int offset_d = (offset_h * ${t} + offset_w) *\n        ${this.getOutputDepthSize()};\n      int in_d = d + offset_d;\n\n      float result = ${this.getInputSamplingString()};\n      setOutput(result);\n    }\n  `}getHeightCoordString(){return"NHWC"===this.dataFormat?"coords[1]":"coords[2]"}getWidthCoordString(){return"NHWC"===this.dataFormat?"coords[2]":"coords[3]"}getDepthCoordString(){return"NHWC"===this.dataFormat?"coords[3]":"coords[1]"}getOutputDepthSize(){return"NHWC"===this.dataFormat?this.outputShape[3]:this.outputShape[1]}getInputSamplingString(){return"NHWC"===this.dataFormat?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}}const qa={kernelName:s.T0n,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{blockSize:o,dataFormat:i}=r;s.D5U.assert(o>1,(()=>`blockSize should be > 1 for depthToSpace, but was: ${o}`));const u=a.shape[0],l="NHWC"===i?a.shape[1]:a.shape[2],c="NHWC"===i?a.shape[2]:a.shape[3],d="NHWC"===i?a.shape[3]:a.shape[1],p=l*o,h=c*o,f=d/(o*o),m=new Xa("NHWC"===i?[u,p,h,f]:[u,f,p,h],o,i);return n.runWebGLProgram(m,[a],a.dtype)}};
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Ka{constructor(e,t=!1,n=null,r=!1,a=!1){this.variableNames=["x","W"],this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=Oe(this.outputShape.length);const s=e.filterHeight,o=e.filterWidth,i=e.outChannels/e.inChannels;let u="",l="";n&&(u=r?`float activation(float a) {\n          float b = getPreluActivationWeightsAtOutCoords();\n          ${n}\n        }`:a?`float activation(float a) {\n          float b = getLeakyreluAlphaAtOutCoords();\n          ${n}\n        }`:`\n          float activation(float x) {\n            ${n}\n          }\n        `,l="result = activation(result);");const c=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),a&&this.variableNames.push("leakyreluAlpha"),this.userCode=`\n      ${u}\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int d2 = coords.w;\n        int d1 = d2 / ${i};\n        int q = d2 - d1 * ${i};\n\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.\n        for (int wR = 0; wR < ${s}; wR++) {\n          int xR = xRCorner + wR * dilations[0];\n\n          if (xR < 0 || xR >= inDims[0]) {\n            continue;\n          }\n\n          for (int wC = 0; wC < ${o}; wC++) {\n            int xC = xCCorner + wC * dilations[1];\n\n            if (xC < 0 || xC >= inDims[1]) {\n              continue;\n            }\n\n            float xVal = getX(batch, xR, xC, d1);\n            float wVal = getW(wR, wC, d1, q);\n            dotProd += xVal * wVal;\n          }\n        }\n\n        float result = dotProd;\n        ${c}\n        ${l}\n        setOutput(result);\n      }\n    `}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Ya{constructor(e,t=!1,n=null,r=!1,a=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=Oe(this.outputShape.length);const o=e.outChannels/e.inChannels,i=e.padInfo.left,u=e.strideWidth,l=e.dilationWidth,c=e.filterHeight,d=e.filterWidth,p=d;let h="\n      int xR; int xC; int xCOffset;\n      vec4 wTexel; vec4 previous; vec4 final;";for(let e=0;e<d;e++)h+=`\n          vec4 xTexelC${2*e};\n          int xTexelC${2*e}Ready;\n          vec4 xTexelC${2*e+1};\n          int xTexelC${2*e+1}Ready;\n          vec4 xC${e};`;for(let e=0;e<c;e++){for(let e=0;e<d;e++)h+=`\n          xTexelC${2*e} = vec4(0.0);\n          xTexelC${2*e}Ready = 0;\n          xTexelC${2*e+1} = vec4(0.0);\n          xTexelC${2*e+1}Ready = 0;\n          xC${e} = vec4(0.0);`;h+=`\n        xR = xRCorner + ${e} * dilations[0];\n        if (xR >=0 && xR < inDims[0]) {\n      `;for(let t=0;t<(p+1)/2;t++){const n=2*t;if(h+=`\n          xC = xCCorner + ${n*l};\n          `,1===u){if(n<d&&(i%2==1?(h+=`\n                xCOffset = xC + 1;\n                if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n}Ready == 0) {\n                  xTexelC${n} = getX(batch, xR, xCOffset, d1);\n\n                  // Need to manually clear unused channels in case\n                  // we're reading from recycled texture.\n                  if (xCOffset + 1 >= inDims[1]) {\n                    xTexelC${n}.zw = vec2(0.0);\n                  }\n                  xTexelC${n}Ready = 1;\n                }\n              `,h+=1===l&&n>0?`\n                xC${n} = vec4(xTexelC${n-2}.zw, xTexelC${n}.xy);\n                `:`\n                  xCOffset = xC + 1 - 2;\n\n                  if (xCOffset >= 0 && xCOffset < inDims[1]) {\n                    previous = getX(batch, xR, xCOffset, d1);\n\n                    // Need to manually clear unused channels in case\n                    // we're reading from recycled texture.\n                    if (xCOffset + 1 >= inDims[1]) {\n                      previous.zw = vec2(0.0);\n                    }\n\n                    xC${n} = vec4(previous.zw, xTexelC${n}.xy);\n                  } else {\n                    xC${n} = vec4(0.0, 0.0, xTexelC${n}.xy);\n                  }\n                  `):h+=`\n                if (xC >= 0 && xC < inDims[1] && xTexelC${n}Ready == 0) {\n                  xTexelC${n} = getX(batch, xR, xC, d1);\n                  if (xC + 1 >= inDims[1]) {\n                    xTexelC${n}.zw = vec2(0.0);\n                  }\n                  xTexelC${n}Ready = 1;\n                }\n\n                xC${n} = xTexelC${n};\n                `,n+1<d)){const e=i%2==0?s.D5U.nearestLargerEven(l):l;l%2==0&&i%2==1||l%2!=0&&i%2!=1?(h+=`\n                  xCOffset = xC + imod(pads[1], 2) + ${e};\n\n                  if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n+1}Ready == 0) {\n                    xTexelC${n+1} = getX(batch, xR, xCOffset, d1);\n\n                    // Need to manually clear unused channels in case\n                    // we're reading from recycled texture.\n                    if (xCOffset + 1 >= inDims[1]) {\n                      xTexelC${n+1}.zw = vec2(0.0);\n                    }\n                    xTexelC${n+1}Ready = 1;\n                  }\n                  `,l>1&&(h+=`\n                    xCOffset -= 2;\n                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n}Ready == 0) {\n                      xTexelC${n} = getX(batch, xR, xCOffset, d1);\n                      xTexelC${n}Ready = 1;\n                    }\n                    `),h+=`\n                  xC${n+1} = vec4(xTexelC${n}.zw, xTexelC${n+1}.xy);\n                  `):h+=1===e?`\n                    xC${n+1} = xTexelC${n};\n                    `:`\n                    xCOffset = xC + ${e};\n\n                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n+1}Ready == 0) {\n                      xTexelC${n+1} = getX(batch, xR, xCOffset, d1);\n                      if (xCOffset + 1 >= inDims[1]) {\n                        xTexelC${n+1}.zw = vec2(0.0);\n                      }\n                      xTexelC${n+1}Ready = 1;\n                    }\n\n                    xC${n+1} = xTexelC${n+1};\n                    `}}else n<d&&(i%2==1?(h+=`\n                xCOffset = xC + 1 - strides[1];\n                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n}Ready == 0) {\n                  xTexelC${n} = getX(batch, xR, xCOffset, d1);\n                  // Need to manually clear unused channels in case\n                  // we're reading from recycled texture.\n                  if (xCOffset + 1 >= inDims[1]) {\n                    xTexelC${n}.zw = vec2(0.0);\n                  }\n                  xTexelC${n}Ready = 1;\n                }\n\n                if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${n+1}Ready == 0) {\n                  xTexelC${n+1} = getX(batch, xR, xC + 1, d1);\n                  // Need to manually clear unused channels in case\n                  // we're reading from recycled texture.\n                  if (xC + 2 >= inDims[1]) {\n                    xTexelC${n+1}.zw = vec2(0.0);\n                  }\n                  xTexelC${n+1}Ready = 1;\n                }\n\n                xC${n} = vec4(xTexelC${n}.zw, xTexelC${n+1}.zw);\n              `,n+1<d&&(h+=`\n                  final = vec4(0.0);\n                  xCOffset = xC + 1 + strides[1];\n                  if(xCOffset >= 0 && xCOffset < inDims[1]) {\n                    final = getX(batch, xR, xCOffset, d1);\n                  }\n                  xC${n+1} = vec4(xTexelC${n+1}.xy, final.xy);\n                `)):(h+=`\n                if(xC >= 0 && xC < inDims[1] && xTexelC${n}Ready == 0) {\n                  xTexelC${n} = getX(batch, xR, xC, d1);\n                  if (xC + 1 >= inDims[1]) {\n                    xTexelC${n}.zw = vec2(0.0);\n                  }\n                  xTexelC${n}Ready = 1;\n                }\n\n                xCOffset = xC + strides[1];\n                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n+1}Ready == 0) {\n                  xTexelC${n+1} = getX(batch, xR, xCOffset, d1);\n                  if (xCOffset + 1 >= inDims[1]) {\n                    xTexelC${n+1}.zw = vec2(0.);\n                  }\n                  xTexelC${n+1}Ready = 1;\n                }\n\n                xC${n} = vec4(\n                  xTexelC${n}.xy, xTexelC${n+1}.xy);\n              `,n+1<d&&(h+=`\n                  xC${n+1} = vec4(xTexelC${n}.zw, xTexelC${n+1}.zw);\n                `)));n<d&&(h+=`\n            wTexel = getW(${e}, ${n}, d1, q);\n            dotProd += xC${n} * vec4(wTexel.xz, wTexel.xz);\n          `,n+1<d&&(h+=`\n              wTexel = getW(${e}, ${n+1}, d1, q);\n              dotProd += xC${n+1} * vec4(wTexel.xz, wTexel.xz);\n            `))}h+="\n        }\n      "}let f="",m="";n&&(f=r?`vec4 activation(vec4 a) {\n          vec4 b = getPreluActivationWeightsAtOutCoords();\n          ${n}\n        }`:a?`vec4 activation(vec4 a) {\n          vec4 b = getLeakyreluAlphaAtOutCoords();\n          ${n}\n        }`:`vec4 activation(vec4 x) {\n          ${n}\n        }`,m="result = activation(result);");const g=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),a&&this.variableNames.push("leakyreluAlpha"),this.userCode=`\n      ${f}\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int d2 = coords.w;\n        int d1 = d2 / ${o};\n        int q = d2 - d1 * ${o};\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.\n        vec4 dotProd = vec4(0.000000000000001);\n\n        ${h}\n\n        vec4 result = dotProd - vec4(0.000000000000001);\n        ${g}\n        ${m}\n        setOutput(result);\n      }\n    `}}const Za={kernelName:s.cie,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a,filter:o}=t,{strides:i,pad:u,dilations:l,dimRoundingMode:c}=r;let d=l;null==d&&(d=[1,1]),s.D5U.assert(s.Wap.eitherStridesOrDilationsAreOne(i,d),(()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${i} and dilations '${d}'`));const p=s.Wap.computeConv2DInfo(a.shape,o.shape,i,d,u,c,!0);let h;h=(0,s.OBj)().getBool("WEBGL_PACK_DEPTHWISECONV")&&p.strideWidth<=2&&p.outChannels/p.inChannels==1?new Ya(p):new Ka(p);const f=[[p.padInfo.top,p.padInfo.left],[p.strideHeight,p.strideWidth],[p.dilationHeight,p.dilationWidth],[p.inHeight,p.inWidth]];return n.runWebGLProgram(h,[a,o],"float32",f)}};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Qa{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const t=e.strideHeight,n=e.strideWidth,r=e.padInfo.top,a=e.padInfo.left,s=e.outChannels/e.inChannels;this.userCode=`\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int wR = coords.x;\n        int wC = coords.y;\n        int d1 = coords.z;\n        int dm = coords.w;\n        int d2 = d1 * ${s} + dm;\n\n        float dotProd = 0.0;\n\n        // TO DO: Vec4 over the batch size\n        for (int b = 0; b < ${e.batchSize}; b++) {\n          for (int yR = 0; yR < ${e.outHeight}; yR++) {\n            int xR = wR + yR * ${t} - ${r};\n\n            if (xR < 0 || xR >= ${e.inHeight}) {\n              continue;\n            }\n\n            for (int yC = 0; yC < ${e.outWidth}; yC++) {\n              int xC = wC + yC * ${n} - ${a};\n\n              if (xC < 0 || xC >= ${e.inWidth}) {\n                continue;\n              }\n\n              float dyValue = getDy(b, yR, yC, d2);\n              float xValue = getX(b, xR, xC, d1);\n              dotProd += (xValue * dyValue);\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    `}}class Ja{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,a=e.strideWidth,s=t-1-e.padInfo.top,o=n-1-e.padInfo.left,i=e.outChannels/e.inChannels;this.userCode=`\n      const ivec2 pads = ivec2(${s}, ${o});\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords[3];\n        ivec2 dyCorner = coords.yz - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        float dotProd = 0.0;\n\n        for (int wR = 0; wR < ${t}; wR++) {\n          float dyR = float(dyRCorner + wR) / ${r}.0;\n\n          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          int wRPerm = ${t} - 1 - wR;\n\n          for (int wC = 0; wC < ${n}; wC++) {\n            float dyC = float(dyCCorner + wC) / ${a}.0;\n\n            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            int wCPerm = ${n} - 1 - wC;\n\n            // TO DO: Vec4 over the channelMul\n            for (int dm = 0; dm < ${i}; dm++) {\n              int d2 = d1 * ${i} + dm;\n              float xValue = getDy(batch, idyR, idyC, d2);\n              float wValue = getW(wRPerm, wCPerm, d1, dm);\n              dotProd += xValue * wValue;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    `}}const es={kernelName:s.sL$,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a,dy:o}=t,{strides:i,dilations:u,pad:l,dimRoundingMode:c,filterShape:d}=r,p=s.Wap.computeConv2DInfo(a.shape,d,i,u,l,c,!0),h=new Qa(p);return n.runWebGLProgram(h,[a,o],"float32")}};const ts={kernelName:s.y7R,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{dy:a,filter:o}=t,{strides:i,dilations:u,pad:l,dimRoundingMode:c,inputShape:d}=r,p=s.Wap.computeConv2DInfo(d,o.shape,i,u,l,c,!0),h=new Ja(p);return n.runWebGLProgram(h,[a,o],"float32")}};
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class ns{constructor(e){this.variableNames=["X"],this.outputShape=[e,e],this.userCode="\n      void main() {\n          ivec2 coords = getOutputCoords();\n          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;\n          setOutput(val);\n      }\n    "}}const rs={kernelName:s.$w,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n}=e,{x:r}=t,a=[...r.shape,...r.shape],o=s.D5U.sizeFromShape(r.shape),i=Vn({inputs:{x:r},backend:n,attrs:{shape:[o]}}),u=new ns(o),l=n.runWebGLProgram(u,[i],i.dtype),c=Vn({inputs:{x:l},backend:n,attrs:{shape:a}});return n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(l),c}};
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class as{constructor(e){this.variableNames=["x","W"],this.outputShape=e.outShape;const{inHeight:t,inWidth:n,padInfo:r,strideHeight:a,strideWidth:s,filterHeight:o,filterWidth:i,dilationHeight:u,dilationWidth:l}=e,{top:c,left:d}=r;this.userCode=`\n      const ivec2 strides = ivec2(${a}, ${s});\n      const ivec2 pads = ivec2(${c}, ${d});\n      const float neg_infinity = -3.4e38;\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        int d1 = coords.w;\n        ivec2 outTopLeftCorner =\n            coords.yz * strides - pads;\n        int hBeg = outTopLeftCorner.x;\n        int wBeg = outTopLeftCorner.y;\n\n        float curVal = neg_infinity;\n        for (int h = 0; h < ${o}; h++) {\n          int hIn = hBeg + h * ${u};\n\n          if (hIn >= 0 && hIn < ${t}) {\n            for (int w = 0; w < ${i}; w++) {\n              int wIn = wBeg + w * ${l};\n\n              if (wIn >= 0 && wIn < ${n}) {\n                float xVal = getX(batch, hIn, wIn, d1);\n                float wVal = getW(h, w, d1);\n\n                float val = xVal + wVal;\n                if (val > curVal) {\n                  curVal = val;\n                }\n              }\n            }\n          }\n        }\n\n        float result = curVal;\n        setOutput(result);\n      }\n    `}}const ss={kernelName:s.p4S,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a,filter:o}=t,{strides:i,pad:u,dilations:l}=r,c=s.Wap.computeDilation2DInfo(a.shape,o.shape,i,u,"NHWC",l);let d;const p=new as(c);d=n.runWebGLProgram(p,[a,o],"float32");const h=Vn({inputs:{x:d},backend:n,attrs:{shape:c.outShape}});return n.disposeIntermediateTensorInfo(d),h}};const os={kernelName:s.$g6,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{equation:a}=r,o=t,{allDims:i,summedDims:u,idDims:l}=s.Wap.decodeEinsumEquation(a,o.length);s.Wap.checkEinsumDimSizes(i.length,l,o);const{path:c,steps:d}=s.Wap.getEinsumComputePath(u,l),p=d.length;let h=null,f=i.length;const m=[];for(let e=0;e<p;++e){for(const t of d[e]){const{permutationIndices:e,expandDims:r}=s.Wap.getEinsumPermutation(f,l[t]);let a;s.Wap.isIdentityPermutation(e)?a=o[t]:(a=Jn({inputs:{x:o[t]},backend:n,attrs:{perm:e}}),m.push(a));const i=a.shape.slice();for(let e=0;e<r.length;++e)i.splice(r[e],0,1);s.D5U.arraysEqual(a.shape,i)||(a=Vn({inputs:{x:a},backend:n,attrs:{shape:i}}),m.push(a)),null===h?h=a:(h=Ln({inputs:{a,b:h},backend:n}),m.push(h))}e<p-1&&(c[e]>=0&&(h=Zn({inputs:{x:h},backend:n,attrs:{axis:c[e]-(i.length-f),keepDims:!1}}),m.push(h)),f--)}for(const e of m)e!==h&&n.disposeIntermediateTensorInfo(e);return h}},is=Fn({opSnippet:"return (x >= 0.0) ? x : (exp(x) - 1.0);",packedOpSnippet:"\n  vec4 result;\n\n  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);\n  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);\n  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);\n  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);\n\n  return result;\n"}),us={kernelName:s.SX0,backendName:"webgl",kernelFunc:is},ls={kernelName:s.HEU,backendName:"webgl",kernelFunc:e=>{const{inputs:t,backend:n}=e,{dy:r,y:a}=t,o=(0,s.OBj)().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new In("\n  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));\n  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));\n",r.shape,a.shape):new yn("return (b >= 1.0) ? a : a * (b + 1.0);",r.shape,a.shape);return n.runWebGLProgram(o,[r,a],r.dtype)}},cs=_n({opSnippet:"return float(a == b);",packedOpSnippet:"\n  return vec4(equal(a, b));\n",dtype:"bool",cpuKernelImpl:xt}),ds={kernelName:s.hdR,backendName:"webgl",kernelFunc:cs},ps=Fn({opSnippet:`\n  // Error function is calculated approximately with elementary function.\n  // See "Handbook of Mathematical Functions with Formulas,\n  // Graphs, and Mathematical Tables", Abramowitz and Stegun.\n  float p = ${s.Wap.ERF_P};\n  float a1 = ${s.Wap.ERF_A1};\n  float a2 = ${s.Wap.ERF_A2};\n  float a3 = ${s.Wap.ERF_A3};\n  float a4 = ${s.Wap.ERF_A4};\n  float a5 = ${s.Wap.ERF_A5};\n\n  float sign = sign(x);\n  x = abs(x);\n  float t = 1.0 / (1.0 + p * x);\n  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));\n`}),hs={kernelName:s.Omj,backendName:"webgl",kernelFunc:ps},fs="return exp(x);",ms=Fn({opSnippet:fs,packedOpSnippet:fs,cpuKernelImpl:bt}),gs={kernelName:s.NEP,backendName:"webgl",kernelFunc:ms};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function xs(e){const{inputs:t,attrs:n,backend:r}=e,{dim:a}=n,{input:o}=t,i=o.shape.length,u=o.shape.slice();let l=a;return a<0&&(s.D5U.assert(-(i+1)<=a,(()=>`Axis must be in the interval [${-(i+1)}, ${i}]`)),l=i+a+1),u.splice(l,0,1),Vn({inputs:{x:o},backend:r,attrs:{shape:u}})}const bs={kernelName:s.YFo,backendName:"webgl",kernelFunc:xs},vs="return exp(x) - 1.0;",ks=Fn({opSnippet:vs,packedOpSnippet:vs,cpuKernelImpl:vt}),ys={kernelName:s.Y0y,backendName:"webgl",kernelFunc:ks};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Is{constructor(e,t,n){this.variableNames=["real","imag"];const r=t[1];this.outputShape=t;const a=n?`2.0 * ${Math.PI}`:`-2.0 * ${Math.PI}`,s=n?`${r}.0`:"1.0";let o;if("real"===e)o="return real * expR - imag * expI;";else{if("imag"!==e)throw new Error(`FFT component must be either "real" or "imag", got ${e}.`);o="return real * expI + imag * expR;"}this.userCode=`\n      const float exponentMultiplier = ${a};\n\n      float unaryOpComplex(float real, float expR, float imag, float expI) {\n        ${o}\n      }\n\n      float mulMatDFT(int batch, int index) {\n        float indexRatio = float(index) / float(${r});\n        float exponentMultiplierTimesIndexRatio =\n            exponentMultiplier * indexRatio;\n\n        float result = 0.0;\n\n        for (int i = 0; i < ${r}; i++) {\n          // x = (-2|2 * PI / N) * index * i;\n          float x = exponentMultiplierTimesIndexRatio * float(i);\n          float expR = cos(x);\n          float expI = sin(x);\n          float real = getReal(batch, i);\n          float imag = getImag(batch, i);\n\n          result +=\n              unaryOpComplex(real, expR, imag, expI) / ${s};\n        }\n\n        return result;\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        setOutput(mulMatDFT(coords[0], coords[1]));\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ws(e,t,n){const r=n.texData.get(e.dataId),a=s.D5U.sizeFromShape(e.shape),o=e.shape[e.shape.length-1],i=Vn({inputs:{x:e},backend:n,attrs:{shape:[a/o,o]}}),u=i.shape,l=new Is("real",u,t),c=new Is("imag",u,t),d=[{dataId:r.complexTensorInfos.real.dataId,dtype:r.complexTensorInfos.real.dtype,shape:u},{dataId:r.complexTensorInfos.imag.dataId,dtype:r.complexTensorInfos.imag.dtype,shape:u}],p=n.runWebGLProgram(l,d,"float32"),h=n.runWebGLProgram(c,d,"float32"),f=Sn({inputs:{real:p,imag:h},backend:n});n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(h);const m=Vn({inputs:{x:f},backend:n,attrs:{shape:e.shape}});return n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(f),m}const Cs={kernelName:s.vwp,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n}=e,{input:r}=t;return ws(r,!1,n)}};
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Ss{constructor(e,t){this.outputShape=[],this.customUniforms=[{name:"value",type:"float"}],this.variableNames=["x"],this.outputShape=e,this.userCode="\n      void main() {\n        // Input can be obtained from uniform value.\n        setOutput(value);\n      }\n    "}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function $s(e){const{backend:t,attrs:n}=e,{shape:r,value:a}=n;let{dtype:o}=n;if(o=o||s.D5U.inferDtype(a),"string"===o){const e=s.D5U.getArrayFromDType(o,s.D5U.sizeFromShape(r));return e.fill(a),t.makeTensorInfo(r,o,e)}{const e=new Ss(r,a),n=[[a]];return t.runWebGLProgram(e,[],o,n)}}const Ts={kernelName:s.deh,backendName:"webgl",kernelFunc:$s};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Es{constructor(e){this.variableNames=["Image"],this.outputShape=[];const t=e[2];this.outputShape=e,this.userCode=`\n        void main() {\n          ivec4 coords = getOutputCoords();\n          int x = coords[2];\n\n          int coordX = ${t} - x - 1;\n          float outputValue;\n          if(coordX >= 0 && coordX < ${t}) {\n            outputValue = getImage(coords[0], coords[1], coordX, coords[3]);\n          } else {\n            outputValue = getImage(coords[0], coords[1], coords[2], coords[3]);\n          }\n          setOutput(outputValue);\n        }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Ns={kernelName:s.Uyb,backendName:"webgl",kernelFunc:({inputs:e,backend:t})=>{const{image:n}=e,r=t,a=new Es(n.shape);return r.runWebGLProgram(a,[n],n.dtype)}},Rs="return floor(x);",Ds=Fn({opSnippet:Rs,packedOpSnippet:Rs,cpuKernelImpl:kt}),As={kernelName:s.OR,backendName:"webgl",kernelFunc:Ds},Fs=_n({opSnippet:"\n  float s = sign(a) * sign(b);\n  int ia = round(a);\n  int ib = round(b);\n  if (ib != 0) {\n    // Windows (D3D) wants guaranteed non-zero int division at compile-time.\n    return float(idiv(ia, ib, s));\n  } else {\n    return NAN;\n  }\n",packedOpSnippet:"\n  ivec4 ia = round(a);\n  ivec4 ib = round(b);\n  bvec4 cond = notEqual(ib, ivec4(0));\n  ivec4 result = ivec4(0);\n  vec4 s = sign(a) * sign(b);\n\n  // Windows (D3D) wants guaranteed non-zero int division at compile-time.\n  if (cond[0]) {\n    result[0] = idiv(ia[0], ib[0], s[0]);\n  }\n  if (cond[1]) {\n    result[1] = idiv(ia[1], ib[1], s[1]);\n  }\n  if (cond[2]) {\n    result[2] = idiv(ia[2], ib[2], s[2]);\n  }\n  if (cond[3]) {\n    result[3] = idiv(ia[3], ib[3], s[3]);\n  }\n  return vec4(result);\n",dtype:"int32"}),_s={kernelName:s.jeX,backendName:"webgl",kernelFunc:Fs};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Os{constructor(e){this.variableNames=["A"];const t=he(),[n,r]=e;this.outputShape=e,this.userCode=`\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int texR = coords[0];\n        int texC = coords[1];\n        int depth = coords[2];\n        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${r}.0, ${n}.0);\n\n        vec4 values = ${t.texture2D}(A, uv);\n        float value;\n        if (depth == 0) {\n          value = values.r;\n        } else if (depth == 1) {\n          value = values.g;\n        } else if (depth == 2) {\n          value = values.b;\n        } else if (depth == 3) {\n          value = values.a;\n        }\n\n        setOutput(floor(value * 255.0 + 0.5));\n      }\n    `}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Ms{constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;const t=he(),[n,r]=e;this.outputShape=e,this.userCode=`\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int texR = coords[0];\n        int texC = coords[1];\n        int depth = coords[2];\n\n        vec4 result = vec4(0.);\n\n        for(int row=0; row<=1; row++) {\n          for(int col=0; col<=1; col++) {\n            texC = coords[1] + row;\n            depth = coords[2] + col;\n\n            vec2 uv = (vec2(texC, texR) + halfCR) /\n                       vec2(${r}.0, ${n}.0);\n            vec4 values = ${t.texture2D}(A, uv);\n            float value;\n            if (depth == 0) {\n              value = values.r;\n            } else if (depth == 1) {\n              value = values.g;\n            } else if (depth == 2) {\n              value = values.b;\n            } else if (depth == 3) {\n              value = values.a;\n            }\n\n            result[row * 2 + col] = floor(value * 255.0 + 0.5);\n          }\n        }\n\n        ${t.output} = result;\n      }\n    `}}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Us={kernelName:s.eBW,backendName:"webgl",kernelFunc:function(e){const{inputs:t,backend:n,attrs:r}=e;let{pixels:a}=t;const{numChannels:o}=r,i="undefined"!=typeof HTMLVideoElement&&a instanceof HTMLVideoElement,u="undefined"!=typeof HTMLImageElement&&a instanceof HTMLImageElement,[l,c]=i?[a.videoWidth,a.videoHeight]:[a.width,a.height],p=[c,l],h=[c,l,o];(u||i)&&(null==Ps&&(Ps=document.createElement("canvas").getContext("2d")),Ps.canvas.width=l,Ps.canvas.height=c,Ps.drawImage(a,0,0,l,c),a=Ps.canvas);const f=n.makeTensorInfo(p,"int32");n.texData.get(f.dataId).usage=d.PIXELS,n.gpgpu.uploadPixelDataToTexture(n.getTexture(f.dataId),a);const m=(0,s.OBj)().getBool("WEBGL_PACK")?new Ms(h):new Os(h),g=n.runWebGLProgram(m,[f],"int32");return n.disposeData(f.dataId),g}};let Ps;const Ws={kernelName:s._V0,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a,filter:o,bias:i,preluActivationWeights:u}=t,{strides:l,pad:c,dataFormat:d,dilations:p,dimRoundingMode:h,activation:f,leakyreluAlpha:m}=r,g=s.Wap.convertConv2DDataFormat(d),x=s.Wap.computeConv2DInfo(a.shape,o.shape,l,p,c,h,!1,g);let b;const v=[];if(1!==x.filterHeight||1!==x.filterWidth||1!==x.dilationHeight||1!==x.dilationWidth||1!==x.strideHeight||1!==x.strideWidth||"SAME"!==x.padInfo.type&&"VALID"!==x.padInfo.type)if((0,s.OBj)().getBool("WEBGL_CONV_IM2COL")&&1===a.shape[0])b=Sa({x:a,filter:o,convInfo:x,backend:n,bias:i,activation:f,preluActivationWeights:u,leakyreluAlpha:m});else{const e=null!=i,t=null!=u,r="leakyrelu"===f,l=f?On(f,!1):null,c=new ya(x,e,l,t,r),d=[a,o];if(i&&d.push(i),u&&d.push(u),r){const e=n.makeTensorInfo([],"float32",s.D5U.createScalarValue(m,"float32"));d.push(e),v.push(e)}b=n.runWebGLProgram(c,d,"float32")}else b=Ca({x:a,filter:o,convInfo:x,backend:n,bias:i,activation:f,preluActivationWeights:u,leakyreluAlpha:m});const k=Vn({inputs:{x:b},backend:n,attrs:{shape:x.outShape}});return v.push(b),v.forEach((e=>n.disposeIntermediateTensorInfo(e))),k}};const Bs={kernelName:s.luS,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a,filter:o,bias:i,preluActivationWeights:u}=t,{strides:l,pad:c,dilations:d,dimRoundingMode:p,activation:h,leakyreluAlpha:f}=r,m=[];let g=d;null==g&&(g=[1,1]),s.D5U.assert(s.Wap.eitherStridesOrDilationsAreOne(l,g),(()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${l} and dilations '${g}'`));const x=s.Wap.computeConv2DInfo(a.shape,o.shape,l,g,c,p,!0),b=(0,s.OBj)().getBool("WEBGL_PACK_DEPTHWISECONV")&&x.strideWidth<=2&&x.outChannels/x.inChannels==1,v=h?On(h,b):null,k=[a,o],y=null!=i,I=null!=u,w="leakyrelu"===h;if(y&&k.push(i),I&&k.push(u),w){const e=n.makeTensorInfo([],"float32",s.D5U.createScalarValue(f,"float32"));k.push(e),m.push(e)}let C;C=b?new Ya(x,y,v,I,w):new Ka(x,y,v,I,w);const S=[[x.padInfo.top,x.padInfo.left],[x.strideHeight,x.strideWidth],[x.dilationHeight,x.dilationWidth],[x.inHeight,x.inWidth]],$=n.runWebGLProgram(C,k,"float32",S);return m.forEach((e=>n.disposeIntermediateTensorInfo(e))),$}};class Ls{constructor(e,t,n){this.sliceDim=e,this.strides=t,this.variableNames=["x","indices"],this.outputShape=n;const r=Re(t.length),a=Re(n.length),s=this.sliceDim>1?"strides[j]":"strides";this.userCode=`\n        ${r} strides = ${r}(${this.strides});\n         void main() {\n          ${a} coords = getOutputCoords();\n          int flattenIndex = 0;\n          for (int j = 0; j < ${this.sliceDim}; j++) {\n            int index = round(getIndices(coords[0], j));\n            flattenIndex += index * ${s};\n          }\n          setOutput(getX(flattenIndex, coords[1]));\n        }\n      `}}const zs={kernelName:s.q1x,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n}=e,{params:r,indices:a}=t,o=a.shape,i=o[o.length-1],u=s.D5U.sizeFromShape(r.shape),[l,c,d,p]=s.Wap.prepareAndValidate(r,a),h=Vn({inputs:{x:a},backend:n,attrs:{shape:[c,i]}}),f=Vn({inputs:{x:r},backend:n,attrs:{shape:[s.D5U.sizeFromShape(r.shape)/d,d]}});if(n.shouldExecuteOnCPU([r,a])||"string"===r.dtype){const e=n.readSync(a.dataId),t=n.bufferSync(r),s=yt(e,t,r.dtype,c,i,d,p,r.shape,u);return n.makeTensorInfo(l,r.dtype,s.values)}const m=new Ls(i,p,[c,d]),g=n.runWebGLProgram(m,[f,h],f.dtype),x=Vn({inputs:{x:g},backend:n,attrs:{shape:l}});return n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(g),x}};
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Vs{constructor(e,t){this.variableNames=["A","indices"],this.outputShape=t,this.rank=t.length;const n=Re(this.rank),r=function(e,t){const n=["resRC.x","resRC.y","resRC.z","resRC.w"],r=[];for(let t=0;t<e.length;t++)2===t?r.push("int(getIndices(resRC.x, resRC.z))"):r.push(`${n[t]}`);return r.join()}(e);this.userCode=`\n      void main() {\n        ${n} resRC = getOutputCoords();\n        setOutput(getA(${r}));\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Gs(e){const{inputs:t,backend:n,attrs:r}=e,{x:a,indices:o}=t,{axis:i,batchDims:u}=r,l=s.D5U.parseAxisParam(i,a.shape)[0],c=s.Wap.segment_util.collectGatherOpShapeInfo(a,o,l,u),d=s.D5U.sizeFromShape(o.shape),p=[],h=Vn({inputs:{x:a},backend:n,attrs:{shape:[c.batchSize,c.outerSize,c.dimSize,c.sliceSize]}}),f=Vn({inputs:{x:o},backend:n,attrs:{shape:[c.batchSize,d/c.batchSize]}});p.push(h),p.push(f);const m=[c.batchSize,c.outerSize,d/c.batchSize,c.sliceSize];if(n.shouldExecuteOnCPU([a,o])||"string"===a.dtype){const e=n.bufferSync(f),t=n.bufferSync(h),r=It(t,e,m);return p.forEach((e=>n.disposeIntermediateTensorInfo(e))),n.makeTensorInfo(c.outputShape,r.dtype,r.values)}const g=new Vs(h.shape,m),x=n.runWebGLProgram(g,[h,f],h.dtype);p.push(x);const b=Vn({inputs:{x},backend:n,attrs:{shape:c.outputShape}});return p.forEach((e=>n.disposeIntermediateTensorInfo(e))),b}const Hs={kernelName:s.qi_,backendName:"webgl",kernelFunc:Gs},js=_n({opSnippet:"return float(a > b);",packedOpSnippet:"\n  return vec4(greaterThan(a, b));\n",cpuKernelImpl:wt,dtype:"bool"}),Xs={kernelName:s.iZT,backendName:"webgl",kernelFunc:js},qs=_n({opSnippet:"return float(a >= b);",packedOpSnippet:"\n  return vec4(greaterThanEqual(a, b));\n",dtype:"bool",cpuKernelImpl:Ct}),Ks={kernelName:s.Acj,backendName:"webgl",kernelFunc:qs};const Ys={kernelName:s.Qg5,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n}=e,{input:r}=t;return ws(r,!0,n)}},Zs=Fn({opSnippet:"return float(!isnan(x) && !isinf(x));",dtype:"bool"}),Qs={kernelName:s.avt,backendName:"webgl",kernelFunc:Zs},Js=Fn({opSnippet:"return float(isinf(x));",dtype:"bool"}),eo={kernelName:s.iWB,backendName:"webgl",kernelFunc:Js},to=Fn({opSnippet:"return float(isnan(x));",dtype:"bool"}),no={kernelName:s.r7n,backendName:"webgl",kernelFunc:to},ro=_n({opSnippet:"return float(a < b);",packedOpSnippet:"\n  return vec4(lessThan(a, b));\n",cpuKernelImpl:St,dtype:"bool"}),ao={kernelName:s.vtC,backendName:"webgl",kernelFunc:ro},so=_n({opSnippet:"return float(a <= b);",packedOpSnippet:"\n  return vec4(lessThanEqual(a, b));\n",cpuKernelImpl:$t,dtype:"bool"}),oo={kernelName:s.CAk,backendName:"webgl",kernelFunc:so};const io={kernelName:s.e7N,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{backend:t,attrs:n}=e,{start:r,stop:a,num:s}=n,o=Tt(r,a,s);return t.makeTensorInfo([o.length],"float32",o)}},uo=Fn({opSnippet:"if (x < 0.0) return NAN;\n  return log(x);",packedOpSnippet:"\n  vec4 result = log(x);\n  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));\n  result.r = isNaN.r == 1.0 ? NAN : result.r;\n  result.g = isNaN.g == 1.0 ? NAN : result.g;\n  result.b = isNaN.b == 1.0 ? NAN : result.b;\n  result.a = isNaN.a == 1.0 ? NAN : result.a;\n\n  return result;\n",cpuKernelImpl:Et}),lo={kernelName:s.ZbH,backendName:"webgl",kernelFunc:uo},co=Fn({opSnippet:"return log(1.0 + x);"}),po={kernelName:s.kU,backendName:"webgl",kernelFunc:co},ho=_n({opSnippet:"return float(a >= 1.0 && b >= 1.0);",packedOpSnippet:"\n  return vec4(\n    vec4(greaterThanEqual(a, vec4(1.0))) *\n    vec4(greaterThanEqual(b, vec4(1.0))));\n",dtype:"bool"}),fo={kernelName:s.PYm,backendName:"webgl",kernelFunc:ho},mo=Fn({opSnippet:"return float(!(x >= 1.0));"}),go={kernelName:s.VfG,backendName:"webgl",kernelFunc:mo},xo=_n({opSnippet:"return float(a >= 1.0 || b >= 1.0);",packedOpSnippet:"\n  return min(\n    vec4(greaterThanEqual(a, vec4(1.0))) +\n    vec4(greaterThanEqual(b, vec4(1.0))),\n    vec4(1.0));\n",dtype:"bool"}),bo={kernelName:s.MZg,backendName:"webgl",kernelFunc:xo};
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class vo{constructor(e,t,n,r,a){this.variableNames=["x"],this.outputShape=[];const s=t,o=e[3]-1;let i;this.outputShape=e;const u=`float(${n}) + float(${r}) * sum`;i=.5===a?`inversesqrt(${u})`:1===a?`1.0/(${u})`:`exp(log(${u}) * float(-${a}));`,this.userCode=`\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int r = coords[1];\n        int c = coords[2];\n        int d = coords[3];\n        float x = getX(b, r, c, d);\n        float sum = 0.0;\n        for (int j = -${s}; j <= ${s}; j++) {\n          int idx = d + j;\n          if (idx >= 0 && idx <=  ${o}) {\n            float z = getX(b, r, c, idx);\n            sum += z * z;\n          }\n        }\n        float val = x * ${i};\n        setOutput(val);\n      }\n    `}}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class ko{constructor(e,t,n,r,a){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;const s=t,o=e[3]-1;let i;this.outputShape=e;const u=`float(${n}) + float(${r}) * sum`;i=.5===a?`inversesqrt(${u})`:1===a?`1.0/(${u})`:`exp(log(${u}) * float(-${a}));`,this.userCode=`\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords.x;\n        int r = coords.y;\n        int c = coords.z;\n        int d = coords.w;\n\n        bool hasNextCol = d < ${this.outputShape[3]};\n        bool hasNextRow = c < ${this.outputShape[2]};\n\n        vec4 sum = vec4(0.);\n        vec4 xFragAtOutputCoords = getX(b, r, c, d);\n\n        vec4 xAtOutputCoords = vec4(\n          getChannel(xFragAtOutputCoords, vec2(c, d)),\n          hasNextCol ?\n            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,\n          hasNextRow ?\n            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0\n        );\n\n        int firstChannel = d - ${s};\n        vec2 cache = vec2(0.);\n        if(firstChannel >= 0){\n          vec4 firstChannelFrag = getX(b, r, c, firstChannel);\n          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));\n            if(hasNextRow){\n              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));\n            }\n        }\n\n        ivec2 depth = ivec2(d, d + 1);\n        for (int j = - ${s}; j <= ${s}; j++) {\n          ivec2 idx = depth + j;\n          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));\n          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(${o}));\n\n          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;\n          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;\n\n          if(depthInRange || depthPlusOneInRange){\n            vec4 z = vec4(0.);\n            vec4 xFragAtCurrentDepth;\n            z.xz = cache.xy;\n            if(depthPlusOneInRange && hasNextCol){\n              xFragAtCurrentDepth = idx.y != d ?\n                getX(b, r, c, idx.y) : xFragAtOutputCoords;\n              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));\n              if(hasNextRow){\n                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));\n              }\n            }\n            cache.xy = z.yw;\n            sum += z * z;\n          }\n        }\n        vec4 result = xAtOutputCoords * ${i};\n        setOutput(result);\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const yo={kernelName:s.eZ0,backendName:"webgl",kernelFunc:e=>{const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{depthRadius:o,bias:i,alpha:u,beta:l}=r,c=(0,s.OBj)().getBool("WEBGL_PACK_NORMALIZATION")?new ko(a.shape,o,i,u,l):new vo(a.shape,o,i,u,l);return n.runWebGLProgram(c,[a],a.dtype)}};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Io{constructor(e,t,n,r,a){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=e,this.depth=e[3],this.depthRadius=t,this.bias=n,this.alpha=r,this.beta=a,this.userCode=`\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int r = coords[1];\n        int c = coords[2];\n\n        float result = 0.0;\n        for (int d = 0; d < ${this.depth}; ++d) {\n          int depthBegin = int(max(0.0, float(d - ${t})));\n          int depthEnd = int(min(float(${this.depth}),\n              float(d + ${t} + 1)));\n\n          const int MIN_DEPTH_BEGIN = 0;\n          const int MAX_DEPTH_END = ${this.depth};\n\n          float norm = 0.0;\n          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {\n            if (k < depthBegin){\n              continue;\n            }\n            else if (k >= depthBegin && k < depthEnd) {\n              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);\n            }\n            else {\n              break;\n            }\n          }\n\n          norm = float(${r}) * norm + float(${n});\n\n          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){\n            if (k < depthBegin){\n              continue;\n            }\n            else if (k >= depthBegin && k < depthEnd){\n              float dyi = -2.0 * float(${r})\n                * float(${a})\n                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)\n                / norm;\n              if (k == d) {\n                dyi += pow(norm, -1.0 * ${a});\n              }\n              if (k == coords[3]) {\n                dyi *= getDy(b, r, c, d);\n                result += dyi;\n              }\n            }\n            else {\n              break;\n            }\n          }\n      }\n      setOutput(result);\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const wo={kernelName:s.Hhh,backendName:"webgl",kernelFunc:e=>{const{inputs:t,backend:n,attrs:r}=e,{x:a,y:s,dy:o}=t,{depthRadius:i,bias:u,alpha:l,beta:c}=r,d=new Io(a.shape,i,u,l,c);return n.runWebGLProgram(d,[a,s,o],a.dtype)}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Co(e){const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{reductionIndices:o,keepDims:i}=r,u=a.shape.length,l=s.D5U.parseAxisParam(o,a.shape);let c=l;const d=s.Wap.getAxesPermutation(c,u),p=null!=d,h=n.shouldExecuteOnCPU([a]);let f=a;if(p){if(h){const e=n.texData.get(f.dataId).values,t=new Array(u);for(let e=0;e<t.length;e++)t[e]=a.shape[d[e]];const r=Qt(e,a.shape,a.dtype,d,t);f=n.makeTensorInfo(t,a.dtype);n.texData.get(f.dataId).values=r}else f=Yn(a,d,n);c=s.Wap.getInnerMostAxes(c.length,u)}s.Wap.assertAxesAreInnerMostDims("max",c,u);const[m,g]=s.Wap.computeOutAndReduceShapes(f.shape,c);let x,b=m;if(i&&(b=s.Wap.expandShapeToKeepDim(m,l)),h){const e=n.texData.get(f.dataId).values,t=Nt(e,s.D5U.sizeFromShape(g),b,a.dtype);x=n.makeTensorInfo(b,a.dtype);n.texData.get(x.dataId).values=t}else x=
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n,r){const a=s.D5U.sizeFromShape(t),o=Vn({inputs:{x:e},attrs:{shape:[s.D5U.sizeFromShape(e.shape)/a,a]},backend:r}),i=Xn(o,e.dtype,"max",r),u=Vn({inputs:{x:i},attrs:{shape:n},backend:r});return r.disposeIntermediateTensorInfo(o),r.disposeIntermediateTensorInfo(i),u}(f,g,b,n);return p&&n.disposeIntermediateTensorInfo(f),x}const So={kernelName:s.YoZ,backendName:"webgl",kernelFunc:Co},$o=_n({opSnippet:"\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return max(a, b);\n",packedOpSnippet:"\n  vec4 result = vec4(max(a, b));\n  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n",cpuKernelImpl:Rt}),To={kernelName:s.BMI,backendName:"webgl",kernelFunc:$o};const Eo={kernelName:s.mTV,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a}=t;de(a,"maxPool");const{filterSize:o,strides:i,pad:u,dimRoundingMode:l}=r;s.D5U.assert(s.Wap.eitherStridesOrDilationsAreOne(i,1),(()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${i} and dilations '1'`));const c=s.Wap.computePool2DInfo(a.shape,o,i,1,u,l);if(1===c.filterWidth&&1===c.filterHeight&&s.D5U.arraysEqual(c.inShape,c.outShape))return wn({inputs:{x:a},backend:n});const d=new _r(c,"max",!1);return n.runWebGLProgram(d,[a],a.dtype)}};const No={kernelName:s.OAf,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{filterSize:o,strides:i,pad:u,dataFormat:l,dimRoundingMode:c}=r,d=s.Wap.computePool3DInfo(a.shape,o,i,[1,1,1],u,c,l),p=new Or(d,"max",!1);return n.runWebGLProgram(p,[a],a.dtype)}};
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Ro{constructor(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;const t=e.strideHeight,n=e.strideWidth,r=e.dilationHeight,a=e.effectiveFilterHeight,s=e.effectiveFilterWidth,o=a-1-e.padInfo.top,i=s-1-e.padInfo.left,u=a*s-1;this.userCode=`\n      const ivec2 pads = ivec2(${o}, ${i});\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < ${a};\n          wR += ${r}) {\n          float dyR = float(dyRCorner + wR) / ${t}.0;\n\n          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < ${s}; wC++) {\n            float dyC = float(dyCCorner + wC) / ${n}.0;\n\n            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n            int maxPosValue = ${u} - int(getMaxPos(b, idyR, idyC, d));\n\n            // Get the current value, check it against the value from the\n            // position matrix.\n            int curPosValue = wR * ${s} + wC;\n            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);\n\n            dotProd += dyValue * mask;\n          }\n        }\n        setOutput(dotProd);\n      }\n    `}}class Do{constructor(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;const t=e.strideDepth,n=e.strideHeight,r=e.strideWidth,a=e.dilationDepth,s=e.dilationHeight,o=e.dilationWidth,i=e.effectiveFilterDepth,u=e.effectiveFilterHeight,l=e.effectiveFilterWidth,c=i-1-e.padInfo.front,d=u-1-e.padInfo.top,p=l-1-e.padInfo.left,h=i*u*l-1;this.userCode=`\n      const ivec3 pads = ivec3(${c}, ${d}, ${p});\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyDCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get\n        // dx(xD, xR, xC, ch).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int wD = 0; wD < ${i};\n           wD += ${a}) {\n          float dyD = float(dyDCorner + wD) / ${t}.0;\n\n          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {\n            continue;\n          }\n          int idyD = int(dyD);\n\n          for (int wR = 0; wR < ${u};\n              wR += ${s}) {\n            float dyR = float(dyRCorner + wR) / ${n}.0;\n\n            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||\n                fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            for (int wC = 0; wC < ${l};\n                wC += ${o}) {\n              float dyC = float(dyCCorner + wC) / ${r}.0;\n\n              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              float dyValue = getDy(batch, idyD, idyR, idyC, ch);\n              int maxPosValue = ${h} -\n                  int(getMaxPos(batch, idyD, idyR, idyC, ch));\n\n              // Get the current value, check it against the value from the\n              // position matrix.\n              int curPosValue =\n                  wD * ${u} * ${l} +\n                  wR * ${l} + wC;\n              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);\n\n              dotProd += dyValue * mask;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    `}}const Ao={kernelName:s.OU7,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{dy:a,input:o}=t,i=o,{filterSize:u,strides:l,pad:c,dimRoundingMode:d}=r,p=s.Wap.computePool3DInfo(i.shape,u,l,[1,1,1],c,d),h=new Or(p,"max",!0),f=n.runWebGLProgram(h,[i],i.dtype),m=new Do(p),g=n.runWebGLProgram(m,[a,f],i.dtype);return n.disposeIntermediateTensorInfo(f),g}};const Fo={kernelName:s.OV7,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{dy:a,input:o,output:i}=t,u=o;de([o,i],"maxPoolGrad");const{filterSize:l,strides:c,pad:d,dimRoundingMode:p}=r,h=s.Wap.computePool2DInfo(u.shape,l,c,1,d,p),f=new _r(h,"max",!0),m=n.runWebGLProgram(f,[u],u.dtype),g=new Ro(h),x=n.runWebGLProgram(g,[a,m],u.dtype);return n.disposeIntermediateTensorInfo(m),x}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const _o={kernelName:s.vFR,backendName:"webgl",kernelFunc:({inputs:e,attrs:t,backend:n})=>{const{x:r}=e,{filterSize:a,strides:o,pad:i,includeBatchInIndex:u}=t,l=n;s.D5U.assert(4===r.shape.length,(()=>`Error in maxPool: input must be rank 4 but got rank ${r.shape.length}.`));const c=[1,1];s.D5U.assert(s.Wap.eitherStridesOrDilationsAreOne(o,c),(()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${o} and dilations '${c}'`));const d=s.Wap.computePool2DInfo(r.shape,a,o,c,i),[p,h]=
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n,r){let a=new _r(n,"max",!1);const s=r.runWebGLProgram(a,[e],"float32");return a=new _r(n,"max",!0,!0,t),[s,r.runWebGLProgram(a,[e],"float32")]}(r,u,d,l);return[p,h]}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Oo={kernelName:s.q2K,backendName:"webgl",kernelFunc:({inputs:e,attrs:t,backend:n})=>{const{x:r}=e,{keepDims:a,axis:o}=t,i=n,u=r.shape.length,l=s.D5U.parseAxisParam(o,r.shape);let c=l;const d=s.Wap.getAxesPermutation(c,u),p=null!=d,h=i.shouldExecuteOnCPU([r]),f=[];let m=r;if(p){if(h){const e=i.texData.get(m.dataId).values,t=new Array(u);for(let e=0;e<t.length;e++)t[e]=r.shape[d[e]];const n=Qt(e,r.shape,r.dtype,d,t);m=i.makeTensorInfo(t,r.dtype);i.texData.get(m.dataId).values=n}else m=Yn(r,d,i);f.push(m),c=s.Wap.getInnerMostAxes(c.length,u)}s.Wap.assertAxesAreInnerMostDims("sum",c,u);const[g,x]=s.Wap.computeOutAndReduceShapes(m.shape,c);let b=g;a&&(b=s.Wap.expandShapeToKeepDim(g,l));const v=
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n,r){const a=s.D5U.sizeFromShape(t),o=Vn({inputs:{x:e},attrs:{shape:[s.D5U.sizeFromShape(e.shape)/a,a]},backend:r}),i=Xn(o,"float32","mean",r),u=Vn({inputs:{x:i},attrs:{shape:n},backend:r});return r.disposeIntermediateTensorInfo(o),r.disposeIntermediateTensorInfo(i),u}(m,x,b,i);for(const e of f)i.disposeIntermediateTensorInfo(e);return v}};const Mo={kernelName:s.c17,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{axis:o,keepDims:i}=r,u=a.shape.length,l=s.D5U.parseAxisParam(o,a.shape);let c=l;const d=s.Wap.getAxesPermutation(c,u);let p=a;null!=d&&(p=Jn({inputs:{x:a},backend:n,attrs:{perm:d}}),c=s.Wap.getInnerMostAxes(c.length,a.shape.length)),s.Wap.assertAxesAreInnerMostDims("min",c,u);const[h,f]=s.Wap.computeOutAndReduceShapes(p.shape,c),m=Vn({inputs:{x:p},backend:n,attrs:{shape:[-1,s.D5U.sizeFromShape(f)]}}),g=Xn(m,m.dtype,"min",n);let x;if(i){x=Vn({inputs:{x:g},backend:n,attrs:{shape:s.Wap.expandShapeToKeepDim(h,l)}})}else x=Vn({inputs:{x:g},backend:n,attrs:{shape:h}});return n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(g),null!=d&&n.disposeIntermediateTensorInfo(p),x}},Uo=_n({opSnippet:"\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return min(a, b);\n",packedOpSnippet:"\n  vec4 result = vec4(min(a, b));\n  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n",cpuKernelImpl:Dt}),Po={kernelName:s.q8u,backendName:"webgl",kernelFunc:Uo};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Wo{constructor(e,t,n){this.variableNames=["x"],this.outputShape=t.map(((t,n)=>t[0]+e[n]+t[1]));const r=e.length,a=Re(r),s=t.map((e=>e[0])).join(","),o=t.map(((t,n)=>t[0]+e[n])).join(","),i=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,r),u="reflect"===n?0:1;this.userCode=1!==r?`\n      ${a} start = ${a}(${s});\n      ${a} end = ${a}(${o});\n\n      void main() {\n        ${a} outC = getOutputCoords();\n        for (int i = 0; i < ${r}; i++) {\n          if (outC[i] < start[i]) {\n            outC[i] = start[i] * 2 - outC[i] - ${u};\n          } else if(outC[i] >= end[i]) {\n            outC[i] = (end[i] - 1) * 2 - outC[i] + ${u};\n          }\n        }\n        ${a} coords = outC - start;\n        setOutput(getX(${i}));\n      }\n    `:`\n        int start = ${s};\n        int end = ${o};\n\n        void main() {\n          int outC = getOutputCoords();\n          if (outC < start) {\n            outC = start * 2 - outC - ${u};\n          } else if(outC >= end) {\n            outC = (end - 1) * 2 - outC + ${u};\n          }\n          setOutput(getX(outC - start));\n        }\n      `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Bo{constructor(e,t,n){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map(((t,n)=>t[0]+e[n]+t[1]));const r=e.length,a=Re(r),s=t.map((e=>e[0])).join(","),o=t.map(((t,n)=>t[0]+e[n])).join(","),i=tn("rc",r),u=tn("source",r),l=`${i[r-1]} < ${this.outputShape[r-1]}`,c=1===r?"source":`vec2(${u.slice(-2).join()})`,d="reflect"===n?0:1;let p="";if(1===r){const e=`\n        ${a} source = rc;\n        if (source < start) {\n          source = start * 2 - source - ${d};\n        } else if (source >= end) {\n          source = (end - 1) * 2 - source + ${d};\n        }\n        source -= start;\n      `;p=`\n        ${a} rc = outputLoc;\n        ${e}\n        result[0] = getChannel(getX(${u.join()}), ${c});\n        ${i[r-1]} += 1;\n        if(${l}) {\n          ${e}\n          result[1] = getChannel(getX(${u.join()}), ${c});\n        }\n      `}else{const e=`\n        ${a} source = rc;\n        ${a} lt = ${a}(lessThan(source, start));\n        ${a} gte = ${a}(greaterThanEqual(source, end));\n        ${a} orig = 1 - (lt + gte);\n        source = orig * source +\n                lt * (start * 2 - source - ${d}) +\n                gte * ((end - 1) * 2 - source + ${d});\n        source -= start;\n      `;p=`\n        ${a} rc = outputLoc;\n        ${e}\n        result[0] = getChannel(getX(${u.join()}), ${c});\n        ${i[r-1]} += 1;\n        if(${l}) {\n          ${e}\n          result[1] = getChannel(getX(${u.join()}), ${c});\n        }\n        rc = outputLoc;\n        ${i[r-2]} += 1;\n        if(${i[r-2]} < ${this.outputShape[r-2]}) {\n          ${e}\n          result[2] = getChannel(getX(${u.join()}), ${c});\n          ${i[r-1]} += 1;\n          if(${l}) {\n            ${e}\n            result[3] = getChannel(getX(${u.join()}), ${c});\n          }\n        }\n      `}this.userCode=`\n      const ${a} start = ${a}(${s});\n      const ${a} end = ${a}(${o});\n\n      void main() {\n        ${a} outputLoc = getOutputCoords();\n        vec4 result = vec4(0.);\n        ${p}\n        setOutput(result);\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Lo={kernelName:s.jQs,backendName:"webgl",kernelFunc:({inputs:e,backend:t,attrs:n})=>{const{x:r}=e,{paddings:a,mode:o}=n,i=(0,s.OBj)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Bo(r.shape,a,o):new Wo(r.shape,a,o);return t.runWebGLProgram(i,[r],r.dtype)}},zo=_n({opSnippet:"if (b == 0.0) return NAN;\n  return mod(a, b);",packedOpSnippet:"\n  vec4 result = mod(a, b);\n  vec4 isNaN = vec4(equal(b, vec4(0.0)));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n"}),Vo={kernelName:s.Vbg,backendName:"webgl",kernelFunc:zo};
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Go{constructor(e,t,n){this.variableNames=["probs"],this.customUniforms=[{name:"seed",type:"float"}],this.outputShape=[e,n],this.userCode=`\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n\n        float r = random(seed);\n        float cdf = 0.0;\n\n        for (int i = 0; i < ${t-1}; i++) {\n          cdf += getProbs(batch, i);\n\n          if (r < cdf) {\n            setOutput(float(i));\n            return;\n          }\n        }\n\n        // If no other event happened, last event happened.\n        setOutput(float(${t-1}));\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Ho=_n({opSnippet:"\nif (a == b) {\n  return 1.0;\n};\nreturn a / b;",packedOpSnippet:"\n  // vec4 one = vec4(equal(a, b));\n  // return one + (vec4(1.0) - one) * a / b;\n  vec4 result = a / b;\n  if(a.x == b.x) {\n    result.x = 1.;\n  }\n  if(a.y == b.y) {\n    result.y = 1.;\n  }\n  if(a.z == b.z) {\n    result.z = 1.;\n  }\n  if(a.w == b.w) {\n    result.w = 1.;\n  }\n\n  return result;\n",checkOutOfBounds:!0}),jo={kernelName:s.oHH,backendName:"webgl",kernelFunc:Ho},Xo="return a - b;",qo=_n({opSnippet:Xo,packedOpSnippet:Xo,supportsComplex:!0,cpuKernelImpl:Kt}),Ko={kernelName:s.Tr8,backendName:"webgl",kernelFunc:qo};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Yo(e){const{inputs:t,backend:n,attrs:r}=e,{logits:a}=t,{dim:o}=r,i=s.D5U.parseAxisParam([o],a.shape),u=Co({inputs:{x:a},backend:n,attrs:{reductionIndices:i,keepDims:!1}}),l=s.Wap.expandShapeToKeepDim(u.shape,i),c=Vn({inputs:{x:u},backend:n,attrs:{shape:l}}),d=qo({inputs:{a,b:c},backend:n}),p=ms({inputs:{x:d},backend:n}),h=Zn({inputs:{x:p},backend:n,attrs:{axis:i,keepDims:!1}}),f=Vn({inputs:{x:h},backend:n,attrs:{shape:l}}),m=Ho({inputs:{a:p,b:f},backend:n});return n.disposeIntermediateTensorInfo(u),n.disposeIntermediateTensorInfo(c),n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(f),m}const Zo={kernelName:s.Gcp,backendName:"webgl",kernelFunc:Yo};const Qo={kernelName:s.NZg,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{logits:a}=t,{numSamples:s,seed:o,normalized:i}=r,u=i?a:Yo({inputs:{logits:a},backend:n,attrs:{dim:a.shape.length-1}}),l=u.shape[0],c=u.shape[1],d=new Go(l,c,s),p=[[o]],h=n.runWebGLProgram(d,[u],"int32",p);return i||n.disposeIntermediateTensorInfo(u),h}},Jo="return -x;";const ei={kernelName:s.kuV,backendName:"webgl",kernelFunc:function(e){const{inputs:t,backend:n}=e,{x:r}=t;if(n.shouldExecuteOnCPU([r])){const e=n.texData.get(r.dataId),[t,a]=Ft(e.values,r.shape,r.dtype);return n.makeTensorInfo(a,r.dtype,t)}let a;return a=(0,s.OBj)().getBool("WEBGL_PACK_UNARY_OPERATIONS")?new pn(r.shape,Jo):new ln(r.shape,Jo),n.runWebGLProgram(a,[r],r.dtype)}},ti=s.GDt.GP;const ni={kernelName:s.uv1,backendName:"webgl",kernelFunc:function(e){s.Wap.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:n,attrs:r}=e,{boxes:a,scores:o}=t,{maxOutputSize:i,iouThreshold:u,scoreThreshold:l}=r,c=n.readSync(a.dataId),d=n.readSync(o.dataId),{selectedIndices:p}=ti(c,d,i,u,l);return n.makeTensorInfo([p.length],"int32",new Int32Array(p))}},ri=s.GDt.qP;const ai={kernelName:s.cye,backendName:"webgl",kernelFunc:function(e){s.Wap.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:n,attrs:r}=e,{boxes:a,scores:o}=t,{maxOutputSize:i,iouThreshold:u,scoreThreshold:l,padToMaxOutputSize:c}=r,d=n.readSync(a.dataId),p=n.readSync(o.dataId),{selectedIndices:h,validOutputs:f}=ri(d,p,i,u,l,c);return[n.makeTensorInfo([h.length],"int32",new Int32Array(h)),n.makeTensorInfo([],"int32",new Int32Array([f]))]}},si=s.GDt.pA;const oi={kernelName:s.W0H,backendName:"webgl",kernelFunc:function(e){s.Wap.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:n,attrs:r}=e,{boxes:a,scores:o}=t,{maxOutputSize:i,iouThreshold:u,scoreThreshold:l,softNmsSigma:c}=r,d=n.readSync(a.dataId),p=n.readSync(o.dataId),h=i,f=u,m=l,g=c,{selectedIndices:x,selectedScores:b}=si(d,p,h,f,m,g);return[n.makeTensorInfo([x.length],"int32",new Int32Array(x)),n.makeTensorInfo([b.length],"float32",new Float32Array(b))]}};
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class ii{constructor(e,t,n,r){this.variableNames=["indices"],this.outputShape=[e,t],this.userCode=`\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int index = round(getIndices(coords.x));\n        setOutput(mix(float(${r}), float(${n}),\n                      float(index == coords.y)));\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const ui={kernelName:s.we_,backendName:"webgl",kernelFunc:e=>{const{inputs:t,backend:n,attrs:r}=e,{indices:a}=t,{depth:o,onValue:i,offValue:u}=r,l=s.D5U.sizeFromShape(a.shape),c=new ii(l,o,i,u),d=Vn({inputs:{x:a},backend:n,attrs:{shape:[l]}}),p=n.runWebGLProgram(c,[d],a.dtype);n.disposeIntermediateTensorInfo(d);const h=Vn({inputs:{x:p},backend:n,attrs:{shape:[...a.shape,o]}});return n.disposeIntermediateTensorInfo(p),h}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function li(e){const{inputs:t,backend:n}=e,{x:r}=t;if("complex64"===r.dtype){const e=ta({inputs:{input:r},backend:n}),t=li({inputs:{x:e},backend:n}),a=ga({inputs:{input:r},backend:n}),s=li({inputs:{x:a},backend:n}),o=Sn({inputs:{real:t,imag:s},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(a),n.disposeIntermediateTensorInfo(s),o}return $s({attrs:{shape:r.shape,dtype:r.dtype,value:"string"===r.dtype?"":0},backend:n})}const ci={kernelName:s.RuY,backendName:"webgl",kernelFunc:li};const di={kernelName:s.qWM,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function e(t){const{inputs:n,backend:r}=t,{x:a}=n;if("string"===a.dtype)throw new Error("onesLike is not supported under string dtype");if("complex64"===a.dtype){const t=ta({inputs:{input:a},backend:r}),n=e({inputs:{x:t},backend:r}),s=ga({inputs:{input:a},backend:r}),o=li({inputs:{x:s},backend:r}),i=Sn({inputs:{real:n,imag:o},backend:r});return r.disposeIntermediateTensorInfo(t),r.disposeIntermediateTensorInfo(n),r.disposeIntermediateTensorInfo(s),r.disposeIntermediateTensorInfo(o),i}return $s({attrs:{shape:a.shape,dtype:a.dtype,value:1},backend:r})}};const pi={kernelName:s.QiL,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{axis:a}=r;if(1===t.length)return xs({inputs:{input:t[0]},backend:n,attrs:{dim:a}});const o=t[0].shape,i=t[0].dtype;t.forEach((e=>{s.D5U.assertShapesMatch(o,e.shape,"All tensors passed to stack must have matching shapes"),s.D5U.assert(i===e.dtype,(()=>"All tensors passed to stack must have matching dtypes"))}));const u=[],l=va({inputs:t.map((e=>{const t=xs({inputs:{input:e},backend:n,attrs:{dim:a}});return u.push(t),t})),backend:n,attrs:{axis:a}});return u.forEach((e=>n.disposeIntermediateTensorInfo(e))),l}};
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class hi{constructor(e,t,n){this.variableNames=["x"],this.customUniforms=[{name:"value",type:"float"}],this.outputShape=t.map(((t,n)=>t[0]+e[n]+t[1]));const r=e.length,a=Re(r),s=t.map((e=>e[0])).join(","),o=t.map(((t,n)=>t[0]+e[n])).join(","),i=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,r);this.userCode=1!==r?`\n      ${a} start = ${a}(${s});\n      ${a} end = ${a}(${o});\n\n      void main() {\n        ${a} outC = getOutputCoords();\n        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {\n          setOutput(value);\n        } else {\n          ${a} coords = outC - start;\n          setOutput(getX(${i}));\n        }\n      }\n    `:`\n        int start = ${s};\n        int end = ${o};\n\n        void main() {\n          int outC = getOutputCoords();\n          if (outC < start || outC >= end) {\n            setOutput(value);\n          } else {\n            setOutput(getX(outC - start));\n          }\n        }\n      `}}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class fi{constructor(e,t,n){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"value",type:"float"}],this.outputShape=t.map(((t,n)=>t[0]+e[n]+t[1]));const r=e.length,a=Re(r),s=t.map((e=>e[0])).join(","),o=t.map(((t,n)=>t[0]+e[n])).join(","),i=tn("rc",r),u=tn("source",r),l=`${i[r-1]} < ${this.outputShape[r-1]}`,c=1===r?"source":`vec2(${u.slice(-2).join()})`,d=[`${a} rc = outputLoc;`,`${i[r-1]} += 1;\n       if(${l}) {\n      `,1===r?"":`}\n       rc = outputLoc;\n       ${i[r-2]} += 1;\n       if(${i[r-2]} < ${this.outputShape[r-2]}) {`,1===r?"":`  ${i[r-1]} += 1;\n         if(${l}) {`],p=1===r?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))";let h="";for(let e=0,t=1===r?2:4;e<t;e++)h+=`\n        ${d[e]}\n        if (${p}) {\n          result[${e}] = float(value);\n        } else {\n          ${a} source = rc - start;\n          result[${e}] = getChannel(getX(${u.join()}), ${c});\n        }\n      `;h+=1===r?"} ":"}}",this.userCode=`\n      const ${a} start = ${a}(${s});\n      const ${a} end = ${a}(${o});\n\n      void main() {\n        ${a} outputLoc = getOutputCoords();\n        vec4 result = vec4(0.);\n        ${h}\n        setOutput(result);\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const mi=e=>{const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{paddings:o,constantValue:i}=r;if(0===s.D5U.sizeFromShape(a.shape)){return $s({backend:n,attrs:{shape:o.map(((e,t)=>e[0]+a.shape[t]+e[1])),value:i,dtype:a.dtype}})}const u=(0,s.OBj)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new fi(a.shape,o,i):new hi(a.shape,o,i),l=[[i]];return n.runWebGLProgram(u,[a],a.dtype,l)},gi={kernelName:s.lyA,backendName:"webgl",kernelFunc:mi},xi=_n({opSnippet:"\n  if(a < 0.0 && floor(b) < b){\n    return NAN;\n  }\n  if (b == 0.0) {\n    return 1.0;\n  }\n  return (round(mod(b, 2.0)) != 1) ?\n      pow(abs(a), b) : sign(a) * pow(abs(a), b);\n",packedOpSnippet:"\n  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.\n  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));\n  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);\n  vec4 result = multiplier * pow(abs(a), b);\n\n  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS\n  bvec4 isExpZero = equal(b, vec4(0.0));\n  result.r = isExpZero.r ? 1.0 : result.r;\n  result.g = isExpZero.g ? 1.0 : result.g;\n  result.b = isExpZero.b ? 1.0 : result.b;\n  result.a = isExpZero.a ? 1.0 : result.a;\n\n  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n"}),bi={kernelName:s.pe_,backendName:"webgl",kernelFunc:xi};const vi={kernelName:s.DlI,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{axis:o,keepDims:i}=r,u=a.shape.length,l=[],c=s.D5U.parseAxisParam(o,a.shape);let d=c;const p=s.Wap.getAxesPermutation(d,u);let h,f=a;if(null!=p&&(f=Jn({inputs:{x:a},backend:n,attrs:{perm:p}}),d=s.Wap.getInnerMostAxes(d.length,u),l.push(f)),s.Wap.assertAxesAreInnerMostDims("prod",d,u),n.shouldExecuteOnCPU([f])){const e=n.texData.get(f.dataId).values,{outVals:t,outShape:r,outDtype:a}=Ot(f.shape,f.dtype,e,d);h=n.makeTensorInfo(r,a,t)}else{const[e,t]=s.Wap.computeOutAndReduceShapes(f.shape,d),r=s.D5U.sizeFromShape(t),o=Vn({inputs:{x:f},backend:n,attrs:{shape:[-1,r]}}),i=Xn(o,(0,s.z4k)(a.dtype),"prod",n);h=Vn({inputs:{x:i},backend:n,attrs:{shape:e}}),l.push(o),l.push(i)}if(i){l.push(h);const e=s.Wap.expandShapeToKeepDim(h.shape,c);h=Vn({inputs:{x:h},backend:n,attrs:{shape:e}})}return l.forEach((e=>n.disposeIntermediateTensorInfo(e))),h}},ki=e=>{const{backend:t,attrs:n}=e,{start:r,stop:a,step:s,dtype:o}=n,i=Mt(r,a,s,o);return t.makeTensorInfo([i.length],o,i)},yi={kernelName:s.e6w,backendName:"webgl",kernelFunc:ki},Ii=Fn({opSnippet:"return 1.0 / x;"}),wi={kernelName:s.$HU,backendName:"webgl",kernelFunc:Ii},Ci=Fn({opSnippet:"if (isnan(x)) return x;\n  return (x < 0.0) ? 0.0 : x;\n",packedOpSnippet:"\n  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n"}),Si={kernelName:s.qkr,backendName:"webgl",kernelFunc:Ci},$i=Fn({opSnippet:"if (isnan(x)) return x;\n  return (x < 0.0) ? 0.0 : min(6.0, x);\n",packedOpSnippet:"\n  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n"}),Ti={kernelName:s.SbG,backendName:"webgl",kernelFunc:$i};
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Ei{constructor(e,t,n,r,a){this.variableNames=["A"],this.outputShape=[];const[s,o,i,u]=e;this.outputShape=[s,t,n,u];const l=[r&&t>1?o-1:o,r&&n>1?i-1:i],c=[r&&t>1?t-1:t,r&&n>1?n-1:n];let d;d=a?"(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)":"vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          ${l[0]/c[0]},\n          ${l[1]/c[1]});\n      const vec2 inputShapeRC = vec2(${o}.0, ${i}.0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = ${d};\n\n        // Compute the four integer indices.\n        ivec2 sourceFloorRC = ivec2(max(sourceFracIndexRC, vec2(0.0)));\n        ivec2 sourceCeilRC = ivec2(\n          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));\n\n        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);\n        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);\n        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);\n        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);\n\n        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);\n\n        float top = topLeft + (topRight - topLeft) * fracRC.y;\n        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;\n        float newValue = top + (bottom - top) * fracRC.x;\n\n        setOutput(newValue);\n      }\n    `}}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Ni{constructor(e,t,n,r,a){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[s,o,i,u]=e;this.outputShape=[s,t,n,u];const l=[r&&t>1?o-1:o,r&&n>1?i-1:i],c=[r&&t>1?t-1:t,r&&n>1?n-1:n];let d;d=a?"(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)":"vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`\n      const vec3 effectiveInputOverOutputRatioRC = vec3(\n          ${l[0]/c[0]},\n          ${l[1]/c[1]},\n          ${l[1]/c[1]});\n      const vec3 inputShapeRC = vec3(${o}.0, ${i}.0,\n                                     ${i}.0);\n\n      float getAValue(int b, int r, int c, int d) {\n        return getChannel(getA(b, r, c, d), vec2(c, d));\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        // Calculate values for next column in yRC.z.\n        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);\n\n        // Fractional source index.\n        vec3 sourceFracIndexRC = ${d};\n\n        // Compute the four integer indices.\n        ivec3 sourceFloorRC = ivec3(max(sourceFracIndexRC, vec3(0.0)));\n        ivec3 sourceCeilRC = ivec3(\n          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));\n\n        // Should we calculate next column and row elements in 2x2 packed cell.\n        bool hasNextCol = d < ${u-1};\n        bool hasNextRow = coords.z < ${n-1};\n\n        // In parallel, construct four corners for all four components in\n        // packed 2x2 cell.\n        vec4 topLeft = vec4(\n          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),\n          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);\n\n        vec4 bottomLeft = vec4(\n          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),\n          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);\n\n        vec4 topRight = vec4(\n          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),\n          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);\n\n        vec4 bottomRight = vec4(\n          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),\n          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);\n\n        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);\n\n        vec4 top = mix(topLeft, topRight, fracRC.yyzz);\n        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);\n        vec4 newValue = mix(top, bottom, fracRC.x);\n\n        setOutput(newValue);\n      }\n    `}}const Ri={kernelName:s._Yw,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{images:a}=t,{alignCorners:o,halfPixelCenters:i,size:u}=r,[l,c]=u,d=(0,s.OBj)().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new Ni(a.shape,l,c,o,i):new Ei(a.shape,l,c,o,i);return n.runWebGLProgram(d,[a],"float32")}};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Di{constructor(e,t,n){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t;const[,r,a]=t,[,s,o]=e,i=[n&&s>1?r-1:r,n&&o>1?a-1:a],u=[n&&s>1?s-1:s,n&&o>1?o-1:o],l=i[0]/u[0],c=i[1]/u[1],d=1/l,p=1/c,h=2*Math.ceil(d)+2,f=2*Math.ceil(p)+2;this.userCode=`\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        int r = coords[1];\n        int c = coords[2];\n\n        float accumulator = 0.0;\n\n        const float heightScale = float(${l});\n        const float widthScale = float(${c});\n\n        const float invHeightScale = float(${d});\n        const float invWidthScale = float(${p});\n\n        const int winHeight = int(${h});\n        const int winWidth = int(${f});\n\n        // Compute bounds for where in dy we will look\n        float startRLerp = floor(float(r) * invHeightScale);\n        int startDyR = int(startRLerp - float(winHeight / 2));\n\n        float startCLerp = floor(float(c) * invWidthScale);\n        int startDyC = int(startCLerp - float(winWidth / 2));\n\n        // Loop over dy\n        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {\n          int dyR = dyROffset + startDyR;\n\n          // Guard against the window exceeding the bounds of dy\n          if (dyR < 0 || dyR >= ${s}) {\n            continue;\n          }\n\n          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {\n            int dyC = dyCOffset + startDyC;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyC < 0 || dyC >= ${o}) {\n              continue;\n            }\n\n            float dxR = float(dyR) * heightScale;\n            int topDxRIndex = int(floor(dxR));\n            int bottomDxRIndex = int(min(ceil(dxR), ${r-1}.0));\n            float dxRLerp = dxR - float(topDxRIndex);\n            float inverseDxRLerp = 1.0 - dxRLerp;\n\n            float dxC = float(dyC) * widthScale;\n            int leftDxCIndex = int(floor(dxC));\n            int rightDxCIndex = int(min(ceil(dxC), ${a-1}.0));\n            float dxCLerp = dxC - float(leftDxCIndex);\n            float inverseDxCLerp = 1.0 - dxCLerp;\n\n            if (r == topDxRIndex && c == leftDxCIndex) {\n              // topLeft\n              accumulator +=\n                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;\n            }\n\n            if (r == topDxRIndex && c == rightDxCIndex) {\n              // topRight\n              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == leftDxCIndex) {\n              // bottomLeft\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == rightDxCIndex) {\n              // bottomRight\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;\n            }\n          }\n        }\n        // End loop over dy\n\n        setOutput(accumulator);\n      }\n    `}}const Ai={kernelName:s.zbQ,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{images:a,dy:s}=t,{alignCorners:o}=r,i=new Di(s.shape,a.shape,o);return n.runWebGLProgram(i,[s],s.dtype)}};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Fi{constructor(e,t,n,r,a){this.variableNames=["A"],this.outputShape=[];const[s,o,i,u]=e;this.outputShape=[s,t,n,u];const l=[r&&t>1?o-1:o,r&&n>1?i-1:i],c=[r&&t>1?t-1:t,r&&n>1?n-1:n],d=r?"0.5":"0.0";let p;p=a?"max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))":"vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          ${l[0]/c[0]},\n          ${l[1]/c[1]});\n      const vec2 inputShapeRC = vec2(${o}.0, ${i}.0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = ${p};\n\n        // Compute the coordinators of nearest neighbor point.\n        ivec2 sourceNearestRC = ivec2(\n          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${d})));\n        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);\n\n        setOutput(newValue);\n      }\n    `}}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class _i{constructor(e,t,n,r,a){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[s,o,i,u]=e;this.outputShape=[s,t,n,u];const l=[r&&t>1?o-1:o,r&&n>1?i-1:i],c=[r&&t>1?t-1:t,r&&n>1?n-1:n],d=r?"0.5":"0.0";let p;p=a?"max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))":"vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`\n      const vec3 effectiveInputOverOutputRatioRC = vec3(\n          ${l[0]/c[0]},\n          ${l[1]/c[1]},\n          ${l[1]/c[1]});\n      const vec3 inputShapeRC = vec3(${o}.0, ${i}.0,\n                                     ${i}.0);\n\n      float getAValue(int b, int r, int c, int d) {\n        return getChannel(getA(b, r, c, d), vec2(c, d));\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        // Calculate values for next column in yRC.z.\n        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);\n\n        // Fractional source index.\n        vec3 sourceFracIndexRC = ${p};\n\n        // Compute the coordinators of nearest neighbor point.\n        ivec3 sourceNearestRC = ivec3(\n          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${d})));\n\n        // Should we calculate next column and row elements in 2x2 packed cell.\n        bool hasNextCol = d < ${u-1};\n        bool hasNextRow = coords.z < ${n-1};\n\n        vec4 newValue = vec4(\n          getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d),\n          hasNextCol ? getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d + 1) : 0.0);\n\n        setOutput(newValue);\n      }\n    `}}const Oi={kernelName:s.dpD,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{images:a}=t,{alignCorners:o,halfPixelCenters:i,size:u}=r,[l,c]=u,d=(0,s.OBj)().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new _i(a.shape,l,c,o,i):new Fi(a.shape,l,c,o,i);return n.runWebGLProgram(d,[a],a.dtype)}};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Mi{constructor(e,t,n){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t;const[,r,a]=t,[,s,o]=e,i=[n&&s>1?r-1:r,n&&o>1?a-1:a],u=[n&&s>1?s-1:s,n&&o>1?o-1:o],l=i[0]/u[0],c=i[1]/u[1],d=1/l,p=1/c,h=2*Math.ceil(d)+2,f=2*Math.ceil(p)+2;this.userCode=`\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        int r = coords[1];\n        int c = coords[2];\n\n        float accumulator = 0.0;\n\n        const float heightScale = float(${l});\n        const float widthScale = float(${c});\n\n        const float invHeightScale = float(${d});\n        const float invWidthScale = float(${p});\n\n        const int winHeight = int(${h});\n        const int winWidth = int(${f});\n\n        // Compute bounds for where in dy we will look\n        float startRLerp = floor(float(r) * invHeightScale);\n        int startDyR = int(floor(startRLerp - float(winHeight / 2)));\n\n        float startCLerp = floor(float(c) * invWidthScale);\n        int startDyC = int(floor(startCLerp - float(winWidth / 2)));\n\n        // Loop over dy\n        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {\n          int dyR = dyROffset + startDyR;\n\n          // Guard against the window exceeding the bounds of dy\n          if (dyR < 0 || dyR >= ${s}) {\n            continue;\n          }\n\n          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {\n            int dyC = dyCOffset + startDyC;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyC < 0 || dyC >= ${o}) {\n              continue;\n            }\n\n            float sourceFracRow =\n              float(${i[0]}) *\n                (float(dyR) / float(${u[0]}));\n\n            float sourceFracCol =\n                float(${i[1]}) *\n                  (float(dyC) / float(${u[1]}));\n\n            int sourceNearestRow = int(min(\n                float(int(${r}) - 1),\n                ${n} ? float(round(sourceFracRow)) :\n                                  float(floor(sourceFracRow))));\n\n            int sourceNearestCol = int(min(\n                float(int(${a}) - 1),\n                ${n} ? float(round(sourceFracCol)) :\n                                  float(floor(sourceFracCol))));\n\n            if (r == sourceNearestRow && c == sourceNearestCol) {\n              accumulator += getDy(b, dyR, dyC, d);\n            }\n          }\n        }\n        // End loop over dy\n\n        setOutput(accumulator);\n      }\n    `}}const Ui={kernelName:s.Hmb,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{images:a,dy:s}=t,{alignCorners:o}=r,i=new Mi(s.shape,a.shape,o);return n.runWebGLProgram(i,[s],s.dtype)}};
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Pi{constructor(e,t){this.variableNames=["x"];const n=e.length;if(n>4)throw new Error(`WebGL backend: Reverse of rank-${n} tensor is not yet supported`);if(this.outputShape=e,1===n)return void(this.userCode=`\n        void main() {\n          int coord = getOutputCoords();\n          setOutput(getX(${e[0]} - coord - 1));\n        }\n      `);const r=e.map(((n,r)=>(n=>-1!==t.indexOf(n)&&1!==e[n]?`${e[n]} - coords[${n}] - 1`:`coords[${n}]`)(r))).join(","),a=Re(n);this.userCode=`\n      void main() {\n        ${a} coords = getOutputCoords();\n        setOutput(getX(${r}));\n      }\n    `}}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Wi{constructor(e,t){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;const n=e.length;if(n>4)throw new Error(`WebGL backend: Reverse of rank-${n} tensor is not yet supported`);this.outputShape=e;const r=tn("rc",n),a=`${r[n-1]} + 1 < ${this.outputShape[n-1]}`,s=`${r[n-2]} + 1 < ${this.outputShape[n-2]}`,o=Re(n);function i(n){const r=e.map(((r,a)=>function(n,r){return-1!==t.indexOf(n)&&1!==e[n]?`${e[n]} - ${r[n]} - 1`:`${r[n]}`}(a,n)));return`getChannel(getX(${r.join(",")}), vec2(${r.slice(-2).join(",")}))`}this.userCode=1===n?`\n        void main(){\n          int rc = getOutputCoords();\n          vec4 result = vec4(0.);\n          result.r = getChannel(getX(${e[0]} - rc - 1),\n            ${e[0]} - rc - 1);\n          if(${a}){\n              result.g = getChannel(getX(${e[0]} - (rc  + 1) - 1),\n                ${e[0]} - (rc  + 1) - 1);\n          }\n          setOutput(result);\n        }\n      `:`\n        void main() {\n          ${o} rc = getOutputCoords();\n          vec4 result = vec4(0.);\n          result.r = ${function(e){return i(e)}(r.slice())};\n          if(${a}){\n            result.g = ${function(e){return e[n-1]="("+e[n-1]+" + 1)",i(e)}(r.slice())};\n          }\n          if(${s}) {\n            result.b = ${function(e){return e[n-2]="("+e[n-2]+" + 1)",i(e)}(r.slice())};\n            if(${a}) {\n              result.a = ${function(e){return e[n-1]="("+e[n-1]+" + 1)",e[n-2]="("+e[n-2]+" + 1)",i(e)}(r.slice())};\n            }\n          }\n          setOutput(result);\n        }\n    `}}const Bi={kernelName:s.mKl,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{dims:o}=r,i=a.shape.length,u=s.D5U.parseAxisParam(o,a.shape);if(0===i)return wn({inputs:{x:a},backend:n});const l=(0,s.OBj)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Wi(a.shape,u):new Pi(a.shape,u);return n.runWebGLProgram(l,[a],a.dtype)}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Li{constructor(e,t){this.variableNames=["Image"],this.outputShape=[],this.customUniforms=[{name:"params",type:"vec4"}];const n=e[1],r=e[2];this.outputShape=e;let a="";a="number"==typeof t?`float outputValue = ${t.toFixed(2)};`:`\n        vec3 fill = vec3(${t.join(",")});\n        float outputValue = fill[coords[3]];`,this.userCode=`\n        void main() {\n          ivec4 coords = getOutputCoords();\n          int x = coords[2];\n          int y = coords[1];\n          float coordXFloat = (float(x) - params[0]) * params[3] -\n            (float(y) - params[1]) * params[2];\n          float coordYFloat = (float(x) - params[0]) * params[2] +\n            (float(y) - params[1]) * params[3];\n          int coordX = int(round(coordXFloat + params[0]));\n          int coordY = int(round(coordYFloat + params[1]));\n          ${a}\n          if(coordX >= 0 && coordX < ${r} && coordY >= 0 && coordY < ${n}) {\n            outputValue = getImage(coords[0], coordY, coordX, coords[3]);\n          }\n          setOutput(outputValue);\n        }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const zi={kernelName:s.b9H,backendName:"webgl",kernelFunc:({inputs:e,attrs:t,backend:n})=>{const{image:r}=e,{radians:a,fillValue:o,center:i}=t,u=n,l=new Li(r.shape,o),[c,d]=s.Wap.getImageCenter(i,r.shape[1],r.shape[2]),p=[[c,d,Math.sin(a),Math.cos(a)]];return u.runWebGLProgram(l,[r],r.dtype,p)}},Vi=Fn({opSnippet:"\n  // OpenGL ES does not support round function.\n  // The algorithm is based on banker's rounding.\n  float base = floor(x);\n  if ((x - base) < 0.5) {\n    return floor(x);\n  } else if ((x - base) > 0.5) {\n    return ceil(x);\n  } else {\n    if (mod(base, 2.0) == 0.0) {\n      return base;\n    } else {\n      return base + 1.0;\n    }\n  }\n"}),Gi={kernelName:s.e07,backendName:"webgl",kernelFunc:Vi},Hi=Fn({opSnippet:"return inversesqrt(x);",cpuKernelImpl:Ut}),ji={kernelName:s.bV0,backendName:"webgl",kernelFunc:Hi};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Xi{constructor(e,t,n,r,a,s,o=!0){this.variableNames=["updates","indices","defaultValue"],this.outputShape=s;const i=Re(a.length),u=Re(s.length);let l="";1===n?l="i":2===n&&(l="i, j");const c=`getIndices(${l})`;let d="";1===r?d="i":2===r&&(d="i, coords[1]");const p=`getUpdates(${d})`,h=t>1?"strides[j]":"strides";this.userCode=`\n        ${i} strides = ${i}(${a});\n\n        void main() {\n          ${u} coords = getOutputCoords();\n          float sum = 0.0;\n          bool found = false;\n          for (int i = 0; i < ${e}; i++) {\n            int flattenedIndex = 0;\n            for (int j = 0; j < ${t}; j++) {\n              int index = round(${c});\n              flattenedIndex += index * ${h};\n            }\n            if (flattenedIndex == coords[0]) {\n              sum += ${p};\n              found = true;\n            }\n          }\n          setOutput(mix(getDefaultValue(), sum, float(found)));\n        }\n      `}}const qi={kernelName:s.xQA,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{indices:a,updates:o}=t,{shape:i}=r,{sliceRank:u,numUpdates:l,sliceSize:c,strides:d,outputSize:p}=s.Wap.calculateShapes(o,a,i),h=[p/c,c];if(0===p)return n.makeTensorInfo(i,a.dtype);const f=Vn({inputs:{x:a},backend:n,attrs:{shape:[l,u]}}),m=Vn({inputs:{x:o},backend:n,attrs:{shape:[l,c]}}),g=n.makeTensorInfo([],"float32",new Float32Array([0])),x=new Xi(l,u,f.shape.length,m.shape.length,d,h),b=n.runWebGLProgram(x,[m,f,g],m.dtype),v=Vn({inputs:{x:b},backend:n,attrs:{shape:i}});return n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(b),n.disposeIntermediateTensorInfo(g),v}};
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Ki{constructor(e,t,n){let r,a;if(this.variableNames=["c","a","b"],this.outputShape=t,n>4)throw Error(`Where for rank ${n} is not yet supported`);if(1===n)a="resRC",r="resRC";else{const n=["resRC.x","resRC.y","resRC.z","resRC.w"],s=[],o=[];for(let r=0;r<t.length;r++)o.push(`${n[r]}`),r<e&&s.push(`${n[r]}`);r=s.join(),a=o.join()}const s=Re(n);this.userCode=`\n      void main() {\n        ${s} resRC = getOutputCoords();\n        float cVal = getC(${r});\n        if (cVal >= 1.0) {\n          setOutput(getA(${a}));\n        } else {\n          setOutput(getB(${a}));\n        }\n      }\n    `}}const Yi={kernelName:s.PhF,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n}=e,{condition:r,t:a,e:o}=t,i=new Ki(r.shape.length,a.shape,a.shape.length);return n.runWebGLProgram(i,[r,a,o],(0,s.x8V)(a.dtype,o.dtype))}},Zi=Fn({opSnippet:`\n  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.\n  // see: https://arxiv.org/abs/1706.02515\n  float scaleAlpha = ${s.Wap.SELU_SCALEALPHA};\n  float scale = ${s.Wap.SELU_SCALE};\n  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);\n`}),Qi={kernelName:s.oFR,backendName:"webgl",kernelFunc:Zi},Ji="return 1.0 / (1.0 + exp(-1.0 * x));",eu=Fn({opSnippet:Ji,packedOpSnippet:Ji,cpuKernelImpl:Pt}),tu={kernelName:s.a5O,backendName:"webgl",kernelFunc:eu},nu=Fn({opSnippet:"\n  if (isnan(x)) { return 0.0; }\n  return sign(x);\n"}),ru={kernelName:s.i5y,backendName:"webgl",kernelFunc:nu},au=Fn({opSnippet:"if (isnan(x)) return x;\n  return sin(x);\n"}),su={kernelName:s.RQH,backendName:"webgl",kernelFunc:au},ou=Fn({opSnippet:"\n  float e2x = exp(x);\n  return (e2x - 1.0 / e2x) / 2.0;\n"}),iu={kernelName:s.wYB,backendName:"webgl",kernelFunc:ou},uu=Fn({opSnippet:"\n  float epsilon = 1.1920928955078125e-7;\n  float threshold = log(epsilon) + 2.0;\n\n  bool too_large = x > -threshold;\n  bool too_small = x < threshold;\n\n  float result;\n  float exp_x = exp(x);\n\n  if (too_large){\n    result = x;\n  }\n  else if (too_small){\n    result = exp_x;\n  }\n  else{\n    result = log(exp_x + 1.0);\n  }\n  return result;\n"}),lu={kernelName:s.MRv,backendName:"webgl",kernelFunc:uu},cu={kernelName:s.TQc,backendName:"webgl",kernelFunc:e=>{const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{blockShape:o,paddings:i}=r;s.D5U.assert(a.shape.length<=4,(()=>"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet"));const u=o.reduce(((e,t)=>e*t)),l=[[0,0]];l.push(...i);for(let e=1+o.length;e<a.shape.length;++e)l.push([0,0]);const c=[],d=mi({inputs:{x:a},backend:n,attrs:{paddings:l,constantValue:0}}),p=s.Wap.getReshaped(d.shape,o,u,!1),h=s.Wap.getPermuted(p.length,o.length,!1),f=s.Wap.getReshapedPermuted(d.shape,o,u,!1),m=Vn({inputs:{x:d},backend:n,attrs:{shape:p}}),g=Jn({inputs:{x:m},backend:n,attrs:{perm:h}}),x=Vn({inputs:{x:g},backend:n,attrs:{shape:f}});return c.push(d),c.push(m),c.push(g),c.forEach((e=>n.disposeIntermediateTensorInfo(e))),x}};const du={kernelName:s.O3z,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n}=e,{indices:r,values:a,denseShape:s,defaultValue:o}=t;if(1!==s.shape.length)throw new Error(`Dense shape must be a vector, saw:\n         ${s.shape}`);if(2!==r.shape.length)throw new Error(`Indices must be a matrix, saw:\n         ${r.shape}`);if(1!==a.shape.length)throw new Error(`Values must be a vector, saw:\n         ${a.shape}`);if(0!==o.shape.length)throw new Error(`Default value must be a scalar, saw:\n        ${o.shape}`);const i=n.readSync(r.dataId),u=n.readSync(a.dataId),l=n.readSync(s.dataId),c=n.readSync(o.dataId)[0],[d,p,h,f,m]=Lt(i,r.shape,r.dtype,u,a.dtype,l,c);return[n.makeTensorInfo(p,r.dtype,d),n.makeTensorInfo([p[0]],a.dtype,h),n.makeTensorInfo([f.length],"bool",new Uint8Array(f.map((e=>Number(e))))),n.makeTensorInfo([m.length],r.dtype,new Int32Array(m))]}};const pu={kernelName:s.nhH,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n}=e,{inputIndices:r,inputShape:a,newShape:s}=t;if(2!==r.shape.length)throw new Error(`Input indices should be a matrix but received shape ${r.shape}`);if(1!==a.shape.length)throw new Error(`Input shape should be a vector but received shape ${a.shape}`);if(1!==s.shape.length)throw new Error(`Target shape should be a vector but received shape ${s.shape}`);const o=Array.from(n.readSync(a.dataId)),i=n.readSync(r.dataId),u=Array.from(n.readSync(s.dataId)),[l,c,d]=zt(i,r.shape,r.dtype,o,u);return[n.makeTensorInfo(c,r.dtype,l),n.makeTensorInfo([d.length],s.dtype,new Int32Array(d))]}};const hu={kernelName:s.w3H,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n}=e,{data:r,indices:a,segmentIds:s}=t;if(r.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(1!==a.shape.length)throw new Error(`Indices should be a vector but received shape\n              ${a.shape}`);if(1!==s.shape.length)throw new Error(`Segment ids should be a vector but received shape\n              ${s.shape}`);const o=n.readSync(r.dataId),i=n.readSync(a.dataId),u=n.readSync(s.dataId),[l,c]=Vt(o,r.shape,r.dtype,i,u,!0);return n.makeTensorInfo(c,r.dtype,l)}};const fu={kernelName:s.ZjV,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n}=e,{data:r,indices:a,segmentIds:s}=t;if(r.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(1!==a.shape.length)throw new Error(`Indices should be a vector but received shape\n             ${a.shape}`);if(1!==s.shape.length)throw new Error(`Segment ids should be a vector but received shape\n             ${s.shape}`);const o=n.readSync(r.dataId),i=n.readSync(a.dataId),u=n.readSync(s.dataId),[l,c]=Vt(o,r.shape,r.dtype,i,u);return n.makeTensorInfo(c,r.dtype,l)}};const mu={kernelName:s.D2d,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{sparseIndices:a,sparseValues:o,defaultValue:i}=t,{outputShape:u}=r,{sliceRank:l,numUpdates:c,strides:d,outputSize:p}=s.Wap.calculateShapes(o,a,u),h=new Xi(c,l,a.shape.length,o.shape.length,d,[p,1],!1),f=n.runWebGLProgram(h,[o,a,i],o.dtype),m=Vn({inputs:{x:f},backend:n,attrs:{shape:u}});return n.disposeIntermediateTensorInfo(f),m}};const gu={kernelName:s.L8s,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{numOrSizeSplits:o,axis:i}=r,u=s.D5U.parseAxisParam(i,a.shape)[0],l=s.Wap.prepareSplitSize(a,o,u),c=a.shape.length,d=new Array(c).fill(0),p=a.shape.slice();return l.map((e=>{const t=[...p];t[u]=e;const r=Kr({inputs:{x:a},backend:n,attrs:{begin:d,size:t}});return d[u]+=e,r}))}},xu="return sqrt(x);",bu=Fn({opSnippet:xu,packedOpSnippet:xu,cpuKernelImpl:Gt}),vu={kernelName:s.FKq,backendName:"webgl",kernelFunc:bu},ku=Fn({opSnippet:"return x * x;"}),yu={kernelName:s.bK0,backendName:"webgl",kernelFunc:ku},Iu="return (a - b) * (a - b);",wu=_n({opSnippet:Iu,packedOpSnippet:Iu}),Cu={kernelName:s._tC,backendName:"webgl",kernelFunc:wu};const Su={kernelName:s.h8e,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function({inputs:e,attrs:t,backend:n}){const{x:r}=e,a=`if (isnan(x)) return x;\n    return x > 0.0 ? 1.0 : float(${t.alpha});\n  `,s=new ln(r.shape,a);return n.runWebGLProgram(s,[r],r.dtype)}};
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class $u{constructor(e,t,n){this.variableNames=["x"],this.outputShape=n;const r=n.length,a=Re(n.length),s=Re(n.length);let o="";if(1===r)o="coords * strides + begin";else{let e=0;o=n.map(((t,r)=>(e++,1===n.length?`coords * strides[${r}] + begin[${r}]`:`coords[${e-1}] * strides[${r}] + begin[${r}]`))).join(",")}this.userCode=`\n      ${a} begin = ${a}(${e});\n      ${a} strides = ${a}(${t});\n\n      void main() {\n        ${s} coords = getOutputCoords();\n        setOutput(getX(${o}));\n      }\n    `}}const Tu={kernelName:s.jQk,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{begin:o,end:i,strides:u,beginMask:l,endMask:c,ellipsisMask:d,newAxisMask:p,shrinkAxisMask:h}=r,{nonStrided:f,$begin:m,$strides:g,size:x,newShape:b,outShape:v}=s.kuN.sliceInfo(a.shape,o,i,u,l,c,d,p,h),k=Vn({inputs:{x:a},backend:n,attrs:{shape:b}});let y;if(f){const e=Kr({inputs:{x:k},backend:n,attrs:{begin:m,size:x}});y=Vn({inputs:{x:e},backend:n,attrs:{shape:v}}),n.disposeIntermediateTensorInfo(e)}else if(v.some((e=>0===e)))y=n.makeTensorInfo(v,a.dtype,[]);else{if(n.shouldExecuteOnCPU([k])){const e=n.texData.get(k.dataId).values,t=(0,s.f3b)(k.shape,k.dtype,e),r=Ht(v,t,g,m);y=n.makeTensorInfo(v,k.dtype,r.values)}else{const e=new $u(m,g,v);y=n.runWebGLProgram(e,[k],k.dtype)}}const I=Vn({inputs:{x:y},backend:n,attrs:{shape:v}});return n.disposeIntermediateTensorInfo(k),n.disposeIntermediateTensorInfo(y),I}};const Eu={kernelName:s._JP,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{separator:a,nGramWidths:s,leftPad:o,rightPad:i,padWidth:u,preserveShortSequences:l}=r,{data:c,dataSplits:d}=t,p=n.readSync(c.dataId),h=n.readSync(d.dataId),[f,m]=jt(p,h,a,s,o,i,u,l);return[n.makeTensorInfo([f.length],"string",f),n.makeTensorInfo(d.shape,"int32",m)]}};const Nu={kernelName:s.s1s,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{skipEmpty:a}=r,{input:s,delimiter:o}=t;if("string"!==s.dtype)throw new Error("Input must be of datatype string");if(1!==s.shape.length)throw new Error(`Input must be a vector, got shape: ${s.shape}`);if(0!==o.shape.length)throw new Error(`Delimiter must be a scalar, got shape: ${o.shape}`);const i=n.readSync(s.dataId),u=n.readSync(o.dataId)[0],[l,c,d]=Xt(i,u,a),p=c.length;return[n.makeTensorInfo([p,2],"int32",l),n.makeTensorInfo([p],"string",c),n.makeTensorInfo([2],"int32",new Int32Array(d))]}};const Ru={kernelName:s.XkS,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{numBuckets:a}=r,{input:s}=t;if("string"!==s.dtype)throw new Error("Input must be of datatype string");if(a<=0)throw new Error("Number of buckets must be at least 1");const o=n.readSync(s.dataId),i=qt(o,a);return n.makeTensorInfo(s.shape,"int32",i)}},Du=Fn({opSnippet:"return tan(x);"}),Au={kernelName:s.sEM,backendName:"webgl",kernelFunc:Du},Fu=Fn({opSnippet:"\n  float e2x = exp(-2.0 * abs(x));\n  return sign(x) * (1.0 - e2x) / (1.0 + e2x);\n"}),_u={kernelName:s.MIZ,backendName:"webgl",kernelFunc:Fu};
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Ou{constructor(e,t){this.variableNames=["A"];const n=new Array(e.length);for(let r=0;r<n.length;r++)n[r]=e[r]*t[r];this.outputShape=n,this.rank=n.length;const r=Re(this.rank),a=function(e){const t=e.length;if(t>5)throw Error(`Tile for rank ${t} is not yet supported`);if(1===t)return`imod(resRC, ${e[0]})`;const n=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],r=[];for(let t=0;t<e.length;t++)r.push(`imod(${n[t]}, ${e[t]})`);return r.join()}(e);this.userCode=`\n      void main() {\n        ${r} resRC = getOutputCoords();\n        setOutput(getA(${a}));\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Mu(e){const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{reps:o}=r;if("string"===a.dtype||a.shape.length>5){const e=n.readSync(a.dataId),t="string"===a.dtype?e.map((e=>s.D5U.decodeString(e))):e,r=(0,s.f3b)(a.shape,a.dtype,t),i=Yt(r,o);return n.makeTensorInfo(i.shape,i.dtype,i.values)}const i=new Ou(a.shape,o);return n.runWebGLProgram(i,[a],a.dtype)}const Uu={kernelName:s.n9L,backendName:"webgl",kernelFunc:Mu};class Pu{constructor(e){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"negativeInf",type:"float"},{name:"dir",type:"int"},{name:"inc",type:"int"}],this.outputShape=e,this.userCode="\n       void main() {\n         ivec2 coords = getOutputCoords();\n         int batch = coords[0];\n         int elemIdx = coords[1];\n\n         // We compare elements pair-wise within a group of size 2 * inc.\n         // The comparing rule for each group alternates between ascending\n         // and descending. Within each group, we compare each pair at\n         // positions i and i+inc. To decide whether an element at position i\n         // is x0 or x1, we mod it by 2 * inc, if the result is smaller than\n         // inc, it is in the first half of the group, we denote it as x0,\n         // otherwise we denote it as x1.\n         // For example, as shown in the Bitonic top K paper referenced above,\n         // Figure5(a) shows that element[1] is in the\n         // second half of the group when group size is 2, but it is in the\n         // first half of the group when group size is 4.\n\n         bool isFirstInPair = imod(elemIdx, 2 * inc) < inc;\n         int i = isFirstInPair ? elemIdx : elemIdx - inc;\n\n         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));\n         int i1 = firstPass == 1 ? i + inc : int(getIndices(batch, i + inc));\n         float x0 = i0 < n ? getX(batch, i0) : negativeInf;\n         float x1 = i1 < n ? getX(batch, i1) : negativeInf;\n\n         // Denotes which direction indices are in (ascending or descending).\n         bool reverse = imod(elemIdx, 2 * dir) >= dir;\n         bool isGreater = x0 > x1 || (x0 == x1 && i1 > i0);\n         if (reverse == isGreater) { // Elements in opposite order of direction\n           int iTemp = i0;\n           i0 = i1;\n           i1 = iTemp;\n         }\n         if (isFirstInPair) {\n            setOutput(float(i0));\n         } else {\n            setOutput(float(i1));\n         }\n       }\n     "}}class Wu{constructor(e){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"k",type:"int"}],this.outputShape=e,this.userCode="\n    void main() {\n         // Takes max of indices (0, k), (1, k + 1), (2, k + 2) ...\n         ivec2 coords = getOutputCoords();\n         int batch = coords[0];\n         int elemIdx = coords[1];\n\n         // The output size is half of the previous size.\n         // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _ (k=4),\n         // we only need to output the indices at positions |, the indices at\n         // positions _ can be thrown away, see Figure5(b) After Phase 2\n         // (Merge phase) in the Bitonic Top K paper referenced above.\n         // For example, the paper shows we only need to output the orange bars.\n         // The output sequence should look like this | | | | | | | |.\n         // Because the sequence is halved, to map the output index back\n         // to the previous sequence to find the corresponding value,\n         // we need to double the index. When we double the index,\n         // we basically interpolate a position, so 2i looks like\n         // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k position\n         // of each 2k positions by - elemIdx % k. E.g. for output at\n         // index 4,5,6,7, we want to get the corresponding element at\n         // original index 8,9,10,11, for output at index 8,9,10,11,\n         // we want to get the corresponding element at original index\n         // 16,17,18,19, so on and so forth.\n\n         int i = elemIdx < k ? elemIdx : (elemIdx * 2 - imod(elemIdx, k));\n         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));\n         int i1 = firstPass == 1 ? i + k : int(getIndices(batch, i + k));\n\n         float x0 = getX(batch, i0);\n         float x1 = i1 < n ? getX(batch, i1) : x0;\n\n         setOutput(x0 >= x1 ? float(i0) : float(i1));\n       }\n     "}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Bu(e,t){null!==t&&e.disposeIntermediateTensorInfo(t)}function Lu(e){let t=1;for(;t<e;)t*=2;return t}const zu={kernelName:s.cWu,backendName:"webgl",kernelFunc:function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{k:o,sorted:i}=r,u=(0,s.OBj)().getNumber("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD"),l=(0,s.OBj)().getNumber("TOPK_K_CPU_HANDOFF_THRESHOLD"),c=a.shape,d=c[c.length-1];if(n.shouldExecuteOnCPU([a])||d<u||o>l){const e=n.readSync(a.dataId),[t,r]=Zt(e,c,a.dtype,o,i);return[n.makeTensorInfo(t.shape,t.dtype,t.values),n.makeTensorInfo(r.shape,r.dtype,r.values)]}if(0===o)return c[c.length-1]=0,[n.makeTensorInfo(c,a.dtype,[]),n.makeTensorInfo(c,"int32",[])];if(1===d)return[a,$s({attrs:{shape:c,dtype:"int32",value:0},backend:n})];const p=n.texData.get(a.dataId),h=null!==p&&p.isPacked,f=h?n.unpackTensor(a):a,m=s.D5U.sizeFromShape(c)/d,g=Vn({inputs:{x:f},attrs:{shape:[m,d]},backend:n});h&&Bu(n,f);const x=Lu(o),b=Lu(d);let v=null;const k=()=>null===v?[g,g]:[g,v],y=(e,t,r)=>{const a=k(),s=new Pu(r),o=[[d],[null===v?1:0],[Number.NEGATIVE_INFINITY],[e],[t]],i=v;v=n.runWebGLProgram(s,a,"int32",o),Bu(n,i)};for(let e=1;e<x;e*=2){const t=2*e;for(let n=e;n>=1;n/=2)y(t,n,[m,b])}for(let e=b;e>x;e/=2){const t=k(),r=new Wu([m,e/2]),a=[[d],[null===v?1:0],[x]],s=v;v=n.runWebGLProgram(r,t,"int32",a),Bu(n,s);const o=x/2,i=2*o;for(let e=o;e>=1;e/=2)y(i,e,v.shape)}let I=v;v=Kr({inputs:{x:v},backend:n,attrs:{begin:0,size:[m,o]}}),Bu(n,I);let w=Gs({inputs:{x:g,indices:v},backend:n,attrs:{axis:1,batchDims:1}});Bu(n,g);const C=c.slice(0,-1);C.push(o),I=v,v=Vn({inputs:{x:v},attrs:{shape:C},backend:n}),Bu(n,I);const S=w;return w=Vn({inputs:{x:w},attrs:{shape:C},backend:n}),Bu(n,S),[w,v]}};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Vu{constructor(e,t,n,r,a,s){this.variableNames=["Image","Transforms"],this.outputShape=s;const o="nearest"===n?1:2;let i;switch(r){default:i=1;break;case"reflect":i=2;break;case"wrap":i=3;break;case"nearest":i=4}this.userCode=`\n            float mapCoord(float outCoord, float len) {\n              float inCoord = outCoord;\n              if(${i} == 2) {\n                if (inCoord < 0.0) {\n                  if (len <= 1.0) {\n                    inCoord = 0.0;\n                  } else {\n                    float sz2 = 2.0 * len;\n                    if (inCoord < sz2) {\n                      inCoord = sz2 * float(int(float(-inCoord / sz2))) +\n                      inCoord;\n                    }\n                    inCoord = inCoord < -len ? inCoord + sz2 : -inCoord - 1.0;\n                  }\n                } else if (inCoord > len - 1.0) {\n                  if (len <= 1.0) {\n                    inCoord = 0.0;\n                  } else {\n                    float sz2 = 2.0 * len;\n                    inCoord -= sz2 * float(int(float(inCoord / sz2)));\n                    if (inCoord >= len) {\n                      inCoord = sz2 - inCoord - 1.0;\n                    }\n                  }\n                }\n                return clamp(inCoord, 0.0, len - 1.0);\n              } else if (${i} == 3) {\n                if (inCoord < 0.0) {\n                  if (len <= 1.0) {\n                    inCoord = 0.0;\n                  } else {\n                    float sz = len - 1.0;\n                    inCoord += len * (float(int(float(-inCoord / sz))) + 1.0);\n                  }\n                } else if (inCoord > len - 1.0) {\n                  if (len <= 1.0) {\n                    inCoord = 0.0;\n                  } else {\n                    float sz = len - 1.0;\n                    inCoord -= len * float(int(float(inCoord / sz)));\n                  }\n                }\n                return clamp(inCoord, 0.0, len - 1.0);\n              } else if (${i} == 4) {\n                return clamp(outCoord, 0.0, len - 1.0);\n              } else {\n                return outCoord;\n              }\n            }\n\n            float readWithFillValue(int batch, int coordY, int coordX,\n              int channel) {\n              float outputValue;\n              if (0 <= coordY && coordY < ${e} && 0 <= coordX && coordX < ${t}) {\n                  outputValue = getImage(batch, coordY, coordX, channel);\n              } else {\n                outputValue = float(${a});\n              }\n              return outputValue;\n            }\n\n            void main() {\n              ivec4 coords = getOutputCoords();\n              float outputValue;\n              int batch = coords[0];\n              int x = coords[2];\n              int y = coords[1];\n              int channel = coords[3];\n              float xf = float(x);\n              float yf = float(y);\n              float a1 = getTransforms(batch, 0);\n              float a2 = getTransforms(batch, 1);\n              float a3 = getTransforms(batch, 2);\n              float b1 = getTransforms(batch, 3);\n              float b2 = getTransforms(batch, 4);\n              float b3 = getTransforms(batch, 5);\n              float c1 = getTransforms(batch, 6);\n              float c2 = getTransforms(batch, 7);\n              float projection = c1 * xf + c2 * yf + 1.0;\n              if (projection == 0.0) {\n                outputValue = float(${a});\n              } else {\n                float inX = (a1 * xf + a2 * yf + a3) / projection;\n                float inY = (b1 * xf + b2 * yf + b3) / projection;\n                float mapX = mapCoord(inX, float(${t}));\n                float mapY = mapCoord(inY, float(${e}));\n\n                if (${o} == 1) {\n                  int coordY = int(round(mapY));\n                  int coordX = int(round(mapX));\n                  outputValue = readWithFillValue(batch, coordY, coordX,\n                    channel);\n                } else {\n                  float yFloor = floor(mapY);\n                  float xFloor = floor(mapX);\n                  float yCeil = yFloor + 1.0;\n                  float xCeil = xFloor + 1.0;\n                  float valueYFloor = (xCeil - mapX) *\n                  readWithFillValue(batch, int(yFloor), int(xFloor), channel) +\n                  (mapX - xFloor) *\n                  readWithFillValue(batch, int(yFloor), int(xCeil), channel);\n                  float valueYCeil = (xCeil - mapX) *\n                  readWithFillValue(batch, int(yCeil), int(xFloor), channel) +\n                  (mapX - xFloor) *\n                  readWithFillValue(batch, int(yCeil), int(xCeil), channel);\n                  outputValue = (yCeil - mapY) * valueYFloor +\n                  (mapY - yFloor) * valueYCeil;\n                }\n              }\n              setOutput(outputValue);\n            }\n        `}}const Gu={kernelName:s.wx7,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{image:a,transforms:s}=t,{interpolation:o,fillMode:i,fillValue:u,outputShape:l}=r,[c,d,p,h]=a.shape,[f,m]=null!=l?l:[d,p],g=new Vu(d,p,o,i,u,[c,f,m,h]);return n.runWebGLProgram(g,[a,s],"float32")}};const Hu={kernelName:s.kpP,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,attrs:n,backend:r}=e,{axis:a}=n,{x:s}=t;de(s,"unique"),console.warn("WARNING: ","UI might be locked temporarily as data is being downloaded");const o=r.readSync(s.dataId),{outputValues:i,outputShape:u,indices:l}=Jt(o,a,s.shape,s.dtype);return[r.makeTensorInfo(u,s.dtype,i),r.makeTensorInfo([l.length],"int32",l)]}};const ju={kernelName:s.ToN,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{value:a}=t;let{axis:s}=r;s<0&&(s+=a.shape.length);const o=a,i=o.shape.length,u=a.shape[s],l=new Array(i-1);let c=0;for(let e=0;e<i;e++)e!==s&&(l[c++]=o.shape[e]);const d=[],p=new Array(i).fill(0),h=o.shape.slice();h[s]=1;const f=new Array(u);for(let e=0;e<f.length;e++){p[s]=e;const t=Kr({inputs:{x:o},backend:n,attrs:{begin:p,size:h}}),r=Vn({inputs:{x:t},backend:n,attrs:{shape:l}});f[e]=r,d.push(t)}return d.forEach((e=>n.disposeIntermediateTensorInfo(e))),f}};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Xu{constructor(e,t){this.variableNames=["x","segmentIds"];const n=e.windowSize,r=e.batchSize,a=e.inSize,s=e.numSegments,o=s*Math.ceil(a/n);this.outputShape=[r,o];const i=4*Math.floor(n/4),u=n%4,l="\n        sumValue += dot(values, segFilter);\n    ";let c="";a%n>0&&(c=`\n        if (inIdx < 0 || inIdx >= ${a}) {\n          return initializationValue;\n        }\n      `);let d="";a%n>0&&(d=`\n        if (inIdx < 0 || inIdx >= ${a}) {\n          return -1.0;\n        }\n      `),this.userCode=`\n      const float initializationValue = 0.0;\n\n      float getValue(int batch, int inIdx) {\n        ${c}\n        return getX(batch, inIdx);\n      }\n\n      float getSegmentIdAtIndex(int inIdx) {\n        ${d}\n        return getSegmentIds(inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = int(floor(float(outIdx) / float(\n          ${s})) * float(${n}));\n        int currentSeg = int(mod(float(outIdx), float(${s})));\n\n        float sumValue = 0.0;\n\n        for (int i = 0; i < ${i}; i += 4) {\n          int inIdx = inOffset + i;\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0\n          );\n\n          ${l}\n        }\n\n        int inIdx = inOffset + ${i};\n        if (${1===u}) {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n\n          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            0,\n            0,\n            0\n          );\n\n          ${l}\n        } else if (${2===u}) {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n              0,\n              0\n          );\n\n          ${l}\n        } else if (${3===u}) {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,\n            0\n          );\n\n          ${l}\n        }\n        setOutput(sumValue);\n      }\n    `}}const qu=[yo,wo,nr,ar,or,ur,dr,fr,mr,gr,Ir,wr,Sr,Tr,Dr,Nr,Fr,Ur,Mr,Br,Lr,zr,Hr,Zr,Qr,ra,oa,la,pa,$n,ka,Da,Aa,$a,_a,Oa,Fa,Ua,Wa,La,Ha,ja,qa,es,ts,Za,rs,ss,os,us,ls,ds,hs,gs,bs,ys,Cs,Ts,Ns,As,_s,Us,Ws,Bs,zs,Hs,Xs,Ks,Cn,Ys,xa,Qs,eo,no,Nn,ao,oo,io,po,lo,fo,go,bo,So,No,Eo,Ao,Fo,_o,To,Oo,Mo,Po,Lo,Vo,Qo,zn,ei,ni,ai,oi,ea,ui,di,pi,gi,bi,An,vi,yi,na,jo,wi,Ti,Si,Gn,Ri,Ai,Oi,Ui,Bi,zi,Gi,ji,qi,Yi,Qi,tu,ru,su,iu,Yr,Zo,lu,cu,du,pu,hu,fu,mu,gu,vu,yu,Cu,Su,Tu,Eu,Nu,Ru,Ko,Qn,Au,_u,Uu,zu,Gu,er,Hu,ju,{kernelName:s.Qvg,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a,segmentIds:o}=t,{numSegments:i}=r,u=a.shape.length,l=[];let c=0;const d=s.Wap.getAxesPermutation([c],u);let p=a;null!=d&&(p=Jn({inputs:{x:a},backend:n,attrs:{perm:d}}),l.push(p),c=s.Wap.getInnerMostAxes(1,u)[0]);const h=s.Wap.segment_util.computeOutShape(p.shape,c,i),f=s.D5U.sizeFromShape([p.shape[c]]),m=Vn({inputs:{x:p},backend:n,attrs:{shape:[-1,f]}});l.push(m);const g=(0,s.z4k)(a.dtype),x=(e,t,r,a,o)=>{const i=e.shape[0],u=e.shape[1],c=s.Wap.segment_util.segOpComputeOptimalWindowSize(u,o),d=new Xu({windowSize:c,inSize:u,batchSize:i,numSegments:o},t),p=n.compileAndRun(d,[e,r],a);if(l.push(p),p.shape[1]===o)return p;const h=ki({backend:n,attrs:{start:0,stop:o,step:1,dtype:"float32"}}),f=Mu({inputs:{x:h},backend:n,attrs:{reps:[u/c]}});l.push(h),l.push(f);return x(p,t,f,a,o)},b=Vn({inputs:{x:x(m,"unsortedSegmentSum",o,g,i)},backend:n,attrs:{shape:h}});let v=b;if(null!=d){l.push(b);const e=s.Wap.getUndoAxesPermutation(d);v=Jn({inputs:{x:v},backend:n,attrs:{perm:e}})}return l.forEach((e=>n.disposeIntermediateTensorInfo(e))),v}},ci];for(const e of qu)(0,s.wCN)(e)}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */,6586:(e,t,n)=>{"use strict";n.d(t,{SYM:()=>ge,VGw:()=>xe,SpW:()=>be,mm_:()=>ve,Xze:()=>ke,oT6:()=>ye,IKK:()=>Ie,sJF:()=>we,aJk:()=>Ce,M2y:()=>Se,qw7:()=>$e,jMg:()=>Te,QCc:()=>Ne,Oyi:()=>Ee,JhU:()=>Re,_k9:()=>Ae,IMb:()=>Fe,ROF:()=>De,XLW:()=>_e,zws:()=>Oe,zvY:()=>Me,eEB:()=>Ue,RFZ:()=>Pe,gJX:()=>We,xnO:()=>Be,Zz9:()=>Le,yj2:()=>ze,Eh3:()=>Ve,mhS:()=>Ge,wUP:()=>He,wm:()=>je,x12:()=>Xe,o2y:()=>qe,ik2:()=>Ke,mc4:()=>Ye,TR1:()=>Ze,VcC:()=>Je,iHb:()=>Qe,JLz:()=>l,QRR:()=>et,T0n:()=>tt,cie:()=>nt,sL$:()=>rt,y7R:()=>at,$w:()=>st,p4S:()=>ot,Vn9:()=>ut,ekb:()=>it,$g6:()=>ct,SX0:()=>dt,HEU:()=>pt,hdR:()=>ft,Omj:()=>ht,NEP:()=>mt,YFo:()=>gt,Y0y:()=>xt,vwp:()=>bt,deh:()=>vt,Uyb:()=>kt,OR:()=>yt,jeX:()=>It,eBW:()=>fr,sHE:()=>wt,_V0:()=>xr,luS:()=>br,q1x:()=>St,qi_:()=>Ct,iZT:()=>$t,Acj:()=>Tt,Qg5:()=>Nt,iJz:()=>Et,J_u:()=>Rt,avt:()=>Dt,iWB:()=>At,r7n:()=>Ft,Zuw:()=>c,eZ0:()=>Vt,Hhh:()=>Gt,J$2:()=>_t,vtC:()=>Ot,CAk:()=>Mt,e7N:()=>Ut,ZbH:()=>Pt,kU:()=>Wt,PYm:()=>Bt,VfG:()=>Lt,MZg:()=>zt,YoZ:()=>Ht,mTV:()=>Xt,OAf:()=>Kt,OU7:()=>Yt,OV7:()=>qt,vFR:()=>Zt,BMI:()=>jt,q2K:()=>Qt,c17:()=>Jt,q8u:()=>en,jQs:()=>tn,Vbg:()=>nn,NZg:()=>rn,wYn:()=>an,kuV:()=>sn,uv1:()=>un,cye:()=>ln,W0H:()=>cn,yQU:()=>on,we_:()=>pn,qWM:()=>dn,QiL:()=>hn,lyA:()=>fn,pe_:()=>mn,o0g:()=>gn,DlI:()=>xn,e6w:()=>bn,xJR:()=>vn,oHH:()=>lt,$HU:()=>kn,qkr:()=>yn,SbG:()=>Tn,HZH:()=>In,_Yw:()=>Sn,zbQ:()=>$n,dpD:()=>wn,Hmb:()=>Cn,mKl:()=>En,b9H:()=>mr,e07:()=>Nn,bV0:()=>Rn,xQA:()=>Dn,PhF:()=>An,oFR:()=>Fn,a5O:()=>Pn,i5y:()=>Un,RQH:()=>On,wYB:()=>Mn,p2w:()=>_n,Gcp:()=>Gn,MRv:()=>Wn,TQc:()=>zn,O3z:()=>Hn,nhH:()=>jn,w3H:()=>Xn,ZjV:()=>qn,D2d:()=>Kn,L8s:()=>Vn,FKq:()=>Bn,bK0:()=>Zn,_tC:()=>Yn,h8e:()=>hr,jQk:()=>Qn,_JP:()=>Jn,s1s:()=>er,XkS:()=>tr,Tr8:()=>nr,GBy:()=>Ln,sEM:()=>rr,MIZ:()=>ar,YDk:()=>ea,n9L:()=>sr,cWu:()=>or,wx7:()=>ir,G3Y:()=>ur,kpP:()=>lr,ToN:()=>cr,Qvg:()=>dr,RuY:()=>pr,usg:()=>gr,Wap:()=>i,f3b:()=>ss,C2$:()=>a,SRH:()=>ei,OBj:()=>de,GDt:()=>u,jqO:()=>ni,wCN:()=>Cr,iD$:()=>Ws,kuN:()=>s,z4k:()=>ha,lub:()=>ti,x8V:()=>pa,D5U:()=>r,lls:()=>Ls});var r={};n.r(r),n.d(r,{arraysEqual:()=>$,assert:()=>k,assertNonNegativeIntegerDimensions:()=>ne,assertNonNull:()=>I,assertShapesMatch:()=>y,bytesFromStringArray:()=>V,bytesPerElement:()=>z,checkConversionForErrors:()=>P,clamp:()=>f,computeStrides:()=>Y,createScalarValue:()=>Br,createShuffledIndices:()=>R,decodeString:()=>Hr,distSquared:()=>v,encodeString:()=>Gr,fetch:()=>Vr,fingerPrint64:()=>Wr,flatten:()=>w,getArrayFromDType:()=>U,getTypedArrayFromDType:()=>M,hasEncodingLoss:()=>B,hexToLong:()=>Er,indexToLoc:()=>ae,inferDtype:()=>X,inferFromImplicitShape:()=>F,isBoolean:()=>H,isFunction:()=>q,isInt:()=>T,isNumber:()=>j,isPromise:()=>se,isScalarShape:()=>S,isString:()=>G,isTypedArray:()=>L,isValidDtype:()=>W,locToIndex:()=>re,makeOnesTypedArray:()=>J,makeZerosNestedTypedArray:()=>te,makeZerosTypedArray:()=>ee,nearestDivisor:()=>K,nearestLargerEven:()=>m,now:()=>zr,parseAxisParam:()=>_,randUniform:()=>b,repeatedTry:()=>A,rightPad:()=>D,shuffle:()=>p,shuffleCombo:()=>h,sizeFromShape:()=>C,sizeToSquarishShape:()=>N,squeezeShape:()=>O,sum:()=>x,swap:()=>g,tanh:()=>E,toNestedArray:()=>Q,toTypedArray:()=>Lr});var a={};n.r(a),n.d(a,{isBrowser:()=>Ca,isMobile:()=>wa});var s={};n.r(s),n.d(s,{assertParamsValid:()=>Is,computeFlatOffset:()=>Os,computeOutShape:()=>Cs,getNormalizedAxes:()=>Es,isSliceContinous:()=>_s,maskToAxes:()=>ws,parseSliceParams:()=>Ms,sliceInfo:()=>Us,startForAxis:()=>As,startIndicesWithElidedDims:()=>Ns,stopForAxis:()=>Fs,stopIndicesWithElidedDims:()=>Rs,stridesForAxis:()=>Ds,stridesWithElidedDims:()=>Ss});var o={};n.r(o),n.d(o,{collectGatherOpShapeInfo:()=>Au,computeOutShape:()=>Du,segOpComputeOptimalWindowSize:()=>Ru});var i={};n.r(i),n.d(i,{ERF_A1:()=>uu,ERF_A2:()=>lu,ERF_A3:()=>cu,ERF_A4:()=>du,ERF_A5:()=>pu,ERF_P:()=>iu,PARALLELIZE_THRESHOLD:()=>Xi,SELU_SCALE:()=>ou,SELU_SCALEALPHA:()=>su,applyActivation:()=>Hi,assertAndGetBroadcastShape:()=>yo,assertAxesAreInnerMostDims:()=>zo,assertParamsConsistent:()=>Ii,assignToTypedArray:()=>bu,axesAreInnerMostDims:()=>Po,calculateShapes:()=>au,checkEinsumDimSizes:()=>Su,combineLocations:()=>Wo,complexWithEvenIndex:()=>mu,complexWithOddIndex:()=>gu,computeConv2DInfo:()=>Ti,computeConv3DInfo:()=>Ei,computeDefaultPad:()=>Ni,computeDilation2DInfo:()=>Ci,computeOptimalWindowSize:()=>qi,computeOutAndReduceShapes:()=>Bo,computeOutShape:()=>wi,computePool2DInfo:()=>Si,computePool3DInfo:()=>$i,convertConv2DDataFormat:()=>Mi,decodeEinsumEquation:()=>wu,eitherStridesOrDilationsAreOne:()=>Oi,expandShapeToKeepDim:()=>Lo,exponent:()=>ku,exponents:()=>vu,fromStringArrayToUint8:()=>_u,fromUint8ToStringArray:()=>Fu,getAxesPermutation:()=>Vo,getBroadcastDims:()=>vo,getComplexWithIndex:()=>xu,getEinsumComputePath:()=>$u,getEinsumPermutation:()=>Cu,getFusedBiasGradient:()=>Gi,getFusedDyActivation:()=>Vi,getImageCenter:()=>Ki,getInnerMostAxes:()=>Ho,getPermuted:()=>Zi,getReductionAxes:()=>ko,getReshaped:()=>Yi,getReshapedPermuted:()=>Qi,getSliceBeginCoords:()=>Ji,getSliceSize:()=>eu,getUndoAxesPermutation:()=>Go,isIdentityPermutation:()=>Tu,log:()=>ie,mergeRealAndImagArrays:()=>hu,prepareAndValidate:()=>tu,prepareSplitSize:()=>Nu,segment_util:()=>o,shouldFuse:()=>ji,slice_util:()=>s,splitRealAndImagArrays:()=>fu,tupleValuesAreOne:()=>_i,upcastType:()=>pa,validateInput:()=>ru,validateUpdateShape:()=>nu,warn:()=>oe});var u={};n.r(u),n.d(u,{GP:()=>co,qP:()=>po,pA:()=>ho,ZA:()=>Ou});class l{constructor(e,t){this.backend=e,this.dataMover=t,this.data=new WeakMap,this.dataIdsCount=0}get(e){return this.data.has(e)||this.dataMover.moveData(this.backend,e),this.data.get(e)}set(e,t){this.dataIdsCount++,this.data.set(e,t)}has(e){return this.data.has(e)}delete(e){return this.dataIdsCount--,this.data.delete(e)}numDataIds(){return this.dataIdsCount}}class c{refCount(e){return d("refCount")}incRef(e){return d("incRef")}timerAvailable(){return!0}time(e){return d("time")}read(e){return d("read")}readSync(e){return d("readSync")}numDataIds(){return d("numDataIds")}disposeData(e,t){return d("disposeData")}write(e,t,n){return d("write")}move(e,t,n,r,a){return d("move")}memory(){return d("memory")}floatPrecision(){return d("floatPrecision")}epsilon(){return 32===this.floatPrecision()?1e-7:1e-4}dispose(){return d("dispose")}}function d(e){throw new Error(`'${e}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function p(e){let t=e.length,n=0;for(;t>0;)n=Math.random()*t|0,t--,g(e,t,n)}function h(e,t){if(e.length!==t.length)throw new Error(`Array sizes must match to be shuffled together First array length was ${e.length}Second array length was ${t.length}`);let n=e.length,r=0;for(;n>0;)r=Math.random()*n|0,n--,g(e,n,r),g(t,n,r)}function f(e,t,n){return Math.max(e,Math.min(t,n))}function m(e){return e%2==0?e:e+1}function g(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function x(e){let t=0;for(let n=0;n<e.length;n++)t+=e[n];return t}function b(e,t){const n=Math.random();return t*n+(1-n)*e}function v(e,t){let n=0;for(let r=0;r<e.length;r++){const a=Number(e[r])-Number(t[r]);n+=a*a}return n}function k(e,t){if(!e)throw new Error("string"==typeof t?t:t())}function y(e,t,n=""){k($(e,t),(()=>n+` Shapes ${e} and ${t} must match`))}function I(e){k(null!=e,(()=>"The input to the tensor constructor must be a non-null value."))}function w(e,t=[],n=!1){if(null==t&&(t=[]),Array.isArray(e)||L(e)&&!n)for(let r=0;r<e.length;++r)w(e[r],t,n);else t.push(e);return t}function C(e){if(0===e.length)return 1;let t=e[0];for(let n=1;n<e.length;n++)t*=e[n];return t}function S(e){return 0===e.length}function $(e,t){if(e===t)return!0;if(null==e||null==t)return!1;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function T(e){return e%1==0}function E(e){if(null!=Math.tanh)return Math.tanh(e);if(e===1/0)return 1;if(e===-1/0)return-1;{const t=Math.exp(2*e);return(t-1)/(t+1)}}function N(e){const t=Math.ceil(Math.sqrt(e));return[t,Math.ceil(e/t)]}function R(e){const t=new Uint32Array(e);for(let n=0;n<e;++n)t[n]=n;return p(t),t}function D(e,t){return t<=e.length?e:e+" ".repeat(t-e.length)}function A(e,t=(e=>0),n){return new Promise(((r,a)=>{let s=0;const o=()=>{if(e())return void r();s++;const i=t(s);null!=n&&s>=n?a():setTimeout(o,i)};o()}))}function F(e,t){let n=1,r=-1;for(let t=0;t<e.length;++t)if(e[t]>=0)n*=e[t];else if(-1===e[t]){if(-1!==r)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${r} and dim ${t}`);r=t}else if(e[t]<0)throw Error(`Shapes can not be < 0. Found ${e[t]} at dim ${t}`);if(-1===r){if(t>0&&t!==n)throw Error(`Size(${t}) must match the product of shape ${e}`);return e}if(0===n)throw Error(`Cannot infer the missing size in [${e}] when there are 0 elements`);if(t%n!=0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${n}`);const a=e.slice();return a[r]=t/n,a}function _(e,t){const n=t.length;return k((e=null==e?t.map(((e,t)=>t)):[].concat(e)).every((e=>e>=-n&&e<n)),(()=>`All values in axis param must be in range [-${n}, ${n}) but got axis ${e}`)),k(e.every((e=>T(e))),(()=>`All values in axis param must be integers but got axis ${e}`)),e.map((e=>e<0?n+e:e))}function O(e,t){const n=[],r=[],a=null!=t&&Array.isArray(t)&&0===t.length,s=null==t||a?null:_(t,e).sort();let o=0;for(let t=0;t<e.length;++t){if(null!=s){if(s[o]===t&&1!==e[t])throw new Error(`Can't squeeze axis ${t} since its dim '${e[t]}' is not 1`);(null==s[o]||s[o]>t)&&1===e[t]&&(n.push(e[t]),r.push(t)),s[o]<=t&&o++}1!==e[t]&&(n.push(e[t]),r.push(t))}return{newShape:n,keptDims:r}}function M(e,t){let n=null;if(null==e||"float32"===e)n=new Float32Array(t);else if("int32"===e)n=new Int32Array(t);else{if("bool"!==e)throw new Error(`Unknown data type ${e}`);n=new Uint8Array(t)}return n}function U(e,t){let n=null;if(null==e||"float32"===e)n=new Float32Array(t);else if("int32"===e)n=new Int32Array(t);else if("bool"===e)n=new Uint8Array(t);else{if("string"!==e)throw new Error(`Unknown data type ${e}`);n=new Array(t)}return n}function P(e,t){for(let n=0;n<e.length;n++){const r=e[n];if(isNaN(r)||!isFinite(r))throw Error(`A tensor of type ${t} being uploaded contains ${r}.`)}}function W(e){return"bool"===e||"complex64"===e||"float32"===e||"int32"===e||"string"===e}function B(e,t){return"complex64"!==t&&(("float32"!==t||"complex64"===e)&&(("int32"!==t||"float32"===e||"complex64"===e)&&("bool"!==t||"bool"!==e)))}function L(e){return e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array}function z(e){if("float32"===e||"int32"===e)return 4;if("complex64"===e)return 8;if("bool"===e)return 1;throw new Error(`Unknown dtype ${e}`)}function V(e){if(null==e)return 0;let t=0;return e.forEach((e=>t+=e.length)),t}function G(e){return"string"==typeof e||e instanceof String}function H(e){return"boolean"==typeof e}function j(e){return"number"==typeof e}function X(e){return Array.isArray(e)?X(e[0]):e instanceof Float32Array?"float32":e instanceof Int32Array||e instanceof Uint8Array?"int32":j(e)?"float32":G(e)?"string":H(e)?"bool":"float32"}function q(e){return!!(e&&e.constructor&&e.call&&e.apply)}function K(e,t){for(let n=t;n<e;++n)if(e%n==0)return n;return e}function Y(e){const t=e.length;if(t<2)return[];const n=new Array(t-1);n[t-2]=e[t-1];for(let r=t-3;r>=0;--r)n[r]=n[r+1]*e[r+1];return n}function Z(e,t,n,r=!1){const a=new Array;if(1===t.length){const s=t[0]*(r?2:1);for(let t=0;t<s;t++)a[t]=n[e+t]}else{const s=t[0],o=t.slice(1),i=o.reduce(((e,t)=>e*t))*(r?2:1);for(let t=0;t<s;t++)a[t]=Z(e+t*i,o,n,r)}return a}function Q(e,t,n=!1){if(0===e.length)return t[0];const r=e.reduce(((e,t)=>e*t))*(n?2:1);if(0===r)return[];if(r!==t.length)throw new Error(`[${e}] does not match the input size ${t.length}${n?" for a complex tensor":""}.`);return Z(0,e,t,n)}function J(e,t){const n=ee(e,t);for(let e=0;e<n.length;e++)n[e]=1;return n}function ee(e,t){if(null==t||"float32"===t||"complex64"===t)return new Float32Array(e);if("int32"===t)return new Int32Array(e);if("bool"===t)return new Uint8Array(e);throw new Error(`Unknown data type ${t}`)}function te(e,t){const n=e.reduce(((e,t)=>e*t),1);if(null==t||"float32"===t)return Q(e,new Float32Array(n));if("int32"===t)return Q(e,new Int32Array(n));if("bool"===t)return Q(e,new Uint8Array(n));throw new Error(`Unknown data type ${t}`)}function ne(e){e.forEach((t=>{k(Number.isInteger(t)&&t>=0,(()=>`Tensor must have a shape comprised of positive integers but got shape [${e}].`))}))}function re(e,t,n){if(0===t)return 0;if(1===t)return e[0];let r=e[e.length-1];for(let t=0;t<e.length-1;++t)r+=n[t]*e[t];return r}function ae(e,t,n){if(0===t)return[];if(1===t)return[e];const r=new Array(t);for(let t=0;t<r.length-1;++t)r[t]=Math.floor(e/n[t]),e-=r[t]*n[t];return r[r.length-1]=e,r}function se(e){return e&&e.then&&"function"==typeof e.then}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function oe(...e){de().getBool("IS_TEST")||de().getBool("PROD")||console.warn(...e)}function ie(...e){de().getBool("IS_TEST")||de().getBool("PROD")||console.log(...e)}
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const ue="tfjsflags";class le{constructor(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=ce,this.populateURLFlags()}setPlatform(e,t){null!=this.platform&&oe(`Platform ${this.platformName} has already been set. Overwriting the platform with ${t}.`),this.platformName=e,this.platform=t}registerFlag(e,t,n){if(this.flagRegistry[e]={evaluationFn:t,setHook:n},null!=this.urlFlags[e]){const t=this.urlFlags[e];oe(`Setting feature override from URL ${e}: ${t}.`),this.set(e,t)}}async getAsync(e){return e in this.flags||(this.flags[e]=await this.evaluateFlag(e)),this.flags[e]}get(e){if(e in this.flags)return this.flags[e];const t=this.evaluateFlag(e);if(se(t))throw new Error(`Flag ${e} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[e]=t,this.flags[e]}getNumber(e){return this.get(e)}getBool(e){return this.get(e)}getFlags(){return this.flags}get features(){return this.flags}set(e,t){if(null==this.flagRegistry[e])throw new Error(`Cannot set flag ${e} as it has not been registered.`);this.flags[e]=t,null!=this.flagRegistry[e].setHook&&this.flagRegistry[e].setHook(t)}evaluateFlag(e){if(null==this.flagRegistry[e])throw new Error(`Cannot evaluate flag '${e}': no evaluation function found.`);return this.flagRegistry[e].evaluationFn()}setFlags(e){this.flags=Object.assign({},e)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(void 0===this.global||void 0===this.global.location||void 0===this.global.location.search)return;const e=this.getQueryParams(this.global.location.search);if(ue in e){e.tfjsflags.split(",").forEach((e=>{const[t,n]=e.split(":");this.urlFlags[t]=function(e,t){if("true"===(t=t.toLowerCase())||"false"===t)return"true"===t;if(""+ +t===t)return+t;throw new Error(`Could not parse value flag value ${t} for flag ${e}.`)}(t,n)}))}}}function ce(e){const t={};return e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,((e,...n)=>(function(e,t,n){e[decodeURIComponent(t)]=decodeURIComponent(n||"")}(t,n[0],n[1]),n.join("=")))),t}function de(){return he}let pe,he=null;function fe(){if(null==pe){let e;if("undefined"!=typeof window)e=window;else if(void 0!==n.g)e=n.g;else if("undefined"!=typeof process)e=process;else{if("undefined"==typeof self)throw new Error("Could not find a global object");e=self}pe=e}return pe}function me(e,t){const n=function(){const e=fe();return null==e._tfGlobals&&(e._tfGlobals=new Map),e._tfGlobals}();if(n.has(e))return n.get(e);{const r=t();return n.set(e,r),n.get(e)}}const ge="Abs",xe="Acos",be="Acosh",ve="Add",ke="AddN",ye="All",Ie="Any",we="ArgMax",Ce="ArgMin",Se="Asin",$e="Asinh",Te="Atan",Ee="Atanh",Ne="Atan2",Re="AvgPool",De="AvgPoolGrad",Ae="AvgPool3D",Fe="AvgPool3DGrad",_e="BatchMatMul",Oe="BatchToSpaceND",Me="Bincount",Ue="BroadcastArgs",Pe="Cast",We="Ceil",Be="ClipByValue",Le="Complex",ze="ComplexAbs",Ve="Concat",Ge="Conv2D",He="Conv2DBackpropFilter",je="Conv2DBackpropInput",Xe="Conv3D",qe="Conv3DBackpropFilterV2",Ke="Conv3DBackpropInputV2",Ye="Cos",Ze="Cosh",Qe="Cumsum",Je="CropAndResize",et="DenseBincount",tt="DepthToSpace",nt="DepthwiseConv2dNative",rt="DepthwiseConv2dNativeBackpropFilter",at="DepthwiseConv2dNativeBackpropInput",st="Diag",ot="Dilation2D",it="Dilation2DBackpropInput",ut="Dilation2DBackpropFilter",lt="RealDiv",ct="Einsum",dt="Elu",pt="EluGrad",ht="Erf",ft="Equal",mt="Exp",gt="ExpandDims",xt="Expm1",bt="FFT",vt="Fill",kt="FlipLeftRight",yt="Floor",It="FloorDiv",wt="FusedBatchNorm",Ct="GatherV2",St="GatherNd",$t="Greater",Tt="GreaterEqual",Et="Identity",Nt="IFFT",Rt="Imag",Dt="IsFinite",At="IsInf",Ft="IsNan",_t="LeakyRelu",Ot="Less",Mt="LessEqual",Ut="LinSpace",Pt="Log",Wt="Log1p",Bt="LogicalAnd",Lt="LogicalNot",zt="LogicalOr",Vt="LRN",Gt="LRNGrad",Ht="Max",jt="Maximum",Xt="MaxPool",qt="MaxPoolGrad",Kt="MaxPool3D",Yt="MaxPool3DGrad",Zt="MaxPoolWithArgmax",Qt="Mean",Jt="Min",en="Minimum",tn="MirrorPad",nn="Mod",rn="Multinomial",an="Multiply",sn="Neg",on="NotEqual",un="NonMaxSuppressionV3",ln="NonMaxSuppressionV4",cn="NonMaxSuppressionV5",dn="OnesLike",pn="OneHot",hn="Pack",fn="PadV2",mn="Pow",gn="Prelu",xn="Prod",bn="Range",vn="Real",kn="Reciprocal",yn="Relu",In="Reshape",wn="ResizeNearestNeighbor",Cn="ResizeNearestNeighborGrad",Sn="ResizeBilinear",$n="ResizeBilinearGrad",Tn="Relu6",En="Reverse",Nn="Round",Rn="Rsqrt",Dn="ScatterNd",An="Select",Fn="Selu",_n="Slice",On="Sin",Mn="Sinh",Un="Sign",Pn="Sigmoid",Wn="Softplus",Bn="Sqrt",Ln="Sum",zn="SpaceToBatchND",Vn="SplitV",Gn="Softmax",Hn="SparseFillEmptyRows",jn="SparseReshape",Xn="SparseSegmentMean",qn="SparseSegmentSum",Kn="SparseToDense",Yn="SquaredDifference",Zn="Square",Qn="StridedSlice",Jn="StringNGrams",er="StringSplit",tr="StringToHashBucketFast",nr="Sub",rr="Tan",ar="Tanh",sr="Tile",or="TopK",ir="Transform",ur="Transpose",lr="Unique",cr="Unpack",dr="UnsortedSegmentSum",pr="ZerosLike",hr="Step",fr="FromPixels",mr="RotateWithOffset",gr="_FusedMatMul",xr="FusedConv2D",br="FusedDepthwiseConv2D",vr=me("kernelRegistry",(()=>new Map)),kr=me("gradRegistry",(()=>new Map));function yr(e,t){const n=Sr(e,t);return vr.get(n)}function Ir(e){return kr.get(e)}function wr(e){const t=vr.entries(),n=[];for(;;){const{done:r,value:a}=t.next();if(r)break;const[s,o]=a,[i]=s.split("_");i===e&&n.push(o)}return n}function Cr(e){const{kernelName:t,backendName:n}=e,r=Sr(t,n);vr.has(r)&&oe(`The kernel '${t}' for backend '${n}' is already registered`),vr.set(r,e)}function Sr(e,t){return`${t}_${e}`}var $r=n(3720);
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Tr=n.n($r)()||$r;function Er(e){return Tr.fromString(e,!0,16)}const Nr=Er("c3a5c85c97cb3127"),Rr=Er("b492b66fbe98f273"),Dr=Er("9ae16a3b2f90404f");function Ar(e){return e.xor(e.shru(47))}function Fr(e,t,n){const r=e.slice(t,t+n);return Tr.fromBytes(Array.from(r),!0,!0)}function _r(e,t){return Fr(e,t,8)}function Or(e,t){return Fr(e,t,4)}function Mr(e,t){return 0===t?e:e.shru(t).or(e.shl(64-t))}function Ur(e,t,n=Er("9ddfea08eb382d69")){let r=e.xor(t).mul(n);r=r.xor(r.shru(47));let a=t.xor(r).mul(n);return a=a.xor(a.shru(47)),a=a.mul(n),a}function Pr(e,t,n,r){return function(e,t,n,r,a,s){a=a.add(e),s=Mr(s.add(a).add(r),21);const o=a;return a=(a=a.add(t)).add(n),s=s.add(Mr(a,44)),[a.add(r),s.add(o)]}(_r(e,t),_r(e,t+8),_r(e,t+16),_r(e,t+24),n,r)}function Wr(e,t=e.length){const n=Tr.fromNumber(81,!0);if(t<=32)return t<=16?function(e,t=e.length){if(t>=8){const n=Dr.add(2*t),r=_r(e,0).add(Dr),a=_r(e,t-8);return Ur(Mr(a,37).mul(n).add(r),Mr(r,25).add(a).mul(n),n)}if(t>=4){const n=Dr.add(2*t);return Ur(Or(e,0).shl(3).add(t),Or(e,t-4),n)}if(t>0){const n=e[0]+(e[t>>1]<<8),r=t+(e[t-1]<<2);return Ar(Dr.mul(n).xor(Nr.mul(r))).mul(Dr)}return Dr}(e,t):function(e,t=e.length){const n=Dr.add(2*t),r=_r(e,0).mul(Rr),a=_r(e,8),s=_r(e,t-8).mul(n),o=_r(e,t-16).mul(Dr);return Ur(Mr(r.add(a),43).add(Mr(s,30)).add(o),r.add(Mr(a.add(Dr),18)).add(s),n)}(e,t);if(t<=64)return function(e,t=e.length){const n=Dr.add(2*t),r=_r(e,0).mul(Dr),a=_r(e,8),s=_r(e,t-8).mul(n),o=_r(e,t-16).mul(Dr),i=Mr(r.add(a),43).add(Mr(s,30)).add(o),u=Ur(i,r.add(Mr(a.add(Dr),18)).add(s),n),l=_r(e,16).mul(n),c=_r(e,24),d=i.add(_r(e,t-32)).mul(n),p=u.add(_r(e,t-24)).mul(n);return Ur(Mr(l.add(c),43).add(Mr(d,30)).add(p),l.add(Mr(c.add(r),18)).add(d),n)}(e,t);let r=n,a=n.mul(Rr).add(113),s=Ar(a.mul(Dr).add(113)).mul(Dr),o=[Tr.UZERO,Tr.UZERO],i=[Tr.UZERO,Tr.UZERO];r=r.mul(Dr).add(_r(e,0));let u=0;const l=64*(t-1>>6),c=l+(t-1&63)-63;do{r=Mr(r.add(a).add(o[0]).add(_r(e,u+8)),37).mul(Rr),a=Mr(a.add(o[1]).add(_r(e,u+48)),42).mul(Rr),r=r.xor(i[1]),a=a.add(o[0]).add(_r(e,u+40)),s=Mr(s.add(i[0]),33).mul(Rr),o=Pr(e,u,o[1].mul(Rr),r.add(i[0])),i=Pr(e,u+32,s.add(i[1]),a.add(_r(e,u+16))),[s,r]=[r,s],u+=64}while(u!==l);const d=Rr.add(s.and(255).shl(1));return u=c,i[0]=i[0].add(t-1&63),o[0]=o[0].add(i[0]),i[0]=i[0].add(o[0]),r=Mr(r.add(a).add(o[0]).add(_r(e,u+8)),37).mul(d),a=Mr(a.add(o[1]).add(_r(e,u+48)),42).mul(d),r=r.xor(i[1].mul(9)),a=a.add(o[0].mul(9).add(_r(e,u+40))),s=Mr(s.add(i[0]),33).mul(d),o=Pr(e,u,o[1].mul(d),r.add(i[0])),i=Pr(e,u+32,s.add(i[1]),a.add(_r(e,u+16))),[s,r]=[r,s],Ur(Ur(o[0],i[0],d).add(Ar(a).mul(Nr)).add(s),Ur(o[1],i[1],d).add(r),d)}
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Br(e,t){return"string"===t?Gr(e):Lr([e],t)}function Lr(e,t){if("string"===t)throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(e)&&(e=w(e)),de().getBool("DEBUG")&&P(e,t),function(e,t){return e instanceof Float32Array&&"float32"===t||e instanceof Int32Array&&"int32"===t||e instanceof Uint8Array&&"bool"===t}(e,t))return e;if(null==t||"float32"===t||"complex64"===t)return new Float32Array(e);if("int32"===t)return new Int32Array(e);if("bool"===t){const t=new Uint8Array(e.length);for(let n=0;n<t.length;++n)0!==Math.round(e[n])&&(t[n]=1);return t}throw new Error(`Unknown data type ${t}`)}function zr(){return de().platform.now()}function Vr(e,t){return de().platform.fetch(e,t)}function Gr(e,t="utf-8"){return t=t||"utf-8",de().platform.encode(e,t)}function Hr(e,t="utf-8"){return t=t||"utf-8",de().platform.decode(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class jr{constructor(e,t){this.backendTimer=e,this.logger=t,null==t&&(this.logger=new qr)}profileKernel(e,t,n){let r;const a=()=>{r=n()};let s;const o=zr();if(this.backendTimer.timerAvailable())s=this.backendTimer.time(a);else{a();for(const e of r)e.dataSync();s=Promise.resolve({kernelMs:zr()-o})}if(de().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let t=0;t<r.length;t++){const n=r[t];n.data().then((t=>{Xr(t,n.dtype,e)}))}return{kernelName:e,outputs:r,inputs:t,timeMs:s.then((e=>e.kernelMs)),extraInfo:s.then((e=>null!=e.getExtraProfileInfo?e.getExtraProfileInfo():""))}}logKernelProfile(e){const{kernelName:t,outputs:n,timeMs:r,inputs:a,extraInfo:s}=e;n.forEach((e=>{Promise.all([e.data(),r,s]).then((n=>{this.logger.logKernelProfile(t,e,n[0],n[1],a,n[2])}))}))}}function Xr(e,t,n){if("float32"!==t)return!1;for(let t=0;t<e.length;t++){const r=e[t];if(isNaN(r)||!isFinite(r))return console.warn(`Found ${r} in the result of '${n}'`),!0}return!1}class qr{logKernelProfile(e,t,n,r,a,s){const o="number"==typeof r?D(`${r}ms`,9):r.error,i=D(e,25),u=t.rank,l=t.size,c=D(t.shape.toString(),14);let d="";for(const e in a){const n=a[e];if(null!=n){const r=n.shape||t.shape,a=r.length;d+=`${e}: ${a}D ${a>0?r:""} `}}console.log(`%c${i}\t%c${o}\t%c${u}D ${c}\t%c${l}\t%c${d}\t%c${s}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}function Kr(e,t,n,r){const a=Y(t),s=function(e,t,n,r){const a=C(t),s=r[r.length-1],o=new Array(s).fill(0),i=t.length,u="complex64"===n?Jr(e):e;if(i>1)for(let e=0;e<a/s;e++){const t=e*s;for(let e=0;e<s;e++)o[e]=Math.max(o[e],Yr(u[t+e],0,n).length)}return o}(e,t,n,a),o=t.length,i=Qr(e,t,n,a,s),u=["Tensor"];return r&&(u.push(`  dtype: ${n}`),u.push(`  rank: ${o}`),u.push(`  shape: [${t}]`),u.push("  values:")),u.push(i.map((e=>"    "+e)).join("\n")),u.join("\n")}function Yr(e,t,n){let r;return r=Array.isArray(e)?`${parseFloat(e[0].toFixed(7))} + ${parseFloat(e[1].toFixed(7))}j`:G(e)?`'${e}'`:"bool"===n?Zr(e):parseFloat(e.toFixed(7)).toString(),D(r,t)}function Zr(e){return 0===e?"false":"true"}function Qr(e,t,n,r,a,s=!0){const o="complex64"===n?2:1,i=t[0],u=t.length;if(0===u){if("complex64"===n){return[Yr(Jr(e)[0],0,n)]}return"bool"===n?[Zr(e[0])]:[e[0].toString()]}if(1===u){if(i>20){const t=3*o;let r=Array.from(e.slice(0,t)),s=Array.from(e.slice((i-3)*o,i*o));return"complex64"===n&&(r=Jr(r),s=Jr(s)),["["+r.map(((e,t)=>Yr(e,a[t],n))).join(", ")+", ..., "+s.map(((e,t)=>Yr(e,a[i-3+t],n))).join(", ")+"]"]}return["["+("complex64"===n?Jr(e):Array.from(e)).map(((e,t)=>Yr(e,a[t],n))).join(", ")+"]"]}const l=t.slice(1),c=r.slice(1),d=r[0]*o,p=[];if(i>20){for(let t=0;t<3;t++){const r=t*d,s=r+d;p.push(...Qr(e.slice(r,s),l,n,c,a,!1))}p.push("...");for(let t=i-3;t<i;t++){const r=t*d,s=r+d;p.push(...Qr(e.slice(r,s),l,n,c,a,t===i-1))}}else for(let t=0;t<i;t++){const r=t*d,s=r+d;p.push(...Qr(e.slice(r,s),l,n,c,a,t===i-1))}const h=2===u?",":"";p[0]="["+p[0]+h;for(let e=1;e<p.length-1;e++)p[e]=" "+p[e]+h;let f=",\n";for(let e=2;e<u;e++)f+="\n";return p[p.length-1]=" "+p[p.length-1]+"]"+(s?"":f),p}function Jr(e){const t=[];for(let n=0;n<e.length;n+=2)t.push([e[n],e[n+1]]);return t}
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class ea{constructor(e,t,n){if(this.dtype=t,this.shape=e.slice(),this.size=C(e),null!=n){const e=n.length;k(e===this.size,(()=>`Length of values '${e}' does not match the size inferred by the shape '${this.size}'.`))}if("complex64"===t)throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=n||U(t,this.size),this.strides=Y(e)}set(e,...t){0===t.length&&(t=[0]),k(t.length===this.rank,(()=>`The number of provided coordinates (${t.length}) must match the rank (${this.rank})`));const n=this.locToIndex(t);this.values[n]=e}get(...e){0===e.length&&(e=[0]);let t=0;for(const n of e){if(n<0||n>=this.shape[t]){const t=`Requested out of range element at ${e}.   Buffer shape=${this.shape}`;throw new Error(t)}t++}let n=e[e.length-1];for(let t=0;t<e.length-1;++t)n+=this.strides[t]*e[t];return this.values[n]}locToIndex(e){if(0===this.rank)return 0;if(1===this.rank)return e[0];let t=e[e.length-1];for(let n=0;n<e.length-1;++n)t+=this.strides[n]*e[n];return t}indexToLoc(e){if(0===this.rank)return[];if(1===this.rank)return[e];const t=new Array(this.shape.length);for(let n=0;n<t.length-1;++n)t[n]=Math.floor(e/this.strides[n]),e-=t[n]*this.strides[n];return t[t.length-1]=e,t}get rank(){return this.shape.length}toTensor(){return ta().makeTensor(this.values,this.shape,this.dtype)}}let ta=null,na=null,ra=null;class aa{constructor(e,t,n,r){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=t||"float32",this.size=C(e),this.strides=Y(e),this.dataId=n,this.id=r,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const e=await this.data();return na.buffer(this.shape,this.dtype,e)}bufferSync(){return na.buffer(this.shape,this.dtype,this.dataSync())}async array(){const e=await this.data();return Q(this.shape,e,"complex64"===this.dtype)}arraySync(){return Q(this.shape,this.dataSync(),"complex64"===this.dtype)}async data(){this.throwIfDisposed();const e=ta().read(this.dataId);if("string"===this.dtype){const t=await e;try{return t.map((e=>Hr(e)))}catch(e){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return e}dataSync(){this.throwIfDisposed();const e=ta().readSync(this.dataId);if("string"===this.dtype)try{return e.map((e=>Hr(e)))}catch(e){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return e}async bytes(){this.throwIfDisposed();const e=await ta().read(this.dataId);return"string"===this.dtype?e:new Uint8Array(e.buffer)}dispose(){this.isDisposed||(ta().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(e=!1){return na.print(this,e)}clone(){return this.throwIfDisposed(),na.clone(this)}toString(e=!1){return Kr(this.dataSync(),this.shape,this.dtype,e)}cast(e){return this.throwIfDisposed(),na.cast(this,e)}variable(e=!0,t,n){return this.throwIfDisposed(),ta().makeVariable(this,e,t,n)}}Object.defineProperty(aa,Symbol.hasInstance,{value:e=>!!e&&null!=e.data&&null!=e.dataSync&&null!=e.throwIfDisposed}),me("Tensor",(()=>aa));class sa extends aa{constructor(e,t,n,r){super(e.shape,e.dtype,e.dataId,r),this.trainable=t,this.name=n}assign(e){if(e.dtype!==this.dtype)throw new Error(`dtype of the new value (${e.dtype}) and previous value (${this.dtype}) must match`);if(!$(e.shape,this.shape))throw new Error(`shape of the new value (${e.shape}) and previous value (${this.shape}) must match`);ta().disposeTensor(this),this.dataId=e.dataId,ta().incRef(this,null)}dispose(){ta().disposeVariable(this),this.isDisposedInternal=!0}}
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var oa,ia,ua,la,ca;Object.defineProperty(sa,Symbol.hasInstance,{value:e=>e instanceof aa&&null!=e.assign&&e.assign instanceof Function}),function(e){e.R0="R0",e.R1="R1",e.R2="R2",e.R3="R3",e.R4="R4",e.R5="R5",e.R6="R6"}(oa||(oa={})),function(e){e.float32="float32",e.int32="int32",e.bool="int32",e.complex64="complex64"}(ia||(ia={})),function(e){e.float32="float32",e.int32="int32",e.bool="bool",e.complex64="complex64"}(ua||(ua={})),function(e){e.float32="float32",e.int32="float32",e.bool="float32",e.complex64="complex64"}(la||(la={})),function(e){e.float32="complex64",e.int32="complex64",e.bool="complex64",e.complex64="complex64"}(ca||(ca={}));const da={float32:la,int32:ia,bool:ua,complex64:ca};function pa(e,t){if("string"===e||"string"===t){if("string"===e&&"string"===t)return"string";throw new Error(`Can not upcast ${e} with ${t}`)}return da[e][t]}function ha(e){return pa(e,"int32")}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function fa(e,t){if(e.dtype===t.dtype)return[e,t];const n=pa(e.dtype,t.dtype);return[e.cast(n),t.cast(n)]}function ma(e){const t=[];return ga(e,t,new Set),t}function ga(e,t,n){if(null==e)return;if(e instanceof aa)return void t.push(e);if(r=e,!Array.isArray(r)&&"object"!=typeof r)return;var r;const a=e;for(const e in a){const r=a[e];n.has(r)||(n.add(r),ga(r,t,n))}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function xa(e){return null!=e.kernelName}class ba{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map((e=>e.name))))}}}dispose(){for(const e in this.registeredVariables)this.registeredVariables[e].dispose()}}class va{constructor(e){this.ENV=e,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new ba}async ready(){if(null!=this.pendingBackendInit)return this.pendingBackendInit.then((()=>{}));if(null!=this.backendInstance)return;const e=this.getSortedBackends();for(let t=0;t<e.length;t++){const n=e[t];if(await this.initializeBackend(n).success)return void await this.setBackend(n)}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(null!=this.pendingBackendInit)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(null==this.backendInstance){const{name:e,asyncInit:t}=this.initializeBackendsAndReturnBest();if(t)throw new Error(`The highest priority backend '${e}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(e)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(e){if(!(e in this.registry)){if(!(e in this.registryFactory))return null;{const{asyncInit:t}=this.initializeBackend(e);if(t)return null}}return this.registry[e]}findBackendFactory(e){return e in this.registryFactory?this.registryFactory[e].factory:null}registerBackend(e,t,n=1){return e in this.registryFactory?(oe(`${e} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[e]={factory:t,priority:n},!0)}async setBackend(e){if(null==this.registryFactory[e])throw new Error(`Backend name '${e}' not found in registry`);if(this.backendName=e,null==this.registry[e]){this.backendInstance=null;const{success:t,asyncInit:n}=this.initializeBackend(e);if(!(n?await t:t))return!1}return this.backendInstance=this.registry[e],this.setupRegisteredKernels(),this.profiler=new jr(this.backendInstance),!0}setupRegisteredKernels(){wr(this.backendName).forEach((e=>{null!=e.setupFunc&&e.setupFunc(this.backendInstance)}))}disposeRegisteredKernels(e){wr(e).forEach((t=>{null!=t.disposeFunc&&t.disposeFunc(this.registry[e])}))}initializeBackend(e){const t=this.registryFactory[e];if(null==t)throw new Error(`Cannot initialize backend ${e}, no registration found.`);try{const n=t.factory();if(!n||n instanceof c||"function"!=typeof n.then)return this.registry[e]=n,{success:!0,asyncInit:!1};{const t=++this.pendingBackendInitId,r=n.then((n=>!(t<this.pendingBackendInitId)&&(this.registry[e]=n,this.pendingBackendInit=null,!0))).catch((n=>(t<this.pendingBackendInitId||(this.pendingBackendInit=null,oe(`Initialization of backend ${e} failed`),oe(n.stack||n.message)),!1)));return this.pendingBackendInit=r,{success:r,asyncInit:!0}}}catch(t){return oe(`Initialization of backend ${e} failed`),oe(t.stack||t.message),{success:!1,asyncInit:!1}}}removeBackend(e){if(!(e in this.registryFactory))throw new Error(`${e} backend not found in registry`);this.backendName===e&&null!=this.pendingBackendInit&&this.pendingBackendInitId++,e in this.registry&&(this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e]),delete this.registryFactory[e],this.backendName===e&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(0===Object.keys(this.registryFactory).length)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort(((e,t)=>this.registryFactory[t].priority-this.registryFactory[e].priority))}initializeBackendsAndReturnBest(){const e=this.getSortedBackends();for(let t=0;t<e.length;t++){const n=e[t],{success:r,asyncInit:a}=this.initializeBackend(n);if(a||r)return{name:n,asyncInit:a}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(e,t){const n=this.state.tensorInfo.get(t),r=n.backend,a=this.readSync(t),s=r.refCount(t);r.disposeData(t,!0),n.backend=e,e.move(t,a,n.shape,n.dtype,s),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(e,t){let n,r=null;if(null==t){if("function"!=typeof e)throw new Error("Please provide a function to tidy()");t=e}else{if("string"!=typeof e&&!(e instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if("function"!=typeof t)throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");r=e}return this.scopedRun((()=>this.startScope(r)),(()=>this.endScope(n)),(()=>(n=t(),n instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),n)))}scopedRun(e,t,n){e();try{const e=n();return t(),e}catch(e){throw t(),e}}nextTensorId(){return va.nextTensorId++}nextVariableId(){return va.nextVariableId++}clone(e){const t=ya.runKernel(Et,{x:e}),n={x:e};return this.addTapeNode(this.state.activeScope.name,n,[t],(e=>({x:()=>{const t={x:e},n={dtype:"float32"};return ya.runKernel(Pe,t,n)}})),[],{}),t}runKernel(e,t,n){null==this.backendName&&this.backend;if(!(null!=yr(e,this.backendName)))throw new Error(`Kernel '${e}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:e,inputs:t,attrs:n})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(e,t,n){const r=this.backend.numDataIds();let a=0;n.forEach((e=>{a+="complex64"===e.dtype?3:1}));const s=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],o=r-t-a-s;if(o>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${o} data ids) after running '${e}'`)}runKernelFunc(e){let t,n=[];const r=this.isTapeOn(),a=this.state.numBytes,s=this.state.numTensors;let o,i;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0),null==this.backendName&&this.backend;const u=xa(e)?e.kernelName:null!=this.state.activeScope?this.state.activeScope.name:"";if(xa(e)){const{kernelName:t,inputs:a,attrs:s}=e;null==this.backendName&&this.backend;const u=yr(t,this.backendName);k(null!=u,(()=>`Cannot find registered kernel '${t}' for backend '${this.backendName}'`)),o=()=>{const e=this.backend.numDataIds();i=u.kernelFunc({inputs:a,attrs:s,backend:this.backend});const o=Array.isArray(i)?i:[i];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(t,e,o);const l=o.map((e=>{if(null!=e.rank)return e;const{dataId:t,shape:n,dtype:r}=e;return this.makeTensorFromDataId(t,n,r)}));if(r){const e=this.getTensorsForGradient(t,a,l);n=this.saveTensorsForBackwardMode(e)}return l}}else{const{forwardFunc:t}=e,a=e=>{r&&(n=e.map((e=>this.keep(this.clone(e)))))};o=()=>{const e=this.backend.numDataIds();i=this.tidy((()=>t(this.backend,a)));const n=Array.isArray(i)?i:[i];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(u,e,n),n}}const{inputs:l,attrs:c}=e,d=xa(e)?null:e.backwardsFunc;let p;return this.scopedRun((()=>this.state.kernelDepth++),(()=>this.state.kernelDepth--),(()=>{this.ENV.getBool("DEBUG")||this.state.profiling?(p=this.profiler.profileKernel(u,l,(()=>o())),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(p),t=p.outputs):t=o()})),r&&this.addTapeNode(u,l,t,d,n,c),this.state.profiling&&this.state.activeProfile.kernels.push({name:u,bytesAdded:this.state.numBytes-a,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-s,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(l).map((e=>null!=l[e]?l[e].shape:null)),outputShapes:t.map((e=>e.shape)),kernelTimeMs:p.timeMs,extraInfo:p.extraInfo}),Array.isArray(i)?t:t[0]}saveTensorsForBackwardMode(e){return e.map((e=>this.keep(this.clone(e))))}getTensorsForGradient(e,t,n){const r=Ir(e);if(null!=r){const e=r.inputsToSave||[],a=r.outputsToSave||[];let s;r.saveAllInputs?(k(Array.isArray(t),(()=>"saveAllInputs is true, expected inputs to be an array.")),s=Object.keys(t).map((e=>t[e]))):s=e.map((e=>t[e]));const o=n.filter(((e,t)=>a[t]));return s.concat(o)}return[]}makeTensor(e,t,n,r){if(null==e)throw new Error("Values passed to engine.makeTensor() are null");n=n||"float32",r=r||this.backend;let a=e;"string"===n&&G(e[0])&&(a=e.map((e=>Gr(e))));const s=r.write(a,t,n),o=new aa(t,n,s,this.nextTensorId());if(this.trackTensor(o,r),"string"===n){const e=this.state.tensorInfo.get(s),t=V(a);this.state.numBytes+=t-e.bytes,e.bytes=t}return o}makeTensorFromDataId(e,t,n,r){const a=new aa(t,n=n||"float32",e,this.nextTensorId());return this.trackTensor(a,r),a}makeVariable(e,t=!0,n,r){n=n||this.nextVariableId().toString(),null!=r&&r!==e.dtype&&(e=e.cast(r));const a=new sa(e,t,n,this.nextTensorId());if(null!=this.state.registeredVariables[a.name])throw new Error(`Variable with name ${a.name} was already registered`);return this.state.registeredVariables[a.name]=a,this.incRef(a,this.backend),a}trackTensor(e,t){this.state.numTensors++,"string"===e.dtype&&this.state.numStringTensors++;let n=0;"complex64"!==e.dtype&&"string"!==e.dtype&&(n=e.size*z(e.dtype)),this.state.numBytes+=n,this.state.tensorInfo.has(e.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(e.dataId,{backend:t||this.backend,dtype:e.dtype,shape:e.shape,bytes:n})),e instanceof sa||this.track(e)}incRef(e,t){this.trackTensor(e,t),this.backend.incRef(e.dataId)}removeDataId(e,t){this.state.tensorInfo.has(e)&&this.state.tensorInfo.get(e).backend===t&&(this.state.tensorInfo.delete(e),this.state.numDataBuffers--)}disposeTensor(e){if(!this.state.tensorInfo.has(e.dataId))return;const t=this.state.tensorInfo.get(e.dataId);if(this.state.numTensors--,"string"===e.dtype&&(this.state.numStringTensors--,this.state.numBytes-=t.bytes),"complex64"!==e.dtype&&"string"!==e.dtype){const t=e.size*z(e.dtype);this.state.numBytes-=t}t.backend.disposeData(e.dataId)&&this.removeDataId(e.dataId,t.backend)}disposeVariables(){for(const e in this.state.registeredVariables){const t=this.state.registeredVariables[e];this.disposeVariable(t)}}disposeVariable(e){this.disposeTensor(e),null!=this.state.registeredVariables[e.name]&&delete this.state.registeredVariables[e.name]}memory(){const e=this.backend.memory();return e.numTensors=this.state.numTensors,e.numDataBuffers=this.state.numDataBuffers,e.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(e.unreliable=!0,null==e.reasons&&(e.reasons=[]),e.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),e}async profile(e){this.state.profiling=!0;const t=this.state.numBytes,n=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await e(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map((e=>e.totalBytesSnapshot))),this.state.activeProfile.newBytes=this.state.numBytes-t,this.state.activeProfile.newTensors=this.state.numTensors-n;for(const e of this.state.activeProfile.kernels)e.kernelTimeMs=await e.kernelTimeMs,e.extraInfo=await e.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&0===this.state.kernelDepth}addTapeNode(e,t,n,r,a,s){const o={id:this.state.nextTapeNodeId++,kernelName:e,inputs:t,outputs:n,saved:a},i=Ir(e);null!=i&&(r=i.gradFunc),null!=r&&(o.gradient=e=>(e=e.map(((e,t)=>{if(null==e){const e=n[t],r=ee(e.size,e.dtype);return this.makeTensor(r,e.shape,e.dtype)}return e})),r(e.length>1?e:e[0],a,s))),this.state.activeTape.push(o)}keep(e){return e.kept=!0,e}startTape(){0===this.state.gradientDepth&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(e){const t={track:[],name:"unnamed scope",id:this.state.nextScopeId++};e&&(t.name=e),this.state.scopeStack.push(t),this.state.activeScope=t}endScope(e){const t=ma(e),n=new Set(t.map((e=>e.id)));for(let e=0;e<this.state.activeScope.track.length;e++){const t=this.state.activeScope.track[e];t.kept||n.has(t.id)||t.dispose()}const r=this.state.scopeStack.pop();this.state.activeScope=0===this.state.scopeStack.length?null:this.state.scopeStack[this.state.scopeStack.length-1],t.forEach((e=>{e.kept||e.scopeId!==r.id||this.track(e)}))}gradients(e,t,n,r=!1){if(k(t.length>0,(()=>"gradients() received an empty list of xs.")),null!=n&&"float32"!==n.dtype)throw new Error(`dy must have 'float32' dtype, but has '${n.dtype}'`);const a=this.scopedRun((()=>this.startTape()),(()=>this.endTape()),(()=>this.tidy("forward",e)));k(a instanceof aa,(()=>"The result y returned by f() must be a tensor."));const s=
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n){const r={},a={};for(let e=0;e<t.length;e++)r[t[e].id]=!0;for(let n=0;n<e.length;n++){const s=e[n],o=s.inputs;for(const e in o){const n=o[e];let i=!1;for(let e=0;e<t.length;e++)if(r[n.id]){s.outputs.forEach((e=>r[e.id]=!0)),i=!0,a[s.id]=!0;break}if(i)break}}const s={};s[n.id]=!0;const o={};for(let t=e.length-1;t>=0;t--){const n=e[t],r=n.inputs;for(let e=0;e<n.outputs.length;e++)if(s[n.outputs[e].id]){for(const e in r)s[r[e].id]=!0,o[n.id]=!0;break}}const i=[];for(let t=0;t<e.length;t++){const n=e[t];if(a[n.id]&&o[n.id]){const e={};for(const t in n.inputs){const a=n.inputs[t];r[a.id]&&(e[t]=a)}const t=Object.assign({},n);t.inputs=e,t.outputs=n.outputs,i.push(t)}}return i}(this.state.activeTape,t,a);if(!r&&0===s.length&&t.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",(()=>{const e={};e[a.id]=null==n?function(e){const t=J(C(e),"float32");return ya.makeTensor(t,e,"float32")}(a.shape):n,function(e,t,n,r){for(let a=t.length-1;a>=0;a--){const s=t[a],o=[];if(s.outputs.forEach((t=>{const n=e[t.id];null!=n?o.push(n):o.push(null)})),null==s.gradient)throw new Error(`Cannot compute gradient: gradient function not found for ${s.kernelName}.`);const i=s.gradient(o);for(const t in s.inputs){if(!(t in i))throw new Error(`Cannot backprop through input ${t}. Available gradients found: ${Object.keys(i)}.`);const a=n((()=>i[t]()));if("float32"!==a.dtype)throw new Error(`Error in gradient for op ${s.kernelName}. The gradient of input ${t} must have 'float32' dtype, but has '${a.dtype}'`);const o=s.inputs[t];if(!$(a.shape,o.shape))throw new Error(`Error in gradient for op ${s.kernelName}. The gradient of input '${t}' has shape '${a.shape}', which does not match the shape of the input '${o.shape}'`);if(null==e[o.id])e[o.id]=a;else{const t=e[o.id];e[o.id]=r(t,a),t.dispose()}}}}(e,s,(e=>this.tidy(e)),Ia);const r=t.map((t=>e[t.id]));return 0===this.state.gradientDepth&&(this.state.activeTape.forEach((e=>{for(const t of e.saved)t.dispose()})),this.state.activeTape=null),{value:a,grads:r}}))}customGrad(e){return k(q(e),(()=>"The f passed in customGrad(f) must be a function.")),(...t)=>{let n;k(t.every((e=>e instanceof aa)),(()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors"));const r={};t.forEach(((e,t)=>{r[t]=e}));return this.runKernelFunc({forwardFunc:(r,a)=>(n=e(...t,a),k(n.value instanceof aa,(()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor")),k(q(n.gradFunc),(()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function.")),n.value),backwardsFunc:(e,r)=>{const a=n.gradFunc(e,r),s=Array.isArray(a)?a:[a];k(s.length===t.length,(()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...).")),k(s.every((e=>e instanceof aa)),(()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."));const o={};return s.forEach(((e,t)=>{o[t]=()=>e})),o},inputs:r})}}readSync(e){return this.state.tensorInfo.get(e).backend.readSync(e)}read(e){return this.state.tensorInfo.get(e).backend.read(e)}async time(e){const t=zr(),n=await this.backend.time(e);return n.wallMs=zr()-t,n}track(e){return null!=this.state.activeScope&&(e.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(e)),e}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new ba;for(const e in this.registry)this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}function ka(){const e=fe();if(null==e._tfengine){const t=new le(e);e._tfengine=new va(t)}var t;return t=e._tfengine.ENV,he=t,ta=()=>e._tfengine,e._tfengine}va.nextTensorId=0,va.nextVariableId=0;const ya=ka();function Ia(e,t){const n={a:e,b:t};return ya.runKernel(ve,n)}function wa(e){if(e||"undefined"!=typeof navigator&&null!=navigator){if(e||(e=navigator),"ReactNative"===e.product)return!0;const t=e.userAgent||e.vendor||("undefined"!=typeof window?window.opera:"");if(!t){const t=e;return t.userAgentData&&t.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}return!1}function Ca(){return"undefined"!=typeof window&&null!=window.document||"undefined"!=typeof WorkerGlobalScope}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Sa=de();Sa.registerFlag("DEBUG",(()=>!1),(e=>{e&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")})),Sa.registerFlag("IS_BROWSER",(()=>Ca())),Sa.registerFlag("IS_NODE",(()=>"undefined"!=typeof process&&void 0!==process.versions&&void 0!==process.versions.node)),Sa.registerFlag("IS_CHROME",(()=>"undefined"!=typeof navigator&&null!=navigator&&null!=navigator.userAgent&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor))),Sa.registerFlag("PROD",(()=>!1)),Sa.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",(()=>Sa.getBool("DEBUG"))),Sa.registerFlag("DEPRECATION_WARNINGS_ENABLED",(()=>!0)),Sa.registerFlag("IS_TEST",(()=>!1)),Sa.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",(()=>!0)),Sa.registerFlag("WRAP_TO_IMAGEBITMAP",(()=>!1));const $a="undefined"!=typeof Buffer&&("undefined"==typeof Blob||"undefined"==typeof atob||"undefined"==typeof btoa);function Ta(e){return $a?Buffer.byteLength(e):new Blob([e]).size}function Ea(e){if(1===e.length)return e[0];let t=0;e.forEach((e=>{t+=e.byteLength}));const n=new Uint8Array(t);let r=0;return e.forEach((e=>{n.set(new Uint8Array(e),r),r+=e.byteLength})),n.buffer}function Na(e,t){const n={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,weightsManifest:t};return null!=e.signature&&(n.signature=e.signature),null!=e.userDefinedMetadata&&(n.userDefinedMetadata=e.userDefinedMetadata),null!=e.modelInitializer&&(n.modelInitializer=e.modelInitializer),null!=e.trainingConfig&&(n.trainingConfig=e.trainingConfig),n}function Ra(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:null==e.modelTopology?0:Ta(JSON.stringify(e.modelTopology)),weightSpecsBytes:null==e.weightSpecs?0:Ta(JSON.stringify(e.weightSpecs)),weightDataBytes:null==e.weightData?0:e.weightData.byteLength}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Da{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return null==Da.instance&&(Da.instance=new Da),Da.instance}static registerSaveRouter(e){Da.getInstance().saveRouters.push(e)}static registerLoadRouter(e){Da.getInstance().loadRouters.push(e)}static getSaveHandlers(e){return Da.getHandlers(e,"save")}static getLoadHandlers(e,t){return Da.getHandlers(e,"load",t)}static getHandlers(e,t,n){const r=[];return("load"===t?Da.getInstance().loadRouters:Da.getInstance().saveRouters).forEach((t=>{const a=t(e,n);null!==a&&r.push(a)})),r}}const Aa="tensorflowjs",Fa="models_store",_a="model_info_store";function Oa(){if(!de().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const e="undefined"==typeof window?self:window,t=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB||e.shimIndexedDB;if(null==t)throw new Error("The current browser does not appear to support IndexedDB.");return t}function Ma(e){const t=e.result;t.createObjectStore(Fa,{keyPath:"modelPath"}),t.createObjectStore(_a,{keyPath:"modelPath"})}class Ua{constructor(e){if(this.indexedDB=Oa(),null==e||!e)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=e}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,e)}async load(){return this.databaseAction(this.modelPath)}databaseAction(e,t){return new Promise(((e,n)=>{const r=this.indexedDB.open(Aa,1);r.onupgradeneeded=()=>Ma(r),r.onsuccess=()=>{const a=r.result;if(null==t){const t=a.transaction(Fa,"readonly"),r=t.objectStore(Fa).get(this.modelPath);r.onsuccess=()=>{if(null==r.result)return a.close(),n(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));e(r.result.modelArtifacts)},r.onerror=e=>(a.close(),n(r.error)),t.oncomplete=()=>a.close()}else{const r=Ra(t),s=a.transaction(_a,"readwrite");let o=s.objectStore(_a);const i=o.put({modelPath:this.modelPath,modelArtifactsInfo:r});let u;i.onsuccess=()=>{u=a.transaction(Fa,"readwrite");const i=u.objectStore(Fa).put({modelPath:this.modelPath,modelArtifacts:t,modelArtifactsInfo:r});i.onsuccess=()=>e({modelArtifactsInfo:r}),i.onerror=e=>{o=s.objectStore(_a);const t=o.delete(this.modelPath);t.onsuccess=()=>(a.close(),n(i.error)),t.onerror=e=>(a.close(),n(i.error))}},i.onerror=e=>(a.close(),n(i.error)),s.oncomplete=()=>{null==u?a.close():u.oncomplete=()=>a.close()}}},r.onerror=e=>n(r.error)}))}}Ua.URL_SCHEME="indexeddb://";const Pa=e=>{return de().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(Ua.URL_SCHEME)?(t=e.slice(Ua.URL_SCHEME.length),new Ua(t)):null;var t};Da.registerSaveRouter(Pa),Da.registerLoadRouter(Pa);class Wa{constructor(){this.indexedDB=Oa()}async listModels(){return new Promise(((e,t)=>{const n=this.indexedDB.open(Aa,1);n.onupgradeneeded=()=>Ma(n),n.onsuccess=()=>{const r=n.result,a=r.transaction(_a,"readonly"),s=a.objectStore(_a).getAll();s.onsuccess=()=>{const t={};for(const e of s.result)t[e.modelPath]=e.modelArtifactsInfo;e(t)},s.onerror=e=>(r.close(),t(s.error)),a.oncomplete=()=>r.close()},n.onerror=e=>t(n.error)}))}async removeModel(e){var t;return e=(t=e).startsWith(Ua.URL_SCHEME)?t.slice(Ua.URL_SCHEME.length):t,new Promise(((t,n)=>{const r=this.indexedDB.open(Aa,1);r.onupgradeneeded=()=>Ma(r),r.onsuccess=()=>{const a=r.result,s=a.transaction(_a,"readwrite"),o=s.objectStore(_a),i=o.get(e);let u;i.onsuccess=()=>{if(null==i.result)return a.close(),n(new Error(`Cannot find model with path '${e}' in IndexedDB.`));{const r=o.delete(e),s=()=>{u=a.transaction(Fa,"readwrite");const r=u.objectStore(Fa).delete(e);r.onsuccess=()=>t(i.result.modelArtifactsInfo),r.onerror=e=>n(i.error)};r.onsuccess=s,r.onerror=e=>(s(),a.close(),n(i.error))}},i.onerror=e=>(a.close(),n(i.error)),s.oncomplete=()=>{null==u?a.close():u.oncomplete=()=>a.close()}},r.onerror=e=>n(r.error)}))}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Ba="/",La="tensorflowjs_models",za="info",Va="model_topology",Ga="weight_specs",Ha="weight_data",ja="model_metadata";function Xa(e){return{info:[La,e,za].join(Ba),topology:[La,e,Va].join(Ba),weightSpecs:[La,e,Ga].join(Ba),weightData:[La,e,Ha].join(Ba),modelMetadata:[La,e,ja].join(Ba)}}function qa(e){for(const t of Object.values(e))window.localStorage.removeItem(t)}function Ka(e){const t=e.split(Ba);if(t.length<3)throw new Error(`Invalid key format: ${e}`);return t.slice(1,t.length-1).join(Ba)}class Ya{constructor(e){if(!de().getBool("IS_BROWSER")||"undefined"==typeof window||void 0===window.localStorage)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,null==e||!e)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=e,this.keys=Xa(this.modelPath)}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const t=JSON.stringify(e.modelTopology),n=JSON.stringify(e.weightSpecs),r=Ra(e);try{this.LS.setItem(this.keys.info,JSON.stringify(r)),this.LS.setItem(this.keys.topology,t),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,function(e){if($a)return Buffer.from(e).toString("base64");const t=new Uint8Array(e);let n="";for(let e=0,r=t.length;e<r;e++)n+=String.fromCharCode(t[e]);return btoa(n)}(e.weightData));const a={format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,signature:null!=e.signature?e.signature:void 0,userDefinedMetadata:null!=e.userDefinedMetadata?e.userDefinedMetadata:void 0,modelInitializer:null!=e.modelInitializer?e.modelInitializer:void 0,trainingConfig:null!=e.trainingConfig?e.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(a)),{modelArtifactsInfo:r}}catch(e){throw qa(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${r.modelTopologyBytes}, weightSpecsBytes=${r.weightSpecsBytes}, weightDataBytes=${r.weightDataBytes}.`)}}}async load(){const e=JSON.parse(this.LS.getItem(this.keys.info));if(null==e)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if("JSON"!==e.modelTopologyType)throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const t={},n=JSON.parse(this.LS.getItem(this.keys.topology));if(null==n)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);t.modelTopology=n;const r=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(null==r)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);t.weightSpecs=r;const a=this.LS.getItem(this.keys.modelMetadata);if(null!=a){const e=JSON.parse(a);t.format=e.format,t.generatedBy=e.generatedBy,t.convertedBy=e.convertedBy,null!=e.signature&&(t.signature=e.signature),null!=e.userDefinedMetadata&&(t.userDefinedMetadata=e.userDefinedMetadata),null!=e.modelInitializer&&(t.modelInitializer=e.modelInitializer),null!=e.trainingConfig&&(t.trainingConfig=e.trainingConfig)}const s=this.LS.getItem(this.keys.weightData);if(null==s)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return t.weightData=function(e){if($a){const t=Buffer.from(e,"base64");return t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)}const t=atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;++e)n.set([t.charCodeAt(e)],e);return n.buffer}(s),t}}Ya.URL_SCHEME="localstorage://";const Za=e=>{return de().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(Ya.URL_SCHEME)?(t=e.slice(Ya.URL_SCHEME.length),new Ya(t)):null;var t};Da.registerSaveRouter(Za),Da.registerLoadRouter(Za);class Qa{constructor(){k(de().getBool("IS_BROWSER"),(()=>"Current environment is not a web browser")),k("undefined"==typeof window||void 0!==window.localStorage,(()=>"Current browser does not appear to support localStorage")),this.LS=window.localStorage}async listModels(){const e={},t=La+Ba,n=Ba+za;for(let r=0;r<this.LS.length;++r){const a=this.LS.key(r);if(a.startsWith(t)&&a.endsWith(n)){e[Ka(a)]=JSON.parse(this.LS.getItem(a))}}return e}async removeModel(e){var t;const n=Xa(e=(t=e).startsWith(Ya.URL_SCHEME)?t.slice(Ya.URL_SCHEME.length):t);if(null==this.LS.getItem(n.info))throw new Error(`Cannot find model at path '${e}'`);const r=JSON.parse(this.LS.getItem(n.info));return qa(n),r}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Ja="://";class es{constructor(){this.managers={}}static getInstance(){return null==es.instance&&(es.instance=new es),es.instance}static registerManager(e,t){k(null!=e,(()=>"scheme must not be undefined or null.")),e.endsWith(Ja)&&(e=e.slice(0,e.indexOf(Ja))),k(e.length>0,(()=>"scheme must not be an empty string."));const n=es.getInstance();k(null==n.managers[e],(()=>`A model store manager is already registered for scheme '${e}'.`)),n.managers[e]=t}static getManager(e){const t=this.getInstance().managers[e];if(null==t)throw new Error(`Cannot find model manager for scheme '${e}'`);return t}static getSchemes(){return Object.keys(this.getInstance().managers)}}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class ts{fetch(e,t){return fetch(e,t)}now(){return performance.now()}encode(e,t){if("utf-8"!==t&&"utf8"!==t)throw new Error(`Browser's encoder only supports utf-8, but got ${t}`);return null==this.textEncoder&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(e)}decode(e,t){return new TextDecoder(t).decode(e)}}if(de().get("IS_BROWSER")){de().setPlatform("browser",new ts);try{es.registerManager(Ya.URL_SCHEME,new Qa)}catch(e){}try{es.registerManager(Ua.URL_SCHEME,new Wa)}catch(e){}}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const ns=()=>n(5410);let rs;class as{constructor(){this.util=n(8628),this.textEncoder=new this.util.TextEncoder}fetch(e,t){return null!=de().global.fetch?de().global.fetch(e,t):(null==rs&&(rs=ns()),rs(e,t))}now(){const e=process.hrtime();return 1e3*e[0]+e[1]/1e6}encode(e,t){if("utf-8"!==t&&"utf8"!==t)throw new Error(`Node built-in encoder only supports utf-8, but got ${t}`);return this.textEncoder.encode(e)}decode(e,t){return 0===e.length?"":new this.util.TextDecoder(t).decode(e)}}
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ss(e,t="float32",n){return t=t||"float32",ne(e),new ea(e,t,n)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function os(e,t){let n=e;if(L(e))return"string"===t?[]:[e.length];if(!Array.isArray(e))return[];const r=[];for(;Array.isArray(n)||L(n)&&"string"!==t;)r.push(n.length),n=n[0];return Array.isArray(e)&&de().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&is(e,r,[]),r}function is(e,t,n){if(n=n||[],!Array.isArray(e)&&!L(e))return void k(0===t.length,(()=>`Element arr[${n.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`));k(t.length>0,(()=>`Element arr[${n.join("][")}] should be a primitive, but is an array of ${e.length} elements`)),k(e.length===t[0],(()=>`Element arr[${n.join("][")}] should have ${t[0]} elements, but has ${e.length} elements`));const r=t.slice(1);for(let t=0;t<e.length;++t)is(e[t],r,n.concat(t))}function us(e,t,n,r){if("string_or_numeric"!==e){if(null==e)throw new Error("Expected dtype cannot be null.");if("numeric"!==e&&e!==t||"numeric"===e&&"string"===t)throw new Error(`Argument '${n}' passed to '${r}' must be ${e} tensor, but got ${t} tensor`)}}function ls(e,t,n,r="numeric"){if(e instanceof aa)return us(r,e.dtype,t,n),e;let a=X(e);if("string"!==a&&["bool","int32","float32"].indexOf(r)>=0&&(a=r),us(r,a,t,n),null==e||!L(e)&&!Array.isArray(e)&&"number"!=typeof e&&"boolean"!=typeof e&&"string"!=typeof e){const r=null==e?"null":e.constructor.name;throw new Error(`Argument '${t}' passed to '${n}' must be a Tensor or TensorLike, but got '${r}'`)}const s=os(e,a);L(e)||Array.isArray(e)||(e=[e]);const o="string"!==a?Lr(e,a):w(e,[],!0);return ya.makeTensor(o,s,a)}function cs(e,t,n,r="numeric"){if(!Array.isArray(e))throw new Error(`Argument ${t} passed to ${n} must be a \`Tensor[]\` or \`TensorLike[]\``);return e.map(((e,a)=>ls(e,`${t}[${a}]`,n,r)))}de().get("IS_NODE")&&de().setPlatform("node",new as);function ds(e){const t=Object.keys(e);if(1!==t.length)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let n=t[0];const r=e[n];n.endsWith("_")&&(n=n.substring(0,n.length-1)),n+="__op";const a=(...e)=>{ya.startScope(n);try{const t=r(...e);return se(t)&&console.error("Cannot return a Promise inside of tidy."),ya.endScope(t),t}catch(e){throw ya.endScope(null),e}};return Object.defineProperty(a,"name",{value:n,configurable:!0}),a}const ps=ds({cast_:
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){const n=ls(e,"x","cast");if(!W(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if("string"===t&&"string"!==n.dtype||"string"!==t&&"string"===n.dtype)throw new Error("Only strings can be casted to strings");const r={x:n},a={dtype:t};return ya.runKernel(Pe,r,a)}});const hs=ds({clone_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const t={x:ls(e,"x","clone","string_or_numeric")};return ya.runKernel(Et,t)}});
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
ka();na={buffer:ss,cast:ps,clone:hs,print:
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t=!1){console.log(e.toString(t))}};function fs(e){return new Promise((e=>setTimeout(e))).then(e)}class ms{constructor(e){if(!de().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");e.startsWith(ms.URL_SCHEME)&&(e=e.slice(ms.URL_SCHEME.length)),null!=e&&0!==e.length||(e="model"),this.modelJsonFileName=e+".json",this.weightDataFileName=e+".weights.bin"}async save(e){if("undefined"==typeof document)throw new Error("Browser downloads are not supported in this environment since `document` is not present");const t=window.URL.createObjectURL(new Blob([e.weightData],{type:"application/octet-stream"}));if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const n=Na(e,[{paths:["./"+this.weightDataFileName],weights:e.weightSpecs}]),r=window.URL.createObjectURL(new Blob([JSON.stringify(n)],{type:"application/json"})),a=null==this.modelJsonAnchor?document.createElement("a"):this.modelJsonAnchor;if(a.download=this.modelJsonFileName,a.href=r,await fs((()=>a.dispatchEvent(new MouseEvent("click")))),null!=e.weightData){const e=null==this.weightDataAnchor?document.createElement("a"):this.weightDataAnchor;e.download=this.weightDataFileName,e.href=t,await fs((()=>e.dispatchEvent(new MouseEvent("click"))))}return{modelArtifactsInfo:Ra(e)}}}}ms.URL_SCHEME="downloads://";
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function gs(e,t,n,r){!function(e){k(null!=e&&Array.isArray(e)&&e.length>0,(()=>"promises must be a none empty array"))}(e),function(e,t){k(e>=0&&e<=1,(()=>`Progress fraction must be in range [0, 1], but got startFraction ${e}`)),k(t>=0&&t<=1,(()=>`Progress fraction must be in range [0, 1], but got endFraction ${t}`)),k(t>=e,(()=>`startFraction must be no more than endFraction, but got startFraction ${e} and endFraction ${t}`))}(n=null==n?0:n,r=null==r?1:r);let a=0;return Promise.all(e.map((s=>(s.then((s=>{const o=n+ ++a/e.length*(r-n);return t(o),s})),s))))}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
async function xs(e,t){null==t&&(t={});const n=null==t.fetchFunc?de().platform.fetch:t.fetchFunc,r=e.map((e=>n(e,t.requestInit,{isBinary:!0}))),a=(null==t.onProgress?await Promise.all(r):await gs(r,t.onProgress,0,.5)).map((e=>e.arrayBuffer()));return null==t.onProgress?await Promise.all(a):await gs(a,t.onProgress,.5,1)}Da.registerSaveRouter((e=>de().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(ms.URL_SCHEME)?function(e="model"){return new ms(e)}(e.slice(ms.URL_SCHEME.length)):null));class bs{constructor(e,t){if(this.DEFAULT_METHOD="POST",null==t&&(t={}),this.weightPathPrefix=t.weightPathPrefix,this.onProgress=t.onProgress,this.weightUrlConverter=t.weightUrlConverter,null!=t.fetchFunc?(k("function"==typeof t.fetchFunc,(()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)")),this.fetch=t.fetchFunc):this.fetch=de().platform.fetch,k(null!=e&&e.length>0,(()=>"URL path for http must not be null, undefined or empty.")),Array.isArray(e)&&k(2===e.length,(()=>`URL paths for http must have a length of 2, (actual length is ${e.length}).`)),this.path=e,null!=t.requestInit&&null!=t.requestInit.body)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=t.requestInit||{}}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const t=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);t.body=new FormData;const n=Na(e,[{paths:["./model.weights.bin"],weights:e.weightSpecs}]);t.body.append("model.json",new Blob([JSON.stringify(n)],{type:"application/json"}),"model.json"),null!=e.weightData&&t.body.append("model.weights.bin",new Blob([e.weightData],{type:"application/octet-stream"}),"model.weights.bin");const r=await this.fetch(this.path,t);if(r.ok)return{modelArtifactsInfo:Ra(e),responses:[r]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${r.status}.`)}async load(){const e=await this.fetch(this.path,this.requestInit);if(!e.ok)throw new Error(`Request to ${this.path} failed with status code ${e.status}. Please verify this URL points to the model JSON of the model to load.`);let t;try{t=await e.json()}catch(e){let t=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?t+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":t+=" Please make sure the server is serving valid JSON for this request.",new Error(t)}const n=t.modelTopology,r=t.weightsManifest;if(null==n&&null==r)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return async function(e,t){const n={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy};if(null!=e.trainingConfig&&(n.trainingConfig=e.trainingConfig),null!=e.weightsManifest){const[r,a]=await t(e.weightsManifest);n.weightSpecs=r,n.weightData=a}return null!=e.signature&&(n.signature=e.signature),null!=e.userDefinedMetadata&&(n.userDefinedMetadata=e.userDefinedMetadata),null!=e.modelInitializer&&(n.modelInitializer=e.modelInitializer),n}(t,(e=>this.loadWeights(e)))}async loadWeights(e){const t=Array.isArray(this.path)?this.path[1]:this.path,[n,r]=function(e){const t=e.lastIndexOf("/"),n=e.lastIndexOf("?"),r=e.substring(0,t),a=n>t?e.substring(n):"";return[r+"/",a]}(t),a=this.weightPathPrefix||n,s=[];for(const t of e)s.push(...t.weights);const o=[],i=[];for(const t of e)for(const e of t.paths)null!=this.weightUrlConverter?i.push(this.weightUrlConverter(e)):o.push(a+e+r);this.weightUrlConverter&&o.push(...await Promise.all(i));return[s,Ea(await xs(o,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress}))]}}function vs(e){return null!=e.match(bs.URL_SCHEME_REGEX)}bs.URL_SCHEME_REGEX=/^https?:\/\//;const ks=(e,t)=>{if("undefined"==typeof fetch&&(null==t||null==t.fetchFunc))return null;{let n=!0;if(n=Array.isArray(e)?e.every((e=>vs(e))):vs(e),n)return ys(e,t)}return null};function ys(e,t){return new bs(e,t)}Da.registerSaveRouter(ks),Da.registerLoadRouter(ks);
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Is(e,t,n){const r=e.shape.length;k(r===t.length,(()=>`Error in slice${r}D: Length of begin ${t} must match the rank of the array (${r}).`)),k(r===n.length,(()=>`Error in slice${r}D: Length of size ${n} must match the rank of the array (${r}).`));for(let a=0;a<r;++a)k(t[a]+n[a]<=e.shape[a],(()=>`Error in slice${r}D: begin[${a}] + size[${a}] (${t[a]+n[a]}) would overflow input.shape[${a}] (${e.shape[a]})`))}function ws(e){const t=[];let n=0;for(;e>0;)1&e&&t.push(n),e/=2,n++;return t}function Cs(e,t,n){const r=[];for(let a=0;a<e.length;a++)r[a]=Math.ceil((t[a]-e[a])/n[a]);return r}function Ss(e,t,n,r){const a=[...e];for(let e=a.length;e<r.length;e++)a.push(1);for(let e=0;e<n;e++)0===e?a[t]=1:(a.splice(t,0,1),a.pop());return a}function $s(e,t,n){return n<=e?n:n-(t-1)}function Ts(e,t){const n=[];for(let r=0;r<e;r++)n.push(t+r);return n}function Es(e,t,n,r,a,s,o,i,u){const l=e.length;let c=new Array(l),d=new Array(l),p=new Array(l);if(t.length&&n>0){const u=t[0],l=n+1;c=Ns(o,u,l,r,e),d=Rs(i,u,l,a,e),p=Ss(s,u,l,e)}else for(let t=0;t<l;t++)c[t]=As(o,r,s,e,t,u),d[t]=Fs(i,a,s,e,t,u),p[t]=Ds(s,t,u);return{begin:c,end:d,strides:p}}function Ns(e,t,n,r,a){const s=[...a],o=Ts(n,t);for(let a=0;a<s.length;a++)if(o.indexOf(a)>-1)s[a]=0;else{const o=$s(t,n,a);let i=r[o];e&1<<o&&(i=0),s[a]=i}return s}function Rs(e,t,n,r,a){const s=[...a],o=Ts(n,t);for(let a=0;a<s.length;a++)if(o.indexOf(a)>-1)s[a]=Number.MAX_SAFE_INTEGER;else{const o=$s(t,n,a);let i=r[o];e&1<<o&&(i=Number.MAX_SAFE_INTEGER),s[a]=i}for(let e=0;e<s.length;e++){const t=a[e];s[e]<0&&(s[e]+=t),s[e]=f(0,s[e],a[e])}return s}function Ds(e,t,n){let r=e[t];return(n&1<<t||null==r)&&(r=1),r}function As(e,t,n,r,a,s){let o=t[a];const i=n[a]||1;(e&1<<a||s&1<<a||null==o)&&(o=i>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);const u=r[a];return o<0&&(o+=u),o=f(0,o,u-1),o}function Fs(e,t,n,r,a,s){let o=t[a];const i=n[a]||1;(e&1<<a||s&1<<a||null==o)&&(o=i>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);const u=r[a];return o<0&&(o+=u),o=i>0?f(0,o,u):f(-1,o,u-1),o}function _s(e,t,n){let r=n.length;for(let e=0;e<n.length;e++)if(n[e]>1){r=e;break}for(let a=r+1;a<n.length;a++)if(t[a]>0||n[a]!==e[a])return!1;return!0}function Os(e,t){let n=e.length>0?e[e.length-1]:1;for(let r=0;r<e.length-1;r++)n+=e[r]*t[r];return n}function Ms(e,t,n){let r;const a=e.shape.length;let s;return r="number"==typeof t?[t,...new Array(a-1).fill(0)]:t.length<a?t.concat(new Array(a-t.length).fill(0)):t.slice(),r.forEach((e=>{k(-1!==e,(()=>"slice() does not support negative begin indexing."))})),s=null==n?new Array(a).fill(-1):"number"==typeof n?[n,...new Array(a-1).fill(-1)]:n.length<a?n.concat(new Array(a-n.length).fill(-1)):n,s=s.map(((t,n)=>t>=0?t:(k(-1===t,(()=>`Negative size values should be exactly -1 but got ${t} for the slice() size at index ${n}.`)),e.shape[n]-r[n]))),[r,s]}function Us(e,t,n,r,a,s,o,i,u){let l=t.slice(),c=n.slice(),d=r;null==r&&(d=new Array(l.length));const p=ws(o);if(p.length>1)throw new Error("Multiple ellipses in slice is not allowed.");if(0!==o&&0!==i)throw new Error("Using both ellipsisMask and newAxisMask is not yet supported.");if(0!==o&&0!==u)throw new Error("Using both ellipsisMask and shrinkAxisMask is not yet supported.");const h=e.length-l.length,f=ws(i),m=e.slice();f.forEach((e=>{l[e]=0,c[e]=1,m.splice(e,0,1)}));const{begin:g,end:x,strides:b}=Es(m,p,h,l,c,d,a,s,o);l=g,c=x,d=b;const v=ws(u);v.forEach((e=>{c[e]=l[e]+1,d[e]=1}));const k=Cs(l,c,d),y=k.filter(((e,t)=>-1===v.indexOf(t)));return{nonStrided:d.every((e=>1===e)),$begin:l,$end:c,$strides:d,size:k,newShape:m,outShape:y}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ps(e,t,n,r){if(null==r&&(r=X(e)),"complex64"===r)throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!L(e)&&!Array.isArray(e)&&"number"!=typeof e&&"boolean"!=typeof e&&"string"!=typeof e)throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(null!=t){ne(t);const e=C(t),r=C(n);k(e===r,(()=>`Based on the provided shape, [${t}], the tensor should have ${e} values but has ${r}`));for(let e=0;e<n.length;++e){const r=n[e],a=e!==n.length-1||r!==C(t.slice(e));k(n[e]===t[e]||!a,(()=>`Error creating a new Tensor. Inferred shape (${n}) does not match the provided shape (${t}). `))}}return L(e)||Array.isArray(e)||(e=[e]),t=t||n,e="string"!==r?Lr(e,r):w(e,[],!0),ya.makeTensor(e,t,r)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ws(e,t){if((L(e)&&"string"!==t||Array.isArray(e))&&"complex64"!==t)throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if("string"===t&&L(e)&&!(e instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Ps(e,[],[],t)}const Bs=ds({complex_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){const n=ls(e,"real","complex"),r=ls(t,"imag","complex");y(n.shape,r.shape,`real and imag shapes, ${n.shape} and ${r.shape}, must match in call to tf.complex().`);const a={real:n,imag:r};return ya.runKernel(Le,a)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ls(e,t="float32"){if("complex64"===t){const t=Ls(e,"float32"),n=Ls(e,"float32");return Bs(t,n)}const n=ee(C(e),t);return ya.makeTensor(n,e,t)}const zs=ds({concat_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t=0){k(e.length>=1,(()=>"Pass at least one tensor to concat"));const n=cs(e,"tensors","concat","string_or_numeric");if("complex64"===n[0].dtype&&n.forEach((e=>{if("complex64"!==e.dtype)throw new Error(`Cannot concatenate complex64 tensors with a tensor\n          with dtype ${e.dtype}. `)})),1===n.length)return hs(n[0]);const r=n,a={axis:t};return ya.runKernel(Ve,r,a)}});const Vs=ds({imag_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const t={input:ls(e,"input","imag")};return ya.runKernel(Rt,t)}});const Gs=ds({real_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const t={input:ls(e,"input","real")};return ya.runKernel(vn,t)}});const Hs=ds({reshape_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){const n={x:ls(e,"x","reshape","string_or_numeric")},r={shape:t};return ya.runKernel(In,n,r)}});const js=ds({slice_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n){const r=ls(e,"x","slice","string_or_numeric");if(0===r.rank)throw new Error("Slicing scalar is not possible");const a={x:r},s={begin:t,size:n};return ya.runKernel(_n,a,s)}});const Xs=ds({split_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n=0){const r={x:ls(e,"x","split")},a={numOrSizeSplits:t,axis:n};return ya.runKernel(Vn,r,a)}});const qs=ds({zerosLike_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const t={x:ls(e,"x","zerosLike")};return ya.runKernel(pr,t)}});const Ks=ds({fft_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){k("complex64"===e.dtype,(()=>`The dtype for tf.spectral.fft() must be complex64 but got ${e.dtype}.`));const t={input:e};return ya.runKernel(bt,t)}});const Ys=ds({rfft_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){k("float32"===e.dtype,(()=>`The dtype for rfft() must be real value but got ${e.dtype}`));let n=e.shape[e.shape.length-1];const r=e.size/n;let a;if(null!=t&&t<n){const r=e.shape.map((e=>0)),s=e.shape.map((e=>e));s[e.shape.length-1]=t,a=js(e,r,s),n=t}else if(null!=t&&t>n){const r=e.shape.map((e=>e));r[e.shape.length-1]=t-n,a=zs([e,Ls(r)],e.shape.length-1),n=t}else a=e;const s=qs(a),o=Hs(Bs(a,s),[r,n]),i=Ks(o),u=Math.floor(n/2)+1,l=Gs(i),c=Vs(i),d=Xs(l,[u,n-u],l.shape.length-1),p=Xs(c,[u,n-u],c.shape.length-1),h=a.shape.slice();return h[a.shape.length-1]=u,Hs(Bs(d[0],p[0]),h)}});const Zs=ds({ifft_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){k("complex64"===e.dtype,(()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${e.dtype}.`));const t={input:e};return ya.runKernel(Nt,t)}});const Qs=ds({mul_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){let n=ls(e,"a","mul"),r=ls(t,"b","mul");[n,r]=fa(n,r);const a={a:n,b:r};return ya.runKernel(an,a)}});const Js=ds({reverse_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){const n={x:ls(e,"x","reverse")},r={dims:t};return ya.runKernel(En,n,r)}});ds({irfft_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const t=e.shape[e.shape.length-1],n=e.size/t;let r;if(t<=2){const a=Hs(e,[n,t]);r=Zs(a)}else{const a=[n,2*(t-1)],s=Hs(Gs(e),[n,t]),o=Hs(Vs(e),[n,t]),i=Js(js(s,[0,1],[n,t-2]),1),u=Qs(Js(js(o,[0,1],[n,t-2]),1),Ws(-1)),l=zs([s,i],1),c=zs([o,u],1),d=Hs(Bs(l,c),[a[0],a[1]]);r=Zs(d)}if(r=Gs(r),3===e.rank&&0!==e.shape[0]){const t=r,n=e.shape[0];r=Hs(r,[n,r.shape[0]/n,r.shape[1]]),t.dispose()}return r}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function eo(e,t){I(e);const n=os(e,t);if(1!==n.length)throw new Error("tensor1d() requires values to be a flat/TypedArray");return Ps(e,null,n,t)}function to(e,t,n){const r=1-e%2,a=new Float32Array(e);for(let s=0;s<e;++s){const o=2*Math.PI*s/(e+r-1);a[s]=t-n*Math.cos(o)}return eo(a,"float32")}ds({hammingWindow_:
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){return to(e,.54,.46)}});const no=ds({hannWindow_:
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){return to(e,.5,.5)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ro(e,t,n){const r={shape:e,value:t,dtype:n};return ya.runKernel(vt,{},r)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ao(e,t,n){if(I(e),null!=t&&2!==t.length)throw new Error("tensor2d() requires shape to have two numbers");const r=os(e,n);if(2!==r.length&&1!==r.length)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(1===r.length&&null==t)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Ps(e,t,r,n)}const so=ds({frame_:
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n,r=!1,a=0){let s=0;const o=[];for(;s+t<=e.size;)o.push(js(e,s,t)),s+=n;if(r)for(;s<e.size;){const r=s+t-e.size,i=zs([js(e,s,t-r),ro([r],a)]);o.push(i),s+=n}return 0===o.length?ao([],[0,t]):Hs(zs(o),[o.length,t])}});ds({stft_:
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n,r,a=no){
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var s;null==r&&(s=t,r=Math.floor(Math.pow(2,Math.ceil(Math.log(s)/Math.log(2)))));const o=so(e,t,n),i=Qs(o,a(t));return Ys(i,r)}});ds({cropAndResize_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n,r,a="bilinear",s=0){const o=ls(e,"image","cropAndResize"),i=ls(t,"boxes","cropAndResize","float32"),u=ls(n,"boxInd","cropAndResize","int32"),l=i.shape[0];k(4===o.rank,(()=>`Error in cropAndResize: image must be rank 4,but got rank ${o.rank}.`)),k(2===i.rank&&4===i.shape[1],(()=>`Error in cropAndResize: boxes must be have size [${l},4] but had shape ${i.shape}.`)),k(1===u.rank&&u.shape[0]===l,(()=>`Error in cropAndResize: boxInd must be have size [${l}] but had shape ${i.shape}.`)),k(2===r.length,(()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${r.length}.`)),k(r[0]>=1&&r[1]>=1,(()=>`cropSize must be atleast [1,1], but was ${r}`)),k("bilinear"===a||"nearest"===a,(()=>`method must be bilinear or nearest, but was ${a}`));const c={image:o,boxes:i,boxInd:u},d={method:a,extrapolationValue:s,cropSize:r};return ya.runKernel(Je,c,d)}});ds({flipLeftRight_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const t=ls(e,"image","flipLeftRight","float32");k(4===t.rank,(()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`));const n={image:t};return ya.runKernel(kt,n,{})}});const oo=ds({tile_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){const n=ls(e,"x","tile","string_or_numeric");k(n.rank===t.length,(()=>`Error in transpose: rank of input ${n.rank} must match length of reps ${t}.`));const r={x:n},a={reps:t};return ya.runKernel(sr,r,a)}});ds({grayscaleToRGB_:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const t=ls(e,"image","grayscaleToRGB"),n=t.rank-1,r=t.shape[n];k(t.rank>=2,(()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`)),k(1===r,(()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${r}.`));const a=new Array(t.rank);return a.fill(1,0,n),a[n]=3,oo(t,a)}});ds({rotateWithOffset_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n=0,r=.5){const a=ls(e,"image","rotateWithOffset","float32");k(4===a.rank,(()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${a.rank}.`));const s={image:a},o={radians:t,fillValue:n,center:r};return ya.runKernel(mr,s,o)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function io(e,t,n,r,a,s){null==r&&(r=.5),null==a&&(a=Number.NEGATIVE_INFINITY),null==s&&(s=0);const o=e.shape[0];return n=Math.min(n,o),k(0<=r&&r<=1,(()=>`iouThreshold must be in [0, 1], but was '${r}'`)),k(2===e.rank,(()=>`boxes must be a 2D tensor, but was of rank '${e.rank}'`)),k(4===e.shape[1],(()=>`boxes must have 4 columns, but 2nd dimension was ${e.shape[1]}`)),k(1===t.rank,(()=>"scores must be a 1D tensor")),k(t.shape[0]===o,(()=>`scores has incompatible shape with boxes. Expected ${o}, but was ${t.shape[0]}`)),k(0<=s&&s<=1,(()=>`softNmsSigma must be in [0, 1], but was '${s}'`)),{maxOutputSize:n,iouThreshold:r,scoreThreshold:a,softNmsSigma:s}}ds({nonMaxSuppression_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n,r=.5,a=Number.NEGATIVE_INFINITY){const s=ls(e,"boxes","nonMaxSuppression"),o=ls(t,"scores","nonMaxSuppression"),i=io(s,o,n,r,a),u={maxOutputSize:n=i.maxOutputSize,iouThreshold:r=i.iouThreshold,scoreThreshold:a=i.scoreThreshold};return ya.runKernel(un,{boxes:s,scores:o},u)}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function uo(e,t,n){const r=function(e,t,n){return function(e,t,n){let r=0,a=e.length,s=0,o=!1;for(;r<a;){s=r+(a-r>>>1);const i=n(t,e[s]);i>0?r=s+1:(a=s,o=!i)}return o?r:-r-1}(e,t,n||lo)}(e,t,n),a=r<0?-(r+1):r;e.splice(a,0,t)}function lo(e,t){return e>t?1:e<t?-1:0}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function co(e,t,n,r,a){return fo(e,t,n,r,a,0)}function po(e,t,n,r,a,s){return fo(e,t,n,r,a,0,!1,s,!0)}function ho(e,t,n,r,a,s){return fo(e,t,n,r,a,s,!0)}function fo(e,t,n,r,a,s,o=!1,i=!1,u=!1){const l=[];for(let e=0;e<t.length;e++)t[e]>a&&l.push({score:t[e],boxIndex:e,suppressBeginIndex:0});l.sort(xo);const c=s>0?-.5/s:0,d=[],p=[];for(;d.length<n&&l.length>0;){const t=l.pop(),{score:n,boxIndex:s,suppressBeginIndex:o}=t;if(n<a)break;let i=!1;for(let n=d.length-1;n>=o;--n){const o=mo(e,s,d[n]);if(o>=r){i=!0;break}if(t.score=t.score*go(r,c,o),t.score<=a)break}t.suppressBeginIndex=d.length,i||(t.score===n?(d.push(s),p.push(t.score)):t.score>a&&uo(l,t,xo))}const h=d.length,f=n-h;i&&f>0&&(d.push(...new Array(f).fill(0)),p.push(...new Array(f).fill(0)));const m={selectedIndices:d};return o&&(m.selectedScores=p),u&&(m.validOutputs=h),m}function mo(e,t,n){const r=e.subarray(4*t,4*t+4),a=e.subarray(4*n,4*n+4),s=Math.min(r[0],r[2]),o=Math.min(r[1],r[3]),i=Math.max(r[0],r[2]),u=Math.max(r[1],r[3]),l=Math.min(a[0],a[2]),c=Math.min(a[1],a[3]),d=Math.max(a[0],a[2]),p=Math.max(a[1],a[3]),h=(i-s)*(u-o),f=(d-l)*(p-c);if(h<=0||f<=0)return 0;const m=Math.max(s,l),g=Math.max(o,c),x=Math.min(i,d),b=Math.min(u,p),v=Math.max(x-m,0)*Math.max(b-g,0);return v/(h+f-v)}function go(e,t,n){const r=Math.exp(t*n*n);return n<=e?r:0}function xo(e,t){return e.score-t.score||e.score===t.score&&t.boxIndex-e.boxIndex}ds({nonMaxSuppressionWithScore_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n,r=.5,a=Number.NEGATIVE_INFINITY,s=0){const o=ls(e,"boxes","nonMaxSuppression"),i=ls(t,"scores","nonMaxSuppression"),u=io(o,i,n,r,a,s),l={boxes:o,scores:i},c={maxOutputSize:n=u.maxOutputSize,iouThreshold:r=u.iouThreshold,scoreThreshold:a=u.scoreThreshold,softNmsSigma:s=u.softNmsSigma},d=ya.runKernel(cn,l,c);return{selectedIndices:d[0],selectedScores:d[1]}}});ds({nonMaxSuppressionPadded_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n,r=.5,a=Number.NEGATIVE_INFINITY,s=!1){const o=ls(e,"boxes","nonMaxSuppression"),i=ls(t,"scores","nonMaxSuppression"),u=io(o,i,n,r,a,null),l={boxes:o,scores:i},c={maxOutputSize:u.maxOutputSize,iouThreshold:u.iouThreshold,scoreThreshold:u.scoreThreshold,padToMaxOutputSize:s},d=ya.runKernel(ln,l,c);return{selectedIndices:d[0],validOutputs:d[1]}}});ds({resizeBilinear_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n=!1,r=!1){const a=ls(e,"images","resizeBilinear");k(3===a.rank||4===a.rank,(()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${a.rank}.`)),k(2===t.length,(()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`)),k(!1===r||!1===n,(()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false."));let s=a,o=!1;3===a.rank&&(o=!0,s=Hs(a,[1,a.shape[0],a.shape[1],a.shape[2]]));const[]=t,i={images:s},u={alignCorners:n,halfPixelCenters:r,size:t},l=ya.runKernel(Sn,i,u);return o?Hs(l,[l.shape[1],l.shape[2],l.shape[3]]):l}});ds({resizeNearestNeighbor_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n=!1,r=!1){const a=ls(e,"images","resizeNearestNeighbor");k(3===a.rank||4===a.rank,(()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${a.rank}.`)),k(2===t.length,(()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`)),k("float32"===a.dtype||"int32"===a.dtype,(()=>"`images` must have `int32` or `float32` as dtype")),k(!1===r||!1===n,(()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false."));let s=a,o=!1;3===a.rank&&(o=!0,s=Hs(a,[1,a.shape[0],a.shape[1],a.shape[2]]));const[]=t,i={images:s},u={alignCorners:n,halfPixelCenters:r,size:t},l=ya.runKernel(wn,i,u);return o?Hs(l,[l.shape[1],l.shape[2],l.shape[3]]):l}});const bo=ds({bincount_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n){const r=ls(e,"x","bincount"),a=ls(t,"weights","bincount");k("int32"===r.dtype,(()=>`Error in bincount: input dtype must be int32, but got ${r.dtype}`)),k(n>=0,(()=>`size must be non-negative, but got ${n}.`)),k(a.size===r.size||0===a.size,(()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${r.shape}, weights shape: ${a.shape}.`));const s={x:r,weights:a},o={size:n};return ya.runKernel(Me,s,o)}});
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function vo(e,t){const n=e.length,r=[];for(let a=0;a<n;a++){const s=n-1-a,o=e[s]||1;(t[t.length-1-a]||1)>1&&1===o&&r.unshift(s)}return r}function ko(e,t){const n=[];for(let r=0;r<t.length;r++){const a=e[e.length-r-1],s=t.length-r-1,o=t[s];(null==a||1===a&&o>1)&&n.unshift(s)}return n}function yo(e,t){const n=[],r=Math.max(e.length,t.length);for(let a=0;a<r;a++){let r=e[e.length-a-1];null==r&&(r=1);let s=t[t.length-a-1];if(null==s&&(s=1),1===r)n.unshift(s);else if(1===s)n.unshift(r);else{if(r!==s){throw Error(`Operands could not be broadcast together with shapes ${e} and ${t}.`)}n.unshift(r)}}return n}const Io=ds({lessEqual_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){let n=ls(e,"a","lessEqual","string_or_numeric"),r=ls(t,"b","lessEqual","string_or_numeric");[n,r]=fa(n,r),yo(n.shape,r.shape);const a={a:n,b:r};return ya.runKernel(Mt,a)}});const wo=ds({greater_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){let n=ls(e,"a","greater","string_or_numeric"),r=ls(t,"b","greater","string_or_numeric");[n,r]=fa(n,r),yo(n.shape,r.shape);const a={a:n,b:r};return ya.runKernel($t,a)}});const Co=ds({sum_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t=null,n=!1){let r=ls(e,"x","sum");"bool"===r.dtype&&(r=ps(r,"int32"));const a={x:r},s={axis:t,keepDims:n};return ya.runKernel(Ln,a,s)}});const So=ds({add_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){let n=ls(e,"a","add"),r=ls(t,"b","add");[n,r]=fa(n,r);const a={a:n,b:r};return ya.runKernel(ve,a)}});const $o=ds({floorDiv_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){let n=ls(e,"a","floorDiv"),r=ls(t,"b","floorDiv");[n,r]=fa(n,r);const a={a:n,b:r};return ya.runKernel(It,a)}});const To=ds({div_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){let n=ls(e,"a","div"),r=ls(t,"b","div");if([n,r]=fa(n,r),"int32"===n.dtype&&"int32"===r.dtype)return $o(n,r);const a={a:n,b:r};return ya.runKernel(lt,a,{})}});const Eo=ds({sub_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){let n=ls(e,"a","sub"),r=ls(t,"b","sub");[n,r]=fa(n,r);const a={a:n,b:r};return ya.runKernel(nr,a)}});const No=ds({round_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const t={x:ls(e,"x","round")};return ya.runKernel(Nn,t)}});const Ro=ds({broadcastTo_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){let n=ls(e,"broadcastTo","x");const r=n.shape;if(t.some((e=>!(e>0)||e%1!=0)))throw new Error(`broadcastTo(): Invalid broadcast shape [${t}].`);if(t.length<n.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${n.rank}.`);if(t.length>n.rank){const e=n.shape.slice();for(;e.length<t.length;)e.unshift(1);n=Hs(n,e)}const a=n.shape,s=Array.from(t);for(let e=t.length-1;e>=0;e--)if(a[e]===t[e])s[e]=1;else if(1!==n.shape[e])throw new Error(`broadcastTo(): [${r}] cannot be broadcast to [${t}].`);if(0===s.map(((e,t)=>e>1?t:-1)).filter((e=>e>=0)).length)return hs(n);const o={x:n},i={reps:s};return ya.runKernel(sr,o,i)}});const Do=ds({where_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n){const r=ls(t,"a","where"),a=ls(n,"b","where"),s=ls(e,"condition","where","bool"),o=yo(yo(s.shape,r.shape),a.shape),i={condition:Ro(s,o),t:Ro(r,o),e:Ro(a,o)};return ya.runKernel(An,i)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ao(e,t,n=1,r="float32"){if(0===n)throw new Error("Cannot have a step of zero");const a={start:e,stop:t,step:n,dtype:r};return ya.runKernel(bn,{},a)}ds({threshold_:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t="binary",n=!1,r=.5){const a=ls(e,"image","threshold"),s=a.shape[0]*a.shape[1];let o,i,u,l,c=Qs(eo([r]),255);if(k(3===a.rank,(()=>`Error in threshold: image must be rank 3,but got rank ${a.rank}.`)),k(3===a.shape[2]||1===a.shape[2],(()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${a.shape[2]}.`)),k("int32"===a.dtype||"float32"===a.dtype,(()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${a.dtype}.`)),k("otsu"===t||"binary"===t,(()=>`Method must be binary or otsu, but was ${t}`)),3===a.shape[2]){[o,i,u]=Xs(a,[1,1,1],-1);const e=Qs(o,.2989),t=Qs(i,.587),n=Qs(u,.114);l=So(So(e,t),n)}else l=e;if("otsu"===t){c=function(e,t){let n,r,a,s,o,i,u=eo([-1]),l=eo([0]),c=eo([0]);for(let d=0;d<e.size-1;d++){n=js(e,0,d+1),r=js(e,d+1),o=To(Co(n),t),i=To(Co(r),t);const p=Co(Qs(n,Ao(0,n.size)));a=To(p,Co(n));const h=ro(r.shape,n.size),f=So(Ao(0,r.size),h),m=Qs(r,f);s=To(Co(m),Co(r));const g=Eo(a,s),x=Eo(a,s),b=Qs(o,i);c=Qs(Qs(b,g),x);const v=wo(c,l);l=Do(v,c,l),u=Do(v,eo([d]),u)}return u}(bo(ps(No(l),"int32"),Ps(d=[],p,os(d,h),h),256),s)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var d,p,h;const f=n?Io(l,c):wo(l,c);return ps(Qs(f,255),"int32")}});ds({transform_:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n="nearest",r="constant",a=0,s){const o=ls(e,"image","transform","float32"),i=ls(t,"transforms","transform","float32");k(4===o.rank,(()=>`Error in transform: image must be rank 4,but got rank ${o.rank}.`)),k(2===i.rank&&(i.shape[0]===o.shape[0]||1===i.shape[0])&&8===i.shape[1],(()=>"Error in transform: Input transform should be batch x 8 or 1 x 8")),k(null==s||2===s.length,(()=>`Error in transform: outputShape must be [height, width] or null, but got ${s}.`));const u={image:o,transforms:i},l={interpolation:n,fillMode:r,fillValue:a,outputShape:s};return ya.runKernel(ir,u,l)}});const Fo=ds({greaterEqual_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){let n=ls(e,"a","greaterEqual","string_or_numeric"),r=ls(t,"b","greaterEqual","string_or_numeric");[n,r]=fa(n,r),yo(n.shape,r.shape);const a={a:n,b:r};return ya.runKernel(Tt,a)}});const _o=ds({logicalAnd_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){const n=ls(e,"a","logicalAnd","bool"),r=ls(t,"b","logicalAnd","bool");yo(n.shape,r.shape);const a={a:n,b:r};return ya.runKernel(Bt,a)}});const Oo=ds({stack_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t=0){const n=cs(e,"tensors","stack","string_or_numeric");k(n.length>=1,(()=>"Pass at least one tensor to tf.stack")),n.length>0&&k(t<=n[0].rank,(()=>"Axis must be <= rank of the tensor"));const r=n,a={axis:t};return ya.runKernel(hn,r,a)}});const Mo=ds({unstack_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t=0){const n=ls(e,"x","unstack","string_or_numeric");k(t>=-n.shape.length&&t<n.shape.length,(()=>`Axis = ${t} is not in [-${n.shape.length}, ${n.shape.length})`));const r={value:n},a={axis:t};return ya.runKernel(cr,r,a)}});ds({bandPart_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n){k(t%1==0,(()=>`bandPart(): numLower must be an integer, got ${t}.`)),k(n%1==0,(()=>`bandPart(): numUpper must be an integer, got ${n}.`));const r=ls(e,"a","bandPart");k(r.rank>=2,(()=>`bandPart(): Rank must be at least 2, got ${r.rank}.`));const a=r.shape,[s,o]=r.shape.slice(-2);if(!(t<=s))throw new Error(`bandPart(): numLower (${t}) must not be greater than the number of rows (${s}).`);if(!(n<=o))throw new Error(`bandPart(): numUpper (${n}) must not be greater than the number of columns (${o}).`);t<0&&(t=s),n<0&&(n=o);const i=Hs(Ao(0,s,1,"int32"),[-1,1]),u=Ao(0,o,1,"int32"),l=Eo(i,u),c=_o(Io(l,Ws(+t,"int32")),Fo(l,Ws(-n,"int32"))),d=Ls([s,o],r.dtype);return Hs(Oo(Mo(Hs(r,[-1,s,o])).map((e=>Do(c,e,d)))),a)}});const Uo=ds({abs_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const t=ls(e,"x","abs");if("complex64"===t.dtype){const e={x:t};return ya.runKernel(ze,e)}{const e={x:t};return ya.runKernel(ge,e)}}});
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Po(e,t){for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0}function Wo(e,t,n){const r=e.length+t.length,a=[];let s=0,o=0;for(let i=0;i<r;i++)-1===n.indexOf(i)?a.push(e[s++]):a.push(t[o++]);return a}function Bo(e,t){const n=[],r=e.length;for(let a=0;a<r;a++)-1===t.indexOf(a)&&n.push(e[a]);return[n,t.map((t=>e[t]))]}function Lo(e,t){return Wo(e,t.map((e=>1)),t)}function zo(e,t,n){k(Po(t,n),(()=>`${e} supports only inner-most axes for now. Got axes ${t} and rank-${n} input.`))}function Vo(e,t){if(Po(e,t))return null;const n=[];for(let r=0;r<t;++r)-1===e.indexOf(r)&&n.push(r);return e.forEach((e=>n.push(e))),n}function Go(e){return e.map(((e,t)=>[t,e])).sort(((e,t)=>e[1]-t[1])).map((e=>e[0]))}function Ho(e,t){const n=[];for(let r=t-e;r<t;++r)n.push(r);return n}const jo=ds({max_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t=null,n=!1){const r={x:ls(e,"x","max")},a={reductionIndices:t,keepDims:n};return ya.runKernel(Ht,r,a)}});const Xo=ds({min_:
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t=null,n=!1){const r={x:ls(e,"x","min")},a={axis:t,keepDims:n};return ya.runKernel(Jt,r,a)}});const qo=ds({pow_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){let n=ls(e,"base","pow"),r=ls(t,"exp","pow");[n,r]=fa(n,r);const a={a:n,b:r};return ya.runKernel(mn,a)}});const Ko=ds({sqrt_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const t={x:ls(e,"x","sqrt")};return ya.runKernel(Bn,t)}});const Yo=ds({square_:
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const t=ls(e,"x","square");return ya.runKernel("Square",{x:t},{})}});function Zo(e,t,n=null){if(0===e.rank)return Uo(e);if(1!==e.rank&&null===n)return Zo(Hs(e,[-1]),t,n);if(1===e.rank||"number"==typeof n||Array.isArray(n)&&1===n.length){if(1===t)return Co(Uo(e),n);if(t===1/0)return jo(Uo(e),n);if(t===-1/0)return Xo(Uo(e),n);if("euclidean"===t||2===t)return Ko(Co(qo(Uo(e),Ws(2,"int32")),n));throw new Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(n)&&2===n.length){if(1===t)return jo(Co(Uo(e),n[0]),n[1]-1);if(t===1/0)return jo(Co(Uo(e),n[1]),n[0]);if(t===-1/0)return Xo(Co(Uo(e),n[1]),n[0]);if("fro"===t||"euclidean"===t)return Ko(Co(Yo(e),n));throw new Error(`Error in norm: invalid ord value: ${t}`)}throw new Error(`Error in norm: invalid axis: ${n}`)}const Qo=ds({norm_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t="euclidean",n=null,r=!1){const a=Zo(e=ls(e,"x","norm"),t,n);let s=a.shape;if(r){const t=_(n,e.shape);s=Lo(a.shape,t)}return Hs(a,s)}});const Jo=ds({squeeze_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){const n=ls(e,"x","squeeze");return Hs(n,O(n.shape,t).newShape)}});ds({gramSchmidt_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){let t;if(Array.isArray(e)){t=!1,k(null!=e&&e.length>0,(()=>"Gram-Schmidt process: input must not be null, undefined, or empty"));const n=e[0].shape[0];for(let t=1;t<e.length;++t)k(e[t].shape[0]===n,(()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${e[t].shape[0]} vs. ${n})`))}else t=!0,e=Xs(e,e.shape[0],0).map((e=>Jo(e,[0])));k(e.length<=e[0].shape[0],(()=>`Gram-Schmidt: Number of vectors (${e.length}) exceeds number of dimensions (${e[0].shape[0]}).`));const n=[],r=e;for(let t=0;t<e.length;++t)n.push(ya.tidy((()=>{let e=r[t];if(t>0)for(let r=0;r<t;++r){const t=Qs(Co(Qs(n[r],e)),n[r]);e=Eo(e,t)}return To(e,Qo(e,"euclidean"))})));return t?Oo(n,0):n}});function ei(){return ya}function ti(e,t){return ya.tidy(e,t)}function ni(e,t,n=1){return ya.registerBackend(e,t,n)}ra=function(e){de().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(e+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")};const ri=ds({expandDims_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t=0){const n=ls(e,"x","expandDims","string_or_numeric");k(t<=n.rank,(()=>"Axis must be <= rank of the tensor"));const r={input:n},a={dim:t};return ya.runKernel(gt,r,a)}});const ai=ds({eye_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n,r="float32"){null==t&&(t=e);const a=ss([e,t],r),s=e<=t?e:t;for(let e=0;e<s;++e)a.set(1,e,e);const o=Hs(a.toTensor(),[e,t]);if(null==n)return o;if(1===n.length)return oo(ri(o,0),[n[0],1,1]);if(2===n.length)return oo(ri(ri(o,0),0),[n[0],n[1],1,1]);if(3===n.length)return oo(ri(ri(ri(o,0),0),0),[n[0],n[1],n[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${n.length}D.`)}});const si=ds({matMul_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n=!1,r=!1){let a=ls(e,"a","matMul"),s=ls(t,"b","matMul");[a,s]=fa(a,s);const o={a,b:s},i={transposeA:n,transposeB:r};return ya.runKernel(_e,o,i)}});const oi=ds({neg_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const t={x:ls(e,"x","neg")};return ya.runKernel(sn,t)}});const ii=ds({transpose_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){const n=ls(e,"x","transpose");if(null==t&&(t=n.shape.map(((e,t)=>t)).reverse()),k(n.rank===t.length,(()=>`Error in transpose: rank of input ${n.rank} must match length of perm ${t}.`)),t.forEach((e=>{k(e>=0&&e<n.rank,(()=>"All entries in 'perm' must be between 0 and "+(n.rank-1)+` but got ${t}`))})),n.rank<=1)return n.clone();const r={x:n},a={perm:t};return ya.runKernel(ur,r,a)}});function ui(e,t=!1){return ya.tidy((()=>{k(2===e.shape.length,(()=>`qr2d() requires a 2D Tensor, but got a ${e.shape.length}D Tensor.`));const n=e.shape[0],r=e.shape[1];let a=ai(n),s=hs(e);const o=ao([[1]],[1,1]);let i=hs(o);const u=n>=r?r:n;for(let e=0;e<u;++e){const t=s,u=i,l=a;[i,s,a]=ya.tidy((()=>{const t=js(s,[e,e],[n-e,1]),u=Qo(t),l=js(s,[e,e],[1,1]),c=Do(wo(l,0),ao([[-1]]),ao([[1]])),d=Eo(l,Qs(c,u)),p=To(t,d);i=1===p.shape[0]?hs(o):zs([o,js(p,[1,0],[p.shape[0]-1,p.shape[1]])],0);const h=oi(To(si(c,d),u)),f=js(s,[e,0],[n-e,r]),m=Qs(h,i),g=ii(i);if(0===e)s=Eo(f,si(m,si(g,f)));else{const t=Eo(f,si(m,si(g,f)));s=zs([js(s,[0,0],[e,r]),t],0)}const x=ii(m),b=js(a,[0,e],[n,a.shape[1]-e]);if(0===e)a=Eo(b,si(si(b,i),x));else{const t=Eo(b,si(si(b,i),x));a=zs([js(a,[0,0],[n,e]),t],1)}return[i,s,a]})),ma([t,u,l]).forEach((e=>e.dispose()))}return!t&&n>r&&(a=js(a,[0,0],[n,r]),s=js(s,[0,0],[r,r])),[a,s]}))}ds({qr_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t=!1){if(k(e.rank>=2,(()=>`qr() requires input tensor to have a rank >= 2, but got rank ${e.rank}`)),2===e.rank)return ui(e,t);{const n=e.shape.slice(0,e.shape.length-2).reduce(((e,t)=>e*t)),r=Mo(Hs(e,[n,e.shape[e.shape.length-2],e.shape[e.shape.length-1]]),0),a=[],s=[];r.forEach((e=>{const[n,r]=ui(e,t);a.push(n),s.push(r)}));return[Hs(Oo(a,0),e.shape),Hs(Oo(s,0),e.shape)]}}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var li;!function(e){e[e.NONE=0]="NONE",e[e.MEAN=1]="MEAN",e[e.SUM=2]="SUM",e[e.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"}(li||(li={}));const ci=ds({mean_:
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t=null,n=!1){const r={x:ls(e,"x","mean")},a={axis:t,keepDims:n};return ya.runKernel(Qt,r,a)}});const di=ds({notEqual_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){let n=ls(e,"a","notEqual","string_or_numeric"),r=ls(t,"b","notEqual","string_or_numeric");[n,r]=fa(n,r),yo(n.shape,r.shape);const a={a:n,b:r};return ya.runKernel(on,a)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function pi(e,t="float32"){if("complex64"===t){const t=pi(e,"float32"),n=Ls(e,"float32");return Bs(t,n)}const n=J(C(e),t);return ya.makeTensor(n,e,t)}const hi=ds({computeWeightedLoss_:function(e,t,n=li.SUM_BY_NONZERO_WEIGHTS){const r=ls(e,"losses","computeWeightedLoss");let a=null;null!=t&&(a=ls(t,"weights","computeWeightedLoss"));const s=null==a?r:Qs(r,a);if(n===li.NONE)return s;if(n===li.SUM)return Co(s);if(n===li.MEAN){if(null==a)return ci(s);{const e=r.size/a.size,t=To(Co(s),Co(a));return e>1?To(t,Ws(e)):t}}if(n===li.SUM_BY_NONZERO_WEIGHTS){if(null==a)return To(Co(s),Ws(r.size));{const e=Qs(a,pi(r.shape)),t=ps(Co(di(e,Ws(0))),"float32");return To(Co(s),t)}}throw Error(`Unknown reduction: ${n}`)}});ds({absoluteDifference_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n,r=li.SUM_BY_NONZERO_WEIGHTS){const a=ls(e,"labels","absoluteDifference"),s=ls(t,"predictions","absoluteDifference");let o=null;null!=n&&(o=ls(n,"weights","absoluteDifference")),y(a.shape,s.shape,"Error in absoluteDifference: ");const i=Uo(Eo(a,s));return hi(i,o,r)}});ds({cosineDistance_:function(e,t,n,r,a=li.SUM_BY_NONZERO_WEIGHTS){const s=ls(e,"labels","cosineDistance"),o=ls(t,"predictions","cosineDistance");let i=null;null!=r&&(i=ls(r,"weights","cosineDistance")),y(s.shape,o.shape,"Error in cosineDistance: ");const u=Ws(1),l=Eo(u,Co(Qs(s,o),n,!0));return hi(l,i,a)}});const fi=ds({relu_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const t={x:ls(e,"x","relu")};return ya.runKernel(yn,t)}});ds({hingeLoss_:function(e,t,n,r=li.SUM_BY_NONZERO_WEIGHTS){let a=ls(e,"labels","hingeLoss");const s=ls(t,"predictions","hingeLoss");let o=null;null!=n&&(o=ls(n,"weights","hingeLoss")),y(a.shape,s.shape,"Error in hingeLoss: ");const i=Ws(1);a=Eo(Qs(Ws(2),a),i);const u=fi(Eo(i,Qs(a,s)));return hi(u,o,r)}});const mi=ds({minimum_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){let n=ls(e,"a","minimum"),r=ls(t,"b","minimum");[n,r]=fa(n,r),"bool"===n.dtype&&(n=ps(n,"int32"),r=ps(r,"int32")),yo(n.shape,r.shape);const a={a:n,b:r};return ya.runKernel(en,a)}});ds({huberLoss_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n,r=1,a=li.SUM_BY_NONZERO_WEIGHTS){const s=ls(e,"labels","huberLoss"),o=ls(t,"predictions","huberLoss");let i=null;null!=n&&(i=ls(n,"weights","huberLoss")),y(s.shape,o.shape,"Error in huberLoss: ");const u=Ws(r),l=Uo(Eo(o,s)),c=mi(l,u),d=Eo(l,c),p=So(Qs(Ws(.5),Yo(c)),Qs(u,d));return hi(p,i,a)}});const gi=ds({log_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const t={x:ls(e,"x","log")};return ya.runKernel(Pt,t)}});ds({logLoss_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n,r=1e-7,a=li.SUM_BY_NONZERO_WEIGHTS){const s=ls(e,"labels","logLoss"),o=ls(t,"predictions","logLoss");let i=null;null!=n&&(i=ls(n,"weights","logLoss")),y(s.shape,o.shape,"Error in logLoss: ");const u=Ws(1),l=Ws(r),c=oi(Qs(s,gi(So(o,l)))),d=Qs(Eo(u,s),gi(So(Eo(u,o),l))),p=Eo(c,d);return hi(p,i,a)}});const xi=ds({squaredDifference_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){let n=ls(e,"a","squaredDifference"),r=ls(t,"b","squaredDifference");[n,r]=fa(n,r),yo(n.shape,r.shape);const a={a:n,b:r};return ya.runKernel(Yn,a,{})}});ds({meanSquaredError_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n,r=li.SUM_BY_NONZERO_WEIGHTS){const a=ls(e,"labels","meanSquaredError"),s=ls(t,"predictions","meanSquaredError");let o=null;null!=n&&(o=ls(n,"weights","meanSquaredError")),y(a.shape,s.shape,"Error in meanSquaredError: ");const i=xi(a,s);return hi(i,o,r)}});const bi=ds({exp_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const t={x:ls(e,"x","exp")};return ya.runKernel(mt,t)}});const vi=ds({log1p_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const t={x:ls(e,"x","log1p")};return ya.runKernel(Wt,t)}});ds({sigmoidCrossEntropy_:function(e,t,n,r=0,a=li.SUM_BY_NONZERO_WEIGHTS){let s=ls(e,"multiClassLabels","sigmoidCrossEntropy");const o=ls(t,"logits","sigmoidCrossEntropy");let i=null;if(null!=n&&(i=ls(n,"weights","sigmoidCrossEntropy")),y(s.shape,o.shape,"Error in sigmoidCrossEntropy: "),r>0){const e=Ws(r),t=Ws(1),n=Ws(.5);s=So(Qs(s,Eo(t,e)),Qs(n,e))}const u=
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){const n=ls(e,"labels","sigmoidCrossEntropyWithLogits"),r=ls(t,"logits","sigmoidCrossEntropyWithLogits");y(n.shape,r.shape,"Error in sigmoidCrossEntropyWithLogits: ");const a=fi(r),s=Qs(r,n),o=vi(bi(oi(Uo(r))));return So(Eo(a,s),o)}(s,o);return hi(u,i,a)}});const ki=ds({logSumExp_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t=null,n=!1){const r=ls(e,"x","logSumExp"),a=_(t,r.shape),s=jo(r,a,!0),o=Eo(r,s),i=bi(o),u=Co(i,a),l=gi(u),c=So(Hs(s,l.shape),l);if(n){const e=Lo(c.shape,a);return Hs(c,e)}return c}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function yi(e,t,n=-1){if(-1===n&&(n=t.rank-1),n!==t.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${t.rank} and dim was ${n}`);const r=(a=(e,t,r)=>{const a=ki(t,[n],!0),s=Eo(ps(t,"float32"),a);r([e,s]);const o=oi(Qs(s,e));return{value:Co(o,[n]),gradFunc:(e,t)=>{const[r,a]=t,s=Lo(e.shape,[n]);return[Qs(Hs(e,s),Eo(ps(r,"float32"),bi(a))),Qs(Hs(e,s),Eo(bi(a),ps(r,"float32")))]}}},ya.customGrad(a));var a;return r(e,t)}ds({softmaxCrossEntropy_:function(e,t,n,r=0,a=li.SUM_BY_NONZERO_WEIGHTS){let s=ls(e,"onehotLabels","softmaxCrossEntropy");const o=ls(t,"logits","softmaxCrossEntropy");let i=null;if(null!=n&&(i=ls(n,"weights","softmaxCrossEntropy")),y(s.shape,o.shape,"Error in softmaxCrossEntropy: "),r>0){const e=Ws(r),t=Ws(1),n=Ws(s.shape[1]);s=So(Qs(s,Eo(t,e)),To(e,n))}const u=yi(s,o);return hi(u,i,a)}});ds({sparseFillEmptyRows_:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n,r){const a=ls(e,"indices","sparseFillEmptyRows"),s=ls(t,"values","sparseFillEmptyRows"),o=ls(n,"denseShape","sparseFillEmptyRows"),i=ls(r,"defaultValue","sparseFillEmptyRows",s.dtype);if(2!==a.rank)throw new Error(`Indices should be Tensor2D but received shape\n        ${a.shape}`);if(1!==s.rank)throw new Error(`Values should be Tensor1D but received shape ${s.shape}`);if(1!==o.rank)throw new Error(`Dense shape should be Tensor1D but received shape ${o.shape}`);if(0!==i.rank)throw new Error(`Default value should be a scalar but received shape ${i.shape}`);const u={indices:a,values:s,denseShape:o,defaultValue:i},l=ya.runKernel(Hn,u);return{outputIndices:l[0],outputValues:l[1],emptyRowIndicator:l[2],reverseIndexMap:l[3]}}});ds({sparseReshape_:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n){const r=ls(e,"inputIndices","sparseReshape"),a=ls(t,"inputShape","sparseReshape"),s=ls(n,"newShape","sparseReshape");if(2!==r.rank)throw new Error(`Input indices should be Tensor2D but received shape\n        ${r.shape}`);if(1!==a.rank)throw new Error(`Input shape should be Tensor1D but received shape ${a.shape}`);if(1!==s.rank)throw new Error(`New shape should be Tensor1D but received shape ${s.shape}`);const o={inputIndices:r,inputShape:a,newShape:s},i=ya.runKernel(jn,o);return{outputIndices:i[0],outputShape:i[1]}}});ds({sparseSegmentMean_:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n){const r=ls(e,"data","sparseSegmentMean"),a=ls(t,"indices","sparseSegmentMean"),s=ls(n,"segmentIds","sparseSegmentMean");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(1!==a.rank)throw new Error(`Indices should be Tensor1D but received shape\n          ${a.shape}`);if(1!==s.rank)throw new Error(`Segment ids should be Tensor1D but received shape\n          ${s.shape}`);const o={data:r,indices:a,segmentIds:s};return ya.runKernel(Xn,o)}});ds({sparseSegmentSum_:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n){const r=ls(e,"data","sparseSegmentSum"),a=ls(t,"indices","sparseSegmentSum"),s=ls(n,"segmentIds","sparseSegmentSum");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(1!==a.rank)throw new Error(`Indices should be Tensor1D but received shape\n         ${a.shape}`);if(1!==s.rank)throw new Error(`Segment ids should be Tensor1D but received shape\n         ${s.shape}`);const o={data:r,indices:a,segmentIds:s};return ya.runKernel(qn,o)}});ds({stringNGrams_:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n,r,a,s,o,i){const u=ls(e,"data","stringNGrams","string");if("string"!==u.dtype)throw new Error("Data must be of datatype string");if(1!==u.shape.length)throw new Error(`Data must be a vector, saw: ${u.shape}`);const l=ls(t,"dataSplits","stringNGrams");if("int32"!==l.dtype)throw new Error("Data splits must be of datatype int32");const c={separator:n,nGramWidths:r,leftPad:a,rightPad:s,padWidth:o,preserveShortSequences:i},d={data:u,dataSplits:l},p=ya.runKernel(Jn,d,c);return{nGrams:p[0],nGramsSplits:p[1]}}});ds({stringSplit_:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n=!0){const r=ls(e,"input","stringSplit","string"),a=ls(t,"delimiter","stringSplit","string");if(1!==r.rank)throw new Error(`Input should be Tensor1D but received shape ${r.shape}`);if(0!==a.rank)throw new Error(`Delimiter should be a scalar but received shape ${a.shape}`);const s={skipEmpty:n},o={input:r,delimiter:a},i=ya.runKernel(er,o,s);return{indices:i[0],values:i[1],shape:i[2]}}});ds({stringToHashBucketFast_:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){const n=ls(e,"input","stringToHashBucketFast","string"),r={numBuckets:t};if(t<=0)throw new Error("Number of buckets must be at least 1");const a={input:n};return ya.runKernel(tr,a,r)}});
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ii(e,t){const n=e[0].length;e.forEach(((e,t)=>{k(e.length===n,(()=>`Error in concat${n}D: rank of tensors[${t}] must be the same as the rank of the rest (${n})`))})),k(t>=0&&t<n,(()=>`Error in concat${n}D: axis must be between 0 and ${n-1}.`));const r=e[0];e.forEach(((e,a)=>{for(let s=0;s<n;s++)k(s===t||e[s]===r[s],(()=>`Error in concat${n}D: Shape of tensors[${a}] (${e}) does not match the shape of the rest (${r}) along the non-concatenated axis ${a}.`))}))}function wi(e,t){const n=e[0].slice();for(let r=1;r<e.length;r++)n[t]+=e[r][t];return n}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ci(e,t,n,r,a="NHWC",s){return Ti(e,[...t,e[3]],n,s,r,null,null,Mi(a))}function Si(e,t,n,r,a,s,o="channelsLast"){const[i,u]=Ri(t);let l;if("channelsLast"===o)l=[i,u,e[3],e[3]];else{if("channelsFirst"!==o)throw new Error(`Unknown dataFormat ${o}`);l=[i,u,e[1],e[1]]}return Ti(e,l,n,r,a,s,!1,o)}function $i(e,t,n,r,a,s,o="NDHWC"){const[i,u,l]=Di(t);let c,d;if("NDHWC"===o)d="channelsLast",c=[i,u,l,e[4],e[4]];else{if("NCDHW"!==o)throw new Error(`Unknown dataFormat ${o}`);d="channelsFirst",c=[i,u,l,e[1],e[1]]}return Ei(e,c,n,r,a,!1,d,s)}function Ti(e,t,n,r,a,s,o=!1,i="channelsLast"){let[u,l,c,d]=[-1,-1,-1,-1];if("channelsLast"===i)[u,l,c,d]=e;else{if("channelsFirst"!==i)throw new Error(`Unknown dataFormat ${i}`);[u,d,l,c]=e}const[p,h,,f]=t,[m,g]=Ri(n),[x,b]=Ri(r),v=Ai(p,x),k=Ai(h,b),{padInfo:y,outHeight:I,outWidth:w}=function(e,t,n,r,a,s,o,i,u){let l,c,d;if("number"==typeof e){l={top:e,bottom:e,left:e,right:e,type:0===e?"VALID":"NUMBER"};const a=function(e,t,n,r,a){null==r&&(r=Ni(e,t,n));const s=e[0],o=e[1],i=Fi((s-t+2*r)/n+1,a),u=Fi((o-t+2*r)/n+1,a);return[i,u]}([t,n],s,r,e,i);c=a[0],d=a[1]}else if("same"===e){c=Math.ceil(t/r),d=Math.ceil(n/a);const e=Math.max(0,(c-1)*r+s-t),i=Math.max(0,(d-1)*a+o-n),u=Math.floor(e/2),p=e-u,h=Math.floor(i/2);l={top:u,bottom:p,left:h,right:i-h,type:"SAME"}}else if("valid"===e)l={top:0,bottom:0,left:0,right:0,type:"VALID"},c=Math.ceil((t-s+1)/r),d=Math.ceil((n-o+1)/a);else{if("object"!=typeof e)throw Error(`Unknown padding parameter: ${e}`);{const p="channelsLast"===u?e[1][0]:e[2][0],h="channelsLast"===u?e[1][1]:e[2][1],f="channelsLast"===u?e[2][0]:e[3][0],m="channelsLast"===u?e[2][1]:e[3][1];l={top:p,bottom:h,left:f,right:m,type:0===p&&0===h&&0===f&&0===m?"VALID":"EXPLICIT"},c=Fi((t-s+p+h)/r+1,i),d=Fi((n-o+f+m)/a+1,i)}}return{padInfo:l,outHeight:c,outWidth:d}}(a,l,c,m,g,v,k,s,i),C=o?f*d:f;let S;return"channelsFirst"===i?S=[u,C,I,w]:"channelsLast"===i&&(S=[u,I,w,C]),{batchSize:u,dataFormat:i,inHeight:l,inWidth:c,inChannels:d,outHeight:I,outWidth:w,outChannels:C,padInfo:y,strideHeight:m,strideWidth:g,filterHeight:p,filterWidth:h,effectiveFilterHeight:v,effectiveFilterWidth:k,dilationHeight:x,dilationWidth:b,inShape:e,outShape:S,filterShape:t}}function Ei(e,t,n,r,a,s=!1,o="channelsLast",i){let[u,l,c,d,p]=[-1,-1,-1,-1,-1];if("channelsLast"===o)[u,l,c,d,p]=e;else{if("channelsFirst"!==o)throw new Error(`Unknown dataFormat ${o}`);[u,p,l,c,d]=e}const[h,f,m,,g]=t,[x,b,v]=Di(n),[k,y,I]=Di(r),w=Ai(h,k),C=Ai(f,y),S=Ai(m,I),{padInfo:$,outDepth:T,outHeight:E,outWidth:N}=function(e,t,n,r,a,s,o,i,u,l,c){let d,p,h,f;if("number"==typeof e){d={top:e,bottom:e,left:e,right:e,front:e,back:e,type:0===e?"VALID":"NUMBER"};const s=function(e,t,n,r,a,s){null==a&&(a=Ni(e,t,r));const o=e[0],i=e[1],u=e[2],l=Fi((o-t+2*a)/r+1,s),c=Fi((i-t+2*a)/r+1,s),d=Fi((u-t+2*a)/r+1,s);return[l,c,d,n]}([t,n,r,1],i,1,a,e,c);p=s[0],h=s[1],f=s[2]}else if("same"===e){p=Math.ceil(t/a),h=Math.ceil(n/s),f=Math.ceil(r/o);const e=(p-1)*a+i-t,c=(h-1)*s+u-n,m=(f-1)*o+l-r,g=Math.floor(e/2),x=e-g,b=Math.floor(c/2),v=c-b,k=Math.floor(m/2);d={top:b,bottom:v,left:k,right:m-k,front:g,back:x,type:"SAME"}}else{if("valid"!==e)throw Error(`Unknown padding parameter: ${e}`);d={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},p=Math.ceil((t-i+1)/a),h=Math.ceil((n-u+1)/s),f=Math.ceil((r-l+1)/o)}return{padInfo:d,outDepth:p,outHeight:h,outWidth:f}}(a,l,c,d,x,b,v,w,C,S,i),R=s?g*p:g;let D;return"channelsFirst"===o?D=[u,R,T,E,N]:"channelsLast"===o&&(D=[u,T,E,N,R]),{batchSize:u,dataFormat:o,inDepth:l,inHeight:c,inWidth:d,inChannels:p,outDepth:T,outHeight:E,outWidth:N,outChannels:R,padInfo:$,strideDepth:x,strideHeight:b,strideWidth:v,filterDepth:h,filterHeight:f,filterWidth:m,effectiveFilterDepth:w,effectiveFilterHeight:C,effectiveFilterWidth:S,dilationDepth:k,dilationHeight:y,dilationWidth:I,inShape:e,outShape:D,filterShape:t}}function Ni(e,t,n,r=1){const a=Ai(t,r);return Math.floor((e[0]*(n-1)-n+a)/2)}function Ri(e){return"number"==typeof e?[e,e,e]:2===e.length?[e[0],e[1],1]:e}function Di(e){return"number"==typeof e?[e,e,e]:e}function Ai(e,t){return t<=1?e:e+(e-1)*(t-1)}function Fi(e,t){if(!t)return Math.trunc(e);switch(t){case"round":return Math.round(e);case"ceil":return Math.ceil(e);case"floor":return Math.floor(e);default:throw new Error(`Unknown roundingMode ${t}`)}}function _i(e){const[t,n,r]=Ri(e);return 1===t&&1===n&&1===r}function Oi(e,t){return _i(e)||_i(t)}function Mi(e){if("NHWC"===e)return"channelsLast";if("NCHW"===e)return"channelsFirst";throw new Error(`Unknown dataFormat ${e}`)}const Ui=ds({elu_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const t={x:ls(e,"x","elu")};return ya.runKernel(dt,t)}});const Pi=ds({leakyRelu_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t=.2){const n={x:ls(e,"x","leakyRelu")},r={alpha:t};return ya.runKernel(_t,n,r)}});const Wi=ds({prelu_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){const n={x:ls(e,"x","prelu"),alpha:ls(t,"alpha","prelu")};return ya.runKernel(gn,n)}});const Bi=ds({relu6_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const t={x:ls(e,"x","relu6")};return ya.runKernel(Tn,t)}});const Li=ds({sigmoid_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const t={x:ls(e,"x","sigmoid")};return ya.runKernel(Pn,t)}});const zi=ds({step_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t=0){const n={x:ls(e,"x","step")},r={alpha:t};return ya.runKernel(hr,n,r)}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Vi(e,t,n){if(null==n||"linear"===n)return e;if("relu"===n)return Qs(e,zi(t));throw new Error(`Cannot compute gradient for fused activation ${n}.`)}function Gi(e,t){let n=t;const r=ko(e.shape,t.shape);return r.length>0&&(n=Co(n,r)),Hs(n,e.shape)}function Hi(e,t,n,r){if("linear"===t)return e;if("relu"===t)return fi(e);if("elu"===t)return Ui(e);if("relu6"===t)return Bi(e);if("prelu"===t)return Wi(e,n);if("leakyrelu"===t)return Pi(e,r);if("sigmoid"===t)return Li(e);throw new Error(`Unknown fused activation ${t}.`)}const ji=(e,t)=>!(e>0)||"linear"===t,Xi=30;function qi(e){return e<=Xi?e:K(e,Math.floor(Math.sqrt(e)))}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ki(e,t,n){return[n*("number"==typeof e?e:e[0]),t*("number"==typeof e?e:e[1])]}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Yi(e,t,n,r=!0){let a=[];if(r)a=a.concat(t.slice(0)),a.push(e[0]/n),a=a.concat(e.slice(1));else{a=a.concat(e[0]);const n=t.length;for(let r=0;r<n;++r)a=a.concat([e[r+1]/t[r],t[r]]);a=a.concat(e.slice(n+1))}return a}function Zi(e,t,n=!0){const r=[];if(n){r.push(t);for(let n=t+1;n<e;++n)n<=2*t?(r.push(n),r.push(n-(t+1))):r.push(n)}else{const n=[],a=[];for(let r=1;r<e;++r)r>=2*t+1||r%2==1?a.push(r):n.push(r);r.push(...n),r.push(0),r.push(...a)}return r}function Qi(e,t,n,r=!0){const a=[];r?a.push(e[0]/n):a.push(e[0]*n);for(let n=1;n<e.length;++n)n<=t.length?r?a.push(t[n-1]*e[n]):a.push(e[n]/t[n-1]):a.push(e[n]);return a}function Ji(e,t){const n=[0];for(let r=0;r<t;++r)n.push(e[r][0]);return n}function eu(e,t,n){const r=e.slice(0,1);for(let a=0;a<n;++a)r.push(e[a+1]-t[a][0]-t[a][1]);return r}function tu(e,t){const n=e.shape.length,r=t.shape.length;if(n<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${n}.`);if(r<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${r}.`);if("int32"!==t.dtype)throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.shape[r-1]>n)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${t.shape[r-1]} vs. ${n}`);if(0===C(e.shape))throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${e.shape}.`);const a=t.shape,s=a[a.length-1];let o=1;for(let e=0;e<a.length-1;++e)o*=a[e];const i=e.shape,u=a.slice();u.pop();let l=1;for(let e=s;e<n;++e)l*=i[e],u.push(i[e]);const c=[...Y(e.shape).map((e=>e/l)),1].slice(0,s);return[u,o,l,c]}function nu(e,t,n){const r=t.rank>1?t.shape[t.rank-1]:1,a=t.rank>1?t.rank-1:1,s=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${n.shape}, indices.shape: ${t.shape}, shape: ${e}, sliceDim: ${r}, and batchDim: ${a}.`;if(n.rank<a)throw new Error(s+` update.rank < ${a}. `);if(e.length<r+(n.rank-a))throw new Error(s+` Output shape length < ${r+(n.rank-a)}`);if(n.rank!==a+e.length-r)throw new Error(s+" update.rank != "+(a+e.length-r));for(let e=0;e<a;++e)if(n.shape[e]!==t.shape[e])throw new Error(s+` updates.shape[${e}] (${n.shape[e]}) != indices.shape[${e}] (${t.shape[e]}).`);for(let t=0;t<n.rank-a;++t)if(n.shape[t+a]!==e[t+r])throw new Error(s+` updates.shape[${t+a}] (${n.shape[t+a]}) != shape[${t+a}] (${e[t+a]})`)}function ru(e,t,n){if(t.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(e.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${e.rank}.`);if("int32"!==t.dtype)throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(n.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${n}`);if(0===n.length){if(0===t.size)throw new Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(0===e.size)throw new Error(`Updates specified for empty output. updates shape: ${e.shape}`)}nu(n,t,e)}function au(e,t,n){const r=t.shape.length,a=r>1?t.shape[r-1]:1,s=n.length;let o=1;for(let e=a;e<s;++e)o*=n[e];const i=a<1?1:a;return{sliceRank:a,numUpdates:C(t.shape)/i,sliceSize:o,strides:[...Y(n.slice(0,a)),1],outputSize:C(n)}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const su=1.7580993408473768,ou=1.0507009873554805,iu=.3275911,uu=.254829592,lu=-.284496736,cu=1.421413741,du=-1.453152027,pu=1.061405429;
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function hu(e,t){if(e.length!==t.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${e.length}, imag: ${t.length}.`);const n=new Float32Array(2*e.length);for(let r=0;r<n.length;r+=2)n[r]=e[r/2],n[r+1]=t[r/2];return n}function fu(e){const t=new Float32Array(e.length/2),n=new Float32Array(e.length/2);for(let r=0;r<e.length;r+=2)t[r/2]=e[r],n[r/2]=e[r+1];return{real:t,imag:n}}function mu(e){const t=Math.ceil(e.length/4),n=new Float32Array(t),r=new Float32Array(t);for(let t=0;t<e.length;t+=4)n[Math.floor(t/4)]=e[t],r[Math.floor(t/4)]=e[t+1];return{real:n,imag:r}}function gu(e){const t=Math.floor(e.length/4),n=new Float32Array(t),r=new Float32Array(t);for(let t=2;t<e.length;t+=4)n[Math.floor(t/4)]=e[t],r[Math.floor(t/4)]=e[t+1];return{real:n,imag:r}}function xu(e,t){return{real:e[2*t],imag:e[2*t+1]}}function bu(e,t,n,r){e[2*r]=t,e[2*r+1]=n}function vu(e,t){const n=new Float32Array(e/2),r=new Float32Array(e/2);for(let a=0;a<Math.ceil(e/2);a++){const s=(t?2:-2)*Math.PI*(a/e);n[a]=Math.cos(s),r[a]=Math.sin(s)}return{real:n,imag:r}}function ku(e,t,n){const r=(n?2:-2)*Math.PI*(e/t);return{real:Math.cos(r),imag:Math.sin(r)}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const yu="->",Iu=/->/g;function wu(e,t){const n=((e=e.replace(/\s/g,"")).length-e.replace(Iu,"").length)/yu.length;if(n<1)throw new Error("Equations without an arrow are not supported.");if(n>1)throw new Error('Equation must contain exactly one arrow ("->").');const[r,a]=e.split(yu);k(-1===r.indexOf("..."),(()=>'The ellipsis notation ("...") is not supported yet.'));const s=r.split(","),o=s.length;if(t!==o)throw new Error(`Expected ${o} input tensors, received ${t}`);if(o>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");const i=[];for(let e=0;e<a.length;++e){const t=a[e];if(!s.some((e=>-1!==e.indexOf(t))))throw new Error(`Output subscripts contain the label ${t} not present in the input subscripts.`);-1===i.indexOf(t)&&i.push(t)}for(let e=0;e<r.length;++e){const t=r[e];-1===i.indexOf(t)&&","!==t&&i.push(t)}const u=new Array(s.length);for(let e=0;e<o;++e){if(new Set(s[e].split("")).size!==s[e].length)throw new Error(`Found duplicate axes in input component ${s[e]}. Support for duplicate axes in input is not implemented yet.`);u[e]=[];for(let t=0;t<s[e].length;++t)u[e].push(i.indexOf(s[e][t]))}const l=i.length,c=[];for(let e=a.length;e<l;++e)c.push(e);return{allDims:i,summedDims:c,idDims:u}}function Cu(e,t){let n=new Array(e);n.fill(-1);for(let e=0;e<t.length;++e)n[t[e]]=e;const r=[];for(let t=0;t<e;++t)-1===n[t]&&r.push(t);return n=n.filter((e=>-1!==e)),{permutationIndices:n,expandDims:r}}function Su(e,t,n){const r=new Array(e);for(let e=0;e<n.length;++e){const a=n[e].shape;for(let n=0;n<t[e].length;++n)void 0===r[t[e][n]]?r[t[e][n]]=a[n]:k(r[t[e][n]]===a[n],(()=>`Expected dimension ${r[t[e][n]]} at axis ${n} of input shaped ${JSON.stringify(a)}, but got dimension ${a[n]}`))}}function $u(e,t){const n=e,r=[];let a=0;0===e.length&&n.push(-1),a=e.length+1;for(let e=0;e<a;++e)r.push([]);const s=[];for(let e=0;e<n.length;++e){const a=Eu(t,n[e]);for(const t of a)-1===s.indexOf(t)&&(r[e].push(t),s.push(t))}return{path:n,steps:r}}function Tu(e){return e.every(((e,t)=>e===t))}function Eu(e,t){const n=[];for(let r=0;r<e.length;++r)0!==e[r].length&&-1===e[r].indexOf(t)&&-1!==t||n.push(r);return n}function Nu(e,t,n=0){let r=[];if("number"==typeof t)k(e.shape[n]%t==0,(()=>"Number of splits must evenly divide the axis.")),r=new Array(t).fill(e.shape[n]/t);else{k(t.reduce(((e,t)=>(-1===t&&(e+=1),e)),0)<=1,(()=>"There should be only one negative value in split array."));const a=t.indexOf(-1);if(-1!==a){const r=t.reduce(((e,t)=>t>0?e+t:e));t[a]=e.shape[n]-r}k(e.shape[n]===t.reduce(((e,t)=>e+t)),(()=>"The sum of sizes must match the size of the axis dimension.")),r=t}return r}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ru(e,t){let n,r=!1;for(e<=Xi?(n=e,r=!0):n=K(e,Math.floor(Math.sqrt(e)));!r;)n>t||n===e?r=!0:n=K(e,n+1);return n}function Du(e,t,n){const r=[],a=e.length;for(let s=0;s<a;s++)s!==t?r.push(e[s]):r.push(n);return r}function Au(e,t,n,r){const a=t.shape.length,s=e.shape.length;if(0!==r&&(r<-a||r>a))throw new Error(`Expect batchDims in the range of [-${a}, ${a}], but got ${r}`);if(r<0&&(r+=a),r>s)throw new Error(`batchDims (${r}) must be less than rank(x) (\n    ${s}).`);if(n<r)throw new Error(`batchDims (${r}) must be less than or equal to axis (${n}).`);for(let n=0;n<r;++n)if(e.shape[n]!==t.shape[n])throw new Error(`x.shape[${n}]: ${e.shape[n]} should be equal to indices.shape[${n}]: ${t.shape[n]}.`);const o=e.shape[n],i=[];let u=1,l=1,c=1;for(let t=0;t<r;++t)i.push(e.shape[t]),u*=e.shape[t];for(let t=r;t<n;t++)i.push(e.shape[t]),l*=e.shape[t];for(let e=r;e<a;e++)i.push(t.shape[e]);for(let t=n+1;t<s;t++)i.push(e.shape[t]),c*=e.shape[t];return{batchSize:u,sliceSize:c,outerSize:l,dimSize:o,outputShape:i}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Fu(e){try{return e.map((e=>Hr(e)))}catch(e){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${e}`)}}function _u(e){return e.map((e=>Gr(e)))}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ou(e,t){const n=[];for(let e=0;e<t.length;e++)t[e]&&n.push(e);const r=ss(e,"int32"),a=ss([n.length,e.length],"int32");for(let t=0;t<n.length;t++){const s=r.indexToLoc(n[t]),o=t*e.length;a.values.set(s,o)}return a.toTensor()}}
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */,3720:e=>{e.exports=n;var t=null;try{t=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch(e){}function n(e,t,n){this.low=0|e,this.high=0|t,this.unsigned=!!n}function r(e){return!0===(e&&e.__isLong__)}n.prototype.__isLong__,Object.defineProperty(n.prototype,"__isLong__",{value:!0}),n.isLong=r;var a={},s={};function o(e,t){var n,r,o;return t?(o=0<=(e>>>=0)&&e<256)&&(r=s[e])?r:(n=u(e,(0|e)<0?-1:0,!0),o&&(s[e]=n),n):(o=-128<=(e|=0)&&e<128)&&(r=a[e])?r:(n=u(e,e<0?-1:0,!1),o&&(a[e]=n),n)}function i(e,t){if(isNaN(e))return t?x:g;if(t){if(e<0)return x;if(e>=h)return I}else{if(e<=-f)return w;if(e+1>=f)return y}return e<0?i(-e,t).neg():u(e%p|0,e/p|0,t)}function u(e,t,r){return new n(e,t,r)}n.fromInt=o,n.fromNumber=i,n.fromBits=u;var l=Math.pow;function c(e,t,n){if(0===e.length)throw Error("empty string");if("NaN"===e||"Infinity"===e||"+Infinity"===e||"-Infinity"===e)return g;if("number"==typeof t?(n=t,t=!1):t=!!t,(n=n||10)<2||36<n)throw RangeError("radix");var r;if((r=e.indexOf("-"))>0)throw Error("interior hyphen");if(0===r)return c(e.substring(1),t,n).neg();for(var a=i(l(n,8)),s=g,o=0;o<e.length;o+=8){var u=Math.min(8,e.length-o),d=parseInt(e.substring(o,o+u),n);if(u<8){var p=i(l(n,u));s=s.mul(p).add(i(d))}else s=(s=s.mul(a)).add(i(d))}return s.unsigned=t,s}function d(e,t){return"number"==typeof e?i(e,t):"string"==typeof e?c(e,t):u(e.low,e.high,"boolean"==typeof t?t:e.unsigned)}n.fromString=c,n.fromValue=d;var p=4294967296,h=p*p,f=h/2,m=o(1<<24),g=o(0);n.ZERO=g;var x=o(0,!0);n.UZERO=x;var b=o(1);n.ONE=b;var v=o(1,!0);n.UONE=v;var k=o(-1);n.NEG_ONE=k;var y=u(-1,2147483647,!1);n.MAX_VALUE=y;var I=u(-1,-1,!0);n.MAX_UNSIGNED_VALUE=I;var w=u(0,-2147483648,!1);n.MIN_VALUE=w;var C=n.prototype;C.toInt=function(){return this.unsigned?this.low>>>0:this.low},C.toNumber=function(){return this.unsigned?(this.high>>>0)*p+(this.low>>>0):this.high*p+(this.low>>>0)},C.toString=function(e){if((e=e||10)<2||36<e)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative()){if(this.eq(w)){var t=i(e),n=this.div(t),r=n.mul(t).sub(this);return n.toString(e)+r.toInt().toString(e)}return"-"+this.neg().toString(e)}for(var a=i(l(e,6),this.unsigned),s=this,o="";;){var u=s.div(a),c=(s.sub(u.mul(a)).toInt()>>>0).toString(e);if((s=u).isZero())return c+o;for(;c.length<6;)c="0"+c;o=""+c+o}},C.getHighBits=function(){return this.high},C.getHighBitsUnsigned=function(){return this.high>>>0},C.getLowBits=function(){return this.low},C.getLowBitsUnsigned=function(){return this.low>>>0},C.getNumBitsAbs=function(){if(this.isNegative())return this.eq(w)?64:this.neg().getNumBitsAbs();for(var e=0!=this.high?this.high:this.low,t=31;t>0&&0==(e&1<<t);t--);return 0!=this.high?t+33:t+1},C.isZero=function(){return 0===this.high&&0===this.low},C.eqz=C.isZero,C.isNegative=function(){return!this.unsigned&&this.high<0},C.isPositive=function(){return this.unsigned||this.high>=0},C.isOdd=function(){return 1==(1&this.low)},C.isEven=function(){return 0==(1&this.low)},C.equals=function(e){return r(e)||(e=d(e)),(this.unsigned===e.unsigned||this.high>>>31!=1||e.high>>>31!=1)&&(this.high===e.high&&this.low===e.low)},C.eq=C.equals,C.notEquals=function(e){return!this.eq(e)},C.neq=C.notEquals,C.ne=C.notEquals,C.lessThan=function(e){return this.comp(e)<0},C.lt=C.lessThan,C.lessThanOrEqual=function(e){return this.comp(e)<=0},C.lte=C.lessThanOrEqual,C.le=C.lessThanOrEqual,C.greaterThan=function(e){return this.comp(e)>0},C.gt=C.greaterThan,C.greaterThanOrEqual=function(e){return this.comp(e)>=0},C.gte=C.greaterThanOrEqual,C.ge=C.greaterThanOrEqual,C.compare=function(e){if(r(e)||(e=d(e)),this.eq(e))return 0;var t=this.isNegative(),n=e.isNegative();return t&&!n?-1:!t&&n?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?-1:1:this.sub(e).isNegative()?-1:1},C.comp=C.compare,C.negate=function(){return!this.unsigned&&this.eq(w)?w:this.not().add(b)},C.neg=C.negate,C.add=function(e){r(e)||(e=d(e));var t=this.high>>>16,n=65535&this.high,a=this.low>>>16,s=65535&this.low,o=e.high>>>16,i=65535&e.high,l=e.low>>>16,c=0,p=0,h=0,f=0;return h+=(f+=s+(65535&e.low))>>>16,p+=(h+=a+l)>>>16,c+=(p+=n+i)>>>16,c+=t+o,u((h&=65535)<<16|(f&=65535),(c&=65535)<<16|(p&=65535),this.unsigned)},C.subtract=function(e){return r(e)||(e=d(e)),this.add(e.neg())},C.sub=C.subtract,C.multiply=function(e){if(this.isZero())return g;if(r(e)||(e=d(e)),t)return u(t.mul(this.low,this.high,e.low,e.high),t.get_high(),this.unsigned);if(e.isZero())return g;if(this.eq(w))return e.isOdd()?w:g;if(e.eq(w))return this.isOdd()?w:g;if(this.isNegative())return e.isNegative()?this.neg().mul(e.neg()):this.neg().mul(e).neg();if(e.isNegative())return this.mul(e.neg()).neg();if(this.lt(m)&&e.lt(m))return i(this.toNumber()*e.toNumber(),this.unsigned);var n=this.high>>>16,a=65535&this.high,s=this.low>>>16,o=65535&this.low,l=e.high>>>16,c=65535&e.high,p=e.low>>>16,h=65535&e.low,f=0,x=0,b=0,v=0;return b+=(v+=o*h)>>>16,x+=(b+=s*h)>>>16,b&=65535,x+=(b+=o*p)>>>16,f+=(x+=a*h)>>>16,x&=65535,f+=(x+=s*p)>>>16,x&=65535,f+=(x+=o*c)>>>16,f+=n*h+a*p+s*c+o*l,u((b&=65535)<<16|(v&=65535),(f&=65535)<<16|(x&=65535),this.unsigned)},C.mul=C.multiply,C.divide=function(e){if(r(e)||(e=d(e)),e.isZero())throw Error("division by zero");var n,a,s;if(t)return this.unsigned||-2147483648!==this.high||-1!==e.low||-1!==e.high?u((this.unsigned?t.div_u:t.div_s)(this.low,this.high,e.low,e.high),t.get_high(),this.unsigned):this;if(this.isZero())return this.unsigned?x:g;if(this.unsigned){if(e.unsigned||(e=e.toUnsigned()),e.gt(this))return x;if(e.gt(this.shru(1)))return v;s=x}else{if(this.eq(w))return e.eq(b)||e.eq(k)?w:e.eq(w)?b:(n=this.shr(1).div(e).shl(1)).eq(g)?e.isNegative()?b:k:(a=this.sub(e.mul(n)),s=n.add(a.div(e)));if(e.eq(w))return this.unsigned?x:g;if(this.isNegative())return e.isNegative()?this.neg().div(e.neg()):this.neg().div(e).neg();if(e.isNegative())return this.div(e.neg()).neg();s=g}for(a=this;a.gte(e);){n=Math.max(1,Math.floor(a.toNumber()/e.toNumber()));for(var o=Math.ceil(Math.log(n)/Math.LN2),c=o<=48?1:l(2,o-48),p=i(n),h=p.mul(e);h.isNegative()||h.gt(a);)h=(p=i(n-=c,this.unsigned)).mul(e);p.isZero()&&(p=b),s=s.add(p),a=a.sub(h)}return s},C.div=C.divide,C.modulo=function(e){return r(e)||(e=d(e)),t?u((this.unsigned?t.rem_u:t.rem_s)(this.low,this.high,e.low,e.high),t.get_high(),this.unsigned):this.sub(this.div(e).mul(e))},C.mod=C.modulo,C.rem=C.modulo,C.not=function(){return u(~this.low,~this.high,this.unsigned)},C.and=function(e){return r(e)||(e=d(e)),u(this.low&e.low,this.high&e.high,this.unsigned)},C.or=function(e){return r(e)||(e=d(e)),u(this.low|e.low,this.high|e.high,this.unsigned)},C.xor=function(e){return r(e)||(e=d(e)),u(this.low^e.low,this.high^e.high,this.unsigned)},C.shiftLeft=function(e){return r(e)&&(e=e.toInt()),0==(e&=63)?this:e<32?u(this.low<<e,this.high<<e|this.low>>>32-e,this.unsigned):u(0,this.low<<e-32,this.unsigned)},C.shl=C.shiftLeft,C.shiftRight=function(e){return r(e)&&(e=e.toInt()),0==(e&=63)?this:e<32?u(this.low>>>e|this.high<<32-e,this.high>>e,this.unsigned):u(this.high>>e-32,this.high>=0?0:-1,this.unsigned)},C.shr=C.shiftRight,C.shiftRightUnsigned=function(e){if(r(e)&&(e=e.toInt()),0===(e&=63))return this;var t=this.high;return e<32?u(this.low>>>e|t<<32-e,t>>>e,this.unsigned):u(32===e?t:t>>>e-32,0,this.unsigned)},C.shru=C.shiftRightUnsigned,C.shr_u=C.shiftRightUnsigned,C.toSigned=function(){return this.unsigned?u(this.low,this.high,!1):this},C.toUnsigned=function(){return this.unsigned?this:u(this.low,this.high,!0)},C.toBytes=function(e){return e?this.toBytesLE():this.toBytesBE()},C.toBytesLE=function(){var e=this.high,t=this.low;return[255&t,t>>>8&255,t>>>16&255,t>>>24,255&e,e>>>8&255,e>>>16&255,e>>>24]},C.toBytesBE=function(){var e=this.high,t=this.low;return[e>>>24,e>>>16&255,e>>>8&255,255&e,t>>>24,t>>>16&255,t>>>8&255,255&t]},n.fromBytes=function(e,t,r){return r?n.fromBytesLE(e,t):n.fromBytesBE(e,t)},n.fromBytesLE=function(e,t){return new n(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,t)},n.fromBytesBE=function(e,t){return new n(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],t)}},6377:(e,t,n)=>{var r=n(4832),a=n(8652),s=n(801),o=n(2030),i=n(3618),u=n(9049),l=n(1971);l.alea=r,l.xor128=a,l.xorwow=s,l.xorshift7=o,l.xor4096=i,l.tychei=u,e.exports=l},4832:function(e,t,n){var r;!function(e,a,s){function o(e){var t,n=this,r=(t=4022871197,function(e){e=e.toString();for(var n=0;n<e.length;n++){var r=.02519603282416938*(t+=e.charCodeAt(n));r-=t=r>>>0,t=(r*=t)>>>0,t+=4294967296*(r-=t)}return 2.3283064365386963e-10*(t>>>0)});n.next=function(){var e=2091639*n.s0+2.3283064365386963e-10*n.c;return n.s0=n.s1,n.s1=n.s2,n.s2=e-(n.c=0|e)},n.c=1,n.s0=r(" "),n.s1=r(" "),n.s2=r(" "),n.s0-=r(e),n.s0<0&&(n.s0+=1),n.s1-=r(e),n.s1<0&&(n.s1+=1),n.s2-=r(e),n.s2<0&&(n.s2+=1),r=null}function i(e,t){return t.c=e.c,t.s0=e.s0,t.s1=e.s1,t.s2=e.s2,t}function u(e,t){var n=new o(e),r=t&&t.state,a=n.next;return a.int32=function(){return 4294967296*n.next()|0},a.double=function(){return a()+11102230246251565e-32*(2097152*a()|0)},a.quick=a,r&&("object"==typeof r&&i(r,n),a.state=function(){return i(n,{})}),a}a&&a.exports?a.exports=u:n.amdD&&n.amdO?void 0===(r=function(){return u}.call(t,n,t,a))||(a.exports=r):this.alea=u}(0,e=n.nmd(e),n.amdD)},9049:function(e,t,n){var r;!function(e,a,s){function o(e){var t=this,n="";t.next=function(){var e=t.b,n=t.c,r=t.d,a=t.a;return e=e<<25^e>>>7^n,n=n-r|0,r=r<<24^r>>>8^a,a=a-e|0,t.b=e=e<<20^e>>>12^n,t.c=n=n-r|0,t.d=r<<16^n>>>16^a,t.a=a-e|0},t.a=0,t.b=0,t.c=-1640531527,t.d=1367130551,e===Math.floor(e)?(t.a=e/4294967296|0,t.b=0|e):n+=e;for(var r=0;r<n.length+20;r++)t.b^=0|n.charCodeAt(r),t.next()}function i(e,t){return t.a=e.a,t.b=e.b,t.c=e.c,t.d=e.d,t}function u(e,t){var n=new o(e),r=t&&t.state,a=function(){return(n.next()>>>0)/4294967296};return a.double=function(){do{var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===e);return e},a.int32=n.next,a.quick=a,r&&("object"==typeof r&&i(r,n),a.state=function(){return i(n,{})}),a}a&&a.exports?a.exports=u:n.amdD&&n.amdO?void 0===(r=function(){return u}.call(t,n,t,a))||(a.exports=r):this.tychei=u}(0,e=n.nmd(e),n.amdD)},8652:function(e,t,n){var r;!function(e,a,s){function o(e){var t=this,n="";t.x=0,t.y=0,t.z=0,t.w=0,t.next=function(){var e=t.x^t.x<<11;return t.x=t.y,t.y=t.z,t.z=t.w,t.w^=t.w>>>19^e^e>>>8},e===(0|e)?t.x=e:n+=e;for(var r=0;r<n.length+64;r++)t.x^=0|n.charCodeAt(r),t.next()}function i(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t}function u(e,t){var n=new o(e),r=t&&t.state,a=function(){return(n.next()>>>0)/4294967296};return a.double=function(){do{var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===e);return e},a.int32=n.next,a.quick=a,r&&("object"==typeof r&&i(r,n),a.state=function(){return i(n,{})}),a}a&&a.exports?a.exports=u:n.amdD&&n.amdO?void 0===(r=function(){return u}.call(t,n,t,a))||(a.exports=r):this.xor128=u}(0,e=n.nmd(e),n.amdD)},3618:function(e,t,n){var r;!function(e,a,s){function o(e){var t=this;t.next=function(){var e,n,r=t.w,a=t.X,s=t.i;return t.w=r=r+1640531527|0,n=a[s+34&127],e=a[s=s+1&127],n^=n<<13,e^=e<<17,n^=n>>>15,e^=e>>>12,n=a[s]=n^e,t.i=s,n+(r^r>>>16)|0},function(e,t){var n,r,a,s,o,i=[],u=128;for(t===(0|t)?(r=t,t=null):(t+="\0",r=0,u=Math.max(u,t.length)),a=0,s=-32;s<u;++s)t&&(r^=t.charCodeAt((s+32)%t.length)),0===s&&(o=r),r^=r<<10,r^=r>>>15,r^=r<<4,r^=r>>>13,s>=0&&(o=o+1640531527|0,a=0==(n=i[127&s]^=r+o)?a+1:0);for(a>=128&&(i[127&(t&&t.length||0)]=-1),a=127,s=512;s>0;--s)r=i[a+34&127],n=i[a=a+1&127],r^=r<<13,n^=n<<17,r^=r>>>15,n^=n>>>12,i[a]=r^n;e.w=o,e.X=i,e.i=a}(t,e)}function i(e,t){return t.i=e.i,t.w=e.w,t.X=e.X.slice(),t}function u(e,t){null==e&&(e=+new Date);var n=new o(e),r=t&&t.state,a=function(){return(n.next()>>>0)/4294967296};return a.double=function(){do{var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===e);return e},a.int32=n.next,a.quick=a,r&&(r.X&&i(r,n),a.state=function(){return i(n,{})}),a}a&&a.exports?a.exports=u:n.amdD&&n.amdO?void 0===(r=function(){return u}.call(t,n,t,a))||(a.exports=r):this.xor4096=u}(0,e=n.nmd(e),n.amdD)},2030:function(e,t,n){var r;!function(e,a,s){function o(e){var t=this;t.next=function(){var e,n,r=t.x,a=t.i;return e=r[a],n=(e^=e>>>7)^e<<24,n^=(e=r[a+1&7])^e>>>10,n^=(e=r[a+3&7])^e>>>3,n^=(e=r[a+4&7])^e<<7,e=r[a+7&7],n^=(e^=e<<13)^e<<9,r[a]=n,t.i=a+1&7,n},function(e,t){var n,r=[];if(t===(0|t))r[0]=t;else for(t=""+t,n=0;n<t.length;++n)r[7&n]=r[7&n]<<15^t.charCodeAt(n)+r[n+1&7]<<13;for(;r.length<8;)r.push(0);for(n=0;n<8&&0===r[n];++n);for(8==n?r[7]=-1:r[n],e.x=r,e.i=0,n=256;n>0;--n)e.next()}(t,e)}function i(e,t){return t.x=e.x.slice(),t.i=e.i,t}function u(e,t){null==e&&(e=+new Date);var n=new o(e),r=t&&t.state,a=function(){return(n.next()>>>0)/4294967296};return a.double=function(){do{var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===e);return e},a.int32=n.next,a.quick=a,r&&(r.x&&i(r,n),a.state=function(){return i(n,{})}),a}a&&a.exports?a.exports=u:n.amdD&&n.amdO?void 0===(r=function(){return u}.call(t,n,t,a))||(a.exports=r):this.xorshift7=u}(0,e=n.nmd(e),n.amdD)},801:function(e,t,n){var r;!function(e,a,s){function o(e){var t=this,n="";t.next=function(){var e=t.x^t.x>>>2;return t.x=t.y,t.y=t.z,t.z=t.w,t.w=t.v,(t.d=t.d+362437|0)+(t.v=t.v^t.v<<4^e^e<<1)|0},t.x=0,t.y=0,t.z=0,t.w=0,t.v=0,e===(0|e)?t.x=e:n+=e;for(var r=0;r<n.length+64;r++)t.x^=0|n.charCodeAt(r),r==n.length&&(t.d=t.x<<10^t.x>>>4),t.next()}function i(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t.v=e.v,t.d=e.d,t}function u(e,t){var n=new o(e),r=t&&t.state,a=function(){return(n.next()>>>0)/4294967296};return a.double=function(){do{var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===e);return e},a.int32=n.next,a.quick=a,r&&("object"==typeof r&&i(r,n),a.state=function(){return i(n,{})}),a}a&&a.exports?a.exports=u:n.amdD&&n.amdO?void 0===(r=function(){return u}.call(t,n,t,a))||(a.exports=r):this.xorwow=u}(0,e=n.nmd(e),n.amdD)},1971:(e,t,n)=>{var r;!function(a,s){var o,i=this,u=256,l=s.pow(u,6),c=s.pow(2,52),d=2*c,p=255;function h(e,t,n){var r=[],p=x(g((t=1==t?{entropy:!0}:t||{}).entropy?[e,b(a)]:null==e?function(){try{var e;return o&&(e=o.randomBytes)?e=e(u):(e=new Uint8Array(u),(i.crypto||i.msCrypto).getRandomValues(e)),b(e)}catch(e){var t=i.navigator,n=t&&t.plugins;return[+new Date,i,n,i.screen,b(a)]}}():e,3),r),h=new f(r),v=function(){for(var e=h.g(6),t=l,n=0;e<c;)e=(e+n)*u,t*=u,n=h.g(1);for(;e>=d;)e/=2,t/=2,n>>>=1;return(e+n)/t};return v.int32=function(){return 0|h.g(4)},v.quick=function(){return h.g(4)/4294967296},v.double=v,x(b(h.S),a),(t.pass||n||function(e,t,n,r){return r&&(r.S&&m(r,h),e.state=function(){return m(h,{})}),n?(s.random=e,t):e})(v,p,"global"in t?t.global:this==s,t.state)}function f(e){var t,n=e.length,r=this,a=0,s=r.i=r.j=0,o=r.S=[];for(n||(e=[n++]);a<u;)o[a]=a++;for(a=0;a<u;a++)o[a]=o[s=p&s+e[a%n]+(t=o[a])],o[s]=t;(r.g=function(e){for(var t,n=0,a=r.i,s=r.j,o=r.S;e--;)t=o[a=p&a+1],n=n*u+o[p&(o[a]=o[s=p&s+t])+(o[s]=t)];return r.i=a,r.j=s,n})(u)}function m(e,t){return t.i=e.i,t.j=e.j,t.S=e.S.slice(),t}function g(e,t){var n,r=[],a=typeof e;if(t&&"object"==a)for(n in e)try{r.push(g(e[n],t-1))}catch(e){}return r.length?r:"string"==a?e:e+"\0"}function x(e,t){for(var n,r=e+"",a=0;a<r.length;)t[p&a]=p&(n^=19*t[p&a])+r.charCodeAt(a++);return b(t)}function b(e){return String.fromCharCode.apply(0,e)}if(s.seedrandom=h,x(s.random(),a),e.exports){e.exports=h;try{o=n(5042)}catch(e){}}else void 0===(r=function(){return h}.call(t,n,t,e))||(e.exports=r)}([],Math)},9064:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MODEL_WASM_INFERENCE_DIMENSIONS=t.TFLITE_MODELS_SEG_LITE=t.TFLITE_SIMD_LOADER_NAME=t.TFLITE_LOADER_NAME=t.MODEL_NAME=t.PERSON_PROBABILITY_THRESHOLD=t.HISTORY_COUNT=t.MASK_BLUR_RADIUS=t.DEBOUNCE=t.BLUR_FILTER_RADIUS=void 0,t.BLUR_FILTER_RADIUS=15,t.DEBOUNCE=2,t.MASK_BLUR_RADIUS=5,t.HISTORY_COUNT=5,t.PERSON_PROBABILITY_THRESHOLD=.4,t.MODEL_NAME="selfie_segmentation_landscape.tflite",t.TFLITE_LOADER_NAME="tflite/tflite.js",t.TFLITE_SIMD_LOADER_NAME="tflite/tflite-simd.js",t.TFLITE_MODELS_SEG_LITE={model96:"models/segm_lite_v681.tflite",model144:"models/segm_full_v679.tflite"},t.MODEL_WASM_INFERENCE_DIMENSIONS={model96:{height:96,width:160},model144:{height:144,width:256}}},7557:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.timerWorkerScript=t.TIMEOUT_TICK=t.CLEAR_TIMEOUT=t.SET_TIMEOUT=void 0,t.SET_TIMEOUT=1,t.CLEAR_TIMEOUT=2,t.TIMEOUT_TICK=3;var n="\n     var timer;\n \n     onmessage = function(request) {\n         switch (request.data.id) {\n         case "+t.SET_TIMEOUT+": {\n             timer = setTimeout(() => {\n                 postMessage({ id: "+t.TIMEOUT_TICK+" });\n             }, request.data.timeMs);\n             break;\n         }\n         case "+t.CLEAR_TIMEOUT+": {\n             if (timer) {\n                 clearTimeout(timer);\n             }\n             break;\n         }\n         }\n     };\n ";t.timerWorkerScript=URL.createObjectURL(new Blob([n],{type:"application/javascript"}))},6217:function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0}),t.BackgroundBlurEffect=void 0;var s=n(2636),o=n(9064),i=function(e){function t(t){var n=e.call(this,t)||this;return n._blurFilterRadius=15,n.blurFilterRadius=t.blurFilterRadius,n}return a(t,e),Object.defineProperty(t.prototype,"blurFilterRadius",{get:function(){return this._blurFilterRadius},set:function(e){e||(console.warn("Valid blur filter radius not found. Using "+o.BLUR_FILTER_RADIUS+" as default."),e=o.BLUR_FILTER_RADIUS),this._blurFilterRadius=e},enumerable:!1,configurable:!0}),t.prototype._applyFilter=function(e){this._outputCanvasCtx&&(this._outputCanvasCtx.filter="blur("+this._blurFilterRadius+"px)",this._outputCanvasCtx.drawImage(e,0,0))},t}(s.BackgroundEffect);t.BackgroundBlurEffect=i},2636:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)},a=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,s){function o(e){try{u(r.next(e))}catch(e){s(e)}}function i(e){try{u(r.throw(e))}catch(e){s(e)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,i)}u((r=r.apply(e,t||[])).next())}))},s=this&&this.__generator||function(e,t){var n,r,a,s,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(s){return function(i){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&s[0]?r.return:s[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,s[1])).done)return a;switch(r=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(a=o.trys,(a=a.length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){o.label=s[1];break}if(6===s[0]&&o.label<a[1]){o.label=a[1],a=s;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(s);break}a[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,i])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.BackgroundEffect=void 0,n(8721),n(6839);var o=n(7557),i=n(9064),u=function(){function e(t){if(this._options={},this._isSimdEnabled=null,this._maskBlurRadius=i.MASK_BLUR_RADIUS,this._options=r(r({},t),this._isSimdEnabled?e.segmentationDimensions.model144:e.segmentationDimensions.model96),console.log("BackgroundEffect Options",this._options),"string"!=typeof t.assetsPath)throw new Error("assetsPath parameter is missing");var n=t.assetsPath;n&&"/"!==n[n.length-1]&&(n+="/"),this.maskBlurRadius=t.maskBlurRadius,this._assetsPath=n,this._inputVideoElement=document.createElement("video"),this._outputCanvasElement=document.createElement("canvas"),this._outputCanvasCtx=this._outputCanvasElement.getContext("2d"),this._segmentationMask=new ImageData(this._options.width,this._options.height),this._segmentationMaskCanvas=document.createElement("canvas"),this._segmentationMaskCanvas.width=this._options.width,this._segmentationMaskCanvas.height=this._options.height,this._segmentationMaskCtx=this._segmentationMaskCanvas.getContext("2d")}return Object.defineProperty(e.prototype,"maskBlurRadius",{get:function(){return this._maskBlurRadius},set:function(e){("number"!=typeof e||e<0)&&(console.warn("Valid mask blur radius not found. Using "+i.MASK_BLUR_RADIUS+" as default."),e=i.MASK_BLUR_RADIUS),this._maskBlurRadius=e},enumerable:!1,configurable:!0}),e.prototype.loadModel=function(){return a(this,void 0,void 0,(function(){var e,t,n,r,a,o;return s(this,(function(s){switch(s.label){case 0:return e=this._isSimdEnabled?i.TFLITE_MODELS_SEG_LITE.model144:i.TFLITE_MODELS_SEG_LITE.model96,[4,Promise.all([this._loadTfLite(),fetch(this._assetsPath+e)])];case 1:return t=s.sent(),n=t[0],r=t[1],console.log("ModelResponse",r),[4,r.arrayBuffer()];case 2:return a=s.sent(),o=n._getModelBufferMemoryOffset(),n.HEAPU8.set(new Uint8Array(a),o),n._loadModel(a.byteLength),this._tflite=n,[2]}}))}))},e.prototype.createVirtualBackgroundEffect=function(e){return a(this,void 0,Promise,(function(){return s(this,(function(e){return[2]}))}))},e.prototype.runPostProcessing=function(){this._outputCanvasCtx&&(this._outputCanvasCtx.globalCompositeOperation="copy",this._options.virtualBackground&&this._options.virtualBackground.backgroundType,this._outputCanvasCtx.filter="blur("+this._maskBlurRadius+"px)",this._outputCanvasCtx.drawImage(this._segmentationMaskCanvas,0,0,this._options.width,this._options.height,0,0,this._inputVideoElement.width,this._inputVideoElement.height),this._outputCanvasCtx.globalCompositeOperation="source-in",this._outputCanvasCtx.filter="none",this._outputCanvasCtx.drawImage(this._inputVideoElement,0,0),this._outputCanvasCtx.globalCompositeOperation="destination-over",this._applyFilter(this._inputVideoElement))},e.prototype.runInference=function(){this._tflite._runInference();for(var e=this._options.width*this._options.height,t=this._tflite._getOutputMemoryOffset()/4,n=0;n<e;n++){var r=this._tflite.HEAPF32[t+2*n],a=this._tflite.HEAPF32[t+2*n+1],s=Math.max(r,a),o=Math.exp(r-s),i=Math.exp(a-s);this._segmentationMask.data[4*n+3]=255*i/(o+i)}this._segmentationMaskCtx&&this._segmentationMaskCtx.putImageData(this._segmentationMask,0,0)},e.prototype._renderMask=function(){this.resizeSource(),this.runInference(),this.runPostProcessing(),this._maskFrameTimerWorker.postMessage({id:o.SET_TIMEOUT,timeMs:30})},e.prototype.resizeSource=function(){if(this._segmentationMaskCtx){this._segmentationMaskCtx.drawImage(this._inputVideoElement,0,0,this._inputVideoElement.width,this._inputVideoElement.height,0,0,this._options.width,this._options.height);for(var e=this._segmentationMaskCtx.getImageData(0,0,this._options.width,this._options.height),t=this._tflite._getInputMemoryOffset()/4,n=this._options.width*this._options.height,r=0;r<n;r++)this._tflite.HEAPF32[t+3*r]=e.data[4*r]/255,this._tflite.HEAPF32[t+3*r+1]=e.data[4*r+1]/255,this._tflite.HEAPF32[t+3*r+2]=e.data[4*r+2]/255}},e.prototype._onMaskFrameTimer=function(e){e.data.id===o.TIMEOUT_TICK&&this._renderMask()},e.prototype.startEffect=function(e){var t=this;console.log("[startEffect] Effect started",e);try{this._maskFrameTimerWorker=new Worker(o.timerWorkerScript,{name:"BlurEffectWorker"}),this._maskFrameTimerWorker.onmessage=this._onMaskFrameTimer.bind(this);var n=e.getVideoTracks()[0],r=n.getSettings?n.getSettings():n.getConstraints(),a=r.width,s=r.height,i=r.frameRate;return console.log("[startEffect] height :",s),console.log("[startEffect] width :",a),this._outputCanvasElement.width=Number(a),this._outputCanvasElement.height=Number(s),this._outputCanvasCtx=this._outputCanvasElement.getContext("2d"),this._inputVideoElement.width=Number(a),this._inputVideoElement.height=Number(s),this._inputVideoElement.autoplay=!0,this._inputVideoElement.srcObject=e,this._inputVideoElement.onloadeddata=function(){console.log("[_inputVideoElement.onloadeddata] done"),t._maskFrameTimerWorker.postMessage({id:o.SET_TIMEOUT,timeMs:30})},console.log("[startEffect] this._inputVideoElement.width :",this._inputVideoElement.width),console.log("[startEffect] this._inputVideoElement.height :",this._inputVideoElement.height),console.log("[startEffect] this._outputCanvasElement.width :",this._outputCanvasElement.width),console.log("[startEffect] this._outputCanvasElement.height :",this._outputCanvasElement.height),console.log("[startEffect] this._segmentationMaskCanvas.width :",this._segmentationMaskCanvas.width),console.log("[startEffect] this._segmentationMaskCanvas.height :",this._segmentationMaskCanvas.height),this._outputCanvasElement.captureStream(Number(i))}catch(e){console.error("[startEffect] Error:",e)}},e.prototype.stopEffect=function(){this._maskFrameTimerWorker.postMessage({id:o.CLEAR_TIMEOUT}),this._maskFrameTimerWorker.terminate()},e.prototype._createJSScript=function(e){return new Promise((function(t,n){var r=document.createElement("script");r.onload=function(){return t()},r.onerror=n,document.head.append(r),r.src=e}))},e.prototype._loadTfLite=function(){return a(this,void 0,Promise,(function(){var e;return s(this,(function(t){switch(t.label){case 0:return[4,this._createJSScript(this._assetsPath+i.TFLITE_SIMD_LOADER_NAME)];case 1:t.sent(),t.label=2;case 2:return t.trys.push([2,4,,5]),[4,window.createTFLiteSIMDModule()];case 3:return e=t.sent(),this._isSimdEnabled=!0,[3,5];case 4:return t.sent(),console.warn("SIMD not supported. You may experience poor quality of background replacement."),this._isSimdEnabled=!1,[3,5];case 5:return[2,e]}}))}))},e.segmentationDimensions=i.MODEL_WASM_INFERENCE_DIMENSIONS,e}();t.BackgroundEffect=u},9382:function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0}),t.VirtualBackgroundEffect=void 0;var s=n(2636),o=n(2890),i=function(e){function t(t){var n=e.call(this,t)||this;return n.backgroundImage=t.backgroundImage,n.fitType=t.fitType,n}return a(t,e),Object.defineProperty(t.prototype,"backgroundImage",{get:function(){return this._backgroundImage},set:function(e){if(!e||!e.complete||!e.naturalHeight)throw new Error("Invalid image. Make sure that the image is an HTMLImageElement and has been successfully loaded");this._backgroundImage=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"fitType",{get:function(){return this._fitType},set:function(e){Object.keys(o.ImageFit).includes(e)||(console.warn("Valid fitType not found. Using '"+o.ImageFit.Fill+"' as default."),e=o.ImageFit.Fill),this._fitType=e},enumerable:!1,configurable:!0}),t.prototype._applyFilter=function(){var e=this._backgroundImage,t=e.naturalWidth,n=e.naturalHeight,r=this._outputCanvasElement.width,a=this._outputCanvasElement.height;if(this._outputCanvasCtx)if(this._fitType===o.ImageFit.Fill)this._outputCanvasCtx.drawImage(e,0,0,t,n,0,0,r,a);else if(this._fitType===o.ImageFit.None)this._outputCanvasCtx.drawImage(e,0,0,t,n);else if(this._fitType===o.ImageFit.Contain){var s=this._getFitPosition(t,n,r,a,o.ImageFit.Contain),i=s.x,u=s.y,l=s.w,c=s.h;this._outputCanvasCtx.drawImage(e,0,0,t,n,i,u,l,c)}else if(this._fitType===o.ImageFit.Cover){var d=this._getFitPosition(t,n,r,a,o.ImageFit.Cover);i=d.x,u=d.y,l=d.w,c=d.h;this._outputCanvasCtx.drawImage(e,0,0,t,n,i,u,l,c)}},t.prototype._getFitPosition=function(e,t,n,r,a){var s=n/e,i=n,u=s*t;return(a===o.ImageFit.Contain&&u>r||a===o.ImageFit.Cover&&r>u)&&(i*=s=r/u,u=r),{x:(n-i)/2,y:(r-u)/2,w:i,h:u}},t}(s.BackgroundEffect);t.VirtualBackgroundEffect=i},2890:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ImageFit=void 0,function(e){e.Contain="Contain",e.Cover="Cover",e.Fill="Fill",e.None="None"}(t.ImageFit||(t.ImageFit={}))},225:(e,t)=>{"use strict";function n(){return!!window.OffscreenCanvas&&!/Mobi/i.test(window.navigator.userAgent)&&!!window.chrome}Object.defineProperty(t,"__esModule",{value:!0}),t.isSupported=t.isBrowserSupported=void 0,t.isBrowserSupported=n,t.isSupported=n()},5410:()=>{},8628:()=>{},5042:()=>{}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var s=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.loaded=!0,s.exports}n.amdD=function(){throw new Error("define cannot be used indirect")},n.amdO={},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e);var r={};return(()=>{"use strict";var e=r;Object.defineProperty(e,"__esModule",{value:!0}),e.VirtualBackgroundEffectOptions=e.VirtualBackgroundEffect=e.BackgroundBlurEffectOptions=e.BackgroundBlurEffect=e.isSupported=e.OTVideoEffects=void 0;var t=n(6217);Object.defineProperty(e,"BackgroundBlurEffect",{enumerable:!0,get:function(){return t.BackgroundBlurEffect}}),Object.defineProperty(e,"BackgroundBlurEffectOptions",{enumerable:!0,get:function(){return t.BackgroundBlurEffectOptions}});var a=n(9382);Object.defineProperty(e,"VirtualBackgroundEffect",{enumerable:!0,get:function(){return a.VirtualBackgroundEffect}}),Object.defineProperty(e,"VirtualBackgroundEffectOptions",{enumerable:!0,get:function(){return a.VirtualBackgroundEffectOptions}});var s=n(225);Object.defineProperty(e,"isSupported",{enumerable:!0,get:function(){return s.isSupported}}),window.OT=window.OT||{},window.OT.VideoEffects={isSupported:s.isSupported,BackgroundBlurEffect:t.BackgroundBlurEffect,VirtualBackgroundEffect:a.VirtualBackgroundEffect};var o={BackgroundBlurEffect:t.BackgroundBlurEffect,VirtualBackgroundEffect:a.VirtualBackgroundEffect};e.OTVideoEffects=o})(),r})()}));