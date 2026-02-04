function gg(i,u){for(var o=0;o<u.length;o++){const c=u[o];if(typeof c!="string"&&!Array.isArray(c)){for(const d in c)if(d!=="default"&&!(d in i)){const h=Object.getOwnPropertyDescriptor(c,d);h&&Object.defineProperty(i,d,h.get?h:{enumerable:!0,get:()=>c[d]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const p of h.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&c(p)}).observe(document,{childList:!0,subtree:!0});function o(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerPolicy&&(h.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?h.credentials="include":d.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function c(d){if(d.ep)return;d.ep=!0;const h=o(d);fetch(d.href,h)}})();function xg(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ms={exports:{}},Mi={};var Zh;function yg(){if(Zh)return Mi;Zh=1;var i=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function o(c,d,h){var p=null;if(h!==void 0&&(p=""+h),d.key!==void 0&&(p=""+d.key),"key"in d){h={};for(var y in d)y!=="key"&&(h[y]=d[y])}else h=d;return d=h.ref,{$$typeof:i,type:c,key:p,ref:d!==void 0?d:null,props:h}}return Mi.Fragment=u,Mi.jsx=o,Mi.jsxs=o,Mi}var Jh;function vg(){return Jh||(Jh=1,Ms.exports=yg()),Ms.exports}var f=vg(),Os={exports:{}},me={};var Kh;function bg(){if(Kh)return me;Kh=1;var i=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),p=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),j=Symbol.for("react.activity"),C=Symbol.iterator;function L(S){return S===null||typeof S!="object"?null:(S=C&&S[C]||S["@@iterator"],typeof S=="function"?S:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,k={};function I(S,H,Z){this.props=S,this.context=H,this.refs=k,this.updater=Z||G}I.prototype.isReactComponent={},I.prototype.setState=function(S,H){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,H,"setState")},I.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function J(){}J.prototype=I.prototype;function te(S,H,Z){this.props=S,this.context=H,this.refs=k,this.updater=Z||G}var je=te.prototype=new J;je.constructor=te,Q(je,I.prototype),je.isPureReactComponent=!0;var ve=Array.isArray;function we(){}var R={H:null,A:null,T:null,S:null},ie=Object.prototype.hasOwnProperty;function xe(S,H,Z){var $=Z.ref;return{$$typeof:i,type:S,key:H,ref:$!==void 0?$:null,props:Z}}function Ye(S,H){return xe(S.type,H,S.props)}function Te(S){return typeof S=="object"&&S!==null&&S.$$typeof===i}function Le(S){var H={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(Z){return H[Z]})}var gt=/\/+/g;function Ge(S,H){return typeof S=="object"&&S!==null&&S.key!=null?Le(""+S.key):H.toString(36)}function be(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(we,we):(S.status="pending",S.then(function(H){S.status==="pending"&&(S.status="fulfilled",S.value=H)},function(H){S.status==="pending"&&(S.status="rejected",S.reason=H)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function _(S,H,Z,$,oe){var he=typeof S;(he==="undefined"||he==="boolean")&&(S=null);var Ae=!1;if(S===null)Ae=!0;else switch(he){case"bigint":case"string":case"number":Ae=!0;break;case"object":switch(S.$$typeof){case i:case u:Ae=!0;break;case N:return Ae=S._init,_(Ae(S._payload),H,Z,$,oe)}}if(Ae)return oe=oe(S),Ae=$===""?"."+Ge(S,0):$,ve(oe)?(Z="",Ae!=null&&(Z=Ae.replace(gt,"$&/")+"/"),_(oe,H,Z,"",function(Nn){return Nn})):oe!=null&&(Te(oe)&&(oe=Ye(oe,Z+(oe.key==null||S&&S.key===oe.key?"":(""+oe.key).replace(gt,"$&/")+"/")+Ae)),H.push(oe)),1;Ae=0;var it=$===""?".":$+":";if(ve(S))for(var Pe=0;Pe<S.length;Pe++)$=S[Pe],he=it+Ge($,Pe),Ae+=_($,H,Z,he,oe);else if(Pe=L(S),typeof Pe=="function")for(S=Pe.call(S),Pe=0;!($=S.next()).done;)$=$.value,he=it+Ge($,Pe++),Ae+=_($,H,Z,he,oe);else if(he==="object"){if(typeof S.then=="function")return _(be(S),H,Z,$,oe);throw H=String(S),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return Ae}function V(S,H,Z){if(S==null)return S;var $=[],oe=0;return _(S,$,"","",function(he){return H.call(Z,he,oe++)}),$}function W(S){if(S._status===-1){var H=S._result;H=H(),H.then(function(Z){(S._status===0||S._status===-1)&&(S._status=1,S._result=Z)},function(Z){(S._status===0||S._status===-1)&&(S._status=2,S._result=Z)}),S._status===-1&&(S._status=0,S._result=H)}if(S._status===1)return S._result.default;throw S._result}var de=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)},pe={map:V,forEach:function(S,H,Z){V(S,function(){H.apply(this,arguments)},Z)},count:function(S){var H=0;return V(S,function(){H++}),H},toArray:function(S){return V(S,function(H){return H})||[]},only:function(S){if(!Te(S))throw Error("React.Children.only expected to receive a single React element child.");return S}};return me.Activity=j,me.Children=pe,me.Component=I,me.Fragment=o,me.Profiler=d,me.PureComponent=te,me.StrictMode=c,me.Suspense=x,me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=R,me.__COMPILER_RUNTIME={__proto__:null,c:function(S){return R.H.useMemoCache(S)}},me.cache=function(S){return function(){return S.apply(null,arguments)}},me.cacheSignal=function(){return null},me.cloneElement=function(S,H,Z){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var $=Q({},S.props),oe=S.key;if(H!=null)for(he in H.key!==void 0&&(oe=""+H.key),H)!ie.call(H,he)||he==="key"||he==="__self"||he==="__source"||he==="ref"&&H.ref===void 0||($[he]=H[he]);var he=arguments.length-2;if(he===1)$.children=Z;else if(1<he){for(var Ae=Array(he),it=0;it<he;it++)Ae[it]=arguments[it+2];$.children=Ae}return xe(S.type,oe,$)},me.createContext=function(S){return S={$$typeof:p,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:h,_context:S},S},me.createElement=function(S,H,Z){var $,oe={},he=null;if(H!=null)for($ in H.key!==void 0&&(he=""+H.key),H)ie.call(H,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(oe[$]=H[$]);var Ae=arguments.length-2;if(Ae===1)oe.children=Z;else if(1<Ae){for(var it=Array(Ae),Pe=0;Pe<Ae;Pe++)it[Pe]=arguments[Pe+2];oe.children=it}if(S&&S.defaultProps)for($ in Ae=S.defaultProps,Ae)oe[$]===void 0&&(oe[$]=Ae[$]);return xe(S,he,oe)},me.createRef=function(){return{current:null}},me.forwardRef=function(S){return{$$typeof:y,render:S}},me.isValidElement=Te,me.lazy=function(S){return{$$typeof:N,_payload:{_status:-1,_result:S},_init:W}},me.memo=function(S,H){return{$$typeof:g,type:S,compare:H===void 0?null:H}},me.startTransition=function(S){var H=R.T,Z={};R.T=Z;try{var $=S(),oe=R.S;oe!==null&&oe(Z,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(we,de)}catch(he){de(he)}finally{H!==null&&Z.types!==null&&(H.types=Z.types),R.T=H}},me.unstable_useCacheRefresh=function(){return R.H.useCacheRefresh()},me.use=function(S){return R.H.use(S)},me.useActionState=function(S,H,Z){return R.H.useActionState(S,H,Z)},me.useCallback=function(S,H){return R.H.useCallback(S,H)},me.useContext=function(S){return R.H.useContext(S)},me.useDebugValue=function(){},me.useDeferredValue=function(S,H){return R.H.useDeferredValue(S,H)},me.useEffect=function(S,H){return R.H.useEffect(S,H)},me.useEffectEvent=function(S){return R.H.useEffectEvent(S)},me.useId=function(){return R.H.useId()},me.useImperativeHandle=function(S,H,Z){return R.H.useImperativeHandle(S,H,Z)},me.useInsertionEffect=function(S,H){return R.H.useInsertionEffect(S,H)},me.useLayoutEffect=function(S,H){return R.H.useLayoutEffect(S,H)},me.useMemo=function(S,H){return R.H.useMemo(S,H)},me.useOptimistic=function(S,H){return R.H.useOptimistic(S,H)},me.useReducer=function(S,H,Z){return R.H.useReducer(S,H,Z)},me.useRef=function(S){return R.H.useRef(S)},me.useState=function(S){return R.H.useState(S)},me.useSyncExternalStore=function(S,H,Z){return R.H.useSyncExternalStore(S,H,Z)},me.useTransition=function(){return R.H.useTransition()},me.version="19.2.4",me}var kh;function Ks(){return kh||(kh=1,Os.exports=bg()),Os.exports}var O=Ks();const Sg=xg(O),jg=gg({__proto__:null,default:Sg},[O]);var _s={exports:{}},Oi={},Cs={exports:{}},Us={};var Wh;function wg(){return Wh||(Wh=1,(function(i){function u(_,V){var W=_.length;_.push(V);e:for(;0<W;){var de=W-1>>>1,pe=_[de];if(0<d(pe,V))_[de]=V,_[W]=pe,W=de;else break e}}function o(_){return _.length===0?null:_[0]}function c(_){if(_.length===0)return null;var V=_[0],W=_.pop();if(W!==V){_[0]=W;e:for(var de=0,pe=_.length,S=pe>>>1;de<S;){var H=2*(de+1)-1,Z=_[H],$=H+1,oe=_[$];if(0>d(Z,W))$<pe&&0>d(oe,Z)?(_[de]=oe,_[$]=W,de=$):(_[de]=Z,_[H]=W,de=H);else if($<pe&&0>d(oe,W))_[de]=oe,_[$]=W,de=$;else break e}}return V}function d(_,V){var W=_.sortIndex-V.sortIndex;return W!==0?W:_.id-V.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;i.unstable_now=function(){return h.now()}}else{var p=Date,y=p.now();i.unstable_now=function(){return p.now()-y}}var x=[],g=[],N=1,j=null,C=3,L=!1,G=!1,Q=!1,k=!1,I=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;function je(_){for(var V=o(g);V!==null;){if(V.callback===null)c(g);else if(V.startTime<=_)c(g),V.sortIndex=V.expirationTime,u(x,V);else break;V=o(g)}}function ve(_){if(Q=!1,je(_),!G)if(o(x)!==null)G=!0,we||(we=!0,Le());else{var V=o(g);V!==null&&be(ve,V.startTime-_)}}var we=!1,R=-1,ie=5,xe=-1;function Ye(){return k?!0:!(i.unstable_now()-xe<ie)}function Te(){if(k=!1,we){var _=i.unstable_now();xe=_;var V=!0;try{e:{G=!1,Q&&(Q=!1,J(R),R=-1),L=!0;var W=C;try{t:{for(je(_),j=o(x);j!==null&&!(j.expirationTime>_&&Ye());){var de=j.callback;if(typeof de=="function"){j.callback=null,C=j.priorityLevel;var pe=de(j.expirationTime<=_);if(_=i.unstable_now(),typeof pe=="function"){j.callback=pe,je(_),V=!0;break t}j===o(x)&&c(x),je(_)}else c(x);j=o(x)}if(j!==null)V=!0;else{var S=o(g);S!==null&&be(ve,S.startTime-_),V=!1}}break e}finally{j=null,C=W,L=!1}V=void 0}}finally{V?Le():we=!1}}}var Le;if(typeof te=="function")Le=function(){te(Te)};else if(typeof MessageChannel<"u"){var gt=new MessageChannel,Ge=gt.port2;gt.port1.onmessage=Te,Le=function(){Ge.postMessage(null)}}else Le=function(){I(Te,0)};function be(_,V){R=I(function(){_(i.unstable_now())},V)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(_){_.callback=null},i.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ie=0<_?Math.floor(1e3/_):5},i.unstable_getCurrentPriorityLevel=function(){return C},i.unstable_next=function(_){switch(C){case 1:case 2:case 3:var V=3;break;default:V=C}var W=C;C=V;try{return _()}finally{C=W}},i.unstable_requestPaint=function(){k=!0},i.unstable_runWithPriority=function(_,V){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var W=C;C=_;try{return V()}finally{C=W}},i.unstable_scheduleCallback=function(_,V,W){var de=i.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?de+W:de):W=de,_){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=W+pe,_={id:N++,callback:V,priorityLevel:_,startTime:W,expirationTime:pe,sortIndex:-1},W>de?(_.sortIndex=W,u(g,_),o(x)===null&&_===o(g)&&(Q?(J(R),R=-1):Q=!0,be(ve,W-de))):(_.sortIndex=pe,u(x,_),G||L||(G=!0,we||(we=!0,Le()))),_},i.unstable_shouldYield=Ye,i.unstable_wrapCallback=function(_){var V=C;return function(){var W=C;C=V;try{return _.apply(this,arguments)}finally{C=W}}}})(Us)),Us}var Fh;function Ng(){return Fh||(Fh=1,Cs.exports=wg()),Cs.exports}var Ls={exports:{}},Tt={};var $h;function Eg(){if($h)return Tt;$h=1;var i=Ks();function u(x){var g="https://react.dev/errors/"+x;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var N=2;N<arguments.length;N++)g+="&args[]="+encodeURIComponent(arguments[N])}return"Minified React error #"+x+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var c={d:{f:o,r:function(){throw Error(u(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},d=Symbol.for("react.portal");function h(x,g,N){var j=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:j==null?null:""+j,children:x,containerInfo:g,implementation:N}}var p=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(x,g){if(x==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,Tt.createPortal=function(x,g){var N=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(u(299));return h(x,g,null,N)},Tt.flushSync=function(x){var g=p.T,N=c.p;try{if(p.T=null,c.p=2,x)return x()}finally{p.T=g,c.p=N,c.d.f()}},Tt.preconnect=function(x,g){typeof x=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,c.d.C(x,g))},Tt.prefetchDNS=function(x){typeof x=="string"&&c.d.D(x)},Tt.preinit=function(x,g){if(typeof x=="string"&&g&&typeof g.as=="string"){var N=g.as,j=y(N,g.crossOrigin),C=typeof g.integrity=="string"?g.integrity:void 0,L=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;N==="style"?c.d.S(x,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:j,integrity:C,fetchPriority:L}):N==="script"&&c.d.X(x,{crossOrigin:j,integrity:C,fetchPriority:L,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Tt.preinitModule=function(x,g){if(typeof x=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var N=y(g.as,g.crossOrigin);c.d.M(x,{crossOrigin:N,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&c.d.M(x)},Tt.preload=function(x,g){if(typeof x=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var N=g.as,j=y(N,g.crossOrigin);c.d.L(x,N,{crossOrigin:j,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Tt.preloadModule=function(x,g){if(typeof x=="string")if(g){var N=y(g.as,g.crossOrigin);c.d.m(x,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:N,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else c.d.m(x)},Tt.requestFormReset=function(x){c.d.r(x)},Tt.unstable_batchedUpdates=function(x,g){return x(g)},Tt.useFormState=function(x,g,N){return p.H.useFormState(x,g,N)},Tt.useFormStatus=function(){return p.H.useHostTransitionStatus()},Tt.version="19.2.4",Tt}var Ph;function Am(){if(Ph)return Ls.exports;Ph=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(u){console.error(u)}}return i(),Ls.exports=Eg(),Ls.exports}var Ih;function Tg(){if(Ih)return Oi;Ih=1;var i=Ng(),u=Ks(),o=Am();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(h(e)!==e)throw Error(c(188))}function g(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,n=t;;){var l=a.return;if(l===null)break;var r=l.alternate;if(r===null){if(n=l.return,n!==null){a=n;continue}break}if(l.child===r.child){for(r=l.child;r;){if(r===a)return x(l),e;if(r===n)return x(l),t;r=r.sibling}throw Error(c(188))}if(a.return!==n.return)a=l,n=r;else{for(var s=!1,m=l.child;m;){if(m===a){s=!0,a=l,n=r;break}if(m===n){s=!0,n=l,a=r;break}m=m.sibling}if(!s){for(m=r.child;m;){if(m===a){s=!0,a=r,n=l;break}if(m===n){s=!0,n=r,a=l;break}m=m.sibling}if(!s)throw Error(c(189))}}if(a.alternate!==n)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function N(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=N(e),t!==null)return t;e=e.sibling}return null}var j=Object.assign,C=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),Q=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),te=Symbol.for("react.context"),je=Symbol.for("react.forward_ref"),ve=Symbol.for("react.suspense"),we=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),xe=Symbol.for("react.activity"),Ye=Symbol.for("react.memo_cache_sentinel"),Te=Symbol.iterator;function Le(e){return e===null||typeof e!="object"?null:(e=Te&&e[Te]||e["@@iterator"],typeof e=="function"?e:null)}var gt=Symbol.for("react.client.reference");function Ge(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===gt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Q:return"Fragment";case I:return"Profiler";case k:return"StrictMode";case ve:return"Suspense";case we:return"SuspenseList";case xe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case G:return"Portal";case te:return e.displayName||"Context";case J:return(e._context.displayName||"Context")+".Consumer";case je:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case R:return t=e.displayName||null,t!==null?t:Ge(e.type)||"Memo";case ie:t=e._payload,e=e._init;try{return Ge(e(t))}catch{}}return null}var be=Array.isArray,_=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},de=[],pe=-1;function S(e){return{current:e}}function H(e){0>pe||(e.current=de[pe],de[pe]=null,pe--)}function Z(e,t){pe++,de[pe]=e.current,e.current=t}var $=S(null),oe=S(null),he=S(null),Ae=S(null);function it(e,t){switch(Z(he,t),Z(oe,e),Z($,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?mh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=mh(t),e=ph(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}H($),Z($,e)}function Pe(){H($),H(oe),H(he)}function Nn(e){e.memoizedState!==null&&Z(Ae,e);var t=$.current,a=ph(t,e.type);t!==a&&(Z(oe,e),Z($,a))}function Pn(e){oe.current===e&&(H($),H(oe)),Ae.current===e&&(H(Ae),Ri._currentValue=W)}var ct,Na;function ga(e){if(ct===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);ct=t&&t[1]||"",Na=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ct+e+Na}var Hl=!1;function ra(e,t){if(!e||Hl)return"";Hl=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var q=function(){throw Error()};if(Object.defineProperty(q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(q,[])}catch(U){var D=U}Reflect.construct(e,[],q)}else{try{q.call()}catch(U){D=U}e.call(q.prototype)}}else{try{throw Error()}catch(U){D=U}(q=e())&&typeof q.catch=="function"&&q.catch(function(){})}}catch(U){if(U&&D&&typeof U.stack=="string")return[U.stack,D.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=n.DetermineComponentFrameRoot(),s=r[0],m=r[1];if(s&&m){var b=s.split(`
`),A=m.split(`
`);for(l=n=0;n<b.length&&!b[n].includes("DetermineComponentFrameRoot");)n++;for(;l<A.length&&!A[l].includes("DetermineComponentFrameRoot");)l++;if(n===b.length||l===A.length)for(n=b.length-1,l=A.length-1;1<=n&&0<=l&&b[n]!==A[l];)l--;for(;1<=n&&0<=l;n--,l--)if(b[n]!==A[l]){if(n!==1||l!==1)do if(n--,l--,0>l||b[n]!==A[l]){var B=`
`+b[n].replace(" at new "," at ");return e.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",e.displayName)),B}while(1<=n&&0<=l);break}}}finally{Hl=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ga(a):""}function yu(e,t){switch(e.tag){case 26:case 27:case 5:return ga(e.type);case 16:return ga("Lazy");case 13:return e.child!==t&&t!==null?ga("Suspense Fallback"):ga("Suspense");case 19:return ga("SuspenseList");case 0:case 15:return ra(e.type,!1);case 11:return ra(e.type.render,!1);case 1:return ra(e.type,!0);case 31:return ga("Activity");default:return""}}function Ki(e){try{var t="",a=null;do t+=yu(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var In=Object.prototype.hasOwnProperty,Bl=i.unstable_scheduleCallback,Yl=i.unstable_cancelCallback,vu=i.unstable_shouldYield,bu=i.unstable_requestPaint,rt=i.unstable_now,En=i.unstable_getCurrentPriorityLevel,ql=i.unstable_ImmediatePriority,el=i.unstable_UserBlockingPriority,At=i.unstable_NormalPriority,ua=i.unstable_LowPriority,Gl=i.unstable_IdlePriority,Su=i.log,Xl=i.unstable_setDisableYieldValue,Tn=null,Ie=null;function oa(e){if(typeof Su=="function"&&Xl(e),Ie&&typeof Ie.setStrictMode=="function")try{Ie.setStrictMode(Tn,e)}catch{}}var Et=Math.clz32?Math.clz32:Wi,ki=Math.log,ju=Math.LN2;function Wi(e){return e>>>=0,e===0?32:31-(ki(e)/ju|0)|0}var Ea=256,Rn=262144,Ja=4194304;function Ta(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function zn(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var l=0,r=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var m=n&134217727;return m!==0?(n=m&~r,n!==0?l=Ta(n):(s&=m,s!==0?l=Ta(s):a||(a=m&~e,a!==0&&(l=Ta(a))))):(m=n&~r,m!==0?l=Ta(m):s!==0?l=Ta(s):a||(a=n&~e,a!==0&&(l=Ta(a)))),l===0?0:t!==0&&t!==l&&(t&r)===0&&(r=l&-l,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:l}function An(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Fi(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dn(){var e=Ja;return Ja<<=1,(Ja&62914560)===0&&(Ja=4194304),e}function Ka(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function ka(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function wu(e,t,a,n,l,r){var s=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var m=e.entanglements,b=e.expirationTimes,A=e.hiddenUpdates;for(a=s&~a;0<a;){var B=31-Et(a),q=1<<B;m[B]=0,b[B]=-1;var D=A[B];if(D!==null)for(A[B]=null,B=0;B<D.length;B++){var U=D[B];U!==null&&(U.lane&=-536870913)}a&=~q}n!==0&&$i(e,n,0),r!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=r&~(s&~t))}function $i(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-Et(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function v(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-Et(a),l=1<<n;l&t|e[n]&t&&(e[n]|=t),a&=~l}}function T(e,t){var a=t&-t;return a=(a&42)!==0?1:M(a),(a&(e.suspendedLanes|t))!==0?0:a}function M(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function X(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function K(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:Bh(e.type))}function re(e,t){var a=V.p;try{return V.p=e,t()}finally{V.p=a}}var P=Math.random().toString(36).slice(2),F="__reactFiber$"+P,ee="__reactProps$"+P,le="__reactContainer$"+P,ce="__reactEvents$"+P,ue="__reactListeners$"+P,Ue="__reactHandles$"+P,De="__reactResources$"+P,et="__reactMarker$"+P;function tt(e){delete e[F],delete e[ee],delete e[ce],delete e[ue],delete e[Ue]}function at(e){var t=e[F];if(t)return t;for(var a=e.parentNode;a;){if(t=a[le]||a[F]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=jh(e);e!==null;){if(a=e[F])return a;e=jh(e)}return t}e=a,a=e.parentNode}return null}function Me(e){if(e=e[F]||e[le]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function yt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function Dt(e){var t=e[De];return t||(t=e[De]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Fe(e){e[et]=!0}var sa=new Set,Bt={};function ca(e,t){Kt(e,t),Kt(e+"Capture",t)}function Kt(e,t){for(Bt[e]=t,e=0;e<t.length;e++)sa.add(t[e])}var Ra=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Mn={},On={};function Oe(e){return In.call(On,e)?!0:In.call(Mn,e)?!1:Ra.test(e)?On[e]=!0:(Mn[e]=!0,!1)}function ut(e,t,a){if(Oe(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function fa(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function bt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function _e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _n(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Pi(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(s){a=""+s,r.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ql(e){if(!e._valueTracker){var t=_n(e)?"checked":"value";e._valueTracker=Pi(e,t,""+e[t])}}function rc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=_n(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Ii(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var c0=/[\n"\\]/g;function kt(e){return e.replace(c0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Nu(e,t,a,n,l,r,s,m){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+_e(t)):e.value!==""+_e(t)&&(e.value=""+_e(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?Eu(e,s,_e(t)):a!=null?Eu(e,s,_e(a)):n!=null&&e.removeAttribute("value"),l==null&&r!=null&&(e.defaultChecked=!!r),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+_e(m):e.removeAttribute("name")}function uc(e,t,a,n,l,r,s,m){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){Ql(e);return}a=a!=null?""+_e(a):"",t=t!=null?""+_e(t):a,m||t===e.value||(e.value=t),e.defaultValue=t}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=m?e.checked:!!n,e.defaultChecked=!!n,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),Ql(e)}function Eu(e,t,a){t==="number"&&Ii(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function tl(e,t,a,n){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&n&&(e[a].defaultSelected=!0)}else{for(a=""+_e(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function oc(e,t,a){if(t!=null&&(t=""+_e(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+_e(a):""}function sc(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(c(92));if(be(n)){if(1<n.length)throw Error(c(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=_e(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),Ql(e)}function al(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var f0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function cc(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||f0.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function fc(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var l in t)n=t[l],t.hasOwnProperty(l)&&a[l]!==n&&cc(e,l,n)}else for(var r in t)t.hasOwnProperty(r)&&cc(e,r,t[r])}function Tu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var d0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),h0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function er(e){return h0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function za(){}var Ru=null;function zu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nl=null,ll=null;function dc(e){var t=Me(e);if(t&&(e=t.stateNode)){var a=e[ee]||null;e:switch(e=t.stateNode,t.type){case"input":if(Nu(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+kt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var l=n[ee]||null;if(!l)throw Error(c(90));Nu(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&rc(n)}break e;case"textarea":oc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&tl(e,!!a.multiple,t,!1)}}}var Au=!1;function hc(e,t,a){if(Au)return e(t,a);Au=!0;try{var n=e(t);return n}finally{if(Au=!1,(nl!==null||ll!==null)&&(Gr(),nl&&(t=nl,e=ll,ll=nl=null,dc(t),e)))for(t=0;t<e.length;t++)dc(e[t])}}function Vl(e,t){var a=e.stateNode;if(a===null)return null;var n=a[ee]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var Aa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Du=!1;if(Aa)try{var Zl={};Object.defineProperty(Zl,"passive",{get:function(){Du=!0}}),window.addEventListener("test",Zl,Zl),window.removeEventListener("test",Zl,Zl)}catch{Du=!1}var Wa=null,Mu=null,tr=null;function mc(){if(tr)return tr;var e,t=Mu,a=t.length,n,l="value"in Wa?Wa.value:Wa.textContent,r=l.length;for(e=0;e<a&&t[e]===l[e];e++);var s=a-e;for(n=1;n<=s&&t[a-n]===l[r-n];n++);return tr=l.slice(e,1<n?1-n:void 0)}function ar(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function nr(){return!0}function pc(){return!1}function Mt(e){function t(a,n,l,r,s){this._reactName=a,this._targetInst=l,this.type=n,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(a=e[m],this[m]=a?a(r):r[m]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?nr:pc,this.isPropagationStopped=pc,this}return j(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=nr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=nr)},persist:function(){},isPersistent:nr}),t}var Cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lr=Mt(Cn),Jl=j({},Cn,{view:0,detail:0}),m0=Mt(Jl),Ou,_u,Kl,ir=j({},Jl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kl&&(Kl&&e.type==="mousemove"?(Ou=e.screenX-Kl.screenX,_u=e.screenY-Kl.screenY):_u=Ou=0,Kl=e),Ou)},movementY:function(e){return"movementY"in e?e.movementY:_u}}),gc=Mt(ir),p0=j({},ir,{dataTransfer:0}),g0=Mt(p0),x0=j({},Jl,{relatedTarget:0}),Cu=Mt(x0),y0=j({},Cn,{animationName:0,elapsedTime:0,pseudoElement:0}),v0=Mt(y0),b0=j({},Cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),S0=Mt(b0),j0=j({},Cn,{data:0}),xc=Mt(j0),w0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},N0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},E0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function T0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=E0[e])?!!t[e]:!1}function Uu(){return T0}var R0=j({},Jl,{key:function(e){if(e.key){var t=w0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ar(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?N0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uu,charCode:function(e){return e.type==="keypress"?ar(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ar(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),z0=Mt(R0),A0=j({},ir,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yc=Mt(A0),D0=j({},Jl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uu}),M0=Mt(D0),O0=j({},Cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),_0=Mt(O0),C0=j({},ir,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),U0=Mt(C0),L0=j({},Cn,{newState:0,oldState:0}),H0=Mt(L0),B0=[9,13,27,32],Lu=Aa&&"CompositionEvent"in window,kl=null;Aa&&"documentMode"in document&&(kl=document.documentMode);var Y0=Aa&&"TextEvent"in window&&!kl,vc=Aa&&(!Lu||kl&&8<kl&&11>=kl),bc=" ",Sc=!1;function jc(e,t){switch(e){case"keyup":return B0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var il=!1;function q0(e,t){switch(e){case"compositionend":return wc(t);case"keypress":return t.which!==32?null:(Sc=!0,bc);case"textInput":return e=t.data,e===bc&&Sc?null:e;default:return null}}function G0(e,t){if(il)return e==="compositionend"||!Lu&&jc(e,t)?(e=mc(),tr=Mu=Wa=null,il=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vc&&t.locale!=="ko"?null:t.data;default:return null}}var X0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!X0[e.type]:t==="textarea"}function Ec(e,t,a,n){nl?ll?ll.push(n):ll=[n]:nl=n,t=kr(t,"onChange"),0<t.length&&(a=new lr("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Wl=null,Fl=null;function Q0(e){oh(e,0)}function rr(e){var t=yt(e);if(rc(t))return e}function Tc(e,t){if(e==="change")return t}var Rc=!1;if(Aa){var Hu;if(Aa){var Bu="oninput"in document;if(!Bu){var zc=document.createElement("div");zc.setAttribute("oninput","return;"),Bu=typeof zc.oninput=="function"}Hu=Bu}else Hu=!1;Rc=Hu&&(!document.documentMode||9<document.documentMode)}function Ac(){Wl&&(Wl.detachEvent("onpropertychange",Dc),Fl=Wl=null)}function Dc(e){if(e.propertyName==="value"&&rr(Fl)){var t=[];Ec(t,Fl,e,zu(e)),hc(Q0,t)}}function V0(e,t,a){e==="focusin"?(Ac(),Wl=t,Fl=a,Wl.attachEvent("onpropertychange",Dc)):e==="focusout"&&Ac()}function Z0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rr(Fl)}function J0(e,t){if(e==="click")return rr(t)}function K0(e,t){if(e==="input"||e==="change")return rr(t)}function k0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Yt=typeof Object.is=="function"?Object.is:k0;function $l(e,t){if(Yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var l=a[n];if(!In.call(t,l)||!Yt(e[l],t[l]))return!1}return!0}function Mc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Oc(e,t){var a=Mc(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Mc(a)}}function _c(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_c(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ii(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Ii(e.document)}return t}function Yu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var W0=Aa&&"documentMode"in document&&11>=document.documentMode,rl=null,qu=null,Pl=null,Gu=!1;function Uc(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Gu||rl==null||rl!==Ii(n)||(n=rl,"selectionStart"in n&&Yu(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Pl&&$l(Pl,n)||(Pl=n,n=kr(qu,"onSelect"),0<n.length&&(t=new lr("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=rl)))}function Un(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var ul={animationend:Un("Animation","AnimationEnd"),animationiteration:Un("Animation","AnimationIteration"),animationstart:Un("Animation","AnimationStart"),transitionrun:Un("Transition","TransitionRun"),transitionstart:Un("Transition","TransitionStart"),transitioncancel:Un("Transition","TransitionCancel"),transitionend:Un("Transition","TransitionEnd")},Xu={},Lc={};Aa&&(Lc=document.createElement("div").style,"AnimationEvent"in window||(delete ul.animationend.animation,delete ul.animationiteration.animation,delete ul.animationstart.animation),"TransitionEvent"in window||delete ul.transitionend.transition);function Ln(e){if(Xu[e])return Xu[e];if(!ul[e])return e;var t=ul[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Lc)return Xu[e]=t[a];return e}var Hc=Ln("animationend"),Bc=Ln("animationiteration"),Yc=Ln("animationstart"),F0=Ln("transitionrun"),$0=Ln("transitionstart"),P0=Ln("transitioncancel"),qc=Ln("transitionend"),Gc=new Map,Qu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qu.push("scrollEnd");function da(e,t){Gc.set(e,t),ca(t,[e])}var ur=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Wt=[],ol=0,Vu=0;function or(){for(var e=ol,t=Vu=ol=0;t<e;){var a=Wt[t];Wt[t++]=null;var n=Wt[t];Wt[t++]=null;var l=Wt[t];Wt[t++]=null;var r=Wt[t];if(Wt[t++]=null,n!==null&&l!==null){var s=n.pending;s===null?l.next=l:(l.next=s.next,s.next=l),n.pending=l}r!==0&&Xc(a,l,r)}}function sr(e,t,a,n){Wt[ol++]=e,Wt[ol++]=t,Wt[ol++]=a,Wt[ol++]=n,Vu|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Zu(e,t,a,n){return sr(e,t,a,n),cr(e)}function Hn(e,t){return sr(e,null,null,t),cr(e)}function Xc(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var l=!1,r=e.return;r!==null;)r.childLanes|=a,n=r.alternate,n!==null&&(n.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(l=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,l&&t!==null&&(l=31-Et(a),e=r.hiddenUpdates,n=e[l],n===null?e[l]=[t]:n.push(t),t.lane=a|536870912),r):null}function cr(e){if(50<bi)throw bi=0,ts=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var sl={};function I0(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qt(e,t,a,n){return new I0(e,t,a,n)}function Ju(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Da(e,t){var a=e.alternate;return a===null?(a=qt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Qc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function fr(e,t,a,n,l,r){var s=0;if(n=e,typeof e=="function")Ju(e)&&(s=1);else if(typeof e=="string")s=lg(e,a,$.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case xe:return e=qt(31,a,t,l),e.elementType=xe,e.lanes=r,e;case Q:return Bn(a.children,l,r,t);case k:s=8,l|=24;break;case I:return e=qt(12,a,t,l|2),e.elementType=I,e.lanes=r,e;case ve:return e=qt(13,a,t,l),e.elementType=ve,e.lanes=r,e;case we:return e=qt(19,a,t,l),e.elementType=we,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case te:s=10;break e;case J:s=9;break e;case je:s=11;break e;case R:s=14;break e;case ie:s=16,n=null;break e}s=29,a=Error(c(130,e===null?"null":typeof e,"")),n=null}return t=qt(s,a,t,l),t.elementType=e,t.type=n,t.lanes=r,t}function Bn(e,t,a,n){return e=qt(7,e,n,t),e.lanes=a,e}function Ku(e,t,a){return e=qt(6,e,null,t),e.lanes=a,e}function Vc(e){var t=qt(18,null,null,0);return t.stateNode=e,t}function ku(e,t,a){return t=qt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Zc=new WeakMap;function Ft(e,t){if(typeof e=="object"&&e!==null){var a=Zc.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Ki(t)},Zc.set(e,t),t)}return{value:e,source:t,stack:Ki(t)}}var cl=[],fl=0,dr=null,Il=0,$t=[],Pt=0,Fa=null,xa=1,ya="";function Ma(e,t){cl[fl++]=Il,cl[fl++]=dr,dr=e,Il=t}function Jc(e,t,a){$t[Pt++]=xa,$t[Pt++]=ya,$t[Pt++]=Fa,Fa=e;var n=xa;e=ya;var l=32-Et(n)-1;n&=~(1<<l),a+=1;var r=32-Et(t)+l;if(30<r){var s=l-l%5;r=(n&(1<<s)-1).toString(32),n>>=s,l-=s,xa=1<<32-Et(t)+l|a<<l|n,ya=r+e}else xa=1<<r|a<<l|n,ya=e}function Wu(e){e.return!==null&&(Ma(e,1),Jc(e,1,0))}function Fu(e){for(;e===dr;)dr=cl[--fl],cl[fl]=null,Il=cl[--fl],cl[fl]=null;for(;e===Fa;)Fa=$t[--Pt],$t[Pt]=null,ya=$t[--Pt],$t[Pt]=null,xa=$t[--Pt],$t[Pt]=null}function Kc(e,t){$t[Pt++]=xa,$t[Pt++]=ya,$t[Pt++]=Fa,xa=t.id,ya=t.overflow,Fa=e}var St=null,ke=null,Ce=!1,$a=null,It=!1,$u=Error(c(519));function Pa(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ei(Ft(t,e)),$u}function kc(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[F]=e,t[ee]=n,a){case"dialog":Ee("cancel",t),Ee("close",t);break;case"iframe":case"object":case"embed":Ee("load",t);break;case"video":case"audio":for(a=0;a<ji.length;a++)Ee(ji[a],t);break;case"source":Ee("error",t);break;case"img":case"image":case"link":Ee("error",t),Ee("load",t);break;case"details":Ee("toggle",t);break;case"input":Ee("invalid",t),uc(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":Ee("invalid",t);break;case"textarea":Ee("invalid",t),sc(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||dh(t.textContent,a)?(n.popover!=null&&(Ee("beforetoggle",t),Ee("toggle",t)),n.onScroll!=null&&Ee("scroll",t),n.onScrollEnd!=null&&Ee("scrollend",t),n.onClick!=null&&(t.onclick=za),t=!0):t=!1,t||Pa(e,!0)}function Wc(e){for(St=e.return;St;)switch(St.tag){case 5:case 31:case 13:It=!1;return;case 27:case 3:It=!0;return;default:St=St.return}}function dl(e){if(e!==St)return!1;if(!Ce)return Wc(e),Ce=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||gs(e.type,e.memoizedProps)),a=!a),a&&ke&&Pa(e),Wc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));ke=Sh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));ke=Sh(e)}else t===27?(t=ke,hn(e.type)?(e=Ss,Ss=null,ke=e):ke=t):ke=St?ta(e.stateNode.nextSibling):null;return!0}function Yn(){ke=St=null,Ce=!1}function Pu(){var e=$a;return e!==null&&(Ut===null?Ut=e:Ut.push.apply(Ut,e),$a=null),e}function ei(e){$a===null?$a=[e]:$a.push(e)}var Iu=S(null),qn=null,Oa=null;function Ia(e,t,a){Z(Iu,t._currentValue),t._currentValue=a}function _a(e){e._currentValue=Iu.current,H(Iu)}function eo(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function to(e,t,a,n){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var r=l.dependencies;if(r!==null){var s=l.child;r=r.firstContext;e:for(;r!==null;){var m=r;r=l;for(var b=0;b<t.length;b++)if(m.context===t[b]){r.lanes|=a,m=r.alternate,m!==null&&(m.lanes|=a),eo(r.return,a,e),n||(s=null);break e}r=m.next}}else if(l.tag===18){if(s=l.return,s===null)throw Error(c(341));s.lanes|=a,r=s.alternate,r!==null&&(r.lanes|=a),eo(s,a,e),s=null}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===e){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}}function hl(e,t,a,n){e=null;for(var l=t,r=!1;l!==null;){if(!r){if((l.flags&524288)!==0)r=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var s=l.alternate;if(s===null)throw Error(c(387));if(s=s.memoizedProps,s!==null){var m=l.type;Yt(l.pendingProps.value,s.value)||(e!==null?e.push(m):e=[m])}}else if(l===Ae.current){if(s=l.alternate,s===null)throw Error(c(387));s.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Ri):e=[Ri])}l=l.return}e!==null&&to(t,e,a,n),t.flags|=262144}function hr(e){for(e=e.firstContext;e!==null;){if(!Yt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Gn(e){qn=e,Oa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function jt(e){return Fc(qn,e)}function mr(e,t){return qn===null&&Gn(e),Fc(e,t)}function Fc(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Oa===null){if(e===null)throw Error(c(308));Oa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Oa=Oa.next=t;return a}var ep=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},tp=i.unstable_scheduleCallback,ap=i.unstable_NormalPriority,ft={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ao(){return{controller:new ep,data:new Map,refCount:0}}function ti(e){e.refCount--,e.refCount===0&&tp(ap,function(){e.controller.abort()})}var ai=null,no=0,ml=0,pl=null;function np(e,t){if(ai===null){var a=ai=[];no=0,ml=us(),pl={status:"pending",value:void 0,then:function(n){a.push(n)}}}return no++,t.then($c,$c),t}function $c(){if(--no===0&&ai!==null){pl!==null&&(pl.status="fulfilled");var e=ai;ai=null,ml=0,pl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function lp(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(n.status="rejected",n.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),n}var Pc=_.S;_.S=function(e,t){Ld=rt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&np(e,t),Pc!==null&&Pc(e,t)};var Xn=S(null);function lo(){var e=Xn.current;return e!==null?e:Ke.pooledCache}function pr(e,t){t===null?Z(Xn,Xn.current):Z(Xn,t.pool)}function Ic(){var e=lo();return e===null?null:{parent:ft._currentValue,pool:e}}var gl=Error(c(460)),io=Error(c(474)),gr=Error(c(542)),xr={then:function(){}};function ef(e){return e=e.status,e==="fulfilled"||e==="rejected"}function tf(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(za,za),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,nf(e),e;default:if(typeof t.status=="string")t.then(za,za);else{if(e=Ke,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=n}},function(n){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,nf(e),e}throw Vn=t,gl}}function Qn(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Vn=a,gl):a}}var Vn=null;function af(){if(Vn===null)throw Error(c(459));var e=Vn;return Vn=null,e}function nf(e){if(e===gl||e===gr)throw Error(c(483))}var xl=null,ni=0;function yr(e){var t=ni;return ni+=1,xl===null&&(xl=[]),tf(xl,e,t)}function li(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function vr(e,t){throw t.$$typeof===C?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function lf(e){function t(E,w){if(e){var z=E.deletions;z===null?(E.deletions=[w],E.flags|=16):z.push(w)}}function a(E,w){if(!e)return null;for(;w!==null;)t(E,w),w=w.sibling;return null}function n(E){for(var w=new Map;E!==null;)E.key!==null?w.set(E.key,E):w.set(E.index,E),E=E.sibling;return w}function l(E,w){return E=Da(E,w),E.index=0,E.sibling=null,E}function r(E,w,z){return E.index=z,e?(z=E.alternate,z!==null?(z=z.index,z<w?(E.flags|=67108866,w):z):(E.flags|=67108866,w)):(E.flags|=1048576,w)}function s(E){return e&&E.alternate===null&&(E.flags|=67108866),E}function m(E,w,z,Y){return w===null||w.tag!==6?(w=Ku(z,E.mode,Y),w.return=E,w):(w=l(w,z),w.return=E,w)}function b(E,w,z,Y){var se=z.type;return se===Q?B(E,w,z.props.children,Y,z.key):w!==null&&(w.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===ie&&Qn(se)===w.type)?(w=l(w,z.props),li(w,z),w.return=E,w):(w=fr(z.type,z.key,z.props,null,E.mode,Y),li(w,z),w.return=E,w)}function A(E,w,z,Y){return w===null||w.tag!==4||w.stateNode.containerInfo!==z.containerInfo||w.stateNode.implementation!==z.implementation?(w=ku(z,E.mode,Y),w.return=E,w):(w=l(w,z.children||[]),w.return=E,w)}function B(E,w,z,Y,se){return w===null||w.tag!==7?(w=Bn(z,E.mode,Y,se),w.return=E,w):(w=l(w,z),w.return=E,w)}function q(E,w,z){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return w=Ku(""+w,E.mode,z),w.return=E,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case L:return z=fr(w.type,w.key,w.props,null,E.mode,z),li(z,w),z.return=E,z;case G:return w=ku(w,E.mode,z),w.return=E,w;case ie:return w=Qn(w),q(E,w,z)}if(be(w)||Le(w))return w=Bn(w,E.mode,z,null),w.return=E,w;if(typeof w.then=="function")return q(E,yr(w),z);if(w.$$typeof===te)return q(E,mr(E,w),z);vr(E,w)}return null}function D(E,w,z,Y){var se=w!==null?w.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return se!==null?null:m(E,w,""+z,Y);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case L:return z.key===se?b(E,w,z,Y):null;case G:return z.key===se?A(E,w,z,Y):null;case ie:return z=Qn(z),D(E,w,z,Y)}if(be(z)||Le(z))return se!==null?null:B(E,w,z,Y,null);if(typeof z.then=="function")return D(E,w,yr(z),Y);if(z.$$typeof===te)return D(E,w,mr(E,z),Y);vr(E,z)}return null}function U(E,w,z,Y,se){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return E=E.get(z)||null,m(w,E,""+Y,se);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case L:return E=E.get(Y.key===null?z:Y.key)||null,b(w,E,Y,se);case G:return E=E.get(Y.key===null?z:Y.key)||null,A(w,E,Y,se);case ie:return Y=Qn(Y),U(E,w,z,Y,se)}if(be(Y)||Le(Y))return E=E.get(z)||null,B(w,E,Y,se,null);if(typeof Y.then=="function")return U(E,w,z,yr(Y),se);if(Y.$$typeof===te)return U(E,w,z,mr(w,Y),se);vr(w,Y)}return null}function ae(E,w,z,Y){for(var se=null,He=null,ne=w,ye=w=0,ze=null;ne!==null&&ye<z.length;ye++){ne.index>ye?(ze=ne,ne=null):ze=ne.sibling;var Be=D(E,ne,z[ye],Y);if(Be===null){ne===null&&(ne=ze);break}e&&ne&&Be.alternate===null&&t(E,ne),w=r(Be,w,ye),He===null?se=Be:He.sibling=Be,He=Be,ne=ze}if(ye===z.length)return a(E,ne),Ce&&Ma(E,ye),se;if(ne===null){for(;ye<z.length;ye++)ne=q(E,z[ye],Y),ne!==null&&(w=r(ne,w,ye),He===null?se=ne:He.sibling=ne,He=ne);return Ce&&Ma(E,ye),se}for(ne=n(ne);ye<z.length;ye++)ze=U(ne,E,ye,z[ye],Y),ze!==null&&(e&&ze.alternate!==null&&ne.delete(ze.key===null?ye:ze.key),w=r(ze,w,ye),He===null?se=ze:He.sibling=ze,He=ze);return e&&ne.forEach(function(yn){return t(E,yn)}),Ce&&Ma(E,ye),se}function fe(E,w,z,Y){if(z==null)throw Error(c(151));for(var se=null,He=null,ne=w,ye=w=0,ze=null,Be=z.next();ne!==null&&!Be.done;ye++,Be=z.next()){ne.index>ye?(ze=ne,ne=null):ze=ne.sibling;var yn=D(E,ne,Be.value,Y);if(yn===null){ne===null&&(ne=ze);break}e&&ne&&yn.alternate===null&&t(E,ne),w=r(yn,w,ye),He===null?se=yn:He.sibling=yn,He=yn,ne=ze}if(Be.done)return a(E,ne),Ce&&Ma(E,ye),se;if(ne===null){for(;!Be.done;ye++,Be=z.next())Be=q(E,Be.value,Y),Be!==null&&(w=r(Be,w,ye),He===null?se=Be:He.sibling=Be,He=Be);return Ce&&Ma(E,ye),se}for(ne=n(ne);!Be.done;ye++,Be=z.next())Be=U(ne,E,ye,Be.value,Y),Be!==null&&(e&&Be.alternate!==null&&ne.delete(Be.key===null?ye:Be.key),w=r(Be,w,ye),He===null?se=Be:He.sibling=Be,He=Be);return e&&ne.forEach(function(pg){return t(E,pg)}),Ce&&Ma(E,ye),se}function Je(E,w,z,Y){if(typeof z=="object"&&z!==null&&z.type===Q&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case L:e:{for(var se=z.key;w!==null;){if(w.key===se){if(se=z.type,se===Q){if(w.tag===7){a(E,w.sibling),Y=l(w,z.props.children),Y.return=E,E=Y;break e}}else if(w.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===ie&&Qn(se)===w.type){a(E,w.sibling),Y=l(w,z.props),li(Y,z),Y.return=E,E=Y;break e}a(E,w);break}else t(E,w);w=w.sibling}z.type===Q?(Y=Bn(z.props.children,E.mode,Y,z.key),Y.return=E,E=Y):(Y=fr(z.type,z.key,z.props,null,E.mode,Y),li(Y,z),Y.return=E,E=Y)}return s(E);case G:e:{for(se=z.key;w!==null;){if(w.key===se)if(w.tag===4&&w.stateNode.containerInfo===z.containerInfo&&w.stateNode.implementation===z.implementation){a(E,w.sibling),Y=l(w,z.children||[]),Y.return=E,E=Y;break e}else{a(E,w);break}else t(E,w);w=w.sibling}Y=ku(z,E.mode,Y),Y.return=E,E=Y}return s(E);case ie:return z=Qn(z),Je(E,w,z,Y)}if(be(z))return ae(E,w,z,Y);if(Le(z)){if(se=Le(z),typeof se!="function")throw Error(c(150));return z=se.call(z),fe(E,w,z,Y)}if(typeof z.then=="function")return Je(E,w,yr(z),Y);if(z.$$typeof===te)return Je(E,w,mr(E,z),Y);vr(E,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,w!==null&&w.tag===6?(a(E,w.sibling),Y=l(w,z),Y.return=E,E=Y):(a(E,w),Y=Ku(z,E.mode,Y),Y.return=E,E=Y),s(E)):a(E,w)}return function(E,w,z,Y){try{ni=0;var se=Je(E,w,z,Y);return xl=null,se}catch(ne){if(ne===gl||ne===gr)throw ne;var He=qt(29,ne,null,E.mode);return He.lanes=Y,He.return=E,He}}}var Zn=lf(!0),rf=lf(!1),en=!1;function ro(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function tn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function an(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(qe&2)!==0){var l=n.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),n.pending=t,t=cr(e),Xc(e,null,a),t}return sr(e,n,t,a),cr(e)}function ii(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,v(e,a)}}function oo(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var l=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?l=r=s:r=r.next=s,a=a.next}while(a!==null);r===null?l=r=t:r=r.next=t}else l=r=t;a={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:r,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var so=!1;function ri(){if(so){var e=pl;if(e!==null)throw e}}function ui(e,t,a,n){so=!1;var l=e.updateQueue;en=!1;var r=l.firstBaseUpdate,s=l.lastBaseUpdate,m=l.shared.pending;if(m!==null){l.shared.pending=null;var b=m,A=b.next;b.next=null,s===null?r=A:s.next=A,s=b;var B=e.alternate;B!==null&&(B=B.updateQueue,m=B.lastBaseUpdate,m!==s&&(m===null?B.firstBaseUpdate=A:m.next=A,B.lastBaseUpdate=b))}if(r!==null){var q=l.baseState;s=0,B=A=b=null,m=r;do{var D=m.lane&-536870913,U=D!==m.lane;if(U?(Re&D)===D:(n&D)===D){D!==0&&D===ml&&(so=!0),B!==null&&(B=B.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var ae=e,fe=m;D=t;var Je=a;switch(fe.tag){case 1:if(ae=fe.payload,typeof ae=="function"){q=ae.call(Je,q,D);break e}q=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=fe.payload,D=typeof ae=="function"?ae.call(Je,q,D):ae,D==null)break e;q=j({},q,D);break e;case 2:en=!0}}D=m.callback,D!==null&&(e.flags|=64,U&&(e.flags|=8192),U=l.callbacks,U===null?l.callbacks=[D]:U.push(D))}else U={lane:D,tag:m.tag,payload:m.payload,callback:m.callback,next:null},B===null?(A=B=U,b=q):B=B.next=U,s|=D;if(m=m.next,m===null){if(m=l.shared.pending,m===null)break;U=m,m=U.next,U.next=null,l.lastBaseUpdate=U,l.shared.pending=null}}while(!0);B===null&&(b=q),l.baseState=b,l.firstBaseUpdate=A,l.lastBaseUpdate=B,r===null&&(l.shared.lanes=0),on|=s,e.lanes=s,e.memoizedState=q}}function uf(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function of(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)uf(a[e],t)}var yl=S(null),br=S(0);function sf(e,t){e=Xa,Z(br,e),Z(yl,t),Xa=e|t.baseLanes}function co(){Z(br,Xa),Z(yl,yl.current)}function fo(){Xa=br.current,H(yl),H(br)}var Gt=S(null),ea=null;function nn(e){var t=e.alternate;Z(ot,ot.current&1),Z(Gt,e),ea===null&&(t===null||yl.current!==null||t.memoizedState!==null)&&(ea=e)}function ho(e){Z(ot,ot.current),Z(Gt,e),ea===null&&(ea=e)}function cf(e){e.tag===22?(Z(ot,ot.current),Z(Gt,e),ea===null&&(ea=e)):ln()}function ln(){Z(ot,ot.current),Z(Gt,Gt.current)}function Xt(e){H(Gt),ea===e&&(ea=null),H(ot)}var ot=S(0);function Sr(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||vs(a)||bs(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ca=0,ge=null,Ve=null,dt=null,jr=!1,vl=!1,Jn=!1,wr=0,oi=0,bl=null,ip=0;function nt(){throw Error(c(321))}function mo(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Yt(e[a],t[a]))return!1;return!0}function po(e,t,a,n,l,r){return Ca=r,ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_.H=e===null||e.memoizedState===null?Kf:Do,Jn=!1,r=a(n,l),Jn=!1,vl&&(r=df(t,a,n,l)),ff(e),r}function ff(e){_.H=fi;var t=Ve!==null&&Ve.next!==null;if(Ca=0,dt=Ve=ge=null,jr=!1,oi=0,bl=null,t)throw Error(c(300));e===null||ht||(e=e.dependencies,e!==null&&hr(e)&&(ht=!0))}function df(e,t,a,n){ge=e;var l=0;do{if(vl&&(bl=null),oi=0,vl=!1,25<=l)throw Error(c(301));if(l+=1,dt=Ve=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}_.H=kf,r=t(a,n)}while(vl);return r}function rp(){var e=_.H,t=e.useState()[0];return t=typeof t.then=="function"?si(t):t,e=e.useState()[0],(Ve!==null?Ve.memoizedState:null)!==e&&(ge.flags|=1024),t}function go(){var e=wr!==0;return wr=0,e}function xo(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function yo(e){if(jr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}jr=!1}Ca=0,dt=Ve=ge=null,vl=!1,oi=wr=0,bl=null}function zt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?ge.memoizedState=dt=e:dt=dt.next=e,dt}function st(){if(Ve===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Ve.next;var t=dt===null?ge.memoizedState:dt.next;if(t!==null)dt=t,Ve=e;else{if(e===null)throw ge.alternate===null?Error(c(467)):Error(c(310));Ve=e,e={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},dt===null?ge.memoizedState=dt=e:dt=dt.next=e}return dt}function Nr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function si(e){var t=oi;return oi+=1,bl===null&&(bl=[]),e=tf(bl,e,t),t=ge,(dt===null?t.memoizedState:dt.next)===null&&(t=t.alternate,_.H=t===null||t.memoizedState===null?Kf:Do),e}function Er(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return si(e);if(e.$$typeof===te)return jt(e)}throw Error(c(438,String(e)))}function vo(e){var t=null,a=ge.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=ge.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Nr(),ge.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=Ye;return t.index++,a}function Ua(e,t){return typeof t=="function"?t(e):t}function Tr(e){var t=st();return bo(t,Ve,e)}function bo(e,t,a){var n=e.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=a;var l=e.baseQueue,r=n.pending;if(r!==null){if(l!==null){var s=l.next;l.next=r.next,r.next=s}t.baseQueue=l=r,n.pending=null}if(r=e.baseState,l===null)e.memoizedState=r;else{t=l.next;var m=s=null,b=null,A=t,B=!1;do{var q=A.lane&-536870913;if(q!==A.lane?(Re&q)===q:(Ca&q)===q){var D=A.revertLane;if(D===0)b!==null&&(b=b.next={lane:0,revertLane:0,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),q===ml&&(B=!0);else if((Ca&D)===D){A=A.next,D===ml&&(B=!0);continue}else q={lane:0,revertLane:A.revertLane,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},b===null?(m=b=q,s=r):b=b.next=q,ge.lanes|=D,on|=D;q=A.action,Jn&&a(r,q),r=A.hasEagerState?A.eagerState:a(r,q)}else D={lane:q,revertLane:A.revertLane,gesture:A.gesture,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},b===null?(m=b=D,s=r):b=b.next=D,ge.lanes|=q,on|=q;A=A.next}while(A!==null&&A!==t);if(b===null?s=r:b.next=m,!Yt(r,e.memoizedState)&&(ht=!0,B&&(a=pl,a!==null)))throw a;e.memoizedState=r,e.baseState=s,e.baseQueue=b,n.lastRenderedState=r}return l===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function So(e){var t=st(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var n=a.dispatch,l=a.pending,r=t.memoizedState;if(l!==null){a.pending=null;var s=l=l.next;do r=e(r,s.action),s=s.next;while(s!==l);Yt(r,t.memoizedState)||(ht=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,n]}function hf(e,t,a){var n=ge,l=st(),r=Ce;if(r){if(a===void 0)throw Error(c(407));a=a()}else a=t();var s=!Yt((Ve||l).memoizedState,a);if(s&&(l.memoizedState=a,ht=!0),l=l.queue,No(gf.bind(null,n,l,e),[e]),l.getSnapshot!==t||s||dt!==null&&dt.memoizedState.tag&1){if(n.flags|=2048,Sl(9,{destroy:void 0},pf.bind(null,n,l,a,t),null),Ke===null)throw Error(c(349));r||(Ca&127)!==0||mf(n,t,a)}return a}function mf(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ge.updateQueue,t===null?(t=Nr(),ge.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function pf(e,t,a,n){t.value=a,t.getSnapshot=n,xf(t)&&yf(e)}function gf(e,t,a){return a(function(){xf(t)&&yf(e)})}function xf(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Yt(e,a)}catch{return!0}}function yf(e){var t=Hn(e,2);t!==null&&Lt(t,e,2)}function jo(e){var t=zt();if(typeof e=="function"){var a=e;if(e=a(),Jn){oa(!0);try{a()}finally{oa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:e},t}function vf(e,t,a,n){return e.baseState=a,bo(e,Ve,typeof n=="function"?n:Ua)}function up(e,t,a,n,l){if(Ar(e))throw Error(c(485));if(e=t.action,e!==null){var r={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};_.T!==null?a(!0):r.isTransition=!1,n(r),a=t.pending,a===null?(r.next=t.pending=r,bf(t,r)):(r.next=a.next,t.pending=a.next=r)}}function bf(e,t){var a=t.action,n=t.payload,l=e.state;if(t.isTransition){var r=_.T,s={};_.T=s;try{var m=a(l,n),b=_.S;b!==null&&b(s,m),Sf(e,t,m)}catch(A){wo(e,t,A)}finally{r!==null&&s.types!==null&&(r.types=s.types),_.T=r}}else try{r=a(l,n),Sf(e,t,r)}catch(A){wo(e,t,A)}}function Sf(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){jf(e,t,n)},function(n){return wo(e,t,n)}):jf(e,t,a)}function jf(e,t,a){t.status="fulfilled",t.value=a,wf(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,bf(e,a)))}function wo(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,wf(t),t=t.next;while(t!==n)}e.action=null}function wf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Nf(e,t){return t}function Ef(e,t){if(Ce){var a=Ke.formState;if(a!==null){e:{var n=ge;if(Ce){if(ke){t:{for(var l=ke,r=It;l.nodeType!==8;){if(!r){l=null;break t}if(l=ta(l.nextSibling),l===null){l=null;break t}}r=l.data,l=r==="F!"||r==="F"?l:null}if(l){ke=ta(l.nextSibling),n=l.data==="F!";break e}}Pa(n)}n=!1}n&&(t=a[0])}}return a=zt(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Nf,lastRenderedState:t},a.queue=n,a=Vf.bind(null,ge,n),n.dispatch=a,n=jo(!1),r=Ao.bind(null,ge,!1,n.queue),n=zt(),l={state:t,dispatch:null,action:e,pending:null},n.queue=l,a=up.bind(null,ge,l,r,a),l.dispatch=a,n.memoizedState=e,[t,a,!1]}function Tf(e){var t=st();return Rf(t,Ve,e)}function Rf(e,t,a){if(t=bo(e,t,Nf)[0],e=Tr(Ua)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=si(t)}catch(s){throw s===gl?gr:s}else n=t;t=st();var l=t.queue,r=l.dispatch;return a!==t.memoizedState&&(ge.flags|=2048,Sl(9,{destroy:void 0},op.bind(null,l,a),null)),[n,r,e]}function op(e,t){e.action=t}function zf(e){var t=st(),a=Ve;if(a!==null)return Rf(t,a,e);st(),t=t.memoizedState,a=st();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function Sl(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=ge.updateQueue,t===null&&(t=Nr(),ge.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function Af(){return st().memoizedState}function Rr(e,t,a,n){var l=zt();ge.flags|=e,l.memoizedState=Sl(1|t,{destroy:void 0},a,n===void 0?null:n)}function zr(e,t,a,n){var l=st();n=n===void 0?null:n;var r=l.memoizedState.inst;Ve!==null&&n!==null&&mo(n,Ve.memoizedState.deps)?l.memoizedState=Sl(t,r,a,n):(ge.flags|=e,l.memoizedState=Sl(1|t,r,a,n))}function Df(e,t){Rr(8390656,8,e,t)}function No(e,t){zr(2048,8,e,t)}function sp(e){ge.flags|=4;var t=ge.updateQueue;if(t===null)t=Nr(),ge.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Mf(e){var t=st().memoizedState;return sp({ref:t,nextImpl:e}),function(){if((qe&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function Of(e,t){return zr(4,2,e,t)}function _f(e,t){return zr(4,4,e,t)}function Cf(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Uf(e,t,a){a=a!=null?a.concat([e]):null,zr(4,4,Cf.bind(null,t,e),a)}function Eo(){}function Lf(e,t){var a=st();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&mo(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Hf(e,t){var a=st();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&mo(t,n[1]))return n[0];if(n=e(),Jn){oa(!0);try{e()}finally{oa(!1)}}return a.memoizedState=[n,t],n}function To(e,t,a){return a===void 0||(Ca&1073741824)!==0&&(Re&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Bd(),ge.lanes|=e,on|=e,a)}function Bf(e,t,a,n){return Yt(a,t)?a:yl.current!==null?(e=To(e,a,n),Yt(e,t)||(ht=!0),e):(Ca&42)===0||(Ca&1073741824)!==0&&(Re&261930)===0?(ht=!0,e.memoizedState=a):(e=Bd(),ge.lanes|=e,on|=e,t)}function Yf(e,t,a,n,l){var r=V.p;V.p=r!==0&&8>r?r:8;var s=_.T,m={};_.T=m,Ao(e,!1,t,a);try{var b=l(),A=_.S;if(A!==null&&A(m,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var B=lp(b,n);ci(e,t,B,Zt(e))}else ci(e,t,n,Zt(e))}catch(q){ci(e,t,{then:function(){},status:"rejected",reason:q},Zt())}finally{V.p=r,s!==null&&m.types!==null&&(s.types=m.types),_.T=s}}function cp(){}function Ro(e,t,a,n){if(e.tag!==5)throw Error(c(476));var l=qf(e).queue;Yf(e,l,t,W,a===null?cp:function(){return Gf(e),a(n)})}function qf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:W},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Gf(e){var t=qf(e);t.next===null&&(t=e.alternate.memoizedState),ci(e,t.next.queue,{},Zt())}function zo(){return jt(Ri)}function Xf(){return st().memoizedState}function Qf(){return st().memoizedState}function fp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Zt();e=tn(a);var n=an(t,e,a);n!==null&&(Lt(n,t,a),ii(n,t,a)),t={cache:ao()},e.payload=t;return}t=t.return}}function dp(e,t,a){var n=Zt();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ar(e)?Zf(t,a):(a=Zu(e,t,a,n),a!==null&&(Lt(a,e,n),Jf(a,t,n)))}function Vf(e,t,a){var n=Zt();ci(e,t,a,n)}function ci(e,t,a,n){var l={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ar(e))Zf(t,l);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var s=t.lastRenderedState,m=r(s,a);if(l.hasEagerState=!0,l.eagerState=m,Yt(m,s))return sr(e,t,l,0),Ke===null&&or(),!1}catch{}if(a=Zu(e,t,l,n),a!==null)return Lt(a,e,n),Jf(a,t,n),!0}return!1}function Ao(e,t,a,n){if(n={lane:2,revertLane:us(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ar(e)){if(t)throw Error(c(479))}else t=Zu(e,a,n,2),t!==null&&Lt(t,e,2)}function Ar(e){var t=e.alternate;return e===ge||t!==null&&t===ge}function Zf(e,t){vl=jr=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Jf(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,v(e,a)}}var fi={readContext:jt,use:Er,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useLayoutEffect:nt,useInsertionEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useSyncExternalStore:nt,useId:nt,useHostTransitionStatus:nt,useFormState:nt,useActionState:nt,useOptimistic:nt,useMemoCache:nt,useCacheRefresh:nt};fi.useEffectEvent=nt;var Kf={readContext:jt,use:Er,useCallback:function(e,t){return zt().memoizedState=[e,t===void 0?null:t],e},useContext:jt,useEffect:Df,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Rr(4194308,4,Cf.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Rr(4194308,4,e,t)},useInsertionEffect:function(e,t){Rr(4,2,e,t)},useMemo:function(e,t){var a=zt();t=t===void 0?null:t;var n=e();if(Jn){oa(!0);try{e()}finally{oa(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=zt();if(a!==void 0){var l=a(t);if(Jn){oa(!0);try{a(t)}finally{oa(!1)}}}else l=t;return n.memoizedState=n.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},n.queue=e,e=e.dispatch=dp.bind(null,ge,e),[n.memoizedState,e]},useRef:function(e){var t=zt();return e={current:e},t.memoizedState=e},useState:function(e){e=jo(e);var t=e.queue,a=Vf.bind(null,ge,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Eo,useDeferredValue:function(e,t){var a=zt();return To(a,e,t)},useTransition:function(){var e=jo(!1);return e=Yf.bind(null,ge,e.queue,!0,!1),zt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=ge,l=zt();if(Ce){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),Ke===null)throw Error(c(349));(Re&127)!==0||mf(n,t,a)}l.memoizedState=a;var r={value:a,getSnapshot:t};return l.queue=r,Df(gf.bind(null,n,r,e),[e]),n.flags|=2048,Sl(9,{destroy:void 0},pf.bind(null,n,r,a,t),null),a},useId:function(){var e=zt(),t=Ke.identifierPrefix;if(Ce){var a=ya,n=xa;a=(n&~(1<<32-Et(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=wr++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=ip++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:zo,useFormState:Ef,useActionState:Ef,useOptimistic:function(e){var t=zt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Ao.bind(null,ge,!0,a),a.dispatch=t,[e,t]},useMemoCache:vo,useCacheRefresh:function(){return zt().memoizedState=fp.bind(null,ge)},useEffectEvent:function(e){var t=zt(),a={impl:e};return t.memoizedState=a,function(){if((qe&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}},Do={readContext:jt,use:Er,useCallback:Lf,useContext:jt,useEffect:No,useImperativeHandle:Uf,useInsertionEffect:Of,useLayoutEffect:_f,useMemo:Hf,useReducer:Tr,useRef:Af,useState:function(){return Tr(Ua)},useDebugValue:Eo,useDeferredValue:function(e,t){var a=st();return Bf(a,Ve.memoizedState,e,t)},useTransition:function(){var e=Tr(Ua)[0],t=st().memoizedState;return[typeof e=="boolean"?e:si(e),t]},useSyncExternalStore:hf,useId:Xf,useHostTransitionStatus:zo,useFormState:Tf,useActionState:Tf,useOptimistic:function(e,t){var a=st();return vf(a,Ve,e,t)},useMemoCache:vo,useCacheRefresh:Qf};Do.useEffectEvent=Mf;var kf={readContext:jt,use:Er,useCallback:Lf,useContext:jt,useEffect:No,useImperativeHandle:Uf,useInsertionEffect:Of,useLayoutEffect:_f,useMemo:Hf,useReducer:So,useRef:Af,useState:function(){return So(Ua)},useDebugValue:Eo,useDeferredValue:function(e,t){var a=st();return Ve===null?To(a,e,t):Bf(a,Ve.memoizedState,e,t)},useTransition:function(){var e=So(Ua)[0],t=st().memoizedState;return[typeof e=="boolean"?e:si(e),t]},useSyncExternalStore:hf,useId:Xf,useHostTransitionStatus:zo,useFormState:zf,useActionState:zf,useOptimistic:function(e,t){var a=st();return Ve!==null?vf(a,Ve,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:vo,useCacheRefresh:Qf};kf.useEffectEvent=Mf;function Mo(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:j({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Oo={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=Zt(),l=tn(n);l.payload=t,a!=null&&(l.callback=a),t=an(e,l,n),t!==null&&(Lt(t,e,n),ii(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=Zt(),l=tn(n);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=an(e,l,n),t!==null&&(Lt(t,e,n),ii(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Zt(),n=tn(a);n.tag=2,t!=null&&(n.callback=t),t=an(e,n,a),t!==null&&(Lt(t,e,a),ii(t,e,a))}};function Wf(e,t,a,n,l,r,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,r,s):t.prototype&&t.prototype.isPureReactComponent?!$l(a,n)||!$l(l,r):!0}function Ff(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&Oo.enqueueReplaceState(t,t.state,null)}function Kn(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=j({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function $f(e){ur(e)}function Pf(e){console.error(e)}function If(e){ur(e)}function Dr(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function ed(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function _o(e,t,a){return a=tn(a),a.tag=3,a.payload={element:null},a.callback=function(){Dr(e,t)},a}function td(e){return e=tn(e),e.tag=3,e}function ad(e,t,a,n){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var r=n.value;e.payload=function(){return l(r)},e.callback=function(){ed(t,a,n)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){ed(t,a,n),typeof l!="function"&&(sn===null?sn=new Set([this]):sn.add(this));var m=n.stack;this.componentDidCatch(n.value,{componentStack:m!==null?m:""})})}function hp(e,t,a,n,l){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&hl(t,a,l,!0),a=Gt.current,a!==null){switch(a.tag){case 31:case 13:return ea===null?Xr():a.alternate===null&&lt===0&&(lt=3),a.flags&=-257,a.flags|=65536,a.lanes=l,n===xr?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),ls(e,n,l)),!1;case 22:return a.flags|=65536,n===xr?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),ls(e,n,l)),!1}throw Error(c(435,a.tag))}return ls(e,n,l),Xr(),!1}if(Ce)return t=Gt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,n!==$u&&(e=Error(c(422),{cause:n}),ei(Ft(e,a)))):(n!==$u&&(t=Error(c(423),{cause:n}),ei(Ft(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,n=Ft(n,a),l=_o(e.stateNode,n,l),oo(e,l),lt!==4&&(lt=2)),!1;var r=Error(c(520),{cause:n});if(r=Ft(r,a),vi===null?vi=[r]:vi.push(r),lt!==4&&(lt=2),t===null)return!0;n=Ft(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=_o(a.stateNode,n,e),oo(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(sn===null||!sn.has(r))))return a.flags|=65536,l&=-l,a.lanes|=l,l=td(l),ad(l,e,a,n),oo(a,l),!1}a=a.return}while(a!==null);return!1}var Co=Error(c(461)),ht=!1;function wt(e,t,a,n){t.child=e===null?rf(t,null,a,n):Zn(t,e.child,a,n)}function nd(e,t,a,n,l){a=a.render;var r=t.ref;if("ref"in n){var s={};for(var m in n)m!=="ref"&&(s[m]=n[m])}else s=n;return Gn(t),n=po(e,t,a,s,r,l),m=go(),e!==null&&!ht?(xo(e,t,l),La(e,t,l)):(Ce&&m&&Wu(t),t.flags|=1,wt(e,t,n,l),t.child)}function ld(e,t,a,n,l){if(e===null){var r=a.type;return typeof r=="function"&&!Ju(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,id(e,t,r,n,l)):(e=fr(a.type,null,n,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Xo(e,l)){var s=r.memoizedProps;if(a=a.compare,a=a!==null?a:$l,a(s,n)&&e.ref===t.ref)return La(e,t,l)}return t.flags|=1,e=Da(r,n),e.ref=t.ref,e.return=t,t.child=e}function id(e,t,a,n,l){if(e!==null){var r=e.memoizedProps;if($l(r,n)&&e.ref===t.ref)if(ht=!1,t.pendingProps=n=r,Xo(e,l))(e.flags&131072)!==0&&(ht=!0);else return t.lanes=e.lanes,La(e,t,l)}return Uo(e,t,a,n,l)}function rd(e,t,a,n){var l=n.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(n=t.child=e.child,l=0;n!==null;)l=l|n.lanes|n.childLanes,n=n.sibling;n=l&~r}else n=0,t.child=null;return ud(e,t,r,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&pr(t,r!==null?r.cachePool:null),r!==null?sf(t,r):co(),cf(t);else return n=t.lanes=536870912,ud(e,t,r!==null?r.baseLanes|a:a,a,n)}else r!==null?(pr(t,r.cachePool),sf(t,r),ln(),t.memoizedState=null):(e!==null&&pr(t,null),co(),ln());return wt(e,t,l,a),t.child}function di(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ud(e,t,a,n,l){var r=lo();return r=r===null?null:{parent:ft._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&pr(t,null),co(),cf(t),e!==null&&hl(e,t,n,!0),t.childLanes=l,null}function Mr(e,t){return t=_r({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function od(e,t,a){return Zn(t,e.child,null,a),e=Mr(t,t.pendingProps),e.flags|=2,Xt(t),t.memoizedState=null,e}function mp(e,t,a){var n=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ce){if(n.mode==="hidden")return e=Mr(t,n),t.lanes=536870912,di(null,e);if(ho(t),(e=ke)?(e=bh(e,It),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Fa!==null?{id:xa,overflow:ya}:null,retryLane:536870912,hydrationErrors:null},a=Vc(e),a.return=t,t.child=a,St=t,ke=null)):e=null,e===null)throw Pa(t);return t.lanes=536870912,null}return Mr(t,n)}var r=e.memoizedState;if(r!==null){var s=r.dehydrated;if(ho(t),l)if(t.flags&256)t.flags&=-257,t=od(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(ht||hl(e,t,a,!1),l=(a&e.childLanes)!==0,ht||l){if(n=Ke,n!==null&&(s=T(n,a),s!==0&&s!==r.retryLane))throw r.retryLane=s,Hn(e,s),Lt(n,e,s),Co;Xr(),t=od(e,t,a)}else e=r.treeContext,ke=ta(s.nextSibling),St=t,Ce=!0,$a=null,It=!1,e!==null&&Kc(t,e),t=Mr(t,n),t.flags|=4096;return t}return e=Da(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Or(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Uo(e,t,a,n,l){return Gn(t),a=po(e,t,a,n,void 0,l),n=go(),e!==null&&!ht?(xo(e,t,l),La(e,t,l)):(Ce&&n&&Wu(t),t.flags|=1,wt(e,t,a,l),t.child)}function sd(e,t,a,n,l,r){return Gn(t),t.updateQueue=null,a=df(t,n,a,l),ff(e),n=go(),e!==null&&!ht?(xo(e,t,r),La(e,t,r)):(Ce&&n&&Wu(t),t.flags|=1,wt(e,t,a,r),t.child)}function cd(e,t,a,n,l){if(Gn(t),t.stateNode===null){var r=sl,s=a.contextType;typeof s=="object"&&s!==null&&(r=jt(s)),r=new a(n,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Oo,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=n,r.state=t.memoizedState,r.refs={},ro(t),s=a.contextType,r.context=typeof s=="object"&&s!==null?jt(s):sl,r.state=t.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(Mo(t,a,s,n),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&Oo.enqueueReplaceState(r,r.state,null),ui(t,n,r,l),ri(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){r=t.stateNode;var m=t.memoizedProps,b=Kn(a,m);r.props=b;var A=r.context,B=a.contextType;s=sl,typeof B=="object"&&B!==null&&(s=jt(B));var q=a.getDerivedStateFromProps;B=typeof q=="function"||typeof r.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,B||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(m||A!==s)&&Ff(t,r,n,s),en=!1;var D=t.memoizedState;r.state=D,ui(t,n,r,l),ri(),A=t.memoizedState,m||D!==A||en?(typeof q=="function"&&(Mo(t,a,q,n),A=t.memoizedState),(b=en||Wf(t,a,b,n,D,A,s))?(B||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=A),r.props=n,r.state=A,r.context=s,n=b):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{r=t.stateNode,uo(e,t),s=t.memoizedProps,B=Kn(a,s),r.props=B,q=t.pendingProps,D=r.context,A=a.contextType,b=sl,typeof A=="object"&&A!==null&&(b=jt(A)),m=a.getDerivedStateFromProps,(A=typeof m=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==q||D!==b)&&Ff(t,r,n,b),en=!1,D=t.memoizedState,r.state=D,ui(t,n,r,l),ri();var U=t.memoizedState;s!==q||D!==U||en||e!==null&&e.dependencies!==null&&hr(e.dependencies)?(typeof m=="function"&&(Mo(t,a,m,n),U=t.memoizedState),(B=en||Wf(t,a,B,n,D,U,b)||e!==null&&e.dependencies!==null&&hr(e.dependencies))?(A||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(n,U,b),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(n,U,b)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=U),r.props=n,r.state=U,r.context=b,n=B):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),n=!1)}return r=n,Or(e,t),n=(t.flags&128)!==0,r||n?(r=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&n?(t.child=Zn(t,e.child,null,l),t.child=Zn(t,null,a,l)):wt(e,t,a,l),t.memoizedState=r.state,e=t.child):e=La(e,t,l),e}function fd(e,t,a,n){return Yn(),t.flags|=256,wt(e,t,a,n),t.child}var Lo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ho(e){return{baseLanes:e,cachePool:Ic()}}function Bo(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Vt),e}function dd(e,t,a){var n=t.pendingProps,l=!1,r=(t.flags&128)!==0,s;if((s=r)||(s=e!==null&&e.memoizedState===null?!1:(ot.current&2)!==0),s&&(l=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ce){if(l?nn(t):ln(),(e=ke)?(e=bh(e,It),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Fa!==null?{id:xa,overflow:ya}:null,retryLane:536870912,hydrationErrors:null},a=Vc(e),a.return=t,t.child=a,St=t,ke=null)):e=null,e===null)throw Pa(t);return bs(e)?t.lanes=32:t.lanes=536870912,null}var m=n.children;return n=n.fallback,l?(ln(),l=t.mode,m=_r({mode:"hidden",children:m},l),n=Bn(n,l,a,null),m.return=t,n.return=t,m.sibling=n,t.child=m,n=t.child,n.memoizedState=Ho(a),n.childLanes=Bo(e,s,a),t.memoizedState=Lo,di(null,n)):(nn(t),Yo(t,m))}var b=e.memoizedState;if(b!==null&&(m=b.dehydrated,m!==null)){if(r)t.flags&256?(nn(t),t.flags&=-257,t=qo(e,t,a)):t.memoizedState!==null?(ln(),t.child=e.child,t.flags|=128,t=null):(ln(),m=n.fallback,l=t.mode,n=_r({mode:"visible",children:n.children},l),m=Bn(m,l,a,null),m.flags|=2,n.return=t,m.return=t,n.sibling=m,t.child=n,Zn(t,e.child,null,a),n=t.child,n.memoizedState=Ho(a),n.childLanes=Bo(e,s,a),t.memoizedState=Lo,t=di(null,n));else if(nn(t),bs(m)){if(s=m.nextSibling&&m.nextSibling.dataset,s)var A=s.dgst;s=A,n=Error(c(419)),n.stack="",n.digest=s,ei({value:n,source:null,stack:null}),t=qo(e,t,a)}else if(ht||hl(e,t,a,!1),s=(a&e.childLanes)!==0,ht||s){if(s=Ke,s!==null&&(n=T(s,a),n!==0&&n!==b.retryLane))throw b.retryLane=n,Hn(e,n),Lt(s,e,n),Co;vs(m)||Xr(),t=qo(e,t,a)}else vs(m)?(t.flags|=192,t.child=e.child,t=null):(e=b.treeContext,ke=ta(m.nextSibling),St=t,Ce=!0,$a=null,It=!1,e!==null&&Kc(t,e),t=Yo(t,n.children),t.flags|=4096);return t}return l?(ln(),m=n.fallback,l=t.mode,b=e.child,A=b.sibling,n=Da(b,{mode:"hidden",children:n.children}),n.subtreeFlags=b.subtreeFlags&65011712,A!==null?m=Da(A,m):(m=Bn(m,l,a,null),m.flags|=2),m.return=t,n.return=t,n.sibling=m,t.child=n,di(null,n),n=t.child,m=e.child.memoizedState,m===null?m=Ho(a):(l=m.cachePool,l!==null?(b=ft._currentValue,l=l.parent!==b?{parent:b,pool:b}:l):l=Ic(),m={baseLanes:m.baseLanes|a,cachePool:l}),n.memoizedState=m,n.childLanes=Bo(e,s,a),t.memoizedState=Lo,di(e.child,n)):(nn(t),a=e.child,e=a.sibling,a=Da(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=a,t.memoizedState=null,a)}function Yo(e,t){return t=_r({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function _r(e,t){return e=qt(22,e,null,t),e.lanes=0,e}function qo(e,t,a){return Zn(t,e.child,null,a),e=Yo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hd(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),eo(e.return,t,a)}function Go(e,t,a,n,l,r){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:l,treeForkCount:r}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=a,s.tailMode=l,s.treeForkCount=r)}function md(e,t,a){var n=t.pendingProps,l=n.revealOrder,r=n.tail;n=n.children;var s=ot.current,m=(s&2)!==0;if(m?(s=s&1|2,t.flags|=128):s&=1,Z(ot,s),wt(e,t,n,a),n=Ce?Il:0,!m&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hd(e,a,t);else if(e.tag===19)hd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&Sr(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),Go(t,!1,l,a,r,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Sr(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}Go(t,!0,a,null,r,n);break;case"together":Go(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function La(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),on|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(hl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=Da(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Da(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Xo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&hr(e)))}function pp(e,t,a){switch(t.tag){case 3:it(t,t.stateNode.containerInfo),Ia(t,ft,e.memoizedState.cache),Yn();break;case 27:case 5:Nn(t);break;case 4:it(t,t.stateNode.containerInfo);break;case 10:Ia(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ho(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(nn(t),t.flags|=128,null):(a&t.child.childLanes)!==0?dd(e,t,a):(nn(t),e=La(e,t,a),e!==null?e.sibling:null);nn(t);break;case 19:var l=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(hl(e,t,a,!1),n=(a&t.childLanes)!==0),l){if(n)return md(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Z(ot,ot.current),n)break;return null;case 22:return t.lanes=0,rd(e,t,a,t.pendingProps);case 24:Ia(t,ft,e.memoizedState.cache)}return La(e,t,a)}function pd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)ht=!0;else{if(!Xo(e,a)&&(t.flags&128)===0)return ht=!1,pp(e,t,a);ht=(e.flags&131072)!==0}else ht=!1,Ce&&(t.flags&1048576)!==0&&Jc(t,Il,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=Qn(t.elementType),t.type=e,typeof e=="function")Ju(e)?(n=Kn(e,n),t.tag=1,t=cd(null,t,e,n,a)):(t.tag=0,t=Uo(null,t,e,n,a));else{if(e!=null){var l=e.$$typeof;if(l===je){t.tag=11,t=nd(null,t,e,n,a);break e}else if(l===R){t.tag=14,t=ld(null,t,e,n,a);break e}}throw t=Ge(e)||e,Error(c(306,t,""))}}return t;case 0:return Uo(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,l=Kn(n,t.pendingProps),cd(e,t,n,l,a);case 3:e:{if(it(t,t.stateNode.containerInfo),e===null)throw Error(c(387));n=t.pendingProps;var r=t.memoizedState;l=r.element,uo(e,t),ui(t,n,null,a);var s=t.memoizedState;if(n=s.cache,Ia(t,ft,n),n!==r.cache&&to(t,[ft],a,!0),ri(),n=s.element,r.isDehydrated)if(r={element:n,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=fd(e,t,n,a);break e}else if(n!==l){l=Ft(Error(c(424)),t),ei(l),t=fd(e,t,n,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ke=ta(e.firstChild),St=t,Ce=!0,$a=null,It=!0,a=rf(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Yn(),n===l){t=La(e,t,a);break e}wt(e,t,n,a)}t=t.child}return t;case 26:return Or(e,t),e===null?(a=Th(t.type,null,t.pendingProps,null))?t.memoizedState=a:Ce||(a=t.type,e=t.pendingProps,n=Wr(he.current).createElement(a),n[F]=t,n[ee]=e,Nt(n,a,e),Fe(n),t.stateNode=n):t.memoizedState=Th(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Nn(t),e===null&&Ce&&(n=t.stateNode=wh(t.type,t.pendingProps,he.current),St=t,It=!0,l=ke,hn(t.type)?(Ss=l,ke=ta(n.firstChild)):ke=l),wt(e,t,t.pendingProps.children,a),Or(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ce&&((l=n=ke)&&(n=Zp(n,t.type,t.pendingProps,It),n!==null?(t.stateNode=n,St=t,ke=ta(n.firstChild),It=!1,l=!0):l=!1),l||Pa(t)),Nn(t),l=t.type,r=t.pendingProps,s=e!==null?e.memoizedProps:null,n=r.children,gs(l,r)?n=null:s!==null&&gs(l,s)&&(t.flags|=32),t.memoizedState!==null&&(l=po(e,t,rp,null,null,a),Ri._currentValue=l),Or(e,t),wt(e,t,n,a),t.child;case 6:return e===null&&Ce&&((e=a=ke)&&(a=Jp(a,t.pendingProps,It),a!==null?(t.stateNode=a,St=t,ke=null,e=!0):e=!1),e||Pa(t)),null;case 13:return dd(e,t,a);case 4:return it(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Zn(t,null,n,a):wt(e,t,n,a),t.child;case 11:return nd(e,t,t.type,t.pendingProps,a);case 7:return wt(e,t,t.pendingProps,a),t.child;case 8:return wt(e,t,t.pendingProps.children,a),t.child;case 12:return wt(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,Ia(t,t.type,n.value),wt(e,t,n.children,a),t.child;case 9:return l=t.type._context,n=t.pendingProps.children,Gn(t),l=jt(l),n=n(l),t.flags|=1,wt(e,t,n,a),t.child;case 14:return ld(e,t,t.type,t.pendingProps,a);case 15:return id(e,t,t.type,t.pendingProps,a);case 19:return md(e,t,a);case 31:return mp(e,t,a);case 22:return rd(e,t,a,t.pendingProps);case 24:return Gn(t),n=jt(ft),e===null?(l=lo(),l===null&&(l=Ke,r=ao(),l.pooledCache=r,r.refCount++,r!==null&&(l.pooledCacheLanes|=a),l=r),t.memoizedState={parent:n,cache:l},ro(t),Ia(t,ft,l)):((e.lanes&a)!==0&&(uo(e,t),ui(t,null,null,a),ri()),l=e.memoizedState,r=t.memoizedState,l.parent!==n?(l={parent:n,cache:n},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Ia(t,ft,n)):(n=r.cache,Ia(t,ft,n),n!==l.cache&&to(t,[ft],a,!0))),wt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Ha(e){e.flags|=4}function Qo(e,t,a,n,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Xd())e.flags|=8192;else throw Vn=xr,io}else e.flags&=-16777217}function gd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Mh(t))if(Xd())e.flags|=8192;else throw Vn=xr,io}function Cr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Dn():536870912,e.lanes|=t,El|=t)}function hi(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function We(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags&65011712,n|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function gp(e,t,a){var n=t.pendingProps;switch(Fu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(t),null;case 1:return We(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),_a(ft),Pe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(dl(t)?Ha(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Pu())),We(t),null;case 26:var l=t.type,r=t.memoizedState;return e===null?(Ha(t),r!==null?(We(t),gd(t,r)):(We(t),Qo(t,l,null,n,a))):r?r!==e.memoizedState?(Ha(t),We(t),gd(t,r)):(We(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&Ha(t),We(t),Qo(t,l,e,n,a)),null;case 27:if(Pn(t),a=he.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Ha(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return We(t),null}e=$.current,dl(t)?kc(t):(e=wh(l,n,a),t.stateNode=e,Ha(t))}return We(t),null;case 5:if(Pn(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Ha(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return We(t),null}if(r=$.current,dl(t))kc(t);else{var s=Wr(he.current);switch(r){case 1:r=s.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:r=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":r=s.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":r=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":r=s.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof n.is=="string"?s.createElement("select",{is:n.is}):s.createElement("select"),n.multiple?r.multiple=!0:n.size&&(r.size=n.size);break;default:r=typeof n.is=="string"?s.createElement(l,{is:n.is}):s.createElement(l)}}r[F]=t,r[ee]=n;e:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)r.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=r;e:switch(Nt(r,l,n),l){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Ha(t)}}return We(t),Qo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&Ha(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(c(166));if(e=he.current,dl(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,l=St,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}e[F]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||dh(e.nodeValue,a)),e||Pa(t,!0)}else e=Wr(e).createTextNode(n),e[F]=t,t.stateNode=e}return We(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=dl(t),a!==null){if(e===null){if(!n)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[F]=t}else Yn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;We(t),e=!1}else a=Pu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Xt(t),t):(Xt(t),null);if((t.flags&128)!==0)throw Error(c(558))}return We(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=dl(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[F]=t}else Yn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;We(t),l=!1}else l=Pu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Xt(t),t):(Xt(t),null)}return Xt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==l&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Cr(t,t.updateQueue),We(t),null);case 4:return Pe(),e===null&&fs(t.stateNode.containerInfo),We(t),null;case 10:return _a(t.type),We(t),null;case 19:if(H(ot),n=t.memoizedState,n===null)return We(t),null;if(l=(t.flags&128)!==0,r=n.rendering,r===null)if(l)hi(n,!1);else{if(lt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=Sr(e),r!==null){for(t.flags|=128,hi(n,!1),e=r.updateQueue,t.updateQueue=e,Cr(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Qc(a,e),a=a.sibling;return Z(ot,ot.current&1|2),Ce&&Ma(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&rt()>Yr&&(t.flags|=128,l=!0,hi(n,!1),t.lanes=4194304)}else{if(!l)if(e=Sr(r),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Cr(t,e),hi(n,!0),n.tail===null&&n.tailMode==="hidden"&&!r.alternate&&!Ce)return We(t),null}else 2*rt()-n.renderingStartTime>Yr&&a!==536870912&&(t.flags|=128,l=!0,hi(n,!1),t.lanes=4194304);n.isBackwards?(r.sibling=t.child,t.child=r):(e=n.last,e!==null?e.sibling=r:t.child=r,n.last=r)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=rt(),e.sibling=null,a=ot.current,Z(ot,l?a&1|2:a&1),Ce&&Ma(t,n.treeForkCount),e):(We(t),null);case 22:case 23:return Xt(t),fo(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(We(t),t.subtreeFlags&6&&(t.flags|=8192)):We(t),a=t.updateQueue,a!==null&&Cr(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&H(Xn),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),_a(ft),We(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function xp(e,t){switch(Fu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _a(ft),Pe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Pn(t),null;case 31:if(t.memoizedState!==null){if(Xt(t),t.alternate===null)throw Error(c(340));Yn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Xt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Yn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(ot),null;case 4:return Pe(),null;case 10:return _a(t.type),null;case 22:case 23:return Xt(t),fo(),e!==null&&H(Xn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return _a(ft),null;case 25:return null;default:return null}}function xd(e,t){switch(Fu(t),t.tag){case 3:_a(ft),Pe();break;case 26:case 27:case 5:Pn(t);break;case 4:Pe();break;case 31:t.memoizedState!==null&&Xt(t);break;case 13:Xt(t);break;case 19:H(ot);break;case 10:_a(t.type);break;case 22:case 23:Xt(t),fo(),e!==null&&H(Xn);break;case 24:_a(ft)}}function mi(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var l=n.next;a=l;do{if((a.tag&e)===e){n=void 0;var r=a.create,s=a.inst;n=r(),s.destroy=n}a=a.next}while(a!==l)}}catch(m){Qe(t,t.return,m)}}function rn(e,t,a){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var r=l.next;n=r;do{if((n.tag&e)===e){var s=n.inst,m=s.destroy;if(m!==void 0){s.destroy=void 0,l=t;var b=a,A=m;try{A()}catch(B){Qe(l,b,B)}}}n=n.next}while(n!==r)}}catch(B){Qe(t,t.return,B)}}function yd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{of(t,a)}catch(n){Qe(e,e.return,n)}}}function vd(e,t,a){a.props=Kn(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){Qe(e,t,n)}}function pi(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(l){Qe(e,t,l)}}function va(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(l){Qe(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){Qe(e,t,l)}else a.current=null}function bd(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(l){Qe(e,e.return,l)}}function Vo(e,t,a){try{var n=e.stateNode;Yp(n,e.type,a,t),n[ee]=t}catch(l){Qe(e,e.return,l)}}function Sd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&hn(e.type)||e.tag===4}function Zo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&hn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Jo(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=za));else if(n!==4&&(n===27&&hn(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Jo(e,t,a),e=e.sibling;e!==null;)Jo(e,t,a),e=e.sibling}function Ur(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&hn(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ur(e,t,a),e=e.sibling;e!==null;)Ur(e,t,a),e=e.sibling}function jd(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Nt(t,n,a),t[F]=e,t[ee]=a}catch(r){Qe(e,e.return,r)}}var Ba=!1,mt=!1,Ko=!1,wd=typeof WeakSet=="function"?WeakSet:Set,vt=null;function yp(e,t){if(e=e.containerInfo,ms=au,e=Cc(e),Yu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var l=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var s=0,m=-1,b=-1,A=0,B=0,q=e,D=null;t:for(;;){for(var U;q!==a||l!==0&&q.nodeType!==3||(m=s+l),q!==r||n!==0&&q.nodeType!==3||(b=s+n),q.nodeType===3&&(s+=q.nodeValue.length),(U=q.firstChild)!==null;)D=q,q=U;for(;;){if(q===e)break t;if(D===a&&++A===l&&(m=s),D===r&&++B===n&&(b=s),(U=q.nextSibling)!==null)break;q=D,D=q.parentNode}q=U}a=m===-1||b===-1?null:{start:m,end:b}}else a=null}a=a||{start:0,end:0}}else a=null;for(ps={focusedElem:e,selectionRange:a},au=!1,vt=t;vt!==null;)if(t=vt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,vt=e;else for(;vt!==null;){switch(t=vt,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,l=r.memoizedProps,r=r.memoizedState,n=a.stateNode;try{var ae=Kn(a.type,l);e=n.getSnapshotBeforeUpdate(ae,r),n.__reactInternalSnapshotBeforeUpdate=e}catch(fe){Qe(a,a.return,fe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)ys(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ys(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,vt=e;break}vt=t.return}}function Nd(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:qa(e,a),n&4&&mi(5,a);break;case 1:if(qa(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(s){Qe(a,a.return,s)}else{var l=Kn(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){Qe(a,a.return,s)}}n&64&&yd(a),n&512&&pi(a,a.return);break;case 3:if(qa(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{of(e,t)}catch(s){Qe(a,a.return,s)}}break;case 27:t===null&&n&4&&jd(a);case 26:case 5:qa(e,a),t===null&&n&4&&bd(a),n&512&&pi(a,a.return);break;case 12:qa(e,a);break;case 31:qa(e,a),n&4&&Rd(e,a);break;case 13:qa(e,a),n&4&&zd(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Rp.bind(null,a),Kp(e,a))));break;case 22:if(n=a.memoizedState!==null||Ba,!n){t=t!==null&&t.memoizedState!==null||mt,l=Ba;var r=mt;Ba=n,(mt=t)&&!r?Ga(e,a,(a.subtreeFlags&8772)!==0):qa(e,a),Ba=l,mt=r}break;case 30:break;default:qa(e,a)}}function Ed(e){var t=e.alternate;t!==null&&(e.alternate=null,Ed(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&tt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,Ot=!1;function Ya(e,t,a){for(a=a.child;a!==null;)Td(e,t,a),a=a.sibling}function Td(e,t,a){if(Ie&&typeof Ie.onCommitFiberUnmount=="function")try{Ie.onCommitFiberUnmount(Tn,a)}catch{}switch(a.tag){case 26:mt||va(a,t),Ya(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:mt||va(a,t);var n=$e,l=Ot;hn(a.type)&&($e=a.stateNode,Ot=!1),Ya(e,t,a),Ni(a.stateNode),$e=n,Ot=l;break;case 5:mt||va(a,t);case 6:if(n=$e,l=Ot,$e=null,Ya(e,t,a),$e=n,Ot=l,$e!==null)if(Ot)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode)}catch(r){Qe(a,t,r)}else try{$e.removeChild(a.stateNode)}catch(r){Qe(a,t,r)}break;case 18:$e!==null&&(Ot?(e=$e,yh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),_l(e)):yh($e,a.stateNode));break;case 4:n=$e,l=Ot,$e=a.stateNode.containerInfo,Ot=!0,Ya(e,t,a),$e=n,Ot=l;break;case 0:case 11:case 14:case 15:rn(2,a,t),mt||rn(4,a,t),Ya(e,t,a);break;case 1:mt||(va(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&vd(a,t,n)),Ya(e,t,a);break;case 21:Ya(e,t,a);break;case 22:mt=(n=mt)||a.memoizedState!==null,Ya(e,t,a),mt=n;break;default:Ya(e,t,a)}}function Rd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{_l(e)}catch(a){Qe(t,t.return,a)}}}function zd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{_l(e)}catch(a){Qe(t,t.return,a)}}function vp(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new wd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new wd),t;default:throw Error(c(435,e.tag))}}function Lr(e,t){var a=vp(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var l=zp.bind(null,e,n);n.then(l,l)}})}function _t(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var l=a[n],r=e,s=t,m=s;e:for(;m!==null;){switch(m.tag){case 27:if(hn(m.type)){$e=m.stateNode,Ot=!1;break e}break;case 5:$e=m.stateNode,Ot=!1;break e;case 3:case 4:$e=m.stateNode.containerInfo,Ot=!0;break e}m=m.return}if($e===null)throw Error(c(160));Td(r,s,l),$e=null,Ot=!1,r=l.alternate,r!==null&&(r.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Ad(t,e),t=t.sibling}var ha=null;function Ad(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_t(t,e),Ct(e),n&4&&(rn(3,e,e.return),mi(3,e),rn(5,e,e.return));break;case 1:_t(t,e),Ct(e),n&512&&(mt||a===null||va(a,a.return)),n&64&&Ba&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var l=ha;if(_t(t,e),Ct(e),n&512&&(mt||a===null||va(a,a.return)),n&4){var r=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(n){case"title":r=l.getElementsByTagName("title")[0],(!r||r[et]||r[F]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(n),l.head.insertBefore(r,l.querySelector("head > title"))),Nt(r,n,a),r[F]=e,Fe(r),n=r;break e;case"link":var s=Ah("link","href",l).get(n+(a.href||""));if(s){for(var m=0;m<s.length;m++)if(r=s[m],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(m,1);break t}}r=l.createElement(n),Nt(r,n,a),l.head.appendChild(r);break;case"meta":if(s=Ah("meta","content",l).get(n+(a.content||""))){for(m=0;m<s.length;m++)if(r=s[m],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(m,1);break t}}r=l.createElement(n),Nt(r,n,a),l.head.appendChild(r);break;default:throw Error(c(468,n))}r[F]=e,Fe(r),n=r}e.stateNode=n}else Dh(l,e.type,e.stateNode);else e.stateNode=zh(l,n,e.memoizedProps);else r!==n?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,n===null?Dh(l,e.type,e.stateNode):zh(l,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Vo(e,e.memoizedProps,a.memoizedProps)}break;case 27:_t(t,e),Ct(e),n&512&&(mt||a===null||va(a,a.return)),a!==null&&n&4&&Vo(e,e.memoizedProps,a.memoizedProps);break;case 5:if(_t(t,e),Ct(e),n&512&&(mt||a===null||va(a,a.return)),e.flags&32){l=e.stateNode;try{al(l,"")}catch(ae){Qe(e,e.return,ae)}}n&4&&e.stateNode!=null&&(l=e.memoizedProps,Vo(e,l,a!==null?a.memoizedProps:l)),n&1024&&(Ko=!0);break;case 6:if(_t(t,e),Ct(e),n&4){if(e.stateNode===null)throw Error(c(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(ae){Qe(e,e.return,ae)}}break;case 3:if(Pr=null,l=ha,ha=Fr(t.containerInfo),_t(t,e),ha=l,Ct(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{_l(t.containerInfo)}catch(ae){Qe(e,e.return,ae)}Ko&&(Ko=!1,Dd(e));break;case 4:n=ha,ha=Fr(e.stateNode.containerInfo),_t(t,e),Ct(e),ha=n;break;case 12:_t(t,e),Ct(e);break;case 31:_t(t,e),Ct(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Lr(e,n)));break;case 13:_t(t,e),Ct(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Br=rt()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Lr(e,n)));break;case 22:l=e.memoizedState!==null;var b=a!==null&&a.memoizedState!==null,A=Ba,B=mt;if(Ba=A||l,mt=B||b,_t(t,e),mt=B,Ba=A,Ct(e),n&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||b||Ba||mt||kn(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){b=a=t;try{if(r=b.stateNode,l)s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{m=b.stateNode;var q=b.memoizedProps.style,D=q!=null&&q.hasOwnProperty("display")?q.display:null;m.style.display=D==null||typeof D=="boolean"?"":(""+D).trim()}}catch(ae){Qe(b,b.return,ae)}}}else if(t.tag===6){if(a===null){b=t;try{b.stateNode.nodeValue=l?"":b.memoizedProps}catch(ae){Qe(b,b.return,ae)}}}else if(t.tag===18){if(a===null){b=t;try{var U=b.stateNode;l?vh(U,!0):vh(b.stateNode,!1)}catch(ae){Qe(b,b.return,ae)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Lr(e,a))));break;case 19:_t(t,e),Ct(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Lr(e,n)));break;case 30:break;case 21:break;default:_t(t,e),Ct(e)}}function Ct(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(Sd(n)){a=n;break}n=n.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var l=a.stateNode,r=Zo(e);Ur(e,r,l);break;case 5:var s=a.stateNode;a.flags&32&&(al(s,""),a.flags&=-33);var m=Zo(e);Ur(e,m,s);break;case 3:case 4:var b=a.stateNode.containerInfo,A=Zo(e);Jo(e,A,b);break;default:throw Error(c(161))}}catch(B){Qe(e,e.return,B)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Dd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Dd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function qa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Nd(e,t.alternate,t),t=t.sibling}function kn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:rn(4,t,t.return),kn(t);break;case 1:va(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&vd(t,t.return,a),kn(t);break;case 27:Ni(t.stateNode);case 26:case 5:va(t,t.return),kn(t);break;case 22:t.memoizedState===null&&kn(t);break;case 30:kn(t);break;default:kn(t)}e=e.sibling}}function Ga(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,l=e,r=t,s=r.flags;switch(r.tag){case 0:case 11:case 15:Ga(l,r,a),mi(4,r);break;case 1:if(Ga(l,r,a),n=r,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(A){Qe(n,n.return,A)}if(n=r,l=n.updateQueue,l!==null){var m=n.stateNode;try{var b=l.shared.hiddenCallbacks;if(b!==null)for(l.shared.hiddenCallbacks=null,l=0;l<b.length;l++)uf(b[l],m)}catch(A){Qe(n,n.return,A)}}a&&s&64&&yd(r),pi(r,r.return);break;case 27:jd(r);case 26:case 5:Ga(l,r,a),a&&n===null&&s&4&&bd(r),pi(r,r.return);break;case 12:Ga(l,r,a);break;case 31:Ga(l,r,a),a&&s&4&&Rd(l,r);break;case 13:Ga(l,r,a),a&&s&4&&zd(l,r);break;case 22:r.memoizedState===null&&Ga(l,r,a),pi(r,r.return);break;case 30:break;default:Ga(l,r,a)}t=t.sibling}}function ko(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ti(a))}function Wo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ti(e))}function ma(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Md(e,t,a,n),t=t.sibling}function Md(e,t,a,n){var l=t.flags;switch(t.tag){case 0:case 11:case 15:ma(e,t,a,n),l&2048&&mi(9,t);break;case 1:ma(e,t,a,n);break;case 3:ma(e,t,a,n),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ti(e)));break;case 12:if(l&2048){ma(e,t,a,n),e=t.stateNode;try{var r=t.memoizedProps,s=r.id,m=r.onPostCommit;typeof m=="function"&&m(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(b){Qe(t,t.return,b)}}else ma(e,t,a,n);break;case 31:ma(e,t,a,n);break;case 13:ma(e,t,a,n);break;case 23:break;case 22:r=t.stateNode,s=t.alternate,t.memoizedState!==null?r._visibility&2?ma(e,t,a,n):gi(e,t):r._visibility&2?ma(e,t,a,n):(r._visibility|=2,jl(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),l&2048&&ko(s,t);break;case 24:ma(e,t,a,n),l&2048&&Wo(t.alternate,t);break;default:ma(e,t,a,n)}}function jl(e,t,a,n,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,s=t,m=a,b=n,A=s.flags;switch(s.tag){case 0:case 11:case 15:jl(r,s,m,b,l),mi(8,s);break;case 23:break;case 22:var B=s.stateNode;s.memoizedState!==null?B._visibility&2?jl(r,s,m,b,l):gi(r,s):(B._visibility|=2,jl(r,s,m,b,l)),l&&A&2048&&ko(s.alternate,s);break;case 24:jl(r,s,m,b,l),l&&A&2048&&Wo(s.alternate,s);break;default:jl(r,s,m,b,l)}t=t.sibling}}function gi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,l=n.flags;switch(n.tag){case 22:gi(a,n),l&2048&&ko(n.alternate,n);break;case 24:gi(a,n),l&2048&&Wo(n.alternate,n);break;default:gi(a,n)}t=t.sibling}}var xi=8192;function wl(e,t,a){if(e.subtreeFlags&xi)for(e=e.child;e!==null;)Od(e,t,a),e=e.sibling}function Od(e,t,a){switch(e.tag){case 26:wl(e,t,a),e.flags&xi&&e.memoizedState!==null&&ig(a,ha,e.memoizedState,e.memoizedProps);break;case 5:wl(e,t,a);break;case 3:case 4:var n=ha;ha=Fr(e.stateNode.containerInfo),wl(e,t,a),ha=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=xi,xi=16777216,wl(e,t,a),xi=n):wl(e,t,a));break;default:wl(e,t,a)}}function _d(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function yi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];vt=n,Ud(n,e)}_d(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Cd(e),e=e.sibling}function Cd(e){switch(e.tag){case 0:case 11:case 15:yi(e),e.flags&2048&&rn(9,e,e.return);break;case 3:yi(e);break;case 12:yi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Hr(e)):yi(e);break;default:yi(e)}}function Hr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];vt=n,Ud(n,e)}_d(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:rn(8,t,t.return),Hr(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Hr(t));break;default:Hr(t)}e=e.sibling}}function Ud(e,t){for(;vt!==null;){var a=vt;switch(a.tag){case 0:case 11:case 15:rn(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:ti(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,vt=n;else e:for(a=e;vt!==null;){n=vt;var l=n.sibling,r=n.return;if(Ed(n),n===a){vt=null;break e}if(l!==null){l.return=r,vt=l;break e}vt=r}}}var bp={getCacheForType:function(e){var t=jt(ft),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return jt(ft).controller.signal}},Sp=typeof WeakMap=="function"?WeakMap:Map,qe=0,Ke=null,Ne=null,Re=0,Xe=0,Qt=null,un=!1,Nl=!1,Fo=!1,Xa=0,lt=0,on=0,Wn=0,$o=0,Vt=0,El=0,vi=null,Ut=null,Po=!1,Br=0,Ld=0,Yr=1/0,qr=null,sn=null,xt=0,cn=null,Tl=null,Qa=0,Io=0,es=null,Hd=null,bi=0,ts=null;function Zt(){return(qe&2)!==0&&Re!==0?Re&-Re:_.T!==null?us():K()}function Bd(){if(Vt===0)if((Re&536870912)===0||Ce){var e=Rn;Rn<<=1,(Rn&3932160)===0&&(Rn=262144),Vt=e}else Vt=536870912;return e=Gt.current,e!==null&&(e.flags|=32),Vt}function Lt(e,t,a){(e===Ke&&(Xe===2||Xe===9)||e.cancelPendingCommit!==null)&&(Rl(e,0),fn(e,Re,Vt,!1)),ka(e,a),((qe&2)===0||e!==Ke)&&(e===Ke&&((qe&2)===0&&(Wn|=a),lt===4&&fn(e,Re,Vt,!1)),ba(e))}function Yd(e,t,a){if((qe&6)!==0)throw Error(c(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||An(e,t),l=n?Np(e,t):ns(e,t,!0),r=n;do{if(l===0){Nl&&!n&&fn(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!jp(a)){l=ns(e,t,!1),r=!1;continue}if(l===2){if(r=t,e.errorRecoveryDisabledLanes&r)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var m=e;l=vi;var b=m.current.memoizedState.isDehydrated;if(b&&(Rl(m,s).flags|=256),s=ns(m,s,!1),s!==2){if(Fo&&!b){m.errorRecoveryDisabledLanes|=r,Wn|=r,l=4;break e}r=Ut,Ut=l,r!==null&&(Ut===null?Ut=r:Ut.push.apply(Ut,r))}l=s}if(r=!1,l!==2)continue}}if(l===1){Rl(e,0),fn(e,t,0,!0);break}e:{switch(n=e,r=l,r){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:fn(n,t,Vt,!un);break e;case 2:Ut=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(l=Br+300-rt(),10<l)){if(fn(n,t,Vt,!un),zn(n,0,!0)!==0)break e;Qa=t,n.timeoutHandle=gh(qd.bind(null,n,a,Ut,qr,Po,t,Vt,Wn,El,un,r,"Throttled",-0,0),l);break e}qd(n,a,Ut,qr,Po,t,Vt,Wn,El,un,r,null,-0,0)}}break}while(!0);ba(e)}function qd(e,t,a,n,l,r,s,m,b,A,B,q,D,U){if(e.timeoutHandle=-1,q=t.subtreeFlags,q&8192||(q&16785408)===16785408){q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:za},Od(t,r,q);var ae=(r&62914560)===r?Br-rt():(r&4194048)===r?Ld-rt():0;if(ae=rg(q,ae),ae!==null){Qa=r,e.cancelPendingCommit=ae(kd.bind(null,e,t,r,a,n,l,s,m,b,B,q,null,D,U)),fn(e,r,s,!A);return}}kd(e,t,r,a,n,l,s,m,b)}function jp(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var l=a[n],r=l.getSnapshot;l=l.value;try{if(!Yt(r(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fn(e,t,a,n){t&=~$o,t&=~Wn,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var l=t;0<l;){var r=31-Et(l),s=1<<r;n[r]=-1,l&=~s}a!==0&&$i(e,a,t)}function Gr(){return(qe&6)===0?(Si(0),!1):!0}function as(){if(Ne!==null){if(Xe===0)var e=Ne.return;else e=Ne,Oa=qn=null,yo(e),xl=null,ni=0,e=Ne;for(;e!==null;)xd(e.alternate,e),e=e.return;Ne=null}}function Rl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Xp(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Qa=0,as(),Ke=e,Ne=a=Da(e.current,null),Re=t,Xe=0,Qt=null,un=!1,Nl=An(e,t),Fo=!1,El=Vt=$o=Wn=on=lt=0,Ut=vi=null,Po=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var l=31-Et(n),r=1<<l;t|=e[l],n&=~r}return Xa=t,or(),a}function Gd(e,t){ge=null,_.H=fi,t===gl||t===gr?(t=af(),Xe=3):t===io?(t=af(),Xe=4):Xe=t===Co?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Qt=t,Ne===null&&(lt=1,Dr(e,Ft(t,e.current)))}function Xd(){var e=Gt.current;return e===null?!0:(Re&4194048)===Re?ea===null:(Re&62914560)===Re||(Re&536870912)!==0?e===ea:!1}function Qd(){var e=_.H;return _.H=fi,e===null?fi:e}function Vd(){var e=_.A;return _.A=bp,e}function Xr(){lt=4,un||(Re&4194048)!==Re&&Gt.current!==null||(Nl=!0),(on&134217727)===0&&(Wn&134217727)===0||Ke===null||fn(Ke,Re,Vt,!1)}function ns(e,t,a){var n=qe;qe|=2;var l=Qd(),r=Vd();(Ke!==e||Re!==t)&&(qr=null,Rl(e,t)),t=!1;var s=lt;e:do try{if(Xe!==0&&Ne!==null){var m=Ne,b=Qt;switch(Xe){case 8:as(),s=6;break e;case 3:case 2:case 9:case 6:Gt.current===null&&(t=!0);var A=Xe;if(Xe=0,Qt=null,zl(e,m,b,A),a&&Nl){s=0;break e}break;default:A=Xe,Xe=0,Qt=null,zl(e,m,b,A)}}wp(),s=lt;break}catch(B){Gd(e,B)}while(!0);return t&&e.shellSuspendCounter++,Oa=qn=null,qe=n,_.H=l,_.A=r,Ne===null&&(Ke=null,Re=0,or()),s}function wp(){for(;Ne!==null;)Zd(Ne)}function Np(e,t){var a=qe;qe|=2;var n=Qd(),l=Vd();Ke!==e||Re!==t?(qr=null,Yr=rt()+500,Rl(e,t)):Nl=An(e,t);e:do try{if(Xe!==0&&Ne!==null){t=Ne;var r=Qt;t:switch(Xe){case 1:Xe=0,Qt=null,zl(e,t,r,1);break;case 2:case 9:if(ef(r)){Xe=0,Qt=null,Jd(t);break}t=function(){Xe!==2&&Xe!==9||Ke!==e||(Xe=7),ba(e)},r.then(t,t);break e;case 3:Xe=7;break e;case 4:Xe=5;break e;case 7:ef(r)?(Xe=0,Qt=null,Jd(t)):(Xe=0,Qt=null,zl(e,t,r,7));break;case 5:var s=null;switch(Ne.tag){case 26:s=Ne.memoizedState;case 5:case 27:var m=Ne;if(s?Mh(s):m.stateNode.complete){Xe=0,Qt=null;var b=m.sibling;if(b!==null)Ne=b;else{var A=m.return;A!==null?(Ne=A,Qr(A)):Ne=null}break t}}Xe=0,Qt=null,zl(e,t,r,5);break;case 6:Xe=0,Qt=null,zl(e,t,r,6);break;case 8:as(),lt=6;break e;default:throw Error(c(462))}}Ep();break}catch(B){Gd(e,B)}while(!0);return Oa=qn=null,_.H=n,_.A=l,qe=a,Ne!==null?0:(Ke=null,Re=0,or(),lt)}function Ep(){for(;Ne!==null&&!vu();)Zd(Ne)}function Zd(e){var t=pd(e.alternate,e,Xa);e.memoizedProps=e.pendingProps,t===null?Qr(e):Ne=t}function Jd(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=sd(a,t,t.pendingProps,t.type,void 0,Re);break;case 11:t=sd(a,t,t.pendingProps,t.type.render,t.ref,Re);break;case 5:yo(t);default:xd(a,t),t=Ne=Qc(t,Xa),t=pd(a,t,Xa)}e.memoizedProps=e.pendingProps,t===null?Qr(e):Ne=t}function zl(e,t,a,n){Oa=qn=null,yo(t),xl=null,ni=0;var l=t.return;try{if(hp(e,l,t,a,Re)){lt=1,Dr(e,Ft(a,e.current)),Ne=null;return}}catch(r){if(l!==null)throw Ne=l,r;lt=1,Dr(e,Ft(a,e.current)),Ne=null;return}t.flags&32768?(Ce||n===1?e=!0:Nl||(Re&536870912)!==0?e=!1:(un=e=!0,(n===2||n===9||n===3||n===6)&&(n=Gt.current,n!==null&&n.tag===13&&(n.flags|=16384))),Kd(t,e)):Qr(t)}function Qr(e){var t=e;do{if((t.flags&32768)!==0){Kd(t,un);return}e=t.return;var a=gp(t.alternate,t,Xa);if(a!==null){Ne=a;return}if(t=t.sibling,t!==null){Ne=t;return}Ne=t=e}while(t!==null);lt===0&&(lt=5)}function Kd(e,t){do{var a=xp(e.alternate,e);if(a!==null){a.flags&=32767,Ne=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){Ne=e;return}Ne=e=a}while(e!==null);lt=6,Ne=null}function kd(e,t,a,n,l,r,s,m,b){e.cancelPendingCommit=null;do Vr();while(xt!==0);if((qe&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(r=t.lanes|t.childLanes,r|=Vu,wu(e,a,r,s,m,b),e===Ke&&(Ne=Ke=null,Re=0),Tl=t,cn=e,Qa=a,Io=r,es=l,Hd=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ap(At,function(){return Id(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=_.T,_.T=null,l=V.p,V.p=2,s=qe,qe|=4;try{yp(e,t,a)}finally{qe=s,V.p=l,_.T=n}}xt=1,Wd(),Fd(),$d()}}function Wd(){if(xt===1){xt=0;var e=cn,t=Tl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=_.T,_.T=null;var n=V.p;V.p=2;var l=qe;qe|=4;try{Ad(t,e);var r=ps,s=Cc(e.containerInfo),m=r.focusedElem,b=r.selectionRange;if(s!==m&&m&&m.ownerDocument&&_c(m.ownerDocument.documentElement,m)){if(b!==null&&Yu(m)){var A=b.start,B=b.end;if(B===void 0&&(B=A),"selectionStart"in m)m.selectionStart=A,m.selectionEnd=Math.min(B,m.value.length);else{var q=m.ownerDocument||document,D=q&&q.defaultView||window;if(D.getSelection){var U=D.getSelection(),ae=m.textContent.length,fe=Math.min(b.start,ae),Je=b.end===void 0?fe:Math.min(b.end,ae);!U.extend&&fe>Je&&(s=Je,Je=fe,fe=s);var E=Oc(m,fe),w=Oc(m,Je);if(E&&w&&(U.rangeCount!==1||U.anchorNode!==E.node||U.anchorOffset!==E.offset||U.focusNode!==w.node||U.focusOffset!==w.offset)){var z=q.createRange();z.setStart(E.node,E.offset),U.removeAllRanges(),fe>Je?(U.addRange(z),U.extend(w.node,w.offset)):(z.setEnd(w.node,w.offset),U.addRange(z))}}}}for(q=[],U=m;U=U.parentNode;)U.nodeType===1&&q.push({element:U,left:U.scrollLeft,top:U.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<q.length;m++){var Y=q[m];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}au=!!ms,ps=ms=null}finally{qe=l,V.p=n,_.T=a}}e.current=t,xt=2}}function Fd(){if(xt===2){xt=0;var e=cn,t=Tl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=_.T,_.T=null;var n=V.p;V.p=2;var l=qe;qe|=4;try{Nd(e,t.alternate,t)}finally{qe=l,V.p=n,_.T=a}}xt=3}}function $d(){if(xt===4||xt===3){xt=0,bu();var e=cn,t=Tl,a=Qa,n=Hd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?xt=5:(xt=0,Tl=cn=null,Pd(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(sn=null),X(a),t=t.stateNode,Ie&&typeof Ie.onCommitFiberRoot=="function")try{Ie.onCommitFiberRoot(Tn,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=_.T,l=V.p,V.p=2,_.T=null;try{for(var r=e.onRecoverableError,s=0;s<n.length;s++){var m=n[s];r(m.value,{componentStack:m.stack})}}finally{_.T=t,V.p=l}}(Qa&3)!==0&&Vr(),ba(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===ts?bi++:(bi=0,ts=e):bi=0,Si(0)}}function Pd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ti(t)))}function Vr(){return Wd(),Fd(),$d(),Id()}function Id(){if(xt!==5)return!1;var e=cn,t=Io;Io=0;var a=X(Qa),n=_.T,l=V.p;try{V.p=32>a?32:a,_.T=null,a=es,es=null;var r=cn,s=Qa;if(xt=0,Tl=cn=null,Qa=0,(qe&6)!==0)throw Error(c(331));var m=qe;if(qe|=4,Cd(r.current),Md(r,r.current,s,a),qe=m,Si(0,!1),Ie&&typeof Ie.onPostCommitFiberRoot=="function")try{Ie.onPostCommitFiberRoot(Tn,r)}catch{}return!0}finally{V.p=l,_.T=n,Pd(e,t)}}function eh(e,t,a){t=Ft(a,t),t=_o(e.stateNode,t,2),e=an(e,t,2),e!==null&&(ka(e,2),ba(e))}function Qe(e,t,a){if(e.tag===3)eh(e,e,a);else for(;t!==null;){if(t.tag===3){eh(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(sn===null||!sn.has(n))){e=Ft(a,e),a=td(2),n=an(t,a,2),n!==null&&(ad(a,n,t,e),ka(n,2),ba(n));break}}t=t.return}}function ls(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new Sp;var l=new Set;n.set(t,l)}else l=n.get(t),l===void 0&&(l=new Set,n.set(t,l));l.has(a)||(Fo=!0,l.add(a),e=Tp.bind(null,e,t,a),t.then(e,e))}function Tp(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ke===e&&(Re&a)===a&&(lt===4||lt===3&&(Re&62914560)===Re&&300>rt()-Br?(qe&2)===0&&Rl(e,0):$o|=a,El===Re&&(El=0)),ba(e)}function th(e,t){t===0&&(t=Dn()),e=Hn(e,t),e!==null&&(ka(e,t),ba(e))}function Rp(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),th(e,a)}function zp(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(c(314))}n!==null&&n.delete(t),th(e,a)}function Ap(e,t){return Bl(e,t)}var Zr=null,Al=null,is=!1,Jr=!1,rs=!1,dn=0;function ba(e){e!==Al&&e.next===null&&(Al===null?Zr=Al=e:Al=Al.next=e),Jr=!0,is||(is=!0,Mp())}function Si(e,t){if(!rs&&Jr){rs=!0;do for(var a=!1,n=Zr;n!==null;){if(e!==0){var l=n.pendingLanes;if(l===0)var r=0;else{var s=n.suspendedLanes,m=n.pingedLanes;r=(1<<31-Et(42|e)+1)-1,r&=l&~(s&~m),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,ih(n,r))}else r=Re,r=zn(n,n===Ke?r:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(r&3)===0||An(n,r)||(a=!0,ih(n,r));n=n.next}while(a);rs=!1}}function Dp(){ah()}function ah(){Jr=is=!1;var e=0;dn!==0&&Gp()&&(e=dn);for(var t=rt(),a=null,n=Zr;n!==null;){var l=n.next,r=nh(n,t);r===0?(n.next=null,a===null?Zr=l:a.next=l,l===null&&(Al=a)):(a=n,(e!==0||(r&3)!==0)&&(Jr=!0)),n=l}xt!==0&&xt!==5||Si(e),dn!==0&&(dn=0)}function nh(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var s=31-Et(r),m=1<<s,b=l[s];b===-1?((m&a)===0||(m&n)!==0)&&(l[s]=Fi(m,t)):b<=t&&(e.expiredLanes|=m),r&=~m}if(t=Ke,a=Re,a=zn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(Xe===2||Xe===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Yl(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||An(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&Yl(n),X(a)){case 2:case 8:a=el;break;case 32:a=At;break;case 268435456:a=Gl;break;default:a=At}return n=lh.bind(null,e),a=Bl(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&Yl(n),e.callbackPriority=2,e.callbackNode=null,2}function lh(e,t){if(xt!==0&&xt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Vr()&&e.callbackNode!==a)return null;var n=Re;return n=zn(e,e===Ke?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Yd(e,n,t),nh(e,rt()),e.callbackNode!=null&&e.callbackNode===a?lh.bind(null,e):null)}function ih(e,t){if(Vr())return null;Yd(e,t,!0)}function Mp(){Qp(function(){(qe&6)!==0?Bl(ql,Dp):ah()})}function us(){if(dn===0){var e=ml;e===0&&(e=Ea,Ea<<=1,(Ea&261888)===0&&(Ea=256)),dn=e}return dn}function rh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:er(""+e)}function uh(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Op(e,t,a,n,l){if(t==="submit"&&a&&a.stateNode===l){var r=rh((l[ee]||null).action),s=n.submitter;s&&(t=(t=s[ee]||null)?rh(t.formAction):s.getAttribute("formAction"),t!==null&&(r=t,s=null));var m=new lr("action","action",null,n,l);e.push({event:m,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(dn!==0){var b=s?uh(l,s):new FormData(l);Ro(a,{pending:!0,data:b,method:l.method,action:r},null,b)}}else typeof r=="function"&&(m.preventDefault(),b=s?uh(l,s):new FormData(l),Ro(a,{pending:!0,data:b,method:l.method,action:r},r,b))},currentTarget:l}]})}}for(var os=0;os<Qu.length;os++){var ss=Qu[os],_p=ss.toLowerCase(),Cp=ss[0].toUpperCase()+ss.slice(1);da(_p,"on"+Cp)}da(Hc,"onAnimationEnd"),da(Bc,"onAnimationIteration"),da(Yc,"onAnimationStart"),da("dblclick","onDoubleClick"),da("focusin","onFocus"),da("focusout","onBlur"),da(F0,"onTransitionRun"),da($0,"onTransitionStart"),da(P0,"onTransitionCancel"),da(qc,"onTransitionEnd"),Kt("onMouseEnter",["mouseout","mouseover"]),Kt("onMouseLeave",["mouseout","mouseover"]),Kt("onPointerEnter",["pointerout","pointerover"]),Kt("onPointerLeave",["pointerout","pointerover"]),ca("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ca("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ca("onBeforeInput",["compositionend","keypress","textInput","paste"]),ca("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ca("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ca("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ji="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Up=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ji));function oh(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],l=n.event;n=n.listeners;e:{var r=void 0;if(t)for(var s=n.length-1;0<=s;s--){var m=n[s],b=m.instance,A=m.currentTarget;if(m=m.listener,b!==r&&l.isPropagationStopped())break e;r=m,l.currentTarget=A;try{r(l)}catch(B){ur(B)}l.currentTarget=null,r=b}else for(s=0;s<n.length;s++){if(m=n[s],b=m.instance,A=m.currentTarget,m=m.listener,b!==r&&l.isPropagationStopped())break e;r=m,l.currentTarget=A;try{r(l)}catch(B){ur(B)}l.currentTarget=null,r=b}}}}function Ee(e,t){var a=t[ce];a===void 0&&(a=t[ce]=new Set);var n=e+"__bubble";a.has(n)||(sh(t,e,2,!1),a.add(n))}function cs(e,t,a){var n=0;t&&(n|=4),sh(a,e,n,t)}var Kr="_reactListening"+Math.random().toString(36).slice(2);function fs(e){if(!e[Kr]){e[Kr]=!0,sa.forEach(function(a){a!=="selectionchange"&&(Up.has(a)||cs(a,!1,e),cs(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Kr]||(t[Kr]=!0,cs("selectionchange",!1,t))}}function sh(e,t,a,n){switch(Bh(t)){case 2:var l=sg;break;case 8:l=cg;break;default:l=Ts}a=l.bind(null,t,a,e),l=void 0,!Du||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function ds(e,t,a,n,l){var r=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var m=n.stateNode.containerInfo;if(m===l)break;if(s===4)for(s=n.return;s!==null;){var b=s.tag;if((b===3||b===4)&&s.stateNode.containerInfo===l)return;s=s.return}for(;m!==null;){if(s=at(m),s===null)return;if(b=s.tag,b===5||b===6||b===26||b===27){n=r=s;continue e}m=m.parentNode}}n=n.return}hc(function(){var A=r,B=zu(a),q=[];e:{var D=Gc.get(e);if(D!==void 0){var U=lr,ae=e;switch(e){case"keypress":if(ar(a)===0)break e;case"keydown":case"keyup":U=z0;break;case"focusin":ae="focus",U=Cu;break;case"focusout":ae="blur",U=Cu;break;case"beforeblur":case"afterblur":U=Cu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=gc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=g0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=M0;break;case Hc:case Bc:case Yc:U=v0;break;case qc:U=_0;break;case"scroll":case"scrollend":U=m0;break;case"wheel":U=U0;break;case"copy":case"cut":case"paste":U=S0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=yc;break;case"toggle":case"beforetoggle":U=H0}var fe=(t&4)!==0,Je=!fe&&(e==="scroll"||e==="scrollend"),E=fe?D!==null?D+"Capture":null:D;fe=[];for(var w=A,z;w!==null;){var Y=w;if(z=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||z===null||E===null||(Y=Vl(w,E),Y!=null&&fe.push(wi(w,Y,z))),Je)break;w=w.return}0<fe.length&&(D=new U(D,ae,null,a,B),q.push({event:D,listeners:fe}))}}if((t&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",U=e==="mouseout"||e==="pointerout",D&&a!==Ru&&(ae=a.relatedTarget||a.fromElement)&&(at(ae)||ae[le]))break e;if((U||D)&&(D=B.window===B?B:(D=B.ownerDocument)?D.defaultView||D.parentWindow:window,U?(ae=a.relatedTarget||a.toElement,U=A,ae=ae?at(ae):null,ae!==null&&(Je=h(ae),fe=ae.tag,ae!==Je||fe!==5&&fe!==27&&fe!==6)&&(ae=null)):(U=null,ae=A),U!==ae)){if(fe=gc,Y="onMouseLeave",E="onMouseEnter",w="mouse",(e==="pointerout"||e==="pointerover")&&(fe=yc,Y="onPointerLeave",E="onPointerEnter",w="pointer"),Je=U==null?D:yt(U),z=ae==null?D:yt(ae),D=new fe(Y,w+"leave",U,a,B),D.target=Je,D.relatedTarget=z,Y=null,at(B)===A&&(fe=new fe(E,w+"enter",ae,a,B),fe.target=z,fe.relatedTarget=Je,Y=fe),Je=Y,U&&ae)t:{for(fe=Lp,E=U,w=ae,z=0,Y=E;Y;Y=fe(Y))z++;Y=0;for(var se=w;se;se=fe(se))Y++;for(;0<z-Y;)E=fe(E),z--;for(;0<Y-z;)w=fe(w),Y--;for(;z--;){if(E===w||w!==null&&E===w.alternate){fe=E;break t}E=fe(E),w=fe(w)}fe=null}else fe=null;U!==null&&ch(q,D,U,fe,!1),ae!==null&&Je!==null&&ch(q,Je,ae,fe,!0)}}e:{if(D=A?yt(A):window,U=D.nodeName&&D.nodeName.toLowerCase(),U==="select"||U==="input"&&D.type==="file")var He=Tc;else if(Nc(D))if(Rc)He=K0;else{He=Z0;var ne=V0}else U=D.nodeName,!U||U.toLowerCase()!=="input"||D.type!=="checkbox"&&D.type!=="radio"?A&&Tu(A.elementType)&&(He=Tc):He=J0;if(He&&(He=He(e,A))){Ec(q,He,a,B);break e}ne&&ne(e,D,A),e==="focusout"&&A&&D.type==="number"&&A.memoizedProps.value!=null&&Eu(D,"number",D.value)}switch(ne=A?yt(A):window,e){case"focusin":(Nc(ne)||ne.contentEditable==="true")&&(rl=ne,qu=A,Pl=null);break;case"focusout":Pl=qu=rl=null;break;case"mousedown":Gu=!0;break;case"contextmenu":case"mouseup":case"dragend":Gu=!1,Uc(q,a,B);break;case"selectionchange":if(W0)break;case"keydown":case"keyup":Uc(q,a,B)}var ye;if(Lu)e:{switch(e){case"compositionstart":var ze="onCompositionStart";break e;case"compositionend":ze="onCompositionEnd";break e;case"compositionupdate":ze="onCompositionUpdate";break e}ze=void 0}else il?jc(e,a)&&(ze="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ze="onCompositionStart");ze&&(vc&&a.locale!=="ko"&&(il||ze!=="onCompositionStart"?ze==="onCompositionEnd"&&il&&(ye=mc()):(Wa=B,Mu="value"in Wa?Wa.value:Wa.textContent,il=!0)),ne=kr(A,ze),0<ne.length&&(ze=new xc(ze,e,null,a,B),q.push({event:ze,listeners:ne}),ye?ze.data=ye:(ye=wc(a),ye!==null&&(ze.data=ye)))),(ye=Y0?q0(e,a):G0(e,a))&&(ze=kr(A,"onBeforeInput"),0<ze.length&&(ne=new xc("onBeforeInput","beforeinput",null,a,B),q.push({event:ne,listeners:ze}),ne.data=ye)),Op(q,e,A,a,B)}oh(q,t)})}function wi(e,t,a){return{instance:e,listener:t,currentTarget:a}}function kr(e,t){for(var a=t+"Capture",n=[];e!==null;){var l=e,r=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||r===null||(l=Vl(e,a),l!=null&&n.unshift(wi(e,l,r)),l=Vl(e,t),l!=null&&n.push(wi(e,l,r))),e.tag===3)return n;e=e.return}return[]}function Lp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ch(e,t,a,n,l){for(var r=t._reactName,s=[];a!==null&&a!==n;){var m=a,b=m.alternate,A=m.stateNode;if(m=m.tag,b!==null&&b===n)break;m!==5&&m!==26&&m!==27||A===null||(b=A,l?(A=Vl(a,r),A!=null&&s.unshift(wi(a,A,b))):l||(A=Vl(a,r),A!=null&&s.push(wi(a,A,b)))),a=a.return}s.length!==0&&e.push({event:t,listeners:s})}var Hp=/\r\n?/g,Bp=/\u0000|\uFFFD/g;function fh(e){return(typeof e=="string"?e:""+e).replace(Hp,`
`).replace(Bp,"")}function dh(e,t){return t=fh(t),fh(e)===t}function Ze(e,t,a,n,l,r){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||al(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&al(e,""+n);break;case"className":fa(e,"class",n);break;case"tabIndex":fa(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":fa(e,a,n);break;case"style":fc(e,n,r);break;case"data":if(t!=="object"){fa(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=er(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&Ze(e,t,"name",l.name,l,null),Ze(e,t,"formEncType",l.formEncType,l,null),Ze(e,t,"formMethod",l.formMethod,l,null),Ze(e,t,"formTarget",l.formTarget,l,null)):(Ze(e,t,"encType",l.encType,l,null),Ze(e,t,"method",l.method,l,null),Ze(e,t,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=er(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=za);break;case"onScroll":n!=null&&Ee("scroll",e);break;case"onScrollEnd":n!=null&&Ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=er(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":Ee("beforetoggle",e),Ee("toggle",e),ut(e,"popover",n);break;case"xlinkActuate":bt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":bt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":bt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":bt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":bt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":bt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":bt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":bt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":bt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":ut(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=d0.get(a)||a,ut(e,a,n))}}function hs(e,t,a,n,l,r){switch(a){case"style":fc(e,n,r);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof n=="string"?al(e,n):(typeof n=="number"||typeof n=="bigint")&&al(e,""+n);break;case"onScroll":n!=null&&Ee("scroll",e);break;case"onScrollEnd":n!=null&&Ee("scrollend",e);break;case"onClick":n!=null&&(e.onclick=za);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Bt.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),r=e[ee]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,l),typeof n=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,l);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):ut(e,a,n)}}}function Nt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",e),Ee("load",e);var n=!1,l=!1,r;for(r in a)if(a.hasOwnProperty(r)){var s=a[r];if(s!=null)switch(r){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ze(e,t,r,s,a,null)}}l&&Ze(e,t,"srcSet",a.srcSet,a,null),n&&Ze(e,t,"src",a.src,a,null);return;case"input":Ee("invalid",e);var m=r=s=l=null,b=null,A=null;for(n in a)if(a.hasOwnProperty(n)){var B=a[n];if(B!=null)switch(n){case"name":l=B;break;case"type":s=B;break;case"checked":b=B;break;case"defaultChecked":A=B;break;case"value":r=B;break;case"defaultValue":m=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(c(137,t));break;default:Ze(e,t,n,B,a,null)}}uc(e,r,m,b,A,s,l,!1);return;case"select":Ee("invalid",e),n=s=r=null;for(l in a)if(a.hasOwnProperty(l)&&(m=a[l],m!=null))switch(l){case"value":r=m;break;case"defaultValue":s=m;break;case"multiple":n=m;default:Ze(e,t,l,m,a,null)}t=r,a=s,e.multiple=!!n,t!=null?tl(e,!!n,t,!1):a!=null&&tl(e,!!n,a,!0);return;case"textarea":Ee("invalid",e),r=l=n=null;for(s in a)if(a.hasOwnProperty(s)&&(m=a[s],m!=null))switch(s){case"value":n=m;break;case"defaultValue":l=m;break;case"children":r=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(c(91));break;default:Ze(e,t,s,m,a,null)}sc(e,n,l,r);return;case"option":for(b in a)a.hasOwnProperty(b)&&(n=a[b],n!=null)&&(b==="selected"?e.selected=n&&typeof n!="function"&&typeof n!="symbol":Ze(e,t,b,n,a,null));return;case"dialog":Ee("beforetoggle",e),Ee("toggle",e),Ee("cancel",e),Ee("close",e);break;case"iframe":case"object":Ee("load",e);break;case"video":case"audio":for(n=0;n<ji.length;n++)Ee(ji[n],e);break;case"image":Ee("error",e),Ee("load",e);break;case"details":Ee("toggle",e);break;case"embed":case"source":case"link":Ee("error",e),Ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in a)if(a.hasOwnProperty(A)&&(n=a[A],n!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ze(e,t,A,n,a,null)}return;default:if(Tu(t)){for(B in a)a.hasOwnProperty(B)&&(n=a[B],n!==void 0&&hs(e,t,B,n,a,void 0));return}}for(m in a)a.hasOwnProperty(m)&&(n=a[m],n!=null&&Ze(e,t,m,n,a,null))}function Yp(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,r=null,s=null,m=null,b=null,A=null,B=null;for(U in a){var q=a[U];if(a.hasOwnProperty(U)&&q!=null)switch(U){case"checked":break;case"value":break;case"defaultValue":b=q;default:n.hasOwnProperty(U)||Ze(e,t,U,null,n,q)}}for(var D in n){var U=n[D];if(q=a[D],n.hasOwnProperty(D)&&(U!=null||q!=null))switch(D){case"type":r=U;break;case"name":l=U;break;case"checked":A=U;break;case"defaultChecked":B=U;break;case"value":s=U;break;case"defaultValue":m=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(c(137,t));break;default:U!==q&&Ze(e,t,D,U,n,q)}}Nu(e,s,m,b,A,B,r,l);return;case"select":U=s=m=D=null;for(r in a)if(b=a[r],a.hasOwnProperty(r)&&b!=null)switch(r){case"value":break;case"multiple":U=b;default:n.hasOwnProperty(r)||Ze(e,t,r,null,n,b)}for(l in n)if(r=n[l],b=a[l],n.hasOwnProperty(l)&&(r!=null||b!=null))switch(l){case"value":D=r;break;case"defaultValue":m=r;break;case"multiple":s=r;default:r!==b&&Ze(e,t,l,r,n,b)}t=m,a=s,n=U,D!=null?tl(e,!!a,D,!1):!!n!=!!a&&(t!=null?tl(e,!!a,t,!0):tl(e,!!a,a?[]:"",!1));return;case"textarea":U=D=null;for(m in a)if(l=a[m],a.hasOwnProperty(m)&&l!=null&&!n.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:Ze(e,t,m,null,n,l)}for(s in n)if(l=n[s],r=a[s],n.hasOwnProperty(s)&&(l!=null||r!=null))switch(s){case"value":D=l;break;case"defaultValue":U=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==r&&Ze(e,t,s,l,n,r)}oc(e,D,U);return;case"option":for(var ae in a)D=a[ae],a.hasOwnProperty(ae)&&D!=null&&!n.hasOwnProperty(ae)&&(ae==="selected"?e.selected=!1:Ze(e,t,ae,null,n,D));for(b in n)D=n[b],U=a[b],n.hasOwnProperty(b)&&D!==U&&(D!=null||U!=null)&&(b==="selected"?e.selected=D&&typeof D!="function"&&typeof D!="symbol":Ze(e,t,b,D,n,U));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var fe in a)D=a[fe],a.hasOwnProperty(fe)&&D!=null&&!n.hasOwnProperty(fe)&&Ze(e,t,fe,null,n,D);for(A in n)if(D=n[A],U=a[A],n.hasOwnProperty(A)&&D!==U&&(D!=null||U!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(c(137,t));break;default:Ze(e,t,A,D,n,U)}return;default:if(Tu(t)){for(var Je in a)D=a[Je],a.hasOwnProperty(Je)&&D!==void 0&&!n.hasOwnProperty(Je)&&hs(e,t,Je,void 0,n,D);for(B in n)D=n[B],U=a[B],!n.hasOwnProperty(B)||D===U||D===void 0&&U===void 0||hs(e,t,B,D,n,U);return}}for(var E in a)D=a[E],a.hasOwnProperty(E)&&D!=null&&!n.hasOwnProperty(E)&&Ze(e,t,E,null,n,D);for(q in n)D=n[q],U=a[q],!n.hasOwnProperty(q)||D===U||D==null&&U==null||Ze(e,t,q,D,n,U)}function hh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function qp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var l=a[n],r=l.transferSize,s=l.initiatorType,m=l.duration;if(r&&m&&hh(s)){for(s=0,m=l.responseEnd,n+=1;n<a.length;n++){var b=a[n],A=b.startTime;if(A>m)break;var B=b.transferSize,q=b.initiatorType;B&&hh(q)&&(b=b.responseEnd,s+=B*(b<m?1:(m-A)/(b-A)))}if(--n,t+=8*(r+s)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ms=null,ps=null;function Wr(e){return e.nodeType===9?e:e.ownerDocument}function mh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ph(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function gs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xs=null;function Gp(){var e=window.event;return e&&e.type==="popstate"?e===xs?!1:(xs=e,!0):(xs=null,!1)}var gh=typeof setTimeout=="function"?setTimeout:void 0,Xp=typeof clearTimeout=="function"?clearTimeout:void 0,xh=typeof Promise=="function"?Promise:void 0,Qp=typeof queueMicrotask=="function"?queueMicrotask:typeof xh<"u"?function(e){return xh.resolve(null).then(e).catch(Vp)}:gh;function Vp(e){setTimeout(function(){throw e})}function hn(e){return e==="head"}function yh(e,t){var a=t,n=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(l),_l(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")Ni(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ni(a);for(var r=a.firstChild;r;){var s=r.nextSibling,m=r.nodeName;r[et]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=s}}else a==="body"&&Ni(e.ownerDocument.body);a=l}while(a);_l(t)}function vh(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function ys(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ys(a),tt(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Zp(e,t,a,n){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[et])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=ta(e.nextSibling),e===null)break}return null}function Jp(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ta(e.nextSibling),e===null))return null;return e}function bh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ta(e.nextSibling),e===null))return null;return e}function vs(e){return e.data==="$?"||e.data==="$~"}function bs(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Kp(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function ta(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ss=null;function Sh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return ta(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function jh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function wh(e,t,a){switch(t=Wr(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Ni(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);tt(e)}var aa=new Map,Nh=new Set;function Fr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Va=V.d;V.d={f:kp,r:Wp,D:Fp,C:$p,L:Pp,m:Ip,X:tg,S:eg,M:ag};function kp(){var e=Va.f(),t=Gr();return e||t}function Wp(e){var t=Me(e);t!==null&&t.tag===5&&t.type==="form"?Gf(t):Va.r(e)}var Dl=typeof document>"u"?null:document;function Eh(e,t,a){var n=Dl;if(n&&typeof t=="string"&&t){var l=kt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),Nh.has(l)||(Nh.add(l),e={rel:e,crossOrigin:a,href:t},n.querySelector(l)===null&&(t=n.createElement("link"),Nt(t,"link",e),Fe(t),n.head.appendChild(t)))}}function Fp(e){Va.D(e),Eh("dns-prefetch",e,null)}function $p(e,t){Va.C(e,t),Eh("preconnect",e,t)}function Pp(e,t,a){Va.L(e,t,a);var n=Dl;if(n&&e&&t){var l='link[rel="preload"][as="'+kt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+kt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+kt(a.imageSizes)+'"]')):l+='[href="'+kt(e)+'"]';var r=l;switch(t){case"style":r=Ml(e);break;case"script":r=Ol(e)}aa.has(r)||(e=j({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),aa.set(r,e),n.querySelector(l)!==null||t==="style"&&n.querySelector(Ei(r))||t==="script"&&n.querySelector(Ti(r))||(t=n.createElement("link"),Nt(t,"link",e),Fe(t),n.head.appendChild(t)))}}function Ip(e,t){Va.m(e,t);var a=Dl;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+kt(n)+'"][href="'+kt(e)+'"]',r=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Ol(e)}if(!aa.has(r)&&(e=j({rel:"modulepreload",href:e},t),aa.set(r,e),a.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ti(r)))return}n=a.createElement("link"),Nt(n,"link",e),Fe(n),a.head.appendChild(n)}}}function eg(e,t,a){Va.S(e,t,a);var n=Dl;if(n&&e){var l=Dt(n).hoistableStyles,r=Ml(e);t=t||"default";var s=l.get(r);if(!s){var m={loading:0,preload:null};if(s=n.querySelector(Ei(r)))m.loading=5;else{e=j({rel:"stylesheet",href:e,"data-precedence":t},a),(a=aa.get(r))&&js(e,a);var b=s=n.createElement("link");Fe(b),Nt(b,"link",e),b._p=new Promise(function(A,B){b.onload=A,b.onerror=B}),b.addEventListener("load",function(){m.loading|=1}),b.addEventListener("error",function(){m.loading|=2}),m.loading|=4,$r(s,t,n)}s={type:"stylesheet",instance:s,count:1,state:m},l.set(r,s)}}}function tg(e,t){Va.X(e,t);var a=Dl;if(a&&e){var n=Dt(a).hoistableScripts,l=Ol(e),r=n.get(l);r||(r=a.querySelector(Ti(l)),r||(e=j({src:e,async:!0},t),(t=aa.get(l))&&ws(e,t),r=a.createElement("script"),Fe(r),Nt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(l,r))}}function ag(e,t){Va.M(e,t);var a=Dl;if(a&&e){var n=Dt(a).hoistableScripts,l=Ol(e),r=n.get(l);r||(r=a.querySelector(Ti(l)),r||(e=j({src:e,async:!0,type:"module"},t),(t=aa.get(l))&&ws(e,t),r=a.createElement("script"),Fe(r),Nt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(l,r))}}function Th(e,t,a,n){var l=(l=he.current)?Fr(l):null;if(!l)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Ml(a.href),a=Dt(l).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ml(a.href);var r=Dt(l).hoistableStyles,s=r.get(e);if(s||(l=l.ownerDocument||l,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,s),(r=l.querySelector(Ei(e)))&&!r._p&&(s.instance=r,s.state.loading=5),aa.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},aa.set(e,a),r||ng(l,e,a,s.state))),t&&n===null)throw Error(c(528,""));return s}if(t&&n!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ol(a),a=Dt(l).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Ml(e){return'href="'+kt(e)+'"'}function Ei(e){return'link[rel="stylesheet"]['+e+"]"}function Rh(e){return j({},e,{"data-precedence":e.precedence,precedence:null})}function ng(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Nt(t,"link",a),Fe(t),e.head.appendChild(t))}function Ol(e){return'[src="'+kt(e)+'"]'}function Ti(e){return"script[async]"+e}function zh(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+kt(a.href)+'"]');if(n)return t.instance=n,Fe(n),n;var l=j({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Fe(n),Nt(n,"style",l),$r(n,a.precedence,e),t.instance=n;case"stylesheet":l=Ml(a.href);var r=e.querySelector(Ei(l));if(r)return t.state.loading|=4,t.instance=r,Fe(r),r;n=Rh(a),(l=aa.get(l))&&js(n,l),r=(e.ownerDocument||e).createElement("link"),Fe(r);var s=r;return s._p=new Promise(function(m,b){s.onload=m,s.onerror=b}),Nt(r,"link",n),t.state.loading|=4,$r(r,a.precedence,e),t.instance=r;case"script":return r=Ol(a.src),(l=e.querySelector(Ti(r)))?(t.instance=l,Fe(l),l):(n=a,(l=aa.get(r))&&(n=j({},a),ws(n,l)),e=e.ownerDocument||e,l=e.createElement("script"),Fe(l),Nt(l,"link",n),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,$r(n,a.precedence,e));return t.instance}function $r(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,r=l,s=0;s<n.length;s++){var m=n[s];if(m.dataset.precedence===t)r=m;else if(r!==l)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function js(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ws(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Pr=null;function Ah(e,t,a){if(Pr===null){var n=new Map,l=Pr=new Map;l.set(a,n)}else l=Pr,n=l.get(a),n||(n=new Map,l.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var r=a[l];if(!(r[et]||r[F]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(t)||"";s=e+s;var m=n.get(s);m?m.push(r):n.set(s,[r])}}return n}function Dh(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function lg(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Mh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ig(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=Ml(n.href),r=t.querySelector(Ei(l));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ir.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,Fe(r);return}r=t.ownerDocument||t,n=Rh(n),(l=aa.get(l))&&js(n,l),r=r.createElement("link"),Fe(r);var s=r;s._p=new Promise(function(m,b){s.onload=m,s.onerror=b}),Nt(r,"link",n),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ir.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Ns=0;function rg(e,t){return e.stylesheets&&e.count===0&&tu(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&tu(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&Ns===0&&(Ns=62500*qp());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&tu(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>Ns?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(l)}}:null}function Ir(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)tu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var eu=null;function tu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,eu=new Map,t.forEach(ug,e),eu=null,Ir.call(e))}function ug(e,t){if(!(t.state.loading&4)){var a=eu.get(e);if(a)var n=a.get(null);else{a=new Map,eu.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<l.length;r++){var s=l[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),n=s)}n&&a.set(null,n)}l=t.instance,s=l.getAttribute("data-precedence"),r=a.get(s)||n,r===n&&a.set(null,l),a.set(s,l),this.count++,n=Ir.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),r?r.parentNode.insertBefore(l,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Ri={$$typeof:te,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function og(e,t,a,n,l,r,s,m,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ka(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ka(0),this.hiddenUpdates=Ka(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function Oh(e,t,a,n,l,r,s,m,b,A,B,q){return e=new og(e,t,a,s,b,A,B,q,m),t=1,r===!0&&(t|=24),r=qt(3,null,null,t),e.current=r,r.stateNode=e,t=ao(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:n,isDehydrated:a,cache:t},ro(r),e}function _h(e){return e?(e=sl,e):sl}function Ch(e,t,a,n,l,r){l=_h(l),n.context===null?n.context=l:n.pendingContext=l,n=tn(t),n.payload={element:a},r=r===void 0?null:r,r!==null&&(n.callback=r),a=an(e,n,t),a!==null&&(Lt(a,e,t),ii(a,e,t))}function Uh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Es(e,t){Uh(e,t),(e=e.alternate)&&Uh(e,t)}function Lh(e){if(e.tag===13||e.tag===31){var t=Hn(e,67108864);t!==null&&Lt(t,e,67108864),Es(e,67108864)}}function Hh(e){if(e.tag===13||e.tag===31){var t=Zt();t=M(t);var a=Hn(e,t);a!==null&&Lt(a,e,t),Es(e,t)}}var au=!0;function sg(e,t,a,n){var l=_.T;_.T=null;var r=V.p;try{V.p=2,Ts(e,t,a,n)}finally{V.p=r,_.T=l}}function cg(e,t,a,n){var l=_.T;_.T=null;var r=V.p;try{V.p=8,Ts(e,t,a,n)}finally{V.p=r,_.T=l}}function Ts(e,t,a,n){if(au){var l=Rs(n);if(l===null)ds(e,t,n,nu,a),Yh(e,n);else if(dg(l,e,t,a,n))n.stopPropagation();else if(Yh(e,n),t&4&&-1<fg.indexOf(e)){for(;l!==null;){var r=Me(l);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=Ta(r.pendingLanes);if(s!==0){var m=r;for(m.pendingLanes|=2,m.entangledLanes|=2;s;){var b=1<<31-Et(s);m.entanglements[1]|=b,s&=~b}ba(r),(qe&6)===0&&(Yr=rt()+500,Si(0))}}break;case 31:case 13:m=Hn(r,2),m!==null&&Lt(m,r,2),Gr(),Es(r,2)}if(r=Rs(n),r===null&&ds(e,t,n,nu,a),r===l)break;l=r}l!==null&&n.stopPropagation()}else ds(e,t,n,null,a)}}function Rs(e){return e=zu(e),zs(e)}var nu=null;function zs(e){if(nu=null,e=at(e),e!==null){var t=h(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=p(t),e!==null)return e;e=null}else if(a===31){if(e=y(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return nu=e,null}function Bh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(En()){case ql:return 2;case el:return 8;case At:case ua:return 32;case Gl:return 268435456;default:return 32}default:return 32}}var As=!1,mn=null,pn=null,gn=null,zi=new Map,Ai=new Map,xn=[],fg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Yh(e,t){switch(e){case"focusin":case"focusout":mn=null;break;case"dragenter":case"dragleave":pn=null;break;case"mouseover":case"mouseout":gn=null;break;case"pointerover":case"pointerout":zi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ai.delete(t.pointerId)}}function Di(e,t,a,n,l,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:r,targetContainers:[l]},t!==null&&(t=Me(t),t!==null&&Lh(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function dg(e,t,a,n,l){switch(t){case"focusin":return mn=Di(mn,e,t,a,n,l),!0;case"dragenter":return pn=Di(pn,e,t,a,n,l),!0;case"mouseover":return gn=Di(gn,e,t,a,n,l),!0;case"pointerover":var r=l.pointerId;return zi.set(r,Di(zi.get(r)||null,e,t,a,n,l)),!0;case"gotpointercapture":return r=l.pointerId,Ai.set(r,Di(Ai.get(r)||null,e,t,a,n,l)),!0}return!1}function qh(e){var t=at(e.target);if(t!==null){var a=h(t);if(a!==null){if(t=a.tag,t===13){if(t=p(a),t!==null){e.blockedOn=t,re(e.priority,function(){Hh(a)});return}}else if(t===31){if(t=y(a),t!==null){e.blockedOn=t,re(e.priority,function(){Hh(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Rs(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);Ru=n,a.target.dispatchEvent(n),Ru=null}else return t=Me(a),t!==null&&Lh(t),e.blockedOn=a,!1;t.shift()}return!0}function Gh(e,t,a){lu(e)&&a.delete(t)}function hg(){As=!1,mn!==null&&lu(mn)&&(mn=null),pn!==null&&lu(pn)&&(pn=null),gn!==null&&lu(gn)&&(gn=null),zi.forEach(Gh),Ai.forEach(Gh)}function iu(e,t){e.blockedOn===t&&(e.blockedOn=null,As||(As=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,hg)))}var ru=null;function Xh(e){ru!==e&&(ru=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){ru===e&&(ru=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],l=e[t+2];if(typeof n!="function"){if(zs(n||a)===null)continue;break}var r=Me(a);r!==null&&(e.splice(t,3),t-=3,Ro(r,{pending:!0,data:l,method:a.method,action:n},n,l))}}))}function _l(e){function t(b){return iu(b,e)}mn!==null&&iu(mn,e),pn!==null&&iu(pn,e),gn!==null&&iu(gn,e),zi.forEach(t),Ai.forEach(t);for(var a=0;a<xn.length;a++){var n=xn[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<xn.length&&(a=xn[0],a.blockedOn===null);)qh(a),a.blockedOn===null&&xn.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var l=a[n],r=a[n+1],s=l[ee]||null;if(typeof r=="function")s||Xh(a);else if(s){var m=null;if(r&&r.hasAttribute("formAction")){if(l=r,s=r[ee]||null)m=s.formAction;else if(zs(l)!==null)continue}else m=s.action;typeof m=="function"?a[n+1]=m:(a.splice(n,3),n-=3),Xh(a)}}}function Qh(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(s){return l=s})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Ds(e){this._internalRoot=e}uu.prototype.render=Ds.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,n=Zt();Ch(a,n,e,t,null,null)},uu.prototype.unmount=Ds.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ch(e.current,2,null,e,null,null),Gr(),t[le]=null}};function uu(e){this._internalRoot=e}uu.prototype.unstable_scheduleHydration=function(e){if(e){var t=K();e={blockedOn:null,target:e,priority:t};for(var a=0;a<xn.length&&t!==0&&t<xn[a].priority;a++);xn.splice(a,0,e),a===0&&qh(e)}};var Vh=u.version;if(Vh!=="19.2.4")throw Error(c(527,Vh,"19.2.4"));V.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=g(t),e=e!==null?N(e):null,e=e===null?null:e.stateNode,e};var mg={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ou=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ou.isDisabled&&ou.supportsFiber)try{Tn=ou.inject(mg),Ie=ou}catch{}}return Oi.createRoot=function(e,t){if(!d(e))throw Error(c(299));var a=!1,n="",l=$f,r=Pf,s=If;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Oh(e,1,!1,null,null,a,n,null,l,r,s,Qh),e[le]=t.current,fs(e),new Ds(t)},Oi.hydrateRoot=function(e,t,a){if(!d(e))throw Error(c(299));var n=!1,l="",r=$f,s=Pf,m=If,b=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(m=a.onRecoverableError),a.formState!==void 0&&(b=a.formState)),t=Oh(e,1,!0,t,a??null,n,l,b,r,s,m,Qh),t.context=_h(null),a=t.current,n=Zt(),n=M(n),l=tn(n),l.callback=null,an(a,l,n),a=n,t.current.lanes=a,ka(t,a),ba(t),e[le]=t.current,fs(e),new uu(t)},Oi.version="19.2.4",Oi}var em;function Rg(){if(em)return _s.exports;em=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(u){console.error(u)}}return i(),_s.exports=Tg(),_s.exports}var zg=Rg();var Dm=i=>{throw TypeError(i)},Ag=(i,u,o)=>u.has(i)||Dm("Cannot "+o),Hs=(i,u,o)=>(Ag(i,u,"read from private field"),o?o.call(i):u.get(i)),Dg=(i,u,o)=>u.has(i)?Dm("Cannot add the same private member more than once"):u instanceof WeakSet?u.add(i):u.set(i,o),tm="popstate";function Mg(i={}){function u(c,d){let{pathname:h,search:p,hash:y}=c.location;return Yi("",{pathname:h,search:p,hash:y},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function o(c,d){return typeof d=="string"?d:wa(d)}return _g(u,o,null,i)}function Se(i,u){if(i===!1||i===null||typeof i>"u")throw new Error(u)}function pt(i,u){if(!i){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function Og(){return Math.random().toString(36).substring(2,10)}function am(i,u){return{usr:i.state,key:i.key,idx:u}}function Yi(i,u,o=null,c){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof u=="string"?jn(u):u,state:o,key:u&&u.key||c||Og()}}function wa({pathname:i="/",search:u="",hash:o=""}){return u&&u!=="?"&&(i+=u.charAt(0)==="?"?u:"?"+u),o&&o!=="#"&&(i+=o.charAt(0)==="#"?o:"#"+o),i}function jn(i){let u={};if(i){let o=i.indexOf("#");o>=0&&(u.hash=i.substring(o),i=i.substring(0,o));let c=i.indexOf("?");c>=0&&(u.search=i.substring(c),i=i.substring(0,c)),i&&(u.pathname=i)}return u}function _g(i,u,o,c={}){let{window:d=document.defaultView,v5Compat:h=!1}=c,p=d.history,y="POP",x=null,g=N();g==null&&(g=0,p.replaceState({...p.state,idx:g},""));function N(){return(p.state||{idx:null}).idx}function j(){y="POP";let k=N(),I=k==null?null:k-g;g=k,x&&x({action:y,location:Q.location,delta:I})}function C(k,I){y="PUSH";let J=Yi(Q.location,k,I);g=N()+1;let te=am(J,g),je=Q.createHref(J);try{p.pushState(te,"",je)}catch(ve){if(ve instanceof DOMException&&ve.name==="DataCloneError")throw ve;d.location.assign(je)}h&&x&&x({action:y,location:Q.location,delta:1})}function L(k,I){y="REPLACE";let J=Yi(Q.location,k,I);g=N();let te=am(J,g),je=Q.createHref(J);p.replaceState(te,"",je),h&&x&&x({action:y,location:Q.location,delta:0})}function G(k){return Mm(k)}let Q={get action(){return y},get location(){return i(d,p)},listen(k){if(x)throw new Error("A history only accepts one active listener");return d.addEventListener(tm,j),x=k,()=>{d.removeEventListener(tm,j),x=null}},createHref(k){return u(d,k)},createURL:G,encodeLocation(k){let I=G(k);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:C,replace:L,go(k){return p.go(k)}};return Q}function Mm(i,u=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),Se(o,"No window.location.(origin|href) available to create URL");let c=typeof i=="string"?i:wa(i);return c=c.replace(/ $/,"%20"),!u&&c.startsWith("//")&&(c=o+c),new URL(c,o)}var Li,nm=class{constructor(i){if(Dg(this,Li,new Map),i)for(let[u,o]of i)this.set(u,o)}get(i){if(Hs(this,Li).has(i))return Hs(this,Li).get(i);if(i.defaultValue!==void 0)return i.defaultValue;throw new Error("No value found for context")}set(i,u){Hs(this,Li).set(i,u)}};Li=new WeakMap;var Cg=new Set(["lazy","caseSensitive","path","id","index","children"]);function Ug(i){return Cg.has(i)}var Lg=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function Hg(i){return Lg.has(i)}function Bg(i){return i.index===!0}function qi(i,u,o=[],c={},d=!1){return i.map((h,p)=>{let y=[...o,String(p)],x=typeof h.id=="string"?h.id:y.join("-");if(Se(h.index!==!0||!h.children,"Cannot specify children on an index route"),Se(d||!c[x],`Found a route id collision on id "${x}".  Route id's must be globally unique within Data Router usages`),Bg(h)){let g={...h,id:x};return c[x]=lm(g,u(g)),g}else{let g={...h,id:x,children:void 0};return c[x]=lm(g,u(g)),h.children&&(g.children=qi(h.children,u,y,c,d)),g}})}function lm(i,u){return Object.assign(i,{...u,...typeof u.lazy=="object"&&u.lazy!=null?{lazy:{...i.lazy,...u.lazy}}:{}})}function vn(i,u,o="/"){return Hi(i,u,o,!1)}function Hi(i,u,o,c){let d=typeof u=="string"?jn(u):u,h=la(d.pathname||"/",o);if(h==null)return null;let p=Om(i);qg(p);let y=null;for(let x=0;y==null&&x<p.length;++x){let g=$g(h);y=Wg(p[x],g,c)}return y}function Yg(i,u){let{route:o,pathname:c,params:d}=i;return{id:o.id,pathname:c,params:d,data:u[o.id],loaderData:u[o.id],handle:o.handle}}function Om(i,u=[],o=[],c="",d=!1){let h=(p,y,x=d,g)=>{let N={relativePath:g===void 0?p.path||"":g,caseSensitive:p.caseSensitive===!0,childrenIndex:y,route:p};if(N.relativePath.startsWith("/")){if(!N.relativePath.startsWith(c)&&x)return;Se(N.relativePath.startsWith(c),`Absolute route path "${N.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),N.relativePath=N.relativePath.slice(c.length)}let j=Sa([c,N.relativePath]),C=o.concat(N);p.children&&p.children.length>0&&(Se(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${j}".`),Om(p.children,u,C,j,x)),!(p.path==null&&!p.index)&&u.push({path:j,score:Kg(j,p.index),routesMeta:C})};return i.forEach((p,y)=>{if(p.path===""||!p.path?.includes("?"))h(p,y);else for(let x of _m(p.path))h(p,y,!0,x)}),u}function _m(i){let u=i.split("/");if(u.length===0)return[];let[o,...c]=u,d=o.endsWith("?"),h=o.replace(/\?$/,"");if(c.length===0)return d?[h,""]:[h];let p=_m(c.join("/")),y=[];return y.push(...p.map(x=>x===""?h:[h,x].join("/"))),d&&y.push(...p),y.map(x=>i.startsWith("/")&&x===""?"/":x)}function qg(i){i.sort((u,o)=>u.score!==o.score?o.score-u.score:kg(u.routesMeta.map(c=>c.childrenIndex),o.routesMeta.map(c=>c.childrenIndex)))}var Gg=/^:[\w-]+$/,Xg=3,Qg=2,Vg=1,Zg=10,Jg=-2,im=i=>i==="*";function Kg(i,u){let o=i.split("/"),c=o.length;return o.some(im)&&(c+=Jg),u&&(c+=Qg),o.filter(d=>!im(d)).reduce((d,h)=>d+(Gg.test(h)?Xg:h===""?Vg:Zg),c)}function kg(i,u){return i.length===u.length&&i.slice(0,-1).every((c,d)=>c===u[d])?i[i.length-1]-u[u.length-1]:0}function Wg(i,u,o=!1){let{routesMeta:c}=i,d={},h="/",p=[];for(let y=0;y<c.length;++y){let x=c[y],g=y===c.length-1,N=h==="/"?u:u.slice(h.length)||"/",j=pu({path:x.relativePath,caseSensitive:x.caseSensitive,end:g},N),C=x.route;if(!j&&g&&o&&!c[c.length-1].route.index&&(j=pu({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},N)),!j)return null;Object.assign(d,j.params),p.push({params:d,pathname:Sa([h,j.pathname]),pathnameBase:e1(Sa([h,j.pathnameBase])),route:C}),j.pathnameBase!=="/"&&(h=Sa([h,j.pathnameBase]))}return p}function pu(i,u){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[o,c]=Fg(i.path,i.caseSensitive,i.end),d=u.match(o);if(!d)return null;let h=d[0],p=h.replace(/(.)\/+$/,"$1"),y=d.slice(1);return{params:c.reduce((g,{paramName:N,isOptional:j},C)=>{if(N==="*"){let G=y[C]||"";p=h.slice(0,h.length-G.length).replace(/(.)\/+$/,"$1")}const L=y[C];return j&&!L?g[N]=void 0:g[N]=(L||"").replace(/%2F/g,"/"),g},{}),pathname:h,pathnameBase:p,pattern:i}}function Fg(i,u=!1,o=!0){pt(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let c=[],d="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,y,x)=>(c.push({paramName:y,isOptional:x!=null}),x?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(c.push({paramName:"*"}),d+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?d+="\\/*$":i!==""&&i!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,u?void 0:"i"),c]}function $g(i){try{return i.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return pt(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),i}}function la(i,u){if(u==="/")return i;if(!i.toLowerCase().startsWith(u.toLowerCase()))return null;let o=u.endsWith("/")?u.length-1:u.length,c=i.charAt(o);return c&&c!=="/"?null:i.slice(o)||"/"}function Pg({basename:i,pathname:u}){return u==="/"?i:Sa([i,u])}var Cm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ks=i=>Cm.test(i);function Ig(i,u="/"){let{pathname:o,search:c="",hash:d=""}=typeof i=="string"?jn(i):i,h;return o?(o=o.replace(/\/\/+/g,"/"),o.startsWith("/")?h=rm(o.substring(1),"/"):h=rm(o,u)):h=u,{pathname:h,search:t1(c),hash:a1(d)}}function rm(i,u){let o=u.replace(/\/+$/,"").split("/");return i.split("/").forEach(d=>{d===".."?o.length>1&&o.pop():d!=="."&&o.push(d)}),o.length>1?o.join("/"):"/"}function Bs(i,u,o,c){return`Cannot include a '${i}' character in a manually specified \`to.${u}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Um(i){return i.filter((u,o)=>o===0||u.route.path&&u.route.path.length>0)}function Ws(i){let u=Um(i);return u.map((o,c)=>c===u.length-1?o.pathname:o.pathnameBase)}function Fs(i,u,o,c=!1){let d;typeof i=="string"?d=jn(i):(d={...i},Se(!d.pathname||!d.pathname.includes("?"),Bs("?","pathname","search",d)),Se(!d.pathname||!d.pathname.includes("#"),Bs("#","pathname","hash",d)),Se(!d.search||!d.search.includes("#"),Bs("#","search","hash",d)));let h=i===""||d.pathname==="",p=h?"/":d.pathname,y;if(p==null)y=o;else{let j=u.length-1;if(!c&&p.startsWith("..")){let C=p.split("/");for(;C[0]==="..";)C.shift(),j-=1;d.pathname=C.join("/")}y=j>=0?u[j]:"/"}let x=Ig(d,y),g=p&&p!=="/"&&p.endsWith("/"),N=(h||p===".")&&o.endsWith("/");return!x.pathname.endsWith("/")&&(g||N)&&(x.pathname+="/"),x}var Sa=i=>i.join("/").replace(/\/\/+/g,"/"),e1=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),t1=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,a1=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i,Xi=class{constructor(i,u,o,c=!1){this.status=i,this.statusText=u||"",this.internal=c,o instanceof Error?(this.data=o.toString(),this.error=o):this.data=o}};function Gi(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}function Qi(i){return i.map(u=>u.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Lm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Hm(i,u){let o=i;if(typeof o!="string"||!Cm.test(o))return{absoluteURL:void 0,isExternal:!1,to:o};let c=o,d=!1;if(Lm)try{let h=new URL(window.location.href),p=o.startsWith("//")?new URL(h.protocol+o):new URL(o),y=la(p.pathname,u);p.origin===h.origin&&y!=null?o=y+p.search+p.hash:d=!0}catch{pt(!1,`<Link to="${o}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:d,to:o}}var Sn=Symbol("Uninstrumented");function n1(i,u){let o={lazy:[],"lazy.loader":[],"lazy.action":[],"lazy.middleware":[],middleware:[],loader:[],action:[]};i.forEach(d=>d({id:u.id,index:u.index,path:u.path,instrument(h){let p=Object.keys(o);for(let y of p)h[y]&&o[y].push(h[y])}}));let c={};if(typeof u.lazy=="function"&&o.lazy.length>0){let d=Ul(o.lazy,u.lazy,()=>{});d&&(c.lazy=d)}if(typeof u.lazy=="object"){let d=u.lazy;["middleware","loader","action"].forEach(h=>{let p=d[h],y=o[`lazy.${h}`];if(typeof p=="function"&&y.length>0){let x=Ul(y,p,()=>{});x&&(c.lazy=Object.assign(c.lazy||{},{[h]:x}))}})}return["loader","action"].forEach(d=>{let h=u[d];if(typeof h=="function"&&o[d].length>0){let p=h[Sn]??h,y=Ul(o[d],p,(...x)=>um(x[0]));y&&(d==="loader"&&p.hydrate===!0&&(y.hydrate=!0),y[Sn]=p,c[d]=y)}}),u.middleware&&u.middleware.length>0&&o.middleware.length>0&&(c.middleware=u.middleware.map(d=>{let h=d[Sn]??d,p=Ul(o.middleware,h,(...y)=>um(y[0]));return p?(p[Sn]=h,p):d})),c}function l1(i,u){let o={navigate:[],fetch:[]};if(u.forEach(c=>c({instrument(d){let h=Object.keys(d);for(let p of h)d[p]&&o[p].push(d[p])}})),o.navigate.length>0){let c=i.navigate[Sn]??i.navigate,d=Ul(o.navigate,c,(...h)=>{let[p,y]=h;return{to:typeof p=="number"||typeof p=="string"?p:p?wa(p):".",...om(i,y??{})}});d&&(d[Sn]=c,i.navigate=d)}if(o.fetch.length>0){let c=i.fetch[Sn]??i.fetch,d=Ul(o.fetch,c,(...h)=>{let[p,,y,x]=h;return{href:y??".",fetcherKey:p,...om(i,x??{})}});d&&(d[Sn]=c,i.fetch=d)}return i}function Ul(i,u,o){return i.length===0?null:async(...c)=>{let d=await Bm(i,o(...c),()=>u(...c),i.length-1);if(d.type==="error")throw d.value;return d.value}}async function Bm(i,u,o,c){let d=i[c],h;if(d){let p,y=async()=>(p?console.error("You cannot call instrumented handlers more than once"):p=Bm(i,u,o,c-1),h=await p,Se(h,"Expected a result"),h.type==="error"&&h.value instanceof Error?{status:"error",error:h.value}:{status:"success",error:void 0});try{await d(y,u)}catch(x){console.error("An instrumentation function threw an error:",x)}p||await y(),await p}else try{h={type:"success",value:await o()}}catch(p){h={type:"error",value:p}}return h||{type:"error",value:new Error("No result assigned in instrumentation chain.")}}function um(i){let{request:u,context:o,params:c,unstable_pattern:d}=i;return{request:i1(u),params:{...c},unstable_pattern:d,context:r1(o)}}function om(i,u){return{currentUrl:wa(i.state.location),..."formMethod"in u?{formMethod:u.formMethod}:{},..."formEncType"in u?{formEncType:u.formEncType}:{},..."formData"in u?{formData:u.formData}:{},..."body"in u?{body:u.body}:{}}}function i1(i){return{method:i.method,url:i.url,headers:{get:(...u)=>i.headers.get(...u)}}}function r1(i){if(o1(i)){let u={...i};return Object.freeze(u),u}else return{get:u=>i.get(u)}}var u1=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function o1(i){if(i===null||typeof i!="object")return!1;const u=Object.getPrototypeOf(i);return u===Object.prototype||u===null||Object.getOwnPropertyNames(u).sort().join("\0")===u1}var Ym=["POST","PUT","PATCH","DELETE"],s1=new Set(Ym),c1=["GET",...Ym],f1=new Set(c1),qm=new Set([301,302,303,307,308]),d1=new Set([307,308]),Ys={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},h1={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},_i={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},m1=i=>({hasErrorBoundary:!!i.hasErrorBoundary}),Gm="remix-router-transitions",Xm=Symbol("ResetLoaderData");function p1(i){const u=i.window?i.window:typeof window<"u"?window:void 0,o=typeof u<"u"&&typeof u.document<"u"&&typeof u.document.createElement<"u";Se(i.routes.length>0,"You must provide a non-empty routes array to createRouter");let c=i.hydrationRouteProperties||[],d=i.mapRouteProperties||m1,h=d;if(i.unstable_instrumentations){let v=i.unstable_instrumentations;h=T=>({...d(T),...n1(v.map(M=>M.route).filter(Boolean),T)})}let p={},y=qi(i.routes,h,void 0,p),x,g=i.basename||"/";g.startsWith("/")||(g=`/${g}`);let N=i.dataStrategy||b1,j={...i.future},C=null,L=new Set,G=null,Q=null,k=null,I=i.hydrationData!=null,J=vn(y,i.history.location,g),te=!1,je=null,ve;if(J==null&&!i.patchRoutesOnNavigation){let v=na(404,{pathname:i.history.location.pathname}),{matches:T,route:M}=su(y);ve=!0,J=T,je={[M.id]:v}}else if(J&&!i.hydrationData&&Dn(J,y,i.history.location.pathname).active&&(J=null),J)if(J.some(v=>v.route.lazy))ve=!1;else if(!J.some(v=>$s(v.route)))ve=!0;else{let v=i.hydrationData?i.hydrationData.loaderData:null,T=i.hydrationData?i.hydrationData.errors:null;if(T){let M=J.findIndex(X=>T[X.route.id]!==void 0);ve=J.slice(0,M+1).every(X=>!Vs(X.route,v,T))}else ve=J.every(M=>!Vs(M.route,v,T))}else{ve=!1,J=[];let v=Dn(null,y,i.history.location.pathname);v.active&&v.matches&&(te=!0,J=v.matches)}let we,R={historyAction:i.history.action,location:i.history.location,matches:J,initialized:ve,navigation:Ys,restoreScrollPosition:i.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:i.hydrationData&&i.hydrationData.loaderData||{},actionData:i.hydrationData&&i.hydrationData.actionData||null,errors:i.hydrationData&&i.hydrationData.errors||je,fetchers:new Map,blockers:new Map},ie="POP",xe=null,Ye=!1,Te,Le=!1,gt=new Map,Ge=null,be=!1,_=!1,V=new Set,W=new Map,de=0,pe=-1,S=new Map,H=new Set,Z=new Map,$=new Map,oe=new Set,he=new Map,Ae,it=null;function Pe(){if(C=i.history.listen(({action:v,location:T,delta:M})=>{if(Ae){Ae(),Ae=void 0;return}pt(he.size===0||M!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let X=Rn({currentLocation:R.location,nextLocation:T,historyAction:v});if(X&&M!=null){let K=new Promise(re=>{Ae=re});i.history.go(M*-1),Ea(X,{state:"blocked",location:T,proceed(){Ea(X,{state:"proceeding",proceed:void 0,reset:void 0,location:T}),K.then(()=>i.history.go(M))},reset(){let re=new Map(R.blockers);re.set(X,_i),ct({blockers:re})}}),xe?.resolve(),xe=null;return}return ra(v,T)}),o){B1(u,gt);let v=()=>Y1(u,gt);u.addEventListener("pagehide",v),Ge=()=>u.removeEventListener("pagehide",v)}return R.initialized||ra("POP",R.location,{initialHydration:!0}),we}function Nn(){C&&C(),Ge&&Ge(),L.clear(),Te&&Te.abort(),R.fetchers.forEach((v,T)=>Xl(T)),R.blockers.forEach((v,T)=>Wi(T))}function Pn(v){return L.add(v),()=>L.delete(v)}function ct(v,T={}){v.matches&&(v.matches=v.matches.map(K=>{let re=p[K.route.id],P=K.route;return P.element!==re.element||P.errorElement!==re.errorElement||P.hydrateFallbackElement!==re.hydrateFallbackElement?{...K,route:re}:K})),R={...R,...v};let M=[],X=[];R.fetchers.forEach((K,re)=>{K.state==="idle"&&(oe.has(re)?M.push(re):X.push(re))}),oe.forEach(K=>{!R.fetchers.has(K)&&!W.has(K)&&M.push(K)}),[...L].forEach(K=>K(R,{deletedFetchers:M,newErrors:v.errors??null,viewTransitionOpts:T.viewTransitionOpts,flushSync:T.flushSync===!0})),M.forEach(K=>Xl(K)),X.forEach(K=>R.fetchers.delete(K))}function Na(v,T,{flushSync:M}={}){let X=R.actionData!=null&&R.navigation.formMethod!=null&&Rt(R.navigation.formMethod)&&R.navigation.state==="loading"&&v.state?._isRedirect!==!0,K;T.actionData?Object.keys(T.actionData).length>0?K=T.actionData:K=null:X?K=R.actionData:K=null;let re=T.loaderData?ym(R.loaderData,T.loaderData,T.matches||[],T.errors):R.loaderData,P=R.blockers;P.size>0&&(P=new Map(P),P.forEach((ce,ue)=>P.set(ue,_i)));let F=be?!1:Fi(v,T.matches||R.matches),ee=Ye===!0||R.navigation.formMethod!=null&&Rt(R.navigation.formMethod)&&v.state?._isRedirect!==!0;x&&(y=x,x=void 0),be||ie==="POP"||(ie==="PUSH"?i.history.push(v,v.state):ie==="REPLACE"&&i.history.replace(v,v.state));let le;if(ie==="POP"){let ce=gt.get(R.location.pathname);ce&&ce.has(v.pathname)?le={currentLocation:R.location,nextLocation:v}:gt.has(v.pathname)&&(le={currentLocation:v,nextLocation:R.location})}else if(Le){let ce=gt.get(R.location.pathname);ce?ce.add(v.pathname):(ce=new Set([v.pathname]),gt.set(R.location.pathname,ce)),le={currentLocation:R.location,nextLocation:v}}ct({...T,actionData:K,loaderData:re,historyAction:ie,location:v,initialized:!0,navigation:Ys,revalidation:"idle",restoreScrollPosition:F,preventScrollReset:ee,blockers:P},{viewTransitionOpts:le,flushSync:M===!0}),ie="POP",Ye=!1,Le=!1,be=!1,_=!1,xe?.resolve(),xe=null,it?.resolve(),it=null}async function ga(v,T){if(xe?.resolve(),xe=null,typeof v=="number"){xe||(xe=jm());let De=xe.promise;return i.history.go(v),De}let M=Qs(R.location,R.matches,g,v,T?.fromRouteId,T?.relative),{path:X,submission:K,error:re}=sm(!1,M,T),P=R.location,F=Yi(R.location,X,T&&T.state);F={...F,...i.history.encodeLocation(F)};let ee=T&&T.replace!=null?T.replace:void 0,le="PUSH";ee===!0?le="REPLACE":ee===!1||K!=null&&Rt(K.formMethod)&&K.formAction===R.location.pathname+R.location.search&&(le="REPLACE");let ce=T&&"preventScrollReset"in T?T.preventScrollReset===!0:void 0,ue=(T&&T.flushSync)===!0,Ue=Rn({currentLocation:P,nextLocation:F,historyAction:le});if(Ue){Ea(Ue,{state:"blocked",location:F,proceed(){Ea(Ue,{state:"proceeding",proceed:void 0,reset:void 0,location:F}),ga(v,T)},reset(){let De=new Map(R.blockers);De.set(Ue,_i),ct({blockers:De})}});return}await ra(le,F,{submission:K,pendingError:re,preventScrollReset:ce,replace:T&&T.replace,enableViewTransition:T&&T.viewTransition,flushSync:ue,callSiteDefaultShouldRevalidate:T&&T.unstable_defaultShouldRevalidate})}function Hl(){it||(it=jm()),el(),ct({revalidation:"loading"});let v=it.promise;return R.navigation.state==="submitting"?v:R.navigation.state==="idle"?(ra(R.historyAction,R.location,{startUninterruptedRevalidation:!0}),v):(ra(ie||R.historyAction,R.navigation.location,{overrideNavigation:R.navigation,enableViewTransition:Le===!0}),v)}async function ra(v,T,M){Te&&Te.abort(),Te=null,ie=v,be=(M&&M.startUninterruptedRevalidation)===!0,An(R.location,R.matches),Ye=(M&&M.preventScrollReset)===!0,Le=(M&&M.enableViewTransition)===!0;let X=x||y,K=M&&M.overrideNavigation,re=M?.initialHydration&&R.matches&&R.matches.length>0&&!te?R.matches:vn(X,T,g),P=(M&&M.flushSync)===!0;if(re&&R.initialized&&!_&&z1(R.location,T)&&!(M&&M.submission&&Rt(M.submission.formMethod))){Na(T,{matches:re},{flushSync:P});return}let F=Dn(re,X,T.pathname);if(F.active&&F.matches&&(re=F.matches),!re){let{error:tt,notFoundMatches:at,route:Me}=Ja(T.pathname);Na(T,{matches:at,loaderData:{},errors:{[Me.id]:tt}},{flushSync:P});return}Te=new AbortController;let ee=Cl(i.history,T,Te.signal,M&&M.submission),le=i.getContext?await i.getContext():new nm,ce;if(M&&M.pendingError)ce=[bn(re).route.id,{type:"error",error:M.pendingError}];else if(M&&M.submission&&Rt(M.submission.formMethod)){let tt=await yu(ee,T,M.submission,re,le,F.active,M&&M.initialHydration===!0,{replace:M.replace,flushSync:P});if(tt.shortCircuited)return;if(tt.pendingActionResult){let[at,Me]=tt.pendingActionResult;if(Jt(Me)&&Gi(Me.error)&&Me.error.status===404){Te=null,Na(T,{matches:tt.matches,loaderData:{},errors:{[at]:Me.error}});return}}re=tt.matches||re,ce=tt.pendingActionResult,K=qs(T,M.submission),P=!1,F.active=!1,ee=Cl(i.history,ee.url,ee.signal)}let{shortCircuited:ue,matches:Ue,loaderData:De,errors:et}=await Ki(ee,T,re,le,F.active,K,M&&M.submission,M&&M.fetcherSubmission,M&&M.replace,M&&M.initialHydration===!0,P,ce,M&&M.callSiteDefaultShouldRevalidate);ue||(Te=null,Na(T,{matches:Ue||re,...vm(ce),loaderData:De,errors:et}))}async function yu(v,T,M,X,K,re,P,F={}){el();let ee=L1(T,M);if(ct({navigation:ee},{flushSync:F.flushSync===!0}),re){let ue=await Ka(X,T.pathname,v.signal);if(ue.type==="aborted")return{shortCircuited:!0};if(ue.type==="error"){if(ue.partialMatches.length===0){let{matches:De,route:et}=su(y);return{matches:De,pendingActionResult:[et.id,{type:"error",error:ue.error}]}}let Ue=bn(ue.partialMatches).route.id;return{matches:ue.partialMatches,pendingActionResult:[Ue,{type:"error",error:ue.error}]}}else if(ue.matches)X=ue.matches;else{let{notFoundMatches:Ue,error:De,route:et}=Ja(T.pathname);return{matches:Ue,pendingActionResult:[et.id,{type:"error",error:De}]}}}let le,ce=du(X,T);if(!ce.route.action&&!ce.route.lazy)le={type:"error",error:na(405,{method:v.method,pathname:T.pathname,routeId:ce.route.id})};else{let ue=Ll(h,p,v,X,ce,P?[]:c,K),Ue=await En(v,ue,K,null);if(le=Ue[ce.route.id],!le){for(let De of X)if(Ue[De.route.id]){le=Ue[De.route.id];break}}if(v.signal.aborted)return{shortCircuited:!0}}if(Fn(le)){let ue;return F&&F.replace!=null?ue=F.replace:ue=pm(le.response.headers.get("Location"),new URL(v.url),g,i.history)===R.location.pathname+R.location.search,await rt(v,le,!0,{submission:M,replace:ue}),{shortCircuited:!0}}if(Jt(le)){let ue=bn(X,ce.route.id);return(F&&F.replace)!==!0&&(ie="PUSH"),{matches:X,pendingActionResult:[ue.route.id,le,ce.route.id]}}return{matches:X,pendingActionResult:[ce.route.id,le]}}async function Ki(v,T,M,X,K,re,P,F,ee,le,ce,ue,Ue){let De=re||qs(T,P),et=P||F||Sm(De),tt=!be&&!le;if(K){if(tt){let ut=In(ue);ct({navigation:De,...ut!==void 0?{actionData:ut}:{}},{flushSync:ce})}let Oe=await Ka(M,T.pathname,v.signal);if(Oe.type==="aborted")return{shortCircuited:!0};if(Oe.type==="error"){if(Oe.partialMatches.length===0){let{matches:fa,route:bt}=su(y);return{matches:fa,loaderData:{},errors:{[bt.id]:Oe.error}}}let ut=bn(Oe.partialMatches).route.id;return{matches:Oe.partialMatches,loaderData:{},errors:{[ut]:Oe.error}}}else if(Oe.matches)M=Oe.matches;else{let{error:ut,notFoundMatches:fa,route:bt}=Ja(T.pathname);return{matches:fa,loaderData:{},errors:{[bt.id]:ut}}}}let at=x||y,{dsMatches:Me,revalidatingFetchers:yt}=cm(v,X,h,p,i.history,R,M,et,T,le?[]:c,le===!0,_,V,oe,Z,H,at,g,i.patchRoutesOnNavigation!=null,ue,Ue);if(pe=++de,!i.dataStrategy&&!Me.some(Oe=>Oe.shouldLoad)&&!Me.some(Oe=>Oe.route.middleware&&Oe.route.middleware.length>0)&&yt.length===0){let Oe=Et();return Na(T,{matches:M,loaderData:{},errors:ue&&Jt(ue[1])?{[ue[0]]:ue[1].error}:null,...vm(ue),...Oe?{fetchers:new Map(R.fetchers)}:{}},{flushSync:ce}),{shortCircuited:!0}}if(tt){let Oe={};if(!K){Oe.navigation=De;let ut=In(ue);ut!==void 0&&(Oe.actionData=ut)}yt.length>0&&(Oe.fetchers=Bl(yt)),ct(Oe,{flushSync:ce})}yt.forEach(Oe=>{Ie(Oe.key),Oe.controller&&W.set(Oe.key,Oe.controller)});let Dt=()=>yt.forEach(Oe=>Ie(Oe.key));Te&&Te.signal.addEventListener("abort",Dt);let{loaderResults:Fe,fetcherResults:sa}=await ql(Me,yt,v,X);if(v.signal.aborted)return{shortCircuited:!0};Te&&Te.signal.removeEventListener("abort",Dt),yt.forEach(Oe=>W.delete(Oe.key));let Bt=cu(Fe);if(Bt)return await rt(v,Bt.result,!0,{replace:ee}),{shortCircuited:!0};if(Bt=cu(sa),Bt)return H.add(Bt.key),await rt(v,Bt.result,!0,{replace:ee}),{shortCircuited:!0};let{loaderData:ca,errors:Kt}=xm(R,M,Fe,ue,yt,sa);le&&R.errors&&(Kt={...R.errors,...Kt});let Ra=Et(),Mn=ki(pe),On=Ra||Mn||yt.length>0;return{matches:M,loaderData:ca,errors:Kt,...On?{fetchers:new Map(R.fetchers)}:{}}}function In(v){if(v&&!Jt(v[1]))return{[v[0]]:v[1].data};if(R.actionData)return Object.keys(R.actionData).length===0?null:R.actionData}function Bl(v){return v.forEach(T=>{let M=R.fetchers.get(T.key),X=Ci(void 0,M?M.data:void 0);R.fetchers.set(T.key,X)}),new Map(R.fetchers)}async function Yl(v,T,M,X){Ie(v);let K=(X&&X.flushSync)===!0,re=x||y,P=Qs(R.location,R.matches,g,M,T,X?.relative),F=vn(re,P,g),ee=Dn(F,re,P);if(ee.active&&ee.matches&&(F=ee.matches),!F){ua(v,T,na(404,{pathname:P}),{flushSync:K});return}let{path:le,submission:ce,error:ue}=sm(!0,P,X);if(ue){ua(v,T,ue,{flushSync:K});return}let Ue=i.getContext?await i.getContext():new nm,De=(X&&X.preventScrollReset)===!0;if(ce&&Rt(ce.formMethod)){await vu(v,T,le,F,Ue,ee.active,K,De,ce,X&&X.unstable_defaultShouldRevalidate);return}Z.set(v,{routeId:T,path:le}),await bu(v,T,le,F,Ue,ee.active,K,De,ce)}async function vu(v,T,M,X,K,re,P,F,ee,le){el(),Z.delete(v);let ce=R.fetchers.get(v);At(v,H1(ee,ce),{flushSync:P});let ue=new AbortController,Ue=Cl(i.history,M,ue.signal,ee);if(re){let _e=await Ka(X,new URL(Ue.url).pathname,Ue.signal,v);if(_e.type==="aborted")return;if(_e.type==="error"){ua(v,T,_e.error,{flushSync:P});return}else if(_e.matches)X=_e.matches;else{ua(v,T,na(404,{pathname:M}),{flushSync:P});return}}let De=du(X,M);if(!De.route.action&&!De.route.lazy){let _e=na(405,{method:ee.formMethod,pathname:M,routeId:T});ua(v,T,_e,{flushSync:P});return}W.set(v,ue);let et=de,tt=Ll(h,p,Ue,X,De,c,K),at=await En(Ue,tt,K,v),Me=at[De.route.id];if(!Me){for(let _e of tt)if(at[_e.route.id]){Me=at[_e.route.id];break}}if(Ue.signal.aborted){W.get(v)===ue&&W.delete(v);return}if(oe.has(v)){if(Fn(Me)||Jt(Me)){At(v,Za(void 0));return}}else{if(Fn(Me))if(W.delete(v),pe>et){At(v,Za(void 0));return}else return H.add(v),At(v,Ci(ee)),rt(Ue,Me,!1,{fetcherSubmission:ee,preventScrollReset:F});if(Jt(Me)){ua(v,T,Me.error);return}}let yt=R.navigation.location||R.location,Dt=Cl(i.history,yt,ue.signal),Fe=x||y,sa=R.navigation.state!=="idle"?vn(Fe,R.navigation.location,g):R.matches;Se(sa,"Didn't find any matches after fetcher action");let Bt=++de;S.set(v,Bt);let ca=Ci(ee,Me.data);R.fetchers.set(v,ca);let{dsMatches:Kt,revalidatingFetchers:Ra}=cm(Dt,K,h,p,i.history,R,sa,ee,yt,c,!1,_,V,oe,Z,H,Fe,g,i.patchRoutesOnNavigation!=null,[De.route.id,Me],le);Ra.filter(_e=>_e.key!==v).forEach(_e=>{let _n=_e.key,Pi=R.fetchers.get(_n),Ql=Ci(void 0,Pi?Pi.data:void 0);R.fetchers.set(_n,Ql),Ie(_n),_e.controller&&W.set(_n,_e.controller)}),ct({fetchers:new Map(R.fetchers)});let Mn=()=>Ra.forEach(_e=>Ie(_e.key));ue.signal.addEventListener("abort",Mn);let{loaderResults:On,fetcherResults:Oe}=await ql(Kt,Ra,Dt,K);if(ue.signal.aborted)return;if(ue.signal.removeEventListener("abort",Mn),S.delete(v),W.delete(v),Ra.forEach(_e=>W.delete(_e.key)),R.fetchers.has(v)){let _e=Za(Me.data);R.fetchers.set(v,_e)}let ut=cu(On);if(ut)return rt(Dt,ut.result,!1,{preventScrollReset:F});if(ut=cu(Oe),ut)return H.add(ut.key),rt(Dt,ut.result,!1,{preventScrollReset:F});let{loaderData:fa,errors:bt}=xm(R,sa,On,void 0,Ra,Oe);ki(Bt),R.navigation.state==="loading"&&Bt>pe?(Se(ie,"Expected pending action"),Te&&Te.abort(),Na(R.navigation.location,{matches:sa,loaderData:fa,errors:bt,fetchers:new Map(R.fetchers)})):(ct({errors:bt,loaderData:ym(R.loaderData,fa,sa,bt),fetchers:new Map(R.fetchers)}),_=!1)}async function bu(v,T,M,X,K,re,P,F,ee){let le=R.fetchers.get(v);At(v,Ci(ee,le?le.data:void 0),{flushSync:P});let ce=new AbortController,ue=Cl(i.history,M,ce.signal);if(re){let Me=await Ka(X,new URL(ue.url).pathname,ue.signal,v);if(Me.type==="aborted")return;if(Me.type==="error"){ua(v,T,Me.error,{flushSync:P});return}else if(Me.matches)X=Me.matches;else{ua(v,T,na(404,{pathname:M}),{flushSync:P});return}}let Ue=du(X,M);W.set(v,ce);let De=de,et=Ll(h,p,ue,X,Ue,c,K),at=(await En(ue,et,K,v))[Ue.route.id];if(W.get(v)===ce&&W.delete(v),!ue.signal.aborted){if(oe.has(v)){At(v,Za(void 0));return}if(Fn(at))if(pe>De){At(v,Za(void 0));return}else{H.add(v),await rt(ue,at,!1,{preventScrollReset:F});return}if(Jt(at)){ua(v,T,at.error);return}At(v,Za(at.data))}}async function rt(v,T,M,{submission:X,fetcherSubmission:K,preventScrollReset:re,replace:P}={}){M||(xe?.resolve(),xe=null),T.response.headers.has("X-Remix-Revalidate")&&(_=!0);let F=T.response.headers.get("Location");Se(F,"Expected a Location header on the redirect Response"),F=pm(F,new URL(v.url),g,i.history);let ee=Yi(R.location,F,{_isRedirect:!0});if(o){let et=!1;if(T.response.headers.has("X-Remix-Reload-Document"))et=!0;else if(ks(F)){const tt=Mm(F,!0);et=tt.origin!==u.location.origin||la(tt.pathname,g)==null}if(et){P?u.location.replace(F):u.location.assign(F);return}}Te=null;let le=P===!0||T.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:ce,formAction:ue,formEncType:Ue}=R.navigation;!X&&!K&&ce&&ue&&Ue&&(X=Sm(R.navigation));let De=X||K;if(d1.has(T.response.status)&&De&&Rt(De.formMethod))await ra(le,ee,{submission:{...De,formAction:F},preventScrollReset:re||Ye,enableViewTransition:M?Le:void 0});else{let et=qs(ee,X);await ra(le,ee,{overrideNavigation:et,fetcherSubmission:K,preventScrollReset:re||Ye,enableViewTransition:M?Le:void 0})}}async function En(v,T,M,X){let K,re={};try{K=await j1(N,v,T,X,M,!1)}catch(P){return T.filter(F=>F.shouldLoad).forEach(F=>{re[F.route.id]={type:"error",error:P}}),re}if(v.signal.aborted)return re;if(!Rt(v.method))for(let P of T){if(K[P.route.id]?.type==="error")break;!K.hasOwnProperty(P.route.id)&&!R.loaderData.hasOwnProperty(P.route.id)&&(!R.errors||!R.errors.hasOwnProperty(P.route.id))&&P.shouldCallHandler()&&(K[P.route.id]={type:"error",result:new Error(`No result returned from dataStrategy for route ${P.route.id}`)})}for(let[P,F]of Object.entries(K))if(O1(F)){let ee=F.result;re[P]={type:"redirect",response:T1(ee,v,P,T,g)}}else re[P]=await E1(F);return re}async function ql(v,T,M,X){let K=En(M,v,X,null),re=Promise.all(T.map(async ee=>{if(ee.matches&&ee.match&&ee.request&&ee.controller){let ce=(await En(ee.request,ee.matches,X,ee.key))[ee.match.route.id];return{[ee.key]:ce}}else return Promise.resolve({[ee.key]:{type:"error",error:na(404,{pathname:ee.path})}})})),P=await K,F=(await re).reduce((ee,le)=>Object.assign(ee,le),{});return{loaderResults:P,fetcherResults:F}}function el(){_=!0,Z.forEach((v,T)=>{W.has(T)&&V.add(T),Ie(T)})}function At(v,T,M={}){R.fetchers.set(v,T),ct({fetchers:new Map(R.fetchers)},{flushSync:(M&&M.flushSync)===!0})}function ua(v,T,M,X={}){let K=bn(R.matches,T);Xl(v),ct({errors:{[K.route.id]:M},fetchers:new Map(R.fetchers)},{flushSync:(X&&X.flushSync)===!0})}function Gl(v){return $.set(v,($.get(v)||0)+1),oe.has(v)&&oe.delete(v),R.fetchers.get(v)||h1}function Su(v,T){Ie(v,T?.reason),At(v,Za(null))}function Xl(v){let T=R.fetchers.get(v);W.has(v)&&!(T&&T.state==="loading"&&S.has(v))&&Ie(v),Z.delete(v),S.delete(v),H.delete(v),oe.delete(v),V.delete(v),R.fetchers.delete(v)}function Tn(v){let T=($.get(v)||0)-1;T<=0?($.delete(v),oe.add(v)):$.set(v,T),ct({fetchers:new Map(R.fetchers)})}function Ie(v,T){let M=W.get(v);M&&(M.abort(T),W.delete(v))}function oa(v){for(let T of v){let M=Gl(T),X=Za(M.data);R.fetchers.set(T,X)}}function Et(){let v=[],T=!1;for(let M of H){let X=R.fetchers.get(M);Se(X,`Expected fetcher: ${M}`),X.state==="loading"&&(H.delete(M),v.push(M),T=!0)}return oa(v),T}function ki(v){let T=[];for(let[M,X]of S)if(X<v){let K=R.fetchers.get(M);Se(K,`Expected fetcher: ${M}`),K.state==="loading"&&(Ie(M),S.delete(M),T.push(M))}return oa(T),T.length>0}function ju(v,T){let M=R.blockers.get(v)||_i;return he.get(v)!==T&&he.set(v,T),M}function Wi(v){R.blockers.delete(v),he.delete(v)}function Ea(v,T){let M=R.blockers.get(v)||_i;Se(M.state==="unblocked"&&T.state==="blocked"||M.state==="blocked"&&T.state==="blocked"||M.state==="blocked"&&T.state==="proceeding"||M.state==="blocked"&&T.state==="unblocked"||M.state==="proceeding"&&T.state==="unblocked",`Invalid blocker state transition: ${M.state} -> ${T.state}`);let X=new Map(R.blockers);X.set(v,T),ct({blockers:X})}function Rn({currentLocation:v,nextLocation:T,historyAction:M}){if(he.size===0)return;he.size>1&&pt(!1,"A router only supports one blocker at a time");let X=Array.from(he.entries()),[K,re]=X[X.length-1],P=R.blockers.get(K);if(!(P&&P.state==="proceeding")&&re({currentLocation:v,nextLocation:T,historyAction:M}))return K}function Ja(v){let T=na(404,{pathname:v}),M=x||y,{matches:X,route:K}=su(M);return{notFoundMatches:X,route:K,error:T}}function Ta(v,T,M){if(G=v,k=T,Q=M||null,!I&&R.navigation===Ys){I=!0;let X=Fi(R.location,R.matches);X!=null&&ct({restoreScrollPosition:X})}return()=>{G=null,k=null,Q=null}}function zn(v,T){return Q&&Q(v,T.map(X=>Yg(X,R.loaderData)))||v.key}function An(v,T){if(G&&k){let M=zn(v,T);G[M]=k()}}function Fi(v,T){if(G){let M=zn(v,T),X=G[M];if(typeof X=="number")return X}return null}function Dn(v,T,M){if(i.patchRoutesOnNavigation)if(v){if(Object.keys(v[0].params).length>0)return{active:!0,matches:Hi(T,M,g,!0)}}else return{active:!0,matches:Hi(T,M,g,!0)||[]};return{active:!1,matches:null}}async function Ka(v,T,M,X){if(!i.patchRoutesOnNavigation)return{type:"success",matches:v};let K=v;for(;;){let re=x==null,P=x||y,F=p;try{await i.patchRoutesOnNavigation({signal:M,path:T,matches:K,fetcherKey:X,patch:(ce,ue)=>{M.aborted||fm(ce,ue,P,F,h,!1)}})}catch(ce){return{type:"error",error:ce,partialMatches:K}}finally{re&&!M.aborted&&(y=[...y])}if(M.aborted)return{type:"aborted"};let ee=vn(P,T,g),le=null;if(ee){if(Object.keys(ee[0].params).length===0)return{type:"success",matches:ee};if(le=Hi(P,T,g,!0),!(le&&K.length<le.length&&ka(K,le.slice(0,K.length))))return{type:"success",matches:ee}}if(le||(le=Hi(P,T,g,!0)),!le||ka(K,le))return{type:"success",matches:null};K=le}}function ka(v,T){return v.length===T.length&&v.every((M,X)=>M.route.id===T[X].route.id)}function wu(v){p={},x=qi(v,h,void 0,p)}function $i(v,T,M=!1){let X=x==null;fm(v,T,x||y,p,h,M),X&&(y=[...y],ct({}))}return we={get basename(){return g},get future(){return j},get state(){return R},get routes(){return y},get window(){return u},initialize:Pe,subscribe:Pn,enableScrollRestoration:Ta,navigate:ga,fetch:Yl,revalidate:Hl,createHref:v=>i.history.createHref(v),encodeLocation:v=>i.history.encodeLocation(v),getFetcher:Gl,resetFetcher:Su,deleteFetcher:Tn,dispose:Nn,getBlocker:ju,deleteBlocker:Wi,patchRoutes:$i,_internalFetchControllers:W,_internalSetRoutes:wu,_internalSetStateDoNotUseOrYouWillBreakYourApp(v){ct(v)}},i.unstable_instrumentations&&(we=l1(we,i.unstable_instrumentations.map(v=>v.router).filter(Boolean))),we}function g1(i){return i!=null&&("formData"in i&&i.formData!=null||"body"in i&&i.body!==void 0)}function Qs(i,u,o,c,d,h){let p,y;if(d){p=[];for(let g of u)if(p.push(g),g.route.id===d){y=g;break}}else p=u,y=u[u.length-1];let x=Fs(c||".",Ws(p),la(i.pathname,o)||i.pathname,h==="path");if(c==null&&(x.search=i.search,x.hash=i.hash),(c==null||c===""||c===".")&&y){let g=Is(x.search);if(y.route.index&&!g)x.search=x.search?x.search.replace(/^\?/,"?index&"):"?index";else if(!y.route.index&&g){let N=new URLSearchParams(x.search),j=N.getAll("index");N.delete("index"),j.filter(L=>L).forEach(L=>N.append("index",L));let C=N.toString();x.search=C?`?${C}`:""}}return o!=="/"&&(x.pathname=Pg({basename:o,pathname:x.pathname})),wa(x)}function sm(i,u,o){if(!o||!g1(o))return{path:u};if(o.formMethod&&!U1(o.formMethod))return{path:u,error:na(405,{method:o.formMethod})};let c=()=>({path:u,error:na(400,{type:"invalid-body"})}),h=(o.formMethod||"get").toUpperCase(),p=km(u);if(o.body!==void 0){if(o.formEncType==="text/plain"){if(!Rt(h))return c();let j=typeof o.body=="string"?o.body:o.body instanceof FormData||o.body instanceof URLSearchParams?Array.from(o.body.entries()).reduce((C,[L,G])=>`${C}${L}=${G}
`,""):String(o.body);return{path:u,submission:{formMethod:h,formAction:p,formEncType:o.formEncType,formData:void 0,json:void 0,text:j}}}else if(o.formEncType==="application/json"){if(!Rt(h))return c();try{let j=typeof o.body=="string"?JSON.parse(o.body):o.body;return{path:u,submission:{formMethod:h,formAction:p,formEncType:o.formEncType,formData:void 0,json:j,text:void 0}}}catch{return c()}}}Se(typeof FormData=="function","FormData is not available in this environment");let y,x;if(o.formData)y=Js(o.formData),x=o.formData;else if(o.body instanceof FormData)y=Js(o.body),x=o.body;else if(o.body instanceof URLSearchParams)y=o.body,x=gm(y);else if(o.body==null)y=new URLSearchParams,x=new FormData;else try{y=new URLSearchParams(o.body),x=gm(y)}catch{return c()}let g={formMethod:h,formAction:p,formEncType:o&&o.formEncType||"application/x-www-form-urlencoded",formData:x,json:void 0,text:void 0};if(Rt(g.formMethod))return{path:u,submission:g};let N=jn(u);return i&&N.search&&Is(N.search)&&y.append("index",""),N.search=`?${y}`,{path:wa(N),submission:g}}function cm(i,u,o,c,d,h,p,y,x,g,N,j,C,L,G,Q,k,I,J,te,je){let ve=te?Jt(te[1])?te[1].error:te[1].data:void 0,we=d.createURL(h.location),R=d.createURL(x),ie;if(N&&h.errors){let be=Object.keys(h.errors)[0];ie=p.findIndex(_=>_.route.id===be)}else if(te&&Jt(te[1])){let be=te[0];ie=p.findIndex(_=>_.route.id===be)-1}let xe=te?te[1].statusCode:void 0,Ye=xe&&xe>=400,Te={currentUrl:we,currentParams:h.matches[0]?.params||{},nextUrl:R,nextParams:p[0].params,...y,actionResult:ve,actionStatus:xe},Le=Qi(p),gt=p.map((be,_)=>{let{route:V}=be,W=null;if(ie!=null&&_>ie?W=!1:V.lazy?W=!0:$s(V)?N?W=Vs(V,h.loaderData,h.errors):x1(h.loaderData,h.matches[_],be)&&(W=!0):W=!1,W!==null)return Zs(o,c,i,Le,be,g,u,W);let de=!1;typeof je=="boolean"?de=je:Ye?de=!1:(j||we.pathname+we.search===R.pathname+R.search||we.search!==R.search||y1(h.matches[_],be))&&(de=!0);let pe={...Te,defaultShouldRevalidate:de},S=Bi(be,pe);return Zs(o,c,i,Le,be,g,u,S,pe,je)}),Ge=[];return G.forEach((be,_)=>{if(N||!p.some($=>$.route.id===be.routeId)||L.has(_))return;let V=h.fetchers.get(_),W=V&&V.state!=="idle"&&V.data===void 0,de=vn(k,be.path,I);if(!de){if(J&&W)return;Ge.push({key:_,routeId:be.routeId,path:be.path,matches:null,match:null,request:null,controller:null});return}if(Q.has(_))return;let pe=du(de,be.path),S=new AbortController,H=Cl(d,be.path,S.signal),Z=null;if(C.has(_))C.delete(_),Z=Ll(o,c,H,de,pe,g,u);else if(W)j&&(Z=Ll(o,c,H,de,pe,g,u));else{let $;typeof je=="boolean"?$=je:Ye?$=!1:$=j;let oe={...Te,defaultShouldRevalidate:$};Bi(pe,oe)&&(Z=Ll(o,c,H,de,pe,g,u,oe))}Z&&Ge.push({key:_,routeId:be.routeId,path:be.path,matches:Z,match:pe,request:H,controller:S})}),{dsMatches:gt,revalidatingFetchers:Ge}}function $s(i){return i.loader!=null||i.middleware!=null&&i.middleware.length>0}function Vs(i,u,o){if(i.lazy)return!0;if(!$s(i))return!1;let c=u!=null&&i.id in u,d=o!=null&&o[i.id]!==void 0;return!c&&d?!1:typeof i.loader=="function"&&i.loader.hydrate===!0?!0:!c&&!d}function x1(i,u,o){let c=!u||o.route.id!==u.route.id,d=!i.hasOwnProperty(o.route.id);return c||d}function y1(i,u){let o=i.route.path;return i.pathname!==u.pathname||o!=null&&o.endsWith("*")&&i.params["*"]!==u.params["*"]}function Bi(i,u){if(i.route.shouldRevalidate){let o=i.route.shouldRevalidate(u);if(typeof o=="boolean")return o}return u.defaultShouldRevalidate}function fm(i,u,o,c,d,h){let p;if(i){let g=c[i];Se(g,`No route found to patch children into: routeId = ${i}`),g.children||(g.children=[]),p=g.children}else p=o;let y=[],x=[];if(u.forEach(g=>{let N=p.find(j=>Qm(g,j));N?x.push({existingRoute:N,newRoute:g}):y.push(g)}),y.length>0){let g=qi(y,d,[i||"_","patch",String(p?.length||"0")],c);p.push(...g)}if(h&&x.length>0)for(let g=0;g<x.length;g++){let{existingRoute:N,newRoute:j}=x[g],C=N,[L]=qi([j],d,[],{},!0);Object.assign(C,{element:L.element?L.element:C.element,errorElement:L.errorElement?L.errorElement:C.errorElement,hydrateFallbackElement:L.hydrateFallbackElement?L.hydrateFallbackElement:C.hydrateFallbackElement})}}function Qm(i,u){return"id"in i&&"id"in u&&i.id===u.id?!0:i.index===u.index&&i.path===u.path&&i.caseSensitive===u.caseSensitive?(!i.children||i.children.length===0)&&(!u.children||u.children.length===0)?!0:i.children.every((o,c)=>u.children?.some(d=>Qm(o,d))):!1}var dm=new WeakMap,Vm=({key:i,route:u,manifest:o,mapRouteProperties:c})=>{let d=o[u.id];if(Se(d,"No route found in manifest"),!d.lazy||typeof d.lazy!="object")return;let h=d.lazy[i];if(!h)return;let p=dm.get(d);p||(p={},dm.set(d,p));let y=p[i];if(y)return y;let x=(async()=>{let g=Ug(i),j=d[i]!==void 0&&i!=="hasErrorBoundary";if(g)pt(!g,"Route property "+i+" is not a supported lazy route property. This property will be ignored."),p[i]=Promise.resolve();else if(j)pt(!1,`Route "${d.id}" has a static property "${i}" defined. The lazy property will be ignored.`);else{let C=await h();C!=null&&(Object.assign(d,{[i]:C}),Object.assign(d,c(d)))}typeof d.lazy=="object"&&(d.lazy[i]=void 0,Object.values(d.lazy).every(C=>C===void 0)&&(d.lazy=void 0))})();return p[i]=x,x},hm=new WeakMap;function v1(i,u,o,c,d){let h=o[i.id];if(Se(h,"No route found in manifest"),!i.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof i.lazy=="function"){let N=hm.get(h);if(N)return{lazyRoutePromise:N,lazyHandlerPromise:N};let j=(async()=>{Se(typeof i.lazy=="function","No lazy route function found");let C=await i.lazy(),L={};for(let G in C){let Q=C[G];if(Q===void 0)continue;let k=Hg(G),J=h[G]!==void 0&&G!=="hasErrorBoundary";k?pt(!k,"Route property "+G+" is not a supported property to be returned from a lazy route function. This property will be ignored."):J?pt(!J,`Route "${h.id}" has a static property "${G}" defined but its lazy function is also returning a value for this property. The lazy route property "${G}" will be ignored.`):L[G]=Q}Object.assign(h,L),Object.assign(h,{...c(h),lazy:void 0})})();return hm.set(h,j),j.catch(()=>{}),{lazyRoutePromise:j,lazyHandlerPromise:j}}let p=Object.keys(i.lazy),y=[],x;for(let N of p){if(d&&d.includes(N))continue;let j=Vm({key:N,route:i,manifest:o,mapRouteProperties:c});j&&(y.push(j),N===u&&(x=j))}let g=y.length>0?Promise.all(y).then(()=>{}):void 0;return g?.catch(()=>{}),x?.catch(()=>{}),{lazyRoutePromise:g,lazyHandlerPromise:x}}async function mm(i){let u=i.matches.filter(d=>d.shouldLoad),o={};return(await Promise.all(u.map(d=>d.resolve()))).forEach((d,h)=>{o[u[h].route.id]=d}),o}async function b1(i){return i.matches.some(u=>u.route.middleware)?Zm(i,()=>mm(i)):mm(i)}function Zm(i,u){return S1(i,u,c=>{if(C1(c))throw c;return c},D1,o);function o(c,d,h){if(h)return Promise.resolve(Object.assign(h.value,{[d]:{type:"error",result:c}}));{let{matches:p}=i,y=Math.min(Math.max(p.findIndex(g=>g.route.id===d),0),Math.max(p.findIndex(g=>g.shouldCallHandler()),0)),x=bn(p,p[y].route.id).route.id;return Promise.resolve({[x]:{type:"error",result:c}})}}}async function S1(i,u,o,c,d){let{matches:h,request:p,params:y,context:x,unstable_pattern:g}=i,N=h.flatMap(C=>C.route.middleware?C.route.middleware.map(L=>[C.route.id,L]):[]);return await Jm({request:p,params:y,context:x,unstable_pattern:g},N,u,o,c,d)}async function Jm(i,u,o,c,d,h,p=0){let{request:y}=i;if(y.signal.aborted)throw y.signal.reason??new Error(`Request aborted: ${y.method} ${y.url}`);let x=u[p];if(!x)return await o();let[g,N]=x,j,C=async()=>{if(j)throw new Error("You may only call `next()` once per middleware");try{return j={value:await Jm(i,u,o,c,d,h,p+1)},j.value}catch(L){return j={value:await h(L,g,j)},j.value}};try{let L=await N(i,C),G=L!=null?c(L):void 0;return d(G)?G:j?G??j.value:(j={value:await C()},j.value)}catch(L){return await h(L,g,j)}}function Km(i,u,o,c,d){let h=Vm({key:"middleware",route:c.route,manifest:u,mapRouteProperties:i}),p=v1(c.route,Rt(o.method)?"action":"loader",u,i,d);return{middleware:h,route:p.lazyRoutePromise,handler:p.lazyHandlerPromise}}function Zs(i,u,o,c,d,h,p,y,x=null,g){let N=!1,j=Km(i,u,o,d,h);return{...d,_lazyPromises:j,shouldLoad:y,shouldRevalidateArgs:x,shouldCallHandler(C){return N=!0,x?typeof g=="boolean"?Bi(d,{...x,defaultShouldRevalidate:g}):typeof C=="boolean"?Bi(d,{...x,defaultShouldRevalidate:C}):Bi(d,x):y},resolve(C){let{lazy:L,loader:G,middleware:Q}=d.route,k=N||y||C&&!Rt(o.method)&&(L||G),I=Q&&Q.length>0&&!G&&!L;return k&&(Rt(o.method)||!I)?w1({request:o,unstable_pattern:c,match:d,lazyHandlerPromise:j?.handler,lazyRoutePromise:j?.route,handlerOverride:C,scopedContext:p}):Promise.resolve({type:"data",result:void 0})}}}function Ll(i,u,o,c,d,h,p,y=null){return c.map(x=>x.route.id!==d.route.id?{...x,shouldLoad:!1,shouldRevalidateArgs:y,shouldCallHandler:()=>!1,_lazyPromises:Km(i,u,o,x,h),resolve:()=>Promise.resolve({type:"data",result:void 0})}:Zs(i,u,o,Qi(c),x,h,p,!0,y))}async function j1(i,u,o,c,d,h){o.some(g=>g._lazyPromises?.middleware)&&await Promise.all(o.map(g=>g._lazyPromises?.middleware));let p={request:u,unstable_pattern:Qi(o),params:o[0].params,context:d,matches:o},x=await i({...p,fetcherKey:c,runClientMiddleware:g=>{let N=p;return Zm(N,()=>g({...N,fetcherKey:c,runClientMiddleware:()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))}});try{await Promise.all(o.flatMap(g=>[g._lazyPromises?.handler,g._lazyPromises?.route]))}catch{}return x}async function w1({request:i,unstable_pattern:u,match:o,lazyHandlerPromise:c,lazyRoutePromise:d,handlerOverride:h,scopedContext:p}){let y,x,g=Rt(i.method),N=g?"action":"loader",j=C=>{let L,G=new Promise((I,J)=>L=J);x=()=>L(),i.signal.addEventListener("abort",x);let Q=I=>typeof C!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${N}" [routeId: ${o.route.id}]`)):C({request:i,unstable_pattern:u,params:o.params,context:p},...I!==void 0?[I]:[]),k=(async()=>{try{return{type:"data",result:await(h?h(J=>Q(J)):Q())}}catch(I){return{type:"error",result:I}}})();return Promise.race([k,G])};try{let C=g?o.route.action:o.route.loader;if(c||d)if(C){let L,[G]=await Promise.all([j(C).catch(Q=>{L=Q}),c,d]);if(L!==void 0)throw L;y=G}else{await c;let L=g?o.route.action:o.route.loader;if(L)[y]=await Promise.all([j(L),d]);else if(N==="action"){let G=new URL(i.url),Q=G.pathname+G.search;throw na(405,{method:i.method,pathname:Q,routeId:o.route.id})}else return{type:"data",result:void 0}}else if(C)y=await j(C);else{let L=new URL(i.url),G=L.pathname+L.search;throw na(404,{pathname:G})}}catch(C){return{type:"error",result:C}}finally{x&&i.signal.removeEventListener("abort",x)}return y}async function N1(i){let u=i.headers.get("Content-Type");return u&&/\bapplication\/json\b/.test(u)?i.body==null?null:i.json():i.text()}async function E1(i){let{result:u,type:o}=i;if(Ps(u)){let c;try{c=await N1(u)}catch(d){return{type:"error",error:d}}return o==="error"?{type:"error",error:new Xi(u.status,u.statusText,c),statusCode:u.status,headers:u.headers}:{type:"data",data:c,statusCode:u.status,headers:u.headers}}return o==="error"?bm(u)?u.data instanceof Error?{type:"error",error:u.data,statusCode:u.init?.status,headers:u.init?.headers?new Headers(u.init.headers):void 0}:{type:"error",error:A1(u),statusCode:Gi(u)?u.status:void 0,headers:u.init?.headers?new Headers(u.init.headers):void 0}:{type:"error",error:u,statusCode:Gi(u)?u.status:void 0}:bm(u)?{type:"data",data:u.data,statusCode:u.init?.status,headers:u.init?.headers?new Headers(u.init.headers):void 0}:{type:"data",data:u}}function T1(i,u,o,c,d){let h=i.headers.get("Location");if(Se(h,"Redirects returned/thrown from loaders/actions must have a Location header"),!ks(h)){let p=c.slice(0,c.findIndex(y=>y.route.id===o)+1);h=Qs(new URL(u.url),p,d,h),i.headers.set("Location",h)}return i}function pm(i,u,o,c){let d=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];if(ks(i)){let h=i,p=h.startsWith("//")?new URL(u.protocol+h):new URL(h);if(d.includes(p.protocol))throw new Error("Invalid redirect location");let y=la(p.pathname,o)!=null;if(p.origin===u.origin&&y)return p.pathname+p.search+p.hash}try{let h=c.createURL(i);if(d.includes(h.protocol))throw new Error("Invalid redirect location")}catch{}return i}function Cl(i,u,o,c){let d=i.createURL(km(u)).toString(),h={signal:o};if(c&&Rt(c.formMethod)){let{formMethod:p,formEncType:y}=c;h.method=p.toUpperCase(),y==="application/json"?(h.headers=new Headers({"Content-Type":y}),h.body=JSON.stringify(c.json)):y==="text/plain"?h.body=c.text:y==="application/x-www-form-urlencoded"&&c.formData?h.body=Js(c.formData):h.body=c.formData}return new Request(d,h)}function Js(i){let u=new URLSearchParams;for(let[o,c]of i.entries())u.append(o,typeof c=="string"?c:c.name);return u}function gm(i){let u=new FormData;for(let[o,c]of i.entries())u.append(o,c);return u}function R1(i,u,o,c=!1,d=!1){let h={},p=null,y,x=!1,g={},N=o&&Jt(o[1])?o[1].error:void 0;return i.forEach(j=>{if(!(j.route.id in u))return;let C=j.route.id,L=u[C];if(Se(!Fn(L),"Cannot handle redirect results in processLoaderData"),Jt(L)){let G=L.error;if(N!==void 0&&(G=N,N=void 0),p=p||{},d)p[C]=G;else{let Q=bn(i,C);p[Q.route.id]==null&&(p[Q.route.id]=G)}c||(h[C]=Xm),x||(x=!0,y=Gi(L.error)?L.error.status:500),L.headers&&(g[C]=L.headers)}else h[C]=L.data,L.statusCode&&L.statusCode!==200&&!x&&(y=L.statusCode),L.headers&&(g[C]=L.headers)}),N!==void 0&&o&&(p={[o[0]]:N},o[2]&&(h[o[2]]=void 0)),{loaderData:h,errors:p,statusCode:y||200,loaderHeaders:g}}function xm(i,u,o,c,d,h){let{loaderData:p,errors:y}=R1(u,o,c);return d.filter(x=>!x.matches||x.matches.some(g=>g.shouldLoad)).forEach(x=>{let{key:g,match:N,controller:j}=x;if(j&&j.signal.aborted)return;let C=h[g];if(Se(C,"Did not find corresponding fetcher result"),Jt(C)){let L=bn(i.matches,N?.route.id);y&&y[L.route.id]||(y={...y,[L.route.id]:C.error}),i.fetchers.delete(g)}else if(Fn(C))Se(!1,"Unhandled fetcher revalidation redirect");else{let L=Za(C.data);i.fetchers.set(g,L)}}),{loaderData:p,errors:y}}function ym(i,u,o,c){let d=Object.entries(u).filter(([,h])=>h!==Xm).reduce((h,[p,y])=>(h[p]=y,h),{});for(let h of o){let p=h.route.id;if(!u.hasOwnProperty(p)&&i.hasOwnProperty(p)&&h.route.loader&&(d[p]=i[p]),c&&c.hasOwnProperty(p))break}return d}function vm(i){return i?Jt(i[1])?{actionData:{}}:{actionData:{[i[0]]:i[1].data}}:{}}function bn(i,u){return(u?i.slice(0,i.findIndex(c=>c.route.id===u)+1):[...i]).reverse().find(c=>c.route.hasErrorBoundary===!0)||i[0]}function su(i){let u=i.length===1?i[0]:i.find(o=>o.index||!o.path||o.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:u}],route:u}}function na(i,{pathname:u,routeId:o,method:c,type:d,message:h}={}){let p="Unknown Server Error",y="Unknown @remix-run/router error";return i===400?(p="Bad Request",c&&u&&o?y=`You made a ${c} request to "${u}" but did not provide a \`loader\` for route "${o}", so there is no way to handle the request.`:d==="invalid-body"&&(y="Unable to encode submission body")):i===403?(p="Forbidden",y=`Route "${o}" does not match URL "${u}"`):i===404?(p="Not Found",y=`No route matches URL "${u}"`):i===405&&(p="Method Not Allowed",c&&u&&o?y=`You made a ${c.toUpperCase()} request to "${u}" but did not provide an \`action\` for route "${o}", so there is no way to handle the request.`:c&&(y=`Invalid request method "${c.toUpperCase()}"`)),new Xi(i||500,p,new Error(y),!0)}function cu(i){let u=Object.entries(i);for(let o=u.length-1;o>=0;o--){let[c,d]=u[o];if(Fn(d))return{key:c,result:d}}}function km(i){let u=typeof i=="string"?jn(i):i;return wa({...u,hash:""})}function z1(i,u){return i.pathname!==u.pathname||i.search!==u.search?!1:i.hash===""?u.hash!=="":i.hash===u.hash?!0:u.hash!==""}function A1(i){return new Xi(i.init?.status??500,i.init?.statusText??"Internal Server Error",i.data)}function D1(i){return i!=null&&typeof i=="object"&&Object.entries(i).every(([u,o])=>typeof u=="string"&&M1(o))}function M1(i){return i!=null&&typeof i=="object"&&"type"in i&&"result"in i&&(i.type==="data"||i.type==="error")}function O1(i){return Ps(i.result)&&qm.has(i.result.status)}function Jt(i){return i.type==="error"}function Fn(i){return(i&&i.type)==="redirect"}function bm(i){return typeof i=="object"&&i!=null&&"type"in i&&"data"in i&&"init"in i&&i.type==="DataWithResponseInit"}function Ps(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.headers=="object"&&typeof i.body<"u"}function _1(i){return qm.has(i)}function C1(i){return Ps(i)&&_1(i.status)&&i.headers.has("Location")}function U1(i){return f1.has(i.toUpperCase())}function Rt(i){return s1.has(i.toUpperCase())}function Is(i){return new URLSearchParams(i).getAll("index").some(u=>u==="")}function du(i,u){let o=typeof u=="string"?jn(u).search:u.search;if(i[i.length-1].route.index&&Is(o||""))return i[i.length-1];let c=Um(i);return c[c.length-1]}function Sm(i){let{formMethod:u,formAction:o,formEncType:c,text:d,formData:h,json:p}=i;if(!(!u||!o||!c)){if(d!=null)return{formMethod:u,formAction:o,formEncType:c,formData:void 0,json:void 0,text:d};if(h!=null)return{formMethod:u,formAction:o,formEncType:c,formData:h,json:void 0,text:void 0};if(p!==void 0)return{formMethod:u,formAction:o,formEncType:c,formData:void 0,json:p,text:void 0}}}function qs(i,u){return u?{state:"loading",location:i,formMethod:u.formMethod,formAction:u.formAction,formEncType:u.formEncType,formData:u.formData,json:u.json,text:u.text}:{state:"loading",location:i,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function L1(i,u){return{state:"submitting",location:i,formMethod:u.formMethod,formAction:u.formAction,formEncType:u.formEncType,formData:u.formData,json:u.json,text:u.text}}function Ci(i,u){return i?{state:"loading",formMethod:i.formMethod,formAction:i.formAction,formEncType:i.formEncType,formData:i.formData,json:i.json,text:i.text,data:u}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:u}}function H1(i,u){return{state:"submitting",formMethod:i.formMethod,formAction:i.formAction,formEncType:i.formEncType,formData:i.formData,json:i.json,text:i.text,data:u?u.data:void 0}}function Za(i){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:i}}function B1(i,u){try{let o=i.sessionStorage.getItem(Gm);if(o){let c=JSON.parse(o);for(let[d,h]of Object.entries(c||{}))h&&Array.isArray(h)&&u.set(d,new Set(h||[]))}}catch{}}function Y1(i,u){if(u.size>0){let o={};for(let[c,d]of u)o[c]=[...d];try{i.sessionStorage.setItem(Gm,JSON.stringify(o))}catch(c){pt(!1,`Failed to save applied view transitions in sessionStorage (${c}).`)}}}function jm(){let i,u,o=new Promise((c,d)=>{i=async h=>{c(h);try{await o}catch{}},u=async h=>{d(h);try{await o}catch{}}});return{promise:o,resolve:i,reject:u}}var $n=O.createContext(null);$n.displayName="DataRouter";var Vi=O.createContext(null);Vi.displayName="DataRouterState";var Wm=O.createContext(!1);function q1(){return O.useContext(Wm)}var ec=O.createContext({isTransitioning:!1});ec.displayName="ViewTransition";var Fm=O.createContext(new Map);Fm.displayName="Fetchers";var G1=O.createContext(null);G1.displayName="Await";var ia=O.createContext(null);ia.displayName="Navigation";var gu=O.createContext(null);gu.displayName="Location";var pa=O.createContext({outlet:null,matches:[],isDataRoute:!1});pa.displayName="Route";var tc=O.createContext(null);tc.displayName="RouteError";var $m="REACT_ROUTER_ERROR",X1="REDIRECT",Q1="ROUTE_ERROR_RESPONSE";function V1(i){if(i.startsWith(`${$m}:${X1}:{`))try{let u=JSON.parse(i.slice(28));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.location=="string"&&typeof u.reloadDocument=="boolean"&&typeof u.replace=="boolean")return u}catch{}}function Z1(i){if(i.startsWith(`${$m}:${Q1}:{`))try{let u=JSON.parse(i.slice(40));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string")return new Xi(u.status,u.statusText,u.data)}catch{}}function J1(i,{relative:u}={}){Se(Zi(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:c}=O.useContext(ia),{hash:d,pathname:h,search:p}=Ji(i,{relative:u}),y=h;return o!=="/"&&(y=h==="/"?o:Sa([o,h])),c.createHref({pathname:y,search:p,hash:d})}function Zi(){return O.useContext(gu)!=null}function wn(){return Se(Zi(),"useLocation() may be used only in the context of a <Router> component."),O.useContext(gu).location}var Pm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Im(i){O.useContext(ia).static||O.useLayoutEffect(i)}function e0(){let{isDataRoute:i}=O.useContext(pa);return i?ux():K1()}function K1(){Se(Zi(),"useNavigate() may be used only in the context of a <Router> component.");let i=O.useContext($n),{basename:u,navigator:o}=O.useContext(ia),{matches:c}=O.useContext(pa),{pathname:d}=wn(),h=JSON.stringify(Ws(c)),p=O.useRef(!1);return Im(()=>{p.current=!0}),O.useCallback((x,g={})=>{if(pt(p.current,Pm),!p.current)return;if(typeof x=="number"){o.go(x);return}let N=Fs(x,JSON.parse(h),d,g.relative==="path");i==null&&u!=="/"&&(N.pathname=N.pathname==="/"?u:Sa([u,N.pathname])),(g.replace?o.replace:o.push)(N,g.state,g)},[u,o,h,d,i])}var k1=O.createContext(null);function W1(i){let u=O.useContext(pa).outlet;return O.useMemo(()=>u&&O.createElement(k1.Provider,{value:i},u),[u,i])}function t0(){let{matches:i}=O.useContext(pa),u=i[i.length-1];return u?u.params:{}}function Ji(i,{relative:u}={}){let{matches:o}=O.useContext(pa),{pathname:c}=wn(),d=JSON.stringify(Ws(o));return O.useMemo(()=>Fs(i,JSON.parse(d),c,u==="path"),[i,d,c,u])}function F1(i,u,o,c,d){Se(Zi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:h}=O.useContext(ia),{matches:p}=O.useContext(pa),y=p[p.length-1],x=y?y.params:{},g=y?y.pathname:"/",N=y?y.pathnameBase:"/",j=y&&y.route;{let J=j&&j.path||"";n0(g,!j||J.endsWith("*")||J.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${J}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${J}"> to <Route path="${J==="/"?"*":`${J}/*`}">.`)}let C=wn(),L;L=C;let G=L.pathname||"/",Q=G;if(N!=="/"){let J=N.replace(/^\//,"").split("/");Q="/"+G.replace(/^\//,"").split("/").slice(J.length).join("/")}let k=vn(i,{pathname:Q});return pt(j||k!=null,`No routes matched location "${L.pathname}${L.search}${L.hash}" `),pt(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${L.pathname}${L.search}${L.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),tx(k&&k.map(J=>Object.assign({},J,{params:Object.assign({},x,J.params),pathname:Sa([N,h.encodeLocation?h.encodeLocation(J.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:J.pathname]),pathnameBase:J.pathnameBase==="/"?N:Sa([N,h.encodeLocation?h.encodeLocation(J.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:J.pathnameBase])})),p,o,c,d)}function $1(){let i=rx(),u=Gi(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),o=i instanceof Error?i.stack:null,c="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:c},h={padding:"2px 4px",backgroundColor:c},p=null;return console.error("Error handled by React Router default ErrorBoundary:",i),p=O.createElement(O.Fragment,null,O.createElement("p",null,"💿 Hey developer 👋"),O.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",O.createElement("code",{style:h},"ErrorBoundary")," or"," ",O.createElement("code",{style:h},"errorElement")," prop on your route.")),O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},u),o?O.createElement("pre",{style:d},o):null,p)}var P1=O.createElement($1,null),a0=class extends O.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,u){return u.location!==i.location||u.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:u.error,location:u.location,revalidation:i.revalidation||u.revalidation}}componentDidCatch(i,u){this.props.onError?this.props.onError(i,u):console.error("React Router caught the following error during render",i)}render(){let i=this.state.error;if(this.context&&typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){const o=Z1(i.digest);o&&(i=o)}let u=i!==void 0?O.createElement(pa.Provider,{value:this.props.routeContext},O.createElement(tc.Provider,{value:i,children:this.props.component})):this.props.children;return this.context?O.createElement(I1,{error:i},u):u}};a0.contextType=Wm;var Gs=new WeakMap;function I1({children:i,error:u}){let{basename:o}=O.useContext(ia);if(typeof u=="object"&&u&&"digest"in u&&typeof u.digest=="string"){let c=V1(u.digest);if(c){let d=Gs.get(u);if(d)throw d;let h=Hm(c.location,o);if(Lm&&!Gs.get(u))if(h.isExternal||c.reloadDocument)window.location.href=h.absoluteURL||h.to;else{const p=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(h.to,{replace:c.replace}));throw Gs.set(u,p),p}return O.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h.absoluteURL||h.to}`})}}return i}function ex({routeContext:i,match:u,children:o}){let c=O.useContext($n);return c&&c.static&&c.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=u.route.id),O.createElement(pa.Provider,{value:i},o)}function tx(i,u=[],o=null,c=null,d=null){if(i==null){if(!o)return null;if(o.errors)i=o.matches;else if(u.length===0&&!o.initialized&&o.matches.length>0)i=o.matches;else return null}let h=i,p=o?.errors;if(p!=null){let N=h.findIndex(j=>j.route.id&&p?.[j.route.id]!==void 0);Se(N>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),h=h.slice(0,Math.min(h.length,N+1))}let y=!1,x=-1;if(o)for(let N=0;N<h.length;N++){let j=h[N];if((j.route.HydrateFallback||j.route.hydrateFallbackElement)&&(x=N),j.route.id){let{loaderData:C,errors:L}=o,G=j.route.loader&&!C.hasOwnProperty(j.route.id)&&(!L||L[j.route.id]===void 0);if(j.route.lazy||G){y=!0,x>=0?h=h.slice(0,x+1):h=[h[0]];break}}}let g=o&&c?(N,j)=>{c(N,{location:o.location,params:o.matches?.[0]?.params??{},unstable_pattern:Qi(o.matches),errorInfo:j})}:void 0;return h.reduceRight((N,j,C)=>{let L,G=!1,Q=null,k=null;o&&(L=p&&j.route.id?p[j.route.id]:void 0,Q=j.route.errorElement||P1,y&&(x<0&&C===0?(n0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),G=!0,k=null):x===C&&(G=!0,k=j.route.hydrateFallbackElement||null)));let I=u.concat(h.slice(0,C+1)),J=()=>{let te;return L?te=Q:G?te=k:j.route.Component?te=O.createElement(j.route.Component,null):j.route.element?te=j.route.element:te=N,O.createElement(ex,{match:j,routeContext:{outlet:N,matches:I,isDataRoute:o!=null},children:te})};return o&&(j.route.ErrorBoundary||j.route.errorElement||C===0)?O.createElement(a0,{location:o.location,revalidation:o.revalidation,component:Q,error:L,children:J(),routeContext:{outlet:null,matches:I,isDataRoute:!0},onError:g}):J()},null)}function ac(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ax(i){let u=O.useContext($n);return Se(u,ac(i)),u}function nx(i){let u=O.useContext(Vi);return Se(u,ac(i)),u}function lx(i){let u=O.useContext(pa);return Se(u,ac(i)),u}function nc(i){let u=lx(i),o=u.matches[u.matches.length-1];return Se(o.route.id,`${i} can only be used on routes that contain a unique "id"`),o.route.id}function ix(){return nc("useRouteId")}function rx(){let i=O.useContext(tc),u=nx("useRouteError"),o=nc("useRouteError");return i!==void 0?i:u.errors?.[o]}function ux(){let{router:i}=ax("useNavigate"),u=nc("useNavigate"),o=O.useRef(!1);return Im(()=>{o.current=!0}),O.useCallback(async(d,h={})=>{pt(o.current,Pm),o.current&&(typeof d=="number"?await i.navigate(d):await i.navigate(d,{fromRouteId:u,...h}))},[i,u])}var wm={};function n0(i,u,o){!u&&!wm[i]&&(wm[i]=!0,pt(!1,o))}var Nm={};function Em(i,u){!i&&!Nm[u]&&(Nm[u]=!0,console.warn(u))}var ox="useOptimistic",Tm=jg[ox],sx=()=>{};function cx(i){return Tm?Tm(i):[i,sx]}function fx(i){let u={hasErrorBoundary:i.hasErrorBoundary||i.ErrorBoundary!=null||i.errorElement!=null};return i.Component&&(i.element&&pt(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(u,{element:O.createElement(i.Component),Component:void 0})),i.HydrateFallback&&(i.hydrateFallbackElement&&pt(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(u,{hydrateFallbackElement:O.createElement(i.HydrateFallback),HydrateFallback:void 0})),i.ErrorBoundary&&(i.errorElement&&pt(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(u,{errorElement:O.createElement(i.ErrorBoundary),ErrorBoundary:void 0})),u}var dx=["HydrateFallback","hydrateFallbackElement"],hx=class{constructor(){this.status="pending",this.promise=new Promise((i,u)=>{this.resolve=o=>{this.status==="pending"&&(this.status="resolved",i(o))},this.reject=o=>{this.status==="pending"&&(this.status="rejected",u(o))}})}};function mx({router:i,flushSync:u,onError:o,unstable_useTransitions:c}){c=q1()||c;let[h,p]=O.useState(i.state),[y,x]=cx(h),[g,N]=O.useState(),[j,C]=O.useState({isTransitioning:!1}),[L,G]=O.useState(),[Q,k]=O.useState(),[I,J]=O.useState(),te=O.useRef(new Map),je=O.useCallback((ie,{deletedFetchers:xe,newErrors:Ye,flushSync:Te,viewTransitionOpts:Le})=>{Ye&&o&&Object.values(Ye).forEach(Ge=>o(Ge,{location:ie.location,params:ie.matches[0]?.params??{},unstable_pattern:Qi(ie.matches)})),ie.fetchers.forEach((Ge,be)=>{Ge.data!==void 0&&te.current.set(be,Ge.data)}),xe.forEach(Ge=>te.current.delete(Ge)),Em(Te===!1||u!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let gt=i.window!=null&&i.window.document!=null&&typeof i.window.document.startViewTransition=="function";if(Em(Le==null||gt,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!Le||!gt){u&&Te?u(()=>p(ie)):c===!1?p(ie):O.startTransition(()=>{c===!0&&x(Ge=>Rm(Ge,ie)),p(ie)});return}if(u&&Te){u(()=>{Q&&(L?.resolve(),Q.skipTransition()),C({isTransitioning:!0,flushSync:!0,currentLocation:Le.currentLocation,nextLocation:Le.nextLocation})});let Ge=i.window.document.startViewTransition(()=>{u(()=>p(ie))});Ge.finished.finally(()=>{u(()=>{G(void 0),k(void 0),N(void 0),C({isTransitioning:!1})})}),u(()=>k(Ge));return}Q?(L?.resolve(),Q.skipTransition(),J({state:ie,currentLocation:Le.currentLocation,nextLocation:Le.nextLocation})):(N(ie),C({isTransitioning:!0,flushSync:!1,currentLocation:Le.currentLocation,nextLocation:Le.nextLocation}))},[i.window,u,Q,L,c,x,o]);O.useLayoutEffect(()=>i.subscribe(je),[i,je]),O.useEffect(()=>{j.isTransitioning&&!j.flushSync&&G(new hx)},[j]),O.useEffect(()=>{if(L&&g&&i.window){let ie=g,xe=L.promise,Ye=i.window.document.startViewTransition(async()=>{c===!1?p(ie):O.startTransition(()=>{c===!0&&x(Te=>Rm(Te,ie)),p(ie)}),await xe});Ye.finished.finally(()=>{G(void 0),k(void 0),N(void 0),C({isTransitioning:!1})}),k(Ye)}},[g,L,i.window,c,x]),O.useEffect(()=>{L&&g&&y.location.key===g.location.key&&L.resolve()},[L,Q,y.location,g]),O.useEffect(()=>{!j.isTransitioning&&I&&(N(I.state),C({isTransitioning:!0,flushSync:!1,currentLocation:I.currentLocation,nextLocation:I.nextLocation}),J(void 0))},[j.isTransitioning,I]);let ve=O.useMemo(()=>({createHref:i.createHref,encodeLocation:i.encodeLocation,go:ie=>i.navigate(ie),push:(ie,xe,Ye)=>i.navigate(ie,{state:xe,preventScrollReset:Ye?.preventScrollReset}),replace:(ie,xe,Ye)=>i.navigate(ie,{replace:!0,state:xe,preventScrollReset:Ye?.preventScrollReset})}),[i]),we=i.basename||"/",R=O.useMemo(()=>({router:i,navigator:ve,static:!1,basename:we,onError:o}),[i,ve,we,o]);return O.createElement(O.Fragment,null,O.createElement($n.Provider,{value:R},O.createElement(Vi.Provider,{value:y},O.createElement(Fm.Provider,{value:te.current},O.createElement(ec.Provider,{value:j},O.createElement(xx,{basename:we,location:y.location,navigationType:y.historyAction,navigator:ve,unstable_useTransitions:c},O.createElement(px,{routes:i.routes,future:i.future,state:y,onError:o})))))),null)}function Rm(i,u){return{...i,navigation:u.navigation.state!=="idle"?u.navigation:i.navigation,revalidation:u.revalidation!=="idle"?u.revalidation:i.revalidation,actionData:u.navigation.state!=="submitting"?u.actionData:i.actionData,fetchers:u.fetchers}}var px=O.memo(gx);function gx({routes:i,future:u,state:o,onError:c}){return F1(i,void 0,o,c,u)}function l0(i){return W1(i.context)}function xx({basename:i="/",children:u=null,location:o,navigationType:c="POP",navigator:d,static:h=!1,unstable_useTransitions:p}){Se(!Zi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let y=i.replace(/^\/*/,"/"),x=O.useMemo(()=>({basename:y,navigator:d,static:h,unstable_useTransitions:p,future:{}}),[y,d,h,p]);typeof o=="string"&&(o=jn(o));let{pathname:g="/",search:N="",hash:j="",state:C=null,key:L="default"}=o,G=O.useMemo(()=>{let Q=la(g,y);return Q==null?null:{location:{pathname:Q,search:N,hash:j,state:C,key:L},navigationType:c}},[y,g,N,j,C,L,c]);return pt(G!=null,`<Router basename="${y}"> is not able to match the URL "${g}${N}${j}" because it does not start with the basename, so the <Router> won't render anything.`),G==null?null:O.createElement(ia.Provider,{value:x},O.createElement(gu.Provider,{children:u,value:G}))}var hu="get",mu="application/x-www-form-urlencoded";function xu(i){return typeof HTMLElement<"u"&&i instanceof HTMLElement}function yx(i){return xu(i)&&i.tagName.toLowerCase()==="button"}function vx(i){return xu(i)&&i.tagName.toLowerCase()==="form"}function bx(i){return xu(i)&&i.tagName.toLowerCase()==="input"}function Sx(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function jx(i,u){return i.button===0&&(!u||u==="_self")&&!Sx(i)}var fu=null;function wx(){if(fu===null)try{new FormData(document.createElement("form"),0),fu=!1}catch{fu=!0}return fu}var Nx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Xs(i){return i!=null&&!Nx.has(i)?(pt(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${mu}"`),null):i}function Ex(i,u){let o,c,d,h,p;if(vx(i)){let y=i.getAttribute("action");c=y?la(y,u):null,o=i.getAttribute("method")||hu,d=Xs(i.getAttribute("enctype"))||mu,h=new FormData(i)}else if(yx(i)||bx(i)&&(i.type==="submit"||i.type==="image")){let y=i.form;if(y==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=i.getAttribute("formaction")||y.getAttribute("action");if(c=x?la(x,u):null,o=i.getAttribute("formmethod")||y.getAttribute("method")||hu,d=Xs(i.getAttribute("formenctype"))||Xs(y.getAttribute("enctype"))||mu,h=new FormData(y,i),!wx()){let{name:g,type:N,value:j}=i;if(N==="image"){let C=g?`${g}.`:"";h.append(`${C}x`,"0"),h.append(`${C}y`,"0")}else g&&h.append(g,j)}}else{if(xu(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=hu,c=null,d=mu,p=i}return h&&d==="text/plain"&&(p=h,h=void 0),{action:c,method:o.toLowerCase(),encType:d,formData:h,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function lc(i,u){if(i===!1||i===null||typeof i>"u")throw new Error(u)}function Tx(i,u,o,c){let d=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return o?d.pathname.endsWith("/")?d.pathname=`${d.pathname}_.${c}`:d.pathname=`${d.pathname}.${c}`:d.pathname==="/"?d.pathname=`_root.${c}`:u&&la(d.pathname,u)==="/"?d.pathname=`${u.replace(/\/$/,"")}/_root.${c}`:d.pathname=`${d.pathname.replace(/\/$/,"")}.${c}`,d}async function Rx(i,u){if(i.id in u)return u[i.id];try{let o=await import(i.module);return u[i.id]=o,o}catch(o){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function zx(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function Ax(i,u,o){let c=await Promise.all(i.map(async d=>{let h=u.routes[d.route.id];if(h){let p=await Rx(h,o);return p.links?p.links():[]}return[]}));return _x(c.flat(1).filter(zx).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function zm(i,u,o,c,d,h){let p=(x,g)=>o[g]?x.route.id!==o[g].route.id:!0,y=(x,g)=>o[g].pathname!==x.pathname||o[g].route.path?.endsWith("*")&&o[g].params["*"]!==x.params["*"];return h==="assets"?u.filter((x,g)=>p(x,g)||y(x,g)):h==="data"?u.filter((x,g)=>{let N=c.routes[x.route.id];if(!N||!N.hasLoader)return!1;if(p(x,g)||y(x,g))return!0;if(x.route.shouldRevalidate){let j=x.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:o[0]?.params||{},nextUrl:new URL(i,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof j=="boolean")return j}return!0}):[]}function Dx(i,u,{includeHydrateFallback:o}={}){return Mx(i.map(c=>{let d=u.routes[c.route.id];if(!d)return[];let h=[d.module];return d.clientActionModule&&(h=h.concat(d.clientActionModule)),d.clientLoaderModule&&(h=h.concat(d.clientLoaderModule)),o&&d.hydrateFallbackModule&&(h=h.concat(d.hydrateFallbackModule)),d.imports&&(h=h.concat(d.imports)),h}).flat(1))}function Mx(i){return[...new Set(i)]}function Ox(i){let u={},o=Object.keys(i).sort();for(let c of o)u[c]=i[c];return u}function _x(i,u){let o=new Set;return new Set(u),i.reduce((c,d)=>{let h=JSON.stringify(Ox(d));return o.has(h)||(o.add(h),c.push({key:h,link:d})),c},[])}function i0(){let i=O.useContext($n);return lc(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function Cx(){let i=O.useContext(Vi);return lc(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var ic=O.createContext(void 0);ic.displayName="FrameworkContext";function r0(){let i=O.useContext(ic);return lc(i,"You must render this element inside a <HydratedRouter> element"),i}function Ux(i,u){let o=O.useContext(ic),[c,d]=O.useState(!1),[h,p]=O.useState(!1),{onFocus:y,onBlur:x,onMouseEnter:g,onMouseLeave:N,onTouchStart:j}=u,C=O.useRef(null);O.useEffect(()=>{if(i==="render"&&p(!0),i==="viewport"){let Q=I=>{I.forEach(J=>{p(J.isIntersecting)})},k=new IntersectionObserver(Q,{threshold:.5});return C.current&&k.observe(C.current),()=>{k.disconnect()}}},[i]),O.useEffect(()=>{if(c){let Q=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(Q)}}},[c]);let L=()=>{d(!0)},G=()=>{d(!1),p(!1)};return o?i!=="intent"?[h,C,{}]:[h,C,{onFocus:Ui(y,L),onBlur:Ui(x,G),onMouseEnter:Ui(g,L),onMouseLeave:Ui(N,G),onTouchStart:Ui(j,L)}]:[!1,C,{}]}function Ui(i,u){return o=>{i&&i(o),o.defaultPrevented||u(o)}}function Lx({page:i,...u}){let{router:o}=i0(),c=O.useMemo(()=>vn(o.routes,i,o.basename),[o.routes,i,o.basename]);return c?O.createElement(Bx,{page:i,matches:c,...u}):null}function Hx(i){let{manifest:u,routeModules:o}=r0(),[c,d]=O.useState([]);return O.useEffect(()=>{let h=!1;return Ax(i,u,o).then(p=>{h||d(p)}),()=>{h=!0}},[i,u,o]),c}function Bx({page:i,matches:u,...o}){let c=wn(),{future:d,manifest:h,routeModules:p}=r0(),{basename:y}=i0(),{loaderData:x,matches:g}=Cx(),N=O.useMemo(()=>zm(i,u,g,h,c,"data"),[i,u,g,h,c]),j=O.useMemo(()=>zm(i,u,g,h,c,"assets"),[i,u,g,h,c]),C=O.useMemo(()=>{if(i===c.pathname+c.search+c.hash)return[];let Q=new Set,k=!1;if(u.forEach(J=>{let te=h.routes[J.route.id];!te||!te.hasLoader||(!N.some(je=>je.route.id===J.route.id)&&J.route.id in x&&p[J.route.id]?.shouldRevalidate||te.hasClientLoader?k=!0:Q.add(J.route.id))}),Q.size===0)return[];let I=Tx(i,y,d.unstable_trailingSlashAwareDataRequests,"data");return k&&Q.size>0&&I.searchParams.set("_routes",u.filter(J=>Q.has(J.route.id)).map(J=>J.route.id).join(",")),[I.pathname+I.search]},[y,d.unstable_trailingSlashAwareDataRequests,x,c,h,N,u,i,p]),L=O.useMemo(()=>Dx(j,h),[j,h]),G=Hx(j);return O.createElement(O.Fragment,null,C.map(Q=>O.createElement("link",{key:Q,rel:"prefetch",as:"fetch",href:Q,...o})),L.map(Q=>O.createElement("link",{key:Q,rel:"modulepreload",href:Q,...o})),G.map(({key:Q,link:k})=>O.createElement("link",{key:Q,nonce:o.nonce,...k,crossOrigin:k.crossOrigin??o.crossOrigin})))}function Yx(...i){return u=>{i.forEach(o=>{typeof o=="function"?o(u):o!=null&&(o.current=u)})}}var qx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{qx&&(window.__reactRouterVersion="7.13.0")}catch{}function Gx(i,u){return p1({basename:u?.basename,getContext:u?.getContext,future:u?.future,history:Mg({window:u?.window}),hydrationData:Xx(),routes:i,mapRouteProperties:fx,hydrationRouteProperties:dx,dataStrategy:u?.dataStrategy,patchRoutesOnNavigation:u?.patchRoutesOnNavigation,window:u?.window,unstable_instrumentations:u?.unstable_instrumentations}).initialize()}function Xx(){let i=window?.__staticRouterHydrationData;return i&&i.errors&&(i={...i,errors:Qx(i.errors)}),i}function Qx(i){if(!i)return null;let u=Object.entries(i),o={};for(let[c,d]of u)if(d&&d.__type==="RouteErrorResponse")o[c]=new Xi(d.status,d.statusText,d.data,d.internal===!0);else if(d&&d.__type==="Error"){if(d.__subType){let h=window[d.__subType];if(typeof h=="function")try{let p=new h(d.message);p.stack="",o[c]=p}catch{}}if(o[c]==null){let h=new Error(d.message);h.stack="",o[c]=h}}else o[c]=d;return o}var u0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ja=O.forwardRef(function({onClick:u,discover:o="render",prefetch:c="none",relative:d,reloadDocument:h,replace:p,state:y,target:x,to:g,preventScrollReset:N,viewTransition:j,unstable_defaultShouldRevalidate:C,...L},G){let{basename:Q,unstable_useTransitions:k}=O.useContext(ia),I=typeof g=="string"&&u0.test(g),J=Hm(g,Q);g=J.to;let te=J1(g,{relative:d}),[je,ve,we]=Ux(c,L),R=Jx(g,{replace:p,state:y,target:x,preventScrollReset:N,relative:d,viewTransition:j,unstable_defaultShouldRevalidate:C,unstable_useTransitions:k});function ie(Ye){u&&u(Ye),Ye.defaultPrevented||R(Ye)}let xe=O.createElement("a",{...L,...we,href:J.absoluteURL||te,onClick:J.isExternal||h?u:ie,ref:Yx(G,ve),target:x,"data-discover":!I&&o==="render"?"true":void 0});return je&&!I?O.createElement(O.Fragment,null,xe,O.createElement(Lx,{page:te})):xe});ja.displayName="Link";var Ht=O.forwardRef(function({"aria-current":u="page",caseSensitive:o=!1,className:c="",end:d=!1,style:h,to:p,viewTransition:y,children:x,...g},N){let j=Ji(p,{relative:g.relative}),C=wn(),L=O.useContext(Vi),{navigator:G,basename:Q}=O.useContext(ia),k=L!=null&&$x(j)&&y===!0,I=G.encodeLocation?G.encodeLocation(j).pathname:j.pathname,J=C.pathname,te=L&&L.navigation&&L.navigation.location?L.navigation.location.pathname:null;o||(J=J.toLowerCase(),te=te?te.toLowerCase():null,I=I.toLowerCase()),te&&Q&&(te=la(te,Q)||te);const je=I!=="/"&&I.endsWith("/")?I.length-1:I.length;let ve=J===I||!d&&J.startsWith(I)&&J.charAt(je)==="/",we=te!=null&&(te===I||!d&&te.startsWith(I)&&te.charAt(I.length)==="/"),R={isActive:ve,isPending:we,isTransitioning:k},ie=ve?u:void 0,xe;typeof c=="function"?xe=c(R):xe=[c,ve?"active":null,we?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let Ye=typeof h=="function"?h(R):h;return O.createElement(ja,{...g,"aria-current":ie,className:xe,ref:N,style:Ye,to:p,viewTransition:y},typeof x=="function"?x(R):x)});Ht.displayName="NavLink";var Vx=O.forwardRef(({discover:i="render",fetcherKey:u,navigate:o,reloadDocument:c,replace:d,state:h,method:p=hu,action:y,onSubmit:x,relative:g,preventScrollReset:N,viewTransition:j,unstable_defaultShouldRevalidate:C,...L},G)=>{let{unstable_useTransitions:Q}=O.useContext(ia),k=Wx(),I=Fx(y,{relative:g}),J=p.toLowerCase()==="get"?"get":"post",te=typeof y=="string"&&u0.test(y),je=ve=>{if(x&&x(ve),ve.defaultPrevented)return;ve.preventDefault();let we=ve.nativeEvent.submitter,R=we?.getAttribute("formmethod")||p,ie=()=>k(we||ve.currentTarget,{fetcherKey:u,method:R,navigate:o,replace:d,state:h,relative:g,preventScrollReset:N,viewTransition:j,unstable_defaultShouldRevalidate:C});Q&&o!==!1?O.startTransition(()=>ie()):ie()};return O.createElement("form",{ref:G,method:J,action:I,onSubmit:c?x:je,...L,"data-discover":!te&&i==="render"?"true":void 0})});Vx.displayName="Form";function Zx(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function o0(i){let u=O.useContext($n);return Se(u,Zx(i)),u}function Jx(i,{target:u,replace:o,state:c,preventScrollReset:d,relative:h,viewTransition:p,unstable_defaultShouldRevalidate:y,unstable_useTransitions:x}={}){let g=e0(),N=wn(),j=Ji(i,{relative:h});return O.useCallback(C=>{if(jx(C,u)){C.preventDefault();let L=o!==void 0?o:wa(N)===wa(j),G=()=>g(i,{replace:L,state:c,preventScrollReset:d,relative:h,viewTransition:p,unstable_defaultShouldRevalidate:y});x?O.startTransition(()=>G()):G()}},[N,g,j,o,c,u,i,d,h,p,y,x])}var Kx=0,kx=()=>`__${String(++Kx)}__`;function Wx(){let{router:i}=o0("useSubmit"),{basename:u}=O.useContext(ia),o=ix(),c=i.fetch,d=i.navigate;return O.useCallback(async(h,p={})=>{let{action:y,method:x,encType:g,formData:N,body:j}=Ex(h,u);if(p.navigate===!1){let C=p.fetcherKey||kx();await c(C,o,p.action||y,{unstable_defaultShouldRevalidate:p.unstable_defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:N,body:j,formMethod:p.method||x,formEncType:p.encType||g,flushSync:p.flushSync})}else await d(p.action||y,{unstable_defaultShouldRevalidate:p.unstable_defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:N,body:j,formMethod:p.method||x,formEncType:p.encType||g,replace:p.replace,state:p.state,fromRouteId:o,flushSync:p.flushSync,viewTransition:p.viewTransition})},[c,d,u,o])}function Fx(i,{relative:u}={}){let{basename:o}=O.useContext(ia),c=O.useContext(pa);Se(c,"useFormAction must be used inside a RouteContext");let[d]=c.matches.slice(-1),h={...Ji(i||".",{relative:u})},p=wn();if(i==null){h.search=p.search;let y=new URLSearchParams(h.search),x=y.getAll("index");if(x.some(N=>N==="")){y.delete("index"),x.filter(j=>j).forEach(j=>y.append("index",j));let N=y.toString();h.search=N?`?${N}`:""}}return(!i||i===".")&&d.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(h.pathname=h.pathname==="/"?o:Sa([o,h.pathname])),wa(h)}function $x(i,{relative:u}={}){let o=O.useContext(ec);Se(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=o0("useViewTransitionState"),d=Ji(i,{relative:u});if(!o.isTransitioning)return!1;let h=la(o.currentLocation.pathname,c)||o.currentLocation.pathname,p=la(o.nextLocation.pathname,c)||o.nextLocation.pathname;return pu(d.pathname,p)!=null||pu(d.pathname,h)!=null}var Px=Am();function Ix(i){return O.createElement(mx,{flushSync:Px.flushSync,...i})}const s0="/React-Assiment-1/assets/logo-GdqARQRt-GdqARQRt.png";function ey(){const[i,u]=O.useState(!1);return f.jsxs("nav",{className:"fixed top-0 right-0 left-0 bg-[#161616] border-b z-30",children:[f.jsxs("div",{className:"px-4 sm:px-8 lg:px-36 py-3.5 bg-transparent justify-between items-center flex",children:[f.jsxs("div",{className:"flex items-center gap-2 sm:gap-3",children:[f.jsx("div",{children:f.jsx("img",{src:s0,className:"cursor-pointer w-10 h-10 sm:w-12 sm:h-12 hover:scale-105 transition-all duration-300",alt:"عدسه logo"})}),f.jsxs("div",{className:"flex flex-col",children:[f.jsx("span",{className:"text-white text-lg sm:text-xl font-bold",children:"عدسه"}),f.jsx("span",{className:"text-orange-600 font-normal text-[10px] sm:text-xs",children:"عالم التصوير الفوتغرافي"})]})]}),f.jsxs("div",{className:"hidden lg:flex rounded-full border border-[#262626] bg-transparent p-1.5 gap-0.5",children:[f.jsx(Ht,{className:({isActive:o})=>o?"bg-proj text-white rounded-full px-5 py-2.5 text-sm font-normal":"text-gray-400 bg-transparent text-sm px-5 py-2.5 hover:text-white transition-all duration-300",to:"/",children:"الرئيسية"}),f.jsx(Ht,{className:({isActive:o})=>o?"bg-proj text-white rounded-full px-5 py-2.5 text-sm font-normal":"text-gray-400 bg-transparent text-sm px-5 py-2.5 hover:text-white transition-all duration-300",to:"/blog",children:"المدونة"}),f.jsx(Ht,{className:({isActive:o})=>o?"bg-proj text-white rounded-full px-5 py-2.5 text-sm font-normal":"text-gray-400 bg-transparent text-sm px-5 py-2.5 hover:text-white transition-all duration-300",to:"/weare",children:"من نحن"})]}),f.jsxs("div",{className:"hidden lg:flex items-center gap-2.5",children:[f.jsx("div",{className:"py-3 px-2.5 rounded-xl flex justify-center items-center bg-transparent text-gray-600 border border-transparent hover:text-orange-400 hover:border-orange-400/30 transition duration-300 cursor-pointer",children:f.jsx("i",{className:"fa fa-search"})}),f.jsx(Ht,{to:"/blog",className:"px-8 rounded-full py-4 bg-proj transition-all hover:-translate-y-0.5 text-white flex items-center justify-center text-base font-semibold",children:"إبدأ القراءة"})]}),f.jsx("button",{onClick:()=>u(!i),className:"lg:hidden text-white p-2 hover:text-orange-400 transition-colors","aria-label":"Toggle menu",children:f.jsx("i",{className:`fa ${i?"fa-times":"fa-bars"} text-xl`})})]}),f.jsx("div",{className:`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${i?"max-h-96 opacity-100":"max-h-2 opacity-0"}`,children:f.jsxs("div",{className:"px-4 py-4 bg-[#1a1a1a] border-t border-[#262626] space-y-2",children:[f.jsx(Ht,{className:({isActive:o})=>o?"block bg-proj text-white rounded-lg px-4 py-3 text-sm font-normal text-center":"block text-gray-400 bg-transparent text-sm px-4 py-3 hover:text-white hover:bg-[#262626] rounded-lg transition-all duration-300 text-center",to:"/",onClick:()=>u(!1),children:"الرئيسية"}),f.jsx(Ht,{className:({isActive:o})=>o?"block bg-proj text-white rounded-lg px-4 py-3 text-sm font-normal text-center":"block text-gray-400 bg-transparent text-sm px-4 py-3 hover:text-white hover:bg-[#262626] rounded-lg transition-all duration-300 text-center",to:"/blog",onClick:()=>u(!1),children:"المدونة"}),f.jsx(Ht,{className:({isActive:o})=>o?"block bg-proj text-white rounded-lg px-4 py-3 text-sm font-normal text-center":"block text-gray-400 bg-transparent text-sm px-4 py-3 hover:text-white hover:bg-[#262626] rounded-lg transition-all duration-300 text-center",to:"/weare",onClick:()=>u(!1),children:"من نحن"}),f.jsxs("div",{className:"pt-3 flex flex-col gap-2",children:[f.jsxs("button",{className:"w-full py-3 px-4 rounded-lg flex justify-center items-center bg-transparent text-gray-600 border border-[#262626] hover:text-orange-400 hover:border-orange-400/30 transition duration-300",children:[f.jsx("i",{className:"fa fa-search ml-2"}),f.jsx("span",{className:"text-sm",children:"بحث"})]}),f.jsx(Ht,{to:"/blog",className:"w-full px-4 rounded-lg py-3 bg-proj text-white flex items-center justify-center text-sm font-semibold hover:bg-orange-600 transition-colors",onClick:()=>u(!1),children:"إبدأ القراءة"})]})]})})]})}function ty(){return f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"bg-[#161616] border-t border-t-gray-500 border-b border-b-gray-500",children:f.jsxs("div",{className:"w-full sm:w-[90%] lg:w-[83%] mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8",children:[f.jsxs("div",{className:"flex flex-col justify-between h-full gap-6",children:[f.jsxs("div",{className:"flex flex-col gap-4",children:[f.jsxs("div",{className:"flex gap-3 items-center",children:[f.jsx("img",{src:s0,className:"w-10 h-10 sm:w-12 sm:h-12 drop-shadow-[0_0_20px_rgba(255,165,0,0.4)]",alt:"عدسه logo"}),f.jsx("h5",{className:"text-lg sm:text-xl font-bold text-white",children:"عدسه"})]}),f.jsx("p",{className:"text-xs sm:text-sm text-gray-600 font-light leading-relaxed",children:"مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم."})]}),f.jsx("div",{className:"flex gap-3 items-center",children:["x","linkedin","github","youtube"].map(i=>f.jsx("a",{href:"#",className:`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-[#1c1c1c]\r
                             border border-white/5 rounded-lg hover:bg-proj\r
                             hover:scale-110 transition-all duration-300\r
                             cursor-pointer group`,children:f.jsx("i",{className:`fab fa-${i} text-sm sm:text-base text-gray-400 group-hover:text-white transition-colors`})},i))})]}),f.jsx("div",{className:"flex flex-col justify-between h-full gap-6",children:f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center gap-2 mb-4 sm:mb-6",children:[f.jsx("div",{className:"w-6 sm:w-8 h-0.5 bg-proj"}),f.jsx("h3",{className:"text-white text-base sm:text-lg font-bold",children:"استكشف"})]}),f.jsx("ul",{className:"flex flex-col gap-3 sm:gap-5",children:["الرئيسية","المدونة","من نحن"].map(i=>f.jsx("li",{children:f.jsxs("a",{href:"#",className:`relative flex items-center gap-3 text-gray-400 text-xs sm:text-sm\r
                                 hover:text-proj transition-all duration-300 group`,children:[f.jsx("i",{className:`fa-solid fa-chevron-left text-[8px] sm:text-[10px] absolute right-0\r
                                   opacity-0 translate-x-2\r
                                   group-hover:opacity-100\r
                                   group-hover:translate-x-0\r
                                   transition-all duration-300`}),f.jsx("span",{className:"inline-block group-hover:-translate-x-5 transition-transform duration-300",children:i})]})},i))})]})}),f.jsx("div",{className:"flex flex-col justify-between h-full gap-6",children:f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center gap-2 mb-4 sm:mb-6",children:[f.jsx("div",{className:"w-6 sm:w-8 h-0.5 bg-proj"}),f.jsx("h3",{className:"text-white text-base sm:text-lg font-bold",children:"التصنيفات"})]}),f.jsx("ul",{className:"flex flex-col gap-3 sm:gap-5",children:["إبداع","بورتريه","مناظر طبيعية","تقنيات"].map(i=>f.jsx("li",{children:f.jsxs("a",{href:"#",className:`relative flex items-center gap-3 text-gray-400 text-xs sm:text-sm\r
                                 hover:text-proj transition-all duration-300 group`,children:[f.jsx("i",{className:`fa-solid fa-chevron-left text-[8px] sm:text-[10px] absolute right-0\r
                                   opacity-0 translate-x-2\r
                                   group-hover:opacity-100\r
                                   group-hover:translate-x-0\r
                                   transition-all duration-300`}),f.jsx("span",{className:"inline-block group-hover:-translate-x-5 transition-transform duration-300",children:i})]})},i))})]})}),f.jsxs("div",{className:"flex flex-col justify-between h-full gap-6",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center gap-2 mb-4 sm:mb-6",children:[f.jsx("div",{className:"w-6 sm:w-8 h-0.5 bg-proj"}),f.jsx("h3",{className:"text-white text-base sm:text-lg font-bold",children:"ابقى على اطلاع"})]}),f.jsx("p",{className:"text-gray-400 text-xs sm:text-sm leading-relaxed",children:"اشترك للحصول على أحدث المقالات والتحديثات."})]}),f.jsxs("div",{className:"flex flex-col gap-3",children:[f.jsx("input",{type:"email",placeholder:"ادخل بريدك الإلكتروني",className:`px-3 sm:px-4 py-2.5 sm:py-3 bg-[#1c1c1c] border border-white/10\r
                         rounded-lg text-white text-xs sm:text-sm\r
                         placeholder:text-gray-600\r
                         focus:outline-none focus:border-proj/50\r
                         transition-colors`}),f.jsx("button",{className:`px-4 sm:px-6 py-2.5 sm:py-3 bg-proj text-white text-xs sm:text-sm font-medium\r
                               rounded-lg hover:bg-proj/90 transition-colors`,children:"اشترك"})]})]})]})}),f.jsx("div",{className:"bg-[#161616]",children:f.jsxs("div",{className:"px-4 sm:px-8 lg:px-32 py-6 sm:py-8 lg:py-10 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0",children:[f.jsxs("span",{className:"text-gray-500 text-xs sm:text-sm text-center sm:text-right",children:["© 2026 عدسة. صنع بكل ",f.jsx("i",{className:"fa-solid fa-heart text-proj"})," ","جميع الحقوق محفوظة."]}),f.jsxs("div",{className:"flex gap-6 sm:gap-10 items-center",children:[f.jsx("span",{className:"text-gray-500 text-xs sm:text-sm hover:text-proj cursor-pointer duration-300 transition-all",children:"سياسة الخصوصيه"}),f.jsx("span",{className:"text-gray-500 text-xs sm:text-sm hover:text-proj cursor-pointer duration-300 transition-all",children:"شروط الخدمه"})]})]})})]})}function ay(){return f.jsx(f.Fragment,{children:f.jsxs("div",{className:"w-full font-tajawal pt-20",dir:"rtl",children:[f.jsx(ey,{}),f.jsx(l0,{}),f.jsx(ty,{})]})})}function ny(){return f.jsx(f.Fragment,{children:f.jsxs("section",{className:"relative overflow-hidden",children:[f.jsx("div",{className:"absolute inset-0 -z-10",style:{backgroundImage:`
        radial-gradient(circle at center, rgba(255,100,50,0.15), transparent 70%),
        linear-gradient(rgba(38,38,38,0.5) 1px, transparent 1px),
        linear-gradient(90deg, rgba(38,38,38,0.5) 1px, transparent 1px)
      `,backgroundSize:"100% 100%, 60px 60px, 60px 60px",backgroundColor:"#000000"}}),f.jsxs("div",{className:"container w-full sm:w-[90%] lg:w-[77%] mx-auto px-4 sm:px-6 pb-15 flex flex-col gap-5 items-center mt-20 text-center",children:[f.jsxs("div",{className:"px-3.5 py-2 flex gap-2.5 items-center bg-proj/10 rounded-full border border-proj/20",children:[f.jsx("div",{className:"size-1.5 bg-proj rounded-full animate-pulse shrink-0"}),f.jsx("div",{className:`relative size-2 bg-proj rounded-full shrink-0\r
                  before:content-[''] before:absolute before:inset-0 \r
                  before:bg-proj before:rounded-full before:animate-ping`}),f.jsx("span",{className:"text-xs sm:text-sm font-medium text-white",children:"مرحبا بك في عدسة"})]}),f.jsxs("h1",{className:"text-white text-3xl sm:text-5xl lg:text-7xl font-bold leading-snug",children:["إكتشف ",f.jsx("span",{className:"text-proj",children:"فن"}),f.jsx("br",{}),"التصوير الفوتوغرافي"]}),f.jsxs("p",{className:"text-gray-400/60 font-normal text-base sm:text-lg lg:text-[24px] leading-tight px-4",children:["انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في ",f.jsx("br",{className:"hidden sm:block"}),"التصوير."]}),f.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 items-center w-full sm:w-auto",children:[f.jsxs(Ht,{to:"/blog",className:"group hover:-translate-y-0.5 px-8 py-4 transition-all duration-200 rounded-full bg-proj flex items-center gap-1 w-full sm:w-auto justify-center",children:[f.jsx("span",{className:"text-white font-semibold text-sm sm:text-base",children:"إستكشف المقالات"}),f.jsx("i",{className:"group-hover:-translate-x-1 transition-all duration-200 fa-solid text-white fa-arrow-left font-semibold text-sm sm:text-base ms-1.5"})]}),f.jsxs(Ht,{to:"/weare",className:"group px-8 py-4 hover:border-proj hover:bg-proj/10 transition-all duration-200 rounded-full flex items-center gap-1 bg-transparent border border-white/10 w-full sm:w-auto justify-center",children:[f.jsx("i",{className:"group-hover:text-proj transition-all duration-200 fa-solid fa-circle-info text-sm sm:text-base text-semibold text-white me-1"}),f.jsx("span",{className:"group-hover:text-proj transition-all duration-200 text-white font-semibold text-sm sm:text-base",children:"إعرف المزيد"})]})]}),f.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-3 mt-10 w-full sm:w-auto",children:[f.jsxs("div",{className:"rounded-2xl hover:scale-[103%] transition-all duration-200 py-4 px-4 sm:px-8 lg:px-15 flex flex-col gap-1.5 items-center bg-black/50 border border-white/10",children:[f.jsx("i",{className:"fa-solid fa-folder text-2xl sm:text-3xl font-bold text-proj"}),f.jsx("span",{className:"text-2xl sm:text-3xl font-bold text-proj",children:"50+"}),f.jsx("span",{className:"text-gray-700 text-xs sm:text-sm font-bold",children:"مقاله"})]}),f.jsxs("div",{className:"rounded-2xl hover:scale-[103%] transition-all duration-200 py-4 px-4 sm:px-8 lg:px-15 flex flex-col gap-1.5 items-center bg-black/50 border border-white/10",children:[f.jsx("i",{className:"fa-solid fa-users text-2xl sm:text-3xl font-bold text-proj"}),f.jsx("span",{className:"whitespace-nowrap text-2xl sm:text-3xl font-bold text-proj",children:"+10 ألف"}),f.jsx("span",{className:"text-gray-700 text-xs sm:text-sm font-bold",children:"قارئ"})]}),f.jsxs("div",{className:"rounded-2xl hover:scale-[103%] transition-all duration-200 py-4 px-4 sm:px-8 lg:px-15 flex flex-col gap-1.5 items-center bg-black/50 border border-white/10",children:[f.jsx("i",{className:"fa-solid fa-file text-2xl sm:text-3xl font-bold text-proj"}),f.jsx("span",{className:"text-2xl sm:text-3xl font-bold text-proj",children:"4"}),f.jsx("span",{className:"text-gray-700 text-xs sm:text-sm font-bold",children:"تصنيفات"})]}),f.jsxs("div",{className:"rounded-2xl hover:scale-[103%] transition-all duration-200 py-4 px-4 sm:px-8 lg:px-15 flex flex-col gap-1.5 items-center bg-black/50 border border-white/10",children:[f.jsx("i",{className:"fa-solid fa-pen text-2xl sm:text-3xl font-bold text-proj"}),f.jsx("span",{className:"text-2xl sm:text-3xl font-bold text-proj",children:"6"}),f.jsx("span",{className:"text-gray-700 text-xs sm:text-sm font-bold",children:"كاتب"})]})]})]})]})})}function ly({posts:i}){return!i||i.length===0?null:f.jsx(f.Fragment,{children:f.jsx("section",{className:"bg-black overflow-hidden",children:f.jsxs("div",{className:"container w-full sm:w-[90%] lg:w-[83%] mx-auto px-4 sm:px-6 pb-18 pt-16",children:[f.jsxs("div",{className:"px-3.5 py-2 flex gap-2.5 items-center bg-proj/10 rounded-full border border-proj/20 w-fit",children:[f.jsx("div",{className:"size-1.5 bg-proj rounded-full animate-pulse shrink-0"}),f.jsx("div",{className:`relative size-2 bg-proj rounded-full shrink-0\r
                  before:content-[''] before:absolute before:inset-0 \r
                  before:bg-proj before:rounded-full before:animate-ping`}),f.jsx("span",{className:"text-xs sm:text-sm font-medium text-proj ms-1.5",children:"مميز"})]}),f.jsx("h2",{className:"font-bold text-3xl sm:text-5xl lg:text-6xl text-white mt-8",children:"مقالات مختارة"}),f.jsxs("div",{className:"justify-between items-start sm:items-center  mt-8 flex flex-col sm: sm:flex-row gap-6",children:[f.jsx("p",{className:"text-gray-500 text-base sm:text-lg",children:"محتوي منتقي لبدء رحلة تعلمك"}),f.jsxs(Ht,{to:"/blog",className:"group hover:-translate-y-0.5 px-5 py-2.5 transition-all duration-200 rounded-xl bg-proj flex items-center gap-1",children:[f.jsx("span",{className:"text-white font-semibold text-sm sm:text-base",children:"عرض الكل"}),f.jsx("i",{className:"group-hover:-translate-x-1 transition-all duration-200 fa-solid text-white fa-angle-left font-semibold text-sm sm:text-base ms-1.5"})]})]}),f.jsx("div",{className:"mt-8 flex flex-col gap-8 items-center",children:i.map(u=>f.jsxs(ja,{to:`/blog/${u.slug}`,className:"card cursor-pointer flex flex-col lg:flex-row overflow-hidden border border-white/20 group hover:border-proj/20 transition-all duration-300 rounded-2xl w-full",children:[f.jsxs("div",{className:"relative overflow-hidden w-full lg:w-1/2",children:[f.jsx("img",{src:u.image,className:"w-full h-64 sm:h-80 lg:h-full object-cover group-hover:scale-[103%] transition-all duration-300",alt:u.title}),f.jsxs("div",{className:"py-1.5 px-3 bg-linear-to-r from-orange-500 to-orange-400 rounded-full flex gap-2 items-center absolute top-5 right-5",children:[f.jsx("i",{className:"fa-solid fa-star text-white font-semibold text-[8px]"}),f.jsx("span",{className:"text-white font-semibold text-xs",children:"مميز"})]})]}),f.jsxs("div",{className:"p-6 sm:p-8 lg:p-10 bg-[#161616] w-full lg:w-1/2",children:[f.jsxs("div",{className:"flex gap-3 items-center flex-wrap",children:[f.jsx("span",{className:"py-1 px-3 rounded-full text-[12px] font-semibold text-proj border border-proj/50 bg-proj/10",children:u.category}),f.jsxs("div",{className:"flex gap-2 items-center",children:[f.jsx("i",{className:"fa-regular fa-clock text-gray-500 text-sm"}),f.jsx("span",{className:"text-gray-500 text-sm",children:u.readTime})]})]}),f.jsx("h2",{className:"mt-4 group-hover:text-proj transition-all duration-300 text-xl sm:text-2xl lg:text-3xl text-white font-bold",children:u.title}),f.jsx("p",{className:"text-gray-400 text-sm sm:text-base font-normal mt-5",children:u.excerpt}),f.jsxs("div",{className:"mt-8 sm:mt-12 lg:mt-15 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsxs("div",{className:"relative inline-block",children:[f.jsx("img",{src:u.author.avatar,className:"rounded-full border border-proj/20 size-10 sm:size-12",alt:u.author.name}),f.jsx("div",{className:"absolute bottom-0 left-0 w-3 h-3 bg-proj rounded-full border border-[#161616]"})]}),f.jsxs("div",{className:"flex flex-col items-start gap-1",children:[f.jsx("span",{className:"text-white font-semibold text-sm",children:u.author.name}),f.jsx("span",{className:"text-gray-600 font-normal text-xs",children:u.date})]})]}),f.jsxs("div",{className:"flex gap-1.5 items-center",children:[f.jsx("span",{className:"text-proj font-semibold text-sm group-hover:translate-x-1 transition-all duration-300",children:"إقرأ المقال"}),f.jsx("i",{className:"fa-solid fa-arrow-left text-proj font-semibold text-sm"})]})]})]})]},u.id))})]})})})}const iy={إضاءة:"fa-lightbulb",بورتريه:"fa-user","مناظر طبيعية":"fa-mountain",تقنيات:"fa-cog",معدات:"fa-camera"};function ry({categories:i}){const u=e0();if(!i||i.length===0)return null;const o=c=>{u("/blog",{state:{selectedCategory:c}})};return f.jsx(f.Fragment,{children:f.jsx("section",{className:"bg-[#161616] overflow-hidden",children:f.jsxs("div",{className:"container w-full sm:w-[90%] lg:w-[77%] mx-auto px-4 sm:px-6 pb-12 sm:pb-16 lg:pb-20 pt-12 sm:pt-14 lg:pt-16 gap-4 sm:gap-5 lg:gap-6 flex flex-col items-center text-center",children:[f.jsxs("div",{className:"px-3.5 py-2 flex gap-2.5 items-center bg-proj/10 rounded-full border border-proj/20 w-fit",children:[f.jsx("div",{className:"size-1.5 bg-proj rounded-full animate-pulse shrink-0"}),f.jsx("div",{className:`relative size-2 bg-proj rounded-full shrink-0\r
                  before:content-[''] before:absolute before:inset-0 \r
                  before:bg-proj before:rounded-full before:animate-ping`}),f.jsx("span",{className:"text-xs sm:text-sm font-medium text-proj ms-1.5",children:"التصنيفات"})]}),f.jsx("h2",{className:"text-white font-bold text-3xl sm:text-4xl lg:text-6xl px-4",children:"استكشف حسب الموضوع"}),f.jsx("p",{className:"text-gray-500 font-normal text-base sm:text-lg px-4",children:"اعثر على محتوى مصمم حسب اهتماماتك"}),f.jsx("div",{className:"mt-6 sm:mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full",children:i.map((c,d)=>f.jsxs("div",{onClick:()=>o(c.name),className:"group hover:border-proj hover:bg-proj transition-all duration-300 cursor-pointer bg-black/15 border rounded-xl sm:rounded-2xl border-black/15 py-4 sm:py-5 px-4 sm:px-5",children:[f.jsx("div",{className:"size-12 sm:size-14 rounded-xl sm:rounded-2xl border group-hover:border-white/20 group-hover:bg-white/20 transition-all duration-300 border-proj/10 bg-proj/10 flex items-center justify-center",children:f.jsx("i",{className:`fa-solid ${iy[c.name]||"fa-cog"} text-base sm:text-lg group-hover:text-white transition-all duration-300 text-proj`})}),f.jsx("h3",{className:"mt-3 sm:mt-4 text-start text-white text-base sm:text-lg font-semibold",children:c.name}),f.jsxs("p",{className:"mt-1.5 sm:mt-2 group-hover:text-white transition-all duration-300 text-start text-white/60 text-xs sm:text-sm",children:[c.count," مقالة"]})]},d))})]})})})}function uy({posts:i}){return!i||i.length===0?null:f.jsx(f.Fragment,{children:f.jsx("section",{className:"bg-black overflow-hidden",children:f.jsxs("div",{className:"container w-full sm:w-[90%] lg:w-[83%] mx-auto px-4 sm:px-6 pb-12 sm:pb-16 lg:pb-18 pt-12 sm:pt-14 lg:pt-16",children:[f.jsxs("div",{className:"px-3.5 py-2 flex gap-2.5 items-center bg-proj/10 rounded-full border border-proj/20 w-fit",children:[f.jsx("div",{className:"size-1.5 bg-proj rounded-full animate-pulse shrink-0"}),f.jsx("div",{className:`relative size-2 bg-proj rounded-full shrink-0\r
                  before:content-[''] before:absolute before:inset-0 \r
                  before:bg-proj before:rounded-full before:animate-ping`}),f.jsx("span",{className:"text-xs sm:text-sm font-medium text-proj ms-1.5",children:"الأحدث"})]}),f.jsx("h2",{className:"font-bold text-3xl sm:text-4xl lg:text-6xl text-white mt-6 sm:mt-8",children:"أحدث المقالات"}),f.jsxs("div",{className:"justify-between items-start sm:items-center mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4",children:[f.jsx("p",{className:"text-gray-500 text-base sm:text-lg",children:"محتوى جديد طازج من المطبعة"}),f.jsxs(Ht,{to:"/blog",className:"group px-4 sm:px-5 py-2 sm:py-2.5 transition-all duration-200 rounded-xl bg-proj flex items-center gap-1 self-start sm:self-auto",children:[f.jsx("span",{className:"text-white font-semibold text-sm sm:text-base",children:"عرض جميع المقالات"}),f.jsx("i",{className:"group-hover:-translate-x-1 transition-all duration-200 fa-solid text-white fa-angle-left font-semibold text-sm sm:text-base ms-1.5"})]})]}),f.jsx("div",{className:"mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full",children:i.map(u=>f.jsxs(ja,{to:`/blog/${u.slug}`,className:"card hover:-translate-y-1.5 cursor-pointer flex flex-col overflow-hidden border border-white/20 group hover:border-proj/20 transition-all duration-300 rounded-2xl",children:[f.jsxs("div",{className:"relative overflow-hidden",children:[f.jsx("img",{src:u.image,className:"w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-[103%] transition-all duration-300",alt:u.title}),f.jsx("div",{className:"absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),f.jsx("div",{className:"py-1.5 px-3 bg-black/70 rounded-full flex gap-2 items-center absolute top-4 sm:top-5 right-4 sm:right-5",children:f.jsx("span",{className:"text-white font-semibold text-[10px] sm:text-xs",children:u.category})})]}),f.jsxs("div",{className:"p-5 sm:p-6 bg-[#161616] flex-1 flex flex-col",children:[f.jsx("div",{className:"flex gap-3 items-center",children:f.jsxs("div",{className:"flex gap-2 items-center",children:[f.jsx("i",{className:"fa-regular fa-clock text-gray-500 text-xs sm:text-sm"}),f.jsx("span",{className:"text-gray-500 text-xs sm:text-sm",children:u.readTime})]})}),f.jsx("h2",{className:"mt-3 sm:mt-4 group-hover:text-proj transition-all duration-300 text-lg sm:text-xl text-white font-bold line-clamp-2",children:u.title}),f.jsx("p",{className:"text-gray-400 text-xs sm:text-sm font-normal mt-2 sm:mt-3 line-clamp-3 flex-1",children:u.excerpt}),f.jsxs("div",{className:"mt-5 sm:mt-6 flex justify-between items-center",children:[f.jsxs("div",{className:"flex items-center gap-2 sm:gap-3",children:[f.jsxs("div",{className:"relative inline-block",children:[f.jsx("img",{src:u.author.avatar,className:"rounded-full border border-proj/20 size-10 sm:size-12",alt:u.author.name}),f.jsx("div",{className:"absolute bottom-0 left-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-proj rounded-full border border-[#161616]"})]}),f.jsxs("div",{className:"flex flex-col gap-0.5 sm:gap-1",children:[f.jsx("span",{className:"text-white font-semibold text-xs sm:text-sm",children:u.author.name}),f.jsx("span",{className:"text-gray-600 font-normal text-[10px] sm:text-xs",children:u.date})]})]}),f.jsx("div",{className:"flex size-8 sm:size-9 group-hover:bg-proj group-hover:border-proj duration-300 transition-all justify-center rounded-full bg-proj/10 border border-proj/20 items-center",children:f.jsx("i",{className:"fa-solid fa-arrow-left group-hover:text-white duration-300 transition-all text-proj font-semibold text-xs sm:text-sm"})})]})]})]},u.id))})]})})})}function oy(){return f.jsx(f.Fragment,{children:f.jsx("section",{className:"bg-[#0A0A0A] overflow-hidden",children:f.jsx("div",{className:"container w-full sm:w-[90%] lg:w-[83%] mx-auto px-4 sm:px-6 pb-20 pt-16 sm:pt-20 lg:pt-30",children:f.jsx("div",{className:"mt-8 w-full sm:w-[90%] lg:w-[70%] mx-auto p-6 sm:p-10 lg:p-16 rounded-2xl bg-[#161616] border border-white/10",children:f.jsxs("div",{className:"flex flex-col gap-6 sm:gap-8 items-center",children:[f.jsx("div",{className:"p-4 sm:p-5 bg-proj rounded-2xl flex items-center justify-center",children:f.jsx("i",{className:"fa-solid fa-envelope text-xl sm:text-2xl text-white font-semibold"})}),f.jsxs("h2",{className:"font-bold text-2xl sm:text-3xl lg:text-4xl text-white text-center",children:["إشترك في ",f.jsx("span",{className:"text-proj",children:"نشرتنا الإخباريه"})]}),f.jsx("p",{className:"text-gray-400 text-base sm:text-lg font-normal text-center px-4",children:"احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني"}),f.jsxs("form",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4 items-center w-full max-w-2xl",children:[f.jsx("input",{type:"email",placeholder:"ادخل بريدك الإلكتروني",className:"py-3 sm:py-4 px-4 sm:px-5 border w-full sm:flex-1 border-white/20 focus:border-proj outline-none text-white bg-black rounded-xl sm:rounded-2xl placeholder:text-gray-500 placeholder:text-base sm:placeholder:text-lg placeholder:font-normal transition-all duration-300"}),f.jsx("button",{type:"submit",className:"py-3 sm:py-4 px-6 sm:px-8 w-full sm:w-auto bg-proj hover:bg-proj/80 cursor-pointer transition-all duration-300 rounded-xl sm:rounded-2xl text-white font-semibold text-base sm:text-lg whitespace-nowrap",children:"إشترك الآن"})]}),f.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 lg:gap-8 w-full items-center",children:[f.jsxs("div",{className:"flex gap-2 items-center",children:[f.jsx("i",{className:"fa-solid fa-users text-proj text-sm"}),f.jsxs("span",{className:"text-gray-400 text-xs sm:text-sm font-normal",children:["انضم ل"," ",f.jsx("span",{className:"text-white font-semibold",children:"1000+"})," مصور"]})]}),f.jsxs("div",{className:"flex gap-2 items-center",children:[f.jsx("i",{className:"fa-solid fa-shield-halved text-proj text-sm"}),f.jsx("span",{className:"text-gray-400 text-xs sm:text-sm font-normal",children:"بدون ازعاج"})]}),f.jsxs("div",{className:"flex gap-2 items-center",children:[f.jsx("i",{className:"fa-solid fa-arrow-right-from-bracket text-proj text-sm"}),f.jsx("span",{className:"text-gray-400 text-xs sm:text-sm font-normal",children:"إلغاء الاشتراك في أي وقت"})]})]})]})})})})})}function sy(){const i={posts:[{id:1,slug:"mastering-golden-hour-photography",title:"إتقان تصوير الساعة الذهبية: دليل شامل",excerpt:"تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول الإضاءة والتكوين.",content:`الساعة الذهبية هي أكثر الأوقات سحراً للتصوير الفوتوغرافي. ذلك الوقت القصير بعد شروق الشمس وقبل غروبها حيث يكون الضوء ناعماً ودافئاً وساحراً.

## لماذا الساعة الذهبية؟

الضوء خلال هذا الوقت له صفات فريدة: ظلال طويلة ناعمة، ألوان دافئة ذهبية، وتباين منخفض يجعل كل شيء يبدو أجمل. البورتريهات تكتسب توهجاً طبيعياً والمناظر الطبيعية تتحول إلى لوحات فنية.

## التحضير المسبق

خطط لجلسة التصوير مسبقاً. استخدم تطبيقات مثل PhotoPills لمعرفة وقت الساعة الذهبية بدقة في موقعك. وصل قبل 30 دقيقة لاختيار أفضل زاوية.

## إعدادات الكاميرا

استخدم ISO منخفض للحصول على أقل ضوضاء. فتحة العدسة تعتمد على ما تريد: f/1.8-f/2.8 للبورتريهات مع خلفية ضبابية، أو f/8-f/11 للمناظر الطبيعية الحادة.

## التكوين الفني

ضع الشمس خلف موضوعك للحصول على تأثير الإضاءة الخلفية الساحر. أو استخدمها كمصدر جانبي لإبراز الملمس والعمق.

## الخلاصة

الساعة الذهبية هي هدية للمصورين. استغلها جيداً وستحصل على صور لا تُنسى تتميز بجمالها الطبيعي.`,category:"إضاءة",author:{name:"سالم أحمد",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",role:"مصور محترف"},image:"https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=800&h=400&fit=crop",date:"2026-01-15",readTime:"8 دقائق للقراءة",featured:!0,tags:["إضاءة","الساعة الذهبية","تصوير خارجي"]},{id:2,slug:"portrait-photography-secrets",title:"أسرار تصوير البورتريه: كيف تلتقط روح الشخصية",excerpt:"اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية الموضوع الحقيقية.",content:`تصوير البورتريه هو فن التقاط جوهر الإنسان في صورة واحدة. ليس مجرد توثيق الملامح، بل كشف القصة خلف العيون.

## التواصل مع الموضوع

قبل أن تمسك الكاميرا، تحدث مع الشخص. اجعله يشعر بالراحة. الابتسامة الحقيقية والنظرة الطبيعية تأتي فقط عندما يثق بك الموضوع.

## اختيار العدسة المناسبة

عدسات 85mm و 50mm هي الكلاسيكيات لتصوير البورتريه. توفر ضغطاً مثالياً للملامح وخلفية ضبابية جميلة.

## الإضاءة الطبيعية

النافذة الكبيرة هي أفضل صديق لمصور البورتريه. ضع الموضوع بزاوية 45 درجة من النافذة للحصول على إضاءة ثلاثية الأبعاد رائعة.

## التركيز على العيون

العيون هي نافذة الروح. تأكد دائماً من أن العيون حادة ومركزة. استخدم نقطة تركيز واحدة على العين الأقرب للكاميرا.

## الخلفية والتكوين

اختر خلفية بسيطة لا تشتت الانتباه. استخدم قاعدة الأثلاث لوضع العيون في النقاط القوية.

## الخلاصة

البورتريه الناجح يحكي قصة. عندما تجمع بين التقنية والتواصل الإنساني، تخلق صوراً خالدة.`,category:"بورتريه",author:{name:"محمد علي",avatar:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",role:"مصور بورتريه"},image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",date:"2026-01-12",readTime:"6 دقائق للقراءة",featured:!0,tags:["بورتريه","تصوير أشخاص","إضاءة طبيعية"]},{id:3,slug:"landscape-photography-guide",title:"دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف",excerpt:"استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط جمال الطبيعة بعدستك.",content:`تصوير المناظر الطبيعية هو رحلة إلى قلب الطبيعة. إنه فن يتطلب الصبر والتخطيط والعين الفنية لرؤية الجمال في كل مكان.

## المعدات الأساسية

حامل ثلاثي قوي ضروري للحصول على صور حادة. عدسة واسعة الزاوية (16-35mm) مثالية لالتقاط المشاهد الواسعة. فلاتر ND و Polarizer ستفتح لك آفاقاً إبداعية جديدة.

## توقيت التصوير

الساعة الزرقاء والساعة الذهبية هي أفضل الأوقات. الضوء يكون ناعماً والألوان غنية. لا تخف من التصوير في الطقس الدرامي - الغيوم والعواصف تضيف شخصية للصورة.

## التكوين الفني

ابحث عن عناصر المقدمة المثيرة للاهتمام. صخرة، زهرة، أو مسار يقود العين نحو الخلفية. استخدم خطوط التوجيه لخلق عمق في الصورة.

## إعدادات الكاميرا

فتحة f/8-f/16 للحصول على حدة من المقدمة للخلفية. ISO منخفض قدر الإمكان. استخدم وضع Live View والتكبير للتركيز اليدوي الدقيق.

## المعالجة اللاحقة

صور بصيغة RAW لأقصى مرونة في التعديل. تعديل الإضاءة والألوان بلطف يبرز جمال المشهد دون إفراط.

## الخلاصة

تصوير المناظر الطبيعية يعلمك التأمل والصبر. كل صورة هي ذكرى من رحلة لا تُنسى.`,category:"مناظر طبيعية",author:{name:"إبراهيم حسن",avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",role:"مصور طبيعة"},image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",date:"2026-01-10",readTime:"10 دقائق للقراءة",featured:!0,tags:["مناظر طبيعية","تصوير خارجي","طبيعة"]},{id:4,slug:"camera-settings-basics",title:"أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي",excerpt:"افهم العلاقة بين فتحة العدسة وسرعة الغالق وحساسية ISO للتحكم الكامل في صورك.",content:`مثلث التعريض الضوئي هو أساس كل صورة ناجحة. فهم هذه العناصر الثلاثة يحررك من الوضع التلقائي ويمنحك السيطرة الإبداعية الكاملة.

## فتحة العدسة (Aperture)

فتحة العدسة تتحكم في كمية الضوء وعمق الميدان. الأرقام الصغيرة (f/1.4, f/2.8) تعني فتحة أكبر، ضوء أكثر، وخلفية ضبابية. الأرقام الكبيرة (f/11, f/16) تعني حدة أكبر في كل الصورة.

## سرعة الغالق (Shutter Speed)

سرعة الغالق تتحكم في تجميد الحركة. 1/500 ثانية تجمد الرياضيين، 1/60 مناسبة للمواضيع الثابتة، والسرعات البطيئة تخلق تأثيرات ضبابية إبداعية.

## حساسية ISO

ISO هو حساسية المستشعر للضوء. ISO 100-400 للإضاءة الجيدة، أعلى من ذلك للإضاءة المنخفضة. كلما زاد ISO، زادت الضوضاء في الصورة.

## التوازن بين الثلاثة

هذه العناصر مترابطة. إذا زدت واحداً، يجب تعديل الآخرين للحفاظ على التعريض الصحيح. تدرب على الوضع اليدوي حتى تصبح هذه العلاقة طبيعية.

## نصائح عملية

ابدأ بوضع أولوية فتحة العدسة (Av/A) للتحكم في عمق الميدان، أو أولوية الغالق (Tv/S) للتحكم في الحركة.

## الخلاصة

إتقان مثلث التعريض يفتح لك عالماً من الإبداع. تدرب يومياً وستصبح هذه الإعدادات طبيعة ثانية.`,category:"تقنيات",author:{name:"داود خالد",avatar:"https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",role:"مدرب تصوير"},image:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=400&fit=crop",date:"2026-01-08",readTime:"7 دقائق للقراءة",featured:!1,tags:["إعدادات الكاميرا","مبتدئين","تقنيات"]},{id:5,slug:"photo-composition-rules",title:"قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية",excerpt:"تعلم قواعد التكوين الأساسية التي يستخدمها المصورون المحترفون لإنشاء صور مؤثرة بصرياً.",content:`التكوين هو الفرق بين صورة عادية وصورة استثنائية. إنه كيفية ترتيب العناصر داخل الإطار لتوجيه عين المشاهد وإيصال رسالتك.

## قاعدة الأثلاث

قسّم الإطار إلى تسعة أجزاء متساوية بخطين أفقيين وعموديين. ضع العناصر المهمة على هذه الخطوط أو تقاطعاتها للحصول على توازن بصري جذاب.

## الخطوط التوجيهية

استخدم الخطوط الطبيعية في المشهد - طريق، نهر، سور - لقيادة عين المشاهد نحو الموضوع الرئيسي.

## الإطار داخل الإطار

استخدم عناصر في المقدمة كإطار طبيعي: باب، نافذة، أغصان شجرة. هذا يضيف عمقاً ويركز الانتباه.

## التماثل والأنماط

التماثل يخلق شعوراً بالهدوء والتوازن. الأنماط المتكررة تجذب العين. كسر النمط يخلق نقطة اهتمام قوية.

## المساحة السلبية

لا تخف من الفراغ. المساحة الفارغة حول الموضوع يمكن أن تكون قوية بنفس قوة الموضوع نفسه.

## كسر القواعد

اعرف القواعد جيداً، ثم اكسرها بوعي. أحياناً الصورة غير التقليدية هي الأقوى تأثيراً.

## الخلاصة

التكوين مهارة تتطور مع الممارسة. صوّر كثيراً، ادرس أعمال المصورين العظماء، وطور عينك الفنية.`,category:"تقنيات",author:{name:"ليث محمود",avatar:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",role:"فنان بصري"},image:"https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=400&fit=crop",date:"2026-01-05",readTime:"9 دقائق للقراءة",featured:!1,tags:["تكوين","قواعد التصوير","فن"]},{id:6,slug:"mobile-photography-tips",title:"تصوير الهاتف المحمول: كيف تلتقط صوراً احترافية بهاتفك",excerpt:"اكتشف كيف تحول هاتفك الذكي إلى أداة تصوير قوية مع هذه النصائح والتقنيات.",content:`أفضل كاميرا هي التي معك دائماً. هاتفك الذكي يمكن أن يلتقط صوراً مذهلة إذا عرفت كيف تستخدمه بشكل صحيح.

## نظّف العدسة

أبسط نصيحة وأهمها. العدسة المتسخة تسبب ضبابية وفقدان للتباين. امسحها بقطعة قماش ناعمة قبل كل جلسة تصوير.

## استخدم الإضاءة الطبيعية

كاميرات الهواتف تتألق في الإضاءة الجيدة. صوّر بالقرب من النوافذ أو في الخارج. تجنب الإضاءة القاسية المباشرة.

## ثبّت يدك

الاهتزاز عدو الصورة الحادة. أمسك الهاتف بكلتا يديك، اسند مرفقيك على جسمك، أو استخدم حاملاً ثلاثياً صغيراً.

## تجنب التكبير الرقمي

التكبير الرقمي يفقد الجودة. بدلاً من ذلك، اقترب من موضوعك أو قص الصورة لاحقاً.

## جرب تطبيقات التصوير

تطبيقات مثل Lightroom Mobile و VSCO توفر تحكماً يدوياً وأدوات تحرير قوية. صوّر بصيغة RAW إذا كان هاتفك يدعمها.

## التكوين مهم

فعّل شبكة الأثلاث في إعدادات الكاميرا. طبق قواعد التكوين نفسها التي تستخدمها مع الكاميرا الاحترافية.

## الخلاصة

هاتفك أداة إبداعية قوية. المهارة والعين الفنية أهم من المعدات. صوّر كل يوم وشاهد تطورك.`,category:"معدات",author:{name:"جمال عبدالله",avatar:"https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face",role:"مصور ومراجع تقني"},image:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",date:"2026-01-03",readTime:"8 دقائق للقراءة",featured:!1,tags:["تصوير الهاتف","نصائح","مبتدئين"]},{id:7,slug:"night-photography-techniques",title:"تصوير الليل والنجوم: دليلك لالتقاط سماء الليل",excerpt:"تعلم كيفية تصوير النجوم ودرب التبانة والمناظر الليلية الساحرة مع هذه التقنيات المتقدمة.",content:`تصوير الليل عالم ساحر مليء بالتحديات والمكافآت. عندما تنام المدينة، تستيقظ السماء بملايين النجوم في انتظار عدستك.

## المعدات الضرورية

كاميرا بأداء جيد في ISO العالي ضرورية. عدسة سريعة (f/1.4-f/2.8) تسمح بدخول أكبر قدر من الضوء. حامل ثلاثي قوي وثابت لا غنى عنه.

## إعدادات التصوير

ابدأ بـ ISO 1600-3200، فتحة f/2.8 أو أوسع، وسرعة غالق 15-25 ثانية. استخدم قاعدة 500 لتجنب تتبع النجوم: اقسم 500 على البعد البؤري للحصول على أقصى وقت تعريض.

## التركيز في الظلام

التركيز التلقائي لا يعمل في الظلام. استخدم التركيز اليدوي على نجم ساطع أو ضوء بعيد. كبّر على الشاشة للتأكد من الحدة.

## اختيار الموقع

ابتعد عن التلوث الضوئي للمدن. استخدم تطبيقات مثل Dark Sky Finder للعثور على أماكن مظلمة. القمر الجديد أفضل وقت لتصوير النجوم.

## معالجة الصور

صور RAW ضرورية. ارفع الظلال، عدّل توازن اللون الأبيض، وزد التباين. برامج مثل Lightroom و Photoshop أساسية.

## الخلاصة

تصوير الليل يتطلب صبراً وتجربة. لكن عندما ترى درب التبانة في صورتك الأولى، ستدرك أن كل الجهد يستحق.`,category:"إضاءة",author:{name:"خالد الفيصل",avatar:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",role:"مصور فلكي"},image:"https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=400&fit=crop",date:"2026-01-01",readTime:"11 دقائق للقراءة",featured:!1,tags:["تصوير ليلي","نجوم","درب التبانة"]},{id:8,slug:"street-photography-guide",title:"تصوير الشارع: فن التقاط الحياة اليومية",excerpt:"اكتشف أسرار تصوير الشارع وكيفية توثيق اللحظات العفوية في الحياة اليومية.",content:`تصوير الشارع هو فن التقاط الحياة كما هي. لحظات عابرة، تعبيرات صادقة، وقصص إنسانية تحدث أمامنا كل يوم.

## الكاميرا المناسبة

الكاميرا الصغيرة غير الملفتة أفضل. الهاتف الذكي أو كاميرا ميرورليس صغيرة. تجنب المعدات الضخمة التي تجذب الانتباه.

## كن غير مرئي

ارتدِ ملابس عادية. تحرك ببطء وثقة. لا تتصرف كمصور - كن جزءاً من المشهد. الناس يتجاهلون من يبدو طبيعياً.

## التوقع والصبر

الصورة الرائعة تتطلب انتظار اللحظة المناسبة. ابحث عن إضاءة جميلة أو خلفية مثيرة، ثم انتظر دخول الشخص المناسب.

## احترام الخصوصية

تصوير الشارع ليس تطفلاً. كن محترماً. إذا طلب شخص عدم تصويره، احترم رغبته. تجنب تصوير الأطفال بدون إذن.

## سرد القصص

الصورة الجيدة تحكي قصة. ابحث عن التفاعلات البشرية، التناقضات، والمشاعر. السياق والبيئة جزء من القصة.

## الشجاعة

الخوف من الاقتراب طبيعي لكنه عائق. كلما اقتربت، كانت الصورة أقوى. تدرب حتى يصبح الاقتراب طبيعياً.

## الخلاصة

تصوير الشارع يعلمك رؤية الجمال في العادي. اخرج بكاميرتك اليوم واستكشف مدينتك بعيون جديدة.`,category:"بورتريه",author:{name:"نادر سعيد",avatar:"https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&h=100&fit=crop&crop=face",role:"مصور شوارع"},image:"https://images.unsplash.com/photo-1517732306149-e8f829eb588a?w=800&h=400&fit=crop",date:"2025-12-28",readTime:"7 دقائق للقراءة",featured:!1,tags:["تصوير شوارع","توثيق","حياة يومية"]},{id:9,slug:"food-photography-basics",title:"تصوير الطعام: كيف تجعل أطباقك تبدو شهية",excerpt:"تعلم تقنيات تصوير الطعام الاحترافية لإنشاء صور تثير الشهية وتجذب العيون.",content:`تصوير الطعام فن يجمع بين الطهي والتصوير. الهدف هو جعل المشاهد يشتهي الطبق من خلال الصورة وحدها.

## الإضاءة الطبيعية

الضوء الطبيعي الناعم هو الأفضل لتصوير الطعام. ضع الطبق بالقرب من نافذة كبيرة. استخدم عاكساً أبيض لملء الظلال.

## زوايا التصوير

ثلاث زوايا رئيسية: من الأعلى مباشرة (90°) للأطباق المسطحة، 45° للأطباق ذات الارتفاع، ومستوى العين للمشروبات والطبقات.

## تنسيق الطبق

التقديم مهم جداً. استخدم أطباق بسيطة لا تنافس الطعام. أضف عناصر ديكور مكملة: أعشاب طازجة، قماش، أدوات خشبية.

## الألوان المتناسقة

الألوان تؤثر على الشهية. الأخضر والأحمر يعززان الشهية. الأزرق يقللها. اختر ألوان الخلفية والإكسسوارات بعناية.

## السرعة مهمة

الطعام يفقد جاذبيته بسرعة. الآيس كريم يذوب، البخار يختفي. جهز كل شيء مسبقاً وصوّر بسرعة.

## الخدع الاحترافية

رشة ماء على الخضار تجعلها طازجة. الزيت يعطي لمعاناً. بخاخ الجلسرين يخلق قطرات ماء ثابتة.

## الخلاصة

تصوير الطعام يتطلب ممارسة. ابدأ بوجباتك اليومية وطور مهاراتك تدريجياً.`,category:"تقنيات",author:{name:"هاني الشمري",avatar:"https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face",role:"مصور طعام"},image:"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&h=400&fit=crop",date:"2025-12-25",readTime:"8 دقائق للقراءة",featured:!1,tags:["تصوير طعام","تنسيق","إضاءة"]},{id:10,slug:"wildlife-photography-tips",title:"تصوير الحياة البرية: كيف تلتقط عجائب الطبيعة",excerpt:"دليل شامل لتصوير الحيوانات في بيئتها الطبيعية مع نصائح للمعدات والتقنيات.",content:`تصوير الحياة البرية تحدٍ مثير يجمع بين المغامرة والفن. كل صورة ناجحة هي نتيجة ساعات من الانتظار والصبر.

## المعدات الأساسية

عدسة تليفوتو طويلة (200-600mm) ضرورية للاقتراب دون إزعاج الحيوانات. حامل أحادي أو ثلاثي للثبات. كاميرا سريعة في التركيز.

## فهم سلوك الحيوان

ادرس الحيوان الذي تريد تصويره. اعرف أوقات نشاطه، أماكن تواجده، وسلوكياته. هذه المعرفة توقعك للحظة المثالية.

## الصبر والانتظار

الحياة البرية لا تنتظرك. قد تقضي ساعات دون نتيجة. استمتع بالوقت في الطبيعة واعتبر كل لقطة مكافأة.

## احترام الحيوانات

لا تقترب كثيراً. لا تطعم الحيوانات. لا تزعجها لتحصل على صورة. رفاهية الحيوان أهم من أي صورة.

## الإضاءة والتوقيت

الصباح الباكر والمساء أفضل الأوقات. الحيوانات أكثر نشاطاً والضوء أجمل. تجنب منتصف النهار.

## إعدادات الكاميرا

سرعة غالق عالية (1/500 أو أسرع) لتجميد الحركة. تركيز مستمر (AF-C) لمتابعة الحيوان. وضع التصوير المتتابع للحظات السريعة.

## الخلاصة

تصوير الحياة البرية رحلة طويلة من التعلم. كل يوم في الطبيعة يعلمك شيئاً جديداً عن عالم الحيوان.`,category:"مناظر طبيعية",author:{name:"عمر الراشد",avatar:"https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face",role:"مصور حياة برية"},image:"https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&h=400&fit=crop",date:"2025-12-22",readTime:"10 دقائق للقراءة",featured:!1,tags:["حياة برية","طبيعة","حيوانات"]},{id:11,slug:"black-white-photography",title:"التصوير بالأبيض والأسود: فن الضوء والظل",excerpt:"اكتشف جمال التصوير أحادي اللون وكيفية إنشاء صور قوية بدون ألوان.",content:`التصوير بالأبيض والأسود يجرد الصورة من الألوان ليكشف عن جوهرها: الضوء والظل والشكل والعاطفة.

## لماذا الأبيض والأسود؟

إزالة الألوان تزيل التشتت وتركز الانتباه على العناصر الأساسية: التكوين، الملمس، التباين، والتعبير. بعض المشاهد تتحدث بقوة أكبر بدون ألوان.

## متى تختار الأبيض والأسود

المشاهد ذات التباين العالي، الملمس الغني، والأشكال القوية. البورتريهات العاطفية. المشاهد المعمارية. الطقس الدرامي.

## التفكير بالأبيض والأسود

تعلم رؤية المشهد بدرجات الرمادي. ما الذي سيصبح أبيض؟ أسود؟ رمادي متوسط؟ هذه الرؤية تأتي مع الممارسة.

## التعريض الصحيح

التحكم في مدى درجات الرمادي مهم. استخدم الهيستوجرام للتأكد من وجود تفاصيل في الأبيض والأسود. تجنب الإفراط في التعريض.

## المعالجة اللاحقة

التحويل إلى أبيض وأسود ليس مجرد إزالة التشبع. تحكم في كيفية تحول كل لون إلى درجة رمادية. جرب الفلاتر الافتراضية.

## الإلهام

ادرس أعمال عمالقة الأبيض والأسود: Ansel Adams، Henri Cartier-Bresson، Sebastião Salgado. تعلم من رؤيتهم الفريدة.

## الخلاصة

الأبيض والأسود ليس غياباً للون، بل حضوراً قوياً للضوء. جربه واكتشف عالماً جديداً من الجمال.`,category:"تقنيات",author:{name:"فارس العلي",avatar:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop&crop=face",role:"فنان فوتوغرافي"},image:"https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=800&h=400&fit=crop",date:"2025-12-20",readTime:"9 دقائق للقراءة",featured:!1,tags:["أبيض وأسود","تباين","فن"]},{id:12,slug:"photo-editing-lightroom",title:"أساسيات تعديل الصور في Lightroom",excerpt:"تعلم كيفية استخدام Adobe Lightroom لتحسين صورك وإنشاء أسلوب بصري مميز.",content:`Lightroom هو المعيار الذهبي لتعديل الصور. سواء كنت مبتدئاً أو محترفاً، هذا البرنامج يوفر كل ما تحتاجه.

## استيراد وتنظيم

ابدأ بإنشاء نظام تنظيم فعال. استخدم الكلمات المفتاحية، التقييمات، والمجموعات. التنظيم الجيد يوفر ساعات لاحقاً.

## التعديلات الأساسية

ابدأ بتصحيح التعريض وتوازن اللون الأبيض. ثم التباين والإبرازات والظلال. هذه التعديلات الأساسية تحسن معظم الصور.

## منحنى الدرجات

أداة قوية للتحكم الدقيق في التباين والألوان. منحنى S الخفيف يضيف عمقاً. تعلم استخدام منحنيات RGB الفردية.

## HSL والألوان

تحكم في كل لون على حدة: تشبعه، سطوعه، وتدرجه. هذا يعطيك سيطرة إبداعية كاملة على مظهر الصورة.

## الحدة وتقليل الضوضاء

كل صورة تحتاج قدراً من الحدة. قلل الضوضاء في صور ISO العالي. التوازن مهم - لا تفرط.

## الأسلوب الشخصي

طور أسلوباً بصرياً مميزاً. احفظه كـ Preset واستخدمه كنقطة بداية. أسلوبك يميز عملك عن الآخرين.

## الخلاصة

تعديل الصور جزء أساسي من التصوير الرقمي. تعلم Lightroom استثمار سيرافقك طوال رحلتك الفوتوغرافية.`,category:"معدات",author:{name:"سامي الحربي",avatar:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop&crop=face",role:"خبير تعديل صور"},image:"https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&h=400&fit=crop",date:"2025-12-18",readTime:"12 دقائق للقراءة",featured:!1,tags:["Lightroom","تعديل صور","برامج"]},{id:13,slug:"macro-photography-world",title:"عالم التصوير الماكرو: اكتشف التفاصيل الخفية",excerpt:"انغمس في عالم التصوير المقرب واكتشف جمال التفاصيل الصغيرة التي تفوتنا بالعين المجردة.",content:`التصوير الماكرو يكشف عالماً خفياً من الجمال. قطرات الندى، عيون الحشرات، بتلات الزهور - تفاصيل لا تراها العين المجردة.

## المعدات المتخصصة

عدسة ماكرو حقيقية (نسبة 1:1) هي الأفضل. البديل: أنابيب التمديد أو العدسات المقربة. الإضاءة الحلقية مفيدة جداً.

## تحديات عمق الميدان

عمق الميدان ضحل جداً في الماكرو. حتى f/16 قد لا تكفي. التقنية: Focus Stacking - عدة صور بتركيزات مختلفة تدمج في واحدة.

## الإضاءة الدقيقة

الضوء الطبيعي المنتشر مثالي. استخدم عاكسات صغيرة. فلاش الماكرو أو LED يوفر تحكماً أكبر. تجنب الظلال القاسية.

## الثبات المطلق

أي اهتزاز يدمر الصورة. حامل ثلاثي ثقيل، جهاز تحكم عن بعد، قفل المرآة. بعض المصورين يحبسون أنفاسهم!

## إيجاد المواضيع

الطبيعة مليئة بالمواضيع. الحشرات في الصباح الباكر (بطيئة من البرد)، الزهور بعد المطر، الأوراق الخريفية. انظر للأسفل أكثر.

## الصبر والمثابرة

الماكرو يتطلب صبراً استثنائياً. الحشرة تطير، الريح تحرك الزهرة. استمر في المحاولة.

## الخلاصة

الماكرو يغير طريقة رؤيتك للعالم. فجأة، حديقتك تصبح غابة استوائية مليئة بالعجائب.`,category:"تقنيات",author:{name:"رامي الخطيب",avatar:"https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?w=100&h=100&fit=crop&crop=face",role:"مصور ماكرو"},image:"https://images.unsplash.com/photo-1550159930-40066082a4fc?w=800&h=400&fit=crop",date:"2025-12-15",readTime:"10 دقائق للقراءة",featured:!1,tags:["ماكرو","تفاصيل","حشرات"]},{id:14,slug:"long-exposure-photography",title:"التعريض الطويل: كيف تصور الحركة والزمن",excerpt:"تعلم تقنيات التعريض الطويل لإنشاء صور إبداعية تظهر الحركة بطريقة فنية ساحرة.",content:`التعريض الطويل يحول الثواني إلى لوحات فنية. الماء يصبح حريراً، السيارات خطوطاً ضوئية، والغيوم أشرطة في السماء.

## المعدات الضرورية

حامل ثلاثي ثابت أساسي. فلاتر ND لتقليل الضوء في النهار. جهاز تحكم عن بعد لتجنب اهتزاز الكاميرا.

## حساب التعريض

فلتر ND 10 stops يمدد التعريض 1000 مرة. إذا كان التعريض الطبيعي 1/125، يصبح 8 ثوانٍ. استخدم تطبيقات الحساب.

## مواضيع مثالية

الشلالات والأنهار تتحول لحرير. أضواء السيارات تخلق خطوطاً. الغيوم المتحركة تضيف دراما. البحر يصبح ضباباً.

## التركيز قبل الفلتر

ركز قبل وضع فلتر ND الداكن. الكاميرا لا ترى من خلاله. استخدم التركيز اليدوي ولا تغيره بعد وضع الفلتر.

## التجربة والتعلم

لا يوجد تعريض مثالي لكل مشهد. جرب أوقاتاً مختلفة. راجع النتائج على الشاشة. عدّل وكرر.

## الإبداع بلا حدود

جرب التصوير في أوقات مختلفة: غروب الشمس، الساعة الزرقاء، الليل. كل وقت يعطي نتائج مختلفة.

## الخلاصة

التعريض الطويل يعلمك رؤية العالم بطريقة مختلفة. الزمن يصبح مادة تشكلها بإبداعك.`,category:"إضاءة",author:{name:"باسم المصري",avatar:"https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?w=100&h=100&fit=crop&crop=face",role:"مصور فني"},image:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=400&fit=crop",date:"2025-12-12",readTime:"8 دقائق للقراءة",featured:!1,tags:["تعريض طويل","ND فلتر","إبداع"]},{id:15,slug:"wedding-photography-guide",title:"تصوير حفلات الزفاف: دليل المصور المحترف",excerpt:"تعلم أساسيات تصوير حفلات الزفاف من التحضير إلى تسليم الصور النهائية.",content:`تصوير الزفاف مسؤولية كبيرة. يوم لا يتكرر، لحظات لا تعود، وذكريات ستبقى للأبد. الضغط عالٍ لكن المكافأة أكبر.

## التحضير المسبق

اجتمع مع العروسين. افهم توقعاتهم ورؤيتهم. زر الموقع مسبقاً. اعرف جدول اليوم بالتفصيل.

## المعدات والنسخ الاحتياطي

كاميرتان على الأقل. عدسات متنوعة (24-70, 70-200, 35, 85). فلاشات متعددة. بطاريات وكروت ذاكرة إضافية. لا مجال للفشل.

## اللحظات الرئيسية

التحضيرات، الدخلة، القبلة الأولى، الرقصة الأولى، قطع الكيك، رمي الباقة. كن جاهزاً لكل لحظة ولا تفوت أياً منها.

## العمل مع الضوء

الكنائس والقاعات غالباً ذات إضاءة صعبة. تعلم استخدام الفلاش المرتد. ابحث عن مصادر الضوء الطبيعي.

## التعامل مع الناس

أنت قائد لجلسات التصوير الجماعية. كن حازماً لكن لطيفاً. اعرف أسماء أفراد العائلة المهمين.

## المعالجة والتسليم

آلاف الصور تحتاج فرزاً وتعديلاً. ضع جدولاً زمنياً واقعياً. التسليم في الوقت المحدد يبني سمعتك.

## الخلاصة

تصوير الزفاف يجمع كل مهارات التصوير. إنه تحدٍ كبير لكنه أيضاً فرصة لخلق فن يدوم للأجيال.`,category:"بورتريه",author:{name:"منصور الزهراني",avatar:"https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=100&h=100&fit=crop&crop=face",role:"مصور زفاف"},image:"https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=400&fit=crop",date:"2025-12-10",readTime:"11 دقائق للقراءة",featured:!1,tags:["زفاف","مناسبات","احترافي"]},{id:16,slug:"drone-photography-basics",title:"التصوير بالدرون: منظور جديد للعالم",excerpt:"اكتشف عالم التصوير الجوي وتعلم أساسيات استخدام الدرون لالتقاط صور من زوايا فريدة.",content:`التصوير بالدرون يفتح آفاقاً جديدة. زوايا كانت مستحيلة أصبحت في متناول يدك. منظور الطائر يكشف جمالاً مخفياً.

## اختيار الدرون المناسب

DJI تقود السوق بموديلات مثل Mini و Air و Mavic. الكاميرا، وقت الطيران، والثبات عوامل مهمة. ابدأ بدرون للمبتدئين.

## القوانين واللوائح

اعرف قوانين بلدك. معظم الدول تتطلب تسجيلاً ورخصة. مناطق ممنوعة حول المطارات والمنشآت الحكومية. الجهل بالقانون لا يعفيك.

## التحكم والطيران

تدرب في مناطق مفتوحة أولاً. تعلم الإقلاع والهبوط بسلاسة. فهم أوضاع الطيران المختلفة. الممارسة تصنع الإتقان.

## التكوين من الأعلى

الأنماط والأشكال تبدو مختلفة من الأعلى. ابحث عن التماثل، الخطوط التوجيهية، والتباينات. الظلال تصبح عناصر تكوين.

## التوقيت والإضاءة

الساعة الذهبية من الجو أكثر سحراً. الظلال الطويلة تضيف عمقاً. يوم غائم يعطي إضاءة متساوية جيدة.

## السلامة أولاً

لا تطر فوق الناس. راقب البطارية دائماً. عد للمنزل قبل نفاد الطاقة. الطقس العاصف خطير.

## الخلاصة

الدرون أداة إبداعية قوية. استخدمها بمسؤولية واكتشف عالماً جديداً من الجمال.`,category:"معدات",author:{name:"فيصل الدوسري",avatar:"https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=100&h=100&fit=crop&crop=face",role:"مصور جوي"},image:"https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=400&fit=crop",date:"2025-12-08",readTime:"9 دقائق للقراءة",featured:!1,tags:["درون","تصوير جوي","DJI"]},{id:17,slug:"product-photography-essentials",title:"تصوير المنتجات: أساسيات التصوير التجاري",excerpt:"تعلم كيفية تصوير المنتجات بشكل احترافي لمتجرك الإلكتروني أو عملائك التجاريين.",content:`تصوير المنتجات فن يجمع بين الدقة التقنية والإبداع البصري. صورة المنتج الجيدة تبيع نفسها.

## إعداد الاستوديو

لا تحتاج استوديو ضخم. طاولة بيضاء، خلفية بيضاء أو رمادية، وإضاءة جيدة كافية للبداية. صندوق الضوء (Light Box) خيار ممتاز للمنتجات الصغيرة.

## الإضاءة المثالية

الإضاءة الناعمة المنتشرة تزيل الظلال القاسية. استخدم سوفت بوكس أو شراشف بيضاء لتنعيم الضوء. الإضاءة من الجانب تبرز الملمس والتفاصيل.

## الخلفية والتنسيق

الخلفية البيضاء النظيفة معيار التجارة الإلكترونية. لكن لا تخف من التجربة: الخشب، الرخام، أو الأقمشة يمكن أن تضيف شخصية للمنتج.

## الزوايا المتعددة

صور المنتج من عدة زوايا: أمامية، جانبية، من الأعلى، وتفاصيل مقربة. العميل يريد رؤية كل شيء قبل الشراء.

## التعديل والتنقيح

إزالة الغبار والعيوب الصغيرة ضرورية. تصحيح الألوان لتطابق المنتج الحقيقي. الاتساق في الأسلوب عبر كل المنتجات.

## الخلاصة

تصوير المنتجات استثمار يعود بأضعاف. صور احترافية تعني ثقة أكبر ومبيعات أعلى.`,category:"تقنيات",author:{name:"لؤي الصالح",avatar:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face",role:"مصور تجاري"},image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=400&fit=crop",date:"2025-12-05",readTime:"8 دقائق للقراءة",featured:!1,tags:["تصوير منتجات","تجاري","استوديو"]},{id:18,slug:"architecture-photography",title:"تصوير العمارة: كيف تلتقط روح المباني",excerpt:"اكتشف تقنيات تصوير المباني والهندسة المعمارية بطريقة فنية تبرز جمالها وتفاصيلها.",content:`تصوير العمارة يحول المباني إلى أعمال فنية. الخطوط والأشكال والضوء والظل تتراقص معاً لتخلق صوراً آسرة.

## العدسات المناسبة

عدسة واسعة الزاوية (16-35mm) أساسية لالتقاط المباني الكاملة. عدسة Tilt-Shift تصحح التشوه وتبقي الخطوط مستقيمة. التليفوتو لتفاصيل الواجهات.

## التعامل مع التشوه

الخطوط المائلة مشكلة شائعة. صور من منتصف ارتفاع المبنى إن أمكن. أو صحح التشوه في مرحلة ما بعد المعالجة.

## الإضاءة والتوقيت

الضوء الجانبي يبرز الملمس والعمق. الساعة الزرقاء مثالية للمباني المضاءة. النهار الغائم يعطي إضاءة ناعمة متساوية.

## الخطوط والأشكال

ابحث عن الأنماط المتكررة، التماثل، والخطوط التوجيهية. الهندسة المعمارية غنية بعناصر التكوين الطبيعية.

## التفاصيل المعمارية

لا تكتفِ بالصورة الشاملة. اقترب من التفاصيل: النوافذ، الأعمدة، الزخارف، السلالم. كل تفصيل يحكي قصة.

## الخلاصة

تصوير العمارة يعلمك رؤية الجمال في المألوف. كل مبنى له شخصية تنتظر أن تُكتشف.`,category:"مناظر طبيعية",author:{name:"طارق النعيمي",avatar:"https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=100&h=100&fit=crop&crop=face",role:"مصور معماري"},image:"https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=400&fit=crop",date:"2025-12-02",readTime:"9 دقائق للقراءة",featured:!1,tags:["عمارة","مباني","هندسة"]},{id:19,slug:"sports-action-photography",title:"تصوير الرياضة والحركة: تجميد اللحظة الحاسمة",excerpt:"تعلم تقنيات تصوير الأحداث الرياضية والحركة السريعة بوضوح ودقة احترافية.",content:`تصوير الرياضة يتطلب سرعة البديهة والمعدات المناسبة. لحظة الانتصار أو الهزيمة تحدث في جزء من الثانية.

## المعدات السريعة

كاميرا بتركيز تلقائي سريع ومعدل تصوير متتابع عالي (10+ صور/ثانية). عدسات تليفوتو سريعة (70-200 f/2.8، 400 f/2.8). بطاقات ذاكرة سريعة.

## إعدادات الكاميرا

سرعة غالق 1/1000 ثانية على الأقل لتجميد الحركة. تركيز مستمر (AF-C) مع تتبع. ISO تلقائي مع حد أقصى. وضع التصوير المتتابع.

## توقع الحركة

اعرف اللعبة. توقع أين ستكون اللحظة الحاسمة. ركز مسبقاً على تلك النقطة. الخبرة تبني هذا الحدس.

## الموقع والزاوية

ابحث عن موقع يتيح خلفية نظيفة. ضوء الشمس خلفك أو جانبياً. زاوية منخفضة تجعل الرياضي يبدو أكثر قوة.

## التعبيرات والعواطف

ليست الحركة فقط مهمة. ابحث عن لحظات العاطفة: الفرح، الألم، التركيز. هذه هي الصور التي تبقى.

## الخلاصة

تصوير الرياضة ماراثون لا سباق قصير. كل مباراة فرصة للتعلم والتحسن. استمر في المحاولة.`,category:"بورتريه",author:{name:"أحمد الشهري",avatar:"https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?w=100&h=100&fit=crop&crop=face",role:"مصور رياضي"},image:"https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=400&fit=crop",date:"2025-11-28",readTime:"10 دقائق للقراءة",featured:!1,tags:["رياضة","حركة","سرعة"]},{id:20,slug:"flash-photography-basics",title:"أساسيات التصوير بالفلاش: تحكم كامل في الإضاءة",excerpt:"افهم كيفية استخدام الفلاش الخارجي لإنشاء إضاءة احترافية في أي موقف.",content:`الفلاش أداة قوية تحررك من قيود الإضاءة المتاحة. مع الفهم الصحيح، يصبح أفضل صديق للمصور.

## أنواع الفلاش

الفلاش المدمج محدود القوة والمرونة. الفلاش الخارجي (Speedlight) أقوى ويمكن توجيهه. فلاشات الاستوديو للتحكم الكامل.

## الفلاش المرتد

لا توجه الفلاش مباشرة للوجه. ارتده عن السقف أو الجدار للحصول على ضوء ناعم طبيعي. السقف الأبيض أفضل عاكس.

## TTL مقابل Manual

TTL يقيس الضوء تلقائياً - سريع ومريح. الوضع اليدوي يعطي تحكماً كاملاً ونتائج متسقة. تعلم كليهما.

## موازنة الفلاش مع المحيط

الفلاش لا يجب أن يطغى على الإضاءة الطبيعية. قلل قوته ليكمل الضوء المتاح بدلاً من استبداله.

## High-Speed Sync

للتصوير بسرعة غالق أعلى من سرعة المزامنة، فعّل HSS. مفيد لملء الظلال في ضوء الشمس القوي.

## الخلاصة

الفلاش يفتح إمكانيات لا حدود لها. ابدأ بالأساسيات ثم تعمق تدريجياً. الممارسة هي المفتاح.`,category:"إضاءة",author:{name:"ماجد القحطاني",avatar:"https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=100&h=100&fit=crop&crop=face",role:"مصور استوديو"},image:"https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=400&fit=crop",date:"2025-11-25",readTime:"8 دقائق للقراءة",featured:!1,tags:["فلاش","إضاءة صناعية","Speedlight"]},{id:21,slug:"travel-photography-tips",title:"تصوير السفر: كيف توثق رحلاتك بصور لا تُنسى",excerpt:"نصائح عملية لتصوير السفر تساعدك على التقاط جوهر كل مكان تزوره.",content:`تصوير السفر يجمع كل أنواع التصوير: مناظر طبيعية، شوارع، بورتريهات، طعام، وعمارة. كل رحلة فرصة للتعلم.

## التحضير للرحلة

ابحث عن وجهتك مسبقاً. اعرف أفضل مواقع التصوير وأوقاتها. لكن كن مستعداً للمفاجآت - أجمل الصور غالباً غير مخططة.

## المعدات الخفيفة

السفر يعني المشي كثيراً. كاميرا واحدة وعدستان كافية لمعظم الحالات. حقيبة مريحة وخفيفة ضرورية.

## احترام الثقافة المحلية

استأذن قبل تصوير الناس. احترم الأماكن المقدسة. تعلم بضع كلمات من اللغة المحلية. التواصل يفتح الأبواب.

## استيقظ مبكراً

أفضل الضوء وأقل الزحام في الصباح الباكر. التضحية بساعات النوم تستحق للحصول على صور فريدة.

## احكِ قصة

لا تصور المعالم فقط. صور الحياة اليومية، الطعام المحلي، التفاصيل الصغيرة. هذه هي روح المكان.

## الخلاصة

تصوير السفر يجعل الرحلة أكثر عمقاً. تنظر أكثر، تلاحظ أكثر، تتذكر أكثر. السفر بكاميرا تجربة مختلفة تماماً.`,category:"مناظر طبيعية",author:{name:"ياسر العتيبي",avatar:"https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=100&h=100&fit=crop&crop=face",role:"مصور رحالة"},image:"https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=400&fit=crop",date:"2025-11-22",readTime:"9 دقائق للقراءة",featured:!1,tags:["سفر","رحلات","توثيق"]},{id:22,slug:"color-theory-photography",title:"نظرية الألوان في التصوير: كيف تستخدم الألوان بذكاء",excerpt:"افهم كيف تؤثر الألوان على مشاعر المشاهد وكيف تستخدمها لتعزيز صورك.",content:`الألوان لغة بصرية قوية. فهمها يرفع صورك من الجيدة إلى الاستثنائية.

## عجلة الألوان

الألوان الأساسية (أحمر، أزرق، أصفر) والثانوية (برتقالي، أخضر، بنفسجي). الألوان المتقابلة تخلق تبايناً قوياً. المتجاورة تخلق انسجاماً.

## سيكولوجية الألوان

الأحمر: طاقة وعاطفة. الأزرق: هدوء وثقة. الأخضر: طبيعة وتوازن. الأصفر: سعادة وتفاؤل. استخدم هذه المعاني في صورك.

## التباين اللوني

الألوان المتقابلة (أحمر/أخضر، أزرق/برتقالي) تجذب الانتباه. استخدمها لإبراز موضوعك أو خلق دراما بصرية.

## الانسجام اللوني

الألوان المتقاربة تخلق شعوراً بالوحدة والهدوء. مناسبة للصور الهادئة والتأملية.

## درجات الحرارة اللونية

الألوان الدافئة (أحمر، برتقالي) تقدم للأمام. الباردة (أزرق، أخضر) تتراجع. استخدم هذا لخلق عمق.

## الخلاصة

الوعي بالألوان يغير طريقة رؤيتك وتصويرك. ابدأ بملاحظة الألوان في كل مكان حولك.`,category:"تقنيات",author:{name:"دحام الحسيني",avatar:"https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=100&h=100&fit=crop&crop=face",role:"فنان بصري"},image:"https://images.unsplash.com/photo-1502691876148-a84978e59af8?w=800&h=400&fit=crop",date:"2025-11-18",readTime:"7 دقائق للقراءة",featured:!1,tags:["ألوان","نظرية","تكوين"]},{id:23,slug:"newborn-baby-photography",title:"تصوير المواليد: فن التقاط البراءة",excerpt:"تعلم تقنيات تصوير الأطفال حديثي الولادة بأمان واحترافية.",content:`تصوير المواليد تخصص رقيق يتطلب صبراً وحذراً ومهارة. كل طفل فريد وكل جلسة مغامرة جديدة.

## السلامة أولاً

سلامة الطفل فوق كل اعتبار. لا تضعه في أوضاع غير آمنة. اغسل يديك دائماً. حافظ على دفء الغرفة (حوالي 26-28 درجة).

## التوقيت المثالي

أفضل عمر للتصوير: 5-14 يوم. الطفل لا يزال نعساً ومرناً. بعد ذلك يصبح أكثر يقظة وصعوبة في الوضعيات.

## البيئة المريحة

ضوضاء بيضاء تهدئ الطفل. إضاءة ناعمة طبيعية. تجنب الفلاش. اجعل الأهل قريبين للراحة النفسية.

## الأوضاع الآمنة

وضع السلة والتكور الكلاسيكي آمن ومحبوب. تجنب الأوضاع المعقدة التي تراها في Pinterest - كثير منها مركب في الفوتوشوب.

## الإكسسوارات والألوان

ألوان هادئة وإكسسوارات بسيطة. الطفل هو النجم. تجنب الإفراط في الديكور الذي يشتت الانتباه.

## الخلاصة

تصوير المواليد مسؤولية كبيرة ومكافأة أكبر. كل صورة ذكرى ستعتز بها العائلة للأبد.`,category:"بورتريه",author:{name:"نايف المطيري",avatar:"https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop&crop=face",role:"مصور مواليد"},image:"https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&h=400&fit=crop",date:"2025-11-15",readTime:"10 دقائق للقراءة",featured:!1,tags:["مواليد","أطفال","بورتريه"]},{id:24,slug:"real-estate-photography",title:"تصوير العقارات: كيف تجعل المنزل يبيع نفسه",excerpt:"تعلم تقنيات تصوير العقارات التي تجعل المنازل تبدو أفضل ما يمكن.",content:`تصوير العقارات مجال مربح ومطلوب. صورة جيدة يمكن أن تكون الفرق بين بيع سريع وعقار راكد.

## المعدات الأساسية

عدسة واسعة الزاوية (16-35mm) ضرورية لإظهار المساحات. حامل ثلاثي لصور حادة ومستوية. فلاش للتحكم في الإضاءة.

## تحضير المكان

نظف وأزل الفوضى. أضف لمسات بسيطة: زهور، مجلات، فوط مرتبة. افتح الستائر والأبواب لإظهار التدفق.

## الإضاءة المتوازنة

التحدي: موازنة ضوء النوافذ الساطع مع الداخل المظلم. استخدم HDR أو إضاءة إضافية. تجنب النوافذ المحترقة.

## الزوايا الصحيحة

صور من زاوية الغرفة لإظهار أكبر مساحة. ارتفاع الكاميرا حوالي 120 سم. أبقِ الخطوط العمودية مستقيمة.

## التصوير الخارجي

الساعة الزرقاء مع أضواء المنزل مضاءة تخلق صوراً دافئة ومرحبة. صور الحديقة والمسبح والمرافق.

## الخلاصة

تصوير العقارات يجمع بين التقنية والتسويق. افهم ما يريد المشتري رؤيته وقدمه بأفضل صورة.`,category:"تقنيات",author:{name:"عبدالله الغامدي",avatar:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face",role:"مصور عقارات"},image:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=400&fit=crop",date:"2025-11-12",readTime:"8 دقائق للقراءة",featured:!1,tags:["عقارات","تجاري","واسع الزاوية"]},{id:25,slug:"raw-vs-jpeg-explained",title:"RAW مقابل JPEG: متى تستخدم كلاً منهما",excerpt:"افهم الفرق بين صيغتي الصور الأكثر شيوعاً واختر الأنسب لاحتياجاتك.",content:`الجدل بين RAW و JPEG قديم قدم التصوير الرقمي. لكل منهما مكانه ووقته.

## ما هو RAW؟

RAW هو كل البيانات التي التقطها المستشعر بدون معالجة. ملف كبير يحتوي على أقصى معلومات ممكنة. يتطلب معالجة لاحقة.

## ما هو JPEG؟

JPEG ملف مضغوط ومعالج في الكاميرا. أصغر حجماً وجاهز للاستخدام مباشرة. لكنه يفقد بعض البيانات.

## مزايا RAW

مرونة هائلة في التعديل. تصحيح التعريض بسهولة. تعديل توازن اللون الأبيض بعد التصوير. استعادة تفاصيل من الظلال والإبرازات.

## مزايا JPEG

ملفات صغيرة = مساحة أكبر. جاهز للمشاركة مباشرة. معالجة الكاميرا غالباً ممتازة. مثالي للتصوير السريع والكميات الكبيرة.

## متى تستخدم كلاً منهما

RAW: التصوير الاحترافي، الإضاءة الصعبة، عندما تريد أقصى جودة. JPEG: اللقطات اليومية، المساحة محدودة، السرعة مطلوبة.

## الخلاصة

كثير من المصورين يصورون RAW+JPEG معاً. جرب كليهما واختر ما يناسب أسلوبك واحتياجاتك.`,category:"معدات",author:{name:"كريم الفهد",avatar:"https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=100&h=100&fit=crop&crop=face",role:"خبير تقني"},image:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop",date:"2025-11-08",readTime:"6 دقائق للقراءة",featured:!1,tags:["RAW","JPEG","صيغ الصور"]},{id:26,slug:"self-portrait-photography",title:"تصوير البورتريه الذاتي: كن موضوعك الخاص",excerpt:"تعلم كيف تصور نفسك بشكل احترافي وإبداعي دون الحاجة لمساعد.",content:`البورتريه الذاتي فن قديم تجدد بالتصوير الفوتوغرافي. أنت المصور والموديل معاً.

## لماذا البورتريه الذاتي؟

تدريب مجاني متاح دائماً. استكشاف الذات والتعبير الفني. تطوير مهاراتك في الإضاءة والتكوين والتعديل.

## المعدات اللازمة

حامل ثلاثي ثابت. جهاز تحكم عن بعد أو مؤقت ذاتي. مرآة لمراقبة الوضعية. تطبيق التحكم بالكاميرا على الهاتف مفيد جداً.

## التركيز بدونك

ضع شيئاً في مكانك للتركيز عليه (كرسي، وسادة). استخدم التركيز اليدوي وثبته. أو استخدم وضع تتبع العين إن كان متاحاً.

## الإضاءة والوضعيات

جرب بحرية. لا أحد ينتظرك. العب مع الضوء والظلال. جرب تعابير وأوضاع لن تطلبها من شخص آخر.

## التعديل والأسلوب

البورتريه الذاتي مساحة للتجربة. جرب أساليب تعديل جديدة. طور صوتك البصري الخاص.

## الخلاصة

البورتريه الذاتي رحلة اكتشاف ذات. كل صورة تعلمك شيئاً عن نفسك وعن فنك.`,category:"بورتريه",author:{name:"سلطان الراجحي",avatar:"https://images.unsplash.com/photo-1557862921-37829c790f19?w=100&h=100&fit=crop&crop=face",role:"فنان تصوير"},image:"https://images.unsplash.com/photo-1554080353-a576cf803bda?w=800&h=400&fit=crop",date:"2025-11-05",readTime:"7 دقائق للقراءة",featured:!1,tags:["بورتريه ذاتي","إبداع","تعبير"]},{id:27,slug:"lens-guide-beginners",title:"دليل العدسات للمبتدئين: كيف تختار عدستك الأولى",excerpt:"افهم أنواع العدسات المختلفة واختر الأنسب لأسلوب تصويرك واحتياجاتك.",content:`العدسة أهم من الكاميرا في كثير من الأحيان. فهم العدسات يساعدك على اتخاذ قرارات شراء حكيمة.

## البعد البؤري

يُقاس بالمليمتر (mm). الأرقام الصغيرة = زاوية واسعة. الأرقام الكبيرة = تقريب. 50mm تقريباً ما تراه العين البشرية.

## فتحة العدسة

f/1.8 أكبر من f/4. فتحة أكبر = ضوء أكثر + خلفية أكثر ضبابية. العدسات السريعة (f/1.4-f/2.8) أغلى وأكبر.

## عدسة الـ 50mm

النيفتي فيفتي (50mm f/1.8) أفضل استثمار للمبتدئين. رخيصة، خفيفة، وتعطي نتائج رائعة. تعلمك الحركة والتكوين.

## العدسات الزوم مقابل الثابتة

الزوم مرنة وعملية. الثابتة (Prime) أخف وأسرع وأحد. للتعلم، الثابتة تجبرك على التفكير أكثر.

## العدسات حسب التخصص

بورتريه: 85mm. مناظر: 16-35mm. ماكرو: عدسة ماكرو مخصصة. حياة برية: 100-400mm.

## الخلاصة

لا تشترِ عدسات لا تحتاجها. ابدأ بعدسة واحدة واتقنها قبل الانتقال للتالية. العدسة الأفضل هي التي تستخدمها.`,category:"معدات",author:{name:"فهد السبيعي",avatar:"https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=100&h=100&fit=crop&crop=face",role:"مراجع معدات"},image:"https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=800&h=400&fit=crop",date:"2025-11-02",readTime:"9 دقائق للقراءة",featured:!1,tags:["عدسات","معدات","مبتدئين"]},{id:28,slug:"minimalist-photography",title:"التصوير البسيط (Minimalist): قوة الفراغ",excerpt:"اكتشف جمال البساطة في التصوير وكيف تخلق صوراً قوية بعناصر قليلة.",content:`الأقل هو الأكثر. التصوير البسيط يزيل كل ما هو غير ضروري ليتحدث الجوهر.

## فلسفة البساطة

كل عنصر في الصورة يجب أن يكون له غرض. إذا لم يضف شيئاً، فهو يطرح. الفراغ ليس خالياً - إنه يتنفس.

## المساحة السلبية

الفراغ حول الموضوع يعطيه قوة وهيبة. لا تخف من ترك 80% من الإطار فارغاً. الموضوع الصغير في فراغ كبير يجذب الانتباه.

## الخطوط والأشكال

التصوير البسيط يعتمد على الهندسة. خط واحد، شكل واحد، نمط متكرر. البساطة في العناصر، القوة في التنفيذ.

## الألوان المحدودة

ألوان قليلة أو لون واحد. الأبيض والأسود طبيعي للبساطة. لون واحد مع خلفية محايدة.

## إيجاد المواضيع

المباني الحديثة، السماء الفارغة، الأشياء اليومية المعزولة. البساطة في كل مكان لمن يعرف كيف ينظر.

## الخلاصة

التصوير البسيط ليس سهلاً. إزالة العناصر أصعب من إضافتها. لكن النتيجة صور لا تُنسى.`,category:"تقنيات",author:{name:"راشد الجاسر",avatar:"https://images.unsplash.com/photo-1545167622-3a6ac756afa4?w=100&h=100&fit=crop&crop=face",role:"فنان بصري"},image:"https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&h=400&fit=crop",date:"2025-10-28",readTime:"6 دقائق للقراءة",featured:!1,tags:["بساطة","Minimalist","تكوين"]}],categories:[{name:"إضاءة",count:3,color:"emerald"},{name:"بورتريه",count:3,color:"purple"},{name:"مناظر طبيعية",count:2,color:"blue"},{name:"تقنيات",count:5,color:"orange"},{name:"معدات",count:3,color:"emerald"}]},u=i.posts.filter(c=>c.featured).slice(0,3),o=[...i.posts].sort((c,d)=>new Date(d.date)-new Date(c.date)).slice(0,3);return f.jsxs(f.Fragment,{children:[f.jsx(ny,{}),f.jsx(ly,{posts:u}),f.jsx(ry,{categories:i.categories}),f.jsx(uy,{posts:o}),f.jsx(oy,{})]})}function cy(){return f.jsxs("section",{className:"relative overflow-hidden",children:[f.jsx("div",{className:"absolute inset-0 -z-10",style:{backgroundImage:`
        radial-gradient(circle at center, rgba(255,100,50,0.15), transparent 70%),
        linear-gradient(rgba(38,38,38,0.5) 1px, transparent 1px),
        linear-gradient(90deg, rgba(38,38,38,0.5) 1px, transparent 1px)
      `,backgroundSize:"100% 100%, 60px 60px, 60px 60px",backgroundColor:"#000000"}}),f.jsxs("div",{className:"container w-full sm:w-[90%] lg:w-[77%] mx-auto px-4 sm:px-6 pb-15 flex flex-col gap-5 items-center mt-20 text-center",children:[f.jsxs("div",{className:"px-3.5 py-2 flex gap-2 items-center bg-proj/10 rounded-full border border-proj/20",children:[f.jsx("div",{className:"size-1.5 bg-proj rounded-full animate-pulse shrink-0"}),f.jsx("i",{className:"fa-solid fa-blog text-xs sm:text-sm font-medium text-proj"}),f.jsx("span",{className:"text-xs sm:text-sm font-medium text-proj",children:"مدونتنا"})]}),f.jsxs("h1",{className:"text-white text-3xl sm:text-5xl lg:text-6xl font-bold leading-snug px-4",children:["إستكشف ",f.jsx("span",{className:"text-proj",children:"مقالاتنا"})]}),f.jsx("p",{className:"text-gray-400/60 font-normal text-base sm:text-lg lg:text-[24px] leading-tight px-4",children:"اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث"})]})]})}function fy({selectedCategory:i,setSelectedCategory:u,searchText:o,setSearchText:c,categories:d}){return f.jsx("div",{className:"bg-black border-b border-b-white/20",children:f.jsx("div",{className:"py-4 px-4 sm:px-6 lg:px-8 w-full sm:w-[95%] lg:w-[90%] mx-auto",children:f.jsxs("div",{className:"flex flex-col lg:flex-row gap-4 lg:justify-between lg:items-center",children:[f.jsxs("div",{className:"relative w-full lg:w-auto",children:[f.jsx("i",{className:"fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm"}),f.jsx("input",{type:"text",value:o,onChange:h=>c(h.target.value),className:"w-full lg:w-auto ps-12 pe-4 sm:pe-25 focus:border-proj focus:border-2 transition-all duration-300 py-3 rounded-xl border-2 border-white/20 bg-[#161616] placeholder:text-gray-500 text-white text-sm sm:text-base focus:outline-none",placeholder:"ابحث في المقالات"})]}),f.jsxs("div",{className:"flex gap-2 items-center flex-wrap",children:[f.jsx("button",{onClick:()=>u(null),className:`px-3 sm:px-4 py-2 cursor-pointer rounded-xl border transition-all duration-300
                ${i===null?"bg-orange-500 border-orange-500":"bg-[#161616] border-white/20 hover:border-proj/20"}`,children:f.jsx("span",{className:`font-medium text-xs sm:text-sm ${i===null?"text-white":"text-gray-400"}`,children:"جميع المقالات"})}),d.map(h=>f.jsx("button",{onClick:()=>u(h),className:`px-3 sm:px-4 py-2 cursor-pointer rounded-xl border transition-all duration-300
                  ${i===h?"bg-orange-500 border-orange-500":"bg-[#161616] border-white/20 hover:border-proj/20"}`,children:f.jsx("span",{className:`font-medium text-xs sm:text-sm whitespace-nowrap ${i===h?"text-white":"text-gray-400"}`,children:h})},h))]})]})})})}function dy({posts:i,selectedCategory:u,searchText:o}){const[c,d]=O.useState(1),[h,p]=O.useState("grid"),y=6,x=i.filter(G=>{const Q=u===null||G.category===u,k=G.title.toLowerCase().includes(o.toLowerCase());return Q&&k}),g=Math.ceil(x.length/y),N=c>g?1:c,j=(N-1)*y,C=j+y,L=x.slice(j,C);return f.jsx("div",{className:"bg-black",children:f.jsxs("div",{className:"py-16 px-8 w-[85%] mx-auto",children:[f.jsxs("div",{className:"justify-between items-center flex",children:[f.jsxs("span",{className:"font-normal text-base text-gray-400",children:["عرض"," ",f.jsx("span",{className:"font-bold text-white",children:x.length})," ","مقالات",u&&f.jsxs("span",{className:"font-semibold text-proj mr-2",children:[" ","في ",u]})]}),f.jsx("div",{className:"flex items-center gap-2",children:f.jsxs("div",{className:"flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1",children:[f.jsx("button",{onClick:()=>p("grid"),className:`p-2 rounded-lg transition-all cursor-pointer duration-300 w-9 h-9 flex items-center justify-center
                  ${h==="grid"?"bg-orange-500 text-white":"text-neutral-400 hover:text-white"}`,title:"عرض شبكي",children:f.jsx("i",{className:"fas fa-th"})}),f.jsx("button",{onClick:()=>p("list"),className:`p-2 rounded-lg transition-all cursor-pointer duration-300 w-9 h-9 flex items-center justify-center
                  ${h==="list"?"bg-orange-500 text-white":"text-neutral-400 hover:text-white"}`,title:"عرض قائمة",children:f.jsx("i",{className:"fas fa-list"})})]})})]}),f.jsx("div",{className:`mt-10 ${h==="grid"?"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full":"flex flex-col gap-6 w-full"}`,children:L.map(G=>f.jsxs(ja,{to:`/blog/${G.slug}`,className:`card cursor-pointer flex overflow-hidden border border-white/20 group hover:border-proj/20 transition-all duration-300 rounded-2xl
                ${h==="grid"?"flex-col":"flex-row"}`,children:[f.jsxs("div",{className:`relative overflow-hidden shrink-0
                ${h==="grid"?"w-full":"w-1/4"}`,children:[f.jsx("img",{src:G.image,className:`object-cover group-hover:scale-[103%] transition-all duration-300
                    w-full h-full`,alt:G.title}),f.jsx("div",{className:"absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),f.jsx("div",{className:"py-1.5 px-3 bg-black/70 rounded-full flex gap-2 items-center absolute top-5 right-5",children:f.jsx("span",{className:"text-white font-semibold text-xs",children:G.category})})]}),f.jsxs("div",{className:"p-6 bg-[#161616] flex-1 flex flex-col justify-between",children:[f.jsxs("div",{children:[f.jsx("div",{className:"flex gap-3 items-center",children:f.jsxs("div",{className:"flex gap-2 items-center",children:[f.jsx("i",{className:"fa-regular fa-clock text-gray-500 text-sm"}),f.jsx("span",{className:"text-gray-500 text-sm",children:G.readTime})]})}),f.jsx("h2",{className:"mt-4 group-hover:text-proj transition-all duration-300 text-xl text-white font-bold line-clamp-2",children:G.title}),f.jsx("p",{className:"text-gray-400 text-sm font-normal mt-3 line-clamp-3",children:G.excerpt})]}),f.jsxs("div",{className:"mt-6 flex justify-between items-center",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsxs("div",{className:"relative inline-block",children:[f.jsx("img",{src:G.author.avatar,className:"rounded-full border border-proj/20 size-12",alt:G.author.name}),f.jsx("div",{className:"absolute bottom-0 left-0 w-3 h-3 bg-proj rounded-full border border-[#161616]"})]}),f.jsxs("div",{className:"flex flex-col gap-1",children:[f.jsx("span",{className:"text-white font-semibold text-sm",children:G.author.name}),f.jsx("span",{className:"text-gray-600 font-normal text-xs",children:G.date})]})]}),f.jsx("div",{className:"flex size-9 group-hover:bg-proj group-hover:border-proj duration-300 transition-all justify-center rounded-full bg-proj/10 border border-proj/20 items-center",children:f.jsx("i",{className:"fa-solid fa-arrow-left group-hover:text-white duration-300 transition-all text-proj font-semibold text-sm"})})]})]})]},G.id))}),f.jsxs("div",{className:"flex gap-1 mx-auto justify-center mt-10",children:[f.jsx("button",{onClick:()=>d(N-1),disabled:N===1,className:`w-11 h-11 flex items-center justify-center rounded-lg border transition-all duration-300
              ${N===1?"border-white/5 bg-[#161616] text-gray-600 cursor-not-allowed":"border-white/10 bg-[#161616] text-gray-400 hover:text-white hover:border-proj/20 cursor-pointer"}`,children:f.jsx("i",{className:"fas fa-chevron-right text-sm"})}),[1,2,3,4,5].map(G=>f.jsx("button",{onClick:()=>d(G),className:`w-11 h-11 flex cursor-pointer items-center justify-center rounded-lg border transition-all duration-300 text-base
                ${N===G?"bg-orange-500 border-orange-500 text-white":"bg-[#161616] border-white/10 text-gray-400 hover:text-white hover:border-proj/20"}`,children:G},G)),f.jsx("button",{onClick:()=>d(N+1),disabled:N===g,className:`w-11 h-11 flex items-center justify-center rounded-lg border transition-all duration-300
              ${N===g?"border-white/5 bg-[#161616] text-gray-600 cursor-not-allowed":"border-white/10 bg-[#161616] text-gray-400 hover:text-white hover:border-proj/20 cursor-pointer"}`,children:f.jsx("i",{className:"fas fa-chevron-left text-sm"})})]})]})})}function hy(){const i=wn(),u=t0(),o=i.state?.selectedCategory||null,[c,d]=O.useState(o),[h,p]=O.useState("");O.useEffect(()=>{i.state?.selectedCategory&&d(i.state.selectedCategory)},[i.state]);const y={posts:[{id:1,slug:"mastering-golden-hour-photography",title:"إتقان تصوير الساعة الذهبية: دليل شامل",excerpt:"تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول الإضاءة والتكوين.",content:`الساعة الذهبية هي أكثر الأوقات سحراً للتصوير الفوتوغرافي. ذلك الوقت القصير بعد شروق الشمس وقبل غروبها حيث يكون الضوء ناعماً ودافئاً وساحراً.

## لماذا الساعة الذهبية؟

الضوء خلال هذا الوقت له صفات فريدة: ظلال طويلة ناعمة، ألوان دافئة ذهبية، وتباين منخفض يجعل كل شيء يبدو أجمل. البورتريهات تكتسب توهجاً طبيعياً والمناظر الطبيعية تتحول إلى لوحات فنية.

## التحضير المسبق

خطط لجلسة التصوير مسبقاً. استخدم تطبيقات مثل PhotoPills لمعرفة وقت الساعة الذهبية بدقة في موقعك. وصل قبل 30 دقيقة لاختيار أفضل زاوية.

## إعدادات الكاميرا

استخدم ISO منخفض للحصول على أقل ضوضاء. فتحة العدسة تعتمد على ما تريد: f/1.8-f/2.8 للبورتريهات مع خلفية ضبابية، أو f/8-f/11 للمناظر الطبيعية الحادة.

## التكوين الفني

ضع الشمس خلف موضوعك للحصول على تأثير الإضاءة الخلفية الساحر. أو استخدمها كمصدر جانبي لإبراز الملمس والعمق.

## الخلاصة

الساعة الذهبية هي هدية للمصورين. استغلها جيداً وستحصل على صور لا تُنسى تتميز بجمالها الطبيعي.`,category:"إضاءة",author:{name:"سالم أحمد",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",role:"مصور محترف"},image:"https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=800&h=400&fit=crop",date:"2026-01-15",readTime:"8 دقائق للقراءة",featured:!0,tags:["إضاءة","الساعة الذهبية","تصوير خارجي"]},{id:2,slug:"portrait-photography-secrets",title:"أسرار تصوير البورتريه: كيف تلتقط روح الشخصية",excerpt:"اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية الموضوع الحقيقية.",content:`تصوير البورتريه هو فن التقاط جوهر الإنسان في صورة واحدة. ليس مجرد توثيق الملامح، بل كشف القصة خلف العيون.

## التواصل مع الموضوع

قبل أن تمسك الكاميرا، تحدث مع الشخص. اجعله يشعر بالراحة. الابتسامة الحقيقية والنظرة الطبيعية تأتي فقط عندما يثق بك الموضوع.

## اختيار العدسة المناسبة

عدسات 85mm و 50mm هي الكلاسيكيات لتصوير البورتريه. توفر ضغطاً مثالياً للملامح وخلفية ضبابية جميلة.

## الإضاءة الطبيعية

النافذة الكبيرة هي أفضل صديق لمصور البورتريه. ضع الموضوع بزاوية 45 درجة من النافذة للحصول على إضاءة ثلاثية الأبعاد رائعة.

## التركيز على العيون

العيون هي نافذة الروح. تأكد دائماً من أن العيون حادة ومركزة. استخدم نقطة تركيز واحدة على العين الأقرب للكاميرا.

## الخلفية والتكوين

اختر خلفية بسيطة لا تشتت الانتباه. استخدم قاعدة الأثلاث لوضع العيون في النقاط القوية.

## الخلاصة

البورتريه الناجح يحكي قصة. عندما تجمع بين التقنية والتواصل الإنساني، تخلق صوراً خالدة.`,category:"بورتريه",author:{name:"محمد علي",avatar:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",role:"مصور بورتريه"},image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",date:"2026-01-12",readTime:"6 دقائق للقراءة",featured:!0,tags:["بورتريه","تصوير أشخاص","إضاءة طبيعية"]},{id:3,slug:"landscape-photography-guide",title:"دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف",excerpt:"استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط جمال الطبيعة بعدستك.",content:`تصوير المناظر الطبيعية هو رحلة إلى قلب الطبيعة. إنه فن يتطلب الصبر والتخطيط والعين الفنية لرؤية الجمال في كل مكان.

## المعدات الأساسية

حامل ثلاثي قوي ضروري للحصول على صور حادة. عدسة واسعة الزاوية (16-35mm) مثالية لالتقاط المشاهد الواسعة. فلاتر ND و Polarizer ستفتح لك آفاقاً إبداعية جديدة.

## توقيت التصوير

الساعة الزرقاء والساعة الذهبية هي أفضل الأوقات. الضوء يكون ناعماً والألوان غنية. لا تخف من التصوير في الطقس الدرامي - الغيوم والعواصف تضيف شخصية للصورة.

## التكوين الفني

ابحث عن عناصر المقدمة المثيرة للاهتمام. صخرة، زهرة، أو مسار يقود العين نحو الخلفية. استخدم خطوط التوجيه لخلق عمق في الصورة.

## إعدادات الكاميرا

فتحة f/8-f/16 للحصول على حدة من المقدمة للخلفية. ISO منخفض قدر الإمكان. استخدم وضع Live View والتكبير للتركيز اليدوي الدقيق.

## المعالجة اللاحقة

صور بصيغة RAW لأقصى مرونة في التعديل. تعديل الإضاءة والألوان بلطف يبرز جمال المشهد دون إفراط.

## الخلاصة

تصوير المناظر الطبيعية يعلمك التأمل والصبر. كل صورة هي ذكرى من رحلة لا تُنسى.`,category:"مناظر طبيعية",author:{name:"إبراهيم حسن",avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",role:"مصور طبيعة"},image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",date:"2026-01-10",readTime:"10 دقائق للقراءة",featured:!0,tags:["مناظر طبيعية","تصوير خارجي","طبيعة"]},{id:4,slug:"camera-settings-basics",title:"أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي",excerpt:"افهم العلاقة بين فتحة العدسة وسرعة الغالق وحساسية ISO للتحكم الكامل في صورك.",content:`مثلث التعريض الضوئي هو أساس كل صورة ناجحة. فهم هذه العناصر الثلاثة يحررك من الوضع التلقائي ويمنحك السيطرة الإبداعية الكاملة.

## فتحة العدسة (Aperture)

فتحة العدسة تتحكم في كمية الضوء وعمق الميدان. الأرقام الصغيرة (f/1.4, f/2.8) تعني فتحة أكبر، ضوء أكثر، وخلفية ضبابية. الأرقام الكبيرة (f/11, f/16) تعني حدة أكبر في كل الصورة.

## سرعة الغالق (Shutter Speed)

سرعة الغالق تتحكم في تجميد الحركة. 1/500 ثانية تجمد الرياضيين، 1/60 مناسبة للمواضيع الثابتة، والسرعات البطيئة تخلق تأثيرات ضبابية إبداعية.

## حساسية ISO

ISO هو حساسية المستشعر للضوء. ISO 100-400 للإضاءة الجيدة، أعلى من ذلك للإضاءة المنخفضة. كلما زاد ISO، زادت الضوضاء في الصورة.

## التوازن بين الثلاثة

هذه العناصر مترابطة. إذا زدت واحداً، يجب تعديل الآخرين للحفاظ على التعريض الصحيح. تدرب على الوضع اليدوي حتى تصبح هذه العلاقة طبيعية.

## نصائح عملية

ابدأ بوضع أولوية فتحة العدسة (Av/A) للتحكم في عمق الميدان، أو أولوية الغالق (Tv/S) للتحكم في الحركة.

## الخلاصة

إتقان مثلث التعريض يفتح لك عالماً من الإبداع. تدرب يومياً وستصبح هذه الإعدادات طبيعة ثانية.`,category:"تقنيات",author:{name:"داود خالد",avatar:"https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",role:"مدرب تصوير"},image:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=400&fit=crop",date:"2026-01-08",readTime:"7 دقائق للقراءة",featured:!1,tags:["إعدادات الكاميرا","مبتدئين","تقنيات"]},{id:5,slug:"photo-composition-rules",title:"قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية",excerpt:"تعلم قواعد التكوين الأساسية التي يستخدمها المصورون المحترفون لإنشاء صور مؤثرة بصرياً.",content:`التكوين هو الفرق بين صورة عادية وصورة استثنائية. إنه كيفية ترتيب العناصر داخل الإطار لتوجيه عين المشاهد وإيصال رسالتك.

## قاعدة الأثلاث

قسّم الإطار إلى تسعة أجزاء متساوية بخطين أفقيين وعموديين. ضع العناصر المهمة على هذه الخطوط أو تقاطعاتها للحصول على توازن بصري جذاب.

## الخطوط التوجيهية

استخدم الخطوط الطبيعية في المشهد - طريق، نهر، سور - لقيادة عين المشاهد نحو الموضوع الرئيسي.

## الإطار داخل الإطار

استخدم عناصر في المقدمة كإطار طبيعي: باب، نافذة، أغصان شجرة. هذا يضيف عمقاً ويركز الانتباه.

## التماثل والأنماط

التماثل يخلق شعوراً بالهدوء والتوازن. الأنماط المتكررة تجذب العين. كسر النمط يخلق نقطة اهتمام قوية.

## المساحة السلبية

لا تخف من الفراغ. المساحة الفارغة حول الموضوع يمكن أن تكون قوية بنفس قوة الموضوع نفسه.

## كسر القواعد

اعرف القواعد جيداً، ثم اكسرها بوعي. أحياناً الصورة غير التقليدية هي الأقوى تأثيراً.

## الخلاصة

التكوين مهارة تتطور مع الممارسة. صوّر كثيراً، ادرس أعمال المصورين العظماء، وطور عينك الفنية.`,category:"تقنيات",author:{name:"ليث محمود",avatar:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",role:"فنان بصري"},image:"https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=400&fit=crop",date:"2026-01-05",readTime:"9 دقائق للقراءة",featured:!1,tags:["تكوين","قواعد التصوير","فن"]},{id:6,slug:"mobile-photography-tips",title:"تصوير الهاتف المحمول: كيف تلتقط صوراً احترافية بهاتفك",excerpt:"اكتشف كيف تحول هاتفك الذكي إلى أداة تصوير قوية مع هذه النصائح والتقنيات.",content:`أفضل كاميرا هي التي معك دائماً. هاتفك الذكي يمكن أن يلتقط صوراً مذهلة إذا عرفت كيف تستخدمه بشكل صحيح.

## نظّف العدسة

أبسط نصيحة وأهمها. العدسة المتسخة تسبب ضبابية وفقدان للتباين. امسحها بقطعة قماش ناعمة قبل كل جلسة تصوير.

## استخدم الإضاءة الطبيعية

كاميرات الهواتف تتألق في الإضاءة الجيدة. صوّر بالقرب من النوافذ أو في الخارج. تجنب الإضاءة القاسية المباشرة.

## ثبّت يدك

الاهتزاز عدو الصورة الحادة. أمسك الهاتف بكلتا يديك، اسند مرفقيك على جسمك، أو استخدم حاملاً ثلاثياً صغيراً.

## تجنب التكبير الرقمي

التكبير الرقمي يفقد الجودة. بدلاً من ذلك، اقترب من موضوعك أو قص الصورة لاحقاً.

## جرب تطبيقات التصوير

تطبيقات مثل Lightroom Mobile و VSCO توفر تحكماً يدوياً وأدوات تحرير قوية. صوّر بصيغة RAW إذا كان هاتفك يدعمها.

## التكوين مهم

فعّل شبكة الأثلاث في إعدادات الكاميرا. طبق قواعد التكوين نفسها التي تستخدمها مع الكاميرا الاحترافية.

## الخلاصة

هاتفك أداة إبداعية قوية. المهارة والعين الفنية أهم من المعدات. صوّر كل يوم وشاهد تطورك.`,category:"معدات",author:{name:"جمال عبدالله",avatar:"https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face",role:"مصور ومراجع تقني"},image:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",date:"2026-01-03",readTime:"8 دقائق للقراءة",featured:!1,tags:["تصوير الهاتف","نصائح","مبتدئين"]},{id:7,slug:"night-photography-techniques",title:"تصوير الليل والنجوم: دليلك لالتقاط سماء الليل",excerpt:"تعلم كيفية تصوير النجوم ودرب التبانة والمناظر الليلية الساحرة مع هذه التقنيات المتقدمة.",content:`تصوير الليل عالم ساحر مليء بالتحديات والمكافآت. عندما تنام المدينة، تستيقظ السماء بملايين النجوم في انتظار عدستك.

## المعدات الضرورية

كاميرا بأداء جيد في ISO العالي ضرورية. عدسة سريعة (f/1.4-f/2.8) تسمح بدخول أكبر قدر من الضوء. حامل ثلاثي قوي وثابت لا غنى عنه.

## إعدادات التصوير

ابدأ بـ ISO 1600-3200، فتحة f/2.8 أو أوسع، وسرعة غالق 15-25 ثانية. استخدم قاعدة 500 لتجنب تتبع النجوم: اقسم 500 على البعد البؤري للحصول على أقصى وقت تعريض.

## التركيز في الظلام

التركيز التلقائي لا يعمل في الظلام. استخدم التركيز اليدوي على نجم ساطع أو ضوء بعيد. كبّر على الشاشة للتأكد من الحدة.

## اختيار الموقع

ابتعد عن التلوث الضوئي للمدن. استخدم تطبيقات مثل Dark Sky Finder للعثور على أماكن مظلمة. القمر الجديد أفضل وقت لتصوير النجوم.

## معالجة الصور

صور RAW ضرورية. ارفع الظلال، عدّل توازن اللون الأبيض، وزد التباين. برامج مثل Lightroom و Photoshop أساسية.

## الخلاصة

تصوير الليل يتطلب صبراً وتجربة. لكن عندما ترى درب التبانة في صورتك الأولى، ستدرك أن كل الجهد يستحق.`,category:"إضاءة",author:{name:"خالد الفيصل",avatar:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",role:"مصور فلكي"},image:"https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=400&fit=crop",date:"2026-01-01",readTime:"11 دقائق للقراءة",featured:!1,tags:["تصوير ليلي","نجوم","درب التبانة"]},{id:8,slug:"street-photography-guide",title:"تصوير الشارع: فن التقاط الحياة اليومية",excerpt:"اكتشف أسرار تصوير الشارع وكيفية توثيق اللحظات العفوية في الحياة اليومية.",content:`تصوير الشارع هو فن التقاط الحياة كما هي. لحظات عابرة، تعبيرات صادقة، وقصص إنسانية تحدث أمامنا كل يوم.

## الكاميرا المناسبة

الكاميرا الصغيرة غير الملفتة أفضل. الهاتف الذكي أو كاميرا ميرورليس صغيرة. تجنب المعدات الضخمة التي تجذب الانتباه.

## كن غير مرئي

ارتدِ ملابس عادية. تحرك ببطء وثقة. لا تتصرف كمصور - كن جزءاً من المشهد. الناس يتجاهلون من يبدو طبيعياً.

## التوقع والصبر

الصورة الرائعة تتطلب انتظار اللحظة المناسبة. ابحث عن إضاءة جميلة أو خلفية مثيرة، ثم انتظر دخول الشخص المناسب.

## احترام الخصوصية

تصوير الشارع ليس تطفلاً. كن محترماً. إذا طلب شخص عدم تصويره، احترم رغبته. تجنب تصوير الأطفال بدون إذن.

## سرد القصص

الصورة الجيدة تحكي قصة. ابحث عن التفاعلات البشرية، التناقضات، والمشاعر. السياق والبيئة جزء من القصة.

## الشجاعة

الخوف من الاقتراب طبيعي لكنه عائق. كلما اقتربت، كانت الصورة أقوى. تدرب حتى يصبح الاقتراب طبيعياً.

## الخلاصة

تصوير الشارع يعلمك رؤية الجمال في العادي. اخرج بكاميرتك اليوم واستكشف مدينتك بعيون جديدة.`,category:"بورتريه",author:{name:"نادر سعيد",avatar:"https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&h=100&fit=crop&crop=face",role:"مصور شوارع"},image:"https://images.unsplash.com/photo-1517732306149-e8f829eb588a?w=800&h=400&fit=crop",date:"2025-12-28",readTime:"7 دقائق للقراءة",featured:!1,tags:["تصوير شوارع","توثيق","حياة يومية"]},{id:9,slug:"food-photography-basics",title:"تصوير الطعام: كيف تجعل أطباقك تبدو شهية",excerpt:"تعلم تقنيات تصوير الطعام الاحترافية لإنشاء صور تثير الشهية وتجذب العيون.",content:`تصوير الطعام فن يجمع بين الطهي والتصوير. الهدف هو جعل المشاهد يشتهي الطبق من خلال الصورة وحدها.

## الإضاءة الطبيعية

الضوء الطبيعي الناعم هو الأفضل لتصوير الطعام. ضع الطبق بالقرب من نافذة كبيرة. استخدم عاكساً أبيض لملء الظلال.

## زوايا التصوير

ثلاث زوايا رئيسية: من الأعلى مباشرة (90°) للأطباق المسطحة، 45° للأطباق ذات الارتفاع، ومستوى العين للمشروبات والطبقات.

## تنسيق الطبق

التقديم مهم جداً. استخدم أطباق بسيطة لا تنافس الطعام. أضف عناصر ديكور مكملة: أعشاب طازجة، قماش، أدوات خشبية.

## الألوان المتناسقة

الألوان تؤثر على الشهية. الأخضر والأحمر يعززان الشهية. الأزرق يقللها. اختر ألوان الخلفية والإكسسوارات بعناية.

## السرعة مهمة

الطعام يفقد جاذبيته بسرعة. الآيس كريم يذوب، البخار يختفي. جهز كل شيء مسبقاً وصوّر بسرعة.

## الخدع الاحترافية

رشة ماء على الخضار تجعلها طازجة. الزيت يعطي لمعاناً. بخاخ الجلسرين يخلق قطرات ماء ثابتة.

## الخلاصة

تصوير الطعام يتطلب ممارسة. ابدأ بوجباتك اليومية وطور مهاراتك تدريجياً.`,category:"تقنيات",author:{name:"هاني الشمري",avatar:"https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face",role:"مصور طعام"},image:"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&h=400&fit=crop",date:"2025-12-25",readTime:"8 دقائق للقراءة",featured:!1,tags:["تصوير طعام","تنسيق","إضاءة"]},{id:10,slug:"wildlife-photography-tips",title:"تصوير الحياة البرية: كيف تلتقط عجائب الطبيعة",excerpt:"دليل شامل لتصوير الحيوانات في بيئتها الطبيعية مع نصائح للمعدات والتقنيات.",content:`تصوير الحياة البرية تحدٍ مثير يجمع بين المغامرة والفن. كل صورة ناجحة هي نتيجة ساعات من الانتظار والصبر.

## المعدات الأساسية

عدسة تليفوتو طويلة (200-600mm) ضرورية للاقتراب دون إزعاج الحيوانات. حامل أحادي أو ثلاثي للثبات. كاميرا سريعة في التركيز.

## فهم سلوك الحيوان

ادرس الحيوان الذي تريد تصويره. اعرف أوقات نشاطه، أماكن تواجده، وسلوكياته. هذه المعرفة توقعك للحظة المثالية.

## الصبر والانتظار

الحياة البرية لا تنتظرك. قد تقضي ساعات دون نتيجة. استمتع بالوقت في الطبيعة واعتبر كل لقطة مكافأة.

## احترام الحيوانات

لا تقترب كثيراً. لا تطعم الحيوانات. لا تزعجها لتحصل على صورة. رفاهية الحيوان أهم من أي صورة.

## الإضاءة والتوقيت

الصباح الباكر والمساء أفضل الأوقات. الحيوانات أكثر نشاطاً والضوء أجمل. تجنب منتصف النهار.

## إعدادات الكاميرا

سرعة غالق عالية (1/500 أو أسرع) لتجميد الحركة. تركيز مستمر (AF-C) لمتابعة الحيوان. وضع التصوير المتتابع للحظات السريعة.

## الخلاصة

تصوير الحياة البرية رحلة طويلة من التعلم. كل يوم في الطبيعة يعلمك شيئاً جديداً عن عالم الحيوان.`,category:"مناظر طبيعية",author:{name:"عمر الراشد",avatar:"https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face",role:"مصور حياة برية"},image:"https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&h=400&fit=crop",date:"2025-12-22",readTime:"10 دقائق للقراءة",featured:!1,tags:["حياة برية","طبيعة","حيوانات"]},{id:11,slug:"black-white-photography",title:"التصوير بالأبيض والأسود: فن الضوء والظل",excerpt:"اكتشف جمال التصوير أحادي اللون وكيفية إنشاء صور قوية بدون ألوان.",content:`التصوير بالأبيض والأسود يجرد الصورة من الألوان ليكشف عن جوهرها: الضوء والظل والشكل والعاطفة.

## لماذا الأبيض والأسود؟

إزالة الألوان تزيل التشتت وتركز الانتباه على العناصر الأساسية: التكوين، الملمس، التباين، والتعبير. بعض المشاهد تتحدث بقوة أكبر بدون ألوان.

## متى تختار الأبيض والأسود

المشاهد ذات التباين العالي، الملمس الغني، والأشكال القوية. البورتريهات العاطفية. المشاهد المعمارية. الطقس الدرامي.

## التفكير بالأبيض والأسود

تعلم رؤية المشهد بدرجات الرمادي. ما الذي سيصبح أبيض؟ أسود؟ رمادي متوسط؟ هذه الرؤية تأتي مع الممارسة.

## التعريض الصحيح

التحكم في مدى درجات الرمادي مهم. استخدم الهيستوجرام للتأكد من وجود تفاصيل في الأبيض والأسود. تجنب الإفراط في التعريض.

## المعالجة اللاحقة

التحويل إلى أبيض وأسود ليس مجرد إزالة التشبع. تحكم في كيفية تحول كل لون إلى درجة رمادية. جرب الفلاتر الافتراضية.

## الإلهام

ادرس أعمال عمالقة الأبيض والأسود: Ansel Adams، Henri Cartier-Bresson، Sebastião Salgado. تعلم من رؤيتهم الفريدة.

## الخلاصة

الأبيض والأسود ليس غياباً للون، بل حضوراً قوياً للضوء. جربه واكتشف عالماً جديداً من الجمال.`,category:"تقنيات",author:{name:"فارس العلي",avatar:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop&crop=face",role:"فنان فوتوغرافي"},image:"https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=800&h=400&fit=crop",date:"2025-12-20",readTime:"9 دقائق للقراءة",featured:!1,tags:["أبيض وأسود","تباين","فن"]},{id:12,slug:"photo-editing-lightroom",title:"أساسيات تعديل الصور في Lightroom",excerpt:"تعلم كيفية استخدام Adobe Lightroom لتحسين صورك وإنشاء أسلوب بصري مميز.",content:`Lightroom هو المعيار الذهبي لتعديل الصور. سواء كنت مبتدئاً أو محترفاً، هذا البرنامج يوفر كل ما تحتاجه.

## استيراد وتنظيم

ابدأ بإنشاء نظام تنظيم فعال. استخدم الكلمات المفتاحية، التقييمات، والمجموعات. التنظيم الجيد يوفر ساعات لاحقاً.

## التعديلات الأساسية

ابدأ بتصحيح التعريض وتوازن اللون الأبيض. ثم التباين والإبرازات والظلال. هذه التعديلات الأساسية تحسن معظم الصور.

## منحنى الدرجات

أداة قوية للتحكم الدقيق في التباين والألوان. منحنى S الخفيف يضيف عمقاً. تعلم استخدام منحنيات RGB الفردية.

## HSL والألوان

تحكم في كل لون على حدة: تشبعه، سطوعه، وتدرجه. هذا يعطيك سيطرة إبداعية كاملة على مظهر الصورة.

## الحدة وتقليل الضوضاء

كل صورة تحتاج قدراً من الحدة. قلل الضوضاء في صور ISO العالي. التوازن مهم - لا تفرط.

## الأسلوب الشخصي

طور أسلوباً بصرياً مميزاً. احفظه كـ Preset واستخدمه كنقطة بداية. أسلوبك يميز عملك عن الآخرين.

## الخلاصة

تعديل الصور جزء أساسي من التصوير الرقمي. تعلم Lightroom استثمار سيرافقك طوال رحلتك الفوتوغرافية.`,category:"معدات",author:{name:"سامي الحربي",avatar:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop&crop=face",role:"خبير تعديل صور"},image:"https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&h=400&fit=crop",date:"2025-12-18",readTime:"12 دقائق للقراءة",featured:!1,tags:["Lightroom","تعديل صور","برامج"]},{id:13,slug:"macro-photography-world",title:"عالم التصوير الماكرو: اكتشف التفاصيل الخفية",excerpt:"انغمس في عالم التصوير المقرب واكتشف جمال التفاصيل الصغيرة التي تفوتنا بالعين المجردة.",content:`التصوير الماكرو يكشف عالماً خفياً من الجمال. قطرات الندى، عيون الحشرات، بتلات الزهور - تفاصيل لا تراها العين المجردة.

## المعدات المتخصصة

عدسة ماكرو حقيقية (نسبة 1:1) هي الأفضل. البديل: أنابيب التمديد أو العدسات المقربة. الإضاءة الحلقية مفيدة جداً.

## تحديات عمق الميدان

عمق الميدان ضحل جداً في الماكرو. حتى f/16 قد لا تكفي. التقنية: Focus Stacking - عدة صور بتركيزات مختلفة تدمج في واحدة.

## الإضاءة الدقيقة

الضوء الطبيعي المنتشر مثالي. استخدم عاكسات صغيرة. فلاش الماكرو أو LED يوفر تحكماً أكبر. تجنب الظلال القاسية.

## الثبات المطلق

أي اهتزاز يدمر الصورة. حامل ثلاثي ثقيل، جهاز تحكم عن بعد، قفل المرآة. بعض المصورين يحبسون أنفاسهم!

## إيجاد المواضيع

الطبيعة مليئة بالمواضيع. الحشرات في الصباح الباكر (بطيئة من البرد)، الزهور بعد المطر، الأوراق الخريفية. انظر للأسفل أكثر.

## الصبر والمثابرة

الماكرو يتطلب صبراً استثنائياً. الحشرة تطير، الريح تحرك الزهرة. استمر في المحاولة.

## الخلاصة

الماكرو يغير طريقة رؤيتك للعالم. فجأة، حديقتك تصبح غابة استوائية مليئة بالعجائب.`,category:"تقنيات",author:{name:"رامي الخطيب",avatar:"https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?w=100&h=100&fit=crop&crop=face",role:"مصور ماكرو"},image:"https://images.unsplash.com/photo-1550159930-40066082a4fc?w=800&h=400&fit=crop",date:"2025-12-15",readTime:"10 دقائق للقراءة",featured:!1,tags:["ماكرو","تفاصيل","حشرات"]},{id:14,slug:"long-exposure-photography",title:"التعريض الطويل: كيف تصور الحركة والزمن",excerpt:"تعلم تقنيات التعريض الطويل لإنشاء صور إبداعية تظهر الحركة بطريقة فنية ساحرة.",content:`التعريض الطويل يحول الثواني إلى لوحات فنية. الماء يصبح حريراً، السيارات خطوطاً ضوئية، والغيوم أشرطة في السماء.

## المعدات الضرورية

حامل ثلاثي ثابت أساسي. فلاتر ND لتقليل الضوء في النهار. جهاز تحكم عن بعد لتجنب اهتزاز الكاميرا.

## حساب التعريض

فلتر ND 10 stops يمدد التعريض 1000 مرة. إذا كان التعريض الطبيعي 1/125، يصبح 8 ثوانٍ. استخدم تطبيقات الحساب.

## مواضيع مثالية

الشلالات والأنهار تتحول لحرير. أضواء السيارات تخلق خطوطاً. الغيوم المتحركة تضيف دراما. البحر يصبح ضباباً.

## التركيز قبل الفلتر

ركز قبل وضع فلتر ND الداكن. الكاميرا لا ترى من خلاله. استخدم التركيز اليدوي ولا تغيره بعد وضع الفلتر.

## التجربة والتعلم

لا يوجد تعريض مثالي لكل مشهد. جرب أوقاتاً مختلفة. راجع النتائج على الشاشة. عدّل وكرر.

## الإبداع بلا حدود

جرب التصوير في أوقات مختلفة: غروب الشمس، الساعة الزرقاء، الليل. كل وقت يعطي نتائج مختلفة.

## الخلاصة

التعريض الطويل يعلمك رؤية العالم بطريقة مختلفة. الزمن يصبح مادة تشكلها بإبداعك.`,category:"إضاءة",author:{name:"باسم المصري",avatar:"https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?w=100&h=100&fit=crop&crop=face",role:"مصور فني"},image:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=400&fit=crop",date:"2025-12-12",readTime:"8 دقائق للقراءة",featured:!1,tags:["تعريض طويل","ND فلتر","إبداع"]},{id:15,slug:"wedding-photography-guide",title:"تصوير حفلات الزفاف: دليل المصور المحترف",excerpt:"تعلم أساسيات تصوير حفلات الزفاف من التحضير إلى تسليم الصور النهائية.",content:`تصوير الزفاف مسؤولية كبيرة. يوم لا يتكرر، لحظات لا تعود، وذكريات ستبقى للأبد. الضغط عالٍ لكن المكافأة أكبر.

## التحضير المسبق

اجتمع مع العروسين. افهم توقعاتهم ورؤيتهم. زر الموقع مسبقاً. اعرف جدول اليوم بالتفصيل.

## المعدات والنسخ الاحتياطي

كاميرتان على الأقل. عدسات متنوعة (24-70, 70-200, 35, 85). فلاشات متعددة. بطاريات وكروت ذاكرة إضافية. لا مجال للفشل.

## اللحظات الرئيسية

التحضيرات، الدخلة، القبلة الأولى، الرقصة الأولى، قطع الكيك، رمي الباقة. كن جاهزاً لكل لحظة ولا تفوت أياً منها.

## العمل مع الضوء

الكنائس والقاعات غالباً ذات إضاءة صعبة. تعلم استخدام الفلاش المرتد. ابحث عن مصادر الضوء الطبيعي.

## التعامل مع الناس

أنت قائد لجلسات التصوير الجماعية. كن حازماً لكن لطيفاً. اعرف أسماء أفراد العائلة المهمين.

## المعالجة والتسليم

آلاف الصور تحتاج فرزاً وتعديلاً. ضع جدولاً زمنياً واقعياً. التسليم في الوقت المحدد يبني سمعتك.

## الخلاصة

تصوير الزفاف يجمع كل مهارات التصوير. إنه تحدٍ كبير لكنه أيضاً فرصة لخلق فن يدوم للأجيال.`,category:"بورتريه",author:{name:"منصور الزهراني",avatar:"https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=100&h=100&fit=crop&crop=face",role:"مصور زفاف"},image:"https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=400&fit=crop",date:"2025-12-10",readTime:"11 دقائق للقراءة",featured:!1,tags:["زفاف","مناسبات","احترافي"]},{id:16,slug:"drone-photography-basics",title:"التصوير بالدرون: منظور جديد للعالم",excerpt:"اكتشف عالم التصوير الجوي وتعلم أساسيات استخدام الدرون لالتقاط صور من زوايا فريدة.",content:`التصوير بالدرون يفتح آفاقاً جديدة. زوايا كانت مستحيلة أصبحت في متناول يدك. منظور الطائر يكشف جمالاً مخفياً.

## اختيار الدرون المناسب

DJI تقود السوق بموديلات مثل Mini و Air و Mavic. الكاميرا، وقت الطيران، والثبات عوامل مهمة. ابدأ بدرون للمبتدئين.

## القوانين واللوائح

اعرف قوانين بلدك. معظم الدول تتطلب تسجيلاً ورخصة. مناطق ممنوعة حول المطارات والمنشآت الحكومية. الجهل بالقانون لا يعفيك.

## التحكم والطيران

تدرب في مناطق مفتوحة أولاً. تعلم الإقلاع والهبوط بسلاسة. فهم أوضاع الطيران المختلفة. الممارسة تصنع الإتقان.

## التكوين من الأعلى

الأنماط والأشكال تبدو مختلفة من الأعلى. ابحث عن التماثل، الخطوط التوجيهية، والتباينات. الظلال تصبح عناصر تكوين.

## التوقيت والإضاءة

الساعة الذهبية من الجو أكثر سحراً. الظلال الطويلة تضيف عمقاً. يوم غائم يعطي إضاءة متساوية جيدة.

## السلامة أولاً

لا تطر فوق الناس. راقب البطارية دائماً. عد للمنزل قبل نفاد الطاقة. الطقس العاصف خطير.

## الخلاصة

الدرون أداة إبداعية قوية. استخدمها بمسؤولية واكتشف عالماً جديداً من الجمال.`,category:"معدات",author:{name:"فيصل الدوسري",avatar:"https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=100&h=100&fit=crop&crop=face",role:"مصور جوي"},image:"https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=400&fit=crop",date:"2025-12-08",readTime:"9 دقائق للقراءة",featured:!1,tags:["درون","تصوير جوي","DJI"]},{id:17,slug:"product-photography-essentials",title:"تصوير المنتجات: أساسيات التصوير التجاري",excerpt:"تعلم كيفية تصوير المنتجات بشكل احترافي لمتجرك الإلكتروني أو عملائك التجاريين.",content:`تصوير المنتجات فن يجمع بين الدقة التقنية والإبداع البصري. صورة المنتج الجيدة تبيع نفسها.

## إعداد الاستوديو

لا تحتاج استوديو ضخم. طاولة بيضاء، خلفية بيضاء أو رمادية، وإضاءة جيدة كافية للبداية. صندوق الضوء (Light Box) خيار ممتاز للمنتجات الصغيرة.

## الإضاءة المثالية

الإضاءة الناعمة المنتشرة تزيل الظلال القاسية. استخدم سوفت بوكس أو شراشف بيضاء لتنعيم الضوء. الإضاءة من الجانب تبرز الملمس والتفاصيل.

## الخلفية والتنسيق

الخلفية البيضاء النظيفة معيار التجارة الإلكترونية. لكن لا تخف من التجربة: الخشب، الرخام، أو الأقمشة يمكن أن تضيف شخصية للمنتج.

## الزوايا المتعددة

صور المنتج من عدة زوايا: أمامية، جانبية، من الأعلى، وتفاصيل مقربة. العميل يريد رؤية كل شيء قبل الشراء.

## التعديل والتنقيح

إزالة الغبار والعيوب الصغيرة ضرورية. تصحيح الألوان لتطابق المنتج الحقيقي. الاتساق في الأسلوب عبر كل المنتجات.

## الخلاصة

تصوير المنتجات استثمار يعود بأضعاف. صور احترافية تعني ثقة أكبر ومبيعات أعلى.`,category:"تقنيات",author:{name:"لؤي الصالح",avatar:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face",role:"مصور تجاري"},image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=400&fit=crop",date:"2025-12-05",readTime:"8 دقائق للقراءة",featured:!1,tags:["تصوير منتجات","تجاري","استوديو"]},{id:18,slug:"architecture-photography",title:"تصوير العمارة: كيف تلتقط روح المباني",excerpt:"اكتشف تقنيات تصوير المباني والهندسة المعمارية بطريقة فنية تبرز جمالها وتفاصيلها.",content:`تصوير العمارة يحول المباني إلى أعمال فنية. الخطوط والأشكال والضوء والظل تتراقص معاً لتخلق صوراً آسرة.

## العدسات المناسبة

عدسة واسعة الزاوية (16-35mm) أساسية لالتقاط المباني الكاملة. عدسة Tilt-Shift تصحح التشوه وتبقي الخطوط مستقيمة. التليفوتو لتفاصيل الواجهات.

## التعامل مع التشوه

الخطوط المائلة مشكلة شائعة. صور من منتصف ارتفاع المبنى إن أمكن. أو صحح التشوه في مرحلة ما بعد المعالجة.

## الإضاءة والتوقيت

الضوء الجانبي يبرز الملمس والعمق. الساعة الزرقاء مثالية للمباني المضاءة. النهار الغائم يعطي إضاءة ناعمة متساوية.

## الخطوط والأشكال

ابحث عن الأنماط المتكررة، التماثل، والخطوط التوجيهية. الهندسة المعمارية غنية بعناصر التكوين الطبيعية.

## التفاصيل المعمارية

لا تكتفِ بالصورة الشاملة. اقترب من التفاصيل: النوافذ، الأعمدة، الزخارف، السلالم. كل تفصيل يحكي قصة.

## الخلاصة

تصوير العمارة يعلمك رؤية الجمال في المألوف. كل مبنى له شخصية تنتظر أن تُكتشف.`,category:"مناظر طبيعية",author:{name:"طارق النعيمي",avatar:"https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=100&h=100&fit=crop&crop=face",role:"مصور معماري"},image:"https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=400&fit=crop",date:"2025-12-02",readTime:"9 دقائق للقراءة",featured:!1,tags:["عمارة","مباني","هندسة"]},{id:19,slug:"sports-action-photography",title:"تصوير الرياضة والحركة: تجميد اللحظة الحاسمة",excerpt:"تعلم تقنيات تصوير الأحداث الرياضية والحركة السريعة بوضوح ودقة احترافية.",content:`تصوير الرياضة يتطلب سرعة البديهة والمعدات المناسبة. لحظة الانتصار أو الهزيمة تحدث في جزء من الثانية.

## المعدات السريعة

كاميرا بتركيز تلقائي سريع ومعدل تصوير متتابع عالي (10+ صور/ثانية). عدسات تليفوتو سريعة (70-200 f/2.8، 400 f/2.8). بطاقات ذاكرة سريعة.

## إعدادات الكاميرا

سرعة غالق 1/1000 ثانية على الأقل لتجميد الحركة. تركيز مستمر (AF-C) مع تتبع. ISO تلقائي مع حد أقصى. وضع التصوير المتتابع.

## توقع الحركة

اعرف اللعبة. توقع أين ستكون اللحظة الحاسمة. ركز مسبقاً على تلك النقطة. الخبرة تبني هذا الحدس.

## الموقع والزاوية

ابحث عن موقع يتيح خلفية نظيفة. ضوء الشمس خلفك أو جانبياً. زاوية منخفضة تجعل الرياضي يبدو أكثر قوة.

## التعبيرات والعواطف

ليست الحركة فقط مهمة. ابحث عن لحظات العاطفة: الفرح، الألم، التركيز. هذه هي الصور التي تبقى.

## الخلاصة

تصوير الرياضة ماراثون لا سباق قصير. كل مباراة فرصة للتعلم والتحسن. استمر في المحاولة.`,category:"بورتريه",author:{name:"أحمد الشهري",avatar:"https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?w=100&h=100&fit=crop&crop=face",role:"مصور رياضي"},image:"https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=400&fit=crop",date:"2025-11-28",readTime:"10 دقائق للقراءة",featured:!1,tags:["رياضة","حركة","سرعة"]},{id:20,slug:"flash-photography-basics",title:"أساسيات التصوير بالفلاش: تحكم كامل في الإضاءة",excerpt:"افهم كيفية استخدام الفلاش الخارجي لإنشاء إضاءة احترافية في أي موقف.",content:`الفلاش أداة قوية تحررك من قيود الإضاءة المتاحة. مع الفهم الصحيح، يصبح أفضل صديق للمصور.

## أنواع الفلاش

الفلاش المدمج محدود القوة والمرونة. الفلاش الخارجي (Speedlight) أقوى ويمكن توجيهه. فلاشات الاستوديو للتحكم الكامل.

## الفلاش المرتد

لا توجه الفلاش مباشرة للوجه. ارتده عن السقف أو الجدار للحصول على ضوء ناعم طبيعي. السقف الأبيض أفضل عاكس.

## TTL مقابل Manual

TTL يقيس الضوء تلقائياً - سريع ومريح. الوضع اليدوي يعطي تحكماً كاملاً ونتائج متسقة. تعلم كليهما.

## موازنة الفلاش مع المحيط

الفلاش لا يجب أن يطغى على الإضاءة الطبيعية. قلل قوته ليكمل الضوء المتاح بدلاً من استبداله.

## High-Speed Sync

للتصوير بسرعة غالق أعلى من سرعة المزامنة، فعّل HSS. مفيد لملء الظلال في ضوء الشمس القوي.

## الخلاصة

الفلاش يفتح إمكانيات لا حدود لها. ابدأ بالأساسيات ثم تعمق تدريجياً. الممارسة هي المفتاح.`,category:"إضاءة",author:{name:"ماجد القحطاني",avatar:"https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=100&h=100&fit=crop&crop=face",role:"مصور استوديو"},image:"https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=400&fit=crop",date:"2025-11-25",readTime:"8 دقائق للقراءة",featured:!1,tags:["فلاش","إضاءة صناعية","Speedlight"]},{id:21,slug:"travel-photography-tips",title:"تصوير السفر: كيف توثق رحلاتك بصور لا تُنسى",excerpt:"نصائح عملية لتصوير السفر تساعدك على التقاط جوهر كل مكان تزوره.",content:`تصوير السفر يجمع كل أنواع التصوير: مناظر طبيعية، شوارع، بورتريهات، طعام، وعمارة. كل رحلة فرصة للتعلم.

## التحضير للرحلة

ابحث عن وجهتك مسبقاً. اعرف أفضل مواقع التصوير وأوقاتها. لكن كن مستعداً للمفاجآت - أجمل الصور غالباً غير مخططة.

## المعدات الخفيفة

السفر يعني المشي كثيراً. كاميرا واحدة وعدستان كافية لمعظم الحالات. حقيبة مريحة وخفيفة ضرورية.

## احترام الثقافة المحلية

استأذن قبل تصوير الناس. احترم الأماكن المقدسة. تعلم بضع كلمات من اللغة المحلية. التواصل يفتح الأبواب.

## استيقظ مبكراً

أفضل الضوء وأقل الزحام في الصباح الباكر. التضحية بساعات النوم تستحق للحصول على صور فريدة.

## احكِ قصة

لا تصور المعالم فقط. صور الحياة اليومية، الطعام المحلي، التفاصيل الصغيرة. هذه هي روح المكان.

## الخلاصة

تصوير السفر يجعل الرحلة أكثر عمقاً. تنظر أكثر، تلاحظ أكثر، تتذكر أكثر. السفر بكاميرا تجربة مختلفة تماماً.`,category:"مناظر طبيعية",author:{name:"ياسر العتيبي",avatar:"https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=100&h=100&fit=crop&crop=face",role:"مصور رحالة"},image:"https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=400&fit=crop",date:"2025-11-22",readTime:"9 دقائق للقراءة",featured:!1,tags:["سفر","رحلات","توثيق"]},{id:22,slug:"color-theory-photography",title:"نظرية الألوان في التصوير: كيف تستخدم الألوان بذكاء",excerpt:"افهم كيف تؤثر الألوان على مشاعر المشاهد وكيف تستخدمها لتعزيز صورك.",content:`الألوان لغة بصرية قوية. فهمها يرفع صورك من الجيدة إلى الاستثنائية.

## عجلة الألوان

الألوان الأساسية (أحمر، أزرق، أصفر) والثانوية (برتقالي، أخضر، بنفسجي). الألوان المتقابلة تخلق تبايناً قوياً. المتجاورة تخلق انسجاماً.

## سيكولوجية الألوان

الأحمر: طاقة وعاطفة. الأزرق: هدوء وثقة. الأخضر: طبيعة وتوازن. الأصفر: سعادة وتفاؤل. استخدم هذه المعاني في صورك.

## التباين اللوني

الألوان المتقابلة (أحمر/أخضر، أزرق/برتقالي) تجذب الانتباه. استخدمها لإبراز موضوعك أو خلق دراما بصرية.

## الانسجام اللوني

الألوان المتقاربة تخلق شعوراً بالوحدة والهدوء. مناسبة للصور الهادئة والتأملية.

## درجات الحرارة اللونية

الألوان الدافئة (أحمر، برتقالي) تقدم للأمام. الباردة (أزرق، أخضر) تتراجع. استخدم هذا لخلق عمق.

## الخلاصة

الوعي بالألوان يغير طريقة رؤيتك وتصويرك. ابدأ بملاحظة الألوان في كل مكان حولك.`,category:"تقنيات",author:{name:"دحام الحسيني",avatar:"https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=100&h=100&fit=crop&crop=face",role:"فنان بصري"},image:"https://images.unsplash.com/photo-1502691876148-a84978e59af8?w=800&h=400&fit=crop",date:"2025-11-18",readTime:"7 دقائق للقراءة",featured:!1,tags:["ألوان","نظرية","تكوين"]},{id:23,slug:"newborn-baby-photography",title:"تصوير المواليد: فن التقاط البراءة",excerpt:"تعلم تقنيات تصوير الأطفال حديثي الولادة بأمان واحترافية.",content:`تصوير المواليد تخصص رقيق يتطلب صبراً وحذراً ومهارة. كل طفل فريد وكل جلسة مغامرة جديدة.

## السلامة أولاً

سلامة الطفل فوق كل اعتبار. لا تضعه في أوضاع غير آمنة. اغسل يديك دائماً. حافظ على دفء الغرفة (حوالي 26-28 درجة).

## التوقيت المثالي

أفضل عمر للتصوير: 5-14 يوم. الطفل لا يزال نعساً ومرناً. بعد ذلك يصبح أكثر يقظة وصعوبة في الوضعيات.

## البيئة المريحة

ضوضاء بيضاء تهدئ الطفل. إضاءة ناعمة طبيعية. تجنب الفلاش. اجعل الأهل قريبين للراحة النفسية.

## الأوضاع الآمنة

وضع السلة والتكور الكلاسيكي آمن ومحبوب. تجنب الأوضاع المعقدة التي تراها في Pinterest - كثير منها مركب في الفوتوشوب.

## الإكسسوارات والألوان

ألوان هادئة وإكسسوارات بسيطة. الطفل هو النجم. تجنب الإفراط في الديكور الذي يشتت الانتباه.

## الخلاصة

تصوير المواليد مسؤولية كبيرة ومكافأة أكبر. كل صورة ذكرى ستعتز بها العائلة للأبد.`,category:"بورتريه",author:{name:"نايف المطيري",avatar:"https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop&crop=face",role:"مصور مواليد"},image:"https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&h=400&fit=crop",date:"2025-11-15",readTime:"10 دقائق للقراءة",featured:!1,tags:["مواليد","أطفال","بورتريه"]},{id:24,slug:"real-estate-photography",title:"تصوير العقارات: كيف تجعل المنزل يبيع نفسه",excerpt:"تعلم تقنيات تصوير العقارات التي تجعل المنازل تبدو أفضل ما يمكن.",content:`تصوير العقارات مجال مربح ومطلوب. صورة جيدة يمكن أن تكون الفرق بين بيع سريع وعقار راكد.

## المعدات الأساسية

عدسة واسعة الزاوية (16-35mm) ضرورية لإظهار المساحات. حامل ثلاثي لصور حادة ومستوية. فلاش للتحكم في الإضاءة.

## تحضير المكان

نظف وأزل الفوضى. أضف لمسات بسيطة: زهور، مجلات، فوط مرتبة. افتح الستائر والأبواب لإظهار التدفق.

## الإضاءة المتوازنة

التحدي: موازنة ضوء النوافذ الساطع مع الداخل المظلم. استخدم HDR أو إضاءة إضافية. تجنب النوافذ المحترقة.

## الزوايا الصحيحة

صور من زاوية الغرفة لإظهار أكبر مساحة. ارتفاع الكاميرا حوالي 120 سم. أبقِ الخطوط العمودية مستقيمة.

## التصوير الخارجي

الساعة الزرقاء مع أضواء المنزل مضاءة تخلق صوراً دافئة ومرحبة. صور الحديقة والمسبح والمرافق.

## الخلاصة

تصوير العقارات يجمع بين التقنية والتسويق. افهم ما يريد المشتري رؤيته وقدمه بأفضل صورة.`,category:"تقنيات",author:{name:"عبدالله الغامدي",avatar:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face",role:"مصور عقارات"},image:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=400&fit=crop",date:"2025-11-12",readTime:"8 دقائق للقراءة",featured:!1,tags:["عقارات","تجاري","واسع الزاوية"]},{id:25,slug:"raw-vs-jpeg-explained",title:"RAW مقابل JPEG: متى تستخدم كلاً منهما",excerpt:"افهم الفرق بين صيغتي الصور الأكثر شيوعاً واختر الأنسب لاحتياجاتك.",content:`الجدل بين RAW و JPEG قديم قدم التصوير الرقمي. لكل منهما مكانه ووقته.

## ما هو RAW؟

RAW هو كل البيانات التي التقطها المستشعر بدون معالجة. ملف كبير يحتوي على أقصى معلومات ممكنة. يتطلب معالجة لاحقة.

## ما هو JPEG؟

JPEG ملف مضغوط ومعالج في الكاميرا. أصغر حجماً وجاهز للاستخدام مباشرة. لكنه يفقد بعض البيانات.

## مزايا RAW

مرونة هائلة في التعديل. تصحيح التعريض بسهولة. تعديل توازن اللون الأبيض بعد التصوير. استعادة تفاصيل من الظلال والإبرازات.

## مزايا JPEG

ملفات صغيرة = مساحة أكبر. جاهز للمشاركة مباشرة. معالجة الكاميرا غالباً ممتازة. مثالي للتصوير السريع والكميات الكبيرة.

## متى تستخدم كلاً منهما

RAW: التصوير الاحترافي، الإضاءة الصعبة، عندما تريد أقصى جودة. JPEG: اللقطات اليومية، المساحة محدودة، السرعة مطلوبة.

## الخلاصة

كثير من المصورين يصورون RAW+JPEG معاً. جرب كليهما واختر ما يناسب أسلوبك واحتياجاتك.`,category:"معدات",author:{name:"كريم الفهد",avatar:"https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=100&h=100&fit=crop&crop=face",role:"خبير تقني"},image:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop",date:"2025-11-08",readTime:"6 دقائق للقراءة",featured:!1,tags:["RAW","JPEG","صيغ الصور"]},{id:26,slug:"self-portrait-photography",title:"تصوير البورتريه الذاتي: كن موضوعك الخاص",excerpt:"تعلم كيف تصور نفسك بشكل احترافي وإبداعي دون الحاجة لمساعد.",content:`البورتريه الذاتي فن قديم تجدد بالتصوير الفوتوغرافي. أنت المصور والموديل معاً.

## لماذا البورتريه الذاتي؟

تدريب مجاني متاح دائماً. استكشاف الذات والتعبير الفني. تطوير مهاراتك في الإضاءة والتكوين والتعديل.

## المعدات اللازمة

حامل ثلاثي ثابت. جهاز تحكم عن بعد أو مؤقت ذاتي. مرآة لمراقبة الوضعية. تطبيق التحكم بالكاميرا على الهاتف مفيد جداً.

## التركيز بدونك

ضع شيئاً في مكانك للتركيز عليه (كرسي، وسادة). استخدم التركيز اليدوي وثبته. أو استخدم وضع تتبع العين إن كان متاحاً.

## الإضاءة والوضعيات

جرب بحرية. لا أحد ينتظرك. العب مع الضوء والظلال. جرب تعابير وأوضاع لن تطلبها من شخص آخر.

## التعديل والأسلوب

البورتريه الذاتي مساحة للتجربة. جرب أساليب تعديل جديدة. طور صوتك البصري الخاص.

## الخلاصة

البورتريه الذاتي رحلة اكتشاف ذات. كل صورة تعلمك شيئاً عن نفسك وعن فنك.`,category:"بورتريه",author:{name:"سلطان الراجحي",avatar:"https://images.unsplash.com/photo-1557862921-37829c790f19?w=100&h=100&fit=crop&crop=face",role:"فنان تصوير"},image:"https://images.unsplash.com/photo-1554080353-a576cf803bda?w=800&h=400&fit=crop",date:"2025-11-05",readTime:"7 دقائق للقراءة",featured:!1,tags:["بورتريه ذاتي","إبداع","تعبير"]},{id:27,slug:"lens-guide-beginners",title:"دليل العدسات للمبتدئين: كيف تختار عدستك الأولى",excerpt:"افهم أنواع العدسات المختلفة واختر الأنسب لأسلوب تصويرك واحتياجاتك.",content:`العدسة أهم من الكاميرا في كثير من الأحيان. فهم العدسات يساعدك على اتخاذ قرارات شراء حكيمة.

## البعد البؤري

يُقاس بالمليمتر (mm). الأرقام الصغيرة = زاوية واسعة. الأرقام الكبيرة = تقريب. 50mm تقريباً ما تراه العين البشرية.

## فتحة العدسة

f/1.8 أكبر من f/4. فتحة أكبر = ضوء أكثر + خلفية أكثر ضبابية. العدسات السريعة (f/1.4-f/2.8) أغلى وأكبر.

## عدسة الـ 50mm

النيفتي فيفتي (50mm f/1.8) أفضل استثمار للمبتدئين. رخيصة، خفيفة، وتعطي نتائج رائعة. تعلمك الحركة والتكوين.

## العدسات الزوم مقابل الثابتة

الزوم مرنة وعملية. الثابتة (Prime) أخف وأسرع وأحد. للتعلم، الثابتة تجبرك على التفكير أكثر.

## العدسات حسب التخصص

بورتريه: 85mm. مناظر: 16-35mm. ماكرو: عدسة ماكرو مخصصة. حياة برية: 100-400mm.

## الخلاصة

لا تشترِ عدسات لا تحتاجها. ابدأ بعدسة واحدة واتقنها قبل الانتقال للتالية. العدسة الأفضل هي التي تستخدمها.`,category:"معدات",author:{name:"فهد السبيعي",avatar:"https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=100&h=100&fit=crop&crop=face",role:"مراجع معدات"},image:"https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=800&h=400&fit=crop",date:"2025-11-02",readTime:"9 دقائق للقراءة",featured:!1,tags:["عدسات","معدات","مبتدئين"]},{id:28,slug:"minimalist-photography",title:"التصوير البسيط (Minimalist): قوة الفراغ",excerpt:"اكتشف جمال البساطة في التصوير وكيف تخلق صوراً قوية بعناصر قليلة.",content:`الأقل هو الأكثر. التصوير البسيط يزيل كل ما هو غير ضروري ليتحدث الجوهر.

## فلسفة البساطة

كل عنصر في الصورة يجب أن يكون له غرض. إذا لم يضف شيئاً، فهو يطرح. الفراغ ليس خالياً - إنه يتنفس.

## المساحة السلبية

الفراغ حول الموضوع يعطيه قوة وهيبة. لا تخف من ترك 80% من الإطار فارغاً. الموضوع الصغير في فراغ كبير يجذب الانتباه.

## الخطوط والأشكال

التصوير البسيط يعتمد على الهندسة. خط واحد، شكل واحد، نمط متكرر. البساطة في العناصر، القوة في التنفيذ.

## الألوان المحدودة

ألوان قليلة أو لون واحد. الأبيض والأسود طبيعي للبساطة. لون واحد مع خلفية محايدة.

## إيجاد المواضيع

المباني الحديثة، السماء الفارغة، الأشياء اليومية المعزولة. البساطة في كل مكان لمن يعرف كيف ينظر.

## الخلاصة

التصوير البسيط ليس سهلاً. إزالة العناصر أصعب من إضافتها. لكن النتيجة صور لا تُنسى.`,category:"تقنيات",author:{name:"راشد الجاسر",avatar:"https://images.unsplash.com/photo-1545167622-3a6ac756afa4?w=100&h=100&fit=crop&crop=face",role:"فنان بصري"},image:"https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&h=400&fit=crop",date:"2025-10-28",readTime:"6 دقائق للقراءة",featured:!1,tags:["بساطة","Minimalist","تكوين"]}]};return u.slug?f.jsx(l0,{}):f.jsxs(f.Fragment,{children:[f.jsx(cy,{}),f.jsx(fy,{selectedCategory:c,setSelectedCategory:d,searchText:h,setSearchText:p,categories:[...new Set(y.posts.map(x=>x.category))]}),f.jsx(dy,{posts:y.posts,selectedCategory:c,searchText:h})]})}function my(){const{slug:i}=t0(),o={posts:[{id:1,slug:"mastering-golden-hour-photography",title:"إتقان تصوير الساعة الذهبية: دليل شامل",excerpt:"تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول الإضاءة والتكوين.",content:`الساعة الذهبية هي أكثر الأوقات سحراً للتصوير الفوتوغرافي. ذلك الوقت القصير بعد شروق الشمس وقبل غروبها حيث يكون الضوء ناعماً ودافئاً وساحراً.

## لماذا الساعة الذهبية؟

الضوء خلال هذا الوقت له صفات فريدة: ظلال طويلة ناعمة، ألوان دافئة ذهبية، وتباين منخفض يجعل كل شيء يبدو أجمل. البورتريهات تكتسب توهجاً طبيعياً والمناظر الطبيعية تتحول إلى لوحات فنية.

## التحضير المسبق

خطط لجلسة التصوير مسبقاً. استخدم تطبيقات مثل PhotoPills لمعرفة وقت الساعة الذهبية بدقة في موقعك. وصل قبل 30 دقيقة لاختيار أفضل زاوية.

## إعدادات الكاميرا

استخدم ISO منخفض للحصول على أقل ضوضاء. فتحة العدسة تعتمد على ما تريد: f/1.8-f/2.8 للبورتريهات مع خلفية ضبابية، أو f/8-f/11 للمناظر الطبيعية الحادة.

## التكوين الفني

ضع الشمس خلف موضوعك للحصول على تأثير الإضاءة الخلفية الساحر. أو استخدمها كمصدر جانبي لإبراز الملمس والعمق.

## الخلاصة

الساعة الذهبية هي هدية للمصورين. استغلها جيداً وستحصل على صور لا تُنسى تتميز بجمالها الطبيعي.`,category:"إضاءة",author:{name:"سالم أحمد",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",role:"مصور محترف"},image:"https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=800&h=400&fit=crop",date:"2026-01-15",readTime:"8 دقائق للقراءة",featured:!0,tags:["إضاءة","الساعة الذهبية","تصوير خارجي"]},{id:2,slug:"portrait-photography-secrets",title:"أسرار تصوير البورتريه: كيف تلتقط روح الشخصية",excerpt:"اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية الموضوع الحقيقية.",content:`تصوير البورتريه هو فن التقاط جوهر الإنسان في صورة واحدة. ليس مجرد توثيق الملامح، بل كشف القصة خلف العيون.

## التواصل مع الموضوع

قبل أن تمسك الكاميرا، تحدث مع الشخص. اجعله يشعر بالراحة. الابتسامة الحقيقية والنظرة الطبيعية تأتي فقط عندما يثق بك الموضوع.

## اختيار العدسة المناسبة

عدسات 85mm و 50mm هي الكلاسيكيات لتصوير البورتريه. توفر ضغطاً مثالياً للملامح وخلفية ضبابية جميلة.

## الإضاءة الطبيعية

النافذة الكبيرة هي أفضل صديق لمصور البورتريه. ضع الموضوع بزاوية 45 درجة من النافذة للحصول على إضاءة ثلاثية الأبعاد رائعة.

## التركيز على العيون

العيون هي نافذة الروح. تأكد دائماً من أن العيون حادة ومركزة. استخدم نقطة تركيز واحدة على العين الأقرب للكاميرا.

## الخلفية والتكوين

اختر خلفية بسيطة لا تشتت الانتباه. استخدم قاعدة الأثلاث لوضع العيون في النقاط القوية.

## الخلاصة

البورتريه الناجح يحكي قصة. عندما تجمع بين التقنية والتواصل الإنساني، تخلق صوراً خالدة.`,category:"بورتريه",author:{name:"محمد علي",avatar:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",role:"مصور بورتريه"},image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",date:"2026-01-12",readTime:"6 دقائق للقراءة",featured:!0,tags:["بورتريه","تصوير أشخاص","إضاءة طبيعية"]},{id:3,slug:"landscape-photography-guide",title:"دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف",excerpt:"استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط جمال الطبيعة بعدستك.",content:`تصوير المناظر الطبيعية هو رحلة إلى قلب الطبيعة. إنه فن يتطلب الصبر والتخطيط والعين الفنية لرؤية الجمال في كل مكان.

## المعدات الأساسية

حامل ثلاثي قوي ضروري للحصول على صور حادة. عدسة واسعة الزاوية (16-35mm) مثالية لالتقاط المشاهد الواسعة. فلاتر ND و Polarizer ستفتح لك آفاقاً إبداعية جديدة.

## توقيت التصوير

الساعة الزرقاء والساعة الذهبية هي أفضل الأوقات. الضوء يكون ناعماً والألوان غنية. لا تخف من التصوير في الطقس الدرامي - الغيوم والعواصف تضيف شخصية للصورة.

## التكوين الفني

ابحث عن عناصر المقدمة المثيرة للاهتمام. صخرة، زهرة، أو مسار يقود العين نحو الخلفية. استخدم خطوط التوجيه لخلق عمق في الصورة.

## إعدادات الكاميرا

فتحة f/8-f/16 للحصول على حدة من المقدمة للخلفية. ISO منخفض قدر الإمكان. استخدم وضع Live View والتكبير للتركيز اليدوي الدقيق.

## المعالجة اللاحقة

صور بصيغة RAW لأقصى مرونة في التعديل. تعديل الإضاءة والألوان بلطف يبرز جمال المشهد دون إفراط.

## الخلاصة

تصوير المناظر الطبيعية يعلمك التأمل والصبر. كل صورة هي ذكرى من رحلة لا تُنسى.`,category:"مناظر طبيعية",author:{name:"إبراهيم حسن",avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",role:"مصور طبيعة"},image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",date:"2026-01-10",readTime:"10 دقائق للقراءة",featured:!0,tags:["مناظر طبيعية","تصوير خارجي","طبيعة"]},{id:4,slug:"camera-settings-basics",title:"أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي",excerpt:"افهم العلاقة بين فتحة العدسة وسرعة الغالق وحساسية ISO للتحكم الكامل في صورك.",content:`مثلث التعريض الضوئي هو أساس كل صورة ناجحة. فهم هذه العناصر الثلاثة يحررك من الوضع التلقائي ويمنحك السيطرة الإبداعية الكاملة.

## فتحة العدسة (Aperture)

فتحة العدسة تتحكم في كمية الضوء وعمق الميدان. الأرقام الصغيرة (f/1.4, f/2.8) تعني فتحة أكبر، ضوء أكثر، وخلفية ضبابية. الأرقام الكبيرة (f/11, f/16) تعني حدة أكبر في كل الصورة.

## سرعة الغالق (Shutter Speed)

سرعة الغالق تتحكم في تجميد الحركة. 1/500 ثانية تجمد الرياضيين، 1/60 مناسبة للمواضيع الثابتة، والسرعات البطيئة تخلق تأثيرات ضبابية إبداعية.

## حساسية ISO

ISO هو حساسية المستشعر للضوء. ISO 100-400 للإضاءة الجيدة، أعلى من ذلك للإضاءة المنخفضة. كلما زاد ISO، زادت الضوضاء في الصورة.

## التوازن بين الثلاثة

هذه العناصر مترابطة. إذا زدت واحداً، يجب تعديل الآخرين للحفاظ على التعريض الصحيح. تدرب على الوضع اليدوي حتى تصبح هذه العلاقة طبيعية.

## نصائح عملية

ابدأ بوضع أولوية فتحة العدسة (Av/A) للتحكم في عمق الميدان، أو أولوية الغالق (Tv/S) للتحكم في الحركة.

## الخلاصة

إتقان مثلث التعريض يفتح لك عالماً من الإبداع. تدرب يومياً وستصبح هذه الإعدادات طبيعة ثانية.`,category:"تقنيات",author:{name:"داود خالد",avatar:"https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",role:"مدرب تصوير"},image:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=400&fit=crop",date:"2026-01-08",readTime:"7 دقائق للقراءة",featured:!1,tags:["إعدادات الكاميرا","مبتدئين","تقنيات"]},{id:5,slug:"photo-composition-rules",title:"قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية",excerpt:"تعلم قواعد التكوين الأساسية التي يستخدمها المصورون المحترفون لإنشاء صور مؤثرة بصرياً.",content:`التكوين هو الفرق بين صورة عادية وصورة استثنائية. إنه كيفية ترتيب العناصر داخل الإطار لتوجيه عين المشاهد وإيصال رسالتك.

## قاعدة الأثلاث

قسّم الإطار إلى تسعة أجزاء متساوية بخطين أفقيين وعموديين. ضع العناصر المهمة على هذه الخطوط أو تقاطعاتها للحصول على توازن بصري جذاب.

## الخطوط التوجيهية

استخدم الخطوط الطبيعية في المشهد - طريق، نهر، سور - لقيادة عين المشاهد نحو الموضوع الرئيسي.

## الإطار داخل الإطار

استخدم عناصر في المقدمة كإطار طبيعي: باب، نافذة، أغصان شجرة. هذا يضيف عمقاً ويركز الانتباه.

## التماثل والأنماط

التماثل يخلق شعوراً بالهدوء والتوازن. الأنماط المتكررة تجذب العين. كسر النمط يخلق نقطة اهتمام قوية.

## المساحة السلبية

لا تخف من الفراغ. المساحة الفارغة حول الموضوع يمكن أن تكون قوية بنفس قوة الموضوع نفسه.

## كسر القواعد

اعرف القواعد جيداً، ثم اكسرها بوعي. أحياناً الصورة غير التقليدية هي الأقوى تأثيراً.

## الخلاصة

التكوين مهارة تتطور مع الممارسة. صوّر كثيراً، ادرس أعمال المصورين العظماء، وطور عينك الفنية.`,category:"تقنيات",author:{name:"ليث محمود",avatar:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",role:"فنان بصري"},image:"https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=400&fit=crop",date:"2026-01-05",readTime:"9 دقائق للقراءة",featured:!1,tags:["تكوين","قواعد التصوير","فن"]},{id:6,slug:"mobile-photography-tips",title:"تصوير الهاتف المحمول: كيف تلتقط صوراً احترافية بهاتفك",excerpt:"اكتشف كيف تحول هاتفك الذكي إلى أداة تصوير قوية مع هذه النصائح والتقنيات.",content:`أفضل كاميرا هي التي معك دائماً. هاتفك الذكي يمكن أن يلتقط صوراً مذهلة إذا عرفت كيف تستخدمه بشكل صحيح.

## نظّف العدسة

أبسط نصيحة وأهمها. العدسة المتسخة تسبب ضبابية وفقدان للتباين. امسحها بقطعة قماش ناعمة قبل كل جلسة تصوير.

## استخدم الإضاءة الطبيعية

كاميرات الهواتف تتألق في الإضاءة الجيدة. صوّر بالقرب من النوافذ أو في الخارج. تجنب الإضاءة القاسية المباشرة.

## ثبّت يدك

الاهتزاز عدو الصورة الحادة. أمسك الهاتف بكلتا يديك، اسند مرفقيك على جسمك، أو استخدم حاملاً ثلاثياً صغيراً.

## تجنب التكبير الرقمي

التكبير الرقمي يفقد الجودة. بدلاً من ذلك، اقترب من موضوعك أو قص الصورة لاحقاً.

## جرب تطبيقات التصوير

تطبيقات مثل Lightroom Mobile و VSCO توفر تحكماً يدوياً وأدوات تحرير قوية. صوّر بصيغة RAW إذا كان هاتفك يدعمها.

## التكوين مهم

فعّل شبكة الأثلاث في إعدادات الكاميرا. طبق قواعد التكوين نفسها التي تستخدمها مع الكاميرا الاحترافية.

## الخلاصة

هاتفك أداة إبداعية قوية. المهارة والعين الفنية أهم من المعدات. صوّر كل يوم وشاهد تطورك.`,category:"معدات",author:{name:"جمال عبدالله",avatar:"https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face",role:"مصور ومراجع تقني"},image:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",date:"2026-01-03",readTime:"8 دقائق للقراءة",featured:!1,tags:["تصوير الهاتف","نصائح","مبتدئين"]},{id:7,slug:"night-photography-techniques",title:"تصوير الليل والنجوم: دليلك لالتقاط سماء الليل",excerpt:"تعلم كيفية تصوير النجوم ودرب التبانة والمناظر الليلية الساحرة مع هذه التقنيات المتقدمة.",content:`تصوير الليل عالم ساحر مليء بالتحديات والمكافآت. عندما تنام المدينة، تستيقظ السماء بملايين النجوم في انتظار عدستك.

## المعدات الضرورية

كاميرا بأداء جيد في ISO العالي ضرورية. عدسة سريعة (f/1.4-f/2.8) تسمح بدخول أكبر قدر من الضوء. حامل ثلاثي قوي وثابت لا غنى عنه.

## إعدادات التصوير

ابدأ بـ ISO 1600-3200، فتحة f/2.8 أو أوسع، وسرعة غالق 15-25 ثانية. استخدم قاعدة 500 لتجنب تتبع النجوم: اقسم 500 على البعد البؤري للحصول على أقصى وقت تعريض.

## التركيز في الظلام

التركيز التلقائي لا يعمل في الظلام. استخدم التركيز اليدوي على نجم ساطع أو ضوء بعيد. كبّر على الشاشة للتأكد من الحدة.

## اختيار الموقع

ابتعد عن التلوث الضوئي للمدن. استخدم تطبيقات مثل Dark Sky Finder للعثور على أماكن مظلمة. القمر الجديد أفضل وقت لتصوير النجوم.

## معالجة الصور

صور RAW ضرورية. ارفع الظلال، عدّل توازن اللون الأبيض، وزد التباين. برامج مثل Lightroom و Photoshop أساسية.

## الخلاصة

تصوير الليل يتطلب صبراً وتجربة. لكن عندما ترى درب التبانة في صورتك الأولى، ستدرك أن كل الجهد يستحق.`,category:"إضاءة",author:{name:"خالد الفيصل",avatar:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",role:"مصور فلكي"},image:"https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=400&fit=crop",date:"2026-01-01",readTime:"11 دقائق للقراءة",featured:!1,tags:["تصوير ليلي","نجوم","درب التبانة"]},{id:8,slug:"street-photography-guide",title:"تصوير الشارع: فن التقاط الحياة اليومية",excerpt:"اكتشف أسرار تصوير الشارع وكيفية توثيق اللحظات العفوية في الحياة اليومية.",content:`تصوير الشارع هو فن التقاط الحياة كما هي. لحظات عابرة، تعبيرات صادقة، وقصص إنسانية تحدث أمامنا كل يوم.

## الكاميرا المناسبة

الكاميرا الصغيرة غير الملفتة أفضل. الهاتف الذكي أو كاميرا ميرورليس صغيرة. تجنب المعدات الضخمة التي تجذب الانتباه.

## كن غير مرئي

ارتدِ ملابس عادية. تحرك ببطء وثقة. لا تتصرف كمصور - كن جزءاً من المشهد. الناس يتجاهلون من يبدو طبيعياً.

## التوقع والصبر

الصورة الرائعة تتطلب انتظار اللحظة المناسبة. ابحث عن إضاءة جميلة أو خلفية مثيرة، ثم انتظر دخول الشخص المناسب.

## احترام الخصوصية

تصوير الشارع ليس تطفلاً. كن محترماً. إذا طلب شخص عدم تصويره، احترم رغبته. تجنب تصوير الأطفال بدون إذن.

## سرد القصص

الصورة الجيدة تحكي قصة. ابحث عن التفاعلات البشرية، التناقضات، والمشاعر. السياق والبيئة جزء من القصة.

## الشجاعة

الخوف من الاقتراب طبيعي لكنه عائق. كلما اقتربت، كانت الصورة أقوى. تدرب حتى يصبح الاقتراب طبيعياً.

## الخلاصة

تصوير الشارع يعلمك رؤية الجمال في العادي. اخرج بكاميرتك اليوم واستكشف مدينتك بعيون جديدة.`,category:"بورتريه",author:{name:"نادر سعيد",avatar:"https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&h=100&fit=crop&crop=face",role:"مصور شوارع"},image:"https://images.unsplash.com/photo-1517732306149-e8f829eb588a?w=800&h=400&fit=crop",date:"2025-12-28",readTime:"7 دقائق للقراءة",featured:!1,tags:["تصوير شوارع","توثيق","حياة يومية"]},{id:9,slug:"food-photography-basics",title:"تصوير الطعام: كيف تجعل أطباقك تبدو شهية",excerpt:"تعلم تقنيات تصوير الطعام الاحترافية لإنشاء صور تثير الشهية وتجذب العيون.",content:`تصوير الطعام فن يجمع بين الطهي والتصوير. الهدف هو جعل المشاهد يشتهي الطبق من خلال الصورة وحدها.

## الإضاءة الطبيعية

الضوء الطبيعي الناعم هو الأفضل لتصوير الطعام. ضع الطبق بالقرب من نافذة كبيرة. استخدم عاكساً أبيض لملء الظلال.

## زوايا التصوير

ثلاث زوايا رئيسية: من الأعلى مباشرة (90°) للأطباق المسطحة، 45° للأطباق ذات الارتفاع، ومستوى العين للمشروبات والطبقات.

## تنسيق الطبق

التقديم مهم جداً. استخدم أطباق بسيطة لا تنافس الطعام. أضف عناصر ديكور مكملة: أعشاب طازجة، قماش، أدوات خشبية.

## الألوان المتناسقة

الألوان تؤثر على الشهية. الأخضر والأحمر يعززان الشهية. الأزرق يقللها. اختر ألوان الخلفية والإكسسوارات بعناية.

## السرعة مهمة

الطعام يفقد جاذبيته بسرعة. الآيس كريم يذوب، البخار يختفي. جهز كل شيء مسبقاً وصوّر بسرعة.

## الخدع الاحترافية

رشة ماء على الخضار تجعلها طازجة. الزيت يعطي لمعاناً. بخاخ الجلسرين يخلق قطرات ماء ثابتة.

## الخلاصة

تصوير الطعام يتطلب ممارسة. ابدأ بوجباتك اليومية وطور مهاراتك تدريجياً.`,category:"تقنيات",author:{name:"هاني الشمري",avatar:"https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face",role:"مصور طعام"},image:"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&h=400&fit=crop",date:"2025-12-25",readTime:"8 دقائق للقراءة",featured:!1,tags:["تصوير طعام","تنسيق","إضاءة"]},{id:10,slug:"wildlife-photography-tips",title:"تصوير الحياة البرية: كيف تلتقط عجائب الطبيعة",excerpt:"دليل شامل لتصوير الحيوانات في بيئتها الطبيعية مع نصائح للمعدات والتقنيات.",content:`تصوير الحياة البرية تحدٍ مثير يجمع بين المغامرة والفن. كل صورة ناجحة هي نتيجة ساعات من الانتظار والصبر.

## المعدات الأساسية

عدسة تليفوتو طويلة (200-600mm) ضرورية للاقتراب دون إزعاج الحيوانات. حامل أحادي أو ثلاثي للثبات. كاميرا سريعة في التركيز.

## فهم سلوك الحيوان

ادرس الحيوان الذي تريد تصويره. اعرف أوقات نشاطه، أماكن تواجده، وسلوكياته. هذه المعرفة توقعك للحظة المثالية.

## الصبر والانتظار

الحياة البرية لا تنتظرك. قد تقضي ساعات دون نتيجة. استمتع بالوقت في الطبيعة واعتبر كل لقطة مكافأة.

## احترام الحيوانات

لا تقترب كثيراً. لا تطعم الحيوانات. لا تزعجها لتحصل على صورة. رفاهية الحيوان أهم من أي صورة.

## الإضاءة والتوقيت

الصباح الباكر والمساء أفضل الأوقات. الحيوانات أكثر نشاطاً والضوء أجمل. تجنب منتصف النهار.

## إعدادات الكاميرا

سرعة غالق عالية (1/500 أو أسرع) لتجميد الحركة. تركيز مستمر (AF-C) لمتابعة الحيوان. وضع التصوير المتتابع للحظات السريعة.

## الخلاصة

تصوير الحياة البرية رحلة طويلة من التعلم. كل يوم في الطبيعة يعلمك شيئاً جديداً عن عالم الحيوان.`,category:"مناظر طبيعية",author:{name:"عمر الراشد",avatar:"https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face",role:"مصور حياة برية"},image:"https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&h=400&fit=crop",date:"2025-12-22",readTime:"10 دقائق للقراءة",featured:!1,tags:["حياة برية","طبيعة","حيوانات"]},{id:11,slug:"black-white-photography",title:"التصوير بالأبيض والأسود: فن الضوء والظل",excerpt:"اكتشف جمال التصوير أحادي اللون وكيفية إنشاء صور قوية بدون ألوان.",content:`التصوير بالأبيض والأسود يجرد الصورة من الألوان ليكشف عن جوهرها: الضوء والظل والشكل والعاطفة.

## لماذا الأبيض والأسود؟

إزالة الألوان تزيل التشتت وتركز الانتباه على العناصر الأساسية: التكوين، الملمس، التباين، والتعبير. بعض المشاهد تتحدث بقوة أكبر بدون ألوان.

## متى تختار الأبيض والأسود

المشاهد ذات التباين العالي، الملمس الغني، والأشكال القوية. البورتريهات العاطفية. المشاهد المعمارية. الطقس الدرامي.

## التفكير بالأبيض والأسود

تعلم رؤية المشهد بدرجات الرمادي. ما الذي سيصبح أبيض؟ أسود؟ رمادي متوسط؟ هذه الرؤية تأتي مع الممارسة.

## التعريض الصحيح

التحكم في مدى درجات الرمادي مهم. استخدم الهيستوجرام للتأكد من وجود تفاصيل في الأبيض والأسود. تجنب الإفراط في التعريض.

## المعالجة اللاحقة

التحويل إلى أبيض وأسود ليس مجرد إزالة التشبع. تحكم في كيفية تحول كل لون إلى درجة رمادية. جرب الفلاتر الافتراضية.

## الإلهام

ادرس أعمال عمالقة الأبيض والأسود: Ansel Adams، Henri Cartier-Bresson، Sebastião Salgado. تعلم من رؤيتهم الفريدة.

## الخلاصة

الأبيض والأسود ليس غياباً للون، بل حضوراً قوياً للضوء. جربه واكتشف عالماً جديداً من الجمال.`,category:"تقنيات",author:{name:"فارس العلي",avatar:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop&crop=face",role:"فنان فوتوغرافي"},image:"https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=800&h=400&fit=crop",date:"2025-12-20",readTime:"9 دقائق للقراءة",featured:!1,tags:["أبيض وأسود","تباين","فن"]},{id:12,slug:"photo-editing-lightroom",title:"أساسيات تعديل الصور في Lightroom",excerpt:"تعلم كيفية استخدام Adobe Lightroom لتحسين صورك وإنشاء أسلوب بصري مميز.",content:`Lightroom هو المعيار الذهبي لتعديل الصور. سواء كنت مبتدئاً أو محترفاً، هذا البرنامج يوفر كل ما تحتاجه.

## استيراد وتنظيم

ابدأ بإنشاء نظام تنظيم فعال. استخدم الكلمات المفتاحية، التقييمات، والمجموعات. التنظيم الجيد يوفر ساعات لاحقاً.

## التعديلات الأساسية

ابدأ بتصحيح التعريض وتوازن اللون الأبيض. ثم التباين والإبرازات والظلال. هذه التعديلات الأساسية تحسن معظم الصور.

## منحنى الدرجات

أداة قوية للتحكم الدقيق في التباين والألوان. منحنى S الخفيف يضيف عمقاً. تعلم استخدام منحنيات RGB الفردية.

## HSL والألوان

تحكم في كل لون على حدة: تشبعه، سطوعه، وتدرجه. هذا يعطيك سيطرة إبداعية كاملة على مظهر الصورة.

## الحدة وتقليل الضوضاء

كل صورة تحتاج قدراً من الحدة. قلل الضوضاء في صور ISO العالي. التوازن مهم - لا تفرط.

## الأسلوب الشخصي

طور أسلوباً بصرياً مميزاً. احفظه كـ Preset واستخدمه كنقطة بداية. أسلوبك يميز عملك عن الآخرين.

## الخلاصة

تعديل الصور جزء أساسي من التصوير الرقمي. تعلم Lightroom استثمار سيرافقك طوال رحلتك الفوتوغرافية.`,category:"معدات",author:{name:"سامي الحربي",avatar:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop&crop=face",role:"خبير تعديل صور"},image:"https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&h=400&fit=crop",date:"2025-12-18",readTime:"12 دقائق للقراءة",featured:!1,tags:["Lightroom","تعديل صور","برامج"]},{id:13,slug:"macro-photography-world",title:"عالم التصوير الماكرو: اكتشف التفاصيل الخفية",excerpt:"انغمس في عالم التصوير المقرب واكتشف جمال التفاصيل الصغيرة التي تفوتنا بالعين المجردة.",content:`التصوير الماكرو يكشف عالماً خفياً من الجمال. قطرات الندى، عيون الحشرات، بتلات الزهور - تفاصيل لا تراها العين المجردة.

## المعدات المتخصصة

عدسة ماكرو حقيقية (نسبة 1:1) هي الأفضل. البديل: أنابيب التمديد أو العدسات المقربة. الإضاءة الحلقية مفيدة جداً.

## تحديات عمق الميدان

عمق الميدان ضحل جداً في الماكرو. حتى f/16 قد لا تكفي. التقنية: Focus Stacking - عدة صور بتركيزات مختلفة تدمج في واحدة.

## الإضاءة الدقيقة

الضوء الطبيعي المنتشر مثالي. استخدم عاكسات صغيرة. فلاش الماكرو أو LED يوفر تحكماً أكبر. تجنب الظلال القاسية.

## الثبات المطلق

أي اهتزاز يدمر الصورة. حامل ثلاثي ثقيل، جهاز تحكم عن بعد، قفل المرآة. بعض المصورين يحبسون أنفاسهم!

## إيجاد المواضيع

الطبيعة مليئة بالمواضيع. الحشرات في الصباح الباكر (بطيئة من البرد)، الزهور بعد المطر، الأوراق الخريفية. انظر للأسفل أكثر.

## الصبر والمثابرة

الماكرو يتطلب صبراً استثنائياً. الحشرة تطير، الريح تحرك الزهرة. استمر في المحاولة.

## الخلاصة

الماكرو يغير طريقة رؤيتك للعالم. فجأة، حديقتك تصبح غابة استوائية مليئة بالعجائب.`,category:"تقنيات",author:{name:"رامي الخطيب",avatar:"https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?w=100&h=100&fit=crop&crop=face",role:"مصور ماكرو"},image:"https://images.unsplash.com/photo-1550159930-40066082a4fc?w=800&h=400&fit=crop",date:"2025-12-15",readTime:"10 دقائق للقراءة",featured:!1,tags:["ماكرو","تفاصيل","حشرات"]},{id:14,slug:"long-exposure-photography",title:"التعريض الطويل: كيف تصور الحركة والزمن",excerpt:"تعلم تقنيات التعريض الطويل لإنشاء صور إبداعية تظهر الحركة بطريقة فنية ساحرة.",content:`التعريض الطويل يحول الثواني إلى لوحات فنية. الماء يصبح حريراً، السيارات خطوطاً ضوئية، والغيوم أشرطة في السماء.

## المعدات الضرورية

حامل ثلاثي ثابت أساسي. فلاتر ND لتقليل الضوء في النهار. جهاز تحكم عن بعد لتجنب اهتزاز الكاميرا.

## حساب التعريض

فلتر ND 10 stops يمدد التعريض 1000 مرة. إذا كان التعريض الطبيعي 1/125، يصبح 8 ثوانٍ. استخدم تطبيقات الحساب.

## مواضيع مثالية

الشلالات والأنهار تتحول لحرير. أضواء السيارات تخلق خطوطاً. الغيوم المتحركة تضيف دراما. البحر يصبح ضباباً.

## التركيز قبل الفلتر

ركز قبل وضع فلتر ND الداكن. الكاميرا لا ترى من خلاله. استخدم التركيز اليدوي ولا تغيره بعد وضع الفلتر.

## التجربة والتعلم

لا يوجد تعريض مثالي لكل مشهد. جرب أوقاتاً مختلفة. راجع النتائج على الشاشة. عدّل وكرر.

## الإبداع بلا حدود

جرب التصوير في أوقات مختلفة: غروب الشمس، الساعة الزرقاء، الليل. كل وقت يعطي نتائج مختلفة.

## الخلاصة

التعريض الطويل يعلمك رؤية العالم بطريقة مختلفة. الزمن يصبح مادة تشكلها بإبداعك.`,category:"إضاءة",author:{name:"باسم المصري",avatar:"https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?w=100&h=100&fit=crop&crop=face",role:"مصور فني"},image:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=400&fit=crop",date:"2025-12-12",readTime:"8 دقائق للقراءة",featured:!1,tags:["تعريض طويل","ND فلتر","إبداع"]},{id:15,slug:"wedding-photography-guide",title:"تصوير حفلات الزفاف: دليل المصور المحترف",excerpt:"تعلم أساسيات تصوير حفلات الزفاف من التحضير إلى تسليم الصور النهائية.",content:`تصوير الزفاف مسؤولية كبيرة. يوم لا يتكرر، لحظات لا تعود، وذكريات ستبقى للأبد. الضغط عالٍ لكن المكافأة أكبر.

## التحضير المسبق

اجتمع مع العروسين. افهم توقعاتهم ورؤيتهم. زر الموقع مسبقاً. اعرف جدول اليوم بالتفصيل.

## المعدات والنسخ الاحتياطي

كاميرتان على الأقل. عدسات متنوعة (24-70, 70-200, 35, 85). فلاشات متعددة. بطاريات وكروت ذاكرة إضافية. لا مجال للفشل.

## اللحظات الرئيسية

التحضيرات، الدخلة، القبلة الأولى، الرقصة الأولى، قطع الكيك، رمي الباقة. كن جاهزاً لكل لحظة ولا تفوت أياً منها.

## العمل مع الضوء

الكنائس والقاعات غالباً ذات إضاءة صعبة. تعلم استخدام الفلاش المرتد. ابحث عن مصادر الضوء الطبيعي.

## التعامل مع الناس

أنت قائد لجلسات التصوير الجماعية. كن حازماً لكن لطيفاً. اعرف أسماء أفراد العائلة المهمين.

## المعالجة والتسليم

آلاف الصور تحتاج فرزاً وتعديلاً. ضع جدولاً زمنياً واقعياً. التسليم في الوقت المحدد يبني سمعتك.

## الخلاصة

تصوير الزفاف يجمع كل مهارات التصوير. إنه تحدٍ كبير لكنه أيضاً فرصة لخلق فن يدوم للأجيال.`,category:"بورتريه",author:{name:"منصور الزهراني",avatar:"https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=100&h=100&fit=crop&crop=face",role:"مصور زفاف"},image:"https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=400&fit=crop",date:"2025-12-10",readTime:"11 دقائق للقراءة",featured:!1,tags:["زفاف","مناسبات","احترافي"]},{id:16,slug:"drone-photography-basics",title:"التصوير بالدرون: منظور جديد للعالم",excerpt:"اكتشف عالم التصوير الجوي وتعلم أساسيات استخدام الدرون لالتقاط صور من زوايا فريدة.",content:`التصوير بالدرون يفتح آفاقاً جديدة. زوايا كانت مستحيلة أصبحت في متناول يدك. منظور الطائر يكشف جمالاً مخفياً.

## اختيار الدرون المناسب

DJI تقود السوق بموديلات مثل Mini و Air و Mavic. الكاميرا، وقت الطيران، والثبات عوامل مهمة. ابدأ بدرون للمبتدئين.

## القوانين واللوائح

اعرف قوانين بلدك. معظم الدول تتطلب تسجيلاً ورخصة. مناطق ممنوعة حول المطارات والمنشآت الحكومية. الجهل بالقانون لا يعفيك.

## التحكم والطيران

تدرب في مناطق مفتوحة أولاً. تعلم الإقلاع والهبوط بسلاسة. فهم أوضاع الطيران المختلفة. الممارسة تصنع الإتقان.

## التكوين من الأعلى

الأنماط والأشكال تبدو مختلفة من الأعلى. ابحث عن التماثل، الخطوط التوجيهية، والتباينات. الظلال تصبح عناصر تكوين.

## التوقيت والإضاءة

الساعة الذهبية من الجو أكثر سحراً. الظلال الطويلة تضيف عمقاً. يوم غائم يعطي إضاءة متساوية جيدة.

## السلامة أولاً

لا تطر فوق الناس. راقب البطارية دائماً. عد للمنزل قبل نفاد الطاقة. الطقس العاصف خطير.

## الخلاصة

الدرون أداة إبداعية قوية. استخدمها بمسؤولية واكتشف عالماً جديداً من الجمال.`,category:"معدات",author:{name:"فيصل الدوسري",avatar:"https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=100&h=100&fit=crop&crop=face",role:"مصور جوي"},image:"https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=400&fit=crop",date:"2025-12-08",readTime:"9 دقائق للقراءة",featured:!1,tags:["درون","تصوير جوي","DJI"]},{id:17,slug:"product-photography-essentials",title:"تصوير المنتجات: أساسيات التصوير التجاري",excerpt:"تعلم كيفية تصوير المنتجات بشكل احترافي لمتجرك الإلكتروني أو عملائك التجاريين.",content:`تصوير المنتجات فن يجمع بين الدقة التقنية والإبداع البصري. صورة المنتج الجيدة تبيع نفسها.

## إعداد الاستوديو

لا تحتاج استوديو ضخم. طاولة بيضاء، خلفية بيضاء أو رمادية، وإضاءة جيدة كافية للبداية. صندوق الضوء (Light Box) خيار ممتاز للمنتجات الصغيرة.

## الإضاءة المثالية

الإضاءة الناعمة المنتشرة تزيل الظلال القاسية. استخدم سوفت بوكس أو شراشف بيضاء لتنعيم الضوء. الإضاءة من الجانب تبرز الملمس والتفاصيل.

## الخلفية والتنسيق

الخلفية البيضاء النظيفة معيار التجارة الإلكترونية. لكن لا تخف من التجربة: الخشب، الرخام، أو الأقمشة يمكن أن تضيف شخصية للمنتج.

## الزوايا المتعددة

صور المنتج من عدة زوايا: أمامية، جانبية، من الأعلى، وتفاصيل مقربة. العميل يريد رؤية كل شيء قبل الشراء.

## التعديل والتنقيح

إزالة الغبار والعيوب الصغيرة ضرورية. تصحيح الألوان لتطابق المنتج الحقيقي. الاتساق في الأسلوب عبر كل المنتجات.

## الخلاصة

تصوير المنتجات استثمار يعود بأضعاف. صور احترافية تعني ثقة أكبر ومبيعات أعلى.`,category:"تقنيات",author:{name:"لؤي الصالح",avatar:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face",role:"مصور تجاري"},image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=400&fit=crop",date:"2025-12-05",readTime:"8 دقائق للقراءة",featured:!1,tags:["تصوير منتجات","تجاري","استوديو"]},{id:18,slug:"architecture-photography",title:"تصوير العمارة: كيف تلتقط روح المباني",excerpt:"اكتشف تقنيات تصوير المباني والهندسة المعمارية بطريقة فنية تبرز جمالها وتفاصيلها.",content:`تصوير العمارة يحول المباني إلى أعمال فنية. الخطوط والأشكال والضوء والظل تتراقص معاً لتخلق صوراً آسرة.

## العدسات المناسبة

عدسة واسعة الزاوية (16-35mm) أساسية لالتقاط المباني الكاملة. عدسة Tilt-Shift تصحح التشوه وتبقي الخطوط مستقيمة. التليفوتو لتفاصيل الواجهات.

## التعامل مع التشوه

الخطوط المائلة مشكلة شائعة. صور من منتصف ارتفاع المبنى إن أمكن. أو صحح التشوه في مرحلة ما بعد المعالجة.

## الإضاءة والتوقيت

الضوء الجانبي يبرز الملمس والعمق. الساعة الزرقاء مثالية للمباني المضاءة. النهار الغائم يعطي إضاءة ناعمة متساوية.

## الخطوط والأشكال

ابحث عن الأنماط المتكررة، التماثل، والخطوط التوجيهية. الهندسة المعمارية غنية بعناصر التكوين الطبيعية.

## التفاصيل المعمارية

لا تكتفِ بالصورة الشاملة. اقترب من التفاصيل: النوافذ، الأعمدة، الزخارف، السلالم. كل تفصيل يحكي قصة.

## الخلاصة

تصوير العمارة يعلمك رؤية الجمال في المألوف. كل مبنى له شخصية تنتظر أن تُكتشف.`,category:"مناظر طبيعية",author:{name:"طارق النعيمي",avatar:"https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=100&h=100&fit=crop&crop=face",role:"مصور معماري"},image:"https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=400&fit=crop",date:"2025-12-02",readTime:"9 دقائق للقراءة",featured:!1,tags:["عمارة","مباني","هندسة"]},{id:19,slug:"sports-action-photography",title:"تصوير الرياضة والحركة: تجميد اللحظة الحاسمة",excerpt:"تعلم تقنيات تصوير الأحداث الرياضية والحركة السريعة بوضوح ودقة احترافية.",content:`تصوير الرياضة يتطلب سرعة البديهة والمعدات المناسبة. لحظة الانتصار أو الهزيمة تحدث في جزء من الثانية.

## المعدات السريعة

كاميرا بتركيز تلقائي سريع ومعدل تصوير متتابع عالي (10+ صور/ثانية). عدسات تليفوتو سريعة (70-200 f/2.8، 400 f/2.8). بطاقات ذاكرة سريعة.

## إعدادات الكاميرا

سرعة غالق 1/1000 ثانية على الأقل لتجميد الحركة. تركيز مستمر (AF-C) مع تتبع. ISO تلقائي مع حد أقصى. وضع التصوير المتتابع.

## توقع الحركة

اعرف اللعبة. توقع أين ستكون اللحظة الحاسمة. ركز مسبقاً على تلك النقطة. الخبرة تبني هذا الحدس.

## الموقع والزاوية

ابحث عن موقع يتيح خلفية نظيفة. ضوء الشمس خلفك أو جانبياً. زاوية منخفضة تجعل الرياضي يبدو أكثر قوة.

## التعبيرات والعواطف

ليست الحركة فقط مهمة. ابحث عن لحظات العاطفة: الفرح، الألم، التركيز. هذه هي الصور التي تبقى.

## الخلاصة

تصوير الرياضة ماراثون لا سباق قصير. كل مباراة فرصة للتعلم والتحسن. استمر في المحاولة.`,category:"بورتريه",author:{name:"أحمد الشهري",avatar:"https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?w=100&h=100&fit=crop&crop=face",role:"مصور رياضي"},image:"https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=400&fit=crop",date:"2025-11-28",readTime:"10 دقائق للقراءة",featured:!1,tags:["رياضة","حركة","سرعة"]},{id:20,slug:"flash-photography-basics",title:"أساسيات التصوير بالفلاش: تحكم كامل في الإضاءة",excerpt:"افهم كيفية استخدام الفلاش الخارجي لإنشاء إضاءة احترافية في أي موقف.",content:`الفلاش أداة قوية تحررك من قيود الإضاءة المتاحة. مع الفهم الصحيح، يصبح أفضل صديق للمصور.

## أنواع الفلاش

الفلاش المدمج محدود القوة والمرونة. الفلاش الخارجي (Speedlight) أقوى ويمكن توجيهه. فلاشات الاستوديو للتحكم الكامل.

## الفلاش المرتد

لا توجه الفلاش مباشرة للوجه. ارتده عن السقف أو الجدار للحصول على ضوء ناعم طبيعي. السقف الأبيض أفضل عاكس.

## TTL مقابل Manual

TTL يقيس الضوء تلقائياً - سريع ومريح. الوضع اليدوي يعطي تحكماً كاملاً ونتائج متسقة. تعلم كليهما.

## موازنة الفلاش مع المحيط

الفلاش لا يجب أن يطغى على الإضاءة الطبيعية. قلل قوته ليكمل الضوء المتاح بدلاً من استبداله.

## High-Speed Sync

للتصوير بسرعة غالق أعلى من سرعة المزامنة، فعّل HSS. مفيد لملء الظلال في ضوء الشمس القوي.

## الخلاصة

الفلاش يفتح إمكانيات لا حدود لها. ابدأ بالأساسيات ثم تعمق تدريجياً. الممارسة هي المفتاح.`,category:"إضاءة",author:{name:"ماجد القحطاني",avatar:"https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=100&h=100&fit=crop&crop=face",role:"مصور استوديو"},image:"https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=400&fit=crop",date:"2025-11-25",readTime:"8 دقائق للقراءة",featured:!1,tags:["فلاش","إضاءة صناعية","Speedlight"]},{id:21,slug:"travel-photography-tips",title:"تصوير السفر: كيف توثق رحلاتك بصور لا تُنسى",excerpt:"نصائح عملية لتصوير السفر تساعدك على التقاط جوهر كل مكان تزوره.",content:`تصوير السفر يجمع كل أنواع التصوير: مناظر طبيعية، شوارع، بورتريهات، طعام، وعمارة. كل رحلة فرصة للتعلم.

## التحضير للرحلة

ابحث عن وجهتك مسبقاً. اعرف أفضل مواقع التصوير وأوقاتها. لكن كن مستعداً للمفاجآت - أجمل الصور غالباً غير مخططة.

## المعدات الخفيفة

السفر يعني المشي كثيراً. كاميرا واحدة وعدستان كافية لمعظم الحالات. حقيبة مريحة وخفيفة ضرورية.

## احترام الثقافة المحلية

استأذن قبل تصوير الناس. احترم الأماكن المقدسة. تعلم بضع كلمات من اللغة المحلية. التواصل يفتح الأبواب.

## استيقظ مبكراً

أفضل الضوء وأقل الزحام في الصباح الباكر. التضحية بساعات النوم تستحق للحصول على صور فريدة.

## احكِ قصة

لا تصور المعالم فقط. صور الحياة اليومية، الطعام المحلي، التفاصيل الصغيرة. هذه هي روح المكان.

## الخلاصة

تصوير السفر يجعل الرحلة أكثر عمقاً. تنظر أكثر، تلاحظ أكثر، تتذكر أكثر. السفر بكاميرا تجربة مختلفة تماماً.`,category:"مناظر طبيعية",author:{name:"ياسر العتيبي",avatar:"https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=100&h=100&fit=crop&crop=face",role:"مصور رحالة"},image:"https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=400&fit=crop",date:"2025-11-22",readTime:"9 دقائق للقراءة",featured:!1,tags:["سفر","رحلات","توثيق"]},{id:22,slug:"color-theory-photography",title:"نظرية الألوان في التصوير: كيف تستخدم الألوان بذكاء",excerpt:"افهم كيف تؤثر الألوان على مشاعر المشاهد وكيف تستخدمها لتعزيز صورك.",content:`الألوان لغة بصرية قوية. فهمها يرفع صورك من الجيدة إلى الاستثنائية.

## عجلة الألوان

الألوان الأساسية (أحمر، أزرق، أصفر) والثانوية (برتقالي، أخضر، بنفسجي). الألوان المتقابلة تخلق تبايناً قوياً. المتجاورة تخلق انسجاماً.

## سيكولوجية الألوان

الأحمر: طاقة وعاطفة. الأزرق: هدوء وثقة. الأخضر: طبيعة وتوازن. الأصفر: سعادة وتفاؤل. استخدم هذه المعاني في صورك.

## التباين اللوني

الألوان المتقابلة (أحمر/أخضر، أزرق/برتقالي) تجذب الانتباه. استخدمها لإبراز موضوعك أو خلق دراما بصرية.

## الانسجام اللوني

الألوان المتقاربة تخلق شعوراً بالوحدة والهدوء. مناسبة للصور الهادئة والتأملية.

## درجات الحرارة اللونية

الألوان الدافئة (أحمر، برتقالي) تقدم للأمام. الباردة (أزرق، أخضر) تتراجع. استخدم هذا لخلق عمق.

## الخلاصة

الوعي بالألوان يغير طريقة رؤيتك وتصويرك. ابدأ بملاحظة الألوان في كل مكان حولك.`,category:"تقنيات",author:{name:"دحام الحسيني",avatar:"https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=100&h=100&fit=crop&crop=face",role:"فنان بصري"},image:"https://images.unsplash.com/photo-1502691876148-a84978e59af8?w=800&h=400&fit=crop",date:"2025-11-18",readTime:"7 دقائق للقراءة",featured:!1,tags:["ألوان","نظرية","تكوين"]},{id:23,slug:"newborn-baby-photography",title:"تصوير المواليد: فن التقاط البراءة",excerpt:"تعلم تقنيات تصوير الأطفال حديثي الولادة بأمان واحترافية.",content:`تصوير المواليد تخصص رقيق يتطلب صبراً وحذراً ومهارة. كل طفل فريد وكل جلسة مغامرة جديدة.

## السلامة أولاً

سلامة الطفل فوق كل اعتبار. لا تضعه في أوضاع غير آمنة. اغسل يديك دائماً. حافظ على دفء الغرفة (حوالي 26-28 درجة).

## التوقيت المثالي

أفضل عمر للتصوير: 5-14 يوم. الطفل لا يزال نعساً ومرناً. بعد ذلك يصبح أكثر يقظة وصعوبة في الوضعيات.

## البيئة المريحة

ضوضاء بيضاء تهدئ الطفل. إضاءة ناعمة طبيعية. تجنب الفلاش. اجعل الأهل قريبين للراحة النفسية.

## الأوضاع الآمنة

وضع السلة والتكور الكلاسيكي آمن ومحبوب. تجنب الأوضاع المعقدة التي تراها في Pinterest - كثير منها مركب في الفوتوشوب.

## الإكسسوارات والألوان

ألوان هادئة وإكسسوارات بسيطة. الطفل هو النجم. تجنب الإفراط في الديكور الذي يشتت الانتباه.

## الخلاصة

تصوير المواليد مسؤولية كبيرة ومكافأة أكبر. كل صورة ذكرى ستعتز بها العائلة للأبد.`,category:"بورتريه",author:{name:"نايف المطيري",avatar:"https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop&crop=face",role:"مصور مواليد"},image:"https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&h=400&fit=crop",date:"2025-11-15",readTime:"10 دقائق للقراءة",featured:!1,tags:["مواليد","أطفال","بورتريه"]},{id:24,slug:"real-estate-photography",title:"تصوير العقارات: كيف تجعل المنزل يبيع نفسه",excerpt:"تعلم تقنيات تصوير العقارات التي تجعل المنازل تبدو أفضل ما يمكن.",content:`تصوير العقارات مجال مربح ومطلوب. صورة جيدة يمكن أن تكون الفرق بين بيع سريع وعقار راكد.

## المعدات الأساسية

عدسة واسعة الزاوية (16-35mm) ضرورية لإظهار المساحات. حامل ثلاثي لصور حادة ومستوية. فلاش للتحكم في الإضاءة.

## تحضير المكان

نظف وأزل الفوضى. أضف لمسات بسيطة: زهور، مجلات، فوط مرتبة. افتح الستائر والأبواب لإظهار التدفق.

## الإضاءة المتوازنة

التحدي: موازنة ضوء النوافذ الساطع مع الداخل المظلم. استخدم HDR أو إضاءة إضافية. تجنب النوافذ المحترقة.

## الزوايا الصحيحة

صور من زاوية الغرفة لإظهار أكبر مساحة. ارتفاع الكاميرا حوالي 120 سم. أبقِ الخطوط العمودية مستقيمة.

## التصوير الخارجي

الساعة الزرقاء مع أضواء المنزل مضاءة تخلق صوراً دافئة ومرحبة. صور الحديقة والمسبح والمرافق.

## الخلاصة

تصوير العقارات يجمع بين التقنية والتسويق. افهم ما يريد المشتري رؤيته وقدمه بأفضل صورة.`,category:"تقنيات",author:{name:"عبدالله الغامدي",avatar:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face",role:"مصور عقارات"},image:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=400&fit=crop",date:"2025-11-12",readTime:"8 دقائق للقراءة",featured:!1,tags:["عقارات","تجاري","واسع الزاوية"]},{id:25,slug:"raw-vs-jpeg-explained",title:"RAW مقابل JPEG: متى تستخدم كلاً منهما",excerpt:"افهم الفرق بين صيغتي الصور الأكثر شيوعاً واختر الأنسب لاحتياجاتك.",content:`الجدل بين RAW و JPEG قديم قدم التصوير الرقمي. لكل منهما مكانه ووقته.

## ما هو RAW؟

RAW هو كل البيانات التي التقطها المستشعر بدون معالجة. ملف كبير يحتوي على أقصى معلومات ممكنة. يتطلب معالجة لاحقة.

## ما هو JPEG؟

JPEG ملف مضغوط ومعالج في الكاميرا. أصغر حجماً وجاهز للاستخدام مباشرة. لكنه يفقد بعض البيانات.

## مزايا RAW

مرونة هائلة في التعديل. تصحيح التعريض بسهولة. تعديل توازن اللون الأبيض بعد التصوير. استعادة تفاصيل من الظلال والإبرازات.

## مزايا JPEG

ملفات صغيرة = مساحة أكبر. جاهز للمشاركة مباشرة. معالجة الكاميرا غالباً ممتازة. مثالي للتصوير السريع والكميات الكبيرة.

## متى تستخدم كلاً منهما

RAW: التصوير الاحترافي، الإضاءة الصعبة، عندما تريد أقصى جودة. JPEG: اللقطات اليومية، المساحة محدودة، السرعة مطلوبة.

## الخلاصة

كثير من المصورين يصورون RAW+JPEG معاً. جرب كليهما واختر ما يناسب أسلوبك واحتياجاتك.`,category:"معدات",author:{name:"كريم الفهد",avatar:"https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=100&h=100&fit=crop&crop=face",role:"خبير تقني"},image:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop",date:"2025-11-08",readTime:"6 دقائق للقراءة",featured:!1,tags:["RAW","JPEG","صيغ الصور"]},{id:26,slug:"self-portrait-photography",title:"تصوير البورتريه الذاتي: كن موضوعك الخاص",excerpt:"تعلم كيف تصور نفسك بشكل احترافي وإبداعي دون الحاجة لمساعد.",content:`البورتريه الذاتي فن قديم تجدد بالتصوير الفوتوغرافي. أنت المصور والموديل معاً.

## لماذا البورتريه الذاتي؟

تدريب مجاني متاح دائماً. استكشاف الذات والتعبير الفني. تطوير مهاراتك في الإضاءة والتكوين والتعديل.

## المعدات اللازمة

حامل ثلاثي ثابت. جهاز تحكم عن بعد أو مؤقت ذاتي. مرآة لمراقبة الوضعية. تطبيق التحكم بالكاميرا على الهاتف مفيد جداً.

## التركيز بدونك

ضع شيئاً في مكانك للتركيز عليه (كرسي، وسادة). استخدم التركيز اليدوي وثبته. أو استخدم وضع تتبع العين إن كان متاحاً.

## الإضاءة والوضعيات

جرب بحرية. لا أحد ينتظرك. العب مع الضوء والظلال. جرب تعابير وأوضاع لن تطلبها من شخص آخر.

## التعديل والأسلوب

البورتريه الذاتي مساحة للتجربة. جرب أساليب تعديل جديدة. طور صوتك البصري الخاص.

## الخلاصة

البورتريه الذاتي رحلة اكتشاف ذات. كل صورة تعلمك شيئاً عن نفسك وعن فنك.`,category:"بورتريه",author:{name:"سلطان الراجحي",avatar:"https://images.unsplash.com/photo-1557862921-37829c790f19?w=100&h=100&fit=crop&crop=face",role:"فنان تصوير"},image:"https://images.unsplash.com/photo-1554080353-a576cf803bda?w=800&h=400&fit=crop",date:"2025-11-05",readTime:"7 دقائق للقراءة",featured:!1,tags:["بورتريه ذاتي","إبداع","تعبير"]},{id:27,slug:"lens-guide-beginners",title:"دليل العدسات للمبتدئين: كيف تختار عدستك الأولى",excerpt:"افهم أنواع العدسات المختلفة واختر الأنسب لأسلوب تصويرك واحتياجاتك.",content:`العدسة أهم من الكاميرا في كثير من الأحيان. فهم العدسات يساعدك على اتخاذ قرارات شراء حكيمة.

## البعد البؤري

يُقاس بالمليمتر (mm). الأرقام الصغيرة = زاوية واسعة. الأرقام الكبيرة = تقريب. 50mm تقريباً ما تراه العين البشرية.

## فتحة العدسة

f/1.8 أكبر من f/4. فتحة أكبر = ضوء أكثر + خلفية أكثر ضبابية. العدسات السريعة (f/1.4-f/2.8) أغلى وأكبر.

## عدسة الـ 50mm

النيفتي فيفتي (50mm f/1.8) أفضل استثمار للمبتدئين. رخيصة، خفيفة، وتعطي نتائج رائعة. تعلمك الحركة والتكوين.

## العدسات الزوم مقابل الثابتة

الزوم مرنة وعملية. الثابتة (Prime) أخف وأسرع وأحد. للتعلم، الثابتة تجبرك على التفكير أكثر.

## العدسات حسب التخصص

بورتريه: 85mm. مناظر: 16-35mm. ماكرو: عدسة ماكرو مخصصة. حياة برية: 100-400mm.

## الخلاصة

لا تشترِ عدسات لا تحتاجها. ابدأ بعدسة واحدة واتقنها قبل الانتقال للتالية. العدسة الأفضل هي التي تستخدمها.`,category:"معدات",author:{name:"فهد السبيعي",avatar:"https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=100&h=100&fit=crop&crop=face",role:"مراجع معدات"},image:"https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=800&h=400&fit=crop",date:"2025-11-02",readTime:"9 دقائق للقراءة",featured:!1,tags:["عدسات","معدات","مبتدئين"]},{id:28,slug:"minimalist-photography",title:"التصوير البسيط (Minimalist): قوة الفراغ",excerpt:"اكتشف جمال البساطة في التصوير وكيف تخلق صوراً قوية بعناصر قليلة.",content:`الأقل هو الأكثر. التصوير البسيط يزيل كل ما هو غير ضروري ليتحدث الجوهر.

## فلسفة البساطة

كل عنصر في الصورة يجب أن يكون له غرض. إذا لم يضف شيئاً، فهو يطرح. الفراغ ليس خالياً - إنه يتنفس.

## المساحة السلبية

الفراغ حول الموضوع يعطيه قوة وهيبة. لا تخف من ترك 80% من الإطار فارغاً. الموضوع الصغير في فراغ كبير يجذب الانتباه.

## الخطوط والأشكال

التصوير البسيط يعتمد على الهندسة. خط واحد، شكل واحد، نمط متكرر. البساطة في العناصر، القوة في التنفيذ.

## الألوان المحدودة

ألوان قليلة أو لون واحد. الأبيض والأسود طبيعي للبساطة. لون واحد مع خلفية محايدة.

## إيجاد المواضيع

المباني الحديثة، السماء الفارغة، الأشياء اليومية المعزولة. البساطة في كل مكان لمن يعرف كيف ينظر.

## الخلاصة

التصوير البسيط ليس سهلاً. إزالة العناصر أصعب من إضافتها. لكن النتيجة صور لا تُنسى.`,category:"تقنيات",author:{name:"راشد الجاسر",avatar:"https://images.unsplash.com/photo-1545167622-3a6ac756afa4?w=100&h=100&fit=crop&crop=face",role:"فنان بصري"},image:"https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&h=400&fit=crop",date:"2025-10-28",readTime:"6 دقائق للقراءة",featured:!1,tags:["بساطة","Minimalist","تكوين"]}]}.posts.find(h=>h.slug===i),c=h=>{const p=h.split("##").filter(y=>y.trim());return f.jsx("div",{className:"flex flex-col gap-10",children:p.map((y,x)=>{const g=y.trim().split(`
`).filter(C=>C.trim()),N=g[0]?.trim(),j=g.slice(1).join(" ").trim();return x===0&&!N.includes("؟")?f.jsx("p",{className:"text-base sm:text-lg text-gray-300 leading-loose text-right",children:y.trim()},x):f.jsxs("div",{id:`section-${x}`,className:"space-y-3",children:[f.jsxs("div",{className:"flex items-center gap-3 text-right",children:[f.jsx("i",{className:`fa-solid ${N.includes("الخلاصة")?"fa-lightbulb":"fa-star"} text-orange-400 text-xl`}),f.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:N})]}),f.jsx("p",{className:"text-base sm:text-lg text-gray-300 leading-loose text-right",children:j})]},x)})})};function d({content:h}){const p=h.split("##").filter(x=>x.trim()).map(x=>x.trim().split(`
`)[0]).slice(1),y=x=>{const g=document.getElementById(`section-${x+1}`);if(!g)return;const j=g.getBoundingClientRect().top+window.pageYOffset+-100;window.scrollTo({top:j,behavior:"smooth"})};return f.jsxs("div",{className:"sticky top-24 w-80 shrink-0",children:[f.jsxs("div",{className:"p-6 bg-[#111111] border border-white/20 rounded-2xl",children:[f.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[f.jsx("div",{className:"w-10 h-10 bg-proj/10 border border-proj rounded-lg flex items-center justify-center",children:f.jsx("i",{className:"fa-solid fa-bars text-proj text-sm"})}),f.jsx("span",{className:"text-lg font-bold text-white",children:"محتويات المقال"})]}),f.jsx("nav",{className:"flex flex-col gap-1",children:p.map((x,g)=>f.jsxs("button",{onClick:()=>y(g),className:"group flex items-start gap-2 p-3 rounded-lg hover:bg-proj/10 transition",children:[f.jsx("i",{className:"fa-solid fa-chevron-left text-xs text-proj mt-1 group-hover:translate-x-1 transition-transform"}),f.jsx("span",{className:"text-sm text-gray-300 group-hover:text-white leading-relaxed",children:x})]},g))})]}),f.jsxs("div",{className:"p-6 flex flex-col sm:flex-row gap-3 bg-[#111111] border border-white/20 rounded-2xl mt-3",children:[f.jsxs("div",{className:"p-4 flex flex-col gap-2 sm:w-1/2 items-center w-full bg-black rounded-2xl border border-white/20",children:[f.jsx("i",{className:"fa-regular fa-calendar text-proj text-xl"}),f.jsx("span",{className:"font-bold text-white",children:o.date}),f.jsx("span",{className:"text-xs text-gray-500",children:"تاريخ النشر"})]}),f.jsxs("div",{className:"p-4 flex flex-col gap-2 items-center sm:w-1/2 w-full bg-black rounded-2xl border border-white/20",children:[f.jsx("i",{className:"fa-regular fa-clock text-proj text-xl"}),f.jsx("span",{className:"font-bold text-white text-center",children:o.readTime}),f.jsx("span",{className:"text-xs text-gray-500",children:"وقت القراءة"})]})]})]})}return f.jsxs("section",{className:"relative",children:[f.jsxs("div",{className:"w-full bg-center bg-cover relative min-h-[60vh] lg:min-h-[80vh]",style:{backgroundImage:`url(${o.image})`},children:[f.jsx("div",{className:"absolute inset-0 bg-linear-to-b from-transparent via-black/60 to-black"}),f.jsxs("div",{className:"relative z-10",children:[f.jsx("div",{className:"p-4 sm:p-8 flex items-center",children:f.jsxs("div",{className:"bg-black/50 rounded-full border border-white/20 flex gap-2 px-4 py-2 items-center",children:[f.jsx(ja,{to:"/",className:"fa-solid fa-house text-gray-300 text-sm"}),f.jsx("i",{className:"fa-solid fa-chevron-left text-gray-400 text-sm"}),f.jsx(ja,{to:"/blog",className:"text-gray-300 text-sm",children:"المدونة"}),f.jsx("i",{className:"fa-solid fa-chevron-left text-gray-400 text-sm"}),f.jsx("span",{className:"text-proj text-sm",children:o.category})]})}),f.jsxs("div",{className:"px-4 sm:px-8 lg:px-40 pb-14 flex flex-col gap-6 text-right",children:[f.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[f.jsx("span",{className:"px-4 py-2 bg-orange-400 rounded-full text-sm font-bold text-white",children:o.category}),f.jsxs("span",{className:"flex gap-2 items-center text-gray-200 text-sm",children:[f.jsx("i",{className:"fa-regular fa-clock"}),o.readTime]}),f.jsxs("span",{className:"flex gap-2 items-center text-gray-200 text-sm",children:[f.jsx("i",{className:"fa-regular fa-calendar"}),o.date]})]}),f.jsx("h1",{className:"text-3xl sm:text-4xl lg:text-6xl font-bold text-white max-w-3xl leading-tight",children:o.title}),f.jsxs("div",{className:"p-4 border-2 w-fit border-proj/50 bg-black/80 rounded-2xl inline-flex items-center gap-3",children:[f.jsx("img",{src:o.author.avatar,className:"w-14 h-14 rounded-full border border-proj",alt:""}),f.jsxs("div",{children:[f.jsx("p",{className:"font-bold text-white",children:o.author.name}),f.jsx("p",{className:"text-sm text-gray-400",children:o.author.role})]})]})]})]})]}),f.jsx("div",{className:"bg-black pb-20",children:f.jsx("div",{className:"max-w-7xl mx-auto pt-16 px-4 sm:px-6 lg:px-8",children:f.jsxs("div",{className:"flex flex-col lg:flex-row gap-8",children:[f.jsxs("div",{className:"flex-1",children:[f.jsx("div",{className:"p-6 bg-proj/20 border border-proj/70 rounded-2xl mb-8",children:f.jsx("p",{className:"text-white/90 leading-relaxed",children:o.excerpt})}),c(o.content),f.jsxs("div",{className:"p-6 bg-[#111111] border border-white/20 rounded-2xl mt-10",children:[f.jsxs("div",{className:"flex gap-3 items-center mb-4",children:[f.jsx("i",{className:"fa-solid fa-tags text-proj"}),f.jsx("span",{className:"font-bold text-white",children:"الوسوم"})]}),f.jsx("div",{className:"flex flex-wrap gap-2",children:o.tags.map((h,p)=>f.jsx("span",{className:"px-3 py-2 text-sm border border-white/20 rounded-full text-gray-400 hover:text-proj hover:border-proj transition",children:h},p))})]})]}),f.jsx("aside",{className:"hidden lg:block lg:sticky lg:top-24",children:f.jsx(d,{content:o.content})})]})})})]})}function py(){return f.jsxs("section",{className:"relative overflow-hidden",children:[f.jsx("div",{className:"absolute inset-0 -z-10",style:{backgroundImage:`
        radial-gradient(circle at center, rgba(255,100,50,0.15), transparent 70%),
        linear-gradient(rgba(38,38,38,0.5) 1px, transparent 1px),
        linear-gradient(90deg, rgba(38,38,38,0.5) 1px, transparent 1px)
      `,backgroundSize:"100% 100%, 60px 60px, 60px 60px",backgroundColor:"#000000"}}),f.jsxs("div",{className:"container w-full sm:w-[90%] lg:w-[77%] mx-auto px-4 sm:px-6 pb-15 flex flex-col gap-5 items-center mt-20 text-center",children:[f.jsxs("div",{className:"px-3.5 py-2 flex gap-2.5 items-center bg-proj/10 rounded-full border border-proj/20",children:[f.jsx("div",{className:"size-1.5 bg-proj rounded-full animate-pulse shrink-0"}),f.jsx("div",{className:`relative size-2 bg-proj rounded-full shrink-0\r
                  before:content-[''] before:absolute before:inset-0 \r
                  before:bg-proj before:rounded-full before:animate-ping`}),f.jsx("span",{className:"text-xs sm:text-sm font-medium text-proj",children:"من نحن"})]}),f.jsxs("h1",{className:"text-white text-3xl sm:text-4xl lg:text-6xl font-bold leading-snug px-4",children:["مهمتنا هي ",f.jsx("span",{className:"text-proj",children:"الإعلام والإلهام"})]}),f.jsxs("p",{className:"text-gray-400 font-normal text-base sm:text-lg lg:text-xl leading-tight px-4",children:["مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية",f.jsx("br",{className:"hidden sm:block"})," لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من",f.jsx("br",{className:"hidden sm:block"})," خلال محتوى عالي الجودة."]}),f.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-10 w-full sm:w-auto",children:[f.jsxs("div",{className:"rounded-2xl hover:scale-[103%] transition-all duration-200 py-4 px-4 sm:px-8 lg:px-15 flex flex-col gap-1.5 items-center bg-black/50 border border-white/10",children:[f.jsx("i",{className:"fa-solid fa-folder text-2xl sm:text-3xl font-bold text-proj"}),f.jsx("span",{className:"text-2xl sm:text-3xl font-bold text-proj",children:"50+"}),f.jsx("span",{className:"text-gray-700 text-xs sm:text-sm font-bold",children:"مقاله"})]}),f.jsxs("div",{className:"rounded-2xl hover:scale-[103%] transition-all duration-200 py-4 px-4 sm:px-8 lg:px-15 flex flex-col gap-1.5 items-center bg-black/50 border border-white/10",children:[f.jsx("i",{className:"fa-solid fa-users text-2xl sm:text-3xl font-bold text-proj"}),f.jsx("span",{className:"whitespace-nowrap text-2xl sm:text-3xl font-bold text-proj",children:"+10 ألف"}),f.jsx("span",{className:"text-gray-700 text-xs sm:text-sm font-bold",children:"قارئ"})]}),f.jsxs("div",{className:"rounded-2xl hover:scale-[103%] transition-all duration-200 py-4 px-4 sm:px-8 lg:px-15 flex flex-col gap-1.5 items-center bg-black/50 border border-white/10",children:[f.jsx("i",{className:"fa-solid fa-file text-2xl sm:text-3xl font-bold text-proj"}),f.jsx("span",{className:"text-2xl sm:text-3xl font-bold text-proj",children:"4"}),f.jsx("span",{className:"text-gray-700 text-xs sm:text-sm font-bold",children:"تصنيفات"})]}),f.jsxs("div",{className:"rounded-2xl hover:scale-[103%] transition-all duration-200 py-4 px-4 sm:px-8 lg:px-15 flex flex-col gap-1.5 items-center bg-black/50 border border-white/10",children:[f.jsx("i",{className:"fa-solid fa-pen text-2xl sm:text-3xl font-bold text-proj"}),f.jsx("span",{className:"text-2xl sm:text-3xl font-bold text-proj",children:"6"}),f.jsx("span",{className:"text-gray-700 text-xs sm:text-sm font-bold",children:"كاتب"})]})]})]})]})}function gy(){return f.jsx(f.Fragment,{children:f.jsx("section",{className:"bg-[#111111] overflow-hidden border-t border-b border-t-white/20 border-b-white/20px",children:f.jsx("div",{className:"container w-[77%] mx-auto pb-18 pt-16",children:f.jsxs("div",{className:"flex flex-col items-center gap-8",children:[f.jsx("h3",{className:"text-4xl text-white font-bold border-l-[5px] border-r-[5px] px-3 border-proj rounded-l-md rounded-r-md",children:"قيمنا"}),f.jsx("p",{className:"text-lg text-gray-400 font-normal",children:"المبادئ التي توجه كل ما نقوم بإنشائه"}),f.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full",children:[f.jsxs("div",{className:`group bg-[#272727] hover:bg-proj/10 border border-white/20 rounded-2xl p-6\r
                  flex flex-col items-center text-center\r
                  transition-all duration-300 hover:border-proj/20`,children:[f.jsx("i",{className:"fa-solid fa-users text-4xl text-proj mb-4"}),f.jsx("h4",{className:`text-[18px] font-bold text-white mb-2\r
                   transition-all duration-300\r
                   group-hover:text-proj\r
                   px-3 py-1 rounded-md`,children:"المجتمع"}),f.jsx("p",{className:"text-sm text-gray-400",children:"تعلم مع آلاف المصورين"})]}),f.jsxs("div",{className:`group bg-[#272727] border hover:bg-proj/10 border-white/20 rounded-2xl p-6\r
                  flex flex-col items-center text-center\r
                  transition-all duration-300 hover:border-proj/20`,children:[f.jsx("i",{className:"fa-solid fa-comments text-4xl text-proj mb-4"}),f.jsx("h4",{className:`text-[18px] font-bold text-white mb-2\r
                   transition-all duration-300\r
                   group-hover:text-proj\r
                   px-3 py-1 rounded-md`,children:"دائما متحدث"}),f.jsx("p",{className:"text-sm text-gray-400",children:"أحدث الاتجاهات وأفضل الممارسات"})]}),f.jsxs("div",{className:`group bg-[#272727] border border-white/20 rounded-2xl p-6\r
                  flex flex-col items-center text-center\r
                  transition-all duration-300 hover:bg-proj/10 hover:border-proj/20`,children:[f.jsx("i",{className:"fa-solid fa-bullseye text-4xl text-proj mb-4"}),f.jsx("h4",{className:`text-[18px] font-bold text-white mb-2\r
                   transition-all duration-300\r
                   group-hover:text-proj \r
                   px-3 py-1 rounded-md`,children:"التركيز العملي"}),f.jsx("p",{className:"text-sm text-gray-400",children:"أمثلة واقعية يمكنك تطبيقها اليوم"})]}),f.jsxs("div",{className:`group bg-[#272727] border border-white/20 rounded-2xl p-6\r
                  flex flex-col items-center text-center\r
                  transition-all duration-300 hover:bg-proj/10 hover:border-proj/20`,children:[f.jsx("i",{className:"fa-solid fa-award text-4xl text-proj mb-4"}),f.jsx("h4",{className:`text-[18px] font-bold text-white mb-2\r
                   transition-all duration-300\r
                   group-hover:text-proj \r
                   px-3 py-1 rounded-md`,children:"الجودة اولا"}),f.jsx("p",{className:"text-sm text-gray-400",children:"محتوى مدروس ومكتوب بخبرة"})]})]})]})})})})}function xy({posts:i}){return f.jsx(f.Fragment,{children:f.jsx("section",{className:"bg-black overflow-hidden border-t border-b border-t-white/20 border-b-white/20",children:f.jsxs("div",{className:"container w-full sm:w-[90%] lg:w-[77%] mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-18 gap-4 flex flex-col items-center text-center",children:[f.jsxs("div",{className:"px-3.5 py-2 flex gap-2.5 items-center bg-proj/10 rounded-full border border-proj/20",children:[f.jsx("div",{className:"size-1.5 bg-proj rounded-full animate-pulse shrink-0"}),f.jsx("span",{className:"text-xs sm:text-sm font-medium text-proj",children:"فريقنا"})]}),f.jsx("h1",{className:"text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug",children:"كتابنا"}),f.jsx("p",{className:"text-gray-400 font-normal text-base sm:text-lg leading-tight px-4",children:"فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع."}),f.jsx("div",{className:"mt-6 sm:mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full",children:i.map(u=>f.jsxs("div",{className:"bg-[#161616] border group border-white/10 hover:border-proj/20 transition-colors p-5 sm:p-6 gap-1 rounded-2xl flex flex-col items-center",children:[f.jsx("div",{className:"w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-white/20 group-hover:border-proj/20 transition-colors overflow-hidden mb-3 sm:mb-4",children:f.jsx("img",{src:u.author.avatar,alt:u.author.name,className:"w-full h-full object-cover"})}),f.jsx("h3",{className:"text-white text-lg sm:text-xl font-bold mb-1 sm:mb-2",children:u.author.name}),f.jsx("p",{className:"text-proj text-xs sm:text-sm mb-3 sm:mb-4",children:u.author.role}),f.jsxs("div",{className:"flex gap-2 sm:gap-2.5 items-center",children:[f.jsx("a",{href:"#",className:"w-8 h-8 sm:w-9 sm:h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors",children:f.jsx("i",{className:"fab fa-linkedin text-white text-sm sm:text-base"})}),f.jsx("a",{href:"#",className:"w-8 h-8 sm:w-9 sm:h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-black transition-all",children:f.jsx("i",{className:"fab fa-github text-white text-sm sm:text-base"})}),f.jsx("a",{href:"#",className:"w-8 h-8 sm:w-9 sm:h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-proj transition-colors",children:f.jsx("i",{className:"fab fa-twitter text-white text-sm sm:text-base"})})]})]},u.id))})]})})})}function yy(){return f.jsx(f.Fragment,{children:f.jsx("section",{className:"bg-proj overflow-hidden border-t border-b border-t-white/20 border-b-white/20px",children:f.jsxs("div",{className:"container w-[77%] mx-auto py-16 text-center items-center flex flex-col gap-8",children:[f.jsx("h4",{className:"text-white font-bold text-4xl",children:"لديك أسئلة ؟ دعنا نتحدث!"}),f.jsxs("p",{className:"font-normal text-lg text-white",children:["نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو تريد فقط إلقاء ",f.jsx("br",{})," التحية، لا تتردد في التواصل."]}),f.jsxs("div",{className:"flex gap-4 items-center",children:[f.jsxs("button",{className:"px-8 py-4 rounded-xl bg-black hover:bg-black/90 text-white cursor-pointer flex items-center gap-2 hover:-translate-y-0.5 transition-all duration-300",children:[f.jsx("i",{className:"far fa-envelope"}),f.jsx("span",{className:"font-semibold",children:"تواصل معنا"})]}),f.jsx(Ht,{to:"/blog",className:"px-8 py-4 rounded-xl bg-transparent text-white border font-semibold cursor-pointer border-white hover:bg-white hover:border/proj hover:text-black transition-all duration-300",children:"تصفح المقالات"})]})]})})})}function vy(){const i={posts:[{id:1,slug:"mastering-golden-hour-photography",title:"إتقان تصوير الساعة الذهبية: دليل شامل",excerpt:"تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول الإضاءة والتكوين.",content:`الساعة الذهبية هي أكثر الأوقات سحراً للتصوير الفوتوغرافي. ذلك الوقت القصير بعد شروق الشمس وقبل غروبها حيث يكون الضوء ناعماً ودافئاً وساحراً.

## لماذا الساعة الذهبية؟

الضوء خلال هذا الوقت له صفات فريدة: ظلال طويلة ناعمة، ألوان دافئة ذهبية، وتباين منخفض يجعل كل شيء يبدو أجمل. البورتريهات تكتسب توهجاً طبيعياً والمناظر الطبيعية تتحول إلى لوحات فنية.

## التحضير المسبق

خطط لجلسة التصوير مسبقاً. استخدم تطبيقات مثل PhotoPills لمعرفة وقت الساعة الذهبية بدقة في موقعك. وصل قبل 30 دقيقة لاختيار أفضل زاوية.

## إعدادات الكاميرا

استخدم ISO منخفض للحصول على أقل ضوضاء. فتحة العدسة تعتمد على ما تريد: f/1.8-f/2.8 للبورتريهات مع خلفية ضبابية، أو f/8-f/11 للمناظر الطبيعية الحادة.

## التكوين الفني

ضع الشمس خلف موضوعك للحصول على تأثير الإضاءة الخلفية الساحر. أو استخدمها كمصدر جانبي لإبراز الملمس والعمق.

## الخلاصة

الساعة الذهبية هي هدية للمصورين. استغلها جيداً وستحصل على صور لا تُنسى تتميز بجمالها الطبيعي.`,category:"إضاءة",author:{name:"سالم أحمد",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",role:"مصور محترف"},image:"https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=800&h=400&fit=crop",date:"2026-01-15",readTime:"8 دقائق للقراءة",featured:!0,tags:["إضاءة","الساعة الذهبية","تصوير خارجي"]},{id:2,slug:"portrait-photography-secrets",title:"أسرار تصوير البورتريه: كيف تلتقط روح الشخصية",excerpt:"اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية الموضوع الحقيقية.",content:`تصوير البورتريه هو فن التقاط جوهر الإنسان في صورة واحدة. ليس مجرد توثيق الملامح، بل كشف القصة خلف العيون.

## التواصل مع الموضوع

قبل أن تمسك الكاميرا، تحدث مع الشخص. اجعله يشعر بالراحة. الابتسامة الحقيقية والنظرة الطبيعية تأتي فقط عندما يثق بك الموضوع.

## اختيار العدسة المناسبة

عدسات 85mm و 50mm هي الكلاسيكيات لتصوير البورتريه. توفر ضغطاً مثالياً للملامح وخلفية ضبابية جميلة.

## الإضاءة الطبيعية

النافذة الكبيرة هي أفضل صديق لمصور البورتريه. ضع الموضوع بزاوية 45 درجة من النافذة للحصول على إضاءة ثلاثية الأبعاد رائعة.

## التركيز على العيون

العيون هي نافذة الروح. تأكد دائماً من أن العيون حادة ومركزة. استخدم نقطة تركيز واحدة على العين الأقرب للكاميرا.

## الخلفية والتكوين

اختر خلفية بسيطة لا تشتت الانتباه. استخدم قاعدة الأثلاث لوضع العيون في النقاط القوية.

## الخلاصة

البورتريه الناجح يحكي قصة. عندما تجمع بين التقنية والتواصل الإنساني، تخلق صوراً خالدة.`,category:"بورتريه",author:{name:"محمد علي",avatar:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",role:"مصور بورتريه"},image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",date:"2026-01-12",readTime:"6 دقائق للقراءة",featured:!0,tags:["بورتريه","تصوير أشخاص","إضاءة طبيعية"]},{id:3,slug:"landscape-photography-guide",title:"دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف",excerpt:"استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط جمال الطبيعة بعدستك.",content:`تصوير المناظر الطبيعية هو رحلة إلى قلب الطبيعة. إنه فن يتطلب الصبر والتخطيط والعين الفنية لرؤية الجمال في كل مكان.

## المعدات الأساسية

حامل ثلاثي قوي ضروري للحصول على صور حادة. عدسة واسعة الزاوية (16-35mm) مثالية لالتقاط المشاهد الواسعة. فلاتر ND و Polarizer ستفتح لك آفاقاً إبداعية جديدة.

## توقيت التصوير

الساعة الزرقاء والساعة الذهبية هي أفضل الأوقات. الضوء يكون ناعماً والألوان غنية. لا تخف من التصوير في الطقس الدرامي - الغيوم والعواصف تضيف شخصية للصورة.

## التكوين الفني

ابحث عن عناصر المقدمة المثيرة للاهتمام. صخرة، زهرة، أو مسار يقود العين نحو الخلفية. استخدم خطوط التوجيه لخلق عمق في الصورة.

## إعدادات الكاميرا

فتحة f/8-f/16 للحصول على حدة من المقدمة للخلفية. ISO منخفض قدر الإمكان. استخدم وضع Live View والتكبير للتركيز اليدوي الدقيق.

## المعالجة اللاحقة

صور بصيغة RAW لأقصى مرونة في التعديل. تعديل الإضاءة والألوان بلطف يبرز جمال المشهد دون إفراط.

## الخلاصة

تصوير المناظر الطبيعية يعلمك التأمل والصبر. كل صورة هي ذكرى من رحلة لا تُنسى.`,category:"مناظر طبيعية",author:{name:"إبراهيم حسن",avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",role:"مصور طبيعة"},image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",date:"2026-01-10",readTime:"10 دقائق للقراءة",featured:!0,tags:["مناظر طبيعية","تصوير خارجي","طبيعة"]},{id:4,slug:"camera-settings-basics",title:"أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي",excerpt:"افهم العلاقة بين فتحة العدسة وسرعة الغالق وحساسية ISO للتحكم الكامل في صورك.",content:`مثلث التعريض الضوئي هو أساس كل صورة ناجحة. فهم هذه العناصر الثلاثة يحررك من الوضع التلقائي ويمنحك السيطرة الإبداعية الكاملة.

## فتحة العدسة (Aperture)

فتحة العدسة تتحكم في كمية الضوء وعمق الميدان. الأرقام الصغيرة (f/1.4, f/2.8) تعني فتحة أكبر، ضوء أكثر، وخلفية ضبابية. الأرقام الكبيرة (f/11, f/16) تعني حدة أكبر في كل الصورة.

## سرعة الغالق (Shutter Speed)

سرعة الغالق تتحكم في تجميد الحركة. 1/500 ثانية تجمد الرياضيين، 1/60 مناسبة للمواضيع الثابتة، والسرعات البطيئة تخلق تأثيرات ضبابية إبداعية.

## حساسية ISO

ISO هو حساسية المستشعر للضوء. ISO 100-400 للإضاءة الجيدة، أعلى من ذلك للإضاءة المنخفضة. كلما زاد ISO، زادت الضوضاء في الصورة.

## التوازن بين الثلاثة

هذه العناصر مترابطة. إذا زدت واحداً، يجب تعديل الآخرين للحفاظ على التعريض الصحيح. تدرب على الوضع اليدوي حتى تصبح هذه العلاقة طبيعية.

## نصائح عملية

ابدأ بوضع أولوية فتحة العدسة (Av/A) للتحكم في عمق الميدان، أو أولوية الغالق (Tv/S) للتحكم في الحركة.

## الخلاصة

إتقان مثلث التعريض يفتح لك عالماً من الإبداع. تدرب يومياً وستصبح هذه الإعدادات طبيعة ثانية.`,category:"تقنيات",author:{name:"داود خالد",avatar:"https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",role:"مدرب تصوير"},image:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=400&fit=crop",date:"2026-01-08",readTime:"7 دقائق للقراءة",featured:!1,tags:["إعدادات الكاميرا","مبتدئين","تقنيات"]},{id:5,slug:"photo-composition-rules",title:"قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية",excerpt:"تعلم قواعد التكوين الأساسية التي يستخدمها المصورون المحترفون لإنشاء صور مؤثرة بصرياً.",content:`التكوين هو الفرق بين صورة عادية وصورة استثنائية. إنه كيفية ترتيب العناصر داخل الإطار لتوجيه عين المشاهد وإيصال رسالتك.

## قاعدة الأثلاث

قسّم الإطار إلى تسعة أجزاء متساوية بخطين أفقيين وعموديين. ضع العناصر المهمة على هذه الخطوط أو تقاطعاتها للحصول على توازن بصري جذاب.

## الخطوط التوجيهية

استخدم الخطوط الطبيعية في المشهد - طريق، نهر، سور - لقيادة عين المشاهد نحو الموضوع الرئيسي.

## الإطار داخل الإطار

استخدم عناصر في المقدمة كإطار طبيعي: باب، نافذة، أغصان شجرة. هذا يضيف عمقاً ويركز الانتباه.

## التماثل والأنماط

التماثل يخلق شعوراً بالهدوء والتوازن. الأنماط المتكررة تجذب العين. كسر النمط يخلق نقطة اهتمام قوية.

## المساحة السلبية

لا تخف من الفراغ. المساحة الفارغة حول الموضوع يمكن أن تكون قوية بنفس قوة الموضوع نفسه.

## كسر القواعد

اعرف القواعد جيداً، ثم اكسرها بوعي. أحياناً الصورة غير التقليدية هي الأقوى تأثيراً.

## الخلاصة

التكوين مهارة تتطور مع الممارسة. صوّر كثيراً، ادرس أعمال المصورين العظماء، وطور عينك الفنية.`,category:"تقنيات",author:{name:"ليث محمود",avatar:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",role:"فنان بصري"},image:"https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=400&fit=crop",date:"2026-01-05",readTime:"9 دقائق للقراءة",featured:!1,tags:["تكوين","قواعد التصوير","فن"]},{id:6,slug:"mobile-photography-tips",title:"تصوير الهاتف المحمول: كيف تلتقط صوراً احترافية بهاتفك",excerpt:"اكتشف كيف تحول هاتفك الذكي إلى أداة تصوير قوية مع هذه النصائح والتقنيات.",content:`أفضل كاميرا هي التي معك دائماً. هاتفك الذكي يمكن أن يلتقط صوراً مذهلة إذا عرفت كيف تستخدمه بشكل صحيح.

## نظّف العدسة

أبسط نصيحة وأهمها. العدسة المتسخة تسبب ضبابية وفقدان للتباين. امسحها بقطعة قماش ناعمة قبل كل جلسة تصوير.

## استخدم الإضاءة الطبيعية

كاميرات الهواتف تتألق في الإضاءة الجيدة. صوّر بالقرب من النوافذ أو في الخارج. تجنب الإضاءة القاسية المباشرة.

## ثبّت يدك

الاهتزاز عدو الصورة الحادة. أمسك الهاتف بكلتا يديك، اسند مرفقيك على جسمك، أو استخدم حاملاً ثلاثياً صغيراً.

## تجنب التكبير الرقمي

التكبير الرقمي يفقد الجودة. بدلاً من ذلك، اقترب من موضوعك أو قص الصورة لاحقاً.

## جرب تطبيقات التصوير

تطبيقات مثل Lightroom Mobile و VSCO توفر تحكماً يدوياً وأدوات تحرير قوية. صوّر بصيغة RAW إذا كان هاتفك يدعمها.

## التكوين مهم

فعّل شبكة الأثلاث في إعدادات الكاميرا. طبق قواعد التكوين نفسها التي تستخدمها مع الكاميرا الاحترافية.

## الخلاصة

هاتفك أداة إبداعية قوية. المهارة والعين الفنية أهم من المعدات. صوّر كل يوم وشاهد تطورك.`,category:"معدات",author:{name:"جمال عبدالله",avatar:"https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face",role:"مصور ومراجع تقني"},image:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",date:"2026-01-03",readTime:"8 دقائق للقراءة",featured:!1,tags:["تصوير الهاتف","نصائح","مبتدئين"]},{id:7,slug:"night-photography-techniques",title:"تصوير الليل والنجوم: دليلك لالتقاط سماء الليل",excerpt:"تعلم كيفية تصوير النجوم ودرب التبانة والمناظر الليلية الساحرة مع هذه التقنيات المتقدمة.",content:`تصوير الليل عالم ساحر مليء بالتحديات والمكافآت. عندما تنام المدينة، تستيقظ السماء بملايين النجوم في انتظار عدستك.

## المعدات الضرورية

كاميرا بأداء جيد في ISO العالي ضرورية. عدسة سريعة (f/1.4-f/2.8) تسمح بدخول أكبر قدر من الضوء. حامل ثلاثي قوي وثابت لا غنى عنه.

## إعدادات التصوير

ابدأ بـ ISO 1600-3200، فتحة f/2.8 أو أوسع، وسرعة غالق 15-25 ثانية. استخدم قاعدة 500 لتجنب تتبع النجوم: اقسم 500 على البعد البؤري للحصول على أقصى وقت تعريض.

## التركيز في الظلام

التركيز التلقائي لا يعمل في الظلام. استخدم التركيز اليدوي على نجم ساطع أو ضوء بعيد. كبّر على الشاشة للتأكد من الحدة.

## اختيار الموقع

ابتعد عن التلوث الضوئي للمدن. استخدم تطبيقات مثل Dark Sky Finder للعثور على أماكن مظلمة. القمر الجديد أفضل وقت لتصوير النجوم.

## معالجة الصور

صور RAW ضرورية. ارفع الظلال، عدّل توازن اللون الأبيض، وزد التباين. برامج مثل Lightroom و Photoshop أساسية.

## الخلاصة

تصوير الليل يتطلب صبراً وتجربة. لكن عندما ترى درب التبانة في صورتك الأولى، ستدرك أن كل الجهد يستحق.`,category:"إضاءة",author:{name:"خالد الفيصل",avatar:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",role:"مصور فلكي"},image:"https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=400&fit=crop",date:"2026-01-01",readTime:"11 دقائق للقراءة",featured:!1,tags:["تصوير ليلي","نجوم","درب التبانة"]},{id:8,slug:"street-photography-guide",title:"تصوير الشارع: فن التقاط الحياة اليومية",excerpt:"اكتشف أسرار تصوير الشارع وكيفية توثيق اللحظات العفوية في الحياة اليومية.",content:`تصوير الشارع هو فن التقاط الحياة كما هي. لحظات عابرة، تعبيرات صادقة، وقصص إنسانية تحدث أمامنا كل يوم.

## الكاميرا المناسبة

الكاميرا الصغيرة غير الملفتة أفضل. الهاتف الذكي أو كاميرا ميرورليس صغيرة. تجنب المعدات الضخمة التي تجذب الانتباه.

## كن غير مرئي

ارتدِ ملابس عادية. تحرك ببطء وثقة. لا تتصرف كمصور - كن جزءاً من المشهد. الناس يتجاهلون من يبدو طبيعياً.

## التوقع والصبر

الصورة الرائعة تتطلب انتظار اللحظة المناسبة. ابحث عن إضاءة جميلة أو خلفية مثيرة، ثم انتظر دخول الشخص المناسب.

## احترام الخصوصية

تصوير الشارع ليس تطفلاً. كن محترماً. إذا طلب شخص عدم تصويره، احترم رغبته. تجنب تصوير الأطفال بدون إذن.

## سرد القصص

الصورة الجيدة تحكي قصة. ابحث عن التفاعلات البشرية، التناقضات، والمشاعر. السياق والبيئة جزء من القصة.

## الشجاعة

الخوف من الاقتراب طبيعي لكنه عائق. كلما اقتربت، كانت الصورة أقوى. تدرب حتى يصبح الاقتراب طبيعياً.

## الخلاصة

تصوير الشارع يعلمك رؤية الجمال في العادي. اخرج بكاميرتك اليوم واستكشف مدينتك بعيون جديدة.`,category:"بورتريه",author:{name:"نادر سعيد",avatar:"https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&h=100&fit=crop&crop=face",role:"مصور شوارع"},image:"https://images.unsplash.com/photo-1517732306149-e8f829eb588a?w=800&h=400&fit=crop",date:"2025-12-28",readTime:"7 دقائق للقراءة",featured:!1,tags:["تصوير شوارع","توثيق","حياة يومية"]},{id:9,slug:"food-photography-basics",title:"تصوير الطعام: كيف تجعل أطباقك تبدو شهية",excerpt:"تعلم تقنيات تصوير الطعام الاحترافية لإنشاء صور تثير الشهية وتجذب العيون.",content:`تصوير الطعام فن يجمع بين الطهي والتصوير. الهدف هو جعل المشاهد يشتهي الطبق من خلال الصورة وحدها.

## الإضاءة الطبيعية

الضوء الطبيعي الناعم هو الأفضل لتصوير الطعام. ضع الطبق بالقرب من نافذة كبيرة. استخدم عاكساً أبيض لملء الظلال.

## زوايا التصوير

ثلاث زوايا رئيسية: من الأعلى مباشرة (90°) للأطباق المسطحة، 45° للأطباق ذات الارتفاع، ومستوى العين للمشروبات والطبقات.

## تنسيق الطبق

التقديم مهم جداً. استخدم أطباق بسيطة لا تنافس الطعام. أضف عناصر ديكور مكملة: أعشاب طازجة، قماش، أدوات خشبية.

## الألوان المتناسقة

الألوان تؤثر على الشهية. الأخضر والأحمر يعززان الشهية. الأزرق يقللها. اختر ألوان الخلفية والإكسسوارات بعناية.

## السرعة مهمة

الطعام يفقد جاذبيته بسرعة. الآيس كريم يذوب، البخار يختفي. جهز كل شيء مسبقاً وصوّر بسرعة.

## الخدع الاحترافية

رشة ماء على الخضار تجعلها طازجة. الزيت يعطي لمعاناً. بخاخ الجلسرين يخلق قطرات ماء ثابتة.

## الخلاصة

تصوير الطعام يتطلب ممارسة. ابدأ بوجباتك اليومية وطور مهاراتك تدريجياً.`,category:"تقنيات",author:{name:"هاني الشمري",avatar:"https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face",role:"مصور طعام"},image:"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&h=400&fit=crop",date:"2025-12-25",readTime:"8 دقائق للقراءة",featured:!1,tags:["تصوير طعام","تنسيق","إضاءة"]},{id:10,slug:"wildlife-photography-tips",title:"تصوير الحياة البرية: كيف تلتقط عجائب الطبيعة",excerpt:"دليل شامل لتصوير الحيوانات في بيئتها الطبيعية مع نصائح للمعدات والتقنيات.",content:`تصوير الحياة البرية تحدٍ مثير يجمع بين المغامرة والفن. كل صورة ناجحة هي نتيجة ساعات من الانتظار والصبر.

## المعدات الأساسية

عدسة تليفوتو طويلة (200-600mm) ضرورية للاقتراب دون إزعاج الحيوانات. حامل أحادي أو ثلاثي للثبات. كاميرا سريعة في التركيز.

## فهم سلوك الحيوان

ادرس الحيوان الذي تريد تصويره. اعرف أوقات نشاطه، أماكن تواجده، وسلوكياته. هذه المعرفة توقعك للحظة المثالية.

## الصبر والانتظار

الحياة البرية لا تنتظرك. قد تقضي ساعات دون نتيجة. استمتع بالوقت في الطبيعة واعتبر كل لقطة مكافأة.

## احترام الحيوانات

لا تقترب كثيراً. لا تطعم الحيوانات. لا تزعجها لتحصل على صورة. رفاهية الحيوان أهم من أي صورة.

## الإضاءة والتوقيت

الصباح الباكر والمساء أفضل الأوقات. الحيوانات أكثر نشاطاً والضوء أجمل. تجنب منتصف النهار.

## إعدادات الكاميرا

سرعة غالق عالية (1/500 أو أسرع) لتجميد الحركة. تركيز مستمر (AF-C) لمتابعة الحيوان. وضع التصوير المتتابع للحظات السريعة.

## الخلاصة

تصوير الحياة البرية رحلة طويلة من التعلم. كل يوم في الطبيعة يعلمك شيئاً جديداً عن عالم الحيوان.`,category:"مناظر طبيعية",author:{name:"عمر الراشد",avatar:"https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face",role:"مصور حياة برية"},image:"https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&h=400&fit=crop",date:"2025-12-22",readTime:"10 دقائق للقراءة",featured:!1,tags:["حياة برية","طبيعة","حيوانات"]},{id:11,slug:"black-white-photography",title:"التصوير بالأبيض والأسود: فن الضوء والظل",excerpt:"اكتشف جمال التصوير أحادي اللون وكيفية إنشاء صور قوية بدون ألوان.",content:`التصوير بالأبيض والأسود يجرد الصورة من الألوان ليكشف عن جوهرها: الضوء والظل والشكل والعاطفة.

## لماذا الأبيض والأسود؟

إزالة الألوان تزيل التشتت وتركز الانتباه على العناصر الأساسية: التكوين، الملمس، التباين، والتعبير. بعض المشاهد تتحدث بقوة أكبر بدون ألوان.

## متى تختار الأبيض والأسود

المشاهد ذات التباين العالي، الملمس الغني، والأشكال القوية. البورتريهات العاطفية. المشاهد المعمارية. الطقس الدرامي.

## التفكير بالأبيض والأسود

تعلم رؤية المشهد بدرجات الرمادي. ما الذي سيصبح أبيض؟ أسود؟ رمادي متوسط؟ هذه الرؤية تأتي مع الممارسة.

## التعريض الصحيح

التحكم في مدى درجات الرمادي مهم. استخدم الهيستوجرام للتأكد من وجود تفاصيل في الأبيض والأسود. تجنب الإفراط في التعريض.

## المعالجة اللاحقة

التحويل إلى أبيض وأسود ليس مجرد إزالة التشبع. تحكم في كيفية تحول كل لون إلى درجة رمادية. جرب الفلاتر الافتراضية.

## الإلهام

ادرس أعمال عمالقة الأبيض والأسود: Ansel Adams، Henri Cartier-Bresson، Sebastião Salgado. تعلم من رؤيتهم الفريدة.

## الخلاصة

الأبيض والأسود ليس غياباً للون، بل حضوراً قوياً للضوء. جربه واكتشف عالماً جديداً من الجمال.`,category:"تقنيات",author:{name:"فارس العلي",avatar:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop&crop=face",role:"فنان فوتوغرافي"},image:"https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=800&h=400&fit=crop",date:"2025-12-20",readTime:"9 دقائق للقراءة",featured:!1,tags:["أبيض وأسود","تباين","فن"]},{id:12,slug:"photo-editing-lightroom",title:"أساسيات تعديل الصور في Lightroom",excerpt:"تعلم كيفية استخدام Adobe Lightroom لتحسين صورك وإنشاء أسلوب بصري مميز.",content:`Lightroom هو المعيار الذهبي لتعديل الصور. سواء كنت مبتدئاً أو محترفاً، هذا البرنامج يوفر كل ما تحتاجه.

## استيراد وتنظيم

ابدأ بإنشاء نظام تنظيم فعال. استخدم الكلمات المفتاحية، التقييمات، والمجموعات. التنظيم الجيد يوفر ساعات لاحقاً.

## التعديلات الأساسية

ابدأ بتصحيح التعريض وتوازن اللون الأبيض. ثم التباين والإبرازات والظلال. هذه التعديلات الأساسية تحسن معظم الصور.

## منحنى الدرجات

أداة قوية للتحكم الدقيق في التباين والألوان. منحنى S الخفيف يضيف عمقاً. تعلم استخدام منحنيات RGB الفردية.

## HSL والألوان

تحكم في كل لون على حدة: تشبعه، سطوعه، وتدرجه. هذا يعطيك سيطرة إبداعية كاملة على مظهر الصورة.

## الحدة وتقليل الضوضاء

كل صورة تحتاج قدراً من الحدة. قلل الضوضاء في صور ISO العالي. التوازن مهم - لا تفرط.

## الأسلوب الشخصي

طور أسلوباً بصرياً مميزاً. احفظه كـ Preset واستخدمه كنقطة بداية. أسلوبك يميز عملك عن الآخرين.

## الخلاصة

تعديل الصور جزء أساسي من التصوير الرقمي. تعلم Lightroom استثمار سيرافقك طوال رحلتك الفوتوغرافية.`,category:"معدات",author:{name:"سامي الحربي",avatar:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop&crop=face",role:"خبير تعديل صور"},image:"https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&h=400&fit=crop",date:"2025-12-18",readTime:"12 دقائق للقراءة",featured:!1,tags:["Lightroom","تعديل صور","برامج"]},{id:13,slug:"macro-photography-world",title:"عالم التصوير الماكرو: اكتشف التفاصيل الخفية",excerpt:"انغمس في عالم التصوير المقرب واكتشف جمال التفاصيل الصغيرة التي تفوتنا بالعين المجردة.",content:`التصوير الماكرو يكشف عالماً خفياً من الجمال. قطرات الندى، عيون الحشرات، بتلات الزهور - تفاصيل لا تراها العين المجردة.

## المعدات المتخصصة

عدسة ماكرو حقيقية (نسبة 1:1) هي الأفضل. البديل: أنابيب التمديد أو العدسات المقربة. الإضاءة الحلقية مفيدة جداً.

## تحديات عمق الميدان

عمق الميدان ضحل جداً في الماكرو. حتى f/16 قد لا تكفي. التقنية: Focus Stacking - عدة صور بتركيزات مختلفة تدمج في واحدة.

## الإضاءة الدقيقة

الضوء الطبيعي المنتشر مثالي. استخدم عاكسات صغيرة. فلاش الماكرو أو LED يوفر تحكماً أكبر. تجنب الظلال القاسية.

## الثبات المطلق

أي اهتزاز يدمر الصورة. حامل ثلاثي ثقيل، جهاز تحكم عن بعد، قفل المرآة. بعض المصورين يحبسون أنفاسهم!

## إيجاد المواضيع

الطبيعة مليئة بالمواضيع. الحشرات في الصباح الباكر (بطيئة من البرد)، الزهور بعد المطر، الأوراق الخريفية. انظر للأسفل أكثر.

## الصبر والمثابرة

الماكرو يتطلب صبراً استثنائياً. الحشرة تطير، الريح تحرك الزهرة. استمر في المحاولة.

## الخلاصة

الماكرو يغير طريقة رؤيتك للعالم. فجأة، حديقتك تصبح غابة استوائية مليئة بالعجائب.`,category:"تقنيات",author:{name:"رامي الخطيب",avatar:"https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?w=100&h=100&fit=crop&crop=face",role:"مصور ماكرو"},image:"https://images.unsplash.com/photo-1550159930-40066082a4fc?w=800&h=400&fit=crop",date:"2025-12-15",readTime:"10 دقائق للقراءة",featured:!1,tags:["ماكرو","تفاصيل","حشرات"]},{id:14,slug:"long-exposure-photography",title:"التعريض الطويل: كيف تصور الحركة والزمن",excerpt:"تعلم تقنيات التعريض الطويل لإنشاء صور إبداعية تظهر الحركة بطريقة فنية ساحرة.",content:`التعريض الطويل يحول الثواني إلى لوحات فنية. الماء يصبح حريراً، السيارات خطوطاً ضوئية، والغيوم أشرطة في السماء.

## المعدات الضرورية

حامل ثلاثي ثابت أساسي. فلاتر ND لتقليل الضوء في النهار. جهاز تحكم عن بعد لتجنب اهتزاز الكاميرا.

## حساب التعريض

فلتر ND 10 stops يمدد التعريض 1000 مرة. إذا كان التعريض الطبيعي 1/125، يصبح 8 ثوانٍ. استخدم تطبيقات الحساب.

## مواضيع مثالية

الشلالات والأنهار تتحول لحرير. أضواء السيارات تخلق خطوطاً. الغيوم المتحركة تضيف دراما. البحر يصبح ضباباً.

## التركيز قبل الفلتر

ركز قبل وضع فلتر ND الداكن. الكاميرا لا ترى من خلاله. استخدم التركيز اليدوي ولا تغيره بعد وضع الفلتر.

## التجربة والتعلم

لا يوجد تعريض مثالي لكل مشهد. جرب أوقاتاً مختلفة. راجع النتائج على الشاشة. عدّل وكرر.

## الإبداع بلا حدود

جرب التصوير في أوقات مختلفة: غروب الشمس، الساعة الزرقاء، الليل. كل وقت يعطي نتائج مختلفة.

## الخلاصة

التعريض الطويل يعلمك رؤية العالم بطريقة مختلفة. الزمن يصبح مادة تشكلها بإبداعك.`,category:"إضاءة",author:{name:"باسم المصري",avatar:"https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?w=100&h=100&fit=crop&crop=face",role:"مصور فني"},image:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=400&fit=crop",date:"2025-12-12",readTime:"8 دقائق للقراءة",featured:!1,tags:["تعريض طويل","ND فلتر","إبداع"]},{id:15,slug:"wedding-photography-guide",title:"تصوير حفلات الزفاف: دليل المصور المحترف",excerpt:"تعلم أساسيات تصوير حفلات الزفاف من التحضير إلى تسليم الصور النهائية.",content:`تصوير الزفاف مسؤولية كبيرة. يوم لا يتكرر، لحظات لا تعود، وذكريات ستبقى للأبد. الضغط عالٍ لكن المكافأة أكبر.

## التحضير المسبق

اجتمع مع العروسين. افهم توقعاتهم ورؤيتهم. زر الموقع مسبقاً. اعرف جدول اليوم بالتفصيل.

## المعدات والنسخ الاحتياطي

كاميرتان على الأقل. عدسات متنوعة (24-70, 70-200, 35, 85). فلاشات متعددة. بطاريات وكروت ذاكرة إضافية. لا مجال للفشل.

## اللحظات الرئيسية

التحضيرات، الدخلة، القبلة الأولى، الرقصة الأولى، قطع الكيك، رمي الباقة. كن جاهزاً لكل لحظة ولا تفوت أياً منها.

## العمل مع الضوء

الكنائس والقاعات غالباً ذات إضاءة صعبة. تعلم استخدام الفلاش المرتد. ابحث عن مصادر الضوء الطبيعي.

## التعامل مع الناس

أنت قائد لجلسات التصوير الجماعية. كن حازماً لكن لطيفاً. اعرف أسماء أفراد العائلة المهمين.

## المعالجة والتسليم

آلاف الصور تحتاج فرزاً وتعديلاً. ضع جدولاً زمنياً واقعياً. التسليم في الوقت المحدد يبني سمعتك.

## الخلاصة

تصوير الزفاف يجمع كل مهارات التصوير. إنه تحدٍ كبير لكنه أيضاً فرصة لخلق فن يدوم للأجيال.`,category:"بورتريه",author:{name:"منصور الزهراني",avatar:"https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=100&h=100&fit=crop&crop=face",role:"مصور زفاف"},image:"https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=400&fit=crop",date:"2025-12-10",readTime:"11 دقائق للقراءة",featured:!1,tags:["زفاف","مناسبات","احترافي"]},{id:16,slug:"drone-photography-basics",title:"التصوير بالدرون: منظور جديد للعالم",excerpt:"اكتشف عالم التصوير الجوي وتعلم أساسيات استخدام الدرون لالتقاط صور من زوايا فريدة.",content:`التصوير بالدرون يفتح آفاقاً جديدة. زوايا كانت مستحيلة أصبحت في متناول يدك. منظور الطائر يكشف جمالاً مخفياً.

## اختيار الدرون المناسب

DJI تقود السوق بموديلات مثل Mini و Air و Mavic. الكاميرا، وقت الطيران، والثبات عوامل مهمة. ابدأ بدرون للمبتدئين.

## القوانين واللوائح

اعرف قوانين بلدك. معظم الدول تتطلب تسجيلاً ورخصة. مناطق ممنوعة حول المطارات والمنشآت الحكومية. الجهل بالقانون لا يعفيك.

## التحكم والطيران

تدرب في مناطق مفتوحة أولاً. تعلم الإقلاع والهبوط بسلاسة. فهم أوضاع الطيران المختلفة. الممارسة تصنع الإتقان.

## التكوين من الأعلى

الأنماط والأشكال تبدو مختلفة من الأعلى. ابحث عن التماثل، الخطوط التوجيهية، والتباينات. الظلال تصبح عناصر تكوين.

## التوقيت والإضاءة

الساعة الذهبية من الجو أكثر سحراً. الظلال الطويلة تضيف عمقاً. يوم غائم يعطي إضاءة متساوية جيدة.

## السلامة أولاً

لا تطر فوق الناس. راقب البطارية دائماً. عد للمنزل قبل نفاد الطاقة. الطقس العاصف خطير.

## الخلاصة

الدرون أداة إبداعية قوية. استخدمها بمسؤولية واكتشف عالماً جديداً من الجمال.`,category:"معدات",author:{name:"فيصل الدوسري",avatar:"https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=100&h=100&fit=crop&crop=face",role:"مصور جوي"},image:"https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=400&fit=crop",date:"2025-12-08",readTime:"9 دقائق للقراءة",featured:!1,tags:["درون","تصوير جوي","DJI"]},{id:17,slug:"product-photography-essentials",title:"تصوير المنتجات: أساسيات التصوير التجاري",excerpt:"تعلم كيفية تصوير المنتجات بشكل احترافي لمتجرك الإلكتروني أو عملائك التجاريين.",content:`تصوير المنتجات فن يجمع بين الدقة التقنية والإبداع البصري. صورة المنتج الجيدة تبيع نفسها.

## إعداد الاستوديو

لا تحتاج استوديو ضخم. طاولة بيضاء، خلفية بيضاء أو رمادية، وإضاءة جيدة كافية للبداية. صندوق الضوء (Light Box) خيار ممتاز للمنتجات الصغيرة.

## الإضاءة المثالية

الإضاءة الناعمة المنتشرة تزيل الظلال القاسية. استخدم سوفت بوكس أو شراشف بيضاء لتنعيم الضوء. الإضاءة من الجانب تبرز الملمس والتفاصيل.

## الخلفية والتنسيق

الخلفية البيضاء النظيفة معيار التجارة الإلكترونية. لكن لا تخف من التجربة: الخشب، الرخام، أو الأقمشة يمكن أن تضيف شخصية للمنتج.

## الزوايا المتعددة

صور المنتج من عدة زوايا: أمامية، جانبية، من الأعلى، وتفاصيل مقربة. العميل يريد رؤية كل شيء قبل الشراء.

## التعديل والتنقيح

إزالة الغبار والعيوب الصغيرة ضرورية. تصحيح الألوان لتطابق المنتج الحقيقي. الاتساق في الأسلوب عبر كل المنتجات.

## الخلاصة

تصوير المنتجات استثمار يعود بأضعاف. صور احترافية تعني ثقة أكبر ومبيعات أعلى.`,category:"تقنيات",author:{name:"لؤي الصالح",avatar:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face",role:"مصور تجاري"},image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=400&fit=crop",date:"2025-12-05",readTime:"8 دقائق للقراءة",featured:!1,tags:["تصوير منتجات","تجاري","استوديو"]},{id:18,slug:"architecture-photography",title:"تصوير العمارة: كيف تلتقط روح المباني",excerpt:"اكتشف تقنيات تصوير المباني والهندسة المعمارية بطريقة فنية تبرز جمالها وتفاصيلها.",content:`تصوير العمارة يحول المباني إلى أعمال فنية. الخطوط والأشكال والضوء والظل تتراقص معاً لتخلق صوراً آسرة.

## العدسات المناسبة

عدسة واسعة الزاوية (16-35mm) أساسية لالتقاط المباني الكاملة. عدسة Tilt-Shift تصحح التشوه وتبقي الخطوط مستقيمة. التليفوتو لتفاصيل الواجهات.

## التعامل مع التشوه

الخطوط المائلة مشكلة شائعة. صور من منتصف ارتفاع المبنى إن أمكن. أو صحح التشوه في مرحلة ما بعد المعالجة.

## الإضاءة والتوقيت

الضوء الجانبي يبرز الملمس والعمق. الساعة الزرقاء مثالية للمباني المضاءة. النهار الغائم يعطي إضاءة ناعمة متساوية.

## الخطوط والأشكال

ابحث عن الأنماط المتكررة، التماثل، والخطوط التوجيهية. الهندسة المعمارية غنية بعناصر التكوين الطبيعية.

## التفاصيل المعمارية

لا تكتفِ بالصورة الشاملة. اقترب من التفاصيل: النوافذ، الأعمدة، الزخارف، السلالم. كل تفصيل يحكي قصة.

## الخلاصة

تصوير العمارة يعلمك رؤية الجمال في المألوف. كل مبنى له شخصية تنتظر أن تُكتشف.`,category:"مناظر طبيعية",author:{name:"طارق النعيمي",avatar:"https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=100&h=100&fit=crop&crop=face",role:"مصور معماري"},image:"https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=400&fit=crop",date:"2025-12-02",readTime:"9 دقائق للقراءة",featured:!1,tags:["عمارة","مباني","هندسة"]},{id:19,slug:"sports-action-photography",title:"تصوير الرياضة والحركة: تجميد اللحظة الحاسمة",excerpt:"تعلم تقنيات تصوير الأحداث الرياضية والحركة السريعة بوضوح ودقة احترافية.",content:`تصوير الرياضة يتطلب سرعة البديهة والمعدات المناسبة. لحظة الانتصار أو الهزيمة تحدث في جزء من الثانية.

## المعدات السريعة

كاميرا بتركيز تلقائي سريع ومعدل تصوير متتابع عالي (10+ صور/ثانية). عدسات تليفوتو سريعة (70-200 f/2.8، 400 f/2.8). بطاقات ذاكرة سريعة.

## إعدادات الكاميرا

سرعة غالق 1/1000 ثانية على الأقل لتجميد الحركة. تركيز مستمر (AF-C) مع تتبع. ISO تلقائي مع حد أقصى. وضع التصوير المتتابع.

## توقع الحركة

اعرف اللعبة. توقع أين ستكون اللحظة الحاسمة. ركز مسبقاً على تلك النقطة. الخبرة تبني هذا الحدس.

## الموقع والزاوية

ابحث عن موقع يتيح خلفية نظيفة. ضوء الشمس خلفك أو جانبياً. زاوية منخفضة تجعل الرياضي يبدو أكثر قوة.

## التعبيرات والعواطف

ليست الحركة فقط مهمة. ابحث عن لحظات العاطفة: الفرح، الألم، التركيز. هذه هي الصور التي تبقى.

## الخلاصة

تصوير الرياضة ماراثون لا سباق قصير. كل مباراة فرصة للتعلم والتحسن. استمر في المحاولة.`,category:"بورتريه",author:{name:"أحمد الشهري",avatar:"https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?w=100&h=100&fit=crop&crop=face",role:"مصور رياضي"},image:"https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=400&fit=crop",date:"2025-11-28",readTime:"10 دقائق للقراءة",featured:!1,tags:["رياضة","حركة","سرعة"]},{id:20,slug:"flash-photography-basics",title:"أساسيات التصوير بالفلاش: تحكم كامل في الإضاءة",excerpt:"افهم كيفية استخدام الفلاش الخارجي لإنشاء إضاءة احترافية في أي موقف.",content:`الفلاش أداة قوية تحررك من قيود الإضاءة المتاحة. مع الفهم الصحيح، يصبح أفضل صديق للمصور.

## أنواع الفلاش

الفلاش المدمج محدود القوة والمرونة. الفلاش الخارجي (Speedlight) أقوى ويمكن توجيهه. فلاشات الاستوديو للتحكم الكامل.

## الفلاش المرتد

لا توجه الفلاش مباشرة للوجه. ارتده عن السقف أو الجدار للحصول على ضوء ناعم طبيعي. السقف الأبيض أفضل عاكس.

## TTL مقابل Manual

TTL يقيس الضوء تلقائياً - سريع ومريح. الوضع اليدوي يعطي تحكماً كاملاً ونتائج متسقة. تعلم كليهما.

## موازنة الفلاش مع المحيط

الفلاش لا يجب أن يطغى على الإضاءة الطبيعية. قلل قوته ليكمل الضوء المتاح بدلاً من استبداله.

## High-Speed Sync

للتصوير بسرعة غالق أعلى من سرعة المزامنة، فعّل HSS. مفيد لملء الظلال في ضوء الشمس القوي.

## الخلاصة

الفلاش يفتح إمكانيات لا حدود لها. ابدأ بالأساسيات ثم تعمق تدريجياً. الممارسة هي المفتاح.`,category:"إضاءة",author:{name:"ماجد القحطاني",avatar:"https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=100&h=100&fit=crop&crop=face",role:"مصور استوديو"},image:"https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=400&fit=crop",date:"2025-11-25",readTime:"8 دقائق للقراءة",featured:!1,tags:["فلاش","إضاءة صناعية","Speedlight"]},{id:21,slug:"travel-photography-tips",title:"تصوير السفر: كيف توثق رحلاتك بصور لا تُنسى",excerpt:"نصائح عملية لتصوير السفر تساعدك على التقاط جوهر كل مكان تزوره.",content:`تصوير السفر يجمع كل أنواع التصوير: مناظر طبيعية، شوارع، بورتريهات، طعام، وعمارة. كل رحلة فرصة للتعلم.

## التحضير للرحلة

ابحث عن وجهتك مسبقاً. اعرف أفضل مواقع التصوير وأوقاتها. لكن كن مستعداً للمفاجآت - أجمل الصور غالباً غير مخططة.

## المعدات الخفيفة

السفر يعني المشي كثيراً. كاميرا واحدة وعدستان كافية لمعظم الحالات. حقيبة مريحة وخفيفة ضرورية.

## احترام الثقافة المحلية

استأذن قبل تصوير الناس. احترم الأماكن المقدسة. تعلم بضع كلمات من اللغة المحلية. التواصل يفتح الأبواب.

## استيقظ مبكراً

أفضل الضوء وأقل الزحام في الصباح الباكر. التضحية بساعات النوم تستحق للحصول على صور فريدة.

## احكِ قصة

لا تصور المعالم فقط. صور الحياة اليومية، الطعام المحلي، التفاصيل الصغيرة. هذه هي روح المكان.

## الخلاصة

تصوير السفر يجعل الرحلة أكثر عمقاً. تنظر أكثر، تلاحظ أكثر، تتذكر أكثر. السفر بكاميرا تجربة مختلفة تماماً.`,category:"مناظر طبيعية",author:{name:"ياسر العتيبي",avatar:"https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=100&h=100&fit=crop&crop=face",role:"مصور رحالة"},image:"https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=400&fit=crop",date:"2025-11-22",readTime:"9 دقائق للقراءة",featured:!1,tags:["سفر","رحلات","توثيق"]},{id:22,slug:"color-theory-photography",title:"نظرية الألوان في التصوير: كيف تستخدم الألوان بذكاء",excerpt:"افهم كيف تؤثر الألوان على مشاعر المشاهد وكيف تستخدمها لتعزيز صورك.",content:`الألوان لغة بصرية قوية. فهمها يرفع صورك من الجيدة إلى الاستثنائية.

## عجلة الألوان

الألوان الأساسية (أحمر، أزرق، أصفر) والثانوية (برتقالي، أخضر، بنفسجي). الألوان المتقابلة تخلق تبايناً قوياً. المتجاورة تخلق انسجاماً.

## سيكولوجية الألوان

الأحمر: طاقة وعاطفة. الأزرق: هدوء وثقة. الأخضر: طبيعة وتوازن. الأصفر: سعادة وتفاؤل. استخدم هذه المعاني في صورك.

## التباين اللوني

الألوان المتقابلة (أحمر/أخضر، أزرق/برتقالي) تجذب الانتباه. استخدمها لإبراز موضوعك أو خلق دراما بصرية.

## الانسجام اللوني

الألوان المتقاربة تخلق شعوراً بالوحدة والهدوء. مناسبة للصور الهادئة والتأملية.

## درجات الحرارة اللونية

الألوان الدافئة (أحمر، برتقالي) تقدم للأمام. الباردة (أزرق، أخضر) تتراجع. استخدم هذا لخلق عمق.

## الخلاصة

الوعي بالألوان يغير طريقة رؤيتك وتصويرك. ابدأ بملاحظة الألوان في كل مكان حولك.`,category:"تقنيات",author:{name:"دحام الحسيني",avatar:"https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=100&h=100&fit=crop&crop=face",role:"فنان بصري"},image:"https://images.unsplash.com/photo-1502691876148-a84978e59af8?w=800&h=400&fit=crop",date:"2025-11-18",readTime:"7 دقائق للقراءة",featured:!1,tags:["ألوان","نظرية","تكوين"]},{id:23,slug:"newborn-baby-photography",title:"تصوير المواليد: فن التقاط البراءة",excerpt:"تعلم تقنيات تصوير الأطفال حديثي الولادة بأمان واحترافية.",content:`تصوير المواليد تخصص رقيق يتطلب صبراً وحذراً ومهارة. كل طفل فريد وكل جلسة مغامرة جديدة.

## السلامة أولاً

سلامة الطفل فوق كل اعتبار. لا تضعه في أوضاع غير آمنة. اغسل يديك دائماً. حافظ على دفء الغرفة (حوالي 26-28 درجة).

## التوقيت المثالي

أفضل عمر للتصوير: 5-14 يوم. الطفل لا يزال نعساً ومرناً. بعد ذلك يصبح أكثر يقظة وصعوبة في الوضعيات.

## البيئة المريحة

ضوضاء بيضاء تهدئ الطفل. إضاءة ناعمة طبيعية. تجنب الفلاش. اجعل الأهل قريبين للراحة النفسية.

## الأوضاع الآمنة

وضع السلة والتكور الكلاسيكي آمن ومحبوب. تجنب الأوضاع المعقدة التي تراها في Pinterest - كثير منها مركب في الفوتوشوب.

## الإكسسوارات والألوان

ألوان هادئة وإكسسوارات بسيطة. الطفل هو النجم. تجنب الإفراط في الديكور الذي يشتت الانتباه.

## الخلاصة

تصوير المواليد مسؤولية كبيرة ومكافأة أكبر. كل صورة ذكرى ستعتز بها العائلة للأبد.`,category:"بورتريه",author:{name:"نايف المطيري",avatar:"https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop&crop=face",role:"مصور مواليد"},image:"https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&h=400&fit=crop",date:"2025-11-15",readTime:"10 دقائق للقراءة",featured:!1,tags:["مواليد","أطفال","بورتريه"]},{id:24,slug:"real-estate-photography",title:"تصوير العقارات: كيف تجعل المنزل يبيع نفسه",excerpt:"تعلم تقنيات تصوير العقارات التي تجعل المنازل تبدو أفضل ما يمكن.",content:`تصوير العقارات مجال مربح ومطلوب. صورة جيدة يمكن أن تكون الفرق بين بيع سريع وعقار راكد.

## المعدات الأساسية

عدسة واسعة الزاوية (16-35mm) ضرورية لإظهار المساحات. حامل ثلاثي لصور حادة ومستوية. فلاش للتحكم في الإضاءة.

## تحضير المكان

نظف وأزل الفوضى. أضف لمسات بسيطة: زهور، مجلات، فوط مرتبة. افتح الستائر والأبواب لإظهار التدفق.

## الإضاءة المتوازنة

التحدي: موازنة ضوء النوافذ الساطع مع الداخل المظلم. استخدم HDR أو إضاءة إضافية. تجنب النوافذ المحترقة.

## الزوايا الصحيحة

صور من زاوية الغرفة لإظهار أكبر مساحة. ارتفاع الكاميرا حوالي 120 سم. أبقِ الخطوط العمودية مستقيمة.

## التصوير الخارجي

الساعة الزرقاء مع أضواء المنزل مضاءة تخلق صوراً دافئة ومرحبة. صور الحديقة والمسبح والمرافق.

## الخلاصة

تصوير العقارات يجمع بين التقنية والتسويق. افهم ما يريد المشتري رؤيته وقدمه بأفضل صورة.`,category:"تقنيات",author:{name:"عبدالله الغامدي",avatar:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face",role:"مصور عقارات"},image:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=400&fit=crop",date:"2025-11-12",readTime:"8 دقائق للقراءة",featured:!1,tags:["عقارات","تجاري","واسع الزاوية"]},{id:25,slug:"raw-vs-jpeg-explained",title:"RAW مقابل JPEG: متى تستخدم كلاً منهما",excerpt:"افهم الفرق بين صيغتي الصور الأكثر شيوعاً واختر الأنسب لاحتياجاتك.",content:`الجدل بين RAW و JPEG قديم قدم التصوير الرقمي. لكل منهما مكانه ووقته.

## ما هو RAW؟

RAW هو كل البيانات التي التقطها المستشعر بدون معالجة. ملف كبير يحتوي على أقصى معلومات ممكنة. يتطلب معالجة لاحقة.

## ما هو JPEG؟

JPEG ملف مضغوط ومعالج في الكاميرا. أصغر حجماً وجاهز للاستخدام مباشرة. لكنه يفقد بعض البيانات.

## مزايا RAW

مرونة هائلة في التعديل. تصحيح التعريض بسهولة. تعديل توازن اللون الأبيض بعد التصوير. استعادة تفاصيل من الظلال والإبرازات.

## مزايا JPEG

ملفات صغيرة = مساحة أكبر. جاهز للمشاركة مباشرة. معالجة الكاميرا غالباً ممتازة. مثالي للتصوير السريع والكميات الكبيرة.

## متى تستخدم كلاً منهما

RAW: التصوير الاحترافي، الإضاءة الصعبة، عندما تريد أقصى جودة. JPEG: اللقطات اليومية، المساحة محدودة، السرعة مطلوبة.

## الخلاصة

كثير من المصورين يصورون RAW+JPEG معاً. جرب كليهما واختر ما يناسب أسلوبك واحتياجاتك.`,category:"معدات",author:{name:"كريم الفهد",avatar:"https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=100&h=100&fit=crop&crop=face",role:"خبير تقني"},image:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop",date:"2025-11-08",readTime:"6 دقائق للقراءة",featured:!1,tags:["RAW","JPEG","صيغ الصور"]},{id:26,slug:"self-portrait-photography",title:"تصوير البورتريه الذاتي: كن موضوعك الخاص",excerpt:"تعلم كيف تصور نفسك بشكل احترافي وإبداعي دون الحاجة لمساعد.",content:`البورتريه الذاتي فن قديم تجدد بالتصوير الفوتوغرافي. أنت المصور والموديل معاً.

## لماذا البورتريه الذاتي؟

تدريب مجاني متاح دائماً. استكشاف الذات والتعبير الفني. تطوير مهاراتك في الإضاءة والتكوين والتعديل.

## المعدات اللازمة

حامل ثلاثي ثابت. جهاز تحكم عن بعد أو مؤقت ذاتي. مرآة لمراقبة الوضعية. تطبيق التحكم بالكاميرا على الهاتف مفيد جداً.

## التركيز بدونك

ضع شيئاً في مكانك للتركيز عليه (كرسي، وسادة). استخدم التركيز اليدوي وثبته. أو استخدم وضع تتبع العين إن كان متاحاً.

## الإضاءة والوضعيات

جرب بحرية. لا أحد ينتظرك. العب مع الضوء والظلال. جرب تعابير وأوضاع لن تطلبها من شخص آخر.

## التعديل والأسلوب

البورتريه الذاتي مساحة للتجربة. جرب أساليب تعديل جديدة. طور صوتك البصري الخاص.

## الخلاصة

البورتريه الذاتي رحلة اكتشاف ذات. كل صورة تعلمك شيئاً عن نفسك وعن فنك.`,category:"بورتريه",author:{name:"سلطان الراجحي",avatar:"https://images.unsplash.com/photo-1557862921-37829c790f19?w=100&h=100&fit=crop&crop=face",role:"فنان تصوير"},image:"https://images.unsplash.com/photo-1554080353-a576cf803bda?w=800&h=400&fit=crop",date:"2025-11-05",readTime:"7 دقائق للقراءة",featured:!1,tags:["بورتريه ذاتي","إبداع","تعبير"]},{id:27,slug:"lens-guide-beginners",title:"دليل العدسات للمبتدئين: كيف تختار عدستك الأولى",excerpt:"افهم أنواع العدسات المختلفة واختر الأنسب لأسلوب تصويرك واحتياجاتك.",content:`العدسة أهم من الكاميرا في كثير من الأحيان. فهم العدسات يساعدك على اتخاذ قرارات شراء حكيمة.

## البعد البؤري

يُقاس بالمليمتر (mm). الأرقام الصغيرة = زاوية واسعة. الأرقام الكبيرة = تقريب. 50mm تقريباً ما تراه العين البشرية.

## فتحة العدسة

f/1.8 أكبر من f/4. فتحة أكبر = ضوء أكثر + خلفية أكثر ضبابية. العدسات السريعة (f/1.4-f/2.8) أغلى وأكبر.

## عدسة الـ 50mm

النيفتي فيفتي (50mm f/1.8) أفضل استثمار للمبتدئين. رخيصة، خفيفة، وتعطي نتائج رائعة. تعلمك الحركة والتكوين.

## العدسات الزوم مقابل الثابتة

الزوم مرنة وعملية. الثابتة (Prime) أخف وأسرع وأحد. للتعلم، الثابتة تجبرك على التفكير أكثر.

## العدسات حسب التخصص

بورتريه: 85mm. مناظر: 16-35mm. ماكرو: عدسة ماكرو مخصصة. حياة برية: 100-400mm.

## الخلاصة

لا تشترِ عدسات لا تحتاجها. ابدأ بعدسة واحدة واتقنها قبل الانتقال للتالية. العدسة الأفضل هي التي تستخدمها.`,category:"معدات",author:{name:"فهد السبيعي",avatar:"https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=100&h=100&fit=crop&crop=face",role:"مراجع معدات"},image:"https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=800&h=400&fit=crop",date:"2025-11-02",readTime:"9 دقائق للقراءة",featured:!1,tags:["عدسات","معدات","مبتدئين"]},{id:28,slug:"minimalist-photography",title:"التصوير البسيط (Minimalist): قوة الفراغ",excerpt:"اكتشف جمال البساطة في التصوير وكيف تخلق صوراً قوية بعناصر قليلة.",content:`الأقل هو الأكثر. التصوير البسيط يزيل كل ما هو غير ضروري ليتحدث الجوهر.

## فلسفة البساطة

كل عنصر في الصورة يجب أن يكون له غرض. إذا لم يضف شيئاً، فهو يطرح. الفراغ ليس خالياً - إنه يتنفس.

## المساحة السلبية

الفراغ حول الموضوع يعطيه قوة وهيبة. لا تخف من ترك 80% من الإطار فارغاً. الموضوع الصغير في فراغ كبير يجذب الانتباه.

## الخطوط والأشكال

التصوير البسيط يعتمد على الهندسة. خط واحد، شكل واحد، نمط متكرر. البساطة في العناصر، القوة في التنفيذ.

## الألوان المحدودة

ألوان قليلة أو لون واحد. الأبيض والأسود طبيعي للبساطة. لون واحد مع خلفية محايدة.

## إيجاد المواضيع

المباني الحديثة، السماء الفارغة، الأشياء اليومية المعزولة. البساطة في كل مكان لمن يعرف كيف ينظر.

## الخلاصة

التصوير البسيط ليس سهلاً. إزالة العناصر أصعب من إضافتها. لكن النتيجة صور لا تُنسى.`,category:"تقنيات",author:{name:"راشد الجاسر",avatar:"https://images.unsplash.com/photo-1545167622-3a6ac756afa4?w=100&h=100&fit=crop&crop=face",role:"فنان بصري"},image:"https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&h=400&fit=crop",date:"2025-10-28",readTime:"6 دقائق للقراءة",featured:!1,tags:["بساطة","Minimalist","تكوين"]}]};return f.jsxs(f.Fragment,{children:[f.jsx(py,{}),f.jsx(gy,{}),f.jsx(xy,{posts:i.posts}),f.jsx(yy,{})]})}function by(){return f.jsxs("div",{className:"min-h-screen bg-black flex flex-col items-center justify-center text-white gap-6",children:[f.jsx("i",{className:"fa-solid fa-circle-xmark text-[90px] text-proj"}),f.jsx("h1",{className:"text-[120px] font-extrabold tracking-widest",children:"404"}),f.jsx("p",{className:"text-xl font-semibold text-gray-400",children:"والله يخويا دي مش موجوده بس ممكن تجرب دول"}),f.jsxs("div",{className:"flex gap-6 items-center mt-5",children:[f.jsx(ja,{to:"/",className:"mt-4 px-8 py-3 rounded-xl bg-proj text-white text-xl font-bold hover:scale-105 transition-all",children:"Go Home"}),f.jsx(ja,{to:"/blog",className:"mt-4 px-8 py-3 rounded-xl bg-proj text-white text-xl font-bold hover:scale-105 transition-all",children:"Blog"}),f.jsx(ja,{to:"/weare",className:"mt-4 px-8 py-3 rounded-xl bg-proj text-white text-xl font-bold hover:scale-105 transition-all",children:"Who We Are"})]})]})}function Sy(){const i=Gx([{path:"/",element:f.jsx(ay,{}),children:[{index:!0,element:f.jsx(sy,{})},{path:"blog",element:f.jsx(hy,{}),children:[{path:":slug",element:f.jsx(my,{})}]},{path:"weare",element:f.jsx(vy,{})},{path:"*",element:f.jsx(by,{})}]}]);return f.jsx(Ix,{router:i})}zg.createRoot(document.getElementById("root")).render(f.jsx(Sy,{}));
