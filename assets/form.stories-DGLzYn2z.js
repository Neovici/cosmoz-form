import{r as Cs,E as q,A as st,p as Ps,D as Es,b as C,w as li,n as zn,M as Mn,u as gt,v as Rt,h as Ie}from"./iframe-dOO88Une.js";import{_ as Fn}from"./preload-helper-PPVm8Dsz.js";function Dn(e){return()=>e}const In=Dn(),jn=In,ue=e=>e,U=(e,...t)=>typeof e=="function"?e(...t):e,Vn=e=>typeof e=="object"&&e!==null&&Symbol.iterator in e;function ut(e){return e==null?[]:Array.isArray(e)?e:typeof e=="string"?[e]:Vn(e)?Array.from(e):[e]}const je=(e,t=ue)=>i=>{const s=ut(e).map(t);return ut(i).filter(n=>!s.includes(t(n)))};function Os(e){return e?t=>t?.[e]:ue}const Bn=e=>{const t=Os(e);return i=>typeof i=="string"?i:t(i)?.toString()||""},Hn=e=>t=>{const i={};for(const s in t)e.includes(s)&&(i[s]=t[s]);return i};function xi(e,t,...i){return e?e(t,...i):t}window.JSCompiler_renameProperty=function(e,t){return e};let Un=/(url\()([^)]*)(\))/g,Kn=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,te,K;function Dt(e,t){if(e&&Kn.test(e)||e==="//")return e;if(te===void 0){te=!1;try{const i=new URL("b","http://a");i.pathname="c%20d",te=i.href==="http://a/c%20d"}catch{}}if(t||(t=document.baseURI||window.location.href),te)try{return new URL(e,t).href}catch{return e}return K||(K=document.implementation.createHTMLDocument("temp"),K.base=K.createElement("base"),K.head.appendChild(K.base),K.anchor=K.createElement("a"),K.body.appendChild(K.anchor)),K.base.href=t,K.anchor.href=e,K.anchor.href||e}function ci(e,t){return e.replace(Un,function(i,s,n,r){return s+"'"+Dt(n.replace(/["']/g,""),t)+"'"+r})}function ui(e){return e.substring(0,e.lastIndexOf("/")+1)}const Wn=!window.ShadyDOM||!window.ShadyDOM.inUse;!window.ShadyCSS||window.ShadyCSS.nativeCss;const Yn=Wn&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const e=new CSSStyleSheet;e.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch{return!1}})();let Jn=window.Polymer&&window.Polymer.rootPath||ui(document.baseURI||window.location.href),de=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures;let qe=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,qn=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,Gn=window.Polymer&&window.Polymer.legacyOptimizations||!1,Xn=window.Polymer&&window.Polymer.legacyWarnings||!1,Qn=window.Polymer&&window.Polymer.syncInitialRender||!1,Ge=window.Polymer&&window.Polymer.legacyUndefined||!1,Zn=window.Polymer&&window.Polymer.orderedComputed||!1,Si=window.Polymer&&window.Polymer.removeNestedTemplates||!1,tr=window.Polymer&&window.Polymer.fastDomIf||!1;window.Polymer&&window.Polymer.suppressTemplateNotifications;window.Polymer&&window.Polymer.legacyNoObservedAttributes;let er=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;let ir=0;const xt=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let i=ir++;function s(n){let r=n.__mixinSet;if(r&&r[i])return n;let o=t,a=o.get(n);if(!a){a=e(n),o.set(n,a);let l=Object.create(a.__mixinSet||r||null);l[i]=!0,a.__mixinSet=l}return a}return s};let di={},$s={};function Ci(e,t){di[e]=$s[e.toLowerCase()]=t}function Pi(e){return di[e]||$s[e.toLowerCase()]}function sr(e){e.querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}class Bt extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,i){if(t){let s=Pi(t);return s&&i?s.querySelector(i):s}return null}attributeChangedCallback(t,i,s,n){i!==s&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,i=Dt(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=ui(i)}return this.__assetpath}register(t){if(t=t||this.id,t){if(qe&&Pi(t)!==void 0)throw Ci(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,Ci(t,this),sr(this)}}}Bt.prototype.modules=di;customElements.define("dom-module",Bt);const nr="link[rel=import][type~=css]",rr="include",Ei="shady-unscoped";function Ls(e){return Bt.import(e)}function Oi(e){let t=e.body?e.body:e;const i=ci(t.textContent,e.baseURI),s=document.createElement("style");return s.textContent=i,s}function or(e){const t=e.trim().split(/\s+/),i=[];for(let s=0;s<t.length;s++)i.push(...ar(t[s]));return i}function ar(e){const t=Ls(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(t._styles===void 0){const i=[];i.push(...As(t));const s=t.querySelector("template");s&&i.push(...Ts(s,t.assetpath)),t._styles=i}return t._styles}function Ts(e,t){if(!e._styles){const i=[],s=e.content.querySelectorAll("style");for(let n=0;n<s.length;n++){let r=s[n],o=r.getAttribute(rr);o&&i.push(...or(o).filter(function(a,l,c){return c.indexOf(a)===l})),t&&(r.textContent=ci(r.textContent,t)),i.push(r)}e._styles=i}return e._styles}function lr(e){let t=Ls(e);return t?As(t):[]}function As(e){const t=[],i=e.querySelectorAll(nr);for(let s=0;s<i.length;s++){let n=i[s];if(n.import){const r=n.import,o=n.hasAttribute(Ei);if(o&&!r._unscopedStyle){const a=Oi(r);a.setAttribute(Ei,""),r._unscopedStyle=a}else r._style||(r._style=Oi(r));t.push(o?r._unscopedStyle:r._style)}}return t}const mt=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e;function Xe(e){return e.indexOf(".")>=0}function St(e){let t=e.indexOf(".");return t===-1?e:e.slice(0,t)}function cr(e,t){return e.indexOf(t+".")===0}function he(e,t){return t.indexOf(e+".")===0}function fe(e,t,i){return t+i.slice(e.length)}function Mt(e){if(Array.isArray(e)){let t=[];for(let i=0;i<e.length;i++){let s=e[i].toString().split(".");for(let n=0;n<s.length;n++)t.push(s[n])}return t.join(".")}else return e}function Rs(e){return Array.isArray(e)?Mt(e).split("."):e.toString().split(".")}function H(e,t,i){let s=e,n=Rs(t);for(let r=0;r<n.length;r++){if(!s)return;let o=n[r];s=s[o]}return i&&(i.path=n.join(".")),s}function $i(e,t,i){let s=e,n=Rs(t),r=n[n.length-1];if(n.length>1){for(let o=0;o<n.length-1;o++){let a=n[o];if(s=s[a],!s)return}s[r]=i}else s[t]=i;return n.join(".")}const pe={},ur=/-[a-z]/g,dr=/([A-Z])/g;function ks(e){return pe[e]||(pe[e]=e.indexOf("-")<0?e:e.replace(ur,t=>t[1].toUpperCase()))}function Pe(e){return pe[e]||(pe[e]=e.replace(dr,"-$1").toLowerCase())}let hr=0,Ns=0,Ot=[],fr=0,Qe=!1,zs=document.createTextNode("");new window.MutationObserver(pr).observe(zs,{characterData:!0});function pr(){Qe=!1;const e=Ot.length;for(let t=0;t<e;t++){let i=Ot[t];if(i)try{i()}catch(s){setTimeout(()=>{throw s})}}Ot.splice(0,e),Ns+=e}const gr={run(e){return Qe||(Qe=!0,zs.textContent=fr++),Ot.push(e),hr++},cancel(e){const t=e-Ns;if(t>=0){if(!Ot[t])throw new Error("invalid async handle: "+e);Ot[t]=null}}};const mr=gr,Ms=xt(e=>{class t extends e{static createProperties(s){const n=this.prototype;for(let r in s)r in n||n._createPropertyAccessor(r)}static attributeNameForProperty(s){return s.toLowerCase()}static typeForProperty(s){}_createPropertyAccessor(s,n){this._addPropertyToAttributeMap(s),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[s]||(this.__dataHasAccessor[s]=!0,this._definePropertyAccessor(s,n))}_addPropertyToAttributeMap(s){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let n=this.__dataAttributes[s];return n||(n=this.constructor.attributeNameForProperty(s),this.__dataAttributes[n]=s),n}_definePropertyAccessor(s,n){Object.defineProperty(this,s,{get(){return this.__data[s]},set:n?function(){}:function(r){this._setPendingProperty(s,r,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let s in this.__dataHasAccessor)this.hasOwnProperty(s)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[s]=this[s],delete this[s])}_initializeInstanceProperties(s){Object.assign(this,s)}_setProperty(s,n){this._setPendingProperty(s,n)&&this._invalidateProperties()}_getProperty(s){return this.__data[s]}_setPendingProperty(s,n,r){let o=this.__data[s],a=this._shouldPropertyChange(s,n,o);return a&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(s in this.__dataOld)&&(this.__dataOld[s]=o),this.__data[s]=n,this.__dataPending[s]=n),a}_isPropertyPending(s){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(s))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,mr.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const s=this.__data,n=this.__dataPending,r=this.__dataOld;this._shouldPropertiesChange(s,n,r)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(s,n,r)),this.__dataCounter--}_shouldPropertiesChange(s,n,r){return!!n}_propertiesChanged(s,n,r){}_shouldPropertyChange(s,n,r){return r!==n&&(r===r||n===n)}attributeChangedCallback(s,n,r,o){n!==r&&this._attributeToProperty(s,r),super.attributeChangedCallback&&super.attributeChangedCallback(s,n,r,o)}_attributeToProperty(s,n,r){if(!this.__serializing){const o=this.__dataAttributes,a=o&&o[s]||s;this[a]=this._deserializeValue(n,r||this.constructor.typeForProperty(a))}}_propertyToAttribute(s,n,r){this.__serializing=!0,r=arguments.length<3?this[s]:r,this._valueToNodeAttribute(this,r,n||this.constructor.attributeNameForProperty(s)),this.__serializing=!1}_valueToNodeAttribute(s,n,r){const o=this._serializeValue(n);(r==="class"||r==="name"||r==="slot")&&(s=mt(s)),o===void 0?s.removeAttribute(r):s.setAttribute(r,o===""&&window.trustedTypes?window.trustedTypes.emptyScript:o)}_serializeValue(s){return typeof s==="boolean"?s?"":void 0:s?.toString()}_deserializeValue(s,n){switch(n){case Boolean:return s!==null;case Number:return Number(s);default:return s}}}return t});const Fs={};let ee=HTMLElement.prototype;for(;ee;){let e=Object.getOwnPropertyNames(ee);for(let t=0;t<e.length;t++)Fs[e[t]]=!0;ee=Object.getPrototypeOf(ee)}const _r=window.trustedTypes?e=>trustedTypes.isHTML(e)||trustedTypes.isScript(e)||trustedTypes.isScriptURL(e):()=>!1;function yr(e,t){if(!Fs[t]){let i=e[t];i!==void 0&&(e.__data?e._setPendingProperty(t,i):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=i))}}const br=xt(e=>{const t=Ms(e);class i extends t{static createPropertiesForAttributes(){let n=this.observedAttributes;for(let r=0;r<n.length;r++)this.prototype._createPropertyAccessor(ks(n[r]))}static attributeNameForProperty(n){return Pe(n)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(n){for(let r in n)this._setProperty(r,n[r])}_ensureAttribute(n,r){const o=this;o.hasAttribute(n)||this._valueToNodeAttribute(o,r,n)}_serializeValue(n){switch(typeof n){case"object":if(n instanceof Date)return n.toString();if(n){if(_r(n))return n;try{return JSON.stringify(n)}catch{return""}}default:return super._serializeValue(n)}}_deserializeValue(n,r){let o;switch(r){case Object:try{o=JSON.parse(n)}catch{o=n}break;case Array:try{o=JSON.parse(n)}catch{o=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${n}`)}break;case Date:o=isNaN(n)?String(n):Number(n),o=new Date(o);break;default:o=super._deserializeValue(n,r);break}return o}_definePropertyAccessor(n,r){yr(this,n),super._definePropertyAccessor(n,r)}_hasAccessor(n){return this.__dataHasAccessor&&this.__dataHasAccessor[n]}_isPropertyPending(n){return!!(this.__dataPending&&n in this.__dataPending)}}return i});const vr={"dom-if":!0,"dom-repeat":!0};let Li=!1,Ti=!1;function wr(){if(!Li){Li=!0;const e=document.createElement("textarea");e.placeholder="a",Ti=e.placeholder===e.textContent}return Ti}function xr(e){wr()&&e.localName==="textarea"&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}const Sr=(()=>{const e=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:t=>t});return(t,i,s)=>{const n=i.getAttribute(s);if(e&&s.startsWith("on-")){t.setAttribute(s,e.createScript(n,s));return}t.setAttribute(s,n)}})();function Cr(e){let t=e.getAttribute("is");if(t&&vr[t]){let i=e;for(i.removeAttribute("is"),e=i.ownerDocument.createElement(t),i.parentNode.replaceChild(e,i),e.appendChild(i);i.attributes.length;){const{name:s}=i.attributes[0];Sr(e,i,s),i.removeAttribute(s)}}return e}function Ds(e,t){let i=t.parentInfo&&Ds(e,t.parentInfo);if(i){for(let s=i.firstChild,n=0;s;s=s.nextSibling)if(t.parentIndex===n++)return s}else return e}function Pr(e,t,i,s){s.id&&(t[s.id]=i)}function Er(e,t,i){if(i.events&&i.events.length)for(let s=0,n=i.events,r;s<n.length&&(r=n[s]);s++)e._addMethodEventListenerToNode(t,r.name,r.value,e)}function Or(e,t,i,s){i.templateInfo&&(t._templateInfo=i.templateInfo,t._parentTemplateInfo=s)}function $r(e,t,i){return e=e._methodHost||e,function(n){e[i]?e[i](n,n.detail):console.warn("listener method `"+i+"` not defined")}}const Lr=xt(e=>{class t extends e{static _parseTemplate(s,n){if(!s._templateInfo){let r=s._templateInfo={};r.nodeInfoList=[],r.nestedTemplate=!!n,r.stripWhiteSpace=n&&n.stripWhiteSpace||s.hasAttribute&&s.hasAttribute("strip-whitespace"),this._parseTemplateContent(s,r,{parent:null})}return s._templateInfo}static _parseTemplateContent(s,n,r){return this._parseTemplateNode(s.content,n,r)}static _parseTemplateNode(s,n,r){let o=!1,a=s;return a.localName=="template"&&!a.hasAttribute("preserve-content")?o=this._parseTemplateNestedTemplate(a,n,r)||o:a.localName==="slot"&&(n.hasInsertionPoint=!0),xr(a),a.firstChild&&this._parseTemplateChildNodes(a,n,r),a.hasAttributes&&a.hasAttributes()&&(o=this._parseTemplateNodeAttributes(a,n,r)||o),o||r.noted}static _parseTemplateChildNodes(s,n,r){if(!(s.localName==="script"||s.localName==="style"))for(let o=s.firstChild,a=0,l;o;o=l){if(o.localName=="template"&&(o=Cr(o)),l=o.nextSibling,o.nodeType===Node.TEXT_NODE){let u=l;for(;u&&u.nodeType===Node.TEXT_NODE;)o.textContent+=u.textContent,l=u.nextSibling,s.removeChild(u),u=l;if(n.stripWhiteSpace&&!o.textContent.trim()){s.removeChild(o);continue}}let c={parentIndex:a,parentInfo:r};this._parseTemplateNode(o,n,c)&&(c.infoIndex=n.nodeInfoList.push(c)-1),o.parentNode&&a++}}static _parseTemplateNestedTemplate(s,n,r){let o=s,a=this._parseTemplate(o,n);return(a.content=o.content.ownerDocument.createDocumentFragment()).appendChild(o.content),r.templateInfo=a,!0}static _parseTemplateNodeAttributes(s,n,r){let o=!1,a=Array.from(s.attributes);for(let l=a.length-1,c;c=a[l];l--)o=this._parseTemplateNodeAttribute(s,n,r,c.name,c.value)||o;return o}static _parseTemplateNodeAttribute(s,n,r,o,a){return o.slice(0,3)==="on-"?(s.removeAttribute(o),r.events=r.events||[],r.events.push({name:o.slice(3),value:a}),!0):o==="id"?(r.id=a,!0):!1}static _contentForTemplate(s){let n=s._templateInfo;return n&&n.content||s.content}_stampTemplate(s,n){s&&!s.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(s),n=n||this.constructor._parseTemplate(s);let r=n.nodeInfoList,o=n.content||s.content,a=document.importNode(o,!0);a.__noInsertionPoint=!n.hasInsertionPoint;let l=a.nodeList=new Array(r.length);a.$={};for(let c=0,u=r.length,d;c<u&&(d=r[c]);c++){let h=l[c]=Ds(a,d);Pr(this,a.$,h,d),Or(this,h,d,n),Er(this,h,d)}return a=a,a}_addMethodEventListenerToNode(s,n,r,o){o=o||s;let a=$r(o,n,r);return this._addEventListenerToNode(s,n,a),a}_addEventListenerToNode(s,n,r){s.addEventListener(n,r)}_removeEventListenerFromNode(s,n,r){s.removeEventListener(n,r)}}return t});let Ht=0;const Ut=[],P={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Is="__computeInfo",Tr=/[A-Z]/;function Ve(e,t,i){let s=e[t];if(!s)s=e[t]={};else if(!e.hasOwnProperty(t)&&(s=e[t]=Object.create(e[t]),i))for(let n in s){let r=s[n],o=s[n]=Array(r.length);for(let a=0;a<r.length;a++)o[a]=r[a]}return s}function Ft(e,t,i,s,n,r){if(t){let o=!1;const a=Ht++;for(let l in i){let c=n?St(l):l,u=t[c];if(u)for(let d=0,h=u.length,f;d<h&&(f=u[d]);d++)(!f.info||f.info.lastRun!==a)&&(!n||hi(l,f.trigger))&&(f.info&&(f.info.lastRun=a),f.fn(e,l,i,s,f.info,n,r),o=!0)}return o}return!1}function Ar(e,t,i,s,n,r,o,a){let l=!1,c=o?St(s):s,u=t[c];if(u)for(let d=0,h=u.length,f;d<h&&(f=u[d]);d++)(!f.info||f.info.lastRun!==i)&&(!o||hi(s,f.trigger))&&(f.info&&(f.info.lastRun=i),f.fn(e,s,n,r,f.info,o,a),l=!0);return l}function hi(e,t){if(t){let i=t.name;return i==e||!!(t.structured&&cr(i,e))||!!(t.wildcard&&he(i,e))}else return!0}function Ai(e,t,i,s,n){let r=typeof n.method=="string"?e[n.method]:n.method,o=n.property;r?r.call(e,e.__data[o],s[o]):n.dynamicFn||console.warn("observer method `"+n.method+"` not defined")}function Rr(e,t,i,s,n){let r=e[P.NOTIFY],o,a=Ht++;for(let c in t)t[c]&&(r&&Ar(e,r,a,c,i,s,n)||n&&kr(e,c,i))&&(o=!0);let l;o&&(l=e.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function kr(e,t,i){let s=St(t);if(s!==t){let n=Pe(s)+"-changed";return js(e,n,i[t],t),!0}return!1}function js(e,t,i,s){let n={value:i,queueProperty:!0};s&&(n.path=s),mt(e).dispatchEvent(new CustomEvent(t,{detail:n}))}function Nr(e,t,i,s,n,r){let a=(r?St(t):t)!=t?t:null,l=a?H(e,a):e.__data[t];a&&l===void 0&&(l=i[t]),js(e,n.eventName,l,a)}function zr(e,t,i,s,n){let r,o=e.detail,a=o&&o.path;a?(s=fe(i,s,a),r=o&&o.value):r=e.currentTarget[i],r=n?!r:r,(!t[P.READ_ONLY]||!t[P.READ_ONLY][s])&&t._setPendingPropertyOrPath(s,r,!0,!!a)&&(!o||!o.queueProperty)&&t._invalidateProperties()}function Mr(e,t,i,s,n){let r=e.__data[t];de&&(r=de(r,n.attrName,"attribute",e)),e._propertyToAttribute(t,n.attrName,r)}function Fr(e,t,i,s){let n=e[P.COMPUTE];if(n)if(Zn){Ht++;const r=Ir(e),o=[];for(let l in t)Ri(l,n,o,r,s);let a;for(;a=o.shift();)Vs(e,"",t,i,a)&&Ri(a.methodInfo,n,o,r,s);Object.assign(i,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let r=t;for(;Ft(e,n,r,i,s);)Object.assign(i,e.__dataOld),Object.assign(t,e.__dataPending),r=e.__dataPending,e.__dataPending=null}}const Dr=(e,t,i)=>{let s=0,n=t.length-1,r=-1;for(;s<=n;){const o=s+n>>1,a=i.get(t[o].methodInfo)-i.get(e.methodInfo);if(a<0)s=o+1;else if(a>0)n=o-1;else{r=o;break}}r<0&&(r=n+1),t.splice(r,0,e)},Ri=(e,t,i,s,n)=>{const r=n?St(e):e,o=t[r];if(o)for(let a=0;a<o.length;a++){const l=o[a];l.info.lastRun!==Ht&&(!n||hi(e,l.trigger))&&(l.info.lastRun=Ht,Dr(l.info,i,s))}};function Ir(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;const i=e[P.COMPUTE];let{counts:s,ready:n,total:r}=jr(e),o;for(;o=n.shift();){t.set(o,t.size);const a=i[o];a&&a.forEach(l=>{const c=l.info.methodInfo;--r,--s[c]===0&&n.push(c)})}r!==0&&console.warn(`Computed graph for ${e.localName} incomplete; circular?`),e.constructor.__orderedComputedDeps=t}return t}function jr(e){const t=e[Is],i={},s=e[P.COMPUTE],n=[];let r=0;for(let o in t){const a=t[o];r+=i[o]=a.args.filter(l=>!l.literal).length+(a.dynamicFn?1:0)}for(let o in s)t[o]||n.push(o);return{counts:i,ready:n,total:r}}function Vs(e,t,i,s,n){let r=Ze(e,t,i,s,n);if(r===Ut)return!1;let o=n.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[o]?e._setPendingProperty(o,r,!0):(e[o]=r,!1)}function Vr(e,t,i){let s=e.__dataLinkedPaths;if(s){let n;for(let r in s){let o=s[r];he(r,t)?(n=fe(r,o,t),e._setPendingPropertyOrPath(n,i,!0,!0)):he(o,t)&&(n=fe(o,r,t),e._setPendingPropertyOrPath(n,i,!0,!0))}}}function Be(e,t,i,s,n,r,o){i.bindings=i.bindings||[];let a={kind:s,target:n,parts:r,literal:o,isCompound:r.length!==1};if(i.bindings.push(a),Wr(a)){let{event:c,negate:u}=a.parts[0];a.listenerEvent=c||Pe(n)+"-changed",a.listenerNegate=u}let l=t.nodeInfoList.length;for(let c=0;c<a.parts.length;c++){let u=a.parts[c];u.compoundIndex=c,Br(e,t,a,u,l)}}function Br(e,t,i,s,n){if(!s.literal)if(i.kind==="attribute"&&i.target[0]==="-")console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else{let r=s.dependencies,o={index:n,binding:i,part:s,evaluator:e};for(let a=0;a<r.length;a++){let l=r[a];typeof l=="string"&&(l=Hs(l),l.wildcard=!0),e._addTemplatePropertyEffect(t,l.rootProperty,{fn:Hr,info:o,trigger:l})}}}function Hr(e,t,i,s,n,r,o){let a=o[n.index],l=n.binding,c=n.part;if(r&&c.source&&t.length>c.source.length&&l.kind=="property"&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let u=i[t];t=fe(c.source,l.target,t),a._setPendingPropertyOrPath(t,u,!1,!0)&&e._enqueueClient(a)}else{let u=n.evaluator._evaluateBinding(e,c,t,i,s,r);u!==Ut&&Ur(e,a,l,c,u)}}function Ur(e,t,i,s,n){if(n=Kr(t,n,i,s),de&&(n=de(n,i.target,i.kind,t)),i.kind=="attribute")e._valueToNodeAttribute(t,n,i.target);else{let r=i.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[r]?(!t[P.READ_ONLY]||!t[P.READ_ONLY][r])&&t._setPendingProperty(r,n)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,r,n)}}function Kr(e,t,i,s){if(i.isCompound){let n=e.__dataCompoundStorage[i.target];n[s.compoundIndex]=t,t=n.join("")}return i.kind!=="attribute"&&(i.target==="textContent"||i.target==="value"&&(e.localName==="input"||e.localName==="textarea"))&&(t=t??""),t}function Wr(e){return!!e.target&&e.kind!="attribute"&&e.kind!="text"&&!e.isCompound&&e.parts[0].mode==="{"}function Yr(e,t){let{nodeList:i,nodeInfoList:s}=t;if(s.length)for(let n=0;n<s.length;n++){let r=s[n],o=i[n],a=r.bindings;if(a)for(let l=0;l<a.length;l++){let c=a[l];Jr(o,c),qr(o,e,c)}o.__dataHost=e}}function Jr(e,t){if(t.isCompound){let i=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),s=t.parts,n=new Array(s.length);for(let o=0;o<s.length;o++)n[o]=s[o].literal;let r=t.target;i[r]=n,t.literal&&t.kind=="property"&&(r==="className"&&(e=mt(e)),e[r]=t.literal)}}function qr(e,t,i){if(i.listenerEvent){let s=i.parts[0];e.addEventListener(i.listenerEvent,function(n){zr(n,t,i.target,s.source,s.negate)})}}function ki(e,t,i,s,n,r){r=t.static||r&&(typeof r!="object"||r[t.methodName]);let o={methodName:t.methodName,args:t.args,methodInfo:n,dynamicFn:r};for(let a=0,l;a<t.args.length&&(l=t.args[a]);a++)l.literal||e._addPropertyEffect(l.rootProperty,i,{fn:s,info:o,trigger:l});return r&&e._addPropertyEffect(t.methodName,i,{fn:s,info:o}),o}function Ze(e,t,i,s,n){let r=e._methodHost||e,o=r[n.methodName];if(o){let a=e._marshalArgs(n.args,t,i);return a===Ut?Ut:o.apply(r,a)}else n.dynamicFn||console.warn("method `"+n.methodName+"` not defined")}const Gr=[],Bs="(?:[a-zA-Z_$][\\w.:$\\-*]*)",Xr="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",Qr="(?:'(?:[^'\\\\]|\\\\.)*')",Zr='(?:"(?:[^"\\\\]|\\\\.)*")',to="(?:"+Qr+"|"+Zr+")",Ni="(?:("+Bs+"|"+Xr+"|"+to+")\\s*)",eo="(?:"+Ni+"(?:,\\s*"+Ni+")*)",io="(?:\\(\\s*(?:"+eo+"?)\\)\\s*)",so="("+Bs+"\\s*"+io+"?)",no="(\\[\\[|{{)\\s*",ro="(?:]]|}})",oo="(?:(!)\\s*)?",ao=no+oo+so+ro,zi=new RegExp(ao,"g");function Mi(e){let t="";for(let i=0;i<e.length;i++){let s=e[i].literal;t+=s||""}return t}function He(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let s={methodName:t[1],static:!0,args:Gr};if(t[2].trim()){let n=t[2].replace(/\\,/g,"&comma;").split(",");return lo(n,s)}else return s}return null}function lo(e,t){return t.args=e.map(function(i){let s=Hs(i);return s.literal||(t.static=!1),s},this),t}function Hs(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:t,value:"",literal:!1},s=t[0];switch(s==="-"&&(s=t[1]),s>="0"&&s<="9"&&(s="#"),s){case"'":case'"':i.value=t.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(t),i.literal=!0;break}return i.literal||(i.rootProperty=St(t),i.structured=Xe(t),i.structured&&(i.wildcard=t.slice(-2)==".*",i.wildcard&&(i.name=t.slice(0,-2)))),i}function Fi(e,t,i){let s=H(e,i);return s===void 0&&(s=t[i]),s}function Us(e,t,i,s){const n={indexSplices:s};Ge&&!e._overrideLegacyUndefined&&(t.splices=n),e.notifyPath(i+".splices",n),e.notifyPath(i+".length",t.length),Ge&&!e._overrideLegacyUndefined&&(n.indexSplices=[])}function kt(e,t,i,s,n,r){Us(e,t,i,[{index:s,addedCount:n,removed:r,object:t,type:"splice"}])}function co(e){return e[0].toUpperCase()+e.substring(1)}const uo=xt(e=>{const t=Lr(br(e));class i extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return P}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(Nt.length){let n=Nt[Nt.length-1];n._enqueueClient(this),this.__dataHost=n}}_initializeProtoProperties(n){this.__data=Object.create(n),this.__dataPending=Object.create(n),this.__dataOld={}}_initializeInstanceProperties(n){let r=this[P.READ_ONLY];for(let o in n)(!r||!r[o])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[o]=this.__dataPending[o]=n[o])}_addPropertyEffect(n,r,o){this._createPropertyAccessor(n,r==P.READ_ONLY);let a=Ve(this,r,!0)[n];a||(a=this[r][n]=[]),a.push(o)}_removePropertyEffect(n,r,o){let a=Ve(this,r,!0)[n],l=a.indexOf(o);l>=0&&a.splice(l,1)}_hasPropertyEffect(n,r){let o=this[r];return!!(o&&o[n])}_hasReadOnlyEffect(n){return this._hasPropertyEffect(n,P.READ_ONLY)}_hasNotifyEffect(n){return this._hasPropertyEffect(n,P.NOTIFY)}_hasReflectEffect(n){return this._hasPropertyEffect(n,P.REFLECT)}_hasComputedEffect(n){return this._hasPropertyEffect(n,P.COMPUTE)}_setPendingPropertyOrPath(n,r,o,a){if(a||St(Array.isArray(n)?n[0]:n)!==n){if(!a){let l=H(this,n);if(n=$i(this,n,r),!n||!super._shouldPropertyChange(n,r,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(n,r,o))return Vr(this,n,r),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[n])return this._setPendingProperty(n,r,o);this[n]=r}return!1}_setUnmanagedPropertyToNode(n,r,o){(o!==n[r]||typeof o=="object")&&(r==="className"&&(n=mt(n)),n[r]=o)}_setPendingProperty(n,r,o){let a=this.__dataHasPaths&&Xe(n),l=a?this.__dataTemp:this.__data;return this._shouldPropertyChange(n,r,l[n])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),n in this.__dataOld||(this.__dataOld[n]=this.__data[n]),a?this.__dataTemp[n]=r:this.__data[n]=r,this.__dataPending[n]=r,(a||this[P.NOTIFY]&&this[P.NOTIFY][n])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[n]=o),!0):!1}_setProperty(n,r){this._setPendingProperty(n,r,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(n){this.__dataPendingClients=this.__dataPendingClients||[],n!==this&&this.__dataPendingClients.push(n)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let n=this.__dataPendingClients;if(n){this.__dataPendingClients=null;for(let r=0;r<n.length;r++){let o=n[r];o.__dataEnabled?o.__dataPending&&o._flushProperties():o._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(n,r){for(let o in n)(r||!this[P.READ_ONLY]||!this[P.READ_ONLY][o])&&this._setPendingPropertyOrPath(o,n[o],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(n,r,o){let a=this.__dataHasPaths;this.__dataHasPaths=!1;let l;Fr(this,r,o,a),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(r,o,a),this._flushClients(),Ft(this,this[P.REFLECT],r,o,a),Ft(this,this[P.OBSERVE],r,o,a),l&&Rr(this,l,r,o,a),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(n,r,o){this[P.PROPAGATE]&&Ft(this,this[P.PROPAGATE],n,r,o),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,n,r,o)}_runEffectsForTemplate(n,r,o,a){const l=(c,u)=>{Ft(this,n.propertyEffects,c,o,u,n.nodeList);for(let d=n.firstChild;d;d=d.nextSibling)this._runEffectsForTemplate(d,c,o,u)};n.runEffects?n.runEffects(l,r,a):l(r,a)}linkPaths(n,r){n=Mt(n),r=Mt(r),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[n]=r}unlinkPaths(n){n=Mt(n),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[n]}notifySplices(n,r){let o={path:""},a=H(this,n,o);Us(this,a,o.path,r)}get(n,r){return H(r||this,n)}set(n,r,o){o?$i(o,n,r):(!this[P.READ_ONLY]||!this[P.READ_ONLY][n])&&this._setPendingPropertyOrPath(n,r,!0)&&this._invalidateProperties()}push(n,...r){let o={path:""},a=H(this,n,o),l=a.length,c=a.push(...r);return r.length&&kt(this,a,o.path,l,r.length,[]),c}pop(n){let r={path:""},o=H(this,n,r),a=!!o.length,l=o.pop();return a&&kt(this,o,r.path,o.length,0,[l]),l}splice(n,r,o,...a){let l={path:""},c=H(this,n,l);r<0?r=c.length-Math.floor(-r):r&&(r=Math.floor(r));let u;return arguments.length===2?u=c.splice(r):u=c.splice(r,o,...a),(a.length||u.length)&&kt(this,c,l.path,r,a.length,u),u}shift(n){let r={path:""},o=H(this,n,r),a=!!o.length,l=o.shift();return a&&kt(this,o,r.path,0,0,[l]),l}unshift(n,...r){let o={path:""},a=H(this,n,o),l=a.unshift(...r);return r.length&&kt(this,a,o.path,0,r.length,[]),l}notifyPath(n,r){let o;if(arguments.length==1){let a={path:""};r=H(this,n,a),o=a.path}else Array.isArray(n)?o=Mt(n):o=n;this._setPendingPropertyOrPath(o,r,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(n,r){this._addPropertyEffect(n,P.READ_ONLY),r&&(this["_set"+co(n)]=function(o){this._setProperty(n,o)})}_createPropertyObserver(n,r,o){let a={property:n,method:r,dynamicFn:!!o};this._addPropertyEffect(n,P.OBSERVE,{fn:Ai,info:a,trigger:{name:n}}),o&&this._addPropertyEffect(r,P.OBSERVE,{fn:Ai,info:a,trigger:{name:r}})}_createMethodObserver(n,r){let o=He(n);if(!o)throw new Error("Malformed observer expression '"+n+"'");ki(this,o,P.OBSERVE,Ze,null,r)}_createNotifyingProperty(n){this._addPropertyEffect(n,P.NOTIFY,{fn:Nr,info:{eventName:Pe(n)+"-changed",property:n}})}_createReflectedProperty(n){let r=this.constructor.attributeNameForProperty(n);r[0]==="-"?console.warn("Property "+n+" cannot be reflected to attribute "+r+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(n,P.REFLECT,{fn:Mr,info:{attrName:r}})}_createComputedProperty(n,r,o){let a=He(r);if(!a)throw new Error("Malformed computed expression '"+r+"'");const l=ki(this,a,P.COMPUTE,Vs,n,o);Ve(this,Is)[n]=l}_marshalArgs(n,r,o){const a=this.__data,l=[];for(let c=0,u=n.length;c<u;c++){let{name:d,structured:h,wildcard:f,value:p,literal:g}=n[c];if(!g)if(f){const m=he(d,r),_=Fi(a,o,m?r:d);p={path:m?r:d,value:_,base:m?H(a,d):_}}else p=h?Fi(a,o,d):a[d];if(Ge&&!this._overrideLegacyUndefined&&p===void 0&&n.length>1)return Ut;l[c]=p}return l}static addPropertyEffect(n,r,o){this.prototype._addPropertyEffect(n,r,o)}static createPropertyObserver(n,r,o){this.prototype._createPropertyObserver(n,r,o)}static createMethodObserver(n,r){this.prototype._createMethodObserver(n,r)}static createNotifyingProperty(n){this.prototype._createNotifyingProperty(n)}static createReadOnlyProperty(n,r){this.prototype._createReadOnlyProperty(n,r)}static createReflectedProperty(n){this.prototype._createReflectedProperty(n)}static createComputedProperty(n,r,o){this.prototype._createComputedProperty(n,r,o)}static bindTemplate(n){return this.prototype._bindTemplate(n)}_bindTemplate(n,r){let o=this.constructor._parseTemplate(n),a=this.__preBoundTemplateInfo==o;if(!a)for(let l in o.propertyEffects)this._createPropertyAccessor(l);if(r)if(o=Object.create(o),o.wasPreBound=a,!this.__templateInfo)this.__templateInfo=o;else{const l=n._parentTemplateInfo||this.__templateInfo,c=l.lastChild;o.parent=l,l.lastChild=o,o.previousSibling=c,c?c.nextSibling=o:l.firstChild=o}else this.__preBoundTemplateInfo=o;return o}static _addTemplatePropertyEffect(n,r,o){let a=n.hostProps=n.hostProps||{};a[r]=!0;let l=n.propertyEffects=n.propertyEffects||{};(l[r]=l[r]||[]).push(o)}_stampTemplate(n,r){r=r||this._bindTemplate(n,!0),Nt.push(this);let o=super._stampTemplate(n,r);if(Nt.pop(),r.nodeList=o.nodeList,!r.wasPreBound){let a=r.childNodes=[];for(let l=o.firstChild;l;l=l.nextSibling)a.push(l)}return o.templateInfo=r,Yr(this,r),this.__dataClientsReady&&(this._runEffectsForTemplate(r,this.__data,null,!1),this._flushClients()),o}_removeBoundDom(n){const r=n.templateInfo,{previousSibling:o,nextSibling:a,parent:l}=r;o?o.nextSibling=a:l&&(l.firstChild=a),a?a.previousSibling=o:l&&(l.lastChild=o),r.nextSibling=r.previousSibling=null;let c=r.childNodes;for(let u=0;u<c.length;u++){let d=c[u];mt(mt(d).parentNode).removeChild(d)}}static _parseTemplateNode(n,r,o){let a=t._parseTemplateNode.call(this,n,r,o);if(n.nodeType===Node.TEXT_NODE){let l=this._parseBindings(n.textContent,r);l&&(n.textContent=Mi(l)||" ",Be(this,r,o,"text","textContent",l),a=!0)}return a}static _parseTemplateNodeAttribute(n,r,o,a,l){let c=this._parseBindings(l,r);if(c){let u=a,d="property";Tr.test(a)?d="attribute":a[a.length-1]=="$"&&(a=a.slice(0,-1),d="attribute");let h=Mi(c);return h&&d=="attribute"&&(a=="class"&&n.hasAttribute("class")&&(h+=" "+n.getAttribute(a)),n.setAttribute(a,h)),d=="attribute"&&u=="disable-upgrade$"&&n.setAttribute(a,""),n.localName==="input"&&u==="value"&&n.setAttribute(u,""),n.removeAttribute(u),d==="property"&&(a=ks(a)),Be(this,r,o,d,a,c,h),!0}else return t._parseTemplateNodeAttribute.call(this,n,r,o,a,l)}static _parseTemplateNestedTemplate(n,r,o){let a=t._parseTemplateNestedTemplate.call(this,n,r,o);const l=n.parentNode,c=o.templateInfo,u=l.localName==="dom-if",d=l.localName==="dom-repeat";Si&&(u||d)&&(l.removeChild(n),o=o.parentInfo,o.templateInfo=c,o.noted=!0,a=!1);let h=c.hostProps;if(tr&&u)h&&(r.hostProps=Object.assign(r.hostProps||{},h),Si||(o.parentInfo.noted=!0));else{let f="{";for(let p in h){let g=[{mode:f,source:p,dependencies:[p],hostProp:!0}];Be(this,r,o,"property","_host_"+p,g)}}return a}static _parseBindings(n,r){let o=[],a=0,l;for(;(l=zi.exec(n))!==null;){l.index>a&&o.push({literal:n.slice(a,l.index)});let c=l[1][0],u=!!l[2],d=l[3].trim(),h=!1,f="",p=-1;c=="{"&&(p=d.indexOf("::"))>0&&(f=d.substring(p+2),d=d.substring(0,p),h=!0);let g=He(d),m=[];if(g){let{args:_,methodName:y}=g;for(let v=0;v<_.length;v++){let w=_[v];w.literal||m.push(w)}let b=r.dynamicFns;(b&&b[y]||g.static)&&(m.push(y),g.dynamicFn=!0)}else m.push(d);o.push({source:d,mode:c,negate:u,customEvent:h,signature:g,dependencies:m,event:f}),a=zi.lastIndex}if(a&&a<n.length){let c=n.substring(a);c&&o.push({literal:c})}return o.length?o:null}static _evaluateBinding(n,r,o,a,l,c){let u;return r.signature?u=Ze(n,o,a,l,r.signature):o!=r.source?u=H(n,r.source):c&&Xe(o)?u=H(n,o):u=n.__data[o],r.negate&&(u=!u),u}}return i}),Nt=[];function ho(e){const t={};for(let i in e){const s=e[i];t[i]=typeof s=="function"?{type:s}:s}return t}const fo=xt(e=>{const t=Ms(e);function i(r){const o=Object.getPrototypeOf(r);return o.prototype instanceof n?o:null}function s(r){if(!r.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",r))){let o=null;if(r.hasOwnProperty(JSCompiler_renameProperty("properties",r))){const a=r.properties;a&&(o=ho(a))}r.__ownProperties=o}return r.__ownProperties}class n extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const o=this._properties;this.__observedAttributes=o?Object.keys(o).map(a=>this.prototype._addPropertyToAttributeMap(a)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const o=i(this);o&&o.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const o=s(this);o&&this.createProperties(o)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const o=i(this);this.__properties=Object.assign({},o&&o._properties,s(this))}return this.__properties}static typeForProperty(o){const a=this._properties[o];return a&&a.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return n});const po="3.5.2",Di=window.ShadyCSS&&window.ShadyCSS.cssBuild,go=xt(e=>{const t=fo(uo(e));function i(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let c=l._properties;for(let u in c){let d=c[u];"value"in d&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[u]=d)}}return l.__propertyDefaults}function s(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function n(l,c,u,d){u.computed&&(u.readOnly=!0),u.computed&&(l._hasReadOnlyEffect(c)?console.warn(`Cannot redefine computed property '${c}'.`):l._createComputedProperty(c,u.computed,d)),u.readOnly&&!l._hasReadOnlyEffect(c)?l._createReadOnlyProperty(c,!u.computed):u.readOnly===!1&&l._hasReadOnlyEffect(c)&&console.warn(`Cannot make readOnly property '${c}' non-readOnly.`),u.reflectToAttribute&&!l._hasReflectEffect(c)?l._createReflectedProperty(c):u.reflectToAttribute===!1&&l._hasReflectEffect(c)&&console.warn(`Cannot make reflected property '${c}' non-reflected.`),u.notify&&!l._hasNotifyEffect(c)?l._createNotifyingProperty(c):u.notify===!1&&l._hasNotifyEffect(c)&&console.warn(`Cannot make notify property '${c}' non-notify.`),u.observer&&l._createPropertyObserver(c,u.observer,d[u.observer]),l._addPropertyToAttributeMap(c)}function r(l,c,u,d){if(!Di){const h=c.content.querySelectorAll("style"),f=Ts(c),p=lr(u),g=c.content.firstElementChild;for(let _=0;_<p.length;_++){let y=p[_];y.textContent=l._processStyleText(y.textContent,d),c.content.insertBefore(y,g)}let m=0;for(let _=0;_<f.length;_++){let y=f[_],b=h[m];b!==y?(y=y.cloneNode(!0),b.parentNode.insertBefore(y,b)):m++,y.textContent=l._processStyleText(y.textContent,d)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(c,u),er&&Di&&Yn){const h=c.content.querySelectorAll("style");if(h){let f="";Array.from(h).forEach(p=>{f+=p.textContent,p.parentNode.removeChild(p)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(f)}}}function o(l){let c=null;if(l&&(!qe||qn)&&(c=Bt.import(l,"template"),qe&&!c))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return c}class a extends t{static get polymerElementVersion(){return po}static _finalizeClass(){t._finalizeClass.call(this);const c=s(this);c&&this.createObservers(c,this._properties),this._prepareTemplate()}static _prepareTemplate(){let c=this.template;c&&(typeof c=="string"?(console.error("template getter must return HTMLTemplateElement"),c=null):Gn||(c=c.cloneNode(!0))),this.prototype._template=c}static createProperties(c){for(let u in c)n(this.prototype,u,c[u],c)}static createObservers(c,u){const d=this.prototype;for(let h=0;h<c.length;h++)d._createMethodObserver(c[h],u)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let c=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof c=="function"&&(c=c()),this._template=c!==void 0?c:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&o(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(c){this._template=c}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const c=this.importMeta;if(c)this._importPath=ui(c.url);else{const u=Bt.import(this.is);this._importPath=u&&u.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=Jn,this.importPath=this.constructor.importPath;let c=i(this.constructor);if(c)for(let u in c){let d=c[u];if(this._canApplyPropertyDefault(u)){let h=typeof d.value=="function"?d.value.call(this):d.value;this._hasAccessor(u)?this._setPendingProperty(u,h,!0):this[u]=h}}}_canApplyPropertyDefault(c){return!this.hasOwnProperty(c)}static _processStyleText(c,u){return ci(c,u)}static _finalizeTemplate(c){const u=this.prototype._template;if(u&&!u.__polymerFinalized){u.__polymerFinalized=!0;const d=this.importPath,h=d?Dt(d):"";r(this,u,c,h),this.prototype._bindTemplate(u)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(c){const u=mt(this);if(u.attachShadow)return c?(u.shadowRoot||(u.attachShadow({mode:"open",shadyUpgradeFragment:c}),u.shadowRoot.appendChild(c),this.constructor._styleSheet&&(u.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),Qn&&window.ShadyDOM&&window.ShadyDOM.flushInitial(u.shadowRoot),u.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(c){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,c)}resolveUrl(c,u){return!u&&this.importPath&&(u=Dt(this.importPath)),Dt(c,u)}static _parseTemplateContent(c,u,d){return u.dynamicFns=u.dynamicFns||this._properties,t._parseTemplateContent.call(this,c,u,d)}static _addTemplatePropertyEffect(c,u,d){return Xn&&!(u in this._properties)&&!(d.info.part.signature&&d.info.part.signature.static)&&!d.info.part.hostProp&&!c.nestedTemplate&&console.warn(`Property '${u}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,c,u,d)}}return a});window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:e=>e});const mo=go(HTMLElement),x=e=>typeof e=="string",zt=()=>{let e,t;const i=new Promise((s,n)=>{e=s,t=n});return i.resolve=e,i.reject=t,i},Ii=e=>e==null?"":""+e,_o=(e,t,i)=>{e.forEach(s=>{t[s]&&(i[s]=t[s])})},yo=/###/g,ji=e=>e&&e.indexOf("###")>-1?e.replace(yo,"."):e,Vi=e=>!e||x(e),It=(e,t,i)=>{const s=x(t)?t.split("."):t;let n=0;for(;n<s.length-1;){if(Vi(e))return{};const r=ji(s[n]);!e[r]&&i&&(e[r]=new i),Object.prototype.hasOwnProperty.call(e,r)?e=e[r]:e={},++n}return Vi(e)?{}:{obj:e,k:ji(s[n])}},Bi=(e,t,i)=>{const{obj:s,k:n}=It(e,t,Object);if(s!==void 0||t.length===1){s[n]=i;return}let r=t[t.length-1],o=t.slice(0,t.length-1),a=It(e,o,Object);for(;a.obj===void 0&&o.length;)r=`${o[o.length-1]}.${r}`,o=o.slice(0,o.length-1),a=It(e,o,Object),a&&a.obj&&typeof a.obj[`${a.k}.${r}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${r}`]=i},bo=(e,t,i,s)=>{const{obj:n,k:r}=It(e,t,Object);n[r]=n[r]||[],n[r].push(i)},ge=(e,t)=>{const{obj:i,k:s}=It(e,t);if(i)return i[s]},vo=(e,t,i)=>{const s=ge(e,i);return s!==void 0?s:ge(t,i)},Ks=(e,t,i)=>{for(const s in t)s!=="__proto__"&&s!=="constructor"&&(s in e?x(e[s])||e[s]instanceof String||x(t[s])||t[s]instanceof String?i&&(e[s]=t[s]):Ks(e[s],t[s],i):e[s]=t[s]);return e},Pt=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var wo={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const xo=e=>x(e)?e.replace(/[&<>"'\/]/g,t=>wo[t]):e;class So{constructor(t){this.capacity=t,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(t){const i=this.regExpMap.get(t);if(i!==void 0)return i;const s=new RegExp(t);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(t,s),this.regExpQueue.push(t),s}}const Co=[" ",",","?","!",";"],Po=new So(20),Eo=(e,t,i)=>{t=t||"",i=i||"";const s=Co.filter(o=>t.indexOf(o)<0&&i.indexOf(o)<0);if(s.length===0)return!0;const n=Po.getRegExp(`(${s.map(o=>o==="?"?"\\?":o).join("|")})`);let r=!n.test(e);if(!r){const o=e.indexOf(i);o>0&&!n.test(e.substring(0,o))&&(r=!0)}return r},ti=function(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!e)return;if(e[t])return e[t];const s=t.split(i);let n=e;for(let r=0;r<s.length;){if(!n||typeof n!="object")return;let o,a="";for(let l=r;l<s.length;++l)if(l!==r&&(a+=i),a+=s[l],o=n[a],o!==void 0){if(["string","number","boolean"].indexOf(typeof o)>-1&&l<s.length-1)continue;r+=l-r+1;break}n=o}return n},me=e=>e&&e.replace("_","-"),Oo={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){console&&console[e]&&console[e].apply(console,t)}};class _e{constructor(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(t,i)}init(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=i.prefix||"i18next:",this.logger=t||Oo,this.options=i,this.debug=i.debug}log(){for(var t=arguments.length,i=new Array(t),s=0;s<t;s++)i[s]=arguments[s];return this.forward(i,"log","",!0)}warn(){for(var t=arguments.length,i=new Array(t),s=0;s<t;s++)i[s]=arguments[s];return this.forward(i,"warn","",!0)}error(){for(var t=arguments.length,i=new Array(t),s=0;s<t;s++)i[s]=arguments[s];return this.forward(i,"error","")}deprecate(){for(var t=arguments.length,i=new Array(t),s=0;s<t;s++)i[s]=arguments[s];return this.forward(i,"warn","WARNING DEPRECATED: ",!0)}forward(t,i,s,n){return n&&!this.debug?null:(x(t[0])&&(t[0]=`${s}${this.prefix} ${t[0]}`),this.logger[i](t))}create(t){return new _e(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new _e(this.logger,t)}}var et=new _e;class Ee{constructor(){this.observers={}}on(t,i){return t.split(" ").forEach(s=>{this.observers[s]||(this.observers[s]=new Map);const n=this.observers[s].get(i)||0;this.observers[s].set(i,n+1)}),this}off(t,i){if(this.observers[t]){if(!i){delete this.observers[t];return}this.observers[t].delete(i)}}emit(t){for(var i=arguments.length,s=new Array(i>1?i-1:0),n=1;n<i;n++)s[n-1]=arguments[n];this.observers[t]&&Array.from(this.observers[t].entries()).forEach(o=>{let[a,l]=o;for(let c=0;c<l;c++)a(...s)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(o=>{let[a,l]=o;for(let c=0;c<l;c++)a.apply(a,[t,...s])})}}class Hi extends Ee{constructor(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const i=this.options.ns.indexOf(t);i>-1&&this.options.ns.splice(i,1)}getResource(t,i,s){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,o=n.ignoreJSONStructure!==void 0?n.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;t.indexOf(".")>-1?a=t.split("."):(a=[t,i],s&&(Array.isArray(s)?a.push(...s):x(s)&&r?a.push(...s.split(r)):a.push(s)));const l=ge(this.data,a);return!l&&!i&&!s&&t.indexOf(".")>-1&&(t=a[0],i=a[1],s=a.slice(2).join(".")),l||!o||!x(s)?l:ti(this.data&&this.data[t]&&this.data[t][i],s,r)}addResource(t,i,s,n){let r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const o=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator;let a=[t,i];s&&(a=a.concat(o?s.split(o):s)),t.indexOf(".")>-1&&(a=t.split("."),n=i,i=a[1]),this.addNamespaces(i),Bi(this.data,a,n),r.silent||this.emit("added",t,i,s,n)}addResources(t,i,s){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const r in s)(x(s[r])||Array.isArray(s[r]))&&this.addResource(t,i,r,s[r],{silent:!0});n.silent||this.emit("added",t,i,s)}addResourceBundle(t,i,s,n,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},a=[t,i];t.indexOf(".")>-1&&(a=t.split("."),n=s,s=i,i=a[1]),this.addNamespaces(i);let l=ge(this.data,a)||{};o.skipCopy||(s=JSON.parse(JSON.stringify(s))),n?Ks(l,s,r):l={...l,...s},Bi(this.data,a,l),o.silent||this.emit("added",t,i,s)}removeResourceBundle(t,i){this.hasResourceBundle(t,i)&&delete this.data[t][i],this.removeNamespaces(i),this.emit("removed",t,i)}hasResourceBundle(t,i){return this.getResource(t,i)!==void 0}getResourceBundle(t,i){return i||(i=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(t,i)}:this.getResource(t,i)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const i=this.getDataByLanguage(t);return!!(i&&Object.keys(i)||[]).find(n=>i[n]&&Object.keys(i[n]).length>0)}toJSON(){return this.data}}var Ws={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,i,s,n){return e.forEach(r=>{this.processors[r]&&(t=this.processors[r].process(t,i,s,n))}),t}};const Ui={};class ye extends Ee{constructor(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),_o(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=et.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(t==null)return!1;const s=this.resolve(t,i);return s&&s.res!==void 0}extractFromKey(t,i){let s=i.nsSeparator!==void 0?i.nsSeparator:this.options.nsSeparator;s===void 0&&(s=":");const n=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator;let r=i.ns||this.options.defaultNS||[];const o=s&&t.indexOf(s)>-1,a=!this.options.userDefinedKeySeparator&&!i.keySeparator&&!this.options.userDefinedNsSeparator&&!i.nsSeparator&&!Eo(t,s,n);if(o&&!a){const l=t.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:t,namespaces:x(r)?[r]:r};const c=t.split(s);(s!==n||s===n&&this.options.ns.indexOf(c[0])>-1)&&(r=c.shift()),t=c.join(n)}return{key:t,namespaces:x(r)?[r]:r}}translate(t,i,s){if(typeof i!="object"&&this.options.overloadTranslationOptionHandler&&(i=this.options.overloadTranslationOptionHandler(arguments)),typeof i=="object"&&(i={...i}),i||(i={}),t==null)return"";Array.isArray(t)||(t=[String(t)]);const n=i.returnDetails!==void 0?i.returnDetails:this.options.returnDetails,r=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,{key:o,namespaces:a}=this.extractFromKey(t[t.length-1],i),l=a[a.length-1],c=i.lng||this.language,u=i.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&c.toLowerCase()==="cimode"){if(u){const v=i.nsSeparator||this.options.nsSeparator;return n?{res:`${l}${v}${o}`,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:`${l}${v}${o}`}return n?{res:o,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:o}const d=this.resolve(t,i);let h=d&&d.res;const f=d&&d.usedKey||o,p=d&&d.exactUsedKey||o,g=Object.prototype.toString.apply(h),m=["[object Number]","[object Function]","[object RegExp]"],_=i.joinArrays!==void 0?i.joinArrays:this.options.joinArrays,y=!this.i18nFormat||this.i18nFormat.handleAsObject,b=!x(h)&&typeof h!="boolean"&&typeof h!="number";if(y&&h&&b&&m.indexOf(g)<0&&!(x(_)&&Array.isArray(h))){if(!i.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const v=this.options.returnedObjectHandler?this.options.returnedObjectHandler(f,h,{...i,ns:a}):`key '${o} (${this.language})' returned an object instead of string.`;return n?(d.res=v,d.usedParams=this.getUsedParamsDetails(i),d):v}if(r){const v=Array.isArray(h),w=v?[]:{},$=v?p:f;for(const S in h)if(Object.prototype.hasOwnProperty.call(h,S)){const A=`${$}${r}${S}`;w[S]=this.translate(A,{...i,joinArrays:!1,ns:a}),w[S]===A&&(w[S]=h[S])}h=w}}else if(y&&x(_)&&Array.isArray(h))h=h.join(_),h&&(h=this.extendTranslation(h,t,i,s));else{let v=!1,w=!1;const $=i.count!==void 0&&!x(i.count),S=ye.hasDefaultValue(i),A=$?this.pluralResolver.getSuffix(c,i.count,i):"",N=i.ordinal&&$?this.pluralResolver.getSuffix(c,i.count,{ordinal:!1}):"",M=$&&!i.ordinal&&i.count===0&&this.pluralResolver.shouldUseIntlApi(),V=M&&i[`defaultValue${this.options.pluralSeparator}zero`]||i[`defaultValue${A}`]||i[`defaultValue${N}`]||i.defaultValue;!this.isValidLookup(h)&&S&&(v=!0,h=V),this.isValidLookup(h)||(w=!0,h=o);const B=(i.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&w?void 0:h,k=S&&V!==h&&this.options.updateMissing;if(w||v||k){if(this.logger.log(k?"updateKey":"missingKey",c,l,o,k?V:h),r){const L=this.resolve(o,{...i,keySeparator:!1});L&&L.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let I=[];const J=this.languageUtils.getFallbackCodes(this.options.fallbackLng,i.lng||this.language);if(this.options.saveMissingTo==="fallback"&&J&&J[0])for(let L=0;L<J.length;L++)I.push(J[L]);else this.options.saveMissingTo==="all"?I=this.languageUtils.toResolveHierarchy(i.lng||this.language):I.push(i.lng||this.language);const T=(L,j,at)=>{const Qt=S&&at!==h?at:B;this.options.missingKeyHandler?this.options.missingKeyHandler(L,l,j,Qt,k,i):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(L,l,j,Qt,k,i),this.emit("missingKey",L,l,j,h)};this.options.saveMissing&&(this.options.saveMissingPlurals&&$?I.forEach(L=>{const j=this.pluralResolver.getSuffixes(L,i);M&&i[`defaultValue${this.options.pluralSeparator}zero`]&&j.indexOf(`${this.options.pluralSeparator}zero`)<0&&j.push(`${this.options.pluralSeparator}zero`),j.forEach(at=>{T([L],o+at,i[`defaultValue${at}`]||V)})}):T(I,o,V))}h=this.extendTranslation(h,t,i,d,s),w&&h===o&&this.options.appendNamespaceToMissingKey&&(h=`${l}:${o}`),(w||v)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?h=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${o}`:o,v?h:void 0):h=this.options.parseMissingKeyHandler(h))}return n?(d.res=h,d.usedParams=this.getUsedParamsDetails(i),d):h}extendTranslation(t,i,s,n,r){var o=this;if(this.i18nFormat&&this.i18nFormat.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...s},s.lng||this.language||n.usedLng,n.usedNS,n.usedKey,{resolved:n});else if(!s.skipInterpolation){s.interpolation&&this.interpolator.init({...s,interpolation:{...this.options.interpolation,...s.interpolation}});const c=x(t)&&(s&&s.interpolation&&s.interpolation.skipOnVariables!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let u;if(c){const h=t.match(this.interpolator.nestingRegexp);u=h&&h.length}let d=s.replace&&!x(s.replace)?s.replace:s;if(this.options.interpolation.defaultVariables&&(d={...this.options.interpolation.defaultVariables,...d}),t=this.interpolator.interpolate(t,d,s.lng||this.language||n.usedLng,s),c){const h=t.match(this.interpolator.nestingRegexp),f=h&&h.length;u<f&&(s.nest=!1)}!s.lng&&this.options.compatibilityAPI!=="v1"&&n&&n.res&&(s.lng=this.language||n.usedLng),s.nest!==!1&&(t=this.interpolator.nest(t,function(){for(var h=arguments.length,f=new Array(h),p=0;p<h;p++)f[p]=arguments[p];return r&&r[0]===f[0]&&!s.context?(o.logger.warn(`It seems you are nesting recursively key: ${f[0]} in key: ${i[0]}`),null):o.translate(...f,i)},s)),s.interpolation&&this.interpolator.reset()}const a=s.postProcess||this.options.postProcess,l=x(a)?[a]:a;return t!=null&&l&&l.length&&s.applyPostProcessor!==!1&&(t=Ws.handle(l,t,i,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...n,usedParams:this.getUsedParamsDetails(s)},...s}:s,this)),t}resolve(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s,n,r,o,a;return x(t)&&(t=[t]),t.forEach(l=>{if(this.isValidLookup(s))return;const c=this.extractFromKey(l,i),u=c.key;n=u;let d=c.namespaces;this.options.fallbackNS&&(d=d.concat(this.options.fallbackNS));const h=i.count!==void 0&&!x(i.count),f=h&&!i.ordinal&&i.count===0&&this.pluralResolver.shouldUseIntlApi(),p=i.context!==void 0&&(x(i.context)||typeof i.context=="number")&&i.context!=="",g=i.lngs?i.lngs:this.languageUtils.toResolveHierarchy(i.lng||this.language,i.fallbackLng);d.forEach(m=>{this.isValidLookup(s)||(a=m,!Ui[`${g[0]}-${m}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(a)&&(Ui[`${g[0]}-${m}`]=!0,this.logger.warn(`key "${n}" for languages "${g.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),g.forEach(_=>{if(this.isValidLookup(s))return;o=_;const y=[u];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(y,u,_,m,i);else{let v;h&&(v=this.pluralResolver.getSuffix(_,i.count,i));const w=`${this.options.pluralSeparator}zero`,$=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(h&&(y.push(u+v),i.ordinal&&v.indexOf($)===0&&y.push(u+v.replace($,this.options.pluralSeparator)),f&&y.push(u+w)),p){const S=`${u}${this.options.contextSeparator}${i.context}`;y.push(S),h&&(y.push(S+v),i.ordinal&&v.indexOf($)===0&&y.push(S+v.replace($,this.options.pluralSeparator)),f&&y.push(S+w))}}let b;for(;b=y.pop();)this.isValidLookup(s)||(r=b,s=this.getResource(_,m,b,i))}))})}),{res:s,usedKey:n,exactUsedKey:r,usedLng:o,usedNS:a}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,i,s){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(t,i,s,n):this.resourceStore.getResource(t,i,s,n)}getUsedParamsDetails(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const i=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],s=t.replace&&!x(t.replace);let n=s?t.replace:t;if(s&&typeof t.count<"u"&&(n.count=t.count),this.options.interpolation.defaultVariables&&(n={...this.options.interpolation.defaultVariables,...n}),!s){n={...n};for(const r of i)delete n[r]}return n}static hasDefaultValue(t){const i="defaultValue";for(const s in t)if(Object.prototype.hasOwnProperty.call(t,s)&&i===s.substring(0,i.length)&&t[s]!==void 0)return!0;return!1}}const Ue=e=>e.charAt(0).toUpperCase()+e.slice(1);class Ki{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=et.create("languageUtils")}getScriptPartFromCode(t){if(t=me(t),!t||t.indexOf("-")<0)return null;const i=t.split("-");return i.length===2||(i.pop(),i[i.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(i.join("-"))}getLanguagePartFromCode(t){if(t=me(t),!t||t.indexOf("-")<0)return t;const i=t.split("-");return this.formatLanguageCode(i[0])}formatLanguageCode(t){if(x(t)&&t.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let n=Intl.getCanonicalLocales(t)[0];if(n&&this.options.lowerCaseLng&&(n=n.toLowerCase()),n)return n}catch{}const i=["hans","hant","latn","cyrl","cans","mong","arab"];let s=t.split("-");return this.options.lowerCaseLng?s=s.map(n=>n.toLowerCase()):s.length===2?(s[0]=s[0].toLowerCase(),s[1]=s[1].toUpperCase(),i.indexOf(s[1].toLowerCase())>-1&&(s[1]=Ue(s[1].toLowerCase()))):s.length===3&&(s[0]=s[0].toLowerCase(),s[1].length===2&&(s[1]=s[1].toUpperCase()),s[0]!=="sgn"&&s[2].length===2&&(s[2]=s[2].toUpperCase()),i.indexOf(s[1].toLowerCase())>-1&&(s[1]=Ue(s[1].toLowerCase())),i.indexOf(s[2].toLowerCase())>-1&&(s[2]=Ue(s[2].toLowerCase()))),s.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let i;return t.forEach(s=>{if(i)return;const n=this.formatLanguageCode(s);(!this.options.supportedLngs||this.isSupportedCode(n))&&(i=n)}),!i&&this.options.supportedLngs&&t.forEach(s=>{if(i)return;const n=this.getLanguagePartFromCode(s);if(this.isSupportedCode(n))return i=n;i=this.options.supportedLngs.find(r=>{if(r===n)return r;if(!(r.indexOf("-")<0&&n.indexOf("-")<0)&&(r.indexOf("-")>0&&n.indexOf("-")<0&&r.substring(0,r.indexOf("-"))===n||r.indexOf(n)===0&&n.length>1))return r})}),i||(i=this.getFallbackCodes(this.options.fallbackLng)[0]),i}getFallbackCodes(t,i){if(!t)return[];if(typeof t=="function"&&(t=t(i)),x(t)&&(t=[t]),Array.isArray(t))return t;if(!i)return t.default||[];let s=t[i];return s||(s=t[this.getScriptPartFromCode(i)]),s||(s=t[this.formatLanguageCode(i)]),s||(s=t[this.getLanguagePartFromCode(i)]),s||(s=t.default),s||[]}toResolveHierarchy(t,i){const s=this.getFallbackCodes(i||this.options.fallbackLng||[],t),n=[],r=o=>{o&&(this.isSupportedCode(o)?n.push(o):this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))};return x(t)&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&r(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&r(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&r(this.getLanguagePartFromCode(t))):x(t)&&r(this.formatLanguageCode(t)),s.forEach(o=>{n.indexOf(o)<0&&r(this.formatLanguageCode(o))}),n}}let $o=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],Lo={1:e=>+(e>1),2:e=>+(e!=1),3:e=>0,4:e=>e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2,5:e=>e==0?0:e==1?1:e==2?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5,6:e=>e==1?0:e>=2&&e<=4?1:2,7:e=>e==1?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2,8:e=>e==1?0:e==2?1:e!=8&&e!=11?2:3,9:e=>+(e>=2),10:e=>e==1?0:e==2?1:e<7?2:e<11?3:4,11:e=>e==1||e==11?0:e==2||e==12?1:e>2&&e<20?2:3,12:e=>+(e%10!=1||e%100==11),13:e=>+(e!==0),14:e=>e==1?0:e==2?1:e==3?2:3,15:e=>e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2,16:e=>e%10==1&&e%100!=11?0:e!==0?1:2,17:e=>e==1||e%10==1&&e%100!=11?0:1,18:e=>e==0?0:e==1?1:2,19:e=>e==1?0:e==0||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3,20:e=>e==1?0:e==0||e%100>0&&e%100<20?1:2,21:e=>e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0,22:e=>e==1?0:e==2?1:(e<0||e>10)&&e%10==0?2:3};const To=["v1","v2","v3"],Ao=["v4"],Wi={zero:0,one:1,two:2,few:3,many:4,other:5},Ro=()=>{const e={};return $o.forEach(t=>{t.lngs.forEach(i=>{e[i]={numbers:t.nr,plurals:Lo[t.fc]}})}),e};class ko{constructor(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=t,this.options=i,this.logger=et.create("pluralResolver"),(!this.options.compatibilityJSON||Ao.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=Ro(),this.pluralRulesCache={}}addRule(t,i){this.rules[t]=i}clearCache(){this.pluralRulesCache={}}getRule(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const s=me(t==="dev"?"en":t),n=i.ordinal?"ordinal":"cardinal",r=JSON.stringify({cleanedCode:s,type:n});if(r in this.pluralRulesCache)return this.pluralRulesCache[r];let o;try{o=new Intl.PluralRules(s,{type:n})}catch{if(!t.match(/-|_/))return;const l=this.languageUtils.getLanguagePartFromCode(t);o=this.getRule(l,i)}return this.pluralRulesCache[r]=o,o}return this.rules[t]||this.rules[this.languageUtils.getLanguagePartFromCode(t)]}needsPlural(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const s=this.getRule(t,i);return this.shouldUseIntlApi()?s&&s.resolvedOptions().pluralCategories.length>1:s&&s.numbers.length>1}getPluralFormsOfKey(t,i){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(t,s).map(n=>`${i}${n}`)}getSuffixes(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const s=this.getRule(t,i);return s?this.shouldUseIntlApi()?s.resolvedOptions().pluralCategories.sort((n,r)=>Wi[n]-Wi[r]).map(n=>`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${n}`):s.numbers.map(n=>this.getSuffix(t,n,i)):[]}getSuffix(t,i){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const n=this.getRule(t,s);return n?this.shouldUseIntlApi()?`${this.options.prepend}${s.ordinal?`ordinal${this.options.prepend}`:""}${n.select(i)}`:this.getSuffixRetroCompatible(n,i):(this.logger.warn(`no plural rule found for: ${t}`),"")}getSuffixRetroCompatible(t,i){const s=t.noAbs?t.plurals(i):t.plurals(Math.abs(i));let n=t.numbers[s];this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1&&(n===2?n="plural":n===1&&(n=""));const r=()=>this.options.prepend&&n.toString()?this.options.prepend+n.toString():n.toString();return this.options.compatibilityJSON==="v1"?n===1?"":typeof n=="number"?`_plural_${n.toString()}`:r():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1?r():this.options.prepend&&s.toString()?this.options.prepend+s.toString():s.toString()}shouldUseIntlApi(){return!To.includes(this.options.compatibilityJSON)}}const Yi=function(e,t,i){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,r=vo(e,t,i);return!r&&n&&x(i)&&(r=ti(e,i,s),r===void 0&&(r=ti(t,i,s))),r},Ke=e=>e.replace(/\$/g,"$$$$");class No{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=et.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||(i=>i),this.init(t)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const{escape:i,escapeValue:s,useRawValueToEscape:n,prefix:r,prefixEscaped:o,suffix:a,suffixEscaped:l,formatSeparator:c,unescapeSuffix:u,unescapePrefix:d,nestingPrefix:h,nestingPrefixEscaped:f,nestingSuffix:p,nestingSuffixEscaped:g,nestingOptionsSeparator:m,maxReplaces:_,alwaysFormat:y}=t.interpolation;this.escape=i!==void 0?i:xo,this.escapeValue=s!==void 0?s:!0,this.useRawValueToEscape=n!==void 0?n:!1,this.prefix=r?Pt(r):o||"{{",this.suffix=a?Pt(a):l||"}}",this.formatSeparator=c||",",this.unescapePrefix=u?"":d||"-",this.unescapeSuffix=this.unescapePrefix?"":u||"",this.nestingPrefix=h?Pt(h):f||Pt("$t("),this.nestingSuffix=p?Pt(p):g||Pt(")"),this.nestingOptionsSeparator=m||",",this.maxReplaces=_||1e3,this.alwaysFormat=y!==void 0?y:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=(i,s)=>i&&i.source===s?(i.lastIndex=0,i):new RegExp(s,"g");this.regexp=t(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=t(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=t(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(t,i,s,n){let r,o,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=f=>{if(f.indexOf(this.formatSeparator)<0){const _=Yi(i,l,f,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(_,void 0,s,{...n,...i,interpolationkey:f}):_}const p=f.split(this.formatSeparator),g=p.shift().trim(),m=p.join(this.formatSeparator).trim();return this.format(Yi(i,l,g,this.options.keySeparator,this.options.ignoreJSONStructure),m,s,{...n,...i,interpolationkey:g})};this.resetRegExp();const u=n&&n.missingInterpolationHandler||this.options.missingInterpolationHandler,d=n&&n.interpolation&&n.interpolation.skipOnVariables!==void 0?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:f=>Ke(f)},{regex:this.regexp,safeValue:f=>this.escapeValue?Ke(this.escape(f)):Ke(f)}].forEach(f=>{for(a=0;r=f.regex.exec(t);){const p=r[1].trim();if(o=c(p),o===void 0)if(typeof u=="function"){const m=u(t,r,n);o=x(m)?m:""}else if(n&&Object.prototype.hasOwnProperty.call(n,p))o="";else if(d){o=r[0];continue}else this.logger.warn(`missed to pass in variable ${p} for interpolating ${t}`),o="";else!x(o)&&!this.useRawValueToEscape&&(o=Ii(o));const g=f.safeValue(o);if(t=t.replace(r[0],g),d?(f.regex.lastIndex+=o.length,f.regex.lastIndex-=r[0].length):f.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),t}nest(t,i){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n,r,o;const a=(l,c)=>{const u=this.nestingOptionsSeparator;if(l.indexOf(u)<0)return l;const d=l.split(new RegExp(`${u}[ ]*{`));let h=`{${d[1]}`;l=d[0],h=this.interpolate(h,o);const f=h.match(/'/g),p=h.match(/"/g);(f&&f.length%2===0&&!p||p.length%2!==0)&&(h=h.replace(/'/g,'"'));try{o=JSON.parse(h),c&&(o={...c,...o})}catch(g){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,g),`${l}${u}${h}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,l};for(;n=this.nestingRegexp.exec(t);){let l=[];o={...s},o=o.replace&&!x(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;let c=!1;if(n[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(n[1])){const u=n[1].split(this.formatSeparator).map(d=>d.trim());n[1]=u.shift(),l=u,c=!0}if(r=i(a.call(this,n[1].trim(),o),o),r&&n[0]===t&&!x(r))return r;x(r)||(r=Ii(r)),r||(this.logger.warn(`missed to resolve ${n[1]} for nesting ${t}`),r=""),c&&(r=l.reduce((u,d)=>this.format(u,d,s.lng,{...s,interpolationkey:n[1].trim()}),r.trim())),t=t.replace(n[0],r),this.regexp.lastIndex=0}return t}}const zo=e=>{let t=e.toLowerCase().trim();const i={};if(e.indexOf("(")>-1){const s=e.split("(");t=s[0].toLowerCase().trim();const n=s[1].substring(0,s[1].length-1);t==="currency"&&n.indexOf(":")<0?i.currency||(i.currency=n.trim()):t==="relativetime"&&n.indexOf(":")<0?i.range||(i.range=n.trim()):n.split(";").forEach(o=>{if(o){const[a,...l]=o.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,""),u=a.trim();i[u]||(i[u]=c),c==="false"&&(i[u]=!1),c==="true"&&(i[u]=!0),isNaN(c)||(i[u]=parseInt(c,10))}})}return{formatName:t,formatOptions:i}},Et=e=>{const t={};return(i,s,n)=>{let r=n;n&&n.interpolationkey&&n.formatParams&&n.formatParams[n.interpolationkey]&&n[n.interpolationkey]&&(r={...r,[n.interpolationkey]:void 0});const o=s+JSON.stringify(r);let a=t[o];return a||(a=e(me(s),n),t[o]=a),a(i)}};class Mo{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=et.create("formatter"),this.options=t,this.formats={number:Et((i,s)=>{const n=new Intl.NumberFormat(i,{...s});return r=>n.format(r)}),currency:Et((i,s)=>{const n=new Intl.NumberFormat(i,{...s,style:"currency"});return r=>n.format(r)}),datetime:Et((i,s)=>{const n=new Intl.DateTimeFormat(i,{...s});return r=>n.format(r)}),relativetime:Et((i,s)=>{const n=new Intl.RelativeTimeFormat(i,{...s});return r=>n.format(r,s.range||"day")}),list:Et((i,s)=>{const n=new Intl.ListFormat(i,{...s});return r=>n.format(r)})},this.init(t)}init(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=i.interpolation.formatSeparator||","}add(t,i){this.formats[t.toLowerCase().trim()]=i}addCached(t,i){this.formats[t.toLowerCase().trim()]=Et(i)}format(t,i,s){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=i.split(this.formatSeparator);if(r.length>1&&r[0].indexOf("(")>1&&r[0].indexOf(")")<0&&r.find(a=>a.indexOf(")")>-1)){const a=r.findIndex(l=>l.indexOf(")")>-1);r[0]=[r[0],...r.splice(1,a)].join(this.formatSeparator)}return r.reduce((a,l)=>{const{formatName:c,formatOptions:u}=zo(l);if(this.formats[c]){let d=a;try{const h=n&&n.formatParams&&n.formatParams[n.interpolationkey]||{},f=h.locale||h.lng||n.locale||n.lng||s;d=this.formats[c](a,f,{...u,...n,...h})}catch(h){this.logger.warn(h)}return d}else this.logger.warn(`there was no format function for ${c}`);return a},t)}}const Fo=(e,t)=>{e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)};class Do extends Ee{constructor(t,i,s){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=t,this.store=i,this.services=s,this.languageUtils=s.languageUtils,this.options=n,this.logger=et.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=n.maxParallelReads||10,this.readingCalls=0,this.maxRetries=n.maxRetries>=0?n.maxRetries:5,this.retryTimeout=n.retryTimeout>=1?n.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(s,n.backend,n)}queueLoad(t,i,s,n){const r={},o={},a={},l={};return t.forEach(c=>{let u=!0;i.forEach(d=>{const h=`${c}|${d}`;!s.reload&&this.store.hasResourceBundle(c,d)?this.state[h]=2:this.state[h]<0||(this.state[h]===1?o[h]===void 0&&(o[h]=!0):(this.state[h]=1,u=!1,o[h]===void 0&&(o[h]=!0),r[h]===void 0&&(r[h]=!0),l[d]===void 0&&(l[d]=!0)))}),u||(a[c]=!0)}),(Object.keys(r).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:n}),{toLoad:Object.keys(r),pending:Object.keys(o),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(t,i,s){const n=t.split("|"),r=n[0],o=n[1];i&&this.emit("failedLoading",r,o,i),!i&&s&&this.store.addResourceBundle(r,o,s,void 0,void 0,{skipCopy:!0}),this.state[t]=i?-1:2,i&&s&&(this.state[t]=0);const a={};this.queue.forEach(l=>{bo(l.loaded,[r],o),Fo(l,t),i&&l.errors.push(i),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{a[c]||(a[c]={});const u=l.loaded[c];u.length&&u.forEach(d=>{a[c][d]===void 0&&(a[c][d]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(t,i,s){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,o=arguments.length>5?arguments[5]:void 0;if(!t.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:i,fcName:s,tried:n,wait:r,callback:o});return}this.readingCalls++;const a=(c,u)=>{if(this.readingCalls--,this.waitingReads.length>0){const d=this.waitingReads.shift();this.read(d.lng,d.ns,d.fcName,d.tried,d.wait,d.callback)}if(c&&u&&n<this.maxRetries){setTimeout(()=>{this.read.call(this,t,i,s,n+1,r*2,o)},r);return}o(c,u)},l=this.backend[s].bind(this.backend);if(l.length===2){try{const c=l(t,i);c&&typeof c.then=="function"?c.then(u=>a(null,u)).catch(a):a(null,c)}catch(c){a(c)}return}return l(t,i,a)}prepareLoading(t,i){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),n&&n();x(t)&&(t=this.languageUtils.toResolveHierarchy(t)),x(i)&&(i=[i]);const r=this.queueLoad(t,i,s,n);if(!r.toLoad.length)return r.pending.length||n(),null;r.toLoad.forEach(o=>{this.loadOne(o)})}load(t,i,s){this.prepareLoading(t,i,{},s)}reload(t,i,s){this.prepareLoading(t,i,{reload:!0},s)}loadOne(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const s=t.split("|"),n=s[0],r=s[1];this.read(n,r,"read",void 0,void 0,(o,a)=>{o&&this.logger.warn(`${i}loading namespace ${r} for language ${n} failed`,o),!o&&a&&this.logger.log(`${i}loaded namespace ${r} for language ${n}`,a),this.loaded(t,o,a)})}saveMissing(t,i,s,n,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(i)){this.logger.warn(`did not save key "${s}" as the namespace "${i}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(s==null||s==="")){if(this.backend&&this.backend.create){const l={...o,isUpdate:r},c=this.backend.create.bind(this.backend);if(c.length<6)try{let u;c.length===5?u=c(t,i,s,n,l):u=c(t,i,s,n),u&&typeof u.then=="function"?u.then(d=>a(null,d)).catch(a):a(null,u)}catch(u){a(u)}else c(t,i,s,n,a,l)}!t||!t[0]||this.store.addResource(t[0],i,s,n)}}}const Ji=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if(typeof e[1]=="object"&&(t=e[1]),x(e[1])&&(t.defaultValue=e[1]),x(e[2])&&(t.tDescription=e[2]),typeof e[2]=="object"||typeof e[3]=="object"){const i=e[3]||e[2];Object.keys(i).forEach(s=>{t[s]=i[s]})}return t},interpolation:{escapeValue:!0,format:e=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),qi=e=>(x(e.ns)&&(e.ns=[e.ns]),x(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),x(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e),ie=()=>{},Io=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(i=>{typeof e[i]=="function"&&(e[i]=e[i].bind(e))})};class Kt extends Ee{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;if(super(),this.options=qi(t),this.services={},this.logger=et,this.modules={external:[]},Io(this),i&&!this.isInitialized&&!t.isClone){if(!this.options.initImmediate)return this.init(t,i),this;setTimeout(()=>{this.init(t,i)},0)}}init(){var t=this;let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof i=="function"&&(s=i,i={}),!i.defaultNS&&i.defaultNS!==!1&&i.ns&&(x(i.ns)?i.defaultNS=i.ns:i.ns.indexOf("translation")<0&&(i.defaultNS=i.ns[0]));const n=Ji();this.options={...n,...this.options,...qi(i)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...n.interpolation,...this.options.interpolation}),i.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=i.keySeparator),i.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=i.nsSeparator);const r=u=>u?typeof u=="function"?new u:u:null;if(!this.options.isClone){this.modules.logger?et.init(r(this.modules.logger),this.options):et.init(null,this.options);let u;this.modules.formatter?u=this.modules.formatter:typeof Intl<"u"&&(u=Mo);const d=new Ki(this.options);this.store=new Hi(this.options.resources,this.options);const h=this.services;h.logger=et,h.resourceStore=this.store,h.languageUtils=d,h.pluralResolver=new ko(d,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),u&&(!this.options.interpolation.format||this.options.interpolation.format===n.interpolation.format)&&(h.formatter=r(u),h.formatter.init(h,this.options),this.options.interpolation.format=h.formatter.format.bind(h.formatter)),h.interpolator=new No(this.options),h.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},h.backendConnector=new Do(r(this.modules.backend),h.resourceStore,h,this.options),h.backendConnector.on("*",function(f){for(var p=arguments.length,g=new Array(p>1?p-1:0),m=1;m<p;m++)g[m-1]=arguments[m];t.emit(f,...g)}),this.modules.languageDetector&&(h.languageDetector=r(this.modules.languageDetector),h.languageDetector.init&&h.languageDetector.init(h,this.options.detection,this.options)),this.modules.i18nFormat&&(h.i18nFormat=r(this.modules.i18nFormat),h.i18nFormat.init&&h.i18nFormat.init(this)),this.translator=new ye(this.services,this.options),this.translator.on("*",function(f){for(var p=arguments.length,g=new Array(p>1?p-1:0),m=1;m<p;m++)g[m-1]=arguments[m];t.emit(f,...g)}),this.modules.external.forEach(f=>{f.init&&f.init(this)})}if(this.format=this.options.interpolation.format,s||(s=ie),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const u=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);u.length>0&&u[0]!=="dev"&&(this.options.lng=u[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(u=>{this[u]=function(){return t.store[u](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(u=>{this[u]=function(){return t.store[u](...arguments),t}});const l=zt(),c=()=>{const u=(d,h)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(h),s(d,h)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return u(null,this.t.bind(this));this.changeLanguage(this.options.lng,u)};return this.options.resources||!this.options.initImmediate?c():setTimeout(c,0),l}loadResources(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ie;const n=x(t)?t:this.language;if(typeof t=="function"&&(s=t),!this.options.resources||this.options.partialBundledLanguages){if(n&&n.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return s();const r=[],o=a=>{if(!a||a==="cimode")return;this.services.languageUtils.toResolveHierarchy(a).forEach(c=>{c!=="cimode"&&r.indexOf(c)<0&&r.push(c)})};n?o(n):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>o(l)),this.options.preload&&this.options.preload.forEach(a=>o(a)),this.services.backendConnector.load(r,this.options.ns,a=>{!a&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),s(a)})}else s(null)}reloadResources(t,i,s){const n=zt();return typeof t=="function"&&(s=t,t=void 0),typeof i=="function"&&(s=i,i=void 0),t||(t=this.languages),i||(i=this.options.ns),s||(s=ie),this.services.backendConnector.reload(t,i,r=>{n.resolve(),s(r)}),n}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&Ws.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1))for(let i=0;i<this.languages.length;i++){const s=this.languages[i];if(!(["cimode","dev"].indexOf(s)>-1)&&this.store.hasLanguageSomeTranslations(s)){this.resolvedLanguage=s;break}}}changeLanguage(t,i){var s=this;this.isLanguageChangingTo=t;const n=zt();this.emit("languageChanging",t);const r=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},o=(l,c)=>{c?(r(c),this.translator.changeLanguage(c),this.isLanguageChangingTo=void 0,this.emit("languageChanged",c),this.logger.log("languageChanged",c)):this.isLanguageChangingTo=void 0,n.resolve(function(){return s.t(...arguments)}),i&&i(l,function(){return s.t(...arguments)})},a=l=>{!t&&!l&&this.services.languageDetector&&(l=[]);const c=x(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);c&&(this.language||r(c),this.translator.language||this.translator.changeLanguage(c),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(c)),this.loadResources(c,u=>{o(u,c)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(t),n}getFixedT(t,i,s){var n=this;const r=function(o,a){let l;if(typeof a!="object"){for(var c=arguments.length,u=new Array(c>2?c-2:0),d=2;d<c;d++)u[d-2]=arguments[d];l=n.options.overloadTranslationOptionHandler([o,a].concat(u))}else l={...a};l.lng=l.lng||r.lng,l.lngs=l.lngs||r.lngs,l.ns=l.ns||r.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||s||r.keyPrefix);const h=n.options.keySeparator||".";let f;return l.keyPrefix&&Array.isArray(o)?f=o.map(p=>`${l.keyPrefix}${h}${p}`):f=l.keyPrefix?`${l.keyPrefix}${h}${o}`:o,n.t(f,l)};return x(t)?r.lng=t:r.lngs=t,r.ns=i,r.keyPrefix=s,r}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const s=i.lng||this.resolvedLanguage||this.languages[0],n=this.options?this.options.fallbackLng:!1,r=this.languages[this.languages.length-1];if(s.toLowerCase()==="cimode")return!0;const o=(a,l)=>{const c=this.services.backendConnector.state[`${a}|${l}`];return c===-1||c===0||c===2};if(i.precheck){const a=i.precheck(this,o);if(a!==void 0)return a}return!!(this.hasResourceBundle(s,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(s,t)&&(!n||o(r,t)))}loadNamespaces(t,i){const s=zt();return this.options.ns?(x(t)&&(t=[t]),t.forEach(n=>{this.options.ns.indexOf(n)<0&&this.options.ns.push(n)}),this.loadResources(n=>{s.resolve(),i&&i(n)}),s):(i&&i(),Promise.resolve())}loadLanguages(t,i){const s=zt();x(t)&&(t=[t]);const n=this.options.preload||[],r=t.filter(o=>n.indexOf(o)<0&&this.services.languageUtils.isSupportedCode(o));return r.length?(this.options.preload=n.concat(r),this.loadResources(o=>{s.resolve(),i&&i(o)}),s):(i&&i(),Promise.resolve())}dir(t){if(t||(t=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!t)return"rtl";const i=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],s=this.services&&this.services.languageUtils||new Ki(Ji());return i.indexOf(s.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;return new Kt(t,i)}cloneInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ie;const s=t.forkResourceStore;s&&delete t.forkResourceStore;const n={...this.options,...t,isClone:!0},r=new Kt(n);return(t.debug!==void 0||t.prefix!==void 0)&&(r.logger=r.logger.clone(t)),["store","services","language"].forEach(a=>{r[a]=this[a]}),r.services={...this.services},r.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},s&&(r.store=new Hi(this.store.data,n),r.services.resourceStore=r.store),r.translator=new ye(r.services,n),r.translator.on("*",function(a){for(var l=arguments.length,c=new Array(l>1?l-1:0),u=1;u<l;u++)c[u-1]=arguments[u];r.emit(a,...c)}),r.init(n,i),r.translator.options=n,r.translator.backendConnector.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},r}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const O=Kt.createInstance();O.createInstance=Kt.createInstance;O.createInstance;O.dir;O.init;O.loadResources;O.reloadResources;O.use;O.changeLanguage;O.getFixedT;O.t;O.exists;O.setDefaultNamespace;O.hasLoadedNamespace;O.loadNamespaces;O.loadLanguages;const ae=[],Oe=()=>{O.isInitialized||O.init({lng:"en",resStore:{en:{}},fallbackLng:!1})},$e=e=>e.reduce((t,i,s)=>(t.count===void 0&&typeof i=="number"&&(t.count=i),typeof i=="object"?{...t,...i}:(t[s]=i,t)),{}),Wt=function(e){Oe();const t=$e([...arguments].slice(1));return delete t.count,O.t(e,t)},jo=function(e,t){Oe();const i=$e([...arguments].slice(2)),s=i.count;let n;delete i.count;const r=O.services.pluralResolver.getSuffix(O.language,s);return r?(i.defaultValue=t,n=e+r):(n=e,i.defaultValue=e),O.t(n,i)},Vo=function(e,t){Oe();const i=$e([...arguments].slice(2));return i.context=e,delete i.count,O.t(t,i)},Bo=function(e,t,i){Oe();const s=$e([...arguments].slice(3)),n=s.count,r=e?"_"+e:"";let o=t;delete s.count;const a=O.services.pluralResolver.getSuffix(O.language,n);return a?(s.defaultValue=i,o=t+r+a):(o=t,s.context=e),O.t(o,s)},Ho=(e,t,i)=>{O.init({resources:{}}),O.addResourceBundle(e,t,i)};xt(e=>class extends e{static get properties(){return{t:{type:Object,value(){return{}}}}}_filterT(t){return t.filter(i=>i!==this.t)}_(){return Wt.apply(null,this._filterT([...arguments]))}connectedCallback(){super.connectedCallback(),ae.push(this)}disconnectedCallback(){super.disconnectedCallback();const t=ae.indexOf(this);t>=0&&ae.splice(t,1)}gettext(){return Wt.apply(null,this._filterT([...arguments]))}ngettext(){return jo.apply(null,this._filterT([...arguments]))}pgettext(){return Vo.apply(null,this._filterT([...arguments]))}npgettext(){return Bo.apply(null,this._filterT([...arguments]))}});class Uo extends mo{static get properties(){return{compatibilityJSON:{type:String,value:"v3"},domain:{type:String,value:"messages"},interpolationPrefix:{type:String,value:"__"},interpolationSuffix:{type:String,value:"__"},language:{type:String,value:"en"},namespace:{type:String,value:"translation"},translations:{type:Object,observer(t){t!=null&&(Ho(this.language,this.namespace,t),ae.forEach(i=>i.set("t",{})))}},keySeparator:{type:String,value:"."},nsSeparator:{type:String,value:":"}}}ready(){super.ready(),O.init({compatibilityJSON:this.compatibilityJSON,interpolation:{escapeValue:!1,prefix:this.interpolationPrefix,suffix:this.interpolationSuffix},keySeparator:this.keySeparator,lng:this.language,nsSeparator:this.nsSeparator,resStore:{}})}}customElements.define("cosmoz-i18next",Uo);const Ko=e=>e==null||e===""||Number.isNaN(e)||Array.isArray(e)&&e.length<1,Gi=e=>Ko(e)&&Wt("Required"),Wo=Symbol("error"),Yo=(e,t,i,s)=>{for(const n of ut(e)){const r=n(t,i,s);if(r)return r}},Jo=(e,t)=>e.validate&&Yo(e.validate,t[e.path??e.id],t,e),qo=(e,t)=>{const i=e.map(s=>({...s,error:Jo(s,t)}));return{fields:i,invalid:i.some(({error:s})=>!!s)}},Go=(e,t)=>t?qo(e,t):{fields:e,invalid:!0},Xo=(e,t,i,s)=>{s!=null&&Object.is(s[t],i)||e({[t]:i})},Qo=e=>Array.isArray(e)?e.some(t=>t===Gi):e===Gi,Zo=e=>({field:t,value:i,values:s,onChange:n,...r})=>{const o=(c,u)=>(t.onChange??Xo)(d=>n(d,u),t.path??t.id,xi(t.value?.[1],c,s,t),s),a=U(t.mandatory??Qo(t.validate),i,s,t)?" *":void 0;if(!U(t.hidden,i,s,t))return e({...t,...r,values:s,label:[U(t.label,i,s,t),a].join(""),placeholder:U(t.placeholder,i,s,t),disabled:U(t.disabled,i,s,t),warning:U(t.warning,i,s,t),prefix:U(t.prefix,i,s,t),suffix:U(t.suffix,i,s,t),value:xi(t.value?.[0],i,s,t),onFocus:t.onFocus?.(o,i,s,t),onChange:o})};const tt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Ct=e=>(...t)=>({_$litDirective$:e,values:t});let Jt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,s){this._$Ct=t,this._$AM=i,this._$Ci=s}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}};const Le=Ct(class extends Jt{constructor(e){if(super(e),e.type!==tt.PROPERTY&&e.type!==tt.ATTRIBUTE&&e.type!==tt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Cs(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===q||t===st)return t;const i=e.element,s=e.name;if(e.type===tt.PROPERTY){if(t===i[s])return q}else if(e.type===tt.BOOLEAN_ATTRIBUTE){if(!!t===i.hasAttribute(s))return q}else if(e.type===tt.ATTRIBUTE&&i.getAttribute(s)===t+"")return q;return Ps(e),t}});const jt=(e,t)=>{const i=e._$AN;if(i===void 0)return!1;for(const s of i)s._$AO?.(t,!1),jt(s,t);return!0},be=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while(i?.size===0)},Ys=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),ia(t)}};function ta(e){this._$AN!==void 0?(be(this),this._$AM=e,Ys(this)):this._$AM=e}function ea(e,t=!1,i=0){const s=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(s))for(let r=i;r<s.length;r++)jt(s[r],!1),be(s[r]);else s!=null&&(jt(s,!1),be(s));else jt(this,e)}const ia=e=>{e.type==tt.CHILD&&(e._$AP??=ea,e._$AQ??=ta)};class fi extends Jt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,s){super._$AT(t,i,s),Ys(this),this.isConnected=t._$AU}_$AO(t,i=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),i&&(jt(this,t),be(this))}setValue(t){if(Cs(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}const We=new WeakMap,qt=Ct(class extends fi{render(e){return st}update(e,[t]){const i=t!==this.G;return i&&this.G!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),st}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let i=We.get(t);i===void 0&&(i=new WeakMap,We.set(t,i)),i.get(this.G)!==void 0&&this.G.call(this.ht,void 0),i.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?We.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});const R=e=>e??st;let ve,Js=0;function Xi(e){ve=e}function Qi(){ve=null,Js=0}function sa(){return Js++}const Ye=Symbol("haunted.phase"),le=Symbol("haunted.hook"),Zi=Symbol("haunted.update"),ts=Symbol("haunted.commit"),_t=Symbol("haunted.effects"),Vt=Symbol("haunted.layoutEffects"),ei="haunted.context";class na{update;host;virtual;[le];[_t];[Vt];constructor(t,i){this.update=t,this.host=i,this[le]=new Map,this[_t]=[],this[Vt]=[]}run(t){Xi(this);let i=t();return Qi(),i}_runEffects(t){let i=this[t];Xi(this);for(let s of i)s.call(this);Qi()}runEffects(){this._runEffects(_t)}runLayoutEffects(){this._runEffects(Vt)}teardown(){this[le].forEach(i=>{typeof i.teardown=="function"&&i.teardown(!0)})}}const ra=Promise.resolve().then.bind(Promise.resolve());function qs(){let e=[],t;function i(){t=null;let s=e;e=[];for(var n=0,r=s.length;n<r;n++)s[n]()}return function(s){e.push(s),t==null&&(t=ra(i))}}const oa=qs(),es=qs();class aa{renderer;host;state;[Ye];_updateQueued;_active;constructor(t,i){this.renderer=t,this.host=i,this.state=new na(this.update.bind(this),i),this[Ye]=null,this._updateQueued=!1,this._active=!0}update(){this._active&&(this._updateQueued||(oa(()=>{let t=this.handlePhase(Zi);es(()=>{this.handlePhase(ts,t),es(()=>{this.handlePhase(_t)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(t,i){switch(this[Ye]=t,t){case ts:this.commit(i),this.runEffects(Vt);return;case Zi:return this.render();case _t:return this.runEffects(_t)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(t){this.state._runEffects(t)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const pi=(...e)=>{const t=new CSSStyleSheet;return t.replaceSync(e.join("")),t},la=e=>e?.map(t=>typeof t=="string"?pi(t):t),ca=(e,...t)=>e.flatMap((i,s)=>[i,t[s]||""]).join(""),bt=ca,ua=(e="")=>e.replace(/-+([a-z])?/g,(t,i)=>i?i.toUpperCase():"");function da(e){class t extends aa{frag;renderResult;constructor(n,r,o){super(n,o||r),this.frag=r}commit(n){this.renderResult=e(n,this.frag)}}function i(s,n,r){const o=(r||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:l=!0,shadowRootInit:c={},styleSheets:u}=r||n||{},d=la(s.styleSheets||u);class h extends o{_scheduler;static get observedAttributes(){return s.observedAttributes||a||[]}constructor(){if(super(),l===!1)this._scheduler=new t(s,this);else{const m=this.attachShadow({mode:"open",...c});d&&(m.adoptedStyleSheets=d),this._scheduler=new t(s,m,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(m,_,y){if(_===y)return;let b=y===""?!0:y;Reflect.set(this,ua(m),b)}}function f(g){let m=g,_=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return m},set(y){_&&m===y||(_=!0,m=y,this._scheduler&&this._scheduler.update())}})}const p=new Proxy(o.prototype,{getPrototypeOf(g){return g},set(g,m,_,y){let b;return m in g?(b=Object.getOwnPropertyDescriptor(g,m),b&&b.set?(b.set.call(y,_),!0):(Reflect.set(g,m,_,y),!0)):(typeof m=="symbol"||m[0]==="_"?b={enumerable:!0,configurable:!0,writable:!0,value:_}:b=f(_),Object.defineProperty(y,m,b),b.set&&b.set.call(y,_),!0)}});return Object.setPrototypeOf(h.prototype,p),h}return i}class ht{id;state;constructor(t,i){this.id=t,this.state=i}}function ha(e,...t){let i=sa(),s=ve[le],n=s.get(i);return n||(n=new e(i,ve,...t),s.set(i,n)),n.update(...t)}function ft(e){return ha.bind(null,e)}function Gs(e){return ft(class extends ht{callback;lastValues;values;_teardown;constructor(t,i,s,n){super(t,i),e(i,this)}update(t,i){this.callback=t,this.values=i}call(){const t=!this.values||this.hasChanged();this.lastValues=this.values,t&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(t){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),t&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((t,i)=>this.lastValues[i]!==t)}})}function Xs(e,t){e[_t].push(t)}const z=Gs(Xs),fa=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,pa=ft(class extends ht{Context;value;_ranEffect;_unsubscribe;constructor(e,t,i){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Xs(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const t={Context:e,callback:this._updater};fa(this.state.host).dispatchEvent(new CustomEvent(ei,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:s=null,value:n}=t;this.value=s?n:e.defaultValue,this._unsubscribe=s}teardown(){this._unsubscribe&&this._unsubscribe()}});function ga(e){return t=>{const i={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(ei,this)}disconnectedCallback(){this.removeEventListener(ei,this)}handleEvent(s){const{detail:n}=s;n.Context===i&&(n.value=this.value,n.unsubscribe=this.unsubscribe.bind(this,n.callback),this.listeners.add(n.callback),s.stopPropagation())}unsubscribe(s){this.listeners.delete(s)}set value(s){this._value=s;for(let n of this.listeners)n(s)}get value(){return this._value}},Consumer:e(function({render:s}){const n=pa(i);return s(n)},{useShadowDOM:!1}),defaultValue:t};return i}}const F=ft(class extends ht{value;values;constructor(e,t,i,s){super(e,t),this.value=i(),this.values=s}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((t,i)=>this.values[i]!==t)}}),E=(e,t)=>F(()=>e,t);function ma(e,t){e[Vt].push(t)}const ii=Gs(ma),G=ft(class extends ht{args;constructor(e,t,i){super(e,t),this.updater=this.updater.bind(this),typeof i=="function"&&(i=i()),this.makeArgs(i)}update(){return this.args}updater(e){const[t]=this.args;typeof e=="function"&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}}),_a=ft(class extends ht{reducer;currentState;constructor(e,t,i,s,n){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=n!==void 0?n(s):s}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}}),ya=/([A-Z])/gu,ba=ft(class extends ht{property;eventName;constructor(e,t,i,s){if(super(e,t),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=i,this.eventName=i.replace(ya,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof s=="function"&&(s=s()),s!=null&&this.updateProp(s))}update(e,t){return[this.state.host[this.property],this.updater]}updater(e){const t=this.state.host[this.property];typeof e=="function"&&(e=e(t)),!Object.is(t,e)&&this.updateProp(e)}updateProp(e){this.notify(e).defaultPrevented||(this.state.host[this.property]=e)}notify(e){const t=new CustomEvent(this.eventName,{detail:{value:e,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(t),t}});function Qs(e){return F(()=>({current:e}),[])}function va({render:e}){const t=da(e),i=ga(t);return{component:t,createContext:i}}const{component:rt}=va({render:Es}),Zs=ft(class extends ht{values;constructor(e,t,i,s){super(e,t),Object.assign(t.host,i),this.values=s}update(e,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((t,i)=>this.values[i]!==t)}}),pt=ft(class extends ht{update(){return this.state.host}}),wa=/([A-Z])/gu,is=(e,t,i)=>{e[t]=i,e.dispatchEvent(new CustomEvent(t.replace(wa,"-$1").toLowerCase()+"-changed",{detail:{value:i}}))},tn=e=>{const t=Qs(void 0),i=E(c=>t.current=c,[]),s=e.shadowRoot,n=E(c=>e.dispatchEvent(new Event(c.type,{bubbles:c.bubbles})),[]),r=E(c=>is(e,"value",c.target.value),[]),o=E(c=>is(e,"focused",c.type==="focus"),[]),a=E(()=>t.current?.focus(),[]),l=E(()=>{const c=t.current?.checkValidity();return e.toggleAttribute("invalid",!c),c},[]);return Zs({focus:a,validate:l},[a,l]),z(()=>{const c=u=>{u.defaultPrevented||e.disabled||u.target.matches("input, textarea, label")||(u.preventDefault(),e.matches(":focus-within")||a())};return s.addEventListener("mousedown",c),()=>s.removeEventListener("mousedown",c)},[a]),{onChange:n,onFocus:o,onInput:r,onRef:i}},xa=e=>F(()=>{if(e==null)return;const t=new RegExp(e,"u");return i=>{!i.defaultPrevented&&i.data&&!t.test(i.data)&&i.preventDefault()}},[e]);function D(e,t,i){return e?t(e):i?.(e)}const en=(e,{label:t,invalid:i,errorMessage:s})=>C`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${e}
				${D(t,()=>C`<label for="input" part="label">${t}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${D(i&&s,()=>C`<div class="error" part="error">${s}</div>`)}
	`,sn=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],Sa=({placeholder:e,noLabelFloat:t,label:i})=>(t?i:void 0)||e||" ",lt=(e,...t)=>e.flatMap((i,s)=>[i,t[s]??""]).join(""),gi=(...e)=>{const t=new CSSStyleSheet;return t.replaceSync(e.join("")),t},ss=lt`
	.wrap {
		--contour-color: var(--focused-color);
		background: var(--focused-bg);
	}

	#input::placeholder,
	label {
		color: var(--focused-color);
		opacity: 1;
	}

	.line {
		border-bottom-color: var(--focused-color);
	}

	.line::before {
		transform: none;
		transition: 0.25s transform ease;
	}
`,nn=lt`
	:host {
		--font-family: var(
			--cosmoz-input-font-family,
			var(--paper-font-subhead_-_font-family, inherit)
		);
		--font-size: var(
			--cosmoz-input-font-size,
			var(--paper-font-subhead_-_font-size, 16px)
		);
		--line-height: var(
			--cosmoz-input-line-height,
			var(--paper-font-subhead_-_line-height, 24px)
		);
		--label-scale: var(--cosmoz-input-label-scale, 0.75);
		--disabled-opacity: var(
			--cosmoz-input-disabled-opacity,
			var(--paper-input-container-disabled_-_opacity, 0.33)
		);
		--disabled-line-opacity: var(
			--cosmoz-input-disabled-line-opacity,
			var(--paper-input-container-underline-disabled_-_opacity, 1)
		);
		--invalid-color: var(
			--cosmoz-input-invalid-color,
			var(--paper-input-container-invalid-color, var(--error-color, #fc5c5b))
		);
		--bg: var(--cosmoz-input-background);
		--focused-bg: var(--cosmoz-input-focused-background, var(--bg));
		--color: var(--cosmoz-input-color, var(--secondary-text-color, #737373));
		--line-color: var(--cosmoz-input-line-color, var(--color));
		--focused-color: var(
			--cosmoz-input-focused-color,
			var(--primary-color, #3f51b5)
		);
		--float-display: var(--cosmoz-input-float-display, block);
		--contour-color: var(--line-color);
		--contour-size: var(--cosmoz-input-contour-size);
		--label-translate-y: var(--cosmoz-input-label-translate-y, 0%);
		--focused: var(--cosmoz-input-focused, none);

		display: block;
		padding: var(--cosmoz-input-padding, 8px 0);
		position: relative;
		max-height: var(--cosmoz-input-max-height);
		font-size: var(--font-size);
		line-height: var(--line-height);
		font-family: var(--font-family);
		caret-color: var(--focused-color);
	}

	:host([disabled]) {
		opacity: var(--disabled-opacity);
	}

	.float {
		line-height: calc(var(--line-height) * var(--label-scale));
		background-color: var(--cosmoz-input-float-bg-color, none);
		display: var(--float-display);
	}

	.wrap {
		padding: var(--cosmoz-input-wrap-padding, 0px);
		display: flex;
		align-items: center;
		position: relative;
		background: var(--bg);
		opacity: var(--cosmoz-input-opacity);
		border-radius: var(--cosmoz-input-border-radius);
		box-shadow: 0 0 0 var(--contour-size) var(--contour-color);
	}

	.control {
		flex: 1;
		position: relative;
	}

	#input {
		padding: 0;
		margin: 0;
		outline: none;
		border: none;
		width: 100%;
		max-width: 100%;
		display: block;
		background: transparent;
		line-height: inherit;
		font-size: inherit;
		font-family: inherit;
		resize: none;
	}

	label {
		position: absolute;
		top: 0;
		left: 0;
		width: var(--cosmoz-input-label-width, 100%);
		transition:
			transform 0.25s,
			width 0.25s;
		transform-origin: left top;
		color: var(--color);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		text-transform: var(--cosmoz-input-label-text-transform);
		font-weight: var(--cosmoz-input-label-font-weight);
		user-select: none;
	}

	.wrap:has(#input:not(:placeholder-shown)) {
		slot[name='suffix']::slotted(*),
		slot[name='prefix']::slotted(*) {
			transform: translateY(var(--label-translate-y));
		}
	}

	:host([always-float-label]) label,
	#input:not(:placeholder-shown) + label {
		transform: translateY(
				calc(var(--label-scale) * -100% + var(--label-translate-y))
			)
			scale(var(--label-scale));
		background-color: var(--cosmoz-input-floating-label-bg, var(--bg));
	}

	:host([always-float-label]) input,
	#input:not(:placeholder-shown) {
		transform: translateY(var(--label-translate-y));
	}

	:host([always-float-label]) {
		slot[name='suffix']::slotted(*),
		slot[name='prefix']::slotted(*) {
			transform: translateY(var(--label-translate-y));
		}
	}

	:host([no-label-float]) {
		.float,
		label {
			display: none;
		}

		#input:not(:placeholder-shown) {
			transform: translateY(0%);
		}

		.wrap:has(#input:not(:placeholder-shown)) slot[name='suffix']::slotted(*),
		.wrap:has(#input:not(:placeholder-shown)) slot[name='prefix']::slotted(*) {
			transform: translateY(0%);
		}
	}

	.line {
		padding-top: 1px;
		border-bottom: 1px solid var(--line-color);
		position: relative;
		display: var(--cosmoz-input-line-display, block);
	}

	.line::before {
		content: '';
		position: absolute;
		border-bottom: 2px solid transparent;
		border-bottom-color: inherit;
		left: 0;
		right: 0;
		top: 0;
		transform: scaleX(0);
		transform-origin: center center;
		z-index: 1;
	}

	:host([disabled]) .line {
		border-bottom-style: dashed;
		opacity: var(--disabled-line-opacity);
	}

	.error {
		font-size: 12px;
		line-height: 20px;
		overflow: hidden;
		text-overflow: clip;
		position: absolute;
		max-width: 100%;
	}

	:host([invalid]) {
		--contour-color: var(--invalid-color);
		caret-color: var(--invalid-color);
	}

	:host([invalid]) label,
	.error {
		color: var(--invalid-color);
	}
	:host([invalid]) .line {
		border-bottom-color: var(--invalid-color);
	}

	#input::-webkit-inner-spin-button {
		z-index: 1;
	}

	:host([no-spinner]) #input::-webkit-inner-spin-button {
		display: none;
	}
	:host([no-spinner]) #input {
		-moz-appearence: textfield;
	}

	:host([autosize]) {
		width: min-content;
	}
	:host([autosize]) #input {
		min-width: 2ch;
		width: var(--chars);
	}
	:host([autosize]) .control {
		max-width: 100%;
	}

	:host([autosize][type='number']) #input {
		--width: calc(var(--chars) + 0.25em);
	}
	:host([autosize][type='number']:not([no-spinner])) #input {
		width: calc(var(--width) + 15px);
		min-width: calc(2ch + 0.25em + 15px);
	}
	:host([autosize][type='number'][no-spinner]) #input {
		width: var(--width);
		min-width: calc(2ch + 0.25em);
	}
	:host([type='color']) .line {
		display: none;
	}

	:host(:focus-within) {
		${ss}
	}
	@container style(--focused: focused) {
		${ss}
	}
`,Ca=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...sn],Pa=e=>{const{type:t="text",pattern:i,allowedPattern:s,autocomplete:n,value:r,readonly:o,disabled:a,min:l,max:c,step:u,maxlength:d}=e,{onChange:h,onFocus:f,onInput:p,onRef:g}=tn(e),m=xa(s);return en(C`
			<input
				${qt(g)}
				style="--chars: ${r?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${R(i)}
				autocomplete=${R(n)}
				placeholder=${Sa(e)}
				?readonly=${o}
				?aria-disabled=${a}
				?disabled=${a}
				.value=${Le(r??"")}
				maxlength=${R(d)}
				@beforeinput=${m}
				@input=${p}
				@change=${h}
				@focus=${f}
				@blur=${f}
				min=${R(l)}
				max=${R(c)}
				step=${R(u)}
			/>
		`,e)};customElements.define("cosmoz-input",rt(Pa,{observedAttributes:Ca,styleSheets:[pi(nn)]}));const ns=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},Ea=(e,t=0)=>{if(t>0){const i=e.getAttribute("rows")??"",s=e.style.height;e.style.height="",e.setAttribute("rows",t),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=s,e.setAttribute("rows",i)}},Oa=e=>{const{value:t,maxRows:i}=e,s=F(()=>()=>e.shadowRoot.querySelector("#input"),[]);z(()=>Ea(s(),i),[i,s]),z(()=>ns(s()),[s,t]),z(()=>{const n=s(),r=new ResizeObserver(()=>requestAnimationFrame(()=>ns(n)));return r.observe(n),()=>r.unobserve(n)},[s])},$a=["rows","placeholder",...sn],La=e=>{const{autocomplete:t,value:i,placeholder:s,readonly:n,disabled:r,rows:o,cols:a,maxlength:l}=e,{onChange:c,onFocus:u,onInput:d,onRef:h}=tn(e);return Oa(e),en(C`
			<textarea id="input" part="input"
				${qt(h)}
				autocomplete=${R(t)}
				placeholder=${s||" "}
				rows=${o??1} cols=${R(a)}
				?readonly=${n} ?aria-disabled=${r} ?disabled=${r}
				.value=${Le(i??"")} maxlength=${R(l)} @input=${d}
				@change=${c} @focus=${u} @blur=${u}>`,e)};customElements.define("cosmoz-textarea",rt(La,{observedAttributes:$a,styleSheets:[pi(nn)]}));const Ta=e=>{const{label:t,value:i,disabled:s,error:n}=e,r=E(o=>e.dispatchEvent(new CustomEvent("change",{detail:o.target.checked})),[]);return C`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${Le(!!i)}
			?disabled=${s}
			@change=${r}
		/>
		${D(t,()=>C`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${D(n,o=>C`<div class="failure">${o}</div>`)} `},Aa=bt`
	.toggle {
		appearance: none;
		width: 35px;
		height: 18px;
		display: inline-block;
		position: relative;
		border-radius: 18px;
		overflow: hidden;
		outline: none;
		border: none;
		cursor: pointer;
		background: var(--cz-toggle-color, #101010);
		transition: background-color ease 0.25s;
		margin: 0;
	}
	.toggle::before {
		content: '';
		display: block;
		position: absolute;
		z-index: 2;
		width: 14px;
		height: 14px;
		background: var(--cz-toggle-thumb-color, #15b0d3);
		left: 2px;
		top: 2px;
		border-radius: 50%;
		transition: all cubic-bezier(0.3, 1.5, 0.7, 1) 0.25s;
	}
	.toggle:checked {
		background: var(--cz-toggle-checked-color, #66d7f0);
	}
	.toggle:checked::before {
		left: 19px;
	}
	.toggle + label {
		padding-left: 16px;
		font-size: 14px;
		line-height: 18px;
		cursor: pointer;
		user-select: none;
	}
	.toggle[disabled] {
		opacity: 0.6;
	}
`,Ra=bt`
	:host {
		display: block;
	}

	:host > * {
		vertical-align: middle;
		line-height: 0px;
	}

	::slotted(*) {
		margin-left: 5px;
	}
`;customElements.define("cosmoz-toggle",rt(Ta,{styleSheets:[Ra,Aa],observedAttributes:["disabled"]}));const ka=({slot:e,title:t,className:i,width:s="24",height:n="24",styles:r}={})=>C`
	<svg
		slot=${R(e)}
		class=${`clear-icon ${i??""}`}
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
		width=${s}
		height=${n}
		style=${R(r)}
	>
		${D(t,()=>li`<title>${t}</title>`)}
		<path
			d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
		/>
	</svg>
`,Na=({slot:e,title:t,className:i,width:s="24",height:n="24",styles:r}={})=>C`
	<svg
		slot=${R(e)}
		class=${`help-outline-icon ${i??""}`}
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
		width=${s}
		height=${n}
		style=${R(r)}
	>
		${D(t,()=>li`<title>${t}</title>`)}
		<path
			fill="currentColor"
			d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"
		/>
	</svg>
`,za=({slot:e,title:t,className:i,width:s="24",height:n="24",styles:r}={})=>C`
	<svg
		slot=${R(e)}
		class=${`warning-icon ${i??""}`}
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
		width=${s}
		height=${n}
		style=${R(r)}
	>
		${D(t,()=>li`<title>${t}</title>`)}
		<path
			d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
			fill="currentColor"
		/>
	</svg>
`,Ma=e=>D(e,()=>C`<span slot="prefix">${e}</span>`),Fa=e=>D(e,()=>C`<span slot="suffix">${e}</span>`),Da=(e,t="suffix")=>D(e,()=>za({slot:t,title:e,width:"22",height:"22",styles:"color: var(--paper-amber-500); vertical-align: middle"})),Ia=(e,t="suffix")=>D(e,()=>Na({slot:t,title:e,width:"22",height:"22",styles:"color: var(--cz-text-color); vertical-align: middle; cursor: help"})),ja=({prefix:e,suffix:t,warning:i,description:s})=>[Ma(e),Fa(t),Da(i),Ia(s)],Va=e=>{const{value:t,values:i,onFocus:s,onInput:n,...r}=e,{id:o,type:a="text",label:l,placeholder:c,noLabelFloat:u,alwaysFloatLabel:d,error:h,prefix:f,suffix:p,warning:g,allowedPattern:m,step:_,disabled:y,maxlength:b,min:v,max:w,autosize:$,noSpinner:S,title:A,description:N}=r;return C`<cosmoz-input
		class="input input-common input-${a}"
		name=${o}
		type=${a}
		?autosize=${$}
		?disabled=${y}
		?no-label-float=${u}
		?always-float-label=${d}
		?invalid=${!!h}
		?no-spinner=${!!S}
		.placeholder=${c}
		.errorMessage=${h}
		.allowedPattern=${m}
		.step=${_}
		.label=${l}
		.value=${t}
		title=${R((h??A)||void 0)}
		maxlength=${R(b)}
		min=${R(U(v,t,i,r))}
		max=${R(U(w,t,i,r))}
		@focus=${s}
		@input=${n}
		>${ja({prefix:f,suffix:p,warning:g,description:N})}</cosmoz-input
	>`},Ba=Zo(({onChange:e,...t})=>Va({...t,onInput:i=>e(i.target.value)})),Lt=Math.min,W=Math.max,we=Math.round,se=Math.floor,it=e=>({x:e,y:e}),Ha={left:"right",right:"left",bottom:"top",top:"bottom"},Ua={start:"end",end:"start"};function rs(e,t,i){return W(e,Lt(t,i))}function Te(e,t){return typeof e=="function"?e(t):e}function vt(e){return e.split("-")[0]}function Ae(e){return e.split("-")[1]}function rn(e){return e==="x"?"y":"x"}function on(e){return e==="y"?"height":"width"}const Ka=new Set(["top","bottom"]);function ct(e){return Ka.has(vt(e))?"y":"x"}function an(e){return rn(ct(e))}function Wa(e,t,i){i===void 0&&(i=!1);const s=Ae(e),n=an(e),r=on(n);let o=n==="x"?s===(i?"end":"start")?"right":"left":s==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(o=xe(o)),[o,xe(o)]}function Ya(e){const t=xe(e);return[si(e),t,si(t)]}function si(e){return e.replace(/start|end/g,t=>Ua[t])}const os=["left","right"],as=["right","left"],Ja=["top","bottom"],qa=["bottom","top"];function Ga(e,t,i){switch(e){case"top":case"bottom":return i?t?as:os:t?os:as;case"left":case"right":return t?Ja:qa;default:return[]}}function Xa(e,t,i,s){const n=Ae(e);let r=Ga(vt(e),i==="start",s);return n&&(r=r.map(o=>o+"-"+n),t&&(r=r.concat(r.map(si)))),r}function xe(e){return e.replace(/left|right|bottom|top/g,t=>Ha[t])}function Qa(e){return{top:0,right:0,bottom:0,left:0,...e}}function Za(e){return typeof e!="number"?Qa(e):{top:e,right:e,bottom:e,left:e}}function Se(e){const{x:t,y:i,width:s,height:n}=e;return{width:s,height:n,top:i,left:t,right:t+s,bottom:i+n,x:t,y:i}}function ls(e,t,i){let{reference:s,floating:n}=e;const r=ct(t),o=an(t),a=on(o),l=vt(t),c=r==="y",u=s.x+s.width/2-n.width/2,d=s.y+s.height/2-n.height/2,h=s[a]/2-n[a]/2;let f;switch(l){case"top":f={x:u,y:s.y-n.height};break;case"bottom":f={x:u,y:s.y+s.height};break;case"right":f={x:s.x+s.width,y:d};break;case"left":f={x:s.x-n.width,y:d};break;default:f={x:s.x,y:s.y}}switch(Ae(t)){case"start":f[o]-=h*(i&&c?-1:1);break;case"end":f[o]+=h*(i&&c?-1:1);break}return f}const tl=async(e,t,i)=>{const{placement:s="bottom",strategy:n="absolute",middleware:r=[],platform:o}=i,a=r.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(t));let c=await o.getElementRects({reference:e,floating:t,strategy:n}),{x:u,y:d}=ls(c,s,l),h=s,f={},p=0;for(let g=0;g<a.length;g++){const{name:m,fn:_}=a[g],{x:y,y:b,data:v,reset:w}=await _({x:u,y:d,initialPlacement:s,placement:h,strategy:n,middlewareData:f,rects:c,platform:o,elements:{reference:e,floating:t}});u=y??u,d=b??d,f={...f,[m]:{...f[m],...v}},w&&p<=50&&(p++,typeof w=="object"&&(w.placement&&(h=w.placement),w.rects&&(c=w.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:n}):w.rects),{x:u,y:d}=ls(c,h,l)),g=-1)}return{x:u,y:d,placement:h,strategy:n,middlewareData:f}};async function mi(e,t){var i;t===void 0&&(t={});const{x:s,y:n,platform:r,rects:o,elements:a,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:h=!1,padding:f=0}=Te(t,e),p=Za(f),m=a[h?d==="floating"?"reference":"floating":d],_=Se(await r.getClippingRect({element:(i=await(r.isElement==null?void 0:r.isElement(m)))==null||i?m:m.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),y=d==="floating"?{x:s,y:n,width:o.floating.width,height:o.floating.height}:o.reference,b=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a.floating)),v=await(r.isElement==null?void 0:r.isElement(b))?await(r.getScale==null?void 0:r.getScale(b))||{x:1,y:1}:{x:1,y:1},w=Se(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:y,offsetParent:b,strategy:l}):y);return{top:(_.top-w.top+p.top)/v.y,bottom:(w.bottom-_.bottom+p.bottom)/v.y,left:(_.left-w.left+p.left)/v.x,right:(w.right-_.right+p.right)/v.x}}const el=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var i,s;const{placement:n,middlewareData:r,rects:o,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:h,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:g=!0,...m}=Te(e,t);if((i=r.arrow)!=null&&i.alignmentOffset)return{};const _=vt(n),y=ct(a),b=vt(a)===a,v=await(l.isRTL==null?void 0:l.isRTL(c.floating)),w=h||(b||!g?[xe(a)]:Ya(a)),$=p!=="none";!h&&$&&w.push(...Xa(a,g,p,v));const S=[a,...w],A=await mi(t,m),N=[];let M=((s=r.flip)==null?void 0:s.overflows)||[];if(u&&N.push(A[_]),d){const k=Wa(n,o,v);N.push(A[k[0]],A[k[1]])}if(M=[...M,{placement:n,overflows:N}],!N.every(k=>k<=0)){var V,Z;const k=(((V=r.flip)==null?void 0:V.index)||0)+1,I=S[k];if(I&&(!(d==="alignment"?y!==ct(I):!1)||M.every(L=>ct(L.placement)===y?L.overflows[0]>0:!0)))return{data:{index:k,overflows:M},reset:{placement:I}};let J=(Z=M.filter(T=>T.overflows[0]<=0).sort((T,L)=>T.overflows[1]-L.overflows[1])[0])==null?void 0:Z.placement;if(!J)switch(f){case"bestFit":{var B;const T=(B=M.filter(L=>{if($){const j=ct(L.placement);return j===y||j==="y"}return!0}).map(L=>[L.placement,L.overflows.filter(j=>j>0).reduce((j,at)=>j+at,0)]).sort((L,j)=>L[1]-j[1])[0])==null?void 0:B[0];T&&(J=T);break}case"initialPlacement":J=a;break}if(n!==J)return{reset:{placement:J}}}return{}}}},il=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:i,y:s,placement:n}=t,{mainAxis:r=!0,crossAxis:o=!1,limiter:a={fn:m=>{let{x:_,y}=m;return{x:_,y}}},...l}=Te(e,t),c={x:i,y:s},u=await mi(t,l),d=ct(vt(n)),h=rn(d);let f=c[h],p=c[d];if(r){const m=h==="y"?"top":"left",_=h==="y"?"bottom":"right",y=f+u[m],b=f-u[_];f=rs(y,f,b)}if(o){const m=d==="y"?"top":"left",_=d==="y"?"bottom":"right",y=p+u[m],b=p-u[_];p=rs(y,p,b)}const g=a.fn({...t,[h]:f,[d]:p});return{...g,data:{x:g.x-i,y:g.y-s,enabled:{[h]:r,[d]:o}}}}}},sl=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var i,s;const{placement:n,rects:r,platform:o,elements:a}=t,{apply:l=()=>{},...c}=Te(e,t),u=await mi(t,c),d=vt(n),h=Ae(n),f=ct(n)==="y",{width:p,height:g}=r.floating;let m,_;d==="top"||d==="bottom"?(m=d,_=h===(await(o.isRTL==null?void 0:o.isRTL(a.floating))?"start":"end")?"left":"right"):(_=d,m=h==="end"?"top":"bottom");const y=g-u.top-u.bottom,b=p-u.left-u.right,v=Lt(g-u[m],y),w=Lt(p-u[_],b),$=!t.middlewareData.shift;let S=v,A=w;if((i=t.middlewareData.shift)!=null&&i.enabled.x&&(A=b),(s=t.middlewareData.shift)!=null&&s.enabled.y&&(S=y),$&&!h){const M=W(u.left,0),V=W(u.right,0),Z=W(u.top,0),B=W(u.bottom,0);f?A=p-2*(M!==0||V!==0?M+V:W(u.left,u.right)):S=g-2*(Z!==0||B!==0?Z+B:W(u.top,u.bottom))}await l({...t,availableWidth:A,availableHeight:S});const N=await o.getDimensions(a.floating);return p!==N.width||g!==N.height?{reset:{rects:!0}}:{}}}};function Re(){return typeof window<"u"}function At(e){return ln(e)?(e.nodeName||"").toLowerCase():"#document"}function Y(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function ot(e){var t;return(t=(ln(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function ln(e){return Re()?e instanceof Node||e instanceof Y(e).Node:!1}function X(e){return Re()?e instanceof Element||e instanceof Y(e).Element:!1}function nt(e){return Re()?e instanceof HTMLElement||e instanceof Y(e).HTMLElement:!1}function cs(e){return!Re()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Y(e).ShadowRoot}const nl=new Set(["inline","contents"]);function Gt(e){const{overflow:t,overflowX:i,overflowY:s,display:n}=Q(e);return/auto|scroll|overlay|hidden|clip/.test(t+s+i)&&!nl.has(n)}const rl=new Set(["table","td","th"]);function ol(e){return rl.has(At(e))}const al=[":popover-open",":modal"];function ke(e){return al.some(t=>{try{return e.matches(t)}catch{return!1}})}const ll=["transform","translate","scale","rotate","perspective"],cl=["transform","translate","scale","rotate","perspective","filter"],ul=["paint","layout","strict","content"];function _i(e){const t=yi(),i=X(e)?Q(e):e;return ll.some(s=>i[s]?i[s]!=="none":!1)||(i.containerType?i.containerType!=="normal":!1)||!t&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!t&&(i.filter?i.filter!=="none":!1)||cl.some(s=>(i.willChange||"").includes(s))||ul.some(s=>(i.contain||"").includes(s))}function dl(e){let t=dt(e);for(;nt(t)&&!Tt(t);){if(_i(t))return t;if(ke(t))return null;t=dt(t)}return null}function yi(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const hl=new Set(["html","body","#document"]);function Tt(e){return hl.has(At(e))}function Q(e){return Y(e).getComputedStyle(e)}function Ne(e){return X(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function dt(e){if(At(e)==="html")return e;const t=e.assignedSlot||e.parentNode||cs(e)&&e.host||ot(e);return cs(t)?t.host:t}function cn(e){const t=dt(e);return Tt(t)?e.ownerDocument?e.ownerDocument.body:e.body:nt(t)&&Gt(t)?t:cn(t)}function Yt(e,t,i){var s;t===void 0&&(t=[]),i===void 0&&(i=!0);const n=cn(e),r=n===((s=e.ownerDocument)==null?void 0:s.body),o=Y(n);if(r){const a=ni(o);return t.concat(o,o.visualViewport||[],Gt(n)?n:[],a&&i?Yt(a):[])}return t.concat(n,Yt(n,[],i))}function ni(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function un(e){const t=Q(e);let i=parseFloat(t.width)||0,s=parseFloat(t.height)||0;const n=nt(e),r=n?e.offsetWidth:i,o=n?e.offsetHeight:s,a=we(i)!==r||we(s)!==o;return a&&(i=r,s=o),{width:i,height:s,$:a}}function bi(e){return X(e)?e:e.contextElement}function $t(e){const t=bi(e);if(!nt(t))return it(1);const i=t.getBoundingClientRect(),{width:s,height:n,$:r}=un(t);let o=(r?we(i.width):i.width)/s,a=(r?we(i.height):i.height)/n;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const fl=it(0);function dn(e){const t=Y(e);return!yi()||!t.visualViewport?fl:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function pl(e,t,i){return t===void 0&&(t=!1),!i||t&&i!==Y(e)?!1:t}function wt(e,t,i,s){t===void 0&&(t=!1),i===void 0&&(i=!1);const n=e.getBoundingClientRect(),r=bi(e);let o=it(1);t&&(s?X(s)&&(o=$t(s)):o=$t(e));const a=pl(r,i,s)?dn(r):it(0);let l=(n.left+a.x)/o.x,c=(n.top+a.y)/o.y,u=n.width/o.x,d=n.height/o.y;if(r){const h=Y(r),f=s&&X(s)?Y(s):s;let p=h,g=ni(p);for(;g&&s&&f!==p;){const m=$t(g),_=g.getBoundingClientRect(),y=Q(g),b=_.left+(g.clientLeft+parseFloat(y.paddingLeft))*m.x,v=_.top+(g.clientTop+parseFloat(y.paddingTop))*m.y;l*=m.x,c*=m.y,u*=m.x,d*=m.y,l+=b,c+=v,p=Y(g),g=ni(p)}}return Se({width:u,height:d,x:l,y:c})}function ze(e,t){const i=Ne(e).scrollLeft;return t?t.left+i:wt(ot(e)).left+i}function hn(e,t){const i=e.getBoundingClientRect(),s=i.left+t.scrollLeft-ze(e,i),n=i.top+t.scrollTop;return{x:s,y:n}}function gl(e){let{elements:t,rect:i,offsetParent:s,strategy:n}=e;const r=n==="fixed",o=ot(s),a=t?ke(t.floating):!1;if(s===o||a&&r)return i;let l={scrollLeft:0,scrollTop:0},c=it(1);const u=it(0),d=nt(s);if((d||!d&&!r)&&((At(s)!=="body"||Gt(o))&&(l=Ne(s)),nt(s))){const f=wt(s);c=$t(s),u.x=f.x+s.clientLeft,u.y=f.y+s.clientTop}const h=o&&!d&&!r?hn(o,l):it(0);return{width:i.width*c.x,height:i.height*c.y,x:i.x*c.x-l.scrollLeft*c.x+u.x+h.x,y:i.y*c.y-l.scrollTop*c.y+u.y+h.y}}function ml(e){return Array.from(e.getClientRects())}function _l(e){const t=ot(e),i=Ne(e),s=e.ownerDocument.body,n=W(t.scrollWidth,t.clientWidth,s.scrollWidth,s.clientWidth),r=W(t.scrollHeight,t.clientHeight,s.scrollHeight,s.clientHeight);let o=-i.scrollLeft+ze(e);const a=-i.scrollTop;return Q(s).direction==="rtl"&&(o+=W(t.clientWidth,s.clientWidth)-n),{width:n,height:r,x:o,y:a}}const us=25;function yl(e,t){const i=Y(e),s=ot(e),n=i.visualViewport;let r=s.clientWidth,o=s.clientHeight,a=0,l=0;if(n){r=n.width,o=n.height;const u=yi();(!u||u&&t==="fixed")&&(a=n.offsetLeft,l=n.offsetTop)}const c=ze(s);if(c<=0){const u=s.ownerDocument,d=u.body,h=getComputedStyle(d),f=u.compatMode==="CSS1Compat"&&parseFloat(h.marginLeft)+parseFloat(h.marginRight)||0,p=Math.abs(s.clientWidth-d.clientWidth-f);p<=us&&(r-=p)}else c<=us&&(r+=c);return{width:r,height:o,x:a,y:l}}const bl=new Set(["absolute","fixed"]);function vl(e,t){const i=wt(e,!0,t==="fixed"),s=i.top+e.clientTop,n=i.left+e.clientLeft,r=nt(e)?$t(e):it(1),o=e.clientWidth*r.x,a=e.clientHeight*r.y,l=n*r.x,c=s*r.y;return{width:o,height:a,x:l,y:c}}function ds(e,t,i){let s;if(t==="viewport")s=yl(e,i);else if(t==="document")s=_l(ot(e));else if(X(t))s=vl(t,i);else{const n=dn(e);s={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return Se(s)}function fn(e,t){const i=dt(e);return i===t||!X(i)||Tt(i)?!1:Q(i).position==="fixed"||fn(i,t)}function wl(e,t){const i=t.get(e);if(i)return i;let s=Yt(e,[],!1).filter(a=>X(a)&&At(a)!=="body"),n=null;const r=Q(e).position==="fixed";let o=r?dt(e):e;for(;X(o)&&!Tt(o);){const a=Q(o),l=_i(o);!l&&a.position==="fixed"&&(n=null),(r?!l&&!n:!l&&a.position==="static"&&!!n&&bl.has(n.position)||Gt(o)&&!l&&fn(e,o))?s=s.filter(u=>u!==o):n=a,o=dt(o)}return t.set(e,s),s}function xl(e){let{element:t,boundary:i,rootBoundary:s,strategy:n}=e;const o=[...i==="clippingAncestors"?ke(t)?[]:wl(t,this._c):[].concat(i),s],a=o[0],l=o.reduce((c,u)=>{const d=ds(t,u,n);return c.top=W(d.top,c.top),c.right=Lt(d.right,c.right),c.bottom=Lt(d.bottom,c.bottom),c.left=W(d.left,c.left),c},ds(t,a,n));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Sl(e){const{width:t,height:i}=un(e);return{width:t,height:i}}function Cl(e,t,i){const s=nt(t),n=ot(t),r=i==="fixed",o=wt(e,!0,r,t);let a={scrollLeft:0,scrollTop:0};const l=it(0);function c(){l.x=ze(n)}if(s||!s&&!r)if((At(t)!=="body"||Gt(n))&&(a=Ne(t)),s){const f=wt(t,!0,r,t);l.x=f.x+t.clientLeft,l.y=f.y+t.clientTop}else n&&c();r&&!s&&n&&c();const u=n&&!s&&!r?hn(n,a):it(0),d=o.left+a.scrollLeft-l.x-u.x,h=o.top+a.scrollTop-l.y-u.y;return{x:d,y:h,width:o.width,height:o.height}}function Je(e){return Q(e).position==="static"}function hs(e,t){if(!nt(e)||Q(e).position==="fixed")return null;if(t)return t(e);let i=e.offsetParent;return ot(e)===i&&(i=i.ownerDocument.body),i}function pn(e,t){const i=Y(e);if(ke(e))return i;if(!nt(e)){let n=dt(e);for(;n&&!Tt(n);){if(X(n)&&!Je(n))return n;n=dt(n)}return i}let s=hs(e,t);for(;s&&ol(s)&&Je(s);)s=hs(s,t);return s&&Tt(s)&&Je(s)&&!_i(s)?i:s||dl(e)||i}const Pl=async function(e){const t=this.getOffsetParent||pn,i=this.getDimensions,s=await i(e.floating);return{reference:Cl(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}};function El(e){return Q(e).direction==="rtl"}const Ol={convertOffsetParentRelativeRectToViewportRelativeRect:gl,getDocumentElement:ot,getClippingRect:xl,getOffsetParent:pn,getElementRects:Pl,getClientRects:ml,getDimensions:Sl,getScale:$t,isElement:X,isRTL:El};function gn(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function $l(e,t){let i=null,s;const n=ot(e);function r(){var a;clearTimeout(s),(a=i)==null||a.disconnect(),i=null}function o(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),r();const c=e.getBoundingClientRect(),{left:u,top:d,width:h,height:f}=c;if(a||t(),!h||!f)return;const p=se(d),g=se(n.clientWidth-(u+h)),m=se(n.clientHeight-(d+f)),_=se(u),b={rootMargin:-p+"px "+-g+"px "+-m+"px "+-_+"px",threshold:W(0,Lt(1,l))||1};let v=!0;function w($){const S=$[0].intersectionRatio;if(S!==l){if(!v)return o();S?o(!1,S):s=setTimeout(()=>{o(!1,1e-7)},1e3)}S===1&&!gn(c,e.getBoundingClientRect())&&o(),v=!1}try{i=new IntersectionObserver(w,{...b,root:n.ownerDocument})}catch{i=new IntersectionObserver(w,b)}i.observe(e)}return o(!0),r}function Ll(e,t,i,s){s===void 0&&(s={});const{ancestorScroll:n=!0,ancestorResize:r=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=s,c=bi(e),u=n||r?[...c?Yt(c):[],...Yt(t)]:[];u.forEach(_=>{n&&_.addEventListener("scroll",i,{passive:!0}),r&&_.addEventListener("resize",i)});const d=c&&a?$l(c,i):null;let h=-1,f=null;o&&(f=new ResizeObserver(_=>{let[y]=_;y&&y.target===c&&f&&(f.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var b;(b=f)==null||b.observe(t)})),i()}),c&&!l&&f.observe(c),f.observe(t));let p,g=l?wt(e):null;l&&m();function m(){const _=wt(e);g&&!gn(g,_)&&i(),g=_,p=requestAnimationFrame(m)}return i(),()=>{var _;u.forEach(y=>{n&&y.removeEventListener("scroll",i),r&&y.removeEventListener("resize",i)}),d?.(),(_=f)==null||_.disconnect(),f=null,l&&cancelAnimationFrame(p)}}const Tl=il,Al=el,Rl=sl,kl=(e,t,i)=>{const s=new Map,n={platform:Ol,...i},r={...n.platform,_c:s};return tl(e,t,{...n,platform:r})},mn=[Al({fallbackAxisSideDirection:"start",crossAxis:!1}),Tl()],Nl=({placement:e="bottom-start",strategy:t,middleware:i=mn}={})=>{const[s,n]=G(),[r,o]=G(),[a,l]=G();return z(()=>{if(!s||!(r instanceof HTMLElement)){l(void 0);return}return Ll(s,r,()=>kl(s,r,{placement:e,strategy:t,middleware:i}).then(l))},[s,r,e,t,i]),{setReference:n,setFloating:o,styles:F(()=>a?{left:`${a.x}px`,top:`${a.y}px`}:{},[a?.x,a?.y])}};class zl{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}let Ml=class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}};const fs=e=>!zn(e)&&typeof e.then=="function",ps=1073741823;let Fl=class extends fi{constructor(){super(...arguments),this._$Cwt=ps,this._$Cbt=[],this._$CK=new zl(this),this._$CX=new Ml}render(...t){return t.find(i=>!fs(i))??q}update(t,i){const s=this._$Cbt;let n=s.length;this._$Cbt=i;const r=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<i.length&&!(a>this._$Cwt);a++){const l=i[a];if(!fs(l))return this._$Cwt=a,l;a<n&&l===s[a]||(this._$Cwt=ps,n=0,Promise.resolve(l).then(async c=>{for(;o.get();)await o.get();const u=r.deref();if(u!==void 0){const d=u._$Cbt.indexOf(l);d>-1&&d<u._$Cwt&&(u._$Cwt=d,u.setValue(c))}}))}return q}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const Ce=Ct(Fl);const gs=(e,t,i)=>{const s=new Map;for(let n=t;n<=i;n++)s.set(e[n],n);return s},_n=Ct(class extends Jt{constructor(e){if(super(e),e.type!==tt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let s;i===void 0?i=t:t!==void 0&&(s=t);const n=[],r=[];let o=0;for(const a of e)n[o]=s?s(a,o):o,r[o]=i(a,o),o++;return{values:r,keys:n}}render(e,t,i){return this.dt(e,t,i).values}update(e,[t,i,s]){const n=Mn(e),{values:r,keys:o}=this.dt(t,i,s);if(!Array.isArray(n))return this.ut=o,r;const a=this.ut??=[],l=[];let c,u,d=0,h=n.length-1,f=0,p=r.length-1;for(;d<=h&&f<=p;)if(n[d]===null)d++;else if(n[h]===null)h--;else if(a[d]===o[f])l[f]=gt(n[d],r[f]),d++,f++;else if(a[h]===o[p])l[p]=gt(n[h],r[p]),h--,p--;else if(a[d]===o[p])l[p]=gt(n[d],r[p]),Rt(e,l[p+1],n[d]),d++,p--;else if(a[h]===o[f])l[f]=gt(n[h],r[f]),Rt(e,n[d],n[h]),h--,f++;else if(c===void 0&&(c=gs(o,f,p),u=gs(a,d,h)),c.has(a[d]))if(c.has(a[h])){const g=u.get(o[f]),m=g!==void 0?n[g]:null;if(m===null){const _=Rt(e,n[d]);gt(_,r[f]),l[f]=_}else l[f]=gt(m,r[f]),Rt(e,n[d],m),n[g]=null;f++}else Ie(n[h]),h--;else Ie(n[d]),d++;for(;f<=p;){const g=Rt(e,l[p+1]);gt(g,r[f]),l[f++]=g}for(;d<=h;){const g=n[d++];g!==null&&Ie(g)}return this.ut=o,Ps(e,l),q}});class Me extends Event{constructor(t){super(Me.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}Me.eventName="rangeChanged";class Fe extends Event{constructor(t){super(Fe.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}Fe.eventName="visibilityChanged";class De extends Event{constructor(){super(De.eventName,{bubbles:!1})}}De.eventName="unpinned";class Dl{constructor(t){this._element=null;const i=t??window;this._node=i,t&&(this._element=t)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class Il extends Dl{constructor(t,i){super(i),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const s=this._node;this._originalScrollTo=s.scrollTo,this._originalScrollBy=s.scrollBy,this._originalScroll=s.scroll,this._attach(t)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(t,i){const s=typeof t=="number"&&typeof i=="number"?{left:t,top:i}:t;this._scrollTo(s)}scrollBy(t,i){const s=typeof t=="number"&&typeof i=="number"?{left:t,top:i}:t;s.top!==void 0&&(s.top+=this.scrollTop),s.left!==void 0&&(s.left+=this.scrollLeft),this._scrollTo(s)}_nativeScrollTo(t){this._originalScrollTo.bind(this._element||window)(t)}_scrollTo(t,i=null,s=null){this._end!==null&&this._end(),t.behavior==="smooth"?(this._setDestination(t),this._retarget=i,this._end=s):this._resetScrollState(),this._nativeScrollTo(t)}_setDestination(t){let{top:i,left:s}=t;return i=i===void 0?void 0:Math.max(0,Math.min(i,this.maxScrollTop)),s=s===void 0?void 0:Math.max(0,Math.min(s,this.maxScrollLeft)),this._destination!==null&&s===this._destination.left&&i===this._destination.top?!1:(this.__destination={top:i,left:s,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(t){this._destination&&this._setDestination(t)&&this._nativeScrollTo(this._destination)}managedScrollTo(t,i,s){return this._scrollTo(t,i,s),this._updateManagedScrollTo}correctScrollError(t){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(t),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:t,scrollLeft:i}=this;let{top:s,left:n}=this._destination;s=Math.min(s||0,this.maxScrollTop),n=Math.min(n||0,this.maxScrollLeft);const r=Math.abs(s-t),o=Math.abs(n-i);r<1&&o<1&&(this._end&&this._end(),this._resetScrollState())}}detach(t){return this._clients.delete(t),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(t){this._clients.add(t),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let ms=typeof window<"u"?window.ResizeObserver:void 0;const ri=Symbol("virtualizerRef"),ne="virtualizer-sizer";let _s;class jl{constructor(t){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!t)throw new Error("Virtualizer constructor requires a configuration object");if(t.hostElement)this._init(t);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(t){Array.isArray(t)&&t!==this._items&&(this._itemsChanged=!0,this._items=t,this._schedule(this._updateLayout))}_init(t){this._isScroller=!!t.scroller,this._initHostElement(t);const i=t.layout||{};this._layoutInitialized=this._initLayout(i)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new ms(()=>this._hostElementSizeChanged()),this._childrenRO=new ms(this._childrenSizeChanged.bind(this))}_initHostElement(t){const i=this._hostElement=t.hostElement;this._applyVirtualizerStyles(),i[ri]=this}connected(){this._initObservers();const t=this._isScroller;this._clippingAncestors=Hl(this._hostElement,t),this._scrollerController=new Il(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(t=>{t.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(t),this._hostElementRO.observe(t)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(t=>this._childrenRO.observe(t)),this._scrollEventListeners.forEach(t=>t.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(t=>t.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const i=this._hostElement.style;i.display=i.display||"block",i.position=i.position||"relative",i.contain=i.contain||"size layout",this._isScroller&&(i.overflow=i.overflow||"auto",i.minHeight=i.minHeight||"150px")}_getSizer(){const t=this._hostElement;if(!this._sizer){let i=t.querySelector(`[${ne}]`);i||(i=document.createElement("div"),i.setAttribute(ne,""),t.appendChild(i)),Object.assign(i.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),i.textContent="&nbsp;",i.setAttribute(ne,""),this._sizer=i}return this._sizer}async updateLayoutConfig(t){await this._layoutInitialized;const i=t.type||_s;if(typeof i=="function"&&this._layout instanceof i){const s={...t};return delete s.type,this._layout.config=s,!0}return!1}async _initLayout(t){let i,s;if(typeof t.type=="function"){s=t.type;const n={...t};delete n.type,i=n}else i=t;s===void 0&&(_s=s=(await Fn(()=>import("./flow-BqIEBwW6.js"),[],import.meta.url)).FlowLayout),this._layout=new s(n=>this._handleLayoutMessage(n),i),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const t=window.performance.now(),i=t-this._benchmarkStart,n=performance.getEntriesByName("uv-virtualizing","measure").filter(r=>r.startTime>=this._benchmarkStart&&r.startTime<t).reduce((r,o)=>r+o.duration,0);return this._benchmarkStart=null,{timeElapsed:i,virtualizationTime:n}}return null}_measureChildren(){const t={},i=this._children,s=this._measureChildOverride||this._measureChild;for(let n=0;n<i.length;n++){const r=i[n],o=this._first+n;(this._itemsChanged||this._toBeMeasured.has(r))&&(t[o]=s.call(this,r,this._items[o]))}this._childMeasurements=t,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(t){const{width:i,height:s}=t.getBoundingClientRect();return Object.assign({width:i,height:s},Vl(t))}async _schedule(t){this._scheduled.has(t)||(this._scheduled.add(t),await Promise.resolve(),this._scheduled.delete(t),t.call(this))}async _updateDOM(t){this._scrollSize=t.scrollSize,this._adjustRange(t.range),this._childrenPos=t.childPositions,this._scrollError=t.scrollError||null;const{_rangeChanged:i,_itemsChanged:s}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(i||s)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(t=>this._childrenRO.observe(t)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(t){console.warn("Error measuring performance data: ",t)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(t){t.type==="scroll"?(t.currentTarget===window||this._clippingAncestors.includes(t.currentTarget))&&this._handleScrollEvent():console.warn("event not handled",t)}_handleLayoutMessage(t){t.type==="stateChanged"?this._updateDOM(t):t.type==="visibilityChanged"?(this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._notifyVisibility()):t.type==="unpinned"&&this._hostElement.dispatchEvent(new De)}get _children(){const t=[];let i=this._hostElement.firstElementChild;for(;i;)i.hasAttribute(ne)||t.push(i),i=i.nextElementSibling;return t}_updateView(){const t=this._hostElement,i=this._scrollerController?.element,s=this._layout;if(t&&i&&s){let n,r,o,a;const l=t.getBoundingClientRect();n=0,r=0,o=window.innerHeight,a=window.innerWidth;const c=this._clippingAncestors.map(_=>_.getBoundingClientRect());c.unshift(l);for(const _ of c)n=Math.max(n,_.top),r=Math.max(r,_.left),o=Math.min(o,_.bottom),a=Math.min(a,_.right);const u=i.getBoundingClientRect(),d={left:l.left-u.left,top:l.top-u.top},h={width:i.scrollWidth,height:i.scrollHeight},f=n-l.top+t.scrollTop,p=r-l.left+t.scrollLeft,g=Math.max(0,o-n),m=Math.max(0,a-r);s.viewportSize={width:m,height:g},s.viewportScroll={top:f,left:p},s.totalScrollSize=h,s.offsetWithinScroller=d}}_sizeHostElement(t){const s=t&&t.width!==null?Math.min(82e5,t.width):0,n=t&&t.height!==null?Math.min(82e5,t.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${s}px, ${n}px)`;else{const r=this._hostElement.style;r.minWidth=s?`${s}px`:"100%",r.minHeight=n?`${n}px`:"100%"}}_positionChildren(t){t&&t.forEach(({top:i,left:s,width:n,height:r,xOffset:o,yOffset:a},l)=>{const c=this._children[l-this._first];c&&(c.style.position="absolute",c.style.boxSizing="border-box",c.style.transform=`translate(${s}px, ${i}px)`,n!==void 0&&(c.style.width=n+"px"),r!==void 0&&(c.style.height=r+"px"),c.style.left=o===void 0?null:o+"px",c.style.top=a===void 0?null:a+"px")})}async _adjustRange(t){const{_first:i,_last:s,_firstVisible:n,_lastVisible:r}=this;this._first=t.first,this._last=t.last,this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==i||this._last!==s,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==n||this._lastVisible!==r}_correctScrollError(){if(this._scrollError){const{scrollTop:t,scrollLeft:i}=this._scrollerController,{top:s,left:n}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:t-s,left:i-n})}}element(t){return t===1/0&&(t=this._items.length-1),this._items?.[t]===void 0?void 0:{scrollIntoView:(i={})=>this._scrollElementIntoView({...i,index:t})}}_scrollElementIntoView(t){if(t.index>=this._first&&t.index<=this._last)this._children[t.index-this._first].scrollIntoView(t);else if(t.index=Math.min(t.index,this._items.length-1),t.behavior==="smooth"){const i=this._layout.getScrollIntoViewCoordinates(t),{behavior:s}=t;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(i,{behavior:s}),()=>this._layout.getScrollIntoViewCoordinates(t),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=t}else this._layout.pin=t}_checkScrollIntoViewTarget(t){const{index:i}=this._scrollIntoViewTarget||{};i&&t?.has(i)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new Me({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new Fe({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((t,i)=>{this._layoutCompleteResolver=t,this._layoutCompleteRejecter=i})),this._layoutCompletePromise}_rejectLayoutCompletePromise(t){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(t),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(t){if(this._layout?.measureChildren){for(const i of t)this._toBeMeasured.set(i.target,i.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function Vl(e){const t=window.getComputedStyle(e);return{marginTop:re(t.marginTop),marginRight:re(t.marginRight),marginBottom:re(t.marginBottom),marginLeft:re(t.marginLeft)}}function re(e){const t=e?parseFloat(e):NaN;return Number.isNaN(t)?0:t}function ys(e){if(e.assignedSlot!==null)return e.assignedSlot;if(e.parentElement!==null)return e.parentElement;const t=e.parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host||null}function Bl(e,t=!1){const i=[];let s=t?e:ys(e);for(;s!==null;)i.push(s),s=ys(s);return i}function Hl(e,t=!1){let i=!1;return Bl(e,t).filter(s=>{if(i)return!1;const n=getComputedStyle(s);return i=n.position==="fixed",n.overflow!=="visible"})}const Ul=e=>e,Kl=(e,t)=>C`${t}: ${JSON.stringify(e,null,2)}`;class Wl extends fi{constructor(t){if(super(t),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(i,s)=>Kl(i,s+this._first),this._keyFunction=(i,s)=>Ul(i,s+this._first),this._items=[],t.type!==tt.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(t){t&&this._setFunctions(t);const i=[];if(this._first>=0&&this._last>=this._first)for(let s=this._first;s<=this._last;s++)i.push(this._items[s]);return _n(i,this._keyFunction,this._renderItem)}update(t,[i]){this._setFunctions(i);const s=this._items!==i.items;return this._items=i.items||[],this._virtualizer?this._updateVirtualizerConfig(t,i):this._initialize(t,i),s?q:this.render()}async _updateVirtualizerConfig(t,i){if(!await this._virtualizer.updateLayoutConfig(i.layout||{})){const n=t.parentNode;this._makeVirtualizer(n,i)}this._virtualizer.items=this._items}_setFunctions(t){const{renderItem:i,keyFunction:s}=t;i&&(this._renderItem=(n,r)=>i(n,r+this._first)),s&&(this._keyFunction=(n,r)=>s(n,r+this._first))}_makeVirtualizer(t,i){this._virtualizer&&this._virtualizer.disconnected();const{layout:s,scroller:n,items:r}=i;this._virtualizer=new jl({hostElement:t,layout:s,scroller:n}),this._virtualizer.items=r,this._virtualizer.connected()}_initialize(t,i){const s=t.parentNode;s&&s.nodeType===1&&(s.addEventListener("rangeChanged",n=>{this._first=n.first,this._last=n.last,this.setValue(this.render())}),this._makeVirtualizer(s,i))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}}const Yl=Ct(Wl),Jl=(e=HTMLElement)=>class extends e{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},ql=(e,t)=>{if(!e||!t)return;const i=Object.keys(t);return Object.fromEntries(Object.keys(e).flatMap(s=>i.includes(s)?[]:[[s,void 0]]))};class Gl extends Jt{_props;render(t){return q}update(t,[i]){return this._props!==i&&Object.assign(t.element,ql(this._props,i),this._props=i),q}}const Xl=Ct(Gl),Ql=e=>{const t=pt(),i=F(()=>new CSSStyleSheet,[]);z(()=>{t.shadowRoot.adoptedStyleSheets=[...t.shadowRoot.adoptedStyleSheets,i]},[]),z(()=>{i.replaceSync(e)},[e])};const yn="important",Zl=" !"+yn,tc=Ct(class extends Jt{constructor(e){if(super(e),e.type!==tt.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const s=e[i];return s==null?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(e,[t]){const{style:i}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const s of this.ft)t[s]==null&&(this.ft.delete(s),s.includes("-")?i.removeProperty(s):i[s]=null);for(const s in t){const n=t[s];if(n!=null){this.ft.add(s);const r=typeof n=="string"&&n.endsWith(Zl);s.includes("-")||r?i.setProperty(s,r?n.slice(0,-11):n,r?yn:""):i[s]=n}}return q}}),ec="data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 1L5.20039 7.04766L1.66348 3.46152' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",ic=bt`
	:host {
		position: fixed;
		z-index: 1000;
		font-family: var(--paper-font-subhead_-_font-family, inherit);
		background: var(
			--cosmoz-autocomplete-listbox-bg,
			rgba(255, 255, 255, 0.75)
		);
		min-width: 50px;
		backdrop-filter: blur(16px) saturate(180%);
		-webkit-backdrop-filter: blur(16px) saturate(180%);
		border-radius: 6px;
		box-shadow:
			0 4px 24px 0 rgba(0, 0, 0, 0.18),
			0 1.5px 6px 0 rgba(0, 0, 0, 0.1);
		text-transform: var(--cosmoz-autocomplete-listbox-text-transform, initial);
		overflow: hidden;
		transition:
			opacity 150ms ease-in-out,
			transform 100ms ease-in-out;
	}
	:host(:popover-open) {
		box-sizing: border-box;
		display: block;
		margin: 0;
		border: 1px solid rgba(200, 200, 200, 0.25);

		opacity: 1;
		transform: translateY(0);

		@starting-style {
			opacity: 0;
			transform: translateY(-50px);
		}
	}
	:host([popover]) {
		padding: 0;
	}
	.items {
		position: relative;
		overflow-y: auto;
		contain: layout paint !important;
	}
	.item {
		font-size: var(--cosmoz-autocomplete-listbox-font-size, 13px);
		font-weight: var(--cosmoz-autocomplete-listbox-font-weight, 400);
		padding: 0 22px;
		box-sizing: border-box;
		width: 100%;
		cursor: pointer;
		text-overflow: ellipsis;
		white-space: nowrap;
		transition: background 0.2s;
		color: var(--cosmoz-listbox-color, #101010);
		overflow: hidden;
	}

	.sizer {
		position: relative;
		visibility: hidden;
		opacity: 0;
		pointer-events: none;
		z-index: -1;
		height: 0;
		width: auto;
		padding: 0 20px;
		overflow: hidden;
		max-width: inherit;
		font-size: 14px;
	}

	:host(:not([multi])) .item[aria-selected] {
		background: var(--cosmoz-listbox-single-selection-color, #dadada);
	}

	:host([multi]) .item {
		padding-left: 0;
	}

	:host([multi]) .item::before {
		content: '';
		font-size: 0;
		padding: 7.5px;
		margin: 0 8px;
		background: #fff;
		border: 1px solid #d6d6d5;
		border-radius: 4px;
		vertical-align: top;
	}

	:host([multi]) .item[aria-selected]::before {
		border-color: #5881f6;
		/* prettier-ignore */
		background: url("${ec}") #5881f6 no-repeat 50%;
	}

	:host([multi]) .sizer {
		padding-left: 33px;
	}

	.swatch {
		width: 18px;
		height: 18px;
		display: inline-block;
		box-sizing: border-box;
		vertical-align: middle;
		border-radius: 50%;
	}

	[virtualizer-sizer]:not(.sizer) {
		line-height: 1;
	}
`,sc=({index:e,itemHeight:t,auto:i})=>bt`
	${D(!i,()=>bt`
			.item {
				line-height: ${t}px;
				height: ${t}px;
			}
		`)}

	.item[data-index='${e||"0"}'] {
		background: var(
			--cosmoz-listbox-active-color,
			var(--cosmoz-selection-color, rgba(58, 145, 226, 0.1))
		);
	}
`,nc=e=>{const t=e==="auto",[i,s]=G(t?40:e);return[i,n=>t?s(n):void 0]},Xt=e=>{const t=F(()=>({}),[]);return F(()=>Object.assign(t,e),[t,...Object.values(e)])},rc=e=>{const t=Xt(e);z(()=>{const i=s=>{if(!(s.ctrlKey&&s.altKey||s.defaultPrevented))switch(s.key){case"Up":case"ArrowUp":s.preventDefault(),t.onUp();break;case"Down":case"ArrowDown":s.preventDefault(),t.onDown();break;case"Enter":s.preventDefault(),t.onEnter();break}};return document.addEventListener("keydown",i,!0),()=>document.removeEventListener("keydown",i,!0)},[t])},oc=({items:e,onSelect:t,defaultIndex:i=0})=>{const[s,n]=G({index:i}),{index:r}=s,{length:o}=e;return z(()=>{n({index:s.index<0?i:Math.min(s.index,e.length-1),scroll:!0})},[e,i]),rc({onUp:E(()=>n(a=>({index:a.index>0?a.index-1:o-1,scroll:!0})),[o]),onDown:E(()=>n(a=>({index:a.index<o-1?a.index+1:0,scroll:!0})),[o]),onEnter:E(()=>r>-1&&r<o&&t?.(e[r],r),[r,e,t])}),{position:s,highlight:E(a=>n({index:a}),[]),select:E(a=>t?.(a),[t])}},ac=(e,t)=>t?i=>ut(e).find(s=>s[t]===i[t]):i=>ut(e).includes(i),lc=(e,t)=>{if(!t||!e)return e;const i=e.toLowerCase().indexOf(t.toLowerCase());if(i<0)return e;const s=i+t.length;return[e.slice(0,i),C`<mark>${e.slice(i,s)}</mark>`,e.slice(s)]},cc=(e=ue)=>(t,i,{highlight:s,select:n,textual:r=ue,query:o,isSelected:a})=>{const l=r(t),c=lc(l,o),u=e(c,t,i);return C`<div
				class="item"
				role="option"
				part="option"
				?aria-selected=${a(t)}
				data-index=${i}
				@mouseenter=${()=>s(i)}
				@click=${()=>n(t)}
				@mousedown=${d=>d.preventDefault()}
				title=${l}
			>
				${u}
			</div>
			<div class="sizer" virtualizer-sizer>${u}</div>`},uc=({itemRenderer:e=cc(),...t})=>{const i=Xt(t);return E((s,n)=>e(s,n,i),[i,e])},dc=["query","items","onSelect","textual","anchor","itemHeight","itemLimit","itemRenderer","defaultIndex","value","valueProperty","loading"],hc=({value:e,valueProperty:t,items:i,onSelect:s,defaultIndex:n,query:r,textual:o,itemRenderer:a,itemHeight:l=40,itemLimit:c=5})=>{const u=F(()=>ac(e,t),[e,t]),d=F(()=>i.slice(),[i,u]),{position:h,highlight:f,select:p}=oc({items:d,onSelect:s,defaultIndex:isNaN(n)?void 0:Number(n)}),[g,m]=nc(l);return{position:h,items:d,height:Math.min(c,d.length)*g,highlight:f,select:p,itemHeight:g,setItemHeight:m,renderItem:uc({itemRenderer:a,items:d,position:h,highlight:f,select:p,textual:o,query:r,isSelected:u})}},bs=jn,fc=e=>{const t=Qs(void 0),{position:i,items:s,renderItem:n,height:r,itemHeight:o,setItemHeight:a}=hc(e);return z(()=>{const l=t.current?.[ri];l&&l.layoutComplete.then(()=>{e.dispatchEvent(new CustomEvent("layout-complete"));const{averageChildSize:c,averageMarginSize:u}=l._layout._metricsCache;return a(c+u*2)},bs)},[s]),z(()=>{if(!i.scroll)return;const l=t.current?.[ri];if(l){if(!l?._layout){l.layoutComplete.then(()=>l.element(i.index)?.scrollIntoView({block:"nearest"}),bs);return}l.element(i.index)?.scrollIntoView({block:"nearest"})}},[i]),Ql(sc({...i,itemHeight:o,auto:e.itemHeight==="auto"})),C`<div
			class="items"
			style="min-height: ${r}px"
			${qt(l=>t.current=l)}
		>
			<div virtualizer-sizer></div>
			${Yl({items:s,renderItem:n,scroller:!0})}
		</div>
		<slot></slot>`};customElements.define("cosmoz-listbox",Jl(rt(fc,{styleSheets:[gi(ic)]})));const pc=({multi:e,setFloating:t,styles:i,...s},n)=>C`<cosmoz-listbox
		style="${tc(i)}"
		@connected="${r=>r.target.showPopover?.()}"
		popover="manual"
		part="listbox"
		?multi=${e}
		${qt(t)}
		...=${Xl(Hn(dc)(s))}
		>${n}</cosmoz-listbox
	>`,gc=lt`
	:host {
		border-radius: var(--cosmoz-autocomplete-chip-border-radius, 500px);
		background: var(--cosmoz-autocomplete-chip-bg-color, #cbcfdb);
		margin-bottom: 2px;
		display: flex;
		align-items: center;
		flex: 0.0001 1 fit-content;
		max-width: 18ch;
		min-width: 40px;
		padding-inline: 8px;
		gap: 4px;
		cursor: pointer;
		transform: translateY(var(--cosmoz-autocomplete-chip-translate-y, 0));
	}

	.content {
		color: var(--cosmoz-autocomplete-chip-color, #424242);
		font-family: var(
			--cosmoz-autocomplete-chip-text-font-family,
			'Inter',
			sans-serif
		);
		font-size: var(--cosmoz-autocomplete-chip-text-font-size, 12px);
		font-weight: var(--cosmoz-autocomplete-chip-text-font-weight, 400);
		line-height: var(--cosmoz-autocomplete-chip-text-line-height, 22px);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		flex: auto;
		min-width: 16px;
	}

	.clear {
		background-color: var(--cosmoz-autocomplete-chip-clear-bg-color, #81899b);
		border-radius: 50%;
		cursor: pointer;
		width: 16px;
		height: 16px;
		margin-right: -4px;
		stroke: var(
			--cosmoz-autocomplete-chip-clear-stroke,
			var(--cosmoz-autocomplete-chip-bg-color, #cbcfdb)
		);
		display: var(--cosmoz-autocomplete-chip-clear-display, block);
		flex: none;
	}

	.clear:hover {
		filter: brightness(90%);
	}
	.clear svg {
		display: block;
		transform: translate(3.5px, 3.5px);
	}
`,mc=C`
	<svg
		width="9"
		height="8"
		viewBox="0 0 9 8"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<line
			x1="7.53033"
			y1="0.994808"
			x2="1.16637"
			y2="7.35877"
			stroke-width="1.5"
		/>
		<line
			x1="7.46967"
			y1="7.35882"
			x2="1.10571"
			y2="0.99486"
			stroke-width="1.5"
		/>
	</svg>
`,_c=({onClear:e,disabled:t})=>C`
	<div class="content" part="content chip-text"><slot></slot></div>
	${D(e&&!t,()=>C`<span
				class="clear"
				part="clear chip-clear"
				@mousedown=${i=>i.preventDefault()}
				@click=${e}
			>
				${mc}
			</span>`)}
`;customElements.define("cosmoz-autocomplete-chip",rt(_c,{observedAttributes:["disabled"],styleSheets:[gi(gc)]}));const yc=({content:e,onClear:t,disabled:i,hidden:s,className:n="chip",slot:r})=>C`<cosmoz-autocomplete-chip
		class=${R(n)}
		slot=${R(r)}
		part="chip"
		exportparts="chip-text, chip-clear"
		?disabled=${i}
		?hidden=${s}
		.onClear=${t}
		title=${R(typeof e=="string"?e:void 0)}
		>${e}</cosmoz-autocomplete-chip
	>`,bc=({value:e,min:t=0,onDeselect:i,textual:s,disabled:n,chipRenderer:r=yc})=>[...e.filter(Boolean).map(o=>r({item:o,content:s(o),onClear:e.length>t&&(()=>i(o)),disabled:n,slot:"control"})),r({item:null,content:C`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],vc=bt`
	:host {
		display: inline-block;
		vertical-align: middle;
		background-image: linear-gradient(90deg, #e0e0e0, #f5f5f5, #e0e0e0);
		background-size: 1000%;
		background-position: right;
		animation: sweep 1.5s cubic-bezier(0.3, 1, 0.3, 1) infinite;
		border-radius: 3px;
		width: calc(100% - 20px);
		max-width: 150px;
		height: 20px;
		margin: 10px;
	}

	:host-context([show-single]) {
		margin-left: 20px;
	}

	@keyframes sweep {
		0% {
			background-position: right;
		}
		100% {
			background-position: left;
		}
	}
`;customElements.define("cosmoz-autocomplete-skeleton-span",rt(()=>st,{styleSheets:[vc]}));const wc=lt`
	:host {
		display: block;
		position: relative;
		min-width: 35px;
	}

	cosmoz-input::part(control) {
		display: flex;
		gap: 4px;
		min-width: 35px;
	}
	cosmoz-input::part(input) {
		flex: 1 24px;
		min-width: 0;
	}
	cosmoz-input:not([data-one])::part(input):focus {
		flex: 4 0.00001 50px;
		min-width: 20px;
	}
	.badge {
		min-width: initial;
		flex: none;
		text-align: center;
		padding: 0 4px;
	}

	[data-single]::part(input) {
		flex: 0;
	}
	[data-one] .chip {
		max-width: initial;
		flex: 1;
	}

	[data-one] .badge {
		display: none;
	}

	[hidden] {
		display: none;
	}

	:host([wrap]) cosmoz-input::part(control) {
		flex-wrap: wrap;
	}
	:host([wrap]) .chip {
		max-width: 100%;
	}

	slot {
		display: contents !important;
	}
`,vs=e=>e.matches(":focus-within"),xc=({disabled:e,onFocus:t})=>{const[i,s]=G(),{focused:n,closed:r}=i||{},o=n&&!e,a=Xt({closed:r,onFocus:t}),l=E(u=>s(d=>({...d,closed:u})),[]),c=E(u=>{const d=u.currentTarget;return vs(d)?s(h=>({focused:!0,closed:!h?.closed})):d.focus()},[]);return z(()=>{if(!o)return;const u=d=>{if(d.defaultPrevented)return;const{closed:h}=a;d.key==="Escape"&&!h?(d.preventDefault(),l(!0)):["ArrowUp","Up"].includes(d.key)&&h&&(d.preventDefault(),l(!1))};return document.addEventListener("keydown",u,!0),()=>document.removeEventListener("keydown",u,!0)},[o]),{focused:o,active:o&&!r,setClosed:l,onToggle:c,onFocus:E(u=>{const d=vs(u.currentTarget);s({focused:d}),a.onFocus?.(d)},[a])}},vi=(e,t=()=>({}))=>{const i={type:e,toString(){return e}};return Object.assign((...n)=>Object.assign(t(...n),i),i)},ws=e=>e.type||e.toString(),xs=e=>Array.isArray(e)?e:[e],Sc=(e,t)=>{const i=xs(t),s=(i.every(Array.isArray)?i:[i]).map(([n,r])=>({actions:xs(n).map(ws),handle:r}));return(n=e,r)=>{const o=s.find(a=>a.actions.includes(ws(r)));return o?o.handle(n,r):n}},yt={pending:"pending",rejected:"rejected",resolved:"resolved"},bn={error:void 0,result:void 0,state:yt.pending},vn=vi(yt.pending),wn=vi(yt.resolved,e=>({result:e})),xn=vi(yt.rejected,e=>({error:e})),Cc=Sc(bn,[[vn,()=>({error:void 0,result:void 0,state:yt.pending})],[wn,(e,{result:t})=>({error:void 0,result:t,state:yt.resolved})],[xn,(e,{error:t})=>({error:t,result:void 0,state:yt.rejected})]]),Pc=e=>{const[{error:t,result:i,state:s},n]=_a(Cc,bn);return z(()=>{if(!e)return;let r=!1;return n(vn()),e.then(o=>!r&&n(wn(o)),o=>!r&&n(xn(o))),()=>{r=!0}},[e]),[i,t,s]},Ec=({focused:e,empty:t,...i})=>{const s=e&&t&&i.limit!==1,n=Xt(i);z(()=>{if(!s)return;const r=o=>{if(o.defaultPrevented)return;const{key:a}=o,l=ut(n.value),c=n.limit==1;if(l.length>0&&(a==="Backspace"||c&&a.length===1))return n.onChange(l.slice(0,-1))};return document.addEventListener("keydown",r,!0),()=>document.removeEventListener("keydown",r,!0)},[s,n])},Ss=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),Oc=(e,t,i)=>{if(!t)return e;const s=Ss(t.toLowerCase()),n=[];for(const r of e){const a=Ss(i(r).toLowerCase()).indexOf(s);a<0||n.push({item:r,index:a})}return n.sort((r,o)=>r.index-o.index).map(({item:r})=>r)},$c=e=>e===!1||e==null?[]:e,Sn=(e,t,i)=>e.dispatchEvent(new CustomEvent(t,{detail:i})),Lc=(e,t,i)=>E(s=>{t?.(s),Sn(e,i,s)},[t]),Tc=[],Ac=e=>(...t)=>{let i;const s=()=>{i&&cancelAnimationFrame(i)};return s(),i=requestAnimationFrame(()=>{i=void 0,e(...t)}),s},Rc=({value:e,text:t,onChange:i,onText:s,onSelect:n,limit:r,min:o,source:a,textProperty:l,textual:c,valueProperty:u,keepOpened:d,keepQuery:h,preserveOrder:f,defaultIndex:p,externalSearch:g,...m})=>{const _=F(()=>(c??Bn)(l),[c,l]),{active:y,focused:b,onFocus:v,setClosed:w}=xc(m),$=!t,S=F(()=>t?.trim(),[t]),A=pt(),N=Lc(A,s,"text"),M=E(T=>{i?.(T,()=>w(!0)),Sn(A,"value",T)},[i]),[V,Z]=G([]),B=F(()=>Promise.resolve(typeof a=="function"?a({query:S,active:y}):a).then($c),[a,y,S]),k=F(()=>ut(e),[e]);z(()=>B.then(Z),[B]),Ec({focused:b,empty:$,limit:r,value:k,onChange:M,onText:N}),z(()=>{!b&&!h&&N("")},[b,h]);const I=Xt({onText:N,onChange:M,value:k,limit:r,min:o,keepQuery:h,keepOpened:d,setClosed:w,onSelect:n}),[,,J]=Pc(B);return{active:y,query:S,textual:_,value:k,source$:B,loading:J==="pending",items:F(()=>{if(!y)return Tc;const T=f?V:[...k,...je(k,Os(u))(V)];return g?T:Oc(T,S,_)},[V,y,S,_,$,k,f,u,g]),onClick:E(()=>w(!1),[]),onFocus:v,onText:E(T=>{N(T.target.value),w(!1)},[N,t,w]),onSelect:E(T=>{I.onSelect?.(T,I);const{onChange:L,onText:j,limit:at,min:Qt,value:An,keepQuery:Rn,keepOpened:kn,setClosed:Nn}=I;Rn||j(""),kn||Nn(!0);const Zt=ut(An),wi=Zt.includes(T);wi&&Zt.length===Qt||L((wi?je(T)(Zt):[...Zt,T]).slice(-at))},[I]),onDeselect:E(T=>I.onChange(je(T)(I.value)),[I]),defaultIndex:S!==void 0&&S?.length>0?0:p}},kc=e=>{const t=e.shadowRoot.querySelectorAll(".chip"),i=e.shadowRoot.querySelector(".badge");i.hidden=!0;for(const a of t)a.hidden=!1;const n=e.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let r;for(r=0;r<t.length;r++){const l=t[r].getBoundingClientRect();if(!(l.x+l.width<=n.x+n.width-24))break}const o=t.length-r;for(i.querySelector("span").textContent="+"+o.toString(),i.hidden=o<1;r<t.length;r++)t[r].hidden=!0},Nc=({value:e,active:t,wrap:i,limit:s})=>{const n=pt(),r=!(i||s==1),o=F(()=>Ac(()=>kc(n)),[]),[a,l]=G(0);ii(()=>{if(!r)return;const c=n.shadowRoot.querySelector("cosmoz-input"),u=new ResizeObserver(d=>{l(d[0].contentRect.width)});return u.observe(c),()=>u.disconnect()},[r]),ii(()=>r?o():void 0,[r,a,t,e])},zc=["input","control","label","line","error","wrap"].map(e=>`${e}: input-${e}`).join(),Mc=[Rl({apply({rects:e,elements:t}){Object.assign(t.floating.style,{minWidth:`${Math.max(e.reference.width,e.floating.width)}px`})}}),...mn],Fc=({active:e,isSingle:t,showSingle:i})=>e?!(t&&!i):!1,Dc=e=>{const{active:t,invalid:i,errorMessage:s,label:n,placeholder:r,disabled:o,noLabelFloat:a,alwaysFloatLabel:l,textual:c,text:u,onText:d,onFocus:h,onClick:f,onDeselect:p,value:g,limit:m,min:_,showSingle:y,items:b,source$:v,placement:w,loading:$,chipRenderer:S}=e,A=pt(),N=m==1,M=N&&g?.[0]!=null,{styles:V,setReference:Z,setFloating:B}=Nl({placement:w,middleware:Mc});z(()=>(A.addEventListener("focusin",h),A.addEventListener("focusout",h),()=>{A.removeEventListener("focusin",h),A.removeEventListener("focusout",h)}),[h]),Zs({focus:()=>A.shadowRoot?.querySelector("#input")?.focus()},[]);const k=$||b.length>0||u!=null&&u.length>0;return C`<cosmoz-input
				id="input"
				part="input"
				${qt(Z)}
				.label=${n}
				.placeholder=${M?void 0:r}
				?no-label-float=${a}
				?always-float-label=${g?.length>0||l}
				?readonly=${M}
				?disabled=${o}
				?invalid=${Ce(v.then(()=>i,()=>!0),i)}
				.errorMessage=${Ce(v.then(()=>s,I=>I.message),s)}
				.value=${Le(u)}
				@value-changed=${d}
				@click=${f}
				autocomplete="off"
				exportparts=${zc}
				?data-one=${N}
				?data-single=${M}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${bc({value:g,min:_,onDeselect:p,textual:c,disabled:o,chipRenderer:S})}
			</cosmoz-input>

			${D(Fc({active:t,isSingle:M,showSingle:y}),()=>pc({...e,items:b,multi:!N,setFloating:B,styles:{...V,display:k?void 0:"none"}},D($,()=>C`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>D(u!=null&&u.length>0&&b.length===0,()=>C`<slot name="no-result"></slot>`))))}`},Cn=e=>{const t={...e,...Rc(e)};return Nc(t),Dc(t)},Pn=["disabled","invalid","no-label-float","always-float-label","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap"],Ic=e=>{const{onChange:t,onText:i,...s}=e,[n,r]=ba("value");return z(()=>{e.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),Cn({...s,value:n,onChange:E((o,...a)=>{r(o),t?.(o,...a)},[t]),onText:E(o=>{e.text=o,i?.(o)},[i])})},En=[gi(wc)];customElements.define("cosmoz-autocomplete-ui",rt(Cn,{observedAttributes:Pn,styleSheets:En}));customElements.define("cosmoz-autocomplete",rt(Ic,{observedAttributes:Pn,styleSheets:En}));lt`
	.input-inline-file {
		position: relative;
	}

	.input-inline-file svg {
		margin-right: 5px;
	}

	.input-inline-file > .file {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		opacity: 0;
		cursor: pointer;
	}
`;C`<svg
	xmlns="http://www.w3.org/2000/svg"
	width="18"
	height="18"
	viewBox="0 0 24 24"
>
	<g
		fill="none"
		stroke="#000"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2"
	>
		<path
			d="M18 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7.1a2 2 0 0 1 1.5.6l4.9 5.2a2 2 0 0 1 .5 1.4V20a2 2 0 0 1-2 2ZM7.9 17.5h8.2M7.9 13.5h8.2M8 9.5h5"
		/>
	</g>
</svg>`;const oi=Symbol("touched");function ai(e,t=!0){if(e==null)return;const i=e;return t?i[oi]=!0:delete i[oi],e}const On=e=>ai(e,!1),$n=e=>!!e?.[oi],jc=({field:e,values:t,...i})=>{const s=($n(t)&&(t?.[Wo]?.[e.id]??e.error))??!1,n=t?.[e.path??e.id];return(e.input??Ba)({...i,error:s,value:n,field:e,values:t})},Vc=({fields:e,...t})=>_n(e??[],({id:i})=>i,i=>jc({field:i,fields:e,...t})),Bc=({fields:e,selector:t=""})=>(e??[]).map(({id:i,styles:s})=>s?`${t}[name="${String(i)}"] { ${Object.entries(s).map(([n,r])=>`${n}:${r}`).join(";")} }`:"").join(`
`);lt`
	.headers {
		display: flex;
		border-bottom: solid 1px #ccc;
		font-weight: 400;
		font-size: 16px;
		padding: 10px 0 10px 0;
		width: 100%;
	}
	.header {
		flex: auto;
		margin: 0 4px;
		flex: 1 1 0px;
	}
	.items {
		min-height: 100px;
		width: 100%;
		position: relative;
		overflow: auto;
		flex: auto;
	}
	.item {
		display: flex;
		width: 100%;
	}
	.input {
		flex: 1 1 0px;
	}
	.item > .input {
		margin: 0 4px;
	}
	.item cosmoz-input::part(error),
	.item cosmoz-autocomplete::part(input-error) {
		position: static;
		margin-bottom: -10px;
	}
	.input-basic {
		font-size: 16px;
		line-height: 24px;
		border-bottom: 2px solid var(--secondary-text-color, #737373);
		margin: 8px 4px;
	}
	.remove {
		background: none;
		border: none;
		outline: none;
		cursor: pointer;
		width: 24px;
		height: 24px;
		align-self: center;
		flex: none;
		margin: 0 8px;
		padding: 0;
	}
	.remove[disabled] {
		opacity: 0;
		pointer-events: none;
	}
`;const Hc=(e,t)=>!t||e.some((i,s)=>!Object.is(t[s],i)),ce=({oldItem:e,newItem:t,rules:i,index:s,oldIndex:n=s})=>i?i.reduce((r,[o,a])=>e&&a&&!Hc(a(r,s),a(e,n))?r:{...r,...o(r,e,s,n)},t):t,Uc=(e,t,i)=>{const[,s]=e;return{values:s,onReset:E(()=>t(([n])=>[n,n]),[t]),onValues:E((n,r=!0)=>t(([o,a])=>[o,ai(ce({oldItem:a,newItem:U(n,a),rules:i}),r)]),[i,t]),onChange:E((n,r=!0)=>t(([o,a])=>[o,ai(ce({oldItem:a,newItem:{...a,...U(n,a)},rules:i}),r)]),[i,t]),load:E((n,r)=>{if(!n){t([n,n]);return}const o=On(ce({oldItem:void 0,newItem:n,rules:r??i}));t([o,o])},[i,t]),touched:F(()=>$n(s),[s])}},Kc=(e,t)=>On(ce({oldItem:void 0,newItem:e,rules:t})),Ln=(e,t=[])=>{const i=e.filter(s=>s?.rules!=null).flatMap(s=>s?.rules);return[...t,...i]},Wc=(e,t,{fields:i,rules:s})=>{const n=F(()=>U(i)??[],[i]),r=F(()=>Ln(n,s),[n,s]),o=Uc(e,t,r),{values:a}=o;return{...F(()=>Go(n,a),[n,a]),...o}},Yc=e=>{const[t,i]=G(()=>{const s=U(e.fields)??[],n=Ln(s,e.rules),r=Kc(e.initial,n);return[r,r]});return Wc(t,i,e)};function Jc({fields:e,initial:t,rules:i,onSave:s,allowEmpty:n}){const r=Yc({fields:e,initial:t,rules:i}),{values:o,invalid:a}=r,[l,c]=G(),[u,d]=G(),h=o==null||o===t,f=r.fields?.length>0&&!(h&&n)&&(h||a);return{...r,save$:l,onSave:E(()=>c(s?.(o,t,d)),[s,o,t]),disabled:f,progress:u}}Es(st,new DocumentFragment).constructor;class qc extends HTMLElement{onDisconnect;disconnectedCallback(){this.onDisconnect?.()}}customElements.define("disconnect-observer",qc);const Gc=lt`
	:host {
		display: flex;
		flex-direction: column;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 550px;
		max-width: 98vw;
		max-height: 96vh;
		border-radius: 10px;
	}
	:host([backdrop]) {
		box-shadow: 0 0 0 100vmax rgb(0, 0, 0, 0.6);
		z-index: 10;
	}
	:host([backdrop])::before {
		content: '';
		display: block;
		position: absolute;
		z-index: -1;
		top: -100vh;
		bottom: -100vh;
		right: -100vw;
		left: -100vw;
	}
	:host::after {
		content: '';
		display: block;
		z-index: -1;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		pointer-events: none;
		box-shadow:
			0 16px 24px 2px #00000024,
			0 6px 30px 5px #0000001f,
			0 8px 10px -5px #0006;
	}
	.title {
		display: flex;
		padding: var(--dialog-title-padding, 22px 24px);
		padding-bottom: 0px;
		color: var(--dialog-title-color, #00000);
		background-color: var(--dialog-title-background-color, #fff);
		font-size: var(--dialog-title-font-size, 20px);
		font-weight: var(--dialog-title-font-weight, 400);
		line-height: 1.4;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		border-bottom: 1px solid var(--dialog-title-background-color, #fff);
	}
	:host(:not([unmovable])) .title {
		cursor: move;
		user-select: none;
	}

	.content {
		background: var(--cosmoz-dialog-background-color, #fff);
		overflow: hidden;
		display: flex;
		flex-direction: column;
		border-bottom-right-radius: 10px;
		border-bottom-left-radius: 10px;
	}

	.close {
		display: flex;
		background-color: transparent;
		margin: 0 0 0 auto;
		padding-right: 0;
		padding-left: 0;
		min-width: unset;
		min-height: unset;
		border: unset;
		cursor: pointer;
	}
`,Xc=()=>{const e=pt(),t=E(()=>{e.dispatchEvent(new Event("close")),e.onClose?.()},[]);return z(()=>{const i=o=>{o.preventDefault(),t()},s=e.shadowRoot,n=o=>o.target.value==="cancel"&&i(o),r=o=>!o.defaultPrevented&&o.key==="Escape"&&i(o);return s.addEventListener("click",n),document.addEventListener("keydown",r,!0),()=>{s.removeEventListener("click",n),document.removeEventListener("keydown",r,!0)}},[]),{close:t}},Qc=()=>{const e=pt(),{manualFocus:t}=e;ii(()=>{!t&&!e.matches(":focus-within")&&(e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex"))},[t])},Zc=(e,t,i)=>{const s=e.width/3,n=e.height/3,r=Math.min(window.innerWidth-2*s,Math.max(-s,t)),o=Math.min(window.innerHeight-2*n,Math.max(-n,i));return{x:r,y:o}},tu=(e,t,i,s)=>n=>{if(!n.target.closest(t))return;const r=Zc,o=e.getBoundingClientRect(),a=n.clientX-o.x,l=n.clientY-o.y,c=(h,f)=>{const p=h-a,g=f-l,m=r(o,p,g);Object.assign(e.style,{left:m.x+"px",top:m.y+"px",transform:"initial"})},u=h=>c(h.clientX,h.clientY),d=h=>{document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",d)};document.addEventListener("mousemove",u),document.addEventListener("mouseup",d)},eu=()=>{const e=pt(),{unmovable:t}=e;z(()=>{if(t)return;const i=e.shadowRoot;if(!i)return;const s=tu(e,".title");return i.addEventListener("mousedown",s),()=>i.removeEventListener("mousedown",s)},[t])},iu=()=>{Xc(),eu(),Qc()},su=({title:e,content:t,styles:i,closeable:s=!1})=>{const n=pt();return C`
		<style>
			${Gc}${i}
		</style>
		<div class="title" part="title">
			${e}
			${D(s,()=>C`
					<button
						class="close"
						@click=${()=>{n.dispatchEvent(new Event("close")),n.onClose?.()}}
					>
						${ka()}
					</button>
				`)}
		</div>
		<div class="content" part="content">${t}</div>
	`},Tn=(e,{observedAttributes:t,styles:i,...s}={})=>rt(n=>(iu(),su({title:n.heading||n.title,content:e(n),styles:i,closeable:n.closeable})),{observedAttributes:["title","heading","manual-focus","unmovable","closeable",...t??[]],...s});customElements.define("cosmoz-dialog-loading",Tn(()=>C`
			<style>
				.content {
					flex-direction: row;
					align-items: center;
					justify-content: center;
					padding: 30px;
				}
				cz-spinner {
					width: 32px;
					height: 32px;
					margin-right: 12px;
				}
			</style>
			<cz-spinner></cz-spinner>
			<slot></slot>
		`));const nu=lt`
	.button {
		font-family: inherit;
	}
	.button:not([slot='bottom-bar-menu']),
	.file::-webkit-file-upload-button,
	.file::file-selector-button {
		background: var(--cosmoz-button-bg-color, #101010);
		color: var(--cosmoz-button-color, #fff);
		box-sizing: border-box;
		cursor: pointer;
		outline: none;
		flex: none;
		border: none;
		padding: 0 18px;
		border-radius: 6px;
		min-height: 40px;
		min-width: 78px;
		font-family: inherit;
		font-size: 14px;
		font-weight: 500;
		line-height: 40px;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.button:not([slot='bottom-bar-menu']):hover,
	.button:not([slot='bottom-bar-menu']):active,
	.file::-webkit-file-upload-button:hover,
	.file::file-selector-button:hover {
		background: var(--cosmoz-button-hover-bg-color, #3a3f44);
	}
	.button[disabled],
	.button:disabled {
		opacity: var(--cosmoz-button-disabled-opacity, 0.15);
		pointer-events: none;
	}
	.button:active {
		background: hsl(
			from var(--cosmoz-button-hover-bg-color, #3a3f44) h s calc(l + 10)
		);
	}
	a.button {
		text-decoration: none;
	}
	.buttons {
		display: flex;
		justify-content: flex-end;
		padding: 8px 8px 8px 24px;
	}
	.buttons .button {
		margin: 0 4px;
	}
	.button-ricon {
		border: none;
		border-radius: 50%;
		fill: #596679;
		padding: 8px;
		display: inline-flex;
		background: transparent;
		cursor: pointer;
		transition: background 0.15s ease;
	}
	.button-ricon:active {
		background: rgb(56, 62, 74, 0.15);
	}
	.actionButton {
		border: solid 1px #a4abae;
		background: #fff;
		border-radius: 500px;
		font-size: 1.08em;
		letter-spacing: -0.01em;
		padding: 0.5em 0.9em;
		cursor: pointer;
		display: flex;
		align-items: center;
		overflow: hidden;
		justify-content: center;
		white-space: nowrap;
		transition: background 0.25s;
	}
	.actionButton:hover {
		background: #f0f0f0;
	}
	.actionButton span {
		overflow: hidden;
		text-overflow: ellipsis;
		min-width: 10px;
	}

	.actionButton iron-icon {
		margin-left: 4px;
		flex: none;
		--iron-icon-width: 18px;
		--iron-icon-height: 18px;
	}
	.actionButton iron-icon:hover {
		color: var(--cz-accent-color);
	}
`,ru=()=>st,ou=(e,t)=>Promise.resolve(e).then(t,t),au=e=>Ce(e?.then(ru,t=>C`<div class="failure">${t.message}</div>`),st),lu=({save$:e,progress:t,...i})=>{const s=({onSave:n,onClick:r=n,title:o,disabled:a,progress:l,content:c=st,slot:u})=>C` <button
			class="button save"
			slot=${R(u)}
			?disabled=${a}
			?data-progress=${l}
			@click=${d=>(d.stopPropagation(),r())}
		>
			${c} ${o}
		</button>`;return Ce(ou(e,()=>s(i)),s({...i,disabled:!0,progress:!0,content:C`<cz-spinner></cz-spinner> ${D(t,n=>n.join("/"))}`}))},cu=bt`
	@keyframes rotating {
		100% {
			transform: rotate(360deg);
		}
	}

	:host {
		--cosmoz-spinner-width: 20px;
		--cosmoz-spinner-height: 20px;
		display: inline-block;
		vertical-align: middle;
		border-radius: 50%;
		width: var(--cosmoz-spinner-width, 22px);
		height: var(--cosmoz-spinner-height, 22px);
		border: 2px solid rgba(0, 0, 0, 0.1);
		border-top: 2px solid #5f5a92;
		animation: rotating 1.2s infinite cubic-bezier(0.785, 0.135, 0.15, 0.86);
		box-sizing: border-box;
		margin: 0 4px;
		flex: none !important;
	}
`,uu=()=>st,du=rt(uu,{styleSheets:[cu]});customElements.define("cosmoz-spinner",du);const hu=lt`
	.description {
		padding: 0 24px;
	}
	.description * {
		line-height: normal;
	}
	.form {
		overflow-y: auto;
		display: flex;
		flex-direction: column;
	}
	.input {
		margin-top: 20px;
		padding: 0px 24px 4px 24px;
	}
	.input:last-child {
		margin-bottom: 16px;
	}
	.save {
		font-weight: bold;
	}
	.save[data-progress] {
		opacity: 0.6;
	}
	.failure {
		color: #fc5c5b;
		align-self: center;
		flex: 1;
	}
	cz-spinner {
		align-self: center;
	}
`,fu=e=>{const{description:t,auto:i,uncancelable:s,hideCancelButton:n,saveText:r=Wt("OK")}=e,{onSave:o,disabled:a,save$:l,progress:c,...u}=Jc(e);return z(()=>{i&&o()},[i]),C` <style>
			${nu} ${Bc(u)}${hu}
		</style>
		${D(t,()=>C`<p class="description">${t}</p>`)}
		<div class="form" part="form">${Vc(u)}</div>
		<div class="buttons">
			${au(l)}
			${lu({save$:l,onSave:o,disabled:a,title:r,progress:c})}
			${D(!n,()=>C`<button class="button" value="cancel" ?disabled=${s}>
						${Wt("Cancel")}
					</button>`)}
		</div>`};customElements.define("cosmoz-form-dialog-next",Tn(fu,{observedAttributes:["allow-empty"]}));const bu={title:"Form",component:"cosmoz-form"},oe=()=>C`<cosmoz-form></cosmoz-form>`;oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:"() => html`<cosmoz-form></cosmoz-form>`",...oe.parameters?.docs?.source}}};const vu=["Basic"];export{oe as Basic,vu as __namedExportsOrder,bu as default};
