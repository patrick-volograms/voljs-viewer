(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();function Hv(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ks={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qs=Symbol.for("react.element"),Gv=Symbol.for("react.portal"),Wv=Symbol.for("react.fragment"),jv=Symbol.for("react.strict_mode"),Xv=Symbol.for("react.profiler"),qv=Symbol.for("react.provider"),Yv=Symbol.for("react.context"),$v=Symbol.for("react.forward_ref"),Zv=Symbol.for("react.suspense"),Kv=Symbol.for("react.memo"),Qv=Symbol.for("react.lazy"),Td=Symbol.iterator;function Jv(n){return n===null||typeof n!="object"?null:(n=Td&&n[Td]||n["@@iterator"],typeof n=="function"?n:null)}var rm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},om=Object.assign,sm={};function Ko(n,e,t){this.props=n,this.context=e,this.refs=sm,this.updater=t||rm}Ko.prototype.isReactComponent={};Ko.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Ko.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function am(){}am.prototype=Ko.prototype;function Sf(n,e,t){this.props=n,this.context=e,this.refs=sm,this.updater=t||rm}var Mf=Sf.prototype=new am;Mf.constructor=Sf;om(Mf,Ko.prototype);Mf.isPureReactComponent=!0;var Cd=Array.isArray,lm=Object.prototype.hasOwnProperty,Ef={current:null},um={key:!0,ref:!0,__self:!0,__source:!0};function cm(n,e,t){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)lm.call(e,i)&&!um.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];r.children=u}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Qs,type:n,key:o,ref:s,props:r,_owner:Ef.current}}function e0(n,e){return{$$typeof:Qs,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function bf(n){return typeof n=="object"&&n!==null&&n.$$typeof===Qs}function t0(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Ld=/\/+/g;function au(n,e){return typeof n=="object"&&n!==null&&n.key!=null?t0(""+n.key):e.toString(36)}function Za(n,e,t,i,r){var o=typeof n;(o==="undefined"||o==="boolean")&&(n=null);var s=!1;if(n===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(n.$$typeof){case Qs:case Gv:s=!0}}if(s)return s=n,r=r(s),n=i===""?"."+au(s,0):i,Cd(r)?(t="",n!=null&&(t=n.replace(Ld,"$&/")+"/"),Za(r,e,t,"",function(c){return c})):r!=null&&(bf(r)&&(r=e0(r,t+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(Ld,"$&/")+"/")+n)),e.push(r)),1;if(s=0,i=i===""?".":i+":",Cd(n))for(var a=0;a<n.length;a++){o=n[a];var u=i+au(o,a);s+=Za(o,e,t,u,r)}else if(u=Jv(n),typeof u=="function")for(n=u.call(n),a=0;!(o=n.next()).done;)o=o.value,u=i+au(o,a++),s+=Za(o,e,t,u,r);else if(o==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function ca(n,e,t){if(n==null)return n;var i=[],r=0;return Za(n,i,"","",function(o){return e.call(t,o,r++)}),i}function n0(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var rn={current:null},Ka={transition:null},i0={ReactCurrentDispatcher:rn,ReactCurrentBatchConfig:Ka,ReactCurrentOwner:Ef};Ye.Children={map:ca,forEach:function(n,e,t){ca(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return ca(n,function(){e++}),e},toArray:function(n){return ca(n,function(e){return e})||[]},only:function(n){if(!bf(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ye.Component=Ko;Ye.Fragment=Wv;Ye.Profiler=Xv;Ye.PureComponent=Sf;Ye.StrictMode=jv;Ye.Suspense=Zv;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=i0;Ye.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=om({},n.props),r=n.key,o=n.ref,s=n._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Ef.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(u in e)lm.call(e,u)&&!um.hasOwnProperty(u)&&(i[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)i.children=t;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Qs,type:n.type,key:r,ref:o,props:i,_owner:s}};Ye.createContext=function(n){return n={$$typeof:Yv,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:qv,_context:n},n.Consumer=n};Ye.createElement=cm;Ye.createFactory=function(n){var e=cm.bind(null,n);return e.type=n,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(n){return{$$typeof:$v,render:n}};Ye.isValidElement=bf;Ye.lazy=function(n){return{$$typeof:Qv,_payload:{_status:-1,_result:n},_init:n0}};Ye.memo=function(n,e){return{$$typeof:Kv,type:n,compare:e===void 0?null:e}};Ye.startTransition=function(n){var e=Ka.transition;Ka.transition={};try{n()}finally{Ka.transition=e}};Ye.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ye.useCallback=function(n,e){return rn.current.useCallback(n,e)};Ye.useContext=function(n){return rn.current.useContext(n)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(n){return rn.current.useDeferredValue(n)};Ye.useEffect=function(n,e){return rn.current.useEffect(n,e)};Ye.useId=function(){return rn.current.useId()};Ye.useImperativeHandle=function(n,e,t){return rn.current.useImperativeHandle(n,e,t)};Ye.useInsertionEffect=function(n,e){return rn.current.useInsertionEffect(n,e)};Ye.useLayoutEffect=function(n,e){return rn.current.useLayoutEffect(n,e)};Ye.useMemo=function(n,e){return rn.current.useMemo(n,e)};Ye.useReducer=function(n,e,t){return rn.current.useReducer(n,e,t)};Ye.useRef=function(n){return rn.current.useRef(n)};Ye.useState=function(n){return rn.current.useState(n)};Ye.useSyncExternalStore=function(n,e,t){return rn.current.useSyncExternalStore(n,e,t)};Ye.useTransition=function(){return rn.current.useTransition()};Ye.version="18.2.0";(function(n){n.exports=Ye})(Ks);const r0=Hv(Ks.exports);var yc={},fm={exports:{}},bn={},dm={exports:{}},hm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(V,B){var G=V.length;V.push(B);e:for(;0<G;){var $=G-1>>>1,J=V[$];if(0<r(J,B))V[$]=B,V[G]=J,G=$;else break e}}function t(V){return V.length===0?null:V[0]}function i(V){if(V.length===0)return null;var B=V[0],G=V.pop();if(G!==B){V[0]=G;e:for(var $=0,J=V.length,he=J>>>1;$<he;){var xe=2*($+1)-1,De=V[xe],te=xe+1,Xe=V[te];if(0>r(De,G))te<J&&0>r(Xe,De)?(V[$]=Xe,V[te]=G,$=te):(V[$]=De,V[xe]=G,$=xe);else if(te<J&&0>r(Xe,G))V[$]=Xe,V[te]=G,$=te;else break e}}return B}function r(V,B){var G=V.sortIndex-B.sortIndex;return G!==0?G:V.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;n.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();n.unstable_now=function(){return s.now()-a}}var u=[],c=[],d=1,p=null,h=3,x=!1,S=!1,g=!1,m=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(V){for(var B=t(c);B!==null;){if(B.callback===null)i(c);else if(B.startTime<=V)i(c),B.sortIndex=B.expirationTime,e(u,B);else break;B=t(c)}}function b(V){if(g=!1,E(V),!S)if(t(u)!==null)S=!0,K(L);else{var B=t(c);B!==null&&se(b,B.startTime-V)}}function L(V,B){S=!1,g&&(g=!1,_(T),T=-1),x=!0;var G=h;try{for(E(B),p=t(u);p!==null&&(!(p.expirationTime>B)||V&&!Y());){var $=p.callback;if(typeof $=="function"){p.callback=null,h=p.priorityLevel;var J=$(p.expirationTime<=B);B=n.unstable_now(),typeof J=="function"?p.callback=J:p===t(u)&&i(u),E(B)}else i(u);p=t(u)}if(p!==null)var he=!0;else{var xe=t(c);xe!==null&&se(b,xe.startTime-B),he=!1}return he}finally{p=null,h=G,x=!1}}var k=!1,z=null,T=-1,N=5,H=-1;function Y(){return!(n.unstable_now()-H<N)}function le(){if(z!==null){var V=n.unstable_now();H=V;var B=!0;try{B=z(!0,V)}finally{B?fe():(k=!1,z=null)}}else k=!1}var fe;if(typeof w=="function")fe=function(){w(le)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,oe=q.port2;q.port1.onmessage=le,fe=function(){oe.postMessage(null)}}else fe=function(){m(le,0)};function K(V){z=V,k||(k=!0,fe())}function se(V,B){T=m(function(){V(n.unstable_now())},B)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(V){V.callback=null},n.unstable_continueExecution=function(){S||x||(S=!0,K(L))},n.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<V?Math.floor(1e3/V):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(u)},n.unstable_next=function(V){switch(h){case 1:case 2:case 3:var B=3;break;default:B=h}var G=h;h=B;try{return V()}finally{h=G}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(V,B){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var G=h;h=V;try{return B()}finally{h=G}},n.unstable_scheduleCallback=function(V,B,G){var $=n.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?$+G:$):G=$,V){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=G+J,V={id:d++,callback:B,priorityLevel:V,startTime:G,expirationTime:J,sortIndex:-1},G>$?(V.sortIndex=G,e(c,V),t(u)===null&&V===t(c)&&(g?(_(T),T=-1):g=!0,se(b,G-$))):(V.sortIndex=J,e(u,V),S||x||(S=!0,K(L))),V},n.unstable_shouldYield=Y,n.unstable_wrapCallback=function(V){var B=h;return function(){var G=h;h=B;try{return V.apply(this,arguments)}finally{h=G}}}})(hm);(function(n){n.exports=hm})(dm);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm=Ks.exports,En=dm.exports;function ce(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mm=new Set,Rs={};function Xr(n,e){Uo(n,e),Uo(n+"Capture",e)}function Uo(n,e){for(Rs[n]=e,n=0;n<e.length;n++)mm.add(e[n])}var Ri=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xc=Object.prototype.hasOwnProperty,o0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ad={},Pd={};function s0(n){return xc.call(Pd,n)?!0:xc.call(Ad,n)?!1:o0.test(n)?Pd[n]=!0:(Ad[n]=!0,!1)}function a0(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function l0(n,e,t,i){if(e===null||typeof e>"u"||a0(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function on(n,e,t,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Gt[n]=new on(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Gt[e]=new on(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Gt[n]=new on(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Gt[n]=new on(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Gt[n]=new on(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Gt[n]=new on(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Gt[n]=new on(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Gt[n]=new on(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Gt[n]=new on(n,5,!1,n.toLowerCase(),null,!1,!1)});var Tf=/[\-:]([a-z])/g;function Cf(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Tf,Cf);Gt[e]=new on(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Tf,Cf);Gt[e]=new on(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Tf,Cf);Gt[e]=new on(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Gt[n]=new on(n,1,!1,n.toLowerCase(),null,!1,!1)});Gt.xlinkHref=new on("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Gt[n]=new on(n,1,!1,n.toLowerCase(),null,!0,!0)});function Lf(n,e,t,i){var r=Gt.hasOwnProperty(e)?Gt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(l0(e,t,r,i)&&(t=null),i||r===null?s0(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Ni=pm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fa=Symbol.for("react.element"),_o=Symbol.for("react.portal"),yo=Symbol.for("react.fragment"),Af=Symbol.for("react.strict_mode"),wc=Symbol.for("react.profiler"),gm=Symbol.for("react.provider"),vm=Symbol.for("react.context"),Pf=Symbol.for("react.forward_ref"),Sc=Symbol.for("react.suspense"),Mc=Symbol.for("react.suspense_list"),Df=Symbol.for("react.memo"),Zi=Symbol.for("react.lazy"),_m=Symbol.for("react.offscreen"),Dd=Symbol.iterator;function rs(n){return n===null||typeof n!="object"?null:(n=Dd&&n[Dd]||n["@@iterator"],typeof n=="function"?n:null)}var yt=Object.assign,lu;function ms(n){if(lu===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);lu=e&&e[1]||""}return`
`+lu+n}var uu=!1;function cu(n,e){if(!n||uu)return"";uu=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var u=`
`+r[s].replace(" at new "," at ");return n.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",n.displayName)),u}while(1<=s&&0<=a);break}}}finally{uu=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?ms(n):""}function u0(n){switch(n.tag){case 5:return ms(n.type);case 16:return ms("Lazy");case 13:return ms("Suspense");case 19:return ms("SuspenseList");case 0:case 2:case 15:return n=cu(n.type,!1),n;case 11:return n=cu(n.type.render,!1),n;case 1:return n=cu(n.type,!0),n;default:return""}}function Ec(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case yo:return"Fragment";case _o:return"Portal";case wc:return"Profiler";case Af:return"StrictMode";case Sc:return"Suspense";case Mc:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case vm:return(n.displayName||"Context")+".Consumer";case gm:return(n._context.displayName||"Context")+".Provider";case Pf:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Df:return e=n.displayName||null,e!==null?e:Ec(n.type)||"Memo";case Zi:e=n._payload,n=n._init;try{return Ec(n(e))}catch{}}return null}function c0(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ec(e);case 8:return e===Af?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function dr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ym(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function f0(n){var e=ym(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,o=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function da(n){n._valueTracker||(n._valueTracker=f0(n))}function xm(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=ym(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function cl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function bc(n,e){var t=e.checked;return yt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:n._wrapperState.initialChecked})}function Rd(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=dr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function wm(n,e){e=e.checked,e!=null&&Lf(n,"checked",e,!1)}function Tc(n,e){wm(n,e);var t=dr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Cc(n,e.type,t):e.hasOwnProperty("defaultValue")&&Cc(n,e.type,dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function kd(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Cc(n,e,t){(e!=="number"||cl(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var gs=Array.isArray;function Do(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+dr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Lc(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return yt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Fd(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ce(92));if(gs(t)){if(1<t.length)throw Error(ce(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:dr(t)}}function Sm(n,e){var t=dr(e.value),i=dr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Id(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Mm(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ac(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Mm(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ha,Em=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(ha=ha||document.createElement("div"),ha.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ha.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function ks(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Ss={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},d0=["Webkit","ms","Moz","O"];Object.keys(Ss).forEach(function(n){d0.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Ss[e]=Ss[n]})});function bm(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Ss.hasOwnProperty(n)&&Ss[n]?(""+e).trim():e+"px"}function Tm(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=bm(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var h0=yt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pc(n,e){if(e){if(h0[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function Dc(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rc=null;function Rf(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var kc=null,Ro=null,ko=null;function Nd(n){if(n=ta(n)){if(typeof kc!="function")throw Error(ce(280));var e=n.stateNode;e&&(e=Vl(e),kc(n.stateNode,n.type,e))}}function Cm(n){Ro?ko?ko.push(n):ko=[n]:Ro=n}function Lm(){if(Ro){var n=Ro,e=ko;if(ko=Ro=null,Nd(n),e)for(n=0;n<e.length;n++)Nd(e[n])}}function Am(n,e){return n(e)}function Pm(){}var fu=!1;function Dm(n,e,t){if(fu)return n(e,t);fu=!0;try{return Am(n,e,t)}finally{fu=!1,(Ro!==null||ko!==null)&&(Pm(),Lm())}}function Fs(n,e){var t=n.stateNode;if(t===null)return null;var i=Vl(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ce(231,e,typeof t));return t}var Fc=!1;if(Ri)try{var os={};Object.defineProperty(os,"passive",{get:function(){Fc=!0}}),window.addEventListener("test",os,os),window.removeEventListener("test",os,os)}catch{Fc=!1}function p0(n,e,t,i,r,o,s,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(d){this.onError(d)}}var Ms=!1,fl=null,dl=!1,Ic=null,m0={onError:function(n){Ms=!0,fl=n}};function g0(n,e,t,i,r,o,s,a,u){Ms=!1,fl=null,p0.apply(m0,arguments)}function v0(n,e,t,i,r,o,s,a,u){if(g0.apply(this,arguments),Ms){if(Ms){var c=fl;Ms=!1,fl=null}else throw Error(ce(198));dl||(dl=!0,Ic=c)}}function qr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Rm(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function zd(n){if(qr(n)!==n)throw Error(ce(188))}function _0(n){var e=n.alternate;if(!e){if(e=qr(n),e===null)throw Error(ce(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===t)return zd(r),n;if(o===i)return zd(r),e;o=o.sibling}throw Error(ce(188))}if(t.return!==i.return)t=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===t){s=!0,t=r,i=o;break}if(a===i){s=!0,i=r,t=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===t){s=!0,t=o,i=r;break}if(a===i){s=!0,i=o,t=r;break}a=a.sibling}if(!s)throw Error(ce(189))}}if(t.alternate!==i)throw Error(ce(190))}if(t.tag!==3)throw Error(ce(188));return t.stateNode.current===t?n:e}function km(n){return n=_0(n),n!==null?Fm(n):null}function Fm(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Fm(n);if(e!==null)return e;n=n.sibling}return null}var Im=En.unstable_scheduleCallback,Od=En.unstable_cancelCallback,y0=En.unstable_shouldYield,x0=En.unstable_requestPaint,Mt=En.unstable_now,w0=En.unstable_getCurrentPriorityLevel,kf=En.unstable_ImmediatePriority,Nm=En.unstable_UserBlockingPriority,hl=En.unstable_NormalPriority,S0=En.unstable_LowPriority,zm=En.unstable_IdlePriority,zl=null,mi=null;function M0(n){if(mi&&typeof mi.onCommitFiberRoot=="function")try{mi.onCommitFiberRoot(zl,n,void 0,(n.current.flags&128)===128)}catch{}}var Qn=Math.clz32?Math.clz32:T0,E0=Math.log,b0=Math.LN2;function T0(n){return n>>>=0,n===0?32:31-(E0(n)/b0|0)|0}var pa=64,ma=4194304;function vs(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function pl(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,o=n.pingedLanes,s=t&268435455;if(s!==0){var a=s&~r;a!==0?i=vs(a):(o&=s,o!==0&&(i=vs(o)))}else s=t&~r,s!==0?i=vs(s):o!==0&&(i=vs(o));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if((i&4)!==0&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Qn(e),r=1<<t,i|=n[t],e&=~r;return i}function C0(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function L0(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,o=n.pendingLanes;0<o;){var s=31-Qn(o),a=1<<s,u=r[s];u===-1?((a&t)===0||(a&i)!==0)&&(r[s]=C0(a,e)):u<=e&&(n.expiredLanes|=a),o&=~a}}function Nc(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Om(){var n=pa;return pa<<=1,(pa&4194240)===0&&(pa=64),n}function du(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Js(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Qn(e),n[e]=t}function A0(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Qn(t),o=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~o}}function Ff(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Qn(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var nt=0;function Um(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Bm,If,Vm,Hm,Gm,zc=!1,ga=[],ir=null,rr=null,or=null,Is=new Map,Ns=new Map,Ji=[],P0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ud(n,e){switch(n){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":Is.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ns.delete(e.pointerId)}}function ss(n,e,t,i,r,o){return n===null||n.nativeEvent!==o?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=ta(e),e!==null&&If(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function D0(n,e,t,i,r){switch(e){case"focusin":return ir=ss(ir,n,e,t,i,r),!0;case"dragenter":return rr=ss(rr,n,e,t,i,r),!0;case"mouseover":return or=ss(or,n,e,t,i,r),!0;case"pointerover":var o=r.pointerId;return Is.set(o,ss(Is.get(o)||null,n,e,t,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Ns.set(o,ss(Ns.get(o)||null,n,e,t,i,r)),!0}return!1}function Wm(n){var e=Tr(n.target);if(e!==null){var t=qr(e);if(t!==null){if(e=t.tag,e===13){if(e=Rm(t),e!==null){n.blockedOn=e,Gm(n.priority,function(){Vm(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Qa(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Oc(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Rc=i,t.target.dispatchEvent(i),Rc=null}else return e=ta(t),e!==null&&If(e),n.blockedOn=t,!1;e.shift()}return!0}function Bd(n,e,t){Qa(n)&&t.delete(e)}function R0(){zc=!1,ir!==null&&Qa(ir)&&(ir=null),rr!==null&&Qa(rr)&&(rr=null),or!==null&&Qa(or)&&(or=null),Is.forEach(Bd),Ns.forEach(Bd)}function as(n,e){n.blockedOn===e&&(n.blockedOn=null,zc||(zc=!0,En.unstable_scheduleCallback(En.unstable_NormalPriority,R0)))}function zs(n){function e(r){return as(r,n)}if(0<ga.length){as(ga[0],n);for(var t=1;t<ga.length;t++){var i=ga[t];i.blockedOn===n&&(i.blockedOn=null)}}for(ir!==null&&as(ir,n),rr!==null&&as(rr,n),or!==null&&as(or,n),Is.forEach(e),Ns.forEach(e),t=0;t<Ji.length;t++)i=Ji[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Ji.length&&(t=Ji[0],t.blockedOn===null);)Wm(t),t.blockedOn===null&&Ji.shift()}var Fo=Ni.ReactCurrentBatchConfig,ml=!0;function k0(n,e,t,i){var r=nt,o=Fo.transition;Fo.transition=null;try{nt=1,Nf(n,e,t,i)}finally{nt=r,Fo.transition=o}}function F0(n,e,t,i){var r=nt,o=Fo.transition;Fo.transition=null;try{nt=4,Nf(n,e,t,i)}finally{nt=r,Fo.transition=o}}function Nf(n,e,t,i){if(ml){var r=Oc(n,e,t,i);if(r===null)Su(n,e,i,gl,t),Ud(n,i);else if(D0(r,n,e,t,i))i.stopPropagation();else if(Ud(n,i),e&4&&-1<P0.indexOf(n)){for(;r!==null;){var o=ta(r);if(o!==null&&Bm(o),o=Oc(n,e,t,i),o===null&&Su(n,e,i,gl,t),o===r)break;r=o}r!==null&&i.stopPropagation()}else Su(n,e,i,null,t)}}var gl=null;function Oc(n,e,t,i){if(gl=null,n=Rf(i),n=Tr(n),n!==null)if(e=qr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Rm(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return gl=n,null}function jm(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(w0()){case kf:return 1;case Nm:return 4;case hl:case S0:return 16;case zm:return 536870912;default:return 16}default:return 16}}var tr=null,zf=null,Ja=null;function Xm(){if(Ja)return Ja;var n,e=zf,t=e.length,i,r="value"in tr?tr.value:tr.textContent,o=r.length;for(n=0;n<t&&e[n]===r[n];n++);var s=t-n;for(i=1;i<=s&&e[t-i]===r[o-i];i++);return Ja=r.slice(n,1<i?1-i:void 0)}function el(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function va(){return!0}function Vd(){return!1}function Tn(n){function e(t,i,r,o,s){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?va:Vd,this.isPropagationStopped=Vd,this}return yt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=va)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=va)},persist:function(){},isPersistent:va}),e}var Qo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Of=Tn(Qo),ea=yt({},Qo,{view:0,detail:0}),I0=Tn(ea),hu,pu,ls,Ol=yt({},ea,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uf,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ls&&(ls&&n.type==="mousemove"?(hu=n.screenX-ls.screenX,pu=n.screenY-ls.screenY):pu=hu=0,ls=n),hu)},movementY:function(n){return"movementY"in n?n.movementY:pu}}),Hd=Tn(Ol),N0=yt({},Ol,{dataTransfer:0}),z0=Tn(N0),O0=yt({},ea,{relatedTarget:0}),mu=Tn(O0),U0=yt({},Qo,{animationName:0,elapsedTime:0,pseudoElement:0}),B0=Tn(U0),V0=yt({},Qo,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),H0=Tn(V0),G0=yt({},Qo,{data:0}),Gd=Tn(G0),W0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},j0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},X0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function q0(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=X0[n])?!!e[n]:!1}function Uf(){return q0}var Y0=yt({},ea,{key:function(n){if(n.key){var e=W0[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=el(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?j0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uf,charCode:function(n){return n.type==="keypress"?el(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?el(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),$0=Tn(Y0),Z0=yt({},Ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wd=Tn(Z0),K0=yt({},ea,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uf}),Q0=Tn(K0),J0=yt({},Qo,{propertyName:0,elapsedTime:0,pseudoElement:0}),e_=Tn(J0),t_=yt({},Ol,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),n_=Tn(t_),i_=[9,13,27,32],Bf=Ri&&"CompositionEvent"in window,Es=null;Ri&&"documentMode"in document&&(Es=document.documentMode);var r_=Ri&&"TextEvent"in window&&!Es,qm=Ri&&(!Bf||Es&&8<Es&&11>=Es),jd=String.fromCharCode(32),Xd=!1;function Ym(n,e){switch(n){case"keyup":return i_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $m(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var xo=!1;function o_(n,e){switch(n){case"compositionend":return $m(e);case"keypress":return e.which!==32?null:(Xd=!0,jd);case"textInput":return n=e.data,n===jd&&Xd?null:n;default:return null}}function s_(n,e){if(xo)return n==="compositionend"||!Bf&&Ym(n,e)?(n=Xm(),Ja=zf=tr=null,xo=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return qm&&e.locale!=="ko"?null:e.data;default:return null}}var a_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qd(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!a_[n.type]:e==="textarea"}function Zm(n,e,t,i){Cm(i),e=vl(e,"onChange"),0<e.length&&(t=new Of("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var bs=null,Os=null;function l_(n){ag(n,0)}function Ul(n){var e=Mo(n);if(xm(e))return n}function u_(n,e){if(n==="change")return e}var Km=!1;if(Ri){var gu;if(Ri){var vu="oninput"in document;if(!vu){var Yd=document.createElement("div");Yd.setAttribute("oninput","return;"),vu=typeof Yd.oninput=="function"}gu=vu}else gu=!1;Km=gu&&(!document.documentMode||9<document.documentMode)}function $d(){bs&&(bs.detachEvent("onpropertychange",Qm),Os=bs=null)}function Qm(n){if(n.propertyName==="value"&&Ul(Os)){var e=[];Zm(e,Os,n,Rf(n)),Dm(l_,e)}}function c_(n,e,t){n==="focusin"?($d(),bs=e,Os=t,bs.attachEvent("onpropertychange",Qm)):n==="focusout"&&$d()}function f_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ul(Os)}function d_(n,e){if(n==="click")return Ul(e)}function h_(n,e){if(n==="input"||n==="change")return Ul(e)}function p_(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ii=typeof Object.is=="function"?Object.is:p_;function Us(n,e){if(ii(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!xc.call(e,r)||!ii(n[r],e[r]))return!1}return!0}function Zd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Kd(n,e){var t=Zd(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Zd(t)}}function Jm(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Jm(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function eg(){for(var n=window,e=cl();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=cl(n.document)}return e}function Vf(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function m_(n){var e=eg(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Jm(t.ownerDocument.documentElement,t)){if(i!==null&&Vf(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!n.extend&&o>i&&(r=i,i=o,o=r),r=Kd(t,o);var s=Kd(t,i);r&&s&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==s.node||n.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),o>i?(n.addRange(e),n.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var g_=Ri&&"documentMode"in document&&11>=document.documentMode,wo=null,Uc=null,Ts=null,Bc=!1;function Qd(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Bc||wo==null||wo!==cl(i)||(i=wo,"selectionStart"in i&&Vf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ts&&Us(Ts,i)||(Ts=i,i=vl(Uc,"onSelect"),0<i.length&&(e=new Of("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=wo)))}function _a(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var So={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionend:_a("Transition","TransitionEnd")},_u={},tg={};Ri&&(tg=document.createElement("div").style,"AnimationEvent"in window||(delete So.animationend.animation,delete So.animationiteration.animation,delete So.animationstart.animation),"TransitionEvent"in window||delete So.transitionend.transition);function Bl(n){if(_u[n])return _u[n];if(!So[n])return n;var e=So[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in tg)return _u[n]=e[t];return n}var ng=Bl("animationend"),ig=Bl("animationiteration"),rg=Bl("animationstart"),og=Bl("transitionend"),sg=new Map,Jd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(n,e){sg.set(n,e),Xr(e,[n])}for(var yu=0;yu<Jd.length;yu++){var xu=Jd[yu],v_=xu.toLowerCase(),__=xu[0].toUpperCase()+xu.slice(1);pr(v_,"on"+__)}pr(ng,"onAnimationEnd");pr(ig,"onAnimationIteration");pr(rg,"onAnimationStart");pr("dblclick","onDoubleClick");pr("focusin","onFocus");pr("focusout","onBlur");pr(og,"onTransitionEnd");Uo("onMouseEnter",["mouseout","mouseover"]);Uo("onMouseLeave",["mouseout","mouseover"]);Uo("onPointerEnter",["pointerout","pointerover"]);Uo("onPointerLeave",["pointerout","pointerover"]);Xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _s="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),y_=new Set("cancel close invalid load scroll toggle".split(" ").concat(_s));function eh(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,v0(i,e,void 0,n),n.currentTarget=null}function ag(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==o&&r.isPropagationStopped())break e;eh(r,a,c),o=u}else for(s=0;s<i.length;s++){if(a=i[s],u=a.instance,c=a.currentTarget,a=a.listener,u!==o&&r.isPropagationStopped())break e;eh(r,a,c),o=u}}}if(dl)throw n=Ic,dl=!1,Ic=null,n}function ct(n,e){var t=e[jc];t===void 0&&(t=e[jc]=new Set);var i=n+"__bubble";t.has(i)||(lg(e,n,2,!1),t.add(i))}function wu(n,e,t){var i=0;e&&(i|=4),lg(t,n,i,e)}var ya="_reactListening"+Math.random().toString(36).slice(2);function Bs(n){if(!n[ya]){n[ya]=!0,mm.forEach(function(t){t!=="selectionchange"&&(y_.has(t)||wu(t,!1,n),wu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[ya]||(e[ya]=!0,wu("selectionchange",!1,e))}}function lg(n,e,t,i){switch(jm(e)){case 1:var r=k0;break;case 4:r=F0;break;default:r=Nf}t=r.bind(null,e,t,n),r=void 0,!Fc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Su(n,e,t,i,r){var o=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===r||u.nodeType===8&&u.parentNode===r))return;s=s.return}for(;a!==null;){if(s=Tr(a),s===null)return;if(u=s.tag,u===5||u===6){i=o=s;continue e}a=a.parentNode}}i=i.return}Dm(function(){var c=o,d=Rf(t),p=[];e:{var h=sg.get(n);if(h!==void 0){var x=Of,S=n;switch(n){case"keypress":if(el(t)===0)break e;case"keydown":case"keyup":x=$0;break;case"focusin":S="focus",x=mu;break;case"focusout":S="blur",x=mu;break;case"beforeblur":case"afterblur":x=mu;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Hd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=z0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Q0;break;case ng:case ig:case rg:x=B0;break;case og:x=e_;break;case"scroll":x=I0;break;case"wheel":x=n_;break;case"copy":case"cut":case"paste":x=H0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Wd}var g=(e&4)!==0,m=!g&&n==="scroll",_=g?h!==null?h+"Capture":null:h;g=[];for(var w=c,E;w!==null;){E=w;var b=E.stateNode;if(E.tag===5&&b!==null&&(E=b,_!==null&&(b=Fs(w,_),b!=null&&g.push(Vs(w,b,E)))),m)break;w=w.return}0<g.length&&(h=new x(h,S,null,t,d),p.push({event:h,listeners:g}))}}if((e&7)===0){e:{if(h=n==="mouseover"||n==="pointerover",x=n==="mouseout"||n==="pointerout",h&&t!==Rc&&(S=t.relatedTarget||t.fromElement)&&(Tr(S)||S[ki]))break e;if((x||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,x?(S=t.relatedTarget||t.toElement,x=c,S=S?Tr(S):null,S!==null&&(m=qr(S),S!==m||S.tag!==5&&S.tag!==6)&&(S=null)):(x=null,S=c),x!==S)){if(g=Hd,b="onMouseLeave",_="onMouseEnter",w="mouse",(n==="pointerout"||n==="pointerover")&&(g=Wd,b="onPointerLeave",_="onPointerEnter",w="pointer"),m=x==null?h:Mo(x),E=S==null?h:Mo(S),h=new g(b,w+"leave",x,t,d),h.target=m,h.relatedTarget=E,b=null,Tr(d)===c&&(g=new g(_,w+"enter",S,t,d),g.target=E,g.relatedTarget=m,b=g),m=b,x&&S)t:{for(g=x,_=S,w=0,E=g;E;E=Qr(E))w++;for(E=0,b=_;b;b=Qr(b))E++;for(;0<w-E;)g=Qr(g),w--;for(;0<E-w;)_=Qr(_),E--;for(;w--;){if(g===_||_!==null&&g===_.alternate)break t;g=Qr(g),_=Qr(_)}g=null}else g=null;x!==null&&th(p,h,x,g,!1),S!==null&&m!==null&&th(p,m,S,g,!0)}}e:{if(h=c?Mo(c):window,x=h.nodeName&&h.nodeName.toLowerCase(),x==="select"||x==="input"&&h.type==="file")var L=u_;else if(qd(h))if(Km)L=h_;else{L=f_;var k=c_}else(x=h.nodeName)&&x.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(L=d_);if(L&&(L=L(n,c))){Zm(p,L,t,d);break e}k&&k(n,h,c),n==="focusout"&&(k=h._wrapperState)&&k.controlled&&h.type==="number"&&Cc(h,"number",h.value)}switch(k=c?Mo(c):window,n){case"focusin":(qd(k)||k.contentEditable==="true")&&(wo=k,Uc=c,Ts=null);break;case"focusout":Ts=Uc=wo=null;break;case"mousedown":Bc=!0;break;case"contextmenu":case"mouseup":case"dragend":Bc=!1,Qd(p,t,d);break;case"selectionchange":if(g_)break;case"keydown":case"keyup":Qd(p,t,d)}var z;if(Bf)e:{switch(n){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else xo?Ym(n,t)&&(T="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(T="onCompositionStart");T&&(qm&&t.locale!=="ko"&&(xo||T!=="onCompositionStart"?T==="onCompositionEnd"&&xo&&(z=Xm()):(tr=d,zf="value"in tr?tr.value:tr.textContent,xo=!0)),k=vl(c,T),0<k.length&&(T=new Gd(T,n,null,t,d),p.push({event:T,listeners:k}),z?T.data=z:(z=$m(t),z!==null&&(T.data=z)))),(z=r_?o_(n,t):s_(n,t))&&(c=vl(c,"onBeforeInput"),0<c.length&&(d=new Gd("onBeforeInput","beforeinput",null,t,d),p.push({event:d,listeners:c}),d.data=z))}ag(p,e)})}function Vs(n,e,t){return{instance:n,listener:e,currentTarget:t}}function vl(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Fs(n,t),o!=null&&i.unshift(Vs(n,o,r)),o=Fs(n,e),o!=null&&i.push(Vs(n,o,r))),n=n.return}return i}function Qr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function th(n,e,t,i,r){for(var o=e._reactName,s=[];t!==null&&t!==i;){var a=t,u=a.alternate,c=a.stateNode;if(u!==null&&u===i)break;a.tag===5&&c!==null&&(a=c,r?(u=Fs(t,o),u!=null&&s.unshift(Vs(t,u,a))):r||(u=Fs(t,o),u!=null&&s.push(Vs(t,u,a)))),t=t.return}s.length!==0&&n.push({event:e,listeners:s})}var x_=/\r\n?/g,w_=/\u0000|\uFFFD/g;function nh(n){return(typeof n=="string"?n:""+n).replace(x_,`
`).replace(w_,"")}function xa(n,e,t){if(e=nh(e),nh(n)!==e&&t)throw Error(ce(425))}function _l(){}var Vc=null,Hc=null;function Gc(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Wc=typeof setTimeout=="function"?setTimeout:void 0,S_=typeof clearTimeout=="function"?clearTimeout:void 0,ih=typeof Promise=="function"?Promise:void 0,M_=typeof queueMicrotask=="function"?queueMicrotask:typeof ih<"u"?function(n){return ih.resolve(null).then(n).catch(E_)}:Wc;function E_(n){setTimeout(function(){throw n})}function Mu(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),zs(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);zs(e)}function sr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function rh(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Jo=Math.random().toString(36).slice(2),di="__reactFiber$"+Jo,Hs="__reactProps$"+Jo,ki="__reactContainer$"+Jo,jc="__reactEvents$"+Jo,b_="__reactListeners$"+Jo,T_="__reactHandles$"+Jo;function Tr(n){var e=n[di];if(e)return e;for(var t=n.parentNode;t;){if(e=t[ki]||t[di]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=rh(n);n!==null;){if(t=n[di])return t;n=rh(n)}return e}n=t,t=n.parentNode}return null}function ta(n){return n=n[di]||n[ki],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Mo(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ce(33))}function Vl(n){return n[Hs]||null}var Xc=[],Eo=-1;function mr(n){return{current:n}}function dt(n){0>Eo||(n.current=Xc[Eo],Xc[Eo]=null,Eo--)}function ot(n,e){Eo++,Xc[Eo]=n.current,n.current=e}var hr={},Kt=mr(hr),gn=mr(!1),Nr=hr;function Bo(n,e){var t=n.type.contextTypes;if(!t)return hr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in t)r[o]=e[o];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function vn(n){return n=n.childContextTypes,n!=null}function yl(){dt(gn),dt(Kt)}function oh(n,e,t){if(Kt.current!==hr)throw Error(ce(168));ot(Kt,e),ot(gn,t)}function ug(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,c0(n)||"Unknown",r));return yt({},t,i)}function xl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||hr,Nr=Kt.current,ot(Kt,n),ot(gn,gn.current),!0}function sh(n,e,t){var i=n.stateNode;if(!i)throw Error(ce(169));t?(n=ug(n,e,Nr),i.__reactInternalMemoizedMergedChildContext=n,dt(gn),dt(Kt),ot(Kt,n)):dt(gn),ot(gn,t)}var Ti=null,Hl=!1,Eu=!1;function cg(n){Ti===null?Ti=[n]:Ti.push(n)}function C_(n){Hl=!0,cg(n)}function gr(){if(!Eu&&Ti!==null){Eu=!0;var n=0,e=nt;try{var t=Ti;for(nt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Ti=null,Hl=!1}catch(r){throw Ti!==null&&(Ti=Ti.slice(n+1)),Im(kf,gr),r}finally{nt=e,Eu=!1}}return null}var bo=[],To=0,wl=null,Sl=0,Pn=[],Dn=0,zr=null,Li=1,Ai="";function wr(n,e){bo[To++]=Sl,bo[To++]=wl,wl=n,Sl=e}function fg(n,e,t){Pn[Dn++]=Li,Pn[Dn++]=Ai,Pn[Dn++]=zr,zr=n;var i=Li;n=Ai;var r=32-Qn(i)-1;i&=~(1<<r),t+=1;var o=32-Qn(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,Li=1<<32-Qn(e)+r|t<<r|i,Ai=o+n}else Li=1<<o|t<<r|i,Ai=n}function Hf(n){n.return!==null&&(wr(n,1),fg(n,1,0))}function Gf(n){for(;n===wl;)wl=bo[--To],bo[To]=null,Sl=bo[--To],bo[To]=null;for(;n===zr;)zr=Pn[--Dn],Pn[Dn]=null,Ai=Pn[--Dn],Pn[Dn]=null,Li=Pn[--Dn],Pn[Dn]=null}var Mn=null,Sn=null,mt=!1,Zn=null;function dg(n,e){var t=kn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function ah(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Mn=n,Sn=sr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Mn=n,Sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=zr!==null?{id:Li,overflow:Ai}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=kn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Mn=n,Sn=null,!0):!1;default:return!1}}function qc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Yc(n){if(mt){var e=Sn;if(e){var t=e;if(!ah(n,e)){if(qc(n))throw Error(ce(418));e=sr(t.nextSibling);var i=Mn;e&&ah(n,e)?dg(i,t):(n.flags=n.flags&-4097|2,mt=!1,Mn=n)}}else{if(qc(n))throw Error(ce(418));n.flags=n.flags&-4097|2,mt=!1,Mn=n}}}function lh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Mn=n}function wa(n){if(n!==Mn)return!1;if(!mt)return lh(n),mt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Gc(n.type,n.memoizedProps)),e&&(e=Sn)){if(qc(n))throw hg(),Error(ce(418));for(;e;)dg(n,e),e=sr(e.nextSibling)}if(lh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ce(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Sn=sr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Sn=null}}else Sn=Mn?sr(n.stateNode.nextSibling):null;return!0}function hg(){for(var n=Sn;n;)n=sr(n.nextSibling)}function Vo(){Sn=Mn=null,mt=!1}function Wf(n){Zn===null?Zn=[n]:Zn.push(n)}var L_=Ni.ReactCurrentBatchConfig;function Yn(n,e){if(n&&n.defaultProps){e=yt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var Ml=mr(null),El=null,Co=null,jf=null;function Xf(){jf=Co=El=null}function qf(n){var e=Ml.current;dt(Ml),n._currentValue=e}function $c(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Io(n,e){El=n,jf=Co=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&e)!==0&&(mn=!0),n.firstContext=null)}function Nn(n){var e=n._currentValue;if(jf!==n)if(n={context:n,memoizedValue:e,next:null},Co===null){if(El===null)throw Error(ce(308));Co=n,El.dependencies={lanes:0,firstContext:n}}else Co=Co.next=n;return e}var Cr=null;function Yf(n){Cr===null?Cr=[n]:Cr.push(n)}function pg(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Yf(e)):(t.next=r.next,r.next=t),e.interleaved=t,Fi(n,i)}function Fi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Ki=!1;function $f(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mg(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Pi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function ar(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,(Je&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Fi(n,t)}return r=i.interleaved,r===null?(e.next=e,Yf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Fi(n,t)}function tl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Ff(n,t)}}function uh(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var s={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?r=o=s:o=o.next=s,t=t.next}while(t!==null);o===null?r=o=e:o=o.next=e}else r=o=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function bl(n,e,t,i){var r=n.updateQueue;Ki=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var u=a,c=u.next;u.next=null,s===null?o=c:s.next=c,s=u;var d=n.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(o!==null){var p=r.baseState;s=0,d=c=u=null,a=o;do{var h=a.lane,x=a.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=n,g=a;switch(h=e,x=t,g.tag){case 1:if(S=g.payload,typeof S=="function"){p=S.call(x,p,h);break e}p=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=g.payload,h=typeof S=="function"?S.call(x,p,h):S,h==null)break e;p=yt({},p,h);break e;case 2:Ki=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else x={eventTime:x,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=x,u=p):d=d.next=x,s|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(1);if(d===null&&(u=p),r.baseState=u,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Ur|=s,n.lanes=s,n.memoizedState=p}}function ch(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var gg=new pm.Component().refs;function Zc(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:yt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Gl={isMounted:function(n){return(n=n._reactInternals)?qr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=en(),r=ur(n),o=Pi(i,r);o.payload=e,t!=null&&(o.callback=t),e=ar(n,o,r),e!==null&&(Jn(e,n,r,i),tl(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=en(),r=ur(n),o=Pi(i,r);o.tag=1,o.payload=e,t!=null&&(o.callback=t),e=ar(n,o,r),e!==null&&(Jn(e,n,r,i),tl(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=en(),i=ur(n),r=Pi(t,i);r.tag=2,e!=null&&(r.callback=e),e=ar(n,r,i),e!==null&&(Jn(e,n,i,t),tl(e,n,i))}};function fh(n,e,t,i,r,o,s){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!Us(t,i)||!Us(r,o):!0}function vg(n,e,t){var i=!1,r=hr,o=e.contextType;return typeof o=="object"&&o!==null?o=Nn(o):(r=vn(e)?Nr:Kt.current,i=e.contextTypes,o=(i=i!=null)?Bo(n,r):hr),e=new e(t,o),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Gl,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=o),e}function dh(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Gl.enqueueReplaceState(e,e.state,null)}function Kc(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=gg,$f(n);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Nn(o):(o=vn(e)?Nr:Kt.current,r.context=Bo(n,o)),r.state=n.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Zc(n,e,o,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Gl.enqueueReplaceState(r,r.state,null),bl(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function us(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ce(309));var i=t.stateNode}if(!i)throw Error(ce(147,n));var r=i,o=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;a===gg&&(a=r.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof n!="string")throw Error(ce(284));if(!t._owner)throw Error(ce(290,n))}return n}function Sa(n,e){throw n=Object.prototype.toString.call(e),Error(ce(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function hh(n){var e=n._init;return e(n._payload)}function _g(n){function e(_,w){if(n){var E=_.deletions;E===null?(_.deletions=[w],_.flags|=16):E.push(w)}}function t(_,w){if(!n)return null;for(;w!==null;)e(_,w),w=w.sibling;return null}function i(_,w){for(_=new Map;w!==null;)w.key!==null?_.set(w.key,w):_.set(w.index,w),w=w.sibling;return _}function r(_,w){return _=cr(_,w),_.index=0,_.sibling=null,_}function o(_,w,E){return _.index=E,n?(E=_.alternate,E!==null?(E=E.index,E<w?(_.flags|=2,w):E):(_.flags|=2,w)):(_.flags|=1048576,w)}function s(_){return n&&_.alternate===null&&(_.flags|=2),_}function a(_,w,E,b){return w===null||w.tag!==6?(w=Du(E,_.mode,b),w.return=_,w):(w=r(w,E),w.return=_,w)}function u(_,w,E,b){var L=E.type;return L===yo?d(_,w,E.props.children,b,E.key):w!==null&&(w.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Zi&&hh(L)===w.type)?(b=r(w,E.props),b.ref=us(_,w,E),b.return=_,b):(b=al(E.type,E.key,E.props,null,_.mode,b),b.ref=us(_,w,E),b.return=_,b)}function c(_,w,E,b){return w===null||w.tag!==4||w.stateNode.containerInfo!==E.containerInfo||w.stateNode.implementation!==E.implementation?(w=Ru(E,_.mode,b),w.return=_,w):(w=r(w,E.children||[]),w.return=_,w)}function d(_,w,E,b,L){return w===null||w.tag!==7?(w=kr(E,_.mode,b,L),w.return=_,w):(w=r(w,E),w.return=_,w)}function p(_,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Du(""+w,_.mode,E),w.return=_,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case fa:return E=al(w.type,w.key,w.props,null,_.mode,E),E.ref=us(_,null,w),E.return=_,E;case _o:return w=Ru(w,_.mode,E),w.return=_,w;case Zi:var b=w._init;return p(_,b(w._payload),E)}if(gs(w)||rs(w))return w=kr(w,_.mode,E,null),w.return=_,w;Sa(_,w)}return null}function h(_,w,E,b){var L=w!==null?w.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return L!==null?null:a(_,w,""+E,b);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case fa:return E.key===L?u(_,w,E,b):null;case _o:return E.key===L?c(_,w,E,b):null;case Zi:return L=E._init,h(_,w,L(E._payload),b)}if(gs(E)||rs(E))return L!==null?null:d(_,w,E,b,null);Sa(_,E)}return null}function x(_,w,E,b,L){if(typeof b=="string"&&b!==""||typeof b=="number")return _=_.get(E)||null,a(w,_,""+b,L);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case fa:return _=_.get(b.key===null?E:b.key)||null,u(w,_,b,L);case _o:return _=_.get(b.key===null?E:b.key)||null,c(w,_,b,L);case Zi:var k=b._init;return x(_,w,E,k(b._payload),L)}if(gs(b)||rs(b))return _=_.get(E)||null,d(w,_,b,L,null);Sa(w,b)}return null}function S(_,w,E,b){for(var L=null,k=null,z=w,T=w=0,N=null;z!==null&&T<E.length;T++){z.index>T?(N=z,z=null):N=z.sibling;var H=h(_,z,E[T],b);if(H===null){z===null&&(z=N);break}n&&z&&H.alternate===null&&e(_,z),w=o(H,w,T),k===null?L=H:k.sibling=H,k=H,z=N}if(T===E.length)return t(_,z),mt&&wr(_,T),L;if(z===null){for(;T<E.length;T++)z=p(_,E[T],b),z!==null&&(w=o(z,w,T),k===null?L=z:k.sibling=z,k=z);return mt&&wr(_,T),L}for(z=i(_,z);T<E.length;T++)N=x(z,_,T,E[T],b),N!==null&&(n&&N.alternate!==null&&z.delete(N.key===null?T:N.key),w=o(N,w,T),k===null?L=N:k.sibling=N,k=N);return n&&z.forEach(function(Y){return e(_,Y)}),mt&&wr(_,T),L}function g(_,w,E,b){var L=rs(E);if(typeof L!="function")throw Error(ce(150));if(E=L.call(E),E==null)throw Error(ce(151));for(var k=L=null,z=w,T=w=0,N=null,H=E.next();z!==null&&!H.done;T++,H=E.next()){z.index>T?(N=z,z=null):N=z.sibling;var Y=h(_,z,H.value,b);if(Y===null){z===null&&(z=N);break}n&&z&&Y.alternate===null&&e(_,z),w=o(Y,w,T),k===null?L=Y:k.sibling=Y,k=Y,z=N}if(H.done)return t(_,z),mt&&wr(_,T),L;if(z===null){for(;!H.done;T++,H=E.next())H=p(_,H.value,b),H!==null&&(w=o(H,w,T),k===null?L=H:k.sibling=H,k=H);return mt&&wr(_,T),L}for(z=i(_,z);!H.done;T++,H=E.next())H=x(z,_,T,H.value,b),H!==null&&(n&&H.alternate!==null&&z.delete(H.key===null?T:H.key),w=o(H,w,T),k===null?L=H:k.sibling=H,k=H);return n&&z.forEach(function(le){return e(_,le)}),mt&&wr(_,T),L}function m(_,w,E,b){if(typeof E=="object"&&E!==null&&E.type===yo&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case fa:e:{for(var L=E.key,k=w;k!==null;){if(k.key===L){if(L=E.type,L===yo){if(k.tag===7){t(_,k.sibling),w=r(k,E.props.children),w.return=_,_=w;break e}}else if(k.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Zi&&hh(L)===k.type){t(_,k.sibling),w=r(k,E.props),w.ref=us(_,k,E),w.return=_,_=w;break e}t(_,k);break}else e(_,k);k=k.sibling}E.type===yo?(w=kr(E.props.children,_.mode,b,E.key),w.return=_,_=w):(b=al(E.type,E.key,E.props,null,_.mode,b),b.ref=us(_,w,E),b.return=_,_=b)}return s(_);case _o:e:{for(k=E.key;w!==null;){if(w.key===k)if(w.tag===4&&w.stateNode.containerInfo===E.containerInfo&&w.stateNode.implementation===E.implementation){t(_,w.sibling),w=r(w,E.children||[]),w.return=_,_=w;break e}else{t(_,w);break}else e(_,w);w=w.sibling}w=Ru(E,_.mode,b),w.return=_,_=w}return s(_);case Zi:return k=E._init,m(_,w,k(E._payload),b)}if(gs(E))return S(_,w,E,b);if(rs(E))return g(_,w,E,b);Sa(_,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,w!==null&&w.tag===6?(t(_,w.sibling),w=r(w,E),w.return=_,_=w):(t(_,w),w=Du(E,_.mode,b),w.return=_,_=w),s(_)):t(_,w)}return m}var Ho=_g(!0),yg=_g(!1),na={},gi=mr(na),Gs=mr(na),Ws=mr(na);function Lr(n){if(n===na)throw Error(ce(174));return n}function Zf(n,e){switch(ot(Ws,e),ot(Gs,n),ot(gi,na),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ac(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Ac(e,n)}dt(gi),ot(gi,e)}function Go(){dt(gi),dt(Gs),dt(Ws)}function xg(n){Lr(Ws.current);var e=Lr(gi.current),t=Ac(e,n.type);e!==t&&(ot(Gs,n),ot(gi,t))}function Kf(n){Gs.current===n&&(dt(gi),dt(Gs))}var vt=mr(0);function Tl(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bu=[];function Qf(){for(var n=0;n<bu.length;n++)bu[n]._workInProgressVersionPrimary=null;bu.length=0}var nl=Ni.ReactCurrentDispatcher,Tu=Ni.ReactCurrentBatchConfig,Or=0,_t=null,At=null,Ft=null,Cl=!1,Cs=!1,js=0,A_=0;function Xt(){throw Error(ce(321))}function Jf(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!ii(n[t],e[t]))return!1;return!0}function ed(n,e,t,i,r,o){if(Or=o,_t=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,nl.current=n===null||n.memoizedState===null?k_:F_,n=t(i,r),Cs){o=0;do{if(Cs=!1,js=0,25<=o)throw Error(ce(301));o+=1,Ft=At=null,e.updateQueue=null,nl.current=I_,n=t(i,r)}while(Cs)}if(nl.current=Ll,e=At!==null&&At.next!==null,Or=0,Ft=At=_t=null,Cl=!1,e)throw Error(ce(300));return n}function td(){var n=js!==0;return js=0,n}function ci(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?_t.memoizedState=Ft=n:Ft=Ft.next=n,Ft}function zn(){if(At===null){var n=_t.alternate;n=n!==null?n.memoizedState:null}else n=At.next;var e=Ft===null?_t.memoizedState:Ft.next;if(e!==null)Ft=e,At=n;else{if(n===null)throw Error(ce(310));At=n,n={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Ft===null?_t.memoizedState=Ft=n:Ft=Ft.next=n}return Ft}function Xs(n,e){return typeof e=="function"?e(n):e}function Cu(n){var e=zn(),t=e.queue;if(t===null)throw Error(ce(311));t.lastRenderedReducer=n;var i=At,r=i.baseQueue,o=t.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,t.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,u=null,c=o;do{var d=c.lane;if((Or&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=p,s=i):u=u.next=p,_t.lanes|=d,Ur|=d}c=c.next}while(c!==null&&c!==o);u===null?s=i:u.next=a,ii(i,e.memoizedState)||(mn=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=u,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do o=r.lane,_t.lanes|=o,Ur|=o,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Lu(n){var e=zn(),t=e.queue;if(t===null)throw Error(ce(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,o=e.memoizedState;if(r!==null){t.pending=null;var s=r=r.next;do o=n(o,s.action),s=s.next;while(s!==r);ii(o,e.memoizedState)||(mn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),t.lastRenderedState=o}return[o,i]}function wg(){}function Sg(n,e){var t=_t,i=zn(),r=e(),o=!ii(i.memoizedState,r);if(o&&(i.memoizedState=r,mn=!0),i=i.queue,nd(bg.bind(null,t,i,n),[n]),i.getSnapshot!==e||o||Ft!==null&&Ft.memoizedState.tag&1){if(t.flags|=2048,qs(9,Eg.bind(null,t,i,r,e),void 0,null),Nt===null)throw Error(ce(349));(Or&30)!==0||Mg(t,e,r)}return r}function Mg(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Eg(n,e,t,i){e.value=t,e.getSnapshot=i,Tg(e)&&Cg(n)}function bg(n,e,t){return t(function(){Tg(e)&&Cg(n)})}function Tg(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!ii(n,t)}catch{return!0}}function Cg(n){var e=Fi(n,1);e!==null&&Jn(e,n,1,-1)}function ph(n){var e=ci();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xs,lastRenderedState:n},e.queue=n,n=n.dispatch=R_.bind(null,_t,n),[e.memoizedState,n]}function qs(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Lg(){return zn().memoizedState}function il(n,e,t,i){var r=ci();_t.flags|=n,r.memoizedState=qs(1|e,t,void 0,i===void 0?null:i)}function Wl(n,e,t,i){var r=zn();i=i===void 0?null:i;var o=void 0;if(At!==null){var s=At.memoizedState;if(o=s.destroy,i!==null&&Jf(i,s.deps)){r.memoizedState=qs(e,t,o,i);return}}_t.flags|=n,r.memoizedState=qs(1|e,t,o,i)}function mh(n,e){return il(8390656,8,n,e)}function nd(n,e){return Wl(2048,8,n,e)}function Ag(n,e){return Wl(4,2,n,e)}function Pg(n,e){return Wl(4,4,n,e)}function Dg(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Rg(n,e,t){return t=t!=null?t.concat([n]):null,Wl(4,4,Dg.bind(null,e,n),t)}function id(){}function kg(n,e){var t=zn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Jf(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Fg(n,e){var t=zn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Jf(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Ig(n,e,t){return(Or&21)===0?(n.baseState&&(n.baseState=!1,mn=!0),n.memoizedState=t):(ii(t,e)||(t=Om(),_t.lanes|=t,Ur|=t,n.baseState=!0),e)}function P_(n,e){var t=nt;nt=t!==0&&4>t?t:4,n(!0);var i=Tu.transition;Tu.transition={};try{n(!1),e()}finally{nt=t,Tu.transition=i}}function Ng(){return zn().memoizedState}function D_(n,e,t){var i=ur(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},zg(n))Og(e,t);else if(t=pg(n,e,t,i),t!==null){var r=en();Jn(t,n,i,r),Ug(t,e,i)}}function R_(n,e,t){var i=ur(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(zg(n))Og(e,r);else{var o=n.alternate;if(n.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,t);if(r.hasEagerState=!0,r.eagerState=a,ii(a,s)){var u=e.interleaved;u===null?(r.next=r,Yf(e)):(r.next=u.next,u.next=r),e.interleaved=r;return}}catch{}finally{}t=pg(n,e,r,i),t!==null&&(r=en(),Jn(t,n,i,r),Ug(t,e,i))}}function zg(n){var e=n.alternate;return n===_t||e!==null&&e===_t}function Og(n,e){Cs=Cl=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Ug(n,e,t){if((t&4194240)!==0){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Ff(n,t)}}var Ll={readContext:Nn,useCallback:Xt,useContext:Xt,useEffect:Xt,useImperativeHandle:Xt,useInsertionEffect:Xt,useLayoutEffect:Xt,useMemo:Xt,useReducer:Xt,useRef:Xt,useState:Xt,useDebugValue:Xt,useDeferredValue:Xt,useTransition:Xt,useMutableSource:Xt,useSyncExternalStore:Xt,useId:Xt,unstable_isNewReconciler:!1},k_={readContext:Nn,useCallback:function(n,e){return ci().memoizedState=[n,e===void 0?null:e],n},useContext:Nn,useEffect:mh,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,il(4194308,4,Dg.bind(null,e,n),t)},useLayoutEffect:function(n,e){return il(4194308,4,n,e)},useInsertionEffect:function(n,e){return il(4,2,n,e)},useMemo:function(n,e){var t=ci();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=ci();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=D_.bind(null,_t,n),[i.memoizedState,n]},useRef:function(n){var e=ci();return n={current:n},e.memoizedState=n},useState:ph,useDebugValue:id,useDeferredValue:function(n){return ci().memoizedState=n},useTransition:function(){var n=ph(!1),e=n[0];return n=P_.bind(null,n[1]),ci().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=_t,r=ci();if(mt){if(t===void 0)throw Error(ce(407));t=t()}else{if(t=e(),Nt===null)throw Error(ce(349));(Or&30)!==0||Mg(i,e,t)}r.memoizedState=t;var o={value:t,getSnapshot:e};return r.queue=o,mh(bg.bind(null,i,o,n),[n]),i.flags|=2048,qs(9,Eg.bind(null,i,o,t,e),void 0,null),t},useId:function(){var n=ci(),e=Nt.identifierPrefix;if(mt){var t=Ai,i=Li;t=(i&~(1<<32-Qn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=js++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=A_++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},F_={readContext:Nn,useCallback:kg,useContext:Nn,useEffect:nd,useImperativeHandle:Rg,useInsertionEffect:Ag,useLayoutEffect:Pg,useMemo:Fg,useReducer:Cu,useRef:Lg,useState:function(){return Cu(Xs)},useDebugValue:id,useDeferredValue:function(n){var e=zn();return Ig(e,At.memoizedState,n)},useTransition:function(){var n=Cu(Xs)[0],e=zn().memoizedState;return[n,e]},useMutableSource:wg,useSyncExternalStore:Sg,useId:Ng,unstable_isNewReconciler:!1},I_={readContext:Nn,useCallback:kg,useContext:Nn,useEffect:nd,useImperativeHandle:Rg,useInsertionEffect:Ag,useLayoutEffect:Pg,useMemo:Fg,useReducer:Lu,useRef:Lg,useState:function(){return Lu(Xs)},useDebugValue:id,useDeferredValue:function(n){var e=zn();return At===null?e.memoizedState=n:Ig(e,At.memoizedState,n)},useTransition:function(){var n=Lu(Xs)[0],e=zn().memoizedState;return[n,e]},useMutableSource:wg,useSyncExternalStore:Sg,useId:Ng,unstable_isNewReconciler:!1};function Wo(n,e){try{var t="",i=e;do t+=u0(i),i=i.return;while(i);var r=t}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:n,source:e,stack:r,digest:null}}function Au(n,e,t){return{value:n,source:null,stack:t!=null?t:null,digest:e!=null?e:null}}function Qc(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var N_=typeof WeakMap=="function"?WeakMap:Map;function Bg(n,e,t){t=Pi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Pl||(Pl=!0,uf=i),Qc(n,e)},t}function Vg(n,e,t){t=Pi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Qc(n,e)}}var o=n.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Qc(n,e),typeof i!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),t}function gh(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new N_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=Z_.bind(null,n,e,t),e.then(n,n))}function vh(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function _h(n,e,t,i,r){return(n.mode&1)===0?(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Pi(-1,1),e.tag=2,ar(t,e,1))),t.lanes|=1),n):(n.flags|=65536,n.lanes=r,n)}var z_=Ni.ReactCurrentOwner,mn=!1;function Jt(n,e,t,i){e.child=n===null?yg(e,null,t,i):Ho(e,n.child,t,i)}function yh(n,e,t,i,r){t=t.render;var o=e.ref;return Io(e,r),i=ed(n,e,t,i,o,r),t=td(),n!==null&&!mn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ii(n,e,r)):(mt&&t&&Hf(e),e.flags|=1,Jt(n,e,i,r),e.child)}function xh(n,e,t,i,r){if(n===null){var o=t.type;return typeof o=="function"&&!fd(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=o,Hg(n,e,o,i,r)):(n=al(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(o=n.child,(n.lanes&r)===0){var s=o.memoizedProps;if(t=t.compare,t=t!==null?t:Us,t(s,i)&&n.ref===e.ref)return Ii(n,e,r)}return e.flags|=1,n=cr(o,i),n.ref=e.ref,n.return=e,e.child=n}function Hg(n,e,t,i,r){if(n!==null){var o=n.memoizedProps;if(Us(o,i)&&n.ref===e.ref)if(mn=!1,e.pendingProps=i=o,(n.lanes&r)!==0)(n.flags&131072)!==0&&(mn=!0);else return e.lanes=n.lanes,Ii(n,e,r)}return Jc(n,e,t,i,r)}function Gg(n,e,t){var i=e.pendingProps,r=i.children,o=n!==null?n.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(Ao,wn),wn|=t;else{if((t&1073741824)===0)return n=o!==null?o.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,ot(Ao,wn),wn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:t,ot(Ao,wn),wn|=i}else o!==null?(i=o.baseLanes|t,e.memoizedState=null):i=t,ot(Ao,wn),wn|=i;return Jt(n,e,r,t),e.child}function Wg(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Jc(n,e,t,i,r){var o=vn(t)?Nr:Kt.current;return o=Bo(e,o),Io(e,r),t=ed(n,e,t,i,o,r),i=td(),n!==null&&!mn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ii(n,e,r)):(mt&&i&&Hf(e),e.flags|=1,Jt(n,e,t,r),e.child)}function wh(n,e,t,i,r){if(vn(t)){var o=!0;xl(e)}else o=!1;if(Io(e,r),e.stateNode===null)rl(n,e),vg(e,t,i),Kc(e,t,i,r),i=!0;else if(n===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var u=s.context,c=t.contextType;typeof c=="object"&&c!==null?c=Nn(c):(c=vn(t)?Nr:Kt.current,c=Bo(e,c));var d=t.getDerivedStateFromProps,p=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||u!==c)&&dh(e,s,i,c),Ki=!1;var h=e.memoizedState;s.state=h,bl(e,i,s,r),u=e.memoizedState,a!==i||h!==u||gn.current||Ki?(typeof d=="function"&&(Zc(e,t,d,i),u=e.memoizedState),(a=Ki||fh(e,t,a,i,h,u,c))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=u),s.props=i,s.state=u,s.context=c,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,mg(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:Yn(e.type,a),s.props=c,p=e.pendingProps,h=s.context,u=t.contextType,typeof u=="object"&&u!==null?u=Nn(u):(u=vn(t)?Nr:Kt.current,u=Bo(e,u));var x=t.getDerivedStateFromProps;(d=typeof x=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==p||h!==u)&&dh(e,s,i,u),Ki=!1,h=e.memoizedState,s.state=h,bl(e,i,s,r);var S=e.memoizedState;a!==p||h!==S||gn.current||Ki?(typeof x=="function"&&(Zc(e,t,x,i),S=e.memoizedState),(c=Ki||fh(e,t,c,i,h,S,u)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,S,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,S,u)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=S),s.props=i,s.state=S,s.context=u,i=c):(typeof s.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return ef(n,e,t,i,o,r)}function ef(n,e,t,i,r,o){Wg(n,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&sh(e,t,!1),Ii(n,e,o);i=e.stateNode,z_.current=e;var a=s&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&s?(e.child=Ho(e,n.child,null,o),e.child=Ho(e,null,a,o)):Jt(n,e,a,o),e.memoizedState=i.state,r&&sh(e,t,!0),e.child}function jg(n){var e=n.stateNode;e.pendingContext?oh(n,e.pendingContext,e.pendingContext!==e.context):e.context&&oh(n,e.context,!1),Zf(n,e.containerInfo)}function Sh(n,e,t,i,r){return Vo(),Wf(r),e.flags|=256,Jt(n,e,t,i),e.child}var tf={dehydrated:null,treeContext:null,retryLane:0};function nf(n){return{baseLanes:n,cachePool:null,transitions:null}}function Xg(n,e,t){var i=e.pendingProps,r=vt.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),ot(vt,r&1),n===null)return Yc(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((e.mode&1)===0?e.lanes=1:n.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(s=i.children,n=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},(i&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=s):o=ql(s,i,0,null),n=kr(n,i,t,null),o.return=e,n.return=e,o.sibling=n,e.child=o,e.child.memoizedState=nf(t),e.memoizedState=tf,n):rd(e,s));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return O_(n,e,s,i,a,r,t);if(o){o=i.fallback,s=e.mode,r=n.child,a=r.sibling;var u={mode:"hidden",children:i.children};return(s&1)===0&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=u,e.deletions=null):(i=cr(r,u),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=cr(a,o):(o=kr(o,s,t,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=n.child.memoizedState,s=s===null?nf(t):{baseLanes:s.baseLanes|t,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=n.childLanes&~t,e.memoizedState=tf,i}return o=n.child,n=o.sibling,i=cr(o,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function rd(n,e){return e=ql({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Ma(n,e,t,i){return i!==null&&Wf(i),Ho(e,n.child,null,t),n=rd(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function O_(n,e,t,i,r,o,s){if(t)return e.flags&256?(e.flags&=-257,i=Au(Error(ce(422))),Ma(n,e,s,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=ql({mode:"visible",children:i.children},r,0,null),o=kr(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,(e.mode&1)!==0&&Ho(e,n.child,null,s),e.child.memoizedState=nf(s),e.memoizedState=tf,o);if((e.mode&1)===0)return Ma(n,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(ce(419)),i=Au(o,i,void 0),Ma(n,e,s,i)}if(a=(s&n.childLanes)!==0,mn||a){if(i=Nt,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|s))!==0?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Fi(n,r),Jn(i,n,r,-1))}return cd(),i=Au(Error(ce(421))),Ma(n,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=K_.bind(null,n),r._reactRetry=e,null):(n=o.treeContext,Sn=sr(r.nextSibling),Mn=e,mt=!0,Zn=null,n!==null&&(Pn[Dn++]=Li,Pn[Dn++]=Ai,Pn[Dn++]=zr,Li=n.id,Ai=n.overflow,zr=e),e=rd(e,i.children),e.flags|=4096,e)}function Mh(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),$c(n.return,e,t)}function Pu(n,e,t,i,r){var o=n.memoizedState;o===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=t,o.tailMode=r)}function qg(n,e,t){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(Jt(n,e,i.children,t),i=vt.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Mh(n,t,e);else if(n.tag===19)Mh(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(ot(vt,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Tl(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Pu(e,!1,r,t,o);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Tl(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Pu(e,!0,t,null,o);break;case"together":Pu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function rl(n,e){(e.mode&1)===0&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Ii(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Ur|=e.lanes,(t&e.childLanes)===0)return null;if(n!==null&&e.child!==n.child)throw Error(ce(153));if(e.child!==null){for(n=e.child,t=cr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=cr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function U_(n,e,t){switch(e.tag){case 3:jg(e),Vo();break;case 5:xg(e);break;case 1:vn(e.type)&&xl(e);break;case 4:Zf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ot(Ml,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ot(vt,vt.current&1),e.flags|=128,null):(t&e.child.childLanes)!==0?Xg(n,e,t):(ot(vt,vt.current&1),n=Ii(n,e,t),n!==null?n.sibling:null);ot(vt,vt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,(n.flags&128)!==0){if(i)return qg(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ot(vt,vt.current),i)break;return null;case 22:case 23:return e.lanes=0,Gg(n,e,t)}return Ii(n,e,t)}var Yg,rf,$g,Zg;Yg=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};rf=function(){};$g=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Lr(gi.current);var o=null;switch(t){case"input":r=bc(n,r),i=bc(n,i),o=[];break;case"select":r=yt({},r,{value:void 0}),i=yt({},i,{value:void 0}),o=[];break;case"textarea":r=Lc(n,r),i=Lc(n,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=_l)}Pc(t,i);var s;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(s in a)a.hasOwnProperty(s)&&(t||(t={}),t[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Rs.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in i){var u=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(t||(t={}),t[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(t||(t={}),t[s]=u[s])}else t||(o||(o=[]),o.push(c,t)),t=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Rs.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ct("scroll",n),o||a===u||(o=[])):(o=o||[]).push(c,u))}t&&(o=o||[]).push("style",t);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};Zg=function(n,e,t,i){t!==i&&(e.flags|=4)};function cs(n,e){if(!mt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function qt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function B_(n,e,t){var i=e.pendingProps;switch(Gf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(e),null;case 1:return vn(e.type)&&yl(),qt(e),null;case 3:return i=e.stateNode,Go(),dt(gn),dt(Kt),Qf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(wa(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Zn!==null&&(df(Zn),Zn=null))),rf(n,e),qt(e),null;case 5:Kf(e);var r=Lr(Ws.current);if(t=e.type,n!==null&&e.stateNode!=null)$g(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return qt(e),null}if(n=Lr(gi.current),wa(e)){i=e.stateNode,t=e.type;var o=e.memoizedProps;switch(i[di]=e,i[Hs]=o,n=(e.mode&1)!==0,t){case"dialog":ct("cancel",i),ct("close",i);break;case"iframe":case"object":case"embed":ct("load",i);break;case"video":case"audio":for(r=0;r<_s.length;r++)ct(_s[r],i);break;case"source":ct("error",i);break;case"img":case"image":case"link":ct("error",i),ct("load",i);break;case"details":ct("toggle",i);break;case"input":Rd(i,o),ct("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},ct("invalid",i);break;case"textarea":Fd(i,o),ct("invalid",i)}Pc(t,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&xa(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&xa(i.textContent,a,n),r=["children",""+a]):Rs.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ct("scroll",i)}switch(t){case"input":da(i),kd(i,o,!0);break;case"textarea":da(i),Id(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=_l)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Mm(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=s.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=s.createElement(t,{is:i.is}):(n=s.createElement(t),t==="select"&&(s=n,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):n=s.createElementNS(n,t),n[di]=e,n[Hs]=i,Yg(n,e,!1,!1),e.stateNode=n;e:{switch(s=Dc(t,i),t){case"dialog":ct("cancel",n),ct("close",n),r=i;break;case"iframe":case"object":case"embed":ct("load",n),r=i;break;case"video":case"audio":for(r=0;r<_s.length;r++)ct(_s[r],n);r=i;break;case"source":ct("error",n),r=i;break;case"img":case"image":case"link":ct("error",n),ct("load",n),r=i;break;case"details":ct("toggle",n),r=i;break;case"input":Rd(n,i),r=bc(n,i),ct("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=yt({},i,{value:void 0}),ct("invalid",n);break;case"textarea":Fd(n,i),r=Lc(n,i),ct("invalid",n);break;default:r=i}Pc(t,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?Tm(n,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Em(n,u)):o==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&ks(n,u):typeof u=="number"&&ks(n,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Rs.hasOwnProperty(o)?u!=null&&o==="onScroll"&&ct("scroll",n):u!=null&&Lf(n,o,u,s))}switch(t){case"input":da(n),kd(n,i,!1);break;case"textarea":da(n),Id(n);break;case"option":i.value!=null&&n.setAttribute("value",""+dr(i.value));break;case"select":n.multiple=!!i.multiple,o=i.value,o!=null?Do(n,!!i.multiple,o,!1):i.defaultValue!=null&&Do(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=_l)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qt(e),null;case 6:if(n&&e.stateNode!=null)Zg(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(t=Lr(Ws.current),Lr(gi.current),wa(e)){if(i=e.stateNode,t=e.memoizedProps,i[di]=e,(o=i.nodeValue!==t)&&(n=Mn,n!==null))switch(n.tag){case 3:xa(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&xa(i.nodeValue,t,(n.mode&1)!==0)}o&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[di]=e,e.stateNode=i}return qt(e),null;case 13:if(dt(vt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(mt&&Sn!==null&&(e.mode&1)!==0&&(e.flags&128)===0)hg(),Vo(),e.flags|=98560,o=!1;else if(o=wa(e),i!==null&&i.dehydrated!==null){if(n===null){if(!o)throw Error(ce(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(ce(317));o[di]=e}else Vo(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;qt(e),o=!1}else Zn!==null&&(df(Zn),Zn=null),o=!0;if(!o)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(n===null||(vt.current&1)!==0?Pt===0&&(Pt=3):cd())),e.updateQueue!==null&&(e.flags|=4),qt(e),null);case 4:return Go(),rf(n,e),n===null&&Bs(e.stateNode.containerInfo),qt(e),null;case 10:return qf(e.type._context),qt(e),null;case 17:return vn(e.type)&&yl(),qt(e),null;case 19:if(dt(vt),o=e.memoizedState,o===null)return qt(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)cs(o,!1);else{if(Pt!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(s=Tl(n),s!==null){for(e.flags|=128,cs(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)o=t,n=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=n,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,n=s.dependencies,o.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return ot(vt,vt.current&1|2),e.child}n=n.sibling}o.tail!==null&&Mt()>jo&&(e.flags|=128,i=!0,cs(o,!1),e.lanes=4194304)}else{if(!i)if(n=Tl(s),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),cs(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!mt)return qt(e),null}else 2*Mt()-o.renderingStartTime>jo&&t!==1073741824&&(e.flags|=128,i=!0,cs(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(t=o.last,t!==null?t.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Mt(),e.sibling=null,t=vt.current,ot(vt,i?t&1|2:t&1),e):(qt(e),null);case 22:case 23:return ud(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(wn&1073741824)!==0&&(qt(e),e.subtreeFlags&6&&(e.flags|=8192)):qt(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function V_(n,e){switch(Gf(e),e.tag){case 1:return vn(e.type)&&yl(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Go(),dt(gn),dt(Kt),Qf(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 5:return Kf(e),null;case 13:if(dt(vt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));Vo()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return dt(vt),null;case 4:return Go(),null;case 10:return qf(e.type._context),null;case 22:case 23:return ud(),null;case 24:return null;default:return null}}var Ea=!1,Zt=!1,H_=typeof WeakSet=="function"?WeakSet:Set,be=null;function Lo(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){wt(n,e,i)}else t.current=null}function of(n,e,t){try{t()}catch(i){wt(n,e,i)}}var Eh=!1;function G_(n,e){if(Vc=ml,n=eg(),Vf(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var s=0,a=-1,u=-1,c=0,d=0,p=n,h=null;t:for(;;){for(var x;p!==t||r!==0&&p.nodeType!==3||(a=s+r),p!==o||i!==0&&p.nodeType!==3||(u=s+i),p.nodeType===3&&(s+=p.nodeValue.length),(x=p.firstChild)!==null;)h=p,p=x;for(;;){if(p===n)break t;if(h===t&&++c===r&&(a=s),h===o&&++d===i&&(u=s),(x=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=x}t=a===-1||u===-1?null:{start:a,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(Hc={focusedElem:n,selectionRange:t},ml=!1,be=e;be!==null;)if(e=be,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,be=n;else for(;be!==null;){e=be;try{var S=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var g=S.memoizedProps,m=S.memoizedState,_=e.stateNode,w=_.getSnapshotBeforeUpdate(e.elementType===e.type?g:Yn(e.type,g),m);_.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(b){wt(e,e.return,b)}if(n=e.sibling,n!==null){n.return=e.return,be=n;break}be=e.return}return S=Eh,Eh=!1,S}function Ls(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var o=r.destroy;r.destroy=void 0,o!==void 0&&of(e,t,o)}r=r.next}while(r!==i)}}function jl(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function sf(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Kg(n){var e=n.alternate;e!==null&&(n.alternate=null,Kg(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[di],delete e[Hs],delete e[jc],delete e[b_],delete e[T_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Qg(n){return n.tag===5||n.tag===3||n.tag===4}function bh(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Qg(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function af(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=_l));else if(i!==4&&(n=n.child,n!==null))for(af(n,e,t),n=n.sibling;n!==null;)af(n,e,t),n=n.sibling}function lf(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(lf(n,e,t),n=n.sibling;n!==null;)lf(n,e,t),n=n.sibling}var Bt=null,$n=!1;function Hi(n,e,t){for(t=t.child;t!==null;)Jg(n,e,t),t=t.sibling}function Jg(n,e,t){if(mi&&typeof mi.onCommitFiberUnmount=="function")try{mi.onCommitFiberUnmount(zl,t)}catch{}switch(t.tag){case 5:Zt||Lo(t,e);case 6:var i=Bt,r=$n;Bt=null,Hi(n,e,t),Bt=i,$n=r,Bt!==null&&($n?(n=Bt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Bt.removeChild(t.stateNode));break;case 18:Bt!==null&&($n?(n=Bt,t=t.stateNode,n.nodeType===8?Mu(n.parentNode,t):n.nodeType===1&&Mu(n,t),zs(n)):Mu(Bt,t.stateNode));break;case 4:i=Bt,r=$n,Bt=t.stateNode.containerInfo,$n=!0,Hi(n,e,t),Bt=i,$n=r;break;case 0:case 11:case 14:case 15:if(!Zt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&((o&2)!==0||(o&4)!==0)&&of(t,e,s),r=r.next}while(r!==i)}Hi(n,e,t);break;case 1:if(!Zt&&(Lo(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){wt(t,e,a)}Hi(n,e,t);break;case 21:Hi(n,e,t);break;case 22:t.mode&1?(Zt=(i=Zt)||t.memoizedState!==null,Hi(n,e,t),Zt=i):Hi(n,e,t);break;default:Hi(n,e,t)}}function Th(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new H_),e.forEach(function(i){var r=Q_.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Gn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var o=n,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Bt=a.stateNode,$n=!1;break e;case 3:Bt=a.stateNode.containerInfo,$n=!0;break e;case 4:Bt=a.stateNode.containerInfo,$n=!0;break e}a=a.return}if(Bt===null)throw Error(ce(160));Jg(o,s,r),Bt=null,$n=!1;var u=r.alternate;u!==null&&(u.return=null),r.return=null}catch(c){wt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ev(e,n),e=e.sibling}function ev(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Gn(e,n),li(n),i&4){try{Ls(3,n,n.return),jl(3,n)}catch(g){wt(n,n.return,g)}try{Ls(5,n,n.return)}catch(g){wt(n,n.return,g)}}break;case 1:Gn(e,n),li(n),i&512&&t!==null&&Lo(t,t.return);break;case 5:if(Gn(e,n),li(n),i&512&&t!==null&&Lo(t,t.return),n.flags&32){var r=n.stateNode;try{ks(r,"")}catch(g){wt(n,n.return,g)}}if(i&4&&(r=n.stateNode,r!=null)){var o=n.memoizedProps,s=t!==null?t.memoizedProps:o,a=n.type,u=n.updateQueue;if(n.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&wm(r,o),Dc(a,s);var c=Dc(a,o);for(s=0;s<u.length;s+=2){var d=u[s],p=u[s+1];d==="style"?Tm(r,p):d==="dangerouslySetInnerHTML"?Em(r,p):d==="children"?ks(r,p):Lf(r,d,p,c)}switch(a){case"input":Tc(r,o);break;case"textarea":Sm(r,o);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?Do(r,!!o.multiple,x,!1):h!==!!o.multiple&&(o.defaultValue!=null?Do(r,!!o.multiple,o.defaultValue,!0):Do(r,!!o.multiple,o.multiple?[]:"",!1))}r[Hs]=o}catch(g){wt(n,n.return,g)}}break;case 6:if(Gn(e,n),li(n),i&4){if(n.stateNode===null)throw Error(ce(162));r=n.stateNode,o=n.memoizedProps;try{r.nodeValue=o}catch(g){wt(n,n.return,g)}}break;case 3:if(Gn(e,n),li(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{zs(e.containerInfo)}catch(g){wt(n,n.return,g)}break;case 4:Gn(e,n),li(n);break;case 13:Gn(e,n),li(n),r=n.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(ad=Mt())),i&4&&Th(n);break;case 22:if(d=t!==null&&t.memoizedState!==null,n.mode&1?(Zt=(c=Zt)||d,Gn(e,n),Zt=c):Gn(e,n),li(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!d&&(n.mode&1)!==0)for(be=n,d=n.child;d!==null;){for(p=be=d;be!==null;){switch(h=be,x=h.child,h.tag){case 0:case 11:case 14:case 15:Ls(4,h,h.return);break;case 1:Lo(h,h.return);var S=h.stateNode;if(typeof S.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(g){wt(i,t,g)}}break;case 5:Lo(h,h.return);break;case 22:if(h.memoizedState!==null){Lh(p);continue}}x!==null?(x.return=h,be=x):Lh(p)}d=d.sibling}e:for(d=null,p=n;;){if(p.tag===5){if(d===null){d=p;try{r=p.stateNode,c?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=p.stateNode,u=p.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=bm("display",s))}catch(g){wt(n,n.return,g)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(g){wt(n,n.return,g)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===n)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===n)break e;for(;p.sibling===null;){if(p.return===null||p.return===n)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Gn(e,n),li(n),i&4&&Th(n);break;case 21:break;default:Gn(e,n),li(n)}}function li(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Qg(t)){var i=t;break e}t=t.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ks(r,""),i.flags&=-33);var o=bh(n);lf(n,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=bh(n);af(n,a,s);break;default:throw Error(ce(161))}}catch(u){wt(n,n.return,u)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function W_(n,e,t){be=n,tv(n)}function tv(n,e,t){for(var i=(n.mode&1)!==0;be!==null;){var r=be,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||Ea;if(!s){var a=r.alternate,u=a!==null&&a.memoizedState!==null||Zt;a=Ea;var c=Zt;if(Ea=s,(Zt=u)&&!c)for(be=r;be!==null;)s=be,u=s.child,s.tag===22&&s.memoizedState!==null?Ah(r):u!==null?(u.return=s,be=u):Ah(r);for(;o!==null;)be=o,tv(o),o=o.sibling;be=r,Ea=a,Zt=c}Ch(n)}else(r.subtreeFlags&8772)!==0&&o!==null?(o.return=r,be=o):Ch(n)}}function Ch(n){for(;be!==null;){var e=be;if((e.flags&8772)!==0){var t=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Zt||jl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Zt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Yn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&ch(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}ch(e,s,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&zs(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}Zt||e.flags&512&&sf(e)}catch(h){wt(e,e.return,h)}}if(e===n){be=null;break}if(t=e.sibling,t!==null){t.return=e.return,be=t;break}be=e.return}}function Lh(n){for(;be!==null;){var e=be;if(e===n){be=null;break}var t=e.sibling;if(t!==null){t.return=e.return,be=t;break}be=e.return}}function Ah(n){for(;be!==null;){var e=be;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{jl(4,e)}catch(u){wt(e,t,u)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(u){wt(e,r,u)}}var o=e.return;try{sf(e)}catch(u){wt(e,o,u)}break;case 5:var s=e.return;try{sf(e)}catch(u){wt(e,s,u)}}}catch(u){wt(e,e.return,u)}if(e===n){be=null;break}var a=e.sibling;if(a!==null){a.return=e.return,be=a;break}be=e.return}}var j_=Math.ceil,Al=Ni.ReactCurrentDispatcher,od=Ni.ReactCurrentOwner,In=Ni.ReactCurrentBatchConfig,Je=0,Nt=null,Ct=null,Vt=0,wn=0,Ao=mr(0),Pt=0,Ys=null,Ur=0,Xl=0,sd=0,As=null,cn=null,ad=0,jo=1/0,Ei=null,Pl=!1,uf=null,lr=null,ba=!1,nr=null,Dl=0,Ps=0,cf=null,ol=-1,sl=0;function en(){return(Je&6)!==0?Mt():ol!==-1?ol:ol=Mt()}function ur(n){return(n.mode&1)===0?1:(Je&2)!==0&&Vt!==0?Vt&-Vt:L_.transition!==null?(sl===0&&(sl=Om()),sl):(n=nt,n!==0||(n=window.event,n=n===void 0?16:jm(n.type)),n)}function Jn(n,e,t,i){if(50<Ps)throw Ps=0,cf=null,Error(ce(185));Js(n,t,i),((Je&2)===0||n!==Nt)&&(n===Nt&&((Je&2)===0&&(Xl|=t),Pt===4&&er(n,Vt)),_n(n,i),t===1&&Je===0&&(e.mode&1)===0&&(jo=Mt()+500,Hl&&gr()))}function _n(n,e){var t=n.callbackNode;L0(n,e);var i=pl(n,n===Nt?Vt:0);if(i===0)t!==null&&Od(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Od(t),e===1)n.tag===0?C_(Ph.bind(null,n)):cg(Ph.bind(null,n)),M_(function(){(Je&6)===0&&gr()}),t=null;else{switch(Um(i)){case 1:t=kf;break;case 4:t=Nm;break;case 16:t=hl;break;case 536870912:t=zm;break;default:t=hl}t=uv(t,nv.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function nv(n,e){if(ol=-1,sl=0,(Je&6)!==0)throw Error(ce(327));var t=n.callbackNode;if(No()&&n.callbackNode!==t)return null;var i=pl(n,n===Nt?Vt:0);if(i===0)return null;if((i&30)!==0||(i&n.expiredLanes)!==0||e)e=Rl(n,i);else{e=i;var r=Je;Je|=2;var o=rv();(Nt!==n||Vt!==e)&&(Ei=null,jo=Mt()+500,Rr(n,e));do try{Y_();break}catch(a){iv(n,a)}while(1);Xf(),Al.current=o,Je=r,Ct!==null?e=0:(Nt=null,Vt=0,e=Pt)}if(e!==0){if(e===2&&(r=Nc(n),r!==0&&(i=r,e=ff(n,r))),e===1)throw t=Ys,Rr(n,0),er(n,i),_n(n,Mt()),t;if(e===6)er(n,i);else{if(r=n.current.alternate,(i&30)===0&&!X_(r)&&(e=Rl(n,i),e===2&&(o=Nc(n),o!==0&&(i=o,e=ff(n,o))),e===1))throw t=Ys,Rr(n,0),er(n,i),_n(n,Mt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:Sr(n,cn,Ei);break;case 3:if(er(n,i),(i&130023424)===i&&(e=ad+500-Mt(),10<e)){if(pl(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){en(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Wc(Sr.bind(null,n,cn,Ei),e);break}Sr(n,cn,Ei);break;case 4:if(er(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var s=31-Qn(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=Mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*j_(i/1960))-i,10<i){n.timeoutHandle=Wc(Sr.bind(null,n,cn,Ei),i);break}Sr(n,cn,Ei);break;case 5:Sr(n,cn,Ei);break;default:throw Error(ce(329))}}}return _n(n,Mt()),n.callbackNode===t?nv.bind(null,n):null}function ff(n,e){var t=As;return n.current.memoizedState.isDehydrated&&(Rr(n,e).flags|=256),n=Rl(n,e),n!==2&&(e=cn,cn=t,e!==null&&df(e)),n}function df(n){cn===null?cn=n:cn.push.apply(cn,n)}function X_(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],o=r.getSnapshot;r=r.value;try{if(!ii(o(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function er(n,e){for(e&=~sd,e&=~Xl,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Qn(e),i=1<<t;n[t]=-1,e&=~i}}function Ph(n){if((Je&6)!==0)throw Error(ce(327));No();var e=pl(n,0);if((e&1)===0)return _n(n,Mt()),null;var t=Rl(n,e);if(n.tag!==0&&t===2){var i=Nc(n);i!==0&&(e=i,t=ff(n,i))}if(t===1)throw t=Ys,Rr(n,0),er(n,e),_n(n,Mt()),t;if(t===6)throw Error(ce(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Sr(n,cn,Ei),_n(n,Mt()),null}function ld(n,e){var t=Je;Je|=1;try{return n(e)}finally{Je=t,Je===0&&(jo=Mt()+500,Hl&&gr())}}function Br(n){nr!==null&&nr.tag===0&&(Je&6)===0&&No();var e=Je;Je|=1;var t=In.transition,i=nt;try{if(In.transition=null,nt=1,n)return n()}finally{nt=i,In.transition=t,Je=e,(Je&6)===0&&gr()}}function ud(){wn=Ao.current,dt(Ao)}function Rr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,S_(t)),Ct!==null)for(t=Ct.return;t!==null;){var i=t;switch(Gf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&yl();break;case 3:Go(),dt(gn),dt(Kt),Qf();break;case 5:Kf(i);break;case 4:Go();break;case 13:dt(vt);break;case 19:dt(vt);break;case 10:qf(i.type._context);break;case 22:case 23:ud()}t=t.return}if(Nt=n,Ct=n=cr(n.current,null),Vt=wn=e,Pt=0,Ys=null,sd=Xl=Ur=0,cn=As=null,Cr!==null){for(e=0;e<Cr.length;e++)if(t=Cr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,o=t.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}t.pending=i}Cr=null}return n}function iv(n,e){do{var t=Ct;try{if(Xf(),nl.current=Ll,Cl){for(var i=_t.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Cl=!1}if(Or=0,Ft=At=_t=null,Cs=!1,js=0,od.current=null,t===null||t.return===null){Pt=1,Ys=e,Ct=null;break}e:{var o=n,s=t.return,a=t,u=e;if(e=Vt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,p=d.tag;if((d.mode&1)===0&&(p===0||p===11||p===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var x=vh(s);if(x!==null){x.flags&=-257,_h(x,s,a,o,e),x.mode&1&&gh(o,c,e),e=x,u=c;var S=e.updateQueue;if(S===null){var g=new Set;g.add(u),e.updateQueue=g}else S.add(u);break e}else{if((e&1)===0){gh(o,c,e),cd();break e}u=Error(ce(426))}}else if(mt&&a.mode&1){var m=vh(s);if(m!==null){(m.flags&65536)===0&&(m.flags|=256),_h(m,s,a,o,e),Wf(Wo(u,a));break e}}o=u=Wo(u,a),Pt!==4&&(Pt=2),As===null?As=[o]:As.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var _=Bg(o,u,e);uh(o,_);break e;case 1:a=u;var w=o.type,E=o.stateNode;if((o.flags&128)===0&&(typeof w.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(lr===null||!lr.has(E)))){o.flags|=65536,e&=-e,o.lanes|=e;var b=Vg(o,a,e);uh(o,b);break e}}o=o.return}while(o!==null)}sv(t)}catch(L){e=L,Ct===t&&t!==null&&(Ct=t=t.return);continue}break}while(1)}function rv(){var n=Al.current;return Al.current=Ll,n===null?Ll:n}function cd(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),Nt===null||(Ur&268435455)===0&&(Xl&268435455)===0||er(Nt,Vt)}function Rl(n,e){var t=Je;Je|=2;var i=rv();(Nt!==n||Vt!==e)&&(Ei=null,Rr(n,e));do try{q_();break}catch(r){iv(n,r)}while(1);if(Xf(),Je=t,Al.current=i,Ct!==null)throw Error(ce(261));return Nt=null,Vt=0,Pt}function q_(){for(;Ct!==null;)ov(Ct)}function Y_(){for(;Ct!==null&&!y0();)ov(Ct)}function ov(n){var e=lv(n.alternate,n,wn);n.memoizedProps=n.pendingProps,e===null?sv(n):Ct=e,od.current=null}function sv(n){var e=n;do{var t=e.alternate;if(n=e.return,(e.flags&32768)===0){if(t=B_(t,e,wn),t!==null){Ct=t;return}}else{if(t=V_(t,e),t!==null){t.flags&=32767,Ct=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Pt=6,Ct=null;return}}if(e=e.sibling,e!==null){Ct=e;return}Ct=e=n}while(e!==null);Pt===0&&(Pt=5)}function Sr(n,e,t){var i=nt,r=In.transition;try{In.transition=null,nt=1,$_(n,e,t,i)}finally{In.transition=r,nt=i}return null}function $_(n,e,t,i){do No();while(nr!==null);if((Je&6)!==0)throw Error(ce(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ce(177));n.callbackNode=null,n.callbackPriority=0;var o=t.lanes|t.childLanes;if(A0(n,o),n===Nt&&(Ct=Nt=null,Vt=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||ba||(ba=!0,uv(hl,function(){return No(),null})),o=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||o){o=In.transition,In.transition=null;var s=nt;nt=1;var a=Je;Je|=4,od.current=null,G_(n,t),ev(t,n),m_(Hc),ml=!!Vc,Hc=Vc=null,n.current=t,W_(t),x0(),Je=a,nt=s,In.transition=o}else n.current=t;if(ba&&(ba=!1,nr=n,Dl=r),o=n.pendingLanes,o===0&&(lr=null),M0(t.stateNode),_n(n,Mt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Pl)throw Pl=!1,n=uf,uf=null,n;return(Dl&1)!==0&&n.tag!==0&&No(),o=n.pendingLanes,(o&1)!==0?n===cf?Ps++:(Ps=0,cf=n):Ps=0,gr(),null}function No(){if(nr!==null){var n=Um(Dl),e=In.transition,t=nt;try{if(In.transition=null,nt=16>n?16:n,nr===null)var i=!1;else{if(n=nr,nr=null,Dl=0,(Je&6)!==0)throw Error(ce(331));var r=Je;for(Je|=4,be=n.current;be!==null;){var o=be,s=o.child;if((be.flags&16)!==0){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(be=c;be!==null;){var d=be;switch(d.tag){case 0:case 11:case 15:Ls(8,d,o)}var p=d.child;if(p!==null)p.return=d,be=p;else for(;be!==null;){d=be;var h=d.sibling,x=d.return;if(Kg(d),d===c){be=null;break}if(h!==null){h.return=x,be=h;break}be=x}}}var S=o.alternate;if(S!==null){var g=S.child;if(g!==null){S.child=null;do{var m=g.sibling;g.sibling=null,g=m}while(g!==null)}}be=o}}if((o.subtreeFlags&2064)!==0&&s!==null)s.return=o,be=s;else e:for(;be!==null;){if(o=be,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:Ls(9,o,o.return)}var _=o.sibling;if(_!==null){_.return=o.return,be=_;break e}be=o.return}}var w=n.current;for(be=w;be!==null;){s=be;var E=s.child;if((s.subtreeFlags&2064)!==0&&E!==null)E.return=s,be=E;else e:for(s=w;be!==null;){if(a=be,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:jl(9,a)}}catch(L){wt(a,a.return,L)}if(a===s){be=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,be=b;break e}be=a.return}}if(Je=r,gr(),mi&&typeof mi.onPostCommitFiberRoot=="function")try{mi.onPostCommitFiberRoot(zl,n)}catch{}i=!0}return i}finally{nt=t,In.transition=e}}return!1}function Dh(n,e,t){e=Wo(t,e),e=Bg(n,e,1),n=ar(n,e,1),e=en(),n!==null&&(Js(n,1,e),_n(n,e))}function wt(n,e,t){if(n.tag===3)Dh(n,n,t);else for(;e!==null;){if(e.tag===3){Dh(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(lr===null||!lr.has(i))){n=Wo(t,n),n=Vg(e,n,1),e=ar(e,n,1),n=en(),e!==null&&(Js(e,1,n),_n(e,n));break}}e=e.return}}function Z_(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=en(),n.pingedLanes|=n.suspendedLanes&t,Nt===n&&(Vt&t)===t&&(Pt===4||Pt===3&&(Vt&130023424)===Vt&&500>Mt()-ad?Rr(n,0):sd|=t),_n(n,e)}function av(n,e){e===0&&((n.mode&1)===0?e=1:(e=ma,ma<<=1,(ma&130023424)===0&&(ma=4194304)));var t=en();n=Fi(n,e),n!==null&&(Js(n,e,t),_n(n,t))}function K_(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),av(n,t)}function Q_(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),av(n,t)}var lv;lv=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||gn.current)mn=!0;else{if((n.lanes&t)===0&&(e.flags&128)===0)return mn=!1,U_(n,e,t);mn=(n.flags&131072)!==0}else mn=!1,mt&&(e.flags&1048576)!==0&&fg(e,Sl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;rl(n,e),n=e.pendingProps;var r=Bo(e,Kt.current);Io(e,t),r=ed(null,e,i,n,r,t);var o=td();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vn(i)?(o=!0,xl(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,$f(e),r.updater=Gl,e.stateNode=r,r._reactInternals=e,Kc(e,i,n,t),e=ef(null,e,i,!0,o,t)):(e.tag=0,mt&&o&&Hf(e),Jt(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(rl(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=ey(i),n=Yn(i,n),r){case 0:e=Jc(null,e,i,n,t);break e;case 1:e=wh(null,e,i,n,t);break e;case 11:e=yh(null,e,i,n,t);break e;case 14:e=xh(null,e,i,Yn(i.type,n),t);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Jc(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),wh(n,e,i,r,t);case 3:e:{if(jg(e),n===null)throw Error(ce(387));i=e.pendingProps,o=e.memoizedState,r=o.element,mg(n,e),bl(e,i,null,t);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=Wo(Error(ce(423)),e),e=Sh(n,e,i,t,r);break e}else if(i!==r){r=Wo(Error(ce(424)),e),e=Sh(n,e,i,t,r);break e}else for(Sn=sr(e.stateNode.containerInfo.firstChild),Mn=e,mt=!0,Zn=null,t=yg(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Vo(),i===r){e=Ii(n,e,t);break e}Jt(n,e,i,t)}e=e.child}return e;case 5:return xg(e),n===null&&Yc(e),i=e.type,r=e.pendingProps,o=n!==null?n.memoizedProps:null,s=r.children,Gc(i,r)?s=null:o!==null&&Gc(i,o)&&(e.flags|=32),Wg(n,e),Jt(n,e,s,t),e.child;case 6:return n===null&&Yc(e),null;case 13:return Xg(n,e,t);case 4:return Zf(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Ho(e,null,i,t):Jt(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),yh(n,e,i,r,t);case 7:return Jt(n,e,e.pendingProps,t),e.child;case 8:return Jt(n,e,e.pendingProps.children,t),e.child;case 12:return Jt(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,ot(Ml,i._currentValue),i._currentValue=s,o!==null)if(ii(o.value,s)){if(o.children===r.children&&!gn.current){e=Ii(n,e,t);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var u=a.firstContext;u!==null;){if(u.context===i){if(o.tag===1){u=Pi(-1,t&-t),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),$c(o.return,t,e),a.lanes|=t;break}u=u.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(ce(341));s.lanes|=t,a=s.alternate,a!==null&&(a.lanes|=t),$c(s,t,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Jt(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Io(e,t),r=Nn(r),i=i(r),e.flags|=1,Jt(n,e,i,t),e.child;case 14:return i=e.type,r=Yn(i,e.pendingProps),r=Yn(i.type,r),xh(n,e,i,r,t);case 15:return Hg(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),rl(n,e),e.tag=1,vn(i)?(n=!0,xl(e)):n=!1,Io(e,t),vg(e,i,r),Kc(e,i,r,t),ef(null,e,i,!0,n,t);case 19:return qg(n,e,t);case 22:return Gg(n,e,t)}throw Error(ce(156,e.tag))};function uv(n,e){return Im(n,e)}function J_(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(n,e,t,i){return new J_(n,e,t,i)}function fd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ey(n){if(typeof n=="function")return fd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Pf)return 11;if(n===Df)return 14}return 2}function cr(n,e){var t=n.alternate;return t===null?(t=kn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function al(n,e,t,i,r,o){var s=2;if(i=n,typeof n=="function")fd(n)&&(s=1);else if(typeof n=="string")s=5;else e:switch(n){case yo:return kr(t.children,r,o,e);case Af:s=8,r|=8;break;case wc:return n=kn(12,t,e,r|2),n.elementType=wc,n.lanes=o,n;case Sc:return n=kn(13,t,e,r),n.elementType=Sc,n.lanes=o,n;case Mc:return n=kn(19,t,e,r),n.elementType=Mc,n.lanes=o,n;case _m:return ql(t,r,o,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case gm:s=10;break e;case vm:s=9;break e;case Pf:s=11;break e;case Df:s=14;break e;case Zi:s=16,i=null;break e}throw Error(ce(130,n==null?n:typeof n,""))}return e=kn(s,t,e,r),e.elementType=n,e.type=i,e.lanes=o,e}function kr(n,e,t,i){return n=kn(7,n,i,e),n.lanes=t,n}function ql(n,e,t,i){return n=kn(22,n,i,e),n.elementType=_m,n.lanes=t,n.stateNode={isHidden:!1},n}function Du(n,e,t){return n=kn(6,n,null,e),n.lanes=t,n}function Ru(n,e,t){return e=kn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function ty(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=du(0),this.expirationTimes=du(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=du(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function dd(n,e,t,i,r,o,s,a,u){return n=new ty(n,e,t,a,u),e===1?(e=1,o===!0&&(e|=8)):e=0,o=kn(3,null,null,e),n.current=o,o.stateNode=n,o.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},$f(o),n}function ny(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_o,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function cv(n){if(!n)return hr;n=n._reactInternals;e:{if(qr(n)!==n||n.tag!==1)throw Error(ce(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(n.tag===1){var t=n.type;if(vn(t))return ug(n,t,e)}return e}function fv(n,e,t,i,r,o,s,a,u){return n=dd(t,i,!0,n,r,o,s,a,u),n.context=cv(null),t=n.current,i=en(),r=ur(t),o=Pi(i,r),o.callback=e!=null?e:null,ar(t,o,r),n.current.lanes=r,Js(n,r,i),_n(n,i),n}function Yl(n,e,t,i){var r=e.current,o=en(),s=ur(r);return t=cv(t),e.context===null?e.context=t:e.pendingContext=t,e=Pi(o,s),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=ar(r,e,s),n!==null&&(Jn(n,r,s,o),tl(n,r,s)),s}function kl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Rh(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function hd(n,e){Rh(n,e),(n=n.alternate)&&Rh(n,e)}function iy(){return null}var dv=typeof reportError=="function"?reportError:function(n){console.error(n)};function pd(n){this._internalRoot=n}$l.prototype.render=pd.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ce(409));Yl(n,e,null,null)};$l.prototype.unmount=pd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Br(function(){Yl(null,n,null,null)}),e[ki]=null}};function $l(n){this._internalRoot=n}$l.prototype.unstable_scheduleHydration=function(n){if(n){var e=Hm();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Ji.length&&e!==0&&e<Ji[t].priority;t++);Ji.splice(t,0,n),t===0&&Wm(n)}};function md(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Zl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function kh(){}function ry(n,e,t,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var c=kl(s);o.call(c)}}var s=fv(e,i,n,0,null,!1,!1,"",kh);return n._reactRootContainer=s,n[ki]=s.current,Bs(n.nodeType===8?n.parentNode:n),Br(),s}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=kl(u);a.call(c)}}var u=dd(n,0,!1,null,null,!1,!1,"",kh);return n._reactRootContainer=u,n[ki]=u.current,Bs(n.nodeType===8?n.parentNode:n),Br(function(){Yl(e,u,t,i)}),u}function Kl(n,e,t,i,r){var o=t._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var u=kl(s);a.call(u)}}Yl(e,s,n,r)}else s=ry(t,e,n,r,i);return kl(s)}Bm=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=vs(e.pendingLanes);t!==0&&(Ff(e,t|1),_n(e,Mt()),(Je&6)===0&&(jo=Mt()+500,gr()))}break;case 13:Br(function(){var i=Fi(n,1);if(i!==null){var r=en();Jn(i,n,1,r)}}),hd(n,1)}};If=function(n){if(n.tag===13){var e=Fi(n,134217728);if(e!==null){var t=en();Jn(e,n,134217728,t)}hd(n,134217728)}};Vm=function(n){if(n.tag===13){var e=ur(n),t=Fi(n,e);if(t!==null){var i=en();Jn(t,n,e,i)}hd(n,e)}};Hm=function(){return nt};Gm=function(n,e){var t=nt;try{return nt=n,e()}finally{nt=t}};kc=function(n,e,t){switch(e){case"input":if(Tc(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Vl(i);if(!r)throw Error(ce(90));xm(i),Tc(i,r)}}}break;case"textarea":Sm(n,t);break;case"select":e=t.value,e!=null&&Do(n,!!t.multiple,e,!1)}};Am=ld;Pm=Br;var oy={usingClientEntryPoint:!1,Events:[ta,Mo,Vl,Cm,Lm,ld]},fs={findFiberByHostInstance:Tr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},sy={bundleType:fs.bundleType,version:fs.version,rendererPackageName:fs.rendererPackageName,rendererConfig:fs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ni.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=km(n),n===null?null:n.stateNode},findFiberByHostInstance:fs.findFiberByHostInstance||iy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ta=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ta.isDisabled&&Ta.supportsFiber)try{zl=Ta.inject(sy),mi=Ta}catch{}}bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oy;bn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!md(e))throw Error(ce(200));return ny(n,e,null,t)};bn.createRoot=function(n,e){if(!md(n))throw Error(ce(299));var t=!1,i="",r=dv;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=dd(n,1,!1,null,null,t,!1,i,r),n[ki]=e.current,Bs(n.nodeType===8?n.parentNode:n),new pd(e)};bn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ce(188)):(n=Object.keys(n).join(","),Error(ce(268,n)));return n=km(e),n=n===null?null:n.stateNode,n};bn.flushSync=function(n){return Br(n)};bn.hydrate=function(n,e,t){if(!Zl(e))throw Error(ce(200));return Kl(null,n,e,!0,t)};bn.hydrateRoot=function(n,e,t){if(!md(n))throw Error(ce(405));var i=t!=null&&t.hydratedSources||null,r=!1,o="",s=dv;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),e=fv(e,null,n,1,t!=null?t:null,r,!1,o,s),n[ki]=e.current,Bs(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new $l(e)};bn.render=function(n,e,t){if(!Zl(e))throw Error(ce(200));return Kl(null,n,e,!1,t)};bn.unmountComponentAtNode=function(n){if(!Zl(n))throw Error(ce(40));return n._reactRootContainer?(Br(function(){Kl(null,null,n,!1,function(){n._reactRootContainer=null,n[ki]=null})}),!0):!1};bn.unstable_batchedUpdates=ld;bn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Zl(t))throw Error(ce(200));if(n==null||n._reactInternals===void 0)throw Error(ce(38));return Kl(n,e,t,!1,i)};bn.version="18.2.0-next-9e3b772b8-20220608";(function(n){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}e(),n.exports=bn})(fm);var Fh=fm.exports;yc.createRoot=Fh.createRoot,yc.hydrateRoot=Fh.hydrateRoot;/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gd="143",Jr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},eo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ay=0,Ih=1,ly=2,hv=1,uy=2,ys=3,$s=0,ei=1,Xo=2,cy=1,fr=0,zo=1,Nh=2,zh=3,Oh=4,fy=5,vo=100,dy=101,hy=102,Uh=103,Bh=104,py=200,my=201,gy=202,vy=203,pv=204,mv=205,_y=206,yy=207,xy=208,wy=209,Sy=210,My=0,Ey=1,by=2,hf=3,Ty=4,Cy=5,Ly=6,Ay=7,gv=0,Py=1,Dy=2,Di=0,Ry=1,ky=2,Fy=3,Iy=4,Ny=5,vv=300,qo=301,Yo=302,pf=303,mf=304,Ql=306,gf=1e3,Kn=1001,vf=1002,fn=1003,Vh=1004,Hh=1005,dn=1006,zy=1007,Jl=1008,Vr=1009,Oy=1010,Uy=1011,_v=1012,By=1013,Ar=1014,Pr=1015,Zs=1016,Vy=1017,Hy=1018,Oo=1020,Gy=1021,yv=1022,hi=1023,Wy=1024,jy=1025,Fr=1026,$o=1027,Xy=1028,qy=1029,Yy=1030,$y=1031,Zy=1033,ku=33776,Fu=33777,Iu=33778,Nu=33779,Gh=35840,Wh=35841,jh=35842,Xh=35843,Ky=36196,qh=37492,Yh=37496,$h=37808,Zh=37809,Kh=37810,Qh=37811,Jh=37812,ep=37813,tp=37814,np=37815,ip=37816,rp=37817,op=37818,sp=37819,ap=37820,lp=37821,up=36492,Hr=3e3,xt=3001,Qy=3200,Jy=3201,ex=0,tx=1,bi="srgb",Dr="srgb-linear",zu=7680,nx=519,cp=35044,fp="300 es",_f=1035;class Yr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ou=Math.PI/180,dp=180/Math.PI;function ia(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function hn(n,e,t){return Math.max(e,Math.min(t,n))}function ix(n,e){return(n%e+e)%e}function Uu(n,e,t){return(1-t)*n+t*e}function hp(n){return(n&n-1)===0&&n!==0}function yf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}class je{constructor(e=0,t=0){je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fn{constructor(){Fn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,o,s,a,u,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=o,d[5]=u,d[6]=i,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,s=i[0],a=i[3],u=i[6],c=i[1],d=i[4],p=i[7],h=i[2],x=i[5],S=i[8],g=r[0],m=r[3],_=r[6],w=r[1],E=r[4],b=r[7],L=r[2],k=r[5],z=r[8];return o[0]=s*g+a*w+u*L,o[3]=s*m+a*E+u*k,o[6]=s*_+a*b+u*z,o[1]=c*g+d*w+p*L,o[4]=c*m+d*E+p*k,o[7]=c*_+d*b+p*z,o[2]=h*g+x*w+S*L,o[5]=h*m+x*E+S*k,o[8]=h*_+x*b+S*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],u=e[6],c=e[7],d=e[8];return t*s*d-t*a*c-i*o*d+i*a*u+r*o*c-r*s*u}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],u=e[6],c=e[7],d=e[8],p=d*s-a*c,h=a*u-d*o,x=c*o-s*u,S=t*p+i*h+r*x;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/S;return e[0]=p*g,e[1]=(r*c-d*i)*g,e[2]=(a*i-r*s)*g,e[3]=h*g,e[4]=(d*t-r*u)*g,e[5]=(r*o-a*t)*g,e[6]=x*g,e[7]=(i*u-c*t)*g,e[8]=(s*t-i*o)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,o,s,a){const u=Math.cos(o),c=Math.sin(o);return this.set(i*u,i*c,-i*(u*s+c*a)+s+e,-r*c,r*u,-r*(-c*s+u*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,o=r[0],s=r[3],a=r[6],u=r[1],c=r[4],d=r[7];return r[0]=t*o+i*u,r[3]=t*s+i*c,r[6]=t*a+i*d,r[1]=-i*o+t*u,r[4]=-i*s+t*c,r[7]=-i*a+t*d,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function xv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>65535)return!0;return!1}function Fl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ir(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ll(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Bu={[bi]:{[Dr]:Ir},[Dr]:{[bi]:ll}},Wn={legacyMode:!0,get workingColorSpace(){return Dr},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(Bu[e]&&Bu[e][t]!==void 0){const i=Bu[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},wv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Lt={r:0,g:0,b:0},jn={h:0,s:0,l:0},Ca={h:0,s:0,l:0};function Vu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function La(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class ft{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Wn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Dr){return this.r=e,this.g=t,this.b=i,Wn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Dr){if(e=ix(e,1),t=hn(t,0,1),i=hn(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,s=2*i-o;this.r=Vu(s,o,e+1/3),this.g=Vu(s,o,e),this.b=Vu(s,o,e-1/3)}return Wn.toWorkingColorSpace(this,r),this}setStyle(e,t=bi){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(o[1],10))/255,this.g=Math.min(255,parseInt(o[2],10))/255,this.b=Math.min(255,parseInt(o[3],10))/255,Wn.toWorkingColorSpace(this,t),i(o[4]),this;if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(o[1],10))/100,this.g=Math.min(100,parseInt(o[2],10))/100,this.b=Math.min(100,parseInt(o[3],10))/100,Wn.toWorkingColorSpace(this,t),i(o[4]),this;break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const u=parseFloat(o[1])/360,c=parseInt(o[2],10)/100,d=parseInt(o[3],10)/100;return i(o[4]),this.setHSL(u,c,d,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.r=parseInt(o.charAt(0)+o.charAt(0),16)/255,this.g=parseInt(o.charAt(1)+o.charAt(1),16)/255,this.b=parseInt(o.charAt(2)+o.charAt(2),16)/255,Wn.toWorkingColorSpace(this,t),this;if(s===6)return this.r=parseInt(o.charAt(0)+o.charAt(1),16)/255,this.g=parseInt(o.charAt(2)+o.charAt(3),16)/255,this.b=parseInt(o.charAt(4)+o.charAt(5),16)/255,Wn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=bi){const i=wv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}copyLinearToSRGB(e){return this.r=ll(e.r),this.g=ll(e.g),this.b=ll(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bi){return Wn.fromWorkingColorSpace(La(this,Lt),e),hn(Lt.r*255,0,255)<<16^hn(Lt.g*255,0,255)<<8^hn(Lt.b*255,0,255)<<0}getHexString(e=bi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Dr){Wn.fromWorkingColorSpace(La(this,Lt),t);const i=Lt.r,r=Lt.g,o=Lt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let u,c;const d=(a+s)/2;if(a===s)u=0,c=0;else{const p=s-a;switch(c=d<=.5?p/(s+a):p/(2-s-a),s){case i:u=(r-o)/p+(r<o?6:0);break;case r:u=(o-i)/p+2;break;case o:u=(i-r)/p+4;break}u/=6}return e.h=u,e.s=c,e.l=d,e}getRGB(e,t=Dr){return Wn.fromWorkingColorSpace(La(this,Lt),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=bi){return Wn.fromWorkingColorSpace(La(this,Lt),e),e!==bi?`color(${e} ${Lt.r} ${Lt.g} ${Lt.b})`:`rgb(${Lt.r*255|0},${Lt.g*255|0},${Lt.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(jn),jn.h+=e,jn.s+=t,jn.l+=i,this.setHSL(jn.h,jn.s,jn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(jn),e.getHSL(Ca);const i=Uu(jn.h,Ca.h,t),r=Uu(jn.s,Ca.s,t),o=Uu(jn.l,Ca.l,t);return this.setHSL(i,r,o),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}ft.NAMES=wv;let to;class Sv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{to===void 0&&(to=Fl("canvas")),to.width=e.width,to.height=e.height;const i=to.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=to}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Ir(o[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ir(t[i]/255)*255):t[i]=Ir(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Mv{constructor(e=null){this.isSource=!0,this.uuid=ia(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Hu(r[s].image)):o.push(Hu(r[s]))}else o=Hu(r);i.url=o}return t||(e.images[this.uuid]=i),i}}function Hu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Sv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rx=0;class On extends Yr{constructor(e=On.DEFAULT_IMAGE,t=On.DEFAULT_MAPPING,i=Kn,r=Kn,o=dn,s=Jl,a=hi,u=Vr,c=1,d=Hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=ia(),this.name="",this.source=new Mv(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=u,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gf:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case vf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gf:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case vf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=vv;class It{constructor(e=0,t=0,i=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,o;const u=e.elements,c=u[0],d=u[4],p=u[8],h=u[1],x=u[5],S=u[9],g=u[2],m=u[6],_=u[10];if(Math.abs(d-h)<.01&&Math.abs(p-g)<.01&&Math.abs(S-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(p+g)<.1&&Math.abs(S+m)<.1&&Math.abs(c+x+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,b=(x+1)/2,L=(_+1)/2,k=(d+h)/4,z=(p+g)/4,T=(S+m)/4;return E>b&&E>L?E<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(E),r=k/i,o=z/i):b>L?b<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(b),i=k/r,o=T/r):L<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(L),i=z/o,r=T/o),this.set(i,r,o,t),this}let w=Math.sqrt((m-S)*(m-S)+(p-g)*(p-g)+(h-d)*(h-d));return Math.abs(w)<.001&&(w=1),this.x=(m-S)/w,this.y=(p-g)/w,this.z=(h-d)/w,this.w=Math.acos((c+x+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gr extends Yr{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new On(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:dn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Mv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ev extends On{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ox extends On{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,o,s,a){let u=i[r+0],c=i[r+1],d=i[r+2],p=i[r+3];const h=o[s+0],x=o[s+1],S=o[s+2],g=o[s+3];if(a===0){e[t+0]=u,e[t+1]=c,e[t+2]=d,e[t+3]=p;return}if(a===1){e[t+0]=h,e[t+1]=x,e[t+2]=S,e[t+3]=g;return}if(p!==g||u!==h||c!==x||d!==S){let m=1-a;const _=u*h+c*x+d*S+p*g,w=_>=0?1:-1,E=1-_*_;if(E>Number.EPSILON){const L=Math.sqrt(E),k=Math.atan2(L,_*w);m=Math.sin(m*k)/L,a=Math.sin(a*k)/L}const b=a*w;if(u=u*m+h*b,c=c*m+x*b,d=d*m+S*b,p=p*m+g*b,m===1-a){const L=1/Math.sqrt(u*u+c*c+d*d+p*p);u*=L,c*=L,d*=L,p*=L}}e[t]=u,e[t+1]=c,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,r,o,s){const a=i[r],u=i[r+1],c=i[r+2],d=i[r+3],p=o[s],h=o[s+1],x=o[s+2],S=o[s+3];return e[t]=a*S+d*p+u*x-c*h,e[t+1]=u*S+d*h+c*p-a*x,e[t+2]=c*S+d*x+a*h-u*p,e[t+3]=d*S-a*p-u*h-c*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,u=Math.sin,c=a(i/2),d=a(r/2),p=a(o/2),h=u(i/2),x=u(r/2),S=u(o/2);switch(s){case"XYZ":this._x=h*d*p+c*x*S,this._y=c*x*p-h*d*S,this._z=c*d*S+h*x*p,this._w=c*d*p-h*x*S;break;case"YXZ":this._x=h*d*p+c*x*S,this._y=c*x*p-h*d*S,this._z=c*d*S-h*x*p,this._w=c*d*p+h*x*S;break;case"ZXY":this._x=h*d*p-c*x*S,this._y=c*x*p+h*d*S,this._z=c*d*S+h*x*p,this._w=c*d*p-h*x*S;break;case"ZYX":this._x=h*d*p-c*x*S,this._y=c*x*p+h*d*S,this._z=c*d*S-h*x*p,this._w=c*d*p+h*x*S;break;case"YZX":this._x=h*d*p+c*x*S,this._y=c*x*p+h*d*S,this._z=c*d*S-h*x*p,this._w=c*d*p-h*x*S;break;case"XZY":this._x=h*d*p-c*x*S,this._y=c*x*p-h*d*S,this._z=c*d*S+h*x*p,this._w=c*d*p+h*x*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],o=t[8],s=t[1],a=t[5],u=t[9],c=t[2],d=t[6],p=t[10],h=i+a+p;if(h>0){const x=.5/Math.sqrt(h+1);this._w=.25/x,this._x=(d-u)*x,this._y=(o-c)*x,this._z=(s-r)*x}else if(i>a&&i>p){const x=2*Math.sqrt(1+i-a-p);this._w=(d-u)/x,this._x=.25*x,this._y=(r+s)/x,this._z=(o+c)/x}else if(a>p){const x=2*Math.sqrt(1+a-i-p);this._w=(o-c)/x,this._x=(r+s)/x,this._y=.25*x,this._z=(u+d)/x}else{const x=2*Math.sqrt(1+p-i-a);this._w=(s-r)/x,this._x=(o+c)/x,this._y=(u+d)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(hn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,o=e._z,s=e._w,a=t._x,u=t._y,c=t._z,d=t._w;return this._x=i*d+s*a+r*c-o*u,this._y=r*d+s*u+o*a-i*c,this._z=o*d+s*c+i*u-r*a,this._w=s*d-i*a-r*u-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const u=1-a*a;if(u<=Number.EPSILON){const x=1-t;return this._w=x*s+t*this._w,this._x=x*i+t*this._x,this._y=x*r+t*this._y,this._z=x*o+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(u),d=Math.atan2(c,a),p=Math.sin((1-t)*d)/c,h=Math.sin(t*d)/c;return this._w=s*p+this._w*h,this._x=i*p+this._x*h,this._y=r*p+this._y*h,this._z=o*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(o),i*Math.cos(o),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*r,this.y=o[1]*t+o[4]*i+o[7]*r,this.z=o[2]*t+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,u=e.w,c=u*t+s*r-a*i,d=u*i+a*t-o*r,p=u*r+o*i-s*t,h=-o*t-s*i-a*r;return this.x=c*u+h*-o+d*-a-p*-s,this.y=d*u+h*-s+p*-o-c*-a,this.z=p*u+h*-a+c*-s-d*-o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r,this.y=o[1]*t+o[5]*i+o[9]*r,this.z=o[2]*t+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,o=e.z,s=t.x,a=t.y,u=t.z;return this.x=r*u-o*a,this.y=o*s-i*u,this.z=i*a-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Gu.copy(this).projectOnVector(e),this.sub(Gu)}reflect(e){return this.sub(Gu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(hn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gu=new j,pp=new Wr;class ra{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,o=-1/0,s=-1/0,a=-1/0;for(let u=0,c=e.length;u<c;u+=3){const d=e[u],p=e[u+1],h=e[u+2];d<t&&(t=d),p<i&&(i=p),h<r&&(r=h),d>o&&(o=d),p>s&&(s=p),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(o,s,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,o=-1/0,s=-1/0,a=-1/0;for(let u=0,c=e.count;u<c;u++){const d=e.getX(u),p=e.getY(u),h=e.getZ(u);d<t&&(t=d),p<i&&(i=p),h<r&&(r=h),d>o&&(o=d),p>s&&(s=p),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(o,s,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=_r.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const o=i.attributes.position;for(let s=0,a=o.count;s<a;s++)_r.fromBufferAttribute(o,s).applyMatrix4(e.matrixWorld),this.expandByPoint(_r)}else i.boundingBox===null&&i.computeBoundingBox(),Wu.copy(i.boundingBox),Wu.applyMatrix4(e.matrixWorld),this.union(Wu);const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_r),_r.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ds),Aa.subVectors(this.max,ds),no.subVectors(e.a,ds),io.subVectors(e.b,ds),ro.subVectors(e.c,ds),Gi.subVectors(io,no),Wi.subVectors(ro,io),yr.subVectors(no,ro);let t=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-yr.z,yr.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,yr.z,0,-yr.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-yr.y,yr.x,0];return!ju(t,no,io,ro,Aa)||(t=[1,0,0,0,1,0,0,0,1],!ju(t,no,io,ro,Aa))?!1:(Pa.crossVectors(Gi,Wi),t=[Pa.x,Pa.y,Pa.z],ju(t,no,io,ro,Aa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return _r.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(_r).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _i=[new j,new j,new j,new j,new j,new j,new j,new j],_r=new j,Wu=new ra,no=new j,io=new j,ro=new j,Gi=new j,Wi=new j,yr=new j,ds=new j,Aa=new j,Pa=new j,xr=new j;function ju(n,e,t,i,r){for(let o=0,s=n.length-3;o<=s;o+=3){xr.fromArray(n,o);const a=r.x*Math.abs(xr.x)+r.y*Math.abs(xr.y)+r.z*Math.abs(xr.z),u=e.dot(xr),c=t.dot(xr),d=i.dot(xr);if(Math.max(-Math.max(u,c,d),Math.min(u,c,d))>a)return!1}return!0}const sx=new ra,mp=new j,Da=new j,Xu=new j;class vd{constructor(e=new j,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):sx.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Xu.subVectors(e,this.center);const t=Xu.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(Xu.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?Da.set(0,0,1).multiplyScalar(e.radius):Da.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(mp.copy(e.center).add(Da)),this.expandByPoint(mp.copy(e.center).sub(Da)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yi=new j,qu=new j,Ra=new j,ji=new j,Yu=new j,ka=new j,$u=new j;class ax{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.direction).multiplyScalar(t).add(this.origin),yi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){qu.copy(e).add(t).multiplyScalar(.5),Ra.copy(t).sub(e).normalize(),ji.copy(this.origin).sub(qu);const o=e.distanceTo(t)*.5,s=-this.direction.dot(Ra),a=ji.dot(this.direction),u=-ji.dot(Ra),c=ji.lengthSq(),d=Math.abs(1-s*s);let p,h,x,S;if(d>0)if(p=s*u-a,h=s*a-u,S=o*d,p>=0)if(h>=-S)if(h<=S){const g=1/d;p*=g,h*=g,x=p*(p+s*h+2*a)+h*(s*p+h+2*u)+c}else h=o,p=Math.max(0,-(s*h+a)),x=-p*p+h*(h+2*u)+c;else h=-o,p=Math.max(0,-(s*h+a)),x=-p*p+h*(h+2*u)+c;else h<=-S?(p=Math.max(0,-(-s*o+a)),h=p>0?-o:Math.min(Math.max(-o,-u),o),x=-p*p+h*(h+2*u)+c):h<=S?(p=0,h=Math.min(Math.max(-o,-u),o),x=h*(h+2*u)+c):(p=Math.max(0,-(s*o+a)),h=p>0?o:Math.min(Math.max(-o,-u),o),x=-p*p+h*(h+2*u)+c);else h=s>0?-o:o,p=Math.max(0,-(s*h+a)),x=-p*p+h*(h+2*u)+c;return i&&i.copy(this.direction).multiplyScalar(p).add(this.origin),r&&r.copy(Ra).multiplyScalar(h).add(qu),x}intersectSphere(e,t){yi.subVectors(e.center,this.origin);const i=yi.dot(this.direction),r=yi.dot(yi)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,u=i+s;return a<0&&u<0?null:a<0?this.at(u,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,o,s,a,u;const c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(o=(e.min.y-h.y)*d,s=(e.max.y-h.y)*d):(o=(e.max.y-h.y)*d,s=(e.min.y-h.y)*d),i>s||o>r||((o>i||i!==i)&&(i=o),(s<r||r!==r)&&(r=s),p>=0?(a=(e.min.z-h.z)*p,u=(e.max.z-h.z)*p):(a=(e.max.z-h.z)*p,u=(e.min.z-h.z)*p),i>u||a>r)||((a>i||i!==i)&&(i=a),(u<r||r!==r)&&(r=u),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,i,r,o){Yu.subVectors(t,e),ka.subVectors(i,e),$u.crossVectors(Yu,ka);let s=this.direction.dot($u),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;ji.subVectors(this.origin,e);const u=a*this.direction.dot(ka.crossVectors(ji,ka));if(u<0)return null;const c=a*this.direction.dot(Yu.cross(ji));if(c<0||u+c>s)return null;const d=-a*ji.dot($u);return d<0?null:this.at(d/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,o,s,a,u,c,d,p,h,x,S,g,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=r,_[1]=o,_[5]=s,_[9]=a,_[13]=u,_[2]=c,_[6]=d,_[10]=p,_[14]=h,_[3]=x,_[7]=S,_[11]=g,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/oo.setFromMatrixColumn(e,0).length(),o=1/oo.setFromMatrixColumn(e,1).length(),s=1/oo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),u=Math.cos(r),c=Math.sin(r),d=Math.cos(o),p=Math.sin(o);if(e.order==="XYZ"){const h=s*d,x=s*p,S=a*d,g=a*p;t[0]=u*d,t[4]=-u*p,t[8]=c,t[1]=x+S*c,t[5]=h-g*c,t[9]=-a*u,t[2]=g-h*c,t[6]=S+x*c,t[10]=s*u}else if(e.order==="YXZ"){const h=u*d,x=u*p,S=c*d,g=c*p;t[0]=h+g*a,t[4]=S*a-x,t[8]=s*c,t[1]=s*p,t[5]=s*d,t[9]=-a,t[2]=x*a-S,t[6]=g+h*a,t[10]=s*u}else if(e.order==="ZXY"){const h=u*d,x=u*p,S=c*d,g=c*p;t[0]=h-g*a,t[4]=-s*p,t[8]=S+x*a,t[1]=x+S*a,t[5]=s*d,t[9]=g-h*a,t[2]=-s*c,t[6]=a,t[10]=s*u}else if(e.order==="ZYX"){const h=s*d,x=s*p,S=a*d,g=a*p;t[0]=u*d,t[4]=S*c-x,t[8]=h*c+g,t[1]=u*p,t[5]=g*c+h,t[9]=x*c-S,t[2]=-c,t[6]=a*u,t[10]=s*u}else if(e.order==="YZX"){const h=s*u,x=s*c,S=a*u,g=a*c;t[0]=u*d,t[4]=g-h*p,t[8]=S*p+x,t[1]=p,t[5]=s*d,t[9]=-a*d,t[2]=-c*d,t[6]=x*p+S,t[10]=h-g*p}else if(e.order==="XZY"){const h=s*u,x=s*c,S=a*u,g=a*c;t[0]=u*d,t[4]=-p,t[8]=c*d,t[1]=h*p+g,t[5]=s*d,t[9]=x*p-S,t[2]=S*p-x,t[6]=a*d,t[10]=g*p+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lx,e,ux)}lookAt(e,t,i){const r=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Xi.crossVectors(i,yn),Xi.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Xi.crossVectors(i,yn)),Xi.normalize(),Fa.crossVectors(yn,Xi),r[0]=Xi.x,r[4]=Fa.x,r[8]=yn.x,r[1]=Xi.y,r[5]=Fa.y,r[9]=yn.y,r[2]=Xi.z,r[6]=Fa.z,r[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,s=i[0],a=i[4],u=i[8],c=i[12],d=i[1],p=i[5],h=i[9],x=i[13],S=i[2],g=i[6],m=i[10],_=i[14],w=i[3],E=i[7],b=i[11],L=i[15],k=r[0],z=r[4],T=r[8],N=r[12],H=r[1],Y=r[5],le=r[9],fe=r[13],q=r[2],oe=r[6],K=r[10],se=r[14],V=r[3],B=r[7],G=r[11],$=r[15];return o[0]=s*k+a*H+u*q+c*V,o[4]=s*z+a*Y+u*oe+c*B,o[8]=s*T+a*le+u*K+c*G,o[12]=s*N+a*fe+u*se+c*$,o[1]=d*k+p*H+h*q+x*V,o[5]=d*z+p*Y+h*oe+x*B,o[9]=d*T+p*le+h*K+x*G,o[13]=d*N+p*fe+h*se+x*$,o[2]=S*k+g*H+m*q+_*V,o[6]=S*z+g*Y+m*oe+_*B,o[10]=S*T+g*le+m*K+_*G,o[14]=S*N+g*fe+m*se+_*$,o[3]=w*k+E*H+b*q+L*V,o[7]=w*z+E*Y+b*oe+L*B,o[11]=w*T+E*le+b*K+L*G,o[15]=w*N+E*fe+b*se+L*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],u=e[9],c=e[13],d=e[2],p=e[6],h=e[10],x=e[14],S=e[3],g=e[7],m=e[11],_=e[15];return S*(+o*u*p-r*c*p-o*a*h+i*c*h+r*a*x-i*u*x)+g*(+t*u*x-t*c*h+o*s*h-r*s*x+r*c*d-o*u*d)+m*(+t*c*p-t*a*x-o*s*p+i*s*x+o*a*d-i*c*d)+_*(-r*a*d-t*u*p+t*a*h+r*s*p-i*s*h+i*u*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],u=e[6],c=e[7],d=e[8],p=e[9],h=e[10],x=e[11],S=e[12],g=e[13],m=e[14],_=e[15],w=p*m*c-g*h*c+g*u*x-a*m*x-p*u*_+a*h*_,E=S*h*c-d*m*c-S*u*x+s*m*x+d*u*_-s*h*_,b=d*g*c-S*p*c+S*a*x-s*g*x-d*a*_+s*p*_,L=S*p*u-d*g*u-S*a*h+s*g*h+d*a*m-s*p*m,k=t*w+i*E+r*b+o*L;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/k;return e[0]=w*z,e[1]=(g*h*o-p*m*o-g*r*x+i*m*x+p*r*_-i*h*_)*z,e[2]=(a*m*o-g*u*o+g*r*c-i*m*c-a*r*_+i*u*_)*z,e[3]=(p*u*o-a*h*o-p*r*c+i*h*c+a*r*x-i*u*x)*z,e[4]=E*z,e[5]=(d*m*o-S*h*o+S*r*x-t*m*x-d*r*_+t*h*_)*z,e[6]=(S*u*o-s*m*o-S*r*c+t*m*c+s*r*_-t*u*_)*z,e[7]=(s*h*o-d*u*o+d*r*c-t*h*c-s*r*x+t*u*x)*z,e[8]=b*z,e[9]=(S*p*o-d*g*o-S*i*x+t*g*x+d*i*_-t*p*_)*z,e[10]=(s*g*o-S*a*o+S*i*c-t*g*c-s*i*_+t*a*_)*z,e[11]=(d*a*o-s*p*o-d*i*c+t*p*c+s*i*x-t*a*x)*z,e[12]=L*z,e[13]=(d*g*r-S*p*r+S*i*h-t*g*h-d*i*m+t*p*m)*z,e[14]=(S*a*r-s*g*r-S*i*u+t*g*u+s*i*m-t*a*m)*z,e[15]=(s*p*r-d*a*r+d*i*u-t*p*u-s*i*h+t*a*h)*z,this}scale(e){const t=this.elements,i=e.x,r=e.y,o=e.z;return t[0]*=i,t[4]*=r,t[8]*=o,t[1]*=i,t[5]*=r,t[9]*=o,t[2]*=i,t[6]*=r,t[10]*=o,t[3]*=i,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),o=1-i,s=e.x,a=e.y,u=e.z,c=o*s,d=o*a;return this.set(c*s+i,c*a-r*u,c*u+r*a,0,c*a+r*u,d*a+i,d*u-r*s,0,c*u-r*a,d*u+r*s,o*u*u+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,o=t._x,s=t._y,a=t._z,u=t._w,c=o+o,d=s+s,p=a+a,h=o*c,x=o*d,S=o*p,g=s*d,m=s*p,_=a*p,w=u*c,E=u*d,b=u*p,L=i.x,k=i.y,z=i.z;return r[0]=(1-(g+_))*L,r[1]=(x+b)*L,r[2]=(S-E)*L,r[3]=0,r[4]=(x-b)*k,r[5]=(1-(h+_))*k,r[6]=(m+w)*k,r[7]=0,r[8]=(S+E)*z,r[9]=(m-w)*z,r[10]=(1-(h+g))*z,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let o=oo.set(r[0],r[1],r[2]).length();const s=oo.set(r[4],r[5],r[6]).length(),a=oo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Xn.copy(this);const c=1/o,d=1/s,p=1/a;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=d,Xn.elements[5]*=d,Xn.elements[6]*=d,Xn.elements[8]*=p,Xn.elements[9]*=p,Xn.elements[10]*=p,t.setFromRotationMatrix(Xn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,t,i,r,o,s){const a=this.elements,u=2*o/(t-e),c=2*o/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r),h=-(s+o)/(s-o),x=-2*s*o/(s-o);return a[0]=u,a[4]=0,a[8]=d,a[12]=0,a[1]=0,a[5]=c,a[9]=p,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=x,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,o,s){const a=this.elements,u=1/(t-e),c=1/(i-r),d=1/(s-o),p=(t+e)*u,h=(i+r)*c,x=(s+o)*d;return a[0]=2*u,a[4]=0,a[8]=0,a[12]=-p,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*d,a[14]=-x,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const oo=new j,Xn=new Ht,lx=new j(0,0,0),ux=new j(1,1,1),Xi=new j,Fa=new j,yn=new j,gp=new Ht,vp=new Wr;class oa{constructor(e=0,t=0,i=0,r=oa.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],u=r[1],c=r[5],d=r[9],p=r[2],h=r[6],x=r[10];switch(t){case"XYZ":this._y=Math.asin(hn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,x),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-hn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,x),this._z=Math.atan2(u,c)):(this._y=Math.atan2(-p,o),this._z=0);break;case"ZXY":this._x=Math.asin(hn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,x),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(u,o));break;case"ZYX":this._y=Math.asin(-hn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,x),this._z=Math.atan2(u,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(hn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,o)):(this._x=0,this._y=Math.atan2(a,x));break;case"XZY":this._z=Math.asin(-hn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-d,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return gp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vp.setFromEuler(this),this.setFromQuaternion(vp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}oa.DefaultOrder="XYZ";oa.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class bv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cx=0;const _p=new j,so=new Wr,xi=new Ht,Ia=new j,hs=new j,fx=new j,dx=new Wr,yp=new j(1,0,0),xp=new j(0,1,0),wp=new j(0,0,1),hx={type:"added"},Sp={type:"removed"};class ri extends Yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=ia(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ri.DefaultUp.clone();const e=new j,t=new oa,i=new Wr,r=new j(1,1,1);function o(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ht},normalMatrix:{value:new Fn}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=ri.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new bv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return so.setFromAxisAngle(e,t),this.quaternion.multiply(so),this}rotateOnWorldAxis(e,t){return so.setFromAxisAngle(e,t),this.quaternion.premultiply(so),this}rotateX(e){return this.rotateOnAxis(yp,e)}rotateY(e){return this.rotateOnAxis(xp,e)}rotateZ(e){return this.rotateOnAxis(wp,e)}translateOnAxis(e,t){return _p.copy(e).applyQuaternion(this.quaternion),this.position.add(_p.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yp,e)}translateY(e){return this.translateOnAxis(xp,e)}translateZ(e){return this.translateOnAxis(wp,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ia.copy(e):Ia.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(hs,Ia,this.up):xi.lookAt(Ia,hs,this.up),this.quaternion.setFromRotationMatrix(xi),r&&(xi.extractRotation(r.matrixWorld),so.setFromRotationMatrix(xi),this.quaternion.premultiply(so.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(hx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Sp)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,e,fx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,dx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(a,u){return a[u.uuid]===void 0&&(a[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const u=a.shapes;if(Array.isArray(u))for(let c=0,d=u.length;c<d;c++){const p=u[c];o(e.shapes,p)}else o(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let u=0,c=this.material.length;u<c;u++)a.push(o(e.materials,this.material[u]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const u=this.animations[a];r.animations.push(o(e.animations,u))}}if(t){const a=s(e.geometries),u=s(e.materials),c=s(e.textures),d=s(e.images),p=s(e.shapes),h=s(e.skeletons),x=s(e.animations),S=s(e.nodes);a.length>0&&(i.geometries=a),u.length>0&&(i.materials=u),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),x.length>0&&(i.animations=x),S.length>0&&(i.nodes=S)}return i.object=r,i;function s(a){const u=[];for(const c in a){const d=a[c];delete d.metadata,u.push(d)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ri.DefaultUp=new j(0,1,0);ri.DefaultMatrixAutoUpdate=!0;const qn=new j,wi=new j,Zu=new j,Si=new j,ao=new j,lo=new j,Mp=new j,Ku=new j,Qu=new j,Ju=new j;class Ci{constructor(e=new j,t=new j,i=new j){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),qn.subVectors(e,t),r.cross(qn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,i,r,o){qn.subVectors(r,t),wi.subVectors(i,t),Zu.subVectors(e,t);const s=qn.dot(qn),a=qn.dot(wi),u=qn.dot(Zu),c=wi.dot(wi),d=wi.dot(Zu),p=s*c-a*a;if(p===0)return o.set(-2,-1,-1);const h=1/p,x=(c*u-a*d)*h,S=(s*d-a*u)*h;return o.set(1-x-S,S,x)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Si),Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getUV(e,t,i,r,o,s,a,u){return this.getBarycoord(e,t,i,r,Si),u.set(0,0),u.addScaledVector(o,Si.x),u.addScaledVector(s,Si.y),u.addScaledVector(a,Si.z),u}static isFrontFacing(e,t,i,r){return qn.subVectors(i,t),wi.subVectors(e,t),qn.cross(wi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),qn.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ci.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,o){return Ci.getUV(e,this.a,this.b,this.c,t,i,r,o)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,o=this.c;let s,a;ao.subVectors(r,i),lo.subVectors(o,i),Ku.subVectors(e,i);const u=ao.dot(Ku),c=lo.dot(Ku);if(u<=0&&c<=0)return t.copy(i);Qu.subVectors(e,r);const d=ao.dot(Qu),p=lo.dot(Qu);if(d>=0&&p<=d)return t.copy(r);const h=u*p-d*c;if(h<=0&&u>=0&&d<=0)return s=u/(u-d),t.copy(i).addScaledVector(ao,s);Ju.subVectors(e,o);const x=ao.dot(Ju),S=lo.dot(Ju);if(S>=0&&x<=S)return t.copy(o);const g=x*c-u*S;if(g<=0&&c>=0&&S<=0)return a=c/(c-S),t.copy(i).addScaledVector(lo,a);const m=d*S-x*p;if(m<=0&&p-d>=0&&x-S>=0)return Mp.subVectors(o,r),a=(p-d)/(p-d+(x-S)),t.copy(r).addScaledVector(Mp,a);const _=1/(m+g+h);return s=g*_,a=h*_,t.copy(i).addScaledVector(ao,s).addScaledVector(lo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let px=0;class eu extends Yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:px++}),this.uuid=ia(),this.name="",this.type="Material",this.blending=zo,this.side=$s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=pv,this.blendDst=mv,this.blendEquation=vo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=hf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zu,this.stencilZFail=zu,this.stencilZPass=zu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===cy;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zo&&(i.blending=this.blending),this.side!==$s&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const u=o[a];delete u.metadata,s.push(u)}return s}if(t){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Il extends eu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new j,Na=new je;class ti{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=cp,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let r=0,o=e.length;r<o;r++){let s=e[r];s===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),s=new ft),t[i++]=s.r,t[i++]=s.g,t[i++]=s.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let r=0,o=e.length;r<o;r++){let s=e[r];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),s=new je),t[i++]=s.x,t[i++]=s.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let r=0,o=e.length;r<o;r++){let s=e[r];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),s=new j),t[i++]=s.x,t[i++]=s.y,t[i++]=s.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let r=0,o=e.length;r<o;r++){let s=e[r];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),s=new It),t[i++]=s.x,t[i++]=s.y,t[i++]=s.z,t[i++]=s.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Na.fromBufferAttribute(this,t),Na.applyMatrix3(e),this.setXY(t,Na.x,Na.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cp&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class _d extends ti{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Tv extends ti{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ni extends ti{constructor(e,t,i){super(new Float32Array(e),t,i)}}let mx=0;const Ln=new Ht,ec=new ri,uo=new j,xn=new ra,ps=new ra,kt=new j;class zi extends Yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mx++}),this.uuid=ia(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xv(e)?Tv:_d)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Fn().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,i){return Ln.makeTranslation(e,t,i),this.applyMatrix4(Ln),this}scale(e,t,i){return Ln.makeScale(e,t,i),this.applyMatrix4(Ln),this}lookAt(e){return ec.lookAt(e),ec.updateMatrix(),this.applyMatrix4(ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(uo).negate(),this.translate(uo.x,uo.y,uo.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new ni(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ra);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const o=t[i];xn.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){const a=t[o];ps.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(xn.min,ps.min),xn.expandByPoint(kt),kt.addVectors(xn.max,ps.max),xn.expandByPoint(kt)):(xn.expandByPoint(ps.min),xn.expandByPoint(ps.max))}xn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)kt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(kt));if(t)for(let o=0,s=t.length;o<s;o++){const a=t[o],u=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)kt.fromBufferAttribute(a,c),u&&(uo.fromBufferAttribute(e,c),kt.add(uo)),r=Math.max(r,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,o=t.normal.array,s=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ti(new Float32Array(4*a),4));const u=this.getAttribute("tangent").array,c=[],d=[];for(let H=0;H<a;H++)c[H]=new j,d[H]=new j;const p=new j,h=new j,x=new j,S=new je,g=new je,m=new je,_=new j,w=new j;function E(H,Y,le){p.fromArray(r,H*3),h.fromArray(r,Y*3),x.fromArray(r,le*3),S.fromArray(s,H*2),g.fromArray(s,Y*2),m.fromArray(s,le*2),h.sub(p),x.sub(p),g.sub(S),m.sub(S);const fe=1/(g.x*m.y-m.x*g.y);!isFinite(fe)||(_.copy(h).multiplyScalar(m.y).addScaledVector(x,-g.y).multiplyScalar(fe),w.copy(x).multiplyScalar(g.x).addScaledVector(h,-m.x).multiplyScalar(fe),c[H].add(_),c[Y].add(_),c[le].add(_),d[H].add(w),d[Y].add(w),d[le].add(w))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let H=0,Y=b.length;H<Y;++H){const le=b[H],fe=le.start,q=le.count;for(let oe=fe,K=fe+q;oe<K;oe+=3)E(i[oe+0],i[oe+1],i[oe+2])}const L=new j,k=new j,z=new j,T=new j;function N(H){z.fromArray(o,H*3),T.copy(z);const Y=c[H];L.copy(Y),L.sub(z.multiplyScalar(z.dot(Y))).normalize(),k.crossVectors(T,Y);const fe=k.dot(d[H])<0?-1:1;u[H*4]=L.x,u[H*4+1]=L.y,u[H*4+2]=L.z,u[H*4+3]=fe}for(let H=0,Y=b.length;H<Y;++H){const le=b[H],fe=le.start,q=le.count;for(let oe=fe,K=fe+q;oe<K;oe+=3)N(i[oe+0]),N(i[oe+1]),N(i[oe+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ti(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,x=i.count;h<x;h++)i.setXYZ(h,0,0,0);const r=new j,o=new j,s=new j,a=new j,u=new j,c=new j,d=new j,p=new j;if(e)for(let h=0,x=e.count;h<x;h+=3){const S=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,S),o.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),d.subVectors(s,o),p.subVectors(r,o),d.cross(p),a.fromBufferAttribute(i,S),u.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(d),u.add(d),c.add(d),i.setXYZ(S,a.x,a.y,a.z),i.setXYZ(g,u.x,u.y,u.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,x=t.count;h<x;h+=3)r.fromBufferAttribute(t,h+0),o.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),d.subVectors(s,o),p.subVectors(r,o),d.cross(p),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const s=i[r].array,a=e.attributes[r],u=a.array,c=a.itemSize*t,d=Math.min(u.length,s.length-c);for(let p=0,h=c;p<d;p++,h++)s[h]=u[p]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,u){const c=a.array,d=a.itemSize,p=a.normalized,h=new c.constructor(u.length*d);let x=0,S=0;for(let g=0,m=u.length;g<m;g++){a.isInterleavedBufferAttribute?x=u[g]*a.data.stride+a.offset:x=u[g]*d;for(let _=0;_<d;_++)h[S++]=c[x++]}return new ti(h,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zi,i=this.index.array,r=this.attributes;for(const a in r){const u=r[a],c=e(u,i);t.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const u=[],c=o[a];for(let d=0,p=c.length;d<p;d++){const h=c[d],x=e(h,i);u.push(x)}t.morphAttributes[a]=u}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,u=s.length;a<u;a++){const c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const c in u)u[c]!==void 0&&(e[c]=u[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const u in i){const c=i[u];e.data.attributes[u]=c.toJSON(e.data)}const r={};let o=!1;for(const u in this.morphAttributes){const c=this.morphAttributes[u],d=[];for(let p=0,h=c.length;p<h;p++){const x=c[p];d.push(x.toJSON(e.data))}d.length>0&&(r[u]=d,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const o=e.morphAttributes;for(const c in o){const d=[],p=o[c];for(let h=0,x=p.length;h<x;h++)d.push(p[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,d=s.length;c<d;c++){const p=s[c];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ep=new Ht,co=new ax,tc=new vd,qi=new j,Yi=new j,$i=new j,nc=new j,ic=new j,rc=new j,za=new j,Oa=new j,Ua=new j,Ba=new je,Va=new je,Ha=new je,oc=new j,Ga=new j;class pi extends ri{constructor(e=new zi,t=new Il){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}raycast(e,t){const i=this.geometry,r=this.material,o=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),tc.copy(i.boundingSphere),tc.applyMatrix4(o),e.ray.intersectsSphere(tc)===!1)||(Ep.copy(o).invert(),co.copy(e.ray).applyMatrix4(Ep),i.boundingBox!==null&&co.intersectsBox(i.boundingBox)===!1))return;let s;const a=i.index,u=i.attributes.position,c=i.morphAttributes.position,d=i.morphTargetsRelative,p=i.attributes.uv,h=i.attributes.uv2,x=i.groups,S=i.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,m=x.length;g<m;g++){const _=x[g],w=r[_.materialIndex],E=Math.max(_.start,S.start),b=Math.min(a.count,Math.min(_.start+_.count,S.start+S.count));for(let L=E,k=b;L<k;L+=3){const z=a.getX(L),T=a.getX(L+1),N=a.getX(L+2);s=Wa(this,w,e,co,u,c,d,p,h,z,T,N),s&&(s.faceIndex=Math.floor(L/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const g=Math.max(0,S.start),m=Math.min(a.count,S.start+S.count);for(let _=g,w=m;_<w;_+=3){const E=a.getX(_),b=a.getX(_+1),L=a.getX(_+2);s=Wa(this,r,e,co,u,c,d,p,h,E,b,L),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(u!==void 0)if(Array.isArray(r))for(let g=0,m=x.length;g<m;g++){const _=x[g],w=r[_.materialIndex],E=Math.max(_.start,S.start),b=Math.min(u.count,Math.min(_.start+_.count,S.start+S.count));for(let L=E,k=b;L<k;L+=3){const z=L,T=L+1,N=L+2;s=Wa(this,w,e,co,u,c,d,p,h,z,T,N),s&&(s.faceIndex=Math.floor(L/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const g=Math.max(0,S.start),m=Math.min(u.count,S.start+S.count);for(let _=g,w=m;_<w;_+=3){const E=_,b=_+1,L=_+2;s=Wa(this,r,e,co,u,c,d,p,h,E,b,L),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}}function gx(n,e,t,i,r,o,s,a){let u;if(e.side===ei?u=i.intersectTriangle(s,o,r,!0,a):u=i.intersectTriangle(r,o,s,e.side!==Xo,a),u===null)return null;Ga.copy(a),Ga.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ga);return c<t.near||c>t.far?null:{distance:c,point:Ga.clone(),object:n}}function Wa(n,e,t,i,r,o,s,a,u,c,d,p){qi.fromBufferAttribute(r,c),Yi.fromBufferAttribute(r,d),$i.fromBufferAttribute(r,p);const h=n.morphTargetInfluences;if(o&&h){za.set(0,0,0),Oa.set(0,0,0),Ua.set(0,0,0);for(let S=0,g=o.length;S<g;S++){const m=h[S],_=o[S];m!==0&&(nc.fromBufferAttribute(_,c),ic.fromBufferAttribute(_,d),rc.fromBufferAttribute(_,p),s?(za.addScaledVector(nc,m),Oa.addScaledVector(ic,m),Ua.addScaledVector(rc,m)):(za.addScaledVector(nc.sub(qi),m),Oa.addScaledVector(ic.sub(Yi),m),Ua.addScaledVector(rc.sub($i),m)))}qi.add(za),Yi.add(Oa),$i.add(Ua)}n.isSkinnedMesh&&(n.boneTransform(c,qi),n.boneTransform(d,Yi),n.boneTransform(p,$i));const x=gx(n,e,t,i,qi,Yi,$i,oc);if(x){a&&(Ba.fromBufferAttribute(a,c),Va.fromBufferAttribute(a,d),Ha.fromBufferAttribute(a,p),x.uv=Ci.getUV(oc,qi,Yi,$i,Ba,Va,Ha,new je)),u&&(Ba.fromBufferAttribute(u,c),Va.fromBufferAttribute(u,d),Ha.fromBufferAttribute(u,p),x.uv2=Ci.getUV(oc,qi,Yi,$i,Ba,Va,Ha,new je));const S={a:c,b:d,c:p,normal:new j,materialIndex:0};Ci.getNormal(qi,Yi,$i,S.normal),x.face=S}return x}class sa extends zi{constructor(e=1,t=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const u=[],c=[],d=[],p=[];let h=0,x=0;S("z","y","x",-1,-1,i,t,e,s,o,0),S("z","y","x",1,-1,i,t,-e,s,o,1),S("x","z","y",1,1,e,i,t,r,s,2),S("x","z","y",1,-1,e,i,-t,r,s,3),S("x","y","z",1,-1,e,t,i,r,o,4),S("x","y","z",-1,-1,e,t,-i,r,o,5),this.setIndex(u),this.setAttribute("position",new ni(c,3)),this.setAttribute("normal",new ni(d,3)),this.setAttribute("uv",new ni(p,2));function S(g,m,_,w,E,b,L,k,z,T,N){const H=b/z,Y=L/T,le=b/2,fe=L/2,q=k/2,oe=z+1,K=T+1;let se=0,V=0;const B=new j;for(let G=0;G<K;G++){const $=G*Y-fe;for(let J=0;J<oe;J++){const he=J*H-le;B[g]=he*w,B[m]=$*E,B[_]=q,c.push(B.x,B.y,B.z),B[g]=0,B[m]=0,B[_]=k>0?1:-1,d.push(B.x,B.y,B.z),p.push(J/z),p.push(1-G/T),se+=1}}for(let G=0;G<T;G++)for(let $=0;$<z;$++){const J=h+$+oe*G,he=h+$+oe*(G+1),xe=h+($+1)+oe*(G+1),De=h+($+1)+oe*G;u.push(J,he,De),u.push(he,xe,De),V+=6}a.addGroup(x,V,N),x+=V,h+=se}}static fromJSON(e){return new sa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function $t(n){const e={};for(let t=0;t<n.length;t++){const i=Zo(n[t]);for(const r in i)e[r]=i[r]}return e}function vx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}const _x={clone:Zo,merge:$t};var yx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jr extends eu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yx,this.fragmentShader=xx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zo(e.uniforms),this.uniformsGroups=vx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Cv extends ri{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Rn extends Cv{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=dp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ou*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dp*2*Math.atan(Math.tan(Ou*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ou*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const u=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/u,t-=s.offsetY*i/c,r*=s.width/u,i*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fo=90,ho=1;class wx extends ri{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new Rn(fo,ho,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new j(1,0,0)),this.add(r);const o=new Rn(fo,ho,e,t);o.layers=this.layers,o.up.set(0,-1,0),o.lookAt(new j(-1,0,0)),this.add(o);const s=new Rn(fo,ho,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new j(0,1,0)),this.add(s);const a=new Rn(fo,ho,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new j(0,-1,0)),this.add(a);const u=new Rn(fo,ho,e,t);u.layers=this.layers,u.up.set(0,-1,0),u.lookAt(new j(0,0,1)),this.add(u);const c=new Rn(fo,ho,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new j(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,o,s,a,u,c]=this.children,d=e.getRenderTarget(),p=e.toneMapping,h=e.xr.enabled;e.toneMapping=Di,e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,o),e.setRenderTarget(i,2),e.render(t,s),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(d),e.toneMapping=p,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class Lv extends On{constructor(e,t,i,r,o,s,a,u,c,d){e=e!==void 0?e:[],t=t!==void 0?t:qo,super(e,t,i,r,o,s,a,u,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sx extends Gr{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Lv(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new sa(5,5,5),o=new jr({name:"CubemapFromEquirect",uniforms:Zo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ei,blending:fr});o.uniforms.tEquirect.value=t;const s=new pi(r,o),a=t.minFilter;return t.minFilter===Jl&&(t.minFilter=dn),new wx(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(o)}}const sc=new j,Mx=new j,Ex=new Fn;class Mr{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=sc.subVectors(i,t).cross(Mx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(sc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(i).multiplyScalar(o).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ex.getNormalMatrix(e),r=this.coplanarPoint(sc).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const po=new vd,ja=new j;class Av{constructor(e=new Mr,t=new Mr,i=new Mr,r=new Mr,o=new Mr,s=new Mr){this.planes=[e,t,i,r,o,s]}set(e,t,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],o=i[1],s=i[2],a=i[3],u=i[4],c=i[5],d=i[6],p=i[7],h=i[8],x=i[9],S=i[10],g=i[11],m=i[12],_=i[13],w=i[14],E=i[15];return t[0].setComponents(a-r,p-u,g-h,E-m).normalize(),t[1].setComponents(a+r,p+u,g+h,E+m).normalize(),t[2].setComponents(a+o,p+c,g+x,E+_).normalize(),t[3].setComponents(a-o,p-c,g-x,E-_).normalize(),t[4].setComponents(a-s,p-d,g-S,E-w).normalize(),t[5].setComponents(a+s,p+d,g+S,E+w).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),po.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(po)}intersectsSprite(e){return po.center.set(0,0,0),po.radius=.7071067811865476,po.applyMatrix4(e.matrixWorld),this.intersectsSphere(po)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ja.x=r.normal.x>0?e.max.x:e.min.x,ja.y=r.normal.y>0?e.max.y:e.min.y,ja.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ja)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pv(){let n=null,e=!1,t=null,i=null;function r(o,s){t(o,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function bx(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,d){const p=c.array,h=c.usage,x=n.createBuffer();n.bindBuffer(d,x),n.bufferData(d,p,h),c.onUploadCallback();let S;if(p instanceof Float32Array)S=5126;else if(p instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)S=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else S=5123;else if(p instanceof Int16Array)S=5122;else if(p instanceof Uint32Array)S=5125;else if(p instanceof Int32Array)S=5124;else if(p instanceof Int8Array)S=5120;else if(p instanceof Uint8Array)S=5121;else if(p instanceof Uint8ClampedArray)S=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:c.version}}function o(c,d,p){const h=d.array,x=d.updateRange;n.bindBuffer(p,c),x.count===-1?n.bufferSubData(p,0,h):(t?n.bufferSubData(p,x.offset*h.BYTES_PER_ELEMENT,h,x.offset,x.count):n.bufferSubData(p,x.offset*h.BYTES_PER_ELEMENT,h.subarray(x.offset,x.offset+x.count)),x.count=-1)}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(n.deleteBuffer(d.buffer),i.delete(c))}function u(c,d){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const p=i.get(c);p===void 0?i.set(c,r(c,d)):p.version<c.version&&(o(p.buffer,c,d),p.version=c.version)}return{get:s,remove:a,update:u}}class yd extends zi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const o=e/2,s=t/2,a=Math.floor(i),u=Math.floor(r),c=a+1,d=u+1,p=e/a,h=t/u,x=[],S=[],g=[],m=[];for(let _=0;_<d;_++){const w=_*h-s;for(let E=0;E<c;E++){const b=E*p-o;S.push(b,-w,0),g.push(0,0,1),m.push(E/a),m.push(1-_/u)}}for(let _=0;_<u;_++)for(let w=0;w<a;w++){const E=w+c*_,b=w+c*(_+1),L=w+1+c*(_+1),k=w+1+c*_;x.push(E,b,k),x.push(b,L,k)}this.setIndex(x),this.setAttribute("position",new ni(S,3)),this.setAttribute("normal",new ni(g,3)),this.setAttribute("uv",new ni(m,2))}static fromJSON(e){return new yd(e.width,e.height,e.widthSegments,e.heightSegments)}}var Tx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Cx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ax=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Px=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rx="vec3 transformed = vec3( position );",kx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fx=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Ix=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Nx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ox=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ux=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Wx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,jx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Xx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qx=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Yx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$x=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Zx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jx=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ew=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,iw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ow=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,cw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,fw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dw=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,hw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pw=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,mw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,vw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_w=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,yw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,xw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ww=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Mw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ew=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Cw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Lw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Aw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Iw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Nw=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,zw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ow=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Uw=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Bw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Ww=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,jw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Xw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,qw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$w=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Zw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nS=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,iS=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rS=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,oS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,lS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pS=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,mS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,gS=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,vS=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,_S=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,yS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,xS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,wS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,SS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const MS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ES=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,bS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TS=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,CS=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,LS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,AS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,PS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,DS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,kS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IS=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,NS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zS=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OS=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,US=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,BS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,HS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,GS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,XS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$S=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ZS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KS=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,JS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,e1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,qe={alphamap_fragment:Tx,alphamap_pars_fragment:Cx,alphatest_fragment:Lx,alphatest_pars_fragment:Ax,aomap_fragment:Px,aomap_pars_fragment:Dx,begin_vertex:Rx,beginnormal_vertex:kx,bsdfs:Fx,iridescence_fragment:Ix,bumpmap_pars_fragment:Nx,clipping_planes_fragment:zx,clipping_planes_pars_fragment:Ox,clipping_planes_pars_vertex:Ux,clipping_planes_vertex:Bx,color_fragment:Vx,color_pars_fragment:Hx,color_pars_vertex:Gx,color_vertex:Wx,common:jx,cube_uv_reflection_fragment:Xx,defaultnormal_vertex:qx,displacementmap_pars_vertex:Yx,displacementmap_vertex:$x,emissivemap_fragment:Zx,emissivemap_pars_fragment:Kx,encodings_fragment:Qx,encodings_pars_fragment:Jx,envmap_fragment:ew,envmap_common_pars_fragment:tw,envmap_pars_fragment:nw,envmap_pars_vertex:iw,envmap_physical_pars_fragment:pw,envmap_vertex:rw,fog_vertex:ow,fog_pars_vertex:sw,fog_fragment:aw,fog_pars_fragment:lw,gradientmap_pars_fragment:uw,lightmap_fragment:cw,lightmap_pars_fragment:fw,lights_lambert_vertex:dw,lights_pars_begin:hw,lights_toon_fragment:mw,lights_toon_pars_fragment:gw,lights_phong_fragment:vw,lights_phong_pars_fragment:_w,lights_physical_fragment:yw,lights_physical_pars_fragment:xw,lights_fragment_begin:ww,lights_fragment_maps:Sw,lights_fragment_end:Mw,logdepthbuf_fragment:Ew,logdepthbuf_pars_fragment:bw,logdepthbuf_pars_vertex:Tw,logdepthbuf_vertex:Cw,map_fragment:Lw,map_pars_fragment:Aw,map_particle_fragment:Pw,map_particle_pars_fragment:Dw,metalnessmap_fragment:Rw,metalnessmap_pars_fragment:kw,morphcolor_vertex:Fw,morphnormal_vertex:Iw,morphtarget_pars_vertex:Nw,morphtarget_vertex:zw,normal_fragment_begin:Ow,normal_fragment_maps:Uw,normal_pars_fragment:Bw,normal_pars_vertex:Vw,normal_vertex:Hw,normalmap_pars_fragment:Gw,clearcoat_normal_fragment_begin:Ww,clearcoat_normal_fragment_maps:jw,clearcoat_pars_fragment:Xw,iridescence_pars_fragment:qw,output_fragment:Yw,packing:$w,premultiplied_alpha_fragment:Zw,project_vertex:Kw,dithering_fragment:Qw,dithering_pars_fragment:Jw,roughnessmap_fragment:eS,roughnessmap_pars_fragment:tS,shadowmap_pars_fragment:nS,shadowmap_pars_vertex:iS,shadowmap_vertex:rS,shadowmask_pars_fragment:oS,skinbase_vertex:sS,skinning_pars_vertex:aS,skinning_vertex:lS,skinnormal_vertex:uS,specularmap_fragment:cS,specularmap_pars_fragment:fS,tonemapping_fragment:dS,tonemapping_pars_fragment:hS,transmission_fragment:pS,transmission_pars_fragment:mS,uv_pars_fragment:gS,uv_pars_vertex:vS,uv_vertex:_S,uv2_pars_fragment:yS,uv2_pars_vertex:xS,uv2_vertex:wS,worldpos_vertex:SS,background_vert:MS,background_frag:ES,cube_vert:bS,cube_frag:TS,depth_vert:CS,depth_frag:LS,distanceRGBA_vert:AS,distanceRGBA_frag:PS,equirect_vert:DS,equirect_frag:RS,linedashed_vert:kS,linedashed_frag:FS,meshbasic_vert:IS,meshbasic_frag:NS,meshlambert_vert:zS,meshlambert_frag:OS,meshmatcap_vert:US,meshmatcap_frag:BS,meshnormal_vert:VS,meshnormal_frag:HS,meshphong_vert:GS,meshphong_frag:WS,meshphysical_vert:jS,meshphysical_frag:XS,meshtoon_vert:qS,meshtoon_frag:YS,points_vert:$S,points_frag:ZS,shadow_vert:KS,shadow_frag:QS,sprite_vert:JS,sprite_frag:e1},_e={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Fn},uv2Transform:{value:new Fn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Fn}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Fn}}},fi={basic:{uniforms:$t([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:$t([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.fog,_e.lights,{emissive:{value:new ft(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:$t([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:$t([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:$t([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new ft(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:$t([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:$t([_e.points,_e.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:$t([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:$t([_e.common,_e.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:$t([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:$t([_e.sprite,_e.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Fn},t2D:{value:null}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},cube:{uniforms:$t([_e.envmap,{opacity:{value:1}}]),vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:$t([_e.common,_e.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:$t([_e.lights,_e.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};fi.physical={uniforms:$t([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new je(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};function t1(n,e,t,i,r,o){const s=new ft(0);let a=r===!0?0:1,u,c,d=null,p=0,h=null;function x(g,m){let _=!1,w=m.isScene===!0?m.background:null;w&&w.isTexture&&(w=e.get(w));const E=n.xr,b=E.getSession&&E.getSession();b&&b.environmentBlendMode==="additive"&&(w=null),w===null?S(s,a):w&&w.isColor&&(S(w,1),_=!0),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),w&&(w.isCubeTexture||w.mapping===Ql)?(c===void 0&&(c=new pi(new sa(1,1,1),new jr({name:"BackgroundCubeMaterial",uniforms:Zo(fi.cube.uniforms),vertexShader:fi.cube.vertexShader,fragmentShader:fi.cube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(L,k,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,(d!==w||p!==w.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=w,p=w.version,h=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(u===void 0&&(u=new pi(new yd(2,2),new jr({name:"BackgroundMaterial",uniforms:Zo(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:$s,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=w,w.matrixAutoUpdate===!0&&w.updateMatrix(),u.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||p!==w.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=w,p=w.version,h=n.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function S(g,m){t.buffers.color.setClear(g.r,g.g,g.b,m,o)}return{getClearColor:function(){return s},setClearColor:function(g,m=1){s.set(g),a=m,S(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(g){a=g,S(s,a)},render:x}}function n1(n,e,t,i){const r=n.getParameter(34921),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||o!==null,a={},u=m(null);let c=u,d=!1;function p(q,oe,K,se,V){let B=!1;if(s){const G=g(se,K,oe);c!==G&&(c=G,x(c.object)),B=_(q,se,K,V),B&&w(q,se,K,V)}else{const G=oe.wireframe===!0;(c.geometry!==se.id||c.program!==K.id||c.wireframe!==G)&&(c.geometry=se.id,c.program=K.id,c.wireframe=G,B=!0)}V!==null&&t.update(V,34963),(B||d)&&(d=!1,T(q,oe,K,se),V!==null&&n.bindBuffer(34963,t.get(V).buffer))}function h(){return i.isWebGL2?n.createVertexArray():o.createVertexArrayOES()}function x(q){return i.isWebGL2?n.bindVertexArray(q):o.bindVertexArrayOES(q)}function S(q){return i.isWebGL2?n.deleteVertexArray(q):o.deleteVertexArrayOES(q)}function g(q,oe,K){const se=K.wireframe===!0;let V=a[q.id];V===void 0&&(V={},a[q.id]=V);let B=V[oe.id];B===void 0&&(B={},V[oe.id]=B);let G=B[se];return G===void 0&&(G=m(h()),B[se]=G),G}function m(q){const oe=[],K=[],se=[];for(let V=0;V<r;V++)oe[V]=0,K[V]=0,se[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:oe,enabledAttributes:K,attributeDivisors:se,object:q,attributes:{},index:null}}function _(q,oe,K,se){const V=c.attributes,B=oe.attributes;let G=0;const $=K.getAttributes();for(const J in $)if($[J].location>=0){const xe=V[J];let De=B[J];if(De===void 0&&(J==="instanceMatrix"&&q.instanceMatrix&&(De=q.instanceMatrix),J==="instanceColor"&&q.instanceColor&&(De=q.instanceColor)),xe===void 0||xe.attribute!==De||De&&xe.data!==De.data)return!0;G++}return c.attributesNum!==G||c.index!==se}function w(q,oe,K,se){const V={},B=oe.attributes;let G=0;const $=K.getAttributes();for(const J in $)if($[J].location>=0){let xe=B[J];xe===void 0&&(J==="instanceMatrix"&&q.instanceMatrix&&(xe=q.instanceMatrix),J==="instanceColor"&&q.instanceColor&&(xe=q.instanceColor));const De={};De.attribute=xe,xe&&xe.data&&(De.data=xe.data),V[J]=De,G++}c.attributes=V,c.attributesNum=G,c.index=se}function E(){const q=c.newAttributes;for(let oe=0,K=q.length;oe<K;oe++)q[oe]=0}function b(q){L(q,0)}function L(q,oe){const K=c.newAttributes,se=c.enabledAttributes,V=c.attributeDivisors;K[q]=1,se[q]===0&&(n.enableVertexAttribArray(q),se[q]=1),V[q]!==oe&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](q,oe),V[q]=oe)}function k(){const q=c.newAttributes,oe=c.enabledAttributes;for(let K=0,se=oe.length;K<se;K++)oe[K]!==q[K]&&(n.disableVertexAttribArray(K),oe[K]=0)}function z(q,oe,K,se,V,B){i.isWebGL2===!0&&(K===5124||K===5125)?n.vertexAttribIPointer(q,oe,K,V,B):n.vertexAttribPointer(q,oe,K,se,V,B)}function T(q,oe,K,se){if(i.isWebGL2===!1&&(q.isInstancedMesh||se.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const V=se.attributes,B=K.getAttributes(),G=oe.defaultAttributeValues;for(const $ in B){const J=B[$];if(J.location>=0){let he=V[$];if(he===void 0&&($==="instanceMatrix"&&q.instanceMatrix&&(he=q.instanceMatrix),$==="instanceColor"&&q.instanceColor&&(he=q.instanceColor)),he!==void 0){const xe=he.normalized,De=he.itemSize,te=t.get(he);if(te===void 0)continue;const Xe=te.buffer,Fe=te.type,Ne=te.bytesPerElement;if(he.isInterleavedBufferAttribute){const Ee=he.data,et=Ee.stride,Be=he.offset;if(Ee.isInstancedInterleavedBuffer){for(let Re=0;Re<J.locationSize;Re++)L(J.location+Re,Ee.meshPerAttribute);q.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Re=0;Re<J.locationSize;Re++)b(J.location+Re);n.bindBuffer(34962,Xe);for(let Re=0;Re<J.locationSize;Re++)z(J.location+Re,De/J.locationSize,Fe,xe,et*Ne,(Be+De/J.locationSize*Re)*Ne)}else{if(he.isInstancedBufferAttribute){for(let Ee=0;Ee<J.locationSize;Ee++)L(J.location+Ee,he.meshPerAttribute);q.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ee=0;Ee<J.locationSize;Ee++)b(J.location+Ee);n.bindBuffer(34962,Xe);for(let Ee=0;Ee<J.locationSize;Ee++)z(J.location+Ee,De/J.locationSize,Fe,xe,De*Ne,De/J.locationSize*Ee*Ne)}}else if(G!==void 0){const xe=G[$];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(J.location,xe);break;case 3:n.vertexAttrib3fv(J.location,xe);break;case 4:n.vertexAttrib4fv(J.location,xe);break;default:n.vertexAttrib1fv(J.location,xe)}}}}k()}function N(){le();for(const q in a){const oe=a[q];for(const K in oe){const se=oe[K];for(const V in se)S(se[V].object),delete se[V];delete oe[K]}delete a[q]}}function H(q){if(a[q.id]===void 0)return;const oe=a[q.id];for(const K in oe){const se=oe[K];for(const V in se)S(se[V].object),delete se[V];delete oe[K]}delete a[q.id]}function Y(q){for(const oe in a){const K=a[oe];if(K[q.id]===void 0)continue;const se=K[q.id];for(const V in se)S(se[V].object),delete se[V];delete K[q.id]}}function le(){fe(),d=!0,c!==u&&(c=u,x(c.object))}function fe(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:p,reset:le,resetDefaultState:fe,dispose:N,releaseStatesOfGeometry:H,releaseStatesOfProgram:Y,initAttributes:E,enableAttribute:b,disableUnusedAttributes:k}}function i1(n,e,t,i){const r=i.isWebGL2;let o;function s(c){o=c}function a(c,d){n.drawArrays(o,c,d),t.update(d,o,1)}function u(c,d,p){if(p===0)return;let h,x;if(r)h=n,x="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[x](o,c,d,p),t.update(d,o,p)}this.setMode=s,this.render=a,this.renderInstances=u}function r1(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(z){if(z==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";z="mediump"}return z==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const u=o(a);u!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",u,"instead."),a=u);const c=s||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,p=n.getParameter(34930),h=n.getParameter(35660),x=n.getParameter(3379),S=n.getParameter(34076),g=n.getParameter(34921),m=n.getParameter(36347),_=n.getParameter(36348),w=n.getParameter(36349),E=h>0,b=s||e.has("OES_texture_float"),L=E&&b,k=s?n.getParameter(36183):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:d,maxTextures:p,maxVertexTextures:h,maxTextureSize:x,maxCubemapSize:S,maxAttributes:g,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:w,vertexTextures:E,floatFragmentTextures:b,floatVertexTextures:L,maxSamples:k}}function o1(n){const e=this;let t=null,i=0,r=!1,o=!1;const s=new Mr,a=new Fn,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h,x){const S=p.length!==0||h||i!==0||r;return r=h,t=d(p,x,0),i=p.length,S},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1,c()},this.setState=function(p,h,x){const S=p.clippingPlanes,g=p.clipIntersection,m=p.clipShadows,_=n.get(p);if(!r||S===null||S.length===0||o&&!m)o?d(null):c();else{const w=o?0:i,E=w*4;let b=_.clippingState||null;u.value=b,b=d(S,h,E,x);for(let L=0;L!==E;++L)b[L]=t[L];_.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=w}};function c(){u.value!==t&&(u.value=t,u.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(p,h,x,S){const g=p!==null?p.length:0;let m=null;if(g!==0){if(m=u.value,S!==!0||m===null){const _=x+g*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<_)&&(m=new Float32Array(_));for(let E=0,b=x;E!==g;++E,b+=4)s.copy(p[E]).applyMatrix4(w,a),s.normal.toArray(m,b),m[b+3]=s.constant}u.value=m,u.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function s1(n){let e=new WeakMap;function t(s,a){return a===pf?s.mapping=qo:a===mf&&(s.mapping=Yo),s}function i(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===pf||a===mf)if(e.has(s)){const u=e.get(s).texture;return t(u,s.mapping)}else{const u=s.image;if(u&&u.height>0){const c=new Sx(u.height/2);return c.fromEquirectangularTexture(n,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const u=e.get(a);u!==void 0&&(e.delete(a),u.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class a1 extends Cv{constructor(e=-1,t=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+t,u=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=d*this.view.offsetY,u=a-d*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,u,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Po=4,bp=[.125,.215,.35,.446,.526,.582],br=20,ac=new a1,Tp=new ft;let lc=null;const Er=(1+Math.sqrt(5))/2,mo=1/Er,Cp=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,Er,mo),new j(0,Er,-mo),new j(mo,0,Er),new j(-mo,0,Er),new j(Er,mo,0),new j(-Er,mo,0)];class Lp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){lc=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lc),e.scissorTest=!1,Xa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qo||e.mapping===Yo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lc=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Zs,format:hi,encoding:Hr,depthBuffer:!1},r=Ap(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ap(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=l1(o)),this._blurMaterial=u1(o,e,t)}return r}_compileMaterial(e){const t=new pi(this._lodPlanes[0],e);this._renderer.compile(t,ac)}_sceneToCubeUV(e,t,i,r){const a=new Rn(90,1,t,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,h=d.toneMapping;d.getClearColor(Tp),d.toneMapping=Di,d.autoClear=!1;const x=new Il({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1}),S=new pi(new sa,x);let g=!1;const m=e.background;m?m.isColor&&(x.color.copy(m),e.background=null,g=!0):(x.color.copy(Tp),g=!0);for(let _=0;_<6;_++){const w=_%3;w===0?(a.up.set(0,u[_],0),a.lookAt(c[_],0,0)):w===1?(a.up.set(0,0,u[_]),a.lookAt(0,c[_],0)):(a.up.set(0,u[_],0),a.lookAt(0,0,c[_]));const E=this._cubeSize;Xa(r,w*E,_>2?E:0,E,E),d.setRenderTarget(r),g&&d.render(S,a),d.render(e,a)}S.geometry.dispose(),S.material.dispose(),d.toneMapping=h,d.autoClear=p,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===qo||e.mapping===Yo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pp());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new pi(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const u=this._cubeSize;Xa(t,0,0,3*u,2*u),i.setRenderTarget(t),i.render(s,ac)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=Cp[(r-1)%Cp.length];this._blur(e,r-1,r,o,s)}t.autoClear=i}_blur(e,t,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,t,i,r,o,s,a){const u=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new pi(this._lodPlanes[r],c),h=c.uniforms,x=this._sizeLods[i]-1,S=isFinite(o)?Math.PI/(2*x):2*Math.PI/(2*br-1),g=o/S,m=isFinite(o)?1+Math.floor(d*g):br;m>br&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${br}`);const _=[];let w=0;for(let z=0;z<br;++z){const T=z/g,N=Math.exp(-T*T/2);_.push(N),z===0?w+=N:z<m&&(w+=2*N)}for(let z=0;z<_.length;z++)_[z]=_[z]/w;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=_,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:E}=this;h.dTheta.value=S,h.mipInt.value=E-i;const b=this._sizeLods[r],L=3*b*(r>E-Po?r-E+Po:0),k=4*(this._cubeSize-b);Xa(t,L,k,3*b,2*b),u.setRenderTarget(t),u.render(p,ac)}}function l1(n){const e=[],t=[],i=[];let r=n;const o=n-Po+1+bp.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);t.push(a);let u=1/a;s>n-Po?u=bp[s-n+Po-1]:s===0&&(u=0),i.push(u);const c=1/(a-2),d=-c,p=1+c,h=[d,d,p,d,p,p,d,d,p,p,d,p],x=6,S=6,g=3,m=2,_=1,w=new Float32Array(g*S*x),E=new Float32Array(m*S*x),b=new Float32Array(_*S*x);for(let k=0;k<x;k++){const z=k%3*2/3-1,T=k>2?0:-1,N=[z,T,0,z+2/3,T,0,z+2/3,T+1,0,z,T,0,z+2/3,T+1,0,z,T+1,0];w.set(N,g*S*k),E.set(h,m*S*k);const H=[k,k,k,k,k,k];b.set(H,_*S*k)}const L=new zi;L.setAttribute("position",new ti(w,g)),L.setAttribute("uv",new ti(E,m)),L.setAttribute("faceIndex",new ti(b,_)),e.push(L),r>Po&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ap(n,e,t){const i=new Gr(n,e,t);return i.texture.mapping=Ql,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function u1(n,e,t){const i=new Float32Array(br),r=new j(0,1,0);return new jr({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function Pp(){return new jr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function Dp(){return new jr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function xd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function c1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const u=a.mapping,c=u===pf||u===mf,d=u===qo||u===Yo;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let p=e.get(a);return t===null&&(t=new Lp(n)),p=c?t.fromEquirectangular(a,p):t.fromCubemap(a,p),e.set(a,p),p.texture}else{if(e.has(a))return e.get(a).texture;{const p=a.image;if(c&&p&&p.height>0||d&&p&&r(p)){t===null&&(t=new Lp(n));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",o),h.texture}else return null}}}return a}function r(a){let u=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&u++;return u===c}function o(a){const u=a.target;u.removeEventListener("dispose",o);const c=e.get(u);c!==void 0&&(e.delete(u),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function f1(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function d1(n,e,t,i){const r={},o=new WeakMap;function s(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const S in h.attributes)e.remove(h.attributes[S]);h.removeEventListener("dispose",s),delete r[h.id];const x=o.get(h);x&&(e.remove(x),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(p,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,t.memory.geometries++),h}function u(p){const h=p.attributes;for(const S in h)e.update(h[S],34962);const x=p.morphAttributes;for(const S in x){const g=x[S];for(let m=0,_=g.length;m<_;m++)e.update(g[m],34962)}}function c(p){const h=[],x=p.index,S=p.attributes.position;let g=0;if(x!==null){const w=x.array;g=x.version;for(let E=0,b=w.length;E<b;E+=3){const L=w[E+0],k=w[E+1],z=w[E+2];h.push(L,k,k,z,z,L)}}else{const w=S.array;g=S.version;for(let E=0,b=w.length/3-1;E<b;E+=3){const L=E+0,k=E+1,z=E+2;h.push(L,k,k,z,z,L)}}const m=new(xv(h)?Tv:_d)(h,1);m.version=g;const _=o.get(p);_&&e.remove(_),o.set(p,m)}function d(p){const h=o.get(p);if(h){const x=p.index;x!==null&&h.version<x.version&&c(p)}else c(p);return o.get(p)}return{get:a,update:u,getWireframeAttribute:d}}function h1(n,e,t,i){const r=i.isWebGL2;let o;function s(h){o=h}let a,u;function c(h){a=h.type,u=h.bytesPerElement}function d(h,x){n.drawElements(o,x,a,h*u),t.update(x,o,1)}function p(h,x,S){if(S===0)return;let g,m;if(r)g=n,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](o,x,a,h*u,S),t.update(x,o,S)}this.setMode=s,this.setIndex=c,this.render=d,this.renderInstances=p}function p1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(t.calls++,s){case 4:t.triangles+=a*(o/3);break;case 1:t.lines+=a*(o/2);break;case 3:t.lines+=a*(o-1);break;case 2:t.lines+=a*o;break;case 0:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function m1(n,e){return n[0]-e[0]}function g1(n,e){return Math.abs(e[1])-Math.abs(n[1])}function uc(n,e){let t=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Uint8Array?t=255:i instanceof Uint16Array?t=65535:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),n.divideScalar(t)}function v1(n,e,t){const i={},r=new Float32Array(8),o=new WeakMap,s=new It,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function u(c,d,p,h){const x=c.morphTargetInfluences;if(e.isWebGL2===!0){const S=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=S!==void 0?S.length:0;let m=o.get(d);if(m===void 0||m.count!==g){let oe=function(){fe.dispose(),o.delete(d),d.removeEventListener("dispose",oe)};m!==void 0&&m.texture.dispose();const E=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,L=d.morphAttributes.color!==void 0,k=d.morphAttributes.position||[],z=d.morphAttributes.normal||[],T=d.morphAttributes.color||[];let N=0;E===!0&&(N=1),b===!0&&(N=2),L===!0&&(N=3);let H=d.attributes.position.count*N,Y=1;H>e.maxTextureSize&&(Y=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const le=new Float32Array(H*Y*4*g),fe=new Ev(le,H,Y,g);fe.type=Pr,fe.needsUpdate=!0;const q=N*4;for(let K=0;K<g;K++){const se=k[K],V=z[K],B=T[K],G=H*Y*4*K;for(let $=0;$<se.count;$++){const J=$*q;E===!0&&(s.fromBufferAttribute(se,$),se.normalized===!0&&uc(s,se),le[G+J+0]=s.x,le[G+J+1]=s.y,le[G+J+2]=s.z,le[G+J+3]=0),b===!0&&(s.fromBufferAttribute(V,$),V.normalized===!0&&uc(s,V),le[G+J+4]=s.x,le[G+J+5]=s.y,le[G+J+6]=s.z,le[G+J+7]=0),L===!0&&(s.fromBufferAttribute(B,$),B.normalized===!0&&uc(s,B),le[G+J+8]=s.x,le[G+J+9]=s.y,le[G+J+10]=s.z,le[G+J+11]=B.itemSize===4?s.w:1)}}m={count:g,texture:fe,size:new je(H,Y)},o.set(d,m),d.addEventListener("dispose",oe)}let _=0;for(let E=0;E<x.length;E++)_+=x[E];const w=d.morphTargetsRelative?1:1-_;h.getUniforms().setValue(n,"morphTargetBaseInfluence",w),h.getUniforms().setValue(n,"morphTargetInfluences",x),h.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const S=x===void 0?0:x.length;let g=i[d.id];if(g===void 0||g.length!==S){g=[];for(let b=0;b<S;b++)g[b]=[b,0];i[d.id]=g}for(let b=0;b<S;b++){const L=g[b];L[0]=b,L[1]=x[b]}g.sort(g1);for(let b=0;b<8;b++)b<S&&g[b][1]?(a[b][0]=g[b][0],a[b][1]=g[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(m1);const m=d.morphAttributes.position,_=d.morphAttributes.normal;let w=0;for(let b=0;b<8;b++){const L=a[b],k=L[0],z=L[1];k!==Number.MAX_SAFE_INTEGER&&z?(m&&d.getAttribute("morphTarget"+b)!==m[k]&&d.setAttribute("morphTarget"+b,m[k]),_&&d.getAttribute("morphNormal"+b)!==_[k]&&d.setAttribute("morphNormal"+b,_[k]),r[b]=z,w+=z):(m&&d.hasAttribute("morphTarget"+b)===!0&&d.deleteAttribute("morphTarget"+b),_&&d.hasAttribute("morphNormal"+b)===!0&&d.deleteAttribute("morphNormal"+b),r[b]=0)}const E=d.morphTargetsRelative?1:1-w;h.getUniforms().setValue(n,"morphTargetBaseInfluence",E),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:u}}function _1(n,e,t,i){let r=new WeakMap;function o(u){const c=i.render.frame,d=u.geometry,p=e.get(u,d);return r.get(p)!==c&&(e.update(p),r.set(p,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",a)===!1&&u.addEventListener("dispose",a),t.update(u.instanceMatrix,34962),u.instanceColor!==null&&t.update(u.instanceColor,34962)),p}function s(){r=new WeakMap}function a(u){const c=u.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:s}}const Dv=new On,Rv=new Ev,kv=new ox,Fv=new Lv,Rp=[],kp=[],Fp=new Float32Array(16),Ip=new Float32Array(9),Np=new Float32Array(4);function es(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let o=Rp[r];if(o===void 0&&(o=new Float32Array(r),Rp[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,n[s].toArray(o,a)}return o}function tn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function nn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function tu(n,e){let t=kp[e];t===void 0&&(t=new Int32Array(e),kp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function y1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function x1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2fv(this.addr,e),nn(t,e)}}function w1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;n.uniform3fv(this.addr,e),nn(t,e)}}function S1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4fv(this.addr,e),nn(t,e)}}function M1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;Np.set(i),n.uniformMatrix2fv(this.addr,!1,Np),nn(t,i)}}function E1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;Ip.set(i),n.uniformMatrix3fv(this.addr,!1,Ip),nn(t,i)}}function b1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;Fp.set(i),n.uniformMatrix4fv(this.addr,!1,Fp),nn(t,i)}}function T1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function C1(n,e){const t=this.cache;tn(t,e)||(n.uniform2iv(this.addr,e),nn(t,e))}function L1(n,e){const t=this.cache;tn(t,e)||(n.uniform3iv(this.addr,e),nn(t,e))}function A1(n,e){const t=this.cache;tn(t,e)||(n.uniform4iv(this.addr,e),nn(t,e))}function P1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function D1(n,e){const t=this.cache;tn(t,e)||(n.uniform2uiv(this.addr,e),nn(t,e))}function R1(n,e){const t=this.cache;tn(t,e)||(n.uniform3uiv(this.addr,e),nn(t,e))}function k1(n,e){const t=this.cache;tn(t,e)||(n.uniform4uiv(this.addr,e),nn(t,e))}function F1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Dv,r)}function I1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||kv,r)}function N1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Fv,r)}function z1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Rv,r)}function O1(n){switch(n){case 5126:return y1;case 35664:return x1;case 35665:return w1;case 35666:return S1;case 35674:return M1;case 35675:return E1;case 35676:return b1;case 5124:case 35670:return T1;case 35667:case 35671:return C1;case 35668:case 35672:return L1;case 35669:case 35673:return A1;case 5125:return P1;case 36294:return D1;case 36295:return R1;case 36296:return k1;case 35678:case 36198:case 36298:case 36306:case 35682:return F1;case 35679:case 36299:case 36307:return I1;case 35680:case 36300:case 36308:case 36293:return N1;case 36289:case 36303:case 36311:case 36292:return z1}}function U1(n,e){n.uniform1fv(this.addr,e)}function B1(n,e){const t=es(e,this.size,2);n.uniform2fv(this.addr,t)}function V1(n,e){const t=es(e,this.size,3);n.uniform3fv(this.addr,t)}function H1(n,e){const t=es(e,this.size,4);n.uniform4fv(this.addr,t)}function G1(n,e){const t=es(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function W1(n,e){const t=es(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function j1(n,e){const t=es(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function X1(n,e){n.uniform1iv(this.addr,e)}function q1(n,e){n.uniform2iv(this.addr,e)}function Y1(n,e){n.uniform3iv(this.addr,e)}function $1(n,e){n.uniform4iv(this.addr,e)}function Z1(n,e){n.uniform1uiv(this.addr,e)}function K1(n,e){n.uniform2uiv(this.addr,e)}function Q1(n,e){n.uniform3uiv(this.addr,e)}function J1(n,e){n.uniform4uiv(this.addr,e)}function eM(n,e,t){const i=e.length,r=tu(t,i);n.uniform1iv(this.addr,r);for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Dv,r[o])}function tM(n,e,t){const i=e.length,r=tu(t,i);n.uniform1iv(this.addr,r);for(let o=0;o!==i;++o)t.setTexture3D(e[o]||kv,r[o])}function nM(n,e,t){const i=e.length,r=tu(t,i);n.uniform1iv(this.addr,r);for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Fv,r[o])}function iM(n,e,t){const i=e.length,r=tu(t,i);n.uniform1iv(this.addr,r);for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Rv,r[o])}function rM(n){switch(n){case 5126:return U1;case 35664:return B1;case 35665:return V1;case 35666:return H1;case 35674:return G1;case 35675:return W1;case 35676:return j1;case 5124:case 35670:return X1;case 35667:case 35671:return q1;case 35668:case 35672:return Y1;case 35669:case 35673:return $1;case 5125:return Z1;case 36294:return K1;case 36295:return Q1;case 36296:return J1;case 35678:case 36198:case 36298:case 36306:case 35682:return eM;case 35679:case 36299:case 36307:return tM;case 35680:case 36300:case 36308:case 36293:return nM;case 36289:case 36303:case 36311:case 36292:return iM}}class oM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=O1(t.type)}}class sM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=rM(t.type)}}class aM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,t[a.id],i)}}}const cc=/(\w+)(\])?(\[|\.)?/g;function zp(n,e){n.seq.push(e),n.map[e.id]=e}function lM(n,e,t){const i=n.name,r=i.length;for(cc.lastIndex=0;;){const o=cc.exec(i),s=cc.lastIndex;let a=o[1];const u=o[2]==="]",c=o[3];if(u&&(a=a|0),c===void 0||c==="["&&s+2===r){zp(t,c===void 0?new oM(a,n,e):new sM(a,n,e));break}else{let p=t.map[a];p===void 0&&(p=new aM(a),zp(t,p)),t=p}}}class ul{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const o=e.getActiveUniform(t,r),s=e.getUniformLocation(t,o.name);lM(o,s,this)}}setValue(e,t,i,r){const o=this.map[t];o!==void 0&&o.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let o=0,s=t.length;o!==s;++o){const a=t[o],u=i[a.id];u.needsUpdate!==!1&&a.setValue(e,u.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function Op(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let uM=0;function cM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return i.join(`
`)}function fM(n){switch(n){case Hr:return["Linear","( value )"];case xt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Up(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+cM(n.getShaderSource(e),s)}else return r}function dM(n,e){const t=fM(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function hM(n,e){let t;switch(e){case Ry:t="Linear";break;case ky:t="Reinhard";break;case Fy:t="OptimizedCineon";break;case Iy:t="ACESFilmic";break;case Ny:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function pM(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xs).join(`
`)}function mM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function gM(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const o=n.getActiveAttrib(e,r),s=o.name;let a=1;o.type===35674&&(a=2),o.type===35675&&(a=3),o.type===35676&&(a=4),t[s]={type:o.type,location:n.getAttribLocation(e,s),locationSize:a}}return t}function xs(n){return n!==""}function Bp(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vM=/^[ \t]*#include +<([\w\d./]+)>/gm;function xf(n){return n.replace(vM,_M)}function _M(n,e){const t=qe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return xf(t)}const yM=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,xM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hp(n){return n.replace(xM,Iv).replace(yM,wM)}function wM(n,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Iv(n,e,t,i)}function Iv(n,e,t,i){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Gp(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function SM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===hv?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===uy?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ys&&(e="SHADOWMAP_TYPE_VSM"),e}function MM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case qo:case Yo:e="ENVMAP_TYPE_CUBE";break;case Ql:e="ENVMAP_TYPE_CUBE_UV";break}return e}function EM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Yo:e="ENVMAP_MODE_REFRACTION";break}return e}function bM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case gv:e="ENVMAP_BLENDING_MULTIPLY";break;case Py:e="ENVMAP_BLENDING_MIX";break;case Dy:e="ENVMAP_BLENDING_ADD";break}return e}function TM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function CM(n,e,t,i){const r=n.getContext(),o=t.defines;let s=t.vertexShader,a=t.fragmentShader;const u=SM(t),c=MM(t),d=EM(t),p=bM(t),h=TM(t),x=t.isWebGL2?"":pM(t),S=mM(o),g=r.createProgram();let m,_,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[S].filter(xs).join(`
`),m.length>0&&(m+=`
`),_=[x,S].filter(xs).join(`
`),_.length>0&&(_+=`
`)):(m=[Gp(t),"#define SHADER_NAME "+t.shaderName,S,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xs).join(`
`),_=[x,Gp(t),"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Di?"#define TONE_MAPPING":"",t.toneMapping!==Di?qe.tonemapping_pars_fragment:"",t.toneMapping!==Di?hM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.encodings_pars_fragment,dM("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xs).join(`
`)),s=xf(s),s=Bp(s,t),s=Vp(s,t),a=xf(a),a=Bp(a,t),a=Vp(a,t),s=Hp(s),a=Hp(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===fp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const E=w+m+s,b=w+_+a,L=Op(r,35633,E),k=Op(r,35632,b);if(r.attachShader(g,L),r.attachShader(g,k),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),n.debug.checkShaderErrors){const N=r.getProgramInfoLog(g).trim(),H=r.getShaderInfoLog(L).trim(),Y=r.getShaderInfoLog(k).trim();let le=!0,fe=!0;if(r.getProgramParameter(g,35714)===!1){le=!1;const q=Up(r,L,"vertex"),oe=Up(r,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,35715)+`

Program Info Log: `+N+`
`+q+`
`+oe)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(H===""||Y==="")&&(fe=!1);fe&&(this.diagnostics={runnable:le,programLog:N,vertexShader:{log:H,prefix:m},fragmentShader:{log:Y,prefix:_}})}r.deleteShader(L),r.deleteShader(k);let z;this.getUniforms=function(){return z===void 0&&(z=new ul(r,g)),z};let T;return this.getAttributes=function(){return T===void 0&&(T=gM(r,g)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=uM++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=L,this.fragmentShader=k,this}let LM=0;class AM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const i=new PM(e);t.set(e,i)}return t.get(e)}}class PM{constructor(e){this.id=LM++,this.code=e,this.usedTimes=0}}function DM(n,e,t,i,r,o,s){const a=new bv,u=new AM,c=[],d=r.isWebGL2,p=r.logarithmicDepthBuffer,h=r.vertexTextures;let x=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(T,N,H,Y,le){const fe=Y.fog,q=le.geometry,oe=T.isMeshStandardMaterial?Y.environment:null,K=(T.isMeshStandardMaterial?t:e).get(T.envMap||oe),se=!!K&&K.mapping===Ql?K.image.height:null,V=S[T.type];T.precision!==null&&(x=r.getMaxPrecision(T.precision),x!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",x,"instead."));const B=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,G=B!==void 0?B.length:0;let $=0;q.morphAttributes.position!==void 0&&($=1),q.morphAttributes.normal!==void 0&&($=2),q.morphAttributes.color!==void 0&&($=3);let J,he,xe,De;if(V){const et=fi[V];J=et.vertexShader,he=et.fragmentShader}else J=T.vertexShader,he=T.fragmentShader,u.update(T),xe=u.getVertexShaderID(T),De=u.getFragmentShaderID(T);const te=n.getRenderTarget(),Xe=T.alphaTest>0,Fe=T.clearcoat>0,Ne=T.iridescence>0;return{isWebGL2:d,shaderID:V,shaderName:T.type,vertexShader:J,fragmentShader:he,defines:T.defines,customVertexShaderID:xe,customFragmentShaderID:De,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:x,instancing:le.isInstancedMesh===!0,instancingColor:le.isInstancedMesh===!0&&le.instanceColor!==null,supportsVertexTextures:h,outputEncoding:te===null?n.outputEncoding:te.isXRRenderTarget===!0?te.texture.encoding:Hr,map:!!T.map,matcap:!!T.matcap,envMap:!!K,envMapMode:K&&K.mapping,envMapCubeUVHeight:se,lightMap:!!T.lightMap,aoMap:!!T.aoMap,emissiveMap:!!T.emissiveMap,bumpMap:!!T.bumpMap,normalMap:!!T.normalMap,objectSpaceNormalMap:T.normalMapType===tx,tangentSpaceNormalMap:T.normalMapType===ex,decodeVideoTexture:!!T.map&&T.map.isVideoTexture===!0&&T.map.encoding===xt,clearcoat:Fe,clearcoatMap:Fe&&!!T.clearcoatMap,clearcoatRoughnessMap:Fe&&!!T.clearcoatRoughnessMap,clearcoatNormalMap:Fe&&!!T.clearcoatNormalMap,iridescence:Ne,iridescenceMap:Ne&&!!T.iridescenceMap,iridescenceThicknessMap:Ne&&!!T.iridescenceThicknessMap,displacementMap:!!T.displacementMap,roughnessMap:!!T.roughnessMap,metalnessMap:!!T.metalnessMap,specularMap:!!T.specularMap,specularIntensityMap:!!T.specularIntensityMap,specularColorMap:!!T.specularColorMap,opaque:T.transparent===!1&&T.blending===zo,alphaMap:!!T.alphaMap,alphaTest:Xe,gradientMap:!!T.gradientMap,sheen:T.sheen>0,sheenColorMap:!!T.sheenColorMap,sheenRoughnessMap:!!T.sheenRoughnessMap,transmission:T.transmission>0,transmissionMap:!!T.transmissionMap,thicknessMap:!!T.thicknessMap,combine:T.combine,vertexTangents:!!T.normalMap&&!!q.attributes.tangent,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,vertexUvs:!!T.map||!!T.bumpMap||!!T.normalMap||!!T.specularMap||!!T.alphaMap||!!T.emissiveMap||!!T.roughnessMap||!!T.metalnessMap||!!T.clearcoatMap||!!T.clearcoatRoughnessMap||!!T.clearcoatNormalMap||!!T.iridescenceMap||!!T.iridescenceThicknessMap||!!T.displacementMap||!!T.transmissionMap||!!T.thicknessMap||!!T.specularIntensityMap||!!T.specularColorMap||!!T.sheenColorMap||!!T.sheenRoughnessMap,uvsVertexOnly:!(!!T.map||!!T.bumpMap||!!T.normalMap||!!T.specularMap||!!T.alphaMap||!!T.emissiveMap||!!T.roughnessMap||!!T.metalnessMap||!!T.clearcoatNormalMap||!!T.iridescenceMap||!!T.iridescenceThicknessMap||T.transmission>0||!!T.transmissionMap||!!T.thicknessMap||!!T.specularIntensityMap||!!T.specularColorMap||T.sheen>0||!!T.sheenColorMap||!!T.sheenRoughnessMap)&&!!T.displacementMap,fog:!!fe,useFog:T.fog===!0,fogExp2:fe&&fe.isFogExp2,flatShading:!!T.flatShading,sizeAttenuation:T.sizeAttenuation,logarithmicDepthBuffer:p,skinning:le.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:$,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:T.toneMapped?n.toneMapping:Di,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Xo,flipSided:T.side===ei,useDepthPacking:!!T.depthPacking,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:T.extensions&&T.extensions.derivatives,extensionFragDepth:T.extensions&&T.extensions.fragDepth,extensionDrawBuffers:T.extensions&&T.extensions.drawBuffers,extensionShaderTextureLOD:T.extensions&&T.extensions.shaderTextureLOD,rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),customProgramCacheKey:T.customProgramCacheKey()}}function m(T){const N=[];if(T.shaderID?N.push(T.shaderID):(N.push(T.customVertexShaderID),N.push(T.customFragmentShaderID)),T.defines!==void 0)for(const H in T.defines)N.push(H),N.push(T.defines[H]);return T.isRawShaderMaterial===!1&&(_(N,T),w(N,T),N.push(n.outputEncoding)),N.push(T.customProgramCacheKey),N.join()}function _(T,N){T.push(N.precision),T.push(N.outputEncoding),T.push(N.envMapMode),T.push(N.envMapCubeUVHeight),T.push(N.combine),T.push(N.vertexUvs),T.push(N.fogExp2),T.push(N.sizeAttenuation),T.push(N.morphTargetsCount),T.push(N.morphAttributeCount),T.push(N.numDirLights),T.push(N.numPointLights),T.push(N.numSpotLights),T.push(N.numHemiLights),T.push(N.numRectAreaLights),T.push(N.numDirLightShadows),T.push(N.numPointLightShadows),T.push(N.numSpotLightShadows),T.push(N.shadowMapType),T.push(N.toneMapping),T.push(N.numClippingPlanes),T.push(N.numClipIntersection),T.push(N.depthPacking)}function w(T,N){a.disableAll(),N.isWebGL2&&a.enable(0),N.supportsVertexTextures&&a.enable(1),N.instancing&&a.enable(2),N.instancingColor&&a.enable(3),N.map&&a.enable(4),N.matcap&&a.enable(5),N.envMap&&a.enable(6),N.lightMap&&a.enable(7),N.aoMap&&a.enable(8),N.emissiveMap&&a.enable(9),N.bumpMap&&a.enable(10),N.normalMap&&a.enable(11),N.objectSpaceNormalMap&&a.enable(12),N.tangentSpaceNormalMap&&a.enable(13),N.clearcoat&&a.enable(14),N.clearcoatMap&&a.enable(15),N.clearcoatRoughnessMap&&a.enable(16),N.clearcoatNormalMap&&a.enable(17),N.iridescence&&a.enable(18),N.iridescenceMap&&a.enable(19),N.iridescenceThicknessMap&&a.enable(20),N.displacementMap&&a.enable(21),N.specularMap&&a.enable(22),N.roughnessMap&&a.enable(23),N.metalnessMap&&a.enable(24),N.gradientMap&&a.enable(25),N.alphaMap&&a.enable(26),N.alphaTest&&a.enable(27),N.vertexColors&&a.enable(28),N.vertexAlphas&&a.enable(29),N.vertexUvs&&a.enable(30),N.vertexTangents&&a.enable(31),N.uvsVertexOnly&&a.enable(32),N.fog&&a.enable(33),T.push(a.mask),a.disableAll(),N.useFog&&a.enable(0),N.flatShading&&a.enable(1),N.logarithmicDepthBuffer&&a.enable(2),N.skinning&&a.enable(3),N.morphTargets&&a.enable(4),N.morphNormals&&a.enable(5),N.morphColors&&a.enable(6),N.premultipliedAlpha&&a.enable(7),N.shadowMapEnabled&&a.enable(8),N.physicallyCorrectLights&&a.enable(9),N.doubleSided&&a.enable(10),N.flipSided&&a.enable(11),N.useDepthPacking&&a.enable(12),N.dithering&&a.enable(13),N.specularIntensityMap&&a.enable(14),N.specularColorMap&&a.enable(15),N.transmission&&a.enable(16),N.transmissionMap&&a.enable(17),N.thicknessMap&&a.enable(18),N.sheen&&a.enable(19),N.sheenColorMap&&a.enable(20),N.sheenRoughnessMap&&a.enable(21),N.decodeVideoTexture&&a.enable(22),N.opaque&&a.enable(23),T.push(a.mask)}function E(T){const N=S[T.type];let H;if(N){const Y=fi[N];H=_x.clone(Y.uniforms)}else H=T.uniforms;return H}function b(T,N){let H;for(let Y=0,le=c.length;Y<le;Y++){const fe=c[Y];if(fe.cacheKey===N){H=fe,++H.usedTimes;break}}return H===void 0&&(H=new CM(n,N,T,o),c.push(H)),H}function L(T){if(--T.usedTimes===0){const N=c.indexOf(T);c[N]=c[c.length-1],c.pop(),T.destroy()}}function k(T){u.remove(T)}function z(){u.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:E,acquireProgram:b,releaseProgram:L,releaseShaderCache:k,programs:c,dispose:z}}function RM(){let n=new WeakMap;function e(o){let s=n.get(o);return s===void 0&&(s={},n.set(o,s)),s}function t(o){n.delete(o)}function i(o,s,a){n.get(o)[s]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function kM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Wp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function jp(){const n=[];let e=0;const t=[],i=[],r=[];function o(){e=0,t.length=0,i.length=0,r.length=0}function s(p,h,x,S,g,m){let _=n[e];return _===void 0?(_={id:p.id,object:p,geometry:h,material:x,groupOrder:S,renderOrder:p.renderOrder,z:g,group:m},n[e]=_):(_.id=p.id,_.object=p,_.geometry=h,_.material=x,_.groupOrder=S,_.renderOrder=p.renderOrder,_.z=g,_.group=m),e++,_}function a(p,h,x,S,g,m){const _=s(p,h,x,S,g,m);x.transmission>0?i.push(_):x.transparent===!0?r.push(_):t.push(_)}function u(p,h,x,S,g,m){const _=s(p,h,x,S,g,m);x.transmission>0?i.unshift(_):x.transparent===!0?r.unshift(_):t.unshift(_)}function c(p,h){t.length>1&&t.sort(p||kM),i.length>1&&i.sort(h||Wp),r.length>1&&r.sort(h||Wp)}function d(){for(let p=e,h=n.length;p<h;p++){const x=n[p];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:r,init:o,push:a,unshift:u,finish:d,sort:c}}function FM(){let n=new WeakMap;function e(i,r){let o;return n.has(i)===!1?(o=new jp,n.set(i,[o])):r>=n.get(i).length?(o=new jp,n.get(i).push(o)):o=n.get(i)[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function IM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new ft};break;case"SpotLight":t={position:new j,direction:new j,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new ft,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":t={color:new ft,position:new j,halfWidth:new j,halfHeight:new j};break}return n[e.id]=t,t}}}function NM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let zM=0;function OM(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function UM(n,e){const t=new IM,i=NM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let d=0;d<9;d++)r.probe.push(new j);const o=new j,s=new Ht,a=new Ht;function u(d,p){let h=0,x=0,S=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let g=0,m=0,_=0,w=0,E=0,b=0,L=0,k=0;d.sort(OM);const z=p!==!0?Math.PI:1;for(let N=0,H=d.length;N<H;N++){const Y=d[N],le=Y.color,fe=Y.intensity,q=Y.distance,oe=Y.shadow&&Y.shadow.map?Y.shadow.map.texture:null;if(Y.isAmbientLight)h+=le.r*fe*z,x+=le.g*fe*z,S+=le.b*fe*z;else if(Y.isLightProbe)for(let K=0;K<9;K++)r.probe[K].addScaledVector(Y.sh.coefficients[K],fe);else if(Y.isDirectionalLight){const K=t.get(Y);if(K.color.copy(Y.color).multiplyScalar(Y.intensity*z),Y.castShadow){const se=Y.shadow,V=i.get(Y);V.shadowBias=se.bias,V.shadowNormalBias=se.normalBias,V.shadowRadius=se.radius,V.shadowMapSize=se.mapSize,r.directionalShadow[g]=V,r.directionalShadowMap[g]=oe,r.directionalShadowMatrix[g]=Y.shadow.matrix,b++}r.directional[g]=K,g++}else if(Y.isSpotLight){const K=t.get(Y);if(K.position.setFromMatrixPosition(Y.matrixWorld),K.color.copy(le).multiplyScalar(fe*z),K.distance=q,K.coneCos=Math.cos(Y.angle),K.penumbraCos=Math.cos(Y.angle*(1-Y.penumbra)),K.decay=Y.decay,Y.castShadow){const se=Y.shadow,V=i.get(Y);V.shadowBias=se.bias,V.shadowNormalBias=se.normalBias,V.shadowRadius=se.radius,V.shadowMapSize=se.mapSize,r.spotShadow[_]=V,r.spotShadowMap[_]=oe,r.spotShadowMatrix[_]=Y.shadow.matrix,k++}r.spot[_]=K,_++}else if(Y.isRectAreaLight){const K=t.get(Y);K.color.copy(le).multiplyScalar(fe),K.halfWidth.set(Y.width*.5,0,0),K.halfHeight.set(0,Y.height*.5,0),r.rectArea[w]=K,w++}else if(Y.isPointLight){const K=t.get(Y);if(K.color.copy(Y.color).multiplyScalar(Y.intensity*z),K.distance=Y.distance,K.decay=Y.decay,Y.castShadow){const se=Y.shadow,V=i.get(Y);V.shadowBias=se.bias,V.shadowNormalBias=se.normalBias,V.shadowRadius=se.radius,V.shadowMapSize=se.mapSize,V.shadowCameraNear=se.camera.near,V.shadowCameraFar=se.camera.far,r.pointShadow[m]=V,r.pointShadowMap[m]=oe,r.pointShadowMatrix[m]=Y.shadow.matrix,L++}r.point[m]=K,m++}else if(Y.isHemisphereLight){const K=t.get(Y);K.skyColor.copy(Y.color).multiplyScalar(fe*z),K.groundColor.copy(Y.groundColor).multiplyScalar(fe*z),r.hemi[E]=K,E++}}w>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_FLOAT_1,r.rectAreaLTC2=_e.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_HALF_1,r.rectAreaLTC2=_e.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=x,r.ambient[2]=S;const T=r.hash;(T.directionalLength!==g||T.pointLength!==m||T.spotLength!==_||T.rectAreaLength!==w||T.hemiLength!==E||T.numDirectionalShadows!==b||T.numPointShadows!==L||T.numSpotShadows!==k)&&(r.directional.length=g,r.spot.length=_,r.rectArea.length=w,r.point.length=m,r.hemi.length=E,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=k,r.spotShadowMap.length=k,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=L,r.spotShadowMatrix.length=k,T.directionalLength=g,T.pointLength=m,T.spotLength=_,T.rectAreaLength=w,T.hemiLength=E,T.numDirectionalShadows=b,T.numPointShadows=L,T.numSpotShadows=k,r.version=zM++)}function c(d,p){let h=0,x=0,S=0,g=0,m=0;const _=p.matrixWorldInverse;for(let w=0,E=d.length;w<E;w++){const b=d[w];if(b.isDirectionalLight){const L=r.directional[h];L.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(_),h++}else if(b.isSpotLight){const L=r.spot[S];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(_),L.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(_),S++}else if(b.isRectAreaLight){const L=r.rectArea[g];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(_),a.identity(),s.copy(b.matrixWorld),s.premultiply(_),a.extractRotation(s),L.halfWidth.set(b.width*.5,0,0),L.halfHeight.set(0,b.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const L=r.point[x];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(_),x++}else if(b.isHemisphereLight){const L=r.hemi[m];L.direction.setFromMatrixPosition(b.matrixWorld),L.direction.transformDirection(_),m++}}}return{setup:u,setupView:c,state:r}}function Xp(n,e){const t=new UM(n,e),i=[],r=[];function o(){i.length=0,r.length=0}function s(p){i.push(p)}function a(p){r.push(p)}function u(p){t.setup(i,p)}function c(p){t.setupView(i,p)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:u,setupLightsView:c,pushLight:s,pushShadow:a}}function BM(n,e){let t=new WeakMap;function i(o,s=0){let a;return t.has(o)===!1?(a=new Xp(n,e),t.set(o,[a])):s>=t.get(o).length?(a=new Xp(n,e),t.get(o).push(a)):a=t.get(o)[s],a}function r(){t=new WeakMap}return{get:i,dispose:r}}class VM extends eu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class HM extends eu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new j,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const GM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jM(n,e,t){let i=new Av;const r=new je,o=new je,s=new It,a=new VM({depthPacking:Jy}),u=new HM,c={},d=t.maxTextureSize,p={0:ei,1:$s,2:Xo},h=new jr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:GM,fragmentShader:WM}),x=h.clone();x.defines.HORIZONTAL_PASS=1;const S=new zi;S.setAttribute("position",new ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new pi(S,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hv,this.render=function(b,L,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const z=n.getRenderTarget(),T=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),H=n.state;H.setBlending(fr),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);for(let Y=0,le=b.length;Y<le;Y++){const fe=b[Y],q=fe.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const oe=q.getFrameExtents();if(r.multiply(oe),o.copy(q.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(o.x=Math.floor(d/oe.x),r.x=o.x*oe.x,q.mapSize.x=o.x),r.y>d&&(o.y=Math.floor(d/oe.y),r.y=o.y*oe.y,q.mapSize.y=o.y)),q.map===null){const se=this.type!==ys?{minFilter:fn,magFilter:fn}:{};q.map=new Gr(r.x,r.y,se),q.map.texture.name=fe.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const K=q.getViewportCount();for(let se=0;se<K;se++){const V=q.getViewport(se);s.set(o.x*V.x,o.y*V.y,o.x*V.z,o.y*V.w),H.viewport(s),q.updateMatrices(fe,se),i=q.getFrustum(),E(L,k,q.camera,fe,this.type)}q.isPointLightShadow!==!0&&this.type===ys&&_(q,k),q.needsUpdate=!1}m.needsUpdate=!1,n.setRenderTarget(z,T,N)};function _(b,L){const k=e.update(g);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,x.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,x.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Gr(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(L,null,k,h,g,null),x.uniforms.shadow_pass.value=b.mapPass.texture,x.uniforms.resolution.value=b.mapSize,x.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(L,null,k,x,g,null)}function w(b,L,k,z,T,N){let H=null;const Y=k.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(Y!==void 0?H=Y:H=k.isPointLight===!0?u:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0){const le=H.uuid,fe=L.uuid;let q=c[le];q===void 0&&(q={},c[le]=q);let oe=q[fe];oe===void 0&&(oe=H.clone(),q[fe]=oe),H=oe}return H.visible=L.visible,H.wireframe=L.wireframe,N===ys?H.side=L.shadowSide!==null?L.shadowSide:L.side:H.side=L.shadowSide!==null?L.shadowSide:p[L.side],H.alphaMap=L.alphaMap,H.alphaTest=L.alphaTest,H.clipShadows=L.clipShadows,H.clippingPlanes=L.clippingPlanes,H.clipIntersection=L.clipIntersection,H.displacementMap=L.displacementMap,H.displacementScale=L.displacementScale,H.displacementBias=L.displacementBias,H.wireframeLinewidth=L.wireframeLinewidth,H.linewidth=L.linewidth,k.isPointLight===!0&&H.isMeshDistanceMaterial===!0&&(H.referencePosition.setFromMatrixPosition(k.matrixWorld),H.nearDistance=z,H.farDistance=T),H}function E(b,L,k,z,T){if(b.visible===!1)return;if(b.layers.test(L.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&T===ys)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,b.matrixWorld);const Y=e.update(b),le=b.material;if(Array.isArray(le)){const fe=Y.groups;for(let q=0,oe=fe.length;q<oe;q++){const K=fe[q],se=le[K.materialIndex];if(se&&se.visible){const V=w(b,se,z,k.near,k.far,T);n.renderBufferDirect(k,null,Y,V,b,K)}}}else if(le.visible){const fe=w(b,le,z,k.near,k.far,T);n.renderBufferDirect(k,null,Y,fe,b,null)}}const H=b.children;for(let Y=0,le=H.length;Y<le;Y++)E(H[Y],L,k,z,T)}}function XM(n,e,t){const i=t.isWebGL2;function r(){let O=!1;const ge=new It;let Q=null;const Se=new It(0,0,0,0);return{setMask:function(ne){Q!==ne&&!O&&(n.colorMask(ne,ne,ne,ne),Q=ne)},setLocked:function(ne){O=ne},setClear:function(ne,Ze,y,Oe,si){si===!0&&(ne*=Oe,Ze*=Oe,y*=Oe),ge.set(ne,Ze,y,Oe),Se.equals(ge)===!1&&(n.clearColor(ne,Ze,y,Oe),Se.copy(ge))},reset:function(){O=!1,Q=null,Se.set(-1,0,0,0)}}}function o(){let O=!1,ge=null,Q=null,Se=null;return{setTest:function(ne){ne?Xe(2929):Fe(2929)},setMask:function(ne){ge!==ne&&!O&&(n.depthMask(ne),ge=ne)},setFunc:function(ne){if(Q!==ne){if(ne)switch(ne){case My:n.depthFunc(512);break;case Ey:n.depthFunc(519);break;case by:n.depthFunc(513);break;case hf:n.depthFunc(515);break;case Ty:n.depthFunc(514);break;case Cy:n.depthFunc(518);break;case Ly:n.depthFunc(516);break;case Ay:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);Q=ne}},setLocked:function(ne){O=ne},setClear:function(ne){Se!==ne&&(n.clearDepth(ne),Se=ne)},reset:function(){O=!1,ge=null,Q=null,Se=null}}}function s(){let O=!1,ge=null,Q=null,Se=null,ne=null,Ze=null,y=null,Oe=null,si=null;return{setTest:function(ht){O||(ht?Xe(2960):Fe(2960))},setMask:function(ht){ge!==ht&&!O&&(n.stencilMask(ht),ge=ht)},setFunc:function(ht,Un,an){(Q!==ht||Se!==Un||ne!==an)&&(n.stencilFunc(ht,Un,an),Q=ht,Se=Un,ne=an)},setOp:function(ht,Un,an){(Ze!==ht||y!==Un||Oe!==an)&&(n.stencilOp(ht,Un,an),Ze=ht,y=Un,Oe=an)},setLocked:function(ht){O=ht},setClear:function(ht){si!==ht&&(n.clearStencil(ht),si=ht)},reset:function(){O=!1,ge=null,Q=null,Se=null,ne=null,Ze=null,y=null,Oe=null,si=null}}}const a=new r,u=new o,c=new s,d=new WeakMap,p=new WeakMap;let h={},x={},S=new WeakMap,g=[],m=null,_=!1,w=null,E=null,b=null,L=null,k=null,z=null,T=null,N=!1,H=null,Y=null,le=null,fe=null,q=null;const oe=n.getParameter(35661);let K=!1,se=0;const V=n.getParameter(7938);V.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(V)[1]),K=se>=1):V.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),K=se>=2);let B=null,G={};const $=n.getParameter(3088),J=n.getParameter(2978),he=new It().fromArray($),xe=new It().fromArray(J);function De(O,ge,Q){const Se=new Uint8Array(4),ne=n.createTexture();n.bindTexture(O,ne),n.texParameteri(O,10241,9728),n.texParameteri(O,10240,9728);for(let Ze=0;Ze<Q;Ze++)n.texImage2D(ge+Ze,0,6408,1,1,0,6408,5121,Se);return ne}const te={};te[3553]=De(3553,3553,1),te[34067]=De(34067,34069,6),a.setClear(0,0,0,1),u.setClear(1),c.setClear(0),Xe(2929),u.setFunc(hf),Et(!1),Dt(Ih),Xe(2884),it(fr);function Xe(O){h[O]!==!0&&(n.enable(O),h[O]=!0)}function Fe(O){h[O]!==!1&&(n.disable(O),h[O]=!1)}function Ne(O,ge){return x[O]!==ge?(n.bindFramebuffer(O,ge),x[O]=ge,i&&(O===36009&&(x[36160]=ge),O===36160&&(x[36009]=ge)),!0):!1}function Ee(O,ge){let Q=g,Se=!1;if(O)if(Q=S.get(ge),Q===void 0&&(Q=[],S.set(ge,Q)),O.isWebGLMultipleRenderTargets){const ne=O.texture;if(Q.length!==ne.length||Q[0]!==36064){for(let Ze=0,y=ne.length;Ze<y;Ze++)Q[Ze]=36064+Ze;Q.length=ne.length,Se=!0}}else Q[0]!==36064&&(Q[0]=36064,Se=!0);else Q[0]!==1029&&(Q[0]=1029,Se=!0);Se&&(t.isWebGL2?n.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function et(O){return m!==O?(n.useProgram(O),m=O,!0):!1}const Be={[vo]:32774,[dy]:32778,[hy]:32779};if(i)Be[Uh]=32775,Be[Bh]=32776;else{const O=e.get("EXT_blend_minmax");O!==null&&(Be[Uh]=O.MIN_EXT,Be[Bh]=O.MAX_EXT)}const Re={[py]:0,[my]:1,[gy]:768,[pv]:770,[Sy]:776,[xy]:774,[_y]:772,[vy]:769,[mv]:771,[wy]:775,[yy]:773};function it(O,ge,Q,Se,ne,Ze,y,Oe){if(O===fr){_===!0&&(Fe(3042),_=!1);return}if(_===!1&&(Xe(3042),_=!0),O!==fy){if(O!==w||Oe!==N){if((E!==vo||k!==vo)&&(n.blendEquation(32774),E=vo,k=vo),Oe)switch(O){case zo:n.blendFuncSeparate(1,771,1,771);break;case Nh:n.blendFunc(1,1);break;case zh:n.blendFuncSeparate(0,769,0,1);break;case Oh:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case zo:n.blendFuncSeparate(770,771,1,771);break;case Nh:n.blendFunc(770,1);break;case zh:n.blendFuncSeparate(0,769,0,1);break;case Oh:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}b=null,L=null,z=null,T=null,w=O,N=Oe}return}ne=ne||ge,Ze=Ze||Q,y=y||Se,(ge!==E||ne!==k)&&(n.blendEquationSeparate(Be[ge],Be[ne]),E=ge,k=ne),(Q!==b||Se!==L||Ze!==z||y!==T)&&(n.blendFuncSeparate(Re[Q],Re[Se],Re[Ze],Re[y]),b=Q,L=Se,z=Ze,T=y),w=O,N=null}function gt(O,ge){O.side===Xo?Fe(2884):Xe(2884);let Q=O.side===ei;ge&&(Q=!Q),Et(Q),O.blending===zo&&O.transparent===!1?it(fr):it(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),u.setFunc(O.depthFunc),u.setTest(O.depthTest),u.setMask(O.depthWrite),a.setMask(O.colorWrite);const Se=O.stencilWrite;c.setTest(Se),Se&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ge(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Xe(32926):Fe(32926)}function Et(O){H!==O&&(O?n.frontFace(2304):n.frontFace(2305),H=O)}function Dt(O){O!==ay?(Xe(2884),O!==Y&&(O===Ih?n.cullFace(1029):O===ly?n.cullFace(1028):n.cullFace(1032))):Fe(2884),Y=O}function st(O){O!==le&&(K&&n.lineWidth(O),le=O)}function Ge(O,ge,Q){O?(Xe(32823),(fe!==ge||q!==Q)&&(n.polygonOffset(ge,Q),fe=ge,q=Q)):Fe(32823)}function sn(O){O?Xe(3089):Fe(3089)}function Wt(O){O===void 0&&(O=33984+oe-1),B!==O&&(n.activeTexture(O),B=O)}function F(O,ge){B===null&&Wt();let Q=G[B];Q===void 0&&(Q={type:void 0,texture:void 0},G[B]=Q),(Q.type!==O||Q.texture!==ge)&&(n.bindTexture(O,ge||te[O]),Q.type=O,Q.texture=ge)}function A(){const O=G[B];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ee(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function re(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Te(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function D(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ae(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function me(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(O){he.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),he.copy(O))}function ve(O){xe.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),xe.copy(O))}function Ie(O,ge){let Q=p.get(ge);Q===void 0&&(Q=new WeakMap,p.set(ge,Q));let Se=Q.get(O);Se===void 0&&(Se=n.getUniformBlockIndex(ge,O.name),Q.set(O,Se))}function we(O,ge){const Se=p.get(ge).get(O);d.get(O)!==Se&&(n.uniformBlockBinding(ge,Se,O.__bindingPointIndex),d.set(O,Se))}function rt(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},B=null,G={},x={},S=new WeakMap,g=[],m=null,_=!1,w=null,E=null,b=null,L=null,k=null,z=null,T=null,N=!1,H=null,Y=null,le=null,fe=null,q=null,he.set(0,0,n.canvas.width,n.canvas.height),xe.set(0,0,n.canvas.width,n.canvas.height),a.reset(),u.reset(),c.reset()}return{buffers:{color:a,depth:u,stencil:c},enable:Xe,disable:Fe,bindFramebuffer:Ne,drawBuffers:Ee,useProgram:et,setBlending:it,setMaterial:gt,setFlipSided:Et,setCullFace:Dt,setLineWidth:st,setPolygonOffset:Ge,setScissorTest:sn,activeTexture:Wt,bindTexture:F,unbindTexture:A,compressedTexImage2D:ee,texImage2D:ae,texImage3D:me,updateUBOMapping:Ie,uniformBlockBinding:we,texStorage2D:Te,texStorage3D:D,texSubImage2D:de,texSubImage3D:pe,compressedTexSubImage2D:re,scissor:ye,viewport:ve,reset:rt}}function qM(n,e,t,i,r,o,s){const a=r.isWebGL2,u=r.maxTextures,c=r.maxCubemapSize,d=r.maxTextureSize,p=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,x=/OculusBrowser/g.test(navigator.userAgent),S=new WeakMap;let g;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(F,A){return _?new OffscreenCanvas(F,A):Fl("canvas")}function E(F,A,ee,de){let pe=1;if((F.width>de||F.height>de)&&(pe=de/Math.max(F.width,F.height)),pe<1||A===!0)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap){const re=A?yf:Math.floor,Te=re(pe*F.width),D=re(pe*F.height);g===void 0&&(g=w(Te,D));const ae=ee?w(Te,D):g;return ae.width=Te,ae.height=D,ae.getContext("2d").drawImage(F,0,0,Te,D),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+F.width+"x"+F.height+") to ("+Te+"x"+D+")."),ae}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+F.width+"x"+F.height+")."),F;return F}function b(F){return hp(F.width)&&hp(F.height)}function L(F){return a?!1:F.wrapS!==Kn||F.wrapT!==Kn||F.minFilter!==fn&&F.minFilter!==dn}function k(F,A){return F.generateMipmaps&&A&&F.minFilter!==fn&&F.minFilter!==dn}function z(F){n.generateMipmap(F)}function T(F,A,ee,de,pe=!1){if(a===!1)return A;if(F!==null){if(n[F]!==void 0)return n[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let re=A;return A===6403&&(ee===5126&&(re=33326),ee===5131&&(re=33325),ee===5121&&(re=33321)),A===33319&&(ee===5126&&(re=33328),ee===5131&&(re=33327),ee===5121&&(re=33323)),A===6408&&(ee===5126&&(re=34836),ee===5131&&(re=34842),ee===5121&&(re=de===xt&&pe===!1?35907:32856),ee===32819&&(re=32854),ee===32820&&(re=32855)),(re===33325||re===33326||re===33327||re===33328||re===34842||re===34836)&&e.get("EXT_color_buffer_float"),re}function N(F,A,ee){return k(F,ee)===!0||F.isFramebufferTexture&&F.minFilter!==fn&&F.minFilter!==dn?Math.log2(Math.max(A.width,A.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?A.mipmaps.length:1}function H(F){return F===fn||F===Vh||F===Hh?9728:9729}function Y(F){const A=F.target;A.removeEventListener("dispose",Y),fe(A),A.isVideoTexture&&S.delete(A)}function le(F){const A=F.target;A.removeEventListener("dispose",le),oe(A)}function fe(F){const A=i.get(F);if(A.__webglInit===void 0)return;const ee=F.source,de=m.get(ee);if(de){const pe=de[A.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&q(F),Object.keys(de).length===0&&m.delete(ee)}i.remove(F)}function q(F){const A=i.get(F);n.deleteTexture(A.__webglTexture);const ee=F.source,de=m.get(ee);delete de[A.__cacheKey],s.memory.textures--}function oe(F){const A=F.texture,ee=i.get(F),de=i.get(A);if(de.__webglTexture!==void 0&&(n.deleteTexture(de.__webglTexture),s.memory.textures--),F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++)n.deleteFramebuffer(ee.__webglFramebuffer[pe]),ee.__webglDepthbuffer&&n.deleteRenderbuffer(ee.__webglDepthbuffer[pe]);else{if(n.deleteFramebuffer(ee.__webglFramebuffer),ee.__webglDepthbuffer&&n.deleteRenderbuffer(ee.__webglDepthbuffer),ee.__webglMultisampledFramebuffer&&n.deleteFramebuffer(ee.__webglMultisampledFramebuffer),ee.__webglColorRenderbuffer)for(let pe=0;pe<ee.__webglColorRenderbuffer.length;pe++)ee.__webglColorRenderbuffer[pe]&&n.deleteRenderbuffer(ee.__webglColorRenderbuffer[pe]);ee.__webglDepthRenderbuffer&&n.deleteRenderbuffer(ee.__webglDepthRenderbuffer)}if(F.isWebGLMultipleRenderTargets)for(let pe=0,re=A.length;pe<re;pe++){const Te=i.get(A[pe]);Te.__webglTexture&&(n.deleteTexture(Te.__webglTexture),s.memory.textures--),i.remove(A[pe])}i.remove(A),i.remove(F)}let K=0;function se(){K=0}function V(){const F=K;return F>=u&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+u),K+=1,F}function B(F){const A=[];return A.push(F.wrapS),A.push(F.wrapT),A.push(F.magFilter),A.push(F.minFilter),A.push(F.anisotropy),A.push(F.internalFormat),A.push(F.format),A.push(F.type),A.push(F.generateMipmaps),A.push(F.premultiplyAlpha),A.push(F.flipY),A.push(F.unpackAlignment),A.push(F.encoding),A.join()}function G(F,A){const ee=i.get(F);if(F.isVideoTexture&&sn(F),F.isRenderTargetTexture===!1&&F.version>0&&ee.__version!==F.version){const de=F.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(ee,F,A);return}}t.activeTexture(33984+A),t.bindTexture(3553,ee.__webglTexture)}function $(F,A){const ee=i.get(F);if(F.version>0&&ee.__version!==F.version){Fe(ee,F,A);return}t.activeTexture(33984+A),t.bindTexture(35866,ee.__webglTexture)}function J(F,A){const ee=i.get(F);if(F.version>0&&ee.__version!==F.version){Fe(ee,F,A);return}t.activeTexture(33984+A),t.bindTexture(32879,ee.__webglTexture)}function he(F,A){const ee=i.get(F);if(F.version>0&&ee.__version!==F.version){Ne(ee,F,A);return}t.activeTexture(33984+A),t.bindTexture(34067,ee.__webglTexture)}const xe={[gf]:10497,[Kn]:33071,[vf]:33648},De={[fn]:9728,[Vh]:9984,[Hh]:9986,[dn]:9729,[zy]:9985,[Jl]:9987};function te(F,A,ee){if(ee?(n.texParameteri(F,10242,xe[A.wrapS]),n.texParameteri(F,10243,xe[A.wrapT]),(F===32879||F===35866)&&n.texParameteri(F,32882,xe[A.wrapR]),n.texParameteri(F,10240,De[A.magFilter]),n.texParameteri(F,10241,De[A.minFilter])):(n.texParameteri(F,10242,33071),n.texParameteri(F,10243,33071),(F===32879||F===35866)&&n.texParameteri(F,32882,33071),(A.wrapS!==Kn||A.wrapT!==Kn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(F,10240,H(A.magFilter)),n.texParameteri(F,10241,H(A.minFilter)),A.minFilter!==fn&&A.minFilter!==dn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const de=e.get("EXT_texture_filter_anisotropic");if(A.type===Pr&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===Zs&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(n.texParameterf(F,de.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function Xe(F,A){let ee=!1;F.__webglInit===void 0&&(F.__webglInit=!0,A.addEventListener("dispose",Y));const de=A.source;let pe=m.get(de);pe===void 0&&(pe={},m.set(de,pe));const re=B(A);if(re!==F.__cacheKey){pe[re]===void 0&&(pe[re]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,ee=!0),pe[re].usedTimes++;const Te=pe[F.__cacheKey];Te!==void 0&&(pe[F.__cacheKey].usedTimes--,Te.usedTimes===0&&q(A)),F.__cacheKey=re,F.__webglTexture=pe[re].texture}return ee}function Fe(F,A,ee){let de=3553;A.isDataArrayTexture&&(de=35866),A.isData3DTexture&&(de=32879);const pe=Xe(F,A),re=A.source;if(t.activeTexture(33984+ee),t.bindTexture(de,F.__webglTexture),re.version!==re.__currentVersion||pe===!0){n.pixelStorei(37440,A.flipY),n.pixelStorei(37441,A.premultiplyAlpha),n.pixelStorei(3317,A.unpackAlignment),n.pixelStorei(37443,0);const Te=L(A)&&b(A.image)===!1;let D=E(A.image,Te,!1,d);D=Wt(A,D);const ae=b(D)||a,me=o.convert(A.format,A.encoding);let ye=o.convert(A.type),ve=T(A.internalFormat,me,ye,A.encoding,A.isVideoTexture);te(de,A,ae);let Ie;const we=A.mipmaps,rt=a&&A.isVideoTexture!==!0,O=re.__currentVersion===void 0||pe===!0,ge=N(A,D,ae);if(A.isDepthTexture)ve=6402,a?A.type===Pr?ve=36012:A.type===Ar?ve=33190:A.type===Oo?ve=35056:ve=33189:A.type===Pr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Fr&&ve===6402&&A.type!==_v&&A.type!==Ar&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Ar,ye=o.convert(A.type)),A.format===$o&&ve===6402&&(ve=34041,A.type!==Oo&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Oo,ye=o.convert(A.type))),O&&(rt?t.texStorage2D(3553,1,ve,D.width,D.height):t.texImage2D(3553,0,ve,D.width,D.height,0,me,ye,null));else if(A.isDataTexture)if(we.length>0&&ae){rt&&O&&t.texStorage2D(3553,ge,ve,we[0].width,we[0].height);for(let Q=0,Se=we.length;Q<Se;Q++)Ie=we[Q],rt?t.texSubImage2D(3553,Q,0,0,Ie.width,Ie.height,me,ye,Ie.data):t.texImage2D(3553,Q,ve,Ie.width,Ie.height,0,me,ye,Ie.data);A.generateMipmaps=!1}else rt?(O&&t.texStorage2D(3553,ge,ve,D.width,D.height),t.texSubImage2D(3553,0,0,0,D.width,D.height,me,ye,D.data)):t.texImage2D(3553,0,ve,D.width,D.height,0,me,ye,D.data);else if(A.isCompressedTexture){rt&&O&&t.texStorage2D(3553,ge,ve,we[0].width,we[0].height);for(let Q=0,Se=we.length;Q<Se;Q++)Ie=we[Q],A.format!==hi?me!==null?rt?t.compressedTexSubImage2D(3553,Q,0,0,Ie.width,Ie.height,me,Ie.data):t.compressedTexImage2D(3553,Q,ve,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?t.texSubImage2D(3553,Q,0,0,Ie.width,Ie.height,me,ye,Ie.data):t.texImage2D(3553,Q,ve,Ie.width,Ie.height,0,me,ye,Ie.data)}else if(A.isDataArrayTexture)rt?(O&&t.texStorage3D(35866,ge,ve,D.width,D.height,D.depth),t.texSubImage3D(35866,0,0,0,0,D.width,D.height,D.depth,me,ye,D.data)):t.texImage3D(35866,0,ve,D.width,D.height,D.depth,0,me,ye,D.data);else if(A.isData3DTexture)rt?(O&&t.texStorage3D(32879,ge,ve,D.width,D.height,D.depth),t.texSubImage3D(32879,0,0,0,0,D.width,D.height,D.depth,me,ye,D.data)):t.texImage3D(32879,0,ve,D.width,D.height,D.depth,0,me,ye,D.data);else if(A.isFramebufferTexture){if(O)if(rt)t.texStorage2D(3553,ge,ve,D.width,D.height);else{let Q=D.width,Se=D.height;for(let ne=0;ne<ge;ne++)t.texImage2D(3553,ne,ve,Q,Se,0,me,ye,null),Q>>=1,Se>>=1}}else if(we.length>0&&ae){rt&&O&&t.texStorage2D(3553,ge,ve,we[0].width,we[0].height);for(let Q=0,Se=we.length;Q<Se;Q++)Ie=we[Q],rt?t.texSubImage2D(3553,Q,0,0,me,ye,Ie):t.texImage2D(3553,Q,ve,me,ye,Ie);A.generateMipmaps=!1}else rt?(O&&t.texStorage2D(3553,ge,ve,D.width,D.height),t.texSubImage2D(3553,0,0,0,me,ye,D)):t.texImage2D(3553,0,ve,me,ye,D);k(A,ae)&&z(de),re.__currentVersion=re.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function Ne(F,A,ee){if(A.image.length!==6)return;const de=Xe(F,A),pe=A.source;if(t.activeTexture(33984+ee),t.bindTexture(34067,F.__webglTexture),pe.version!==pe.__currentVersion||de===!0){n.pixelStorei(37440,A.flipY),n.pixelStorei(37441,A.premultiplyAlpha),n.pixelStorei(3317,A.unpackAlignment),n.pixelStorei(37443,0);const re=A.isCompressedTexture||A.image[0].isCompressedTexture,Te=A.image[0]&&A.image[0].isDataTexture,D=[];for(let Q=0;Q<6;Q++)!re&&!Te?D[Q]=E(A.image[Q],!1,!0,c):D[Q]=Te?A.image[Q].image:A.image[Q],D[Q]=Wt(A,D[Q]);const ae=D[0],me=b(ae)||a,ye=o.convert(A.format,A.encoding),ve=o.convert(A.type),Ie=T(A.internalFormat,ye,ve,A.encoding),we=a&&A.isVideoTexture!==!0,rt=pe.__currentVersion===void 0||de===!0;let O=N(A,ae,me);te(34067,A,me);let ge;if(re){we&&rt&&t.texStorage2D(34067,O,Ie,ae.width,ae.height);for(let Q=0;Q<6;Q++){ge=D[Q].mipmaps;for(let Se=0;Se<ge.length;Se++){const ne=ge[Se];A.format!==hi?ye!==null?we?t.compressedTexSubImage2D(34069+Q,Se,0,0,ne.width,ne.height,ye,ne.data):t.compressedTexImage2D(34069+Q,Se,Ie,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?t.texSubImage2D(34069+Q,Se,0,0,ne.width,ne.height,ye,ve,ne.data):t.texImage2D(34069+Q,Se,Ie,ne.width,ne.height,0,ye,ve,ne.data)}}}else{ge=A.mipmaps,we&&rt&&(ge.length>0&&O++,t.texStorage2D(34067,O,Ie,D[0].width,D[0].height));for(let Q=0;Q<6;Q++)if(Te){we?t.texSubImage2D(34069+Q,0,0,0,D[Q].width,D[Q].height,ye,ve,D[Q].data):t.texImage2D(34069+Q,0,Ie,D[Q].width,D[Q].height,0,ye,ve,D[Q].data);for(let Se=0;Se<ge.length;Se++){const Ze=ge[Se].image[Q].image;we?t.texSubImage2D(34069+Q,Se+1,0,0,Ze.width,Ze.height,ye,ve,Ze.data):t.texImage2D(34069+Q,Se+1,Ie,Ze.width,Ze.height,0,ye,ve,Ze.data)}}else{we?t.texSubImage2D(34069+Q,0,0,0,ye,ve,D[Q]):t.texImage2D(34069+Q,0,Ie,ye,ve,D[Q]);for(let Se=0;Se<ge.length;Se++){const ne=ge[Se];we?t.texSubImage2D(34069+Q,Se+1,0,0,ye,ve,ne.image[Q]):t.texImage2D(34069+Q,Se+1,Ie,ye,ve,ne.image[Q])}}}k(A,me)&&z(34067),pe.__currentVersion=pe.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function Ee(F,A,ee,de,pe){const re=o.convert(ee.format,ee.encoding),Te=o.convert(ee.type),D=T(ee.internalFormat,re,Te,ee.encoding);i.get(A).__hasExternalTextures||(pe===32879||pe===35866?t.texImage3D(pe,0,D,A.width,A.height,A.depth,0,re,Te,null):t.texImage2D(pe,0,D,A.width,A.height,0,re,Te,null)),t.bindFramebuffer(36160,F),Ge(A)?h.framebufferTexture2DMultisampleEXT(36160,de,pe,i.get(ee).__webglTexture,0,st(A)):n.framebufferTexture2D(36160,de,pe,i.get(ee).__webglTexture,0),t.bindFramebuffer(36160,null)}function et(F,A,ee){if(n.bindRenderbuffer(36161,F),A.depthBuffer&&!A.stencilBuffer){let de=33189;if(ee||Ge(A)){const pe=A.depthTexture;pe&&pe.isDepthTexture&&(pe.type===Pr?de=36012:pe.type===Ar&&(de=33190));const re=st(A);Ge(A)?h.renderbufferStorageMultisampleEXT(36161,re,de,A.width,A.height):n.renderbufferStorageMultisample(36161,re,de,A.width,A.height)}else n.renderbufferStorage(36161,de,A.width,A.height);n.framebufferRenderbuffer(36160,36096,36161,F)}else if(A.depthBuffer&&A.stencilBuffer){const de=st(A);ee&&Ge(A)===!1?n.renderbufferStorageMultisample(36161,de,35056,A.width,A.height):Ge(A)?h.renderbufferStorageMultisampleEXT(36161,de,35056,A.width,A.height):n.renderbufferStorage(36161,34041,A.width,A.height),n.framebufferRenderbuffer(36160,33306,36161,F)}else{const de=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let pe=0;pe<de.length;pe++){const re=de[pe],Te=o.convert(re.format,re.encoding),D=o.convert(re.type),ae=T(re.internalFormat,Te,D,re.encoding),me=st(A);ee&&Ge(A)===!1?n.renderbufferStorageMultisample(36161,me,ae,A.width,A.height):Ge(A)?h.renderbufferStorageMultisampleEXT(36161,me,ae,A.width,A.height):n.renderbufferStorage(36161,ae,A.width,A.height)}}n.bindRenderbuffer(36161,null)}function Be(F,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,F),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),G(A.depthTexture,0);const de=i.get(A.depthTexture).__webglTexture,pe=st(A);if(A.depthTexture.format===Fr)Ge(A)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,de,0,pe):n.framebufferTexture2D(36160,36096,3553,de,0);else if(A.depthTexture.format===$o)Ge(A)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,de,0,pe):n.framebufferTexture2D(36160,33306,3553,de,0);else throw new Error("Unknown depthTexture format")}function Re(F){const A=i.get(F),ee=F.isWebGLCubeRenderTarget===!0;if(F.depthTexture&&!A.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");Be(A.__webglFramebuffer,F)}else if(ee){A.__webglDepthbuffer=[];for(let de=0;de<6;de++)t.bindFramebuffer(36160,A.__webglFramebuffer[de]),A.__webglDepthbuffer[de]=n.createRenderbuffer(),et(A.__webglDepthbuffer[de],F,!1)}else t.bindFramebuffer(36160,A.__webglFramebuffer),A.__webglDepthbuffer=n.createRenderbuffer(),et(A.__webglDepthbuffer,F,!1);t.bindFramebuffer(36160,null)}function it(F,A,ee){const de=i.get(F);A!==void 0&&Ee(de.__webglFramebuffer,F,F.texture,36064,3553),ee!==void 0&&Re(F)}function gt(F){const A=F.texture,ee=i.get(F),de=i.get(A);F.addEventListener("dispose",le),F.isWebGLMultipleRenderTargets!==!0&&(de.__webglTexture===void 0&&(de.__webglTexture=n.createTexture()),de.__version=A.version,s.memory.textures++);const pe=F.isWebGLCubeRenderTarget===!0,re=F.isWebGLMultipleRenderTargets===!0,Te=b(F)||a;if(pe){ee.__webglFramebuffer=[];for(let D=0;D<6;D++)ee.__webglFramebuffer[D]=n.createFramebuffer()}else{if(ee.__webglFramebuffer=n.createFramebuffer(),re)if(r.drawBuffers){const D=F.texture;for(let ae=0,me=D.length;ae<me;ae++){const ye=i.get(D[ae]);ye.__webglTexture===void 0&&(ye.__webglTexture=n.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&F.samples>0&&Ge(F)===!1){const D=re?A:[A];ee.__webglMultisampledFramebuffer=n.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,ee.__webglMultisampledFramebuffer);for(let ae=0;ae<D.length;ae++){const me=D[ae];ee.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(36161,ee.__webglColorRenderbuffer[ae]);const ye=o.convert(me.format,me.encoding),ve=o.convert(me.type),Ie=T(me.internalFormat,ye,ve,me.encoding),we=st(F);n.renderbufferStorageMultisample(36161,we,Ie,F.width,F.height),n.framebufferRenderbuffer(36160,36064+ae,36161,ee.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(36161,null),F.depthBuffer&&(ee.__webglDepthRenderbuffer=n.createRenderbuffer(),et(ee.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(36160,null)}}if(pe){t.bindTexture(34067,de.__webglTexture),te(34067,A,Te);for(let D=0;D<6;D++)Ee(ee.__webglFramebuffer[D],F,A,36064,34069+D);k(A,Te)&&z(34067),t.unbindTexture()}else if(re){const D=F.texture;for(let ae=0,me=D.length;ae<me;ae++){const ye=D[ae],ve=i.get(ye);t.bindTexture(3553,ve.__webglTexture),te(3553,ye,Te),Ee(ee.__webglFramebuffer,F,ye,36064+ae,3553),k(ye,Te)&&z(3553)}t.unbindTexture()}else{let D=3553;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(a?D=F.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(D,de.__webglTexture),te(D,A,Te),Ee(ee.__webglFramebuffer,F,A,36064,D),k(A,Te)&&z(D),t.unbindTexture()}F.depthBuffer&&Re(F)}function Et(F){const A=b(F)||a,ee=F.isWebGLMultipleRenderTargets===!0?F.texture:[F.texture];for(let de=0,pe=ee.length;de<pe;de++){const re=ee[de];if(k(re,A)){const Te=F.isWebGLCubeRenderTarget?34067:3553,D=i.get(re).__webglTexture;t.bindTexture(Te,D),z(Te),t.unbindTexture()}}}function Dt(F){if(a&&F.samples>0&&Ge(F)===!1){const A=F.isWebGLMultipleRenderTargets?F.texture:[F.texture],ee=F.width,de=F.height;let pe=16384;const re=[],Te=F.stencilBuffer?33306:36096,D=i.get(F),ae=F.isWebGLMultipleRenderTargets===!0;if(ae)for(let me=0;me<A.length;me++)t.bindFramebuffer(36160,D.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+me,36161,null),t.bindFramebuffer(36160,D.__webglFramebuffer),n.framebufferTexture2D(36009,36064+me,3553,null,0);t.bindFramebuffer(36008,D.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,D.__webglFramebuffer);for(let me=0;me<A.length;me++){re.push(36064+me),F.depthBuffer&&re.push(Te);const ye=D.__ignoreDepthValues!==void 0?D.__ignoreDepthValues:!1;if(ye===!1&&(F.depthBuffer&&(pe|=256),F.stencilBuffer&&(pe|=1024)),ae&&n.framebufferRenderbuffer(36008,36064,36161,D.__webglColorRenderbuffer[me]),ye===!0&&(n.invalidateFramebuffer(36008,[Te]),n.invalidateFramebuffer(36009,[Te])),ae){const ve=i.get(A[me]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,ve,0)}n.blitFramebuffer(0,0,ee,de,0,0,ee,de,pe,9728),x&&n.invalidateFramebuffer(36008,re)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),ae)for(let me=0;me<A.length;me++){t.bindFramebuffer(36160,D.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+me,36161,D.__webglColorRenderbuffer[me]);const ye=i.get(A[me]).__webglTexture;t.bindFramebuffer(36160,D.__webglFramebuffer),n.framebufferTexture2D(36009,36064+me,3553,ye,0)}t.bindFramebuffer(36009,D.__webglMultisampledFramebuffer)}}function st(F){return Math.min(p,F.samples)}function Ge(F){const A=i.get(F);return a&&F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function sn(F){const A=s.render.frame;S.get(F)!==A&&(S.set(F,A),F.update())}function Wt(F,A){const ee=F.encoding,de=F.format,pe=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||F.format===_f||ee!==Hr&&(ee===xt?a===!1?e.has("EXT_sRGB")===!0&&de===hi?(F.format=_f,F.minFilter=dn,F.generateMipmaps=!1):A=Sv.sRGBToLinear(A):(de!==hi||pe!==Vr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",ee)),A}this.allocateTextureUnit=V,this.resetTextureUnits=se,this.setTexture2D=G,this.setTexture2DArray=$,this.setTexture3D=J,this.setTextureCube=he,this.rebindTextures=it,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Ge}function YM(n,e,t){const i=t.isWebGL2;function r(o,s=null){let a;if(o===Vr)return 5121;if(o===Vy)return 32819;if(o===Hy)return 32820;if(o===Oy)return 5120;if(o===Uy)return 5122;if(o===_v)return 5123;if(o===By)return 5124;if(o===Ar)return 5125;if(o===Pr)return 5126;if(o===Zs)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===Gy)return 6406;if(o===hi)return 6408;if(o===Wy)return 6409;if(o===jy)return 6410;if(o===Fr)return 6402;if(o===$o)return 34041;if(o===Xy)return 6403;if(o===yv)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(o===_f)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===qy)return 36244;if(o===Yy)return 33319;if(o===$y)return 33320;if(o===Zy)return 36249;if(o===ku||o===Fu||o===Iu||o===Nu)if(s===xt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===ku)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Fu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Iu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Nu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===ku)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Fu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Iu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Nu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Gh||o===Wh||o===jh||o===Xh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===Gh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Wh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===jh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Xh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Ky)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===qh||o===Yh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===qh)return s===xt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===Yh)return s===xt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===$h||o===Zh||o===Kh||o===Qh||o===Jh||o===ep||o===tp||o===np||o===ip||o===rp||o===op||o===sp||o===ap||o===lp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===$h)return s===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Zh)return s===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Kh)return s===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Qh)return s===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Jh)return s===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===ep)return s===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===tp)return s===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===np)return s===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===ip)return s===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===rp)return s===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===op)return s===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===sp)return s===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===ap)return s===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===lp)return s===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===up)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===up)return s===xt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return o===Oo?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[o]!==void 0?n[o]:null}return{convert:r}}class $M extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class qa extends ri{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ZM={type:"move"};class fc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,o=null,s=null;const a=this._targetRay,u=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i);if(c.joints[g.jointName]===void 0){const w=new qa;w.matrixAutoUpdate=!1,w.visible=!1,c.joints[g.jointName]=w,c.add(w)}const _=c.joints[g.jointName];m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}const d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],h=d.position.distanceTo(p.position),x=.02,S=.005;c.inputState.pinching&&h>x+S?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=x-S&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ZM)))}return a!==null&&(a.visible=r!==null),u!==null&&(u.visible=o!==null),c!==null&&(c.visible=s!==null),this}}class KM extends On{constructor(e,t,i,r,o,s,a,u,c,d){if(d=d!==void 0?d:Fr,d!==Fr&&d!==$o)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Fr&&(i=Ar),i===void 0&&d===$o&&(i=Oo),super(null,r,o,s,a,u,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:fn,this.minFilter=u!==void 0?u:fn,this.flipY=!1,this.generateMipmaps=!1}}class QM extends Yr{constructor(e,t){super();const i=this;let r=null,o=1,s=null,a="local-floor",u=null,c=null,d=null,p=null,h=null,x=null;const S=t.getContextAttributes();let g=null,m=null;const _=[],w=[],E=new Rn;E.layers.enable(1),E.viewport=new It;const b=new Rn;b.layers.enable(2),b.viewport=new It;const L=[E,b],k=new $M;k.layers.enable(1),k.layers.enable(2);let z=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let G=_[B];return G===void 0&&(G=new fc,_[B]=G),G.getTargetRaySpace()},this.getControllerGrip=function(B){let G=_[B];return G===void 0&&(G=new fc,_[B]=G),G.getGripSpace()},this.getHand=function(B){let G=_[B];return G===void 0&&(G=new fc,_[B]=G),G.getHandSpace()};function N(B){const G=w.indexOf(B.inputSource);if(G===-1)return;const $=_[G];$!==void 0&&$.dispatchEvent({type:B.type,data:B.inputSource})}function H(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",Y);for(let B=0;B<_.length;B++){const G=w[B];G!==null&&(w[B]=null,_[B].disconnect(G))}z=null,T=null,e.setRenderTarget(g),h=null,p=null,d=null,r=null,m=null,V.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){o=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(B){u=B},this.getBaseLayer=function(){return p!==null?p:h},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",H),r.addEventListener("inputsourceschange",Y),S.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const G={antialias:r.renderState.layers===void 0?S.antialias:!0,alpha:S.alpha,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:o};h=new XRWebGLLayer(r,t,G),r.updateRenderState({baseLayer:h}),m=new Gr(h.framebufferWidth,h.framebufferHeight,{format:hi,type:Vr,encoding:e.outputEncoding})}else{let G=null,$=null,J=null;S.depth&&(J=S.stencil?35056:33190,G=S.stencil?$o:Fr,$=S.stencil?Oo:Ar);const he={colorFormat:32856,depthFormat:J,scaleFactor:o};d=new XRWebGLBinding(r,t),p=d.createProjectionLayer(he),r.updateRenderState({layers:[p]}),m=new Gr(p.textureWidth,p.textureHeight,{format:hi,type:Vr,depthTexture:new KM(p.textureWidth,p.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:S.stencil,encoding:e.outputEncoding,samples:S.antialias?4:0});const xe=e.properties.get(m);xe.__ignoreDepthValues=p.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),u=null,s=await r.requestReferenceSpace(a),V.setContext(r),V.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function Y(B){for(let G=0;G<B.removed.length;G++){const $=B.removed[G],J=w.indexOf($);J>=0&&(w[J]=null,_[J].dispatchEvent({type:"disconnected",data:$}))}for(let G=0;G<B.added.length;G++){const $=B.added[G];let J=w.indexOf($);if(J===-1){for(let xe=0;xe<_.length;xe++)if(xe>=w.length){w.push($),J=xe;break}else if(w[xe]===null){w[xe]=$,J=xe;break}if(J===-1)break}const he=_[J];he&&he.dispatchEvent({type:"connected",data:$})}}const le=new j,fe=new j;function q(B,G,$){le.setFromMatrixPosition(G.matrixWorld),fe.setFromMatrixPosition($.matrixWorld);const J=le.distanceTo(fe),he=G.projectionMatrix.elements,xe=$.projectionMatrix.elements,De=he[14]/(he[10]-1),te=he[14]/(he[10]+1),Xe=(he[9]+1)/he[5],Fe=(he[9]-1)/he[5],Ne=(he[8]-1)/he[0],Ee=(xe[8]+1)/xe[0],et=De*Ne,Be=De*Ee,Re=J/(-Ne+Ee),it=Re*-Ne;G.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(it),B.translateZ(Re),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const gt=De+Re,Et=te+Re,Dt=et-it,st=Be+(J-it),Ge=Xe*te/Et*gt,sn=Fe*te/Et*gt;B.projectionMatrix.makePerspective(Dt,st,Ge,sn,gt,Et)}function oe(B,G){G===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(G.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;k.near=b.near=E.near=B.near,k.far=b.far=E.far=B.far,(z!==k.near||T!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),z=k.near,T=k.far);const G=B.parent,$=k.cameras;oe(k,G);for(let he=0;he<$.length;he++)oe($[he],G);k.matrixWorld.decompose(k.position,k.quaternion,k.scale),B.position.copy(k.position),B.quaternion.copy(k.quaternion),B.scale.copy(k.scale),B.matrix.copy(k.matrix),B.matrixWorld.copy(k.matrixWorld);const J=B.children;for(let he=0,xe=J.length;he<xe;he++)J[he].updateMatrixWorld(!0);$.length===2?q(k,E,b):k.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return k},this.getFoveation=function(){if(p!==null)return p.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(B){p!==null&&(p.fixedFoveation=B),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=B)};let K=null;function se(B,G){if(c=G.getViewerPose(u||s),x=G,c!==null){const $=c.views;h!==null&&(e.setRenderTargetFramebuffer(m,h.framebuffer),e.setRenderTarget(m));let J=!1;$.length!==k.cameras.length&&(k.cameras.length=0,J=!0);for(let he=0;he<$.length;he++){const xe=$[he];let De=null;if(h!==null)De=h.getViewport(xe);else{const Xe=d.getViewSubImage(p,xe);De=Xe.viewport,he===0&&(e.setRenderTargetTextures(m,Xe.colorTexture,p.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(m))}let te=L[he];te===void 0&&(te=new Rn,te.layers.enable(he),te.viewport=new It,L[he]=te),te.matrix.fromArray(xe.transform.matrix),te.projectionMatrix.fromArray(xe.projectionMatrix),te.viewport.set(De.x,De.y,De.width,De.height),he===0&&k.matrix.copy(te.matrix),J===!0&&k.cameras.push(te)}}for(let $=0;$<_.length;$++){const J=w[$],he=_[$];J!==null&&he!==void 0&&he.update(J,G,u||s)}K&&K(B,G),x=null}const V=new Pv;V.setAnimationLoop(se),this.setAnimationLoop=function(B){K=B},this.dispose=function(){}}}function JM(n,e){function t(g,m){g.fogColor.value.copy(m.color),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,_,w,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),c(g,m)):m.isMeshStandardMaterial?(r(g,m),p(g,m),m.isMeshPhysicalMaterial&&h(g,m,E)):m.isMeshMatcapMaterial?(r(g,m),x(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),S(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&s(g,m)):m.isPointsMaterial?a(g,m,_,w):m.isSpriteMaterial?u(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===ei&&(g.bumpScale.value*=-1)),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===ei&&g.normalScale.value.negate()),m.specularMap&&(g.specularMap.value=m.specularMap),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(g.envMap.value=_,g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;const b=n.physicallyCorrectLights!==!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*b}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity);let w;m.map?w=m.map:m.specularMap?w=m.specularMap:m.displacementMap?w=m.displacementMap:m.normalMap?w=m.normalMap:m.bumpMap?w=m.bumpMap:m.roughnessMap?w=m.roughnessMap:m.metalnessMap?w=m.metalnessMap:m.alphaMap?w=m.alphaMap:m.emissiveMap?w=m.emissiveMap:m.clearcoatMap?w=m.clearcoatMap:m.clearcoatNormalMap?w=m.clearcoatNormalMap:m.clearcoatRoughnessMap?w=m.clearcoatRoughnessMap:m.iridescenceMap?w=m.iridescenceMap:m.iridescenceThicknessMap?w=m.iridescenceThicknessMap:m.specularIntensityMap?w=m.specularIntensityMap:m.specularColorMap?w=m.specularColorMap:m.transmissionMap?w=m.transmissionMap:m.thicknessMap?w=m.thicknessMap:m.sheenColorMap?w=m.sheenColorMap:m.sheenRoughnessMap&&(w=m.sheenRoughnessMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),g.uvTransform.value.copy(w.matrix));let E;m.aoMap?E=m.aoMap:m.lightMap&&(E=m.lightMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),g.uv2Transform.value.copy(E.matrix))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity}function s(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function a(g,m,_,w){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=w*.5,m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let E;m.map?E=m.map:m.alphaMap&&(E=m.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),g.uvTransform.value.copy(E.matrix))}function u(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),g.uvTransform.value.copy(_.matrix))}function c(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function p(g,m){g.roughness.value=m.roughness,g.metalness.value=m.metalness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function h(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),g.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===ei&&g.clearcoatNormalScale.value.negate())),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap)}function x(g,m){m.matcap&&(g.matcap.value=m.matcap)}function S(g,m){g.referencePosition.value.copy(m.referencePosition),g.nearDistance.value=m.nearDistance,g.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function eE(n,e,t,i){let r={},o={},s=[];const a=t.isWebGL2?n.getParameter(35375):0;function u(w,E){const b=E.program;i.uniformBlockBinding(w,b)}function c(w,E){let b=r[w.id];b===void 0&&(S(w),b=d(w),r[w.id]=b,w.addEventListener("dispose",m));const L=E.program;i.updateUBOMapping(w,L);const k=e.render.frame;o[w.id]!==k&&(h(w),o[w.id]=k)}function d(w){const E=p();w.__bindingPointIndex=E;const b=n.createBuffer(),L=w.__size,k=w.usage;return n.bindBuffer(35345,b),n.bufferData(35345,L,k),n.bindBuffer(35345,null),n.bindBufferBase(35345,E,b),b}function p(){for(let w=0;w<a;w++)if(s.indexOf(w)===-1)return s.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const E=r[w.id],b=w.uniforms,L=w.__cache;n.bindBuffer(35345,E);for(let k=0,z=b.length;k<z;k++){const T=b[k];if(x(T,k,L)===!0){const N=T.value,H=T.__offset;typeof N=="number"?(T.__data[0]=N,n.bufferSubData(35345,H,T.__data)):(T.value.isMatrix3?(T.__data[0]=T.value.elements[0],T.__data[1]=T.value.elements[1],T.__data[2]=T.value.elements[2],T.__data[3]=T.value.elements[0],T.__data[4]=T.value.elements[3],T.__data[5]=T.value.elements[4],T.__data[6]=T.value.elements[5],T.__data[7]=T.value.elements[0],T.__data[8]=T.value.elements[6],T.__data[9]=T.value.elements[7],T.__data[10]=T.value.elements[8],T.__data[11]=T.value.elements[0]):N.toArray(T.__data),n.bufferSubData(35345,H,T.__data))}}n.bindBuffer(35345,null)}function x(w,E,b){const L=w.value;if(b[E]===void 0)return typeof L=="number"?b[E]=L:b[E]=L.clone(),!0;if(typeof L=="number"){if(b[E]!==L)return b[E]=L,!0}else{const k=b[E];if(k.equals(L)===!1)return k.copy(L),!0}return!1}function S(w){const E=w.uniforms;let b=0;const L=16;let k=0;for(let z=0,T=E.length;z<T;z++){const N=E[z],H=g(N);if(N.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,z>0){k=b%L;const Y=L-k;k!==0&&Y-H.boundary<0&&(b+=L-k,N.__offset=b)}b+=H.storage}return k=b%L,k>0&&(b+=L-k),w.__size=b,w.__cache={},this}function g(w){const E=w.value,b={boundary:0,storage:0};return typeof E=="number"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(w){const E=w.target;E.removeEventListener("dispose",m);const b=s.indexOf(E.__bindingPointIndex);s.splice(b,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete o[E.id]}function _(){for(const w in r)n.deleteBuffer(r[w]);s=[],r={},o={}}return{bind:u,update:c,dispose:_}}function tE(){const n=Fl("canvas");return n.style.display="block",n}function Nv(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:tE(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,o=n.antialias!==void 0?n.antialias:!1,s=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,u=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let d;t!==null?d=t.getContextAttributes().alpha:d=n.alpha!==void 0?n.alpha:!1;let p=null,h=null;const x=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Hr,this.physicallyCorrectLights=!1,this.toneMapping=Di,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const g=this;let m=!1,_=0,w=0,E=null,b=-1,L=null;const k=new It,z=new It;let T=null,N=e.width,H=e.height,Y=1,le=null,fe=null;const q=new It(0,0,N,H),oe=new It(0,0,N,H);let K=!1;const se=new Av;let V=!1,B=!1,G=null;const $=new Ht,J=new je,he=new j,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function De(){return E===null?Y:1}let te=t;function Xe(R,X){for(let Z=0;Z<R.length;Z++){const P=R[Z],ie=e.getContext(P,X);if(ie!==null)return ie}return null}try{const R={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:a,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${gd}`),e.addEventListener("webglcontextlost",Ie,!1),e.addEventListener("webglcontextrestored",we,!1),e.addEventListener("webglcontextcreationerror",rt,!1),te===null){const X=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&X.shift(),te=Xe(X,R),te===null)throw Xe(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}te.getShaderPrecisionFormat===void 0&&(te.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Fe,Ne,Ee,et,Be,Re,it,gt,Et,Dt,st,Ge,sn,Wt,F,A,ee,de,pe,re,Te,D,ae,me;function ye(){Fe=new f1(te),Ne=new r1(te,Fe,n),Fe.init(Ne),D=new YM(te,Fe,Ne),Ee=new XM(te,Fe,Ne),et=new p1,Be=new RM,Re=new qM(te,Fe,Ee,Be,Ne,D,et),it=new s1(g),gt=new c1(g),Et=new bx(te,Ne),ae=new n1(te,Fe,Et,Ne),Dt=new d1(te,Et,et,ae),st=new _1(te,Dt,Et,et),pe=new v1(te,Ne,Re),A=new o1(Be),Ge=new DM(g,it,gt,Fe,Ne,ae,A),sn=new JM(g,Be),Wt=new FM,F=new BM(Fe,Ne),de=new t1(g,it,Ee,st,d,s),ee=new jM(g,st,Ne),me=new eE(te,et,Ne,Ee),re=new i1(te,Fe,et,Ne),Te=new h1(te,Fe,et,Ne),et.programs=Ge.programs,g.capabilities=Ne,g.extensions=Fe,g.properties=Be,g.renderLists=Wt,g.shadowMap=ee,g.state=Ee,g.info=et}ye();const ve=new QM(g,te);this.xr=ve,this.getContext=function(){return te},this.getContextAttributes=function(){return te.getContextAttributes()},this.forceContextLoss=function(){const R=Fe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Fe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(N,H,!1))},this.getSize=function(R){return R.set(N,H)},this.setSize=function(R,X,Z){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=R,H=X,e.width=Math.floor(R*Y),e.height=Math.floor(X*Y),Z!==!1&&(e.style.width=R+"px",e.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(N*Y,H*Y).floor()},this.setDrawingBufferSize=function(R,X,Z){N=R,H=X,Y=Z,e.width=Math.floor(R*Z),e.height=Math.floor(X*Z),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(k)},this.getViewport=function(R){return R.copy(q)},this.setViewport=function(R,X,Z,P){R.isVector4?q.set(R.x,R.y,R.z,R.w):q.set(R,X,Z,P),Ee.viewport(k.copy(q).multiplyScalar(Y).floor())},this.getScissor=function(R){return R.copy(oe)},this.setScissor=function(R,X,Z,P){R.isVector4?oe.set(R.x,R.y,R.z,R.w):oe.set(R,X,Z,P),Ee.scissor(z.copy(oe).multiplyScalar(Y).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(R){Ee.setScissorTest(K=R)},this.setOpaqueSort=function(R){le=R},this.setTransparentSort=function(R){fe=R},this.getClearColor=function(R){return R.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(R=!0,X=!0,Z=!0){let P=0;R&&(P|=16384),X&&(P|=256),Z&&(P|=1024),te.clear(P)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ie,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),Wt.dispose(),F.dispose(),Be.dispose(),it.dispose(),gt.dispose(),st.dispose(),ae.dispose(),me.dispose(),Ge.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",Ze),ve.removeEventListener("sessionend",y),G&&(G.dispose(),G=null),Oe.stop()};function Ie(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const R=et.autoReset,X=ee.enabled,Z=ee.autoUpdate,P=ee.needsUpdate,ie=ee.type;ye(),et.autoReset=R,ee.enabled=X,ee.autoUpdate=Z,ee.needsUpdate=P,ee.type=ie}function rt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function O(R){const X=R.target;X.removeEventListener("dispose",O),ge(X)}function ge(R){Q(R),Be.remove(R)}function Q(R){const X=Be.get(R).programs;X!==void 0&&(X.forEach(function(Z){Ge.releaseProgram(Z)}),R.isShaderMaterial&&Ge.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,Z,P,ie,ze){X===null&&(X=xe);const Ue=ie.isMesh&&ie.matrixWorld.determinant()<0,We=ns(R,X,Z,P,ie);Ee.setMaterial(P,Ue);let Ve=Z.index;const tt=Z.attributes.position;if(Ve===null){if(tt===void 0||tt.count===0)return}else if(Ve.count===0)return;let $e=1;P.wireframe===!0&&(Ve=Dt.getWireframeAttribute(Z),$e=2),ae.setup(ie,P,We,Z,Ve);let Ke,at=re;Ve!==null&&(Ke=Et.get(Ve),at=Te,at.setIndex(Ke));const ai=Ve!==null?Ve.count:tt.count,Ui=Z.drawRange.start*$e,Bn=Z.drawRange.count*$e,Ce=ze!==null?ze.start*$e:0,Qe=ze!==null?ze.count*$e:1/0,Vn=Math.max(Ui,Ce),lt=Math.min(ai,Ui+Bn,Ce+Qe)-1,ln=Math.max(0,lt-Vn+1);if(ln!==0){if(ie.isMesh)P.wireframe===!0?(Ee.setLineWidth(P.wireframeLinewidth*De()),at.setMode(1)):at.setMode(4);else if(ie.isLine){let Hn=P.linewidth;Hn===void 0&&(Hn=1),Ee.setLineWidth(Hn*De()),ie.isLineSegments?at.setMode(1):ie.isLineLoop?at.setMode(2):at.setMode(3)}else ie.isPoints?at.setMode(0):ie.isSprite&&at.setMode(4);if(ie.isInstancedMesh)at.renderInstances(Vn,ln,ie.count);else if(Z.isInstancedBufferGeometry){const Hn=Math.min(Z.instanceCount,Z._maxInstanceCount);at.renderInstances(Vn,ln,Hn)}else at.render(Vn,ln)}},this.compile=function(R,X){h=F.get(R),h.init(),S.push(h),R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(h.pushLight(Z),Z.castShadow&&h.pushShadow(Z))}),h.setupLights(g.physicallyCorrectLights),R.traverse(function(Z){const P=Z.material;if(P)if(Array.isArray(P))for(let ie=0;ie<P.length;ie++){const ze=P[ie];ts(ze,R,Z)}else ts(P,R,Z)}),S.pop(),h=null};let Se=null;function ne(R){Se&&Se(R)}function Ze(){Oe.stop()}function y(){Oe.start()}const Oe=new Pv;Oe.setAnimationLoop(ne),typeof self<"u"&&Oe.setContext(self),this.setAnimationLoop=function(R){Se=R,ve.setAnimationLoop(R),R===null?Oe.stop():Oe.start()},ve.addEventListener("sessionstart",Ze),ve.addEventListener("sessionend",y),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;R.autoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(X),X=ve.getCamera()),R.isScene===!0&&R.onBeforeRender(g,R,X,E),h=F.get(R,S.length),h.init(),S.push(h),$.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),se.setFromProjectionMatrix($),B=this.localClippingEnabled,V=A.init(this.clippingPlanes,B,X),p=Wt.get(R,x.length),p.init(),x.push(p),si(R,X,0,g.sortObjects),p.finish(),g.sortObjects===!0&&p.sort(le,fe),V===!0&&A.beginShadows();const Z=h.state.shadowsArray;if(ee.render(Z,R,X),V===!0&&A.endShadows(),this.info.autoReset===!0&&this.info.reset(),de.render(p,R),h.setupLights(g.physicallyCorrectLights),X.isArrayCamera){const P=X.cameras;for(let ie=0,ze=P.length;ie<ze;ie++){const Ue=P[ie];ht(p,R,Ue,Ue.viewport)}}else ht(p,R,X);E!==null&&(Re.updateMultisampleRenderTarget(E),Re.updateRenderTargetMipmap(E)),R.isScene===!0&&R.onAfterRender(g,R,X),ae.resetDefaultState(),b=-1,L=null,S.pop(),S.length>0?h=S[S.length-1]:h=null,x.pop(),x.length>0?p=x[x.length-1]:p=null};function si(R,X,Z,P){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)Z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)h.pushLight(R),R.castShadow&&h.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||se.intersectsSprite(R)){P&&he.setFromMatrixPosition(R.matrixWorld).applyMatrix4($);const Ue=st.update(R),We=R.material;We.visible&&p.push(R,Ue,We,Z,he.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(R.isSkinnedMesh&&R.skeleton.frame!==et.render.frame&&(R.skeleton.update(),R.skeleton.frame=et.render.frame),!R.frustumCulled||se.intersectsObject(R))){P&&he.setFromMatrixPosition(R.matrixWorld).applyMatrix4($);const Ue=st.update(R),We=R.material;if(Array.isArray(We)){const Ve=Ue.groups;for(let tt=0,$e=Ve.length;tt<$e;tt++){const Ke=Ve[tt],at=We[Ke.materialIndex];at&&at.visible&&p.push(R,Ue,at,Z,he.z,Ke)}}else We.visible&&p.push(R,Ue,We,Z,he.z,null)}}const ze=R.children;for(let Ue=0,We=ze.length;Ue<We;Ue++)si(ze[Ue],X,Z,P)}function ht(R,X,Z,P){const ie=R.opaque,ze=R.transmissive,Ue=R.transparent;h.setupLightsView(Z),ze.length>0&&Un(ie,X,Z),P&&Ee.viewport(k.copy(P)),ie.length>0&&an(ie,X,Z),ze.length>0&&an(ze,X,Z),Ue.length>0&&an(Ue,X,Z),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Un(R,X,Z){const P=Ne.isWebGL2;G===null&&(G=new Gr(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")?Zs:Vr,minFilter:Jl,samples:P&&o===!0?4:0})),g.getDrawingBufferSize(J),P?G.setSize(J.x,J.y):G.setSize(yf(J.x),yf(J.y));const ie=g.getRenderTarget();g.setRenderTarget(G),g.clear();const ze=g.toneMapping;g.toneMapping=Di,an(R,X,Z),g.toneMapping=ze,Re.updateMultisampleRenderTarget(G),Re.updateRenderTargetMipmap(G),g.setRenderTarget(ie)}function an(R,X,Z){const P=X.isScene===!0?X.overrideMaterial:null;for(let ie=0,ze=R.length;ie<ze;ie++){const Ue=R[ie],We=Ue.object,Ve=Ue.geometry,tt=P===null?Ue.material:P,$e=Ue.group;We.layers.test(Z.layers)&&ru(We,X,Z,Ve,tt,$e)}}function ru(R,X,Z,P,ie,ze){R.onBeforeRender(g,X,Z,P,ie,ze),R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ie.onBeforeRender(g,X,Z,P,R,ze),ie.transparent===!0&&ie.side===Xo?(ie.side=ei,ie.needsUpdate=!0,g.renderBufferDirect(Z,X,P,ie,R,ze),ie.side=$s,ie.needsUpdate=!0,g.renderBufferDirect(Z,X,P,ie,R,ze),ie.side=Xo):g.renderBufferDirect(Z,X,P,ie,R,ze),R.onAfterRender(g,X,Z,P,ie,ze)}function ts(R,X,Z){X.isScene!==!0&&(X=xe);const P=Be.get(R),ie=h.state.lights,ze=h.state.shadowsArray,Ue=ie.state.version,We=Ge.getParameters(R,ie.state,ze,X,Z),Ve=Ge.getProgramCacheKey(We);let tt=P.programs;P.environment=R.isMeshStandardMaterial?X.environment:null,P.fog=X.fog,P.envMap=(R.isMeshStandardMaterial?gt:it).get(R.envMap||P.environment),tt===void 0&&(R.addEventListener("dispose",O),tt=new Map,P.programs=tt);let $e=tt.get(Ve);if($e!==void 0){if(P.currentProgram===$e&&P.lightsStateVersion===Ue)return aa(R,We),$e}else We.uniforms=Ge.getUniforms(R),R.onBuild(Z,We,g),R.onBeforeCompile(We,g),$e=Ge.acquireProgram(We,Ve),tt.set(Ve,$e),P.uniforms=We.uniforms;const Ke=P.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ke.clippingPlanes=A.uniform),aa(R,We),P.needsLights=ou(R),P.lightsStateVersion=Ue,P.needsLights&&(Ke.ambientLightColor.value=ie.state.ambient,Ke.lightProbe.value=ie.state.probe,Ke.directionalLights.value=ie.state.directional,Ke.directionalLightShadows.value=ie.state.directionalShadow,Ke.spotLights.value=ie.state.spot,Ke.spotLightShadows.value=ie.state.spotShadow,Ke.rectAreaLights.value=ie.state.rectArea,Ke.ltc_1.value=ie.state.rectAreaLTC1,Ke.ltc_2.value=ie.state.rectAreaLTC2,Ke.pointLights.value=ie.state.point,Ke.pointLightShadows.value=ie.state.pointShadow,Ke.hemisphereLights.value=ie.state.hemi,Ke.directionalShadowMap.value=ie.state.directionalShadowMap,Ke.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Ke.spotShadowMap.value=ie.state.spotShadowMap,Ke.spotShadowMatrix.value=ie.state.spotShadowMatrix,Ke.pointShadowMap.value=ie.state.pointShadowMap,Ke.pointShadowMatrix.value=ie.state.pointShadowMatrix);const at=$e.getUniforms(),ai=ul.seqWithValue(at.seq,Ke);return P.currentProgram=$e,P.uniformsList=ai,$e}function aa(R,X){const Z=Be.get(R);Z.outputEncoding=X.outputEncoding,Z.instancing=X.instancing,Z.skinning=X.skinning,Z.morphTargets=X.morphTargets,Z.morphNormals=X.morphNormals,Z.morphColors=X.morphColors,Z.morphTargetsCount=X.morphTargetsCount,Z.numClippingPlanes=X.numClippingPlanes,Z.numIntersection=X.numClipIntersection,Z.vertexAlphas=X.vertexAlphas,Z.vertexTangents=X.vertexTangents,Z.toneMapping=X.toneMapping}function ns(R,X,Z,P,ie){X.isScene!==!0&&(X=xe),Re.resetTextureUnits();const ze=X.fog,Ue=P.isMeshStandardMaterial?X.environment:null,We=E===null?g.outputEncoding:E.isXRRenderTarget===!0?E.texture.encoding:Hr,Ve=(P.isMeshStandardMaterial?gt:it).get(P.envMap||Ue),tt=P.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,$e=!!P.normalMap&&!!Z.attributes.tangent,Ke=!!Z.morphAttributes.position,at=!!Z.morphAttributes.normal,ai=!!Z.morphAttributes.color,Ui=P.toneMapped?g.toneMapping:Di,Bn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ce=Bn!==void 0?Bn.length:0,Qe=Be.get(P),Vn=h.state.lights;if(V===!0&&(B===!0||R!==L)){const jt=R===L&&P.id===b;A.setState(P,R,jt)}let lt=!1;P.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Vn.state.version||Qe.outputEncoding!==We||ie.isInstancedMesh&&Qe.instancing===!1||!ie.isInstancedMesh&&Qe.instancing===!0||ie.isSkinnedMesh&&Qe.skinning===!1||!ie.isSkinnedMesh&&Qe.skinning===!0||Qe.envMap!==Ve||P.fog===!0&&Qe.fog!==ze||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==A.numPlanes||Qe.numIntersection!==A.numIntersection)||Qe.vertexAlphas!==tt||Qe.vertexTangents!==$e||Qe.morphTargets!==Ke||Qe.morphNormals!==at||Qe.morphColors!==ai||Qe.toneMapping!==Ui||Ne.isWebGL2===!0&&Qe.morphTargetsCount!==Ce)&&(lt=!0):(lt=!0,Qe.__version=P.version);let ln=Qe.currentProgram;lt===!0&&(ln=ts(P,X,ie));let Hn=!1,Bi=!1,Zr=!1;const Rt=ln.getUniforms(),Vi=Qe.uniforms;if(Ee.useProgram(ln.program)&&(Hn=!0,Bi=!0,Zr=!0),P.id!==b&&(b=P.id,Bi=!0),Hn||L!==R){if(Rt.setValue(te,"projectionMatrix",R.projectionMatrix),Ne.logarithmicDepthBuffer&&Rt.setValue(te,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),L!==R&&(L=R,Bi=!0,Zr=!0),P.isShaderMaterial||P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshStandardMaterial||P.envMap){const jt=Rt.map.cameraPosition;jt!==void 0&&jt.setValue(te,he.setFromMatrixPosition(R.matrixWorld))}(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial)&&Rt.setValue(te,"isOrthographic",R.isOrthographicCamera===!0),(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial||P.isShadowMaterial||ie.isSkinnedMesh)&&Rt.setValue(te,"viewMatrix",R.matrixWorldInverse)}if(ie.isSkinnedMesh){Rt.setOptional(te,ie,"bindMatrix"),Rt.setOptional(te,ie,"bindMatrixInverse");const jt=ie.skeleton;jt&&(Ne.floatVertexTextures?(jt.boneTexture===null&&jt.computeBoneTexture(),Rt.setValue(te,"boneTexture",jt.boneTexture,Re),Rt.setValue(te,"boneTextureSize",jt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const vr=Z.morphAttributes;if((vr.position!==void 0||vr.normal!==void 0||vr.color!==void 0&&Ne.isWebGL2===!0)&&pe.update(ie,Z,P,ln),(Bi||Qe.receiveShadow!==ie.receiveShadow)&&(Qe.receiveShadow=ie.receiveShadow,Rt.setValue(te,"receiveShadow",ie.receiveShadow)),Bi&&(Rt.setValue(te,"toneMappingExposure",g.toneMappingExposure),Qe.needsLights&&$r(Vi,Zr),ze&&P.fog===!0&&sn.refreshFogUniforms(Vi,ze),sn.refreshMaterialUniforms(Vi,P,Y,H,G),ul.upload(te,Qe.uniformsList,Vi,Re)),P.isShaderMaterial&&P.uniformsNeedUpdate===!0&&(ul.upload(te,Qe.uniformsList,Vi,Re),P.uniformsNeedUpdate=!1),P.isSpriteMaterial&&Rt.setValue(te,"center",ie.center),Rt.setValue(te,"modelViewMatrix",ie.modelViewMatrix),Rt.setValue(te,"normalMatrix",ie.normalMatrix),Rt.setValue(te,"modelMatrix",ie.matrixWorld),P.isShaderMaterial||P.isRawShaderMaterial){const jt=P.uniformsGroups;for(let Kr=0,la=jt.length;Kr<la;Kr++)if(Ne.isWebGL2){const is=jt[Kr];me.update(is,ln),me.bind(is,ln)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ln}function $r(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function ou(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(R,X,Z){Be.get(R.texture).__webglTexture=X,Be.get(R.depthTexture).__webglTexture=Z;const P=Be.get(R);P.__hasExternalTextures=!0,P.__hasExternalTextures&&(P.__autoAllocateDepthBuffer=Z===void 0,P.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),P.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,X){const Z=Be.get(R);Z.__webglFramebuffer=X,Z.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(R,X=0,Z=0){E=R,_=X,w=Z;let P=!0;if(R){const Ve=Be.get(R);Ve.__useDefaultFramebuffer!==void 0?(Ee.bindFramebuffer(36160,null),P=!1):Ve.__webglFramebuffer===void 0?Re.setupRenderTarget(R):Ve.__hasExternalTextures&&Re.rebindTextures(R,Be.get(R.texture).__webglTexture,Be.get(R.depthTexture).__webglTexture)}let ie=null,ze=!1,Ue=!1;if(R){const Ve=R.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture)&&(Ue=!0);const tt=Be.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(ie=tt[X],ze=!0):Ne.isWebGL2&&R.samples>0&&Re.useMultisampledRTT(R)===!1?ie=Be.get(R).__webglMultisampledFramebuffer:ie=tt,k.copy(R.viewport),z.copy(R.scissor),T=R.scissorTest}else k.copy(q).multiplyScalar(Y).floor(),z.copy(oe).multiplyScalar(Y).floor(),T=K;if(Ee.bindFramebuffer(36160,ie)&&Ne.drawBuffers&&P&&Ee.drawBuffers(R,ie),Ee.viewport(k),Ee.scissor(z),Ee.setScissorTest(T),ze){const Ve=Be.get(R.texture);te.framebufferTexture2D(36160,36064,34069+X,Ve.__webglTexture,Z)}else if(Ue){const Ve=Be.get(R.texture),tt=X||0;te.framebufferTextureLayer(36160,36064,Ve.__webglTexture,Z||0,tt)}b=-1},this.readRenderTargetPixels=function(R,X,Z,P,ie,ze,Ue){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=Be.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ue!==void 0&&(We=We[Ue]),We){Ee.bindFramebuffer(36160,We);try{const Ve=R.texture,tt=Ve.format,$e=Ve.type;if(tt!==hi&&D.convert(tt)!==te.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ke=$e===Zs&&(Fe.has("EXT_color_buffer_half_float")||Ne.isWebGL2&&Fe.has("EXT_color_buffer_float"));if($e!==Vr&&D.convert($e)!==te.getParameter(35738)&&!($e===Pr&&(Ne.isWebGL2||Fe.has("OES_texture_float")||Fe.has("WEBGL_color_buffer_float")))&&!Ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-P&&Z>=0&&Z<=R.height-ie&&te.readPixels(X,Z,P,ie,D.convert(tt),D.convert($e),ze)}finally{const Ve=E!==null?Be.get(E).__webglFramebuffer:null;Ee.bindFramebuffer(36160,Ve)}}},this.copyFramebufferToTexture=function(R,X,Z=0){const P=Math.pow(2,-Z),ie=Math.floor(X.image.width*P),ze=Math.floor(X.image.height*P);Re.setTexture2D(X,0),te.copyTexSubImage2D(3553,Z,0,0,R.x,R.y,ie,ze),Ee.unbindTexture()},this.copyTextureToTexture=function(R,X,Z,P=0){const ie=X.image.width,ze=X.image.height,Ue=D.convert(Z.format),We=D.convert(Z.type);Re.setTexture2D(Z,0),te.pixelStorei(37440,Z.flipY),te.pixelStorei(37441,Z.premultiplyAlpha),te.pixelStorei(3317,Z.unpackAlignment),X.isDataTexture?te.texSubImage2D(3553,P,R.x,R.y,ie,ze,Ue,We,X.image.data):X.isCompressedTexture?te.compressedTexSubImage2D(3553,P,R.x,R.y,X.mipmaps[0].width,X.mipmaps[0].height,Ue,X.mipmaps[0].data):te.texSubImage2D(3553,P,R.x,R.y,Ue,We,X.image),P===0&&Z.generateMipmaps&&te.generateMipmap(3553),Ee.unbindTexture()},this.copyTextureToTexture3D=function(R,X,Z,P,ie=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ze=R.max.x-R.min.x+1,Ue=R.max.y-R.min.y+1,We=R.max.z-R.min.z+1,Ve=D.convert(P.format),tt=D.convert(P.type);let $e;if(P.isData3DTexture)Re.setTexture3D(P,0),$e=32879;else if(P.isDataArrayTexture)Re.setTexture2DArray(P,0),$e=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}te.pixelStorei(37440,P.flipY),te.pixelStorei(37441,P.premultiplyAlpha),te.pixelStorei(3317,P.unpackAlignment);const Ke=te.getParameter(3314),at=te.getParameter(32878),ai=te.getParameter(3316),Ui=te.getParameter(3315),Bn=te.getParameter(32877),Ce=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;te.pixelStorei(3314,Ce.width),te.pixelStorei(32878,Ce.height),te.pixelStorei(3316,R.min.x),te.pixelStorei(3315,R.min.y),te.pixelStorei(32877,R.min.z),Z.isDataTexture||Z.isData3DTexture?te.texSubImage3D($e,ie,X.x,X.y,X.z,ze,Ue,We,Ve,tt,Ce.data):Z.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),te.compressedTexSubImage3D($e,ie,X.x,X.y,X.z,ze,Ue,We,Ve,Ce.data)):te.texSubImage3D($e,ie,X.x,X.y,X.z,ze,Ue,We,Ve,tt,Ce),te.pixelStorei(3314,Ke),te.pixelStorei(32878,at),te.pixelStorei(3316,ai),te.pixelStorei(3315,Ui),te.pixelStorei(32877,Bn),ie===0&&P.generateMipmaps&&te.generateMipmap($e),Ee.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?Re.setTextureCube(R,0):R.isData3DTexture?Re.setTexture3D(R,0):R.isDataArrayTexture?Re.setTexture2DArray(R,0):Re.setTexture2D(R,0),Ee.unbindTexture()},this.resetState=function(){_=0,w=0,E=null,Ee.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class nE extends Nv{}nE.prototype.isWebGL1Renderer=!0;class iE extends ri{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class rE extends On{constructor(e,t,i,r,o,s,a,u,c){super(e,t,i,r,o,s,a,u,c),this.isVideoTexture=!0,this.minFilter=s!==void 0?s:dn,this.magFilter=o!==void 0?o:dn,this.generateMipmaps=!1;const d=this;function p(){d.needsUpdate=!0,e.requestVideoFrameCallback(p)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(p)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class wd extends zi{constructor(e=.5,t=1,i=8,r=1,o=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:o,thetaLength:s},i=Math.max(3,i),r=Math.max(1,r);const a=[],u=[],c=[],d=[];let p=e;const h=(t-e)/r,x=new j,S=new je;for(let g=0;g<=r;g++){for(let m=0;m<=i;m++){const _=o+m/i*s;x.x=p*Math.cos(_),x.y=p*Math.sin(_),u.push(x.x,x.y,x.z),c.push(0,0,1),S.x=(x.x/t+1)/2,S.y=(x.y/t+1)/2,d.push(S.x,S.y)}p+=h}for(let g=0;g<r;g++){const m=g*(i+1);for(let _=0;_<i;_++){const w=_+m,E=w,b=w+i+1,L=w+i+2,k=w+1;a.push(E,b,k),a.push(b,L,k)}}this.setIndex(a),this.setAttribute("position",new ni(u,3)),this.setAttribute("normal",new ni(c,3)),this.setAttribute("uv",new ni(d,2))}static fromJSON(e){return new wd(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class qp{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(hn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gd);const Yp={type:"change"},dc={type:"start"},$p={type:"end"};class oE extends Yr{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Jr.ROTATE,MIDDLE:Jr.DOLLY,RIGHT:Jr.PAN},this.touches={ONE:eo.ROTATE,TWO:eo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",Wt),this._domElementKeyEvents=D},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Yp),i.update(),o=r.NONE},this.update=function(){const D=new j,ae=new Wr().setFromUnitVectors(e.up,new j(0,1,0)),me=ae.clone().invert(),ye=new j,ve=new Wr,Ie=2*Math.PI;return function(){const rt=i.object.position;D.copy(rt).sub(i.target),D.applyQuaternion(ae),a.setFromVector3(D),i.autoRotate&&o===r.NONE&&N(z()),i.enableDamping?(a.theta+=u.theta*i.dampingFactor,a.phi+=u.phi*i.dampingFactor):(a.theta+=u.theta,a.phi+=u.phi);let O=i.minAzimuthAngle,ge=i.maxAzimuthAngle;return isFinite(O)&&isFinite(ge)&&(O<-Math.PI?O+=Ie:O>Math.PI&&(O-=Ie),ge<-Math.PI?ge+=Ie:ge>Math.PI&&(ge-=Ie),O<=ge?a.theta=Math.max(O,Math.min(ge,a.theta)):a.theta=a.theta>(O+ge)/2?Math.max(O,a.theta):Math.min(ge,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(d,i.dampingFactor):i.target.add(d),D.setFromSpherical(a),D.applyQuaternion(me),rt.copy(i.target).add(D),i.object.lookAt(i.target),i.enableDamping===!0?(u.theta*=1-i.dampingFactor,u.phi*=1-i.dampingFactor,d.multiplyScalar(1-i.dampingFactor)):(u.set(0,0,0),d.set(0,0,0)),c=1,p||ye.distanceToSquared(i.object.position)>s||8*(1-ve.dot(i.object.quaternion))>s?(i.dispatchEvent(Yp),ye.copy(i.object.position),ve.copy(i.object.quaternion),p=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ee),i.domElement.removeEventListener("pointerdown",it),i.domElement.removeEventListener("pointercancel",Dt),i.domElement.removeEventListener("wheel",sn),i.domElement.removeEventListener("pointermove",gt),i.domElement.removeEventListener("pointerup",Et),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",Wt)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const s=1e-6,a=new qp,u=new qp;let c=1;const d=new j;let p=!1;const h=new je,x=new je,S=new je,g=new je,m=new je,_=new je,w=new je,E=new je,b=new je,L=[],k={};function z(){return 2*Math.PI/60/60*i.autoRotateSpeed}function T(){return Math.pow(.95,i.zoomSpeed)}function N(D){u.theta-=D}function H(D){u.phi-=D}const Y=function(){const D=new j;return function(me,ye){D.setFromMatrixColumn(ye,0),D.multiplyScalar(-me),d.add(D)}}(),le=function(){const D=new j;return function(me,ye){i.screenSpacePanning===!0?D.setFromMatrixColumn(ye,1):(D.setFromMatrixColumn(ye,0),D.crossVectors(i.object.up,D)),D.multiplyScalar(me),d.add(D)}}(),fe=function(){const D=new j;return function(me,ye){const ve=i.domElement;if(i.object.isPerspectiveCamera){const Ie=i.object.position;D.copy(Ie).sub(i.target);let we=D.length();we*=Math.tan(i.object.fov/2*Math.PI/180),Y(2*me*we/ve.clientHeight,i.object.matrix),le(2*ye*we/ve.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Y(me*(i.object.right-i.object.left)/i.object.zoom/ve.clientWidth,i.object.matrix),le(ye*(i.object.top-i.object.bottom)/i.object.zoom/ve.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function q(D){i.object.isPerspectiveCamera?c/=D:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*D)),i.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function oe(D){i.object.isPerspectiveCamera?c*=D:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/D)),i.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(D){h.set(D.clientX,D.clientY)}function se(D){w.set(D.clientX,D.clientY)}function V(D){g.set(D.clientX,D.clientY)}function B(D){x.set(D.clientX,D.clientY),S.subVectors(x,h).multiplyScalar(i.rotateSpeed);const ae=i.domElement;N(2*Math.PI*S.x/ae.clientHeight),H(2*Math.PI*S.y/ae.clientHeight),h.copy(x),i.update()}function G(D){E.set(D.clientX,D.clientY),b.subVectors(E,w),b.y>0?q(T()):b.y<0&&oe(T()),w.copy(E),i.update()}function $(D){m.set(D.clientX,D.clientY),_.subVectors(m,g).multiplyScalar(i.panSpeed),fe(_.x,_.y),g.copy(m),i.update()}function J(D){D.deltaY<0?oe(T()):D.deltaY>0&&q(T()),i.update()}function he(D){let ae=!1;switch(D.code){case i.keys.UP:fe(0,i.keyPanSpeed),ae=!0;break;case i.keys.BOTTOM:fe(0,-i.keyPanSpeed),ae=!0;break;case i.keys.LEFT:fe(i.keyPanSpeed,0),ae=!0;break;case i.keys.RIGHT:fe(-i.keyPanSpeed,0),ae=!0;break}ae&&(D.preventDefault(),i.update())}function xe(){if(L.length===1)h.set(L[0].pageX,L[0].pageY);else{const D=.5*(L[0].pageX+L[1].pageX),ae=.5*(L[0].pageY+L[1].pageY);h.set(D,ae)}}function De(){if(L.length===1)g.set(L[0].pageX,L[0].pageY);else{const D=.5*(L[0].pageX+L[1].pageX),ae=.5*(L[0].pageY+L[1].pageY);g.set(D,ae)}}function te(){const D=L[0].pageX-L[1].pageX,ae=L[0].pageY-L[1].pageY,me=Math.sqrt(D*D+ae*ae);w.set(0,me)}function Xe(){i.enableZoom&&te(),i.enablePan&&De()}function Fe(){i.enableZoom&&te(),i.enableRotate&&xe()}function Ne(D){if(L.length==1)x.set(D.pageX,D.pageY);else{const me=Te(D),ye=.5*(D.pageX+me.x),ve=.5*(D.pageY+me.y);x.set(ye,ve)}S.subVectors(x,h).multiplyScalar(i.rotateSpeed);const ae=i.domElement;N(2*Math.PI*S.x/ae.clientHeight),H(2*Math.PI*S.y/ae.clientHeight),h.copy(x)}function Ee(D){if(L.length===1)m.set(D.pageX,D.pageY);else{const ae=Te(D),me=.5*(D.pageX+ae.x),ye=.5*(D.pageY+ae.y);m.set(me,ye)}_.subVectors(m,g).multiplyScalar(i.panSpeed),fe(_.x,_.y),g.copy(m)}function et(D){const ae=Te(D),me=D.pageX-ae.x,ye=D.pageY-ae.y,ve=Math.sqrt(me*me+ye*ye);E.set(0,ve),b.set(0,Math.pow(E.y/w.y,i.zoomSpeed)),q(b.y),w.copy(E)}function Be(D){i.enableZoom&&et(D),i.enablePan&&Ee(D)}function Re(D){i.enableZoom&&et(D),i.enableRotate&&Ne(D)}function it(D){i.enabled!==!1&&(L.length===0&&(i.domElement.setPointerCapture(D.pointerId),i.domElement.addEventListener("pointermove",gt),i.domElement.addEventListener("pointerup",Et)),de(D),D.pointerType==="touch"?F(D):st(D))}function gt(D){i.enabled!==!1&&(D.pointerType==="touch"?A(D):Ge(D))}function Et(D){pe(D),L.length===0&&(i.domElement.releasePointerCapture(D.pointerId),i.domElement.removeEventListener("pointermove",gt),i.domElement.removeEventListener("pointerup",Et)),i.dispatchEvent($p),o=r.NONE}function Dt(D){pe(D)}function st(D){let ae;switch(D.button){case 0:ae=i.mouseButtons.LEFT;break;case 1:ae=i.mouseButtons.MIDDLE;break;case 2:ae=i.mouseButtons.RIGHT;break;default:ae=-1}switch(ae){case Jr.DOLLY:if(i.enableZoom===!1)return;se(D),o=r.DOLLY;break;case Jr.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(i.enablePan===!1)return;V(D),o=r.PAN}else{if(i.enableRotate===!1)return;K(D),o=r.ROTATE}break;case Jr.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(i.enableRotate===!1)return;K(D),o=r.ROTATE}else{if(i.enablePan===!1)return;V(D),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(dc)}function Ge(D){switch(o){case r.ROTATE:if(i.enableRotate===!1)return;B(D);break;case r.DOLLY:if(i.enableZoom===!1)return;G(D);break;case r.PAN:if(i.enablePan===!1)return;$(D);break}}function sn(D){i.enabled===!1||i.enableZoom===!1||o!==r.NONE||(D.preventDefault(),i.dispatchEvent(dc),J(D),i.dispatchEvent($p))}function Wt(D){i.enabled===!1||i.enablePan===!1||he(D)}function F(D){switch(re(D),L.length){case 1:switch(i.touches.ONE){case eo.ROTATE:if(i.enableRotate===!1)return;xe(),o=r.TOUCH_ROTATE;break;case eo.PAN:if(i.enablePan===!1)return;De(),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(i.touches.TWO){case eo.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Xe(),o=r.TOUCH_DOLLY_PAN;break;case eo.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Fe(),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(dc)}function A(D){switch(re(D),o){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ne(D),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Ee(D),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Be(D),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Re(D),i.update();break;default:o=r.NONE}}function ee(D){i.enabled!==!1&&D.preventDefault()}function de(D){L.push(D)}function pe(D){delete k[D.pointerId];for(let ae=0;ae<L.length;ae++)if(L[ae].pointerId==D.pointerId){L.splice(ae,1);return}}function re(D){let ae=k[D.pointerId];ae===void 0&&(ae=new je,k[D.pointerId]=ae),ae.set(D.pageX,D.pageY)}function Te(D){const ae=D.pointerId===L[0].pointerId?L[1]:L[0];return k[ae.pointerId]}i.domElement.addEventListener("contextmenu",ee),i.domElement.addEventListener("pointerdown",it),i.domElement.addEventListener("pointercancel",Dt),i.domElement.addEventListener("wheel",sn,{passive:!1}),this.update()}}var Ds=function(){var n=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(d){d.preventDefault(),i(++n%e.children.length)},!1);function t(d){return e.appendChild(d.dom),d}function i(d){for(var p=0;p<e.children.length;p++)e.children[p].style.display=p===d?"block":"none";n=d}var r=(performance||Date).now(),o=r,s=0,a=t(new Ds.Panel("FPS","#0ff","#002")),u=t(new Ds.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new Ds.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:e,addPanel:t,showPanel:i,begin:function(){r=(performance||Date).now()},end:function(){s++;var d=(performance||Date).now();if(u.update(d-r,200),d>=o+1e3&&(a.update(s*1e3/(d-o),100),o=d,s=0,c)){var p=performance.memory;c.update(p.usedJSHeapSize/1048576,p.jsHeapSizeLimit/1048576)}return d},update:function(){r=this.end()},domElement:e,setMode:i}};Ds.Panel=function(n,e,t){var i=1/0,r=0,o=Math.round,s=o(window.devicePixelRatio||1),a=80*s,u=48*s,c=3*s,d=2*s,p=3*s,h=15*s,x=74*s,S=30*s,g=document.createElement("canvas");g.width=a,g.height=u,g.style.cssText="width:80px;height:48px";var m=g.getContext("2d");return m.font="bold "+9*s+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=t,m.fillRect(0,0,a,u),m.fillStyle=e,m.fillText(n,c,d),m.fillRect(p,h,x,S),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(p,h,x,S),{dom:g,update:function(_,w){i=Math.min(i,_),r=Math.max(r,_),m.fillStyle=t,m.globalAlpha=1,m.fillRect(0,0,a,h),m.fillStyle=e,m.fillText(o(_)+" "+n+" ("+o(i)+"-"+o(r)+")",c,d),m.drawImage(g,p+s,h,x-s,S,p,h,x-s,S),m.fillRect(p+x-s,h,s,S),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(p+x-s,h,s,o((1-_/w)*S))}}};var sE=(()=>{var n=import.meta.url;return function(t){t=t||{};var t=typeof t<"u"?t:{},i,r;t.ready=new Promise(function(l,f){i=l,r=f});var o=Object.assign({},t),s=(l,f)=>{throw f},a=typeof window=="object",u=typeof importScripts=="function",c=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string",d="";function p(l){return t.locateFile?t.locateFile(l,d):d+l}var h,x,S;function g(l){if(l instanceof D)return;b("exiting due to exception: "+l)}var m,_,w;c?(u?d=require("path").dirname(d)+"/":d=__dirname+"/",w=()=>{_||(m=require("fs"),_=require("path"))},h=function(f,v){return w(),f=_.normalize(f),m.readFileSync(f,v?void 0:"utf8")},S=l=>{var f=h(l,!0);return f.buffer||(f=new Uint8Array(f)),f},x=(l,f,v)=>{w(),l=_.normalize(l),m.readFile(l,function(M,C){M?v(M):f(C.buffer)})},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(l){if(!(l instanceof D))throw l}),process.on("unhandledRejection",function(l){throw l}),s=(l,f)=>{if(Xe())throw process.exitCode=l,f;g(f),process.exit(l)},t.inspect=function(){return"[Emscripten Module object]"}):(a||u)&&(u?d=self.location.href:typeof document<"u"&&document.currentScript&&(d=document.currentScript.src),n&&(d=n),d.indexOf("blob:")!==0?d=d.substr(0,d.replace(/[?#].*/,"").lastIndexOf("/")+1):d="",h=l=>{var f=new XMLHttpRequest;return f.open("GET",l,!1),f.send(null),f.responseText},u&&(S=l=>{var f=new XMLHttpRequest;return f.open("GET",l,!1),f.responseType="arraybuffer",f.send(null),new Uint8Array(f.response)}),x=(l,f,v)=>{var M=new XMLHttpRequest;M.open("GET",l,!0),M.responseType="arraybuffer",M.onload=()=>{if(M.status==200||M.status==0&&M.response){f(M.response);return}v()},M.onerror=v,M.send(null)});var E=t.print||console.log.bind(console),b=t.printErr||console.warn.bind(console);Object.assign(t,o),o=null,t.arguments&&t.arguments,t.thisProgram&&t.thisProgram,t.quit&&(s=t.quit);var L;t.wasmBinary&&(L=t.wasmBinary);var k=t.noExitRuntime||!0;typeof WebAssembly!="object"&&Ge("no native wasm support detected");var z,T=!1,N;function H(l,f){l||Ge(f)}var Y=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function le(l,f,v){for(var M=f+v,C=f;l[C]&&!(C>=M);)++C;if(C-f>16&&l.buffer&&Y)return Y.decode(l.subarray(f,C));for(var I="";f<C;){var U=l[f++];if(!(U&128)){I+=String.fromCharCode(U);continue}var W=l[f++]&63;if((U&224)==192){I+=String.fromCharCode((U&31)<<6|W);continue}var ue=l[f++]&63;if((U&240)==224?U=(U&15)<<12|W<<6|ue:U=(U&7)<<18|W<<12|ue<<6|l[f++]&63,U<65536)I+=String.fromCharCode(U);else{var Me=U-65536;I+=String.fromCharCode(55296|Me>>10,56320|Me&1023)}}return I}function fe(l,f){return l?le(B,l,f):""}function q(l,f,v,M){if(!(M>0))return 0;for(var C=v,I=v+M-1,U=0;U<l.length;++U){var W=l.charCodeAt(U);if(W>=55296&&W<=57343){var ue=l.charCodeAt(++U);W=65536+((W&1023)<<10)|ue&1023}if(W<=127){if(v>=I)break;f[v++]=W}else if(W<=2047){if(v+1>=I)break;f[v++]=192|W>>6,f[v++]=128|W&63}else if(W<=65535){if(v+2>=I)break;f[v++]=224|W>>12,f[v++]=128|W>>6&63,f[v++]=128|W&63}else{if(v+3>=I)break;f[v++]=240|W>>18,f[v++]=128|W>>12&63,f[v++]=128|W>>6&63,f[v++]=128|W&63}}return f[v]=0,v-C}function oe(l,f,v){return q(l,B,f,v)}function K(l){for(var f=0,v=0;v<l.length;++v){var M=l.charCodeAt(v);M<=127?f++:M<=2047?f+=2:M>=55296&&M<=57343?(f+=4,++v):f+=3}return f}var se,V,B,G,$,J;function he(l){se=l,t.HEAP8=V=new Int8Array(l),t.HEAP16=G=new Int16Array(l),t.HEAP32=$=new Int32Array(l),t.HEAPU8=B=new Uint8Array(l),t.HEAPU16=new Uint16Array(l),t.HEAPU32=J=new Uint32Array(l),t.HEAPF32=new Float32Array(l),t.HEAPF64=new Float64Array(l)}t.INITIAL_MEMORY;var xe=[],De=[],te=[];function Xe(){return k}function Fe(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)et(t.preRun.shift());ae(xe)}function Ne(){!t.noFSInit&&!y.init.initialized&&y.init(),y.ignorePermissions=!1,ae(De)}function Ee(){if(t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)Re(t.postRun.shift());ae(te)}function et(l){xe.unshift(l)}function Be(l){De.unshift(l)}function Re(l){te.unshift(l)}var it=0,gt=null;function Et(l){return l}function Dt(l){it++,t.monitorRunDependencies&&t.monitorRunDependencies(it)}function st(l){if(it--,t.monitorRunDependencies&&t.monitorRunDependencies(it),it==0&&gt){var f=gt;gt=null,f()}}function Ge(l){t.onAbort&&t.onAbort(l),l="Aborted("+l+")",b(l),T=!0,N=1,l+=". Build with -sASSERTIONS for more info.";var f=new WebAssembly.RuntimeError(l);throw r(f),f}var sn="data:application/octet-stream;base64,";function Wt(l){return l.startsWith(sn)}function F(l){return l.startsWith("file://")}var A;t.locateFile?(A="a.out.wasm",Wt(A)||(A=p(A))):A=new URL("/voljs-viewer/assets/a.out.bbe4a64b.wasm",self.location).toString();function ee(l){try{if(l==A&&L)return new Uint8Array(L);if(S)return S(l);throw"both async and sync fetching of the wasm failed"}catch(f){Ge(f)}}function de(){if(!L&&(a||u)){if(typeof fetch=="function"&&!F(A))return fetch(A,{credentials:"same-origin"}).then(function(l){if(!l.ok)throw"failed to load wasm binary file at '"+A+"'";return l.arrayBuffer()}).catch(function(){return ee(A)});if(x)return new Promise(function(l,f){x(A,function(v){l(new Uint8Array(v))},f)})}return Promise.resolve().then(function(){return ee(A)})}function pe(){var l={a:ln};function f(U,W){var ue=U.exports;ue=Ce.instrumentWasmExports(ue),t.asm=ue,z=t.asm.m,he(z.buffer),t.asm.E,Be(t.asm.n),st()}Dt();function v(U){f(U.instance)}function M(U){return de().then(function(W){return WebAssembly.instantiate(W,l)}).then(function(W){return W}).then(U,function(W){b("failed to asynchronously prepare wasm: "+W),Ge(W)})}function C(){return!L&&typeof WebAssembly.instantiateStreaming=="function"&&!Wt(A)&&!F(A)&&!c&&typeof fetch=="function"?fetch(A,{credentials:"same-origin"}).then(function(U){var W=WebAssembly.instantiateStreaming(U,l);return W.then(v,function(ue){return b("wasm streaming compile failed: "+ue),b("falling back to ArrayBuffer instantiation"),M(v)})}):M(v)}if(t.instantiateWasm)try{var I=t.instantiateWasm(l,f);return I=Ce.instrumentWasmExports(I),I}catch(U){return b("Module.instantiateWasm callback failed with error: "+U),!1}return C().catch(r),{}}var re,Te;function D(l){this.name="ExitStatus",this.message="Program terminated with exit("+l+")",this.status=l}function ae(l){for(;l.length>0;)l.shift()(t)}function me(l){if(l instanceof D||l=="unwind")return N;s(1,l)}function ye(l,f){V.set(l,f)}function ve(l,f,v,M){Ge("Assertion failed: "+fe(l)+", at: "+[f?fe(f):"unknown filename",v,M?fe(M):"unknown function"])}function Ie(l){return $[Zr()>>2]=l,l}var we={isAbs:l=>l.charAt(0)==="/",splitPath:l=>{var f=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return f.exec(l).slice(1)},normalizeArray:(l,f)=>{for(var v=0,M=l.length-1;M>=0;M--){var C=l[M];C==="."?l.splice(M,1):C===".."?(l.splice(M,1),v++):v&&(l.splice(M,1),v--)}if(f)for(;v;v--)l.unshift("..");return l},normalize:l=>{var f=we.isAbs(l),v=l.substr(-1)==="/";return l=we.normalizeArray(l.split("/").filter(M=>!!M),!f).join("/"),!l&&!f&&(l="."),l&&v&&(l+="/"),(f?"/":"")+l},dirname:l=>{var f=we.splitPath(l),v=f[0],M=f[1];return!v&&!M?".":(M&&(M=M.substr(0,M.length-1)),v+M)},basename:l=>{if(l==="/")return"/";l=we.normalize(l),l=l.replace(/\/$/,"");var f=l.lastIndexOf("/");return f===-1?l:l.substr(f+1)},join:function(){var l=Array.prototype.slice.call(arguments,0);return we.normalize(l.join("/"))},join2:(l,f)=>we.normalize(l+"/"+f)};function rt(){if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function"){var l=new Uint8Array(1);return()=>(crypto.getRandomValues(l),l[0])}else if(c)try{var f=require("crypto");return()=>f.randomBytes(1)[0]}catch{}return()=>Ge("randomDevice")}var O={resolve:function(){for(var l="",f=!1,v=arguments.length-1;v>=-1&&!f;v--){var M=v>=0?arguments[v]:y.cwd();if(typeof M!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!M)return"";l=M+"/"+l,f=we.isAbs(M)}return l=we.normalizeArray(l.split("/").filter(C=>!!C),!f).join("/"),(f?"/":"")+l||"."},relative:(l,f)=>{l=O.resolve(l).substr(1),f=O.resolve(f).substr(1);function v(Me){for(var Pe=0;Pe<Me.length&&Me[Pe]==="";Pe++);for(var ke=Me.length-1;ke>=0&&Me[ke]==="";ke--);return Pe>ke?[]:Me.slice(Pe,ke-Pe+1)}for(var M=v(l.split("/")),C=v(f.split("/")),I=Math.min(M.length,C.length),U=I,W=0;W<I;W++)if(M[W]!==C[W]){U=W;break}for(var ue=[],W=U;W<M.length;W++)ue.push("..");return ue=ue.concat(C.slice(U)),ue.join("/")}};function ge(l,f,v){var M=v>0?v:K(l)+1,C=new Array(M),I=q(l,C,0,C.length);return f&&(C.length=I),C}var Q={ttys:[],init:function(){},shutdown:function(){},register:function(l,f){Q.ttys[l]={input:[],output:[],ops:f},y.registerDevice(l,Q.stream_ops)},stream_ops:{open:function(l){var f=Q.ttys[l.node.rdev];if(!f)throw new y.ErrnoError(43);l.tty=f,l.seekable=!1},close:function(l){l.tty.ops.fsync(l.tty)},fsync:function(l){l.tty.ops.fsync(l.tty)},read:function(l,f,v,M,C){if(!l.tty||!l.tty.ops.get_char)throw new y.ErrnoError(60);for(var I=0,U=0;U<M;U++){var W;try{W=l.tty.ops.get_char(l.tty)}catch{throw new y.ErrnoError(29)}if(W===void 0&&I===0)throw new y.ErrnoError(6);if(W==null)break;I++,f[v+U]=W}return I&&(l.node.timestamp=Date.now()),I},write:function(l,f,v,M,C){if(!l.tty||!l.tty.ops.put_char)throw new y.ErrnoError(60);try{for(var I=0;I<M;I++)l.tty.ops.put_char(l.tty,f[v+I])}catch{throw new y.ErrnoError(29)}return M&&(l.node.timestamp=Date.now()),I}},default_tty_ops:{get_char:function(l){if(!l.input.length){var f=null;if(c){var v=256,M=Buffer.alloc(v),C=0;try{C=m.readSync(process.stdin.fd,M,0,v,-1)}catch(I){if(I.toString().includes("EOF"))C=0;else throw I}C>0?f=M.slice(0,C).toString("utf-8"):f=null}else typeof window<"u"&&typeof window.prompt=="function"?(f=window.prompt("Input: "),f!==null&&(f+=`
`)):typeof readline=="function"&&(f=readline(),f!==null&&(f+=`
`));if(!f)return null;l.input=ge(f,!0)}return l.input.shift()},put_char:function(l,f){f===null||f===10?(E(le(l.output,0)),l.output=[]):f!=0&&l.output.push(f)},fsync:function(l){l.output&&l.output.length>0&&(E(le(l.output,0)),l.output=[])}},default_tty1_ops:{put_char:function(l,f){f===null||f===10?(b(le(l.output,0)),l.output=[]):f!=0&&l.output.push(f)},fsync:function(l){l.output&&l.output.length>0&&(b(le(l.output,0)),l.output=[])}}};function Se(l){Ge()}var ne={ops_table:null,mount:function(l){return ne.createNode(null,"/",16895,0)},createNode:function(l,f,v,M){if(y.isBlkdev(v)||y.isFIFO(v))throw new y.ErrnoError(63);ne.ops_table||(ne.ops_table={dir:{node:{getattr:ne.node_ops.getattr,setattr:ne.node_ops.setattr,lookup:ne.node_ops.lookup,mknod:ne.node_ops.mknod,rename:ne.node_ops.rename,unlink:ne.node_ops.unlink,rmdir:ne.node_ops.rmdir,readdir:ne.node_ops.readdir,symlink:ne.node_ops.symlink},stream:{llseek:ne.stream_ops.llseek}},file:{node:{getattr:ne.node_ops.getattr,setattr:ne.node_ops.setattr},stream:{llseek:ne.stream_ops.llseek,read:ne.stream_ops.read,write:ne.stream_ops.write,allocate:ne.stream_ops.allocate,mmap:ne.stream_ops.mmap,msync:ne.stream_ops.msync}},link:{node:{getattr:ne.node_ops.getattr,setattr:ne.node_ops.setattr,readlink:ne.node_ops.readlink},stream:{}},chrdev:{node:{getattr:ne.node_ops.getattr,setattr:ne.node_ops.setattr},stream:y.chrdev_stream_ops}});var C=y.createNode(l,f,v,M);return y.isDir(C.mode)?(C.node_ops=ne.ops_table.dir.node,C.stream_ops=ne.ops_table.dir.stream,C.contents={}):y.isFile(C.mode)?(C.node_ops=ne.ops_table.file.node,C.stream_ops=ne.ops_table.file.stream,C.usedBytes=0,C.contents=null):y.isLink(C.mode)?(C.node_ops=ne.ops_table.link.node,C.stream_ops=ne.ops_table.link.stream):y.isChrdev(C.mode)&&(C.node_ops=ne.ops_table.chrdev.node,C.stream_ops=ne.ops_table.chrdev.stream),C.timestamp=Date.now(),l&&(l.contents[f]=C,l.timestamp=C.timestamp),C},getFileDataAsTypedArray:function(l){return l.contents?l.contents.subarray?l.contents.subarray(0,l.usedBytes):new Uint8Array(l.contents):new Uint8Array(0)},expandFileStorage:function(l,f){var v=l.contents?l.contents.length:0;if(!(v>=f)){var M=1024*1024;f=Math.max(f,v*(v<M?2:1.125)>>>0),v!=0&&(f=Math.max(f,256));var C=l.contents;l.contents=new Uint8Array(f),l.usedBytes>0&&l.contents.set(C.subarray(0,l.usedBytes),0)}},resizeFileStorage:function(l,f){if(l.usedBytes!=f)if(f==0)l.contents=null,l.usedBytes=0;else{var v=l.contents;l.contents=new Uint8Array(f),v&&l.contents.set(v.subarray(0,Math.min(f,l.usedBytes))),l.usedBytes=f}},node_ops:{getattr:function(l){var f={};return f.dev=y.isChrdev(l.mode)?l.id:1,f.ino=l.id,f.mode=l.mode,f.nlink=1,f.uid=0,f.gid=0,f.rdev=l.rdev,y.isDir(l.mode)?f.size=4096:y.isFile(l.mode)?f.size=l.usedBytes:y.isLink(l.mode)?f.size=l.link.length:f.size=0,f.atime=new Date(l.timestamp),f.mtime=new Date(l.timestamp),f.ctime=new Date(l.timestamp),f.blksize=4096,f.blocks=Math.ceil(f.size/f.blksize),f},setattr:function(l,f){f.mode!==void 0&&(l.mode=f.mode),f.timestamp!==void 0&&(l.timestamp=f.timestamp),f.size!==void 0&&ne.resizeFileStorage(l,f.size)},lookup:function(l,f){throw y.genericErrors[44]},mknod:function(l,f,v,M){return ne.createNode(l,f,v,M)},rename:function(l,f,v){if(y.isDir(l.mode)){var M;try{M=y.lookupNode(f,v)}catch{}if(M)for(var C in M.contents)throw new y.ErrnoError(55)}delete l.parent.contents[l.name],l.parent.timestamp=Date.now(),l.name=v,f.contents[v]=l,f.timestamp=l.parent.timestamp,l.parent=f},unlink:function(l,f){delete l.contents[f],l.timestamp=Date.now()},rmdir:function(l,f){var v=y.lookupNode(l,f);for(var M in v.contents)throw new y.ErrnoError(55);delete l.contents[f],l.timestamp=Date.now()},readdir:function(l){var f=[".",".."];for(var v in l.contents)!l.contents.hasOwnProperty(v)||f.push(v);return f},symlink:function(l,f,v){var M=ne.createNode(l,f,41471,0);return M.link=v,M},readlink:function(l){if(!y.isLink(l.mode))throw new y.ErrnoError(28);return l.link}},stream_ops:{read:function(l,f,v,M,C){var I=l.node.contents;if(C>=l.node.usedBytes)return 0;var U=Math.min(l.node.usedBytes-C,M);if(U>8&&I.subarray)f.set(I.subarray(C,C+U),v);else for(var W=0;W<U;W++)f[v+W]=I[C+W];return U},write:function(l,f,v,M,C,I){if(!M)return 0;var U=l.node;if(U.timestamp=Date.now(),f.subarray&&(!U.contents||U.contents.subarray)){if(I)return U.contents=f.subarray(v,v+M),U.usedBytes=M,M;if(U.usedBytes===0&&C===0)return U.contents=f.slice(v,v+M),U.usedBytes=M,M;if(C+M<=U.usedBytes)return U.contents.set(f.subarray(v,v+M),C),M}if(ne.expandFileStorage(U,C+M),U.contents.subarray&&f.subarray)U.contents.set(f.subarray(v,v+M),C);else for(var W=0;W<M;W++)U.contents[C+W]=f[v+W];return U.usedBytes=Math.max(U.usedBytes,C+M),M},llseek:function(l,f,v){var M=f;if(v===1?M+=l.position:v===2&&y.isFile(l.node.mode)&&(M+=l.node.usedBytes),M<0)throw new y.ErrnoError(28);return M},allocate:function(l,f,v){ne.expandFileStorage(l.node,f+v),l.node.usedBytes=Math.max(l.node.usedBytes,f+v)},mmap:function(l,f,v,M,C){if(!y.isFile(l.node.mode))throw new y.ErrnoError(43);var I,U,W=l.node.contents;if(!(C&2)&&W.buffer===se)U=!1,I=W.byteOffset;else{if((v>0||v+f<W.length)&&(W.subarray?W=W.subarray(v,v+f):W=Array.prototype.slice.call(W,v,v+f)),U=!0,I=Se(),!I)throw new y.ErrnoError(48);V.set(W,I)}return{ptr:I,allocated:U}},msync:function(l,f,v,M,C){if(!y.isFile(l.node.mode))throw new y.ErrnoError(43);return C&2||ne.stream_ops.write(l,f,0,M,v,!1),0}}};function Ze(l,f,v,M){var C=M?"":"al "+l;x(l,I=>{H(I,'Loading data file "'+l+'" failed (no arrayBuffer).'),f(new Uint8Array(I)),C&&st()},I=>{if(v)v();else throw'Loading data file "'+l+'" failed.'}),C&&Dt()}var y={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,lookupPath:(l,f={})=>{if(l=O.resolve(y.cwd(),l),!l)return{path:"",node:null};var v={follow_mount:!0,recurse_count:0};if(f=Object.assign(v,f),f.recurse_count>8)throw new y.ErrnoError(32);for(var M=we.normalizeArray(l.split("/").filter(ke=>!!ke),!1),C=y.root,I="/",U=0;U<M.length;U++){var W=U===M.length-1;if(W&&f.parent)break;if(C=y.lookupNode(C,M[U]),I=we.join2(I,M[U]),y.isMountpoint(C)&&(!W||W&&f.follow_mount)&&(C=C.mounted.root),!W||f.follow)for(var ue=0;y.isLink(C.mode);){var Me=y.readlink(I);I=O.resolve(we.dirname(I),Me);var Pe=y.lookupPath(I,{recurse_count:f.recurse_count+1});if(C=Pe.node,ue++>40)throw new y.ErrnoError(32)}}return{path:I,node:C}},getPath:l=>{for(var f;;){if(y.isRoot(l)){var v=l.mount.mountpoint;return f?v[v.length-1]!=="/"?v+"/"+f:v+f:v}f=f?l.name+"/"+f:l.name,l=l.parent}},hashName:(l,f)=>{for(var v=0,M=0;M<f.length;M++)v=(v<<5)-v+f.charCodeAt(M)|0;return(l+v>>>0)%y.nameTable.length},hashAddNode:l=>{var f=y.hashName(l.parent.id,l.name);l.name_next=y.nameTable[f],y.nameTable[f]=l},hashRemoveNode:l=>{var f=y.hashName(l.parent.id,l.name);if(y.nameTable[f]===l)y.nameTable[f]=l.name_next;else for(var v=y.nameTable[f];v;){if(v.name_next===l){v.name_next=l.name_next;break}v=v.name_next}},lookupNode:(l,f)=>{var v=y.mayLookup(l);if(v)throw new y.ErrnoError(v,l);for(var M=y.hashName(l.id,f),C=y.nameTable[M];C;C=C.name_next){var I=C.name;if(C.parent.id===l.id&&I===f)return C}return y.lookup(l,f)},createNode:(l,f,v,M)=>{var C=new y.FSNode(l,f,v,M);return y.hashAddNode(C),C},destroyNode:l=>{y.hashRemoveNode(l)},isRoot:l=>l===l.parent,isMountpoint:l=>!!l.mounted,isFile:l=>(l&61440)===32768,isDir:l=>(l&61440)===16384,isLink:l=>(l&61440)===40960,isChrdev:l=>(l&61440)===8192,isBlkdev:l=>(l&61440)===24576,isFIFO:l=>(l&61440)===4096,isSocket:l=>(l&49152)===49152,flagModes:{r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},modeStringToFlags:l=>{var f=y.flagModes[l];if(typeof f>"u")throw new Error("Unknown file open mode: "+l);return f},flagsToPermissionString:l=>{var f=["r","w","rw"][l&3];return l&512&&(f+="w"),f},nodePermissions:(l,f)=>y.ignorePermissions?0:f.includes("r")&&!(l.mode&292)||f.includes("w")&&!(l.mode&146)||f.includes("x")&&!(l.mode&73)?2:0,mayLookup:l=>{var f=y.nodePermissions(l,"x");return f||(l.node_ops.lookup?0:2)},mayCreate:(l,f)=>{try{var v=y.lookupNode(l,f);return 20}catch{}return y.nodePermissions(l,"wx")},mayDelete:(l,f,v)=>{var M;try{M=y.lookupNode(l,f)}catch(I){return I.errno}var C=y.nodePermissions(l,"wx");if(C)return C;if(v){if(!y.isDir(M.mode))return 54;if(y.isRoot(M)||y.getPath(M)===y.cwd())return 10}else if(y.isDir(M.mode))return 31;return 0},mayOpen:(l,f)=>l?y.isLink(l.mode)?32:y.isDir(l.mode)&&(y.flagsToPermissionString(f)!=="r"||f&512)?31:y.nodePermissions(l,y.flagsToPermissionString(f)):44,MAX_OPEN_FDS:4096,nextfd:(l=0,f=y.MAX_OPEN_FDS)=>{for(var v=l;v<=f;v++)if(!y.streams[v])return v;throw new y.ErrnoError(33)},getStream:l=>y.streams[l],createStream:(l,f,v)=>{y.FSStream||(y.FSStream=function(){this.shared={}},y.FSStream.prototype={},Object.defineProperties(y.FSStream.prototype,{object:{get:function(){return this.node},set:function(C){this.node=C}},isRead:{get:function(){return(this.flags&2097155)!==1}},isWrite:{get:function(){return(this.flags&2097155)!==0}},isAppend:{get:function(){return this.flags&1024}},flags:{get:function(){return this.shared.flags},set:function(C){this.shared.flags=C}},position:{get:function(){return this.shared.position},set:function(C){this.shared.position=C}}})),l=Object.assign(new y.FSStream,l);var M=y.nextfd(f,v);return l.fd=M,y.streams[M]=l,l},closeStream:l=>{y.streams[l]=null},chrdev_stream_ops:{open:l=>{var f=y.getDevice(l.node.rdev);l.stream_ops=f.stream_ops,l.stream_ops.open&&l.stream_ops.open(l)},llseek:()=>{throw new y.ErrnoError(70)}},major:l=>l>>8,minor:l=>l&255,makedev:(l,f)=>l<<8|f,registerDevice:(l,f)=>{y.devices[l]={stream_ops:f}},getDevice:l=>y.devices[l],getMounts:l=>{for(var f=[],v=[l];v.length;){var M=v.pop();f.push(M),v.push.apply(v,M.mounts)}return f},syncfs:(l,f)=>{typeof l=="function"&&(f=l,l=!1),y.syncFSRequests++,y.syncFSRequests>1&&b("warning: "+y.syncFSRequests+" FS.syncfs operations in flight at once, probably just doing extra work");var v=y.getMounts(y.root.mount),M=0;function C(U){return y.syncFSRequests--,f(U)}function I(U){if(U)return I.errored?void 0:(I.errored=!0,C(U));++M>=v.length&&C(null)}v.forEach(U=>{if(!U.type.syncfs)return I(null);U.type.syncfs(U,l,I)})},mount:(l,f,v)=>{var M=v==="/",C=!v,I;if(M&&y.root)throw new y.ErrnoError(10);if(!M&&!C){var U=y.lookupPath(v,{follow_mount:!1});if(v=U.path,I=U.node,y.isMountpoint(I))throw new y.ErrnoError(10);if(!y.isDir(I.mode))throw new y.ErrnoError(54)}var W={type:l,opts:f,mountpoint:v,mounts:[]},ue=l.mount(W);return ue.mount=W,W.root=ue,M?y.root=ue:I&&(I.mounted=W,I.mount&&I.mount.mounts.push(W)),ue},unmount:l=>{var f=y.lookupPath(l,{follow_mount:!1});if(!y.isMountpoint(f.node))throw new y.ErrnoError(28);var v=f.node,M=v.mounted,C=y.getMounts(M);Object.keys(y.nameTable).forEach(U=>{for(var W=y.nameTable[U];W;){var ue=W.name_next;C.includes(W.mount)&&y.destroyNode(W),W=ue}}),v.mounted=null;var I=v.mount.mounts.indexOf(M);v.mount.mounts.splice(I,1)},lookup:(l,f)=>l.node_ops.lookup(l,f),mknod:(l,f,v)=>{var M=y.lookupPath(l,{parent:!0}),C=M.node,I=we.basename(l);if(!I||I==="."||I==="..")throw new y.ErrnoError(28);var U=y.mayCreate(C,I);if(U)throw new y.ErrnoError(U);if(!C.node_ops.mknod)throw new y.ErrnoError(63);return C.node_ops.mknod(C,I,f,v)},create:(l,f)=>(f=f!==void 0?f:438,f&=4095,f|=32768,y.mknod(l,f,0)),mkdir:(l,f)=>(f=f!==void 0?f:511,f&=1023,f|=16384,y.mknod(l,f,0)),mkdirTree:(l,f)=>{for(var v=l.split("/"),M="",C=0;C<v.length;++C)if(!!v[C]){M+="/"+v[C];try{y.mkdir(M,f)}catch(I){if(I.errno!=20)throw I}}},mkdev:(l,f,v)=>(typeof v>"u"&&(v=f,f=438),f|=8192,y.mknod(l,f,v)),symlink:(l,f)=>{if(!O.resolve(l))throw new y.ErrnoError(44);var v=y.lookupPath(f,{parent:!0}),M=v.node;if(!M)throw new y.ErrnoError(44);var C=we.basename(f),I=y.mayCreate(M,C);if(I)throw new y.ErrnoError(I);if(!M.node_ops.symlink)throw new y.ErrnoError(63);return M.node_ops.symlink(M,C,l)},rename:(l,f)=>{var v=we.dirname(l),M=we.dirname(f),C=we.basename(l),I=we.basename(f),U,W,ue;if(U=y.lookupPath(l,{parent:!0}),W=U.node,U=y.lookupPath(f,{parent:!0}),ue=U.node,!W||!ue)throw new y.ErrnoError(44);if(W.mount!==ue.mount)throw new y.ErrnoError(75);var Me=y.lookupNode(W,C),Pe=O.relative(l,M);if(Pe.charAt(0)!==".")throw new y.ErrnoError(28);if(Pe=O.relative(f,v),Pe.charAt(0)!==".")throw new y.ErrnoError(55);var ke;try{ke=y.lookupNode(ue,I)}catch{}if(Me!==ke){var Ae=y.isDir(Me.mode),Le=y.mayDelete(W,C,Ae);if(Le)throw new y.ErrnoError(Le);if(Le=ke?y.mayDelete(ue,I,Ae):y.mayCreate(ue,I),Le)throw new y.ErrnoError(Le);if(!W.node_ops.rename)throw new y.ErrnoError(63);if(y.isMountpoint(Me)||ke&&y.isMountpoint(ke))throw new y.ErrnoError(10);if(ue!==W&&(Le=y.nodePermissions(W,"w"),Le))throw new y.ErrnoError(Le);y.hashRemoveNode(Me);try{W.node_ops.rename(Me,ue,I)}catch(He){throw He}finally{y.hashAddNode(Me)}}},rmdir:l=>{var f=y.lookupPath(l,{parent:!0}),v=f.node,M=we.basename(l),C=y.lookupNode(v,M),I=y.mayDelete(v,M,!0);if(I)throw new y.ErrnoError(I);if(!v.node_ops.rmdir)throw new y.ErrnoError(63);if(y.isMountpoint(C))throw new y.ErrnoError(10);v.node_ops.rmdir(v,M),y.destroyNode(C)},readdir:l=>{var f=y.lookupPath(l,{follow:!0}),v=f.node;if(!v.node_ops.readdir)throw new y.ErrnoError(54);return v.node_ops.readdir(v)},unlink:l=>{var f=y.lookupPath(l,{parent:!0}),v=f.node;if(!v)throw new y.ErrnoError(44);var M=we.basename(l),C=y.lookupNode(v,M),I=y.mayDelete(v,M,!1);if(I)throw new y.ErrnoError(I);if(!v.node_ops.unlink)throw new y.ErrnoError(63);if(y.isMountpoint(C))throw new y.ErrnoError(10);v.node_ops.unlink(v,M),y.destroyNode(C)},readlink:l=>{var f=y.lookupPath(l),v=f.node;if(!v)throw new y.ErrnoError(44);if(!v.node_ops.readlink)throw new y.ErrnoError(28);return O.resolve(y.getPath(v.parent),v.node_ops.readlink(v))},stat:(l,f)=>{var v=y.lookupPath(l,{follow:!f}),M=v.node;if(!M)throw new y.ErrnoError(44);if(!M.node_ops.getattr)throw new y.ErrnoError(63);return M.node_ops.getattr(M)},lstat:l=>y.stat(l,!0),chmod:(l,f,v)=>{var M;if(typeof l=="string"){var C=y.lookupPath(l,{follow:!v});M=C.node}else M=l;if(!M.node_ops.setattr)throw new y.ErrnoError(63);M.node_ops.setattr(M,{mode:f&4095|M.mode&-4096,timestamp:Date.now()})},lchmod:(l,f)=>{y.chmod(l,f,!0)},fchmod:(l,f)=>{var v=y.getStream(l);if(!v)throw new y.ErrnoError(8);y.chmod(v.node,f)},chown:(l,f,v,M)=>{var C;if(typeof l=="string"){var I=y.lookupPath(l,{follow:!M});C=I.node}else C=l;if(!C.node_ops.setattr)throw new y.ErrnoError(63);C.node_ops.setattr(C,{timestamp:Date.now()})},lchown:(l,f,v)=>{y.chown(l,f,v,!0)},fchown:(l,f,v)=>{var M=y.getStream(l);if(!M)throw new y.ErrnoError(8);y.chown(M.node,f,v)},truncate:(l,f)=>{if(f<0)throw new y.ErrnoError(28);var v;if(typeof l=="string"){var M=y.lookupPath(l,{follow:!0});v=M.node}else v=l;if(!v.node_ops.setattr)throw new y.ErrnoError(63);if(y.isDir(v.mode))throw new y.ErrnoError(31);if(!y.isFile(v.mode))throw new y.ErrnoError(28);var C=y.nodePermissions(v,"w");if(C)throw new y.ErrnoError(C);v.node_ops.setattr(v,{size:f,timestamp:Date.now()})},ftruncate:(l,f)=>{var v=y.getStream(l);if(!v)throw new y.ErrnoError(8);if((v.flags&2097155)===0)throw new y.ErrnoError(28);y.truncate(v.node,f)},utime:(l,f,v)=>{var M=y.lookupPath(l,{follow:!0}),C=M.node;C.node_ops.setattr(C,{timestamp:Math.max(f,v)})},open:(l,f,v)=>{if(l==="")throw new y.ErrnoError(44);f=typeof f=="string"?y.modeStringToFlags(f):f,v=typeof v>"u"?438:v,f&64?v=v&4095|32768:v=0;var M;if(typeof l=="object")M=l;else{l=we.normalize(l);try{var C=y.lookupPath(l,{follow:!(f&131072)});M=C.node}catch{}}var I=!1;if(f&64)if(M){if(f&128)throw new y.ErrnoError(20)}else M=y.mknod(l,v,0),I=!0;if(!M)throw new y.ErrnoError(44);if(y.isChrdev(M.mode)&&(f&=-513),f&65536&&!y.isDir(M.mode))throw new y.ErrnoError(54);if(!I){var U=y.mayOpen(M,f);if(U)throw new y.ErrnoError(U)}f&512&&!I&&y.truncate(M,0),f&=-131713;var W=y.createStream({node:M,path:y.getPath(M),flags:f,seekable:!0,position:0,stream_ops:M.stream_ops,ungotten:[],error:!1});return W.stream_ops.open&&W.stream_ops.open(W),t.logReadFiles&&!(f&1)&&(y.readFiles||(y.readFiles={}),l in y.readFiles||(y.readFiles[l]=1)),W},close:l=>{if(y.isClosed(l))throw new y.ErrnoError(8);l.getdents&&(l.getdents=null);try{l.stream_ops.close&&l.stream_ops.close(l)}catch(f){throw f}finally{y.closeStream(l.fd)}l.fd=null},isClosed:l=>l.fd===null,llseek:(l,f,v)=>{if(y.isClosed(l))throw new y.ErrnoError(8);if(!l.seekable||!l.stream_ops.llseek)throw new y.ErrnoError(70);if(v!=0&&v!=1&&v!=2)throw new y.ErrnoError(28);return l.position=l.stream_ops.llseek(l,f,v),l.ungotten=[],l.position},read:(l,f,v,M,C)=>{if(M<0||C<0)throw new y.ErrnoError(28);if(y.isClosed(l))throw new y.ErrnoError(8);if((l.flags&2097155)===1)throw new y.ErrnoError(8);if(y.isDir(l.node.mode))throw new y.ErrnoError(31);if(!l.stream_ops.read)throw new y.ErrnoError(28);var I=typeof C<"u";if(!I)C=l.position;else if(!l.seekable)throw new y.ErrnoError(70);var U=l.stream_ops.read(l,f,v,M,C);return I||(l.position+=U),U},write:(l,f,v,M,C,I)=>{if(M<0||C<0)throw new y.ErrnoError(28);if(y.isClosed(l))throw new y.ErrnoError(8);if((l.flags&2097155)===0)throw new y.ErrnoError(8);if(y.isDir(l.node.mode))throw new y.ErrnoError(31);if(!l.stream_ops.write)throw new y.ErrnoError(28);l.seekable&&l.flags&1024&&y.llseek(l,0,2);var U=typeof C<"u";if(!U)C=l.position;else if(!l.seekable)throw new y.ErrnoError(70);var W=l.stream_ops.write(l,f,v,M,C,I);return U||(l.position+=W),W},allocate:(l,f,v)=>{if(y.isClosed(l))throw new y.ErrnoError(8);if(f<0||v<=0)throw new y.ErrnoError(28);if((l.flags&2097155)===0)throw new y.ErrnoError(8);if(!y.isFile(l.node.mode)&&!y.isDir(l.node.mode))throw new y.ErrnoError(43);if(!l.stream_ops.allocate)throw new y.ErrnoError(138);l.stream_ops.allocate(l,f,v)},mmap:(l,f,v,M,C)=>{if((M&2)!==0&&(C&2)===0&&(l.flags&2097155)!==2)throw new y.ErrnoError(2);if((l.flags&2097155)===1)throw new y.ErrnoError(2);if(!l.stream_ops.mmap)throw new y.ErrnoError(43);return l.stream_ops.mmap(l,f,v,M,C)},msync:(l,f,v,M,C)=>!l||!l.stream_ops.msync?0:l.stream_ops.msync(l,f,v,M,C),munmap:l=>0,ioctl:(l,f,v)=>{if(!l.stream_ops.ioctl)throw new y.ErrnoError(59);return l.stream_ops.ioctl(l,f,v)},readFile:(l,f={})=>{if(f.flags=f.flags||0,f.encoding=f.encoding||"binary",f.encoding!=="utf8"&&f.encoding!=="binary")throw new Error('Invalid encoding type "'+f.encoding+'"');var v,M=y.open(l,f.flags),C=y.stat(l),I=C.size,U=new Uint8Array(I);return y.read(M,U,0,I,0),f.encoding==="utf8"?v=le(U,0):f.encoding==="binary"&&(v=U),y.close(M),v},writeFile:(l,f,v={})=>{v.flags=v.flags||577;var M=y.open(l,v.flags,v.mode);if(typeof f=="string"){var C=new Uint8Array(K(f)+1),I=q(f,C,0,C.length);y.write(M,C,0,I,void 0,v.canOwn)}else if(ArrayBuffer.isView(f))y.write(M,f,0,f.byteLength,void 0,v.canOwn);else throw new Error("Unsupported data type");y.close(M)},cwd:()=>y.currentPath,chdir:l=>{var f=y.lookupPath(l,{follow:!0});if(f.node===null)throw new y.ErrnoError(44);if(!y.isDir(f.node.mode))throw new y.ErrnoError(54);var v=y.nodePermissions(f.node,"x");if(v)throw new y.ErrnoError(v);y.currentPath=f.path},createDefaultDirectories:()=>{y.mkdir("/tmp"),y.mkdir("/home"),y.mkdir("/home/web_user")},createDefaultDevices:()=>{y.mkdir("/dev"),y.registerDevice(y.makedev(1,3),{read:()=>0,write:(f,v,M,C,I)=>C}),y.mkdev("/dev/null",y.makedev(1,3)),Q.register(y.makedev(5,0),Q.default_tty_ops),Q.register(y.makedev(6,0),Q.default_tty1_ops),y.mkdev("/dev/tty",y.makedev(5,0)),y.mkdev("/dev/tty1",y.makedev(6,0));var l=rt();y.createDevice("/dev","random",l),y.createDevice("/dev","urandom",l),y.mkdir("/dev/shm"),y.mkdir("/dev/shm/tmp")},createSpecialDirectories:()=>{y.mkdir("/proc");var l=y.mkdir("/proc/self");y.mkdir("/proc/self/fd"),y.mount({mount:()=>{var f=y.createNode(l,"fd",16895,73);return f.node_ops={lookup:(v,M)=>{var C=+M,I=y.getStream(C);if(!I)throw new y.ErrnoError(8);var U={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>I.path}};return U.parent=U,U}},f}},{},"/proc/self/fd")},createStandardStreams:()=>{t.stdin?y.createDevice("/dev","stdin",t.stdin):y.symlink("/dev/tty","/dev/stdin"),t.stdout?y.createDevice("/dev","stdout",null,t.stdout):y.symlink("/dev/tty","/dev/stdout"),t.stderr?y.createDevice("/dev","stderr",null,t.stderr):y.symlink("/dev/tty1","/dev/stderr"),y.open("/dev/stdin",0),y.open("/dev/stdout",1),y.open("/dev/stderr",1)},ensureErrnoError:()=>{y.ErrnoError||(y.ErrnoError=function(f,v){this.node=v,this.setErrno=function(M){this.errno=M},this.setErrno(f),this.message="FS error"},y.ErrnoError.prototype=new Error,y.ErrnoError.prototype.constructor=y.ErrnoError,[44].forEach(l=>{y.genericErrors[l]=new y.ErrnoError(l),y.genericErrors[l].stack="<generic error, no stack>"}))},staticInit:()=>{y.ensureErrnoError(),y.nameTable=new Array(4096),y.mount(ne,{},"/"),y.createDefaultDirectories(),y.createDefaultDevices(),y.createSpecialDirectories(),y.filesystems={MEMFS:ne}},init:(l,f,v)=>{y.init.initialized=!0,y.ensureErrnoError(),t.stdin=l||t.stdin,t.stdout=f||t.stdout,t.stderr=v||t.stderr,y.createStandardStreams()},quit:()=>{y.init.initialized=!1;for(var l=0;l<y.streams.length;l++){var f=y.streams[l];!f||y.close(f)}},getMode:(l,f)=>{var v=0;return l&&(v|=365),f&&(v|=146),v},findObject:(l,f)=>{var v=y.analyzePath(l,f);return v.exists?v.object:null},analyzePath:(l,f)=>{try{var v=y.lookupPath(l,{follow:!f});l=v.path}catch{}var M={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var v=y.lookupPath(l,{parent:!0});M.parentExists=!0,M.parentPath=v.path,M.parentObject=v.node,M.name=we.basename(l),v=y.lookupPath(l,{follow:!f}),M.exists=!0,M.path=v.path,M.object=v.node,M.name=v.node.name,M.isRoot=v.path==="/"}catch(C){M.error=C.errno}return M},createPath:(l,f,v,M)=>{l=typeof l=="string"?l:y.getPath(l);for(var C=f.split("/").reverse();C.length;){var I=C.pop();if(!!I){var U=we.join2(l,I);try{y.mkdir(U)}catch{}l=U}}return U},createFile:(l,f,v,M,C)=>{var I=we.join2(typeof l=="string"?l:y.getPath(l),f),U=y.getMode(M,C);return y.create(I,U)},createDataFile:(l,f,v,M,C,I)=>{var U=f;l&&(l=typeof l=="string"?l:y.getPath(l),U=f?we.join2(l,f):l);var W=y.getMode(M,C),ue=y.create(U,W);if(v){if(typeof v=="string"){for(var Me=new Array(v.length),Pe=0,ke=v.length;Pe<ke;++Pe)Me[Pe]=v.charCodeAt(Pe);v=Me}y.chmod(ue,W|146);var Ae=y.open(ue,577);y.write(Ae,v,0,v.length,0,I),y.close(Ae),y.chmod(ue,W)}return ue},createDevice:(l,f,v,M)=>{var C=we.join2(typeof l=="string"?l:y.getPath(l),f),I=y.getMode(!!v,!!M);y.createDevice.major||(y.createDevice.major=64);var U=y.makedev(y.createDevice.major++,0);return y.registerDevice(U,{open:W=>{W.seekable=!1},close:W=>{M&&M.buffer&&M.buffer.length&&M(10)},read:(W,ue,Me,Pe,ke)=>{for(var Ae=0,Le=0;Le<Pe;Le++){var He;try{He=v()}catch{throw new y.ErrnoError(29)}if(He===void 0&&Ae===0)throw new y.ErrnoError(6);if(He==null)break;Ae++,ue[Me+Le]=He}return Ae&&(W.node.timestamp=Date.now()),Ae},write:(W,ue,Me,Pe,ke)=>{for(var Ae=0;Ae<Pe;Ae++)try{M(ue[Me+Ae])}catch{throw new y.ErrnoError(29)}return Pe&&(W.node.timestamp=Date.now()),Ae}}),y.mkdev(C,I,U)},forceLoadFile:l=>{if(l.isDevice||l.isFolder||l.link||l.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");if(h)try{l.contents=ge(h(l.url),!0),l.usedBytes=l.contents.length}catch{throw new y.ErrnoError(29)}else throw new Error("Cannot load without read() or XMLHttpRequest.")},createLazyFile:(l,f,v,M,C)=>{function I(){this.lengthKnown=!1,this.chunks=[]}if(I.prototype.get=function(Le){if(!(Le>this.length-1||Le<0)){var He=Le%this.chunkSize,zt=Le/this.chunkSize|0;return this.getter(zt)[He]}},I.prototype.setDataGetter=function(Le){this.getter=Le},I.prototype.cacheLength=function(){var Le=new XMLHttpRequest;if(Le.open("HEAD",v,!1),Le.send(null),!(Le.status>=200&&Le.status<300||Le.status===304))throw new Error("Couldn't load "+v+". Status: "+Le.status);var He=Number(Le.getResponseHeader("Content-length")),zt,ut=(zt=Le.getResponseHeader("Accept-Ranges"))&&zt==="bytes",bt=(zt=Le.getResponseHeader("Content-Encoding"))&&zt==="gzip",Ot=1024*1024;ut||(Ot=He);var Qt=(Ut,Cn)=>{if(Ut>Cn)throw new Error("invalid range ("+Ut+", "+Cn+") or no bytes requested!");if(Cn>He-1)throw new Error("only "+He+" bytes available! programmer error!");var pt=new XMLHttpRequest;if(pt.open("GET",v,!1),He!==Ot&&pt.setRequestHeader("Range","bytes="+Ut+"-"+Cn),pt.responseType="arraybuffer",pt.overrideMimeType&&pt.overrideMimeType("text/plain; charset=x-user-defined"),pt.send(null),!(pt.status>=200&&pt.status<300||pt.status===304))throw new Error("Couldn't load "+v+". Status: "+pt.status);return pt.response!==void 0?new Uint8Array(pt.response||[]):ge(pt.responseText||"",!0)},vi=this;vi.setDataGetter(Ut=>{var Cn=Ut*Ot,pt=(Ut+1)*Ot-1;if(pt=Math.min(pt,He-1),typeof vi.chunks[Ut]>"u"&&(vi.chunks[Ut]=Qt(Cn,pt)),typeof vi.chunks[Ut]>"u")throw new Error("doXHR failed!");return vi.chunks[Ut]}),(bt||!He)&&(Ot=He=1,He=this.getter(0).length,Ot=He,E("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=He,this._chunkSize=Ot,this.lengthKnown=!0},typeof XMLHttpRequest<"u"){if(!u)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var U=new I;Object.defineProperties(U,{length:{get:function(){return this.lengthKnown||this.cacheLength(),this._length}},chunkSize:{get:function(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}});var W={isDevice:!1,contents:U}}else var W={isDevice:!1,url:v};var ue=y.createFile(l,f,W,M,C);W.contents?ue.contents=W.contents:W.url&&(ue.contents=null,ue.url=W.url),Object.defineProperties(ue,{usedBytes:{get:function(){return this.contents.length}}});var Me={},Pe=Object.keys(ue.stream_ops);Pe.forEach(Ae=>{var Le=ue.stream_ops[Ae];Me[Ae]=function(){return y.forceLoadFile(ue),Le.apply(null,arguments)}});function ke(Ae,Le,He,zt,ut){var bt=Ae.node.contents;if(ut>=bt.length)return 0;var Ot=Math.min(bt.length-ut,zt);if(bt.slice)for(var Qt=0;Qt<Ot;Qt++)Le[He+Qt]=bt[ut+Qt];else for(var Qt=0;Qt<Ot;Qt++)Le[He+Qt]=bt.get(ut+Qt);return Ot}return Me.read=(Ae,Le,He,zt,ut)=>(y.forceLoadFile(ue),ke(Ae,Le,He,zt,ut)),Me.mmap=(Ae,Le,He,zt,ut)=>{y.forceLoadFile(ue);var bt=Se();if(!bt)throw new y.ErrnoError(48);return ke(Ae,V,bt,Le,He),{ptr:bt,allocated:!0}},ue.stream_ops=Me,ue},createPreloadedFile:(l,f,v,M,C,I,U,W,ue,Me)=>{var Pe=f?O.resolve(we.join2(l,f)):l;function ke(Ae){function Le(He){Me&&Me(),W||y.createDataFile(l,f,He,M,C,ue),I&&I(),st()}P.handledByPreloadPlugin(Ae,Pe,Le,()=>{U&&U(),st()})||Le(Ae)}Dt(),typeof v=="string"?Ze(v,Ae=>ke(Ae),U):ke(v)},indexedDB:()=>window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB,DB_NAME:()=>"EM_FS_"+window.location.pathname,DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:(l,f,v)=>{f=f||(()=>{}),v=v||(()=>{});var M=y.indexedDB();try{var C=M.open(y.DB_NAME(),y.DB_VERSION)}catch(I){return v(I)}C.onupgradeneeded=()=>{E("creating db");var I=C.result;I.createObjectStore(y.DB_STORE_NAME)},C.onsuccess=()=>{var I=C.result,U=I.transaction([y.DB_STORE_NAME],"readwrite"),W=U.objectStore(y.DB_STORE_NAME),ue=0,Me=0,Pe=l.length;function ke(){Me==0?f():v()}l.forEach(Ae=>{var Le=W.put(y.analyzePath(Ae).object.contents,Ae);Le.onsuccess=()=>{ue++,ue+Me==Pe&&ke()},Le.onerror=()=>{Me++,ue+Me==Pe&&ke()}}),U.onerror=v},C.onerror=v},loadFilesFromDB:(l,f,v)=>{f=f||(()=>{}),v=v||(()=>{});var M=y.indexedDB();try{var C=M.open(y.DB_NAME(),y.DB_VERSION)}catch(I){return v(I)}C.onupgradeneeded=v,C.onsuccess=()=>{var I=C.result;try{var U=I.transaction([y.DB_STORE_NAME],"readonly")}catch(Ae){v(Ae);return}var W=U.objectStore(y.DB_STORE_NAME),ue=0,Me=0,Pe=l.length;function ke(){Me==0?f():v()}l.forEach(Ae=>{var Le=W.get(Ae);Le.onsuccess=()=>{y.analyzePath(Ae).exists&&y.unlink(Ae),y.createDataFile(we.dirname(Ae),we.basename(Ae),Le.result,!0,!0,!0),ue++,ue+Me==Pe&&ke()},Le.onerror=()=>{Me++,ue+Me==Pe&&ke()}}),U.onerror=v},C.onerror=v}},Oe={DEFAULT_POLLMASK:5,calculateAt:function(l,f,v){if(we.isAbs(f))return f;var M;if(l===-100)M=y.cwd();else{var C=y.getStream(l);if(!C)throw new y.ErrnoError(8);M=C.path}if(f.length==0){if(!v)throw new y.ErrnoError(44);return M}return we.join2(M,f)},doStat:function(l,f,v){try{var M=l(f)}catch(C){if(C&&C.node&&we.normalize(f)!==we.normalize(y.getPath(C.node)))return-54;throw C}return $[v>>2]=M.dev,$[v+8>>2]=M.ino,$[v+12>>2]=M.mode,$[v+16>>2]=M.nlink,$[v+20>>2]=M.uid,$[v+24>>2]=M.gid,$[v+28>>2]=M.rdev,Te=[M.size>>>0,(re=M.size,+Math.abs(re)>=1?re>0?(Math.min(+Math.floor(re/4294967296),4294967295)|0)>>>0:~~+Math.ceil((re-+(~~re>>>0))/4294967296)>>>0:0)],$[v+40>>2]=Te[0],$[v+44>>2]=Te[1],$[v+48>>2]=4096,$[v+52>>2]=M.blocks,Te=[Math.floor(M.atime.getTime()/1e3)>>>0,(re=Math.floor(M.atime.getTime()/1e3),+Math.abs(re)>=1?re>0?(Math.min(+Math.floor(re/4294967296),4294967295)|0)>>>0:~~+Math.ceil((re-+(~~re>>>0))/4294967296)>>>0:0)],$[v+56>>2]=Te[0],$[v+60>>2]=Te[1],$[v+64>>2]=0,Te=[Math.floor(M.mtime.getTime()/1e3)>>>0,(re=Math.floor(M.mtime.getTime()/1e3),+Math.abs(re)>=1?re>0?(Math.min(+Math.floor(re/4294967296),4294967295)|0)>>>0:~~+Math.ceil((re-+(~~re>>>0))/4294967296)>>>0:0)],$[v+72>>2]=Te[0],$[v+76>>2]=Te[1],$[v+80>>2]=0,Te=[Math.floor(M.ctime.getTime()/1e3)>>>0,(re=Math.floor(M.ctime.getTime()/1e3),+Math.abs(re)>=1?re>0?(Math.min(+Math.floor(re/4294967296),4294967295)|0)>>>0:~~+Math.ceil((re-+(~~re>>>0))/4294967296)>>>0:0)],$[v+88>>2]=Te[0],$[v+92>>2]=Te[1],$[v+96>>2]=0,Te=[M.ino>>>0,(re=M.ino,+Math.abs(re)>=1?re>0?(Math.min(+Math.floor(re/4294967296),4294967295)|0)>>>0:~~+Math.ceil((re-+(~~re>>>0))/4294967296)>>>0:0)],$[v+104>>2]=Te[0],$[v+108>>2]=Te[1],0},doMsync:function(l,f,v,M,C){var I=B.slice(l,l+v);y.msync(f,I,C,v,M)},varargs:void 0,get:function(){Oe.varargs+=4;var l=$[Oe.varargs-4>>2];return l},getStr:function(l){var f=fe(l);return f},getStreamFromFD:function(l){var f=y.getStream(l);if(!f)throw new y.ErrnoError(8);return f}};function si(l,f,v){Oe.varargs=v;try{var M=Oe.getStreamFromFD(l);switch(f){case 0:{var C=Oe.get();if(C<0)return-28;var I;return I=y.createStream(M,C),I.fd}case 1:case 2:return 0;case 3:return M.flags;case 4:{var C=Oe.get();return M.flags|=C,0}case 5:{var C=Oe.get(),U=0;return G[C+U>>1]=2,0}case 6:case 7:return 0;case 16:case 8:return-28;case 9:return Ie(28),-1;default:return-28}}catch(W){if(typeof y>"u"||!(W instanceof y.ErrnoError))throw W;return-W.errno}}function ht(l,f,v){Oe.varargs=v;try{var M=Oe.getStreamFromFD(l);switch(f){case 21509:case 21505:return M.tty?0:-59;case 21510:case 21511:case 21512:case 21506:case 21507:case 21508:return M.tty?0:-59;case 21519:{if(!M.tty)return-59;var C=Oe.get();return $[C>>2]=0,0}case 21520:return M.tty?-28:-59;case 21531:{var C=Oe.get();return y.ioctl(M,f,C)}case 21523:return M.tty?0:-59;case 21524:return M.tty?0:-59;default:return-28}}catch(I){if(typeof y>"u"||!(I instanceof y.ErrnoError))throw I;return-I.errno}}function Un(l,f,v,M){Oe.varargs=M;try{f=Oe.getStr(f),f=Oe.calculateAt(l,f);var C=M?Oe.get():0;return y.open(f,v,C).fd}catch(I){if(typeof y>"u"||!(I instanceof y.ErrnoError))throw I;return-I.errno}}function an(l,f){try{return l=Oe.getStr(l),Oe.doStat(y.stat,l,f)}catch(v){if(typeof y>"u"||!(v instanceof y.ErrnoError))throw v;return-v.errno}}function ru(l,f,v){B.copyWithin(l,f,f+v)}function ts(l){Ge("OOM")}function aa(l){B.length,ts()}function ns(l,f){if(P.mainLoop.timingMode=l,P.mainLoop.timingValue=f,!P.mainLoop.func)return 1;if(P.mainLoop.running||(P.mainLoop.running=!0),l==0)P.mainLoop.scheduler=function(){var U=Math.max(0,P.mainLoop.tickStartTime+f-$r())|0;setTimeout(P.mainLoop.runner,U)},P.mainLoop.method="timeout";else if(l==1)P.mainLoop.scheduler=function(){P.requestAnimationFrame(P.mainLoop.runner)},P.mainLoop.method="rAF";else if(l==2){if(typeof setImmediate>"u"){var v=[],M="setimmediate",C=I=>{(I.data===M||I.data.target===M)&&(I.stopPropagation(),v.shift()())};addEventListener("message",C,!0),setImmediate=function(U){v.push(U),u?(t.setImmediates===void 0&&(t.setImmediates=[]),t.setImmediates.push(U),postMessage({target:M})):postMessage(M,"*")}}P.mainLoop.scheduler=function(){setImmediate(P.mainLoop.runner)},P.mainLoop.method="immediate"}return 0}var $r;c?$r=()=>{var l=process.hrtime();return l[0]*1e3+l[1]/1e6}:$r=()=>performance.now();function ou(l,f,v,M,C){H(!P.mainLoop.func,"emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters."),P.mainLoop.func=l,P.mainLoop.arg=M;var I=P.mainLoop.currentlyRunningMainloop;function U(){return!(I<P.mainLoop.currentlyRunningMainloop)}if(P.mainLoop.running=!1,P.mainLoop.runner=function(){if(!T){if(P.mainLoop.queue.length>0){var ue=Date.now(),Me=P.mainLoop.queue.shift();if(Me.func(Me.arg),P.mainLoop.remainingBlockers){var Pe=P.mainLoop.remainingBlockers,ke=Pe%1==0?Pe-1:Math.floor(Pe);Me.counted?P.mainLoop.remainingBlockers=ke:(ke=ke+.5,P.mainLoop.remainingBlockers=(8*Pe+ke)/9)}if(E('main loop blocker "'+Me.name+'" took '+(Date.now()-ue)+" ms"),P.mainLoop.updateStatus(),!U())return;setTimeout(P.mainLoop.runner,0);return}if(!!U()){if(P.mainLoop.currentFrameNumber=P.mainLoop.currentFrameNumber+1|0,P.mainLoop.timingMode==1&&P.mainLoop.timingValue>1&&P.mainLoop.currentFrameNumber%P.mainLoop.timingValue!=0){P.mainLoop.scheduler();return}else P.mainLoop.timingMode==0&&(P.mainLoop.tickStartTime=$r());P.mainLoop.runIter(l),U()&&(typeof SDL=="object"&&SDL.audio&&SDL.audio.queueNewAudioData&&SDL.audio.queueNewAudioData(),P.mainLoop.scheduler())}}},C||(f&&f>0?ns(0,1e3/f):ns(1,1),P.mainLoop.scheduler()),v)throw"unwind"}function R(l){if(!T)try{l()}catch(f){me(f)}}function X(l,f){return setTimeout(function(){R(l)},f)}function Z(l){Z.shown||(Z.shown={}),Z.shown[l]||(Z.shown[l]=1,c&&(l="warning: "+l),b(l))}var P={mainLoop:{running:!1,scheduler:null,method:"",currentlyRunningMainloop:0,func:null,arg:0,timingMode:0,timingValue:0,currentFrameNumber:0,queue:[],pause:function(){P.mainLoop.scheduler=null,P.mainLoop.currentlyRunningMainloop++},resume:function(){P.mainLoop.currentlyRunningMainloop++;var l=P.mainLoop.timingMode,f=P.mainLoop.timingValue,v=P.mainLoop.func;P.mainLoop.func=null,ou(v,0,!1,P.mainLoop.arg,!0),ns(l,f),P.mainLoop.scheduler()},updateStatus:function(){if(t.setStatus){var l=t.statusMessage||"Please wait...",f=P.mainLoop.remainingBlockers,v=P.mainLoop.expectedBlockers;f?f<v?t.setStatus(l+" ("+(v-f)+"/"+v+")"):t.setStatus(l):t.setStatus("")}},runIter:function(l){if(!T){if(t.preMainLoop){var f=t.preMainLoop();if(f===!1)return}R(l),t.postMainLoop&&t.postMainLoop()}}},isFullscreen:!1,pointerLock:!1,moduleContextCreatedCallbacks:[],workers:[],init:function(){if(t.preloadPlugins||(t.preloadPlugins=[]),P.initted)return;P.initted=!0;try{new Blob,P.hasBlobConstructor=!0}catch{P.hasBlobConstructor=!1,b("warning: no blob constructor, cannot create blobs with mimetypes")}P.BlobBuilder=typeof MozBlobBuilder<"u"?MozBlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:P.hasBlobConstructor?null:b("warning: no BlobBuilder"),P.URLObject=typeof window<"u"?window.URL?window.URL:window.webkitURL:void 0,!t.noImageDecoding&&typeof P.URLObject>"u"&&(b("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."),t.noImageDecoding=!0);var l={};l.canHandle=function(I){return!t.noImageDecoding&&/\.(jpg|jpeg|png|bmp)$/i.test(I)},l.handle=function(I,U,W,ue){var Me=null;if(P.hasBlobConstructor)try{Me=new Blob([I],{type:P.getMimetype(U)}),Me.size!==I.length&&(Me=new Blob([new Uint8Array(I).buffer],{type:P.getMimetype(U)}))}catch(Le){Z("Blob constructor present but fails: "+Le+"; falling back to blob builder")}if(!Me){var Pe=new P.BlobBuilder;Pe.append(new Uint8Array(I).buffer),Me=Pe.getBlob()}var ke=P.URLObject.createObjectURL(Me),Ae=new Image;Ae.onload=()=>{H(Ae.complete,"Image "+U+" could not be decoded");var Le=document.createElement("canvas");Le.width=Ae.width,Le.height=Ae.height;var He=Le.getContext("2d");He.drawImage(Ae,0,0),P.URLObject.revokeObjectURL(ke),W&&W(I)},Ae.onerror=Le=>{E("Image "+ke+" could not be decoded"),ue&&ue()},Ae.src=ke},t.preloadPlugins.push(l);var f={};f.canHandle=function(I){return!t.noAudioDecoding&&I.substr(-4)in{".ogg":1,".wav":1,".mp3":1}},f.handle=function(I,U,W,ue){var Me=!1;function Pe(zt){Me||(Me=!0,W&&W(I))}function ke(){Me||(Me=!0,new Audio,ue&&ue())}if(P.hasBlobConstructor){try{var Ae=new Blob([I],{type:P.getMimetype(U)})}catch{return ke()}var Le=P.URLObject.createObjectURL(Ae),He=new Audio;He.addEventListener("canplaythrough",()=>Pe(),!1),He.onerror=function(ut){if(Me)return;b("warning: browser could not fully decode audio "+U+", trying slower base64 approach");function bt(Ot){for(var Qt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",vi="=",Ut="",Cn=0,pt=0,su=0;su<Ot.length;su++)for(Cn=Cn<<8|Ot[su],pt+=8;pt>=6;){var Vv=Cn>>pt-6&63;pt-=6,Ut+=Qt[Vv]}return pt==2?(Ut+=Qt[(Cn&3)<<4],Ut+=vi+vi):pt==4&&(Ut+=Qt[(Cn&15)<<2],Ut+=vi),Ut}He.src="data:audio/x-"+U.substr(-3)+";base64,"+bt(I),Pe()},He.src=Le,X(function(){Pe()},1e4)}else return ke()},t.preloadPlugins.push(f);function v(){P.pointerLock=document.pointerLockElement===t.canvas||document.mozPointerLockElement===t.canvas||document.webkitPointerLockElement===t.canvas||document.msPointerLockElement===t.canvas}var M=t.canvas;M&&(M.requestPointerLock=M.requestPointerLock||M.mozRequestPointerLock||M.webkitRequestPointerLock||M.msRequestPointerLock||(()=>{}),M.exitPointerLock=document.exitPointerLock||document.mozExitPointerLock||document.webkitExitPointerLock||document.msExitPointerLock||(()=>{}),M.exitPointerLock=M.exitPointerLock.bind(document),document.addEventListener("pointerlockchange",v,!1),document.addEventListener("mozpointerlockchange",v,!1),document.addEventListener("webkitpointerlockchange",v,!1),document.addEventListener("mspointerlockchange",v,!1),t.elementPointerLock&&M.addEventListener("click",C=>{!P.pointerLock&&t.canvas.requestPointerLock&&(t.canvas.requestPointerLock(),C.preventDefault())},!1))},handledByPreloadPlugin:function(l,f,v,M){P.init();var C=!1;return t.preloadPlugins.forEach(function(I){C||I.canHandle(f)&&(I.handle(l,f,v,M),C=!0)}),C},createContext:function(l,f,v,M){if(f&&t.ctx&&l==t.canvas)return t.ctx;var C,I;if(f){var U={antialias:!1,alpha:!1,majorVersion:1};if(M)for(var W in M)U[W]=M[W];typeof GL<"u"&&(I=GL.createContext(l,U),I&&(C=GL.getContext(I).GLctx))}else C=l.getContext("2d");return C?(v&&(f||H(typeof GLctx>"u","cannot set in module if GLctx is used, but we are a non-GL context that would replace it"),t.ctx=C,f&&GL.makeContextCurrent(I),t.useWebGL=f,P.moduleContextCreatedCallbacks.forEach(function(ue){ue()}),P.init()),C):null},destroyContext:function(l,f,v){},fullscreenHandlersInstalled:!1,lockPointer:void 0,resizeCanvas:void 0,requestFullscreen:function(l,f){P.lockPointer=l,P.resizeCanvas=f,typeof P.lockPointer>"u"&&(P.lockPointer=!0),typeof P.resizeCanvas>"u"&&(P.resizeCanvas=!1);var v=t.canvas;function M(){P.isFullscreen=!1;var I=v.parentNode;(document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement)===I?(v.exitFullscreen=P.exitFullscreen,P.lockPointer&&v.requestPointerLock(),P.isFullscreen=!0,P.resizeCanvas?P.setFullscreenCanvasSize():P.updateCanvasDimensions(v)):(I.parentNode.insertBefore(v,I),I.parentNode.removeChild(I),P.resizeCanvas?P.setWindowedCanvasSize():P.updateCanvasDimensions(v)),t.onFullScreen&&t.onFullScreen(P.isFullscreen),t.onFullscreen&&t.onFullscreen(P.isFullscreen)}P.fullscreenHandlersInstalled||(P.fullscreenHandlersInstalled=!0,document.addEventListener("fullscreenchange",M,!1),document.addEventListener("mozfullscreenchange",M,!1),document.addEventListener("webkitfullscreenchange",M,!1),document.addEventListener("MSFullscreenChange",M,!1));var C=document.createElement("div");v.parentNode.insertBefore(C,v),C.appendChild(v),C.requestFullscreen=C.requestFullscreen||C.mozRequestFullScreen||C.msRequestFullscreen||(C.webkitRequestFullscreen?()=>C.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):null)||(C.webkitRequestFullScreen?()=>C.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):null),C.requestFullscreen()},exitFullscreen:function(){if(!P.isFullscreen)return!1;var l=document.exitFullscreen||document.cancelFullScreen||document.mozCancelFullScreen||document.msExitFullscreen||document.webkitCancelFullScreen||function(){};return l.apply(document,[]),!0},nextRAF:0,fakeRequestAnimationFrame:function(l){var f=Date.now();if(P.nextRAF===0)P.nextRAF=f+1e3/60;else for(;f+2>=P.nextRAF;)P.nextRAF+=1e3/60;var v=Math.max(P.nextRAF-f,0);setTimeout(l,v)},requestAnimationFrame:function(l){if(typeof requestAnimationFrame=="function"){requestAnimationFrame(l);return}var f=P.fakeRequestAnimationFrame;f(l)},safeSetTimeout:function(l){return X(l)},safeRequestAnimationFrame:function(l){return P.requestAnimationFrame(function(){R(l)})},getMimetype:function(l){return{jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",bmp:"image/bmp",ogg:"audio/ogg",wav:"audio/wav",mp3:"audio/mpeg"}[l.substr(l.lastIndexOf(".")+1)]},getUserMedia:function(l){window.getUserMedia||(window.getUserMedia=navigator.getUserMedia||navigator.mozGetUserMedia),window.getUserMedia(l)},getMovementX:function(l){return l.movementX||l.mozMovementX||l.webkitMovementX||0},getMovementY:function(l){return l.movementY||l.mozMovementY||l.webkitMovementY||0},getMouseWheelDelta:function(l){var f=0;switch(l.type){case"DOMMouseScroll":f=l.detail/3;break;case"mousewheel":f=l.wheelDelta/120;break;case"wheel":switch(f=l.deltaY,l.deltaMode){case 0:f/=100;break;case 1:f/=3;break;case 2:f*=80;break;default:throw"unrecognized mouse wheel delta mode: "+l.deltaMode}break;default:throw"unrecognized mouse wheel event: "+l.type}return f},mouseX:0,mouseY:0,mouseMovementX:0,mouseMovementY:0,touches:{},lastTouches:{},calculateMouseEvent:function(l){if(P.pointerLock)l.type!="mousemove"&&"mozMovementX"in l?P.mouseMovementX=P.mouseMovementY=0:(P.mouseMovementX=P.getMovementX(l),P.mouseMovementY=P.getMovementY(l)),typeof SDL<"u"?(P.mouseX=SDL.mouseX+P.mouseMovementX,P.mouseY=SDL.mouseY+P.mouseMovementY):(P.mouseX+=P.mouseMovementX,P.mouseY+=P.mouseMovementY);else{var f=t.canvas.getBoundingClientRect(),v=t.canvas.width,M=t.canvas.height,C=typeof window.scrollX<"u"?window.scrollX:window.pageXOffset,I=typeof window.scrollY<"u"?window.scrollY:window.pageYOffset;if(l.type==="touchstart"||l.type==="touchend"||l.type==="touchmove"){var U=l.touch;if(U===void 0)return;var W=U.pageX-(C+f.left),ue=U.pageY-(I+f.top);W=W*(v/f.width),ue=ue*(M/f.height);var Me={x:W,y:ue};if(l.type==="touchstart")P.lastTouches[U.identifier]=Me,P.touches[U.identifier]=Me;else if(l.type==="touchend"||l.type==="touchmove"){var Pe=P.touches[U.identifier];Pe||(Pe=Me),P.lastTouches[U.identifier]=Pe,P.touches[U.identifier]=Me}return}var ke=l.pageX-(C+f.left),Ae=l.pageY-(I+f.top);ke=ke*(v/f.width),Ae=Ae*(M/f.height),P.mouseMovementX=ke-P.mouseX,P.mouseMovementY=Ae-P.mouseY,P.mouseX=ke,P.mouseY=Ae}},resizeListeners:[],updateResizeListeners:function(){var l=t.canvas;P.resizeListeners.forEach(function(f){f(l.width,l.height)})},setCanvasSize:function(l,f,v){var M=t.canvas;P.updateCanvasDimensions(M,l,f),v||P.updateResizeListeners()},windowedWidth:0,windowedHeight:0,setFullscreenCanvasSize:function(){if(typeof SDL<"u"){var l=J[SDL.screen>>2];l=l|8388608,$[SDL.screen>>2]=l}P.updateCanvasDimensions(t.canvas),P.updateResizeListeners()},setWindowedCanvasSize:function(){if(typeof SDL<"u"){var l=J[SDL.screen>>2];l=l&-8388609,$[SDL.screen>>2]=l}P.updateCanvasDimensions(t.canvas),P.updateResizeListeners()},updateCanvasDimensions:function(l,f,v){f&&v?(l.widthNative=f,l.heightNative=v):(f=l.widthNative,v=l.heightNative);var M=f,C=v;if(t.forcedAspectRatio&&t.forcedAspectRatio>0&&(M/C<t.forcedAspectRatio?M=Math.round(C*t.forcedAspectRatio):C=Math.round(M/t.forcedAspectRatio)),(document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement)===l.parentNode&&typeof screen<"u"){var I=Math.min(screen.width/M,screen.height/C);M=Math.round(M*I),C=Math.round(C*I)}P.resizeCanvas?(l.width!=M&&(l.width=M),l.height!=C&&(l.height=C),typeof l.style<"u"&&(l.style.removeProperty("width"),l.style.removeProperty("height"))):(l.width!=f&&(l.width=f),l.height!=v&&(l.height=v),typeof l.style<"u"&&(M!=f||C!=v?(l.style.setProperty("width",M+"px","important"),l.style.setProperty("height",C+"px","important")):(l.style.removeProperty("width"),l.style.removeProperty("height"))))}};function ie(l,f){return Ce.handleSleep(v=>{var M=fe(l),C=fe(f);C=O.resolve(y.cwd(),C);var I=we.dirname(C);y.createPreloadedFile(I,we.basename(C),M,!0,!0,v,v,!1,!1,()=>y.mkdirTree(I))})}function ze(l){try{var f=Oe.getStreamFromFD(l);return y.close(f),0}catch(v){if(typeof y>"u"||!(v instanceof y.ErrnoError))throw v;return v.errno}}function Ue(l,f,v,M){for(var C=0,I=0;I<v;I++){var U=J[f>>2],W=J[f+4>>2];f+=8;var ue=y.read(l,V,U,W,M);if(ue<0)return-1;if(C+=ue,ue<W)break}return C}function We(l,f,v,M){try{var C=Oe.getStreamFromFD(l),I=Ue(C,f,v);return J[M>>2]=I,0}catch(U){if(typeof y>"u"||!(U instanceof y.ErrnoError))throw U;return U.errno}}function Ve(l,f){return f+2097152>>>0<4194305-!!l?(l>>>0)+f*4294967296:NaN}function tt(l,f,v,M,C){try{var I=Ve(f,v);if(isNaN(I))return 61;var U=Oe.getStreamFromFD(l);return y.llseek(U,I,M),Te=[U.position>>>0,(re=U.position,+Math.abs(re)>=1?re>0?(Math.min(+Math.floor(re/4294967296),4294967295)|0)>>>0:~~+Math.ceil((re-+(~~re>>>0))/4294967296)>>>0:0)],$[C>>2]=Te[0],$[C+4>>2]=Te[1],U.getdents&&I===0&&M===0&&(U.getdents=null),0}catch(W){if(typeof y>"u"||!(W instanceof y.ErrnoError))throw W;return W.errno}}function $e(l,f,v,M){for(var C=0,I=0;I<v;I++){var U=J[f>>2],W=J[f+4>>2];f+=8;var ue=y.write(l,V,U,W,M);if(ue<0)return-1;C+=ue}return C}function Ke(l,f,v,M){try{var C=Oe.getStreamFromFD(l),I=$e(C,f,v);return J[M>>2]=I,0}catch(U){if(typeof y>"u"||!(U instanceof y.ErrnoError))throw U;return U.errno}}function at(l){var f=t["_"+l];return f}function ai(l,f,v,M,C){var I={string:ut=>{var bt=0;if(ut!=null&&ut!==0){var Ot=(ut.length<<2)+1;bt=vr(Ot),oe(ut,bt,Ot)}return bt},array:ut=>{var bt=vr(ut.length);return ye(ut,bt),bt}};function U(ut){return f==="string"?fe(ut):f==="boolean"?Boolean(ut):ut}var W=at(l),ue=[],Me=0;if(M)for(var Pe=0;Pe<M.length;Pe++){var ke=I[v[Pe]];ke?(Me===0&&(Me=Rt()),ue[Pe]=ke(M[Pe])):ue[Pe]=M[Pe]}var Ae=Ce.currData,Le=W.apply(null,ue);function He(ut){return Me!==0&&Vi(Me),U(ut)}var zt=C&&C.async;return Ce.currData!=Ae?Ce.whenDone().then(He):(Le=He(Le),zt?Promise.resolve(Le):Le)}function Ui(l,f,v,M){v=v||[];var C=v.every(U=>U==="number"||U==="boolean"),I=f!=="string";return I&&C&&!M?at(l):function(){return ai(l,f,v,arguments,M)}}function Bn(l){try{return l()}catch(f){Ge(f)}}var Ce={State:{Normal:0,Unwinding:1,Rewinding:2,Disabled:3},state:0,StackSize:4096,currData:null,handleSleepReturnValue:0,exportCallStack:[],callStackNameToId:{},callStackIdToName:{},callStackId:0,asyncPromiseHandlers:null,sleepCallbacks:[],getCallStackId:function(l){var f=Ce.callStackNameToId[l];return f===void 0&&(f=Ce.callStackId++,Ce.callStackNameToId[l]=f,Ce.callStackIdToName[f]=l),f},instrumentWasmImports:function(l){var f=["env.invoke_*","env.emscripten_sleep","env.emscripten_wget","env.emscripten_wget_data","env.emscripten_idb_load","env.emscripten_idb_store","env.emscripten_idb_delete","env.emscripten_idb_exists","env.emscripten_idb_load_blob","env.emscripten_idb_store_blob","env.SDL_Delay","env.emscripten_scan_registers","env.emscripten_lazy_load_code","env.emscripten_fiber_swap","wasi_snapshot_preview1.fd_sync","env.__wasi_fd_sync","env._emval_await","env._dlopen_js","env.__asyncjs__*"].map(M=>M.split(".")[1]);for(var v in l)(function(M){var C=l[M];C.sig,typeof C=="function"&&(f.indexOf(M)>=0||M.startsWith("__asyncjs__"))})(v)},instrumentWasmExports:function(l){var f={};for(var v in l)(function(M){var C=l[M];typeof C=="function"?f[M]=function(){Ce.exportCallStack.push(M);try{return C.apply(null,arguments)}finally{if(!T){var I=Ce.exportCallStack.pop();H(I===M),Ce.maybeStopUnwind()}}}:f[M]=C})(v);return f},maybeStopUnwind:function(){Ce.currData&&Ce.state===Ce.State.Unwinding&&Ce.exportCallStack.length===0&&(Ce.state=Ce.State.Normal,Bn(Kr),typeof Fibers<"u"&&Fibers.trampoline())},whenDone:function(){return new Promise((l,f)=>{Ce.asyncPromiseHandlers={resolve:l,reject:f}})},allocateData:function(){var l=Bi(12+Ce.StackSize);return Ce.setDataHeader(l,l+12,Ce.StackSize),Ce.setDataRewindFunc(l),l},setDataHeader:function(l,f,v){$[l>>2]=f,$[l+4>>2]=f+v},setDataRewindFunc:function(l){var f=Ce.exportCallStack[0],v=Ce.getCallStackId(f);$[l+8>>2]=v},getDataRewindFunc:function(l){var f=$[l+8>>2],v=Ce.callStackIdToName[f],M=t.asm[v];return M},doRewind:function(l){var f=Ce.getDataRewindFunc(l);return f()},handleSleep:function(l){if(!T){if(Ce.state===Ce.State.Normal){var f=!1,v=!1;l(M=>{if(!T&&(Ce.handleSleepReturnValue=M||0,f=!0,!!v)){Ce.state=Ce.State.Rewinding,Bn(()=>la(Ce.currData)),typeof P<"u"&&P.mainLoop.func&&P.mainLoop.resume();var C,I=!1;try{C=Ce.doRewind(Ce.currData)}catch(ue){C=ue,I=!0}var U=!1;if(!Ce.currData){var W=Ce.asyncPromiseHandlers;W&&(Ce.asyncPromiseHandlers=null,(I?W.reject:W.resolve)(C),U=!0)}if(I&&!U)throw C}}),v=!0,f||(Ce.state=Ce.State.Unwinding,Ce.currData=Ce.allocateData(),typeof P<"u"&&P.mainLoop.func&&P.mainLoop.pause(),Bn(()=>jt(Ce.currData)))}else Ce.state===Ce.State.Rewinding?(Ce.state=Ce.State.Normal,Bn(is),Hn(Ce.currData),Ce.currData=null,Ce.sleepCallbacks.forEach(M=>R(M))):Ge("invalid state: "+Ce.state);return Ce.handleSleepReturnValue}},handleAsync:function(l){return Ce.handleSleep(f=>{l().then(f)})}},Qe=function(l,f,v,M){l||(l=this),this.parent=l,this.mount=l.mount,this.mounted=null,this.id=y.nextInode++,this.name=f,this.mode=v,this.node_ops={},this.stream_ops={},this.rdev=M},Vn=365,lt=146;Object.defineProperties(Qe.prototype,{read:{get:function(){return(this.mode&Vn)===Vn},set:function(l){l?this.mode|=Vn:this.mode&=~Vn}},write:{get:function(){return(this.mode&lt)===lt},set:function(l){l?this.mode|=lt:this.mode&=~lt}},isFolder:{get:function(){return y.isDir(this.mode)}},isDevice:{get:function(){return y.isChrdev(this.mode)}}}),y.FSNode=Qe,y.staticInit(),t.FS_createPath=y.createPath,t.FS_createDataFile=y.createDataFile,t.FS_createPreloadedFile=y.createPreloadedFile,t.FS_unlink=y.unlink,t.FS_createLazyFile=y.createLazyFile,t.FS_createDevice=y.createDevice,t.requestFullscreen=function(f,v){P.requestFullscreen(f,v)},t.requestAnimationFrame=function(f){P.requestAnimationFrame(f)},t.setCanvasSize=function(f,v,M){P.setCanvasSize(f,v,M)},t.pauseMainLoop=function(){P.mainLoop.pause()},t.resumeMainLoop=function(){P.mainLoop.resume()},t.getUserMedia=function(){P.getUserMedia()},t.createContext=function(f,v,M,C){return P.createContext(f,v,M,C)};var ln={l:ve,c:si,g:ht,h:Un,e:an,i:ru,k:aa,d:ie,a:ze,f:We,j:tt,b:Ke};pe(),t.___wasm_call_ctors=function(){return(t.___wasm_call_ctors=t.asm.n).apply(null,arguments)},t._version=function(){return(t._version=t.asm.o).apply(null,arguments)},t._create_file_info=function(){return(t._create_file_info=t.asm.p).apply(null,arguments)},t._free_file_info=function(){return(t._free_file_info=t.asm.q).apply(null,arguments)},t._read_frame=function(){return(t._read_frame=t.asm.r).apply(null,arguments)},t._is_keyframe=function(){return(t._is_keyframe=t.asm.s).apply(null,arguments)},t._find_previous_keyframe=function(){return(t._find_previous_keyframe=t.asm.t).apply(null,arguments)},t._frame_vertices=function(){return(t._frame_vertices=t.asm.u).apply(null,arguments)},t._frame_vertices_sz=function(){return(t._frame_vertices_sz=t.asm.v).apply(null,arguments)},t._frame_uvs_sz=function(){return(t._frame_uvs_sz=t.asm.w).apply(null,arguments)},t._frame_i=function(){return(t._frame_i=t.asm.x).apply(null,arguments)},t._frame_i_sz=function(){return(t._frame_i_sz=t.asm.y).apply(null,arguments)},t._frame_data_ptr=function(){return(t._frame_data_ptr=t.asm.z).apply(null,arguments)},t._frame_vp_offset=function(){return(t._frame_vp_offset=t.asm.A).apply(null,arguments)},t._frame_vp_copied=function(){return(t._frame_vp_copied=t.asm.B).apply(null,arguments)},t._frame_uvs_copied=function(){return(t._frame_uvs_copied=t.asm.C).apply(null,arguments)},t._frame_indices_copied=function(){return(t._frame_indices_copied=t.asm.D).apply(null,arguments)};var Hn=t._free=function(){return(Hn=t._free=t.asm.F).apply(null,arguments)},Bi=t._malloc=function(){return(Bi=t._malloc=t.asm.G).apply(null,arguments)},Zr=t.___errno_location=function(){return(Zr=t.___errno_location=t.asm.H).apply(null,arguments)},Rt=t.stackSave=function(){return(Rt=t.stackSave=t.asm.I).apply(null,arguments)},Vi=t.stackRestore=function(){return(Vi=t.stackRestore=t.asm.J).apply(null,arguments)},vr=t.stackAlloc=function(){return(vr=t.stackAlloc=t.asm.K).apply(null,arguments)},jt=t._asyncify_start_unwind=function(){return(jt=t._asyncify_start_unwind=t.asm.L).apply(null,arguments)},Kr=t._asyncify_stop_unwind=function(){return(Kr=t._asyncify_stop_unwind=t.asm.M).apply(null,arguments)},la=t._asyncify_start_rewind=function(){return(la=t._asyncify_start_rewind=t.asm.N).apply(null,arguments)},is=t._asyncify_stop_rewind=function(){return(is=t._asyncify_stop_rewind=t.asm.O).apply(null,arguments)};t.addRunDependency=Dt,t.removeRunDependency=st,t.FS_createPath=y.createPath,t.FS_createDataFile=y.createDataFile,t.FS_createPreloadedFile=y.createPreloadedFile,t.FS_createLazyFile=y.createLazyFile,t.FS_createDevice=y.createDevice,t.FS_unlink=y.unlink,t.ccall=ai,t.cwrap=Ui,t.FS=y;var ua;gt=function l(){ua||bd(),ua||(gt=l)};function bd(l){if(it>0||(Fe(),it>0))return;function f(){ua||(ua=!0,t.calledRun=!0,!T&&(Ne(),i(t),t.onRuntimeInitialized&&t.onRuntimeInitialized(),Ee()))}t.setStatus?(t.setStatus("Running..."),setTimeout(function(){setTimeout(function(){t.setStatus("")},1),f()},1)):f()}if(t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.pop()();return bd(),t.ready}})();const oi="number",nu="boolean",Zp="string";var zv=[],St={};async function aE(){await new Promise(function(n,e){try{St.onRuntimeInitialized=t=>{var i=St.ccall("version",[oi]);console.log(St),n(i)},sE(St)}catch(t){e(t)}}).then(n=>console.log("version.minor="+n)).catch(n=>console.error(n))}function lE(n,e){return St.ccall("create_file_info",nu,[Zp,Zp],[n,e])}async function uE(n,e){var t=!1;return await Oi(()=>lE(n,e),i=>t=i,i=>console.error(i)),zv=[n,e],t}function cE(){var n=St.ccall("free_file_info",nu);return zv.forEach(e=>Ov(e)),n}function Ov(n){let e=St.FS.analyzePath(n),t=e.parentPath;e.object.isFolder&&!e.isRoot?St.FS.rmdir(n):St.FS.unlink(n),St.FS.readdir(t).length>2||Ov(t)}function fE(n){return St.ccall("read_frame",nu,[oi],[n])}async function Kp(n){var e=!1;return await Oi(()=>fE(n),t=>e=t,t=>console.error(t)),e}function dE(n){return St.ccall("is_keyframe",nu,[oi],[n])}async function hE(n){var e=!1;return await Oi(()=>dE(n),t=>e=t,t=>console.error(t)),e}function pE(n){return St.ccall("find_previous_keyframe",oi,[oi],[n])}async function mE(n){var e=0;return await Oi(()=>pE(n),t=>e=t,t=>console.error(t)),e}function gE(){return St.ccall("frame_vertices_sz",oi)}async function vE(){var n=0;return await Oi(()=>gE(),e=>n=e,e=>console.error(e)),n}function _E(){return St.ccall("frame_uvs_sz",oi)}function yE(){return St.ccall("frame_i_sz",oi)}async function xE(){var n=0;return await Oi(()=>yE(),e=>n=e,e=>console.error(e)),n}async function wE(){var n=[];return await Oi(async function(){var e=await vE(),t=St.ccall("frame_vp_copied",oi);return new Float32Array(St.HEAP8.buffer,t,e/4)},e=>n=e,e=>console.error(e)),n}function SE(){var n=_E(),e=St.ccall("frame_uvs_copied",oi);return new Float32Array(St.HEAP8.buffer,e,n/4)}async function Qp(){var n=[];return await Oi(()=>SE(),e=>n=e,e=>console.error(e)),n}async function Jp(){var n=[];return await Oi(async function(){var e=await xE(),t=St.ccall("frame_indices_copied",oi);return new Uint16Array(St.HEAP8.buffer,t,e/2)},e=>n=e,e=>console.error(e)),n}async function Oi(n,e,t){await new Promise(function(i,r){try{var o=n();i(o)}catch(s){r(s)}}).then(i=>e(i)).catch(i=>t(i))}const ME="video",EE="__volo__tex";var pn,Nl=()=>{},Sd=!1,wf=30;function bE(){pn=document.createElement(ME),pn.id=EE}function TE(n,e){var t,i,r,o,s;pn.autoplay=(t=e==null?void 0:e.autoplay)!=null?t:!1,pn.muted=(i=e==null?void 0:e.muted)!=null?i:!0,pn.loop=(r=e==null?void 0:e.loop)!=null?r:!0,pn.preload=(o=e==null?void 0:e.preload)!=null?o:!0,pn.src=n,wf=(s=e==null?void 0:e.fps)!=null?s:wf}function CE(n){Nl=function(e,t){n(Math.trunc(t.mediaTime*wf)),Sd&&pn.requestVideoFrameCallback(Nl)}}function LE(){pn.play(),Sd=!0,pn.requestVideoFrameCallback(Nl)}function AE(){pn.pause(),Nl=()=>{},Sd=!1,pn.remove()}var Uv=()=>{},em,hc,pc,Ya=!1,Md=!1,mc=-1,ws=-1;async function PE(){await aE(),bE()}async function DE(n,e,t,i){await uE(n,e),TE(t,i),CE(async function(r){if(!!Md&&r!=ws){if(r!=ws+1&&console.warn("Frame jump from "+ws+" to "+r),Ya=await hE(r),!Ya){var o=await mE(r);o!=mc&&(console.warn("recovering key frame "+o),await Kp(o),hc=await Qp(),pc=await Jp(),mc=o)}await Kp(r),em=await wE(),Ya&&(hc=await Qp(),pc=await Jp(),mc=r),ws=r,Uv(r,Ya,em,hc,pc)}})}function RE(n){Uv=n}function kE(){LE(),Md=!0}function FE(){AE(),cE(),Md=!1,ws=-1}const WE=new j,jE=new j,XE=new j,qE=new j,YE=new j,$E=new ft;class IE{static createButton(e,t={}){const i=document.createElement("button");function r(){if(t.domOverlay===void 0){const h=document.createElement("div");h.style.display="none",document.body.appendChild(h);const x=document.createElementNS("http://www.w3.org/2000/svg","svg");x.setAttribute("width",38),x.setAttribute("height",38),x.style.position="absolute",x.style.right="20px",x.style.top="20px",x.addEventListener("click",function(){c.end()}),h.appendChild(x);const S=document.createElementNS("http://www.w3.org/2000/svg","path");S.setAttribute("d","M 12,12 L 28,28 M 28,12 12,28"),S.setAttribute("stroke","#fff"),S.setAttribute("stroke-width",2),x.appendChild(S),t.optionalFeatures===void 0&&(t.optionalFeatures=[]),t.optionalFeatures.push("dom-overlay"),t.domOverlay={root:h}}let c=null;async function d(h){h.addEventListener("end",p),e.xr.setReferenceSpaceType("local"),await e.xr.setSession(h),i.textContent="STOP AR",t.domOverlay.root.style.display="",c=h}function p(){c.removeEventListener("end",p),i.textContent="START AR",t.domOverlay.root.style.display="none",c=null}i.style.display="",i.style.cursor="pointer",i.style.left="calc(50% - 50px)",i.style.width="100px",i.textContent="START AR",i.onmouseenter=function(){i.style.opacity="1.0"},i.onmouseleave=function(){i.style.opacity="0.5"},i.onclick=function(){c===null?navigator.xr.requestSession("immersive-ar",t).then(d):c.end()}}function o(){i.style.display="",i.style.cursor="auto",i.style.left="calc(50% - 75px)",i.style.width="150px",i.onmouseenter=null,i.onmouseleave=null,i.onclick=null}function s(){o(),i.textContent="AR NOT SUPPORTED"}function a(c){o(),console.warn("Exception when trying to call xr.isSessionSupported",c),i.textContent="AR NOT ALLOWED"}function u(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return i.id="ARButton",i.style.display="none",u(i),navigator.xr.isSessionSupported("immersive-ar").then(function(c){c?r():s()}).catch(a),i;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",u(c),c}}}var Ed={exports:{}},iu={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NE=Ks.exports,zE=Symbol.for("react.element"),OE=Symbol.for("react.fragment"),UE=Object.prototype.hasOwnProperty,BE=NE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,VE={key:!0,ref:!0,__self:!0,__source:!0};function Bv(n,e,t){var i,r={},o=null,s=null;t!==void 0&&(o=""+t),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)UE.call(e,i)&&!VE.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:zE,type:n,key:o,ref:s,props:r,_owner:BE.current}}iu.Fragment=OE;iu.jsx=Bv;iu.jsxs=Bv;(function(n){n.exports=iu})(Ed);const Qi=Ed.exports.jsx,HE=Ed.exports.jsxs;var ui={},un={},tm;let An,Mi,go,gc,$a=null,vc=!1;const _c=3e4;var nm,im;function GE(){const n=new iE;Ks.exports.useEffect(()=>{go=new Rn(50,window.innerWidth/window.innerHeight,.1,1e3),go.position.z=5;const u=document.getElementById("threeCanvas");An=new Nv({canvas:u,antialias:!0,alpha:!0}),An.setSize(window.innerWidth,window.innerHeight),An.xr.enabled=!0,document.body.appendChild(An.domElement),new oE(go,An.domElement);const c=Ds();document.body.appendChild(c.dom);const d=()=>{An.setAnimationLoop(a)};gc=An.xr.getController(0),gc.addEventListener("select",e),n.add(gc),Mi=new pi(new wd(.15,.2,32).rotateX(-Math.PI/2),new Il),Mi.matrixAutoUpdate=!1,Mi.visible=!1,n.add(Mi);async function p(){await navigator.xr.isSessionSupported("immersive-ar")&&document.body.appendChild(IE.createButton(An,{requiredFeatures:["hit-test"]}))}p(),window.addEventListener("resize",t),d()},[]);function e(){Mi.visible&&(n.getObjectByName(ui.name)||i(),Mi.matrix.decompose(ui.position))}function t(){go.aspect=window.innerWidth/window.innerHeight,go.updateProjectionMatrix(),An.setSize(window.innerWidth,window.innerHeight)}async function i(){await PE(),tm=new rE(pn),pn.format=yv,un=new zi,un.name="vologram_geom",nm=new Float32Array(_c*3),un.setAttribute("position",new ti(nm,3)),im=new Float32Array(_c*2),un.setAttribute("uv",new ni(im,2));var u=new Uint16Array(_c);un.setIndex(new _d(u,1));const c=new Il({color:16777215,map:tm});ui=new pi(un,c),ui.name="Vologram",ui.scale.x=.5,ui.scale.y=.5,ui.scale.z=.5,n.add(ui),await DE("/src/assets/calif/header.vols","/src/assets/calif/sequence_0.vols","/src/assets/calif/output.mp4"),RE(function(d,p,h,x,S){un.index.array=S.slice(),un.attributes.position.array=h.slice(),un.attributes.uv.array=x.slice(),un.index.needsUpdate=!0,un.attributes.position.needsUpdate=!0,un.attributes.uv.needsUpdate=!0}),kE()}function r(){console.log(n),console.debug(un)}function o(){console.clear()}function s(){ui.remove(un),n.remove(ui),FE()}function a(u,c){if(c){const d=An.xr.getReferenceSpace(),p=An.xr.getSession();if(vc===!1&&(p.requestReferenceSpace("viewer").then(function(h){p.requestHitTestSource({space:h}).then(function(x){$a=x})}),p.addEventListener("end",function(){vc=!1,$a=null}),vc=!0),$a){const h=c.getHitTestResults($a);if(h.length){const x=h[0];Mi.visible=!0,Mi.matrix.fromArray(x.getPose(d).transform.matrix)}else Mi.visible=!1}}An.render(n,go)}return HE("div",{children:[Qi("button",{onClick:i,children:"Load OBJ"}),Qi("button",{onClick:r,children:"Print Scene"}),Qi("button",{onClick:s,children:"Stop Player"}),Qi("button",{onClick:o,children:"Clear Console"}),Qi("div",{children:Qi("canvas",{id:"threeCanvas"})})]})}yc.createRoot(document.getElementById("root")).render(Qi(r0.StrictMode,{children:Qi(GE,{})}));
