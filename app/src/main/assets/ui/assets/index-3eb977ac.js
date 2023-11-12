(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Ul(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const at={},mr=[],xn=()=>{},Np=()=>!1,Op=/^on[^a-z]/,Ro=n=>Op.test(n),Il=n=>n.startsWith("onUpdate:"),wt=Object.assign,Nl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Fp=Object.prototype.hasOwnProperty,Qe=(n,e)=>Fp.call(n,e),Be=Array.isArray,gr=n=>Po(n)==="[object Map]",dh=n=>Po(n)==="[object Set]",We=n=>typeof n=="function",vt=n=>typeof n=="string",Co=n=>typeof n=="symbol",lt=n=>n!==null&&typeof n=="object",ph=n=>(lt(n)||We(n))&&We(n.then)&&We(n.catch),mh=Object.prototype.toString,Po=n=>mh.call(n),Bp=n=>Po(n).slice(8,-1),gh=n=>Po(n)==="[object Object]",Ol=n=>vt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Js=Ul(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Lo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},zp=/-(\w)/g,Ln=Lo(n=>n.replace(zp,(e,t)=>t?t.toUpperCase():"")),Hp=/\B([A-Z])/g,Cr=Lo(n=>n.replace(Hp,"-$1").toLowerCase()),Do=Lo(n=>n.charAt(0).toUpperCase()+n.slice(1)),na=Lo(n=>n?`on${Do(n)}`:""),Fi=(n,e)=>!Object.is(n,e),ia=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},co=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},kp=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Tc;const Qa=()=>Tc||(Tc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Fl(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=vt(i)?Xp(i):Fl(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(vt(n)||lt(n))return n}const Vp=/;(?![^(]*\))/g,Gp=/:([^]+)/,Wp=/\/\*[^]*?\*\//g;function Xp(n){const e={};return n.replace(Wp,"").split(Vp).forEach(t=>{if(t){const i=t.split(Gp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Zt(n){let e="";if(vt(n))e=n;else if(Be(n))for(let t=0;t<n.length;t++){const i=Zt(n[t]);i&&(e+=i+" ")}else if(lt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const jp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qp=Ul(jp);function _h(n){return!!n||n===""}const Wt=n=>vt(n)?n:n==null?"":Be(n)||lt(n)&&(n.toString===mh||!We(n.toString))?JSON.stringify(n,vh,2):String(n),vh=(n,e)=>e&&e.__v_isRef?vh(n,e.value):gr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r])=>(t[`${i} =>`]=r,t),{})}:dh(e)?{[`Set(${e.size})`]:[...e.values()]}:lt(e)&&!Be(e)&&!gh(e)?String(e):e;let hn;class Yp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=hn,!e&&hn&&(this.index=(hn.scopes||(hn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=hn;try{return hn=this,e()}finally{hn=t}}}on(){hn=this}off(){hn=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Kp(n,e=hn){e&&e.active&&e.effects.push(n)}function $p(){return hn}const Bl=n=>{const e=new Set(n);return e.w=0,e.n=0,e},xh=n=>(n.w&pi)>0,yh=n=>(n.n&pi)>0,Zp=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=pi},Jp=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];xh(r)&&!yh(r)?r.delete(n):e[t++]=r,r.w&=~pi,r.n&=~pi}e.length=t}},el=new WeakMap;let Vr=0,pi=1;const tl=30;let pn;const Di=Symbol(""),nl=Symbol("");class zl{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Kp(this,i)}run(){if(!this.active)return this.fn();let e=pn,t=ci;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=pn,pn=this,ci=!0,pi=1<<++Vr,Vr<=tl?Zp(this):Ac(this),this.fn()}finally{Vr<=tl&&Jp(this),pi=1<<--Vr,pn=this.parent,ci=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){pn===this?this.deferStop=!0:this.active&&(Ac(this),this.onStop&&this.onStop(),this.active=!1)}}function Ac(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let ci=!0;const Mh=[];function Pr(){Mh.push(ci),ci=!1}function Lr(){const n=Mh.pop();ci=n===void 0?!0:n}function jt(n,e,t){if(ci&&pn){let i=el.get(n);i||el.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=Bl()),Sh(r)}}function Sh(n,e){let t=!1;Vr<=tl?yh(n)||(n.n|=pi,t=!xh(n)):t=!n.has(pn),t&&(n.add(pn),pn.deps.push(n))}function Xn(n,e,t,i,r,s){const o=el.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Be(n)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!Co(u)&&u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Be(n)?Ol(t)&&a.push(o.get("length")):(a.push(o.get(Di)),gr(n)&&a.push(o.get(nl)));break;case"delete":Be(n)||(a.push(o.get(Di)),gr(n)&&a.push(o.get(nl)));break;case"set":gr(n)&&a.push(o.get(Di));break}if(a.length===1)a[0]&&il(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);il(Bl(l))}}function il(n,e){const t=Be(n)?n:[...n];for(const i of t)i.computed&&wc(i);for(const i of t)i.computed||wc(i)}function wc(n,e){(n!==pn||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Qp=Ul("__proto__,__v_isRef,__isVue"),Eh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Co)),Rc=em();function em(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=tt(this);for(let s=0,o=this.length;s<o;s++)jt(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(tt)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Pr();const i=tt(this)[e].apply(this,t);return Lr(),i}}),n}function tm(n){const e=tt(this);return jt(e,"has",n),e.hasOwnProperty(n)}class bh{constructor(e=!1,t=!1){this._isReadonly=e,this._shallow=t}get(e,t,i){const r=this._isReadonly,s=this._shallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw"&&i===(r?s?pm:Rh:s?wh:Ah).get(e))return e;const o=Be(e);if(!r){if(o&&Qe(Rc,t))return Reflect.get(Rc,t,i);if(t==="hasOwnProperty")return tm}const a=Reflect.get(e,t,i);return(Co(t)?Eh.has(t):Qp(t))||(r||jt(e,"get",t),s)?a:Dt(a)?o&&Ol(t)?a:a.value:lt(a)?r?Ch(a):Vl(a):a}}class Th extends bh{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(Mr(s)&&Dt(s)&&!Dt(i))return!1;if(!this._shallow&&(!uo(i)&&!Mr(i)&&(s=tt(s),i=tt(i)),!Be(e)&&Dt(s)&&!Dt(i)))return s.value=i,!0;const o=Be(e)&&Ol(t)?Number(t)<e.length:Qe(e,t),a=Reflect.set(e,t,i,r);return e===tt(r)&&(o?Fi(i,s)&&Xn(e,"set",t,i):Xn(e,"add",t,i)),a}deleteProperty(e,t){const i=Qe(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Xn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Co(t)||!Eh.has(t))&&jt(e,"has",t),i}ownKeys(e){return jt(e,"iterate",Be(e)?"length":Di),Reflect.ownKeys(e)}}class nm extends bh{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const im=new Th,rm=new nm,sm=new Th(!0),Hl=n=>n,Uo=n=>Reflect.getPrototypeOf(n);function _s(n,e,t=!1,i=!1){n=n.__v_raw;const r=tt(n),s=tt(e);t||(Fi(e,s)&&jt(r,"get",e),jt(r,"get",s));const{has:o}=Uo(r),a=i?Hl:t?Wl:es;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function vs(n,e=!1){const t=this.__v_raw,i=tt(t),r=tt(n);return e||(Fi(n,r)&&jt(i,"has",n),jt(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function xs(n,e=!1){return n=n.__v_raw,!e&&jt(tt(n),"iterate",Di),Reflect.get(n,"size",n)}function Cc(n){n=tt(n);const e=tt(this);return Uo(e).has.call(e,n)||(e.add(n),Xn(e,"add",n,n)),this}function Pc(n,e){e=tt(e);const t=tt(this),{has:i,get:r}=Uo(t);let s=i.call(t,n);s||(n=tt(n),s=i.call(t,n));const o=r.call(t,n);return t.set(n,e),s?Fi(e,o)&&Xn(t,"set",n,e):Xn(t,"add",n,e),this}function Lc(n){const e=tt(this),{has:t,get:i}=Uo(e);let r=t.call(e,n);r||(n=tt(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&Xn(e,"delete",n,void 0),s}function Dc(){const n=tt(this),e=n.size!==0,t=n.clear();return e&&Xn(n,"clear",void 0,void 0),t}function ys(n,e){return function(i,r){const s=this,o=s.__v_raw,a=tt(o),l=e?Hl:n?Wl:es;return!n&&jt(a,"iterate",Di),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Ms(n,e,t){return function(...i){const r=this.__v_raw,s=tt(r),o=gr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Hl:e?Wl:es;return!e&&jt(s,"iterate",l?nl:Di),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Jn(n){return function(...e){return n==="delete"?!1:this}}function om(){const n={get(s){return _s(this,s)},get size(){return xs(this)},has:vs,add:Cc,set:Pc,delete:Lc,clear:Dc,forEach:ys(!1,!1)},e={get(s){return _s(this,s,!1,!0)},get size(){return xs(this)},has:vs,add:Cc,set:Pc,delete:Lc,clear:Dc,forEach:ys(!1,!0)},t={get(s){return _s(this,s,!0)},get size(){return xs(this,!0)},has(s){return vs.call(this,s,!0)},add:Jn("add"),set:Jn("set"),delete:Jn("delete"),clear:Jn("clear"),forEach:ys(!0,!1)},i={get(s){return _s(this,s,!0,!0)},get size(){return xs(this,!0)},has(s){return vs.call(this,s,!0)},add:Jn("add"),set:Jn("set"),delete:Jn("delete"),clear:Jn("clear"),forEach:ys(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Ms(s,!1,!1),t[s]=Ms(s,!0,!1),e[s]=Ms(s,!1,!0),i[s]=Ms(s,!0,!0)}),[n,t,e,i]}const[am,lm,cm,um]=om();function kl(n,e){const t=e?n?um:cm:n?lm:am;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Qe(t,r)&&r in i?t:i,r,s)}const fm={get:kl(!1,!1)},hm={get:kl(!1,!0)},dm={get:kl(!0,!1)},Ah=new WeakMap,wh=new WeakMap,Rh=new WeakMap,pm=new WeakMap;function mm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gm(n){return n.__v_skip||!Object.isExtensible(n)?0:mm(Bp(n))}function Vl(n){return Mr(n)?n:Gl(n,!1,im,fm,Ah)}function _m(n){return Gl(n,!1,sm,hm,wh)}function Ch(n){return Gl(n,!0,rm,dm,Rh)}function Gl(n,e,t,i,r){if(!lt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=gm(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function _r(n){return Mr(n)?_r(n.__v_raw):!!(n&&n.__v_isReactive)}function Mr(n){return!!(n&&n.__v_isReadonly)}function uo(n){return!!(n&&n.__v_isShallow)}function Ph(n){return _r(n)||Mr(n)}function tt(n){const e=n&&n.__v_raw;return e?tt(e):n}function Lh(n){return co(n,"__v_skip",!0),n}const es=n=>lt(n)?Vl(n):n,Wl=n=>lt(n)?Ch(n):n;function Dh(n){ci&&pn&&(n=tt(n),Sh(n.dep||(n.dep=Bl())))}function Uh(n,e){n=tt(n);const t=n.dep;t&&il(t)}function Dt(n){return!!(n&&n.__v_isRef===!0)}function Ih(n){return vm(n,!1)}function vm(n,e){return Dt(n)?n:new xm(n,e)}class xm{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:tt(e),this._value=t?e:es(e)}get value(){return Dh(this),this._value}set value(e){const t=this.__v_isShallow||uo(e)||Mr(e);e=t?e:tt(e),Fi(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:es(e),Uh(this))}}function ym(n){return Dt(n)?n.value:n}const Mm={get:(n,e,t)=>ym(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Dt(r)&&!Dt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Nh(n){return _r(n)?n:new Proxy(n,Mm)}class Sm{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new zl(e,()=>{this._dirty||(this._dirty=!0,Uh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=tt(this);return Dh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Em(n,e,t=!1){let i,r;const s=We(n);return s?(i=n,r=xn):(i=n.get,r=n.set),new Sm(i,r,s||!r,t)}function ui(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){Io(s,e,t)}return r}function yn(n,e,t,i){if(We(n)){const s=ui(n,e,t,i);return s&&ph(s)&&s.catch(o=>{Io(o,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(yn(n[s],e,t,i));return r}function Io(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){ui(l,null,10,[n,o,a]);return}}bm(n,t,r,i)}function bm(n,e,t,i=!0){console.error(n)}let ts=!1,rl=!1;const Lt=[];let An=0;const vr=[];let kn=null,Ri=0;const Oh=Promise.resolve();let Xl=null;function Tm(n){const e=Xl||Oh;return n?e.then(this?n.bind(this):n):e}function Am(n){let e=An+1,t=Lt.length;for(;e<t;){const i=e+t>>>1,r=Lt[i],s=ns(r);s<n||s===n&&r.pre?e=i+1:t=i}return e}function jl(n){(!Lt.length||!Lt.includes(n,ts&&n.allowRecurse?An+1:An))&&(n.id==null?Lt.push(n):Lt.splice(Am(n.id),0,n),Fh())}function Fh(){!ts&&!rl&&(rl=!0,Xl=Oh.then(zh))}function wm(n){const e=Lt.indexOf(n);e>An&&Lt.splice(e,1)}function Rm(n){Be(n)?vr.push(...n):(!kn||!kn.includes(n,n.allowRecurse?Ri+1:Ri))&&vr.push(n),Fh()}function Uc(n,e=ts?An+1:0){for(;e<Lt.length;e++){const t=Lt[e];t&&t.pre&&(Lt.splice(e,1),e--,t())}}function Bh(n){if(vr.length){const e=[...new Set(vr)];if(vr.length=0,kn){kn.push(...e);return}for(kn=e,kn.sort((t,i)=>ns(t)-ns(i)),Ri=0;Ri<kn.length;Ri++)kn[Ri]();kn=null,Ri=0}}const ns=n=>n.id==null?1/0:n.id,Cm=(n,e)=>{const t=ns(n)-ns(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function zh(n){rl=!1,ts=!0,Lt.sort(Cm);const e=xn;try{for(An=0;An<Lt.length;An++){const t=Lt[An];t&&t.active!==!1&&ui(t,null,14)}}finally{An=0,Lt.length=0,Bh(),ts=!1,Xl=null,(Lt.length||vr.length)&&zh()}}function Pm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||at;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:d}=i[u]||at;d&&(r=t.map(m=>vt(m)?m.trim():m)),f&&(r=t.map(kp))}let a,l=i[a=na(e)]||i[a=na(Ln(e))];!l&&s&&(l=i[a=na(Cr(e))]),l&&yn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,yn(c,n,6,r)}}function Hh(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!We(n)){const l=c=>{const u=Hh(c,e,!0);u&&(a=!0,wt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(lt(n)&&i.set(n,null),null):(Be(s)?s.forEach(l=>o[l]=null):wt(o,s),lt(n)&&i.set(n,o),o)}function No(n,e){return!n||!Ro(e)?!1:(e=e.slice(2).replace(/Once$/,""),Qe(n,e[0].toLowerCase()+e.slice(1))||Qe(n,Cr(e))||Qe(n,e))}let _n=null,Oo=null;function fo(n){const e=_n;return _n=n,Oo=n&&n.type.__scopeId||null,e}function Lm(n){Oo=n}function Dm(){Oo=null}function Um(n,e=_n,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Wc(-1);const s=fo(e);let o;try{o=n(...r)}finally{fo(s),i._d&&Wc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function ra(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:d,setupState:m,ctx:g,inheritAttrs:_}=n;let p,h;const S=fo(n);try{if(t.shapeFlag&4){const E=r||i;p=bn(u.call(E,E,f,s,m,d,g)),h=l}else{const E=e;p=bn(E.length>1?E(s,{attrs:l,slots:a,emit:c}):E(s,null)),h=e.props?l:Im(l)}}catch(E){Kr.length=0,Io(E,n,1),p=ot(Bi)}let y=p;if(h&&_!==!1){const E=Object.keys(h),{shapeFlag:R}=y;E.length&&R&7&&(o&&E.some(Il)&&(h=Nm(h,o)),y=Sr(y,h))}return t.dirs&&(y=Sr(y),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&(y.transition=t.transition),p=y,fo(S),p}const Im=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ro(t))&&((e||(e={}))[t]=n[t]);return e},Nm=(n,e)=>{const t={};for(const i in n)(!Il(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Om(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Ic(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!No(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Ic(i,o,c):!0:!!o;return!1}function Ic(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!No(t,s))return!0}return!1}function Fm({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const kh="components";function Vh(n,e){return zm(kh,n,!0,e)||n}const Bm=Symbol.for("v-ndc");function zm(n,e,t=!0,i=!1){const r=_n||At;if(r){const s=r.type;if(n===kh){const a=Lg(s,!1);if(a&&(a===e||a===Ln(e)||a===Do(Ln(e))))return s}const o=Nc(r[n]||s[n],e)||Nc(r.appContext[n],e);return!o&&i?s:o}}function Nc(n,e){return n&&(n[e]||n[Ln(e)]||n[Do(Ln(e))])}const Hm=n=>n.__isSuspense;function km(n,e){e&&e.pendingBranch?Be(n)?e.effects.push(...n):e.effects.push(n):Rm(n)}const Ss={};function Qs(n,e,t){return Gh(n,e,t)}function Gh(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:o}=at){var a;const l=$p()===((a=At)==null?void 0:a.scope)?At:null;let c,u=!1,f=!1;if(Dt(n)?(c=()=>n.value,u=uo(n)):_r(n)?(c=()=>n,i=!0):Be(n)?(f=!0,u=n.some(E=>_r(E)||uo(E)),c=()=>n.map(E=>{if(Dt(E))return E.value;if(_r(E))return hr(E);if(We(E))return ui(E,l,2)})):We(n)?e?c=()=>ui(n,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),yn(n,l,3,[m])}:c=xn,e&&i){const E=c;c=()=>hr(E())}let d,m=E=>{d=S.onStop=()=>{ui(E,l,4)}},g;if(rs)if(m=xn,e?t&&yn(e,l,3,[c(),f?[]:void 0,m]):c(),r==="sync"){const E=Ng();g=E.__watcherHandles||(E.__watcherHandles=[])}else return xn;let _=f?new Array(n.length).fill(Ss):Ss;const p=()=>{if(S.active)if(e){const E=S.run();(i||u||(f?E.some((R,C)=>Fi(R,_[C])):Fi(E,_)))&&(d&&d(),yn(e,l,3,[E,_===Ss?void 0:f&&_[0]===Ss?[]:_,m]),_=E)}else S.run()};p.allowRecurse=!!e;let h;r==="sync"?h=p:r==="post"?h=()=>Vt(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),h=()=>jl(p));const S=new zl(c,h);e?t?p():_=S.run():r==="post"?Vt(S.run.bind(S),l&&l.suspense):S.run();const y=()=>{S.stop(),l&&l.scope&&Nl(l.scope.effects,S)};return g&&g.push(y),y}function Vm(n,e,t){const i=this.proxy,r=vt(n)?n.includes(".")?Wh(i,n):()=>i[n]:n.bind(i,i);let s;We(e)?s=e:(s=e.handler,t=e);const o=At;Er(this);const a=Gh(r,s.bind(i),t);return o?Er(o):Ui(),a}function Wh(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function hr(n,e){if(!lt(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),Dt(n))hr(n.value,e);else if(Be(n))for(let t=0;t<n.length;t++)hr(n[t],e);else if(dh(n)||gr(n))n.forEach(t=>{hr(t,e)});else if(gh(n))for(const t in n)hr(n[t],e);return n}function vi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Pr(),yn(l,t,8,[n.el,a,n,e]),Lr())}}/*! #__NO_SIDE_EFFECTS__ */function us(n,e){return We(n)?(()=>wt({name:n.name},e,{setup:n}))():n}const eo=n=>!!n.type.__asyncLoader,Xh=n=>n.type.__isKeepAlive;function Gm(n,e){jh(n,"a",e)}function Wm(n,e){jh(n,"da",e)}function jh(n,e,t=At){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Fo(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Xh(r.parent.vnode)&&Xm(i,e,t,r),r=r.parent}}function Xm(n,e,t,i){const r=Fo(e,n,i,!0);Yh(()=>{Nl(i[e],r)},t)}function Fo(n,e,t=At,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Pr(),Er(t);const a=yn(e,t,n,o);return Ui(),Lr(),a});return i?r.unshift(s):r.push(s),s}}const Zn=n=>(e,t=At)=>(!rs||n==="sp")&&Fo(n,(...i)=>e(...i),t),jm=Zn("bm"),qh=Zn("m"),qm=Zn("bu"),Ym=Zn("u"),Km=Zn("bum"),Yh=Zn("um"),$m=Zn("sp"),Zm=Zn("rtg"),Jm=Zn("rtc");function Qm(n,e=At){Fo("ec",n,e)}function Kh(n,e,t,i){let r;const s=t&&t[i];if(Be(n)||vt(n)){r=new Array(n.length);for(let o=0,a=n.length;o<a;o++)r[o]=e(n[o],o,void 0,s&&s[o])}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(lt(n))if(n[Symbol.iterator])r=Array.from(n,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(n);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(n[c],c,a,s&&s[a])}}else r=[];return t&&(t[i]=r),r}const sl=n=>n?od(n)?Zl(n)||n.proxy:sl(n.parent):null,Yr=wt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>sl(n.parent),$root:n=>sl(n.root),$emit:n=>n.emit,$options:n=>ql(n),$forceUpdate:n=>n.f||(n.f=()=>jl(n.update)),$nextTick:n=>n.n||(n.n=Tm.bind(n.proxy)),$watch:n=>Vm.bind(n)}),sa=(n,e)=>n!==at&&!n.__isScriptSetup&&Qe(n,e),eg={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(sa(i,e))return o[e]=1,i[e];if(r!==at&&Qe(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&Qe(c,e))return o[e]=3,s[e];if(t!==at&&Qe(t,e))return o[e]=4,t[e];ol&&(o[e]=0)}}const u=Yr[e];let f,d;if(u)return e==="$attrs"&&jt(n,"get",e),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==at&&Qe(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,Qe(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return sa(r,e)?(r[e]=t,!0):i!==at&&Qe(i,e)?(i[e]=t,!0):Qe(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==at&&Qe(n,o)||sa(e,o)||(a=s[0])&&Qe(a,o)||Qe(i,o)||Qe(Yr,o)||Qe(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Qe(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Oc(n){return Be(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ol=!0;function tg(n){const e=ql(n),t=n.proxy,i=n.ctx;ol=!1,e.beforeCreate&&Fc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:g,activated:_,deactivated:p,beforeDestroy:h,beforeUnmount:S,destroyed:y,unmounted:E,render:R,renderTracked:C,renderTriggered:A,errorCaptured:j,serverPrefetch:T,expose:w,inheritAttrs:Q,components:ce,directives:fe,filters:N}=e;if(c&&ng(c,i,null),o)for(const G in o){const ie=o[G];We(ie)&&(i[G]=ie.bind(t))}if(r){const G=r.call(t,t);lt(G)&&(n.data=Vl(G))}if(ol=!0,s)for(const G in s){const ie=s[G],ue=We(ie)?ie.bind(t,t):We(ie.get)?ie.get.bind(t,t):xn,ae=!We(ie)&&We(ie.set)?ie.set.bind(t):xn,O=Ai({get:ue,set:ae});Object.defineProperty(i,G,{enumerable:!0,configurable:!0,get:()=>O.value,set:k=>O.value=k})}if(a)for(const G in a)$h(a[G],i,t,G);if(l){const G=We(l)?l.call(t):l;Reflect.ownKeys(G).forEach(ie=>{lg(ie,G[ie])})}u&&Fc(u,n,"c");function Z(G,ie){Be(ie)?ie.forEach(ue=>G(ue.bind(t))):ie&&G(ie.bind(t))}if(Z(jm,f),Z(qh,d),Z(qm,m),Z(Ym,g),Z(Gm,_),Z(Wm,p),Z(Qm,j),Z(Jm,C),Z(Zm,A),Z(Km,S),Z(Yh,E),Z($m,T),Be(w))if(w.length){const G=n.exposed||(n.exposed={});w.forEach(ie=>{Object.defineProperty(G,ie,{get:()=>t[ie],set:ue=>t[ie]=ue})})}else n.exposed||(n.exposed={});R&&n.render===xn&&(n.render=R),Q!=null&&(n.inheritAttrs=Q),ce&&(n.components=ce),fe&&(n.directives=fe)}function ng(n,e,t=xn){Be(n)&&(n=al(n));for(const i in n){const r=n[i];let s;lt(r)?"default"in r?s=to(r.from||i,r.default,!0):s=to(r.from||i):s=to(r),Dt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Fc(n,e,t){yn(Be(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function $h(n,e,t,i){const r=i.includes(".")?Wh(t,i):()=>t[i];if(vt(n)){const s=e[n];We(s)&&Qs(r,s)}else if(We(n))Qs(r,n.bind(t));else if(lt(n))if(Be(n))n.forEach(s=>$h(s,e,t,i));else{const s=We(n.handler)?n.handler.bind(t):e[n.handler];We(s)&&Qs(r,s,n)}}function ql(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>ho(l,c,o,!0)),ho(l,e,o)),lt(e)&&s.set(e,l),l}function ho(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&ho(n,s,t,!0),r&&r.forEach(o=>ho(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=ig[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const ig={data:Bc,props:zc,emits:zc,methods:Gr,computed:Gr,beforeCreate:Nt,created:Nt,beforeMount:Nt,mounted:Nt,beforeUpdate:Nt,updated:Nt,beforeDestroy:Nt,beforeUnmount:Nt,destroyed:Nt,unmounted:Nt,activated:Nt,deactivated:Nt,errorCaptured:Nt,serverPrefetch:Nt,components:Gr,directives:Gr,watch:sg,provide:Bc,inject:rg};function Bc(n,e){return e?n?function(){return wt(We(n)?n.call(this,this):n,We(e)?e.call(this,this):e)}:e:n}function rg(n,e){return Gr(al(n),al(e))}function al(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Nt(n,e){return n?[...new Set([].concat(n,e))]:e}function Gr(n,e){return n?wt(Object.create(null),n,e):e}function zc(n,e){return n?Be(n)&&Be(e)?[...new Set([...n,...e])]:wt(Object.create(null),Oc(n),Oc(e??{})):e}function sg(n,e){if(!n)return e;if(!e)return n;const t=wt(Object.create(null),n);for(const i in e)t[i]=Nt(n[i],e[i]);return t}function Zh(){return{app:null,config:{isNativeTag:Np,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let og=0;function ag(n,e){return function(i,r=null){We(i)||(i=wt({},i)),r!=null&&!lt(r)&&(r=null);const s=Zh(),o=new WeakSet;let a=!1;const l=s.app={_uid:og++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Og,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&We(c.install)?(o.add(c),c.install(l,...u)):We(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const d=ot(i,r);return d.appContext=s,u&&e?e(d,c):n(d,c,f),a=!0,l._container=c,c.__vue_app__=l,Zl(d.component)||d.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){po=l;try{return c()}finally{po=null}}};return l}}let po=null;function lg(n,e){if(At){let t=At.provides;const i=At.parent&&At.parent.provides;i===t&&(t=At.provides=Object.create(i)),t[n]=e}}function to(n,e,t=!1){const i=At||_n;if(i||po){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:po._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&We(e)?e.call(i&&i.proxy):e}}function cg(n,e,t,i=!1){const r={},s={};co(s,zo,1),n.propsDefaults=Object.create(null),Jh(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:_m(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function ug(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=tt(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(No(n.emitsOptions,d))continue;const m=e[d];if(l)if(Qe(s,d))m!==s[d]&&(s[d]=m,c=!0);else{const g=Ln(d);r[g]=ll(l,a,g,m,n,!1)}else m!==s[d]&&(s[d]=m,c=!0)}}}else{Jh(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Qe(e,f)&&((u=Cr(f))===f||!Qe(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=ll(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Qe(e,f))&&(delete s[f],c=!0)}c&&Xn(n,"set","$attrs")}function Jh(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Js(l))continue;const c=e[l];let u;r&&Qe(r,u=Ln(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:No(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=tt(t),c=a||at;for(let u=0;u<s.length;u++){const f=s[u];t[f]=ll(r,l,f,c[f],n,!Qe(c,f))}}return o}function ll(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Qe(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&We(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(Er(r),i=c[t]=l.call(null,e),Ui())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Cr(t))&&(i=!0))}return i}function Qh(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!We(n)){const u=f=>{l=!0;const[d,m]=Qh(f,e,!0);wt(o,d),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return lt(n)&&i.set(n,mr),mr;if(Be(s))for(let u=0;u<s.length;u++){const f=Ln(s[u]);Hc(f)&&(o[f]=at)}else if(s)for(const u in s){const f=Ln(u);if(Hc(f)){const d=s[u],m=o[f]=Be(d)||We(d)?{type:d}:wt({},d);if(m){const g=Gc(Boolean,m.type),_=Gc(String,m.type);m[0]=g>-1,m[1]=_<0||g<_,(g>-1||Qe(m,"default"))&&a.push(f)}}}const c=[o,a];return lt(n)&&i.set(n,c),c}function Hc(n){return n[0]!=="$"}function kc(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function Vc(n,e){return kc(n)===kc(e)}function Gc(n,e){return Be(e)?e.findIndex(t=>Vc(t,n)):We(e)&&Vc(e,n)?0:-1}const ed=n=>n[0]==="_"||n==="$stable",Yl=n=>Be(n)?n.map(bn):[bn(n)],fg=(n,e,t)=>{if(e._n)return e;const i=Um((...r)=>Yl(e(...r)),t);return i._c=!1,i},td=(n,e,t)=>{const i=n._ctx;for(const r in n){if(ed(r))continue;const s=n[r];if(We(s))e[r]=fg(r,s,i);else if(s!=null){const o=Yl(s);e[r]=()=>o}}},nd=(n,e)=>{const t=Yl(e);n.slots.default=()=>t},hg=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=tt(e),co(e,"_",t)):td(e,n.slots={})}else n.slots={},e&&nd(n,e);co(n.slots,zo,1)},dg=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=at;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(wt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,td(e,r)),o=e}else e&&(nd(n,e),o={default:1});if(s)for(const a in r)!ed(a)&&o[a]==null&&delete r[a]};function cl(n,e,t,i,r=!1){if(Be(n)){n.forEach((d,m)=>cl(d,e&&(Be(e)?e[m]:e),t,i,r));return}if(eo(i)&&!r)return;const s=i.shapeFlag&4?Zl(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===at?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(vt(c)?(u[c]=null,Qe(f,c)&&(f[c]=null)):Dt(c)&&(c.value=null)),We(l))ui(l,a,12,[o,u]);else{const d=vt(l),m=Dt(l);if(d||m){const g=()=>{if(n.f){const _=d?Qe(f,l)?f[l]:u[l]:l.value;r?Be(_)&&Nl(_,s):Be(_)?_.includes(s)||_.push(s):d?(u[l]=[s],Qe(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else d?(u[l]=o,Qe(f,l)&&(f[l]=o)):m&&(l.value=o,n.k&&(u[n.k]=o))};o?(g.id=-1,Vt(g,t)):g()}}}const Vt=km;function pg(n){return mg(n)}function mg(n,e){const t=Qa();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=xn,insertStaticContent:g}=n,_=(x,L,I,z=null,H=null,le=null,re=!1,Y=null,se=!!L.dynamicChildren)=>{if(x===L)return;x&&!Or(x,L)&&(z=He(x),k(x,H,le,!0),x=null),L.patchFlag===-2&&(se=!1,L.dynamicChildren=null);const{type:ee,ref:Me,shapeFlag:M}=L;switch(ee){case Bo:p(x,L,I,z);break;case Bi:h(x,L,I,z);break;case oa:x==null&&S(L,I,z,re);break;case Gt:ce(x,L,I,z,H,le,re,Y,se);break;default:M&1?R(x,L,I,z,H,le,re,Y,se):M&6?fe(x,L,I,z,H,le,re,Y,se):(M&64||M&128)&&ee.process(x,L,I,z,H,le,re,Y,se,Ie)}Me!=null&&H&&cl(Me,x&&x.ref,le,L||x,!L)},p=(x,L,I,z)=>{if(x==null)i(L.el=a(L.children),I,z);else{const H=L.el=x.el;L.children!==x.children&&c(H,L.children)}},h=(x,L,I,z)=>{x==null?i(L.el=l(L.children||""),I,z):L.el=x.el},S=(x,L,I,z)=>{[x.el,x.anchor]=g(x.children,L,I,z,x.el,x.anchor)},y=({el:x,anchor:L},I,z)=>{let H;for(;x&&x!==L;)H=d(x),i(x,I,z),x=H;i(L,I,z)},E=({el:x,anchor:L})=>{let I;for(;x&&x!==L;)I=d(x),r(x),x=I;r(L)},R=(x,L,I,z,H,le,re,Y,se)=>{re=re||L.type==="svg",x==null?C(L,I,z,H,le,re,Y,se):T(x,L,H,le,re,Y,se)},C=(x,L,I,z,H,le,re,Y)=>{let se,ee;const{type:Me,props:M,shapeFlag:v,transition:U,dirs:K}=x;if(se=x.el=o(x.type,le,M&&M.is,M),v&8?u(se,x.children):v&16&&j(x.children,se,null,z,H,le&&Me!=="foreignObject",re,Y),K&&vi(x,null,z,"created"),A(se,x,x.scopeId,re,z),M){for(const te in M)te!=="value"&&!Js(te)&&s(se,te,null,M[te],le,x.children,z,H,Pe);"value"in M&&s(se,"value",null,M.value),(ee=M.onVnodeBeforeMount)&&En(ee,z,x)}K&&vi(x,null,z,"beforeMount");const J=gg(H,U);J&&U.beforeEnter(se),i(se,L,I),((ee=M&&M.onVnodeMounted)||J||K)&&Vt(()=>{ee&&En(ee,z,x),J&&U.enter(se),K&&vi(x,null,z,"mounted")},H)},A=(x,L,I,z,H)=>{if(I&&m(x,I),z)for(let le=0;le<z.length;le++)m(x,z[le]);if(H){let le=H.subTree;if(L===le){const re=H.vnode;A(x,re,re.scopeId,re.slotScopeIds,H.parent)}}},j=(x,L,I,z,H,le,re,Y,se=0)=>{for(let ee=se;ee<x.length;ee++){const Me=x[ee]=Y?si(x[ee]):bn(x[ee]);_(null,Me,L,I,z,H,le,re,Y)}},T=(x,L,I,z,H,le,re)=>{const Y=L.el=x.el;let{patchFlag:se,dynamicChildren:ee,dirs:Me}=L;se|=x.patchFlag&16;const M=x.props||at,v=L.props||at;let U;I&&xi(I,!1),(U=v.onVnodeBeforeUpdate)&&En(U,I,L,x),Me&&vi(L,x,I,"beforeUpdate"),I&&xi(I,!0);const K=H&&L.type!=="foreignObject";if(ee?w(x.dynamicChildren,ee,Y,I,z,K,le):re||ie(x,L,Y,null,I,z,K,le,!1),se>0){if(se&16)Q(Y,L,M,v,I,z,H);else if(se&2&&M.class!==v.class&&s(Y,"class",null,v.class,H),se&4&&s(Y,"style",M.style,v.style,H),se&8){const J=L.dynamicProps;for(let te=0;te<J.length;te++){const _e=J[te],he=M[_e],ve=v[_e];(ve!==he||_e==="value")&&s(Y,_e,he,ve,H,x.children,I,z,Pe)}}se&1&&x.children!==L.children&&u(Y,L.children)}else!re&&ee==null&&Q(Y,L,M,v,I,z,H);((U=v.onVnodeUpdated)||Me)&&Vt(()=>{U&&En(U,I,L,x),Me&&vi(L,x,I,"updated")},z)},w=(x,L,I,z,H,le,re)=>{for(let Y=0;Y<L.length;Y++){const se=x[Y],ee=L[Y],Me=se.el&&(se.type===Gt||!Or(se,ee)||se.shapeFlag&70)?f(se.el):I;_(se,ee,Me,null,z,H,le,re,!0)}},Q=(x,L,I,z,H,le,re)=>{if(I!==z){if(I!==at)for(const Y in I)!Js(Y)&&!(Y in z)&&s(x,Y,I[Y],null,re,L.children,H,le,Pe);for(const Y in z){if(Js(Y))continue;const se=z[Y],ee=I[Y];se!==ee&&Y!=="value"&&s(x,Y,ee,se,re,L.children,H,le,Pe)}"value"in z&&s(x,"value",I.value,z.value)}},ce=(x,L,I,z,H,le,re,Y,se)=>{const ee=L.el=x?x.el:a(""),Me=L.anchor=x?x.anchor:a("");let{patchFlag:M,dynamicChildren:v,slotScopeIds:U}=L;U&&(Y=Y?Y.concat(U):U),x==null?(i(ee,I,z),i(Me,I,z),j(L.children,I,Me,H,le,re,Y,se)):M>0&&M&64&&v&&x.dynamicChildren?(w(x.dynamicChildren,v,I,H,le,re,Y),(L.key!=null||H&&L===H.subTree)&&id(x,L,!0)):ie(x,L,I,Me,H,le,re,Y,se)},fe=(x,L,I,z,H,le,re,Y,se)=>{L.slotScopeIds=Y,x==null?L.shapeFlag&512?H.ctx.activate(L,I,z,re,se):N(L,I,z,H,le,re,se):q(x,L,se)},N=(x,L,I,z,H,le,re)=>{const Y=x.component=Ag(x,z,H);if(Xh(x)&&(Y.ctx.renderer=Ie),wg(Y),Y.asyncDep){if(H&&H.registerDep(Y,Z),!x.el){const se=Y.subTree=ot(Bi);h(null,se,L,I)}return}Z(Y,x,L,I,H,le,re)},q=(x,L,I)=>{const z=L.component=x.component;if(Om(x,L,I))if(z.asyncDep&&!z.asyncResolved){G(z,L,I);return}else z.next=L,wm(z.update),z.update();else L.el=x.el,z.vnode=L},Z=(x,L,I,z,H,le,re)=>{const Y=()=>{if(x.isMounted){let{next:Me,bu:M,u:v,parent:U,vnode:K}=x,J=Me,te;xi(x,!1),Me?(Me.el=K.el,G(x,Me,re)):Me=K,M&&ia(M),(te=Me.props&&Me.props.onVnodeBeforeUpdate)&&En(te,U,Me,K),xi(x,!0);const _e=ra(x),he=x.subTree;x.subTree=_e,_(he,_e,f(he.el),He(he),x,H,le),Me.el=_e.el,J===null&&Fm(x,_e.el),v&&Vt(v,H),(te=Me.props&&Me.props.onVnodeUpdated)&&Vt(()=>En(te,U,Me,K),H)}else{let Me;const{el:M,props:v}=L,{bm:U,m:K,parent:J}=x,te=eo(L);if(xi(x,!1),U&&ia(U),!te&&(Me=v&&v.onVnodeBeforeMount)&&En(Me,J,L),xi(x,!0),M&&ze){const _e=()=>{x.subTree=ra(x),ze(M,x.subTree,x,H,null)};te?L.type.__asyncLoader().then(()=>!x.isUnmounted&&_e()):_e()}else{const _e=x.subTree=ra(x);_(null,_e,I,z,x,H,le),L.el=_e.el}if(K&&Vt(K,H),!te&&(Me=v&&v.onVnodeMounted)){const _e=L;Vt(()=>En(Me,J,_e),H)}(L.shapeFlag&256||J&&eo(J.vnode)&&J.vnode.shapeFlag&256)&&x.a&&Vt(x.a,H),x.isMounted=!0,L=I=z=null}},se=x.effect=new zl(Y,()=>jl(ee),x.scope),ee=x.update=()=>se.run();ee.id=x.uid,xi(x,!0),ee()},G=(x,L,I)=>{L.component=x;const z=x.vnode.props;x.vnode=L,x.next=null,ug(x,L.props,z,I),dg(x,L.children,I),Pr(),Uc(),Lr()},ie=(x,L,I,z,H,le,re,Y,se=!1)=>{const ee=x&&x.children,Me=x?x.shapeFlag:0,M=L.children,{patchFlag:v,shapeFlag:U}=L;if(v>0){if(v&128){ae(ee,M,I,z,H,le,re,Y,se);return}else if(v&256){ue(ee,M,I,z,H,le,re,Y,se);return}}U&8?(Me&16&&Pe(ee,H,le),M!==ee&&u(I,M)):Me&16?U&16?ae(ee,M,I,z,H,le,re,Y,se):Pe(ee,H,le,!0):(Me&8&&u(I,""),U&16&&j(M,I,z,H,le,re,Y,se))},ue=(x,L,I,z,H,le,re,Y,se)=>{x=x||mr,L=L||mr;const ee=x.length,Me=L.length,M=Math.min(ee,Me);let v;for(v=0;v<M;v++){const U=L[v]=se?si(L[v]):bn(L[v]);_(x[v],U,I,null,H,le,re,Y,se)}ee>Me?Pe(x,H,le,!0,!1,M):j(L,I,z,H,le,re,Y,se,M)},ae=(x,L,I,z,H,le,re,Y,se)=>{let ee=0;const Me=L.length;let M=x.length-1,v=Me-1;for(;ee<=M&&ee<=v;){const U=x[ee],K=L[ee]=se?si(L[ee]):bn(L[ee]);if(Or(U,K))_(U,K,I,null,H,le,re,Y,se);else break;ee++}for(;ee<=M&&ee<=v;){const U=x[M],K=L[v]=se?si(L[v]):bn(L[v]);if(Or(U,K))_(U,K,I,null,H,le,re,Y,se);else break;M--,v--}if(ee>M){if(ee<=v){const U=v+1,K=U<Me?L[U].el:z;for(;ee<=v;)_(null,L[ee]=se?si(L[ee]):bn(L[ee]),I,K,H,le,re,Y,se),ee++}}else if(ee>v)for(;ee<=M;)k(x[ee],H,le,!0),ee++;else{const U=ee,K=ee,J=new Map;for(ee=K;ee<=v;ee++){const we=L[ee]=se?si(L[ee]):bn(L[ee]);we.key!=null&&J.set(we.key,ee)}let te,_e=0;const he=v-K+1;let ve=!1,P=0;const pe=new Array(he);for(ee=0;ee<he;ee++)pe[ee]=0;for(ee=U;ee<=M;ee++){const we=x[ee];if(_e>=he){k(we,H,le,!0);continue}let Ee;if(we.key!=null)Ee=J.get(we.key);else for(te=K;te<=v;te++)if(pe[te-K]===0&&Or(we,L[te])){Ee=te;break}Ee===void 0?k(we,H,le,!0):(pe[Ee-K]=ee+1,Ee>=P?P=Ee:ve=!0,_(we,L[Ee],I,null,H,le,re,Y,se),_e++)}const oe=ve?_g(pe):mr;for(te=oe.length-1,ee=he-1;ee>=0;ee--){const we=K+ee,Ee=L[we],Le=we+1<Me?L[we+1].el:z;pe[ee]===0?_(null,Ee,I,Le,H,le,re,Y,se):ve&&(te<0||ee!==oe[te]?O(Ee,I,Le,2):te--)}}},O=(x,L,I,z,H=null)=>{const{el:le,type:re,transition:Y,children:se,shapeFlag:ee}=x;if(ee&6){O(x.component.subTree,L,I,z);return}if(ee&128){x.suspense.move(L,I,z);return}if(ee&64){re.move(x,L,I,Ie);return}if(re===Gt){i(le,L,I);for(let M=0;M<se.length;M++)O(se[M],L,I,z);i(x.anchor,L,I);return}if(re===oa){y(x,L,I);return}if(z!==2&&ee&1&&Y)if(z===0)Y.beforeEnter(le),i(le,L,I),Vt(()=>Y.enter(le),H);else{const{leave:M,delayLeave:v,afterLeave:U}=Y,K=()=>i(le,L,I),J=()=>{M(le,()=>{K(),U&&U()})};v?v(le,K,J):J()}else i(le,L,I)},k=(x,L,I,z=!1,H=!1)=>{const{type:le,props:re,ref:Y,children:se,dynamicChildren:ee,shapeFlag:Me,patchFlag:M,dirs:v}=x;if(Y!=null&&cl(Y,null,I,x,!0),Me&256){L.ctx.deactivate(x);return}const U=Me&1&&v,K=!eo(x);let J;if(K&&(J=re&&re.onVnodeBeforeUnmount)&&En(J,L,x),Me&6)Ae(x.component,I,z);else{if(Me&128){x.suspense.unmount(I,z);return}U&&vi(x,null,L,"beforeUnmount"),Me&64?x.type.remove(x,L,I,H,Ie,z):ee&&(le!==Gt||M>0&&M&64)?Pe(ee,L,I,!1,!0):(le===Gt&&M&384||!H&&Me&16)&&Pe(se,L,I),z&&ye(x)}(K&&(J=re&&re.onVnodeUnmounted)||U)&&Vt(()=>{J&&En(J,L,x),U&&vi(x,null,L,"unmounted")},I)},ye=x=>{const{type:L,el:I,anchor:z,transition:H}=x;if(L===Gt){Se(I,z);return}if(L===oa){E(x);return}const le=()=>{r(I),H&&!H.persisted&&H.afterLeave&&H.afterLeave()};if(x.shapeFlag&1&&H&&!H.persisted){const{leave:re,delayLeave:Y}=H,se=()=>re(I,le);Y?Y(x.el,le,se):se()}else le()},Se=(x,L)=>{let I;for(;x!==L;)I=d(x),r(x),x=I;r(L)},Ae=(x,L,I)=>{const{bum:z,scope:H,update:le,subTree:re,um:Y}=x;z&&ia(z),H.stop(),le&&(le.active=!1,k(re,x,L,I)),Y&&Vt(Y,L),Vt(()=>{x.isUnmounted=!0},L),L&&L.pendingBranch&&!L.isUnmounted&&x.asyncDep&&!x.asyncResolved&&x.suspenseId===L.pendingId&&(L.deps--,L.deps===0&&L.resolve())},Pe=(x,L,I,z=!1,H=!1,le=0)=>{for(let re=le;re<x.length;re++)k(x[re],L,I,z,H)},He=x=>x.shapeFlag&6?He(x.component.subTree):x.shapeFlag&128?x.suspense.next():d(x.anchor||x.el),Ne=(x,L,I)=>{x==null?L._vnode&&k(L._vnode,null,null,!0):_(L._vnode||null,x,L,null,null,null,I),Uc(),Bh(),L._vnode=x},Ie={p:_,um:k,m:O,r:ye,mt:N,mc:j,pc:ie,pbc:w,n:He,o:n};let nt,ze;return e&&([nt,ze]=e(Ie)),{render:Ne,hydrate:nt,createApp:ag(Ne,nt)}}function xi({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function gg(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function id(n,e,t=!1){const i=n.children,r=e.children;if(Be(i)&&Be(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=si(r[s]),a.el=o.el),t||id(o,a)),a.type===Bo&&(a.el=o.el)}}function _g(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const vg=n=>n.__isTeleport,Gt=Symbol.for("v-fgt"),Bo=Symbol.for("v-txt"),Bi=Symbol.for("v-cmt"),oa=Symbol.for("v-stc"),Kr=[];let vn=null;function ct(n=!1){Kr.push(vn=n?null:[])}function xg(){Kr.pop(),vn=Kr[Kr.length-1]||null}let is=1;function Wc(n){is+=n}function rd(n){return n.dynamicChildren=is>0?vn||mr:null,xg(),is>0&&vn&&vn.push(n),n}function _t(n,e,t,i,r,s){return rd(Re(n,e,t,i,r,s,!0))}function no(n,e,t,i,r){return rd(ot(n,e,t,i,r,!0))}function ul(n){return n?n.__v_isVNode===!0:!1}function Or(n,e){return n.type===e.type&&n.key===e.key}const zo="__vInternal",sd=({key:n})=>n??null,io=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?vt(n)||Dt(n)||We(n)?{i:_n,r:n,k:e,f:!!t}:n:null);function Re(n,e=null,t=null,i=0,r=null,s=n===Gt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&sd(e),ref:e&&io(e),scopeId:Oo,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:_n};return a?(Kl(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=vt(t)?8:16),is>0&&!o&&vn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&vn.push(l),l}const ot=yg;function yg(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Bm)&&(n=Bi),ul(n)){const a=Sr(n,e,!0);return t&&Kl(a,t),is>0&&!s&&vn&&(a.shapeFlag&6?vn[vn.indexOf(n)]=a:vn.push(a)),a.patchFlag|=-2,a}if(Dg(n)&&(n=n.__vccOpts),e){e=Mg(e);let{class:a,style:l}=e;a&&!vt(a)&&(e.class=Zt(a)),lt(l)&&(Ph(l)&&!Be(l)&&(l=wt({},l)),e.style=Fl(l))}const o=vt(n)?1:Hm(n)?128:vg(n)?64:lt(n)?4:We(n)?2:0;return Re(n,e,t,i,r,o,s,!0)}function Mg(n){return n?Ph(n)||zo in n?wt({},n):n:null}function Sr(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:o}=n,a=e?Eg(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&sd(a),ref:e&&e.ref?t&&r?Be(r)?r.concat(io(e)):[r,io(e)]:io(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Gt?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Sr(n.ssContent),ssFallback:n.ssFallback&&Sr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Sg(n=" ",e=0){return ot(Bo,null,n,e)}function fl(n="",e=!1){return e?(ct(),no(Bi,null,n)):ot(Bi,null,n)}function bn(n){return n==null||typeof n=="boolean"?ot(Bi):Be(n)?ot(Gt,null,n.slice()):typeof n=="object"?si(n):ot(Bo,null,String(n))}function si(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Sr(n)}function Kl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Be(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Kl(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(zo in e)?e._ctx=_n:r===3&&_n&&(_n.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else We(e)?(e={default:e,_ctx:_n},t=32):(e=String(e),i&64?(t=16,e=[Sg(e)]):t=8);n.children=e,n.shapeFlag|=t}function Eg(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Zt([e.class,i.class]));else if(r==="style")e.style=Fl([e.style,i.style]);else if(Ro(r)){const s=e[r],o=i[r];o&&s!==o&&!(Be(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function En(n,e,t,i=null){yn(n,e,7,[t,i])}const bg=Zh();let Tg=0;function Ag(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||bg,s={uid:Tg++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Yp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Qh(i,r),emitsOptions:Hh(i,r),emit:null,emitted:null,propsDefaults:at,inheritAttrs:i.inheritAttrs,ctx:at,data:at,props:at,attrs:at,slots:at,refs:at,setupState:at,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Pm.bind(null,s),n.ce&&n.ce(s),s}let At=null,$l,Xi,Xc="__VUE_INSTANCE_SETTERS__";(Xi=Qa()[Xc])||(Xi=Qa()[Xc]=[]),Xi.push(n=>At=n),$l=n=>{Xi.length>1?Xi.forEach(e=>e(n)):Xi[0](n)};const Er=n=>{$l(n),n.scope.on()},Ui=()=>{At&&At.scope.off(),$l(null)};function od(n){return n.vnode.shapeFlag&4}let rs=!1;function wg(n,e=!1){rs=e;const{props:t,children:i}=n.vnode,r=od(n);cg(n,t,r,e),hg(n,i);const s=r?Rg(n,e):void 0;return rs=!1,s}function Rg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Lh(new Proxy(n.ctx,eg));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?Pg(n):null;Er(n),Pr();const s=ui(i,n,0,[n.props,r]);if(Lr(),Ui(),ph(s)){if(s.then(Ui,Ui),e)return s.then(o=>{jc(n,o,e)}).catch(o=>{Io(o,n,0)});n.asyncDep=s}else jc(n,s,e)}else ad(n,e)}function jc(n,e,t){We(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:lt(e)&&(n.setupState=Nh(e)),ad(n,t)}let qc;function ad(n,e,t){const i=n.type;if(!n.render){if(!e&&qc&&!i.render){const r=i.template||ql(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=wt(wt({isCustomElement:s,delimiters:a},o),l);i.render=qc(r,c)}}n.render=i.render||xn}{Er(n),Pr();try{tg(n)}finally{Lr(),Ui()}}}function Cg(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return jt(n,"get","$attrs"),e[t]}}))}function Pg(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return Cg(n)},slots:n.slots,emit:n.emit,expose:e}}function Zl(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Nh(Lh(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Yr)return Yr[t](n)},has(e,t){return t in e||t in Yr}}))}function Lg(n,e=!0){return We(n)?n.displayName||n.name:n.name||e&&n.__name}function Dg(n){return We(n)&&"__vccOpts"in n}const Ai=(n,e)=>Em(n,e,rs);function Ug(n,e,t){const i=arguments.length;return i===2?lt(e)&&!Be(e)?ul(e)?ot(n,null,[e]):ot(n,e):ot(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&ul(t)&&(t=[t]),ot(n,e,t))}const Ig=Symbol.for("v-scx"),Ng=()=>to(Ig),Og="3.3.8",Fg="http://www.w3.org/2000/svg",Ci=typeof document<"u"?document:null,Yc=Ci&&Ci.createElement("template"),Bg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?Ci.createElementNS(Fg,n):Ci.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Ci.createTextNode(n),createComment:n=>Ci.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ci.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Yc.innerHTML=i?`<svg>${n}</svg>`:n;const a=Yc.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},zg=Symbol("_vtc");function Hg(n,e,t){const i=n[zg];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const kg=Symbol("_vod");function Vg(n,e,t){const i=n.style,r=vt(t);if(t&&!r){if(e&&!vt(e))for(const s in e)t[s]==null&&hl(i,s,"");for(const s in t)hl(i,s,t[s])}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),kg in n&&(i.display=s)}}const Kc=/\s*!important$/;function hl(n,e,t){if(Be(t))t.forEach(i=>hl(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Gg(n,e);Kc.test(t)?n.setProperty(Cr(i),t.replace(Kc,""),"important"):n[i]=t}}const $c=["Webkit","Moz","ms"],aa={};function Gg(n,e){const t=aa[e];if(t)return t;let i=Ln(e);if(i!=="filter"&&i in n)return aa[e]=i;i=Do(i);for(let r=0;r<$c.length;r++){const s=$c[r]+i;if(s in n)return aa[e]=s}return e}const Zc="http://www.w3.org/1999/xlink";function Wg(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Zc,e.slice(6,e.length)):n.setAttributeNS(Zc,e,t);else{const s=qp(e);t==null||s&&!_h(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function Xg(n,e,t,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){n._value=t;const c=a==="OPTION"?n.getAttribute("value"):n.value,u=t??"";c!==u&&(n.value=u),t==null&&n.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=_h(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function jg(n,e,t,i){n.addEventListener(e,t,i)}function qg(n,e,t,i){n.removeEventListener(e,t,i)}const Jc=Symbol("_vei");function Yg(n,e,t,i,r=null){const s=n[Jc]||(n[Jc]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Kg(e);if(i){const c=s[e]=Jg(i,r);jg(n,a,c,l)}else o&&(qg(n,a,o,l),s[e]=void 0)}}const Qc=/(?:Once|Passive|Capture)$/;function Kg(n){let e;if(Qc.test(n)){e={};let i;for(;i=n.match(Qc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Cr(n.slice(2)),e]}let la=0;const $g=Promise.resolve(),Zg=()=>la||($g.then(()=>la=0),la=Date.now());function Jg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;yn(Qg(i,t.value),e,5,[i])};return t.value=n,t.attached=Zg(),t}function Qg(n,e){if(Be(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const eu=/^on[a-z]/,e_=(n,e,t,i,r=!1,s,o,a,l)=>{e==="class"?Hg(n,i,r):e==="style"?Vg(n,t,i):Ro(e)?Il(e)||Yg(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):t_(n,e,i,r))?Xg(n,e,i,s,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Wg(n,e,i,r))};function t_(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&eu.test(e)&&We(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||eu.test(e)&&vt(t)?!1:e in n}const n_=wt({patchProp:e_},Bg);let tu;function i_(){return tu||(tu=pg(n_))}const r_=(...n)=>{const e=i_().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=s_(i);if(!r)return;const s=e._component;!We(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function s_(n){return vt(n)?document.querySelector(n):n}const Jl="/assets/cat-9ac6ab83.jpg",o_="/assets/woman-yoga-5adda500.jpg",a_={class:"text-xl font-bold mb-4"},l_={class:"relative text-white shadow-lg rounded-xl"},c_=Re("img",{class:"rounded-xl",src:o_,alt:"yoga woman"},null,-1),u_=Re("div",{class:"bg-black h-full w-full absolute z-10 top-0 rounded-xl opacity-50"},null,-1),f_={class:"absolute bottom-0 mb-4 mx-4 z-20"},h_={class:"text-xl font-bold"},d_=us({__name:"WorkoutCard",props:["headline","workoutName","workoutDescription"],setup(n){return(e,t)=>(ct(),_t(Gt,null,[Re("p",a_,Wt(n.headline),1),Re("div",l_,[c_,u_,Re("div",f_,[Re("p",h_,Wt(n.workoutName),1),Re("p",null,Wt(n.workoutDescription),1)])])],64))}}),p_="/assets/yoga-vertical-a95177be.jpg",m_=Re("img",{class:"rounded-xl",src:p_,alt:"woman yoga"},null,-1),g_=Re("div",{class:"bg-black h-full w-full absolute z-10 top-0 rounded-xl opacity-50"},null,-1),__={class:"absolute bottom-0 mb-4 mx-4 z-20 text-white"},v_={class:"text-xl font-bold"},ca=us({__name:"Workouts",props:["name","description","pos"],setup(n){return(e,t)=>(ct(),_t("div",{class:Zt(["w-1/2 relative shadow-lg rounded-xl mb-3",n.pos==-1?"ml-6 mr-3":n.pos==1?"mr-6 ml-3":"mx-3"])},[m_,g_,Re("div",__,[Re("p",v_,Wt(n.name),1),Re("p",null,Wt(n.description),1)])],2))}}),x_={key:0,class:"flex justify-center items-center mb-5"},y_={class:"px-4 w-2/3"},M_={class:"text-lg font-bold"},S_={class:"text-stone-500"},E_=Re("img",{src:Jl,alt:"profile picture",class:"rounded-xl w-1/6 shadow-md"},null,-1),b_={key:1,class:"flex justify-center items-center mb-3"},T_={class:"w-1/12 text-center text-stone-900"},A_=Re("img",{src:Jl,alt:"profile picture",class:"ml-4 rounded-xl w-1/6 shadow-md"},null,-1),w_={class:"w-9/12 px-4"},R_={class:"text-lg font-bold"},C_={class:"text-stone-500"},P_={key:2,class:"mb-4"},L_=us({__name:"Scoreboard",setup(n){const e=Ih([]);async function t(){e.value=[["Kitty Smith",8251],["Elli Potter",2353],["Nev Longbottom",1245],["Luna Lovegood",523],["Bella Lestrange",135],["Severus Snape",6],["Albus Dumble",5],["Ron Weasley",2],["Harry Potter",2],["Ginny Weasley",1]]}return qh(()=>{t()}),(i,r)=>{const s=Vh("font-awesome-icon");return ct(!0),_t(Gt,null,Kh(e.value,(o,a)=>(ct(),_t("div",null,[a<3?(ct(),_t("div",x_,[a==0?(ct(),no(s,{key:0,icon:["fas","trophy"],class:"w-1/6 text-amber-500 text-4xl"})):a==1?(ct(),no(s,{key:1,icon:["fas","trophy"],class:"w-1/6 text-stone-400 text-4xl"})):a==2?(ct(),no(s,{key:2,icon:["fas","trophy"],class:"w-1/6 text-amber-700 text-4xl"})):fl("",!0),Re("div",y_,[Re("p",M_,Wt(o[0]),1),Re("p",S_,Wt(o[1])+" Points",1)]),E_])):(ct(),_t("div",b_,[Re("p",T_,Wt(a+1),1),A_,Re("div",w_,[Re("p",R_,Wt(o[0]),1),Re("p",C_,Wt(o[1])+" Points",1)])])),a==2?(ct(),_t("hr",P_)):fl("",!0)]))),256)}}});/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ql="158",ji={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},D_=0,nu=1,U_=2,ld=1,I_=2,Hn=3,mi=0,Xt=1,Vn=2,fi=0,xr=1,iu=2,ru=3,su=4,N_=5,Pi=100,O_=101,F_=102,ou=103,au=104,B_=200,z_=201,H_=202,k_=203,dl=204,pl=205,V_=206,G_=207,W_=208,X_=209,j_=210,q_=211,Y_=212,K_=213,$_=214,Z_=0,J_=1,Q_=2,mo=3,e0=4,t0=5,n0=6,i0=7,ec=0,r0=1,s0=2,hi=0,o0=1,a0=2,l0=3,c0=4,u0=5,cd=300,br=301,Tr=302,ml=303,gl=304,Ho=306,_l=1e3,mn=1001,vl=1002,Bt=1003,lu=1004,ua=1005,rn=1006,f0=1007,ss=1008,di=1009,h0=1010,d0=1011,tc=1012,ud=1013,ai=1014,li=1015,os=1016,fd=1017,hd=1018,Ii=1020,p0=1021,gn=1023,m0=1024,g0=1025,Ni=1026,Ar=1027,_0=1028,dd=1029,v0=1030,pd=1031,md=1033,fa=33776,ha=33777,da=33778,pa=33779,cu=35840,uu=35841,fu=35842,hu=35843,x0=36196,du=37492,pu=37496,mu=37808,gu=37809,_u=37810,vu=37811,xu=37812,yu=37813,Mu=37814,Su=37815,Eu=37816,bu=37817,Tu=37818,Au=37819,wu=37820,Ru=37821,ma=36492,Cu=36494,Pu=36495,y0=36283,Lu=36284,Du=36285,Uu=36286,gd=3e3,Oi=3001,M0=3200,S0=3201,_d=0,E0=1,on="",Tt="srgb",qn="srgb-linear",nc="display-p3",ko="display-p3-linear",go="linear",st="srgb",_o="rec709",vo="p3",Yi=7680,Iu=519,b0=512,T0=513,A0=514,w0=515,R0=516,C0=517,P0=518,L0=519,Nu=35044,Ou="300 es",xl=1035,Wn=2e3,xo=2001;class Gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fu=1234567;const $r=Math.PI/180,as=180/Math.PI;function Dr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]).toLowerCase()}function Pt(n,e,t){return Math.max(e,Math.min(t,n))}function ic(n,e){return(n%e+e)%e}function D0(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function U0(n,e,t){return n!==e?(t-n)/(e-n):0}function Zr(n,e,t){return(1-t)*n+t*e}function I0(n,e,t,i){return Zr(n,e,1-Math.exp(-t*i))}function N0(n,e=1){return e-Math.abs(ic(n,e*2)-e)}function O0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function F0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function B0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function z0(n,e){return n+Math.random()*(e-n)}function H0(n){return n*(.5-Math.random())}function k0(n){n!==void 0&&(Fu=n);let e=Fu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function V0(n){return n*$r}function G0(n){return n*as}function yl(n){return(n&n-1)===0&&n!==0}function W0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function yo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function X0(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),d=o((e-i)/2),m=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*f,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*m,a*c);break;case"YXY":n.set(l*m,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function fr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const j0={DEG2RAD:$r,RAD2DEG:as,generateUUID:Dr,clamp:Pt,euclideanModulo:ic,mapLinear:D0,inverseLerp:U0,lerp:Zr,damp:I0,pingpong:N0,smoothstep:O0,smootherstep:F0,randInt:B0,randFloat:z0,randFloatSpread:H0,seededRandom:k0,degToRad:V0,radToDeg:G0,isPowerOfTwo:yl,ceilPowerOfTwo:W0,floorPowerOfTwo:yo,setQuaternionFromProperEuler:X0,normalize:Ot,denormalize:fr};class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,i,r,s,o,a,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],m=i[5],g=i[8],_=r[0],p=r[3],h=r[6],S=r[1],y=r[4],E=r[7],R=r[2],C=r[5],A=r[8];return s[0]=o*_+a*S+l*R,s[3]=o*p+a*y+l*C,s[6]=o*h+a*E+l*A,s[1]=c*_+u*S+f*R,s[4]=c*p+u*y+f*C,s[7]=c*h+u*E+f*A,s[2]=d*_+m*S+g*R,s[5]=d*p+m*y+g*C,s[8]=d*h+m*E+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,m=c*s-o*l,g=t*f+i*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=d*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=m*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ga.makeScale(e,t)),this}rotate(e){return this.premultiply(ga.makeRotation(-e)),this}translate(e,t){return this.premultiply(ga.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ga=new qe;function vd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Mo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function q0(){const n=Mo("canvas");return n.style.display="block",n}const Bu={};function Jr(n){n in Bu||(Bu[n]=!0,console.warn(n))}const zu=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Hu=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Es={[qn]:{transfer:go,primaries:_o,toReference:n=>n,fromReference:n=>n},[Tt]:{transfer:st,primaries:_o,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ko]:{transfer:go,primaries:vo,toReference:n=>n.applyMatrix3(Hu),fromReference:n=>n.applyMatrix3(zu)},[nc]:{transfer:st,primaries:vo,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Hu),fromReference:n=>n.applyMatrix3(zu).convertLinearToSRGB()}},Y0=new Set([qn,ko]),it={enabled:!0,_workingColorSpace:qn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Y0.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Es[e].toReference,r=Es[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Es[n].primaries},getTransfer:function(n){return n===on?go:Es[n].transfer}};function yr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _a(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ki;class xd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ki===void 0&&(Ki=Mo("canvas")),Ki.width=e.width,Ki.height=e.height;const i=Ki.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ki}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Mo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=yr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(yr(t[i]/255)*255):t[i]=yr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let K0=0;class yd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=Dr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(va(r[o].image)):s.push(va(r[o]))}else s=va(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function va(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $0=0;class Jt extends Gi{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,i=mn,r=mn,s=rn,o=ss,a=gn,l=di,c=Jt.DEFAULT_ANISOTROPY,u=on){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=Dr(),this.name="",this.source=new yd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Jr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Oi?Tt:on),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _l:e.x=e.x-Math.floor(e.x);break;case mn:e.x=e.x<0?0:1;break;case vl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _l:e.y=e.y-Math.floor(e.y);break;case mn:e.y=e.y<0?0:1;break;case vl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Jr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Tt?Oi:gd}set encoding(e){Jr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Oi?Tt:on}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=cd;Jt.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,t=0,i=0,r=1){Et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],g=l[9],_=l[2],p=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,E=(m+1)/2,R=(h+1)/2,C=(u+d)/4,A=(f+_)/4,j=(g+p)/4;return y>E&&y>R?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=C/i,s=A/i):E>R?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=C/r,s=j/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=A/s,r=j/s),this.set(i,r,s,t),this}let S=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(f-_)/S,this.z=(d-u)/S,this.w=Math.acos((c+m+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Z0 extends Gi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Jr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Oi?Tt:on),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Jt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new yd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends Z0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Md extends Jt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class J0 extends Jt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==d||c!==m||u!==g){let p=1-a;const h=l*d+c*m+u*g+f*_,S=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const R=Math.sqrt(y),C=Math.atan2(R,h*S);p=Math.sin(p*C)/R,a=Math.sin(a*C)/R}const E=a*S;if(l=l*p+d*E,c=c*p+m*E,u=u*p+g*E,f=f*p+_*E,p===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=R,c*=R,u*=R,f*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*m-c*d,e[t+1]=l*g+u*d+c*f-a*m,e[t+2]=c*g+u*m+a*d-l*f,e[t+3]=u*g-a*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f-d*m*g;break;case"YXZ":this._x=d*u*f+c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f+d*m*g;break;case"ZXY":this._x=d*u*f-c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f-d*m*g;break;case"ZYX":this._x=d*u*f-c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f+d*m*g;break;case"YZX":this._x=d*u*f+c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f-d*m*g;break;case"XZY":this._x=d*u*f-c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ku.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ku.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xa.copy(this).projectOnVector(e),this.sub(xa)}reflect(e){return this.sub(xa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xa=new F,ku=new Hi;class ki{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,cn):cn.fromBufferAttribute(s,o),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),bs.copy(i.boundingBox)),bs.applyMatrix4(e.matrixWorld),this.union(bs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fr),Ts.subVectors(this.max,Fr),$i.subVectors(e.a,Fr),Zi.subVectors(e.b,Fr),Ji.subVectors(e.c,Fr),Qn.subVectors(Zi,$i),ei.subVectors(Ji,Zi),yi.subVectors($i,Ji);let t=[0,-Qn.z,Qn.y,0,-ei.z,ei.y,0,-yi.z,yi.y,Qn.z,0,-Qn.x,ei.z,0,-ei.x,yi.z,0,-yi.x,-Qn.y,Qn.x,0,-ei.y,ei.x,0,-yi.y,yi.x,0];return!ya(t,$i,Zi,Ji,Ts)||(t=[1,0,0,0,1,0,0,0,1],!ya(t,$i,Zi,Ji,Ts))?!1:(As.crossVectors(Qn,ei),t=[As.x,As.y,As.z],ya(t,$i,Zi,Ji,Ts))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const In=[new F,new F,new F,new F,new F,new F,new F,new F],cn=new F,bs=new ki,$i=new F,Zi=new F,Ji=new F,Qn=new F,ei=new F,yi=new F,Fr=new F,Ts=new F,As=new F,Mi=new F;function ya(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Mi.fromArray(n,s);const a=r.x*Math.abs(Mi.x)+r.y*Math.abs(Mi.y)+r.z*Math.abs(Mi.z),l=e.dot(Mi),c=t.dot(Mi),u=i.dot(Mi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Q0=new ki,Br=new F,Ma=new F;class fs{constructor(e=new F,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Q0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Br.subVectors(e,this.center);const t=Br.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Br,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ma.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Br.copy(e.center).add(Ma)),this.expandByPoint(Br.copy(e.center).sub(Ma))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new F,Sa=new F,ws=new F,ti=new F,Ea=new F,Rs=new F,ba=new F;class Vo{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Sa.copy(e).add(t).multiplyScalar(.5),ws.copy(t).sub(e).normalize(),ti.copy(this.origin).sub(Sa);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ws),a=ti.dot(this.direction),l=-ti.dot(ws),c=ti.lengthSq(),u=Math.abs(1-o*o);let f,d,m,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,m=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Sa).addScaledVector(ws,d),m}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);const i=Nn.dot(this.direction),r=Nn.dot(Nn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,i,r,s){Ea.subVectors(t,e),Rs.subVectors(i,e),ba.crossVectors(Ea,Rs);let o=this.direction.dot(ba),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ti.subVectors(this.origin,e);const l=a*this.direction.dot(Rs.crossVectors(ti,Rs));if(l<0)return null;const c=a*this.direction.dot(Ea.cross(ti));if(c<0||l+c>o)return null;const u=-a*ti.dot(ba);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,i,r,s,o,a,l,c,u,f,d,m,g,_,p){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,d,m,g,_,p)}set(e,t,i,r,s,o,a,l,c,u,f,d,m,g,_,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=g,h[11]=_,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Qi.setFromMatrixColumn(e,0).length(),s=1/Qi.setFromMatrixColumn(e,1).length(),o=1/Qi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,m=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,m=l*f,g=c*u,_=c*f;t[0]=d+_*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,m=l*f,g=c*u,_=c*f;t[0]=d-_*a,t[4]=-o*f,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,m=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-m,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-d*f,t[8]=g*f+m,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+_,t[5]=o*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=a*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ev,e,tv)}lookAt(e,t,i){const r=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),ni.crossVectors(i,Kt),ni.lengthSq()===0&&(Math.abs(i.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),ni.crossVectors(i,Kt)),ni.normalize(),Cs.crossVectors(Kt,ni),r[0]=ni.x,r[4]=Cs.x,r[8]=Kt.x,r[1]=ni.y,r[5]=Cs.y,r[9]=Kt.y,r[2]=ni.z,r[6]=Cs.z,r[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],m=i[13],g=i[2],_=i[6],p=i[10],h=i[14],S=i[3],y=i[7],E=i[11],R=i[15],C=r[0],A=r[4],j=r[8],T=r[12],w=r[1],Q=r[5],ce=r[9],fe=r[13],N=r[2],q=r[6],Z=r[10],G=r[14],ie=r[3],ue=r[7],ae=r[11],O=r[15];return s[0]=o*C+a*w+l*N+c*ie,s[4]=o*A+a*Q+l*q+c*ue,s[8]=o*j+a*ce+l*Z+c*ae,s[12]=o*T+a*fe+l*G+c*O,s[1]=u*C+f*w+d*N+m*ie,s[5]=u*A+f*Q+d*q+m*ue,s[9]=u*j+f*ce+d*Z+m*ae,s[13]=u*T+f*fe+d*G+m*O,s[2]=g*C+_*w+p*N+h*ie,s[6]=g*A+_*Q+p*q+h*ue,s[10]=g*j+_*ce+p*Z+h*ae,s[14]=g*T+_*fe+p*G+h*O,s[3]=S*C+y*w+E*N+R*ie,s[7]=S*A+y*Q+E*q+R*ue,s[11]=S*j+y*ce+E*Z+R*ae,s[15]=S*T+y*fe+E*G+R*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],g=e[3],_=e[7],p=e[11],h=e[15];return g*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*m-i*l*m)+_*(+t*l*m-t*c*d+s*o*d-r*o*m+r*c*u-s*l*u)+p*(+t*c*f-t*a*m-s*o*f+i*o*m+s*a*u-i*c*u)+h*(-r*a*u-t*l*f+t*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],g=e[12],_=e[13],p=e[14],h=e[15],S=f*p*c-_*d*c+_*l*m-a*p*m-f*l*h+a*d*h,y=g*d*c-u*p*c-g*l*m+o*p*m+u*l*h-o*d*h,E=u*_*c-g*f*c+g*a*m-o*_*m-u*a*h+o*f*h,R=g*f*l-u*_*l-g*a*d+o*_*d+u*a*p-o*f*p,C=t*S+i*y+r*E+s*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=S*A,e[1]=(_*d*s-f*p*s-_*r*m+i*p*m+f*r*h-i*d*h)*A,e[2]=(a*p*s-_*l*s+_*r*c-i*p*c-a*r*h+i*l*h)*A,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*m-i*l*m)*A,e[4]=y*A,e[5]=(u*p*s-g*d*s+g*r*m-t*p*m-u*r*h+t*d*h)*A,e[6]=(g*l*s-o*p*s-g*r*c+t*p*c+o*r*h-t*l*h)*A,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*m+t*l*m)*A,e[8]=E*A,e[9]=(g*f*s-u*_*s-g*i*m+t*_*m+u*i*h-t*f*h)*A,e[10]=(o*_*s-g*a*s+g*i*c-t*_*c-o*i*h+t*a*h)*A,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*m-t*a*m)*A,e[12]=R*A,e[13]=(u*_*r-g*f*r+g*i*d-t*_*d-u*i*p+t*f*p)*A,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*p-t*a*p)*A,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*d+t*a*d)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,m=s*u,g=s*f,_=o*u,p=o*f,h=a*f,S=l*c,y=l*u,E=l*f,R=i.x,C=i.y,A=i.z;return r[0]=(1-(_+h))*R,r[1]=(m+E)*R,r[2]=(g-y)*R,r[3]=0,r[4]=(m-E)*C,r[5]=(1-(d+h))*C,r[6]=(p+S)*C,r[7]=0,r[8]=(g+y)*A,r[9]=(p-S)*A,r[10]=(1-(d+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Qi.set(r[0],r[1],r[2]).length();const o=Qi.set(r[4],r[5],r[6]).length(),a=Qi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],un.copy(this);const c=1/s,u=1/o,f=1/a;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=u,un.elements[5]*=u,un.elements[6]*=u,un.elements[8]*=f,un.elements[9]*=f,un.elements[10]*=f,t.setFromRotationMatrix(un),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Wn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let m,g;if(a===Wn)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===xo)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Wn){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),d=(t+e)*c,m=(i+r)*u;let g,_;if(a===Wn)g=(o+s)*f,_=-2*f;else if(a===xo)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Qi=new F,un=new ht,ev=new F(0,0,0),tv=new F(1,1,1),ni=new F,Cs=new F,Kt=new F,Vu=new ht,Gu=new Hi;class Go{constructor(e=0,t=0,i=0,r=Go.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Pt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Vu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gu.setFromEuler(this),this.setFromQuaternion(Gu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Go.DEFAULT_ORDER="XYZ";class Sd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nv=0;const Wu=new F,er=new Hi,On=new ht,Ps=new F,zr=new F,iv=new F,rv=new Hi,Xu=new F(1,0,0),ju=new F(0,1,0),qu=new F(0,0,1),sv={type:"added"},ov={type:"removed"};class bt extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nv++}),this.uuid=Dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new F,t=new Go,i=new Hi,r=new F(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new qe}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Sd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.multiply(er),this}rotateOnWorldAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.premultiply(er),this}rotateX(e){return this.rotateOnAxis(Xu,e)}rotateY(e){return this.rotateOnAxis(ju,e)}rotateZ(e){return this.rotateOnAxis(qu,e)}translateOnAxis(e,t){return Wu.copy(e).applyQuaternion(this.quaternion),this.position.add(Wu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xu,e)}translateY(e){return this.translateOnAxis(ju,e)}translateZ(e){return this.translateOnAxis(qu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ps.copy(e):Ps.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(zr,Ps,this.up):On.lookAt(Ps,zr,this.up),this.quaternion.setFromRotationMatrix(On),r&&(On.extractRotation(r.matrixWorld),er.setFromRotationMatrix(On),this.quaternion.premultiply(er.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(sv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ov)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,e,iv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,rv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}bt.DEFAULT_UP=new F(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new F,Fn=new F,Ta=new F,Bn=new F,tr=new F,nr=new F,Yu=new F,Aa=new F,wa=new F,Ra=new F;let Ls=!1;class dn{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),fn.subVectors(e,t),r.cross(fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){fn.subVectors(r,t),Fn.subVectors(i,t),Ta.subVectors(e,t);const o=fn.dot(fn),a=fn.dot(Fn),l=fn.dot(Ta),c=Fn.dot(Fn),u=Fn.dot(Ta),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const d=1/f,m=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Bn),Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getUV(e,t,i,r,s,o,a,l){return Ls===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ls=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Bn),l.setScalar(0),l.addScaledVector(s,Bn.x),l.addScaledVector(o,Bn.y),l.addScaledVector(a,Bn.z),l}static isFrontFacing(e,t,i,r){return fn.subVectors(i,t),Fn.subVectors(e,t),fn.cross(Fn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),fn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Ls===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ls=!0),dn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return dn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;tr.subVectors(r,i),nr.subVectors(s,i),Aa.subVectors(e,i);const l=tr.dot(Aa),c=nr.dot(Aa);if(l<=0&&c<=0)return t.copy(i);wa.subVectors(e,r);const u=tr.dot(wa),f=nr.dot(wa);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(tr,o);Ra.subVectors(e,s);const m=tr.dot(Ra),g=nr.dot(Ra);if(g>=0&&m<=g)return t.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(nr,a);const p=u*g-m*f;if(p<=0&&f-u>=0&&m-g>=0)return Yu.subVectors(s,r),a=(f-u)/(f-u+(m-g)),t.copy(r).addScaledVector(Yu,a);const h=1/(p+_+d);return o=_*h,a=d*h,t.copy(i).addScaledVector(tr,o).addScaledVector(nr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},Ds={h:0,s:0,l:0};function Ca(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=it.workingColorSpace){if(e=ic(e,1),t=Pt(t,0,1),i=Pt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ca(o,s,e+1/3),this.g=Ca(o,s,e),this.b=Ca(o,s,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,t=Tt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){const i=Ed[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}copyLinearToSRGB(e){return this.r=_a(e.r),this.g=_a(e.g),this.b=_a(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return it.fromWorkingColorSpace(Ct.copy(this),e),Math.round(Pt(Ct.r*255,0,255))*65536+Math.round(Pt(Ct.g*255,0,255))*256+Math.round(Pt(Ct.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(Ct.copy(this),t);const i=Ct.r,r=Ct.g,s=Ct.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=Tt){it.fromWorkingColorSpace(Ct.copy(this),e);const t=Ct.r,i=Ct.g,r=Ct.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ii),this.setHSL(ii.h+e,ii.s+t,ii.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ii),e.getHSL(Ds);const i=Zr(ii.h,Ds.h,t),r=Zr(ii.s,Ds.s,t),s=Zr(ii.l,Ds.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new Ze;Ze.NAMES=Ed;let av=0;class Yn extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:av++}),this.uuid=Dr(),this.name="",this.type="Material",this.blending=xr,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dl,this.blendDst=pl,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Iu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xr&&(i.blending=this.blending),this.side!==mi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==dl&&(i.blendSrc=this.blendSrc),this.blendDst!==pl&&(i.blendDst=this.blendDst),this.blendEquation!==Pi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==mo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Iu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bd extends Yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new F,Us=new Ge;class Pn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Nu,this.updateRange={offset:0,count:-1},this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Us.fromBufferAttribute(this,t),Us.applyMatrix3(e),this.setXY(t,Us.x,Us.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=fr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Td extends Pn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ad extends Pn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class zt extends Pn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let lv=0;const tn=new ht,Pa=new bt,ir=new F,$t=new ki,Hr=new ki,St=new F;class Mn extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lv++}),this.uuid=Dr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vd(e)?Ad:Td)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,i){return tn.makeTranslation(e,t,i),this.applyMatrix4(tn),this}scale(e,t,i){return tn.makeScale(e,t,i),this.applyMatrix4(tn),this}lookAt(e){return Pa.lookAt(e),Pa.updateMatrix(),this.applyMatrix4(Pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new zt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];$t.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Hr.setFromBufferAttribute(a),this.morphTargetsRelative?(St.addVectors($t.min,Hr.min),$t.expandByPoint(St),St.addVectors($t.max,Hr.max),$t.expandByPoint(St)):($t.expandByPoint(Hr.min),$t.expandByPoint(Hr.max))}$t.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)St.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(St));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)St.fromBufferAttribute(a,c),l&&(ir.fromBufferAttribute(e,c),St.add(ir)),r=Math.max(r,i.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let w=0;w<a;w++)c[w]=new F,u[w]=new F;const f=new F,d=new F,m=new F,g=new Ge,_=new Ge,p=new Ge,h=new F,S=new F;function y(w,Q,ce){f.fromArray(r,w*3),d.fromArray(r,Q*3),m.fromArray(r,ce*3),g.fromArray(o,w*2),_.fromArray(o,Q*2),p.fromArray(o,ce*2),d.sub(f),m.sub(f),_.sub(g),p.sub(g);const fe=1/(_.x*p.y-p.x*_.y);isFinite(fe)&&(h.copy(d).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(fe),S.copy(m).multiplyScalar(_.x).addScaledVector(d,-p.x).multiplyScalar(fe),c[w].add(h),c[Q].add(h),c[ce].add(h),u[w].add(S),u[Q].add(S),u[ce].add(S))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let w=0,Q=E.length;w<Q;++w){const ce=E[w],fe=ce.start,N=ce.count;for(let q=fe,Z=fe+N;q<Z;q+=3)y(i[q+0],i[q+1],i[q+2])}const R=new F,C=new F,A=new F,j=new F;function T(w){A.fromArray(s,w*3),j.copy(A);const Q=c[w];R.copy(Q),R.sub(A.multiplyScalar(A.dot(Q))).normalize(),C.crossVectors(j,Q);const fe=C.dot(u[w])<0?-1:1;l[w*4]=R.x,l[w*4+1]=R.y,l[w*4+2]=R.z,l[w*4+3]=fe}for(let w=0,Q=E.length;w<Q;++w){const ce=E[w],fe=ce.start,N=ce.count;for(let q=fe,Z=fe+N;q<Z;q+=3)T(i[q+0]),T(i[q+1]),T(i[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,c=new F,u=new F,f=new F;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*u;for(let h=0;h<u;h++)d[g++]=c[m++]}return new Pn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ku=new ht,Si=new Vo,Is=new fs,$u=new F,rr=new F,sr=new F,or=new F,La=new F,Ns=new F,Os=new Ge,Fs=new Ge,Bs=new Ge,Zu=new F,Ju=new F,Qu=new F,zs=new F,Hs=new F;class wn extends bt{constructor(e=new Mn,t=new bd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ns.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(La.fromBufferAttribute(f,e),o?Ns.addScaledVector(La,u):Ns.addScaledVector(La.sub(t),u))}t.add(Ns)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Is.copy(i.boundingSphere),Is.applyMatrix4(s),Si.copy(e.ray).recast(e.near),!(Is.containsPoint(Si.origin)===!1&&(Si.intersectSphere(Is,$u)===null||Si.origin.distanceToSquared($u)>(e.far-e.near)**2))&&(Ku.copy(s).invert(),Si.copy(e.ray).applyMatrix4(Ku),!(i.boundingBox!==null&&Si.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Si)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],h=o[p.materialIndex],S=Math.max(p.start,m.start),y=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let E=S,R=y;E<R;E+=3){const C=a.getX(E),A=a.getX(E+1),j=a.getX(E+2);r=ks(this,h,e,i,c,u,f,C,A,j),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,h=_;p<h;p+=3){const S=a.getX(p),y=a.getX(p+1),E=a.getX(p+2);r=ks(this,o,e,i,c,u,f,S,y,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],h=o[p.materialIndex],S=Math.max(p.start,m.start),y=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=S,R=y;E<R;E+=3){const C=E,A=E+1,j=E+2;r=ks(this,h,e,i,c,u,f,C,A,j),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,h=_;p<h;p+=3){const S=p,y=p+1,E=p+2;r=ks(this,o,e,i,c,u,f,S,y,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function cv(n,e,t,i,r,s,o,a){let l;if(e.side===Xt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===mi,a),l===null)return null;Hs.copy(a),Hs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Hs);return c<t.near||c>t.far?null:{distance:c,point:Hs.clone(),object:n}}function ks(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,rr),n.getVertexPosition(l,sr),n.getVertexPosition(c,or);const u=cv(n,e,t,i,rr,sr,or,zs);if(u){r&&(Os.fromBufferAttribute(r,a),Fs.fromBufferAttribute(r,l),Bs.fromBufferAttribute(r,c),u.uv=dn.getInterpolation(zs,rr,sr,or,Os,Fs,Bs,new Ge)),s&&(Os.fromBufferAttribute(s,a),Fs.fromBufferAttribute(s,l),Bs.fromBufferAttribute(s,c),u.uv1=dn.getInterpolation(zs,rr,sr,or,Os,Fs,Bs,new Ge),u.uv2=u.uv1),o&&(Zu.fromBufferAttribute(o,a),Ju.fromBufferAttribute(o,l),Qu.fromBufferAttribute(o,c),u.normal=dn.getInterpolation(zs,rr,sr,or,Zu,Ju,Qu,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new F,materialIndex:0};dn.getNormal(rr,sr,or,f.normal),u.face=f}return u}class hs extends Mn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,m=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(u,3)),this.setAttribute("uv",new zt(f,2));function g(_,p,h,S,y,E,R,C,A,j,T){const w=E/A,Q=R/j,ce=E/2,fe=R/2,N=C/2,q=A+1,Z=j+1;let G=0,ie=0;const ue=new F;for(let ae=0;ae<Z;ae++){const O=ae*Q-fe;for(let k=0;k<q;k++){const ye=k*w-ce;ue[_]=ye*S,ue[p]=O*y,ue[h]=N,c.push(ue.x,ue.y,ue.z),ue[_]=0,ue[p]=0,ue[h]=C>0?1:-1,u.push(ue.x,ue.y,ue.z),f.push(k/A),f.push(1-ae/j),G+=1}}for(let ae=0;ae<j;ae++)for(let O=0;O<A;O++){const k=d+O+q*ae,ye=d+O+q*(ae+1),Se=d+(O+1)+q*(ae+1),Ae=d+(O+1)+q*ae;l.push(k,ye,Ae),l.push(ye,Se,Ae),ie+=6}a.addGroup(m,ie,T),m+=ie,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ft(n){const e={};for(let t=0;t<n.length;t++){const i=wr(n[t]);for(const r in i)e[r]=i[r]}return e}function uv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function wd(n){return n.getRenderTarget()===null?n.outputColorSpace:it.workingColorSpace}const fv={clone:wr,merge:Ft};var hv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vi extends Yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hv,this.fragmentShader=dv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wr(e.uniforms),this.uniformsGroups=uv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Rd extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Wn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class sn extends Rd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=as*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return as*2*Math.atan(Math.tan($r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($r*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ar=-90,lr=1;class pv extends bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new sn(ar,lr,e,t);r.layers=this.layers,this.add(r);const s=new sn(ar,lr,e,t);s.layers=this.layers,this.add(s);const o=new sn(ar,lr,e,t);o.layers=this.layers,this.add(o);const a=new sn(ar,lr,e,t);a.layers=this.layers,this.add(a);const l=new sn(ar,lr,e,t);l.layers=this.layers,this.add(l);const c=new sn(ar,lr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Wn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Cd extends Jt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:br,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mv extends zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Jr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Oi?Tt:on),this.texture=new Cd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new hs(5,5,5),s=new Vi({name:"CubemapFromEquirect",uniforms:wr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xt,blending:fi});s.uniforms.tEquirect.value=t;const o=new wn(r,s),a=t.minFilter;return t.minFilter===ss&&(t.minFilter=rn),new pv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Da=new F,gv=new F,_v=new qe;class oi{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Da.subVectors(i,t).cross(gv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Da),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||_v.getNormalMatrix(e),r=this.coplanarPoint(Da).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ei=new fs,Vs=new F;class rc{constructor(e=new oi,t=new oi,i=new oi,r=new oi,s=new oi,o=new oi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Wn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],m=r[8],g=r[9],_=r[10],p=r[11],h=r[12],S=r[13],y=r[14],E=r[15];if(i[0].setComponents(l-s,d-c,p-m,E-h).normalize(),i[1].setComponents(l+s,d+c,p+m,E+h).normalize(),i[2].setComponents(l+o,d+u,p+g,E+S).normalize(),i[3].setComponents(l-o,d-u,p-g,E-S).normalize(),i[4].setComponents(l-a,d-f,p-_,E-y).normalize(),t===Wn)i[5].setComponents(l+a,d+f,p+_,E+y).normalize();else if(t===xo)i[5].setComponents(a,f,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(e){return Ei.center.set(0,0,0),Ei.radius=.7071067811865476,Ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Vs.x=r.normal.x>0?e.max.x:e.min.x,Vs.y=r.normal.y>0?e.max.y:e.min.y,Vs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Vs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pd(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function vv(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,d=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,f,d),c.onUploadCallback();let g;if(f instanceof Float32Array)g=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=n.SHORT;else if(f instanceof Uint32Array)g=n.UNSIGNED_INT;else if(f instanceof Int32Array)g=n.INT;else if(f instanceof Int8Array)g=n.BYTE;else if(f instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const d=u.array,m=u.updateRange;n.bindBuffer(f,c),m.count===-1?n.bufferSubData(f,0,d):(t?n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class sc extends Mn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=t/l,m=[],g=[],_=[],p=[];for(let h=0;h<u;h++){const S=h*d-o;for(let y=0;y<c;y++){const E=y*f-s;g.push(E,-S,0),_.push(0,0,1),p.push(y/a),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let S=0;S<a;S++){const y=S+c*h,E=S+c*(h+1),R=S+1+c*(h+1),C=S+1+c*h;m.push(y,E,C),m.push(E,R,C)}this.setIndex(m),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(_,3)),this.setAttribute("uv",new zt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sc(e.width,e.height,e.widthSegments,e.heightSegments)}}var xv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Mv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ev=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,bv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Av=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pv=`#ifdef USE_IRIDESCENCE
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
#endif`,Lv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Dv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Uv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Iv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ov=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,zv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Hv=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,kv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
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
#endif`,Vv=`vec3 transformedNormal = objectNormal;
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
#endif`,Gv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yv=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Kv=`#ifdef USE_ENVMAP
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
#endif`,$v=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qv=`#ifdef USE_ENVMAP
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
#endif`,ex=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ix=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ox=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ax=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,ux=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,fx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,px=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,gx=`struct PhysicalMaterial {
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
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,_x=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ex=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,bx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ax=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Px=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lx=`#ifdef USE_MORPHNORMALS
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
#endif`,Dx=`#ifdef USE_MORPHTARGETS
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
#endif`,Ux=`#ifdef USE_MORPHTARGETS
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
#endif`,Ix=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Nx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
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
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,jx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$x=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
#endif`,Qx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,ey=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ty=`float getShadowMask() {
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
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
}`,ny=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iy=`#ifdef USE_SKINNING
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
#endif`,ry=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sy=`#ifdef USE_SKINNING
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
#endif`,oy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ay=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ly=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,uy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fy=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
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
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,py=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,my=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_y=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,My=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sy=`#include <common>
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
}`,Ey=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,by=`#define DISTANCE
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
}`,Ty=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ry=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
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
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Py=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
}`,Ly=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
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
}`,Uy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
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
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iy=`#define MATCAP
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
}`,Ny=`#define MATCAP
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Oy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Fy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
}`,By=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
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
}`,zy=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
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
}`,ky=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
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
}`,Gy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
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
}`,Xy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jy=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
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
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yy=`uniform float rotation;
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
}`,Ky=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:xv,alphahash_pars_fragment:yv,alphamap_fragment:Mv,alphamap_pars_fragment:Sv,alphatest_fragment:Ev,alphatest_pars_fragment:bv,aomap_fragment:Tv,aomap_pars_fragment:Av,begin_vertex:wv,beginnormal_vertex:Rv,bsdfs:Cv,iridescence_fragment:Pv,bumpmap_pars_fragment:Lv,clipping_planes_fragment:Dv,clipping_planes_pars_fragment:Uv,clipping_planes_pars_vertex:Iv,clipping_planes_vertex:Nv,color_fragment:Ov,color_pars_fragment:Fv,color_pars_vertex:Bv,color_vertex:zv,common:Hv,cube_uv_reflection_fragment:kv,defaultnormal_vertex:Vv,displacementmap_pars_vertex:Gv,displacementmap_vertex:Wv,emissivemap_fragment:Xv,emissivemap_pars_fragment:jv,colorspace_fragment:qv,colorspace_pars_fragment:Yv,envmap_fragment:Kv,envmap_common_pars_fragment:$v,envmap_pars_fragment:Zv,envmap_pars_vertex:Jv,envmap_physical_pars_fragment:ux,envmap_vertex:Qv,fog_vertex:ex,fog_pars_vertex:tx,fog_fragment:nx,fog_pars_fragment:ix,gradientmap_pars_fragment:rx,lightmap_fragment:sx,lightmap_pars_fragment:ox,lights_lambert_fragment:ax,lights_lambert_pars_fragment:lx,lights_pars_begin:cx,lights_toon_fragment:fx,lights_toon_pars_fragment:hx,lights_phong_fragment:dx,lights_phong_pars_fragment:px,lights_physical_fragment:mx,lights_physical_pars_fragment:gx,lights_fragment_begin:_x,lights_fragment_maps:vx,lights_fragment_end:xx,logdepthbuf_fragment:yx,logdepthbuf_pars_fragment:Mx,logdepthbuf_pars_vertex:Sx,logdepthbuf_vertex:Ex,map_fragment:bx,map_pars_fragment:Tx,map_particle_fragment:Ax,map_particle_pars_fragment:wx,metalnessmap_fragment:Rx,metalnessmap_pars_fragment:Cx,morphcolor_vertex:Px,morphnormal_vertex:Lx,morphtarget_pars_vertex:Dx,morphtarget_vertex:Ux,normal_fragment_begin:Ix,normal_fragment_maps:Nx,normal_pars_fragment:Ox,normal_pars_vertex:Fx,normal_vertex:Bx,normalmap_pars_fragment:zx,clearcoat_normal_fragment_begin:Hx,clearcoat_normal_fragment_maps:kx,clearcoat_pars_fragment:Vx,iridescence_pars_fragment:Gx,opaque_fragment:Wx,packing:Xx,premultiplied_alpha_fragment:jx,project_vertex:qx,dithering_fragment:Yx,dithering_pars_fragment:Kx,roughnessmap_fragment:$x,roughnessmap_pars_fragment:Zx,shadowmap_pars_fragment:Jx,shadowmap_pars_vertex:Qx,shadowmap_vertex:ey,shadowmask_pars_fragment:ty,skinbase_vertex:ny,skinning_pars_vertex:iy,skinning_vertex:ry,skinnormal_vertex:sy,specularmap_fragment:oy,specularmap_pars_fragment:ay,tonemapping_fragment:ly,tonemapping_pars_fragment:cy,transmission_fragment:uy,transmission_pars_fragment:fy,uv_pars_fragment:hy,uv_pars_vertex:dy,uv_vertex:py,worldpos_vertex:my,background_vert:gy,background_frag:_y,backgroundCube_vert:vy,backgroundCube_frag:xy,cube_vert:yy,cube_frag:My,depth_vert:Sy,depth_frag:Ey,distanceRGBA_vert:by,distanceRGBA_frag:Ty,equirect_vert:Ay,equirect_frag:wy,linedashed_vert:Ry,linedashed_frag:Cy,meshbasic_vert:Py,meshbasic_frag:Ly,meshlambert_vert:Dy,meshlambert_frag:Uy,meshmatcap_vert:Iy,meshmatcap_frag:Ny,meshnormal_vert:Oy,meshnormal_frag:Fy,meshphong_vert:By,meshphong_frag:zy,meshphysical_vert:Hy,meshphysical_frag:ky,meshtoon_vert:Vy,meshtoon_frag:Gy,points_vert:Wy,points_frag:Xy,shadow_vert:jy,shadow_frag:qy,sprite_vert:Yy,sprite_frag:Ky},xe={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Tn={basic:{uniforms:Ft([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Ft([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Ft([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Ft([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Ft([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Ft([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Ft([xe.points,xe.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Ft([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Ft([xe.common,xe.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Ft([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Ft([xe.sprite,xe.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Ft([xe.common,xe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Ft([xe.lights,xe.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Tn.physical={uniforms:Ft([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Gs={r:0,b:0,g:0};function $y(n,e,t,i,r,s,o){const a=new Ze(0);let l=s===!0?0:1,c,u,f=null,d=0,m=null;function g(p,h){let S=!1,y=h.isScene===!0?h.background:null;y&&y.isTexture&&(y=(h.backgroundBlurriness>0?t:e).get(y)),y===null?_(a,l):y&&y.isColor&&(_(y,1),S=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Ho)?(u===void 0&&(u=new wn(new hs(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:wr(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=it.getTransfer(y.colorSpace)!==st,(f!==y||d!==y.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=y,d=y.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new wn(new sc(2,2),new Vi({name:"BackgroundMaterial",uniforms:wr(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=it.getTransfer(y.colorSpace)!==st,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||d!==y.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=y,d=y.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,h){p.getRGB(Gs,wd(n)),i.buffers.color.setClear(Gs.r,Gs.g,Gs.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(p,h=1){a.set(p),l=h,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function Zy(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function f(N,q,Z,G,ie){let ue=!1;if(o){const ae=_(G,Z,q);c!==ae&&(c=ae,m(c.object)),ue=h(N,G,Z,ie),ue&&S(N,G,Z,ie)}else{const ae=q.wireframe===!0;(c.geometry!==G.id||c.program!==Z.id||c.wireframe!==ae)&&(c.geometry=G.id,c.program=Z.id,c.wireframe=ae,ue=!0)}ie!==null&&t.update(ie,n.ELEMENT_ARRAY_BUFFER),(ue||u)&&(u=!1,j(N,q,Z,G),ie!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(ie).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(N){return i.isWebGL2?n.bindVertexArray(N):s.bindVertexArrayOES(N)}function g(N){return i.isWebGL2?n.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function _(N,q,Z){const G=Z.wireframe===!0;let ie=a[N.id];ie===void 0&&(ie={},a[N.id]=ie);let ue=ie[q.id];ue===void 0&&(ue={},ie[q.id]=ue);let ae=ue[G];return ae===void 0&&(ae=p(d()),ue[G]=ae),ae}function p(N){const q=[],Z=[],G=[];for(let ie=0;ie<r;ie++)q[ie]=0,Z[ie]=0,G[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:Z,attributeDivisors:G,object:N,attributes:{},index:null}}function h(N,q,Z,G){const ie=c.attributes,ue=q.attributes;let ae=0;const O=Z.getAttributes();for(const k in O)if(O[k].location>=0){const Se=ie[k];let Ae=ue[k];if(Ae===void 0&&(k==="instanceMatrix"&&N.instanceMatrix&&(Ae=N.instanceMatrix),k==="instanceColor"&&N.instanceColor&&(Ae=N.instanceColor)),Se===void 0||Se.attribute!==Ae||Ae&&Se.data!==Ae.data)return!0;ae++}return c.attributesNum!==ae||c.index!==G}function S(N,q,Z,G){const ie={},ue=q.attributes;let ae=0;const O=Z.getAttributes();for(const k in O)if(O[k].location>=0){let Se=ue[k];Se===void 0&&(k==="instanceMatrix"&&N.instanceMatrix&&(Se=N.instanceMatrix),k==="instanceColor"&&N.instanceColor&&(Se=N.instanceColor));const Ae={};Ae.attribute=Se,Se&&Se.data&&(Ae.data=Se.data),ie[k]=Ae,ae++}c.attributes=ie,c.attributesNum=ae,c.index=G}function y(){const N=c.newAttributes;for(let q=0,Z=N.length;q<Z;q++)N[q]=0}function E(N){R(N,0)}function R(N,q){const Z=c.newAttributes,G=c.enabledAttributes,ie=c.attributeDivisors;Z[N]=1,G[N]===0&&(n.enableVertexAttribArray(N),G[N]=1),ie[N]!==q&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,q),ie[N]=q)}function C(){const N=c.newAttributes,q=c.enabledAttributes;for(let Z=0,G=q.length;Z<G;Z++)q[Z]!==N[Z]&&(n.disableVertexAttribArray(Z),q[Z]=0)}function A(N,q,Z,G,ie,ue,ae){ae===!0?n.vertexAttribIPointer(N,q,Z,ie,ue):n.vertexAttribPointer(N,q,Z,G,ie,ue)}function j(N,q,Z,G){if(i.isWebGL2===!1&&(N.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const ie=G.attributes,ue=Z.getAttributes(),ae=q.defaultAttributeValues;for(const O in ue){const k=ue[O];if(k.location>=0){let ye=ie[O];if(ye===void 0&&(O==="instanceMatrix"&&N.instanceMatrix&&(ye=N.instanceMatrix),O==="instanceColor"&&N.instanceColor&&(ye=N.instanceColor)),ye!==void 0){const Se=ye.normalized,Ae=ye.itemSize,Pe=t.get(ye);if(Pe===void 0)continue;const He=Pe.buffer,Ne=Pe.type,Ie=Pe.bytesPerElement,nt=i.isWebGL2===!0&&(Ne===n.INT||Ne===n.UNSIGNED_INT||ye.gpuType===ud);if(ye.isInterleavedBufferAttribute){const ze=ye.data,x=ze.stride,L=ye.offset;if(ze.isInstancedInterleavedBuffer){for(let I=0;I<k.locationSize;I++)R(k.location+I,ze.meshPerAttribute);N.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ze.meshPerAttribute*ze.count)}else for(let I=0;I<k.locationSize;I++)E(k.location+I);n.bindBuffer(n.ARRAY_BUFFER,He);for(let I=0;I<k.locationSize;I++)A(k.location+I,Ae/k.locationSize,Ne,Se,x*Ie,(L+Ae/k.locationSize*I)*Ie,nt)}else{if(ye.isInstancedBufferAttribute){for(let ze=0;ze<k.locationSize;ze++)R(k.location+ze,ye.meshPerAttribute);N.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let ze=0;ze<k.locationSize;ze++)E(k.location+ze);n.bindBuffer(n.ARRAY_BUFFER,He);for(let ze=0;ze<k.locationSize;ze++)A(k.location+ze,Ae/k.locationSize,Ne,Se,Ae*Ie,Ae/k.locationSize*ze*Ie,nt)}}else if(ae!==void 0){const Se=ae[O];if(Se!==void 0)switch(Se.length){case 2:n.vertexAttrib2fv(k.location,Se);break;case 3:n.vertexAttrib3fv(k.location,Se);break;case 4:n.vertexAttrib4fv(k.location,Se);break;default:n.vertexAttrib1fv(k.location,Se)}}}}C()}function T(){ce();for(const N in a){const q=a[N];for(const Z in q){const G=q[Z];for(const ie in G)g(G[ie].object),delete G[ie];delete q[Z]}delete a[N]}}function w(N){if(a[N.id]===void 0)return;const q=a[N.id];for(const Z in q){const G=q[Z];for(const ie in G)g(G[ie].object),delete G[ie];delete q[Z]}delete a[N.id]}function Q(N){for(const q in a){const Z=a[q];if(Z[N.id]===void 0)continue;const G=Z[N.id];for(const ie in G)g(G[ie].object),delete G[ie];delete Z[N.id]}}function ce(){fe(),u=!0,c!==l&&(c=l,m(c.object))}function fe(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:ce,resetDefaultState:fe,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:Q,initAttributes:y,enableAttribute:E,disableUnusedAttributes:C}}function Jy(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let d,m;if(r)d=n,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,c,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function Qy(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,E=o||e.has("OES_texture_float"),R=y&&E,C=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:S,vertexTextures:y,floatFragmentTextures:E,floatVertexTextures:R,maxSamples:C}}function eM(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new oi,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,m){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,h=n.get(f);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const S=s?0:i,y=S*4;let E=h.clippingState||null;l.value=E,E=u(g,d,y,m);for(let R=0;R!==y;++R)E[R]=t[R];h.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,m,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const h=m+_*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<h)&&(p=new Float32Array(h));for(let y=0,E=m;y!==_;++y,E+=4)o.copy(f[y]).applyMatrix4(S,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function tM(n){let e=new WeakMap;function t(o,a){return a===ml?o.mapping=br:a===gl&&(o.mapping=Tr),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===ml||a===gl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new mv(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Ld extends Rd{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const dr=4,ef=[.125,.215,.35,.446,.526,.582],Li=20,Ua=new Ld,tf=new Ze;let Ia=null,Na=0,Oa=0;const wi=(1+Math.sqrt(5))/2,cr=1/wi,nf=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,wi,cr),new F(0,wi,-cr),new F(cr,0,wi),new F(-cr,0,wi),new F(wi,cr,0),new F(-wi,cr,0)];class rf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ia=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=af(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ia,Na,Oa),e.scissorTest=!1,Ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===br||e.mapping===Tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ia=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:os,format:gn,colorSpace:qn,depthBuffer:!1},r=sf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sf(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nM(s)),this._blurMaterial=iM(s,e,t)}return r}_compileMaterial(e){const t=new wn(this._lodPlanes[0],e);this._renderer.compile(t,Ua)}_sceneToCubeUV(e,t,i,r){const a=new sn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(tf),u.toneMapping=hi,u.autoClear=!1;const m=new bd({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),g=new wn(new hs,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(tf),_=!0);for(let h=0;h<6;h++){const S=h%3;S===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):S===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const y=this._cubeSize;Ws(r,S*y,h>2?y:0,y,y),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===br||e.mapping===Tr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=af()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=of());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new wn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ws(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ua)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=nf[(r-1)%nf.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new wn(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Li-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):Li;p>Li&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Li}`);const h=[];let S=0;for(let A=0;A<Li;++A){const j=A/_,T=Math.exp(-j*j/2);h.push(T),A===0?S+=T:A<p&&(S+=2*T)}for(let A=0;A<h.length;A++)h[A]=h[A]/S;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;const E=this._sizeLods[r],R=3*E*(r>y-dr?r-y+dr:0),C=4*(this._cubeSize-E);Ws(t,R,C,3*E,2*E),l.setRenderTarget(t),l.render(f,Ua)}}function nM(n){const e=[],t=[],i=[];let r=n;const s=n-dr+1+ef.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-dr?l=ef[o-n+dr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,_=3,p=2,h=1,S=new Float32Array(_*g*m),y=new Float32Array(p*g*m),E=new Float32Array(h*g*m);for(let C=0;C<m;C++){const A=C%3*2/3-1,j=C>2?0:-1,T=[A,j,0,A+2/3,j,0,A+2/3,j+1,0,A,j,0,A+2/3,j+1,0,A,j+1,0];S.set(T,_*g*C),y.set(d,p*g*C);const w=[C,C,C,C,C,C];E.set(w,h*g*C)}const R=new Mn;R.setAttribute("position",new Pn(S,_)),R.setAttribute("uv",new Pn(y,p)),R.setAttribute("faceIndex",new Pn(E,h)),e.push(R),r>dr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function sf(n,e,t){const i=new zi(n,e,t);return i.texture.mapping=Ho,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ws(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function iM(n,e,t){const i=new Float32Array(Li),r=new F(0,1,0);return new Vi({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:oc(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function of(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oc(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function af(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function oc(){return`

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
	`}function rM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ml||l===gl,u=l===br||l===Tr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new rf(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new rf(n));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function sM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function oM(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,h=_.length;p<h;p++)e.remove(_[p])}d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const g in m){const _=m[g];for(let p=0,h=_.length;p<h;p++)e.update(_[p],n.ARRAY_BUFFER)}}function c(f){const d=[],m=f.index,g=f.attributes.position;let _=0;if(m!==null){const S=m.array;_=m.version;for(let y=0,E=S.length;y<E;y+=3){const R=S[y+0],C=S[y+1],A=S[y+2];d.push(R,C,C,A,A,R)}}else if(g!==void 0){const S=g.array;_=g.version;for(let y=0,E=S.length/3-1;y<E;y+=3){const R=y+0,C=y+1,A=y+2;d.push(R,C,C,A,A,R)}}else return;const p=new(vd(d)?Ad:Td)(d,1);p.version=_;const h=s.get(f);h&&e.remove(h),s.set(f,p)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function aM(n,e,t,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,m){n.drawElements(s,m,a,d*l),t.update(m,s,1)}function f(d,m,g){if(g===0)return;let _,p;if(r)_=n,p="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[p](s,m,a,d*l,g),t.update(m,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function lM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function cM(n,e){return n[0]-e[0]}function uM(n,e){return Math.abs(e[1])-Math.abs(n[1])}function fM(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new Et,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let p=s.get(u);if(p===void 0||p.count!==_){let q=function(){fe.dispose(),s.delete(u),u.removeEventListener("dispose",q)};var m=q;p!==void 0&&p.texture.dispose();const y=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,R=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],j=u.morphAttributes.color||[];let T=0;y===!0&&(T=1),E===!0&&(T=2),R===!0&&(T=3);let w=u.attributes.position.count*T,Q=1;w>e.maxTextureSize&&(Q=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const ce=new Float32Array(w*Q*4*_),fe=new Md(ce,w,Q,_);fe.type=li,fe.needsUpdate=!0;const N=T*4;for(let Z=0;Z<_;Z++){const G=C[Z],ie=A[Z],ue=j[Z],ae=w*Q*4*Z;for(let O=0;O<G.count;O++){const k=O*N;y===!0&&(o.fromBufferAttribute(G,O),ce[ae+k+0]=o.x,ce[ae+k+1]=o.y,ce[ae+k+2]=o.z,ce[ae+k+3]=0),E===!0&&(o.fromBufferAttribute(ie,O),ce[ae+k+4]=o.x,ce[ae+k+5]=o.y,ce[ae+k+6]=o.z,ce[ae+k+7]=0),R===!0&&(o.fromBufferAttribute(ue,O),ce[ae+k+8]=o.x,ce[ae+k+9]=o.y,ce[ae+k+10]=o.z,ce[ae+k+11]=ue.itemSize===4?o.w:1)}}p={count:_,texture:fe,size:new Ge(w,Q)},s.set(u,p),u.addEventListener("dispose",q)}let h=0;for(let y=0;y<d.length;y++)h+=d[y];const S=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",S),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const g=d===void 0?0:d.length;let _=i[u.id];if(_===void 0||_.length!==g){_=[];for(let E=0;E<g;E++)_[E]=[E,0];i[u.id]=_}for(let E=0;E<g;E++){const R=_[E];R[0]=E,R[1]=d[E]}_.sort(uM);for(let E=0;E<8;E++)E<g&&_[E][1]?(a[E][0]=_[E][0],a[E][1]=_[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(cM);const p=u.morphAttributes.position,h=u.morphAttributes.normal;let S=0;for(let E=0;E<8;E++){const R=a[E],C=R[0],A=R[1];C!==Number.MAX_SAFE_INTEGER&&A?(p&&u.getAttribute("morphTarget"+E)!==p[C]&&u.setAttribute("morphTarget"+E,p[C]),h&&u.getAttribute("morphNormal"+E)!==h[C]&&u.setAttribute("morphNormal"+E,h[C]),r[E]=A,S+=A):(p&&u.hasAttribute("morphTarget"+E)===!0&&u.deleteAttribute("morphTarget"+E),h&&u.hasAttribute("morphNormal"+E)===!0&&u.deleteAttribute("morphNormal"+E),r[E]=0)}const y=u.morphTargetsRelative?1:1-S;f.getUniforms().setValue(n,"morphTargetBaseInfluence",y),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function hM(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Dd=new Jt,Ud=new Md,Id=new J0,Nd=new Cd,lf=[],cf=[],uf=new Float32Array(16),ff=new Float32Array(9),hf=new Float32Array(4);function Ur(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=lf[r];if(s===void 0&&(s=new Float32Array(r),lf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Wo(n,e){let t=cf[e];t===void 0&&(t=new Int32Array(e),cf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function dM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function pM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2fv(this.addr,e),yt(t,e)}}function mM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;n.uniform3fv(this.addr,e),yt(t,e)}}function gM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4fv(this.addr,e),yt(t,e)}}function _M(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,i))return;hf.set(i),n.uniformMatrix2fv(this.addr,!1,hf),yt(t,i)}}function vM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,i))return;ff.set(i),n.uniformMatrix3fv(this.addr,!1,ff),yt(t,i)}}function xM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,i))return;uf.set(i),n.uniformMatrix4fv(this.addr,!1,uf),yt(t,i)}}function yM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function MM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2iv(this.addr,e),yt(t,e)}}function SM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;n.uniform3iv(this.addr,e),yt(t,e)}}function EM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4iv(this.addr,e),yt(t,e)}}function bM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function TM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2uiv(this.addr,e),yt(t,e)}}function AM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;n.uniform3uiv(this.addr,e),yt(t,e)}}function wM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4uiv(this.addr,e),yt(t,e)}}function RM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Dd,r)}function CM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Id,r)}function PM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Nd,r)}function LM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ud,r)}function DM(n){switch(n){case 5126:return dM;case 35664:return pM;case 35665:return mM;case 35666:return gM;case 35674:return _M;case 35675:return vM;case 35676:return xM;case 5124:case 35670:return yM;case 35667:case 35671:return MM;case 35668:case 35672:return SM;case 35669:case 35673:return EM;case 5125:return bM;case 36294:return TM;case 36295:return AM;case 36296:return wM;case 35678:case 36198:case 36298:case 36306:case 35682:return RM;case 35679:case 36299:case 36307:return CM;case 35680:case 36300:case 36308:case 36293:return PM;case 36289:case 36303:case 36311:case 36292:return LM}}function UM(n,e){n.uniform1fv(this.addr,e)}function IM(n,e){const t=Ur(e,this.size,2);n.uniform2fv(this.addr,t)}function NM(n,e){const t=Ur(e,this.size,3);n.uniform3fv(this.addr,t)}function OM(n,e){const t=Ur(e,this.size,4);n.uniform4fv(this.addr,t)}function FM(n,e){const t=Ur(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function BM(n,e){const t=Ur(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function zM(n,e){const t=Ur(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function HM(n,e){n.uniform1iv(this.addr,e)}function kM(n,e){n.uniform2iv(this.addr,e)}function VM(n,e){n.uniform3iv(this.addr,e)}function GM(n,e){n.uniform4iv(this.addr,e)}function WM(n,e){n.uniform1uiv(this.addr,e)}function XM(n,e){n.uniform2uiv(this.addr,e)}function jM(n,e){n.uniform3uiv(this.addr,e)}function qM(n,e){n.uniform4uiv(this.addr,e)}function YM(n,e,t){const i=this.cache,r=e.length,s=Wo(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Dd,s[o])}function KM(n,e,t){const i=this.cache,r=e.length,s=Wo(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Id,s[o])}function $M(n,e,t){const i=this.cache,r=e.length,s=Wo(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Nd,s[o])}function ZM(n,e,t){const i=this.cache,r=e.length,s=Wo(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Ud,s[o])}function JM(n){switch(n){case 5126:return UM;case 35664:return IM;case 35665:return NM;case 35666:return OM;case 35674:return FM;case 35675:return BM;case 35676:return zM;case 5124:case 35670:return HM;case 35667:case 35671:return kM;case 35668:case 35672:return VM;case 35669:case 35673:return GM;case 5125:return WM;case 36294:return XM;case 36295:return jM;case 36296:return qM;case 35678:case 36198:case 36298:case 36306:case 35682:return YM;case 35679:case 36299:case 36307:return KM;case 35680:case 36300:case 36308:case 36293:return $M;case 36289:case 36303:case 36311:case 36292:return ZM}}class QM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=DM(t.type)}}class eS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=JM(t.type)}}class tS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Fa=/(\w+)(\])?(\[|\.)?/g;function df(n,e){n.seq.push(e),n.map[e.id]=e}function nS(n,e,t){const i=n.name,r=i.length;for(Fa.lastIndex=0;;){const s=Fa.exec(i),o=Fa.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){df(t,c===void 0?new QM(a,n,e):new eS(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new tS(a),df(t,f)),t=f}}}class ro{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);nS(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function pf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const iS=37297;let rS=0;function sS(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function oS(n){const e=it.getPrimaries(it.workingColorSpace),t=it.getPrimaries(n);let i;switch(e===t?i="":e===vo&&t===_o?i="LinearDisplayP3ToLinearSRGB":e===_o&&t===vo&&(i="LinearSRGBToLinearDisplayP3"),n){case qn:case ko:return[i,"LinearTransferOETF"];case Tt:case nc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function mf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+sS(n.getShaderSource(e),o)}else return r}function aS(n,e){const t=oS(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function lS(n,e){let t;switch(e){case o0:t="Linear";break;case a0:t="Reinhard";break;case l0:t="OptimizedCineon";break;case c0:t="ACESFilmic";break;case u0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function cS(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Wr).join(`
`)}function uS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function fS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Wr(n){return n!==""}function gf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _f(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ml(n){return n.replace(hS,pS)}const dS=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function pS(n,e){let t=Xe[e];if(t===void 0){const i=dS.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ml(t)}const mS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vf(n){return n.replace(mS,gS)}function gS(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xf(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _S(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ld?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===I_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Hn&&(e="SHADOWMAP_TYPE_VSM"),e}function vS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case br:case Tr:e="ENVMAP_TYPE_CUBE";break;case Ho:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Tr:e="ENVMAP_MODE_REFRACTION";break}return e}function yS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ec:e="ENVMAP_BLENDING_MULTIPLY";break;case r0:e="ENVMAP_BLENDING_MIX";break;case s0:e="ENVMAP_BLENDING_ADD";break}return e}function MS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function SS(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=_S(t),c=vS(t),u=xS(t),f=yS(t),d=MS(t),m=t.isWebGL2?"":cS(t),g=uS(s),_=r.createProgram();let p,h,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wr).join(`
`),p.length>0&&(p+=`
`),h=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wr).join(`
`),h.length>0&&(h+=`
`)):(p=[xf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),h=[m,xf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?Xe.tonemapping_pars_fragment:"",t.toneMapping!==hi?lS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,aS("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wr).join(`
`)),o=Ml(o),o=gf(o,t),o=_f(o,t),a=Ml(a),a=gf(a,t),a=_f(a,t),o=vf(o),a=vf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ou?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ou?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=S+p+o,E=S+h+a,R=pf(r,r.VERTEX_SHADER,y),C=pf(r,r.FRAGMENT_SHADER,E);r.attachShader(_,R),r.attachShader(_,C),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(Q){if(n.debug.checkShaderErrors){const ce=r.getProgramInfoLog(_).trim(),fe=r.getShaderInfoLog(R).trim(),N=r.getShaderInfoLog(C).trim();let q=!0,Z=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,R,C);else{const G=mf(r,R,"vertex"),ie=mf(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+ce+`
`+G+`
`+ie)}else ce!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ce):(fe===""||N==="")&&(Z=!1);Z&&(Q.diagnostics={runnable:q,programLog:ce,vertexShader:{log:fe,prefix:p},fragmentShader:{log:N,prefix:h}})}r.deleteShader(R),r.deleteShader(C),j=new ro(r,_),T=fS(r,_)}let j;this.getUniforms=function(){return j===void 0&&A(this),j};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(_,iS)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=C,this}let ES=0;class bS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new TS(e),t.set(e,i)),i}}class TS{constructor(e){this.id=ES++,this.code=e,this.usedTimes=0}}function AS(n,e,t,i,r,s,o){const a=new Sd,l=new bS,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return T===0?"uv":`uv${T}`}function p(T,w,Q,ce,fe){const N=ce.fog,q=fe.geometry,Z=T.isMeshStandardMaterial?ce.environment:null,G=(T.isMeshStandardMaterial?t:e).get(T.envMap||Z),ie=G&&G.mapping===Ho?G.image.height:null,ue=g[T.type];T.precision!==null&&(m=r.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const ae=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,O=ae!==void 0?ae.length:0;let k=0;q.morphAttributes.position!==void 0&&(k=1),q.morphAttributes.normal!==void 0&&(k=2),q.morphAttributes.color!==void 0&&(k=3);let ye,Se,Ae,Pe;if(ue){const dt=Tn[ue];ye=dt.vertexShader,Se=dt.fragmentShader}else ye=T.vertexShader,Se=T.fragmentShader,l.update(T),Ae=l.getVertexShaderID(T),Pe=l.getFragmentShaderID(T);const He=n.getRenderTarget(),Ne=fe.isInstancedMesh===!0,Ie=!!T.map,nt=!!T.matcap,ze=!!G,x=!!T.aoMap,L=!!T.lightMap,I=!!T.bumpMap,z=!!T.normalMap,H=!!T.displacementMap,le=!!T.emissiveMap,re=!!T.metalnessMap,Y=!!T.roughnessMap,se=T.anisotropy>0,ee=T.clearcoat>0,Me=T.iridescence>0,M=T.sheen>0,v=T.transmission>0,U=se&&!!T.anisotropyMap,K=ee&&!!T.clearcoatMap,J=ee&&!!T.clearcoatNormalMap,te=ee&&!!T.clearcoatRoughnessMap,_e=Me&&!!T.iridescenceMap,he=Me&&!!T.iridescenceThicknessMap,ve=M&&!!T.sheenColorMap,P=M&&!!T.sheenRoughnessMap,pe=!!T.specularMap,oe=!!T.specularColorMap,we=!!T.specularIntensityMap,Ee=v&&!!T.transmissionMap,Le=v&&!!T.thicknessMap,Ce=!!T.gradientMap,Te=!!T.alphaMap,Ye=T.alphaTest>0,D=!!T.alphaHash,ge=!!T.extensions,de=!!q.attributes.uv1,$=!!q.attributes.uv2,me=!!q.attributes.uv3;let Ue=hi;return T.toneMapped&&(He===null||He.isXRRenderTarget===!0)&&(Ue=n.toneMapping),{isWebGL2:u,shaderID:ue,shaderType:T.type,shaderName:T.name,vertexShader:ye,fragmentShader:Se,defines:T.defines,customVertexShaderID:Ae,customFragmentShaderID:Pe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,instancing:Ne,instancingColor:Ne&&fe.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:He===null?n.outputColorSpace:He.isXRRenderTarget===!0?He.texture.colorSpace:qn,map:Ie,matcap:nt,envMap:ze,envMapMode:ze&&G.mapping,envMapCubeUVHeight:ie,aoMap:x,lightMap:L,bumpMap:I,normalMap:z,displacementMap:d&&H,emissiveMap:le,normalMapObjectSpace:z&&T.normalMapType===E0,normalMapTangentSpace:z&&T.normalMapType===_d,metalnessMap:re,roughnessMap:Y,anisotropy:se,anisotropyMap:U,clearcoat:ee,clearcoatMap:K,clearcoatNormalMap:J,clearcoatRoughnessMap:te,iridescence:Me,iridescenceMap:_e,iridescenceThicknessMap:he,sheen:M,sheenColorMap:ve,sheenRoughnessMap:P,specularMap:pe,specularColorMap:oe,specularIntensityMap:we,transmission:v,transmissionMap:Ee,thicknessMap:Le,gradientMap:Ce,opaque:T.transparent===!1&&T.blending===xr,alphaMap:Te,alphaTest:Ye,alphaHash:D,combine:T.combine,mapUv:Ie&&_(T.map.channel),aoMapUv:x&&_(T.aoMap.channel),lightMapUv:L&&_(T.lightMap.channel),bumpMapUv:I&&_(T.bumpMap.channel),normalMapUv:z&&_(T.normalMap.channel),displacementMapUv:H&&_(T.displacementMap.channel),emissiveMapUv:le&&_(T.emissiveMap.channel),metalnessMapUv:re&&_(T.metalnessMap.channel),roughnessMapUv:Y&&_(T.roughnessMap.channel),anisotropyMapUv:U&&_(T.anisotropyMap.channel),clearcoatMapUv:K&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:J&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:he&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:P&&_(T.sheenRoughnessMap.channel),specularMapUv:pe&&_(T.specularMap.channel),specularColorMapUv:oe&&_(T.specularColorMap.channel),specularIntensityMapUv:we&&_(T.specularIntensityMap.channel),transmissionMapUv:Ee&&_(T.transmissionMap.channel),thicknessMapUv:Le&&_(T.thicknessMap.channel),alphaMapUv:Te&&_(T.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(z||se),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,vertexUv1s:de,vertexUv2s:$,vertexUv3s:me,pointsUvs:fe.isPoints===!0&&!!q.attributes.uv&&(Ie||Te),fog:!!N,useFog:T.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:fe.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:k,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&Q.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ue,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ie&&T.map.isVideoTexture===!0&&it.getTransfer(T.map.colorSpace)===st,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Vn,flipSided:T.side===Xt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:ge&&T.extensions.derivatives===!0,extensionFragDepth:ge&&T.extensions.fragDepth===!0,extensionDrawBuffers:ge&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:ge&&T.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()}}function h(T){const w=[];if(T.shaderID?w.push(T.shaderID):(w.push(T.customVertexShaderID),w.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Q in T.defines)w.push(Q),w.push(T.defines[Q]);return T.isRawShaderMaterial===!1&&(S(w,T),y(w,T),w.push(n.outputColorSpace)),w.push(T.customProgramCacheKey),w.join()}function S(T,w){T.push(w.precision),T.push(w.outputColorSpace),T.push(w.envMapMode),T.push(w.envMapCubeUVHeight),T.push(w.mapUv),T.push(w.alphaMapUv),T.push(w.lightMapUv),T.push(w.aoMapUv),T.push(w.bumpMapUv),T.push(w.normalMapUv),T.push(w.displacementMapUv),T.push(w.emissiveMapUv),T.push(w.metalnessMapUv),T.push(w.roughnessMapUv),T.push(w.anisotropyMapUv),T.push(w.clearcoatMapUv),T.push(w.clearcoatNormalMapUv),T.push(w.clearcoatRoughnessMapUv),T.push(w.iridescenceMapUv),T.push(w.iridescenceThicknessMapUv),T.push(w.sheenColorMapUv),T.push(w.sheenRoughnessMapUv),T.push(w.specularMapUv),T.push(w.specularColorMapUv),T.push(w.specularIntensityMapUv),T.push(w.transmissionMapUv),T.push(w.thicknessMapUv),T.push(w.combine),T.push(w.fogExp2),T.push(w.sizeAttenuation),T.push(w.morphTargetsCount),T.push(w.morphAttributeCount),T.push(w.numDirLights),T.push(w.numPointLights),T.push(w.numSpotLights),T.push(w.numSpotLightMaps),T.push(w.numHemiLights),T.push(w.numRectAreaLights),T.push(w.numDirLightShadows),T.push(w.numPointLightShadows),T.push(w.numSpotLightShadows),T.push(w.numSpotLightShadowsWithMaps),T.push(w.numLightProbes),T.push(w.shadowMapType),T.push(w.toneMapping),T.push(w.numClippingPlanes),T.push(w.numClipIntersection),T.push(w.depthPacking)}function y(T,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),T.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),T.push(a.mask)}function E(T){const w=g[T.type];let Q;if(w){const ce=Tn[w];Q=fv.clone(ce.uniforms)}else Q=T.uniforms;return Q}function R(T,w){let Q;for(let ce=0,fe=c.length;ce<fe;ce++){const N=c[ce];if(N.cacheKey===w){Q=N,++Q.usedTimes;break}}return Q===void 0&&(Q=new SS(n,w,T,s),c.push(Q)),Q}function C(T){if(--T.usedTimes===0){const w=c.indexOf(T);c[w]=c[c.length-1],c.pop(),T.destroy()}}function A(T){l.remove(T)}function j(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:E,acquireProgram:R,releaseProgram:C,releaseShaderCache:A,programs:c,dispose:j}}function wS(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function RS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function yf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Mf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,m,g,_,p){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=_,h.group=p),e++,h}function a(f,d,m,g,_,p){const h=o(f,d,m,g,_,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):t.push(h)}function l(f,d,m,g,_,p){const h=o(f,d,m,g,_,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||RS),i.length>1&&i.sort(d||yf),r.length>1&&r.sort(d||yf)}function u(){for(let f=e,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function CS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Mf,n.set(i,[o])):r>=s.length?(o=new Mf,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function PS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Ze};break;case"SpotLight":t={position:new F,direction:new F,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function LS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let DS=0;function US(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function IS(n,e){const t=new PS,i=LS(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new F);const s=new F,o=new ht,a=new ht;function l(u,f){let d=0,m=0,g=0;for(let ce=0;ce<9;ce++)r.probe[ce].set(0,0,0);let _=0,p=0,h=0,S=0,y=0,E=0,R=0,C=0,A=0,j=0,T=0;u.sort(US);const w=f===!0?Math.PI:1;for(let ce=0,fe=u.length;ce<fe;ce++){const N=u[ce],q=N.color,Z=N.intensity,G=N.distance,ie=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=q.r*Z*w,m+=q.g*Z*w,g+=q.b*Z*w;else if(N.isLightProbe){for(let ue=0;ue<9;ue++)r.probe[ue].addScaledVector(N.sh.coefficients[ue],Z);T++}else if(N.isDirectionalLight){const ue=t.get(N);if(ue.color.copy(N.color).multiplyScalar(N.intensity*w),N.castShadow){const ae=N.shadow,O=i.get(N);O.shadowBias=ae.bias,O.shadowNormalBias=ae.normalBias,O.shadowRadius=ae.radius,O.shadowMapSize=ae.mapSize,r.directionalShadow[_]=O,r.directionalShadowMap[_]=ie,r.directionalShadowMatrix[_]=N.shadow.matrix,E++}r.directional[_]=ue,_++}else if(N.isSpotLight){const ue=t.get(N);ue.position.setFromMatrixPosition(N.matrixWorld),ue.color.copy(q).multiplyScalar(Z*w),ue.distance=G,ue.coneCos=Math.cos(N.angle),ue.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),ue.decay=N.decay,r.spot[h]=ue;const ae=N.shadow;if(N.map&&(r.spotLightMap[A]=N.map,A++,ae.updateMatrices(N),N.castShadow&&j++),r.spotLightMatrix[h]=ae.matrix,N.castShadow){const O=i.get(N);O.shadowBias=ae.bias,O.shadowNormalBias=ae.normalBias,O.shadowRadius=ae.radius,O.shadowMapSize=ae.mapSize,r.spotShadow[h]=O,r.spotShadowMap[h]=ie,C++}h++}else if(N.isRectAreaLight){const ue=t.get(N);ue.color.copy(q).multiplyScalar(Z),ue.halfWidth.set(N.width*.5,0,0),ue.halfHeight.set(0,N.height*.5,0),r.rectArea[S]=ue,S++}else if(N.isPointLight){const ue=t.get(N);if(ue.color.copy(N.color).multiplyScalar(N.intensity*w),ue.distance=N.distance,ue.decay=N.decay,N.castShadow){const ae=N.shadow,O=i.get(N);O.shadowBias=ae.bias,O.shadowNormalBias=ae.normalBias,O.shadowRadius=ae.radius,O.shadowMapSize=ae.mapSize,O.shadowCameraNear=ae.camera.near,O.shadowCameraFar=ae.camera.far,r.pointShadow[p]=O,r.pointShadowMap[p]=ie,r.pointShadowMatrix[p]=N.shadow.matrix,R++}r.point[p]=ue,p++}else if(N.isHemisphereLight){const ue=t.get(N);ue.skyColor.copy(N.color).multiplyScalar(Z*w),ue.groundColor.copy(N.groundColor).multiplyScalar(Z*w),r.hemi[y]=ue,y++}}S>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_FLOAT_1,r.rectAreaLTC2=xe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_HALF_1,r.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=g;const Q=r.hash;(Q.directionalLength!==_||Q.pointLength!==p||Q.spotLength!==h||Q.rectAreaLength!==S||Q.hemiLength!==y||Q.numDirectionalShadows!==E||Q.numPointShadows!==R||Q.numSpotShadows!==C||Q.numSpotMaps!==A||Q.numLightProbes!==T)&&(r.directional.length=_,r.spot.length=h,r.rectArea.length=S,r.point.length=p,r.hemi.length=y,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=C+A-j,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=j,r.numLightProbes=T,Q.directionalLength=_,Q.pointLength=p,Q.spotLength=h,Q.rectAreaLength=S,Q.hemiLength=y,Q.numDirectionalShadows=E,Q.numPointShadows=R,Q.numSpotShadows=C,Q.numSpotMaps=A,Q.numLightProbes=T,r.version=DS++)}function c(u,f){let d=0,m=0,g=0,_=0,p=0;const h=f.matrixWorldInverse;for(let S=0,y=u.length;S<y;S++){const E=u[S];if(E.isDirectionalLight){const R=r.directional[d];R.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(h),d++}else if(E.isSpotLight){const R=r.spot[g];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(h),R.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(h),g++}else if(E.isRectAreaLight){const R=r.rectArea[_];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(h),a.identity(),o.copy(E.matrixWorld),o.premultiply(h),a.extractRotation(o),R.halfWidth.set(E.width*.5,0,0),R.halfHeight.set(0,E.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){const R=r.point[m];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(h),m++}else if(E.isHemisphereLight){const R=r.hemi[p];R.direction.setFromMatrixPosition(E.matrixWorld),R.direction.transformDirection(h),p++}}}return{setup:l,setupView:c,state:r}}function Sf(n,e){const t=new IS(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function NS(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Sf(n,e),t.set(s,[l])):o>=a.length?(l=new Sf(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class OS extends Yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=M0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class FS extends Yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const BS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zS=`uniform sampler2D shadow_pass;
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
}`;function HS(n,e,t){let i=new rc;const r=new Ge,s=new Ge,o=new Et,a=new OS({depthPacking:S0}),l=new FS,c={},u=t.maxTextureSize,f={[mi]:Xt,[Xt]:mi,[Vn]:Vn},d=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:BS,fragmentShader:zS}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Mn;g.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new wn(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ld;let h=this.type;this.render=function(R,C,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const j=n.getRenderTarget(),T=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),Q=n.state;Q.setBlending(fi),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const ce=h!==Hn&&this.type===Hn,fe=h===Hn&&this.type!==Hn;for(let N=0,q=R.length;N<q;N++){const Z=R[N],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const ie=G.getFrameExtents();if(r.multiply(ie),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ie.x),r.x=s.x*ie.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ie.y),r.y=s.y*ie.y,G.mapSize.y=s.y)),G.map===null||ce===!0||fe===!0){const ae=this.type!==Hn?{minFilter:Bt,magFilter:Bt}:{};G.map!==null&&G.map.dispose(),G.map=new zi(r.x,r.y,ae),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const ue=G.getViewportCount();for(let ae=0;ae<ue;ae++){const O=G.getViewport(ae);o.set(s.x*O.x,s.y*O.y,s.x*O.z,s.y*O.w),Q.viewport(o),G.updateMatrices(Z,ae),i=G.getFrustum(),E(C,A,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===Hn&&S(G,A),G.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(j,T,w)};function S(R,C){const A=e.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new zi(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(C,null,A,d,_,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(C,null,A,m,_,null)}function y(R,C,A,j){let T=null;const w=A.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(w!==void 0)T=w;else if(T=A.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const Q=T.uuid,ce=C.uuid;let fe=c[Q];fe===void 0&&(fe={},c[Q]=fe);let N=fe[ce];N===void 0&&(N=T.clone(),fe[ce]=N),T=N}if(T.visible=C.visible,T.wireframe=C.wireframe,j===Hn?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:f[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,A.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const Q=n.properties.get(T);Q.light=A}return T}function E(R,C,A,j,T){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&T===Hn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,R.matrixWorld);const ce=e.update(R),fe=R.material;if(Array.isArray(fe)){const N=ce.groups;for(let q=0,Z=N.length;q<Z;q++){const G=N[q],ie=fe[G.materialIndex];if(ie&&ie.visible){const ue=y(R,ie,j,T);n.renderBufferDirect(A,null,ce,ue,R,G)}}}else if(fe.visible){const N=y(R,fe,j,T);n.renderBufferDirect(A,null,ce,N,R,null)}}const Q=R.children;for(let ce=0,fe=Q.length;ce<fe;ce++)E(Q[ce],C,A,j,T)}}function kS(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const ge=new Et;let de=null;const $=new Et(0,0,0,0);return{setMask:function(me){de!==me&&!D&&(n.colorMask(me,me,me,me),de=me)},setLocked:function(me){D=me},setClear:function(me,Ue,Ke,dt,en){en===!0&&(me*=dt,Ue*=dt,Ke*=dt),ge.set(me,Ue,Ke,dt),$.equals(ge)===!1&&(n.clearColor(me,Ue,Ke,dt),$.copy(ge))},reset:function(){D=!1,de=null,$.set(-1,0,0,0)}}}function s(){let D=!1,ge=null,de=null,$=null;return{setTest:function(me){me?Ie(n.DEPTH_TEST):nt(n.DEPTH_TEST)},setMask:function(me){ge!==me&&!D&&(n.depthMask(me),ge=me)},setFunc:function(me){if(de!==me){switch(me){case Z_:n.depthFunc(n.NEVER);break;case J_:n.depthFunc(n.ALWAYS);break;case Q_:n.depthFunc(n.LESS);break;case mo:n.depthFunc(n.LEQUAL);break;case e0:n.depthFunc(n.EQUAL);break;case t0:n.depthFunc(n.GEQUAL);break;case n0:n.depthFunc(n.GREATER);break;case i0:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=me}},setLocked:function(me){D=me},setClear:function(me){$!==me&&(n.clearDepth(me),$=me)},reset:function(){D=!1,ge=null,de=null,$=null}}}function o(){let D=!1,ge=null,de=null,$=null,me=null,Ue=null,Ke=null,dt=null,en=null;return{setTest:function(rt){D||(rt?Ie(n.STENCIL_TEST):nt(n.STENCIL_TEST))},setMask:function(rt){ge!==rt&&!D&&(n.stencilMask(rt),ge=rt)},setFunc:function(rt,Ut,Sn){(de!==rt||$!==Ut||me!==Sn)&&(n.stencilFunc(rt,Ut,Sn),de=rt,$=Ut,me=Sn)},setOp:function(rt,Ut,Sn){(Ue!==rt||Ke!==Ut||dt!==Sn)&&(n.stencilOp(rt,Ut,Sn),Ue=rt,Ke=Ut,dt=Sn)},setLocked:function(rt){D=rt},setClear:function(rt){en!==rt&&(n.clearStencil(rt),en=rt)},reset:function(){D=!1,ge=null,de=null,$=null,me=null,Ue=null,Ke=null,dt=null,en=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let d={},m={},g=new WeakMap,_=[],p=null,h=!1,S=null,y=null,E=null,R=null,C=null,A=null,j=null,T=new Ze(0,0,0),w=0,Q=!1,ce=null,fe=null,N=null,q=null,Z=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,ue=0;const ae=n.getParameter(n.VERSION);ae.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(ae)[1]),ie=ue>=1):ae.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),ie=ue>=2);let O=null,k={};const ye=n.getParameter(n.SCISSOR_BOX),Se=n.getParameter(n.VIEWPORT),Ae=new Et().fromArray(ye),Pe=new Et().fromArray(Se);function He(D,ge,de,$){const me=new Uint8Array(4),Ue=n.createTexture();n.bindTexture(D,Ue),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ke=0;Ke<de;Ke++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(ge,0,n.RGBA,1,1,$,0,n.RGBA,n.UNSIGNED_BYTE,me):n.texImage2D(ge+Ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,me);return Ue}const Ne={};Ne[n.TEXTURE_2D]=He(n.TEXTURE_2D,n.TEXTURE_2D,1),Ne[n.TEXTURE_CUBE_MAP]=He(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ne[n.TEXTURE_2D_ARRAY]=He(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ne[n.TEXTURE_3D]=He(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ie(n.DEPTH_TEST),l.setFunc(mo),re(!1),Y(nu),Ie(n.CULL_FACE),H(fi);function Ie(D){d[D]!==!0&&(n.enable(D),d[D]=!0)}function nt(D){d[D]!==!1&&(n.disable(D),d[D]=!1)}function ze(D,ge){return m[D]!==ge?(n.bindFramebuffer(D,ge),m[D]=ge,i&&(D===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ge),D===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ge)),!0):!1}function x(D,ge){let de=_,$=!1;if(D)if(de=g.get(ge),de===void 0&&(de=[],g.set(ge,de)),D.isWebGLMultipleRenderTargets){const me=D.texture;if(de.length!==me.length||de[0]!==n.COLOR_ATTACHMENT0){for(let Ue=0,Ke=me.length;Ue<Ke;Ue++)de[Ue]=n.COLOR_ATTACHMENT0+Ue;de.length=me.length,$=!0}}else de[0]!==n.COLOR_ATTACHMENT0&&(de[0]=n.COLOR_ATTACHMENT0,$=!0);else de[0]!==n.BACK&&(de[0]=n.BACK,$=!0);$&&(t.isWebGL2?n.drawBuffers(de):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(de))}function L(D){return p!==D?(n.useProgram(D),p=D,!0):!1}const I={[Pi]:n.FUNC_ADD,[O_]:n.FUNC_SUBTRACT,[F_]:n.FUNC_REVERSE_SUBTRACT};if(i)I[ou]=n.MIN,I[au]=n.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(I[ou]=D.MIN_EXT,I[au]=D.MAX_EXT)}const z={[B_]:n.ZERO,[z_]:n.ONE,[H_]:n.SRC_COLOR,[dl]:n.SRC_ALPHA,[j_]:n.SRC_ALPHA_SATURATE,[W_]:n.DST_COLOR,[V_]:n.DST_ALPHA,[k_]:n.ONE_MINUS_SRC_COLOR,[pl]:n.ONE_MINUS_SRC_ALPHA,[X_]:n.ONE_MINUS_DST_COLOR,[G_]:n.ONE_MINUS_DST_ALPHA,[q_]:n.CONSTANT_COLOR,[Y_]:n.ONE_MINUS_CONSTANT_COLOR,[K_]:n.CONSTANT_ALPHA,[$_]:n.ONE_MINUS_CONSTANT_ALPHA};function H(D,ge,de,$,me,Ue,Ke,dt,en,rt){if(D===fi){h===!0&&(nt(n.BLEND),h=!1);return}if(h===!1&&(Ie(n.BLEND),h=!0),D!==N_){if(D!==S||rt!==Q){if((y!==Pi||C!==Pi)&&(n.blendEquation(n.FUNC_ADD),y=Pi,C=Pi),rt)switch(D){case xr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case iu:n.blendFunc(n.ONE,n.ONE);break;case ru:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case su:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case xr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case iu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ru:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case su:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}E=null,R=null,A=null,j=null,T.set(0,0,0),w=0,S=D,Q=rt}return}me=me||ge,Ue=Ue||de,Ke=Ke||$,(ge!==y||me!==C)&&(n.blendEquationSeparate(I[ge],I[me]),y=ge,C=me),(de!==E||$!==R||Ue!==A||Ke!==j)&&(n.blendFuncSeparate(z[de],z[$],z[Ue],z[Ke]),E=de,R=$,A=Ue,j=Ke),(dt.equals(T)===!1||en!==w)&&(n.blendColor(dt.r,dt.g,dt.b,en),T.copy(dt),w=en),S=D,Q=!1}function le(D,ge){D.side===Vn?nt(n.CULL_FACE):Ie(n.CULL_FACE);let de=D.side===Xt;ge&&(de=!de),re(de),D.blending===xr&&D.transparent===!1?H(fi):H(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const $=D.stencilWrite;c.setTest($),$&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ee(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ie(n.SAMPLE_ALPHA_TO_COVERAGE):nt(n.SAMPLE_ALPHA_TO_COVERAGE)}function re(D){ce!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),ce=D)}function Y(D){D!==D_?(Ie(n.CULL_FACE),D!==fe&&(D===nu?n.cullFace(n.BACK):D===U_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):nt(n.CULL_FACE),fe=D}function se(D){D!==N&&(ie&&n.lineWidth(D),N=D)}function ee(D,ge,de){D?(Ie(n.POLYGON_OFFSET_FILL),(q!==ge||Z!==de)&&(n.polygonOffset(ge,de),q=ge,Z=de)):nt(n.POLYGON_OFFSET_FILL)}function Me(D){D?Ie(n.SCISSOR_TEST):nt(n.SCISSOR_TEST)}function M(D){D===void 0&&(D=n.TEXTURE0+G-1),O!==D&&(n.activeTexture(D),O=D)}function v(D,ge,de){de===void 0&&(O===null?de=n.TEXTURE0+G-1:de=O);let $=k[de];$===void 0&&($={type:void 0,texture:void 0},k[de]=$),($.type!==D||$.texture!==ge)&&(O!==de&&(n.activeTexture(de),O=de),n.bindTexture(D,ge||Ne[D]),$.type=D,$.texture=ge)}function U(){const D=k[O];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function P(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(D){Ae.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Ae.copy(D))}function Le(D){Pe.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Pe.copy(D))}function Ce(D,ge){let de=f.get(ge);de===void 0&&(de=new WeakMap,f.set(ge,de));let $=de.get(D);$===void 0&&($=n.getUniformBlockIndex(ge,D.name),de.set(D,$))}function Te(D,ge){const $=f.get(ge).get(D);u.get(ge)!==$&&(n.uniformBlockBinding(ge,$,D.__bindingPointIndex),u.set(ge,$))}function Ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},O=null,k={},m={},g=new WeakMap,_=[],p=null,h=!1,S=null,y=null,E=null,R=null,C=null,A=null,j=null,T=new Ze(0,0,0),w=0,Q=!1,ce=null,fe=null,N=null,q=null,Z=null,Ae.set(0,0,n.canvas.width,n.canvas.height),Pe.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ie,disable:nt,bindFramebuffer:ze,drawBuffers:x,useProgram:L,setBlending:H,setMaterial:le,setFlipSided:re,setCullFace:Y,setLineWidth:se,setPolygonOffset:ee,setScissorTest:Me,activeTexture:M,bindTexture:v,unbindTexture:U,compressedTexImage2D:K,compressedTexImage3D:J,texImage2D:oe,texImage3D:we,updateUBOMapping:Ce,uniformBlockBinding:Te,texStorage2D:P,texStorage3D:pe,texSubImage2D:te,texSubImage3D:_e,compressedTexSubImage2D:he,compressedTexSubImage3D:ve,scissor:Ee,viewport:Le,reset:Ye}}function VS(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const p=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(M,v){return h?new OffscreenCanvas(M,v):Mo("canvas")}function y(M,v,U,K){let J=1;if((M.width>K||M.height>K)&&(J=K/Math.max(M.width,M.height)),J<1||v===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const te=v?yo:Math.floor,_e=te(J*M.width),he=te(J*M.height);_===void 0&&(_=S(_e,he));const ve=U?S(_e,he):_;return ve.width=_e,ve.height=he,ve.getContext("2d").drawImage(M,0,0,_e,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+_e+"x"+he+")."),ve}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function E(M){return yl(M.width)&&yl(M.height)}function R(M){return a?!1:M.wrapS!==mn||M.wrapT!==mn||M.minFilter!==Bt&&M.minFilter!==rn}function C(M,v){return M.generateMipmaps&&v&&M.minFilter!==Bt&&M.minFilter!==rn}function A(M){n.generateMipmap(M)}function j(M,v,U,K,J=!1){if(a===!1)return v;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let te=v;if(v===n.RED&&(U===n.FLOAT&&(te=n.R32F),U===n.HALF_FLOAT&&(te=n.R16F),U===n.UNSIGNED_BYTE&&(te=n.R8)),v===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(te=n.R8UI),U===n.UNSIGNED_SHORT&&(te=n.R16UI),U===n.UNSIGNED_INT&&(te=n.R32UI),U===n.BYTE&&(te=n.R8I),U===n.SHORT&&(te=n.R16I),U===n.INT&&(te=n.R32I)),v===n.RG&&(U===n.FLOAT&&(te=n.RG32F),U===n.HALF_FLOAT&&(te=n.RG16F),U===n.UNSIGNED_BYTE&&(te=n.RG8)),v===n.RGBA){const _e=J?go:it.getTransfer(K);U===n.FLOAT&&(te=n.RGBA32F),U===n.HALF_FLOAT&&(te=n.RGBA16F),U===n.UNSIGNED_BYTE&&(te=_e===st?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function T(M,v,U){return C(M,U)===!0||M.isFramebufferTexture&&M.minFilter!==Bt&&M.minFilter!==rn?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function w(M){return M===Bt||M===lu||M===ua?n.NEAREST:n.LINEAR}function Q(M){const v=M.target;v.removeEventListener("dispose",Q),fe(v),v.isVideoTexture&&g.delete(v)}function ce(M){const v=M.target;v.removeEventListener("dispose",ce),q(v)}function fe(M){const v=i.get(M);if(v.__webglInit===void 0)return;const U=M.source,K=p.get(U);if(K){const J=K[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&N(M),Object.keys(K).length===0&&p.delete(U)}i.remove(M)}function N(M){const v=i.get(M);n.deleteTexture(v.__webglTexture);const U=M.source,K=p.get(U);delete K[v.__cacheKey],o.memory.textures--}function q(M){const v=M.texture,U=i.get(M),K=i.get(v);if(K.__webglTexture!==void 0&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(U.__webglFramebuffer[J]))for(let te=0;te<U.__webglFramebuffer[J].length;te++)n.deleteFramebuffer(U.__webglFramebuffer[J][te]);else n.deleteFramebuffer(U.__webglFramebuffer[J]);U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer[J])}else{if(Array.isArray(U.__webglFramebuffer))for(let J=0;J<U.__webglFramebuffer.length;J++)n.deleteFramebuffer(U.__webglFramebuffer[J]);else n.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&n.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let J=0;J<U.__webglColorRenderbuffer.length;J++)U.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(U.__webglColorRenderbuffer[J]);U.__webglDepthRenderbuffer&&n.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let J=0,te=v.length;J<te;J++){const _e=i.get(v[J]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),o.memory.textures--),i.remove(v[J])}i.remove(v),i.remove(M)}let Z=0;function G(){Z=0}function ie(){const M=Z;return M>=l&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+l),Z+=1,M}function ue(M){const v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.colorSpace),v.join()}function ae(M,v){const U=i.get(M);if(M.isVideoTexture&&ee(M),M.isRenderTargetTexture===!1&&M.version>0&&U.__version!==M.version){const K=M.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(U,M,v);return}}t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+v)}function O(M,v){const U=i.get(M);if(M.version>0&&U.__version!==M.version){Ie(U,M,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+v)}function k(M,v){const U=i.get(M);if(M.version>0&&U.__version!==M.version){Ie(U,M,v);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+v)}function ye(M,v){const U=i.get(M);if(M.version>0&&U.__version!==M.version){nt(U,M,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+v)}const Se={[_l]:n.REPEAT,[mn]:n.CLAMP_TO_EDGE,[vl]:n.MIRRORED_REPEAT},Ae={[Bt]:n.NEAREST,[lu]:n.NEAREST_MIPMAP_NEAREST,[ua]:n.NEAREST_MIPMAP_LINEAR,[rn]:n.LINEAR,[f0]:n.LINEAR_MIPMAP_NEAREST,[ss]:n.LINEAR_MIPMAP_LINEAR},Pe={[b0]:n.NEVER,[L0]:n.ALWAYS,[T0]:n.LESS,[w0]:n.LEQUAL,[A0]:n.EQUAL,[P0]:n.GEQUAL,[R0]:n.GREATER,[C0]:n.NOTEQUAL};function He(M,v,U){if(U?(n.texParameteri(M,n.TEXTURE_WRAP_S,Se[v.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,Se[v.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,Se[v.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,Ae[v.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,Ae[v.minFilter])):(n.texParameteri(M,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(M,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==mn||v.wrapT!==mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,n.TEXTURE_MAG_FILTER,w(v.magFilter)),n.texParameteri(M,n.TEXTURE_MIN_FILTER,w(v.minFilter)),v.minFilter!==Bt&&v.minFilter!==rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,Pe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const K=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Bt||v.minFilter!==ua&&v.minFilter!==ss||v.type===li&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===os&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(M,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function Ne(M,v){let U=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",Q));const K=v.source;let J=p.get(K);J===void 0&&(J={},p.set(K,J));const te=ue(v);if(te!==M.__cacheKey){J[te]===void 0&&(J[te]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),J[te].usedTimes++;const _e=J[M.__cacheKey];_e!==void 0&&(J[M.__cacheKey].usedTimes--,_e.usedTimes===0&&N(v)),M.__cacheKey=te,M.__webglTexture=J[te].texture}return U}function Ie(M,v,U){let K=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=n.TEXTURE_3D);const J=Ne(M,v),te=v.source;t.bindTexture(K,M.__webglTexture,n.TEXTURE0+U);const _e=i.get(te);if(te.version!==_e.__version||J===!0){t.activeTexture(n.TEXTURE0+U);const he=it.getPrimaries(it.workingColorSpace),ve=v.colorSpace===on?null:it.getPrimaries(v.colorSpace),P=v.colorSpace===on||he===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,P);const pe=R(v)&&E(v.image)===!1;let oe=y(v.image,pe,!1,u);oe=Me(v,oe);const we=E(oe)||a,Ee=s.convert(v.format,v.colorSpace);let Le=s.convert(v.type),Ce=j(v.internalFormat,Ee,Le,v.colorSpace,v.isVideoTexture);He(K,v,we);let Te;const Ye=v.mipmaps,D=a&&v.isVideoTexture!==!0,ge=_e.__version===void 0||J===!0,de=T(v,oe,we);if(v.isDepthTexture)Ce=n.DEPTH_COMPONENT,a?v.type===li?Ce=n.DEPTH_COMPONENT32F:v.type===ai?Ce=n.DEPTH_COMPONENT24:v.type===Ii?Ce=n.DEPTH24_STENCIL8:Ce=n.DEPTH_COMPONENT16:v.type===li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Ni&&Ce===n.DEPTH_COMPONENT&&v.type!==tc&&v.type!==ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=ai,Le=s.convert(v.type)),v.format===Ar&&Ce===n.DEPTH_COMPONENT&&(Ce=n.DEPTH_STENCIL,v.type!==Ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Ii,Le=s.convert(v.type))),ge&&(D?t.texStorage2D(n.TEXTURE_2D,1,Ce,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,Ce,oe.width,oe.height,0,Ee,Le,null));else if(v.isDataTexture)if(Ye.length>0&&we){D&&ge&&t.texStorage2D(n.TEXTURE_2D,de,Ce,Ye[0].width,Ye[0].height);for(let $=0,me=Ye.length;$<me;$++)Te=Ye[$],D?t.texSubImage2D(n.TEXTURE_2D,$,0,0,Te.width,Te.height,Ee,Le,Te.data):t.texImage2D(n.TEXTURE_2D,$,Ce,Te.width,Te.height,0,Ee,Le,Te.data);v.generateMipmaps=!1}else D?(ge&&t.texStorage2D(n.TEXTURE_2D,de,Ce,oe.width,oe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe.width,oe.height,Ee,Le,oe.data)):t.texImage2D(n.TEXTURE_2D,0,Ce,oe.width,oe.height,0,Ee,Le,oe.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){D&&ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,Ce,Ye[0].width,Ye[0].height,oe.depth);for(let $=0,me=Ye.length;$<me;$++)Te=Ye[$],v.format!==gn?Ee!==null?D?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Te.width,Te.height,oe.depth,Ee,Te.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,Ce,Te.width,Te.height,oe.depth,0,Te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?t.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Te.width,Te.height,oe.depth,Ee,Le,Te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,$,Ce,Te.width,Te.height,oe.depth,0,Ee,Le,Te.data)}else{D&&ge&&t.texStorage2D(n.TEXTURE_2D,de,Ce,Ye[0].width,Ye[0].height);for(let $=0,me=Ye.length;$<me;$++)Te=Ye[$],v.format!==gn?Ee!==null?D?t.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,Te.width,Te.height,Ee,Te.data):t.compressedTexImage2D(n.TEXTURE_2D,$,Ce,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?t.texSubImage2D(n.TEXTURE_2D,$,0,0,Te.width,Te.height,Ee,Le,Te.data):t.texImage2D(n.TEXTURE_2D,$,Ce,Te.width,Te.height,0,Ee,Le,Te.data)}else if(v.isDataArrayTexture)D?(ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,Ce,oe.width,oe.height,oe.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Ee,Le,oe.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,oe.width,oe.height,oe.depth,0,Ee,Le,oe.data);else if(v.isData3DTexture)D?(ge&&t.texStorage3D(n.TEXTURE_3D,de,Ce,oe.width,oe.height,oe.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Ee,Le,oe.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,oe.width,oe.height,oe.depth,0,Ee,Le,oe.data);else if(v.isFramebufferTexture){if(ge)if(D)t.texStorage2D(n.TEXTURE_2D,de,Ce,oe.width,oe.height);else{let $=oe.width,me=oe.height;for(let Ue=0;Ue<de;Ue++)t.texImage2D(n.TEXTURE_2D,Ue,Ce,$,me,0,Ee,Le,null),$>>=1,me>>=1}}else if(Ye.length>0&&we){D&&ge&&t.texStorage2D(n.TEXTURE_2D,de,Ce,Ye[0].width,Ye[0].height);for(let $=0,me=Ye.length;$<me;$++)Te=Ye[$],D?t.texSubImage2D(n.TEXTURE_2D,$,0,0,Ee,Le,Te):t.texImage2D(n.TEXTURE_2D,$,Ce,Ee,Le,Te);v.generateMipmaps=!1}else D?(ge&&t.texStorage2D(n.TEXTURE_2D,de,Ce,oe.width,oe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee,Le,oe)):t.texImage2D(n.TEXTURE_2D,0,Ce,Ee,Le,oe);C(v,we)&&A(K),_e.__version=te.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function nt(M,v,U){if(v.image.length!==6)return;const K=Ne(M,v),J=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+U);const te=i.get(J);if(J.version!==te.__version||K===!0){t.activeTexture(n.TEXTURE0+U);const _e=it.getPrimaries(it.workingColorSpace),he=v.colorSpace===on?null:it.getPrimaries(v.colorSpace),ve=v.colorSpace===on||_e===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const P=v.isCompressedTexture||v.image[0].isCompressedTexture,pe=v.image[0]&&v.image[0].isDataTexture,oe=[];for(let $=0;$<6;$++)!P&&!pe?oe[$]=y(v.image[$],!1,!0,c):oe[$]=pe?v.image[$].image:v.image[$],oe[$]=Me(v,oe[$]);const we=oe[0],Ee=E(we)||a,Le=s.convert(v.format,v.colorSpace),Ce=s.convert(v.type),Te=j(v.internalFormat,Le,Ce,v.colorSpace),Ye=a&&v.isVideoTexture!==!0,D=te.__version===void 0||K===!0;let ge=T(v,we,Ee);He(n.TEXTURE_CUBE_MAP,v,Ee);let de;if(P){Ye&&D&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,Te,we.width,we.height);for(let $=0;$<6;$++){de=oe[$].mipmaps;for(let me=0;me<de.length;me++){const Ue=de[me];v.format!==gn?Le!==null?Ye?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,me,0,0,Ue.width,Ue.height,Le,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,me,Te,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,me,0,0,Ue.width,Ue.height,Le,Ce,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,me,Te,Ue.width,Ue.height,0,Le,Ce,Ue.data)}}}else{de=v.mipmaps,Ye&&D&&(de.length>0&&ge++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,Te,oe[0].width,oe[0].height));for(let $=0;$<6;$++)if(pe){Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,oe[$].width,oe[$].height,Le,Ce,oe[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Te,oe[$].width,oe[$].height,0,Le,Ce,oe[$].data);for(let me=0;me<de.length;me++){const Ke=de[me].image[$].image;Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,me+1,0,0,Ke.width,Ke.height,Le,Ce,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,me+1,Te,Ke.width,Ke.height,0,Le,Ce,Ke.data)}}else{Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Le,Ce,oe[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Te,Le,Ce,oe[$]);for(let me=0;me<de.length;me++){const Ue=de[me];Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,me+1,0,0,Le,Ce,Ue.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,me+1,Te,Le,Ce,Ue.image[$])}}}C(v,Ee)&&A(n.TEXTURE_CUBE_MAP),te.__version=J.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function ze(M,v,U,K,J,te){const _e=s.convert(U.format,U.colorSpace),he=s.convert(U.type),ve=j(U.internalFormat,_e,he,U.colorSpace);if(!i.get(v).__hasExternalTextures){const pe=Math.max(1,v.width>>te),oe=Math.max(1,v.height>>te);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,te,ve,pe,oe,v.depth,0,_e,he,null):t.texImage2D(J,te,ve,pe,oe,0,_e,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),se(v)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,J,i.get(U).__webglTexture,0,Y(v)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,J,i.get(U).__webglTexture,te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function x(M,v,U){if(n.bindRenderbuffer(n.RENDERBUFFER,M),v.depthBuffer&&!v.stencilBuffer){let K=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(U||se(v)){const J=v.depthTexture;J&&J.isDepthTexture&&(J.type===li?K=n.DEPTH_COMPONENT32F:J.type===ai&&(K=n.DEPTH_COMPONENT24));const te=Y(v);se(v)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,K,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,te,K,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,K,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,M)}else if(v.depthBuffer&&v.stencilBuffer){const K=Y(v);U&&se(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,K,n.DEPTH24_STENCIL8,v.width,v.height):se(v)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,K,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,M)}else{const K=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let J=0;J<K.length;J++){const te=K[J],_e=s.convert(te.format,te.colorSpace),he=s.convert(te.type),ve=j(te.internalFormat,_e,he,te.colorSpace),P=Y(v);U&&se(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,P,ve,v.width,v.height):se(v)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P,ve,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ve,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function L(M,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),ae(v.depthTexture,0);const K=i.get(v.depthTexture).__webglTexture,J=Y(v);if(v.depthTexture.format===Ni)se(v)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(v.depthTexture.format===Ar)se(v)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function I(M){const v=i.get(M),U=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!v.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");L(v.__webglFramebuffer,M)}else if(U){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]=n.createRenderbuffer(),x(v.__webglDepthbuffer[K],M,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),x(v.__webglDepthbuffer,M,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function z(M,v,U){const K=i.get(M);v!==void 0&&ze(K.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&I(M)}function H(M){const v=M.texture,U=i.get(M),K=i.get(v);M.addEventListener("dispose",ce),M.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=v.version,o.memory.textures++);const J=M.isWebGLCubeRenderTarget===!0,te=M.isWebGLMultipleRenderTargets===!0,_e=E(M)||a;if(J){U.__webglFramebuffer=[];for(let he=0;he<6;he++)if(a&&v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[he]=[];for(let ve=0;ve<v.mipmaps.length;ve++)U.__webglFramebuffer[he][ve]=n.createFramebuffer()}else U.__webglFramebuffer[he]=n.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let he=0;he<v.mipmaps.length;he++)U.__webglFramebuffer[he]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(te)if(r.drawBuffers){const he=M.texture;for(let ve=0,P=he.length;ve<P;ve++){const pe=i.get(he[ve]);pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&se(M)===!1){const he=te?v:[v];U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ve=0;ve<he.length;ve++){const P=he[ve];U.__webglColorRenderbuffer[ve]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[ve]);const pe=s.convert(P.format,P.colorSpace),oe=s.convert(P.type),we=j(P.internalFormat,pe,oe,P.colorSpace,M.isXRRenderTarget===!0),Ee=Y(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,we,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,U.__webglColorRenderbuffer[ve])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),x(U.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),He(n.TEXTURE_CUBE_MAP,v,_e);for(let he=0;he<6;he++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)ze(U.__webglFramebuffer[he][ve],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ve);else ze(U.__webglFramebuffer[he],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);C(v,_e)&&A(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const he=M.texture;for(let ve=0,P=he.length;ve<P;ve++){const pe=he[ve],oe=i.get(pe);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture),He(n.TEXTURE_2D,pe,_e),ze(U.__webglFramebuffer,M,pe,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,0),C(pe,_e)&&A(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?he=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,K.__webglTexture),He(he,v,_e),a&&v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)ze(U.__webglFramebuffer[ve],M,v,n.COLOR_ATTACHMENT0,he,ve);else ze(U.__webglFramebuffer,M,v,n.COLOR_ATTACHMENT0,he,0);C(v,_e)&&A(he),t.unbindTexture()}M.depthBuffer&&I(M)}function le(M){const v=E(M)||a,U=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let K=0,J=U.length;K<J;K++){const te=U[K];if(C(te,v)){const _e=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,he=i.get(te).__webglTexture;t.bindTexture(_e,he),A(_e),t.unbindTexture()}}}function re(M){if(a&&M.samples>0&&se(M)===!1){const v=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],U=M.width,K=M.height;let J=n.COLOR_BUFFER_BIT;const te=[],_e=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(M),ve=M.isWebGLMultipleRenderTargets===!0;if(ve)for(let P=0;P<v.length;P++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+P,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+P,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let P=0;P<v.length;P++){te.push(n.COLOR_ATTACHMENT0+P),M.depthBuffer&&te.push(_e);const pe=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(pe===!1&&(M.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),ve&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[P]),pe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[_e]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_e])),ve){const oe=i.get(v[P]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,oe,0)}n.blitFramebuffer(0,0,U,K,0,0,U,K,J,n.NEAREST),m&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ve)for(let P=0;P<v.length;P++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+P,n.RENDERBUFFER,he.__webglColorRenderbuffer[P]);const pe=i.get(v[P]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+P,n.TEXTURE_2D,pe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function Y(M){return Math.min(f,M.samples)}function se(M){const v=i.get(M);return a&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ee(M){const v=o.render.frame;g.get(M)!==v&&(g.set(M,v),M.update())}function Me(M,v){const U=M.colorSpace,K=M.format,J=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===xl||U!==qn&&U!==on&&(it.getTransfer(U)===st?a===!1?e.has("EXT_sRGB")===!0&&K===gn?(M.format=xl,M.minFilter=rn,M.generateMipmaps=!1):v=xd.sRGBToLinear(v):(K!==gn||J!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),v}this.allocateTextureUnit=ie,this.resetTextureUnits=G,this.setTexture2D=ae,this.setTexture2DArray=O,this.setTexture3D=k,this.setTextureCube=ye,this.rebindTextures=z,this.setupRenderTarget=H,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=I,this.setupFrameBufferTexture=ze,this.useMultisampledRTT=se}function GS(n,e,t){const i=t.isWebGL2;function r(s,o=on){let a;const l=it.getTransfer(o);if(s===di)return n.UNSIGNED_BYTE;if(s===fd)return n.UNSIGNED_SHORT_4_4_4_4;if(s===hd)return n.UNSIGNED_SHORT_5_5_5_1;if(s===h0)return n.BYTE;if(s===d0)return n.SHORT;if(s===tc)return n.UNSIGNED_SHORT;if(s===ud)return n.INT;if(s===ai)return n.UNSIGNED_INT;if(s===li)return n.FLOAT;if(s===os)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===p0)return n.ALPHA;if(s===gn)return n.RGBA;if(s===m0)return n.LUMINANCE;if(s===g0)return n.LUMINANCE_ALPHA;if(s===Ni)return n.DEPTH_COMPONENT;if(s===Ar)return n.DEPTH_STENCIL;if(s===xl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===_0)return n.RED;if(s===dd)return n.RED_INTEGER;if(s===v0)return n.RG;if(s===pd)return n.RG_INTEGER;if(s===md)return n.RGBA_INTEGER;if(s===fa||s===ha||s===da||s===pa)if(l===st)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===fa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ha)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===da)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===pa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===fa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ha)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===da)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===pa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===cu||s===uu||s===fu||s===hu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===cu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===uu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===fu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===hu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===x0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===du||s===pu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===du)return l===st?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===pu)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===mu||s===gu||s===_u||s===vu||s===xu||s===yu||s===Mu||s===Su||s===Eu||s===bu||s===Tu||s===Au||s===wu||s===Ru)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===mu)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===gu)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===_u)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===vu)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===xu)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===yu)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Mu)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Su)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Eu)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===bu)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Tu)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Au)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===wu)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ru)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ma||s===Cu||s===Pu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ma)return l===st?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Cu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Pu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===y0||s===Lu||s===Du||s===Uu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===ma)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Lu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Du)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Uu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ii?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class WS extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xr extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const XS={type:"move"};class Ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),h=this._getHandJoint(c,_);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(XS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Xr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class jS extends Jt{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Ni,u!==Ni&&u!==Ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ni&&(i=ai),i===void 0&&u===Ar&&(i=Ii),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Bt,this.minFilter=l!==void 0?l:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class qS extends Gi{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,m=null,g=null;const _=t.getContextAttributes();let p=null,h=null;const S=[],y=[],E=new sn;E.layers.enable(1),E.viewport=new Et;const R=new sn;R.layers.enable(2),R.viewport=new Et;const C=[E,R],A=new WS;A.layers.enable(1),A.layers.enable(2);let j=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let k=S[O];return k===void 0&&(k=new Ba,S[O]=k),k.getTargetRaySpace()},this.getControllerGrip=function(O){let k=S[O];return k===void 0&&(k=new Ba,S[O]=k),k.getGripSpace()},this.getHand=function(O){let k=S[O];return k===void 0&&(k=new Ba,S[O]=k),k.getHandSpace()};function w(O){const k=y.indexOf(O.inputSource);if(k===-1)return;const ye=S[k];ye!==void 0&&(ye.update(O.inputSource,O.frame,c||o),ye.dispatchEvent({type:O.type,data:O.inputSource}))}function Q(){r.removeEventListener("select",w),r.removeEventListener("selectstart",w),r.removeEventListener("selectend",w),r.removeEventListener("squeeze",w),r.removeEventListener("squeezestart",w),r.removeEventListener("squeezeend",w),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",ce);for(let O=0;O<S.length;O++){const k=y[O];k!==null&&(y[O]=null,S[O].disconnect(k))}j=null,T=null,e.setRenderTarget(p),m=null,d=null,f=null,r=null,h=null,ae.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",w),r.addEventListener("selectstart",w),r.addEventListener("selectend",w),r.addEventListener("squeeze",w),r.addEventListener("squeezestart",w),r.addEventListener("squeezeend",w),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",ce),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const k={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,k),r.updateRenderState({baseLayer:m}),h=new zi(m.framebufferWidth,m.framebufferHeight,{format:gn,type:di,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let k=null,ye=null,Se=null;_.depth&&(Se=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,k=_.stencil?Ar:Ni,ye=_.stencil?Ii:ai);const Ae={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(Ae),r.updateRenderState({layers:[d]}),h=new zi(d.textureWidth,d.textureHeight,{format:gn,type:di,depthTexture:new jS(d.textureWidth,d.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Pe=e.properties.get(h);Pe.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ae.setContext(r),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function ce(O){for(let k=0;k<O.removed.length;k++){const ye=O.removed[k],Se=y.indexOf(ye);Se>=0&&(y[Se]=null,S[Se].disconnect(ye))}for(let k=0;k<O.added.length;k++){const ye=O.added[k];let Se=y.indexOf(ye);if(Se===-1){for(let Pe=0;Pe<S.length;Pe++)if(Pe>=y.length){y.push(ye),Se=Pe;break}else if(y[Pe]===null){y[Pe]=ye,Se=Pe;break}if(Se===-1)break}const Ae=S[Se];Ae&&Ae.connect(ye)}}const fe=new F,N=new F;function q(O,k,ye){fe.setFromMatrixPosition(k.matrixWorld),N.setFromMatrixPosition(ye.matrixWorld);const Se=fe.distanceTo(N),Ae=k.projectionMatrix.elements,Pe=ye.projectionMatrix.elements,He=Ae[14]/(Ae[10]-1),Ne=Ae[14]/(Ae[10]+1),Ie=(Ae[9]+1)/Ae[5],nt=(Ae[9]-1)/Ae[5],ze=(Ae[8]-1)/Ae[0],x=(Pe[8]+1)/Pe[0],L=He*ze,I=He*x,z=Se/(-ze+x),H=z*-ze;k.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(H),O.translateZ(z),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const le=He+z,re=Ne+z,Y=L-H,se=I+(Se-H),ee=Ie*Ne/re*le,Me=nt*Ne/re*le;O.projectionMatrix.makePerspective(Y,se,ee,Me,le,re),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function Z(O,k){k===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(k.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;A.near=R.near=E.near=O.near,A.far=R.far=E.far=O.far,(j!==A.near||T!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),j=A.near,T=A.far);const k=O.parent,ye=A.cameras;Z(A,k);for(let Se=0;Se<ye.length;Se++)Z(ye[Se],k);ye.length===2?q(A,E,R):A.projectionMatrix.copy(E.projectionMatrix),G(O,A,k)};function G(O,k,ye){ye===null?O.matrix.copy(k.matrixWorld):(O.matrix.copy(ye.matrixWorld),O.matrix.invert(),O.matrix.multiply(k.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(k.projectionMatrix),O.projectionMatrixInverse.copy(k.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=as*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(O){l=O,d!==null&&(d.fixedFoveation=O),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=O)};let ie=null;function ue(O,k){if(u=k.getViewerPose(c||o),g=k,u!==null){const ye=u.views;m!==null&&(e.setRenderTargetFramebuffer(h,m.framebuffer),e.setRenderTarget(h));let Se=!1;ye.length!==A.cameras.length&&(A.cameras.length=0,Se=!0);for(let Ae=0;Ae<ye.length;Ae++){const Pe=ye[Ae];let He=null;if(m!==null)He=m.getViewport(Pe);else{const Ie=f.getViewSubImage(d,Pe);He=Ie.viewport,Ae===0&&(e.setRenderTargetTextures(h,Ie.colorTexture,d.ignoreDepthValues?void 0:Ie.depthStencilTexture),e.setRenderTarget(h))}let Ne=C[Ae];Ne===void 0&&(Ne=new sn,Ne.layers.enable(Ae),Ne.viewport=new Et,C[Ae]=Ne),Ne.matrix.fromArray(Pe.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(Pe.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(He.x,He.y,He.width,He.height),Ae===0&&(A.matrix.copy(Ne.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Se===!0&&A.cameras.push(Ne)}}for(let ye=0;ye<S.length;ye++){const Se=y[ye],Ae=S[ye];Se!==null&&Ae!==void 0&&Ae.update(Se,k,c||o)}ie&&ie(O,k),k.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:k}),g=null}const ae=new Pd;ae.setAnimationLoop(ue),this.setAnimationLoop=function(O){ie=O},this.dispose=function(){}}}function YS(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,wd(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,S,y,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,E)):h.isMeshMatcapMaterial?(s(p,h),g(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),_(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?l(p,h,S,y):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Xt&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Xt&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const S=e.get(h).envMap;if(S&&(p.envMap.value=S,p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const y=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*y,t(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,S,y){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*S,p.scale.value=y*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,S){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Xt&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){const S=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function KS(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,y){const E=y.program;i.uniformBlockBinding(S,E)}function c(S,y){let E=r[S.id];E===void 0&&(g(S),E=u(S),r[S.id]=E,S.addEventListener("dispose",p));const R=y.program;i.updateUBOMapping(S,R);const C=e.render.frame;s[S.id]!==C&&(d(S),s[S.id]=C)}function u(S){const y=f();S.__bindingPointIndex=y;const E=n.createBuffer(),R=S.__size,C=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,R,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,E),E}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const y=r[S.id],E=S.uniforms,R=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let C=0,A=E.length;C<A;C++){const j=E[C];if(m(j,C,R)===!0){const T=j.__offset,w=Array.isArray(j.value)?j.value:[j.value];let Q=0;for(let ce=0;ce<w.length;ce++){const fe=w[ce],N=_(fe);typeof fe=="number"?(j.__data[0]=fe,n.bufferSubData(n.UNIFORM_BUFFER,T+Q,j.__data)):fe.isMatrix3?(j.__data[0]=fe.elements[0],j.__data[1]=fe.elements[1],j.__data[2]=fe.elements[2],j.__data[3]=fe.elements[0],j.__data[4]=fe.elements[3],j.__data[5]=fe.elements[4],j.__data[6]=fe.elements[5],j.__data[7]=fe.elements[0],j.__data[8]=fe.elements[6],j.__data[9]=fe.elements[7],j.__data[10]=fe.elements[8],j.__data[11]=fe.elements[0]):(fe.toArray(j.__data,Q),Q+=N.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,T,j.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(S,y,E){const R=S.value;if(E[y]===void 0){if(typeof R=="number")E[y]=R;else{const C=Array.isArray(R)?R:[R],A=[];for(let j=0;j<C.length;j++)A.push(C[j].clone());E[y]=A}return!0}else if(typeof R=="number"){if(E[y]!==R)return E[y]=R,!0}else{const C=Array.isArray(E[y])?E[y]:[E[y]],A=Array.isArray(R)?R:[R];for(let j=0;j<C.length;j++){const T=C[j];if(T.equals(A[j])===!1)return T.copy(A[j]),!0}}return!1}function g(S){const y=S.uniforms;let E=0;const R=16;let C=0;for(let A=0,j=y.length;A<j;A++){const T=y[A],w={boundary:0,storage:0},Q=Array.isArray(T.value)?T.value:[T.value];for(let ce=0,fe=Q.length;ce<fe;ce++){const N=Q[ce],q=_(N);w.boundary+=q.boundary,w.storage+=q.storage}if(T.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=E,A>0){C=E%R;const ce=R-C;C!==0&&ce-w.boundary<0&&(E+=R-C,T.__offset=E)}E+=w.storage}return C=E%R,C>0&&(E+=R-C),S.__size=E,S.__cache={},this}function _(S){const y={boundary:0,storage:0};return typeof S=="number"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function p(S){const y=S.target;y.removeEventListener("dispose",p);const E=o.indexOf(y.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function h(){for(const S in r)n.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class Od{constructor(e={}){const{canvas:t=q0(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const h=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tt,this._useLegacyLights=!1,this.toneMapping=hi,this.toneMappingExposure=1;const y=this;let E=!1,R=0,C=0,A=null,j=-1,T=null;const w=new Et,Q=new Et;let ce=null;const fe=new Ze(0);let N=0,q=t.width,Z=t.height,G=1,ie=null,ue=null;const ae=new Et(0,0,q,Z),O=new Et(0,0,q,Z);let k=!1;const ye=new rc;let Se=!1,Ae=!1,Pe=null;const He=new ht,Ne=new Ge,Ie=new F,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ze(){return A===null?G:1}let x=i;function L(b,B){for(let V=0;V<b.length;V++){const W=b[V],X=t.getContext(W,B);if(X!==null)return X}return null}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ql}`),t.addEventListener("webglcontextlost",Ye,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",ge,!1),x===null){const B=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&B.shift(),x=L(B,b),x===null)throw L(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&x instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),x.getShaderPrecisionFormat===void 0&&(x.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let I,z,H,le,re,Y,se,ee,Me,M,v,U,K,J,te,_e,he,ve,P,pe,oe,we,Ee,Le;function Ce(){I=new sM(x),z=new Qy(x,I,e),I.init(z),we=new GS(x,I,z),H=new kS(x,I,z),le=new lM(x),re=new wS,Y=new VS(x,I,H,re,z,we,le),se=new tM(y),ee=new rM(y),Me=new vv(x,z),Ee=new Zy(x,I,Me,z),M=new oM(x,Me,le,Ee),v=new hM(x,M,Me,le),P=new fM(x,z,Y),_e=new eM(re),U=new AS(y,se,ee,I,z,Ee,_e),K=new YS(y,re),J=new CS,te=new NS(I,z),ve=new $y(y,se,ee,H,v,d,l),he=new HS(y,v,z),Le=new KS(x,le,z,H),pe=new Jy(x,I,le,z),oe=new aM(x,I,le,z),le.programs=U.programs,y.capabilities=z,y.extensions=I,y.properties=re,y.renderLists=J,y.shadowMap=he,y.state=H,y.info=le}Ce();const Te=new qS(y,x);this.xr=Te,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const b=I.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=I.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(b){b!==void 0&&(G=b,this.setSize(q,Z,!1))},this.getSize=function(b){return b.set(q,Z)},this.setSize=function(b,B,V=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=b,Z=B,t.width=Math.floor(b*G),t.height=Math.floor(B*G),V===!0&&(t.style.width=b+"px",t.style.height=B+"px"),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(q*G,Z*G).floor()},this.setDrawingBufferSize=function(b,B,V){q=b,Z=B,G=V,t.width=Math.floor(b*V),t.height=Math.floor(B*V),this.setViewport(0,0,b,B)},this.getCurrentViewport=function(b){return b.copy(w)},this.getViewport=function(b){return b.copy(ae)},this.setViewport=function(b,B,V,W){b.isVector4?ae.set(b.x,b.y,b.z,b.w):ae.set(b,B,V,W),H.viewport(w.copy(ae).multiplyScalar(G).floor())},this.getScissor=function(b){return b.copy(O)},this.setScissor=function(b,B,V,W){b.isVector4?O.set(b.x,b.y,b.z,b.w):O.set(b,B,V,W),H.scissor(Q.copy(O).multiplyScalar(G).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(b){H.setScissorTest(k=b)},this.setOpaqueSort=function(b){ie=b},this.setTransparentSort=function(b){ue=b},this.getClearColor=function(b){return b.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(b=!0,B=!0,V=!0){let W=0;if(b){let X=!1;if(A!==null){const be=A.texture.format;X=be===md||be===pd||be===dd}if(X){const be=A.texture.type,De=be===di||be===ai||be===tc||be===Ii||be===fd||be===hd,Oe=ve.getClearColor(),Fe=ve.getClearAlpha(),je=Oe.r,ke=Oe.g,Ve=Oe.b;De?(m[0]=je,m[1]=ke,m[2]=Ve,m[3]=Fe,x.clearBufferuiv(x.COLOR,0,m)):(g[0]=je,g[1]=ke,g[2]=Ve,g[3]=Fe,x.clearBufferiv(x.COLOR,0,g))}else W|=x.COLOR_BUFFER_BIT}B&&(W|=x.DEPTH_BUFFER_BIT),V&&(W|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),x.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ye,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),J.dispose(),te.dispose(),re.dispose(),se.dispose(),ee.dispose(),v.dispose(),Ee.dispose(),Le.dispose(),U.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",en),Te.removeEventListener("sessionend",rt),Pe&&(Pe.dispose(),Pe=null),Ut.stop()};function Ye(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const b=le.autoReset,B=he.enabled,V=he.autoUpdate,W=he.needsUpdate,X=he.type;Ce(),le.autoReset=b,he.enabled=B,he.autoUpdate=V,he.needsUpdate=W,he.type=X}function ge(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function de(b){const B=b.target;B.removeEventListener("dispose",de),$(B)}function $(b){me(b),re.remove(b)}function me(b){const B=re.get(b).programs;B!==void 0&&(B.forEach(function(V){U.releaseProgram(V)}),b.isShaderMaterial&&U.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,V,W,X,be){B===null&&(B=nt);const De=X.isMesh&&X.matrixWorld.determinant()<0,Oe=Lp(b,B,V,W,X);H.setMaterial(W,De);let Fe=V.index,je=1;if(W.wireframe===!0){if(Fe=M.getWireframeAttribute(V),Fe===void 0)return;je=2}const ke=V.drawRange,Ve=V.attributes.position;let ft=ke.start*je,qt=(ke.start+ke.count)*je;be!==null&&(ft=Math.max(ft,be.start*je),qt=Math.min(qt,(be.start+be.count)*je)),Fe!==null?(ft=Math.max(ft,0),qt=Math.min(qt,Fe.count)):Ve!=null&&(ft=Math.max(ft,0),qt=Math.min(qt,Ve.count));const Mt=qt-ft;if(Mt<0||Mt===1/0)return;Ee.setup(X,W,Oe,V,Fe);let Un,ut=pe;if(Fe!==null&&(Un=Me.get(Fe),ut=oe,ut.setIndex(Un)),X.isMesh)W.wireframe===!0?(H.setLineWidth(W.wireframeLinewidth*ze()),ut.setMode(x.LINES)):ut.setMode(x.TRIANGLES);else if(X.isLine){let $e=W.linewidth;$e===void 0&&($e=1),H.setLineWidth($e*ze()),X.isLineSegments?ut.setMode(x.LINES):X.isLineLoop?ut.setMode(x.LINE_LOOP):ut.setMode(x.LINE_STRIP)}else X.isPoints?ut.setMode(x.POINTS):X.isSprite&&ut.setMode(x.TRIANGLES);if(X.isInstancedMesh)ut.renderInstances(ft,Mt,X.count);else if(V.isInstancedBufferGeometry){const $e=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Jo=Math.min(V.instanceCount,$e);ut.renderInstances(ft,Mt,Jo)}else ut.render(ft,Mt)};function Ue(b,B,V){b.transparent===!0&&b.side===Vn&&b.forceSinglePass===!1?(b.side=Xt,b.needsUpdate=!0,gs(b,B,V),b.side=mi,b.needsUpdate=!0,gs(b,B,V),b.side=Vn):gs(b,B,V)}this.compile=function(b,B,V=null){V===null&&(V=b),p=te.get(V),p.init(),S.push(p),V.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),b!==V&&b.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights(y._useLegacyLights);const W=new Set;return b.traverse(function(X){const be=X.material;if(be)if(Array.isArray(be))for(let De=0;De<be.length;De++){const Oe=be[De];Ue(Oe,V,X),W.add(Oe)}else Ue(be,V,X),W.add(be)}),S.pop(),p=null,W},this.compileAsync=function(b,B,V=null){const W=this.compile(b,B,V);return new Promise(X=>{function be(){if(W.forEach(function(De){re.get(De).currentProgram.isReady()&&W.delete(De)}),W.size===0){X(b);return}setTimeout(be,10)}I.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Ke=null;function dt(b){Ke&&Ke(b)}function en(){Ut.stop()}function rt(){Ut.start()}const Ut=new Pd;Ut.setAnimationLoop(dt),typeof self<"u"&&Ut.setContext(self),this.setAnimationLoop=function(b){Ke=b,Te.setAnimationLoop(b),b===null?Ut.stop():Ut.start()},Te.addEventListener("sessionstart",en),Te.addEventListener("sessionend",rt),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(B),B=Te.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,B,A),p=te.get(b,S.length),p.init(),S.push(p),He.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ye.setFromProjectionMatrix(He),Ae=this.localClippingEnabled,Se=_e.init(this.clippingPlanes,Ae),_=J.get(b,h.length),_.init(),h.push(_),Sn(b,B,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(ie,ue),this.info.render.frame++,Se===!0&&_e.beginShadows();const V=p.state.shadowsArray;if(he.render(V,b,B),Se===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),ve.render(_,b),p.setupLights(y._useLegacyLights),B.isArrayCamera){const W=B.cameras;for(let X=0,be=W.length;X<be;X++){const De=W[X];xc(_,b,De,De.viewport)}}else xc(_,b,B);A!==null&&(Y.updateMultisampleRenderTarget(A),Y.updateRenderTargetMipmap(A)),b.isScene===!0&&b.onAfterRender(y,b,B),Ee.resetDefaultState(),j=-1,T=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function Sn(b,B,V,W){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ye.intersectsSprite(b)){W&&Ie.setFromMatrixPosition(b.matrixWorld).applyMatrix4(He);const De=v.update(b),Oe=b.material;Oe.visible&&_.push(b,De,Oe,V,Ie.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ye.intersectsObject(b))){const De=v.update(b),Oe=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ie.copy(b.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Ie.copy(De.boundingSphere.center)),Ie.applyMatrix4(b.matrixWorld).applyMatrix4(He)),Array.isArray(Oe)){const Fe=De.groups;for(let je=0,ke=Fe.length;je<ke;je++){const Ve=Fe[je],ft=Oe[Ve.materialIndex];ft&&ft.visible&&_.push(b,De,ft,V,Ie.z,Ve)}}else Oe.visible&&_.push(b,De,Oe,V,Ie.z,null)}}const be=b.children;for(let De=0,Oe=be.length;De<Oe;De++)Sn(be[De],B,V,W)}function xc(b,B,V,W){const X=b.opaque,be=b.transmissive,De=b.transparent;p.setupLightsView(V),Se===!0&&_e.setGlobalState(y.clippingPlanes,V),be.length>0&&Pp(X,be,B,V),W&&H.viewport(w.copy(W)),X.length>0&&ms(X,B,V),be.length>0&&ms(be,B,V),De.length>0&&ms(De,B,V),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function Pp(b,B,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const be=z.isWebGL2;Pe===null&&(Pe=new zi(1,1,{generateMipmaps:!0,type:I.has("EXT_color_buffer_half_float")?os:di,minFilter:ss,samples:be?4:0})),y.getDrawingBufferSize(Ne),be?Pe.setSize(Ne.x,Ne.y):Pe.setSize(yo(Ne.x),yo(Ne.y));const De=y.getRenderTarget();y.setRenderTarget(Pe),y.getClearColor(fe),N=y.getClearAlpha(),N<1&&y.setClearColor(16777215,.5),y.clear();const Oe=y.toneMapping;y.toneMapping=hi,ms(b,V,W),Y.updateMultisampleRenderTarget(Pe),Y.updateRenderTargetMipmap(Pe);let Fe=!1;for(let je=0,ke=B.length;je<ke;je++){const Ve=B[je],ft=Ve.object,qt=Ve.geometry,Mt=Ve.material,Un=Ve.group;if(Mt.side===Vn&&ft.layers.test(W.layers)){const ut=Mt.side;Mt.side=Xt,Mt.needsUpdate=!0,yc(ft,V,W,qt,Mt,Un),Mt.side=ut,Mt.needsUpdate=!0,Fe=!0}}Fe===!0&&(Y.updateMultisampleRenderTarget(Pe),Y.updateRenderTargetMipmap(Pe)),y.setRenderTarget(De),y.setClearColor(fe,N),y.toneMapping=Oe}function ms(b,B,V){const W=B.isScene===!0?B.overrideMaterial:null;for(let X=0,be=b.length;X<be;X++){const De=b[X],Oe=De.object,Fe=De.geometry,je=W===null?De.material:W,ke=De.group;Oe.layers.test(V.layers)&&yc(Oe,B,V,Fe,je,ke)}}function yc(b,B,V,W,X,be){b.onBeforeRender(y,B,V,W,X,be),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(y,B,V,W,b,be),X.transparent===!0&&X.side===Vn&&X.forceSinglePass===!1?(X.side=Xt,X.needsUpdate=!0,y.renderBufferDirect(V,B,W,X,b,be),X.side=mi,X.needsUpdate=!0,y.renderBufferDirect(V,B,W,X,b,be),X.side=Vn):y.renderBufferDirect(V,B,W,X,b,be),b.onAfterRender(y,B,V,W,X,be)}function gs(b,B,V){B.isScene!==!0&&(B=nt);const W=re.get(b),X=p.state.lights,be=p.state.shadowsArray,De=X.state.version,Oe=U.getParameters(b,X.state,be,B,V),Fe=U.getProgramCacheKey(Oe);let je=W.programs;W.environment=b.isMeshStandardMaterial?B.environment:null,W.fog=B.fog,W.envMap=(b.isMeshStandardMaterial?ee:se).get(b.envMap||W.environment),je===void 0&&(b.addEventListener("dispose",de),je=new Map,W.programs=je);let ke=je.get(Fe);if(ke!==void 0){if(W.currentProgram===ke&&W.lightsStateVersion===De)return Sc(b,Oe),ke}else Oe.uniforms=U.getUniforms(b),b.onBuild(V,Oe,y),b.onBeforeCompile(Oe,y),ke=U.acquireProgram(Oe,Fe),je.set(Fe,ke),W.uniforms=Oe.uniforms;const Ve=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ve.clippingPlanes=_e.uniform),Sc(b,Oe),W.needsLights=Up(b),W.lightsStateVersion=De,W.needsLights&&(Ve.ambientLightColor.value=X.state.ambient,Ve.lightProbe.value=X.state.probe,Ve.directionalLights.value=X.state.directional,Ve.directionalLightShadows.value=X.state.directionalShadow,Ve.spotLights.value=X.state.spot,Ve.spotLightShadows.value=X.state.spotShadow,Ve.rectAreaLights.value=X.state.rectArea,Ve.ltc_1.value=X.state.rectAreaLTC1,Ve.ltc_2.value=X.state.rectAreaLTC2,Ve.pointLights.value=X.state.point,Ve.pointLightShadows.value=X.state.pointShadow,Ve.hemisphereLights.value=X.state.hemi,Ve.directionalShadowMap.value=X.state.directionalShadowMap,Ve.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ve.spotShadowMap.value=X.state.spotShadowMap,Ve.spotLightMatrix.value=X.state.spotLightMatrix,Ve.spotLightMap.value=X.state.spotLightMap,Ve.pointShadowMap.value=X.state.pointShadowMap,Ve.pointShadowMatrix.value=X.state.pointShadowMatrix),W.currentProgram=ke,W.uniformsList=null,ke}function Mc(b){if(b.uniformsList===null){const B=b.currentProgram.getUniforms();b.uniformsList=ro.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function Sc(b,B){const V=re.get(b);V.outputColorSpace=B.outputColorSpace,V.instancing=B.instancing,V.instancingColor=B.instancingColor,V.skinning=B.skinning,V.morphTargets=B.morphTargets,V.morphNormals=B.morphNormals,V.morphColors=B.morphColors,V.morphTargetsCount=B.morphTargetsCount,V.numClippingPlanes=B.numClippingPlanes,V.numIntersection=B.numClipIntersection,V.vertexAlphas=B.vertexAlphas,V.vertexTangents=B.vertexTangents,V.toneMapping=B.toneMapping}function Lp(b,B,V,W,X){B.isScene!==!0&&(B=nt),Y.resetTextureUnits();const be=B.fog,De=W.isMeshStandardMaterial?B.environment:null,Oe=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:qn,Fe=(W.isMeshStandardMaterial?ee:se).get(W.envMap||De),je=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ke=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ve=!!V.morphAttributes.position,ft=!!V.morphAttributes.normal,qt=!!V.morphAttributes.color;let Mt=hi;W.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Mt=y.toneMapping);const Un=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ut=Un!==void 0?Un.length:0,$e=re.get(W),Jo=p.state.lights;if(Se===!0&&(Ae===!0||b!==T)){const Yt=b===T&&W.id===j;_e.setState(W,b,Yt)}let pt=!1;W.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Jo.state.version||$e.outputColorSpace!==Oe||X.isInstancedMesh&&$e.instancing===!1||!X.isInstancedMesh&&$e.instancing===!0||X.isSkinnedMesh&&$e.skinning===!1||!X.isSkinnedMesh&&$e.skinning===!0||X.isInstancedMesh&&$e.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&$e.instancingColor===!1&&X.instanceColor!==null||$e.envMap!==Fe||W.fog===!0&&$e.fog!==be||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==_e.numPlanes||$e.numIntersection!==_e.numIntersection)||$e.vertexAlphas!==je||$e.vertexTangents!==ke||$e.morphTargets!==Ve||$e.morphNormals!==ft||$e.morphColors!==qt||$e.toneMapping!==Mt||z.isWebGL2===!0&&$e.morphTargetsCount!==ut)&&(pt=!0):(pt=!0,$e.__version=W.version);let gi=$e.currentProgram;pt===!0&&(gi=gs(W,B,X));let Ec=!1,Nr=!1,Qo=!1;const It=gi.getUniforms(),_i=$e.uniforms;if(H.useProgram(gi.program)&&(Ec=!0,Nr=!0,Qo=!0),W.id!==j&&(j=W.id,Nr=!0),Ec||T!==b){It.setValue(x,"projectionMatrix",b.projectionMatrix),It.setValue(x,"viewMatrix",b.matrixWorldInverse);const Yt=It.map.cameraPosition;Yt!==void 0&&Yt.setValue(x,Ie.setFromMatrixPosition(b.matrixWorld)),z.logarithmicDepthBuffer&&It.setValue(x,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&It.setValue(x,"isOrthographic",b.isOrthographicCamera===!0),T!==b&&(T=b,Nr=!0,Qo=!0)}if(X.isSkinnedMesh){It.setOptional(x,X,"bindMatrix"),It.setOptional(x,X,"bindMatrixInverse");const Yt=X.skeleton;Yt&&(z.floatVertexTextures?(Yt.boneTexture===null&&Yt.computeBoneTexture(),It.setValue(x,"boneTexture",Yt.boneTexture,Y),It.setValue(x,"boneTextureSize",Yt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ea=V.morphAttributes;if((ea.position!==void 0||ea.normal!==void 0||ea.color!==void 0&&z.isWebGL2===!0)&&P.update(X,V,gi),(Nr||$e.receiveShadow!==X.receiveShadow)&&($e.receiveShadow=X.receiveShadow,It.setValue(x,"receiveShadow",X.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(_i.envMap.value=Fe,_i.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),Nr&&(It.setValue(x,"toneMappingExposure",y.toneMappingExposure),$e.needsLights&&Dp(_i,Qo),be&&W.fog===!0&&K.refreshFogUniforms(_i,be),K.refreshMaterialUniforms(_i,W,G,Z,Pe),ro.upload(x,Mc($e),_i,Y)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ro.upload(x,Mc($e),_i,Y),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&It.setValue(x,"center",X.center),It.setValue(x,"modelViewMatrix",X.modelViewMatrix),It.setValue(x,"normalMatrix",X.normalMatrix),It.setValue(x,"modelMatrix",X.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Yt=W.uniformsGroups;for(let ta=0,Ip=Yt.length;ta<Ip;ta++)if(z.isWebGL2){const bc=Yt[ta];Le.update(bc,gi),Le.bind(bc,gi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return gi}function Dp(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function Up(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(b,B,V){re.get(b.texture).__webglTexture=B,re.get(b.depthTexture).__webglTexture=V;const W=re.get(b);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||I.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,B){const V=re.get(b);V.__webglFramebuffer=B,V.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,V=0){A=b,R=B,C=V;let W=!0,X=null,be=!1,De=!1;if(b){const Fe=re.get(b);Fe.__useDefaultFramebuffer!==void 0?(H.bindFramebuffer(x.FRAMEBUFFER,null),W=!1):Fe.__webglFramebuffer===void 0?Y.setupRenderTarget(b):Fe.__hasExternalTextures&&Y.rebindTextures(b,re.get(b.texture).__webglTexture,re.get(b.depthTexture).__webglTexture);const je=b.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(De=!0);const ke=re.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ke[B])?X=ke[B][V]:X=ke[B],be=!0):z.isWebGL2&&b.samples>0&&Y.useMultisampledRTT(b)===!1?X=re.get(b).__webglMultisampledFramebuffer:Array.isArray(ke)?X=ke[V]:X=ke,w.copy(b.viewport),Q.copy(b.scissor),ce=b.scissorTest}else w.copy(ae).multiplyScalar(G).floor(),Q.copy(O).multiplyScalar(G).floor(),ce=k;if(H.bindFramebuffer(x.FRAMEBUFFER,X)&&z.drawBuffers&&W&&H.drawBuffers(b,X),H.viewport(w),H.scissor(Q),H.setScissorTest(ce),be){const Fe=re.get(b.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+B,Fe.__webglTexture,V)}else if(De){const Fe=re.get(b.texture),je=B||0;x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,Fe.__webglTexture,V||0,je)}j=-1},this.readRenderTargetPixels=function(b,B,V,W,X,be,De){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=re.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&De!==void 0&&(Oe=Oe[De]),Oe){H.bindFramebuffer(x.FRAMEBUFFER,Oe);try{const Fe=b.texture,je=Fe.format,ke=Fe.type;if(je!==gn&&we.convert(je)!==x.getParameter(x.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=ke===os&&(I.has("EXT_color_buffer_half_float")||z.isWebGL2&&I.has("EXT_color_buffer_float"));if(ke!==di&&we.convert(ke)!==x.getParameter(x.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ke===li&&(z.isWebGL2||I.has("OES_texture_float")||I.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-W&&V>=0&&V<=b.height-X&&x.readPixels(B,V,W,X,we.convert(je),we.convert(ke),be)}finally{const Fe=A!==null?re.get(A).__webglFramebuffer:null;H.bindFramebuffer(x.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(b,B,V=0){const W=Math.pow(2,-V),X=Math.floor(B.image.width*W),be=Math.floor(B.image.height*W);Y.setTexture2D(B,0),x.copyTexSubImage2D(x.TEXTURE_2D,V,0,0,b.x,b.y,X,be),H.unbindTexture()},this.copyTextureToTexture=function(b,B,V,W=0){const X=B.image.width,be=B.image.height,De=we.convert(V.format),Oe=we.convert(V.type);Y.setTexture2D(V,0),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,V.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,V.unpackAlignment),B.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,W,b.x,b.y,X,be,De,Oe,B.image.data):B.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,W,b.x,b.y,B.mipmaps[0].width,B.mipmaps[0].height,De,B.mipmaps[0].data):x.texSubImage2D(x.TEXTURE_2D,W,b.x,b.y,De,Oe,B.image),W===0&&V.generateMipmaps&&x.generateMipmap(x.TEXTURE_2D),H.unbindTexture()},this.copyTextureToTexture3D=function(b,B,V,W,X=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=b.max.x-b.min.x+1,De=b.max.y-b.min.y+1,Oe=b.max.z-b.min.z+1,Fe=we.convert(W.format),je=we.convert(W.type);let ke;if(W.isData3DTexture)Y.setTexture3D(W,0),ke=x.TEXTURE_3D;else if(W.isDataArrayTexture)Y.setTexture2DArray(W,0),ke=x.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,W.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,W.unpackAlignment);const Ve=x.getParameter(x.UNPACK_ROW_LENGTH),ft=x.getParameter(x.UNPACK_IMAGE_HEIGHT),qt=x.getParameter(x.UNPACK_SKIP_PIXELS),Mt=x.getParameter(x.UNPACK_SKIP_ROWS),Un=x.getParameter(x.UNPACK_SKIP_IMAGES),ut=V.isCompressedTexture?V.mipmaps[0]:V.image;x.pixelStorei(x.UNPACK_ROW_LENGTH,ut.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,ut.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,b.min.x),x.pixelStorei(x.UNPACK_SKIP_ROWS,b.min.y),x.pixelStorei(x.UNPACK_SKIP_IMAGES,b.min.z),V.isDataTexture||V.isData3DTexture?x.texSubImage3D(ke,X,B.x,B.y,B.z,be,De,Oe,Fe,je,ut.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),x.compressedTexSubImage3D(ke,X,B.x,B.y,B.z,be,De,Oe,Fe,ut.data)):x.texSubImage3D(ke,X,B.x,B.y,B.z,be,De,Oe,Fe,je,ut),x.pixelStorei(x.UNPACK_ROW_LENGTH,Ve),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,ft),x.pixelStorei(x.UNPACK_SKIP_PIXELS,qt),x.pixelStorei(x.UNPACK_SKIP_ROWS,Mt),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Un),X===0&&W.generateMipmaps&&x.generateMipmap(ke),H.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?Y.setTextureCube(b,0):b.isData3DTexture?Y.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Y.setTexture2DArray(b,0):Y.setTexture2D(b,0),H.unbindTexture()},this.resetState=function(){R=0,C=0,A=null,H.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===nc?"display-p3":"srgb",t.unpackColorSpace=it.workingColorSpace===ko?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Tt?Oi:gd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Oi?Tt:qn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class $S extends Od{}$S.prototype.isWebGL1Renderer=!0;class ZS extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class so extends Yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ef=new F,bf=new F,Tf=new ht,za=new Vo,Xs=new fs;class JS extends bt{constructor(e=new Mn,t=new so){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Ef.fromBufferAttribute(t,r-1),bf.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ef.distanceTo(bf);e.setAttribute("lineDistance",new zt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xs.copy(i.boundingSphere),Xs.applyMatrix4(r),Xs.radius+=s,e.ray.intersectsSphere(Xs)===!1)return;Tf.copy(r).invert(),za.copy(e.ray).applyMatrix4(Tf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new F,u=new F,f=new F,d=new F,m=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){const h=Math.max(0,o.start),S=Math.min(g.count,o.start+o.count);for(let y=h,E=S-1;y<E;y+=m){const R=g.getX(y),C=g.getX(y+1);if(c.fromBufferAttribute(p,R),u.fromBufferAttribute(p,C),za.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const j=e.ray.origin.distanceTo(d);j<e.near||j>e.far||t.push({distance:j,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,o.start),S=Math.min(p.count,o.start+o.count);for(let y=h,E=S-1;y<E;y+=m){if(c.fromBufferAttribute(p,y),u.fromBufferAttribute(p,y+1),za.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(d);C<e.near||C>e.far||t.push({distance:C,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Af=new F,wf=new F;class Rf extends JS{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Af.fromBufferAttribute(t,r),wf.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Af.distanceTo(wf);e.setAttribute("lineDistance",new zt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jr extends Yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Cf=new ht,Sl=new Vo,js=new fs,qs=new F;class Ha extends bt{constructor(e=new Mn,t=new jr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),js.copy(i.boundingSphere),js.applyMatrix4(r),js.radius+=s,e.ray.intersectsSphere(js)===!1)return;Cf.copy(r).invert(),Sl.copy(e.ray).applyMatrix4(Cf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=d,_=m;g<_;g++){const p=c.getX(g);qs.fromBufferAttribute(f,p),Pf(qs,p,l,r,e,t,this)}}else{const d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let g=d,_=m;g<_;g++)qs.fromBufferAttribute(f,g),Pf(qs,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Pf(n,e,t,i,r,s,o){const a=Sl.distanceSqToPoint(n);if(a<t){const l=new F;Sl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class QS extends Yn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ze(16777215),this.specular=new Ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_d,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Lf={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class eE{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const m=c[f],g=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const tE=new eE;class ac{constructor(e){this.manager=e!==void 0?e:tE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ac.DEFAULT_MATERIAL_NAME="__DEFAULT";const zn={};class nE extends Error{constructor(e,t){super(e),this.response=t}}class iE extends ac{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Lf.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(zn[e]!==void 0){zn[e].push({onLoad:t,onProgress:i,onError:r});return}zn[e]=[],zn[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=zn[e],f=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=d?parseInt(d):0,g=m!==0;let _=0;const p=new ReadableStream({start(h){S();function S(){f.read().then(({done:y,value:E})=>{if(y)h.close();else{_+=E.byteLength;const R=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:m});for(let C=0,A=u.length;C<A;C++){const j=u[C];j.onProgress&&j.onProgress(R)}h.enqueue(E),S()}})}}});return new Response(p)}else throw new nE(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(d);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{Lf.add(e,c);const u=zn[e];delete zn[e];for(let f=0,d=u.length;f<d;f++){const m=u[f];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=zn[e];if(u===void 0)throw this.manager.itemError(e),c;delete zn[e];for(let f=0,d=u.length;f<d;f++){const m=u[f];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Fd extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ka=new ht,Df=new F,Uf=new F;class rE{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rc,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Df.setFromMatrixPosition(e.matrixWorld),t.position.copy(Df),Uf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uf),t.updateMatrixWorld(),ka.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ka),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ka)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class sE extends rE{constructor(){super(new Ld(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class oE extends Fd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new sE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class aE extends Fd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class If{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ql}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ql);function Bd(n,e){return function(){return n.apply(e,arguments)}}const{toString:lE}=Object.prototype,{getPrototypeOf:lc}=Object,Xo=(n=>e=>{const t=lE.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),Dn=n=>(n=n.toLowerCase(),e=>Xo(e)===n),jo=n=>e=>typeof e===n,{isArray:Ir}=Array,ls=jo("undefined");function cE(n){return n!==null&&!ls(n)&&n.constructor!==null&&!ls(n.constructor)&&an(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const zd=Dn("ArrayBuffer");function uE(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&zd(n.buffer),e}const fE=jo("string"),an=jo("function"),Hd=jo("number"),qo=n=>n!==null&&typeof n=="object",hE=n=>n===!0||n===!1,oo=n=>{if(Xo(n)!=="object")return!1;const e=lc(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},dE=Dn("Date"),pE=Dn("File"),mE=Dn("Blob"),gE=Dn("FileList"),_E=n=>qo(n)&&an(n.pipe),vE=n=>{let e;return n&&(typeof FormData=="function"&&n instanceof FormData||an(n.append)&&((e=Xo(n))==="formdata"||e==="object"&&an(n.toString)&&n.toString()==="[object FormData]"))},xE=Dn("URLSearchParams"),yE=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ds(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let i,r;if(typeof n!="object"&&(n=[n]),Ir(n))for(i=0,r=n.length;i<r;i++)e.call(null,n[i],i,n);else{const s=t?Object.getOwnPropertyNames(n):Object.keys(n),o=s.length;let a;for(i=0;i<o;i++)a=s[i],e.call(null,n[a],a,n)}}function kd(n,e){e=e.toLowerCase();const t=Object.keys(n);let i=t.length,r;for(;i-- >0;)if(r=t[i],e===r.toLowerCase())return r;return null}const Vd=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Gd=n=>!ls(n)&&n!==Vd;function El(){const{caseless:n}=Gd(this)&&this||{},e={},t=(i,r)=>{const s=n&&kd(e,r)||r;oo(e[s])&&oo(i)?e[s]=El(e[s],i):oo(i)?e[s]=El({},i):Ir(i)?e[s]=i.slice():e[s]=i};for(let i=0,r=arguments.length;i<r;i++)arguments[i]&&ds(arguments[i],t);return e}const ME=(n,e,t,{allOwnKeys:i}={})=>(ds(e,(r,s)=>{t&&an(r)?n[s]=Bd(r,t):n[s]=r},{allOwnKeys:i}),n),SE=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),EE=(n,e,t,i)=>{n.prototype=Object.create(e.prototype,i),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:e.prototype}),t&&Object.assign(n.prototype,t)},bE=(n,e,t,i)=>{let r,s,o;const a={};if(e=e||{},n==null)return e;do{for(r=Object.getOwnPropertyNames(n),s=r.length;s-- >0;)o=r[s],(!i||i(o,n,e))&&!a[o]&&(e[o]=n[o],a[o]=!0);n=t!==!1&&lc(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},TE=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const i=n.indexOf(e,t);return i!==-1&&i===t},AE=n=>{if(!n)return null;if(Ir(n))return n;let e=n.length;if(!Hd(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},wE=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&lc(Uint8Array)),RE=(n,e)=>{const i=(n&&n[Symbol.iterator]).call(n);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(n,s[0],s[1])}},CE=(n,e)=>{let t;const i=[];for(;(t=n.exec(e))!==null;)i.push(t);return i},PE=Dn("HTMLFormElement"),LE=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,i,r){return i.toUpperCase()+r}),Nf=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),DE=Dn("RegExp"),Wd=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),i={};ds(t,(r,s)=>{let o;(o=e(r,s,n))!==!1&&(i[s]=o||r)}),Object.defineProperties(n,i)},UE=n=>{Wd(n,(e,t)=>{if(an(n)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const i=n[t];if(an(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},IE=(n,e)=>{const t={},i=r=>{r.forEach(s=>{t[s]=!0})};return Ir(n)?i(n):i(String(n).split(e)),t},NE=()=>{},OE=(n,e)=>(n=+n,Number.isFinite(n)?n:e),Va="abcdefghijklmnopqrstuvwxyz",Of="0123456789",Xd={DIGIT:Of,ALPHA:Va,ALPHA_DIGIT:Va+Va.toUpperCase()+Of},FE=(n=16,e=Xd.ALPHA_DIGIT)=>{let t="";const{length:i}=e;for(;n--;)t+=e[Math.random()*i|0];return t};function BE(n){return!!(n&&an(n.append)&&n[Symbol.toStringTag]==="FormData"&&n[Symbol.iterator])}const zE=n=>{const e=new Array(10),t=(i,r)=>{if(qo(i)){if(e.indexOf(i)>=0)return;if(!("toJSON"in i)){e[r]=i;const s=Ir(i)?[]:{};return ds(i,(o,a)=>{const l=t(o,r+1);!ls(l)&&(s[a]=l)}),e[r]=void 0,s}}return i};return t(n,0)},HE=Dn("AsyncFunction"),kE=n=>n&&(qo(n)||an(n))&&an(n.then)&&an(n.catch),ne={isArray:Ir,isArrayBuffer:zd,isBuffer:cE,isFormData:vE,isArrayBufferView:uE,isString:fE,isNumber:Hd,isBoolean:hE,isObject:qo,isPlainObject:oo,isUndefined:ls,isDate:dE,isFile:pE,isBlob:mE,isRegExp:DE,isFunction:an,isStream:_E,isURLSearchParams:xE,isTypedArray:wE,isFileList:gE,forEach:ds,merge:El,extend:ME,trim:yE,stripBOM:SE,inherits:EE,toFlatObject:bE,kindOf:Xo,kindOfTest:Dn,endsWith:TE,toArray:AE,forEachEntry:RE,matchAll:CE,isHTMLForm:PE,hasOwnProperty:Nf,hasOwnProp:Nf,reduceDescriptors:Wd,freezeMethods:UE,toObjectSet:IE,toCamelCase:LE,noop:NE,toFiniteNumber:OE,findKey:kd,global:Vd,isContextDefined:Gd,ALPHABET:Xd,generateString:FE,isSpecCompliantForm:BE,toJSONObject:zE,isAsyncFn:HE,isThenable:kE};function Je(n,e,t,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),i&&(this.request=i),r&&(this.response=r)}ne.inherits(Je,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:ne.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const jd=Je.prototype,qd={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{qd[n]={value:n}});Object.defineProperties(Je,qd);Object.defineProperty(jd,"isAxiosError",{value:!0});Je.from=(n,e,t,i,r,s)=>{const o=Object.create(jd);return ne.toFlatObject(n,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),Je.call(o,n.message,e,t,i,r),o.cause=n,o.name=n.name,s&&Object.assign(o,s),o};const VE=null;function bl(n){return ne.isPlainObject(n)||ne.isArray(n)}function Yd(n){return ne.endsWith(n,"[]")?n.slice(0,-2):n}function Ff(n,e,t){return n?n.concat(e).map(function(r,s){return r=Yd(r),!t&&s?"["+r+"]":r}).join(t?".":""):e}function GE(n){return ne.isArray(n)&&!n.some(bl)}const WE=ne.toFlatObject(ne,{},null,function(e){return/^is[A-Z]/.test(e)});function Yo(n,e,t){if(!ne.isObject(n))throw new TypeError("target must be an object");e=e||new FormData,t=ne.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(_,p){return!ne.isUndefined(p[_])});const i=t.metaTokens,r=t.visitor||u,s=t.dots,o=t.indexes,l=(t.Blob||typeof Blob<"u"&&Blob)&&ne.isSpecCompliantForm(e);if(!ne.isFunction(r))throw new TypeError("visitor must be a function");function c(g){if(g===null)return"";if(ne.isDate(g))return g.toISOString();if(!l&&ne.isBlob(g))throw new Je("Blob is not supported. Use a Buffer instead.");return ne.isArrayBuffer(g)||ne.isTypedArray(g)?l&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function u(g,_,p){let h=g;if(g&&!p&&typeof g=="object"){if(ne.endsWith(_,"{}"))_=i?_:_.slice(0,-2),g=JSON.stringify(g);else if(ne.isArray(g)&&GE(g)||(ne.isFileList(g)||ne.endsWith(_,"[]"))&&(h=ne.toArray(g)))return _=Yd(_),h.forEach(function(y,E){!(ne.isUndefined(y)||y===null)&&e.append(o===!0?Ff([_],E,s):o===null?_:_+"[]",c(y))}),!1}return bl(g)?!0:(e.append(Ff(p,_,s),c(g)),!1)}const f=[],d=Object.assign(WE,{defaultVisitor:u,convertValue:c,isVisitable:bl});function m(g,_){if(!ne.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+_.join("."));f.push(g),ne.forEach(g,function(h,S){(!(ne.isUndefined(h)||h===null)&&r.call(e,h,ne.isString(S)?S.trim():S,_,d))===!0&&m(h,_?_.concat(S):[S])}),f.pop()}}if(!ne.isObject(n))throw new TypeError("data must be an object");return m(n),e}function Bf(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function cc(n,e){this._pairs=[],n&&Yo(n,this,e)}const Kd=cc.prototype;Kd.append=function(e,t){this._pairs.push([e,t])};Kd.toString=function(e){const t=e?function(i){return e.call(this,i,Bf)}:Bf;return this._pairs.map(function(r){return t(r[0])+"="+t(r[1])},"").join("&")};function XE(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function $d(n,e,t){if(!e)return n;const i=t&&t.encode||XE,r=t&&t.serialize;let s;if(r?s=r(e,t):s=ne.isURLSearchParams(e)?e.toString():new cc(e,t).toString(i),s){const o=n.indexOf("#");o!==-1&&(n=n.slice(0,o)),n+=(n.indexOf("?")===-1?"?":"&")+s}return n}class jE{constructor(){this.handlers=[]}use(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){ne.forEach(this.handlers,function(i){i!==null&&e(i)})}}const zf=jE,Zd={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},qE=typeof URLSearchParams<"u"?URLSearchParams:cc,YE=typeof FormData<"u"?FormData:null,KE=typeof Blob<"u"?Blob:null,$E={isBrowser:!0,classes:{URLSearchParams:qE,FormData:YE,Blob:KE},protocols:["http","https","file","blob","url","data"]},Jd=typeof window<"u"&&typeof document<"u",ZE=(n=>Jd&&["ReactNative","NativeScript","NS"].indexOf(n)<0)(typeof navigator<"u"&&navigator.product),JE=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),QE=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Jd,hasStandardBrowserEnv:ZE,hasStandardBrowserWebWorkerEnv:JE},Symbol.toStringTag,{value:"Module"})),Rn={...QE,...$E};function eb(n,e){return Yo(n,new Rn.classes.URLSearchParams,Object.assign({visitor:function(t,i,r,s){return Rn.isNode&&ne.isBuffer(t)?(this.append(i,t.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function tb(n){return ne.matchAll(/\w+|\[(\w*)]/g,n).map(e=>e[0]==="[]"?"":e[1]||e[0])}function nb(n){const e={},t=Object.keys(n);let i;const r=t.length;let s;for(i=0;i<r;i++)s=t[i],e[s]=n[s];return e}function Qd(n){function e(t,i,r,s){let o=t[s++];const a=Number.isFinite(+o),l=s>=t.length;return o=!o&&ne.isArray(r)?r.length:o,l?(ne.hasOwnProp(r,o)?r[o]=[r[o],i]:r[o]=i,!a):((!r[o]||!ne.isObject(r[o]))&&(r[o]=[]),e(t,i,r[o],s)&&ne.isArray(r[o])&&(r[o]=nb(r[o])),!a)}if(ne.isFormData(n)&&ne.isFunction(n.entries)){const t={};return ne.forEachEntry(n,(i,r)=>{e(tb(i),r,t,0)}),t}return null}function ib(n,e,t){if(ne.isString(n))try{return(e||JSON.parse)(n),ne.trim(n)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(n)}const uc={transitional:Zd,adapter:["xhr","http"],transformRequest:[function(e,t){const i=t.getContentType()||"",r=i.indexOf("application/json")>-1,s=ne.isObject(e);if(s&&ne.isHTMLForm(e)&&(e=new FormData(e)),ne.isFormData(e))return r&&r?JSON.stringify(Qd(e)):e;if(ne.isArrayBuffer(e)||ne.isBuffer(e)||ne.isStream(e)||ne.isFile(e)||ne.isBlob(e))return e;if(ne.isArrayBufferView(e))return e.buffer;if(ne.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(i.indexOf("application/x-www-form-urlencoded")>-1)return eb(e,this.formSerializer).toString();if((a=ne.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Yo(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||r?(t.setContentType("application/json",!1),ib(e)):e}],transformResponse:[function(e){const t=this.transitional||uc.transitional,i=t&&t.forcedJSONParsing,r=this.responseType==="json";if(e&&ne.isString(e)&&(i&&!this.responseType||r)){const o=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?Je.from(a,Je.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Rn.classes.FormData,Blob:Rn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};ne.forEach(["delete","get","head","post","put","patch"],n=>{uc.headers[n]={}});const fc=uc,rb=ne.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),sb=n=>{const e={};let t,i,r;return n&&n.split(`
`).forEach(function(o){r=o.indexOf(":"),t=o.substring(0,r).trim().toLowerCase(),i=o.substring(r+1).trim(),!(!t||e[t]&&rb[t])&&(t==="set-cookie"?e[t]?e[t].push(i):e[t]=[i]:e[t]=e[t]?e[t]+", "+i:i)}),e},Hf=Symbol("internals");function kr(n){return n&&String(n).trim().toLowerCase()}function ao(n){return n===!1||n==null?n:ne.isArray(n)?n.map(ao):String(n)}function ob(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=t.exec(n);)e[i[1]]=i[2];return e}const ab=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function Ga(n,e,t,i,r){if(ne.isFunction(i))return i.call(this,e,t);if(r&&(e=t),!!ne.isString(e)){if(ne.isString(i))return e.indexOf(i)!==-1;if(ne.isRegExp(i))return i.test(e)}}function lb(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,i)=>t.toUpperCase()+i)}function cb(n,e){const t=ne.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(n,i+t,{value:function(r,s,o){return this[i].call(this,e,r,s,o)},configurable:!0})})}class Ko{constructor(e){e&&this.set(e)}set(e,t,i){const r=this;function s(a,l,c){const u=kr(l);if(!u)throw new Error("header name must be a non-empty string");const f=ne.findKey(r,u);(!f||r[f]===void 0||c===!0||c===void 0&&r[f]!==!1)&&(r[f||l]=ao(a))}const o=(a,l)=>ne.forEach(a,(c,u)=>s(c,u,l));return ne.isPlainObject(e)||e instanceof this.constructor?o(e,t):ne.isString(e)&&(e=e.trim())&&!ab(e)?o(sb(e),t):e!=null&&s(t,e,i),this}get(e,t){if(e=kr(e),e){const i=ne.findKey(this,e);if(i){const r=this[i];if(!t)return r;if(t===!0)return ob(r);if(ne.isFunction(t))return t.call(this,r,i);if(ne.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=kr(e),e){const i=ne.findKey(this,e);return!!(i&&this[i]!==void 0&&(!t||Ga(this,this[i],i,t)))}return!1}delete(e,t){const i=this;let r=!1;function s(o){if(o=kr(o),o){const a=ne.findKey(i,o);a&&(!t||Ga(i,i[a],a,t))&&(delete i[a],r=!0)}}return ne.isArray(e)?e.forEach(s):s(e),r}clear(e){const t=Object.keys(this);let i=t.length,r=!1;for(;i--;){const s=t[i];(!e||Ga(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const t=this,i={};return ne.forEach(this,(r,s)=>{const o=ne.findKey(i,s);if(o){t[o]=ao(r),delete t[s];return}const a=e?lb(s):String(s).trim();a!==s&&delete t[s],t[a]=ao(r),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return ne.forEach(this,(i,r)=>{i!=null&&i!==!1&&(t[r]=e&&ne.isArray(i)?i.join(", "):i)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const i=new this(e);return t.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[Hf]=this[Hf]={accessors:{}}).accessors,r=this.prototype;function s(o){const a=kr(o);i[a]||(cb(r,o),i[a]=!0)}return ne.isArray(e)?e.forEach(s):s(e),this}}Ko.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);ne.reduceDescriptors(Ko.prototype,({value:n},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>n,set(i){this[t]=i}}});ne.freezeMethods(Ko);const jn=Ko;function Wa(n,e){const t=this||fc,i=e||t,r=jn.from(i.headers);let s=i.data;return ne.forEach(n,function(a){s=a.call(t,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function ep(n){return!!(n&&n.__CANCEL__)}function ps(n,e,t){Je.call(this,n??"canceled",Je.ERR_CANCELED,e,t),this.name="CanceledError"}ne.inherits(ps,Je,{__CANCEL__:!0});function ub(n,e,t){const i=t.config.validateStatus;!t.status||!i||i(t.status)?n(t):e(new Je("Request failed with status code "+t.status,[Je.ERR_BAD_REQUEST,Je.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}const fb=Rn.hasStandardBrowserEnv?function(){return{write:function(t,i,r,s,o,a){const l=[];l.push(t+"="+encodeURIComponent(i)),ne.isNumber(r)&&l.push("expires="+new Date(r).toGMTString()),ne.isString(s)&&l.push("path="+s),ne.isString(o)&&l.push("domain="+o),a===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(t){const i=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function hb(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function db(n,e){return e?n.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):n}function tp(n,e){return n&&!hb(e)?db(n,e):e}const pb=Rn.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let i;function r(s){let o=s;return e&&(t.setAttribute("href",o),o=t.href),t.setAttribute("href",o),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return i=r(window.location.href),function(o){const a=ne.isString(o)?r(o):o;return a.protocol===i.protocol&&a.host===i.host}}():function(){return function(){return!0}}();function mb(n){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return e&&e[1]||""}function gb(n,e){n=n||10;const t=new Array(n),i=new Array(n);let r=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[s];o||(o=c),t[r]=l,i[r]=c;let f=s,d=0;for(;f!==r;)d+=t[f++],f=f%n;if(r=(r+1)%n,r===s&&(s=(s+1)%n),c-o<e)return;const m=u&&c-u;return m?Math.round(d*1e3/m):void 0}}function kf(n,e){let t=0;const i=gb(50,250);return r=>{const s=r.loaded,o=r.lengthComputable?r.total:void 0,a=s-t,l=i(a),c=s<=o;t=s;const u={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&c?(o-s)/l:void 0,event:r};u[e?"download":"upload"]=!0,n(u)}}const _b=typeof XMLHttpRequest<"u",vb=_b&&function(n){return new Promise(function(t,i){let r=n.data;const s=jn.from(n.headers).normalize(),o=n.responseType;let a;function l(){n.cancelToken&&n.cancelToken.unsubscribe(a),n.signal&&n.signal.removeEventListener("abort",a)}let c;if(ne.isFormData(r)){if(Rn.hasStandardBrowserEnv||Rn.hasStandardBrowserWebWorkerEnv)s.setContentType(!1);else if((c=s.getContentType())!==!1){const[g,..._]=c?c.split(";").map(p=>p.trim()).filter(Boolean):[];s.setContentType([g||"multipart/form-data",..._].join("; "))}}let u=new XMLHttpRequest;if(n.auth){const g=n.auth.username||"",_=n.auth.password?unescape(encodeURIComponent(n.auth.password)):"";s.set("Authorization","Basic "+btoa(g+":"+_))}const f=tp(n.baseURL,n.url);u.open(n.method.toUpperCase(),$d(f,n.params,n.paramsSerializer),!0),u.timeout=n.timeout;function d(){if(!u)return;const g=jn.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),p={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:g,config:n,request:u};ub(function(S){t(S),l()},function(S){i(S),l()},p),u=null}if("onloadend"in u?u.onloadend=d:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(d)},u.onabort=function(){u&&(i(new Je("Request aborted",Je.ECONNABORTED,n,u)),u=null)},u.onerror=function(){i(new Je("Network Error",Je.ERR_NETWORK,n,u)),u=null},u.ontimeout=function(){let _=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const p=n.transitional||Zd;n.timeoutErrorMessage&&(_=n.timeoutErrorMessage),i(new Je(_,p.clarifyTimeoutError?Je.ETIMEDOUT:Je.ECONNABORTED,n,u)),u=null},Rn.hasStandardBrowserEnv){const g=pb(f)&&n.xsrfCookieName&&fb.read(n.xsrfCookieName);g&&s.set(n.xsrfHeaderName,g)}r===void 0&&s.setContentType(null),"setRequestHeader"in u&&ne.forEach(s.toJSON(),function(_,p){u.setRequestHeader(p,_)}),ne.isUndefined(n.withCredentials)||(u.withCredentials=!!n.withCredentials),o&&o!=="json"&&(u.responseType=n.responseType),typeof n.onDownloadProgress=="function"&&u.addEventListener("progress",kf(n.onDownloadProgress,!0)),typeof n.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",kf(n.onUploadProgress)),(n.cancelToken||n.signal)&&(a=g=>{u&&(i(!g||g.type?new ps(null,n,u):g),u.abort(),u=null)},n.cancelToken&&n.cancelToken.subscribe(a),n.signal&&(n.signal.aborted?a():n.signal.addEventListener("abort",a)));const m=mb(f);if(m&&Rn.protocols.indexOf(m)===-1){i(new Je("Unsupported protocol "+m+":",Je.ERR_BAD_REQUEST,n));return}u.send(r||null)})},Tl={http:VE,xhr:vb};ne.forEach(Tl,(n,e)=>{if(n){try{Object.defineProperty(n,"name",{value:e})}catch{}Object.defineProperty(n,"adapterName",{value:e})}});const Vf=n=>`- ${n}`,xb=n=>ne.isFunction(n)||n===null||n===!1,np={getAdapter:n=>{n=ne.isArray(n)?n:[n];const{length:e}=n;let t,i;const r={};for(let s=0;s<e;s++){t=n[s];let o;if(i=t,!xb(t)&&(i=Tl[(o=String(t)).toLowerCase()],i===void 0))throw new Je(`Unknown adapter '${o}'`);if(i)break;r[o||"#"+s]=i}if(!i){const s=Object.entries(r).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(Vf).join(`
`):" "+Vf(s[0]):"as no adapter specified";throw new Je("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return i},adapters:Tl};function Xa(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new ps(null,n)}function Gf(n){return Xa(n),n.headers=jn.from(n.headers),n.data=Wa.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),np.getAdapter(n.adapter||fc.adapter)(n).then(function(i){return Xa(n),i.data=Wa.call(n,n.transformResponse,i),i.headers=jn.from(i.headers),i},function(i){return ep(i)||(Xa(n),i&&i.response&&(i.response.data=Wa.call(n,n.transformResponse,i.response),i.response.headers=jn.from(i.response.headers))),Promise.reject(i)})}const Wf=n=>n instanceof jn?n.toJSON():n;function Rr(n,e){e=e||{};const t={};function i(c,u,f){return ne.isPlainObject(c)&&ne.isPlainObject(u)?ne.merge.call({caseless:f},c,u):ne.isPlainObject(u)?ne.merge({},u):ne.isArray(u)?u.slice():u}function r(c,u,f){if(ne.isUndefined(u)){if(!ne.isUndefined(c))return i(void 0,c,f)}else return i(c,u,f)}function s(c,u){if(!ne.isUndefined(u))return i(void 0,u)}function o(c,u){if(ne.isUndefined(u)){if(!ne.isUndefined(c))return i(void 0,c)}else return i(void 0,u)}function a(c,u,f){if(f in e)return i(c,u);if(f in n)return i(void 0,c)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u)=>r(Wf(c),Wf(u),!0)};return ne.forEach(Object.keys(Object.assign({},n,e)),function(u){const f=l[u]||r,d=f(n[u],e[u],u);ne.isUndefined(d)&&f!==a||(t[u]=d)}),t}const ip="1.6.1",hc={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{hc[n]=function(i){return typeof i===n||"a"+(e<1?"n ":" ")+n}});const Xf={};hc.transitional=function(e,t,i){function r(s,o){return"[Axios v"+ip+"] Transitional option '"+s+"'"+o+(i?". "+i:"")}return(s,o,a)=>{if(e===!1)throw new Je(r(o," has been removed"+(t?" in "+t:"")),Je.ERR_DEPRECATED);return t&&!Xf[o]&&(Xf[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(s,o,a):!0}};function yb(n,e,t){if(typeof n!="object")throw new Je("options must be an object",Je.ERR_BAD_OPTION_VALUE);const i=Object.keys(n);let r=i.length;for(;r-- >0;){const s=i[r],o=e[s];if(o){const a=n[s],l=a===void 0||o(a,s,n);if(l!==!0)throw new Je("option "+s+" must be "+l,Je.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new Je("Unknown option "+s,Je.ERR_BAD_OPTION)}}const Al={assertOptions:yb,validators:hc},ri=Al.validators;class So{constructor(e){this.defaults=e,this.interceptors={request:new zf,response:new zf}}request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=Rr(this.defaults,t);const{transitional:i,paramsSerializer:r,headers:s}=t;i!==void 0&&Al.assertOptions(i,{silentJSONParsing:ri.transitional(ri.boolean),forcedJSONParsing:ri.transitional(ri.boolean),clarifyTimeoutError:ri.transitional(ri.boolean)},!1),r!=null&&(ne.isFunction(r)?t.paramsSerializer={serialize:r}:Al.assertOptions(r,{encode:ri.function,serialize:ri.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let o=s&&ne.merge(s.common,s[t.method]);s&&ne.forEach(["delete","get","head","post","put","patch","common"],g=>{delete s[g]}),t.headers=jn.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(_){typeof _.runWhen=="function"&&_.runWhen(t)===!1||(l=l&&_.synchronous,a.unshift(_.fulfilled,_.rejected))});const c=[];this.interceptors.response.forEach(function(_){c.push(_.fulfilled,_.rejected)});let u,f=0,d;if(!l){const g=[Gf.bind(this),void 0];for(g.unshift.apply(g,a),g.push.apply(g,c),d=g.length,u=Promise.resolve(t);f<d;)u=u.then(g[f++],g[f++]);return u}d=a.length;let m=t;for(f=0;f<d;){const g=a[f++],_=a[f++];try{m=g(m)}catch(p){_.call(this,p);break}}try{u=Gf.call(this,m)}catch(g){return Promise.reject(g)}for(f=0,d=c.length;f<d;)u=u.then(c[f++],c[f++]);return u}getUri(e){e=Rr(this.defaults,e);const t=tp(e.baseURL,e.url);return $d(t,e.params,e.paramsSerializer)}}ne.forEach(["delete","get","head","options"],function(e){So.prototype[e]=function(t,i){return this.request(Rr(i||{},{method:e,url:t,data:(i||{}).data}))}});ne.forEach(["post","put","patch"],function(e){function t(i){return function(s,o,a){return this.request(Rr(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}So.prototype[e]=t(),So.prototype[e+"Form"]=t(!0)});const lo=So;class dc{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(s){t=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const o=new Promise(a=>{i.subscribe(a),s=a}).then(r);return o.cancel=function(){i.unsubscribe(s)},o},e(function(s,o,a){i.reason||(i.reason=new ps(s,o,a),t(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}static source(){let e;return{token:new dc(function(r){e=r}),cancel:e}}}const Mb=dc;function Sb(n){return function(t){return n.apply(null,t)}}function Eb(n){return ne.isObject(n)&&n.isAxiosError===!0}const wl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(wl).forEach(([n,e])=>{wl[e]=n});const bb=wl;function rp(n){const e=new lo(n),t=Bd(lo.prototype.request,e);return ne.extend(t,lo.prototype,e,{allOwnKeys:!0}),ne.extend(t,e,null,{allOwnKeys:!0}),t.create=function(r){return rp(Rr(n,r))},t}const gt=rp(fc);gt.Axios=lo;gt.CanceledError=ps;gt.CancelToken=Mb;gt.isCancel=ep;gt.VERSION=ip;gt.toFormData=Yo;gt.AxiosError=Je;gt.Cancel=gt.CanceledError;gt.all=function(e){return Promise.all(e)};gt.spread=Sb;gt.isAxiosError=Eb;gt.mergeConfig=Rr;gt.AxiosHeaders=jn;gt.formToJSON=n=>Qd(ne.isHTMLForm(n)?new FormData(n):n);gt.getAdapter=np.getAdapter;gt.HttpStatusCode=bb;gt.default=gt;const Tb=gt,Ab=/^[og]\s*(.+)?/,wb=/^mtllib /,Rb=/^usemtl /,Cb=/^usemap /,jf=/\s+/,qf=new F,ja=new F,Yf=new F,Kf=new F,nn=new F,Ys=new Ze;function Pb(){const n={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,s){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:r||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),r&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},i&&i.name&&typeof i.clone=="function"){const r=i.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){const r=this.vertices,s=this.object.geometry.vertices;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[i+0],r[i+1],r[i+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){const r=this.normals,s=this.object.geometry.normals;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[i+0],r[i+1],r[i+2])},addFaceNormal:function(e,t,i){const r=this.vertices,s=this.object.geometry.normals;qf.fromArray(r,e),ja.fromArray(r,t),Yf.fromArray(r,i),nn.subVectors(Yf,ja),Kf.subVectors(qf,ja),nn.cross(Kf),nn.normalize(),s.push(nn.x,nn.y,nn.z),s.push(nn.x,nn.y,nn.z),s.push(nn.x,nn.y,nn.z)},addColor:function(e,t,i){const r=this.colors,s=this.object.geometry.colors;r[e]!==void 0&&s.push(r[e+0],r[e+1],r[e+2]),r[t]!==void 0&&s.push(r[t+0],r[t+1],r[t+2]),r[i]!==void 0&&s.push(r[i+0],r[i+1],r[i+2])},addUV:function(e,t,i){const r=this.uvs,s=this.object.geometry.uvs;s.push(r[e+0],r[e+1]),s.push(r[t+0],r[t+1]),s.push(r[i+0],r[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,r,s,o,a,l,c){const u=this.vertices.length;let f=this.parseVertexIndex(e,u),d=this.parseVertexIndex(t,u),m=this.parseVertexIndex(i,u);if(this.addVertex(f,d,m),this.addColor(f,d,m),a!==void 0&&a!==""){const g=this.normals.length;f=this.parseNormalIndex(a,g),d=this.parseNormalIndex(l,g),m=this.parseNormalIndex(c,g),this.addNormal(f,d,m)}else this.addFaceNormal(f,d,m);if(r!==void 0&&r!==""){const g=this.uvs.length;f=this.parseUVIndex(r,g),d=this.parseUVIndex(s,g),m=this.parseUVIndex(o,g),this.addUV(f,d,m),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let i=0,r=e.length;i<r;i++){const s=this.parseVertexIndex(e[i],t);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const i=this.vertices.length,r=this.uvs.length;for(let s=0,o=e.length;s<o;s++)this.addVertexLine(this.parseVertexIndex(e[s],i));for(let s=0,o=t.length;s<o;s++)this.addUVLine(this.parseUVIndex(t[s],r))}};return n.startObject("",!1),n}class $f extends ac{constructor(e){super(e),this.materials=null}load(e,t,i,r){const s=this,o=new iE(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}setMaterials(e){return this.materials=e,this}parse(e){const t=new Pb;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let r=[];for(let a=0,l=i.length;a<l;a++){const c=i[a].trimStart();if(c.length===0)continue;const u=c.charAt(0);if(u!=="#")if(u==="v"){const f=c.split(jf);switch(f[0]){case"v":t.vertices.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3])),f.length>=7?(Ys.setRGB(parseFloat(f[4]),parseFloat(f[5]),parseFloat(f[6])).convertSRGBToLinear(),t.colors.push(Ys.r,Ys.g,Ys.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3]));break;case"vt":t.uvs.push(parseFloat(f[1]),parseFloat(f[2]));break}}else if(u==="f"){const d=c.slice(1).trim().split(jf),m=[];for(let _=0,p=d.length;_<p;_++){const h=d[_];if(h.length>0){const S=h.split("/");m.push(S)}}const g=m[0];for(let _=1,p=m.length-1;_<p;_++){const h=m[_],S=m[_+1];t.addFace(g[0],h[0],S[0],g[1],h[1],S[1],g[2],h[2],S[2])}}else if(u==="l"){const f=c.substring(1).trim().split(" ");let d=[];const m=[];if(c.indexOf("/")===-1)d=f;else for(let g=0,_=f.length;g<_;g++){const p=f[g].split("/");p[0]!==""&&d.push(p[0]),p[1]!==""&&m.push(p[1])}t.addLineGeometry(d,m)}else if(u==="p"){const d=c.slice(1).trim().split(" ");t.addPointGeometry(d)}else if((r=Ab.exec(c))!==null){const f=(" "+r[0].slice(1).trim()).slice(1);t.startObject(f)}else if(Rb.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(wb.test(c))t.materialLibraries.push(c.substring(7).trim());else if(Cb.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(r=c.split(" "),r.length>1){const d=r[1].trim().toLowerCase();t.object.smooth=d!=="0"&&d!=="off"}else t.object.smooth=!0;const f=t.object.currentMaterial();f&&(f.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();const s=new Xr;if(s.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=t.objects.length;a<l;a++){const c=t.objects[a],u=c.geometry,f=c.materials,d=u.type==="Line",m=u.type==="Points";let g=!1;if(u.vertices.length===0)continue;const _=new Mn;_.setAttribute("position",new zt(u.vertices,3)),u.normals.length>0&&_.setAttribute("normal",new zt(u.normals,3)),u.colors.length>0&&(g=!0,_.setAttribute("color",new zt(u.colors,3))),u.hasUVIndices===!0&&_.setAttribute("uv",new zt(u.uvs,2));const p=[];for(let S=0,y=f.length;S<y;S++){const E=f[S],R=E.name+"_"+E.smooth+"_"+g;let C=t.materials[R];if(this.materials!==null){if(C=this.materials.create(E.name),d&&C&&!(C instanceof so)){const A=new so;Yn.prototype.copy.call(A,C),A.color.copy(C.color),C=A}else if(m&&C&&!(C instanceof jr)){const A=new jr({size:10,sizeAttenuation:!1});Yn.prototype.copy.call(A,C),A.color.copy(C.color),A.map=C.map,C=A}}C===void 0&&(d?C=new so:m?C=new jr({size:1,sizeAttenuation:!1}):C=new QS,C.name=E.name,C.flatShading=!E.smooth,C.vertexColors=g,t.materials[R]=C),p.push(C)}let h;if(p.length>1){for(let S=0,y=f.length;S<y;S++){const E=f[S];_.addGroup(E.groupStart,E.groupCount,S)}d?h=new Rf(_,p):m?h=new Ha(_,p):h=new wn(_,p)}else d?h=new Rf(_,p[0]):m?h=new Ha(_,p[0]):h=new wn(_,p[0]);h.name=c.name,s.add(h)}else if(t.vertices.length>0){const a=new jr({size:1,sizeAttenuation:!1}),l=new Mn;l.setAttribute("position",new zt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new zt(t.colors,3)),a.vertexColors=!0);const c=new Ha(l,a);s.add(c)}return s}}const Zf={type:"change"},qa={type:"start"},Jf={type:"end"},Ks=new Vo,Qf=new oi,Lb=Math.cos(70*j0.DEG2RAD);class Db extends Gi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ji.ROTATE,MIDDLE:ji.DOLLY,RIGHT:ji.PAN},this.touches={ONE:qi.ROTATE,TWO:qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",v),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",v),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Zf),i.update(),s=r.NONE},this.update=function(){const P=new F,pe=new Hi().setFromUnitVectors(e.up,new F(0,1,0)),oe=pe.clone().invert(),we=new F,Ee=new Hi,Le=new F,Ce=2*Math.PI;return function(Ye=null){const D=i.object.position;P.copy(D).sub(i.target),P.applyQuaternion(pe),a.setFromVector3(P),i.autoRotate&&s===r.NONE&&Q(T(Ye)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ge=i.minAzimuthAngle,de=i.maxAzimuthAngle;isFinite(ge)&&isFinite(de)&&(ge<-Math.PI?ge+=Ce:ge>Math.PI&&(ge-=Ce),de<-Math.PI?de+=Ce:de>Math.PI&&(de-=Ce),ge<=de?a.theta=Math.max(ge,Math.min(de,a.theta)):a.theta=a.theta>(ge+de)/2?Math.max(ge,a.theta):Math.min(de,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&C||i.object.isOrthographicCamera?a.radius=ue(a.radius):a.radius=ue(a.radius*c),P.setFromSpherical(a),P.applyQuaternion(oe),D.copy(i.target).add(P),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let $=!1;if(i.zoomToCursor&&C){let me=null;if(i.object.isPerspectiveCamera){const Ue=P.length();me=ue(Ue*c);const Ke=Ue-me;i.object.position.addScaledVector(E,Ke),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Ue=new F(R.x,R.y,0);Ue.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),$=!0;const Ke=new F(R.x,R.y,0);Ke.unproject(i.object),i.object.position.sub(Ke).add(Ue),i.object.updateMatrixWorld(),me=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;me!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(me).add(i.object.position):(Ks.origin.copy(i.object.position),Ks.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Ks.direction))<Lb?e.lookAt(i.target):(Qf.setFromNormalAndCoplanarPoint(i.object.up,i.target),Ks.intersectPlane(Qf,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),$=!0);return c=1,C=!1,$||we.distanceToSquared(i.object.position)>o||8*(1-Ee.dot(i.object.quaternion))>o||Le.distanceToSquared(i.target)>0?(i.dispatchEvent(Zf),we.copy(i.object.position),Ee.copy(i.object.quaternion),Le.copy(i.target),$=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",J),i.domElement.removeEventListener("pointerdown",re),i.domElement.removeEventListener("pointercancel",se),i.domElement.removeEventListener("wheel",M),i.domElement.removeEventListener("pointermove",Y),i.domElement.removeEventListener("pointerup",se),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",v),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new If,l=new If;let c=1;const u=new F,f=new Ge,d=new Ge,m=new Ge,g=new Ge,_=new Ge,p=new Ge,h=new Ge,S=new Ge,y=new Ge,E=new F,R=new Ge;let C=!1;const A=[],j={};function T(P){return P!==null?2*Math.PI/60*i.autoRotateSpeed*P:2*Math.PI/60/60*i.autoRotateSpeed}function w(){return Math.pow(.95,i.zoomSpeed)}function Q(P){l.theta-=P}function ce(P){l.phi-=P}const fe=function(){const P=new F;return function(oe,we){P.setFromMatrixColumn(we,0),P.multiplyScalar(-oe),u.add(P)}}(),N=function(){const P=new F;return function(oe,we){i.screenSpacePanning===!0?P.setFromMatrixColumn(we,1):(P.setFromMatrixColumn(we,0),P.crossVectors(i.object.up,P)),P.multiplyScalar(oe),u.add(P)}}(),q=function(){const P=new F;return function(oe,we){const Ee=i.domElement;if(i.object.isPerspectiveCamera){const Le=i.object.position;P.copy(Le).sub(i.target);let Ce=P.length();Ce*=Math.tan(i.object.fov/2*Math.PI/180),fe(2*oe*Ce/Ee.clientHeight,i.object.matrix),N(2*we*Ce/Ee.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(fe(oe*(i.object.right-i.object.left)/i.object.zoom/Ee.clientWidth,i.object.matrix),N(we*(i.object.top-i.object.bottom)/i.object.zoom/Ee.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function Z(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function G(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ie(P){if(!i.zoomToCursor)return;C=!0;const pe=i.domElement.getBoundingClientRect(),oe=P.clientX-pe.left,we=P.clientY-pe.top,Ee=pe.width,Le=pe.height;R.x=oe/Ee*2-1,R.y=-(we/Le)*2+1,E.set(R.x,R.y,1).unproject(i.object).sub(i.object.position).normalize()}function ue(P){return Math.max(i.minDistance,Math.min(i.maxDistance,P))}function ae(P){f.set(P.clientX,P.clientY)}function O(P){ie(P),h.set(P.clientX,P.clientY)}function k(P){g.set(P.clientX,P.clientY)}function ye(P){d.set(P.clientX,P.clientY),m.subVectors(d,f).multiplyScalar(i.rotateSpeed);const pe=i.domElement;Q(2*Math.PI*m.x/pe.clientHeight),ce(2*Math.PI*m.y/pe.clientHeight),f.copy(d),i.update()}function Se(P){S.set(P.clientX,P.clientY),y.subVectors(S,h),y.y>0?Z(w()):y.y<0&&G(w()),h.copy(S),i.update()}function Ae(P){_.set(P.clientX,P.clientY),p.subVectors(_,g).multiplyScalar(i.panSpeed),q(p.x,p.y),g.copy(_),i.update()}function Pe(P){ie(P),P.deltaY<0?G(w()):P.deltaY>0&&Z(w()),i.update()}function He(P){let pe=!1;switch(P.code){case i.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?ce(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):q(0,i.keyPanSpeed),pe=!0;break;case i.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?ce(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):q(0,-i.keyPanSpeed),pe=!0;break;case i.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?Q(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):q(i.keyPanSpeed,0),pe=!0;break;case i.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?Q(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):q(-i.keyPanSpeed,0),pe=!0;break}pe&&(P.preventDefault(),i.update())}function Ne(){if(A.length===1)f.set(A[0].pageX,A[0].pageY);else{const P=.5*(A[0].pageX+A[1].pageX),pe=.5*(A[0].pageY+A[1].pageY);f.set(P,pe)}}function Ie(){if(A.length===1)g.set(A[0].pageX,A[0].pageY);else{const P=.5*(A[0].pageX+A[1].pageX),pe=.5*(A[0].pageY+A[1].pageY);g.set(P,pe)}}function nt(){const P=A[0].pageX-A[1].pageX,pe=A[0].pageY-A[1].pageY,oe=Math.sqrt(P*P+pe*pe);h.set(0,oe)}function ze(){i.enableZoom&&nt(),i.enablePan&&Ie()}function x(){i.enableZoom&&nt(),i.enableRotate&&Ne()}function L(P){if(A.length==1)d.set(P.pageX,P.pageY);else{const oe=ve(P),we=.5*(P.pageX+oe.x),Ee=.5*(P.pageY+oe.y);d.set(we,Ee)}m.subVectors(d,f).multiplyScalar(i.rotateSpeed);const pe=i.domElement;Q(2*Math.PI*m.x/pe.clientHeight),ce(2*Math.PI*m.y/pe.clientHeight),f.copy(d)}function I(P){if(A.length===1)_.set(P.pageX,P.pageY);else{const pe=ve(P),oe=.5*(P.pageX+pe.x),we=.5*(P.pageY+pe.y);_.set(oe,we)}p.subVectors(_,g).multiplyScalar(i.panSpeed),q(p.x,p.y),g.copy(_)}function z(P){const pe=ve(P),oe=P.pageX-pe.x,we=P.pageY-pe.y,Ee=Math.sqrt(oe*oe+we*we);S.set(0,Ee),y.set(0,Math.pow(S.y/h.y,i.zoomSpeed)),Z(y.y),h.copy(S)}function H(P){i.enableZoom&&z(P),i.enablePan&&I(P)}function le(P){i.enableZoom&&z(P),i.enableRotate&&L(P)}function re(P){i.enabled!==!1&&(A.length===0&&(i.domElement.setPointerCapture(P.pointerId),i.domElement.addEventListener("pointermove",Y),i.domElement.addEventListener("pointerup",se)),te(P),P.pointerType==="touch"?U(P):ee(P))}function Y(P){i.enabled!==!1&&(P.pointerType==="touch"?K(P):Me(P))}function se(P){_e(P),A.length===0&&(i.domElement.releasePointerCapture(P.pointerId),i.domElement.removeEventListener("pointermove",Y),i.domElement.removeEventListener("pointerup",se)),i.dispatchEvent(Jf),s=r.NONE}function ee(P){let pe;switch(P.button){case 0:pe=i.mouseButtons.LEFT;break;case 1:pe=i.mouseButtons.MIDDLE;break;case 2:pe=i.mouseButtons.RIGHT;break;default:pe=-1}switch(pe){case ji.DOLLY:if(i.enableZoom===!1)return;O(P),s=r.DOLLY;break;case ji.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enablePan===!1)return;k(P),s=r.PAN}else{if(i.enableRotate===!1)return;ae(P),s=r.ROTATE}break;case ji.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enableRotate===!1)return;ae(P),s=r.ROTATE}else{if(i.enablePan===!1)return;k(P),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(qa)}function Me(P){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;ye(P);break;case r.DOLLY:if(i.enableZoom===!1)return;Se(P);break;case r.PAN:if(i.enablePan===!1)return;Ae(P);break}}function M(P){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(P.preventDefault(),i.dispatchEvent(qa),Pe(P),i.dispatchEvent(Jf))}function v(P){i.enabled===!1||i.enablePan===!1||He(P)}function U(P){switch(he(P),A.length){case 1:switch(i.touches.ONE){case qi.ROTATE:if(i.enableRotate===!1)return;Ne(),s=r.TOUCH_ROTATE;break;case qi.PAN:if(i.enablePan===!1)return;Ie(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case qi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ze(),s=r.TOUCH_DOLLY_PAN;break;case qi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;x(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(qa)}function K(P){switch(he(P),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;L(P),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;I(P),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;H(P),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;le(P),i.update();break;default:s=r.NONE}}function J(P){i.enabled!==!1&&P.preventDefault()}function te(P){A.push(P)}function _e(P){delete j[P.pointerId];for(let pe=0;pe<A.length;pe++)if(A[pe].pointerId==P.pointerId){A.splice(pe,1);return}}function he(P){let pe=j[P.pointerId];pe===void 0&&(pe=new Ge,j[P.pointerId]=pe),pe.set(P.pageX,P.pageY)}function ve(P){const pe=P.pointerId===A[0].pointerId?A[1]:A[0];return j[pe.pointerId]}i.domElement.addEventListener("contextmenu",J),i.domElement.addEventListener("pointerdown",re),i.domElement.addEventListener("pointercancel",se),i.domElement.addEventListener("wheel",M,{passive:!1}),this.update()}}let $s,bi,ur,Ti,Ya;const Ub={name:"WorkoutView",data(){return{timeElapsed:0,timeLimit:30,timer:void 0,currentState:0,currentExercise:0,exercise:[["Cat","cat.obj"],["Headstand","headstand.obj"],["Kicking","kicking.obj"],["Lotus","lotus.obj"],["Pigeon","pigeon.obj"]],camera:null,scene:null,renderer:null,mesh:null,loader:null,loader2:null,remObj:null,done:!1,cache:"",scoreVal:0}},mounted(){this.startTimer(),this.init(this.exercise[0][1]),this.animate=this.animate.bind(this),this.animate(),this.Base64ToImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAMFBMVEX////7+/vr6+vNzc2qqqplywBWrQD/Y5T/JTf+AADmAABeeEQvNydqAAAGBAMAAAGoF14oAAAEBUlEQVR42u2WTUwUVxzA/2925LIojsyqCLtMqSQeFJeFROPHstjdNkZdkaiX9mRTovYgSYNFE43Rg5IeNG5SqyaVcGzXkvTm7hZWq9bKriAYYzSLBI3WAplp0jY2kV3fzPuYGcBxD/bmO0zevPeb//f7v0FQ5EDvwf8LFG89ixYDol9Wo+smKal2sHF6kM6q7qbE5tY03d7SHR6ygiuvwY1txkzIlPaD3NQ4Zryk/PCP1wKibBlI97dq+idXUxqgcEkVnruS/smRpuWaCbrHU5pc/wyTQsata0U77wVBTlRP9UNkT9oE61K9AHL9VERbeTVurMjNm54mqrFw8CwKmWBfpf6V2Dx/TdxN3YjMf2JwIEZ8JnjnEbEjvLAQZ1EKlxkciJ9UcdD1Z5ztDmgsgPIrMkWtMgfd41xOYXZOIjUcLB3tdchypHWIgb5k2gH0nE0zMHjRCRTLWxgY/VQrDuybcAQ/DDEwmwEn8COlSDBcTUE0GXcEjRzqoDDhDH7sfccg2szAt9hogjBFQFRmDyd9N1VTEFegXXKEVKQFJHEUd0DSKhLthIm0HSQpnNdCNizgq147GP0m7QTygNMye6NqM9ekwlG4kLI5I4cMZ+bVhMA8MwX1rw9oIjakAYX6jXlBRRJ4BF6PwmRSfQyLFhJwWy/IG8khKuirljODG0DfGAd3qCBNEol5vCqFAxqYLeUyB0H2A2Q0DspRD3BQfJEc5KBl6KprG6pNEPqqfkKzOQBsha2bQeVw6g3nSySaGYgb99ylhsLDLVYQ3E+oozOGHKzVbCBs+HkuUm6ivd4E0ZYeNTPTTrn51+0wA9TJgpZVLeaV1y+4yS8c64W0/AcFTBCHK/fFEMwFAmo4KRldE0ZxsF8cGbTuzYqHtOz8t6e8TMk5CcjNSC+kdcfgPyag9AoDhUQARmvAcIiAW3v0JzWJg64BJXdBQ21+/b4zwMqRW5dA2h3I7+onYJd+Y4i3FbyMxz4hxE7hS2MBdSq6Fgq6Bny/dxv6Sk76COj6Yz91ZG8dToQ7oYNCqu4QjX9FK5UoPt/PXO701mruhwcxGP2ecahzzxBtUtlzLHclsXtBA6wc+a2brlUc8TCvg5cPM7LiaOPT8Y4ub3bpAbqy+MQ18xRmvIe5nr83YXDt8Nca0/GveWniSHByybEVwx1dD1ccYB/6yF8DTaGcYLFA391o6DjjohaWfKXQ/xCWazmhPDhNbYf2WH4fse9zhRUkLwrXlUD+9iVD5HR77KWheclxkqsZ1bM+pqcWZ2xVe0zXjPb6pyO8IK1l5trcA7mLKuo48+VpQG0BuPmZeTbs9Vi+9oQyqv6Ieyou4FybU+HqRS4o+TH1VG7MvgFFjvfguwFfA4FobmCxcnTPAAAAAElFTkSuQmCC")},methods:{async getScore(){let n=document.getElementById("pointtag").value,e=await Tb.get("http://192.168.0.149:8000/get_score_str/"+n);this.scoreVal+=e.data.stability_score},Base64ToImage(n){var e=new Image;e.onload=function(){document.getElementById("camera").appendChild(e)},e.src=n,e.className="w-full"},startTimer(){this.timer=setInterval(()=>{++this.timeElapsed===this.timeLimit&&this.initNewValues()},1e3)},initNewValues(){if(this.currentState++,this.currentState>2&&(this.currentState=0,this.currentExercise++,bi.remove(Ya),this.currentExercise<this.exercise.length&&new $f().load("./poses/"+this.exercise[this.currentExercise][1],e=>{const t=new ki().setFromObject(e),i=new F;t.getSize(i);const s=1/Math.max(i.x,i.y,i.z);e.scale.set(s,s,s);const o=new F;t.getSize(o),e.position.set(0,0,0),e.traverse(l=>{l.isMesh&&l.material.color.set(16758465)});var a=e;bi.add(a),Ya=a})),this.currentExercise>=this.exercise.length)clearInterval(this.timer),this.done=!0;else{switch(this.currentState){case 0:this.timeLimit=30;break;case 1:this.timeLimit=10;break;case 2:this.timeLimit=120;break}this.timeElapsed=0}},init(n){let e=document.getElementById("container");$s=new sn(70,e.clientWidth/e.clientHeight,.01,10),$s.position.z=1,bi=new ZS,ur=new Od({antialias:!0,alpha:!0}),ur.setClearColor(0,0);const t=new oE(16777215,.5);t.position.set(1,1,1).normalize(),bi.add(t);let i=new aE(16777215,.5);bi.add(i),Ti=new Db($s,ur.domElement),Ti.enableDamping=!0,Ti.dampingFactor=.1,Ti.enableZoom=!0,Ti.maxDistance=2,Ti.minDistance=.3,new $f().load("poses/"+n,s=>{const o=new ki().setFromObject(s),a=new F;o.getSize(a);const c=1/Math.max(a.x,a.y,a.z);s.scale.set(c,c,c);const u=new F;o.getSize(u),s.position.set(0,0,0),s.traverse(f=>{f.isMesh&&f.material.color.set(16758465)}),Ya=s,bi.add(s)}),ur.setSize(e.clientWidth,e.clientHeight),e.appendChild(ur.domElement)},animate:function(){requestAnimationFrame(this.animate),Ti.update(),ur.render(bi,$s)}},computed:{timeLeft(){var n=Math.trunc((this.timeLimit-this.timeElapsed)/60),e=(this.timeLimit-this.timeElapsed)%60;return n+":"+(e<10?"0":"")+e},score(){return Math.trunc((this.timeLimit-this.timeElapsed)/60),(this.timeLimit-this.timeElapsed)%60,document.getElementById("pointtag")!=null&&document.getElementById("pointtag").value!=null&&document.getElementById("pointtag").value!=""&&this.cache!=document.getElementById("pointtag").value&&(this.cache=document.getElementById("pointtag").value,this.getScore()),this.scoreVal}}},sp=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Ib=Re("div",{class:"w-full",id:"camera"},null,-1),Nb=Re("input",{id:"pointtag",type:"hidden",value:""},null,-1),Ob={class:"w-full absolute bottom-14 bg-stone-100 pb-8"},Fb={class:"flex w-full px-6 mt-6"},Bb={class:"w-1/5 mx-2 flex"},zb={class:"flex mx-8"},Hb={class:"w-7/12"},kb={key:0,class:"pt-3 font-bold text-lg"},Vb={key:1,class:"pt-3 font-bold text-lg"},Gb={class:"text-6xl pt-4 pb-2 font-bold"},Wb=Re("div",{class:"w-5/12 flex pt-3"},[Re("div",{id:"container",class:"h-40 w-full"})],-1);function Xb(n,e,t,i,r,s){return ct(),_t(Gt,null,[Ib,Nb,Re("div",Ob,[Re("div",Fb,[(ct(!0),_t(Gt,null,Kh(r.exercise,(o,a)=>(ct(),_t("div",Bb,[Re("div",{class:Zt(["h-1 w-1/3",a<r.currentExercise||a==r.currentExercise&&r.currentState>=0?"bg-fuchsia-500":"bg-fuchsia-200"])},null,2),Re("div",{class:Zt(["h-1 w-1/3 mx-0.5",a<r.currentExercise||a==r.currentExercise&&r.currentState>=1?"bg-fuchsia-500":"bg-fuchsia-200"])},null,2),Re("div",{class:Zt(["h-1 w-1/3",a<r.currentExercise||a==r.currentExercise&&r.currentState>=2?"bg-fuchsia-500":"bg-fuchsia-200"])},null,2)]))),256))]),Re("div",zb,[Re("div",Hb,[r.done?(ct(),_t("div",Vb," You did it! Great job! ")):(ct(),_t("div",kb,Wt(r.exercise[r.currentExercise][0])+" - "+Wt(r.currentState==0?"Calm down":r.currentState==1?"Get into position":"Hold"),1)),Re("div",null," Current score: "+Wt(s.score),1),Re("div",Gb,Wt(s.timeLeft),1)]),Wb])])],64)}const jb=sp(Ub,[["render",Xb]]),Wi=n=>(Lm("data-v-85240c07"),n=n(),Dm(),n),qb={class:"z-50 fixed w-full bg-white"},Yb={class:"p-5 border-b flex text-center text-xl justify-center text-black"},Kb=Wi(()=>Re("div",{class:"w-3/5 text-base flex-grow flex items-center justify-center text-stone-400 uppercase"}," Competitive Yoga ",-1)),$b={key:0,class:"pt-20 pb-16"},Zb={class:"px-6 mb-9 mt-4"},Jb=Wi(()=>Re("div",{class:"px-6"},[Re("hr")],-1)),Qb={class:"mt-5"},eT=Wi(()=>Re("p",{class:"text-xl font-bold px-6 mb-4"},"Other workouts",-1)),tT={class:"overflow-y-scroll scrollbar-hide",style:{display:"ruby block"}},nT={key:1,class:"pt-16 py-24"},iT={key:2,class:"py-20"},rT={class:"px-6"},sT={key:3,class:"pt-20 py-24"},oT=Wi(()=>Re("div",{class:"px-6 mb-9 mt-4 text-xl font-bold"}," Account ",-1)),aT=[oT],lT={key:4,class:"pt-20 py-24"},cT=Wi(()=>Re("div",{class:"px-6 mb-9 mt-4 text-xl font-bold"}," Settings ",-1)),uT=[cT],fT={key:5,class:"pt-20 py-24"},hT=Wi(()=>Re("div",{class:"px-6 mb-9 mt-4 text-xl font-bold"}," Notifications ",-1)),dT=[hT],pT={class:"z-50 w-full flex fixed bottom-0 text-xl bg-black px-4 text-white rounded-tl-2xl rounded-tr-2xl py-3 justify-center items-center"},mT=Wi(()=>Re("img",{src:Jl,alt:"profile picture",class:"rounded-lg"},null,-1)),gT=[mT],_T=us({__name:"App",setup(n){const e=Ih(0);return(t,i)=>{const r=Vh("font-awesome-icon");return ct(),_t(Gt,null,[Re("header",qb,[Re("div",Yb,[Re("div",{class:Zt(["w-1/5",e.value==4?"text-fuchsia-600":""]),onClick:i[0]||(i[0]=s=>e.value=4)},[ot(r,{icon:["fas","cog"]})],2),Kb,Re("div",{class:Zt(["w-1/5",e.value==5?"text-fuchsia-600":""]),onClick:i[1]||(i[1]=s=>e.value=5)},[ot(r,{icon:["fas","bell"]})],2)])]),e.value==0?(ct(),_t("main",$b,[Re("div",Zb,[ot(d_,{headline:"Recommended workout for the day","workout-name":"Full body","workout-description":"Relax from daily stress and calm down"})]),Jb,Re("div",Qb,[eT,Re("div",tT,[ot(ca,{pos:"-1",name:"Arms",description:"Calm and cool"}),ot(ca,{name:"Back",description:"Chill and relax"}),ot(ca,{pos:"1",name:"Legs",description:"To calm down"})])])])):e.value==1?(ct(),_t("main",nT,[ot(jb)])):e.value==2?(ct(),_t("main",iT,[Re("div",rT,[ot(L_)])])):e.value==3?(ct(),_t("main",sT,aT)):e.value==4?(ct(),_t("main",lT,uT)):e.value==5?(ct(),_t("main",fT,dT)):fl("",!0),Re("footer",pT,[Re("div",{class:"w-1/4 px-5",onClick:i[2]||(i[2]=s=>e.value=0)},[Re("div",{class:Zt(["rounded-lg p-1 w-5/6 text-center",e.value==0?"bg-fuchsia-600":"bg-black"])},[ot(r,{icon:["fas","home"]})],2)]),Re("div",{class:"w-1/4 px-4",onClick:i[3]||(i[3]=s=>e.value=1)},[Re("div",{class:Zt(["rounded p-1 w-5/6 text-center",e.value==1?"bg-fuchsia-600":"bg-black"])},[ot(r,{icon:["fas","walking"]})],2)]),Re("div",{class:"w-1/4 px-4",onClick:i[4]||(i[4]=s=>e.value=2)},[Re("div",{class:Zt(["rounded p-1 w-5/6 text-center",e.value==2?"bg-fuchsia-600":"bg-black"])},[ot(r,{icon:["fas","trophy"]})],2)]),Re("div",{class:"w-1/4 px-4",onClick:i[5]||(i[5]=s=>e.value=3)},[Re("div",{class:Zt(["w-9/12 text-center border-2 rounded-lg",e.value==3?"border-fuchsia-600":"border-black"])},gT,2)])])],64)}}});const vT=sp(_T,[["__scopeId","data-v-85240c07"]]);/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */function Qr(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Qr=function(e){return typeof e}:Qr=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Qr(n)}function xT(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function eh(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function yT(n,e,t){return e&&eh(n.prototype,e),t&&eh(n,t),n}function MT(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function et(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{},i=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(t).filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),i.forEach(function(r){MT(n,r,t[r])})}return n}function op(n,e){return ST(n)||ET(n,e)||bT()}function ST(n){if(Array.isArray(n))return n}function ET(n,e){var t=[],i=!0,r=!1,s=void 0;try{for(var o=n[Symbol.iterator](),a;!(i=(a=o.next()).done)&&(t.push(a.value),!(e&&t.length===e));i=!0);}catch(l){r=!0,s=l}finally{try{!i&&o.return!=null&&o.return()}finally{if(r)throw s}}return t}function bT(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var th=function(){},pc={},ap={},TT=null,lp={mark:th,measure:th};try{typeof window<"u"&&(pc=window),typeof document<"u"&&(ap=document),typeof MutationObserver<"u"&&(TT=MutationObserver),typeof performance<"u"&&(lp=performance)}catch{}var AT=pc.navigator||{},nh=AT.userAgent,ih=nh===void 0?"":nh,$o=pc,Ht=ap,Zs=lp;$o.document;var mc=!!Ht.documentElement&&!!Ht.head&&typeof Ht.addEventListener=="function"&&typeof Ht.createElement=="function";~ih.indexOf("MSIE")||~ih.indexOf("Trident/");var Kn="___FONT_AWESOME___",cp="fa",up="svg-inline--fa",wT="data-fa-i2svg";(function(){try{return!0}catch{return!1}})();var Ka={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},fp=$o.FontAwesomeConfig||{};function RT(n){var e=Ht.querySelector("script["+n+"]");if(e)return e.getAttribute(n)}function CT(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}if(Ht&&typeof Ht.querySelector=="function"){var PT=[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];PT.forEach(function(n){var e=op(n,2),t=e[0],i=e[1],r=CT(RT(t));r!=null&&(fp[i]=r)})}var LT={familyPrefix:cp,replacementClass:up,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Rl=et({},LT,fp);Rl.autoReplaceSvg||(Rl.observeMutations=!1);var Qt=et({},Rl);$o.FontAwesomeConfig=Qt;var $n=$o||{};$n[Kn]||($n[Kn]={});$n[Kn].styles||($n[Kn].styles={});$n[Kn].hooks||($n[Kn].hooks={});$n[Kn].shims||($n[Kn].shims=[]);var Cn=$n[Kn],DT=[],UT=function n(){Ht.removeEventListener("DOMContentLoaded",n),Cl=1,DT.map(function(e){return e()})},Cl=!1;mc&&(Cl=(Ht.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ht.readyState),Cl||Ht.addEventListener("DOMContentLoaded",UT));var gc="pending",hp="settled",Eo="fulfilled",bo="rejected",IT=function(){},dp=typeof global<"u"&&typeof global.process<"u"&&typeof global.process.emit=="function",NT=typeof setImmediate>"u"?setTimeout:setImmediate,qr=[],Pl;function OT(){for(var n=0;n<qr.length;n++)qr[n][0](qr[n][1]);qr=[],Pl=!1}function To(n,e){qr.push([n,e]),Pl||(Pl=!0,NT(OT,0))}function FT(n,e){function t(r){_c(e,r)}function i(r){cs(e,r)}try{n(t,i)}catch(r){i(r)}}function pp(n){var e=n.owner,t=e._state,i=e._data,r=n[t],s=n.then;if(typeof r=="function"){t=Eo;try{i=r(i)}catch(o){cs(s,o)}}mp(s,i)||(t===Eo&&_c(s,i),t===bo&&cs(s,i))}function mp(n,e){var t;try{if(n===e)throw new TypeError("A promises callback cannot return that same promise.");if(e&&(typeof e=="function"||Qr(e)==="object")){var i=e.then;if(typeof i=="function")return i.call(e,function(r){t||(t=!0,e===r?gp(n,r):_c(n,r))},function(r){t||(t=!0,cs(n,r))}),!0}}catch(r){return t||cs(n,r),!0}return!1}function _c(n,e){(n===e||!mp(n,e))&&gp(n,e)}function gp(n,e){n._state===gc&&(n._state=hp,n._data=e,To(BT,n))}function cs(n,e){n._state===gc&&(n._state=hp,n._data=e,To(zT,n))}function _p(n){n._then=n._then.forEach(pp)}function BT(n){n._state=Eo,_p(n)}function zT(n){n._state=bo,_p(n),!n._handled&&dp&&global.process.emit("unhandledRejection",n._data,n)}function HT(n){global.process.emit("rejectionHandled",n)}function ln(n){if(typeof n!="function")throw new TypeError("Promise resolver "+n+" is not a function");if(!(this instanceof ln))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],FT(n,this)}ln.prototype={constructor:ln,_state:gc,_then:null,_data:void 0,_handled:!1,then:function(e,t){var i={owner:this,then:new this.constructor(IT),fulfilled:e,rejected:t};return(t||e)&&!this._handled&&(this._handled=!0,this._state===bo&&dp&&To(HT,this)),this._state===Eo||this._state===bo?To(pp,i):this._then.push(i),i.then},catch:function(e){return this.then(null,e)}};ln.all=function(n){if(!Array.isArray(n))throw new TypeError("You must pass an array to Promise.all().");return new ln(function(e,t){var i=[],r=0;function s(l){return r++,function(c){i[l]=c,--r||e(i)}}for(var o=0,a;o<n.length;o++)a=n[o],a&&typeof a.then=="function"?a.then(s(o),t):i[o]=a;r||e(i)})};ln.race=function(n){if(!Array.isArray(n))throw new TypeError("You must pass an array to Promise.race().");return new ln(function(e,t){for(var i=0,r;i<n.length;i++)r=n[i],r&&typeof r.then=="function"?r.then(e,t):e(r)})};ln.resolve=function(n){return n&&Qr(n)==="object"&&n.constructor===ln?n:new ln(function(e){e(n)})};ln.reject=function(n){return new ln(function(e,t){t(n)})};var pr={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function kT(n){if(!(!n||!mc)){var e=Ht.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=n;for(var t=Ht.head.childNodes,i=null,r=t.length-1;r>-1;r--){var s=t[r],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=s)}return Ht.head.insertBefore(e,i),n}}var VT="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ao(){for(var n=12,e="";n-- >0;)e+=VT[Math.random()*62|0];return e}function vp(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function GT(n){return Object.keys(n||{}).reduce(function(e,t){return e+"".concat(t,'="').concat(vp(n[t]),'" ')},"").trim()}function xp(n){return Object.keys(n||{}).reduce(function(e,t){return e+"".concat(t,": ").concat(n[t],";")},"")}function yp(n){return n.size!==pr.size||n.x!==pr.x||n.y!==pr.y||n.rotate!==pr.rotate||n.flipX||n.flipY}function Mp(n){var e=n.transform,t=n.containerWidth,i=n.iconWidth,r={transform:"translate(".concat(t/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:c}}var $a={x:0,y:0,width:"100%",height:"100%"};function rh(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||e)&&(n.attributes.fill="black"),n}function WT(n){return n.tag==="g"?n.children:[n]}function XT(n){var e=n.children,t=n.attributes,i=n.main,r=n.mask,s=n.maskId,o=n.transform,a=i.width,l=i.icon,c=r.width,u=r.icon,f=Mp({transform:o,containerWidth:c,iconWidth:a}),d={tag:"rect",attributes:et({},$a,{fill:"white"})},m=l.children?{children:l.children.map(rh)}:{},g={tag:"g",attributes:et({},f.inner),children:[rh(et({tag:l.tag,attributes:et({},l.attributes,f.path)},m))]},_={tag:"g",attributes:et({},f.outer),children:[g]},p="mask-".concat(s||Ao()),h="clip-".concat(s||Ao()),S={tag:"mask",attributes:et({},$a,{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[d,_]},y={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:WT(u)},S]};return e.push(y,{tag:"rect",attributes:et({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(p,")")},$a)}),{children:e,attributes:t}}function jT(n){var e=n.children,t=n.attributes,i=n.main,r=n.transform,s=n.styles,o=xp(s);if(o.length>0&&(t.style=o),yp(r)){var a=Mp({transform:r,containerWidth:i.width,iconWidth:i.width});e.push({tag:"g",attributes:et({},a.outer),children:[{tag:"g",attributes:et({},a.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:et({},i.icon.attributes,a.path)}]}]})}else e.push(i.icon);return{children:e,attributes:t}}function qT(n){var e=n.children,t=n.main,i=n.mask,r=n.attributes,s=n.styles,o=n.transform;if(yp(o)&&t.found&&!i.found){var a=t.width,l=t.height,c={x:a/l/2,y:.5};r.style=xp(et({},s,{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function YT(n){var e=n.prefix,t=n.iconName,i=n.children,r=n.attributes,s=n.symbol,o=s===!0?"".concat(e,"-").concat(Qt.familyPrefix,"-").concat(t):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:et({},r,{id:o}),children:i}]}]}function KT(n){var e=n.icons,t=e.main,i=e.mask,r=n.prefix,s=n.iconName,o=n.transform,a=n.symbol,l=n.title,c=n.maskId,u=n.titleId,f=n.extra,d=n.watchable,m=d===void 0?!1:d,g=i.found?i:t,_=g.width,p=g.height,h=r==="fak",S=h?"":"fa-w-".concat(Math.ceil(_/p*16)),y=[Qt.replacementClass,s?"".concat(Qt.familyPrefix,"-").concat(s):"",S].filter(function(w){return f.classes.indexOf(w)===-1}).filter(function(w){return w!==""||!!w}).concat(f.classes).join(" "),E={children:[],attributes:et({},f.attributes,{"data-prefix":r,"data-icon":s,class:y,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(p)})},R=h&&!~f.classes.indexOf("fa-fw")?{width:"".concat(_/p*16*.0625,"em")}:{};m&&(E.attributes[wT]=""),l&&E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(u||Ao())},children:[l]});var C=et({},E,{prefix:r,iconName:s,main:t,mask:i,maskId:c,transform:o,symbol:a,styles:et({},R,f.styles)}),A=i.found&&t.found?XT(C):jT(C),j=A.children,T=A.attributes;return C.children=j,C.attributes=T,a?YT(C):qT(C)}var sh=function(){};Qt.measurePerformance&&Zs&&Zs.mark&&Zs.measure;var $T=function(e,t){return function(i,r,s,o){return e.call(t,i,r,s,o)}},Za=function(e,t,i,r){var s=Object.keys(e),o=s.length,a=r!==void 0?$T(t,r):t,l,c,u;for(i===void 0?(l=1,u=e[s[0]]):(l=0,u=i);l<o;l++)c=s[l],u=a(u,e[c],c,e);return u};function Sp(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=t.skipHooks,r=i===void 0?!1:i,s=Object.keys(e).reduce(function(o,a){var l=e[a],c=!!l.icon;return c?o[l.iconName]=l.icon:o[a]=l,o},{});typeof Cn.hooks.addPack=="function"&&!r?Cn.hooks.addPack(n,s):Cn.styles[n]=et({},Cn.styles[n]||{},s),n==="fas"&&Sp("fa",e)}var oh=Cn.styles,ZT=Cn.shims,Ep=function(){var e=function(r){return Za(oh,function(s,o,a){return s[a]=Za(o,r,{}),s},{})};e(function(i,r,s){return r[3]&&(i[r[3]]=s),i}),e(function(i,r,s){var o=r[2];return i[s]=s,o.forEach(function(a){i[a]=s}),i});var t="far"in oh;Za(ZT,function(i,r){var s=r[0],o=r[1],a=r[2];return o==="far"&&!t&&(o="fas"),i[s]={prefix:o,iconName:a},i},{})};Ep();Cn.styles;function ah(n,e,t){if(n&&n[e]&&n[e][t])return{prefix:e,iconName:t,icon:n[e][t]}}function bp(n){var e=n.tag,t=n.attributes,i=t===void 0?{}:t,r=n.children,s=r===void 0?[]:r;return typeof n=="string"?vp(n):"<".concat(e," ").concat(GT(i),">").concat(s.map(bp).join(""),"</").concat(e,">")}var JT=function(e){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e?e.toLowerCase().split(" ").reduce(function(i,r){var s=r.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return i.flipX=!0,i;if(o&&a==="v")return i.flipY=!0,i;if(a=parseFloat(a),isNaN(a))return i;switch(o){case"grow":i.size=i.size+a;break;case"shrink":i.size=i.size-a;break;case"left":i.x=i.x-a;break;case"right":i.x=i.x+a;break;case"up":i.y=i.y-a;break;case"down":i.y=i.y+a;break;case"rotate":i.rotate=i.rotate+a;break}return i},t):t};function Ll(n){this.name="MissingIcon",this.message=n||"Icon unavailable",this.stack=new Error().stack}Ll.prototype=Object.create(Error.prototype);Ll.prototype.constructor=Ll;var Zo={fill:"currentColor"},Tp={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};et({},Zo,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"});var vc=et({},Tp,{attributeName:"opacity"});et({},Zo,{cx:"256",cy:"364",r:"28"}),et({},Tp,{attributeName:"r",values:"28;14;28;28;14;28;"}),et({},vc,{values:"1;0;1;1;0;1;"});et({},Zo,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),et({},vc,{values:"1;0;0;0;0;1;"});et({},Zo,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),et({},vc,{values:"0;0;1;1;0;0;"});Cn.styles;function lh(n){var e=n[0],t=n[1],i=n.slice(4),r=op(i,1),s=r[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(Qt.familyPrefix,"-").concat(Ka.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Qt.familyPrefix,"-").concat(Ka.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(Qt.familyPrefix,"-").concat(Ka.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:t,icon:o}}Cn.styles;var QT=`svg:not(:root).svg-inline--fa {
  overflow: visible;
}

.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.225em;
}
.svg-inline--fa.fa-w-1 {
  width: 0.0625em;
}
.svg-inline--fa.fa-w-2 {
  width: 0.125em;
}
.svg-inline--fa.fa-w-3 {
  width: 0.1875em;
}
.svg-inline--fa.fa-w-4 {
  width: 0.25em;
}
.svg-inline--fa.fa-w-5 {
  width: 0.3125em;
}
.svg-inline--fa.fa-w-6 {
  width: 0.375em;
}
.svg-inline--fa.fa-w-7 {
  width: 0.4375em;
}
.svg-inline--fa.fa-w-8 {
  width: 0.5em;
}
.svg-inline--fa.fa-w-9 {
  width: 0.5625em;
}
.svg-inline--fa.fa-w-10 {
  width: 0.625em;
}
.svg-inline--fa.fa-w-11 {
  width: 0.6875em;
}
.svg-inline--fa.fa-w-12 {
  width: 0.75em;
}
.svg-inline--fa.fa-w-13 {
  width: 0.8125em;
}
.svg-inline--fa.fa-w-14 {
  width: 0.875em;
}
.svg-inline--fa.fa-w-15 {
  width: 0.9375em;
}
.svg-inline--fa.fa-w-16 {
  width: 1em;
}
.svg-inline--fa.fa-w-17 {
  width: 1.0625em;
}
.svg-inline--fa.fa-w-18 {
  width: 1.125em;
}
.svg-inline--fa.fa-w-19 {
  width: 1.1875em;
}
.svg-inline--fa.fa-w-20 {
  width: 1.25em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-border {
  height: 1.5em;
}
.svg-inline--fa.fa-li {
  width: 2em;
}
.svg-inline--fa.fa-fw {
  width: 1.25em;
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: #ff253a;
  border-radius: 1em;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: #fff;
  height: 1.5em;
  line-height: 1;
  max-width: 5em;
  min-width: 1.5em;
  overflow: hidden;
  padding: 0.25em;
  right: 0;
  text-overflow: ellipsis;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: 0;
  right: 0;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: 0;
  left: 0;
  right: auto;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  right: 0;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: 0;
  right: auto;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-lg {
  font-size: 1.3333333333em;
  line-height: 0.75em;
  vertical-align: -0.0667em;
}

.fa-xs {
  font-size: 0.75em;
}

.fa-sm {
  font-size: 0.875em;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: 2.5em;
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: -2em;
  position: absolute;
  text-align: center;
  width: 2em;
  line-height: inherit;
}

.fa-border {
  border: solid 0.08em #eee;
  border-radius: 0.1em;
  padding: 0.2em 0.25em 0.15em;
}

.fa-pull-left {
  float: left;
}

.fa-pull-right {
  float: right;
}

.fa.fa-pull-left,
.fas.fa-pull-left,
.far.fa-pull-left,
.fal.fa-pull-left,
.fab.fa-pull-left {
  margin-right: 0.3em;
}
.fa.fa-pull-right,
.fas.fa-pull-right,
.far.fa-pull-right,
.fal.fa-pull-right,
.fab.fa-pull-right {
  margin-left: 0.3em;
}

.fa-spin {
  -webkit-animation: fa-spin 2s infinite linear;
          animation: fa-spin 2s infinite linear;
}

.fa-pulse {
  -webkit-animation: fa-spin 1s infinite steps(8);
          animation: fa-spin 1s infinite steps(8);
}

@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

:root .fa-rotate-90,
:root .fa-rotate-180,
:root .fa-rotate-270,
:root .fa-flip-horizontal,
:root .fa-flip-vertical,
:root .fa-flip-both {
  -webkit-filter: none;
          filter: none;
}

.fa-stack {
  display: inline-block;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: #fff;
}

.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.sr-only-focusable:active, .sr-only-focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse {
  color: #fff;
}`;function e1(){var n=cp,e=up,t=Qt.familyPrefix,i=Qt.replacementClass,r=QT;if(t!==n||i!==e){var s=new RegExp("\\.".concat(n,"\\-"),"g"),o=new RegExp("\\--".concat(n,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(t,"-")).replace(o,"--".concat(t,"-")).replace(a,".".concat(i))}return r}var t1=function(){function n(){xT(this,n),this.definitions={}}return yT(n,[{key:"add",value:function(){for(var t=this,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){t.definitions[a]=et({},t.definitions[a]||{},o[a]),Sp(a,o[a]),Ep()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(s){var o=r[s],a=o.prefix,l=o.iconName,c=o.icon;t[a]||(t[a]={}),t[a][l]=c}),t}}]),n}();function n1(){Qt.autoAddCss&&!uh&&(kT(e1()),uh=!0)}function i1(n,e){return Object.defineProperty(n,"abstract",{get:e}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(function(i){return bp(i)})}}),Object.defineProperty(n,"node",{get:function(){if(mc){var i=Ht.createElement("div");return i.innerHTML=n.html,i.children}}}),n}function ch(n){var e=n.prefix,t=e===void 0?"fa":e,i=n.iconName;if(i)return ah(Ap.definitions,t,i)||ah(Cn.styles,t,i)}function r1(n){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:ch(e||{}),r=t.mask;return r&&(r=(r||{}).icon?r:ch(r||{})),n(i,et({},t,{mask:r}))}}var Ap=new t1,uh=!1,Dl={transform:function(e){return JT(e)}},s1=r1(function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.transform,i=t===void 0?pr:t,r=e.symbol,s=r===void 0?!1:r,o=e.mask,a=o===void 0?null:o,l=e.maskId,c=l===void 0?null:l,u=e.title,f=u===void 0?null:u,d=e.titleId,m=d===void 0?null:d,g=e.classes,_=g===void 0?[]:g,p=e.attributes,h=p===void 0?{}:p,S=e.styles,y=S===void 0?{}:S;if(n){var E=n.prefix,R=n.iconName,C=n.icon;return i1(et({type:"icon"},n),function(){return n1(),Qt.autoA11y&&(f?h["aria-labelledby"]="".concat(Qt.replacementClass,"-title-").concat(m||Ao()):(h["aria-hidden"]="true",h.focusable="false")),KT({icons:{main:lh(C),mask:a?lh(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:R,transform:et({},pr,i),symbol:s,title:f,maskId:c,titleId:m,extra:{attributes:h,styles:y,classes:_}})})}});function fh(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Gn(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?fh(Object(t),!0).forEach(function(i){kt(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):fh(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function wo(n){"@babel/helpers - typeof";return wo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},wo(n)}function kt(n,e,t){return e=c1(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o1(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function a1(n,e){if(n==null)return{};var t=o1(n,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function l1(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function c1(n){var e=l1(n,"string");return typeof e=="symbol"?e:String(e)}var u1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},wp={exports:{}};(function(n){(function(e){var t=function(h,S,y){if(!c(S)||f(S)||d(S)||m(S)||l(S))return S;var E,R=0,C=0;if(u(S))for(E=[],C=S.length;R<C;R++)E.push(t(h,S[R],y));else{E={};for(var A in S)Object.prototype.hasOwnProperty.call(S,A)&&(E[h(A,y)]=t(h,S[A],y))}return E},i=function(h,S){S=S||{};var y=S.separator||"_",E=S.split||/(?=[A-Z])/;return h.split(E).join(y)},r=function(h){return g(h)?h:(h=h.replace(/[\-_\s]+(.)?/g,function(S,y){return y?y.toUpperCase():""}),h.substr(0,1).toLowerCase()+h.substr(1))},s=function(h){var S=r(h);return S.substr(0,1).toUpperCase()+S.substr(1)},o=function(h,S){return i(h,S).toLowerCase()},a=Object.prototype.toString,l=function(h){return typeof h=="function"},c=function(h){return h===Object(h)},u=function(h){return a.call(h)=="[object Array]"},f=function(h){return a.call(h)=="[object Date]"},d=function(h){return a.call(h)=="[object RegExp]"},m=function(h){return a.call(h)=="[object Boolean]"},g=function(h){return h=h-0,h===h},_=function(h,S){var y=S&&"process"in S?S.process:S;return typeof y!="function"?h:function(E,R){return y(E,h,R)}},p={camelize:r,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(h,S){return t(_(r,S),h)},decamelizeKeys:function(h,S){return t(_(o,S),h,S)},pascalizeKeys:function(h,S){return t(_(s,S),h)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};n.exports?n.exports=p:e.humps=p})(u1)})(wp);var f1=wp.exports,h1=["class","style"];function d1(n){return n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var i=t.indexOf(":"),r=f1.camelize(t.slice(0,i)),s=t.slice(i+1).trim();return e[r]=s,e},{})}function p1(n){return n.split(/\s+/).reduce(function(e,t){return e[t]=!0,e},{})}function Rp(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof n=="string")return n;var i=(n.children||[]).map(function(l){return Rp(l)}),r=Object.keys(n.attributes||{}).reduce(function(l,c){var u=n.attributes[c];switch(c){case"class":l.class=p1(u);break;case"style":l.style=d1(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});t.class;var s=t.style,o=s===void 0?{}:s,a=a1(t,h1);return Ug(n.tag,Gn(Gn(Gn({},e),{},{class:r.class,style:Gn(Gn({},r.style),o)},r.attrs),a),i)}var Cp=!1;try{Cp=!0}catch{}function m1(){if(!Cp&&console&&typeof console.error=="function"){var n;(n=console).error.apply(n,arguments)}}function Ja(n,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?kt({},n,e):{}}function g1(n){var e,t=(e={"fa-spin":n.spin,"fa-pulse":n.pulse,"fa-fw":n.fixedWidth,"fa-border":n.border,"fa-li":n.listItem,"fa-inverse":n.inverse,"fa-flip":n.flip===!0,"fa-flip-horizontal":n.flip==="horizontal"||n.flip==="both","fa-flip-vertical":n.flip==="vertical"||n.flip==="both"},kt(e,"fa-".concat(n.size),n.size!==null),kt(e,"fa-rotate-".concat(n.rotation),n.rotation!==null),kt(e,"fa-pull-".concat(n.pull),n.pull!==null),kt(e,"fa-swap-opacity",n.swapOpacity),kt(e,"fa-bounce",n.bounce),kt(e,"fa-shake",n.shake),kt(e,"fa-beat",n.beat),kt(e,"fa-fade",n.fade),kt(e,"fa-beat-fade",n.beatFade),kt(e,"fa-flash",n.flash),kt(e,"fa-spin-pulse",n.spinPulse),kt(e,"fa-spin-reverse",n.spinReverse),e);return Object.keys(t).map(function(i){return t[i]?i:null}).filter(function(i){return i})}function hh(n){if(n&&wo(n)==="object"&&n.prefix&&n.iconName&&n.icon)return n;if(Dl.icon)return Dl.icon(n);if(n===null)return null;if(wo(n)==="object"&&n.prefix&&n.iconName)return n;if(Array.isArray(n)&&n.length===2)return{prefix:n[0],iconName:n[1]};if(typeof n=="string")return{prefix:"fas",iconName:n}}var _1=us({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,t){var i=t.attrs,r=Ai(function(){return hh(e.icon)}),s=Ai(function(){return Ja("classes",g1(e))}),o=Ai(function(){return Ja("transform",typeof e.transform=="string"?Dl.transform(e.transform):e.transform)}),a=Ai(function(){return Ja("mask",hh(e.mask))}),l=Ai(function(){return s1(r.value,Gn(Gn(Gn(Gn({},s.value),o.value),a.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});Qs(l,function(u){if(!u)return m1("Could not find one or more icon(s)",r.value,a.value)},{immediate:!0});var c=Ai(function(){return l.value?Rp(l.value.abstract[0],{},i):null});return function(){return c.value}}});/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */var v1={prefix:"fas",iconName:"bell",icon:[448,512,[],"f0f3","M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"]},x1={prefix:"fas",iconName:"cog",icon:[512,512,[],"f013","M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"]},y1={prefix:"fas",iconName:"home",icon:[576,512,[],"f015","M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"]},M1={prefix:"fas",iconName:"medal",icon:[512,512,[],"f5a2","M223.75 130.75L154.62 15.54A31.997 31.997 0 0 0 127.18 0H16.03C3.08 0-4.5 14.57 2.92 25.18l111.27 158.96c29.72-27.77 67.52-46.83 109.56-53.39zM495.97 0H384.82c-11.24 0-21.66 5.9-27.44 15.54l-69.13 115.21c42.04 6.56 79.84 25.62 109.56 53.38L509.08 25.18C516.5 14.57 508.92 0 495.97 0zM256 160c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm92.52 157.26l-37.93 36.96 8.97 52.22c1.6 9.36-8.26 16.51-16.65 12.09L256 393.88l-46.9 24.65c-8.4 4.45-18.25-2.74-16.65-12.09l8.97-52.22-37.93-36.96c-6.82-6.64-3.05-18.23 6.35-19.59l52.43-7.64 23.43-47.52c2.11-4.28 6.19-6.39 10.28-6.39 4.11 0 8.22 2.14 10.33 6.39l23.43 47.52 52.43 7.64c9.4 1.36 13.17 12.95 6.35 19.59z"]},S1={prefix:"fas",iconName:"trophy",icon:[576,512,[],"f091","M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"]},E1={prefix:"fas",iconName:"user",icon:[448,512,[],"f007","M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"]},b1={prefix:"fas",iconName:"walking",icon:[320,512,[],"f554","M208 96c26.5 0 48-21.5 48-48S234.5 0 208 0s-48 21.5-48 48 21.5 48 48 48zm94.5 149.1l-23.3-11.8-9.7-29.4c-14.7-44.6-55.7-75.8-102.2-75.9-36-.1-55.9 10.1-93.3 25.2-21.6 8.7-39.3 25.2-49.7 46.2L17.6 213c-7.8 15.8-1.5 35 14.2 42.9 15.6 7.9 34.6 1.5 42.5-14.3L81 228c3.5-7 9.3-12.5 16.5-15.4l26.8-10.8-15.2 60.7c-5.2 20.8.4 42.9 14.9 58.8l59.9 65.4c7.2 7.9 12.3 17.4 14.9 27.7l18.3 73.3c4.3 17.1 21.7 27.6 38.8 23.3 17.1-4.3 27.6-21.7 23.3-38.8l-22.2-89c-2.6-10.3-7.7-19.9-14.9-27.7l-45.5-49.7 17.2-68.7 5.5 16.5c5.3 16.1 16.7 29.4 31.7 37l23.3 11.8c15.6 7.9 34.6 1.5 42.5-14.3 7.7-15.7 1.4-35.1-14.3-43zM73.6 385.8c-3.2 8.1-8 15.4-14.2 21.5l-50 50.1c-12.5 12.5-12.5 32.8 0 45.3s32.7 12.5 45.2 0l59.4-59.4c6.1-6.1 10.9-13.4 14.2-21.5l13.5-33.8c-55.3-60.3-38.7-41.8-47.4-53.7l-20.7 51.5z"]};Ap.add(y1,M1,x1,E1,v1,b1,S1);r_(vT).component("font-awesome-icon",_1).mount("#app");
