/*! For license information please see index.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("vue")):"function"==typeof define&&define.amd?define(["vue"],e):"object"==typeof exports?exports["vue-history-cache"]=e(require("vue")):t["vue-history-cache"]=e(t.vue)}(self,(function(t){return(()=>{"use strict";var e={103:e=>{e.exports=t}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,r),i.exports}r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var o={};return(()=>{function t(t){return"function"==typeof t&&/native code/.test(t.toString())}r.r(o),r.d(o,{useHistoryStateCache:()=>yt}),r(103);var e="undefined"!=typeof Symbol&&t(Symbol)&&"undefined"!=typeof Reflect&&t(Reflect.ownKeys),n=function(t){return t};function i(t,e,r){var o=r.get,i=r.set;Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:o||n,set:i||n})}function u(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}function f(t,e){return Object.hasOwnProperty.call(t,e)}function a(t){return Array.isArray(t)}function c(t){return null!==t&&"object"==typeof t}function s(t){return"[object Object]"===function(t){return Object.prototype.toString.call(t)}(t)}function l(t){return"function"==typeof t}Object.prototype.toString;var p,v=function(t,e){return(v=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)};function y(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function d(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),u=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return u}function b(t,e){for(var n=0,r=e.length,o=t.length;n<r;n++,o++)t[o]=e[n];return t}var h,_=[],g=function(){function t(t){this.active=!0,this.effects=[],this.cleanups=[],this.vm=t}return t.prototype.run=function(t){if(this.active)try{return this.on(),t()}finally{this.off()}},t.prototype.on=function(){this.active&&(_.push(this),p=this)},t.prototype.off=function(){this.active&&(_.pop(),p=_[_.length-1])},t.prototype.stop=function(){this.active&&(this.vm.$destroy(),this.effects.forEach((function(t){return t.stop()})),this.cleanups.forEach((function(t){return t()})),this.active=!1)},t}();(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}v(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)})((function(t){void 0===t&&(t=!1);var e,n=void 0;return function(t){var e=S;S=!1;try{n=C(E())}finally{S=e}}(),e=h.call(this,n)||this,t||function(t,e){var n;if((e=e||p)&&e.active)e.effects.push(t);else{var r=null===(n=k())||void 0===n?void 0:n.proxy;r&&r.$on("hook:destroyed",(function(){return t.stop()}))}}(e),e}),h=g);var m=void 0;try{var O=r(103);O&&x(O)?m=O:O&&"default"in O&&x(O.default)&&(m=O.default)}catch(t){}var j=null,w=null,S=!0,$="__composition_api_installed__";function x(t){return t&&l(t)&&"Vue"===t.name}function E(){return j}function P(t){if(S){null==w||w.scope.off(),null==(w=t)||w.scope.on()}}function k(){return w}var M=new WeakMap;function A(t){if(M.has(t))return M.get(t);var e={proxy:t,update:t.$forceUpdate,uid:t._uid,emit:t.$emit.bind(t),parent:null,root:null};return function(t){if(!t.scope){var e=new g(t.proxy);t.scope=e,t.proxy.$on("hook:destroyed",(function(){return e.stop()}))}t.scope}(e),["data","props","attrs","refs","vnode","slots"].forEach((function(n){i(e,n,{get:function(){return t["$"+n]}})})),i(e,"isMounted",{get:function(){return t._isMounted}}),i(e,"isUnmounted",{get:function(){return t._isDestroyed}}),i(e,"isDeactivated",{get:function(){return t._inactive}}),i(e,"emitted",{get:function(){return t._events}}),M.set(t,e),t.$parent&&(e.parent=A(t.$parent)),t.$root&&(e.root=A(t.$root)),e}function C(t,e){void 0===e&&(e={});var n=t.config.silent;t.config.silent=!0;var r=new t(e);return t.config.silent=n,r}function D(t,e){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];if(t.$scopedSlots[e])return t.$scopedSlots[e].apply(t,n)}}function T(t){return e?Symbol.for(t):t}T("composition-api.preFlushQueue"),T("composition-api.postFlushQueue");var R="composition-api.refKey",U=new WeakMap,B=(new WeakMap,new WeakMap),V=function(t){i(this,"value",{get:t.get,set:t.set})};function W(t,e){var n=new V(t),r=Object.seal(n);return B.set(r,!0),r}function H(t){var e;if(I(t))return t;var n=J(((e={})[R]=t,e));return W({get:function(){return n[R]},set:function(t){return n[R]=t}})}function I(t){return t instanceof V}function K(t,e){var n=t[e];return I(n)?n:W({get:function(){return t[e]},set:function(n){return t[e]=n}})}function q(t){var e;return Boolean(t&&f(t,"__ob__")&&"object"==typeof t.__ob__&&(null===(e=t.__ob__)||void 0===e?void 0:e.__raw__))}function z(t){var e;return Boolean(t&&f(t,"__ob__")&&"object"==typeof t.__ob__&&!(null===(e=t.__ob__)||void 0===e?void 0:e.__raw__))}function F(t){if(!(!s(t)||q(t)||a(t)||I(t)||(r=t,o=E(),o&&r instanceof o)||U.has(t))){U.set(t,!0);for(var e=Object.keys(t),n=0;n<e.length;n++)L(t,e[n])}var r,o}function L(t,e,n){if("__ob__"!==e&&!q(t[e])){var r,o,u=Object.getOwnPropertyDescriptor(t,e);if(u){if(!1===u.configurable)return;r=u.get,o=u.set,r&&!o||2!==arguments.length||(n=t[e])}F(n),i(t,e,{get:function(){var o=r?r.call(t):n;return e!==R&&I(o)?o.value:o},set:function(i){r&&!o||(e!==R&&I(n)&&!I(i)?n.value=i:o?(o.call(t,i),n=i):n=i,F(i))}})}}function Q(t){var e,n=j||m;return f(e=n.observable?n.observable(t):C(n,{data:{$$state:t}})._data.$$state,"__ob__")||G(e),e}function G(t,e){var r,o;if(void 0===e&&(e=new Set),!e.has(t)){u(t,"__ob__",function(t){return void 0===t&&(t={}),{value:t,dep:{notify:n,depend:n,addSub:n,removeSub:n}}}(t)),e.add(t);try{for(var i=y(Object.keys(t)),f=i.next();!f.done;f=i.next()){var c=t[f.value];(s(c)||a(c))&&!q(c)&&Object.isExtensible(c)&&G(c,e)}}catch(t){r={error:t}}finally{try{f&&!f.done&&(o=i.return)&&o.call(i)}finally{if(r)throw r.error}}}}function J(t){if(!c(t))return t;if(!s(t)&&!a(t)||q(t)||!Object.isExtensible(t))return t;var e=Q(t);return F(e),e}function N(t){return function(e,n){var r,o=function(t,e){return e||k()}(((r=t)[0].toUpperCase(),r.slice(1)),n);return o&&function(t,e,n,r){var o=e.proxy.$options,i=t.config.optionMergeStrategies[n],u=function(t,e){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=k();P(t);try{return e.apply(void 0,b([],d(n)))}finally{P(o)}}}(e,r);return o[n]=i(o[n],u),u}(E(),o,t,e)}}N("beforeMount"),N("mounted"),N("beforeUpdate"),N("updated"),N("beforeDestroy");var X=N("destroyed");N("errorCaptured"),N("activated"),N("deactivated"),N("serverPrefetch");var Y=function(t,e,n){(t.__composition_api_state__=t.__composition_api_state__||{})[e]=n},Z=function(t,e){return(t.__composition_api_state__||{})[e]};function tt(t){var e=Z(t,"rawBindings")||{};if(e&&Object.keys(e).length){for(var n=t.$refs,r=Z(t,"refs")||[],o=0;o<r.length;o++){var i=e[a=r[o]];!n[a]&&i&&I(i)&&(i.value=null)}var u=Object.keys(n),f=[];for(o=0;o<u.length;o++){var a;i=e[a=u[o]],n[a]&&i&&I(i)&&(i.value=n[a],f.push(a))}Y(t,"refs",f)}}function et(t,e){var n=t.$options._parentVnode;if(n){for(var r=Z(t,"slots")||[],o=function(t,e){var n;if(t){if(t._normalized)return t._normalized;for(var r in n={},t)t[r]&&"$"!==r[0]&&(n[r]=!0)}else n={};for(var r in e)r in n||(n[r]=!0);return n}(n.data.scopedSlots,t.$slots),i=0;i<r.length;i++)o[f=r[i]]||delete e[f];var u=Object.keys(o);for(i=0;i<u.length;i++){var f;e[f=u[i]]||(e[f]=D(t,f))}Y(t,"slots",u)}}function nt(t,e,n){var r=k();P(t);try{return e(t)}catch(t){if(!n)throw t;n(t)}finally{P(r)}}function rt(t){function e(t,n){if(void 0===n&&(n=new Set),!n.has(t)&&s(t)&&!I(t)&&!z(t)&&!q(t)){var r=E().util.defineReactive;Object.keys(t).forEach((function(o){var i=t[o];r(t,o,i),i&&(n.add(i),e(i,n))}))}}function n(t,e){return void 0===e&&(e=new Map),e.has(t)?e.get(t):(e.set(t,!1),a(t)&&z(t)?(e.set(t,!0),!0):!(!s(t)||q(t)||I(t))&&Object.keys(t).some((function(r){return n(t[r],e)})))}t.mixin({beforeCreate:function(){var t=this,r=t.$options,o=r.setup,p=r.render;if(p&&(r.render=function(){for(var e=this,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return nt(A(t),(function(){return p.apply(e,n)}))}),o&&l(o)){var v=r.data;r.data=function(){return function(t,r){void 0===r&&(r={});var o,p=t.$options.setup,v=function(t){var e,n={slots:{}};return["root","parent","refs","listeners","isServer","ssrContext"].forEach((function(e){var r="$"+e;i(n,e,{get:function(){return t[r]},set:function(){}})})),["attrs"].forEach((function(r){var o="$"+r;i(n,r,{get:function(){var n,r;if(e)return e;e=J({});var u=t[o],f=function(n){i(e,n,{get:function(){return t[o][n]}})};try{for(var a=y(Object.keys(u)),c=a.next();!c.done;c=a.next())f(c.value)}catch(t){n={error:t}}finally{try{c&&!c.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}return e},set:function(){}})})),["emit"].forEach((function(e){var r="$"+e;i(n,e,{get:function(){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];t[r].apply(t,e)}}})})),n}(t),d=A(t);if(d.setupContext=v,u(r,"__ob__",Q({}).__ob__),et(t,v.slots),nt(d,(function(){o=p(r,v)})),o)if(l(o)){var b=o;t.$options.render=function(){return et(t,v.slots),nt(d,(function(){return b()}))}}else if(s(o)){z(o)&&(o=function(t){if(!s(t))return t;var e={};for(var n in t)e[n]=K(t,n);return e}(o)),Y(t,"rawBindings",o);var h=o;Object.keys(h).forEach((function(r){var o=h[r];if(!I(o))if(z(o))a(o)&&(o=H(o));else if(l(o)){var u=o;o=o.bind(t),Object.keys(u).forEach((function(t){o[t]=u[t]}))}else c(o)?n(o)&&e(o):o=H(o);!function(t,e,n){var r=t.$options.props;e in t||r&&f(r,e)||(I(n)?i(t,e,{get:function(){return n.value},set:function(t){n.value=t}}):i(t,e,{get:function(){return z(n)&&n.__ob__.dep.depend(),n},set:function(t){n=t}}))}(t,r,o)}))}else;}(t,t.$props),l(v)?v.call(t,t):v||{}}}},mounted:function(){tt(this)},updated:function(){var t;tt(this),(null===(t=this.$vnode)||void 0===t?void 0:t.context)&&tt(this.$vnode.context)}})}function ot(t,n){if(!t)return n;if(!n)return t;for(var r,o,i,u=e?Reflect.ownKeys(t):Object.keys(t),a=0;a<u.length;a++)"__ob__"!==(r=u[a])&&(o=n[r],i=t[r],f(n,r)?o!==i&&s(o)&&!I(o)&&s(i)&&!I(i)&&ot(i,o):n[r]=i);return n}function it(t){(function(t){return f(t,$)})(t)||(t.config.optionMergeStrategies.setup=function(t,e){return function(n,r){return ot(l(t)?t(n,r)||{}:void 0,l(e)?e(n,r)||{}:void 0)}},function(t){j=t,Object.defineProperty(t,$,{configurable:!0,writable:!0,value:!0})}(t),rt(t))}var ut={install:function(t){return it(t)}};function ft(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],u=!0,f=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);u=!0);}catch(t){f=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(f)throw o}}return i}}(t,e)||function(t,e){if(t){if("string"==typeof t)return at(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?at(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function at(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function ct(t){return(ct="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function st(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function lt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?st(Object(n),!0).forEach((function(e){pt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):st(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function pt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}"undefined"!=typeof window&&window.Vue&&window.Vue.use(ut);var vt={init:!1},yt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=lt(lt({},vt),e),r=function(){history&&history.state&&"object"===ct(history.state)&&Object.entries(history.state).forEach((function(e){var n=ft(e,2),r=n[0],o=n[1],i=t[r];i&&Object.entries(o).forEach((function(t){var e=ft(t,2),n=e[0],r=e[1];void 0!==i[n]&&(i[n]=r)}))}))},o=function(){var e=lt({},history.state);Object.entries(t).forEach((function(t){var n=ft(t,2),r=n[0],o=n[1];I(o)?e[r]={value:o.value}:e[r]=o})),history.replaceState(e,"","")};return n.init&&(r(),window.addEventListener("beforeunload",o),X((function(){window.removeEventListener("beforeunload",o)}))),{pickHistoryStateCache:r,cacheRefsToHistoryState:o}}})(),o})()}));
//# sourceMappingURL=index.js.map