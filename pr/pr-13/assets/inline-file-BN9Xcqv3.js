import{r as Ps,D as Es,A as st,w as li,b as C,E as q,n as Fn,M as Dn,u as gt,v as kt,h as Ie,p as Os}from"./iframe-DfHJNfK4.js";import{_ as In}from"./preload-helper-PPVm8Dsz.js";let ue,$s=0;function Si(e){ue=e}function Ci(){ue=null,$s=0}function jn(){return $s++}const je=Symbol("haunted.phase"),ae=Symbol("haunted.hook"),Pi=Symbol("haunted.update"),Ei=Symbol("haunted.commit"),mt=Symbol("haunted.effects"),It=Symbol("haunted.layoutEffects"),qe="haunted.context";class Vn{update;host;virtual;[ae];[mt];[It];constructor(t,i){this.update=t,this.host=i,this[ae]=new Map,this[mt]=[],this[It]=[]}run(t){Si(this);let i=t();return Ci(),i}_runEffects(t){let i=this[t];Si(this);for(let s of i)s.call(this);Ci()}runEffects(){this._runEffects(mt)}runLayoutEffects(){this._runEffects(It)}teardown(){this[ae].forEach(i=>{typeof i.teardown=="function"&&i.teardown(!0)})}}const Bn=Promise.resolve().then.bind(Promise.resolve());function Ts(){let e=[],t;function i(){t=null;let s=e;e=[];for(var n=0,r=s.length;n<r;n++)s[n]()}return function(s){e.push(s),t==null&&(t=Bn(i))}}const Hn=Ts(),Oi=Ts();class Un{renderer;host;state;[je];_updateQueued;_active;constructor(t,i){this.renderer=t,this.host=i,this.state=new Vn(this.update.bind(this),i),this[je]=null,this._updateQueued=!1,this._active=!0}update(){this._active&&(this._updateQueued||(Hn(()=>{let t=this.handlePhase(Pi);Oi(()=>{this.handlePhase(Ei,t),Oi(()=>{this.handlePhase(mt)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(t,i){switch(this[je]=t,t){case Ei:this.commit(i),this.runEffects(It);return;case Pi:return this.render();case mt:return this.runEffects(mt)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(t){this.state._runEffects(t)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const ci=(...e)=>{const t=new CSSStyleSheet;return t.replaceSync(e.join("")),t},Kn=e=>e?.map(t=>typeof t=="string"?ci(t):t),Wn=(e,...t)=>e.flatMap((i,s)=>[i,t[s]||""]).join(""),bt=Wn,Yn=(e="")=>e.replace(/-+([a-z])?/g,(t,i)=>i?i.toUpperCase():"");function Jn(e){class t extends Un{frag;renderResult;constructor(n,r,o){super(n,o||r),this.frag=r}commit(n){this.renderResult=e(n,this.frag)}}function i(s,n,r){const o=(r||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:l=!0,shadowRootInit:c={},styleSheets:u}=r||n||{},d=Kn(s.styleSheets||u);class h extends o{_scheduler;static get observedAttributes(){return s.observedAttributes||a||[]}constructor(){if(super(),l===!1)this._scheduler=new t(s,this);else{const g=this.attachShadow({mode:"open",...c});d&&(g.adoptedStyleSheets=d),this._scheduler=new t(s,g,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(g,_,y){if(_===y)return;let b=y===""?!0:y;Reflect.set(this,Yn(g),b)}}function f(m){let g=m,_=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return g},set(y){_&&g===y||(_=!0,g=y,this._scheduler&&this._scheduler.update())}})}const p=new Proxy(o.prototype,{getPrototypeOf(m){return m},set(m,g,_,y){let b;return g in m?(b=Object.getOwnPropertyDescriptor(m,g),b&&b.set?(b.set.call(y,_),!0):(Reflect.set(m,g,_,y),!0)):(typeof g=="symbol"||g[0]==="_"?b={enumerable:!0,configurable:!0,writable:!0,value:_}:b=f(_),Object.defineProperty(y,g,b),b.set&&b.set.call(y,_),!0)}});return Object.setPrototypeOf(h.prototype,p),h}return i}class ht{id;state;constructor(t,i){this.id=t,this.state=i}}function qn(e,...t){let i=jn(),s=ue[ae],n=s.get(i);return n||(n=new e(i,ue,...t),s.set(i,n)),n.update(...t)}function ft(e){return qn.bind(null,e)}function Ls(e){return ft(class extends ht{callback;lastValues;values;_teardown;constructor(t,i,s,n){super(t,i),e(i,this)}update(t,i){this.callback=t,this.values=i}call(){const t=!this.values||this.hasChanged();this.lastValues=this.values,t&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(t){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),t&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((t,i)=>this.lastValues[i]!==t)}})}function As(e,t){e[mt].push(t)}const k=Ls(As),Gn=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,Xn=ft(class extends ht{Context;value;_ranEffect;_unsubscribe;constructor(e,t,i){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,As(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const t={Context:e,callback:this._updater};Gn(this.state.host).dispatchEvent(new CustomEvent(qe,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:s=null,value:n}=t;this.value=s?n:e.defaultValue,this._unsubscribe=s}teardown(){this._unsubscribe&&this._unsubscribe()}});function Qn(e){return t=>{const i={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(qe,this)}disconnectedCallback(){this.removeEventListener(qe,this)}handleEvent(s){const{detail:n}=s;n.Context===i&&(n.value=this.value,n.unsubscribe=this.unsubscribe.bind(this,n.callback),this.listeners.add(n.callback),s.stopPropagation())}unsubscribe(s){this.listeners.delete(s)}set value(s){this._value=s;for(let n of this.listeners)n(s)}get value(){return this._value}},Consumer:e(function({render:s}){const n=Xn(i);return s(n)},{useShadowDOM:!1}),defaultValue:t};return i}}const F=ft(class extends ht{value;values;constructor(e,t,i,s){super(e,t),this.value=i(),this.values=s}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((t,i)=>this.values[i]!==t)}}),E=(e,t)=>F(()=>e,t);function Zn(e,t){e[It].push(t)}const Ge=Ls(Zn),G=ft(class extends ht{args;constructor(e,t,i){super(e,t),this.updater=this.updater.bind(this),typeof i=="function"&&(i=i()),this.makeArgs(i)}update(){return this.args}updater(e){const[t]=this.args;typeof e=="function"&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}}),tr=ft(class extends ht{reducer;currentState;constructor(e,t,i,s,n){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=n!==void 0?n(s):s}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}}),er=/([A-Z])/gu,ir=ft(class extends ht{property;eventName;constructor(e,t,i,s){if(super(e,t),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=i,this.eventName=i.replace(er,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof s=="function"&&(s=s()),s!=null&&this.updateProp(s))}update(e,t){return[this.state.host[this.property],this.updater]}updater(e){const t=this.state.host[this.property];typeof e=="function"&&(e=e(t)),!Object.is(t,e)&&this.updateProp(e)}updateProp(e){this.notify(e).defaultPrevented||(this.state.host[this.property]=e)}notify(e){const t=new CustomEvent(this.eventName,{detail:{value:e,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(t),t}});function Ot(e){return F(()=>({current:e}),[])}function sr({render:e}){const t=Jn(e),i=Qn(t);return{component:t,createContext:i}}const tt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},xt=e=>(...t)=>({_$litDirective$:e,values:t});let qt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,s){this._$Ct=t,this._$AM=i,this._$Ci=s}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}};const jt=(e,t)=>{const i=e._$AN;if(i===void 0)return!1;for(const s of i)s._$AO?.(t,!1),jt(s,t);return!0},de=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while(i?.size===0)},Rs=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),or(t)}};function nr(e){this._$AN!==void 0?(de(this),this._$AM=e,Rs(this)):this._$AM=e}function rr(e,t=!1,i=0){const s=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(s))for(let r=i;r<s.length;r++)jt(s[r],!1),de(s[r]);else s!=null&&(jt(s,!1),de(s));else jt(this,e)}const or=e=>{e.type==tt.CHILD&&(e._$AP??=rr,e._$AQ??=nr)};class ui extends qt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,s){super._$AT(t,i,s),Rs(this),this.isConnected=t._$AU}_$AO(t,i=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),i&&(jt(this,t),de(this))}setValue(t){if(Ps(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}const{component:rt}=sr({render:Es});const R=e=>e??st;function D(e,t,i){return e?t(e):i?.(e)}const ar=({slot:e,title:t,className:i,width:s="24",height:n="24",styles:r}={})=>C`
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
`,lr=({slot:e,title:t,className:i,width:s="24",height:n="24",styles:r}={})=>C`
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
`,cr=({slot:e,title:t,className:i,width:s="24",height:n="24",styles:r}={})=>C`
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
`,pt=ft(class extends ht{update(){return this.state.host}}),lt=(e,...t)=>e.flatMap((i,s)=>[i,t[s]??""]).join(""),di=(...e)=>{const t=new CSSStyleSheet;return t.replaceSync(e.join("")),t},ur=lt`
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
`,dr=()=>{const e=pt(),t=E(()=>{e.dispatchEvent(new Event("close")),e.onClose?.()},[]);return k(()=>{const i=o=>{o.preventDefault(),t()},s=e.shadowRoot,n=o=>o.target.value==="cancel"&&i(o),r=o=>!o.defaultPrevented&&o.key==="Escape"&&i(o);return s.addEventListener("click",n),document.addEventListener("keydown",r,!0),()=>{s.removeEventListener("click",n),document.removeEventListener("keydown",r,!0)}},[]),{close:t}},hr=()=>{const e=pt(),{manualFocus:t}=e;Ge(()=>{!t&&!e.matches(":focus-within")&&(e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex"))},[t])},fr=(e,t,i)=>{const s=e.width/3,n=e.height/3,r=Math.min(window.innerWidth-2*s,Math.max(-s,t)),o=Math.min(window.innerHeight-2*n,Math.max(-n,i));return{x:r,y:o}},pr=(e,t,i,s)=>n=>{if(!n.target.closest(t))return;const r=fr,o=e.getBoundingClientRect(),a=n.clientX-o.x,l=n.clientY-o.y,c=(h,f)=>{const p=h-a,m=f-l,g=r(o,p,m);Object.assign(e.style,{left:g.x+"px",top:g.y+"px",transform:"initial"})},u=h=>c(h.clientX,h.clientY),d=h=>{document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",d)};document.addEventListener("mousemove",u),document.addEventListener("mouseup",d)},gr=()=>{const e=pt(),{unmovable:t}=e;k(()=>{if(t)return;const i=e.shadowRoot;if(!i)return;const s=pr(e,".title");return i.addEventListener("mousedown",s),()=>i.removeEventListener("mousedown",s)},[t])},mr=()=>{dr(),gr(),hr()},_r=({title:e,content:t,styles:i,closeable:s=!1})=>{const n=pt();return C`
		<style>
			${ur}${i}
		</style>
		<div class="title" part="title">
			${e}
			${D(s,()=>C`
					<button
						class="close"
						@click=${()=>{n.dispatchEvent(new Event("close")),n.onClose?.()}}
					>
						${ar()}
					</button>
				`)}
		</div>
		<div class="content" part="content">${t}</div>
	`},hi=(e,{observedAttributes:t,styles:i,...s}={})=>rt(n=>(mr(),_r({title:n.heading||n.title,content:e(n),styles:i,closeable:n.closeable})),{observedAttributes:["title","heading","manual-focus","unmovable","closeable",...t??[]],...s}),yr=bt`
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
`,br=()=>st,vr=rt(br,{styleSheets:[yr]});customElements.define("cosmoz-spinner",vr);customElements.define("cosmoz-dialog-loading",hi(()=>C`
			<style>
				.content {
					flex-direction: row;
					align-items: center;
					justify-content: center;
					padding: 30px;
				}
				cosmoz-spinner {
					width: 32px;
					height: 32px;
					margin-right: 12px;
				}
			</style>
			<cosmoz-spinner></cosmoz-spinner>
			<slot></slot>
		`));window.JSCompiler_renameProperty=function(e,t){return e};let wr=/(url\()([^)]*)(\))/g,xr=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,ee,K;function Vt(e,t){if(e&&xr.test(e)||e==="//")return e;if(ee===void 0){ee=!1;try{const i=new URL("b","http://a");i.pathname="c%20d",ee=i.href==="http://a/c%20d"}catch{}}if(t||(t=document.baseURI||window.location.href),ee)try{return new URL(e,t).href}catch{return e}return K||(K=document.implementation.createHTMLDocument("temp"),K.base=K.createElement("base"),K.head.appendChild(K.base),K.anchor=K.createElement("a"),K.body.appendChild(K.anchor)),K.base.href=t,K.anchor.href=e,K.anchor.href||e}function fi(e,t){return e.replace(wr,function(i,s,n,r){return s+"'"+Vt(n.replace(/["']/g,""),t)+"'"+r})}function pi(e){return e.substring(0,e.lastIndexOf("/")+1)}const Sr=!window.ShadyDOM||!window.ShadyDOM.inUse;!window.ShadyCSS||window.ShadyCSS.nativeCss;const Cr=Sr&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const e=new CSSStyleSheet;e.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch{return!1}})();let Pr=window.Polymer&&window.Polymer.rootPath||pi(document.baseURI||window.location.href),he=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures;let Xe=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,Er=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,Or=window.Polymer&&window.Polymer.legacyOptimizations||!1,$r=window.Polymer&&window.Polymer.legacyWarnings||!1,Tr=window.Polymer&&window.Polymer.syncInitialRender||!1,Qe=window.Polymer&&window.Polymer.legacyUndefined||!1,Lr=window.Polymer&&window.Polymer.orderedComputed||!1,$i=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Ar=window.Polymer&&window.Polymer.fastDomIf||!1;window.Polymer&&window.Polymer.suppressTemplateNotifications;window.Polymer&&window.Polymer.legacyNoObservedAttributes;let Rr=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;let kr=0;const St=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let i=kr++;function s(n){let r=n.__mixinSet;if(r&&r[i])return n;let o=t,a=o.get(n);if(!a){a=e(n),o.set(n,a);let l=Object.create(a.__mixinSet||r||null);l[i]=!0,a.__mixinSet=l}return a}return s};let gi={},ks={};function Ti(e,t){gi[e]=ks[e.toLowerCase()]=t}function Li(e){return gi[e]||ks[e.toLowerCase()]}function Nr(e){e.querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}class Ht extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,i){if(t){let s=Li(t);return s&&i?s.querySelector(i):s}return null}attributeChangedCallback(t,i,s,n){i!==s&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,i=Vt(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=pi(i)}return this.__assetpath}register(t){if(t=t||this.id,t){if(Xe&&Li(t)!==void 0)throw Ti(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,Ti(t,this),Nr(this)}}}Ht.prototype.modules=gi;customElements.define("dom-module",Ht);const zr="link[rel=import][type~=css]",Mr="include",Ai="shady-unscoped";function Ns(e){return Ht.import(e)}function Ri(e){let t=e.body?e.body:e;const i=fi(t.textContent,e.baseURI),s=document.createElement("style");return s.textContent=i,s}function Fr(e){const t=e.trim().split(/\s+/),i=[];for(let s=0;s<t.length;s++)i.push(...Dr(t[s]));return i}function Dr(e){const t=Ns(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(t._styles===void 0){const i=[];i.push(...Ms(t));const s=t.querySelector("template");s&&i.push(...zs(s,t.assetpath)),t._styles=i}return t._styles}function zs(e,t){if(!e._styles){const i=[],s=e.content.querySelectorAll("style");for(let n=0;n<s.length;n++){let r=s[n],o=r.getAttribute(Mr);o&&i.push(...Fr(o).filter(function(a,l,c){return c.indexOf(a)===l})),t&&(r.textContent=fi(r.textContent,t)),i.push(r)}e._styles=i}return e._styles}function Ir(e){let t=Ns(e);return t?Ms(t):[]}function Ms(e){const t=[],i=e.querySelectorAll(zr);for(let s=0;s<i.length;s++){let n=i[s];if(n.import){const r=n.import,o=n.hasAttribute(Ai);if(o&&!r._unscopedStyle){const a=Ri(r);a.setAttribute(Ai,""),r._unscopedStyle=a}else r._style||(r._style=Ri(r));t.push(o?r._unscopedStyle:r._style)}}return t}const _t=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e;function Ze(e){return e.indexOf(".")>=0}function Ct(e){let t=e.indexOf(".");return t===-1?e:e.slice(0,t)}function jr(e,t){return e.indexOf(t+".")===0}function fe(e,t){return t.indexOf(e+".")===0}function pe(e,t,i){return t+i.slice(e.length)}function Ft(e){if(Array.isArray(e)){let t=[];for(let i=0;i<e.length;i++){let s=e[i].toString().split(".");for(let n=0;n<s.length;n++)t.push(s[n])}return t.join(".")}else return e}function Fs(e){return Array.isArray(e)?Ft(e).split("."):e.toString().split(".")}function H(e,t,i){let s=e,n=Fs(t);for(let r=0;r<n.length;r++){if(!s)return;let o=n[r];s=s[o]}return i&&(i.path=n.join(".")),s}function ki(e,t,i){let s=e,n=Fs(t),r=n[n.length-1];if(n.length>1){for(let o=0;o<n.length-1;o++){let a=n[o];if(s=s[a],!s)return}s[r]=i}else s[t]=i;return n.join(".")}const ge={},Vr=/-[a-z]/g,Br=/([A-Z])/g;function Ds(e){return ge[e]||(ge[e]=e.indexOf("-")<0?e:e.replace(Vr,t=>t[1].toUpperCase()))}function Pe(e){return ge[e]||(ge[e]=e.replace(Br,"-$1").toLowerCase())}let Hr=0,Is=0,$t=[],Ur=0,ti=!1,js=document.createTextNode("");new window.MutationObserver(Kr).observe(js,{characterData:!0});function Kr(){ti=!1;const e=$t.length;for(let t=0;t<e;t++){let i=$t[t];if(i)try{i()}catch(s){setTimeout(()=>{throw s})}}$t.splice(0,e),Is+=e}const Wr={run(e){return ti||(ti=!0,js.textContent=Ur++),$t.push(e),Hr++},cancel(e){const t=e-Is;if(t>=0){if(!$t[t])throw new Error("invalid async handle: "+e);$t[t]=null}}};const Yr=Wr,Vs=St(e=>{class t extends e{static createProperties(s){const n=this.prototype;for(let r in s)r in n||n._createPropertyAccessor(r)}static attributeNameForProperty(s){return s.toLowerCase()}static typeForProperty(s){}_createPropertyAccessor(s,n){this._addPropertyToAttributeMap(s),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[s]||(this.__dataHasAccessor[s]=!0,this._definePropertyAccessor(s,n))}_addPropertyToAttributeMap(s){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let n=this.__dataAttributes[s];return n||(n=this.constructor.attributeNameForProperty(s),this.__dataAttributes[n]=s),n}_definePropertyAccessor(s,n){Object.defineProperty(this,s,{get(){return this.__data[s]},set:n?function(){}:function(r){this._setPendingProperty(s,r,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let s in this.__dataHasAccessor)this.hasOwnProperty(s)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[s]=this[s],delete this[s])}_initializeInstanceProperties(s){Object.assign(this,s)}_setProperty(s,n){this._setPendingProperty(s,n)&&this._invalidateProperties()}_getProperty(s){return this.__data[s]}_setPendingProperty(s,n,r){let o=this.__data[s],a=this._shouldPropertyChange(s,n,o);return a&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(s in this.__dataOld)&&(this.__dataOld[s]=o),this.__data[s]=n,this.__dataPending[s]=n),a}_isPropertyPending(s){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(s))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,Yr.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const s=this.__data,n=this.__dataPending,r=this.__dataOld;this._shouldPropertiesChange(s,n,r)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(s,n,r)),this.__dataCounter--}_shouldPropertiesChange(s,n,r){return!!n}_propertiesChanged(s,n,r){}_shouldPropertyChange(s,n,r){return r!==n&&(r===r||n===n)}attributeChangedCallback(s,n,r,o){n!==r&&this._attributeToProperty(s,r),super.attributeChangedCallback&&super.attributeChangedCallback(s,n,r,o)}_attributeToProperty(s,n,r){if(!this.__serializing){const o=this.__dataAttributes,a=o&&o[s]||s;this[a]=this._deserializeValue(n,r||this.constructor.typeForProperty(a))}}_propertyToAttribute(s,n,r){this.__serializing=!0,r=arguments.length<3?this[s]:r,this._valueToNodeAttribute(this,r,n||this.constructor.attributeNameForProperty(s)),this.__serializing=!1}_valueToNodeAttribute(s,n,r){const o=this._serializeValue(n);(r==="class"||r==="name"||r==="slot")&&(s=_t(s)),o===void 0?s.removeAttribute(r):s.setAttribute(r,o===""&&window.trustedTypes?window.trustedTypes.emptyScript:o)}_serializeValue(s){return typeof s==="boolean"?s?"":void 0:s?.toString()}_deserializeValue(s,n){switch(n){case Boolean:return s!==null;case Number:return Number(s);default:return s}}}return t});const Bs={};let ie=HTMLElement.prototype;for(;ie;){let e=Object.getOwnPropertyNames(ie);for(let t=0;t<e.length;t++)Bs[e[t]]=!0;ie=Object.getPrototypeOf(ie)}const Jr=window.trustedTypes?e=>trustedTypes.isHTML(e)||trustedTypes.isScript(e)||trustedTypes.isScriptURL(e):()=>!1;function qr(e,t){if(!Bs[t]){let i=e[t];i!==void 0&&(e.__data?e._setPendingProperty(t,i):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=i))}}const Gr=St(e=>{const t=Vs(e);class i extends t{static createPropertiesForAttributes(){let n=this.observedAttributes;for(let r=0;r<n.length;r++)this.prototype._createPropertyAccessor(Ds(n[r]))}static attributeNameForProperty(n){return Pe(n)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(n){for(let r in n)this._setProperty(r,n[r])}_ensureAttribute(n,r){const o=this;o.hasAttribute(n)||this._valueToNodeAttribute(o,r,n)}_serializeValue(n){switch(typeof n){case"object":if(n instanceof Date)return n.toString();if(n){if(Jr(n))return n;try{return JSON.stringify(n)}catch{return""}}default:return super._serializeValue(n)}}_deserializeValue(n,r){let o;switch(r){case Object:try{o=JSON.parse(n)}catch{o=n}break;case Array:try{o=JSON.parse(n)}catch{o=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${n}`)}break;case Date:o=isNaN(n)?String(n):Number(n),o=new Date(o);break;default:o=super._deserializeValue(n,r);break}return o}_definePropertyAccessor(n,r){qr(this,n),super._definePropertyAccessor(n,r)}_hasAccessor(n){return this.__dataHasAccessor&&this.__dataHasAccessor[n]}_isPropertyPending(n){return!!(this.__dataPending&&n in this.__dataPending)}}return i});const Xr={"dom-if":!0,"dom-repeat":!0};let Ni=!1,zi=!1;function Qr(){if(!Ni){Ni=!0;const e=document.createElement("textarea");e.placeholder="a",zi=e.placeholder===e.textContent}return zi}function Zr(e){Qr()&&e.localName==="textarea"&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}const to=(()=>{const e=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:t=>t});return(t,i,s)=>{const n=i.getAttribute(s);if(e&&s.startsWith("on-")){t.setAttribute(s,e.createScript(n,s));return}t.setAttribute(s,n)}})();function eo(e){let t=e.getAttribute("is");if(t&&Xr[t]){let i=e;for(i.removeAttribute("is"),e=i.ownerDocument.createElement(t),i.parentNode.replaceChild(e,i),e.appendChild(i);i.attributes.length;){const{name:s}=i.attributes[0];to(e,i,s),i.removeAttribute(s)}}return e}function Hs(e,t){let i=t.parentInfo&&Hs(e,t.parentInfo);if(i){for(let s=i.firstChild,n=0;s;s=s.nextSibling)if(t.parentIndex===n++)return s}else return e}function io(e,t,i,s){s.id&&(t[s.id]=i)}function so(e,t,i){if(i.events&&i.events.length)for(let s=0,n=i.events,r;s<n.length&&(r=n[s]);s++)e._addMethodEventListenerToNode(t,r.name,r.value,e)}function no(e,t,i,s){i.templateInfo&&(t._templateInfo=i.templateInfo,t._parentTemplateInfo=s)}function ro(e,t,i){return e=e._methodHost||e,function(n){e[i]?e[i](n,n.detail):console.warn("listener method `"+i+"` not defined")}}const oo=St(e=>{class t extends e{static _parseTemplate(s,n){if(!s._templateInfo){let r=s._templateInfo={};r.nodeInfoList=[],r.nestedTemplate=!!n,r.stripWhiteSpace=n&&n.stripWhiteSpace||s.hasAttribute&&s.hasAttribute("strip-whitespace"),this._parseTemplateContent(s,r,{parent:null})}return s._templateInfo}static _parseTemplateContent(s,n,r){return this._parseTemplateNode(s.content,n,r)}static _parseTemplateNode(s,n,r){let o=!1,a=s;return a.localName=="template"&&!a.hasAttribute("preserve-content")?o=this._parseTemplateNestedTemplate(a,n,r)||o:a.localName==="slot"&&(n.hasInsertionPoint=!0),Zr(a),a.firstChild&&this._parseTemplateChildNodes(a,n,r),a.hasAttributes&&a.hasAttributes()&&(o=this._parseTemplateNodeAttributes(a,n,r)||o),o||r.noted}static _parseTemplateChildNodes(s,n,r){if(!(s.localName==="script"||s.localName==="style"))for(let o=s.firstChild,a=0,l;o;o=l){if(o.localName=="template"&&(o=eo(o)),l=o.nextSibling,o.nodeType===Node.TEXT_NODE){let u=l;for(;u&&u.nodeType===Node.TEXT_NODE;)o.textContent+=u.textContent,l=u.nextSibling,s.removeChild(u),u=l;if(n.stripWhiteSpace&&!o.textContent.trim()){s.removeChild(o);continue}}let c={parentIndex:a,parentInfo:r};this._parseTemplateNode(o,n,c)&&(c.infoIndex=n.nodeInfoList.push(c)-1),o.parentNode&&a++}}static _parseTemplateNestedTemplate(s,n,r){let o=s,a=this._parseTemplate(o,n);return(a.content=o.content.ownerDocument.createDocumentFragment()).appendChild(o.content),r.templateInfo=a,!0}static _parseTemplateNodeAttributes(s,n,r){let o=!1,a=Array.from(s.attributes);for(let l=a.length-1,c;c=a[l];l--)o=this._parseTemplateNodeAttribute(s,n,r,c.name,c.value)||o;return o}static _parseTemplateNodeAttribute(s,n,r,o,a){return o.slice(0,3)==="on-"?(s.removeAttribute(o),r.events=r.events||[],r.events.push({name:o.slice(3),value:a}),!0):o==="id"?(r.id=a,!0):!1}static _contentForTemplate(s){let n=s._templateInfo;return n&&n.content||s.content}_stampTemplate(s,n){s&&!s.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(s),n=n||this.constructor._parseTemplate(s);let r=n.nodeInfoList,o=n.content||s.content,a=document.importNode(o,!0);a.__noInsertionPoint=!n.hasInsertionPoint;let l=a.nodeList=new Array(r.length);a.$={};for(let c=0,u=r.length,d;c<u&&(d=r[c]);c++){let h=l[c]=Hs(a,d);io(this,a.$,h,d),no(this,h,d,n),so(this,h,d)}return a=a,a}_addMethodEventListenerToNode(s,n,r,o){o=o||s;let a=ro(o,n,r);return this._addEventListenerToNode(s,n,a),a}_addEventListenerToNode(s,n,r){s.addEventListener(n,r)}_removeEventListenerFromNode(s,n,r){s.removeEventListener(n,r)}}return t});let Ut=0;const Kt=[],P={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Us="__computeInfo",ao=/[A-Z]/;function Ve(e,t,i){let s=e[t];if(!s)s=e[t]={};else if(!e.hasOwnProperty(t)&&(s=e[t]=Object.create(e[t]),i))for(let n in s){let r=s[n],o=s[n]=Array(r.length);for(let a=0;a<r.length;a++)o[a]=r[a]}return s}function Dt(e,t,i,s,n,r){if(t){let o=!1;const a=Ut++;for(let l in i){let c=n?Ct(l):l,u=t[c];if(u)for(let d=0,h=u.length,f;d<h&&(f=u[d]);d++)(!f.info||f.info.lastRun!==a)&&(!n||mi(l,f.trigger))&&(f.info&&(f.info.lastRun=a),f.fn(e,l,i,s,f.info,n,r),o=!0)}return o}return!1}function lo(e,t,i,s,n,r,o,a){let l=!1,c=o?Ct(s):s,u=t[c];if(u)for(let d=0,h=u.length,f;d<h&&(f=u[d]);d++)(!f.info||f.info.lastRun!==i)&&(!o||mi(s,f.trigger))&&(f.info&&(f.info.lastRun=i),f.fn(e,s,n,r,f.info,o,a),l=!0);return l}function mi(e,t){if(t){let i=t.name;return i==e||!!(t.structured&&jr(i,e))||!!(t.wildcard&&fe(i,e))}else return!0}function Mi(e,t,i,s,n){let r=typeof n.method=="string"?e[n.method]:n.method,o=n.property;r?r.call(e,e.__data[o],s[o]):n.dynamicFn||console.warn("observer method `"+n.method+"` not defined")}function co(e,t,i,s,n){let r=e[P.NOTIFY],o,a=Ut++;for(let c in t)t[c]&&(r&&lo(e,r,a,c,i,s,n)||n&&uo(e,c,i))&&(o=!0);let l;o&&(l=e.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function uo(e,t,i){let s=Ct(t);if(s!==t){let n=Pe(s)+"-changed";return Ks(e,n,i[t],t),!0}return!1}function Ks(e,t,i,s){let n={value:i,queueProperty:!0};s&&(n.path=s),_t(e).dispatchEvent(new CustomEvent(t,{detail:n}))}function ho(e,t,i,s,n,r){let a=(r?Ct(t):t)!=t?t:null,l=a?H(e,a):e.__data[t];a&&l===void 0&&(l=i[t]),Ks(e,n.eventName,l,a)}function fo(e,t,i,s,n){let r,o=e.detail,a=o&&o.path;a?(s=pe(i,s,a),r=o&&o.value):r=e.currentTarget[i],r=n?!r:r,(!t[P.READ_ONLY]||!t[P.READ_ONLY][s])&&t._setPendingPropertyOrPath(s,r,!0,!!a)&&(!o||!o.queueProperty)&&t._invalidateProperties()}function po(e,t,i,s,n){let r=e.__data[t];he&&(r=he(r,n.attrName,"attribute",e)),e._propertyToAttribute(t,n.attrName,r)}function go(e,t,i,s){let n=e[P.COMPUTE];if(n)if(Lr){Ut++;const r=_o(e),o=[];for(let l in t)Fi(l,n,o,r,s);let a;for(;a=o.shift();)Ws(e,"",t,i,a)&&Fi(a.methodInfo,n,o,r,s);Object.assign(i,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let r=t;for(;Dt(e,n,r,i,s);)Object.assign(i,e.__dataOld),Object.assign(t,e.__dataPending),r=e.__dataPending,e.__dataPending=null}}const mo=(e,t,i)=>{let s=0,n=t.length-1,r=-1;for(;s<=n;){const o=s+n>>1,a=i.get(t[o].methodInfo)-i.get(e.methodInfo);if(a<0)s=o+1;else if(a>0)n=o-1;else{r=o;break}}r<0&&(r=n+1),t.splice(r,0,e)},Fi=(e,t,i,s,n)=>{const r=n?Ct(e):e,o=t[r];if(o)for(let a=0;a<o.length;a++){const l=o[a];l.info.lastRun!==Ut&&(!n||mi(e,l.trigger))&&(l.info.lastRun=Ut,mo(l.info,i,s))}};function _o(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;const i=e[P.COMPUTE];let{counts:s,ready:n,total:r}=yo(e),o;for(;o=n.shift();){t.set(o,t.size);const a=i[o];a&&a.forEach(l=>{const c=l.info.methodInfo;--r,--s[c]===0&&n.push(c)})}r!==0&&console.warn(`Computed graph for ${e.localName} incomplete; circular?`),e.constructor.__orderedComputedDeps=t}return t}function yo(e){const t=e[Us],i={},s=e[P.COMPUTE],n=[];let r=0;for(let o in t){const a=t[o];r+=i[o]=a.args.filter(l=>!l.literal).length+(a.dynamicFn?1:0)}for(let o in s)t[o]||n.push(o);return{counts:i,ready:n,total:r}}function Ws(e,t,i,s,n){let r=ei(e,t,i,s,n);if(r===Kt)return!1;let o=n.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[o]?e._setPendingProperty(o,r,!0):(e[o]=r,!1)}function bo(e,t,i){let s=e.__dataLinkedPaths;if(s){let n;for(let r in s){let o=s[r];fe(r,t)?(n=pe(r,o,t),e._setPendingPropertyOrPath(n,i,!0,!0)):fe(o,t)&&(n=pe(o,r,t),e._setPendingPropertyOrPath(n,i,!0,!0))}}}function Be(e,t,i,s,n,r,o){i.bindings=i.bindings||[];let a={kind:s,target:n,parts:r,literal:o,isCompound:r.length!==1};if(i.bindings.push(a),Co(a)){let{event:c,negate:u}=a.parts[0];a.listenerEvent=c||Pe(n)+"-changed",a.listenerNegate=u}let l=t.nodeInfoList.length;for(let c=0;c<a.parts.length;c++){let u=a.parts[c];u.compoundIndex=c,vo(e,t,a,u,l)}}function vo(e,t,i,s,n){if(!s.literal)if(i.kind==="attribute"&&i.target[0]==="-")console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else{let r=s.dependencies,o={index:n,binding:i,part:s,evaluator:e};for(let a=0;a<r.length;a++){let l=r[a];typeof l=="string"&&(l=Js(l),l.wildcard=!0),e._addTemplatePropertyEffect(t,l.rootProperty,{fn:wo,info:o,trigger:l})}}}function wo(e,t,i,s,n,r,o){let a=o[n.index],l=n.binding,c=n.part;if(r&&c.source&&t.length>c.source.length&&l.kind=="property"&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let u=i[t];t=pe(c.source,l.target,t),a._setPendingPropertyOrPath(t,u,!1,!0)&&e._enqueueClient(a)}else{let u=n.evaluator._evaluateBinding(e,c,t,i,s,r);u!==Kt&&xo(e,a,l,c,u)}}function xo(e,t,i,s,n){if(n=So(t,n,i,s),he&&(n=he(n,i.target,i.kind,t)),i.kind=="attribute")e._valueToNodeAttribute(t,n,i.target);else{let r=i.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[r]?(!t[P.READ_ONLY]||!t[P.READ_ONLY][r])&&t._setPendingProperty(r,n)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,r,n)}}function So(e,t,i,s){if(i.isCompound){let n=e.__dataCompoundStorage[i.target];n[s.compoundIndex]=t,t=n.join("")}return i.kind!=="attribute"&&(i.target==="textContent"||i.target==="value"&&(e.localName==="input"||e.localName==="textarea"))&&(t=t??""),t}function Co(e){return!!e.target&&e.kind!="attribute"&&e.kind!="text"&&!e.isCompound&&e.parts[0].mode==="{"}function Po(e,t){let{nodeList:i,nodeInfoList:s}=t;if(s.length)for(let n=0;n<s.length;n++){let r=s[n],o=i[n],a=r.bindings;if(a)for(let l=0;l<a.length;l++){let c=a[l];Eo(o,c),Oo(o,e,c)}o.__dataHost=e}}function Eo(e,t){if(t.isCompound){let i=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),s=t.parts,n=new Array(s.length);for(let o=0;o<s.length;o++)n[o]=s[o].literal;let r=t.target;i[r]=n,t.literal&&t.kind=="property"&&(r==="className"&&(e=_t(e)),e[r]=t.literal)}}function Oo(e,t,i){if(i.listenerEvent){let s=i.parts[0];e.addEventListener(i.listenerEvent,function(n){fo(n,t,i.target,s.source,s.negate)})}}function Di(e,t,i,s,n,r){r=t.static||r&&(typeof r!="object"||r[t.methodName]);let o={methodName:t.methodName,args:t.args,methodInfo:n,dynamicFn:r};for(let a=0,l;a<t.args.length&&(l=t.args[a]);a++)l.literal||e._addPropertyEffect(l.rootProperty,i,{fn:s,info:o,trigger:l});return r&&e._addPropertyEffect(t.methodName,i,{fn:s,info:o}),o}function ei(e,t,i,s,n){let r=e._methodHost||e,o=r[n.methodName];if(o){let a=e._marshalArgs(n.args,t,i);return a===Kt?Kt:o.apply(r,a)}else n.dynamicFn||console.warn("method `"+n.methodName+"` not defined")}const $o=[],Ys="(?:[a-zA-Z_$][\\w.:$\\-*]*)",To="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",Lo="(?:'(?:[^'\\\\]|\\\\.)*')",Ao='(?:"(?:[^"\\\\]|\\\\.)*")',Ro="(?:"+Lo+"|"+Ao+")",Ii="(?:("+Ys+"|"+To+"|"+Ro+")\\s*)",ko="(?:"+Ii+"(?:,\\s*"+Ii+")*)",No="(?:\\(\\s*(?:"+ko+"?)\\)\\s*)",zo="("+Ys+"\\s*"+No+"?)",Mo="(\\[\\[|{{)\\s*",Fo="(?:]]|}})",Do="(?:(!)\\s*)?",Io=Mo+Do+zo+Fo,ji=new RegExp(Io,"g");function Vi(e){let t="";for(let i=0;i<e.length;i++){let s=e[i].literal;t+=s||""}return t}function He(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let s={methodName:t[1],static:!0,args:$o};if(t[2].trim()){let n=t[2].replace(/\\,/g,"&comma;").split(",");return jo(n,s)}else return s}return null}function jo(e,t){return t.args=e.map(function(i){let s=Js(i);return s.literal||(t.static=!1),s},this),t}function Js(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:t,value:"",literal:!1},s=t[0];switch(s==="-"&&(s=t[1]),s>="0"&&s<="9"&&(s="#"),s){case"'":case'"':i.value=t.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(t),i.literal=!0;break}return i.literal||(i.rootProperty=Ct(t),i.structured=Ze(t),i.structured&&(i.wildcard=t.slice(-2)==".*",i.wildcard&&(i.name=t.slice(0,-2)))),i}function Bi(e,t,i){let s=H(e,i);return s===void 0&&(s=t[i]),s}function qs(e,t,i,s){const n={indexSplices:s};Qe&&!e._overrideLegacyUndefined&&(t.splices=n),e.notifyPath(i+".splices",n),e.notifyPath(i+".length",t.length),Qe&&!e._overrideLegacyUndefined&&(n.indexSplices=[])}function Nt(e,t,i,s,n,r){qs(e,t,i,[{index:s,addedCount:n,removed:r,object:t,type:"splice"}])}function Vo(e){return e[0].toUpperCase()+e.substring(1)}const Bo=St(e=>{const t=oo(Gr(e));class i extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return P}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(zt.length){let n=zt[zt.length-1];n._enqueueClient(this),this.__dataHost=n}}_initializeProtoProperties(n){this.__data=Object.create(n),this.__dataPending=Object.create(n),this.__dataOld={}}_initializeInstanceProperties(n){let r=this[P.READ_ONLY];for(let o in n)(!r||!r[o])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[o]=this.__dataPending[o]=n[o])}_addPropertyEffect(n,r,o){this._createPropertyAccessor(n,r==P.READ_ONLY);let a=Ve(this,r,!0)[n];a||(a=this[r][n]=[]),a.push(o)}_removePropertyEffect(n,r,o){let a=Ve(this,r,!0)[n],l=a.indexOf(o);l>=0&&a.splice(l,1)}_hasPropertyEffect(n,r){let o=this[r];return!!(o&&o[n])}_hasReadOnlyEffect(n){return this._hasPropertyEffect(n,P.READ_ONLY)}_hasNotifyEffect(n){return this._hasPropertyEffect(n,P.NOTIFY)}_hasReflectEffect(n){return this._hasPropertyEffect(n,P.REFLECT)}_hasComputedEffect(n){return this._hasPropertyEffect(n,P.COMPUTE)}_setPendingPropertyOrPath(n,r,o,a){if(a||Ct(Array.isArray(n)?n[0]:n)!==n){if(!a){let l=H(this,n);if(n=ki(this,n,r),!n||!super._shouldPropertyChange(n,r,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(n,r,o))return bo(this,n,r),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[n])return this._setPendingProperty(n,r,o);this[n]=r}return!1}_setUnmanagedPropertyToNode(n,r,o){(o!==n[r]||typeof o=="object")&&(r==="className"&&(n=_t(n)),n[r]=o)}_setPendingProperty(n,r,o){let a=this.__dataHasPaths&&Ze(n),l=a?this.__dataTemp:this.__data;return this._shouldPropertyChange(n,r,l[n])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),n in this.__dataOld||(this.__dataOld[n]=this.__data[n]),a?this.__dataTemp[n]=r:this.__data[n]=r,this.__dataPending[n]=r,(a||this[P.NOTIFY]&&this[P.NOTIFY][n])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[n]=o),!0):!1}_setProperty(n,r){this._setPendingProperty(n,r,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(n){this.__dataPendingClients=this.__dataPendingClients||[],n!==this&&this.__dataPendingClients.push(n)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let n=this.__dataPendingClients;if(n){this.__dataPendingClients=null;for(let r=0;r<n.length;r++){let o=n[r];o.__dataEnabled?o.__dataPending&&o._flushProperties():o._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(n,r){for(let o in n)(r||!this[P.READ_ONLY]||!this[P.READ_ONLY][o])&&this._setPendingPropertyOrPath(o,n[o],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(n,r,o){let a=this.__dataHasPaths;this.__dataHasPaths=!1;let l;go(this,r,o,a),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(r,o,a),this._flushClients(),Dt(this,this[P.REFLECT],r,o,a),Dt(this,this[P.OBSERVE],r,o,a),l&&co(this,l,r,o,a),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(n,r,o){this[P.PROPAGATE]&&Dt(this,this[P.PROPAGATE],n,r,o),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,n,r,o)}_runEffectsForTemplate(n,r,o,a){const l=(c,u)=>{Dt(this,n.propertyEffects,c,o,u,n.nodeList);for(let d=n.firstChild;d;d=d.nextSibling)this._runEffectsForTemplate(d,c,o,u)};n.runEffects?n.runEffects(l,r,a):l(r,a)}linkPaths(n,r){n=Ft(n),r=Ft(r),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[n]=r}unlinkPaths(n){n=Ft(n),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[n]}notifySplices(n,r){let o={path:""},a=H(this,n,o);qs(this,a,o.path,r)}get(n,r){return H(r||this,n)}set(n,r,o){o?ki(o,n,r):(!this[P.READ_ONLY]||!this[P.READ_ONLY][n])&&this._setPendingPropertyOrPath(n,r,!0)&&this._invalidateProperties()}push(n,...r){let o={path:""},a=H(this,n,o),l=a.length,c=a.push(...r);return r.length&&Nt(this,a,o.path,l,r.length,[]),c}pop(n){let r={path:""},o=H(this,n,r),a=!!o.length,l=o.pop();return a&&Nt(this,o,r.path,o.length,0,[l]),l}splice(n,r,o,...a){let l={path:""},c=H(this,n,l);r<0?r=c.length-Math.floor(-r):r&&(r=Math.floor(r));let u;return arguments.length===2?u=c.splice(r):u=c.splice(r,o,...a),(a.length||u.length)&&Nt(this,c,l.path,r,a.length,u),u}shift(n){let r={path:""},o=H(this,n,r),a=!!o.length,l=o.shift();return a&&Nt(this,o,r.path,0,0,[l]),l}unshift(n,...r){let o={path:""},a=H(this,n,o),l=a.unshift(...r);return r.length&&Nt(this,a,o.path,0,r.length,[]),l}notifyPath(n,r){let o;if(arguments.length==1){let a={path:""};r=H(this,n,a),o=a.path}else Array.isArray(n)?o=Ft(n):o=n;this._setPendingPropertyOrPath(o,r,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(n,r){this._addPropertyEffect(n,P.READ_ONLY),r&&(this["_set"+Vo(n)]=function(o){this._setProperty(n,o)})}_createPropertyObserver(n,r,o){let a={property:n,method:r,dynamicFn:!!o};this._addPropertyEffect(n,P.OBSERVE,{fn:Mi,info:a,trigger:{name:n}}),o&&this._addPropertyEffect(r,P.OBSERVE,{fn:Mi,info:a,trigger:{name:r}})}_createMethodObserver(n,r){let o=He(n);if(!o)throw new Error("Malformed observer expression '"+n+"'");Di(this,o,P.OBSERVE,ei,null,r)}_createNotifyingProperty(n){this._addPropertyEffect(n,P.NOTIFY,{fn:ho,info:{eventName:Pe(n)+"-changed",property:n}})}_createReflectedProperty(n){let r=this.constructor.attributeNameForProperty(n);r[0]==="-"?console.warn("Property "+n+" cannot be reflected to attribute "+r+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(n,P.REFLECT,{fn:po,info:{attrName:r}})}_createComputedProperty(n,r,o){let a=He(r);if(!a)throw new Error("Malformed computed expression '"+r+"'");const l=Di(this,a,P.COMPUTE,Ws,n,o);Ve(this,Us)[n]=l}_marshalArgs(n,r,o){const a=this.__data,l=[];for(let c=0,u=n.length;c<u;c++){let{name:d,structured:h,wildcard:f,value:p,literal:m}=n[c];if(!m)if(f){const g=fe(d,r),_=Bi(a,o,g?r:d);p={path:g?r:d,value:_,base:g?H(a,d):_}}else p=h?Bi(a,o,d):a[d];if(Qe&&!this._overrideLegacyUndefined&&p===void 0&&n.length>1)return Kt;l[c]=p}return l}static addPropertyEffect(n,r,o){this.prototype._addPropertyEffect(n,r,o)}static createPropertyObserver(n,r,o){this.prototype._createPropertyObserver(n,r,o)}static createMethodObserver(n,r){this.prototype._createMethodObserver(n,r)}static createNotifyingProperty(n){this.prototype._createNotifyingProperty(n)}static createReadOnlyProperty(n,r){this.prototype._createReadOnlyProperty(n,r)}static createReflectedProperty(n){this.prototype._createReflectedProperty(n)}static createComputedProperty(n,r,o){this.prototype._createComputedProperty(n,r,o)}static bindTemplate(n){return this.prototype._bindTemplate(n)}_bindTemplate(n,r){let o=this.constructor._parseTemplate(n),a=this.__preBoundTemplateInfo==o;if(!a)for(let l in o.propertyEffects)this._createPropertyAccessor(l);if(r)if(o=Object.create(o),o.wasPreBound=a,!this.__templateInfo)this.__templateInfo=o;else{const l=n._parentTemplateInfo||this.__templateInfo,c=l.lastChild;o.parent=l,l.lastChild=o,o.previousSibling=c,c?c.nextSibling=o:l.firstChild=o}else this.__preBoundTemplateInfo=o;return o}static _addTemplatePropertyEffect(n,r,o){let a=n.hostProps=n.hostProps||{};a[r]=!0;let l=n.propertyEffects=n.propertyEffects||{};(l[r]=l[r]||[]).push(o)}_stampTemplate(n,r){r=r||this._bindTemplate(n,!0),zt.push(this);let o=super._stampTemplate(n,r);if(zt.pop(),r.nodeList=o.nodeList,!r.wasPreBound){let a=r.childNodes=[];for(let l=o.firstChild;l;l=l.nextSibling)a.push(l)}return o.templateInfo=r,Po(this,r),this.__dataClientsReady&&(this._runEffectsForTemplate(r,this.__data,null,!1),this._flushClients()),o}_removeBoundDom(n){const r=n.templateInfo,{previousSibling:o,nextSibling:a,parent:l}=r;o?o.nextSibling=a:l&&(l.firstChild=a),a?a.previousSibling=o:l&&(l.lastChild=o),r.nextSibling=r.previousSibling=null;let c=r.childNodes;for(let u=0;u<c.length;u++){let d=c[u];_t(_t(d).parentNode).removeChild(d)}}static _parseTemplateNode(n,r,o){let a=t._parseTemplateNode.call(this,n,r,o);if(n.nodeType===Node.TEXT_NODE){let l=this._parseBindings(n.textContent,r);l&&(n.textContent=Vi(l)||" ",Be(this,r,o,"text","textContent",l),a=!0)}return a}static _parseTemplateNodeAttribute(n,r,o,a,l){let c=this._parseBindings(l,r);if(c){let u=a,d="property";ao.test(a)?d="attribute":a[a.length-1]=="$"&&(a=a.slice(0,-1),d="attribute");let h=Vi(c);return h&&d=="attribute"&&(a=="class"&&n.hasAttribute("class")&&(h+=" "+n.getAttribute(a)),n.setAttribute(a,h)),d=="attribute"&&u=="disable-upgrade$"&&n.setAttribute(a,""),n.localName==="input"&&u==="value"&&n.setAttribute(u,""),n.removeAttribute(u),d==="property"&&(a=Ds(a)),Be(this,r,o,d,a,c,h),!0}else return t._parseTemplateNodeAttribute.call(this,n,r,o,a,l)}static _parseTemplateNestedTemplate(n,r,o){let a=t._parseTemplateNestedTemplate.call(this,n,r,o);const l=n.parentNode,c=o.templateInfo,u=l.localName==="dom-if",d=l.localName==="dom-repeat";$i&&(u||d)&&(l.removeChild(n),o=o.parentInfo,o.templateInfo=c,o.noted=!0,a=!1);let h=c.hostProps;if(Ar&&u)h&&(r.hostProps=Object.assign(r.hostProps||{},h),$i||(o.parentInfo.noted=!0));else{let f="{";for(let p in h){let m=[{mode:f,source:p,dependencies:[p],hostProp:!0}];Be(this,r,o,"property","_host_"+p,m)}}return a}static _parseBindings(n,r){let o=[],a=0,l;for(;(l=ji.exec(n))!==null;){l.index>a&&o.push({literal:n.slice(a,l.index)});let c=l[1][0],u=!!l[2],d=l[3].trim(),h=!1,f="",p=-1;c=="{"&&(p=d.indexOf("::"))>0&&(f=d.substring(p+2),d=d.substring(0,p),h=!0);let m=He(d),g=[];if(m){let{args:_,methodName:y}=m;for(let v=0;v<_.length;v++){let w=_[v];w.literal||g.push(w)}let b=r.dynamicFns;(b&&b[y]||m.static)&&(g.push(y),m.dynamicFn=!0)}else g.push(d);o.push({source:d,mode:c,negate:u,customEvent:h,signature:m,dependencies:g,event:f}),a=ji.lastIndex}if(a&&a<n.length){let c=n.substring(a);c&&o.push({literal:c})}return o.length?o:null}static _evaluateBinding(n,r,o,a,l,c){let u;return r.signature?u=ei(n,o,a,l,r.signature):o!=r.source?u=H(n,r.source):c&&Ze(o)?u=H(n,o):u=n.__data[o],r.negate&&(u=!u),u}}return i}),zt=[];function Ho(e){const t={};for(let i in e){const s=e[i];t[i]=typeof s=="function"?{type:s}:s}return t}const Uo=St(e=>{const t=Vs(e);function i(r){const o=Object.getPrototypeOf(r);return o.prototype instanceof n?o:null}function s(r){if(!r.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",r))){let o=null;if(r.hasOwnProperty(JSCompiler_renameProperty("properties",r))){const a=r.properties;a&&(o=Ho(a))}r.__ownProperties=o}return r.__ownProperties}class n extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const o=this._properties;this.__observedAttributes=o?Object.keys(o).map(a=>this.prototype._addPropertyToAttributeMap(a)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const o=i(this);o&&o.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const o=s(this);o&&this.createProperties(o)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const o=i(this);this.__properties=Object.assign({},o&&o._properties,s(this))}return this.__properties}static typeForProperty(o){const a=this._properties[o];return a&&a.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return n});const Ko="3.5.2",Hi=window.ShadyCSS&&window.ShadyCSS.cssBuild,Wo=St(e=>{const t=Uo(Bo(e));function i(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let c=l._properties;for(let u in c){let d=c[u];"value"in d&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[u]=d)}}return l.__propertyDefaults}function s(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function n(l,c,u,d){u.computed&&(u.readOnly=!0),u.computed&&(l._hasReadOnlyEffect(c)?console.warn(`Cannot redefine computed property '${c}'.`):l._createComputedProperty(c,u.computed,d)),u.readOnly&&!l._hasReadOnlyEffect(c)?l._createReadOnlyProperty(c,!u.computed):u.readOnly===!1&&l._hasReadOnlyEffect(c)&&console.warn(`Cannot make readOnly property '${c}' non-readOnly.`),u.reflectToAttribute&&!l._hasReflectEffect(c)?l._createReflectedProperty(c):u.reflectToAttribute===!1&&l._hasReflectEffect(c)&&console.warn(`Cannot make reflected property '${c}' non-reflected.`),u.notify&&!l._hasNotifyEffect(c)?l._createNotifyingProperty(c):u.notify===!1&&l._hasNotifyEffect(c)&&console.warn(`Cannot make notify property '${c}' non-notify.`),u.observer&&l._createPropertyObserver(c,u.observer,d[u.observer]),l._addPropertyToAttributeMap(c)}function r(l,c,u,d){if(!Hi){const h=c.content.querySelectorAll("style"),f=zs(c),p=Ir(u),m=c.content.firstElementChild;for(let _=0;_<p.length;_++){let y=p[_];y.textContent=l._processStyleText(y.textContent,d),c.content.insertBefore(y,m)}let g=0;for(let _=0;_<f.length;_++){let y=f[_],b=h[g];b!==y?(y=y.cloneNode(!0),b.parentNode.insertBefore(y,b)):g++,y.textContent=l._processStyleText(y.textContent,d)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(c,u),Rr&&Hi&&Cr){const h=c.content.querySelectorAll("style");if(h){let f="";Array.from(h).forEach(p=>{f+=p.textContent,p.parentNode.removeChild(p)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(f)}}}function o(l){let c=null;if(l&&(!Xe||Er)&&(c=Ht.import(l,"template"),Xe&&!c))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return c}class a extends t{static get polymerElementVersion(){return Ko}static _finalizeClass(){t._finalizeClass.call(this);const c=s(this);c&&this.createObservers(c,this._properties),this._prepareTemplate()}static _prepareTemplate(){let c=this.template;c&&(typeof c=="string"?(console.error("template getter must return HTMLTemplateElement"),c=null):Or||(c=c.cloneNode(!0))),this.prototype._template=c}static createProperties(c){for(let u in c)n(this.prototype,u,c[u],c)}static createObservers(c,u){const d=this.prototype;for(let h=0;h<c.length;h++)d._createMethodObserver(c[h],u)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let c=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof c=="function"&&(c=c()),this._template=c!==void 0?c:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&o(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(c){this._template=c}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const c=this.importMeta;if(c)this._importPath=pi(c.url);else{const u=Ht.import(this.is);this._importPath=u&&u.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=Pr,this.importPath=this.constructor.importPath;let c=i(this.constructor);if(c)for(let u in c){let d=c[u];if(this._canApplyPropertyDefault(u)){let h=typeof d.value=="function"?d.value.call(this):d.value;this._hasAccessor(u)?this._setPendingProperty(u,h,!0):this[u]=h}}}_canApplyPropertyDefault(c){return!this.hasOwnProperty(c)}static _processStyleText(c,u){return fi(c,u)}static _finalizeTemplate(c){const u=this.prototype._template;if(u&&!u.__polymerFinalized){u.__polymerFinalized=!0;const d=this.importPath,h=d?Vt(d):"";r(this,u,c,h),this.prototype._bindTemplate(u)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(c){const u=_t(this);if(u.attachShadow)return c?(u.shadowRoot||(u.attachShadow({mode:"open",shadyUpgradeFragment:c}),u.shadowRoot.appendChild(c),this.constructor._styleSheet&&(u.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),Tr&&window.ShadyDOM&&window.ShadyDOM.flushInitial(u.shadowRoot),u.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(c){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,c)}resolveUrl(c,u){return!u&&this.importPath&&(u=Vt(this.importPath)),Vt(c,u)}static _parseTemplateContent(c,u,d){return u.dynamicFns=u.dynamicFns||this._properties,t._parseTemplateContent.call(this,c,u,d)}static _addTemplatePropertyEffect(c,u,d){return $r&&!(u in this._properties)&&!(d.info.part.signature&&d.info.part.signature.static)&&!d.info.part.hostProp&&!c.nestedTemplate&&console.warn(`Property '${u}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,c,u,d)}}return a});window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:e=>e});const Yo=Wo(HTMLElement),x=e=>typeof e=="string",Mt=()=>{let e,t;const i=new Promise((s,n)=>{e=s,t=n});return i.resolve=e,i.reject=t,i},Ui=e=>e==null?"":""+e,Jo=(e,t,i)=>{e.forEach(s=>{t[s]&&(i[s]=t[s])})},qo=/###/g,Ki=e=>e&&e.indexOf("###")>-1?e.replace(qo,"."):e,Wi=e=>!e||x(e),Bt=(e,t,i)=>{const s=x(t)?t.split("."):t;let n=0;for(;n<s.length-1;){if(Wi(e))return{};const r=Ki(s[n]);!e[r]&&i&&(e[r]=new i),Object.prototype.hasOwnProperty.call(e,r)?e=e[r]:e={},++n}return Wi(e)?{}:{obj:e,k:Ki(s[n])}},Yi=(e,t,i)=>{const{obj:s,k:n}=Bt(e,t,Object);if(s!==void 0||t.length===1){s[n]=i;return}let r=t[t.length-1],o=t.slice(0,t.length-1),a=Bt(e,o,Object);for(;a.obj===void 0&&o.length;)r=`${o[o.length-1]}.${r}`,o=o.slice(0,o.length-1),a=Bt(e,o,Object),a&&a.obj&&typeof a.obj[`${a.k}.${r}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${r}`]=i},Go=(e,t,i,s)=>{const{obj:n,k:r}=Bt(e,t,Object);n[r]=n[r]||[],n[r].push(i)},me=(e,t)=>{const{obj:i,k:s}=Bt(e,t);if(i)return i[s]},Xo=(e,t,i)=>{const s=me(e,i);return s!==void 0?s:me(t,i)},Gs=(e,t,i)=>{for(const s in t)s!=="__proto__"&&s!=="constructor"&&(s in e?x(e[s])||e[s]instanceof String||x(t[s])||t[s]instanceof String?i&&(e[s]=t[s]):Gs(e[s],t[s],i):e[s]=t[s]);return e},Pt=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var Qo={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const Zo=e=>x(e)?e.replace(/[&<>"'\/]/g,t=>Qo[t]):e;class ta{constructor(t){this.capacity=t,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(t){const i=this.regExpMap.get(t);if(i!==void 0)return i;const s=new RegExp(t);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(t,s),this.regExpQueue.push(t),s}}const ea=[" ",",","?","!",";"],ia=new ta(20),sa=(e,t,i)=>{t=t||"",i=i||"";const s=ea.filter(o=>t.indexOf(o)<0&&i.indexOf(o)<0);if(s.length===0)return!0;const n=ia.getRegExp(`(${s.map(o=>o==="?"?"\\?":o).join("|")})`);let r=!n.test(e);if(!r){const o=e.indexOf(i);o>0&&!n.test(e.substring(0,o))&&(r=!0)}return r},ii=function(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!e)return;if(e[t])return e[t];const s=t.split(i);let n=e;for(let r=0;r<s.length;){if(!n||typeof n!="object")return;let o,a="";for(let l=r;l<s.length;++l)if(l!==r&&(a+=i),a+=s[l],o=n[a],o!==void 0){if(["string","number","boolean"].indexOf(typeof o)>-1&&l<s.length-1)continue;r+=l-r+1;break}n=o}return n},_e=e=>e&&e.replace("_","-"),na={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){console&&console[e]&&console[e].apply(console,t)}};class ye{constructor(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(t,i)}init(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=i.prefix||"i18next:",this.logger=t||na,this.options=i,this.debug=i.debug}log(){for(var t=arguments.length,i=new Array(t),s=0;s<t;s++)i[s]=arguments[s];return this.forward(i,"log","",!0)}warn(){for(var t=arguments.length,i=new Array(t),s=0;s<t;s++)i[s]=arguments[s];return this.forward(i,"warn","",!0)}error(){for(var t=arguments.length,i=new Array(t),s=0;s<t;s++)i[s]=arguments[s];return this.forward(i,"error","")}deprecate(){for(var t=arguments.length,i=new Array(t),s=0;s<t;s++)i[s]=arguments[s];return this.forward(i,"warn","WARNING DEPRECATED: ",!0)}forward(t,i,s,n){return n&&!this.debug?null:(x(t[0])&&(t[0]=`${s}${this.prefix} ${t[0]}`),this.logger[i](t))}create(t){return new ye(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new ye(this.logger,t)}}var et=new ye;class Ee{constructor(){this.observers={}}on(t,i){return t.split(" ").forEach(s=>{this.observers[s]||(this.observers[s]=new Map);const n=this.observers[s].get(i)||0;this.observers[s].set(i,n+1)}),this}off(t,i){if(this.observers[t]){if(!i){delete this.observers[t];return}this.observers[t].delete(i)}}emit(t){for(var i=arguments.length,s=new Array(i>1?i-1:0),n=1;n<i;n++)s[n-1]=arguments[n];this.observers[t]&&Array.from(this.observers[t].entries()).forEach(o=>{let[a,l]=o;for(let c=0;c<l;c++)a(...s)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(o=>{let[a,l]=o;for(let c=0;c<l;c++)a.apply(a,[t,...s])})}}class Ji extends Ee{constructor(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const i=this.options.ns.indexOf(t);i>-1&&this.options.ns.splice(i,1)}getResource(t,i,s){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,o=n.ignoreJSONStructure!==void 0?n.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;t.indexOf(".")>-1?a=t.split("."):(a=[t,i],s&&(Array.isArray(s)?a.push(...s):x(s)&&r?a.push(...s.split(r)):a.push(s)));const l=me(this.data,a);return!l&&!i&&!s&&t.indexOf(".")>-1&&(t=a[0],i=a[1],s=a.slice(2).join(".")),l||!o||!x(s)?l:ii(this.data&&this.data[t]&&this.data[t][i],s,r)}addResource(t,i,s,n){let r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const o=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator;let a=[t,i];s&&(a=a.concat(o?s.split(o):s)),t.indexOf(".")>-1&&(a=t.split("."),n=i,i=a[1]),this.addNamespaces(i),Yi(this.data,a,n),r.silent||this.emit("added",t,i,s,n)}addResources(t,i,s){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const r in s)(x(s[r])||Array.isArray(s[r]))&&this.addResource(t,i,r,s[r],{silent:!0});n.silent||this.emit("added",t,i,s)}addResourceBundle(t,i,s,n,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},a=[t,i];t.indexOf(".")>-1&&(a=t.split("."),n=s,s=i,i=a[1]),this.addNamespaces(i);let l=me(this.data,a)||{};o.skipCopy||(s=JSON.parse(JSON.stringify(s))),n?Gs(l,s,r):l={...l,...s},Yi(this.data,a,l),o.silent||this.emit("added",t,i,s)}removeResourceBundle(t,i){this.hasResourceBundle(t,i)&&delete this.data[t][i],this.removeNamespaces(i),this.emit("removed",t,i)}hasResourceBundle(t,i){return this.getResource(t,i)!==void 0}getResourceBundle(t,i){return i||(i=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(t,i)}:this.getResource(t,i)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const i=this.getDataByLanguage(t);return!!(i&&Object.keys(i)||[]).find(n=>i[n]&&Object.keys(i[n]).length>0)}toJSON(){return this.data}}var Xs={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,i,s,n){return e.forEach(r=>{this.processors[r]&&(t=this.processors[r].process(t,i,s,n))}),t}};const qi={};class be extends Ee{constructor(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Jo(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=et.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(t==null)return!1;const s=this.resolve(t,i);return s&&s.res!==void 0}extractFromKey(t,i){let s=i.nsSeparator!==void 0?i.nsSeparator:this.options.nsSeparator;s===void 0&&(s=":");const n=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator;let r=i.ns||this.options.defaultNS||[];const o=s&&t.indexOf(s)>-1,a=!this.options.userDefinedKeySeparator&&!i.keySeparator&&!this.options.userDefinedNsSeparator&&!i.nsSeparator&&!sa(t,s,n);if(o&&!a){const l=t.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:t,namespaces:x(r)?[r]:r};const c=t.split(s);(s!==n||s===n&&this.options.ns.indexOf(c[0])>-1)&&(r=c.shift()),t=c.join(n)}return{key:t,namespaces:x(r)?[r]:r}}translate(t,i,s){if(typeof i!="object"&&this.options.overloadTranslationOptionHandler&&(i=this.options.overloadTranslationOptionHandler(arguments)),typeof i=="object"&&(i={...i}),i||(i={}),t==null)return"";Array.isArray(t)||(t=[String(t)]);const n=i.returnDetails!==void 0?i.returnDetails:this.options.returnDetails,r=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,{key:o,namespaces:a}=this.extractFromKey(t[t.length-1],i),l=a[a.length-1],c=i.lng||this.language,u=i.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&c.toLowerCase()==="cimode"){if(u){const v=i.nsSeparator||this.options.nsSeparator;return n?{res:`${l}${v}${o}`,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:`${l}${v}${o}`}return n?{res:o,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:o}const d=this.resolve(t,i);let h=d&&d.res;const f=d&&d.usedKey||o,p=d&&d.exactUsedKey||o,m=Object.prototype.toString.apply(h),g=["[object Number]","[object Function]","[object RegExp]"],_=i.joinArrays!==void 0?i.joinArrays:this.options.joinArrays,y=!this.i18nFormat||this.i18nFormat.handleAsObject,b=!x(h)&&typeof h!="boolean"&&typeof h!="number";if(y&&h&&b&&g.indexOf(m)<0&&!(x(_)&&Array.isArray(h))){if(!i.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const v=this.options.returnedObjectHandler?this.options.returnedObjectHandler(f,h,{...i,ns:a}):`key '${o} (${this.language})' returned an object instead of string.`;return n?(d.res=v,d.usedParams=this.getUsedParamsDetails(i),d):v}if(r){const v=Array.isArray(h),w=v?[]:{},$=v?p:f;for(const S in h)if(Object.prototype.hasOwnProperty.call(h,S)){const A=`${$}${r}${S}`;w[S]=this.translate(A,{...i,joinArrays:!1,ns:a}),w[S]===A&&(w[S]=h[S])}h=w}}else if(y&&x(_)&&Array.isArray(h))h=h.join(_),h&&(h=this.extendTranslation(h,t,i,s));else{let v=!1,w=!1;const $=i.count!==void 0&&!x(i.count),S=be.hasDefaultValue(i),A=$?this.pluralResolver.getSuffix(c,i.count,i):"",z=i.ordinal&&$?this.pluralResolver.getSuffix(c,i.count,{ordinal:!1}):"",M=$&&!i.ordinal&&i.count===0&&this.pluralResolver.shouldUseIntlApi(),V=M&&i[`defaultValue${this.options.pluralSeparator}zero`]||i[`defaultValue${A}`]||i[`defaultValue${z}`]||i.defaultValue;!this.isValidLookup(h)&&S&&(v=!0,h=V),this.isValidLookup(h)||(w=!0,h=o);const B=(i.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&w?void 0:h,N=S&&V!==h&&this.options.updateMissing;if(w||v||N){if(this.logger.log(N?"updateKey":"missingKey",c,l,o,N?V:h),r){const T=this.resolve(o,{...i,keySeparator:!1});T&&T.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let I=[];const J=this.languageUtils.getFallbackCodes(this.options.fallbackLng,i.lng||this.language);if(this.options.saveMissingTo==="fallback"&&J&&J[0])for(let T=0;T<J.length;T++)I.push(J[T]);else this.options.saveMissingTo==="all"?I=this.languageUtils.toResolveHierarchy(i.lng||this.language):I.push(i.lng||this.language);const L=(T,j,at)=>{const Zt=S&&at!==h?at:B;this.options.missingKeyHandler?this.options.missingKeyHandler(T,l,j,Zt,N,i):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(T,l,j,Zt,N,i),this.emit("missingKey",T,l,j,h)};this.options.saveMissing&&(this.options.saveMissingPlurals&&$?I.forEach(T=>{const j=this.pluralResolver.getSuffixes(T,i);M&&i[`defaultValue${this.options.pluralSeparator}zero`]&&j.indexOf(`${this.options.pluralSeparator}zero`)<0&&j.push(`${this.options.pluralSeparator}zero`),j.forEach(at=>{L([T],o+at,i[`defaultValue${at}`]||V)})}):L(I,o,V))}h=this.extendTranslation(h,t,i,d,s),w&&h===o&&this.options.appendNamespaceToMissingKey&&(h=`${l}:${o}`),(w||v)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?h=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${o}`:o,v?h:void 0):h=this.options.parseMissingKeyHandler(h))}return n?(d.res=h,d.usedParams=this.getUsedParamsDetails(i),d):h}extendTranslation(t,i,s,n,r){var o=this;if(this.i18nFormat&&this.i18nFormat.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...s},s.lng||this.language||n.usedLng,n.usedNS,n.usedKey,{resolved:n});else if(!s.skipInterpolation){s.interpolation&&this.interpolator.init({...s,interpolation:{...this.options.interpolation,...s.interpolation}});const c=x(t)&&(s&&s.interpolation&&s.interpolation.skipOnVariables!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let u;if(c){const h=t.match(this.interpolator.nestingRegexp);u=h&&h.length}let d=s.replace&&!x(s.replace)?s.replace:s;if(this.options.interpolation.defaultVariables&&(d={...this.options.interpolation.defaultVariables,...d}),t=this.interpolator.interpolate(t,d,s.lng||this.language||n.usedLng,s),c){const h=t.match(this.interpolator.nestingRegexp),f=h&&h.length;u<f&&(s.nest=!1)}!s.lng&&this.options.compatibilityAPI!=="v1"&&n&&n.res&&(s.lng=this.language||n.usedLng),s.nest!==!1&&(t=this.interpolator.nest(t,function(){for(var h=arguments.length,f=new Array(h),p=0;p<h;p++)f[p]=arguments[p];return r&&r[0]===f[0]&&!s.context?(o.logger.warn(`It seems you are nesting recursively key: ${f[0]} in key: ${i[0]}`),null):o.translate(...f,i)},s)),s.interpolation&&this.interpolator.reset()}const a=s.postProcess||this.options.postProcess,l=x(a)?[a]:a;return t!=null&&l&&l.length&&s.applyPostProcessor!==!1&&(t=Xs.handle(l,t,i,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...n,usedParams:this.getUsedParamsDetails(s)},...s}:s,this)),t}resolve(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s,n,r,o,a;return x(t)&&(t=[t]),t.forEach(l=>{if(this.isValidLookup(s))return;const c=this.extractFromKey(l,i),u=c.key;n=u;let d=c.namespaces;this.options.fallbackNS&&(d=d.concat(this.options.fallbackNS));const h=i.count!==void 0&&!x(i.count),f=h&&!i.ordinal&&i.count===0&&this.pluralResolver.shouldUseIntlApi(),p=i.context!==void 0&&(x(i.context)||typeof i.context=="number")&&i.context!=="",m=i.lngs?i.lngs:this.languageUtils.toResolveHierarchy(i.lng||this.language,i.fallbackLng);d.forEach(g=>{this.isValidLookup(s)||(a=g,!qi[`${m[0]}-${g}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(a)&&(qi[`${m[0]}-${g}`]=!0,this.logger.warn(`key "${n}" for languages "${m.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),m.forEach(_=>{if(this.isValidLookup(s))return;o=_;const y=[u];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(y,u,_,g,i);else{let v;h&&(v=this.pluralResolver.getSuffix(_,i.count,i));const w=`${this.options.pluralSeparator}zero`,$=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(h&&(y.push(u+v),i.ordinal&&v.indexOf($)===0&&y.push(u+v.replace($,this.options.pluralSeparator)),f&&y.push(u+w)),p){const S=`${u}${this.options.contextSeparator}${i.context}`;y.push(S),h&&(y.push(S+v),i.ordinal&&v.indexOf($)===0&&y.push(S+v.replace($,this.options.pluralSeparator)),f&&y.push(S+w))}}let b;for(;b=y.pop();)this.isValidLookup(s)||(r=b,s=this.getResource(_,g,b,i))}))})}),{res:s,usedKey:n,exactUsedKey:r,usedLng:o,usedNS:a}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,i,s){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(t,i,s,n):this.resourceStore.getResource(t,i,s,n)}getUsedParamsDetails(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const i=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],s=t.replace&&!x(t.replace);let n=s?t.replace:t;if(s&&typeof t.count<"u"&&(n.count=t.count),this.options.interpolation.defaultVariables&&(n={...this.options.interpolation.defaultVariables,...n}),!s){n={...n};for(const r of i)delete n[r]}return n}static hasDefaultValue(t){const i="defaultValue";for(const s in t)if(Object.prototype.hasOwnProperty.call(t,s)&&i===s.substring(0,i.length)&&t[s]!==void 0)return!0;return!1}}const Ue=e=>e.charAt(0).toUpperCase()+e.slice(1);class Gi{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=et.create("languageUtils")}getScriptPartFromCode(t){if(t=_e(t),!t||t.indexOf("-")<0)return null;const i=t.split("-");return i.length===2||(i.pop(),i[i.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(i.join("-"))}getLanguagePartFromCode(t){if(t=_e(t),!t||t.indexOf("-")<0)return t;const i=t.split("-");return this.formatLanguageCode(i[0])}formatLanguageCode(t){if(x(t)&&t.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let n=Intl.getCanonicalLocales(t)[0];if(n&&this.options.lowerCaseLng&&(n=n.toLowerCase()),n)return n}catch{}const i=["hans","hant","latn","cyrl","cans","mong","arab"];let s=t.split("-");return this.options.lowerCaseLng?s=s.map(n=>n.toLowerCase()):s.length===2?(s[0]=s[0].toLowerCase(),s[1]=s[1].toUpperCase(),i.indexOf(s[1].toLowerCase())>-1&&(s[1]=Ue(s[1].toLowerCase()))):s.length===3&&(s[0]=s[0].toLowerCase(),s[1].length===2&&(s[1]=s[1].toUpperCase()),s[0]!=="sgn"&&s[2].length===2&&(s[2]=s[2].toUpperCase()),i.indexOf(s[1].toLowerCase())>-1&&(s[1]=Ue(s[1].toLowerCase())),i.indexOf(s[2].toLowerCase())>-1&&(s[2]=Ue(s[2].toLowerCase()))),s.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let i;return t.forEach(s=>{if(i)return;const n=this.formatLanguageCode(s);(!this.options.supportedLngs||this.isSupportedCode(n))&&(i=n)}),!i&&this.options.supportedLngs&&t.forEach(s=>{if(i)return;const n=this.getLanguagePartFromCode(s);if(this.isSupportedCode(n))return i=n;i=this.options.supportedLngs.find(r=>{if(r===n)return r;if(!(r.indexOf("-")<0&&n.indexOf("-")<0)&&(r.indexOf("-")>0&&n.indexOf("-")<0&&r.substring(0,r.indexOf("-"))===n||r.indexOf(n)===0&&n.length>1))return r})}),i||(i=this.getFallbackCodes(this.options.fallbackLng)[0]),i}getFallbackCodes(t,i){if(!t)return[];if(typeof t=="function"&&(t=t(i)),x(t)&&(t=[t]),Array.isArray(t))return t;if(!i)return t.default||[];let s=t[i];return s||(s=t[this.getScriptPartFromCode(i)]),s||(s=t[this.formatLanguageCode(i)]),s||(s=t[this.getLanguagePartFromCode(i)]),s||(s=t.default),s||[]}toResolveHierarchy(t,i){const s=this.getFallbackCodes(i||this.options.fallbackLng||[],t),n=[],r=o=>{o&&(this.isSupportedCode(o)?n.push(o):this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))};return x(t)&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&r(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&r(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&r(this.getLanguagePartFromCode(t))):x(t)&&r(this.formatLanguageCode(t)),s.forEach(o=>{n.indexOf(o)<0&&r(this.formatLanguageCode(o))}),n}}let ra=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],oa={1:e=>+(e>1),2:e=>+(e!=1),3:e=>0,4:e=>e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2,5:e=>e==0?0:e==1?1:e==2?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5,6:e=>e==1?0:e>=2&&e<=4?1:2,7:e=>e==1?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2,8:e=>e==1?0:e==2?1:e!=8&&e!=11?2:3,9:e=>+(e>=2),10:e=>e==1?0:e==2?1:e<7?2:e<11?3:4,11:e=>e==1||e==11?0:e==2||e==12?1:e>2&&e<20?2:3,12:e=>+(e%10!=1||e%100==11),13:e=>+(e!==0),14:e=>e==1?0:e==2?1:e==3?2:3,15:e=>e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2,16:e=>e%10==1&&e%100!=11?0:e!==0?1:2,17:e=>e==1||e%10==1&&e%100!=11?0:1,18:e=>e==0?0:e==1?1:2,19:e=>e==1?0:e==0||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3,20:e=>e==1?0:e==0||e%100>0&&e%100<20?1:2,21:e=>e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0,22:e=>e==1?0:e==2?1:(e<0||e>10)&&e%10==0?2:3};const aa=["v1","v2","v3"],la=["v4"],Xi={zero:0,one:1,two:2,few:3,many:4,other:5},ca=()=>{const e={};return ra.forEach(t=>{t.lngs.forEach(i=>{e[i]={numbers:t.nr,plurals:oa[t.fc]}})}),e};class ua{constructor(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=t,this.options=i,this.logger=et.create("pluralResolver"),(!this.options.compatibilityJSON||la.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=ca(),this.pluralRulesCache={}}addRule(t,i){this.rules[t]=i}clearCache(){this.pluralRulesCache={}}getRule(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const s=_e(t==="dev"?"en":t),n=i.ordinal?"ordinal":"cardinal",r=JSON.stringify({cleanedCode:s,type:n});if(r in this.pluralRulesCache)return this.pluralRulesCache[r];let o;try{o=new Intl.PluralRules(s,{type:n})}catch{if(!t.match(/-|_/))return;const l=this.languageUtils.getLanguagePartFromCode(t);o=this.getRule(l,i)}return this.pluralRulesCache[r]=o,o}return this.rules[t]||this.rules[this.languageUtils.getLanguagePartFromCode(t)]}needsPlural(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const s=this.getRule(t,i);return this.shouldUseIntlApi()?s&&s.resolvedOptions().pluralCategories.length>1:s&&s.numbers.length>1}getPluralFormsOfKey(t,i){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(t,s).map(n=>`${i}${n}`)}getSuffixes(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const s=this.getRule(t,i);return s?this.shouldUseIntlApi()?s.resolvedOptions().pluralCategories.sort((n,r)=>Xi[n]-Xi[r]).map(n=>`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${n}`):s.numbers.map(n=>this.getSuffix(t,n,i)):[]}getSuffix(t,i){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const n=this.getRule(t,s);return n?this.shouldUseIntlApi()?`${this.options.prepend}${s.ordinal?`ordinal${this.options.prepend}`:""}${n.select(i)}`:this.getSuffixRetroCompatible(n,i):(this.logger.warn(`no plural rule found for: ${t}`),"")}getSuffixRetroCompatible(t,i){const s=t.noAbs?t.plurals(i):t.plurals(Math.abs(i));let n=t.numbers[s];this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1&&(n===2?n="plural":n===1&&(n=""));const r=()=>this.options.prepend&&n.toString()?this.options.prepend+n.toString():n.toString();return this.options.compatibilityJSON==="v1"?n===1?"":typeof n=="number"?`_plural_${n.toString()}`:r():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1?r():this.options.prepend&&s.toString()?this.options.prepend+s.toString():s.toString()}shouldUseIntlApi(){return!aa.includes(this.options.compatibilityJSON)}}const Qi=function(e,t,i){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,r=Xo(e,t,i);return!r&&n&&x(i)&&(r=ii(e,i,s),r===void 0&&(r=ii(t,i,s))),r},Ke=e=>e.replace(/\$/g,"$$$$");class da{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=et.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||(i=>i),this.init(t)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const{escape:i,escapeValue:s,useRawValueToEscape:n,prefix:r,prefixEscaped:o,suffix:a,suffixEscaped:l,formatSeparator:c,unescapeSuffix:u,unescapePrefix:d,nestingPrefix:h,nestingPrefixEscaped:f,nestingSuffix:p,nestingSuffixEscaped:m,nestingOptionsSeparator:g,maxReplaces:_,alwaysFormat:y}=t.interpolation;this.escape=i!==void 0?i:Zo,this.escapeValue=s!==void 0?s:!0,this.useRawValueToEscape=n!==void 0?n:!1,this.prefix=r?Pt(r):o||"{{",this.suffix=a?Pt(a):l||"}}",this.formatSeparator=c||",",this.unescapePrefix=u?"":d||"-",this.unescapeSuffix=this.unescapePrefix?"":u||"",this.nestingPrefix=h?Pt(h):f||Pt("$t("),this.nestingSuffix=p?Pt(p):m||Pt(")"),this.nestingOptionsSeparator=g||",",this.maxReplaces=_||1e3,this.alwaysFormat=y!==void 0?y:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=(i,s)=>i&&i.source===s?(i.lastIndex=0,i):new RegExp(s,"g");this.regexp=t(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=t(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=t(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(t,i,s,n){let r,o,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=f=>{if(f.indexOf(this.formatSeparator)<0){const _=Qi(i,l,f,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(_,void 0,s,{...n,...i,interpolationkey:f}):_}const p=f.split(this.formatSeparator),m=p.shift().trim(),g=p.join(this.formatSeparator).trim();return this.format(Qi(i,l,m,this.options.keySeparator,this.options.ignoreJSONStructure),g,s,{...n,...i,interpolationkey:m})};this.resetRegExp();const u=n&&n.missingInterpolationHandler||this.options.missingInterpolationHandler,d=n&&n.interpolation&&n.interpolation.skipOnVariables!==void 0?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:f=>Ke(f)},{regex:this.regexp,safeValue:f=>this.escapeValue?Ke(this.escape(f)):Ke(f)}].forEach(f=>{for(a=0;r=f.regex.exec(t);){const p=r[1].trim();if(o=c(p),o===void 0)if(typeof u=="function"){const g=u(t,r,n);o=x(g)?g:""}else if(n&&Object.prototype.hasOwnProperty.call(n,p))o="";else if(d){o=r[0];continue}else this.logger.warn(`missed to pass in variable ${p} for interpolating ${t}`),o="";else!x(o)&&!this.useRawValueToEscape&&(o=Ui(o));const m=f.safeValue(o);if(t=t.replace(r[0],m),d?(f.regex.lastIndex+=o.length,f.regex.lastIndex-=r[0].length):f.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),t}nest(t,i){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n,r,o;const a=(l,c)=>{const u=this.nestingOptionsSeparator;if(l.indexOf(u)<0)return l;const d=l.split(new RegExp(`${u}[ ]*{`));let h=`{${d[1]}`;l=d[0],h=this.interpolate(h,o);const f=h.match(/'/g),p=h.match(/"/g);(f&&f.length%2===0&&!p||p.length%2!==0)&&(h=h.replace(/'/g,'"'));try{o=JSON.parse(h),c&&(o={...c,...o})}catch(m){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,m),`${l}${u}${h}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,l};for(;n=this.nestingRegexp.exec(t);){let l=[];o={...s},o=o.replace&&!x(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;let c=!1;if(n[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(n[1])){const u=n[1].split(this.formatSeparator).map(d=>d.trim());n[1]=u.shift(),l=u,c=!0}if(r=i(a.call(this,n[1].trim(),o),o),r&&n[0]===t&&!x(r))return r;x(r)||(r=Ui(r)),r||(this.logger.warn(`missed to resolve ${n[1]} for nesting ${t}`),r=""),c&&(r=l.reduce((u,d)=>this.format(u,d,s.lng,{...s,interpolationkey:n[1].trim()}),r.trim())),t=t.replace(n[0],r),this.regexp.lastIndex=0}return t}}const ha=e=>{let t=e.toLowerCase().trim();const i={};if(e.indexOf("(")>-1){const s=e.split("(");t=s[0].toLowerCase().trim();const n=s[1].substring(0,s[1].length-1);t==="currency"&&n.indexOf(":")<0?i.currency||(i.currency=n.trim()):t==="relativetime"&&n.indexOf(":")<0?i.range||(i.range=n.trim()):n.split(";").forEach(o=>{if(o){const[a,...l]=o.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,""),u=a.trim();i[u]||(i[u]=c),c==="false"&&(i[u]=!1),c==="true"&&(i[u]=!0),isNaN(c)||(i[u]=parseInt(c,10))}})}return{formatName:t,formatOptions:i}},Et=e=>{const t={};return(i,s,n)=>{let r=n;n&&n.interpolationkey&&n.formatParams&&n.formatParams[n.interpolationkey]&&n[n.interpolationkey]&&(r={...r,[n.interpolationkey]:void 0});const o=s+JSON.stringify(r);let a=t[o];return a||(a=e(_e(s),n),t[o]=a),a(i)}};class fa{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=et.create("formatter"),this.options=t,this.formats={number:Et((i,s)=>{const n=new Intl.NumberFormat(i,{...s});return r=>n.format(r)}),currency:Et((i,s)=>{const n=new Intl.NumberFormat(i,{...s,style:"currency"});return r=>n.format(r)}),datetime:Et((i,s)=>{const n=new Intl.DateTimeFormat(i,{...s});return r=>n.format(r)}),relativetime:Et((i,s)=>{const n=new Intl.RelativeTimeFormat(i,{...s});return r=>n.format(r,s.range||"day")}),list:Et((i,s)=>{const n=new Intl.ListFormat(i,{...s});return r=>n.format(r)})},this.init(t)}init(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=i.interpolation.formatSeparator||","}add(t,i){this.formats[t.toLowerCase().trim()]=i}addCached(t,i){this.formats[t.toLowerCase().trim()]=Et(i)}format(t,i,s){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=i.split(this.formatSeparator);if(r.length>1&&r[0].indexOf("(")>1&&r[0].indexOf(")")<0&&r.find(a=>a.indexOf(")")>-1)){const a=r.findIndex(l=>l.indexOf(")")>-1);r[0]=[r[0],...r.splice(1,a)].join(this.formatSeparator)}return r.reduce((a,l)=>{const{formatName:c,formatOptions:u}=ha(l);if(this.formats[c]){let d=a;try{const h=n&&n.formatParams&&n.formatParams[n.interpolationkey]||{},f=h.locale||h.lng||n.locale||n.lng||s;d=this.formats[c](a,f,{...u,...n,...h})}catch(h){this.logger.warn(h)}return d}else this.logger.warn(`there was no format function for ${c}`);return a},t)}}const pa=(e,t)=>{e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)};class ga extends Ee{constructor(t,i,s){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=t,this.store=i,this.services=s,this.languageUtils=s.languageUtils,this.options=n,this.logger=et.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=n.maxParallelReads||10,this.readingCalls=0,this.maxRetries=n.maxRetries>=0?n.maxRetries:5,this.retryTimeout=n.retryTimeout>=1?n.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(s,n.backend,n)}queueLoad(t,i,s,n){const r={},o={},a={},l={};return t.forEach(c=>{let u=!0;i.forEach(d=>{const h=`${c}|${d}`;!s.reload&&this.store.hasResourceBundle(c,d)?this.state[h]=2:this.state[h]<0||(this.state[h]===1?o[h]===void 0&&(o[h]=!0):(this.state[h]=1,u=!1,o[h]===void 0&&(o[h]=!0),r[h]===void 0&&(r[h]=!0),l[d]===void 0&&(l[d]=!0)))}),u||(a[c]=!0)}),(Object.keys(r).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:n}),{toLoad:Object.keys(r),pending:Object.keys(o),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(t,i,s){const n=t.split("|"),r=n[0],o=n[1];i&&this.emit("failedLoading",r,o,i),!i&&s&&this.store.addResourceBundle(r,o,s,void 0,void 0,{skipCopy:!0}),this.state[t]=i?-1:2,i&&s&&(this.state[t]=0);const a={};this.queue.forEach(l=>{Go(l.loaded,[r],o),pa(l,t),i&&l.errors.push(i),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{a[c]||(a[c]={});const u=l.loaded[c];u.length&&u.forEach(d=>{a[c][d]===void 0&&(a[c][d]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(t,i,s){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,o=arguments.length>5?arguments[5]:void 0;if(!t.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:i,fcName:s,tried:n,wait:r,callback:o});return}this.readingCalls++;const a=(c,u)=>{if(this.readingCalls--,this.waitingReads.length>0){const d=this.waitingReads.shift();this.read(d.lng,d.ns,d.fcName,d.tried,d.wait,d.callback)}if(c&&u&&n<this.maxRetries){setTimeout(()=>{this.read.call(this,t,i,s,n+1,r*2,o)},r);return}o(c,u)},l=this.backend[s].bind(this.backend);if(l.length===2){try{const c=l(t,i);c&&typeof c.then=="function"?c.then(u=>a(null,u)).catch(a):a(null,c)}catch(c){a(c)}return}return l(t,i,a)}prepareLoading(t,i){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),n&&n();x(t)&&(t=this.languageUtils.toResolveHierarchy(t)),x(i)&&(i=[i]);const r=this.queueLoad(t,i,s,n);if(!r.toLoad.length)return r.pending.length||n(),null;r.toLoad.forEach(o=>{this.loadOne(o)})}load(t,i,s){this.prepareLoading(t,i,{},s)}reload(t,i,s){this.prepareLoading(t,i,{reload:!0},s)}loadOne(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const s=t.split("|"),n=s[0],r=s[1];this.read(n,r,"read",void 0,void 0,(o,a)=>{o&&this.logger.warn(`${i}loading namespace ${r} for language ${n} failed`,o),!o&&a&&this.logger.log(`${i}loaded namespace ${r} for language ${n}`,a),this.loaded(t,o,a)})}saveMissing(t,i,s,n,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(i)){this.logger.warn(`did not save key "${s}" as the namespace "${i}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(s==null||s==="")){if(this.backend&&this.backend.create){const l={...o,isUpdate:r},c=this.backend.create.bind(this.backend);if(c.length<6)try{let u;c.length===5?u=c(t,i,s,n,l):u=c(t,i,s,n),u&&typeof u.then=="function"?u.then(d=>a(null,d)).catch(a):a(null,u)}catch(u){a(u)}else c(t,i,s,n,a,l)}!t||!t[0]||this.store.addResource(t[0],i,s,n)}}}const Zi=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if(typeof e[1]=="object"&&(t=e[1]),x(e[1])&&(t.defaultValue=e[1]),x(e[2])&&(t.tDescription=e[2]),typeof e[2]=="object"||typeof e[3]=="object"){const i=e[3]||e[2];Object.keys(i).forEach(s=>{t[s]=i[s]})}return t},interpolation:{escapeValue:!0,format:e=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),ts=e=>(x(e.ns)&&(e.ns=[e.ns]),x(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),x(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e),se=()=>{},ma=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(i=>{typeof e[i]=="function"&&(e[i]=e[i].bind(e))})};class Wt extends Ee{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;if(super(),this.options=ts(t),this.services={},this.logger=et,this.modules={external:[]},ma(this),i&&!this.isInitialized&&!t.isClone){if(!this.options.initImmediate)return this.init(t,i),this;setTimeout(()=>{this.init(t,i)},0)}}init(){var t=this;let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof i=="function"&&(s=i,i={}),!i.defaultNS&&i.defaultNS!==!1&&i.ns&&(x(i.ns)?i.defaultNS=i.ns:i.ns.indexOf("translation")<0&&(i.defaultNS=i.ns[0]));const n=Zi();this.options={...n,...this.options,...ts(i)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...n.interpolation,...this.options.interpolation}),i.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=i.keySeparator),i.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=i.nsSeparator);const r=u=>u?typeof u=="function"?new u:u:null;if(!this.options.isClone){this.modules.logger?et.init(r(this.modules.logger),this.options):et.init(null,this.options);let u;this.modules.formatter?u=this.modules.formatter:typeof Intl<"u"&&(u=fa);const d=new Gi(this.options);this.store=new Ji(this.options.resources,this.options);const h=this.services;h.logger=et,h.resourceStore=this.store,h.languageUtils=d,h.pluralResolver=new ua(d,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),u&&(!this.options.interpolation.format||this.options.interpolation.format===n.interpolation.format)&&(h.formatter=r(u),h.formatter.init(h,this.options),this.options.interpolation.format=h.formatter.format.bind(h.formatter)),h.interpolator=new da(this.options),h.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},h.backendConnector=new ga(r(this.modules.backend),h.resourceStore,h,this.options),h.backendConnector.on("*",function(f){for(var p=arguments.length,m=new Array(p>1?p-1:0),g=1;g<p;g++)m[g-1]=arguments[g];t.emit(f,...m)}),this.modules.languageDetector&&(h.languageDetector=r(this.modules.languageDetector),h.languageDetector.init&&h.languageDetector.init(h,this.options.detection,this.options)),this.modules.i18nFormat&&(h.i18nFormat=r(this.modules.i18nFormat),h.i18nFormat.init&&h.i18nFormat.init(this)),this.translator=new be(this.services,this.options),this.translator.on("*",function(f){for(var p=arguments.length,m=new Array(p>1?p-1:0),g=1;g<p;g++)m[g-1]=arguments[g];t.emit(f,...m)}),this.modules.external.forEach(f=>{f.init&&f.init(this)})}if(this.format=this.options.interpolation.format,s||(s=se),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const u=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);u.length>0&&u[0]!=="dev"&&(this.options.lng=u[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(u=>{this[u]=function(){return t.store[u](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(u=>{this[u]=function(){return t.store[u](...arguments),t}});const l=Mt(),c=()=>{const u=(d,h)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(h),s(d,h)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return u(null,this.t.bind(this));this.changeLanguage(this.options.lng,u)};return this.options.resources||!this.options.initImmediate?c():setTimeout(c,0),l}loadResources(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:se;const n=x(t)?t:this.language;if(typeof t=="function"&&(s=t),!this.options.resources||this.options.partialBundledLanguages){if(n&&n.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return s();const r=[],o=a=>{if(!a||a==="cimode")return;this.services.languageUtils.toResolveHierarchy(a).forEach(c=>{c!=="cimode"&&r.indexOf(c)<0&&r.push(c)})};n?o(n):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>o(l)),this.options.preload&&this.options.preload.forEach(a=>o(a)),this.services.backendConnector.load(r,this.options.ns,a=>{!a&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),s(a)})}else s(null)}reloadResources(t,i,s){const n=Mt();return typeof t=="function"&&(s=t,t=void 0),typeof i=="function"&&(s=i,i=void 0),t||(t=this.languages),i||(i=this.options.ns),s||(s=se),this.services.backendConnector.reload(t,i,r=>{n.resolve(),s(r)}),n}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&Xs.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1))for(let i=0;i<this.languages.length;i++){const s=this.languages[i];if(!(["cimode","dev"].indexOf(s)>-1)&&this.store.hasLanguageSomeTranslations(s)){this.resolvedLanguage=s;break}}}changeLanguage(t,i){var s=this;this.isLanguageChangingTo=t;const n=Mt();this.emit("languageChanging",t);const r=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},o=(l,c)=>{c?(r(c),this.translator.changeLanguage(c),this.isLanguageChangingTo=void 0,this.emit("languageChanged",c),this.logger.log("languageChanged",c)):this.isLanguageChangingTo=void 0,n.resolve(function(){return s.t(...arguments)}),i&&i(l,function(){return s.t(...arguments)})},a=l=>{!t&&!l&&this.services.languageDetector&&(l=[]);const c=x(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);c&&(this.language||r(c),this.translator.language||this.translator.changeLanguage(c),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(c)),this.loadResources(c,u=>{o(u,c)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(t),n}getFixedT(t,i,s){var n=this;const r=function(o,a){let l;if(typeof a!="object"){for(var c=arguments.length,u=new Array(c>2?c-2:0),d=2;d<c;d++)u[d-2]=arguments[d];l=n.options.overloadTranslationOptionHandler([o,a].concat(u))}else l={...a};l.lng=l.lng||r.lng,l.lngs=l.lngs||r.lngs,l.ns=l.ns||r.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||s||r.keyPrefix);const h=n.options.keySeparator||".";let f;return l.keyPrefix&&Array.isArray(o)?f=o.map(p=>`${l.keyPrefix}${h}${p}`):f=l.keyPrefix?`${l.keyPrefix}${h}${o}`:o,n.t(f,l)};return x(t)?r.lng=t:r.lngs=t,r.ns=i,r.keyPrefix=s,r}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const s=i.lng||this.resolvedLanguage||this.languages[0],n=this.options?this.options.fallbackLng:!1,r=this.languages[this.languages.length-1];if(s.toLowerCase()==="cimode")return!0;const o=(a,l)=>{const c=this.services.backendConnector.state[`${a}|${l}`];return c===-1||c===0||c===2};if(i.precheck){const a=i.precheck(this,o);if(a!==void 0)return a}return!!(this.hasResourceBundle(s,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(s,t)&&(!n||o(r,t)))}loadNamespaces(t,i){const s=Mt();return this.options.ns?(x(t)&&(t=[t]),t.forEach(n=>{this.options.ns.indexOf(n)<0&&this.options.ns.push(n)}),this.loadResources(n=>{s.resolve(),i&&i(n)}),s):(i&&i(),Promise.resolve())}loadLanguages(t,i){const s=Mt();x(t)&&(t=[t]);const n=this.options.preload||[],r=t.filter(o=>n.indexOf(o)<0&&this.services.languageUtils.isSupportedCode(o));return r.length?(this.options.preload=n.concat(r),this.loadResources(o=>{s.resolve(),i&&i(o)}),s):(i&&i(),Promise.resolve())}dir(t){if(t||(t=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!t)return"rtl";const i=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],s=this.services&&this.services.languageUtils||new Gi(Zi());return i.indexOf(s.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;return new Wt(t,i)}cloneInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:se;const s=t.forkResourceStore;s&&delete t.forkResourceStore;const n={...this.options,...t,isClone:!0},r=new Wt(n);return(t.debug!==void 0||t.prefix!==void 0)&&(r.logger=r.logger.clone(t)),["store","services","language"].forEach(a=>{r[a]=this[a]}),r.services={...this.services},r.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},s&&(r.store=new Ji(this.store.data,n),r.services.resourceStore=r.store),r.translator=new be(r.services,n),r.translator.on("*",function(a){for(var l=arguments.length,c=new Array(l>1?l-1:0),u=1;u<l;u++)c[u-1]=arguments[u];r.emit(a,...c)}),r.init(n,i),r.translator.options=n,r.translator.backendConnector.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},r}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const O=Wt.createInstance();O.createInstance=Wt.createInstance;O.createInstance;O.dir;O.init;O.loadResources;O.reloadResources;O.use;O.changeLanguage;O.getFixedT;O.t;O.exists;O.setDefaultNamespace;O.hasLoadedNamespace;O.loadNamespaces;O.loadLanguages;const le=[],Oe=()=>{O.isInitialized||O.init({lng:"en",resStore:{en:{}},fallbackLng:!1})},$e=e=>e.reduce((t,i,s)=>(t.count===void 0&&typeof i=="number"&&(t.count=i),typeof i=="object"?{...t,...i}:(t[s]=i,t)),{}),Yt=function(e){Oe();const t=$e([...arguments].slice(1));return delete t.count,O.t(e,t)},_a=function(e,t){Oe();const i=$e([...arguments].slice(2)),s=i.count;let n;delete i.count;const r=O.services.pluralResolver.getSuffix(O.language,s);return r?(i.defaultValue=t,n=e+r):(n=e,i.defaultValue=e),O.t(n,i)},ya=function(e,t){Oe();const i=$e([...arguments].slice(2));return i.context=e,delete i.count,O.t(t,i)},ba=function(e,t,i){Oe();const s=$e([...arguments].slice(3)),n=s.count,r=e?"_"+e:"";let o=t;delete s.count;const a=O.services.pluralResolver.getSuffix(O.language,n);return a?(s.defaultValue=i,o=t+r+a):(o=t,s.context=e),O.t(o,s)},va=(e,t,i)=>{O.init({resources:{}}),O.addResourceBundle(e,t,i)};St(e=>class extends e{static get properties(){return{t:{type:Object,value(){return{}}}}}_filterT(t){return t.filter(i=>i!==this.t)}_(){return Yt.apply(null,this._filterT([...arguments]))}connectedCallback(){super.connectedCallback(),le.push(this)}disconnectedCallback(){super.disconnectedCallback();const t=le.indexOf(this);t>=0&&le.splice(t,1)}gettext(){return Yt.apply(null,this._filterT([...arguments]))}ngettext(){return _a.apply(null,this._filterT([...arguments]))}pgettext(){return ya.apply(null,this._filterT([...arguments]))}npgettext(){return ba.apply(null,this._filterT([...arguments]))}});class wa extends Yo{static get properties(){return{compatibilityJSON:{type:String,value:"v3"},domain:{type:String,value:"messages"},interpolationPrefix:{type:String,value:"__"},interpolationSuffix:{type:String,value:"__"},language:{type:String,value:"en"},namespace:{type:String,value:"translation"},translations:{type:Object,observer(t){t!=null&&(va(this.language,this.namespace,t),le.forEach(i=>i.set("t",{})))}},keySeparator:{type:String,value:"."},nsSeparator:{type:String,value:":"}}}ready(){super.ready(),O.init({compatibilityJSON:this.compatibilityJSON,interpolation:{escapeValue:!1,prefix:this.interpolationPrefix,suffix:this.interpolationSuffix},keySeparator:this.keySeparator,lng:this.language,nsSeparator:this.nsSeparator,resStore:{}})}}customElements.define("cosmoz-i18next",wa);Es(st,new DocumentFragment).constructor;class xa extends HTMLElement{onDisconnect;disconnectedCallback(){this.onDisconnect?.()}}customElements.define("disconnect-observer",xa);function Sa(e){return()=>e}const Ca=Sa(),Pa=Ca,ve=e=>e,U=(e,...t)=>typeof e=="function"?e(...t):e;class Ea{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}let Oa=class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}};const es=e=>!Fn(e)&&typeof e.then=="function",is=1073741823;let $a=class extends ui{constructor(){super(...arguments),this._$Cwt=is,this._$Cbt=[],this._$CK=new Ea(this),this._$CX=new Oa}render(...t){return t.find(i=>!es(i))??q}update(t,i){const s=this._$Cbt;let n=s.length;this._$Cbt=i;const r=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<i.length&&!(a>this._$Cwt);a++){const l=i[a];if(!es(l))return this._$Cwt=a,l;a<n&&l===s[a]||(this._$Cwt=is,n=0,Promise.resolve(l).then(async c=>{for(;o.get();)await o.get();const u=r.deref();if(u!==void 0){const d=u._$Cbt.indexOf(l);d>-1&&d<u._$Cwt&&(u._$Cwt=d,u.setValue(c))}}))}return q}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const we=xt($a);const ss=(e,t,i)=>{const s=new Map;for(let n=t;n<=i;n++)s.set(e[n],n);return s},Qs=xt(class extends qt{constructor(e){if(super(e),e.type!==tt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let s;i===void 0?i=t:t!==void 0&&(s=t);const n=[],r=[];let o=0;for(const a of e)n[o]=s?s(a,o):o,r[o]=i(a,o),o++;return{values:r,keys:n}}render(e,t,i){return this.dt(e,t,i).values}update(e,[t,i,s]){const n=Dn(e),{values:r,keys:o}=this.dt(t,i,s);if(!Array.isArray(n))return this.ut=o,r;const a=this.ut??=[],l=[];let c,u,d=0,h=n.length-1,f=0,p=r.length-1;for(;d<=h&&f<=p;)if(n[d]===null)d++;else if(n[h]===null)h--;else if(a[d]===o[f])l[f]=gt(n[d],r[f]),d++,f++;else if(a[h]===o[p])l[p]=gt(n[h],r[p]),h--,p--;else if(a[d]===o[p])l[p]=gt(n[d],r[p]),kt(e,l[p+1],n[d]),d++,p--;else if(a[h]===o[f])l[f]=gt(n[h],r[f]),kt(e,n[d],n[h]),h--,f++;else if(c===void 0&&(c=ss(o,f,p),u=ss(a,d,h)),c.has(a[d]))if(c.has(a[h])){const m=u.get(o[f]),g=m!==void 0?n[m]:null;if(g===null){const _=kt(e,n[d]);gt(_,r[f]),l[f]=_}else l[f]=gt(g,r[f]),kt(e,n[d],g),n[m]=null;f++}else Ie(n[h]),h--;else Ie(n[d]),d++;for(;f<=p;){const m=kt(e,l[p+1]);gt(m,r[f]),l[f++]=m}for(;d<=h;){const m=n[d++];m!==null&&Ie(m)}return this.ut=o,Os(e,l),q}}),Ta=e=>typeof e=="object"&&e!==null&&Symbol.iterator in e;function ut(e){return e==null?[]:Array.isArray(e)?e:typeof e=="string"?[e]:Ta(e)?Array.from(e):[e]}const We=(e,t=ve)=>i=>{const s=ut(e).map(t);return ut(i).filter(n=>!s.includes(t(n)))};function Zs(e){return e?t=>t?.[e]:ve}const La=e=>{const t=Zs(e);return i=>typeof i=="string"?i:t(i)?.toString()||""},Aa=e=>t=>{const i={};for(const s in t)e.includes(s)&&(i[s]=t[s]);return i};function ns(e,t,...i){return e?e(t,...i):t}const Te=xt(class extends qt{constructor(e){if(super(e),e.type!==tt.PROPERTY&&e.type!==tt.ATTRIBUTE&&e.type!==tt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ps(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===q||t===st)return t;const i=e.element,s=e.name;if(e.type===tt.PROPERTY){if(t===i[s])return q}else if(e.type===tt.BOOLEAN_ATTRIBUTE){if(!!t===i.hasAttribute(s))return q}else if(e.type===tt.ATTRIBUTE&&i.getAttribute(s)===t+"")return q;return Os(e),t}}),Ye=new WeakMap,Gt=xt(class extends ui{render(e){return st}update(e,[t]){const i=t!==this.G;return i&&this.G!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),st}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let i=Ye.get(t);i===void 0&&(i=new WeakMap,Ye.set(t,i)),i.get(this.G)!==void 0&&this.G.call(this.ht,void 0),i.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?Ye.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),tn=ft(class extends ht{values;constructor(e,t,i,s){super(e,t),Object.assign(t.host,i),this.values=s}update(e,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((t,i)=>this.values[i]!==t)}}),Ra=/([A-Z])/gu,rs=(e,t,i)=>{e[t]=i,e.dispatchEvent(new CustomEvent(t.replace(Ra,"-$1").toLowerCase()+"-changed",{detail:{value:i}}))},en=e=>{const t=Ot(void 0),i=E(c=>t.current=c,[]),s=e.shadowRoot,n=E(c=>e.dispatchEvent(new Event(c.type,{bubbles:c.bubbles})),[]),r=E(c=>rs(e,"value",c.target.value),[]),o=E(c=>rs(e,"focused",c.type==="focus"),[]),a=E(()=>t.current?.focus(),[]),l=E(()=>{const c=t.current?.checkValidity();return e.toggleAttribute("invalid",!c),c},[]);return tn({focus:a,validate:l},[a,l]),k(()=>{const c=u=>{u.defaultPrevented||e.disabled||u.target.matches("input, textarea, label")||(u.preventDefault(),e.matches(":focus-within")||a())};return s.addEventListener("mousedown",c),()=>s.removeEventListener("mousedown",c)},[a]),{onChange:n,onFocus:o,onInput:r,onRef:i}},ka=e=>F(()=>{if(e==null)return;const t=new RegExp(e,"u");return i=>{!i.defaultPrevented&&i.data&&!t.test(i.data)&&i.preventDefault()}},[e]),sn=(e,{label:t,invalid:i,errorMessage:s})=>C`
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
	`,nn=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],Na=({placeholder:e,noLabelFloat:t,label:i})=>(t?i:void 0)||e||" ",os=lt`
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
`,rn=lt`
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
		${os}
	}
	@container style(--focused: focused) {
		${os}
	}
`,za=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...nn],Ma=e=>{const{type:t="text",pattern:i,allowedPattern:s,autocomplete:n,value:r,readonly:o,disabled:a,min:l,max:c,step:u,maxlength:d}=e,{onChange:h,onFocus:f,onInput:p,onRef:m}=en(e),g=ka(s);return sn(C`
			<input
				${Gt(m)}
				style="--chars: ${r?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${R(i)}
				autocomplete=${R(n)}
				placeholder=${Na(e)}
				?readonly=${o}
				?aria-disabled=${a}
				?disabled=${a}
				.value=${Te(r??"")}
				maxlength=${R(d)}
				@beforeinput=${g}
				@input=${p}
				@change=${h}
				@focus=${f}
				@blur=${f}
				min=${R(l)}
				max=${R(c)}
				step=${R(u)}
			/>
		`,e)};customElements.define("cosmoz-input",rt(Ma,{observedAttributes:za,styleSheets:[ci(rn)]}));const as=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},Fa=(e,t=0)=>{if(t>0){const i=e.getAttribute("rows")??"",s=e.style.height;e.style.height="",e.setAttribute("rows",t),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=s,e.setAttribute("rows",i)}},Da=e=>{const{value:t,maxRows:i}=e,s=F(()=>()=>e.shadowRoot.querySelector("#input"),[]);k(()=>Fa(s(),i),[i,s]),k(()=>as(s()),[s,t]),k(()=>{const n=s(),r=new ResizeObserver(()=>requestAnimationFrame(()=>as(n)));return r.observe(n),()=>r.unobserve(n)},[s])},Ia=["rows","placeholder",...nn],ja=e=>{const{autocomplete:t,value:i,placeholder:s,readonly:n,disabled:r,rows:o,cols:a,maxlength:l}=e,{onChange:c,onFocus:u,onInput:d,onRef:h}=en(e);return Da(e),sn(C`
			<textarea id="input" part="input"
				${Gt(h)}
				autocomplete=${R(t)}
				placeholder=${s||" "}
				rows=${o??1} cols=${R(a)}
				?readonly=${n} ?aria-disabled=${r} ?disabled=${r}
				.value=${Te(i??"")} maxlength=${R(l)} @input=${d}
				@change=${c} @focus=${u} @blur=${u}>`,e)};customElements.define("cosmoz-textarea",rt(ja,{observedAttributes:Ia,styleSheets:[ci(rn)]}));const Va=e=>{const{label:t,value:i,disabled:s,error:n}=e,r=E(o=>e.dispatchEvent(new CustomEvent("change",{detail:o.target.checked})),[]);return C`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${Te(!!i)}
			?disabled=${s}
			@change=${r}
		/>
		${D(t,()=>C`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${D(n,o=>C`<div class="failure">${o}</div>`)} `},Ba=bt`
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
`,Ha=bt`
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
`;customElements.define("cosmoz-toggle",rt(Va,{styleSheets:[Ha,Ba],observedAttributes:["disabled"]}));const Ua=e=>{if(!e||e===1/0)return;if(typeof e=="number")return e;const t=parseFloat(e.replace(/[\s]/gu,"").replace(/^−/gu,"-").replace(/[,.]/gu,".").replace(/[.](?=.*[.])/gu,""));if(!isNaN(t))return t},Ka=/^[0-9.,e-]+$/u,Wa=e=>e==null||e===""||Number.isNaN(e)||Array.isArray(e)&&e.length<1,ls=e=>Wa(e)&&Yt("Required"),Ya=Symbol("error"),Ja=(e,t,i,s)=>{for(const n of ut(e)){const r=n(t,i,s);if(r)return r}},qa=(e,t)=>e.validate&&Ja(e.validate,t[e.path??e.id],t,e),Ga=(e,t)=>{const i=e.map(s=>({...s,error:qa(s,t)}));return{fields:i,invalid:i.some(({error:s})=>!!s)}},Xa=(e,t)=>t?Ga(e,t):{fields:e,invalid:!0},Qa=(e,t,i,s)=>{s!=null&&Object.is(s[t],i)||e({[t]:i})},Za=e=>Array.isArray(e)?e.some(t=>t===ls):e===ls,on=e=>({field:t,value:i,values:s,onChange:n,...r})=>{const o=(c,u)=>(t.onChange??Qa)(d=>n(d,u),t.path??t.id,ns(t.value?.[1],c,s,t),s),a=U(t.mandatory??Za(t.validate),i,s,t)?" *":void 0;if(!U(t.hidden,i,s,t))return e({...t,...r,values:s,label:[U(t.label,i,s,t),a].join(""),placeholder:U(t.placeholder,i,s,t),disabled:U(t.disabled,i,s,t),warning:U(t.warning,i,s,t),prefix:U(t.prefix,i,s,t),suffix:U(t.suffix,i,s,t),value:ns(t.value?.[0],i,s,t),onFocus:t.onFocus?.(o,i,s,t),onChange:o})},tl=e=>D(e,()=>C`<span slot="prefix">${e}</span>`),el=e=>D(e,()=>C`<span slot="suffix">${e}</span>`),il=(e,t="suffix")=>D(e,()=>cr({slot:t,title:e,width:"22",height:"22",styles:"color: var(--paper-amber-500); vertical-align: middle"})),sl=(e,t="suffix")=>D(e,()=>lr({slot:t,title:e,width:"22",height:"22",styles:"color: var(--cz-text-color); vertical-align: middle; cursor: help"})),nl=({prefix:e,suffix:t,warning:i,description:s})=>[tl(e),el(t),il(i),sl(s)],an=e=>{const{value:t,values:i,onFocus:s,onInput:n,...r}=e,{id:o,type:a="text",label:l,placeholder:c,noLabelFloat:u,alwaysFloatLabel:d,error:h,prefix:f,suffix:p,warning:m,allowedPattern:g,step:_,disabled:y,maxlength:b,min:v,max:w,autosize:$,noSpinner:S,title:A,description:z}=r;return C`<cosmoz-input
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
		.allowedPattern=${g}
		.step=${_}
		.label=${l}
		.value=${t}
		title=${R((h??A)||void 0)}
		maxlength=${R(b)}
		min=${R(U(v,t,i,r))}
		max=${R(U(w,t,i,r))}
		@focus=${s}
		@input=${n}
		>${nl({prefix:f,suffix:p,warning:m,description:z})}</cosmoz-input
	>`},rl=on(({onChange:e,...t})=>an({...t,onInput:i=>e(i.target.value)})),Eu=on(({onChange:e,allowedPattern:t=Ka,...i})=>an({...i,type:"number",allowedPattern:t,onInput:s=>e(Ua(s.target.value))})),si=Symbol("touched");function ni(e,t=!0){if(e==null)return;const i=e;return t?i[si]=!0:delete i[si],e}const ln=e=>ni(e,!1),cn=e=>!!e?.[si],ol=({field:e,values:t,...i})=>{const s=(cn(t)&&(t?.[Ya]?.[e.id]??e.error))??!1,n=t?.[e.path??e.id];return(e.input??rl)({...i,error:s,value:n,field:e,values:t})},al=({fields:e,...t})=>Qs(e??[],({id:i})=>i,i=>ol({field:i,fields:e,...t})),ll=({fields:e,selector:t=""})=>(e??[]).map(({id:i,styles:s})=>s?`${t}[name="${String(i)}"] { ${Object.entries(s).map(([n,r])=>`${n}:${r}`).join(";")} }`:"").join(`
`);class Le extends Event{constructor(t){super(Le.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}Le.eventName="rangeChanged";class Ae extends Event{constructor(t){super(Ae.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}Ae.eventName="visibilityChanged";class Re extends Event{constructor(){super(Re.eventName,{bubbles:!1})}}Re.eventName="unpinned";class cl{constructor(t){this._element=null;const i=t??window;this._node=i,t&&(this._element=t)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class ul extends cl{constructor(t,i){super(i),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const s=this._node;this._originalScrollTo=s.scrollTo,this._originalScrollBy=s.scrollBy,this._originalScroll=s.scroll,this._attach(t)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(t,i){const s=typeof t=="number"&&typeof i=="number"?{left:t,top:i}:t;this._scrollTo(s)}scrollBy(t,i){const s=typeof t=="number"&&typeof i=="number"?{left:t,top:i}:t;s.top!==void 0&&(s.top+=this.scrollTop),s.left!==void 0&&(s.left+=this.scrollLeft),this._scrollTo(s)}_nativeScrollTo(t){this._originalScrollTo.bind(this._element||window)(t)}_scrollTo(t,i=null,s=null){this._end!==null&&this._end(),t.behavior==="smooth"?(this._setDestination(t),this._retarget=i,this._end=s):this._resetScrollState(),this._nativeScrollTo(t)}_setDestination(t){let{top:i,left:s}=t;return i=i===void 0?void 0:Math.max(0,Math.min(i,this.maxScrollTop)),s=s===void 0?void 0:Math.max(0,Math.min(s,this.maxScrollLeft)),this._destination!==null&&s===this._destination.left&&i===this._destination.top?!1:(this.__destination={top:i,left:s,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(t){this._destination&&this._setDestination(t)&&this._nativeScrollTo(this._destination)}managedScrollTo(t,i,s){return this._scrollTo(t,i,s),this._updateManagedScrollTo}correctScrollError(t){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(t),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:t,scrollLeft:i}=this;let{top:s,left:n}=this._destination;s=Math.min(s||0,this.maxScrollTop),n=Math.min(n||0,this.maxScrollLeft);const r=Math.abs(s-t),o=Math.abs(n-i);r<1&&o<1&&(this._end&&this._end(),this._resetScrollState())}}detach(t){return this._clients.delete(t),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(t){this._clients.add(t),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let cs=typeof window<"u"?window.ResizeObserver:void 0;const ri=Symbol("virtualizerRef"),ne="virtualizer-sizer";let us;class dl{constructor(t){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!t)throw new Error("Virtualizer constructor requires a configuration object");if(t.hostElement)this._init(t);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(t){Array.isArray(t)&&t!==this._items&&(this._itemsChanged=!0,this._items=t,this._schedule(this._updateLayout))}_init(t){this._isScroller=!!t.scroller,this._initHostElement(t);const i=t.layout||{};this._layoutInitialized=this._initLayout(i)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new cs(()=>this._hostElementSizeChanged()),this._childrenRO=new cs(this._childrenSizeChanged.bind(this))}_initHostElement(t){const i=this._hostElement=t.hostElement;this._applyVirtualizerStyles(),i[ri]=this}connected(){this._initObservers();const t=this._isScroller;this._clippingAncestors=pl(this._hostElement,t),this._scrollerController=new ul(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(t=>{t.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(t),this._hostElementRO.observe(t)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(t=>this._childrenRO.observe(t)),this._scrollEventListeners.forEach(t=>t.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(t=>t.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const i=this._hostElement.style;i.display=i.display||"block",i.position=i.position||"relative",i.contain=i.contain||"size layout",this._isScroller&&(i.overflow=i.overflow||"auto",i.minHeight=i.minHeight||"150px")}_getSizer(){const t=this._hostElement;if(!this._sizer){let i=t.querySelector(`[${ne}]`);i||(i=document.createElement("div"),i.setAttribute(ne,""),t.appendChild(i)),Object.assign(i.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),i.textContent="&nbsp;",i.setAttribute(ne,""),this._sizer=i}return this._sizer}async updateLayoutConfig(t){await this._layoutInitialized;const i=t.type||us;if(typeof i=="function"&&this._layout instanceof i){const s={...t};return delete s.type,this._layout.config=s,!0}return!1}async _initLayout(t){let i,s;if(typeof t.type=="function"){s=t.type;const n={...t};delete n.type,i=n}else i=t;s===void 0&&(us=s=(await In(()=>import("./flow-BqIEBwW6.js"),[],import.meta.url)).FlowLayout),this._layout=new s(n=>this._handleLayoutMessage(n),i),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const t=window.performance.now(),i=t-this._benchmarkStart,n=performance.getEntriesByName("uv-virtualizing","measure").filter(r=>r.startTime>=this._benchmarkStart&&r.startTime<t).reduce((r,o)=>r+o.duration,0);return this._benchmarkStart=null,{timeElapsed:i,virtualizationTime:n}}return null}_measureChildren(){const t={},i=this._children,s=this._measureChildOverride||this._measureChild;for(let n=0;n<i.length;n++){const r=i[n],o=this._first+n;(this._itemsChanged||this._toBeMeasured.has(r))&&(t[o]=s.call(this,r,this._items[o]))}this._childMeasurements=t,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(t){const{width:i,height:s}=t.getBoundingClientRect();return Object.assign({width:i,height:s},hl(t))}async _schedule(t){this._scheduled.has(t)||(this._scheduled.add(t),await Promise.resolve(),this._scheduled.delete(t),t.call(this))}async _updateDOM(t){this._scrollSize=t.scrollSize,this._adjustRange(t.range),this._childrenPos=t.childPositions,this._scrollError=t.scrollError||null;const{_rangeChanged:i,_itemsChanged:s}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(i||s)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(t=>this._childrenRO.observe(t)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(t){console.warn("Error measuring performance data: ",t)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(t){t.type==="scroll"?(t.currentTarget===window||this._clippingAncestors.includes(t.currentTarget))&&this._handleScrollEvent():console.warn("event not handled",t)}_handleLayoutMessage(t){t.type==="stateChanged"?this._updateDOM(t):t.type==="visibilityChanged"?(this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._notifyVisibility()):t.type==="unpinned"&&this._hostElement.dispatchEvent(new Re)}get _children(){const t=[];let i=this._hostElement.firstElementChild;for(;i;)i.hasAttribute(ne)||t.push(i),i=i.nextElementSibling;return t}_updateView(){const t=this._hostElement,i=this._scrollerController?.element,s=this._layout;if(t&&i&&s){let n,r,o,a;const l=t.getBoundingClientRect();n=0,r=0,o=window.innerHeight,a=window.innerWidth;const c=this._clippingAncestors.map(_=>_.getBoundingClientRect());c.unshift(l);for(const _ of c)n=Math.max(n,_.top),r=Math.max(r,_.left),o=Math.min(o,_.bottom),a=Math.min(a,_.right);const u=i.getBoundingClientRect(),d={left:l.left-u.left,top:l.top-u.top},h={width:i.scrollWidth,height:i.scrollHeight},f=n-l.top+t.scrollTop,p=r-l.left+t.scrollLeft,m=Math.max(0,o-n),g=Math.max(0,a-r);s.viewportSize={width:g,height:m},s.viewportScroll={top:f,left:p},s.totalScrollSize=h,s.offsetWithinScroller=d}}_sizeHostElement(t){const s=t&&t.width!==null?Math.min(82e5,t.width):0,n=t&&t.height!==null?Math.min(82e5,t.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${s}px, ${n}px)`;else{const r=this._hostElement.style;r.minWidth=s?`${s}px`:"100%",r.minHeight=n?`${n}px`:"100%"}}_positionChildren(t){t&&t.forEach(({top:i,left:s,width:n,height:r,xOffset:o,yOffset:a},l)=>{const c=this._children[l-this._first];c&&(c.style.position="absolute",c.style.boxSizing="border-box",c.style.transform=`translate(${s}px, ${i}px)`,n!==void 0&&(c.style.width=n+"px"),r!==void 0&&(c.style.height=r+"px"),c.style.left=o===void 0?null:o+"px",c.style.top=a===void 0?null:a+"px")})}async _adjustRange(t){const{_first:i,_last:s,_firstVisible:n,_lastVisible:r}=this;this._first=t.first,this._last=t.last,this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==i||this._last!==s,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==n||this._lastVisible!==r}_correctScrollError(){if(this._scrollError){const{scrollTop:t,scrollLeft:i}=this._scrollerController,{top:s,left:n}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:t-s,left:i-n})}}element(t){return t===1/0&&(t=this._items.length-1),this._items?.[t]===void 0?void 0:{scrollIntoView:(i={})=>this._scrollElementIntoView({...i,index:t})}}_scrollElementIntoView(t){if(t.index>=this._first&&t.index<=this._last)this._children[t.index-this._first].scrollIntoView(t);else if(t.index=Math.min(t.index,this._items.length-1),t.behavior==="smooth"){const i=this._layout.getScrollIntoViewCoordinates(t),{behavior:s}=t;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(i,{behavior:s}),()=>this._layout.getScrollIntoViewCoordinates(t),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=t}else this._layout.pin=t}_checkScrollIntoViewTarget(t){const{index:i}=this._scrollIntoViewTarget||{};i&&t?.has(i)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new Le({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new Ae({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((t,i)=>{this._layoutCompleteResolver=t,this._layoutCompleteRejecter=i})),this._layoutCompletePromise}_rejectLayoutCompletePromise(t){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(t),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(t){if(this._layout?.measureChildren){for(const i of t)this._toBeMeasured.set(i.target,i.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function hl(e){const t=window.getComputedStyle(e);return{marginTop:re(t.marginTop),marginRight:re(t.marginRight),marginBottom:re(t.marginBottom),marginLeft:re(t.marginLeft)}}function re(e){const t=e?parseFloat(e):NaN;return Number.isNaN(t)?0:t}function ds(e){if(e.assignedSlot!==null)return e.assignedSlot;if(e.parentElement!==null)return e.parentElement;const t=e.parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host||null}function fl(e,t=!1){const i=[];let s=t?e:ds(e);for(;s!==null;)i.push(s),s=ds(s);return i}function pl(e,t=!1){let i=!1;return fl(e,t).filter(s=>{if(i)return!1;const n=getComputedStyle(s);return i=n.position==="fixed",n.overflow!=="visible"})}const gl=e=>e,ml=(e,t)=>C`${t}: ${JSON.stringify(e,null,2)}`;class _l extends ui{constructor(t){if(super(t),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(i,s)=>ml(i,s+this._first),this._keyFunction=(i,s)=>gl(i,s+this._first),this._items=[],t.type!==tt.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(t){t&&this._setFunctions(t);const i=[];if(this._first>=0&&this._last>=this._first)for(let s=this._first;s<=this._last;s++)i.push(this._items[s]);return Qs(i,this._keyFunction,this._renderItem)}update(t,[i]){this._setFunctions(i);const s=this._items!==i.items;return this._items=i.items||[],this._virtualizer?this._updateVirtualizerConfig(t,i):this._initialize(t,i),s?q:this.render()}async _updateVirtualizerConfig(t,i){if(!await this._virtualizer.updateLayoutConfig(i.layout||{})){const n=t.parentNode;this._makeVirtualizer(n,i)}this._virtualizer.items=this._items}_setFunctions(t){const{renderItem:i,keyFunction:s}=t;i&&(this._renderItem=(n,r)=>i(n,r+this._first)),s&&(this._keyFunction=(n,r)=>s(n,r+this._first))}_makeVirtualizer(t,i){this._virtualizer&&this._virtualizer.disconnected();const{layout:s,scroller:n,items:r}=i;this._virtualizer=new dl({hostElement:t,layout:s,scroller:n}),this._virtualizer.items=r,this._virtualizer.connected()}_initialize(t,i){const s=t.parentNode;s&&s.nodeType===1&&(s.addEventListener("rangeChanged",n=>{this._first=n.first,this._last=n.last,this.setValue(this.render())}),this._makeVirtualizer(s,i))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}}const yl=xt(_l);lt`
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
`;const bl=()=>st,vl=(e,t)=>Promise.resolve(e).then(t,t),wl=e=>we(e?.then(bl,t=>C`<div class="failure">${t.message}</div>`),st),xl=({save$:e,progress:t,...i})=>{const s=({onSave:n,onClick:r=n,title:o,disabled:a,progress:l,content:c=st,slot:u})=>C` <button
			class="button save"
			slot=${R(u)}
			?disabled=${a}
			?data-progress=${l}
			@click=${d=>(d.stopPropagation(),r())}
		>
			${c} ${o}
		</button>`;return we(vl(e,()=>s(i)),s({...i,disabled:!0,progress:!0,content:C`<cz-spinner></cz-spinner> ${D(t,n=>n.join("/"))}`}))},Sl=lt`
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
		fill: var(--primary-button-icon-fill, #596679);
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
		border: transparent;
		background: var(--cz-action-button-bg, #fff);
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
		background: var(--cz-action-button-hover-bg, #f0f0f0);
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
`,Cl=(e,t)=>new Promise((i,s)=>{if(t.aborted){s(new DOMException("Aborted","AbortError"));return}const n=setTimeout(i,e);t.addEventListener("abort",()=>{clearTimeout(n),s(new DOMException("Aborted","AbortError"))},{once:!0})});async function Pl(e,t,i,s){let n;for(;;){if(t.aborted)return await e.return({}),null;const{value:r,done:o}=await e.next(n);if(o)return r;switch(r._tag){case"loading":i(r.patch),n=void 0;break;case"call":n=await r.fn(t,...r.args);break;case"delay":try{await Cl(r.ms,t)}catch(a){if(a instanceof DOMException&&a.name==="AbortError")return await e.return({}),null;throw a}n=void 0;break;case"select":n=r.selector?r.selector(s()):s();break}if(t.aborted)return await e.return({}),null}}const El=()=>{let e=null;return{run:async(t,i,s)=>{e?.abort(),e=new AbortController;try{return await Pl(t,e.signal,i,s)}catch(n){if(n instanceof DOMException&&n.name==="AbortError")return null;throw n}},cancel:()=>{e?.abort(),e=null}}},Ol=(e,t)=>e.length!==t.length||e.some((i,s)=>!Object.is(i,t[s])),$l=e=>{console.error("[cosmoz-form] async rule error:",e)},Tl=(e,t,i)=>{const s=$l,n=Ot(e.values);n.current=e.values;const r=Ot(new Map),o=Ot(new Map),a=Ot(new Map);return k(()=>()=>{for(const l of r.current.values())l.cancel()},[]),k(()=>{if(t?.length)for(const l of t){const[c,u,d=El]=l;r.current.has(l)||r.current.set(l,d());const h=u(e.values),f=o.current.get(l);if(f!=null&&!Ol(h,f))continue;const p=a.current.get(l);o.current.set(l,h),a.current.set(l,e.values),r.current.get(l).run(c(e.values,p,void 0,void 0),g=>e.onChange(g,!1),()=>n.current).then(g=>{g!==null&&e.onChange(g,!1)}).catch(g=>s(g,l))}},[e.values]),e},Ll=(e,t)=>!t||e.some((i,s)=>!Object.is(t[s],i)),ce=({oldItem:e,newItem:t,rules:i,index:s,oldIndex:n=s})=>i?i.reduce((r,[o,a])=>e&&a&&!Ll(a(r,s),a(e,n))?r:{...r,...o(r,e,s,n)},t):t,Al=(e,t,i)=>{const[,s]=e;return{values:s,onReset:E(()=>t(([n])=>[n,n]),[t]),onValues:E((n,r=!0)=>t(([o,a])=>[o,ni(ce({oldItem:a,newItem:U(n,a),rules:i}),r)]),[i,t]),onChange:E((n,r=!0)=>t(([o,a])=>[o,ni(ce({oldItem:a,newItem:{...a,...U(n,a)},rules:i}),r)]),[i,t]),load:E((n,r)=>{if(!n){t([n,n]);return}const o=ln(ce({oldItem:void 0,newItem:n,rules:r??i}));t([o,o])},[i,t]),touched:F(()=>cn(s),[s])}},Rl=(e,t)=>ln(ce({oldItem:void 0,newItem:e,rules:t})),un=(e,t=[])=>{const i=e.filter(s=>s?.rules!=null).flatMap(s=>s?.rules);return[...t,...i]},kl=(e,t,{fields:i,rules:s})=>{const n=F(()=>U(i)??[],[i]),r=F(()=>un(n,s),[n,s]),o=Al(e,t,r),{values:a}=o;return{...F(()=>Xa(n,a),[n,a]),...o}},Nl=e=>{const[t,i]=G(()=>{const s=U(e.fields)??[],n=un(s,e.rules),r=Rl(e.initial,n);return[r,r]});return kl(t,i,e)};function zl({fields:e,initial:t,rules:i,asyncRules:s,onSave:n,allowEmpty:r}){const o=Nl({fields:e,initial:t,rules:i});Tl(o,s);const{values:a,invalid:l}=o,[c,u]=G(),[d,h]=G(),f=a==null||a===t,p=o.fields?.length>0&&!(f&&r)&&(f||l);return{...o,save$:c,onSave:E(()=>u(n?.(a,t,h)),[n,a,t]),disabled:p,progress:d}}const Ml=lt`
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
`,dn=e=>{const{description:t,auto:i,uncancelable:s,hideCancelButton:n,saveText:r=Yt("OK")}=e,{onSave:o,disabled:a,save$:l,progress:c,...u}=zl(e);return k(()=>{i&&o()},[i]),C` <style>
			${Sl} ${ll(u)}${Ml}
		</style>
		${D(t,()=>C`<p class="description">${t}</p>`)}
		<div class="form" part="form">${al(u)}</div>
		<div class="buttons">
			${wl(l)}
			${xl({save$:l,onSave:o,disabled:a,title:r,progress:c})}
			${D(!n,()=>C`<button class="button" value="cancel" ?disabled=${s}>
						${Yt("Cancel")}
					</button>`)}
		</div>`};customElements.define("cosmoz-form-dialog",hi(dn,{observedAttributes:["allow-empty"]}));customElements.define("cosmoz-form-dialog-next",hi(dn,{observedAttributes:["allow-empty"]}));const Lt=Math.min,W=Math.max,xe=Math.round,oe=Math.floor,it=e=>({x:e,y:e}),Fl={left:"right",right:"left",bottom:"top",top:"bottom"},Dl={start:"end",end:"start"};function hs(e,t,i){return W(e,Lt(t,i))}function ke(e,t){return typeof e=="function"?e(t):e}function vt(e){return e.split("-")[0]}function Ne(e){return e.split("-")[1]}function hn(e){return e==="x"?"y":"x"}function fn(e){return e==="y"?"height":"width"}const Il=new Set(["top","bottom"]);function ct(e){return Il.has(vt(e))?"y":"x"}function pn(e){return hn(ct(e))}function jl(e,t,i){i===void 0&&(i=!1);const s=Ne(e),n=pn(e),r=fn(n);let o=n==="x"?s===(i?"end":"start")?"right":"left":s==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(o=Se(o)),[o,Se(o)]}function Vl(e){const t=Se(e);return[oi(e),t,oi(t)]}function oi(e){return e.replace(/start|end/g,t=>Dl[t])}const fs=["left","right"],ps=["right","left"],Bl=["top","bottom"],Hl=["bottom","top"];function Ul(e,t,i){switch(e){case"top":case"bottom":return i?t?ps:fs:t?fs:ps;case"left":case"right":return t?Bl:Hl;default:return[]}}function Kl(e,t,i,s){const n=Ne(e);let r=Ul(vt(e),i==="start",s);return n&&(r=r.map(o=>o+"-"+n),t&&(r=r.concat(r.map(oi)))),r}function Se(e){return e.replace(/left|right|bottom|top/g,t=>Fl[t])}function Wl(e){return{top:0,right:0,bottom:0,left:0,...e}}function Yl(e){return typeof e!="number"?Wl(e):{top:e,right:e,bottom:e,left:e}}function Ce(e){const{x:t,y:i,width:s,height:n}=e;return{width:s,height:n,top:i,left:t,right:t+s,bottom:i+n,x:t,y:i}}function gs(e,t,i){let{reference:s,floating:n}=e;const r=ct(t),o=pn(t),a=fn(o),l=vt(t),c=r==="y",u=s.x+s.width/2-n.width/2,d=s.y+s.height/2-n.height/2,h=s[a]/2-n[a]/2;let f;switch(l){case"top":f={x:u,y:s.y-n.height};break;case"bottom":f={x:u,y:s.y+s.height};break;case"right":f={x:s.x+s.width,y:d};break;case"left":f={x:s.x-n.width,y:d};break;default:f={x:s.x,y:s.y}}switch(Ne(t)){case"start":f[o]-=h*(i&&c?-1:1);break;case"end":f[o]+=h*(i&&c?-1:1);break}return f}const Jl=async(e,t,i)=>{const{placement:s="bottom",strategy:n="absolute",middleware:r=[],platform:o}=i,a=r.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(t));let c=await o.getElementRects({reference:e,floating:t,strategy:n}),{x:u,y:d}=gs(c,s,l),h=s,f={},p=0;for(let m=0;m<a.length;m++){const{name:g,fn:_}=a[m],{x:y,y:b,data:v,reset:w}=await _({x:u,y:d,initialPlacement:s,placement:h,strategy:n,middlewareData:f,rects:c,platform:o,elements:{reference:e,floating:t}});u=y??u,d=b??d,f={...f,[g]:{...f[g],...v}},w&&p<=50&&(p++,typeof w=="object"&&(w.placement&&(h=w.placement),w.rects&&(c=w.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:n}):w.rects),{x:u,y:d}=gs(c,h,l)),m=-1)}return{x:u,y:d,placement:h,strategy:n,middlewareData:f}};async function _i(e,t){var i;t===void 0&&(t={});const{x:s,y:n,platform:r,rects:o,elements:a,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:h=!1,padding:f=0}=ke(t,e),p=Yl(f),g=a[h?d==="floating"?"reference":"floating":d],_=Ce(await r.getClippingRect({element:(i=await(r.isElement==null?void 0:r.isElement(g)))==null||i?g:g.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),y=d==="floating"?{x:s,y:n,width:o.floating.width,height:o.floating.height}:o.reference,b=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a.floating)),v=await(r.isElement==null?void 0:r.isElement(b))?await(r.getScale==null?void 0:r.getScale(b))||{x:1,y:1}:{x:1,y:1},w=Ce(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:y,offsetParent:b,strategy:l}):y);return{top:(_.top-w.top+p.top)/v.y,bottom:(w.bottom-_.bottom+p.bottom)/v.y,left:(_.left-w.left+p.left)/v.x,right:(w.right-_.right+p.right)/v.x}}const ql=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var i,s;const{placement:n,middlewareData:r,rects:o,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:h,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:m=!0,...g}=ke(e,t);if((i=r.arrow)!=null&&i.alignmentOffset)return{};const _=vt(n),y=ct(a),b=vt(a)===a,v=await(l.isRTL==null?void 0:l.isRTL(c.floating)),w=h||(b||!m?[Se(a)]:Vl(a)),$=p!=="none";!h&&$&&w.push(...Kl(a,m,p,v));const S=[a,...w],A=await _i(t,g),z=[];let M=((s=r.flip)==null?void 0:s.overflows)||[];if(u&&z.push(A[_]),d){const N=jl(n,o,v);z.push(A[N[0]],A[N[1]])}if(M=[...M,{placement:n,overflows:z}],!z.every(N=>N<=0)){var V,Z;const N=(((V=r.flip)==null?void 0:V.index)||0)+1,I=S[N];if(I&&(!(d==="alignment"?y!==ct(I):!1)||M.every(T=>ct(T.placement)===y?T.overflows[0]>0:!0)))return{data:{index:N,overflows:M},reset:{placement:I}};let J=(Z=M.filter(L=>L.overflows[0]<=0).sort((L,T)=>L.overflows[1]-T.overflows[1])[0])==null?void 0:Z.placement;if(!J)switch(f){case"bestFit":{var B;const L=(B=M.filter(T=>{if($){const j=ct(T.placement);return j===y||j==="y"}return!0}).map(T=>[T.placement,T.overflows.filter(j=>j>0).reduce((j,at)=>j+at,0)]).sort((T,j)=>T[1]-j[1])[0])==null?void 0:B[0];L&&(J=L);break}case"initialPlacement":J=a;break}if(n!==J)return{reset:{placement:J}}}return{}}}},Gl=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:i,y:s,placement:n}=t,{mainAxis:r=!0,crossAxis:o=!1,limiter:a={fn:g=>{let{x:_,y}=g;return{x:_,y}}},...l}=ke(e,t),c={x:i,y:s},u=await _i(t,l),d=ct(vt(n)),h=hn(d);let f=c[h],p=c[d];if(r){const g=h==="y"?"top":"left",_=h==="y"?"bottom":"right",y=f+u[g],b=f-u[_];f=hs(y,f,b)}if(o){const g=d==="y"?"top":"left",_=d==="y"?"bottom":"right",y=p+u[g],b=p-u[_];p=hs(y,p,b)}const m=a.fn({...t,[h]:f,[d]:p});return{...m,data:{x:m.x-i,y:m.y-s,enabled:{[h]:r,[d]:o}}}}}},Xl=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var i,s;const{placement:n,rects:r,platform:o,elements:a}=t,{apply:l=()=>{},...c}=ke(e,t),u=await _i(t,c),d=vt(n),h=Ne(n),f=ct(n)==="y",{width:p,height:m}=r.floating;let g,_;d==="top"||d==="bottom"?(g=d,_=h===(await(o.isRTL==null?void 0:o.isRTL(a.floating))?"start":"end")?"left":"right"):(_=d,g=h==="end"?"top":"bottom");const y=m-u.top-u.bottom,b=p-u.left-u.right,v=Lt(m-u[g],y),w=Lt(p-u[_],b),$=!t.middlewareData.shift;let S=v,A=w;if((i=t.middlewareData.shift)!=null&&i.enabled.x&&(A=b),(s=t.middlewareData.shift)!=null&&s.enabled.y&&(S=y),$&&!h){const M=W(u.left,0),V=W(u.right,0),Z=W(u.top,0),B=W(u.bottom,0);f?A=p-2*(M!==0||V!==0?M+V:W(u.left,u.right)):S=m-2*(Z!==0||B!==0?Z+B:W(u.top,u.bottom))}await l({...t,availableWidth:A,availableHeight:S});const z=await o.getDimensions(a.floating);return p!==z.width||m!==z.height?{reset:{rects:!0}}:{}}}};function ze(){return typeof window<"u"}function Rt(e){return gn(e)?(e.nodeName||"").toLowerCase():"#document"}function Y(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function ot(e){var t;return(t=(gn(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function gn(e){return ze()?e instanceof Node||e instanceof Y(e).Node:!1}function X(e){return ze()?e instanceof Element||e instanceof Y(e).Element:!1}function nt(e){return ze()?e instanceof HTMLElement||e instanceof Y(e).HTMLElement:!1}function ms(e){return!ze()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Y(e).ShadowRoot}const Ql=new Set(["inline","contents"]);function Xt(e){const{overflow:t,overflowX:i,overflowY:s,display:n}=Q(e);return/auto|scroll|overlay|hidden|clip/.test(t+s+i)&&!Ql.has(n)}const Zl=new Set(["table","td","th"]);function tc(e){return Zl.has(Rt(e))}const ec=[":popover-open",":modal"];function Me(e){return ec.some(t=>{try{return e.matches(t)}catch{return!1}})}const ic=["transform","translate","scale","rotate","perspective"],sc=["transform","translate","scale","rotate","perspective","filter"],nc=["paint","layout","strict","content"];function yi(e){const t=bi(),i=X(e)?Q(e):e;return ic.some(s=>i[s]?i[s]!=="none":!1)||(i.containerType?i.containerType!=="normal":!1)||!t&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!t&&(i.filter?i.filter!=="none":!1)||sc.some(s=>(i.willChange||"").includes(s))||nc.some(s=>(i.contain||"").includes(s))}function rc(e){let t=dt(e);for(;nt(t)&&!At(t);){if(yi(t))return t;if(Me(t))return null;t=dt(t)}return null}function bi(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const oc=new Set(["html","body","#document"]);function At(e){return oc.has(Rt(e))}function Q(e){return Y(e).getComputedStyle(e)}function Fe(e){return X(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function dt(e){if(Rt(e)==="html")return e;const t=e.assignedSlot||e.parentNode||ms(e)&&e.host||ot(e);return ms(t)?t.host:t}function mn(e){const t=dt(e);return At(t)?e.ownerDocument?e.ownerDocument.body:e.body:nt(t)&&Xt(t)?t:mn(t)}function Jt(e,t,i){var s;t===void 0&&(t=[]),i===void 0&&(i=!0);const n=mn(e),r=n===((s=e.ownerDocument)==null?void 0:s.body),o=Y(n);if(r){const a=ai(o);return t.concat(o,o.visualViewport||[],Xt(n)?n:[],a&&i?Jt(a):[])}return t.concat(n,Jt(n,[],i))}function ai(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function _n(e){const t=Q(e);let i=parseFloat(t.width)||0,s=parseFloat(t.height)||0;const n=nt(e),r=n?e.offsetWidth:i,o=n?e.offsetHeight:s,a=xe(i)!==r||xe(s)!==o;return a&&(i=r,s=o),{width:i,height:s,$:a}}function vi(e){return X(e)?e:e.contextElement}function Tt(e){const t=vi(e);if(!nt(t))return it(1);const i=t.getBoundingClientRect(),{width:s,height:n,$:r}=_n(t);let o=(r?xe(i.width):i.width)/s,a=(r?xe(i.height):i.height)/n;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const ac=it(0);function yn(e){const t=Y(e);return!bi()||!t.visualViewport?ac:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function lc(e,t,i){return t===void 0&&(t=!1),!i||t&&i!==Y(e)?!1:t}function wt(e,t,i,s){t===void 0&&(t=!1),i===void 0&&(i=!1);const n=e.getBoundingClientRect(),r=vi(e);let o=it(1);t&&(s?X(s)&&(o=Tt(s)):o=Tt(e));const a=lc(r,i,s)?yn(r):it(0);let l=(n.left+a.x)/o.x,c=(n.top+a.y)/o.y,u=n.width/o.x,d=n.height/o.y;if(r){const h=Y(r),f=s&&X(s)?Y(s):s;let p=h,m=ai(p);for(;m&&s&&f!==p;){const g=Tt(m),_=m.getBoundingClientRect(),y=Q(m),b=_.left+(m.clientLeft+parseFloat(y.paddingLeft))*g.x,v=_.top+(m.clientTop+parseFloat(y.paddingTop))*g.y;l*=g.x,c*=g.y,u*=g.x,d*=g.y,l+=b,c+=v,p=Y(m),m=ai(p)}}return Ce({width:u,height:d,x:l,y:c})}function De(e,t){const i=Fe(e).scrollLeft;return t?t.left+i:wt(ot(e)).left+i}function bn(e,t){const i=e.getBoundingClientRect(),s=i.left+t.scrollLeft-De(e,i),n=i.top+t.scrollTop;return{x:s,y:n}}function cc(e){let{elements:t,rect:i,offsetParent:s,strategy:n}=e;const r=n==="fixed",o=ot(s),a=t?Me(t.floating):!1;if(s===o||a&&r)return i;let l={scrollLeft:0,scrollTop:0},c=it(1);const u=it(0),d=nt(s);if((d||!d&&!r)&&((Rt(s)!=="body"||Xt(o))&&(l=Fe(s)),nt(s))){const f=wt(s);c=Tt(s),u.x=f.x+s.clientLeft,u.y=f.y+s.clientTop}const h=o&&!d&&!r?bn(o,l):it(0);return{width:i.width*c.x,height:i.height*c.y,x:i.x*c.x-l.scrollLeft*c.x+u.x+h.x,y:i.y*c.y-l.scrollTop*c.y+u.y+h.y}}function uc(e){return Array.from(e.getClientRects())}function dc(e){const t=ot(e),i=Fe(e),s=e.ownerDocument.body,n=W(t.scrollWidth,t.clientWidth,s.scrollWidth,s.clientWidth),r=W(t.scrollHeight,t.clientHeight,s.scrollHeight,s.clientHeight);let o=-i.scrollLeft+De(e);const a=-i.scrollTop;return Q(s).direction==="rtl"&&(o+=W(t.clientWidth,s.clientWidth)-n),{width:n,height:r,x:o,y:a}}const _s=25;function hc(e,t){const i=Y(e),s=ot(e),n=i.visualViewport;let r=s.clientWidth,o=s.clientHeight,a=0,l=0;if(n){r=n.width,o=n.height;const u=bi();(!u||u&&t==="fixed")&&(a=n.offsetLeft,l=n.offsetTop)}const c=De(s);if(c<=0){const u=s.ownerDocument,d=u.body,h=getComputedStyle(d),f=u.compatMode==="CSS1Compat"&&parseFloat(h.marginLeft)+parseFloat(h.marginRight)||0,p=Math.abs(s.clientWidth-d.clientWidth-f);p<=_s&&(r-=p)}else c<=_s&&(r+=c);return{width:r,height:o,x:a,y:l}}const fc=new Set(["absolute","fixed"]);function pc(e,t){const i=wt(e,!0,t==="fixed"),s=i.top+e.clientTop,n=i.left+e.clientLeft,r=nt(e)?Tt(e):it(1),o=e.clientWidth*r.x,a=e.clientHeight*r.y,l=n*r.x,c=s*r.y;return{width:o,height:a,x:l,y:c}}function ys(e,t,i){let s;if(t==="viewport")s=hc(e,i);else if(t==="document")s=dc(ot(e));else if(X(t))s=pc(t,i);else{const n=yn(e);s={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return Ce(s)}function vn(e,t){const i=dt(e);return i===t||!X(i)||At(i)?!1:Q(i).position==="fixed"||vn(i,t)}function gc(e,t){const i=t.get(e);if(i)return i;let s=Jt(e,[],!1).filter(a=>X(a)&&Rt(a)!=="body"),n=null;const r=Q(e).position==="fixed";let o=r?dt(e):e;for(;X(o)&&!At(o);){const a=Q(o),l=yi(o);!l&&a.position==="fixed"&&(n=null),(r?!l&&!n:!l&&a.position==="static"&&!!n&&fc.has(n.position)||Xt(o)&&!l&&vn(e,o))?s=s.filter(u=>u!==o):n=a,o=dt(o)}return t.set(e,s),s}function mc(e){let{element:t,boundary:i,rootBoundary:s,strategy:n}=e;const o=[...i==="clippingAncestors"?Me(t)?[]:gc(t,this._c):[].concat(i),s],a=o[0],l=o.reduce((c,u)=>{const d=ys(t,u,n);return c.top=W(d.top,c.top),c.right=Lt(d.right,c.right),c.bottom=Lt(d.bottom,c.bottom),c.left=W(d.left,c.left),c},ys(t,a,n));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function _c(e){const{width:t,height:i}=_n(e);return{width:t,height:i}}function yc(e,t,i){const s=nt(t),n=ot(t),r=i==="fixed",o=wt(e,!0,r,t);let a={scrollLeft:0,scrollTop:0};const l=it(0);function c(){l.x=De(n)}if(s||!s&&!r)if((Rt(t)!=="body"||Xt(n))&&(a=Fe(t)),s){const f=wt(t,!0,r,t);l.x=f.x+t.clientLeft,l.y=f.y+t.clientTop}else n&&c();r&&!s&&n&&c();const u=n&&!s&&!r?bn(n,a):it(0),d=o.left+a.scrollLeft-l.x-u.x,h=o.top+a.scrollTop-l.y-u.y;return{x:d,y:h,width:o.width,height:o.height}}function Je(e){return Q(e).position==="static"}function bs(e,t){if(!nt(e)||Q(e).position==="fixed")return null;if(t)return t(e);let i=e.offsetParent;return ot(e)===i&&(i=i.ownerDocument.body),i}function wn(e,t){const i=Y(e);if(Me(e))return i;if(!nt(e)){let n=dt(e);for(;n&&!At(n);){if(X(n)&&!Je(n))return n;n=dt(n)}return i}let s=bs(e,t);for(;s&&tc(s)&&Je(s);)s=bs(s,t);return s&&At(s)&&Je(s)&&!yi(s)?i:s||rc(e)||i}const bc=async function(e){const t=this.getOffsetParent||wn,i=this.getDimensions,s=await i(e.floating);return{reference:yc(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}};function vc(e){return Q(e).direction==="rtl"}const wc={convertOffsetParentRelativeRectToViewportRelativeRect:cc,getDocumentElement:ot,getClippingRect:mc,getOffsetParent:wn,getElementRects:bc,getClientRects:uc,getDimensions:_c,getScale:Tt,isElement:X,isRTL:vc};function xn(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function xc(e,t){let i=null,s;const n=ot(e);function r(){var a;clearTimeout(s),(a=i)==null||a.disconnect(),i=null}function o(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),r();const c=e.getBoundingClientRect(),{left:u,top:d,width:h,height:f}=c;if(a||t(),!h||!f)return;const p=oe(d),m=oe(n.clientWidth-(u+h)),g=oe(n.clientHeight-(d+f)),_=oe(u),b={rootMargin:-p+"px "+-m+"px "+-g+"px "+-_+"px",threshold:W(0,Lt(1,l))||1};let v=!0;function w($){const S=$[0].intersectionRatio;if(S!==l){if(!v)return o();S?o(!1,S):s=setTimeout(()=>{o(!1,1e-7)},1e3)}S===1&&!xn(c,e.getBoundingClientRect())&&o(),v=!1}try{i=new IntersectionObserver(w,{...b,root:n.ownerDocument})}catch{i=new IntersectionObserver(w,b)}i.observe(e)}return o(!0),r}function Sc(e,t,i,s){s===void 0&&(s={});const{ancestorScroll:n=!0,ancestorResize:r=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=s,c=vi(e),u=n||r?[...c?Jt(c):[],...Jt(t)]:[];u.forEach(_=>{n&&_.addEventListener("scroll",i,{passive:!0}),r&&_.addEventListener("resize",i)});const d=c&&a?xc(c,i):null;let h=-1,f=null;o&&(f=new ResizeObserver(_=>{let[y]=_;y&&y.target===c&&f&&(f.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var b;(b=f)==null||b.observe(t)})),i()}),c&&!l&&f.observe(c),f.observe(t));let p,m=l?wt(e):null;l&&g();function g(){const _=wt(e);m&&!xn(m,_)&&i(),m=_,p=requestAnimationFrame(g)}return i(),()=>{var _;u.forEach(y=>{n&&y.removeEventListener("scroll",i),r&&y.removeEventListener("resize",i)}),d?.(),(_=f)==null||_.disconnect(),f=null,l&&cancelAnimationFrame(p)}}const Cc=Gl,Pc=ql,Ec=Xl,Oc=(e,t,i)=>{const s=new Map,n={platform:wc,...i},r={...n.platform,_c:s};return Jl(e,t,{...n,platform:r})},Sn=[Pc({fallbackAxisSideDirection:"start",crossAxis:!1}),Cc()],$c=({placement:e="bottom-start",strategy:t,middleware:i=Sn}={})=>{const[s,n]=G(),[r,o]=G(),[a,l]=G();return k(()=>{if(!s||!(r instanceof HTMLElement)){l(void 0);return}return Sc(s,r,()=>Oc(s,r,{placement:e,strategy:t,middleware:i}).then(l))},[s,r,e,t,i]),{setReference:n,setFloating:o,styles:F(()=>a?{left:`${a.x}px`,top:`${a.y}px`}:{},[a?.x,a?.y])}},Tc=(e=HTMLElement)=>class extends e{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},Lc=(e,t)=>{if(!e||!t)return;const i=Object.keys(t);return Object.fromEntries(Object.keys(e).flatMap(s=>i.includes(s)?[]:[[s,void 0]]))};class Ac extends qt{_props;render(t){return q}update(t,[i]){return this._props!==i&&Object.assign(t.element,Lc(this._props,i),this._props=i),q}}const Rc=xt(Ac),kc=e=>{const t=pt(),i=F(()=>new CSSStyleSheet,[]);k(()=>{t.shadowRoot.adoptedStyleSheets=[...t.shadowRoot.adoptedStyleSheets,i]},[]),k(()=>{i.replaceSync(e)},[e])};const Cn="important",Nc=" !"+Cn,zc=xt(class extends qt{constructor(e){if(super(e),e.type!==tt.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const s=e[i];return s==null?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(e,[t]){const{style:i}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const s of this.ft)t[s]==null&&(this.ft.delete(s),s.includes("-")?i.removeProperty(s):i[s]=null);for(const s in t){const n=t[s];if(n!=null){this.ft.add(s);const r=typeof n=="string"&&n.endsWith(Nc);s.includes("-")||r?i.setProperty(s,r?n.slice(0,-11):n,r?Cn:""):i[s]=n}}return q}}),Mc="data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 1L5.20039 7.04766L1.66348 3.46152' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",Fc=bt`
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
		background: url("${Mc}") #5881f6 no-repeat 50%;
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
`,Dc=({index:e,itemHeight:t,auto:i})=>bt`
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
`,Ic=e=>{const t=e==="auto",[i,s]=G(t?40:e);return[i,n=>t?s(n):void 0]},Qt=e=>{const t=F(()=>({}),[]);return F(()=>Object.assign(t,e),[t,...Object.values(e)])},jc=e=>{const t=Qt(e);k(()=>{const i=s=>{if(!(s.ctrlKey&&s.altKey||s.defaultPrevented))switch(s.key){case"Up":case"ArrowUp":s.preventDefault(),t.onUp();break;case"Down":case"ArrowDown":s.preventDefault(),t.onDown();break;case"Enter":s.preventDefault(),t.onEnter();break}};return document.addEventListener("keydown",i,!0),()=>document.removeEventListener("keydown",i,!0)},[t])},Vc=({items:e,onSelect:t,defaultIndex:i=0})=>{const[s,n]=G({index:i}),{index:r}=s,{length:o}=e;return k(()=>{n({index:s.index<0?i:Math.min(s.index,e.length-1),scroll:!0})},[e,i]),jc({onUp:E(()=>n(a=>({index:a.index>0?a.index-1:o-1,scroll:!0})),[o]),onDown:E(()=>n(a=>({index:a.index<o-1?a.index+1:0,scroll:!0})),[o]),onEnter:E(()=>r>-1&&r<o&&t?.(e[r],r),[r,e,t])}),{position:s,highlight:E(a=>n({index:a}),[]),select:E(a=>t?.(a),[t])}},Bc=(e,t)=>t?i=>ut(e).find(s=>s[t]===i[t]):i=>ut(e).includes(i),Hc=(e,t)=>{if(!t||!e)return e;const i=e.toLowerCase().indexOf(t.toLowerCase());if(i<0)return e;const s=i+t.length;return[e.slice(0,i),C`<mark>${e.slice(i,s)}</mark>`,e.slice(s)]},Uc=(e=ve)=>(t,i,{highlight:s,select:n,textual:r=ve,query:o,isSelected:a})=>{const l=r(t),c=Hc(l,o),u=e(c,t,i);return C`<div
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
			<div class="sizer" virtualizer-sizer>${u}</div>`},Kc=({itemRenderer:e=Uc(),...t})=>{const i=Qt(t);return E((s,n)=>e(s,n,i),[i,e])},Wc=["query","items","onSelect","textual","anchor","itemHeight","itemLimit","itemRenderer","defaultIndex","value","valueProperty","loading"],Yc=({value:e,valueProperty:t,items:i,onSelect:s,defaultIndex:n,query:r,textual:o,itemRenderer:a,itemHeight:l=40,itemLimit:c=5})=>{const u=F(()=>Bc(e,t),[e,t]),d=F(()=>i.slice(),[i,u]),{position:h,highlight:f,select:p}=Vc({items:d,onSelect:s,defaultIndex:isNaN(n)?void 0:Number(n)}),[m,g]=Ic(l);return{position:h,items:d,height:Math.min(c,d.length)*m,highlight:f,select:p,itemHeight:m,setItemHeight:g,renderItem:Kc({itemRenderer:a,items:d,position:h,highlight:f,select:p,textual:o,query:r,isSelected:u})}},vs=Pa,Jc=e=>{const t=Ot(void 0),{position:i,items:s,renderItem:n,height:r,itemHeight:o,setItemHeight:a}=Yc(e);return k(()=>{const l=t.current?.[ri];l&&l.layoutComplete.then(()=>{e.dispatchEvent(new CustomEvent("layout-complete"));const{averageChildSize:c,averageMarginSize:u}=l._layout._metricsCache;return a(c+u*2)},vs)},[s]),k(()=>{if(!i.scroll)return;const l=t.current?.[ri];if(l){if(!l?._layout){l.layoutComplete.then(()=>l.element(i.index)?.scrollIntoView({block:"nearest"}),vs);return}l.element(i.index)?.scrollIntoView({block:"nearest"})}},[i]),kc(Dc({...i,itemHeight:o,auto:e.itemHeight==="auto"})),C`<div
			class="items"
			style="min-height: ${r}px"
			${Gt(l=>t.current=l)}
		>
			<div virtualizer-sizer></div>
			${yl({items:s,renderItem:n,scroller:!0})}
		</div>
		<slot></slot>`};customElements.define("cosmoz-listbox",Tc(rt(Jc,{styleSheets:[di(Fc)]})));const qc=({multi:e,setFloating:t,styles:i,...s},n)=>C`<cosmoz-listbox
		style="${zc(i)}"
		@connected="${r=>r.target.showPopover?.()}"
		popover="manual"
		part="listbox"
		?multi=${e}
		${Gt(t)}
		...=${Rc(Aa(Wc)(s))}
		>${n}</cosmoz-listbox
	>`,Gc=lt`
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
`,Xc=C`
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
`,Qc=({onClear:e,disabled:t})=>C`
	<div class="content" part="content chip-text"><slot></slot></div>
	${D(e&&!t,()=>C`<span
				class="clear"
				part="clear chip-clear"
				@mousedown=${i=>i.preventDefault()}
				@click=${e}
			>
				${Xc}
			</span>`)}
`;customElements.define("cosmoz-autocomplete-chip",rt(Qc,{observedAttributes:["disabled"],styleSheets:[di(Gc)]}));const Zc=({content:e,onClear:t,disabled:i,hidden:s,className:n="chip",slot:r})=>C`<cosmoz-autocomplete-chip
		class=${R(n)}
		slot=${R(r)}
		part="chip"
		exportparts="chip-text, chip-clear"
		?disabled=${i}
		?hidden=${s}
		.onClear=${t}
		title=${R(typeof e=="string"?e:void 0)}
		>${e}</cosmoz-autocomplete-chip
	>`,tu=({value:e,min:t=0,onDeselect:i,textual:s,disabled:n,chipRenderer:r=Zc})=>[...e.filter(Boolean).map(o=>r({item:o,content:s(o),onClear:e.length>t&&(()=>i(o)),disabled:n,slot:"control"})),r({item:null,content:C`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],eu=bt`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",rt(()=>st,{styleSheets:[eu]}));const iu=lt`
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
`,ws=e=>e.matches(":focus-within"),su=({disabled:e,onFocus:t})=>{const[i,s]=G(),{focused:n,closed:r}=i||{},o=n&&!e,a=Qt({closed:r,onFocus:t}),l=E(u=>s(d=>({...d,closed:u})),[]),c=E(u=>{const d=u.currentTarget;return ws(d)?s(h=>({focused:!0,closed:!h?.closed})):d.focus()},[]);return k(()=>{if(!o)return;const u=d=>{if(d.defaultPrevented)return;const{closed:h}=a;d.key==="Escape"&&!h?(d.preventDefault(),l(!0)):["ArrowUp","Up"].includes(d.key)&&h&&(d.preventDefault(),l(!1))};return document.addEventListener("keydown",u,!0),()=>document.removeEventListener("keydown",u,!0)},[o]),{focused:o,active:o&&!r,setClosed:l,onToggle:c,onFocus:E(u=>{const d=ws(u.currentTarget);s({focused:d}),a.onFocus?.(d)},[a])}},wi=(e,t=()=>({}))=>{const i={type:e,toString(){return e}};return Object.assign((...n)=>Object.assign(t(...n),i),i)},xs=e=>e.type||e.toString(),Ss=e=>Array.isArray(e)?e:[e],nu=(e,t)=>{const i=Ss(t),s=(i.every(Array.isArray)?i:[i]).map(([n,r])=>({actions:Ss(n).map(xs),handle:r}));return(n=e,r)=>{const o=s.find(a=>a.actions.includes(xs(r)));return o?o.handle(n,r):n}},yt={pending:"pending",rejected:"rejected",resolved:"resolved"},Pn={error:void 0,result:void 0,state:yt.pending},En=wi(yt.pending),On=wi(yt.resolved,e=>({result:e})),$n=wi(yt.rejected,e=>({error:e})),ru=nu(Pn,[[En,()=>({error:void 0,result:void 0,state:yt.pending})],[On,(e,{result:t})=>({error:void 0,result:t,state:yt.resolved})],[$n,(e,{error:t})=>({error:t,result:void 0,state:yt.rejected})]]),ou=e=>{const[{error:t,result:i,state:s},n]=tr(ru,Pn);return k(()=>{if(!e)return;let r=!1;return n(En()),e.then(o=>!r&&n(On(o)),o=>!r&&n($n(o))),()=>{r=!0}},[e]),[i,t,s]},au=({focused:e,empty:t,...i})=>{const s=e&&t&&i.limit!==1,n=Qt(i);k(()=>{if(!s)return;const r=o=>{if(o.defaultPrevented)return;const{key:a}=o,l=ut(n.value),c=n.limit==1;if(l.length>0&&(a==="Backspace"||c&&a.length===1))return n.onChange(l.slice(0,-1))};return document.addEventListener("keydown",r,!0),()=>document.removeEventListener("keydown",r,!0)},[s,n])},Cs=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),lu=(e,t,i)=>{if(!t)return e;const s=Cs(t.toLowerCase()),n=[];for(const r of e){const a=Cs(i(r).toLowerCase()).indexOf(s);a<0||n.push({item:r,index:a})}return n.sort((r,o)=>r.index-o.index).map(({item:r})=>r)},cu=e=>e===!1||e==null?[]:e,Tn=(e,t,i)=>e.dispatchEvent(new CustomEvent(t,{detail:i})),uu=(e,t,i)=>E(s=>{t?.(s),Tn(e,i,s)},[t]),du=[],hu=e=>(...t)=>{let i;const s=()=>{i&&cancelAnimationFrame(i)};return s(),i=requestAnimationFrame(()=>{i=void 0,e(...t)}),s},fu=({value:e,text:t,onChange:i,onText:s,onSelect:n,limit:r,min:o,source:a,textProperty:l,textual:c,valueProperty:u,keepOpened:d,keepQuery:h,preserveOrder:f,defaultIndex:p,externalSearch:m,...g})=>{const _=F(()=>(c??La)(l),[c,l]),{active:y,focused:b,onFocus:v,setClosed:w}=su(g),$=!t,S=F(()=>t?.trim(),[t]),A=pt(),z=uu(A,s,"text"),M=E(L=>{i?.(L,()=>w(!0)),Tn(A,"value",L)},[i]),[V,Z]=G([]),B=F(()=>Promise.resolve(typeof a=="function"?a({query:S,active:y}):a).then(cu),[a,y,S]),N=F(()=>ut(e),[e]);k(()=>B.then(Z),[B]),au({focused:b,empty:$,limit:r,value:N,onChange:M,onText:z}),k(()=>{!b&&!h&&z("")},[b,h]);const I=Qt({onText:z,onChange:M,value:N,limit:r,min:o,keepQuery:h,keepOpened:d,setClosed:w,onSelect:n}),[,,J]=ou(B);return{active:y,query:S,textual:_,value:N,source$:B,loading:J==="pending",items:F(()=>{if(!y)return du;const L=f?V:[...N,...We(N,Zs(u))(V)];return m?L:lu(L,S,_)},[V,y,S,_,$,N,f,u,m]),onClick:E(()=>w(!1),[]),onFocus:v,onText:E(L=>{z(L.target.value),w(!1)},[z,t,w]),onSelect:E(L=>{I.onSelect?.(L,I);const{onChange:T,onText:j,limit:at,min:Zt,value:kn,keepQuery:Nn,keepOpened:zn,setClosed:Mn}=I;Nn||j(""),zn||Mn(!0);const te=ut(kn),xi=te.includes(L);xi&&te.length===Zt||T((xi?We(L)(te):[...te,L]).slice(-at))},[I]),onDeselect:E(L=>I.onChange(We(L)(I.value)),[I]),defaultIndex:S!==void 0&&S?.length>0?0:p}},pu=e=>{const t=e.shadowRoot.querySelectorAll(".chip"),i=e.shadowRoot.querySelector(".badge");i.hidden=!0;for(const a of t)a.hidden=!1;const n=e.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let r;for(r=0;r<t.length;r++){const l=t[r].getBoundingClientRect();if(!(l.x+l.width<=n.x+n.width-24))break}const o=t.length-r;for(i.querySelector("span").textContent="+"+o.toString(),i.hidden=o<1;r<t.length;r++)t[r].hidden=!0},gu=({value:e,active:t,wrap:i,limit:s})=>{const n=pt(),r=!(i||s==1),o=F(()=>hu(()=>pu(n)),[]),[a,l]=G(0);Ge(()=>{if(!r)return;const c=n.shadowRoot.querySelector("cosmoz-input"),u=new ResizeObserver(d=>{l(d[0].contentRect.width)});return u.observe(c),()=>u.disconnect()},[r]),Ge(()=>r?o():void 0,[r,a,t,e])},mu=["input","control","label","line","error","wrap"].map(e=>`${e}: input-${e}`).join(),_u=[Ec({apply({rects:e,elements:t}){Object.assign(t.floating.style,{minWidth:`${Math.max(e.reference.width,e.floating.width)}px`})}}),...Sn],yu=({active:e,isSingle:t,showSingle:i})=>e?!(t&&!i):!1,bu=e=>{const{active:t,invalid:i,errorMessage:s,label:n,placeholder:r,disabled:o,noLabelFloat:a,alwaysFloatLabel:l,textual:c,text:u,onText:d,onFocus:h,onClick:f,onDeselect:p,value:m,limit:g,min:_,showSingle:y,items:b,source$:v,placement:w,loading:$,chipRenderer:S}=e,A=pt(),z=g==1,M=z&&m?.[0]!=null,{styles:V,setReference:Z,setFloating:B}=$c({placement:w,middleware:_u});k(()=>(A.addEventListener("focusin",h),A.addEventListener("focusout",h),()=>{A.removeEventListener("focusin",h),A.removeEventListener("focusout",h)}),[h]),tn({focus:()=>A.shadowRoot?.querySelector("#input")?.focus()},[]);const N=$||b.length>0||u!=null&&u.length>0;return C`<cosmoz-input
				id="input"
				part="input"
				${Gt(Z)}
				.label=${n}
				.placeholder=${M?void 0:r}
				?no-label-float=${a}
				?always-float-label=${m?.length>0||l}
				?readonly=${M}
				?disabled=${o}
				?invalid=${we(v.then(()=>i,()=>!0),i)}
				.errorMessage=${we(v.then(()=>s,I=>I.message),s)}
				.value=${Te(u)}
				@value-changed=${d}
				@click=${f}
				autocomplete="off"
				exportparts=${mu}
				?data-one=${z}
				?data-single=${M}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${tu({value:m,min:_,onDeselect:p,textual:c,disabled:o,chipRenderer:S})}
			</cosmoz-input>

			${D(yu({active:t,isSingle:M,showSingle:y}),()=>qc({...e,items:b,multi:!z,setFloating:B,styles:{...V,display:N?void 0:"none"}},D($,()=>C`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>D(u!=null&&u.length>0&&b.length===0,()=>C`<slot name="no-result"></slot>`))))}`},Ln=e=>{const t={...e,...fu(e)};return gu(t),bu(t)},An=["disabled","invalid","no-label-float","always-float-label","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap"],vu=e=>{const{onChange:t,onText:i,...s}=e,[n,r]=ir("value");return k(()=>{e.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),Ln({...s,value:n,onChange:E((o,...a)=>{r(o),t?.(o,...a)},[t]),onText:E(o=>{e.text=o,i?.(o)},[i])})},Rn=[di(iu)];customElements.define("cosmoz-autocomplete-ui",rt(Ln,{observedAttributes:An,styleSheets:Rn}));customElements.define("cosmoz-autocomplete",rt(vu,{observedAttributes:An,styleSheets:Rn}));lt`
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
</svg>`;export{on as a,Pl as b,rt as c,G as d,xt as e,F as f,zl as g,al as h,qt as i,Te as l,Eu as n,R as o,nl as r,Ot as u};
