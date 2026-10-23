function yu(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(n,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();function _u(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Wo={exports:{}},Ea={},Vo={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xn=Symbol.for("react.element"),wu=Symbol.for("react.portal"),bu=Symbol.for("react.fragment"),ju=Symbol.for("react.strict_mode"),ku=Symbol.for("react.profiler"),Nu=Symbol.for("react.provider"),Su=Symbol.for("react.context"),Cu=Symbol.for("react.forward_ref"),Eu=Symbol.for("react.suspense"),Pu=Symbol.for("react.memo"),zu=Symbol.for("react.lazy"),vl=Symbol.iterator;function Du(e){return e===null||typeof e!="object"?null:(e=vl&&e[vl]||e["@@iterator"],typeof e=="function"?e:null)}var Ho={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qo=Object.assign,Go={};function Sr(e,t,r){this.props=e,this.context=t,this.refs=Go,this.updater=r||Ho}Sr.prototype.isReactComponent={};Sr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Sr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Qo(){}Qo.prototype=Sr.prototype;function ys(e,t,r){this.props=e,this.context=t,this.refs=Go,this.updater=r||Ho}var _s=ys.prototype=new Qo;_s.constructor=ys;qo(_s,Sr.prototype);_s.isPureReactComponent=!0;var xl=Array.isArray,Ko=Object.prototype.hasOwnProperty,ws={current:null},Yo={key:!0,ref:!0,__self:!0,__source:!0};function Xo(e,t,r){var n,i={},s=null,l=null;if(t!=null)for(n in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(s=""+t.key),t)Ko.call(t,n)&&!Yo.hasOwnProperty(n)&&(i[n]=t[n]);var o=arguments.length-2;if(o===1)i.children=r;else if(1<o){for(var c=Array(o),d=0;d<o;d++)c[d]=arguments[d+2];i.children=c}if(e&&e.defaultProps)for(n in o=e.defaultProps,o)i[n]===void 0&&(i[n]=o[n]);return{$$typeof:xn,type:e,key:s,ref:l,props:i,_owner:ws.current}}function Tu(e,t){return{$$typeof:xn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function bs(e){return typeof e=="object"&&e!==null&&e.$$typeof===xn}function Ou(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var yl=/\/+/g;function Ga(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ou(""+e.key):t.toString(36)}function Vn(e,t,r,n,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case xn:case wu:l=!0}}if(l)return l=e,i=i(l),e=n===""?"."+Ga(l,0):n,xl(i)?(r="",e!=null&&(r=e.replace(yl,"$&/")+"/"),Vn(i,t,r,"",function(d){return d})):i!=null&&(bs(i)&&(i=Tu(i,r+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(yl,"$&/")+"/")+e)),t.push(i)),1;if(l=0,n=n===""?".":n+":",xl(e))for(var o=0;o<e.length;o++){s=e[o];var c=n+Ga(s,o);l+=Vn(s,t,r,c,i)}else if(c=Du(e),typeof c=="function")for(e=c.call(e),o=0;!(s=e.next()).done;)s=s.value,c=n+Ga(s,o++),l+=Vn(s,t,r,c,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Sn(e,t,r){if(e==null)return e;var n=[],i=0;return Vn(e,n,"","",function(s){return t.call(r,s,i++)}),n}function Iu(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},Hn={transition:null},Ru={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:Hn,ReactCurrentOwner:ws};function Jo(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:Sn,forEach:function(e,t,r){Sn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Sn(e,function(){t++}),t},toArray:function(e){return Sn(e,function(t){return t})||[]},only:function(e){if(!bs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=Sr;A.Fragment=bu;A.Profiler=ku;A.PureComponent=ys;A.StrictMode=ju;A.Suspense=Eu;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ru;A.act=Jo;A.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=qo({},e.props),i=e.key,s=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,l=ws.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(c in t)Ko.call(t,c)&&!Yo.hasOwnProperty(c)&&(n[c]=t[c]===void 0&&o!==void 0?o[c]:t[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){o=Array(c);for(var d=0;d<c;d++)o[d]=arguments[d+2];n.children=o}return{$$typeof:xn,type:e.type,key:i,ref:s,props:n,_owner:l}};A.createContext=function(e){return e={$$typeof:Su,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Nu,_context:e},e.Consumer=e};A.createElement=Xo;A.createFactory=function(e){var t=Xo.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:Cu,render:e}};A.isValidElement=bs;A.lazy=function(e){return{$$typeof:zu,_payload:{_status:-1,_result:e},_init:Iu}};A.memo=function(e,t){return{$$typeof:Pu,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=Hn.transition;Hn.transition={};try{e()}finally{Hn.transition=t}};A.unstable_act=Jo;A.useCallback=function(e,t){return ge.current.useCallback(e,t)};A.useContext=function(e){return ge.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};A.useEffect=function(e,t){return ge.current.useEffect(e,t)};A.useId=function(){return ge.current.useId()};A.useImperativeHandle=function(e,t,r){return ge.current.useImperativeHandle(e,t,r)};A.useInsertionEffect=function(e,t){return ge.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return ge.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return ge.current.useMemo(e,t)};A.useReducer=function(e,t,r){return ge.current.useReducer(e,t,r)};A.useRef=function(e){return ge.current.useRef(e)};A.useState=function(e){return ge.current.useState(e)};A.useSyncExternalStore=function(e,t,r){return ge.current.useSyncExternalStore(e,t,r)};A.useTransition=function(){return ge.current.useTransition()};A.version="18.3.1";Vo.exports=A;var b=Vo.exports;const js=_u(b),Lu=yu({__proto__:null,default:js},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fu=b,Mu=Symbol.for("react.element"),Au=Symbol.for("react.fragment"),Bu=Object.prototype.hasOwnProperty,$u=Fu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Uu={key:!0,ref:!0,__self:!0,__source:!0};function Zo(e,t,r){var n,i={},s=null,l=null;r!==void 0&&(s=""+r),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(l=t.ref);for(n in t)Bu.call(t,n)&&!Uu.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:Mu,type:e,key:s,ref:l,props:i,_owner:$u.current}}Ea.Fragment=Au;Ea.jsx=Zo;Ea.jsxs=Zo;Wo.exports=Ea;var a=Wo.exports,bi={},ec={exports:{}},ze={},tc={exports:{}},rc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,F){var M=O.length;O.push(F);e:for(;0<M;){var J=M-1>>>1,ae=O[J];if(0<i(ae,F))O[J]=F,O[M]=ae,M=J;else break e}}function r(O){return O.length===0?null:O[0]}function n(O){if(O.length===0)return null;var F=O[0],M=O.pop();if(M!==F){O[0]=M;e:for(var J=0,ae=O.length,kn=ae>>>1;J<kn;){var Tt=2*(J+1)-1,qa=O[Tt],Ot=Tt+1,Nn=O[Ot];if(0>i(qa,M))Ot<ae&&0>i(Nn,qa)?(O[J]=Nn,O[Ot]=M,J=Ot):(O[J]=qa,O[Tt]=M,J=Tt);else if(Ot<ae&&0>i(Nn,M))O[J]=Nn,O[Ot]=M,J=Ot;else break e}}return F}function i(O,F){var M=O.sortIndex-F.sortIndex;return M!==0?M:O.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var l=Date,o=l.now();e.unstable_now=function(){return l.now()-o}}var c=[],d=[],h=1,f=null,u=3,w=!1,k=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(O){for(var F=r(d);F!==null;){if(F.callback===null)n(d);else if(F.startTime<=O)n(d),F.sortIndex=F.expirationTime,t(c,F);else break;F=r(d)}}function v(O){if(x=!1,g(O),!k)if(r(c)!==null)k=!0,Ge(j);else{var F=r(d);F!==null&&Ha(v,F.startTime-O)}}function j(O,F){k=!1,x&&(x=!1,p(_),_=-1),w=!0;var M=u;try{for(g(F),f=r(c);f!==null&&(!(f.expirationTime>F)||O&&!N());){var J=f.callback;if(typeof J=="function"){f.callback=null,u=f.priorityLevel;var ae=J(f.expirationTime<=F);F=e.unstable_now(),typeof ae=="function"?f.callback=ae:f===r(c)&&n(c),g(F)}else n(c);f=r(c)}if(f!==null)var kn=!0;else{var Tt=r(d);Tt!==null&&Ha(v,Tt.startTime-F),kn=!1}return kn}finally{f=null,u=M,w=!1}}var D=!1,y=null,_=-1,C=5,z=-1;function N(){return!(e.unstable_now()-z<C)}function L(){if(y!==null){var O=e.unstable_now();z=O;var F=!0;try{F=y(!0,O)}finally{F?P():(D=!1,y=null)}}else D=!1}var P;if(typeof m=="function")P=function(){m(L)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,U=$.port2;$.port1.onmessage=L,P=function(){U.postMessage(null)}}else P=function(){S(L,0)};function Ge(O){y=O,D||(D=!0,P())}function Ha(O,F){_=S(function(){O(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){k||w||(k=!0,Ge(j))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return u},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(O){switch(u){case 1:case 2:case 3:var F=3;break;default:F=u}var M=u;u=F;try{return O()}finally{u=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,F){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var M=u;u=O;try{return F()}finally{u=M}},e.unstable_scheduleCallback=function(O,F,M){var J=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?J+M:J):M=J,O){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=M+ae,O={id:h++,callback:F,priorityLevel:O,startTime:M,expirationTime:ae,sortIndex:-1},M>J?(O.sortIndex=M,t(d,O),r(c)===null&&O===r(d)&&(x?(p(_),_=-1):x=!0,Ha(v,M-J))):(O.sortIndex=ae,t(c,O),k||w||(k=!0,Ge(j))),O},e.unstable_shouldYield=N,e.unstable_wrapCallback=function(O){var F=u;return function(){var M=u;u=F;try{return O.apply(this,arguments)}finally{u=M}}}})(rc);tc.exports=rc;var Wu=tc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vu=b,Pe=Wu;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nc=new Set,Jr={};function Kt(e,t){xr(e,t),xr(e+"Capture",t)}function xr(e,t){for(Jr[e]=t,e=0;e<t.length;e++)nc.add(t[e])}var at=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ji=Object.prototype.hasOwnProperty,Hu=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_l={},wl={};function qu(e){return ji.call(wl,e)?!0:ji.call(_l,e)?!1:Hu.test(e)?wl[e]=!0:(_l[e]=!0,!1)}function Gu(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Qu(e,t,r,n){if(t===null||typeof t>"u"||Gu(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ve(e,t,r,n,i,s,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=l}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ce[t]=new ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var ks=/[\-:]([a-z])/g;function Ns(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ks,Ns);ce[t]=new ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ks,Ns);ce[t]=new ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ks,Ns);ce[t]=new ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ss(e,t,r,n){var i=ce.hasOwnProperty(t)?ce[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Qu(t,r,i,n)&&(r=null),n||i===null?qu(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var ot=Vu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Cn=Symbol.for("react.element"),er=Symbol.for("react.portal"),tr=Symbol.for("react.fragment"),Cs=Symbol.for("react.strict_mode"),ki=Symbol.for("react.profiler"),ac=Symbol.for("react.provider"),ic=Symbol.for("react.context"),Es=Symbol.for("react.forward_ref"),Ni=Symbol.for("react.suspense"),Si=Symbol.for("react.suspense_list"),Ps=Symbol.for("react.memo"),dt=Symbol.for("react.lazy"),sc=Symbol.for("react.offscreen"),bl=Symbol.iterator;function Dr(e){return e===null||typeof e!="object"?null:(e=bl&&e[bl]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,Qa;function Ar(e){if(Qa===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Qa=t&&t[1]||""}return`
`+Qa+e}var Ka=!1;function Ya(e,t){if(!e||Ka)return"";Ka=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var n=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){n=d}e.call(t.prototype)}else{try{throw Error()}catch(d){n=d}e()}}catch(d){if(d&&n&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=n.stack.split(`
`),l=i.length-1,o=s.length-1;1<=l&&0<=o&&i[l]!==s[o];)o--;for(;1<=l&&0<=o;l--,o--)if(i[l]!==s[o]){if(l!==1||o!==1)do if(l--,o--,0>o||i[l]!==s[o]){var c=`
`+i[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=o);break}}}finally{Ka=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Ar(e):""}function Ku(e){switch(e.tag){case 5:return Ar(e.type);case 16:return Ar("Lazy");case 13:return Ar("Suspense");case 19:return Ar("SuspenseList");case 0:case 2:case 15:return e=Ya(e.type,!1),e;case 11:return e=Ya(e.type.render,!1),e;case 1:return e=Ya(e.type,!0),e;default:return""}}function Ci(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case tr:return"Fragment";case er:return"Portal";case ki:return"Profiler";case Cs:return"StrictMode";case Ni:return"Suspense";case Si:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ic:return(e.displayName||"Context")+".Consumer";case ac:return(e._context.displayName||"Context")+".Provider";case Es:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ps:return t=e.displayName||null,t!==null?t:Ci(e.type)||"Memo";case dt:t=e._payload,e=e._init;try{return Ci(e(t))}catch{}}return null}function Yu(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ci(t);case 8:return t===Cs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function St(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function lc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Xu(e){var t=lc(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,s=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){n=""+l,s.call(this,l)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(l){n=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function En(e){e._valueTracker||(e._valueTracker=Xu(e))}function oc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=lc(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function ra(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ei(e,t){var r=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function jl(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=St(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function cc(e,t){t=t.checked,t!=null&&Ss(e,"checked",t,!1)}function Pi(e,t){cc(e,t);var r=St(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?zi(e,t.type,r):t.hasOwnProperty("defaultValue")&&zi(e,t.type,St(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function kl(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function zi(e,t,r){(t!=="number"||ra(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Br=Array.isArray;function pr(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+St(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Di(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Nl(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(E(92));if(Br(r)){if(1<r.length)throw Error(E(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:St(r)}}function dc(e,t){var r=St(t.value),n=St(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Sl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function uc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ti(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?uc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Pn,pc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Pn=Pn||document.createElement("div"),Pn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Pn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Zr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Wr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ju=["Webkit","ms","Moz","O"];Object.keys(Wr).forEach(function(e){Ju.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Wr[t]=Wr[e]})});function mc(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Wr.hasOwnProperty(e)&&Wr[e]?(""+t).trim():t+"px"}function fc(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=mc(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var Zu=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Oi(e,t){if(t){if(Zu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function Ii(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ri=null;function zs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Li=null,mr=null,fr=null;function Cl(e){if(e=wn(e)){if(typeof Li!="function")throw Error(E(280));var t=e.stateNode;t&&(t=Oa(t),Li(e.stateNode,e.type,t))}}function hc(e){mr?fr?fr.push(e):fr=[e]:mr=e}function gc(){if(mr){var e=mr,t=fr;if(fr=mr=null,Cl(e),t)for(e=0;e<t.length;e++)Cl(t[e])}}function vc(e,t){return e(t)}function xc(){}var Xa=!1;function yc(e,t,r){if(Xa)return e(t,r);Xa=!0;try{return vc(e,t,r)}finally{Xa=!1,(mr!==null||fr!==null)&&(xc(),gc())}}function en(e,t){var r=e.stateNode;if(r===null)return null;var n=Oa(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(E(231,t,typeof r));return r}var Fi=!1;if(at)try{var Tr={};Object.defineProperty(Tr,"passive",{get:function(){Fi=!0}}),window.addEventListener("test",Tr,Tr),window.removeEventListener("test",Tr,Tr)}catch{Fi=!1}function ep(e,t,r,n,i,s,l,o,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(r,d)}catch(h){this.onError(h)}}var Vr=!1,na=null,aa=!1,Mi=null,tp={onError:function(e){Vr=!0,na=e}};function rp(e,t,r,n,i,s,l,o,c){Vr=!1,na=null,ep.apply(tp,arguments)}function np(e,t,r,n,i,s,l,o,c){if(rp.apply(this,arguments),Vr){if(Vr){var d=na;Vr=!1,na=null}else throw Error(E(198));aa||(aa=!0,Mi=d)}}function Yt(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function _c(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function El(e){if(Yt(e)!==e)throw Error(E(188))}function ap(e){var t=e.alternate;if(!t){if(t=Yt(e),t===null)throw Error(E(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var s=i.alternate;if(s===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===r)return El(i),e;if(s===n)return El(i),t;s=s.sibling}throw Error(E(188))}if(r.return!==n.return)r=i,n=s;else{for(var l=!1,o=i.child;o;){if(o===r){l=!0,r=i,n=s;break}if(o===n){l=!0,n=i,r=s;break}o=o.sibling}if(!l){for(o=s.child;o;){if(o===r){l=!0,r=s,n=i;break}if(o===n){l=!0,n=s,r=i;break}o=o.sibling}if(!l)throw Error(E(189))}}if(r.alternate!==n)throw Error(E(190))}if(r.tag!==3)throw Error(E(188));return r.stateNode.current===r?e:t}function wc(e){return e=ap(e),e!==null?bc(e):null}function bc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=bc(e);if(t!==null)return t;e=e.sibling}return null}var jc=Pe.unstable_scheduleCallback,Pl=Pe.unstable_cancelCallback,ip=Pe.unstable_shouldYield,sp=Pe.unstable_requestPaint,Z=Pe.unstable_now,lp=Pe.unstable_getCurrentPriorityLevel,Ds=Pe.unstable_ImmediatePriority,kc=Pe.unstable_UserBlockingPriority,ia=Pe.unstable_NormalPriority,op=Pe.unstable_LowPriority,Nc=Pe.unstable_IdlePriority,Pa=null,Xe=null;function cp(e){if(Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(Pa,e,void 0,(e.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:pp,dp=Math.log,up=Math.LN2;function pp(e){return e>>>=0,e===0?32:31-(dp(e)/up|0)|0}var zn=64,Dn=4194304;function $r(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function sa(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,s=e.pingedLanes,l=r&268435455;if(l!==0){var o=l&~i;o!==0?n=$r(o):(s&=l,s!==0&&(n=$r(s)))}else l=r&~i,l!==0?n=$r(l):s!==0&&(n=$r(s));if(n===0)return 0;if(t!==0&&t!==n&&!(t&i)&&(i=n&-n,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Ve(t),i=1<<r,n|=e[r],t&=~i;return n}function mp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fp(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var l=31-Ve(s),o=1<<l,c=i[l];c===-1?(!(o&r)||o&n)&&(i[l]=mp(o,t)):c<=t&&(e.expiredLanes|=o),s&=~o}}function Ai(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Sc(){var e=zn;return zn<<=1,!(zn&4194240)&&(zn=64),e}function Ja(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function yn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ve(t),e[t]=r}function hp(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-Ve(r),s=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~s}}function Ts(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Ve(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var W=0;function Cc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ec,Os,Pc,zc,Dc,Bi=!1,Tn=[],vt=null,xt=null,yt=null,tn=new Map,rn=new Map,pt=[],gp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zl(e,t){switch(e){case"focusin":case"focusout":vt=null;break;case"dragenter":case"dragleave":xt=null;break;case"mouseover":case"mouseout":yt=null;break;case"pointerover":case"pointerout":tn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":rn.delete(t.pointerId)}}function Or(e,t,r,n,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:s,targetContainers:[i]},t!==null&&(t=wn(t),t!==null&&Os(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function vp(e,t,r,n,i){switch(t){case"focusin":return vt=Or(vt,e,t,r,n,i),!0;case"dragenter":return xt=Or(xt,e,t,r,n,i),!0;case"mouseover":return yt=Or(yt,e,t,r,n,i),!0;case"pointerover":var s=i.pointerId;return tn.set(s,Or(tn.get(s)||null,e,t,r,n,i)),!0;case"gotpointercapture":return s=i.pointerId,rn.set(s,Or(rn.get(s)||null,e,t,r,n,i)),!0}return!1}function Tc(e){var t=At(e.target);if(t!==null){var r=Yt(t);if(r!==null){if(t=r.tag,t===13){if(t=_c(r),t!==null){e.blockedOn=t,Dc(e.priority,function(){Pc(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=$i(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Ri=n,r.target.dispatchEvent(n),Ri=null}else return t=wn(r),t!==null&&Os(t),e.blockedOn=r,!1;t.shift()}return!0}function Dl(e,t,r){qn(e)&&r.delete(t)}function xp(){Bi=!1,vt!==null&&qn(vt)&&(vt=null),xt!==null&&qn(xt)&&(xt=null),yt!==null&&qn(yt)&&(yt=null),tn.forEach(Dl),rn.forEach(Dl)}function Ir(e,t){e.blockedOn===t&&(e.blockedOn=null,Bi||(Bi=!0,Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority,xp)))}function nn(e){function t(i){return Ir(i,e)}if(0<Tn.length){Ir(Tn[0],e);for(var r=1;r<Tn.length;r++){var n=Tn[r];n.blockedOn===e&&(n.blockedOn=null)}}for(vt!==null&&Ir(vt,e),xt!==null&&Ir(xt,e),yt!==null&&Ir(yt,e),tn.forEach(t),rn.forEach(t),r=0;r<pt.length;r++)n=pt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<pt.length&&(r=pt[0],r.blockedOn===null);)Tc(r),r.blockedOn===null&&pt.shift()}var hr=ot.ReactCurrentBatchConfig,la=!0;function yp(e,t,r,n){var i=W,s=hr.transition;hr.transition=null;try{W=1,Is(e,t,r,n)}finally{W=i,hr.transition=s}}function _p(e,t,r,n){var i=W,s=hr.transition;hr.transition=null;try{W=4,Is(e,t,r,n)}finally{W=i,hr.transition=s}}function Is(e,t,r,n){if(la){var i=$i(e,t,r,n);if(i===null)oi(e,t,n,oa,r),zl(e,n);else if(vp(i,e,t,r,n))n.stopPropagation();else if(zl(e,n),t&4&&-1<gp.indexOf(e)){for(;i!==null;){var s=wn(i);if(s!==null&&Ec(s),s=$i(e,t,r,n),s===null&&oi(e,t,n,oa,r),s===i)break;i=s}i!==null&&n.stopPropagation()}else oi(e,t,n,null,r)}}var oa=null;function $i(e,t,r,n){if(oa=null,e=zs(n),e=At(e),e!==null)if(t=Yt(e),t===null)e=null;else if(r=t.tag,r===13){if(e=_c(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return oa=e,null}function Oc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lp()){case Ds:return 1;case kc:return 4;case ia:case op:return 16;case Nc:return 536870912;default:return 16}default:return 16}}var ft=null,Rs=null,Gn=null;function Ic(){if(Gn)return Gn;var e,t=Rs,r=t.length,n,i="value"in ft?ft.value:ft.textContent,s=i.length;for(e=0;e<r&&t[e]===i[e];e++);var l=r-e;for(n=1;n<=l&&t[r-n]===i[s-n];n++);return Gn=i.slice(e,1<n?1-n:void 0)}function Qn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function On(){return!0}function Tl(){return!1}function De(e){function t(r,n,i,s,l){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(r=e[o],this[o]=r?r(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?On:Tl,this.isPropagationStopped=Tl,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=On)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=On)},persist:function(){},isPersistent:On}),t}var Cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ls=De(Cr),_n=Y({},Cr,{view:0,detail:0}),wp=De(_n),Za,ei,Rr,za=Y({},_n,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Rr&&(Rr&&e.type==="mousemove"?(Za=e.screenX-Rr.screenX,ei=e.screenY-Rr.screenY):ei=Za=0,Rr=e),Za)},movementY:function(e){return"movementY"in e?e.movementY:ei}}),Ol=De(za),bp=Y({},za,{dataTransfer:0}),jp=De(bp),kp=Y({},_n,{relatedTarget:0}),ti=De(kp),Np=Y({},Cr,{animationName:0,elapsedTime:0,pseudoElement:0}),Sp=De(Np),Cp=Y({},Cr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ep=De(Cp),Pp=Y({},Cr,{data:0}),Il=De(Pp),zp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Op(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Tp[e])?!!t[e]:!1}function Fs(){return Op}var Ip=Y({},_n,{key:function(e){if(e.key){var t=zp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Dp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fs,charCode:function(e){return e.type==="keypress"?Qn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rp=De(Ip),Lp=Y({},za,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rl=De(Lp),Fp=Y({},_n,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fs}),Mp=De(Fp),Ap=Y({},Cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bp=De(Ap),$p=Y({},za,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Up=De($p),Wp=[9,13,27,32],Ms=at&&"CompositionEvent"in window,Hr=null;at&&"documentMode"in document&&(Hr=document.documentMode);var Vp=at&&"TextEvent"in window&&!Hr,Rc=at&&(!Ms||Hr&&8<Hr&&11>=Hr),Ll=" ",Fl=!1;function Lc(e,t){switch(e){case"keyup":return Wp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rr=!1;function Hp(e,t){switch(e){case"compositionend":return Fc(t);case"keypress":return t.which!==32?null:(Fl=!0,Ll);case"textInput":return e=t.data,e===Ll&&Fl?null:e;default:return null}}function qp(e,t){if(rr)return e==="compositionend"||!Ms&&Lc(e,t)?(e=Ic(),Gn=Rs=ft=null,rr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Rc&&t.locale!=="ko"?null:t.data;default:return null}}var Gp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ml(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Gp[e.type]:t==="textarea"}function Mc(e,t,r,n){hc(n),t=ca(t,"onChange"),0<t.length&&(r=new Ls("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var qr=null,an=null;function Qp(e){Kc(e,0)}function Da(e){var t=ir(e);if(oc(t))return e}function Kp(e,t){if(e==="change")return t}var Ac=!1;if(at){var ri;if(at){var ni="oninput"in document;if(!ni){var Al=document.createElement("div");Al.setAttribute("oninput","return;"),ni=typeof Al.oninput=="function"}ri=ni}else ri=!1;Ac=ri&&(!document.documentMode||9<document.documentMode)}function Bl(){qr&&(qr.detachEvent("onpropertychange",Bc),an=qr=null)}function Bc(e){if(e.propertyName==="value"&&Da(an)){var t=[];Mc(t,an,e,zs(e)),yc(Qp,t)}}function Yp(e,t,r){e==="focusin"?(Bl(),qr=t,an=r,qr.attachEvent("onpropertychange",Bc)):e==="focusout"&&Bl()}function Xp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Da(an)}function Jp(e,t){if(e==="click")return Da(t)}function Zp(e,t){if(e==="input"||e==="change")return Da(t)}function em(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qe=typeof Object.is=="function"?Object.is:em;function sn(e,t){if(qe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!ji.call(t,i)||!qe(e[i],t[i]))return!1}return!0}function $l(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ul(e,t){var r=$l(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=$l(r)}}function $c(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$c(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Uc(){for(var e=window,t=ra();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=ra(e.document)}return t}function As(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function tm(e){var t=Uc(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&$c(r.ownerDocument.documentElement,r)){if(n!==null&&As(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,s=Math.min(n.start,i);n=n.end===void 0?s:Math.min(n.end,i),!e.extend&&s>n&&(i=n,n=s,s=i),i=Ul(r,s);var l=Ul(r,n);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>n?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var rm=at&&"documentMode"in document&&11>=document.documentMode,nr=null,Ui=null,Gr=null,Wi=!1;function Wl(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Wi||nr==null||nr!==ra(n)||(n=nr,"selectionStart"in n&&As(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Gr&&sn(Gr,n)||(Gr=n,n=ca(Ui,"onSelect"),0<n.length&&(t=new Ls("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=nr)))}function In(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var ar={animationend:In("Animation","AnimationEnd"),animationiteration:In("Animation","AnimationIteration"),animationstart:In("Animation","AnimationStart"),transitionend:In("Transition","TransitionEnd")},ai={},Wc={};at&&(Wc=document.createElement("div").style,"AnimationEvent"in window||(delete ar.animationend.animation,delete ar.animationiteration.animation,delete ar.animationstart.animation),"TransitionEvent"in window||delete ar.transitionend.transition);function Ta(e){if(ai[e])return ai[e];if(!ar[e])return e;var t=ar[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Wc)return ai[e]=t[r];return e}var Vc=Ta("animationend"),Hc=Ta("animationiteration"),qc=Ta("animationstart"),Gc=Ta("transitionend"),Qc=new Map,Vl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Et(e,t){Qc.set(e,t),Kt(t,[e])}for(var ii=0;ii<Vl.length;ii++){var si=Vl[ii],nm=si.toLowerCase(),am=si[0].toUpperCase()+si.slice(1);Et(nm,"on"+am)}Et(Vc,"onAnimationEnd");Et(Hc,"onAnimationIteration");Et(qc,"onAnimationStart");Et("dblclick","onDoubleClick");Et("focusin","onFocus");Et("focusout","onBlur");Et(Gc,"onTransitionEnd");xr("onMouseEnter",["mouseout","mouseover"]);xr("onMouseLeave",["mouseout","mouseover"]);xr("onPointerEnter",["pointerout","pointerover"]);xr("onPointerLeave",["pointerout","pointerover"]);Kt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),im=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ur));function Hl(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,np(n,t,void 0,e),e.currentTarget=null}function Kc(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var s=void 0;if(t)for(var l=n.length-1;0<=l;l--){var o=n[l],c=o.instance,d=o.currentTarget;if(o=o.listener,c!==s&&i.isPropagationStopped())break e;Hl(i,o,d),s=c}else for(l=0;l<n.length;l++){if(o=n[l],c=o.instance,d=o.currentTarget,o=o.listener,c!==s&&i.isPropagationStopped())break e;Hl(i,o,d),s=c}}}if(aa)throw e=Mi,aa=!1,Mi=null,e}function H(e,t){var r=t[Qi];r===void 0&&(r=t[Qi]=new Set);var n=e+"__bubble";r.has(n)||(Yc(t,e,2,!1),r.add(n))}function li(e,t,r){var n=0;t&&(n|=4),Yc(r,e,n,t)}var Rn="_reactListening"+Math.random().toString(36).slice(2);function ln(e){if(!e[Rn]){e[Rn]=!0,nc.forEach(function(r){r!=="selectionchange"&&(im.has(r)||li(r,!1,e),li(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Rn]||(t[Rn]=!0,li("selectionchange",!1,t))}}function Yc(e,t,r,n){switch(Oc(t)){case 1:var i=yp;break;case 4:i=_p;break;default:i=Is}r=i.bind(null,t,r,e),i=void 0,!Fi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function oi(e,t,r,n,i){var s=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var o=n.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(l===4)for(l=n.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;l=l.return}for(;o!==null;){if(l=At(o),l===null)return;if(c=l.tag,c===5||c===6){n=s=l;continue e}o=o.parentNode}}n=n.return}yc(function(){var d=s,h=zs(r),f=[];e:{var u=Qc.get(e);if(u!==void 0){var w=Ls,k=e;switch(e){case"keypress":if(Qn(r)===0)break e;case"keydown":case"keyup":w=Rp;break;case"focusin":k="focus",w=ti;break;case"focusout":k="blur",w=ti;break;case"beforeblur":case"afterblur":w=ti;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Ol;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=jp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Mp;break;case Vc:case Hc:case qc:w=Sp;break;case Gc:w=Bp;break;case"scroll":w=wp;break;case"wheel":w=Up;break;case"copy":case"cut":case"paste":w=Ep;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Rl}var x=(t&4)!==0,S=!x&&e==="scroll",p=x?u!==null?u+"Capture":null:u;x=[];for(var m=d,g;m!==null;){g=m;var v=g.stateNode;if(g.tag===5&&v!==null&&(g=v,p!==null&&(v=en(m,p),v!=null&&x.push(on(m,v,g)))),S)break;m=m.return}0<x.length&&(u=new w(u,k,null,r,h),f.push({event:u,listeners:x}))}}if(!(t&7)){e:{if(u=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",u&&r!==Ri&&(k=r.relatedTarget||r.fromElement)&&(At(k)||k[it]))break e;if((w||u)&&(u=h.window===h?h:(u=h.ownerDocument)?u.defaultView||u.parentWindow:window,w?(k=r.relatedTarget||r.toElement,w=d,k=k?At(k):null,k!==null&&(S=Yt(k),k!==S||k.tag!==5&&k.tag!==6)&&(k=null)):(w=null,k=d),w!==k)){if(x=Ol,v="onMouseLeave",p="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(x=Rl,v="onPointerLeave",p="onPointerEnter",m="pointer"),S=w==null?u:ir(w),g=k==null?u:ir(k),u=new x(v,m+"leave",w,r,h),u.target=S,u.relatedTarget=g,v=null,At(h)===d&&(x=new x(p,m+"enter",k,r,h),x.target=g,x.relatedTarget=S,v=x),S=v,w&&k)t:{for(x=w,p=k,m=0,g=x;g;g=Zt(g))m++;for(g=0,v=p;v;v=Zt(v))g++;for(;0<m-g;)x=Zt(x),m--;for(;0<g-m;)p=Zt(p),g--;for(;m--;){if(x===p||p!==null&&x===p.alternate)break t;x=Zt(x),p=Zt(p)}x=null}else x=null;w!==null&&ql(f,u,w,x,!1),k!==null&&S!==null&&ql(f,S,k,x,!0)}}e:{if(u=d?ir(d):window,w=u.nodeName&&u.nodeName.toLowerCase(),w==="select"||w==="input"&&u.type==="file")var j=Kp;else if(Ml(u))if(Ac)j=Zp;else{j=Xp;var D=Yp}else(w=u.nodeName)&&w.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(j=Jp);if(j&&(j=j(e,d))){Mc(f,j,r,h);break e}D&&D(e,u,d),e==="focusout"&&(D=u._wrapperState)&&D.controlled&&u.type==="number"&&zi(u,"number",u.value)}switch(D=d?ir(d):window,e){case"focusin":(Ml(D)||D.contentEditable==="true")&&(nr=D,Ui=d,Gr=null);break;case"focusout":Gr=Ui=nr=null;break;case"mousedown":Wi=!0;break;case"contextmenu":case"mouseup":case"dragend":Wi=!1,Wl(f,r,h);break;case"selectionchange":if(rm)break;case"keydown":case"keyup":Wl(f,r,h)}var y;if(Ms)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else rr?Lc(e,r)&&(_="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(_="onCompositionStart");_&&(Rc&&r.locale!=="ko"&&(rr||_!=="onCompositionStart"?_==="onCompositionEnd"&&rr&&(y=Ic()):(ft=h,Rs="value"in ft?ft.value:ft.textContent,rr=!0)),D=ca(d,_),0<D.length&&(_=new Il(_,e,null,r,h),f.push({event:_,listeners:D}),y?_.data=y:(y=Fc(r),y!==null&&(_.data=y)))),(y=Vp?Hp(e,r):qp(e,r))&&(d=ca(d,"onBeforeInput"),0<d.length&&(h=new Il("onBeforeInput","beforeinput",null,r,h),f.push({event:h,listeners:d}),h.data=y))}Kc(f,t)})}function on(e,t,r){return{instance:e,listener:t,currentTarget:r}}function ca(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=en(e,r),s!=null&&n.unshift(on(e,s,i)),s=en(e,t),s!=null&&n.push(on(e,s,i))),e=e.return}return n}function Zt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ql(e,t,r,n,i){for(var s=t._reactName,l=[];r!==null&&r!==n;){var o=r,c=o.alternate,d=o.stateNode;if(c!==null&&c===n)break;o.tag===5&&d!==null&&(o=d,i?(c=en(r,s),c!=null&&l.unshift(on(r,c,o))):i||(c=en(r,s),c!=null&&l.push(on(r,c,o)))),r=r.return}l.length!==0&&e.push({event:t,listeners:l})}var sm=/\r\n?/g,lm=/\u0000|\uFFFD/g;function Gl(e){return(typeof e=="string"?e:""+e).replace(sm,`
`).replace(lm,"")}function Ln(e,t,r){if(t=Gl(t),Gl(e)!==t&&r)throw Error(E(425))}function da(){}var Vi=null,Hi=null;function qi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gi=typeof setTimeout=="function"?setTimeout:void 0,om=typeof clearTimeout=="function"?clearTimeout:void 0,Ql=typeof Promise=="function"?Promise:void 0,cm=typeof queueMicrotask=="function"?queueMicrotask:typeof Ql<"u"?function(e){return Ql.resolve(null).then(e).catch(dm)}:Gi;function dm(e){setTimeout(function(){throw e})}function ci(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),nn(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);nn(t)}function _t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Kl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Er=Math.random().toString(36).slice(2),Ye="__reactFiber$"+Er,cn="__reactProps$"+Er,it="__reactContainer$"+Er,Qi="__reactEvents$"+Er,um="__reactListeners$"+Er,pm="__reactHandles$"+Er;function At(e){var t=e[Ye];if(t)return t;for(var r=e.parentNode;r;){if(t=r[it]||r[Ye]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Kl(e);e!==null;){if(r=e[Ye])return r;e=Kl(e)}return t}e=r,r=e.parentNode}return null}function wn(e){return e=e[Ye]||e[it],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ir(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Oa(e){return e[cn]||null}var Ki=[],sr=-1;function Pt(e){return{current:e}}function q(e){0>sr||(e.current=Ki[sr],Ki[sr]=null,sr--)}function V(e,t){sr++,Ki[sr]=e.current,e.current=t}var Ct={},me=Pt(Ct),be=Pt(!1),Vt=Ct;function yr(e,t){var r=e.type.contextTypes;if(!r)return Ct;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in r)i[s]=t[s];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function je(e){return e=e.childContextTypes,e!=null}function ua(){q(be),q(me)}function Yl(e,t,r){if(me.current!==Ct)throw Error(E(168));V(me,t),V(be,r)}function Xc(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(E(108,Yu(e)||"Unknown",i));return Y({},r,n)}function pa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ct,Vt=me.current,V(me,e),V(be,be.current),!0}function Xl(e,t,r){var n=e.stateNode;if(!n)throw Error(E(169));r?(e=Xc(e,t,Vt),n.__reactInternalMemoizedMergedChildContext=e,q(be),q(me),V(me,e)):q(be),V(be,r)}var et=null,Ia=!1,di=!1;function Jc(e){et===null?et=[e]:et.push(e)}function mm(e){Ia=!0,Jc(e)}function zt(){if(!di&&et!==null){di=!0;var e=0,t=W;try{var r=et;for(W=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}et=null,Ia=!1}catch(i){throw et!==null&&(et=et.slice(e+1)),jc(Ds,zt),i}finally{W=t,di=!1}}return null}var lr=[],or=0,ma=null,fa=0,Te=[],Oe=0,Ht=null,tt=1,rt="";function Ft(e,t){lr[or++]=fa,lr[or++]=ma,ma=e,fa=t}function Zc(e,t,r){Te[Oe++]=tt,Te[Oe++]=rt,Te[Oe++]=Ht,Ht=e;var n=tt;e=rt;var i=32-Ve(n)-1;n&=~(1<<i),r+=1;var s=32-Ve(t)+i;if(30<s){var l=i-i%5;s=(n&(1<<l)-1).toString(32),n>>=l,i-=l,tt=1<<32-Ve(t)+i|r<<i|n,rt=s+e}else tt=1<<s|r<<i|n,rt=e}function Bs(e){e.return!==null&&(Ft(e,1),Zc(e,1,0))}function $s(e){for(;e===ma;)ma=lr[--or],lr[or]=null,fa=lr[--or],lr[or]=null;for(;e===Ht;)Ht=Te[--Oe],Te[Oe]=null,rt=Te[--Oe],Te[Oe]=null,tt=Te[--Oe],Te[Oe]=null}var Ee=null,Ce=null,G=!1,We=null;function ed(e,t){var r=Ie(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Jl(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ee=e,Ce=_t(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ee=e,Ce=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Ht!==null?{id:tt,overflow:rt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Ie(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Ee=e,Ce=null,!0):!1;default:return!1}}function Yi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xi(e){if(G){var t=Ce;if(t){var r=t;if(!Jl(e,t)){if(Yi(e))throw Error(E(418));t=_t(r.nextSibling);var n=Ee;t&&Jl(e,t)?ed(n,r):(e.flags=e.flags&-4097|2,G=!1,Ee=e)}}else{if(Yi(e))throw Error(E(418));e.flags=e.flags&-4097|2,G=!1,Ee=e}}}function Zl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ee=e}function Fn(e){if(e!==Ee)return!1;if(!G)return Zl(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!qi(e.type,e.memoizedProps)),t&&(t=Ce)){if(Yi(e))throw td(),Error(E(418));for(;t;)ed(e,t),t=_t(t.nextSibling)}if(Zl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Ce=_t(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Ce=null}}else Ce=Ee?_t(e.stateNode.nextSibling):null;return!0}function td(){for(var e=Ce;e;)e=_t(e.nextSibling)}function _r(){Ce=Ee=null,G=!1}function Us(e){We===null?We=[e]:We.push(e)}var fm=ot.ReactCurrentBatchConfig;function Lr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(E(309));var n=r.stateNode}if(!n)throw Error(E(147,e));var i=n,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(l){var o=i.refs;l===null?delete o[s]:o[s]=l},t._stringRef=s,t)}if(typeof e!="string")throw Error(E(284));if(!r._owner)throw Error(E(290,e))}return e}function Mn(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function eo(e){var t=e._init;return t(e._payload)}function rd(e){function t(p,m){if(e){var g=p.deletions;g===null?(p.deletions=[m],p.flags|=16):g.push(m)}}function r(p,m){if(!e)return null;for(;m!==null;)t(p,m),m=m.sibling;return null}function n(p,m){for(p=new Map;m!==null;)m.key!==null?p.set(m.key,m):p.set(m.index,m),m=m.sibling;return p}function i(p,m){return p=kt(p,m),p.index=0,p.sibling=null,p}function s(p,m,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<m?(p.flags|=2,m):g):(p.flags|=2,m)):(p.flags|=1048576,m)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function o(p,m,g,v){return m===null||m.tag!==6?(m=vi(g,p.mode,v),m.return=p,m):(m=i(m,g),m.return=p,m)}function c(p,m,g,v){var j=g.type;return j===tr?h(p,m,g.props.children,v,g.key):m!==null&&(m.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===dt&&eo(j)===m.type)?(v=i(m,g.props),v.ref=Lr(p,m,g),v.return=p,v):(v=ta(g.type,g.key,g.props,null,p.mode,v),v.ref=Lr(p,m,g),v.return=p,v)}function d(p,m,g,v){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=xi(g,p.mode,v),m.return=p,m):(m=i(m,g.children||[]),m.return=p,m)}function h(p,m,g,v,j){return m===null||m.tag!==7?(m=Wt(g,p.mode,v,j),m.return=p,m):(m=i(m,g),m.return=p,m)}function f(p,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=vi(""+m,p.mode,g),m.return=p,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Cn:return g=ta(m.type,m.key,m.props,null,p.mode,g),g.ref=Lr(p,null,m),g.return=p,g;case er:return m=xi(m,p.mode,g),m.return=p,m;case dt:var v=m._init;return f(p,v(m._payload),g)}if(Br(m)||Dr(m))return m=Wt(m,p.mode,g,null),m.return=p,m;Mn(p,m)}return null}function u(p,m,g,v){var j=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return j!==null?null:o(p,m,""+g,v);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Cn:return g.key===j?c(p,m,g,v):null;case er:return g.key===j?d(p,m,g,v):null;case dt:return j=g._init,u(p,m,j(g._payload),v)}if(Br(g)||Dr(g))return j!==null?null:h(p,m,g,v,null);Mn(p,g)}return null}function w(p,m,g,v,j){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(g)||null,o(m,p,""+v,j);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Cn:return p=p.get(v.key===null?g:v.key)||null,c(m,p,v,j);case er:return p=p.get(v.key===null?g:v.key)||null,d(m,p,v,j);case dt:var D=v._init;return w(p,m,g,D(v._payload),j)}if(Br(v)||Dr(v))return p=p.get(g)||null,h(m,p,v,j,null);Mn(m,v)}return null}function k(p,m,g,v){for(var j=null,D=null,y=m,_=m=0,C=null;y!==null&&_<g.length;_++){y.index>_?(C=y,y=null):C=y.sibling;var z=u(p,y,g[_],v);if(z===null){y===null&&(y=C);break}e&&y&&z.alternate===null&&t(p,y),m=s(z,m,_),D===null?j=z:D.sibling=z,D=z,y=C}if(_===g.length)return r(p,y),G&&Ft(p,_),j;if(y===null){for(;_<g.length;_++)y=f(p,g[_],v),y!==null&&(m=s(y,m,_),D===null?j=y:D.sibling=y,D=y);return G&&Ft(p,_),j}for(y=n(p,y);_<g.length;_++)C=w(y,p,_,g[_],v),C!==null&&(e&&C.alternate!==null&&y.delete(C.key===null?_:C.key),m=s(C,m,_),D===null?j=C:D.sibling=C,D=C);return e&&y.forEach(function(N){return t(p,N)}),G&&Ft(p,_),j}function x(p,m,g,v){var j=Dr(g);if(typeof j!="function")throw Error(E(150));if(g=j.call(g),g==null)throw Error(E(151));for(var D=j=null,y=m,_=m=0,C=null,z=g.next();y!==null&&!z.done;_++,z=g.next()){y.index>_?(C=y,y=null):C=y.sibling;var N=u(p,y,z.value,v);if(N===null){y===null&&(y=C);break}e&&y&&N.alternate===null&&t(p,y),m=s(N,m,_),D===null?j=N:D.sibling=N,D=N,y=C}if(z.done)return r(p,y),G&&Ft(p,_),j;if(y===null){for(;!z.done;_++,z=g.next())z=f(p,z.value,v),z!==null&&(m=s(z,m,_),D===null?j=z:D.sibling=z,D=z);return G&&Ft(p,_),j}for(y=n(p,y);!z.done;_++,z=g.next())z=w(y,p,_,z.value,v),z!==null&&(e&&z.alternate!==null&&y.delete(z.key===null?_:z.key),m=s(z,m,_),D===null?j=z:D.sibling=z,D=z);return e&&y.forEach(function(L){return t(p,L)}),G&&Ft(p,_),j}function S(p,m,g,v){if(typeof g=="object"&&g!==null&&g.type===tr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Cn:e:{for(var j=g.key,D=m;D!==null;){if(D.key===j){if(j=g.type,j===tr){if(D.tag===7){r(p,D.sibling),m=i(D,g.props.children),m.return=p,p=m;break e}}else if(D.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===dt&&eo(j)===D.type){r(p,D.sibling),m=i(D,g.props),m.ref=Lr(p,D,g),m.return=p,p=m;break e}r(p,D);break}else t(p,D);D=D.sibling}g.type===tr?(m=Wt(g.props.children,p.mode,v,g.key),m.return=p,p=m):(v=ta(g.type,g.key,g.props,null,p.mode,v),v.ref=Lr(p,m,g),v.return=p,p=v)}return l(p);case er:e:{for(D=g.key;m!==null;){if(m.key===D)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){r(p,m.sibling),m=i(m,g.children||[]),m.return=p,p=m;break e}else{r(p,m);break}else t(p,m);m=m.sibling}m=xi(g,p.mode,v),m.return=p,p=m}return l(p);case dt:return D=g._init,S(p,m,D(g._payload),v)}if(Br(g))return k(p,m,g,v);if(Dr(g))return x(p,m,g,v);Mn(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(r(p,m.sibling),m=i(m,g),m.return=p,p=m):(r(p,m),m=vi(g,p.mode,v),m.return=p,p=m),l(p)):r(p,m)}return S}var wr=rd(!0),nd=rd(!1),ha=Pt(null),ga=null,cr=null,Ws=null;function Vs(){Ws=cr=ga=null}function Hs(e){var t=ha.current;q(ha),e._currentValue=t}function Ji(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function gr(e,t){ga=e,Ws=cr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ye=!0),e.firstContext=null)}function Le(e){var t=e._currentValue;if(Ws!==e)if(e={context:e,memoizedValue:t,next:null},cr===null){if(ga===null)throw Error(E(308));cr=e,ga.dependencies={lanes:0,firstContext:e}}else cr=cr.next=e;return t}var Bt=null;function qs(e){Bt===null?Bt=[e]:Bt.push(e)}function ad(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,qs(t)):(r.next=i.next,i.next=r),t.interleaved=r,st(e,n)}function st(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var ut=!1;function Gs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function id(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function wt(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,B&2){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,st(e,r)}return i=n.interleaved,i===null?(t.next=t,qs(n)):(t.next=i.next,i.next=t),n.interleaved=t,st(e,r)}function Kn(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Ts(e,r)}}function to(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?i=s=l:s=s.next=l,r=r.next}while(r!==null);s===null?i=s=t:s=s.next=t}else i=s=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function va(e,t,r,n){var i=e.updateQueue;ut=!1;var s=i.firstBaseUpdate,l=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var c=o,d=c.next;c.next=null,l===null?s=d:l.next=d,l=c;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==l&&(o===null?h.firstBaseUpdate=d:o.next=d,h.lastBaseUpdate=c))}if(s!==null){var f=i.baseState;l=0,h=d=c=null,o=s;do{var u=o.lane,w=o.eventTime;if((n&u)===u){h!==null&&(h=h.next={eventTime:w,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var k=e,x=o;switch(u=t,w=r,x.tag){case 1:if(k=x.payload,typeof k=="function"){f=k.call(w,f,u);break e}f=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=x.payload,u=typeof k=="function"?k.call(w,f,u):k,u==null)break e;f=Y({},f,u);break e;case 2:ut=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,u=i.effects,u===null?i.effects=[o]:u.push(o))}else w={eventTime:w,lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(d=h=w,c=f):h=h.next=w,l|=u;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;u=o,o=u.next,u.next=null,i.lastBaseUpdate=u,i.shared.pending=null}}while(!0);if(h===null&&(c=f),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Gt|=l,e.lanes=l,e.memoizedState=f}}function ro(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(E(191,i));i.call(n)}}}var bn={},Je=Pt(bn),dn=Pt(bn),un=Pt(bn);function $t(e){if(e===bn)throw Error(E(174));return e}function Qs(e,t){switch(V(un,t),V(dn,e),V(Je,bn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ti(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ti(t,e)}q(Je),V(Je,t)}function br(){q(Je),q(dn),q(un)}function sd(e){$t(un.current);var t=$t(Je.current),r=Ti(t,e.type);t!==r&&(V(dn,e),V(Je,r))}function Ks(e){dn.current===e&&(q(Je),q(dn))}var Q=Pt(0);function xa(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ui=[];function Ys(){for(var e=0;e<ui.length;e++)ui[e]._workInProgressVersionPrimary=null;ui.length=0}var Yn=ot.ReactCurrentDispatcher,pi=ot.ReactCurrentBatchConfig,qt=0,K=null,re=null,ie=null,ya=!1,Qr=!1,pn=0,hm=0;function de(){throw Error(E(321))}function Xs(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!qe(e[r],t[r]))return!1;return!0}function Js(e,t,r,n,i,s){if(qt=s,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Yn.current=e===null||e.memoizedState===null?ym:_m,e=r(n,i),Qr){s=0;do{if(Qr=!1,pn=0,25<=s)throw Error(E(301));s+=1,ie=re=null,t.updateQueue=null,Yn.current=wm,e=r(n,i)}while(Qr)}if(Yn.current=_a,t=re!==null&&re.next!==null,qt=0,ie=re=K=null,ya=!1,t)throw Error(E(300));return e}function Zs(){var e=pn!==0;return pn=0,e}function Ke(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?K.memoizedState=ie=e:ie=ie.next=e,ie}function Fe(){if(re===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=ie===null?K.memoizedState:ie.next;if(t!==null)ie=t,re=e;else{if(e===null)throw Error(E(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},ie===null?K.memoizedState=ie=e:ie=ie.next=e}return ie}function mn(e,t){return typeof t=="function"?t(e):t}function mi(e){var t=Fe(),r=t.queue;if(r===null)throw Error(E(311));r.lastRenderedReducer=e;var n=re,i=n.baseQueue,s=r.pending;if(s!==null){if(i!==null){var l=i.next;i.next=s.next,s.next=l}n.baseQueue=i=s,r.pending=null}if(i!==null){s=i.next,n=n.baseState;var o=l=null,c=null,d=s;do{var h=d.lane;if((qt&h)===h)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),n=d.hasEagerState?d.eagerState:e(n,d.action);else{var f={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(o=c=f,l=n):c=c.next=f,K.lanes|=h,Gt|=h}d=d.next}while(d!==null&&d!==s);c===null?l=n:c.next=o,qe(n,t.memoizedState)||(ye=!0),t.memoizedState=n,t.baseState=l,t.baseQueue=c,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do s=i.lane,K.lanes|=s,Gt|=s,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function fi(e){var t=Fe(),r=t.queue;if(r===null)throw Error(E(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,s=t.memoizedState;if(i!==null){r.pending=null;var l=i=i.next;do s=e(s,l.action),l=l.next;while(l!==i);qe(s,t.memoizedState)||(ye=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),r.lastRenderedState=s}return[s,n]}function ld(){}function od(e,t){var r=K,n=Fe(),i=t(),s=!qe(n.memoizedState,i);if(s&&(n.memoizedState=i,ye=!0),n=n.queue,el(ud.bind(null,r,n,e),[e]),n.getSnapshot!==t||s||ie!==null&&ie.memoizedState.tag&1){if(r.flags|=2048,fn(9,dd.bind(null,r,n,i,t),void 0,null),se===null)throw Error(E(349));qt&30||cd(r,t,i)}return i}function cd(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function dd(e,t,r,n){t.value=r,t.getSnapshot=n,pd(t)&&md(e)}function ud(e,t,r){return r(function(){pd(t)&&md(e)})}function pd(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!qe(e,r)}catch{return!0}}function md(e){var t=st(e,1);t!==null&&He(t,e,1,-1)}function no(e){var t=Ke();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mn,lastRenderedState:e},t.queue=e,e=e.dispatch=xm.bind(null,K,e),[t.memoizedState,e]}function fn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function fd(){return Fe().memoizedState}function Xn(e,t,r,n){var i=Ke();K.flags|=e,i.memoizedState=fn(1|t,r,void 0,n===void 0?null:n)}function Ra(e,t,r,n){var i=Fe();n=n===void 0?null:n;var s=void 0;if(re!==null){var l=re.memoizedState;if(s=l.destroy,n!==null&&Xs(n,l.deps)){i.memoizedState=fn(t,r,s,n);return}}K.flags|=e,i.memoizedState=fn(1|t,r,s,n)}function ao(e,t){return Xn(8390656,8,e,t)}function el(e,t){return Ra(2048,8,e,t)}function hd(e,t){return Ra(4,2,e,t)}function gd(e,t){return Ra(4,4,e,t)}function vd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xd(e,t,r){return r=r!=null?r.concat([e]):null,Ra(4,4,vd.bind(null,t,e),r)}function tl(){}function yd(e,t){var r=Fe();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Xs(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function _d(e,t){var r=Fe();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Xs(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function wd(e,t,r){return qt&21?(qe(r,t)||(r=Sc(),K.lanes|=r,Gt|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ye=!0),e.memoizedState=r)}function gm(e,t){var r=W;W=r!==0&&4>r?r:4,e(!0);var n=pi.transition;pi.transition={};try{e(!1),t()}finally{W=r,pi.transition=n}}function bd(){return Fe().memoizedState}function vm(e,t,r){var n=jt(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},jd(e))kd(t,r);else if(r=ad(e,t,r,n),r!==null){var i=he();He(r,e,n,i),Nd(r,t,n)}}function xm(e,t,r){var n=jt(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(jd(e))kd(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var l=t.lastRenderedState,o=s(l,r);if(i.hasEagerState=!0,i.eagerState=o,qe(o,l)){var c=t.interleaved;c===null?(i.next=i,qs(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}r=ad(e,t,i,n),r!==null&&(i=he(),He(r,e,n,i),Nd(r,t,n))}}function jd(e){var t=e.alternate;return e===K||t!==null&&t===K}function kd(e,t){Qr=ya=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Nd(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Ts(e,r)}}var _a={readContext:Le,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},ym={readContext:Le,useCallback:function(e,t){return Ke().memoizedState=[e,t===void 0?null:t],e},useContext:Le,useEffect:ao,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Xn(4194308,4,vd.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Xn(4194308,4,e,t)},useInsertionEffect:function(e,t){return Xn(4,2,e,t)},useMemo:function(e,t){var r=Ke();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Ke();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=vm.bind(null,K,e),[n.memoizedState,e]},useRef:function(e){var t=Ke();return e={current:e},t.memoizedState=e},useState:no,useDebugValue:tl,useDeferredValue:function(e){return Ke().memoizedState=e},useTransition:function(){var e=no(!1),t=e[0];return e=gm.bind(null,e[1]),Ke().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=K,i=Ke();if(G){if(r===void 0)throw Error(E(407));r=r()}else{if(r=t(),se===null)throw Error(E(349));qt&30||cd(n,t,r)}i.memoizedState=r;var s={value:r,getSnapshot:t};return i.queue=s,ao(ud.bind(null,n,s,e),[e]),n.flags|=2048,fn(9,dd.bind(null,n,s,r,t),void 0,null),r},useId:function(){var e=Ke(),t=se.identifierPrefix;if(G){var r=rt,n=tt;r=(n&~(1<<32-Ve(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=pn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=hm++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},_m={readContext:Le,useCallback:yd,useContext:Le,useEffect:el,useImperativeHandle:xd,useInsertionEffect:hd,useLayoutEffect:gd,useMemo:_d,useReducer:mi,useRef:fd,useState:function(){return mi(mn)},useDebugValue:tl,useDeferredValue:function(e){var t=Fe();return wd(t,re.memoizedState,e)},useTransition:function(){var e=mi(mn)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:ld,useSyncExternalStore:od,useId:bd,unstable_isNewReconciler:!1},wm={readContext:Le,useCallback:yd,useContext:Le,useEffect:el,useImperativeHandle:xd,useInsertionEffect:hd,useLayoutEffect:gd,useMemo:_d,useReducer:fi,useRef:fd,useState:function(){return fi(mn)},useDebugValue:tl,useDeferredValue:function(e){var t=Fe();return re===null?t.memoizedState=e:wd(t,re.memoizedState,e)},useTransition:function(){var e=fi(mn)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:ld,useSyncExternalStore:od,useId:bd,unstable_isNewReconciler:!1};function $e(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Zi(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:Y({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var La={isMounted:function(e){return(e=e._reactInternals)?Yt(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=he(),i=jt(e),s=nt(n,i);s.payload=t,r!=null&&(s.callback=r),t=wt(e,s,i),t!==null&&(He(t,e,i,n),Kn(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=he(),i=jt(e),s=nt(n,i);s.tag=1,s.payload=t,r!=null&&(s.callback=r),t=wt(e,s,i),t!==null&&(He(t,e,i,n),Kn(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=he(),n=jt(e),i=nt(r,n);i.tag=2,t!=null&&(i.callback=t),t=wt(e,i,n),t!==null&&(He(t,e,n,r),Kn(t,e,n))}};function io(e,t,r,n,i,s,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,l):t.prototype&&t.prototype.isPureReactComponent?!sn(r,n)||!sn(i,s):!0}function Sd(e,t,r){var n=!1,i=Ct,s=t.contextType;return typeof s=="object"&&s!==null?s=Le(s):(i=je(t)?Vt:me.current,n=t.contextTypes,s=(n=n!=null)?yr(e,i):Ct),t=new t(r,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=La,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function so(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&La.enqueueReplaceState(t,t.state,null)}function es(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},Gs(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Le(s):(s=je(t)?Vt:me.current,i.context=yr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Zi(e,t,s,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&La.enqueueReplaceState(i,i.state,null),va(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function jr(e,t){try{var r="",n=t;do r+=Ku(n),n=n.return;while(n);var i=r}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function hi(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function ts(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var bm=typeof WeakMap=="function"?WeakMap:Map;function Cd(e,t,r){r=nt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){ba||(ba=!0,us=n),ts(e,t)},r}function Ed(e,t,r){r=nt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){ts(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){ts(e,t),typeof n!="function"&&(bt===null?bt=new Set([this]):bt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),r}function lo(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new bm;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=Lm.bind(null,e,t,r),t.then(e,e))}function oo(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function co(e,t,r,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=nt(-1,1),t.tag=2,wt(r,t,1))),r.lanes|=1),e)}var jm=ot.ReactCurrentOwner,ye=!1;function fe(e,t,r,n){t.child=e===null?nd(t,null,r,n):wr(t,e.child,r,n)}function uo(e,t,r,n,i){r=r.render;var s=t.ref;return gr(t,i),n=Js(e,t,r,n,s,i),r=Zs(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,lt(e,t,i)):(G&&r&&Bs(t),t.flags|=1,fe(e,t,n,i),t.child)}function po(e,t,r,n,i){if(e===null){var s=r.type;return typeof s=="function"&&!cl(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=s,Pd(e,t,s,n,i)):(e=ta(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var l=s.memoizedProps;if(r=r.compare,r=r!==null?r:sn,r(l,n)&&e.ref===t.ref)return lt(e,t,i)}return t.flags|=1,e=kt(s,n),e.ref=t.ref,e.return=t,t.child=e}function Pd(e,t,r,n,i){if(e!==null){var s=e.memoizedProps;if(sn(s,n)&&e.ref===t.ref)if(ye=!1,t.pendingProps=n=s,(e.lanes&i)!==0)e.flags&131072&&(ye=!0);else return t.lanes=e.lanes,lt(e,t,i)}return rs(e,t,r,n,i)}function zd(e,t,r){var n=t.pendingProps,i=n.children,s=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(ur,Se),Se|=r;else{if(!(r&1073741824))return e=s!==null?s.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(ur,Se),Se|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=s!==null?s.baseLanes:r,V(ur,Se),Se|=n}else s!==null?(n=s.baseLanes|r,t.memoizedState=null):n=r,V(ur,Se),Se|=n;return fe(e,t,i,r),t.child}function Dd(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function rs(e,t,r,n,i){var s=je(r)?Vt:me.current;return s=yr(t,s),gr(t,i),r=Js(e,t,r,n,s,i),n=Zs(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,lt(e,t,i)):(G&&n&&Bs(t),t.flags|=1,fe(e,t,r,i),t.child)}function mo(e,t,r,n,i){if(je(r)){var s=!0;pa(t)}else s=!1;if(gr(t,i),t.stateNode===null)Jn(e,t),Sd(t,r,n),es(t,r,n,i),n=!0;else if(e===null){var l=t.stateNode,o=t.memoizedProps;l.props=o;var c=l.context,d=r.contextType;typeof d=="object"&&d!==null?d=Le(d):(d=je(r)?Vt:me.current,d=yr(t,d));var h=r.getDerivedStateFromProps,f=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==n||c!==d)&&so(t,l,n,d),ut=!1;var u=t.memoizedState;l.state=u,va(t,n,l,i),c=t.memoizedState,o!==n||u!==c||be.current||ut?(typeof h=="function"&&(Zi(t,r,h,n),c=t.memoizedState),(o=ut||io(t,r,o,n,u,c,d))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),l.props=n,l.state=c,l.context=d,n=o):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{l=t.stateNode,id(e,t),o=t.memoizedProps,d=t.type===t.elementType?o:$e(t.type,o),l.props=d,f=t.pendingProps,u=l.context,c=r.contextType,typeof c=="object"&&c!==null?c=Le(c):(c=je(r)?Vt:me.current,c=yr(t,c));var w=r.getDerivedStateFromProps;(h=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==f||u!==c)&&so(t,l,n,c),ut=!1,u=t.memoizedState,l.state=u,va(t,n,l,i);var k=t.memoizedState;o!==f||u!==k||be.current||ut?(typeof w=="function"&&(Zi(t,r,w,n),k=t.memoizedState),(d=ut||io(t,r,d,n,u,k,c)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,k,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,k,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=k),l.props=n,l.state=k,l.context=c,n=d):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),n=!1)}return ns(e,t,r,n,s,i)}function ns(e,t,r,n,i,s){Dd(e,t);var l=(t.flags&128)!==0;if(!n&&!l)return i&&Xl(t,r,!1),lt(e,t,s);n=t.stateNode,jm.current=t;var o=l&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&l?(t.child=wr(t,e.child,null,s),t.child=wr(t,null,o,s)):fe(e,t,o,s),t.memoizedState=n.state,i&&Xl(t,r,!0),t.child}function Td(e){var t=e.stateNode;t.pendingContext?Yl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Yl(e,t.context,!1),Qs(e,t.containerInfo)}function fo(e,t,r,n,i){return _r(),Us(i),t.flags|=256,fe(e,t,r,n),t.child}var as={dehydrated:null,treeContext:null,retryLane:0};function is(e){return{baseLanes:e,cachePool:null,transitions:null}}function Od(e,t,r){var n=t.pendingProps,i=Q.current,s=!1,l=(t.flags&128)!==0,o;if((o=l)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),V(Q,i&1),e===null)return Xi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=n.children,e=n.fallback,s?(n=t.mode,s=t.child,l={mode:"hidden",children:l},!(n&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=Aa(l,n,0,null),e=Wt(e,n,r,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=is(r),t.memoizedState=as,e):rl(t,l));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return km(e,t,l,n,o,i,r);if(s){s=n.fallback,l=t.mode,i=e.child,o=i.sibling;var c={mode:"hidden",children:n.children};return!(l&1)&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=c,t.deletions=null):(n=kt(i,c),n.subtreeFlags=i.subtreeFlags&14680064),o!==null?s=kt(o,s):(s=Wt(s,l,r,null),s.flags|=2),s.return=t,n.return=t,n.sibling=s,t.child=n,n=s,s=t.child,l=e.child.memoizedState,l=l===null?is(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~r,t.memoizedState=as,n}return s=e.child,e=s.sibling,n=kt(s,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function rl(e,t){return t=Aa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function An(e,t,r,n){return n!==null&&Us(n),wr(t,e.child,null,r),e=rl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function km(e,t,r,n,i,s,l){if(r)return t.flags&256?(t.flags&=-257,n=hi(Error(E(422))),An(e,t,l,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=n.fallback,i=t.mode,n=Aa({mode:"visible",children:n.children},i,0,null),s=Wt(s,i,l,null),s.flags|=2,n.return=t,s.return=t,n.sibling=s,t.child=n,t.mode&1&&wr(t,e.child,null,l),t.child.memoizedState=is(l),t.memoizedState=as,s);if(!(t.mode&1))return An(e,t,l,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var o=n.dgst;return n=o,s=Error(E(419)),n=hi(s,n,void 0),An(e,t,l,n)}if(o=(l&e.childLanes)!==0,ye||o){if(n=se,n!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|l)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,st(e,i),He(n,e,i,-1))}return ol(),n=hi(Error(E(421))),An(e,t,l,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Fm.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Ce=_t(i.nextSibling),Ee=t,G=!0,We=null,e!==null&&(Te[Oe++]=tt,Te[Oe++]=rt,Te[Oe++]=Ht,tt=e.id,rt=e.overflow,Ht=t),t=rl(t,n.children),t.flags|=4096,t)}function ho(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Ji(e.return,t,r)}function gi(e,t,r,n,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=r,s.tailMode=i)}function Id(e,t,r){var n=t.pendingProps,i=n.revealOrder,s=n.tail;if(fe(e,t,n.children,r),n=Q.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ho(e,r,t);else if(e.tag===19)ho(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(V(Q,n),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&xa(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),gi(t,!1,i,r,s);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&xa(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}gi(t,!0,r,null,s);break;case"together":gi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Jn(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function lt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Gt|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,r=kt(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=kt(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Nm(e,t,r){switch(t.tag){case 3:Td(t),_r();break;case 5:sd(t);break;case 1:je(t.type)&&pa(t);break;case 4:Qs(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;V(ha,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(V(Q,Q.current&1),t.flags|=128,null):r&t.child.childLanes?Od(e,t,r):(V(Q,Q.current&1),e=lt(e,t,r),e!==null?e.sibling:null);V(Q,Q.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Id(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(Q,Q.current),n)break;return null;case 22:case 23:return t.lanes=0,zd(e,t,r)}return lt(e,t,r)}var Rd,ss,Ld,Fd;Rd=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};ss=function(){};Ld=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,$t(Je.current);var s=null;switch(r){case"input":i=Ei(e,i),n=Ei(e,n),s=[];break;case"select":i=Y({},i,{value:void 0}),n=Y({},n,{value:void 0}),s=[];break;case"textarea":i=Di(e,i),n=Di(e,n),s=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=da)}Oi(r,n);var l;r=null;for(d in i)if(!n.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var o=i[d];for(l in o)o.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Jr.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in n){var c=n[d];if(o=i!=null?i[d]:void 0,n.hasOwnProperty(d)&&c!==o&&(c!=null||o!=null))if(d==="style")if(o){for(l in o)!o.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in c)c.hasOwnProperty(l)&&o[l]!==c[l]&&(r||(r={}),r[l]=c[l])}else r||(s||(s=[]),s.push(d,r)),r=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(s=s||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Jr.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&H("scroll",e),s||o===c||(s=[])):(s=s||[]).push(d,c))}r&&(s=s||[]).push("style",r);var d=s;(t.updateQueue=d)&&(t.flags|=4)}};Fd=function(e,t,r,n){r!==n&&(t.flags|=4)};function Fr(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Sm(e,t,r){var n=t.pendingProps;switch($s(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ue(t),null;case 1:return je(t.type)&&ua(),ue(t),null;case 3:return n=t.stateNode,br(),q(be),q(me),Ys(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Fn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,We!==null&&(fs(We),We=null))),ss(e,t),ue(t),null;case 5:Ks(t);var i=$t(un.current);if(r=t.type,e!==null&&t.stateNode!=null)Ld(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(E(166));return ue(t),null}if(e=$t(Je.current),Fn(t)){n=t.stateNode,r=t.type;var s=t.memoizedProps;switch(n[Ye]=t,n[cn]=s,e=(t.mode&1)!==0,r){case"dialog":H("cancel",n),H("close",n);break;case"iframe":case"object":case"embed":H("load",n);break;case"video":case"audio":for(i=0;i<Ur.length;i++)H(Ur[i],n);break;case"source":H("error",n);break;case"img":case"image":case"link":H("error",n),H("load",n);break;case"details":H("toggle",n);break;case"input":jl(n,s),H("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!s.multiple},H("invalid",n);break;case"textarea":Nl(n,s),H("invalid",n)}Oi(r,s),i=null;for(var l in s)if(s.hasOwnProperty(l)){var o=s[l];l==="children"?typeof o=="string"?n.textContent!==o&&(s.suppressHydrationWarning!==!0&&Ln(n.textContent,o,e),i=["children",o]):typeof o=="number"&&n.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Ln(n.textContent,o,e),i=["children",""+o]):Jr.hasOwnProperty(l)&&o!=null&&l==="onScroll"&&H("scroll",n)}switch(r){case"input":En(n),kl(n,s,!0);break;case"textarea":En(n),Sl(n);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(n.onclick=da)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=uc(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=l.createElement(r,{is:n.is}):(e=l.createElement(r),r==="select"&&(l=e,n.multiple?l.multiple=!0:n.size&&(l.size=n.size))):e=l.createElementNS(e,r),e[Ye]=t,e[cn]=n,Rd(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ii(r,n),r){case"dialog":H("cancel",e),H("close",e),i=n;break;case"iframe":case"object":case"embed":H("load",e),i=n;break;case"video":case"audio":for(i=0;i<Ur.length;i++)H(Ur[i],e);i=n;break;case"source":H("error",e),i=n;break;case"img":case"image":case"link":H("error",e),H("load",e),i=n;break;case"details":H("toggle",e),i=n;break;case"input":jl(e,n),i=Ei(e,n),H("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=Y({},n,{value:void 0}),H("invalid",e);break;case"textarea":Nl(e,n),i=Di(e,n),H("invalid",e);break;default:i=n}Oi(r,i),o=i;for(s in o)if(o.hasOwnProperty(s)){var c=o[s];s==="style"?fc(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&pc(e,c)):s==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&Zr(e,c):typeof c=="number"&&Zr(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Jr.hasOwnProperty(s)?c!=null&&s==="onScroll"&&H("scroll",e):c!=null&&Ss(e,s,c,l))}switch(r){case"input":En(e),kl(e,n,!1);break;case"textarea":En(e),Sl(e);break;case"option":n.value!=null&&e.setAttribute("value",""+St(n.value));break;case"select":e.multiple=!!n.multiple,s=n.value,s!=null?pr(e,!!n.multiple,s,!1):n.defaultValue!=null&&pr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=da)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ue(t),null;case 6:if(e&&t.stateNode!=null)Fd(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(E(166));if(r=$t(un.current),$t(Je.current),Fn(t)){if(n=t.stateNode,r=t.memoizedProps,n[Ye]=t,(s=n.nodeValue!==r)&&(e=Ee,e!==null))switch(e.tag){case 3:Ln(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ln(n.nodeValue,r,(e.mode&1)!==0)}s&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Ye]=t,t.stateNode=n}return ue(t),null;case 13:if(q(Q),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&Ce!==null&&t.mode&1&&!(t.flags&128))td(),_r(),t.flags|=98560,s=!1;else if(s=Fn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!s)throw Error(E(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[Ye]=t}else _r(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ue(t),s=!1}else We!==null&&(fs(We),We=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?ne===0&&(ne=3):ol())),t.updateQueue!==null&&(t.flags|=4),ue(t),null);case 4:return br(),ss(e,t),e===null&&ln(t.stateNode.containerInfo),ue(t),null;case 10:return Hs(t.type._context),ue(t),null;case 17:return je(t.type)&&ua(),ue(t),null;case 19:if(q(Q),s=t.memoizedState,s===null)return ue(t),null;if(n=(t.flags&128)!==0,l=s.rendering,l===null)if(n)Fr(s,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=xa(e),l!==null){for(t.flags|=128,Fr(s,!1),n=l.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)s=r,e=n,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return V(Q,Q.current&1|2),t.child}e=e.sibling}s.tail!==null&&Z()>kr&&(t.flags|=128,n=!0,Fr(s,!1),t.lanes=4194304)}else{if(!n)if(e=xa(l),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Fr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!G)return ue(t),null}else 2*Z()-s.renderingStartTime>kr&&r!==1073741824&&(t.flags|=128,n=!0,Fr(s,!1),t.lanes=4194304);s.isBackwards?(l.sibling=t.child,t.child=l):(r=s.last,r!==null?r.sibling=l:t.child=l,s.last=l)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Z(),t.sibling=null,r=Q.current,V(Q,n?r&1|2:r&1),t):(ue(t),null);case 22:case 23:return ll(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Se&1073741824&&(ue(t),t.subtreeFlags&6&&(t.flags|=8192)):ue(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function Cm(e,t){switch($s(t),t.tag){case 1:return je(t.type)&&ua(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return br(),q(be),q(me),Ys(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ks(t),null;case 13:if(q(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));_r()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(Q),null;case 4:return br(),null;case 10:return Hs(t.type._context),null;case 22:case 23:return ll(),null;case 24:return null;default:return null}}var Bn=!1,pe=!1,Em=typeof WeakSet=="function"?WeakSet:Set,T=null;function dr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){X(e,t,n)}else r.current=null}function ls(e,t,r){try{r()}catch(n){X(e,t,n)}}var go=!1;function Pm(e,t){if(Vi=la,e=Uc(),As(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var l=0,o=-1,c=-1,d=0,h=0,f=e,u=null;t:for(;;){for(var w;f!==r||i!==0&&f.nodeType!==3||(o=l+i),f!==s||n!==0&&f.nodeType!==3||(c=l+n),f.nodeType===3&&(l+=f.nodeValue.length),(w=f.firstChild)!==null;)u=f,f=w;for(;;){if(f===e)break t;if(u===r&&++d===i&&(o=l),u===s&&++h===n&&(c=l),(w=f.nextSibling)!==null)break;f=u,u=f.parentNode}f=w}r=o===-1||c===-1?null:{start:o,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Hi={focusedElem:e,selectionRange:r},la=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var x=k.memoizedProps,S=k.memoizedState,p=t.stateNode,m=p.getSnapshotBeforeUpdate(t.elementType===t.type?x:$e(t.type,x),S);p.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(v){X(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return k=go,go=!1,k}function Kr(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&ls(t,r,s)}i=i.next}while(i!==n)}}function Fa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function os(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Md(e){var t=e.alternate;t!==null&&(e.alternate=null,Md(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ye],delete t[cn],delete t[Qi],delete t[um],delete t[pm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ad(e){return e.tag===5||e.tag===3||e.tag===4}function vo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ad(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cs(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=da));else if(n!==4&&(e=e.child,e!==null))for(cs(e,t,r),e=e.sibling;e!==null;)cs(e,t,r),e=e.sibling}function ds(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(ds(e,t,r),e=e.sibling;e!==null;)ds(e,t,r),e=e.sibling}var le=null,Ue=!1;function ct(e,t,r){for(r=r.child;r!==null;)Bd(e,t,r),r=r.sibling}function Bd(e,t,r){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(Pa,r)}catch{}switch(r.tag){case 5:pe||dr(r,t);case 6:var n=le,i=Ue;le=null,ct(e,t,r),le=n,Ue=i,le!==null&&(Ue?(e=le,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):le.removeChild(r.stateNode));break;case 18:le!==null&&(Ue?(e=le,r=r.stateNode,e.nodeType===8?ci(e.parentNode,r):e.nodeType===1&&ci(e,r),nn(e)):ci(le,r.stateNode));break;case 4:n=le,i=Ue,le=r.stateNode.containerInfo,Ue=!0,ct(e,t,r),le=n,Ue=i;break;case 0:case 11:case 14:case 15:if(!pe&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var s=i,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&ls(r,t,l),i=i.next}while(i!==n)}ct(e,t,r);break;case 1:if(!pe&&(dr(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(o){X(r,t,o)}ct(e,t,r);break;case 21:ct(e,t,r);break;case 22:r.mode&1?(pe=(n=pe)||r.memoizedState!==null,ct(e,t,r),pe=n):ct(e,t,r);break;default:ct(e,t,r)}}function xo(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Em),t.forEach(function(n){var i=Mm.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function Ae(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var s=e,l=t,o=l;e:for(;o!==null;){switch(o.tag){case 5:le=o.stateNode,Ue=!1;break e;case 3:le=o.stateNode.containerInfo,Ue=!0;break e;case 4:le=o.stateNode.containerInfo,Ue=!0;break e}o=o.return}if(le===null)throw Error(E(160));Bd(s,l,i),le=null,Ue=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(d){X(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)$d(t,e),t=t.sibling}function $d(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ae(t,e),Qe(e),n&4){try{Kr(3,e,e.return),Fa(3,e)}catch(x){X(e,e.return,x)}try{Kr(5,e,e.return)}catch(x){X(e,e.return,x)}}break;case 1:Ae(t,e),Qe(e),n&512&&r!==null&&dr(r,r.return);break;case 5:if(Ae(t,e),Qe(e),n&512&&r!==null&&dr(r,r.return),e.flags&32){var i=e.stateNode;try{Zr(i,"")}catch(x){X(e,e.return,x)}}if(n&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,l=r!==null?r.memoizedProps:s,o=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&cc(i,s),Ii(o,l);var d=Ii(o,s);for(l=0;l<c.length;l+=2){var h=c[l],f=c[l+1];h==="style"?fc(i,f):h==="dangerouslySetInnerHTML"?pc(i,f):h==="children"?Zr(i,f):Ss(i,h,f,d)}switch(o){case"input":Pi(i,s);break;case"textarea":dc(i,s);break;case"select":var u=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?pr(i,!!s.multiple,w,!1):u!==!!s.multiple&&(s.defaultValue!=null?pr(i,!!s.multiple,s.defaultValue,!0):pr(i,!!s.multiple,s.multiple?[]:"",!1))}i[cn]=s}catch(x){X(e,e.return,x)}}break;case 6:if(Ae(t,e),Qe(e),n&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(x){X(e,e.return,x)}}break;case 3:if(Ae(t,e),Qe(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{nn(t.containerInfo)}catch(x){X(e,e.return,x)}break;case 4:Ae(t,e),Qe(e);break;case 13:Ae(t,e),Qe(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(il=Z())),n&4&&xo(e);break;case 22:if(h=r!==null&&r.memoizedState!==null,e.mode&1?(pe=(d=pe)||h,Ae(t,e),pe=d):Ae(t,e),Qe(e),n&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(T=e,h=e.child;h!==null;){for(f=T=h;T!==null;){switch(u=T,w=u.child,u.tag){case 0:case 11:case 14:case 15:Kr(4,u,u.return);break;case 1:dr(u,u.return);var k=u.stateNode;if(typeof k.componentWillUnmount=="function"){n=u,r=u.return;try{t=n,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(x){X(n,r,x)}}break;case 5:dr(u,u.return);break;case 22:if(u.memoizedState!==null){_o(f);continue}}w!==null?(w.return=u,T=w):_o(f)}h=h.sibling}e:for(h=null,f=e;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,c=f.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=mc("display",l))}catch(x){X(e,e.return,x)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(x){X(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ae(t,e),Qe(e),n&4&&xo(e);break;case 21:break;default:Ae(t,e),Qe(e)}}function Qe(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Ad(r)){var n=r;break e}r=r.return}throw Error(E(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(Zr(i,""),n.flags&=-33);var s=vo(e);ds(e,s,i);break;case 3:case 4:var l=n.stateNode.containerInfo,o=vo(e);cs(e,o,l);break;default:throw Error(E(161))}}catch(c){X(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function zm(e,t,r){T=e,Ud(e)}function Ud(e,t,r){for(var n=(e.mode&1)!==0;T!==null;){var i=T,s=i.child;if(i.tag===22&&n){var l=i.memoizedState!==null||Bn;if(!l){var o=i.alternate,c=o!==null&&o.memoizedState!==null||pe;o=Bn;var d=pe;if(Bn=l,(pe=c)&&!d)for(T=i;T!==null;)l=T,c=l.child,l.tag===22&&l.memoizedState!==null?wo(i):c!==null?(c.return=l,T=c):wo(i);for(;s!==null;)T=s,Ud(s),s=s.sibling;T=i,Bn=o,pe=d}yo(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,T=s):yo(e)}}function yo(e){for(;T!==null;){var t=T;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pe||Fa(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!pe)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:$e(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&ro(t,s,n);break;case 3:var l=t.updateQueue;if(l!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}ro(t,l,r)}break;case 5:var o=t.stateNode;if(r===null&&t.flags&4){r=o;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&nn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}pe||t.flags&512&&os(t)}catch(u){X(t,t.return,u)}}if(t===e){T=null;break}if(r=t.sibling,r!==null){r.return=t.return,T=r;break}T=t.return}}function _o(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var r=t.sibling;if(r!==null){r.return=t.return,T=r;break}T=t.return}}function wo(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Fa(4,t)}catch(c){X(t,r,c)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(c){X(t,i,c)}}var s=t.return;try{os(t)}catch(c){X(t,s,c)}break;case 5:var l=t.return;try{os(t)}catch(c){X(t,l,c)}}}catch(c){X(t,t.return,c)}if(t===e){T=null;break}var o=t.sibling;if(o!==null){o.return=t.return,T=o;break}T=t.return}}var Dm=Math.ceil,wa=ot.ReactCurrentDispatcher,nl=ot.ReactCurrentOwner,Re=ot.ReactCurrentBatchConfig,B=0,se=null,ee=null,oe=0,Se=0,ur=Pt(0),ne=0,hn=null,Gt=0,Ma=0,al=0,Yr=null,xe=null,il=0,kr=1/0,Ze=null,ba=!1,us=null,bt=null,$n=!1,ht=null,ja=0,Xr=0,ps=null,Zn=-1,ea=0;function he(){return B&6?Z():Zn!==-1?Zn:Zn=Z()}function jt(e){return e.mode&1?B&2&&oe!==0?oe&-oe:fm.transition!==null?(ea===0&&(ea=Sc()),ea):(e=W,e!==0||(e=window.event,e=e===void 0?16:Oc(e.type)),e):1}function He(e,t,r,n){if(50<Xr)throw Xr=0,ps=null,Error(E(185));yn(e,r,n),(!(B&2)||e!==se)&&(e===se&&(!(B&2)&&(Ma|=r),ne===4&&mt(e,oe)),ke(e,n),r===1&&B===0&&!(t.mode&1)&&(kr=Z()+500,Ia&&zt()))}function ke(e,t){var r=e.callbackNode;fp(e,t);var n=sa(e,e===se?oe:0);if(n===0)r!==null&&Pl(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Pl(r),t===1)e.tag===0?mm(bo.bind(null,e)):Jc(bo.bind(null,e)),cm(function(){!(B&6)&&zt()}),r=null;else{switch(Cc(n)){case 1:r=Ds;break;case 4:r=kc;break;case 16:r=ia;break;case 536870912:r=Nc;break;default:r=ia}r=Yd(r,Wd.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Wd(e,t){if(Zn=-1,ea=0,B&6)throw Error(E(327));var r=e.callbackNode;if(vr()&&e.callbackNode!==r)return null;var n=sa(e,e===se?oe:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=ka(e,n);else{t=n;var i=B;B|=2;var s=Hd();(se!==e||oe!==t)&&(Ze=null,kr=Z()+500,Ut(e,t));do try{Im();break}catch(o){Vd(e,o)}while(!0);Vs(),wa.current=s,B=i,ee!==null?t=0:(se=null,oe=0,t=ne)}if(t!==0){if(t===2&&(i=Ai(e),i!==0&&(n=i,t=ms(e,i))),t===1)throw r=hn,Ut(e,0),mt(e,n),ke(e,Z()),r;if(t===6)mt(e,n);else{if(i=e.current.alternate,!(n&30)&&!Tm(i)&&(t=ka(e,n),t===2&&(s=Ai(e),s!==0&&(n=s,t=ms(e,s))),t===1))throw r=hn,Ut(e,0),mt(e,n),ke(e,Z()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(E(345));case 2:Mt(e,xe,Ze);break;case 3:if(mt(e,n),(n&130023424)===n&&(t=il+500-Z(),10<t)){if(sa(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){he(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Gi(Mt.bind(null,e,xe,Ze),t);break}Mt(e,xe,Ze);break;case 4:if(mt(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var l=31-Ve(n);s=1<<l,l=t[l],l>i&&(i=l),n&=~s}if(n=i,n=Z()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Dm(n/1960))-n,10<n){e.timeoutHandle=Gi(Mt.bind(null,e,xe,Ze),n);break}Mt(e,xe,Ze);break;case 5:Mt(e,xe,Ze);break;default:throw Error(E(329))}}}return ke(e,Z()),e.callbackNode===r?Wd.bind(null,e):null}function ms(e,t){var r=Yr;return e.current.memoizedState.isDehydrated&&(Ut(e,t).flags|=256),e=ka(e,t),e!==2&&(t=xe,xe=r,t!==null&&fs(t)),e}function fs(e){xe===null?xe=e:xe.push.apply(xe,e)}function Tm(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],s=i.getSnapshot;i=i.value;try{if(!qe(s(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function mt(e,t){for(t&=~al,t&=~Ma,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Ve(t),n=1<<r;e[r]=-1,t&=~n}}function bo(e){if(B&6)throw Error(E(327));vr();var t=sa(e,0);if(!(t&1))return ke(e,Z()),null;var r=ka(e,t);if(e.tag!==0&&r===2){var n=Ai(e);n!==0&&(t=n,r=ms(e,n))}if(r===1)throw r=hn,Ut(e,0),mt(e,t),ke(e,Z()),r;if(r===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mt(e,xe,Ze),ke(e,Z()),null}function sl(e,t){var r=B;B|=1;try{return e(t)}finally{B=r,B===0&&(kr=Z()+500,Ia&&zt())}}function Qt(e){ht!==null&&ht.tag===0&&!(B&6)&&vr();var t=B;B|=1;var r=Re.transition,n=W;try{if(Re.transition=null,W=1,e)return e()}finally{W=n,Re.transition=r,B=t,!(B&6)&&zt()}}function ll(){Se=ur.current,q(ur)}function Ut(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,om(r)),ee!==null)for(r=ee.return;r!==null;){var n=r;switch($s(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&ua();break;case 3:br(),q(be),q(me),Ys();break;case 5:Ks(n);break;case 4:br();break;case 13:q(Q);break;case 19:q(Q);break;case 10:Hs(n.type._context);break;case 22:case 23:ll()}r=r.return}if(se=e,ee=e=kt(e.current,null),oe=Se=t,ne=0,hn=null,al=Ma=Gt=0,xe=Yr=null,Bt!==null){for(t=0;t<Bt.length;t++)if(r=Bt[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,s=r.pending;if(s!==null){var l=s.next;s.next=i,n.next=l}r.pending=n}Bt=null}return e}function Vd(e,t){do{var r=ee;try{if(Vs(),Yn.current=_a,ya){for(var n=K.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}ya=!1}if(qt=0,ie=re=K=null,Qr=!1,pn=0,nl.current=null,r===null||r.return===null){ne=1,hn=t,ee=null;break}e:{var s=e,l=r.return,o=r,c=t;if(t=oe,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,h=o,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var u=h.alternate;u?(h.updateQueue=u.updateQueue,h.memoizedState=u.memoizedState,h.lanes=u.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=oo(l);if(w!==null){w.flags&=-257,co(w,l,o,s,t),w.mode&1&&lo(s,d,t),t=w,c=d;var k=t.updateQueue;if(k===null){var x=new Set;x.add(c),t.updateQueue=x}else k.add(c);break e}else{if(!(t&1)){lo(s,d,t),ol();break e}c=Error(E(426))}}else if(G&&o.mode&1){var S=oo(l);if(S!==null){!(S.flags&65536)&&(S.flags|=256),co(S,l,o,s,t),Us(jr(c,o));break e}}s=c=jr(c,o),ne!==4&&(ne=2),Yr===null?Yr=[s]:Yr.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var p=Cd(s,c,t);to(s,p);break e;case 1:o=c;var m=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(bt===null||!bt.has(g)))){s.flags|=65536,t&=-t,s.lanes|=t;var v=Ed(s,o,t);to(s,v);break e}}s=s.return}while(s!==null)}Gd(r)}catch(j){t=j,ee===r&&r!==null&&(ee=r=r.return);continue}break}while(!0)}function Hd(){var e=wa.current;return wa.current=_a,e===null?_a:e}function ol(){(ne===0||ne===3||ne===2)&&(ne=4),se===null||!(Gt&268435455)&&!(Ma&268435455)||mt(se,oe)}function ka(e,t){var r=B;B|=2;var n=Hd();(se!==e||oe!==t)&&(Ze=null,Ut(e,t));do try{Om();break}catch(i){Vd(e,i)}while(!0);if(Vs(),B=r,wa.current=n,ee!==null)throw Error(E(261));return se=null,oe=0,ne}function Om(){for(;ee!==null;)qd(ee)}function Im(){for(;ee!==null&&!ip();)qd(ee)}function qd(e){var t=Kd(e.alternate,e,Se);e.memoizedProps=e.pendingProps,t===null?Gd(e):ee=t,nl.current=null}function Gd(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Cm(r,t),r!==null){r.flags&=32767,ee=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,ee=null;return}}else if(r=Sm(r,t,Se),r!==null){ee=r;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);ne===0&&(ne=5)}function Mt(e,t,r){var n=W,i=Re.transition;try{Re.transition=null,W=1,Rm(e,t,r,n)}finally{Re.transition=i,W=n}return null}function Rm(e,t,r,n){do vr();while(ht!==null);if(B&6)throw Error(E(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var s=r.lanes|r.childLanes;if(hp(e,s),e===se&&(ee=se=null,oe=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||$n||($n=!0,Yd(ia,function(){return vr(),null})),s=(r.flags&15990)!==0,r.subtreeFlags&15990||s){s=Re.transition,Re.transition=null;var l=W;W=1;var o=B;B|=4,nl.current=null,Pm(e,r),$d(r,e),tm(Hi),la=!!Vi,Hi=Vi=null,e.current=r,zm(r),sp(),B=o,W=l,Re.transition=s}else e.current=r;if($n&&($n=!1,ht=e,ja=i),s=e.pendingLanes,s===0&&(bt=null),cp(r.stateNode),ke(e,Z()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(ba)throw ba=!1,e=us,us=null,e;return ja&1&&e.tag!==0&&vr(),s=e.pendingLanes,s&1?e===ps?Xr++:(Xr=0,ps=e):Xr=0,zt(),null}function vr(){if(ht!==null){var e=Cc(ja),t=Re.transition,r=W;try{if(Re.transition=null,W=16>e?16:e,ht===null)var n=!1;else{if(e=ht,ht=null,ja=0,B&6)throw Error(E(331));var i=B;for(B|=4,T=e.current;T!==null;){var s=T,l=s.child;if(T.flags&16){var o=s.deletions;if(o!==null){for(var c=0;c<o.length;c++){var d=o[c];for(T=d;T!==null;){var h=T;switch(h.tag){case 0:case 11:case 15:Kr(8,h,s)}var f=h.child;if(f!==null)f.return=h,T=f;else for(;T!==null;){h=T;var u=h.sibling,w=h.return;if(Md(h),h===d){T=null;break}if(u!==null){u.return=w,T=u;break}T=w}}}var k=s.alternate;if(k!==null){var x=k.child;if(x!==null){k.child=null;do{var S=x.sibling;x.sibling=null,x=S}while(x!==null)}}T=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,T=l;else e:for(;T!==null;){if(s=T,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Kr(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,T=p;break e}T=s.return}}var m=e.current;for(T=m;T!==null;){l=T;var g=l.child;if(l.subtreeFlags&2064&&g!==null)g.return=l,T=g;else e:for(l=m;T!==null;){if(o=T,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Fa(9,o)}}catch(j){X(o,o.return,j)}if(o===l){T=null;break e}var v=o.sibling;if(v!==null){v.return=o.return,T=v;break e}T=o.return}}if(B=i,zt(),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(Pa,e)}catch{}n=!0}return n}finally{W=r,Re.transition=t}}return!1}function jo(e,t,r){t=jr(r,t),t=Cd(e,t,1),e=wt(e,t,1),t=he(),e!==null&&(yn(e,1,t),ke(e,t))}function X(e,t,r){if(e.tag===3)jo(e,e,r);else for(;t!==null;){if(t.tag===3){jo(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(bt===null||!bt.has(n))){e=jr(r,e),e=Ed(t,e,1),t=wt(t,e,1),e=he(),t!==null&&(yn(t,1,e),ke(t,e));break}}t=t.return}}function Lm(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=he(),e.pingedLanes|=e.suspendedLanes&r,se===e&&(oe&r)===r&&(ne===4||ne===3&&(oe&130023424)===oe&&500>Z()-il?Ut(e,0):al|=r),ke(e,t)}function Qd(e,t){t===0&&(e.mode&1?(t=Dn,Dn<<=1,!(Dn&130023424)&&(Dn=4194304)):t=1);var r=he();e=st(e,t),e!==null&&(yn(e,t,r),ke(e,r))}function Fm(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Qd(e,r)}function Mm(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(E(314))}n!==null&&n.delete(t),Qd(e,r)}var Kd;Kd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||be.current)ye=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return ye=!1,Nm(e,t,r);ye=!!(e.flags&131072)}else ye=!1,G&&t.flags&1048576&&Zc(t,fa,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Jn(e,t),e=t.pendingProps;var i=yr(t,me.current);gr(t,r),i=Js(null,t,n,e,i,r);var s=Zs();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,je(n)?(s=!0,pa(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Gs(t),i.updater=La,t.stateNode=i,i._reactInternals=t,es(t,n,e,r),t=ns(null,t,n,!0,s,r)):(t.tag=0,G&&s&&Bs(t),fe(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Jn(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=Bm(n),e=$e(n,e),i){case 0:t=rs(null,t,n,e,r);break e;case 1:t=mo(null,t,n,e,r);break e;case 11:t=uo(null,t,n,e,r);break e;case 14:t=po(null,t,n,$e(n.type,e),r);break e}throw Error(E(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:$e(n,i),rs(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:$e(n,i),mo(e,t,n,i,r);case 3:e:{if(Td(t),e===null)throw Error(E(387));n=t.pendingProps,s=t.memoizedState,i=s.element,id(e,t),va(t,n,null,r);var l=t.memoizedState;if(n=l.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=jr(Error(E(423)),t),t=fo(e,t,n,r,i);break e}else if(n!==i){i=jr(Error(E(424)),t),t=fo(e,t,n,r,i);break e}else for(Ce=_t(t.stateNode.containerInfo.firstChild),Ee=t,G=!0,We=null,r=nd(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(_r(),n===i){t=lt(e,t,r);break e}fe(e,t,n,r)}t=t.child}return t;case 5:return sd(t),e===null&&Xi(t),n=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,l=i.children,qi(n,i)?l=null:s!==null&&qi(n,s)&&(t.flags|=32),Dd(e,t),fe(e,t,l,r),t.child;case 6:return e===null&&Xi(t),null;case 13:return Od(e,t,r);case 4:return Qs(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=wr(t,null,n,r):fe(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:$e(n,i),uo(e,t,n,i,r);case 7:return fe(e,t,t.pendingProps,r),t.child;case 8:return fe(e,t,t.pendingProps.children,r),t.child;case 12:return fe(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,s=t.memoizedProps,l=i.value,V(ha,n._currentValue),n._currentValue=l,s!==null)if(qe(s.value,l)){if(s.children===i.children&&!be.current){t=lt(e,t,r);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var o=s.dependencies;if(o!==null){l=s.child;for(var c=o.firstContext;c!==null;){if(c.context===n){if(s.tag===1){c=nt(-1,r&-r),c.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?c.next=c:(c.next=h.next,h.next=c),d.pending=c}}s.lanes|=r,c=s.alternate,c!==null&&(c.lanes|=r),Ji(s.return,r,t),o.lanes|=r;break}c=c.next}}else if(s.tag===10)l=s.type===t.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(E(341));l.lanes|=r,o=l.alternate,o!==null&&(o.lanes|=r),Ji(l,r,t),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===t){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}fe(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,gr(t,r),i=Le(i),n=n(i),t.flags|=1,fe(e,t,n,r),t.child;case 14:return n=t.type,i=$e(n,t.pendingProps),i=$e(n.type,i),po(e,t,n,i,r);case 15:return Pd(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:$e(n,i),Jn(e,t),t.tag=1,je(n)?(e=!0,pa(t)):e=!1,gr(t,r),Sd(t,n,i),es(t,n,i,r),ns(null,t,n,!0,e,r);case 19:return Id(e,t,r);case 22:return zd(e,t,r)}throw Error(E(156,t.tag))};function Yd(e,t){return jc(e,t)}function Am(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ie(e,t,r,n){return new Am(e,t,r,n)}function cl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bm(e){if(typeof e=="function")return cl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Es)return 11;if(e===Ps)return 14}return 2}function kt(e,t){var r=e.alternate;return r===null?(r=Ie(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function ta(e,t,r,n,i,s){var l=2;if(n=e,typeof e=="function")cl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case tr:return Wt(r.children,i,s,t);case Cs:l=8,i|=8;break;case ki:return e=Ie(12,r,t,i|2),e.elementType=ki,e.lanes=s,e;case Ni:return e=Ie(13,r,t,i),e.elementType=Ni,e.lanes=s,e;case Si:return e=Ie(19,r,t,i),e.elementType=Si,e.lanes=s,e;case sc:return Aa(r,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ac:l=10;break e;case ic:l=9;break e;case Es:l=11;break e;case Ps:l=14;break e;case dt:l=16,n=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Ie(l,r,t,i),t.elementType=e,t.type=n,t.lanes=s,t}function Wt(e,t,r,n){return e=Ie(7,e,n,t),e.lanes=r,e}function Aa(e,t,r,n){return e=Ie(22,e,n,t),e.elementType=sc,e.lanes=r,e.stateNode={isHidden:!1},e}function vi(e,t,r){return e=Ie(6,e,null,t),e.lanes=r,e}function xi(e,t,r){return t=Ie(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function $m(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ja(0),this.expirationTimes=Ja(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ja(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function dl(e,t,r,n,i,s,l,o,c){return e=new $m(e,t,r,o,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ie(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gs(s),e}function Um(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:er,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Xd(e){if(!e)return Ct;e=e._reactInternals;e:{if(Yt(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var r=e.type;if(je(r))return Xc(e,r,t)}return t}function Jd(e,t,r,n,i,s,l,o,c){return e=dl(r,n,!0,e,i,s,l,o,c),e.context=Xd(null),r=e.current,n=he(),i=jt(r),s=nt(n,i),s.callback=t??null,wt(r,s,i),e.current.lanes=i,yn(e,i,n),ke(e,n),e}function Ba(e,t,r,n){var i=t.current,s=he(),l=jt(i);return r=Xd(r),t.context===null?t.context=r:t.pendingContext=r,t=nt(s,l),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=wt(i,t,l),e!==null&&(He(e,i,l,s),Kn(e,i,l)),l}function Na(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ko(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function ul(e,t){ko(e,t),(e=e.alternate)&&ko(e,t)}function Wm(){return null}var Zd=typeof reportError=="function"?reportError:function(e){console.error(e)};function pl(e){this._internalRoot=e}$a.prototype.render=pl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Ba(e,t,null,null)};$a.prototype.unmount=pl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qt(function(){Ba(null,e,null,null)}),t[it]=null}};function $a(e){this._internalRoot=e}$a.prototype.unstable_scheduleHydration=function(e){if(e){var t=zc();e={blockedOn:null,target:e,priority:t};for(var r=0;r<pt.length&&t!==0&&t<pt[r].priority;r++);pt.splice(r,0,e),r===0&&Tc(e)}};function ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ua(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function No(){}function Vm(e,t,r,n,i){if(i){if(typeof n=="function"){var s=n;n=function(){var d=Na(l);s.call(d)}}var l=Jd(t,n,e,0,null,!1,!1,"",No);return e._reactRootContainer=l,e[it]=l.current,ln(e.nodeType===8?e.parentNode:e),Qt(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var o=n;n=function(){var d=Na(c);o.call(d)}}var c=dl(e,0,!1,null,null,!1,!1,"",No);return e._reactRootContainer=c,e[it]=c.current,ln(e.nodeType===8?e.parentNode:e),Qt(function(){Ba(t,c,r,n)}),c}function Wa(e,t,r,n,i){var s=r._reactRootContainer;if(s){var l=s;if(typeof i=="function"){var o=i;i=function(){var c=Na(l);o.call(c)}}Ba(t,l,e,i)}else l=Vm(r,t,e,i,n);return Na(l)}Ec=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=$r(t.pendingLanes);r!==0&&(Ts(t,r|1),ke(t,Z()),!(B&6)&&(kr=Z()+500,zt()))}break;case 13:Qt(function(){var n=st(e,1);if(n!==null){var i=he();He(n,e,1,i)}}),ul(e,1)}};Os=function(e){if(e.tag===13){var t=st(e,134217728);if(t!==null){var r=he();He(t,e,134217728,r)}ul(e,134217728)}};Pc=function(e){if(e.tag===13){var t=jt(e),r=st(e,t);if(r!==null){var n=he();He(r,e,t,n)}ul(e,t)}};zc=function(){return W};Dc=function(e,t){var r=W;try{return W=e,t()}finally{W=r}};Li=function(e,t,r){switch(t){case"input":if(Pi(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=Oa(n);if(!i)throw Error(E(90));oc(n),Pi(n,i)}}}break;case"textarea":dc(e,r);break;case"select":t=r.value,t!=null&&pr(e,!!r.multiple,t,!1)}};vc=sl;xc=Qt;var Hm={usingClientEntryPoint:!1,Events:[wn,ir,Oa,hc,gc,sl]},Mr={findFiberByHostInstance:At,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qm={bundleType:Mr.bundleType,version:Mr.version,rendererPackageName:Mr.rendererPackageName,rendererConfig:Mr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ot.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wc(e),e===null?null:e.stateNode},findFiberByHostInstance:Mr.findFiberByHostInstance||Wm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Un=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Un.isDisabled&&Un.supportsFiber)try{Pa=Un.inject(qm),Xe=Un}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hm;ze.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ml(t))throw Error(E(200));return Um(e,t,null,r)};ze.createRoot=function(e,t){if(!ml(e))throw Error(E(299));var r=!1,n="",i=Zd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=dl(e,1,!1,null,null,r,!1,n,i),e[it]=t.current,ln(e.nodeType===8?e.parentNode:e),new pl(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=wc(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return Qt(e)};ze.hydrate=function(e,t,r){if(!Ua(t))throw Error(E(200));return Wa(null,e,t,!0,r)};ze.hydrateRoot=function(e,t,r){if(!ml(e))throw Error(E(405));var n=r!=null&&r.hydratedSources||null,i=!1,s="",l=Zd;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),t=Jd(t,null,e,1,r??null,i,!1,s,l),e[it]=t.current,ln(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new $a(t)};ze.render=function(e,t,r){if(!Ua(t))throw Error(E(200));return Wa(null,e,t,!1,r)};ze.unmountComponentAtNode=function(e){if(!Ua(e))throw Error(E(40));return e._reactRootContainer?(Qt(function(){Wa(null,null,e,!1,function(){e._reactRootContainer=null,e[it]=null})}),!0):!1};ze.unstable_batchedUpdates=sl;ze.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Ua(r))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Wa(e,t,r,!1,n)};ze.version="18.3.1-next-f1338f8080-20240426";function eu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eu)}catch(e){console.error(e)}}eu(),ec.exports=ze;var Gm=ec.exports,So=Gm;bi.createRoot=So.createRoot,bi.hydrateRoot=So.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gn(){return gn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},gn.apply(null,arguments)}var gt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(gt||(gt={}));const Co="popstate";function Qm(e){e===void 0&&(e={});function t(n,i){let{pathname:s,search:l,hash:o}=n.location;return hs("",{pathname:s,search:l,hash:o},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(n,i){return typeof i=="string"?i:Sa(i)}return Ym(t,r,null,e)}function te(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function tu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Km(){return Math.random().toString(36).substr(2,8)}function Eo(e,t){return{usr:e.state,key:e.key,idx:t}}function hs(e,t,r,n){return r===void 0&&(r=null),gn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Pr(t):t,{state:r,key:t&&t.key||n||Km()})}function Sa(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Pr(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function Ym(e,t,r,n){n===void 0&&(n={});let{window:i=document.defaultView,v5Compat:s=!1}=n,l=i.history,o=gt.Pop,c=null,d=h();d==null&&(d=0,l.replaceState(gn({},l.state,{idx:d}),""));function h(){return(l.state||{idx:null}).idx}function f(){o=gt.Pop;let S=h(),p=S==null?null:S-d;d=S,c&&c({action:o,location:x.location,delta:p})}function u(S,p){o=gt.Push;let m=hs(x.location,S,p);d=h()+1;let g=Eo(m,d),v=x.createHref(m);try{l.pushState(g,"",v)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(v)}s&&c&&c({action:o,location:x.location,delta:1})}function w(S,p){o=gt.Replace;let m=hs(x.location,S,p);d=h();let g=Eo(m,d),v=x.createHref(m);l.replaceState(g,"",v),s&&c&&c({action:o,location:x.location,delta:0})}function k(S){let p=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof S=="string"?S:Sa(S);return m=m.replace(/ $/,"%20"),te(p,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,p)}let x={get action(){return o},get location(){return e(i,l)},listen(S){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Co,f),c=S,()=>{i.removeEventListener(Co,f),c=null}},createHref(S){return t(i,S)},createURL:k,encodeLocation(S){let p=k(S);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:u,replace:w,go(S){return l.go(S)}};return x}var Po;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Po||(Po={}));function Xm(e,t,r){return r===void 0&&(r="/"),Jm(e,t,r)}function Jm(e,t,r,n){let i=typeof t=="string"?Pr(t):t,s=fl(i.pathname||"/",r);if(s==null)return null;let l=ru(e);Zm(l);let o=null,c=pf(s);for(let d=0;o==null&&d<l.length;++d)o=cf(l[d],c);return o}function ru(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let i=(s,l,o)=>{let c={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:l,route:s};c.relativePath.startsWith("/")&&(te(c.relativePath.startsWith(n),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(n.length));let d=Nt([n,c.relativePath]),h=r.concat(c);s.children&&s.children.length>0&&(te(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),ru(s.children,t,h,d)),!(s.path==null&&!s.index)&&t.push({path:d,score:lf(d,s.index),routesMeta:h})};return e.forEach((s,l)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))i(s,l);else for(let c of nu(s.path))i(s,l,c)}),t}function nu(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,i=r.endsWith("?"),s=r.replace(/\?$/,"");if(n.length===0)return i?[s,""]:[s];let l=nu(n.join("/")),o=[];return o.push(...l.map(c=>c===""?s:[s,c].join("/"))),i&&o.push(...l),o.map(c=>e.startsWith("/")&&c===""?"/":c)}function Zm(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:of(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const ef=/^:[\w-]+$/,tf=3,rf=2,nf=1,af=10,sf=-2,zo=e=>e==="*";function lf(e,t){let r=e.split("/"),n=r.length;return r.some(zo)&&(n+=sf),t&&(n+=rf),r.filter(i=>!zo(i)).reduce((i,s)=>i+(ef.test(s)?tf:s===""?nf:af),n)}function of(e,t){return e.length===t.length&&e.slice(0,-1).every((n,i)=>n===t[i])?e[e.length-1]-t[t.length-1]:0}function cf(e,t,r){let{routesMeta:n}=e,i={},s="/",l=[];for(let o=0;o<n.length;++o){let c=n[o],d=o===n.length-1,h=s==="/"?t:t.slice(s.length)||"/",f=df({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},h),u=c.route;if(!f)return null;Object.assign(i,f.params),l.push({params:i,pathname:Nt([s,f.pathname]),pathnameBase:hf(Nt([s,f.pathnameBase])),route:u}),f.pathnameBase!=="/"&&(s=Nt([s,f.pathnameBase]))}return l}function df(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=uf(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let s=i[0],l=s.replace(/(.)\/+$/,"$1"),o=i.slice(1);return{params:n.reduce((d,h,f)=>{let{paramName:u,isOptional:w}=h;if(u==="*"){let x=o[f]||"";l=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const k=o[f];return w&&!k?d[u]=void 0:d[u]=(k||"").replace(/%2F/g,"/"),d},{}),pathname:s,pathnameBase:l,pattern:e}}function uf(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),tu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,o,c)=>(n.push({paramName:o,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),n]}function pf(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return tu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function fl(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function mf(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:i=""}=typeof e=="string"?Pr(e):e,s;return r?(r=su(r),r.startsWith("/")?s=Do(r.substring(1),"/"):s=Do(r,t)):s=t,{pathname:s,search:gf(n),hash:vf(i)}}function Do(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function yi(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ff(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function au(e,t){let r=ff(e);return t?r.map((n,i)=>i===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function iu(e,t,r,n){n===void 0&&(n=!1);let i;typeof e=="string"?i=Pr(e):(i=gn({},e),te(!i.pathname||!i.pathname.includes("?"),yi("?","pathname","search",i)),te(!i.pathname||!i.pathname.includes("#"),yi("#","pathname","hash",i)),te(!i.search||!i.search.includes("#"),yi("#","search","hash",i)));let s=e===""||i.pathname==="",l=s?"/":i.pathname,o;if(l==null)o=r;else{let f=t.length-1;if(!n&&l.startsWith("..")){let u=l.split("/");for(;u[0]==="..";)u.shift(),f-=1;i.pathname=u.join("/")}o=f>=0?t[f]:"/"}let c=mf(i,o),d=l&&l!=="/"&&l.endsWith("/"),h=(s||l===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(d||h)&&(c.pathname+="/"),c}const su=e=>e.replace(/\/\/+/g,"/"),Nt=e=>su(e.join("/")),hf=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),gf=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,vf=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function xf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const lu=["post","put","patch","delete"];new Set(lu);const yf=["get",...lu];new Set(yf);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vn(){return vn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},vn.apply(null,arguments)}const hl=b.createContext(null),_f=b.createContext(null),Xt=b.createContext(null),Va=b.createContext(null),Dt=b.createContext({outlet:null,matches:[],isDataRoute:!1}),ou=b.createContext(null);function wf(e,t){let{relative:r}=t===void 0?{}:t;jn()||te(!1);let{basename:n,navigator:i}=b.useContext(Xt),{hash:s,pathname:l,search:o}=uu(e,{relative:r}),c=l;return n!=="/"&&(c=l==="/"?n:Nt([n,l])),i.createHref({pathname:c,search:o,hash:s})}function jn(){return b.useContext(Va)!=null}function Jt(){return jn()||te(!1),b.useContext(Va).location}function cu(e){b.useContext(Xt).static||b.useLayoutEffect(e)}function zr(){let{isDataRoute:e}=b.useContext(Dt);return e?If():bf()}function bf(){jn()||te(!1);let e=b.useContext(hl),{basename:t,future:r,navigator:n}=b.useContext(Xt),{matches:i}=b.useContext(Dt),{pathname:s}=Jt(),l=JSON.stringify(au(i,r.v7_relativeSplatPath)),o=b.useRef(!1);return cu(()=>{o.current=!0}),b.useCallback(function(d,h){if(h===void 0&&(h={}),!o.current)return;if(typeof d=="number"){n.go(d);return}let f=iu(d,JSON.parse(l),s,h.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Nt([t,f.pathname])),(h.replace?n.replace:n.push)(f,h.state,h)},[t,n,l,s,e])}function du(){let{matches:e}=b.useContext(Dt),t=e[e.length-1];return t?t.params:{}}function uu(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=b.useContext(Xt),{matches:i}=b.useContext(Dt),{pathname:s}=Jt(),l=JSON.stringify(au(i,n.v7_relativeSplatPath));return b.useMemo(()=>iu(e,JSON.parse(l),s,r==="path"),[e,l,s,r])}function jf(e,t){return kf(e,t)}function kf(e,t,r,n){jn()||te(!1);let{navigator:i}=b.useContext(Xt),{matches:s}=b.useContext(Dt),l=s[s.length-1],o=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let d=Jt(),h;if(t){var f;let S=typeof t=="string"?Pr(t):t;c==="/"||(f=S.pathname)!=null&&f.startsWith(c)||te(!1),h=S}else h=d;let u=h.pathname||"/",w=u;if(c!=="/"){let S=c.replace(/^\//,"").split("/");w="/"+u.replace(/^\//,"").split("/").slice(S.length).join("/")}let k=Xm(e,{pathname:w}),x=Pf(k&&k.map(S=>Object.assign({},S,{params:Object.assign({},o,S.params),pathname:Nt([c,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?c:Nt([c,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),s,r,n);return t&&x?b.createElement(Va.Provider,{value:{location:vn({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:gt.Pop}},x):x}function Nf(){let e=Of(),t=xf(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),r?b.createElement("pre",{style:i},r):null,null)}const Sf=b.createElement(Nf,null);class Cf extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?b.createElement(Dt.Provider,{value:this.props.routeContext},b.createElement(ou.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ef(e){let{routeContext:t,match:r,children:n}=e,i=b.useContext(hl);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),b.createElement(Dt.Provider,{value:t},n)}function Pf(e,t,r,n){var i;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var s;if(!r)return null;if(r.errors)e=r.matches;else if((s=n)!=null&&s.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let l=e,o=(i=r)==null?void 0:i.errors;if(o!=null){let h=l.findIndex(f=>f.route.id&&(o==null?void 0:o[f.route.id])!==void 0);h>=0||te(!1),l=l.slice(0,Math.min(l.length,h+1))}let c=!1,d=-1;if(r&&n&&n.v7_partialHydration)for(let h=0;h<l.length;h++){let f=l[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(d=h),f.route.id){let{loaderData:u,errors:w}=r,k=f.route.loader&&u[f.route.id]===void 0&&(!w||w[f.route.id]===void 0);if(f.route.lazy||k){c=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((h,f,u)=>{let w,k=!1,x=null,S=null;r&&(w=o&&f.route.id?o[f.route.id]:void 0,x=f.route.errorElement||Sf,c&&(d<0&&u===0?(Rf("route-fallback"),k=!0,S=null):d===u&&(k=!0,S=f.route.hydrateFallbackElement||null)));let p=t.concat(l.slice(0,u+1)),m=()=>{let g;return w?g=x:k?g=S:f.route.Component?g=b.createElement(f.route.Component,null):f.route.element?g=f.route.element:g=h,b.createElement(Ef,{match:f,routeContext:{outlet:h,matches:p,isDataRoute:r!=null},children:g})};return r&&(f.route.ErrorBoundary||f.route.errorElement||u===0)?b.createElement(Cf,{location:r.location,revalidation:r.revalidation,component:x,error:w,children:m(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):m()},null)}var pu=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(pu||{}),mu=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(mu||{});function zf(e){let t=b.useContext(hl);return t||te(!1),t}function Df(e){let t=b.useContext(_f);return t||te(!1),t}function Tf(e){let t=b.useContext(Dt);return t||te(!1),t}function fu(e){let t=Tf(),r=t.matches[t.matches.length-1];return r.route.id||te(!1),r.route.id}function Of(){var e;let t=b.useContext(ou),r=Df(),n=fu();return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function If(){let{router:e}=zf(pu.UseNavigateStable),t=fu(mu.UseNavigateStable),r=b.useRef(!1);return cu(()=>{r.current=!0}),b.useCallback(function(i,s){s===void 0&&(s={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,vn({fromRouteId:t},s)))},[e,t])}const To={};function Rf(e,t,r){To[e]||(To[e]=!0)}function Lf(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Be(e){te(!1)}function Ff(e){let{basename:t="/",children:r=null,location:n,navigationType:i=gt.Pop,navigator:s,static:l=!1,future:o}=e;jn()&&te(!1);let c=t.replace(/^\/*/,"/"),d=b.useMemo(()=>({basename:c,navigator:s,static:l,future:vn({v7_relativeSplatPath:!1},o)}),[c,o,s,l]);typeof n=="string"&&(n=Pr(n));let{pathname:h="/",search:f="",hash:u="",state:w=null,key:k="default"}=n,x=b.useMemo(()=>{let S=fl(h,c);return S==null?null:{location:{pathname:S,search:f,hash:u,state:w,key:k},navigationType:i}},[c,h,f,u,w,k,i]);return x==null?null:b.createElement(Xt.Provider,{value:d},b.createElement(Va.Provider,{children:r,value:x}))}function Mf(e){let{children:t,location:r}=e;return jf(gs(t),r)}new Promise(()=>{});function gs(e,t){t===void 0&&(t=[]);let r=[];return b.Children.forEach(e,(n,i)=>{if(!b.isValidElement(n))return;let s=[...t,i];if(n.type===b.Fragment){r.push.apply(r,gs(n.props.children,s));return}n.type!==Be&&te(!1),!n.props.index||!n.props.children||te(!1);let l={id:n.props.id||s.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(l.children=gs(n.props.children,s)),r.push(l)}),r}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vs(){return vs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},vs.apply(null,arguments)}function Af(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function Bf(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function $f(e,t){return e.button===0&&(!t||t==="_self")&&!Bf(e)}function xs(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let n=e[r];return t.concat(Array.isArray(n)?n.map(i=>[r,i]):[[r,n]])},[]))}function Uf(e,t){let r=xs(e);return t&&t.forEach((n,i)=>{r.has(i)||t.getAll(i).forEach(s=>{r.append(i,s)})}),r}const Wf=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Vf="6";try{window.__reactRouterVersion=Vf}catch{}const Hf="startTransition",Oo=Lu[Hf];function qf(e){let{basename:t,children:r,future:n,window:i}=e,s=b.useRef();s.current==null&&(s.current=Qm({window:i,v5Compat:!0}));let l=s.current,[o,c]=b.useState({action:l.action,location:l.location}),{v7_startTransition:d}=n||{},h=b.useCallback(f=>{d&&Oo?Oo(()=>c(f)):c(f)},[c,d]);return b.useLayoutEffect(()=>l.listen(h),[l,h]),b.useEffect(()=>Lf(n),[n]),b.createElement(Ff,{basename:t,children:r,location:o.location,navigationType:o.action,navigator:l,future:n})}const Gf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Qf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,I=b.forwardRef(function(t,r){let{onClick:n,relative:i,reloadDocument:s,replace:l,state:o,target:c,to:d,preventScrollReset:h,viewTransition:f}=t,u=Af(t,Wf),{basename:w}=b.useContext(Xt),k,x=!1;if(typeof d=="string"&&Qf.test(d)&&(k=d,Gf))try{let g=new URL(window.location.href),v=d.startsWith("//")?new URL(g.protocol+d):new URL(d),j=fl(v.pathname,w);v.origin===g.origin&&j!=null?d=j+v.search+v.hash:x=!0}catch{}let S=wf(d,{relative:i}),p=Kf(d,{replace:l,state:o,target:c,preventScrollReset:h,relative:i,viewTransition:f});function m(g){n&&n(g),g.defaultPrevented||p(g)}return b.createElement("a",vs({},u,{href:k||S,onClick:x||s?n:m,ref:r,target:c}))});var Io;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Io||(Io={}));var Ro;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ro||(Ro={}));function Kf(e,t){let{target:r,replace:n,state:i,preventScrollReset:s,relative:l,viewTransition:o}=t===void 0?{}:t,c=zr(),d=Jt(),h=uu(e,{relative:l});return b.useCallback(f=>{if($f(f,r)){f.preventDefault();let u=n!==void 0?n:Sa(d)===Sa(h);c(e,{replace:u,state:i,preventScrollReset:s,relative:l,viewTransition:o})}},[d,c,h,n,i,r,e,s,l,o])}function Yf(e){let t=b.useRef(xs(e)),r=b.useRef(!1),n=Jt(),i=b.useMemo(()=>Uf(n.search,r.current?null:t.current),[n.search]),s=zr(),l=b.useCallback((o,c)=>{const d=xs(typeof o=="function"?o(i):o);r.current=!0,s("?"+d,c)},[s,i]);return[i,l]}const Xf={SAVE10:{code:"SAVE10",type:"percent",value:10,minOrder:999,desc:"10% off on orders above ₹999",maxUses:1},FLAT150:{code:"FLAT150",type:"flat",value:150,minOrder:1499,desc:"₹150 off on orders above ₹1,499",maxUses:1},NEWUSER:{code:"NEWUSER",type:"percent",value:15,minOrder:0,desc:"15% off — Welcome offer (no minimum)",maxUses:1}},It=(e,t)=>{try{return JSON.parse(localStorage.getItem(e))??t}catch{return t}},Rt=(e,t)=>localStorage.setItem(e,JSON.stringify(t)),Jf=()=>({cart:It("bmg_cart",[]),wishlist:It("bmg_wishlist",[]),orders:It("bmg_orders",[]),toasts:[],searchQuery:"",appliedCoupon:It("bmg_coupon",null),usedCoupons:It("bmg_used_coupons",[]),productOverrides:It("bmg_prod_overrides",{}),deletedProductIds:It("bmg_deleted_ids",[])});function Zf(e,t){var r;switch(t.type){case"CART_ADD":{const{product:n,variantKey:i,qty:s=1}=t.payload,l=`${n.id}__${i}`,o=e.cart.find(h=>h.itemId===l),c=n.stock??1/0;if(o){const h=Math.min(o.qty+s,c);if(h===o.qty)return e;const f=e.cart.map(u=>u.itemId===l?{...u,qty:h}:u);return{...e,cart:f}}const d=[...e.cart,{itemId:l,product:n,variantKey:i,qty:Math.min(s,c)}];return{...e,cart:d}}case"CART_REMOVE":{const n=e.cart.filter(i=>i.itemId!==t.payload);return{...e,cart:n}}case"CART_UPDATE_QTY":{const{itemId:n,qty:i}=t.payload;if(i<1)return{...e,cart:e.cart.filter(l=>l.itemId!==n)};const s=e.cart.map(l=>{if(l.itemId!==n)return l;const o=l.product.stock??1/0;return{...l,qty:Math.min(i,o)}});return{...e,cart:s}}case"CART_CLEAR":return{...e,cart:[],appliedCoupon:null};case"WISHLIST_TOGGLE":{const n=t.payload,i=e.wishlist.includes(n)?e.wishlist.filter(s=>s!==n):[...e.wishlist,n];return{...e,wishlist:i}}case"WISHLIST_REMOVE":return{...e,wishlist:e.wishlist.filter(n=>n!==t.payload)};case"COUPON_APPLY":{const{coupon:n}=t.payload;return{...e,appliedCoupon:n,usedCoupons:[...e.usedCoupons,n.code]}}case"COUPON_REMOVE":return{...e,appliedCoupon:null};case"ORDER_PLACE":{const n=t.payload.order||{id:"BMG"+Date.now().toString(36).toUpperCase(),date:new Date().toISOString(),items:e.cart.map(i=>({...i})),subtotal:t.payload.subtotal,shipping:t.payload.shipping,discount:t.payload.discount,total:t.payload.total,coupon:((r=e.appliedCoupon)==null?void 0:r.code)||null,address:t.payload.address,payment:t.payload.payment,status:"Confirmed",timeline:[{label:"Order Placed",done:!0,time:new Date().toLocaleString()},{label:"Confirmed",done:!0,time:new Date().toLocaleString()},{label:"Processing",done:!1,time:""},{label:"Shipped",done:!1,time:""},{label:"Delivered",done:!1,time:""}]};return{...e,orders:[n,...e.orders],cart:[],appliedCoupon:null}}case"ADMIN_UPDATE_PRODUCT":{const{id:n,changes:i}=t.payload,s=e.productOverrides[n]||{};return{...e,productOverrides:{...e.productOverrides,[n]:{...s,...i}}}}case"ADMIN_DELETE_PRODUCT":return{...e,deletedProductIds:[...e.deletedProductIds,t.payload]};case"ADMIN_RESTORE_PRODUCT":return{...e,deletedProductIds:e.deletedProductIds.filter(n=>n!==t.payload)};case"ADMIN_UPDATE_ORDER_STATUS":{const{orderId:n,status:i,timelineLabel:s}=t.payload,l=e.orders.map(o=>{if(o.id!==n)return o;const c=(o.timeline||[]).map(d=>d.label===s?{...d,done:!0,time:new Date().toLocaleString()}:d);return{...o,status:i,timeline:c}});return{...e,orders:l}}case"TOAST_ADD":{const n={id:Date.now()+Math.random(),...t.payload};return{...e,toasts:[...e.toasts.slice(-3),n]}}case"TOAST_REMOVE":return{...e,toasts:e.toasts.filter(n=>n.id!==t.payload)};case"SET_SEARCH":return{...e,searchQuery:t.payload};default:return e}}const hu=b.createContext(null);function eh({children:e}){const[t,r]=b.useReducer(Zf,null,Jf);b.useEffect(()=>{Rt("bmg_cart",t.cart)},[t.cart]),b.useEffect(()=>{Rt("bmg_wishlist",t.wishlist)},[t.wishlist]),b.useEffect(()=>{Rt("bmg_orders",t.orders)},[t.orders]),b.useEffect(()=>{Rt("bmg_coupon",t.appliedCoupon)},[t.appliedCoupon]),b.useEffect(()=>{Rt("bmg_used_coupons",t.usedCoupons)},[t.usedCoupons]),b.useEffect(()=>{Rt("bmg_prod_overrides",t.productOverrides)},[t.productOverrides]),b.useEffect(()=>{Rt("bmg_deleted_ids",t.deletedProductIds)},[t.deletedProductIds]),b.useEffect(()=>{if(!t.toasts.length)return;const _=t.toasts[t.toasts.length-1],C=setTimeout(()=>r({type:"TOAST_REMOVE",payload:_.id}),3800);return()=>clearTimeout(C)},[t.toasts]);const n=b.useCallback((_,C="info",z)=>r({type:"TOAST_ADD",payload:{message:_,type:C,icon:z}}),[]),i=b.useCallback((_,C,z=1)=>{const N=`${_.id}__${C}`,L=t.cart.find(U=>U.itemId===N),P=_.stock??9999;if(P===0){n("This item is out of stock.","error","✕");return}if(L&&L.qty>=P){n(`Only ${P} units in stock — you've already added the maximum.`,"warning","⚠️");return}r({type:"CART_ADD",payload:{product:_,variantKey:C,qty:z}});const $=C!=="default"?" · "+C.split("|").map(U=>U.split(":")[1]).join(", "):"";n(`${_.name}${$} added to cart!`,"success","🛒")},[t.cart]),s=b.useCallback(_=>{r({type:"CART_REMOVE",payload:_}),n("Item removed from cart.","info","🗑️")},[n]),l=b.useCallback((_,C)=>{const z=t.cart.find(L=>L.itemId===_);if(!z)return;const N=z.product.stock??9999;if(C<1){r({type:"CART_REMOVE",payload:_}),n("Item removed from cart.","info","🗑️");return}if(C>N){n(`Only ${N} units available in stock.`,"warning","⚠️"),r({type:"CART_UPDATE_QTY",payload:{itemId:_,qty:N}});return}r({type:"CART_UPDATE_QTY",payload:{itemId:_,qty:C}})},[t.cart,n]),o=b.useCallback(()=>{r({type:"CART_CLEAR"}),n("Cart cleared.","info","🗑️")},[n]),c=b.useCallback((_,C)=>{const z=t.wishlist.includes(_);r({type:"WISHLIST_TOGGLE",payload:_}),n(z?"Removed from wishlist.":"♥ Saved to wishlist!",z?"info":"success",z?"♡":"♥")},[t.wishlist,n]),d=b.useCallback(_=>{const C=Object.keys(_.variants||{}).length>0?Object.keys(_.variants).map(z=>`${z}:${_.variants[z][0]}`).join("|"):"default";i(_,C,1),r({type:"WISHLIST_REMOVE",payload:_.id})},[i]),h=b.useCallback((_,C)=>{const z=_.trim().toUpperCase(),N=Xf[z];if(!N)return n(`"${z}" is not a valid coupon code.`,"error","✕"),!1;if(t.usedCoupons.includes(z))return n(`You've already used coupon "${z}".`,"error","✕"),!1;if(t.appliedCoupon)return n("Remove the current coupon before applying another.","warning","⚠️"),!1;if(C<N.minOrder)return n(`Minimum order ₹${N.minOrder.toLocaleString("en-IN")} required for this coupon. (current: ₹${C.toLocaleString("en-IN")})`,"warning","⚠️"),!1;r({type:"COUPON_APPLY",payload:{coupon:N}});const L=N.type==="percent"?`${N.value}% off`:`₹${N.value} off`;return n(`Coupon "${z}" applied — ${L}!`,"success","🎉"),!0},[t.appliedCoupon,t.usedCoupons,n]),f=b.useCallback(()=>{r({type:"COUPON_REMOVE"}),n("Coupon removed.","info","🏷️")},[n]),u=b.useCallback((_,C,z,N)=>{r({type:"ORDER_PLACE",payload:{..._,address:C,payment:z,order:N}})},[]),w=b.useCallback(_=>r({type:"SET_SEARCH",payload:_}),[]),k=t.cart.reduce((_,C)=>_+C.qty,0),x=t.cart.reduce((_,C)=>_+C.product.price*C.qty,0),S=x===0||x>=499?0:99;let p=0;if(t.appliedCoupon){const _=t.appliedCoupon;p=_.type==="percent"?Math.round(x*_.value/100):_.value,p=Math.min(p,x)}const m=x+S-p,g=[...new Set(t.cart.map(_=>_.product.department))],v=b.useCallback((_,C)=>{r({type:"ADMIN_UPDATE_PRODUCT",payload:{id:_,changes:C}}),n("Product updated successfully.","success","✓")},[n]),j=b.useCallback((_,C)=>{r({type:"ADMIN_DELETE_PRODUCT",payload:_}),n(`"${C}" removed from catalogue.`,"info","🗑️")},[n]),D=b.useCallback(_=>{r({type:"ADMIN_RESTORE_PRODUCT",payload:_}),n("Product restored.","success","✓")},[n]),y=b.useCallback((_,C,z)=>{r({type:"ADMIN_UPDATE_ORDER_STATUS",payload:{orderId:_,status:C,timelineLabel:z}}),n(`Order ${_} → ${C}`,"success","✓")},[n]);return a.jsx(hu.Provider,{value:{...t,cartCount:k,cartSubtotal:x,shipping:S,couponDiscount:p,cartTotal:m,cartDepartments:g,toast:n,addToCart:i,removeFromCart:s,updateQty:l,clearCart:o,toggleWishlist:c,moveToCart:d,applyCoupon:h,removeCoupon:f,placeOrder:u,setSearch:w,adminUpdateProduct:v,adminDeleteProduct:j,adminRestoreProduct:D,adminUpdateOrderStatus:y,dispatch:r},children:e})}const Me=()=>{const e=b.useContext(hu);if(!e)throw new Error("useStore must be used inside <StoreProvider>");return e},_e=[{id:"fashion",name:"Fashion",icon:"👗",color:"#E91E8C",gradient:"linear-gradient(135deg,#E91E8C,#FF6B6B)",tagline:"Wear Your Story",description:"Curated everyday styles for every occasion.",heroImage:"https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80"},{id:"beauty",name:"Beauty",icon:"💄",color:"#FF6B6B",gradient:"linear-gradient(135deg,#FF6B6B,#FFA07A)",tagline:"Your Routine, Upgraded",description:"Premium skincare, cosmetics & everyday beauty.",heroImage:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&q=80"},{id:"electronics",name:"Electronics",icon:"⚡",color:"#7C3AED",gradient:"linear-gradient(135deg,#7C3AED,#C4B5FD)",tagline:"Smart Picks, Better Living",description:"Cutting-edge tech for modern everyday life.",heroImage:"https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200&q=80"},{id:"home",name:"Home & Living",icon:"🏡",color:"#059669",gradient:"linear-gradient(135deg,#059669,#34D399)",tagline:"Make Your Space Yours",description:"Design-forward homewares, décor & organizers.",heroImage:"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80"},{id:"grocery",name:"Grocery",icon:"🛒",color:"#D97706",gradient:"linear-gradient(135deg,#D97706,#FBBF24)",tagline:"Everyday Essentials, Sorted",description:"Organic, fresh, and pantry staples delivered fast.",heroImage:"https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80"},{id:"kids",name:"Kids & Toys",icon:"🧸",color:"#0284C7",gradient:"linear-gradient(135deg,#0284C7,#38BDF8)",tagline:"Little Things, Big Joy",description:"Safe, fun and educational products for little ones.",heroImage:"https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=1200&q=80"}],Ne=[{id:"f1",name:"Oversized Cotton T-Shirt",brand:"BLOWMAGGY Basics",department:"fashion",category:"Tops",price:799,originalPrice:1299,rating:4.6,reviews:384,stock:120,badge:"Best Seller",image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",images:["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80","https://images.unsplash.com/photo-1622445275576-721325763afe?w=600&q=80"],description:"The everyday essential you never knew you needed. Cut from 100% ring-spun cotton in a relaxed oversized fit. Pre-washed for softness from the very first wear. Pairs effortlessly with jeans, joggers, or layered under a jacket.",variants:{Size:["XS","S","M","L","XL","XXL"],Colour:["White","Black","Sage Green","Dusty Pink","Navy"]},specs:{Material:"100% Ring-Spun Cotton",Fit:"Oversized",Wash:"Machine Washable",Origin:"Made in India"},tags:["cotton","basics","casual","everyday"]},{id:"f2",name:"Everyday Sneakers",brand:"StepOut",department:"fashion",category:"Footwear",price:2499,originalPrice:3999,rating:4.5,reviews:217,stock:64,badge:"Sale",image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",images:["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80","https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80"],description:"Minimal canvas sneakers built for all-day comfort. Cushioned insole, rubber outsole with grip, and a clean low-profile silhouette that goes with everything. Available in UK sizes 6–12.",variants:{Size:["UK 6","UK 7","UK 8","UK 9","UK 10","UK 11","UK 12"],Colour:["White/White","Black/Black","Cream/Tan","Navy/White"]},specs:{Upper:"Canvas",Sole:"Rubber",Insole:"Foam Cushion",Closure:"Lace-Up"},tags:["sneakers","casual","footwear","canvas"]},{id:"f3",name:"Minimalist Wristwatch",brand:"Timecraft",department:"fashion",category:"Accessories",price:3499,originalPrice:5499,rating:4.7,reviews:142,stock:35,badge:"Premium",image:"https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80",images:["https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80","https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=600&q=80"],description:"A clean Japanese-movement quartz watch with a 38mm brushed stainless steel case and sapphire-coated mineral glass. Genuine leather strap with quick-release pins. Water resistant to 3 ATM.",variants:{Strap:["Black Leather","Brown Leather","Mesh Steel","NATO Olive"]},specs:{Movement:"Japanese Quartz",Case:"38mm Stainless Steel",Glass:"Sapphire-Coated Mineral","Water Resistance":"3 ATM"},tags:["watch","accessories","minimalist","quartz"]},{id:"f4",name:"Classic Denim Jacket",brand:"DenimCo",department:"fashion",category:"Outerwear",price:2999,originalPrice:4499,rating:4.4,reviews:198,stock:48,badge:null,image:"https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=600&q=80",images:["https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=600&q=80","https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80"],description:"A timeless denim jacket in 12oz washed cotton denim. Chest pockets, button-front closure, and a slightly cropped fit. Gets better with every wash. A wardrobe investment that never goes out of style.",variants:{Size:["XS","S","M","L","XL"],Wash:["Light Wash","Mid Wash","Dark Indigo","Black"]},specs:{Material:"100% Cotton Denim",Weight:"12 oz",Fit:"Regular-Slightly Cropped",Closure:"Button-Front"},tags:["denim","jacket","outerwear","classic"]},{id:"b1",name:"Hydrating Face Serum",brand:"GlowLab",department:"beauty",category:"Skincare",price:1499,originalPrice:1999,rating:4.8,reviews:512,stock:200,badge:"Best Seller",image:"https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80",images:["https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80","https://images.unsplash.com/photo-1617897903246-719242758050?w=600&q=80"],description:"Powered by 2% Hyaluronic Acid + Vitamin C, this serum delivers deep hydration and visible brightness in 2 weeks. Lightweight, non-sticky, and fragrance-free. Suitable for all skin types including sensitive skin.",variants:{Size:["15ml","30ml","50ml"]},specs:{"Key Ingredients":"Hyaluronic Acid, Vitamin C, Niacinamide","Skin Type":"All Types",Fragrance:"Fragrance-Free",SPF:"None"},tags:["serum","hydration","vitamin-c","skincare"]},{id:"b2",name:"Daily Moisturizer SPF 30",brand:"GlowLab",department:"beauty",category:"Skincare",price:899,originalPrice:1299,rating:4.6,reviews:341,stock:175,badge:null,image:"https://images.unsplash.com/photo-1556228578-dd539282b964?w=600&q=80",images:["https://images.unsplash.com/photo-1556228578-dd539282b964?w=600&q=80"],description:"An everyday moisturizer that doubles as SPF 30 sun protection. Ceramide-rich formula repairs the skin barrier, locks in moisture for 48 hours, and leaves a matte-satin finish. Dermatologically tested.",variants:{Size:["50ml","100ml"],Type:["Normal-Oily","Dry-Combination"]},specs:{"Key Ingredients":"Ceramides, Hyaluronic Acid, SPF 30","Skin Type":"All Types",Finish:"Matte-Satin",Fragrance:"Lightly Scented"},tags:["moisturizer","spf","skincare","daily"]},{id:"b3",name:"Matte Lipstick",brand:"ColorKiss",department:"beauty",category:"Makeup",price:599,originalPrice:899,rating:4.5,reviews:629,stock:300,badge:"Sale",image:"https://images.unsplash.com/photo-1586495777744-4e6232bf2919?w=600&q=80",images:["https://images.unsplash.com/photo-1586495777744-4e6232bf2919?w=600&q=80","https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&q=80"],description:"Highly-pigmented, long-wear matte lipstick with a velvety finish that lasts up to 12 hours. Enriched with Vitamin E and jojoba oil to keep lips comfortable and conditioned. No feathering, no fading.",variants:{Shade:["Ruby Red","Nude Blush","Berry Plum","Rosewood","Coral Crush","Deep Bordeaux"]},specs:{Finish:"Matte","Wear Time":"12+ Hours",Formula:"Vitamin E + Jojoba Oil",Tested:"Dermatologically Tested"},tags:["lipstick","matte","makeup","long-wear"]},{id:"b4",name:"Gentle Face Cleanser",brand:"PureForm",department:"beauty",category:"Skincare",price:449,originalPrice:649,rating:4.7,reviews:289,stock:250,badge:null,image:"https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&q=80",images:["https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&q=80"],description:"A pH-balanced, sulphate-free gel cleanser that removes makeup, sunscreen, and impurities without stripping the skin. Infused with Aloe Vera and Green Tea extract. Safe for daily use, morning and evening.",variants:{Size:["100ml","200ml"]},specs:{Formula:"Sulphate-Free Gel","Key Ingredients":"Aloe Vera, Green Tea Extract",pH:"Balanced (~5.5)",Usage:"AM & PM"},tags:["cleanser","skincare","gentle","sulphate-free"]},{id:"e1",name:"Wireless Headphones",brand:"SoundWave",department:"electronics",category:"Audio",price:6999,originalPrice:9999,rating:4.7,reviews:748,stock:55,badge:"Best Seller",image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",images:["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80","https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&q=80"],description:"Over-ear wireless headphones with 40mm dynamic drivers, Active Noise Cancellation, and 30-hour battery life. Foldable design with memory foam ear cushions. Bluetooth 5.3 with multipoint pairing for two devices simultaneously.",variants:{Colour:["Matte Black","Pearl White","Midnight Blue"]},specs:{"Driver Size":"40mm Dynamic",ANC:"Active Noise Cancellation",Battery:"30 Hours",Bluetooth:"5.3",Charging:"USB-C (2hr fast charge)"},tags:["headphones","anc","wireless","bluetooth","audio"]},{id:"e2",name:"Smart Fitness Watch",brand:"FitTech",department:"electronics",category:"Wearables",price:8499,originalPrice:12999,rating:4.5,reviews:423,stock:42,badge:"Sale",image:"https://images.unsplash.com/photo-1544117519-31a4b719223d?w=600&q=80",images:["https://images.unsplash.com/photo-1544117519-31a4b719223d?w=600&q=80","https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&q=80"],description:'1.43" AMOLED always-on display with GPS, SpO2 blood oxygen monitoring, ECG, sleep tracking, and 100+ workout modes. 7-day battery, 5ATM water resistance. Compatible with Android & iOS.',variants:{Colour:["Graphite Black","Silver White","Rose Gold"],Size:["41mm","45mm"]},specs:{Display:'1.43" AMOLED',GPS:"Built-in GPS",Battery:"7 Days","Water Resistance":"5ATM",Health:"SpO2 + ECG + Sleep"},tags:["smartwatch","fitness","wearable","gps","health"]},{id:"e3",name:"Portable Bluetooth Speaker",brand:"SoundWave",department:"electronics",category:"Audio",price:3299,originalPrice:4999,rating:4.4,reviews:312,stock:88,badge:null,image:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80",images:["https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80"],description:"360° surround sound in a rugged IPX7 waterproof cylinder. 20W output with dual passive radiators for deep bass. 18-hour battery, built-in mic for hands-free calls, and a bungee cord for easy attachment.",variants:{Colour:["Forest Green","Ocean Blue","Charcoal Black","Sunset Orange"]},specs:{Output:"20W","Sound Stage":"360° Surround",Battery:"18 Hours","Water Resistance":"IPX7",Connectivity:"Bluetooth 5.0 + AUX"},tags:["speaker","bluetooth","portable","waterproof","audio"]},{id:"e4",name:"Mechanical Keyboard",brand:"TypeMaster",department:"electronics",category:"Computing",price:5499,originalPrice:7999,rating:4.8,reviews:189,stock:30,badge:"Premium",image:"https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80",images:["https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80"],description:"TKL (Tenkeyless) mechanical keyboard with Cherry MX-compatible switches. Per-key RGB backlighting with 18 preset effects, PBT double-shot keycaps, and a hot-swap PCB so you can change switches without soldering.",variants:{Switch:["Red (Linear)","Brown (Tactile)","Blue (Clicky)"],Layout:["US QWERTY","UK QWERTY"]},specs:{Layout:"TKL 87-key",Switches:"Hot-Swappable MX-Compatible",Keycaps:"PBT Double-Shot",Backlight:"Per-Key RGB",Interface:"USB-C Detachable"},tags:["keyboard","mechanical","gaming","computing","rgb"]},{id:"h1",name:"Ceramic Coffee Mug",brand:"KilnWorks",department:"home",category:"Kitchen & Dining",price:549,originalPrice:799,rating:4.6,reviews:284,stock:350,badge:"Best Seller",image:"https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80",images:["https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80"],description:"Hand-thrown stoneware mug with a speckled glaze finish. 350ml capacity, comfortable C-handle, and a lead-free food-safe glaze. Dishwasher and microwave safe. Each piece has subtle handmade variations that make it uniquely yours.",variants:{Colour:["Speckled White","Sage Green","Terracotta","Charcoal","Dusty Blue"],Size:["250ml","350ml","450ml"]},specs:{Material:"Stoneware Ceramic",Capacity:"350ml (standard)",Safe:"Microwave & Dishwasher Safe",Finish:"Food-Safe Glaze"},tags:["mug","ceramic","coffee","kitchen","handmade"]},{id:"h2",name:"Minimal Desk Lamp",brand:"LightForm",department:"home",category:"Lighting",price:2199,originalPrice:2999,rating:4.5,reviews:147,stock:65,badge:null,image:"https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=600&q=80",images:["https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=600&q=80"],description:"Architect-style adjustable desk lamp with a weighted base, flexible gooseneck arm, and a touch-dimmable LED. 3 colour temperatures (warm / neutral / daylight), 5 brightness levels, and a built-in USB-A charging port.",variants:{Colour:["Matte Black","Brushed Brass","Matte White"]},specs:{Bulb:"Built-in LED (10W)","Colour Temps":"2700K / 4000K / 6500K",Brightness:"5 Levels","Extra Port":"USB-A Charging",Control:"Touch Dimmer"},tags:["lamp","desk","lighting","led","home-office"]},{id:"h3",name:"Decorative Cushion",brand:"CasaLux",department:"home",category:"Bedroom & Décor",price:699,originalPrice:999,rating:4.4,reviews:193,stock:200,badge:null,image:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",images:["https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80"],description:"A 45×45cm cushion cover in textured boucle fabric with a concealed zip. Plump poly-fill insert included. Elevates any sofa, chair, or bed with minimal effort. Cover is machine washable.",variants:{Colour:["Cream","Sage Green","Dusty Rose","Terracotta","Slate Grey"],Fill:["With Insert","Cover Only"]},specs:{Size:"45×45 cm",Material:"Boucle Fabric Cover",Fill:"Poly-Fill Insert",Care:"Machine Washable Cover"},tags:["cushion","decor","boucle","living-room","bedroom"]},{id:"h4",name:"Modular Storage Organizer",brand:"NeatNest",department:"home",category:"Storage & Organization",price:1299,originalPrice:1799,rating:4.7,reviews:326,stock:110,badge:null,image:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",images:["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"],description:"A 6-compartment modular desk organizer in sustainable bamboo. Holds pens, scissors, phone, cards, notes, and miscellaneous items. Stackable design for expanding storage. Smooth, splinter-free finish.",variants:{Material:["Natural Bamboo","White Bamboo","Walnut-Finish Bamboo"],Compartments:["4 Slots","6 Slots","9 Slots"]},specs:{Material:"Sustainable Bamboo",Compartments:"6 (standard)",Stackable:"Yes","Eco-Certified":"FSC-Certified Bamboo"},tags:["organizer","storage","bamboo","desk","sustainable"]},{id:"g1",name:"Organic Rolled Oats",brand:"GrainGood",department:"grocery",category:"Breakfast & Cereals",price:299,originalPrice:399,rating:4.8,reviews:672,stock:800,badge:"Best Seller",image:"https://images.unsplash.com/photo-1587049352847-ec7daf4e0f3c?w=600&q=80",images:["https://images.unsplash.com/photo-1587049352847-ec7daf4e0f3c?w=600&q=80"],description:"USDA Organic certified whole rolled oats. Stone-ground from non-GMO oat groats for maximum fibre and nutrients. Cooks in 5 minutes. Perfect for porridge, overnight oats, smoothies, or baking. No additives or preservatives.",variants:{Size:["500g","1kg","2kg"]},specs:{Certification:"USDA Organic / India Organic","Fibre per 100g":"10.6g",Gluten:"Processed in Gluten-Free Facility","Cook Time":"5 Minutes"},tags:["oats","organic","breakfast","healthy","whole-grain"]},{id:"g2",name:"Premium Filter Coffee",brand:"BrewCraft",department:"grocery",category:"Beverages",price:649,originalPrice:849,rating:4.9,reviews:914,stock:500,badge:"Best Seller",image:"https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80",images:["https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80"],description:"A medium-dark roast blend of 70% Arabica (Chikmagalur) and 30% Robusta (Coorg). Rich, full-bodied with notes of dark chocolate, caramel, and a smoky finish. Available as whole beans or freshly ground to your preference.",variants:{Weight:["250g","500g","1kg"],Grind:["Whole Bean","Filter Grind","Espresso Fine","French Press Coarse"]},specs:{Blend:"70% Arabica + 30% Robusta",Roast:"Medium-Dark",Origin:"Chikmagalur + Coorg, India","Flavour Notes":"Dark Chocolate, Caramel, Smoky"},tags:["coffee","filter","arabica","robusta","beverages"]},{id:"g3",name:"Mixed Dry Fruits Box",brand:"NutriNest",department:"grocery",category:"Nuts & Dry Fruits",price:799,originalPrice:999,rating:4.6,reviews:378,stock:420,badge:null,image:"https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80",images:["https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80"],description:"A curated gift-quality box of premium dry fruits: Afghani almonds, Chilean walnuts, Iranian pistachios, dried cranberries, and golden raisins. No added sugar, no preservatives. Packed in a resealable airtight box.",variants:{Size:["250g","500g","1kg"]},specs:{Contents:"Almonds, Walnuts, Pistachios, Cranberries, Raisins",Preservatives:"None","Added Sugar":"None",Packaging:"Resealable Airtight Box"},tags:["dry-fruits","nuts","healthy","snacks","gift"]},{id:"g4",name:"Healthy Snack Box",brand:"MunchRight",department:"grocery",category:"Snacks & Munchies",price:549,originalPrice:749,rating:4.5,reviews:241,stock:300,badge:null,image:"https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600&q=80",images:["https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600&q=80"],description:"A curated box of 10 guilt-free snacks: roasted makhana, multigrain crackers, dark chocolate bites, trail mix, and more. All items are <200 kcal per serving. No maida, no refined sugar, no artificial flavours.",variants:{Box:["10-Piece Assorted","20-Piece Assorted","Custom Build"]},specs:{Items:"10 Snacks per Box",Calories:"<200 kcal/serving","Free From":"Maida, Refined Sugar, Artificial Flavours","Shelf Life":"3 Months"},tags:["snacks","healthy","guilt-free","munchies","box"]},{id:"k1",name:"Building Blocks Set",brand:"PlayBrix",department:"kids",category:"Building & STEM",price:1799,originalPrice:2499,rating:4.8,reviews:543,stock:145,badge:"Best Seller",image:"https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80",images:["https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80"],description:"120-piece classic building blocks set in ABS plastic. Compatible with all major brick brands. Includes baseplates, standard bricks, windows, doors, wheels, and character figures. Develops creativity, spatial reasoning, and fine motor skills.",variants:{Pieces:["60-Piece Starter","120-Piece Classic","250-Piece Deluxe"],Theme:["City","Nature","Space","Fantasy"]},specs:{Pieces:"120 (standard)",Material:"BPA-Free ABS Plastic","Age Range":"3+ Years",Compatibility:"Universal Brick Compatible",Safety:"CE / BIS Certified"},tags:["blocks","building","stem","educational","lego-compatible"]},{id:"k2",name:"Wooden Educational Puzzle",brand:"WoodLearn",department:"kids",category:"Puzzles & Games",price:699,originalPrice:999,rating:4.7,reviews:318,stock:220,badge:null,image:"https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&q=80",images:["https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&q=80"],description:"Chunky wooden puzzle with raised handles for easy gripping. Comes in three themes: Alphabet (26 pieces), Animals (20 pieces), or Numbers & Shapes (30 pieces). Finished with non-toxic, child-safe paint. Perfect for toddlers 2–5 years.",variants:{Theme:["Alphabet A-Z","Farm Animals","Numbers & Shapes","World Map"]},specs:{Material:"Rubber Wood",Paint:"Non-Toxic, Child-Safe","Age Range":"2–5 Years",Handles:"Raised Grip Knobs",Certifications:"EN71 / BIS Certified"},tags:["puzzle","wooden","educational","toddler","montessori"]},{id:"k3",name:"Soft Teddy Bear",brand:"HugBuddy",department:"kids",category:"Soft Toys",price:899,originalPrice:1299,rating:4.9,reviews:721,stock:310,badge:null,image:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",images:["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"],description:"Ultra-soft plush teddy bear made from OEKO-TEX certified hypoallergenic polyester. Embroidered safe eyes (no choking hazard), inner PP cotton fill for a huggable shape. Machine washable. Safe from birth — a perfect first soft toy.",variants:{Size:["Small 20cm","Medium 35cm","Large 50cm","Giant 75cm"],Colour:["Classic Brown","Honey Gold","Grey","Cream White","Blush Pink"]},specs:{Material:"OEKO-TEX Certified Polyester Plush",Fill:"PP Cotton",Eyes:"Embroidered (Safe)",Washable:"Machine Washable","Safe From":"Birth+"},tags:["teddy","plush","soft-toy","baby","gift"]},{id:"k4",name:"Kids Art & Craft Kit",brand:"CreativeKids",department:"kids",category:"Arts & Crafts",price:1199,originalPrice:1599,rating:4.6,reviews:264,stock:185,badge:null,image:"https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80",images:["https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80"],description:"A complete creative kit with 24 washable watercolours, 12 oil pastels, 6 acrylic paint tubes, 3 brushes, 2 sponges, a mixing palette, and 20 sheets of 160gsm cartridge paper. All materials are non-toxic and washable. Ideal for ages 4–12.",variants:{Kit:["Watercolour Starter","Full Art Kit","Deluxe Craft Box"]},specs:{Contents:"24 Watercolours + 12 Pastels + 6 Acrylics + Brushes + Paper","Age Range":"4–12 Years",Washable:"Yes","Non-Toxic":"ASTM D-4236 Certified"},tags:["art","craft","kids","creative","painting","watercolour"]}],th=()=>{try{return JSON.parse(localStorage.getItem("bmg_prod_overrides"))||{}}catch{return{}}},rh=()=>{try{return JSON.parse(localStorage.getItem("bmg_deleted_ids"))||[]}catch{return[]}},gu=e=>{const r=th()[e.id];return r?{...e,...r}:e},vu=()=>{const e=rh();return Ne.filter(t=>!e.includes(t.id)).map(gu)},we=e=>_e.find(t=>t.id===e),nh=e=>{const t=Ne.find(r=>r.id===e);return t?gu(t):void 0},ah=e=>vu().filter(t=>t.department===e),ih=(e="")=>{const t=e.toLowerCase().trim(),r=vu();return t?r.filter(n=>{var i;return n.name.toLowerCase().includes(t)||n.description.toLowerCase().includes(t)||(n.brand||"").toLowerCase().includes(t)||n.category.toLowerCase().includes(t)||n.tags.some(s=>s.includes(t))||((i=_e.find(s=>s.id===n.department))==null?void 0:i.name.toLowerCase().includes(t))}):r},sh=e=>{const t=e?Ne.filter(r=>r.department===e):Ne;return[...new Set(t.map(r=>r.category))]},R=e=>"₹"+e.toLocaleString("en-IN"),Nr=(e,t)=>t&&t>e?Math.round((1-e/t)*100):0,xu=(e,t)=>{const r=[...e];switch(t){case"price-asc":return r.sort((n,i)=>n.price-i.price);case"price-desc":return r.sort((n,i)=>i.price-n.price);case"rating":return r.sort((n,i)=>i.rating-n.rating);case"discount":return r.sort((n,i)=>Nr(i.price,i.originalPrice)-Nr(n.price,n.originalPrice));default:return r.sort((n,i)=>i.reviews-n.reviews)}};function lh(){const e=["THE EVERYTHING SALE IS LIVE — Discover something for every part of your life.","FREE SHIPPING on orders above ₹499 · All departments, one cart.","NEW ARRIVALS just dropped in Fashion, Beauty & Electronics. Shop now →"],[t,r]=b.useState(0);return b.useEffect(()=>{const n=setInterval(()=>r(i=>(i+1)%e.length),4e3);return()=>clearInterval(n)},[]),a.jsxs("div",{className:"ann-bar",children:[a.jsx("span",{className:"ann-bar__text",children:e[t]}),a.jsx("style",{children:`
        .ann-bar {
          background: linear-gradient(90deg, var(--ink) 0%, #2d1040 50%, var(--ink) 100%);
          color: white; text-align: center;
          padding: 10px var(--space-4);
          font-size: 0.78rem; font-weight: 600; letter-spacing: 0.04em;
          position: relative; overflow: hidden;
        }
        .ann-bar::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent 0%, rgba(233,30,140,.15) 50%, transparent 100%);
        }
        .ann-bar__text { position: relative; z-index: 1; }
        .ann-bar__text .ann-magenta { color: var(--magenta); }
      `})]})}function oh(){const{cartCount:e,searchQuery:t,setSearch:r}=Me(),[n,i]=b.useState(!1),[s,l]=b.useState(!1),[o,c]=b.useState(!1),[d,h]=b.useState(t||""),f=zr(),u=Jt(),w=b.useRef(null);b.useEffect(()=>{const x=()=>l(window.scrollY>20);return window.addEventListener("scroll",x),()=>window.removeEventListener("scroll",x)},[]),b.useEffect(()=>{i(!1),c(!1)},[u.pathname]),b.useEffect(()=>{const x=S=>{w.current&&!w.current.contains(S.target)&&c(!1)};return document.addEventListener("mousedown",x),()=>document.removeEventListener("mousedown",x)},[]);const k=x=>{x.preventDefault(),d.trim()&&(r&&r(d.trim()),f(`/search?q=${encodeURIComponent(d.trim())}`))};return a.jsxs(a.Fragment,{children:[a.jsx(lh,{}),a.jsxs("header",{className:`header${s?" header--scrolled":""}`,children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"header__inner",children:[a.jsx(I,{to:"/",className:"header__logo",children:a.jsxs("span",{className:"logo-text",children:["BLOW",a.jsx("span",{className:"logo-slash",children:"/"}),"MAGGY"]})}),a.jsxs("nav",{className:"header__nav",ref:w,children:[a.jsxs("button",{className:"header__depts-btn",onClick:()=>c(x=>!x),"aria-expanded":o,id:"dept-nav-btn",children:["Departments",a.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:a.jsx("polyline",{points:"6 9 12 15 18 9"})})]}),o&&a.jsx("div",{className:"dept-dropdown",role:"menu",children:_e.map(x=>a.jsxs(I,{to:`/department/${x.id}`,className:"dept-dropdown__item",onClick:()=>c(!1),role:"menuitem",children:[a.jsx("span",{className:"dept-dropdown__icon",style:{background:x.gradient},children:x.icon}),a.jsxs("div",{children:[a.jsx("div",{className:"dept-dropdown__name",children:x.name}),a.jsx("div",{className:"dept-dropdown__tagline",children:x.tagline})]})]},x.id))})]}),a.jsxs("form",{className:"header__search",onSubmit:k,role:"search",children:[a.jsxs("svg",{className:"header__search-icon",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("circle",{cx:"11",cy:"11",r:"8"}),a.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),a.jsx("input",{type:"text",placeholder:"Search products, brands, departments…",value:d,onChange:x=>h(x.target.value),className:"header__search-input",id:"global-search","aria-label":"Search"}),d&&a.jsx("button",{type:"button",onClick:()=>h(""),className:"header__search-clear",children:"×"})]}),a.jsxs("div",{className:"header__actions",children:[a.jsx(I,{to:"/wishlist",className:"header__action-btn",title:"Wishlist",id:"wishlist-btn",children:a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})})}),a.jsx(I,{to:"/orders",className:"header__action-btn",title:"My Orders",id:"orders-btn",children:a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),a.jsx("polyline",{points:"14 2 14 8 20 8"}),a.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),a.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"})]})}),a.jsx(I,{to:"/admin",className:"header__action-btn",title:"Account / Admin",id:"account-btn",children:a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),a.jsx("circle",{cx:"12",cy:"7",r:"4"})]})}),a.jsxs(I,{to:"/cart",className:"header__cart-btn",id:"cart-btn","aria-label":`Cart, ${e} items`,children:[a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("circle",{cx:"9",cy:"21",r:"1"}),a.jsx("circle",{cx:"20",cy:"21",r:"1"}),a.jsx("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"})]}),e>0&&a.jsx("span",{className:"header__cart-badge",children:e>99?"99+":e})]}),a.jsx("button",{className:"header__burger",onClick:()=>i(x=>!x),"aria-label":"Toggle mobile menu","aria-expanded":n,id:"mobile-menu-btn",children:a.jsx("span",{className:n?"open":""})})]})]}),n&&a.jsxs("div",{className:"header__mobile-menu",id:"mobile-menu",children:[a.jsxs("form",{onSubmit:k,className:"header__mobile-search",children:[a.jsx("input",{type:"text",placeholder:"Search products…",value:d,onChange:x=>h(x.target.value),className:"input","aria-label":"Mobile search"}),a.jsx("button",{type:"submit",className:"btn btn-primary btn-sm",children:"Go"})]}),a.jsx("div",{className:"header__mobile-depts",children:_e.map(x=>a.jsxs(I,{to:`/department/${x.id}`,className:"header__mobile-dept",children:[a.jsx("span",{children:x.icon})," ",x.name]},x.id))}),a.jsxs("div",{className:"header__mobile-links",children:[a.jsx(I,{to:"/wishlist",children:"♡  Wishlist"}),a.jsx(I,{to:"/orders",children:"📦  My Orders"}),a.jsxs(I,{to:"/cart",children:["🛒  Cart ",e>0&&`(${e})`]}),a.jsx(I,{to:"/admin",children:"👤  Account / Admin"})]})]})]}),a.jsx("style",{children:`
          .header {
            position: sticky; top: 0; z-index: 1000;
            background: rgba(253,248,245,0.88);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-bottom: 1px solid transparent;
            transition: all 300ms var(--ease);
          }
          .header--scrolled {
            background: rgba(253,248,245,0.98);
            border-bottom-color: var(--border);
            box-shadow: 0 2px 20px rgba(0,0,0,.06);
          }
          .header__inner {
            display: flex; align-items: center; gap: var(--space-5);
            height: 68px;
          }
          .header__logo { flex-shrink: 0; text-decoration: none; }
          .logo-text {
            font-family: 'Inter', sans-serif;
            font-weight: 900; font-size: 1.35rem;
            letter-spacing: -0.04em; color: var(--ink);
          }
          .logo-slash { color: var(--magenta); }

          /* Nav */
          .header__nav { position: relative; flex-shrink: 0; }
          .header__depts-btn {
            display: flex; align-items: center; gap: 6px;
            font-size: 0.875rem; font-weight: 600;
            color: var(--ink); padding: 8px 16px;
            border-radius: var(--radius-full);
            background: var(--surface);
            border: 1.5px solid var(--border);
            transition: all var(--duration) var(--ease);
            cursor: pointer;
          }
          .header__depts-btn:hover { border-color: var(--magenta); color: var(--magenta); }

          .dept-dropdown {
            position: absolute; top: calc(100% + 12px); left: 0;
            background: var(--white);
            border: 1px solid var(--border);
            border-radius: var(--radius-xl);
            box-shadow: var(--shadow-xl);
            padding: var(--space-3);
            display: grid; grid-template-columns: 1fr 1fr;
            gap: var(--space-2); min-width: 480px;
            animation: fadeDown 200ms var(--ease);
            z-index: 200;
          }
          @keyframes fadeDown {
            from { opacity:0; transform:translateY(-8px); }
            to   { opacity:1; transform:translateY(0); }
          }
          .dept-dropdown__item {
            display: flex; align-items: center; gap: var(--space-3);
            padding: 10px var(--space-4);
            border-radius: var(--radius-md);
            transition: background var(--duration) var(--ease);
            text-decoration: none;
          }
          .dept-dropdown__item:hover { background: var(--ivory); }
          .dept-dropdown__icon {
            width: 40px; height: 40px; border-radius: var(--radius-md);
            display: flex; align-items: center; justify-content: center;
            font-size: 1.2rem; flex-shrink: 0;
          }
          .dept-dropdown__name  { font-weight: 600; font-size: 0.875rem; color: var(--ink); }
          .dept-dropdown__tagline { font-size: 0.72rem; color: var(--ink-light); margin-top: 1px; }

          /* Search */
          .header__search {
            flex: 1; max-width: 420px;
            display: flex; align-items: center; gap: var(--space-2);
            background: var(--surface);
            border: 1.5px solid var(--border);
            border-radius: var(--radius-full);
            padding: 9px 16px;
            transition: border-color var(--duration) var(--ease), box-shadow var(--duration) var(--ease);
          }
          .header__search:focus-within {
            border-color: var(--magenta);
            box-shadow: var(--shadow-glow);
          }
          .header__search-icon { color: var(--ink-light); flex-shrink: 0; }
          .header__search-input {
            flex: 1; border: none; background: none;
            font-size: 0.875rem; color: var(--ink);
          }
          .header__search-input:focus { outline: none; }
          .header__search-input::placeholder { color: var(--ink-light); }
          .header__search-clear {
            background: none; border: none; color: var(--ink-light);
            cursor: pointer; font-size: 1.1rem; line-height: 1;
            padding: 0 2px; flex-shrink: 0;
          }
          .header__search-clear:hover { color: var(--magenta); }

          /* Actions */
          .header__actions {
            display: flex; align-items: center; gap: var(--space-2);
            margin-left: auto; flex-shrink: 0;
          }
          .header__action-btn {
            width: 40px; height: 40px; border-radius: var(--radius-full);
            display: flex; align-items: center; justify-content: center;
            color: var(--ink-muted);
            transition: all var(--duration) var(--ease);
            text-decoration: none;
          }
          .header__action-btn:hover { color: var(--magenta); background: var(--lavender-soft); }

          .header__cart-btn {
            position: relative;
            display: flex; align-items: center; justify-content: center;
            width: 44px; height: 44px;
            background: linear-gradient(135deg, var(--magenta), var(--coral));
            color: white; border-radius: var(--radius-full);
            box-shadow: 0 4px 14px rgba(233,30,140,.3);
            transition: all var(--duration) var(--ease);
            text-decoration: none;
          }
          .header__cart-btn:hover {
            transform: scale(1.06);
            box-shadow: 0 6px 20px rgba(233,30,140,.45);
          }
          .header__cart-badge {
            position: absolute; top: -5px; right: -5px;
            background: var(--ink); color: white;
            font-size: 0.65rem; font-weight: 800;
            min-width: 19px; height: 19px;
            border-radius: 10px; padding: 0 5px;
            display: flex; align-items: center; justify-content: center;
            border: 2px solid var(--ivory);
            animation: pop 200ms var(--ease);
          }
          @keyframes pop {
            from { transform: scale(0); }
            to   { transform: scale(1); }
          }

          /* Burger */
          .header__burger {
            display: none; width: 36px; height: 36px;
            align-items: center; justify-content: center;
            background: none; border: none; cursor: pointer; flex-shrink: 0;
          }
          .header__burger span,
          .header__burger span::before,
          .header__burger span::after {
            display: block; width: 22px; height: 2px;
            background: var(--ink); border-radius: 2px;
            transition: all 300ms var(--ease); position: relative;
          }
          .header__burger span::before,
          .header__burger span::after { content: ''; position: absolute; }
          .header__burger span::before { top: -7px; }
          .header__burger span::after  { top:  7px; }
          .header__burger span.open { background: transparent; }
          .header__burger span.open::before { top: 0; transform: rotate(45deg); }
          .header__burger span.open::after  { top: 0; transform: rotate(-45deg); }

          /* Mobile menu */
          .header__mobile-menu {
            padding: var(--space-4) 0 var(--space-6);
            border-top: 1px solid var(--border);
            animation: fadeDown 200ms var(--ease);
          }
          .header__mobile-search {
            display: flex; gap: var(--space-3); margin-bottom: var(--space-5);
          }
          .header__mobile-search .input { border-radius: var(--radius-full); }
          .header__mobile-depts {
            display: grid; grid-template-columns: 1fr 1fr;
            gap: var(--space-2); margin-bottom: var(--space-4);
          }
          .header__mobile-dept {
            display: flex; align-items: center; gap: var(--space-2);
            padding: var(--space-3); border-radius: var(--radius-md);
            background: var(--surface); border: 1px solid var(--border);
            font-size: 0.85rem; font-weight: 600; color: var(--ink);
            text-decoration: none; transition: all var(--duration) var(--ease);
          }
          .header__mobile-dept:hover { border-color: var(--magenta); color: var(--magenta); }
          .header__mobile-links {
            display: flex; flex-direction: column; gap: var(--space-1);
          }
          .header__mobile-links a {
            padding: 10px var(--space-3); border-radius: var(--radius-md);
            font-weight: 600; color: var(--ink); text-decoration: none;
            transition: all var(--duration) var(--ease);
          }
          .header__mobile-links a:hover { color: var(--magenta); background: var(--lavender-soft); }

          /* Responsive */
          @media (max-width: 960px) {
            .header__nav, .header__search { display: none; }
            .header__burger { display: flex; }
          }
          @media (max-width: 600px) {
            .header__action-btn { display: none; }
          }
        `})]})]})}function ch(){return a.jsxs("footer",{className:"footer",id:"site-footer",children:[a.jsx("div",{className:"footer__wave"}),a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"footer__top",children:[a.jsxs("div",{className:"footer__brand",children:[a.jsxs(I,{to:"/",className:"footer__logo",children:["BLOW",a.jsx("span",{className:"footer__logo-slash",children:"/"}),"MAGGY"]}),a.jsx("p",{className:"footer__tagline",children:"Every Department. One Cart. One Checkout."}),a.jsx("p",{className:"footer__desc",children:"The multi-departmental online store bringing Fashion, Beauty, Electronics, Home & Living, Grocery, and Kids & Toys under one roof."}),a.jsx("div",{className:"footer__socials",children:[["IG","Instagram"],["PT","Pinterest"],["TW","Twitter / X"],["YT","YouTube"]].map(([e,t])=>a.jsx("button",{className:"footer__social",title:t,"aria-label":t,children:e},t))})]}),a.jsxs("div",{className:"footer__col",children:[a.jsx("h5",{className:"footer__col-title",children:"Departments"}),_e.map(e=>a.jsxs(I,{to:`/department/${e.id}`,className:"footer__link",id:`footer-dept-${e.id}`,children:[e.icon," ",e.name]},e.id))]}),a.jsxs("div",{className:"footer__col",children:[a.jsx("h5",{className:"footer__col-title",children:"Customer Support"}),a.jsx(I,{to:"/orders",className:"footer__link",children:"Track My Order"}),a.jsx("span",{className:"footer__link",children:"Returns & Refunds"}),a.jsx("span",{className:"footer__link",children:"Size Guide"}),a.jsx("span",{className:"footer__link",children:"Shipping Policy"}),a.jsx("span",{className:"footer__link",children:"Contact Us"}),a.jsx("span",{className:"footer__link",children:"FAQs"})]}),a.jsxs("div",{className:"footer__col",children:[a.jsx("h5",{className:"footer__col-title",children:"Policies"}),a.jsx("span",{className:"footer__link",children:"Privacy Policy"}),a.jsx("span",{className:"footer__link",children:"Terms of Service"}),a.jsx("span",{className:"footer__link",children:"Cookie Policy"}),a.jsx("span",{className:"footer__link",children:"Accessibility"}),a.jsxs("div",{className:"footer__newsletter",children:[a.jsx("h5",{className:"footer__col-title",style:{marginTop:"var(--space-5)"},children:"Stay Updated"}),a.jsx("p",{className:"footer__newsletter-note",children:"Get exclusive deals & new arrivals:"}),a.jsxs("div",{className:"footer__nl-form",children:[a.jsx("input",{type:"email",placeholder:"your@email.com",className:"footer__nl-input","aria-label":"Email for newsletter"}),a.jsx("button",{className:"footer__nl-btn","aria-label":"Subscribe",children:"→"})]})]})]})]}),a.jsx("hr",{className:"footer__divider"}),a.jsxs("div",{className:"footer__bottom",children:[a.jsx("p",{className:"footer__copy",children:"© 2026 BLOWMAGGY · Built for Vibe Coding Competition 2026 · Vol. 01 — The Everything Issue"}),a.jsx("div",{className:"footer__payments",children:["UPI","Visa","Mastercard","Rupay","Net Banking","COD"].map(e=>a.jsx("span",{className:"footer__pay-chip",children:e},e))})]})]}),a.jsx("style",{children:`
        .footer {
          background: #0D0D16;
          color: rgba(255,255,255,.75);
          padding-top: 0;
          margin-top: var(--space-16);
          position: relative;
        }
        .footer__wave {
          height: 80px;
          background: var(--ivory);
          clip-path: ellipse(55% 100% at 50% 0%);
          margin-bottom: -1px;
        }

        /* Grid */
        .footer__top {
          display: grid;
          grid-template-columns: 2fr 1fr 1.2fr 1.5fr;
          gap: var(--space-10);
          padding: var(--space-12) 0 var(--space-10);
        }

        /* Brand */
        .footer__logo {
          font-family: 'Inter', sans-serif; font-weight: 900;
          font-size: 1.5rem; letter-spacing: -0.04em; color: white;
          display: block; margin-bottom: var(--space-3); text-decoration: none;
        }
        .footer__logo-slash { color: var(--magenta); }
        .footer__tagline {
          font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.12em;
          color: var(--magenta); font-weight: 700; margin-bottom: var(--space-4);
        }
        .footer__desc {
          font-size: 0.84rem; color: rgba(255,255,255,.45);
          line-height: 1.75; max-width: 280px; margin-bottom: var(--space-5);
        }
        .footer__socials { display: flex; gap: var(--space-2); }
        .footer__social {
          width: 36px; height: 36px; border-radius: 50%;
          background: rgba(255,255,255,.08);
          border: none; cursor: pointer;
          color: rgba(255,255,255,.6); font-size: 0.65rem; font-weight: 800;
          display: flex; align-items: center; justify-content: center;
          transition: all var(--duration) var(--ease);
        }
        .footer__social:hover { background: var(--magenta); color: white; }

        /* Columns */
        .footer__col { display: flex; flex-direction: column; gap: 6px; }
        .footer__col-title {
          font-family: 'Inter', sans-serif;
          font-size: 0.7rem; text-transform: uppercase;
          letter-spacing: 0.12em; color: white;
          font-weight: 800; margin-bottom: 6px;
        }
        .footer__link {
          font-size: 0.84rem; color: rgba(255,255,255,.5);
          cursor: pointer; transition: color var(--duration) var(--ease);
          text-decoration: none; padding: 1px 0;
          display: inline-block;
        }
        .footer__link:hover { color: var(--magenta); }

        /* Newsletter */
        .footer__newsletter-note { font-size: 0.78rem; color: rgba(255,255,255,.45); margin-bottom: 8px; }
        .footer__nl-form { display: flex; }
        .footer__nl-input {
          flex: 1; padding: 10px 14px;
          background: rgba(255,255,255,.07);
          border: 1px solid rgba(255,255,255,.12);
          border-radius: var(--radius-md) 0 0 var(--radius-md);
          color: white; font-size: 0.84rem;
        }
        .footer__nl-input::placeholder { color: rgba(255,255,255,.3); }
        .footer__nl-input:focus { outline: none; border-color: var(--magenta); }
        .footer__nl-btn {
          padding: 10px 18px;
          background: linear-gradient(135deg, var(--magenta), var(--coral));
          color: white; border: none; cursor: pointer;
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
          font-size: 1rem; font-weight: 700;
          transition: opacity var(--duration) var(--ease);
        }
        .footer__nl-btn:hover { opacity: 0.88; }

        /* Bottom */
        .footer__divider {
          border: none; border-top: 1px solid rgba(255,255,255,.07);
          margin: 0 0 var(--space-6);
        }
        .footer__bottom {
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: var(--space-4);
          padding-bottom: var(--space-8);
        }
        .footer__copy { font-size: 0.78rem; color: rgba(255,255,255,.3); }
        .footer__payments { display: flex; gap: var(--space-2); flex-wrap: wrap; }
        .footer__pay-chip {
          padding: 4px 10px;
          background: rgba(255,255,255,.07);
          border: 1px solid rgba(255,255,255,.1);
          border-radius: var(--radius-sm);
          font-size: 0.7rem; font-weight: 600; color: rgba(255,255,255,.5);
        }

        @media (max-width: 960px) {
          .footer__top { grid-template-columns: 1fr 1fr; gap: var(--space-8); }
        }
        @media (max-width: 540px) {
          .footer__top { grid-template-columns: 1fr; }
          .footer__bottom { flex-direction: column; align-items: flex-start; }
          .footer__wave { height: 40px; }
        }
      `})]})}const Lo={success:"✓",error:"✕",warning:"⚠",info:"ℹ"},Fo={success:"#22C55E",error:"#EF4444",warning:"#F59E0B",info:"#8B5CF6"};function dh(){const{toasts:e,dispatch:t}=Me();return e.length?a.jsxs("div",{className:"toast-container",role:"region","aria-label":"Notifications","aria-live":"polite",children:[e.map(r=>a.jsxs("div",{className:`toast toast--${r.type}`,children:[a.jsx("span",{className:"toast__icon",style:{background:Fo[r.type]||Fo.info},children:r.icon||Lo[r.type]||Lo.info}),a.jsx("span",{className:"toast__msg",children:r.message}),a.jsx("button",{className:"toast__close",onClick:()=>t({type:"TOAST_REMOVE",payload:r.id}),"aria-label":"Dismiss notification",children:"×"})]},r.id)),a.jsx("style",{children:`
        .toast-container {
          position: fixed; bottom: 24px; right: 24px; z-index: 9999;
          display: flex; flex-direction: column; gap: 10px;
          pointer-events: none; max-width: 360px; width: calc(100vw - 48px);
        }
        .toast {
          display: flex; align-items: center; gap: 12px;
          padding: 14px 16px 14px 14px;
          background: #1C1917; color: white;
          border-radius: 14px;
          box-shadow: 0 8px 32px rgba(0,0,0,.25), 0 2px 8px rgba(0,0,0,.15);
          font-size: 0.875rem; font-weight: 500; line-height: 1.4;
          pointer-events: all;
          animation: toast-slide-in 320ms cubic-bezier(0.34,1.56,0.64,1) forwards;
        }
        @keyframes toast-slide-in {
          from { opacity:0; transform: translateX(60px) scale(0.9); }
          to   { opacity:1; transform: translateX(0)   scale(1); }
        }
        .toast__icon {
          width: 26px; height: 26px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.78rem; font-weight: 800; flex-shrink: 0;
        }
        .toast__msg { flex: 1; }
        .toast__close {
          background: none; border: none; color: rgba(255,255,255,.45);
          cursor: pointer; font-size: 1.2rem; line-height: 1;
          padding: 0 2px; flex-shrink: 0;
          transition: color 150ms ease;
        }
        .toast__close:hover { color: white; }
        @media (max-width: 480px) {
          .toast-container { bottom: 16px; right: 16px; left: 16px; max-width: none; width: auto; }
        }
      `})]}):null}function uh(){return a.jsxs("section",{className:"hero-split",children:[a.jsxs("div",{className:"hero-split__text",children:[a.jsxs("div",{className:"hero-split__eyebrow",children:[a.jsx("span",{className:"hero-eyebrow-dot"}),"Vol. 01 · Vibe Coding Competition 2026"]}),a.jsxs("h1",{className:"hero-split__title",children:["Everything You Love.",a.jsx("br",{}),a.jsx("span",{className:"hero-split__title-accent",children:"All in One Place."})]}),a.jsx("p",{className:"hero-split__desc",children:"Discover fashion, beauty, technology, home essentials, groceries, and more — all with one seamless shopping experience."}),a.jsxs("div",{className:"hero-split__ctas",children:[a.jsx(I,{to:"/department/fashion",className:"btn btn-primary btn-lg",id:"hero-shop-btn",children:"Shop the Collection"}),a.jsxs(I,{to:"/#departments",className:"hero-outline-btn",id:"hero-explore-btn",onClick:e=>{var t;e.preventDefault(),(t=document.getElementById("departments"))==null||t.scrollIntoView({behavior:"smooth"})},children:["Explore Departments",a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[a.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),a.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]}),a.jsx("div",{className:"hero-split__stats",children:[["6","Departments"],["24+","Products"],["1","Unified Cart"],["₹0","Hidden Fees"]].map(([e,t])=>a.jsxs("div",{className:"hero-stat",children:[a.jsx("span",{className:"hero-stat__num",children:e}),a.jsx("span",{className:"hero-stat__lbl",children:t})]},t))})]}),a.jsxs("div",{className:"hero-split__visual",children:[a.jsxs("div",{className:"hero-mosaic",children:[a.jsxs("div",{className:"hero-mosaic__main",children:[a.jsx("img",{src:"https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=85",alt:"Fashion editorial",loading:"eager"}),a.jsxs("div",{className:"hero-mosaic__badge",children:[a.jsx("span",{children:"✦"})," The Everything Issue"]})]}),a.jsxs("div",{className:"hero-mosaic__side",children:[a.jsxs("div",{className:"hero-mosaic__small",children:[a.jsx("img",{src:"https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&q=80",alt:"Electronics",loading:"eager"}),a.jsx("span",{className:"hero-mosaic__label",children:"Electronics"})]}),a.jsxs("div",{className:"hero-mosaic__small",children:[a.jsx("img",{src:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80",alt:"Beauty",loading:"eager"}),a.jsx("span",{className:"hero-mosaic__label",children:"Beauty"})]}),a.jsxs("div",{className:"hero-mosaic__small",children:[a.jsx("img",{src:"https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=80",alt:"Grocery",loading:"eager"}),a.jsx("span",{className:"hero-mosaic__label",children:"Grocery"})]})]})]}),a.jsxs("div",{className:"hero-trust-pill",children:[a.jsx("span",{children:"🔒"}),a.jsxs("div",{children:[a.jsx("div",{style:{fontWeight:700,fontSize:"0.8rem"},children:"Secure Checkout"}),a.jsx("div",{style:{fontSize:"0.7rem",color:"var(--ink-muted)"},children:"UPI · Cards · COD"})]})]})]}),a.jsx("style",{children:`
        .hero-split {
          display: grid; grid-template-columns: 1fr 1fr;
          min-height: 88vh; overflow: hidden;
          background: var(--ivory);
        }
        .hero-split__text {
          display: flex; flex-direction: column; justify-content: center;
          padding: var(--space-16) var(--space-12) var(--space-16) 0;
          padding-left: calc((100vw - 1280px) / 2 + var(--space-6));
        }
        .hero-split__eyebrow {
          display: flex; align-items: center; gap: 8px;
          font-size: 0.72rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.12em; color: var(--magenta);
          margin-bottom: var(--space-5);
        }
        .hero-eyebrow-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--magenta);
          animation: pulse-dot 2s infinite;
        }
        @keyframes pulse-dot {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:.5; transform:scale(1.4); }
        }
        .hero-split__title {
          font-size: clamp(2.5rem, 4.5vw, 4rem);
          font-family: 'Playfair Display', serif;
          line-height: 1.1; margin-bottom: var(--space-6);
          color: var(--ink);
        }
        .hero-split__title-accent {
          background: linear-gradient(135deg, var(--magenta), var(--coral));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-split__desc {
          font-size: 1.05rem; line-height: 1.75;
          color: var(--ink-muted); max-width: 480px;
          margin-bottom: var(--space-8);
        }
        .hero-split__ctas {
          display: flex; align-items: center; flex-wrap: wrap;
          gap: var(--space-4); margin-bottom: var(--space-10);
        }
        .hero-outline-btn {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 0.9rem; font-weight: 700; color: var(--ink);
          text-decoration: none;
          border-bottom: 2px solid var(--magenta);
          padding-bottom: 2px;
          transition: color var(--duration) var(--ease), gap var(--duration) var(--ease);
        }
        .hero-outline-btn:hover { color: var(--magenta); gap: 12px; }
        .hero-split__stats {
          display: flex; gap: var(--space-8);
        }
        .hero-stat { display: flex; flex-direction: column; }
        .hero-stat__num {
          font-size: 1.75rem; font-weight: 900;
          font-family: 'Inter', sans-serif;
          color: var(--ink); line-height: 1;
        }
        .hero-stat__lbl {
          font-size: 0.72rem; color: var(--ink-light);
          text-transform: uppercase; letter-spacing: 0.08em; margin-top: 3px;
        }

        /* Mosaic */
        .hero-split__visual {
          position: relative; overflow: hidden;
          background: var(--ivory-dark);
        }
        .hero-mosaic {
          display: grid; grid-template-columns: 2fr 1fr;
          height: 100%; gap: 4px;
        }
        .hero-mosaic__main {
          position: relative; overflow: hidden;
        }
        .hero-mosaic__main img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 600ms var(--ease);
        }
        .hero-mosaic__main:hover img { transform: scale(1.04); }
        .hero-mosaic__badge {
          position: absolute; bottom: 24px; left: 24px;
          background: rgba(255,255,255,.92); backdrop-filter: blur(10px);
          padding: 10px 18px; border-radius: var(--radius-full);
          font-size: 0.8rem; font-weight: 700; color: var(--ink);
          display: flex; align-items: center; gap: 6px;
          box-shadow: var(--shadow-lg);
        }
        .hero-mosaic__badge span { color: var(--magenta); }
        .hero-mosaic__side {
          display: grid; grid-template-rows: 1fr 1fr 1fr; gap: 4px;
        }
        .hero-mosaic__small {
          position: relative; overflow: hidden;
        }
        .hero-mosaic__small img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 400ms var(--ease);
        }
        .hero-mosaic__small:hover img { transform: scale(1.06); }
        .hero-mosaic__label {
          position: absolute; bottom: 8px; left: 8px;
          background: rgba(0,0,0,.55); color: white;
          font-size: 0.65rem; font-weight: 700;
          padding: 3px 8px; border-radius: var(--radius-full);
          text-transform: uppercase; letter-spacing: 0.06em;
        }

        /* Trust pill */
        .hero-trust-pill {
          position: absolute; top: 24px; right: 24px;
          background: white; border-radius: var(--radius-xl);
          padding: 12px 16px; display: flex; align-items: center; gap: 10px;
          box-shadow: var(--shadow-lg);
          animation: float 4s ease-in-out infinite;
        }
        .hero-trust-pill span { font-size: 1.3rem; }
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-6px); }
        }

        @media (max-width: 960px) {
          .hero-split {
            grid-template-columns: 1fr;
            min-height: auto;
          }
          .hero-split__text {
            padding: var(--space-12) var(--space-6);
          }
          .hero-split__visual { height: 50vw; min-height: 280px; }
          .hero-trust-pill { display: none; }
        }
        @media (max-width: 480px) {
          .hero-split__stats { gap: var(--space-5); }
          .hero-split__ctas { flex-direction: column; align-items: flex-start; }
        }
      `})]})}function ph(){return a.jsxs("section",{className:"dept-strip",id:"departments",children:[a.jsx("div",{className:"container",children:a.jsx("div",{className:"dept-strip__inner",children:_e.map(e=>a.jsxs(I,{to:`/department/${e.id}`,className:"dept-chip",id:`dept-chip-${e.id}`,children:[a.jsx("span",{className:"dept-chip__icon",style:{background:e.gradient},children:e.icon}),a.jsx("span",{className:"dept-chip__name",children:e.name})]},e.id))})}),a.jsx("style",{children:`
        .dept-strip {
          padding: var(--space-6) 0;
          background: var(--surface);
          border-bottom: 1px solid var(--border);
          border-top: 1px solid var(--border);
        }
        .dept-strip__inner {
          display: flex; gap: var(--space-3);
          justify-content: center; flex-wrap: wrap;
        }
        .dept-chip {
          display: flex; align-items: center; gap: var(--space-2);
          padding: 10px 18px;
          background: var(--ivory);
          border: 1.5px solid var(--border);
          border-radius: var(--radius-full);
          text-decoration: none;
          transition: all 200ms var(--ease);
        }
        .dept-chip:hover {
          border-color: var(--magenta);
          background: var(--surface);
          box-shadow: var(--shadow-glow);
          transform: translateY(-2px);
        }
        .dept-chip__icon {
          width: 30px; height: 30px; border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1rem;
        }
        .dept-chip__name { font-size: 0.85rem; font-weight: 700; color: var(--ink); }
      `})]})}const mh=[{id:"fashion",title:"Fashion",desc:"Find your everyday style.",img:"https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80",color:"#E91E8C"},{id:"beauty",title:"Beauty",desc:"Your routine, upgraded.",img:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80",color:"#FF6B6B"},{id:"electronics",title:"Electronics",desc:"Smart picks, better living.",img:"https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&q=80",color:"#7C3AED"},{id:"home",title:"Home & Living",desc:"Make your space yours.",img:"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",color:"#059669"},{id:"grocery",title:"Grocery",desc:"Everyday essentials, sorted.",img:"https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80",color:"#D97706"},{id:"kids",title:"Kids & Toys",desc:"Little things, big joy.",img:"https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80",color:"#0284C7"}];function fh(){return a.jsxs("section",{className:"dept-cards section",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("h2",{children:"Shop by Department"}),a.jsx("p",{children:"Six curated worlds under one roof — find everything you need, all in one place."})]}),a.jsx("div",{className:"dept-cards__grid",children:mh.map((e,t)=>a.jsxs(I,{to:`/department/${e.id}`,className:`dept-card ${t===0?"dept-card--feature":""}`,id:`dept-card-${e.id}`,children:[a.jsxs("div",{className:"dept-card__img-wrap",children:[a.jsx("img",{src:e.img,alt:e.title,loading:"lazy",className:"dept-card__img"}),a.jsx("div",{className:"dept-card__overlay",style:{background:`linear-gradient(to top, ${e.color}ee 0%, ${e.color}44 50%, transparent 80%)`}})]}),a.jsxs("div",{className:"dept-card__body",children:[a.jsx("h3",{className:"dept-card__title",children:e.title}),a.jsx("p",{className:"dept-card__desc",children:e.desc}),a.jsxs("span",{className:"dept-card__cta",children:["Shop Now",a.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[a.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),a.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]})]},e.id))})]}),a.jsx("style",{children:`
        .dept-cards__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: 300px 300px;
          gap: var(--space-4);
        }
        .dept-card--feature { grid-column: span 1; grid-row: span 2; }
        .dept-card {
          position: relative; border-radius: var(--radius-xl);
          overflow: hidden; display: flex; flex-direction: column;
          justify-content: flex-end; text-decoration: none;
          cursor: pointer;
          transition: transform 300ms var(--ease), box-shadow 300ms var(--ease);
        }
        .dept-card:hover { transform: scale(1.02); box-shadow: var(--shadow-xl); }
        .dept-card__img-wrap {
          position: absolute; inset: 0;
        }
        .dept-card__img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 500ms var(--ease);
        }
        .dept-card:hover .dept-card__img { transform: scale(1.06); }
        .dept-card__overlay { position: absolute; inset: 0; }
        .dept-card__body {
          position: relative; z-index: 1;
          padding: var(--space-5) var(--space-5) var(--space-5);
          display: flex; flex-direction: column; gap: 4px;
        }
        .dept-card--feature .dept-card__body { padding: var(--space-8); }
        .dept-card__title {
          font-size: 1.3rem; color: white;
          font-family: 'Playfair Display', serif; font-weight: 700;
        }
        .dept-card--feature .dept-card__title { font-size: 2.2rem; }
        .dept-card__desc { font-size: 0.82rem; color: rgba(255,255,255,.8); margin-bottom: var(--space-3); }
        .dept-card--feature .dept-card__desc { font-size: 1rem; }
        .dept-card__cta {
          display: inline-flex; align-items: center; gap: 6px;
          color: white; font-size: 0.8rem; font-weight: 700;
          background: rgba(255,255,255,.18); backdrop-filter: blur(6px);
          padding: 7px 14px; border-radius: var(--radius-full);
          border: 1px solid rgba(255,255,255,.3);
          transition: background var(--duration) var(--ease), gap var(--duration) var(--ease);
          width: fit-content;
        }
        .dept-card:hover .dept-card__cta { background: rgba(255,255,255,.3); gap: 10px; }

        @media (max-width: 900px) {
          .dept-cards__grid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
          }
          .dept-card--feature { grid-column: span 2; height: 300px; }
        }
        @media (max-width: 540px) {
          .dept-cards__grid { grid-template-columns: 1fr; }
          .dept-card--feature { grid-column: span 1; }
          .dept-card { height: 220px; }
        }
      `})]})}function hh({product:e}){const{addToCart:t,toggleWishlist:r,wishlist:n}=Me(),i=n.includes(e.id),s=_e.find(d=>d.id===e.department),l=Nr(e.price,e.originalPrice),o=d=>{d.preventDefault(),d.stopPropagation();const h=Object.keys(e.variants||{})[0],f=h?e.variants[h][0]:null,u=h?`${h}:${f}`:"default";t(e,u,1)},c=d=>{d.preventDefault(),d.stopPropagation(),r(e.id)};return a.jsxs(I,{to:`/product/${e.id}`,className:"pc",id:`product-${e.id}`,children:[a.jsxs("div",{className:"pc__img-wrap",children:[a.jsx("img",{src:e.image,alt:e.name,className:"pc__img",loading:"lazy"}),e.badge&&a.jsx("span",{className:`pc__badge ${e.badge==="Sale"?"badge-coral":e.badge==="Premium"?"badge-lavender":"badge-magenta"}`,children:e.badge}),l>0&&a.jsxs("span",{className:"pc__disc",children:[l,"% OFF"]}),a.jsx("button",{className:`pc__wish ${i?"active":""}`,onClick:c,"aria-label":"Wishlist",children:i?"♥":"♡"}),a.jsx("button",{className:"pc__add",onClick:o,id:`add-cart-${e.id}`,children:"+ Add to Cart"})]}),a.jsxs("div",{className:"pc__body",children:[a.jsxs("div",{className:"pc__dept",style:{color:s==null?void 0:s.color},children:[s==null?void 0:s.icon," ",s==null?void 0:s.name]}),a.jsx("h3",{className:"pc__name",children:e.name}),a.jsxs("div",{className:"pc__stars",children:["★".repeat(Math.round(e.rating)),"☆".repeat(5-Math.round(e.rating)),a.jsxs("span",{className:"pc__rev",children:["(",e.reviews,")"]})]}),a.jsxs("div",{className:"pc__price-row",children:[a.jsx("span",{className:"pc__price",children:R(e.price)}),e.originalPrice>e.price&&a.jsx("span",{className:"pc__orig",children:R(e.originalPrice)})]})]}),a.jsx("style",{children:`
        .pc {
          display: flex; flex-direction: column;
          background: var(--surface); border-radius: var(--radius-lg);
          border: 1px solid var(--border); overflow: hidden;
          text-decoration: none;
          transition: box-shadow 250ms var(--ease), transform 250ms var(--ease);
        }
        .pc:hover { box-shadow: var(--shadow-lg); transform: translateY(-5px); }
        .pc__img-wrap {
          position: relative; overflow: hidden;
          aspect-ratio: 4/3; background: var(--ivory-dark);
        }
        .pc__img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 400ms var(--ease);
        }
        .pc:hover .pc__img { transform: scale(1.05); }
        .pc__badge {
          position: absolute; top: 10px; left: 10px;
          padding: 3px 9px; border-radius: var(--radius-full);
          font-size: 0.68rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.05em;
        }
        .pc__disc {
          position: absolute; top: 10px; right: 10px;
          background: #EF4444; color: white;
          padding: 3px 8px; border-radius: var(--radius-full);
          font-size: 0.68rem; font-weight: 700;
        }
        .pc__wish {
          position: absolute; bottom: 10px; right: 10px;
          width: 30px; height: 30px; border-radius: 50%;
          background: rgba(255,255,255,.9); border: none;
          font-size: 1rem; cursor: pointer; color: var(--ink-muted);
          display: flex; align-items: center; justify-content: center;
          transition: all var(--duration) var(--ease);
        }
        .pc__wish.active, .pc__wish:hover { color: var(--magenta); transform: scale(1.1); }
        .pc__add {
          position: absolute; bottom: 0; left: 0; right: 0;
          background: linear-gradient(135deg, var(--magenta), var(--coral));
          color: white; padding: 9px;
          font-size: 0.78rem; font-weight: 700; border: none; cursor: pointer;
          transform: translateY(100%);
          transition: transform 250ms var(--ease); letter-spacing: 0.03em;
        }
        .pc:hover .pc__add { transform: translateY(0); }
        .pc__body { padding: 12px 14px 14px; display: flex; flex-direction: column; gap: 3px; }
        .pc__dept { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; }
        .pc__name {
          font-family: 'Inter', sans-serif; font-size: 0.875rem; font-weight: 700;
          color: var(--ink); line-height: 1.3;
          display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
        }
        .pc__stars { color: #FBBF24; font-size: 0.75rem; margin: 2px 0; }
        .pc__rev { color: var(--ink-light); font-size: 0.7rem; margin-left: 4px; font-family: 'Inter',sans-serif; }
        .pc__price-row { display: flex; align-items: center; gap: 7px; margin-top: 3px; }
        .pc__price { font-size: 0.95rem; font-weight: 800; color: var(--ink); font-family: 'Inter',sans-serif; }
        .pc__orig { font-size: 0.78rem; color: var(--ink-light); text-decoration: line-through; font-family: 'Inter',sans-serif; }
      `})]})}function _i({title:e,desc:t,products:r,id:n}){const[i,s]=b.useState("all"),l=i==="all"?r:r.filter(c=>c.department===i),o=[...new Set(r.map(c=>c.department))];return a.jsxs("section",{className:"ps section",id:n,children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"ps__header",children:[a.jsxs("div",{children:[a.jsx("h2",{children:e}),t&&a.jsx("p",{className:"text-muted",style:{marginTop:6},children:t})]}),a.jsxs("div",{className:"ps__filters",children:[a.jsx("button",{className:`tag ${i==="all"?"active":""}`,onClick:()=>s("all"),children:"All"}),o.map(c=>{const d=_e.find(h=>h.id===c);return a.jsxs("button",{className:`tag ${i===c?"active":""}`,onClick:()=>s(c),children:[d==null?void 0:d.icon," ",d==null?void 0:d.name]},c)})]})]}),a.jsx("div",{className:"product-grid",children:l.map(c=>a.jsx(hh,{product:c},c.id))})]}),a.jsx("style",{children:`
        .ps__header {
          display: flex; align-items: flex-start; justify-content: space-between;
          gap: var(--space-4); flex-wrap: wrap; margin-bottom: var(--space-8);
        }
        .ps__filters {
          display: flex; flex-wrap: wrap; gap: var(--space-2);
          justify-content: flex-end; flex: 1; max-width: 600px;
        }
      `})]})}function gh(){const e=[{icon:"🛍️",title:"Easy Shopping",desc:"Browse six departments with filters, search, and wishlists. One seamless flow."},{icon:"🔐",title:"Secure Checkout Design",desc:"Demo UPI, card, and net-banking flows — built with security-first architecture."},{icon:"🏬",title:"Multiple Departments",desc:"Fashion, Beauty, Electronics, Home & Living, Grocery, and Kids & Toys — all in one cart."},{icon:"📦",title:"Convenient Order Tracking",desc:"Real-time order status from placement to delivery, right in your account."}];return a.jsxs("section",{className:"trust section",style:{background:"var(--ivory-dark)",margin:0,padding:"var(--space-16) 0"},children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("h2",{children:"Why Shop with BLOWMAGGY?"}),a.jsx("p",{children:"Built for a seamless, all-in-one shopping experience."})]}),a.jsx("div",{className:"trust__grid",children:e.map(t=>a.jsxs("div",{className:"trust-card",children:[a.jsx("div",{className:"trust-card__icon",children:t.icon}),a.jsx("h4",{className:"trust-card__title",children:t.title}),a.jsx("p",{className:"trust-card__desc",children:t.desc})]},t.title))})]}),a.jsx("style",{children:`
        .trust__grid {
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: var(--space-5);
        }
        .trust-card {
          background: var(--surface); border: 1.5px solid var(--border);
          border-radius: var(--radius-xl); padding: var(--space-7) var(--space-5);
          text-align: center; display: flex; flex-direction: column;
          align-items: center; gap: var(--space-3);
          transition: all 250ms var(--ease);
          box-shadow: var(--shadow-sm);
        }
        .trust-card:hover {
          box-shadow: var(--shadow-md); transform: translateY(-4px);
          border-color: var(--magenta);
        }
        .trust-card__icon { font-size: 2.5rem; }
        .trust-card__title {
          font-family: 'Inter', sans-serif; font-size: 1rem; font-weight: 800;
          color: var(--ink);
        }
        .trust-card__desc { font-size: 0.83rem; color: var(--ink-muted); line-height: 1.65; }
        @media (max-width: 900px) { .trust__grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 480px) { .trust__grid { grid-template-columns: 1fr; } }
      `})]})}function vh(){return a.jsxs("section",{className:"sale-banner",children:[a.jsx("div",{className:"container",children:a.jsxs("div",{className:"sale-banner__inner",children:[a.jsxs("div",{className:"sale-banner__text",children:[a.jsx("h2",{className:"sale-banner__title",children:"The Everything Sale Is Live"}),a.jsx("p",{className:"sale-banner__desc",children:"Deals across all six departments. One cart, one checkout. Don't miss out."})]}),a.jsxs("div",{className:"sale-banner__ctas",children:[a.jsx(I,{to:"/department/fashion",className:"btn btn-primary btn-lg",id:"sale-fashion-btn",children:"Fashion Deals"}),a.jsx(I,{to:"/department/electronics",className:"sale-link",id:"sale-electronics-btn",children:"Electronics →"}),a.jsx(I,{to:"/department/beauty",className:"sale-link",id:"sale-beauty-btn",children:"Beauty →"})]})]})}),a.jsx("style",{children:`
        .sale-banner {
          background: linear-gradient(135deg, var(--ink) 0%, #2d0a2e 50%, var(--ink) 100%);
          padding: var(--space-16) 0;
          position: relative; overflow: hidden;
        }
        .sale-banner::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse at 60% 50%, rgba(233,30,140,.2) 0%, transparent 70%);
          pointer-events: none;
        }
        .sale-banner__inner {
          position: relative; z-index: 1;
          display: flex; align-items: center; justify-content: space-between;
          gap: var(--space-8); flex-wrap: wrap;
        }
        .sale-banner__title {
          font-size: clamp(1.8rem, 3vw, 2.5rem); color: white;
          margin-bottom: var(--space-3);
        }
        .sale-banner__desc { color: rgba(255,255,255,.65); font-size: 1rem; max-width: 420px; }
        .sale-banner__ctas {
          display: flex; align-items: center; gap: var(--space-5); flex-wrap: wrap;
          flex-shrink: 0;
        }
        .sale-link {
          color: rgba(255,255,255,.75); font-size: 0.9rem; font-weight: 700;
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,.35);
          padding-bottom: 2px;
          transition: color var(--duration) var(--ease), border-color var(--duration) var(--ease);
        }
        .sale-link:hover { color: white; border-color: var(--magenta); }
        @media (max-width: 700px) {
          .sale-banner__inner { flex-direction: column; align-items: flex-start; }
        }
      `})]})}const Mo=Ne.filter(e=>e.reviews>200).slice(0,8),Ao=Ne.filter(e=>e.badge==="Best Seller").slice(0,8),xh=Ne.filter(e=>e.badge==="Premium"||e.badge==="Educational"||e.badge==="Organic").concat(Ne.filter(e=>!e.badge)).slice(0,8);function yh(){return a.jsxs("div",{children:[a.jsx(uh,{}),a.jsx(ph,{}),a.jsx(fh,{}),a.jsx(_i,{id:"trending",title:"Trending Now",desc:"What everyone's adding to cart right now.",products:Mo.length>=4?Mo:Ne.slice(0,8)}),a.jsx(vh,{}),a.jsx(_i,{id:"bestsellers",title:"Best Sellers",desc:"Our most loved products, trusted by thousands.",products:Ao.length>=4?Ao:Ne.filter(e=>e.badge).slice(0,8)}),a.jsx(_i,{id:"new-arrivals",title:"New Arrivals",desc:"Fresh picks from across every department.",products:xh.slice(0,8)}),a.jsx(gh,{})]})}function gl({product:e}){const{addToCart:t,toggleWishlist:r,wishlist:n}=Me(),i=n.includes(e.id),s=we(e.department),l=Nr(e.price,e.originalPrice),o=h=>{h.preventDefault(),h.stopPropagation();const f=Object.keys(e.variants||{}),u=f.length>0?f.map(w=>`${w}:${e.variants[w][0]}`).join("|"):"default";t(e,u,1)},c=h=>{h.preventDefault(),h.stopPropagation(),r(e.id)},d=e.badge==="Sale"?"badge-coral":e.badge==="Premium"?"badge-lavender":(e.badge==="Best Seller","badge-magenta");return a.jsxs(I,{to:`/product/${e.id}`,className:"product-card",id:`pcard-${e.id}`,children:[a.jsxs("div",{className:"product-card__img-wrap",children:[a.jsx("img",{src:e.image,alt:e.name,className:"product-card__img",loading:"lazy"}),e.badge&&a.jsx("span",{className:`product-card__badge badge ${d}`,children:e.badge}),l>0&&a.jsxs("span",{className:"product-card__disc",children:[l,"% OFF"]}),a.jsx("button",{className:`product-card__wish ${i?"active":""}`,onClick:c,"aria-label":i?"Remove from wishlist":"Add to wishlist",children:i?"♥":"♡"}),a.jsx("button",{className:"product-card__cart-hover",onClick:o,id:`add-${e.id}`,"aria-label":`Add ${e.name} to cart`,children:"+ Add to Cart"})]}),a.jsxs("div",{className:"product-card__body",children:[a.jsxs("div",{className:"product-card__dept",style:{color:s==null?void 0:s.color},children:[s==null?void 0:s.icon," ",s==null?void 0:s.name]}),a.jsx("h3",{className:"product-card__name",children:e.name}),e.brand&&a.jsx("div",{className:"product-card__brand",children:e.brand}),a.jsxs("div",{className:"product-card__stars",children:["★".repeat(Math.round(e.rating)),"☆".repeat(5-Math.round(e.rating)),a.jsxs("span",{className:"product-card__rev",children:["(",e.reviews,")"]})]}),a.jsxs("div",{className:"product-card__price-row",children:[a.jsx("span",{className:"product-card__price",children:R(e.price)}),e.originalPrice>e.price&&a.jsx("span",{className:"product-card__orig",children:R(e.originalPrice)})]}),e.stock===0&&a.jsx("span",{className:"product-card__oos",children:"Out of Stock"})]}),a.jsx("style",{children:`
        .product-card {
          display: flex; flex-direction: column;
          background: var(--white, var(--surface)); border-radius: var(--radius-lg);
          border: 1px solid var(--border); overflow: hidden;
          text-decoration: none;
          transition: box-shadow 250ms var(--ease), transform 250ms var(--ease);
          height: 100%;
        }
        .product-card:hover {
          box-shadow: var(--shadow-lg); transform: translateY(-5px);
          border-color: rgba(233,30,140,.15);
        }

        /* Image area */
        .product-card__img-wrap {
          position: relative; overflow: hidden;
          aspect-ratio: 4/3; background: var(--ivory-dark);
        }
        .product-card__img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 400ms var(--ease);
        }
        .product-card:hover .product-card__img { transform: scale(1.06); }

        /* Badges */
        .product-card__badge {
          position: absolute; top: 10px; left: 10px;
          font-size: 0.68rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.05em;
        }
        .product-card__disc {
          position: absolute; top: 10px; right: 10px;
          background: #EF4444; color: white;
          padding: 3px 8px; border-radius: var(--radius-full);
          font-size: 0.68rem; font-weight: 700;
        }

        /* Wishlist btn */
        .product-card__wish {
          position: absolute; bottom: 44px; right: 10px;
          width: 32px; height: 32px; border-radius: 50%;
          background: rgba(255,255,255,.9); border: none;
          font-size: 1rem; cursor: pointer; color: var(--ink-muted);
          display: flex; align-items: center; justify-content: center;
          transition: all var(--duration) var(--ease);
          box-shadow: var(--shadow-sm);
          opacity: 0;
        }
        .product-card:hover .product-card__wish { opacity: 1; }
        .product-card__wish.active {
          opacity: 1; color: var(--magenta);
        }
        .product-card__wish.active:hover, .product-card__wish:hover {
          color: var(--magenta); transform: scale(1.15);
        }

        /* Add-to-cart hover bar */
        .product-card__cart-hover {
          position: absolute; bottom: 0; left: 0; right: 0;
          background: linear-gradient(135deg, var(--magenta), var(--coral));
          color: white; padding: 10px;
          font-size: 0.8rem; font-weight: 700; border: none; cursor: pointer;
          transform: translateY(100%);
          transition: transform 250ms var(--ease); letter-spacing: 0.03em;
        }
        .product-card:hover .product-card__cart-hover { transform: translateY(0); }

        /* Body */
        .product-card__body {
          padding: 12px 14px 16px;
          display: flex; flex-direction: column; gap: 3px;
          flex: 1;
        }
        .product-card__dept {
          font-size: 0.7rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.06em;
        }
        .product-card__name {
          font-family: 'Inter', sans-serif; font-size: 0.875rem; font-weight: 700;
          color: var(--ink); line-height: 1.3; margin-top: 2px;
          display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
        }
        .product-card__brand {
          font-size: 0.72rem; color: var(--ink-light); font-weight: 600;
        }
        .product-card__stars {
          color: #FBBF24; font-size: 0.75rem; margin: 2px 0;
        }
        .product-card__rev {
          color: var(--ink-light); font-size: 0.7rem;
          margin-left: 4px; font-family: 'Inter',sans-serif;
        }
        .product-card__price-row {
          display: flex; align-items: center; gap: 7px; margin-top: 4px;
        }
        .product-card__price {
          font-size: 0.95rem; font-weight: 800; color: var(--ink); font-family: 'Inter',sans-serif;
        }
        .product-card__orig {
          font-size: 0.78rem; color: var(--ink-light);
          text-decoration: line-through; font-family: 'Inter',sans-serif;
        }
        .product-card__oos {
          font-size: 0.72rem; font-weight: 700; color: #DC2626;
          background: #FEE2E2; padding: 2px 8px; border-radius: var(--radius-full);
          width: fit-content; margin-top: 3px;
        }
      `})]})}const _h=[{value:"featured",label:"Featured"},{value:"price-asc",label:"Price: Low → High"},{value:"price-desc",label:"Price: High → Low"},{value:"rating",label:"Highest Rated"},{value:"discount",label:"Best Discount"}];function wh(){const{id:e}=du(),t=we(e),r=ah(e),n=sh(e),i=Math.max(...r.map(v=>v.price),1e5),[s,l]=b.useState("featured"),[o,c]=b.useState("all"),[d,h]=b.useState(i),[f,u]=b.useState(0),[w,k]=b.useState(!1),[x,S]=b.useState(!1),p=[o!=="all",d<i,f>0,w,x].filter(Boolean).length,m=()=>{c("all"),h(i),u(0),k(!1),S(!1)},g=b.useMemo(()=>{let v=[...r];return o!=="all"&&(v=v.filter(j=>j.category===o)),d<i&&(v=v.filter(j=>j.price<=d)),f>0&&(v=v.filter(j=>j.rating>=f)),w&&(v=v.filter(j=>j.stock>0)),x&&(v=v.filter(j=>j.originalPrice>j.price)),xu(v,s)},[r,o,d,i,f,w,x,s]);return t?a.jsxs("main",{children:[a.jsxs("div",{className:"dept-hero",style:{"--dept-color":t.color},children:[a.jsx("div",{className:"dept-hero__bg",style:{backgroundImage:`url(${t.heroImage})`}}),a.jsx("div",{className:"dept-hero__overlay"}),a.jsxs("div",{className:"container",children:[a.jsxs("nav",{className:"dept-hero__bread",children:[a.jsx(I,{to:"/",children:"Home"})," ",a.jsx("span",{children:"/"}),a.jsx("span",{children:t.name})]}),a.jsx("span",{className:"dept-hero__icon",children:t.icon}),a.jsx("h1",{className:"dept-hero__title",children:t.name}),a.jsx("p",{className:"dept-hero__sub",children:t.description}),a.jsxs("div",{className:"dept-hero__meta",children:[a.jsxs("span",{className:"badge badge-lavender",children:[r.length," Products"]}),a.jsx("span",{className:"dept-hero__tagline",children:t.tagline})]})]})]}),a.jsxs("div",{className:"container dept-body",children:[a.jsxs("aside",{className:"dept-filters",children:[a.jsxs("div",{className:"dept-filters__head",children:[a.jsx("h3",{children:"Filters"}),p>0&&a.jsxs("button",{className:"btn btn-ghost btn-sm text-magenta",onClick:m,children:["Clear (",p,")"]})]}),a.jsxs("div",{className:"filter-group",children:[a.jsx("h4",{className:"filter-group__label",children:"Category"}),a.jsxs("div",{className:"filter-group__opts",children:[a.jsxs("label",{className:`filter-radio ${o==="all"?"active":""}`,children:[a.jsx("input",{type:"radio",name:"cat",value:"all",checked:o==="all",onChange:()=>c("all")}),"All Categories"]}),n.map(v=>a.jsxs("label",{className:`filter-radio ${o===v?"active":""}`,children:[a.jsx("input",{type:"radio",name:"cat",value:v,checked:o===v,onChange:()=>c(v)}),v]},v))]})]}),a.jsxs("div",{className:"filter-group",children:[a.jsxs("h4",{className:"filter-group__label",children:["Price Range",a.jsx("span",{className:"filter-group__val",children:R(d)})]}),a.jsx("input",{type:"range",min:0,max:i,step:100,value:d,onChange:v=>h(+v.target.value),className:"price-slider"}),a.jsxs("div",{className:"price-slider-labels",children:[a.jsx("span",{children:"₹0"}),a.jsx("span",{children:R(i)})]})]}),a.jsxs("div",{className:"filter-group",children:[a.jsx("h4",{className:"filter-group__label",children:"Minimum Rating"}),a.jsx("div",{className:"filter-group__opts",children:[0,4,4.5,4.8].map(v=>a.jsxs("label",{className:`filter-radio ${f===v?"active":""}`,children:[a.jsx("input",{type:"radio",name:"rating",value:v,checked:f===v,onChange:()=>u(v)}),v===0?"Any Rating":`${v}★ & above`]},v))})]}),a.jsxs("div",{className:"filter-group",children:[a.jsx("h4",{className:"filter-group__label",children:"Availability"}),a.jsxs("label",{className:"filter-toggle",children:[a.jsx("span",{children:"In Stock Only"}),a.jsx("button",{className:`toggle-btn ${w?"on":""}`,onClick:()=>k(v=>!v),role:"switch","aria-checked":w})]}),a.jsxs("label",{className:"filter-toggle",style:{marginTop:8},children:[a.jsx("span",{children:"On Sale"}),a.jsx("button",{className:`toggle-btn ${x?"on":""}`,onClick:()=>S(v=>!v),role:"switch","aria-checked":x})]})]})]}),a.jsxs("div",{className:"dept-main",children:[a.jsxs("div",{className:"dept-toolbar",children:[a.jsxs("span",{className:"dept-toolbar__count",children:[g.length," product",g.length!==1?"s":"",p>0&&" (filtered)"]}),a.jsxs("div",{className:"dept-toolbar__sort",children:[a.jsx("label",{className:"label",style:{margin:0},children:"Sort by:"}),a.jsx("select",{value:s,onChange:v=>l(v.target.value),className:"input",style:{width:"auto",padding:"8px 14px"},children:_h.map(v=>a.jsx("option",{value:v.value,children:v.label},v.value))})]})]}),p>0&&a.jsxs("div",{className:"active-filters",children:[o!=="all"&&a.jsxs("span",{className:"filter-pill",children:[o," ",a.jsx("button",{onClick:()=>c("all"),children:"×"})]}),d<i&&a.jsxs("span",{className:"filter-pill",children:["Under ",R(d)," ",a.jsx("button",{onClick:()=>h(i),children:"×"})]}),f>0&&a.jsxs("span",{className:"filter-pill",children:[f,"★+ ",a.jsx("button",{onClick:()=>u(0),children:"×"})]}),w&&a.jsxs("span",{className:"filter-pill",children:["In Stock ",a.jsx("button",{onClick:()=>k(!1),children:"×"})]}),x&&a.jsxs("span",{className:"filter-pill",children:["On Sale ",a.jsx("button",{onClick:()=>S(!1),children:"×"})]})]}),g.length>0?a.jsx("div",{className:"product-grid",children:g.map(v=>a.jsx(gl,{product:v},v.id))}):a.jsxs("div",{className:"dept-empty",children:[a.jsx("div",{className:"dept-empty__icon",children:"🫙"}),a.jsx("h3",{children:"No products match"}),a.jsx("p",{children:"Try adjusting your filters or browse the full catalogue."}),a.jsx("button",{className:"btn btn-primary",onClick:m,children:"Clear All Filters"})]})]})]}),a.jsx("style",{children:`
        /* Hero */
        .dept-hero {
          position: relative; padding: var(--space-12) 0;
          overflow: hidden; min-height: 260px; display: flex; align-items: center;
        }
        .dept-hero__bg {
          position: absolute; inset: 0;
          background-size: cover; background-position: center;
          opacity: 0.22;
        }
        .dept-hero__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(90deg, rgba(0,0,0,.65) 0%, rgba(0,0,0,.2) 100%);
        }
        .dept-hero > .container { position: relative; z-index: 1; color: white; }
        .dept-hero__bread {
          display: flex; align-items: center; gap: 8px;
          font-size: 0.78rem; color: rgba(255,255,255,.6); margin-bottom: var(--space-4);
        }
        .dept-hero__bread a { color: rgba(255,255,255,.6); }
        .dept-hero__bread a:hover { color: white; }
        .dept-hero__icon { font-size: 2.5rem; display: block; margin-bottom: var(--space-2); }
        .dept-hero__title { font-size: clamp(2rem,5vw,3.5rem); color: white; margin-bottom: var(--space-2); }
        .dept-hero__sub { font-size: 1rem; color: rgba(255,255,255,.7); margin-bottom: var(--space-4); }
        .dept-hero__meta { display: flex; align-items: center; gap: var(--space-4); }
        .dept-hero__tagline { font-size: 0.82rem; color: rgba(255,255,255,.55); font-style: italic; }

        /* Layout */
        .dept-body {
          display: grid; grid-template-columns: 260px 1fr;
          gap: var(--space-8); padding-top: var(--space-8); padding-bottom: var(--space-16);
          align-items: start;
        }

        /* Filters */
        .dept-filters {
          background: var(--surface); border: 1px solid var(--border);
          border-radius: var(--radius-xl); padding: var(--space-5);
          position: sticky; top: 100px;
          display: flex; flex-direction: column; gap: var(--space-5);
        }
        .dept-filters__head {
          display: flex; align-items: center; justify-content: space-between;
        }
        .dept-filters__head h3 { font-family: 'Inter',sans-serif; font-size: 1rem; font-weight: 800; }

        .filter-group { display: flex; flex-direction: column; gap: var(--space-3); }
        .filter-group + .filter-group { border-top: 1px solid var(--border); padding-top: var(--space-4); }
        .filter-group__label {
          font-size: 0.75rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.08em; color: var(--ink-muted);
          display: flex; justify-content: space-between;
        }
        .filter-group__val { color: var(--magenta); font-weight: 700; text-transform: none; }
        .filter-group__opts { display: flex; flex-direction: column; gap: 6px; }

        .filter-radio {
          display: flex; align-items: center; gap: 8px;
          font-size: 0.85rem; cursor: pointer; color: var(--ink-muted);
          padding: 5px 8px; border-radius: var(--radius-sm);
          transition: background var(--duration) var(--ease);
        }
        .filter-radio:hover { background: var(--ivory); }
        .filter-radio.active { color: var(--magenta); font-weight: 600; }
        .filter-radio input { accent-color: var(--magenta); }

        .price-slider {
          width: 100%; accent-color: var(--magenta);
          -webkit-appearance: none; height: 4px;
          background: var(--border); border-radius: 2px; outline: none;
        }
        .price-slider::-webkit-slider-thumb {
          -webkit-appearance: none; width: 18px; height: 18px; border-radius: 50%;
          background: var(--magenta); cursor: pointer; border: 2px solid white;
          box-shadow: var(--shadow-sm);
        }
        .price-slider-labels { display: flex; justify-content: space-between; font-size: 0.72rem; color: var(--ink-light); margin-top: 4px; }

        .filter-toggle {
          display: flex; align-items: center; justify-content: space-between;
          font-size: 0.85rem; cursor: pointer; color: var(--ink-muted);
        }
        .toggle-btn {
          width: 40px; height: 22px; border-radius: 11px;
          background: var(--border); border: none; cursor: pointer;
          position: relative; transition: background 200ms var(--ease);
          flex-shrink: 0;
        }
        .toggle-btn::after {
          content: ''; position: absolute;
          top: 3px; left: 3px; width: 16px; height: 16px;
          border-radius: 50%; background: white;
          transition: transform 200ms var(--ease); box-shadow: var(--shadow-sm);
        }
        .toggle-btn.on { background: var(--magenta); }
        .toggle-btn.on::after { transform: translateX(18px); }

        /* Toolbar */
        .dept-main { display: flex; flex-direction: column; gap: var(--space-5); }
        .dept-toolbar {
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: var(--space-3);
          padding: var(--space-4) var(--space-5);
          background: var(--surface); border: 1px solid var(--border);
          border-radius: var(--radius-lg); box-shadow: var(--shadow-sm);
        }
        .dept-toolbar__count { font-size: 0.875rem; color: var(--ink-muted); font-weight: 600; }
        .dept-toolbar__sort { display: flex; align-items: center; gap: var(--space-3); }

        /* Active pills */
        .active-filters { display: flex; flex-wrap: wrap; gap: var(--space-2); }
        .filter-pill {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 4px 12px; border-radius: var(--radius-full);
          background: #FDE8F3; color: var(--magenta);
          font-size: 0.78rem; font-weight: 600;
          border: 1px solid #F9A8D4;
        }
        .filter-pill button {
          background: none; border: none; cursor: pointer;
          color: var(--magenta); font-size: 1rem; line-height: 1; padding: 0;
        }

        /* Empty */
        .dept-empty {
          text-align: center; padding: var(--space-20) var(--space-8);
          background: var(--surface); border: 1px solid var(--border);
          border-radius: var(--radius-xl);
        }
        .dept-empty__icon { font-size: 4rem; margin-bottom: var(--space-4); }
        .dept-empty h3 { margin-bottom: var(--space-3); }
        .dept-empty p { color: var(--ink-muted); margin-bottom: var(--space-6); }

        @media (max-width: 900px) {
          .dept-body { grid-template-columns: 1fr; }
          .dept-filters { position: static; }
        }
      `})]}):a.jsxs("div",{className:"flex-center",style:{height:"60vh",flexDirection:"column",gap:16},children:[a.jsx("div",{style:{fontSize:"3rem"},children:"🔍"}),a.jsx("h2",{children:"Department not found"}),a.jsx(I,{to:"/",className:"btn btn-primary",children:"Back to Home"})]})}const Bo=[{name:"Priya S.",rating:5,text:"Outstanding quality — exactly as described. Packaging was immaculate and delivery was quick!",date:"3 days ago",verified:!0},{name:"Arjun M.",rating:4,text:"Great product overall. Minor gripe with delivery time but the product itself is excellent.",date:"1 week ago",verified:!0},{name:"Deepika R.",rating:5,text:"I was skeptical ordering online but this exceeded every expectation. Will be a repeat buyer!",date:"2 weeks ago",verified:!0},{name:"Karthik V.",rating:4,text:"Good build quality, looks premium in person. Delivery was on time.",date:"3 weeks ago",verified:!1}];function bh(){const{id:e}=du(),t=zr(),r=nh(e),{addToCart:n,toggleWishlist:i,wishlist:s,toast:l}=Me(),[o,c]=b.useState({}),[d,h]=b.useState(1),[f,u]=b.useState(0),[w,k]=b.useState("desc");if(!r)return a.jsxs("div",{className:"flex-center",style:{height:"60vh",flexDirection:"column",gap:16},children:[a.jsx("div",{style:{fontSize:"3rem"},children:"😕"}),a.jsx("h2",{children:"Product not found"}),a.jsx(I,{to:"/",className:"btn btn-primary",children:"Back to Home"})]});const x=we(r.department),S=s.includes(r.id),p=Nr(r.price,r.originalPrice),m=Object.keys(r.variants||{}),g=b.useMemo(()=>{const N={};return m.forEach(L=>{N[L]=o[L]||r.variants[L][0]}),N},[o,m,r.variants]),v=m.length>0?m.map(N=>`${N}:${g[N]}`).join("|"):"default",j=r.stock===0?{label:"Out of Stock",color:"#DC2626",icon:"✕"}:r.stock<=10?{label:`Only ${r.stock} left!`,color:"#D97706",icon:"⚡"}:r.stock<=30?{label:"Low Stock",color:"#D97706",icon:"⚠️"}:{label:"In Stock",color:"#16A34A",icon:"✓"},D=()=>{r.stock!==0&&n(r,v,d)},y=()=>{r.stock!==0&&(n(r,v,d),t("/cart"))},_=()=>{i(r.id),l(S?"Removed from wishlist":"♥ Added to wishlist","info")},C=Ne.filter(N=>N.department===r.department&&N.id!==r.id).slice(0,4),z=[5,4,3,2,1].map(N=>({r:N,pct:N===5?62:N===4?24:N===3?8:N===2?4:2}));return a.jsxs("main",{className:"pd-page",children:[a.jsxs("div",{className:"container",children:[a.jsxs("nav",{className:"pd-bread","aria-label":"breadcrumb",children:[a.jsx(I,{to:"/",children:"Home"}),a.jsx("span",{children:"/"}),a.jsx(I,{to:`/department/${x==null?void 0:x.id}`,children:x==null?void 0:x.name}),a.jsx("span",{children:"/"}),a.jsx(I,{to:`/department/${x==null?void 0:x.id}`,children:r.category}),a.jsx("span",{children:"/"}),a.jsx("span",{children:r.name})]}),a.jsxs("div",{className:"pd-layout",children:[a.jsxs("div",{className:"pd-gallery",children:[a.jsxs("div",{className:"pd-gallery__main",children:[a.jsx("img",{src:r.images[f],alt:r.name,className:"pd-gallery__img"},f),p>0&&a.jsxs("span",{className:"pd-disc-badge",children:[p,"% OFF"]}),a.jsx("button",{className:`pd-wish-fab ${S?"active":""}`,onClick:_,"aria-label":S?"Remove from wishlist":"Add to wishlist",children:S?"♥":"♡"})]}),r.images.length>1&&a.jsx("div",{className:"pd-gallery__thumbs",children:r.images.map((N,L)=>a.jsx("button",{className:`pd-gallery__thumb ${L===f?"active":""}`,onClick:()=>u(L),"aria-label":`View image ${L+1}`,children:a.jsx("img",{src:N,alt:`${r.name} view ${L+1}`})},L))})]}),a.jsxs("div",{className:"pd-info",children:[a.jsxs("div",{className:"pd-info__meta",children:[a.jsx("span",{className:"pd-info__brand",children:r.brand}),a.jsxs(I,{to:`/department/${x==null?void 0:x.id}`,className:"pd-info__dept-pill",style:{background:(x==null?void 0:x.color)+"18",color:x==null?void 0:x.color},children:[x==null?void 0:x.icon," ",x==null?void 0:x.name]}),r.badge&&a.jsx("span",{className:`badge ${r.badge==="Sale"?"badge-coral":r.badge==="Premium"?"badge-lavender":"badge-magenta"}`,children:r.badge})]}),a.jsx("h1",{className:"pd-info__name",children:r.name}),a.jsxs("div",{className:"pd-info__rating",children:[a.jsxs("div",{className:"stars",style:{fontSize:"1rem"},children:["★".repeat(Math.round(r.rating)),"☆".repeat(5-Math.round(r.rating))]}),a.jsx("span",{className:"fw-600",style:{fontSize:"0.9rem"},children:r.rating}),a.jsxs("span",{className:"text-sm text-muted",children:["(",r.reviews," reviews)"]}),a.jsx("span",{className:"pd-info__category-pill",children:r.category})]}),a.jsxs("div",{className:"pd-info__pricing",children:[a.jsx("span",{className:"pd-info__price",children:R(r.price)}),r.originalPrice>r.price&&a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"pd-info__orig",children:R(r.originalPrice)}),a.jsxs("span",{className:"badge badge-coral",children:[p,"% off"]})]})]}),r.originalPrice>r.price&&a.jsxs("div",{className:"pd-info__saving",children:["You save ",R(r.originalPrice-r.price)," on this item"]}),a.jsxs("div",{className:"pd-stock",style:{color:j.color},children:[a.jsx("span",{className:"pd-stock__icon",children:j.icon}),j.label,r.stock>30&&a.jsxs("span",{style:{color:"var(--ink-light)",marginLeft:8,fontWeight:400},children:["(",r.stock," units available)"]})]}),m.map(N=>a.jsxs("div",{className:"pd-variant",children:[a.jsxs("div",{className:"pd-variant__label",children:[a.jsx("span",{className:"label",style:{margin:0},children:N}),a.jsx("span",{className:"text-sm fw-600 text-magenta",children:g[N]})]}),a.jsx("div",{className:"pd-variant__opts",children:r.variants[N].map(L=>a.jsx("button",{className:`pd-var-opt ${g[N]===L?"active":""}`,onClick:()=>c(P=>({...P,[N]:L})),children:L},L))})]},N)),a.jsxs("div",{className:"pd-qty-row",children:[a.jsx("span",{className:"label",style:{margin:0},children:"Quantity"}),a.jsxs("div",{className:"pd-qty",children:[a.jsx("button",{className:"pd-qty__btn",onClick:()=>h(N=>Math.max(1,N-1)),disabled:d<=1,"aria-label":"Decrease quantity",children:"−"}),a.jsx("span",{className:"pd-qty__val",children:d}),a.jsx("button",{className:"pd-qty__btn",onClick:()=>h(N=>Math.min(r.stock||99,N+1)),disabled:d>=r.stock,"aria-label":"Increase quantity",children:"+"})]})]}),a.jsxs("div",{className:"pd-ctas",children:[a.jsxs("button",{id:`pdp-add-cart-${r.id}`,className:"btn btn-primary btn-lg w-full",onClick:D,disabled:r.stock===0,children:["🛒 ",r.stock===0?"Out of Stock":"Add to Cart"]}),a.jsx("button",{id:`pdp-buy-now-${r.id}`,className:"btn btn-secondary btn-lg w-full",onClick:y,disabled:r.stock===0,children:"⚡ Buy Now"}),a.jsx("button",{id:`pdp-wishlist-${r.id}`,className:`btn w-full ${S?"pd-wish-active":"btn-secondary"}`,onClick:_,children:S?"♥ Saved to Wishlist":"♡ Add to Wishlist"})]}),a.jsx("div",{className:"pd-trust",children:[["🚚","Free delivery above ₹499"],["↩️","30-day easy returns"],["🔒","Secure checkout"],["✓","Genuine product"]].map(([N,L])=>a.jsxs("div",{className:"pd-trust__item",children:[a.jsx("span",{className:"pd-trust__icon",children:N}),a.jsx("span",{children:L})]},L))})]})]}),a.jsxs("div",{className:"pd-tabs",children:[a.jsx("div",{className:"pd-tabs__nav",role:"tablist",children:["desc","specs","reviews","shipping"].map(N=>a.jsx("button",{role:"tab","aria-selected":w===N,className:`pd-tab-btn ${w===N?"active":""}`,onClick:()=>k(N),id:`tab-${N}`,children:{desc:"Description",specs:"Specifications",reviews:`Reviews (${Bo.length})`,shipping:"Shipping & Returns"}[N]},N))}),a.jsxs("div",{className:"pd-tabs__panel",children:[w==="desc"&&a.jsx("p",{style:{lineHeight:1.85,color:"var(--ink-muted)",fontSize:"0.95rem",maxWidth:720},children:r.description}),w==="specs"&&a.jsx("div",{className:"pd-specs",children:r.specs&&Object.entries(r.specs).length>0?a.jsx("table",{className:"pd-specs-table",children:a.jsxs("tbody",{children:[Object.entries(r.specs).map(([N,L])=>a.jsxs("tr",{children:[a.jsx("td",{className:"pd-specs-table__key",children:N}),a.jsx("td",{className:"pd-specs-table__val",children:L})]},N)),a.jsxs("tr",{children:[a.jsx("td",{className:"pd-specs-table__key",children:"Brand"}),a.jsx("td",{className:"pd-specs-table__val",children:r.brand})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"pd-specs-table__key",children:"Category"}),a.jsx("td",{className:"pd-specs-table__val",children:r.category})]})]})}):a.jsx("p",{className:"text-muted",children:"Specifications not available for this product."})}),w==="reviews"&&a.jsxs("div",{className:"pd-reviews",children:[a.jsxs("div",{className:"pd-reviews__summary",children:[a.jsxs("div",{className:"pd-reviews__avg-block",children:[a.jsx("span",{className:"pd-reviews__avg-num",children:r.rating}),a.jsxs("div",{className:"stars",style:{fontSize:"1.4rem"},children:["★".repeat(Math.round(r.rating)),"☆".repeat(5-Math.round(r.rating))]}),a.jsxs("div",{className:"text-sm text-muted",children:[r.reviews," verified reviews"]})]}),a.jsx("div",{className:"pd-reviews__bars",children:z.map(({r:N,pct:L})=>a.jsxs("div",{className:"pd-reviews__bar-row",children:[a.jsxs("span",{className:"text-xs fw-600",children:[N,"★"]}),a.jsx("div",{className:"pd-reviews__bar-track",children:a.jsx("div",{className:"pd-reviews__bar-fill",style:{width:`${L}%`}})}),a.jsxs("span",{className:"text-xs text-muted",children:[L,"%"]})]},N))})]}),a.jsx("div",{className:"pd-review-list",children:Bo.map((N,L)=>a.jsxs("div",{className:"pd-review-card",children:[a.jsxs("div",{className:"pd-review-card__head",children:[a.jsx("div",{className:"pd-review-card__avatar",children:N.name[0]}),a.jsxs("div",{children:[a.jsxs("div",{className:"fw-600 text-sm",children:[N.name,N.verified&&a.jsx("span",{className:"pd-verified",children:"✓ Verified"})]}),a.jsxs("div",{className:"stars",style:{fontSize:"0.82rem"},children:["★".repeat(N.rating),"☆".repeat(5-N.rating)]})]}),a.jsx("span",{className:"text-xs text-muted",style:{marginLeft:"auto"},children:N.date})]}),a.jsx("p",{className:"text-sm",style:{color:"var(--ink-muted)",marginTop:4},children:N.text})]},L))})]}),w==="shipping"&&a.jsx("div",{className:"pd-shipping",children:[{icon:"🚚",title:"Standard Delivery",desc:"3–5 business days. Free on orders above ₹499."},{icon:"⚡",title:"Express Delivery",desc:"1–2 business days. Flat ₹99 fee."},{icon:"↩️",title:"Returns Policy",desc:"30-day hassle-free returns. Initiate from My Orders."},{icon:"📦",title:"Packaging",desc:"Safely bubble-wrapped and sealed for secure transit."}].map(N=>a.jsxs("div",{className:"pd-shipping__item",children:[a.jsx("span",{className:"pd-shipping__icon",children:N.icon}),a.jsxs("div",{children:[a.jsx("div",{className:"fw-600 text-sm",children:N.title}),a.jsx("p",{className:"text-sm",style:{marginTop:2},children:N.desc})]})]},N.title))})]})]}),C.length>0&&a.jsxs("section",{style:{marginBottom:"var(--space-16)"},children:[a.jsxs("div",{className:"flex-between",style:{marginBottom:"var(--space-6)"},children:[a.jsxs("h2",{style:{fontSize:"1.5rem"},children:["More from ",x==null?void 0:x.name]}),a.jsx(I,{to:`/department/${x==null?void 0:x.id}`,className:"btn btn-secondary btn-sm",children:"View All →"})]}),a.jsx("div",{className:"product-grid",children:C.map(N=>a.jsx(gl,{product:N},N.id))})]})]}),a.jsx("style",{children:`
        .pd-page { padding: var(--space-6) 0 var(--space-16); }

        /* Breadcrumb */
        .pd-bread {
          display: flex; align-items: center; flex-wrap: wrap; gap: 6px;
          font-size: 0.78rem; color: var(--ink-muted); margin-bottom: var(--space-8);
        }
        .pd-bread a { color: var(--ink-muted); transition: color var(--duration) var(--ease); }
        .pd-bread a:hover { color: var(--magenta); }
        .pd-bread span { color: var(--border-dark); }
        .pd-bread span:last-child { color: var(--ink); font-weight: 600; }

        /* Layout */
        .pd-layout {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: var(--space-12); margin-bottom: var(--space-12);
          align-items: start;
        }

        /* Gallery */
        .pd-gallery { display: flex; flex-direction: column; gap: var(--space-3); }
        .pd-gallery__main {
          position: relative; border-radius: var(--radius-xl);
          overflow: hidden; background: var(--ivory-dark); aspect-ratio: 1/1;
        }
        .pd-gallery__img {
          width: 100%; height: 100%; object-fit: cover;
          animation: img-fade 300ms var(--ease);
        }
        @keyframes img-fade { from { opacity:.5 } to { opacity:1 } }
        .pd-disc-badge {
          position: absolute; top: 16px; left: 16px;
          background: #EF4444; color: white;
          padding: 5px 12px; border-radius: var(--radius-full);
          font-size: 0.8rem; font-weight: 700;
        }
        .pd-wish-fab {
          position: absolute; top: 16px; right: 16px;
          width: 46px; height: 46px; border-radius: 50%;
          background: white; border: none; cursor: pointer;
          font-size: 1.3rem;
          display: flex; align-items: center; justify-content: center;
          color: var(--ink-muted); box-shadow: var(--shadow-md);
          transition: all var(--duration) var(--ease);
        }
        .pd-wish-fab.active, .pd-wish-fab:hover { color: var(--magenta); transform: scale(1.1); }
        .pd-gallery__thumbs { display: flex; gap: var(--space-3); }
        .pd-gallery__thumb {
          width: 74px; height: 74px; border-radius: var(--radius-md);
          border: 2px solid var(--border); overflow: hidden; cursor: pointer;
          background: none; padding: 0;
          transition: border-color var(--duration) var(--ease);
        }
        .pd-gallery__thumb.active { border-color: var(--magenta); }
        .pd-gallery__thumb img { width: 100%; height: 100%; object-fit: cover; }

        /* Info */
        .pd-info { display: flex; flex-direction: column; gap: var(--space-5); }
        .pd-info__meta { display: flex; align-items: center; flex-wrap: wrap; gap: var(--space-2); }
        .pd-info__brand { font-size: 0.78rem; font-weight: 700; color: var(--ink-muted); text-transform: uppercase; letter-spacing: 0.08em; }
        .pd-info__dept-pill {
          padding: 3px 10px; border-radius: var(--radius-full);
          font-size: 0.72rem; font-weight: 700; text-decoration: none;
          text-transform: uppercase; letter-spacing: 0.04em;
          transition: opacity var(--duration) var(--ease);
        }
        .pd-info__dept-pill:hover { opacity: 0.8; }
        .pd-info__name { font-size: clamp(1.6rem,3vw,2.2rem); line-height: 1.15; }
        .pd-info__rating { display: flex; align-items: center; gap: var(--space-2); flex-wrap: wrap; }
        .pd-info__category-pill {
          padding: 2px 10px; border-radius: var(--radius-full);
          background: var(--ivory-dark); border: 1px solid var(--border);
          font-size: 0.72rem; font-weight: 600; color: var(--ink-muted);
        }
        .pd-info__pricing { display: flex; align-items: center; flex-wrap: wrap; gap: var(--space-3); }
        .pd-info__price { font-size: 2.1rem; font-weight: 900; color: var(--ink); font-family: 'Inter',sans-serif; line-height: 1; }
        .pd-info__orig { font-size: 1rem; color: var(--ink-light); text-decoration: line-through; font-family: 'Inter',sans-serif; }
        .pd-info__saving { font-size: 0.82rem; color: var(--success); font-weight: 600; background: #DCFCE7; padding: 4px 12px; border-radius: var(--radius-full); display: inline-block; }

        /* Stock */
        .pd-stock { display: flex; align-items: center; gap: 6px; font-size: 0.875rem; font-weight: 700; }
        .pd-stock__icon { font-size: 0.9rem; }

        /* Variants */
        .pd-variant { display: flex; flex-direction: column; gap: var(--space-3); }
        .pd-variant__label { display: flex; align-items: center; justify-content: space-between; }
        .pd-variant__opts { display: flex; flex-wrap: wrap; gap: var(--space-2); }
        .pd-var-opt {
          padding: 7px 16px; border-radius: var(--radius-full);
          border: 1.5px solid var(--border); font-size: 0.82rem; font-weight: 600;
          color: var(--ink); cursor: pointer; background: var(--surface);
          transition: all var(--duration) var(--ease);
        }
        .pd-var-opt.active, .pd-var-opt:hover {
          border-color: var(--magenta); color: var(--magenta);
          background: #FDE8F3; box-shadow: var(--shadow-glow);
        }

        /* Quantity */
        .pd-qty-row { display: flex; align-items: center; gap: var(--space-5); }
        .pd-qty {
          display: inline-flex; align-items: center;
          border: 1.5px solid var(--border); border-radius: var(--radius-full); overflow: hidden;
        }
        .pd-qty__btn {
          width: 42px; height: 42px; background: var(--ivory); border: none;
          font-size: 1.2rem; font-weight: 700; cursor: pointer; color: var(--ink);
          transition: all var(--duration) var(--ease);
        }
        .pd-qty__btn:hover:not(:disabled) { background: var(--lavender-soft); color: var(--magenta); }
        .pd-qty__btn:disabled { opacity: 0.4; cursor: default; }
        .pd-qty__val { min-width: 48px; text-align: center; font-weight: 800; font-size: 1rem; }

        /* CTAs */
        .pd-ctas { display: flex; flex-direction: column; gap: var(--space-3); }
        .pd-wish-active {
          background: #FDE8F3; color: var(--magenta); border: 1.5px solid #F9A8D4;
        }

        /* Trust */
        .pd-trust {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: var(--space-3); padding-top: var(--space-4);
          border-top: 1px solid var(--border);
        }
        .pd-trust__item { display: flex; align-items: center; gap: 8px; font-size: 0.8rem; color: var(--ink-muted); }
        .pd-trust__icon { font-size: 1rem; }

        /* Tabs */
        .pd-tabs { margin-bottom: var(--space-12); }
        .pd-tabs__nav {
          display: flex; border-bottom: 2px solid var(--border);
          margin-bottom: var(--space-7); overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }
        .pd-tab-btn {
          padding: 12px var(--space-6); font-weight: 600; font-size: 0.875rem;
          color: var(--ink-muted); border: none; background: none; cursor: pointer;
          border-bottom: 2px solid transparent; margin-bottom: -2px; white-space: nowrap;
          transition: all var(--duration) var(--ease);
        }
        .pd-tab-btn.active { color: var(--magenta); border-bottom-color: var(--magenta); }
        .pd-tab-btn:hover { color: var(--magenta); }
        .pd-tabs__panel {}

        /* Specs table */
        .pd-specs-table { width: 100%; border-collapse: collapse; max-width: 600px; }
        .pd-specs-table tr:nth-child(even) td { background: var(--ivory); }
        .pd-specs-table td { padding: 10px 16px; font-size: 0.875rem; border-bottom: 1px solid var(--border); }
        .pd-specs-table__key { font-weight: 700; color: var(--ink-muted); width: 40%; }
        .pd-specs-table__val { color: var(--ink); }

        /* Reviews */
        .pd-reviews { display: flex; flex-direction: column; gap: var(--space-6); }
        .pd-reviews__summary {
          display: flex; gap: var(--space-8); align-items: flex-start;
          padding: var(--space-6); background: var(--ivory);
          border-radius: var(--radius-xl); flex-wrap: wrap;
        }
        .pd-reviews__avg-block { display: flex; flex-direction: column; align-items: center; gap: 4px; min-width: 80px; }
        .pd-reviews__avg-num { font-size: 3.5rem; font-weight: 900; color: var(--ink); font-family: 'Inter',sans-serif; line-height: 1; }
        .pd-reviews__bars { flex: 1; min-width: 200px; display: flex; flex-direction: column; gap: 8px; }
        .pd-reviews__bar-row { display: flex; align-items: center; gap: var(--space-3); }
        .pd-reviews__bar-track { flex: 1; height: 8px; background: var(--border); border-radius: 4px; overflow: hidden; }
        .pd-reviews__bar-fill { height: 100%; background: #FBBF24; border-radius: 4px; }
        .pd-review-list { display: flex; flex-direction: column; gap: var(--space-4); }
        .pd-review-card {
          padding: var(--space-5); background: var(--surface);
          border: 1px solid var(--border); border-radius: var(--radius-lg);
        }
        .pd-review-card__head { display: flex; align-items: center; gap: var(--space-3); margin-bottom: 6px; }
        .pd-review-card__avatar {
          width: 36px; height: 36px; border-radius: 50%; flex-shrink: 0;
          background: linear-gradient(135deg, var(--magenta), var(--coral));
          color: white; font-weight: 800; font-size: 0.9rem;
          display: flex; align-items: center; justify-content: center;
        }
        .pd-verified { margin-left: 6px; font-size: 0.7rem; color: var(--success); font-weight: 700; }

        /* Shipping */
        .pd-shipping { display: flex; flex-direction: column; gap: var(--space-3); max-width: 600px; }
        .pd-shipping__item {
          display: flex; gap: var(--space-4); align-items: flex-start;
          padding: var(--space-4); background: var(--ivory); border-radius: var(--radius-md);
        }
        .pd-shipping__icon { font-size: 1.4rem; flex-shrink: 0; margin-top: 2px; }

        @media (max-width: 860px) {
          .pd-layout { grid-template-columns: 1fr; gap: var(--space-8); }
          .pd-trust { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .pd-ctas { gap: var(--space-2); }
          .pd-info__price { font-size: 1.6rem; }
        }
      `})]})}function jh(){const{cart:e,cartSubtotal:t,shipping:r,couponDiscount:n,cartTotal:i,cartCount:s,cartDepartments:l,removeFromCart:o,updateQty:c,clearCart:d,appliedCoupon:h,applyCoupon:f,removeCoupon:u,COUPONS:w}=Me(),k=zr(),[x,S]=b.useState(""),[p,m]=b.useState(!1),g=()=>{x.trim()&&(m(!0),f(x,t),setTimeout(()=>{m(!1),S("")},400))};return e.length?a.jsxs("main",{className:"container",style:{padding:"var(--space-8) var(--space-6) var(--space-16)"},children:[a.jsxs("div",{className:"cart-header",children:[a.jsxs("div",{children:[a.jsx("h1",{children:"My Cart"}),a.jsxs("p",{className:"cart-header__sub text-muted text-sm",children:[s," item",s!==1?"s":""," from ",l.length," department",l.length!==1?"s":""]})]}),a.jsx("button",{className:"btn btn-ghost text-sm",onClick:d,children:"Clear All"})]}),l.length>0&&a.jsxs("div",{className:"cart-dept-row",children:[a.jsx("span",{className:"text-xs text-muted fw-600",style:{textTransform:"uppercase",letterSpacing:".07em"},children:"Departments in this cart:"}),l.map(v=>{const j=we(v);return a.jsxs("span",{className:"cart-dept-badge",style:{background:(j==null?void 0:j.color)+"15",color:j==null?void 0:j.color},children:[j==null?void 0:j.icon," ",j==null?void 0:j.name]},v)})]}),a.jsxs("div",{className:"cart-layout",children:[a.jsx("div",{className:"cart-items",children:e.map(v=>{const j=we(v.product.department),D=v.variantKey!=="default"?v.variantKey.split("|").map(_=>{const[C,z]=_.split(":");return`${C}: ${z}`}):[],y=v.product.stock??9999;return a.jsxs("div",{className:"cart-item",id:`cartitem-${v.itemId}`,children:[a.jsx(I,{to:`/product/${v.product.id}`,className:"cart-item__img-link",children:a.jsx("img",{src:v.product.image,alt:v.product.name,className:"cart-item__img"})}),a.jsxs("div",{className:"cart-item__info",children:[a.jsxs("div",{className:"cart-item__dept",style:{color:j==null?void 0:j.color},children:[j==null?void 0:j.icon," ",j==null?void 0:j.name]}),a.jsx(I,{to:`/product/${v.product.id}`,className:"cart-item__name",children:v.product.name}),v.product.brand&&a.jsx("div",{className:"cart-item__brand",children:v.product.brand}),D.length>0&&a.jsx("div",{className:"cart-item__variants",children:D.map(_=>a.jsx("span",{className:"cart-item__var-chip",children:_},_))}),a.jsxs("div",{className:"cart-item__unit-price",children:[R(v.product.price)," × ",v.qty]})]}),a.jsxs("div",{className:"cart-item__actions",children:[a.jsxs("div",{className:"cart-item__qty",role:"group","aria-label":"Quantity",children:[a.jsx("button",{className:"cart-item__qty-btn",onClick:()=>c(v.itemId,v.qty-1),"aria-label":"Decrease quantity",children:"−"}),a.jsx("span",{className:"cart-item__qty-val",children:v.qty}),a.jsx("button",{className:"cart-item__qty-btn",onClick:()=>c(v.itemId,v.qty+1),disabled:v.qty>=y,"aria-label":"Increase quantity",children:"+"})]}),v.qty>=y&&a.jsx("div",{className:"cart-item__stock-warn",children:"Max stock reached"}),a.jsx("div",{className:"cart-item__subtotal",children:R(v.product.price*v.qty)}),a.jsxs("button",{className:"cart-item__remove",onClick:()=>o(v.itemId),"aria-label":`Remove ${v.product.name}`,children:[a.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[a.jsx("polyline",{points:"3 6 5 6 21 6"}),a.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"})]}),"Remove"]})]})]},v.itemId)})}),a.jsxs("div",{className:"cart-summary",children:[a.jsx("h3",{className:"cart-summary__title",children:"Order Summary"}),a.jsxs("div",{className:"cart-summary__lines",children:[a.jsxs("div",{className:"cart-summary__line",children:[a.jsxs("span",{children:["Subtotal (",s," items)"]}),a.jsx("span",{children:R(t)})]}),a.jsxs("div",{className:"cart-summary__line",children:[a.jsx("span",{children:"Delivery fee"}),a.jsx("span",{className:r===0?"free-tag":"",children:r===0?"FREE":R(r)})]}),n>0&&a.jsxs("div",{className:"cart-summary__line cart-summary__line--discount",children:[a.jsxs("span",{children:["Coupon (",h==null?void 0:h.code,")",a.jsx("button",{className:"remove-coupon-link",onClick:u,children:"Remove"})]}),a.jsxs("span",{children:["−",R(n)]})]}),r>0&&a.jsxs("div",{className:"cart-summary__free-tip",children:["Add ",R(499-t)," more for free delivery"]})]}),a.jsx("hr",{className:"divider"}),a.jsxs("div",{className:"cart-summary__total",children:[a.jsx("span",{children:"Total"}),a.jsx("span",{className:"cart-summary__total-amt",children:R(i)})]}),n>0&&a.jsxs("div",{className:"cart-summary__saved",children:["🎉 You're saving ",R(n)," with coupon!"]}),a.jsx("div",{className:"coupon-block",children:h?a.jsxs("div",{className:"coupon-applied",children:[a.jsxs("div",{className:"coupon-applied__left",children:[a.jsx("span",{className:"coupon-applied__icon",children:"🏷️"}),a.jsxs("div",{children:[a.jsx("div",{className:"fw-700 text-sm",children:h.code}),a.jsx("div",{className:"text-xs text-muted",children:h.desc})]})]}),a.jsx("button",{className:"coupon-applied__remove",onClick:u,children:"✕"})]}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"coupon-input-row",children:[a.jsx("input",{type:"text",placeholder:"Enter coupon code",className:"input coupon-input",value:x,onChange:v=>S(v.target.value.toUpperCase()),onKeyDown:v=>v.key==="Enter"&&g(),id:"coupon-input","aria-label":"Coupon code"}),a.jsx("button",{className:"btn btn-primary btn-sm",onClick:g,disabled:p||!x.trim(),id:"apply-coupon-btn",children:p?"...":"Apply"})]}),a.jsxs("div",{className:"coupon-hints",children:["Try: ",a.jsx("button",{onClick:()=>S("SAVE10"),className:"coupon-hint-btn",children:"SAVE10"})," · ",a.jsx("button",{onClick:()=>S("FLAT150"),className:"coupon-hint-btn",children:"FLAT150"})," · ",a.jsx("button",{onClick:()=>S("NEWUSER"),className:"coupon-hint-btn",children:"NEWUSER"})]})]})}),a.jsx("button",{className:"btn btn-primary btn-lg w-full",id:"proceed-checkout-btn",onClick:()=>k("/checkout"),children:"Proceed to Checkout →"}),a.jsxs("div",{className:"cart-summary__secure",children:[a.jsx("span",{children:"🔒"}),a.jsx("span",{children:"This is a demo — no real payment processing"})]}),a.jsxs("div",{className:"cart-dept-breakdown",children:[a.jsx("div",{className:"text-xs text-muted fw-600",style:{textTransform:"uppercase",letterSpacing:".06em",marginBottom:8},children:"Departments"}),l.map(v=>{const j=we(v),y=e.filter(_=>_.product.department===v).reduce((_,C)=>_+C.product.price*C.qty,0);return a.jsxs("div",{className:"cart-dept-line",style:{"--dept-color":j==null?void 0:j.color},children:[a.jsxs("span",{children:[j==null?void 0:j.icon," ",j==null?void 0:j.name]}),a.jsx("span",{className:"fw-600",children:R(y)})]},v)})]})]})]}),a.jsx("style",{children:`
        /* Header */
        .cart-header {
          display: flex; align-items: flex-start; justify-content: space-between;
          margin-bottom: var(--space-5); flex-wrap: wrap; gap: var(--space-3);
        }
        .cart-header__sub { margin-top: 3px; }

        /* Dept row */
        .cart-dept-row {
          display: flex; align-items: center; flex-wrap: wrap; gap: var(--space-2);
          margin-bottom: var(--space-6);
          padding: var(--space-3) var(--space-4);
          background: var(--surface); border: 1px solid var(--border);
          border-radius: var(--radius-lg);
        }
        .cart-dept-badge {
          padding: 3px 10px; border-radius: var(--radius-full);
          font-size: 0.72rem; font-weight: 700;
        }

        /* Layout */
        .cart-layout {
          display: grid; grid-template-columns: 1fr 360px;
          gap: var(--space-8); align-items: start;
        }

        /* Items */
        .cart-items { display: flex; flex-direction: column; gap: var(--space-3); }
        .cart-item {
          display: grid;
          grid-template-columns: 100px 1fr auto;
          gap: var(--space-5);
          align-items: start;
          background: var(--surface); border: 1px solid var(--border);
          border-radius: var(--radius-xl); padding: var(--space-5);
          transition: box-shadow var(--duration) var(--ease), border-color var(--duration) var(--ease);
        }
        .cart-item:hover { box-shadow: var(--shadow-md); border-color: rgba(233,30,140,.15); }

        /* Image */
        .cart-item__img-link { flex-shrink: 0; }
        .cart-item__img {
          width: 100px; height: 100px; object-fit: cover;
          border-radius: var(--radius-md); background: var(--ivory-dark);
          transition: transform 300ms var(--ease);
        }
        .cart-item:hover .cart-item__img { transform: scale(1.04); }

        /* Info */
        .cart-item__info { display: flex; flex-direction: column; gap: 4px; }
        .cart-item__dept {
          font-size: 0.68rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: .07em;
        }
        .cart-item__name {
          font-family: 'Inter', sans-serif; font-size: 0.9rem; font-weight: 700;
          color: var(--ink); line-height: 1.3;
        }
        .cart-item__name:hover { color: var(--magenta); }
        .cart-item__brand { font-size: 0.72rem; color: var(--ink-light); }
        .cart-item__variants { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 3px; }
        .cart-item__var-chip {
          padding: 2px 8px; background: var(--ivory-dark);
          border: 1px solid var(--border); border-radius: var(--radius-full);
          font-size: 0.68rem; color: var(--ink-muted); font-weight: 600;
        }
        .cart-item__unit-price {
          font-size: 0.8rem; color: var(--ink-light); margin-top: 4px;
          font-family: 'Inter', sans-serif;
        }

        /* Actions */
        .cart-item__actions {
          display: flex; flex-direction: column;
          align-items: flex-end; gap: var(--space-3); min-width: 110px;
        }
        .cart-item__qty {
          display: flex; align-items: center;
          border: 1.5px solid var(--border); border-radius: var(--radius-full);
          overflow: hidden;
        }
        .cart-item__qty-btn {
          width: 34px; height: 34px; font-size: 1.1rem; font-weight: 700;
          color: var(--ink); background: var(--ivory); border: none; cursor: pointer;
          transition: all var(--duration) var(--ease);
          display: flex; align-items: center; justify-content: center;
        }
        .cart-item__qty-btn:hover:not(:disabled) { background: var(--lavender-soft); color: var(--magenta); }
        .cart-item__qty-btn:disabled { opacity: 0.35; cursor: default; }
        .cart-item__qty-val {
          min-width: 36px; text-align: center;
          font-weight: 800; font-size: 0.9rem; color: var(--ink);
        }
        .cart-item__stock-warn {
          font-size: 0.68rem; font-weight: 700; color: var(--warning);
          background: #FEF3C7; padding: 2px 8px; border-radius: var(--radius-full);
        }
        .cart-item__subtotal {
          font-size: 1.05rem; font-weight: 900; color: var(--ink);
          font-family: 'Inter', sans-serif;
        }
        .cart-item__remove {
          display: flex; align-items: center; gap: 5px;
          padding: 5px 10px; border-radius: var(--radius-full);
          font-size: 0.72rem; font-weight: 600; color: var(--ink-muted);
          border: 1px solid var(--border); background: none; cursor: pointer;
          transition: all var(--duration) var(--ease);
        }
        .cart-item__remove:hover { color: var(--error); background: #FEE2E2; border-color: #FCA5A5; }

        /* Summary */
        .cart-summary {
          background: var(--surface); border: 1px solid var(--border);
          border-radius: var(--radius-xl); padding: var(--space-6);
          box-shadow: var(--shadow-md); position: sticky; top: 88px;
          display: flex; flex-direction: column; gap: var(--space-5);
        }
        .cart-summary__title {
          font-family: 'Inter', sans-serif; font-size: 1.05rem; font-weight: 800;
        }
        .cart-summary__lines { display: flex; flex-direction: column; gap: var(--space-3); }
        .cart-summary__line {
          display: flex; justify-content: space-between;
          font-size: 0.875rem; color: var(--ink-muted);
        }
        .cart-summary__line--discount { color: var(--success); }
        .free-tag { color: var(--magenta); font-weight: 700; }
        .remove-coupon-link {
          margin-left: 8px; font-size: 0.7rem; font-weight: 700;
          color: var(--error); text-decoration: underline; cursor: pointer;
          background: none; border: none;
        }
        .cart-summary__free-tip {
          font-size: 0.78rem; color: var(--magenta); font-weight: 600;
          background: #FDE8F3; padding: 6px 10px; border-radius: var(--radius-sm);
          text-align: center;
        }
        .cart-summary__total {
          display: flex; justify-content: space-between;
          font-size: 1.05rem; font-weight: 800; color: var(--ink);
        }
        .cart-summary__total-amt { font-size: 1.3rem; }
        .cart-summary__saved {
          font-size: 0.8rem; font-weight: 600; color: var(--success);
          background: #DCFCE7; padding: 8px 12px; border-radius: var(--radius-md);
          text-align: center;
        }
        .cart-summary__secure {
          display: flex; align-items: center; justify-content: center;
          gap: 6px; font-size: 0.72rem; color: var(--ink-light); text-align: center;
          padding-top: var(--space-2); border-top: 1px solid var(--border);
        }

        /* Coupon */
        .coupon-block { display: flex; flex-direction: column; gap: var(--space-2); }
        .coupon-input-row { display: flex; gap: var(--space-2); }
        .coupon-input {
          border-radius: var(--radius-full); padding: 9px 16px; font-size: 0.85rem;
          letter-spacing: 0.08em; font-weight: 600; text-transform: uppercase;
        }
        .coupon-hints { font-size: 0.72rem; color: var(--ink-light); }
        .coupon-hint-btn {
          background: none; border: none; cursor: pointer;
          color: var(--magenta); font-weight: 700; font-size: 0.72rem;
          text-decoration: underline;
        }

        .coupon-applied {
          display: flex; align-items: center; justify-content: space-between;
          padding: var(--space-3) var(--space-4);
          background: #DCFCE7; border: 1.5px dashed #86EFAC;
          border-radius: var(--radius-md);
        }
        .coupon-applied__left { display: flex; align-items: center; gap: var(--space-3); }
        .coupon-applied__icon { font-size: 1.2rem; }
        .coupon-applied__remove {
          background: none; border: none; cursor: pointer;
          color: var(--ink-muted); font-size: 1rem;
          transition: color var(--duration) var(--ease);
        }
        .coupon-applied__remove:hover { color: var(--error); }

        /* Dept breakdown */
        .cart-dept-breakdown {
          padding-top: var(--space-4); border-top: 1px solid var(--border);
        }
        .cart-dept-line {
          display: flex; justify-content: space-between;
          font-size: 0.8rem; color: var(--ink-muted);
          padding: 4px 0; border-bottom: 1px solid var(--ivory-dark);
        }
        .cart-dept-line:last-child { border-bottom: none; }

        /* Responsive */
        @media (max-width: 960px) {
          .cart-layout { grid-template-columns: 1fr; }
          .cart-summary { position: static; }
        }
        @media (max-width: 600px) {
          .cart-item { grid-template-columns: 80px 1fr; }
          .cart-item__actions {
            grid-column: 1 / -1;
            flex-direction: row; flex-wrap: wrap;
            align-items: center; justify-content: space-between;
          }
          .cart-item__img { width: 80px; height: 80px; }
        }
      `})]}):a.jsxs("main",{className:"container cart-empty-page",children:[a.jsxs("div",{className:"cart-empty",children:[a.jsxs("div",{className:"cart-empty__art",children:[a.jsx("div",{className:"cart-empty__icon",children:"🛒"}),a.jsx("div",{className:"cart-empty__ring"})]}),a.jsx("h2",{children:"Your cart is empty"}),a.jsxs("p",{children:["Looks like you haven't added anything yet.",a.jsx("br",{}),"Let's change that across all six departments!"]}),a.jsx(I,{to:"/",className:"btn btn-primary btn-lg",id:"cart-continue-shopping",children:"Continue Shopping →"}),a.jsx("div",{className:"cart-empty__depts",children:["fashion","beauty","electronics","home","grocery","kids"].map(v=>{const j=we(v);return a.jsxs(I,{to:`/department/${v}`,className:"cart-empty__dept-chip",children:[j==null?void 0:j.icon," ",j==null?void 0:j.name]},v)})})]}),a.jsx("style",{children:`
        .cart-empty-page { padding: var(--space-16) var(--space-6); }
        .cart-empty {
          display: flex; flex-direction: column; align-items: center;
          text-align: center; padding: var(--space-16) var(--space-8);
          max-width: 520px; margin: 0 auto;
        }
        .cart-empty__art { position: relative; margin-bottom: var(--space-8); }
        .cart-empty__icon {
          font-size: 5rem; position: relative; z-index: 1;
          animation: bob 3s ease-in-out infinite;
        }
        @keyframes bob { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .cart-empty__ring {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
          width: 120px; height: 120px; border-radius: 50%;
          background: radial-gradient(circle, rgba(233,30,140,.12) 0%, transparent 70%);
        }
        .cart-empty h2 { margin-bottom: var(--space-3); }
        .cart-empty p { color: var(--ink-muted); line-height: 1.75; margin-bottom: var(--space-8); }
        .cart-empty__depts {
          display: flex; flex-wrap: wrap; gap: var(--space-2); justify-content: center;
          margin-top: var(--space-8);
        }
        .cart-empty__dept-chip {
          padding: 7px 16px; border: 1.5px solid var(--border);
          border-radius: var(--radius-full); font-size: 0.82rem; font-weight: 600;
          color: var(--ink); text-decoration: none;
          transition: all var(--duration) var(--ease);
        }
        .cart-empty__dept-chip:hover { border-color: var(--magenta); color: var(--magenta); }
      `})]})}const $o=["Delivery","Payment","Review"];function kh({step:e}){return a.jsx("div",{className:"step-bar",children:$o.map((t,r)=>a.jsxs(js.Fragment,{children:[a.jsxs("div",{className:`step-node ${r<e?"done":r===e?"active":"pending"}`,children:[a.jsx("div",{className:"step-node__circle",children:r<e?a.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"3",children:a.jsx("polyline",{points:"20 6 9 17 4 12"})}):r+1}),a.jsx("span",{className:"step-node__label",children:t})]}),r<$o.length-1&&a.jsx("div",{className:`step-connector ${r<e?"done":""}`})]},t))})}const wi={name:e=>e.trim().length>=2?"":"Please enter your full name",email:e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)?"":"Enter a valid email address",phone:e=>/^\d{10}$/.test(e.replace(/\s/g,""))?"":"Enter a valid 10-digit mobile number",line1:e=>e.trim().length>=5?"":"Enter your street address",city:e=>e.trim().length>=2?"":"Enter your city",state:e=>e.trim().length>=2?"":"Select your state",pincode:e=>/^\d{6}$/.test(e)?"":"Enter a valid 6-digit PIN code"};function Lt({label:e,id:t,type:r="text",value:n,onChange:i,error:s,placeholder:l,maxLength:o,pattern:c,required:d=!0,half:h}){return a.jsxs("div",{className:`form-field ${h?"half":""}`,children:[a.jsxs("label",{className:"label",htmlFor:t,children:[e,d&&a.jsx("span",{style:{color:"var(--magenta)"},children:" *"})]}),a.jsx("input",{id:t,type:r,className:`input ${s?"input--error":""}`,value:n,onChange:f=>i(f.target.value),placeholder:l||e,maxLength:o,pattern:c,autoComplete:"on"}),s&&a.jsx("span",{className:"field-error",children:s})]})}const Nh=["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Delhi","Chandigarh","Puducherry","Jammu & Kashmir","Ladakh"];function Sh({order:e}){var t,r;return a.jsxs("div",{className:"confirm-screen",children:[a.jsx("div",{className:"confirm-screen__confetti","aria-hidden":!0,children:["🎉","✨","🛍️","🎊","⭐","💫"].map((n,i)=>a.jsx("span",{className:"confetti-piece",style:{"--delay":`${i*.12}s`,"--x":`${i*37%100}%`},children:n},i))}),a.jsxs("div",{className:"confirm-screen__card",children:[a.jsxs("div",{className:"confirm-screen__badge",children:[a.jsx("div",{className:"confirm-screen__check",children:a.jsx("svg",{width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2.5",children:a.jsx("polyline",{points:"20 6 9 17 4 12"})})}),a.jsx("h2",{className:"confirm-screen__title",children:"Order Placed!"}),a.jsx("p",{className:"confirm-screen__sub",children:"Thank you for shopping with BLOWMAGGY. Your demo order is confirmed."})]}),a.jsxs("div",{className:"confirm-screen__id-box",children:[a.jsx("span",{className:"text-xs text-muted fw-600",style:{textTransform:"uppercase",letterSpacing:".1em"},children:"Order ID"}),a.jsx("div",{className:"confirm-screen__id",children:e.id}),a.jsx("div",{className:"text-xs text-muted",children:new Date(e.date).toLocaleString("en-IN",{dateStyle:"long",timeStyle:"short"})})]}),a.jsxs("div",{className:"confirm-screen__demo-notice",children:[a.jsx("span",{children:"🎯"}),a.jsxs("div",{children:[a.jsx("div",{className:"fw-700 text-sm",children:"Demo Payment — No real transaction"}),a.jsxs("div",{className:"text-xs",style:{color:"rgba(255,255,255,.75)"},children:["Payment via ",(r=(t=e.payment)==null?void 0:t.method)==null?void 0:r.toUpperCase()," · Status: ",a.jsx("strong",{children:"Simulated Success"})]})]})]}),a.jsxs("div",{className:"confirm-screen__items",children:[a.jsx("h4",{className:"text-sm fw-700",style:{marginBottom:8},children:"Items ordered:"}),e.items.map(n=>{const i=we(n.product.department),s=n.variantKey!=="default"?n.variantKey.split("|").map(l=>l.split(":")[1]).join(", "):"";return a.jsxs("div",{className:"confirm-item",children:[a.jsx("img",{src:n.product.image,alt:n.product.name,className:"confirm-item__img"}),a.jsxs("div",{className:"confirm-item__info",children:[a.jsx("div",{className:"fw-600 text-sm",children:n.product.name}),a.jsxs("div",{className:"text-xs",style:{color:i==null?void 0:i.color},children:[i==null?void 0:i.icon," ",i==null?void 0:i.name]}),s&&a.jsx("div",{className:"text-xs text-muted",children:s})]}),a.jsxs("div",{className:"confirm-item__price",children:[a.jsx("div",{className:"fw-700 text-sm",children:R(n.product.price*n.qty)}),a.jsxs("div",{className:"text-xs text-muted",children:["Qty ",n.qty]})]})]},n.itemId)})]}),a.jsxs("div",{className:"confirm-screen__totals",children:[a.jsxs("div",{className:"confirm-total-row",children:[a.jsx("span",{children:"Subtotal"}),a.jsx("span",{children:R(e.subtotal)})]}),a.jsxs("div",{className:"confirm-total-row",children:[a.jsx("span",{children:"Delivery"}),a.jsx("span",{className:e.shipping===0?"free-tag":"",children:e.shipping===0?"FREE":R(e.shipping)})]}),e.discount>0&&a.jsxs("div",{className:"confirm-total-row",style:{color:"var(--success)"},children:[a.jsx("span",{children:"Coupon discount"}),a.jsxs("span",{children:["−",R(e.discount)]})]}),a.jsx("hr",{className:"divider",style:{margin:"8px 0"}}),a.jsxs("div",{className:"confirm-total-row confirm-total-row--total",children:[a.jsx("span",{children:"Total Paid"}),a.jsx("span",{children:R(e.total)})]})]}),a.jsxs("div",{className:"confirm-screen__btns",children:[a.jsx(I,{to:"/orders",className:"btn btn-primary btn-lg",id:"view-order-btn",children:"View My Orders"}),a.jsx(I,{to:"/",className:"btn btn-secondary btn-lg",id:"continue-shopping-confirm-btn",children:"Continue Shopping"})]}),a.jsx("p",{className:"confirm-screen__disclaimer",children:"This is a demo prototype built for Vibe Coding Competition 2026. No real payment has been processed. Order tracking is simulated."})]}),a.jsx("style",{children:`
        .confirm-screen {
          position: relative; overflow: hidden;
          min-height: 60vh; padding: var(--space-12) var(--space-6);
          display: flex; justify-content: center; align-items: flex-start;
        }
        .confirm-screen__confetti {
          position: fixed; inset: 0; pointer-events: none; z-index: 0; overflow: hidden;
        }
        .confetti-piece {
          position: absolute; top: -40px; left: var(--x);
          font-size: 1.8rem;
          animation: fall 3s ease-in var(--delay) forwards;
          opacity: 0;
        }
        @keyframes fall {
          0%   { opacity:1; transform: translateY(0)   rotate(0deg); }
          100% { opacity:0; transform: translateY(110vh) rotate(720deg); }
        }
        .confirm-screen__card {
          position: relative; z-index: 1;
          background: var(--surface); border: 1px solid var(--border);
          border-radius: var(--radius-xl); padding: var(--space-8);
          box-shadow: var(--shadow-xl); max-width: 580px; width: 100%;
          display: flex; flex-direction: column; gap: var(--space-6);
        }
        .confirm-screen__badge {
          display: flex; flex-direction: column; align-items: center;
          text-align: center; gap: var(--space-3);
        }
        .confirm-screen__check {
          width: 80px; height: 80px; border-radius: 50%;
          background: linear-gradient(135deg, #22C55E, #16A34A);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 8px 24px rgba(34,197,94,.3);
          animation: pop-in 500ms cubic-bezier(0.34,1.56,0.64,1) forwards;
        }
        @keyframes pop-in {
          from { transform: scale(0); opacity:0; }
          to   { transform: scale(1); opacity:1; }
        }
        .confirm-screen__title { font-size: 2rem; margin: 0; }
        .confirm-screen__sub { color: var(--ink-muted); max-width: 340px; }
        .confirm-screen__id-box {
          text-align: center; padding: var(--space-4);
          background: var(--ivory); border-radius: var(--radius-lg);
          display: flex; flex-direction: column; gap: 4px;
        }
        .confirm-screen__id {
          font-family: 'Inter',sans-serif; font-size: 1.4rem; font-weight: 900;
          color: var(--ink); letter-spacing: 0.04em;
        }
        .confirm-screen__demo-notice {
          display: flex; align-items: center; gap: var(--space-4);
          padding: var(--space-4); border-radius: var(--radius-lg);
          background: linear-gradient(135deg,#7C3AED,#C026D3);
          color: white;
        }
        .confirm-screen__demo-notice span { font-size: 1.5rem; }
        .confirm-screen__items { display: flex; flex-direction: column; gap: var(--space-3); }
        .confirm-item {
          display: flex; align-items: center; gap: var(--space-3);
          padding: var(--space-3); background: var(--ivory); border-radius: var(--radius-md);
        }
        .confirm-item__img {
          width: 52px; height: 52px; object-fit: cover;
          border-radius: var(--radius-sm); flex-shrink: 0;
        }
        .confirm-item__info { flex: 1; }
        .confirm-item__price { text-align: right; flex-shrink: 0; }
        .confirm-screen__totals {
          background: var(--ivory); border-radius: var(--radius-lg); padding: var(--space-4);
        }
        .confirm-total-row {
          display: flex; justify-content: space-between;
          font-size: 0.875rem; color: var(--ink-muted); padding: 4px 0;
        }
        .confirm-total-row--total {
          font-size: 1.05rem; font-weight: 800; color: var(--ink);
          padding-top: var(--space-3);
        }
        .free-tag { color: var(--magenta); font-weight: 700; }
        .confirm-screen__btns {
          display: flex; flex-direction: column; gap: var(--space-3);
        }
        .confirm-screen__disclaimer {
          text-align: center; font-size: 0.72rem;
          color: var(--ink-light); line-height: 1.65;
          border-top: 1px solid var(--border); padding-top: var(--space-4);
        }
      `})]})}function Ch(){const{cart:e,cartSubtotal:t,shipping:r,couponDiscount:n,cartTotal:i,appliedCoupon:s,placeOrder:l,toast:o}=Me();zr();const c=b.useRef(!1),[d,h]=b.useState(0),[f,u]=b.useState(!1),[w,k]=b.useState(null),[x,S]=b.useState({}),[p,m]=b.useState({name:"",email:"",phone:"",line1:"",line2:"",city:"",state:"",pincode:""}),[g,v]=b.useState("upi"),[j,D]=b.useState(""),[y,_]=b.useState({number:"",name:"",expiry:"",cvv:""}),C=(P,$)=>{m(U=>({...U,[P]:$})),S(U=>({...U,[P]:""}))},z=(P,$)=>_(U=>({...U,[P]:$})),N=()=>{const P=["name","email","phone","line1","city","state","pincode"],$={};return P.forEach(U=>{var Ge;$[U]=((Ge=wi[U])==null?void 0:Ge.call(wi,p[U]))||""}),S($),Object.values($).every(U=>!U)};if(!e.length&&!w)return a.jsxs("main",{className:"container",style:{padding:"var(--space-20) var(--space-6)",textAlign:"center"},children:[a.jsx("div",{style:{fontSize:"4rem",marginBottom:"var(--space-5)"},children:"🛒"}),a.jsx("h2",{children:"Your cart is empty"}),a.jsx("p",{className:"text-muted",style:{marginBottom:"var(--space-7)"},children:"Add items before proceeding to checkout."}),a.jsx(I,{to:"/",className:"btn btn-primary btn-lg",children:"Start Shopping →"})]});if(w)return a.jsx(Sh,{order:w});const L=b.useCallback(()=>{if(c.current)return;if(!e.length){o("Your cart is empty — add products before ordering.","error","✕");return}const P=e.filter(U=>U.product.stock===0);if(P.length){o(`${P[0].product.name} is out of stock. Remove it to continue.`,"error","✕");return}const $=e.find(U=>U.qty>(U.product.stock??1/0));if($){o(`Only ${$.product.stock} units of "${$.product.name}" available.`,"warning","⚠");return}c.current=!0,u(!0),setTimeout(()=>{const U={id:"BMG"+Date.now().toString(36).toUpperCase(),date:new Date().toISOString(),items:e.map(Ge=>({...Ge})),subtotal:t,shipping:r,discount:n,total:i,coupon:(s==null?void 0:s.code)||null,address:{...p},payment:{method:g,upiId:g==="upi"?j||"demo@upi":void 0,last4:g==="card"?y.number.replace(/\s/g,"").slice(-4)||"****":void 0,status:"Simulated Success (Demo)"},status:"Confirmed",timeline:[{label:"Order Placed",done:!0,time:new Date().toLocaleString()},{label:"Confirmed",done:!0,time:new Date().toLocaleString()},{label:"Processing",done:!1,time:""},{label:"Shipped",done:!1,time:""},{label:"Delivered",done:!1,time:""}]};l({subtotal:t,shipping:r,discount:n,total:i},p,U.payment,U),k(U),u(!1)},2200)},[e,t,r,n,i,s,p,g,j,y,l,o]);return a.jsxs("main",{className:"container",style:{padding:"var(--space-8) var(--space-6) var(--space-16)"},children:[a.jsxs("div",{style:{marginBottom:"var(--space-8)"},children:[a.jsx("h1",{children:"Checkout"}),a.jsxs("p",{className:"text-muted text-sm",style:{marginTop:4},children:[e.reduce((P,$)=>P+$.qty,0)," items · Demo checkout — no real payment will be processed"]})]}),a.jsx(kh,{step:d}),a.jsxs("div",{className:"co-layout",children:[a.jsxs("div",{className:"co-main",children:[d===0&&a.jsxs("div",{className:"co-card",id:"delivery-form",children:[a.jsx("h3",{className:"co-card__title",children:"📍 Delivery Details"}),a.jsxs("div",{className:"form-row-2",children:[a.jsx(Lt,{id:"name",label:"Full Name",value:p.name,onChange:P=>C("name",P),error:x.name,placeholder:"Priya Sharma"}),a.jsx(Lt,{id:"phone",label:"Mobile Number",type:"tel",value:p.phone,onChange:P=>C("phone",P),error:x.phone,placeholder:"10-digit number",maxLength:10})]}),a.jsx(Lt,{id:"email",label:"Email Address",type:"email",value:p.email,onChange:P=>C("email",P),error:x.email,placeholder:"you@example.com"}),a.jsx(Lt,{id:"line1",label:"Address Line 1",value:p.line1,onChange:P=>C("line1",P),error:x.line1,placeholder:"Flat / House no., Street, Colony"}),a.jsx(Lt,{id:"line2",label:"Address Line 2",value:p.line2,onChange:P=>C("line2",P),error:"",placeholder:"Landmark, Area (optional)",required:!1}),a.jsxs("div",{className:"form-row-3",children:[a.jsx(Lt,{id:"city",label:"City",value:p.city,onChange:P=>C("city",P),error:x.city,placeholder:"Mumbai"}),a.jsxs("div",{className:"form-field",children:[a.jsxs("label",{className:"label",htmlFor:"state",children:["State ",a.jsx("span",{style:{color:"var(--magenta)"},children:"*"})]}),a.jsxs("select",{id:"state",className:`input ${x.state?"input--error":""}`,value:p.state,onChange:P=>C("state",P.target.value),children:[a.jsx("option",{value:"",children:"Select state"}),Nh.map(P=>a.jsx("option",{value:P,children:P},P))]}),x.state&&a.jsx("span",{className:"field-error",children:x.state})]}),a.jsx(Lt,{id:"pincode",label:"PIN Code",type:"tel",value:p.pincode,onChange:P=>C("pincode",P),error:x.pincode,placeholder:"400001",maxLength:6})]}),a.jsx("button",{id:"continue-to-payment-btn",className:"btn btn-primary btn-lg",onClick:()=>{N()?h(1):o("Please fix the highlighted fields.","error","✕")},children:"Continue to Payment →"})]}),d===1&&a.jsxs("div",{className:"co-card",id:"payment-form",children:[a.jsx("h3",{className:"co-card__title",children:"💳 Payment Method"}),a.jsxs("div",{className:"demo-banner",children:[a.jsx("span",{children:"🎯"}),a.jsxs("div",{children:[a.jsx("div",{className:"fw-700 text-sm",children:"Demo Mode — Simulated Payments Only"}),a.jsx("div",{className:"text-xs",style:{color:"rgba(255,255,255,.75)",marginTop:2},children:"No real card numbers, UPI PINs, or banking credentials are collected or processed."})]})]}),a.jsx("div",{className:"pay-methods",children:[{id:"upi",icon:"📱",label:"UPI",sub:"Google Pay · PhonePe · BHIM · Paytm"},{id:"card",icon:"💳",label:"Debit / Credit Card",sub:"Visa · Mastercard · Rupay · Amex"},{id:"netbanking",icon:"🏦",label:"Net Banking",sub:"All major Indian banks"},{id:"cod",icon:"💵",label:"Cash on Delivery",sub:"Pay when your order arrives"}].map(P=>a.jsxs("label",{className:`pay-method ${g===P.id?"active":""}`,id:`pay-${P.id}`,children:[a.jsx("input",{type:"radio",name:"payMethod",value:P.id,checked:g===P.id,onChange:()=>v(P.id)}),a.jsx("span",{className:"pay-method__icon",children:P.icon}),a.jsxs("div",{className:"pay-method__info",children:[a.jsx("div",{className:"pay-method__label",children:P.label}),a.jsx("div",{className:"pay-method__sub",children:P.sub})]}),g===P.id&&a.jsx("span",{className:"pay-method__check",children:"✓"})]},P.id))}),g==="upi"&&a.jsxs("div",{className:"pay-detail-box",children:[a.jsxs("div",{className:"form-field",children:[a.jsx("label",{className:"label",htmlFor:"upi-id",children:"UPI ID (demo)"}),a.jsx("input",{id:"upi-id",type:"text",className:"input",value:j,onChange:P=>D(P.target.value),placeholder:"yourname@upi (demo)"})]}),a.jsx("p",{className:"pay-detail-note",children:"Any value is accepted in demo mode. No real UPI transaction occurs."})]}),g==="card"&&a.jsxs("div",{className:"pay-detail-box",children:[a.jsxs("div",{className:"card-demo-warning",children:["⚠️ ",a.jsx("strong",{children:"Demo only"})," — Do NOT enter real card details. Any digits are accepted for simulation."]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{className:"label",htmlFor:"card-num",children:"Card Number (demo)"}),a.jsx("input",{id:"card-num",type:"text",className:"input",value:y.number,maxLength:19,onChange:P=>z("number",P.target.value.replace(/\D/g,"").replace(/(.{4})/g,"$1 ").trim()),placeholder:"0000 0000 0000 0000"})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{className:"label",htmlFor:"card-name",children:"Cardholder Name (demo)"}),a.jsx("input",{id:"card-name",type:"text",className:"input",value:y.name,onChange:P=>z("name",P.target.value),placeholder:"Name on card"})]}),a.jsxs("div",{className:"form-row-2",children:[a.jsxs("div",{className:"form-field",children:[a.jsx("label",{className:"label",htmlFor:"card-exp",children:"Expiry (demo)"}),a.jsx("input",{id:"card-exp",type:"text",className:"input",value:y.expiry,maxLength:5,onChange:P=>z("expiry",P.target.value),placeholder:"MM/YY"})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{className:"label",htmlFor:"card-cvv",children:"CVV (demo)"}),a.jsx("input",{id:"card-cvv",type:"password",className:"input",value:y.cvv,maxLength:4,onChange:P=>z("cvv",P.target.value),placeholder:"•••"})]})]})]}),g==="netbanking"&&a.jsx("div",{className:"pay-detail-box",children:a.jsx("p",{className:"pay-detail-note",children:"Net banking redirect is simulated. No actual bank login page is shown."})}),g==="cod"&&a.jsx("div",{className:"pay-detail-box",children:a.jsx("p",{className:"pay-detail-note",children:"Pay in cash when your order is delivered. Applicable for all pin codes in demo mode."})}),a.jsxs("div",{className:"co-card__btns",children:[a.jsx("button",{className:"btn btn-secondary",onClick:()=>h(0),children:"← Back"}),a.jsx("button",{id:"continue-to-review-btn",className:"btn btn-primary btn-lg",onClick:()=>h(2),children:"Review Order →"})]})]}),d===2&&a.jsxs("div",{className:"co-card",id:"review-section",children:[a.jsx("h3",{className:"co-card__title",children:"📋 Review Your Order"}),a.jsxs("div",{className:"review-block",children:[a.jsxs("div",{className:"review-block__head",children:[a.jsx("h4",{children:"📍 Delivery Address"}),a.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>h(0),children:"Edit"})]}),a.jsx("p",{className:"text-sm fw-600",children:p.name}),a.jsxs("p",{className:"text-sm text-muted",children:[p.phone," · ",p.email]}),a.jsx("p",{className:"text-sm text-muted",children:[p.line1,p.line2,p.city,p.state,p.pincode].filter(Boolean).join(", ")})]}),a.jsxs("div",{className:"review-block",children:[a.jsxs("div",{className:"review-block__head",children:[a.jsx("h4",{children:"💳 Payment"}),a.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>h(1),children:"Edit"})]}),a.jsxs("p",{className:"text-sm fw-600",children:[g==="upi"&&`UPI — ${j||"demo@upi"}`,g==="card"&&`Card ****${y.number.replace(/\s/g,"").slice(-4)||"0000"}`,g==="netbanking"&&"Net Banking (simulated)",g==="cod"&&"Cash on Delivery"]}),a.jsx("p",{className:"text-xs",style:{color:"var(--warning)",marginTop:4,fontWeight:600},children:"🎯 Demo Mode — No real payment will occur"})]}),a.jsxs("div",{className:"review-block",children:[a.jsxs("h4",{style:{marginBottom:10},children:["🛍️ Items (",e.reduce((P,$)=>P+$.qty,0),")"]}),e.map(P=>{const $=we(P.product.department),U=P.variantKey!=="default"?P.variantKey.split("|").map(Ge=>Ge.split(":")[1]).join(", "):"";return a.jsxs("div",{className:"review-item",children:[a.jsx("img",{src:P.product.image,alt:P.product.name,className:"review-item__img"}),a.jsxs("div",{className:"review-item__info",children:[a.jsx("div",{className:"fw-600 text-sm",children:P.product.name}),a.jsxs("div",{className:"text-xs",style:{color:$==null?void 0:$.color},children:[$==null?void 0:$.icon," ",$==null?void 0:$.name]}),U&&a.jsx("div",{className:"text-xs text-muted",children:U}),a.jsxs("div",{className:"text-xs text-muted",children:["Qty: ",P.qty]})]}),a.jsx("div",{className:"fw-700 text-sm",children:R(P.product.price*P.qty)})]},P.itemId)})]}),e.some(P=>P.qty>(P.product.stock??1/0))&&a.jsx("div",{className:"co-stock-warning",children:"⚠️ Some items exceed available stock. Quantities will be auto-adjusted."}),a.jsxs("div",{className:"co-card__btns",children:[a.jsx("button",{className:"btn btn-secondary",onClick:()=>h(1),disabled:f,children:"← Back"}),a.jsx("button",{id:"place-order-btn",className:"btn btn-primary btn-lg",onClick:L,disabled:f,style:{minWidth:200,position:"relative"},children:f?a.jsxs("span",{className:"placing-spinner",children:[a.jsx("span",{className:"spinner-dot"}),a.jsx("span",{className:"spinner-dot"}),a.jsx("span",{className:"spinner-dot"}),"Placing Order…"]}):`✓ Place Order · ${R(i)}`})]}),a.jsx("p",{className:"co-disclaimer",children:"By placing this order you acknowledge this is a demo prototype with no real financial transaction."})]})]}),a.jsxs("aside",{className:"co-summary",children:[a.jsx("h3",{className:"co-summary__title",children:"Order Summary"}),a.jsx("div",{className:"co-summary__items",children:e.map(P=>a.jsxs("div",{className:"co-summary__item",children:[a.jsxs("div",{className:"co-summary__item-img-wrap",children:[a.jsx("img",{src:P.product.image,alt:P.product.name}),a.jsx("span",{className:"co-summary__qty-badge",children:P.qty})]}),a.jsx("div",{className:"co-summary__item-name text-sm fw-600",children:P.product.name}),a.jsx("div",{className:"co-summary__item-price text-sm fw-700 text-muted",children:R(P.product.price*P.qty)})]},P.itemId))}),a.jsx("hr",{className:"divider"}),a.jsxs("div",{className:"co-summary__rows",children:[a.jsxs("div",{className:"co-summary__row",children:[a.jsx("span",{children:"Subtotal"}),a.jsx("span",{children:R(t)})]}),a.jsxs("div",{className:"co-summary__row",children:[a.jsx("span",{children:"Delivery"}),a.jsx("span",{className:r===0?"free-tag":"",children:r===0?"FREE":R(r)})]}),n>0&&a.jsxs("div",{className:"co-summary__row",style:{color:"var(--success)"},children:[a.jsxs("span",{children:["Coupon (",s==null?void 0:s.code,")"]}),a.jsxs("span",{children:["−",R(n)]})]}),a.jsx("hr",{className:"divider",style:{margin:"8px 0"}}),a.jsxs("div",{className:"co-summary__row co-summary__row--total",children:[a.jsx("span",{children:"Total"}),a.jsx("span",{children:R(i)})]})]}),n>0&&a.jsxs("div",{className:"co-summary__saved",children:["🎉 Saving ",R(n)]})]})]}),a.jsx("style",{children:`
        /* Step bar */
        .step-bar {
          display: flex; align-items: center; margin-bottom: var(--space-10);
        }
        .step-node { display: flex; flex-direction: column; align-items: center; gap: 6px; flex-shrink: 0; }
        .step-node__circle {
          width: 38px; height: 38px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.88rem; font-weight: 700;
          transition: all 300ms var(--ease);
        }
        .step-node.pending .step-node__circle { background: var(--ivory-dark); color: var(--ink-muted); border: 2px solid var(--border); }
        .step-node.active  .step-node__circle { background: linear-gradient(135deg,var(--magenta),var(--coral)); color: white; box-shadow: var(--shadow-glow); }
        .step-node.done    .step-node__circle { background: #22C55E; color: white; }
        .step-node__label { font-size: 0.72rem; font-weight: 700; color: var(--ink-muted); white-space: nowrap; }
        .step-node.active .step-node__label { color: var(--magenta); }
        .step-node.done   .step-node__label { color: #16A34A; }
        .step-connector {
          flex: 1; height: 2px; background: var(--border);
          margin: 0 8px; margin-bottom: 22px;
          transition: background 300ms var(--ease);
        }
        .step-connector.done { background: #22C55E; }

        /* Layout */
        .co-layout { display: grid; grid-template-columns: 1fr 340px; gap: var(--space-8); align-items: start; }
        .co-main { display: flex; flex-direction: column; gap: var(--space-6); }

        /* Card */
        .co-card {
          background: var(--surface); border: 1px solid var(--border);
          border-radius: var(--radius-xl); padding: var(--space-8);
          display: flex; flex-direction: column; gap: var(--space-5);
          box-shadow: var(--shadow-sm);
          animation: fadeUp 250ms var(--ease);
        }
        @keyframes fadeUp { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
        .co-card__title { font-family:'Inter',sans-serif; font-size:1.1rem; font-weight:800; }
        .co-card__btns { display:flex; gap:var(--space-3); align-items:center; margin-top:var(--space-2); }

        /* Form fields */
        .form-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4); }
        .form-row-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: var(--space-4); }
        .form-field { display: flex; flex-direction: column; gap: var(--space-2); }
        .input--error { border-color: var(--error) !important; }
        .input--error:focus { box-shadow: 0 0 0 3px rgba(220,38,38,.18) !important; }
        .field-error { font-size: 0.72rem; color: var(--error); font-weight: 600; margin-top: 2px; }

        /* Demo banner */
        .demo-banner {
          display: flex; align-items: center; gap: var(--space-4);
          padding: var(--space-4); border-radius: var(--radius-lg);
          background: linear-gradient(135deg,#7C3AED,#C026D3); color: white;
        }
        .demo-banner span { font-size: 1.4rem; }
        .card-demo-warning {
          padding: var(--space-3) var(--space-4);
          background: #FEF3C7; border: 1px solid #FDE68A;
          border-radius: var(--radius-md); font-size: 0.82rem; color: #92400E;
        }

        /* Pay methods */
        .pay-methods { display: flex; flex-direction: column; gap: var(--space-3); }
        .pay-method {
          display: flex; align-items: center; gap: var(--space-4);
          padding: var(--space-4); border: 1.5px solid var(--border);
          border-radius: var(--radius-lg); cursor: pointer;
          transition: all var(--duration) var(--ease);
        }
        .pay-method:hover { border-color: var(--magenta); background: var(--ivory); }
        .pay-method.active { border-color: var(--magenta); background: #FDE8F3; }
        .pay-method input { accent-color: var(--magenta); }
        .pay-method__icon { font-size: 1.5rem; flex-shrink: 0; }
        .pay-method__info { flex: 1; }
        .pay-method__label { font-size: 0.9rem; font-weight: 700; color: var(--ink); }
        .pay-method__sub   { font-size: 0.72rem; color: var(--ink-muted); }
        .pay-method__check { color: #22C55E; font-weight: 800; font-size: 1.1rem; }

        .pay-detail-box {
          padding: var(--space-5); background: var(--ivory);
          border-radius: var(--radius-lg); display: flex; flex-direction: column; gap: var(--space-4);
        }
        .pay-detail-note { font-size: 0.78rem; color: var(--ink-muted); font-style: italic; }

        /* Review */
        .review-block {
          background: var(--ivory); border-radius: var(--radius-lg); padding: var(--space-5);
          display: flex; flex-direction: column; gap: 5px;
        }
        .review-block__head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px; }
        .review-block__head h4 { font-family:'Inter',sans-serif; font-size:0.9rem; font-weight:800; }
        .review-item { display: flex; align-items: center; gap: var(--space-3); padding: var(--space-3); background: var(--surface); border-radius: var(--radius-md); margin-top: var(--space-2); }
        .review-item__img { width: 48px; height: 48px; object-fit: cover; border-radius: var(--radius-sm); flex-shrink: 0; }
        .review-item__info { flex: 1; display: flex; flex-direction: column; gap: 2px; }

        .co-stock-warning {
          padding: var(--space-3) var(--space-4); background: #FEF3C7;
          border: 1px solid #FDE68A; border-radius: var(--radius-md);
          font-size: 0.82rem; color: #92400E; font-weight: 600;
        }
        .co-disclaimer {
          font-size: 0.72rem; color: var(--ink-light); text-align: center; line-height: 1.65;
          border-top: 1px solid var(--border); padding-top: var(--space-4);
        }

        /* Spinner */
        .placing-spinner { display: flex; align-items: center; gap: 8px; }
        .spinner-dot {
          width: 7px; height: 7px; border-radius: 50%; background: white;
          animation: dot-bounce 1.2s ease-in-out infinite;
        }
        .spinner-dot:nth-child(1) { animation-delay: 0s; }
        .spinner-dot:nth-child(2) { animation-delay: .2s; }
        .spinner-dot:nth-child(3) { animation-delay: .4s; }
        @keyframes dot-bounce { 0%,80%,100% { transform:scale(.6); opacity:.4; } 40% { transform:scale(1); opacity:1; } }

        /* Summary */
        .co-summary {
          background: var(--surface); border: 1px solid var(--border);
          border-radius: var(--radius-xl); padding: var(--space-6);
          box-shadow: var(--shadow-md); position: sticky; top: 88px;
          display: flex; flex-direction: column; gap: var(--space-4);
        }
        .co-summary__title { font-family:'Inter',sans-serif; font-size:1rem; font-weight:800; }
        .co-summary__items { display: flex; flex-direction: column; gap: var(--space-3); max-height: 280px; overflow-y: auto; }
        .co-summary__item { display: flex; align-items: center; gap: var(--space-3); }
        .co-summary__item-img-wrap { position: relative; flex-shrink: 0; }
        .co-summary__item-img-wrap img { width: 46px; height: 46px; object-fit: cover; border-radius: var(--radius-sm); }
        .co-summary__qty-badge {
          position: absolute; top: -5px; right: -5px;
          width: 18px; height: 18px; border-radius: 50%;
          background: var(--ink); color: white;
          font-size: 0.62rem; font-weight: 800;
          display: flex; align-items: center; justify-content: center;
          border: 2px solid white;
        }
        .co-summary__item-name { flex: 1; }
        .co-summary__rows { display: flex; flex-direction: column; gap: var(--space-3); }
        .co-summary__row {
          display: flex; justify-content: space-between;
          font-size: 0.875rem; color: var(--ink-muted);
        }
        .co-summary__row--total { font-size: 1rem; font-weight: 800; color: var(--ink); }
        .co-summary__saved {
          padding: 7px 12px; background: #DCFCE7; border-radius: var(--radius-md);
          font-size: 0.78rem; font-weight: 700; color: var(--success); text-align: center;
        }
        .free-tag { color: var(--magenta); font-weight: 700; }

        @media (max-width: 900px) {
          .co-layout { grid-template-columns: 1fr; }
          .co-summary { position: static; }
          .form-row-2, .form-row-3 { grid-template-columns: 1fr; }
        }
      `})]})}const Ca={Confirmed:{color:"#7C3AED",bg:"#EDE9FF"},Processing:{color:"#D97706",bg:"#FEF3C7"},Shipped:{color:"#0284C7",bg:"#E0F2FE"},"Out for Delivery":{color:"#059669",bg:"#DCFCE7"},Delivered:{color:"#16A34A",bg:"#DCFCE7"},Cancelled:{color:"#DC2626",bg:"#FEE2E2"}};function Eh({steps:e}){return a.jsx("div",{className:"timeline",children:e.map((t,r)=>a.jsxs("div",{className:`tl-step ${t.done?"done":r===e.findIndex(n=>!n.done)?"current":"pending"}`,children:[a.jsxs("div",{className:"tl-step__rail",children:[a.jsx("div",{className:"tl-step__dot",children:t.done&&a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"3",children:a.jsx("polyline",{points:"20 6 9 17 4 12"})})}),r<e.length-1&&a.jsx("div",{className:"tl-step__line"})]}),a.jsxs("div",{className:"tl-step__content",children:[a.jsx("div",{className:"tl-step__label",children:t.label}),t.done&&t.time&&a.jsx("div",{className:"tl-step__time",children:t.time}),!t.done&&r===e.findIndex(n=>!n.done)&&a.jsx("div",{className:"tl-step__eta",children:"⏱ In progress (demo tracking)"})]})]},r))})}function Ph({order:e,onBack:t}){var i,s,l,o,c,d,h,f;const r=Ca[e.status]||Ca.Confirmed,n=[...new Set(e.items.map(u=>u.product.department))];return a.jsxs("div",{className:"od-page",id:`order-detail-${e.id}`,children:[a.jsxs("div",{className:"od-page__top",children:[a.jsx("button",{className:"btn btn-ghost",onClick:t,id:"back-to-orders-btn",children:"← All Orders"}),a.jsx("div",{className:"order-status-badge",style:{background:r.bg,color:r.color},children:e.status})]}),a.jsxs("div",{className:"od-grid",children:[a.jsxs("div",{className:"od-left",children:[a.jsx("div",{className:"od-card",children:a.jsxs("div",{className:"od-card__row-2",children:[a.jsxs("div",{children:[a.jsx("div",{className:"text-xs text-muted fw-600",style:{textTransform:"uppercase",letterSpacing:".08em",marginBottom:4},children:"Order ID"}),a.jsx("div",{className:"od-order-id",children:e.id}),a.jsx("div",{className:"text-xs text-muted",style:{marginTop:4},children:new Date(e.date).toLocaleString("en-IN",{dateStyle:"long",timeStyle:"short"})})]}),a.jsxs("div",{style:{textAlign:"right"},children:[a.jsx("div",{className:"text-xs text-muted fw-600",style:{textTransform:"uppercase",letterSpacing:".08em",marginBottom:4},children:"Total Paid"}),a.jsx("div",{style:{fontSize:"1.4rem",fontWeight:900,fontFamily:"'Inter',sans-serif",color:"var(--ink)"},children:R(e.total)}),e.coupon&&a.jsxs("div",{className:"text-xs",style:{color:"var(--success)",fontWeight:700,marginTop:2},children:["🏷️ ",e.coupon," applied"]})]})]})}),a.jsxs("div",{className:"demo-track-banner",children:[a.jsx("span",{children:"📡"}),a.jsxs("div",{children:[a.jsx("div",{className:"fw-700 text-sm",children:"Demo Order Tracking"}),a.jsx("div",{className:"text-xs",style:{color:"rgba(255,255,255,.75)",marginTop:2},children:"Tracking is simulated for this prototype. Real delivery does not occur."})]})]}),a.jsxs("div",{className:"od-card",children:[a.jsx("h4",{className:"od-card__title",children:"📍 Delivery Status"}),a.jsx(Eh,{steps:e.timeline||[]})]}),a.jsxs("div",{className:"od-card",children:[a.jsxs("h4",{className:"od-card__title",children:["🛍️ Items (",e.items.reduce((u,w)=>u+w.qty,0),")"]}),e.items.map(u=>{const w=we(u.product.department),k=u.variantKey!=="default"?u.variantKey.split("|").map(x=>{const[S,p]=x.split(":");return`${S}: ${p}`}).join(" · "):"";return a.jsxs("div",{className:"od-item",children:[a.jsx("img",{src:u.product.image,alt:u.product.name,className:"od-item__img"}),a.jsxs("div",{className:"od-item__info",children:[a.jsx("div",{className:"fw-700 text-sm",children:u.product.name}),u.product.brand&&a.jsx("div",{className:"text-xs text-muted",children:u.product.brand}),a.jsxs("div",{className:"text-xs",style:{color:w==null?void 0:w.color},children:[w==null?void 0:w.icon," ",w==null?void 0:w.name]}),k&&a.jsx("div",{className:"text-xs text-muted",children:k}),a.jsxs("div",{className:"text-xs text-muted",children:["Qty: ",u.qty]})]}),a.jsxs("div",{className:"od-item__price",children:[a.jsx("div",{className:"fw-800 text-sm",children:R(u.product.price*u.qty)}),a.jsxs("div",{className:"text-xs text-muted",children:[R(u.product.price)," each"]})]})]},u.itemId)})]})]}),a.jsxs("div",{className:"od-right",children:[a.jsxs("div",{className:"od-card",children:[a.jsx("h4",{className:"od-card__title",children:"💰 Price Breakdown"}),a.jsxs("div",{className:"od-price-rows",children:[a.jsxs("div",{className:"od-price-row",children:[a.jsx("span",{children:"Subtotal"}),a.jsx("span",{children:R(e.subtotal||e.total)})]}),a.jsxs("div",{className:"od-price-row",children:[a.jsx("span",{children:"Delivery"}),a.jsx("span",{className:e.shipping===0?"free-tag":"",children:e.shipping===0?"FREE":R(e.shipping)})]}),e.discount>0&&a.jsxs("div",{className:"od-price-row",style:{color:"var(--success)"},children:[a.jsx("span",{children:"Coupon Discount"}),a.jsxs("span",{children:["−",R(e.discount)]})]}),a.jsx("hr",{className:"divider",style:{margin:"8px 0"}}),a.jsxs("div",{className:"od-price-row od-price-row--total",children:[a.jsx("span",{children:"Total"}),a.jsx("span",{children:R(e.total)})]})]})]}),a.jsxs("div",{className:"od-card",children:[a.jsx("h4",{className:"od-card__title",children:"💳 Payment"}),a.jsxs("div",{className:"od-payment",children:[a.jsxs("div",{className:"od-payment__method",children:[((i=e.payment)==null?void 0:i.method)==="upi"&&"📱 UPI",((s=e.payment)==null?void 0:s.method)==="card"&&"💳 Debit/Credit Card",((l=e.payment)==null?void 0:l.method)==="netbanking"&&"🏦 Net Banking",((o=e.payment)==null?void 0:o.method)==="cod"&&"💵 Cash on Delivery",!((c=e.payment)!=null&&c.method)&&"💳 Demo Payment"]}),((d=e.payment)==null?void 0:d.upiId)&&a.jsx("div",{className:"text-sm text-muted",children:e.payment.upiId}),((h=e.payment)==null?void 0:h.last4)&&a.jsxs("div",{className:"text-sm text-muted",children:["Card ****",e.payment.last4]}),a.jsxs("div",{className:"od-payment__status",children:[a.jsx("span",{className:"od-payment__dot"}),((f=e.payment)==null?void 0:f.status)||"Simulated Success (Demo)"]}),a.jsx("div",{className:"od-payment__note",children:"🎯 Demo mode — No real payment was processed"})]})]}),e.address&&a.jsxs("div",{className:"od-card",children:[a.jsx("h4",{className:"od-card__title",children:"📍 Delivery Address"}),a.jsxs("div",{className:"od-address",children:[a.jsx("div",{className:"fw-600 text-sm",children:e.address.name}),a.jsxs("div",{className:"text-sm text-muted",children:[e.address.phone,e.address.email?` · ${e.address.email}`:""]}),a.jsx("div",{className:"text-sm text-muted",style:{marginTop:4},children:[e.address.line1,e.address.line2,e.address.city,e.address.state,e.address.pincode].filter(Boolean).join(", ")})]})]}),a.jsxs("div",{className:"od-card",children:[a.jsx("h4",{className:"od-card__title",children:"🏬 Departments"}),a.jsx("div",{className:"od-depts",children:n.map(u=>{const w=we(u);return a.jsxs("span",{className:"od-dept-chip",style:{background:(w==null?void 0:w.color)+"15",color:w==null?void 0:w.color},children:[w==null?void 0:w.icon," ",w==null?void 0:w.name]},u)})})]}),a.jsxs("div",{className:"od-actions",children:[a.jsx(I,{to:"/",className:"btn btn-primary w-full",id:"od-continue-shopping-btn",children:"Continue Shopping →"}),a.jsx("button",{className:"btn btn-secondary w-full",onClick:t,children:"← All Orders"})]})]})]})]})}function zh(){const{orders:e}=Me(),[t,r]=b.useState(null),n=t?e.find(i=>i.id===t):null;return e.length?n?a.jsxs("main",{className:"container",style:{padding:"var(--space-8) var(--space-6) var(--space-16)"},children:[a.jsx(Ph,{order:n,onBack:()=>r(null)}),a.jsx(Uo,{})]}):a.jsxs("main",{className:"container",style:{padding:"var(--space-8) var(--space-6) var(--space-16)"},children:[a.jsxs("div",{style:{marginBottom:"var(--space-8)"},children:[a.jsx("h1",{children:"My Orders"}),a.jsxs("p",{className:"text-muted text-sm",style:{marginTop:4},children:[e.length," order",e.length!==1?"s":""," · All purchases are demo transactions"]})]}),a.jsx("div",{className:"orders-list",children:e.map(i=>{var c,d,h,f,u,w;const s=Ca[i.status]||Ca.Confirmed,l=[...new Set(i.items.map(k=>k.product.department))],o=i.items.reduce((k,x)=>k+x.qty,0);return a.jsxs("div",{className:"order-card",onClick:()=>r(i.id),id:`ordercard-${i.id}`,tabIndex:0,role:"button",onKeyDown:k=>k.key==="Enter"&&r(i.id),children:[a.jsxs("div",{className:"order-card__head",children:[a.jsxs("div",{children:[a.jsx("div",{className:"order-card__id",children:i.id}),a.jsx("div",{className:"text-xs text-muted",style:{marginTop:2},children:new Date(i.date).toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"})})]}),a.jsxs("div",{className:"order-card__right",children:[a.jsx("span",{className:"order-status-badge",style:{background:s.bg,color:s.color},children:i.status}),a.jsx("div",{className:"order-card__total",children:R(i.total)})]})]}),a.jsxs("div",{className:"order-card__thumbs",children:[i.items.slice(0,4).map(k=>a.jsx("img",{src:k.product.image,alt:k.product.name,className:"order-card__thumb",title:k.product.name},k.itemId)),i.items.length>4&&a.jsxs("div",{className:"order-card__thumb-more",children:["+",i.items.length-4]})]}),a.jsxs("div",{className:"order-card__foot",children:[a.jsx("div",{className:"order-card__depts",children:l.map(k=>{const x=we(k);return a.jsxs("span",{className:"order-card__dept-chip",style:{background:(x==null?void 0:x.color)+"15",color:x==null?void 0:x.color},children:[x==null?void 0:x.icon," ",x==null?void 0:x.name]},k)})}),a.jsxs("div",{className:"order-card__meta",children:[a.jsxs("span",{className:"text-xs text-muted",children:[o," item",o!==1?"s":""]}),i.coupon&&a.jsxs("span",{className:"text-xs",style:{color:"var(--success)",fontWeight:700},children:["🏷️ ",i.coupon]}),a.jsx("span",{className:"text-xs text-magenta fw-700",children:"View Details →"})]})]}),a.jsxs("div",{className:"order-card__payment",children:[a.jsxs("span",{className:"text-xs text-muted",children:[((c=i.payment)==null?void 0:c.method)==="upi"&&"📱 UPI",((d=i.payment)==null?void 0:d.method)==="card"&&"💳 Card",((h=i.payment)==null?void 0:h.method)==="netbanking"&&"🏦 Net Banking",((f=i.payment)==null?void 0:f.method)==="cod"&&"💵 Cash on Delivery",!((u=i.payment)!=null&&u.method)&&"💳 Demo Payment"]}),a.jsxs("span",{className:"text-xs",style:{color:"#16A34A",fontWeight:700},children:["✓ ",((w=i.payment)==null?void 0:w.status)||"Simulated Success (Demo)"]})]})]},i.id)})}),a.jsx(Uo,{})]}):a.jsxs("main",{className:"container",style:{padding:"var(--space-8) var(--space-6) var(--space-16)"},children:[a.jsxs("div",{className:"orders-empty",children:[a.jsx("div",{className:"orders-empty__icon",children:"📦"}),a.jsx("h2",{children:"No orders yet"}),a.jsx("p",{className:"text-muted",children:"Your order history will appear here after you complete a demo checkout."}),a.jsx(I,{to:"/",className:"btn btn-primary btn-lg",id:"orders-shop-btn",children:"Start Shopping →"})]}),a.jsx("style",{children:`
          .orders-empty {
            display: flex; flex-direction: column; align-items: center;
            text-align: center; padding: var(--space-20);
          }
          .orders-empty__icon { font-size: 5rem; margin-bottom: var(--space-5); animation: bob 3s ease-in-out infinite; }
          @keyframes bob { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
          .orders-empty h2 { margin-bottom: var(--space-3); }
          .orders-empty .text-muted { margin-bottom: var(--space-7); max-width: 360px; }
        `})]})}function Uo(){return a.jsx("style",{children:`
      /* List */
      .orders-list { display: flex; flex-direction: column; gap: var(--space-4); }
      .order-card {
        background: var(--surface); border: 1px solid var(--border);
        border-radius: var(--radius-xl); padding: var(--space-5);
        cursor: pointer; display: flex; flex-direction: column; gap: var(--space-4);
        transition: all var(--duration) var(--ease);
      }
      .order-card:hover { box-shadow: var(--shadow-lg); transform: translateY(-2px); border-color: var(--magenta); }
      .order-card__head { display: flex; justify-content: space-between; align-items: flex-start; }
      .order-card__id   { font-family:'Inter',sans-serif; font-size:0.95rem; font-weight:800; color:var(--ink); letter-spacing:.02em; }
      .order-card__right { display:flex; flex-direction:column; align-items:flex-end; gap:5px; }
      .order-card__total { font-family:'Inter',sans-serif; font-size:1.1rem; font-weight:900; color:var(--ink); }

      .order-status-badge {
        padding: 3px 10px; border-radius: var(--radius-full);
        font-size: 0.72rem; font-weight: 800; text-transform: uppercase; letter-spacing:.04em;
      }

      .order-card__thumbs { display:flex; gap:var(--space-2); align-items:center; }
      .order-card__thumb {
        width: 56px; height: 56px; object-fit: cover;
        border-radius: var(--radius-md); border: 1px solid var(--border);
        transition: transform 200ms var(--ease);
      }
      .order-card:hover .order-card__thumb { transform: scale(1.05); }
      .order-card__thumb-more {
        width: 56px; height: 56px; border-radius: var(--radius-md);
        background: var(--ivory-dark); display:flex; align-items:center; justify-content:center;
        font-size:0.82rem; font-weight:700; color:var(--ink-muted);
      }
      .order-card__foot { display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:var(--space-2); }
      .order-card__depts { display:flex; flex-wrap:wrap; gap:5px; }
      .order-card__dept-chip { padding:2px 8px; border-radius:var(--radius-full); font-size:0.68rem; font-weight:700; }
      .order-card__meta { display:flex; align-items:center; gap:var(--space-4); }
      .order-card__payment {
        display:flex; align-items:center; justify-content:space-between;
        padding:var(--space-2) var(--space-3);
        background:var(--ivory); border-radius:var(--radius-md);
      }

      /* Detail page */
      .od-page { display:flex; flex-direction:column; gap:var(--space-6); }
      .od-page__top { display:flex; align-items:center; justify-content:space-between; }

      .od-grid { display:grid; grid-template-columns:1fr 340px; gap:var(--space-8); align-items:start; }
      .od-left  { display:flex; flex-direction:column; gap:var(--space-5); }
      .od-right { display:flex; flex-direction:column; gap:var(--space-4); position:sticky; top:88px; }

      .od-card {
        background:var(--surface); border:1px solid var(--border);
        border-radius:var(--radius-xl); padding:var(--space-5);
        display:flex; flex-direction:column; gap:var(--space-4);
      }
      .od-card__title { font-family:'Inter',sans-serif; font-size:0.9rem; font-weight:800; }
      .od-card__row-2 { display:flex; justify-content:space-between; align-items:flex-start; }
      .od-order-id { font-family:'Inter',sans-serif; font-size:1.2rem; font-weight:900; color:var(--ink); letter-spacing:.04em; }

      /* Demo banner */
      .demo-track-banner {
        display:flex; align-items:center; gap:var(--space-4);
        padding:var(--space-4); border-radius:var(--radius-lg);
        background:linear-gradient(135deg,#0284C7,#0EA5E9); color:white;
      }
      .demo-track-banner span { font-size:1.4rem; }

      /* Timeline */
      .timeline { display:flex; flex-direction:column; }
      .tl-step { display:flex; gap:var(--space-4); }
      .tl-step__rail { display:flex; flex-direction:column; align-items:center; width:28px; flex-shrink:0; }
      .tl-step__dot {
        width:28px; height:28px; border-radius:50%; flex-shrink:0;
        display:flex; align-items:center; justify-content:center;
        transition:all 300ms var(--ease);
      }
      .tl-step.done    .tl-step__dot { background:#22C55E; box-shadow:0 0 0 4px #DCFCE7; }
      .tl-step.current .tl-step__dot { background:var(--magenta); box-shadow:var(--shadow-glow); animation:pulse-ring 2s infinite; }
      .tl-step.pending .tl-step__dot { background:var(--border); }
      @keyframes pulse-ring { 0%,100% { box-shadow:0 0 0 4px rgba(233,30,140,.15); } 50% { box-shadow:0 0 0 8px rgba(233,30,140,.05); } }
      .tl-step__line { flex:1; width:2px; background:var(--border); margin:4px 0; min-height:36px; transition:background 300ms var(--ease); }
      .tl-step.done .tl-step__line { background:#22C55E; }
      .tl-step__content { padding-bottom:var(--space-5); flex:1; }
      .tl-step__label { font-size:0.875rem; font-weight:700; color:var(--ink); }
      .tl-step.pending .tl-step__label { color:var(--ink-light); }
      .tl-step__time   { font-size:0.72rem; color:var(--ink-muted); margin-top:2px; }
      .tl-step__eta    { font-size:0.72rem; color:var(--magenta); margin-top:2px; font-weight:600; }

      /* Items */
      .od-item { display:flex; align-items:center; gap:var(--space-3); padding:var(--space-3); background:var(--ivory); border-radius:var(--radius-md); }
      .od-item__img { width:60px; height:60px; object-fit:cover; border-radius:var(--radius-sm); flex-shrink:0; }
      .od-item__info { flex:1; display:flex; flex-direction:column; gap:2px; }
      .od-item__price { text-align:right; flex-shrink:0; }

      /* Price rows */
      .od-price-rows { display:flex; flex-direction:column; gap:var(--space-3); }
      .od-price-row { display:flex; justify-content:space-between; font-size:0.875rem; color:var(--ink-muted); }
      .od-price-row--total { font-size:1.05rem; font-weight:800; color:var(--ink); }
      .free-tag { color:var(--magenta); font-weight:700; }

      /* Payment */
      .od-payment { display:flex; flex-direction:column; gap:5px; }
      .od-payment__method { font-size:0.9rem; font-weight:700; color:var(--ink); }
      .od-payment__status { display:flex; align-items:center; gap:7px; font-size:0.78rem; font-weight:600; color:#16A34A; margin-top:4px; }
      .od-payment__dot { width:8px; height:8px; border-radius:50%; background:#22C55E; flex-shrink:0; }
      .od-payment__note { font-size:0.72rem; color:var(--ink-light); font-style:italic; }

      /* Address */
      .od-address { display:flex; flex-direction:column; gap:3px; }

      /* Depts */
      .od-depts { display:flex; flex-wrap:wrap; gap:var(--space-2); }
      .od-dept-chip { padding:4px 12px; border-radius:var(--radius-full); font-size:0.78rem; font-weight:700; }

      /* Actions */
      .od-actions { display:flex; flex-direction:column; gap:var(--space-3); }

      @media (max-width:900px) {
        .od-grid { grid-template-columns:1fr; }
        .od-right { position:static; }
      }
    `})}function Dh({product:e}){const{toggleWishlist:t,moveToCart:r,wishlist:n}=Me(),i=we(e.department),s=Nr(e.price,e.originalPrice);return n.includes(e.id),a.jsxs("div",{className:"wish-card",id:`wishcard-${e.id}`,children:[a.jsxs(I,{to:`/product/${e.id}`,className:"wish-card__img-wrap",children:[a.jsx("img",{src:e.image,alt:e.name,className:"wish-card__img",loading:"lazy"}),s>0&&a.jsxs("span",{className:"wish-card__disc",children:[s,"% OFF"]}),e.stock===0&&a.jsx("div",{className:"wish-card__oos",children:"Out of Stock"})]}),a.jsxs("div",{className:"wish-card__body",children:[a.jsxs("div",{className:"wish-card__dept",style:{color:i==null?void 0:i.color},children:[i==null?void 0:i.icon," ",i==null?void 0:i.name]}),a.jsx(I,{to:`/product/${e.id}`,className:"wish-card__name",children:e.name}),a.jsx("div",{className:"wish-card__brand",children:e.brand}),a.jsxs("div",{className:"wish-card__stars",children:["★".repeat(Math.round(e.rating)),a.jsxs("span",{className:"wish-card__rev",children:[" (",e.reviews,")"]})]}),a.jsxs("div",{className:"wish-card__price-row",children:[a.jsx("span",{className:"wish-card__price",children:R(e.price)}),e.originalPrice>e.price&&a.jsx("span",{className:"wish-card__orig",children:R(e.originalPrice)})]}),a.jsxs("div",{className:"wish-card__btns",children:[a.jsx("button",{className:"btn btn-primary btn-sm w-full",onClick:()=>r(e),disabled:e.stock===0,id:`wish-move-cart-${e.id}`,children:e.stock===0?"Out of Stock":"🛒 Move to Cart"}),a.jsxs("button",{className:"wish-card__remove",onClick:()=>t(e.id),"aria-label":`Remove ${e.name} from wishlist`,children:[a.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[a.jsx("polyline",{points:"3 6 5 6 21 6"}),a.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"})]}),"Remove"]})]})]})]})}function Th(){const{wishlist:e,moveToCart:t}=Me(),r=Ne.filter(i=>e.includes(i.id)),n=r.filter(i=>i.stock>0);return a.jsxs("main",{className:"container",style:{padding:"var(--space-8) var(--space-6) var(--space-16)"},children:[a.jsxs("div",{className:"flex-between",style:{marginBottom:"var(--space-8)"},children:[a.jsxs("div",{children:[a.jsx("h1",{children:"My Wishlist"}),a.jsxs("p",{className:"text-muted text-sm",style:{marginTop:4},children:[r.length," saved item",r.length!==1?"s":"",n.length<r.length&&` · ${r.length-n.length} out of stock`]})]}),n.length>0&&a.jsxs("button",{className:"btn btn-primary",onClick:()=>n.forEach(i=>t(i)),id:"wishlist-add-all-btn",children:["🛒 Move All to Cart (",n.length,")"]})]}),r.length===0?a.jsxs("div",{className:"wishlist-empty",children:[a.jsx("div",{className:"wishlist-empty__icon",children:"♡"}),a.jsx("h2",{children:"Your wishlist is empty"}),a.jsx("p",{className:"text-muted",children:"Save items you love by clicking the heart icon on any product. They'll appear here, ready to move to your cart any time."}),a.jsx(I,{to:"/",className:"btn btn-primary btn-lg",id:"wishlist-browse-btn",children:"Discover Products →"}),a.jsx("div",{className:"wishlist-empty__depts",children:["fashion","beauty","electronics","home","grocery","kids"].map(i=>{const s=we(i);return a.jsxs(I,{to:`/department/${i}`,className:"wishlist-dept-chip",children:[s==null?void 0:s.icon," ",s==null?void 0:s.name]},i)})})]}):a.jsx("div",{className:"wish-grid",children:r.map(i=>a.jsx(Dh,{product:i},i.id))}),a.jsx("style",{children:`
        /* Grid */
        .wish-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: var(--space-5);
        }

        /* Card */
        .wish-card {
          background: var(--surface); border: 1px solid var(--border);
          border-radius: var(--radius-xl); overflow: hidden;
          display: flex; flex-direction: column;
          transition: box-shadow 250ms var(--ease), transform 250ms var(--ease);
        }
        .wish-card:hover { box-shadow: var(--shadow-lg); transform: translateY(-4px); }

        .wish-card__img-wrap {
          display: block; position: relative; overflow: hidden; aspect-ratio: 4/3;
          background: var(--ivory-dark);
        }
        .wish-card__img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 400ms var(--ease);
        }
        .wish-card:hover .wish-card__img { transform: scale(1.05); }
        .wish-card__disc {
          position: absolute; top: 10px; left: 10px;
          background: #EF4444; color: white; padding: 3px 8px;
          border-radius: var(--radius-full); font-size: 0.68rem; font-weight: 700;
        }
        .wish-card__oos {
          position: absolute; inset: 0;
          background: rgba(0,0,0,.4);
          display: flex; align-items: center; justify-content: center;
          color: white; font-weight: 700; font-size: 0.875rem; letter-spacing: .04em;
        }

        .wish-card__body {
          padding: var(--space-4) var(--space-4) var(--space-5);
          display: flex; flex-direction: column; gap: 4px; flex: 1;
        }
        .wish-card__dept { font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; }
        .wish-card__name {
          font-family: 'Inter',sans-serif; font-size: 0.875rem; font-weight: 700;
          color: var(--ink); line-height: 1.3;
          display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
        }
        .wish-card__name:hover { color: var(--magenta); }
        .wish-card__brand { font-size: 0.7rem; color: var(--ink-light); }
        .wish-card__stars { color: #FBBF24; font-size: 0.75rem; }
        .wish-card__rev   { color: var(--ink-light); font-size: 0.7rem; font-family: 'Inter',sans-serif; }
        .wish-card__price-row { display: flex; align-items: center; gap: 7px; margin-top: 4px; }
        .wish-card__price { font-size: 0.95rem; font-weight: 800; color: var(--ink); font-family: 'Inter',sans-serif; }
        .wish-card__orig  { font-size: 0.78rem; color: var(--ink-light); text-decoration: line-through; }

        .wish-card__btns  { display: flex; flex-direction: column; gap: var(--space-2); margin-top: var(--space-4); }
        .wish-card__remove {
          display: flex; align-items: center; justify-content: center; gap: 5px;
          padding: 7px; border-radius: var(--radius-full);
          font-size: 0.75rem; font-weight: 600; color: var(--ink-muted);
          border: 1px solid var(--border); background: none; cursor: pointer;
          transition: all var(--duration) var(--ease);
        }
        .wish-card__remove:hover { color: var(--error); background: #FEE2E2; border-color: #FCA5A5; }

        /* Empty */
        .wishlist-empty {
          display: flex; flex-direction: column; align-items: center;
          text-align: center; padding: var(--space-16) var(--space-8);
          max-width: 480px; margin: 0 auto;
        }
        .wishlist-empty__icon {
          font-size: 5rem; color: var(--magenta);
          animation: heartbeat 2s ease-in-out infinite;
          margin-bottom: var(--space-5); line-height: 1;
        }
        @keyframes heartbeat {
          0%,100% { transform: scale(1); }
          14%     { transform: scale(1.15); }
          28%     { transform: scale(1); }
          42%     { transform: scale(1.1); }
          70%     { transform: scale(1); }
        }
        .wishlist-empty h2 { margin-bottom: var(--space-3); }
        .wishlist-empty .text-muted { margin-bottom: var(--space-7); line-height: 1.75; }
        .wishlist-empty__depts {
          display: flex; flex-wrap: wrap; gap: var(--space-2);
          justify-content: center; margin-top: var(--space-8);
        }
        .wishlist-dept-chip {
          padding: 6px 14px; border: 1.5px solid var(--border);
          border-radius: var(--radius-full); font-size: 0.8rem; font-weight: 600;
          color: var(--ink); text-decoration: none;
          transition: all var(--duration) var(--ease);
        }
        .wishlist-dept-chip:hover { border-color: var(--magenta); color: var(--magenta); }

        @media (max-width: 480px) {
          .wish-grid { grid-template-columns: 1fr 1fr; }
        }
      `})]})}const Oh=[{value:"featured",label:"Featured"},{value:"price-asc",label:"Price: Low → High"},{value:"price-desc",label:"Price: High → Low"},{value:"rating",label:"Highest Rated"},{value:"discount",label:"Best Discount"}];function Ih(){const[e]=Yf(),t=e.get("q")||"",[r,n]=b.useState("all"),[i,s]=b.useState("featured"),[l,o]=b.useState(2e4),[c,d]=b.useState(0),h=b.useMemo(()=>ih(t),[t]),f=b.useMemo(()=>{let u=[...h];return r!=="all"&&(u=u.filter(w=>w.department===r)),l<2e4&&(u=u.filter(w=>w.price<=l)),c>0&&(u=u.filter(w=>w.rating>=c)),xu(u,i)},[h,r,i,l,c]);return a.jsxs("main",{className:"container",style:{padding:"var(--space-8) var(--space-6) var(--space-16)"},children:[a.jsxs("div",{style:{marginBottom:"var(--space-6)"},children:[a.jsx("h1",{style:{marginBottom:6},children:"Search Results"}),a.jsxs("p",{className:"text-muted",children:[h.length===0?"No matches found":`${f.length} result${f.length!==1?"s":""} for`," ",t&&a.jsxs("strong",{children:['"',t,'"']})]})]}),a.jsxs("div",{className:"search-toolbar",children:[a.jsxs("div",{className:"search-toolbar__depts",children:[a.jsxs("button",{className:`tag ${r==="all"?"active":""}`,onClick:()=>n("all"),children:["All (",h.length,")"]}),_e.map(u=>{const w=h.filter(k=>k.department===u.id).length;return w?a.jsxs("button",{className:`tag ${r===u.id?"active":""}`,onClick:()=>n(u.id),children:[u.icon," ",u.name," (",w,")"]},u.id):null})]}),a.jsxs("div",{className:"search-toolbar__right",children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("label",{className:"label",style:{margin:0,whiteSpace:"nowrap"},children:"Max Price:"}),a.jsxs("select",{className:"input",style:{width:"auto",padding:"7px 12px"},value:l,onChange:u=>o(+u.target.value),children:[a.jsx("option",{value:2e4,children:"Any Price"}),a.jsx("option",{value:500,children:"Under ₹500"}),a.jsx("option",{value:1e3,children:"Under ₹1,000"}),a.jsx("option",{value:3e3,children:"Under ₹3,000"}),a.jsx("option",{value:5e3,children:"Under ₹5,000"}),a.jsx("option",{value:1e4,children:"Under ₹10,000"})]})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("label",{className:"label",style:{margin:0,whiteSpace:"nowrap"},children:"Rating:"}),a.jsxs("select",{className:"input",style:{width:"auto",padding:"7px 12px"},value:c,onChange:u=>d(+u.target.value),children:[a.jsx("option",{value:0,children:"Any"}),a.jsx("option",{value:4,children:"4★+"}),a.jsx("option",{value:4.5,children:"4.5★+"}),a.jsx("option",{value:4.8,children:"4.8★+"})]})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("label",{className:"label",style:{margin:0,whiteSpace:"nowrap"},children:"Sort:"}),a.jsx("select",{className:"input",style:{width:"auto",padding:"7px 12px"},value:i,onChange:u=>s(u.target.value),children:Oh.map(u=>a.jsx("option",{value:u.value,children:u.label},u.value))})]})]})]}),t&&a.jsxs("div",{className:"text-sm text-muted",style:{marginBottom:"var(--space-5)"},children:["Showing ",f.length," of ",h.length," results",(r!=="all"||l<2e4||c>0)&&" (filtered)"]}),f.length>0?a.jsx("div",{className:"product-grid",children:f.map(u=>a.jsx(gl,{product:u},u.id))}):a.jsxs("div",{className:"search-empty",children:[a.jsx("div",{className:"search-empty__icon",children:"🔍"}),a.jsx("h2",{children:t?`No results for "${t}"`:"Start searching"}),a.jsx("p",{className:"text-muted",children:t?"Try different keywords, check spelling, or browse a department below.":"Type in the search bar above to find products."}),t&&a.jsx("div",{className:"search-empty__depts",children:_e.map(u=>a.jsxs(I,{to:`/department/${u.id}`,className:"dept-chip",id:`empty-${u.id}`,children:[a.jsx("span",{className:"dept-chip__icon",style:{background:u.gradient},children:u.icon}),a.jsx("span",{className:"dept-chip__name",children:u.name})]},u.id))})]}),a.jsx("style",{children:`
        .search-toolbar {
          display: flex; align-items: flex-start; flex-wrap: wrap;
          gap: var(--space-4); margin-bottom: var(--space-5);
          padding: var(--space-4) var(--space-5);
          background: var(--surface); border: 1px solid var(--border);
          border-radius: var(--radius-xl); box-shadow: var(--shadow-sm);
        }
        .search-toolbar__depts { display: flex; flex-wrap: wrap; gap: var(--space-2); flex: 1; }
        .search-toolbar__right { display: flex; flex-wrap: wrap; gap: var(--space-3); align-items: center; }
        .search-empty {
          text-align: center; padding: var(--space-16) var(--space-8);
          background: var(--surface); border: 1px solid var(--border);
          border-radius: var(--radius-xl);
        }
        .search-empty__icon { font-size: 4rem; margin-bottom: var(--space-4); }
        .search-empty h2 { margin-bottom: var(--space-3); }
        .search-empty .text-muted { max-width: 400px; margin: 0 auto var(--space-8); }
        .search-empty__depts {
          display: flex; flex-wrap: wrap; gap: var(--space-3);
          justify-content: center;
        }
        .dept-chip {
          display: flex; align-items: center; gap: var(--space-2);
          padding: 10px 18px; background: var(--ivory);
          border: 1.5px solid var(--border); border-radius: var(--radius-full);
          text-decoration: none; transition: all 200ms var(--ease);
        }
        .dept-chip:hover { border-color: var(--magenta); box-shadow: var(--shadow-glow); transform: translateY(-2px); }
        .dept-chip__icon {
          width: 28px; height: 28px; border-radius: 7px;
          display: flex; align-items: center; justify-content: center; font-size: 0.9rem;
        }
        .dept-chip__name { font-size: 0.85rem; font-weight: 700; color: var(--ink); }
        @media (max-width: 700px) {
          .search-toolbar { flex-direction: column; }
          .search-toolbar__right { width: 100%; }
        }
      `})]})}const Rh=[{id:"Dashboard",icon:"📊"},{id:"Products",icon:"📦"},{id:"Orders",icon:"🧾"},{id:"Inventory",icon:"🏭"}],Lh=["Confirmed","Processing","Shipped","Delivered"],Fh={Processing:"Processing",Shipped:"Shipped",Delivered:"Delivered"};function Mh(){const{productOverrides:e,deletedProductIds:t}=Me();return b.useMemo(()=>Ne.filter(r=>!t.includes(r.id)).map(r=>({...r,...e[r.id]||{}})),[e,t])}function Wn({icon:e,label:t,value:r,sub:n,color:i}){return a.jsxs("div",{className:"admin-stat",children:[a.jsx("div",{className:"admin-stat__icon",style:{background:i+"18",color:i},children:e}),a.jsxs("div",{children:[a.jsx("div",{className:"admin-stat__val",children:r}),a.jsx("div",{className:"admin-stat__lbl",children:t}),n&&a.jsx("div",{className:"admin-stat__sub",children:n})]})]})}function Ah({product:e,onSave:t,onClose:r}){const[n,i]=b.useState({name:e.name,price:e.price,originalPrice:e.originalPrice||"",stock:e.stock,badge:e.badge||"",description:e.description||""}),s=(o,c)=>i(d=>({...d,[o]:c})),l=()=>{const o={name:n.name.trim()||e.name,price:Math.max(0,Number(n.price)||e.price),originalPrice:n.originalPrice?Number(n.originalPrice):e.originalPrice,stock:Math.max(0,Math.floor(Number(n.stock))),badge:n.badge||null,description:n.description.trim()||e.description};t(o)};return a.jsx("div",{className:"modal-overlay",onClick:o=>o.target===o.currentTarget&&r(),children:a.jsxs("div",{className:"modal-box",role:"dialog","aria-modal":"true","aria-label":"Edit Product",children:[a.jsxs("div",{className:"modal-header",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"modal-title",children:"Edit Product"}),a.jsxs("p",{className:"text-xs text-muted",style:{marginTop:3},children:[e.id," · ",e.category]})]}),a.jsx("button",{className:"modal-close",onClick:r,"aria-label":"Close",children:"✕"})]}),a.jsxs("div",{className:"modal-body",children:[a.jsx("div",{className:"modal-img-preview",children:a.jsx("img",{src:e.image,alt:e.name})}),a.jsxs("div",{className:"modal-fields",children:[a.jsx("div",{className:"mf-row",children:a.jsxs("div",{className:"mf-field",children:[a.jsx("label",{className:"label",htmlFor:"edit-name",children:"Product Name"}),a.jsx("input",{id:"edit-name",className:"input",value:n.name,onChange:o=>s("name",o.target.value)})]})}),a.jsxs("div",{className:"mf-row-2",children:[a.jsxs("div",{className:"mf-field",children:[a.jsx("label",{className:"label",htmlFor:"edit-price",children:"Price (₹)"}),a.jsx("input",{id:"edit-price",type:"number",min:"0",className:"input",value:n.price,onChange:o=>s("price",o.target.value)})]}),a.jsxs("div",{className:"mf-field",children:[a.jsx("label",{className:"label",htmlFor:"edit-orig",children:"Original Price (₹)"}),a.jsx("input",{id:"edit-orig",type:"number",min:"0",className:"input",value:n.originalPrice,onChange:o=>s("originalPrice",o.target.value),placeholder:"Optional"})]})]}),a.jsxs("div",{className:"mf-row-2",children:[a.jsxs("div",{className:"mf-field",children:[a.jsx("label",{className:"label",htmlFor:"edit-stock",children:"Stock Quantity"}),a.jsx("input",{id:"edit-stock",type:"number",min:"0",className:"input",value:n.stock,onChange:o=>s("stock",o.target.value)})]}),a.jsxs("div",{className:"mf-field",children:[a.jsx("label",{className:"label",htmlFor:"edit-badge",children:"Badge"}),a.jsxs("select",{id:"edit-badge",className:"input",value:n.badge,onChange:o=>s("badge",o.target.value),children:[a.jsx("option",{value:"",children:"None"}),a.jsx("option",{value:"Best Seller",children:"Best Seller"}),a.jsx("option",{value:"Sale",children:"Sale"}),a.jsx("option",{value:"Premium",children:"Premium"}),a.jsx("option",{value:"New",children:"New"})]})]})]}),a.jsxs("div",{className:"mf-field",children:[a.jsx("label",{className:"label",htmlFor:"edit-desc",children:"Description"}),a.jsx("textarea",{id:"edit-desc",className:"input",rows:3,value:n.description,onChange:o=>s("description",o.target.value),style:{resize:"vertical"}})]})]})]}),a.jsxs("div",{className:"modal-footer",children:[a.jsx("button",{className:"btn btn-secondary",onClick:r,children:"Cancel"}),a.jsx("button",{className:"btn btn-primary",id:"edit-save-btn",onClick:l,children:"Save Changes"})]})]})})}function Bh(){const{orders:e,productOverrides:t,deletedProductIds:r,adminUpdateProduct:n,adminDeleteProduct:i,adminRestoreProduct:s,adminUpdateOrderStatus:l,toast:o}=Me(),c=Mh(),[d,h]=b.useState("Dashboard"),[f,u]=b.useState(""),[w,k]=b.useState("all"),[x,S]=b.useState(null),[p,m]=b.useState({}),g=e.reduce((y,_)=>y+(_.total||0),0),v=c.filter(y=>y.stock<=20),j=b.useMemo(()=>{let y=c;if(w!=="all"&&(y=y.filter(_=>_.department===w)),f.trim()){const _=f.toLowerCase();y=y.filter(C=>{var z;return C.name.toLowerCase().includes(_)||((z=C.brand)==null?void 0:z.toLowerCase().includes(_))})}return y},[c,w,f]),D=y=>{const _=parseInt(p[y],10);if(isNaN(_)||_<0){o("Enter a valid non-negative stock value.","error","✕");return}n(y,{stock:_}),m(C=>{const z={...C};return delete z[y],z})};return a.jsxs("main",{className:"admin-page",children:[a.jsxs("aside",{className:"admin-sidebar",children:[a.jsxs("div",{className:"admin-sidebar__brand",children:[a.jsxs("div",{className:"admin-logo",children:["BLOW",a.jsx("span",{children:"/"}),"MAGGY"]}),a.jsx("div",{className:"admin-demo-tag",children:"DEMO ADMIN"})]}),a.jsx("nav",{className:"admin-sidebar__nav",children:Rh.map(y=>a.jsxs("button",{id:`admin-nav-${y.id.toLowerCase()}`,className:`admin-nav-btn ${d===y.id?"active":""}`,onClick:()=>h(y.id),children:[a.jsx("span",{children:y.icon})," ",y.id,y.id==="Orders"&&e.length>0&&a.jsx("span",{className:"nav-badge",children:e.length}),y.id==="Inventory"&&v.length>0&&a.jsx("span",{className:"nav-badge nav-badge--warn",children:v.length})]},y.id))}),a.jsxs("div",{className:"admin-sidebar__footer",children:[a.jsx(I,{to:"/",className:"btn btn-ghost btn-sm w-full",style:{color:"rgba(255,255,255,.55)",justifyContent:"flex-start"},children:"← Back to Store"}),a.jsx("p",{className:"admin-sidebar__disc",children:"Frontend demo — no server auth"})]})]}),a.jsxs("div",{className:"admin-main",children:[a.jsxs("div",{className:"admin-topbar",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"admin-topbar__title",children:d}),a.jsx("div",{className:"text-xs text-muted",children:new Date().toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"})})]}),a.jsx("div",{className:"admin-topbar__right",children:a.jsx("div",{className:"admin-demo-chip",children:"🎯 DEMO ADMIN — Not production secure"})})]}),a.jsxs("div",{className:"admin-content",children:[d==="Dashboard"&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"admin-stats",children:[a.jsx(Wn,{icon:"💰",label:"Demo Revenue",value:R(g),sub:`${e.length} demo order${e.length!==1?"s":""}`,color:"var(--magenta)"}),a.jsx(Wn,{icon:"📦",label:"Products",value:c.length,sub:`${r.length} removed`,color:"#7C3AED"}),a.jsx(Wn,{icon:"🛒",label:"Total Orders",value:e.length,sub:"Stored in localStorage",color:"#059669"}),a.jsx(Wn,{icon:"⚠️",label:"Low Stock",value:v.length,sub:"≤20 units",color:"#D97706"})]}),a.jsxs("div",{className:"admin-section",children:[a.jsx("div",{className:"admin-section__head",children:a.jsx("h3",{className:"admin-section__title",children:"Department Overview"})}),a.jsx("div",{className:"admin-table-wrap",children:a.jsxs("table",{className:"admin-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Department"}),a.jsx("th",{children:"Products"}),a.jsx("th",{children:"Low Stock"}),a.jsx("th",{children:"Avg Price"}),a.jsx("th",{children:"Action"})]})}),a.jsx("tbody",{children:_e.map(y=>{const _=c.filter(N=>N.department===y.id),C=_.filter(N=>N.stock<=20).length,z=_.length?Math.round(_.reduce((N,L)=>N+L.price,0)/_.length):0;return a.jsxs("tr",{children:[a.jsx("td",{children:a.jsxs("span",{className:"admin-dept-chip",style:{background:y.color+"18",color:y.color},children:[y.icon," ",y.name]})}),a.jsx("td",{className:"fw-700",children:_.length}),a.jsx("td",{children:C>0?a.jsxs("span",{className:"badge badge-warning",children:[C," low"]}):a.jsx("span",{className:"badge badge-success",children:"OK"})}),a.jsx("td",{className:"text-muted",children:R(z)}),a.jsx("td",{children:a.jsx("button",{className:"btn btn-ghost btn-sm text-magenta",onClick:()=>{k(y.id),h("Products")},children:"View →"})})]},y.id)})})]})})]}),e.length>0?a.jsxs("div",{className:"admin-section",children:[a.jsxs("div",{className:"admin-section__head",children:[a.jsx("h3",{className:"admin-section__title",children:"Recent Orders"}),a.jsx("button",{className:"btn btn-ghost btn-sm text-magenta",onClick:()=>h("Orders"),children:"See All →"})]}),a.jsx("div",{className:"admin-table-wrap",children:a.jsxs("table",{className:"admin-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Order ID"}),a.jsx("th",{children:"Customer"}),a.jsx("th",{children:"Date"}),a.jsx("th",{children:"Items"}),a.jsx("th",{children:"Total"}),a.jsx("th",{children:"Status"})]})}),a.jsx("tbody",{children:e.slice(0,5).map(y=>{var _;return a.jsxs("tr",{children:[a.jsx("td",{className:"fw-700 text-sm",style:{fontFamily:"'Inter',sans-serif"},children:y.id}),a.jsx("td",{className:"text-sm",children:((_=y.address)==null?void 0:_.name)||"—"}),a.jsx("td",{className:"text-sm text-muted",children:new Date(y.date).toLocaleDateString()}),a.jsx("td",{className:"text-sm",children:y.items.reduce((C,z)=>C+z.qty,0)}),a.jsx("td",{className:"fw-700 text-sm",children:R(y.total)}),a.jsx("td",{children:a.jsx("span",{className:`badge ${y.status==="Delivered"?"badge-success":y.status==="Shipped"?"badge-lavender":y.status==="Processing"?"badge-warning":"badge-magenta"}`,children:y.status})})]},y.id)})})]})})]}):a.jsxs("div",{className:"admin-empty",children:[a.jsx("div",{style:{fontSize:"3rem"},children:"🧾"}),a.jsx("p",{children:"No orders yet. Place a demo order from the storefront."}),a.jsx(I,{to:"/",className:"btn btn-primary btn-sm",children:"Go to Store →"})]})]}),d==="Products"&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"admin-section",children:[a.jsx("div",{className:"admin-section__head",children:a.jsxs("h3",{className:"admin-section__title",children:["Product Catalogue (",j.length,")"]})}),a.jsxs("div",{className:"admin-toolbar",children:[a.jsx("input",{type:"text",className:"input admin-search",placeholder:"Search by name or brand…",value:f,onChange:y=>u(y.target.value),id:"admin-product-search"}),a.jsxs("select",{className:"input",style:{width:"auto",padding:"9px 14px"},value:w,onChange:y=>k(y.target.value),id:"admin-dept-filter",children:[a.jsx("option",{value:"all",children:"All Departments"}),_e.map(y=>a.jsxs("option",{value:y.id,children:[y.icon," ",y.name]},y.id))]}),(f||w!=="all")&&a.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>{u(""),k("all")},children:"Clear"})]}),a.jsx("div",{className:"admin-table-wrap",children:a.jsxs("table",{className:"admin-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Product"}),a.jsx("th",{children:"Department"}),a.jsx("th",{children:"Price"}),a.jsx("th",{children:"Stock"}),a.jsx("th",{children:"Status"}),a.jsx("th",{children:"Actions"})]})}),a.jsxs("tbody",{children:[j.length===0&&a.jsx("tr",{children:a.jsx("td",{colSpan:"6",style:{textAlign:"center",padding:"var(--space-8)",color:"var(--ink-muted)"},children:"No products match your search."})}),j.map(y=>{const _=_e.find(z=>z.id===y.department),C=!!t[y.id];return a.jsxs("tr",{children:[a.jsx("td",{children:a.jsxs("div",{className:"admin-product-cell",children:[a.jsx("img",{src:y.image,alt:y.name,className:"admin-product-img",onError:z=>{z.target.src=`https://placehold.co/40x40/f5ede6/78716c?text=${y.name[0]}`}}),a.jsxs("div",{children:[a.jsx("div",{className:"fw-600 text-sm",children:y.name}),a.jsxs("div",{className:"text-xs text-muted",children:[y.brand," ",C&&a.jsx("span",{style:{color:"var(--warning)",fontWeight:700},children:" · edited"})]})]})]})}),a.jsx("td",{children:a.jsxs("span",{className:"admin-dept-chip",style:{background:(_==null?void 0:_.color)+"18",color:_==null?void 0:_.color},children:[_==null?void 0:_.icon," ",_==null?void 0:_.name]})}),a.jsxs("td",{children:[a.jsx("div",{className:"fw-700 text-sm",children:R(y.price)}),y.originalPrice>y.price&&a.jsx("div",{className:"text-xs text-muted line-through",children:R(y.originalPrice)})]}),a.jsx("td",{children:a.jsx("span",{className:`badge ${y.stock===0?"badge-coral":y.stock<=20?"badge-warning":"badge-success"}`,children:y.stock===0?"OOS":`${y.stock} units`})}),a.jsx("td",{children:y.badge?a.jsx("span",{className:"badge badge-magenta",children:y.badge}):a.jsx("span",{className:"text-xs text-muted",children:"—"})}),a.jsx("td",{children:a.jsxs("div",{className:"admin-row-actions",children:[a.jsx(I,{to:`/product/${y.id}`,target:"_blank",className:"btn btn-ghost btn-sm",title:"View on storefront",children:"👁"}),a.jsx("button",{className:"btn btn-ghost btn-sm",id:`edit-prod-${y.id}`,onClick:()=>S(y),title:"Edit product",children:"✏️ Edit"}),a.jsx("button",{className:"btn btn-ghost btn-sm",style:{color:"var(--error)"},id:`del-prod-${y.id}`,onClick:()=>{window.confirm(`Remove "${y.name}" from catalogue?`)&&i(y.id,y.name)},title:"Delete product",children:"🗑"})]})})]},y.id)})]})]})})]}),r.length>0&&a.jsxs("div",{className:"admin-section",children:[a.jsx("div",{className:"admin-section__head",children:a.jsxs("h3",{className:"admin-section__title",children:["Removed Products (",r.length,")"]})}),a.jsx("div",{style:{padding:"var(--space-4) var(--space-5)",display:"flex",flexWrap:"wrap",gap:"var(--space-3)"},children:r.map(y=>{const _=Ne.find(C=>C.id===y);return _?a.jsxs("div",{className:"restore-chip",children:[a.jsx("span",{className:"text-sm fw-600",children:_.name}),a.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>s(y),children:"Restore"})]},y):null})})]})]}),d==="Orders"&&a.jsxs("div",{className:"admin-section",children:[a.jsx("div",{className:"admin-section__head",children:a.jsxs("h3",{className:"admin-section__title",children:["All Orders (",e.length,")"]})}),e.length===0?a.jsxs("div",{className:"admin-empty",children:[a.jsx("div",{style:{fontSize:"3rem"},children:"🧾"}),a.jsxs("p",{children:["No orders yet. ",a.jsx(I,{to:"/",className:"text-magenta",children:"Place a demo order"})," to see it here."]})]}):a.jsx("div",{className:"admin-table-wrap",children:a.jsxs("table",{className:"admin-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Order ID"}),a.jsx("th",{children:"Customer"}),a.jsx("th",{children:"Date"}),a.jsx("th",{children:"Items"}),a.jsx("th",{children:"Total"}),a.jsx("th",{children:"Payment"}),a.jsx("th",{children:"Status"}),a.jsx("th",{children:"Update Status"})]})}),a.jsx("tbody",{children:e.map(y=>{var _,C,z;return a.jsxs("tr",{children:[a.jsx("td",{className:"fw-700 text-sm",style:{fontFamily:"'Inter',sans-serif",whiteSpace:"nowrap"},children:y.id}),a.jsx("td",{className:"text-sm",children:((_=y.address)==null?void 0:_.name)||"—"}),a.jsx("td",{className:"text-sm text-muted",style:{whiteSpace:"nowrap"},children:new Date(y.date).toLocaleDateString("en-IN",{day:"numeric",month:"short"})}),a.jsx("td",{className:"text-sm",children:y.items.reduce((N,L)=>N+L.qty,0)}),a.jsx("td",{className:"fw-700 text-sm",children:R(y.total)}),a.jsx("td",{className:"text-sm text-muted",children:((z=(C=y.payment)==null?void 0:C.method)==null?void 0:z.toUpperCase())||"Demo"}),a.jsx("td",{children:a.jsx("span",{className:`badge ${y.status==="Delivered"?"badge-success":y.status==="Shipped"?"badge-lavender":y.status==="Processing"?"badge-warning":"badge-magenta"}`,children:y.status})}),a.jsx("td",{children:a.jsx("div",{className:"admin-row-actions",children:Lh.filter(N=>N!==y.status).map(N=>a.jsxs("button",{className:"btn btn-ghost btn-sm",id:`order-${y.id}-${N.toLowerCase()}`,onClick:()=>l(y.id,N,Fh[N]||N),title:`Mark as ${N}`,children:["→ ",N]},N))})})]},y.id)})})]})})]}),d==="Inventory"&&a.jsxs(a.Fragment,{children:[v.length>0&&a.jsxs("div",{className:"admin-alert",children:["⚠️ ",a.jsxs("strong",{children:[v.length," product",v.length!==1?"s":""]})," with ≤20 units — restock recommended."]}),a.jsxs("div",{className:"admin-section",children:[a.jsxs("div",{className:"admin-section__head",children:[a.jsx("h3",{className:"admin-section__title",children:"Inventory Management"}),a.jsx("span",{className:"text-xs text-muted",children:"Sorted by stock level (lowest first)"})]}),a.jsx("div",{className:"admin-table-wrap",children:a.jsxs("table",{className:"admin-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Product"}),a.jsx("th",{children:"Dept"}),a.jsx("th",{children:"Current Stock"}),a.jsx("th",{children:"New Quantity"}),a.jsx("th",{children:"Save"})]})}),a.jsx("tbody",{children:[...c].sort((y,_)=>y.stock-_.stock).map(y=>{const _=_e.find(C=>C.id===y.department);return a.jsxs("tr",{className:y.stock===0?"oos-row":y.stock<=10?"low-row":"",children:[a.jsx("td",{children:a.jsxs("div",{className:"admin-product-cell",children:[a.jsx("img",{src:y.image,alt:y.name,className:"admin-product-img",onError:C=>{C.target.src=`https://placehold.co/40x40/f5ede6/78716c?text=${y.name[0]}`}}),a.jsx("div",{className:"fw-600 text-sm",children:y.name})]})}),a.jsx("td",{children:a.jsx("span",{className:"admin-dept-chip",style:{background:(_==null?void 0:_.color)+"18",color:_==null?void 0:_.color},children:_==null?void 0:_.icon})}),a.jsx("td",{children:a.jsx("span",{className:`badge ${y.stock===0?"badge-coral":y.stock<=10||y.stock<=20?"badge-warning":"badge-success"}`,children:y.stock===0?"Out of Stock":`${y.stock} units`})}),a.jsx("td",{children:a.jsx("input",{type:"number",className:"input inv-input",min:"0",placeholder:y.stock,value:p[y.id]??"",onChange:C=>m(z=>({...z,[y.id]:C.target.value})),id:`inv-stock-${y.id}`,"aria-label":`Stock for ${y.name}`})}),a.jsx("td",{children:a.jsx("button",{className:"btn btn-primary btn-sm",disabled:p[y.id]===void 0||p[y.id]==="",onClick:()=>D(y.id),id:`inv-save-${y.id}`,children:"Update"})})]},y.id)})})]})})]})]})]})]}),x&&a.jsx(Ah,{product:x,onSave:y=>{n(x.id,y),S(null)},onClose:()=>S(null)}),a.jsx("style",{children:`
        /* ── Layout ── */
        .admin-page {
          display: flex; min-height: 100vh; background: var(--ivory);
          font-family: 'Inter', sans-serif;
        }

        /* ── Sidebar ── */
        .admin-sidebar {
          width: 240px; flex-shrink: 0; background: #0D0D1A; color: white;
          display: flex; flex-direction: column;
          position: sticky; top: 0; height: 100vh; overflow: hidden;
        }
        .admin-sidebar__brand {
          padding: var(--space-6);
          border-bottom: 1px solid rgba(255,255,255,.07);
        }
        .admin-logo {
          font-size: 1.2rem; font-weight: 900; color: white;
          letter-spacing: -0.04em;
        }
        .admin-logo span { color: var(--magenta); }
        .admin-demo-tag {
          display: inline-block; margin-top: 6px;
          padding: 2px 8px; background: rgba(233,30,140,.2); color: var(--magenta);
          border-radius: var(--radius-full); font-size: 0.62rem; font-weight: 800;
          letter-spacing: 0.1em; text-transform: uppercase;
        }
        .admin-sidebar__nav {
          flex: 1; padding: var(--space-3);
          display: flex; flex-direction: column; gap: 2px;
          overflow-y: auto;
        }
        .admin-nav-btn {
          width: 100%; text-align: left;
          padding: 10px 14px; border-radius: var(--radius-md);
          font-size: 0.875rem; font-weight: 600; color: rgba(255,255,255,.55);
          transition: all 180ms var(--ease);
          display: flex; align-items: center; gap: var(--space-3);
        }
        .admin-nav-btn:hover { background: rgba(255,255,255,.06); color: white; }
        .admin-nav-btn.active {
          background: linear-gradient(135deg, var(--magenta), var(--coral));
          color: white; box-shadow: 0 4px 12px rgba(233,30,140,.3);
        }
        .nav-badge {
          margin-left: auto; min-width: 20px; height: 20px; border-radius: 10px;
          background: rgba(255,255,255,.15); color: white;
          font-size: 0.65rem; font-weight: 800;
          display: flex; align-items: center; justify-content: center; padding: 0 5px;
        }
        .nav-badge--warn { background: #D97706; }
        .admin-sidebar__footer {
          padding: var(--space-4); border-top: 1px solid rgba(255,255,255,.07);
          display: flex; flex-direction: column; gap: var(--space-2);
        }
        .admin-sidebar__disc {
          font-size: 0.65rem; color: rgba(255,255,255,.25); text-align: center;
          line-height: 1.5;
        }

        /* ── Main ── */
        .admin-main {
          flex: 1; display: flex; flex-direction: column; overflow: hidden;
          min-width: 0;
        }
        .admin-topbar {
          display: flex; align-items: center; justify-content: space-between;
          padding: 14px var(--space-7);
          background: var(--surface); border-bottom: 1px solid var(--border);
          box-shadow: var(--shadow-sm); gap: var(--space-4); flex-wrap: wrap;
        }
        .admin-topbar__title { font-size: 1.2rem; font-weight: 800; color: var(--ink); }
        .admin-topbar__right { display: flex; align-items: center; gap: var(--space-3); }
        .admin-demo-chip {
          padding: 5px 12px; background: #FEF3C7; border: 1px solid #FDE68A;
          border-radius: var(--radius-full); font-size: 0.72rem; font-weight: 700;
          color: #92400E;
        }
        .admin-content {
          flex: 1; padding: var(--space-6);
          display: flex; flex-direction: column; gap: var(--space-5);
          overflow-y: auto;
        }

        /* ── Stats ── */
        .admin-stats {
          display: grid; grid-template-columns: repeat(4,1fr); gap: var(--space-4);
        }
        .admin-stat {
          background: var(--surface); border: 1px solid var(--border);
          border-radius: var(--radius-xl); padding: var(--space-5);
          display: flex; gap: var(--space-4); align-items: center;
          box-shadow: var(--shadow-sm);
        }
        .admin-stat__icon {
          width: 50px; height: 50px; border-radius: var(--radius-lg);
          display: flex; align-items: center; justify-content: center;
          font-size: 1.3rem; flex-shrink: 0;
        }
        .admin-stat__val { font-size: 1.35rem; font-weight: 900; color: var(--ink); line-height: 1; }
        .admin-stat__lbl { font-size: 0.78rem; color: var(--ink-muted); font-weight: 600; margin-top: 3px; }
        .admin-stat__sub { font-size: 0.68rem; color: var(--ink-light); margin-top: 2px; }

        /* ── Sections ── */
        .admin-section {
          background: var(--surface); border: 1px solid var(--border);
          border-radius: var(--radius-xl); overflow: hidden;
        }
        .admin-section__head {
          display: flex; align-items: center; justify-content: space-between;
          padding: var(--space-4) var(--space-5);
          border-bottom: 1px solid var(--border);
        }
        .admin-section__title { font-size: 0.95rem; font-weight: 800; }

        /* ── Toolbar ── */
        .admin-toolbar {
          display: flex; align-items: center; gap: var(--space-3); flex-wrap: wrap;
          padding: var(--space-4) var(--space-5); border-bottom: 1px solid var(--border);
        }
        .admin-search { flex: 1; min-width: 200px; padding: 9px 14px; }

        /* ── Tables ── */
        .admin-table-wrap { overflow-x: auto; }
        .admin-table {
          width: 100%; border-collapse: collapse; font-size: 0.875rem;
        }
        .admin-table th {
          text-align: left; padding: 10px 14px;
          background: var(--ivory); border-bottom: 1px solid var(--border);
          font-size: 0.68rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: .06em; color: var(--ink-muted); white-space: nowrap;
        }
        .admin-table td {
          padding: 10px 14px; border-bottom: 1px solid var(--border);
          vertical-align: middle;
        }
        .admin-table tr:last-child td { border-bottom: none; }
        .admin-table tr:hover td { background: var(--ivory); }
        .oos-row td { background: #FFF5F5 !important; }
        .low-row td { background: #FFFBEB !important; }

        /* ── Product cell ── */
        .admin-product-cell { display: flex; align-items: center; gap: 10px; }
        .admin-product-img {
          width: 40px; height: 40px; object-fit: cover;
          border-radius: var(--radius-sm); flex-shrink: 0;
          border: 1px solid var(--border);
        }
        .admin-dept-chip {
          padding: 3px 10px; border-radius: var(--radius-full);
          font-size: 0.7rem; font-weight: 700; white-space: nowrap;
        }
        .admin-row-actions { display: flex; gap: 4px; flex-wrap: wrap; }
        .line-through { text-decoration: line-through; }

        /* ── Inventory input ── */
        .inv-input { width: 90px; padding: 7px 10px; font-size: 0.875rem; }

        /* ── Alert ── */
        .admin-alert {
          padding: var(--space-4) var(--space-5);
          background: #FEF3C7; border: 1px solid #FDE68A;
          border-radius: var(--radius-lg); font-size: 0.875rem; color: #92400E;
        }
        .admin-empty {
          display: flex; flex-direction: column; align-items: center;
          text-align: center; padding: var(--space-12); gap: var(--space-4);
          color: var(--ink-muted);
        }

        /* ── Restore chip ── */
        .restore-chip {
          display: flex; align-items: center; gap: var(--space-2);
          padding: 6px 12px; background: var(--ivory);
          border: 1px solid var(--border); border-radius: var(--radius-md);
        }

        /* ── Modal ── */
        .modal-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,.55);
          z-index: 9000; display: flex; align-items: center; justify-content: center;
          padding: var(--space-6);
          animation: fadeIn 150ms var(--ease);
        }
        @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
        .modal-box {
          background: var(--surface); border-radius: var(--radius-xl);
          box-shadow: var(--shadow-xl); width: 100%; max-width: 620px;
          max-height: 90vh; overflow-y: auto;
          animation: slideUp 200ms cubic-bezier(0.34,1.56,0.64,1);
        }
        @keyframes slideUp { from { transform:translateY(30px); opacity:0; } to { transform:translateY(0); opacity:1; } }
        .modal-header {
          display: flex; align-items: flex-start; justify-content: space-between;
          padding: var(--space-6); border-bottom: 1px solid var(--border);
        }
        .modal-title { font-size: 1.1rem; font-weight: 800; }
        .modal-close {
          font-size: 1.1rem; color: var(--ink-muted); padding: 4px 8px;
          border-radius: var(--radius-sm); transition: all 150ms var(--ease);
        }
        .modal-close:hover { background: var(--ivory); color: var(--error); }
        .modal-body {
          padding: var(--space-6); display: flex; flex-direction: column; gap: var(--space-5);
        }
        .modal-img-preview img {
          width: 100%; height: 160px; object-fit: cover;
          border-radius: var(--radius-lg);
        }
        .modal-fields { display: flex; flex-direction: column; gap: var(--space-4); }
        .mf-row  { display: flex; flex-direction: column; gap: var(--space-2); }
        .mf-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4); }
        .mf-field { display: flex; flex-direction: column; gap: var(--space-2); }
        .modal-footer {
          display: flex; justify-content: flex-end; gap: var(--space-3);
          padding: var(--space-5) var(--space-6);
          border-top: 1px solid var(--border); background: var(--ivory);
          border-radius: 0 0 var(--radius-xl) var(--radius-xl);
        }

        /* ── Responsive ── */
        @media (max-width: 960px) {
          .admin-sidebar { width: 200px; }
          .admin-stats { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 700px) {
          .admin-page { flex-direction: column; }
          .admin-sidebar { width: 100%; height: auto; position: static; flex-direction: row; flex-wrap: wrap; }
          .admin-sidebar__brand { padding: var(--space-4); border-bottom: none; border-right: 1px solid rgba(255,255,255,.07); }
          .admin-sidebar__nav { flex-direction: row; flex-wrap: wrap; padding: var(--space-2); flex: 1; }
          .admin-nav-btn { width: auto; padding: 8px 12px; font-size: 0.78rem; }
          .admin-sidebar__footer { display: none; }
          .admin-stats { grid-template-columns: 1fr 1fr; }
          .admin-content { padding: var(--space-4); }
          .mf-row-2 { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .admin-stats { grid-template-columns: 1fr; }
        }
      `})]})}function $h({children:e}){const{pathname:t}=Jt(),r=t==="/admin";return a.jsxs("div",{className:"page-wrapper",children:[!r&&a.jsx(oh,{}),a.jsx("main",{style:{flex:1},children:e}),!r&&a.jsx(ch,{}),a.jsx(dh,{})]})}function Uh(){return a.jsx(eh,{children:a.jsx($h,{children:a.jsxs(Mf,{children:[a.jsx(Be,{path:"/",element:a.jsx(yh,{})}),a.jsx(Be,{path:"/department/:id",element:a.jsx(wh,{})}),a.jsx(Be,{path:"/product/:id",element:a.jsx(bh,{})}),a.jsx(Be,{path:"/cart",element:a.jsx(jh,{})}),a.jsx(Be,{path:"/checkout",element:a.jsx(Ch,{})}),a.jsx(Be,{path:"/orders",element:a.jsx(zh,{})}),a.jsx(Be,{path:"/wishlist",element:a.jsx(Th,{})}),a.jsx(Be,{path:"/search",element:a.jsx(Ih,{})}),a.jsx(Be,{path:"/admin",element:a.jsx(Bh,{})}),a.jsx(Be,{path:"*",element:a.jsxs("div",{style:{textAlign:"center",padding:"var(--space-20)"},children:[a.jsx("div",{style:{fontSize:"4rem",marginBottom:"var(--space-5)"},children:"🌀"}),a.jsx("h2",{children:"Page Not Found"}),a.jsx("p",{className:"text-muted",style:{marginBottom:"var(--space-6)"},children:"The page you're looking for doesn't exist."}),a.jsx("a",{href:"/",className:"btn btn-primary btn-lg",children:"Back to Home"})]})})]})})})}bi.createRoot(document.getElementById("root")).render(a.jsx(js.StrictMode,{children:a.jsx(qf,{children:a.jsx(Uh,{})})}));
