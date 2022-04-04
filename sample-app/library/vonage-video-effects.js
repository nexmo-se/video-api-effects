!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VideoEffects=t():e.VideoEffects=t()}(self,(function(){return(()=>{var e={8166:(e,t,n)=>{"use strict";n.d(t,{H:()=>a});var r=n(2659);
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
 */function a(e,t){Array.isArray(e)||(e=[e]),e.forEach((e=>{null!=e&&r.D5U.assert("complex64"!==e.dtype,(()=>`${t} does not support complex64 tensors in the CPU backend.`))}))}},1955:(e,t,n)=>{"use strict";n.r(t),n.d(t,{MathBackendCPU:()=>o,shared:()=>i,version_cpu:()=>u});var r=n(2659),a=n(8166);
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
const u="3.14.0";
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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
const g=(0,m.b)(((e,t)=>e<0?t*e:e));function x(e){const{inputs:t,backend:n}=e,{x:r,alpha:s}=t;(0,a.H)([r,s],"prelu");const o=n.data.get(r.dataId).values,i=n.data.get(s.dataId).values,[u,l]=g(r.shape,s.shape,o,i,"float32");return n.makeTensorInfo(l,"float32",u)}const b={kernelName:r.o0g,backendName:"cpu",kernelFunc:x},v=(0,l.A)(r.qkr,(e=>Math.max(0,e))),y={kernelName:r.qkr,backendName:"cpu",kernelFunc:v},k=(0,l.A)(r.SbG,(e=>Math.min(Math.max(0,e),6))),I={kernelName:r.SbG,backendName:"cpu",kernelFunc:k};var w=n(108);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function S(e,t,n,r,a){if("linear"===n)return(0,p.y)({inputs:{x:t},backend:e});if("relu"===n)return v({inputs:{x:t},backend:e});if("elu"===n)return c({inputs:{x:t},backend:e});if("relu6"===n)return k({inputs:{x:t},backend:e});if("prelu"===n)return x({inputs:{x:t,alpha:r},backend:e});if("leakyrelu"===n)return h({inputs:{x:t},backend:e,attrs:{alpha:a}});if("sigmoid"===n)return(0,w.XD)({inputs:{x:t},backend:e});throw new Error(`Activation ${n} has not been implemented for the CPU backend.`)}var C=n(2779);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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
function E(e){const{inputs:t,backend:n,attrs:s}=e,{a:o,b:i}=t,{transposeA:u,transposeB:l}=s;(0,a.H)([o,i],"matMul");const c=o.shape.length,d=i.shape.length,p=u?o.shape[c-2]:o.shape[c-1],h=l?i.shape[d-1]:i.shape[d-2],f=u?o.shape[c-1]:o.shape[c-2],m=l?i.shape[d-2]:i.shape[d-1],g=o.shape.slice(0,-2),x=i.shape.slice(0,-2),b=r.D5U.sizeFromShape(g),v=r.D5U.sizeFromShape(x),y=r.Jyw.assertAndGetBroadcastShape(o.shape.slice(0,-2),i.shape.slice(0,-2)).concat([f,m]);r.D5U.assert(p===h,(()=>`Error in matMul: inner shapes (${p}) and (${h}) of Tensors with shapes ${o.shape} and ${i.shape} and transposeA=${u} and transposeB=${l} must match.`));const k=l?[v,m,h]:[v,h,m],I=$({inputs:{x:o},backend:n,attrs:{shape:u?[b,p,f]:[b,f,p]}}),w=$({inputs:{x:i},backend:n,attrs:{shape:k}}),S=u?I.shape[1]:I.shape[2],C=u?I.shape[2]:I.shape[1],T=l?w.shape[1]:w.shape[2],E=Math.max(b,v),N=n.data.get(I.dataId).values,R=n.data.get(w.dataId).values,D=r.D5U.computeStrides(I.shape),A=r.D5U.computeStrides(w.shape),[F,_,O]=u?[D[0],1,D[1]]:[D[0],D[1],1],[M,U,P]=l?[1,A[1],A[0]]:[A[1],1,A[0]],W=C*T,B=(0,r.f3b)([E,C,T],I.dtype),L=B.values,V=n.blockSize;for(let e=0;e<E;e++)for(let t=0;t<C;t+=V)for(let n=0;n<T;n+=V)for(let r=0;r<S;r+=V){const a=Math.min(t+V,C),s=Math.min(n+V,T),o=Math.min(r+V,S);for(let i=t;i<a;i++)for(let t=n;t<s;t++){let n=0;for(let a=r;a<o;a++){const r=Math.min(e,b-1)*F,s=Math.min(e,v-1)*P;n+=N[r+i*_+a*O]*R[a*M+t*U+s]}L[e*W+(i*T+t)]+=n}}return n.disposeIntermediateTensorInfo(I),n.disposeIntermediateTensorInfo(w),n.makeTensorInfo(y,B.dtype,B.values)}const N={kernelName:r.XLW,backendName:"cpu",kernelFunc:E};const R={kernelName:r.usg,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:r}=e,{a,b:s,bias:o,preluActivationWeights:i}=t,{transposeA:u,transposeB:l,activation:c,leakyreluAlpha:d}=r;let p,h,f;const m=[];p=E({inputs:{a,b:s},attrs:{transposeA:u,transposeB:l},backend:n}),o&&(h=(0,C.IH)({inputs:{a:p,b:o},backend:n}),m.push(p),p=h),c&&(f=S(n,p,c,i,d),m.push(p),p=f);for(const e of m)n.disposeIntermediateTensorInfo(e);return p}};var D=n(224);
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
function(e){const{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{axis:i}=s;(0,a.H)(o,"argMin");let u=r.D5U.parseAxisParam(i,o.shape);const l=r.Wap.getAxesPermutation(u,o.shape.length);let c=o;const d=[];null!=l&&(c=(0,U.p)({inputs:{x:o},backend:n,attrs:{perm:l}}),d.push(c),u=r.Wap.getInnerMostAxes(u.length,c.shape.length)),u=[u[0]],r.Wap.assertAxesAreInnerMostDims("argMin",u,c.shape.length);const[p,h]=r.Wap.computeOutAndReduceShapes(c.shape,u),f=r.D5U.sizeFromShape(p),m=r.D5U.makeZerosTypedArray(f,"int32"),g=r.D5U.sizeFromShape(h),x=n.data.get(c.dataId).values;for(let e=0;e<m.length;++e){const t=e*g;let n=x[t],r=0;for(let e=0;e<g;++e){const a=x[t+e];a<n&&(n=a,r=e)}m[e]=r}return d.forEach((e=>n.disposeIntermediateTensorInfo(e))),n.makeTensorInfo(p,"int32",m)}},V=(0,l.A)(r.M2y,(e=>Math.asin(e))),z={kernelName:r.M2y,backendName:"cpu",kernelFunc:V},G=(0,l.A)(r.qw7,(e=>Math.asinh(e))),H={kernelName:r.qw7,backendName:"cpu",kernelFunc:G},j=(0,l.A)(r.jMg,(e=>Math.atan(e))),X={kernelName:r.jMg,backendName:"cpu",kernelFunc:j};var q=n(6205);
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
function ee(e,t,n,a,s,o){const i=s.strideHeight,u=s.strideWidth,l=s.dilationHeight,c=s.dilationWidth,d=s.effectiveFilterHeight,p=s.effectiveFilterWidth,h=s.padInfo.top,f=s.padInfo.left,m="max"===o?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,g=(0,r.f3b)(s.outShape,n),x=g.values,b=s.outShape[1]*s.outShape[2]*s.outShape[3],v=s.outShape[2]*s.outShape[3],y=s.outShape[3];for(let t=0;t<s.batchSize;++t){const n=t*b,r=t*a[0];for(let t=0;t<s.inChannels;++t)for(let g=0;g<s.outHeight;++g){const b=g*i-h,k=Math.max(0,b),I=Math.min(s.inHeight,d+b),w=n+g*v;for(let n=0;n<s.outWidth;++n){const i=n*u-f,d=Math.max(0,i),h=Math.min(s.inWidth,p+i);let g=m,b=0,v=0;for(let n=k;n<I;n+=l){const s=r+n*a[1];for(let n=d;n<h;n+=c){const r=e[s+n*a[2]+t];"max"===o&&r>g?g=r:"avg"===o&&(b+=r,v++)}if(isNaN(g))break}x[w+n*y+t]="avg"===o?b/v:g}}}return g}function te(e,t,n,a,s=!1,o=!1){const i=(0,r.f3b)(a.outShape,"int32"),u=a.strideHeight,l=a.strideWidth,c=a.dilationHeight,d=a.dilationWidth,p=a.effectiveFilterHeight,h=a.effectiveFilterWidth,f=a.padInfo.top,m=a.padInfo.left,g=(0,r.f3b)(t,n,e);for(let e=0;e<a.batchSize;++e)for(let t=0;t<a.inChannels;++t)for(let n=0;n<a.outHeight;++n){const r=n*u-f;let x=r;for(;x<0;)x+=c;const b=Math.min(a.inHeight,p+r);for(let u=0;u<a.outWidth;++u){const p=u*l-m;let f=p;for(;f<0;)f+=d;const v=Math.min(a.inWidth,h+p);let y=Number.NEGATIVE_INFINITY,k=-1;for(let n=x;n<b;n+=c){const i=n-r;for(let r=f;r<v;r+=d){const u=r-p,l=g.get(e,n,r,t);l>y&&(y=l,k=s?o?((e*a.inHeight+n)*a.inWidth+r)*a.inChannels+t:(n*a.inWidth+r)*a.inChannels+t:i*h+u)}}i.set(k,e,n,u,t)}}return i}function ne(e,t,n,a,s,o){const i=s.strideDepth,u=s.strideHeight,l=s.strideWidth,c=s.dilationDepth,d=s.dilationHeight,p=s.dilationWidth,h=s.effectiveFilterDepth,f=s.effectiveFilterHeight,m=s.effectiveFilterWidth,g=s.padInfo.front,x=s.padInfo.top,b=s.padInfo.left,v="max"===o?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,y=(0,r.f3b)(s.outShape,n),k=y.values,I=s.outShape[1]*s.outShape[2]*s.outShape[3]*s.outShape[4],w=s.outShape[2]*s.outShape[3]*s.outShape[4],S=s.outShape[3]*s.outShape[4],C=s.outShape[4];for(let t=0;t<s.batchSize;++t){const n=t*I,r=t*a[0];for(let t=0;t<s.inChannels;++t)for(let y=0;y<s.outDepth;++y){const I=y*i-g;let $=I;for(;$<0;)$+=c;const T=Math.min(s.inDepth,h+I),E=n+y*w;for(let n=0;n<s.outHeight;++n){const i=n*u-x;let h=i;for(;h<0;)h+=d;const g=Math.min(s.inHeight,f+i),y=E+n*S;for(let n=0;n<s.outWidth;++n){const i=n*l-b;let u=i;for(;u<0;)u+=p;const f=Math.min(s.inWidth,m+i),x=y+n*C;let I=v,w=0,S=0;for(let n=$;n<T;n+=c){const s=r+n*a[1];for(let n=h;n<g;n+=d){const r=s+n*a[2];for(let n=u;n<f;n+=p){const s=e[r+n*a[3]+t];if("max"===o&&s>I?I=s:"avg"===o&&(w+=s,S++),isNaN(I))break}if(isNaN(I))break}if(isNaN(I))break}k[x+t]="avg"===o?w/S:I}}}}return y}const re={kernelName:r.JhU,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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
function(e){const{inputs:t,backend:n,attrs:s}=e,{dy:o,input:i}=t,{filterSize:u,strides:l,pad:c,dimRoundingMode:d}=s;(0,a.H)([o,i],"avgPool3DGrad");const p=r.Wap.computePool3DInfo(i.shape,u,l,1,c,d),h=p.strideDepth,f=p.strideHeight,m=p.strideWidth,g=p.filterDepth,x=p.filterHeight,b=p.filterWidth,v=p.dilationDepth,y=p.dilationHeight,k=p.dilationWidth,I=p.effectiveFilterDepth,w=p.effectiveFilterHeight,S=p.effectiveFilterWidth,C=I-1-p.padInfo.front,$=S-1-p.padInfo.left,T=w-1-p.padInfo.top,E=(0,r.f3b)(i.shape,"float32"),N=1/(g*x*b),R=n.bufferSync(o);for(let e=0;e<p.batchSize;++e)for(let t=0;t<p.inChannels;++t)for(let n=0;n<p.inDepth;++n)for(let r=0;r<p.inHeight;++r)for(let a=0;a<p.inWidth;++a){const s=n-C,o=r-T,i=a-$;let u=0;for(let n=0;n<I;n+=v){const r=(s+n)/h;if(!(r<0||r>=p.outDepth||Math.floor(r)!==r))for(let n=0;n<w;n+=y){const a=(o+n)/f;if(!(a<0||a>=p.outHeight||Math.floor(a)!==a))for(let n=0;n<S;n+=k){const s=(i+n)/m;if(s<0||s>=p.outWidth||Math.floor(s)!==s)continue;u+=R.get(e,r,a,s,t)}}}E.set(u*N,e,n,r,a,t)}return n.makeTensorInfo(E.shape,E.dtype,E.values)}};const oe={kernelName:r.ROF,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{dy:o,input:i}=t,u=i;(0,a.H)([o,i],"avgPoolGrad");const{filterSize:l,strides:c,pad:d}=s,p=r.Wap.computePool2DInfo(u.shape,l,c,1,d),h=p.strideHeight,f=p.strideWidth,m=p.filterHeight,g=p.filterWidth,x=p.dilationHeight,b=p.dilationWidth,v=p.effectiveFilterHeight,y=p.effectiveFilterWidth,k=y-1-p.padInfo.left,I=v-1-p.padInfo.top,w=(0,r.f3b)(u.shape,"float32"),S=1/(m*g),C=n.data.get(o.dataId).values,$=(0,r.f3b)(o.shape,"float32",C);for(let e=0;e<p.batchSize;++e)for(let t=0;t<p.inChannels;++t)for(let n=0;n<p.inHeight;++n)for(let r=0;r<p.inWidth;++r){const a=n-I,s=r-k;let o=0;for(let n=0;n<v;n+=x){const r=(a+n)/h;if(!(r<0||r>=p.outHeight||Math.floor(r)!==r))for(let n=0;n<y;n+=b){const a=(s+n)/f;if(a<0||a>=p.outWidth||Math.floor(a)!==a)continue;o+=$.get(e,r,a,t)}}w.set(o*S,e,n,r,t)}return n.makeTensorInfo(w.shape,w.dtype,w.values)}};const ie={kernelName:r.sHE,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{x:o,scale:i,offset:u,mean:l,variance:c}=t;r.D5U.assert(l.shape.length===c.shape.length,(()=>"Batch normalization gradient requires mean and variance to have equal ranks.")),r.D5U.assert(null==u||l.shape.length===u.shape.length,(()=>"Batch normalization gradient requires mean and offset to have equal ranks.")),r.D5U.assert(null==i||l.shape.length===i.shape.length,(()=>"Batch normalization gradient requires mean and scale to have equal ranks.")),(0,a.H)([o,l,c,i,u],"batchNorm");let{varianceEpsilon:d}=s;null==d&&(d=.001);const p=n.data.get(o.dataId).values,h=n.data.get(l.dataId).values,f=n.data.get(c.dataId).values,m=i?n.data.get(i.dataId).values:new Float32Array([1]),g=u?n.data.get(u.dataId).values:new Float32Array([0]),x=new Float32Array(p.length),b=g.length,v=m.length,y=f.length,k=h.length;let I=0,w=0,S=0,C=0;for(let e=0;e<p.length;++e)x[e]=g[I++]+(p[e]-h[w++])*m[S++]/Math.sqrt(f[C++]+d),I>=b&&(I=0),w>=k&&(w=0),S>=v&&(S=0),C>=y&&(C=0);return n.makeTensorInfo(o.shape,o.dtype,x)}};var ue=n(2578);const le={kernelName:r.zws,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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
function ye(e){const{inputs:t,backend:n}=e,{input:r}=t,a=n.data.get(r.dataId).complexTensorInfos.imag,s=n.data.get(a.dataId).values;return n.makeTensorInfo(a.shape,a.dtype,s)}const ke={kernelName:r.J_u,backendName:"cpu",kernelFunc:ye};var Ie=n(2186);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function we(e){const{inputs:t,backend:n,attrs:a}=e,{axis:s}=a,o=r.D5U.parseAxisParam(s,t[0].shape)[0];let i=r.Wap.computeOutShape(t.map((e=>e.shape)),o);if(0===r.D5U.sizeFromShape(i))return n.makeTensorInfo(i,t[0].dtype,[]);const u=t.filter((e=>r.D5U.sizeFromShape(e.shape)>0));if(1===u.length)return(0,p.y)({inputs:{x:u[0]},backend:n});const l=u.map((e=>e.shape));if(r.Wap.assertParamsConsistent(l,o),"complex64"===u[0].dtype){const e=u.map((e=>(0,Ie.k)({inputs:{input:e},backend:n}))),t=u.map((e=>ye({inputs:{input:e},backend:n}))),r=we({inputs:e,backend:n,attrs:{axis:o}}),a=we({inputs:t,backend:n,attrs:{axis:o}}),s=(0,xe.P)({inputs:{real:r,imag:a},backend:n});return e.forEach((e=>n.disposeIntermediateTensorInfo(e))),t.forEach((e=>n.disposeIntermediateTensorInfo(e))),n.disposeIntermediateTensorInfo(r),n.disposeIntermediateTensorInfo(a),s}const c=u.map((e=>{const t=r.D5U.sizeFromShape(e.shape.slice(o));return $({inputs:{x:e},backend:n,attrs:{shape:[-1,t]}})})),d=c.map((e=>({vals:n.data.get(e.dataId).values,shape:e.shape})));i=r.Wap.computeOutShape(c.map((e=>e.shape)),1);const h=1===c[0].shape[0],f=(0,ve.j)(d,i,t[0].dtype,h),m=r.Wap.computeOutShape(u.map((e=>e.shape)),o),g=n.makeTensorInfo(m,t[0].dtype,f);return c.forEach((e=>n.disposeIntermediateTensorInfo(e))),g}const Se={kernelName:r.Eh3,backendName:"cpu",kernelFunc:we};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ce(e){const{inputs:t,backend:n,attrs:s}=e,{x:o,filter:i}=t,{strides:u,pad:l,dataFormat:c,dilations:d,dimRoundingMode:p}=s;(0,a.H)([o,i],"conv2d");const h=r.Wap.convertConv2DDataFormat(c),f=r.Wap.computeConv2DInfo(o.shape,i.shape,u,d,l,p,!1,h),m=f.filterHeight,g=f.filterWidth,x=f.dilationHeight,b=f.dilationWidth,v=f.padInfo.left,y=f.padInfo.top,k="channelsLast"===f.dataFormat,I=new r.YDk(f.outShape,o.dtype),w=r.D5U.computeStrides(o.shape),S=r.D5U.computeStrides(i.shape),C=w[0],$=k?w[1]:w[2],T=k?w[2]:1,E=k?1:w[1],N=I.strides[0],R=k?I.strides[1]:I.strides[2],D=k?I.strides[2]:1,A=k?1:I.strides[1],F=n.data.get(o.dataId).values,_=n.data.get(i.dataId).values,O=I.values;for(let e=0;e<f.batchSize;++e){const t=e*C,n=e*N;for(let e=0;e<f.outHeight;++e){const r=n+e*R,a=e*f.strideHeight-y;for(let e=0;e<m;++e){const n=a+e*x;if(n<0||n>=f.inHeight)continue;const s=e*S[0],o=t+n*$;for(let e=0;e<f.outWidth;++e){const t=r+e*D,n=e*f.strideWidth-v;for(let e=0;e<g;++e){const r=n+e*b;if(r<0||r>=f.inWidth)continue;const a=o+r*T;let i=s+e*S[1];for(let e=0;e<f.inChannels;++e){const n=F[a+e*E];for(let e=0;e<f.outChannels;++e)O[t+e*A]+=n*_[i+e];i+=f.outChannels}}}}}}return n.makeTensorInfo(I.shape,I.dtype,O)}const $e={kernelName:r.mhS,backendName:"cpu",kernelFunc:Ce};const Te={kernelName:r.wUP,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{x:o,dy:i}=t,{strides:u,pad:l,dataFormat:c,dimRoundingMode:d,filterShape:p}=s;(0,a.H)([o,i],"conv2dBackpropFilter");const h=r.Wap.convertConv2DDataFormat(c),f=r.Wap.computeConv2DInfo(o.shape,p,u,1,l,d,!1,h),{strideHeight:m,strideWidth:g,filterHeight:x,filterWidth:b}=f,v="channelsLast"===f.dataFormat,y=new r.YDk(f.filterShape,"float32"),k=f.padInfo.left,I=f.padInfo.top,w=n.data.get(o.dataId).values,S=n.data.get(i.dataId).values,C=new r.YDk(o.shape,o.dtype,w),$=new r.YDk(i.shape,i.dtype,S);for(let e=0;e<x;++e){const t=Math.max(0,Math.ceil((I-e)/m)),n=Math.min(f.outHeight,(f.inHeight+I-e)/m);for(let r=0;r<b;++r){const a=Math.max(0,Math.ceil((k-r)/g)),s=Math.min(f.outWidth,(f.inWidth+k-r)/g);for(let o=0;o<f.inChannels;++o)for(let i=0;i<f.outChannels;++i){let u=0;for(let l=0;l<f.batchSize;++l)for(let c=t;c<n;++c){const t=e+c*m-I;for(let e=a;e<s;++e){const n=r+e*g-k;u+=v?C.get(l,t,n,o)*$.get(l,c,e,i):C.get(l,o,t,n)*$.get(l,i,c,e)}}y.set(u,e,r,o,i)}}}return n.makeTensorInfo(y.shape,y.dtype,y.values)}};const Ee={kernelName:r.wm,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{dy:o,filter:i}=t,{inputShape:u,strides:l,pad:c,dataFormat:d,dimRoundingMode:p}=s;(0,a.H)([o,i],"conv2dBackpropInput");const h=r.D5U.computeStrides(i.shape),f=r.D5U.computeStrides(o.shape);let m=r.Wap.convertConv2DDataFormat(d);const g=r.Wap.computeConv2DInfo(u,i.shape,l,1,c,p,!1,m),x=new r.YDk(g.inShape,"float32"),b=x.values,v=n.data.get(o.dataId).values,y=n.data.get(i.dataId).values,[k,I,w]=h,{batchSize:S,filterHeight:C,filterWidth:$,inChannels:T,inHeight:E,inWidth:N,outChannels:R,outHeight:D,outWidth:A,strideHeight:F,strideWidth:_}=g;m=g.dataFormat;const O=C-1-g.padInfo.top,M=$-1-g.padInfo.left,U="channelsLast"===m,P=x.strides[0],W=U?x.strides[1]:x.strides[2],B=U?x.strides[2]:1,L=U?1:x.strides[1],V=f[0],z=U?f[1]:f[2],G=U?f[2]:1,H=U?1:f[1];for(let e=0;e<S;++e)for(let t=0;t<T;++t)for(let n=0;n<E;++n){const r=n-O,a=Math.max(0,Math.ceil(r/F)),s=Math.min(D,(C+r)/F);for(let o=0;o<N;++o){const i=o-M,u=Math.max(0,Math.ceil(i/_)),l=Math.min(A,($+i)/_);let c=0;for(let n=a;n<s;++n){const a=n*F-r;for(let r=u;r<l;++r){const s=V*e+z*n+G*r,o=k*(C-1-a)+I*($-1-(r*_-i))+w*t;for(let e=0;e<R;++e){c+=v[s+H*e]*y[o+e]}}}b[P*e+W*n+B*o+L*t]=c}}return n.makeTensorInfo(x.shape,x.dtype,x.values)}};const Ne={kernelName:r.x12,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{x:o,filter:i}=t,{strides:u,pad:l,dilations:c}=s;(0,a.H)([o,i],"conv3d");const d=r.Wap.computeConv3DInfo(o.shape,i.shape,u,c,l),{filterDepth:p,filterHeight:h,filterWidth:f,dilationDepth:m,dilationHeight:g,dilationWidth:x,padInfo:b}=d,v=b.front,y=b.left,k=b.top,I=new r.YDk(d.outShape,o.dtype),w=n.data.get(o.dataId).values,S=n.data.get(i.dataId).values,C=I.values,$=r.D5U.computeStrides(o.shape),T=r.D5U.computeStrides(i.shape);for(let e=0;e<d.batchSize;++e){const t=e*$[0],n=e*I.strides[0];for(let e=0;e<d.outDepth;++e){const r=n+e*I.strides[1],a=e*d.strideDepth-v;for(let e=0;e<p;++e){const n=a+e*m;if(n<0||n>=d.inDepth)continue;const s=e*T[0],o=t+n*$[1];for(let e=0;e<d.outHeight;++e){const t=r+e*I.strides[2],n=e*d.strideHeight-k;for(let e=0;e<h;++e){const r=n+e*g;if(r<0||r>=d.inHeight)continue;const a=s+e*T[1],i=o+r*$[2];for(let e=0;e<d.outWidth;++e){const n=t+e*d.outChannels,r=e*d.strideWidth-y;for(let e=0;e<f;++e){const t=r+e*x;if(t<0||t>=d.inWidth)continue;const s=a+e*T[2],o=i+t*d.inChannels;let u=s;for(let e=0;e<d.inChannels;++e){const t=w[o+e];for(let e=0;e<d.outChannels;++e)C[n+e]+=t*S[u+e];u+=d.outChannels}}}}}}}}return n.makeTensorInfo(I.shape,I.dtype,I.values)}};const Re={kernelName:r.o2y,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{x:o,dy:i}=t,{strides:u,pad:l,filterShape:c}=s;(0,a.H)([o,i],"conv3dBackpropFilterV2");const d=r.D5U.computeStrides(o.shape),p=r.D5U.computeStrides(i.shape),h=r.Wap.computeConv3DInfo(o.shape,c,u,1,l),f=h.strideDepth,m=h.strideHeight,g=h.strideWidth,x=h.filterDepth,b=h.filterHeight,v=h.filterWidth,y=new r.YDk(h.filterShape,"float32"),k=y.values,[I,w,S,C]=y.strides,$=n.data.get(i.dataId).values,[T,E,N,R]=p,D=n.data.get(o.dataId).values,[A,F,_,O]=d,M=h.padInfo.front,U=h.padInfo.left,P=h.padInfo.top;for(let e=0;e<x;++e){const t=Math.max(0,Math.ceil((M-e)/f)),n=Math.min(h.outDepth,(h.inDepth+M-e)/f),r=e*I;for(let a=0;a<b;++a){const s=Math.max(0,Math.ceil((P-a)/m)),o=Math.min(h.outHeight,(h.inHeight+P-a)/m),i=a*w+r;for(let r=0;r<v;++r){const u=Math.max(0,Math.ceil((U-r)/g)),l=Math.min(h.outWidth,(h.inWidth+U-r)/g),c=r*S+i;for(let i=0;i<h.inChannels;++i){const d=i*C+c;for(let c=0;c<h.outChannels;++c){let p=0;for(let d=0;d<h.batchSize;++d){const h=d*A,x=d*T;for(let d=t;d<n;++d){const t=(e+d*f-M)*F+h,n=d*E+x;for(let e=s;e<o;++e){const s=(a+e*m-P)*_+t,o=e*N+n;for(let e=u;e<l;++e){const t=e*R+o;p+=D[(r+e*g-U)*O+s+i]*$[t+c]}}}}k[d+c]=p}}}}}return n.makeTensorInfo(y.shape,y.dtype,y.values)}};const De={kernelName:r.ik2,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{dy:o,filter:i}=t,{pad:u,strides:l,inputShape:c}=s;(0,a.H)([o],"conv3dBackpropInputV2");const d=r.D5U.computeStrides(o.shape),p=r.D5U.computeStrides(i.shape),h=r.Wap.computeConv3DInfo(c,i.shape,l,1,u),f=new r.YDk(h.inShape,"float32"),m=f.values,[g,x,b,v]=f.strides,y=n.data.get(o.dataId).values,[k,I,w,S]=d,C=n.data.get(i.dataId).values,[$,T,E,N]=p,{batchSize:R,filterDepth:D,filterHeight:A,filterWidth:F,inChannels:_,inDepth:O,inHeight:M,inWidth:U,outChannels:P,outDepth:W,outHeight:B,outWidth:L,strideDepth:V,strideHeight:z,strideWidth:G}=h,H=D-1-h.padInfo.front,j=A-1-h.padInfo.top,X=F-1-h.padInfo.left;for(let e=0;e<R;++e)for(let t=0;t<_;++t)for(let n=0;n<O;++n){const r=n-H,a=Math.max(0,Math.ceil(r/V)),s=Math.min(W,(D+r)/V);for(let o=0;o<M;++o){const i=o-j,u=Math.max(0,Math.ceil(i/z)),l=Math.min(B,(A+i)/z);for(let c=0;c<U;++c){const d=c-X,p=Math.max(0,Math.ceil(d/G)),h=Math.min(L,(F+d)/G);let f=0;for(let n=a;n<s;++n){const a=n*V-r;for(let r=u;r<l;++r){const s=r*z-i;for(let o=p;o<h;++o){const i=k*e+I*n+w*r+S*o,u=$*(D-1-a)+T*(A-1-s)+E*(F-1-(o*G-d))+N*t;for(let e=0;e<P;++e){f+=y[i+e]*C[u+e]}}}}m[g*e+x*n+b*o+v*c+t]=f}}}return n.makeTensorInfo(f.shape,f.dtype,f.values)}},Ae=(0,l.A)(r.mc4,(e=>Math.cos(e))),Fe={kernelName:r.mc4,backendName:"cpu",kernelFunc:Ae},_e=(0,l.A)(r.TR1,(e=>Math.cosh(e))),Oe={kernelName:r.TR1,backendName:"cpu",kernelFunc:_e};const Me={kernelName:r.VcC,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:a}=e,{image:s,boxes:o,boxInd:i}=t,{cropSize:u,method:l,extrapolationValue:c}=a,[d,p,h,f]=s.shape,m=o.shape[0],[g,x]=u,b=(0,r.f3b)([m,g,x,f],"float32"),v=n.data.get(o.dataId).values,y=n.data.get(i.dataId).values,k=n.data.get(s.dataId).values,I=r.D5U.computeStrides(s.shape),w=r.D5U.computeStrides(b.shape);for(let e=0;e<m;e++){const t=4*e,n=v[t],r=v[t+1],a=v[t+2],s=v[t+3],o=y[e];if(o>=d)continue;const i=g>1?(a-n)*(p-1)/(g-1):0,u=x>1?(s-r)*(h-1)/(x-1):0;for(let t=0;t<g;t++){const d=g>1?n*(p-1)+t*i:.5*(n+a)*(p-1);if(d<0||d>p-1)for(let n=0;n<x;n++)for(let r=0;r<f;r++){const a=r+n*w[2]+t*w[1]+e*w[0];b.values[a]=c}else if("bilinear"===l){const n=Math.floor(d),a=Math.ceil(d),i=d-n;for(let l=0;l<x;l++){const d=x>1?r*(h-1)+l*u:.5*(r+s)*(h-1);if(d<0||d>h-1){for(let n=0;n<f;n++){const r=n+l*w[2]+t*w[1]+e*w[0];b.values[r]=c}continue}const p=Math.floor(d),m=Math.ceil(d),g=d-p;for(let r=0;r<f;r++){let s=r+p*I[2]+n*I[1]+o*I[0];const u=k[s];s=r+m*I[2]+n*I[1]+o*I[0];const c=k[s];s=r+p*I[2]+a*I[1]+o*I[0];const d=k[s];s=r+m*I[2]+a*I[1]+o*I[0];const h=u+(c-u)*g,f=d+(k[s]-d)*g;s=r+l*w[2]+t*w[1]+e*w[0],b.values[s]=h+(f-h)*i}}}else for(let n=0;n<x;++n){const a=x>1?r*(h-1)+n*u:.5*(r+s)*(h-1);if(a<0||a>h-1){for(let r=0;r<f;r++){const a=r+n*w[2]+t*w[1]+e*w[0];b.values[a]=c}continue}const i=Math.round(a),l=Math.round(d);for(let r=0;r<f;r++){const a=r+i*I[2]+l*I[1]+o*I[0],s=r+n*w[2]+t*w[1]+e*w[0];b.values[s]=k[a]}}}}return n.makeTensorInfo(b.shape,b.dtype,b.values)}};const Ue={kernelName:r.iHb,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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
function(e){const{inputs:t,backend:n,attrs:a}=e,{x:s}=t,{blockSize:o,dataFormat:i}=a;r.D5U.assert("NHWC"===i,(()=>`Only NHWC dataFormat supported on CPU for depthToSpace. Got ${i}`));const u=s.shape[0],l=s.shape[1],c=s.shape[2],d=s.shape[3],p=l*o,h=c*o,f=d/(o*o),m=n.data.get(s.dataId).values,g=new Float32Array(u*p*h*f);let x=0;for(let e=0;e<u;++e)for(let t=0;t<p;++t){const n=Math.floor(t/o),r=t%o;for(let t=0;t<h;++t){const a=Math.floor(t/o),s=(r*o+t%o)*f;for(let t=0;t<f;++t){const r=t+s+d*(a+c*(n+l*e));g[x++]=m[r]}}}return n.makeTensorInfo([u,p,h,f],s.dtype,g)}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Be(e){const{inputs:t,backend:n,attrs:s}=e,{x:o,filter:i}=t,{strides:u,pad:l,dilations:c,dimRoundingMode:d}=s;(0,a.H)([o,i],"depthwiseConv2DNative");const p=r.D5U.computeStrides(o.shape),h=r.D5U.computeStrides(i.shape);let f=c;null==f&&(f=[1,1]),r.D5U.assert(r.Wap.eitherStridesOrDilationsAreOne(u,f),(()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${u} and dilations '${f}'`));const m=r.Wap.computeConv2DInfo(o.shape,i.shape,u,f,l,d,!0),{filterHeight:g,filterWidth:x,dilationHeight:b,dilationWidth:v,padInfo:y}=m,k=y.left,I=y.top,w=m.outChannels/m.inChannels,S=new r.YDk(m.outShape,o.dtype),C=n.data.get(o.dataId).values,$=n.data.get(i.dataId).values,T=S.values;for(let e=0;e<m.batchSize;++e){const t=e*p[0],n=e*S.strides[0];for(let e=0;e<m.outHeight;++e){const r=n+e*S.strides[1],a=e*m.strideHeight-I;for(let e=0;e<g;++e){const n=a+e*b;if(n<0||n>=m.inHeight)continue;const s=e*h[0],o=t+n*p[1];for(let e=0;e<m.outWidth;++e){const t=r+e*S.strides[2],n=e*m.strideWidth-k;for(let e=0;e<x;++e){const r=n+e*v;if(r<0||r>=m.inWidth)continue;const a=s+e*h[1],i=o+r*m.inChannels;let u=t,l=a;for(let e=0;e<m.inChannels;++e){const t=C[i+e];for(let e=0;e<w;++e)T[u+e]+=t*$[l+e];u+=w,l+=w}}}}}}return n.makeTensorInfo(S.shape,S.dtype,S.values)}const Le={kernelName:r.cie,backendName:"cpu",kernelFunc:Be};const Ve={kernelName:r.sL$,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{x:o,dy:i}=t,{strides:u,dilations:l,pad:c,dimRoundingMode:d,filterShape:p}=s;(0,a.H)([o,i],"depthwiseConv2dNativeBackpropFilter");const h=r.Wap.computeConv2DInfo(o.shape,p,u,l,c,d,!0),{strideHeight:f,strideWidth:m,filterHeight:g,filterWidth:x}=h,b=new r.YDk(h.filterShape,"float32"),v=h.padInfo.left,y=h.padInfo.top,k=h.outChannels/h.inChannels,I=n.data.get(o.dataId).values,w=new r.YDk(o.shape,o.dtype,I),S=n.data.get(i.dataId).values,C=new r.YDk(i.shape,i.dtype,S);for(let e=0;e<g;++e){const t=Math.max(0,Math.ceil((y-e)/f)),n=Math.min(h.outHeight,(h.inHeight+y-e)/f);for(let r=0;r<x;++r){const a=Math.max(0,Math.ceil((v-r)/m)),s=Math.min(h.outWidth,(h.inWidth+v-r)/m);for(let o=0;o<h.outChannels;++o){const i=Math.trunc(o/k),u=o%k;let l=0;for(let u=0;u<h.batchSize;++u)for(let c=t;c<n;++c){const t=e+c*f-y;for(let e=a;e<s;++e){const n=r+e*m-v;l+=w.get(u,t,n,i)*C.get(u,c,e,o)}}b.set(l,e,r,i,u)}}}return n.makeTensorInfo(b.shape,b.dtype,b.values)}};const ze={kernelName:r.y7R,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{dy:o,filter:i}=t,{strides:u,dilations:l,pad:c,dimRoundingMode:d,inputShape:p}=s;(0,a.H)([o,i],"depthwiseConv2DNativeBackpropInput");const h=r.D5U.computeStrides(o.shape),f=r.D5U.computeStrides(i.shape),m=r.Wap.computeConv2DInfo(p,i.shape,u,l,c,d,!0),g=new r.YDk(m.inShape,"float32"),x=g.values,[b,v,y]=g.strides,k=n.data.get(o.dataId).values,[I,w,S]=h,C=n.data.get(i.dataId).values,[$,T,E]=f,{batchSize:N,filterHeight:R,filterWidth:D,inChannels:A,inHeight:F,inWidth:_,outChannels:O,outHeight:M,outWidth:U,strideHeight:P,strideWidth:W}=m,B=R-1-m.padInfo.top,L=D-1-m.padInfo.left,V=O/A;for(let e=0;e<N;++e)for(let t=0;t<A;++t)for(let n=0;n<F;++n){const r=n-B,a=Math.max(0,Math.ceil(r/P)),s=Math.min(M,(R+r)/P);for(let o=0;o<_;++o){const i=o-L,u=Math.max(0,Math.ceil(i/W)),l=Math.min(U,(D+i)/W);let c=0;for(let n=a;n<s;++n){const a=n*P-r;for(let r=u;r<l;++r){const s=I*e+w*n+S*r,o=$*(R-1-a)+T*(D-1-(r*W-i))+E*t;for(let e=0;e<V;++e){c+=k[s+(t*V+e)]*C[o+e]}}}x[b*e+v*n+y*o+t]=c}}return n.makeTensorInfo(g.shape,g.dtype,g.values)}};const Ge={kernelName:r.$w,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n}=e,{x:a}=t,s=r.D5U.sizeFromShape(a.shape),o=n.data.get(a.dataId).values,i=(0,r.f3b)([s,s],a.dtype),u=i.values;for(let e=0;e<o.length;e++)u[e*s+e]=o[e];const l=[...a.shape,...a.shape];return n.makeTensorInfo(l,i.dtype,i.values)}},He={kernelName:r.p4S,backendName:"cpu",kernelFunc:({inputs:e,backend:t,attrs:n})=>{const{x:a,filter:s}=e,{strides:o,pad:i,dilations:u}=n,l=t,c=l.data.get(a.dataId).values,d=a.shape.length,p=l.data.get(s.dataId).values,h=s.shape.length,{batchSize:f,inHeight:m,inWidth:g,inChannels:x,outHeight:b,outWidth:v,padInfo:y,strideHeight:k,strideWidth:I,filterHeight:w,filterWidth:S,dilationHeight:C,dilationWidth:$,outShape:T}=r.Wap.computeDilation2DInfo(a.shape,s.shape,o,i,"NHWC",u),E=r.D5U.sizeFromShape(T),N=T.length,R=r.D5U.getArrayFromDType(a.dtype,E);for(let e=0;e<f;++e)for(let t=0;t<b;++t){const n=t*k-y.top;for(let o=0;o<v;++o){const i=o*I-y.left;for(let u=0;u<x;++u){let l=Number.MIN_SAFE_INTEGER;for(let t=0;t<w;++t){const o=n+t*C;if(o>=0&&o<m)for(let n=0;n<S;++n){const f=i+n*$;if(f>=0&&f<g){const i=r.D5U.locToIndex([e,o,f,u],d,r.D5U.computeStrides(a.shape)),m=r.D5U.locToIndex([t,n,u],h,r.D5U.computeStrides(s.shape)),g=c[i]+p[m];g>l&&(l=g)}}}R[r.D5U.locToIndex([e,t,o,u],N,r.D5U.computeStrides(T))]=l}}}return{dataId:l.write(r.D5U.toTypedArray(R,a.dtype),T,a.dtype),shape:T,dtype:a.dtype}}},je={kernelName:r.Vn9,backendName:"cpu",kernelFunc:({inputs:e,backend:t,attrs:n})=>{const{x:a,filter:s,dy:o}=e,{strides:i,pad:u,dilations:l}=n,c=t,d=r.D5U.toNestedArray(a.shape,c.data.get(a.dataId).values),p=r.D5U.toNestedArray(s.shape,c.data.get(s.dataId).values),{batchSize:h,inHeight:f,inWidth:m,inChannels:g,outHeight:x,outWidth:b,padInfo:v,strideHeight:y,strideWidth:k,filterHeight:I,filterWidth:w,dilationHeight:S,dilationWidth:C,outShape:$}=r.Wap.computeDilation2DInfo(a.shape,s.shape,i,u,"NHWC",l);r.D5U.assert(o.rank===$.length,(()=>`Error in ${r.Vn9}, dy must have the same rank as output ${$.length}, but got ${o.rank}`));const T=r.D5U.toNestedArray($,c.data.get(o.dataId).values),E=r.D5U.makeZerosNestedTypedArray(s.shape,s.dtype);for(let e=0;e<h;++e)for(let t=0;t<x;++t){const n=t*y-v.top;for(let r=0;r<b;++r){const a=r*k-v.left;for(let s=0;s<g;++s){let o=Number.MIN_SAFE_INTEGER,i=0,u=0;for(let t=0;t<I;++t){const r=n+t*S;if(r>=0&&r<f)for(let n=0;n<w;++n){const l=a+n*C;if(l>=0&&l<m){const a=d[e][r][l][s]+p[t][n][s];a>o&&(o=a,i=t,u=n)}}}E[i][u][s]+=T[e][t][r][s]}}}return{dataId:c.write(r.D5U.toTypedArray(E,a.dtype),s.shape,s.dtype),shape:s.shape,dtype:s.dtype}}},Xe={kernelName:r.ekb,backendName:"cpu",kernelFunc:({inputs:e,backend:t,attrs:n})=>{const{x:a,filter:s,dy:o}=e,{strides:i,pad:u,dilations:l}=n,c=t,d=r.D5U.toNestedArray(a.shape,c.data.get(a.dataId).values),p=r.D5U.toNestedArray(s.shape,c.data.get(s.dataId).values),{batchSize:h,inHeight:f,inWidth:m,inChannels:g,outHeight:x,outWidth:b,padInfo:v,strideHeight:y,strideWidth:k,filterHeight:I,filterWidth:w,dilationHeight:S,dilationWidth:C,outShape:$}=r.Wap.computeDilation2DInfo(a.shape,s.shape,i,u,"NHWC",l);r.D5U.assert(o.rank===$.length,(()=>`Error in ${r.ekb}, dy must have the same rank as output ${$.length}, but got ${o.rank}`));const T=r.D5U.toNestedArray($,c.data.get(o.dataId).values),E=r.D5U.makeZerosNestedTypedArray(a.shape,a.dtype);for(let e=0;e<h;++e)for(let t=0;t<x;++t){const n=t*y-v.top;for(let r=0;r<b;++r){const a=r*k-v.left;for(let s=0;s<g;++s){let o=Number.MIN_SAFE_INTEGER,i=n<0?0:n,u=a<0?0:a;for(let t=0;t<I;++t){const r=n+t*S;if(r>=0&&r<f)for(let n=0;n<w;++n){const l=a+n*C;if(l>=0&&l<m){const a=d[e][r][l][s]+p[t][n][s];a>o&&(o=a,i=r,u=l)}}}E[e][i][u][s]+=T[e][t][r][s]}}}return{dataId:c.write(r.D5U.toTypedArray(E,a.dtype),a.shape,a.dtype),shape:a.shape,dtype:a.dtype}}};var qe=n(1917),Ke=n(4391);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ye(e){const{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{axis:i,keepDims:u}=s;let l;(0,a.H)(o,"sum"),l="bool"===o.dtype?(0,he.p)({inputs:{x:o},backend:n,attrs:{dtype:"int32"}}):(0,p.y)({inputs:{x:o},backend:n});const c=l.shape.length,d=r.D5U.parseAxisParam(i,l.shape),h=r.Wap.getAxesPermutation(d,c);let f=d,m=l;null!=h&&(m=(0,U.p)({inputs:{x:l},backend:n,attrs:{perm:h}}),f=r.Wap.getInnerMostAxes(f.length,c)),r.Wap.assertAxesAreInnerMostDims("sum",f,m.shape.length);const[g,x]=r.Wap.computeOutAndReduceShapes(m.shape,f),b=r.Wap.upcastType(m.dtype,"int32");let v=(0,Ke.l)(n,g,b);const y=r.D5U.sizeFromShape(x),k=n.data.get(v.dataId).values,I=n.data.get(m.dataId).values;for(let e=0;e<k.length;++e){const t=e*y;let n=0;for(let e=0;e<y;++e)n+=I[t+e];k[e]=n}if(u){const e=v;v=$({inputs:{x:v},backend:n,attrs:{shape:r.Wap.expandShapeToKeepDim(v.shape,d)}}),n.disposeIntermediateTensorInfo(e)}return n.disposeIntermediateTensorInfo(l),null!=h&&n.disposeIntermediateTensorInfo(m),v}const Ze={kernelName:r.GBy,backendName:"cpu",kernelFunc:Ye};const Qe={kernelName:r.$g6,backendName:"cpu",kernelFunc:
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
function xt(e,t,n){const a=e.shape,s=a[0],o=a[1],i=n.data.get(e.dataId),u=i.complexTensorInfos.real,l=i.complexTensorInfos.imag,c=[s,o],d=r.D5U.sizeFromShape(c),p=r.D5U.getTypedArrayFromDType("float32",d),h=r.D5U.getTypedArrayFromDType("float32",d);for(let e=0;e<s;e++){const a=(0,ue.tP)({inputs:{x:u},backend:n,attrs:{begin:[e,0],size:[1,o]}}),s=(0,ue.tP)({inputs:{x:l},backend:n,attrs:{begin:[e,0],size:[1,o]}}),i=(0,xe.P)({inputs:{real:a,imag:s},backend:n}),{real:c,imag:d}=bt(i,t,n),f=r.Wap.mergeRealAndImagArrays(c,d);for(let t=0;t<o;t++){const n=r.Wap.getComplexWithIndex(f,t);p[e*o+t]=n.real,h[e*o+t]=n.imag}n.disposeIntermediateTensorInfo(a),n.disposeIntermediateTensorInfo(s),n.disposeIntermediateTensorInfo(i)}const f=n.makeTensorInfo(c,"float32",p),m=n.makeTensorInfo(c,"float32",h),g=(0,xe.P)({inputs:{real:f,imag:m},backend:n});return n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(m),g}function bt(e,t,n){const a=r.D5U.sizeFromShape(e.shape),s=n.data.get(e.dataId),o=n.data.get(s.complexTensorInfos.real.dataId).values,i=n.data.get(s.complexTensorInfos.imag.dataId).values;if(0==((u=a)&u-1)){const s=vt(o,i,a,t,n),u=[e.shape[0],e.shape[1]];if(t){const e=n.makeTensorInfo(u,"float32",s.real),t=n.makeTensorInfo(u,"float32",s.imag),o=n.makeTensorInfo([],"float32",r.D5U.createScalarValue(a,"float32")),i=(0,p.y)({inputs:{x:o},backend:n}),l=mt.kernelFunc({inputs:{a:e,b:o},backend:n}),c=mt.kernelFunc({inputs:{a:t,b:i},backend:n}),d=n.data.get(l.dataId).values,h=n.data.get(c.dataId).values;return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(o),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(l),n.disposeIntermediateTensorInfo(c),{real:d,imag:h}}return s}{const e=function(e,t,n){const a=new Float32Array(2*t);for(let s=0;s<t;s++){let o=0,i=0;for(let a=0;a<t;a++){const u=r.Wap.exponent(s*a,t,n),l=r.Wap.getComplexWithIndex(e,a);o+=l.real*u.real-l.imag*u.imag,i+=l.real*u.imag+l.imag*u.real}n&&(o/=t,i/=t),r.Wap.assignToTypedArray(a,o,i,s)}return a}(r.Wap.mergeRealAndImagArrays(o,i),a,t);return r.Wap.splitRealAndImagArrays(e)}var u}function vt(e,t,n,a,s){if(1===n)return{real:e,imag:t};const o=r.Wap.mergeRealAndImagArrays(e,t),i=n/2,u=r.Wap.complexWithEvenIndex(o),l=u.real,c=u.imag,d=[l.length],p=s.makeTensorInfo(d,"float32",l),h=s.makeTensorInfo(d,"float32",c),f=(0,xe.P)({inputs:{real:p,imag:h},backend:s}),m=r.Wap.complexWithOddIndex(o),g=m.real,x=m.imag,b=[g.length],v=s.makeTensorInfo(b,"float32",g),y=s.makeTensorInfo(b,"float32",x),k=(0,xe.P)({inputs:{real:v,imag:y},backend:s}),I=vt(l,c,i,a,s),w=I.real,S=I.imag,$=[w.length],T=s.makeTensorInfo($,"float32",w),E=s.makeTensorInfo($,"float32",S),N=(0,xe.P)({inputs:{real:T,imag:E},backend:s}),R=vt(g,x,i,a,s),D=R.real,A=R.imag,F=[D.length],_=s.makeTensorInfo(F,"float32",D),O=s.makeTensorInfo(F,"float32",A),M=(0,xe.P)({inputs:{real:_,imag:O},backend:s}),U=r.Wap.exponents(n,a),P=[U.real.length],W=s.makeTensorInfo(P,"float32",U.real),B=s.makeTensorInfo(P,"float32",U.imag),L=(0,xe.P)({inputs:{real:W,imag:B},backend:s}),V=(0,qe.Jp)({inputs:{a:L,b:M},backend:s}),z=(0,C.IH)({inputs:{a:N,b:V},backend:s}),G=(0,gt.lu)({inputs:{a:N,b:V},backend:s}),H=(0,Ie.k)({inputs:{input:z},backend:s}),j=(0,Ie.k)({inputs:{input:G},backend:s}),X=ye({inputs:{input:z},backend:s}),q=ye({inputs:{input:G},backend:s}),K=we({inputs:[H,j],backend:s,attrs:{axis:0}}),Y=we({inputs:[X,q],backend:s,attrs:{axis:0}}),Z=s.data.get(K.dataId).values,Q=s.data.get(Y.dataId).values;return s.disposeIntermediateTensorInfo(p),s.disposeIntermediateTensorInfo(h),s.disposeIntermediateTensorInfo(f),s.disposeIntermediateTensorInfo(v),s.disposeIntermediateTensorInfo(y),s.disposeIntermediateTensorInfo(k),s.disposeIntermediateTensorInfo(T),s.disposeIntermediateTensorInfo(E),s.disposeIntermediateTensorInfo(N),s.disposeIntermediateTensorInfo(_),s.disposeIntermediateTensorInfo(O),s.disposeIntermediateTensorInfo(M),s.disposeIntermediateTensorInfo(W),s.disposeIntermediateTensorInfo(B),s.disposeIntermediateTensorInfo(L),s.disposeIntermediateTensorInfo(V),s.disposeIntermediateTensorInfo(z),s.disposeIntermediateTensorInfo(G),s.disposeIntermediateTensorInfo(H),s.disposeIntermediateTensorInfo(X),s.disposeIntermediateTensorInfo(j),s.disposeIntermediateTensorInfo(q),s.disposeIntermediateTensorInfo(K),s.disposeIntermediateTensorInfo(Y),{real:Z,imag:Q}}const yt={kernelName:r.vwp,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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
function kt(e){const{backend:t,attrs:n}=e,{shape:a,value:s,dtype:o}=n,i=o||r.D5U.inferDtype(s),u=r.D5U.getArrayFromDType(i,r.D5U.sizeFromShape(a));return function(e,t,n){e.fill(t)}(u,s),t.makeTensorInfo(a,i,u)}const It={kernelName:r.deh,backendName:"cpu",kernelFunc:kt};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const wt={kernelName:r.Uyb,backendName:"cpu",kernelFunc:({inputs:e,attrs:t,backend:n})=>{const{image:a}=e,s=n,o=r.D5U.getTypedArrayFromDType(a.dtype,r.D5U.sizeFromShape(a.shape)),[i,u,l,c]=a.shape,d=s.data.get(a.dataId).values;for(let e=0;e<i;e++){const t=e*l*u*c;for(let e=0;e<u;e++){const n=e*(l*c);for(let e=0;e<l;e++){const r=e*c;for(let a=0;a<c;a++){const s=Math.round(l-e-1),i=t+n+r+a;let u=d[i];if(s>=0&&s<l){u=d[t+n+s*c+a]}o[i]=u}}}}return{dataId:s.write(o,a.shape,a.dtype),shape:a.shape,dtype:a.dtype}}};var St=n(6574);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Ct=(0,m.b)(((e,t)=>Math.floor(e/t))),$t=(0,q.j)(r.jeX,Ct,null,"int32"),Tt={kernelName:r.jeX,backendName:"cpu",kernelFunc:$t};const Et={kernelName:r._V0,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a,filter:s,bias:o,preluActivationWeights:i}=t,{strides:u,pad:l,dataFormat:c,dilations:d,dimRoundingMode:p,activation:h,leakyreluAlpha:f}=r;let m=Ce({inputs:{x:a,filter:s},backend:n,attrs:{strides:u,pad:l,dataFormat:c,dilations:d,dimRoundingMode:p}});if(o){const e=m;m=(0,C.IH)({inputs:{a:m,b:o},backend:n}),n.disposeIntermediateTensorInfo(e)}if(h){const e=m;m=S(n,m,h,i,f),n.disposeIntermediateTensorInfo(e)}return m}};const Nt={kernelName:r.luS,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a,filter:s,bias:o,preluActivationWeights:i}=t,{strides:u,pad:l,dataFormat:c,dilations:d,dimRoundingMode:p,activation:h,leakyreluAlpha:f}=r;let m=Be({inputs:{x:a,filter:s},backend:n,attrs:{strides:u,pad:l,dataFormat:c,dilations:d,dimRoundingMode:p}});if(o){const e=m;m=(0,C.IH)({inputs:{a:m,b:o},backend:n}),n.disposeIntermediateTensorInfo(e)}if(h){const e=m;m=S(n,m,h,i,f),n.disposeIntermediateTensorInfo(e)}return m}};var Rt=n(1820);const Dt={kernelName:r.q1x,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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
function(e){const{inputs:t,backend:n,attrs:s}=e,{x:o,indices:i}=t,{axis:u,batchDims:l}=s;(0,a.H)([o,i],"gatherV2");const c=r.D5U.parseAxisParam(u,o.shape)[0],d=n.data.get(i.dataId).values,p=o.shape[c];for(let e=0;e<d.length;++e){const t=d[e];r.D5U.assert(t<=p-1&&t>=0,(()=>`GatherV2: the index value ${t} is not in [0, ${p-1}]`))}let h=l;null==l&&(h=0);const f=r.D5U.sizeFromShape(i.shape),m=r.Wap.segment_util.collectGatherOpShapeInfo(o,i,c,h),g=$({inputs:{x:o},backend:n,attrs:{shape:[m.batchSize,m.outerSize,m.dimSize,m.sliceSize]}}),x=$({inputs:{x:i},backend:n,attrs:{shape:[m.batchSize,f/m.batchSize]}}),b=[m.batchSize,m.outerSize,f/m.batchSize,m.sliceSize],v=n.bufferSync(x),y=n.bufferSync(g),k=(0,At.i)(y,v,b);return n.disposeIntermediateTensorInfo(g),n.disposeIntermediateTensorInfo(x),n.makeTensorInfo(m.outputShape,k.dtype,k.values)}};var _t=n(6272),Ot=n(6259);const Mt={kernelName:r.Qg5,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n}=e,{input:a}=t,s=r.D5U.sizeFromShape(a.shape),o=a.shape[a.shape.length-1],i=$({inputs:{x:a},backend:n,attrs:{shape:[s/o,o]}}),u=xt(i,!0,n),l=$({inputs:{x:u},backend:n,attrs:{shape:a.shape}});return n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(u),l}},Ut=(0,l.A)(r.avt,(e=>Number.isFinite(e)?1:0),"bool"),Pt={kernelName:r.avt,backendName:"cpu",kernelFunc:Ut},Wt=(0,l.A)(r.iWB,(e=>Math.abs(e)===1/0?1:0),"bool"),Bt={kernelName:r.iWB,backendName:"cpu",kernelFunc:Wt},Lt=(0,l.A)(r.r7n,(e=>Number.isNaN(e)?1:0),"bool"),Vt={kernelName:r.r7n,backendName:"cpu",kernelFunc:Lt};var zt=n(8405),Gt=n(635),Ht=n(1325);const jt={kernelName:r.e7N,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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
function ln(e){const{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{reductionIndices:i,keepDims:u}=s,l=n;let c=o.shape;const d=c.length,p=r.D5U.parseAxisParam(i,c);let h=p;const f=r.Wap.getAxesPermutation(h,d);let m=l.data.get(o.dataId).values;if(null!=f){const e=new Array(d);for(let t=0;t<e.length;t++)e[t]=c[f[t]];m=(0,un.H)(m,c,o.dtype,f,e),h=r.Wap.getInnerMostAxes(h.length,d),c=e}(0,a.H)(o,"max"),r.Wap.assertAxesAreInnerMostDims("max",h,d);const[g,x]=r.Wap.computeOutAndReduceShapes(c,h),b=r.D5U.sizeFromShape(x),v=(0,on.B)(m,b,g,o.dtype),y=l.write(v,g,o.dtype);let k=g;if(u){k=r.Wap.expandShapeToKeepDim(g,p)}return{dataId:y,shape:k,dtype:o.dtype}}const cn={kernelName:r.YoZ,backendName:"cpu",kernelFunc:ln};var dn=n(1717);const pn={kernelName:r.mTV,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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
function(e){const{inputs:t,backend:n,attrs:s}=e,{dy:o,input:i}=t,{filterSize:u,strides:l,pad:c,dimRoundingMode:d}=s;(0,a.H)([o,i],"maxPool3DGrad");const p=r.Wap.computePool3DInfo(i.shape,u,l,1,c,d),h=function(e,t){const n=(0,r.f3b)(t.outShape,"int32"),a=t.strideDepth,s=t.strideHeight,o=t.strideWidth,i=t.dilationDepth,u=t.dilationHeight,l=t.dilationWidth,c=t.effectiveFilterDepth,d=t.effectiveFilterHeight,p=t.effectiveFilterWidth,h=t.padInfo.front,f=t.padInfo.top,m=t.padInfo.left;for(let r=0;r<t.batchSize;++r)for(let g=0;g<t.inChannels;++g)for(let x=0;x<t.outDepth;++x){const b=x*a-h;let v=b;for(;v<0;)v+=i;const y=Math.min(t.inDepth,c+b);for(let a=0;a<t.outHeight;++a){const c=a*s-f;let h=c;for(;h<0;)h+=u;const k=Math.min(t.inHeight,d+c);for(let s=0;s<t.outWidth;++s){const f=s*o-m;let I=f;for(;I<0;)I+=l;const w=Math.min(t.inWidth,p+f);let S=Number.NEGATIVE_INFINITY,C=-1;for(let t=v;t<y;t+=i){const n=t-b;for(let a=h;a<k;a+=u){const s=a-c;for(let o=I;o<w;o+=l){const i=o-f,u=e.get(r,t,a,o,g);u>=S&&(S=u,C=n*d*p+s*d+i)}}}n.set(C,r,x,a,s,g)}}}return n}(n.bufferSync(i),p),f=p.strideDepth,m=p.strideHeight,g=p.strideWidth,x=p.dilationDepth,b=p.dilationHeight,v=p.dilationWidth,y=p.effectiveFilterDepth,k=p.effectiveFilterHeight,I=p.effectiveFilterWidth,w=y-1-p.padInfo.front,S=I-1-p.padInfo.left,C=k-1-p.padInfo.top,$=(0,r.f3b)(i.shape,"float32"),T=n.bufferSync(o);for(let e=0;e<p.batchSize;++e)for(let t=0;t<p.inChannels;++t)for(let n=0;n<p.inDepth;++n)for(let r=0;r<p.inHeight;++r)for(let a=0;a<p.inWidth;++a){const s=n-w,o=r-C,i=a-S;let u=0;for(let n=0;n<y;n+=x){const r=(s+n)/f;if(!(r<0||r>=p.outDepth||Math.floor(r)!==r))for(let a=0;a<k;a+=b){const s=(o+a)/m;if(!(s<0||s>=p.outHeight||Math.floor(s)!==s))for(let o=0;o<I;o+=v){const l=(i+o)/g;if(l<0||l>=p.outWidth||Math.floor(l)!==l)continue;const c=y*k*I-1-h.get(e,r,s,l,t)===n*k*I+a*I+o?1:0;if(0===c)continue;u+=T.get(e,r,s,l,t)*c}}}$.set(u,e,n,r,a,t)}return n.makeTensorInfo($.shape,$.dtype,$.values)}};const mn={kernelName:r.OV7,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{dy:o,input:i,output:u}=t,l=i;(0,a.H)([i,u],"maxPoolGrad");const{filterSize:c,strides:d,pad:p,dimRoundingMode:h}=s,f=r.Wap.computePool2DInfo(l.shape,c,d,1,p,h),m=n.data.get(l.dataId).values,g=(0,r.f3b)(f.outShape,l.dtype,te(m,l.shape,l.dtype,f).values),x=f.strideHeight,b=f.strideWidth,v=f.dilationHeight,y=f.dilationWidth,k=f.effectiveFilterHeight,I=f.effectiveFilterWidth,w=I-1-f.padInfo.left,S=k-1-f.padInfo.top,C=(0,r.f3b)(l.shape,"float32"),$=n.data.get(o.dataId).values,T=(0,r.f3b)(o.shape,"float32",$);for(let e=0;e<f.batchSize;++e)for(let t=0;t<f.inChannels;++t)for(let n=0;n<f.inHeight;++n)for(let r=0;r<f.inWidth;++r){const a=n-S,s=r-w;let o=0;for(let n=0;n<k;n+=v){const r=(a+n)/x;if(!(r<0||r>=f.outHeight||Math.floor(r)!==r))for(let a=0;a<I;a+=y){const i=(s+a)/b;if(i<0||i>=f.outWidth||Math.floor(i)!==i)continue;const u=k*I-1-g.get(e,r,i,t)===n*I+a?1:0;if(0===u)continue;o+=T.get(e,r,i,t)*u}}C.set(o,e,n,r,t)}return n.makeTensorInfo(C.shape,C.dtype,C.values)}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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
function(e){const{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{axis:i,keepDims:u}=s;(0,a.H)(o,"min");const l=r.D5U.parseAxisParam(i,o.shape);let c=l;const d=r.Wap.getAxesPermutation(c,o.shape.length);let p=o;null!=d&&(p=(0,U.p)({inputs:{x:o},backend:n,attrs:{perm:d}}),c=r.Wap.getInnerMostAxes(c.length,o.shape.length)),r.Wap.assertAxesAreInnerMostDims("min",c,p.shape.length);const[h,f]=r.Wap.computeOutAndReduceShapes(p.shape,c),m=r.D5U.sizeFromShape(f),g=r.D5U.makeZerosTypedArray(r.D5U.sizeFromShape(h),p.dtype),x=n.data.get(p.dataId).values;for(let e=0;e<g.length;++e){const t=e*m;let n=x[t];for(let e=0;e<m;++e){const r=x[t+e];(Number.isNaN(r)||r<n)&&(n=r)}g[e]=n}null!=d&&n.disposeIntermediateTensorInfo(p);const b=n.makeTensorInfo(h,p.dtype,g);if(u){const e=$({inputs:{x:b},backend:n,attrs:{shape:r.Wap.expandShapeToKeepDim(h,l)}});return n.disposeIntermediateTensorInfo(b),e}return b}};var vn=n(612);const yn={kernelName:r.jQs,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{paddings:i,mode:u}=s;(0,a.H)(o,"mirrorPad");const l=i.map(((e,t)=>e[0]+o.shape[t]+e[1])),c=i.map((e=>e[0])),d=i.map(((e,t)=>e[0]+o.shape[t])),p="reflect"===u?0:1,h=n.data.get(o.dataId).values,f=o.shape.length,m=r.D5U.computeStrides(o.shape),g=r.D5U.sizeFromShape(l),x=l.length,b=r.D5U.computeStrides(l),v=r.D5U.getTypedArrayFromDType(o.dtype,g);for(let e=0;e<g;e++){let t=r.D5U.indexToLoc(e,x,b);for(let e=0;e<x;e++)t[e]<c[e]?t[e]=2*c[e]-t[e]-p:t[e]>=d[e]&&(t[e]=2*(d[e]-1)-t[e]+p);t=t.map(((e,t)=>e-c[t]));const n=r.D5U.locToIndex(t,f,m);v[e]=h[n]}return{dataId:n.write(v,l,o.dtype),shape:l,dtype:o.dtype}}},kn=(0,m.b)(((e,t)=>{const n=e%t;return e<0&&t<0||e>=0&&t>=0?n:(n+t)%t})),In=(0,q.j)(r.Vbg,kn),wn={kernelName:r.Vbg,backendName:"cpu",kernelFunc:In};var Sn=n(6377);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Cn(e){const{inputs:t,backend:n,attrs:a}=e,{logits:s}=t,{dim:o}=a,i=s.shape.length;let u=o;if(-1===u&&(u=i-1),u!==i-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${i} and dim was ${u}`);const l=r.D5U.parseAxisParam([u],s.shape),c=ln({inputs:{x:s},backend:n,attrs:{reductionIndices:l,keepDims:!1}}),d=r.Wap.expandShapeToKeepDim(c.shape,l),p=$({inputs:{x:c},backend:n,attrs:{shape:d}}),h=(0,gt.lu)({inputs:{a:s,b:p},backend:n}),f=(0,lt.Qq)({inputs:{x:h},backend:n}),m=Ye({inputs:{x:f},backend:n,attrs:{axis:l,keepDims:!1}}),g=$({inputs:{x:m},backend:n,attrs:{shape:d}}),x=ft({inputs:{a:f,b:g},backend:n});return n.disposeIntermediateTensorInfo(c),n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(g),x}const $n={kernelName:r.Gcp,backendName:"cpu",kernelFunc:Cn};const Tn={kernelName:r.NZg,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{logits:o}=t,{numSamples:i,seed:u,normalized:l}=s;(0,a.H)(o,"multinomial");const c=l?o:Cn({inputs:{logits:o},backend:n,attrs:{dim:-1}}),d=c.shape[0],p=c.shape[1],h=n.data.get(c.dataId).values,f=[d,i],m=r.D5U.makeZerosTypedArray(r.D5U.sizeFromShape(f),"int32");for(let e=0;e<d;++e){const t=e*p,n=new Float32Array(p-1);n[0]=h[t];for(let e=1;e<n.length;++e)n[e]=n[e-1]+h[t+e];const r=Sn.alea(u.toString()),a=e*i;for(let e=0;e<i;++e){const t=r();m[a+e]=n.length;for(let r=0;r<n.length;r++)if(t<n[r]){m[a+e]=r;break}}}return l||n.disposeIntermediateTensorInfo(c),n.makeTensorInfo(f,"int32",m)}};var En=n(854);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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
function Un(e){const{inputs:t,backend:n}=e,{x:r}=t;if("string"===r.dtype)throw new Error("zerosLike is not supported for string tensors");if("complex64"===r.dtype){const e=(0,Ie.k)({inputs:{input:r},backend:n}),t=Un({inputs:{x:e},backend:n}),a=ye({inputs:{input:r},backend:n}),s=Un({inputs:{x:a},backend:n}),o=(0,xe.P)({inputs:{real:t,imag:s},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(a),n.disposeIntermediateTensorInfo(s),o}return kt({backend:n,attrs:{shape:r.shape,value:0,dtype:r.dtype}})}const Pn={kernelName:r.RuY,backendName:"cpu",kernelFunc:Un};const Wn={kernelName:r.qWM,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function e(t){const{inputs:n,backend:r}=t,{x:a}=n;if("string"===a.dtype)throw new Error("onesLike is not supported for string tensors");if("complex64"===a.dtype){const t=(0,Ie.k)({inputs:{input:a},backend:r}),n=e({inputs:{x:t},backend:r}),s=ye({inputs:{input:a},backend:r}),o=Un({inputs:{x:s},backend:r}),i=(0,xe.P)({inputs:{real:n,imag:o},backend:r});return r.disposeIntermediateTensorInfo(t),r.disposeIntermediateTensorInfo(n),r.disposeIntermediateTensorInfo(s),r.disposeIntermediateTensorInfo(o),i}return kt({backend:r,attrs:{shape:a.shape,value:1,dtype:a.dtype}})}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Bn(e){const{inputs:t,backend:n,attrs:a}=e,{axis:s}=a;if(1===t.length)return ct({inputs:{input:t[0]},backend:n,attrs:{dim:s}});const o=t[0].shape,i=t[0].dtype;t.forEach((e=>{r.D5U.assertShapesMatch(o,e.shape,"All tensors passed to stack must have matching shapes"),r.D5U.assert(i===e.dtype,(()=>"All tensors passed to stack must have matching dtypes"))}));const u=[],l=we({inputs:t.map((e=>{const t=ct({inputs:{input:e},backend:n,attrs:{dim:s}});return u.push(t),t})),backend:n,attrs:{axis:s}});return u.forEach((e=>n.disposeIntermediateTensorInfo(e))),l}const Ln={kernelName:r.QiL,backendName:"cpu",kernelFunc:Bn};const Vn={kernelName:r.lyA,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{paddings:i,constantValue:u}=s;(0,a.H)(o,"pad");const l=i.map(((e,t)=>e[0]+o.shape[t]+e[1])),c=i.map((e=>e[0])),d=n.data.get(o.dataId).values,p=r.D5U.sizeFromShape(o.shape),h=o.shape.length,f=r.D5U.computeStrides(o.shape),m=r.D5U.sizeFromShape(l),g=l.length,x=r.D5U.computeStrides(l),b=r.D5U.getTypedArrayFromDType(o.dtype,m);0!==u&&b.fill(u);for(let e=0;e<p;e++){const t=r.D5U.indexToLoc(e,h,f).map(((e,t)=>e+c[t]));b[r.D5U.locToIndex(t,g,x)]=d[e]}return{dataId:n.write(b,l,o.dtype),shape:l,dtype:o.dtype}}},zn=(0,m.b)(((e,t)=>Math.pow(e,t))),Gn=(0,q.j)(r.pe_,zn),Hn={kernelName:r.pe_,backendName:"cpu",kernelFunc:Gn};var jn=n(9560),Xn=n(9230);const qn={kernelName:r.e6w,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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
function(e){const{inputs:t,backend:n,attrs:s}=e,{images:o}=t,{alignCorners:i,halfPixelCenters:u,size:l}=s;(0,a.H)(o,"resizeBilinear");const c=r.D5U.computeStrides(o.shape),[d,p]=l,[h,f,m,g]=o.shape,x=n.data.get(o.dataId).values,b=new Float32Array(r.D5U.sizeFromShape([h,d,p,g])),v=[i&&d>1?f-1:f,i&&p>1?m-1:m],y=[i&&d>1?d-1:d,i&&p>1?p-1:p];let k=0;const I=v[0]/y[0],w=v[1]/y[1];for(let e=0;e<h;e++)for(let t=0;t<d;t++){let n;n=u?I*(t+.5)-.5:I*t;const r=Math.max(0,Math.floor(n)),a=n-r,s=Math.min(f-1,Math.ceil(n)),o=e*c[0]+r*c[1],i=e*c[0]+s*c[1];for(let e=0;e<p;e++){let t;t=u?w*(e+.5)-.5:w*e;const n=Math.max(0,Math.floor(t)),r=t-n,s=Math.min(m-1,Math.ceil(t)),l=o+n*c[2],d=i+n*c[2],p=o+s*c[2],h=i+s*c[2];for(let e=0;e<g;e++){const t=x[l+e],n=x[d+e],s=t+(x[p+e]-t)*r,o=s+(n+(x[h+e]-n)*r-s)*a;b[k++]=o}}}return n.makeTensorInfo([h,d,p,g],"float32",b)}};const Qn={kernelName:r.zbQ,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{images:o,dy:i}=t,{alignCorners:u}=s;(0,a.H)([i,o],"resizeBilinearGrad");const l=r.D5U.computeStrides(o.shape),[c,d,p,h]=o.shape,[,f,m]=i.shape,g=new Float32Array(c*d*p*h),x=[u&&f>1?d-1:d,u&&m>1?p-1:p],b=[u&&f>1?f-1:f,u&&m>1?m-1:m],v=x[0]/b[0],y=x[1]/b[1],k=n.data.get(i.dataId).values;let I=0;for(let e=0;e<c;e++){const t=e*l[0];for(let e=0;e<f;e++){const n=e*v,r=Math.floor(n),a=Math.min(Math.ceil(n),d-1),s=t+r*l[1],o=t+a*l[1],i=n-r,u=1-i;for(let e=0;e<m;e++){const t=e*y,n=Math.floor(t),r=Math.min(Math.ceil(t),p-1),a=t-n,c=1-a,d=s+n*l[2],f=s+r*l[2],m=o+n*l[2],x=o+r*l[2],b=u*c,v=u*a,w=i*c,S=i*a;for(let e=0;e<h;e++){const t=k[I++];g[d+e]+=t*b,g[f+e]+=t*v,g[m+e]+=t*w,g[x+e]+=t*S}}}}return n.makeTensorInfo([c,p,d,h],"float32",g)}};const Jn={kernelName:r.dpD,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{images:o}=t,{alignCorners:i,halfPixelCenters:u,size:l}=s;(0,a.H)(o,"resizeNearestNeighbor");const c=r.D5U.computeStrides(o.shape),[d,p]=l,[h,f,m,g]=o.shape,x=n.data.get(o.dataId).values,b=new Float32Array(h*d*p*g),v=[i&&d>1?f-1:f,i&&p>1?m-1:m],y=[i&&d>1?d-1:d,i&&p>1?p-1:p],k=v[0]/y[0],I=v[1]/y[1];let w=0;for(let e=0;e<h;e++){const t=e*c[0];for(let e=0;e<d;e++){const n=u?k*(e+.5):k*e;let r=Math.min(f-1,i?Math.round(n):Math.floor(n));u&&(r=Math.max(0,r));const a=t+r*c[1];for(let e=0;e<p;e++){const t=u?I*(e+.5):I*e;let n=Math.min(m-1,i?Math.round(t):Math.floor(t));u&&(n=Math.max(0,n));const r=a+n*c[2];for(let e=0;e<g;e++){const t=x[r+e];b[w++]=t}}}}return n.makeTensorInfo([h,d,p,g],o.dtype,b)}};const er={kernelName:r.Hmb,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{images:o,dy:i}=t,{alignCorners:u}=s;(0,a.H)([i,o],"resizeNearestNeighborGrad");const l=r.D5U.computeStrides(o.shape),c=r.D5U.computeStrides(i.shape),[d,p,h,f]=o.shape,[,m,g]=i.shape,x=new Float32Array(d*p*h*f),b=n.data.get(i.dataId).values,v=[u&&m>1?p-1:p,u&&g>1?h-1:h],y=[u&&m>1?m-1:m,u&&g>1?g-1:g],k=v[0]/y[0],I=v[1]/y[1],w=1/k,S=1/I,C=2*Math.ceil(w)+2,$=2*Math.ceil(S)+2;for(let e=0;e<d;e++){const t=e*l[0];for(let e=0;e<p;e++){const n=t+e*l[1],r=Math.floor(e*w),a=Math.floor(r-C/2);for(let r=0;r<h;r++){const s=n+r*l[2],o=Math.floor(r*S),i=Math.floor(o-$/2);for(let n=0;n<f;n++){let o=0;for(let s=0;s<C;s++){const l=s+a;if(l<0||l>=m)continue;const d=t+l*c[1],f=l*k;if(e===Math.min(p-1,u?Math.round(f):Math.floor(f)))for(let e=0;e<$;e++){const t=e+i;if(t<0||t>=g)continue;const a=d+t*c[2],s=t*I;r===Math.min(h-1,u?Math.round(s):Math.floor(s))&&(o+=b[a+n])}}x[s+n]=o}}}}return n.makeTensorInfo(o.shape,o.dtype,x)}};const tr={kernelName:r.mKl,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{dims:i}=s;(0,a.H)(o,"reverse");const u=o.shape.length,l=r.D5U.parseAxisParam(i,o.shape);if(0===u)return(0,p.y)({inputs:{x:o},backend:n});const c=new r.YDk(o.shape,o.dtype),d=n.bufferSync(o);for(let e=0;e<c.size;e++){const t=c.indexToLoc(e),n=t.slice();l.forEach((e=>n[e]=o.shape[e]-1-n[e])),c.set(d.get(...n),...t)}return n.makeTensorInfo(c.shape,c.dtype,c.values)}},nr={kernelName:r.b9H,backendName:"cpu",kernelFunc:({inputs:e,attrs:t,backend:n})=>{const{image:a}=e,{radians:s,fillValue:o,center:i}=t,u=n,l=r.D5U.getTypedArrayFromDType(a.dtype,r.D5U.sizeFromShape(a.shape)),[c,d,p,h]=a.shape,[f,m]=r.Wap.getImageCenter(i,d,p),g=Math.sin(s),x=Math.cos(s),b=u.data.get(a.dataId).values;for(let e=0;e<c;e++){const t=e*p*d*h;for(let e=0;e<d;e++){const n=e*(p*h);for(let r=0;r<p;r++){const a=r*h;for(let s=0;s<h;s++){const i=[c,e,r,s],u=i[2],v=i[1];let y=(u-f)*x-(v-m)*g,k=(u-f)*g+(v-m)*x;y=Math.round(y+f),k=Math.round(k+m);let I=o;if("number"!=typeof o&&(I=3===s?255:o[s]),y>=0&&y<p&&k>=0&&k<d){I=b[t+k*(p*h)+y*h+s]}l[t+n+a+s]=I}}}}return{dataId:u.write(l,a.shape,a.dtype),shape:a.shape,dtype:a.dtype}}},rr=(0,l.A)(r.e07,(e=>{const t=Math.floor(e);return e-t<.5?Math.floor(e):e-t>.5?Math.ceil(e):t%2==0?t:t+1})),ar={kernelName:r.e07,backendName:"cpu",kernelFunc:rr};var sr=n(7742);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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
function(e){const{inputs:t,backend:n}=e,{condition:s,t:o,e:i}=t;(0,a.H)([s,o,i],"select");const u=s.shape.length,l=n.data.get(s.dataId).values,c=n.data.get(o.dataId).values,d=n.data.get(i.dataId).values,p=(0,r.x8V)(o.dtype,i.dtype),h=r.D5U.makeZerosTypedArray(r.D5U.sizeFromShape(o.shape),p);let f=0;const m=0===u||u>1||1===o.shape.length?1:r.D5U.sizeFromShape(o.shape.slice(1));for(let e=0;e<l.length;e++)for(let t=0;t<m;t++)1===l[e]?h[f++]=c[e]:h[f++]=d[e];return n.makeTensorInfo(o.shape,p,h)}},lr=r.Wap.SELU_SCALEALPHA,cr=r.Wap.SELU_SCALE,dr=(0,l.A)(r.oFR,(e=>e>=0?cr*e:lr*(Math.exp(e)-1))),pr={kernelName:r.oFR,backendName:"cpu",kernelFunc:dr},hr=(0,l.A)(r.i5y,(e=>e<0?-1:e>0?1:0)),fr={kernelName:r.i5y,backendName:"cpu",kernelFunc:hr},mr=(0,l.A)(r.RQH,(e=>Math.sin(e))),gr={kernelName:r.RQH,backendName:"cpu",kernelFunc:mr},xr=(0,l.A)(r.wYB,(e=>Math.sinh(e))),br={kernelName:r.wYB,backendName:"cpu",kernelFunc:xr},vr=Math.log(1.1920928955078125e-7)+2,yr=(0,l.A)(r.MRv,(e=>{const t=e>-vr,n=e<vr,r=Math.exp(e);let a;return a=n?r:t?e:Math.log(1+r),a})),kr={kernelName:r.MRv,backendName:"cpu",kernelFunc:yr};const Ir={kernelName:r.TQc,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{blockShape:i,paddings:u}=s;(0,a.H)([o],"spaceToBatchND");const l=r.D5U.sizeFromShape(i),c=[[0,0]];c.push(...u);for(let e=1+i.length;e<o.shape.length;++e)c.push([0,0]);const d=Vn.kernelFunc({inputs:{x:o},backend:n,attrs:{paddings:c,constantValue:0}}),p=r.Wap.getReshaped(d.shape,i,l,!1),h=r.Wap.getPermuted(p.length,i.length,!1),f=r.Wap.getReshapedPermuted(d.shape,i,l,!1),m=$({inputs:{x:d},backend:n,attrs:{shape:p}}),g={x:m},x={perm:h},b=(0,U.p)({inputs:g,backend:n,attrs:x}),v=$({inputs:{x:b},backend:n,attrs:{shape:f}});return n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(b),v}};var wr=n(2123);const Sr={kernelName:r.O3z,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:n}=e,{indices:r,values:a,denseShape:s,defaultValue:o}=t;if(1!==s.shape.length)throw new Error(`Dense shape must be a vector, saw:\n        ${s.shape}`);if(2!==r.shape.length)throw new Error(`Indices must be a matrix, saw:\n        ${r.shape}`);if(1!==a.shape.length)throw new Error(`Values must be a vector, saw:\n        ${a.shape}`);if(0!==o.shape.length)throw new Error(`Default value must be a scalar, saw:\n        ${o.shape}`);const i=n.data.get(r.dataId).values,u=n.data.get(a.dataId).values,l=n.data.get(s.dataId).values,c=n.data.get(o.dataId).values[0],[d,p,h,f,m]=(0,wr.c)(i,r.shape,r.dtype,u,a.dtype,l,c);return[n.makeTensorInfo(p,r.dtype,d),n.makeTensorInfo([p[0]],a.dtype,h),n.makeTensorInfo([f.length],"bool",new Uint8Array(f.map((e=>Number(e))))),n.makeTensorInfo([m.length],r.dtype,new Int32Array(m))]}};var Cr=n(3849);const $r={kernelName:r.nhH,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:n}=e,{inputIndices:r,inputShape:a,newShape:s}=t;if(2!==r.shape.length)throw new Error(`Input indices should be a matrix but received shape\n        ${r.shape}`);if(1!==a.shape.length)throw new Error(`Input shape should be a vector but received shape\n        ${a.shape}`);if(1!==s.shape.length)throw new Error(`Target shape should be a vector but received shape ${s.shape}`);const o=Array.from(n.data.get(a.dataId).values),i=n.data.get(r.dataId).values,u=Array.from(n.data.get(s.dataId).values),[l,c,d]=(0,Cr.U)(i,r.shape,r.dtype,o,u);return[n.makeTensorInfo(c,r.dtype,l),n.makeTensorInfo([d.length],s.dtype,new Int32Array(d))]}};var Tr=n(3989);const Er={kernelName:r.w3H,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:n}=e,{data:r,indices:a,segmentIds:s}=t;if(r.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(1!==a.shape.length)throw new Error(`Indices should be a vector but received shape\n          ${a.shape}`);if(1!==s.shape.length)throw new Error(`Segment ids should be a vector but received shape\n          ${s.shape}`);if(a.shape[0]!==s.shape[0])throw new Error("segmentIds and indices should have same size.");const o=n.data.get(r.dataId).values,i=n.data.get(a.dataId).values,u=n.data.get(s.dataId).values,[l,c]=(0,Tr.V)(o,r.shape,r.dtype,i,u,!0);return n.makeTensorInfo(c,r.dtype,l)}};const Nr={kernelName:r.ZjV,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:n}=e,{data:r,indices:a,segmentIds:s}=t;if(r.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(1!==a.shape.length)throw new Error(`Indices should be a vector but received shape\n         ${a.shape}`);if(1!==s.shape.length)throw new Error(`Segment ids should be a vector but received shape\n         ${s.shape}`);if(a.shape[0]!==s.shape[0])throw new Error("segmentIds and indices should have same size.");const o=n.data.get(r.dataId).values,i=n.data.get(a.dataId).values,u=n.data.get(s.dataId).values,[l,c]=(0,Tr.V)(o,r.shape,r.dtype,i,u);return n.makeTensorInfo(c,r.dtype,l)}};const Rr={kernelName:r.D2d,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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
function(e){const{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{begin:i,end:u,strides:l,beginMask:c,endMask:d,ellipsisMask:p,newAxisMask:h,shrinkAxisMask:f}=s;(0,a.H)(o,"stridedSlice");const{finalShapeSparse:m,finalShape:g,isIdentity:x,sliceDim0:b,isSimpleSlice:v,begin:y,end:k,strides:I}=r.kuN.sliceInfo(o.shape,i,u,l,c,d,p,h,f);let w;if(x)w=$({inputs:{x:o},backend:n,attrs:{shape:g}});else if(b||v){r.D5U.assert(o.shape.length>=1,(()=>`Input must have rank at least 1, got: ${o.shape.length}`));const e=r.kuN.computeOutShape(y,k,I),t=(0,ue.tP)({inputs:{x:o},backend:n,attrs:{begin:y,size:e}});w=$({inputs:{x:t},backend:n,attrs:{shape:g}}),n.disposeIntermediateTensorInfo(t)}else{const e=n.bufferSync(o),t=(0,Ur.t)(m,e,I,y);w=n.makeTensorInfo(g,t.dtype,t.values)}return w}};var Wr=n(6841);const Br={kernelName:r._JP,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:r}=e,{separator:a,nGramWidths:s,leftPad:o,rightPad:i,padWidth:u,preserveShortSequences:l}=r,{data:c,dataSplits:d}=t,p=n.data.get(c.dataId).values,h=n.data.get(d.dataId).values,[f,m]=(0,Wr.A)(p,h,a,s,o,i,u,l);return[n.makeTensorInfo([f.length],"string",f),n.makeTensorInfo(d.shape,"int32",m)]}};var Lr=n(8639);const Vr={kernelName:r.s1s,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:r}=e,{skipEmpty:a}=r,{input:s,delimiter:o}=t;if("string"!==s.dtype)throw new Error("Input must be of datatype string");if(1!==s.shape.length)throw new Error(`Input must be a vector, got shape: ${s.shape}`);if(0!==o.shape.length)throw new Error(`Delimiter must be a scalar, got shape: ${o.shape}`);const i=n.data.get(s.dataId).values,u=n.data.get(o.dataId).values[0],[l,c,d]=(0,Lr.Q)(i,u,a),p=c.length;return[n.makeTensorInfo([p,2],"int32",l),n.makeTensorInfo([p],"string",c),n.makeTensorInfo([2],"int32",new Int32Array(d))]}};var zr=n(6626);const Gr={kernelName:r.XkS,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:r}=e,{numBuckets:a}=r,{input:s}=t;if("string"!==s.dtype)throw new Error("Input must be of datatype string");if(a<=0)throw new Error("Number of buckets must be at least 1");const o=n.data.get(s.dataId).values,i=(0,zr.h)(o,a);return n.makeTensorInfo(s.shape,"int32",i)}},Hr=(0,l.A)(r.sEM,(e=>Math.tan(e))),jr={kernelName:r.sEM,backendName:"cpu",kernelFunc:Hr},Xr=(0,l.A)(r.MIZ,(e=>Math.tanh(e))),qr={kernelName:r.MIZ,backendName:"cpu",kernelFunc:Xr};var Kr=n(7723);const Yr={kernelName:r.n9L,backendName:"cpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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
function(e){const{inputs:t,attrs:n,backend:a}=e,{image:s,transforms:o}=t,{interpolation:i,fillMode:u,fillValue:l,outputShape:c}=n,[d,p,h,f]=s.shape,[m,g]=null!=c?c:[p,h],x=[d,m,g,f],b=r.D5U.computeStrides(s.shape),v=b[0],y=b[1],k=b[2],I=r.D5U.getTypedArrayFromDType(s.dtype,r.D5U.sizeFromShape(x));I.fill(l);const w=a.data.get(s.dataId).values,S=a.data.get(o.dataId).values;for(let e=0;e<d;++e){const t=1===o.shape[0]?S:S.subarray(8*e,8*e+8);for(let n=0;n<m;++n)for(let r=0;r<g;++r)for(let a=0;a<f;++a){let s;const o=t[6]*r+t[7]*n+1;if(0===o)continue;const c=(t[0]*r+t[1]*n+t[2])/o,d=(t[3]*r+t[4]*n+t[5])/o,f=ea(c,h,u),m=ea(d,p,u);switch(i){case"nearest":s=na(w,p,h,v,y,k,e,m,f,a,l);break;case"bilinear":s=ra(w,p,h,v,y,k,e,m,f,a,l);break;default:throw new Error(`Error in Transform: Expect 'nearest' or 'bilinear', but got ${i}`)}I[e*v+n*y+r*k+a]=s}return a.makeTensorInfo(x,s.dtype,I)}return{dataId:a.write(I,x,s.dtype),shape:s.shape,dtype:s.dtype}}};function ea(e,t,n){switch(n){case"reflect":return function(e,t){let n=e;if(n<0)if(t<=1)n=0;else{const e=2*t;n<e&&(n=e*Math.trunc(-n/e)+n),n=n<-t?n+e:-n-1}else if(n>t-1)if(t<=1)n=0;else{const e=2*t;n-=e*Math.trunc(n/e),n>=t&&(n=e-n-1)}return r.D5U.clamp(0,n,t-1)}(e,t);case"wrap":return function(e,t){let n=e;if(n<0)if(t<=1)n=0;else{const e=t-1;n+=t*(Math.trunc(-n/e)+1)}else if(n>t-1)if(t<=1)n=0;else{const e=t-1;n-=t*Math.trunc(n/e)}return r.D5U.clamp(0,n,t-1)}(e,t);case"nearest":return function(e,t){return r.D5U.clamp(0,e,t-1)}(e,t);default:return function(e,t){return e}(e)}}function ta(e,t,n,r,a,s,o,i,u,l,c){return 0<=i&&i<t&&0<=u&&u<n?e[o*r+i*a+u*s+l]:c}function na(e,t,n,r,a,s,o,i,u,l,c){return ta(e,t,n,r,a,s,o,Math.round(i),Math.round(u),l,c)}function ra(e,t,n,r,a,s,o,i,u,l,c){const d=Math.floor(i),p=Math.floor(u),h=d+1,f=p+1;return(h-i)*((f-u)*ta(e,t,n,r,a,s,o,d,p,l,c)+(u-p)*ta(e,t,n,r,a,s,o,d,f,l,c))+(i-d)*((f-u)*ta(e,t,n,r,a,s,o,h,p,l,c)+(u-p)*ta(e,t,n,r,a,s,o,h,f,l,c))}var aa=n(5638);const sa={kernelName:r.kpP,backendName:"cpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:s}=e,{x:o,segmentIds:i}=t,{numSegments:u}=s;(0,a.H)(o,"unsortedSegmentSum");const l=[],c=[],d=o.shape.length-i.shape.length;let p=i;for(let e=0;e<d;++e){const t=ct({inputs:{input:p},backend:n,attrs:{dim:e+1}});p=t,c.push(t)}for(let e=0;e<u;++e){const t=r.D5U.createScalarValue(e,"int32"),a=n.makeTensorInfo([],"int32",t),s=(0,et.Dg)({inputs:{a,b:p},backend:n}),i=(0,he.p)({inputs:{x:s},backend:n,attrs:{dtype:"float32"}}),u=(0,qe.Jp)({inputs:{a:i,b:o},backend:n}),d=Ye({inputs:{x:u},backend:n,attrs:{axis:0,keepDims:!1}});l.push(d),c.push(a),c.push(s),c.push(i),c.push(u),c.push(d)}const h=Bn({inputs:l,backend:n,attrs:{axis:0}});return c.forEach((e=>n.disposeIntermediateTensorInfo(e))),h}},ua=[R,D.fC,F,O,C.j4,M,P,W,B,L,z,H,X,Z,J,re,ae,se,oe,N,ie,le,de,pe,he.M,fe.y2,ge,xe.z,be,Se,$e,Te,Ee,Ne,Re,De,Fe,Oe,Me,Ue,Pe,We,Le,Ve,ze,Ge,He,je,Xe,Qe,d,Je,et.Kx,ut,lt.SX,dt,pt.Vu,yt,It,wt,St.Ao,Tt,Et,Nt,Dt,Ft,_t.Ce,Ot.V,p.I,Mt,ke,Pt,Bt,Vt,f,zt.zh,Gt.m3,jt,Xt.xM,Kt,Qt,en,rn,an,sn,cn,dn.eJ,pn,hn,fn,mn,gn,xn,bn,vn.u0,yn,wn,Tn,qe.f$,En.AF,Rn,An,_n,On.nP,Mn,Wn,Ln,Vn,Hn,b,jn.Iz,qn,Ie.O,mt,Yn,y,I,T,Zn,Qn,Jn,er,tr,nr,ar,sr.FY,ir,ur,pr,w.BP,fr,gr,br,ue.C6,$n,kr,Ir,Sr,$r,Er,Nr,Rr,Dr,Ar.cz,Fr,_r.MS,Mr,Pr,Br,Vr,Gr,gt.GR,Ze,jr,qr,Yr,Qr,Jr,U.b,sa,oa,ia,Pn];for(const e of ua)(0,r.wCN)(e)}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */,224:(e,t,n)=>{"use strict";n.d(t,{bk:()=>s,fC:()=>o});var r=n(2659),a=n(8166);
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
function s(e){const t=new Float32Array(e.length);for(let n=0;n<e.length;++n)t[n]=Math.abs(e[n]);return t}const o={kernelName:r.SYM,backendName:"cpu",kernelFunc:e=>{const{x:t}=e.inputs,n=e.backend;(0,a.H)(t,"abs");let o=new Float32Array(r.D5U.sizeFromShape(t.shape));return o=s(n.data.get(t.dataId).values),n.makeOutput(o,t.shape,t.dtype)}}},2779:(e,t,n)=>{"use strict";n.d(t,{EH:()=>o,IH:()=>u,j4:()=>l});var r=n(2659),a=n(3533),s=n(6205);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,a.b)(((e,t)=>e+t)),i=(0,s.H)(((e,t,n,r)=>({real:e+n,imag:t+r}))),u=(0,s.j)(r.mm_,o,i),l={kernelName:r.mm_,backendName:"cpu",kernelFunc:u}},8607:(e,t,n)=>{"use strict";n.d(t,{W:()=>a,i:()=>s});var r=n(2659);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a(e,t,n,a,s){const o=r.D5U.sizeFromShape(a),i=r.D5U.makeZerosTypedArray(s,n);for(let n=0;n<e.length;n++){const r=e[n];if(r<0)throw new Error("Input x must be non-negative!");r>=s||(i[r]+=o>0?t[n]:1)}return i}function s(e,t,n,a=!1){const s=e.shape[0],o=e.shape[1],i=(0,r.f3b)([s,n],t.dtype);for(let r=0;r<s;r++)for(let s=0;s<o;s++){const o=e.get(r,s);if(o<0)throw new Error("Input x must be non-negative!");o>=n||(a?i.set(1,r,o):t.size>0?i.set(i.get(r,o)+t.get(r,s),r,o):i.set(i.get(r,o)+1,r,o))}return i}},9258:(e,t,n)=>{"use strict";n.d(t,{M:()=>c,p:()=>l});var r=n(2659),a=n(3533),s=n(4391),o=n(6961),i=n(1775),u=n(2186);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function l(e){const{inputs:t,backend:n,attrs:c}=e,{x:d}=t,{dtype:p}=c;if("complex64"===p){if("complex64"===d.dtype)return(0,i.y)({inputs:{x:d},backend:n});const e=(0,s.l)(n,d.shape,d.dtype),t=l({inputs:{x:d},backend:n,attrs:{dtype:"float32"}}),r=(0,o.P)({inputs:{real:t,imag:e},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),r}if("complex64"===d.dtype){const e=(0,u.k)({inputs:{input:d},backend:n}),t=l({inputs:{x:e},backend:n,attrs:{dtype:p}});return n.disposeIntermediateTensorInfo(e),t}if(!r.D5U.hasEncodingLoss(d.dtype,p)){const e=(0,i.y)({inputs:{x:d},backend:n});return{dataId:e.dataId,shape:e.shape,dtype:p}}if("int32"===p){const e=n.data.get(d.dataId).values,t=Int32Array.from(e);return n.makeTensorInfo(d.shape,"int32",t)}if("bool"===p){const e=n.data.get(d.dataId).values,t=r.D5U.toTypedArray([0],d.dtype),[s,o]=(0,a.b)(((e,t)=>e!==t?1:0))(d.shape,[],e,t,"bool");return n.makeTensorInfo(o,"bool",s)}throw new Error(`Error in Cast: failed to cast ${d.dtype} to ${p}`)}const c={kernelName:r.RFZ,backendName:"cpu",kernelFunc:l}},4769:(e,t,n)=>{"use strict";n.d(t,{__:()=>o,y2:()=>u});var r=n(2659),a=n(8029),s=n(6738);
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
function r(e){const{inputs:t,backend:n}=e,{real:r,imag:a}=t,s=n.data.get(r.dataId).values,o=n.data.get(a.dataId).values,i=n.makeTensorInfo(r.shape,"complex64");return n.data.get(i.dataId).complexTensorInfos={real:n.makeTensorInfo(r.shape,"float32",s),imag:n.makeTensorInfo(a.shape,"float32",o)},i}n.d(t,{P:()=>r,z:()=>a});const a={kernelName:n(2659).Zz9,backendName:"cpu",kernelFunc:r}},8926:(e,t,n)=>{"use strict";n.d(t,{j:()=>a});var r=n(2659);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a(e,t,n,a){const s=r.D5U.getArrayFromDType(n,r.D5U.sizeFromShape(t));if(a&&"string"!==n){let t=0;e.forEach((e=>{const n=r.D5U.sizeFromShape(e.shape);s.set(e.vals,t),t+=n}))}else{let a=0;e.forEach((e=>{const o="string"===n?r.Wap.fromUint8ToStringArray(e.vals):e.vals;let i=0;for(let n=0;n<e.shape[0];++n){const r=n*t[1]+a;for(let t=0;t<e.shape[1];++t)s[r+t]=o[i++]}a+=e.shape[1]}))}return s}},7679:(e,t,n)=>{"use strict";n.d(t,{Dg:()=>i,Kx:()=>u,tW:()=>o});var r=n(2659),a=n(3533),s=n(6205);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,a.b)(((e,t)=>e===t?1:0)),i=(0,s.j)(r.hdR,o,null,"bool"),u={kernelName:r.hdR,backendName:"cpu",kernelFunc:i}},1211:(e,t,n)=>{"use strict";n.d(t,{Qq:()=>i,Ro:()=>o,SX:()=>u});var r=n(2659),a=n(8029),s=n(6738);
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
const o=(0,a.a)((e=>Math.exp(e))),i=(0,s.O)(r.NEP,o,"float32"),u={kernelName:r.NEP,backendName:"cpu",kernelFunc:i}},969:(e,t,n)=>{"use strict";n.d(t,{OF:()=>o,Vu:()=>u});var r=n(2659),a=n(8029),s=n(6738);
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
const o=(0,a.a)((e=>Math.expm1(e))),i=(0,s.O)(r.Y0y,o),u={kernelName:r.Y0y,backendName:"cpu",kernelFunc:i}},6574:(e,t,n)=>{"use strict";n.d(t,{Ao:()=>u,r6:()=>o});var r=n(2659),a=n(8029),s=n(6738);
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
const o=(0,a.a)((e=>Math.floor(e))),i=(0,s.O)(r.OR,o),u={kernelName:r.OR,backendName:"cpu",kernelFunc:i}},1820:(e,t,n)=>{"use strict";n.d(t,{m:()=>a});var r=n(2659);
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
 */function a(e,t,n,a,s,o,i,u,l){const c=(0,r.f3b)([a,o],n);for(let n=0;n<a;n++){const r=[];let a=0;for(let t=0;t<s;t++){const o=e[n*s+t];a+=o*i[t],r.push(o)}if(a<0||a>=l/o)throw new Error(`Invalid indices: ${r} does not index into ${u}`);for(let e=0;e<o;e++)c.values[n*o+e]=t.get(...t.indexToLoc(a*o+e))}return c}},4468:(e,t,n)=>{"use strict";n.d(t,{i:()=>a});var r=n(2659);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a(e,t,n){const a=(0,r.f3b)(n,e.dtype);for(let n=0;n<a.size;++n){const r=a.indexToLoc(n).slice(),s=r[0],o=r[2],i=t.locToIndex([s,o]);r[2]=t.values[i];const u=e.locToIndex(r);0<=u&&u<e.values.length&&(a.values[n]=e.values[u])}return a}},6272:(e,t,n)=>{"use strict";n.d(t,{Ce:()=>u,o:()=>o});var r=n(2659),a=n(3533),s=n(6205);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,a.b)(((e,t)=>e>t?1:0)),i=(0,s.j)(r.iZT,o,null,"bool"),u={kernelName:r.iZT,backendName:"cpu",kernelFunc:i}},6259:(e,t,n)=>{"use strict";n.d(t,{HL:()=>o,V:()=>u});var r=n(2659),a=n(3533),s=n(6205);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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
function r(e){const{inputs:t,backend:n}=e,{x:r}=t;return n.incRef(r.dataId),{dataId:r.dataId,shape:r.shape,dtype:r.dtype}}n.d(t,{I:()=>a,y:()=>r});const a={kernelName:n(2659).iJz,backendName:"cpu",kernelFunc:r}},8405:(e,t,n)=>{"use strict";n.d(t,{rO:()=>o,zh:()=>u});var r=n(2659),a=n(3533),s=n(6205);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,a.b)(((e,t)=>e<t?1:0)),i=(0,s.j)(r.vtC,o,null,"bool"),u={kernelName:r.vtC,backendName:"cpu",kernelFunc:i}},635:(e,t,n)=>{"use strict";n.d(t,{lx:()=>o,m3:()=>u});var r=n(2659),a=n(3533),s=n(6205);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,a.b)(((e,t)=>e<=t?1:0)),i=(0,s.j)(r.CAk,o,null,"bool"),u={kernelName:r.CAk,backendName:"cpu",kernelFunc:i}},1325:(e,t,n)=>{"use strict";n.d(t,{b:()=>a});var r=n(2659);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a(e,t,n){const a=(t-e)/(n-1),s=r.D5U.makeZerosTypedArray(n,"float32");s[0]=e;for(let e=1;e<s.length;e++)s[e]=s[e-1]+a;return s}},5223:(e,t,n)=>{"use strict";n.d(t,{vX:()=>o,xM:()=>u});var r=n(2659),a=n(8029),s=n(6738);
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
const o=(0,a.a)((e=>Math.log(e))),i=(0,s.O)(r.ZbH,o),u={kernelName:r.ZbH,backendName:"cpu",kernelFunc:i}},5126:(e,t,n)=>{"use strict";n.d(t,{B:()=>a});var r=n(2659);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a(e,t,n,a){const s=r.D5U.getTypedArrayFromDType(a,r.D5U.sizeFromShape(n));for(let n=0;n<s.length;++n){const r=n*t;let a=e[r];for(let n=0;n<t;++n){const t=e[r+n];(Number.isNaN(t)||t>a)&&(a=t)}s[n]=a}return s}},1717:(e,t,n)=>{"use strict";n.d(t,{eJ:()=>u,wS:()=>o});var r=n(2659),a=n(3533),s=n(6205);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,a.b)(((e,t)=>Math.max(e,t))),i=(0,s.j)(r.BMI,o),u={kernelName:r.BMI,backendName:"cpu",kernelFunc:i}},612:(e,t,n)=>{"use strict";n.d(t,{u0:()=>u,vP:()=>o});var r=n(2659),a=n(3533),s=n(6205);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,a.b)(((e,t)=>Math.min(e,t))),i=(0,s.j)(r.q8u,o),u={kernelName:r.q8u,backendName:"cpu",kernelFunc:i}},1917:(e,t,n)=>{"use strict";n.d(t,{$3:()=>o,Jp:()=>u,f$:()=>l});var r=n(2659),a=n(3533),s=n(6205);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,a.b)(((e,t)=>e*t)),i=(0,s.H)(((e,t,n,r)=>({real:e*n-t*r,imag:e*r+t*n}))),u=(0,s.j)(r.wYn,o,i),l={kernelName:r.wYn,backendName:"cpu",kernelFunc:u}},854:(e,t,n)=>{"use strict";n.d(t,{AF:()=>i,uC:()=>o});var r=n(2659),a=n(8166),s=n(1917);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function o(e,t,n){const a=r.D5U.createScalarValue(-1,n);return(0,s.$3)([],t,a,e,n)}const i={kernelName:r.kuV,backendName:"cpu",kernelFunc:function(e){const{inputs:t,backend:n}=e,{x:r}=t;(0,a.H)(r,"neg");const s=n.data.get(r.dataId).values,[i,u]=o(s,r.shape,r.dtype);return n.makeTensorInfo(u,r.dtype,i)}}},8584:(e,t,n)=>{"use strict";n.d(t,{Gj:()=>o,nP:()=>u});var r=n(2659),a=n(3533),s=n(6205);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,a.b)(((e,t)=>e!==t?1:0)),i=(0,s.j)(r.yQU,o,null,"bool"),u={kernelName:r.yQU,backendName:"cpu",kernelFunc:i}},9560:(e,t,n)=>{"use strict";n.d(t,{Iz:()=>i,Qg:()=>o});var r=n(2659),a=n(8166),s=n(4802);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function o(e,t,n,a){const[s,o]=r.Wap.computeOutAndReduceShapes(e,a),i=(0,r.x8V)(t,"int32"),u=r.D5U.makeZerosTypedArray(r.D5U.sizeFromShape(s),i),l=r.D5U.sizeFromShape(o);for(let e=0;e<u.length;++e){const t=e*l;let r=1;for(let e=0;e<l;++e)r*=n[t+e];u[e]=r}return{outVals:u,outShape:s,outDtype:i}}const i={kernelName:r.DlI,backendName:"cpu",kernelFunc:function(e){const{inputs:t,backend:n,attrs:i}=e,{x:u}=t,{axis:l,keepDims:c}=i;(0,a.H)(u,"prod");const d=u.shape.length,p=r.D5U.parseAxisParam(l,u.shape),h=r.Wap.getAxesPermutation(p,d);let f=p,m=u;const g=[];null!=h&&(m=(0,s.p)({inputs:{x:u},backend:n,attrs:{perm:h}}),g.push(m),f=r.Wap.getInnerMostAxes(f.length,d));const x=n.data.get(m.dataId).values,{outVals:b,outShape:v,outDtype:y}=o(m.shape,m.dtype,x,f);let k=v;return c&&(k=r.Wap.expandShapeToKeepDim(v,p)),g.forEach((e=>n.disposeIntermediateTensorInfo(e))),n.makeTensorInfo(k,y,b)}}},9230:(e,t,n)=>{"use strict";n.d(t,{b:()=>a});var r=n(2659);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
function r(e){const{inputs:t,backend:n}=e,{input:r}=t,a=n.data.get(r.dataId).complexTensorInfos.real,s=n.data.get(a.dataId).values;return n.makeTensorInfo(a.shape,a.dtype,s)}n.d(t,{O:()=>a,k:()=>r});const a={kernelName:n(2659).xJR,backendName:"cpu",kernelFunc:r}},7742:(e,t,n)=>{"use strict";n.d(t,{FY:()=>u,zd:()=>o});var r=n(2659),a=n(8029),s=n(6738);
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
const o=(0,a.a)((e=>1/Math.sqrt(e))),i=(0,s.O)(r.bV0,o),u={kernelName:r.bV0,backendName:"cpu",kernelFunc:i}},108:(e,t,n)=>{"use strict";n.d(t,{BP:()=>u,VY:()=>o,XD:()=>i});var r=n(2659),a=n(8029),s=n(6738);
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
const o=(0,a.a)((e=>1/(1+Math.exp(-e)))),i=(0,s.A)(r.a5O,(e=>1/(1+Math.exp(-e)))),u={kernelName:r.a5O,backendName:"cpu",kernelFunc:i}},2578:(e,t,n)=>{"use strict";n.d(t,{C6:()=>i,rT:()=>s,tP:()=>o});var r=n(2659),a=n(8166);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function s(e,t,n,a,s){const o=r.kuN.isSliceContinous(a,t,n),i=r.D5U.sizeFromShape(n),u=r.D5U.computeStrides(a);if(o){const n=r.kuN.computeFlatOffset(t,u);return"string"===s?e.slice(n,n+i):e.subarray(n,n+i)}const l="string"===s?r.Wap.fromUint8ToStringArray(e):e,c=(0,r.f3b)(a,s,l),d=(0,r.f3b)(n,s);for(let e=0;e<d.size;++e){const n=d.indexToLoc(e),r=n.map(((e,n)=>e+t[n]));d.set(c.get(...r),...n)}return"string"===s?r.Wap.fromStringArrayToUint8(d.values):d.values}function o(e){const{inputs:t,backend:n,attrs:o}=e,{x:i}=t,{begin:u,size:l}=o;(0,a.H)(i,"slice");const[c,d]=r.kuN.parseSliceParams(i,u,l);r.kuN.assertParamsValid(i,c,d);const p=s(n.data.get(i.dataId).values,c,d,i.shape,i.dtype);return n.makeTensorInfo(d,i.dtype,p)}const i={kernelName:r.p2w,backendName:"cpu",kernelFunc:o}},2123:(e,t,n)=>{"use strict";n.d(t,{c:()=>a});var r=n(2659);
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
 */function a(e,t,n,a,s,o,i){const u=t[0],l=o[0],c=new Array(l),d=new Array(u),p=t[1];if(0===l){if(0!==u)throw new Error(r.Wap.getSparseFillEmptyRowsIndicesDenseShapeMismatch(u));return[r.D5U.getArrayFromDType(n,0),[0,p],r.D5U.getArrayFromDType(s,0),c,d]}let h=!0,f=0;const m=new Array(l).fill(0);for(let t=0;t<u;++t){const n=e[t*p];if(n<0)throw new Error(r.Wap.getSparseFillEmptyRowsNegativeIndexErrorMessage(t,n));if(n>=l)throw new Error(r.Wap.getSparseFillEmptyRowsOutOfRangeIndexErrorMessage(t,n,l));++m[n],h=h&&n>=f,f=n}let g=!0;for(let e=0;e<l;++e){const t=0===m[e];c[e]=t,g=g&&!t,m[e]=Math.max(m[e],1),e>0&&(m[e]+=m[e-1])}if(g&&h){const t=e,n=a;for(let e=0;e<u;++e)d[e]=e;return[t,[u,p],n,c,d]}{const t=m[l-1],o=r.D5U.getArrayFromDType(n,t*p),h=r.D5U.getArrayFromDType(s,t),f=new Array(l).fill(0);for(let t=0;t<u;++t){const n=e[t*p],r=f[n],s=(0===n?0:m[n-1])+r;f[n]++;for(let n=0;n<p;++n)o[s*p+n]=e[t*p+n];h[s]=a[t],d[t]=s}for(let e=0;e<l;++e){if(0===f[e]){const t=0===e?0:m[e-1];o[t*p+0]=e;for(let e=1;e<p;++e)o[t*p+e]=0;h[t]=i}}return[o,[t,p],h,c,d]}}},3849:(e,t,n)=>{"use strict";n.d(t,{U:()=>a});var r=n(2659);
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
 */function a(e,t,n,a,s){const o=r.D5U.sizeFromShape(a),i=t[0],u=s.length,l=[];let c=1,d=-1;for(let e=0;e<u;++e){const t=s[e];if(-1===t){if(-1!==d)throw new Error(r.Wap.getSparseReshapeMultipleNegativeOneOutputDimErrorMessage(d,e));d=e,l.push(1)}else{if(t<0)throw new Error(r.Wap.getSparseReshapeNegativeOutputDimErrorMessage(e,t));c*=t,l.push(t)}}if(-1!==d){if(c<=0)throw new Error(r.Wap.getSparseReshapeEmptyTensorZeroOutputDimErrorMessage());const e=Math.trunc(o/c);if(c*e!==o)throw new Error(r.Wap.getSparseReshapeInputOutputMultipleErrorMessage(a,l));l[d]=e}if(r.D5U.sizeFromShape(l)!==o)throw new Error(r.Wap.getSparseReshapeInputOutputMismatchErrorMessage(a,l));const p=a.length,h=[];if(p>0){h[p-1]=1;for(let e=p-2;e>=0;--e)h[e]=h[e+1]*a[e+1]}const f=[];if(u>0){f[u-1]=1;for(let e=u-2;e>=0;--e)f[e]=f[e+1]*l[e+1]}const m=r.D5U.getArrayFromDType(n,i*u);for(let t=0;t<i;++t){let n=0;for(let r=0;r<p;++r)n+=e[t*p+r]*h[r];for(let e=0;e<u;++e)m[t*u+e]=Math.trunc(n/f[e]),n%=f[e]}return[m,[i,u],l]}},3989:(e,t,n)=>{"use strict";n.d(t,{V:()=>a});var r=n(2659);
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
 */function a(e,t,n,a,s,o=!1,i=0){const u=a.length,l=[t[0],e.length/t[0]],c=l[1],d=u>0?s[u-1]+1:0;if(d<0)throw new Error(r.Wap.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());const p=t.slice();p[0]=d;const h=p.reduce(((e,t)=>e*t),1),f=r.D5U.getArrayFromDType(n,h);if(0===u)return d>0&&f.fill(i),[f,p];if(d<=0)throw new Error(r.Wap.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());let m=0,g=1,x=0,b=s[m];for(;;){let t=0;if(g<u){if(t=s[g],b===t){++g;continue}if(b>=t)throw new Error(r.Wap.getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage())}if(b<0||b>=d)throw new Error(r.Wap.getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage(b,d));b>x&&f.fill(i,x*c,b*c);for(let t=m;t<g;++t){const n=a[t];if(n<0||n>=l[0])throw new Error(r.Wap.getSparseSegmentReductionIndicesOutOfRangeErrorMessage(t,a[t],l[0]));for(let t=0;t<c;t++)f[b*c+t]+=e[n*c+t]}if(o)for(let e=0;e<c;e++)f[b*c+e]/=g-m;if(m=g,++g,x=b+1,b=t,g>u)break}return x<d&&f.fill(i,x*c,d*c),[f,p]}},440:(e,t,n)=>{"use strict";n.d(t,{cz:()=>u,zT:()=>o});var r=n(2659),a=n(8029),s=n(6738);
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
const o=(0,a.a)((e=>Math.sqrt(e))),i=(0,s.A)(r.FKq,(e=>Math.sqrt(e))),u={kernelName:r.FKq,backendName:"cpu",kernelFunc:i}},212:(e,t,n)=>{"use strict";n.d(t,{Hz:()=>o,MS:()=>u});var r=n(2659),a=n(3533),s=n(6205);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,a.b)(((e,t)=>{const n=e-t;return n*n})),i=(0,s.j)(r._tC,o),u={kernelName:r._tC,backendName:"cpu",kernelFunc:i}},2210:(e,t,n)=>{"use strict";n.d(t,{t:()=>a});var r=n(2659);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a(e,t,n,a){const s=(0,r.f3b)(e,t.dtype);for(let e=0;e<s.size;e++){const r=s.indexToLoc(e),o=new Array(r.length);for(let e=0;e<o.length;e++)o[e]=r[e]*n[e]+a[e];s.set(t.get(...o),...r)}return s}},6841:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var r=n(2659);
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
 */class a{constructor(e,t,n,a,s,o){this.separator=r.D5U.encodeString(e),this.nGramWidths=t,this.leftPad=r.D5U.encodeString(n),this.rightPad=r.D5U.encodeString(a),this.padWidth=s,this.preserveShort=o}getPadWidth(e){return Math.min(this.padWidth<0?e-1:this.padWidth,e-1)}getNumNGrams(e,t){const n=this.getPadWidth(t);return Math.max(0,e+2*n-t+1)}createNGrams(e,t,n,r,a,s){for(let o=0;o<a;++o){const i=this.getPadWidth(s),u=Math.max(0,i-o),l=Math.max(0,i-(a-(o+1))),c=s-(u+l),d=t+(u>0?0:o-i);let p=0;p+=u*this.leftPad.length;for(let t=0;t<c;++t)p+=e[d+t].length;p+=l*this.rightPad.length;p+=(u+l+c-1)*this.separator.length,n[r+o]=new Uint8Array(p);const h=n[r+o];let f=0;const m=e=>e.forEach((e=>h[f++]=e));for(let e=0;e<u;++e)m(this.leftPad),m(this.separator);for(let t=0;t<c-1;++t)m(e[d+t]),m(this.separator);if(c>0){m(e[d+c-1]);for(let e=0;e<l;++e)m(this.separator),m(this.rightPad)}else{for(let e=0;e<l-1;++e)m(this.rightPad),m(this.separator);m(this.rightPad)}}}compute(e,t){const n=e.length,a=t.length;if(a>0){let e=t[0];if(0!==e)throw new Error(`First split value must be 0, got ${e}`);for(let r=1;r<a;++r){let a=t[r]>=e;if(a=a&&t[r]<=n,!a)throw new Error(`Invalid split value ${t[r]}, must be in [${e}, ${n}]`);e=t[r]}if(e!==n)throw new Error(`Last split value must be data size. Expected ${n}, got ${e}`)}const s=a-1,o=r.D5U.getArrayFromDType("int32",a);if(0===n||0===a){const e=new Array(n);for(let e=0;e<=s;++e)o[e]=0;return[e,o]}o[0]=0;for(let e=1;e<=s;++e){const n=t[e]-t[e-1];let r=0;this.nGramWidths.forEach((e=>{r+=this.getNumNGrams(n,e)})),this.preserveShort&&n>0&&0===r&&(r=1),o[e]=o[e-1]+r}const i=new Array(o[s]);for(let n=0;n<s;++n){const r=t[n];let a=o[n];if(this.nGramWidths.forEach((s=>{const o=t[n+1]-t[n],u=this.getNumNGrams(o,s);this.createNGrams(e,r,i,a,u,s),a+=u})),this.preserveShort&&a===o[n]){const s=t[n+1]-t[n];if(0===s)continue;const o=s+2*this.padWidth,u=1;this.createNGrams(e,r,i,a,u,o)}}return[i,o]}}function s(e,t,n,r,s,o,i,u){return new a(n,r,s,o,i,u).compute(e,t)}},8639:(e,t,n)=>{"use strict";n.d(t,{Q:()=>s});var r=n(2659);
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
 */function a(e,t,n,r){if(!e.length)return;if(0===t.length){for(let t=0;t<e.length;++t)r.push(e.subarray(t,t+1));return}if(1===t.length){const a=t[0];let s=e.indexOf(a);for(;-1!==s;){const t=e.subarray(0,s);n&&0===t.length||r.push(t),s=(e=e.subarray(s+1)).indexOf(a)}return void(n&&0===e.length||r.push(e))}let a=0;for(let s=0;s<e.length+1;s++)if(s===e.length||-1!==t.indexOf(e[s])){const t=e.subarray(a,s);n&&0===t.length||r.push(t),a=s+1}}function s(e,t,n){const s=e.length,o=[];let i=0,u=0;const l=new Array(s);for(let r=0;r<s;++r){const s=o.length;a(e[r],t,n,o);const c=o.length-s;l[r]=c,i+=c,u=Math.max(u,c)}const c=r.D5U.getArrayFromDType("int32",2*i),d=new Array(i),p=[s,u];let h=0;for(let e=0;e<s;++e)for(let t=0;t<l[e];++t)c[2*h]=e,c[2*h+1]=t,d[h]=o[h],++h;return[c,d,p]}},6626:(e,t,n)=>{"use strict";n.d(t,{h:()=>a});var r=n(2659);
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
 */function a(e,t){const n=r.D5U.getArrayFromDType("int32",e.length);for(let a=0;a<e.length;++a)n[a]=r.D5U.fingerPrint64(e[a]).modulo(t).getLowBitsUnsigned();return n}},1649:(e,t,n)=>{"use strict";n.d(t,{GR:()=>l,VY:()=>o,lu:()=>u});var r=n(2659),a=n(3533),s=n(6205);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,a.b)(((e,t)=>e-t)),i=(0,s.H)(((e,t,n,r)=>({real:e-n,imag:t-r}))),u=(0,s.j)(r.Tr8,o,i),l={kernelName:r.Tr8,backendName:"cpu",kernelFunc:u}},7723:(e,t,n)=>{"use strict";n.d(t,{R:()=>a});var r=n(2659);
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
 */function a(e,t){const n=new Array(e.rank);for(let r=0;r<n.length;r++)n[r]=e.shape[r]*t[r];const a=(0,r.f3b)(n,e.dtype);for(let t=0;t<a.values.length;++t){const n=a.indexToLoc(t),r=new Array(e.rank);for(let t=0;t<r.length;t++)r[t]=n[t]%e.shape[t];const s=e.locToIndex(r);a.values[t]=e.values[s]}return a}},9556:(e,t,n)=>{"use strict";n.d(t,{W:()=>o});var r=n(2659);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const a=(e,t)=>{const n=t.value-e.value;return 0===n?e.index-t.index:n};function s(e,t,n=0,o=e.length-1){for(;o>n;){if(o-n>600){const r=o-n+1,a=t-n+1,i=Math.log(r),u=.5*Math.exp(2*i/3),l=.5*Math.sqrt(i*u*(r-u)/r)*Math.sign(a-r/2);s(e,t,Math.max(n,Math.floor(t-a*u/r+l)),Math.min(o,Math.floor(t+(r-a)*u/r+l)))}const i=e[t];let u=n,l=o;for(r.D5U.swap(e,n,t),a(e[o],i)>0&&r.D5U.swap(e,n,o);u<l;){for(r.D5U.swap(e,u,l),u++,l--;a(e[u],i)<0;)u+=1;for(;a(e[l],i)>0;)l-=1}0===a(e[n],i)?r.D5U.swap(e,n,l):(l+=1,r.D5U.swap(e,l,o)),l<=t&&(n=l+1),t<=l&&(o=l-1)}}function o(e,t,n,o,i){const u=t[t.length-1],[l,c]=[e.length/u,u],d=r.D5U.getTypedArrayFromDType(n,l*o),p=r.D5U.getTypedArrayFromDType("int32",l*o);for(let t=0;t<l;t++){const n=t*c,r=e.subarray(n,n+c);let u=new Array(r.length);r.forEach(((e,t)=>u[t]={value:e,index:t})),o<u.length&&(s(u,o),u=u.slice(0,o)),i&&u.sort(a);const l=t*o,h=d.subarray(l,l+o),f=p.subarray(l,l+o);for(let e=0;e<o;e++)h[e]=u[e].value,f[e]=u[e].index}const h=t.slice();return h[h.length-1]=o,[(0,r.f3b)(h,n,d),(0,r.f3b)(h,"int32",p)]}},4802:(e,t,n)=>{"use strict";n.d(t,{b:()=>i,p:()=>o});var r=n(2659),a=n(8166),s=n(7107);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function o(e){const{inputs:t,attrs:n,backend:r}=e,{x:o}=t,{perm:i}=n;(0,a.H)(o,"transpose");const u=o.shape.length,l=new Array(u);for(let e=0;e<l.length;e++)l[e]=o.shape[i[e]];const c=r.data.get(o.dataId).values,d=(0,s.H)(c,o.shape,o.dtype,i,l);return{dataId:r.write(d,l,o.dtype),shape:l,dtype:o.dtype}}const i={kernelName:r.G3Y,backendName:"cpu",kernelFunc:o}},7107:(e,t,n)=>{"use strict";n.d(t,{H:()=>a});var r=n(2659);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a(e,t,n,a,s){const o=t.length,i=r.D5U.sizeFromShape(t),u=r.D5U.computeStrides(t),l=r.D5U.computeStrides(s),c=r.D5U.getTypedArrayFromDType(n,r.D5U.sizeFromShape(s));for(let t=0;t<i;++t){const n=r.D5U.indexToLoc(t,o,u),s=new Array(n.length);for(let e=0;e<s.length;e++)s[e]=n[a[e]];c[r.D5U.locToIndex(s,o,l)]=e[t]}return c}},5638:(e,t,n)=>{"use strict";n.d(t,{S:()=>a});var r=n(2659);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a(e,t,n,a){const s=r.D5U.parseAxisParam(t,n)[0],o=[1,n[0],1];for(let e=0;e<s;e++)o[0]*=n[e];o[1]=n[s];for(let e=s+1;e<n.length;e++)o[2]*=n[e];const i={},u=new Int32Array(n[s]),l=new r.YDk(o,a,e),c=[],d=1===o[0]&&1===o[2];for(let t=0;t<n[s];t++){let n;if(d)n=e[t].toString();else{const e=[];for(let n=0;n<o[0];n++)for(let r=0;r<o[2];r++)e.push(l.get(n,t,r));n=e.join(",")}if(void 0!==i[n])u[t]=i[n];else{const e=Object.keys(i).length;i[n]=e,u[t]=e,c.push(t)}}const p=o.slice();p[1]=Object.keys(i).length;const h=new r.YDk(p,a);c.forEach(((e,t)=>{for(let n=0;n<o[0];n++)for(let r=0;r<o[2];r++)h.set(l.get(n,e,r),n,t,r)}));const f=n.slice();return f[s]=p[1],{outputValues:h.values,outputShape:f,indices:u}}},5226:(e,t,n)=>{"use strict";n.r(t),n.d(t,{addImpl:()=>a.EH,bincountImpl:()=>s.W,bincountReduceImpl:()=>s.i,ceilImpl:()=>o.__,concatImpl:()=>i.j,equalImpl:()=>u.tW,expImpl:()=>l.Ro,expm1Impl:()=>c.OF,floorImpl:()=>d.r6,gatherNdImpl:()=>p.m,gatherV2Impl:()=>h.i,greaterEqualImpl:()=>m.HL,greaterImpl:()=>f.o,lessEqualImpl:()=>x.lx,lessImpl:()=>g.rO,linSpaceImpl:()=>b.b,logImpl:()=>v.vX,maxImpl:()=>y.B,maximumImpl:()=>k.wS,minimumImpl:()=>I.vP,multiplyImpl:()=>w.$3,negImpl:()=>S.uC,notEqualImpl:()=>C.Gj,prodImpl:()=>$.Qg,rangeImpl:()=>T.b,rsqrtImpl:()=>E.zd,sigmoidImpl:()=>N.VY,simpleAbsImpl:()=>r.bk,sliceImpl:()=>R.rT,sparseFillEmptyRowsImpl:()=>D.c,sparseReshapeImpl:()=>A.U,sparseSegmentReductionImpl:()=>F.V,sqrtImpl:()=>_.zT,squaredDifferenceImpl:()=>O.Hz,stridedSliceImpl:()=>M.t,stringNGramsImpl:()=>U.A,stringSplitImpl:()=>P.Q,stringToHashBucketFastImpl:()=>W.h,subImpl:()=>B.VY,tileImpl:()=>L.R,topKImpl:()=>V.W,transposeImpl:()=>z.H,uniqueImpl:()=>G.S});var r=n(224),a=n(2779),s=n(8607),o=n(4769),i=n(8926),u=n(7679),l=n(1211),c=n(969),d=n(6574),p=n(1820),h=n(4468),f=n(6272),m=n(6259),g=n(8405),x=n(635),b=n(1325),v=n(5223),y=n(5126),k=n(1717),I=n(612),w=n(1917),S=n(854),C=n(8584),$=n(9560),T=n(9230),E=n(7742),N=n(108),R=n(2578),D=n(2123),A=n(3849),F=n(3989),_=n(440),O=n(212),M=n(2210),U=n(6841),P=n(8639),W=n(6626),B=n(1649),L=n(7723),V=n(9556),z=n(7107),G=n(5638)}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */,3533:(e,t,n)=>{"use strict";n.d(t,{b:()=>a});var r=n(2659);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a(e){return(t,n,a,s,o)=>{const i=r.Wap.assertAndGetBroadcastShape(t,n),u=i.length,l=r.D5U.computeStrides(i),c=r.D5U.sizeFromShape(i),d=r.D5U.getTypedArrayFromDType(o,c),p=t.length,h=n.length,f=r.D5U.computeStrides(t),m=r.D5U.computeStrides(n),g=r.Wap.getBroadcastDims(t,i),x=r.Wap.getBroadcastDims(n,i);if(g.length+x.length===0)for(let t=0;t<d.length;++t)d[t]=e(a[t%a.length],s[t%s.length]);else for(let t=0;t<d.length;++t){const n=r.D5U.indexToLoc(t,u,l),o=n.slice(-p);g.forEach((e=>o[e]=0));const i=r.D5U.locToIndex(o,p,f),c=n.slice(-h);x.forEach((e=>c[e]=0));const b=r.D5U.locToIndex(c,h,m);d[t]=e(a[i],s[b])}return[d,i]}}},6205:(e,t,n)=>{"use strict";n.d(t,{H:()=>u,j:()=>i});var r=n(2659),a=n(8166),s=n(9258),o=n(6961);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function i(e,t,n,i){return null==n?({inputs:n,backend:s})=>{const{a:o,b:u}=n,l=s;(0,a.H)([o,u],e);const c=l.data.get(o.dataId).values,d=l.data.get(u.dataId).values,p="string"===o.dtype?r.Wap.fromUint8ToStringArray(c):c,h="string"===o.dtype?r.Wap.fromUint8ToStringArray(d):d,f=i||o.dtype,[m,g]=t(o.shape,u.shape,p,h,f);return l.makeTensorInfo(g,f,m)}:({inputs:e,backend:r})=>{const{a,b:u}=e,l=r;if("complex64"===a.dtype||"complex64"===u.dtype){const e=(0,s.p)({inputs:{x:a},backend:l,attrs:{dtype:"complex64"}}),t=l.data.get(e.dataId),r=t.complexTensorInfos.real,i=t.complexTensorInfos.imag,c=l.data.get(r.dataId).values,d=l.data.get(i.dataId).values,p=(0,s.p)({inputs:{x:u},backend:l,attrs:{dtype:"complex64"}}),h=l.data.get(p.dataId),f=h.complexTensorInfos.real,m=h.complexTensorInfos.imag,g=l.data.get(f.dataId).values,x=l.data.get(m.dataId).values,[b,v,y]=n(a.shape,u.shape,c,d,g,x),k=l.makeTensorInfo(y,"float32",b),I=l.makeTensorInfo(y,"float32",v),w=(0,o.P)({inputs:{real:k,imag:I},backend:l});return l.disposeIntermediateTensorInfo(e),l.disposeIntermediateTensorInfo(p),l.disposeIntermediateTensorInfo(k),l.disposeIntermediateTensorInfo(I),w}{const e=l.data.get(a.dataId).values,n=l.data.get(u.dataId).values,r=i||a.dtype,[s,o]=t(a.shape,u.shape,e,n,r);return l.makeTensorInfo(o,r,s)}}}function u(e){return(t,n,a,s,o,i)=>{const u=r.Wap.assertAndGetBroadcastShape(t,n),l=r.D5U.sizeFromShape(u),c=u.length,d=r.D5U.computeStrides(u),p=r.D5U.getTypedArrayFromDType("float32",l),h=r.D5U.getTypedArrayFromDType("float32",l),f=r.Wap.getBroadcastDims(t,u),m=r.Wap.getBroadcastDims(n,u),g=r.Wap.mergeRealAndImagArrays(a,s),x=r.Wap.mergeRealAndImagArrays(o,i),b=t.length,v=r.D5U.computeStrides(t),y=n.length,k=r.D5U.computeStrides(n);if(f.length+m.length===0)for(let t=0;t<p.length;t++){const n=t%g.length,r=t%x.length,a=e(g[2*n],g[2*n+1],x[2*r],x[2*r+1]);p[t]=a.real,h[t]=a.imag}else for(let t=0;t<p.length;t++){const n=r.D5U.indexToLoc(t,c,d),a=n.slice(-b);f.forEach((e=>a[e]=0));const s=r.D5U.locToIndex(a,b,v),o=n.slice(-y);m.forEach((e=>o[e]=0));const i=r.D5U.locToIndex(o,y,k),u=e(g[2*s],g[2*s+1],x[2*i],x[2*i+1]);p[t]=u.real,h[t]=u.imag}return[p,h,u]}}},8029:(e,t,n)=>{"use strict";n.d(t,{a:()=>a});var r=n(2659);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a(e){return(t,n,a)=>{const s=r.D5U.getTypedArrayFromDType(n,t.length);for(let n=0;n<t.length;++n)s[n]=e(t[n],a);return s}}},6738:(e,t,n)=>{"use strict";n.d(t,{A:()=>s,O:()=>o});var r=n(2659),a=n(8166);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function s(e,t,n){return({inputs:s,attrs:o,backend:i})=>{const{x:u}=s;if((0,a.H)(u,e),"string"===u.dtype||"string"===n)throw new Error("unaryKernelFunc does not support string input/output");const l=i,c=l.data.get(u.dataId).values,d=r.D5U.sizeFromShape(u.shape),p=n||u.dtype,h=r.D5U.getArrayFromDType(p,d);for(let e=0;e<d;++e)h[e]=t(c[e],o);return l.makeTensorInfo(u.shape,p,h)}}function o(e,t,n){return({inputs:r,attrs:s,backend:o})=>{const{x:i}=r;if((0,a.H)(i,e),"string"===i.dtype||"string"===n)throw new Error("unaryKernelFunc does not support string input/output");const u=o,l=u.data.get(i.dataId).values,c=n||i.dtype,d=t(l,c,s);return u.makeTensorInfo(i.shape,c,d)}}},4391:(e,t,n)=>{"use strict";n.d(t,{l:()=>s});var r=n(2659),a=n(6961);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function s(e,t,n="float32"){if("complex64"===n){const n=s(e,t,"float32"),r=s(e,t,"float32");return(0,a.P)({inputs:{real:n,imag:r},backend:e})}const o=r.D5U.makeZerosTypedArray(r.D5U.sizeFromShape(t),n);return e.makeTensorInfo(t,n,o)}},8854:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GPGPUContext:()=>ct,MathBackendWebGL:()=>xn,forceHalfFloat:()=>vn,gpgpu_util:()=>a,setWebGLContext:()=>u,version_webgl:()=>bn,webgl:()=>yn,webgl_util:()=>r});var r={};n.r(r),n.d(r,{assertNotComplex:()=>de,bindCanvasToFramebuffer:()=>W,bindColorTextureToFramebuffer:()=>B,bindTextureToProgramUniformSampler:()=>P,bindTextureUnit:()=>_,bindVertexBufferToProgramAttribute:()=>F,callAndCheck:()=>x,canBeRepresented:()=>b,createFragmentShader:()=>I,createFramebuffer:()=>A,createProgram:()=>S,createStaticIndexBuffer:()=>E,createStaticVertexBuffer:()=>T,createTexture:()=>R,createVertexShader:()=>k,getBatchDim:()=>j,getExtensionOrThrow:()=>y,getFramebufferErrorMessage:()=>z,getMaxTexturesInShader:()=>re,getNumChannels:()=>N,getProgramUniformLocation:()=>U,getProgramUniformLocationOrThrow:()=>M,getRowsCols:()=>X,getShapeAs3D:()=>q,getTextureShapeFromLogicalShape:()=>K,getWebGLDisjointQueryTimerVersion:()=>ae,getWebGLErrorMessage:()=>v,getWebGLMaxTextureSize:()=>ee,hasExtension:()=>se,isCapableOfRenderingToFloatTexture:()=>ie,isDownloadFloatTextureEnabled:()=>ue,isReshapeFree:()=>Z,isWebGLFenceEnabled:()=>ce,isWebGLVersionEnabled:()=>oe,linkProgram:()=>C,resetMaxTextureSize:()=>te,resetMaxTexturesInShader:()=>ne,unbindColorTextureFromFramebuffer:()=>L,unbindTextureUnit:()=>O,validateFramebuffer:()=>V,validateProgram:()=>$,validateTextureSize:()=>D});var a={};n.r(a),n.d(a,{bindVertexProgramAttributeStreams:()=>nt,createBufferFromOutputTexture:()=>st,createFloat16MatrixTexture:()=>Ke,createFloat16PackedMatrixTexture:()=>tt,createFloat32MatrixTexture:()=>Xe,createIndexBuffer:()=>Ge,createPackedMatrixTexture:()=>Je,createUnsignedBytesMatrixTexture:()=>Ze,createVertexBuffer:()=>ze,createVertexShader:()=>Ve,downloadByteEncodedFloatMatrixFromOutputTexture:()=>it,downloadFloat32MatrixFromBuffer:()=>ot,downloadMatrixFromPackedOutputTexture:()=>lt,downloadPackedMatrixFromBuffer:()=>ut,getInternalFormatForFloat16MatrixTexture:()=>qe,getInternalFormatForFloat16PackedMatrixTexture:()=>et,getInternalFormatForFloat32MatrixTexture:()=>je,getInternalFormatForPackedMatrixTexture:()=>Qe,getInternalFormatForUnsignedBytesMatrixTexture:()=>Ye,uploadDenseMatrixToTexture:()=>rt,uploadPixelDataToTexture:()=>at});var s=n(2659);
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
const o={},i={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function u(e,t){o[e]=t}function l(e,t){if(!(e in o)||null!=t){const n=function(e,t){if(1!==e&&2!==e)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");const n=null==t?function(e){if("undefined"!=typeof OffscreenCanvas&&2===e)return new OffscreenCanvas(300,150);if("undefined"!=typeof document)return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}(e):t;if(n.addEventListener("webglcontextlost",(t=>{t.preventDefault(),delete o[e]}),!1),1===e)return n.getContext("webgl",i)||n.getContext("experimental-webgl",i);return n.getContext("webgl2",i)}(e,t);if(null===n)return console.log("Could not get context for WebGL version",e),null;o[e]=n}const n=o[e];return null==n||n.isContextLost()?(delete o[e],l(e)):(n.disable(n.DEPTH_TEST),n.disable(n.STENCIL_TEST),n.disable(n.BLEND),n.disable(n.DITHER),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SAMPLE_COVERAGE),n.enable(n.SCISSOR_TEST),n.enable(n.CULL_FACE),n.cullFace(n.BACK),o[e])}
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
var c,d,p;function h(e,t){return[t,e]}function f(e){const t=s.D5U.sizeFromShape(e),n=Math.ceil(t/4);return s.D5U.sizeToSquarishShape(n)}function m(e,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(e/2))]}function g(e,t){const n=e;let r,a,o,i,u,l,c,d,p,h;return 2===(0,s.OBj)().getNumber("WEBGL_VERSION")?(r=n.R32F,a=n.R16F,o=n.RGBA16F,i=n.RGBA32F,u=n.RED,c=4,d=1,p=n.HALF_FLOAT,h=n.FLOAT,l=n.RGBA8):(r=e.RGBA,a=e.RGBA,o=e.RGBA,i=n.RGBA,u=e.RGBA,c=4,d=4,p=null!=t?t.HALF_FLOAT_OES:null,h=e.FLOAT,l=e.RGBA),{internalFormatFloat:r,internalFormatHalfFloat:a,internalFormatPackedHalfFloat:o,internalFormatPackedFloat:i,textureFormatFloat:u,downloadTextureFormat:l,downloadUnpackNumChannels:c,defaultNumChannels:d,textureTypeHalfFloat:p,textureTypeFloat:h}}
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
function x(e,t){const n=t();return(0,s.OBj)().getBool("DEBUG")&&function(e){const t=e.getError();if(t!==e.NO_ERROR)throw new Error("WebGL Error: "+v(e,t))}(e),n}!function(e){e[e.DENSE=0]="DENSE",e[e.SHARED_BATCH=1]="SHARED_BATCH"}(c||(c={})),function(e){e[e.RENDER=0]="RENDER",e[e.UPLOAD=1]="UPLOAD",e[e.PIXELS=2]="PIXELS",e[e.DOWNLOAD=3]="DOWNLOAD"}(d||(d={})),function(e){e[e.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",e[e.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",e[e.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",e[e.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",e[e.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"}(p||(p={}));function b(e){return!!((0,s.OBj)().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||0===e||5.96e-8<Math.abs(e)&&Math.abs(e)<65504)}function v(e,t){switch(t){case e.NO_ERROR:return"NO_ERROR";case e.INVALID_ENUM:return"INVALID_ENUM";case e.INVALID_VALUE:return"INVALID_VALUE";case e.INVALID_OPERATION:return"INVALID_OPERATION";case e.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case e.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case e.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return`Unknown error code ${t}`}}function y(e,t){return G(e,(()=>e.getExtension(t)),'Extension "'+t+'" not supported on this browser.')}function k(e,t){const n=G(e,(()=>e.createShader(e.VERTEX_SHADER)),"Unable to create vertex WebGLShader.");if(x(e,(()=>e.shaderSource(n,t))),x(e,(()=>e.compileShader(n))),!1===e.getShaderParameter(n,e.COMPILE_STATUS))throw console.log(e.getShaderInfoLog(n)),new Error("Failed to compile vertex shader.");return n}function I(e,t){const n=G(e,(()=>e.createShader(e.FRAGMENT_SHADER)),"Unable to create fragment WebGLShader.");if(x(e,(()=>e.shaderSource(n,t))),x(e,(()=>e.compileShader(n))),!1===e.getShaderParameter(n,e.COMPILE_STATUS))throw function(e,t){const n=w.exec(t);if(null==n)return console.log(`Couldn't parse line number in error: ${t}`),void console.log(e);const r=+n[1],a=e.split("\n"),o=a.length.toString().length+2,i=a.map(((e,t)=>s.D5U.rightPad((t+1).toString(),o)+e));let u=0;for(let e=0;e<i.length;e++)u=Math.max(i[e].length,u);const l=i.slice(0,r-1),c=i.slice(r-1,r),d=i.slice(r);console.log(l.join("\n")),console.log(t.split("\n")[0]),console.log(`%c ${s.D5U.rightPad(c[0],u)}`,"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(d.join("\n"))}(t,e.getShaderInfoLog(n)),new Error("Failed to compile fragment shader.");return n}const w=/ERROR: [0-9]+:([0-9]+):/g;function S(e){return G(e,(()=>e.createProgram()),"Unable to create WebGLProgram.")}function C(e,t){if(x(e,(()=>e.linkProgram(t))),!1===e.getProgramParameter(t,e.LINK_STATUS))throw console.log(e.getProgramInfoLog(t)),new Error("Failed to link vertex and fragment shaders.")}function $(e,t){if(x(e,(()=>e.validateProgram(t))),!1===e.getProgramParameter(t,e.VALIDATE_STATUS))throw console.log(e.getProgramInfoLog(t)),new Error("Shader program validation failed.")}function T(e,t){const n=G(e,(()=>e.createBuffer()),"Unable to create WebGLBuffer");return x(e,(()=>e.bindBuffer(e.ARRAY_BUFFER,n))),x(e,(()=>e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW))),n}function E(e,t){const n=G(e,(()=>e.createBuffer()),"Unable to create WebGLBuffer");return x(e,(()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n))),x(e,(()=>e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW))),n}function N(){return 2===(0,s.OBj)().getNumber("WEBGL_VERSION")?1:4}function R(e){return G(e,(()=>e.createTexture()),"Unable to create WebGLTexture.")}function D(e,t){const n=(0,s.OBj)().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(e<=0||t<=0){throw new Error("Requested texture size "+`[${e}x${t}]`+" is invalid.")}if(e>n||t>n){throw new Error("Requested texture size "+`[${e}x${t}]`+" greater than WebGL maximum on this browser / GPU "+`[${n}x${n}]`+".")}}function A(e){return G(e,(()=>e.createFramebuffer()),"Unable to create WebGLFramebuffer.")}function F(e,t,n,r,a,s,o){const i=e.getAttribLocation(t,n);return-1!==i&&(x(e,(()=>e.bindBuffer(e.ARRAY_BUFFER,r))),x(e,(()=>e.vertexAttribPointer(i,a,e.FLOAT,!1,s,o))),x(e,(()=>e.enableVertexAttribArray(i))),!0)}function _(e,t,n){H(e,n),x(e,(()=>e.activeTexture(e.TEXTURE0+n))),x(e,(()=>e.bindTexture(e.TEXTURE_2D,t)))}function O(e,t){H(e,t),x(e,(()=>e.activeTexture(e.TEXTURE0+t))),x(e,(()=>e.bindTexture(e.TEXTURE_2D,null)))}function M(e,t,n){return G(e,(()=>e.getUniformLocation(t,n)),'uniform "'+n+'" not present in program.')}function U(e,t,n){return e.getUniformLocation(t,n)}function P(e,t,n,r){x(e,(()=>_(e,t,r))),x(e,(()=>e.uniform1i(n,r)))}function W(e){x(e,(()=>e.bindFramebuffer(e.FRAMEBUFFER,null))),x(e,(()=>e.viewport(0,0,e.canvas.width,e.canvas.height))),x(e,(()=>e.scissor(0,0,e.canvas.width,e.canvas.height)))}function B(e,t,n){x(e,(()=>e.bindFramebuffer(e.FRAMEBUFFER,n))),x(e,(()=>e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)))}function L(e,t){x(e,(()=>e.bindFramebuffer(e.FRAMEBUFFER,t))),x(e,(()=>e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,null,0)))}function V(e){const t=e.checkFramebufferStatus(e.FRAMEBUFFER);if(t!==e.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+z(e,t))}function z(e,t){switch(t){case e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case e.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return`unknown error ${t}`}}function G(e,t,n){const r=x(e,(()=>t()));if(null==r)throw new Error(n);return r}function H(e,t){const n=e.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,r=t+e.TEXTURE0;if(r<e.TEXTURE0||r>n){throw new Error(`textureUnit must be in ${`[gl.TEXTURE0, gl.TEXTURE${n}]`}.`)}}function j(e,t=2){return s.D5U.sizeFromShape(e.slice(0,e.length-t))}function X(e){if(0===e.length)throw Error("Cannot get rows and columns of an empty shape array.");return[e.length>1?e[e.length-2]:1,e[e.length-1]]}function q(e){let t=[1,1,1];return 0===e.length||1===e.length&&1===e[0]||(t=[j(e),...X(e)]),t}function K(e,t=!1){let n=(0,s.OBj)().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(t&&(n*=2,1===(e=e.map(((t,n)=>n>=e.length-2?s.D5U.nearestLargerEven(e[n]):e[n]))).length&&(e=[2,e[0]])),2!==e.length){const t=s.D5U.squeezeShape(e);e=t.newShape}let r=s.D5U.sizeFromShape(e);if(e.length<=1&&r<=n)return[1,r];if(2===e.length&&e[0]<=n&&e[1]<=n)return e;if(3===e.length&&e[0]*e[1]<=n&&e[2]<=n)return[e[0]*e[1],e[2]];if(3===e.length&&e[0]<=n&&e[1]*e[2]<=n)return[e[0],e[1]*e[2]];if(4===e.length&&e[0]*e[1]*e[2]<=n&&e[3]<=n)return[e[0]*e[1]*e[2],e[3]];if(4===e.length&&e[0]<=n&&e[1]*e[2]*e[3]<=n)return[e[0],e[1]*e[2]*e[3]];if(t){const t=j(e);let n=2,a=2;return e.length&&([n,a]=X(e)),r=t*(n/2)*(a/2),s.D5U.sizeToSquarishShape(r).map((e=>2*e))}return s.D5U.sizeToSquarishShape(r)}function Y(e){return e%2==0}function Z(e,t){if(e=e.slice(-2),t=t.slice(-2),s.D5U.arraysEqual(e,t))return!0;if(!e.length||!t.length)return!0;if(0===e[0]||0===e[1]||0===t[0]||0===t[1])return!0;if(e.length!==t.length){const n=e.slice(-1)[0],r=t.slice(-1)[0];if(n===r)return!0;if(Y(n)&&Y(r)&&(1===e[0]||1===t[0]))return!0}return e[1]===t[1]&&Y(e[0])&&Y(t[0])}let Q,J;function ee(e){if(null==Q){const t=l(e);Q=t.getParameter(t.MAX_TEXTURE_SIZE)}return Q}function te(){Q=null}function ne(){J=null}function re(e){if(null==J){const t=l(e);J=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,J)}function ae(e){if(0===e)return 0;let t;const n=l(e);return t=se(n,"EXT_disjoint_timer_query_webgl2")&&2===e?2:se(n,"EXT_disjoint_timer_query")?1:0,t}function se(e,t){return null!=e.getExtension(t)}function oe(e){try{if(null!=l(e))return!0}catch(e){return console.log("Error when getting WebGL context: ",e),!1}return!1}function ie(e){if(0===e)return!1;const t=l(e);if(1===e){if(!se(t,"OES_texture_float"))return!1}else if(!se(t,"EXT_color_buffer_float"))return!1;return le(t)}function ue(e){if(0===e)return!1;const t=l(e);if(1!==e){if(se(t,"EXT_color_buffer_float"))return le(t);const e="EXT_color_buffer_half_float";if(se(t,e)){const n=t.getExtension(e);return function(e,t){const n=g(e,t),r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r);const a=1,s=1;e.texImage2D(e.TEXTURE_2D,0,n.internalFormatHalfFloat,a,s,0,n.textureFormatFloat,n.textureTypeHalfFloat,null);const o=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0);const i=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(r),e.deleteFramebuffer(o),i}(t,n)}return!1}if(!se(t,"OES_texture_float"))return!1;if(!se(t,"WEBGL_color_buffer_float"))return!1;return le(t)}function le(e){const t=g(e),n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n);e.texImage2D(e.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);const r=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,r),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0);const a=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(n),e.deleteFramebuffer(r),a}function ce(e){if(2!==e)return!1;return null!=l(e).fenceSync}function de(e,t){Array.isArray(e)||(e=[e]),e.forEach((e=>{null!=e&&s.D5U.assert("complex64"!==e.dtype,(()=>`${t} does not support complex64 tensors in the WebGL backend.`))}))}
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
function he(){let e,t,n,r,a,o,i,u,l,c;return 2===(0,s.OBj)().getNumber("WEBGL_VERSION")?(e="#version 300 es",t="in",n="out",r="in",a="texture",o="outputColor",i="out vec4 outputColor;",u="\n      bool isnan_custom(float val) {\n        uint floatToUint = floatBitsToUint(val);\n        return (floatToUint & 0x7fffffffu) > 0x7f800000u;\n      }\n\n      bvec4 isnan_custom(vec4 val) {\n        return bvec4(isnan_custom(val.x),\n          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));\n      }\n\n      #define isnan(value) isnan_custom(value)\n    ",l="",c="\n      #define round(value) newRound(value)\n      int newRound(float value) {\n        return int(floor(value + 0.5));\n      }\n\n      ivec4 newRound(vec4 value) {\n        return ivec4(floor(value + vec4(0.5)));\n      }\n    "):(e="",t="attribute",n="varying",r="varying",a="texture2D",o="gl_FragColor",i="",u="\n      #define isnan(value) isnan_custom(value)\n      bool isnan_custom(float val) {\n        return (val > 0. || val < 1. || val == 0.) ? false : true;\n      }\n      bvec4 isnan_custom(vec4 val) {\n        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));\n      }\n    ",l="\n      uniform float INFINITY;\n\n      bool isinf(float val) {\n        return abs(val) == INFINITY;\n      }\n      bvec4 isinf(vec4 val) {\n        return equal(abs(val), vec4(INFINITY));\n      }\n    ",c="\n      int round(float value) {\n        return int(floor(value + 0.5));\n      }\n\n      ivec4 round(vec4 value) {\n        return ivec4(floor(value + vec4(0.5)));\n      }\n    "),{version:e,attribute:t,varyingVs:n,varyingFs:r,texture2D:a,output:o,defineOutput:i,defineSpecialNaN:u,defineSpecialInf:l,defineRound:c}}
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
function fe(e,t,n="index"){const r=s.D5U.computeStrides(t);return r.map(((t,a)=>`${`int ${e[a]} = ${n} / ${t}`}; ${a===r.length-1?`int ${e[a+1]} = ${n} - ${e[a]} * ${t}`:`index -= ${e[a]} * ${t}`};`)).join("")}function me(e,t,n="index"){const r=s.D5U.computeStrides(t);return r.map(((t,a)=>`${`int ${e[a]} = ${n} / outShapeStrides[${a}]`}; ${a===r.length-1?`int ${e[a+1]} = ${n} - ${e[a]} * outShapeStrides[${a}]`:`index -= ${e[a]} * outShapeStrides[${a}]`};`)).join("")}function ge(e,t,n="index"){const r=function(e,t){const n=e.length,r=e.map((e=>`${t}[${e}]`)),a=new Array(n-1);a[n-2]=r[n-1];for(let e=n-3;e>=0;--e)a[e]=`(${a[e+1]} * ${r[e+1]})`;return a}(e.map(((e,t)=>t)),t);return r.map(((t,a)=>`${`int ${e[a]} = ${n} / ${r[a]}`}; ${a===r.length-1?`int ${e[a+1]} = ${n} - ${e[a]} * ${r[a]}`:`index -= ${e[a]} * ${r[a]}`};`)).join("")}function xe(e){const t=s.D5U.computeStrides(e).map((e=>e.toString()));return`\n  int getFlatIndex(ivec3 coords) {\n    return coords.x * ${t[0]} + coords.y * ${t[1]} + coords.z;\n  }\n`}pe.registerFlag("HAS_WEBGL",(()=>pe.getNumber("WEBGL_VERSION")>0)),pe.registerFlag("WEBGL_VERSION",(()=>oe(2)?2:oe(1)?1:0)),pe.registerFlag("WEBGL_CHECK_NUMERICAL_PROBLEMS",(()=>!1)),pe.registerFlag("WEBGL_BUFFER_SUPPORTED",(()=>2===pe.get("WEBGL_VERSION"))),pe.registerFlag("WEBGL_CPU_FORWARD",(()=>!0)),pe.registerFlag("WEBGL_FORCE_F16_TEXTURES",(()=>!1)),pe.registerFlag("WEBGL_PACK",(()=>pe.getBool("HAS_WEBGL"))),pe.registerFlag("WEBGL_PACK_NORMALIZATION",(()=>pe.getBool("WEBGL_PACK"))),pe.registerFlag("WEBGL_PACK_CLIP",(()=>pe.getBool("WEBGL_PACK"))),pe.registerFlag("WEBGL_PACK_DEPTHWISECONV",(()=>pe.getBool("WEBGL_PACK"))),pe.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",(()=>pe.getBool("WEBGL_PACK"))),pe.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",(()=>pe.getBool("WEBGL_PACK"))),pe.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",(()=>pe.getBool("WEBGL_PACK"))),pe.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",(()=>pe.getBool("WEBGL_PACK"))),pe.registerFlag("WEBGL_PACK_REDUCE",(()=>pe.getBool("WEBGL_PACK"))),pe.registerFlag("WEBGL_LAZILY_UNPACK",(()=>pe.getBool("WEBGL_PACK"))),pe.registerFlag("WEBGL_CONV_IM2COL",(()=>pe.getBool("WEBGL_PACK"))),pe.registerFlag("WEBGL_MAX_TEXTURE_SIZE",(()=>ee(pe.getNumber("WEBGL_VERSION")))),pe.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",(()=>re(pe.getNumber("WEBGL_VERSION")))),pe.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",(()=>{const e=pe.getNumber("WEBGL_VERSION");return 0===e?0:ae(e)})),pe.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",(()=>pe.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&!s.C2$.isMobile())),pe.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",(()=>ie(pe.getNumber("WEBGL_VERSION")))),pe.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",(()=>!pe.getBool("WEBGL_FORCE_F16_TEXTURES")&&pe.getBool("WEBGL_RENDER_FLOAT32_CAPABLE"))),pe.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",(()=>ue(pe.getNumber("WEBGL_VERSION")))),pe.registerFlag("WEBGL_FENCE_API_ENABLED",(()=>ce(pe.getNumber("WEBGL_VERSION")))),pe.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",(()=>pe.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0)),pe.registerFlag("WEBGL_DELETE_TEXTURE_THRESHOLD",(()=>-1),(e=>{if(e<0&&-1!==e)throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${e}.`)})),pe.registerFlag("WEBGL_FLUSH_THRESHOLD",(()=>s.C2$.isMobile()?1:-1),(e=>{if(e<0&&-1!==e)throw new Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${e}.`)})),pe.registerFlag("CPU_HANDOFF_SIZE_THRESHOLD",(()=>128)),pe.registerFlag("WEBGL_USE_SHAPES_UNIFORMS",(()=>!1)),pe.registerFlag("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD",(()=>1e5)),pe.registerFlag("TOPK_K_CPU_HANDOFF_THRESHOLD",(()=>128));const be="\n  const float FLOAT_MAX = 1.70141184e38;\n  const float FLOAT_MIN = 1.17549435e-38;\n\n  lowp vec4 encode_float(highp float v) {\n    if (isnan(v)) {\n      return vec4(255, 255, 255, 255);\n    }\n\n    highp float av = abs(v);\n\n    if(av < FLOAT_MIN) {\n      return vec4(0.0, 0.0, 0.0, 0.0);\n    } else if(v > FLOAT_MAX) {\n      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;\n    } else if(v < -FLOAT_MAX) {\n      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;\n    }\n\n    highp vec4 c = vec4(0,0,0,0);\n\n    highp float e = floor(log2(av));\n    highp float m = exp2(fract(log2(av))) - 1.0;\n\n    c[2] = floor(128.0 * m);\n    m -= c[2] / 128.0;\n    c[1] = floor(32768.0 * m);\n    m -= c[1] / 32768.0;\n    c[0] = floor(8388608.0 * m);\n\n    highp float ebias = e + 127.0;\n    c[3] = floor(ebias / 2.0);\n    ebias -= c[3] * 2.0;\n    c[2] += floor(ebias) * 128.0;\n\n    c[3] += 128.0 * step(0.0, -v);\n\n    return c / 255.0;\n  }\n",{getBroadcastDims:ve}=s.Wap;function ye(e,t,n){const r=[];if(e.forEach((e=>{const t=s.D5U.sizeFromShape(e.shapeInfo.logicalShape);if(e.shapeInfo.isUniform?r.push(`uniform float ${e.name}${t>1?`[${t}]`:""};`):(r.push(`uniform sampler2D ${e.name};`),r.push(`uniform int offset${e.name};`)),n.enableShapeUniforms){const{uniformShape:t}=De(n.packedInputs,e.shapeInfo.logicalShape,e.shapeInfo.texShape);switch(t.length){case 1:r.push(`uniform int ${e.name}Shape;`);break;case 2:r.push(`uniform ivec2 ${e.name}Shape;`);break;case 3:r.push(`uniform ivec3 ${e.name}Shape;`);break;case 4:r.push(`uniform ivec4 ${e.name}Shape;`)}r.push(`uniform ivec2 ${e.name}TexShape;`)}})),n.enableShapeUniforms){switch(t.logicalShape.length){case 1:r.push("uniform int outShape;");break;case 2:r.push("uniform ivec2 outShape;"),r.push("uniform int outShapeStrides;");break;case 3:r.push("uniform ivec3 outShape;"),r.push("uniform ivec2 outShapeStrides;");break;case 4:r.push("uniform ivec4 outShape;"),r.push("uniform ivec3 outShapeStrides;")}r.push("uniform ivec2 outTexShape;")}n.customUniforms&&n.customUniforms.forEach((e=>{r.push(`uniform ${e.type} ${e.name}${e.arrayIndex?`[${e.arrayIndex}]`:""};`)}));const a=r.join("\n"),o=e.map((e=>function(e,t,n=!1,r){let a="";a+=n?Ie(e,r):ke(e,r);const o=e.shapeInfo.logicalShape,i=t.logicalShape;o.length<=i.length&&(a+=n?function(e,t){const n=e.name,r=n.charAt(0).toUpperCase()+n.slice(1),a="get"+r+"AtOutCoords",o=e.shapeInfo.logicalShape.length,i=t.logicalShape.length,u=ve(e.shapeInfo.logicalShape,t.logicalShape),l=Re(i),c=i-o;let d;const p=["x","y","z","w","u","v"];d=0===o?"":i<2&&u.length>=1?"coords = 0;":u.map((e=>`coords.${p[e+c]} = 0;`)).join("\n");let h="";h=i<2&&o>0?"coords":e.shapeInfo.logicalShape.map(((e,t)=>`coords.${p[t+c]}`)).join(", ");let f="return outputValue;";const m=1===s.D5U.sizeFromShape(e.shapeInfo.logicalShape),g=1===s.D5U.sizeFromShape(t.logicalShape);if(1!==o||m||g){if(m&&!g)f=1===i?"\n        return vec4(outputValue.x, outputValue.x, 0., 0.);\n      ":"\n        return vec4(outputValue.x);\n      ";else if(u.length){const e=o-2,t=o-1;u.indexOf(e)>-1&&u.indexOf(t)>-1?f="return vec4(outputValue.x);":u.indexOf(e)>-1?f="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":u.indexOf(t)>-1&&(f="return vec4(outputValue.xx, outputValue.zz);")}}else f="\n      return vec4(outputValue.xy, outputValue.xy);\n    ";return`\n    vec4 ${a}() {\n      ${l} coords = getOutputCoords();\n      ${d}\n      vec4 outputValue = get${r}(${h});\n      ${f}\n    }\n  `}(e,t):function(e,t){const n=e.name,r=n.charAt(0).toUpperCase()+n.slice(1),a="get"+r+"AtOutCoords",o=t.texShape,i=e.shapeInfo.texShape,u=e.shapeInfo.logicalShape.length,l=t.logicalShape.length;if(!e.shapeInfo.isUniform&&u===l&&null==e.shapeInfo.flatOffset&&s.D5U.arraysEqual(i,o))return`\n      float ${a}() {\n        return sampleTexture(${n}, resultUV);\n      }\n    `;const c=Re(l),d=ve(e.shapeInfo.logicalShape,t.logicalShape),p=l-u;let h;const f=["x","y","z","w","u","v"];h=0===u?"":l<2&&d.length>=1?"coords = 0;":d.map((e=>`coords.${f[e+p]} = 0;`)).join("\n");let m="";m=l<2&&u>0?"coords":e.shapeInfo.logicalShape.map(((e,t)=>`coords.${f[t+p]}`)).join(", ");return`\n    float ${a}() {\n      ${c} coords = getOutputCoords();\n      ${h}\n      return get${r}(${m});\n    }\n  `}(e,t));return a}(e,t,n.packedInputs,n.enableShapeUniforms))).join("\n"),i=t.texShape,u=he(),l=function(e){return`\n    float sampleTexture(sampler2D textureSampler, vec2 uv) {\n      return ${e.texture2D}(textureSampler, uv).r;\n    }\n  `}(u);let c,d,p=function(e){return`${e.version}\n    precision highp float;\n    precision highp int;\n    precision highp sampler2D;\n    ${e.varyingFs} vec2 resultUV;\n    ${e.defineOutput}\n    const vec2 halfCR = vec2(0.5, 0.5);\n\n    struct ivec5\n    {\n      int x;\n      int y;\n      int z;\n      int w;\n      int u;\n    };\n\n    struct ivec6\n    {\n      int x;\n      int y;\n      int z;\n      int w;\n      int u;\n      int v;\n    };\n\n    uniform float NAN;\n    ${e.defineSpecialNaN}\n    ${e.defineSpecialInf}\n    ${e.defineRound}\n\n    int imod(int x, int y) {\n      return x - y * (x / y);\n    }\n\n    int idiv(int a, int b, float sign) {\n      int res = a / b;\n      int mod = imod(a, b);\n      if (sign < 0. && mod != 0) {\n        res -= 1;\n      }\n      return res;\n    }\n\n    //Based on the work of Dave Hoskins\n    //https://www.shadertoy.com/view/4djSRW\n    #define HASHSCALE1 443.8975\n    float random(float seed){\n      vec2 p = resultUV * seed;\n      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);\n      p3 += dot(p3, p3.yzx + 19.19);\n      return fract((p3.x + p3.y) * p3.z);\n    }\n\n    ${we}\n    ${Se}\n    ${Ce}\n  `}(u);t.isPacked?(c=function(e,t,n){switch(e.length){case 0:return Te();case 1:return function(e,t,n){const r=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];if(1===r[0])return n?"\n      int getOutputCoords() {\n        return 2 * int(resultUV.x * ceil(float(outTexShape[1]) / 2.0));\n      }\n    ":`\n      int getOutputCoords() {\n        return 2 * int(resultUV.x * ${r[1]}.0);\n      }\n    `;if(1===r[1])return n?"\n      int getOutputCoords() {\n        return 2 * int(resultUV.y * ceil(float(outTexShape[0]) / 2.0));\n      }\n    ":`\n      int getOutputCoords() {\n        return 2 * int(resultUV.y * ${r[0]}.0);\n      }\n    `;if(n)return"\n    int getOutputCoords() {\n      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(packedTexShape[0], packedTexShape[1]));\n      return 2 * (resTexRC.x * packedTexShape[1] + resTexRC.y);\n    }\n  ";return`\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(${r[0]}, ${r[1]}));\n      return 2 * (resTexRC.x * ${r[1]} + resTexRC.y);\n    }\n  `}(0,t,n);case 2:return function(e,t,n){const r=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];if(s.D5U.arraysEqual(e,t))return n?"\n      ivec2 getOutputCoords() {\n        ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));\n        return 2 * ivec2(resultUV.yx * vec2(packedTexShape[0], packedTexShape[1]));\n      }\n    ":`\n      ivec2 getOutputCoords() {\n        return 2 * ivec2(resultUV.yx * vec2(${r[0]}, ${r[1]}));\n      }\n    `;const a=Math.ceil(e[1]/2);if(n)return"\n    ivec2 getOutputCoords() {\n      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));\n      int texelsInLogicalRow = int(ceil(float(outShape[1]) / 2.0));\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(packedTexShape[0], packedTexShape[1]));\n\n      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;\n      int r = 2 * (index / texelsInLogicalRow);\n      int c = imod(index, texelsInLogicalRow) * 2;\n\n      return ivec2(r, c);\n    }\n  ";return`\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(${r[0]}, ${r[1]}));\n\n      int index = resTexRC.x * ${r[1]} + resTexRC.y;\n      int r = 2 * (index / ${a});\n      int c = imod(index, ${a}) * 2;\n\n      return ivec2(r, c);\n    }\n  `}(e,t,n);case 3:return function(e,t,n){if(n)return"\n    ivec3 getOutputCoords() {\n      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));\n      int texelsInLogicalRow = int(ceil(float(outShape[2]) / 2.0));\n      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[1]) / 2.0));\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(packedTexShape[0], packedTexShape[1]));\n      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;\n\n      int b = index / texelsInBatch;\n      index -= b * texelsInBatch;\n\n      int r = 2 * (index / texelsInLogicalRow);\n      int c = imod(index, texelsInLogicalRow) * 2;\n\n      return ivec3(b, r, c);\n    }\n  ";const r=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],a=Math.ceil(e[2]/2),s=a*Math.ceil(e[1]/2);return`\n    ivec3 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(${r[0]}, ${r[1]}));\n      int index = resTexRC.x * ${r[1]} + resTexRC.y;\n\n      int b = index / ${s};\n      index -= b * ${s};\n\n      int r = 2 * (index / ${a});\n      int c = imod(index, ${a}) * 2;\n\n      return ivec3(b, r, c);\n    }\n  `}(e,t,n);default:return function(e,t,n){if(n)return"\n    ivec4 getOutputCoords() {\n      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(packedTexShape[0], packedTexShape[1]));\n      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;\n\n      int texelsInLogicalRow = int(ceil(float(outShape[3]) / 2.0));\n      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[2]) / 2.0));\n      int texelsInBatchN = texelsInBatch * outShape[1];\n\n      int b2 = index / texelsInBatchN;\n      index -= b2 * texelsInBatchN;\n\n      int b = index / texelsInBatch;\n      index -= b * texelsInBatch;\n\n      int r = 2 * (index / texelsInLogicalRow);\n      int c = imod(index, texelsInLogicalRow) * 2;\n\n      return ivec4(b2, b, r, c);\n    }\n  ";const r=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],a=Math.ceil(e[e.length-1]/2),s=a*Math.ceil(e[e.length-2]/2);let o=s,i="",u="b, r, c";for(let t=2;t<e.length-1;t++)o*=e[e.length-t-1],i=`\n      int b${t} = index / ${o};\n      index -= b${t} * ${o};\n    `+i,u=`b${t}, `+u;return`\n    ivec${e.length} getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(${r[0]}, ${r[1]}));\n      int index = resTexRC.x * ${r[1]} + resTexRC.y;\n\n      ${i}\n\n      int b = index / ${s};\n      index -= b * ${s};\n\n      int r = 2 * (index / ${a});\n      int c = imod(index, ${a}) * 2;\n\n      return ivec${e.length}(${u});\n    }\n  `}(e,t,n)}}(t.logicalShape,i,n.enableShapeUniforms),d=function(e){return`\n    void setOutput(vec4 val) {\n      ${e.output} = val;\n    }\n  `}(u)):(c=function(e,t,n){switch(e.length){case 0:return Te();case 1:return function(e,t,n){if(1===t[0])return n?"\n      int getOutputCoords() {\n        return int(resultUV.x * float(outTexShape[1]));\n      }\n    ":`\n      int getOutputCoords() {\n        return int(resultUV.x * ${t[1]}.0);\n      }\n    `;if(1===t[1])return n?"\n      int getOutputCoords() {\n        return int(resultUV.y * float(outTexShape[0]));\n      }\n    ":`\n      int getOutputCoords() {\n        return int(resultUV.y * ${t[0]}.0);\n      }\n    `;if(n)return"\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(outTexShape[0], outTexShape[1]));\n      return resTexRC.x * outTexShape[1] + resTexRC.y;\n    }\n  ";return`\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(${t[0]}, ${t[1]}));\n      return resTexRC.x * ${t[1]} + resTexRC.y;\n    }\n  `}(0,t,n);case 2:return function(e,t,n){if(s.D5U.arraysEqual(e,t))return n?"\n      ivec2 getOutputCoords() {\n        return ivec2(resultUV.yx * vec2(outTexShape[0], outTexShape[1]));\n      }\n    ":`\n      ivec2 getOutputCoords() {\n        return ivec2(resultUV.yx * vec2(${t[0]}, ${t[1]}));\n      }\n    `;if(1===e[1])return n?"\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(outTexShape[0], outTexShape[1]));\n        int index = resTexRC.x * outTexShape[1] + resTexRC.y;\n        return ivec2(index, 0);\n      }\n    ":`\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(${t[0]}, ${t[1]}));\n        int index = resTexRC.x * ${t[1]} + resTexRC.y;\n        return ivec2(index, 0);\n      }\n    `;if(1===e[0])return n?"\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(outTexShape[0], outTexShape[1]));\n        int index = resTexRC.x * outTexShape[1] + resTexRC.y;\n        return ivec2(0, index);\n      }\n    ":`\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(${t[0]}, ${t[1]}));\n        int index = resTexRC.x * ${t[1]} + resTexRC.y;\n        return ivec2(0, index);\n      }\n    `;if(n)return"\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(outTexShape[0], outTexShape[1]));\n      int index = resTexRC.x * outTexShape[1] + resTexRC.y;\n      int r = index / outShape[1];\n      int c = index - r * outShape[1];\n      return ivec2(r, c);\n    }\n  ";return`\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(${t[0]}, ${t[1]}));\n      int index = resTexRC.x * ${t[1]} + resTexRC.y;\n      int r = index / ${e[1]};\n      int c = index - r * ${e[1]};\n      return ivec2(r, c);\n    }\n  `}(e,t,n);case 3:return function(e,t,n){if(n){return`\n  ivec3 getOutputCoords() {\n    ivec2 resTexRC = ivec2(resultUV.yx *\n                           vec2(outTexShape[0], outTexShape[1]));\n    int index = resTexRC.x * outTexShape[1] + resTexRC.y;\n    ${me(["r","c","d"],e)}\n    return ivec3(r, c, d);\n  }\n`}const r=fe(["r","c","d"],e);return`\n    ivec3 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(${t[0]}, ${t[1]}));\n      int index = resTexRC.x * ${t[1]} + resTexRC.y;\n      ${r}\n      return ivec3(r, c, d);\n    }\n  `}(e,t,n);case 4:return function(e,t,n){if(n){return`\n    ivec4 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2(outTexShape[0], outTexShape[1]));\n      int index = resTexRC.x * outTexShape[1] + resTexRC.y;\n      ${me(["r","c","d","d2"],e)}\n      return ivec4(r, c, d, d2);\n    }\n  `}const r=fe(["r","c","d","d2"],e);return`\n    ivec4 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2(${t[0]}, ${t[1]}));\n      int index = resTexRC.x * ${t[1]} + resTexRC.y;\n      ${r}\n      return ivec4(r, c, d, d2);\n    }\n  `}(e,t,n);case 5:return function(e,t){const n=fe(["r","c","d","d2","d3"],e);return`\n    ivec5 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx * vec2(${t[0]},\n                             ${t[1]}));\n\n      int index = resTexRC.x * ${t[1]} + resTexRC.y;\n\n      ${n}\n\n      ivec5 outShape = ivec5(r, c, d, d2, d3);\n      return outShape;\n    }\n  `}(e,t);case 6:return function(e,t){const n=fe(["r","c","d","d2","d3","d4"],e);return`\n    ivec6 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2(${t[0]}, ${t[1]}));\n      int index = resTexRC.x * ${t[1]} + resTexRC.y;\n\n      ${n}\n\n      ivec6 result = ivec6(r, c, d, d2, d3, d4);\n      return result;\n    }\n  `}(e,t);default:throw new Error(`${e.length}-D output sampling is not yet supported`)}}(t.logicalShape,i,n.enableShapeUniforms),d=function(e){return`\n    void setOutput(float val) {\n      ${e.output} = vec4(val, 0, 0, 0);\n    }\n  `}(u)),n.packedInputs&&(p+=$e);return[p,l,d,a,c,o,n.userCode].join("\n")}function ke(e,t=!1){const n=e.shapeInfo.logicalShape;switch(n.length){case 0:return function(e,t){const n=e.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return`float ${r}() {return ${n};}`;const[a,s]=e.shapeInfo.texShape;if(1===a&&1===s)return`\n      float ${r}() {\n        return sampleTexture(${n}, halfCR);\n      }\n    `;const o=Ee(n);if(t)return`\n    float ${r}() {\n      vec2 uv = uvFromFlat(${n}TexShape[0], ${n}TexShape[1], ${o});\n      return sampleTexture(${n}, uv);\n    }\n  `;const[i,u]=e.shapeInfo.texShape;return`\n    float ${r}() {\n      vec2 uv = uvFromFlat(${i}, ${u}, ${o});\n      return sampleTexture(${n}, uv);\n    }\n  `}(e,t);case 1:return function(e,t){const n=e.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return`\n      float ${r}(int index) {\n        ${Ne(e)}\n      }\n    `;const a=e.shapeInfo.texShape,s=a[0],o=a[1];if(1===o&&1===s)return`\n      float ${r}(int index) {\n        return sampleTexture(${n}, halfCR);\n      }\n    `;const i=Ee(n);if(1===o)return t?`\n      float ${r}(int index) {\n        vec2 uv = vec2(0.5, (float(index + ${i}) + 0.5) / float(${n}TexShape[0]));\n        return sampleTexture(${n}, uv);\n      }\n    `:`\n      float ${r}(int index) {\n        vec2 uv = vec2(0.5, (float(index + ${i}) + 0.5) / ${s}.0);\n        return sampleTexture(${n}, uv);\n      }\n    `;if(1===s)return t?`\n      float ${r}(int index) {\n        vec2 uv = vec2((float(index + ${i}) + 0.5) / float(${n}TexShape[1]), 0.5);\n        return sampleTexture(${n}, uv);\n      }\n    `:`\n      float ${r}(int index) {\n        vec2 uv = vec2((float(index + ${i}) + 0.5) / ${o}.0, 0.5);\n        return sampleTexture(${n}, uv);\n      }\n    `;if(t)return`\n    float ${r}(int index) {\n      vec2 uv = uvFromFlat(${n}TexShape[0], ${n}TexShape[1], index + ${i});\n      return sampleTexture(${n}, uv);\n    }\n  `;return`\n    float ${r}(int index) {\n      vec2 uv = uvFromFlat(${s}, ${o}, index + ${i});\n      return sampleTexture(${n}, uv);\n    }\n  `}(e,t);case 2:return function(e,t){const n=e.shapeInfo.logicalShape,r=e.name,a="get"+r.charAt(0).toUpperCase()+r.slice(1),o=e.shapeInfo.texShape;if(null!=o&&s.D5U.arraysEqual(n,o)){if(t)return`\n      float ${a}(int row, int col) {\n        vec2 uv = (vec2(col, row) + halfCR) / vec2(${r}TexShape[1], ${r}TexShape[0]);\n        return sampleTexture(${r}, uv);\n      }\n    `;const e=o[0];return`\n    float ${a}(int row, int col) {\n      vec2 uv = (vec2(col, row) + halfCR) / vec2(${o[1]}.0, ${e}.0);\n      return sampleTexture(${r}, uv);\n    }\n  `}const{newShape:i,keptDims:u}=s.D5U.squeezeShape(n),l=i;if(l.length<n.length){const n=["row","col"];return`\n      ${ke(Ae(e,l),t)}\n      float ${a}(int row, int col) {\n        return ${a}(${Fe(n,u)});\n      }\n    `}if(e.shapeInfo.isUniform)return`\n      float ${a}(int row, int col) {\n        int index = round(dot(vec2(row, col), vec2(${n[1]}, 1)));\n        ${Ne(e)}\n      }\n    `;const c=o[0],d=o[1],p=Ee(r);if(1===d)return t?`\n      float ${a}(int row, int col) {\n        float index = dot(vec3(row, col, ${p}), vec3(${r}Shape[1], 1, 1));\n        vec2 uv = vec2(0.5, (index + 0.5) / float(${r}TexShape[0]));\n        return sampleTexture(${r}, uv);\n      }\n    `:`\n    float ${a}(int row, int col) {\n      float index = dot(vec3(row, col, ${p}), vec3(${n[1]}, 1, 1));\n      vec2 uv = vec2(0.5, (index + 0.5) / ${c}.0);\n      return sampleTexture(${r}, uv);\n    }\n  `;if(1===c)return t?`\n      float ${a}(int row, int col) {\n        float index = dot(vec3(row, col, ${p}), vec3(${r}Shape[1], 1, 1));\n        vec2 uv = vec2((index + 0.5) / float(${r}TexShape[1]), 0.5);\n        return sampleTexture(${r}, uv);\n      }\n    `:`\n    float ${a}(int row, int col) {\n      float index = dot(vec3(row, col, ${p}), vec3(${n[1]}, 1, 1));\n      vec2 uv = vec2((index + 0.5) / ${d}.0, 0.5);\n      return sampleTexture(${r}, uv);\n    }\n  `;if(t)return`\n      float ${a}(int row, int col) {\n        // Explicitly use integer operations as dot() only works on floats.\n        int index = row * ${r}Shape[1] + col + ${p};\n        vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], index);\n        return sampleTexture(${r}, uv);\n      }\n    `;return`\n  float ${a}(int row, int col) {\n    // Explicitly use integer operations as dot() only works on floats.\n    int index = row * ${n[1]} + col + ${p};\n    vec2 uv = uvFromFlat(${c}, ${d}, index);\n    return sampleTexture(${r}, uv);\n  }\n`}(e,t);case 3:return function(e,t){const n=e.shapeInfo.logicalShape,r=e.name,a="get"+r.charAt(0).toUpperCase()+r.slice(1),o=n[1]*n[2],i=n[2],{newShape:u,keptDims:l}=s.D5U.squeezeShape(n),c=u;if(c.length<n.length){const n=["row","col","depth"];return`\n        ${ke(Ae(e,c),t)}\n        float ${a}(int row, int col, int depth) {\n          return ${a}(${Fe(n,l)});\n        }\n      `}if(e.shapeInfo.isUniform)return`\n      float ${a}(int row, int col, int depth) {\n        int index = round(dot(vec3(row, col, depth),\n                          vec3(${o}, ${i}, 1)));\n        ${Ne(e)}\n      }\n    `;const d=e.shapeInfo.texShape,p=d[0],h=d[1],f=e.shapeInfo.flatOffset;if(h===o&&null==f)return t?`\n      float ${a}(int row, int col, int depth) {\n        int stride1 = ${r}Shape[2];\n        float texR = float(row);\n        float texC = dot(vec2(col, depth), vec2(stride1, 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(${r}TexShape[1], ${r}TexShape[0]);\n        return sampleTexture(${r}, uv);\n      }\n    `:`\n        float ${a}(int row, int col, int depth) {\n          float texR = float(row);\n          float texC = dot(vec2(col, depth), vec2(${i}, 1));\n          vec2 uv = (vec2(texC, texR) + halfCR) /\n                     vec2(${h}.0, ${p}.0);\n          return sampleTexture(${r}, uv);\n        }\n      `;if(h===i&&null==f)return t?`\n      float ${a}(int row, int col, int depth) {\n        float texR = dot(vec2(row, col), vec2(${r}Shape[1], 1));\n        float texC = float(depth);\n        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${r}TexShape[1], ${r}TexShape[0]);\n        return sampleTexture(${r}, uv);\n      }\n    `:`\n    float ${a}(int row, int col, int depth) {\n      float texR = dot(vec2(row, col), vec2(${n[1]}, 1));\n      float texC = float(depth);\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${h}.0, ${p}.0);\n      return sampleTexture(${r}, uv);\n    }\n  `;const m=Ee(r);if(t)return`\n    float ${a}(int row, int col, int depth) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int stride0 = ${r}Shape[1] * ${r}Shape[2];\n      int stride1 = ${r}Shape[2];\n      int index = row * ${o} + col * ${i} + depth + ${m};\n      vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], index);\n      return sampleTexture(${r}, uv);\n    }\n    `;return`\n      float ${a}(int row, int col, int depth) {\n        // Explicitly use integer operations as dot() only works on floats.\n        int index = row * ${o} + col * ${i} + depth + ${m};\n        vec2 uv = uvFromFlat(${p}, ${h}, index);\n        return sampleTexture(${r}, uv);\n      }\n  `}(e,t);case 4:return function(e,t){const n=e.shapeInfo.logicalShape,r=e.name,a="get"+r.charAt(0).toUpperCase()+r.slice(1),o=n[3],i=n[2]*o,u=n[1]*i,{newShape:l,keptDims:c}=s.D5U.squeezeShape(n);if(l.length<n.length){const n=["row","col","depth","depth2"];return`\n      ${ke(Ae(e,l),t)}\n      float ${a}(int row, int col, int depth, int depth2) {\n        return ${a}(${Fe(n,c)});\n      }\n    `}if(e.shapeInfo.isUniform)return`\n      float ${a}(int row, int col, int depth, int depth2) {\n        int index = round(dot(vec4(row, col, depth, depth2),\n                          vec4(${u}, ${i}, ${o}, 1)));\n        ${Ne(e)}\n      }\n    `;const d=e.shapeInfo.flatOffset,p=e.shapeInfo.texShape,h=p[0],f=p[1],m=`int stride2 = ${r}Shape[3];`,g=`int stride1 = ${r}Shape[2] * stride2;`,x=`int stride0 = ${r}Shape[1] * stride1;`;if(f===u&&null==d)return t?`\n      float ${a}(int row, int col, int depth, int depth2) {\n        ${m}\n        ${g}\n        float texR = float(row);\n        float texC =\n            dot(vec3(col, depth, depth2),\n                vec3(stride1, stride2, 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(${r}TexShape[1], ${r}TexShape[0]);\n        return sampleTexture(${r}, uv);\n      }\n    `:`\n      float ${a}(int row, int col, int depth, int depth2) {\n        float texR = float(row);\n        float texC =\n            dot(vec3(col, depth, depth2),\n                vec3(${i}, ${o}, 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(${f}.0, ${h}.0);\n        return sampleTexture(${r}, uv);\n      }\n    `;if(f===o&&null==d)return t?`\n      float ${a}(int row, int col, int depth, int depth2) {\n        float texR = dot(vec3(row, col, depth),\n                         vec3(${r}Shape[1] * ${r}Shape[2], ${r}Shape[2], 1));\n        float texC = float(depth2);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(${r}TexShape[1], ${r}TexShape[0]);\n        return sampleTexture(${r}, uv);\n      }\n    `:`\n      float ${a}(int row, int col, int depth, int depth2) {\n        float texR = dot(vec3(row, col, depth),\n                         vec3(${n[1]*n[2]}, ${n[2]}, 1));\n        float texC = float(depth2);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(${f}.0, ${h}.0);\n        return sampleTexture(${r}, uv);\n      }\n    `;const b=Ee(r);if(t)return`\n    float ${a}(int row, int col, int depth, int depth2) {\n      // Explicitly use integer operations as dot() only works on floats.\n      ${m}\n      ${g}\n      ${x}\n      int index = row * stride0 + col * stride1 +\n          depth * stride2 + depth2;\n      vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], index + ${b});\n      return sampleTexture(${r}, uv);\n    }\n  `;return`\n    float ${a}(int row, int col, int depth, int depth2) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * ${u} + col * ${i} +\n          depth * ${o} + depth2;\n      vec2 uv = uvFromFlat(${h}, ${f}, index + ${b});\n      return sampleTexture(${r}, uv);\n    }\n  `}(e,t);case 5:return function(e){const t=e.shapeInfo.logicalShape,n=e.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),a=t[4],o=t[3]*a,i=t[2]*o,u=t[1]*i,{newShape:l,keptDims:c}=s.D5U.squeezeShape(t);if(l.length<t.length){const t=["row","col","depth","depth2","depth3"];return`\n      ${ke(Ae(e,l))}\n      float ${r}(int row, int col, int depth, int depth2, int depth3) {\n        return ${r}(${Fe(t,c)});\n      }\n    `}if(e.shapeInfo.isUniform)return`\n      float ${r}(int row, int col, int depth, int depth2, int depth3) {\n        float index = dot(\n          vec4(row, col, depth, depth2),\n          vec4(${u}, ${i}, ${o}, ${a})) +\n          depth3;\n        ${Ne(e)}\n      }\n    `;const d=e.shapeInfo.flatOffset,p=e.shapeInfo.texShape,h=p[0],f=p[1];if(f===u&&null==d)return`\n      float ${r}(int row, int col, int depth, int depth2, int depth3) {\n        int texR = row;\n        float texC = dot(vec4(col, depth, depth2, depth3),\n                         vec4(${i}, ${o}, ${a}, 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(${f}.0, ${h}.0);\n        return sampleTexture(${n}, uv);\n      }\n    `;if(f===a&&null==d)return`\n      float ${r}(int row, int col, int depth, int depth2, int depth3) {\n        float texR = dot(\n          vec4(row, col, depth, depth2),\n          vec4(${t[1]*t[2]*t[3]},\n               ${t[2]*t[3]}, ${t[3]}, 1));\n        int texC = depth3;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(${f}.0, ${h}.0);\n        return sampleTexture(${n}, uv);\n      }\n    `;const m=Ee(n);return`\n    float ${r}(int row, int col, int depth, int depth2, int depth3) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * ${u} + col * ${i} + depth * ${o} +\n          depth2 * ${a} + depth3 + ${m};\n      vec2 uv = uvFromFlat(${h}, ${f}, index);\n      return sampleTexture(${n}, uv);\n    }\n  `}(e);case 6:return function(e){const t=e.shapeInfo.logicalShape,n=e.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),{newShape:a,keptDims:o}=s.D5U.squeezeShape(t);if(a.length<t.length){const t=["row","col","depth","depth2","depth3","depth4"];return`\n      ${ke(Ae(e,a))}\n      float ${r}(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        return ${r}(${Fe(t,o)});\n      }\n    `}const i=t[5],u=t[4]*i,l=t[3]*u,c=t[2]*l,d=t[1]*c;if(e.shapeInfo.isUniform)return`\n      float ${r}(int row, int col, int depth,\n                  int depth2, int depth3, int depth4) {\n        int index = round(dot(\n          vec4(row, col, depth, depth2),\n          vec4(${d}, ${c}, ${l}, ${u})) +\n          dot(\n            vec2(depth3, depth4),\n            vec2(${i}, 1)));\n        ${Ne(e)}\n      }\n    `;const p=e.shapeInfo.flatOffset,h=e.shapeInfo.texShape,f=h[0],m=h[1];if(m===d&&null==p)return`\n      float ${r}(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        int texR = row;\n        float texC = dot(vec4(col, depth, depth2, depth3),\n          vec4(${c}, ${l}, ${u}, ${i})) +\n               float(depth4);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(${m}.0, ${f}.0);\n        return sampleTexture(${n}, uv);\n      }\n    `;if(m===i&&null==p)return`\n      float ${r}(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        float texR = dot(vec4(row, col, depth, depth2),\n          vec4(${t[1]*t[2]*t[3]*t[4]},\n               ${t[2]*t[3]*t[4]},\n               ${t[3]*t[4]},\n               ${t[4]})) + float(depth3);\n        int texC = depth4;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(${m}.0, ${f}.0);\n        return sampleTexture(${n}, uv);\n      }\n    `;const g=Ee(n);return`\n    float ${r}(int row, int col, int depth,\n                  int depth2, int depth3, int depth4) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * ${d} + col * ${c} + depth * ${l} +\n          depth2 * ${u} + depth3 * ${i} + depth4 + ${g};\n      vec2 uv = uvFromFlat(${f}, ${m}, index);\n      return sampleTexture(${n}, uv);\n    }\n  `}(e);default:throw new Error(`${n.length}-D input sampling is not yet supported`)}}function Ie(e,t){switch(e.shapeInfo.logicalShape.length){case 0:return function(e){const t=e.name,n="get"+t.charAt(0).toUpperCase()+t.slice(1),r=he();return`\n    vec4 ${n}() {\n      return ${r.texture2D}(${t}, halfCR);\n    }\n  `}(e);case 1:return function(e,t){const n=e.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),a=e.shapeInfo.texShape,s=he();if(t)return`\n    vec4 ${r}(int index) {\n      ivec2 packedTexShape = ivec2(ceil(float(${n}TexShape[0]) / 2.0), ceil(float(${n}TexShape[1]) / 2.0));\n      vec2 uv = packedUVfrom1D(\n        packedTexShape[0], packedTexShape[1], index);\n      return ${s.texture2D}(${n}, uv);\n    }\n  `;const o=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)];return`\n    vec4 ${r}(int index) {\n      vec2 uv = packedUVfrom1D(\n        ${o[0]}, ${o[1]}, index);\n      return ${s.texture2D}(${n}, uv);\n    }\n  `}(e,t);case 2:return function(e,t){const n=e.shapeInfo.logicalShape,r=e.name,a="get"+r.charAt(0).toUpperCase()+r.slice(1),o=e.shapeInfo.texShape,i=o[0],u=o[1],l=he();if(null!=o&&s.D5U.arraysEqual(n,o))return t?`\n      vec4 ${a}(int row, int col) {\n        vec2 uv = (vec2(col, row) + halfCR) / vec2(${r}TexShape[1], ${r}TexShape[0]);\n\n        return ${l.texture2D}(${r}, uv);\n      }\n    `:`\n      vec4 ${a}(int row, int col) {\n        vec2 uv = (vec2(col, row) + halfCR) / vec2(${u}.0, ${i}.0);\n\n        return ${l.texture2D}(${r}, uv);\n      }\n    `;if(t)return`\n    vec4 ${a}(int row, int col) {\n      ivec2 packedTexShape = ivec2(ceil(float(${r}TexShape[0]) / 2.0), ceil(float(${r}TexShape[1]) / 2.0));\n      int valuesPerRow = int(ceil(float(${r}Shape[1]) / 2.0));\n      vec2 uv = packedUVfrom2D(valuesPerRow, packedTexShape[0], packedTexShape[1], row, col);\n      return ${l.texture2D}(${r}, uv);\n    }\n  `;const c=[Math.ceil(o[0]/2),Math.ceil(o[1]/2)],d=Math.ceil(n[1]/2);return`\n    vec4 ${a}(int row, int col) {\n      vec2 uv = packedUVfrom2D(${d}, ${c[0]}, ${c[1]}, row, col);\n      return ${l.texture2D}(${r}, uv);\n    }\n  `}(e,t);case 3:return function(e,t){const n=e.shapeInfo.logicalShape,r=e.name,a="get"+r.charAt(0).toUpperCase()+r.slice(1),s=e.shapeInfo.texShape,o=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)];if(1===n[0]){const r=[1,2],s=["b","row","col"];return`\n        ${Ie(Ae(e,n.slice(1)),t)}\n        vec4 ${a}(int b, int row, int col) {\n          return ${a}(${Fe(s,r)});\n        }\n      `}const i=he();if(t)return`\n    vec4 ${a}(int b, int row, int col) {\n      ivec2 packedTexShape = ivec2(ceil(float(${r}TexShape[0]) / 2.0), ceil(float(${r}TexShape[1]) / 2.0));\n      int valuesPerRow = int(ceil(float(${r}Shape[2]) / 2.0));\n      int texelsInBatch = valuesPerRow * int(ceil(float(${r}Shape[1]) / 2.0));\n      vec2 uv = packedUVfrom3D(\n        packedTexShape[0], packedTexShape[1], texelsInBatch, valuesPerRow, b, row, col);\n      return ${i.texture2D}(${r}, uv);\n    }\n  `;const u=o[0],l=o[1],c=Math.ceil(n[2]/2),d=c*Math.ceil(n[1]/2);return`\n    vec4 ${a}(int b, int row, int col) {\n      vec2 uv = packedUVfrom3D(\n        ${u}, ${l}, ${d}, ${c}, b, row, col);\n      return ${i.texture2D}(${r}, uv);\n    }\n  `}(e,t);default:return function(e,t){const n=e.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),a=he();if(t)return`\n    vec4 ${r}(int b2, int b, int row, int col) {\n      int valuesPerRow = int(ceil(float(${n}Shape[3]) / 2.0));\n      int texelsInBatch = valuesPerRow * int(ceil(float(${n}Shape[2]) / 2.0));\n      int index = b * texelsInBatch + (row / 2) * valuesPerRow + (col / 2);\n      texelsInBatch *= ${n}Shape[1];\n      index = b2 * texelsInBatch + index;\n      ivec2 packedTexShape = ivec2(ceil(float(${n}TexShape[0]) / 2.0), ceil(float(${n}TexShape[1]) / 2.0));\n      int texR = index / packedTexShape[1];\n      int texC = index - texR * packedTexShape[1];\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(packedTexShape[1], packedTexShape[0]); return ${a.texture2D}(${n}, uv);\n    }\n  `;const s=e.shapeInfo.logicalShape,o=s.length,i=e.shapeInfo.texShape,u=[Math.ceil(i[0]/2),Math.ceil(i[1]/2)],l=u[0],c=u[1],d=Math.ceil(s[o-1]/2);let p=d*Math.ceil(s[o-2]/2),h="int b, int row, int col",f=`b * ${p} + (row / 2) * ${d} + (col / 2)`;for(let e=2;e<o-1;e++)h=`int b${e}, `+h,p*=s[o-e-1],f=`b${e} * ${p} + `+f;return`\n    vec4 ${r}(${h}) {\n      int index = ${f};\n      int texR = index / ${c};\n      int texC = index - texR * ${c};\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${c}, ${l});\n      return ${a.texture2D}(${n}, uv);\n    }\n  `}(e,t)}}const we="\nvec2 uvFromFlat(int texNumR, int texNumC, int index) {\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\nvec2 packedUVfrom1D(int texNumR, int texNumC, int index) {\n  int texelIndex = index / 2;\n  int texR = texelIndex / texNumC;\n  int texC = texelIndex - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",Se="\nvec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,\n  int texNumC, int row, int col) {\n  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);\n  int texR = texelIndex / texNumC;\n  int texC = texelIndex - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",Ce="\nvec2 packedUVfrom3D(int texNumR, int texNumC,\n    int texelsInBatch, int texelsInLogicalRow, int b,\n    int row, int col) {\n  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",$e="\n  float getChannel(vec4 frag, vec2 innerDims) {\n    vec2 modCoord = mod(innerDims, 2.);\n    return modCoord.x == 0. ?\n      (modCoord.y == 0. ? frag.r : frag.g) :\n      (modCoord.y == 0. ? frag.b : frag.a);\n  }\n  float getChannel(vec4 frag, int dim) {\n    float modCoord = mod(float(dim), 2.);\n    return modCoord == 0. ? frag.r : frag.g;\n  }\n";function Te(){return"\n    int getOutputCoords() {\n      return 0;\n    }\n  "}function Ee(e){return`offset${e}`}function Ne(e){const t=e.name,n=s.D5U.sizeFromShape(e.shapeInfo.logicalShape);return n<2?`return ${t};`:`\n    for (int i = 0; i < ${n}; i++) {\n      if (i == index) {\n        return ${t}[i];\n      }\n    }\n  `}function Re(e){if(e<=1)return"int";if(2===e)return"ivec2";if(3===e)return"ivec3";if(4===e)return"ivec4";if(5===e)return"ivec5";if(6===e)return"ivec6";throw Error(`GPU for rank ${e} is not yet supported`)}function De(e,t,n){const{newShape:r,keptDims:a}=s.D5U.squeezeShape(t),o=t.length,i=e&&3===o&&1===t[0],u=i?t.slice(1):r,l=!e&&o>1&&!s.D5U.arraysEqual(t,n)&&r.length<o||i;return{useSqueezeShape:l,uniformShape:l?u:t,keptDims:a}}function Ae(e,t){const n=JSON.parse(JSON.stringify(e));return n.shapeInfo.logicalShape=t,n}function Fe(e,t){return t.map((t=>e[t])).join(", ")}function _e(e,t){if(e.length!==t.length)throw Error(`Binary was compiled with ${e.length} inputs, but was executed with ${t.length} inputs`);e.forEach(((e,n)=>{const r=e.logicalShape,a=t[n],o=a.shape;if(!s.D5U.arraysEqual(r,o))throw Error(`Binary was compiled with different shapes than the current args. Shapes ${r} and ${o} must match`);if(e.isUniform&&a.isUniform)return;const i=e.texShape,u=a.isUniform?null:a.texData.texShape;if(!s.D5U.arraysEqual(i,u))throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${i} and ${u} must match`)}))}function Oe(e){return(0,s.OBj)().getBool("WEBGL_USE_SHAPES_UNIFORMS")&&e<=4}
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
function Ve(e){const t=he();return k(e,`${t.version}\n    precision highp float;\n    ${t.attribute} vec3 clipSpacePos;\n    ${t.attribute} vec2 uv;\n    ${t.varyingVs} vec2 resultUV;\n\n    void main() {\n      gl_Position = vec4(clipSpacePos, 1);\n      resultUV = uv;\n    }`)}function ze(e){return T(e,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function Ge(e){return E(e,new Uint16Array([0,1,2,2,1,3]))}function He(e,t,n,r,a,o){D(t,n);const i=R(e),u=e.TEXTURE_2D;return x(e,(()=>e.bindTexture(u,i))),x(e,(()=>e.texParameteri(u,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE))),x(e,(()=>e.texParameteri(u,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE))),x(e,(()=>e.texParameteri(u,e.TEXTURE_MIN_FILTER,e.NEAREST))),x(e,(()=>e.texParameteri(u,e.TEXTURE_MAG_FILTER,e.NEAREST))),1===(0,s.OBj)().getNumber("WEBGL_VERSION")?x(e,(()=>e.texImage2D(u,0,r,t,n,0,a,o,null))):x(e,(()=>e.texStorage2D(u,1,r,t,n))),x(e,(()=>e.bindTexture(e.TEXTURE_2D,null))),{texture:i,texShape:[n,t]}}function je(e){return e.internalFormatFloat}function Xe(e,t,n,r){const[a,s]=h(t,n);return He(e,a,s,je(r),r.textureFormatFloat,e.FLOAT)}function qe(e){return e.internalFormatHalfFloat}function Ke(e,t,n,r){const[a,s]=h(t,n);return He(e,a,s,qe(r),r.textureFormatFloat,r.textureTypeHalfFloat)}function Ye(e){return e.downloadTextureFormat}function Ze(e,t,n,r){const[a,s]=h(t,n);return He(e,a,s,Ye(r),e.RGBA,e.UNSIGNED_BYTE)}function Qe(e){return e.internalFormatPackedFloat}function Je(e,t,n,r){const[a,s]=m(t,n);return He(e,a,s,Qe(r),e.RGBA,e.FLOAT)}function et(e){return e.internalFormatPackedHalfFloat}function tt(e,t,n,r){const[a,s]=m(t,n);return He(e,a,s,et(r),e.RGBA,r.textureTypeHalfFloat)}function nt(e,t,n){x(e,(()=>e.bindBuffer(e.ARRAY_BUFFER,n)));return F(e,t,"clipSpacePos",n,3,20,0)&&F(e,t,"uv",n,2,20,12)}function rt(e,t,n,r,a,o){let i,u,l;x(e,(()=>e.bindTexture(e.TEXTURE_2D,t))),a instanceof Uint8Array?(i=new Uint8Array(n*r*4),u=e.UNSIGNED_BYTE,l=e.RGBA):(i=new Float32Array(n*r*4),u=e.FLOAT,l=o.internalFormatPackedFloat),i.set(a),2===(0,s.OBj)().getNumber("WEBGL_VERSION")?x(e,(()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,n,r,e.RGBA,u,i))):x(e,(()=>e.texImage2D(e.TEXTURE_2D,0,l,n,r,0,e.RGBA,u,i))),x(e,(()=>e.bindTexture(e.TEXTURE_2D,null)))}function at(e,t,n){x(e,(()=>e.bindTexture(e.TEXTURE_2D,t))),n.data instanceof Uint8Array?2===(0,s.OBj)().getNumber("WEBGL_VERSION")?x(e,(()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,e.RGBA,e.UNSIGNED_BYTE,n.data))):x(e,(()=>e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n.width,n.height,0,e.RGBA,e.UNSIGNED_BYTE,n.data))):2===(0,s.OBj)().getNumber("WEBGL_VERSION")?x(e,(()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,e.RGBA,e.UNSIGNED_BYTE,n))):x(e,(()=>e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,n))),x(e,(()=>e.bindTexture(e.TEXTURE_2D,null)))}function st(e,t,n,r){const a=e.createBuffer();x(e,(()=>e.bindBuffer(e.PIXEL_PACK_BUFFER,a)));const s=16*t*n;return x(e,(()=>e.bufferData(e.PIXEL_PACK_BUFFER,s,e.STREAM_READ))),x(e,(()=>e.readPixels(0,0,n,t,e.RGBA,e.FLOAT,0))),x(e,(()=>e.bindBuffer(e.PIXEL_PACK_BUFFER,null))),a}function ot(e,t,n){const r=e,a=new Float32Array(n);return r.bindBuffer(r.PIXEL_PACK_BUFFER,t),r.getBufferSubData(r.PIXEL_PACK_BUFFER,0,a),r.bindBuffer(r.PIXEL_PACK_BUFFER,null),a}function it(e,t,n,r){const[a,s]=h(t,n),o=new Uint8Array(t*n*4);return x(e,(()=>e.readPixels(0,0,a,s,r.downloadTextureFormat,e.UNSIGNED_BYTE,o))),new Float32Array(o.buffer)}function ut(e,t,n,r,a,s,o,i){const u=e,l=new Float32Array(function(e,t){const[n,r]=m(e,t);return n*r*4}(s,o));return u.bindBuffer(u.PIXEL_PACK_BUFFER,t),u.getBufferSubData(u.PIXEL_PACK_BUFFER,0,l),u.bindBuffer(u.PIXEL_PACK_BUFFER,null),l}function lt(e,t,n){const r=new Float32Array(t*n*4);return x(e,(()=>e.readPixels(0,0,n,t,e.RGBA,e.FLOAT,r))),r}
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
class ct{constructor(e){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];const t=(0,s.OBj)().getNumber("WEBGL_VERSION");null!=e?(this.gl=e,u(t,e)):this.gl=l(t);let n="WEBGL_color_buffer_float";const r="EXT_color_buffer_half_float";if(1===(0,s.OBj)().getNumber("WEBGL_VERSION")){const e="OES_texture_float",t="OES_texture_half_float";if(this.textureFloatExtension=y(this.gl,e),se(this.gl,t))this.textureHalfFloatExtension=y(this.gl,t);else if((0,s.OBj)().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(n),se(this.gl,r))this.colorBufferHalfFloatExtension=y(this.gl,r);else if((0,s.OBj)().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(n="EXT_color_buffer_float",se(this.gl,n))this.colorBufferFloatExtension=this.gl.getExtension(n);else{if(!se(this.gl,r))throw new Error("GL context does not support color renderable floats");this.colorBufferHalfFloatExtension=this.gl.getExtension(r)}this.vertexBuffer=ze(this.gl),this.indexBuffer=Ge(this.gl),this.framebuffer=A(this.gl),this.textureConfig=g(this.gl,this.textureHalfFloatExtension)}get debug(){return(0,s.OBj)().getBool("DEBUG")}dispose(){if(this.disposed)return;null!=this.program&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),null!=this.outputTexture&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");const e=this.gl;x(e,(()=>e.finish())),x(e,(()=>e.bindFramebuffer(e.FRAMEBUFFER,null))),x(e,(()=>e.deleteFramebuffer(this.framebuffer))),x(e,(()=>e.bindBuffer(e.ARRAY_BUFFER,null))),x(e,(()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null))),x(e,(()=>e.deleteBuffer(this.indexBuffer))),this.disposed=!0}createFloat32MatrixTexture(e,t){return this.throwIfDisposed(),Xe(this.gl,e,t,this.textureConfig)}createFloat16MatrixTexture(e,t){return this.throwIfDisposed(),Ke(this.gl,e,t,this.textureConfig)}createUnsignedBytesMatrixTexture(e,t){return this.throwIfDisposed(),Ze(this.gl,e,t,this.textureConfig)}uploadPixelDataToTexture(e,t){this.throwIfDisposed(),at(this.gl,e,t)}uploadDenseMatrixToTexture(e,t,n,r){this.throwIfDisposed(),rt(this.gl,e,t,n,r,this.textureConfig)}createFloat16PackedMatrixTexture(e,t){return this.throwIfDisposed(),tt(this.gl,e,t,this.textureConfig)}createPackedMatrixTexture(e,t){return this.throwIfDisposed(),Je(this.gl,e,t,this.textureConfig)}deleteMatrixTexture(e){this.throwIfDisposed(),this.outputTexture===e&&(L(this.gl,this.framebuffer),this.outputTexture=null),x(this.gl,(()=>this.gl.deleteTexture(e)))}downloadByteEncodedFloatMatrixFromOutputTexture(e,t,n){return this.downloadMatrixDriver(e,(()=>it(this.gl,t,n,this.textureConfig)))}downloadPackedMatrixFromBuffer(e,t,n,r,a,s){return ut(this.gl,e,0,0,0,a,s,this.textureConfig)}downloadFloat32MatrixFromBuffer(e,t){return ot(this.gl,e,t)}createBufferFromTexture(e,t,n){this.bindTextureToFrameBuffer(e);const r=st(this.gl,t,n,this.textureConfig);return this.unbindTextureToFrameBuffer(),r}createAndWaitForFence(){const e=this.createFence(this.gl);return this.pollFence(e)}createFence(e){let t,n;if((0,s.OBj)().getBool("WEBGL_FENCE_API_ENABLED")){const r=e,a=r.fenceSync(r.SYNC_GPU_COMMANDS_COMPLETE,0);e.flush(),n=()=>{const e=r.clientWaitSync(a,0,0);return e===r.ALREADY_SIGNALED||e===r.CONDITION_SATISFIED},t=a}else(0,s.OBj)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(t=this.beginQuery(),this.endQuery(),n=()=>this.isQueryAvailable(t,(0,s.OBj)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))):n=()=>!0;return{query:t,isFencePassed:n}}downloadMatrixFromPackedTexture(e,t,n){return this.downloadMatrixDriver(e,(()=>lt(this.gl,t,n)))}createProgram(e){this.throwIfDisposed();const t=this.gl;null==this.vertexShader&&(this.vertexShader=Ve(t));const n=S(t);return x(t,(()=>t.attachShader(n,this.vertexShader))),x(t,(()=>t.attachShader(n,e))),C(t,n),this.debug&&$(t,n),this.vertexAttrsAreBound||(this.setProgram(n),this.vertexAttrsAreBound=nt(t,this.program,this.vertexBuffer)),n}deleteProgram(e){this.throwIfDisposed(),e===this.program&&(this.program=null),null!=e&&x(this.gl,(()=>this.gl.deleteProgram(e)))}setProgram(e){this.throwIfDisposed(),this.program=e,null!=this.program&&this.debug&&$(this.gl,this.program),x(this.gl,(()=>this.gl.useProgram(e)))}getUniformLocation(e,t,n=!0){return this.throwIfDisposed(),n?M(this.gl,e,t):U(this.gl,e,t)}getAttributeLocation(e,t){return this.throwIfDisposed(),x(this.gl,(()=>this.gl.getAttribLocation(e,t)))}getUniformLocationNoThrow(e,t){return this.throwIfDisposed(),this.gl.getUniformLocation(e,t)}setInputMatrixTexture(e,t,n){this.throwIfDisposed(),this.throwIfNoProgram(),P(this.gl,e,t,n)}setOutputMatrixTexture(e,t,n){this.setOutputMatrixTextureDriver(e,n,t)}setOutputPackedMatrixTexture(e,t,n){this.throwIfDisposed();const[r,a]=m(t,n);this.setOutputMatrixTextureDriver(e,r,a)}setOutputMatrixWriteRegion(e,t,n,r){this.setOutputMatrixWriteRegionDriver(n,e,r,t)}setOutputPackedMatrixWriteRegion(e,t,n,r){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")}debugValidate(){null!=this.program&&$(this.gl,this.program),V(this.gl)}executeProgram(){this.throwIfDisposed(),this.throwIfNoProgram();const e=this.gl;this.debug&&this.debugValidate(),x(e,(()=>e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0)))}blockUntilAllProgramsCompleted(){this.throwIfDisposed(),x(this.gl,(()=>this.gl.finish()))}getQueryTimerExtension(){return null==this.disjointQueryTimerExtension&&(this.disjointQueryTimerExtension=y(this.gl,2===(0,s.OBj)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension}getQueryTimerExtensionWebGL2(){return this.getQueryTimerExtension()}getQueryTimerExtensionWebGL1(){return this.getQueryTimerExtension()}beginQuery(){if(2===(0,s.OBj)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")){const e=this.gl,t=this.getQueryTimerExtensionWebGL2(),n=e.createQuery();return e.beginQuery(t.TIME_ELAPSED_EXT,n),n}const e=this.getQueryTimerExtensionWebGL1(),t=e.createQueryEXT();return e.beginQueryEXT(e.TIME_ELAPSED_EXT,t),t}endQuery(){if(2===(0,s.OBj)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")){const e=this.gl,t=this.getQueryTimerExtensionWebGL2();return void e.endQuery(t.TIME_ELAPSED_EXT)}const e=this.getQueryTimerExtensionWebGL1();e.endQueryEXT(e.TIME_ELAPSED_EXT)}async waitForQueryAndGetTime(e){return await s.D5U.repeatedTry((()=>this.disposed||this.isQueryAvailable(e,(0,s.OBj)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")))),this.getQueryTime(e,(0,s.OBj)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}getQueryTime(e,t){if(0===t)return null;if(2===t){const t=this.gl;return t.getQueryParameter(e,t.QUERY_RESULT)/1e6}{const t=this.getQueryTimerExtensionWebGL1();return t.getQueryObjectEXT(e,t.QUERY_RESULT_EXT)/1e6}}isQueryAvailable(e,t){if(0===t)return!0;if(2===t){const t=this.gl,n=this.getQueryTimerExtensionWebGL2(),r=t.getQueryParameter(e,t.QUERY_RESULT_AVAILABLE);return null==this.disjoint&&(this.disjoint=this.gl.getParameter(n.GPU_DISJOINT_EXT)),r&&!this.disjoint}{const t=this.getQueryTimerExtensionWebGL1(),n=t.getQueryObjectEXT(e,t.QUERY_RESULT_AVAILABLE_EXT);return null==this.disjoint&&(this.disjoint=this.gl.getParameter(t.GPU_DISJOINT_EXT)),n&&!this.disjoint}}pollFence(e){return new Promise((t=>{this.addItemToPoll((()=>e.isFencePassed()),(()=>t()))}))}pollItems(){const e=function(e){let t=0;for(;t<e.length;++t){if(!e[t]())break}return t-1}(this.itemsToPoll.map((e=>e.isDoneFn)));for(let t=0;t<=e;++t){const{resolveFn:e}=this.itemsToPoll[t];e()}this.itemsToPoll=this.itemsToPoll.slice(e+1)}addItemToPoll(e,t){this.itemsToPoll.push({isDoneFn:e,resolveFn:t}),this.itemsToPoll.length>1||s.D5U.repeatedTry((()=>(this.pollItems(),0===this.itemsToPoll.length)))}bindTextureToFrameBuffer(e){this.throwIfDisposed(),B(this.gl,e,this.framebuffer),this.debug&&V(this.gl)}unbindTextureToFrameBuffer(){null!=this.outputTexture?(B(this.gl,this.outputTexture,this.framebuffer),this.debug&&V(this.gl)):L(this.gl,this.framebuffer)}downloadMatrixDriver(e,t){this.bindTextureToFrameBuffer(e);const n=t();return this.unbindTextureToFrameBuffer(),n}setOutputMatrixTextureDriver(e,t,n){this.throwIfDisposed();const r=this.gl;B(r,e,this.framebuffer),this.debug&&V(r),this.outputTexture=e,x(r,(()=>r.viewport(0,0,t,n))),x(r,(()=>r.scissor(0,0,t,n)))}setOutputMatrixWriteRegionDriver(e,t,n,r){this.throwIfDisposed(),x(this.gl,(()=>this.gl.scissor(e,t,n,r)))}throwIfDisposed(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")}throwIfNoProgram(){if(null==this.program)throw new Error("No GPU program is currently set.")}}var dt=n(5226);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const{addImpl:pt,bincountImpl:ht,bincountReduceImpl:ft,ceilImpl:mt,concatImpl:gt,equalImpl:xt,expImpl:bt,expm1Impl:vt,floorImpl:yt,gatherNdImpl:kt,gatherV2Impl:It,greaterImpl:wt,greaterEqualImpl:St,lessImpl:Ct,lessEqualImpl:$t,linSpaceImpl:Tt,logImpl:Et,maxImpl:Nt,maximumImpl:Rt,minimumImpl:Dt,multiplyImpl:At,negImpl:Ft,notEqualImpl:_t,prodImpl:Ot,rangeImpl:Mt,rsqrtImpl:Ut,sigmoidImpl:Pt,simpleAbsImpl:Wt,sliceImpl:Bt,sparseFillEmptyRowsImpl:Lt,sparseReshapeImpl:Vt,sparseSegmentReductionImpl:zt,sqrtImpl:Gt,stridedSliceImpl:Ht,stringNGramsImpl:jt,stringSplitImpl:Xt,stringToHashBucketFastImpl:qt,subImpl:Kt,tileImpl:Yt,topKImpl:Zt,transposeImpl:Qt,uniqueImpl:Jt}=dt;
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
class nn{constructor(e){if(this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.enableShapeUniforms=Oe(this.outputShape.length),0===this.rank)this.userCode="\n        void main() {\n          setOutput(vec4(getA(), 0., 0., 0.));\n        }\n      ";else{const e=tn("rc",this.rank),t=Re(this.rank),n=this.getOutOfBoundsCondition(e),r=this.getSetup(e),a=this.getOutput(e);this.userCode=`\n        void main() {\n          ${t} rc = getOutputCoords();\n\n          if(${n}) {\n            setOutput(vec4(0));\n          } else {\n            ${r}\n\n            setOutput(vec4(${a}));\n          }\n        }\n      `}}getSourceCoordsArr(e){const t=[];for(let n=0;n<=1;n++)for(let r=0;r<=1;r++){let a=`${0===n?"r":"rp1"}, ${0===r?"c":"cp1"}`;for(let t=2;t<this.rank;t++)a=`${e[e.length-1-t]},`+a;t.push(a)}return t}getOutOfBoundsCondition(e){if(1===this.rank)return`rc > ${this.enableShapeUniforms?"outShape":this.outputShape[0]}`;let t="";for(let n=this.rank-2;n<this.rank;n++)t+=`${e[n]} >= ${this.enableShapeUniforms?`outShape[${n}]`:this.outputShape[n]}`,n<this.rank-1&&(t+="||");return t}getSetup(e){if(1===this.rank)return"";const t=e.slice(-2),n=this.enableShapeUniforms?`outShape[${this.rank} - 1]`:this.outputShape[this.rank-1],r=this.enableShapeUniforms?`outShape[${this.rank} - 2]`:this.outputShape[this.rank-2];return`\n      int r = ${t[0]};\n      int c = ${t[1]};\n      int rp1 = r + 1;\n      int cp1 = c + 1;\n\n      bool cEdge = cp1 >= ${n};\n      bool rEdge = rp1 >= ${r};\n    `}getOutput(e){const t=this.getSourceCoordsArr(e);if(1===this.rank){return`getA(rc), (rc + 1 >= ${this.enableShapeUniforms?"outShape":this.outputShape[0]} ? 0. : getA(rc + 1)), 0, 0`}return`getA(${t[0]}),\n            cEdge ? 0. : getA(${t[1]}),\n            rEdge ? 0. : getA(${t[2]}),\n            rEdge || cEdge ? 0. : getA(${t[3]})`}}
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
class an{constructor(e){this.gpgpu=e,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}acquireTexture(e,t,n){const r=on(t,n),a=un(e,r,n);a in this.freeTextures||(this.freeTextures[a]=[]),a in this.usedTextures||(this.usedTextures[a]=[]);const s=sn(e,r,this.gpgpu.gl,this.gpgpu.textureConfig,n);if(this.freeTextures[a].length>0){this.numFreeTextures--,this.numUsedTextures++,this._numBytesFree-=s,this.log();const e=this.freeTextures[a].shift();return this.usedTextures[a].push(e),e}let o;return r===p.PACKED_2X2_FLOAT32?o=this.gpgpu.createPackedMatrixTexture(e[0],e[1]):r===p.PACKED_2X2_FLOAT16?o=this.gpgpu.createFloat16PackedMatrixTexture(e[0],e[1]):r===p.UNPACKED_FLOAT32?o=this.gpgpu.createFloat32MatrixTexture(e[0],e[1]):r===p.UNPACKED_FLOAT16?o=this.gpgpu.createFloat16MatrixTexture(e[0],e[1]):r===p.PACKED_4X1_UNSIGNED_BYTE&&(o=this.gpgpu.createUnsignedBytesMatrixTexture(e[0],e[1])),this.usedTextures[a].push(o),this.numUsedTextures++,this._numBytesAllocated+=s,this.log(),o}releaseTexture(e,t,n,r){if(null==this.freeTextures)return;const a=on(n,r),o=un(t,a,r);o in this.freeTextures||(this.freeTextures[o]=[]);const i=sn(t,a,this.gpgpu.gl,this.gpgpu.textureConfig,r),u=(0,s.OBj)().get("WEBGL_DELETE_TEXTURE_THRESHOLD");-1!==u&&this._numBytesAllocated>u?(this.gpgpu.deleteMatrixTexture(e.texture),this._numBytesAllocated-=i):(this.freeTextures[o].push(e),this.numFreeTextures++,this._numBytesFree+=i),this.numUsedTextures--;const l=this.usedTextures[o],c=l.indexOf(e);if(c<0)throw new Error("Cannot release a texture that was never provided by this texture manager");l.splice(c,1),this.log()}log(){if(!this.logEnabled)return;const e=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",`${this.numFreeTextures} / ${this.numUsedTextures}`,`(${e})`);const t=this._numBytesFree/this._numBytesAllocated;console.log(`Bytes allocated: ${this._numBytesAllocated}`),console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100*t)}%)`)}get numBytesAllocated(){return this._numBytesAllocated}get numBytesFree(){return this._numBytesFree}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){if(null!=this.freeTextures){for(const e in this.freeTextures)this.freeTextures[e].forEach((e=>{this.gpgpu.deleteMatrixTexture(e.texture)}));for(const e in this.usedTextures)this.usedTextures[e].forEach((e=>{this.gpgpu.deleteMatrixTexture(e.texture)}));this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0}}}function sn(e,t,n,r,a){const s=function(e,t){switch(e){case p.PACKED_2X2_FLOAT32:return Qe(t);case p.PACKED_2X2_FLOAT16:return et(t);case p.UNPACKED_FLOAT32:return je(t);case p.UNPACKED_FLOAT16:return qe(t);case p.PACKED_4X1_UNSIGNED_BYTE:return Ye(t);default:throw new Error(`Unknown physical texture type ${e}`)}}(t,r);let o;if(a){const[t,n]=m(e[0],e[1]);o=t*n}else{const[t,n]=h(e[0],e[1]);o=t*n}const i=function(e,t){const n=e;if(t===n.R32F)return 4;if(t===n.R16F)return 2;if(t===n.RGBA32F)return 16;if(t===e.RGBA)return 16;if(t===n.RGBA16F)return 8;if(t===n.RGBA8)return 4;throw new Error(`Unknown internal format ${t}`)}(n,s);return o*i}function on(e,t){if(e===d.UPLOAD)return p.PACKED_2X2_FLOAT32;if(e===d.RENDER||null==e)return function(e){return(0,s.OBj)().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?e?p.PACKED_2X2_FLOAT32:p.UNPACKED_FLOAT32:e?p.PACKED_2X2_FLOAT16:p.UNPACKED_FLOAT16}(t);if(e===d.DOWNLOAD||e===d.PIXELS)return p.PACKED_4X1_UNSIGNED_BYTE;throw new Error(`Unknown logical texture type ${e}`)}function un(e,t,n){return`${e[0]}_${e[1]}_${t}_${n}`}
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
class hn{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=e,this.enableShapeUniforms=Oe(this.outputShape.length);const t=e.length,n=tn("rc",t),r=Re(t),a=function(e,t){if(1===e)return"rc";let n="";for(let r=0;r<e;r++)n+=t[r],r<e-1&&(n+=",");return n}(t,n),s=n.slice(-2),o=t<=1?"rc":`vec2(${s.join(",")})`;this.userCode=`\n      void main() {\n        ${r} rc = getOutputCoords();\n        vec4 packedInput = getA(${a});\n\n        setOutput(getChannel(packedInput, ${o}));\n      }\n    `}}
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
const fn=s.GDt.ZA,mn={};const gn=(0,s.OBj)().getNumber("CPU_HANDOFF_SIZE_THRESHOLD");class xn extends s.Zuw{constructor(e){if(super(),this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.dataRefCount=new WeakMap,this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.lastGlFlushTime=0,this.warnedAboutMemory=!1,this.pendingDeletes=0,this.disposed=!1,!(0,s.OBj)().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");let t;if(null!=e){if(e instanceof ct)t=e;else{const n=l((0,s.OBj)().getNumber("WEBGL_VERSION"),e);t=new ct(n)}this.binaryCache={},this.gpgpuCreatedLocally=!1}else{const e=l((0,s.OBj)().getNumber("WEBGL_VERSION"));t=new ct(e),this.binaryCache=((n=(0,s.OBj)().getNumber("WEBGL_VERSION"))in mn||(mn[n]={}),mn[n]),this.gpgpuCreatedLocally=!0}var n;this.gpgpu=t,this.canvas=this.gpgpu.gl.canvas,this.textureManager=new an(this.gpgpu),this.numMBBeforeWarning=null==(0,s.OBj)().global.screen?1024:(0,s.OBj)().global.screen.height*(0,s.OBj)().global.screen.width*window.devicePixelRatio*600/1024/1024,this.texData=new s.JLz(this,(0,s.SRH)())}nextDataId(){return xn.nextDataId++}numDataIds(){return this.texData.numDataIds()-this.pendingDeletes}write(e,t,n){if(((0,s.OBj)().getBool("WEBGL_CHECK_NUMERICAL_PROBLEMS")||(0,s.OBj)().getBool("DEBUG"))&&this.checkNumericalProblems(e),"complex64"===n&&null!=e)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");const r={id:this.nextDataId()};return this.texData.set(r,{shape:t,dtype:n,values:e,usage:d.UPLOAD,refCount:1}),r}refCount(e){if(this.texData.has(e)){return this.texData.get(e).refCount}return 0}incRef(e){this.texData.get(e).refCount++}decRef(e){if(this.texData.has(e)){this.texData.get(e).refCount--}}move(e,t,n,r,a){if((0,s.OBj)().getBool("DEBUG")&&this.checkNumericalProblems(t),"complex64"===r)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(e,{shape:n,dtype:r,values:t,usage:d.UPLOAD,refCount:a})}disposeIntermediateTensorInfo(e){this.disposeData(e.dataId)}readSync(e){const t=this.texData.get(e),{values:n,dtype:r,complexTensorInfos:a,slice:o,shape:i,isPacked:u}=t;if(null!=o){let t;t=u?new pn(i,dn):new ln(i,dn);const n=this.runWebGLProgram(t,[{dataId:e,shape:i,dtype:r}],r),a=this.readSync(n.dataId);return this.disposeIntermediateTensorInfo(n),a}if(null!=n)return this.convertAndCacheOnCPU(e);if("string"===r)return n;const l=null!=this.activeTimers;let c,d;if(l&&(c=s.D5U.now()),"complex64"===r){const e=this.readSync(a.real.dataId),t=this.readSync(a.imag.dataId);d=s.Wap.mergeRealAndImagArrays(e,t)}else d=this.getValuesFromTexture(e);return l&&(this.downloadWaitMs+=s.D5U.now()-c),this.convertAndCacheOnCPU(e,d)}async read(e){if(this.pendingRead.has(e)){const t=this.pendingRead.get(e);return new Promise((e=>t.push(e)))}const t=this.texData.get(e),{values:n,shape:r,slice:a,dtype:o,complexTensorInfos:i,isPacked:u}=t;if(null!=a){let t;t=u?new pn(r,dn):new ln(r,dn);const n=this.runWebGLProgram(t,[{dataId:e,shape:r,dtype:o}],o),a=this.read(n.dataId);return this.disposeIntermediateTensorInfo(n),a}if(null!=n)return this.convertAndCacheOnCPU(e);if((0,s.OBj)().getBool("DEBUG")&&!(0,s.OBj)().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&2===(0,s.OBj)().getNumber("WEBGL_VERSION"))throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");let l,c,d=null;if("complex64"!==o&&(0,s.OBj)().get("WEBGL_BUFFER_SUPPORTED")){l=this.decode(e);const t=this.texData.get(l.dataId);d=this.gpgpu.createBufferFromTexture(t.texture.texture,...f(r))}if(this.pendingRead.set(e,[]),"complex64"!==o&&await this.gpgpu.createAndWaitForFence(),"complex64"===o){const e=await Promise.all([this.read(i.real.dataId),this.read(i.imag.dataId)]),t=e[0],n=e[1];c=s.Wap.mergeRealAndImagArrays(t,n)}else if(null==d)c=this.getValuesFromTexture(e);else{const e=s.D5U.sizeFromShape(r);c=this.gpgpu.downloadFloat32MatrixFromBuffer(d,e)}if(null!=l&&this.disposeIntermediateTensorInfo(l),null!=d){const e=this.gpgpu.gl;x(e,(()=>e.deleteBuffer(d)))}const p=this.convertAndCacheOnCPU(e,c),h=this.pendingRead.get(e);return this.pendingRead.delete(e),h.forEach((e=>e(p))),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e)&&(0,s.SRH)().removeDataId(e,this),this.pendingDeletes--),p}readToGPU(e,t={}){const n=this.texData.get(e),{values:r,shape:a,slice:o,dtype:i,isPacked:u,texture:l}=n;if("complex64"===i)throw new Error("Does not support reading texture for complex64 dtype.");if(null!=o){let n;n=u?new pn(a,dn):new ln(a,dn);const r=this.runWebGLProgram(n,[{dataId:e,shape:a,dtype:i}],i),s=this.readToGPU(r,t);return this.disposeIntermediateTensorInfo(r),s}if(null==l)throw null!=r?new Error("Data is not on GPU but on CPU."):new Error("There is no data on GPU or CPU.");const c=this.decode(e,t.customTexShape),d=(0,s.SRH)().makeTensorFromDataId(c.dataId,c.shape,c.dtype),p=this.texData.get(c.dataId);return Object.assign({tensorRef:d},p.texture)}bufferSync(e){const t=this.readSync(e.dataId);let n=t;if("string"===e.dtype)try{n=t.map((e=>s.D5U.decodeString(e)))}catch(e){throw new Error("Failed to decode encoded string bytes into utf-8")}return(0,s.f3b)(e.shape,e.dtype,n)}checkNumericalProblems(e){if(null!=e)for(let t=0;t<e.length;t++){const n=e[t];if(!b(n)){if((0,s.OBj)().getBool("WEBGL_RENDER_FLOAT32_CAPABLE"))throw Error(`The value ${n} cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`);throw Error(`The value ${n} cannot be represented on this device.`)}}}getValuesFromTexture(e){const{shape:t,dtype:n,isPacked:r}=this.texData.get(e),a=s.D5U.sizeFromShape(t);if((0,s.OBj)().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){const n=this.decode(e),r=this.texData.get(n.dataId),s=this.gpgpu.downloadMatrixFromPackedTexture(r.texture.texture,...f(t)).subarray(0,a);return this.disposeIntermediateTensorInfo(n),s}const o=(0,s.OBj)().getBool("WEBGL_PACK")&&!0===r,i=o?q(t):t,u=o?new We(i):new Pe(i),l=this.runWebGLProgram(u,[{shape:i,dtype:n,dataId:e}],"float32"),c=this.texData.get(l.dataId),d=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(c.texture.texture,c.texShape[0],c.texShape[1]).subarray(0,a);return this.disposeIntermediateTensorInfo(l),d}timerAvailable(){return(0,s.OBj)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0}time(e){const t=this.activeTimers,n=[];let r=!1;null==this.programTimersStack?(this.programTimersStack=n,r=!0):this.activeTimers.push(n),this.activeTimers=n,e();const a=s.D5U.flatten(this.activeTimers.map((e=>e.query))).filter((e=>null!=e)),o=s.D5U.flatten(this.activeTimers.map((e=>e.name))).filter((e=>null!=e));this.activeTimers=t,r&&(this.programTimersStack=null);const i={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null};return(async()=>{if((0,s.OBj)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0){const e=await Promise.all(a);i.kernelMs=s.D5U.sum(e),i.getExtraProfileInfo=()=>e.map(((e,t)=>({name:o[t],ms:e}))).map((e=>`${e.name}: ${e.ms}`)).join(", ")}else i.kernelMs={error:"WebGL query timers are not supported in this environment."};return this.uploadWaitMs=0,this.downloadWaitMs=0,i})()}memory(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU,numBytesInGPUAllocated:this.textureManager.numBytesAllocated,numBytesInGPUFree:this.textureManager.numBytesFree}}startTimer(){return(0,s.OBj)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:s.D5U.now(),endMs:null}}endTimer(e){return(0,s.OBj)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),e):(e.endMs=s.D5U.now(),e)}async getQueryTime(e){if((0,s.OBj)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0)return this.gpgpu.waitForQueryAndGetTime(e);const t=e;return t.endMs-t.startMs}disposeData(e,t=!1){if(this.pendingDisposal.has(e))return!1;if(!this.texData.has(e))return!0;if(t?this.texData.get(e).refCount=0:this.texData.get(e).refCount--,!t&&this.texData.get(e).refCount>0)return!1;if(this.pendingRead.has(e))return this.pendingDisposal.add(e),this.pendingDeletes++,!1;this.releaseGPUData(e);const{complexTensorInfos:n}=this.texData.get(e);return null!=n&&(this.disposeData(n.real.dataId,t),this.disposeData(n.imag.dataId,t)),this.texData.delete(e),!0}releaseGPUData(e){const{texture:t,dtype:n,texShape:r,usage:a,isPacked:s,slice:o}=this.texData.get(e),i=o&&o.origDataId||e,u=this.dataRefCount.get(i);u>1?this.dataRefCount.set(i,u-1):(this.dataRefCount.delete(i),null!=t&&(this.numBytesInGPU-=this.computeBytes(r,n),this.textureManager.releaseTexture(t,r,a,s)));const l=this.texData.get(e);l.texture=null,l.texShape=null,l.isPacked=!1,l.slice=null}getTexture(e){return this.uploadToGPU(e),this.texData.get(e).texture.texture}getDataInfo(e){return this.texData.get(e)}shouldExecuteOnCPU(e,t=gn){return(0,s.OBj)().getBool("WEBGL_CPU_FORWARD")&&e.every((e=>null==this.texData.get(e.dataId).texture&&s.D5U.sizeFromShape(e.shape)<t))}getGPGPUContext(){return this.gpgpu}where(e){s.Wap.warn("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");const t=e.dataSync();return fn(e.shape,t)}packedUnaryOp(e,t,n){const r=new pn(e.shape,t),a=this.compileAndRun(r,[e],n);return(0,s.SRH)().makeTensorFromDataId(a.dataId,a.shape,a.dtype)}abs(e){if(this.shouldExecuteOnCPU([e])&&"complex64"!==e.dtype){const t=Wt(this.texData.get(e.dataId).values);return this.makeOutput(e.shape,e.dtype,t)}if((0,s.OBj)().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,cn,e.dtype);const t=new ln(e.shape,cn),n=this.compileAndRun(t,[e]);return(0,s.SRH)().makeTensorFromDataId(n.dataId,n.shape,n.dtype)}makeTensorInfo(e,t,n){let r;if("string"===t&&null!=n&&n.length>0&&s.D5U.isString(n[0])){const a=n.map((e=>s.D5U.encodeString(e)));r=this.write(a,e,t)}else r=this.write(n,e,t);return this.texData.get(r).usage=null,{dataId:r,shape:e,dtype:t}}makeOutput(e,t,n){const{dataId:r}=this.makeTensorInfo(e,t,n);return(0,s.SRH)().makeTensorFromDataId(r,e,t,this)}unpackTensor(e){const t=new hn(e.shape);return this.runWebGLProgram(t,[e],e.dtype)}packTensor(e){const t=new nn(e.shape);return this.runWebGLProgram(t,[e],e.dtype,null,!0)}packedReshape(e,t){const n=[j(e.shape),...X(e.shape)],r={dtype:e.dtype,shape:n,dataId:e.dataId},a=[j(t),...X(t)],s=new rn(a,n),o=[n],i=this.runWebGLProgram(s,[r],e.dtype,o,!0);return{dataId:i.dataId,shape:t,dtype:i.dtype}}decode(e,t){const n=this.texData.get(e),{isPacked:r,shape:a,dtype:o}=n;if(null!=t){const e=s.D5U.sizeFromShape(a),n=t[0]*t[1]*4;s.D5U.assert(e<=n,(()=>"customTexShape is too small. Row * Column * 4 should be equal or larger than the size of the tensor data."))}const i=q(a);let u;u=r?new Ue(i):new Me(i);const l=[null!=t?t:f(i)];return{dtype:o,shape:a,dataId:this.runWebGLProgram(u,[{shape:i,dtype:o,dataId:e}],o,l,!0,t).dataId}}runWebGLProgram(e,t,n,r,a=!1,o){const i=this.makeTensorInfo(e.outputShape,n),u=this.texData.get(i.dataId);if(e.packedOutput&&(u.isPacked=!0),e.outPackingScheme===c.DENSE){const t=null!=o?o:f(e.outputShape);u.texShape=t.map((e=>2*e))}if(null!=e.outTexUsage&&(u.usage=e.outTexUsage),0===s.D5U.sizeFromShape(i.shape))return u.values=s.D5U.getTypedArrayFromDType(i.dtype,0),i;const l=[],d=t.map((t=>{if("complex64"===t.dtype)throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");let n=this.texData.get(t.dataId);if(null==n.texture){if(!e.packedInputs&&s.D5U.sizeFromShape(t.shape)<=(0,s.OBj)().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:t.shape,texData:null,isUniform:!0,uniformValues:n.values};e.packedInputs&&(n.isPacked=!0,n.shape=t.shape)}if(this.uploadToGPU(t.dataId),!!n.isPacked!=!!e.packedInputs)t=n.isPacked?this.unpackTensor(t):this.packTensor(t),l.push(t),n=this.texData.get(t.dataId);else if(n.isPacked&&!Z(n.shape,t.shape)){const e=t,r=t.shape;t.shape=n.shape,t=this.packedReshape(t,r),l.push(t),n=this.texData.get(t.dataId),e.shape=r}return{shape:t.shape,texData:n,isUniform:!1}}));this.uploadToGPU(i.dataId);const p={shape:i.shape,texData:u,isUniform:!1},h=function(e,t,n){let r="";t.concat(n).forEach((t=>{const a=null!=t.texData&&null!=t.texData.slice&&t.texData.slice.flatOffset>0;if(e.enableShapeUniforms&&!t.isUniform){const o=t.texData.texShape,{useSqueezeShape:i,uniformShape:u,keptDims:l}=De(e.packedInputs,t.shape,o);let c="",d="",p="";if(1===u.length&&e.packedInputs){const e=[Math.ceil(o[0]/2),Math.ceil(o[1]/2)];c=`${e[0]>1}_${e[1]>1}`}else if(2!==u.length||e.packedInputs){if(u.length>2&&!e.packedInputs){const e=s.D5U.computeStrides(u);p=`${e[0]===o[1]}_${e[e.length-1]===o[1]}`}}else d=`${u[0]>1}_${u[1]>1}`;const h=t.shape.length,f=2===u.length&&s.D5U.arraysEqual(t.shape,o),m=1===s.D5U.sizeFromShape(t.shape),g=s.Wap.getBroadcastDims(t.shape,n.shape),x=!e.packedInputs&&h===n.shape.length&&s.D5U.arraysEqual(o,n.texData.texShape),b=e.packedInputs||u.length>2?"":`${o[0]>1}_${o[1]>1}`;r+=`${h}_${x}_${i?l:""}_${u.length}_${m}_${g}_${f}_${c}_${d}_${p}_${b}_${a}`}else{const e=t.isUniform?"uniform":t.texData.texShape;r+=`${t.shape}_${e}_${a}`}}));const a=e.userCode;let o=e.constructor.name;return o+="_"+r+"_"+a+`${(0,s.OBj)().getNumber("WEBGL_VERSION")}`,o}(e,d,p),m=this.getAndSaveBinary(h,(()=>
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
function(e,t,n,r){const a=n.map(((e,n)=>{const r={logicalShape:e.shape,texShape:e.isUniform?null:e.texData.texShape,isUniform:e.isUniform,isPacked:!e.isUniform&&e.texData.isPacked,flatOffset:null};return null!=e.texData&&null!=e.texData.slice&&e.texData.slice.flatOffset>0&&(r.flatOffset=e.texData.slice.flatOffset),{name:t.variableNames[n],shapeInfo:r}})),o=a.map((e=>e.shapeInfo)),i={logicalShape:r.shape,texShape:r.texData.texShape,isUniform:!1,isPacked:r.texData.isPacked,flatOffset:null},u=ye(a,i,t),l=I(e.gl,u),c=e.createProgram(l);let d=null;const p=e.getUniformLocation(c,"NAN",!1);1===(0,s.OBj)().getNumber("WEBGL_VERSION")&&(d=e.getUniformLocation(c,"INFINITY",!1));const h=!1,f={},m={},g={};for(let n=0;n<t.variableNames.length;n++){const r=t.variableNames[n];f[r]=e.getUniformLocation(c,r,h),f[`offset${r}`]=e.getUniformLocation(c,`offset${r}`,h),t.enableShapeUniforms&&(m[`${r}Shape`]=e.getUniformLocation(c,`${r}Shape`,h),g[`${r}TexShape`]=e.getUniformLocation(c,`${r}TexShape`,h))}let x,b,v;t.enableShapeUniforms&&(x=e.getUniformLocation(c,"outShape",h),v=e.getUniformLocation(c,"outShapeStrides",h),b=e.getUniformLocation(c,"outTexShape",h));const y=[];return t.customUniforms&&t.customUniforms.forEach(((t,n)=>{y[n]=e.getUniformLocation(c,t.name,h)})),{program:t,fragmentShader:l,source:u,webGLProgram:c,uniformLocations:f,customUniformLocations:y,inShapeInfos:o,outShapeInfo:i,infLoc:d,nanLoc:p,inShapesLocations:m,inTexShapesLocations:g,outShapeLocation:x,outShapeStridesLocation:v,outTexShapeLocation:b}}(this.gpgpu,e,d,p))),g=null!=this.activeTimers;let x;g&&(x=this.startTimer()),function(e,t,n,r,a){t.program.enableShapeUniforms||(_e(t.inShapeInfos,n),_e([t.outShapeInfo],[r]));const o=r.texData.texture,i=r.texData.texShape;r.texData.isPacked?e.setOutputPackedMatrixTexture(o.texture,i[0],i[1]):e.setOutputMatrixTexture(o.texture,i[0],i[1]),e.setProgram(t.webGLProgram),1===(0,s.OBj)().getNumber("WEBGL_VERSION")&&null!==t.infLoc&&e.gl.uniform1f(t.infLoc,1/0),null!==t.nanLoc&&e.gl.uniform1f(t.nanLoc,NaN),n.forEach(((n,r)=>{const a=t.program.variableNames[r],o=t.uniformLocations[a],i=t.uniformLocations[`offset${a}`],u=t.inShapesLocations[`${a}Shape`],l=t.inTexShapesLocations[`${a}TexShape`];if(u){const{uniformShape:r}=De(t.program.packedInputs,n.shape,n.texData.texShape);switch(r.length){case 1:e.gl.uniform1iv(u,new Int32Array(r));break;case 2:e.gl.uniform2iv(u,new Int32Array(r));break;case 3:e.gl.uniform3iv(u,new Int32Array(r));break;case 4:e.gl.uniform4iv(u,new Int32Array(r))}}if(l&&e.gl.uniform2i(l,n.texData.texShape[0],n.texData.texShape[1]),null!=o)if(n.isUniform)if(s.D5U.sizeFromShape(n.shape)<2)e.gl.uniform1f(o,n.uniformValues[0]);else{let t=n.uniformValues;t instanceof Float32Array||(t=new Float32Array(t)),e.gl.uniform1fv(o,t)}else null!=n.texData.slice&&null!=i&&e.gl.uniform1i(i,n.texData.slice.flatOffset),e.setInputMatrixTexture(n.texData.texture.texture,o,r)}));const u=t.outShapeLocation;if(u)switch(r.shape.length){case 1:e.gl.uniform1iv(u,new Int32Array(r.shape));break;case 2:e.gl.uniform2iv(u,new Int32Array(r.shape));break;case 3:e.gl.uniform3iv(u,new Int32Array(r.shape));break;case 4:e.gl.uniform4iv(u,new Int32Array(r.shape))}if(t.outShapeStridesLocation){const n=s.D5U.computeStrides(r.shape);switch(r.shape.length){case 2:e.gl.uniform1iv(t.outShapeStridesLocation,new Int32Array(n));break;case 3:e.gl.uniform2iv(t.outShapeStridesLocation,new Int32Array(n));break;case 4:e.gl.uniform3iv(t.outShapeStridesLocation,new Int32Array(n))}}t.outTexShapeLocation&&e.gl.uniform2i(t.outTexShapeLocation,r.texData.texShape[0],r.texData.texShape[1]),t.program.customUniforms&&a&&t.program.customUniforms.forEach(((n,r)=>{const s=t.customUniformLocations[r],o=a[r];if("float"===n.type)e.gl.uniform1fv(s,o);else if("vec2"===n.type)e.gl.uniform2fv(s,o);else if("vec3"===n.type)e.gl.uniform3fv(s,o);else if("vec4"===n.type)e.gl.uniform4fv(s,o);else if("int"===n.type)e.gl.uniform1iv(s,o);else if("ivec2"===n.type)e.gl.uniform2iv(s,o);else if("ivec3"===n.type)e.gl.uniform3iv(s,o);else{if("ivec4"!==n.type)throw Error(`uniform type ${n.type} is not supported yet.`);e.gl.uniform4iv(s,o)}})),e.executeProgram()}(this.gpgpu,m,d,p,r),l.forEach((e=>this.disposeIntermediateTensorInfo(e))),g&&(x=this.endTimer(x),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(x)}));const b=(0,s.OBj)().get("WEBGL_FLUSH_THRESHOLD");if(b>0){const e=s.D5U.now();e-this.lastGlFlushTime>b&&(this.gpgpu.gl.flush(),this.lastGlFlushTime=e)}if(!(0,s.OBj)().getBool("WEBGL_LAZILY_UNPACK")&&u.isPacked&&!1===a){const e=this.unpackTensor(i);return this.disposeIntermediateTensorInfo(i),e}return i}compileAndRun(e,t,n,r,a=!1){n=n||t[0].dtype;return this.runWebGLProgram(e,t,n,r,a)}getAndSaveBinary(e,t){return e in this.binaryCache||(this.binaryCache[e]=t()),this.binaryCache[e]}getTextureManager(){return this.textureManager}dispose(){if(!this.disposed){if(!(0,s.OBj)().getBool("IS_TEST")){Object.keys(this.binaryCache).forEach((e=>{this.gpgpu.deleteProgram(this.binaryCache[e].webGLProgram),delete this.binaryCache[e]}))}this.textureManager.dispose(),null!=this.canvas&&"undefined"!=typeof HTMLCanvasElement&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0}}floatPrecision(){return null==this.floatPrecisionValue&&(this.floatPrecisionValue=(0,s.lub)((()=>{if(!(0,s.OBj)().get("WEBGL_RENDER_FLOAT32_ENABLED")){const e=(0,s.OBj)().getBool("DEBUG");(0,s.OBj)().set("DEBUG",!1);const t=this.abs((0,s.iD$)(1e-8)).dataSync()[0];if((0,s.OBj)().set("DEBUG",e),t>0)return 32}return 16}))),this.floatPrecisionValue}epsilon(){return 32===this.floatPrecision()?1e-7:1e-4}uploadToGPU(e){const t=this.texData.get(e),{shape:n,dtype:r,values:a,texture:o,usage:i,isPacked:u}=t;if(null!=o)return;const l=null!=this.activeTimers;let c;l&&(c=s.D5U.now());let p=t.texShape;if(null==p&&(p=K(n,u),t.texShape=p),null!=a){const e=q(n);let o,i=p[1],h=p[0];const f=a instanceof Uint8Array||a instanceof Uint8ClampedArray;!u&&f||([i,h]=m(p[0],p[1])),o=u?new Le(e,f):new Be(e,f);const g=f?[h,i]:p,x=this.makeTensorInfo(g,r),b=this.texData.get(x.dataId);b.usage=f?d.PIXELS:d.UPLOAD,b.texShape=g,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(x.dataId),i,h,a);const v=[[h,i]],y=!0,k=this.runWebGLProgram(o,[x],r,v,y),I=this.texData.get(k.dataId);t.texture=I.texture,t.texShape=I.texShape,t.isPacked=I.isPacked,t.usage=I.usage,this.disposeIntermediateTensorInfo(x),this.texData.delete(k.dataId),t.values=null,l&&(this.uploadWaitMs+=s.D5U.now()-c)}else{const e=this.acquireTexture(p,i,r,u);t.texture=e}}convertAndCacheOnCPU(e,t){const n=this.texData.get(e),{dtype:r}=n;return this.releaseGPUData(e),null!=t&&(n.values=function(e,t){if("float32"===t||"complex64"===t)return e;if("int32"===t||"bool"===t){const n="int32"===t?new Int32Array(e.length):new Uint8Array(e.length);for(let t=0;t<n.length;++t)n[t]=Math.round(e[t]);return n}throw new Error(`Unknown dtype ${t}`)}(t,r)),n.values}acquireTexture(e,t,n,r){if(this.numBytesInGPU+=this.computeBytes(e,n),!this.warnedAboutMemory&&this.numBytesInGPU>1024*this.numMBBeforeWarning*1024){const e=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn(`High memory usage in GPU: ${e} MB, most likely due to a memory leak`)}return this.textureManager.acquireTexture(e,t,r)}computeBytes(e,t){return e[0]*e[1]*s.D5U.bytesPerElement(t)}}xn.nextDataId=0;
/** @license See the LICENSE file. */
const bn="3.14.0";
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
s.C2$.isBrowser()&&(0,s.jqO)("webgl",(()=>new xn),2);const yn={forceHalfFloat:vn};class kn{constructor(e,t,n){this.variableNames=["A","B"],this.outputShape=s.Wap.assertAndGetBroadcastShape(t,n),this.enableShapeUniforms=Oe(this.outputShape.length),this.userCode=`\n      float binaryOperation(float a, float b) {\n        ${e}\n      }\n\n      void main() {\n        float a = getAAtOutCoords();\n        float b = getBAtOutCoords();\n        setOutput(binaryOperation(a, b));\n      }\n    `}}class In{constructor(e,t,n,r=!1){this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=s.Wap.assertAndGetBroadcastShape(t,n);const a=this.outputShape.length;this.enableShapeUniforms=Oe(a);let o="";if(r)if(0===a||1===s.D5U.sizeFromShape(this.outputShape))o="\n          result.y = 0.;\n          result.z = 0.;\n          result.w = 0.;\n        ";else{if(o=`\n          ${Re(a)} coords = getOutputCoords();\n        `,1===a)this.enableShapeUniforms?o+="\n            result.y = (coords + 1) >= outShape ? 0. : result.y;\n            result.z = 0.;\n            result.w = 0.;\n          ":o+=`\n            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;\n            result.z = 0.;\n            result.w = 0.;\n          `;else{const e=tn("coords",a);this.enableShapeUniforms?o+=`\n            bool nextRowOutOfBounds =\n              (${e[a-2]} + 1) >= outShape[${a} - 2];\n            bool nextColOutOfBounds =\n              (${e[a-1]} + 1) >= outShape[${a} - 1];\n            result.y = nextColOutOfBounds ? 0. : result.y;\n            result.z = nextRowOutOfBounds ? 0. : result.z;\n            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;\n          `:o+=`\n            bool nextRowOutOfBounds =\n              (${e[a-2]} + 1) >= ${this.outputShape[a-2]};\n            bool nextColOutOfBounds =\n              (${e[a-1]} + 1) >= ${this.outputShape[a-1]};\n            result.y = nextColOutOfBounds ? 0. : result.y;\n            result.z = nextRowOutOfBounds ? 0. : result.z;\n            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;\n          `}}this.userCode=`\n      vec4 binaryOperation(vec4 a, vec4 b) {\n        ${e}\n      }\n\n      void main() {\n        vec4 a = getAAtOutCoords();\n        vec4 b = getBAtOutCoords();\n\n        vec4 result = binaryOperation(a, b);\n        ${o}\n\n        setOutput(result);\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function wn(e){const{inputs:t,backend:n}=e,{x:r}=t;return n.incRef(r.dataId),{dataId:r.dataId,shape:r.shape,dtype:r.dtype}}const Sn={kernelName:s.iJz,backendName:"webgl",kernelFunc:wn};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Cn(e){const{inputs:t,backend:n}=e,{real:r,imag:a}=t,s=n.makeTensorInfo(r.shape,"complex64"),o=n.texData.get(s.dataId),i=wn({inputs:{x:r},backend:n}),u=wn({inputs:{x:a},backend:n});return o.complexTensorInfos={real:i,imag:u},s}const $n={kernelName:s.Zz9,backendName:"webgl",kernelFunc:Cn},Tn="return (a < 0.) ? b * a : a;",En="\n  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));\n  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);\n";const Nn={kernelName:s.J$2,backendName:"webgl",kernelFunc:function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{alpha:o}=r,i=n.makeTensorInfo([],"float32",s.D5U.createScalarValue(o,"float32")),u=(0,s.OBj)().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new In(En,a.shape,i.shape):new kn(Tn,a.shape,i.shape),l=n.runWebGLProgram(u,[a,i],"float32");return n.disposeIntermediateTensorInfo(i),l}},Rn="return (a < 0.) ? b * a : a;",Dn="\n  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));\n  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);\n";const An={kernelName:s.o0g,backendName:"webgl",kernelFunc:function(e){const{inputs:t,backend:n}=e,{x:r,alpha:a}=t,o=(0,s.OBj)().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new In(Dn,r.shape,a.shape):new kn(Rn,r.shape,a.shape);return n.runWebGLProgram(o,[r,a],"float32")}};function Fn({opSnippet:e,packedOpSnippet:t,cpuKernelImpl:n,dtype:r}){return({inputs:a,backend:o})=>{const{x:i}=a,u=o,l=r||i.dtype;if(u.shouldExecuteOnCPU([i])&&null!=n){const e=u.texData.get(i.dataId),t=n(e.values,l);return u.makeTensorInfo(i.shape,l,t)}let c;return c=(0,s.OBj)().getBool("WEBGL_PACK_UNARY_OPERATIONS")&&null!=t?new pn(i.shape,t):new ln(i.shape,e),u.runWebGLProgram(c,[i],l)}}function _n({opSnippet:e,packedOpSnippet:t,checkOutOfBounds:n=!1,supportsComplex:r=!1,cpuKernelImpl:a,dtype:o}){return({inputs:i,backend:u})=>{const{a:l,b:c}=i,d=u;if(r&&"complex64"===l.dtype){const t=d.texData.get(l.dataId),n=d.texData.get(c.dataId),[r,a]=[[t.complexTensorInfos.real,n.complexTensorInfos.real],[t.complexTensorInfos.imag,n.complexTensorInfos.imag]].map((t=>{const[n,r]=t,a={dataId:n.dataId,dtype:n.dtype,shape:l.shape},o={dataId:r.dataId,dtype:r.dtype,shape:c.shape},i=new kn(e,l.shape,c.shape);return d.runWebGLProgram(i,[a,o],(0,s.x8V)(n.dtype,r.dtype))})),o=Cn({inputs:{real:r,imag:a},backend:d});return d.disposeIntermediateTensorInfo(r),d.disposeIntermediateTensorInfo(a),o}const p=o||(0,s.x8V)(l.dtype,c.dtype);if(("string"===l.dtype||"string"===c.dtype||d.shouldExecuteOnCPU([l,c]))&&null!=a){const e=d.texData.get(l.dataId).values,t=d.texData.get(c.dataId).values,n="string"===l.dtype?s.Wap.fromUint8ToStringArray(e):e,r="string"===l.dtype?s.Wap.fromUint8ToStringArray(t):t,[o,i]=a(l.shape,c.shape,n,r,p),u=d.makeTensorInfo(i,p);return d.texData.get(u.dataId).values=o,u}let h;return h=(0,s.OBj)().getBool("WEBGL_PACK_BINARY_OPERATIONS")&&null!=t?new In(t,l.shape,c.shape,n):new kn(e,l.shape,c.shape),d.runWebGLProgram(h,[l,c],p)}}function On(e,t=!1){if("linear"===e)return"return x;";if("relu"===e)return t?"\n  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n":"if (isnan(x)) return x;\n  return (x < 0.0) ? 0.0 : x;\n";if("elu"===e)return t?"\n  vec4 result;\n\n  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);\n  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);\n  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);\n  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);\n\n  return result;\n":"return (x >= 0.0) ? x : (exp(x) - 1.0);";if("relu6"===e)return t?"\n  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n":"if (isnan(x)) return x;\n  return (x < 0.0) ? 0.0 : min(6.0, x);\n";if("prelu"===e)return t?Dn:Rn;if("leakyrelu"===e)return t?En:Tn;if("sigmoid"===e)return"return 1.0 / (1.0 + exp(-1.0 * x));";throw new Error(`Activation ${e} has not been implemented for the WebGL backend.`)}
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
const Bn="return a * b;";function Ln(e){const{inputs:t,backend:n}=e,{a:r,b:a}=t,o=s.Wap.upcastType(r.dtype,a.dtype);if("complex64"===r.dtype){const e=n.texData.get(r.dataId),t=n.texData.get(a.dataId),s=new Wn(Un,r.shape,a.shape),o=new Wn(Pn,r.shape,a.shape),i=[{dataId:e.complexTensorInfos.real.dataId,dtype:e.complexTensorInfos.real.dtype,shape:r.shape},{dataId:e.complexTensorInfos.imag.dataId,dtype:e.complexTensorInfos.imag.dtype,shape:r.shape},{dataId:t.complexTensorInfos.real.dataId,dtype:t.complexTensorInfos.real.dtype,shape:a.shape},{dataId:t.complexTensorInfos.imag.dataId,dtype:t.complexTensorInfos.imag.dtype,shape:a.shape}],u=n.runWebGLProgram(s,i,"float32"),l=n.runWebGLProgram(o,i,"float32"),c=Cn({inputs:{real:u,imag:l},backend:n});return n.disposeIntermediateTensorInfo(u),n.disposeIntermediateTensorInfo(l),c}if(n.shouldExecuteOnCPU([r,a])){const e=n.texData.get(r.dataId),t=n.texData.get(a.dataId),[s,i]=At(r.shape,a.shape,e.values,t.values,o),u=n.makeTensorInfo(i,o);return n.texData.get(u.dataId).values=s,u}let i;return i=(0,s.OBj)().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new In(Bn,r.shape,a.shape):new kn(Bn,r.shape,a.shape),n.runWebGLProgram(i,[r,a],o)}const Vn={kernelName:s.wYn,backendName:"webgl",kernelFunc:Ln};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function zn(e){const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{shape:o}=r,i=n,u=s.D5U.sizeFromShape(a.shape),l=s.D5U.inferFromImplicitShape(o,u),c=s.D5U.sizeFromShape(l);s.D5U.assert(u===c,(()=>`The new shape (${l}) has ${c} elements and the old shape (${a.shape}) has ${u} elements. The new shape and old shape must have the same number of elements.`));const d=i.texData.get(a.dataId);return!d.isPacked||Z(a.shape,l)||null!==d.texture&&Z(d.shape,l)?(i.incRef(a.dataId),{dataId:a.dataId,shape:l,dtype:a.dtype}):
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n){const r=[j(e.shape),...X(e.shape)],a={dtype:e.dtype,shape:r,dataId:e.dataId},s=[j(t),...X(t)],o=new rn(s,r),i=[r],u=n.runWebGLProgram(o,[a],e.dtype,i,!0);return{dataId:u.dataId,shape:t,dtype:u.dtype}}(a,l,i)}const Gn={kernelName:s.HZH,backendName:"webgl",kernelFunc:zn};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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
return function(e,t,n,r){const a=t,o=e.shape.length,i=s.D5U.parseAxisParam(a,e.shape);let u=i;const l=s.Wap.getAxesPermutation(u,o),c=null!=l;let d=e;c&&(d=Yn(e,l,r),u=s.Wap.getInnerMostAxes(u.length,o)),s.Wap.assertAxesAreInnerMostDims("sum",u,o);const[p,h]=s.Wap.computeOutAndReduceShapes(d.shape,u);let f=p;n&&(f=s.Wap.expandShapeToKeepDim(p,i));const m=s.D5U.sizeFromShape(h),g=zn({inputs:{x:d},attrs:{shape:[s.D5U.sizeFromShape(e.shape)/m,m]},backend:r}),x=Xn(g,(0,s.z4k)(e.dtype),"sum",r),b=zn({inputs:{x},attrs:{shape:f},backend:r});return r.disposeIntermediateTensorInfo(g),r.disposeIntermediateTensorInfo(x),c&&r.disposeIntermediateTensorInfo(d),b}(a,o,i,n)}const Qn={kernelName:s.GBy,backendName:"webgl",kernelFunc:Zn};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Jn(e){const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{perm:s}=r,o=n,i=a.shape.length,u=new Array(i);for(let e=0;e<u.length;e++)u[e]=a.shape[s[e]];let l;if(o.shouldExecuteOnCPU([a])){const e=o.texData.get(a.dataId).values,t=Qt(e,a.shape,a.dtype,s,u);l=o.makeTensorInfo(u,a.dtype);o.texData.get(l.dataId).values=t}else l=Yn(a,s,o);return l}const er={kernelName:s.G3Y,backendName:"webgl",kernelFunc:Jn};function tr({a:e,b:t,transposeA:n,transposeB:r,backend:a,bias:o=null,preluActivationWeights:i=null,leakyreluAlpha:u=0,activation:l=null}){const c=e.shape.length,d=t.shape.length,p=n?e.shape[c-2]:e.shape[c-1],h=r?t.shape[d-1]:t.shape[d-2],f=n?e.shape[c-1]:e.shape[c-2],m=r?t.shape[d-2]:t.shape[d-1],g=e.shape.slice(0,-2),x=t.shape.slice(0,-2),b=s.D5U.sizeFromShape(g),v=s.D5U.sizeFromShape(x),y=s.Jyw.assertAndGetBroadcastShape(e.shape.slice(0,-2),t.shape.slice(0,-2)).concat([f,m]);s.D5U.assert(p===h,(()=>`Error in matMul: inner shapes (${p}) and (${h}) of Tensors with shapes ${e.shape} and ${t.shape} and transposeA=${n} and transposeB=${r} must match.`));const k=n?[b,p,f]:[b,f,p],I=r?[v,m,h]:[v,h,m],w=zn({inputs:{x:e},backend:a,attrs:{shape:k}}),S=zn({inputs:{x:t},backend:a,attrs:{shape:I}}),C=[w,S],$=Math.max(b,v),T=n?w.shape[1]:w.shape[2],E=null!=o,N=null!=i,R="leakyrelu"===l,D=null!=l?On(l,!0):null;let A;if((1===f||1===m)&&T>1e3&&!1===(E||N||R||null!=D)){let e=w,t=S;n&&(e=Jn({inputs:{x:w},backend:a,attrs:{perm:[0,2,1]}}),C.push(e)),r&&(t=Jn({inputs:{x:S},backend:a,attrs:{perm:[0,2,1]}}),C.push(t));const s=1===m;let o=e;1!==m&&(o=zn({inputs:{x:e},backend:a,attrs:{shape:[$,T,1]}}),C.push(o));const i=1===m?2:1;let u=t;s&&(u=zn({inputs:{x:t},backend:a,attrs:{shape:[$,1,T]}}),C.push(u));const l=Ln({inputs:{a:o,b:u},backend:a});A=Zn({inputs:{x:l},backend:a,attrs:{axis:i,keepDims:!0}}),C.push(l)}else{const l=(0,s.x8V)(e.dtype,t.dtype),c=new Mn(k,I,[$,f,m],n,r,E,D,N,R),d=[w,S];if(null!=o&&d.push(o),N&&d.push(i),R){const e=a.makeTensorInfo([],"float32",s.D5U.createScalarValue(u,"float32"));d.push(e),C.push(e)}A=a.runWebGLProgram(c,d,l)}const F=zn({inputs:{x:A},backend:a,attrs:{shape:y}});C.push(A);for(const e of C)a.disposeIntermediateTensorInfo(e);return F}const nr={kernelName:s.usg,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{axis:o,keepDims:i}=r,u=a.shape.length,l=s.D5U.parseAxisParam(o,a.shape);let c=l;const d=s.Wap.getAxesPermutation(c,u);let p=a;null!=d&&(p=Jn({inputs:{x:a},backend:n,attrs:{perm:d}}),c=s.Wap.getInnerMostAxes(c.length,u)),s.Wap.assertAxesAreInnerMostDims("all",c,u);const[h,f]=s.Wap.computeOutAndReduceShapes(p.shape,c),m=zn({inputs:{x:p},backend:n,attrs:{shape:[-1,s.D5U.sizeFromShape(f)]}}),g=Xn(m,m.dtype,"all",n);let x;if(i){x=zn({inputs:{x:g},backend:n,attrs:{shape:s.Wap.expandShapeToKeepDim(h,l)}})}else x=zn({inputs:{x:g},backend:n,attrs:{shape:h}});return n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(g),null!=d&&n.disposeIntermediateTensorInfo(p),x}};const gr={kernelName:s.IKK,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{axis:o,keepDims:i}=r,u=a.shape.length,l=s.D5U.parseAxisParam(o,a.shape);let c=l;const d=s.Wap.getAxesPermutation(c,u);let p=a;null!=d&&(p=Jn({inputs:{x:a},backend:n,attrs:{perm:d}}),c=s.Wap.getInnerMostAxes(c.length,u)),s.Wap.assertAxesAreInnerMostDims("any",c,u);const[h,f]=s.Wap.computeOutAndReduceShapes(p.shape,c),m=zn({inputs:{x:p},backend:n,attrs:{shape:[-1,s.D5U.sizeFromShape(f)]}}),g=Xn(m,m.dtype,"any",n);let x;if(i){x=zn({inputs:{x:g},backend:n,attrs:{shape:s.Wap.expandShapeToKeepDim(h,l)}})}else x=zn({inputs:{x:g},backend:n,attrs:{shape:h}});return n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(g),null!=d&&n.disposeIntermediateTensorInfo(p),x}};
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
class br{constructor(e,t,n,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,s.D5U.assert(e.length>2,(()=>`Packed arg${n.charAt(0).toUpperCase()+n.slice(1)} supports only inputs with rank above 2.`));const a=e[e.length-1],o=Math.ceil(a/t);this.outputShape=e.slice(0,-1),o>1&&this.outputShape.push(o),r||this.variableNames.push("bestIndicesA");const i=this.outputShape,u=i.length,l=Re(u),c=tn("coords",u);let d,p;if(1===o){p=u+1;const e=Re(p);d=`\n        ${e} sourceLocR = ${e}(${c.join()}, 0);\n        ++${c[u-1]};\n        ${e} sourceLocG = ${e}(${c.join()}, 0);\n        ++${c[u-2]};\n        ${e} sourceLocA = ${e}(${c.join()}, 0);\n        --${c[u-1]};\n        ${e} sourceLocB = ${e}(${c.join()}, 0);\n        --${c[u-2]};`}else p=u,d=`\n        ${l} sourceLocR = coords;\n        ++${c[u-1]};\n        ${l} sourceLocG = coords;\n        ++${c[u-2]};\n        ${l} sourceLocA = coords;\n        --${c[u-1]};\n        ${l} sourceLocB = coords;\n        --${c[u-2]};`;const h=["x","y","z","w","u","v"].slice(0,p),f="."+h[p-1],m=h.map((e=>"int "+e)),g=tn("sourceLocR",p-1).concat("inIdx.r"),x=tn("sourceLocG",p-1).concat("inIdx.g"),b=tn("sourceLocB",p-1).concat("inIdx.b"),v=tn("sourceLocA",p-1).concat("inIdx.a"),y="max"===n?"greaterThan":"lessThan",k=r?"":`\n          inIdx = round(vec4(getBestIndicesAChannel(${g.join()}),\n                             getBestIndicesAChannel(${x.join()}),\n                             getBestIndicesAChannel(${b.join()}),\n                             getBestIndicesAChannel(${v.join()})));`,I=`vec4(\n            getAChannel(${g.join()}),\n            hasNextCol ? getAChannel(${x.join()}) : 0.,\n            hasNextRow ? getAChannel(${b.join()}) : 0.,\n            hasNextRow && hasNextCol ? getAChannel(${v.join()}) : 0.)`,w=r?"":`\n      float getBestIndicesAChannel(${m.join()}) {\n        return getChannel(getBestIndicesA(${h.join()}),\n                                          vec2(${h.slice(-2).join()}));\n      }`;this.userCode=`\n      float getAChannel(${m.join()}) {\n        return getChannel(getA(${h.join()}),\n                               vec2(${h.slice(-2).join()}));\n      }\n      ${w}\n      void main() {\n        ${l} coords = getOutputCoords();\n        bool hasNextCol = ${c[u-1]} < ${i[u-1]-1};\n        bool hasNextRow = ${c[u-2]} < ${i[u-2]-1};\n        ${d}\n        ivec4 srcIdx = ivec4(sourceLocR${f}, sourceLocG${f},\n          sourceLocB${f}, sourceLocA${f}) * ${t};\n        ivec4 inIdx = srcIdx;\n        vec4 bestIndex = vec4(inIdx);\n        vec4 bestValue = ${I};\n\n        for (int i = 0; i < ${t}; i++) {\n          inIdx = srcIdx;\n          ${k}\n          vec4 candidate = ${I};\n          bvec4 nan = isnan(candidate);\n          bvec4 replace = bvec4(\n            vec4(${y}(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));\n\n          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,\n                           replace.y  ? candidate.y : bestValue.y,\n                           replace.z  ? candidate.z : bestValue.z,\n                           replace.w  ? candidate.w : bestValue.w);\n          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));\n          srcIdx++;\n        }\n        setOutput(bestIndex);\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function vr(e,t,n,r=null){let a=t.shape[0],o=t.shape[1];null!=r&&(a=r.shape[0],o=r.shape[1]);const i=s.Wap.computeOptimalWindowSize(o),u={windowSize:i,inSize:o,batchSize:a,outSize:Math.ceil(o/i)},l=new xr(u,n,null==r),c=[t];null!=r&&c.push(r);const d=e.runWebGLProgram(l,c,"int32");if(1===d.shape[1])return d;const p=vr(e,t,n,d);return e.disposeIntermediateTensorInfo(d),p}function yr(e,t,n,r=null){const a=null!=r?r.shape:t.shape,o=a[a.length-1],i=s.Wap.computeOptimalWindowSize(o),u=new br(a,i,n,null==r),l=null==r?[t]:[t,r],c=e.runWebGLProgram(u,l,"int32");if(c.shape.length===t.shape.length){const r=yr(e,t,n,c);return e.disposeIntermediateTensorInfo(c),r}return c}function kr(e,t,n,r){const a=[n];if(s.Wap.assertAxesAreInnerMostDims("arg"+r.charAt(0).toUpperCase()+r.slice(1),a,t.shape.length),!(0,s.OBj)().getBool("WEBGL_PACK_REDUCE")||t.shape.length<=2){const n=[],o=e.texData.get(t.dataId);let i=t;null!==o&&o.isPacked&&(i=e.unpackTensor(t),n.push(i));const[u,l]=s.Wap.computeOutAndReduceShapes(i.shape,a),c=s.D5U.sizeFromShape(l),d=zn({inputs:{x:i},backend:e,attrs:{shape:[-1,c]}});n.push(d);const p=vr(e,d,r);n.push(p);const h=zn({inputs:{x:p},backend:e,attrs:{shape:u}});return n.forEach((t=>e.disposeIntermediateTensorInfo(t))),h}return yr(e,t,r)}const Ir={kernelName:s.sJF,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{axis:o}=r;let i=s.D5U.parseAxisParam(o,a.shape);const u=s.Wap.getAxesPermutation(i,a.shape.length);let l=a;const c=[];null!=u&&(l=Jn({inputs:{x:a},backend:n,attrs:{perm:u}}),c.push(l),i=s.Wap.getInnerMostAxes(i.length,l.shape.length)),s.Wap.assertAxesAreInnerMostDims("argMax",[i[0]],l.shape.length);const d=kr(n,l,i[0],"max");return c.forEach((e=>n.disposeIntermediateTensorInfo(e))),d}};const wr={kernelName:s.aJk,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{axis:o}=r;let i=s.D5U.parseAxisParam(o,a.shape);const u=s.Wap.getAxesPermutation(i,a.shape.length);let l=a;const c=[];null!=u&&(l=Jn({inputs:{x:a},backend:n,attrs:{perm:u}}),c.push(l),i=s.Wap.getInnerMostAxes(i.length,l.shape.length)),s.Wap.assertAxesAreInnerMostDims("argMin",[i[0]],l.shape.length);const d=kr(n,l,i[0],"min");return c.forEach((e=>n.disposeIntermediateTensorInfo(e))),d}},Sr=Fn({opSnippet:"if (isnan(x)) return x;\n  if (abs(x) > 1.) {\n    return NAN;\n  }\n  return asin(x);\n"}),Cr={kernelName:s.M2y,backendName:"webgl",kernelFunc:Sr},$r=Fn({opSnippet:"if (isnan(x)) return x;return log(x + sqrt(x * x + 1.0));"}),Tr={kernelName:s.qw7,backendName:"webgl",kernelFunc:$r},Er=Fn({opSnippet:"if (isnan(x)) return x;\n  return atan(x);\n"}),Nr={kernelName:s.jMg,backendName:"webgl",kernelFunc:Er},Rr=_n({opSnippet:"\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return atan(a, b);\n",packedOpSnippet:"\n  vec4 result = atan(a, b);\n  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n"}),Dr={kernelName:s.QCc,backendName:"webgl",kernelFunc:Rr},Ar=Fn({opSnippet:"if (isnan(x)) return x;\n  if ((x < -1.0) || (x > 1.0)) return NAN;\nreturn (log(1.0 + x) - log(1.0 - x)) / 2.0;"}),Fr={kernelName:s.Oyi,backendName:"webgl",kernelFunc:Ar};
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
class _r{constructor(e,t,n,r=!1,a=!1){if(this.variableNames=["x"],"avg"===t&&n)throw new Error("Cannot compute positions for average pool.");const s=e.filterWidth,o=e.strideHeight,i=e.strideWidth,u=e.dilationHeight,l=e.dilationWidth,c=e.effectiveFilterHeight,d=e.effectiveFilterWidth,p=e.padInfo.top,h=e.padInfo.left;this.outputShape=e.outShape;const f="avg"===t,m=`((batch  * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + d`,g=`(xR * ${e.inWidth} + xC) * ${e.inChannels} + d`;let x="0.0";if(f||(x="-1.0 / 1e-20"),n){const t=">=";return void(this.userCode=`\n        const ivec2 strides = ivec2(${o}, ${i});\n        const ivec2 pads = ivec2(${p}, ${h});\n\n        void main() {\n          ivec4 coords = getOutputCoords();\n          int batch = coords[0];\n          int d = coords[3];\n\n          ivec2 xRCCorner = coords.yz * strides - pads;\n          int xRCorner = xRCCorner.x;\n          int xCCorner = xRCCorner.y;\n\n          // max/min x(?, ?, d) to get y(yR, yC, d).\n          // ? = to be determined\n          float minMaxValue = 0.0;\n          float minMaxValueFound = 0.0;\n          int minMaxPosition = 0;\n          float avgValue = 0.0;\n\n          for (int wR = 0; wR < ${c};\n              wR += ${u}) {\n            int xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= ${e.inHeight}) {\n              continue;\n            }\n\n            for (int wC = 0; wC < ${d};\n                wC += ${l}) {\n              int xC = xCCorner + wC;\n\n              if (xC < 0 || xC >= ${e.inWidth}) {\n                continue;\n              }\n\n              float value = getX(batch, xR, xC, d);\n\n              // If a min / max value has already been found, use it. If not,\n              // use the current value.\n              float currMinMaxValue = mix(\n                  value, minMaxValue, minMaxValueFound);\n              if (value ${t} currMinMaxValue) {\n                minMaxValue = value;\n                minMaxValueFound = 1.0;\n                minMaxPosition = ${r?a?m:g:`wR * ${d} + wC`};\n              }\n            }\n          }\n          setOutput(float(minMaxPosition));\n        }\n      `)}let b=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;"avg"===t&&(b="avgValue / count");const v=4*Math.floor(s/4),y=s%4,k=`\n      if (${f}) {\n        avgValue += dot(values, ones);\n      } else {\n        minMaxValue = max(values, minMaxValue);\n      }\n    `;this.userCode=`\n      const ivec2 strides = ivec2(${o}, ${i});\n      const ivec2 pads = ivec2(${p}, ${h});\n      const float initializationValue = ${x};\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float count = 0.0;\n\n      float getValue(int batch, int xR, int xC, int d) {\n        if (xC < 0 || xC >= ${e.inWidth}) {\n          return initializationValue;\n        }\n        count += 1.0;\n        return getX(batch, xR, xC, d);\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d = coords[3];\n\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // max/min x(?, ?, d) to get y(yR, yC, d).\n        // ? = to be determined\n        vec4 minMaxValue = vec4(${x});\n        float avgValue = 0.0;\n        count = 0.0;\n\n        for (int wR = 0; wR < ${c};\n            wR += ${u}) {\n          int xR = xRCorner + wR;\n\n          if (xR < 0 || xR >= ${e.inHeight}) {\n            continue;\n          }\n\n          for (int wC = 0; wC < ${v}; wC += 4) {\n            int xC = xCCorner + wC * ${l};\n\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + ${l}, d),\n              getValue(batch, xR, xC + 2 * ${l}, d),\n              getValue(batch, xR, xC + 3 * ${l}, d)\n            );\n\n            ${k}\n          }\n\n          int xC = xCCorner + ${v};\n          if (${1===y}) {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              initializationValue,\n              initializationValue,\n              initializationValue\n            );\n\n            ${k}\n          } else if (${2===y}) {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + ${l}, d),\n              initializationValue,\n              initializationValue\n            );\n\n            ${k}\n          } else if (${3===y}) {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + ${l}, d),\n              getValue(batch, xR, xC + 2 * ${l}, d),\n              initializationValue\n            );\n\n            ${k}\n          }\n        }\n        setOutput(${b});\n      }\n    `}}class Or{constructor(e,t,n,r=!1,a=!1){if(this.variableNames=["x"],"avg"===t&&n)throw new Error("Cannot compute positions for average pool.");const s=e.filterWidth,o=e.strideDepth,i=e.strideHeight,u=e.strideWidth,l=e.dilationDepth,c=e.dilationHeight,d=e.dilationWidth,p=e.effectiveFilterDepth,h=e.effectiveFilterHeight,f=e.effectiveFilterWidth,m=e.padInfo.front,g=e.padInfo.top,x=e.padInfo.left;this.outputShape=e.outShape;const b="avg"===t;let v="0.0";if(b||(v="-1.0 / 1e-20"),n){const t=">=";return void(this.userCode=`\n        const ivec3 strides =\n            ivec3(${o}, ${i}, ${u});\n        const ivec3 pads = ivec3(${m}, ${g}, ${x});\n\n        void main() {\n          ivec5 coords = getOutputCoords();\n          int batch = coords.x;\n          int ch = coords.u;\n\n          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n          int xDCorner = xCorner.x;\n          int xRCorner = xCorner.y;\n          int xCCorner = xCorner.z;\n\n          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).\n          // ? = to be determined\n          float minMaxValue = 0.0;\n          float minMaxValueFound = 0.0;\n          int minMaxPosition = 0;\n\n          for (int wD = 0; wD < ${p};\n              wD += ${l}) {\n            int xD = xDCorner + wD;\n\n            if (xD < 0 || xD >= ${e.inDepth}) {\n              continue;\n            }\n\n            for (int wR = 0; wR < ${h};\n                wR += ${c}) {\n              int xR = xRCorner + wR;\n\n              if (xR < 0 || xR >= ${e.inHeight}) {\n                continue;\n              }\n\n              for (int wC = 0; wC < ${f};\n                  wC += ${d}) {\n                int xC = xCCorner + wC;\n\n                if (xC < 0 || xC >= ${e.inWidth}) {\n                  continue;\n                }\n\n                float value = getX(batch, xD, xR, xC, ch);\n\n                // If a min / max value has already been found, use it. If not,\n                // use the current value.\n                float currMinMaxValue = mix(\n                    value, minMaxValue, minMaxValueFound);\n                if (value ${t} currMinMaxValue) {\n                  minMaxValue = value;\n                  minMaxValueFound = 1.0;\n                  minMaxPosition = ${r?a?`(((batch * ${e.inDepth} + xD) * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`((xD * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`wD * ${h} * ${f} +\n                      wR * ${f} + wC`};\n                }\n              }\n            }\n          }\n          setOutput(float(minMaxPosition));\n        }\n      `)}let y=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;"avg"===t&&(y="avgValue / count");const k=4*Math.floor(s/4),I=s%4,w=`\n      if (${b}) {\n        avgValue += dot(values, ones);\n      } else {\n        minMaxValue = max(values, minMaxValue);\n      }\n    `;this.userCode=`\n      const ivec3 strides =\n        ivec3(${o}, ${i}, ${u});\n      const ivec3 pads = ivec3(${m}, ${g}, ${x});\n      const float initializationValue = ${v};\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float count = 0.0;\n\n      float getValue(int batch, int xD, int xR, int xC, int ch) {\n        if (xC < 0 || xC >= ${e.inWidth}) {\n          return initializationValue;\n        }\n        count += 1.0;\n        return getX(batch, xD, xR, xC, ch);\n      }\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n        int xDCorner = xCorner.x;\n        int xRCorner = xCorner.y;\n        int xCCorner = xCorner.z;\n\n        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).\n        // ? = to be determined\n        vec4 minMaxValue = vec4(${v});\n        float avgValue = 0.0;\n        count = 0.0;\n\n        for (int wD = 0; wD < ${p};\n            wD += ${l}) {\n          int xD = xDCorner + wD;\n\n          if (xD < 0 || xD >= ${e.inDepth}) {\n            continue;\n          }\n\n          for (int wR = 0; wR < ${h};\n            wR += ${c}) {\n            int xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= ${e.inHeight}) {\n              continue;\n            }\n\n            for (int wC = 0; wC < ${k}; wC += 4) {\n              int xC = xCCorner + wC * ${d};\n\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + ${d}, ch),\n                getValue(batch, xD, xR, xC + 2 * ${d}, ch),\n                getValue(batch, xD, xR, xC + 3 * ${d}, ch)\n              );\n\n              ${w}\n            }\n\n            int xC = xCCorner + ${k};\n            if (${1===I}) {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                initializationValue,\n                initializationValue,\n                initializationValue\n              );\n\n              ${w}\n            } else if (${2===I}) {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + ${d}, ch),\n                initializationValue,\n                initializationValue\n              );\n\n              ${w}\n            } else if (${3===I}) {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + ${d}, ch),\n                getValue(batch, xD, xR, xC + 2 * ${d}, ch),\n                initializationValue\n              );\n\n              ${w}\n            }\n          }\n          setOutput(${y});\n        }\n      }\n    `}}const Mr={kernelName:s.JhU,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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
function(e){const{inputs:t,backend:n,attrs:r}=e,{dy:a,input:o}=t,i=o;de([a,o],"avgPoolGrad");const{filterSize:u,strides:l,pad:c}=r,d=s.Wap.computePool2DInfo(i.shape,u,l,1,c),p=new Pr(d);return n.runWebGLProgram(p,[a],i.dtype)}};const Vr={kernelName:s.XLW,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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
class zr{constructor(e,t,n,r,a,o){this.outputShape=[],this.variableNames=["x","mean","variance"],s.Wap.assertAndGetBroadcastShape(e,t),s.Wap.assertAndGetBroadcastShape(e,n);let i="0.0";null!=r&&(s.Wap.assertAndGetBroadcastShape(e,r),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");let u="1.0";null!=a&&(s.Wap.assertAndGetBroadcastShape(e,a),this.variableNames.push("scale"),u="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`\n      void main() {\n        float x = getXAtOutCoords();\n        float mean = getMeanAtOutCoords();\n        float variance = getVarianceAtOutCoords();\n        float offset = ${i};\n        float scale = ${u};\n        float inv = scale * inversesqrt(variance + float(${o}));\n        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));\n      }\n    `}}
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
const Hr={kernelName:s.sHE,backendName:"webgl",kernelFunc:({inputs:e,backend:t,attrs:n})=>{const{x:r,mean:a,variance:o,offset:i,scale:u}=e;s.D5U.assert(a.shape.length===o.shape.length,(()=>"Batch normalization gradient requires mean and variance to have equal ranks.")),s.D5U.assert(null==i||a.shape.length===i.shape.length,(()=>"Batch normalization gradient requires mean and offset to have equal ranks.")),s.D5U.assert(null==u||a.shape.length===u.shape.length,(()=>"Batch normalization gradient requires mean and scale to have equal ranks."));let{varianceEpsilon:l}=n;null==l&&(l=.001);const c=[r,a,o];let d=null;null!=i&&(d=i.shape,c.push(i));let p=null;null!=u&&(p=u.shape,c.push(u));const h=(0,s.OBj)().getBool("WEBGL_PACK_NORMALIZATION")?new Gr(r.shape,a.shape,o.shape,d,p,l):new zr(r.shape,a.shape,o.shape,d,p,l);return t.runWebGLProgram(h,c,c[0].dtype)}};
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
function(e,t,n,r){const a=r.texData.get(e.dataId),o=r.makeTensorInfo(n,e.dtype),i=r.texData.get(o.dataId);Object.assign(i,a),i.refCount=1,i.shape=n,i.dtype=e.dtype;let u=s.kuN.computeFlatOffset(t,s.D5U.computeStrides(e.shape));a.slice&&(u+=a.slice.flatOffset),i.slice={flatOffset:u,origDataId:a.slice&&a.slice.origDataId||e.dataId};const l=r.dataRefCount.get(i.slice.origDataId)||1;return r.dataRefCount.set(i.slice.origDataId,l+1),o}(a,u,l,n)}const Yr={kernelName:s.p2w,backendName:"webgl",kernelFunc:Kr},Zr={kernelName:s.zws,backendName:"webgl",kernelFunc:e=>{const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{blockShape:o,crops:i}=r;s.D5U.assert(a.shape.length<=4,(()=>"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet"));const u=o.reduce(((e,t)=>e*t)),l=s.Wap.getReshaped(a.shape,o,u),c=s.Wap.getPermuted(l.length,o.length),d=s.Wap.getReshapedPermuted(a.shape,o,u),p=s.Wap.getSliceBeginCoords(i,o.length),h=s.Wap.getSliceSize(d,i,o.length),f=[],m=zn({inputs:{x:a},backend:n,attrs:{shape:l}}),g=Jn({inputs:{x:m},backend:n,attrs:{perm:c}}),x=zn({inputs:{x:g},backend:n,attrs:{shape:d}}),b=Kr({inputs:{x},backend:n,attrs:{begin:p,size:h}});return f.push(m),f.push(g),f.push(x),f.forEach((e=>n.disposeIntermediateTensorInfo(e))),b}};const Qr={kernelName:s.zvY,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a,weights:s}=t,{size:o}=r,i=n.readSync(a.dataId),u=n.readSync(s.dataId),l=ht(i,u,s.dtype,s.shape,o);return n.makeTensorInfo([o],s.dtype,l)}};const Jr={kernelName:s.eEB,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:t,backend:n}=e,{s0:r,s1:a}=t,o=n.readSync(r.dataId),i=n.readSync(a.dataId),u=s.Wap.assertAndGetBroadcastShape(Array.from(o),Array.from(i));return n.makeTensorInfo([u.length],"int32",Int32Array.from(u))}},ea=_n({opSnippet:"return float(a != b);",cpuKernelImpl:_t,dtype:"bool"}),ta={kernelName:s.yQU,backendName:"webgl",kernelFunc:ea};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function na(e){const{inputs:t,backend:n}=e,{input:r}=t;return wn({inputs:{x:n.texData.get(r.dataId).complexTensorInfos.real},backend:n})}const ra={kernelName:s.xJR,backendName:"webgl",kernelFunc:na};const aa={kernelName:s.RFZ,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function e(t){const{inputs:n,backend:r,attrs:a}=t,{x:o}=n,{dtype:i}=a;if("complex64"===i){if("complex64"===o.dtype)return wn({inputs:{x:o},backend:r});const t=s.lls(o.shape),n=e({inputs:{x:o},backend:r,attrs:{dtype:"float32"}}),a=Cn({inputs:{real:n,imag:t},backend:r});return t.dispose(),r.disposeIntermediateTensorInfo(n),a}if("complex64"===o.dtype){const t=na({inputs:{input:o},backend:r}),n=e({inputs:{x:t},backend:r,attrs:{dtype:i}});return r.disposeIntermediateTensorInfo(t),n}if(!s.D5U.hasEncodingLoss(o.dtype,i)){const e=wn({inputs:{x:o},backend:r});return{dataId:e.dataId,shape:e.shape,dtype:i}}if("int32"===i)return function(e,t){const n=new ln(e.shape,"return float(int(x));"),r=t.runWebGLProgram(n,[e],"int32");return{dataId:r.dataId,shape:r.shape,dtype:r.dtype}}(o,r);if("bool"===i){const e=r.makeTensorInfo([],"bool",s.D5U.getTypedArrayFromDType("bool",1)),t=ea({inputs:{a:o,b:e},backend:r});return r.disposeIntermediateTensorInfo(e),t}throw new Error(`Error in Cast: failed to cast ${o.dtype} to ${i}`)}},sa="return ceil(x);",oa=Fn({opSnippet:sa,packedOpSnippet:sa,cpuKernelImpl:mt}),ia={kernelName:s.gJX,backendName:"webgl",kernelFunc:oa};
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
class ua{constructor(e){this.variableNames=["A"],this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=e,this.userCode="\n\n      void main() {\n        float value = getAAtOutCoords();\n        if (isnan(value)) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, minVal, maxVal));\n      }\n    "}}
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
class la{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=e,this.userCode="\n      void main() {\n        vec4 value = getAAtOutCoords();\n\n        if (any(isnan(value))) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));\n      }\n    "}}const ca={kernelName:s.xnO,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{clipValueMin:o,clipValueMax:i}=r;let u;u=(0,s.OBj)().getBool("WEBGL_PACK_CLIP")?new la(a.shape):new ua(a.shape);const l=[[o],[i]];return n.runWebGLProgram(u,[a],a.dtype,l)}};
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
class da{constructor(e){this.variableNames=["real","imag"],this.outputShape=e,this.userCode="\n      void main() {\n        float re = abs(getRealAtOutCoords());\n        float im = abs(getImagAtOutCoords());\n        float mx = max(re, im);\n\n        // sadly the length function in glsl is not underflow-safe\n        // (at least not on Intel GPUs). So the safe solution is\n        // to ensure underflow-safety in all cases.\n        setOutput(\n          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))\n        );\n      }\n    "}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function pa(e,t){return{dataId:t.dataId,dtype:t.dtype,shape:e.shape}}const ha={kernelName:s.yj2,backendName:"webgl",kernelFunc:function(e){const{inputs:t,backend:n}=e,{x:r}=t,a=n.texData.get(r.dataId),s=new da(r.shape),o=[pa(r,a.complexTensorInfos.real),pa(r,a.complexTensorInfos.imag)];return n.runWebGLProgram(s,o,o[0].dtype)}};
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
class fa{constructor(e){this.outputShape=[],this.outputShape=s.Wap.computeOutShape(e,1),this.variableNames=e.map(((e,t)=>`T${t}`));const t=new Array(e.length-1);t[0]=e[0][1];for(let n=1;n<t.length;n++)t[n]=t[n-1]+e[n][1];const n=[`if (yC < ${t[0]}) setOutput(getT0(yR, yC));`];for(let e=1;e<t.length;e++){const r=t[e-1];n.push(`else if (yC < ${t[e]}) setOutput(getT${e}(yR, yC-${r}));`)}const r=t.length,a=t[t.length-1];n.push(`else setOutput(getT${r}(yR, yC-${a}));`),this.userCode=`\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int yR = coords.x;\n        int yC = coords.y;\n\n        ${n.join("\n        ")}\n      }\n    `}}
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
class ma{constructor(e,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=s.Wap.computeOutShape(e,t);const n=this.outputShape,r=n.length,a=Re(r),o=tn("coords",r),i=["x","y","z","w","u","v"].slice(0,r);this.variableNames=e.map(((e,t)=>`T${t}`));const u=new Array(e.length-1);u[0]=e[0][t];for(let n=1;n<u.length;n++)u[n]=u[n-1]+e[n][t];const l=i[t],c=i.slice(-2),d=i.join();let p=`if (${l} < ${u[0]}) {\n        return getChannel(\n            getT0(${d}), vec2(${c.join()}));\n        }`;for(let e=1;e<u.length;e++){const t=u[e-1];p+=`\n        if (${l} < ${u[e]}  && ${l} >= ${u[e-1]}) {\n          return getChannel(\n            getT${e}(${ga(i,l,t)}),\n            vec2(${ga(c,l,t)}));\n        }`}const h=u.length,f=u[u.length-1];p+=`\n        return getChannel(\n          getT${h}(${ga(i,l,f)}),\n          vec2(${ga(c,l,f)}));`,this.userCode=`\n      float getValue(${i.map((e=>"int "+e))}) {\n        ${p}\n      }\n\n      void main() {\n        ${a} coords = getOutputCoords();\n        vec4 result = vec4(getValue(${o}), 0., 0., 0.);\n\n        ${o[r-1]} = ${o[r-1]} + 1;\n        if (${o[r-1]} < ${n[r-1]}) {\n          result.g = getValue(${o});\n        }\n\n        ${o[r-2]} = ${o[r-2]} + 1;\n        if (${o[r-2]} < ${n[r-2]}) {\n          result.a = getValue(${o});\n        }\n\n        ${o[r-1]} = ${o[r-1]} - 1;\n        if (${o[r-2]} < ${n[r-2]} &&\n            ${o[r-1]} < ${n[r-1]}) {\n          result.b = getValue(${o});\n        }\n        setOutput(result);\n      }\n    `}}function ga(e,t,n){const r=e.indexOf(t);return e.map(((e,t)=>t===r?`${e} - ${n}`:e)).join()}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function xa(e){const{inputs:t,backend:n}=e,{input:r}=t;return wn({inputs:{x:n.texData.get(r.dataId).complexTensorInfos.imag},backend:n})}const ba={kernelName:s.J_u,backendName:"webgl",kernelFunc:xa};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function va(e,t,n){const r=e[0].dtype;if("complex64"===r){const r=e.map((e=>na({inputs:{input:e},backend:n}))),a=e.map((e=>xa({inputs:{input:e},backend:n}))),s=va(r,t,n),o=va(a,t,n),i=Cn({inputs:{real:s,imag:o},backend:n});return r.forEach((e=>n.disposeIntermediateTensorInfo(e))),a.forEach((e=>n.disposeIntermediateTensorInfo(e))),n.disposeIntermediateTensorInfo(s),n.disposeIntermediateTensorInfo(o),i}let a=n.shouldExecuteOnCPU(e);if("string"===r&&(a=!0),a){const a=e.map((e=>{const r=s.D5U.sizeFromShape(e.shape.slice(t));return zn({inputs:{x:e},backend:n,attrs:{shape:[-1,r]}})})),o=a.map((e=>({vals:n.readSync(e.dataId),shape:e.shape}))),i=s.Wap.computeOutShape(a.map((e=>e.shape)),1),u=1===a[0].shape[0],l=gt(o,i,r,u),c=s.Wap.computeOutShape(e.map((e=>e.shape)),t),d=n.makeTensorInfo(c,r,l);return a.forEach((e=>n.disposeIntermediateTensorInfo(e))),d}if(e.length>(0,s.OBj)().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){const r=Math.floor(e.length/2),a=va(e.slice(0,r),t,n),s=va(e.slice(r),t,n),o=va([a,s],t,n);return n.disposeIntermediateTensorInfo(a),n.disposeIntermediateTensorInfo(s),o}if((0,s.OBj)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&e[0].shape.length>1){const a=new ma(e.map((e=>e.shape)),t);return n.runWebGLProgram(a,e,r)}const{tensors2D:o,outShape:i}=function(e,t,n){const r=s.Wap.computeOutShape(e.map((e=>e.shape)),t);return{tensors2D:e.map((e=>zn({inputs:{x:e},attrs:{shape:[-1,s.D5U.sizeFromShape(e.shape.slice(t))]},backend:n}))),outShape:r}}(e,t,n),u=new fa(o.map((e=>e.shape))),l=n.runWebGLProgram(u,o,r);o.forEach((e=>n.disposeIntermediateTensorInfo(e)));const c=zn({inputs:{x:l},attrs:{shape:i},backend:n});return n.disposeIntermediateTensorInfo(l),c}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ya(e){const{inputs:t,backend:n,attrs:r}=e,{axis:a}=r,o=s.D5U.parseAxisParam(a,t[0].shape)[0],i=s.Wap.computeOutShape(t.map((e=>e.shape)),o);if(0===s.D5U.sizeFromShape(i))return n.makeTensorInfo(i,t[0].dtype,[]);const u=t.filter((e=>s.D5U.sizeFromShape(e.shape)>0));if(1===u.length)return wn({inputs:{x:u[0]},backend:n});const l=u.map((e=>e.shape));return s.Wap.assertParamsConsistent(l,o),va(u,o,n)}const ka={kernelName:s.Eh3,backendName:"webgl",kernelFunc:ya};
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
class Ia{constructor(e,t=!1,n=null,r=!1,a=!1){this.variableNames=["x","W"],this.outputShape=e.outShape;const s=e.padInfo.top,o=e.padInfo.left,i=e.strideHeight,u=e.strideWidth,l=e.dilationHeight,c=e.dilationWidth,d=e.filterHeight,p=e.filterWidth,h=4*Math.floor(e.inChannels/4),f=e.inChannels%4,m="channelsLast"===e.dataFormat,g=m?1:2,x=m?2:3,b=m?3:1;let v="",y="";n&&(v=r?`float activation(float a) {\n          float b = getPreluActivationWeightsAtOutCoords();\n          ${n}\n        }`:a?`float activation(float a) {\n          float b = getLeakyreluAlphaAtOutCoords();\n          ${n}\n        }`:`\n          float activation(float x) {\n            ${n}\n          }\n        `,y="result = activation(result);");const k=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),a&&this.variableNames.push("leakyreluAlpha"),this.userCode=`\n      ${v}\n\n      const ivec2 strides = ivec2(${i}, ${u});\n      const ivec2 pads = ivec2(${s}, ${o});\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d2 = coords[${b}];\n\n        ivec2 xRCCorner =\n            ivec2(coords[${g}], coords[${x}]) * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < ${d}; wR++) {\n          int xR = xRCorner + wR * ${l};\n\n          if (xR < 0 || xR >= ${e.inHeight}) {\n            continue;\n          }\n\n          for (int wC = 0; wC < ${p}; wC++) {\n            int xC = xCCorner + wC * ${c};\n\n            if (xC < 0 || xC >= ${e.inWidth}) {\n              continue;\n            }\n\n            for (int d1 = 0; d1 < ${h}; d1 += 4) {\n              vec4 wValues = vec4(\n                getW(wR, wC, d1, d2),\n                getW(wR, wC, d1 + 1, d2),\n                getW(wR, wC, d1 + 2, d2),\n                getW(wR, wC, d1 + 3, d2)\n              );\n\n              if (${m}) {\n                vec4 xValues = vec4(\n                  getX(batch, xR, xC, d1),\n                  getX(batch, xR, xC, d1 + 1),\n                  getX(batch, xR, xC, d1 + 2),\n                  getX(batch, xR, xC, d1 + 3)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec4 xValues = vec4(\n                  getX(batch, d1, xR, xC),\n                  getX(batch, d1 + 1, xR, xC),\n                  getX(batch, d1 + 2, xR, xC),\n                  getX(batch, d1 + 3, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n            }\n\n            if (${1===f}) {\n\n              if (${m}) {\n                dotProd +=\n                    getX(batch, xR, xC, ${h}) *\n                    getW(wR, wC, ${h}, d2);\n              } else {\n                dotProd +=\n                    getX(batch, ${h}, xR, xC) *\n                    getW(wR, wC, ${h}, d2);\n              }\n\n            } else if (${2===f}) {\n              vec2 wValues = vec2(\n                getW(wR, wC, ${h}, d2),\n                getW(wR, wC, ${h} + 1, d2)\n              );\n\n              if (${m}) {\n                vec2 xValues = vec2(\n                  getX(batch, xR, xC, ${h}),\n                  getX(batch, xR, xC, ${h} + 1)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec2 xValues = vec2(\n                  getX(batch, ${h}, xR, xC),\n                  getX(batch, ${h} + 1, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n\n            } else if (${3===f}) {\n              vec3 wValues = vec3(\n                getW(wR, wC, ${h}, d2),\n                getW(wR, wC, ${h} + 1, d2),\n                getW(wR, wC, ${h} + 2, d2)\n              );\n\n              if (${m}) {\n                vec3 xValues = vec3(\n                  getX(batch, xR, xC, ${h}),\n                  getX(batch, xR, xC, ${h} + 1),\n                  getX(batch, xR, xC, ${h} + 2)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec3 xValues = vec3(\n                  getX(batch, ${h}, xR, xC),\n                  getX(batch, ${h} + 1, xR, xC),\n                  getX(batch, ${h} + 2, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n\n            }\n          }\n        }\n\n        float result = dotProd;\n        ${k}\n        ${y}\n        setOutput(result);\n      }\n    `}}class wa{constructor(e){this.variableNames=["x","W"],this.outputShape=e.outShape;const t=e.padInfo.front,n=e.padInfo.top,r=e.padInfo.left,a=e.strideDepth,s=e.strideHeight,o=e.strideWidth,i=e.dilationDepth,u=e.dilationHeight,l=e.dilationWidth,c=e.filterDepth,d=e.filterHeight,p=e.filterWidth,h=4*Math.floor(e.inChannels/4),f=e.inChannels%4;this.userCode=`\n      const ivec3 strides = ivec3(${a}, ${s}, ${o});\n      const ivec3 pads = ivec3(${t}, ${n}, ${r});\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int d2 = coords.u;\n\n        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n        int xFCorner = xFRCCorner.x;\n        int xRCorner = xFRCCorner.y;\n        int xCCorner = xFRCCorner.z;\n\n        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get\n        // y(yF, yR, yC, d2). ? = to be determined. : = across all\n        // values in that axis.\n        float dotProd = 0.0;\n        for (int wF = 0; wF < ${c}; wF++) {\n          int xF = xFCorner + wF * ${i};\n\n          if (xF < 0 || xF >= ${e.inDepth}) {\n            continue;\n          }\n\n          for (int wR = 0; wR < ${d}; wR++) {\n            int xR = xRCorner + wR * ${u};\n\n            if (xR < 0 || xR >= ${e.inHeight}) {\n              continue;\n            }\n\n            for (int wC = 0; wC < ${p}; wC++) {\n              int xC = xCCorner + wC * ${l};\n\n              if (xC < 0 || xC >= ${e.inWidth}) {\n                continue;\n              }\n\n              for (int d1 = 0; d1 < ${h}; d1 += 4) {\n                vec4 xValues = vec4(\n                  getX(batch, xF, xR, xC, d1),\n                  getX(batch, xF, xR, xC, d1 + 1),\n                  getX(batch, xF, xR, xC, d1 + 2),\n                  getX(batch, xF, xR, xC, d1 + 3)\n                );\n                vec4 wValues = vec4(\n                  getW(wF, wR, wC, d1, d2),\n                  getW(wF, wR, wC, d1 + 1, d2),\n                  getW(wF, wR, wC, d1 + 2, d2),\n                  getW(wF, wR, wC, d1 + 3, d2)\n                );\n\n                dotProd += dot(xValues, wValues);\n              }\n\n              if (${1===f}) {\n                dotProd +=\n                  getX(batch, xF, xR, xC, ${h}) *\n                  getW(wF, wR, wC, ${h}, d2);\n              } else if (${2===f}) {\n                vec2 xValues = vec2(\n                  getX(batch, xF, xR, xC, ${h}),\n                  getX(batch, xF, xR, xC, ${h} + 1)\n                );\n                vec2 wValues = vec2(\n                  getW(wF, wR, wC, ${h}, d2),\n                  getW(wF, wR, wC, ${h} + 1, d2)\n                );\n                dotProd += dot(xValues, wValues);\n              } else if (${3===f}) {\n                vec3 xValues = vec3(\n                  getX(batch, xF, xR, xC, ${h}),\n                  getX(batch, xF, xR, xC, ${h} + 1),\n                  getX(batch, xF, xR, xC, ${h} + 2)\n                );\n                vec3 wValues = vec3(\n                  getW(wF, wR, wC, ${h}, d2),\n                  getW(wF, wR, wC, ${h} + 1, d2),\n                  getW(wF, wR, wC, ${h} + 2, d2)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    `}}
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
class Sa{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec3"},{name:"pad",type:"ivec2"},{name:"stride",type:"ivec2"},{name:"dilation",type:"ivec2"},{name:"inChannels",type:"int"},{name:"itemsPerBlockRow",type:"int"},{name:"outWidth",type:"int"}],this.outputShape=e,this.enableShapeUniforms=Oe(this.outputShape.length);const{dataFormat:n}=t,r=he(),a="channelsLast"===n,s=a?0:1,o=a?1:2,i=this.enableShapeUniforms?"if(blockIndex < outShape[1] && pos < outShape[0]) {":`if(blockIndex < ${e[1]} && pos < ${e[0]}) {`;let u="";for(let e=0;e<=1;e++)for(let t=0;t<=1;t++)u+=`\n          blockIndex = rc.y + ${t};\n          pos = rc.x + ${e};\n\n          ${i}\n            offsetY = int(blockIndex / outWidth) * stride[0] - pad[0];\n            d0 = offsetY + dilation[0] * (pos / itemsPerBlockRow);\n\n            if(d0 < inputShape[${s}] && d0 >= 0) {\n              // Use custom imod instead mod. On Intel GPU, mod may generate\n              // unexpected value.\n              // https://github.com/tensorflow/tfjs/issues/5447\n              offsetX = imod(blockIndex, outWidth) * stride[1] - pad[1];\n              d1 = offsetX + dilation[1] * (imod(pos, itemsPerBlockRow) /\n                  inChannels);\n\n              if(d1 < inputShape[${o}] && d1 >= 0) {\n\n                ch = imod(pos, inChannels);\n\n                if (${a}) {\n                  innerDims = vec2(d1, ch);\n                  result[${2*e+t}] = getChannel(\n                    getA(d0, int(innerDims.x),\n                    int(innerDims.y)), innerDims);\n                } else {\n                  innerDims = vec2(d0, d1);\n                  result[${2*e+t}] = getChannel(\n                    getA(ch, int(innerDims.x),\n                    int(innerDims.y)), innerDims);\n                }\n              }\n            }\n          }\n        `;this.userCode=`\n      void main() {\n        ivec2 rc = getOutputCoords();\n\n        vec4 result = vec4(0);\n\n        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;\n        vec2 innerDims;\n\n        ${u}\n\n        ${r.output} = result;\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ca({x:e,filter:t,convInfo:n,backend:r,bias:a=null,preluActivationWeights:o=null,leakyreluAlpha:i=0,activation:u=null}){const l=e.shape,c=r.texData.get(e.dataId),d=n.inChannels,p=l[0]*l[1]*l[2],h=n.outChannels,f="channelsLast"===n.dataFormat;let m;const g=[];if(!((1===p||1===h)&&d>1e3)&&c.isPacked&&f&&null!=c.texture&&l[2]%2!=0&&s.D5U.arraysEqual(c.shape.slice(-3),l.slice(-3))){const d=l[0]*l[1]*(l[2]+1),p={dataId:e.dataId,shape:[1,d,n.inChannels],dtype:e.dtype},h=c.shape;c.shape=c.shape.slice(),c.shape[c.shape.length-2]++,s.D5U.assert(Z(c.shape,p.shape),(()=>`packed reshape ${c.shape} to ${p.shape} isn't free`));const f=zn({inputs:{x:t},backend:r,attrs:{shape:[1,n.inChannels,n.outChannels]}});g.push(f);const x=tr({a:p,b:f,backend:r,transposeA:false,transposeB:false,bias:a,activation:u,preluActivationWeights:o,leakyreluAlpha:i}),b=r.texData.get(x.dataId);s.D5U.assert(b.isPacked,(()=>"batchMatMul result is expected to be packed")),c.shape=h,b.shape=n.outShape,m=wn({inputs:{x},backend:r}),m.shape=n.outShape,g.push(x)}else{const s=zn({inputs:{x:e},backend:r,attrs:{shape:[1,f?l[0]*l[1]*l[2]:l[0]*l[2]*l[3],n.inChannels]}}),c=zn({inputs:{x:t},backend:r,attrs:{shape:[1,n.inChannels,n.outChannels]}}),d=tr({a:s,b:c,transposeA:false,transposeB:false,backend:r,bias:a,activation:u,preluActivationWeights:o,leakyreluAlpha:i});m=zn({inputs:{x:d},backend:r,attrs:{shape:n.outShape}}),g.push(s),g.push(c),g.push(d)}for(const e of g)r.disposeIntermediateTensorInfo(e);return m}function $a({x:e,filter:t,convInfo:n,backend:r,bias:a=null,preluActivationWeights:o=null,leakyreluAlpha:i=0,activation:u=null}){const{filterWidth:l,filterHeight:c,inChannels:d,outWidth:p,outHeight:h,dataFormat:f}=n,m="channelsLast"===f,g=l*c*d,x=h*p,b=[g,x],v=[],y=zn({inputs:{x:e},backend:r,attrs:{shape:e.shape.slice(1)}}),k=zn({inputs:{x:t},backend:r,attrs:{shape:[1,g,s.D5U.sizeFromShape(t.shape)/g]}});v.push(y),v.push(k);const I=new Sa(b,n),w=[y.shape,[n.padInfo.top,n.padInfo.left],[n.strideHeight,n.strideWidth],[n.dilationHeight,n.dilationWidth],[n.inChannels],[n.filterWidth*n.inChannels],[n.outWidth]],S=r.runWebGLProgram(I,[y],"float32",w),C=zn({inputs:{x:S},backend:r,attrs:{shape:[1,b[0],b[1]]}});v.push(S),v.push(C);const $=null!=a,T=null!=o,E="leakyrelu"===u,N=u?On(u,!0):null,R=new Mn(C.shape,k.shape,[1,x,n.outChannels],!0,!1,$,N,T,E),D=[C,k];if(a&&D.push(a),T&&D.push(o),E){const e=r.makeTensorInfo([],"float32",s.D5U.createScalarValue(i,"float32"));D.push(e),v.push(e)}const A=r.runWebGLProgram(R,D,"float32"),F=zn({inputs:{x:A},backend:r,attrs:{shape:m?[1,h,p,n.outChannels]:[1,n.outChannels,h,p]}});v.push(A);for(const e of v)r.disposeIntermediateTensorInfo(e);return F}const Ta={kernelName:s.mhS,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a,filter:o}=t,{strides:i,pad:u,dataFormat:l,dilations:c,dimRoundingMode:d}=r,p=s.Wap.convertConv2DDataFormat(l),h=s.Wap.computeConv2DInfo(a.shape,o.shape,i,c,u,d,!1,p);let f;if(1!==h.filterHeight||1!==h.filterWidth||1!==h.dilationHeight||1!==h.dilationWidth||1!==h.strideHeight||1!==h.strideWidth||"SAME"!==h.padInfo.type&&"VALID"!==h.padInfo.type)if((0,s.OBj)().getBool("WEBGL_CONV_IM2COL")&&1===a.shape[0])f=$a({x:a,filter:o,convInfo:h,backend:n});else{const e=new Ia(h);f=n.runWebGLProgram(e,[a,o],"float32")}else f=Ca({x:a,filter:o,convInfo:h,backend:n});const m=zn({inputs:{x:f},backend:n,attrs:{shape:h.outShape}});return n.disposeIntermediateTensorInfo(f),m}};
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
class Ea{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const t=e.strideHeight,n=e.strideWidth,r=e.padInfo.top,a=e.padInfo.left,s="channelsLast"===e.dataFormat;this.userCode=`\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int wR = coords.x;\n        int wC = coords.y;\n        int d1 = coords.z;\n        int d2 = coords.w;\n\n        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int b = 0; b < ${e.batchSize}; b++) {\n          for (int yR = 0; yR < ${e.outHeight}; yR++) {\n            int xR = wR + yR * ${t} - ${r};\n\n            if (xR < 0 || xR >= ${e.inHeight}) {\n              continue;\n            }\n\n            for (int yC = 0; yC < ${e.outWidth}; yC++) {\n              int xC = wC + yC * ${n} - ${a};\n\n              if (xC < 0 || xC >= ${e.inWidth}) {\n                continue;\n              }\n\n              if (${s}) {\n                float dyValue = getDy(b, yR, yC, d2);\n                float xValue = getX(b, xR, xC, d1);\n                dotProd += (xValue * dyValue);\n              } else {\n                float dyValue = getDy(b, d2, yR, yC);\n                float xValue = getX(b, d1, xR, xC);\n                dotProd += (xValue * dyValue);\n              }\n\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    `}}class Na{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,a=e.strideWidth,s="channelsLast"===e.dataFormat,o=t-1-e.padInfo.top,i=n-1-e.padInfo.left,u=s?1:2,l=s?2:3,c=s?3:1;this.userCode=`\n      const ivec2 pads = ivec2(${o}, ${i});\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords[${c}];\n\n        ivec2 dyCorner = ivec2(coords[${u}], coords[${l}]) - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < ${t}; wR++) {\n          float dyR = float(dyRCorner + wR) / ${r}.0;\n\n          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          int wRPerm = ${t} - 1 - wR;\n\n          for (int wC = 0; wC < ${n}; wC++) {\n            float dyC = float(dyCCorner + wC) / ${a}.0;\n\n            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            int wCPerm = ${n} - 1 - wC;\n\n            for (int d2 = 0; d2 < ${e.outChannels}; d2++) {\n\n              if (${s}) {\n                float xValue = getDy(batch, idyR, idyC, d2);\n                float wValue = getW(wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              } else {\n                float xValue = getDy(batch, d2, idyR, idyC);\n                float wValue = getW(wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              }\n\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    `}}class Ra{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const t=e.strideDepth,n=e.strideHeight,r=e.strideWidth,a=e.padInfo.front,s=e.padInfo.top,o=e.padInfo.left;this.userCode=`\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int wF = coords.x;\n        int wR = coords.y;\n        int wC = coords.z;\n        int d1 = coords.w;\n        int d2 = coords.u;\n\n        float dotProd = 0.0;\n\n        for (int b = 0; b < ${e.batchSize}; b++) {\n          for (int yF = 0; yF < ${e.outDepth}; yF++) {\n            int xF = wF + yF * ${t} - ${a};\n\n            if (xF < 0 || xF >= ${e.inDepth}) {\n              continue;\n            }\n\n            for (int yR = 0; yR < ${e.outHeight}; yR++) {\n              int xR = wR + yR * ${n} - ${s};\n\n              if (xR < 0 || xR >= ${e.inHeight}) {\n                continue;\n              }\n\n              for (int yC = 0; yC < ${e.outWidth}; yC++) {\n                int xC = wC + yC * ${r} - ${o};\n\n                if (xC < 0 || xC >= ${e.inWidth}) {\n                  continue;\n                }\n\n                float dyValue = getDy(b, yF, yR, yC, d2);\n                float xValue = getX(b, xF, xR, xC, d1);\n                dotProd += (xValue * dyValue);\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    `}}class Da{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const t=e.filterDepth,n=e.filterHeight,r=e.filterWidth,a=e.strideDepth,s=e.strideHeight,o=e.strideWidth,i=t-1-e.padInfo.front,u=n-1-e.padInfo.top,l=r-1-e.padInfo.left;this.userCode=`\n      const ivec3 pads = ivec3(${i}, ${u}, ${l});\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int d1 = coords.u;\n\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyFCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        float dotProd = 0.0;\n        for (int wF = 0; wF < ${t}; wF++) {\n          float dyF = float(dyFCorner + wF) / ${a}.0;\n\n          if (dyF < 0.0 || dyF >= ${e.outDepth}.0 || fract(dyF) > 0.0) {\n            continue;\n          }\n          int idyF = int(dyF);\n\n          int wFPerm = ${t} - 1 - wF;\n\n          for (int wR = 0; wR < ${n}; wR++) {\n            float dyR = float(dyRCorner + wR) / ${s}.0;\n\n            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||\n              fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            int wRPerm = ${n} - 1 - wR;\n\n            for (int wC = 0; wC < ${r}; wC++) {\n              float dyC = float(dyCCorner + wC) / ${o}.0;\n\n              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              int wCPerm = ${r} - 1 - wC;\n\n              for (int d2 = 0; d2 < ${e.outChannels}; d2++) {\n                float xValue = getDy(batch, idyF, idyR, idyC, d2);\n                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    `}}const Aa={kernelName:s.wUP,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a,dy:o}=t,{strides:i,pad:u,dataFormat:l,dimRoundingMode:c,filterShape:d}=r,p=s.Wap.convertConv2DDataFormat(l),h=s.Wap.computeConv2DInfo(a.shape,d,i,1,u,c,!1,p),f=new Ea(h);return n.runWebGLProgram(f,[a,o],"float32")}};const Fa={kernelName:s.wm,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{dy:a,filter:o}=t,{inputShape:i,strides:u,pad:l,dataFormat:c,dimRoundingMode:d}=r,p=s.Wap.convertConv2DDataFormat(c),h=s.Wap.computeConv2DInfo(i,o.shape,u,1,l,d,!1,p),f=new Na(h);return n.runWebGLProgram(f,[a,o],"float32")}};const _a={kernelName:s.x12,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a,filter:o}=t,{strides:i,pad:u,dilations:l}=r,c=s.Wap.computeConv3DInfo(a.shape,o.shape,i,l,u),d=new wa(c);return n.runWebGLProgram(d,[a,o],"float32")}};const Oa={kernelName:s.o2y,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a,dy:o}=t,{strides:i,pad:u,filterShape:l}=r,c=s.Wap.computeConv3DInfo(a.shape,l,i,1,u),d=new Ra(c);return n.runWebGLProgram(d,[a,o],"float32")}};const Ma={kernelName:s.ik2,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{dy:a,filter:o}=t,{pad:i,strides:u,inputShape:l}=r,c=s.Wap.computeConv3DInfo(l,o.shape,u,1,i),d=new Da(c);return n.runWebGLProgram(d,[a,o],"float32")}},Ua=Fn({opSnippet:"if (isnan(x)) return x;\n  return cos(x);\n"}),Pa={kernelName:s.mc4,backendName:"webgl",kernelFunc:Ua},Wa=Fn({opSnippet:"\n  float e2x = exp(-x);\n  return (e2x + 1.0 / e2x) / 2.0;\n"}),Ba={kernelName:s.TR1,backendName:"webgl",kernelFunc:Wa};
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
class La{constructor(e,t,n,r,a){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];const[s,o,i,u]=e,[l]=t,[c,d]=n;this.outputShape=[l,c,d,u];const p="bilinear"===r?1:0,[h,f]=[o-1+".0",i-1+".0"],[m,g,x]=c>1?[""+(o-1)/(c-1),"(y2-y1) * height_ratio",`y1*${h} + float(y)*(height_scale)`]:["0.0","0.0",`0.5 * (y1+y2) * ${h}`],[b,v,y]=d>1?[""+(i-1)/(d-1),"(x2-x1) * width_ratio",`x1*${f} + float(x)*(width_scale)`]:["0.0","0.0",`0.5 * (x1+x2) * ${f}`];this.userCode=`\n      const float height_ratio = float(${m});\n      const float width_ratio = float(${b});\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int y = coords[1];\n        int x = coords[2];\n        int d = coords[3];\n\n        // get box vals\n        float y1 = getBoxes(b,0);\n        float x1 = getBoxes(b,1);\n        float y2 = getBoxes(b,2);\n        float x2 = getBoxes(b,3);\n\n        // get image in batch index\n        int bInd = round(getBoxInd(b));\n        if(bInd < 0 || bInd >= ${s}) {\n          return;\n        }\n\n        float height_scale = ${g};\n        float width_scale = ${v};\n\n        float in_y = ${x};\n        if( in_y < 0.0 || in_y > ${h} ) {\n          setOutput(float(${a}));\n          return;\n        }\n        float in_x = ${y};\n        if( in_x < 0.0 || in_x > ${f} ) {\n          setOutput(float(${a}));\n          return;\n        }\n\n        vec2 sourceFracIndexCR = vec2(in_x,in_y);\n        if(${p} == 1) {\n          // Compute the four integer indices.\n          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);\n          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));\n\n          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);\n          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);\n          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);\n          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);\n\n          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);\n\n          float top = topLeft + (topRight - topLeft) * fracCR.x;\n          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;\n          float newValue = top + (bottom - top) * fracCR.y;\n          setOutput(newValue);\n        } else {\n          // Compute the coordinators of nearest neighbor point.\n          ivec2 sourceNearestCR = ivec2(floor(\n            sourceFracIndexCR + vec2(0.5,0.5)));\n          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);\n          setOutput(newValue);\n        }\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Va={kernelName:s.VcC,backendName:"webgl",kernelFunc:e=>{const{inputs:t,backend:n,attrs:r}=e,{image:a,boxes:s,boxInd:o}=t,{cropSize:i,method:u,extrapolationValue:l}=r,c=new La(a.shape,s.shape,i,u,l);return n.runWebGLProgram(c,[a,s,o],"float32")}};class za{constructor(e,t,n){this.variableNames=["x"],this.customUniforms=[{name:"index",type:"float"}],this.outputShape=e;const r=e.length,a=t?"0.0":`getX(${Ga(r,"coords")})`,s=e[e.length-1];let o="",i="";t?(o=n?"end != "+(s-1):"end != 0",i=n?"end + 1":"end - 1"):(o=n?`end + pow2 < ${s}`:"end >= pow2",i=n?"end + pow2":"end - pow2"),this.userCode=`\n      void main() {\n        ${Re(r)} coords = getOutputCoords();\n        int end = ${Ha(r,"coords")};\n        float val = ${a};\n        int pow2 = int(pow(2.0, index));\n        if (${o}) {\n          int idx = ${i};\n          ${Ha(r,"coords")} = idx;\n          val += getX(${Ga(r,"coords")});\n        }\n        setOutput(val);\n      }\n    `}}function Ga(e,t){if(1===e)return`${t}`;if(2===e)return`${t}.x, ${t}.y`;if(3===e)return`${t}.x, ${t}.y, ${t}.z`;if(4===e)return`${t}.x, ${t}.y, ${t}.z, ${t}.w`;throw Error(`Cumulative sum for rank ${e} is not yet supported`)}function Ha(e,t){if(1===e)return`${t}`;if(2===e)return`${t}.y`;if(3===e)return`${t}.z`;if(4===e)return`${t}.w`;throw Error(`Cumulative sum for rank ${e} is not yet supported`)}const ja={kernelName:s.iHb,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{axis:o,exclusive:i,reverse:u}=r,l=a.shape.length,c=s.Wap.getAxesPermutation([o],l);let d=a;null!=c&&(d=Jn({inputs:{x:a},backend:n,attrs:{perm:c}}));const p=s.Wap.getInnerMostAxes(1,l)[0];if(p!==l-1)throw new Error(`WebGL cumsum shader expects an inner-most axis=${a.shape.length-1} but got axis=${o}`);const h=d.shape[p];let f=wn({inputs:{x:d},backend:n});for(let e=0;e<=Math.ceil(Math.log2(h))-1;e++){const t=new za(d.shape,!1,u),r=[[e]],a=f;f=n.runWebGLProgram(t,[f],f.dtype,r),n.disposeIntermediateTensorInfo(a)}if(i){const e=new za(d.shape,i,u),t=f;f=n.runWebGLProgram(e,[f],f.dtype),n.disposeIntermediateTensorInfo(t)}if(null!=c){const e=Jn({inputs:{x:f},backend:n,attrs:{perm:s.Wap.getUndoAxesPermutation(c)}});return n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(d),e}return f}};const Xa={kernelName:s.QRR,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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
class qa{constructor(e,t,n){this.variableNames=["x"],this.outputShape=[],this.outputShape=e,this.blockSize=t,this.dataFormat=n,this.userCode=`\n    void main() {\n      ivec4 coords = getOutputCoords();\n      int b = coords[0];\n      int h = ${this.getHeightCoordString()};\n      int w = ${this.getWidthCoordString()};\n      int d = ${this.getDepthCoordString()};\n\n      int in_h = h / ${t};\n      int offset_h = imod(h, ${t});\n      int in_w = w / ${t};\n      int offset_w = imod(w, ${t});\n      int offset_d = (offset_h * ${t} + offset_w) *\n        ${this.getOutputDepthSize()};\n      int in_d = d + offset_d;\n\n      float result = ${this.getInputSamplingString()};\n      setOutput(result);\n    }\n  `}getHeightCoordString(){return"NHWC"===this.dataFormat?"coords[1]":"coords[2]"}getWidthCoordString(){return"NHWC"===this.dataFormat?"coords[2]":"coords[3]"}getDepthCoordString(){return"NHWC"===this.dataFormat?"coords[3]":"coords[1]"}getOutputDepthSize(){return"NHWC"===this.dataFormat?this.outputShape[3]:this.outputShape[1]}getInputSamplingString(){return"NHWC"===this.dataFormat?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}}const Ka={kernelName:s.T0n,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{blockSize:s,dataFormat:o}=r,i=a.shape[0],u=("NHWC"===o?a.shape[1]:a.shape[2])*s,l=("NHWC"===o?a.shape[2]:a.shape[3])*s,c=("NHWC"===o?a.shape[3]:a.shape[1])/(s*s),d=new qa("NHWC"===o?[i,u,l,c]:[i,c,u,l],s,o);return n.runWebGLProgram(d,[a],a.dtype)}};
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
class Ya{constructor(e,t=!1,n=null,r=!1,a=!1){this.variableNames=["x","W"],this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=Oe(this.outputShape.length);const s=e.filterHeight,o=e.filterWidth,i=e.outChannels/e.inChannels;let u="",l="";n&&(u=r?`float activation(float a) {\n          float b = getPreluActivationWeightsAtOutCoords();\n          ${n}\n        }`:a?`float activation(float a) {\n          float b = getLeakyreluAlphaAtOutCoords();\n          ${n}\n        }`:`\n          float activation(float x) {\n            ${n}\n          }\n        `,l="result = activation(result);");const c=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),a&&this.variableNames.push("leakyreluAlpha"),this.userCode=`\n      ${u}\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int d2 = coords.w;\n        int d1 = d2 / ${i};\n        int q = d2 - d1 * ${i};\n\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.\n        for (int wR = 0; wR < ${s}; wR++) {\n          int xR = xRCorner + wR * dilations[0];\n\n          if (xR < 0 || xR >= inDims[0]) {\n            continue;\n          }\n\n          for (int wC = 0; wC < ${o}; wC++) {\n            int xC = xCCorner + wC * dilations[1];\n\n            if (xC < 0 || xC >= inDims[1]) {\n              continue;\n            }\n\n            float xVal = getX(batch, xR, xC, d1);\n            float wVal = getW(wR, wC, d1, q);\n            dotProd += xVal * wVal;\n          }\n        }\n\n        float result = dotProd;\n        ${c}\n        ${l}\n        setOutput(result);\n      }\n    `}}
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
class Za{constructor(e,t=!1,n=null,r=!1,a=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=Oe(this.outputShape.length);const o=e.outChannels/e.inChannels,i=e.padInfo.left,u=e.strideWidth,l=e.dilationWidth,c=e.filterHeight,d=e.filterWidth,p=d;let h="\n      int xR; int xC; int xCOffset;\n      vec4 wTexel; vec4 previous; vec4 final;";for(let e=0;e<d;e++)h+=`\n          vec4 xTexelC${2*e};\n          int xTexelC${2*e}Ready;\n          vec4 xTexelC${2*e+1};\n          int xTexelC${2*e+1}Ready;\n          vec4 xC${e};`;h+=`\n    for (int r = 0; r < ${c}; r++) {\n      `;for(let e=0;e<d;e++)h+=`\n          xTexelC${2*e} = vec4(0.0);\n          xTexelC${2*e}Ready = 0;\n          xTexelC${2*e+1} = vec4(0.0);\n          xTexelC${2*e+1}Ready = 0;\n          xC${e} = vec4(0.0);`;h+="\n        xR = xRCorner + r * dilations[0];\n        if (xR >=0 && xR < inDims[0]) {\n      ";for(let e=0;e<(p+1)/2;e++){const t=2*e;if(h+=`\n          xC = xCCorner + ${t*l};\n          `,1===u){if(t<d&&(i%2==1?(h+=`\n                xCOffset = xC + 1;\n                if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t}Ready == 0) {\n                  xTexelC${t} = getX(batch, xR, xCOffset, d1);\n\n                  // Need to manually clear unused channels in case\n                  // we're reading from recycled texture.\n                  if (xCOffset + 1 >= inDims[1]) {\n                    xTexelC${t}.zw = vec2(0.0);\n                  }\n                  xTexelC${t}Ready = 1;\n                }\n              `,h+=1===l&&t>0?`\n                xC${t} = vec4(xTexelC${t-2}.zw, xTexelC${t}.xy);\n                `:`\n                  xCOffset = xC + 1 - 2;\n\n                  if (xCOffset >= 0 && xCOffset < inDims[1]) {\n                    previous = getX(batch, xR, xCOffset, d1);\n\n                    // Need to manually clear unused channels in case\n                    // we're reading from recycled texture.\n                    if (xCOffset + 1 >= inDims[1]) {\n                      previous.zw = vec2(0.0);\n                    }\n\n                    xC${t} = vec4(previous.zw, xTexelC${t}.xy);\n                  } else {\n                    xC${t} = vec4(0.0, 0.0, xTexelC${t}.xy);\n                  }\n                  `):h+=`\n                if (xC >= 0 && xC < inDims[1] && xTexelC${t}Ready == 0) {\n                  xTexelC${t} = getX(batch, xR, xC, d1);\n                  if (xC + 1 >= inDims[1]) {\n                    xTexelC${t}.zw = vec2(0.0);\n                  }\n                  xTexelC${t}Ready = 1;\n                }\n\n                xC${t} = xTexelC${t};\n                `,t+1<d)){const e=i%2==0?s.D5U.nearestLargerEven(l):l;l%2==0&&i%2==1||l%2!=0&&i%2!=1?(h+=`\n                  xCOffset = xC + imod(pads[1], 2) + ${e};\n\n                  if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t+1}Ready == 0) {\n                    xTexelC${t+1} = getX(batch, xR, xCOffset, d1);\n\n                    // Need to manually clear unused channels in case\n                    // we're reading from recycled texture.\n                    if (xCOffset + 1 >= inDims[1]) {\n                      xTexelC${t+1}.zw = vec2(0.0);\n                    }\n                    xTexelC${t+1}Ready = 1;\n                  }\n                  `,l>1&&(h+=`\n                    xCOffset -= 2;\n                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t}Ready == 0) {\n                      xTexelC${t} = getX(batch, xR, xCOffset, d1);\n                      xTexelC${t}Ready = 1;\n                    }\n                    `),h+=`\n                  xC${t+1} = vec4(xTexelC${t}.zw, xTexelC${t+1}.xy);\n                  `):h+=1===e?`\n                    xC${t+1} = xTexelC${t};\n                    `:`\n                    xCOffset = xC + ${e};\n\n                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t+1}Ready == 0) {\n                      xTexelC${t+1} = getX(batch, xR, xCOffset, d1);\n                      if (xCOffset + 1 >= inDims[1]) {\n                        xTexelC${t+1}.zw = vec2(0.0);\n                      }\n                      xTexelC${t+1}Ready = 1;\n                    }\n\n                    xC${t+1} = xTexelC${t+1};\n                    `}}else t<d&&(i%2==1?(h+=`\n                xCOffset = xC + 1 - strides[1];\n                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t}Ready == 0) {\n                  xTexelC${t} = getX(batch, xR, xCOffset, d1);\n                  // Need to manually clear unused channels in case\n                  // we're reading from recycled texture.\n                  if (xCOffset + 1 >= inDims[1]) {\n                    xTexelC${t}.zw = vec2(0.0);\n                  }\n                  xTexelC${t}Ready = 1;\n                }\n\n                if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${t+1}Ready == 0) {\n                  xTexelC${t+1} = getX(batch, xR, xC + 1, d1);\n                  // Need to manually clear unused channels in case\n                  // we're reading from recycled texture.\n                  if (xC + 2 >= inDims[1]) {\n                    xTexelC${t+1}.zw = vec2(0.0);\n                  }\n                  xTexelC${t+1}Ready = 1;\n                }\n\n                xC${t} = vec4(xTexelC${t}.zw, xTexelC${t+1}.zw);\n              `,t+1<d&&(h+=`\n                  final = vec4(0.0);\n                  xCOffset = xC + 1 + strides[1];\n                  if(xCOffset >= 0 && xCOffset < inDims[1]) {\n                    final = getX(batch, xR, xCOffset, d1);\n                  }\n                  xC${t+1} = vec4(xTexelC${t+1}.xy, final.xy);\n                `)):(h+=`\n                if(xC >= 0 && xC < inDims[1] && xTexelC${t}Ready == 0) {\n                  xTexelC${t} = getX(batch, xR, xC, d1);\n                  if (xC + 1 >= inDims[1]) {\n                    xTexelC${t}.zw = vec2(0.0);\n                  }\n                  xTexelC${t}Ready = 1;\n                }\n\n                xCOffset = xC + strides[1];\n                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t+1}Ready == 0) {\n                  xTexelC${t+1} = getX(batch, xR, xCOffset, d1);\n                  if (xCOffset + 1 >= inDims[1]) {\n                    xTexelC${t+1}.zw = vec2(0.);\n                  }\n                  xTexelC${t+1}Ready = 1;\n                }\n\n                xC${t} = vec4(\n                  xTexelC${t}.xy, xTexelC${t+1}.xy);\n              `,t+1<d&&(h+=`\n                  xC${t+1} = vec4(xTexelC${t}.zw, xTexelC${t+1}.zw);\n                `)));t<d&&(h+=`\n            wTexel = getW(r, ${t}, d1, q);\n            dotProd += xC${t} * vec4(wTexel.xz, wTexel.xz);\n          `,t+1<d&&(h+=`\n              wTexel = getW(r, ${t+1}, d1, q);\n              dotProd += xC${t+1} * vec4(wTexel.xz, wTexel.xz);\n            `))}h+="\n    }\n  ",h+="\n      }\n    ";let f="",m="";n&&(f=r?`vec4 activation(vec4 a) {\n          vec4 b = getPreluActivationWeightsAtOutCoords();\n          ${n}\n        }`:a?`vec4 activation(vec4 a) {\n          vec4 b = getLeakyreluAlphaAtOutCoords();\n          ${n}\n        }`:`vec4 activation(vec4 x) {\n          ${n}\n        }`,m="result = activation(result);");const g=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),a&&this.variableNames.push("leakyreluAlpha"),this.userCode=`\n      ${f}\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int d2 = coords.w;\n        int d1 = d2 / ${o};\n        int q = d2 - d1 * ${o};\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.\n        vec4 dotProd = vec4(0.000000000000001);\n\n        ${h}\n\n        vec4 result = dotProd - vec4(0.000000000000001);\n        ${g}\n        ${m}\n        setOutput(result);\n      }\n    `}}const Qa={kernelName:s.cie,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a,filter:o}=t,{strides:i,pad:u,dilations:l,dimRoundingMode:c}=r;let d=l;null==d&&(d=[1,1]),s.D5U.assert(s.Wap.eitherStridesOrDilationsAreOne(i,d),(()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${i} and dilations '${d}'`));const p=s.Wap.computeConv2DInfo(a.shape,o.shape,i,d,u,c,!0);let h;h=(0,s.OBj)().getBool("WEBGL_PACK_DEPTHWISECONV")&&p.strideWidth<=2&&p.outChannels/p.inChannels==1?new Za(p):new Ya(p);const f=[[p.padInfo.top,p.padInfo.left],[p.strideHeight,p.strideWidth],[p.dilationHeight,p.dilationWidth],[p.inHeight,p.inWidth]];return n.runWebGLProgram(h,[a,o],"float32",f)}};
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
class Ja{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const t=e.strideHeight,n=e.strideWidth,r=e.padInfo.top,a=e.padInfo.left,s=e.outChannels/e.inChannels;this.userCode=`\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int wR = coords.x;\n        int wC = coords.y;\n        int d1 = coords.z;\n        int dm = coords.w;\n        int d2 = d1 * ${s} + dm;\n\n        float dotProd = 0.0;\n\n        // TO DO: Vec4 over the batch size\n        for (int b = 0; b < ${e.batchSize}; b++) {\n          for (int yR = 0; yR < ${e.outHeight}; yR++) {\n            int xR = wR + yR * ${t} - ${r};\n\n            if (xR < 0 || xR >= ${e.inHeight}) {\n              continue;\n            }\n\n            for (int yC = 0; yC < ${e.outWidth}; yC++) {\n              int xC = wC + yC * ${n} - ${a};\n\n              if (xC < 0 || xC >= ${e.inWidth}) {\n                continue;\n              }\n\n              float dyValue = getDy(b, yR, yC, d2);\n              float xValue = getX(b, xR, xC, d1);\n              dotProd += (xValue * dyValue);\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    `}}class es{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,a=e.strideWidth,s=t-1-e.padInfo.top,o=n-1-e.padInfo.left,i=e.outChannels/e.inChannels;this.userCode=`\n      const ivec2 pads = ivec2(${s}, ${o});\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords[3];\n        ivec2 dyCorner = coords.yz - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        float dotProd = 0.0;\n\n        for (int wR = 0; wR < ${t}; wR++) {\n          float dyR = float(dyRCorner + wR) / ${r}.0;\n\n          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          int wRPerm = ${t} - 1 - wR;\n\n          for (int wC = 0; wC < ${n}; wC++) {\n            float dyC = float(dyCCorner + wC) / ${a}.0;\n\n            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            int wCPerm = ${n} - 1 - wC;\n\n            // TO DO: Vec4 over the channelMul\n            for (int dm = 0; dm < ${i}; dm++) {\n              int d2 = d1 * ${i} + dm;\n              float xValue = getDy(batch, idyR, idyC, d2);\n              float wValue = getW(wRPerm, wCPerm, d1, dm);\n              dotProd += xValue * wValue;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    `}}const ts={kernelName:s.sL$,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a,dy:o}=t,{strides:i,dilations:u,pad:l,dimRoundingMode:c,filterShape:d}=r,p=s.Wap.computeConv2DInfo(a.shape,d,i,u,l,c,!0),h=new Ja(p);return n.runWebGLProgram(h,[a,o],"float32")}};const ns={kernelName:s.y7R,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{dy:a,filter:o}=t,{strides:i,dilations:u,pad:l,dimRoundingMode:c,inputShape:d}=r,p=s.Wap.computeConv2DInfo(d,o.shape,i,u,l,c,!0),h=new es(p);return n.runWebGLProgram(h,[a,o],"float32")}};
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
class rs{constructor(e){this.variableNames=["X"],this.outputShape=[e,e],this.userCode="\n      void main() {\n          ivec2 coords = getOutputCoords();\n          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;\n          setOutput(val);\n      }\n    "}}const as={kernelName:s.$w,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n}=e,{x:r}=t,a=[...r.shape,...r.shape],o=s.D5U.sizeFromShape(r.shape),i=zn({inputs:{x:r},backend:n,attrs:{shape:[o]}}),u=new rs(o),l=n.runWebGLProgram(u,[i],i.dtype),c=zn({inputs:{x:l},backend:n,attrs:{shape:a}});return n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(l),c}};
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
class ss{constructor(e){this.variableNames=["x","W"],this.outputShape=e.outShape;const{inHeight:t,inWidth:n,padInfo:r,strideHeight:a,strideWidth:s,filterHeight:o,filterWidth:i,dilationHeight:u,dilationWidth:l}=e,{top:c,left:d}=r;this.userCode=`\n      const ivec2 strides = ivec2(${a}, ${s});\n      const ivec2 pads = ivec2(${c}, ${d});\n      const float neg_infinity = -3.4e38;\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        int d1 = coords.w;\n        ivec2 outTopLeftCorner =\n            coords.yz * strides - pads;\n        int hBeg = outTopLeftCorner.x;\n        int wBeg = outTopLeftCorner.y;\n\n        float curVal = neg_infinity;\n        for (int h = 0; h < ${o}; h++) {\n          int hIn = hBeg + h * ${u};\n\n          if (hIn >= 0 && hIn < ${t}) {\n            for (int w = 0; w < ${i}; w++) {\n              int wIn = wBeg + w * ${l};\n\n              if (wIn >= 0 && wIn < ${n}) {\n                float xVal = getX(batch, hIn, wIn, d1);\n                float wVal = getW(h, w, d1);\n\n                float val = xVal + wVal;\n                if (val > curVal) {\n                  curVal = val;\n                }\n              }\n            }\n          }\n        }\n\n        float result = curVal;\n        setOutput(result);\n      }\n    `}}const os={kernelName:s.p4S,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a,filter:o}=t,{strides:i,pad:u,dilations:l}=r,c=s.Wap.computeDilation2DInfo(a.shape,o.shape,i,u,"NHWC",l);let d;const p=new ss(c);d=n.runWebGLProgram(p,[a,o],"float32");const h=zn({inputs:{x:d},backend:n,attrs:{shape:c.outShape}});return n.disposeIntermediateTensorInfo(d),h}};const is={kernelName:s.$g6,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:r}=e,{equation:a}=r,o=t,{allDims:i,summedDims:u,idDims:l}=s.Wap.decodeEinsumEquation(a,o.length);s.Wap.checkEinsumDimSizes(i.length,l,o);const{path:c,steps:d}=s.Wap.getEinsumComputePath(u,l),p=d.length;let h=null,f=i.length;const m=[];for(let e=0;e<p;++e){for(const t of d[e]){const{permutationIndices:e,expandDims:r}=s.Wap.getEinsumPermutation(f,l[t]);let a;s.Wap.isIdentityPermutation(e)?a=o[t]:(a=Jn({inputs:{x:o[t]},backend:n,attrs:{perm:e}}),m.push(a));const i=a.shape.slice();for(let e=0;e<r.length;++e)i.splice(r[e],0,1);s.D5U.arraysEqual(a.shape,i)||(a=zn({inputs:{x:a},backend:n,attrs:{shape:i}}),m.push(a)),null===h?h=a:(h=Ln({inputs:{a,b:h},backend:n}),m.push(h))}e<p-1&&(c[e]>=0&&(h=Zn({inputs:{x:h},backend:n,attrs:{axis:c[e]-(i.length-f),keepDims:!1}}),m.push(h)),f--)}for(const e of m)e!==h&&n.disposeIntermediateTensorInfo(e);return h}},us=Fn({opSnippet:"return (x >= 0.0) ? x : (exp(x) - 1.0);",packedOpSnippet:"\n  vec4 result;\n\n  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);\n  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);\n  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);\n  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);\n\n  return result;\n"}),ls={kernelName:s.SX0,backendName:"webgl",kernelFunc:us},cs={kernelName:s.HEU,backendName:"webgl",kernelFunc:e=>{const{inputs:t,backend:n}=e,{dy:r,y:a}=t,o=(0,s.OBj)().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new In("\n  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));\n  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));\n",r.shape,a.shape):new kn("return (b >= 1.0) ? a : a * (b + 1.0);",r.shape,a.shape);return n.runWebGLProgram(o,[r,a],r.dtype)}},ds=_n({opSnippet:"return float(a == b);",packedOpSnippet:"\n  return vec4(equal(a, b));\n",dtype:"bool",cpuKernelImpl:xt}),ps={kernelName:s.hdR,backendName:"webgl",kernelFunc:ds},hs=Fn({opSnippet:`\n  // Error function is calculated approximately with elementary function.\n  // See "Handbook of Mathematical Functions with Formulas,\n  // Graphs, and Mathematical Tables", Abramowitz and Stegun.\n  float p = ${s.Wap.ERF_P};\n  float a1 = ${s.Wap.ERF_A1};\n  float a2 = ${s.Wap.ERF_A2};\n  float a3 = ${s.Wap.ERF_A3};\n  float a4 = ${s.Wap.ERF_A4};\n  float a5 = ${s.Wap.ERF_A5};\n\n  float sign = sign(x);\n  x = abs(x);\n  float t = 1.0 / (1.0 + p * x);\n  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));\n`}),fs={kernelName:s.Omj,backendName:"webgl",kernelFunc:hs},ms=Fn({opSnippet:"if (isnan(x)) return x;\n  return exp(x);\n",packedOpSnippet:"\n  vec4 result = exp(x);\n  bvec4 isNaN = isnan(x);\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n",cpuKernelImpl:bt,dtype:"float32"}),gs={kernelName:s.NEP,backendName:"webgl",kernelFunc:ms};
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
function xs(e){const{inputs:t,attrs:n,backend:r}=e,{dim:a}=n,{input:o}=t,i=o.shape.length,u=o.shape.slice();let l=a;return a<0&&(s.D5U.assert(-(i+1)<=a,(()=>`Axis must be in the interval [${-(i+1)}, ${i}]`)),l=i+a+1),u.splice(l,0,1),zn({inputs:{x:o},backend:r,attrs:{shape:u}})}const bs={kernelName:s.YFo,backendName:"webgl",kernelFunc:xs},vs="return exp(x) - 1.0;",ys=Fn({opSnippet:vs,packedOpSnippet:vs,cpuKernelImpl:vt}),ks={kernelName:s.Y0y,backendName:"webgl",kernelFunc:ys};
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
function ws(e,t,n){const r=n.texData.get(e.dataId),a=s.D5U.sizeFromShape(e.shape),o=e.shape[e.shape.length-1],i=zn({inputs:{x:e},backend:n,attrs:{shape:[a/o,o]}}),u=i.shape,l=new Is("real",u,t),c=new Is("imag",u,t),d=[{dataId:r.complexTensorInfos.real.dataId,dtype:r.complexTensorInfos.real.dtype,shape:u},{dataId:r.complexTensorInfos.imag.dataId,dtype:r.complexTensorInfos.imag.dtype,shape:u}],p=n.runWebGLProgram(l,d,"float32"),h=n.runWebGLProgram(c,d,"float32"),f=Cn({inputs:{real:p,imag:h},backend:n});n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(h);const m=zn({inputs:{x:f},backend:n,attrs:{shape:e.shape}});return n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(f),m}const Ss={kernelName:s.vwp,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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
class Cs{constructor(e,t){this.outputShape=[],this.customUniforms=[{name:"value",type:"float"}],this.variableNames=["x"],this.outputShape=e,this.userCode="\n      void main() {\n        // Input can be obtained from uniform value.\n        setOutput(value);\n      }\n    "}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function $s(e){const{backend:t,attrs:n}=e,{shape:r,value:a}=n;let{dtype:o}=n;if(o=o||s.D5U.inferDtype(a),"string"===o){const e=s.D5U.getArrayFromDType(o,s.D5U.sizeFromShape(r));return e.fill(a),t.makeTensorInfo(r,o,e)}{const e=new Cs(r,a),n=[[a]];return t.runWebGLProgram(e,[],o,n)}}const Ts={kernelName:s.deh,backendName:"webgl",kernelFunc:$s};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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
const Ns={kernelName:s.Uyb,backendName:"webgl",kernelFunc:({inputs:e,backend:t})=>{const{image:n}=e,r=t,a=new Es(n.shape);return r.runWebGLProgram(a,[n],n.dtype)}},Rs="return floor(x);",Ds=Fn({opSnippet:Rs,packedOpSnippet:Rs,cpuKernelImpl:yt}),As={kernelName:s.OR,backendName:"webgl",kernelFunc:Ds},Fs=_n({opSnippet:"\n  float s = sign(a) * sign(b);\n  int ia = round(a);\n  int ib = round(b);\n  if (ib != 0) {\n    // Windows (D3D) wants guaranteed non-zero int division at compile-time.\n    return float(idiv(ia, ib, s));\n  } else {\n    return NAN;\n  }\n",packedOpSnippet:"\n  ivec4 ia = round(a);\n  ivec4 ib = round(b);\n  bvec4 cond = notEqual(ib, ivec4(0));\n  ivec4 result = ivec4(0);\n  vec4 s = sign(a) * sign(b);\n\n  // Windows (D3D) wants guaranteed non-zero int division at compile-time.\n  if (cond[0]) {\n    result[0] = idiv(ia[0], ib[0], s[0]);\n  }\n  if (cond[1]) {\n    result[1] = idiv(ia[1], ib[1], s[1]);\n  }\n  if (cond[2]) {\n    result[2] = idiv(ia[2], ib[2], s[2]);\n  }\n  if (cond[3]) {\n    result[3] = idiv(ia[3], ib[3], s[3]);\n  }\n  return vec4(result);\n",dtype:"int32"}),_s={kernelName:s.jeX,backendName:"webgl",kernelFunc:Fs};
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
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a,filter:o,bias:i,preluActivationWeights:u}=t,{strides:l,pad:c,dataFormat:d,dilations:p,dimRoundingMode:h,activation:f,leakyreluAlpha:m}=r,g=s.Wap.convertConv2DDataFormat(d),x=s.Wap.computeConv2DInfo(a.shape,o.shape,l,p,c,h,!1,g);let b;const v=[];if(1!==x.filterHeight||1!==x.filterWidth||1!==x.dilationHeight||1!==x.dilationWidth||1!==x.strideHeight||1!==x.strideWidth||"SAME"!==x.padInfo.type&&"VALID"!==x.padInfo.type)if((0,s.OBj)().getBool("WEBGL_CONV_IM2COL")&&1===a.shape[0])b=$a({x:a,filter:o,convInfo:x,backend:n,bias:i,activation:f,preluActivationWeights:u,leakyreluAlpha:m});else{const e=null!=i,t=null!=u,r="leakyrelu"===f,l=f?On(f,!1):null,c=new Ia(x,e,l,t,r),d=[a,o];if(i&&d.push(i),u&&d.push(u),r){const e=n.makeTensorInfo([],"float32",s.D5U.createScalarValue(m,"float32"));d.push(e),v.push(e)}b=n.runWebGLProgram(c,d,"float32")}else b=Ca({x:a,filter:o,convInfo:x,backend:n,bias:i,activation:f,preluActivationWeights:u,leakyreluAlpha:m});const y=zn({inputs:{x:b},backend:n,attrs:{shape:x.outShape}});return v.push(b),v.forEach((e=>n.disposeIntermediateTensorInfo(e))),y}};const Bs={kernelName:s.luS,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a,filter:o,bias:i,preluActivationWeights:u}=t,{strides:l,pad:c,dilations:d,dimRoundingMode:p,activation:h,leakyreluAlpha:f}=r,m=[];let g=d;null==g&&(g=[1,1]),s.D5U.assert(s.Wap.eitherStridesOrDilationsAreOne(l,g),(()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${l} and dilations '${g}'`));const x=s.Wap.computeConv2DInfo(a.shape,o.shape,l,g,c,p,!0),b=(0,s.OBj)().getBool("WEBGL_PACK_DEPTHWISECONV")&&x.strideWidth<=2&&x.outChannels/x.inChannels==1,v=h?On(h,b):null,y=[a,o],k=null!=i,I=null!=u,w="leakyrelu"===h;if(k&&y.push(i),I&&y.push(u),w){const e=n.makeTensorInfo([],"float32",s.D5U.createScalarValue(f,"float32"));y.push(e),m.push(e)}let S;S=b?new Za(x,k,v,I,w):new Ya(x,k,v,I,w);const C=[[x.padInfo.top,x.padInfo.left],[x.strideHeight,x.strideWidth],[x.dilationHeight,x.dilationWidth],[x.inHeight,x.inWidth]],$=n.runWebGLProgram(S,y,"float32",C);return m.forEach((e=>n.disposeIntermediateTensorInfo(e))),$}};class Ls{constructor(e,t,n){this.sliceDim=e,this.strides=t,this.variableNames=["x","indices"],this.outputShape=n;const r=Re(t.length),a=Re(n.length),s=this.sliceDim>1?"strides[j]":"strides";this.userCode=`\n        ${r} strides = ${r}(${this.strides});\n         void main() {\n          ${a} coords = getOutputCoords();\n          int flattenIndex = 0;\n          for (int j = 0; j < ${this.sliceDim}; j++) {\n            int index = round(getIndices(coords[0], j));\n            flattenIndex += index * ${s};\n          }\n          setOutput(getX(flattenIndex, coords[1]));\n        }\n      `}}const Vs={kernelName:s.q1x,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n}=e,{params:r,indices:a}=t,o=a.shape,i=o[o.length-1],u=s.D5U.sizeFromShape(r.shape),[l,c,d,p]=s.Wap.prepareAndValidate(r,a),h=zn({inputs:{x:a},backend:n,attrs:{shape:[c,i]}}),f=zn({inputs:{x:r},backend:n,attrs:{shape:[s.D5U.sizeFromShape(r.shape)/d,d]}});if(n.shouldExecuteOnCPU([r,a])||"string"===r.dtype){const e=n.readSync(a.dataId),t=n.bufferSync(r),s=kt(e,t,r.dtype,c,i,d,p,r.shape,u);return n.makeTensorInfo(l,r.dtype,s.values)}const m=new Ls(i,p,[c,d]),g=n.runWebGLProgram(m,[f,h],f.dtype),x=zn({inputs:{x:g},backend:n,attrs:{shape:l}});return n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(g),x}};
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
class zs{constructor(e,t){this.variableNames=["A","indices"],this.outputShape=t,this.rank=t.length;const n=Re(this.rank),r=function(e,t){const n=["resRC.x","resRC.y","resRC.z","resRC.w"],r=[];for(let t=0;t<e.length;t++)2===t?r.push("index"):r.push(`${n[t]}`);return r.join()}(e);this.userCode=`\n      void main() {\n        ${n} resRC = getOutputCoords();\n        int index = int(getIndices(resRC.x, resRC.z));\n        float inBounds = (index >= 0) && (index < ${e[2]}) ? 1.0 : 0.0;\n        setOutput(inBounds * getA(${r}));\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Gs(e){const{inputs:t,backend:n,attrs:r}=e,{x:a,indices:o}=t,{axis:i,batchDims:u}=r,l=s.D5U.parseAxisParam(i,a.shape)[0];if((0,s.OBj)().get("DEBUG")){const e=n.readSync(o.dataId),t=a.shape[l];for(let n=0;n<e.length;++n){const r=e[n];s.D5U.assert(r<=t-1&&r>=0,(()=>`GatherV2: the index value ${r} is not in [0, ${t-1}]`))}}const c=s.Wap.segment_util.collectGatherOpShapeInfo(a,o,l,u),d=s.D5U.sizeFromShape(o.shape),p=[],h=zn({inputs:{x:a},backend:n,attrs:{shape:[c.batchSize,c.outerSize,c.dimSize,c.sliceSize]}}),f=zn({inputs:{x:o},backend:n,attrs:{shape:[c.batchSize,d/c.batchSize]}});p.push(h),p.push(f);const m=[c.batchSize,c.outerSize,d/c.batchSize,c.sliceSize];if(n.shouldExecuteOnCPU([a,o])||"string"===a.dtype){const e=n.bufferSync(f),t=n.bufferSync(h),r=It(t,e,m);return p.forEach((e=>n.disposeIntermediateTensorInfo(e))),n.makeTensorInfo(c.outputShape,r.dtype,r.values)}const g=new zs(h.shape,m),x=n.runWebGLProgram(g,[h,f],h.dtype);p.push(x);const b=zn({inputs:{x},backend:n,attrs:{shape:c.outputShape}});return p.forEach((e=>n.disposeIntermediateTensorInfo(e))),b}const Hs={kernelName:s.qi_,backendName:"webgl",kernelFunc:Gs},js=_n({opSnippet:"return float(a > b);",packedOpSnippet:"\n  return vec4(greaterThan(a, b));\n",cpuKernelImpl:wt,dtype:"bool"}),Xs={kernelName:s.iZT,backendName:"webgl",kernelFunc:js},qs=_n({opSnippet:"return float(a >= b);",packedOpSnippet:"\n  return vec4(greaterThanEqual(a, b));\n",dtype:"bool",cpuKernelImpl:St}),Ks={kernelName:s.Acj,backendName:"webgl",kernelFunc:qs};const Ys={kernelName:s.Qg5,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n}=e,{input:r}=t;return ws(r,!0,n)}},Zs=Fn({opSnippet:"return float(!isnan(x) && !isinf(x));",dtype:"bool"}),Qs={kernelName:s.avt,backendName:"webgl",kernelFunc:Zs},Js=Fn({opSnippet:"return float(isinf(x));",dtype:"bool"}),eo={kernelName:s.iWB,backendName:"webgl",kernelFunc:Js},to=Fn({opSnippet:"return float(isnan(x));",dtype:"bool"}),no={kernelName:s.r7n,backendName:"webgl",kernelFunc:to},ro=_n({opSnippet:"return float(a < b);",packedOpSnippet:"\n  return vec4(lessThan(a, b));\n",cpuKernelImpl:Ct,dtype:"bool"}),ao={kernelName:s.vtC,backendName:"webgl",kernelFunc:ro},so=_n({opSnippet:"return float(a <= b);",packedOpSnippet:"\n  return vec4(lessThanEqual(a, b));\n",cpuKernelImpl:$t,dtype:"bool"}),oo={kernelName:s.CAk,backendName:"webgl",kernelFunc:so};const io={kernelName:s.e7N,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{backend:t,attrs:n}=e,{start:r,stop:a,num:s}=n,o=Tt(r,a,s);return t.makeTensorInfo([o.length],"float32",o)}},uo=Fn({opSnippet:"if (isnan(x)) return x;\n  return x < 0.0 ? 0./0. : log(x);\n",packedOpSnippet:"\n  vec4 result = log(x);\n  bvec4 isNaN = isnan(x);\n  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);\n  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);\n  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);\n  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);\n  return result;\n",cpuKernelImpl:Et}),lo={kernelName:s.ZbH,backendName:"webgl",kernelFunc:uo},co=Fn({opSnippet:"if (isnan(x)) return x;\n  return log(1.0 + x);\n"}),po={kernelName:s.kU,backendName:"webgl",kernelFunc:co},ho=_n({opSnippet:"return float(a >= 1.0 && b >= 1.0);",packedOpSnippet:"\n  return vec4(\n    vec4(greaterThanEqual(a, vec4(1.0))) *\n    vec4(greaterThanEqual(b, vec4(1.0))));\n",dtype:"bool"}),fo={kernelName:s.PYm,backendName:"webgl",kernelFunc:ho},mo=Fn({opSnippet:"return float(!(x >= 1.0));"}),go={kernelName:s.VfG,backendName:"webgl",kernelFunc:mo},xo=_n({opSnippet:"return float(a >= 1.0 || b >= 1.0);",packedOpSnippet:"\n  return min(\n    vec4(greaterThanEqual(a, vec4(1.0))) +\n    vec4(greaterThanEqual(b, vec4(1.0))),\n    vec4(1.0));\n",dtype:"bool"}),bo={kernelName:s.MZg,backendName:"webgl",kernelFunc:xo};
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
class yo{constructor(e,t,n,r,a){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;const s=t,o=e[3]-1;let i;this.outputShape=e;const u=`float(${n}) + float(${r}) * sum`;i=.5===a?`inversesqrt(${u})`:1===a?`1.0/(${u})`:`exp(log(${u}) * float(-${a}));`,this.userCode=`\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords.x;\n        int r = coords.y;\n        int c = coords.z;\n        int d = coords.w;\n\n        bool hasNextCol = d < ${this.outputShape[3]};\n        bool hasNextRow = c < ${this.outputShape[2]};\n\n        vec4 sum = vec4(0.);\n        vec4 xFragAtOutputCoords = getX(b, r, c, d);\n\n        vec4 xAtOutputCoords = vec4(\n          getChannel(xFragAtOutputCoords, vec2(c, d)),\n          hasNextCol ?\n            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,\n          hasNextRow ?\n            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0\n        );\n\n        int firstChannel = d - ${s};\n        vec2 cache = vec2(0.);\n        if(firstChannel >= 0){\n          vec4 firstChannelFrag = getX(b, r, c, firstChannel);\n          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));\n            if(hasNextRow){\n              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));\n            }\n        }\n\n        ivec2 depth = ivec2(d, d + 1);\n        for (int j = - ${s}; j <= ${s}; j++) {\n          ivec2 idx = depth + j;\n          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));\n          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(${o}));\n\n          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;\n          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;\n\n          if(depthInRange || depthPlusOneInRange){\n            vec4 z = vec4(0.);\n            vec4 xFragAtCurrentDepth;\n            z.xz = cache.xy;\n            if(depthPlusOneInRange && hasNextCol){\n              xFragAtCurrentDepth = idx.y != d ?\n                getX(b, r, c, idx.y) : xFragAtOutputCoords;\n              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));\n              if(hasNextRow){\n                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));\n              }\n            }\n            cache.xy = z.yw;\n            sum += z * z;\n          }\n        }\n        vec4 result = xAtOutputCoords * ${i};\n        setOutput(result);\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const ko={kernelName:s.eZ0,backendName:"webgl",kernelFunc:e=>{const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{depthRadius:o,bias:i,alpha:u,beta:l}=r,c=(0,s.OBj)().getBool("WEBGL_PACK_NORMALIZATION")?new yo(a.shape,o,i,u,l):new vo(a.shape,o,i,u,l);return n.runWebGLProgram(c,[a],a.dtype)}};
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
function So(e){const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{reductionIndices:o,keepDims:i}=r,u=a.shape.length,l=s.D5U.parseAxisParam(o,a.shape);let c=l;const d=s.Wap.getAxesPermutation(c,u),p=null!=d,h=n.shouldExecuteOnCPU([a]);let f=a;if(p){if(h){const e=n.texData.get(f.dataId).values,t=new Array(u);for(let e=0;e<t.length;e++)t[e]=a.shape[d[e]];const r=Qt(e,a.shape,a.dtype,d,t);f=n.makeTensorInfo(t,a.dtype);n.texData.get(f.dataId).values=r}else f=Yn(a,d,n);c=s.Wap.getInnerMostAxes(c.length,u)}s.Wap.assertAxesAreInnerMostDims("max",c,u);const[m,g]=s.Wap.computeOutAndReduceShapes(f.shape,c);let x,b=m;if(i&&(b=s.Wap.expandShapeToKeepDim(m,l)),h){const e=n.texData.get(f.dataId).values,t=Nt(e,s.D5U.sizeFromShape(g),b,a.dtype);x=n.makeTensorInfo(b,a.dtype);n.texData.get(x.dataId).values=t}else x=
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n,r){const a=s.D5U.sizeFromShape(t),o=zn({inputs:{x:e},attrs:{shape:[s.D5U.sizeFromShape(e.shape)/a,a]},backend:r}),i=Xn(o,e.dtype,"max",r),u=zn({inputs:{x:i},attrs:{shape:n},backend:r});return r.disposeIntermediateTensorInfo(o),r.disposeIntermediateTensorInfo(i),u}(f,g,b,n);return p&&n.disposeIntermediateTensorInfo(f),x}const Co={kernelName:s.YoZ,backendName:"webgl",kernelFunc:So},$o=_n({opSnippet:"\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return max(a, b);\n",packedOpSnippet:"\n  vec4 result = vec4(max(a, b));\n  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n",cpuKernelImpl:Rt}),To={kernelName:s.BMI,backendName:"webgl",kernelFunc:$o};const Eo={kernelName:s.mTV,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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
function(e,t,n,r){const a=s.D5U.sizeFromShape(t),o=zn({inputs:{x:e},attrs:{shape:[s.D5U.sizeFromShape(e.shape)/a,a]},backend:r}),i=Xn(o,"float32","mean",r),u=zn({inputs:{x:i},attrs:{shape:n},backend:r});return r.disposeIntermediateTensorInfo(o),r.disposeIntermediateTensorInfo(i),u}(m,x,b,i);for(const e of f)i.disposeIntermediateTensorInfo(e);return v}};const Mo={kernelName:s.c17,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{axis:o,keepDims:i}=r,u=a.shape.length,l=s.D5U.parseAxisParam(o,a.shape);let c=l;const d=s.Wap.getAxesPermutation(c,u);let p=a;null!=d&&(p=Jn({inputs:{x:a},backend:n,attrs:{perm:d}}),c=s.Wap.getInnerMostAxes(c.length,a.shape.length)),s.Wap.assertAxesAreInnerMostDims("min",c,u);const[h,f]=s.Wap.computeOutAndReduceShapes(p.shape,c),m=zn({inputs:{x:p},backend:n,attrs:{shape:[-1,s.D5U.sizeFromShape(f)]}}),g=Xn(m,m.dtype,"min",n);let x;if(i){x=zn({inputs:{x:g},backend:n,attrs:{shape:s.Wap.expandShapeToKeepDim(h,l)}})}else x=zn({inputs:{x:g},backend:n,attrs:{shape:h}});return n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(g),null!=d&&n.disposeIntermediateTensorInfo(p),x}},Uo=_n({opSnippet:"\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return min(a, b);\n",packedOpSnippet:"\n  vec4 result = vec4(min(a, b));\n  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n",cpuKernelImpl:Dt}),Po={kernelName:s.q8u,backendName:"webgl",kernelFunc:Uo};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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
const Lo={kernelName:s.jQs,backendName:"webgl",kernelFunc:({inputs:e,backend:t,attrs:n})=>{const{x:r}=e,{paddings:a,mode:o}=n,i=(0,s.OBj)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Bo(r.shape,a,o):new Wo(r.shape,a,o);return t.runWebGLProgram(i,[r],r.dtype)}},Vo=_n({opSnippet:"if (b == 0.0) return NAN;\n  return mod(a, b);",packedOpSnippet:"\n  vec4 result = mod(a, b);\n  vec4 isNaN = vec4(equal(b, vec4(0.0)));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n"}),zo={kernelName:s.Vbg,backendName:"webgl",kernelFunc:Vo};
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
function Yo(e){const{inputs:t,backend:n,attrs:r}=e,{logits:a}=t,{dim:o}=r,i=s.D5U.parseAxisParam([o],a.shape),u=So({inputs:{x:a},backend:n,attrs:{reductionIndices:i,keepDims:!1}}),l=s.Wap.expandShapeToKeepDim(u.shape,i),c=zn({inputs:{x:u},backend:n,attrs:{shape:l}}),d=qo({inputs:{a,b:c},backend:n}),p=ms({inputs:{x:d},backend:n}),h=Zn({inputs:{x:p},backend:n,attrs:{axis:i,keepDims:!1}}),f=zn({inputs:{x:h},backend:n,attrs:{shape:l}}),m=Ho({inputs:{a:p,b:f},backend:n});return n.disposeIntermediateTensorInfo(u),n.disposeIntermediateTensorInfo(c),n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(f),m}const Zo={kernelName:s.Gcp,backendName:"webgl",kernelFunc:Yo};const Qo={kernelName:s.NZg,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{logits:a}=t,{numSamples:s,seed:o,normalized:i}=r,u=i?a:Yo({inputs:{logits:a},backend:n,attrs:{dim:a.shape.length-1}}),l=u.shape[0],c=u.shape[1],d=new Go(l,c,s),p=[[o]],h=n.runWebGLProgram(d,[u],"int32",p);return i||n.disposeIntermediateTensorInfo(u),h}};const Jo={kernelName:s.kuV,backendName:"webgl",kernelFunc:function(e){const{inputs:t,backend:n}=e,{x:r}=t;if(n.shouldExecuteOnCPU([r])){const e=n.texData.get(r.dataId),[t,a]=Ft(e.values,r.shape,r.dtype);return n.makeTensorInfo(a,r.dtype,t)}let a;return a=(0,s.OBj)().getBool("WEBGL_PACK_UNARY_OPERATIONS")?new pn(r.shape,"\n  vec4 result = -x;\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n"):new ln(r.shape,"if (isnan(x)) return x;\n  return -x;\n"),n.runWebGLProgram(a,[r],r.dtype)}},ei=s.GDt.GP;const ti={kernelName:s.uv1,backendName:"webgl",kernelFunc:function(e){s.Wap.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:n,attrs:r}=e,{boxes:a,scores:o}=t,{maxOutputSize:i,iouThreshold:u,scoreThreshold:l}=r,c=n.readSync(a.dataId),d=n.readSync(o.dataId),{selectedIndices:p}=ei(c,d,i,u,l);return n.makeTensorInfo([p.length],"int32",new Int32Array(p))}},ni=s.GDt.qP;const ri={kernelName:s.cye,backendName:"webgl",kernelFunc:function(e){s.Wap.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:n,attrs:r}=e,{boxes:a,scores:o}=t,{maxOutputSize:i,iouThreshold:u,scoreThreshold:l,padToMaxOutputSize:c}=r,d=n.readSync(a.dataId),p=n.readSync(o.dataId),{selectedIndices:h,validOutputs:f}=ni(d,p,i,u,l,c);return[n.makeTensorInfo([h.length],"int32",new Int32Array(h)),n.makeTensorInfo([],"int32",new Int32Array([f]))]}},ai=s.GDt.pA;const si={kernelName:s.W0H,backendName:"webgl",kernelFunc:function(e){s.Wap.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:n,attrs:r}=e,{boxes:a,scores:o}=t,{maxOutputSize:i,iouThreshold:u,scoreThreshold:l,softNmsSigma:c}=r,d=n.readSync(a.dataId),p=n.readSync(o.dataId),h=i,f=u,m=l,g=c,{selectedIndices:x,selectedScores:b}=ai(d,p,h,f,m,g);return[n.makeTensorInfo([x.length],"int32",new Int32Array(x)),n.makeTensorInfo([b.length],"float32",new Float32Array(b))]}};
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
class oi{constructor(e,t,n,r){this.variableNames=["indices"],this.outputShape=[e,t],this.userCode=`\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int index = round(getIndices(coords.x));\n        setOutput(mix(float(${r}), float(${n}),\n                      float(index == coords.y)));\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const ii={kernelName:s.we_,backendName:"webgl",kernelFunc:e=>{const{inputs:t,backend:n,attrs:r}=e,{indices:a}=t,{depth:o,onValue:i,offValue:u}=r,l=s.D5U.sizeFromShape(a.shape),c=new oi(l,o,i,u),d=zn({inputs:{x:a},backend:n,attrs:{shape:[l]}}),p=n.runWebGLProgram(c,[d],a.dtype);n.disposeIntermediateTensorInfo(d);const h=zn({inputs:{x:p},backend:n,attrs:{shape:[...a.shape,o]}});return n.disposeIntermediateTensorInfo(p),h}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ui(e){const{inputs:t,backend:n}=e,{x:r}=t;if("complex64"===r.dtype){const e=na({inputs:{input:r},backend:n}),t=ui({inputs:{x:e},backend:n}),a=xa({inputs:{input:r},backend:n}),s=ui({inputs:{x:a},backend:n}),o=Cn({inputs:{real:t,imag:s},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(a),n.disposeIntermediateTensorInfo(s),o}return $s({attrs:{shape:r.shape,dtype:r.dtype,value:"string"===r.dtype?"":0},backend:n})}const li={kernelName:s.RuY,backendName:"webgl",kernelFunc:ui};const ci={kernelName:s.qWM,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function e(t){const{inputs:n,backend:r}=t,{x:a}=n;if("string"===a.dtype)throw new Error("onesLike is not supported under string dtype");if("complex64"===a.dtype){const t=na({inputs:{input:a},backend:r}),n=e({inputs:{x:t},backend:r}),s=xa({inputs:{input:a},backend:r}),o=ui({inputs:{x:s},backend:r}),i=Cn({inputs:{real:n,imag:o},backend:r});return r.disposeIntermediateTensorInfo(t),r.disposeIntermediateTensorInfo(n),r.disposeIntermediateTensorInfo(s),r.disposeIntermediateTensorInfo(o),i}return $s({attrs:{shape:a.shape,dtype:a.dtype,value:1},backend:r})}};const di={kernelName:s.QiL,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{axis:a}=r;if(1===t.length)return xs({inputs:{input:t[0]},backend:n,attrs:{dim:a}});const o=t[0].shape,i=t[0].dtype;t.forEach((e=>{s.D5U.assertShapesMatch(o,e.shape,"All tensors passed to stack must have matching shapes"),s.D5U.assert(i===e.dtype,(()=>"All tensors passed to stack must have matching dtypes"))}));const u=[],l=ya({inputs:t.map((e=>{const t=xs({inputs:{input:e},backend:n,attrs:{dim:a}});return u.push(t),t})),backend:n,attrs:{axis:a}});return u.forEach((e=>n.disposeIntermediateTensorInfo(e))),l}};
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
class pi{constructor(e,t,n){this.variableNames=["x"],this.customUniforms=[{name:"value",type:"float"}],this.outputShape=t.map(((t,n)=>t[0]+e[n]+t[1]));const r=e.length,a=Re(r),s=t.map((e=>e[0])).join(","),o=t.map(((t,n)=>t[0]+e[n])).join(","),i=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,r);this.userCode=1!==r?`\n      ${a} start = ${a}(${s});\n      ${a} end = ${a}(${o});\n\n      void main() {\n        ${a} outC = getOutputCoords();\n        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {\n          setOutput(value);\n        } else {\n          ${a} coords = outC - start;\n          setOutput(getX(${i}));\n        }\n      }\n    `:`\n        int start = ${s};\n        int end = ${o};\n\n        void main() {\n          int outC = getOutputCoords();\n          if (outC < start || outC >= end) {\n            setOutput(value);\n          } else {\n            setOutput(getX(outC - start));\n          }\n        }\n      `}}
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
class hi{constructor(e,t,n){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"value",type:"float"}],this.outputShape=t.map(((t,n)=>t[0]+e[n]+t[1]));const r=e.length,a=Re(r),s=t.map((e=>e[0])).join(","),o=t.map(((t,n)=>t[0]+e[n])).join(","),i=tn("rc",r),u=tn("source",r),l=`${i[r-1]} < ${this.outputShape[r-1]}`,c=1===r?"source":`vec2(${u.slice(-2).join()})`,d=[`${a} rc = outputLoc;`,`${i[r-1]} += 1;\n       if(${l}) {\n      `,1===r?"":`}\n       rc = outputLoc;\n       ${i[r-2]} += 1;\n       if(${i[r-2]} < ${this.outputShape[r-2]}) {`,1===r?"":`  ${i[r-1]} += 1;\n         if(${l}) {`],p=1===r?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))";let h="";for(let e=0,t=1===r?2:4;e<t;e++)h+=`\n        ${d[e]}\n        if (${p}) {\n          result[${e}] = float(value);\n        } else {\n          ${a} source = rc - start;\n          result[${e}] = getChannel(getX(${u.join()}), ${c});\n        }\n      `;h+=1===r?"} ":"}}",this.userCode=`\n      const ${a} start = ${a}(${s});\n      const ${a} end = ${a}(${o});\n\n      void main() {\n        ${a} outputLoc = getOutputCoords();\n        vec4 result = vec4(0.);\n        ${h}\n        setOutput(result);\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const fi=e=>{const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{paddings:o,constantValue:i}=r;if(0===s.D5U.sizeFromShape(a.shape)){return $s({backend:n,attrs:{shape:o.map(((e,t)=>e[0]+a.shape[t]+e[1])),value:i,dtype:a.dtype}})}const u=(0,s.OBj)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new hi(a.shape,o,i):new pi(a.shape,o,i),l=[[i]];return n.runWebGLProgram(u,[a],a.dtype,l)},mi={kernelName:s.lyA,backendName:"webgl",kernelFunc:fi},gi=_n({opSnippet:"\n  if(a < 0.0 && floor(b) < b){\n    return NAN;\n  }\n  if (b == 0.0) {\n    return 1.0;\n  }\n  return (round(mod(b, 2.0)) != 1) ?\n      pow(abs(a), b) : sign(a) * pow(abs(a), b);\n",packedOpSnippet:"\n  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.\n  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));\n  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);\n  vec4 result = multiplier * pow(abs(a), b);\n\n  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS\n  bvec4 isExpZero = equal(b, vec4(0.0));\n  result.r = isExpZero.r ? 1.0 : result.r;\n  result.g = isExpZero.g ? 1.0 : result.g;\n  result.b = isExpZero.b ? 1.0 : result.b;\n  result.a = isExpZero.a ? 1.0 : result.a;\n\n  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n"}),xi={kernelName:s.pe_,backendName:"webgl",kernelFunc:gi};const bi={kernelName:s.DlI,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{axis:o,keepDims:i}=r,u=a.shape.length,l=[],c=s.D5U.parseAxisParam(o,a.shape);let d=c;const p=s.Wap.getAxesPermutation(d,u);let h,f=a;if(null!=p&&(f=Jn({inputs:{x:a},backend:n,attrs:{perm:p}}),d=s.Wap.getInnerMostAxes(d.length,u),l.push(f)),s.Wap.assertAxesAreInnerMostDims("prod",d,u),n.shouldExecuteOnCPU([f])){const e=n.texData.get(f.dataId).values,{outVals:t,outShape:r,outDtype:a}=Ot(f.shape,f.dtype,e,d);h=n.makeTensorInfo(r,a,t)}else{const[e,t]=s.Wap.computeOutAndReduceShapes(f.shape,d),r=s.D5U.sizeFromShape(t),o=zn({inputs:{x:f},backend:n,attrs:{shape:[-1,r]}}),i=Xn(o,(0,s.z4k)(a.dtype),"prod",n);h=zn({inputs:{x:i},backend:n,attrs:{shape:e}}),l.push(o),l.push(i)}if(i){l.push(h);const e=s.Wap.expandShapeToKeepDim(h.shape,c);h=zn({inputs:{x:h},backend:n,attrs:{shape:e}})}return l.forEach((e=>n.disposeIntermediateTensorInfo(e))),h}},vi=e=>{const{backend:t,attrs:n}=e,{start:r,stop:a,step:s,dtype:o}=n,i=Mt(r,a,s,o);return t.makeTensorInfo([i.length],o,i)},yi={kernelName:s.e6w,backendName:"webgl",kernelFunc:vi},ki=Fn({opSnippet:"return 1.0 / x;"}),Ii={kernelName:s.$HU,backendName:"webgl",kernelFunc:ki},wi=Fn({opSnippet:"if (isnan(x)) return x;\n  return (x < 0.0) ? 0.0 : x;\n",packedOpSnippet:"\n  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n"}),Si={kernelName:s.qkr,backendName:"webgl",kernelFunc:wi},Ci=Fn({opSnippet:"if (isnan(x)) return x;\n  return (x < 0.0) ? 0.0 : min(6.0, x);\n",packedOpSnippet:"\n  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n"}),$i={kernelName:s.SbG,backendName:"webgl",kernelFunc:Ci};
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
class Ti{constructor(e,t,n,r,a){this.variableNames=["A"],this.outputShape=[];const[s,o,i,u]=e;this.outputShape=[s,t,n,u];const l=[r&&t>1?o-1:o,r&&n>1?i-1:i],c=[r&&t>1?t-1:t,r&&n>1?n-1:n];let d;d=a?"(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)":"vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          ${l[0]/c[0]},\n          ${l[1]/c[1]});\n      const vec2 inputShapeRC = vec2(${o}.0, ${i}.0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = ${d};\n\n        // Compute the four integer indices.\n        ivec2 sourceFloorRC = ivec2(max(sourceFracIndexRC, vec2(0.0)));\n        ivec2 sourceCeilRC = ivec2(\n          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));\n\n        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);\n        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);\n        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);\n        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);\n\n        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);\n\n        float top = topLeft + (topRight - topLeft) * fracRC.y;\n        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;\n        float newValue = top + (bottom - top) * fracRC.x;\n\n        setOutput(newValue);\n      }\n    `}}
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
class Ei{constructor(e,t,n,r,a){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[s,o,i,u]=e;this.outputShape=[s,t,n,u];const l=[r&&t>1?o-1:o,r&&n>1?i-1:i],c=[r&&t>1?t-1:t,r&&n>1?n-1:n];let d;d=a?"(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)":"vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`\n      const vec3 effectiveInputOverOutputRatioRC = vec3(\n          ${l[0]/c[0]},\n          ${l[1]/c[1]},\n          ${l[1]/c[1]});\n      const vec3 inputShapeRC = vec3(${o}.0, ${i}.0,\n                                     ${i}.0);\n\n      float getAValue(int b, int r, int c, int d) {\n        return getChannel(getA(b, r, c, d), vec2(c, d));\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        // Calculate values for next column in yRC.z.\n        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);\n\n        // Fractional source index.\n        vec3 sourceFracIndexRC = ${d};\n\n        // Compute the four integer indices.\n        ivec3 sourceFloorRC = ivec3(max(sourceFracIndexRC, vec3(0.0)));\n        ivec3 sourceCeilRC = ivec3(\n          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));\n\n        // Should we calculate next column and row elements in 2x2 packed cell.\n        bool hasNextCol = d < ${u-1};\n        bool hasNextRow = coords.z < ${n-1};\n\n        // In parallel, construct four corners for all four components in\n        // packed 2x2 cell.\n        vec4 topLeft = vec4(\n          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),\n          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);\n\n        vec4 bottomLeft = vec4(\n          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),\n          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);\n\n        vec4 topRight = vec4(\n          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),\n          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);\n\n        vec4 bottomRight = vec4(\n          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),\n          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);\n\n        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);\n\n        vec4 top = mix(topLeft, topRight, fracRC.yyzz);\n        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);\n        vec4 newValue = mix(top, bottom, fracRC.x);\n\n        setOutput(newValue);\n      }\n    `}}const Ni={kernelName:s._Yw,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{images:a}=t,{alignCorners:o,halfPixelCenters:i,size:u}=r,[l,c]=u,d=(0,s.OBj)().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new Ei(a.shape,l,c,o,i):new Ti(a.shape,l,c,o,i);return n.runWebGLProgram(d,[a],"float32")}};
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
class Ri{constructor(e,t,n){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t;const[,r,a]=t,[,s,o]=e,i=[n&&s>1?r-1:r,n&&o>1?a-1:a],u=[n&&s>1?s-1:s,n&&o>1?o-1:o],l=i[0]/u[0],c=i[1]/u[1],d=1/l,p=1/c,h=2*Math.ceil(d)+2,f=2*Math.ceil(p)+2;this.userCode=`\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        int r = coords[1];\n        int c = coords[2];\n\n        float accumulator = 0.0;\n\n        const float heightScale = float(${l});\n        const float widthScale = float(${c});\n\n        const float invHeightScale = float(${d});\n        const float invWidthScale = float(${p});\n\n        const int winHeight = int(${h});\n        const int winWidth = int(${f});\n\n        // Compute bounds for where in dy we will look\n        float startRLerp = floor(float(r) * invHeightScale);\n        int startDyR = int(startRLerp - float(winHeight / 2));\n\n        float startCLerp = floor(float(c) * invWidthScale);\n        int startDyC = int(startCLerp - float(winWidth / 2));\n\n        // Loop over dy\n        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {\n          int dyR = dyROffset + startDyR;\n\n          // Guard against the window exceeding the bounds of dy\n          if (dyR < 0 || dyR >= ${s}) {\n            continue;\n          }\n\n          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {\n            int dyC = dyCOffset + startDyC;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyC < 0 || dyC >= ${o}) {\n              continue;\n            }\n\n            float dxR = float(dyR) * heightScale;\n            int topDxRIndex = int(floor(dxR));\n            int bottomDxRIndex = int(min(ceil(dxR), ${r-1}.0));\n            float dxRLerp = dxR - float(topDxRIndex);\n            float inverseDxRLerp = 1.0 - dxRLerp;\n\n            float dxC = float(dyC) * widthScale;\n            int leftDxCIndex = int(floor(dxC));\n            int rightDxCIndex = int(min(ceil(dxC), ${a-1}.0));\n            float dxCLerp = dxC - float(leftDxCIndex);\n            float inverseDxCLerp = 1.0 - dxCLerp;\n\n            if (r == topDxRIndex && c == leftDxCIndex) {\n              // topLeft\n              accumulator +=\n                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;\n            }\n\n            if (r == topDxRIndex && c == rightDxCIndex) {\n              // topRight\n              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == leftDxCIndex) {\n              // bottomLeft\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == rightDxCIndex) {\n              // bottomRight\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;\n            }\n          }\n        }\n        // End loop over dy\n\n        setOutput(accumulator);\n      }\n    `}}const Di={kernelName:s.zbQ,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{images:a,dy:s}=t,{alignCorners:o}=r,i=new Ri(s.shape,a.shape,o);return n.runWebGLProgram(i,[s],s.dtype)}};
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
class Ai{constructor(e,t,n,r,a){this.variableNames=["A"],this.outputShape=[];const[s,o,i,u]=e;this.outputShape=[s,t,n,u];const l=[r&&t>1?o-1:o,r&&n>1?i-1:i],c=[r&&t>1?t-1:t,r&&n>1?n-1:n],d=r?"0.5":"0.0";let p;p=a?"max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))":"vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          ${l[0]/c[0]},\n          ${l[1]/c[1]});\n      const vec2 inputShapeRC = vec2(${o}.0, ${i}.0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = ${p};\n\n        // Compute the coordinators of nearest neighbor point.\n        ivec2 sourceNearestRC = ivec2(\n          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${d})));\n        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);\n\n        setOutput(newValue);\n      }\n    `}}
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
class Fi{constructor(e,t,n,r,a){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[s,o,i,u]=e;this.outputShape=[s,t,n,u];const l=[r&&t>1?o-1:o,r&&n>1?i-1:i],c=[r&&t>1?t-1:t,r&&n>1?n-1:n],d=r?"0.5":"0.0";let p;p=a?"max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))":"vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`\n      const vec3 effectiveInputOverOutputRatioRC = vec3(\n          ${l[0]/c[0]},\n          ${l[1]/c[1]},\n          ${l[1]/c[1]});\n      const vec3 inputShapeRC = vec3(${o}.0, ${i}.0,\n                                     ${i}.0);\n\n      float getAValue(int b, int r, int c, int d) {\n        return getChannel(getA(b, r, c, d), vec2(c, d));\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        // Calculate values for next column in yRC.z.\n        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);\n\n        // Fractional source index.\n        vec3 sourceFracIndexRC = ${p};\n\n        // Compute the coordinators of nearest neighbor point.\n        ivec3 sourceNearestRC = ivec3(\n          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${d})));\n\n        // Should we calculate next column and row elements in 2x2 packed cell.\n        bool hasNextCol = d < ${u-1};\n        bool hasNextRow = coords.z < ${n-1};\n\n        vec4 newValue = vec4(\n          getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d),\n          hasNextCol ? getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d + 1) : 0.0);\n\n        setOutput(newValue);\n      }\n    `}}const _i={kernelName:s.dpD,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{images:a}=t,{alignCorners:o,halfPixelCenters:i,size:u}=r,[l,c]=u,d=(0,s.OBj)().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new Fi(a.shape,l,c,o,i):new Ai(a.shape,l,c,o,i);return n.runWebGLProgram(d,[a],a.dtype)}};
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
class Oi{constructor(e,t,n){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t;const[,r,a]=t,[,s,o]=e,i=[n&&s>1?r-1:r,n&&o>1?a-1:a],u=[n&&s>1?s-1:s,n&&o>1?o-1:o],l=i[0]/u[0],c=i[1]/u[1],d=1/l,p=1/c,h=2*Math.ceil(d)+2,f=2*Math.ceil(p)+2;this.userCode=`\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        int r = coords[1];\n        int c = coords[2];\n\n        float accumulator = 0.0;\n\n        const float heightScale = float(${l});\n        const float widthScale = float(${c});\n\n        const float invHeightScale = float(${d});\n        const float invWidthScale = float(${p});\n\n        const int winHeight = int(${h});\n        const int winWidth = int(${f});\n\n        // Compute bounds for where in dy we will look\n        float startRLerp = floor(float(r) * invHeightScale);\n        int startDyR = int(floor(startRLerp - float(winHeight / 2)));\n\n        float startCLerp = floor(float(c) * invWidthScale);\n        int startDyC = int(floor(startCLerp - float(winWidth / 2)));\n\n        // Loop over dy\n        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {\n          int dyR = dyROffset + startDyR;\n\n          // Guard against the window exceeding the bounds of dy\n          if (dyR < 0 || dyR >= ${s}) {\n            continue;\n          }\n\n          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {\n            int dyC = dyCOffset + startDyC;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyC < 0 || dyC >= ${o}) {\n              continue;\n            }\n\n            float sourceFracRow =\n              float(${i[0]}) *\n                (float(dyR) / float(${u[0]}));\n\n            float sourceFracCol =\n                float(${i[1]}) *\n                  (float(dyC) / float(${u[1]}));\n\n            int sourceNearestRow = int(min(\n                float(int(${r}) - 1),\n                ${n} ? float(round(sourceFracRow)) :\n                                  float(floor(sourceFracRow))));\n\n            int sourceNearestCol = int(min(\n                float(int(${a}) - 1),\n                ${n} ? float(round(sourceFracCol)) :\n                                  float(floor(sourceFracCol))));\n\n            if (r == sourceNearestRow && c == sourceNearestCol) {\n              accumulator += getDy(b, dyR, dyC, d);\n            }\n          }\n        }\n        // End loop over dy\n\n        setOutput(accumulator);\n      }\n    `}}const Mi={kernelName:s.Hmb,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{images:a,dy:s}=t,{alignCorners:o}=r,i=new Oi(s.shape,a.shape,o);return n.runWebGLProgram(i,[s],s.dtype)}};
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
class Ui{constructor(e,t){this.variableNames=["x"];const n=e.length;if(n>4)throw new Error(`WebGL backend: Reverse of rank-${n} tensor is not yet supported`);if(this.outputShape=e,1===n)return void(this.userCode=`\n        void main() {\n          int coord = getOutputCoords();\n          setOutput(getX(${e[0]} - coord - 1));\n        }\n      `);const r=e.map(((n,r)=>(n=>-1!==t.indexOf(n)&&1!==e[n]?`${e[n]} - coords[${n}] - 1`:`coords[${n}]`)(r))).join(","),a=Re(n);this.userCode=`\n      void main() {\n        ${a} coords = getOutputCoords();\n        setOutput(getX(${r}));\n      }\n    `}}
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
class Pi{constructor(e,t){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;const n=e.length;if(n>4)throw new Error(`WebGL backend: Reverse of rank-${n} tensor is not yet supported`);this.outputShape=e;const r=tn("rc",n),a=`${r[n-1]} + 1 < ${this.outputShape[n-1]}`,s=`${r[n-2]} + 1 < ${this.outputShape[n-2]}`,o=Re(n);function i(n){const r=e.map(((r,a)=>function(n,r){return-1!==t.indexOf(n)&&1!==e[n]?`${e[n]} - ${r[n]} - 1`:`${r[n]}`}(a,n)));return`getChannel(getX(${r.join(",")}), vec2(${r.slice(-2).join(",")}))`}this.userCode=1===n?`\n        void main(){\n          int rc = getOutputCoords();\n          vec4 result = vec4(0.);\n          result.r = getChannel(getX(${e[0]} - rc - 1),\n            ${e[0]} - rc - 1);\n          if(${a}){\n              result.g = getChannel(getX(${e[0]} - (rc  + 1) - 1),\n                ${e[0]} - (rc  + 1) - 1);\n          }\n          setOutput(result);\n        }\n      `:`\n        void main() {\n          ${o} rc = getOutputCoords();\n          vec4 result = vec4(0.);\n          result.r = ${function(e){return i(e)}(r.slice())};\n          if(${a}){\n            result.g = ${function(e){return e[n-1]="("+e[n-1]+" + 1)",i(e)}(r.slice())};\n          }\n          if(${s}) {\n            result.b = ${function(e){return e[n-2]="("+e[n-2]+" + 1)",i(e)}(r.slice())};\n            if(${a}) {\n              result.a = ${function(e){return e[n-1]="("+e[n-1]+" + 1)",e[n-2]="("+e[n-2]+" + 1)",i(e)}(r.slice())};\n            }\n          }\n          setOutput(result);\n        }\n    `}}const Wi={kernelName:s.mKl,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{dims:o}=r,i=a.shape.length,u=s.D5U.parseAxisParam(o,a.shape);if(0===i)return wn({inputs:{x:a},backend:n});const l=(0,s.OBj)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Pi(a.shape,u):new Ui(a.shape,u);return n.runWebGLProgram(l,[a],a.dtype)}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Bi{constructor(e,t){this.variableNames=["Image"],this.outputShape=[],this.customUniforms=[{name:"params",type:"vec4"}];const n=e[1],r=e[2];this.outputShape=e;let a="";a="number"==typeof t?`float outputValue = ${t.toFixed(2)};`:`\n        vec3 fill = vec3(${t.join(",")});\n        float outputValue = fill[coords[3]];`,this.userCode=`\n        void main() {\n          ivec4 coords = getOutputCoords();\n          int x = coords[2];\n          int y = coords[1];\n          float coordXFloat = (float(x) - params[0]) * params[3] -\n            (float(y) - params[1]) * params[2];\n          float coordYFloat = (float(x) - params[0]) * params[2] +\n            (float(y) - params[1]) * params[3];\n          int coordX = int(round(coordXFloat + params[0]));\n          int coordY = int(round(coordYFloat + params[1]));\n          ${a}\n          if(coordX >= 0 && coordX < ${r} && coordY >= 0 && coordY < ${n}) {\n            outputValue = getImage(coords[0], coordY, coordX, coords[3]);\n          }\n          setOutput(outputValue);\n        }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Li={kernelName:s.b9H,backendName:"webgl",kernelFunc:({inputs:e,attrs:t,backend:n})=>{const{image:r}=e,{radians:a,fillValue:o,center:i}=t,u=n,l=new Bi(r.shape,o),[c,d]=s.Wap.getImageCenter(i,r.shape[1],r.shape[2]),p=[[c,d,Math.sin(a),Math.cos(a)]];return u.runWebGLProgram(l,[r],r.dtype,p)}},Vi=Fn({opSnippet:"\n  // OpenGL ES does not support round function.\n  // The algorithm is based on banker's rounding.\n  float base = floor(x);\n  if ((x - base) < 0.5) {\n    return floor(x);\n  } else if ((x - base) > 0.5) {\n    return ceil(x);\n  } else {\n    if (mod(base, 2.0) == 0.0) {\n      return base;\n    } else {\n      return base + 1.0;\n    }\n  }\n"}),zi={kernelName:s.e07,backendName:"webgl",kernelFunc:Vi},Gi=Fn({opSnippet:"return inversesqrt(x);",cpuKernelImpl:Ut}),Hi={kernelName:s.bV0,backendName:"webgl",kernelFunc:Gi};
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
class ji{constructor(e,t,n,r,a,s,o=!0){this.variableNames=["updates","indices","defaultValue"],this.outputShape=s;const i=Re(a.length),u=Re(s.length);let l="";1===n?l="i":2===n&&(l="i, j");const c=`getIndices(${l})`;let d="";1===r?d="i":2===r&&(d="i, coords[1]");const p=`getUpdates(${d})`,h=t>1?"strides[j]":"strides";this.userCode=`\n        ${i} strides = ${i}(${a});\n\n        void main() {\n          ${u} coords = getOutputCoords();\n          float sum = 0.0;\n          bool found = false;\n          for (int i = 0; i < ${e}; i++) {\n            int flattenedIndex = 0;\n            for (int j = 0; j < ${t}; j++) {\n              int index = round(${c});\n              flattenedIndex += index * ${h};\n            }\n            if (flattenedIndex == coords[0]) {\n              sum += ${p};\n              found = true;\n            }\n          }\n          setOutput(mix(getDefaultValue(), sum, float(found)));\n        }\n      `}}const Xi={kernelName:s.xQA,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{indices:a,updates:o}=t,{shape:i}=r,{sliceRank:u,numUpdates:l,sliceSize:c,strides:d,outputSize:p}=s.Wap.calculateShapes(o,a,i),h=[p/c,c];if(0===p)return n.makeTensorInfo(i,a.dtype);const f=zn({inputs:{x:a},backend:n,attrs:{shape:[l,u]}}),m=zn({inputs:{x:o},backend:n,attrs:{shape:[l,c]}}),g=n.makeTensorInfo([],"float32",new Float32Array([0])),x=new ji(l,u,f.shape.length,m.shape.length,d,h),b=n.runWebGLProgram(x,[m,f,g],m.dtype),v=zn({inputs:{x:b},backend:n,attrs:{shape:i}});return n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(b),n.disposeIntermediateTensorInfo(g),v}};
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
class qi{constructor(e,t,n){let r,a;if(this.variableNames=["c","a","b"],this.outputShape=t,n>4)throw Error(`Where for rank ${n} is not yet supported`);if(1===n)a="resRC",r="resRC";else{const n=["resRC.x","resRC.y","resRC.z","resRC.w"],s=[],o=[];for(let r=0;r<t.length;r++)o.push(`${n[r]}`),r<e&&s.push(`${n[r]}`);r=s.join(),a=o.join()}const s=Re(n);this.userCode=`\n      void main() {\n        ${s} resRC = getOutputCoords();\n        float cVal = getC(${r});\n        if (cVal >= 1.0) {\n          setOutput(getA(${a}));\n        } else {\n          setOutput(getB(${a}));\n        }\n      }\n    `}}const Ki={kernelName:s.PhF,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n}=e,{condition:r,t:a,e:o}=t,i=new qi(r.shape.length,a.shape,a.shape.length);return n.runWebGLProgram(i,[r,a,o],(0,s.x8V)(a.dtype,o.dtype))}},Yi=Fn({opSnippet:`\n  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.\n  // see: https://arxiv.org/abs/1706.02515\n  float scaleAlpha = ${s.Wap.SELU_SCALEALPHA};\n  float scale = ${s.Wap.SELU_SCALE};\n  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);\n`}),Zi={kernelName:s.oFR,backendName:"webgl",kernelFunc:Yi},Qi=Fn({opSnippet:"if (isnan(x)) return x;\n  return 1.0 / (1.0 + exp(-1.0 * x));\n",packedOpSnippet:"\n  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n",cpuKernelImpl:Pt}),Ji={kernelName:s.a5O,backendName:"webgl",kernelFunc:Qi},eu=Fn({opSnippet:"\n  if (isnan(x)) { return 0.0; }\n  return sign(x);\n"}),tu={kernelName:s.i5y,backendName:"webgl",kernelFunc:eu},nu=Fn({opSnippet:"if (isnan(x)) return x;\n  return sin(x);\n"}),ru={kernelName:s.RQH,backendName:"webgl",kernelFunc:nu},au=Fn({opSnippet:"\n  float e2x = exp(x);\n  return (e2x - 1.0 / e2x) / 2.0;\n"}),su={kernelName:s.wYB,backendName:"webgl",kernelFunc:au},ou=Fn({opSnippet:"\n  float epsilon = 1.1920928955078125e-7;\n  float threshold = log(epsilon) + 2.0;\n\n  bool too_large = x > -threshold;\n  bool too_small = x < threshold;\n\n  float result;\n  float exp_x = exp(x);\n\n  if (too_large){\n    result = x;\n  }\n  else if (too_small){\n    result = exp_x;\n  }\n  else{\n    result = log(exp_x + 1.0);\n  }\n  return result;\n"}),iu={kernelName:s.MRv,backendName:"webgl",kernelFunc:ou},uu={kernelName:s.TQc,backendName:"webgl",kernelFunc:e=>{const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{blockShape:o,paddings:i}=r;s.D5U.assert(a.shape.length<=4,(()=>"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet"));const u=o.reduce(((e,t)=>e*t)),l=[[0,0]];l.push(...i);for(let e=1+o.length;e<a.shape.length;++e)l.push([0,0]);const c=[],d=fi({inputs:{x:a},backend:n,attrs:{paddings:l,constantValue:0}}),p=s.Wap.getReshaped(d.shape,o,u,!1),h=s.Wap.getPermuted(p.length,o.length,!1),f=s.Wap.getReshapedPermuted(d.shape,o,u,!1),m=zn({inputs:{x:d},backend:n,attrs:{shape:p}}),g=Jn({inputs:{x:m},backend:n,attrs:{perm:h}}),x=zn({inputs:{x:g},backend:n,attrs:{shape:f}});return c.push(d),c.push(m),c.push(g),c.forEach((e=>n.disposeIntermediateTensorInfo(e))),x}};const lu={kernelName:s.O3z,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:t,backend:n}=e,{indices:r,values:a,denseShape:s,defaultValue:o}=t;if(1!==s.shape.length)throw new Error(`Dense shape must be a vector, saw:\n         ${s.shape}`);if(2!==r.shape.length)throw new Error(`Indices must be a matrix, saw:\n         ${r.shape}`);if(1!==a.shape.length)throw new Error(`Values must be a vector, saw:\n         ${a.shape}`);if(0!==o.shape.length)throw new Error(`Default value must be a scalar, saw:\n        ${o.shape}`);const i=n.readSync(r.dataId),u=n.readSync(a.dataId),l=n.readSync(s.dataId),c=n.readSync(o.dataId)[0],[d,p,h,f,m]=Lt(i,r.shape,r.dtype,u,a.dtype,l,c);return[n.makeTensorInfo(p,r.dtype,d),n.makeTensorInfo([p[0]],a.dtype,h),n.makeTensorInfo([f.length],"bool",new Uint8Array(f.map((e=>Number(e))))),n.makeTensorInfo([m.length],r.dtype,new Int32Array(m))]}};const cu={kernelName:s.nhH,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:t,backend:n}=e,{inputIndices:r,inputShape:a,newShape:s}=t;if(2!==r.shape.length)throw new Error(`Input indices should be a matrix but received shape ${r.shape}`);if(1!==a.shape.length)throw new Error(`Input shape should be a vector but received shape ${a.shape}`);if(1!==s.shape.length)throw new Error(`Target shape should be a vector but received shape ${s.shape}`);const o=Array.from(n.readSync(a.dataId)),i=n.readSync(r.dataId),u=Array.from(n.readSync(s.dataId)),[l,c,d]=Vt(i,r.shape,r.dtype,o,u);return[n.makeTensorInfo(c,r.dtype,l),n.makeTensorInfo([d.length],s.dtype,new Int32Array(d))]}};const du={kernelName:s.w3H,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:t,backend:n}=e,{data:r,indices:a,segmentIds:s}=t;if(r.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(1!==a.shape.length)throw new Error(`Indices should be a vector but received shape\n              ${a.shape}`);if(1!==s.shape.length)throw new Error(`Segment ids should be a vector but received shape\n              ${s.shape}`);const o=n.readSync(r.dataId),i=n.readSync(a.dataId),u=n.readSync(s.dataId),[l,c]=zt(o,r.shape,r.dtype,i,u,!0);return n.makeTensorInfo(c,r.dtype,l)}};const pu={kernelName:s.ZjV,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:t,backend:n}=e,{data:r,indices:a,segmentIds:s}=t;if(r.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(1!==a.shape.length)throw new Error(`Indices should be a vector but received shape\n             ${a.shape}`);if(1!==s.shape.length)throw new Error(`Segment ids should be a vector but received shape\n             ${s.shape}`);const o=n.readSync(r.dataId),i=n.readSync(a.dataId),u=n.readSync(s.dataId),[l,c]=zt(o,r.shape,r.dtype,i,u);return n.makeTensorInfo(c,r.dtype,l)}};const hu={kernelName:s.D2d,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{sparseIndices:a,sparseValues:o,defaultValue:i}=t,{outputShape:u}=r,{sliceRank:l,numUpdates:c,strides:d,outputSize:p}=s.Wap.calculateShapes(o,a,u),h=new ji(c,l,a.shape.length,o.shape.length,d,[p,1],!1),f=n.runWebGLProgram(h,[o,a,i],o.dtype),m=zn({inputs:{x:f},backend:n,attrs:{shape:u}});return n.disposeIntermediateTensorInfo(f),m}};const fu={kernelName:s.L8s,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{numOrSizeSplits:o,axis:i}=r,u=s.D5U.parseAxisParam(i,a.shape)[0],l=s.Wap.prepareSplitSize(a,o,u),c=a.shape.length,d=new Array(c).fill(0),p=a.shape.slice();return l.map((e=>{const t=[...p];t[u]=e;const r=Kr({inputs:{x:a},backend:n,attrs:{begin:d,size:t}});return d[u]+=e,r}))}},mu="return sqrt(x);",gu=Fn({opSnippet:mu,packedOpSnippet:mu,cpuKernelImpl:Gt}),xu={kernelName:s.FKq,backendName:"webgl",kernelFunc:gu},bu=Fn({opSnippet:"return x * x;"}),vu={kernelName:s.bK0,backendName:"webgl",kernelFunc:bu},yu="return (a - b) * (a - b);",ku=_n({opSnippet:yu,packedOpSnippet:yu}),Iu={kernelName:s._tC,backendName:"webgl",kernelFunc:ku};const wu={kernelName:s.h8e,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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
class Su{constructor(e,t,n){this.variableNames=["x"],this.outputShape=n;const r=n.length,a=Re(n.length),s=Re(n.length);let o="";if(1===r)o="coords * strides + begin";else{let e=0;o=n.map(((t,r)=>(e++,1===n.length?`coords * strides[${r}] + begin[${r}]`:`coords[${e-1}] * strides[${r}] + begin[${r}]`))).join(",")}this.userCode=`\n      ${a} begin = ${a}(${e});\n      ${a} strides = ${a}(${t});\n\n      void main() {\n        ${s} coords = getOutputCoords();\n        setOutput(getX(${o}));\n      }\n    `}}const Cu={kernelName:s.jQk,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{begin:o,end:i,strides:u,beginMask:l,endMask:c,ellipsisMask:d,newAxisMask:p,shrinkAxisMask:h}=r,{finalShapeSparse:f,finalShape:m,isIdentity:g,sliceDim0:x,isSimpleSlice:b,begin:v,end:y,strides:k}=s.kuN.sliceInfo(a.shape,o,i,u,l,c,d,p,h);let I;if(g)I=zn({inputs:{x:a},backend:n,attrs:{shape:m}});else if(x||b){s.D5U.assert(a.shape.length>=1,(()=>`Input must have rank at least 1, got: ${a.shape.length}`));const e=s.kuN.computeOutShape(v,y,k),t=Kr({inputs:{x:a},backend:n,attrs:{begin:v,size:e}});I=zn({inputs:{x:t},backend:n,attrs:{shape:m}}),n.disposeIntermediateTensorInfo(t)}else{if(n.shouldExecuteOnCPU([a])){const e=n.readSync(a.dataId),t=(0,s.f3b)(a.shape,a.dtype,e),r=Ht(f,t,k,v);I=n.makeTensorInfo(m,a.dtype,r.values)}else{const e=new Su(v,k,f);I=n.runWebGLProgram(e,[a],a.dtype)}}const w=zn({inputs:{x:I},backend:n,attrs:{shape:m}});return n.disposeIntermediateTensorInfo(I),w}};const $u={kernelName:s._JP,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:r}=e,{separator:a,nGramWidths:s,leftPad:o,rightPad:i,padWidth:u,preserveShortSequences:l}=r,{data:c,dataSplits:d}=t,p=n.readSync(c.dataId),h=n.readSync(d.dataId),[f,m]=jt(p,h,a,s,o,i,u,l);return[n.makeTensorInfo([f.length],"string",f),n.makeTensorInfo(d.shape,"int32",m)]}};const Tu={kernelName:s.s1s,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:r}=e,{skipEmpty:a}=r,{input:s,delimiter:o}=t;if("string"!==s.dtype)throw new Error("Input must be of datatype string");if(1!==s.shape.length)throw new Error(`Input must be a vector, got shape: ${s.shape}`);if(0!==o.shape.length)throw new Error(`Delimiter must be a scalar, got shape: ${o.shape}`);const i=n.readSync(s.dataId),u=n.readSync(o.dataId)[0],[l,c,d]=Xt(i,u,a),p=c.length;return[n.makeTensorInfo([p,2],"int32",l),n.makeTensorInfo([p],"string",c),n.makeTensorInfo([2],"int32",new Int32Array(d))]}};const Eu={kernelName:s.XkS,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:r}=e,{numBuckets:a}=r,{input:s}=t;if("string"!==s.dtype)throw new Error("Input must be of datatype string");if(a<=0)throw new Error("Number of buckets must be at least 1");const o=n.readSync(s.dataId),i=qt(o,a);return n.makeTensorInfo(s.shape,"int32",i)}},Nu=Fn({opSnippet:"return tan(x);"}),Ru={kernelName:s.sEM,backendName:"webgl",kernelFunc:Nu},Du=Fn({opSnippet:"\n  float e2x = exp(-2.0 * abs(x));\n  return sign(x) * (1.0 - e2x) / (1.0 + e2x);\n"}),Au={kernelName:s.MIZ,backendName:"webgl",kernelFunc:Du};
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
class Fu{constructor(e,t){this.variableNames=["A"];const n=new Array(e.length);for(let r=0;r<n.length;r++)n[r]=e[r]*t[r];this.outputShape=n,this.rank=n.length;const r=Re(this.rank),a=function(e){const t=e.length;if(t>5)throw Error(`Tile for rank ${t} is not yet supported`);if(1===t)return`imod(resRC, ${e[0]})`;const n=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],r=[];for(let t=0;t<e.length;t++)r.push(`imod(${n[t]}, ${e[t]})`);return r.join()}(e);this.userCode=`\n      void main() {\n        ${r} resRC = getOutputCoords();\n        setOutput(getA(${a}));\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function _u(e){const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{reps:o}=r;if("string"===a.dtype||a.shape.length>5){const e=n.readSync(a.dataId),t="string"===a.dtype?e.map((e=>s.D5U.decodeString(e))):e,r=(0,s.f3b)(a.shape,a.dtype,t),i=Yt(r,o);return n.makeTensorInfo(i.shape,i.dtype,i.values)}const i=new Fu(a.shape,o);return n.runWebGLProgram(i,[a],a.dtype)}const Ou={kernelName:s.n9L,backendName:"webgl",kernelFunc:_u};class Mu{constructor(e){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"negativeInf",type:"float"},{name:"dir",type:"int"},{name:"inc",type:"int"}],this.outputShape=e,this.userCode="\n       void main() {\n         ivec2 coords = getOutputCoords();\n         int batch = coords[0];\n         int elemIdx = coords[1];\n\n         // We compare elements pair-wise within a group of size 2 * inc.\n         // The comparing rule for each group alternates between ascending\n         // and descending. Within each group, we compare each pair at\n         // positions i and i+inc. To decide whether an element at position i\n         // is x0 or x1, we mod it by 2 * inc, if the result is smaller than\n         // inc, it is in the first half of the group, we denote it as x0,\n         // otherwise we denote it as x1.\n         // For example, as shown in the Bitonic top K paper referenced above,\n         // Figure5(a) shows that element[1] is in the\n         // second half of the group when group size is 2, but it is in the\n         // first half of the group when group size is 4.\n\n         bool isFirstInPair = imod(elemIdx, 2 * inc) < inc;\n         int i = isFirstInPair ? elemIdx : elemIdx - inc;\n\n         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));\n         int i1 = firstPass == 1 ? i + inc : int(getIndices(batch, i + inc));\n         float x0 = i0 < n ? getX(batch, i0) : negativeInf;\n         float x1 = i1 < n ? getX(batch, i1) : negativeInf;\n\n         // Denotes which direction indices are in (ascending or descending).\n         bool reverse = imod(elemIdx, 2 * dir) >= dir;\n         bool isGreater = x0 > x1 || (x0 == x1 && i1 > i0);\n         if (reverse == isGreater) { // Elements in opposite order of direction\n           int iTemp = i0;\n           i0 = i1;\n           i1 = iTemp;\n         }\n         if (isFirstInPair) {\n            setOutput(float(i0));\n         } else {\n            setOutput(float(i1));\n         }\n       }\n     "}}class Uu{constructor(e){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"k",type:"int"}],this.outputShape=e,this.userCode="\n    void main() {\n         // Takes max of indices (0, k), (1, k + 1), (2, k + 2) ...\n         ivec2 coords = getOutputCoords();\n         int batch = coords[0];\n         int elemIdx = coords[1];\n\n         // The output size is half of the previous size.\n         // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _ (k=4),\n         // we only need to output the indices at positions |, the indices at\n         // positions _ can be thrown away, see Figure5(b) After Phase 2\n         // (Merge phase) in the Bitonic Top K paper referenced above.\n         // For example, the paper shows we only need to output the orange bars.\n         // The output sequence should look like this | | | | | | | |.\n         // Because the sequence is halved, to map the output index back\n         // to the previous sequence to find the corresponding value,\n         // we need to double the index. When we double the index,\n         // we basically interpolate a position, so 2i looks like\n         // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k position\n         // of each 2k positions by - elemIdx % k. E.g. for output at\n         // index 4,5,6,7, we want to get the corresponding element at\n         // original index 8,9,10,11, for output at index 8,9,10,11,\n         // we want to get the corresponding element at original index\n         // 16,17,18,19, so on and so forth.\n\n         int i = elemIdx < k ? elemIdx : (elemIdx * 2 - imod(elemIdx, k));\n         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));\n         int i1 = firstPass == 1 ? i + k : int(getIndices(batch, i + k));\n\n         float x0 = getX(batch, i0);\n         float x1 = i1 < n ? getX(batch, i1) : x0;\n\n         setOutput(x0 >= x1 ? float(i0) : float(i1));\n       }\n     "}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Pu(e,t){null!==t&&e.disposeIntermediateTensorInfo(t)}function Wu(e){let t=1;for(;t<e;)t*=2;return t}const Bu={kernelName:s.cWu,backendName:"webgl",kernelFunc:function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{k:o,sorted:i}=r,u=(0,s.OBj)().getNumber("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD"),l=(0,s.OBj)().getNumber("TOPK_K_CPU_HANDOFF_THRESHOLD"),c=a.shape,d=c[c.length-1];if(n.shouldExecuteOnCPU([a])||d<u||o>l){const e=n.readSync(a.dataId),[t,r]=Zt(e,c,a.dtype,o,i);return[n.makeTensorInfo(t.shape,t.dtype,t.values),n.makeTensorInfo(r.shape,r.dtype,r.values)]}if(0===o)return c[c.length-1]=0,[n.makeTensorInfo(c,a.dtype,[]),n.makeTensorInfo(c,"int32",[])];if(1===d)return[a,$s({attrs:{shape:c,dtype:"int32",value:0},backend:n})];const p=n.texData.get(a.dataId),h=null!==p&&p.isPacked,f=h?n.unpackTensor(a):a,m=s.D5U.sizeFromShape(c)/d,g=zn({inputs:{x:f},attrs:{shape:[m,d]},backend:n});h&&Pu(n,f);const x=Wu(o),b=Wu(d);let v=null;const y=()=>null===v?[g,g]:[g,v],k=(e,t,r)=>{const a=y(),s=new Mu(r),o=[[d],[null===v?1:0],[Number.NEGATIVE_INFINITY],[e],[t]],i=v;v=n.runWebGLProgram(s,a,"int32",o),Pu(n,i)};for(let e=1;e<x;e*=2){const t=2*e;for(let n=e;n>=1;n/=2)k(t,n,[m,b])}for(let e=b;e>x;e/=2){const t=y(),r=new Uu([m,e/2]),a=[[d],[null===v?1:0],[x]],s=v;v=n.runWebGLProgram(r,t,"int32",a),Pu(n,s);const o=x/2,i=2*o;for(let e=o;e>=1;e/=2)k(i,e,v.shape)}let I=v;v=Kr({inputs:{x:v},backend:n,attrs:{begin:0,size:[m,o]}}),Pu(n,I);let w=Gs({inputs:{x:g,indices:v},backend:n,attrs:{axis:1,batchDims:1}});Pu(n,g);const S=c.slice(0,-1);S.push(o),I=v,v=zn({inputs:{x:v},attrs:{shape:S},backend:n}),Pu(n,I);const C=w;return w=zn({inputs:{x:w},attrs:{shape:S},backend:n}),Pu(n,C),[w,v]}};
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
class Lu{constructor(e,t,n,r,a,s){this.variableNames=["Image","Transforms"],this.outputShape=s;const o="nearest"===n?1:2;let i;switch(r){case"constant":default:i=1;break;case"reflect":i=2;break;case"wrap":i=3;break;case"nearest":i=4}this.userCode=`\n            float mapCoord(float outCoord, float len) {\n              float inCoord = outCoord;\n              if(${i} == 2) {\n                if (inCoord < 0.0) {\n                  if (len <= 1.0) {\n                    inCoord = 0.0;\n                  } else {\n                    float sz2 = 2.0 * len;\n                    if (inCoord < sz2) {\n                      inCoord = sz2 * float(int(float(-inCoord / sz2))) +\n                      inCoord;\n                    }\n                    inCoord = inCoord < -len ? inCoord + sz2 : -inCoord - 1.0;\n                  }\n                } else if (inCoord > len - 1.0) {\n                  if (len <= 1.0) {\n                    inCoord = 0.0;\n                  } else {\n                    float sz2 = 2.0 * len;\n                    inCoord -= sz2 * float(int(float(inCoord / sz2)));\n                    if (inCoord >= len) {\n                      inCoord = sz2 - inCoord - 1.0;\n                    }\n                  }\n                }\n                return clamp(inCoord, 0.0, len - 1.0);\n              } else if (${i} == 3) {\n                if (inCoord < 0.0) {\n                  if (len <= 1.0) {\n                    inCoord = 0.0;\n                  } else {\n                    float sz = len - 1.0;\n                    inCoord += len * (float(int(float(-inCoord / sz))) + 1.0);\n                  }\n                } else if (inCoord > len - 1.0) {\n                  if (len <= 1.0) {\n                    inCoord = 0.0;\n                  } else {\n                    float sz = len - 1.0;\n                    inCoord -= len * float(int(float(inCoord / sz)));\n                  }\n                }\n                return clamp(inCoord, 0.0, len - 1.0);\n              } else if (${i} == 4) {\n                return clamp(outCoord, 0.0, len - 1.0);\n              } else {\n                return outCoord;\n              }\n            }\n\n            float readWithFillValue(int batch, int coordY, int coordX,\n              int channel) {\n              float outputValue;\n              if (0 <= coordY && coordY < ${e} && 0 <= coordX && coordX < ${t}) {\n                  outputValue = getImage(batch, coordY, coordX, channel);\n              } else {\n                outputValue = float(${a});\n              }\n              return outputValue;\n            }\n\n            void main() {\n              ivec4 coords = getOutputCoords();\n              float outputValue;\n              int batch = coords[0];\n              int x = coords[2];\n              int y = coords[1];\n              int channel = coords[3];\n              float xf = float(x);\n              float yf = float(y);\n              float a1 = getTransforms(batch, 0);\n              float a2 = getTransforms(batch, 1);\n              float a3 = getTransforms(batch, 2);\n              float b1 = getTransforms(batch, 3);\n              float b2 = getTransforms(batch, 4);\n              float b3 = getTransforms(batch, 5);\n              float c1 = getTransforms(batch, 6);\n              float c2 = getTransforms(batch, 7);\n              float projection = c1 * xf + c2 * yf + 1.0;\n              if (projection == 0.0) {\n                outputValue = float(${a});\n              } else {\n                float inX = (a1 * xf + a2 * yf + a3) / projection;\n                float inY = (b1 * xf + b2 * yf + b3) / projection;\n                float mapX = mapCoord(inX, float(${t}));\n                float mapY = mapCoord(inY, float(${e}));\n\n                if (${o} == 1) {\n                  int coordY = int(round(mapY));\n                  int coordX = int(round(mapX));\n                  outputValue = readWithFillValue(batch, coordY, coordX,\n                    channel);\n                } else {\n                  float yFloor = floor(mapY);\n                  float xFloor = floor(mapX);\n                  float yCeil = yFloor + 1.0;\n                  float xCeil = xFloor + 1.0;\n                  float valueYFloor = (xCeil - mapX) *\n                  readWithFillValue(batch, int(yFloor), int(xFloor), channel) +\n                  (mapX - xFloor) *\n                  readWithFillValue(batch, int(yFloor), int(xCeil), channel);\n                  float valueYCeil = (xCeil - mapX) *\n                  readWithFillValue(batch, int(yCeil), int(xFloor), channel) +\n                  (mapX - xFloor) *\n                  readWithFillValue(batch, int(yCeil), int(xCeil), channel);\n                  outputValue = (yCeil - mapY) * valueYFloor +\n                  (mapY - yFloor) * valueYCeil;\n                }\n              }\n              setOutput(outputValue);\n            }\n        `}}const Vu={kernelName:s.wx7,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:r}=e,{image:a,transforms:s}=t,{interpolation:o,fillMode:i,fillValue:u,outputShape:l}=r,[c,d,p,h]=a.shape,[f,m]=null!=l?l:[d,p],g=new Lu(d,p,o,i,u,[c,f,m,h]);return n.runWebGLProgram(g,[a,s],"float32")}};const zu={kernelName:s.kpP,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:t,attrs:n,backend:r}=e,{axis:a}=n,{x:s}=t;de(s,"unique"),console.warn("WARNING: ","UI might be locked temporarily as data is being downloaded");const o=r.readSync(s.dataId),{outputValues:i,outputShape:u,indices:l}=Jt(o,a,s.shape,s.dtype);return[r.makeTensorInfo(u,s.dtype,i),r.makeTensorInfo([l.length],"int32",l)]}};const Gu={kernelName:s.ToN,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{value:a}=t;let{axis:s}=r;s<0&&(s+=a.shape.length);const o=a,i=o.shape.length,u=a.shape[s],l=new Array(i-1);let c=0;for(let e=0;e<i;e++)e!==s&&(l[c++]=o.shape[e]);const d=[],p=new Array(i).fill(0),h=o.shape.slice();h[s]=1;const f=new Array(u);for(let e=0;e<f.length;e++){p[s]=e;const t=Kr({inputs:{x:o},backend:n,attrs:{begin:p,size:h}}),r=zn({inputs:{x:t},backend:n,attrs:{shape:l}});f[e]=r,d.push(t)}return d.forEach((e=>n.disposeIntermediateTensorInfo(e))),f}};
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
class Hu{constructor(e,t){this.variableNames=["x","segmentIds"];const n=e.windowSize,r=e.batchSize,a=e.inSize,s=e.numSegments,o=s*Math.ceil(a/n);this.outputShape=[r,o];const i=4*Math.floor(n/4),u=n%4,l="\n        sumValue += dot(values, segFilter);\n    ";let c="";a%n>0&&(c=`\n        if (inIdx < 0 || inIdx >= ${a}) {\n          return initializationValue;\n        }\n      `);let d="";a%n>0&&(d=`\n        if (inIdx < 0 || inIdx >= ${a}) {\n          return -1.0;\n        }\n      `),this.userCode=`\n      const float initializationValue = 0.0;\n\n      float getValue(int batch, int inIdx) {\n        ${c}\n        return getX(batch, inIdx);\n      }\n\n      float getSegmentIdAtIndex(int inIdx) {\n        ${d}\n        return getSegmentIds(inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = int(floor(float(outIdx) / float(\n          ${s})) * float(${n}));\n        int currentSeg = int(mod(float(outIdx), float(${s})));\n\n        float sumValue = 0.0;\n\n        for (int i = 0; i < ${i}; i += 4) {\n          int inIdx = inOffset + i;\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0\n          );\n\n          ${l}\n        }\n\n        int inIdx = inOffset + ${i};\n        if (${1===u}) {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n\n          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            0,\n            0,\n            0\n          );\n\n          ${l}\n        } else if (${2===u}) {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n              0,\n              0\n          );\n\n          ${l}\n        } else if (${3===u}) {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,\n            0\n          );\n\n          ${l}\n        }\n        setOutput(sumValue);\n      }\n    `}}const ju=[nr,ar,or,ur,dr,fr,mr,gr,Ir,wr,Cr,Tr,Nr,Dr,Fr,Mr,Ur,Br,Lr,Vr,Hr,Zr,Qr,Jr,aa,ia,ca,$n,ha,ka,Ta,Aa,Fa,_a,Oa,Ma,Pa,Ba,Va,ja,Xa,Ka,Qa,ts,ns,as,os,is,ls,cs,ps,fs,gs,bs,ks,Ss,Ts,Ns,As,_s,Us,Ws,Bs,Vs,Hs,Xs,Ks,Sn,Ys,ba,Qs,eo,no,Nn,ao,oo,io,lo,po,fo,go,bo,ko,wo,Co,To,Eo,No,Ao,Fo,_o,Oo,Mo,Po,Lo,zo,Qo,Vn,Jo,ti,ri,si,ta,ii,ci,di,mi,xi,An,bi,yi,ra,jo,Ii,Si,$i,Gn,Ni,Di,_i,Mi,Wi,Li,zi,Hi,Xi,Ki,Zi,Ji,tu,ru,su,Yr,Zo,iu,uu,lu,cu,du,pu,hu,fu,xu,vu,Iu,wu,Cu,$u,Tu,Eu,Ko,Qn,Ru,Au,Ou,Bu,Vu,er,zu,Gu,{kernelName:s.Qvg,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:r}=e,{x:a,segmentIds:o}=t,{numSegments:i}=r,u=a.shape.length,l=[];let c=0;const d=s.Wap.getAxesPermutation([c],u);let p=a;null!=d&&(p=Jn({inputs:{x:a},backend:n,attrs:{perm:d}}),l.push(p),c=s.Wap.getInnerMostAxes(1,u)[0]);const h=s.Wap.segment_util.computeOutShape(p.shape,c,i),f=s.D5U.sizeFromShape([p.shape[c]]),m=zn({inputs:{x:p},backend:n,attrs:{shape:[-1,f]}});l.push(m);const g=(0,s.z4k)(a.dtype),x=(e,t,r,a,o)=>{const i=e.shape[0],u=e.shape[1],c=s.Wap.segment_util.segOpComputeOptimalWindowSize(u,o),d=new Hu({windowSize:c,inSize:u,batchSize:i,numSegments:o},t),p=n.compileAndRun(d,[e,r],a);if(l.push(p),p.shape[1]===o)return p;const h=vi({backend:n,attrs:{start:0,stop:o,step:1,dtype:"float32"}}),f=_u({inputs:{x:h},backend:n,attrs:{reps:[u/c]}});l.push(h),l.push(f);return x(p,t,f,a,o)},b=zn({inputs:{x:x(m,"unsortedSegmentSum",o,g,i)},backend:n,attrs:{shape:h}});let v=b;if(null!=d){l.push(b);const e=s.Wap.getUndoAxesPermutation(d);v=Jn({inputs:{x:v},backend:n,attrs:{perm:e}})}return l.forEach((e=>n.disposeIntermediateTensorInfo(e))),v}},li];for(const e of ju)(0,s.wCN)(e)}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */,2659:(e,t,n)=>{"use strict";n.d(t,{SYM:()=>me,VGw:()=>ge,SpW:()=>xe,mm_:()=>be,Xze:()=>ve,oT6:()=>ye,IKK:()=>ke,sJF:()=>Ie,aJk:()=>we,M2y:()=>Se,qw7:()=>Ce,jMg:()=>$e,QCc:()=>Ee,Oyi:()=>Te,JhU:()=>Ne,_k9:()=>De,IMb:()=>Ae,ROF:()=>Re,XLW:()=>Fe,zws:()=>_e,zvY:()=>Oe,eEB:()=>Me,RFZ:()=>Ue,gJX:()=>Pe,xnO:()=>We,Zz9:()=>Be,yj2:()=>Le,Eh3:()=>Ve,mhS:()=>ze,wUP:()=>Ge,wm:()=>He,x12:()=>je,o2y:()=>Xe,ik2:()=>qe,mc4:()=>Ke,TR1:()=>Ye,VcC:()=>Qe,iHb:()=>Ze,JLz:()=>c,QRR:()=>Je,T0n:()=>et,cie:()=>tt,sL$:()=>nt,y7R:()=>rt,$w:()=>at,p4S:()=>st,Vn9:()=>it,ekb:()=>ot,$g6:()=>lt,SX0:()=>ct,HEU:()=>dt,hdR:()=>ht,Omj:()=>pt,NEP:()=>ft,YFo:()=>mt,Y0y:()=>gt,vwp:()=>xt,deh:()=>bt,Uyb:()=>vt,OR:()=>yt,jeX:()=>kt,eBW:()=>hr,sHE:()=>It,_V0:()=>gr,luS:()=>xr,q1x:()=>St,qi_:()=>wt,iZT:()=>Ct,Acj:()=>$t,Qg5:()=>Et,iJz:()=>Tt,J_u:()=>Nt,avt:()=>Rt,iWB:()=>Dt,r7n:()=>At,Zuw:()=>d,eZ0:()=>Vt,Hhh:()=>zt,J$2:()=>Ft,vtC:()=>_t,CAk:()=>Ot,e7N:()=>Mt,ZbH:()=>Ut,kU:()=>Pt,PYm:()=>Wt,VfG:()=>Bt,MZg:()=>Lt,YoZ:()=>Gt,mTV:()=>jt,OAf:()=>qt,OU7:()=>Kt,OV7:()=>Xt,vFR:()=>Yt,BMI:()=>Ht,q2K:()=>Zt,c17:()=>Qt,q8u:()=>Jt,jQs:()=>en,Vbg:()=>tn,NZg:()=>nn,wYn:()=>rn,kuV:()=>an,uv1:()=>on,cye:()=>un,W0H:()=>ln,yQU:()=>sn,we_:()=>dn,qWM:()=>cn,QiL:()=>pn,lyA:()=>hn,pe_:()=>fn,o0g:()=>mn,DlI:()=>gn,e6w:()=>xn,xJR:()=>bn,oHH:()=>ut,$HU:()=>vn,qkr:()=>yn,SbG:()=>$n,HZH:()=>kn,_Yw:()=>Sn,zbQ:()=>Cn,dpD:()=>In,Hmb:()=>wn,mKl:()=>Tn,b9H:()=>fr,e07:()=>En,bV0:()=>Nn,xQA:()=>Rn,PhF:()=>Dn,oFR:()=>An,a5O:()=>Un,i5y:()=>Mn,RQH:()=>_n,wYB:()=>On,p2w:()=>Fn,Gcp:()=>zn,MRv:()=>Pn,TQc:()=>Ln,O3z:()=>Gn,nhH:()=>Hn,w3H:()=>jn,ZjV:()=>Xn,D2d:()=>qn,L8s:()=>Vn,FKq:()=>Wn,bK0:()=>Yn,_tC:()=>Kn,h8e:()=>pr,jQk:()=>Zn,_JP:()=>Qn,s1s:()=>Jn,XkS:()=>er,Tr8:()=>tr,GBy:()=>Bn,sEM:()=>nr,MIZ:()=>rr,YDk:()=>ta,n9L:()=>ar,cWu:()=>sr,wx7:()=>or,G3Y:()=>ir,kpP:()=>ur,ToN:()=>lr,Qvg:()=>cr,RuY:()=>dr,usg:()=>mr,Wap:()=>u,Jyw:()=>s,f3b:()=>us,C2$:()=>a,SRH:()=>ai,OBj:()=>ce,GDt:()=>l,jqO:()=>oi,wCN:()=>Cr,iD$:()=>js,kuN:()=>o,z4k:()=>fa,lub:()=>si,x8V:()=>ha,D5U:()=>r,lls:()=>qs});var r={};n.r(r),n.d(r,{arraysEqual:()=>T,assert:()=>k,assertNonNegativeIntegerDimensions:()=>re,assertNonNull:()=>w,assertShapesMatch:()=>I,bytesFromStringArray:()=>G,bytesPerElement:()=>z,checkConversionForErrors:()=>W,clamp:()=>m,computeStrides:()=>Z,createScalarValue:()=>Lr,createShuffledIndices:()=>D,decodeString:()=>jr,distSquared:()=>y,encodeString:()=>Hr,fetch:()=>Gr,fingerPrint64:()=>Br,flatten:()=>S,getArrayFromDType:()=>P,getTypedArrayFromDType:()=>U,hasEncodingLoss:()=>L,hexToLong:()=>Nr,indexToLoc:()=>se,inferDtype:()=>q,inferFromImplicitShape:()=>_,isBoolean:()=>j,isFunction:()=>K,isInt:()=>E,isNumber:()=>X,isPromise:()=>oe,isScalarShape:()=>$,isString:()=>H,isTypedArray:()=>V,isValidDtype:()=>B,locToIndex:()=>ae,makeOnesTypedArray:()=>ee,makeZerosNestedTypedArray:()=>ne,makeZerosTypedArray:()=>te,nearestDivisor:()=>Y,nearestLargerEven:()=>g,now:()=>zr,parseAxisParam:()=>O,randUniform:()=>v,repeatedTry:()=>F,rightPad:()=>A,shuffle:()=>h,shuffleCombo:()=>f,sizeFromShape:()=>C,sizeToSquarishShape:()=>R,squeezeShape:()=>M,sum:()=>b,swap:()=>x,tanh:()=>N,toNestedArray:()=>J,toTypedArray:()=>Vr});var a={};n.r(a),n.d(a,{isBrowser:()=>Ta,isMobile:()=>$a,mockIsMobile:()=>Ca});var s={};n.r(s),n.d(s,{assertAndGetBroadcastShape:()=>Ts,getBroadcastDims:()=>Cs,getReductionAxes:()=>$s});var o={};n.r(o),n.d(o,{assertParamsValid:()=>Es,computeFlatOffset:()=>Ls,computeOutShape:()=>Rs,getNormalizedAxes:()=>_s,isSliceContinous:()=>Bs,maskToAxes:()=>Ns,parseSliceParams:()=>Vs,sliceInfo:()=>zs,startForAxis:()=>Ps,startIndicesWithElidedDims:()=>Os,stopForAxis:()=>Ws,stopIndicesWithElidedDims:()=>Ms,stridesForAxis:()=>Us,stridesWithElidedDims:()=>Ds});var i={};n.r(i),n.d(i,{collectGatherOpShapeInfo:()=>Ku,computeOutShape:()=>qu,segOpComputeOptimalWindowSize:()=>Xu});var u={};n.r(u),n.d(u,{ERF_A1:()=>hu,ERF_A2:()=>fu,ERF_A3:()=>mu,ERF_A4:()=>gu,ERF_A5:()=>xu,ERF_P:()=>pu,PARALLELIZE_THRESHOLD:()=>Qi,SELU_SCALE:()=>du,SELU_SCALEALPHA:()=>cu,applyActivation:()=>Yi,assertAndGetBroadcastShape:()=>Ts,assertAxesAreInnerMostDims:()=>jo,assertParamsConsistent:()=>$i,assignToTypedArray:()=>wu,axesAreInnerMostDims:()=>Vo,calculateShapes:()=>lu,checkEinsumDimSizes:()=>Ru,checkPadOnDimRoundingMode:()=>Li,combineLocations:()=>zo,complexWithEvenIndex:()=>yu,complexWithOddIndex:()=>ku,computeConv2DInfo:()=>Di,computeConv3DInfo:()=>Ai,computeDefaultPad:()=>Fi,computeDilation2DInfo:()=>Ei,computeOptimalWindowSize:()=>Ji,computeOutAndReduceShapes:()=>Go,computeOutShape:()=>Ti,computePool2DInfo:()=>Ni,computePool3DInfo:()=>Ri,convertConv2DDataFormat:()=>Bi,decodeEinsumEquation:()=>Eu,eitherStridesOrDilationsAreOne:()=>Wi,expandShapeToKeepDim:()=>Ho,exponent:()=>Cu,exponents:()=>Su,fromStringArrayToUint8:()=>Zu,fromUint8ToStringArray:()=>Yu,getAxesPermutation:()=>Xo,getBroadcastDims:()=>Cs,getComplexWithIndex:()=>Iu,getEinsumComputePath:()=>Du,getEinsumPermutation:()=>Nu,getFusedBiasGradient:()=>Ki,getFusedDyActivation:()=>qi,getImageCenter:()=>eu,getInnerMostAxes:()=>Ko,getPermuted:()=>nu,getReductionAxes:()=>$s,getReshaped:()=>tu,getReshapedPermuted:()=>ru,getSliceBeginCoords:()=>au,getSliceSize:()=>su,getSparseFillEmptyRowsIndicesDenseShapeMismatch:()=>Ou,getSparseFillEmptyRowsNegativeIndexErrorMessage:()=>Mu,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:()=>Uu,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:()=>Bu,getSparseReshapeInputOutputMismatchErrorMessage:()=>Vu,getSparseReshapeInputOutputMultipleErrorMessage:()=>Lu,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:()=>Pu,getSparseReshapeNegativeOutputDimErrorMessage:()=>Wu,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:()=>ju,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:()=>zu,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:()=>Gu,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:()=>Hu,getUndoAxesPermutation:()=>qo,isIdentityPermutation:()=>Au,log:()=>vr,mergeRealAndImagArrays:()=>bu,prepareAndValidate:()=>ou,prepareSplitSize:()=>_u,segment_util:()=>i,shouldFuse:()=>Zi,slice_util:()=>o,splitRealAndImagArrays:()=>vu,tupleValuesAreOne:()=>Pi,upcastType:()=>ha,validateInput:()=>uu,validateUpdateShape:()=>iu,warn:()=>br});var l={};n.r(l),n.d(l,{GP:()=>bo,qP:()=>vo,pA:()=>yo,ZA:()=>Qu});class c{constructor(e,t){this.backend=e,this.dataMover=t,this.data=new WeakMap,this.dataIdsCount=0}get(e){return this.data.has(e)||this.dataMover.moveData(this.backend,e),this.data.get(e)}set(e,t){this.dataIdsCount++,this.data.set(e,t)}has(e){return this.data.has(e)}delete(e){return this.dataIdsCount--,this.data.delete(e)}numDataIds(){return this.dataIdsCount}}class d{refCount(e){return p("refCount")}incRef(e){return p("incRef")}timerAvailable(){return!0}time(e){return p("time")}read(e){return p("read")}readSync(e){return p("readSync")}readToGPU(e,t){return p("readToGPU")}numDataIds(){return p("numDataIds")}disposeData(e,t){return p("disposeData")}write(e,t,n){return p("write")}move(e,t,n,r,a){return p("move")}memory(){return p("memory")}floatPrecision(){return p("floatPrecision")}epsilon(){return 32===this.floatPrecision()?1e-7:1e-4}dispose(){return p("dispose")}}function p(e){throw new Error(`'${e}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function h(e){let t=e.length,n=0;for(;t>0;)n=Math.random()*t|0,t--,x(e,t,n)}function f(e,t){if(e.length!==t.length)throw new Error(`Array sizes must match to be shuffled together First array length was ${e.length}Second array length was ${t.length}`);let n=e.length,r=0;for(;n>0;)r=Math.random()*n|0,n--,x(e,n,r),x(t,n,r)}function m(e,t,n){return Math.max(e,Math.min(t,n))}function g(e){return e%2==0?e:e+1}function x(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function b(e){let t=0;for(let n=0;n<e.length;n++)t+=e[n];return t}function v(e,t){const n=Math.random();return t*n+(1-n)*e}function y(e,t){let n=0;for(let r=0;r<e.length;r++){const a=Number(e[r])-Number(t[r]);n+=a*a}return n}function k(e,t){if(!e)throw new Error("string"==typeof t?t:t())}function I(e,t,n=""){k(T(e,t),(()=>n+` Shapes ${e} and ${t} must match`))}function w(e){k(null!=e,(()=>"The input to the tensor constructor must be a non-null value."))}function S(e,t=[],n=!1){if(null==t&&(t=[]),Array.isArray(e)||V(e)&&!n)for(let r=0;r<e.length;++r)S(e[r],t,n);else t.push(e);return t}function C(e){if(0===e.length)return 1;let t=e[0];for(let n=1;n<e.length;n++)t*=e[n];return t}function $(e){return 0===e.length}function T(e,t){if(e===t)return!0;if(null==e||null==t)return!1;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function E(e){return e%1==0}function N(e){if(null!=Math.tanh)return Math.tanh(e);if(e===1/0)return 1;if(e===-1/0)return-1;{const t=Math.exp(2*e);return(t-1)/(t+1)}}function R(e){const t=Math.ceil(Math.sqrt(e));return[t,Math.ceil(e/t)]}function D(e){const t=new Uint32Array(e);for(let n=0;n<e;++n)t[n]=n;return h(t),t}function A(e,t){return t<=e.length?e:e+" ".repeat(t-e.length)}function F(e,t=(e=>0),n){return new Promise(((r,a)=>{let s=0;const o=()=>{if(e())return void r();s++;const i=t(s);null!=n&&s>=n?a():setTimeout(o,i)};o()}))}function _(e,t){let n=1,r=-1;for(let t=0;t<e.length;++t)if(e[t]>=0)n*=e[t];else if(-1===e[t]){if(-1!==r)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${r} and dim ${t}`);r=t}else if(e[t]<0)throw Error(`Shapes can not be < 0. Found ${e[t]} at dim ${t}`);if(-1===r){if(t>0&&t!==n)throw Error(`Size(${t}) must match the product of shape ${e}`);return e}if(0===n)throw Error(`Cannot infer the missing size in [${e}] when there are 0 elements`);if(t%n!=0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${n}`);const a=e.slice();return a[r]=t/n,a}function O(e,t){const n=t.length;return k((e=null==e?t.map(((e,t)=>t)):[].concat(e)).every((e=>e>=-n&&e<n)),(()=>`All values in axis param must be in range [-${n}, ${n}) but got axis ${e}`)),k(e.every((e=>E(e))),(()=>`All values in axis param must be integers but got axis ${e}`)),e.map((e=>e<0?n+e:e))}function M(e,t){const n=[],r=[],a=null!=t&&Array.isArray(t)&&0===t.length,s=null==t||a?null:O(t,e).sort();let o=0;for(let t=0;t<e.length;++t){if(null!=s){if(s[o]===t&&1!==e[t])throw new Error(`Can't squeeze axis ${t} since its dim '${e[t]}' is not 1`);(null==s[o]||s[o]>t)&&1===e[t]&&(n.push(e[t]),r.push(t)),s[o]<=t&&o++}1!==e[t]&&(n.push(e[t]),r.push(t))}return{newShape:n,keptDims:r}}function U(e,t){let n=null;if(null==e||"float32"===e)n=new Float32Array(t);else if("int32"===e)n=new Int32Array(t);else{if("bool"!==e)throw new Error(`Unknown data type ${e}`);n=new Uint8Array(t)}return n}function P(e,t){let n=null;if(null==e||"float32"===e)n=new Float32Array(t);else if("int32"===e)n=new Int32Array(t);else if("bool"===e)n=new Uint8Array(t);else{if("string"!==e)throw new Error(`Unknown data type ${e}`);n=new Array(t)}return n}function W(e,t){for(let n=0;n<e.length;n++){const r=e[n];if(isNaN(r)||!isFinite(r))throw Error(`A tensor of type ${t} being uploaded contains ${r}.`)}}function B(e){return"bool"===e||"complex64"===e||"float32"===e||"int32"===e||"string"===e}function L(e,t){return"complex64"!==t&&(("float32"!==t||"complex64"===e)&&(("int32"!==t||"float32"===e||"complex64"===e)&&("bool"!==t||"bool"!==e)))}function V(e){return e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray}function z(e){if("float32"===e||"int32"===e)return 4;if("complex64"===e)return 8;if("bool"===e)return 1;throw new Error(`Unknown dtype ${e}`)}function G(e){if(null==e)return 0;let t=0;return e.forEach((e=>t+=e.length)),t}function H(e){return"string"==typeof e||e instanceof String}function j(e){return"boolean"==typeof e}function X(e){return"number"==typeof e}function q(e){return Array.isArray(e)?q(e[0]):e instanceof Float32Array?"float32":e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray?"int32":X(e)?"float32":H(e)?"string":j(e)?"bool":"float32"}function K(e){return!!(e&&e.constructor&&e.call&&e.apply)}function Y(e,t){for(let n=t;n<e;++n)if(e%n==0)return n;return e}function Z(e){const t=e.length;if(t<2)return[];const n=new Array(t-1);n[t-2]=e[t-1];for(let r=t-3;r>=0;--r)n[r]=n[r+1]*e[r+1];return n}function Q(e,t,n,r=!1){const a=new Array;if(1===t.length){const s=t[0]*(r?2:1);for(let t=0;t<s;t++)a[t]=n[e+t]}else{const s=t[0],o=t.slice(1),i=o.reduce(((e,t)=>e*t))*(r?2:1);for(let t=0;t<s;t++)a[t]=Q(e+t*i,o,n,r)}return a}function J(e,t,n=!1){if(0===e.length)return t[0];const r=e.reduce(((e,t)=>e*t))*(n?2:1);if(0===r)return[];if(r!==t.length)throw new Error(`[${e}] does not match the input size ${t.length}${n?" for a complex tensor":""}.`);return Q(0,e,t,n)}function ee(e,t){const n=te(e,t);for(let e=0;e<n.length;e++)n[e]=1;return n}function te(e,t){if(null==t||"float32"===t||"complex64"===t)return new Float32Array(e);if("int32"===t)return new Int32Array(e);if("bool"===t)return new Uint8Array(e);throw new Error(`Unknown data type ${t}`)}function ne(e,t){const n=e.reduce(((e,t)=>e*t),1);if(null==t||"float32"===t)return J(e,new Float32Array(n));if("int32"===t)return J(e,new Int32Array(n));if("bool"===t)return J(e,new Uint8Array(n));throw new Error(`Unknown data type ${t}`)}function re(e){e.forEach((t=>{k(Number.isInteger(t)&&t>=0,(()=>`Tensor must have a shape comprised of positive integers but got shape [${e}].`))}))}function ae(e,t,n){if(0===t)return 0;if(1===t)return e[0];let r=e[e.length-1];for(let t=0;t<e.length-1;++t)r+=n[t]*e[t];return r}function se(e,t,n){if(0===t)return[];if(1===t)return[e];const r=new Array(t);for(let t=0;t<r.length-1;++t)r[t]=Math.floor(e/n[t]),e-=r[t]*n[t];return r[r.length-1]=e,r}function oe(e){return e&&e.then&&"function"==typeof e.then}
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
const ie="tfjsflags";class ue{constructor(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=le,this.populateURLFlags()}setPlatform(e,t){null!=this.platform&&(ce().getBool("IS_TEST")||ce().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${e}.`)),this.platformName=e,this.platform=t}registerFlag(e,t,n){if(this.flagRegistry[e]={evaluationFn:t,setHook:n},null!=this.urlFlags[e]){const t=this.urlFlags[e];ce().getBool("IS_TEST")||ce().getBool("PROD")||console.warn(`Setting feature override from URL ${e}: ${t}.`),this.set(e,t)}}async getAsync(e){return e in this.flags||(this.flags[e]=await this.evaluateFlag(e)),this.flags[e]}get(e){if(e in this.flags)return this.flags[e];const t=this.evaluateFlag(e);if(oe(t))throw new Error(`Flag ${e} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[e]=t,this.flags[e]}getNumber(e){return this.get(e)}getBool(e){return this.get(e)}getFlags(){return this.flags}get features(){return this.flags}set(e,t){if(null==this.flagRegistry[e])throw new Error(`Cannot set flag ${e} as it has not been registered.`);this.flags[e]=t,null!=this.flagRegistry[e].setHook&&this.flagRegistry[e].setHook(t)}evaluateFlag(e){if(null==this.flagRegistry[e])throw new Error(`Cannot evaluate flag '${e}': no evaluation function found.`);return this.flagRegistry[e].evaluationFn()}setFlags(e){this.flags=Object.assign({},e)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(void 0===this.global||void 0===this.global.location||void 0===this.global.location.search)return;const e=this.getQueryParams(this.global.location.search);if(ie in e){e.tfjsflags.split(",").forEach((e=>{const[t,n]=e.split(":");this.urlFlags[t]=function(e,t){if("true"===(t=t.toLowerCase())||"false"===t)return"true"===t;if(""+ +t===t)return+t;throw new Error(`Could not parse value flag value ${t} for flag ${e}.`)}(t,n)}))}}}function le(e){const t={};return e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,((e,...n)=>(function(e,t,n){e[decodeURIComponent(t)]=decodeURIComponent(n||"")}(t,n[0],n[1]),n.join("=")))),t}function ce(){return pe}let de,pe=null;function he(){if(null==de){let e;if("undefined"!=typeof window)e=window;else if(void 0!==n.g)e=n.g;else if("undefined"!=typeof process)e=process;else{if("undefined"==typeof self)throw new Error("Could not find a global object");e=self}de=e}return de}function fe(e,t){const n=function(){const e=he();return null==e._tfGlobals&&(e._tfGlobals=new Map),e._tfGlobals}();if(n.has(e))return n.get(e);{const r=t();return n.set(e,r),n.get(e)}}const me="Abs",ge="Acos",xe="Acosh",be="Add",ve="AddN",ye="All",ke="Any",Ie="ArgMax",we="ArgMin",Se="Asin",Ce="Asinh",$e="Atan",Te="Atanh",Ee="Atan2",Ne="AvgPool",Re="AvgPoolGrad",De="AvgPool3D",Ae="AvgPool3DGrad",Fe="BatchMatMul",_e="BatchToSpaceND",Oe="Bincount",Me="BroadcastArgs",Ue="Cast",Pe="Ceil",We="ClipByValue",Be="Complex",Le="ComplexAbs",Ve="Concat",ze="Conv2D",Ge="Conv2DBackpropFilter",He="Conv2DBackpropInput",je="Conv3D",Xe="Conv3DBackpropFilterV2",qe="Conv3DBackpropInputV2",Ke="Cos",Ye="Cosh",Ze="Cumsum",Qe="CropAndResize",Je="DenseBincount",et="DepthToSpace",tt="DepthwiseConv2dNative",nt="DepthwiseConv2dNativeBackpropFilter",rt="DepthwiseConv2dNativeBackpropInput",at="Diag",st="Dilation2D",ot="Dilation2DBackpropInput",it="Dilation2DBackpropFilter",ut="RealDiv",lt="Einsum",ct="Elu",dt="EluGrad",pt="Erf",ht="Equal",ft="Exp",mt="ExpandDims",gt="Expm1",xt="FFT",bt="Fill",vt="FlipLeftRight",yt="Floor",kt="FloorDiv",It="FusedBatchNorm",wt="GatherV2",St="GatherNd",Ct="Greater",$t="GreaterEqual",Tt="Identity",Et="IFFT",Nt="Imag",Rt="IsFinite",Dt="IsInf",At="IsNan",Ft="LeakyRelu",_t="Less",Ot="LessEqual",Mt="LinSpace",Ut="Log",Pt="Log1p",Wt="LogicalAnd",Bt="LogicalNot",Lt="LogicalOr",Vt="LRN",zt="LRNGrad",Gt="Max",Ht="Maximum",jt="MaxPool",Xt="MaxPoolGrad",qt="MaxPool3D",Kt="MaxPool3DGrad",Yt="MaxPoolWithArgmax",Zt="Mean",Qt="Min",Jt="Minimum",en="MirrorPad",tn="Mod",nn="Multinomial",rn="Multiply",an="Neg",sn="NotEqual",on="NonMaxSuppressionV3",un="NonMaxSuppressionV4",ln="NonMaxSuppressionV5",cn="OnesLike",dn="OneHot",pn="Pack",hn="PadV2",fn="Pow",mn="Prelu",gn="Prod",xn="Range",bn="Real",vn="Reciprocal",yn="Relu",kn="Reshape",In="ResizeNearestNeighbor",wn="ResizeNearestNeighborGrad",Sn="ResizeBilinear",Cn="ResizeBilinearGrad",$n="Relu6",Tn="Reverse",En="Round",Nn="Rsqrt",Rn="ScatterNd",Dn="Select",An="Selu",Fn="Slice",_n="Sin",On="Sinh",Mn="Sign",Un="Sigmoid",Pn="Softplus",Wn="Sqrt",Bn="Sum",Ln="SpaceToBatchND",Vn="SplitV",zn="Softmax",Gn="SparseFillEmptyRows",Hn="SparseReshape",jn="SparseSegmentMean",Xn="SparseSegmentSum",qn="SparseToDense",Kn="SquaredDifference",Yn="Square",Zn="StridedSlice",Qn="StringNGrams",Jn="StringSplit",er="StringToHashBucketFast",tr="Sub",nr="Tan",rr="Tanh",ar="Tile",sr="TopK",or="Transform",ir="Transpose",ur="Unique",lr="Unpack",cr="UnsortedSegmentSum",dr="ZerosLike",pr="Step",hr="FromPixels",fr="RotateWithOffset",mr="_FusedMatMul",gr="FusedConv2D",xr="FusedDepthwiseConv2D";
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
function br(...e){ce().getBool("IS_TEST")||ce().getBool("PROD")||console.warn(...e)}function vr(...e){ce().getBool("IS_TEST")||ce().getBool("PROD")||console.log(...e)}
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
const yr=fe("kernelRegistry",(()=>new Map)),kr=fe("gradRegistry",(()=>new Map));function Ir(e,t){const n=$r(e,t);return yr.get(n)}function wr(e){return kr.get(e)}function Sr(e){const t=yr.entries(),n=[];for(;;){const{done:r,value:a}=t.next();if(r)break;const[s,o]=a,[i]=s.split("_");i===e&&n.push(o)}return n}function Cr(e){const{kernelName:t,backendName:n}=e,r=$r(t,n);yr.has(r)&&br(`The kernel '${t}' for backend '${n}' is already registered`),yr.set(r,e)}function $r(e,t){return`${t}_${e}`}var Tr=n(3720);
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
const Er=n.n(Tr)()||Tr;function Nr(e){return Er.fromString(e,!0,16)}const Rr=Nr("c3a5c85c97cb3127"),Dr=Nr("b492b66fbe98f273"),Ar=Nr("9ae16a3b2f90404f");function Fr(e){return e.xor(e.shru(47))}function _r(e,t,n){const r=e.slice(t,t+n);return Er.fromBytes(Array.from(r),!0,!0)}function Or(e,t){return _r(e,t,8)}function Mr(e,t){return _r(e,t,4)}function Ur(e,t){return 0===t?e:e.shru(t).or(e.shl(64-t))}function Pr(e,t,n=Nr("9ddfea08eb382d69")){let r=e.xor(t).mul(n);r=r.xor(r.shru(47));let a=t.xor(r).mul(n);return a=a.xor(a.shru(47)),a=a.mul(n),a}function Wr(e,t,n,r){return function(e,t,n,r,a,s){a=a.add(e),s=Ur(s.add(a).add(r),21);const o=a;return a=(a=a.add(t)).add(n),s=s.add(Ur(a,44)),[a.add(r),s.add(o)]}(Or(e,t),Or(e,t+8),Or(e,t+16),Or(e,t+24),n,r)}function Br(e,t=e.length){const n=Er.fromNumber(81,!0);if(t<=32)return t<=16?function(e,t=e.length){if(t>=8){const n=Ar.add(2*t),r=Or(e,0).add(Ar),a=Or(e,t-8);return Pr(Ur(a,37).mul(n).add(r),Ur(r,25).add(a).mul(n),n)}if(t>=4){const n=Ar.add(2*t);return Pr(Mr(e,0).shl(3).add(t),Mr(e,t-4),n)}if(t>0){const n=e[0]+(e[t>>1]<<8),r=t+(e[t-1]<<2);return Fr(Ar.mul(n).xor(Rr.mul(r))).mul(Ar)}return Ar}(e,t):function(e,t=e.length){const n=Ar.add(2*t),r=Or(e,0).mul(Dr),a=Or(e,8),s=Or(e,t-8).mul(n),o=Or(e,t-16).mul(Ar);return Pr(Ur(r.add(a),43).add(Ur(s,30)).add(o),r.add(Ur(a.add(Ar),18)).add(s),n)}(e,t);if(t<=64)return function(e,t=e.length){const n=Ar.add(2*t),r=Or(e,0).mul(Ar),a=Or(e,8),s=Or(e,t-8).mul(n),o=Or(e,t-16).mul(Ar),i=Ur(r.add(a),43).add(Ur(s,30)).add(o),u=Pr(i,r.add(Ur(a.add(Ar),18)).add(s),n),l=Or(e,16).mul(n),c=Or(e,24),d=i.add(Or(e,t-32)).mul(n),p=u.add(Or(e,t-24)).mul(n);return Pr(Ur(l.add(c),43).add(Ur(d,30)).add(p),l.add(Ur(c.add(r),18)).add(d),n)}(e,t);let r=n,a=n.mul(Dr).add(113),s=Fr(a.mul(Ar).add(113)).mul(Ar),o=[Er.UZERO,Er.UZERO],i=[Er.UZERO,Er.UZERO];r=r.mul(Ar).add(Or(e,0));let u=0;const l=64*(t-1>>6),c=l+(t-1&63)-63;do{r=Ur(r.add(a).add(o[0]).add(Or(e,u+8)),37).mul(Dr),a=Ur(a.add(o[1]).add(Or(e,u+48)),42).mul(Dr),r=r.xor(i[1]),a=a.add(o[0]).add(Or(e,u+40)),s=Ur(s.add(i[0]),33).mul(Dr),o=Wr(e,u,o[1].mul(Dr),r.add(i[0])),i=Wr(e,u+32,s.add(i[1]),a.add(Or(e,u+16))),[s,r]=[r,s],u+=64}while(u!==l);const d=Dr.add(s.and(255).shl(1));return u=c,i[0]=i[0].add(t-1&63),o[0]=o[0].add(i[0]),i[0]=i[0].add(o[0]),r=Ur(r.add(a).add(o[0]).add(Or(e,u+8)),37).mul(d),a=Ur(a.add(o[1]).add(Or(e,u+48)),42).mul(d),r=r.xor(i[1].mul(9)),a=a.add(o[0].mul(9).add(Or(e,u+40))),s=Ur(s.add(i[0]),33).mul(d),o=Wr(e,u,o[1].mul(d),r.add(i[0])),i=Wr(e,u+32,s.add(i[1]),a.add(Or(e,u+16))),[s,r]=[r,s],Pr(Pr(o[0],i[0],d).add(Fr(a).mul(Rr)).add(s),Pr(o[1],i[1],d).add(r),d)}
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
function Lr(e,t){return"string"===t?Hr(e):Vr([e],t)}function Vr(e,t){if("string"===t)throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(e)&&(e=S(e)),ce().getBool("DEBUG")&&W(e,t),function(e,t){return e instanceof Float32Array&&"float32"===t||e instanceof Int32Array&&"int32"===t||e instanceof Uint8Array&&"bool"===t}(e,t))return e;if(null==t||"float32"===t||"complex64"===t)return new Float32Array(e);if("int32"===t)return new Int32Array(e);if("bool"===t){const t=new Uint8Array(e.length);for(let n=0;n<t.length;++n)0!==Math.round(e[n])&&(t[n]=1);return t}throw new Error(`Unknown data type ${t}`)}function zr(){return ce().platform.now()}function Gr(e,t){return ce().platform.fetch(e,t)}function Hr(e,t="utf-8"){return t=t||"utf-8",ce().platform.encode(e,t)}function jr(e,t="utf-8"){return t=t||"utf-8",ce().platform.decode(e,t)}
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
class Xr{constructor(e,t){this.backendTimer=e,this.logger=t,null==t&&(this.logger=new Kr)}profileKernel(e,t,n){let r;const a=()=>{r=n()};let s;const o=zr();if(this.backendTimer.timerAvailable())s=this.backendTimer.time(a);else{a();for(const e of r)e.dataSync();s=Promise.resolve({kernelMs:zr()-o})}if(ce().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let t=0;t<r.length;t++){const n=r[t];n.data().then((t=>{qr(t,n.dtype,e)}))}return{kernelName:e,outputs:r,inputs:t,timeMs:s.then((e=>e.kernelMs)),extraInfo:s.then((e=>null!=e.getExtraProfileInfo?e.getExtraProfileInfo():""))}}logKernelProfile(e){const{kernelName:t,outputs:n,timeMs:r,inputs:a,extraInfo:s}=e;n.forEach((e=>{Promise.all([e.data(),r,s]).then((n=>{this.logger.logKernelProfile(t,e,n[0],n[1],a,n[2])}))}))}}function qr(e,t,n){if("float32"!==t)return!1;for(let t=0;t<e.length;t++){const r=e[t];if(isNaN(r)||!isFinite(r))return console.warn(`Found ${r} in the result of '${n}'`),!0}return!1}class Kr{logKernelProfile(e,t,n,r,a,s){const o="number"==typeof r?A(`${r}ms`,9):r.error,i=A(e,25),u=t.rank,l=t.size,c=A(t.shape.toString(),14);let d="";for(const e in a){const n=a[e];if(null!=n){const r=n.shape||t.shape,a=r.length;d+=`${e}: ${a}D ${a>0?r:""} `}}console.log(`%c${i}\t%c${o}\t%c${u}D ${c}\t%c${l}\t%c${d}\t%c${s}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}function Yr(e,t,n,r){const a=Z(t),s=function(e,t,n,r){const a=C(t),s=r[r.length-1],o=new Array(s).fill(0),i=t.length,u="complex64"===n?ea(e):e;if(i>1)for(let e=0;e<a/s;e++){const t=e*s;for(let e=0;e<s;e++)o[e]=Math.max(o[e],Zr(u[t+e],0,n).length)}return o}(e,t,n,a),o=t.length,i=Jr(e,t,n,a,s),u=["Tensor"];return r&&(u.push(`  dtype: ${n}`),u.push(`  rank: ${o}`),u.push(`  shape: [${t}]`),u.push("  values:")),u.push(i.map((e=>"    "+e)).join("\n")),u.join("\n")}function Zr(e,t,n){let r;return r=Array.isArray(e)?`${parseFloat(e[0].toFixed(7))} + ${parseFloat(e[1].toFixed(7))}j`:H(e)?`'${e}'`:"bool"===n?Qr(e):parseFloat(e.toFixed(7)).toString(),A(r,t)}function Qr(e){return 0===e?"false":"true"}function Jr(e,t,n,r,a,s=!0){const o="complex64"===n?2:1,i=t[0],u=t.length;if(0===u){if("complex64"===n){return[Zr(ea(e)[0],0,n)]}return"bool"===n?[Qr(e[0])]:[e[0].toString()]}if(1===u){if(i>20){const t=3*o;let r=Array.from(e.slice(0,t)),s=Array.from(e.slice((i-3)*o,i*o));return"complex64"===n&&(r=ea(r),s=ea(s)),["["+r.map(((e,t)=>Zr(e,a[t],n))).join(", ")+", ..., "+s.map(((e,t)=>Zr(e,a[i-3+t],n))).join(", ")+"]"]}return["["+("complex64"===n?ea(e):Array.from(e)).map(((e,t)=>Zr(e,a[t],n))).join(", ")+"]"]}const l=t.slice(1),c=r.slice(1),d=r[0]*o,p=[];if(i>20){for(let t=0;t<3;t++){const r=t*d,s=r+d;p.push(...Jr(e.slice(r,s),l,n,c,a,!1))}p.push("...");for(let t=i-3;t<i;t++){const r=t*d,s=r+d;p.push(...Jr(e.slice(r,s),l,n,c,a,t===i-1))}}else for(let t=0;t<i;t++){const r=t*d,s=r+d;p.push(...Jr(e.slice(r,s),l,n,c,a,t===i-1))}const h=2===u?",":"";p[0]="["+p[0]+h;for(let e=1;e<p.length-1;e++)p[e]=" "+p[e]+h;let f=",\n";for(let e=2;e<u;e++)f+="\n";return p[p.length-1]=" "+p[p.length-1]+"]"+(s?"":f),p}function ea(e){const t=[];for(let n=0;n<e.length;n+=2)t.push([e[n],e[n+1]]);return t}
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
class ta{constructor(e,t,n){if(this.dtype=t,this.shape=e.slice(),this.size=C(e),null!=n){const e=n.length;k(e===this.size,(()=>`Length of values '${e}' does not match the size inferred by the shape '${this.size}'.`))}if("complex64"===t)throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=n||P(t,this.size),this.strides=Z(e)}set(e,...t){0===t.length&&(t=[0]),k(t.length===this.rank,(()=>`The number of provided coordinates (${t.length}) must match the rank (${this.rank})`));const n=this.locToIndex(t);this.values[n]=e}get(...e){0===e.length&&(e=[0]);let t=0;for(const n of e){if(n<0||n>=this.shape[t]){const t=`Requested out of range element at ${e}.   Buffer shape=${this.shape}`;throw new Error(t)}t++}let n=e[e.length-1];for(let t=0;t<e.length-1;++t)n+=this.strides[t]*e[t];return this.values[n]}locToIndex(e){if(0===this.rank)return 0;if(1===this.rank)return e[0];let t=e[e.length-1];for(let n=0;n<e.length-1;++n)t+=this.strides[n]*e[n];return t}indexToLoc(e){if(0===this.rank)return[];if(1===this.rank)return[e];const t=new Array(this.shape.length);for(let n=0;n<t.length-1;++n)t[n]=Math.floor(e/this.strides[n]),e-=t[n]*this.strides[n];return t[t.length-1]=e,t}get rank(){return this.shape.length}toTensor(){return na().makeTensor(this.values,this.shape,this.dtype)}}let na=null,ra=null,aa=null;class sa{constructor(e,t,n,r){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=t||"float32",this.size=C(e),this.strides=Z(e),this.dataId=n,this.id=r,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const e=await this.data();return ra.buffer(this.shape,this.dtype,e)}bufferSync(){return ra.buffer(this.shape,this.dtype,this.dataSync())}async array(){const e=await this.data();return J(this.shape,e,"complex64"===this.dtype)}arraySync(){return J(this.shape,this.dataSync(),"complex64"===this.dtype)}async data(){this.throwIfDisposed();const e=na().read(this.dataId);if("string"===this.dtype){const t=await e;try{return t.map((e=>jr(e)))}catch(e){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return e}dataToGPU(e){return this.throwIfDisposed(),na().readToGPU(this.dataId,e)}dataSync(){this.throwIfDisposed();const e=na().readSync(this.dataId);if("string"===this.dtype)try{return e.map((e=>jr(e)))}catch(e){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return e}async bytes(){this.throwIfDisposed();const e=await na().read(this.dataId);return"string"===this.dtype?e:new Uint8Array(e.buffer)}dispose(){this.isDisposed||(na().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(e=!1){return ra.print(this,e)}clone(){return this.throwIfDisposed(),ra.clone(this)}toString(e=!1){return Yr(this.dataSync(),this.shape,this.dtype,e)}cast(e){return this.throwIfDisposed(),ra.cast(this,e)}variable(e=!0,t,n){return this.throwIfDisposed(),na().makeVariable(this,e,t,n)}}Object.defineProperty(sa,Symbol.hasInstance,{value:e=>!!e&&null!=e.data&&null!=e.dataSync&&null!=e.throwIfDisposed}),fe("Tensor",(()=>sa));class oa extends sa{constructor(e,t,n,r){super(e.shape,e.dtype,e.dataId,r),this.trainable=t,this.name=n}assign(e){if(e.dtype!==this.dtype)throw new Error(`dtype of the new value (${e.dtype}) and previous value (${this.dtype}) must match`);if(!T(e.shape,this.shape))throw new Error(`shape of the new value (${e.shape}) and previous value (${this.shape}) must match`);na().disposeTensor(this),this.dataId=e.dataId,na().incRef(this,null)}dispose(){na().disposeVariable(this),this.isDisposedInternal=!0}}
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
var ia,ua,la,ca,da;Object.defineProperty(oa,Symbol.hasInstance,{value:e=>e instanceof sa&&null!=e.assign&&e.assign instanceof Function}),function(e){e.R0="R0",e.R1="R1",e.R2="R2",e.R3="R3",e.R4="R4",e.R5="R5",e.R6="R6"}(ia||(ia={})),function(e){e.float32="float32",e.int32="int32",e.bool="int32",e.complex64="complex64"}(ua||(ua={})),function(e){e.float32="float32",e.int32="int32",e.bool="bool",e.complex64="complex64"}(la||(la={})),function(e){e.float32="float32",e.int32="float32",e.bool="float32",e.complex64="complex64"}(ca||(ca={})),function(e){e.float32="complex64",e.int32="complex64",e.bool="complex64",e.complex64="complex64"}(da||(da={}));const pa={float32:ca,int32:ua,bool:la,complex64:da};function ha(e,t){if("string"===e||"string"===t){if("string"===e&&"string"===t)return"string";throw new Error(`Can not upcast ${e} with ${t}`)}return pa[e][t]}function fa(e){return ha(e,"int32")}
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
function ma(e,t){if(e.dtype===t.dtype)return[e,t];const n=ha(e.dtype,t.dtype);return[e.cast(n),t.cast(n)]}function ga(e){const t=[];return xa(e,t,new Set),t}function xa(e,t,n){if(null==e)return;if(e instanceof sa)return void t.push(e);if(r=e,!Array.isArray(r)&&"object"!=typeof r)return;var r;const a=e;for(const e in a){const r=a[e];n.has(r)||(n.add(r),xa(r,t,n))}}
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
function ba(e){return null!=e.kernelName}class va{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map((e=>e.name))))}}}dispose(){for(const e in this.registeredVariables)this.registeredVariables[e].dispose()}}class ya{constructor(e){this.ENV=e,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new va}async ready(){if(null!=this.pendingBackendInit)return this.pendingBackendInit.then((()=>{}));if(null!=this.backendInstance)return;const e=this.getSortedBackends();for(let t=0;t<e.length;t++){const n=e[t];if(await this.initializeBackend(n).success)return void await this.setBackend(n)}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(null!=this.pendingBackendInit)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(null==this.backendInstance){const{name:e,asyncInit:t}=this.initializeBackendsAndReturnBest();if(t)throw new Error(`The highest priority backend '${e}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(e)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(e){if(!(e in this.registry)){if(!(e in this.registryFactory))return null;{const{asyncInit:t}=this.initializeBackend(e);if(t)return null}}return this.registry[e]}findBackendFactory(e){return e in this.registryFactory?this.registryFactory[e].factory:null}registerBackend(e,t,n=1){return e in this.registryFactory?(br(`${e} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[e]={factory:t,priority:n},!0)}async setBackend(e){if(null==this.registryFactory[e])throw new Error(`Backend name '${e}' not found in registry`);if(this.backendName=e,null==this.registry[e]){this.backendInstance=null;const{success:t,asyncInit:n}=this.initializeBackend(e);if(!(n?await t:t))return!1}return this.backendInstance=this.registry[e],this.setupRegisteredKernels(),this.profiler=new Xr(this.backendInstance),!0}setupRegisteredKernels(){Sr(this.backendName).forEach((e=>{null!=e.setupFunc&&e.setupFunc(this.backendInstance)}))}disposeRegisteredKernels(e){Sr(e).forEach((t=>{null!=t.disposeFunc&&t.disposeFunc(this.registry[e])}))}initializeBackend(e){const t=this.registryFactory[e];if(null==t)throw new Error(`Cannot initialize backend ${e}, no registration found.`);try{const n=t.factory();if(!n||n instanceof d||"function"!=typeof n.then)return this.registry[e]=n,{success:!0,asyncInit:!1};{const t=++this.pendingBackendInitId,r=n.then((n=>!(t<this.pendingBackendInitId)&&(this.registry[e]=n,this.pendingBackendInit=null,!0))).catch((n=>(t<this.pendingBackendInitId||(this.pendingBackendInit=null,br(`Initialization of backend ${e} failed`),br(n.stack||n.message)),!1)));return this.pendingBackendInit=r,{success:r,asyncInit:!0}}}catch(t){return br(`Initialization of backend ${e} failed`),br(t.stack||t.message),{success:!1,asyncInit:!1}}}removeBackend(e){if(!(e in this.registryFactory))throw new Error(`${e} backend not found in registry`);this.backendName===e&&null!=this.pendingBackendInit&&this.pendingBackendInitId++,e in this.registry&&(this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e]),delete this.registryFactory[e],this.backendName===e&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(0===Object.keys(this.registryFactory).length)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort(((e,t)=>this.registryFactory[t].priority-this.registryFactory[e].priority))}initializeBackendsAndReturnBest(){const e=this.getSortedBackends();for(let t=0;t<e.length;t++){const n=e[t],{success:r,asyncInit:a}=this.initializeBackend(n);if(a||r)return{name:n,asyncInit:a}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(e,t){const n=this.state.tensorInfo.get(t),r=n.backend,a=this.readSync(t),s=r.refCount(t);r.disposeData(t,!0),n.backend=e,e.move(t,a,n.shape,n.dtype,s),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(e,t){let n,r=null;if(null==t){if("function"!=typeof e)throw new Error("Please provide a function to tidy()");t=e}else{if("string"!=typeof e&&!(e instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if("function"!=typeof t)throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");r=e}return this.scopedRun((()=>this.startScope(r)),(()=>this.endScope(n)),(()=>(n=t(),n instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),n)))}scopedRun(e,t,n){e();try{const e=n();return t(),e}catch(e){throw t(),e}}nextTensorId(){return ya.nextTensorId++}nextVariableId(){return ya.nextVariableId++}clone(e){const t=Ia.runKernel(Tt,{x:e}),n={x:e};return this.addTapeNode(this.state.activeScope.name,n,[t],(e=>({x:()=>{const t={x:e},n={dtype:"float32"};return Ia.runKernel(Ue,t,n)}})),[],{}),t}runKernel(e,t,n){null==this.backendName&&this.backend;if(!(null!=Ir(e,this.backendName)))throw new Error(`Kernel '${e}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:e,inputs:t,attrs:n})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(e,t,n){const r=this.backend.numDataIds();let a=0;n.forEach((e=>{a+="complex64"===e.dtype?3:1}));const s=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],o=r-t-a-s;if(o>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${o} data ids) after running '${e}'`)}runKernelFunc(e){let t,n=[];const r=this.isTapeOn(),a=this.state.numBytes,s=this.state.numTensors;let o,i;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0),null==this.backendName&&this.backend;const u=ba(e)?e.kernelName:null!=this.state.activeScope?this.state.activeScope.name:"";if(ba(e)){const{kernelName:t,inputs:a,attrs:s}=e;null==this.backendName&&this.backend;const u=Ir(t,this.backendName);k(null!=u,(()=>`Cannot find registered kernel '${t}' for backend '${this.backendName}'`)),o=()=>{const e=this.backend.numDataIds();i=u.kernelFunc({inputs:a,attrs:s,backend:this.backend});const o=Array.isArray(i)?i:[i];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(t,e,o);const l=o.map((e=>{if(null!=e.rank)return e;const{dataId:t,shape:n,dtype:r}=e;return this.makeTensorFromDataId(t,n,r)}));if(r){const e=this.getTensorsForGradient(t,a,l);n=this.saveTensorsForBackwardMode(e)}return l}}else{const{forwardFunc:t}=e,a=e=>{r&&(n=e.map((e=>this.keep(this.clone(e)))))};o=()=>{const e=this.backend.numDataIds();i=this.tidy((()=>t(this.backend,a)));const n=Array.isArray(i)?i:[i];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(u,e,n),n}}const{inputs:l,attrs:c}=e,d=ba(e)?null:e.backwardsFunc;let p;return this.scopedRun((()=>this.state.kernelDepth++),(()=>this.state.kernelDepth--),(()=>{this.ENV.getBool("DEBUG")||this.state.profiling?(p=this.profiler.profileKernel(u,l,(()=>o())),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(p),t=p.outputs):t=o()})),r&&this.addTapeNode(u,l,t,d,n,c),this.state.profiling&&this.state.activeProfile.kernels.push({name:u,bytesAdded:this.state.numBytes-a,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-s,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(l).map((e=>null!=l[e]?l[e].shape:null)),outputShapes:t.map((e=>e.shape)),kernelTimeMs:p.timeMs,extraInfo:p.extraInfo}),Array.isArray(i)?t:t[0]}saveTensorsForBackwardMode(e){return e.map((e=>this.keep(this.clone(e))))}getTensorsForGradient(e,t,n){const r=wr(e);if(null!=r){const e=r.inputsToSave||[],a=r.outputsToSave||[];let s;r.saveAllInputs?(k(Array.isArray(t),(()=>"saveAllInputs is true, expected inputs to be an array.")),s=Object.keys(t).map((e=>t[e]))):s=e.map((e=>t[e]));const o=n.filter(((e,t)=>a[t]));return s.concat(o)}return[]}makeTensor(e,t,n,r){if(null==e)throw new Error("Values passed to engine.makeTensor() are null");n=n||"float32",r=r||this.backend;let a=e;"string"===n&&H(e[0])&&(a=e.map((e=>Hr(e))));const s=r.write(a,t,n),o=new sa(t,n,s,this.nextTensorId());if(this.trackTensor(o,r),"string"===n){const e=this.state.tensorInfo.get(s),t=G(a);this.state.numBytes+=t-e.bytes,e.bytes=t}return o}makeTensorFromDataId(e,t,n,r){const a=new sa(t,n=n||"float32",e,this.nextTensorId());return this.trackTensor(a,r),a}makeVariable(e,t=!0,n,r){n=n||this.nextVariableId().toString(),null!=r&&r!==e.dtype&&(e=e.cast(r));const a=new oa(e,t,n,this.nextTensorId());if(null!=this.state.registeredVariables[a.name])throw new Error(`Variable with name ${a.name} was already registered`);return this.state.registeredVariables[a.name]=a,this.incRef(a,this.backend),a}trackTensor(e,t){this.state.numTensors++,"string"===e.dtype&&this.state.numStringTensors++;let n=0;"complex64"!==e.dtype&&"string"!==e.dtype&&(n=e.size*z(e.dtype)),this.state.numBytes+=n,this.state.tensorInfo.has(e.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(e.dataId,{backend:t||this.backend,dtype:e.dtype,shape:e.shape,bytes:n})),e instanceof oa||this.track(e)}incRef(e,t){this.trackTensor(e,t),this.backend.incRef(e.dataId)}removeDataId(e,t){this.state.tensorInfo.has(e)&&this.state.tensorInfo.get(e).backend===t&&(this.state.tensorInfo.delete(e),this.state.numDataBuffers--)}disposeTensor(e){if(!this.state.tensorInfo.has(e.dataId))return;const t=this.state.tensorInfo.get(e.dataId);if(this.state.numTensors--,"string"===e.dtype&&(this.state.numStringTensors--,this.state.numBytes-=t.bytes),"complex64"!==e.dtype&&"string"!==e.dtype){const t=e.size*z(e.dtype);this.state.numBytes-=t}t.backend.disposeData(e.dataId)&&this.removeDataId(e.dataId,t.backend)}disposeVariables(){for(const e in this.state.registeredVariables){const t=this.state.registeredVariables[e];this.disposeVariable(t)}}disposeVariable(e){this.disposeTensor(e),null!=this.state.registeredVariables[e.name]&&delete this.state.registeredVariables[e.name]}memory(){const e=this.backend.memory();return e.numTensors=this.state.numTensors,e.numDataBuffers=this.state.numDataBuffers,e.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(e.unreliable=!0,null==e.reasons&&(e.reasons=[]),e.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),e}async profile(e){this.state.profiling=!0;const t=this.state.numBytes,n=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await e(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map((e=>e.totalBytesSnapshot))),this.state.activeProfile.newBytes=this.state.numBytes-t,this.state.activeProfile.newTensors=this.state.numTensors-n;for(const e of this.state.activeProfile.kernels)e.kernelTimeMs=await e.kernelTimeMs,e.extraInfo=await e.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&0===this.state.kernelDepth}addTapeNode(e,t,n,r,a,s){const o={id:this.state.nextTapeNodeId++,kernelName:e,inputs:t,outputs:n,saved:a},i=wr(e);null!=i&&(r=i.gradFunc),null!=r&&(o.gradient=e=>(e=e.map(((e,t)=>{if(null==e){const e=n[t],r=te(e.size,e.dtype);return this.makeTensor(r,e.shape,e.dtype)}return e})),r(e.length>1?e:e[0],a,s))),this.state.activeTape.push(o)}keep(e){return e.kept=!0,e}startTape(){0===this.state.gradientDepth&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(e){const t={track:[],name:"unnamed scope",id:this.state.nextScopeId++};e&&(t.name=e),this.state.scopeStack.push(t),this.state.activeScope=t}endScope(e){const t=ga(e),n=new Set(t.map((e=>e.id)));for(let e=0;e<this.state.activeScope.track.length;e++){const t=this.state.activeScope.track[e];t.kept||n.has(t.id)||t.dispose()}const r=this.state.scopeStack.pop();this.state.activeScope=0===this.state.scopeStack.length?null:this.state.scopeStack[this.state.scopeStack.length-1],t.forEach((e=>{e.kept||e.scopeId!==r.id||this.track(e)}))}gradients(e,t,n,r=!1){if(k(t.length>0,(()=>"gradients() received an empty list of xs.")),null!=n&&"float32"!==n.dtype)throw new Error(`dy must have 'float32' dtype, but has '${n.dtype}'`);const a=this.scopedRun((()=>this.startTape()),(()=>this.endTape()),(()=>this.tidy("forward",e)));k(a instanceof sa,(()=>"The result y returned by f() must be a tensor."));const s=
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
function(e,t,n){const r={},a={};for(let e=0;e<t.length;e++)r[t[e].id]=!0;for(let n=0;n<e.length;n++){const s=e[n],o=s.inputs;for(const e in o){const n=o[e];let i=!1;for(let e=0;e<t.length;e++)if(r[n.id]){s.outputs.forEach((e=>r[e.id]=!0)),i=!0,a[s.id]=!0;break}if(i)break}}const s={};s[n.id]=!0;const o={};for(let t=e.length-1;t>=0;t--){const n=e[t],r=n.inputs;for(let e=0;e<n.outputs.length;e++)if(s[n.outputs[e].id]){for(const e in r)s[r[e].id]=!0,o[n.id]=!0;break}}const i=[];for(let t=0;t<e.length;t++){const n=e[t];if(a[n.id]&&o[n.id]){const e={};for(const t in n.inputs){const a=n.inputs[t];r[a.id]&&(e[t]=a)}const t=Object.assign({},n);t.inputs=e,t.outputs=n.outputs,i.push(t)}}return i}(this.state.activeTape,t,a);if(!r&&0===s.length&&t.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",(()=>{const e={};e[a.id]=null==n?function(e){const t=ee(C(e),"float32");return Ia.makeTensor(t,e,"float32")}(a.shape):n,function(e,t,n,r){for(let a=t.length-1;a>=0;a--){const s=t[a],o=[];if(s.outputs.forEach((t=>{const n=e[t.id];null!=n?o.push(n):o.push(null)})),null==s.gradient)throw new Error(`Cannot compute gradient: gradient function not found for ${s.kernelName}.`);const i=s.gradient(o);for(const t in s.inputs){if(!(t in i))throw new Error(`Cannot backprop through input ${t}. Available gradients found: ${Object.keys(i)}.`);const a=n((()=>i[t]()));if("float32"!==a.dtype)throw new Error(`Error in gradient for op ${s.kernelName}. The gradient of input ${t} must have 'float32' dtype, but has '${a.dtype}'`);const o=s.inputs[t];if(!T(a.shape,o.shape))throw new Error(`Error in gradient for op ${s.kernelName}. The gradient of input '${t}' has shape '${a.shape}', which does not match the shape of the input '${o.shape}'`);if(null==e[o.id])e[o.id]=a;else{const t=e[o.id];e[o.id]=r(t,a),t.dispose()}}}}(e,s,(e=>this.tidy(e)),wa);const r=t.map((t=>e[t.id]));return 0===this.state.gradientDepth&&(this.state.activeTape.forEach((e=>{for(const t of e.saved)t.dispose()})),this.state.activeTape=null),{value:a,grads:r}}))}customGrad(e){return k(K(e),(()=>"The f passed in customGrad(f) must be a function.")),(...t)=>{let n;k(t.every((e=>e instanceof sa)),(()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors"));const r={};t.forEach(((e,t)=>{r[t]=e}));return this.runKernelFunc({forwardFunc:(r,a)=>(n=e(...t,a),k(n.value instanceof sa,(()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor")),k(K(n.gradFunc),(()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function.")),n.value),backwardsFunc:(e,r)=>{const a=n.gradFunc(e,r),s=Array.isArray(a)?a:[a];k(s.length===t.length,(()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...).")),k(s.every((e=>e instanceof sa)),(()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."));const o={};return s.forEach(((e,t)=>{o[t]=()=>e})),o},inputs:r})}}readSync(e){return this.state.tensorInfo.get(e).backend.readSync(e)}read(e){return this.state.tensorInfo.get(e).backend.read(e)}readToGPU(e,t){return this.state.tensorInfo.get(e).backend.readToGPU(e,t)}async time(e){const t=zr(),n=await this.backend.time(e);return n.wallMs=zr()-t,n}track(e){return null!=this.state.activeScope&&(e.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(e)),e}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new va;for(const e in this.registry)this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}function ka(){const e=he();if(null==e._tfengine){const t=new ue(e);e._tfengine=new ya(t)}var t;return t=e._tfengine.ENV,pe=t,na=()=>e._tfengine,e._tfengine}ya.nextTensorId=0,ya.nextVariableId=0;const Ia=ka();function wa(e,t){const n={a:e,b:t};return Ia.runKernel(be,n)}let Sa;function Ca(e){Sa=e}function $a(e){if(void 0!==Sa)return Sa;if(e||"undefined"!=typeof navigator&&null!=navigator){if(e||(e=navigator),"ReactNative"===e.product)return!0;const t=e.userAgent||e.vendor||("undefined"!=typeof window?window.opera:"");if(!t){const t=e;return t.userAgentData&&t.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}return!1}function Ta(){return"undefined"!=typeof window&&null!=window.document||"undefined"!=typeof WorkerGlobalScope}
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
const Ea=ce();Ea.registerFlag("DEBUG",(()=>!1),(e=>{e&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")})),Ea.registerFlag("IS_BROWSER",(()=>Ta())),Ea.registerFlag("IS_NODE",(()=>"undefined"!=typeof process&&void 0!==process.versions&&void 0!==process.versions.node)),Ea.registerFlag("IS_CHROME",(()=>"undefined"!=typeof navigator&&null!=navigator&&null!=navigator.userAgent&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor))),Ea.registerFlag("PROD",(()=>!1)),Ea.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",(()=>Ea.getBool("DEBUG"))),Ea.registerFlag("DEPRECATION_WARNINGS_ENABLED",(()=>!0)),Ea.registerFlag("IS_TEST",(()=>!1)),Ea.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",(()=>!0)),Ea.registerFlag("WRAP_TO_IMAGEBITMAP",(()=>!1));const Na="undefined"!=typeof Buffer&&("undefined"==typeof Blob||"undefined"==typeof atob||"undefined"==typeof btoa);function Ra(e){return Na?Buffer.byteLength(e):new Blob([e]).size}function Da(e){if(1===e.length)return e[0];let t=0;e.forEach((e=>{t+=e.byteLength}));const n=new Uint8Array(t);let r=0;return e.forEach((e=>{n.set(new Uint8Array(e),r),r+=e.byteLength})),n.buffer}function Aa(e,t){const n={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,weightsManifest:t};return null!=e.signature&&(n.signature=e.signature),null!=e.userDefinedMetadata&&(n.userDefinedMetadata=e.userDefinedMetadata),null!=e.modelInitializer&&(n.modelInitializer=e.modelInitializer),null!=e.trainingConfig&&(n.trainingConfig=e.trainingConfig),n}function Fa(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:null==e.modelTopology?0:Ra(JSON.stringify(e.modelTopology)),weightSpecsBytes:null==e.weightSpecs?0:Ra(JSON.stringify(e.weightSpecs)),weightDataBytes:null==e.weightData?0:e.weightData.byteLength}}
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
class _a{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return null==_a.instance&&(_a.instance=new _a),_a.instance}static registerSaveRouter(e){_a.getInstance().saveRouters.push(e)}static registerLoadRouter(e){_a.getInstance().loadRouters.push(e)}static getSaveHandlers(e){return _a.getHandlers(e,"save")}static getLoadHandlers(e,t){return _a.getHandlers(e,"load",t)}static getHandlers(e,t,n){const r=[];return("load"===t?_a.getInstance().loadRouters:_a.getInstance().saveRouters).forEach((t=>{const a=t(e,n);null!==a&&r.push(a)})),r}}const Oa="tensorflowjs",Ma="models_store",Ua="model_info_store";function Pa(){if(!ce().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const e="undefined"==typeof window?self:window,t=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB||e.shimIndexedDB;if(null==t)throw new Error("The current browser does not appear to support IndexedDB.");return t}function Wa(e){const t=e.result;t.createObjectStore(Ma,{keyPath:"modelPath"}),t.createObjectStore(Ua,{keyPath:"modelPath"})}class Ba{constructor(e){if(this.indexedDB=Pa(),null==e||!e)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=e}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,e)}async load(){return this.databaseAction(this.modelPath)}databaseAction(e,t){return new Promise(((e,n)=>{const r=this.indexedDB.open(Oa,1);r.onupgradeneeded=()=>Wa(r),r.onsuccess=()=>{const a=r.result;if(null==t){const t=a.transaction(Ma,"readonly"),r=t.objectStore(Ma).get(this.modelPath);r.onsuccess=()=>{if(null==r.result)return a.close(),n(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));e(r.result.modelArtifacts)},r.onerror=e=>(a.close(),n(r.error)),t.oncomplete=()=>a.close()}else{const r=Fa(t),s=a.transaction(Ua,"readwrite");let o=s.objectStore(Ua);const i=o.put({modelPath:this.modelPath,modelArtifactsInfo:r});let u;i.onsuccess=()=>{u=a.transaction(Ma,"readwrite");const i=u.objectStore(Ma).put({modelPath:this.modelPath,modelArtifacts:t,modelArtifactsInfo:r});i.onsuccess=()=>e({modelArtifactsInfo:r}),i.onerror=e=>{o=s.objectStore(Ua);const t=o.delete(this.modelPath);t.onsuccess=()=>(a.close(),n(i.error)),t.onerror=e=>(a.close(),n(i.error))}},i.onerror=e=>(a.close(),n(i.error)),s.oncomplete=()=>{null==u?a.close():u.oncomplete=()=>a.close()}}},r.onerror=e=>n(r.error)}))}}Ba.URL_SCHEME="indexeddb://";const La=e=>{return ce().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(Ba.URL_SCHEME)?(t=e.slice(Ba.URL_SCHEME.length),new Ba(t)):null;var t};_a.registerSaveRouter(La),_a.registerLoadRouter(La);class Va{constructor(){this.indexedDB=Pa()}async listModels(){return new Promise(((e,t)=>{const n=this.indexedDB.open(Oa,1);n.onupgradeneeded=()=>Wa(n),n.onsuccess=()=>{const r=n.result,a=r.transaction(Ua,"readonly"),s=a.objectStore(Ua).getAll();s.onsuccess=()=>{const t={};for(const e of s.result)t[e.modelPath]=e.modelArtifactsInfo;e(t)},s.onerror=e=>(r.close(),t(s.error)),a.oncomplete=()=>r.close()},n.onerror=e=>t(n.error)}))}async removeModel(e){var t;return e=(t=e).startsWith(Ba.URL_SCHEME)?t.slice(Ba.URL_SCHEME.length):t,new Promise(((t,n)=>{const r=this.indexedDB.open(Oa,1);r.onupgradeneeded=()=>Wa(r),r.onsuccess=()=>{const a=r.result,s=a.transaction(Ua,"readwrite"),o=s.objectStore(Ua),i=o.get(e);let u;i.onsuccess=()=>{if(null==i.result)return a.close(),n(new Error(`Cannot find model with path '${e}' in IndexedDB.`));{const r=o.delete(e),s=()=>{u=a.transaction(Ma,"readwrite");const r=u.objectStore(Ma).delete(e);r.onsuccess=()=>t(i.result.modelArtifactsInfo),r.onerror=e=>n(i.error)};r.onsuccess=s,r.onerror=e=>(s(),a.close(),n(i.error))}},i.onerror=e=>(a.close(),n(i.error)),s.oncomplete=()=>{null==u?a.close():u.oncomplete=()=>a.close()}},r.onerror=e=>n(r.error)}))}}
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
const za="/",Ga="tensorflowjs_models",Ha="info",ja="model_topology",Xa="weight_specs",qa="weight_data",Ka="model_metadata";function Ya(e){return{info:[Ga,e,Ha].join(za),topology:[Ga,e,ja].join(za),weightSpecs:[Ga,e,Xa].join(za),weightData:[Ga,e,qa].join(za),modelMetadata:[Ga,e,Ka].join(za)}}function Za(e){for(const t of Object.values(e))window.localStorage.removeItem(t)}function Qa(e){const t=e.split(za);if(t.length<3)throw new Error(`Invalid key format: ${e}`);return t.slice(1,t.length-1).join(za)}class Ja{constructor(e){if(!ce().getBool("IS_BROWSER")||"undefined"==typeof window||void 0===window.localStorage)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,null==e||!e)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=e,this.keys=Ya(this.modelPath)}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const t=JSON.stringify(e.modelTopology),n=JSON.stringify(e.weightSpecs),r=Fa(e);try{this.LS.setItem(this.keys.info,JSON.stringify(r)),this.LS.setItem(this.keys.topology,t),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,function(e){if(Na)return Buffer.from(e).toString("base64");const t=new Uint8Array(e);let n="";for(let e=0,r=t.length;e<r;e++)n+=String.fromCharCode(t[e]);return btoa(n)}(e.weightData));const a={format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,signature:null!=e.signature?e.signature:void 0,userDefinedMetadata:null!=e.userDefinedMetadata?e.userDefinedMetadata:void 0,modelInitializer:null!=e.modelInitializer?e.modelInitializer:void 0,trainingConfig:null!=e.trainingConfig?e.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(a)),{modelArtifactsInfo:r}}catch(e){throw Za(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${r.modelTopologyBytes}, weightSpecsBytes=${r.weightSpecsBytes}, weightDataBytes=${r.weightDataBytes}.`)}}}async load(){const e=JSON.parse(this.LS.getItem(this.keys.info));if(null==e)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if("JSON"!==e.modelTopologyType)throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const t={},n=JSON.parse(this.LS.getItem(this.keys.topology));if(null==n)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);t.modelTopology=n;const r=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(null==r)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);t.weightSpecs=r;const a=this.LS.getItem(this.keys.modelMetadata);if(null!=a){const e=JSON.parse(a);t.format=e.format,t.generatedBy=e.generatedBy,t.convertedBy=e.convertedBy,null!=e.signature&&(t.signature=e.signature),null!=e.userDefinedMetadata&&(t.userDefinedMetadata=e.userDefinedMetadata),null!=e.modelInitializer&&(t.modelInitializer=e.modelInitializer),null!=e.trainingConfig&&(t.trainingConfig=e.trainingConfig)}const s=this.LS.getItem(this.keys.weightData);if(null==s)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return t.weightData=function(e){if(Na){const t=Buffer.from(e,"base64");return t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)}const t=atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;++e)n.set([t.charCodeAt(e)],e);return n.buffer}(s),t}}Ja.URL_SCHEME="localstorage://";const es=e=>{return ce().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(Ja.URL_SCHEME)?(t=e.slice(Ja.URL_SCHEME.length),new Ja(t)):null;var t};_a.registerSaveRouter(es),_a.registerLoadRouter(es);class ts{constructor(){k(ce().getBool("IS_BROWSER"),(()=>"Current environment is not a web browser")),k("undefined"==typeof window||void 0!==window.localStorage,(()=>"Current browser does not appear to support localStorage")),this.LS=window.localStorage}async listModels(){const e={},t=Ga+za,n=za+Ha;for(let r=0;r<this.LS.length;++r){const a=this.LS.key(r);if(a.startsWith(t)&&a.endsWith(n)){e[Qa(a)]=JSON.parse(this.LS.getItem(a))}}return e}async removeModel(e){var t;const n=Ya(e=(t=e).startsWith(Ja.URL_SCHEME)?t.slice(Ja.URL_SCHEME.length):t);if(null==this.LS.getItem(n.info))throw new Error(`Cannot find model at path '${e}'`);const r=JSON.parse(this.LS.getItem(n.info));return Za(n),r}}
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
const ns="://";class rs{constructor(){this.managers={}}static getInstance(){return null==rs.instance&&(rs.instance=new rs),rs.instance}static registerManager(e,t){k(null!=e,(()=>"scheme must not be undefined or null.")),e.endsWith(ns)&&(e=e.slice(0,e.indexOf(ns))),k(e.length>0,(()=>"scheme must not be an empty string."));const n=rs.getInstance();k(null==n.managers[e],(()=>`A model store manager is already registered for scheme '${e}'.`)),n.managers[e]=t}static getManager(e){const t=this.getInstance().managers[e];if(null==t)throw new Error(`Cannot find model manager for scheme '${e}'`);return t}static getSchemes(){return Object.keys(this.getInstance().managers)}}
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
class as{fetch(e,t){return fetch(e,t)}now(){return performance.now()}encode(e,t){if("utf-8"!==t&&"utf8"!==t)throw new Error(`Browser's encoder only supports utf-8, but got ${t}`);return null==this.textEncoder&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(e)}decode(e,t){return new TextDecoder(t).decode(e)}}if(ce().get("IS_BROWSER")){ce().setPlatform("browser",new as);try{rs.registerManager(Ja.URL_SCHEME,new ts)}catch(e){}try{rs.registerManager(Ba.URL_SCHEME,new Va)}catch(e){}}
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
const ss=()=>n(5410);let os;class is{constructor(){this.util=n(8628),this.textEncoder=new this.util.TextEncoder}fetch(e,t){return null!=ce().global.fetch?ce().global.fetch(e,t):(null==os&&(os=ss()),os(e,t))}now(){const e=process.hrtime();return 1e3*e[0]+e[1]/1e6}encode(e,t){if("utf-8"!==t&&"utf8"!==t)throw new Error(`Node built-in encoder only supports utf-8, but got ${t}`);return this.textEncoder.encode(e)}decode(e,t){return 0===e.length?"":new this.util.TextDecoder(t).decode(e)}}
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
function us(e,t="float32",n){return t=t||"float32",re(e),new ta(e,t,n)}
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
function ls(e,t){let n=e;if(V(e))return"string"===t?[]:[e.length];if(!Array.isArray(e))return[];const r=[];for(;Array.isArray(n)||V(n)&&"string"!==t;)r.push(n.length),n=n[0];return Array.isArray(e)&&ce().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&cs(e,r,[]),r}function cs(e,t,n){if(n=n||[],!Array.isArray(e)&&!V(e))return void k(0===t.length,(()=>`Element arr[${n.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`));k(t.length>0,(()=>`Element arr[${n.join("][")}] should be a primitive, but is an array of ${e.length} elements`)),k(e.length===t[0],(()=>`Element arr[${n.join("][")}] should have ${t[0]} elements, but has ${e.length} elements`));const r=t.slice(1);for(let t=0;t<e.length;++t)cs(e[t],r,n.concat(t))}function ds(e,t,n,r){if("string_or_numeric"!==e){if(null==e)throw new Error("Expected dtype cannot be null.");if("numeric"!==e&&e!==t||"numeric"===e&&"string"===t)throw new Error(`Argument '${n}' passed to '${r}' must be ${e} tensor, but got ${t} tensor`)}}function ps(e,t,n,r="numeric"){if(e instanceof sa)return ds(r,e.dtype,t,n),e;let a=q(e);if("string"!==a&&["bool","int32","float32"].indexOf(r)>=0&&(a=r),ds(r,a,t,n),null==e||!V(e)&&!Array.isArray(e)&&"number"!=typeof e&&"boolean"!=typeof e&&"string"!=typeof e){const r=null==e?"null":e.constructor.name;throw new Error(`Argument '${t}' passed to '${n}' must be a Tensor or TensorLike, but got '${r}'`)}const s=ls(e,a);V(e)||Array.isArray(e)||(e=[e]);const o="string"!==a?Vr(e,a):S(e,[],!0);return Ia.makeTensor(o,s,a)}function hs(e,t,n,r="numeric"){if(!Array.isArray(e))throw new Error(`Argument ${t} passed to ${n} must be a \`Tensor[]\` or \`TensorLike[]\``);return e.map(((e,a)=>ps(e,`${t}[${a}]`,n,r)))}ce().get("IS_NODE")&&!ce().get("IS_BROWSER")&&ce().setPlatform("node",new is);function fs(e){const t=Object.keys(e);if(1!==t.length)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let n=t[0];const r=e[n];n.endsWith("_")&&(n=n.substring(0,n.length-1)),n+="__op";const a=(...e)=>{Ia.startScope(n);try{const t=r(...e);return oe(t)&&console.error("Cannot return a Promise inside of tidy."),Ia.endScope(t),t}catch(e){throw Ia.endScope(null),e}};return Object.defineProperty(a,"name",{value:n,configurable:!0}),a}const ms=fs({cast_:
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
function(e,t){const n=ps(e,"x","cast");if(!B(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if("string"===t&&"string"!==n.dtype||"string"!==t&&"string"===n.dtype)throw new Error("Only strings can be casted to strings");const r={x:n},a={dtype:t};return Ia.runKernel(Ue,r,a)}});const gs=fs({clone_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const t={x:ps(e,"x","clone","string_or_numeric")};return Ia.runKernel(Tt,t)}});
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
ka();ra={buffer:us,cast:ms,clone:gs,print:
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
function(e,t=!1){console.log(e.toString(t))}};function xs(e){return new Promise((e=>setTimeout(e))).then(e)}class bs{constructor(e){if(!ce().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");e.startsWith(bs.URL_SCHEME)&&(e=e.slice(bs.URL_SCHEME.length)),null!=e&&0!==e.length||(e="model"),this.modelJsonFileName=e+".json",this.weightDataFileName=e+".weights.bin"}async save(e){if("undefined"==typeof document)throw new Error("Browser downloads are not supported in this environment since `document` is not present");const t=window.URL.createObjectURL(new Blob([e.weightData],{type:"application/octet-stream"}));if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const n=Aa(e,[{paths:["./"+this.weightDataFileName],weights:e.weightSpecs}]),r=window.URL.createObjectURL(new Blob([JSON.stringify(n)],{type:"application/json"})),a=null==this.modelJsonAnchor?document.createElement("a"):this.modelJsonAnchor;if(a.download=this.modelJsonFileName,a.href=r,await xs((()=>a.dispatchEvent(new MouseEvent("click")))),null!=e.weightData){const e=null==this.weightDataAnchor?document.createElement("a"):this.weightDataAnchor;e.download=this.weightDataFileName,e.href=t,await xs((()=>e.dispatchEvent(new MouseEvent("click"))))}return{modelArtifactsInfo:Fa(e)}}}}bs.URL_SCHEME="downloads://";
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
function vs(e,t,n,r){!function(e){k(null!=e&&Array.isArray(e)&&e.length>0,(()=>"promises must be a none empty array"))}(e),function(e,t){k(e>=0&&e<=1,(()=>`Progress fraction must be in range [0, 1], but got startFraction ${e}`)),k(t>=0&&t<=1,(()=>`Progress fraction must be in range [0, 1], but got endFraction ${t}`)),k(t>=e,(()=>`startFraction must be no more than endFraction, but got startFraction ${e} and endFraction ${t}`))}(n=null==n?0:n,r=null==r?1:r);let a=0;return Promise.all(e.map((s=>(s.then((s=>{const o=n+ ++a/e.length*(r-n);return t(o),s})),s))))}
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
async function ys(e,t){null==t&&(t={});const n=null==t.fetchFunc?ce().platform.fetch:t.fetchFunc,r=e.map((e=>n(e,t.requestInit,{isBinary:!0}))),a=(null==t.onProgress?await Promise.all(r):await vs(r,t.onProgress,0,.5)).map((e=>e.arrayBuffer()));return null==t.onProgress?await Promise.all(a):await vs(a,t.onProgress,.5,1)}_a.registerSaveRouter((e=>ce().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(bs.URL_SCHEME)?function(e="model"){return new bs(e)}(e.slice(bs.URL_SCHEME.length)):null));class ks{constructor(e,t){if(this.DEFAULT_METHOD="POST",null==t&&(t={}),this.weightPathPrefix=t.weightPathPrefix,this.onProgress=t.onProgress,this.weightUrlConverter=t.weightUrlConverter,null!=t.fetchFunc?(k("function"==typeof t.fetchFunc,(()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)")),this.fetch=t.fetchFunc):this.fetch=ce().platform.fetch,k(null!=e&&e.length>0,(()=>"URL path for http must not be null, undefined or empty.")),Array.isArray(e)&&k(2===e.length,(()=>`URL paths for http must have a length of 2, (actual length is ${e.length}).`)),this.path=e,null!=t.requestInit&&null!=t.requestInit.body)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=t.requestInit||{}}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const t=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);t.body=new FormData;const n=Aa(e,[{paths:["./model.weights.bin"],weights:e.weightSpecs}]);t.body.append("model.json",new Blob([JSON.stringify(n)],{type:"application/json"}),"model.json"),null!=e.weightData&&t.body.append("model.weights.bin",new Blob([e.weightData],{type:"application/octet-stream"}),"model.weights.bin");const r=await this.fetch(this.path,t);if(r.ok)return{modelArtifactsInfo:Fa(e),responses:[r]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${r.status}.`)}async load(){const e=await this.fetch(this.path,this.requestInit);if(!e.ok)throw new Error(`Request to ${this.path} failed with status code ${e.status}. Please verify this URL points to the model JSON of the model to load.`);let t;try{t=await e.json()}catch(e){let t=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?t+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":t+=" Please make sure the server is serving valid JSON for this request.",new Error(t)}const n=t.modelTopology,r=t.weightsManifest;if(null==n&&null==r)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return async function(e,t){const n={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy};if(null!=e.trainingConfig&&(n.trainingConfig=e.trainingConfig),null!=e.weightsManifest){const[r,a]=await t(e.weightsManifest);n.weightSpecs=r,n.weightData=a}return null!=e.signature&&(n.signature=e.signature),null!=e.userDefinedMetadata&&(n.userDefinedMetadata=e.userDefinedMetadata),null!=e.modelInitializer&&(n.modelInitializer=e.modelInitializer),n}(t,(e=>this.loadWeights(e)))}async loadWeights(e){const t=Array.isArray(this.path)?this.path[1]:this.path,[n,r]=function(e){const t=e.lastIndexOf("/"),n=e.lastIndexOf("?"),r=e.substring(0,t),a=n>t?e.substring(n):"";return[r+"/",a]}(t),a=this.weightPathPrefix||n,s=[];for(const t of e)s.push(...t.weights);const o=[],i=[];for(const t of e)for(const e of t.paths)null!=this.weightUrlConverter?i.push(this.weightUrlConverter(e)):o.push(a+e+r);this.weightUrlConverter&&o.push(...await Promise.all(i));return[s,Da(await ys(o,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress}))]}}function Is(e){return null!=e.match(ks.URL_SCHEME_REGEX)}ks.URL_SCHEME_REGEX=/^https?:\/\//;const ws=(e,t)=>{if("undefined"==typeof fetch&&(null==t||null==t.fetchFunc))return null;{let n=!0;if(n=Array.isArray(e)?e.every((e=>Is(e))):Is(e),n)return Ss(e,t)}return null};function Ss(e,t){return new ks(e,t)}_a.registerSaveRouter(ws),_a.registerLoadRouter(ws);
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
function Cs(e,t){const n=e.length,r=[];for(let a=0;a<n;a++){const s=n-1-a,o=e[s]||1;(t[t.length-1-a]||1)>1&&1===o&&r.unshift(s)}return r}function $s(e,t){const n=[];for(let r=0;r<t.length;r++){const a=e[e.length-r-1],s=t.length-r-1,o=t[s];(null==a||1===a&&o>1)&&n.unshift(s)}return n}function Ts(e,t){const n=[],r=Math.max(e.length,t.length);for(let a=0;a<r;a++){let r=e[e.length-a-1];null==r&&(r=1);let s=t[t.length-a-1];if(null==s&&(s=1),1===r)n.unshift(s);else if(1===s)n.unshift(r);else{if(r!==s){throw Error(`Operands could not be broadcast together with shapes ${e} and ${t}.`)}n.unshift(r)}}return n}function Es(e,t,n){const r=e.shape.length;k(r===t.length,(()=>`Error in slice${r}D: Length of begin ${t} must match the rank of the array (${r}).`)),k(r===n.length,(()=>`Error in slice${r}D: Length of size ${n} must match the rank of the array (${r}).`));for(let a=0;a<r;++a)k(t[a]+n[a]<=e.shape[a],(()=>`Error in slice${r}D: begin[${a}] + size[${a}] (${t[a]+n[a]}) would overflow input.shape[${a}] (${e.shape[a]})`))}function Ns(e){const t=[];let n=0;for(;e>0;)1&e&&t.push(n),e/=2,n++;return t}function Rs(e,t,n){const r=[];for(let a=0;a<e.length;a++)r[a]=Math.ceil((t[a]-e[a])/n[a]);return r}function Ds(e,t,n,r){const a=[...e];for(let e=a.length;e<r.length;e++)a.push(1);for(let e=0;e<n;e++)0===e?a[t]=1:(a.splice(t,0,1),a.pop());return a}function As(e,t,n){return n<=e?n:n-(t-1)}function Fs(e,t){const n=[];for(let r=0;r<e;r++)n.push(t+r);return n}function _s(e,t,n,r,a,s,o,i,u){const l=e.length;let c=new Array(l),d=new Array(l),p=new Array(l);if(t.length&&n>0){const u=t[0],l=n+1;c=Os(o,u,l,r,e),d=Ms(i,u,l,a,e),p=Ds(s,u,l,e)}else for(let t=0;t<l;t++)c[t]=Ps(o,r,s,e,t,u),d[t]=Ws(i,a,s,e,t,u),p[t]=Us(s,t,u);return{begin:c,end:d,strides:p}}function Os(e,t,n,r,a){const s=[...a],o=Fs(n,t);for(let a=0;a<s.length;a++)if(o.indexOf(a)>-1)s[a]=0;else{const o=As(t,n,a);let i=r[o];e&1<<o&&(i=0),s[a]=i}return s}function Ms(e,t,n,r,a){const s=[...a],o=Fs(n,t);for(let a=0;a<s.length;a++)if(o.indexOf(a)>-1)s[a]=Number.MAX_SAFE_INTEGER;else{const o=As(t,n,a);let i=r[o];e&1<<o&&(i=Number.MAX_SAFE_INTEGER),s[a]=i}for(let e=0;e<s.length;e++){const t=a[e];s[e]<0&&(s[e]+=t),s[e]=m(0,s[e],a[e])}return s}function Us(e,t,n){let r=e[t];return(n&1<<t||null==r)&&(r=1),r}function Ps(e,t,n,r,a,s){let o=t[a];const i=n[a]||1;(e&1<<a||s&1<<a||null==o)&&(o=i>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);const u=r[a];return o<0&&(o+=u),o=m(0,o,u-1),o}function Ws(e,t,n,r,a,s){let o=t[a];const i=n[a]||1;(e&1<<a||s&1<<a||null==o)&&(o=i>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);const u=r[a];return o<0&&(o+=u),o=i>0?m(0,o,u):m(-1,o,u-1),o}function Bs(e,t,n){let r=n.length;for(let e=0;e<n.length;e++)if(n[e]>1){r=e;break}for(let a=r+1;a<n.length;a++)if(t[a]>0||n[a]!==e[a])return!1;return!0}function Ls(e,t){let n=e.length>0?e[e.length-1]:1;for(let r=0;r<e.length-1;r++)n+=e[r]*t[r];return n}function Vs(e,t,n){let r;const a=e.shape.length;let s;return r="number"==typeof t?[t,...new Array(a-1).fill(0)]:t.length<a?t.concat(new Array(a-t.length).fill(0)):t.slice(),r.forEach((e=>{k(-1!==e,(()=>"slice() does not support negative begin indexing."))})),s=null==n?new Array(a).fill(-1):"number"==typeof n?[n,...new Array(a-1).fill(-1)]:n.length<a?n.concat(new Array(a-n.length).fill(-1)):n,s=s.map(((t,n)=>t>=0?t:(k(-1===t,(()=>`Negative size values should be exactly -1 but got ${t} for the slice() size at index ${n}.`)),e.shape[n]-r[n]))),[r,s]}function zs(e,t,n,r,a,s,o,i,u){let l;if(null==r?(l=new Array(t.length),l.fill(1)):l=r,null!=o&&0!=(o&o-1))throw new Error("Multiple ellipses in slice is not allowed.");let c=!1;const d={dims:l.length,numAddAxisAfterEllipsis:0,begin:t.slice(),end:n.slice(),strides:l.slice(),beginMask:a,endMask:s,ellipsisMask:o,newAxisMask:i,shrinkAxisMask:u};for(let e=0;e<d.dims;e++)c&&0!=(1<<e&i)&&d.numAddAxisAfterEllipsis++,1<<e&o&&(c=!0);c||(d.ellipsisMask|=1<<d.dims,d.dims++);const p={dims:e.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};!function(e,t){t.beginMask=0,t.endMask=0,t.shrinkAxisMask=0;let n=0;t.beginValid=null!=e.begin,t.endValid=null!=e.end,t.begin=new Array(t.dims),t.end=new Array(t.dims),t.strides=new Array(t.dims),t.finalShapeGatherIndices=[],t.finalShapeGatherIndicesSparse=[],t.inputShapeGatherIndicesSparse=new Array(t.dims);for(let r=0;r<e.dims;r++)if(1<<r&e.ellipsisMask){const a=Math.min(t.dims-(e.dims-r)+1+e.numAddAxisAfterEllipsis,t.dims);for(;n<a;n++)t.begin[n]=0,t.end[n]=0,t.strides[n]=1,t.beginMask|=1<<n,t.endMask|=1<<n,t.finalShapeGatherIndices.push(n),t.finalShapeGatherIndicesSparse.push(-1),t.inputShapeGatherIndicesSparse[n]=r}else if(1<<r&e.newAxisMask)t.finalShapeGatherIndices.push(-2),t.finalShapeGatherIndicesSparse.push(-1);else{if(n===t.begin.length)throw Error(`Index out of range using input dim ${n}; input has only ${t.dims} dims, ${t.begin.length}.`);null!=e.begin&&(t.begin[n]=e.begin[r]),null!=e.end&&(t.end[n]=e.end[r]),t.strides[n]=e.strides[r],e.beginMask&1<<r&&(t.beginMask|=1<<n),e.endMask&1<<r&&(t.endMask|=1<<n),e.shrinkAxisMask&1<<r?(t.finalShapeGatherIndices.push(-1),t.finalShapeGatherIndicesSparse.push(-1),t.shrinkAxisMask|=1<<n):(t.finalShapeGatherIndices.push(n),t.finalShapeGatherIndicesSparse.push(r)),t.inputShapeGatherIndicesSparse[n]=r,n++}}(d,p);let h=!0,f=!0,m=!0;const g=[],x=[];for(let t=0;t<e.length;++t){if(0===p.strides[t])throw Error(`strides[${t}] must be non-zero`);const n=!!(p.shrinkAxisMask&1<<t),r=e[t];if(-1===r){g.push(n?1:-1);continue}const a=[p.beginMask&1<<t,p.endMask&1<<t],s=[p.strides[t]>0?0:-1,p.strides[t]>0?r:r-1];if(n&&p.strides[t]<=0)throw Error("only stride 1 allowed on non-range indexing.");m=m&&1===p.strides[t];const o=!!(p.beginMask&1<<t&&p.endMask&1<<t);if(p.beginValid&&p.endValid){if(n){const e=p.begin[t]<0?r+p.begin[t]:p.begin[t];if(p.begin[t]=e,p.end[t]=p.begin[t]+1,e<0||e>=r)throw Error(`slice index ${p.begin[t]} of dimension ${t} out of bounds.`)}else p.begin[t]=Gs(p.begin[t],0,p.strides[t],r,a,s),p.end[t]=Gs(p.end[t],1,p.strides[t],r,a,s);const e=1===p.strides[t]&&0===p.begin[t]&&p.end[t]===r;h=h&&e,f=f&&(0===t&&1===p.strides[t]||e)}else h=h&&1===p.strides[t]&&o,f=f&&(0===t&&1===p.strides[t]||o);let i,u=!1;if(p.beginValid&&p.endValid?(i=p.end[t]-p.begin[t],u=!0):n?(i=1,u=!0):o&&r>=0&&(i=p.strides[t]<0?-r:r,u=!0),u){let e;e=0===i||i<0!=p.strides[t]<0?0:Math.trunc(i/p.strides[t])+(i%p.strides[t]!=0?1:0),g.push(e)}else g.push(-1)}for(let e=0;e<p.finalShapeGatherIndices.length;++e){const t=p.finalShapeGatherIndices[e];t>=0?x.push(g[t]):-2===t&&x.push(1)}return{finalShapeSparse:x.filter(((e,t)=>-2!==p.finalShapeGatherIndices[t])),finalShape:x,isIdentity:h,sliceDim0:f,isSimpleSlice:m,begin:p.begin,end:p.end,strides:p.strides}}function Gs(e,t,n,r,a,s){if(a[t])return n>0?s[t]:s[t+1&1];{const t=e<0?r+e:e;return t<s[0]?s[0]:t>s[1]?s[1]:t}}
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
function Hs(e,t,n,r){if(null==r&&(r=q(e)),"complex64"===r)throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!V(e)&&!Array.isArray(e)&&"number"!=typeof e&&"boolean"!=typeof e&&"string"!=typeof e)throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(null!=t){re(t);const e=C(t),r=C(n);k(e===r,(()=>`Based on the provided shape, [${t}], the tensor should have ${e} values but has ${r}`));for(let e=0;e<n.length;++e){const r=n[e],a=e!==n.length-1||r!==C(t.slice(e));k(n[e]===t[e]||!a,(()=>`Error creating a new Tensor. Inferred shape (${n}) does not match the provided shape (${t}). `))}}return V(e)||Array.isArray(e)||(e=[e]),t=t||n,e="string"!==r?Vr(e,r):S(e,[],!0),Ia.makeTensor(e,t,r)}
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
function js(e,t){if((V(e)&&"string"!==t||Array.isArray(e))&&"complex64"!==t)throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if("string"===t&&V(e)&&!(e instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Hs(e,[],[],t)}const Xs=fs({complex_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){const n=ps(e,"real","complex"),r=ps(t,"imag","complex");I(n.shape,r.shape,`real and imag shapes, ${n.shape} and ${r.shape}, must match in call to tf.complex().`);const a={real:n,imag:r};return Ia.runKernel(Be,a)}});
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
function qs(e,t="float32"){if("complex64"===t){const t=qs(e,"float32"),n=qs(e,"float32");return Xs(t,n)}const n=te(C(e),t);return Ia.makeTensor(n,e,t)}const Ks=fs({concat_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t=0){k(e.length>=1,(()=>"Pass at least one tensor to concat"));const n=hs(e,"tensors","concat","string_or_numeric");if("complex64"===n[0].dtype&&n.forEach((e=>{if("complex64"!==e.dtype)throw new Error(`Cannot concatenate complex64 tensors with a tensor\n          with dtype ${e.dtype}. `)})),1===n.length)return gs(n[0]);const r=n,a={axis:t};return Ia.runKernel(Ve,r,a)}});const Ys=fs({imag_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const t={input:ps(e,"input","imag")};return Ia.runKernel(Nt,t)}});const Zs=fs({real_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const t={input:ps(e,"input","real")};return Ia.runKernel(bn,t)}});const Qs=fs({reshape_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){const n={x:ps(e,"x","reshape","string_or_numeric")},r={shape:t};return Ia.runKernel(kn,n,r)}});const Js=fs({slice_:
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
function(e,t,n){const r=ps(e,"x","slice","string_or_numeric");if(0===r.rank)throw new Error("Slicing scalar is not possible");const a={x:r},s={begin:t,size:n};return Ia.runKernel(Fn,a,s)}});const eo=fs({split_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n=0){const r={x:ps(e,"x","split")},a={numOrSizeSplits:t,axis:n};return Ia.runKernel(Vn,r,a)}});const to=fs({zerosLike_:
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
function(e){const t={x:ps(e,"x","zerosLike")};return Ia.runKernel(dr,t)}});const no=fs({fft_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){k("complex64"===e.dtype,(()=>`The dtype for tf.spectral.fft() must be complex64 but got ${e.dtype}.`));const t={input:e};return Ia.runKernel(xt,t)}});const ro=fs({rfft_:
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
function(e,t){k("float32"===e.dtype,(()=>`The dtype for rfft() must be real value but got ${e.dtype}`));let n=e.shape[e.shape.length-1];const r=e.size/n;let a;if(null!=t&&t<n){const r=e.shape.map((e=>0)),s=e.shape.map((e=>e));s[e.shape.length-1]=t,a=Js(e,r,s),n=t}else if(null!=t&&t>n){const r=e.shape.map((e=>e));r[e.shape.length-1]=t-n,a=Ks([e,qs(r)],e.shape.length-1),n=t}else a=e;const s=to(a),o=Qs(Xs(a,s),[r,n]),i=no(o),u=Math.floor(n/2)+1,l=Zs(i),c=Ys(i),d=eo(l,[u,n-u],l.shape.length-1),p=eo(c,[u,n-u],c.shape.length-1),h=a.shape.slice();return h[a.shape.length-1]=u,Qs(Xs(d[0],p[0]),h)}});const ao=fs({ifft_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){k("complex64"===e.dtype,(()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${e.dtype}.`));const t={input:e};return Ia.runKernel(Et,t)}});const so=fs({mul_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){let n=ps(e,"a","mul"),r=ps(t,"b","mul");[n,r]=ma(n,r);const a={a:n,b:r};return Ia.runKernel(rn,a)}});const oo=fs({reverse_:
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
function(e,t){const n={x:ps(e,"x","reverse")},r={dims:t};return Ia.runKernel(Tn,n,r)}});fs({irfft_:
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
function(e){const t=e.shape[e.shape.length-1],n=e.size/t;let r;if(t<=2){const a=Qs(e,[n,t]);r=ao(a)}else{const a=[n,2*(t-1)],s=Qs(Zs(e),[n,t]),o=Qs(Ys(e),[n,t]),i=oo(Js(s,[0,1],[n,t-2]),1),u=so(oo(Js(o,[0,1],[n,t-2]),1),js(-1)),l=Ks([s,i],1),c=Ks([o,u],1),d=Qs(Xs(l,c),[a[0],a[1]]);r=ao(d)}if(r=Zs(r),3===e.rank&&0!==e.shape[0]){const t=r,n=e.shape[0];r=Qs(r,[n,r.shape[0]/n,r.shape[1]]),t.dispose()}return r}});
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
function io(e,t){w(e);const n=ls(e,t);if(1!==n.length)throw new Error("tensor1d() requires values to be a flat/TypedArray");return Hs(e,null,n,t)}function uo(e,t,n){const r=1-e%2,a=new Float32Array(e);for(let s=0;s<e;++s){const o=2*Math.PI*s/(e+r-1);a[s]=t-n*Math.cos(o)}return io(a,"float32")}fs({hammingWindow_:
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
function(e){return uo(e,.54,.46)}});const lo=fs({hannWindow_:
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
function(e){return uo(e,.5,.5)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function co(e,t,n){const r={shape:e,value:t,dtype:n};return Ia.runKernel(bt,{},r)}
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
function po(e,t,n){if(w(e),null!=t&&2!==t.length)throw new Error("tensor2d() requires shape to have two numbers");const r=ls(e,n);if(2!==r.length&&1!==r.length)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(1===r.length&&null==t)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Hs(e,t,r,n)}const ho=fs({frame_:
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
function(e,t,n,r=!1,a=0){let s=0;const o=[];for(;s+t<=e.size;)o.push(Js(e,s,t)),s+=n;if(r)for(;s<e.size;){const r=s+t-e.size,i=Ks([Js(e,s,t-r),co([r],a)]);o.push(i),s+=n}return 0===o.length?po([],[0,t]):Qs(Ks(o),[o.length,t])}});fs({stft_:
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
function(e,t,n,r,a=lo){
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
var s;null==r&&(s=t,r=Math.floor(Math.pow(2,Math.ceil(Math.log(s)/Math.log(2)))));const o=ho(e,t,n),i=so(o,a(t));return ro(i,r)}});fs({cropAndResize_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n,r,a="bilinear",s=0){const o=ps(e,"image","cropAndResize"),i=ps(t,"boxes","cropAndResize","float32"),u=ps(n,"boxInd","cropAndResize","int32"),l=i.shape[0];k(4===o.rank,(()=>`Error in cropAndResize: image must be rank 4,but got rank ${o.rank}.`)),k(2===i.rank&&4===i.shape[1],(()=>`Error in cropAndResize: boxes must be have size [${l},4] but had shape ${i.shape}.`)),k(1===u.rank&&u.shape[0]===l,(()=>`Error in cropAndResize: boxInd must be have size [${l}] but had shape ${i.shape}.`)),k(2===r.length,(()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${r.length}.`)),k(r[0]>=1&&r[1]>=1,(()=>`cropSize must be atleast [1,1], but was ${r}`)),k("bilinear"===a||"nearest"===a,(()=>`method must be bilinear or nearest, but was ${a}`));const c={image:o,boxes:i,boxInd:u},d={method:a,extrapolationValue:s,cropSize:r};return Ia.runKernel(Qe,c,d)}});fs({flipLeftRight_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const t=ps(e,"image","flipLeftRight","float32");k(4===t.rank,(()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`));const n={image:t};return Ia.runKernel(vt,n,{})}});const fo=fs({tile_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){const n=ps(e,"x","tile","string_or_numeric");k(n.rank===t.length,(()=>`Error in transpose: rank of input ${n.rank} must match length of reps ${t}.`));const r={x:n},a={reps:t};return Ia.runKernel(ar,r,a)}});fs({grayscaleToRGB_:
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
function(e){const t=ps(e,"image","grayscaleToRGB"),n=t.rank-1,r=t.shape[n];k(t.rank>=2,(()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`)),k(1===r,(()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${r}.`));const a=new Array(t.rank);return a.fill(1,0,n),a[n]=3,fo(t,a)}});fs({rotateWithOffset_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n=0,r=.5){const a=ps(e,"image","rotateWithOffset","float32");k(4===a.rank,(()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${a.rank}.`));const s={image:a},o={radians:t,fillValue:n,center:r};return Ia.runKernel(fr,s,o)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function mo(e,t,n,r,a,s){null==r&&(r=.5),null==a&&(a=Number.NEGATIVE_INFINITY),null==s&&(s=0);const o=e.shape[0];return n=Math.min(n,o),k(0<=r&&r<=1,(()=>`iouThreshold must be in [0, 1], but was '${r}'`)),k(2===e.rank,(()=>`boxes must be a 2D tensor, but was of rank '${e.rank}'`)),k(4===e.shape[1],(()=>`boxes must have 4 columns, but 2nd dimension was ${e.shape[1]}`)),k(1===t.rank,(()=>"scores must be a 1D tensor")),k(t.shape[0]===o,(()=>`scores has incompatible shape with boxes. Expected ${o}, but was ${t.shape[0]}`)),k(0<=s&&s<=1,(()=>`softNmsSigma must be in [0, 1], but was '${s}'`)),{maxOutputSize:n,iouThreshold:r,scoreThreshold:a,softNmsSigma:s}}fs({nonMaxSuppression_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n,r=.5,a=Number.NEGATIVE_INFINITY){const s=ps(e,"boxes","nonMaxSuppression","float32"),o=ps(t,"scores","nonMaxSuppression","float32"),i=mo(s,o,n,r,a),u={maxOutputSize:n=i.maxOutputSize,iouThreshold:r=i.iouThreshold,scoreThreshold:a=i.scoreThreshold};return Ia.runKernel(on,{boxes:s,scores:o},u)}});
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
function go(e,t,n){const r=function(e,t,n){return function(e,t,n){let r=0,a=e.length,s=0,o=!1;for(;r<a;){s=r+(a-r>>>1);const i=n(t,e[s]);i>0?r=s+1:(a=s,o=!i)}return o?r:-r-1}(e,t,n||xo)}(e,t,n),a=r<0?-(r+1):r;e.splice(a,0,t)}function xo(e,t){return e>t?1:e<t?-1:0}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function bo(e,t,n,r,a){return ko(e,t,n,r,a,0)}function vo(e,t,n,r,a,s){return ko(e,t,n,r,a,0,!1,s,!0)}function yo(e,t,n,r,a,s){return ko(e,t,n,r,a,s,!0)}function ko(e,t,n,r,a,s,o=!1,i=!1,u=!1){const l=[];for(let e=0;e<t.length;e++)t[e]>a&&l.push({score:t[e],boxIndex:e,suppressBeginIndex:0});l.sort(So);const c=s>0?-.5/s:0,d=[],p=[];for(;d.length<n&&l.length>0;){const t=l.pop(),{score:n,boxIndex:s,suppressBeginIndex:o}=t;if(n<a)break;let i=!1;for(let n=d.length-1;n>=o;--n){const o=Io(e,s,d[n]);if(o>=r){i=!0;break}if(t.score=t.score*wo(r,c,o),t.score<=a)break}t.suppressBeginIndex=d.length,i||(t.score===n?(d.push(s),p.push(t.score)):t.score>a&&go(l,t,So))}const h=d.length,f=n-h;i&&f>0&&(d.push(...new Array(f).fill(0)),p.push(...new Array(f).fill(0)));const m={selectedIndices:d};return o&&(m.selectedScores=p),u&&(m.validOutputs=h),m}function Io(e,t,n){const r=e.subarray(4*t,4*t+4),a=e.subarray(4*n,4*n+4),s=Math.min(r[0],r[2]),o=Math.min(r[1],r[3]),i=Math.max(r[0],r[2]),u=Math.max(r[1],r[3]),l=Math.min(a[0],a[2]),c=Math.min(a[1],a[3]),d=Math.max(a[0],a[2]),p=Math.max(a[1],a[3]),h=(i-s)*(u-o),f=(d-l)*(p-c);if(h<=0||f<=0)return 0;const m=Math.max(s,l),g=Math.max(o,c),x=Math.min(i,d),b=Math.min(u,p),v=Math.max(x-m,0)*Math.max(b-g,0);return v/(h+f-v)}function wo(e,t,n){const r=Math.exp(t*n*n);return n<=e?r:0}function So(e,t){return e.score-t.score||e.score===t.score&&t.boxIndex-e.boxIndex}fs({nonMaxSuppressionWithScore_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n,r=.5,a=Number.NEGATIVE_INFINITY,s=0){const o=ps(e,"boxes","nonMaxSuppression"),i=ps(t,"scores","nonMaxSuppression"),u=mo(o,i,n,r,a,s),l={boxes:o,scores:i},c={maxOutputSize:n=u.maxOutputSize,iouThreshold:r=u.iouThreshold,scoreThreshold:a=u.scoreThreshold,softNmsSigma:s=u.softNmsSigma},d=Ia.runKernel(ln,l,c);return{selectedIndices:d[0],selectedScores:d[1]}}});fs({nonMaxSuppressionPadded_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n,r=.5,a=Number.NEGATIVE_INFINITY,s=!1){const o=ps(e,"boxes","nonMaxSuppression"),i=ps(t,"scores","nonMaxSuppression"),u=mo(o,i,n,r,a,null),l={boxes:o,scores:i},c={maxOutputSize:u.maxOutputSize,iouThreshold:u.iouThreshold,scoreThreshold:u.scoreThreshold,padToMaxOutputSize:s},d=Ia.runKernel(un,l,c);return{selectedIndices:d[0],validOutputs:d[1]}}});fs({resizeBilinear_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n=!1,r=!1){const a=ps(e,"images","resizeBilinear");k(3===a.rank||4===a.rank,(()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${a.rank}.`)),k(2===t.length,(()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`)),k(!1===r||!1===n,(()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false."));let s=a,o=!1;3===a.rank&&(o=!0,s=Qs(a,[1,a.shape[0],a.shape[1],a.shape[2]]));const[]=t,i={images:s},u={alignCorners:n,halfPixelCenters:r,size:t},l=Ia.runKernel(Sn,i,u);return o?Qs(l,[l.shape[1],l.shape[2],l.shape[3]]):l}});fs({resizeNearestNeighbor_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n=!1,r=!1){const a=ps(e,"images","resizeNearestNeighbor");k(3===a.rank||4===a.rank,(()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${a.rank}.`)),k(2===t.length,(()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`)),k("float32"===a.dtype||"int32"===a.dtype,(()=>"`images` must have `int32` or `float32` as dtype")),k(!1===r||!1===n,(()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false."));let s=a,o=!1;3===a.rank&&(o=!0,s=Qs(a,[1,a.shape[0],a.shape[1],a.shape[2]]));const[]=t,i={images:s},u={alignCorners:n,halfPixelCenters:r,size:t},l=Ia.runKernel(In,i,u);return o?Qs(l,[l.shape[1],l.shape[2],l.shape[3]]):l}});const Co=fs({bincount_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n){const r=ps(e,"x","bincount"),a=ps(t,"weights","bincount");k("int32"===r.dtype,(()=>`Error in bincount: input dtype must be int32, but got ${r.dtype}`)),k(n>=0,(()=>`size must be non-negative, but got ${n}.`)),k(a.size===r.size||0===a.size,(()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${r.shape}, weights shape: ${a.shape}.`));const s={x:r,weights:a},o={size:n};return Ia.runKernel(Oe,s,o)}});const $o=fs({lessEqual_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){let n=ps(e,"a","lessEqual","string_or_numeric"),r=ps(t,"b","lessEqual","string_or_numeric");[n,r]=ma(n,r),Ts(n.shape,r.shape);const a={a:n,b:r};return Ia.runKernel(Ot,a)}});const To=fs({greater_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){let n=ps(e,"a","greater","string_or_numeric"),r=ps(t,"b","greater","string_or_numeric");[n,r]=ma(n,r),Ts(n.shape,r.shape);const a={a:n,b:r};return Ia.runKernel(Ct,a)}});const Eo=fs({sum_:
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
function(e,t=null,n=!1){let r=ps(e,"x","sum");"bool"===r.dtype&&(r=ms(r,"int32"));const a={x:r},s={axis:t,keepDims:n};return Ia.runKernel(Bn,a,s)}});const No=fs({add_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){let n=ps(e,"a","add"),r=ps(t,"b","add");[n,r]=ma(n,r);const a={a:n,b:r};return Ia.runKernel(be,a)}});const Ro=fs({floorDiv_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){let n=ps(e,"a","floorDiv"),r=ps(t,"b","floorDiv");[n,r]=ma(n,r);const a={a:n,b:r};return Ia.runKernel(kt,a)}});const Do=fs({div_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){let n=ps(e,"a","div"),r=ps(t,"b","div");if([n,r]=ma(n,r),"int32"===n.dtype&&"int32"===r.dtype)return Ro(n,r);const a={a:n,b:r};return Ia.runKernel(ut,a,{})}});const Ao=fs({sub_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){let n=ps(e,"a","sub"),r=ps(t,"b","sub");[n,r]=ma(n,r);const a={a:n,b:r};return Ia.runKernel(tr,a)}});const Fo=fs({round_:
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
function(e){const t={x:ps(e,"x","round")};return Ia.runKernel(En,t)}});const _o=fs({broadcastTo_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){let n=ps(e,"broadcastTo","x");const r=n.shape;if(t.some((e=>!(e>0)||e%1!=0)))throw new Error(`broadcastTo(): Invalid broadcast shape [${t}].`);if(t.length<n.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${n.rank}.`);if(t.length>n.rank){const e=n.shape.slice();for(;e.length<t.length;)e.unshift(1);n=Qs(n,e)}const a=n.shape,s=Array.from(t);for(let e=t.length-1;e>=0;e--)if(a[e]===t[e])s[e]=1;else if(1!==n.shape[e])throw new Error(`broadcastTo(): [${r}] cannot be broadcast to [${t}].`);if(0===s.map(((e,t)=>e>1?t:-1)).filter((e=>e>=0)).length)return gs(n);const o={x:n},i={reps:s};return Ia.runKernel(ar,o,i)}});const Oo=fs({where_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n){const r=ps(t,"a","where"),a=ps(n,"b","where"),s=ps(e,"condition","where","bool"),o=Ts(Ts(s.shape,r.shape),a.shape),i={condition:_o(s,o),t:_o(r,o),e:_o(a,o)};return Ia.runKernel(Dn,i)}});
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
function Mo(e,t,n=1,r="float32"){if(0===n)throw new Error("Cannot have a step of zero");const a={start:e,stop:t,step:n,dtype:r};return Ia.runKernel(xn,{},a)}fs({threshold_:
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
function(e,t="binary",n=!1,r=.5){const a=ps(e,"image","threshold"),s=a.shape[0]*a.shape[1];let o,i,u,l,c=so(io([r]),255);if(k(3===a.rank,(()=>`Error in threshold: image must be rank 3,but got rank ${a.rank}.`)),k(3===a.shape[2]||1===a.shape[2],(()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${a.shape[2]}.`)),k("int32"===a.dtype||"float32"===a.dtype,(()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${a.dtype}.`)),k("otsu"===t||"binary"===t,(()=>`Method must be binary or otsu, but was ${t}`)),3===a.shape[2]){[o,i,u]=eo(a,[1,1,1],-1);const e=so(o,.2989),t=so(i,.587),n=so(u,.114);l=No(No(e,t),n)}else l=e;if("otsu"===t){c=function(e,t){let n,r,a,s,o,i,u=io([-1]),l=io([0]),c=io([0]);for(let d=0;d<e.size-1;d++){n=Js(e,0,d+1),r=Js(e,d+1),o=Do(Eo(n),t),i=Do(Eo(r),t);const p=Eo(so(n,Mo(0,n.size)));a=Do(p,Eo(n));const h=co(r.shape,n.size),f=No(Mo(0,r.size),h),m=so(r,f);s=Do(Eo(m),Eo(r));const g=Ao(a,s),x=Ao(a,s),b=so(o,i);c=so(so(b,g),x);const v=To(c,l);l=Oo(v,c,l),u=Oo(v,io([d]),u)}return u}(Co(ms(Fo(l),"int32"),Hs(d=[],p,ls(d,h),h),256),s)}
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
var d,p,h;const f=n?$o(l,c):To(l,c);return ms(so(f,255),"int32")}});fs({transform_:
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
function(e,t,n="nearest",r="constant",a=0,s){const o=ps(e,"image","transform","float32"),i=ps(t,"transforms","transform","float32");k(4===o.rank,(()=>`Error in transform: image must be rank 4,but got rank ${o.rank}.`)),k(2===i.rank&&(i.shape[0]===o.shape[0]||1===i.shape[0])&&8===i.shape[1],(()=>"Error in transform: Input transform should be batch x 8 or 1 x 8")),k(null==s||2===s.length,(()=>`Error in transform: outputShape must be [height, width] or null, but got ${s}.`));const u={image:o,transforms:i},l={interpolation:n,fillMode:r,fillValue:a,outputShape:s};return Ia.runKernel(or,u,l)}});const Uo=fs({greaterEqual_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){let n=ps(e,"a","greaterEqual","string_or_numeric"),r=ps(t,"b","greaterEqual","string_or_numeric");[n,r]=ma(n,r),Ts(n.shape,r.shape);const a={a:n,b:r};return Ia.runKernel($t,a)}});const Po=fs({logicalAnd_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){const n=ps(e,"a","logicalAnd","bool"),r=ps(t,"b","logicalAnd","bool");Ts(n.shape,r.shape);const a={a:n,b:r};return Ia.runKernel(Wt,a)}});const Wo=fs({stack_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t=0){const n=hs(e,"tensors","stack","string_or_numeric");k(n.length>=1,(()=>"Pass at least one tensor to tf.stack")),n.length>0&&k(t<=n[0].rank,(()=>"Axis must be <= rank of the tensor"));const r=n,a={axis:t};return Ia.runKernel(pn,r,a)}});const Bo=fs({unstack_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t=0){const n=ps(e,"x","unstack","string_or_numeric");k(t>=-n.shape.length&&t<n.shape.length,(()=>`Axis = ${t} is not in [-${n.shape.length}, ${n.shape.length})`));const r={value:n},a={axis:t};return Ia.runKernel(lr,r,a)}});fs({bandPart_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n){k(t%1==0,(()=>`bandPart(): numLower must be an integer, got ${t}.`)),k(n%1==0,(()=>`bandPart(): numUpper must be an integer, got ${n}.`));const r=ps(e,"a","bandPart");k(r.rank>=2,(()=>`bandPart(): Rank must be at least 2, got ${r.rank}.`));const a=r.shape,[s,o]=r.shape.slice(-2);if(!(t<=s))throw new Error(`bandPart(): numLower (${t}) must not be greater than the number of rows (${s}).`);if(!(n<=o))throw new Error(`bandPart(): numUpper (${n}) must not be greater than the number of columns (${o}).`);t<0&&(t=s),n<0&&(n=o);const i=Qs(Mo(0,s,1,"int32"),[-1,1]),u=Mo(0,o,1,"int32"),l=Ao(i,u),c=Po($o(l,js(+t,"int32")),Uo(l,js(-n,"int32"))),d=qs([s,o],r.dtype);return Qs(Wo(Bo(Qs(r,[-1,s,o])).map((e=>Oo(c,e,d)))),a)}});const Lo=fs({abs_:
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
function(e){const t=ps(e,"x","abs");if("complex64"===t.dtype){const e={x:t};return Ia.runKernel(Le,e)}{const e={x:t};return Ia.runKernel(me,e)}}});
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
function Vo(e,t){for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0}function zo(e,t,n){const r=e.length+t.length,a=[];let s=0,o=0;for(let i=0;i<r;i++)-1===n.indexOf(i)?a.push(e[s++]):a.push(t[o++]);return a}function Go(e,t){const n=[],r=e.length;for(let a=0;a<r;a++)-1===t.indexOf(a)&&n.push(e[a]);return[n,t.map((t=>e[t]))]}function Ho(e,t){return zo(e,t.map((e=>1)),t)}function jo(e,t,n){k(Vo(t,n),(()=>`${e} supports only inner-most axes for now. Got axes ${t} and rank-${n} input.`))}function Xo(e,t){if(Vo(e,t))return null;const n=[];for(let r=0;r<t;++r)-1===e.indexOf(r)&&n.push(r);return e.forEach((e=>n.push(e))),n}function qo(e){return e.map(((e,t)=>[t,e])).sort(((e,t)=>e[1]-t[1])).map((e=>e[0]))}function Ko(e,t){const n=[];for(let r=t-e;r<t;++r)n.push(r);return n}const Yo=fs({max_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t=null,n=!1){const r={x:ps(e,"x","max")},a={reductionIndices:t,keepDims:n};return Ia.runKernel(Gt,r,a)}});const Zo=fs({min_:
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
function(e,t=null,n=!1){const r={x:ps(e,"x","min")},a={axis:t,keepDims:n};return Ia.runKernel(Qt,r,a)}});const Qo=fs({pow_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){let n=ps(e,"base","pow"),r=ps(t,"exp","pow");[n,r]=ma(n,r);const a={a:n,b:r};return Ia.runKernel(fn,a)}});const Jo=fs({sqrt_:
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
function(e){const t={x:ps(e,"x","sqrt","float32")};return Ia.runKernel(Wn,t)}});const ei=fs({square_:
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
function(e){const t=ps(e,"x","square");return Ia.runKernel("Square",{x:t},{})}});function ti(e,t,n=null){if(0===e.rank)return Lo(e);if(1!==e.rank&&null===n)return ti(Qs(e,[-1]),t,n);if(1===e.rank||"number"==typeof n||Array.isArray(n)&&1===n.length){if(1===t)return Eo(Lo(e),n);if(t===1/0)return Yo(Lo(e),n);if(t===-1/0)return Zo(Lo(e),n);if("euclidean"===t||2===t)return Jo(Eo(Qo(Lo(e),js(2,"int32")),n));throw new Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(n)&&2===n.length){if(1===t)return Yo(Eo(Lo(e),n[0]),n[1]-1);if(t===1/0)return Yo(Eo(Lo(e),n[1]),n[0]);if(t===-1/0)return Zo(Eo(Lo(e),n[1]),n[0]);if("fro"===t||"euclidean"===t)return Jo(Eo(ei(e),n));throw new Error(`Error in norm: invalid ord value: ${t}`)}throw new Error(`Error in norm: invalid axis: ${n}`)}const ni=fs({norm_:
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
function(e,t="euclidean",n=null,r=!1){const a=ti(e=ps(e,"x","norm"),t,n);let s=a.shape;if(r){const t=O(n,e.shape);s=Ho(a.shape,t)}return Qs(a,s)}});const ri=fs({squeeze_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){const n=ps(e,"x","squeeze");return Qs(n,M(n.shape,t).newShape)}});fs({gramSchmidt_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){let t;if(Array.isArray(e)){t=!1,k(null!=e&&e.length>0,(()=>"Gram-Schmidt process: input must not be null, undefined, or empty"));const n=e[0].shape[0];for(let t=1;t<e.length;++t)k(e[t].shape[0]===n,(()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${e[t].shape[0]} vs. ${n})`))}else t=!0,e=eo(e,e.shape[0],0).map((e=>ri(e,[0])));k(e.length<=e[0].shape[0],(()=>`Gram-Schmidt: Number of vectors (${e.length}) exceeds number of dimensions (${e[0].shape[0]}).`));const n=[],r=e;for(let t=0;t<e.length;++t)n.push(Ia.tidy((()=>{let e=r[t];if(t>0)for(let r=0;r<t;++r){const t=so(Eo(so(n[r],e)),n[r]);e=Ao(e,t)}return Do(e,ni(e,"euclidean"))})));return t?Wo(n,0):n}});function ai(){return Ia}function si(e,t){return Ia.tidy(e,t)}function oi(e,t,n=1){return Ia.registerBackend(e,t,n)}aa=function(e){ce().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(e+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")};const ii=fs({expandDims_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t=0){const n=ps(e,"x","expandDims","string_or_numeric");k(t<=n.rank,(()=>"Axis must be <= rank of the tensor"));const r={input:n},a={dim:t};return Ia.runKernel(mt,r,a)}});const ui=fs({eye_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n,r="float32"){null==t&&(t=e);const a=us([e,t],r),s=e<=t?e:t;for(let e=0;e<s;++e)a.set(1,e,e);const o=Qs(a.toTensor(),[e,t]);if(null==n)return o;if(1===n.length)return fo(ii(o,0),[n[0],1,1]);if(2===n.length)return fo(ii(ii(o,0),0),[n[0],n[1],1,1]);if(3===n.length)return fo(ii(ii(ii(o,0),0),0),[n[0],n[1],n[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${n.length}D.`)}});const li=fs({matMul_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n=!1,r=!1){let a=ps(e,"a","matMul"),s=ps(t,"b","matMul");[a,s]=ma(a,s);const o={a,b:s},i={transposeA:n,transposeB:r};return Ia.runKernel(Fe,o,i)}});const ci=fs({neg_:
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
function(e){const t={x:ps(e,"x","neg")};return Ia.runKernel(an,t)}});const di=fs({transpose_:
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
function(e,t){const n=ps(e,"x","transpose");if(null==t&&(t=n.shape.map(((e,t)=>t)).reverse()),k(n.rank===t.length,(()=>`Error in transpose: rank of input ${n.rank} must match length of perm ${t}.`)),t.forEach((e=>{k(e>=0&&e<n.rank,(()=>"All entries in 'perm' must be between 0 and "+(n.rank-1)+` but got ${t}`))})),n.rank<=1)return n.clone();const r={x:n},a={perm:t};return Ia.runKernel(ir,r,a)}});function pi(e,t=!1){return Ia.tidy((()=>{k(2===e.shape.length,(()=>`qr2d() requires a 2D Tensor, but got a ${e.shape.length}D Tensor.`));const n=e.shape[0],r=e.shape[1];let a=ui(n),s=gs(e);const o=po([[1]],[1,1]);let i=gs(o);const u=n>=r?r:n;for(let e=0;e<u;++e){const t=s,u=i,l=a;[i,s,a]=Ia.tidy((()=>{const t=Js(s,[e,e],[n-e,1]),u=ni(t),l=Js(s,[e,e],[1,1]),c=Oo(To(l,0),po([[-1]]),po([[1]])),d=Ao(l,so(c,u)),p=Do(t,d);i=1===p.shape[0]?gs(o):Ks([o,Js(p,[1,0],[p.shape[0]-1,p.shape[1]])],0);const h=ci(Do(li(c,d),u)),f=Js(s,[e,0],[n-e,r]),m=so(h,i),g=di(i);if(0===e)s=Ao(f,li(m,li(g,f)));else{const t=Ao(f,li(m,li(g,f)));s=Ks([Js(s,[0,0],[e,r]),t],0)}const x=di(m),b=Js(a,[0,e],[n,a.shape[1]-e]);if(0===e)a=Ao(b,li(li(b,i),x));else{const t=Ao(b,li(li(b,i),x));a=Ks([Js(a,[0,0],[n,e]),t],1)}return[i,s,a]})),ga([t,u,l]).forEach((e=>e.dispose()))}return!t&&n>r&&(a=Js(a,[0,0],[n,r]),s=Js(s,[0,0],[r,r])),[a,s]}))}fs({qr_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t=!1){if(k(e.rank>=2,(()=>`qr() requires input tensor to have a rank >= 2, but got rank ${e.rank}`)),2===e.rank)return pi(e,t);{const n=e.shape.slice(0,e.shape.length-2).reduce(((e,t)=>e*t)),r=Bo(Qs(e,[n,e.shape[e.shape.length-2],e.shape[e.shape.length-1]]),0),a=[],s=[];r.forEach((e=>{const[n,r]=pi(e,t);a.push(n),s.push(r)}));return[Qs(Wo(a,0),e.shape),Qs(Wo(s,0),e.shape)]}}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var hi;!function(e){e[e.NONE=0]="NONE",e[e.MEAN=1]="MEAN",e[e.SUM=2]="SUM",e[e.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"}(hi||(hi={}));const fi=fs({mean_:
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
function(e,t=null,n=!1){const r={x:ps(e,"x","mean")},a={axis:t,keepDims:n};return Ia.runKernel(Zt,r,a)}});const mi=fs({notEqual_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){let n=ps(e,"a","notEqual","string_or_numeric"),r=ps(t,"b","notEqual","string_or_numeric");[n,r]=ma(n,r),Ts(n.shape,r.shape);const a={a:n,b:r};return Ia.runKernel(sn,a)}});
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
function gi(e,t="float32"){if("complex64"===t){const t=gi(e,"float32"),n=qs(e,"float32");return Xs(t,n)}const n=ee(C(e),t);return Ia.makeTensor(n,e,t)}const xi=fs({computeWeightedLoss_:function(e,t,n=hi.SUM_BY_NONZERO_WEIGHTS){const r=ps(e,"losses","computeWeightedLoss");let a=null;null!=t&&(a=ps(t,"weights","computeWeightedLoss"));const s=null==a?r:so(r,a);if(n===hi.NONE)return s;if(n===hi.SUM)return Eo(s);if(n===hi.MEAN){if(null==a)return fi(s);{const e=r.size/a.size,t=Do(Eo(s),Eo(a));return e>1?Do(t,js(e)):t}}if(n===hi.SUM_BY_NONZERO_WEIGHTS){if(null==a)return Do(Eo(s),js(r.size));{const e=so(a,gi(r.shape)),t=ms(Eo(mi(e,js(0))),"float32");return Do(Eo(s),t)}}throw Error(`Unknown reduction: ${n}`)}});fs({absoluteDifference_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n,r=hi.SUM_BY_NONZERO_WEIGHTS){const a=ps(e,"labels","absoluteDifference"),s=ps(t,"predictions","absoluteDifference");let o=null;null!=n&&(o=ps(n,"weights","absoluteDifference")),I(a.shape,s.shape,"Error in absoluteDifference: ");const i=Lo(Ao(a,s));return xi(i,o,r)}});fs({cosineDistance_:function(e,t,n,r,a=hi.SUM_BY_NONZERO_WEIGHTS){const s=ps(e,"labels","cosineDistance"),o=ps(t,"predictions","cosineDistance");let i=null;null!=r&&(i=ps(r,"weights","cosineDistance")),I(s.shape,o.shape,"Error in cosineDistance: ");const u=js(1),l=Ao(u,Eo(so(s,o),n,!0));return xi(l,i,a)}});const bi=fs({relu_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const t={x:ps(e,"x","relu")};return Ia.runKernel(yn,t)}});fs({hingeLoss_:function(e,t,n,r=hi.SUM_BY_NONZERO_WEIGHTS){let a=ps(e,"labels","hingeLoss");const s=ps(t,"predictions","hingeLoss");let o=null;null!=n&&(o=ps(n,"weights","hingeLoss")),I(a.shape,s.shape,"Error in hingeLoss: ");const i=js(1);a=Ao(so(js(2),a),i);const u=bi(Ao(i,so(a,s)));return xi(u,o,r)}});const vi=fs({minimum_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){let n=ps(e,"a","minimum"),r=ps(t,"b","minimum");[n,r]=ma(n,r),"bool"===n.dtype&&(n=ms(n,"int32"),r=ms(r,"int32")),Ts(n.shape,r.shape);const a={a:n,b:r};return Ia.runKernel(Jt,a)}});fs({huberLoss_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n,r=1,a=hi.SUM_BY_NONZERO_WEIGHTS){const s=ps(e,"labels","huberLoss"),o=ps(t,"predictions","huberLoss");let i=null;null!=n&&(i=ps(n,"weights","huberLoss")),I(s.shape,o.shape,"Error in huberLoss: ");const u=js(r),l=Lo(Ao(o,s)),c=vi(l,u),d=Ao(l,c),p=No(so(js(.5),ei(c)),so(u,d));return xi(p,i,a)}});const yi=fs({log_:
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
function(e){const t={x:ps(e,"x","log","float32")};return Ia.runKernel(Ut,t)}});fs({logLoss_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n,r=1e-7,a=hi.SUM_BY_NONZERO_WEIGHTS){const s=ps(e,"labels","logLoss"),o=ps(t,"predictions","logLoss");let i=null;null!=n&&(i=ps(n,"weights","logLoss")),I(s.shape,o.shape,"Error in logLoss: ");const u=js(1),l=js(r),c=ci(so(s,yi(No(o,l)))),d=so(Ao(u,s),yi(No(Ao(u,o),l))),p=Ao(c,d);return xi(p,i,a)}});const ki=fs({squaredDifference_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){let n=ps(e,"a","squaredDifference"),r=ps(t,"b","squaredDifference");[n,r]=ma(n,r),Ts(n.shape,r.shape);const a={a:n,b:r};return Ia.runKernel(Kn,a,{})}});fs({meanSquaredError_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n,r=hi.SUM_BY_NONZERO_WEIGHTS){const a=ps(e,"labels","meanSquaredError"),s=ps(t,"predictions","meanSquaredError");let o=null;null!=n&&(o=ps(n,"weights","meanSquaredError")),I(a.shape,s.shape,"Error in meanSquaredError: ");const i=ki(a,s);return xi(i,o,r)}});const Ii=fs({exp_:
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
function(e){const t={x:ps(e,"x","exp")};return Ia.runKernel(ft,t)}});const wi=fs({log1p_:
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
function(e){const t={x:ps(e,"x","log1p")};return Ia.runKernel(Pt,t)}});fs({sigmoidCrossEntropy_:function(e,t,n,r=0,a=hi.SUM_BY_NONZERO_WEIGHTS){let s=ps(e,"multiClassLabels","sigmoidCrossEntropy");const o=ps(t,"logits","sigmoidCrossEntropy");let i=null;if(null!=n&&(i=ps(n,"weights","sigmoidCrossEntropy")),I(s.shape,o.shape,"Error in sigmoidCrossEntropy: "),r>0){const e=js(r),t=js(1),n=js(.5);s=No(so(s,Ao(t,e)),so(n,e))}const u=
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){const n=ps(e,"labels","sigmoidCrossEntropyWithLogits"),r=ps(t,"logits","sigmoidCrossEntropyWithLogits");I(n.shape,r.shape,"Error in sigmoidCrossEntropyWithLogits: ");const a=bi(r),s=so(r,n),o=wi(Ii(ci(Lo(r))));return No(Ao(a,s),o)}(s,o);return xi(u,i,a)}});const Si=fs({logSumExp_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t=null,n=!1){const r=ps(e,"x","logSumExp"),a=O(t,r.shape),s=Yo(r,a,!0),o=Ao(r,s),i=Ii(o),u=Eo(i,a),l=yi(u),c=No(Qs(s,l.shape),l);if(n){const e=Ho(c.shape,a);return Qs(c,e)}return c}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ci(e,t,n=-1){if(-1===n&&(n=t.rank-1),n!==t.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${t.rank} and dim was ${n}`);const r=(a=(e,t,r)=>{const a=Si(t,[n],!0),s=Ao(ms(t,"float32"),a);r([e,s]);const o=ci(so(s,e));return{value:Eo(o,[n]),gradFunc:(e,t)=>{const[r,a]=t,s=Ho(e.shape,[n]);return[so(Qs(e,s),Ao(ms(r,"float32"),Ii(a))),so(Qs(e,s),Ao(Ii(a),ms(r,"float32")))]}}},Ia.customGrad(a));var a;return r(e,t)}fs({softmaxCrossEntropy_:function(e,t,n,r=0,a=hi.SUM_BY_NONZERO_WEIGHTS){let s=ps(e,"onehotLabels","softmaxCrossEntropy");const o=ps(t,"logits","softmaxCrossEntropy");let i=null;if(null!=n&&(i=ps(n,"weights","softmaxCrossEntropy")),I(s.shape,o.shape,"Error in softmaxCrossEntropy: "),r>0){const e=js(r),t=js(1),n=js(s.shape[1]);s=No(so(s,Ao(t,e)),Do(e,n))}const u=Ci(s,o);return xi(u,i,a)}});fs({sparseFillEmptyRows_:
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
function(e,t,n,r){const a=ps(e,"indices","sparseFillEmptyRows","int32"),s=ps(t,"values","sparseFillEmptyRows"),o=ps(n,"denseShape","sparseFillEmptyRows","int32"),i=ps(r,"defaultValue","sparseFillEmptyRows",s.dtype);if(2!==a.rank)throw new Error(`Indices should be Tensor2D but received shape\n        ${a.shape}`);if(1!==s.rank)throw new Error(`Values should be Tensor1D but received shape ${s.shape}`);if(1!==o.rank)throw new Error(`Dense shape should be Tensor1D but received shape ${o.shape}`);if(0!==i.rank)throw new Error(`Default value should be a scalar but received shape ${i.shape}`);const u={indices:a,values:s,denseShape:o,defaultValue:i},l=Ia.runKernel(Gn,u);return{outputIndices:l[0],outputValues:l[1],emptyRowIndicator:l[2],reverseIndexMap:l[3]}}});fs({sparseReshape_:
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
function(e,t,n){const r=ps(e,"inputIndices","sparseReshape","int32"),a=ps(t,"inputShape","sparseReshape","int32"),s=ps(n,"newShape","sparseReshape","int32");if(2!==r.rank)throw new Error(`Input indices should be Tensor2D but received shape\n        ${r.shape}`);if(1!==a.rank)throw new Error(`Input shape should be Tensor1D but received shape ${a.shape}`);if(1!==s.rank)throw new Error(`New shape should be Tensor1D but received shape ${s.shape}`);const o={inputIndices:r,inputShape:a,newShape:s},i=Ia.runKernel(Hn,o);return{outputIndices:i[0],outputShape:i[1]}}});fs({sparseSegmentMean_:
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
function(e,t,n){const r=ps(e,"data","sparseSegmentMean"),a=ps(t,"indices","sparseSegmentMean","int32"),s=ps(n,"segmentIds","sparseSegmentMean","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(1!==a.rank)throw new Error(`Indices should be Tensor1D but received shape\n          ${a.shape}`);if(1!==s.rank)throw new Error(`Segment ids should be Tensor1D but received shape\n          ${s.shape}`);const o={data:r,indices:a,segmentIds:s};return Ia.runKernel(jn,o)}});fs({sparseSegmentSum_:
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
function(e,t,n){const r=ps(e,"data","sparseSegmentSum"),a=ps(t,"indices","sparseSegmentSum","int32"),s=ps(n,"segmentIds","sparseSegmentSum","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(1!==a.rank)throw new Error(`Indices should be Tensor1D but received shape\n         ${a.shape}`);if(1!==s.rank)throw new Error(`Segment ids should be Tensor1D but received shape\n         ${s.shape}`);const o={data:r,indices:a,segmentIds:s};return Ia.runKernel(Xn,o)}});fs({stringNGrams_:
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
function(e,t,n,r,a,s,o,i){const u=ps(e,"data","stringNGrams","string");if("string"!==u.dtype)throw new Error("Data must be of datatype string");if(1!==u.shape.length)throw new Error(`Data must be a vector, saw: ${u.shape}`);const l=ps(t,"dataSplits","stringNGrams");if("int32"!==l.dtype)throw new Error("Data splits must be of datatype int32");const c={separator:n,nGramWidths:r,leftPad:a,rightPad:s,padWidth:o,preserveShortSequences:i},d={data:u,dataSplits:l},p=Ia.runKernel(Qn,d,c);return{nGrams:p[0],nGramsSplits:p[1]}}});fs({stringSplit_:
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
function(e,t,n=!0){const r=ps(e,"input","stringSplit","string"),a=ps(t,"delimiter","stringSplit","string");if(1!==r.rank)throw new Error(`Input should be Tensor1D but received shape ${r.shape}`);if(0!==a.rank)throw new Error(`Delimiter should be a scalar but received shape ${a.shape}`);const s={skipEmpty:n},o={input:r,delimiter:a},i=Ia.runKernel(Jn,o,s);return{indices:i[0],values:i[1],shape:i[2]}}});fs({stringToHashBucketFast_:
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
function(e,t){const n=ps(e,"input","stringToHashBucketFast","string"),r={numBuckets:t};if(t<=0)throw new Error("Number of buckets must be at least 1");const a={input:n};return Ia.runKernel(er,a,r)}});
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
function $i(e,t){const n=e[0].length;e.forEach(((e,t)=>{k(e.length===n,(()=>`Error in concat${n}D: rank of tensors[${t}] must be the same as the rank of the rest (${n})`))})),k(t>=0&&t<n,(()=>`Error in concat${n}D: axis must be between 0 and ${n-1}.`));const r=e[0];e.forEach(((e,a)=>{for(let s=0;s<n;s++)k(s===t||e[s]===r[s],(()=>`Error in concat${n}D: Shape of tensors[${a}] (${e}) does not match the shape of the rest (${r}) along the non-concatenated axis ${a}.`))}))}function Ti(e,t){const n=e[0].slice();for(let r=1;r<e.length;r++)n[t]+=e[r][t];return n}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ei(e,t,n,r,a="NHWC",s){return Di(e,[...t,e[3]],n,s,r,null,null,Bi(a))}function Ni(e,t,n,r,a,s,o="channelsLast"){const[i,u]=_i(t);let l;if("channelsLast"===o)l=[i,u,e[3],e[3]];else{if("channelsFirst"!==o)throw new Error(`Unknown dataFormat ${o}`);l=[i,u,e[1],e[1]]}return Di(e,l,n,r,a,s,!1,o)}function Ri(e,t,n,r,a,s,o="NDHWC"){const[i,u,l]=Oi(t);let c,d;if("NDHWC"===o)d="channelsLast",c=[i,u,l,e[4],e[4]];else{if("NCDHW"!==o)throw new Error(`Unknown dataFormat ${o}`);d="channelsFirst",c=[i,u,l,e[1],e[1]]}return Ai(e,c,n,r,a,!1,d,s)}function Di(e,t,n,r,a,s,o=!1,i="channelsLast"){let[u,l,c,d]=[-1,-1,-1,-1];if("channelsLast"===i)[u,l,c,d]=e;else{if("channelsFirst"!==i)throw new Error(`Unknown dataFormat ${i}`);[u,d,l,c]=e}const[p,h,,f]=t,[m,g]=_i(n),[x,b]=_i(r),v=Mi(p,x),y=Mi(h,b),{padInfo:k,outHeight:I,outWidth:w}=function(e,t,n,r,a,s,o,i,u){let l,c,d;if("number"==typeof e){l={top:e,bottom:e,left:e,right:e,type:0===e?"VALID":"NUMBER"};const a=function(e,t,n,r,a){null==r&&(r=Fi(e,t,n));const s=e[0],o=e[1],i=Ui((s-t+2*r)/n+1,a),u=Ui((o-t+2*r)/n+1,a);return[i,u]}([t,n],s,r,e,i);c=a[0],d=a[1]}else if("same"===e){c=Math.ceil(t/r),d=Math.ceil(n/a);const e=Math.max(0,(c-1)*r+s-t),i=Math.max(0,(d-1)*a+o-n),u=Math.floor(e/2),p=e-u,h=Math.floor(i/2);l={top:u,bottom:p,left:h,right:i-h,type:"SAME"}}else if("valid"===e)l={top:0,bottom:0,left:0,right:0,type:"VALID"},c=Math.ceil((t-s+1)/r),d=Math.ceil((n-o+1)/a);else{if("object"!=typeof e)throw Error(`Unknown padding parameter: ${e}`);{const p="channelsLast"===u?e[1][0]:e[2][0],h="channelsLast"===u?e[1][1]:e[2][1],f="channelsLast"===u?e[2][0]:e[3][0],m="channelsLast"===u?e[2][1]:e[3][1];l={top:p,bottom:h,left:f,right:m,type:0===p&&0===h&&0===f&&0===m?"VALID":"EXPLICIT"},c=Ui((t-s+p+h)/r+1,i),d=Ui((n-o+f+m)/a+1,i)}}return{padInfo:l,outHeight:c,outWidth:d}}(a,l,c,m,g,v,y,s,i),S=o?f*d:f;let C;return"channelsFirst"===i?C=[u,S,I,w]:"channelsLast"===i&&(C=[u,I,w,S]),{batchSize:u,dataFormat:i,inHeight:l,inWidth:c,inChannels:d,outHeight:I,outWidth:w,outChannels:S,padInfo:k,strideHeight:m,strideWidth:g,filterHeight:p,filterWidth:h,effectiveFilterHeight:v,effectiveFilterWidth:y,dilationHeight:x,dilationWidth:b,inShape:e,outShape:C,filterShape:t}}function Ai(e,t,n,r,a,s=!1,o="channelsLast",i){let[u,l,c,d,p]=[-1,-1,-1,-1,-1];if("channelsLast"===o)[u,l,c,d,p]=e;else{if("channelsFirst"!==o)throw new Error(`Unknown dataFormat ${o}`);[u,p,l,c,d]=e}const[h,f,m,,g]=t,[x,b,v]=Oi(n),[y,k,I]=Oi(r),w=Mi(h,y),S=Mi(f,k),C=Mi(m,I),{padInfo:$,outDepth:T,outHeight:E,outWidth:N}=function(e,t,n,r,a,s,o,i,u,l,c){let d,p,h,f;if("number"==typeof e){d={top:e,bottom:e,left:e,right:e,front:e,back:e,type:0===e?"VALID":"NUMBER"};const s=function(e,t,n,r,a,s){null==a&&(a=Fi(e,t,r));const o=e[0],i=e[1],u=e[2],l=Ui((o-t+2*a)/r+1,s),c=Ui((i-t+2*a)/r+1,s),d=Ui((u-t+2*a)/r+1,s);return[l,c,d,n]}([t,n,r,1],i,1,a,e,c);p=s[0],h=s[1],f=s[2]}else if("same"===e){p=Math.ceil(t/a),h=Math.ceil(n/s),f=Math.ceil(r/o);const e=(p-1)*a+i-t,c=(h-1)*s+u-n,m=(f-1)*o+l-r,g=Math.floor(e/2),x=e-g,b=Math.floor(c/2),v=c-b,y=Math.floor(m/2);d={top:b,bottom:v,left:y,right:m-y,front:g,back:x,type:"SAME"}}else{if("valid"!==e)throw Error(`Unknown padding parameter: ${e}`);d={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},p=Math.ceil((t-i+1)/a),h=Math.ceil((n-u+1)/s),f=Math.ceil((r-l+1)/o)}return{padInfo:d,outDepth:p,outHeight:h,outWidth:f}}(a,l,c,d,x,b,v,w,S,C,i),R=s?g*p:g;let D;return"channelsFirst"===o?D=[u,R,T,E,N]:"channelsLast"===o&&(D=[u,T,E,N,R]),{batchSize:u,dataFormat:o,inDepth:l,inHeight:c,inWidth:d,inChannels:p,outDepth:T,outHeight:E,outWidth:N,outChannels:R,padInfo:$,strideDepth:x,strideHeight:b,strideWidth:v,filterDepth:h,filterHeight:f,filterWidth:m,effectiveFilterDepth:w,effectiveFilterHeight:S,effectiveFilterWidth:C,dilationDepth:y,dilationHeight:k,dilationWidth:I,inShape:e,outShape:D,filterShape:t}}function Fi(e,t,n,r=1){const a=Mi(t,r);return Math.floor((e[0]*(n-1)-n+a)/2)}function _i(e){return"number"==typeof e?[e,e,e]:2===e.length?[e[0],e[1],1]:e}function Oi(e){return"number"==typeof e?[e,e,e]:e}function Mi(e,t){return t<=1?e:e+(e-1)*(t-1)}function Ui(e,t){if(!t)return Math.trunc(e);switch(t){case"round":return Math.round(e);case"ceil":return Math.ceil(e);case"floor":return Math.floor(e);default:throw new Error(`Unknown roundingMode ${t}`)}}function Pi(e){const[t,n,r]=_i(e);return 1===t&&1===n&&1===r}function Wi(e,t){return Pi(e)||Pi(t)}function Bi(e){if("NHWC"===e)return"channelsLast";if("NCHW"===e)return"channelsFirst";throw new Error(`Unknown dataFormat ${e}`)}function Li(e,t,n){if(null!=n){if("string"==typeof t)throw Error(`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);if("number"==typeof t)k(E(t),(()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`));else{if("object"!=typeof t)throw Error(`Error in ${e}: Unknown padding parameter: ${t}`);t.forEach((t=>{t.forEach((t=>{k(E(t),(()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`))}))}))}}}const Vi=fs({elu_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const t={x:ps(e,"x","elu","float32")};return Ia.runKernel(ct,t)}});const zi=fs({leakyRelu_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t=.2){const n={x:ps(e,"x","leakyRelu")},r={alpha:t};return Ia.runKernel(Ft,n,r)}});const Gi=fs({prelu_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){const n={x:ps(e,"x","prelu"),alpha:ps(t,"alpha","prelu")};return Ia.runKernel(mn,n)}});const Hi=fs({relu6_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const t={x:ps(e,"x","relu6")};return Ia.runKernel($n,t)}});const ji=fs({sigmoid_:
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
function(e){const t={x:ps(e,"x","sigmoid","float32")};return Ia.runKernel(Un,t)}});const Xi=fs({step_:
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
function(e,t=0){const n={x:ps(e,"x","step")},r={alpha:t};return Ia.runKernel(pr,n,r)}});
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
function qi(e,t,n){if(null==n||"linear"===n)return e;if("relu"===n)return so(e,Xi(t));throw new Error(`Cannot compute gradient for fused activation ${n}.`)}function Ki(e,t){let n=t;const r=$s(e.shape,t.shape);return r.length>0&&(n=Eo(n,r)),Qs(n,e.shape)}function Yi(e,t,n,r){if("linear"===t)return e;if("relu"===t)return bi(e);if("elu"===t)return Vi(e);if("relu6"===t)return Hi(e);if("prelu"===t)return Gi(e,n);if("leakyrelu"===t)return zi(e,r);if("sigmoid"===t)return ji(e);throw new Error(`Unknown fused activation ${t}.`)}const Zi=(e,t)=>!(e>0)||"linear"===t,Qi=30;function Ji(e){return e<=Qi?e:Y(e,Math.floor(Math.sqrt(e)))}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function eu(e,t,n){return[n*("number"==typeof e?e:e[0]),t*("number"==typeof e?e:e[1])]}
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
function tu(e,t,n,r=!0){let a=[];if(r)a=a.concat(t.slice(0)),a.push(e[0]/n),a=a.concat(e.slice(1));else{a=a.concat(e[0]);const n=t.length;for(let r=0;r<n;++r)a=a.concat([e[r+1]/t[r],t[r]]);a=a.concat(e.slice(n+1))}return a}function nu(e,t,n=!0){const r=[];if(n){r.push(t);for(let n=t+1;n<e;++n)n<=2*t?(r.push(n),r.push(n-(t+1))):r.push(n)}else{const n=[],a=[];for(let r=1;r<e;++r)r>=2*t+1||r%2==1?a.push(r):n.push(r);r.push(...n),r.push(0),r.push(...a)}return r}function ru(e,t,n,r=!0){const a=[];r?a.push(e[0]/n):a.push(e[0]*n);for(let n=1;n<e.length;++n)n<=t.length?r?a.push(t[n-1]*e[n]):a.push(e[n]/t[n-1]):a.push(e[n]);return a}function au(e,t){const n=[0];for(let r=0;r<t;++r)n.push(e[r][0]);return n}function su(e,t,n){const r=e.slice(0,1);for(let a=0;a<n;++a)r.push(e[a+1]-t[a][0]-t[a][1]);return r}function ou(e,t){const n=e.shape.length,r=t.shape.length;if(n<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${n}.`);if(r<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${r}.`);if("int32"!==t.dtype)throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.shape[r-1]>n)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${t.shape[r-1]} vs. ${n}`);if(0===C(e.shape))throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${e.shape}.`);const a=t.shape,s=a[a.length-1];let o=1;for(let e=0;e<a.length-1;++e)o*=a[e];const i=e.shape,u=a.slice();u.pop();let l=1;for(let e=s;e<n;++e)l*=i[e],u.push(i[e]);const c=[...Z(e.shape).map((e=>e/l)),1].slice(0,s);return[u,o,l,c]}function iu(e,t,n){const r=t.rank>1?t.shape[t.rank-1]:1,a=t.rank>1?t.rank-1:1,s=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${n.shape}, indices.shape: ${t.shape}, shape: ${e}, sliceDim: ${r}, and batchDim: ${a}.`;if(n.rank<a)throw new Error(s+` update.rank < ${a}. `);if(e.length<r+(n.rank-a))throw new Error(s+` Output shape length < ${r+(n.rank-a)}`);if(n.rank!==a+e.length-r)throw new Error(s+" update.rank != "+(a+e.length-r));for(let e=0;e<a;++e)if(n.shape[e]!==t.shape[e])throw new Error(s+` updates.shape[${e}] (${n.shape[e]}) != indices.shape[${e}] (${t.shape[e]}).`);for(let t=0;t<n.rank-a;++t)if(n.shape[t+a]!==e[t+r])throw new Error(s+` updates.shape[${t+a}] (${n.shape[t+a]}) != shape[${t+a}] (${e[t+a]})`)}function uu(e,t,n){if(t.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(e.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${e.rank}.`);if("int32"!==t.dtype)throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(n.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${n}`);if(0===n.length){if(0===t.size)throw new Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(0===e.size)throw new Error(`Updates specified for empty output. updates shape: ${e.shape}`)}iu(n,t,e)}function lu(e,t,n){const r=t.shape.length,a=r>1?t.shape[r-1]:1,s=n.length;let o=1;for(let e=a;e<s;++e)o*=n[e];const i=a<1?1:a;return{sliceRank:a,numUpdates:C(t.shape)/i,sliceSize:o,strides:[...Z(n.slice(0,a)),1],outputSize:C(n)}}
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
const cu=1.7580993408473768,du=1.0507009873554805,pu=.3275911,hu=.254829592,fu=-.284496736,mu=1.421413741,gu=-1.453152027,xu=1.061405429;
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
function bu(e,t){if(e.length!==t.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${e.length}, imag: ${t.length}.`);const n=new Float32Array(2*e.length);for(let r=0;r<n.length;r+=2)n[r]=e[r/2],n[r+1]=t[r/2];return n}function vu(e){const t=new Float32Array(e.length/2),n=new Float32Array(e.length/2);for(let r=0;r<e.length;r+=2)t[r/2]=e[r],n[r/2]=e[r+1];return{real:t,imag:n}}function yu(e){const t=Math.ceil(e.length/4),n=new Float32Array(t),r=new Float32Array(t);for(let t=0;t<e.length;t+=4)n[Math.floor(t/4)]=e[t],r[Math.floor(t/4)]=e[t+1];return{real:n,imag:r}}function ku(e){const t=Math.floor(e.length/4),n=new Float32Array(t),r=new Float32Array(t);for(let t=2;t<e.length;t+=4)n[Math.floor(t/4)]=e[t],r[Math.floor(t/4)]=e[t+1];return{real:n,imag:r}}function Iu(e,t){return{real:e[2*t],imag:e[2*t+1]}}function wu(e,t,n,r){e[2*r]=t,e[2*r+1]=n}function Su(e,t){const n=new Float32Array(e/2),r=new Float32Array(e/2);for(let a=0;a<Math.ceil(e/2);a++){const s=(t?2:-2)*Math.PI*(a/e);n[a]=Math.cos(s),r[a]=Math.sin(s)}return{real:n,imag:r}}function Cu(e,t,n){const r=(n?2:-2)*Math.PI*(e/t);return{real:Math.cos(r),imag:Math.sin(r)}}
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
const $u="->",Tu=/->/g;function Eu(e,t){const n=((e=e.replace(/\s/g,"")).length-e.replace(Tu,"").length)/$u.length;if(n<1)throw new Error("Equations without an arrow are not supported.");if(n>1)throw new Error('Equation must contain exactly one arrow ("->").');const[r,a]=e.split($u);k(-1===r.indexOf("..."),(()=>'The ellipsis notation ("...") is not supported yet.'));const s=r.split(","),o=s.length;if(t!==o)throw new Error(`Expected ${o} input tensors, received ${t}`);if(o>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");const i=[];for(let e=0;e<a.length;++e){const t=a[e];if(!s.some((e=>-1!==e.indexOf(t))))throw new Error(`Output subscripts contain the label ${t} not present in the input subscripts.`);-1===i.indexOf(t)&&i.push(t)}for(let e=0;e<r.length;++e){const t=r[e];-1===i.indexOf(t)&&","!==t&&i.push(t)}const u=new Array(s.length);for(let e=0;e<o;++e){if(new Set(s[e].split("")).size!==s[e].length)throw new Error(`Found duplicate axes in input component ${s[e]}. Support for duplicate axes in input is not implemented yet.`);u[e]=[];for(let t=0;t<s[e].length;++t)u[e].push(i.indexOf(s[e][t]))}const l=i.length,c=[];for(let e=a.length;e<l;++e)c.push(e);return{allDims:i,summedDims:c,idDims:u}}function Nu(e,t){let n=new Array(e);n.fill(-1);for(let e=0;e<t.length;++e)n[t[e]]=e;const r=[];for(let t=0;t<e;++t)-1===n[t]&&r.push(t);return n=n.filter((e=>-1!==e)),{permutationIndices:n,expandDims:r}}function Ru(e,t,n){const r=new Array(e);for(let e=0;e<n.length;++e){const a=n[e].shape;for(let n=0;n<t[e].length;++n)void 0===r[t[e][n]]?r[t[e][n]]=a[n]:k(r[t[e][n]]===a[n],(()=>`Expected dimension ${r[t[e][n]]} at axis ${n} of input shaped ${JSON.stringify(a)}, but got dimension ${a[n]}`))}}function Du(e,t){const n=e,r=[];let a=0;0===e.length&&n.push(-1),a=e.length+1;for(let e=0;e<a;++e)r.push([]);const s=[];for(let e=0;e<n.length;++e){const a=Fu(t,n[e]);for(const t of a)-1===s.indexOf(t)&&(r[e].push(t),s.push(t))}return{path:n,steps:r}}function Au(e){return e.every(((e,t)=>e===t))}function Fu(e,t){const n=[];for(let r=0;r<e.length;++r)0!==e[r].length&&-1===e[r].indexOf(t)&&-1!==t||n.push(r);return n}function _u(e,t,n=0){let r=[];if("number"==typeof t)k(e.shape[n]%t==0,(()=>"Number of splits must evenly divide the axis.")),r=new Array(t).fill(e.shape[n]/t);else{k(t.reduce(((e,t)=>(-1===t&&(e+=1),e)),0)<=1,(()=>"There should be only one negative value in split array."));const a=t.indexOf(-1);if(-1!==a){const r=t.reduce(((e,t)=>t>0?e+t:e));t[a]=e.shape[n]-r}k(e.shape[n]===t.reduce(((e,t)=>e+t)),(()=>"The sum of sizes must match the size of the axis dimension.")),r=t}return r}
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
function Ou(e){return`Received SparseTensor with denseShape[0] = 0 but\n  indices.shape[0] = ${e}`}function Mu(e,t){return`indices(${e}, 0) is invalid: ${t} < 0`}function Uu(e,t,n){return`indices(${e}, 0) is invalid: ${t} >= ${n}`}
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
function Pu(e,t){return`only one output dimension may be -1, not both ${e} and ${t}`}function Wu(e,t){return`size ${e} must be non-negative, not ${t}`}function Bu(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function Lu(e,t){return`Input to reshape is a SparseTensor with ${C(e)}\n  dense values, but the requested shape requires a multiple of ${C(t)}. inputShape=${e} outputShape= ${t}`}function Vu(e,t){return`Input to reshape is a tensor with ${C(e)} dense values, but the requested shape has ${C(t)}. inputShape=${e} outputShape=${t}`}
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
function zu(){return"segment ids must be >= 0"}function Gu(){return"segment ids are not increasing"}function Hu(e,t){return`Segment id ${e} out of range [0, ${t}), possibly because segmentIds input is not sorted.`}function ju(e,t,n){return`Bad: indices[${e}] == ${t} out of range [0, ${n})`}
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
function Xu(e,t){let n,r=!1;for(e<=Qi?(n=e,r=!0):n=Y(e,Math.floor(Math.sqrt(e)));!r;)n>t||n===e?r=!0:n=Y(e,n+1);return n}function qu(e,t,n){const r=[],a=e.length;for(let s=0;s<a;s++)s!==t?r.push(e[s]):r.push(n);return r}function Ku(e,t,n,r){const a=t.shape.length,s=e.shape.length;if(0!==r&&(r<-a||r>a))throw new Error(`Expect batchDims in the range of [-${a}, ${a}], but got ${r}`);if(r<0&&(r+=a),r>s)throw new Error(`batchDims (${r}) must be less than rank(x) (\n    ${s}).`);if(n<r)throw new Error(`batchDims (${r}) must be less than or equal to axis (${n}).`);for(let n=0;n<r;++n)if(e.shape[n]!==t.shape[n])throw new Error(`x.shape[${n}]: ${e.shape[n]} should be equal to indices.shape[${n}]: ${t.shape[n]}.`);const o=e.shape[n],i=[];let u=1,l=1,c=1;for(let t=0;t<r;++t)i.push(e.shape[t]),u*=e.shape[t];for(let t=r;t<n;t++)i.push(e.shape[t]),l*=e.shape[t];for(let e=r;e<a;e++)i.push(t.shape[e]);for(let t=n+1;t<s;t++)i.push(e.shape[t]),c*=e.shape[t];return{batchSize:u,sliceSize:c,outerSize:l,dimSize:o,outputShape:i}}
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
function Yu(e){try{return e.map((e=>jr(e)))}catch(e){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${e}`)}}function Zu(e){return e.map((e=>Hr(e)))}
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
function Qu(e,t){const n=[];for(let e=0;e<t.length;e++)t[e]&&n.push(e);const r=us(e,"int32"),a=us([n.length,e.length],"int32");for(let t=0;t<n.length;t++){const s=r.indexToLoc(n[t]),o=t*e.length;a.values.set(s,o)}return a.toTensor()}}
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
 */,2043:function(e,t,n){var r,a;!function(s,o){"use strict";r=function(){var e=function(){},t="undefined",n=typeof window!==t&&typeof window.navigator!==t&&/Trident\/|MSIE /.test(window.navigator.userAgent),r=["trace","debug","info","warn","error"];function a(e,t){var n=e[t];if("function"==typeof n.bind)return n.bind(e);try{return Function.prototype.bind.call(n,e)}catch(t){return function(){return Function.prototype.apply.apply(n,[e,arguments])}}}function s(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function o(r){return"debug"===r&&(r="log"),typeof console!==t&&("trace"===r&&n?s:void 0!==console[r]?a(console,r):void 0!==console.log?a(console,"log"):e)}function i(t,n){for(var a=0;a<r.length;a++){var s=r[a];this[s]=a<t?e:this.methodFactory(s,t,n)}this.log=this.debug}function u(e,n,r){return function(){typeof console!==t&&(i.call(this,n,r),this[e].apply(this,arguments))}}function l(e,t,n){return o(e)||u.apply(this,arguments)}function c(e,n,a){var s,o=this;n=null==n?"WARN":n;var u="loglevel";function c(e){var n=(r[e]||"silent").toUpperCase();if(typeof window!==t&&u){try{return void(window.localStorage[u]=n)}catch(e){}try{window.document.cookie=encodeURIComponent(u)+"="+n+";"}catch(e){}}}function d(){var e;if(typeof window!==t&&u){try{e=window.localStorage[u]}catch(e){}if(typeof e===t)try{var n=window.document.cookie,r=n.indexOf(encodeURIComponent(u)+"=");-1!==r&&(e=/^([^;]+)/.exec(n.slice(r))[1])}catch(e){}return void 0===o.levels[e]&&(e=void 0),e}}function p(){if(typeof window!==t&&u){try{return void window.localStorage.removeItem(u)}catch(e){}try{window.document.cookie=encodeURIComponent(u)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch(e){}}}"string"==typeof e?u+=":"+e:"symbol"==typeof e&&(u=void 0),o.name=e,o.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},o.methodFactory=a||l,o.getLevel=function(){return s},o.setLevel=function(n,r){if("string"==typeof n&&void 0!==o.levels[n.toUpperCase()]&&(n=o.levels[n.toUpperCase()]),!("number"==typeof n&&n>=0&&n<=o.levels.SILENT))throw"log.setLevel() called with invalid level: "+n;if(s=n,!1!==r&&c(n),i.call(o,n,e),typeof console===t&&n<o.levels.SILENT)return"No console available for logging"},o.setDefaultLevel=function(e){n=e,d()||o.setLevel(e,!1)},o.resetLevel=function(){o.setLevel(n,!1),p()},o.enableAll=function(e){o.setLevel(o.levels.TRACE,e)},o.disableAll=function(e){o.setLevel(o.levels.SILENT,e)};var h=d();null==h&&(h=n),o.setLevel(h,!1)}var d=new c,p={};d.getLogger=function(e){if("symbol"!=typeof e&&"string"!=typeof e||""===e)throw new TypeError("You must supply a name when creating a logger.");var t=p[e];return t||(t=p[e]=new c(e,d.getLevel(),d.methodFactory)),t};var h=typeof window!==t?window.log:void 0;return d.noConflict=function(){return typeof window!==t&&window.log===d&&(window.log=h),d},d.getLoggers=function(){return p},d.default=d,d},void 0===(a="function"==typeof r?r.call(t,n,t,e):r)||(e.exports=a)}()},3720:e=>{e.exports=n;var t=null;try{t=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch(e){}function n(e,t,n){this.low=0|e,this.high=0|t,this.unsigned=!!n}function r(e){return!0===(e&&e.__isLong__)}n.prototype.__isLong__,Object.defineProperty(n.prototype,"__isLong__",{value:!0}),n.isLong=r;var a={},s={};function o(e,t){var n,r,o;return t?(o=0<=(e>>>=0)&&e<256)&&(r=s[e])?r:(n=u(e,(0|e)<0?-1:0,!0),o&&(s[e]=n),n):(o=-128<=(e|=0)&&e<128)&&(r=a[e])?r:(n=u(e,e<0?-1:0,!1),o&&(a[e]=n),n)}function i(e,t){if(isNaN(e))return t?x:g;if(t){if(e<0)return x;if(e>=h)return I}else{if(e<=-f)return w;if(e+1>=f)return k}return e<0?i(-e,t).neg():u(e%p|0,e/p|0,t)}function u(e,t,r){return new n(e,t,r)}n.fromInt=o,n.fromNumber=i,n.fromBits=u;var l=Math.pow;function c(e,t,n){if(0===e.length)throw Error("empty string");if("NaN"===e||"Infinity"===e||"+Infinity"===e||"-Infinity"===e)return g;if("number"==typeof t?(n=t,t=!1):t=!!t,(n=n||10)<2||36<n)throw RangeError("radix");var r;if((r=e.indexOf("-"))>0)throw Error("interior hyphen");if(0===r)return c(e.substring(1),t,n).neg();for(var a=i(l(n,8)),s=g,o=0;o<e.length;o+=8){var u=Math.min(8,e.length-o),d=parseInt(e.substring(o,o+u),n);if(u<8){var p=i(l(n,u));s=s.mul(p).add(i(d))}else s=(s=s.mul(a)).add(i(d))}return s.unsigned=t,s}function d(e,t){return"number"==typeof e?i(e,t):"string"==typeof e?c(e,t):u(e.low,e.high,"boolean"==typeof t?t:e.unsigned)}n.fromString=c,n.fromValue=d;var p=4294967296,h=p*p,f=h/2,m=o(1<<24),g=o(0);n.ZERO=g;var x=o(0,!0);n.UZERO=x;var b=o(1);n.ONE=b;var v=o(1,!0);n.UONE=v;var y=o(-1);n.NEG_ONE=y;var k=u(-1,2147483647,!1);n.MAX_VALUE=k;var I=u(-1,-1,!0);n.MAX_UNSIGNED_VALUE=I;var w=u(0,-2147483648,!1);n.MIN_VALUE=w;var S=n.prototype;S.toInt=function(){return this.unsigned?this.low>>>0:this.low},S.toNumber=function(){return this.unsigned?(this.high>>>0)*p+(this.low>>>0):this.high*p+(this.low>>>0)},S.toString=function(e){if((e=e||10)<2||36<e)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative()){if(this.eq(w)){var t=i(e),n=this.div(t),r=n.mul(t).sub(this);return n.toString(e)+r.toInt().toString(e)}return"-"+this.neg().toString(e)}for(var a=i(l(e,6),this.unsigned),s=this,o="";;){var u=s.div(a),c=(s.sub(u.mul(a)).toInt()>>>0).toString(e);if((s=u).isZero())return c+o;for(;c.length<6;)c="0"+c;o=""+c+o}},S.getHighBits=function(){return this.high},S.getHighBitsUnsigned=function(){return this.high>>>0},S.getLowBits=function(){return this.low},S.getLowBitsUnsigned=function(){return this.low>>>0},S.getNumBitsAbs=function(){if(this.isNegative())return this.eq(w)?64:this.neg().getNumBitsAbs();for(var e=0!=this.high?this.high:this.low,t=31;t>0&&0==(e&1<<t);t--);return 0!=this.high?t+33:t+1},S.isZero=function(){return 0===this.high&&0===this.low},S.eqz=S.isZero,S.isNegative=function(){return!this.unsigned&&this.high<0},S.isPositive=function(){return this.unsigned||this.high>=0},S.isOdd=function(){return 1==(1&this.low)},S.isEven=function(){return 0==(1&this.low)},S.equals=function(e){return r(e)||(e=d(e)),(this.unsigned===e.unsigned||this.high>>>31!=1||e.high>>>31!=1)&&(this.high===e.high&&this.low===e.low)},S.eq=S.equals,S.notEquals=function(e){return!this.eq(e)},S.neq=S.notEquals,S.ne=S.notEquals,S.lessThan=function(e){return this.comp(e)<0},S.lt=S.lessThan,S.lessThanOrEqual=function(e){return this.comp(e)<=0},S.lte=S.lessThanOrEqual,S.le=S.lessThanOrEqual,S.greaterThan=function(e){return this.comp(e)>0},S.gt=S.greaterThan,S.greaterThanOrEqual=function(e){return this.comp(e)>=0},S.gte=S.greaterThanOrEqual,S.ge=S.greaterThanOrEqual,S.compare=function(e){if(r(e)||(e=d(e)),this.eq(e))return 0;var t=this.isNegative(),n=e.isNegative();return t&&!n?-1:!t&&n?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?-1:1:this.sub(e).isNegative()?-1:1},S.comp=S.compare,S.negate=function(){return!this.unsigned&&this.eq(w)?w:this.not().add(b)},S.neg=S.negate,S.add=function(e){r(e)||(e=d(e));var t=this.high>>>16,n=65535&this.high,a=this.low>>>16,s=65535&this.low,o=e.high>>>16,i=65535&e.high,l=e.low>>>16,c=0,p=0,h=0,f=0;return h+=(f+=s+(65535&e.low))>>>16,p+=(h+=a+l)>>>16,c+=(p+=n+i)>>>16,c+=t+o,u((h&=65535)<<16|(f&=65535),(c&=65535)<<16|(p&=65535),this.unsigned)},S.subtract=function(e){return r(e)||(e=d(e)),this.add(e.neg())},S.sub=S.subtract,S.multiply=function(e){if(this.isZero())return g;if(r(e)||(e=d(e)),t)return u(t.mul(this.low,this.high,e.low,e.high),t.get_high(),this.unsigned);if(e.isZero())return g;if(this.eq(w))return e.isOdd()?w:g;if(e.eq(w))return this.isOdd()?w:g;if(this.isNegative())return e.isNegative()?this.neg().mul(e.neg()):this.neg().mul(e).neg();if(e.isNegative())return this.mul(e.neg()).neg();if(this.lt(m)&&e.lt(m))return i(this.toNumber()*e.toNumber(),this.unsigned);var n=this.high>>>16,a=65535&this.high,s=this.low>>>16,o=65535&this.low,l=e.high>>>16,c=65535&e.high,p=e.low>>>16,h=65535&e.low,f=0,x=0,b=0,v=0;return b+=(v+=o*h)>>>16,x+=(b+=s*h)>>>16,b&=65535,x+=(b+=o*p)>>>16,f+=(x+=a*h)>>>16,x&=65535,f+=(x+=s*p)>>>16,x&=65535,f+=(x+=o*c)>>>16,f+=n*h+a*p+s*c+o*l,u((b&=65535)<<16|(v&=65535),(f&=65535)<<16|(x&=65535),this.unsigned)},S.mul=S.multiply,S.divide=function(e){if(r(e)||(e=d(e)),e.isZero())throw Error("division by zero");var n,a,s;if(t)return this.unsigned||-2147483648!==this.high||-1!==e.low||-1!==e.high?u((this.unsigned?t.div_u:t.div_s)(this.low,this.high,e.low,e.high),t.get_high(),this.unsigned):this;if(this.isZero())return this.unsigned?x:g;if(this.unsigned){if(e.unsigned||(e=e.toUnsigned()),e.gt(this))return x;if(e.gt(this.shru(1)))return v;s=x}else{if(this.eq(w))return e.eq(b)||e.eq(y)?w:e.eq(w)?b:(n=this.shr(1).div(e).shl(1)).eq(g)?e.isNegative()?b:y:(a=this.sub(e.mul(n)),s=n.add(a.div(e)));if(e.eq(w))return this.unsigned?x:g;if(this.isNegative())return e.isNegative()?this.neg().div(e.neg()):this.neg().div(e).neg();if(e.isNegative())return this.div(e.neg()).neg();s=g}for(a=this;a.gte(e);){n=Math.max(1,Math.floor(a.toNumber()/e.toNumber()));for(var o=Math.ceil(Math.log(n)/Math.LN2),c=o<=48?1:l(2,o-48),p=i(n),h=p.mul(e);h.isNegative()||h.gt(a);)h=(p=i(n-=c,this.unsigned)).mul(e);p.isZero()&&(p=b),s=s.add(p),a=a.sub(h)}return s},S.div=S.divide,S.modulo=function(e){return r(e)||(e=d(e)),t?u((this.unsigned?t.rem_u:t.rem_s)(this.low,this.high,e.low,e.high),t.get_high(),this.unsigned):this.sub(this.div(e).mul(e))},S.mod=S.modulo,S.rem=S.modulo,S.not=function(){return u(~this.low,~this.high,this.unsigned)},S.and=function(e){return r(e)||(e=d(e)),u(this.low&e.low,this.high&e.high,this.unsigned)},S.or=function(e){return r(e)||(e=d(e)),u(this.low|e.low,this.high|e.high,this.unsigned)},S.xor=function(e){return r(e)||(e=d(e)),u(this.low^e.low,this.high^e.high,this.unsigned)},S.shiftLeft=function(e){return r(e)&&(e=e.toInt()),0==(e&=63)?this:e<32?u(this.low<<e,this.high<<e|this.low>>>32-e,this.unsigned):u(0,this.low<<e-32,this.unsigned)},S.shl=S.shiftLeft,S.shiftRight=function(e){return r(e)&&(e=e.toInt()),0==(e&=63)?this:e<32?u(this.low>>>e|this.high<<32-e,this.high>>e,this.unsigned):u(this.high>>e-32,this.high>=0?0:-1,this.unsigned)},S.shr=S.shiftRight,S.shiftRightUnsigned=function(e){if(r(e)&&(e=e.toInt()),0===(e&=63))return this;var t=this.high;return e<32?u(this.low>>>e|t<<32-e,t>>>e,this.unsigned):u(32===e?t:t>>>e-32,0,this.unsigned)},S.shru=S.shiftRightUnsigned,S.shr_u=S.shiftRightUnsigned,S.toSigned=function(){return this.unsigned?u(this.low,this.high,!1):this},S.toUnsigned=function(){return this.unsigned?this:u(this.low,this.high,!0)},S.toBytes=function(e){return e?this.toBytesLE():this.toBytesBE()},S.toBytesLE=function(){var e=this.high,t=this.low;return[255&t,t>>>8&255,t>>>16&255,t>>>24,255&e,e>>>8&255,e>>>16&255,e>>>24]},S.toBytesBE=function(){var e=this.high,t=this.low;return[e>>>24,e>>>16&255,e>>>8&255,255&e,t>>>24,t>>>16&255,t>>>8&255,255&t]},n.fromBytes=function(e,t,r){return r?n.fromBytesLE(e,t):n.fromBytesBE(e,t)},n.fromBytesLE=function(e,t){return new n(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,t)},n.fromBytesBE=function(e,t){return new n(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],t)}},6377:(e,t,n)=>{var r=n(4832),a=n(8652),s=n(801),o=n(2030),i=n(3618),u=n(9049),l=n(1971);l.alea=r,l.xor128=a,l.xorwow=s,l.xorshift7=o,l.xor4096=i,l.tychei=u,e.exports=l},4832:function(e,t,n){var r;!function(e,a,s){function o(e){var t,n=this,r=(t=4022871197,function(e){e=e.toString();for(var n=0;n<e.length;n++){var r=.02519603282416938*(t+=e.charCodeAt(n));r-=t=r>>>0,t=(r*=t)>>>0,t+=4294967296*(r-=t)}return 2.3283064365386963e-10*(t>>>0)});n.next=function(){var e=2091639*n.s0+2.3283064365386963e-10*n.c;return n.s0=n.s1,n.s1=n.s2,n.s2=e-(n.c=0|e)},n.c=1,n.s0=r(" "),n.s1=r(" "),n.s2=r(" "),n.s0-=r(e),n.s0<0&&(n.s0+=1),n.s1-=r(e),n.s1<0&&(n.s1+=1),n.s2-=r(e),n.s2<0&&(n.s2+=1),r=null}function i(e,t){return t.c=e.c,t.s0=e.s0,t.s1=e.s1,t.s2=e.s2,t}function u(e,t){var n=new o(e),r=t&&t.state,a=n.next;return a.int32=function(){return 4294967296*n.next()|0},a.double=function(){return a()+11102230246251565e-32*(2097152*a()|0)},a.quick=a,r&&("object"==typeof r&&i(r,n),a.state=function(){return i(n,{})}),a}a&&a.exports?a.exports=u:n.amdD&&n.amdO?void 0===(r=function(){return u}.call(t,n,t,a))||(a.exports=r):this.alea=u}(0,e=n.nmd(e),n.amdD)},9049:function(e,t,n){var r;!function(e,a,s){function o(e){var t=this,n="";t.next=function(){var e=t.b,n=t.c,r=t.d,a=t.a;return e=e<<25^e>>>7^n,n=n-r|0,r=r<<24^r>>>8^a,a=a-e|0,t.b=e=e<<20^e>>>12^n,t.c=n=n-r|0,t.d=r<<16^n>>>16^a,t.a=a-e|0},t.a=0,t.b=0,t.c=-1640531527,t.d=1367130551,e===Math.floor(e)?(t.a=e/4294967296|0,t.b=0|e):n+=e;for(var r=0;r<n.length+20;r++)t.b^=0|n.charCodeAt(r),t.next()}function i(e,t){return t.a=e.a,t.b=e.b,t.c=e.c,t.d=e.d,t}function u(e,t){var n=new o(e),r=t&&t.state,a=function(){return(n.next()>>>0)/4294967296};return a.double=function(){do{var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===e);return e},a.int32=n.next,a.quick=a,r&&("object"==typeof r&&i(r,n),a.state=function(){return i(n,{})}),a}a&&a.exports?a.exports=u:n.amdD&&n.amdO?void 0===(r=function(){return u}.call(t,n,t,a))||(a.exports=r):this.tychei=u}(0,e=n.nmd(e),n.amdD)},8652:function(e,t,n){var r;!function(e,a,s){function o(e){var t=this,n="";t.x=0,t.y=0,t.z=0,t.w=0,t.next=function(){var e=t.x^t.x<<11;return t.x=t.y,t.y=t.z,t.z=t.w,t.w^=t.w>>>19^e^e>>>8},e===(0|e)?t.x=e:n+=e;for(var r=0;r<n.length+64;r++)t.x^=0|n.charCodeAt(r),t.next()}function i(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t}function u(e,t){var n=new o(e),r=t&&t.state,a=function(){return(n.next()>>>0)/4294967296};return a.double=function(){do{var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===e);return e},a.int32=n.next,a.quick=a,r&&("object"==typeof r&&i(r,n),a.state=function(){return i(n,{})}),a}a&&a.exports?a.exports=u:n.amdD&&n.amdO?void 0===(r=function(){return u}.call(t,n,t,a))||(a.exports=r):this.xor128=u}(0,e=n.nmd(e),n.amdD)},3618:function(e,t,n){var r;!function(e,a,s){function o(e){var t=this;t.next=function(){var e,n,r=t.w,a=t.X,s=t.i;return t.w=r=r+1640531527|0,n=a[s+34&127],e=a[s=s+1&127],n^=n<<13,e^=e<<17,n^=n>>>15,e^=e>>>12,n=a[s]=n^e,t.i=s,n+(r^r>>>16)|0},function(e,t){var n,r,a,s,o,i=[],u=128;for(t===(0|t)?(r=t,t=null):(t+="\0",r=0,u=Math.max(u,t.length)),a=0,s=-32;s<u;++s)t&&(r^=t.charCodeAt((s+32)%t.length)),0===s&&(o=r),r^=r<<10,r^=r>>>15,r^=r<<4,r^=r>>>13,s>=0&&(o=o+1640531527|0,a=0==(n=i[127&s]^=r+o)?a+1:0);for(a>=128&&(i[127&(t&&t.length||0)]=-1),a=127,s=512;s>0;--s)r=i[a+34&127],n=i[a=a+1&127],r^=r<<13,n^=n<<17,r^=r>>>15,n^=n>>>12,i[a]=r^n;e.w=o,e.X=i,e.i=a}(t,e)}function i(e,t){return t.i=e.i,t.w=e.w,t.X=e.X.slice(),t}function u(e,t){null==e&&(e=+new Date);var n=new o(e),r=t&&t.state,a=function(){return(n.next()>>>0)/4294967296};return a.double=function(){do{var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===e);return e},a.int32=n.next,a.quick=a,r&&(r.X&&i(r,n),a.state=function(){return i(n,{})}),a}a&&a.exports?a.exports=u:n.amdD&&n.amdO?void 0===(r=function(){return u}.call(t,n,t,a))||(a.exports=r):this.xor4096=u}(0,e=n.nmd(e),n.amdD)},2030:function(e,t,n){var r;!function(e,a,s){function o(e){var t=this;t.next=function(){var e,n,r=t.x,a=t.i;return e=r[a],n=(e^=e>>>7)^e<<24,n^=(e=r[a+1&7])^e>>>10,n^=(e=r[a+3&7])^e>>>3,n^=(e=r[a+4&7])^e<<7,e=r[a+7&7],n^=(e^=e<<13)^e<<9,r[a]=n,t.i=a+1&7,n},function(e,t){var n,r=[];if(t===(0|t))r[0]=t;else for(t=""+t,n=0;n<t.length;++n)r[7&n]=r[7&n]<<15^t.charCodeAt(n)+r[n+1&7]<<13;for(;r.length<8;)r.push(0);for(n=0;n<8&&0===r[n];++n);for(8==n?r[7]=-1:r[n],e.x=r,e.i=0,n=256;n>0;--n)e.next()}(t,e)}function i(e,t){return t.x=e.x.slice(),t.i=e.i,t}function u(e,t){null==e&&(e=+new Date);var n=new o(e),r=t&&t.state,a=function(){return(n.next()>>>0)/4294967296};return a.double=function(){do{var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===e);return e},a.int32=n.next,a.quick=a,r&&(r.x&&i(r,n),a.state=function(){return i(n,{})}),a}a&&a.exports?a.exports=u:n.amdD&&n.amdO?void 0===(r=function(){return u}.call(t,n,t,a))||(a.exports=r):this.xorshift7=u}(0,e=n.nmd(e),n.amdD)},801:function(e,t,n){var r;!function(e,a,s){function o(e){var t=this,n="";t.next=function(){var e=t.x^t.x>>>2;return t.x=t.y,t.y=t.z,t.z=t.w,t.w=t.v,(t.d=t.d+362437|0)+(t.v=t.v^t.v<<4^e^e<<1)|0},t.x=0,t.y=0,t.z=0,t.w=0,t.v=0,e===(0|e)?t.x=e:n+=e;for(var r=0;r<n.length+64;r++)t.x^=0|n.charCodeAt(r),r==n.length&&(t.d=t.x<<10^t.x>>>4),t.next()}function i(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t.v=e.v,t.d=e.d,t}function u(e,t){var n=new o(e),r=t&&t.state,a=function(){return(n.next()>>>0)/4294967296};return a.double=function(){do{var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===e);return e},a.int32=n.next,a.quick=a,r&&("object"==typeof r&&i(r,n),a.state=function(){return i(n,{})}),a}a&&a.exports?a.exports=u:n.amdD&&n.amdO?void 0===(r=function(){return u}.call(t,n,t,a))||(a.exports=r):this.xorwow=u}(0,e=n.nmd(e),n.amdD)},1971:(e,t,n)=>{var r;!function(a,s){var o,i=this,u=256,l=s.pow(u,6),c=s.pow(2,52),d=2*c,p=255;function h(e,t,n){var r=[],p=x(g((t=1==t?{entropy:!0}:t||{}).entropy?[e,b(a)]:null==e?function(){try{var e;return o&&(e=o.randomBytes)?e=e(u):(e=new Uint8Array(u),(i.crypto||i.msCrypto).getRandomValues(e)),b(e)}catch(e){var t=i.navigator,n=t&&t.plugins;return[+new Date,i,n,i.screen,b(a)]}}():e,3),r),h=new f(r),v=function(){for(var e=h.g(6),t=l,n=0;e<c;)e=(e+n)*u,t*=u,n=h.g(1);for(;e>=d;)e/=2,t/=2,n>>>=1;return(e+n)/t};return v.int32=function(){return 0|h.g(4)},v.quick=function(){return h.g(4)/4294967296},v.double=v,x(b(h.S),a),(t.pass||n||function(e,t,n,r){return r&&(r.S&&m(r,h),e.state=function(){return m(h,{})}),n?(s.random=e,t):e})(v,p,"global"in t?t.global:this==s,t.state)}function f(e){var t,n=e.length,r=this,a=0,s=r.i=r.j=0,o=r.S=[];for(n||(e=[n++]);a<u;)o[a]=a++;for(a=0;a<u;a++)o[a]=o[s=p&s+e[a%n]+(t=o[a])],o[s]=t;(r.g=function(e){for(var t,n=0,a=r.i,s=r.j,o=r.S;e--;)t=o[a=p&a+1],n=n*u+o[p&(o[a]=o[s=p&s+t])+(o[s]=t)];return r.i=a,r.j=s,n})(u)}function m(e,t){return t.i=e.i,t.j=e.j,t.S=e.S.slice(),t}function g(e,t){var n,r=[],a=typeof e;if(t&&"object"==a)for(n in e)try{r.push(g(e[n],t-1))}catch(e){}return r.length?r:"string"==a?e:e+"\0"}function x(e,t){for(var n,r=e+"",a=0;a<r.length;)t[p&a]=p&(n^=19*t[p&a])+r.charCodeAt(a++);return b(t)}function b(e){return String.fromCharCode.apply(0,e)}if(s.seedrandom=h,x(s.random(),a),e.exports){e.exports=h;try{o=n(5042)}catch(e){}}else void 0===(r=function(){return h}.call(t,n,t,e))||(e.exports=r)}([],Math)},9064:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MODEL_WASM_INFERENCE_DIMENSIONS=t.TFLITE_MODELS_SEG_LITE=t.TFLITE_SIMD_LOADER_NAME=t.TFLITE_LOADER_NAME=t.MODEL_NAME=t.PERSON_PROBABILITY_THRESHOLD=t.HISTORY_COUNT=t.MASK_BLUR_RADIUS=t.DEBOUNCE=t.OUTPUT_FRAMES_PER_SECOND=t.BLUR_FILTER_RADIUS=void 0,t.BLUR_FILTER_RADIUS=15,t.OUTPUT_FRAMES_PER_SECOND=30,t.DEBOUNCE=2,t.MASK_BLUR_RADIUS=5,t.HISTORY_COUNT=5,t.PERSON_PROBABILITY_THRESHOLD=.4,t.MODEL_NAME="selfie_segmentation_landscape.tflite",t.TFLITE_LOADER_NAME="tflite.js",t.TFLITE_SIMD_LOADER_NAME="tflite-simd.js",t.TFLITE_MODELS_SEG_LITE={model96:"segm_lite_v681.tflite",model144:"segm_full_v679.tflite"},t.MODEL_WASM_INFERENCE_DIMENSIONS={model96:{height:96,width:160},model144:{height:144,width:256}}},6707:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,s){function o(e){try{u(r.next(e))}catch(e){s(e)}}function i(e){try{u(r.throw(e))}catch(e){s(e)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,i)}u((r=r.apply(e,t||[])).next())}))},a=this&&this.__generator||function(e,t){var n,r,a,s,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(s){return function(i){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&s[0]?r.return:s[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,s[1])).done)return a;switch(r=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(a=o.trys,(a=a.length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){o.label=s[1];break}if(6===s[0]&&o.label<a[1]){o.label=a[1],a=s;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(s);break}a[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,i])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.BackgroundEffectProcessor=void 0,n(8854),n(1955);var s,o=n(2043),i=n(7557),u=n(9064),l=n(2372),c=n(4611);!function(e){e[e.PAUSED=0]="PAUSED",e[e.EFFECT_APPLIED=1]="EFFECT_APPLIED",e[e.INPUT_FORWARDING=2]="INPUT_FORWARDING"}(s||(s={}));var d=function(){function e(e){var t=this;if(this._effectEnabled=!1,this._outputState=s.PAUSED,this._useWasm="boolean"!=typeof e.useWasm||e.useWasm,this._outputFramesPerSecond="number"==typeof e.frameRate?e.frameRate:u.OUTPUT_FRAMES_PER_SECOND,"string"!=typeof e.assetsPath)throw new Error("assetsPath parameter is missing");var n=e.assetsPath;"/"!==(null==n?void 0:n[n.length-1])&&(n+="/"),this._assetsPath=n,this._inputVideoElement=document.createElement("video"),this._outputCanvasElement=document.createElement("canvas"),this._outputCanvasCtx=this._outputCanvasElement.getContext("2d"),this._maskFrameTimerWorker=new Worker(i.timerWorkerScript,{name:"BackgroundEffectWorker"}),this._maskFrameTimerWorker.onmessage=function(e){e.data.id===i.TIMEOUT_TICK&&t.renderFrame()}}return Object.defineProperty(e.prototype,"paused",{get:function(){return this._outputState===s.PAUSED},enumerable:!1,configurable:!0}),e.prototype.pauseStreamProcessing=function(e){this.setOutputState(e?s.PAUSED:this.effectEnabled?s.EFFECT_APPLIED:s.INPUT_FORWARDING)},Object.defineProperty(e.prototype,"effectEnabled",{get:function(){return this._effectEnabled},enumerable:!1,configurable:!0}),e.prototype.enableEffect=function(e){this.effectEnabled!==e&&(this._effectEnabled=e,o.default.debug("effectEnabled changed to",e),this._outputState!==s.PAUSED&&this.setOutputState(e?s.EFFECT_APPLIED:s.INPUT_FORWARDING))},e.prototype.loadEffect=function(e){return r(this,void 0,void 0,(function(){var t,n;return a(this,(function(r){switch(r.label){case 0:return this._tflite?[3,2]:(o.default.debug("[loadEffect] loading tflite"),t=this._useWasm?u.TFLITE_MODELS_SEG_LITE.model144:u.TFLITE_MODELS_SEG_LITE.model96,this._segmentationMaskDimensions=this._useWasm?u.MODEL_WASM_INFERENCE_DIMENSIONS.model144:u.MODEL_WASM_INFERENCE_DIMENSIONS.model96,n=this,[4,(0,l.loadTFLite)(this._assetsPath+u.TFLITE_SIMD_LOADER_NAME,this._assetsPath+t)]);case 1:n._tflite=r.sent(),r.label=2;case 2:return o.default.debug("[loadEffect] effect: ",e.constructor.name),this._effect=e,this._effect.init(this._tflite,this._segmentationMaskDimensions,this._inputVideoElement,this._outputCanvasCtx),[2]}}))}))},e.prototype.setOutputState=function(e){e!==this._outputState&&(o.default.debug("[outputState] changed from",s[this._outputState],"to",s[e]),this._outputState=e,this.applyOutputState())},e.prototype.applyOutputState=function(){this.stopEffectProcessing(),this._inputForwardEffect&&(this._inputForwardEffect.stopDirectForwardingInputToOutput(),this._inputForwardEffect=null),this._outputState===s.EFFECT_APPLIED&&(o.default.debug("[applyOutputState] triggerEffectProcessing for background effect"),this.triggerEffectProcessing()),this._outputState===s.INPUT_FORWARDING&&((0,c.supportsDirectForwarding)()?(o.default.debug("[applyOutputState] forwardInputToOutput"),this._inputForwardEffect=new c.VideoTrackToCanvas(this._inputVideoTrack,this._outputCanvasCtx),this._inputForwardEffect.startDirectForwardingInputToOutput()):(o.default.debug("[applyOutputState] triggerEffectProcessing for input forwarding"),this.triggerEffectProcessing()))},e.prototype.triggerEffectProcessing=function(){this._maskFrameTimerWorker.postMessage({id:i.SET_TIMEOUT,timeMs:1e3/this._outputFramesPerSecond})},e.prototype.stopEffectProcessing=function(){this._maskFrameTimerWorker.postMessage({id:i.CLEAR_TIMEOUT})},Object.defineProperty(e.prototype,"inputStream",{get:function(){return this._inputStream},enumerable:!1,configurable:!0}),e.prototype.setInputStream=function(e){var t,n,r,a,s=this;if(o.default.debug("[inputStream] setting input stream",e),!(null===(t=null==e?void 0:e.getVideoTracks)||void 0===t?void 0:t.call(e)[0]))throw o.default.warn("[inputStream] - Media Stream is null or doesn't contain any video tracks"),new Error("Invalid input stream is missing a video track: ".concat(e));this.disconnectInputVideoElement(),this._inputForwardEffect&&(this._inputForwardEffect.stopDirectForwardingInputToOutput(),this._inputForwardEffect=null),this._inputStream=e,this._inputVideoTrack=e.getVideoTracks()[0];var i=null!==(a=null===(r=(n=this._inputVideoTrack).getSettings)||void 0===r?void 0:r.call(n))&&void 0!==a?a:this._inputVideoTrack.getConstraints(),u=i.width,l=i.height;o.default.debug("[inputStream] video track settings",this._inputVideoTrack.getSettings()),o.default.debug("[inputStream] height :",l),o.default.debug("[inputStream] width :",u),this._outputCanvasElement.width=Number(u),this._outputCanvasElement.height=Number(l),this._inputVideoElement.width=Number(u),this._inputVideoElement.height=Number(l),this._inputVideoElement.autoplay=!0,this._inputVideoElement.srcObject=e,this._inputVideoElement.onloadeddata=function(){o.default.debug("[_inputVideoElement.onloadeddata] done"),s.applyOutputState()},o.default.debug("[inputStream] this._inputVideoElement.width :",this._inputVideoElement.width),o.default.debug("[inputStream] this._inputVideoElement.height :",this._inputVideoElement.height),o.default.debug("[inputStream] this._outputCanvasElement.width :",this._outputCanvasElement.width),o.default.debug("[inputStream] this._outputCanvasElement.height :",this._outputCanvasElement.height)},Object.defineProperty(e.prototype,"outputStream",{get:function(){return this._outputCanvasElement.captureStream(Number(this._outputFramesPerSecond))},enumerable:!1,configurable:!0}),e.prototype.renderFrame=function(){var e;this._outputState===s.EFFECT_APPLIED?(null===(e=this._effect)||void 0===e||e.applyEffect(),this.triggerEffectProcessing()):this._outputState!==s.INPUT_FORWARDING||this._inputForwardEffect||(this._outputCanvasCtx.globalCompositeOperation="copy",this._outputCanvasCtx.filter="none",this._outputCanvasCtx.drawImage(this._inputVideoElement,0,0),this.triggerEffectProcessing())},e.prototype.disconnectInputVideoElement=function(){this._inputVideoElement.pause(),this._inputVideoElement.srcObject=null,this._inputVideoTrack&&this._inputVideoTrack.stop()},e.prototype.destroy=function(){o.default.debug("destroy"),this.pauseStreamProcessing(!0),this._maskFrameTimerWorker.terminate(),this.disconnectInputVideoElement()},e}();t.BackgroundEffectProcessor=d},2372:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,s){function o(e){try{u(r.next(e))}catch(e){s(e)}}function i(e){try{u(r.throw(e))}catch(e){s(e)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,i)}u((r=r.apply(e,t||[])).next())}))},a=this&&this.__generator||function(e,t){var n,r,a,s,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(s){return function(i){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&s[0]?r.return:s[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,s[1])).done)return a;switch(r=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(a=o.trys,(a=a.length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){o.label=s[1];break}if(6===s[0]&&o.label<a[1]){o.label=a[1],a=s;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(s);break}a[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,i])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.loadTFLite=void 0;var s=n(2043);function o(e){return r(this,void 0,Promise,(function(){var t;return a(this,(function(n){switch(n.label){case 0:return[4,i(e)];case 1:n.sent(),n.label=2;case 2:return n.trys.push([2,4,,5]),[4,window.createTFLiteSIMDModule()];case 3:return t=n.sent(),[3,5];case 4:return n.sent(),s.default.warn("SIMD not supported. You may experience poor quality of background replacement."),[3,5];case 5:return[2,t]}}))}))}function i(e){return r(this,void 0,Promise,(function(){return a(this,(function(t){return[2,new Promise((function(t,n){var r=document.createElement("script");r.onload=function(){return t()},r.onerror=n,document.head.append(r),r.src=e}))]}))}))}t.loadTFLite=function(e,t){return r(this,void 0,Promise,(function(){var n,r,i,u,l;return a(this,(function(a){switch(a.label){case 0:return[4,Promise.all([o(e),fetch(t)])];case 1:if(n=a.sent(),r=n[0],i=n[1],s.default.debug("ModelResponse",i),!r)throw s.default.error("[BackgroundEffect] - Tflite module not supported or available"),new Error("[BackgroundEffect] - Tflite module not supported or available");return[4,i.arrayBuffer()];case 2:return u=a.sent(),l=r._getModelBufferMemoryOffset(),r.HEAPU8.set(new Uint8Array(u),l),r._loadModel(u.byteLength),[2,r]}}))}))}},7557:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.timerWorkerScript=t.TIMEOUT_TICK=t.CLEAR_TIMEOUT=t.SET_TIMEOUT=void 0,t.SET_TIMEOUT=1,t.CLEAR_TIMEOUT=2,t.TIMEOUT_TICK=3;var n="\n     let timer;\n \n     onmessage = function(request) {\n         switch (request.data.id) {\n         case ".concat(t.SET_TIMEOUT,": {\n             timer = setTimeout(() => {\n                 postMessage({ id: ").concat(t.TIMEOUT_TICK," });\n             }, request.data.timeMs);\n             break;\n         }\n         case ").concat(t.CLEAR_TIMEOUT,": {\n             if (timer) {\n                 clearTimeout(timer);\n             }\n             break;\n         }\n         }\n     };\n ");t.timerWorkerScript=URL.createObjectURL(new Blob([n],{type:"application/javascript"}))},4611:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,s){function o(e){try{u(r.next(e))}catch(e){s(e)}}function i(e){try{u(r.throw(e))}catch(e){s(e)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,i)}u((r=r.apply(e,t||[])).next())}))},a=this&&this.__generator||function(e,t){var n,r,a,s,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(s){return function(i){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&s[0]?r.return:s[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,s[1])).done)return a;switch(r=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(a=o.trys,(a=a.length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){o.label=s[1];break}if(6===s[0]&&o.label<a[1]){o.label=a[1],a=s;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(s);break}a[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,i])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.VideoTrackToCanvas=t.supportsDirectForwarding=void 0;var s=n(2043);function o(){return!!window.MediaStreamTrackProcessor}t.supportsDirectForwarding=o;var i=function(){function e(e,t){this.enabled=!1,this.inputVideoTrack=e,this.outputCanvasCtx=t}return e.prototype.startDirectForwardingInputToOutput=function(){if(this.enabled=!0,!o())throw new Error("Your browser doesn't support the MediaStreamTrackProcessor API yet");s.default.debug("forwardInputToOutput");var e=new MediaStreamTrackProcessor({track:this.inputVideoTrack}).readable.getReader();this.writeFramesToOutput(e)},e.prototype.stopDirectForwardingInputToOutput=function(){this.enabled=!1},e.prototype.writeFramesToOutput=function(e){return r(this,void 0,void 0,(function(){var t,n,r,o;return a(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,e.read()];case 1:return t=a.sent(),n=t.done,r=t.value,n?[2]:this.enabled?(null!=this.outputCanvasCtx&&(this.outputCanvasCtx.canvas.width===r.displayWidth&&this.outputCanvasCtx.canvas.height===r.displayHeight||(this.outputCanvasCtx.canvas.width=r.displayWidth,this.outputCanvasCtx.canvas.height=r.displayHeight),this.outputCanvasCtx.filter="none",this.outputCanvasCtx.globalCompositeOperation="copy",this.outputCanvasCtx.drawImage(r,0,0),r.close()),this.writeFramesToOutput(e),[3,3]):(r.close(),[2]);case 2:return o=a.sent(),s.default.error("Error reading video stream: "+o,o),[3,3];case 3:return[2]}}))}))},e}();t.VideoTrackToCanvas=i},6217:function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0}),t.BackgroundBlurEffect=void 0;var s=n(2636),o=n(9064),i=n(2043),u=function(e){function t(t){var n=e.call(this,t)||this;return n.blurFilterRadius=null==t?void 0:t.blurFilterRadius,n}return a(t,e),Object.defineProperty(t.prototype,"blurFilterRadius",{get:function(){return this._blurFilterRadius},set:function(e){e||(i.default.warn("Valid blur filter radius not found. Using ".concat(o.BLUR_FILTER_RADIUS," as default.")),e=o.BLUR_FILTER_RADIUS),this._blurFilterRadius=e},enumerable:!1,configurable:!0}),t.prototype.drawBackground=function(e,t){t.filter="blur(".concat(this._blurFilterRadius,"px)"),t.drawImage(e,0,0)},t}(s.BackgroundEffect);t.BackgroundBlurEffect=u},2636:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BackgroundEffect=void 0,n(8854),n(1955);var r=n(2043),a=n(9064),s=function(){function e(e){r.default.setLevel("DEBUG"),this.maskBlurRadius=null==e?void 0:e.maskBlurRadius,this._segmentationMaskCanvas=document.createElement("canvas"),this._segmentationMaskCtx=this._segmentationMaskCanvas.getContext("2d"),r.default.debug("[BackgroundEffect] this._segmentationMaskCanvas.width :",this._segmentationMaskCanvas.width),r.default.debug("[BackgroundEffect] this._segmentationMaskCanvas.height :",this._segmentationMaskCanvas.height)}return e.prototype.init=function(e,t,n,a){this._tflite=e,this._inputVideoElement=n,this._outputCanvasCtx=a,this._segmentationMask=new ImageData(t.width,t.height),this._segmentationMaskCanvas.width=this._segmentationMask.width,this._segmentationMaskCanvas.height=this._segmentationMask.height,r.default.debug("[BackgroundEffect.init] this._inputVideoElement.width :",this._inputVideoElement.width),r.default.debug("[BackgroundEffect.init] this._inputVideoElement.height :",this._inputVideoElement.height),r.default.debug("[BackgroundEffect.init] this._segmentationMask.width :",this._segmentationMask.width),r.default.debug("[BackgroundEffect.init] this._segmentationMask.height :",this._segmentationMask.height)},Object.defineProperty(e.prototype,"maskBlurRadius",{get:function(){return this._maskBlurRadius},set:function(e){("number"!=typeof e||e<0)&&(r.default.warn("Valid mask blur radius not found. Using ".concat(a.MASK_BLUR_RADIUS," as default.")),e=a.MASK_BLUR_RADIUS),this._maskBlurRadius=e},enumerable:!1,configurable:!0}),e.prototype.applyEffect=function(){if(!this._tflite)throw new Error("Effect has to be initialized before it can be applied");this.resizeSource(),this.runInference(),this.runPostProcessing()},e.prototype.resizeSource=function(){this._segmentationMaskCtx.drawImage(this._inputVideoElement,0,0,this._inputVideoElement.width,this._inputVideoElement.height,0,0,this._segmentationMask.width,this._segmentationMask.height);for(var e=this._segmentationMaskCtx.getImageData(0,0,this._segmentationMask.width,this._segmentationMask.height),t=this._tflite._getInputMemoryOffset()/4,n=this._segmentationMask.width*this._segmentationMask.height,r=0;r<n;r++)this._tflite.HEAPF32[t+3*r]=e.data[4*r]/255,this._tflite.HEAPF32[t+3*r+1]=e.data[4*r+1]/255,this._tflite.HEAPF32[t+3*r+2]=e.data[4*r+2]/255},e.prototype.runInference=function(){this._tflite._runInference();for(var e=this._segmentationMask.width*this._segmentationMask.height,t=this._tflite._getOutputMemoryOffset()/4,n=0;n<e;n++){var r=this._tflite.HEAPF32[t+2*n],a=this._tflite.HEAPF32[t+2*n+1],s=Math.max(r,a),o=Math.exp(r-s),i=Math.exp(a-s);this._segmentationMask.data[4*n+3]=255*i/(o+i)}this._segmentationMaskCtx.putImageData(this._segmentationMask,0,0)},e.prototype.runPostProcessing=function(){this._outputCanvasCtx&&(this._outputCanvasCtx.filter="blur(".concat(this._maskBlurRadius,"px)"),this._outputCanvasCtx.globalCompositeOperation="copy",this._outputCanvasCtx.drawImage(this._segmentationMaskCanvas,0,0,this._segmentationMask.width,this._segmentationMask.height,0,0,this._inputVideoElement.width,this._inputVideoElement.height),this._outputCanvasCtx.globalCompositeOperation="source-in",this._outputCanvasCtx.filter="none",this._outputCanvasCtx.drawImage(this._inputVideoElement,0,0),this._outputCanvasCtx.globalCompositeOperation="destination-over",this.drawBackground(this._inputVideoElement,this._outputCanvasCtx))},e}();t.BackgroundEffect=s},9382:function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0}),t.VirtualBackgroundEffect=void 0;var s=n(2636),o=n(2890),i=n(2043),u=function(e){function t(t){var n,r=this;return(r=e.call(this,t)||this).backgroundImage=null===(n=t.virtualBackground)||void 0===n?void 0:n.backgroundImage,r.fitType=t.fitType||o.ImageFit.Fill,r}return a(t,e),Object.defineProperty(t.prototype,"backgroundImage",{get:function(){return this._backgroundImage},set:function(e){if(!e||!e.complete||!e.naturalHeight)throw new Error("Invalid image. Make sure that the image is an HTMLImageElement and has been successfully loaded");this._backgroundImage=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"fitType",{get:function(){return this._fitType},set:function(e){Object.keys(o.ImageFit).includes(e)||(i.default.warn("Valid fitType not found. Using '".concat(o.ImageFit.Fill,"' as default.")),e=o.ImageFit.Fill),this._fitType=e},enumerable:!1,configurable:!0}),t.prototype.drawBackground=function(e,t){var n=this._backgroundImage,r=n.naturalWidth,a=n.naturalHeight,s=t.canvas.width,u=t.canvas.height;if(i.default.debug("img width",r),i.default.debug("img height",a),i.default.debug("canvas - w",s),i.default.debug("canvas- h",u),this._fitType===o.ImageFit.Fill)t.drawImage(n,0,0,r,a,0,0,s,u);else if(this._fitType===o.ImageFit.None)t.drawImage(n,0,0,r,a);else if(this._fitType===o.ImageFit.Contain){var l=this.getFitPosition(r,a,s,u,o.ImageFit.Contain),c=l.x,d=l.y,p=l.w,h=l.h;t.drawImage(n,0,0,r,a,c,d,p,h)}else if(this._fitType===o.ImageFit.Cover){var f=this.getFitPosition(r,a,s,u,o.ImageFit.Cover);c=f.x,d=f.y,p=f.w,h=f.h;t.drawImage(n,0,0,r,a,c,d,p,h)}},t.prototype.getFitPosition=function(e,t,n,r,a){var s=n/e,i=n,u=s*t;return(a===o.ImageFit.Contain&&u>r||a===o.ImageFit.Cover&&r>u)&&(i*=s=r/u,u=r),{x:(n-i)/2,y:(r-u)/2,w:i,h:u}},t}(s.BackgroundEffect);t.VirtualBackgroundEffect=u},2890:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ImageFit=void 0,function(e){e.Contain="Contain",e.Cover="Cover",e.Fill="Fill",e.None="None"}(t.ImageFit||(t.ImageFit={}))},225:(e,t)=>{"use strict";function n(){return!!window.OffscreenCanvas&&!/Mobi/i.test(window.navigator.userAgent)&&!!window.chrome}Object.defineProperty(t,"__esModule",{value:!0}),t.isSupported=t.isBrowserSupported=void 0,t.isBrowserSupported=n,t.isSupported=n()},5410:()=>{},8628:()=>{},5042:()=>{}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var s=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.loaded=!0,s.exports}n.amdD=function(){throw new Error("define cannot be used indirect")},n.amdO={},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e);var r={};return(()=>{"use strict";var e=r;Object.defineProperty(e,"__esModule",{value:!0}),e.VirtualBackgroundEffectOptions=e.VirtualBackgroundEffect=e.BackgroundBlurEffectOptions=e.BackgroundBlurEffect=e.BackgroundEffectProcessor=e.isSupported=void 0;var t=n(2043),a=n(6217);Object.defineProperty(e,"BackgroundBlurEffect",{enumerable:!0,get:function(){return a.BackgroundBlurEffect}}),Object.defineProperty(e,"BackgroundBlurEffectOptions",{enumerable:!0,get:function(){return a.BackgroundBlurEffectOptions}});var s=n(9382);Object.defineProperty(e,"VirtualBackgroundEffect",{enumerable:!0,get:function(){return s.VirtualBackgroundEffect}}),Object.defineProperty(e,"VirtualBackgroundEffectOptions",{enumerable:!0,get:function(){return s.VirtualBackgroundEffectOptions}});var o=n(225);Object.defineProperty(e,"isSupported",{enumerable:!0,get:function(){return o.isSupported}});var i=n(6707);Object.defineProperty(e,"BackgroundEffectProcessor",{enumerable:!0,get:function(){return i.BackgroundEffectProcessor}}),window.OT=window.OT||{},t.default.setLevel("WARN"),window.OT.VideoEffects={isSupported:o.isSupported,BackgroundEffectProcessor:i.BackgroundEffectProcessor,BackgroundBlurEffect:a.BackgroundBlurEffect,VirtualBackgroundEffect:s.VirtualBackgroundEffect}})(),r})()}));
//# sourceMappingURL=vonage-video-effects.js.map