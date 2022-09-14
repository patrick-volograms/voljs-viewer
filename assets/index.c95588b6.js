(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();function Zv(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var $s={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zs=Symbol.for("react.element"),Kv=Symbol.for("react.portal"),Qv=Symbol.for("react.fragment"),Jv=Symbol.for("react.strict_mode"),e0=Symbol.for("react.profiler"),t0=Symbol.for("react.provider"),n0=Symbol.for("react.context"),i0=Symbol.for("react.forward_ref"),r0=Symbol.for("react.suspense"),o0=Symbol.for("react.memo"),s0=Symbol.for("react.lazy"),kd=Symbol.iterator;function a0(n){return n===null||typeof n!="object"?null:(n=kd&&n[kd]||n["@@iterator"],typeof n=="function"?n:null)}var fm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},dm=Object.assign,hm={};function Ko(n,e,t){this.props=n,this.context=e,this.refs=hm,this.updater=t||fm}Ko.prototype.isReactComponent={};Ko.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Ko.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function pm(){}pm.prototype=Ko.prototype;function Ef(n,e,t){this.props=n,this.context=e,this.refs=hm,this.updater=t||fm}var bf=Ef.prototype=new pm;bf.constructor=Ef;dm(bf,Ko.prototype);bf.isPureReactComponent=!0;var Fd=Array.isArray,mm=Object.prototype.hasOwnProperty,Tf={current:null},gm={key:!0,ref:!0,__self:!0,__source:!0};function vm(n,e,t){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)mm.call(e,i)&&!gm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];r.children=u}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Zs,type:n,key:o,ref:s,props:r,_owner:Tf.current}}function l0(n,e){return{$$typeof:Zs,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Cf(n){return typeof n=="object"&&n!==null&&n.$$typeof===Zs}function u0(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Id=/\/+/g;function uu(n,e){return typeof n=="object"&&n!==null&&n.key!=null?u0(""+n.key):e.toString(36)}function $a(n,e,t,i,r){var o=typeof n;(o==="undefined"||o==="boolean")&&(n=null);var s=!1;if(n===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(n.$$typeof){case Zs:case Kv:s=!0}}if(s)return s=n,r=r(s),n=i===""?"."+uu(s,0):i,Fd(r)?(t="",n!=null&&(t=n.replace(Id,"$&/")+"/"),$a(r,e,t,"",function(c){return c})):r!=null&&(Cf(r)&&(r=l0(r,t+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(Id,"$&/")+"/")+n)),e.push(r)),1;if(s=0,i=i===""?".":i+":",Fd(n))for(var a=0;a<n.length;a++){o=n[a];var u=i+uu(o,a);s+=$a(o,e,t,u,r)}else if(u=a0(n),typeof u=="function")for(n=u.call(n),a=0;!(o=n.next()).done;)o=o.value,u=i+uu(o,a++),s+=$a(o,e,t,u,r);else if(o==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function la(n,e,t){if(n==null)return n;var i=[],r=0;return $a(n,i,"","",function(o){return e.call(t,o,r++)}),i}function c0(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var sn={current:null},Za={transition:null},f0={ReactCurrentDispatcher:sn,ReactCurrentBatchConfig:Za,ReactCurrentOwner:Tf};$e.Children={map:la,forEach:function(n,e,t){la(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return la(n,function(){e++}),e},toArray:function(n){return la(n,function(e){return e})||[]},only:function(n){if(!Cf(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};$e.Component=Ko;$e.Fragment=Qv;$e.Profiler=e0;$e.PureComponent=Ef;$e.StrictMode=Jv;$e.Suspense=r0;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=f0;$e.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=dm({},n.props),r=n.key,o=n.ref,s=n._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Tf.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(u in e)mm.call(e,u)&&!gm.hasOwnProperty(u)&&(i[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)i.children=t;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Zs,type:n.type,key:r,ref:o,props:i,_owner:s}};$e.createContext=function(n){return n={$$typeof:n0,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:t0,_context:n},n.Consumer=n};$e.createElement=vm;$e.createFactory=function(n){var e=vm.bind(null,n);return e.type=n,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(n){return{$$typeof:i0,render:n}};$e.isValidElement=Cf;$e.lazy=function(n){return{$$typeof:s0,_payload:{_status:-1,_result:n},_init:c0}};$e.memo=function(n,e){return{$$typeof:o0,type:n,compare:e===void 0?null:e}};$e.startTransition=function(n){var e=Za.transition;Za.transition={};try{n()}finally{Za.transition=e}};$e.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};$e.useCallback=function(n,e){return sn.current.useCallback(n,e)};$e.useContext=function(n){return sn.current.useContext(n)};$e.useDebugValue=function(){};$e.useDeferredValue=function(n){return sn.current.useDeferredValue(n)};$e.useEffect=function(n,e){return sn.current.useEffect(n,e)};$e.useId=function(){return sn.current.useId()};$e.useImperativeHandle=function(n,e,t){return sn.current.useImperativeHandle(n,e,t)};$e.useInsertionEffect=function(n,e){return sn.current.useInsertionEffect(n,e)};$e.useLayoutEffect=function(n,e){return sn.current.useLayoutEffect(n,e)};$e.useMemo=function(n,e){return sn.current.useMemo(n,e)};$e.useReducer=function(n,e,t){return sn.current.useReducer(n,e,t)};$e.useRef=function(n){return sn.current.useRef(n)};$e.useState=function(n){return sn.current.useState(n)};$e.useSyncExternalStore=function(n,e,t){return sn.current.useSyncExternalStore(n,e,t)};$e.useTransition=function(){return sn.current.useTransition()};$e.version="18.2.0";(function(n){n.exports=$e})($s);const d0=Zv($s.exports);var wc={},_m={exports:{}},Cn={},ym={exports:{}},xm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(V,B){var G=V.length;V.push(B);e:for(;0<G;){var Z=G-1>>>1,ee=V[Z];if(0<r(ee,B))V[Z]=B,V[G]=ee,G=Z;else break e}}function t(V){return V.length===0?null:V[0]}function i(V){if(V.length===0)return null;var B=V[0],G=V.pop();if(G!==B){V[0]=G;e:for(var Z=0,ee=V.length,pe=ee>>>1;Z<pe;){var Se=2*(Z+1)-1,Re=V[Se],ne=Se+1,qe=V[ne];if(0>r(Re,G))ne<ee&&0>r(qe,Re)?(V[Z]=qe,V[ne]=G,Z=ne):(V[Z]=Re,V[Se]=G,Z=Se);else if(ne<ee&&0>r(qe,G))V[Z]=qe,V[ne]=G,Z=ne;else break e}}return B}function r(V,B){var G=V.sortIndex-B.sortIndex;return G!==0?G:V.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;n.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();n.unstable_now=function(){return s.now()-a}}var u=[],c=[],d=1,p=null,h=3,x=!1,M=!1,g=!1,m=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(V){for(var B=t(c);B!==null;){if(B.callback===null)i(c);else if(B.startTime<=V)i(c),B.sortIndex=B.expirationTime,e(u,B);else break;B=t(c)}}function b(V){if(g=!1,E(V),!M)if(t(u)!==null)M=!0,Q(A);else{var B=t(c);B!==null&&oe(b,B.startTime-V)}}function A(V,B){M=!1,g&&(g=!1,y(T),T=-1),x=!0;var G=h;try{for(E(B),p=t(u);p!==null&&(!(p.expirationTime>B)||V&&!Y());){var Z=p.callback;if(typeof Z=="function"){p.callback=null,h=p.priorityLevel;var ee=Z(p.expirationTime<=B);B=n.unstable_now(),typeof ee=="function"?p.callback=ee:p===t(u)&&i(u),E(B)}else i(u);p=t(u)}if(p!==null)var pe=!0;else{var Se=t(c);Se!==null&&oe(b,Se.startTime-B),pe=!1}return pe}finally{p=null,h=G,x=!1}}var R=!1,N=null,T=-1,I=5,H=-1;function Y(){return!(n.unstable_now()-H<I)}function ce(){if(N!==null){var V=n.unstable_now();H=V;var B=!0;try{B=N(!0,V)}finally{B?de():(R=!1,N=null)}}else R=!1}var de;if(typeof w=="function")de=function(){w(ce)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,ae=q.port2;q.port1.onmessage=ce,de=function(){ae.postMessage(null)}}else de=function(){m(ce,0)};function Q(V){N=V,R||(R=!0,de())}function oe(V,B){T=m(function(){V(n.unstable_now())},B)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(V){V.callback=null},n.unstable_continueExecution=function(){M||x||(M=!0,Q(A))},n.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<V?Math.floor(1e3/V):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(u)},n.unstable_next=function(V){switch(h){case 1:case 2:case 3:var B=3;break;default:B=h}var G=h;h=B;try{return V()}finally{h=G}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(V,B){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var G=h;h=V;try{return B()}finally{h=G}},n.unstable_scheduleCallback=function(V,B,G){var Z=n.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?Z+G:Z):G=Z,V){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=G+ee,V={id:d++,callback:B,priorityLevel:V,startTime:G,expirationTime:ee,sortIndex:-1},G>Z?(V.sortIndex=G,e(c,V),t(u)===null&&V===t(c)&&(g?(y(T),T=-1):g=!0,oe(b,G-Z))):(V.sortIndex=ee,e(u,V),M||x||(M=!0,Q(A))),V},n.unstable_shouldYield=Y,n.unstable_wrapCallback=function(V){var B=h;return function(){var G=h;h=B;try{return V.apply(this,arguments)}finally{h=G}}}})(xm);(function(n){n.exports=xm})(ym);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wm=$s.exports,Tn=ym.exports;function fe(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Sm=new Set,Ps={};function Xr(n,e){Uo(n,e),Uo(n+"Capture",e)}function Uo(n,e){for(Ps[n]=e,n=0;n<e.length;n++)Sm.add(e[n])}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sc=Object.prototype.hasOwnProperty,h0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Nd={},zd={};function p0(n){return Sc.call(zd,n)?!0:Sc.call(Nd,n)?!1:h0.test(n)?zd[n]=!0:(Nd[n]=!0,!1)}function m0(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function g0(n,e,t,i){if(e===null||typeof e>"u"||m0(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function an(n,e,t,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){jt[n]=new an(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];jt[e]=new an(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){jt[n]=new an(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){jt[n]=new an(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){jt[n]=new an(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){jt[n]=new an(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){jt[n]=new an(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){jt[n]=new an(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){jt[n]=new an(n,5,!1,n.toLowerCase(),null,!1,!1)});var Af=/[\-:]([a-z])/g;function Lf(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Af,Lf);jt[e]=new an(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Af,Lf);jt[e]=new an(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Af,Lf);jt[e]=new an(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){jt[n]=new an(n,1,!1,n.toLowerCase(),null,!1,!1)});jt.xlinkHref=new an("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){jt[n]=new an(n,1,!1,n.toLowerCase(),null,!0,!0)});function Pf(n,e,t,i){var r=jt.hasOwnProperty(e)?jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(g0(e,t,r,i)&&(t=null),i||r===null?p0(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Oi=wm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ua=Symbol.for("react.element"),_o=Symbol.for("react.portal"),yo=Symbol.for("react.fragment"),Df=Symbol.for("react.strict_mode"),Mc=Symbol.for("react.profiler"),Mm=Symbol.for("react.provider"),Em=Symbol.for("react.context"),Rf=Symbol.for("react.forward_ref"),Ec=Symbol.for("react.suspense"),bc=Symbol.for("react.suspense_list"),kf=Symbol.for("react.memo"),Ki=Symbol.for("react.lazy"),bm=Symbol.for("react.offscreen"),Od=Symbol.iterator;function is(n){return n===null||typeof n!="object"?null:(n=Od&&n[Od]||n["@@iterator"],typeof n=="function"?n:null)}var wt=Object.assign,cu;function ps(n){if(cu===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);cu=e&&e[1]||""}return`
`+cu+n}var fu=!1;function du(n,e){if(!n||fu)return"";fu=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var u=`
`+r[s].replace(" at new "," at ");return n.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",n.displayName)),u}while(1<=s&&0<=a);break}}}finally{fu=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?ps(n):""}function v0(n){switch(n.tag){case 5:return ps(n.type);case 16:return ps("Lazy");case 13:return ps("Suspense");case 19:return ps("SuspenseList");case 0:case 2:case 15:return n=du(n.type,!1),n;case 11:return n=du(n.type.render,!1),n;case 1:return n=du(n.type,!0),n;default:return""}}function Tc(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case yo:return"Fragment";case _o:return"Portal";case Mc:return"Profiler";case Df:return"StrictMode";case Ec:return"Suspense";case bc:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Em:return(n.displayName||"Context")+".Consumer";case Mm:return(n._context.displayName||"Context")+".Provider";case Rf:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case kf:return e=n.displayName||null,e!==null?e:Tc(n.type)||"Memo";case Ki:e=n._payload,n=n._init;try{return Tc(n(e))}catch{}}return null}function _0(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tc(e);case 8:return e===Df?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Tm(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function y0(n){var e=Tm(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,o=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function ca(n){n._valueTracker||(n._valueTracker=y0(n))}function Cm(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Tm(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function ul(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Cc(n,e){var t=e.checked;return wt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:n._wrapperState.initialChecked})}function Ud(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=hr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Am(n,e){e=e.checked,e!=null&&Pf(n,"checked",e,!1)}function Ac(n,e){Am(n,e);var t=hr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Lc(n,e.type,t):e.hasOwnProperty("defaultValue")&&Lc(n,e.type,hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Bd(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Lc(n,e,t){(e!=="number"||ul(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var ms=Array.isArray;function Do(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+hr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Pc(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(fe(91));return wt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Vd(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(fe(92));if(ms(t)){if(1<t.length)throw Error(fe(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:hr(t)}}function Lm(n,e){var t=hr(e.value),i=hr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Hd(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Pm(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Dc(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Pm(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var fa,Dm=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(fa=fa||document.createElement("div"),fa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=fa.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Ds(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var xs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},x0=["Webkit","ms","Moz","O"];Object.keys(xs).forEach(function(n){x0.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),xs[e]=xs[n]})});function Rm(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||xs.hasOwnProperty(n)&&xs[n]?(""+e).trim():e+"px"}function km(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Rm(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var w0=wt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rc(n,e){if(e){if(w0[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(fe(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(fe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(fe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(fe(62))}}function kc(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fc=null;function Ff(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ic=null,Ro=null,ko=null;function Gd(n){if(n=Js(n)){if(typeof Ic!="function")throw Error(fe(280));var e=n.stateNode;e&&(e=Bl(e),Ic(n.stateNode,n.type,e))}}function Fm(n){Ro?ko?ko.push(n):ko=[n]:Ro=n}function Im(){if(Ro){var n=Ro,e=ko;if(ko=Ro=null,Gd(n),e)for(n=0;n<e.length;n++)Gd(e[n])}}function Nm(n,e){return n(e)}function zm(){}var hu=!1;function Om(n,e,t){if(hu)return n(e,t);hu=!0;try{return Nm(n,e,t)}finally{hu=!1,(Ro!==null||ko!==null)&&(zm(),Im())}}function Rs(n,e){var t=n.stateNode;if(t===null)return null;var i=Bl(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(fe(231,e,typeof t));return t}var Nc=!1;if(Fi)try{var rs={};Object.defineProperty(rs,"passive",{get:function(){Nc=!0}}),window.addEventListener("test",rs,rs),window.removeEventListener("test",rs,rs)}catch{Nc=!1}function S0(n,e,t,i,r,o,s,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(d){this.onError(d)}}var ws=!1,cl=null,fl=!1,zc=null,M0={onError:function(n){ws=!0,cl=n}};function E0(n,e,t,i,r,o,s,a,u){ws=!1,cl=null,S0.apply(M0,arguments)}function b0(n,e,t,i,r,o,s,a,u){if(E0.apply(this,arguments),ws){if(ws){var c=cl;ws=!1,cl=null}else throw Error(fe(198));fl||(fl=!0,zc=c)}}function qr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Um(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Wd(n){if(qr(n)!==n)throw Error(fe(188))}function T0(n){var e=n.alternate;if(!e){if(e=qr(n),e===null)throw Error(fe(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===t)return Wd(r),n;if(o===i)return Wd(r),e;o=o.sibling}throw Error(fe(188))}if(t.return!==i.return)t=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===t){s=!0,t=r,i=o;break}if(a===i){s=!0,i=r,t=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===t){s=!0,t=o,i=r;break}if(a===i){s=!0,i=o,t=r;break}a=a.sibling}if(!s)throw Error(fe(189))}}if(t.alternate!==i)throw Error(fe(190))}if(t.tag!==3)throw Error(fe(188));return t.stateNode.current===t?n:e}function Bm(n){return n=T0(n),n!==null?Vm(n):null}function Vm(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Vm(n);if(e!==null)return e;n=n.sibling}return null}var Hm=Tn.unstable_scheduleCallback,jd=Tn.unstable_cancelCallback,C0=Tn.unstable_shouldYield,A0=Tn.unstable_requestPaint,Et=Tn.unstable_now,L0=Tn.unstable_getCurrentPriorityLevel,If=Tn.unstable_ImmediatePriority,Gm=Tn.unstable_UserBlockingPriority,dl=Tn.unstable_NormalPriority,P0=Tn.unstable_LowPriority,Wm=Tn.unstable_IdlePriority,Nl=null,mi=null;function D0(n){if(mi&&typeof mi.onCommitFiberRoot=="function")try{mi.onCommitFiberRoot(Nl,n,void 0,(n.current.flags&128)===128)}catch{}}var Qn=Math.clz32?Math.clz32:F0,R0=Math.log,k0=Math.LN2;function F0(n){return n>>>=0,n===0?32:31-(R0(n)/k0|0)|0}var da=64,ha=4194304;function gs(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function hl(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,o=n.pingedLanes,s=t&268435455;if(s!==0){var a=s&~r;a!==0?i=gs(a):(o&=s,o!==0&&(i=gs(o)))}else s=t&~r,s!==0?i=gs(s):o!==0&&(i=gs(o));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if((i&4)!==0&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Qn(e),r=1<<t,i|=n[t],e&=~r;return i}function I0(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function N0(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,o=n.pendingLanes;0<o;){var s=31-Qn(o),a=1<<s,u=r[s];u===-1?((a&t)===0||(a&i)!==0)&&(r[s]=I0(a,e)):u<=e&&(n.expiredLanes|=a),o&=~a}}function Oc(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function jm(){var n=da;return da<<=1,(da&4194240)===0&&(da=64),n}function pu(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Ks(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Qn(e),n[e]=t}function z0(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Qn(t),o=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~o}}function Nf(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Qn(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var it=0;function Xm(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var qm,zf,Ym,$m,Zm,Uc=!1,pa=[],rr=null,or=null,sr=null,ks=new Map,Fs=new Map,er=[],O0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xd(n,e){switch(n){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":ks.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fs.delete(e.pointerId)}}function os(n,e,t,i,r,o){return n===null||n.nativeEvent!==o?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=Js(e),e!==null&&zf(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function U0(n,e,t,i,r){switch(e){case"focusin":return rr=os(rr,n,e,t,i,r),!0;case"dragenter":return or=os(or,n,e,t,i,r),!0;case"mouseover":return sr=os(sr,n,e,t,i,r),!0;case"pointerover":var o=r.pointerId;return ks.set(o,os(ks.get(o)||null,n,e,t,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Fs.set(o,os(Fs.get(o)||null,n,e,t,i,r)),!0}return!1}function Km(n){var e=Tr(n.target);if(e!==null){var t=qr(e);if(t!==null){if(e=t.tag,e===13){if(e=Um(t),e!==null){n.blockedOn=e,Zm(n.priority,function(){Ym(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ka(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Bc(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Fc=i,t.target.dispatchEvent(i),Fc=null}else return e=Js(t),e!==null&&zf(e),n.blockedOn=t,!1;e.shift()}return!0}function qd(n,e,t){Ka(n)&&t.delete(e)}function B0(){Uc=!1,rr!==null&&Ka(rr)&&(rr=null),or!==null&&Ka(or)&&(or=null),sr!==null&&Ka(sr)&&(sr=null),ks.forEach(qd),Fs.forEach(qd)}function ss(n,e){n.blockedOn===e&&(n.blockedOn=null,Uc||(Uc=!0,Tn.unstable_scheduleCallback(Tn.unstable_NormalPriority,B0)))}function Is(n){function e(r){return ss(r,n)}if(0<pa.length){ss(pa[0],n);for(var t=1;t<pa.length;t++){var i=pa[t];i.blockedOn===n&&(i.blockedOn=null)}}for(rr!==null&&ss(rr,n),or!==null&&ss(or,n),sr!==null&&ss(sr,n),ks.forEach(e),Fs.forEach(e),t=0;t<er.length;t++)i=er[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<er.length&&(t=er[0],t.blockedOn===null);)Km(t),t.blockedOn===null&&er.shift()}var Fo=Oi.ReactCurrentBatchConfig,pl=!0;function V0(n,e,t,i){var r=it,o=Fo.transition;Fo.transition=null;try{it=1,Of(n,e,t,i)}finally{it=r,Fo.transition=o}}function H0(n,e,t,i){var r=it,o=Fo.transition;Fo.transition=null;try{it=4,Of(n,e,t,i)}finally{it=r,Fo.transition=o}}function Of(n,e,t,i){if(pl){var r=Bc(n,e,t,i);if(r===null)Eu(n,e,i,ml,t),Xd(n,i);else if(U0(r,n,e,t,i))i.stopPropagation();else if(Xd(n,i),e&4&&-1<O0.indexOf(n)){for(;r!==null;){var o=Js(r);if(o!==null&&qm(o),o=Bc(n,e,t,i),o===null&&Eu(n,e,i,ml,t),o===r)break;r=o}r!==null&&i.stopPropagation()}else Eu(n,e,i,null,t)}}var ml=null;function Bc(n,e,t,i){if(ml=null,n=Ff(i),n=Tr(n),n!==null)if(e=qr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Um(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return ml=n,null}function Qm(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(L0()){case If:return 1;case Gm:return 4;case dl:case P0:return 16;case Wm:return 536870912;default:return 16}default:return 16}}var nr=null,Uf=null,Qa=null;function Jm(){if(Qa)return Qa;var n,e=Uf,t=e.length,i,r="value"in nr?nr.value:nr.textContent,o=r.length;for(n=0;n<t&&e[n]===r[n];n++);var s=t-n;for(i=1;i<=s&&e[t-i]===r[o-i];i++);return Qa=r.slice(n,1<i?1-i:void 0)}function Ja(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function ma(){return!0}function Yd(){return!1}function An(n){function e(t,i,r,o,s){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ma:Yd,this.isPropagationStopped=Yd,this}return wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ma)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ma)},persist:function(){},isPersistent:ma}),e}var Qo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bf=An(Qo),Qs=wt({},Qo,{view:0,detail:0}),G0=An(Qs),mu,gu,as,zl=wt({},Qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vf,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==as&&(as&&n.type==="mousemove"?(mu=n.screenX-as.screenX,gu=n.screenY-as.screenY):gu=mu=0,as=n),mu)},movementY:function(n){return"movementY"in n?n.movementY:gu}}),$d=An(zl),W0=wt({},zl,{dataTransfer:0}),j0=An(W0),X0=wt({},Qs,{relatedTarget:0}),vu=An(X0),q0=wt({},Qo,{animationName:0,elapsedTime:0,pseudoElement:0}),Y0=An(q0),$0=wt({},Qo,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Z0=An($0),K0=wt({},Qo,{data:0}),Zd=An(K0),Q0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},J0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},e_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function t_(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=e_[n])?!!e[n]:!1}function Vf(){return t_}var n_=wt({},Qs,{key:function(n){if(n.key){var e=Q0[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Ja(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?J0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vf,charCode:function(n){return n.type==="keypress"?Ja(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ja(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),i_=An(n_),r_=wt({},zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kd=An(r_),o_=wt({},Qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vf}),s_=An(o_),a_=wt({},Qo,{propertyName:0,elapsedTime:0,pseudoElement:0}),l_=An(a_),u_=wt({},zl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),c_=An(u_),f_=[9,13,27,32],Hf=Fi&&"CompositionEvent"in window,Ss=null;Fi&&"documentMode"in document&&(Ss=document.documentMode);var d_=Fi&&"TextEvent"in window&&!Ss,eg=Fi&&(!Hf||Ss&&8<Ss&&11>=Ss),Qd=String.fromCharCode(32),Jd=!1;function tg(n,e){switch(n){case"keyup":return f_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ng(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var xo=!1;function h_(n,e){switch(n){case"compositionend":return ng(e);case"keypress":return e.which!==32?null:(Jd=!0,Qd);case"textInput":return n=e.data,n===Qd&&Jd?null:n;default:return null}}function p_(n,e){if(xo)return n==="compositionend"||!Hf&&tg(n,e)?(n=Jm(),Qa=Uf=nr=null,xo=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return eg&&e.locale!=="ko"?null:e.data;default:return null}}var m_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eh(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!m_[n.type]:e==="textarea"}function ig(n,e,t,i){Fm(i),e=gl(e,"onChange"),0<e.length&&(t=new Bf("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Ms=null,Ns=null;function g_(n){pg(n,0)}function Ol(n){var e=Mo(n);if(Cm(e))return n}function v_(n,e){if(n==="change")return e}var rg=!1;if(Fi){var _u;if(Fi){var yu="oninput"in document;if(!yu){var th=document.createElement("div");th.setAttribute("oninput","return;"),yu=typeof th.oninput=="function"}_u=yu}else _u=!1;rg=_u&&(!document.documentMode||9<document.documentMode)}function nh(){Ms&&(Ms.detachEvent("onpropertychange",og),Ns=Ms=null)}function og(n){if(n.propertyName==="value"&&Ol(Ns)){var e=[];ig(e,Ns,n,Ff(n)),Om(g_,e)}}function __(n,e,t){n==="focusin"?(nh(),Ms=e,Ns=t,Ms.attachEvent("onpropertychange",og)):n==="focusout"&&nh()}function y_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ol(Ns)}function x_(n,e){if(n==="click")return Ol(e)}function w_(n,e){if(n==="input"||n==="change")return Ol(e)}function S_(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ii=typeof Object.is=="function"?Object.is:S_;function zs(n,e){if(ii(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Sc.call(e,r)||!ii(n[r],e[r]))return!1}return!0}function ih(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function rh(n,e){var t=ih(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ih(t)}}function sg(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?sg(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function ag(){for(var n=window,e=ul();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=ul(n.document)}return e}function Gf(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function M_(n){var e=ag(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&sg(t.ownerDocument.documentElement,t)){if(i!==null&&Gf(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!n.extend&&o>i&&(r=i,i=o,o=r),r=rh(t,o);var s=rh(t,i);r&&s&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==s.node||n.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),o>i?(n.addRange(e),n.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var E_=Fi&&"documentMode"in document&&11>=document.documentMode,wo=null,Vc=null,Es=null,Hc=!1;function oh(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Hc||wo==null||wo!==ul(i)||(i=wo,"selectionStart"in i&&Gf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Es&&zs(Es,i)||(Es=i,i=gl(Vc,"onSelect"),0<i.length&&(e=new Bf("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=wo)))}function ga(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var So={animationend:ga("Animation","AnimationEnd"),animationiteration:ga("Animation","AnimationIteration"),animationstart:ga("Animation","AnimationStart"),transitionend:ga("Transition","TransitionEnd")},xu={},lg={};Fi&&(lg=document.createElement("div").style,"AnimationEvent"in window||(delete So.animationend.animation,delete So.animationiteration.animation,delete So.animationstart.animation),"TransitionEvent"in window||delete So.transitionend.transition);function Ul(n){if(xu[n])return xu[n];if(!So[n])return n;var e=So[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in lg)return xu[n]=e[t];return n}var ug=Ul("animationend"),cg=Ul("animationiteration"),fg=Ul("animationstart"),dg=Ul("transitionend"),hg=new Map,sh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mr(n,e){hg.set(n,e),Xr(e,[n])}for(var wu=0;wu<sh.length;wu++){var Su=sh[wu],b_=Su.toLowerCase(),T_=Su[0].toUpperCase()+Su.slice(1);mr(b_,"on"+T_)}mr(ug,"onAnimationEnd");mr(cg,"onAnimationIteration");mr(fg,"onAnimationStart");mr("dblclick","onDoubleClick");mr("focusin","onFocus");mr("focusout","onBlur");mr(dg,"onTransitionEnd");Uo("onMouseEnter",["mouseout","mouseover"]);Uo("onMouseLeave",["mouseout","mouseover"]);Uo("onPointerEnter",["pointerout","pointerover"]);Uo("onPointerLeave",["pointerout","pointerover"]);Xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),C_=new Set("cancel close invalid load scroll toggle".split(" ").concat(vs));function ah(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,b0(i,e,void 0,n),n.currentTarget=null}function pg(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==o&&r.isPropagationStopped())break e;ah(r,a,c),o=u}else for(s=0;s<i.length;s++){if(a=i[s],u=a.instance,c=a.currentTarget,a=a.listener,u!==o&&r.isPropagationStopped())break e;ah(r,a,c),o=u}}}if(fl)throw n=zc,fl=!1,zc=null,n}function ut(n,e){var t=e[qc];t===void 0&&(t=e[qc]=new Set);var i=n+"__bubble";t.has(i)||(mg(e,n,2,!1),t.add(i))}function Mu(n,e,t){var i=0;e&&(i|=4),mg(t,n,i,e)}var va="_reactListening"+Math.random().toString(36).slice(2);function Os(n){if(!n[va]){n[va]=!0,Sm.forEach(function(t){t!=="selectionchange"&&(C_.has(t)||Mu(t,!1,n),Mu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[va]||(e[va]=!0,Mu("selectionchange",!1,e))}}function mg(n,e,t,i){switch(Qm(e)){case 1:var r=V0;break;case 4:r=H0;break;default:r=Of}t=r.bind(null,e,t,n),r=void 0,!Nc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Eu(n,e,t,i,r){var o=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===r||u.nodeType===8&&u.parentNode===r))return;s=s.return}for(;a!==null;){if(s=Tr(a),s===null)return;if(u=s.tag,u===5||u===6){i=o=s;continue e}a=a.parentNode}}i=i.return}Om(function(){var c=o,d=Ff(t),p=[];e:{var h=hg.get(n);if(h!==void 0){var x=Bf,M=n;switch(n){case"keypress":if(Ja(t)===0)break e;case"keydown":case"keyup":x=i_;break;case"focusin":M="focus",x=vu;break;case"focusout":M="blur",x=vu;break;case"beforeblur":case"afterblur":x=vu;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=$d;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=j0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=s_;break;case ug:case cg:case fg:x=Y0;break;case dg:x=l_;break;case"scroll":x=G0;break;case"wheel":x=c_;break;case"copy":case"cut":case"paste":x=Z0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Kd}var g=(e&4)!==0,m=!g&&n==="scroll",y=g?h!==null?h+"Capture":null:h;g=[];for(var w=c,E;w!==null;){E=w;var b=E.stateNode;if(E.tag===5&&b!==null&&(E=b,y!==null&&(b=Rs(w,y),b!=null&&g.push(Us(w,b,E)))),m)break;w=w.return}0<g.length&&(h=new x(h,M,null,t,d),p.push({event:h,listeners:g}))}}if((e&7)===0){e:{if(h=n==="mouseover"||n==="pointerover",x=n==="mouseout"||n==="pointerout",h&&t!==Fc&&(M=t.relatedTarget||t.fromElement)&&(Tr(M)||M[Ii]))break e;if((x||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,x?(M=t.relatedTarget||t.toElement,x=c,M=M?Tr(M):null,M!==null&&(m=qr(M),M!==m||M.tag!==5&&M.tag!==6)&&(M=null)):(x=null,M=c),x!==M)){if(g=$d,b="onMouseLeave",y="onMouseEnter",w="mouse",(n==="pointerout"||n==="pointerover")&&(g=Kd,b="onPointerLeave",y="onPointerEnter",w="pointer"),m=x==null?h:Mo(x),E=M==null?h:Mo(M),h=new g(b,w+"leave",x,t,d),h.target=m,h.relatedTarget=E,b=null,Tr(d)===c&&(g=new g(y,w+"enter",M,t,d),g.target=E,g.relatedTarget=m,b=g),m=b,x&&M)t:{for(g=x,y=M,w=0,E=g;E;E=Qr(E))w++;for(E=0,b=y;b;b=Qr(b))E++;for(;0<w-E;)g=Qr(g),w--;for(;0<E-w;)y=Qr(y),E--;for(;w--;){if(g===y||y!==null&&g===y.alternate)break t;g=Qr(g),y=Qr(y)}g=null}else g=null;x!==null&&lh(p,h,x,g,!1),M!==null&&m!==null&&lh(p,m,M,g,!0)}}e:{if(h=c?Mo(c):window,x=h.nodeName&&h.nodeName.toLowerCase(),x==="select"||x==="input"&&h.type==="file")var A=v_;else if(eh(h))if(rg)A=w_;else{A=y_;var R=__}else(x=h.nodeName)&&x.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(A=x_);if(A&&(A=A(n,c))){ig(p,A,t,d);break e}R&&R(n,h,c),n==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&Lc(h,"number",h.value)}switch(R=c?Mo(c):window,n){case"focusin":(eh(R)||R.contentEditable==="true")&&(wo=R,Vc=c,Es=null);break;case"focusout":Es=Vc=wo=null;break;case"mousedown":Hc=!0;break;case"contextmenu":case"mouseup":case"dragend":Hc=!1,oh(p,t,d);break;case"selectionchange":if(E_)break;case"keydown":case"keyup":oh(p,t,d)}var N;if(Hf)e:{switch(n){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else xo?tg(n,t)&&(T="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(T="onCompositionStart");T&&(eg&&t.locale!=="ko"&&(xo||T!=="onCompositionStart"?T==="onCompositionEnd"&&xo&&(N=Jm()):(nr=d,Uf="value"in nr?nr.value:nr.textContent,xo=!0)),R=gl(c,T),0<R.length&&(T=new Zd(T,n,null,t,d),p.push({event:T,listeners:R}),N?T.data=N:(N=ng(t),N!==null&&(T.data=N)))),(N=d_?h_(n,t):p_(n,t))&&(c=gl(c,"onBeforeInput"),0<c.length&&(d=new Zd("onBeforeInput","beforeinput",null,t,d),p.push({event:d,listeners:c}),d.data=N))}pg(p,e)})}function Us(n,e,t){return{instance:n,listener:e,currentTarget:t}}function gl(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Rs(n,t),o!=null&&i.unshift(Us(n,o,r)),o=Rs(n,e),o!=null&&i.push(Us(n,o,r))),n=n.return}return i}function Qr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function lh(n,e,t,i,r){for(var o=e._reactName,s=[];t!==null&&t!==i;){var a=t,u=a.alternate,c=a.stateNode;if(u!==null&&u===i)break;a.tag===5&&c!==null&&(a=c,r?(u=Rs(t,o),u!=null&&s.unshift(Us(t,u,a))):r||(u=Rs(t,o),u!=null&&s.push(Us(t,u,a)))),t=t.return}s.length!==0&&n.push({event:e,listeners:s})}var A_=/\r\n?/g,L_=/\u0000|\uFFFD/g;function uh(n){return(typeof n=="string"?n:""+n).replace(A_,`
`).replace(L_,"")}function _a(n,e,t){if(e=uh(e),uh(n)!==e&&t)throw Error(fe(425))}function vl(){}var Gc=null,Wc=null;function jc(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Xc=typeof setTimeout=="function"?setTimeout:void 0,P_=typeof clearTimeout=="function"?clearTimeout:void 0,ch=typeof Promise=="function"?Promise:void 0,D_=typeof queueMicrotask=="function"?queueMicrotask:typeof ch<"u"?function(n){return ch.resolve(null).then(n).catch(R_)}:Xc;function R_(n){setTimeout(function(){throw n})}function bu(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Is(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Is(e)}function ar(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function fh(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Jo=Math.random().toString(36).slice(2),di="__reactFiber$"+Jo,Bs="__reactProps$"+Jo,Ii="__reactContainer$"+Jo,qc="__reactEvents$"+Jo,k_="__reactListeners$"+Jo,F_="__reactHandles$"+Jo;function Tr(n){var e=n[di];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Ii]||t[di]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=fh(n);n!==null;){if(t=n[di])return t;n=fh(n)}return e}n=t,t=n.parentNode}return null}function Js(n){return n=n[di]||n[Ii],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Mo(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(fe(33))}function Bl(n){return n[Bs]||null}var Yc=[],Eo=-1;function gr(n){return{current:n}}function ct(n){0>Eo||(n.current=Yc[Eo],Yc[Eo]=null,Eo--)}function st(n,e){Eo++,Yc[Eo]=n.current,n.current=e}var pr={},Jt=gr(pr),vn=gr(!1),Nr=pr;function Bo(n,e){var t=n.type.contextTypes;if(!t)return pr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in t)r[o]=e[o];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function _n(n){return n=n.childContextTypes,n!=null}function _l(){ct(vn),ct(Jt)}function dh(n,e,t){if(Jt.current!==pr)throw Error(fe(168));st(Jt,e),st(vn,t)}function gg(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(fe(108,_0(n)||"Unknown",r));return wt({},t,i)}function yl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||pr,Nr=Jt.current,st(Jt,n),st(vn,vn.current),!0}function hh(n,e,t){var i=n.stateNode;if(!i)throw Error(fe(169));t?(n=gg(n,e,Nr),i.__reactInternalMemoizedMergedChildContext=n,ct(vn),ct(Jt),st(Jt,n)):ct(vn),st(vn,t)}var Ai=null,Vl=!1,Tu=!1;function vg(n){Ai===null?Ai=[n]:Ai.push(n)}function I_(n){Vl=!0,vg(n)}function vr(){if(!Tu&&Ai!==null){Tu=!0;var n=0,e=it;try{var t=Ai;for(it=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Ai=null,Vl=!1}catch(r){throw Ai!==null&&(Ai=Ai.slice(n+1)),Hm(If,vr),r}finally{it=e,Tu=!1}}return null}var bo=[],To=0,xl=null,wl=0,kn=[],Fn=0,zr=null,Pi=1,Di="";function wr(n,e){bo[To++]=wl,bo[To++]=xl,xl=n,wl=e}function _g(n,e,t){kn[Fn++]=Pi,kn[Fn++]=Di,kn[Fn++]=zr,zr=n;var i=Pi;n=Di;var r=32-Qn(i)-1;i&=~(1<<r),t+=1;var o=32-Qn(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,Pi=1<<32-Qn(e)+r|t<<r|i,Di=o+n}else Pi=1<<o|t<<r|i,Di=n}function Wf(n){n.return!==null&&(wr(n,1),_g(n,1,0))}function jf(n){for(;n===xl;)xl=bo[--To],bo[To]=null,wl=bo[--To],bo[To]=null;for(;n===zr;)zr=kn[--Fn],kn[Fn]=null,Di=kn[--Fn],kn[Fn]=null,Pi=kn[--Fn],kn[Fn]=null}var bn=null,En=null,pt=!1,Zn=null;function yg(n,e){var t=Nn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function ph(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,bn=n,En=ar(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,bn=n,En=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=zr!==null?{id:Pi,overflow:Di}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Nn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,bn=n,En=null,!0):!1;default:return!1}}function $c(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Zc(n){if(pt){var e=En;if(e){var t=e;if(!ph(n,e)){if($c(n))throw Error(fe(418));e=ar(t.nextSibling);var i=bn;e&&ph(n,e)?yg(i,t):(n.flags=n.flags&-4097|2,pt=!1,bn=n)}}else{if($c(n))throw Error(fe(418));n.flags=n.flags&-4097|2,pt=!1,bn=n}}}function mh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;bn=n}function ya(n){if(n!==bn)return!1;if(!pt)return mh(n),pt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!jc(n.type,n.memoizedProps)),e&&(e=En)){if($c(n))throw xg(),Error(fe(418));for(;e;)yg(n,e),e=ar(e.nextSibling)}if(mh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(fe(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){En=ar(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}En=null}}else En=bn?ar(n.stateNode.nextSibling):null;return!0}function xg(){for(var n=En;n;)n=ar(n.nextSibling)}function Vo(){En=bn=null,pt=!1}function Xf(n){Zn===null?Zn=[n]:Zn.push(n)}var N_=Oi.ReactCurrentBatchConfig;function Yn(n,e){if(n&&n.defaultProps){e=wt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var Sl=gr(null),Ml=null,Co=null,qf=null;function Yf(){qf=Co=Ml=null}function $f(n){var e=Sl.current;ct(Sl),n._currentValue=e}function Kc(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Io(n,e){Ml=n,qf=Co=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&e)!==0&&(gn=!0),n.firstContext=null)}function Un(n){var e=n._currentValue;if(qf!==n)if(n={context:n,memoizedValue:e,next:null},Co===null){if(Ml===null)throw Error(fe(308));Co=n,Ml.dependencies={lanes:0,firstContext:n}}else Co=Co.next=n;return e}var Cr=null;function Zf(n){Cr===null?Cr=[n]:Cr.push(n)}function wg(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Zf(e)):(t.next=r.next,r.next=t),e.interleaved=t,Ni(n,i)}function Ni(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Qi=!1;function Kf(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sg(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ri(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function lr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,(Je&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ni(n,t)}return r=i.interleaved,r===null?(e.next=e,Zf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ni(n,t)}function el(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Nf(n,t)}}function gh(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var s={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?r=o=s:o=o.next=s,t=t.next}while(t!==null);o===null?r=o=e:o=o.next=e}else r=o=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function El(n,e,t,i){var r=n.updateQueue;Qi=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var u=a,c=u.next;u.next=null,s===null?o=c:s.next=c,s=u;var d=n.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(o!==null){var p=r.baseState;s=0,d=c=u=null,a=o;do{var h=a.lane,x=a.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var M=n,g=a;switch(h=e,x=t,g.tag){case 1:if(M=g.payload,typeof M=="function"){p=M.call(x,p,h);break e}p=M;break e;case 3:M.flags=M.flags&-65537|128;case 0:if(M=g.payload,h=typeof M=="function"?M.call(x,p,h):M,h==null)break e;p=wt({},p,h);break e;case 2:Qi=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else x={eventTime:x,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=x,u=p):d=d.next=x,s|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(1);if(d===null&&(u=p),r.baseState=u,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Ur|=s,n.lanes=s,n.memoizedState=p}}function vh(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(fe(191,r));r.call(i)}}}var Mg=new wm.Component().refs;function Qc(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:wt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Hl={isMounted:function(n){return(n=n._reactInternals)?qr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=nn(),r=cr(n),o=Ri(i,r);o.payload=e,t!=null&&(o.callback=t),e=lr(n,o,r),e!==null&&(Jn(e,n,r,i),el(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=nn(),r=cr(n),o=Ri(i,r);o.tag=1,o.payload=e,t!=null&&(o.callback=t),e=lr(n,o,r),e!==null&&(Jn(e,n,r,i),el(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=nn(),i=cr(n),r=Ri(t,i);r.tag=2,e!=null&&(r.callback=e),e=lr(n,r,i),e!==null&&(Jn(e,n,i,t),el(e,n,i))}};function _h(n,e,t,i,r,o,s){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!zs(t,i)||!zs(r,o):!0}function Eg(n,e,t){var i=!1,r=pr,o=e.contextType;return typeof o=="object"&&o!==null?o=Un(o):(r=_n(e)?Nr:Jt.current,i=e.contextTypes,o=(i=i!=null)?Bo(n,r):pr),e=new e(t,o),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Hl,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=o),e}function yh(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Hl.enqueueReplaceState(e,e.state,null)}function Jc(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=Mg,Kf(n);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Un(o):(o=_n(e)?Nr:Jt.current,r.context=Bo(n,o)),r.state=n.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Qc(n,e,o,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Hl.enqueueReplaceState(r,r.state,null),El(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function ls(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(fe(309));var i=t.stateNode}if(!i)throw Error(fe(147,n));var r=i,o=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;a===Mg&&(a=r.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof n!="string")throw Error(fe(284));if(!t._owner)throw Error(fe(290,n))}return n}function xa(n,e){throw n=Object.prototype.toString.call(e),Error(fe(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function xh(n){var e=n._init;return e(n._payload)}function bg(n){function e(y,w){if(n){var E=y.deletions;E===null?(y.deletions=[w],y.flags|=16):E.push(w)}}function t(y,w){if(!n)return null;for(;w!==null;)e(y,w),w=w.sibling;return null}function i(y,w){for(y=new Map;w!==null;)w.key!==null?y.set(w.key,w):y.set(w.index,w),w=w.sibling;return y}function r(y,w){return y=fr(y,w),y.index=0,y.sibling=null,y}function o(y,w,E){return y.index=E,n?(E=y.alternate,E!==null?(E=E.index,E<w?(y.flags|=2,w):E):(y.flags|=2,w)):(y.flags|=1048576,w)}function s(y){return n&&y.alternate===null&&(y.flags|=2),y}function a(y,w,E,b){return w===null||w.tag!==6?(w=ku(E,y.mode,b),w.return=y,w):(w=r(w,E),w.return=y,w)}function u(y,w,E,b){var A=E.type;return A===yo?d(y,w,E.props.children,b,E.key):w!==null&&(w.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ki&&xh(A)===w.type)?(b=r(w,E.props),b.ref=ls(y,w,E),b.return=y,b):(b=sl(E.type,E.key,E.props,null,y.mode,b),b.ref=ls(y,w,E),b.return=y,b)}function c(y,w,E,b){return w===null||w.tag!==4||w.stateNode.containerInfo!==E.containerInfo||w.stateNode.implementation!==E.implementation?(w=Fu(E,y.mode,b),w.return=y,w):(w=r(w,E.children||[]),w.return=y,w)}function d(y,w,E,b,A){return w===null||w.tag!==7?(w=kr(E,y.mode,b,A),w.return=y,w):(w=r(w,E),w.return=y,w)}function p(y,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return w=ku(""+w,y.mode,E),w.return=y,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ua:return E=sl(w.type,w.key,w.props,null,y.mode,E),E.ref=ls(y,null,w),E.return=y,E;case _o:return w=Fu(w,y.mode,E),w.return=y,w;case Ki:var b=w._init;return p(y,b(w._payload),E)}if(ms(w)||is(w))return w=kr(w,y.mode,E,null),w.return=y,w;xa(y,w)}return null}function h(y,w,E,b){var A=w!==null?w.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return A!==null?null:a(y,w,""+E,b);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ua:return E.key===A?u(y,w,E,b):null;case _o:return E.key===A?c(y,w,E,b):null;case Ki:return A=E._init,h(y,w,A(E._payload),b)}if(ms(E)||is(E))return A!==null?null:d(y,w,E,b,null);xa(y,E)}return null}function x(y,w,E,b,A){if(typeof b=="string"&&b!==""||typeof b=="number")return y=y.get(E)||null,a(w,y,""+b,A);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ua:return y=y.get(b.key===null?E:b.key)||null,u(w,y,b,A);case _o:return y=y.get(b.key===null?E:b.key)||null,c(w,y,b,A);case Ki:var R=b._init;return x(y,w,E,R(b._payload),A)}if(ms(b)||is(b))return y=y.get(E)||null,d(w,y,b,A,null);xa(w,b)}return null}function M(y,w,E,b){for(var A=null,R=null,N=w,T=w=0,I=null;N!==null&&T<E.length;T++){N.index>T?(I=N,N=null):I=N.sibling;var H=h(y,N,E[T],b);if(H===null){N===null&&(N=I);break}n&&N&&H.alternate===null&&e(y,N),w=o(H,w,T),R===null?A=H:R.sibling=H,R=H,N=I}if(T===E.length)return t(y,N),pt&&wr(y,T),A;if(N===null){for(;T<E.length;T++)N=p(y,E[T],b),N!==null&&(w=o(N,w,T),R===null?A=N:R.sibling=N,R=N);return pt&&wr(y,T),A}for(N=i(y,N);T<E.length;T++)I=x(N,y,T,E[T],b),I!==null&&(n&&I.alternate!==null&&N.delete(I.key===null?T:I.key),w=o(I,w,T),R===null?A=I:R.sibling=I,R=I);return n&&N.forEach(function(Y){return e(y,Y)}),pt&&wr(y,T),A}function g(y,w,E,b){var A=is(E);if(typeof A!="function")throw Error(fe(150));if(E=A.call(E),E==null)throw Error(fe(151));for(var R=A=null,N=w,T=w=0,I=null,H=E.next();N!==null&&!H.done;T++,H=E.next()){N.index>T?(I=N,N=null):I=N.sibling;var Y=h(y,N,H.value,b);if(Y===null){N===null&&(N=I);break}n&&N&&Y.alternate===null&&e(y,N),w=o(Y,w,T),R===null?A=Y:R.sibling=Y,R=Y,N=I}if(H.done)return t(y,N),pt&&wr(y,T),A;if(N===null){for(;!H.done;T++,H=E.next())H=p(y,H.value,b),H!==null&&(w=o(H,w,T),R===null?A=H:R.sibling=H,R=H);return pt&&wr(y,T),A}for(N=i(y,N);!H.done;T++,H=E.next())H=x(N,y,T,H.value,b),H!==null&&(n&&H.alternate!==null&&N.delete(H.key===null?T:H.key),w=o(H,w,T),R===null?A=H:R.sibling=H,R=H);return n&&N.forEach(function(ce){return e(y,ce)}),pt&&wr(y,T),A}function m(y,w,E,b){if(typeof E=="object"&&E!==null&&E.type===yo&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case ua:e:{for(var A=E.key,R=w;R!==null;){if(R.key===A){if(A=E.type,A===yo){if(R.tag===7){t(y,R.sibling),w=r(R,E.props.children),w.return=y,y=w;break e}}else if(R.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ki&&xh(A)===R.type){t(y,R.sibling),w=r(R,E.props),w.ref=ls(y,R,E),w.return=y,y=w;break e}t(y,R);break}else e(y,R);R=R.sibling}E.type===yo?(w=kr(E.props.children,y.mode,b,E.key),w.return=y,y=w):(b=sl(E.type,E.key,E.props,null,y.mode,b),b.ref=ls(y,w,E),b.return=y,y=b)}return s(y);case _o:e:{for(R=E.key;w!==null;){if(w.key===R)if(w.tag===4&&w.stateNode.containerInfo===E.containerInfo&&w.stateNode.implementation===E.implementation){t(y,w.sibling),w=r(w,E.children||[]),w.return=y,y=w;break e}else{t(y,w);break}else e(y,w);w=w.sibling}w=Fu(E,y.mode,b),w.return=y,y=w}return s(y);case Ki:return R=E._init,m(y,w,R(E._payload),b)}if(ms(E))return M(y,w,E,b);if(is(E))return g(y,w,E,b);xa(y,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,w!==null&&w.tag===6?(t(y,w.sibling),w=r(w,E),w.return=y,y=w):(t(y,w),w=ku(E,y.mode,b),w.return=y,y=w),s(y)):t(y,w)}return m}var Ho=bg(!0),Tg=bg(!1),ea={},gi=gr(ea),Vs=gr(ea),Hs=gr(ea);function Ar(n){if(n===ea)throw Error(fe(174));return n}function Qf(n,e){switch(st(Hs,e),st(Vs,n),st(gi,ea),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Dc(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Dc(e,n)}ct(gi),st(gi,e)}function Go(){ct(gi),ct(Vs),ct(Hs)}function Cg(n){Ar(Hs.current);var e=Ar(gi.current),t=Dc(e,n.type);e!==t&&(st(Vs,n),st(gi,t))}function Jf(n){Vs.current===n&&(ct(gi),ct(Vs))}var _t=gr(0);function bl(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Cu=[];function ed(){for(var n=0;n<Cu.length;n++)Cu[n]._workInProgressVersionPrimary=null;Cu.length=0}var tl=Oi.ReactCurrentDispatcher,Au=Oi.ReactCurrentBatchConfig,Or=0,xt=null,Dt=null,It=null,Tl=!1,bs=!1,Gs=0,z_=0;function Yt(){throw Error(fe(321))}function td(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!ii(n[t],e[t]))return!1;return!0}function nd(n,e,t,i,r,o){if(Or=o,xt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,tl.current=n===null||n.memoizedState===null?V_:H_,n=t(i,r),bs){o=0;do{if(bs=!1,Gs=0,25<=o)throw Error(fe(301));o+=1,It=Dt=null,e.updateQueue=null,tl.current=G_,n=t(i,r)}while(bs)}if(tl.current=Cl,e=Dt!==null&&Dt.next!==null,Or=0,It=Dt=xt=null,Tl=!1,e)throw Error(fe(300));return n}function id(){var n=Gs!==0;return Gs=0,n}function ci(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?xt.memoizedState=It=n:It=It.next=n,It}function Bn(){if(Dt===null){var n=xt.alternate;n=n!==null?n.memoizedState:null}else n=Dt.next;var e=It===null?xt.memoizedState:It.next;if(e!==null)It=e,Dt=n;else{if(n===null)throw Error(fe(310));Dt=n,n={memoizedState:Dt.memoizedState,baseState:Dt.baseState,baseQueue:Dt.baseQueue,queue:Dt.queue,next:null},It===null?xt.memoizedState=It=n:It=It.next=n}return It}function Ws(n,e){return typeof e=="function"?e(n):e}function Lu(n){var e=Bn(),t=e.queue;if(t===null)throw Error(fe(311));t.lastRenderedReducer=n;var i=Dt,r=i.baseQueue,o=t.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,t.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,u=null,c=o;do{var d=c.lane;if((Or&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=p,s=i):u=u.next=p,xt.lanes|=d,Ur|=d}c=c.next}while(c!==null&&c!==o);u===null?s=i:u.next=a,ii(i,e.memoizedState)||(gn=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=u,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do o=r.lane,xt.lanes|=o,Ur|=o,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Pu(n){var e=Bn(),t=e.queue;if(t===null)throw Error(fe(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,o=e.memoizedState;if(r!==null){t.pending=null;var s=r=r.next;do o=n(o,s.action),s=s.next;while(s!==r);ii(o,e.memoizedState)||(gn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),t.lastRenderedState=o}return[o,i]}function Ag(){}function Lg(n,e){var t=xt,i=Bn(),r=e(),o=!ii(i.memoizedState,r);if(o&&(i.memoizedState=r,gn=!0),i=i.queue,rd(Rg.bind(null,t,i,n),[n]),i.getSnapshot!==e||o||It!==null&&It.memoizedState.tag&1){if(t.flags|=2048,js(9,Dg.bind(null,t,i,r,e),void 0,null),zt===null)throw Error(fe(349));(Or&30)!==0||Pg(t,e,r)}return r}function Pg(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Dg(n,e,t,i){e.value=t,e.getSnapshot=i,kg(e)&&Fg(n)}function Rg(n,e,t){return t(function(){kg(e)&&Fg(n)})}function kg(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!ii(n,t)}catch{return!0}}function Fg(n){var e=Ni(n,1);e!==null&&Jn(e,n,1,-1)}function wh(n){var e=ci();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ws,lastRenderedState:n},e.queue=n,n=n.dispatch=B_.bind(null,xt,n),[e.memoizedState,n]}function js(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Ig(){return Bn().memoizedState}function nl(n,e,t,i){var r=ci();xt.flags|=n,r.memoizedState=js(1|e,t,void 0,i===void 0?null:i)}function Gl(n,e,t,i){var r=Bn();i=i===void 0?null:i;var o=void 0;if(Dt!==null){var s=Dt.memoizedState;if(o=s.destroy,i!==null&&td(i,s.deps)){r.memoizedState=js(e,t,o,i);return}}xt.flags|=n,r.memoizedState=js(1|e,t,o,i)}function Sh(n,e){return nl(8390656,8,n,e)}function rd(n,e){return Gl(2048,8,n,e)}function Ng(n,e){return Gl(4,2,n,e)}function zg(n,e){return Gl(4,4,n,e)}function Og(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Ug(n,e,t){return t=t!=null?t.concat([n]):null,Gl(4,4,Og.bind(null,e,n),t)}function od(){}function Bg(n,e){var t=Bn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&td(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Vg(n,e){var t=Bn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&td(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Hg(n,e,t){return(Or&21)===0?(n.baseState&&(n.baseState=!1,gn=!0),n.memoizedState=t):(ii(t,e)||(t=jm(),xt.lanes|=t,Ur|=t,n.baseState=!0),e)}function O_(n,e){var t=it;it=t!==0&&4>t?t:4,n(!0);var i=Au.transition;Au.transition={};try{n(!1),e()}finally{it=t,Au.transition=i}}function Gg(){return Bn().memoizedState}function U_(n,e,t){var i=cr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Wg(n))jg(e,t);else if(t=wg(n,e,t,i),t!==null){var r=nn();Jn(t,n,i,r),Xg(t,e,i)}}function B_(n,e,t){var i=cr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Wg(n))jg(e,r);else{var o=n.alternate;if(n.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,t);if(r.hasEagerState=!0,r.eagerState=a,ii(a,s)){var u=e.interleaved;u===null?(r.next=r,Zf(e)):(r.next=u.next,u.next=r),e.interleaved=r;return}}catch{}finally{}t=wg(n,e,r,i),t!==null&&(r=nn(),Jn(t,n,i,r),Xg(t,e,i))}}function Wg(n){var e=n.alternate;return n===xt||e!==null&&e===xt}function jg(n,e){bs=Tl=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Xg(n,e,t){if((t&4194240)!==0){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Nf(n,t)}}var Cl={readContext:Un,useCallback:Yt,useContext:Yt,useEffect:Yt,useImperativeHandle:Yt,useInsertionEffect:Yt,useLayoutEffect:Yt,useMemo:Yt,useReducer:Yt,useRef:Yt,useState:Yt,useDebugValue:Yt,useDeferredValue:Yt,useTransition:Yt,useMutableSource:Yt,useSyncExternalStore:Yt,useId:Yt,unstable_isNewReconciler:!1},V_={readContext:Un,useCallback:function(n,e){return ci().memoizedState=[n,e===void 0?null:e],n},useContext:Un,useEffect:Sh,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,nl(4194308,4,Og.bind(null,e,n),t)},useLayoutEffect:function(n,e){return nl(4194308,4,n,e)},useInsertionEffect:function(n,e){return nl(4,2,n,e)},useMemo:function(n,e){var t=ci();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=ci();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=U_.bind(null,xt,n),[i.memoizedState,n]},useRef:function(n){var e=ci();return n={current:n},e.memoizedState=n},useState:wh,useDebugValue:od,useDeferredValue:function(n){return ci().memoizedState=n},useTransition:function(){var n=wh(!1),e=n[0];return n=O_.bind(null,n[1]),ci().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=xt,r=ci();if(pt){if(t===void 0)throw Error(fe(407));t=t()}else{if(t=e(),zt===null)throw Error(fe(349));(Or&30)!==0||Pg(i,e,t)}r.memoizedState=t;var o={value:t,getSnapshot:e};return r.queue=o,Sh(Rg.bind(null,i,o,n),[n]),i.flags|=2048,js(9,Dg.bind(null,i,o,t,e),void 0,null),t},useId:function(){var n=ci(),e=zt.identifierPrefix;if(pt){var t=Di,i=Pi;t=(i&~(1<<32-Qn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Gs++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=z_++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},H_={readContext:Un,useCallback:Bg,useContext:Un,useEffect:rd,useImperativeHandle:Ug,useInsertionEffect:Ng,useLayoutEffect:zg,useMemo:Vg,useReducer:Lu,useRef:Ig,useState:function(){return Lu(Ws)},useDebugValue:od,useDeferredValue:function(n){var e=Bn();return Hg(e,Dt.memoizedState,n)},useTransition:function(){var n=Lu(Ws)[0],e=Bn().memoizedState;return[n,e]},useMutableSource:Ag,useSyncExternalStore:Lg,useId:Gg,unstable_isNewReconciler:!1},G_={readContext:Un,useCallback:Bg,useContext:Un,useEffect:rd,useImperativeHandle:Ug,useInsertionEffect:Ng,useLayoutEffect:zg,useMemo:Vg,useReducer:Pu,useRef:Ig,useState:function(){return Pu(Ws)},useDebugValue:od,useDeferredValue:function(n){var e=Bn();return Dt===null?e.memoizedState=n:Hg(e,Dt.memoizedState,n)},useTransition:function(){var n=Pu(Ws)[0],e=Bn().memoizedState;return[n,e]},useMutableSource:Ag,useSyncExternalStore:Lg,useId:Gg,unstable_isNewReconciler:!1};function Wo(n,e){try{var t="",i=e;do t+=v0(i),i=i.return;while(i);var r=t}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:n,source:e,stack:r,digest:null}}function Du(n,e,t){return{value:n,source:null,stack:t!=null?t:null,digest:e!=null?e:null}}function ef(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var W_=typeof WeakMap=="function"?WeakMap:Map;function qg(n,e,t){t=Ri(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Ll||(Ll=!0,ff=i),ef(n,e)},t}function Yg(n,e,t){t=Ri(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){ef(n,e)}}var o=n.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){ef(n,e),typeof i!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),t}function Mh(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new W_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=ry.bind(null,n,e,t),e.then(n,n))}function Eh(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function bh(n,e,t,i,r){return(n.mode&1)===0?(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Ri(-1,1),e.tag=2,lr(t,e,1))),t.lanes|=1),n):(n.flags|=65536,n.lanes=r,n)}var j_=Oi.ReactCurrentOwner,gn=!1;function tn(n,e,t,i){e.child=n===null?Tg(e,null,t,i):Ho(e,n.child,t,i)}function Th(n,e,t,i,r){t=t.render;var o=e.ref;return Io(e,r),i=nd(n,e,t,i,o,r),t=id(),n!==null&&!gn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,zi(n,e,r)):(pt&&t&&Wf(e),e.flags|=1,tn(n,e,i,r),e.child)}function Ch(n,e,t,i,r){if(n===null){var o=t.type;return typeof o=="function"&&!hd(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=o,$g(n,e,o,i,r)):(n=sl(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(o=n.child,(n.lanes&r)===0){var s=o.memoizedProps;if(t=t.compare,t=t!==null?t:zs,t(s,i)&&n.ref===e.ref)return zi(n,e,r)}return e.flags|=1,n=fr(o,i),n.ref=e.ref,n.return=e,e.child=n}function $g(n,e,t,i,r){if(n!==null){var o=n.memoizedProps;if(zs(o,i)&&n.ref===e.ref)if(gn=!1,e.pendingProps=i=o,(n.lanes&r)!==0)(n.flags&131072)!==0&&(gn=!0);else return e.lanes=n.lanes,zi(n,e,r)}return tf(n,e,t,i,r)}function Zg(n,e,t){var i=e.pendingProps,r=i.children,o=n!==null?n.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(Lo,Mn),Mn|=t;else{if((t&1073741824)===0)return n=o!==null?o.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,st(Lo,Mn),Mn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:t,st(Lo,Mn),Mn|=i}else o!==null?(i=o.baseLanes|t,e.memoizedState=null):i=t,st(Lo,Mn),Mn|=i;return tn(n,e,r,t),e.child}function Kg(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function tf(n,e,t,i,r){var o=_n(t)?Nr:Jt.current;return o=Bo(e,o),Io(e,r),t=nd(n,e,t,i,o,r),i=id(),n!==null&&!gn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,zi(n,e,r)):(pt&&i&&Wf(e),e.flags|=1,tn(n,e,t,r),e.child)}function Ah(n,e,t,i,r){if(_n(t)){var o=!0;yl(e)}else o=!1;if(Io(e,r),e.stateNode===null)il(n,e),Eg(e,t,i),Jc(e,t,i,r),i=!0;else if(n===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var u=s.context,c=t.contextType;typeof c=="object"&&c!==null?c=Un(c):(c=_n(t)?Nr:Jt.current,c=Bo(e,c));var d=t.getDerivedStateFromProps,p=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||u!==c)&&yh(e,s,i,c),Qi=!1;var h=e.memoizedState;s.state=h,El(e,i,s,r),u=e.memoizedState,a!==i||h!==u||vn.current||Qi?(typeof d=="function"&&(Qc(e,t,d,i),u=e.memoizedState),(a=Qi||_h(e,t,a,i,h,u,c))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=u),s.props=i,s.state=u,s.context=c,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,Sg(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:Yn(e.type,a),s.props=c,p=e.pendingProps,h=s.context,u=t.contextType,typeof u=="object"&&u!==null?u=Un(u):(u=_n(t)?Nr:Jt.current,u=Bo(e,u));var x=t.getDerivedStateFromProps;(d=typeof x=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==p||h!==u)&&yh(e,s,i,u),Qi=!1,h=e.memoizedState,s.state=h,El(e,i,s,r);var M=e.memoizedState;a!==p||h!==M||vn.current||Qi?(typeof x=="function"&&(Qc(e,t,x,i),M=e.memoizedState),(c=Qi||_h(e,t,c,i,h,M,u)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,M,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,M,u)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=M),s.props=i,s.state=M,s.context=u,i=c):(typeof s.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return nf(n,e,t,i,o,r)}function nf(n,e,t,i,r,o){Kg(n,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&hh(e,t,!1),zi(n,e,o);i=e.stateNode,j_.current=e;var a=s&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&s?(e.child=Ho(e,n.child,null,o),e.child=Ho(e,null,a,o)):tn(n,e,a,o),e.memoizedState=i.state,r&&hh(e,t,!0),e.child}function Qg(n){var e=n.stateNode;e.pendingContext?dh(n,e.pendingContext,e.pendingContext!==e.context):e.context&&dh(n,e.context,!1),Qf(n,e.containerInfo)}function Lh(n,e,t,i,r){return Vo(),Xf(r),e.flags|=256,tn(n,e,t,i),e.child}var rf={dehydrated:null,treeContext:null,retryLane:0};function of(n){return{baseLanes:n,cachePool:null,transitions:null}}function Jg(n,e,t){var i=e.pendingProps,r=_t.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),st(_t,r&1),n===null)return Zc(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((e.mode&1)===0?e.lanes=1:n.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(s=i.children,n=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},(i&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Xl(s,i,0,null),n=kr(n,i,t,null),o.return=e,n.return=e,o.sibling=n,e.child=o,e.child.memoizedState=of(t),e.memoizedState=rf,n):sd(e,s));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return X_(n,e,s,i,a,r,t);if(o){o=i.fallback,s=e.mode,r=n.child,a=r.sibling;var u={mode:"hidden",children:i.children};return(s&1)===0&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=u,e.deletions=null):(i=fr(r,u),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=fr(a,o):(o=kr(o,s,t,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=n.child.memoizedState,s=s===null?of(t):{baseLanes:s.baseLanes|t,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=n.childLanes&~t,e.memoizedState=rf,i}return o=n.child,n=o.sibling,i=fr(o,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function sd(n,e){return e=Xl({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function wa(n,e,t,i){return i!==null&&Xf(i),Ho(e,n.child,null,t),n=sd(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function X_(n,e,t,i,r,o,s){if(t)return e.flags&256?(e.flags&=-257,i=Du(Error(fe(422))),wa(n,e,s,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=Xl({mode:"visible",children:i.children},r,0,null),o=kr(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,(e.mode&1)!==0&&Ho(e,n.child,null,s),e.child.memoizedState=of(s),e.memoizedState=rf,o);if((e.mode&1)===0)return wa(n,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(fe(419)),i=Du(o,i,void 0),wa(n,e,s,i)}if(a=(s&n.childLanes)!==0,gn||a){if(i=zt,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|s))!==0?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Ni(n,r),Jn(i,n,r,-1))}return dd(),i=Du(Error(fe(421))),wa(n,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=oy.bind(null,n),r._reactRetry=e,null):(n=o.treeContext,En=ar(r.nextSibling),bn=e,pt=!0,Zn=null,n!==null&&(kn[Fn++]=Pi,kn[Fn++]=Di,kn[Fn++]=zr,Pi=n.id,Di=n.overflow,zr=e),e=sd(e,i.children),e.flags|=4096,e)}function Ph(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Kc(n.return,e,t)}function Ru(n,e,t,i,r){var o=n.memoizedState;o===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=t,o.tailMode=r)}function ev(n,e,t){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(tn(n,e,i.children,t),i=_t.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Ph(n,t,e);else if(n.tag===19)Ph(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(st(_t,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&bl(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Ru(e,!1,r,t,o);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&bl(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Ru(e,!0,t,null,o);break;case"together":Ru(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function il(n,e){(e.mode&1)===0&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function zi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Ur|=e.lanes,(t&e.childLanes)===0)return null;if(n!==null&&e.child!==n.child)throw Error(fe(153));if(e.child!==null){for(n=e.child,t=fr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=fr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function q_(n,e,t){switch(e.tag){case 3:Qg(e),Vo();break;case 5:Cg(e);break;case 1:_n(e.type)&&yl(e);break;case 4:Qf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(Sl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(_t,_t.current&1),e.flags|=128,null):(t&e.child.childLanes)!==0?Jg(n,e,t):(st(_t,_t.current&1),n=zi(n,e,t),n!==null?n.sibling:null);st(_t,_t.current&1);break;case 19:if(i=(t&e.childLanes)!==0,(n.flags&128)!==0){if(i)return ev(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(_t,_t.current),i)break;return null;case 22:case 23:return e.lanes=0,Zg(n,e,t)}return zi(n,e,t)}var tv,sf,nv,iv;tv=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};sf=function(){};nv=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Ar(gi.current);var o=null;switch(t){case"input":r=Cc(n,r),i=Cc(n,i),o=[];break;case"select":r=wt({},r,{value:void 0}),i=wt({},i,{value:void 0}),o=[];break;case"textarea":r=Pc(n,r),i=Pc(n,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=vl)}Rc(t,i);var s;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(s in a)a.hasOwnProperty(s)&&(t||(t={}),t[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ps.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in i){var u=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(t||(t={}),t[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(t||(t={}),t[s]=u[s])}else t||(o||(o=[]),o.push(c,t)),t=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ps.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ut("scroll",n),o||a===u||(o=[])):(o=o||[]).push(c,u))}t&&(o=o||[]).push("style",t);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};iv=function(n,e,t,i){t!==i&&(e.flags|=4)};function us(n,e){if(!pt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function $t(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function Y_(n,e,t){var i=e.pendingProps;switch(jf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(e),null;case 1:return _n(e.type)&&_l(),$t(e),null;case 3:return i=e.stateNode,Go(),ct(vn),ct(Jt),ed(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(ya(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Zn!==null&&(pf(Zn),Zn=null))),sf(n,e),$t(e),null;case 5:Jf(e);var r=Ar(Hs.current);if(t=e.type,n!==null&&e.stateNode!=null)nv(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(fe(166));return $t(e),null}if(n=Ar(gi.current),ya(e)){i=e.stateNode,t=e.type;var o=e.memoizedProps;switch(i[di]=e,i[Bs]=o,n=(e.mode&1)!==0,t){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<vs.length;r++)ut(vs[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":Ud(i,o),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},ut("invalid",i);break;case"textarea":Vd(i,o),ut("invalid",i)}Rc(t,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&_a(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&_a(i.textContent,a,n),r=["children",""+a]):Ps.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ut("scroll",i)}switch(t){case"input":ca(i),Bd(i,o,!0);break;case"textarea":ca(i),Hd(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=vl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Pm(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=s.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=s.createElement(t,{is:i.is}):(n=s.createElement(t),t==="select"&&(s=n,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):n=s.createElementNS(n,t),n[di]=e,n[Bs]=i,tv(n,e,!1,!1),e.stateNode=n;e:{switch(s=kc(t,i),t){case"dialog":ut("cancel",n),ut("close",n),r=i;break;case"iframe":case"object":case"embed":ut("load",n),r=i;break;case"video":case"audio":for(r=0;r<vs.length;r++)ut(vs[r],n);r=i;break;case"source":ut("error",n),r=i;break;case"img":case"image":case"link":ut("error",n),ut("load",n),r=i;break;case"details":ut("toggle",n),r=i;break;case"input":Ud(n,i),r=Cc(n,i),ut("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=wt({},i,{value:void 0}),ut("invalid",n);break;case"textarea":Vd(n,i),r=Pc(n,i),ut("invalid",n);break;default:r=i}Rc(t,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?km(n,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Dm(n,u)):o==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&Ds(n,u):typeof u=="number"&&Ds(n,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ps.hasOwnProperty(o)?u!=null&&o==="onScroll"&&ut("scroll",n):u!=null&&Pf(n,o,u,s))}switch(t){case"input":ca(n),Bd(n,i,!1);break;case"textarea":ca(n),Hd(n);break;case"option":i.value!=null&&n.setAttribute("value",""+hr(i.value));break;case"select":n.multiple=!!i.multiple,o=i.value,o!=null?Do(n,!!i.multiple,o,!1):i.defaultValue!=null&&Do(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=vl)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $t(e),null;case 6:if(n&&e.stateNode!=null)iv(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(fe(166));if(t=Ar(Hs.current),Ar(gi.current),ya(e)){if(i=e.stateNode,t=e.memoizedProps,i[di]=e,(o=i.nodeValue!==t)&&(n=bn,n!==null))switch(n.tag){case 3:_a(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&_a(i.nodeValue,t,(n.mode&1)!==0)}o&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[di]=e,e.stateNode=i}return $t(e),null;case 13:if(ct(_t),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(pt&&En!==null&&(e.mode&1)!==0&&(e.flags&128)===0)xg(),Vo(),e.flags|=98560,o=!1;else if(o=ya(e),i!==null&&i.dehydrated!==null){if(n===null){if(!o)throw Error(fe(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(fe(317));o[di]=e}else Vo(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;$t(e),o=!1}else Zn!==null&&(pf(Zn),Zn=null),o=!0;if(!o)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(n===null||(_t.current&1)!==0?Rt===0&&(Rt=3):dd())),e.updateQueue!==null&&(e.flags|=4),$t(e),null);case 4:return Go(),sf(n,e),n===null&&Os(e.stateNode.containerInfo),$t(e),null;case 10:return $f(e.type._context),$t(e),null;case 17:return _n(e.type)&&_l(),$t(e),null;case 19:if(ct(_t),o=e.memoizedState,o===null)return $t(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)us(o,!1);else{if(Rt!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(s=bl(n),s!==null){for(e.flags|=128,us(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)o=t,n=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=n,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,n=s.dependencies,o.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return st(_t,_t.current&1|2),e.child}n=n.sibling}o.tail!==null&&Et()>jo&&(e.flags|=128,i=!0,us(o,!1),e.lanes=4194304)}else{if(!i)if(n=bl(s),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),us(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!pt)return $t(e),null}else 2*Et()-o.renderingStartTime>jo&&t!==1073741824&&(e.flags|=128,i=!0,us(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(t=o.last,t!==null?t.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Et(),e.sibling=null,t=_t.current,st(_t,i?t&1|2:t&1),e):($t(e),null);case 22:case 23:return fd(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(Mn&1073741824)!==0&&($t(e),e.subtreeFlags&6&&(e.flags|=8192)):$t(e),null;case 24:return null;case 25:return null}throw Error(fe(156,e.tag))}function $_(n,e){switch(jf(e),e.tag){case 1:return _n(e.type)&&_l(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Go(),ct(vn),ct(Jt),ed(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 5:return Jf(e),null;case 13:if(ct(_t),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(fe(340));Vo()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return ct(_t),null;case 4:return Go(),null;case 10:return $f(e.type._context),null;case 22:case 23:return fd(),null;case 24:return null;default:return null}}var Sa=!1,Qt=!1,Z_=typeof WeakSet=="function"?WeakSet:Set,Te=null;function Ao(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Mt(n,e,i)}else t.current=null}function af(n,e,t){try{t()}catch(i){Mt(n,e,i)}}var Dh=!1;function K_(n,e){if(Gc=pl,n=ag(),Gf(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var s=0,a=-1,u=-1,c=0,d=0,p=n,h=null;t:for(;;){for(var x;p!==t||r!==0&&p.nodeType!==3||(a=s+r),p!==o||i!==0&&p.nodeType!==3||(u=s+i),p.nodeType===3&&(s+=p.nodeValue.length),(x=p.firstChild)!==null;)h=p,p=x;for(;;){if(p===n)break t;if(h===t&&++c===r&&(a=s),h===o&&++d===i&&(u=s),(x=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=x}t=a===-1||u===-1?null:{start:a,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(Wc={focusedElem:n,selectionRange:t},pl=!1,Te=e;Te!==null;)if(e=Te,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Te=n;else for(;Te!==null;){e=Te;try{var M=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(M!==null){var g=M.memoizedProps,m=M.memoizedState,y=e.stateNode,w=y.getSnapshotBeforeUpdate(e.elementType===e.type?g:Yn(e.type,g),m);y.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(fe(163))}}catch(b){Mt(e,e.return,b)}if(n=e.sibling,n!==null){n.return=e.return,Te=n;break}Te=e.return}return M=Dh,Dh=!1,M}function Ts(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var o=r.destroy;r.destroy=void 0,o!==void 0&&af(e,t,o)}r=r.next}while(r!==i)}}function Wl(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function lf(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function rv(n){var e=n.alternate;e!==null&&(n.alternate=null,rv(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[di],delete e[Bs],delete e[qc],delete e[k_],delete e[F_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function ov(n){return n.tag===5||n.tag===3||n.tag===4}function Rh(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||ov(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function uf(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=vl));else if(i!==4&&(n=n.child,n!==null))for(uf(n,e,t),n=n.sibling;n!==null;)uf(n,e,t),n=n.sibling}function cf(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(cf(n,e,t),n=n.sibling;n!==null;)cf(n,e,t),n=n.sibling}var Ht=null,$n=!1;function Gi(n,e,t){for(t=t.child;t!==null;)sv(n,e,t),t=t.sibling}function sv(n,e,t){if(mi&&typeof mi.onCommitFiberUnmount=="function")try{mi.onCommitFiberUnmount(Nl,t)}catch{}switch(t.tag){case 5:Qt||Ao(t,e);case 6:var i=Ht,r=$n;Ht=null,Gi(n,e,t),Ht=i,$n=r,Ht!==null&&($n?(n=Ht,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Ht.removeChild(t.stateNode));break;case 18:Ht!==null&&($n?(n=Ht,t=t.stateNode,n.nodeType===8?bu(n.parentNode,t):n.nodeType===1&&bu(n,t),Is(n)):bu(Ht,t.stateNode));break;case 4:i=Ht,r=$n,Ht=t.stateNode.containerInfo,$n=!0,Gi(n,e,t),Ht=i,$n=r;break;case 0:case 11:case 14:case 15:if(!Qt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&((o&2)!==0||(o&4)!==0)&&af(t,e,s),r=r.next}while(r!==i)}Gi(n,e,t);break;case 1:if(!Qt&&(Ao(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Mt(t,e,a)}Gi(n,e,t);break;case 21:Gi(n,e,t);break;case 22:t.mode&1?(Qt=(i=Qt)||t.memoizedState!==null,Gi(n,e,t),Qt=i):Gi(n,e,t);break;default:Gi(n,e,t)}}function kh(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new Z_),e.forEach(function(i){var r=sy.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Gn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var o=n,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Ht=a.stateNode,$n=!1;break e;case 3:Ht=a.stateNode.containerInfo,$n=!0;break e;case 4:Ht=a.stateNode.containerInfo,$n=!0;break e}a=a.return}if(Ht===null)throw Error(fe(160));sv(o,s,r),Ht=null,$n=!1;var u=r.alternate;u!==null&&(u.return=null),r.return=null}catch(c){Mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)av(e,n),e=e.sibling}function av(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Gn(e,n),li(n),i&4){try{Ts(3,n,n.return),Wl(3,n)}catch(g){Mt(n,n.return,g)}try{Ts(5,n,n.return)}catch(g){Mt(n,n.return,g)}}break;case 1:Gn(e,n),li(n),i&512&&t!==null&&Ao(t,t.return);break;case 5:if(Gn(e,n),li(n),i&512&&t!==null&&Ao(t,t.return),n.flags&32){var r=n.stateNode;try{Ds(r,"")}catch(g){Mt(n,n.return,g)}}if(i&4&&(r=n.stateNode,r!=null)){var o=n.memoizedProps,s=t!==null?t.memoizedProps:o,a=n.type,u=n.updateQueue;if(n.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Am(r,o),kc(a,s);var c=kc(a,o);for(s=0;s<u.length;s+=2){var d=u[s],p=u[s+1];d==="style"?km(r,p):d==="dangerouslySetInnerHTML"?Dm(r,p):d==="children"?Ds(r,p):Pf(r,d,p,c)}switch(a){case"input":Ac(r,o);break;case"textarea":Lm(r,o);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?Do(r,!!o.multiple,x,!1):h!==!!o.multiple&&(o.defaultValue!=null?Do(r,!!o.multiple,o.defaultValue,!0):Do(r,!!o.multiple,o.multiple?[]:"",!1))}r[Bs]=o}catch(g){Mt(n,n.return,g)}}break;case 6:if(Gn(e,n),li(n),i&4){if(n.stateNode===null)throw Error(fe(162));r=n.stateNode,o=n.memoizedProps;try{r.nodeValue=o}catch(g){Mt(n,n.return,g)}}break;case 3:if(Gn(e,n),li(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Is(e.containerInfo)}catch(g){Mt(n,n.return,g)}break;case 4:Gn(e,n),li(n);break;case 13:Gn(e,n),li(n),r=n.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(ud=Et())),i&4&&kh(n);break;case 22:if(d=t!==null&&t.memoizedState!==null,n.mode&1?(Qt=(c=Qt)||d,Gn(e,n),Qt=c):Gn(e,n),li(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!d&&(n.mode&1)!==0)for(Te=n,d=n.child;d!==null;){for(p=Te=d;Te!==null;){switch(h=Te,x=h.child,h.tag){case 0:case 11:case 14:case 15:Ts(4,h,h.return);break;case 1:Ao(h,h.return);var M=h.stateNode;if(typeof M.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,M.props=e.memoizedProps,M.state=e.memoizedState,M.componentWillUnmount()}catch(g){Mt(i,t,g)}}break;case 5:Ao(h,h.return);break;case 22:if(h.memoizedState!==null){Ih(p);continue}}x!==null?(x.return=h,Te=x):Ih(p)}d=d.sibling}e:for(d=null,p=n;;){if(p.tag===5){if(d===null){d=p;try{r=p.stateNode,c?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=p.stateNode,u=p.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Rm("display",s))}catch(g){Mt(n,n.return,g)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(g){Mt(n,n.return,g)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===n)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===n)break e;for(;p.sibling===null;){if(p.return===null||p.return===n)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Gn(e,n),li(n),i&4&&kh(n);break;case 21:break;default:Gn(e,n),li(n)}}function li(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(ov(t)){var i=t;break e}t=t.return}throw Error(fe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ds(r,""),i.flags&=-33);var o=Rh(n);cf(n,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=Rh(n);uf(n,a,s);break;default:throw Error(fe(161))}}catch(u){Mt(n,n.return,u)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Q_(n,e,t){Te=n,lv(n)}function lv(n,e,t){for(var i=(n.mode&1)!==0;Te!==null;){var r=Te,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||Sa;if(!s){var a=r.alternate,u=a!==null&&a.memoizedState!==null||Qt;a=Sa;var c=Qt;if(Sa=s,(Qt=u)&&!c)for(Te=r;Te!==null;)s=Te,u=s.child,s.tag===22&&s.memoizedState!==null?Nh(r):u!==null?(u.return=s,Te=u):Nh(r);for(;o!==null;)Te=o,lv(o),o=o.sibling;Te=r,Sa=a,Qt=c}Fh(n)}else(r.subtreeFlags&8772)!==0&&o!==null?(o.return=r,Te=o):Fh(n)}}function Fh(n){for(;Te!==null;){var e=Te;if((e.flags&8772)!==0){var t=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Qt||Wl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Qt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Yn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&vh(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}vh(e,s,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Is(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(fe(163))}Qt||e.flags&512&&lf(e)}catch(h){Mt(e,e.return,h)}}if(e===n){Te=null;break}if(t=e.sibling,t!==null){t.return=e.return,Te=t;break}Te=e.return}}function Ih(n){for(;Te!==null;){var e=Te;if(e===n){Te=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Te=t;break}Te=e.return}}function Nh(n){for(;Te!==null;){var e=Te;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Wl(4,e)}catch(u){Mt(e,t,u)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(u){Mt(e,r,u)}}var o=e.return;try{lf(e)}catch(u){Mt(e,o,u)}break;case 5:var s=e.return;try{lf(e)}catch(u){Mt(e,s,u)}}}catch(u){Mt(e,e.return,u)}if(e===n){Te=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Te=a;break}Te=e.return}}var J_=Math.ceil,Al=Oi.ReactCurrentDispatcher,ad=Oi.ReactCurrentOwner,On=Oi.ReactCurrentBatchConfig,Je=0,zt=null,Lt=null,Gt=0,Mn=0,Lo=gr(0),Rt=0,Xs=null,Ur=0,jl=0,ld=0,Cs=null,dn=null,ud=0,jo=1/0,Ti=null,Ll=!1,ff=null,ur=null,Ma=!1,ir=null,Pl=0,As=0,df=null,rl=-1,ol=0;function nn(){return(Je&6)!==0?Et():rl!==-1?rl:rl=Et()}function cr(n){return(n.mode&1)===0?1:(Je&2)!==0&&Gt!==0?Gt&-Gt:N_.transition!==null?(ol===0&&(ol=jm()),ol):(n=it,n!==0||(n=window.event,n=n===void 0?16:Qm(n.type)),n)}function Jn(n,e,t,i){if(50<As)throw As=0,df=null,Error(fe(185));Ks(n,t,i),((Je&2)===0||n!==zt)&&(n===zt&&((Je&2)===0&&(jl|=t),Rt===4&&tr(n,Gt)),yn(n,i),t===1&&Je===0&&(e.mode&1)===0&&(jo=Et()+500,Vl&&vr()))}function yn(n,e){var t=n.callbackNode;N0(n,e);var i=hl(n,n===zt?Gt:0);if(i===0)t!==null&&jd(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&jd(t),e===1)n.tag===0?I_(zh.bind(null,n)):vg(zh.bind(null,n)),D_(function(){(Je&6)===0&&vr()}),t=null;else{switch(Xm(i)){case 1:t=If;break;case 4:t=Gm;break;case 16:t=dl;break;case 536870912:t=Wm;break;default:t=dl}t=gv(t,uv.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function uv(n,e){if(rl=-1,ol=0,(Je&6)!==0)throw Error(fe(327));var t=n.callbackNode;if(No()&&n.callbackNode!==t)return null;var i=hl(n,n===zt?Gt:0);if(i===0)return null;if((i&30)!==0||(i&n.expiredLanes)!==0||e)e=Dl(n,i);else{e=i;var r=Je;Je|=2;var o=fv();(zt!==n||Gt!==e)&&(Ti=null,jo=Et()+500,Rr(n,e));do try{ny();break}catch(a){cv(n,a)}while(1);Yf(),Al.current=o,Je=r,Lt!==null?e=0:(zt=null,Gt=0,e=Rt)}if(e!==0){if(e===2&&(r=Oc(n),r!==0&&(i=r,e=hf(n,r))),e===1)throw t=Xs,Rr(n,0),tr(n,i),yn(n,Et()),t;if(e===6)tr(n,i);else{if(r=n.current.alternate,(i&30)===0&&!ey(r)&&(e=Dl(n,i),e===2&&(o=Oc(n),o!==0&&(i=o,e=hf(n,o))),e===1))throw t=Xs,Rr(n,0),tr(n,i),yn(n,Et()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(fe(345));case 2:Sr(n,dn,Ti);break;case 3:if(tr(n,i),(i&130023424)===i&&(e=ud+500-Et(),10<e)){if(hl(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){nn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Xc(Sr.bind(null,n,dn,Ti),e);break}Sr(n,dn,Ti);break;case 4:if(tr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var s=31-Qn(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*J_(i/1960))-i,10<i){n.timeoutHandle=Xc(Sr.bind(null,n,dn,Ti),i);break}Sr(n,dn,Ti);break;case 5:Sr(n,dn,Ti);break;default:throw Error(fe(329))}}}return yn(n,Et()),n.callbackNode===t?uv.bind(null,n):null}function hf(n,e){var t=Cs;return n.current.memoizedState.isDehydrated&&(Rr(n,e).flags|=256),n=Dl(n,e),n!==2&&(e=dn,dn=t,e!==null&&pf(e)),n}function pf(n){dn===null?dn=n:dn.push.apply(dn,n)}function ey(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],o=r.getSnapshot;r=r.value;try{if(!ii(o(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function tr(n,e){for(e&=~ld,e&=~jl,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Qn(e),i=1<<t;n[t]=-1,e&=~i}}function zh(n){if((Je&6)!==0)throw Error(fe(327));No();var e=hl(n,0);if((e&1)===0)return yn(n,Et()),null;var t=Dl(n,e);if(n.tag!==0&&t===2){var i=Oc(n);i!==0&&(e=i,t=hf(n,i))}if(t===1)throw t=Xs,Rr(n,0),tr(n,e),yn(n,Et()),t;if(t===6)throw Error(fe(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Sr(n,dn,Ti),yn(n,Et()),null}function cd(n,e){var t=Je;Je|=1;try{return n(e)}finally{Je=t,Je===0&&(jo=Et()+500,Vl&&vr())}}function Br(n){ir!==null&&ir.tag===0&&(Je&6)===0&&No();var e=Je;Je|=1;var t=On.transition,i=it;try{if(On.transition=null,it=1,n)return n()}finally{it=i,On.transition=t,Je=e,(Je&6)===0&&vr()}}function fd(){Mn=Lo.current,ct(Lo)}function Rr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,P_(t)),Lt!==null)for(t=Lt.return;t!==null;){var i=t;switch(jf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&_l();break;case 3:Go(),ct(vn),ct(Jt),ed();break;case 5:Jf(i);break;case 4:Go();break;case 13:ct(_t);break;case 19:ct(_t);break;case 10:$f(i.type._context);break;case 22:case 23:fd()}t=t.return}if(zt=n,Lt=n=fr(n.current,null),Gt=Mn=e,Rt=0,Xs=null,ld=jl=Ur=0,dn=Cs=null,Cr!==null){for(e=0;e<Cr.length;e++)if(t=Cr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,o=t.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}t.pending=i}Cr=null}return n}function cv(n,e){do{var t=Lt;try{if(Yf(),tl.current=Cl,Tl){for(var i=xt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Tl=!1}if(Or=0,It=Dt=xt=null,bs=!1,Gs=0,ad.current=null,t===null||t.return===null){Rt=1,Xs=e,Lt=null;break}e:{var o=n,s=t.return,a=t,u=e;if(e=Gt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,p=d.tag;if((d.mode&1)===0&&(p===0||p===11||p===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var x=Eh(s);if(x!==null){x.flags&=-257,bh(x,s,a,o,e),x.mode&1&&Mh(o,c,e),e=x,u=c;var M=e.updateQueue;if(M===null){var g=new Set;g.add(u),e.updateQueue=g}else M.add(u);break e}else{if((e&1)===0){Mh(o,c,e),dd();break e}u=Error(fe(426))}}else if(pt&&a.mode&1){var m=Eh(s);if(m!==null){(m.flags&65536)===0&&(m.flags|=256),bh(m,s,a,o,e),Xf(Wo(u,a));break e}}o=u=Wo(u,a),Rt!==4&&(Rt=2),Cs===null?Cs=[o]:Cs.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var y=qg(o,u,e);gh(o,y);break e;case 1:a=u;var w=o.type,E=o.stateNode;if((o.flags&128)===0&&(typeof w.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(ur===null||!ur.has(E)))){o.flags|=65536,e&=-e,o.lanes|=e;var b=Yg(o,a,e);gh(o,b);break e}}o=o.return}while(o!==null)}hv(t)}catch(A){e=A,Lt===t&&t!==null&&(Lt=t=t.return);continue}break}while(1)}function fv(){var n=Al.current;return Al.current=Cl,n===null?Cl:n}function dd(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),zt===null||(Ur&268435455)===0&&(jl&268435455)===0||tr(zt,Gt)}function Dl(n,e){var t=Je;Je|=2;var i=fv();(zt!==n||Gt!==e)&&(Ti=null,Rr(n,e));do try{ty();break}catch(r){cv(n,r)}while(1);if(Yf(),Je=t,Al.current=i,Lt!==null)throw Error(fe(261));return zt=null,Gt=0,Rt}function ty(){for(;Lt!==null;)dv(Lt)}function ny(){for(;Lt!==null&&!C0();)dv(Lt)}function dv(n){var e=mv(n.alternate,n,Mn);n.memoizedProps=n.pendingProps,e===null?hv(n):Lt=e,ad.current=null}function hv(n){var e=n;do{var t=e.alternate;if(n=e.return,(e.flags&32768)===0){if(t=Y_(t,e,Mn),t!==null){Lt=t;return}}else{if(t=$_(t,e),t!==null){t.flags&=32767,Lt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Rt=6,Lt=null;return}}if(e=e.sibling,e!==null){Lt=e;return}Lt=e=n}while(e!==null);Rt===0&&(Rt=5)}function Sr(n,e,t){var i=it,r=On.transition;try{On.transition=null,it=1,iy(n,e,t,i)}finally{On.transition=r,it=i}return null}function iy(n,e,t,i){do No();while(ir!==null);if((Je&6)!==0)throw Error(fe(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(fe(177));n.callbackNode=null,n.callbackPriority=0;var o=t.lanes|t.childLanes;if(z0(n,o),n===zt&&(Lt=zt=null,Gt=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||Ma||(Ma=!0,gv(dl,function(){return No(),null})),o=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||o){o=On.transition,On.transition=null;var s=it;it=1;var a=Je;Je|=4,ad.current=null,K_(n,t),av(t,n),M_(Wc),pl=!!Gc,Wc=Gc=null,n.current=t,Q_(t),A0(),Je=a,it=s,On.transition=o}else n.current=t;if(Ma&&(Ma=!1,ir=n,Pl=r),o=n.pendingLanes,o===0&&(ur=null),D0(t.stateNode),yn(n,Et()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ll)throw Ll=!1,n=ff,ff=null,n;return(Pl&1)!==0&&n.tag!==0&&No(),o=n.pendingLanes,(o&1)!==0?n===df?As++:(As=0,df=n):As=0,vr(),null}function No(){if(ir!==null){var n=Xm(Pl),e=On.transition,t=it;try{if(On.transition=null,it=16>n?16:n,ir===null)var i=!1;else{if(n=ir,ir=null,Pl=0,(Je&6)!==0)throw Error(fe(331));var r=Je;for(Je|=4,Te=n.current;Te!==null;){var o=Te,s=o.child;if((Te.flags&16)!==0){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(Te=c;Te!==null;){var d=Te;switch(d.tag){case 0:case 11:case 15:Ts(8,d,o)}var p=d.child;if(p!==null)p.return=d,Te=p;else for(;Te!==null;){d=Te;var h=d.sibling,x=d.return;if(rv(d),d===c){Te=null;break}if(h!==null){h.return=x,Te=h;break}Te=x}}}var M=o.alternate;if(M!==null){var g=M.child;if(g!==null){M.child=null;do{var m=g.sibling;g.sibling=null,g=m}while(g!==null)}}Te=o}}if((o.subtreeFlags&2064)!==0&&s!==null)s.return=o,Te=s;else e:for(;Te!==null;){if(o=Te,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:Ts(9,o,o.return)}var y=o.sibling;if(y!==null){y.return=o.return,Te=y;break e}Te=o.return}}var w=n.current;for(Te=w;Te!==null;){s=Te;var E=s.child;if((s.subtreeFlags&2064)!==0&&E!==null)E.return=s,Te=E;else e:for(s=w;Te!==null;){if(a=Te,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Wl(9,a)}}catch(A){Mt(a,a.return,A)}if(a===s){Te=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,Te=b;break e}Te=a.return}}if(Je=r,vr(),mi&&typeof mi.onPostCommitFiberRoot=="function")try{mi.onPostCommitFiberRoot(Nl,n)}catch{}i=!0}return i}finally{it=t,On.transition=e}}return!1}function Oh(n,e,t){e=Wo(t,e),e=qg(n,e,1),n=lr(n,e,1),e=nn(),n!==null&&(Ks(n,1,e),yn(n,e))}function Mt(n,e,t){if(n.tag===3)Oh(n,n,t);else for(;e!==null;){if(e.tag===3){Oh(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ur===null||!ur.has(i))){n=Wo(t,n),n=Yg(e,n,1),e=lr(e,n,1),n=nn(),e!==null&&(Ks(e,1,n),yn(e,n));break}}e=e.return}}function ry(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=nn(),n.pingedLanes|=n.suspendedLanes&t,zt===n&&(Gt&t)===t&&(Rt===4||Rt===3&&(Gt&130023424)===Gt&&500>Et()-ud?Rr(n,0):ld|=t),yn(n,e)}function pv(n,e){e===0&&((n.mode&1)===0?e=1:(e=ha,ha<<=1,(ha&130023424)===0&&(ha=4194304)));var t=nn();n=Ni(n,e),n!==null&&(Ks(n,e,t),yn(n,t))}function oy(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),pv(n,t)}function sy(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(fe(314))}i!==null&&i.delete(e),pv(n,t)}var mv;mv=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||vn.current)gn=!0;else{if((n.lanes&t)===0&&(e.flags&128)===0)return gn=!1,q_(n,e,t);gn=(n.flags&131072)!==0}else gn=!1,pt&&(e.flags&1048576)!==0&&_g(e,wl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;il(n,e),n=e.pendingProps;var r=Bo(e,Jt.current);Io(e,t),r=nd(null,e,i,n,r,t);var o=id();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_n(i)?(o=!0,yl(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Kf(e),r.updater=Hl,e.stateNode=r,r._reactInternals=e,Jc(e,i,n,t),e=nf(null,e,i,!0,o,t)):(e.tag=0,pt&&o&&Wf(e),tn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(il(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=ly(i),n=Yn(i,n),r){case 0:e=tf(null,e,i,n,t);break e;case 1:e=Ah(null,e,i,n,t);break e;case 11:e=Th(null,e,i,n,t);break e;case 14:e=Ch(null,e,i,Yn(i.type,n),t);break e}throw Error(fe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),tf(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Ah(n,e,i,r,t);case 3:e:{if(Qg(e),n===null)throw Error(fe(387));i=e.pendingProps,o=e.memoizedState,r=o.element,Sg(n,e),El(e,i,null,t);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=Wo(Error(fe(423)),e),e=Lh(n,e,i,t,r);break e}else if(i!==r){r=Wo(Error(fe(424)),e),e=Lh(n,e,i,t,r);break e}else for(En=ar(e.stateNode.containerInfo.firstChild),bn=e,pt=!0,Zn=null,t=Tg(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Vo(),i===r){e=zi(n,e,t);break e}tn(n,e,i,t)}e=e.child}return e;case 5:return Cg(e),n===null&&Zc(e),i=e.type,r=e.pendingProps,o=n!==null?n.memoizedProps:null,s=r.children,jc(i,r)?s=null:o!==null&&jc(i,o)&&(e.flags|=32),Kg(n,e),tn(n,e,s,t),e.child;case 6:return n===null&&Zc(e),null;case 13:return Jg(n,e,t);case 4:return Qf(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Ho(e,null,i,t):tn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Th(n,e,i,r,t);case 7:return tn(n,e,e.pendingProps,t),e.child;case 8:return tn(n,e,e.pendingProps.children,t),e.child;case 12:return tn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,st(Sl,i._currentValue),i._currentValue=s,o!==null)if(ii(o.value,s)){if(o.children===r.children&&!vn.current){e=zi(n,e,t);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var u=a.firstContext;u!==null;){if(u.context===i){if(o.tag===1){u=Ri(-1,t&-t),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),Kc(o.return,t,e),a.lanes|=t;break}u=u.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(fe(341));s.lanes|=t,a=s.alternate,a!==null&&(a.lanes|=t),Kc(s,t,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}tn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Io(e,t),r=Un(r),i=i(r),e.flags|=1,tn(n,e,i,t),e.child;case 14:return i=e.type,r=Yn(i,e.pendingProps),r=Yn(i.type,r),Ch(n,e,i,r,t);case 15:return $g(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),il(n,e),e.tag=1,_n(i)?(n=!0,yl(e)):n=!1,Io(e,t),Eg(e,i,r),Jc(e,i,r,t),nf(null,e,i,!0,n,t);case 19:return ev(n,e,t);case 22:return Zg(n,e,t)}throw Error(fe(156,e.tag))};function gv(n,e){return Hm(n,e)}function ay(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(n,e,t,i){return new ay(n,e,t,i)}function hd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ly(n){if(typeof n=="function")return hd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Rf)return 11;if(n===kf)return 14}return 2}function fr(n,e){var t=n.alternate;return t===null?(t=Nn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function sl(n,e,t,i,r,o){var s=2;if(i=n,typeof n=="function")hd(n)&&(s=1);else if(typeof n=="string")s=5;else e:switch(n){case yo:return kr(t.children,r,o,e);case Df:s=8,r|=8;break;case Mc:return n=Nn(12,t,e,r|2),n.elementType=Mc,n.lanes=o,n;case Ec:return n=Nn(13,t,e,r),n.elementType=Ec,n.lanes=o,n;case bc:return n=Nn(19,t,e,r),n.elementType=bc,n.lanes=o,n;case bm:return Xl(t,r,o,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Mm:s=10;break e;case Em:s=9;break e;case Rf:s=11;break e;case kf:s=14;break e;case Ki:s=16,i=null;break e}throw Error(fe(130,n==null?n:typeof n,""))}return e=Nn(s,t,e,r),e.elementType=n,e.type=i,e.lanes=o,e}function kr(n,e,t,i){return n=Nn(7,n,i,e),n.lanes=t,n}function Xl(n,e,t,i){return n=Nn(22,n,i,e),n.elementType=bm,n.lanes=t,n.stateNode={isHidden:!1},n}function ku(n,e,t){return n=Nn(6,n,null,e),n.lanes=t,n}function Fu(n,e,t){return e=Nn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function uy(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pu(0),this.expirationTimes=pu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function pd(n,e,t,i,r,o,s,a,u){return n=new uy(n,e,t,a,u),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Nn(3,null,null,e),n.current=o,o.stateNode=n,o.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kf(o),n}function cy(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_o,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function vv(n){if(!n)return pr;n=n._reactInternals;e:{if(qr(n)!==n||n.tag!==1)throw Error(fe(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_n(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(fe(171))}if(n.tag===1){var t=n.type;if(_n(t))return gg(n,t,e)}return e}function _v(n,e,t,i,r,o,s,a,u){return n=pd(t,i,!0,n,r,o,s,a,u),n.context=vv(null),t=n.current,i=nn(),r=cr(t),o=Ri(i,r),o.callback=e!=null?e:null,lr(t,o,r),n.current.lanes=r,Ks(n,r,i),yn(n,i),n}function ql(n,e,t,i){var r=e.current,o=nn(),s=cr(r);return t=vv(t),e.context===null?e.context=t:e.pendingContext=t,e=Ri(o,s),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=lr(r,e,s),n!==null&&(Jn(n,r,s,o),el(n,r,s)),s}function Rl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Uh(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function md(n,e){Uh(n,e),(n=n.alternate)&&Uh(n,e)}function fy(){return null}var yv=typeof reportError=="function"?reportError:function(n){console.error(n)};function gd(n){this._internalRoot=n}Yl.prototype.render=gd.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(fe(409));ql(n,e,null,null)};Yl.prototype.unmount=gd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Br(function(){ql(null,n,null,null)}),e[Ii]=null}};function Yl(n){this._internalRoot=n}Yl.prototype.unstable_scheduleHydration=function(n){if(n){var e=$m();n={blockedOn:null,target:n,priority:e};for(var t=0;t<er.length&&e!==0&&e<er[t].priority;t++);er.splice(t,0,n),t===0&&Km(n)}};function vd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function $l(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Bh(){}function dy(n,e,t,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var c=Rl(s);o.call(c)}}var s=_v(e,i,n,0,null,!1,!1,"",Bh);return n._reactRootContainer=s,n[Ii]=s.current,Os(n.nodeType===8?n.parentNode:n),Br(),s}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Rl(u);a.call(c)}}var u=pd(n,0,!1,null,null,!1,!1,"",Bh);return n._reactRootContainer=u,n[Ii]=u.current,Os(n.nodeType===8?n.parentNode:n),Br(function(){ql(e,u,t,i)}),u}function Zl(n,e,t,i,r){var o=t._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var u=Rl(s);a.call(u)}}ql(e,s,n,r)}else s=dy(t,e,n,r,i);return Rl(s)}qm=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=gs(e.pendingLanes);t!==0&&(Nf(e,t|1),yn(e,Et()),(Je&6)===0&&(jo=Et()+500,vr()))}break;case 13:Br(function(){var i=Ni(n,1);if(i!==null){var r=nn();Jn(i,n,1,r)}}),md(n,1)}};zf=function(n){if(n.tag===13){var e=Ni(n,134217728);if(e!==null){var t=nn();Jn(e,n,134217728,t)}md(n,134217728)}};Ym=function(n){if(n.tag===13){var e=cr(n),t=Ni(n,e);if(t!==null){var i=nn();Jn(t,n,e,i)}md(n,e)}};$m=function(){return it};Zm=function(n,e){var t=it;try{return it=n,e()}finally{it=t}};Ic=function(n,e,t){switch(e){case"input":if(Ac(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Bl(i);if(!r)throw Error(fe(90));Cm(i),Ac(i,r)}}}break;case"textarea":Lm(n,t);break;case"select":e=t.value,e!=null&&Do(n,!!t.multiple,e,!1)}};Nm=cd;zm=Br;var hy={usingClientEntryPoint:!1,Events:[Js,Mo,Bl,Fm,Im,cd]},cs={findFiberByHostInstance:Tr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},py={bundleType:cs.bundleType,version:cs.version,rendererPackageName:cs.rendererPackageName,rendererConfig:cs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Oi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Bm(n),n===null?null:n.stateNode},findFiberByHostInstance:cs.findFiberByHostInstance||fy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ea.isDisabled&&Ea.supportsFiber)try{Nl=Ea.inject(py),mi=Ea}catch{}}Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hy;Cn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vd(e))throw Error(fe(200));return cy(n,e,null,t)};Cn.createRoot=function(n,e){if(!vd(n))throw Error(fe(299));var t=!1,i="",r=yv;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=pd(n,1,!1,null,null,t,!1,i,r),n[Ii]=e.current,Os(n.nodeType===8?n.parentNode:n),new gd(e)};Cn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(fe(188)):(n=Object.keys(n).join(","),Error(fe(268,n)));return n=Bm(e),n=n===null?null:n.stateNode,n};Cn.flushSync=function(n){return Br(n)};Cn.hydrate=function(n,e,t){if(!$l(e))throw Error(fe(200));return Zl(null,n,e,!0,t)};Cn.hydrateRoot=function(n,e,t){if(!vd(n))throw Error(fe(405));var i=t!=null&&t.hydratedSources||null,r=!1,o="",s=yv;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),e=_v(e,null,n,1,t!=null?t:null,r,!1,o,s),n[Ii]=e.current,Os(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Yl(e)};Cn.render=function(n,e,t){if(!$l(e))throw Error(fe(200));return Zl(null,n,e,!1,t)};Cn.unmountComponentAtNode=function(n){if(!$l(n))throw Error(fe(40));return n._reactRootContainer?(Br(function(){Zl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ii]=null})}),!0):!1};Cn.unstable_batchedUpdates=cd;Cn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!$l(t))throw Error(fe(200));if(n==null||n._reactInternals===void 0)throw Error(fe(38));return Zl(n,e,t,!1,i)};Cn.version="18.2.0-next-9e3b772b8-20220608";(function(n){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}e(),n.exports=Cn})(_m);var Vh=_m.exports;wc.createRoot=Vh.createRoot,wc.hydrateRoot=Vh.hydrateRoot;/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _d="143",Jr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},eo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},my=0,Hh=1,gy=2,xv=1,vy=2,_s=3,qs=0,ei=1,Xo=2,_y=1,dr=0,zo=1,Gh=2,Wh=3,jh=4,yy=5,vo=100,xy=101,wy=102,Xh=103,qh=104,Sy=200,My=201,Ey=202,by=203,wv=204,Sv=205,Ty=206,Cy=207,Ay=208,Ly=209,Py=210,Dy=0,Ry=1,ky=2,mf=3,Fy=4,Iy=5,Ny=6,zy=7,Mv=0,Oy=1,Uy=2,ki=0,By=1,Vy=2,Hy=3,Gy=4,Wy=5,Ev=300,qo=301,Yo=302,gf=303,vf=304,Kl=306,_f=1e3,Kn=1001,yf=1002,hn=1003,Yh=1004,$h=1005,pn=1006,jy=1007,Ql=1008,Vr=1009,Xy=1010,qy=1011,bv=1012,Yy=1013,Lr=1014,Pr=1015,Ys=1016,$y=1017,Zy=1018,Oo=1020,Ky=1021,Tv=1022,hi=1023,Qy=1024,Jy=1025,Fr=1026,$o=1027,ex=1028,tx=1029,nx=1030,ix=1031,rx=1033,Iu=33776,Nu=33777,zu=33778,Ou=33779,Zh=35840,Kh=35841,Qh=35842,Jh=35843,ox=36196,ep=37492,tp=37496,np=37808,ip=37809,rp=37810,op=37811,sp=37812,ap=37813,lp=37814,up=37815,cp=37816,fp=37817,dp=37818,hp=37819,pp=37820,mp=37821,gp=36492,Hr=3e3,St=3001,sx=3200,ax=3201,lx=0,ux=1,Ci="srgb",Dr="srgb-linear",Uu=7680,cx=519,vp=35044,_p="300 es",xf=1035;class Yr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bu=Math.PI/180,yp=180/Math.PI;function ta(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function mn(n,e,t){return Math.max(e,Math.min(t,n))}function fx(n,e){return(n%e+e)%e}function Vu(n,e,t){return(1-t)*n+t*e}function xp(n){return(n&n-1)===0&&n!==0}function wf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zn{constructor(){zn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,o,s,a,u,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=o,d[5]=u,d[6]=i,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,s=i[0],a=i[3],u=i[6],c=i[1],d=i[4],p=i[7],h=i[2],x=i[5],M=i[8],g=r[0],m=r[3],y=r[6],w=r[1],E=r[4],b=r[7],A=r[2],R=r[5],N=r[8];return o[0]=s*g+a*w+u*A,o[3]=s*m+a*E+u*R,o[6]=s*y+a*b+u*N,o[1]=c*g+d*w+p*A,o[4]=c*m+d*E+p*R,o[7]=c*y+d*b+p*N,o[2]=h*g+x*w+M*A,o[5]=h*m+x*E+M*R,o[8]=h*y+x*b+M*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],u=e[6],c=e[7],d=e[8];return t*s*d-t*a*c-i*o*d+i*a*u+r*o*c-r*s*u}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],u=e[6],c=e[7],d=e[8],p=d*s-a*c,h=a*u-d*o,x=c*o-s*u,M=t*p+i*h+r*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/M;return e[0]=p*g,e[1]=(r*c-d*i)*g,e[2]=(a*i-r*s)*g,e[3]=h*g,e[4]=(d*t-r*u)*g,e[5]=(r*o-a*t)*g,e[6]=x*g,e[7]=(i*u-c*t)*g,e[8]=(s*t-i*o)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,o,s,a){const u=Math.cos(o),c=Math.sin(o);return this.set(i*u,i*c,-i*(u*s+c*a)+s+e,-r*c,r*u,-r*(-c*s+u*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,o=r[0],s=r[3],a=r[6],u=r[1],c=r[4],d=r[7];return r[0]=t*o+i*u,r[3]=t*s+i*c,r[6]=t*a+i*d,r[1]=-i*o+t*u,r[4]=-i*s+t*c,r[7]=-i*a+t*d,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Cv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>65535)return!0;return!1}function kl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ir(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function al(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Hu={[Ci]:{[Dr]:Ir},[Dr]:{[Ci]:al}},Wn={legacyMode:!0,get workingColorSpace(){return Dr},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(Hu[e]&&Hu[e][t]!==void 0){const i=Hu[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},Av={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pt={r:0,g:0,b:0},jn={h:0,s:0,l:0},ba={h:0,s:0,l:0};function Gu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Ta(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class mt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Wn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Dr){return this.r=e,this.g=t,this.b=i,Wn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Dr){if(e=fx(e,1),t=mn(t,0,1),i=mn(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,s=2*i-o;this.r=Gu(s,o,e+1/3),this.g=Gu(s,o,e),this.b=Gu(s,o,e-1/3)}return Wn.toWorkingColorSpace(this,r),this}setStyle(e,t=Ci){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(o[1],10))/255,this.g=Math.min(255,parseInt(o[2],10))/255,this.b=Math.min(255,parseInt(o[3],10))/255,Wn.toWorkingColorSpace(this,t),i(o[4]),this;if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(o[1],10))/100,this.g=Math.min(100,parseInt(o[2],10))/100,this.b=Math.min(100,parseInt(o[3],10))/100,Wn.toWorkingColorSpace(this,t),i(o[4]),this;break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const u=parseFloat(o[1])/360,c=parseInt(o[2],10)/100,d=parseInt(o[3],10)/100;return i(o[4]),this.setHSL(u,c,d,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.r=parseInt(o.charAt(0)+o.charAt(0),16)/255,this.g=parseInt(o.charAt(1)+o.charAt(1),16)/255,this.b=parseInt(o.charAt(2)+o.charAt(2),16)/255,Wn.toWorkingColorSpace(this,t),this;if(s===6)return this.r=parseInt(o.charAt(0)+o.charAt(1),16)/255,this.g=parseInt(o.charAt(2)+o.charAt(3),16)/255,this.b=parseInt(o.charAt(4)+o.charAt(5),16)/255,Wn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Ci){const i=Av[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}copyLinearToSRGB(e){return this.r=al(e.r),this.g=al(e.g),this.b=al(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ci){return Wn.fromWorkingColorSpace(Ta(this,Pt),e),mn(Pt.r*255,0,255)<<16^mn(Pt.g*255,0,255)<<8^mn(Pt.b*255,0,255)<<0}getHexString(e=Ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Dr){Wn.fromWorkingColorSpace(Ta(this,Pt),t);const i=Pt.r,r=Pt.g,o=Pt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let u,c;const d=(a+s)/2;if(a===s)u=0,c=0;else{const p=s-a;switch(c=d<=.5?p/(s+a):p/(2-s-a),s){case i:u=(r-o)/p+(r<o?6:0);break;case r:u=(o-i)/p+2;break;case o:u=(i-r)/p+4;break}u/=6}return e.h=u,e.s=c,e.l=d,e}getRGB(e,t=Dr){return Wn.fromWorkingColorSpace(Ta(this,Pt),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=Ci){return Wn.fromWorkingColorSpace(Ta(this,Pt),e),e!==Ci?`color(${e} ${Pt.r} ${Pt.g} ${Pt.b})`:`rgb(${Pt.r*255|0},${Pt.g*255|0},${Pt.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(jn),jn.h+=e,jn.s+=t,jn.l+=i,this.setHSL(jn.h,jn.s,jn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(jn),e.getHSL(ba);const i=Vu(jn.h,ba.h,t),r=Vu(jn.s,ba.s,t),o=Vu(jn.l,ba.l,t);return this.setHSL(i,r,o),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}mt.NAMES=Av;let to;class Lv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{to===void 0&&(to=kl("canvas")),to.width=e.width,to.height=e.height;const i=to.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=to}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=kl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Ir(o[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ir(t[i]/255)*255):t[i]=Ir(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Pv{constructor(e=null){this.isSource=!0,this.uuid=ta(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Wu(r[s].image)):o.push(Wu(r[s]))}else o=Wu(r);i.url=o}return t||(e.images[this.uuid]=i),i}}function Wu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Lv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dx=0;class Vn extends Yr{constructor(e=Vn.DEFAULT_IMAGE,t=Vn.DEFAULT_MAPPING,i=Kn,r=Kn,o=pn,s=Ql,a=hi,u=Vr,c=1,d=Hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dx++}),this.uuid=ta(),this.name="",this.source=new Pv(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=u,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ev)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _f:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case yf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _f:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case yf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=Ev;class Nt{constructor(e=0,t=0,i=0,r=1){Nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,o;const u=e.elements,c=u[0],d=u[4],p=u[8],h=u[1],x=u[5],M=u[9],g=u[2],m=u[6],y=u[10];if(Math.abs(d-h)<.01&&Math.abs(p-g)<.01&&Math.abs(M-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(p+g)<.1&&Math.abs(M+m)<.1&&Math.abs(c+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,b=(x+1)/2,A=(y+1)/2,R=(d+h)/4,N=(p+g)/4,T=(M+m)/4;return E>b&&E>A?E<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(E),r=R/i,o=N/i):b>A?b<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(b),i=R/r,o=T/r):A<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(A),i=N/o,r=T/o),this.set(i,r,o,t),this}let w=Math.sqrt((m-M)*(m-M)+(p-g)*(p-g)+(h-d)*(h-d));return Math.abs(w)<.001&&(w=1),this.x=(m-M)/w,this.y=(p-g)/w,this.z=(h-d)/w,this.w=Math.acos((c+x+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gr extends Yr{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Vn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:pn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Pv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dv extends Vn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hx extends Vn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,o,s,a){let u=i[r+0],c=i[r+1],d=i[r+2],p=i[r+3];const h=o[s+0],x=o[s+1],M=o[s+2],g=o[s+3];if(a===0){e[t+0]=u,e[t+1]=c,e[t+2]=d,e[t+3]=p;return}if(a===1){e[t+0]=h,e[t+1]=x,e[t+2]=M,e[t+3]=g;return}if(p!==g||u!==h||c!==x||d!==M){let m=1-a;const y=u*h+c*x+d*M+p*g,w=y>=0?1:-1,E=1-y*y;if(E>Number.EPSILON){const A=Math.sqrt(E),R=Math.atan2(A,y*w);m=Math.sin(m*R)/A,a=Math.sin(a*R)/A}const b=a*w;if(u=u*m+h*b,c=c*m+x*b,d=d*m+M*b,p=p*m+g*b,m===1-a){const A=1/Math.sqrt(u*u+c*c+d*d+p*p);u*=A,c*=A,d*=A,p*=A}}e[t]=u,e[t+1]=c,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,r,o,s){const a=i[r],u=i[r+1],c=i[r+2],d=i[r+3],p=o[s],h=o[s+1],x=o[s+2],M=o[s+3];return e[t]=a*M+d*p+u*x-c*h,e[t+1]=u*M+d*h+c*p-a*x,e[t+2]=c*M+d*x+a*h-u*p,e[t+3]=d*M-a*p-u*h-c*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,u=Math.sin,c=a(i/2),d=a(r/2),p=a(o/2),h=u(i/2),x=u(r/2),M=u(o/2);switch(s){case"XYZ":this._x=h*d*p+c*x*M,this._y=c*x*p-h*d*M,this._z=c*d*M+h*x*p,this._w=c*d*p-h*x*M;break;case"YXZ":this._x=h*d*p+c*x*M,this._y=c*x*p-h*d*M,this._z=c*d*M-h*x*p,this._w=c*d*p+h*x*M;break;case"ZXY":this._x=h*d*p-c*x*M,this._y=c*x*p+h*d*M,this._z=c*d*M+h*x*p,this._w=c*d*p-h*x*M;break;case"ZYX":this._x=h*d*p-c*x*M,this._y=c*x*p+h*d*M,this._z=c*d*M-h*x*p,this._w=c*d*p+h*x*M;break;case"YZX":this._x=h*d*p+c*x*M,this._y=c*x*p+h*d*M,this._z=c*d*M-h*x*p,this._w=c*d*p-h*x*M;break;case"XZY":this._x=h*d*p-c*x*M,this._y=c*x*p-h*d*M,this._z=c*d*M+h*x*p,this._w=c*d*p+h*x*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],o=t[8],s=t[1],a=t[5],u=t[9],c=t[2],d=t[6],p=t[10],h=i+a+p;if(h>0){const x=.5/Math.sqrt(h+1);this._w=.25/x,this._x=(d-u)*x,this._y=(o-c)*x,this._z=(s-r)*x}else if(i>a&&i>p){const x=2*Math.sqrt(1+i-a-p);this._w=(d-u)/x,this._x=.25*x,this._y=(r+s)/x,this._z=(o+c)/x}else if(a>p){const x=2*Math.sqrt(1+a-i-p);this._w=(o-c)/x,this._x=(r+s)/x,this._y=.25*x,this._z=(u+d)/x}else{const x=2*Math.sqrt(1+p-i-a);this._w=(s-r)/x,this._x=(o+c)/x,this._y=(u+d)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,o=e._z,s=e._w,a=t._x,u=t._y,c=t._z,d=t._w;return this._x=i*d+s*a+r*c-o*u,this._y=r*d+s*u+o*a-i*c,this._z=o*d+s*c+i*u-r*a,this._w=s*d-i*a-r*u-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const u=1-a*a;if(u<=Number.EPSILON){const x=1-t;return this._w=x*s+t*this._w,this._x=x*i+t*this._x,this._y=x*r+t*this._y,this._z=x*o+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(u),d=Math.atan2(c,a),p=Math.sin((1-t)*d)/c,h=Math.sin(t*d)/c;return this._w=s*p+this._w*h,this._x=i*p+this._x*h,this._y=r*p+this._y*h,this._z=o*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(o),i*Math.cos(o),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*r,this.y=o[1]*t+o[4]*i+o[7]*r,this.z=o[2]*t+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,u=e.w,c=u*t+s*r-a*i,d=u*i+a*t-o*r,p=u*r+o*i-s*t,h=-o*t-s*i-a*r;return this.x=c*u+h*-o+d*-a-p*-s,this.y=d*u+h*-s+p*-o-c*-a,this.z=p*u+h*-a+c*-s-d*-o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r,this.y=o[1]*t+o[5]*i+o[9]*r,this.z=o[2]*t+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,o=e.z,s=t.x,a=t.y,u=t.z;return this.x=r*u-o*a,this.y=o*s-i*u,this.z=i*a-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ju.copy(this).projectOnVector(e),this.sub(ju)}reflect(e){return this.sub(ju.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ju=new j,wp=new Wr;class na{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,o=-1/0,s=-1/0,a=-1/0;for(let u=0,c=e.length;u<c;u+=3){const d=e[u],p=e[u+1],h=e[u+2];d<t&&(t=d),p<i&&(i=p),h<r&&(r=h),d>o&&(o=d),p>s&&(s=p),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(o,s,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,o=-1/0,s=-1/0,a=-1/0;for(let u=0,c=e.count;u<c;u++){const d=e.getX(u),p=e.getY(u),h=e.getZ(u);d<t&&(t=d),p<i&&(i=p),h<r&&(r=h),d>o&&(o=d),p>s&&(s=p),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(o,s,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=_r.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const o=i.attributes.position;for(let s=0,a=o.count;s<a;s++)_r.fromBufferAttribute(o,s).applyMatrix4(e.matrixWorld),this.expandByPoint(_r)}else i.boundingBox===null&&i.computeBoundingBox(),Xu.copy(i.boundingBox),Xu.applyMatrix4(e.matrixWorld),this.union(Xu);const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_r),_r.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fs),Ca.subVectors(this.max,fs),no.subVectors(e.a,fs),io.subVectors(e.b,fs),ro.subVectors(e.c,fs),Wi.subVectors(io,no),ji.subVectors(ro,io),yr.subVectors(no,ro);let t=[0,-Wi.z,Wi.y,0,-ji.z,ji.y,0,-yr.z,yr.y,Wi.z,0,-Wi.x,ji.z,0,-ji.x,yr.z,0,-yr.x,-Wi.y,Wi.x,0,-ji.y,ji.x,0,-yr.y,yr.x,0];return!qu(t,no,io,ro,Ca)||(t=[1,0,0,0,1,0,0,0,1],!qu(t,no,io,ro,Ca))?!1:(Aa.crossVectors(Wi,ji),t=[Aa.x,Aa.y,Aa.z],qu(t,no,io,ro,Ca))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return _r.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(_r).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xi=[new j,new j,new j,new j,new j,new j,new j,new j],_r=new j,Xu=new na,no=new j,io=new j,ro=new j,Wi=new j,ji=new j,yr=new j,fs=new j,Ca=new j,Aa=new j,xr=new j;function qu(n,e,t,i,r){for(let o=0,s=n.length-3;o<=s;o+=3){xr.fromArray(n,o);const a=r.x*Math.abs(xr.x)+r.y*Math.abs(xr.y)+r.z*Math.abs(xr.z),u=e.dot(xr),c=t.dot(xr),d=i.dot(xr);if(Math.max(-Math.max(u,c,d),Math.min(u,c,d))>a)return!1}return!0}const px=new na,Sp=new j,La=new j,Yu=new j;class yd{constructor(e=new j,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):px.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Yu.subVectors(e,this.center);const t=Yu.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(Yu.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?La.set(0,0,1).multiplyScalar(e.radius):La.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Sp.copy(e.center).add(La)),this.expandByPoint(Sp.copy(e.center).sub(La)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new j,$u=new j,Pa=new j,Xi=new j,Zu=new j,Da=new j,Ku=new j;class mx{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.direction).multiplyScalar(t).add(this.origin),wi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){$u.copy(e).add(t).multiplyScalar(.5),Pa.copy(t).sub(e).normalize(),Xi.copy(this.origin).sub($u);const o=e.distanceTo(t)*.5,s=-this.direction.dot(Pa),a=Xi.dot(this.direction),u=-Xi.dot(Pa),c=Xi.lengthSq(),d=Math.abs(1-s*s);let p,h,x,M;if(d>0)if(p=s*u-a,h=s*a-u,M=o*d,p>=0)if(h>=-M)if(h<=M){const g=1/d;p*=g,h*=g,x=p*(p+s*h+2*a)+h*(s*p+h+2*u)+c}else h=o,p=Math.max(0,-(s*h+a)),x=-p*p+h*(h+2*u)+c;else h=-o,p=Math.max(0,-(s*h+a)),x=-p*p+h*(h+2*u)+c;else h<=-M?(p=Math.max(0,-(-s*o+a)),h=p>0?-o:Math.min(Math.max(-o,-u),o),x=-p*p+h*(h+2*u)+c):h<=M?(p=0,h=Math.min(Math.max(-o,-u),o),x=h*(h+2*u)+c):(p=Math.max(0,-(s*o+a)),h=p>0?o:Math.min(Math.max(-o,-u),o),x=-p*p+h*(h+2*u)+c);else h=s>0?-o:o,p=Math.max(0,-(s*h+a)),x=-p*p+h*(h+2*u)+c;return i&&i.copy(this.direction).multiplyScalar(p).add(this.origin),r&&r.copy(Pa).multiplyScalar(h).add($u),x}intersectSphere(e,t){wi.subVectors(e.center,this.origin);const i=wi.dot(this.direction),r=wi.dot(wi)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,u=i+s;return a<0&&u<0?null:a<0?this.at(u,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,o,s,a,u;const c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(o=(e.min.y-h.y)*d,s=(e.max.y-h.y)*d):(o=(e.max.y-h.y)*d,s=(e.min.y-h.y)*d),i>s||o>r||((o>i||i!==i)&&(i=o),(s<r||r!==r)&&(r=s),p>=0?(a=(e.min.z-h.z)*p,u=(e.max.z-h.z)*p):(a=(e.max.z-h.z)*p,u=(e.min.z-h.z)*p),i>u||a>r)||((a>i||i!==i)&&(i=a),(u<r||r!==r)&&(r=u),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,i,r,o){Zu.subVectors(t,e),Da.subVectors(i,e),Ku.crossVectors(Zu,Da);let s=this.direction.dot(Ku),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Xi.subVectors(this.origin,e);const u=a*this.direction.dot(Da.crossVectors(Xi,Da));if(u<0)return null;const c=a*this.direction.dot(Zu.cross(Xi));if(c<0||u+c>s)return null;const d=-a*Xi.dot(Ku);return d<0?null:this.at(d/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wt{constructor(){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,o,s,a,u,c,d,p,h,x,M,g,m){const y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=r,y[1]=o,y[5]=s,y[9]=a,y[13]=u,y[2]=c,y[6]=d,y[10]=p,y[14]=h,y[3]=x,y[7]=M,y[11]=g,y[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/oo.setFromMatrixColumn(e,0).length(),o=1/oo.setFromMatrixColumn(e,1).length(),s=1/oo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),u=Math.cos(r),c=Math.sin(r),d=Math.cos(o),p=Math.sin(o);if(e.order==="XYZ"){const h=s*d,x=s*p,M=a*d,g=a*p;t[0]=u*d,t[4]=-u*p,t[8]=c,t[1]=x+M*c,t[5]=h-g*c,t[9]=-a*u,t[2]=g-h*c,t[6]=M+x*c,t[10]=s*u}else if(e.order==="YXZ"){const h=u*d,x=u*p,M=c*d,g=c*p;t[0]=h+g*a,t[4]=M*a-x,t[8]=s*c,t[1]=s*p,t[5]=s*d,t[9]=-a,t[2]=x*a-M,t[6]=g+h*a,t[10]=s*u}else if(e.order==="ZXY"){const h=u*d,x=u*p,M=c*d,g=c*p;t[0]=h-g*a,t[4]=-s*p,t[8]=M+x*a,t[1]=x+M*a,t[5]=s*d,t[9]=g-h*a,t[2]=-s*c,t[6]=a,t[10]=s*u}else if(e.order==="ZYX"){const h=s*d,x=s*p,M=a*d,g=a*p;t[0]=u*d,t[4]=M*c-x,t[8]=h*c+g,t[1]=u*p,t[5]=g*c+h,t[9]=x*c-M,t[2]=-c,t[6]=a*u,t[10]=s*u}else if(e.order==="YZX"){const h=s*u,x=s*c,M=a*u,g=a*c;t[0]=u*d,t[4]=g-h*p,t[8]=M*p+x,t[1]=p,t[5]=s*d,t[9]=-a*d,t[2]=-c*d,t[6]=x*p+M,t[10]=h-g*p}else if(e.order==="XZY"){const h=s*u,x=s*c,M=a*u,g=a*c;t[0]=u*d,t[4]=-p,t[8]=c*d,t[1]=h*p+g,t[5]=s*d,t[9]=x*p-M,t[2]=M*p-x,t[6]=a*d,t[10]=g*p+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gx,e,vx)}lookAt(e,t,i){const r=this.elements;return wn.subVectors(e,t),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),qi.crossVectors(i,wn),qi.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),qi.crossVectors(i,wn)),qi.normalize(),Ra.crossVectors(wn,qi),r[0]=qi.x,r[4]=Ra.x,r[8]=wn.x,r[1]=qi.y,r[5]=Ra.y,r[9]=wn.y,r[2]=qi.z,r[6]=Ra.z,r[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,s=i[0],a=i[4],u=i[8],c=i[12],d=i[1],p=i[5],h=i[9],x=i[13],M=i[2],g=i[6],m=i[10],y=i[14],w=i[3],E=i[7],b=i[11],A=i[15],R=r[0],N=r[4],T=r[8],I=r[12],H=r[1],Y=r[5],ce=r[9],de=r[13],q=r[2],ae=r[6],Q=r[10],oe=r[14],V=r[3],B=r[7],G=r[11],Z=r[15];return o[0]=s*R+a*H+u*q+c*V,o[4]=s*N+a*Y+u*ae+c*B,o[8]=s*T+a*ce+u*Q+c*G,o[12]=s*I+a*de+u*oe+c*Z,o[1]=d*R+p*H+h*q+x*V,o[5]=d*N+p*Y+h*ae+x*B,o[9]=d*T+p*ce+h*Q+x*G,o[13]=d*I+p*de+h*oe+x*Z,o[2]=M*R+g*H+m*q+y*V,o[6]=M*N+g*Y+m*ae+y*B,o[10]=M*T+g*ce+m*Q+y*G,o[14]=M*I+g*de+m*oe+y*Z,o[3]=w*R+E*H+b*q+A*V,o[7]=w*N+E*Y+b*ae+A*B,o[11]=w*T+E*ce+b*Q+A*G,o[15]=w*I+E*de+b*oe+A*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],u=e[9],c=e[13],d=e[2],p=e[6],h=e[10],x=e[14],M=e[3],g=e[7],m=e[11],y=e[15];return M*(+o*u*p-r*c*p-o*a*h+i*c*h+r*a*x-i*u*x)+g*(+t*u*x-t*c*h+o*s*h-r*s*x+r*c*d-o*u*d)+m*(+t*c*p-t*a*x-o*s*p+i*s*x+o*a*d-i*c*d)+y*(-r*a*d-t*u*p+t*a*h+r*s*p-i*s*h+i*u*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],u=e[6],c=e[7],d=e[8],p=e[9],h=e[10],x=e[11],M=e[12],g=e[13],m=e[14],y=e[15],w=p*m*c-g*h*c+g*u*x-a*m*x-p*u*y+a*h*y,E=M*h*c-d*m*c-M*u*x+s*m*x+d*u*y-s*h*y,b=d*g*c-M*p*c+M*a*x-s*g*x-d*a*y+s*p*y,A=M*p*u-d*g*u-M*a*h+s*g*h+d*a*m-s*p*m,R=t*w+i*E+r*b+o*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/R;return e[0]=w*N,e[1]=(g*h*o-p*m*o-g*r*x+i*m*x+p*r*y-i*h*y)*N,e[2]=(a*m*o-g*u*o+g*r*c-i*m*c-a*r*y+i*u*y)*N,e[3]=(p*u*o-a*h*o-p*r*c+i*h*c+a*r*x-i*u*x)*N,e[4]=E*N,e[5]=(d*m*o-M*h*o+M*r*x-t*m*x-d*r*y+t*h*y)*N,e[6]=(M*u*o-s*m*o-M*r*c+t*m*c+s*r*y-t*u*y)*N,e[7]=(s*h*o-d*u*o+d*r*c-t*h*c-s*r*x+t*u*x)*N,e[8]=b*N,e[9]=(M*p*o-d*g*o-M*i*x+t*g*x+d*i*y-t*p*y)*N,e[10]=(s*g*o-M*a*o+M*i*c-t*g*c-s*i*y+t*a*y)*N,e[11]=(d*a*o-s*p*o-d*i*c+t*p*c+s*i*x-t*a*x)*N,e[12]=A*N,e[13]=(d*g*r-M*p*r+M*i*h-t*g*h-d*i*m+t*p*m)*N,e[14]=(M*a*r-s*g*r-M*i*u+t*g*u+s*i*m-t*a*m)*N,e[15]=(s*p*r-d*a*r+d*i*u-t*p*u-s*i*h+t*a*h)*N,this}scale(e){const t=this.elements,i=e.x,r=e.y,o=e.z;return t[0]*=i,t[4]*=r,t[8]*=o,t[1]*=i,t[5]*=r,t[9]*=o,t[2]*=i,t[6]*=r,t[10]*=o,t[3]*=i,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),o=1-i,s=e.x,a=e.y,u=e.z,c=o*s,d=o*a;return this.set(c*s+i,c*a-r*u,c*u+r*a,0,c*a+r*u,d*a+i,d*u-r*s,0,c*u-r*a,d*u+r*s,o*u*u+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,o=t._x,s=t._y,a=t._z,u=t._w,c=o+o,d=s+s,p=a+a,h=o*c,x=o*d,M=o*p,g=s*d,m=s*p,y=a*p,w=u*c,E=u*d,b=u*p,A=i.x,R=i.y,N=i.z;return r[0]=(1-(g+y))*A,r[1]=(x+b)*A,r[2]=(M-E)*A,r[3]=0,r[4]=(x-b)*R,r[5]=(1-(h+y))*R,r[6]=(m+w)*R,r[7]=0,r[8]=(M+E)*N,r[9]=(m-w)*N,r[10]=(1-(h+g))*N,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let o=oo.set(r[0],r[1],r[2]).length();const s=oo.set(r[4],r[5],r[6]).length(),a=oo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Xn.copy(this);const c=1/o,d=1/s,p=1/a;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=d,Xn.elements[5]*=d,Xn.elements[6]*=d,Xn.elements[8]*=p,Xn.elements[9]*=p,Xn.elements[10]*=p,t.setFromRotationMatrix(Xn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,t,i,r,o,s){const a=this.elements,u=2*o/(t-e),c=2*o/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r),h=-(s+o)/(s-o),x=-2*s*o/(s-o);return a[0]=u,a[4]=0,a[8]=d,a[12]=0,a[1]=0,a[5]=c,a[9]=p,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=x,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,o,s){const a=this.elements,u=1/(t-e),c=1/(i-r),d=1/(s-o),p=(t+e)*u,h=(i+r)*c,x=(s+o)*d;return a[0]=2*u,a[4]=0,a[8]=0,a[12]=-p,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*d,a[14]=-x,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const oo=new j,Xn=new Wt,gx=new j(0,0,0),vx=new j(1,1,1),qi=new j,Ra=new j,wn=new j,Mp=new Wt,Ep=new Wr;class ia{constructor(e=0,t=0,i=0,r=ia.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],u=r[1],c=r[5],d=r[9],p=r[2],h=r[6],x=r[10];switch(t){case"XYZ":this._y=Math.asin(mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,x),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,x),this._z=Math.atan2(u,c)):(this._y=Math.atan2(-p,o),this._z=0);break;case"ZXY":this._x=Math.asin(mn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,x),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(u,o));break;case"ZYX":this._y=Math.asin(-mn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,x),this._z=Math.atan2(u,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(mn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,o)):(this._x=0,this._y=Math.atan2(a,x));break;case"XZY":this._z=Math.asin(-mn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-d,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Mp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ep.setFromEuler(this),this.setFromQuaternion(Ep,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}ia.DefaultOrder="XYZ";ia.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Rv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _x=0;const bp=new j,so=new Wr,Si=new Wt,ka=new j,ds=new j,yx=new j,xx=new Wr,Tp=new j(1,0,0),Cp=new j(0,1,0),Ap=new j(0,0,1),wx={type:"added"},Lp={type:"removed"};class ri extends Yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=ta(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ri.DefaultUp.clone();const e=new j,t=new ia,i=new Wr,r=new j(1,1,1);function o(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Wt},normalMatrix:{value:new zn}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=ri.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Rv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return so.setFromAxisAngle(e,t),this.quaternion.multiply(so),this}rotateOnWorldAxis(e,t){return so.setFromAxisAngle(e,t),this.quaternion.premultiply(so),this}rotateX(e){return this.rotateOnAxis(Tp,e)}rotateY(e){return this.rotateOnAxis(Cp,e)}rotateZ(e){return this.rotateOnAxis(Ap,e)}translateOnAxis(e,t){return bp.copy(e).applyQuaternion(this.quaternion),this.position.add(bp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tp,e)}translateY(e){return this.translateOnAxis(Cp,e)}translateZ(e){return this.translateOnAxis(Ap,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ka.copy(e):ka.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(ds,ka,this.up):Si.lookAt(ka,ds,this.up),this.quaternion.setFromRotationMatrix(Si),r&&(Si.extractRotation(r.matrixWorld),so.setFromRotationMatrix(Si),this.quaternion.premultiply(so.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(wx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Lp)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,e,yx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,xx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(a,u){return a[u.uuid]===void 0&&(a[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const u=a.shapes;if(Array.isArray(u))for(let c=0,d=u.length;c<d;c++){const p=u[c];o(e.shapes,p)}else o(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let u=0,c=this.material.length;u<c;u++)a.push(o(e.materials,this.material[u]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const u=this.animations[a];r.animations.push(o(e.animations,u))}}if(t){const a=s(e.geometries),u=s(e.materials),c=s(e.textures),d=s(e.images),p=s(e.shapes),h=s(e.skeletons),x=s(e.animations),M=s(e.nodes);a.length>0&&(i.geometries=a),u.length>0&&(i.materials=u),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),x.length>0&&(i.animations=x),M.length>0&&(i.nodes=M)}return i.object=r,i;function s(a){const u=[];for(const c in a){const d=a[c];delete d.metadata,u.push(d)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ri.DefaultUp=new j(0,1,0);ri.DefaultMatrixAutoUpdate=!0;const qn=new j,Mi=new j,Qu=new j,Ei=new j,ao=new j,lo=new j,Pp=new j,Ju=new j,ec=new j,tc=new j;class Li{constructor(e=new j,t=new j,i=new j){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),qn.subVectors(e,t),r.cross(qn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,i,r,o){qn.subVectors(r,t),Mi.subVectors(i,t),Qu.subVectors(e,t);const s=qn.dot(qn),a=qn.dot(Mi),u=qn.dot(Qu),c=Mi.dot(Mi),d=Mi.dot(Qu),p=s*c-a*a;if(p===0)return o.set(-2,-1,-1);const h=1/p,x=(c*u-a*d)*h,M=(s*d-a*u)*h;return o.set(1-x-M,M,x)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ei),Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getUV(e,t,i,r,o,s,a,u){return this.getBarycoord(e,t,i,r,Ei),u.set(0,0),u.addScaledVector(o,Ei.x),u.addScaledVector(s,Ei.y),u.addScaledVector(a,Ei.z),u}static isFrontFacing(e,t,i,r){return qn.subVectors(i,t),Mi.subVectors(e,t),qn.cross(Mi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),qn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Li.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,o){return Li.getUV(e,this.a,this.b,this.c,t,i,r,o)}containsPoint(e){return Li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,o=this.c;let s,a;ao.subVectors(r,i),lo.subVectors(o,i),Ju.subVectors(e,i);const u=ao.dot(Ju),c=lo.dot(Ju);if(u<=0&&c<=0)return t.copy(i);ec.subVectors(e,r);const d=ao.dot(ec),p=lo.dot(ec);if(d>=0&&p<=d)return t.copy(r);const h=u*p-d*c;if(h<=0&&u>=0&&d<=0)return s=u/(u-d),t.copy(i).addScaledVector(ao,s);tc.subVectors(e,o);const x=ao.dot(tc),M=lo.dot(tc);if(M>=0&&x<=M)return t.copy(o);const g=x*c-u*M;if(g<=0&&c>=0&&M<=0)return a=c/(c-M),t.copy(i).addScaledVector(lo,a);const m=d*M-x*p;if(m<=0&&p-d>=0&&x-M>=0)return Pp.subVectors(o,r),a=(p-d)/(p-d+(x-M)),t.copy(r).addScaledVector(Pp,a);const y=1/(m+g+h);return s=g*y,a=h*y,t.copy(i).addScaledVector(ao,s).addScaledVector(lo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Sx=0;class Jl extends Yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=ta(),this.name="",this.type="Material",this.blending=zo,this.side=qs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=wv,this.blendDst=Sv,this.blendEquation=vo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=mf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Uu,this.stencilZFail=Uu,this.stencilZPass=Uu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===_y;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zo&&(i.blending=this.blending),this.side!==qs&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const u=o[a];delete u.metadata,s.push(u)}return s}if(t){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Fl extends Jl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new j,Fa=new Xe;class ti{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=vp,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let r=0,o=e.length;r<o;r++){let s=e[r];s===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),s=new mt),t[i++]=s.r,t[i++]=s.g,t[i++]=s.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let r=0,o=e.length;r<o;r++){let s=e[r];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),s=new Xe),t[i++]=s.x,t[i++]=s.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let r=0,o=e.length;r<o;r++){let s=e[r];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),s=new j),t[i++]=s.x,t[i++]=s.y,t[i++]=s.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let r=0,o=e.length;r<o;r++){let s=e[r];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),s=new Nt),t[i++]=s.x,t[i++]=s.y,t[i++]=s.z,t[i++]=s.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Fa.fromBufferAttribute(this,t),Fa.applyMatrix3(e),this.setXY(t,Fa.x,Fa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vp&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class xd extends ti{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class kv extends ti{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ni extends ti{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Mx=0;const Dn=new Wt,nc=new ri,uo=new j,Sn=new na,hs=new na,Ft=new j;class Ui extends Yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=ta(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cv(e)?kv:xd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new zn().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,i){return Dn.makeTranslation(e,t,i),this.applyMatrix4(Dn),this}scale(e,t,i){return Dn.makeScale(e,t,i),this.applyMatrix4(Dn),this}lookAt(e){return nc.lookAt(e),nc.updateMatrix(),this.applyMatrix4(nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(uo).negate(),this.translate(uo.x,uo.y,uo.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new ni(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new na);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const o=t[i];Sn.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){const a=t[o];hs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(Sn.min,hs.min),Sn.expandByPoint(Ft),Ft.addVectors(Sn.max,hs.max),Sn.expandByPoint(Ft)):(Sn.expandByPoint(hs.min),Sn.expandByPoint(hs.max))}Sn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Ft.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Ft));if(t)for(let o=0,s=t.length;o<s;o++){const a=t[o],u=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Ft.fromBufferAttribute(a,c),u&&(uo.fromBufferAttribute(e,c),Ft.add(uo)),r=Math.max(r,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,o=t.normal.array,s=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ti(new Float32Array(4*a),4));const u=this.getAttribute("tangent").array,c=[],d=[];for(let H=0;H<a;H++)c[H]=new j,d[H]=new j;const p=new j,h=new j,x=new j,M=new Xe,g=new Xe,m=new Xe,y=new j,w=new j;function E(H,Y,ce){p.fromArray(r,H*3),h.fromArray(r,Y*3),x.fromArray(r,ce*3),M.fromArray(s,H*2),g.fromArray(s,Y*2),m.fromArray(s,ce*2),h.sub(p),x.sub(p),g.sub(M),m.sub(M);const de=1/(g.x*m.y-m.x*g.y);!isFinite(de)||(y.copy(h).multiplyScalar(m.y).addScaledVector(x,-g.y).multiplyScalar(de),w.copy(x).multiplyScalar(g.x).addScaledVector(h,-m.x).multiplyScalar(de),c[H].add(y),c[Y].add(y),c[ce].add(y),d[H].add(w),d[Y].add(w),d[ce].add(w))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let H=0,Y=b.length;H<Y;++H){const ce=b[H],de=ce.start,q=ce.count;for(let ae=de,Q=de+q;ae<Q;ae+=3)E(i[ae+0],i[ae+1],i[ae+2])}const A=new j,R=new j,N=new j,T=new j;function I(H){N.fromArray(o,H*3),T.copy(N);const Y=c[H];A.copy(Y),A.sub(N.multiplyScalar(N.dot(Y))).normalize(),R.crossVectors(T,Y);const de=R.dot(d[H])<0?-1:1;u[H*4]=A.x,u[H*4+1]=A.y,u[H*4+2]=A.z,u[H*4+3]=de}for(let H=0,Y=b.length;H<Y;++H){const ce=b[H],de=ce.start,q=ce.count;for(let ae=de,Q=de+q;ae<Q;ae+=3)I(i[ae+0]),I(i[ae+1]),I(i[ae+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ti(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,x=i.count;h<x;h++)i.setXYZ(h,0,0,0);const r=new j,o=new j,s=new j,a=new j,u=new j,c=new j,d=new j,p=new j;if(e)for(let h=0,x=e.count;h<x;h+=3){const M=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),d.subVectors(s,o),p.subVectors(r,o),d.cross(p),a.fromBufferAttribute(i,M),u.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(d),u.add(d),c.add(d),i.setXYZ(M,a.x,a.y,a.z),i.setXYZ(g,u.x,u.y,u.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,x=t.count;h<x;h+=3)r.fromBufferAttribute(t,h+0),o.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),d.subVectors(s,o),p.subVectors(r,o),d.cross(p),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const s=i[r].array,a=e.attributes[r],u=a.array,c=a.itemSize*t,d=Math.min(u.length,s.length-c);for(let p=0,h=c;p<d;p++,h++)s[h]=u[p]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,u){const c=a.array,d=a.itemSize,p=a.normalized,h=new c.constructor(u.length*d);let x=0,M=0;for(let g=0,m=u.length;g<m;g++){a.isInterleavedBufferAttribute?x=u[g]*a.data.stride+a.offset:x=u[g]*d;for(let y=0;y<d;y++)h[M++]=c[x++]}return new ti(h,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ui,i=this.index.array,r=this.attributes;for(const a in r){const u=r[a],c=e(u,i);t.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const u=[],c=o[a];for(let d=0,p=c.length;d<p;d++){const h=c[d],x=e(h,i);u.push(x)}t.morphAttributes[a]=u}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,u=s.length;a<u;a++){const c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const c in u)u[c]!==void 0&&(e[c]=u[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const u in i){const c=i[u];e.data.attributes[u]=c.toJSON(e.data)}const r={};let o=!1;for(const u in this.morphAttributes){const c=this.morphAttributes[u],d=[];for(let p=0,h=c.length;p<h;p++){const x=c[p];d.push(x.toJSON(e.data))}d.length>0&&(r[u]=d,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const o=e.morphAttributes;for(const c in o){const d=[],p=o[c];for(let h=0,x=p.length;h<x;h++)d.push(p[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,d=s.length;c<d;c++){const p=s[c];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dp=new Wt,co=new mx,ic=new yd,Yi=new j,$i=new j,Zi=new j,rc=new j,oc=new j,sc=new j,Ia=new j,Na=new j,za=new j,Oa=new Xe,Ua=new Xe,Ba=new Xe,ac=new j,Va=new j;class pi extends ri{constructor(e=new Ui,t=new Fl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}raycast(e,t){const i=this.geometry,r=this.material,o=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),ic.copy(i.boundingSphere),ic.applyMatrix4(o),e.ray.intersectsSphere(ic)===!1)||(Dp.copy(o).invert(),co.copy(e.ray).applyMatrix4(Dp),i.boundingBox!==null&&co.intersectsBox(i.boundingBox)===!1))return;let s;const a=i.index,u=i.attributes.position,c=i.morphAttributes.position,d=i.morphTargetsRelative,p=i.attributes.uv,h=i.attributes.uv2,x=i.groups,M=i.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,m=x.length;g<m;g++){const y=x[g],w=r[y.materialIndex],E=Math.max(y.start,M.start),b=Math.min(a.count,Math.min(y.start+y.count,M.start+M.count));for(let A=E,R=b;A<R;A+=3){const N=a.getX(A),T=a.getX(A+1),I=a.getX(A+2);s=Ha(this,w,e,co,u,c,d,p,h,N,T,I),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const g=Math.max(0,M.start),m=Math.min(a.count,M.start+M.count);for(let y=g,w=m;y<w;y+=3){const E=a.getX(y),b=a.getX(y+1),A=a.getX(y+2);s=Ha(this,r,e,co,u,c,d,p,h,E,b,A),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(u!==void 0)if(Array.isArray(r))for(let g=0,m=x.length;g<m;g++){const y=x[g],w=r[y.materialIndex],E=Math.max(y.start,M.start),b=Math.min(u.count,Math.min(y.start+y.count,M.start+M.count));for(let A=E,R=b;A<R;A+=3){const N=A,T=A+1,I=A+2;s=Ha(this,w,e,co,u,c,d,p,h,N,T,I),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const g=Math.max(0,M.start),m=Math.min(u.count,M.start+M.count);for(let y=g,w=m;y<w;y+=3){const E=y,b=y+1,A=y+2;s=Ha(this,r,e,co,u,c,d,p,h,E,b,A),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}}function Ex(n,e,t,i,r,o,s,a){let u;if(e.side===ei?u=i.intersectTriangle(s,o,r,!0,a):u=i.intersectTriangle(r,o,s,e.side!==Xo,a),u===null)return null;Va.copy(a),Va.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Va);return c<t.near||c>t.far?null:{distance:c,point:Va.clone(),object:n}}function Ha(n,e,t,i,r,o,s,a,u,c,d,p){Yi.fromBufferAttribute(r,c),$i.fromBufferAttribute(r,d),Zi.fromBufferAttribute(r,p);const h=n.morphTargetInfluences;if(o&&h){Ia.set(0,0,0),Na.set(0,0,0),za.set(0,0,0);for(let M=0,g=o.length;M<g;M++){const m=h[M],y=o[M];m!==0&&(rc.fromBufferAttribute(y,c),oc.fromBufferAttribute(y,d),sc.fromBufferAttribute(y,p),s?(Ia.addScaledVector(rc,m),Na.addScaledVector(oc,m),za.addScaledVector(sc,m)):(Ia.addScaledVector(rc.sub(Yi),m),Na.addScaledVector(oc.sub($i),m),za.addScaledVector(sc.sub(Zi),m)))}Yi.add(Ia),$i.add(Na),Zi.add(za)}n.isSkinnedMesh&&(n.boneTransform(c,Yi),n.boneTransform(d,$i),n.boneTransform(p,Zi));const x=Ex(n,e,t,i,Yi,$i,Zi,ac);if(x){a&&(Oa.fromBufferAttribute(a,c),Ua.fromBufferAttribute(a,d),Ba.fromBufferAttribute(a,p),x.uv=Li.getUV(ac,Yi,$i,Zi,Oa,Ua,Ba,new Xe)),u&&(Oa.fromBufferAttribute(u,c),Ua.fromBufferAttribute(u,d),Ba.fromBufferAttribute(u,p),x.uv2=Li.getUV(ac,Yi,$i,Zi,Oa,Ua,Ba,new Xe));const M={a:c,b:d,c:p,normal:new j,materialIndex:0};Li.getNormal(Yi,$i,Zi,M.normal),x.face=M}return x}class ra extends Ui{constructor(e=1,t=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const u=[],c=[],d=[],p=[];let h=0,x=0;M("z","y","x",-1,-1,i,t,e,s,o,0),M("z","y","x",1,-1,i,t,-e,s,o,1),M("x","z","y",1,1,e,i,t,r,s,2),M("x","z","y",1,-1,e,i,-t,r,s,3),M("x","y","z",1,-1,e,t,i,r,o,4),M("x","y","z",-1,-1,e,t,-i,r,o,5),this.setIndex(u),this.setAttribute("position",new ni(c,3)),this.setAttribute("normal",new ni(d,3)),this.setAttribute("uv",new ni(p,2));function M(g,m,y,w,E,b,A,R,N,T,I){const H=b/N,Y=A/T,ce=b/2,de=A/2,q=R/2,ae=N+1,Q=T+1;let oe=0,V=0;const B=new j;for(let G=0;G<Q;G++){const Z=G*Y-de;for(let ee=0;ee<ae;ee++){const pe=ee*H-ce;B[g]=pe*w,B[m]=Z*E,B[y]=q,c.push(B.x,B.y,B.z),B[g]=0,B[m]=0,B[y]=R>0?1:-1,d.push(B.x,B.y,B.z),p.push(ee/N),p.push(1-G/T),oe+=1}}for(let G=0;G<T;G++)for(let Z=0;Z<N;Z++){const ee=h+Z+ae*G,pe=h+Z+ae*(G+1),Se=h+(Z+1)+ae*(G+1),Re=h+(Z+1)+ae*G;u.push(ee,pe,Re),u.push(pe,Se,Re),V+=6}a.addGroup(x,V,I),x+=V,h+=oe}}static fromJSON(e){return new ra(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Kt(n){const e={};for(let t=0;t<n.length;t++){const i=Zo(n[t]);for(const r in i)e[r]=i[r]}return e}function bx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}const Tx={clone:Zo,merge:Kt};var Cx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ax=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jr extends Jl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cx,this.fragmentShader=Ax,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zo(e.uniforms),this.uniformsGroups=bx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Fv extends ri{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class In extends Fv{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=yp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yp*2*Math.atan(Math.tan(Bu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bu*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const u=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/u,t-=s.offsetY*i/c,r*=s.width/u,i*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fo=90,ho=1;class Lx extends ri{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new In(fo,ho,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new j(1,0,0)),this.add(r);const o=new In(fo,ho,e,t);o.layers=this.layers,o.up.set(0,-1,0),o.lookAt(new j(-1,0,0)),this.add(o);const s=new In(fo,ho,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new j(0,1,0)),this.add(s);const a=new In(fo,ho,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new j(0,-1,0)),this.add(a);const u=new In(fo,ho,e,t);u.layers=this.layers,u.up.set(0,-1,0),u.lookAt(new j(0,0,1)),this.add(u);const c=new In(fo,ho,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new j(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,o,s,a,u,c]=this.children,d=e.getRenderTarget(),p=e.toneMapping,h=e.xr.enabled;e.toneMapping=ki,e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,o),e.setRenderTarget(i,2),e.render(t,s),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(d),e.toneMapping=p,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class Iv extends Vn{constructor(e,t,i,r,o,s,a,u,c,d){e=e!==void 0?e:[],t=t!==void 0?t:qo,super(e,t,i,r,o,s,a,u,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Px extends Gr{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Iv(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ra(5,5,5),o=new jr({name:"CubemapFromEquirect",uniforms:Zo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ei,blending:dr});o.uniforms.tEquirect.value=t;const s=new pi(r,o),a=t.minFilter;return t.minFilter===Ql&&(t.minFilter=pn),new Lx(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(o)}}const lc=new j,Dx=new j,Rx=new zn;class Mr{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=lc.subVectors(i,t).cross(Dx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(lc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(i).multiplyScalar(o).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Rx.getNormalMatrix(e),r=this.coplanarPoint(lc).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const po=new yd,Ga=new j;class Nv{constructor(e=new Mr,t=new Mr,i=new Mr,r=new Mr,o=new Mr,s=new Mr){this.planes=[e,t,i,r,o,s]}set(e,t,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],o=i[1],s=i[2],a=i[3],u=i[4],c=i[5],d=i[6],p=i[7],h=i[8],x=i[9],M=i[10],g=i[11],m=i[12],y=i[13],w=i[14],E=i[15];return t[0].setComponents(a-r,p-u,g-h,E-m).normalize(),t[1].setComponents(a+r,p+u,g+h,E+m).normalize(),t[2].setComponents(a+o,p+c,g+x,E+y).normalize(),t[3].setComponents(a-o,p-c,g-x,E-y).normalize(),t[4].setComponents(a-s,p-d,g-M,E-w).normalize(),t[5].setComponents(a+s,p+d,g+M,E+w).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),po.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(po)}intersectsSprite(e){return po.center.set(0,0,0),po.radius=.7071067811865476,po.applyMatrix4(e.matrixWorld),this.intersectsSphere(po)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ga.x=r.normal.x>0?e.max.x:e.min.x,Ga.y=r.normal.y>0?e.max.y:e.min.y,Ga.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ga)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zv(){let n=null,e=!1,t=null,i=null;function r(o,s){t(o,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function kx(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,d){const p=c.array,h=c.usage,x=n.createBuffer();n.bindBuffer(d,x),n.bufferData(d,p,h),c.onUploadCallback();let M;if(p instanceof Float32Array)M=5126;else if(p instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)M=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=5123;else if(p instanceof Int16Array)M=5122;else if(p instanceof Uint32Array)M=5125;else if(p instanceof Int32Array)M=5124;else if(p instanceof Int8Array)M=5120;else if(p instanceof Uint8Array)M=5121;else if(p instanceof Uint8ClampedArray)M=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:c.version}}function o(c,d,p){const h=d.array,x=d.updateRange;n.bindBuffer(p,c),x.count===-1?n.bufferSubData(p,0,h):(t?n.bufferSubData(p,x.offset*h.BYTES_PER_ELEMENT,h,x.offset,x.count):n.bufferSubData(p,x.offset*h.BYTES_PER_ELEMENT,h.subarray(x.offset,x.offset+x.count)),x.count=-1)}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(n.deleteBuffer(d.buffer),i.delete(c))}function u(c,d){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const p=i.get(c);p===void 0?i.set(c,r(c,d)):p.version<c.version&&(o(p.buffer,c,d),p.version=c.version)}return{get:s,remove:a,update:u}}class wd extends Ui{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const o=e/2,s=t/2,a=Math.floor(i),u=Math.floor(r),c=a+1,d=u+1,p=e/a,h=t/u,x=[],M=[],g=[],m=[];for(let y=0;y<d;y++){const w=y*h-s;for(let E=0;E<c;E++){const b=E*p-o;M.push(b,-w,0),g.push(0,0,1),m.push(E/a),m.push(1-y/u)}}for(let y=0;y<u;y++)for(let w=0;w<a;w++){const E=w+c*y,b=w+c*(y+1),A=w+1+c*(y+1),R=w+1+c*y;x.push(E,b,R),x.push(b,A,R)}this.setIndex(x),this.setAttribute("position",new ni(M,3)),this.setAttribute("normal",new ni(g,3)),this.setAttribute("uv",new ni(m,2))}static fromJSON(e){return new wd(e.width,e.height,e.widthSegments,e.heightSegments)}}var Fx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Ix=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,zx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ox=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ux=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bx="vec3 transformed = vec3( position );",Vx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hx=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Gx=`#ifdef USE_IRIDESCENCE
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
#endif`,Wx=`#ifdef USE_BUMPMAP
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
#endif`,jx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$x=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Qx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Jx=`#define PI 3.141592653589793
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
}`,ew=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tw=`vec3 transformedNormal = objectNormal;
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
#endif`,nw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,rw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ow=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sw="gl_FragColor = linearToOutputTexel( gl_FragColor );",aw=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lw=`#ifdef USE_ENVMAP
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
#endif`,uw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cw=`#ifdef USE_ENVMAP
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
#endif`,fw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dw=`#ifdef USE_ENVMAP
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
#endif`,hw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vw=`#ifdef USE_GRADIENTMAP
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
}`,_w=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,yw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xw=`vec3 diffuse = vec3( 1.0 );
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
#endif`,ww=`uniform bool receiveShadow;
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
#endif`,Sw=`#if defined( USE_ENVMAP )
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
#endif`,Mw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ew=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,bw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tw=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Cw=`PhysicalMaterial material;
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
#endif`,Aw=`struct PhysicalMaterial {
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
}`,Lw=`
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
#endif`,Pw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Rw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Iw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Nw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ow=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Uw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gw=`#ifdef USE_MORPHNORMALS
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
#endif`,Ww=`#ifdef USE_MORPHTARGETS
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
#endif`,jw=`#ifdef USE_MORPHTARGETS
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
#endif`,Xw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,qw=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Yw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$w=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kw=`#ifdef USE_NORMALMAP
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
#endif`,Qw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Jw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,eS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,tS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,aS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cS=`#ifdef USE_SHADOWMAP
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
#endif`,fS=`#ifdef USE_SHADOWMAP
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
#endif`,dS=`#ifdef USE_SHADOWMAP
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
#endif`,hS=`float getShadowMask() {
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
}`,pS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mS=`#ifdef USE_SKINNING
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
#endif`,gS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vS=`#ifdef USE_SKINNING
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
#endif`,_S=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,SS=`#ifdef USE_TRANSMISSION
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
#endif`,MS=`#ifdef USE_TRANSMISSION
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
#endif`,ES=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,bS=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,TS=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,CS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,AS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,LS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,PS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RS=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,kS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FS=`#include <envmap_common_pars_fragment>
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
}`,IS=`#include <common>
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
}`,NS=`#if DEPTH_PACKING == 3200
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
}`,zS=`#define DISTANCE
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
}`,OS=`#define DISTANCE
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
}`,US=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,VS=`uniform float scale;
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
}`,HS=`uniform vec3 diffuse;
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
}`,GS=`#include <common>
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
}`,WS=`uniform vec3 diffuse;
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
}`,jS=`#define LAMBERT
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
}`,XS=`uniform vec3 diffuse;
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
}`,qS=`#define MATCAP
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
}`,YS=`#define MATCAP
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
}`,$S=`#define NORMAL
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
}`,ZS=`#define NORMAL
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
}`,KS=`#define PHONG
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
}`,QS=`#define PHONG
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
}`,JS=`#define STANDARD
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
}`,e1=`#define STANDARD
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
}`,t1=`#define TOON
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
}`,n1=`#define TOON
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
}`,i1=`uniform float size;
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
}`,r1=`uniform vec3 diffuse;
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
}`,o1=`#include <common>
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
}`,s1=`uniform vec3 color;
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
}`,a1=`uniform float rotation;
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
}`,l1=`uniform vec3 diffuse;
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
}`,Ye={alphamap_fragment:Fx,alphamap_pars_fragment:Ix,alphatest_fragment:Nx,alphatest_pars_fragment:zx,aomap_fragment:Ox,aomap_pars_fragment:Ux,begin_vertex:Bx,beginnormal_vertex:Vx,bsdfs:Hx,iridescence_fragment:Gx,bumpmap_pars_fragment:Wx,clipping_planes_fragment:jx,clipping_planes_pars_fragment:Xx,clipping_planes_pars_vertex:qx,clipping_planes_vertex:Yx,color_fragment:$x,color_pars_fragment:Zx,color_pars_vertex:Kx,color_vertex:Qx,common:Jx,cube_uv_reflection_fragment:ew,defaultnormal_vertex:tw,displacementmap_pars_vertex:nw,displacementmap_vertex:iw,emissivemap_fragment:rw,emissivemap_pars_fragment:ow,encodings_fragment:sw,encodings_pars_fragment:aw,envmap_fragment:lw,envmap_common_pars_fragment:uw,envmap_pars_fragment:cw,envmap_pars_vertex:fw,envmap_physical_pars_fragment:Sw,envmap_vertex:dw,fog_vertex:hw,fog_pars_vertex:pw,fog_fragment:mw,fog_pars_fragment:gw,gradientmap_pars_fragment:vw,lightmap_fragment:_w,lightmap_pars_fragment:yw,lights_lambert_vertex:xw,lights_pars_begin:ww,lights_toon_fragment:Mw,lights_toon_pars_fragment:Ew,lights_phong_fragment:bw,lights_phong_pars_fragment:Tw,lights_physical_fragment:Cw,lights_physical_pars_fragment:Aw,lights_fragment_begin:Lw,lights_fragment_maps:Pw,lights_fragment_end:Dw,logdepthbuf_fragment:Rw,logdepthbuf_pars_fragment:kw,logdepthbuf_pars_vertex:Fw,logdepthbuf_vertex:Iw,map_fragment:Nw,map_pars_fragment:zw,map_particle_fragment:Ow,map_particle_pars_fragment:Uw,metalnessmap_fragment:Bw,metalnessmap_pars_fragment:Vw,morphcolor_vertex:Hw,morphnormal_vertex:Gw,morphtarget_pars_vertex:Ww,morphtarget_vertex:jw,normal_fragment_begin:Xw,normal_fragment_maps:qw,normal_pars_fragment:Yw,normal_pars_vertex:$w,normal_vertex:Zw,normalmap_pars_fragment:Kw,clearcoat_normal_fragment_begin:Qw,clearcoat_normal_fragment_maps:Jw,clearcoat_pars_fragment:eS,iridescence_pars_fragment:tS,output_fragment:nS,packing:iS,premultiplied_alpha_fragment:rS,project_vertex:oS,dithering_fragment:sS,dithering_pars_fragment:aS,roughnessmap_fragment:lS,roughnessmap_pars_fragment:uS,shadowmap_pars_fragment:cS,shadowmap_pars_vertex:fS,shadowmap_vertex:dS,shadowmask_pars_fragment:hS,skinbase_vertex:pS,skinning_pars_vertex:mS,skinning_vertex:gS,skinnormal_vertex:vS,specularmap_fragment:_S,specularmap_pars_fragment:yS,tonemapping_fragment:xS,tonemapping_pars_fragment:wS,transmission_fragment:SS,transmission_pars_fragment:MS,uv_pars_fragment:ES,uv_pars_vertex:bS,uv_vertex:TS,uv2_pars_fragment:CS,uv2_pars_vertex:AS,uv2_vertex:LS,worldpos_vertex:PS,background_vert:DS,background_frag:RS,cube_vert:kS,cube_frag:FS,depth_vert:IS,depth_frag:NS,distanceRGBA_vert:zS,distanceRGBA_frag:OS,equirect_vert:US,equirect_frag:BS,linedashed_vert:VS,linedashed_frag:HS,meshbasic_vert:GS,meshbasic_frag:WS,meshlambert_vert:jS,meshlambert_frag:XS,meshmatcap_vert:qS,meshmatcap_frag:YS,meshnormal_vert:$S,meshnormal_frag:ZS,meshphong_vert:KS,meshphong_frag:QS,meshphysical_vert:JS,meshphysical_frag:e1,meshtoon_vert:t1,meshtoon_frag:n1,points_vert:i1,points_frag:r1,shadow_vert:o1,shadow_frag:s1,sprite_vert:a1,sprite_frag:l1},ye={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new zn},uv2Transform:{value:new zn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new zn}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new zn}}},fi={basic:{uniforms:Kt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Kt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.fog,ye.lights,{emissive:{value:new mt(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Kt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Kt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Kt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new mt(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Kt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Kt([ye.points,ye.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Kt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Kt([ye.common,ye.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Kt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Kt([ye.sprite,ye.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new zn},t2D:{value:null}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},cube:{uniforms:Kt([ye.envmap,{opacity:{value:1}}]),vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Kt([ye.common,ye.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Kt([ye.lights,ye.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};fi.physical={uniforms:Kt([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};function u1(n,e,t,i,r,o){const s=new mt(0);let a=r===!0?0:1,u,c,d=null,p=0,h=null;function x(g,m){let y=!1,w=m.isScene===!0?m.background:null;w&&w.isTexture&&(w=e.get(w));const E=n.xr,b=E.getSession&&E.getSession();b&&b.environmentBlendMode==="additive"&&(w=null),w===null?M(s,a):w&&w.isColor&&(M(w,1),y=!0),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),w&&(w.isCubeTexture||w.mapping===Kl)?(c===void 0&&(c=new pi(new ra(1,1,1),new jr({name:"BackgroundCubeMaterial",uniforms:Zo(fi.cube.uniforms),vertexShader:fi.cube.vertexShader,fragmentShader:fi.cube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,R,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,(d!==w||p!==w.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=w,p=w.version,h=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(u===void 0&&(u=new pi(new wd(2,2),new jr({name:"BackgroundMaterial",uniforms:Zo(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:qs,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=w,w.matrixAutoUpdate===!0&&w.updateMatrix(),u.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||p!==w.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=w,p=w.version,h=n.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function M(g,m){t.buffers.color.setClear(g.r,g.g,g.b,m,o)}return{getClearColor:function(){return s},setClearColor:function(g,m=1){s.set(g),a=m,M(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(g){a=g,M(s,a)},render:x}}function c1(n,e,t,i){const r=n.getParameter(34921),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||o!==null,a={},u=m(null);let c=u,d=!1;function p(q,ae,Q,oe,V){let B=!1;if(s){const G=g(oe,Q,ae);c!==G&&(c=G,x(c.object)),B=y(q,oe,Q,V),B&&w(q,oe,Q,V)}else{const G=ae.wireframe===!0;(c.geometry!==oe.id||c.program!==Q.id||c.wireframe!==G)&&(c.geometry=oe.id,c.program=Q.id,c.wireframe=G,B=!0)}V!==null&&t.update(V,34963),(B||d)&&(d=!1,T(q,ae,Q,oe),V!==null&&n.bindBuffer(34963,t.get(V).buffer))}function h(){return i.isWebGL2?n.createVertexArray():o.createVertexArrayOES()}function x(q){return i.isWebGL2?n.bindVertexArray(q):o.bindVertexArrayOES(q)}function M(q){return i.isWebGL2?n.deleteVertexArray(q):o.deleteVertexArrayOES(q)}function g(q,ae,Q){const oe=Q.wireframe===!0;let V=a[q.id];V===void 0&&(V={},a[q.id]=V);let B=V[ae.id];B===void 0&&(B={},V[ae.id]=B);let G=B[oe];return G===void 0&&(G=m(h()),B[oe]=G),G}function m(q){const ae=[],Q=[],oe=[];for(let V=0;V<r;V++)ae[V]=0,Q[V]=0,oe[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ae,enabledAttributes:Q,attributeDivisors:oe,object:q,attributes:{},index:null}}function y(q,ae,Q,oe){const V=c.attributes,B=ae.attributes;let G=0;const Z=Q.getAttributes();for(const ee in Z)if(Z[ee].location>=0){const Se=V[ee];let Re=B[ee];if(Re===void 0&&(ee==="instanceMatrix"&&q.instanceMatrix&&(Re=q.instanceMatrix),ee==="instanceColor"&&q.instanceColor&&(Re=q.instanceColor)),Se===void 0||Se.attribute!==Re||Re&&Se.data!==Re.data)return!0;G++}return c.attributesNum!==G||c.index!==oe}function w(q,ae,Q,oe){const V={},B=ae.attributes;let G=0;const Z=Q.getAttributes();for(const ee in Z)if(Z[ee].location>=0){let Se=B[ee];Se===void 0&&(ee==="instanceMatrix"&&q.instanceMatrix&&(Se=q.instanceMatrix),ee==="instanceColor"&&q.instanceColor&&(Se=q.instanceColor));const Re={};Re.attribute=Se,Se&&Se.data&&(Re.data=Se.data),V[ee]=Re,G++}c.attributes=V,c.attributesNum=G,c.index=oe}function E(){const q=c.newAttributes;for(let ae=0,Q=q.length;ae<Q;ae++)q[ae]=0}function b(q){A(q,0)}function A(q,ae){const Q=c.newAttributes,oe=c.enabledAttributes,V=c.attributeDivisors;Q[q]=1,oe[q]===0&&(n.enableVertexAttribArray(q),oe[q]=1),V[q]!==ae&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](q,ae),V[q]=ae)}function R(){const q=c.newAttributes,ae=c.enabledAttributes;for(let Q=0,oe=ae.length;Q<oe;Q++)ae[Q]!==q[Q]&&(n.disableVertexAttribArray(Q),ae[Q]=0)}function N(q,ae,Q,oe,V,B){i.isWebGL2===!0&&(Q===5124||Q===5125)?n.vertexAttribIPointer(q,ae,Q,V,B):n.vertexAttribPointer(q,ae,Q,oe,V,B)}function T(q,ae,Q,oe){if(i.isWebGL2===!1&&(q.isInstancedMesh||oe.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const V=oe.attributes,B=Q.getAttributes(),G=ae.defaultAttributeValues;for(const Z in B){const ee=B[Z];if(ee.location>=0){let pe=V[Z];if(pe===void 0&&(Z==="instanceMatrix"&&q.instanceMatrix&&(pe=q.instanceMatrix),Z==="instanceColor"&&q.instanceColor&&(pe=q.instanceColor)),pe!==void 0){const Se=pe.normalized,Re=pe.itemSize,ne=t.get(pe);if(ne===void 0)continue;const qe=ne.buffer,Ne=ne.type,Ue=ne.bytesPerElement;if(pe.isInterleavedBufferAttribute){const be=pe.data,tt=be.stride,He=pe.offset;if(be.isInstancedInterleavedBuffer){for(let ke=0;ke<ee.locationSize;ke++)A(ee.location+ke,be.meshPerAttribute);q.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let ke=0;ke<ee.locationSize;ke++)b(ee.location+ke);n.bindBuffer(34962,qe);for(let ke=0;ke<ee.locationSize;ke++)N(ee.location+ke,Re/ee.locationSize,Ne,Se,tt*Ue,(He+Re/ee.locationSize*ke)*Ue)}else{if(pe.isInstancedBufferAttribute){for(let be=0;be<ee.locationSize;be++)A(ee.location+be,pe.meshPerAttribute);q.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let be=0;be<ee.locationSize;be++)b(ee.location+be);n.bindBuffer(34962,qe);for(let be=0;be<ee.locationSize;be++)N(ee.location+be,Re/ee.locationSize,Ne,Se,Re*Ue,Re/ee.locationSize*be*Ue)}}else if(G!==void 0){const Se=G[Z];if(Se!==void 0)switch(Se.length){case 2:n.vertexAttrib2fv(ee.location,Se);break;case 3:n.vertexAttrib3fv(ee.location,Se);break;case 4:n.vertexAttrib4fv(ee.location,Se);break;default:n.vertexAttrib1fv(ee.location,Se)}}}}R()}function I(){ce();for(const q in a){const ae=a[q];for(const Q in ae){const oe=ae[Q];for(const V in oe)M(oe[V].object),delete oe[V];delete ae[Q]}delete a[q]}}function H(q){if(a[q.id]===void 0)return;const ae=a[q.id];for(const Q in ae){const oe=ae[Q];for(const V in oe)M(oe[V].object),delete oe[V];delete ae[Q]}delete a[q.id]}function Y(q){for(const ae in a){const Q=a[ae];if(Q[q.id]===void 0)continue;const oe=Q[q.id];for(const V in oe)M(oe[V].object),delete oe[V];delete Q[q.id]}}function ce(){de(),d=!0,c!==u&&(c=u,x(c.object))}function de(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:p,reset:ce,resetDefaultState:de,dispose:I,releaseStatesOfGeometry:H,releaseStatesOfProgram:Y,initAttributes:E,enableAttribute:b,disableUnusedAttributes:R}}function f1(n,e,t,i){const r=i.isWebGL2;let o;function s(c){o=c}function a(c,d){n.drawArrays(o,c,d),t.update(d,o,1)}function u(c,d,p){if(p===0)return;let h,x;if(r)h=n,x="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[x](o,c,d,p),t.update(d,o,p)}this.setMode=s,this.render=a,this.renderInstances=u}function d1(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(N){if(N==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";N="mediump"}return N==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const u=o(a);u!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",u,"instead."),a=u);const c=s||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,p=n.getParameter(34930),h=n.getParameter(35660),x=n.getParameter(3379),M=n.getParameter(34076),g=n.getParameter(34921),m=n.getParameter(36347),y=n.getParameter(36348),w=n.getParameter(36349),E=h>0,b=s||e.has("OES_texture_float"),A=E&&b,R=s?n.getParameter(36183):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:d,maxTextures:p,maxVertexTextures:h,maxTextureSize:x,maxCubemapSize:M,maxAttributes:g,maxVertexUniforms:m,maxVaryings:y,maxFragmentUniforms:w,vertexTextures:E,floatFragmentTextures:b,floatVertexTextures:A,maxSamples:R}}function h1(n){const e=this;let t=null,i=0,r=!1,o=!1;const s=new Mr,a=new zn,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h,x){const M=p.length!==0||h||i!==0||r;return r=h,t=d(p,x,0),i=p.length,M},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1,c()},this.setState=function(p,h,x){const M=p.clippingPlanes,g=p.clipIntersection,m=p.clipShadows,y=n.get(p);if(!r||M===null||M.length===0||o&&!m)o?d(null):c();else{const w=o?0:i,E=w*4;let b=y.clippingState||null;u.value=b,b=d(M,h,E,x);for(let A=0;A!==E;++A)b[A]=t[A];y.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=w}};function c(){u.value!==t&&(u.value=t,u.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(p,h,x,M){const g=p!==null?p.length:0;let m=null;if(g!==0){if(m=u.value,M!==!0||m===null){const y=x+g*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<y)&&(m=new Float32Array(y));for(let E=0,b=x;E!==g;++E,b+=4)s.copy(p[E]).applyMatrix4(w,a),s.normal.toArray(m,b),m[b+3]=s.constant}u.value=m,u.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function p1(n){let e=new WeakMap;function t(s,a){return a===gf?s.mapping=qo:a===vf&&(s.mapping=Yo),s}function i(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===gf||a===vf)if(e.has(s)){const u=e.get(s).texture;return t(u,s.mapping)}else{const u=s.image;if(u&&u.height>0){const c=new Px(u.height/2);return c.fromEquirectangularTexture(n,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const u=e.get(a);u!==void 0&&(e.delete(a),u.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class m1 extends Fv{constructor(e=-1,t=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+t,u=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=d*this.view.offsetY,u=a-d*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,u,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Po=4,Rp=[.125,.215,.35,.446,.526,.582],br=20,uc=new m1,kp=new mt;let cc=null;const Er=(1+Math.sqrt(5))/2,mo=1/Er,Fp=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,Er,mo),new j(0,Er,-mo),new j(mo,0,Er),new j(-mo,0,Er),new j(Er,mo,0),new j(-Er,mo,0)];class Ip{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){cc=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Op(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cc),e.scissorTest=!1,Wa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qo||e.mapping===Yo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cc=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Ys,format:hi,encoding:Hr,depthBuffer:!1},r=Np(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Np(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=g1(o)),this._blurMaterial=v1(o,e,t)}return r}_compileMaterial(e){const t=new pi(this._lodPlanes[0],e);this._renderer.compile(t,uc)}_sceneToCubeUV(e,t,i,r){const a=new In(90,1,t,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,h=d.toneMapping;d.getClearColor(kp),d.toneMapping=ki,d.autoClear=!1;const x=new Fl({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1}),M=new pi(new ra,x);let g=!1;const m=e.background;m?m.isColor&&(x.color.copy(m),e.background=null,g=!0):(x.color.copy(kp),g=!0);for(let y=0;y<6;y++){const w=y%3;w===0?(a.up.set(0,u[y],0),a.lookAt(c[y],0,0)):w===1?(a.up.set(0,0,u[y]),a.lookAt(0,c[y],0)):(a.up.set(0,u[y],0),a.lookAt(0,0,c[y]));const E=this._cubeSize;Wa(r,w*E,y>2?E:0,E,E),d.setRenderTarget(r),g&&d.render(M,a),d.render(e,a)}M.geometry.dispose(),M.material.dispose(),d.toneMapping=h,d.autoClear=p,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===qo||e.mapping===Yo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Op()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zp());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new pi(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const u=this._cubeSize;Wa(t,0,0,3*u,2*u),i.setRenderTarget(t),i.render(s,uc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=Fp[(r-1)%Fp.length];this._blur(e,r-1,r,o,s)}t.autoClear=i}_blur(e,t,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,t,i,r,o,s,a){const u=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new pi(this._lodPlanes[r],c),h=c.uniforms,x=this._sizeLods[i]-1,M=isFinite(o)?Math.PI/(2*x):2*Math.PI/(2*br-1),g=o/M,m=isFinite(o)?1+Math.floor(d*g):br;m>br&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${br}`);const y=[];let w=0;for(let N=0;N<br;++N){const T=N/g,I=Math.exp(-T*T/2);y.push(I),N===0?w+=I:N<m&&(w+=2*I)}for(let N=0;N<y.length;N++)y[N]=y[N]/w;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=y,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:E}=this;h.dTheta.value=M,h.mipInt.value=E-i;const b=this._sizeLods[r],A=3*b*(r>E-Po?r-E+Po:0),R=4*(this._cubeSize-b);Wa(t,A,R,3*b,2*b),u.setRenderTarget(t),u.render(p,uc)}}function g1(n){const e=[],t=[],i=[];let r=n;const o=n-Po+1+Rp.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);t.push(a);let u=1/a;s>n-Po?u=Rp[s-n+Po-1]:s===0&&(u=0),i.push(u);const c=1/(a-2),d=-c,p=1+c,h=[d,d,p,d,p,p,d,d,p,p,d,p],x=6,M=6,g=3,m=2,y=1,w=new Float32Array(g*M*x),E=new Float32Array(m*M*x),b=new Float32Array(y*M*x);for(let R=0;R<x;R++){const N=R%3*2/3-1,T=R>2?0:-1,I=[N,T,0,N+2/3,T,0,N+2/3,T+1,0,N,T,0,N+2/3,T+1,0,N,T+1,0];w.set(I,g*M*R),E.set(h,m*M*R);const H=[R,R,R,R,R,R];b.set(H,y*M*R)}const A=new Ui;A.setAttribute("position",new ti(w,g)),A.setAttribute("uv",new ti(E,m)),A.setAttribute("faceIndex",new ti(b,y)),e.push(A),r>Po&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Np(n,e,t){const i=new Gr(n,e,t);return i.texture.mapping=Kl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function v1(n,e,t){const i=new Float32Array(br),r=new j(0,1,0);return new jr({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Sd(),fragmentShader:`

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
		`,blending:dr,depthTest:!1,depthWrite:!1})}function zp(){return new jr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sd(),fragmentShader:`

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
		`,blending:dr,depthTest:!1,depthWrite:!1})}function Op(){return new jr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function Sd(){return`

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
	`}function _1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const u=a.mapping,c=u===gf||u===vf,d=u===qo||u===Yo;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let p=e.get(a);return t===null&&(t=new Ip(n)),p=c?t.fromEquirectangular(a,p):t.fromCubemap(a,p),e.set(a,p),p.texture}else{if(e.has(a))return e.get(a).texture;{const p=a.image;if(c&&p&&p.height>0||d&&p&&r(p)){t===null&&(t=new Ip(n));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",o),h.texture}else return null}}}return a}function r(a){let u=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&u++;return u===c}function o(a){const u=a.target;u.removeEventListener("dispose",o);const c=e.get(u);c!==void 0&&(e.delete(u),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function y1(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function x1(n,e,t,i){const r={},o=new WeakMap;function s(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const M in h.attributes)e.remove(h.attributes[M]);h.removeEventListener("dispose",s),delete r[h.id];const x=o.get(h);x&&(e.remove(x),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(p,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,t.memory.geometries++),h}function u(p){const h=p.attributes;for(const M in h)e.update(h[M],34962);const x=p.morphAttributes;for(const M in x){const g=x[M];for(let m=0,y=g.length;m<y;m++)e.update(g[m],34962)}}function c(p){const h=[],x=p.index,M=p.attributes.position;let g=0;if(x!==null){const w=x.array;g=x.version;for(let E=0,b=w.length;E<b;E+=3){const A=w[E+0],R=w[E+1],N=w[E+2];h.push(A,R,R,N,N,A)}}else{const w=M.array;g=M.version;for(let E=0,b=w.length/3-1;E<b;E+=3){const A=E+0,R=E+1,N=E+2;h.push(A,R,R,N,N,A)}}const m=new(Cv(h)?kv:xd)(h,1);m.version=g;const y=o.get(p);y&&e.remove(y),o.set(p,m)}function d(p){const h=o.get(p);if(h){const x=p.index;x!==null&&h.version<x.version&&c(p)}else c(p);return o.get(p)}return{get:a,update:u,getWireframeAttribute:d}}function w1(n,e,t,i){const r=i.isWebGL2;let o;function s(h){o=h}let a,u;function c(h){a=h.type,u=h.bytesPerElement}function d(h,x){n.drawElements(o,x,a,h*u),t.update(x,o,1)}function p(h,x,M){if(M===0)return;let g,m;if(r)g=n,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](o,x,a,h*u,M),t.update(x,o,M)}this.setMode=s,this.setIndex=c,this.render=d,this.renderInstances=p}function S1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(t.calls++,s){case 4:t.triangles+=a*(o/3);break;case 1:t.lines+=a*(o/2);break;case 3:t.lines+=a*(o-1);break;case 2:t.lines+=a*o;break;case 0:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function M1(n,e){return n[0]-e[0]}function E1(n,e){return Math.abs(e[1])-Math.abs(n[1])}function fc(n,e){let t=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Uint8Array?t=255:i instanceof Uint16Array?t=65535:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),n.divideScalar(t)}function b1(n,e,t){const i={},r=new Float32Array(8),o=new WeakMap,s=new Nt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function u(c,d,p,h){const x=c.morphTargetInfluences;if(e.isWebGL2===!0){const M=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=M!==void 0?M.length:0;let m=o.get(d);if(m===void 0||m.count!==g){let ae=function(){de.dispose(),o.delete(d),d.removeEventListener("dispose",ae)};m!==void 0&&m.texture.dispose();const E=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,A=d.morphAttributes.color!==void 0,R=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],T=d.morphAttributes.color||[];let I=0;E===!0&&(I=1),b===!0&&(I=2),A===!0&&(I=3);let H=d.attributes.position.count*I,Y=1;H>e.maxTextureSize&&(Y=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const ce=new Float32Array(H*Y*4*g),de=new Dv(ce,H,Y,g);de.type=Pr,de.needsUpdate=!0;const q=I*4;for(let Q=0;Q<g;Q++){const oe=R[Q],V=N[Q],B=T[Q],G=H*Y*4*Q;for(let Z=0;Z<oe.count;Z++){const ee=Z*q;E===!0&&(s.fromBufferAttribute(oe,Z),oe.normalized===!0&&fc(s,oe),ce[G+ee+0]=s.x,ce[G+ee+1]=s.y,ce[G+ee+2]=s.z,ce[G+ee+3]=0),b===!0&&(s.fromBufferAttribute(V,Z),V.normalized===!0&&fc(s,V),ce[G+ee+4]=s.x,ce[G+ee+5]=s.y,ce[G+ee+6]=s.z,ce[G+ee+7]=0),A===!0&&(s.fromBufferAttribute(B,Z),B.normalized===!0&&fc(s,B),ce[G+ee+8]=s.x,ce[G+ee+9]=s.y,ce[G+ee+10]=s.z,ce[G+ee+11]=B.itemSize===4?s.w:1)}}m={count:g,texture:de,size:new Xe(H,Y)},o.set(d,m),d.addEventListener("dispose",ae)}let y=0;for(let E=0;E<x.length;E++)y+=x[E];const w=d.morphTargetsRelative?1:1-y;h.getUniforms().setValue(n,"morphTargetBaseInfluence",w),h.getUniforms().setValue(n,"morphTargetInfluences",x),h.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const M=x===void 0?0:x.length;let g=i[d.id];if(g===void 0||g.length!==M){g=[];for(let b=0;b<M;b++)g[b]=[b,0];i[d.id]=g}for(let b=0;b<M;b++){const A=g[b];A[0]=b,A[1]=x[b]}g.sort(E1);for(let b=0;b<8;b++)b<M&&g[b][1]?(a[b][0]=g[b][0],a[b][1]=g[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(M1);const m=d.morphAttributes.position,y=d.morphAttributes.normal;let w=0;for(let b=0;b<8;b++){const A=a[b],R=A[0],N=A[1];R!==Number.MAX_SAFE_INTEGER&&N?(m&&d.getAttribute("morphTarget"+b)!==m[R]&&d.setAttribute("morphTarget"+b,m[R]),y&&d.getAttribute("morphNormal"+b)!==y[R]&&d.setAttribute("morphNormal"+b,y[R]),r[b]=N,w+=N):(m&&d.hasAttribute("morphTarget"+b)===!0&&d.deleteAttribute("morphTarget"+b),y&&d.hasAttribute("morphNormal"+b)===!0&&d.deleteAttribute("morphNormal"+b),r[b]=0)}const E=d.morphTargetsRelative?1:1-w;h.getUniforms().setValue(n,"morphTargetBaseInfluence",E),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:u}}function T1(n,e,t,i){let r=new WeakMap;function o(u){const c=i.render.frame,d=u.geometry,p=e.get(u,d);return r.get(p)!==c&&(e.update(p),r.set(p,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",a)===!1&&u.addEventListener("dispose",a),t.update(u.instanceMatrix,34962),u.instanceColor!==null&&t.update(u.instanceColor,34962)),p}function s(){r=new WeakMap}function a(u){const c=u.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:s}}const Ov=new Vn,Uv=new Dv,Bv=new hx,Vv=new Iv,Up=[],Bp=[],Vp=new Float32Array(16),Hp=new Float32Array(9),Gp=new Float32Array(4);function es(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let o=Up[r];if(o===void 0&&(o=new Float32Array(r),Up[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,n[s].toArray(o,a)}return o}function rn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function on(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function eu(n,e){let t=Bp[e];t===void 0&&(t=new Int32Array(e),Bp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function C1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function A1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2fv(this.addr,e),on(t,e)}}function L1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;n.uniform3fv(this.addr,e),on(t,e)}}function P1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4fv(this.addr,e),on(t,e)}}function D1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(rn(t,i))return;Gp.set(i),n.uniformMatrix2fv(this.addr,!1,Gp),on(t,i)}}function R1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(rn(t,i))return;Hp.set(i),n.uniformMatrix3fv(this.addr,!1,Hp),on(t,i)}}function k1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(rn(t,i))return;Vp.set(i),n.uniformMatrix4fv(this.addr,!1,Vp),on(t,i)}}function F1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function I1(n,e){const t=this.cache;rn(t,e)||(n.uniform2iv(this.addr,e),on(t,e))}function N1(n,e){const t=this.cache;rn(t,e)||(n.uniform3iv(this.addr,e),on(t,e))}function z1(n,e){const t=this.cache;rn(t,e)||(n.uniform4iv(this.addr,e),on(t,e))}function O1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function U1(n,e){const t=this.cache;rn(t,e)||(n.uniform2uiv(this.addr,e),on(t,e))}function B1(n,e){const t=this.cache;rn(t,e)||(n.uniform3uiv(this.addr,e),on(t,e))}function V1(n,e){const t=this.cache;rn(t,e)||(n.uniform4uiv(this.addr,e),on(t,e))}function H1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Ov,r)}function G1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Bv,r)}function W1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Vv,r)}function j1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Uv,r)}function X1(n){switch(n){case 5126:return C1;case 35664:return A1;case 35665:return L1;case 35666:return P1;case 35674:return D1;case 35675:return R1;case 35676:return k1;case 5124:case 35670:return F1;case 35667:case 35671:return I1;case 35668:case 35672:return N1;case 35669:case 35673:return z1;case 5125:return O1;case 36294:return U1;case 36295:return B1;case 36296:return V1;case 35678:case 36198:case 36298:case 36306:case 35682:return H1;case 35679:case 36299:case 36307:return G1;case 35680:case 36300:case 36308:case 36293:return W1;case 36289:case 36303:case 36311:case 36292:return j1}}function q1(n,e){n.uniform1fv(this.addr,e)}function Y1(n,e){const t=es(e,this.size,2);n.uniform2fv(this.addr,t)}function $1(n,e){const t=es(e,this.size,3);n.uniform3fv(this.addr,t)}function Z1(n,e){const t=es(e,this.size,4);n.uniform4fv(this.addr,t)}function K1(n,e){const t=es(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Q1(n,e){const t=es(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function J1(n,e){const t=es(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function eM(n,e){n.uniform1iv(this.addr,e)}function tM(n,e){n.uniform2iv(this.addr,e)}function nM(n,e){n.uniform3iv(this.addr,e)}function iM(n,e){n.uniform4iv(this.addr,e)}function rM(n,e){n.uniform1uiv(this.addr,e)}function oM(n,e){n.uniform2uiv(this.addr,e)}function sM(n,e){n.uniform3uiv(this.addr,e)}function aM(n,e){n.uniform4uiv(this.addr,e)}function lM(n,e,t){const i=e.length,r=eu(t,i);n.uniform1iv(this.addr,r);for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Ov,r[o])}function uM(n,e,t){const i=e.length,r=eu(t,i);n.uniform1iv(this.addr,r);for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Bv,r[o])}function cM(n,e,t){const i=e.length,r=eu(t,i);n.uniform1iv(this.addr,r);for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Vv,r[o])}function fM(n,e,t){const i=e.length,r=eu(t,i);n.uniform1iv(this.addr,r);for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Uv,r[o])}function dM(n){switch(n){case 5126:return q1;case 35664:return Y1;case 35665:return $1;case 35666:return Z1;case 35674:return K1;case 35675:return Q1;case 35676:return J1;case 5124:case 35670:return eM;case 35667:case 35671:return tM;case 35668:case 35672:return nM;case 35669:case 35673:return iM;case 5125:return rM;case 36294:return oM;case 36295:return sM;case 36296:return aM;case 35678:case 36198:case 36298:case 36306:case 35682:return lM;case 35679:case 36299:case 36307:return uM;case 35680:case 36300:case 36308:case 36293:return cM;case 36289:case 36303:case 36311:case 36292:return fM}}class hM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=X1(t.type)}}class pM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=dM(t.type)}}class mM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,t[a.id],i)}}}const dc=/(\w+)(\])?(\[|\.)?/g;function Wp(n,e){n.seq.push(e),n.map[e.id]=e}function gM(n,e,t){const i=n.name,r=i.length;for(dc.lastIndex=0;;){const o=dc.exec(i),s=dc.lastIndex;let a=o[1];const u=o[2]==="]",c=o[3];if(u&&(a=a|0),c===void 0||c==="["&&s+2===r){Wp(t,c===void 0?new hM(a,n,e):new pM(a,n,e));break}else{let p=t.map[a];p===void 0&&(p=new mM(a),Wp(t,p)),t=p}}}class ll{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const o=e.getActiveUniform(t,r),s=e.getUniformLocation(t,o.name);gM(o,s,this)}}setValue(e,t,i,r){const o=this.map[t];o!==void 0&&o.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let o=0,s=t.length;o!==s;++o){const a=t[o],u=i[a.id];u.needsUpdate!==!1&&a.setValue(e,u.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function jp(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let vM=0;function _M(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return i.join(`
`)}function yM(n){switch(n){case Hr:return["Linear","( value )"];case St:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Xp(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+_M(n.getShaderSource(e),s)}else return r}function xM(n,e){const t=yM(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function wM(n,e){let t;switch(e){case By:t="Linear";break;case Vy:t="Reinhard";break;case Hy:t="OptimizedCineon";break;case Gy:t="ACESFilmic";break;case Wy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function SM(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ys).join(`
`)}function MM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function EM(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const o=n.getActiveAttrib(e,r),s=o.name;let a=1;o.type===35674&&(a=2),o.type===35675&&(a=3),o.type===35676&&(a=4),t[s]={type:o.type,location:n.getAttribLocation(e,s),locationSize:a}}return t}function ys(n){return n!==""}function qp(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sf(n){return n.replace(bM,TM)}function TM(n,e){const t=Ye[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Sf(t)}const CM=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,AM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $p(n){return n.replace(AM,Hv).replace(CM,LM)}function LM(n,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Hv(n,e,t,i)}function Hv(n,e,t,i){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Zp(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function PM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===xv?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===vy?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===_s&&(e="SHADOWMAP_TYPE_VSM"),e}function DM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case qo:case Yo:e="ENVMAP_TYPE_CUBE";break;case Kl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function RM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Yo:e="ENVMAP_MODE_REFRACTION";break}return e}function kM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Mv:e="ENVMAP_BLENDING_MULTIPLY";break;case Oy:e="ENVMAP_BLENDING_MIX";break;case Uy:e="ENVMAP_BLENDING_ADD";break}return e}function FM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function IM(n,e,t,i){const r=n.getContext(),o=t.defines;let s=t.vertexShader,a=t.fragmentShader;const u=PM(t),c=DM(t),d=RM(t),p=kM(t),h=FM(t),x=t.isWebGL2?"":SM(t),M=MM(o),g=r.createProgram();let m,y,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[M].filter(ys).join(`
`),m.length>0&&(m+=`
`),y=[x,M].filter(ys).join(`
`),y.length>0&&(y+=`
`)):(m=[Zp(t),"#define SHADER_NAME "+t.shaderName,M,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ys).join(`
`),y=[x,Zp(t),"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ki?"#define TONE_MAPPING":"",t.toneMapping!==ki?Ye.tonemapping_pars_fragment:"",t.toneMapping!==ki?wM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.encodings_pars_fragment,xM("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ys).join(`
`)),s=Sf(s),s=qp(s,t),s=Yp(s,t),a=Sf(a),a=qp(a,t),a=Yp(a,t),s=$p(s),a=$p(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,y=["#define varying in",t.glslVersion===_p?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_p?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const E=w+m+s,b=w+y+a,A=jp(r,35633,E),R=jp(r,35632,b);if(r.attachShader(g,A),r.attachShader(g,R),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),n.debug.checkShaderErrors){const I=r.getProgramInfoLog(g).trim(),H=r.getShaderInfoLog(A).trim(),Y=r.getShaderInfoLog(R).trim();let ce=!0,de=!0;if(r.getProgramParameter(g,35714)===!1){ce=!1;const q=Xp(r,A,"vertex"),ae=Xp(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,35715)+`

Program Info Log: `+I+`
`+q+`
`+ae)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(H===""||Y==="")&&(de=!1);de&&(this.diagnostics={runnable:ce,programLog:I,vertexShader:{log:H,prefix:m},fragmentShader:{log:Y,prefix:y}})}r.deleteShader(A),r.deleteShader(R);let N;this.getUniforms=function(){return N===void 0&&(N=new ll(r,g)),N};let T;return this.getAttributes=function(){return T===void 0&&(T=EM(r,g)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=vM++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=R,this}let NM=0;class zM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const i=new OM(e);t.set(e,i)}return t.get(e)}}class OM{constructor(e){this.id=NM++,this.code=e,this.usedTimes=0}}function UM(n,e,t,i,r,o,s){const a=new Rv,u=new zM,c=[],d=r.isWebGL2,p=r.logarithmicDepthBuffer,h=r.vertexTextures;let x=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(T,I,H,Y,ce){const de=Y.fog,q=ce.geometry,ae=T.isMeshStandardMaterial?Y.environment:null,Q=(T.isMeshStandardMaterial?t:e).get(T.envMap||ae),oe=!!Q&&Q.mapping===Kl?Q.image.height:null,V=M[T.type];T.precision!==null&&(x=r.getMaxPrecision(T.precision),x!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",x,"instead."));const B=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,G=B!==void 0?B.length:0;let Z=0;q.morphAttributes.position!==void 0&&(Z=1),q.morphAttributes.normal!==void 0&&(Z=2),q.morphAttributes.color!==void 0&&(Z=3);let ee,pe,Se,Re;if(V){const tt=fi[V];ee=tt.vertexShader,pe=tt.fragmentShader}else ee=T.vertexShader,pe=T.fragmentShader,u.update(T),Se=u.getVertexShaderID(T),Re=u.getFragmentShaderID(T);const ne=n.getRenderTarget(),qe=T.alphaTest>0,Ne=T.clearcoat>0,Ue=T.iridescence>0;return{isWebGL2:d,shaderID:V,shaderName:T.type,vertexShader:ee,fragmentShader:pe,defines:T.defines,customVertexShaderID:Se,customFragmentShaderID:Re,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:x,instancing:ce.isInstancedMesh===!0,instancingColor:ce.isInstancedMesh===!0&&ce.instanceColor!==null,supportsVertexTextures:h,outputEncoding:ne===null?n.outputEncoding:ne.isXRRenderTarget===!0?ne.texture.encoding:Hr,map:!!T.map,matcap:!!T.matcap,envMap:!!Q,envMapMode:Q&&Q.mapping,envMapCubeUVHeight:oe,lightMap:!!T.lightMap,aoMap:!!T.aoMap,emissiveMap:!!T.emissiveMap,bumpMap:!!T.bumpMap,normalMap:!!T.normalMap,objectSpaceNormalMap:T.normalMapType===ux,tangentSpaceNormalMap:T.normalMapType===lx,decodeVideoTexture:!!T.map&&T.map.isVideoTexture===!0&&T.map.encoding===St,clearcoat:Ne,clearcoatMap:Ne&&!!T.clearcoatMap,clearcoatRoughnessMap:Ne&&!!T.clearcoatRoughnessMap,clearcoatNormalMap:Ne&&!!T.clearcoatNormalMap,iridescence:Ue,iridescenceMap:Ue&&!!T.iridescenceMap,iridescenceThicknessMap:Ue&&!!T.iridescenceThicknessMap,displacementMap:!!T.displacementMap,roughnessMap:!!T.roughnessMap,metalnessMap:!!T.metalnessMap,specularMap:!!T.specularMap,specularIntensityMap:!!T.specularIntensityMap,specularColorMap:!!T.specularColorMap,opaque:T.transparent===!1&&T.blending===zo,alphaMap:!!T.alphaMap,alphaTest:qe,gradientMap:!!T.gradientMap,sheen:T.sheen>0,sheenColorMap:!!T.sheenColorMap,sheenRoughnessMap:!!T.sheenRoughnessMap,transmission:T.transmission>0,transmissionMap:!!T.transmissionMap,thicknessMap:!!T.thicknessMap,combine:T.combine,vertexTangents:!!T.normalMap&&!!q.attributes.tangent,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,vertexUvs:!!T.map||!!T.bumpMap||!!T.normalMap||!!T.specularMap||!!T.alphaMap||!!T.emissiveMap||!!T.roughnessMap||!!T.metalnessMap||!!T.clearcoatMap||!!T.clearcoatRoughnessMap||!!T.clearcoatNormalMap||!!T.iridescenceMap||!!T.iridescenceThicknessMap||!!T.displacementMap||!!T.transmissionMap||!!T.thicknessMap||!!T.specularIntensityMap||!!T.specularColorMap||!!T.sheenColorMap||!!T.sheenRoughnessMap,uvsVertexOnly:!(!!T.map||!!T.bumpMap||!!T.normalMap||!!T.specularMap||!!T.alphaMap||!!T.emissiveMap||!!T.roughnessMap||!!T.metalnessMap||!!T.clearcoatNormalMap||!!T.iridescenceMap||!!T.iridescenceThicknessMap||T.transmission>0||!!T.transmissionMap||!!T.thicknessMap||!!T.specularIntensityMap||!!T.specularColorMap||T.sheen>0||!!T.sheenColorMap||!!T.sheenRoughnessMap)&&!!T.displacementMap,fog:!!de,useFog:T.fog===!0,fogExp2:de&&de.isFogExp2,flatShading:!!T.flatShading,sizeAttenuation:T.sizeAttenuation,logarithmicDepthBuffer:p,skinning:ce.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:Z,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:T.toneMapped?n.toneMapping:ki,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Xo,flipSided:T.side===ei,useDepthPacking:!!T.depthPacking,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:T.extensions&&T.extensions.derivatives,extensionFragDepth:T.extensions&&T.extensions.fragDepth,extensionDrawBuffers:T.extensions&&T.extensions.drawBuffers,extensionShaderTextureLOD:T.extensions&&T.extensions.shaderTextureLOD,rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),customProgramCacheKey:T.customProgramCacheKey()}}function m(T){const I=[];if(T.shaderID?I.push(T.shaderID):(I.push(T.customVertexShaderID),I.push(T.customFragmentShaderID)),T.defines!==void 0)for(const H in T.defines)I.push(H),I.push(T.defines[H]);return T.isRawShaderMaterial===!1&&(y(I,T),w(I,T),I.push(n.outputEncoding)),I.push(T.customProgramCacheKey),I.join()}function y(T,I){T.push(I.precision),T.push(I.outputEncoding),T.push(I.envMapMode),T.push(I.envMapCubeUVHeight),T.push(I.combine),T.push(I.vertexUvs),T.push(I.fogExp2),T.push(I.sizeAttenuation),T.push(I.morphTargetsCount),T.push(I.morphAttributeCount),T.push(I.numDirLights),T.push(I.numPointLights),T.push(I.numSpotLights),T.push(I.numHemiLights),T.push(I.numRectAreaLights),T.push(I.numDirLightShadows),T.push(I.numPointLightShadows),T.push(I.numSpotLightShadows),T.push(I.shadowMapType),T.push(I.toneMapping),T.push(I.numClippingPlanes),T.push(I.numClipIntersection),T.push(I.depthPacking)}function w(T,I){a.disableAll(),I.isWebGL2&&a.enable(0),I.supportsVertexTextures&&a.enable(1),I.instancing&&a.enable(2),I.instancingColor&&a.enable(3),I.map&&a.enable(4),I.matcap&&a.enable(5),I.envMap&&a.enable(6),I.lightMap&&a.enable(7),I.aoMap&&a.enable(8),I.emissiveMap&&a.enable(9),I.bumpMap&&a.enable(10),I.normalMap&&a.enable(11),I.objectSpaceNormalMap&&a.enable(12),I.tangentSpaceNormalMap&&a.enable(13),I.clearcoat&&a.enable(14),I.clearcoatMap&&a.enable(15),I.clearcoatRoughnessMap&&a.enable(16),I.clearcoatNormalMap&&a.enable(17),I.iridescence&&a.enable(18),I.iridescenceMap&&a.enable(19),I.iridescenceThicknessMap&&a.enable(20),I.displacementMap&&a.enable(21),I.specularMap&&a.enable(22),I.roughnessMap&&a.enable(23),I.metalnessMap&&a.enable(24),I.gradientMap&&a.enable(25),I.alphaMap&&a.enable(26),I.alphaTest&&a.enable(27),I.vertexColors&&a.enable(28),I.vertexAlphas&&a.enable(29),I.vertexUvs&&a.enable(30),I.vertexTangents&&a.enable(31),I.uvsVertexOnly&&a.enable(32),I.fog&&a.enable(33),T.push(a.mask),a.disableAll(),I.useFog&&a.enable(0),I.flatShading&&a.enable(1),I.logarithmicDepthBuffer&&a.enable(2),I.skinning&&a.enable(3),I.morphTargets&&a.enable(4),I.morphNormals&&a.enable(5),I.morphColors&&a.enable(6),I.premultipliedAlpha&&a.enable(7),I.shadowMapEnabled&&a.enable(8),I.physicallyCorrectLights&&a.enable(9),I.doubleSided&&a.enable(10),I.flipSided&&a.enable(11),I.useDepthPacking&&a.enable(12),I.dithering&&a.enable(13),I.specularIntensityMap&&a.enable(14),I.specularColorMap&&a.enable(15),I.transmission&&a.enable(16),I.transmissionMap&&a.enable(17),I.thicknessMap&&a.enable(18),I.sheen&&a.enable(19),I.sheenColorMap&&a.enable(20),I.sheenRoughnessMap&&a.enable(21),I.decodeVideoTexture&&a.enable(22),I.opaque&&a.enable(23),T.push(a.mask)}function E(T){const I=M[T.type];let H;if(I){const Y=fi[I];H=Tx.clone(Y.uniforms)}else H=T.uniforms;return H}function b(T,I){let H;for(let Y=0,ce=c.length;Y<ce;Y++){const de=c[Y];if(de.cacheKey===I){H=de,++H.usedTimes;break}}return H===void 0&&(H=new IM(n,I,T,o),c.push(H)),H}function A(T){if(--T.usedTimes===0){const I=c.indexOf(T);c[I]=c[c.length-1],c.pop(),T.destroy()}}function R(T){u.remove(T)}function N(){u.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:E,acquireProgram:b,releaseProgram:A,releaseShaderCache:R,programs:c,dispose:N}}function BM(){let n=new WeakMap;function e(o){let s=n.get(o);return s===void 0&&(s={},n.set(o,s)),s}function t(o){n.delete(o)}function i(o,s,a){n.get(o)[s]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function VM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Kp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Qp(){const n=[];let e=0;const t=[],i=[],r=[];function o(){e=0,t.length=0,i.length=0,r.length=0}function s(p,h,x,M,g,m){let y=n[e];return y===void 0?(y={id:p.id,object:p,geometry:h,material:x,groupOrder:M,renderOrder:p.renderOrder,z:g,group:m},n[e]=y):(y.id=p.id,y.object=p,y.geometry=h,y.material=x,y.groupOrder=M,y.renderOrder=p.renderOrder,y.z=g,y.group=m),e++,y}function a(p,h,x,M,g,m){const y=s(p,h,x,M,g,m);x.transmission>0?i.push(y):x.transparent===!0?r.push(y):t.push(y)}function u(p,h,x,M,g,m){const y=s(p,h,x,M,g,m);x.transmission>0?i.unshift(y):x.transparent===!0?r.unshift(y):t.unshift(y)}function c(p,h){t.length>1&&t.sort(p||VM),i.length>1&&i.sort(h||Kp),r.length>1&&r.sort(h||Kp)}function d(){for(let p=e,h=n.length;p<h;p++){const x=n[p];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:r,init:o,push:a,unshift:u,finish:d,sort:c}}function HM(){let n=new WeakMap;function e(i,r){let o;return n.has(i)===!1?(o=new Qp,n.set(i,[o])):r>=n.get(i).length?(o=new Qp,n.get(i).push(o)):o=n.get(i)[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function GM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new mt};break;case"SpotLight":t={position:new j,direction:new j,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":t={color:new mt,position:new j,halfWidth:new j,halfHeight:new j};break}return n[e.id]=t,t}}}function WM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let jM=0;function XM(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function qM(n,e){const t=new GM,i=WM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let d=0;d<9;d++)r.probe.push(new j);const o=new j,s=new Wt,a=new Wt;function u(d,p){let h=0,x=0,M=0;for(let I=0;I<9;I++)r.probe[I].set(0,0,0);let g=0,m=0,y=0,w=0,E=0,b=0,A=0,R=0;d.sort(XM);const N=p!==!0?Math.PI:1;for(let I=0,H=d.length;I<H;I++){const Y=d[I],ce=Y.color,de=Y.intensity,q=Y.distance,ae=Y.shadow&&Y.shadow.map?Y.shadow.map.texture:null;if(Y.isAmbientLight)h+=ce.r*de*N,x+=ce.g*de*N,M+=ce.b*de*N;else if(Y.isLightProbe)for(let Q=0;Q<9;Q++)r.probe[Q].addScaledVector(Y.sh.coefficients[Q],de);else if(Y.isDirectionalLight){const Q=t.get(Y);if(Q.color.copy(Y.color).multiplyScalar(Y.intensity*N),Y.castShadow){const oe=Y.shadow,V=i.get(Y);V.shadowBias=oe.bias,V.shadowNormalBias=oe.normalBias,V.shadowRadius=oe.radius,V.shadowMapSize=oe.mapSize,r.directionalShadow[g]=V,r.directionalShadowMap[g]=ae,r.directionalShadowMatrix[g]=Y.shadow.matrix,b++}r.directional[g]=Q,g++}else if(Y.isSpotLight){const Q=t.get(Y);if(Q.position.setFromMatrixPosition(Y.matrixWorld),Q.color.copy(ce).multiplyScalar(de*N),Q.distance=q,Q.coneCos=Math.cos(Y.angle),Q.penumbraCos=Math.cos(Y.angle*(1-Y.penumbra)),Q.decay=Y.decay,Y.castShadow){const oe=Y.shadow,V=i.get(Y);V.shadowBias=oe.bias,V.shadowNormalBias=oe.normalBias,V.shadowRadius=oe.radius,V.shadowMapSize=oe.mapSize,r.spotShadow[y]=V,r.spotShadowMap[y]=ae,r.spotShadowMatrix[y]=Y.shadow.matrix,R++}r.spot[y]=Q,y++}else if(Y.isRectAreaLight){const Q=t.get(Y);Q.color.copy(ce).multiplyScalar(de),Q.halfWidth.set(Y.width*.5,0,0),Q.halfHeight.set(0,Y.height*.5,0),r.rectArea[w]=Q,w++}else if(Y.isPointLight){const Q=t.get(Y);if(Q.color.copy(Y.color).multiplyScalar(Y.intensity*N),Q.distance=Y.distance,Q.decay=Y.decay,Y.castShadow){const oe=Y.shadow,V=i.get(Y);V.shadowBias=oe.bias,V.shadowNormalBias=oe.normalBias,V.shadowRadius=oe.radius,V.shadowMapSize=oe.mapSize,V.shadowCameraNear=oe.camera.near,V.shadowCameraFar=oe.camera.far,r.pointShadow[m]=V,r.pointShadowMap[m]=ae,r.pointShadowMatrix[m]=Y.shadow.matrix,A++}r.point[m]=Q,m++}else if(Y.isHemisphereLight){const Q=t.get(Y);Q.skyColor.copy(Y.color).multiplyScalar(de*N),Q.groundColor.copy(Y.groundColor).multiplyScalar(de*N),r.hemi[E]=Q,E++}}w>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_FLOAT_1,r.rectAreaLTC2=ye.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_HALF_1,r.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=x,r.ambient[2]=M;const T=r.hash;(T.directionalLength!==g||T.pointLength!==m||T.spotLength!==y||T.rectAreaLength!==w||T.hemiLength!==E||T.numDirectionalShadows!==b||T.numPointShadows!==A||T.numSpotShadows!==R)&&(r.directional.length=g,r.spot.length=y,r.rectArea.length=w,r.point.length=m,r.hemi.length=E,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=A,r.spotShadowMatrix.length=R,T.directionalLength=g,T.pointLength=m,T.spotLength=y,T.rectAreaLength=w,T.hemiLength=E,T.numDirectionalShadows=b,T.numPointShadows=A,T.numSpotShadows=R,r.version=jM++)}function c(d,p){let h=0,x=0,M=0,g=0,m=0;const y=p.matrixWorldInverse;for(let w=0,E=d.length;w<E;w++){const b=d[w];if(b.isDirectionalLight){const A=r.directional[h];A.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(y),h++}else if(b.isSpotLight){const A=r.spot[M];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(y),A.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(y),M++}else if(b.isRectAreaLight){const A=r.rectArea[g];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(y),a.identity(),s.copy(b.matrixWorld),s.premultiply(y),a.extractRotation(s),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const A=r.point[x];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(y),x++}else if(b.isHemisphereLight){const A=r.hemi[m];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(y),m++}}}return{setup:u,setupView:c,state:r}}function Jp(n,e){const t=new qM(n,e),i=[],r=[];function o(){i.length=0,r.length=0}function s(p){i.push(p)}function a(p){r.push(p)}function u(p){t.setup(i,p)}function c(p){t.setupView(i,p)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:u,setupLightsView:c,pushLight:s,pushShadow:a}}function YM(n,e){let t=new WeakMap;function i(o,s=0){let a;return t.has(o)===!1?(a=new Jp(n,e),t.set(o,[a])):s>=t.get(o).length?(a=new Jp(n,e),t.get(o).push(a)):a=t.get(o)[s],a}function r(){t=new WeakMap}return{get:i,dispose:r}}class $M extends Jl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ZM extends Jl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new j,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const KM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QM=`uniform sampler2D shadow_pass;
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
}`;function JM(n,e,t){let i=new Nv;const r=new Xe,o=new Xe,s=new Nt,a=new $M({depthPacking:ax}),u=new ZM,c={},d=t.maxTextureSize,p={0:ei,1:qs,2:Xo},h=new jr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:KM,fragmentShader:QM}),x=h.clone();x.defines.HORIZONTAL_PASS=1;const M=new Ui;M.setAttribute("position",new ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new pi(M,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xv,this.render=function(b,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const N=n.getRenderTarget(),T=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),H=n.state;H.setBlending(dr),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);for(let Y=0,ce=b.length;Y<ce;Y++){const de=b[Y],q=de.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const ae=q.getFrameExtents();if(r.multiply(ae),o.copy(q.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(o.x=Math.floor(d/ae.x),r.x=o.x*ae.x,q.mapSize.x=o.x),r.y>d&&(o.y=Math.floor(d/ae.y),r.y=o.y*ae.y,q.mapSize.y=o.y)),q.map===null){const oe=this.type!==_s?{minFilter:hn,magFilter:hn}:{};q.map=new Gr(r.x,r.y,oe),q.map.texture.name=de.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const Q=q.getViewportCount();for(let oe=0;oe<Q;oe++){const V=q.getViewport(oe);s.set(o.x*V.x,o.y*V.y,o.x*V.z,o.y*V.w),H.viewport(s),q.updateMatrices(de,oe),i=q.getFrustum(),E(A,R,q.camera,de,this.type)}q.isPointLightShadow!==!0&&this.type===_s&&y(q,R),q.needsUpdate=!1}m.needsUpdate=!1,n.setRenderTarget(N,T,I)};function y(b,A){const R=e.update(g);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,x.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,x.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Gr(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(A,null,R,h,g,null),x.uniforms.shadow_pass.value=b.mapPass.texture,x.uniforms.resolution.value=b.mapSize,x.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(A,null,R,x,g,null)}function w(b,A,R,N,T,I){let H=null;const Y=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(Y!==void 0?H=Y:H=R.isPointLight===!0?u:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0){const ce=H.uuid,de=A.uuid;let q=c[ce];q===void 0&&(q={},c[ce]=q);let ae=q[de];ae===void 0&&(ae=H.clone(),q[de]=ae),H=ae}return H.visible=A.visible,H.wireframe=A.wireframe,I===_s?H.side=A.shadowSide!==null?A.shadowSide:A.side:H.side=A.shadowSide!==null?A.shadowSide:p[A.side],H.alphaMap=A.alphaMap,H.alphaTest=A.alphaTest,H.clipShadows=A.clipShadows,H.clippingPlanes=A.clippingPlanes,H.clipIntersection=A.clipIntersection,H.displacementMap=A.displacementMap,H.displacementScale=A.displacementScale,H.displacementBias=A.displacementBias,H.wireframeLinewidth=A.wireframeLinewidth,H.linewidth=A.linewidth,R.isPointLight===!0&&H.isMeshDistanceMaterial===!0&&(H.referencePosition.setFromMatrixPosition(R.matrixWorld),H.nearDistance=N,H.farDistance=T),H}function E(b,A,R,N,T){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&T===_s)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);const Y=e.update(b),ce=b.material;if(Array.isArray(ce)){const de=Y.groups;for(let q=0,ae=de.length;q<ae;q++){const Q=de[q],oe=ce[Q.materialIndex];if(oe&&oe.visible){const V=w(b,oe,N,R.near,R.far,T);n.renderBufferDirect(R,null,Y,V,b,Q)}}}else if(ce.visible){const de=w(b,ce,N,R.near,R.far,T);n.renderBufferDirect(R,null,Y,de,b,null)}}const H=b.children;for(let Y=0,ce=H.length;Y<ce;Y++)E(H[Y],A,R,N,T)}}function eE(n,e,t){const i=t.isWebGL2;function r(){let O=!1;const ve=new Nt;let J=null;const Ee=new Nt(0,0,0,0);return{setMask:function(re){J!==re&&!O&&(n.colorMask(re,re,re,re),J=re)},setLocked:function(re){O=re},setClear:function(re,Ke,_,Fe,si){si===!0&&(re*=Fe,Ke*=Fe,_*=Fe),ve.set(re,Ke,_,Fe),Ee.equals(ve)===!1&&(n.clearColor(re,Ke,_,Fe),Ee.copy(ve))},reset:function(){O=!1,J=null,Ee.set(-1,0,0,0)}}}function o(){let O=!1,ve=null,J=null,Ee=null;return{setTest:function(re){re?qe(2929):Ne(2929)},setMask:function(re){ve!==re&&!O&&(n.depthMask(re),ve=re)},setFunc:function(re){if(J!==re){if(re)switch(re){case Dy:n.depthFunc(512);break;case Ry:n.depthFunc(519);break;case ky:n.depthFunc(513);break;case mf:n.depthFunc(515);break;case Fy:n.depthFunc(514);break;case Iy:n.depthFunc(518);break;case Ny:n.depthFunc(516);break;case zy:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);J=re}},setLocked:function(re){O=re},setClear:function(re){Ee!==re&&(n.clearDepth(re),Ee=re)},reset:function(){O=!1,ve=null,J=null,Ee=null}}}function s(){let O=!1,ve=null,J=null,Ee=null,re=null,Ke=null,_=null,Fe=null,si=null;return{setTest:function(ft){O||(ft?qe(2960):Ne(2960))},setMask:function(ft){ve!==ft&&!O&&(n.stencilMask(ft),ve=ft)},setFunc:function(ft,Hn,un){(J!==ft||Ee!==Hn||re!==un)&&(n.stencilFunc(ft,Hn,un),J=ft,Ee=Hn,re=un)},setOp:function(ft,Hn,un){(Ke!==ft||_!==Hn||Fe!==un)&&(n.stencilOp(ft,Hn,un),Ke=ft,_=Hn,Fe=un)},setLocked:function(ft){O=ft},setClear:function(ft){si!==ft&&(n.clearStencil(ft),si=ft)},reset:function(){O=!1,ve=null,J=null,Ee=null,re=null,Ke=null,_=null,Fe=null,si=null}}}const a=new r,u=new o,c=new s,d=new WeakMap,p=new WeakMap;let h={},x={},M=new WeakMap,g=[],m=null,y=!1,w=null,E=null,b=null,A=null,R=null,N=null,T=null,I=!1,H=null,Y=null,ce=null,de=null,q=null;const ae=n.getParameter(35661);let Q=!1,oe=0;const V=n.getParameter(7938);V.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(V)[1]),Q=oe>=1):V.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),Q=oe>=2);let B=null,G={};const Z=n.getParameter(3088),ee=n.getParameter(2978),pe=new Nt().fromArray(Z),Se=new Nt().fromArray(ee);function Re(O,ve,J){const Ee=new Uint8Array(4),re=n.createTexture();n.bindTexture(O,re),n.texParameteri(O,10241,9728),n.texParameteri(O,10240,9728);for(let Ke=0;Ke<J;Ke++)n.texImage2D(ve+Ke,0,6408,1,1,0,6408,5121,Ee);return re}const ne={};ne[3553]=Re(3553,3553,1),ne[34067]=Re(34067,34069,6),a.setClear(0,0,0,1),u.setClear(1),c.setClear(0),qe(2929),u.setFunc(mf),bt(!1),kt(Hh),qe(2884),rt(dr);function qe(O){h[O]!==!0&&(n.enable(O),h[O]=!0)}function Ne(O){h[O]!==!1&&(n.disable(O),h[O]=!1)}function Ue(O,ve){return x[O]!==ve?(n.bindFramebuffer(O,ve),x[O]=ve,i&&(O===36009&&(x[36160]=ve),O===36160&&(x[36009]=ve)),!0):!1}function be(O,ve){let J=g,Ee=!1;if(O)if(J=M.get(ve),J===void 0&&(J=[],M.set(ve,J)),O.isWebGLMultipleRenderTargets){const re=O.texture;if(J.length!==re.length||J[0]!==36064){for(let Ke=0,_=re.length;Ke<_;Ke++)J[Ke]=36064+Ke;J.length=re.length,Ee=!0}}else J[0]!==36064&&(J[0]=36064,Ee=!0);else J[0]!==1029&&(J[0]=1029,Ee=!0);Ee&&(t.isWebGL2?n.drawBuffers(J):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(J))}function tt(O){return m!==O?(n.useProgram(O),m=O,!0):!1}const He={[vo]:32774,[xy]:32778,[wy]:32779};if(i)He[Xh]=32775,He[qh]=32776;else{const O=e.get("EXT_blend_minmax");O!==null&&(He[Xh]=O.MIN_EXT,He[qh]=O.MAX_EXT)}const ke={[Sy]:0,[My]:1,[Ey]:768,[wv]:770,[Py]:776,[Ay]:774,[Ty]:772,[by]:769,[Sv]:771,[Ly]:775,[Cy]:773};function rt(O,ve,J,Ee,re,Ke,_,Fe){if(O===dr){y===!0&&(Ne(3042),y=!1);return}if(y===!1&&(qe(3042),y=!0),O!==yy){if(O!==w||Fe!==I){if((E!==vo||R!==vo)&&(n.blendEquation(32774),E=vo,R=vo),Fe)switch(O){case zo:n.blendFuncSeparate(1,771,1,771);break;case Gh:n.blendFunc(1,1);break;case Wh:n.blendFuncSeparate(0,769,0,1);break;case jh:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case zo:n.blendFuncSeparate(770,771,1,771);break;case Gh:n.blendFunc(770,1);break;case Wh:n.blendFuncSeparate(0,769,0,1);break;case jh:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}b=null,A=null,N=null,T=null,w=O,I=Fe}return}re=re||ve,Ke=Ke||J,_=_||Ee,(ve!==E||re!==R)&&(n.blendEquationSeparate(He[ve],He[re]),E=ve,R=re),(J!==b||Ee!==A||Ke!==N||_!==T)&&(n.blendFuncSeparate(ke[J],ke[Ee],ke[Ke],ke[_]),b=J,A=Ee,N=Ke,T=_),w=O,I=null}function gt(O,ve){O.side===Xo?Ne(2884):qe(2884);let J=O.side===ei;ve&&(J=!J),bt(J),O.blending===zo&&O.transparent===!1?rt(dr):rt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),u.setFunc(O.depthFunc),u.setTest(O.depthTest),u.setMask(O.depthWrite),a.setMask(O.colorWrite);const Ee=O.stencilWrite;c.setTest(Ee),Ee&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),je(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?qe(32926):Ne(32926)}function bt(O){H!==O&&(O?n.frontFace(2304):n.frontFace(2305),H=O)}function kt(O){O!==my?(qe(2884),O!==Y&&(O===Hh?n.cullFace(1029):O===gy?n.cullFace(1028):n.cullFace(1032))):Ne(2884),Y=O}function at(O){O!==ce&&(Q&&n.lineWidth(O),ce=O)}function je(O,ve,J){O?(qe(32823),(de!==ve||q!==J)&&(n.polygonOffset(ve,J),de=ve,q=J)):Ne(32823)}function ln(O){O?qe(3089):Ne(3089)}function Xt(O){O===void 0&&(O=33984+ae-1),B!==O&&(n.activeTexture(O),B=O)}function k(O,ve){B===null&&Xt();let J=G[B];J===void 0&&(J={type:void 0,texture:void 0},G[B]=J),(J.type!==O||J.texture!==ve)&&(n.bindTexture(O,ve||ne[O]),J.type=O,J.texture=ve)}function L(){const O=G[B];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function te(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function me(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function se(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function P(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function le(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ge(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function we(O){pe.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),pe.copy(O))}function _e(O){Se.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),Se.copy(O))}function ze(O,ve){let J=p.get(ve);J===void 0&&(J=new WeakMap,p.set(ve,J));let Ee=J.get(O);Ee===void 0&&(Ee=n.getUniformBlockIndex(ve,O.name),J.set(O,Ee))}function Me(O,ve){const Ee=p.get(ve).get(O);d.get(O)!==Ee&&(n.uniformBlockBinding(ve,Ee,O.__bindingPointIndex),d.set(O,Ee))}function ot(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},B=null,G={},x={},M=new WeakMap,g=[],m=null,y=!1,w=null,E=null,b=null,A=null,R=null,N=null,T=null,I=!1,H=null,Y=null,ce=null,de=null,q=null,pe.set(0,0,n.canvas.width,n.canvas.height),Se.set(0,0,n.canvas.width,n.canvas.height),a.reset(),u.reset(),c.reset()}return{buffers:{color:a,depth:u,stencil:c},enable:qe,disable:Ne,bindFramebuffer:Ue,drawBuffers:be,useProgram:tt,setBlending:rt,setMaterial:gt,setFlipSided:bt,setCullFace:kt,setLineWidth:at,setPolygonOffset:je,setScissorTest:ln,activeTexture:Xt,bindTexture:k,unbindTexture:L,compressedTexImage2D:te,texImage2D:le,texImage3D:ge,updateUBOMapping:ze,uniformBlockBinding:Me,texStorage2D:Ce,texStorage3D:P,texSubImage2D:he,texSubImage3D:me,compressedTexSubImage2D:se,scissor:we,viewport:_e,reset:ot}}function tE(n,e,t,i,r,o,s){const a=r.isWebGL2,u=r.maxTextures,c=r.maxCubemapSize,d=r.maxTextureSize,p=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,x=/OculusBrowser/g.test(navigator.userAgent),M=new WeakMap;let g;const m=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(k,L){return y?new OffscreenCanvas(k,L):kl("canvas")}function E(k,L,te,he){let me=1;if((k.width>he||k.height>he)&&(me=he/Math.max(k.width,k.height)),me<1||L===!0)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap){const se=L?wf:Math.floor,Ce=se(me*k.width),P=se(me*k.height);g===void 0&&(g=w(Ce,P));const le=te?w(Ce,P):g;return le.width=Ce,le.height=P,le.getContext("2d").drawImage(k,0,0,Ce,P),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+Ce+"x"+P+")."),le}else return"data"in k&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),k;return k}function b(k){return xp(k.width)&&xp(k.height)}function A(k){return a?!1:k.wrapS!==Kn||k.wrapT!==Kn||k.minFilter!==hn&&k.minFilter!==pn}function R(k,L){return k.generateMipmaps&&L&&k.minFilter!==hn&&k.minFilter!==pn}function N(k){n.generateMipmap(k)}function T(k,L,te,he,me=!1){if(a===!1)return L;if(k!==null){if(n[k]!==void 0)return n[k];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let se=L;return L===6403&&(te===5126&&(se=33326),te===5131&&(se=33325),te===5121&&(se=33321)),L===33319&&(te===5126&&(se=33328),te===5131&&(se=33327),te===5121&&(se=33323)),L===6408&&(te===5126&&(se=34836),te===5131&&(se=34842),te===5121&&(se=he===St&&me===!1?35907:32856),te===32819&&(se=32854),te===32820&&(se=32855)),(se===33325||se===33326||se===33327||se===33328||se===34842||se===34836)&&e.get("EXT_color_buffer_float"),se}function I(k,L,te){return R(k,te)===!0||k.isFramebufferTexture&&k.minFilter!==hn&&k.minFilter!==pn?Math.log2(Math.max(L.width,L.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?L.mipmaps.length:1}function H(k){return k===hn||k===Yh||k===$h?9728:9729}function Y(k){const L=k.target;L.removeEventListener("dispose",Y),de(L),L.isVideoTexture&&M.delete(L)}function ce(k){const L=k.target;L.removeEventListener("dispose",ce),ae(L)}function de(k){const L=i.get(k);if(L.__webglInit===void 0)return;const te=k.source,he=m.get(te);if(he){const me=he[L.__cacheKey];me.usedTimes--,me.usedTimes===0&&q(k),Object.keys(he).length===0&&m.delete(te)}i.remove(k)}function q(k){const L=i.get(k);n.deleteTexture(L.__webglTexture);const te=k.source,he=m.get(te);delete he[L.__cacheKey],s.memory.textures--}function ae(k){const L=k.texture,te=i.get(k),he=i.get(L);if(he.__webglTexture!==void 0&&(n.deleteTexture(he.__webglTexture),s.memory.textures--),k.depthTexture&&k.depthTexture.dispose(),k.isWebGLCubeRenderTarget)for(let me=0;me<6;me++)n.deleteFramebuffer(te.__webglFramebuffer[me]),te.__webglDepthbuffer&&n.deleteRenderbuffer(te.__webglDepthbuffer[me]);else{if(n.deleteFramebuffer(te.__webglFramebuffer),te.__webglDepthbuffer&&n.deleteRenderbuffer(te.__webglDepthbuffer),te.__webglMultisampledFramebuffer&&n.deleteFramebuffer(te.__webglMultisampledFramebuffer),te.__webglColorRenderbuffer)for(let me=0;me<te.__webglColorRenderbuffer.length;me++)te.__webglColorRenderbuffer[me]&&n.deleteRenderbuffer(te.__webglColorRenderbuffer[me]);te.__webglDepthRenderbuffer&&n.deleteRenderbuffer(te.__webglDepthRenderbuffer)}if(k.isWebGLMultipleRenderTargets)for(let me=0,se=L.length;me<se;me++){const Ce=i.get(L[me]);Ce.__webglTexture&&(n.deleteTexture(Ce.__webglTexture),s.memory.textures--),i.remove(L[me])}i.remove(L),i.remove(k)}let Q=0;function oe(){Q=0}function V(){const k=Q;return k>=u&&console.warn("THREE.WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+u),Q+=1,k}function B(k){const L=[];return L.push(k.wrapS),L.push(k.wrapT),L.push(k.magFilter),L.push(k.minFilter),L.push(k.anisotropy),L.push(k.internalFormat),L.push(k.format),L.push(k.type),L.push(k.generateMipmaps),L.push(k.premultiplyAlpha),L.push(k.flipY),L.push(k.unpackAlignment),L.push(k.encoding),L.join()}function G(k,L){const te=i.get(k);if(k.isVideoTexture&&ln(k),k.isRenderTargetTexture===!1&&k.version>0&&te.__version!==k.version){const he=k.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(te,k,L);return}}t.activeTexture(33984+L),t.bindTexture(3553,te.__webglTexture)}function Z(k,L){const te=i.get(k);if(k.version>0&&te.__version!==k.version){Ne(te,k,L);return}t.activeTexture(33984+L),t.bindTexture(35866,te.__webglTexture)}function ee(k,L){const te=i.get(k);if(k.version>0&&te.__version!==k.version){Ne(te,k,L);return}t.activeTexture(33984+L),t.bindTexture(32879,te.__webglTexture)}function pe(k,L){const te=i.get(k);if(k.version>0&&te.__version!==k.version){Ue(te,k,L);return}t.activeTexture(33984+L),t.bindTexture(34067,te.__webglTexture)}const Se={[_f]:10497,[Kn]:33071,[yf]:33648},Re={[hn]:9728,[Yh]:9984,[$h]:9986,[pn]:9729,[jy]:9985,[Ql]:9987};function ne(k,L,te){if(te?(n.texParameteri(k,10242,Se[L.wrapS]),n.texParameteri(k,10243,Se[L.wrapT]),(k===32879||k===35866)&&n.texParameteri(k,32882,Se[L.wrapR]),n.texParameteri(k,10240,Re[L.magFilter]),n.texParameteri(k,10241,Re[L.minFilter])):(n.texParameteri(k,10242,33071),n.texParameteri(k,10243,33071),(k===32879||k===35866)&&n.texParameteri(k,32882,33071),(L.wrapS!==Kn||L.wrapT!==Kn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(k,10240,H(L.magFilter)),n.texParameteri(k,10241,H(L.minFilter)),L.minFilter!==hn&&L.minFilter!==pn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const he=e.get("EXT_texture_filter_anisotropic");if(L.type===Pr&&e.has("OES_texture_float_linear")===!1||a===!1&&L.type===Ys&&e.has("OES_texture_half_float_linear")===!1)return;(L.anisotropy>1||i.get(L).__currentAnisotropy)&&(n.texParameterf(k,he.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,r.getMaxAnisotropy())),i.get(L).__currentAnisotropy=L.anisotropy)}}function qe(k,L){let te=!1;k.__webglInit===void 0&&(k.__webglInit=!0,L.addEventListener("dispose",Y));const he=L.source;let me=m.get(he);me===void 0&&(me={},m.set(he,me));const se=B(L);if(se!==k.__cacheKey){me[se]===void 0&&(me[se]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,te=!0),me[se].usedTimes++;const Ce=me[k.__cacheKey];Ce!==void 0&&(me[k.__cacheKey].usedTimes--,Ce.usedTimes===0&&q(L)),k.__cacheKey=se,k.__webglTexture=me[se].texture}return te}function Ne(k,L,te){let he=3553;L.isDataArrayTexture&&(he=35866),L.isData3DTexture&&(he=32879);const me=qe(k,L),se=L.source;if(t.activeTexture(33984+te),t.bindTexture(he,k.__webglTexture),se.version!==se.__currentVersion||me===!0){n.pixelStorei(37440,L.flipY),n.pixelStorei(37441,L.premultiplyAlpha),n.pixelStorei(3317,L.unpackAlignment),n.pixelStorei(37443,0);const Ce=A(L)&&b(L.image)===!1;let P=E(L.image,Ce,!1,d);P=Xt(L,P);const le=b(P)||a,ge=o.convert(L.format,L.encoding);let we=o.convert(L.type),_e=T(L.internalFormat,ge,we,L.encoding,L.isVideoTexture);ne(he,L,le);let ze;const Me=L.mipmaps,ot=a&&L.isVideoTexture!==!0,O=se.__currentVersion===void 0||me===!0,ve=I(L,P,le);if(L.isDepthTexture)_e=6402,a?L.type===Pr?_e=36012:L.type===Lr?_e=33190:L.type===Oo?_e=35056:_e=33189:L.type===Pr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),L.format===Fr&&_e===6402&&L.type!==bv&&L.type!==Lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),L.type=Lr,we=o.convert(L.type)),L.format===$o&&_e===6402&&(_e=34041,L.type!==Oo&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),L.type=Oo,we=o.convert(L.type))),O&&(ot?t.texStorage2D(3553,1,_e,P.width,P.height):t.texImage2D(3553,0,_e,P.width,P.height,0,ge,we,null));else if(L.isDataTexture)if(Me.length>0&&le){ot&&O&&t.texStorage2D(3553,ve,_e,Me[0].width,Me[0].height);for(let J=0,Ee=Me.length;J<Ee;J++)ze=Me[J],ot?t.texSubImage2D(3553,J,0,0,ze.width,ze.height,ge,we,ze.data):t.texImage2D(3553,J,_e,ze.width,ze.height,0,ge,we,ze.data);L.generateMipmaps=!1}else ot?(O&&t.texStorage2D(3553,ve,_e,P.width,P.height),t.texSubImage2D(3553,0,0,0,P.width,P.height,ge,we,P.data)):t.texImage2D(3553,0,_e,P.width,P.height,0,ge,we,P.data);else if(L.isCompressedTexture){ot&&O&&t.texStorage2D(3553,ve,_e,Me[0].width,Me[0].height);for(let J=0,Ee=Me.length;J<Ee;J++)ze=Me[J],L.format!==hi?ge!==null?ot?t.compressedTexSubImage2D(3553,J,0,0,ze.width,ze.height,ge,ze.data):t.compressedTexImage2D(3553,J,_e,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?t.texSubImage2D(3553,J,0,0,ze.width,ze.height,ge,we,ze.data):t.texImage2D(3553,J,_e,ze.width,ze.height,0,ge,we,ze.data)}else if(L.isDataArrayTexture)ot?(O&&t.texStorage3D(35866,ve,_e,P.width,P.height,P.depth),t.texSubImage3D(35866,0,0,0,0,P.width,P.height,P.depth,ge,we,P.data)):t.texImage3D(35866,0,_e,P.width,P.height,P.depth,0,ge,we,P.data);else if(L.isData3DTexture)ot?(O&&t.texStorage3D(32879,ve,_e,P.width,P.height,P.depth),t.texSubImage3D(32879,0,0,0,0,P.width,P.height,P.depth,ge,we,P.data)):t.texImage3D(32879,0,_e,P.width,P.height,P.depth,0,ge,we,P.data);else if(L.isFramebufferTexture){if(O)if(ot)t.texStorage2D(3553,ve,_e,P.width,P.height);else{let J=P.width,Ee=P.height;for(let re=0;re<ve;re++)t.texImage2D(3553,re,_e,J,Ee,0,ge,we,null),J>>=1,Ee>>=1}}else if(Me.length>0&&le){ot&&O&&t.texStorage2D(3553,ve,_e,Me[0].width,Me[0].height);for(let J=0,Ee=Me.length;J<Ee;J++)ze=Me[J],ot?t.texSubImage2D(3553,J,0,0,ge,we,ze):t.texImage2D(3553,J,_e,ge,we,ze);L.generateMipmaps=!1}else ot?(O&&t.texStorage2D(3553,ve,_e,P.width,P.height),t.texSubImage2D(3553,0,0,0,ge,we,P)):t.texImage2D(3553,0,_e,ge,we,P);R(L,le)&&N(he),se.__currentVersion=se.version,L.onUpdate&&L.onUpdate(L)}k.__version=L.version}function Ue(k,L,te){if(L.image.length!==6)return;const he=qe(k,L),me=L.source;if(t.activeTexture(33984+te),t.bindTexture(34067,k.__webglTexture),me.version!==me.__currentVersion||he===!0){n.pixelStorei(37440,L.flipY),n.pixelStorei(37441,L.premultiplyAlpha),n.pixelStorei(3317,L.unpackAlignment),n.pixelStorei(37443,0);const se=L.isCompressedTexture||L.image[0].isCompressedTexture,Ce=L.image[0]&&L.image[0].isDataTexture,P=[];for(let J=0;J<6;J++)!se&&!Ce?P[J]=E(L.image[J],!1,!0,c):P[J]=Ce?L.image[J].image:L.image[J],P[J]=Xt(L,P[J]);const le=P[0],ge=b(le)||a,we=o.convert(L.format,L.encoding),_e=o.convert(L.type),ze=T(L.internalFormat,we,_e,L.encoding),Me=a&&L.isVideoTexture!==!0,ot=me.__currentVersion===void 0||he===!0;let O=I(L,le,ge);ne(34067,L,ge);let ve;if(se){Me&&ot&&t.texStorage2D(34067,O,ze,le.width,le.height);for(let J=0;J<6;J++){ve=P[J].mipmaps;for(let Ee=0;Ee<ve.length;Ee++){const re=ve[Ee];L.format!==hi?we!==null?Me?t.compressedTexSubImage2D(34069+J,Ee,0,0,re.width,re.height,we,re.data):t.compressedTexImage2D(34069+J,Ee,ze,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Me?t.texSubImage2D(34069+J,Ee,0,0,re.width,re.height,we,_e,re.data):t.texImage2D(34069+J,Ee,ze,re.width,re.height,0,we,_e,re.data)}}}else{ve=L.mipmaps,Me&&ot&&(ve.length>0&&O++,t.texStorage2D(34067,O,ze,P[0].width,P[0].height));for(let J=0;J<6;J++)if(Ce){Me?t.texSubImage2D(34069+J,0,0,0,P[J].width,P[J].height,we,_e,P[J].data):t.texImage2D(34069+J,0,ze,P[J].width,P[J].height,0,we,_e,P[J].data);for(let Ee=0;Ee<ve.length;Ee++){const Ke=ve[Ee].image[J].image;Me?t.texSubImage2D(34069+J,Ee+1,0,0,Ke.width,Ke.height,we,_e,Ke.data):t.texImage2D(34069+J,Ee+1,ze,Ke.width,Ke.height,0,we,_e,Ke.data)}}else{Me?t.texSubImage2D(34069+J,0,0,0,we,_e,P[J]):t.texImage2D(34069+J,0,ze,we,_e,P[J]);for(let Ee=0;Ee<ve.length;Ee++){const re=ve[Ee];Me?t.texSubImage2D(34069+J,Ee+1,0,0,we,_e,re.image[J]):t.texImage2D(34069+J,Ee+1,ze,we,_e,re.image[J])}}}R(L,ge)&&N(34067),me.__currentVersion=me.version,L.onUpdate&&L.onUpdate(L)}k.__version=L.version}function be(k,L,te,he,me){const se=o.convert(te.format,te.encoding),Ce=o.convert(te.type),P=T(te.internalFormat,se,Ce,te.encoding);i.get(L).__hasExternalTextures||(me===32879||me===35866?t.texImage3D(me,0,P,L.width,L.height,L.depth,0,se,Ce,null):t.texImage2D(me,0,P,L.width,L.height,0,se,Ce,null)),t.bindFramebuffer(36160,k),je(L)?h.framebufferTexture2DMultisampleEXT(36160,he,me,i.get(te).__webglTexture,0,at(L)):n.framebufferTexture2D(36160,he,me,i.get(te).__webglTexture,0),t.bindFramebuffer(36160,null)}function tt(k,L,te){if(n.bindRenderbuffer(36161,k),L.depthBuffer&&!L.stencilBuffer){let he=33189;if(te||je(L)){const me=L.depthTexture;me&&me.isDepthTexture&&(me.type===Pr?he=36012:me.type===Lr&&(he=33190));const se=at(L);je(L)?h.renderbufferStorageMultisampleEXT(36161,se,he,L.width,L.height):n.renderbufferStorageMultisample(36161,se,he,L.width,L.height)}else n.renderbufferStorage(36161,he,L.width,L.height);n.framebufferRenderbuffer(36160,36096,36161,k)}else if(L.depthBuffer&&L.stencilBuffer){const he=at(L);te&&je(L)===!1?n.renderbufferStorageMultisample(36161,he,35056,L.width,L.height):je(L)?h.renderbufferStorageMultisampleEXT(36161,he,35056,L.width,L.height):n.renderbufferStorage(36161,34041,L.width,L.height),n.framebufferRenderbuffer(36160,33306,36161,k)}else{const he=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let me=0;me<he.length;me++){const se=he[me],Ce=o.convert(se.format,se.encoding),P=o.convert(se.type),le=T(se.internalFormat,Ce,P,se.encoding),ge=at(L);te&&je(L)===!1?n.renderbufferStorageMultisample(36161,ge,le,L.width,L.height):je(L)?h.renderbufferStorageMultisampleEXT(36161,ge,le,L.width,L.height):n.renderbufferStorage(36161,le,L.width,L.height)}}n.bindRenderbuffer(36161,null)}function He(k,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,k),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(L.depthTexture).__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),G(L.depthTexture,0);const he=i.get(L.depthTexture).__webglTexture,me=at(L);if(L.depthTexture.format===Fr)je(L)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,he,0,me):n.framebufferTexture2D(36160,36096,3553,he,0);else if(L.depthTexture.format===$o)je(L)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,he,0,me):n.framebufferTexture2D(36160,33306,3553,he,0);else throw new Error("Unknown depthTexture format")}function ke(k){const L=i.get(k),te=k.isWebGLCubeRenderTarget===!0;if(k.depthTexture&&!L.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");He(L.__webglFramebuffer,k)}else if(te){L.__webglDepthbuffer=[];for(let he=0;he<6;he++)t.bindFramebuffer(36160,L.__webglFramebuffer[he]),L.__webglDepthbuffer[he]=n.createRenderbuffer(),tt(L.__webglDepthbuffer[he],k,!1)}else t.bindFramebuffer(36160,L.__webglFramebuffer),L.__webglDepthbuffer=n.createRenderbuffer(),tt(L.__webglDepthbuffer,k,!1);t.bindFramebuffer(36160,null)}function rt(k,L,te){const he=i.get(k);L!==void 0&&be(he.__webglFramebuffer,k,k.texture,36064,3553),te!==void 0&&ke(k)}function gt(k){const L=k.texture,te=i.get(k),he=i.get(L);k.addEventListener("dispose",ce),k.isWebGLMultipleRenderTargets!==!0&&(he.__webglTexture===void 0&&(he.__webglTexture=n.createTexture()),he.__version=L.version,s.memory.textures++);const me=k.isWebGLCubeRenderTarget===!0,se=k.isWebGLMultipleRenderTargets===!0,Ce=b(k)||a;if(me){te.__webglFramebuffer=[];for(let P=0;P<6;P++)te.__webglFramebuffer[P]=n.createFramebuffer()}else{if(te.__webglFramebuffer=n.createFramebuffer(),se)if(r.drawBuffers){const P=k.texture;for(let le=0,ge=P.length;le<ge;le++){const we=i.get(P[le]);we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&k.samples>0&&je(k)===!1){const P=se?L:[L];te.__webglMultisampledFramebuffer=n.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,te.__webglMultisampledFramebuffer);for(let le=0;le<P.length;le++){const ge=P[le];te.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(36161,te.__webglColorRenderbuffer[le]);const we=o.convert(ge.format,ge.encoding),_e=o.convert(ge.type),ze=T(ge.internalFormat,we,_e,ge.encoding),Me=at(k);n.renderbufferStorageMultisample(36161,Me,ze,k.width,k.height),n.framebufferRenderbuffer(36160,36064+le,36161,te.__webglColorRenderbuffer[le])}n.bindRenderbuffer(36161,null),k.depthBuffer&&(te.__webglDepthRenderbuffer=n.createRenderbuffer(),tt(te.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(36160,null)}}if(me){t.bindTexture(34067,he.__webglTexture),ne(34067,L,Ce);for(let P=0;P<6;P++)be(te.__webglFramebuffer[P],k,L,36064,34069+P);R(L,Ce)&&N(34067),t.unbindTexture()}else if(se){const P=k.texture;for(let le=0,ge=P.length;le<ge;le++){const we=P[le],_e=i.get(we);t.bindTexture(3553,_e.__webglTexture),ne(3553,we,Ce),be(te.__webglFramebuffer,k,we,36064+le,3553),R(we,Ce)&&N(3553)}t.unbindTexture()}else{let P=3553;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(a?P=k.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(P,he.__webglTexture),ne(P,L,Ce),be(te.__webglFramebuffer,k,L,36064,P),R(L,Ce)&&N(P),t.unbindTexture()}k.depthBuffer&&ke(k)}function bt(k){const L=b(k)||a,te=k.isWebGLMultipleRenderTargets===!0?k.texture:[k.texture];for(let he=0,me=te.length;he<me;he++){const se=te[he];if(R(se,L)){const Ce=k.isWebGLCubeRenderTarget?34067:3553,P=i.get(se).__webglTexture;t.bindTexture(Ce,P),N(Ce),t.unbindTexture()}}}function kt(k){if(a&&k.samples>0&&je(k)===!1){const L=k.isWebGLMultipleRenderTargets?k.texture:[k.texture],te=k.width,he=k.height;let me=16384;const se=[],Ce=k.stencilBuffer?33306:36096,P=i.get(k),le=k.isWebGLMultipleRenderTargets===!0;if(le)for(let ge=0;ge<L.length;ge++)t.bindFramebuffer(36160,P.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+ge,36161,null),t.bindFramebuffer(36160,P.__webglFramebuffer),n.framebufferTexture2D(36009,36064+ge,3553,null,0);t.bindFramebuffer(36008,P.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,P.__webglFramebuffer);for(let ge=0;ge<L.length;ge++){se.push(36064+ge),k.depthBuffer&&se.push(Ce);const we=P.__ignoreDepthValues!==void 0?P.__ignoreDepthValues:!1;if(we===!1&&(k.depthBuffer&&(me|=256),k.stencilBuffer&&(me|=1024)),le&&n.framebufferRenderbuffer(36008,36064,36161,P.__webglColorRenderbuffer[ge]),we===!0&&(n.invalidateFramebuffer(36008,[Ce]),n.invalidateFramebuffer(36009,[Ce])),le){const _e=i.get(L[ge]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,_e,0)}n.blitFramebuffer(0,0,te,he,0,0,te,he,me,9728),x&&n.invalidateFramebuffer(36008,se)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),le)for(let ge=0;ge<L.length;ge++){t.bindFramebuffer(36160,P.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+ge,36161,P.__webglColorRenderbuffer[ge]);const we=i.get(L[ge]).__webglTexture;t.bindFramebuffer(36160,P.__webglFramebuffer),n.framebufferTexture2D(36009,36064+ge,3553,we,0)}t.bindFramebuffer(36009,P.__webglMultisampledFramebuffer)}}function at(k){return Math.min(p,k.samples)}function je(k){const L=i.get(k);return a&&k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function ln(k){const L=s.render.frame;M.get(k)!==L&&(M.set(k,L),k.update())}function Xt(k,L){const te=k.encoding,he=k.format,me=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||k.format===xf||te!==Hr&&(te===St?a===!1?e.has("EXT_sRGB")===!0&&he===hi?(k.format=xf,k.minFilter=pn,k.generateMipmaps=!1):L=Lv.sRGBToLinear(L):(he!==hi||me!==Vr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",te)),L}this.allocateTextureUnit=V,this.resetTextureUnits=oe,this.setTexture2D=G,this.setTexture2DArray=Z,this.setTexture3D=ee,this.setTextureCube=pe,this.rebindTextures=rt,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=be,this.useMultisampledRTT=je}function nE(n,e,t){const i=t.isWebGL2;function r(o,s=null){let a;if(o===Vr)return 5121;if(o===$y)return 32819;if(o===Zy)return 32820;if(o===Xy)return 5120;if(o===qy)return 5122;if(o===bv)return 5123;if(o===Yy)return 5124;if(o===Lr)return 5125;if(o===Pr)return 5126;if(o===Ys)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===Ky)return 6406;if(o===hi)return 6408;if(o===Qy)return 6409;if(o===Jy)return 6410;if(o===Fr)return 6402;if(o===$o)return 34041;if(o===ex)return 6403;if(o===Tv)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(o===xf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===tx)return 36244;if(o===nx)return 33319;if(o===ix)return 33320;if(o===rx)return 36249;if(o===Iu||o===Nu||o===zu||o===Ou)if(s===St)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===Iu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Nu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===zu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Ou)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===Iu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Nu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===zu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Ou)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Zh||o===Kh||o===Qh||o===Jh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===Zh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Kh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Qh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Jh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===ox)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===ep||o===tp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===ep)return s===St?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===tp)return s===St?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===np||o===ip||o===rp||o===op||o===sp||o===ap||o===lp||o===up||o===cp||o===fp||o===dp||o===hp||o===pp||o===mp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===np)return s===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===ip)return s===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===rp)return s===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===op)return s===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===sp)return s===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===ap)return s===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===lp)return s===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===up)return s===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===cp)return s===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===fp)return s===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===dp)return s===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===hp)return s===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===pp)return s===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===mp)return s===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===gp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===gp)return s===St?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return o===Oo?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[o]!==void 0?n[o]:null}return{convert:r}}class iE extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ja extends ri{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rE={type:"move"};class hc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ja,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ja,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ja,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,o=null,s=null;const a=this._targetRay,u=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i);if(c.joints[g.jointName]===void 0){const w=new ja;w.matrixAutoUpdate=!1,w.visible=!1,c.joints[g.jointName]=w,c.add(w)}const y=c.joints[g.jointName];m!==null&&(y.matrix.fromArray(m.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.jointRadius=m.radius),y.visible=m!==null}const d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],h=d.position.distanceTo(p.position),x=.02,M=.005;c.inputState.pinching&&h>x+M?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=x-M&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rE)))}return a!==null&&(a.visible=r!==null),u!==null&&(u.visible=o!==null),c!==null&&(c.visible=s!==null),this}}class oE extends Vn{constructor(e,t,i,r,o,s,a,u,c,d){if(d=d!==void 0?d:Fr,d!==Fr&&d!==$o)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Fr&&(i=Lr),i===void 0&&d===$o&&(i=Oo),super(null,r,o,s,a,u,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:hn,this.minFilter=u!==void 0?u:hn,this.flipY=!1,this.generateMipmaps=!1}}class sE extends Yr{constructor(e,t){super();const i=this;let r=null,o=1,s=null,a="local-floor",u=null,c=null,d=null,p=null,h=null,x=null;const M=t.getContextAttributes();let g=null,m=null;const y=[],w=[],E=new In;E.layers.enable(1),E.viewport=new Nt;const b=new In;b.layers.enable(2),b.viewport=new Nt;const A=[E,b],R=new iE;R.layers.enable(1),R.layers.enable(2);let N=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let G=y[B];return G===void 0&&(G=new hc,y[B]=G),G.getTargetRaySpace()},this.getControllerGrip=function(B){let G=y[B];return G===void 0&&(G=new hc,y[B]=G),G.getGripSpace()},this.getHand=function(B){let G=y[B];return G===void 0&&(G=new hc,y[B]=G),G.getHandSpace()};function I(B){const G=w.indexOf(B.inputSource);if(G===-1)return;const Z=y[G];Z!==void 0&&Z.dispatchEvent({type:B.type,data:B.inputSource})}function H(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",Y);for(let B=0;B<y.length;B++){const G=w[B];G!==null&&(w[B]=null,y[B].disconnect(G))}N=null,T=null,e.setRenderTarget(g),h=null,p=null,d=null,r=null,m=null,V.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){o=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(B){u=B},this.getBaseLayer=function(){return p!==null?p:h},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",H),r.addEventListener("inputsourceschange",Y),M.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const G={antialias:r.renderState.layers===void 0?M.antialias:!0,alpha:M.alpha,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:o};h=new XRWebGLLayer(r,t,G),r.updateRenderState({baseLayer:h}),m=new Gr(h.framebufferWidth,h.framebufferHeight,{format:hi,type:Vr,encoding:e.outputEncoding})}else{let G=null,Z=null,ee=null;M.depth&&(ee=M.stencil?35056:33190,G=M.stencil?$o:Fr,Z=M.stencil?Oo:Lr);const pe={colorFormat:32856,depthFormat:ee,scaleFactor:o};d=new XRWebGLBinding(r,t),p=d.createProjectionLayer(pe),r.updateRenderState({layers:[p]}),m=new Gr(p.textureWidth,p.textureHeight,{format:hi,type:Vr,depthTexture:new oE(p.textureWidth,p.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:M.stencil,encoding:e.outputEncoding,samples:M.antialias?4:0});const Se=e.properties.get(m);Se.__ignoreDepthValues=p.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),u=null,s=await r.requestReferenceSpace(a),V.setContext(r),V.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function Y(B){for(let G=0;G<B.removed.length;G++){const Z=B.removed[G],ee=w.indexOf(Z);ee>=0&&(w[ee]=null,y[ee].dispatchEvent({type:"disconnected",data:Z}))}for(let G=0;G<B.added.length;G++){const Z=B.added[G];let ee=w.indexOf(Z);if(ee===-1){for(let Se=0;Se<y.length;Se++)if(Se>=w.length){w.push(Z),ee=Se;break}else if(w[Se]===null){w[Se]=Z,ee=Se;break}if(ee===-1)break}const pe=y[ee];pe&&pe.dispatchEvent({type:"connected",data:Z})}}const ce=new j,de=new j;function q(B,G,Z){ce.setFromMatrixPosition(G.matrixWorld),de.setFromMatrixPosition(Z.matrixWorld);const ee=ce.distanceTo(de),pe=G.projectionMatrix.elements,Se=Z.projectionMatrix.elements,Re=pe[14]/(pe[10]-1),ne=pe[14]/(pe[10]+1),qe=(pe[9]+1)/pe[5],Ne=(pe[9]-1)/pe[5],Ue=(pe[8]-1)/pe[0],be=(Se[8]+1)/Se[0],tt=Re*Ue,He=Re*be,ke=ee/(-Ue+be),rt=ke*-Ue;G.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(rt),B.translateZ(ke),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const gt=Re+ke,bt=ne+ke,kt=tt-rt,at=He+(ee-rt),je=qe*ne/bt*gt,ln=Ne*ne/bt*gt;B.projectionMatrix.makePerspective(kt,at,je,ln,gt,bt)}function ae(B,G){G===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(G.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;R.near=b.near=E.near=B.near,R.far=b.far=E.far=B.far,(N!==R.near||T!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),N=R.near,T=R.far);const G=B.parent,Z=R.cameras;ae(R,G);for(let pe=0;pe<Z.length;pe++)ae(Z[pe],G);R.matrixWorld.decompose(R.position,R.quaternion,R.scale),B.position.copy(R.position),B.quaternion.copy(R.quaternion),B.scale.copy(R.scale),B.matrix.copy(R.matrix),B.matrixWorld.copy(R.matrixWorld);const ee=B.children;for(let pe=0,Se=ee.length;pe<Se;pe++)ee[pe].updateMatrixWorld(!0);Z.length===2?q(R,E,b):R.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return R},this.getFoveation=function(){if(p!==null)return p.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(B){p!==null&&(p.fixedFoveation=B),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=B)};let Q=null;function oe(B,G){if(c=G.getViewerPose(u||s),x=G,c!==null){const Z=c.views;h!==null&&(e.setRenderTargetFramebuffer(m,h.framebuffer),e.setRenderTarget(m));let ee=!1;Z.length!==R.cameras.length&&(R.cameras.length=0,ee=!0);for(let pe=0;pe<Z.length;pe++){const Se=Z[pe];let Re=null;if(h!==null)Re=h.getViewport(Se);else{const qe=d.getViewSubImage(p,Se);Re=qe.viewport,pe===0&&(e.setRenderTargetTextures(m,qe.colorTexture,p.ignoreDepthValues?void 0:qe.depthStencilTexture),e.setRenderTarget(m))}let ne=A[pe];ne===void 0&&(ne=new In,ne.layers.enable(pe),ne.viewport=new Nt,A[pe]=ne),ne.matrix.fromArray(Se.transform.matrix),ne.projectionMatrix.fromArray(Se.projectionMatrix),ne.viewport.set(Re.x,Re.y,Re.width,Re.height),pe===0&&R.matrix.copy(ne.matrix),ee===!0&&R.cameras.push(ne)}}for(let Z=0;Z<y.length;Z++){const ee=w[Z],pe=y[Z];ee!==null&&pe!==void 0&&pe.update(ee,G,u||s)}Q&&Q(B,G),x=null}const V=new zv;V.setAnimationLoop(oe),this.setAnimationLoop=function(B){Q=B},this.dispose=function(){}}}function aE(n,e){function t(g,m){g.fogColor.value.copy(m.color),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,y,w,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),c(g,m)):m.isMeshStandardMaterial?(r(g,m),p(g,m),m.isMeshPhysicalMaterial&&h(g,m,E)):m.isMeshMatcapMaterial?(r(g,m),x(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),M(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&s(g,m)):m.isPointsMaterial?a(g,m,y,w):m.isSpriteMaterial?u(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===ei&&(g.bumpScale.value*=-1)),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===ei&&g.normalScale.value.negate()),m.specularMap&&(g.specularMap.value=m.specularMap),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const y=e.get(m).envMap;if(y&&(g.envMap.value=y,g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;const b=n.physicallyCorrectLights!==!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*b}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity);let w;m.map?w=m.map:m.specularMap?w=m.specularMap:m.displacementMap?w=m.displacementMap:m.normalMap?w=m.normalMap:m.bumpMap?w=m.bumpMap:m.roughnessMap?w=m.roughnessMap:m.metalnessMap?w=m.metalnessMap:m.alphaMap?w=m.alphaMap:m.emissiveMap?w=m.emissiveMap:m.clearcoatMap?w=m.clearcoatMap:m.clearcoatNormalMap?w=m.clearcoatNormalMap:m.clearcoatRoughnessMap?w=m.clearcoatRoughnessMap:m.iridescenceMap?w=m.iridescenceMap:m.iridescenceThicknessMap?w=m.iridescenceThicknessMap:m.specularIntensityMap?w=m.specularIntensityMap:m.specularColorMap?w=m.specularColorMap:m.transmissionMap?w=m.transmissionMap:m.thicknessMap?w=m.thicknessMap:m.sheenColorMap?w=m.sheenColorMap:m.sheenRoughnessMap&&(w=m.sheenRoughnessMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),g.uvTransform.value.copy(w.matrix));let E;m.aoMap?E=m.aoMap:m.lightMap&&(E=m.lightMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),g.uv2Transform.value.copy(E.matrix))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity}function s(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function a(g,m,y,w){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=w*.5,m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let E;m.map?E=m.map:m.alphaMap&&(E=m.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),g.uvTransform.value.copy(E.matrix))}function u(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let y;m.map?y=m.map:m.alphaMap&&(y=m.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),g.uvTransform.value.copy(y.matrix))}function c(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function p(g,m){g.roughness.value=m.roughness,g.metalness.value=m.metalness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function h(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),g.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===ei&&g.clearcoatNormalScale.value.negate())),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap)}function x(g,m){m.matcap&&(g.matcap.value=m.matcap)}function M(g,m){g.referencePosition.value.copy(m.referencePosition),g.nearDistance.value=m.nearDistance,g.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function lE(n,e,t,i){let r={},o={},s=[];const a=t.isWebGL2?n.getParameter(35375):0;function u(w,E){const b=E.program;i.uniformBlockBinding(w,b)}function c(w,E){let b=r[w.id];b===void 0&&(M(w),b=d(w),r[w.id]=b,w.addEventListener("dispose",m));const A=E.program;i.updateUBOMapping(w,A);const R=e.render.frame;o[w.id]!==R&&(h(w),o[w.id]=R)}function d(w){const E=p();w.__bindingPointIndex=E;const b=n.createBuffer(),A=w.__size,R=w.usage;return n.bindBuffer(35345,b),n.bufferData(35345,A,R),n.bindBuffer(35345,null),n.bindBufferBase(35345,E,b),b}function p(){for(let w=0;w<a;w++)if(s.indexOf(w)===-1)return s.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const E=r[w.id],b=w.uniforms,A=w.__cache;n.bindBuffer(35345,E);for(let R=0,N=b.length;R<N;R++){const T=b[R];if(x(T,R,A)===!0){const I=T.value,H=T.__offset;typeof I=="number"?(T.__data[0]=I,n.bufferSubData(35345,H,T.__data)):(T.value.isMatrix3?(T.__data[0]=T.value.elements[0],T.__data[1]=T.value.elements[1],T.__data[2]=T.value.elements[2],T.__data[3]=T.value.elements[0],T.__data[4]=T.value.elements[3],T.__data[5]=T.value.elements[4],T.__data[6]=T.value.elements[5],T.__data[7]=T.value.elements[0],T.__data[8]=T.value.elements[6],T.__data[9]=T.value.elements[7],T.__data[10]=T.value.elements[8],T.__data[11]=T.value.elements[0]):I.toArray(T.__data),n.bufferSubData(35345,H,T.__data))}}n.bindBuffer(35345,null)}function x(w,E,b){const A=w.value;if(b[E]===void 0)return typeof A=="number"?b[E]=A:b[E]=A.clone(),!0;if(typeof A=="number"){if(b[E]!==A)return b[E]=A,!0}else{const R=b[E];if(R.equals(A)===!1)return R.copy(A),!0}return!1}function M(w){const E=w.uniforms;let b=0;const A=16;let R=0;for(let N=0,T=E.length;N<T;N++){const I=E[N],H=g(I);if(I.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=b,N>0){R=b%A;const Y=A-R;R!==0&&Y-H.boundary<0&&(b+=A-R,I.__offset=b)}b+=H.storage}return R=b%A,R>0&&(b+=A-R),w.__size=b,w.__cache={},this}function g(w){const E=w.value,b={boundary:0,storage:0};return typeof E=="number"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(w){const E=w.target;E.removeEventListener("dispose",m);const b=s.indexOf(E.__bindingPointIndex);s.splice(b,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete o[E.id]}function y(){for(const w in r)n.deleteBuffer(r[w]);s=[],r={},o={}}return{bind:u,update:c,dispose:y}}function uE(){const n=kl("canvas");return n.style.display="block",n}function Gv(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:uE(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,o=n.antialias!==void 0?n.antialias:!1,s=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,u=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let d;t!==null?d=t.getContextAttributes().alpha:d=n.alpha!==void 0?n.alpha:!1;let p=null,h=null;const x=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Hr,this.physicallyCorrectLights=!1,this.toneMapping=ki,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const g=this;let m=!1,y=0,w=0,E=null,b=-1,A=null;const R=new Nt,N=new Nt;let T=null,I=e.width,H=e.height,Y=1,ce=null,de=null;const q=new Nt(0,0,I,H),ae=new Nt(0,0,I,H);let Q=!1;const oe=new Nv;let V=!1,B=!1,G=null;const Z=new Wt,ee=new Xe,pe=new j,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Re(){return E===null?Y:1}let ne=t;function qe(D,X){for(let K=0;K<D.length;K++){const $=D[K],ie=e.getContext($,X);if(ie!==null)return ie}return null}try{const D={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:a,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_d}`),e.addEventListener("webglcontextlost",ze,!1),e.addEventListener("webglcontextrestored",Me,!1),e.addEventListener("webglcontextcreationerror",ot,!1),ne===null){const X=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&X.shift(),ne=qe(X,D),ne===null)throw qe(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}ne.getShaderPrecisionFormat===void 0&&(ne.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let Ne,Ue,be,tt,He,ke,rt,gt,bt,kt,at,je,ln,Xt,k,L,te,he,me,se,Ce,P,le,ge;function we(){Ne=new y1(ne),Ue=new d1(ne,Ne,n),Ne.init(Ue),P=new nE(ne,Ne,Ue),be=new eE(ne,Ne,Ue),tt=new S1,He=new BM,ke=new tE(ne,Ne,be,He,Ue,P,tt),rt=new p1(g),gt=new _1(g),bt=new kx(ne,Ue),le=new c1(ne,Ne,bt,Ue),kt=new x1(ne,bt,tt,le),at=new T1(ne,kt,bt,tt),me=new b1(ne,Ue,ke),L=new h1(He),je=new UM(g,rt,gt,Ne,Ue,le,L),ln=new aE(g,He),Xt=new HM,k=new YM(Ne,Ue),he=new u1(g,rt,be,at,d,s),te=new JM(g,at,Ue),ge=new lE(ne,tt,Ue,be),se=new f1(ne,Ne,tt,Ue),Ce=new w1(ne,Ne,tt,Ue),tt.programs=je.programs,g.capabilities=Ue,g.extensions=Ne,g.properties=He,g.renderLists=Xt,g.shadowMap=te,g.state=be,g.info=tt}we();const _e=new sE(g,ne);this.xr=_e,this.getContext=function(){return ne},this.getContextAttributes=function(){return ne.getContextAttributes()},this.forceContextLoss=function(){const D=Ne.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Ne.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(D){D!==void 0&&(Y=D,this.setSize(I,H,!1))},this.getSize=function(D){return D.set(I,H)},this.setSize=function(D,X,K){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=D,H=X,e.width=Math.floor(D*Y),e.height=Math.floor(X*Y),K!==!1&&(e.style.width=D+"px",e.style.height=X+"px"),this.setViewport(0,0,D,X)},this.getDrawingBufferSize=function(D){return D.set(I*Y,H*Y).floor()},this.setDrawingBufferSize=function(D,X,K){I=D,H=X,Y=K,e.width=Math.floor(D*K),e.height=Math.floor(X*K),this.setViewport(0,0,D,X)},this.getCurrentViewport=function(D){return D.copy(R)},this.getViewport=function(D){return D.copy(q)},this.setViewport=function(D,X,K,$){D.isVector4?q.set(D.x,D.y,D.z,D.w):q.set(D,X,K,$),be.viewport(R.copy(q).multiplyScalar(Y).floor())},this.getScissor=function(D){return D.copy(ae)},this.setScissor=function(D,X,K,$){D.isVector4?ae.set(D.x,D.y,D.z,D.w):ae.set(D,X,K,$),be.scissor(N.copy(ae).multiplyScalar(Y).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(D){be.setScissorTest(Q=D)},this.setOpaqueSort=function(D){ce=D},this.setTransparentSort=function(D){de=D},this.getClearColor=function(D){return D.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(D=!0,X=!0,K=!0){let $=0;D&&($|=16384),X&&($|=256),K&&($|=1024),ne.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ze,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),Xt.dispose(),k.dispose(),He.dispose(),rt.dispose(),gt.dispose(),at.dispose(),le.dispose(),ge.dispose(),je.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",Ke),_e.removeEventListener("sessionend",_),G&&(G.dispose(),G=null),Fe.stop()};function ze(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const D=tt.autoReset,X=te.enabled,K=te.autoUpdate,$=te.needsUpdate,ie=te.type;we(),tt.autoReset=D,te.enabled=X,te.autoUpdate=K,te.needsUpdate=$,te.type=ie}function ot(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function O(D){const X=D.target;X.removeEventListener("dispose",O),ve(X)}function ve(D){J(D),He.remove(D)}function J(D){const X=He.get(D).programs;X!==void 0&&(X.forEach(function(K){je.releaseProgram(K)}),D.isShaderMaterial&&je.releaseShaderCache(D))}this.renderBufferDirect=function(D,X,K,$,ie,Oe){X===null&&(X=Se);const Be=ie.isMesh&&ie.matrixWorld.determinant()<0,U=ru(D,X,K,$,ie);be.setMaterial($,Be);let Ge=K.index;const nt=K.attributes.position;if(Ge===null){if(nt===void 0||nt.count===0)return}else if(Ge.count===0)return;let Ze=1;$.wireframe===!0&&(Ge=kt.getWireframeAttribute(K),Ze=2),le.setup(ie,$,U,K,Ge);let Qe,dt=se;Ge!==null&&(Qe=bt.get(Ge),dt=Ce,dt.setIndex(Qe));const vi=Ge!==null?Ge.count:nt.count,Vi=K.drawRange.start*Ze,Hi=K.drawRange.count*Ze,Ln=Oe!==null?Oe.start*Ze:0,et=Oe!==null?Oe.count*Ze:1/0,_i=Math.max(Vi,Ln),vt=Math.min(vi,Vi+Hi,Ln+et)-1,cn=Math.max(0,vt-_i+1);if(cn!==0){if(ie.isMesh)$.wireframe===!0?(be.setLineWidth($.wireframeLinewidth*Re()),dt.setMode(1)):dt.setMode(4);else if(ie.isLine){let xn=$.linewidth;xn===void 0&&(xn=1),be.setLineWidth(xn*Re()),ie.isLineSegments?dt.setMode(1):ie.isLineLoop?dt.setMode(2):dt.setMode(3)}else ie.isPoints?dt.setMode(0):ie.isSprite&&dt.setMode(4);if(ie.isInstancedMesh)dt.renderInstances(_i,cn,ie.count);else if(K.isInstancedBufferGeometry){const xn=Math.min(K.instanceCount,K._maxInstanceCount);dt.renderInstances(_i,cn,xn)}else dt.render(_i,cn)}},this.compile=function(D,X){h=k.get(D),h.init(),M.push(h),D.traverseVisible(function(K){K.isLight&&K.layers.test(X.layers)&&(h.pushLight(K),K.castShadow&&h.pushShadow(K))}),h.setupLights(g.physicallyCorrectLights),D.traverse(function(K){const $=K.material;if($)if(Array.isArray($))for(let ie=0;ie<$.length;ie++){const Oe=$[ie];ts(Oe,D,K)}else ts($,D,K)}),M.pop(),h=null};let Ee=null;function re(D){Ee&&Ee(D)}function Ke(){Fe.stop()}function _(){Fe.start()}const Fe=new zv;Fe.setAnimationLoop(re),typeof self<"u"&&Fe.setContext(self),this.setAnimationLoop=function(D){Ee=D,_e.setAnimationLoop(D),D===null?Fe.stop():Fe.start()},_e.addEventListener("sessionstart",Ke),_e.addEventListener("sessionend",_),this.render=function(D,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;D.autoUpdate===!0&&D.updateMatrixWorld(),X.parent===null&&X.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(X),X=_e.getCamera()),D.isScene===!0&&D.onBeforeRender(g,D,X,E),h=k.get(D,M.length),h.init(),M.push(h),Z.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),oe.setFromProjectionMatrix(Z),B=this.localClippingEnabled,V=L.init(this.clippingPlanes,B,X),p=Xt.get(D,x.length),p.init(),x.push(p),si(D,X,0,g.sortObjects),p.finish(),g.sortObjects===!0&&p.sort(ce,de),V===!0&&L.beginShadows();const K=h.state.shadowsArray;if(te.render(K,D,X),V===!0&&L.endShadows(),this.info.autoReset===!0&&this.info.reset(),he.render(p,D),h.setupLights(g.physicallyCorrectLights),X.isArrayCamera){const $=X.cameras;for(let ie=0,Oe=$.length;ie<Oe;ie++){const Be=$[ie];ft(p,D,Be,Be.viewport)}}else ft(p,D,X);E!==null&&(ke.updateMultisampleRenderTarget(E),ke.updateRenderTargetMipmap(E)),D.isScene===!0&&D.onAfterRender(g,D,X),le.resetDefaultState(),b=-1,A=null,M.pop(),M.length>0?h=M[M.length-1]:h=null,x.pop(),x.length>0?p=x[x.length-1]:p=null};function si(D,X,K,$){if(D.visible===!1)return;if(D.layers.test(X.layers)){if(D.isGroup)K=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(X);else if(D.isLight)h.pushLight(D),D.castShadow&&h.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||oe.intersectsSprite(D)){$&&pe.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Z);const Be=at.update(D),U=D.material;U.visible&&p.push(D,Be,U,K,pe.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(D.isSkinnedMesh&&D.skeleton.frame!==tt.render.frame&&(D.skeleton.update(),D.skeleton.frame=tt.render.frame),!D.frustumCulled||oe.intersectsObject(D))){$&&pe.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Z);const Be=at.update(D),U=D.material;if(Array.isArray(U)){const Ge=Be.groups;for(let nt=0,Ze=Ge.length;nt<Ze;nt++){const Qe=Ge[nt],dt=U[Qe.materialIndex];dt&&dt.visible&&p.push(D,Be,dt,K,pe.z,Qe)}}else U.visible&&p.push(D,Be,U,K,pe.z,null)}}const Oe=D.children;for(let Be=0,U=Oe.length;Be<U;Be++)si(Oe[Be],X,K,$)}function ft(D,X,K,$){const ie=D.opaque,Oe=D.transmissive,Be=D.transparent;h.setupLightsView(K),Oe.length>0&&Hn(ie,X,K),$&&be.viewport(R.copy($)),ie.length>0&&un(ie,X,K),Oe.length>0&&un(Oe,X,K),Be.length>0&&un(Be,X,K),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Hn(D,X,K){const $=Ue.isWebGL2;G===null&&(G=new Gr(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")?Ys:Vr,minFilter:Ql,samples:$&&o===!0?4:0})),g.getDrawingBufferSize(ee),$?G.setSize(ee.x,ee.y):G.setSize(wf(ee.x),wf(ee.y));const ie=g.getRenderTarget();g.setRenderTarget(G),g.clear();const Oe=g.toneMapping;g.toneMapping=ki,un(D,X,K),g.toneMapping=Oe,ke.updateMultisampleRenderTarget(G),ke.updateRenderTargetMipmap(G),g.setRenderTarget(ie)}function un(D,X,K){const $=X.isScene===!0?X.overrideMaterial:null;for(let ie=0,Oe=D.length;ie<Oe;ie++){const Be=D[ie],U=Be.object,Ge=Be.geometry,nt=$===null?Be.material:$,Ze=Be.group;U.layers.test(K.layers)&&iu(U,X,K,Ge,nt,Ze)}}function iu(D,X,K,$,ie,Oe){D.onBeforeRender(g,X,K,$,ie,Oe),D.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),ie.onBeforeRender(g,X,K,$,D,Oe),ie.transparent===!0&&ie.side===Xo?(ie.side=ei,ie.needsUpdate=!0,g.renderBufferDirect(K,X,$,ie,D,Oe),ie.side=qs,ie.needsUpdate=!0,g.renderBufferDirect(K,X,$,ie,D,Oe),ie.side=Xo):g.renderBufferDirect(K,X,$,ie,D,Oe),D.onAfterRender(g,X,K,$,ie,Oe)}function ts(D,X,K){X.isScene!==!0&&(X=Se);const $=He.get(D),ie=h.state.lights,Oe=h.state.shadowsArray,Be=ie.state.version,U=je.getParameters(D,ie.state,Oe,X,K),Ge=je.getProgramCacheKey(U);let nt=$.programs;$.environment=D.isMeshStandardMaterial?X.environment:null,$.fog=X.fog,$.envMap=(D.isMeshStandardMaterial?gt:rt).get(D.envMap||$.environment),nt===void 0&&(D.addEventListener("dispose",O),nt=new Map,$.programs=nt);let Ze=nt.get(Ge);if(Ze!==void 0){if($.currentProgram===Ze&&$.lightsStateVersion===Be)return oa(D,U),Ze}else U.uniforms=je.getUniforms(D),D.onBuild(K,U,g),D.onBeforeCompile(U,g),Ze=je.acquireProgram(U,Ge),nt.set(Ge,Ze),$.uniforms=U.uniforms;const Qe=$.uniforms;(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Qe.clippingPlanes=L.uniform),oa(D,U),$.needsLights=su(D),$.lightsStateVersion=Be,$.needsLights&&(Qe.ambientLightColor.value=ie.state.ambient,Qe.lightProbe.value=ie.state.probe,Qe.directionalLights.value=ie.state.directional,Qe.directionalLightShadows.value=ie.state.directionalShadow,Qe.spotLights.value=ie.state.spot,Qe.spotLightShadows.value=ie.state.spotShadow,Qe.rectAreaLights.value=ie.state.rectArea,Qe.ltc_1.value=ie.state.rectAreaLTC1,Qe.ltc_2.value=ie.state.rectAreaLTC2,Qe.pointLights.value=ie.state.point,Qe.pointLightShadows.value=ie.state.pointShadow,Qe.hemisphereLights.value=ie.state.hemi,Qe.directionalShadowMap.value=ie.state.directionalShadowMap,Qe.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Qe.spotShadowMap.value=ie.state.spotShadowMap,Qe.spotShadowMatrix.value=ie.state.spotShadowMatrix,Qe.pointShadowMap.value=ie.state.pointShadowMap,Qe.pointShadowMatrix.value=ie.state.pointShadowMatrix);const dt=Ze.getUniforms(),vi=ll.seqWithValue(dt.seq,Qe);return $.currentProgram=Ze,$.uniformsList=vi,Ze}function oa(D,X){const K=He.get(D);K.outputEncoding=X.outputEncoding,K.instancing=X.instancing,K.skinning=X.skinning,K.morphTargets=X.morphTargets,K.morphNormals=X.morphNormals,K.morphColors=X.morphColors,K.morphTargetsCount=X.morphTargetsCount,K.numClippingPlanes=X.numClippingPlanes,K.numIntersection=X.numClipIntersection,K.vertexAlphas=X.vertexAlphas,K.vertexTangents=X.vertexTangents,K.toneMapping=X.toneMapping}function ru(D,X,K,$,ie){X.isScene!==!0&&(X=Se),ke.resetTextureUnits();const Oe=X.fog,Be=$.isMeshStandardMaterial?X.environment:null,U=E===null?g.outputEncoding:E.isXRRenderTarget===!0?E.texture.encoding:Hr,Ge=($.isMeshStandardMaterial?gt:rt).get($.envMap||Be),nt=$.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ze=!!$.normalMap&&!!K.attributes.tangent,Qe=!!K.morphAttributes.position,dt=!!K.morphAttributes.normal,vi=!!K.morphAttributes.color,Vi=$.toneMapped?g.toneMapping:ki,Hi=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ln=Hi!==void 0?Hi.length:0,et=He.get($),_i=h.state.lights;if(V===!0&&(B===!0||D!==A)){const qt=D===A&&$.id===b;L.setState($,D,qt)}let vt=!1;$.version===et.__version?(et.needsLights&&et.lightsStateVersion!==_i.state.version||et.outputEncoding!==U||ie.isInstancedMesh&&et.instancing===!1||!ie.isInstancedMesh&&et.instancing===!0||ie.isSkinnedMesh&&et.skinning===!1||!ie.isSkinnedMesh&&et.skinning===!0||et.envMap!==Ge||$.fog===!0&&et.fog!==Oe||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==L.numPlanes||et.numIntersection!==L.numIntersection)||et.vertexAlphas!==nt||et.vertexTangents!==Ze||et.morphTargets!==Qe||et.morphNormals!==dt||et.morphColors!==vi||et.toneMapping!==Vi||Ue.isWebGL2===!0&&et.morphTargetsCount!==Ln)&&(vt=!0):(vt=!0,et.__version=$.version);let cn=et.currentProgram;vt===!0&&(cn=ts($,X,ie));let xn=!1,Le=!1,$r=!1;const Tt=cn.getUniforms(),ai=et.uniforms;if(be.useProgram(cn.program)&&(xn=!0,Le=!0,$r=!0),$.id!==b&&(b=$.id,Le=!0),xn||A!==D){if(Tt.setValue(ne,"projectionMatrix",D.projectionMatrix),Ue.logarithmicDepthBuffer&&Tt.setValue(ne,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),A!==D&&(A=D,Le=!0,$r=!0),$.isShaderMaterial||$.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshStandardMaterial||$.envMap){const qt=Tt.map.cameraPosition;qt!==void 0&&qt.setValue(ne,pe.setFromMatrixPosition(D.matrixWorld))}($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Tt.setValue(ne,"isOrthographic",D.isOrthographicCamera===!0),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial||$.isShadowMaterial||ie.isSkinnedMesh)&&Tt.setValue(ne,"viewMatrix",D.matrixWorldInverse)}if(ie.isSkinnedMesh){Tt.setOptional(ne,ie,"bindMatrix"),Tt.setOptional(ne,ie,"bindMatrixInverse");const qt=ie.skeleton;qt&&(Ue.floatVertexTextures?(qt.boneTexture===null&&qt.computeBoneTexture(),Tt.setValue(ne,"boneTexture",qt.boneTexture,ke),Tt.setValue(ne,"boneTextureSize",qt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Zr=K.morphAttributes;if((Zr.position!==void 0||Zr.normal!==void 0||Zr.color!==void 0&&Ue.isWebGL2===!0)&&me.update(ie,K,$,cn),(Le||et.receiveShadow!==ie.receiveShadow)&&(et.receiveShadow=ie.receiveShadow,Tt.setValue(ne,"receiveShadow",ie.receiveShadow)),Le&&(Tt.setValue(ne,"toneMappingExposure",g.toneMappingExposure),et.needsLights&&ou(ai,$r),Oe&&$.fog===!0&&ln.refreshFogUniforms(ai,Oe),ln.refreshMaterialUniforms(ai,$,Y,H,G),ll.upload(ne,et.uniformsList,ai,ke)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(ll.upload(ne,et.uniformsList,ai,ke),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Tt.setValue(ne,"center",ie.center),Tt.setValue(ne,"modelViewMatrix",ie.modelViewMatrix),Tt.setValue(ne,"normalMatrix",ie.normalMatrix),Tt.setValue(ne,"modelMatrix",ie.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const qt=$.uniformsGroups;for(let Kr=0,sa=qt.length;Kr<sa;Kr++)if(Ue.isWebGL2){const ns=qt[Kr];ge.update(ns,cn),ge.bind(ns,cn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return cn}function ou(D,X){D.ambientLightColor.needsUpdate=X,D.lightProbe.needsUpdate=X,D.directionalLights.needsUpdate=X,D.directionalLightShadows.needsUpdate=X,D.pointLights.needsUpdate=X,D.pointLightShadows.needsUpdate=X,D.spotLights.needsUpdate=X,D.spotLightShadows.needsUpdate=X,D.rectAreaLights.needsUpdate=X,D.hemisphereLights.needsUpdate=X}function su(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(D,X,K){He.get(D.texture).__webglTexture=X,He.get(D.depthTexture).__webglTexture=K;const $=He.get(D);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=K===void 0,$.__autoAllocateDepthBuffer||Ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(D,X){const K=He.get(D);K.__webglFramebuffer=X,K.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(D,X=0,K=0){E=D,y=X,w=K;let $=!0;if(D){const Ge=He.get(D);Ge.__useDefaultFramebuffer!==void 0?(be.bindFramebuffer(36160,null),$=!1):Ge.__webglFramebuffer===void 0?ke.setupRenderTarget(D):Ge.__hasExternalTextures&&ke.rebindTextures(D,He.get(D.texture).__webglTexture,He.get(D.depthTexture).__webglTexture)}let ie=null,Oe=!1,Be=!1;if(D){const Ge=D.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture)&&(Be=!0);const nt=He.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(ie=nt[X],Oe=!0):Ue.isWebGL2&&D.samples>0&&ke.useMultisampledRTT(D)===!1?ie=He.get(D).__webglMultisampledFramebuffer:ie=nt,R.copy(D.viewport),N.copy(D.scissor),T=D.scissorTest}else R.copy(q).multiplyScalar(Y).floor(),N.copy(ae).multiplyScalar(Y).floor(),T=Q;if(be.bindFramebuffer(36160,ie)&&Ue.drawBuffers&&$&&be.drawBuffers(D,ie),be.viewport(R),be.scissor(N),be.setScissorTest(T),Oe){const Ge=He.get(D.texture);ne.framebufferTexture2D(36160,36064,34069+X,Ge.__webglTexture,K)}else if(Be){const Ge=He.get(D.texture),nt=X||0;ne.framebufferTextureLayer(36160,36064,Ge.__webglTexture,K||0,nt)}b=-1},this.readRenderTargetPixels=function(D,X,K,$,ie,Oe,Be){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let U=He.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Be!==void 0&&(U=U[Be]),U){be.bindFramebuffer(36160,U);try{const Ge=D.texture,nt=Ge.format,Ze=Ge.type;if(nt!==hi&&P.convert(nt)!==ne.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Qe=Ze===Ys&&(Ne.has("EXT_color_buffer_half_float")||Ue.isWebGL2&&Ne.has("EXT_color_buffer_float"));if(Ze!==Vr&&P.convert(Ze)!==ne.getParameter(35738)&&!(Ze===Pr&&(Ue.isWebGL2||Ne.has("OES_texture_float")||Ne.has("WEBGL_color_buffer_float")))&&!Qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=D.width-$&&K>=0&&K<=D.height-ie&&ne.readPixels(X,K,$,ie,P.convert(nt),P.convert(Ze),Oe)}finally{const Ge=E!==null?He.get(E).__webglFramebuffer:null;be.bindFramebuffer(36160,Ge)}}},this.copyFramebufferToTexture=function(D,X,K=0){const $=Math.pow(2,-K),ie=Math.floor(X.image.width*$),Oe=Math.floor(X.image.height*$);ke.setTexture2D(X,0),ne.copyTexSubImage2D(3553,K,0,0,D.x,D.y,ie,Oe),be.unbindTexture()},this.copyTextureToTexture=function(D,X,K,$=0){const ie=X.image.width,Oe=X.image.height,Be=P.convert(K.format),U=P.convert(K.type);ke.setTexture2D(K,0),ne.pixelStorei(37440,K.flipY),ne.pixelStorei(37441,K.premultiplyAlpha),ne.pixelStorei(3317,K.unpackAlignment),X.isDataTexture?ne.texSubImage2D(3553,$,D.x,D.y,ie,Oe,Be,U,X.image.data):X.isCompressedTexture?ne.compressedTexSubImage2D(3553,$,D.x,D.y,X.mipmaps[0].width,X.mipmaps[0].height,Be,X.mipmaps[0].data):ne.texSubImage2D(3553,$,D.x,D.y,Be,U,X.image),$===0&&K.generateMipmaps&&ne.generateMipmap(3553),be.unbindTexture()},this.copyTextureToTexture3D=function(D,X,K,$,ie=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Oe=D.max.x-D.min.x+1,Be=D.max.y-D.min.y+1,U=D.max.z-D.min.z+1,Ge=P.convert($.format),nt=P.convert($.type);let Ze;if($.isData3DTexture)ke.setTexture3D($,0),Ze=32879;else if($.isDataArrayTexture)ke.setTexture2DArray($,0),Ze=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}ne.pixelStorei(37440,$.flipY),ne.pixelStorei(37441,$.premultiplyAlpha),ne.pixelStorei(3317,$.unpackAlignment);const Qe=ne.getParameter(3314),dt=ne.getParameter(32878),vi=ne.getParameter(3316),Vi=ne.getParameter(3315),Hi=ne.getParameter(32877),Ln=K.isCompressedTexture?K.mipmaps[0]:K.image;ne.pixelStorei(3314,Ln.width),ne.pixelStorei(32878,Ln.height),ne.pixelStorei(3316,D.min.x),ne.pixelStorei(3315,D.min.y),ne.pixelStorei(32877,D.min.z),K.isDataTexture||K.isData3DTexture?ne.texSubImage3D(Ze,ie,X.x,X.y,X.z,Oe,Be,U,Ge,nt,Ln.data):K.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),ne.compressedTexSubImage3D(Ze,ie,X.x,X.y,X.z,Oe,Be,U,Ge,Ln.data)):ne.texSubImage3D(Ze,ie,X.x,X.y,X.z,Oe,Be,U,Ge,nt,Ln),ne.pixelStorei(3314,Qe),ne.pixelStorei(32878,dt),ne.pixelStorei(3316,vi),ne.pixelStorei(3315,Vi),ne.pixelStorei(32877,Hi),ie===0&&$.generateMipmaps&&ne.generateMipmap(Ze),be.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?ke.setTextureCube(D,0):D.isData3DTexture?ke.setTexture3D(D,0):D.isDataArrayTexture?ke.setTexture2DArray(D,0):ke.setTexture2D(D,0),be.unbindTexture()},this.resetState=function(){y=0,w=0,E=null,be.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class cE extends Gv{}cE.prototype.isWebGL1Renderer=!0;class fE extends ri{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class dE extends Vn{constructor(e,t,i,r,o,s,a,u,c){super(e,t,i,r,o,s,a,u,c),this.isVideoTexture=!0,this.minFilter=s!==void 0?s:pn,this.magFilter=o!==void 0?o:pn,this.generateMipmaps=!1;const d=this;function p(){d.needsUpdate=!0,e.requestVideoFrameCallback(p)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(p)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class Md extends Ui{constructor(e=.5,t=1,i=8,r=1,o=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:o,thetaLength:s},i=Math.max(3,i),r=Math.max(1,r);const a=[],u=[],c=[],d=[];let p=e;const h=(t-e)/r,x=new j,M=new Xe;for(let g=0;g<=r;g++){for(let m=0;m<=i;m++){const y=o+m/i*s;x.x=p*Math.cos(y),x.y=p*Math.sin(y),u.push(x.x,x.y,x.z),c.push(0,0,1),M.x=(x.x/t+1)/2,M.y=(x.y/t+1)/2,d.push(M.x,M.y)}p+=h}for(let g=0;g<r;g++){const m=g*(i+1);for(let y=0;y<i;y++){const w=y+m,E=w,b=w+i+1,A=w+i+2,R=w+1;a.push(E,b,R),a.push(b,A,R)}}this.setIndex(a),this.setAttribute("position",new ni(u,3)),this.setAttribute("normal",new ni(c,3)),this.setAttribute("uv",new ni(d,2))}static fromJSON(e){return new Md(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class em{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(mn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_d}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_d);const tm={type:"change"},pc={type:"start"},nm={type:"end"};class hE extends Yr{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Jr.ROTATE,MIDDLE:Jr.DOLLY,RIGHT:Jr.PAN},this.touches={ONE:eo.ROTATE,TWO:eo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",Xt),this._domElementKeyEvents=P},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(tm),i.update(),o=r.NONE},this.update=function(){const P=new j,le=new Wr().setFromUnitVectors(e.up,new j(0,1,0)),ge=le.clone().invert(),we=new j,_e=new Wr,ze=2*Math.PI;return function(){const ot=i.object.position;P.copy(ot).sub(i.target),P.applyQuaternion(le),a.setFromVector3(P),i.autoRotate&&o===r.NONE&&I(N()),i.enableDamping?(a.theta+=u.theta*i.dampingFactor,a.phi+=u.phi*i.dampingFactor):(a.theta+=u.theta,a.phi+=u.phi);let O=i.minAzimuthAngle,ve=i.maxAzimuthAngle;return isFinite(O)&&isFinite(ve)&&(O<-Math.PI?O+=ze:O>Math.PI&&(O-=ze),ve<-Math.PI?ve+=ze:ve>Math.PI&&(ve-=ze),O<=ve?a.theta=Math.max(O,Math.min(ve,a.theta)):a.theta=a.theta>(O+ve)/2?Math.max(O,a.theta):Math.min(ve,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(d,i.dampingFactor):i.target.add(d),P.setFromSpherical(a),P.applyQuaternion(ge),ot.copy(i.target).add(P),i.object.lookAt(i.target),i.enableDamping===!0?(u.theta*=1-i.dampingFactor,u.phi*=1-i.dampingFactor,d.multiplyScalar(1-i.dampingFactor)):(u.set(0,0,0),d.set(0,0,0)),c=1,p||we.distanceToSquared(i.object.position)>s||8*(1-_e.dot(i.object.quaternion))>s?(i.dispatchEvent(tm),we.copy(i.object.position),_e.copy(i.object.quaternion),p=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",te),i.domElement.removeEventListener("pointerdown",rt),i.domElement.removeEventListener("pointercancel",kt),i.domElement.removeEventListener("wheel",ln),i.domElement.removeEventListener("pointermove",gt),i.domElement.removeEventListener("pointerup",bt),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",Xt)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const s=1e-6,a=new em,u=new em;let c=1;const d=new j;let p=!1;const h=new Xe,x=new Xe,M=new Xe,g=new Xe,m=new Xe,y=new Xe,w=new Xe,E=new Xe,b=new Xe,A=[],R={};function N(){return 2*Math.PI/60/60*i.autoRotateSpeed}function T(){return Math.pow(.95,i.zoomSpeed)}function I(P){u.theta-=P}function H(P){u.phi-=P}const Y=function(){const P=new j;return function(ge,we){P.setFromMatrixColumn(we,0),P.multiplyScalar(-ge),d.add(P)}}(),ce=function(){const P=new j;return function(ge,we){i.screenSpacePanning===!0?P.setFromMatrixColumn(we,1):(P.setFromMatrixColumn(we,0),P.crossVectors(i.object.up,P)),P.multiplyScalar(ge),d.add(P)}}(),de=function(){const P=new j;return function(ge,we){const _e=i.domElement;if(i.object.isPerspectiveCamera){const ze=i.object.position;P.copy(ze).sub(i.target);let Me=P.length();Me*=Math.tan(i.object.fov/2*Math.PI/180),Y(2*ge*Me/_e.clientHeight,i.object.matrix),ce(2*we*Me/_e.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Y(ge*(i.object.right-i.object.left)/i.object.zoom/_e.clientWidth,i.object.matrix),ce(we*(i.object.top-i.object.bottom)/i.object.zoom/_e.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function q(P){i.object.isPerspectiveCamera?c/=P:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*P)),i.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ae(P){i.object.isPerspectiveCamera?c*=P:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/P)),i.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Q(P){h.set(P.clientX,P.clientY)}function oe(P){w.set(P.clientX,P.clientY)}function V(P){g.set(P.clientX,P.clientY)}function B(P){x.set(P.clientX,P.clientY),M.subVectors(x,h).multiplyScalar(i.rotateSpeed);const le=i.domElement;I(2*Math.PI*M.x/le.clientHeight),H(2*Math.PI*M.y/le.clientHeight),h.copy(x),i.update()}function G(P){E.set(P.clientX,P.clientY),b.subVectors(E,w),b.y>0?q(T()):b.y<0&&ae(T()),w.copy(E),i.update()}function Z(P){m.set(P.clientX,P.clientY),y.subVectors(m,g).multiplyScalar(i.panSpeed),de(y.x,y.y),g.copy(m),i.update()}function ee(P){P.deltaY<0?ae(T()):P.deltaY>0&&q(T()),i.update()}function pe(P){let le=!1;switch(P.code){case i.keys.UP:de(0,i.keyPanSpeed),le=!0;break;case i.keys.BOTTOM:de(0,-i.keyPanSpeed),le=!0;break;case i.keys.LEFT:de(i.keyPanSpeed,0),le=!0;break;case i.keys.RIGHT:de(-i.keyPanSpeed,0),le=!0;break}le&&(P.preventDefault(),i.update())}function Se(){if(A.length===1)h.set(A[0].pageX,A[0].pageY);else{const P=.5*(A[0].pageX+A[1].pageX),le=.5*(A[0].pageY+A[1].pageY);h.set(P,le)}}function Re(){if(A.length===1)g.set(A[0].pageX,A[0].pageY);else{const P=.5*(A[0].pageX+A[1].pageX),le=.5*(A[0].pageY+A[1].pageY);g.set(P,le)}}function ne(){const P=A[0].pageX-A[1].pageX,le=A[0].pageY-A[1].pageY,ge=Math.sqrt(P*P+le*le);w.set(0,ge)}function qe(){i.enableZoom&&ne(),i.enablePan&&Re()}function Ne(){i.enableZoom&&ne(),i.enableRotate&&Se()}function Ue(P){if(A.length==1)x.set(P.pageX,P.pageY);else{const ge=Ce(P),we=.5*(P.pageX+ge.x),_e=.5*(P.pageY+ge.y);x.set(we,_e)}M.subVectors(x,h).multiplyScalar(i.rotateSpeed);const le=i.domElement;I(2*Math.PI*M.x/le.clientHeight),H(2*Math.PI*M.y/le.clientHeight),h.copy(x)}function be(P){if(A.length===1)m.set(P.pageX,P.pageY);else{const le=Ce(P),ge=.5*(P.pageX+le.x),we=.5*(P.pageY+le.y);m.set(ge,we)}y.subVectors(m,g).multiplyScalar(i.panSpeed),de(y.x,y.y),g.copy(m)}function tt(P){const le=Ce(P),ge=P.pageX-le.x,we=P.pageY-le.y,_e=Math.sqrt(ge*ge+we*we);E.set(0,_e),b.set(0,Math.pow(E.y/w.y,i.zoomSpeed)),q(b.y),w.copy(E)}function He(P){i.enableZoom&&tt(P),i.enablePan&&be(P)}function ke(P){i.enableZoom&&tt(P),i.enableRotate&&Ue(P)}function rt(P){i.enabled!==!1&&(A.length===0&&(i.domElement.setPointerCapture(P.pointerId),i.domElement.addEventListener("pointermove",gt),i.domElement.addEventListener("pointerup",bt)),he(P),P.pointerType==="touch"?k(P):at(P))}function gt(P){i.enabled!==!1&&(P.pointerType==="touch"?L(P):je(P))}function bt(P){me(P),A.length===0&&(i.domElement.releasePointerCapture(P.pointerId),i.domElement.removeEventListener("pointermove",gt),i.domElement.removeEventListener("pointerup",bt)),i.dispatchEvent(nm),o=r.NONE}function kt(P){me(P)}function at(P){let le;switch(P.button){case 0:le=i.mouseButtons.LEFT;break;case 1:le=i.mouseButtons.MIDDLE;break;case 2:le=i.mouseButtons.RIGHT;break;default:le=-1}switch(le){case Jr.DOLLY:if(i.enableZoom===!1)return;oe(P),o=r.DOLLY;break;case Jr.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enablePan===!1)return;V(P),o=r.PAN}else{if(i.enableRotate===!1)return;Q(P),o=r.ROTATE}break;case Jr.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enableRotate===!1)return;Q(P),o=r.ROTATE}else{if(i.enablePan===!1)return;V(P),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(pc)}function je(P){switch(o){case r.ROTATE:if(i.enableRotate===!1)return;B(P);break;case r.DOLLY:if(i.enableZoom===!1)return;G(P);break;case r.PAN:if(i.enablePan===!1)return;Z(P);break}}function ln(P){i.enabled===!1||i.enableZoom===!1||o!==r.NONE||(P.preventDefault(),i.dispatchEvent(pc),ee(P),i.dispatchEvent(nm))}function Xt(P){i.enabled===!1||i.enablePan===!1||pe(P)}function k(P){switch(se(P),A.length){case 1:switch(i.touches.ONE){case eo.ROTATE:if(i.enableRotate===!1)return;Se(),o=r.TOUCH_ROTATE;break;case eo.PAN:if(i.enablePan===!1)return;Re(),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(i.touches.TWO){case eo.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;qe(),o=r.TOUCH_DOLLY_PAN;break;case eo.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ne(),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(pc)}function L(P){switch(se(P),o){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ue(P),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;be(P),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;He(P),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ke(P),i.update();break;default:o=r.NONE}}function te(P){i.enabled!==!1&&P.preventDefault()}function he(P){A.push(P)}function me(P){delete R[P.pointerId];for(let le=0;le<A.length;le++)if(A[le].pointerId==P.pointerId){A.splice(le,1);return}}function se(P){let le=R[P.pointerId];le===void 0&&(le=new Xe,R[P.pointerId]=le),le.set(P.pageX,P.pageY)}function Ce(P){const le=P.pointerId===A[0].pointerId?A[1]:A[0];return R[le.pointerId]}i.domElement.addEventListener("contextmenu",te),i.domElement.addEventListener("pointerdown",rt),i.domElement.addEventListener("pointercancel",kt),i.domElement.addEventListener("wheel",ln,{passive:!1}),this.update()}}var Ls=function(){var n=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(d){d.preventDefault(),i(++n%e.children.length)},!1);function t(d){return e.appendChild(d.dom),d}function i(d){for(var p=0;p<e.children.length;p++)e.children[p].style.display=p===d?"block":"none";n=d}var r=(performance||Date).now(),o=r,s=0,a=t(new Ls.Panel("FPS","#0ff","#002")),u=t(new Ls.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new Ls.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:e,addPanel:t,showPanel:i,begin:function(){r=(performance||Date).now()},end:function(){s++;var d=(performance||Date).now();if(u.update(d-r,200),d>=o+1e3&&(a.update(s*1e3/(d-o),100),o=d,s=0,c)){var p=performance.memory;c.update(p.usedJSHeapSize/1048576,p.jsHeapSizeLimit/1048576)}return d},update:function(){r=this.end()},domElement:e,setMode:i}};Ls.Panel=function(n,e,t){var i=1/0,r=0,o=Math.round,s=o(window.devicePixelRatio||1),a=80*s,u=48*s,c=3*s,d=2*s,p=3*s,h=15*s,x=74*s,M=30*s,g=document.createElement("canvas");g.width=a,g.height=u,g.style.cssText="width:80px;height:48px";var m=g.getContext("2d");return m.font="bold "+9*s+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=t,m.fillRect(0,0,a,u),m.fillStyle=e,m.fillText(n,c,d),m.fillRect(p,h,x,M),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(p,h,x,M),{dom:g,update:function(y,w){i=Math.min(i,y),r=Math.max(r,y),m.fillStyle=t,m.globalAlpha=1,m.fillRect(0,0,a,h),m.fillStyle=e,m.fillText(o(y)+" "+n+" ("+o(i)+"-"+o(r)+")",c,d),m.drawImage(g,p+s,h,x-s,M,p,h,x-s,M),m.fillRect(p+x-s,h,s,M),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(p+x-s,h,s,o((1-y/w)*M))}}};var pE=(()=>{var n=import.meta.url;return function(t){t=t||{};var t=typeof t<"u"?t:{},i,r;t.ready=new Promise(function(l,f){i=l,r=f});var o=Object.assign({},t),s=(l,f)=>{throw f},a=typeof window=="object",u=typeof importScripts=="function",c=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string",d="";function p(l){return t.locateFile?t.locateFile(l,d):d+l}var h,x,M;function g(l){if(l instanceof P)return;b("exiting due to exception: "+l)}var m,y,w;c?(u?d=require("path").dirname(d)+"/":d=__dirname+"/",w=()=>{y||(m=require("fs"),y=require("path"))},h=function(f,v){return w(),f=y.normalize(f),m.readFileSync(f,v?void 0:"utf8")},M=l=>{var f=h(l,!0);return f.buffer||(f=new Uint8Array(f)),f},x=(l,f,v)=>{w(),l=y.normalize(l),m.readFile(l,function(S,C){S?v(S):f(C.buffer)})},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(l){if(!(l instanceof P))throw l}),process.on("unhandledRejection",function(l){throw l}),s=(l,f)=>{if(qe())throw process.exitCode=l,f;g(f),process.exit(l)},t.inspect=function(){return"[Emscripten Module object]"}):(a||u)&&(u?d=self.location.href:typeof document<"u"&&document.currentScript&&(d=document.currentScript.src),n&&(d=n),d.indexOf("blob:")!==0?d=d.substr(0,d.replace(/[?#].*/,"").lastIndexOf("/")+1):d="",h=l=>{var f=new XMLHttpRequest;return f.open("GET",l,!1),f.send(null),f.responseText},u&&(M=l=>{var f=new XMLHttpRequest;return f.open("GET",l,!1),f.responseType="arraybuffer",f.send(null),new Uint8Array(f.response)}),x=(l,f,v)=>{var S=new XMLHttpRequest;S.open("GET",l,!0),S.responseType="arraybuffer",S.onload=()=>{if(S.status==200||S.status==0&&S.response){f(S.response);return}v()},S.onerror=v,S.send(null)});var E=t.print||console.log.bind(console),b=t.printErr||console.warn.bind(console);Object.assign(t,o),o=null,t.arguments&&t.arguments,t.thisProgram&&t.thisProgram,t.quit&&(s=t.quit);var A;t.wasmBinary&&(A=t.wasmBinary);var R=t.noExitRuntime||!0;typeof WebAssembly!="object"&&je("no native wasm support detected");var N,T=!1,I;function H(l,f){l||je(f)}var Y=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function ce(l,f,v){for(var S=f+v,C=f;l[C]&&!(C>=S);)++C;if(C-f>16&&l.buffer&&Y)return Y.decode(l.subarray(f,C));for(var F="";f<C;){var z=l[f++];if(!(z&128)){F+=String.fromCharCode(z);continue}var W=l[f++]&63;if((z&224)==192){F+=String.fromCharCode((z&31)<<6|W);continue}var ue=l[f++]&63;if((z&240)==224?z=(z&15)<<12|W<<6|ue:z=(z&7)<<18|W<<12|ue<<6|l[f++]&63,z<65536)F+=String.fromCharCode(z);else{var xe=z-65536;F+=String.fromCharCode(55296|xe>>10,56320|xe&1023)}}return F}function de(l,f){return l?ce(B,l,f):""}function q(l,f,v,S){if(!(S>0))return 0;for(var C=v,F=v+S-1,z=0;z<l.length;++z){var W=l.charCodeAt(z);if(W>=55296&&W<=57343){var ue=l.charCodeAt(++z);W=65536+((W&1023)<<10)|ue&1023}if(W<=127){if(v>=F)break;f[v++]=W}else if(W<=2047){if(v+1>=F)break;f[v++]=192|W>>6,f[v++]=128|W&63}else if(W<=65535){if(v+2>=F)break;f[v++]=224|W>>12,f[v++]=128|W>>6&63,f[v++]=128|W&63}else{if(v+3>=F)break;f[v++]=240|W>>18,f[v++]=128|W>>12&63,f[v++]=128|W>>6&63,f[v++]=128|W&63}}return f[v]=0,v-C}function ae(l,f,v){return q(l,B,f,v)}function Q(l){for(var f=0,v=0;v<l.length;++v){var S=l.charCodeAt(v);S<=127?f++:S<=2047?f+=2:S>=55296&&S<=57343?(f+=4,++v):f+=3}return f}var oe,V,B,G,Z,ee;function pe(l){oe=l,t.HEAP8=V=new Int8Array(l),t.HEAP16=G=new Int16Array(l),t.HEAP32=Z=new Int32Array(l),t.HEAPU8=B=new Uint8Array(l),t.HEAPU16=new Uint16Array(l),t.HEAPU32=ee=new Uint32Array(l),t.HEAPF32=new Float32Array(l),t.HEAPF64=new Float64Array(l)}t.INITIAL_MEMORY;var Se=[],Re=[],ne=[];function qe(){return R}function Ne(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)tt(t.preRun.shift());le(Se)}function Ue(){!t.noFSInit&&!_.init.initialized&&_.init(),_.ignorePermissions=!1,le(Re)}function be(){if(t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)ke(t.postRun.shift());le(ne)}function tt(l){Se.unshift(l)}function He(l){Re.unshift(l)}function ke(l){ne.unshift(l)}var rt=0,gt=null;function bt(l){return l}function kt(l){rt++,t.monitorRunDependencies&&t.monitorRunDependencies(rt)}function at(l){if(rt--,t.monitorRunDependencies&&t.monitorRunDependencies(rt),rt==0&&gt){var f=gt;gt=null,f()}}function je(l){t.onAbort&&t.onAbort(l),l="Aborted("+l+")",b(l),T=!0,I=1,l+=". Build with -sASSERTIONS for more info.";var f=new WebAssembly.RuntimeError(l);throw r(f),f}var ln="data:application/octet-stream;base64,";function Xt(l){return l.startsWith(ln)}function k(l){return l.startsWith("file://")}var L;t.locateFile?(L="vol_wasm.wasm",Xt(L)||(L=p(L))):L=new URL("/voljs-viewer/assets/vol_wasm.c50993c7.wasm",self.location).toString();function te(l){try{if(l==L&&A)return new Uint8Array(A);if(M)return M(l);throw"both async and sync fetching of the wasm failed"}catch(f){je(f)}}function he(){if(!A&&(a||u)){if(typeof fetch=="function"&&!k(L))return fetch(L,{credentials:"same-origin"}).then(function(l){if(!l.ok)throw"failed to load wasm binary file at '"+L+"'";return l.arrayBuffer()}).catch(function(){return te(L)});if(x)return new Promise(function(l,f){x(L,function(v){l(new Uint8Array(v))},f)})}return Promise.resolve().then(function(){return te(L)})}function me(){var l={env:Zr,wasi_snapshot_preview1:Zr};function f(z,W){var ue=z.exports;ue=Le.instrumentWasmExports(ue),t.asm=ue,N=t.asm.memory,pe(N.buffer),t.asm.__indirect_function_table,He(t.asm.__wasm_call_ctors),at()}kt();function v(z){f(z.instance)}function S(z){return he().then(function(W){return WebAssembly.instantiate(W,l)}).then(function(W){return W}).then(z,function(W){b("failed to asynchronously prepare wasm: "+W),je(W)})}function C(){return!A&&typeof WebAssembly.instantiateStreaming=="function"&&!Xt(L)&&!k(L)&&!c&&typeof fetch=="function"?fetch(L,{credentials:"same-origin"}).then(function(z){var W=WebAssembly.instantiateStreaming(z,l);return W.then(v,function(ue){return b("wasm streaming compile failed: "+ue),b("falling back to ArrayBuffer instantiation"),S(v)})}):S(v)}if(t.instantiateWasm)try{var F=t.instantiateWasm(l,f);return F=Le.instrumentWasmExports(F),F}catch(z){return b("Module.instantiateWasm callback failed with error: "+z),!1}return C().catch(r),{}}var se,Ce;function P(l){this.name="ExitStatus",this.message="Program terminated with exit("+l+")",this.status=l}function le(l){for(;l.length>0;)l.shift()(t)}function ge(l){if(l instanceof P||l=="unwind")return I;s(1,l)}function we(l,f){V.set(l,f)}function _e(l,f,v,S){je("Assertion failed: "+de(l)+", at: "+[f?de(f):"unknown filename",v,S?de(S):"unknown function"])}function ze(l){return Z[sa()>>2]=l,l}var Me={isAbs:l=>l.charAt(0)==="/",splitPath:l=>{var f=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return f.exec(l).slice(1)},normalizeArray:(l,f)=>{for(var v=0,S=l.length-1;S>=0;S--){var C=l[S];C==="."?l.splice(S,1):C===".."?(l.splice(S,1),v++):v&&(l.splice(S,1),v--)}if(f)for(;v;v--)l.unshift("..");return l},normalize:l=>{var f=Me.isAbs(l),v=l.substr(-1)==="/";return l=Me.normalizeArray(l.split("/").filter(S=>!!S),!f).join("/"),!l&&!f&&(l="."),l&&v&&(l+="/"),(f?"/":"")+l},dirname:l=>{var f=Me.splitPath(l),v=f[0],S=f[1];return!v&&!S?".":(S&&(S=S.substr(0,S.length-1)),v+S)},basename:l=>{if(l==="/")return"/";l=Me.normalize(l),l=l.replace(/\/$/,"");var f=l.lastIndexOf("/");return f===-1?l:l.substr(f+1)},join:function(){var l=Array.prototype.slice.call(arguments,0);return Me.normalize(l.join("/"))},join2:(l,f)=>Me.normalize(l+"/"+f)};function ot(){if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function"){var l=new Uint8Array(1);return()=>(crypto.getRandomValues(l),l[0])}else if(c)try{var f=require("crypto");return()=>f.randomBytes(1)[0]}catch{}return()=>je("randomDevice")}var O={resolve:function(){for(var l="",f=!1,v=arguments.length-1;v>=-1&&!f;v--){var S=v>=0?arguments[v]:_.cwd();if(typeof S!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!S)return"";l=S+"/"+l,f=Me.isAbs(S)}return l=Me.normalizeArray(l.split("/").filter(C=>!!C),!f).join("/"),(f?"/":"")+l||"."},relative:(l,f)=>{l=O.resolve(l).substr(1),f=O.resolve(f).substr(1);function v(xe){for(var De=0;De<xe.length&&xe[De]==="";De++);for(var Ie=xe.length-1;Ie>=0&&xe[Ie]==="";Ie--);return De>Ie?[]:xe.slice(De,Ie-De+1)}for(var S=v(l.split("/")),C=v(f.split("/")),F=Math.min(S.length,C.length),z=F,W=0;W<F;W++)if(S[W]!==C[W]){z=W;break}for(var ue=[],W=z;W<S.length;W++)ue.push("..");return ue=ue.concat(C.slice(z)),ue.join("/")}};function ve(l,f,v){var S=v>0?v:Q(l)+1,C=new Array(S),F=q(l,C,0,C.length);return f&&(C.length=F),C}var J={ttys:[],init:function(){},shutdown:function(){},register:function(l,f){J.ttys[l]={input:[],output:[],ops:f},_.registerDevice(l,J.stream_ops)},stream_ops:{open:function(l){var f=J.ttys[l.node.rdev];if(!f)throw new _.ErrnoError(43);l.tty=f,l.seekable=!1},close:function(l){l.tty.ops.fsync(l.tty)},fsync:function(l){l.tty.ops.fsync(l.tty)},read:function(l,f,v,S,C){if(!l.tty||!l.tty.ops.get_char)throw new _.ErrnoError(60);for(var F=0,z=0;z<S;z++){var W;try{W=l.tty.ops.get_char(l.tty)}catch{throw new _.ErrnoError(29)}if(W===void 0&&F===0)throw new _.ErrnoError(6);if(W==null)break;F++,f[v+z]=W}return F&&(l.node.timestamp=Date.now()),F},write:function(l,f,v,S,C){if(!l.tty||!l.tty.ops.put_char)throw new _.ErrnoError(60);try{for(var F=0;F<S;F++)l.tty.ops.put_char(l.tty,f[v+F])}catch{throw new _.ErrnoError(29)}return S&&(l.node.timestamp=Date.now()),F}},default_tty_ops:{get_char:function(l){if(!l.input.length){var f=null;if(c){var v=256,S=Buffer.alloc(v),C=0;try{C=m.readSync(process.stdin.fd,S,0,v,-1)}catch(F){if(F.toString().includes("EOF"))C=0;else throw F}C>0?f=S.slice(0,C).toString("utf-8"):f=null}else typeof window<"u"&&typeof window.prompt=="function"?(f=window.prompt("Input: "),f!==null&&(f+=`
`)):typeof readline=="function"&&(f=readline(),f!==null&&(f+=`
`));if(!f)return null;l.input=ve(f,!0)}return l.input.shift()},put_char:function(l,f){f===null||f===10?(E(ce(l.output,0)),l.output=[]):f!=0&&l.output.push(f)},fsync:function(l){l.output&&l.output.length>0&&(E(ce(l.output,0)),l.output=[])}},default_tty1_ops:{put_char:function(l,f){f===null||f===10?(b(ce(l.output,0)),l.output=[]):f!=0&&l.output.push(f)},fsync:function(l){l.output&&l.output.length>0&&(b(ce(l.output,0)),l.output=[])}}};function Ee(l){je()}var re={ops_table:null,mount:function(l){return re.createNode(null,"/",16895,0)},createNode:function(l,f,v,S){if(_.isBlkdev(v)||_.isFIFO(v))throw new _.ErrnoError(63);re.ops_table||(re.ops_table={dir:{node:{getattr:re.node_ops.getattr,setattr:re.node_ops.setattr,lookup:re.node_ops.lookup,mknod:re.node_ops.mknod,rename:re.node_ops.rename,unlink:re.node_ops.unlink,rmdir:re.node_ops.rmdir,readdir:re.node_ops.readdir,symlink:re.node_ops.symlink},stream:{llseek:re.stream_ops.llseek}},file:{node:{getattr:re.node_ops.getattr,setattr:re.node_ops.setattr},stream:{llseek:re.stream_ops.llseek,read:re.stream_ops.read,write:re.stream_ops.write,allocate:re.stream_ops.allocate,mmap:re.stream_ops.mmap,msync:re.stream_ops.msync}},link:{node:{getattr:re.node_ops.getattr,setattr:re.node_ops.setattr,readlink:re.node_ops.readlink},stream:{}},chrdev:{node:{getattr:re.node_ops.getattr,setattr:re.node_ops.setattr},stream:_.chrdev_stream_ops}});var C=_.createNode(l,f,v,S);return _.isDir(C.mode)?(C.node_ops=re.ops_table.dir.node,C.stream_ops=re.ops_table.dir.stream,C.contents={}):_.isFile(C.mode)?(C.node_ops=re.ops_table.file.node,C.stream_ops=re.ops_table.file.stream,C.usedBytes=0,C.contents=null):_.isLink(C.mode)?(C.node_ops=re.ops_table.link.node,C.stream_ops=re.ops_table.link.stream):_.isChrdev(C.mode)&&(C.node_ops=re.ops_table.chrdev.node,C.stream_ops=re.ops_table.chrdev.stream),C.timestamp=Date.now(),l&&(l.contents[f]=C,l.timestamp=C.timestamp),C},getFileDataAsTypedArray:function(l){return l.contents?l.contents.subarray?l.contents.subarray(0,l.usedBytes):new Uint8Array(l.contents):new Uint8Array(0)},expandFileStorage:function(l,f){var v=l.contents?l.contents.length:0;if(!(v>=f)){var S=1024*1024;f=Math.max(f,v*(v<S?2:1.125)>>>0),v!=0&&(f=Math.max(f,256));var C=l.contents;l.contents=new Uint8Array(f),l.usedBytes>0&&l.contents.set(C.subarray(0,l.usedBytes),0)}},resizeFileStorage:function(l,f){if(l.usedBytes!=f)if(f==0)l.contents=null,l.usedBytes=0;else{var v=l.contents;l.contents=new Uint8Array(f),v&&l.contents.set(v.subarray(0,Math.min(f,l.usedBytes))),l.usedBytes=f}},node_ops:{getattr:function(l){var f={};return f.dev=_.isChrdev(l.mode)?l.id:1,f.ino=l.id,f.mode=l.mode,f.nlink=1,f.uid=0,f.gid=0,f.rdev=l.rdev,_.isDir(l.mode)?f.size=4096:_.isFile(l.mode)?f.size=l.usedBytes:_.isLink(l.mode)?f.size=l.link.length:f.size=0,f.atime=new Date(l.timestamp),f.mtime=new Date(l.timestamp),f.ctime=new Date(l.timestamp),f.blksize=4096,f.blocks=Math.ceil(f.size/f.blksize),f},setattr:function(l,f){f.mode!==void 0&&(l.mode=f.mode),f.timestamp!==void 0&&(l.timestamp=f.timestamp),f.size!==void 0&&re.resizeFileStorage(l,f.size)},lookup:function(l,f){throw _.genericErrors[44]},mknod:function(l,f,v,S){return re.createNode(l,f,v,S)},rename:function(l,f,v){if(_.isDir(l.mode)){var S;try{S=_.lookupNode(f,v)}catch{}if(S)for(var C in S.contents)throw new _.ErrnoError(55)}delete l.parent.contents[l.name],l.parent.timestamp=Date.now(),l.name=v,f.contents[v]=l,f.timestamp=l.parent.timestamp,l.parent=f},unlink:function(l,f){delete l.contents[f],l.timestamp=Date.now()},rmdir:function(l,f){var v=_.lookupNode(l,f);for(var S in v.contents)throw new _.ErrnoError(55);delete l.contents[f],l.timestamp=Date.now()},readdir:function(l){var f=[".",".."];for(var v in l.contents)!l.contents.hasOwnProperty(v)||f.push(v);return f},symlink:function(l,f,v){var S=re.createNode(l,f,41471,0);return S.link=v,S},readlink:function(l){if(!_.isLink(l.mode))throw new _.ErrnoError(28);return l.link}},stream_ops:{read:function(l,f,v,S,C){var F=l.node.contents;if(C>=l.node.usedBytes)return 0;var z=Math.min(l.node.usedBytes-C,S);if(z>8&&F.subarray)f.set(F.subarray(C,C+z),v);else for(var W=0;W<z;W++)f[v+W]=F[C+W];return z},write:function(l,f,v,S,C,F){if(f.buffer===V.buffer&&(F=!1),!S)return 0;var z=l.node;if(z.timestamp=Date.now(),f.subarray&&(!z.contents||z.contents.subarray)){if(F)return z.contents=f.subarray(v,v+S),z.usedBytes=S,S;if(z.usedBytes===0&&C===0)return z.contents=f.slice(v,v+S),z.usedBytes=S,S;if(C+S<=z.usedBytes)return z.contents.set(f.subarray(v,v+S),C),S}if(re.expandFileStorage(z,C+S),z.contents.subarray&&f.subarray)z.contents.set(f.subarray(v,v+S),C);else for(var W=0;W<S;W++)z.contents[C+W]=f[v+W];return z.usedBytes=Math.max(z.usedBytes,C+S),S},llseek:function(l,f,v){var S=f;if(v===1?S+=l.position:v===2&&_.isFile(l.node.mode)&&(S+=l.node.usedBytes),S<0)throw new _.ErrnoError(28);return S},allocate:function(l,f,v){re.expandFileStorage(l.node,f+v),l.node.usedBytes=Math.max(l.node.usedBytes,f+v)},mmap:function(l,f,v,S,C){if(!_.isFile(l.node.mode))throw new _.ErrnoError(43);var F,z,W=l.node.contents;if(!(C&2)&&W.buffer===oe)z=!1,F=W.byteOffset;else{if((v>0||v+f<W.length)&&(W.subarray?W=W.subarray(v,v+f):W=Array.prototype.slice.call(W,v,v+f)),z=!0,F=Ee(),!F)throw new _.ErrnoError(48);V.set(W,F)}return{ptr:F,allocated:z}},msync:function(l,f,v,S,C){if(!_.isFile(l.node.mode))throw new _.ErrnoError(43);return C&2||re.stream_ops.write(l,f,0,S,v,!1),0}}};function Ke(l,f,v,S){var C=S?"":"al "+l;x(l,F=>{H(F,'Loading data file "'+l+'" failed (no arrayBuffer).'),f(new Uint8Array(F)),C&&at()},F=>{if(v)v();else throw'Loading data file "'+l+'" failed.'}),C&&kt()}var _={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,lookupPath:(l,f={})=>{if(l=O.resolve(_.cwd(),l),!l)return{path:"",node:null};var v={follow_mount:!0,recurse_count:0};if(f=Object.assign(v,f),f.recurse_count>8)throw new _.ErrnoError(32);for(var S=Me.normalizeArray(l.split("/").filter(Ie=>!!Ie),!1),C=_.root,F="/",z=0;z<S.length;z++){var W=z===S.length-1;if(W&&f.parent)break;if(C=_.lookupNode(C,S[z]),F=Me.join2(F,S[z]),_.isMountpoint(C)&&(!W||W&&f.follow_mount)&&(C=C.mounted.root),!W||f.follow)for(var ue=0;_.isLink(C.mode);){var xe=_.readlink(F);F=O.resolve(Me.dirname(F),xe);var De=_.lookupPath(F,{recurse_count:f.recurse_count+1});if(C=De.node,ue++>40)throw new _.ErrnoError(32)}}return{path:F,node:C}},getPath:l=>{for(var f;;){if(_.isRoot(l)){var v=l.mount.mountpoint;return f?v[v.length-1]!=="/"?v+"/"+f:v+f:v}f=f?l.name+"/"+f:l.name,l=l.parent}},hashName:(l,f)=>{for(var v=0,S=0;S<f.length;S++)v=(v<<5)-v+f.charCodeAt(S)|0;return(l+v>>>0)%_.nameTable.length},hashAddNode:l=>{var f=_.hashName(l.parent.id,l.name);l.name_next=_.nameTable[f],_.nameTable[f]=l},hashRemoveNode:l=>{var f=_.hashName(l.parent.id,l.name);if(_.nameTable[f]===l)_.nameTable[f]=l.name_next;else for(var v=_.nameTable[f];v;){if(v.name_next===l){v.name_next=l.name_next;break}v=v.name_next}},lookupNode:(l,f)=>{var v=_.mayLookup(l);if(v)throw new _.ErrnoError(v,l);for(var S=_.hashName(l.id,f),C=_.nameTable[S];C;C=C.name_next){var F=C.name;if(C.parent.id===l.id&&F===f)return C}return _.lookup(l,f)},createNode:(l,f,v,S)=>{var C=new _.FSNode(l,f,v,S);return _.hashAddNode(C),C},destroyNode:l=>{_.hashRemoveNode(l)},isRoot:l=>l===l.parent,isMountpoint:l=>!!l.mounted,isFile:l=>(l&61440)===32768,isDir:l=>(l&61440)===16384,isLink:l=>(l&61440)===40960,isChrdev:l=>(l&61440)===8192,isBlkdev:l=>(l&61440)===24576,isFIFO:l=>(l&61440)===4096,isSocket:l=>(l&49152)===49152,flagModes:{r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},modeStringToFlags:l=>{var f=_.flagModes[l];if(typeof f>"u")throw new Error("Unknown file open mode: "+l);return f},flagsToPermissionString:l=>{var f=["r","w","rw"][l&3];return l&512&&(f+="w"),f},nodePermissions:(l,f)=>_.ignorePermissions?0:f.includes("r")&&!(l.mode&292)||f.includes("w")&&!(l.mode&146)||f.includes("x")&&!(l.mode&73)?2:0,mayLookup:l=>{var f=_.nodePermissions(l,"x");return f||(l.node_ops.lookup?0:2)},mayCreate:(l,f)=>{try{var v=_.lookupNode(l,f);return 20}catch{}return _.nodePermissions(l,"wx")},mayDelete:(l,f,v)=>{var S;try{S=_.lookupNode(l,f)}catch(F){return F.errno}var C=_.nodePermissions(l,"wx");if(C)return C;if(v){if(!_.isDir(S.mode))return 54;if(_.isRoot(S)||_.getPath(S)===_.cwd())return 10}else if(_.isDir(S.mode))return 31;return 0},mayOpen:(l,f)=>l?_.isLink(l.mode)?32:_.isDir(l.mode)&&(_.flagsToPermissionString(f)!=="r"||f&512)?31:_.nodePermissions(l,_.flagsToPermissionString(f)):44,MAX_OPEN_FDS:4096,nextfd:(l=0,f=_.MAX_OPEN_FDS)=>{for(var v=l;v<=f;v++)if(!_.streams[v])return v;throw new _.ErrnoError(33)},getStream:l=>_.streams[l],createStream:(l,f,v)=>{_.FSStream||(_.FSStream=function(){this.shared={}},_.FSStream.prototype={},Object.defineProperties(_.FSStream.prototype,{object:{get:function(){return this.node},set:function(C){this.node=C}},isRead:{get:function(){return(this.flags&2097155)!==1}},isWrite:{get:function(){return(this.flags&2097155)!==0}},isAppend:{get:function(){return this.flags&1024}},flags:{get:function(){return this.shared.flags},set:function(C){this.shared.flags=C}},position:{get:function(){return this.shared.position},set:function(C){this.shared.position=C}}})),l=Object.assign(new _.FSStream,l);var S=_.nextfd(f,v);return l.fd=S,_.streams[S]=l,l},closeStream:l=>{_.streams[l]=null},chrdev_stream_ops:{open:l=>{var f=_.getDevice(l.node.rdev);l.stream_ops=f.stream_ops,l.stream_ops.open&&l.stream_ops.open(l)},llseek:()=>{throw new _.ErrnoError(70)}},major:l=>l>>8,minor:l=>l&255,makedev:(l,f)=>l<<8|f,registerDevice:(l,f)=>{_.devices[l]={stream_ops:f}},getDevice:l=>_.devices[l],getMounts:l=>{for(var f=[],v=[l];v.length;){var S=v.pop();f.push(S),v.push.apply(v,S.mounts)}return f},syncfs:(l,f)=>{typeof l=="function"&&(f=l,l=!1),_.syncFSRequests++,_.syncFSRequests>1&&b("warning: "+_.syncFSRequests+" FS.syncfs operations in flight at once, probably just doing extra work");var v=_.getMounts(_.root.mount),S=0;function C(z){return _.syncFSRequests--,f(z)}function F(z){if(z)return F.errored?void 0:(F.errored=!0,C(z));++S>=v.length&&C(null)}v.forEach(z=>{if(!z.type.syncfs)return F(null);z.type.syncfs(z,l,F)})},mount:(l,f,v)=>{var S=v==="/",C=!v,F;if(S&&_.root)throw new _.ErrnoError(10);if(!S&&!C){var z=_.lookupPath(v,{follow_mount:!1});if(v=z.path,F=z.node,_.isMountpoint(F))throw new _.ErrnoError(10);if(!_.isDir(F.mode))throw new _.ErrnoError(54)}var W={type:l,opts:f,mountpoint:v,mounts:[]},ue=l.mount(W);return ue.mount=W,W.root=ue,S?_.root=ue:F&&(F.mounted=W,F.mount&&F.mount.mounts.push(W)),ue},unmount:l=>{var f=_.lookupPath(l,{follow_mount:!1});if(!_.isMountpoint(f.node))throw new _.ErrnoError(28);var v=f.node,S=v.mounted,C=_.getMounts(S);Object.keys(_.nameTable).forEach(z=>{for(var W=_.nameTable[z];W;){var ue=W.name_next;C.includes(W.mount)&&_.destroyNode(W),W=ue}}),v.mounted=null;var F=v.mount.mounts.indexOf(S);v.mount.mounts.splice(F,1)},lookup:(l,f)=>l.node_ops.lookup(l,f),mknod:(l,f,v)=>{var S=_.lookupPath(l,{parent:!0}),C=S.node,F=Me.basename(l);if(!F||F==="."||F==="..")throw new _.ErrnoError(28);var z=_.mayCreate(C,F);if(z)throw new _.ErrnoError(z);if(!C.node_ops.mknod)throw new _.ErrnoError(63);return C.node_ops.mknod(C,F,f,v)},create:(l,f)=>(f=f!==void 0?f:438,f&=4095,f|=32768,_.mknod(l,f,0)),mkdir:(l,f)=>(f=f!==void 0?f:511,f&=1023,f|=16384,_.mknod(l,f,0)),mkdirTree:(l,f)=>{for(var v=l.split("/"),S="",C=0;C<v.length;++C)if(!!v[C]){S+="/"+v[C];try{_.mkdir(S,f)}catch(F){if(F.errno!=20)throw F}}},mkdev:(l,f,v)=>(typeof v>"u"&&(v=f,f=438),f|=8192,_.mknod(l,f,v)),symlink:(l,f)=>{if(!O.resolve(l))throw new _.ErrnoError(44);var v=_.lookupPath(f,{parent:!0}),S=v.node;if(!S)throw new _.ErrnoError(44);var C=Me.basename(f),F=_.mayCreate(S,C);if(F)throw new _.ErrnoError(F);if(!S.node_ops.symlink)throw new _.ErrnoError(63);return S.node_ops.symlink(S,C,l)},rename:(l,f)=>{var v=Me.dirname(l),S=Me.dirname(f),C=Me.basename(l),F=Me.basename(f),z,W,ue;if(z=_.lookupPath(l,{parent:!0}),W=z.node,z=_.lookupPath(f,{parent:!0}),ue=z.node,!W||!ue)throw new _.ErrnoError(44);if(W.mount!==ue.mount)throw new _.ErrnoError(75);var xe=_.lookupNode(W,C),De=O.relative(l,S);if(De.charAt(0)!==".")throw new _.ErrnoError(28);if(De=O.relative(f,v),De.charAt(0)!==".")throw new _.ErrnoError(55);var Ie;try{Ie=_.lookupNode(ue,F)}catch{}if(xe!==Ie){var Pe=_.isDir(xe.mode),Ae=_.mayDelete(W,C,Pe);if(Ae)throw new _.ErrnoError(Ae);if(Ae=Ie?_.mayDelete(ue,F,Pe):_.mayCreate(ue,F),Ae)throw new _.ErrnoError(Ae);if(!W.node_ops.rename)throw new _.ErrnoError(63);if(_.isMountpoint(xe)||Ie&&_.isMountpoint(Ie))throw new _.ErrnoError(10);if(ue!==W&&(Ae=_.nodePermissions(W,"w"),Ae))throw new _.ErrnoError(Ae);_.hashRemoveNode(xe);try{W.node_ops.rename(xe,ue,F)}catch(We){throw We}finally{_.hashAddNode(xe)}}},rmdir:l=>{var f=_.lookupPath(l,{parent:!0}),v=f.node,S=Me.basename(l),C=_.lookupNode(v,S),F=_.mayDelete(v,S,!0);if(F)throw new _.ErrnoError(F);if(!v.node_ops.rmdir)throw new _.ErrnoError(63);if(_.isMountpoint(C))throw new _.ErrnoError(10);v.node_ops.rmdir(v,S),_.destroyNode(C)},readdir:l=>{var f=_.lookupPath(l,{follow:!0}),v=f.node;if(!v.node_ops.readdir)throw new _.ErrnoError(54);return v.node_ops.readdir(v)},unlink:l=>{var f=_.lookupPath(l,{parent:!0}),v=f.node;if(!v)throw new _.ErrnoError(44);var S=Me.basename(l),C=_.lookupNode(v,S),F=_.mayDelete(v,S,!1);if(F)throw new _.ErrnoError(F);if(!v.node_ops.unlink)throw new _.ErrnoError(63);if(_.isMountpoint(C))throw new _.ErrnoError(10);v.node_ops.unlink(v,S),_.destroyNode(C)},readlink:l=>{var f=_.lookupPath(l),v=f.node;if(!v)throw new _.ErrnoError(44);if(!v.node_ops.readlink)throw new _.ErrnoError(28);return O.resolve(_.getPath(v.parent),v.node_ops.readlink(v))},stat:(l,f)=>{var v=_.lookupPath(l,{follow:!f}),S=v.node;if(!S)throw new _.ErrnoError(44);if(!S.node_ops.getattr)throw new _.ErrnoError(63);return S.node_ops.getattr(S)},lstat:l=>_.stat(l,!0),chmod:(l,f,v)=>{var S;if(typeof l=="string"){var C=_.lookupPath(l,{follow:!v});S=C.node}else S=l;if(!S.node_ops.setattr)throw new _.ErrnoError(63);S.node_ops.setattr(S,{mode:f&4095|S.mode&-4096,timestamp:Date.now()})},lchmod:(l,f)=>{_.chmod(l,f,!0)},fchmod:(l,f)=>{var v=_.getStream(l);if(!v)throw new _.ErrnoError(8);_.chmod(v.node,f)},chown:(l,f,v,S)=>{var C;if(typeof l=="string"){var F=_.lookupPath(l,{follow:!S});C=F.node}else C=l;if(!C.node_ops.setattr)throw new _.ErrnoError(63);C.node_ops.setattr(C,{timestamp:Date.now()})},lchown:(l,f,v)=>{_.chown(l,f,v,!0)},fchown:(l,f,v)=>{var S=_.getStream(l);if(!S)throw new _.ErrnoError(8);_.chown(S.node,f,v)},truncate:(l,f)=>{if(f<0)throw new _.ErrnoError(28);var v;if(typeof l=="string"){var S=_.lookupPath(l,{follow:!0});v=S.node}else v=l;if(!v.node_ops.setattr)throw new _.ErrnoError(63);if(_.isDir(v.mode))throw new _.ErrnoError(31);if(!_.isFile(v.mode))throw new _.ErrnoError(28);var C=_.nodePermissions(v,"w");if(C)throw new _.ErrnoError(C);v.node_ops.setattr(v,{size:f,timestamp:Date.now()})},ftruncate:(l,f)=>{var v=_.getStream(l);if(!v)throw new _.ErrnoError(8);if((v.flags&2097155)===0)throw new _.ErrnoError(28);_.truncate(v.node,f)},utime:(l,f,v)=>{var S=_.lookupPath(l,{follow:!0}),C=S.node;C.node_ops.setattr(C,{timestamp:Math.max(f,v)})},open:(l,f,v)=>{if(l==="")throw new _.ErrnoError(44);f=typeof f=="string"?_.modeStringToFlags(f):f,v=typeof v>"u"?438:v,f&64?v=v&4095|32768:v=0;var S;if(typeof l=="object")S=l;else{l=Me.normalize(l);try{var C=_.lookupPath(l,{follow:!(f&131072)});S=C.node}catch{}}var F=!1;if(f&64)if(S){if(f&128)throw new _.ErrnoError(20)}else S=_.mknod(l,v,0),F=!0;if(!S)throw new _.ErrnoError(44);if(_.isChrdev(S.mode)&&(f&=-513),f&65536&&!_.isDir(S.mode))throw new _.ErrnoError(54);if(!F){var z=_.mayOpen(S,f);if(z)throw new _.ErrnoError(z)}f&512&&!F&&_.truncate(S,0),f&=-131713;var W=_.createStream({node:S,path:_.getPath(S),flags:f,seekable:!0,position:0,stream_ops:S.stream_ops,ungotten:[],error:!1});return W.stream_ops.open&&W.stream_ops.open(W),t.logReadFiles&&!(f&1)&&(_.readFiles||(_.readFiles={}),l in _.readFiles||(_.readFiles[l]=1)),W},close:l=>{if(_.isClosed(l))throw new _.ErrnoError(8);l.getdents&&(l.getdents=null);try{l.stream_ops.close&&l.stream_ops.close(l)}catch(f){throw f}finally{_.closeStream(l.fd)}l.fd=null},isClosed:l=>l.fd===null,llseek:(l,f,v)=>{if(_.isClosed(l))throw new _.ErrnoError(8);if(!l.seekable||!l.stream_ops.llseek)throw new _.ErrnoError(70);if(v!=0&&v!=1&&v!=2)throw new _.ErrnoError(28);return l.position=l.stream_ops.llseek(l,f,v),l.ungotten=[],l.position},read:(l,f,v,S,C)=>{if(S<0||C<0)throw new _.ErrnoError(28);if(_.isClosed(l))throw new _.ErrnoError(8);if((l.flags&2097155)===1)throw new _.ErrnoError(8);if(_.isDir(l.node.mode))throw new _.ErrnoError(31);if(!l.stream_ops.read)throw new _.ErrnoError(28);var F=typeof C<"u";if(!F)C=l.position;else if(!l.seekable)throw new _.ErrnoError(70);var z=l.stream_ops.read(l,f,v,S,C);return F||(l.position+=z),z},write:(l,f,v,S,C,F)=>{if(S<0||C<0)throw new _.ErrnoError(28);if(_.isClosed(l))throw new _.ErrnoError(8);if((l.flags&2097155)===0)throw new _.ErrnoError(8);if(_.isDir(l.node.mode))throw new _.ErrnoError(31);if(!l.stream_ops.write)throw new _.ErrnoError(28);l.seekable&&l.flags&1024&&_.llseek(l,0,2);var z=typeof C<"u";if(!z)C=l.position;else if(!l.seekable)throw new _.ErrnoError(70);var W=l.stream_ops.write(l,f,v,S,C,F);return z||(l.position+=W),W},allocate:(l,f,v)=>{if(_.isClosed(l))throw new _.ErrnoError(8);if(f<0||v<=0)throw new _.ErrnoError(28);if((l.flags&2097155)===0)throw new _.ErrnoError(8);if(!_.isFile(l.node.mode)&&!_.isDir(l.node.mode))throw new _.ErrnoError(43);if(!l.stream_ops.allocate)throw new _.ErrnoError(138);l.stream_ops.allocate(l,f,v)},mmap:(l,f,v,S,C)=>{if((S&2)!==0&&(C&2)===0&&(l.flags&2097155)!==2)throw new _.ErrnoError(2);if((l.flags&2097155)===1)throw new _.ErrnoError(2);if(!l.stream_ops.mmap)throw new _.ErrnoError(43);return l.stream_ops.mmap(l,f,v,S,C)},msync:(l,f,v,S,C)=>!l||!l.stream_ops.msync?0:l.stream_ops.msync(l,f,v,S,C),munmap:l=>0,ioctl:(l,f,v)=>{if(!l.stream_ops.ioctl)throw new _.ErrnoError(59);return l.stream_ops.ioctl(l,f,v)},readFile:(l,f={})=>{if(f.flags=f.flags||0,f.encoding=f.encoding||"binary",f.encoding!=="utf8"&&f.encoding!=="binary")throw new Error('Invalid encoding type "'+f.encoding+'"');var v,S=_.open(l,f.flags),C=_.stat(l),F=C.size,z=new Uint8Array(F);return _.read(S,z,0,F,0),f.encoding==="utf8"?v=ce(z,0):f.encoding==="binary"&&(v=z),_.close(S),v},writeFile:(l,f,v={})=>{v.flags=v.flags||577;var S=_.open(l,v.flags,v.mode);if(typeof f=="string"){var C=new Uint8Array(Q(f)+1),F=q(f,C,0,C.length);_.write(S,C,0,F,void 0,v.canOwn)}else if(ArrayBuffer.isView(f))_.write(S,f,0,f.byteLength,void 0,v.canOwn);else throw new Error("Unsupported data type");_.close(S)},cwd:()=>_.currentPath,chdir:l=>{var f=_.lookupPath(l,{follow:!0});if(f.node===null)throw new _.ErrnoError(44);if(!_.isDir(f.node.mode))throw new _.ErrnoError(54);var v=_.nodePermissions(f.node,"x");if(v)throw new _.ErrnoError(v);_.currentPath=f.path},createDefaultDirectories:()=>{_.mkdir("/tmp"),_.mkdir("/home"),_.mkdir("/home/web_user")},createDefaultDevices:()=>{_.mkdir("/dev"),_.registerDevice(_.makedev(1,3),{read:()=>0,write:(f,v,S,C,F)=>C}),_.mkdev("/dev/null",_.makedev(1,3)),J.register(_.makedev(5,0),J.default_tty_ops),J.register(_.makedev(6,0),J.default_tty1_ops),_.mkdev("/dev/tty",_.makedev(5,0)),_.mkdev("/dev/tty1",_.makedev(6,0));var l=ot();_.createDevice("/dev","random",l),_.createDevice("/dev","urandom",l),_.mkdir("/dev/shm"),_.mkdir("/dev/shm/tmp")},createSpecialDirectories:()=>{_.mkdir("/proc");var l=_.mkdir("/proc/self");_.mkdir("/proc/self/fd"),_.mount({mount:()=>{var f=_.createNode(l,"fd",16895,73);return f.node_ops={lookup:(v,S)=>{var C=+S,F=_.getStream(C);if(!F)throw new _.ErrnoError(8);var z={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>F.path}};return z.parent=z,z}},f}},{},"/proc/self/fd")},createStandardStreams:()=>{t.stdin?_.createDevice("/dev","stdin",t.stdin):_.symlink("/dev/tty","/dev/stdin"),t.stdout?_.createDevice("/dev","stdout",null,t.stdout):_.symlink("/dev/tty","/dev/stdout"),t.stderr?_.createDevice("/dev","stderr",null,t.stderr):_.symlink("/dev/tty1","/dev/stderr"),_.open("/dev/stdin",0),_.open("/dev/stdout",1),_.open("/dev/stderr",1)},ensureErrnoError:()=>{_.ErrnoError||(_.ErrnoError=function(f,v){this.node=v,this.setErrno=function(S){this.errno=S},this.setErrno(f),this.message="FS error"},_.ErrnoError.prototype=new Error,_.ErrnoError.prototype.constructor=_.ErrnoError,[44].forEach(l=>{_.genericErrors[l]=new _.ErrnoError(l),_.genericErrors[l].stack="<generic error, no stack>"}))},staticInit:()=>{_.ensureErrnoError(),_.nameTable=new Array(4096),_.mount(re,{},"/"),_.createDefaultDirectories(),_.createDefaultDevices(),_.createSpecialDirectories(),_.filesystems={MEMFS:re}},init:(l,f,v)=>{_.init.initialized=!0,_.ensureErrnoError(),t.stdin=l||t.stdin,t.stdout=f||t.stdout,t.stderr=v||t.stderr,_.createStandardStreams()},quit:()=>{_.init.initialized=!1;for(var l=0;l<_.streams.length;l++){var f=_.streams[l];!f||_.close(f)}},getMode:(l,f)=>{var v=0;return l&&(v|=365),f&&(v|=146),v},findObject:(l,f)=>{var v=_.analyzePath(l,f);return v.exists?v.object:null},analyzePath:(l,f)=>{try{var v=_.lookupPath(l,{follow:!f});l=v.path}catch{}var S={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var v=_.lookupPath(l,{parent:!0});S.parentExists=!0,S.parentPath=v.path,S.parentObject=v.node,S.name=Me.basename(l),v=_.lookupPath(l,{follow:!f}),S.exists=!0,S.path=v.path,S.object=v.node,S.name=v.node.name,S.isRoot=v.path==="/"}catch(C){S.error=C.errno}return S},createPath:(l,f,v,S)=>{l=typeof l=="string"?l:_.getPath(l);for(var C=f.split("/").reverse();C.length;){var F=C.pop();if(!!F){var z=Me.join2(l,F);try{_.mkdir(z)}catch{}l=z}}return z},createFile:(l,f,v,S,C)=>{var F=Me.join2(typeof l=="string"?l:_.getPath(l),f),z=_.getMode(S,C);return _.create(F,z)},createDataFile:(l,f,v,S,C,F)=>{var z=f;l&&(l=typeof l=="string"?l:_.getPath(l),z=f?Me.join2(l,f):l);var W=_.getMode(S,C),ue=_.create(z,W);if(v){if(typeof v=="string"){for(var xe=new Array(v.length),De=0,Ie=v.length;De<Ie;++De)xe[De]=v.charCodeAt(De);v=xe}_.chmod(ue,W|146);var Pe=_.open(ue,577);_.write(Pe,v,0,v.length,0,F),_.close(Pe),_.chmod(ue,W)}return ue},createDevice:(l,f,v,S)=>{var C=Me.join2(typeof l=="string"?l:_.getPath(l),f),F=_.getMode(!!v,!!S);_.createDevice.major||(_.createDevice.major=64);var z=_.makedev(_.createDevice.major++,0);return _.registerDevice(z,{open:W=>{W.seekable=!1},close:W=>{S&&S.buffer&&S.buffer.length&&S(10)},read:(W,ue,xe,De,Ie)=>{for(var Pe=0,Ae=0;Ae<De;Ae++){var We;try{We=v()}catch{throw new _.ErrnoError(29)}if(We===void 0&&Pe===0)throw new _.ErrnoError(6);if(We==null)break;Pe++,ue[xe+Ae]=We}return Pe&&(W.node.timestamp=Date.now()),Pe},write:(W,ue,xe,De,Ie)=>{for(var Pe=0;Pe<De;Pe++)try{S(ue[xe+Pe])}catch{throw new _.ErrnoError(29)}return De&&(W.node.timestamp=Date.now()),Pe}}),_.mkdev(C,F,z)},forceLoadFile:l=>{if(l.isDevice||l.isFolder||l.link||l.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");if(h)try{l.contents=ve(h(l.url),!0),l.usedBytes=l.contents.length}catch{throw new _.ErrnoError(29)}else throw new Error("Cannot load without read() or XMLHttpRequest.")},createLazyFile:(l,f,v,S,C)=>{function F(){this.lengthKnown=!1,this.chunks=[]}if(F.prototype.get=function(Ae){if(!(Ae>this.length-1||Ae<0)){var We=Ae%this.chunkSize,Ut=Ae/this.chunkSize|0;return this.getter(Ut)[We]}},F.prototype.setDataGetter=function(Ae){this.getter=Ae},F.prototype.cacheLength=function(){var Ae=new XMLHttpRequest;if(Ae.open("HEAD",v,!1),Ae.send(null),!(Ae.status>=200&&Ae.status<300||Ae.status===304))throw new Error("Couldn't load "+v+". Status: "+Ae.status);var We=Number(Ae.getResponseHeader("Content-length")),Ut,lt=(Ut=Ae.getResponseHeader("Accept-Ranges"))&&Ut==="bytes",Ct=(Ut=Ae.getResponseHeader("Content-Encoding"))&&Ut==="gzip",Bt=1024*1024;lt||(Bt=We);var en=(Vt,Pn)=>{if(Vt>Pn)throw new Error("invalid range ("+Vt+", "+Pn+") or no bytes requested!");if(Pn>We-1)throw new Error("only "+We+" bytes available! programmer error!");var ht=new XMLHttpRequest;if(ht.open("GET",v,!1),We!==Bt&&ht.setRequestHeader("Range","bytes="+Vt+"-"+Pn),ht.responseType="arraybuffer",ht.overrideMimeType&&ht.overrideMimeType("text/plain; charset=x-user-defined"),ht.send(null),!(ht.status>=200&&ht.status<300||ht.status===304))throw new Error("Couldn't load "+v+". Status: "+ht.status);return ht.response!==void 0?new Uint8Array(ht.response||[]):ve(ht.responseText||"",!0)},yi=this;yi.setDataGetter(Vt=>{var Pn=Vt*Bt,ht=(Vt+1)*Bt-1;if(ht=Math.min(ht,We-1),typeof yi.chunks[Vt]>"u"&&(yi.chunks[Vt]=en(Pn,ht)),typeof yi.chunks[Vt]>"u")throw new Error("doXHR failed!");return yi.chunks[Vt]}),(Ct||!We)&&(Bt=We=1,We=this.getter(0).length,Bt=We,E("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=We,this._chunkSize=Bt,this.lengthKnown=!0},typeof XMLHttpRequest<"u"){if(!u)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var z=new F;Object.defineProperties(z,{length:{get:function(){return this.lengthKnown||this.cacheLength(),this._length}},chunkSize:{get:function(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}});var W={isDevice:!1,contents:z}}else var W={isDevice:!1,url:v};var ue=_.createFile(l,f,W,S,C);W.contents?ue.contents=W.contents:W.url&&(ue.contents=null,ue.url=W.url),Object.defineProperties(ue,{usedBytes:{get:function(){return this.contents.length}}});var xe={},De=Object.keys(ue.stream_ops);De.forEach(Pe=>{var Ae=ue.stream_ops[Pe];xe[Pe]=function(){return _.forceLoadFile(ue),Ae.apply(null,arguments)}});function Ie(Pe,Ae,We,Ut,lt){var Ct=Pe.node.contents;if(lt>=Ct.length)return 0;var Bt=Math.min(Ct.length-lt,Ut);if(Ct.slice)for(var en=0;en<Bt;en++)Ae[We+en]=Ct[lt+en];else for(var en=0;en<Bt;en++)Ae[We+en]=Ct.get(lt+en);return Bt}return xe.read=(Pe,Ae,We,Ut,lt)=>(_.forceLoadFile(ue),Ie(Pe,Ae,We,Ut,lt)),xe.mmap=(Pe,Ae,We,Ut,lt)=>{_.forceLoadFile(ue);var Ct=Ee();if(!Ct)throw new _.ErrnoError(48);return Ie(Pe,V,Ct,Ae,We),{ptr:Ct,allocated:!0}},ue.stream_ops=xe,ue},createPreloadedFile:(l,f,v,S,C,F,z,W,ue,xe)=>{var De=f?O.resolve(Me.join2(l,f)):l;function Ie(Pe){function Ae(We){xe&&xe(),W||_.createDataFile(l,f,We,S,C,ue),F&&F(),at()}U.handledByPreloadPlugin(Pe,De,Ae,()=>{z&&z(),at()})||Ae(Pe)}kt(),typeof v=="string"?Ke(v,Pe=>Ie(Pe),z):Ie(v)},indexedDB:()=>window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB,DB_NAME:()=>"EM_FS_"+window.location.pathname,DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:(l,f,v)=>{f=f||(()=>{}),v=v||(()=>{});var S=_.indexedDB();try{var C=S.open(_.DB_NAME(),_.DB_VERSION)}catch(F){return v(F)}C.onupgradeneeded=()=>{E("creating db");var F=C.result;F.createObjectStore(_.DB_STORE_NAME)},C.onsuccess=()=>{var F=C.result,z=F.transaction([_.DB_STORE_NAME],"readwrite"),W=z.objectStore(_.DB_STORE_NAME),ue=0,xe=0,De=l.length;function Ie(){xe==0?f():v()}l.forEach(Pe=>{var Ae=W.put(_.analyzePath(Pe).object.contents,Pe);Ae.onsuccess=()=>{ue++,ue+xe==De&&Ie()},Ae.onerror=()=>{xe++,ue+xe==De&&Ie()}}),z.onerror=v},C.onerror=v},loadFilesFromDB:(l,f,v)=>{f=f||(()=>{}),v=v||(()=>{});var S=_.indexedDB();try{var C=S.open(_.DB_NAME(),_.DB_VERSION)}catch(F){return v(F)}C.onupgradeneeded=v,C.onsuccess=()=>{var F=C.result;try{var z=F.transaction([_.DB_STORE_NAME],"readonly")}catch(Pe){v(Pe);return}var W=z.objectStore(_.DB_STORE_NAME),ue=0,xe=0,De=l.length;function Ie(){xe==0?f():v()}l.forEach(Pe=>{var Ae=W.get(Pe);Ae.onsuccess=()=>{_.analyzePath(Pe).exists&&_.unlink(Pe),_.createDataFile(Me.dirname(Pe),Me.basename(Pe),Ae.result,!0,!0,!0),ue++,ue+xe==De&&Ie()},Ae.onerror=()=>{xe++,ue+xe==De&&Ie()}}),z.onerror=v},C.onerror=v}},Fe={DEFAULT_POLLMASK:5,calculateAt:function(l,f,v){if(Me.isAbs(f))return f;var S;if(l===-100)S=_.cwd();else{var C=_.getStream(l);if(!C)throw new _.ErrnoError(8);S=C.path}if(f.length==0){if(!v)throw new _.ErrnoError(44);return S}return Me.join2(S,f)},doStat:function(l,f,v){try{var S=l(f)}catch(C){if(C&&C.node&&Me.normalize(f)!==Me.normalize(_.getPath(C.node)))return-54;throw C}return Z[v>>2]=S.dev,Z[v+8>>2]=S.ino,Z[v+12>>2]=S.mode,Z[v+16>>2]=S.nlink,Z[v+20>>2]=S.uid,Z[v+24>>2]=S.gid,Z[v+28>>2]=S.rdev,Ce=[S.size>>>0,(se=S.size,+Math.abs(se)>=1?se>0?(Math.min(+Math.floor(se/4294967296),4294967295)|0)>>>0:~~+Math.ceil((se-+(~~se>>>0))/4294967296)>>>0:0)],Z[v+40>>2]=Ce[0],Z[v+44>>2]=Ce[1],Z[v+48>>2]=4096,Z[v+52>>2]=S.blocks,Ce=[Math.floor(S.atime.getTime()/1e3)>>>0,(se=Math.floor(S.atime.getTime()/1e3),+Math.abs(se)>=1?se>0?(Math.min(+Math.floor(se/4294967296),4294967295)|0)>>>0:~~+Math.ceil((se-+(~~se>>>0))/4294967296)>>>0:0)],Z[v+56>>2]=Ce[0],Z[v+60>>2]=Ce[1],Z[v+64>>2]=0,Ce=[Math.floor(S.mtime.getTime()/1e3)>>>0,(se=Math.floor(S.mtime.getTime()/1e3),+Math.abs(se)>=1?se>0?(Math.min(+Math.floor(se/4294967296),4294967295)|0)>>>0:~~+Math.ceil((se-+(~~se>>>0))/4294967296)>>>0:0)],Z[v+72>>2]=Ce[0],Z[v+76>>2]=Ce[1],Z[v+80>>2]=0,Ce=[Math.floor(S.ctime.getTime()/1e3)>>>0,(se=Math.floor(S.ctime.getTime()/1e3),+Math.abs(se)>=1?se>0?(Math.min(+Math.floor(se/4294967296),4294967295)|0)>>>0:~~+Math.ceil((se-+(~~se>>>0))/4294967296)>>>0:0)],Z[v+88>>2]=Ce[0],Z[v+92>>2]=Ce[1],Z[v+96>>2]=0,Ce=[S.ino>>>0,(se=S.ino,+Math.abs(se)>=1?se>0?(Math.min(+Math.floor(se/4294967296),4294967295)|0)>>>0:~~+Math.ceil((se-+(~~se>>>0))/4294967296)>>>0:0)],Z[v+104>>2]=Ce[0],Z[v+108>>2]=Ce[1],0},doMsync:function(l,f,v,S,C){var F=B.slice(l,l+v);_.msync(f,F,C,v,S)},varargs:void 0,get:function(){Fe.varargs+=4;var l=Z[Fe.varargs-4>>2];return l},getStr:function(l){var f=de(l);return f},getStreamFromFD:function(l){var f=_.getStream(l);if(!f)throw new _.ErrnoError(8);return f}};function si(l,f,v){Fe.varargs=v;try{var S=Fe.getStreamFromFD(l);switch(f){case 0:{var C=Fe.get();if(C<0)return-28;var F;return F=_.createStream(S,C),F.fd}case 1:case 2:return 0;case 3:return S.flags;case 4:{var C=Fe.get();return S.flags|=C,0}case 5:{var C=Fe.get(),z=0;return G[C+z>>1]=2,0}case 6:case 7:return 0;case 16:case 8:return-28;case 9:return ze(28),-1;default:return-28}}catch(W){if(typeof _>"u"||!(W instanceof _.ErrnoError))throw W;return-W.errno}}function ft(l,f){try{var v=Fe.getStreamFromFD(l);return Fe.doStat(_.stat,v.path,f)}catch(S){if(typeof _>"u"||!(S instanceof _.ErrnoError))throw S;return-S.errno}}function Hn(l,f,v){Fe.varargs=v;try{var S=Fe.getStreamFromFD(l);switch(f){case 21509:case 21505:return S.tty?0:-59;case 21510:case 21511:case 21512:case 21506:case 21507:case 21508:return S.tty?0:-59;case 21519:{if(!S.tty)return-59;var C=Fe.get();return Z[C>>2]=0,0}case 21520:return S.tty?-28:-59;case 21531:{var C=Fe.get();return _.ioctl(S,f,C)}case 21523:return S.tty?0:-59;case 21524:return S.tty?0:-59;default:return-28}}catch(F){if(typeof _>"u"||!(F instanceof _.ErrnoError))throw F;return-F.errno}}function un(l,f){try{return l=Fe.getStr(l),Fe.doStat(_.lstat,l,f)}catch(v){if(typeof _>"u"||!(v instanceof _.ErrnoError))throw v;return-v.errno}}function iu(l,f,v,S){try{f=Fe.getStr(f);var C=S&256,F=S&4096;return S=S&-4353,f=Fe.calculateAt(l,f,F),Fe.doStat(C?_.lstat:_.stat,f,v)}catch(z){if(typeof _>"u"||!(z instanceof _.ErrnoError))throw z;return-z.errno}}function ts(l,f,v,S){Fe.varargs=S;try{f=Fe.getStr(f),f=Fe.calculateAt(l,f);var C=S?Fe.get():0;return _.open(f,v,C).fd}catch(F){if(typeof _>"u"||!(F instanceof _.ErrnoError))throw F;return-F.errno}}function oa(l,f){try{return l=Fe.getStr(l),Fe.doStat(_.stat,l,f)}catch(v){if(typeof _>"u"||!(v instanceof _.ErrnoError))throw v;return-v.errno}}function ru(l,f,v){B.copyWithin(l,f,f+v)}function ou(){return 2147483648}function su(l){try{return N.grow(l-oe.byteLength+65535>>>16),pe(N.buffer),1}catch{}}function D(l){var f=B.length;l=l>>>0;var v=ou();if(l>v)return!1;let S=(ue,xe)=>ue+(xe-ue%xe)%xe;for(var C=1;C<=4;C*=2){var F=f*(1+.2/C);F=Math.min(F,l+100663296);var z=Math.min(v,S(Math.max(l,F),65536)),W=su(z);if(W)return!0}return!1}function X(l,f){if(U.mainLoop.timingMode=l,U.mainLoop.timingValue=f,!U.mainLoop.func)return 1;if(U.mainLoop.running||(U.mainLoop.running=!0),l==0)U.mainLoop.scheduler=function(){var z=Math.max(0,U.mainLoop.tickStartTime+f-K())|0;setTimeout(U.mainLoop.runner,z)},U.mainLoop.method="timeout";else if(l==1)U.mainLoop.scheduler=function(){U.requestAnimationFrame(U.mainLoop.runner)},U.mainLoop.method="rAF";else if(l==2){if(typeof setImmediate>"u"){var v=[],S="setimmediate",C=F=>{(F.data===S||F.data.target===S)&&(F.stopPropagation(),v.shift()())};addEventListener("message",C,!0),setImmediate=function(z){v.push(z),u?(t.setImmediates===void 0&&(t.setImmediates=[]),t.setImmediates.push(z),postMessage({target:S})):postMessage(S,"*")}}U.mainLoop.scheduler=function(){setImmediate(U.mainLoop.runner)},U.mainLoop.method="immediate"}return 0}var K;c?K=()=>{var l=process.hrtime();return l[0]*1e3+l[1]/1e6}:K=()=>performance.now();function $(l,f,v,S,C){H(!U.mainLoop.func,"emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters."),U.mainLoop.func=l,U.mainLoop.arg=S;var F=U.mainLoop.currentlyRunningMainloop;function z(){return!(F<U.mainLoop.currentlyRunningMainloop)}if(U.mainLoop.running=!1,U.mainLoop.runner=function(){if(!T){if(U.mainLoop.queue.length>0){var ue=Date.now(),xe=U.mainLoop.queue.shift();if(xe.func(xe.arg),U.mainLoop.remainingBlockers){var De=U.mainLoop.remainingBlockers,Ie=De%1==0?De-1:Math.floor(De);xe.counted?U.mainLoop.remainingBlockers=Ie:(Ie=Ie+.5,U.mainLoop.remainingBlockers=(8*De+Ie)/9)}if(E('main loop blocker "'+xe.name+'" took '+(Date.now()-ue)+" ms"),U.mainLoop.updateStatus(),!z())return;setTimeout(U.mainLoop.runner,0);return}if(!!z()){if(U.mainLoop.currentFrameNumber=U.mainLoop.currentFrameNumber+1|0,U.mainLoop.timingMode==1&&U.mainLoop.timingValue>1&&U.mainLoop.currentFrameNumber%U.mainLoop.timingValue!=0){U.mainLoop.scheduler();return}else U.mainLoop.timingMode==0&&(U.mainLoop.tickStartTime=K());U.mainLoop.runIter(l),z()&&(typeof SDL=="object"&&SDL.audio&&SDL.audio.queueNewAudioData&&SDL.audio.queueNewAudioData(),U.mainLoop.scheduler())}}},C||(f&&f>0?X(0,1e3/f):X(1,1),U.mainLoop.scheduler()),v)throw"unwind"}function ie(l){if(!T)try{l()}catch(f){ge(f)}}function Oe(l,f){return setTimeout(function(){ie(l)},f)}function Be(l){Be.shown||(Be.shown={}),Be.shown[l]||(Be.shown[l]=1,c&&(l="warning: "+l),b(l))}var U={mainLoop:{running:!1,scheduler:null,method:"",currentlyRunningMainloop:0,func:null,arg:0,timingMode:0,timingValue:0,currentFrameNumber:0,queue:[],pause:function(){U.mainLoop.scheduler=null,U.mainLoop.currentlyRunningMainloop++},resume:function(){U.mainLoop.currentlyRunningMainloop++;var l=U.mainLoop.timingMode,f=U.mainLoop.timingValue,v=U.mainLoop.func;U.mainLoop.func=null,$(v,0,!1,U.mainLoop.arg,!0),X(l,f),U.mainLoop.scheduler()},updateStatus:function(){if(t.setStatus){var l=t.statusMessage||"Please wait...",f=U.mainLoop.remainingBlockers,v=U.mainLoop.expectedBlockers;f?f<v?t.setStatus(l+" ("+(v-f)+"/"+v+")"):t.setStatus(l):t.setStatus("")}},runIter:function(l){if(!T){if(t.preMainLoop){var f=t.preMainLoop();if(f===!1)return}ie(l),t.postMainLoop&&t.postMainLoop()}}},isFullscreen:!1,pointerLock:!1,moduleContextCreatedCallbacks:[],workers:[],init:function(){if(t.preloadPlugins||(t.preloadPlugins=[]),U.initted)return;U.initted=!0;try{new Blob,U.hasBlobConstructor=!0}catch{U.hasBlobConstructor=!1,b("warning: no blob constructor, cannot create blobs with mimetypes")}U.BlobBuilder=typeof MozBlobBuilder<"u"?MozBlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:U.hasBlobConstructor?null:b("warning: no BlobBuilder"),U.URLObject=typeof window<"u"?window.URL?window.URL:window.webkitURL:void 0,!t.noImageDecoding&&typeof U.URLObject>"u"&&(b("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."),t.noImageDecoding=!0);var l={};l.canHandle=function(F){return!t.noImageDecoding&&/\.(jpg|jpeg|png|bmp)$/i.test(F)},l.handle=function(F,z,W,ue){var xe=null;if(U.hasBlobConstructor)try{xe=new Blob([F],{type:U.getMimetype(z)}),xe.size!==F.length&&(xe=new Blob([new Uint8Array(F).buffer],{type:U.getMimetype(z)}))}catch(Ae){Be("Blob constructor present but fails: "+Ae+"; falling back to blob builder")}if(!xe){var De=new U.BlobBuilder;De.append(new Uint8Array(F).buffer),xe=De.getBlob()}var Ie=U.URLObject.createObjectURL(xe),Pe=new Image;Pe.onload=()=>{H(Pe.complete,"Image "+z+" could not be decoded");var Ae=document.createElement("canvas");Ae.width=Pe.width,Ae.height=Pe.height;var We=Ae.getContext("2d");We.drawImage(Pe,0,0),U.URLObject.revokeObjectURL(Ie),W&&W(F)},Pe.onerror=Ae=>{E("Image "+Ie+" could not be decoded"),ue&&ue()},Pe.src=Ie},t.preloadPlugins.push(l);var f={};f.canHandle=function(F){return!t.noAudioDecoding&&F.substr(-4)in{".ogg":1,".wav":1,".mp3":1}},f.handle=function(F,z,W,ue){var xe=!1;function De(Ut){xe||(xe=!0,W&&W(F))}function Ie(){xe||(xe=!0,new Audio,ue&&ue())}if(U.hasBlobConstructor){try{var Pe=new Blob([F],{type:U.getMimetype(z)})}catch{return Ie()}var Ae=U.URLObject.createObjectURL(Pe),We=new Audio;We.addEventListener("canplaythrough",()=>De(),!1),We.onerror=function(lt){if(xe)return;b("warning: browser could not fully decode audio "+z+", trying slower base64 approach");function Ct(Bt){for(var en="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",yi="=",Vt="",Pn=0,ht=0,lu=0;lu<Bt.length;lu++)for(Pn=Pn<<8|Bt[lu],ht+=8;ht>=6;){var $v=Pn>>ht-6&63;ht-=6,Vt+=en[$v]}return ht==2?(Vt+=en[(Pn&3)<<4],Vt+=yi+yi):ht==4&&(Vt+=en[(Pn&15)<<2],Vt+=yi),Vt}We.src="data:audio/x-"+z.substr(-3)+";base64,"+Ct(F),De()},We.src=Ae,Oe(function(){De()},1e4)}else return Ie()},t.preloadPlugins.push(f);function v(){U.pointerLock=document.pointerLockElement===t.canvas||document.mozPointerLockElement===t.canvas||document.webkitPointerLockElement===t.canvas||document.msPointerLockElement===t.canvas}var S=t.canvas;S&&(S.requestPointerLock=S.requestPointerLock||S.mozRequestPointerLock||S.webkitRequestPointerLock||S.msRequestPointerLock||(()=>{}),S.exitPointerLock=document.exitPointerLock||document.mozExitPointerLock||document.webkitExitPointerLock||document.msExitPointerLock||(()=>{}),S.exitPointerLock=S.exitPointerLock.bind(document),document.addEventListener("pointerlockchange",v,!1),document.addEventListener("mozpointerlockchange",v,!1),document.addEventListener("webkitpointerlockchange",v,!1),document.addEventListener("mspointerlockchange",v,!1),t.elementPointerLock&&S.addEventListener("click",C=>{!U.pointerLock&&t.canvas.requestPointerLock&&(t.canvas.requestPointerLock(),C.preventDefault())},!1))},handledByPreloadPlugin:function(l,f,v,S){U.init();var C=!1;return t.preloadPlugins.forEach(function(F){C||F.canHandle(f)&&(F.handle(l,f,v,S),C=!0)}),C},createContext:function(l,f,v,S){if(f&&t.ctx&&l==t.canvas)return t.ctx;var C,F;if(f){var z={antialias:!1,alpha:!1,majorVersion:1};if(S)for(var W in S)z[W]=S[W];typeof GL<"u"&&(F=GL.createContext(l,z),F&&(C=GL.getContext(F).GLctx))}else C=l.getContext("2d");return C?(v&&(f||H(typeof GLctx>"u","cannot set in module if GLctx is used, but we are a non-GL context that would replace it"),t.ctx=C,f&&GL.makeContextCurrent(F),t.useWebGL=f,U.moduleContextCreatedCallbacks.forEach(function(ue){ue()}),U.init()),C):null},destroyContext:function(l,f,v){},fullscreenHandlersInstalled:!1,lockPointer:void 0,resizeCanvas:void 0,requestFullscreen:function(l,f){U.lockPointer=l,U.resizeCanvas=f,typeof U.lockPointer>"u"&&(U.lockPointer=!0),typeof U.resizeCanvas>"u"&&(U.resizeCanvas=!1);var v=t.canvas;function S(){U.isFullscreen=!1;var F=v.parentNode;(document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement)===F?(v.exitFullscreen=U.exitFullscreen,U.lockPointer&&v.requestPointerLock(),U.isFullscreen=!0,U.resizeCanvas?U.setFullscreenCanvasSize():U.updateCanvasDimensions(v)):(F.parentNode.insertBefore(v,F),F.parentNode.removeChild(F),U.resizeCanvas?U.setWindowedCanvasSize():U.updateCanvasDimensions(v)),t.onFullScreen&&t.onFullScreen(U.isFullscreen),t.onFullscreen&&t.onFullscreen(U.isFullscreen)}U.fullscreenHandlersInstalled||(U.fullscreenHandlersInstalled=!0,document.addEventListener("fullscreenchange",S,!1),document.addEventListener("mozfullscreenchange",S,!1),document.addEventListener("webkitfullscreenchange",S,!1),document.addEventListener("MSFullscreenChange",S,!1));var C=document.createElement("div");v.parentNode.insertBefore(C,v),C.appendChild(v),C.requestFullscreen=C.requestFullscreen||C.mozRequestFullScreen||C.msRequestFullscreen||(C.webkitRequestFullscreen?()=>C.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):null)||(C.webkitRequestFullScreen?()=>C.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):null),C.requestFullscreen()},exitFullscreen:function(){if(!U.isFullscreen)return!1;var l=document.exitFullscreen||document.cancelFullScreen||document.mozCancelFullScreen||document.msExitFullscreen||document.webkitCancelFullScreen||function(){};return l.apply(document,[]),!0},nextRAF:0,fakeRequestAnimationFrame:function(l){var f=Date.now();if(U.nextRAF===0)U.nextRAF=f+1e3/60;else for(;f+2>=U.nextRAF;)U.nextRAF+=1e3/60;var v=Math.max(U.nextRAF-f,0);setTimeout(l,v)},requestAnimationFrame:function(l){if(typeof requestAnimationFrame=="function"){requestAnimationFrame(l);return}var f=U.fakeRequestAnimationFrame;f(l)},safeSetTimeout:function(l){return Oe(l)},safeRequestAnimationFrame:function(l){return U.requestAnimationFrame(function(){ie(l)})},getMimetype:function(l){return{jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",bmp:"image/bmp",ogg:"audio/ogg",wav:"audio/wav",mp3:"audio/mpeg"}[l.substr(l.lastIndexOf(".")+1)]},getUserMedia:function(l){window.getUserMedia||(window.getUserMedia=navigator.getUserMedia||navigator.mozGetUserMedia),window.getUserMedia(l)},getMovementX:function(l){return l.movementX||l.mozMovementX||l.webkitMovementX||0},getMovementY:function(l){return l.movementY||l.mozMovementY||l.webkitMovementY||0},getMouseWheelDelta:function(l){var f=0;switch(l.type){case"DOMMouseScroll":f=l.detail/3;break;case"mousewheel":f=l.wheelDelta/120;break;case"wheel":switch(f=l.deltaY,l.deltaMode){case 0:f/=100;break;case 1:f/=3;break;case 2:f*=80;break;default:throw"unrecognized mouse wheel delta mode: "+l.deltaMode}break;default:throw"unrecognized mouse wheel event: "+l.type}return f},mouseX:0,mouseY:0,mouseMovementX:0,mouseMovementY:0,touches:{},lastTouches:{},calculateMouseEvent:function(l){if(U.pointerLock)l.type!="mousemove"&&"mozMovementX"in l?U.mouseMovementX=U.mouseMovementY=0:(U.mouseMovementX=U.getMovementX(l),U.mouseMovementY=U.getMovementY(l)),typeof SDL<"u"?(U.mouseX=SDL.mouseX+U.mouseMovementX,U.mouseY=SDL.mouseY+U.mouseMovementY):(U.mouseX+=U.mouseMovementX,U.mouseY+=U.mouseMovementY);else{var f=t.canvas.getBoundingClientRect(),v=t.canvas.width,S=t.canvas.height,C=typeof window.scrollX<"u"?window.scrollX:window.pageXOffset,F=typeof window.scrollY<"u"?window.scrollY:window.pageYOffset;if(l.type==="touchstart"||l.type==="touchend"||l.type==="touchmove"){var z=l.touch;if(z===void 0)return;var W=z.pageX-(C+f.left),ue=z.pageY-(F+f.top);W=W*(v/f.width),ue=ue*(S/f.height);var xe={x:W,y:ue};if(l.type==="touchstart")U.lastTouches[z.identifier]=xe,U.touches[z.identifier]=xe;else if(l.type==="touchend"||l.type==="touchmove"){var De=U.touches[z.identifier];De||(De=xe),U.lastTouches[z.identifier]=De,U.touches[z.identifier]=xe}return}var Ie=l.pageX-(C+f.left),Pe=l.pageY-(F+f.top);Ie=Ie*(v/f.width),Pe=Pe*(S/f.height),U.mouseMovementX=Ie-U.mouseX,U.mouseMovementY=Pe-U.mouseY,U.mouseX=Ie,U.mouseY=Pe}},resizeListeners:[],updateResizeListeners:function(){var l=t.canvas;U.resizeListeners.forEach(function(f){f(l.width,l.height)})},setCanvasSize:function(l,f,v){var S=t.canvas;U.updateCanvasDimensions(S,l,f),v||U.updateResizeListeners()},windowedWidth:0,windowedHeight:0,setFullscreenCanvasSize:function(){if(typeof SDL<"u"){var l=ee[SDL.screen>>2];l=l|8388608,Z[SDL.screen>>2]=l}U.updateCanvasDimensions(t.canvas),U.updateResizeListeners()},setWindowedCanvasSize:function(){if(typeof SDL<"u"){var l=ee[SDL.screen>>2];l=l&-8388609,Z[SDL.screen>>2]=l}U.updateCanvasDimensions(t.canvas),U.updateResizeListeners()},updateCanvasDimensions:function(l,f,v){f&&v?(l.widthNative=f,l.heightNative=v):(f=l.widthNative,v=l.heightNative);var S=f,C=v;if(t.forcedAspectRatio&&t.forcedAspectRatio>0&&(S/C<t.forcedAspectRatio?S=Math.round(C*t.forcedAspectRatio):C=Math.round(S/t.forcedAspectRatio)),(document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement)===l.parentNode&&typeof screen<"u"){var F=Math.min(screen.width/S,screen.height/C);S=Math.round(S*F),C=Math.round(C*F)}U.resizeCanvas?(l.width!=S&&(l.width=S),l.height!=C&&(l.height=C),typeof l.style<"u"&&(l.style.removeProperty("width"),l.style.removeProperty("height"))):(l.width!=f&&(l.width=f),l.height!=v&&(l.height=v),typeof l.style<"u"&&(S!=f||C!=v?(l.style.setProperty("width",S+"px","important"),l.style.setProperty("height",C+"px","important")):(l.style.removeProperty("width"),l.style.removeProperty("height"))))}};function Ge(l,f){return Le.handleSleep(v=>{var S=de(l),C=de(f);C=O.resolve(_.cwd(),C);var F=Me.dirname(C);_.createPreloadedFile(F,Me.basename(C),S,!0,!0,v,v,!1,!1,()=>_.mkdirTree(F))})}function nt(l){try{var f=Fe.getStreamFromFD(l);return _.close(f),0}catch(v){if(typeof _>"u"||!(v instanceof _.ErrnoError))throw v;return v.errno}}function Ze(l,f,v,S){for(var C=0,F=0;F<v;F++){var z=ee[f>>2],W=ee[f+4>>2];f+=8;var ue=_.read(l,V,z,W,S);if(ue<0)return-1;if(C+=ue,ue<W)break}return C}function Qe(l,f,v,S){try{var C=Fe.getStreamFromFD(l),F=Ze(C,f,v);return ee[S>>2]=F,0}catch(z){if(typeof _>"u"||!(z instanceof _.ErrnoError))throw z;return z.errno}}function dt(l,f){return f+2097152>>>0<4194305-!!l?(l>>>0)+f*4294967296:NaN}function vi(l,f,v,S,C){try{var F=dt(f,v);if(isNaN(F))return 61;var z=Fe.getStreamFromFD(l);return _.llseek(z,F,S),Ce=[z.position>>>0,(se=z.position,+Math.abs(se)>=1?se>0?(Math.min(+Math.floor(se/4294967296),4294967295)|0)>>>0:~~+Math.ceil((se-+(~~se>>>0))/4294967296)>>>0:0)],Z[C>>2]=Ce[0],Z[C+4>>2]=Ce[1],z.getdents&&F===0&&S===0&&(z.getdents=null),0}catch(W){if(typeof _>"u"||!(W instanceof _.ErrnoError))throw W;return W.errno}}function Vi(l,f,v,S){for(var C=0,F=0;F<v;F++){var z=ee[f>>2],W=ee[f+4>>2];f+=8;var ue=_.write(l,V,z,W,S);if(ue<0)return-1;C+=ue}return C}function Hi(l,f,v,S){try{var C=Fe.getStreamFromFD(l),F=Vi(C,f,v);return ee[S>>2]=F,0}catch(z){if(typeof _>"u"||!(z instanceof _.ErrnoError))throw z;return z.errno}}function Ln(l){}var et=Ln;typeof TextDecoder<"u"&&new TextDecoder("utf-16le");function _i(l){var f=t["_"+l];return f}function vt(l,f,v,S,C){var F={string:lt=>{var Ct=0;if(lt!=null&&lt!==0){var Bt=(lt.length<<2)+1;Ct=au(Bt),ae(lt,Ct,Bt)}return Ct},array:lt=>{var Ct=au(lt.length);return we(lt,Ct),Ct}};function z(lt){return f==="string"?de(lt):f==="boolean"?Boolean(lt):lt}var W=_i(l),ue=[],xe=0;if(S)for(var De=0;De<S.length;De++){var Ie=F[v[De]];Ie?(xe===0&&(xe=ns()),ue[De]=Ie(S[De])):ue[De]=S[De]}var Pe=Le.currData,Ae=W.apply(null,ue);function We(lt){return xe!==0&&Cd(xe),z(lt)}var Ut=C&&C.async;return Le.currData!=Pe?Le.whenDone().then(We):(Ae=We(Ae),Ut?Promise.resolve(Ae):Ae)}function cn(l,f,v,S){v=v||[];var C=v.every(z=>z==="number"||z==="boolean"),F=f!=="string";return F&&C&&!S?_i(l):function(){return vt(l,f,v,arguments,S)}}function xn(l){try{return l()}catch(f){je(f)}}var Le={State:{Normal:0,Unwinding:1,Rewinding:2,Disabled:3},state:0,StackSize:4096,currData:null,handleSleepReturnValue:0,exportCallStack:[],callStackNameToId:{},callStackIdToName:{},callStackId:0,asyncPromiseHandlers:null,sleepCallbacks:[],getCallStackId:function(l){var f=Le.callStackNameToId[l];return f===void 0&&(f=Le.callStackId++,Le.callStackNameToId[l]=f,Le.callStackIdToName[f]=l),f},instrumentWasmImports:function(l){var f=["env.invoke_*","env.emscripten_sleep","env.emscripten_wget","env.emscripten_wget_data","env.emscripten_idb_load","env.emscripten_idb_store","env.emscripten_idb_delete","env.emscripten_idb_exists","env.emscripten_idb_load_blob","env.emscripten_idb_store_blob","env.SDL_Delay","env.emscripten_scan_registers","env.emscripten_lazy_load_code","env.emscripten_fiber_swap","wasi_snapshot_preview1.fd_sync","env.__wasi_fd_sync","env._emval_await","env._dlopen_js","env.__asyncjs__*"].map(S=>S.split(".")[1]);for(var v in l)(function(S){var C=l[S];C.sig,typeof C=="function"&&(f.indexOf(S)>=0||S.startsWith("__asyncjs__"))})(v)},instrumentWasmExports:function(l){var f={};for(var v in l)(function(S){var C=l[S];typeof C=="function"?f[S]=function(){Le.exportCallStack.push(S);try{return C.apply(null,arguments)}finally{if(!T){var F=Le.exportCallStack.pop();H(F===S),Le.maybeStopUnwind()}}}:f[S]=C})(v);return f},maybeStopUnwind:function(){Le.currData&&Le.state===Le.State.Unwinding&&Le.exportCallStack.length===0&&(Le.state=Le.State.Normal,xn(Ld),typeof Fibers<"u"&&Fibers.trampoline())},whenDone:function(){return new Promise((l,f)=>{Le.asyncPromiseHandlers={resolve:l,reject:f}})},allocateData:function(){var l=Kr(12+Le.StackSize);return Le.setDataHeader(l,l+12,Le.StackSize),Le.setDataRewindFunc(l),l},setDataHeader:function(l,f,v){Z[l>>2]=f,Z[l+4>>2]=f+v},setDataRewindFunc:function(l){var f=Le.exportCallStack[0],v=Le.getCallStackId(f);Z[l+8>>2]=v},getDataRewindFunc:function(l){var f=Z[l+8>>2],v=Le.callStackIdToName[f],S=t.asm[v];return S},doRewind:function(l){var f=Le.getDataRewindFunc(l);return f()},handleSleep:function(l){if(!T){if(Le.state===Le.State.Normal){var f=!1,v=!1;l(S=>{if(!T&&(Le.handleSleepReturnValue=S||0,f=!0,!!v)){Le.state=Le.State.Rewinding,xn(()=>Pd(Le.currData)),typeof U<"u"&&U.mainLoop.func&&U.mainLoop.resume();var C,F=!1;try{C=Le.doRewind(Le.currData)}catch(ue){C=ue,F=!0}var z=!1;if(!Le.currData){var W=Le.asyncPromiseHandlers;W&&(Le.asyncPromiseHandlers=null,(F?W.reject:W.resolve)(C),z=!0)}if(F&&!z)throw C}}),v=!0,f||(Le.state=Le.State.Unwinding,Le.currData=Le.allocateData(),typeof U<"u"&&U.mainLoop.func&&U.mainLoop.pause(),xn(()=>Ad(Le.currData)))}else Le.state===Le.State.Rewinding?(Le.state=Le.State.Normal,xn(Dd),qt(Le.currData),Le.currData=null,Le.sleepCallbacks.forEach(S=>ie(S))):je("invalid state: "+Le.state);return Le.handleSleepReturnValue}},handleAsync:function(l){return Le.handleSleep(f=>{l().then(f)})}},$r=function(l,f,v,S){l||(l=this),this.parent=l,this.mount=l.mount,this.mounted=null,this.id=_.nextInode++,this.name=f,this.mode=v,this.node_ops={},this.stream_ops={},this.rdev=S},Tt=365,ai=146;Object.defineProperties($r.prototype,{read:{get:function(){return(this.mode&Tt)===Tt},set:function(l){l?this.mode|=Tt:this.mode&=~Tt}},write:{get:function(){return(this.mode&ai)===ai},set:function(l){l?this.mode|=ai:this.mode&=~ai}},isFolder:{get:function(){return _.isDir(this.mode)}},isDevice:{get:function(){return _.isChrdev(this.mode)}}}),_.FSNode=$r,_.staticInit(),t.FS_createPath=_.createPath,t.FS_createDataFile=_.createDataFile,t.FS_createPreloadedFile=_.createPreloadedFile,t.FS_unlink=_.unlink,t.FS_createLazyFile=_.createLazyFile,t.FS_createDevice=_.createDevice,t.requestFullscreen=function(f,v){U.requestFullscreen(f,v)},t.requestAnimationFrame=function(f){U.requestAnimationFrame(f)},t.setCanvasSize=function(f,v,S){U.setCanvasSize(f,v,S)},t.pauseMainLoop=function(){U.mainLoop.pause()},t.resumeMainLoop=function(){U.mainLoop.resume()},t.getUserMedia=function(){U.getUserMedia()},t.createContext=function(f,v,S,C){return U.createContext(f,v,S,C)};var Zr={__assert_fail:_e,__syscall_fcntl64:si,__syscall_fstat64:ft,__syscall_ioctl:Hn,__syscall_lstat64:un,__syscall_newfstatat:iu,__syscall_openat:ts,__syscall_stat64:oa,emscripten_memcpy_big:ru,emscripten_resize_heap:D,emscripten_wget:Ge,fd_close:nt,fd_read:Qe,fd_seek:vi,fd_write:Hi,setTempRet0:et};me(),t.___wasm_call_ctors=function(){return(t.___wasm_call_ctors=t.asm.__wasm_call_ctors).apply(null,arguments)},t._version=function(){return(t._version=t.asm.version).apply(null,arguments)},t._create_file_info=function(){return(t._create_file_info=t.asm.create_file_info).apply(null,arguments)},t._free_file_info=function(){return(t._free_file_info=t.asm.free_file_info).apply(null,arguments)},t._read_frame=function(){return(t._read_frame=t.asm.read_frame).apply(null,arguments)},t._is_keyframe=function(){return(t._is_keyframe=t.asm.is_keyframe).apply(null,arguments)},t._find_previous_keyframe=function(){return(t._find_previous_keyframe=t.asm.find_previous_keyframe).apply(null,arguments)},t._frame_vertices=function(){return(t._frame_vertices=t.asm.frame_vertices).apply(null,arguments)},t._frame_vertices_sz=function(){return(t._frame_vertices_sz=t.asm.frame_vertices_sz).apply(null,arguments)},t._frame_uvs_sz=function(){return(t._frame_uvs_sz=t.asm.frame_uvs_sz).apply(null,arguments)},t._frame_i=function(){return(t._frame_i=t.asm.frame_i).apply(null,arguments)},t._frame_i_sz=function(){return(t._frame_i_sz=t.asm.frame_i_sz).apply(null,arguments)},t._frame_data_ptr=function(){return(t._frame_data_ptr=t.asm.frame_data_ptr).apply(null,arguments)},t._frame_vp_offset=function(){return(t._frame_vp_offset=t.asm.frame_vp_offset).apply(null,arguments)},t._frame_vp_copied=function(){return(t._frame_vp_copied=t.asm.frame_vp_copied).apply(null,arguments)},t._frame_uvs_copied=function(){return(t._frame_uvs_copied=t.asm.frame_uvs_copied).apply(null,arguments)},t._frame_indices_copied=function(){return(t._frame_indices_copied=t.asm.frame_indices_copied).apply(null,arguments)};var qt=t._free=function(){return(qt=t._free=t.asm.free).apply(null,arguments)},Kr=t._malloc=function(){return(Kr=t._malloc=t.asm.malloc).apply(null,arguments)},sa=t.___errno_location=function(){return(sa=t.___errno_location=t.asm.__errno_location).apply(null,arguments)};t._emscripten_stack_set_limits=function(){return(t._emscripten_stack_set_limits=t.asm.emscripten_stack_set_limits).apply(null,arguments)},t._emscripten_stack_get_base=function(){return(t._emscripten_stack_get_base=t.asm.emscripten_stack_get_base).apply(null,arguments)},t._emscripten_stack_get_end=function(){return(t._emscripten_stack_get_end=t.asm.emscripten_stack_get_end).apply(null,arguments)};var ns=t.stackSave=function(){return(ns=t.stackSave=t.asm.stackSave).apply(null,arguments)},Cd=t.stackRestore=function(){return(Cd=t.stackRestore=t.asm.stackRestore).apply(null,arguments)},au=t.stackAlloc=function(){return(au=t.stackAlloc=t.asm.stackAlloc).apply(null,arguments)};t.dynCall_vii=function(){return(t.dynCall_vii=t.asm.dynCall_vii).apply(null,arguments)},t.dynCall_jiji=function(){return(t.dynCall_jiji=t.asm.dynCall_jiji).apply(null,arguments)},t.dynCall_iiii=function(){return(t.dynCall_iiii=t.asm.dynCall_iiii).apply(null,arguments)},t.dynCall_ii=function(){return(t.dynCall_ii=t.asm.dynCall_ii).apply(null,arguments)},t.dynCall_iidiiii=function(){return(t.dynCall_iidiiii=t.asm.dynCall_iidiiii).apply(null,arguments)};var Ad=t._asyncify_start_unwind=function(){return(Ad=t._asyncify_start_unwind=t.asm.asyncify_start_unwind).apply(null,arguments)},Ld=t._asyncify_stop_unwind=function(){return(Ld=t._asyncify_stop_unwind=t.asm.asyncify_stop_unwind).apply(null,arguments)},Pd=t._asyncify_start_rewind=function(){return(Pd=t._asyncify_start_rewind=t.asm.asyncify_start_rewind).apply(null,arguments)},Dd=t._asyncify_stop_rewind=function(){return(Dd=t._asyncify_stop_rewind=t.asm.asyncify_stop_rewind).apply(null,arguments)};t.addRunDependency=kt,t.removeRunDependency=at,t.FS_createPath=_.createPath,t.FS_createDataFile=_.createDataFile,t.FS_createPreloadedFile=_.createPreloadedFile,t.FS_createLazyFile=_.createLazyFile,t.FS_createDevice=_.createDevice,t.FS_unlink=_.unlink,t.print=E,t.printErr=b,t.ccall=vt,t.cwrap=cn,t.FS=_;var aa;gt=function l(){aa||Rd(),aa||(gt=l)};function Rd(l){if(rt>0||(Ne(),rt>0))return;function f(){aa||(aa=!0,t.calledRun=!0,!T&&(Ue(),i(t),t.onRuntimeInitialized&&t.onRuntimeInitialized(),be()))}t.setStatus?(t.setStatus("Running..."),setTimeout(function(){setTimeout(function(){t.setStatus("")},1),f()},1)):f()}if(t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.pop()();return Rd(),t.ready}})();const oi="number",tu="boolean",im="string";var Wv=[],Ve={initialised:!1,initialising:!1};async function mE(){if(Ve.initialised){console.warn("Cannot initialise, Module is already initialised");return}if(Ve.initialising){console.warn("Cannot initialise, Module is already being initialised");return}console.debug("Initialising Module"),Ve.initialising=!0;let n=-1;return await new Promise(function(e,t){try{Ve.onRuntimeInitialized=i=>{var r=Ve.ccall("version",[oi]);console.log(Ve),e(r)},pE(Ve)}catch(i){t(i)}}).then(e=>{console.log("version.minor="+e),Ve.initialised=!0,Ve.initialising=!1,n=e}).catch(e=>{console.error(e),Ve.initialising=!1}),n}function gE(n,e){return Ve.initialised?Ve.ccall("create_file_info",tu,[im,im],[n,e]):Ot()}async function vE(n,e){if(!Ve.initialised)return Ot();var t=!1;return await Bi(()=>gE(n,e),i=>t=i,i=>console.error(i)),Wv=[n,e],t}function _E(){if(!Ve.initialised)return Ot();var n=Ve.ccall("free_file_info",tu);return Wv.forEach(e=>jv(e)),n}function jv(n){let e=Ve.FS.analyzePath(n),t=e.parentPath;e.object.isFolder&&!e.isRoot?Ve.FS.rmdir(n):Ve.FS.unlink(n),Ve.FS.readdir(t).length>2||jv(t)}function yE(n){return Ve.initialised?Ve.ccall("read_frame",tu,[oi],[n]):Ot()}async function rm(n){if(!Ve.initialised)return Ot();var e=!1;return await Bi(()=>yE(n),t=>e=t,t=>console.error(t)),e}function xE(n){return Ve.initialised?Ve.ccall("is_keyframe",tu,[oi],[n]):Ot()}async function wE(n){if(!Ve.initialised)return Ot();var e=!1;return await Bi(()=>xE(n),t=>e=t,t=>console.error(t)),e}function SE(n){return Ve.initialised?Ve.ccall("find_previous_keyframe",oi,[oi],[n]):Ot()}async function ME(n){if(!Ve.initialised)return Ot();var e=0;return await Bi(()=>SE(n),t=>e=t,t=>console.error(t)),e}function EE(){return Ve.initialised?Ve.ccall("frame_vertices_sz",oi):Ot()}async function bE(){if(!Ve.initialised)return Ot();var n=0;return await Bi(()=>EE(),e=>n=e,e=>console.error(e)),n}function TE(){return Ve.initialised?Ve.ccall("frame_uvs_sz",oi):Ot()}function CE(){return Ve.initialised?Ve.ccall("frame_i_sz",oi):Ot()}async function AE(){if(!Ve.initialised)return Ot();var n=0;return await Bi(()=>CE(),e=>n=e,e=>console.error(e)),n}async function LE(){if(!Ve.initialised)return Ot();var n=[];return await Bi(async function(){var e=await bE(),t=Ve.ccall("frame_vp_copied",oi);return new Float32Array(Ve.HEAP8.buffer,t,e/4)},e=>n=e,e=>console.error(e)),n}function PE(){if(!Ve.initialised)return Ot();var n=TE(),e=Ve.ccall("frame_uvs_copied",oi);return new Float32Array(Ve.HEAP8.buffer,e,n/4)}async function om(){if(!Ve.initialised)return Ot();var n=[];return await Bi(()=>PE(),e=>n=e,e=>console.error(e)),n}async function sm(){if(!Ve.initialised)return Ot();var n=[];return await Bi(async function(){var e=await AE(),t=Ve.ccall("frame_indices_copied",oi);return new Uint16Array(Ve.HEAP8.buffer,t,e/2)},e=>n=e,e=>console.error(e)),n}function Xv(){return Ve.initialised}async function Bi(n,e,t){await new Promise(function(i,r){try{var o=n();i(o)}catch(s){r(s)}}).then(i=>e(i)).catch(i=>t(i))}function Ot(){return console.warn("Module is not initialised"),!1}const DE="video",RE="__volo__tex";var yt,Il=()=>{},Ed=!1,Mf=30;function kE(){yt=document.createElement(DE),yt.id=RE}function FE(n,e){var t,i,r,o,s;if(yt==null){console.warn("video is not initialised, call init() first");return}yt.autoplay=(t=e==null?void 0:e.autoplay)!=null?t:!1,yt.muted=(i=e==null?void 0:e.muted)!=null?i:!0,yt.loop=(r=e==null?void 0:e.loop)!=null?r:!0,yt.preload=(o=e==null?void 0:e.preload)!=null?o:!0,yt.src=n,Mf=(s=e==null?void 0:e.fps)!=null?s:Mf}function IE(n){if(yt==null){console.warn("video is not initialised, call init() first");return}Il=function(){n(Math.trunc(yt.currentTime*Mf)),Ed&&yt.requestVideoFrameCallback(Il)}}function NE(){if(yt==null){console.warn("video is not initialised, call init() first");return}yt.play(),Ed=!0,yt.requestVideoFrameCallback(Il)}function zE(){if(yt==null){console.warn("video is not initialised, call init() first");return}yt==null||yt.pause(),Il=()=>{},Ed=!1,yt==null||yt.remove()}var qv=()=>{},am,mc,gc,Xa=!1,bd=!1,vc=-1,qa=-1;async function OE(){let n=await mE();return n>-1&&(kE(),console.log(Xv())),n}async function UE(n,e,t,i){await vE(n,e),FE(t,i),IE(async function(r){if(!!bd&&!!Xv()&&r!=qa){if(r!=qa+1&&console.warn("Frame jump from "+qa+" to "+r),Xa=await wE(r),!Xa){var o=await ME(r);o!=vc&&(console.warn("recovering key frame "+o),await rm(o),mc=await om(),gc=await sm(),vc=o)}await rm(r),am=await LE(),Xa&&(mc=await om(),gc=await sm(),vc=r),qa=r,qv(r,Xa,am,mc,gc)}})}function BE(n){qv=n}function VE(){NE(),bd=!0}function HE(){zE(),_E(),bd=!1}class GE{static createButton(e,t={}){const i=document.createElement("button");function r(){if(t.domOverlay===void 0){const h=document.createElement("div");h.style.display="none",document.body.appendChild(h);const x=document.createElementNS("http://www.w3.org/2000/svg","svg");x.setAttribute("width",38),x.setAttribute("height",38),x.style.position="absolute",x.style.right="20px",x.style.top="20px",x.addEventListener("click",function(){c.end()}),h.appendChild(x);const M=document.createElementNS("http://www.w3.org/2000/svg","path");M.setAttribute("d","M 12,12 L 28,28 M 28,12 12,28"),M.setAttribute("stroke","#fff"),M.setAttribute("stroke-width",2),x.appendChild(M),t.optionalFeatures===void 0&&(t.optionalFeatures=[]),t.optionalFeatures.push("dom-overlay"),t.domOverlay={root:h}}let c=null;async function d(h){h.addEventListener("end",p),e.xr.setReferenceSpaceType("local"),await e.xr.setSession(h),i.textContent="STOP AR",t.domOverlay.root.style.display="",c=h}function p(){c.removeEventListener("end",p),i.textContent="START AR",t.domOverlay.root.style.display="none",c=null}i.style.display="",i.style.cursor="pointer",i.style.left="calc(50% - 50px)",i.style.width="100px",i.textContent="START AR",i.onmouseenter=function(){i.style.opacity="1.0"},i.onmouseleave=function(){i.style.opacity="0.5"},i.onclick=function(){c===null?navigator.xr.requestSession("immersive-ar",t).then(d):c.end()}}function o(){i.style.display="",i.style.cursor="auto",i.style.left="calc(50% - 75px)",i.style.width="150px",i.onmouseenter=null,i.onmouseleave=null,i.onclick=null}function s(){o(),i.textContent="AR NOT SUPPORTED"}function a(c){o(),console.warn("Exception when trying to call xr.isSessionSupported",c),i.textContent="AR NOT ALLOWED"}function u(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return i.id="ARButton",i.style.display="none",u(i),navigator.xr.isSessionSupported("immersive-ar").then(function(c){c?r():s()}).catch(a),i;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",u(c),c}}}var Td={exports:{}},nu={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WE=$s.exports,jE=Symbol.for("react.element"),XE=Symbol.for("react.fragment"),qE=Object.prototype.hasOwnProperty,YE=WE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$E={key:!0,ref:!0,__self:!0,__source:!0};function Yv(n,e,t){var i,r={},o=null,s=null;t!==void 0&&(o=""+t),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)qE.call(e,i)&&!$E.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:jE,type:n,key:o,ref:s,props:r,_owner:YE.current}}nu.Fragment=XE;nu.jsx=Yv;nu.jsxs=Yv;(function(n){n.exports=nu})(Td);const Ji=Td.exports.jsx,ZE=Td.exports.jsxs;var ui={},fn={},lm;let Rn,bi,go,_c,Ya=null,yc=!1;const xc=3e4;var um,cm;function KE(){const n=new fE;$s.exports.useEffect(()=>{go=new In(50,window.innerWidth/window.innerHeight,.1,1e3),go.position.z=5;const u=document.getElementById("threeCanvas");Rn=new Gv({canvas:u,antialias:!0,alpha:!0}),Rn.setSize(window.innerWidth,window.innerHeight),Rn.xr.enabled=!0,document.body.appendChild(Rn.domElement),new hE(go,Rn.domElement);const c=Ls();document.body.appendChild(c.dom);const d=()=>{Rn.setAnimationLoop(a)};_c=Rn.xr.getController(0),_c.addEventListener("select",e),n.add(_c),bi=new pi(new Md(.15,.2,32).rotateX(-Math.PI/2),new Fl),bi.matrixAutoUpdate=!1,bi.visible=!1,n.add(bi);async function p(){await navigator.xr.isSessionSupported("immersive-ar")&&document.body.appendChild(GE.createButton(Rn,{requiredFeatures:["hit-test"]}))}p(),window.addEventListener("resize",t),d()},[]);function e(){bi.visible&&(n.getObjectByName(ui.name)||i(),bi.matrix.decompose(ui.position))}function t(){go.aspect=window.innerWidth/window.innerHeight,go.updateProjectionMatrix(),Rn.setSize(window.innerWidth,window.innerHeight)}async function i(){await OE(),lm=new dE(yt),yt.format=Tv,fn=new Ui,fn.name="vologram_geom",um=new Float32Array(xc*3),fn.setAttribute("position",new ti(um,3)),cm=new Float32Array(xc*2),fn.setAttribute("uv",new ni(cm,2));var u=new Uint16Array(xc);fn.setIndex(new xd(u,1));const c=new Fl({color:16777215,map:lm});ui=new pi(fn,c),ui.name="Vologram",ui.scale.x=.5,ui.scale.y=.5,ui.scale.z=.5,n.add(ui),await UE("/src/assets/calif/header.vols","/src/assets/calif/sequence_0.vols","/src/assets/calif/output.mp4"),BE(function(d,p,h,x,M){fn.index.array=M.slice(),fn.attributes.position.array=h.slice(),fn.attributes.uv.array=x.slice(),fn.index.needsUpdate=!0,fn.attributes.position.needsUpdate=!0,fn.attributes.uv.needsUpdate=!0}),VE()}function r(){console.log(n),console.debug(fn)}function o(){console.clear()}function s(){ui.remove(fn),n.remove(ui),HE()}function a(u,c){if(c){const d=Rn.xr.getReferenceSpace(),p=Rn.xr.getSession();if(yc===!1&&(p.requestReferenceSpace("viewer").then(function(h){p.requestHitTestSource({space:h}).then(function(x){Ya=x})}),p.addEventListener("end",function(){yc=!1,Ya=null}),yc=!0),Ya){const h=c.getHitTestResults(Ya);if(h.length){const x=h[0];bi.visible=!0,bi.matrix.fromArray(x.getPose(d).transform.matrix)}else bi.visible=!1}}Rn.render(n,go)}return ZE("div",{children:[Ji("button",{onClick:i,children:"Load OBJ"}),Ji("button",{onClick:r,children:"Print Scene"}),Ji("button",{onClick:s,children:"Stop Player"}),Ji("button",{onClick:o,children:"Clear Console"}),Ji("div",{children:Ji("canvas",{id:"threeCanvas"})})]})}wc.createRoot(document.getElementById("root")).render(Ji(d0.StrictMode,{children:Ji(KE,{})}));
