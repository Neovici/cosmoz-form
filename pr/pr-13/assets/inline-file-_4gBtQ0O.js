import{r as En,D as On,A as nt,w as ls,b as C,E as G,n as Fi,M as Di,u as gt,v as kt,h as Ie,p as $n}from"./iframe-DIRe3mfz.js";import{_ as Ii}from"./preload-helper-PPVm8Dsz.js";let ue,Tn=0;function Ss(e){ue=e}function Cs(){ue=null,Tn=0}function ji(){return Tn++}const je=Symbol("haunted.phase"),ae=Symbol("haunted.hook"),Ps=Symbol("haunted.update"),Es=Symbol("haunted.commit"),_t=Symbol("haunted.effects"),It=Symbol("haunted.layoutEffects"),qe="haunted.context";class Vi{update;host;virtual;[ae];[_t];[It];constructor(t,s){this.update=t,this.host=s,this[ae]=new Map,this[_t]=[],this[It]=[]}run(t){Ss(this);let s=t();return Cs(),s}_runEffects(t){let s=this[t];Ss(this);for(let n of s)n.call(this);Cs()}runEffects(){this._runEffects(_t)}runLayoutEffects(){this._runEffects(It)}teardown(){this[ae].forEach(s=>{typeof s.teardown=="function"&&s.teardown(!0)})}}const Bi=Promise.resolve().then.bind(Promise.resolve());function Ln(){let e=[],t;function s(){t=null;let n=e;e=[];for(var i=0,r=n.length;i<r;i++)n[i]()}return function(n){e.push(n),t==null&&(t=Bi(s))}}const Hi=Ln(),Os=Ln();class Ui{renderer;host;state;[je];_updateQueued;_active;constructor(t,s){this.renderer=t,this.host=s,this.state=new Vi(this.update.bind(this),s),this[je]=null,this._updateQueued=!1,this._active=!0}update(){this._active&&(this._updateQueued||(Hi(()=>{let t=this.handlePhase(Ps);Os(()=>{this.handlePhase(Es,t),Os(()=>{this.handlePhase(_t)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(t,s){switch(this[je]=t,t){case Es:this.commit(s),this.runEffects(It);return;case Ps:return this.render();case _t:return this.runEffects(_t)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(t){this.state._runEffects(t)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const cs=(...e)=>{const t=new CSSStyleSheet;return t.replaceSync(e.join("")),t},Ki=e=>e?.map(t=>typeof t=="string"?cs(t):t),Wi=(e,...t)=>e.flatMap((s,n)=>[s,t[n]||""]).join(""),vt=Wi,Yi=(e="")=>e.replace(/-+([a-z])?/g,(t,s)=>s?s.toUpperCase():"");function Ji(e){class t extends Ui{frag;renderResult;constructor(i,r,o){super(i,o||r),this.frag=r}commit(i){this.renderResult=e(i,this.frag)}}function s(n,i,r){const o=(r||i||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:l=!0,shadowRootInit:c={},styleSheets:u}=r||i||{},d=Ki(n.styleSheets||u);class h extends o{_scheduler;static get observedAttributes(){return n.observedAttributes||a||[]}constructor(){if(super(),l===!1)this._scheduler=new t(n,this);else{const m=this.attachShadow({mode:"open",...c});d&&(m.adoptedStyleSheets=d),this._scheduler=new t(n,m,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(m,_,y){if(_===y)return;let b=y===""?!0:y;Reflect.set(this,Yi(m),b)}}function f(g){let m=g,_=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return m},set(y){_&&m===y||(_=!0,m=y,this._scheduler&&this._scheduler.update())}})}const p=new Proxy(o.prototype,{getPrototypeOf(g){return g},set(g,m,_,y){let b;return m in g?(b=Object.getOwnPropertyDescriptor(g,m),b&&b.set?(b.set.call(y,_),!0):(Reflect.set(g,m,_,y),!0)):(typeof m=="symbol"||m[0]==="_"?b={enumerable:!0,configurable:!0,writable:!0,value:_}:b=f(_),Object.defineProperty(y,m,b),b.set&&b.set.call(y,_),!0)}});return Object.setPrototypeOf(h.prototype,p),h}return s}class ht{id;state;constructor(t,s){this.id=t,this.state=s}}function qi(e,...t){let s=ji(),n=ue[ae],i=n.get(s);return i||(i=new e(s,ue,...t),n.set(s,i)),i.update(...t)}function ft(e){return qi.bind(null,e)}function An(e){return ft(class extends ht{callback;lastValues;values;_teardown;constructor(t,s,n,i){super(t,s),e(s,this)}update(t,s){this.callback=t,this.values=s}call(){const t=!this.values||this.hasChanged();this.lastValues=this.values,t&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(t){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),t&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((t,s)=>this.lastValues[s]!==t)}})}function Rn(e,t){e[_t].push(t)}const k=An(Rn),Gi=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,Xi=ft(class extends ht{Context;value;_ranEffect;_unsubscribe;constructor(e,t,s){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Rn(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const t={Context:e,callback:this._updater};Gi(this.state.host).dispatchEvent(new CustomEvent(qe,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:n=null,value:i}=t;this.value=n?i:e.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}});function Qi(e){return t=>{const s={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(qe,this)}disconnectedCallback(){this.removeEventListener(qe,this)}handleEvent(n){const{detail:i}=n;i.Context===s&&(i.value=this.value,i.unsubscribe=this.unsubscribe.bind(this,i.callback),this.listeners.add(i.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let i of this.listeners)i(n)}get value(){return this._value}},Consumer:e(function({render:n}){const i=Xi(s);return n(i)},{useShadowDOM:!1}),defaultValue:t};return s}}const F=ft(class extends ht{value;values;constructor(e,t,s,n){super(e,t),this.value=s(),this.values=n}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((t,s)=>this.values[s]!==t)}}),E=(e,t)=>F(()=>e,t);function Zi(e,t){e[It].push(t)}const Ge=An(Zi),q=ft(class extends ht{args;constructor(e,t,s){super(e,t),this.updater=this.updater.bind(this),typeof s=="function"&&(s=s()),this.makeArgs(s)}update(){return this.args}updater(e){const[t]=this.args;typeof e=="function"&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}}),tr=ft(class extends ht{reducer;currentState;constructor(e,t,s,n,i){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=i!==void 0?i(n):n}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}}),er=/([A-Z])/gu,sr=ft(class extends ht{property;eventName;constructor(e,t,s,n){if(super(e,t),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=s,this.eventName=s.replace(er,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof n=="function"&&(n=n()),n!=null&&this.updateProp(n))}update(e,t){return[this.state.host[this.property],this.updater]}updater(e){const t=this.state.host[this.property];typeof e=="function"&&(e=e(t)),!Object.is(t,e)&&this.updateProp(e)}updateProp(e){this.notify(e).defaultPrevented||(this.state.host[this.property]=e)}notify(e){const t=new CustomEvent(this.eventName,{detail:{value:e,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(t),t}});function mt(e){return F(()=>({current:e}),[])}function nr({render:e}){const t=Ji(e),s=Qi(t);return{component:t,createContext:s}}const tt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},St=e=>(...t)=>({_$litDirective$:e,values:t});let qt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,n){this._$Ct=t,this._$AM=s,this._$Ci=n}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}};const jt=(e,t)=>{const s=e._$AN;if(s===void 0)return!1;for(const n of s)n._$AO?.(t,!1),jt(n,t);return!0},de=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while(s?.size===0)},kn=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),or(t)}};function ir(e){this._$AN!==void 0?(de(this),this._$AM=e,kn(this)):this._$AM=e}function rr(e,t=!1,s=0){const n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(n))for(let r=s;r<n.length;r++)jt(n[r],!1),de(n[r]);else n!=null&&(jt(n,!1),de(n));else jt(this,e)}const or=e=>{e.type==tt.CHILD&&(e._$AP??=rr,e._$AQ??=ir)};class us extends qt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,n){super._$AT(t,s,n),kn(this),this.isConnected=t._$AU}_$AO(t,s=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),s&&(jt(this,t),de(this))}setValue(t){if(En(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:rt}=nr({render:On}),ar=vt`
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
`,lr=()=>nt,cr=rt(lr,{styleSheets:[ar]});customElements.define("cosmoz-spinner",cr);function D(e,t,s){return e?t(e):s?.(e)}const R=e=>e??nt,ur=({slot:e,title:t,className:s,width:n="24",height:i="24",styles:r}={})=>C`
	<svg
		slot=${R(e)}
		class=${`clear-icon ${s??""}`}
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
		width=${n}
		height=${i}
		style=${R(r)}
	>
		${D(t,()=>ls`<title>${t}</title>`)}
		<path
			d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
		/>
	</svg>
`,dr=({slot:e,title:t,className:s,width:n="24",height:i="24",styles:r}={})=>C`
	<svg
		slot=${R(e)}
		class=${`help-outline-icon ${s??""}`}
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
		width=${n}
		height=${i}
		style=${R(r)}
	>
		${D(t,()=>ls`<title>${t}</title>`)}
		<path
			fill="currentColor"
			d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"
		/>
	</svg>
`,hr=({slot:e,title:t,className:s,width:n="24",height:i="24",styles:r}={})=>C`
	<svg
		slot=${R(e)}
		class=${`warning-icon ${s??""}`}
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
		width=${n}
		height=${i}
		style=${R(r)}
	>
		${D(t,()=>ls`<title>${t}</title>`)}
		<path
			d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
			fill="currentColor"
		/>
	</svg>
`,pt=ft(class extends ht{update(){return this.state.host}}),lt=(e,...t)=>e.flatMap((s,n)=>[s,t[n]??""]).join(""),ds=(...e)=>{const t=new CSSStyleSheet;return t.replaceSync(e.join("")),t},fr=lt`
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
`,pr=()=>{const e=pt(),t=E(()=>{e.dispatchEvent(new Event("close")),e.onClose?.()},[]);return k(()=>{const s=o=>{o.preventDefault(),t()},n=e.shadowRoot,i=o=>o.target.value==="cancel"&&s(o),r=o=>!o.defaultPrevented&&o.key==="Escape"&&s(o);return n.addEventListener("click",i),document.addEventListener("keydown",r,!0),()=>{n.removeEventListener("click",i),document.removeEventListener("keydown",r,!0)}},[]),{close:t}},gr=()=>{const e=pt(),{manualFocus:t}=e;Ge(()=>{!t&&!e.matches(":focus-within")&&(e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex"))},[t])},mr=(e,t,s)=>{const n=e.width/3,i=e.height/3,r=Math.min(window.innerWidth-2*n,Math.max(-n,t)),o=Math.min(window.innerHeight-2*i,Math.max(-i,s));return{x:r,y:o}},_r=(e,t,s,n)=>i=>{if(!i.target.closest(t))return;const r=mr,o=e.getBoundingClientRect(),a=i.clientX-o.x,l=i.clientY-o.y,c=(h,f)=>{const p=h-a,g=f-l,m=r(o,p,g);Object.assign(e.style,{left:m.x+"px",top:m.y+"px",transform:"initial"})},u=h=>c(h.clientX,h.clientY),d=h=>{document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",d)};document.addEventListener("mousemove",u),document.addEventListener("mouseup",d)},yr=()=>{const e=pt(),{unmovable:t}=e;k(()=>{if(t)return;const s=e.shadowRoot;if(!s)return;const n=_r(e,".title");return s.addEventListener("mousedown",n),()=>s.removeEventListener("mousedown",n)},[t])},br=()=>{pr(),yr(),gr()},vr=({title:e,content:t,styles:s,closeable:n=!1})=>{const i=pt();return C`
		<style>
			${fr}${s}
		</style>
		<div class="title" part="title">
			${e}
			${D(n,()=>C`
					<button
						class="close"
						@click=${()=>{i.dispatchEvent(new Event("close")),i.onClose?.()}}
					>
						${ur()}
					</button>
				`)}
		</div>
		<div class="content" part="content">${t}</div>
	`},hs=(e,{observedAttributes:t,styles:s,...n}={})=>rt(i=>(br(),vr({title:i.heading||i.title,content:e(i),styles:s,closeable:i.closeable})),{observedAttributes:["title","heading","manual-focus","unmovable","closeable",...t??[]],...n});customElements.define("cosmoz-dialog-loading",hs(()=>C`
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
		`));window.JSCompiler_renameProperty=function(e,t){return e};let wr=/(url\()([^)]*)(\))/g,xr=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,ee,K;function Vt(e,t){if(e&&xr.test(e)||e==="//")return e;if(ee===void 0){ee=!1;try{const s=new URL("b","http://a");s.pathname="c%20d",ee=s.href==="http://a/c%20d"}catch{}}if(t||(t=document.baseURI||window.location.href),ee)try{return new URL(e,t).href}catch{return e}return K||(K=document.implementation.createHTMLDocument("temp"),K.base=K.createElement("base"),K.head.appendChild(K.base),K.anchor=K.createElement("a"),K.body.appendChild(K.anchor)),K.base.href=t,K.anchor.href=e,K.anchor.href||e}function fs(e,t){return e.replace(wr,function(s,n,i,r){return n+"'"+Vt(i.replace(/["']/g,""),t)+"'"+r})}function ps(e){return e.substring(0,e.lastIndexOf("/")+1)}const Sr=!window.ShadyDOM||!window.ShadyDOM.inUse;!window.ShadyCSS||window.ShadyCSS.nativeCss;const Cr=Sr&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const e=new CSSStyleSheet;e.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch{return!1}})();let Pr=window.Polymer&&window.Polymer.rootPath||ps(document.baseURI||window.location.href),he=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures;let Xe=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,Er=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,Or=window.Polymer&&window.Polymer.legacyOptimizations||!1,$r=window.Polymer&&window.Polymer.legacyWarnings||!1,Tr=window.Polymer&&window.Polymer.syncInitialRender||!1,Qe=window.Polymer&&window.Polymer.legacyUndefined||!1,Lr=window.Polymer&&window.Polymer.orderedComputed||!1,$s=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Ar=window.Polymer&&window.Polymer.fastDomIf||!1;window.Polymer&&window.Polymer.suppressTemplateNotifications;window.Polymer&&window.Polymer.legacyNoObservedAttributes;let Rr=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;let kr=0;const Ct=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let s=kr++;function n(i){let r=i.__mixinSet;if(r&&r[s])return i;let o=t,a=o.get(i);if(!a){a=e(i),o.set(i,a);let l=Object.create(a.__mixinSet||r||null);l[s]=!0,a.__mixinSet=l}return a}return n};let gs={},Nn={};function Ts(e,t){gs[e]=Nn[e.toLowerCase()]=t}function Ls(e){return gs[e]||Nn[e.toLowerCase()]}function Nr(e){e.querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}class Ht extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,s){if(t){let n=Ls(t);return n&&s?n.querySelector(s):n}return null}attributeChangedCallback(t,s,n,i){s!==n&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,s=Vt(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=ps(s)}return this.__assetpath}register(t){if(t=t||this.id,t){if(Xe&&Ls(t)!==void 0)throw Ts(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,Ts(t,this),Nr(this)}}}Ht.prototype.modules=gs;customElements.define("dom-module",Ht);const zr="link[rel=import][type~=css]",Mr="include",As="shady-unscoped";function zn(e){return Ht.import(e)}function Rs(e){let t=e.body?e.body:e;const s=fs(t.textContent,e.baseURI),n=document.createElement("style");return n.textContent=s,n}function Fr(e){const t=e.trim().split(/\s+/),s=[];for(let n=0;n<t.length;n++)s.push(...Dr(t[n]));return s}function Dr(e){const t=zn(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(t._styles===void 0){const s=[];s.push(...Fn(t));const n=t.querySelector("template");n&&s.push(...Mn(n,t.assetpath)),t._styles=s}return t._styles}function Mn(e,t){if(!e._styles){const s=[],n=e.content.querySelectorAll("style");for(let i=0;i<n.length;i++){let r=n[i],o=r.getAttribute(Mr);o&&s.push(...Fr(o).filter(function(a,l,c){return c.indexOf(a)===l})),t&&(r.textContent=fs(r.textContent,t)),s.push(r)}e._styles=s}return e._styles}function Ir(e){let t=zn(e);return t?Fn(t):[]}function Fn(e){const t=[],s=e.querySelectorAll(zr);for(let n=0;n<s.length;n++){let i=s[n];if(i.import){const r=i.import,o=i.hasAttribute(As);if(o&&!r._unscopedStyle){const a=Rs(r);a.setAttribute(As,""),r._unscopedStyle=a}else r._style||(r._style=Rs(r));t.push(o?r._unscopedStyle:r._style)}}return t}const yt=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e;function Ze(e){return e.indexOf(".")>=0}function Pt(e){let t=e.indexOf(".");return t===-1?e:e.slice(0,t)}function jr(e,t){return e.indexOf(t+".")===0}function fe(e,t){return t.indexOf(e+".")===0}function pe(e,t,s){return t+s.slice(e.length)}function Ft(e){if(Array.isArray(e)){let t=[];for(let s=0;s<e.length;s++){let n=e[s].toString().split(".");for(let i=0;i<n.length;i++)t.push(n[i])}return t.join(".")}else return e}function Dn(e){return Array.isArray(e)?Ft(e).split("."):e.toString().split(".")}function H(e,t,s){let n=e,i=Dn(t);for(let r=0;r<i.length;r++){if(!n)return;let o=i[r];n=n[o]}return s&&(s.path=i.join(".")),n}function ks(e,t,s){let n=e,i=Dn(t),r=i[i.length-1];if(i.length>1){for(let o=0;o<i.length-1;o++){let a=i[o];if(n=n[a],!n)return}n[r]=s}else n[t]=s;return i.join(".")}const ge={},Vr=/-[a-z]/g,Br=/([A-Z])/g;function In(e){return ge[e]||(ge[e]=e.indexOf("-")<0?e:e.replace(Vr,t=>t[1].toUpperCase()))}function Pe(e){return ge[e]||(ge[e]=e.replace(Br,"-$1").toLowerCase())}let Hr=0,jn=0,$t=[],Ur=0,ts=!1,Vn=document.createTextNode("");new window.MutationObserver(Kr).observe(Vn,{characterData:!0});function Kr(){ts=!1;const e=$t.length;for(let t=0;t<e;t++){let s=$t[t];if(s)try{s()}catch(n){setTimeout(()=>{throw n})}}$t.splice(0,e),jn+=e}const Wr={run(e){return ts||(ts=!0,Vn.textContent=Ur++),$t.push(e),Hr++},cancel(e){const t=e-jn;if(t>=0){if(!$t[t])throw new Error("invalid async handle: "+e);$t[t]=null}}};const Yr=Wr,Bn=Ct(e=>{class t extends e{static createProperties(n){const i=this.prototype;for(let r in n)r in i||i._createPropertyAccessor(r)}static attributeNameForProperty(n){return n.toLowerCase()}static typeForProperty(n){}_createPropertyAccessor(n,i){this._addPropertyToAttributeMap(n),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[n]||(this.__dataHasAccessor[n]=!0,this._definePropertyAccessor(n,i))}_addPropertyToAttributeMap(n){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let i=this.__dataAttributes[n];return i||(i=this.constructor.attributeNameForProperty(n),this.__dataAttributes[i]=n),i}_definePropertyAccessor(n,i){Object.defineProperty(this,n,{get(){return this.__data[n]},set:i?function(){}:function(r){this._setPendingProperty(n,r,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let n in this.__dataHasAccessor)this.hasOwnProperty(n)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[n]=this[n],delete this[n])}_initializeInstanceProperties(n){Object.assign(this,n)}_setProperty(n,i){this._setPendingProperty(n,i)&&this._invalidateProperties()}_getProperty(n){return this.__data[n]}_setPendingProperty(n,i,r){let o=this.__data[n],a=this._shouldPropertyChange(n,i,o);return a&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(n in this.__dataOld)&&(this.__dataOld[n]=o),this.__data[n]=i,this.__dataPending[n]=i),a}_isPropertyPending(n){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(n))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,Yr.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const n=this.__data,i=this.__dataPending,r=this.__dataOld;this._shouldPropertiesChange(n,i,r)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(n,i,r)),this.__dataCounter--}_shouldPropertiesChange(n,i,r){return!!i}_propertiesChanged(n,i,r){}_shouldPropertyChange(n,i,r){return r!==i&&(r===r||i===i)}attributeChangedCallback(n,i,r,o){i!==r&&this._attributeToProperty(n,r),super.attributeChangedCallback&&super.attributeChangedCallback(n,i,r,o)}_attributeToProperty(n,i,r){if(!this.__serializing){const o=this.__dataAttributes,a=o&&o[n]||n;this[a]=this._deserializeValue(i,r||this.constructor.typeForProperty(a))}}_propertyToAttribute(n,i,r){this.__serializing=!0,r=arguments.length<3?this[n]:r,this._valueToNodeAttribute(this,r,i||this.constructor.attributeNameForProperty(n)),this.__serializing=!1}_valueToNodeAttribute(n,i,r){const o=this._serializeValue(i);(r==="class"||r==="name"||r==="slot")&&(n=yt(n)),o===void 0?n.removeAttribute(r):n.setAttribute(r,o===""&&window.trustedTypes?window.trustedTypes.emptyScript:o)}_serializeValue(n){return typeof n==="boolean"?n?"":void 0:n?.toString()}_deserializeValue(n,i){switch(i){case Boolean:return n!==null;case Number:return Number(n);default:return n}}}return t});const Hn={};let se=HTMLElement.prototype;for(;se;){let e=Object.getOwnPropertyNames(se);for(let t=0;t<e.length;t++)Hn[e[t]]=!0;se=Object.getPrototypeOf(se)}const Jr=window.trustedTypes?e=>trustedTypes.isHTML(e)||trustedTypes.isScript(e)||trustedTypes.isScriptURL(e):()=>!1;function qr(e,t){if(!Hn[t]){let s=e[t];s!==void 0&&(e.__data?e._setPendingProperty(t,s):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=s))}}const Gr=Ct(e=>{const t=Bn(e);class s extends t{static createPropertiesForAttributes(){let i=this.observedAttributes;for(let r=0;r<i.length;r++)this.prototype._createPropertyAccessor(In(i[r]))}static attributeNameForProperty(i){return Pe(i)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(i){for(let r in i)this._setProperty(r,i[r])}_ensureAttribute(i,r){const o=this;o.hasAttribute(i)||this._valueToNodeAttribute(o,r,i)}_serializeValue(i){switch(typeof i){case"object":if(i instanceof Date)return i.toString();if(i){if(Jr(i))return i;try{return JSON.stringify(i)}catch{return""}}default:return super._serializeValue(i)}}_deserializeValue(i,r){let o;switch(r){case Object:try{o=JSON.parse(i)}catch{o=i}break;case Array:try{o=JSON.parse(i)}catch{o=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${i}`)}break;case Date:o=isNaN(i)?String(i):Number(i),o=new Date(o);break;default:o=super._deserializeValue(i,r);break}return o}_definePropertyAccessor(i,r){qr(this,i),super._definePropertyAccessor(i,r)}_hasAccessor(i){return this.__dataHasAccessor&&this.__dataHasAccessor[i]}_isPropertyPending(i){return!!(this.__dataPending&&i in this.__dataPending)}}return s});const Xr={"dom-if":!0,"dom-repeat":!0};let Ns=!1,zs=!1;function Qr(){if(!Ns){Ns=!0;const e=document.createElement("textarea");e.placeholder="a",zs=e.placeholder===e.textContent}return zs}function Zr(e){Qr()&&e.localName==="textarea"&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}const to=(()=>{const e=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:t=>t});return(t,s,n)=>{const i=s.getAttribute(n);if(e&&n.startsWith("on-")){t.setAttribute(n,e.createScript(i,n));return}t.setAttribute(n,i)}})();function eo(e){let t=e.getAttribute("is");if(t&&Xr[t]){let s=e;for(s.removeAttribute("is"),e=s.ownerDocument.createElement(t),s.parentNode.replaceChild(e,s),e.appendChild(s);s.attributes.length;){const{name:n}=s.attributes[0];to(e,s,n),s.removeAttribute(n)}}return e}function Un(e,t){let s=t.parentInfo&&Un(e,t.parentInfo);if(s){for(let n=s.firstChild,i=0;n;n=n.nextSibling)if(t.parentIndex===i++)return n}else return e}function so(e,t,s,n){n.id&&(t[n.id]=s)}function no(e,t,s){if(s.events&&s.events.length)for(let n=0,i=s.events,r;n<i.length&&(r=i[n]);n++)e._addMethodEventListenerToNode(t,r.name,r.value,e)}function io(e,t,s,n){s.templateInfo&&(t._templateInfo=s.templateInfo,t._parentTemplateInfo=n)}function ro(e,t,s){return e=e._methodHost||e,function(i){e[s]?e[s](i,i.detail):console.warn("listener method `"+s+"` not defined")}}const oo=Ct(e=>{class t extends e{static _parseTemplate(n,i){if(!n._templateInfo){let r=n._templateInfo={};r.nodeInfoList=[],r.nestedTemplate=!!i,r.stripWhiteSpace=i&&i.stripWhiteSpace||n.hasAttribute&&n.hasAttribute("strip-whitespace"),this._parseTemplateContent(n,r,{parent:null})}return n._templateInfo}static _parseTemplateContent(n,i,r){return this._parseTemplateNode(n.content,i,r)}static _parseTemplateNode(n,i,r){let o=!1,a=n;return a.localName=="template"&&!a.hasAttribute("preserve-content")?o=this._parseTemplateNestedTemplate(a,i,r)||o:a.localName==="slot"&&(i.hasInsertionPoint=!0),Zr(a),a.firstChild&&this._parseTemplateChildNodes(a,i,r),a.hasAttributes&&a.hasAttributes()&&(o=this._parseTemplateNodeAttributes(a,i,r)||o),o||r.noted}static _parseTemplateChildNodes(n,i,r){if(!(n.localName==="script"||n.localName==="style"))for(let o=n.firstChild,a=0,l;o;o=l){if(o.localName=="template"&&(o=eo(o)),l=o.nextSibling,o.nodeType===Node.TEXT_NODE){let u=l;for(;u&&u.nodeType===Node.TEXT_NODE;)o.textContent+=u.textContent,l=u.nextSibling,n.removeChild(u),u=l;if(i.stripWhiteSpace&&!o.textContent.trim()){n.removeChild(o);continue}}let c={parentIndex:a,parentInfo:r};this._parseTemplateNode(o,i,c)&&(c.infoIndex=i.nodeInfoList.push(c)-1),o.parentNode&&a++}}static _parseTemplateNestedTemplate(n,i,r){let o=n,a=this._parseTemplate(o,i);return(a.content=o.content.ownerDocument.createDocumentFragment()).appendChild(o.content),r.templateInfo=a,!0}static _parseTemplateNodeAttributes(n,i,r){let o=!1,a=Array.from(n.attributes);for(let l=a.length-1,c;c=a[l];l--)o=this._parseTemplateNodeAttribute(n,i,r,c.name,c.value)||o;return o}static _parseTemplateNodeAttribute(n,i,r,o,a){return o.slice(0,3)==="on-"?(n.removeAttribute(o),r.events=r.events||[],r.events.push({name:o.slice(3),value:a}),!0):o==="id"?(r.id=a,!0):!1}static _contentForTemplate(n){let i=n._templateInfo;return i&&i.content||n.content}_stampTemplate(n,i){n&&!n.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(n),i=i||this.constructor._parseTemplate(n);let r=i.nodeInfoList,o=i.content||n.content,a=document.importNode(o,!0);a.__noInsertionPoint=!i.hasInsertionPoint;let l=a.nodeList=new Array(r.length);a.$={};for(let c=0,u=r.length,d;c<u&&(d=r[c]);c++){let h=l[c]=Un(a,d);so(this,a.$,h,d),io(this,h,d,i),no(this,h,d)}return a=a,a}_addMethodEventListenerToNode(n,i,r,o){o=o||n;let a=ro(o,i,r);return this._addEventListenerToNode(n,i,a),a}_addEventListenerToNode(n,i,r){n.addEventListener(i,r)}_removeEventListenerFromNode(n,i,r){n.removeEventListener(i,r)}}return t});let Ut=0;const Kt=[],P={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Kn="__computeInfo",ao=/[A-Z]/;function Ve(e,t,s){let n=e[t];if(!n)n=e[t]={};else if(!e.hasOwnProperty(t)&&(n=e[t]=Object.create(e[t]),s))for(let i in n){let r=n[i],o=n[i]=Array(r.length);for(let a=0;a<r.length;a++)o[a]=r[a]}return n}function Dt(e,t,s,n,i,r){if(t){let o=!1;const a=Ut++;for(let l in s){let c=i?Pt(l):l,u=t[c];if(u)for(let d=0,h=u.length,f;d<h&&(f=u[d]);d++)(!f.info||f.info.lastRun!==a)&&(!i||ms(l,f.trigger))&&(f.info&&(f.info.lastRun=a),f.fn(e,l,s,n,f.info,i,r),o=!0)}return o}return!1}function lo(e,t,s,n,i,r,o,a){let l=!1,c=o?Pt(n):n,u=t[c];if(u)for(let d=0,h=u.length,f;d<h&&(f=u[d]);d++)(!f.info||f.info.lastRun!==s)&&(!o||ms(n,f.trigger))&&(f.info&&(f.info.lastRun=s),f.fn(e,n,i,r,f.info,o,a),l=!0);return l}function ms(e,t){if(t){let s=t.name;return s==e||!!(t.structured&&jr(s,e))||!!(t.wildcard&&fe(s,e))}else return!0}function Ms(e,t,s,n,i){let r=typeof i.method=="string"?e[i.method]:i.method,o=i.property;r?r.call(e,e.__data[o],n[o]):i.dynamicFn||console.warn("observer method `"+i.method+"` not defined")}function co(e,t,s,n,i){let r=e[P.NOTIFY],o,a=Ut++;for(let c in t)t[c]&&(r&&lo(e,r,a,c,s,n,i)||i&&uo(e,c,s))&&(o=!0);let l;o&&(l=e.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function uo(e,t,s){let n=Pt(t);if(n!==t){let i=Pe(n)+"-changed";return Wn(e,i,s[t],t),!0}return!1}function Wn(e,t,s,n){let i={value:s,queueProperty:!0};n&&(i.path=n),yt(e).dispatchEvent(new CustomEvent(t,{detail:i}))}function ho(e,t,s,n,i,r){let a=(r?Pt(t):t)!=t?t:null,l=a?H(e,a):e.__data[t];a&&l===void 0&&(l=s[t]),Wn(e,i.eventName,l,a)}function fo(e,t,s,n,i){let r,o=e.detail,a=o&&o.path;a?(n=pe(s,n,a),r=o&&o.value):r=e.currentTarget[s],r=i?!r:r,(!t[P.READ_ONLY]||!t[P.READ_ONLY][n])&&t._setPendingPropertyOrPath(n,r,!0,!!a)&&(!o||!o.queueProperty)&&t._invalidateProperties()}function po(e,t,s,n,i){let r=e.__data[t];he&&(r=he(r,i.attrName,"attribute",e)),e._propertyToAttribute(t,i.attrName,r)}function go(e,t,s,n){let i=e[P.COMPUTE];if(i)if(Lr){Ut++;const r=_o(e),o=[];for(let l in t)Fs(l,i,o,r,n);let a;for(;a=o.shift();)Yn(e,"",t,s,a)&&Fs(a.methodInfo,i,o,r,n);Object.assign(s,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let r=t;for(;Dt(e,i,r,s,n);)Object.assign(s,e.__dataOld),Object.assign(t,e.__dataPending),r=e.__dataPending,e.__dataPending=null}}const mo=(e,t,s)=>{let n=0,i=t.length-1,r=-1;for(;n<=i;){const o=n+i>>1,a=s.get(t[o].methodInfo)-s.get(e.methodInfo);if(a<0)n=o+1;else if(a>0)i=o-1;else{r=o;break}}r<0&&(r=i+1),t.splice(r,0,e)},Fs=(e,t,s,n,i)=>{const r=i?Pt(e):e,o=t[r];if(o)for(let a=0;a<o.length;a++){const l=o[a];l.info.lastRun!==Ut&&(!i||ms(e,l.trigger))&&(l.info.lastRun=Ut,mo(l.info,s,n))}};function _o(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;const s=e[P.COMPUTE];let{counts:n,ready:i,total:r}=yo(e),o;for(;o=i.shift();){t.set(o,t.size);const a=s[o];a&&a.forEach(l=>{const c=l.info.methodInfo;--r,--n[c]===0&&i.push(c)})}r!==0&&console.warn(`Computed graph for ${e.localName} incomplete; circular?`),e.constructor.__orderedComputedDeps=t}return t}function yo(e){const t=e[Kn],s={},n=e[P.COMPUTE],i=[];let r=0;for(let o in t){const a=t[o];r+=s[o]=a.args.filter(l=>!l.literal).length+(a.dynamicFn?1:0)}for(let o in n)t[o]||i.push(o);return{counts:s,ready:i,total:r}}function Yn(e,t,s,n,i){let r=es(e,t,s,n,i);if(r===Kt)return!1;let o=i.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[o]?e._setPendingProperty(o,r,!0):(e[o]=r,!1)}function bo(e,t,s){let n=e.__dataLinkedPaths;if(n){let i;for(let r in n){let o=n[r];fe(r,t)?(i=pe(r,o,t),e._setPendingPropertyOrPath(i,s,!0,!0)):fe(o,t)&&(i=pe(o,r,t),e._setPendingPropertyOrPath(i,s,!0,!0))}}}function Be(e,t,s,n,i,r,o){s.bindings=s.bindings||[];let a={kind:n,target:i,parts:r,literal:o,isCompound:r.length!==1};if(s.bindings.push(a),Co(a)){let{event:c,negate:u}=a.parts[0];a.listenerEvent=c||Pe(i)+"-changed",a.listenerNegate=u}let l=t.nodeInfoList.length;for(let c=0;c<a.parts.length;c++){let u=a.parts[c];u.compoundIndex=c,vo(e,t,a,u,l)}}function vo(e,t,s,n,i){if(!n.literal)if(s.kind==="attribute"&&s.target[0]==="-")console.warn("Cannot set attribute "+s.target+' because "-" is not a valid attribute starting character');else{let r=n.dependencies,o={index:i,binding:s,part:n,evaluator:e};for(let a=0;a<r.length;a++){let l=r[a];typeof l=="string"&&(l=qn(l),l.wildcard=!0),e._addTemplatePropertyEffect(t,l.rootProperty,{fn:wo,info:o,trigger:l})}}}function wo(e,t,s,n,i,r,o){let a=o[i.index],l=i.binding,c=i.part;if(r&&c.source&&t.length>c.source.length&&l.kind=="property"&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let u=s[t];t=pe(c.source,l.target,t),a._setPendingPropertyOrPath(t,u,!1,!0)&&e._enqueueClient(a)}else{let u=i.evaluator._evaluateBinding(e,c,t,s,n,r);u!==Kt&&xo(e,a,l,c,u)}}function xo(e,t,s,n,i){if(i=So(t,i,s,n),he&&(i=he(i,s.target,s.kind,t)),s.kind=="attribute")e._valueToNodeAttribute(t,i,s.target);else{let r=s.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[r]?(!t[P.READ_ONLY]||!t[P.READ_ONLY][r])&&t._setPendingProperty(r,i)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,r,i)}}function So(e,t,s,n){if(s.isCompound){let i=e.__dataCompoundStorage[s.target];i[n.compoundIndex]=t,t=i.join("")}return s.kind!=="attribute"&&(s.target==="textContent"||s.target==="value"&&(e.localName==="input"||e.localName==="textarea"))&&(t=t??""),t}function Co(e){return!!e.target&&e.kind!="attribute"&&e.kind!="text"&&!e.isCompound&&e.parts[0].mode==="{"}function Po(e,t){let{nodeList:s,nodeInfoList:n}=t;if(n.length)for(let i=0;i<n.length;i++){let r=n[i],o=s[i],a=r.bindings;if(a)for(let l=0;l<a.length;l++){let c=a[l];Eo(o,c),Oo(o,e,c)}o.__dataHost=e}}function Eo(e,t){if(t.isCompound){let s=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),n=t.parts,i=new Array(n.length);for(let o=0;o<n.length;o++)i[o]=n[o].literal;let r=t.target;s[r]=i,t.literal&&t.kind=="property"&&(r==="className"&&(e=yt(e)),e[r]=t.literal)}}function Oo(e,t,s){if(s.listenerEvent){let n=s.parts[0];e.addEventListener(s.listenerEvent,function(i){fo(i,t,s.target,n.source,n.negate)})}}function Ds(e,t,s,n,i,r){r=t.static||r&&(typeof r!="object"||r[t.methodName]);let o={methodName:t.methodName,args:t.args,methodInfo:i,dynamicFn:r};for(let a=0,l;a<t.args.length&&(l=t.args[a]);a++)l.literal||e._addPropertyEffect(l.rootProperty,s,{fn:n,info:o,trigger:l});return r&&e._addPropertyEffect(t.methodName,s,{fn:n,info:o}),o}function es(e,t,s,n,i){let r=e._methodHost||e,o=r[i.methodName];if(o){let a=e._marshalArgs(i.args,t,s);return a===Kt?Kt:o.apply(r,a)}else i.dynamicFn||console.warn("method `"+i.methodName+"` not defined")}const $o=[],Jn="(?:[a-zA-Z_$][\\w.:$\\-*]*)",To="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",Lo="(?:'(?:[^'\\\\]|\\\\.)*')",Ao='(?:"(?:[^"\\\\]|\\\\.)*")',Ro="(?:"+Lo+"|"+Ao+")",Is="(?:("+Jn+"|"+To+"|"+Ro+")\\s*)",ko="(?:"+Is+"(?:,\\s*"+Is+")*)",No="(?:\\(\\s*(?:"+ko+"?)\\)\\s*)",zo="("+Jn+"\\s*"+No+"?)",Mo="(\\[\\[|{{)\\s*",Fo="(?:]]|}})",Do="(?:(!)\\s*)?",Io=Mo+Do+zo+Fo,js=new RegExp(Io,"g");function Vs(e){let t="";for(let s=0;s<e.length;s++){let n=e[s].literal;t+=n||""}return t}function He(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let n={methodName:t[1],static:!0,args:$o};if(t[2].trim()){let i=t[2].replace(/\\,/g,"&comma;").split(",");return jo(i,n)}else return n}return null}function jo(e,t){return t.args=e.map(function(s){let n=qn(s);return n.literal||(t.static=!1),n},this),t}function qn(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),s={name:t,value:"",literal:!1},n=t[0];switch(n==="-"&&(n=t[1]),n>="0"&&n<="9"&&(n="#"),n){case"'":case'"':s.value=t.slice(1,-1),s.literal=!0;break;case"#":s.value=Number(t),s.literal=!0;break}return s.literal||(s.rootProperty=Pt(t),s.structured=Ze(t),s.structured&&(s.wildcard=t.slice(-2)==".*",s.wildcard&&(s.name=t.slice(0,-2)))),s}function Bs(e,t,s){let n=H(e,s);return n===void 0&&(n=t[s]),n}function Gn(e,t,s,n){const i={indexSplices:n};Qe&&!e._overrideLegacyUndefined&&(t.splices=i),e.notifyPath(s+".splices",i),e.notifyPath(s+".length",t.length),Qe&&!e._overrideLegacyUndefined&&(i.indexSplices=[])}function Nt(e,t,s,n,i,r){Gn(e,t,s,[{index:n,addedCount:i,removed:r,object:t,type:"splice"}])}function Vo(e){return e[0].toUpperCase()+e.substring(1)}const Bo=Ct(e=>{const t=oo(Gr(e));class s extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return P}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(zt.length){let i=zt[zt.length-1];i._enqueueClient(this),this.__dataHost=i}}_initializeProtoProperties(i){this.__data=Object.create(i),this.__dataPending=Object.create(i),this.__dataOld={}}_initializeInstanceProperties(i){let r=this[P.READ_ONLY];for(let o in i)(!r||!r[o])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[o]=this.__dataPending[o]=i[o])}_addPropertyEffect(i,r,o){this._createPropertyAccessor(i,r==P.READ_ONLY);let a=Ve(this,r,!0)[i];a||(a=this[r][i]=[]),a.push(o)}_removePropertyEffect(i,r,o){let a=Ve(this,r,!0)[i],l=a.indexOf(o);l>=0&&a.splice(l,1)}_hasPropertyEffect(i,r){let o=this[r];return!!(o&&o[i])}_hasReadOnlyEffect(i){return this._hasPropertyEffect(i,P.READ_ONLY)}_hasNotifyEffect(i){return this._hasPropertyEffect(i,P.NOTIFY)}_hasReflectEffect(i){return this._hasPropertyEffect(i,P.REFLECT)}_hasComputedEffect(i){return this._hasPropertyEffect(i,P.COMPUTE)}_setPendingPropertyOrPath(i,r,o,a){if(a||Pt(Array.isArray(i)?i[0]:i)!==i){if(!a){let l=H(this,i);if(i=ks(this,i,r),!i||!super._shouldPropertyChange(i,r,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(i,r,o))return bo(this,i,r),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[i])return this._setPendingProperty(i,r,o);this[i]=r}return!1}_setUnmanagedPropertyToNode(i,r,o){(o!==i[r]||typeof o=="object")&&(r==="className"&&(i=yt(i)),i[r]=o)}_setPendingProperty(i,r,o){let a=this.__dataHasPaths&&Ze(i),l=a?this.__dataTemp:this.__data;return this._shouldPropertyChange(i,r,l[i])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),i in this.__dataOld||(this.__dataOld[i]=this.__data[i]),a?this.__dataTemp[i]=r:this.__data[i]=r,this.__dataPending[i]=r,(a||this[P.NOTIFY]&&this[P.NOTIFY][i])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[i]=o),!0):!1}_setProperty(i,r){this._setPendingProperty(i,r,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(i){this.__dataPendingClients=this.__dataPendingClients||[],i!==this&&this.__dataPendingClients.push(i)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let i=this.__dataPendingClients;if(i){this.__dataPendingClients=null;for(let r=0;r<i.length;r++){let o=i[r];o.__dataEnabled?o.__dataPending&&o._flushProperties():o._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(i,r){for(let o in i)(r||!this[P.READ_ONLY]||!this[P.READ_ONLY][o])&&this._setPendingPropertyOrPath(o,i[o],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(i,r,o){let a=this.__dataHasPaths;this.__dataHasPaths=!1;let l;go(this,r,o,a),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(r,o,a),this._flushClients(),Dt(this,this[P.REFLECT],r,o,a),Dt(this,this[P.OBSERVE],r,o,a),l&&co(this,l,r,o,a),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(i,r,o){this[P.PROPAGATE]&&Dt(this,this[P.PROPAGATE],i,r,o),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,i,r,o)}_runEffectsForTemplate(i,r,o,a){const l=(c,u)=>{Dt(this,i.propertyEffects,c,o,u,i.nodeList);for(let d=i.firstChild;d;d=d.nextSibling)this._runEffectsForTemplate(d,c,o,u)};i.runEffects?i.runEffects(l,r,a):l(r,a)}linkPaths(i,r){i=Ft(i),r=Ft(r),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[i]=r}unlinkPaths(i){i=Ft(i),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[i]}notifySplices(i,r){let o={path:""},a=H(this,i,o);Gn(this,a,o.path,r)}get(i,r){return H(r||this,i)}set(i,r,o){o?ks(o,i,r):(!this[P.READ_ONLY]||!this[P.READ_ONLY][i])&&this._setPendingPropertyOrPath(i,r,!0)&&this._invalidateProperties()}push(i,...r){let o={path:""},a=H(this,i,o),l=a.length,c=a.push(...r);return r.length&&Nt(this,a,o.path,l,r.length,[]),c}pop(i){let r={path:""},o=H(this,i,r),a=!!o.length,l=o.pop();return a&&Nt(this,o,r.path,o.length,0,[l]),l}splice(i,r,o,...a){let l={path:""},c=H(this,i,l);r<0?r=c.length-Math.floor(-r):r&&(r=Math.floor(r));let u;return arguments.length===2?u=c.splice(r):u=c.splice(r,o,...a),(a.length||u.length)&&Nt(this,c,l.path,r,a.length,u),u}shift(i){let r={path:""},o=H(this,i,r),a=!!o.length,l=o.shift();return a&&Nt(this,o,r.path,0,0,[l]),l}unshift(i,...r){let o={path:""},a=H(this,i,o),l=a.unshift(...r);return r.length&&Nt(this,a,o.path,0,r.length,[]),l}notifyPath(i,r){let o;if(arguments.length==1){let a={path:""};r=H(this,i,a),o=a.path}else Array.isArray(i)?o=Ft(i):o=i;this._setPendingPropertyOrPath(o,r,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(i,r){this._addPropertyEffect(i,P.READ_ONLY),r&&(this["_set"+Vo(i)]=function(o){this._setProperty(i,o)})}_createPropertyObserver(i,r,o){let a={property:i,method:r,dynamicFn:!!o};this._addPropertyEffect(i,P.OBSERVE,{fn:Ms,info:a,trigger:{name:i}}),o&&this._addPropertyEffect(r,P.OBSERVE,{fn:Ms,info:a,trigger:{name:r}})}_createMethodObserver(i,r){let o=He(i);if(!o)throw new Error("Malformed observer expression '"+i+"'");Ds(this,o,P.OBSERVE,es,null,r)}_createNotifyingProperty(i){this._addPropertyEffect(i,P.NOTIFY,{fn:ho,info:{eventName:Pe(i)+"-changed",property:i}})}_createReflectedProperty(i){let r=this.constructor.attributeNameForProperty(i);r[0]==="-"?console.warn("Property "+i+" cannot be reflected to attribute "+r+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(i,P.REFLECT,{fn:po,info:{attrName:r}})}_createComputedProperty(i,r,o){let a=He(r);if(!a)throw new Error("Malformed computed expression '"+r+"'");const l=Ds(this,a,P.COMPUTE,Yn,i,o);Ve(this,Kn)[i]=l}_marshalArgs(i,r,o){const a=this.__data,l=[];for(let c=0,u=i.length;c<u;c++){let{name:d,structured:h,wildcard:f,value:p,literal:g}=i[c];if(!g)if(f){const m=fe(d,r),_=Bs(a,o,m?r:d);p={path:m?r:d,value:_,base:m?H(a,d):_}}else p=h?Bs(a,o,d):a[d];if(Qe&&!this._overrideLegacyUndefined&&p===void 0&&i.length>1)return Kt;l[c]=p}return l}static addPropertyEffect(i,r,o){this.prototype._addPropertyEffect(i,r,o)}static createPropertyObserver(i,r,o){this.prototype._createPropertyObserver(i,r,o)}static createMethodObserver(i,r){this.prototype._createMethodObserver(i,r)}static createNotifyingProperty(i){this.prototype._createNotifyingProperty(i)}static createReadOnlyProperty(i,r){this.prototype._createReadOnlyProperty(i,r)}static createReflectedProperty(i){this.prototype._createReflectedProperty(i)}static createComputedProperty(i,r,o){this.prototype._createComputedProperty(i,r,o)}static bindTemplate(i){return this.prototype._bindTemplate(i)}_bindTemplate(i,r){let o=this.constructor._parseTemplate(i),a=this.__preBoundTemplateInfo==o;if(!a)for(let l in o.propertyEffects)this._createPropertyAccessor(l);if(r)if(o=Object.create(o),o.wasPreBound=a,!this.__templateInfo)this.__templateInfo=o;else{const l=i._parentTemplateInfo||this.__templateInfo,c=l.lastChild;o.parent=l,l.lastChild=o,o.previousSibling=c,c?c.nextSibling=o:l.firstChild=o}else this.__preBoundTemplateInfo=o;return o}static _addTemplatePropertyEffect(i,r,o){let a=i.hostProps=i.hostProps||{};a[r]=!0;let l=i.propertyEffects=i.propertyEffects||{};(l[r]=l[r]||[]).push(o)}_stampTemplate(i,r){r=r||this._bindTemplate(i,!0),zt.push(this);let o=super._stampTemplate(i,r);if(zt.pop(),r.nodeList=o.nodeList,!r.wasPreBound){let a=r.childNodes=[];for(let l=o.firstChild;l;l=l.nextSibling)a.push(l)}return o.templateInfo=r,Po(this,r),this.__dataClientsReady&&(this._runEffectsForTemplate(r,this.__data,null,!1),this._flushClients()),o}_removeBoundDom(i){const r=i.templateInfo,{previousSibling:o,nextSibling:a,parent:l}=r;o?o.nextSibling=a:l&&(l.firstChild=a),a?a.previousSibling=o:l&&(l.lastChild=o),r.nextSibling=r.previousSibling=null;let c=r.childNodes;for(let u=0;u<c.length;u++){let d=c[u];yt(yt(d).parentNode).removeChild(d)}}static _parseTemplateNode(i,r,o){let a=t._parseTemplateNode.call(this,i,r,o);if(i.nodeType===Node.TEXT_NODE){let l=this._parseBindings(i.textContent,r);l&&(i.textContent=Vs(l)||" ",Be(this,r,o,"text","textContent",l),a=!0)}return a}static _parseTemplateNodeAttribute(i,r,o,a,l){let c=this._parseBindings(l,r);if(c){let u=a,d="property";ao.test(a)?d="attribute":a[a.length-1]=="$"&&(a=a.slice(0,-1),d="attribute");let h=Vs(c);return h&&d=="attribute"&&(a=="class"&&i.hasAttribute("class")&&(h+=" "+i.getAttribute(a)),i.setAttribute(a,h)),d=="attribute"&&u=="disable-upgrade$"&&i.setAttribute(a,""),i.localName==="input"&&u==="value"&&i.setAttribute(u,""),i.removeAttribute(u),d==="property"&&(a=In(a)),Be(this,r,o,d,a,c,h),!0}else return t._parseTemplateNodeAttribute.call(this,i,r,o,a,l)}static _parseTemplateNestedTemplate(i,r,o){let a=t._parseTemplateNestedTemplate.call(this,i,r,o);const l=i.parentNode,c=o.templateInfo,u=l.localName==="dom-if",d=l.localName==="dom-repeat";$s&&(u||d)&&(l.removeChild(i),o=o.parentInfo,o.templateInfo=c,o.noted=!0,a=!1);let h=c.hostProps;if(Ar&&u)h&&(r.hostProps=Object.assign(r.hostProps||{},h),$s||(o.parentInfo.noted=!0));else{let f="{";for(let p in h){let g=[{mode:f,source:p,dependencies:[p],hostProp:!0}];Be(this,r,o,"property","_host_"+p,g)}}return a}static _parseBindings(i,r){let o=[],a=0,l;for(;(l=js.exec(i))!==null;){l.index>a&&o.push({literal:i.slice(a,l.index)});let c=l[1][0],u=!!l[2],d=l[3].trim(),h=!1,f="",p=-1;c=="{"&&(p=d.indexOf("::"))>0&&(f=d.substring(p+2),d=d.substring(0,p),h=!0);let g=He(d),m=[];if(g){let{args:_,methodName:y}=g;for(let v=0;v<_.length;v++){let w=_[v];w.literal||m.push(w)}let b=r.dynamicFns;(b&&b[y]||g.static)&&(m.push(y),g.dynamicFn=!0)}else m.push(d);o.push({source:d,mode:c,negate:u,customEvent:h,signature:g,dependencies:m,event:f}),a=js.lastIndex}if(a&&a<i.length){let c=i.substring(a);c&&o.push({literal:c})}return o.length?o:null}static _evaluateBinding(i,r,o,a,l,c){let u;return r.signature?u=es(i,o,a,l,r.signature):o!=r.source?u=H(i,r.source):c&&Ze(o)?u=H(i,o):u=i.__data[o],r.negate&&(u=!u),u}}return s}),zt=[];function Ho(e){const t={};for(let s in e){const n=e[s];t[s]=typeof n=="function"?{type:n}:n}return t}const Uo=Ct(e=>{const t=Bn(e);function s(r){const o=Object.getPrototypeOf(r);return o.prototype instanceof i?o:null}function n(r){if(!r.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",r))){let o=null;if(r.hasOwnProperty(JSCompiler_renameProperty("properties",r))){const a=r.properties;a&&(o=Ho(a))}r.__ownProperties=o}return r.__ownProperties}class i extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const o=this._properties;this.__observedAttributes=o?Object.keys(o).map(a=>this.prototype._addPropertyToAttributeMap(a)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const o=s(this);o&&o.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const o=n(this);o&&this.createProperties(o)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const o=s(this);this.__properties=Object.assign({},o&&o._properties,n(this))}return this.__properties}static typeForProperty(o){const a=this._properties[o];return a&&a.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return i});const Ko="3.5.2",Hs=window.ShadyCSS&&window.ShadyCSS.cssBuild,Wo=Ct(e=>{const t=Uo(Bo(e));function s(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let c=l._properties;for(let u in c){let d=c[u];"value"in d&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[u]=d)}}return l.__propertyDefaults}function n(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function i(l,c,u,d){u.computed&&(u.readOnly=!0),u.computed&&(l._hasReadOnlyEffect(c)?console.warn(`Cannot redefine computed property '${c}'.`):l._createComputedProperty(c,u.computed,d)),u.readOnly&&!l._hasReadOnlyEffect(c)?l._createReadOnlyProperty(c,!u.computed):u.readOnly===!1&&l._hasReadOnlyEffect(c)&&console.warn(`Cannot make readOnly property '${c}' non-readOnly.`),u.reflectToAttribute&&!l._hasReflectEffect(c)?l._createReflectedProperty(c):u.reflectToAttribute===!1&&l._hasReflectEffect(c)&&console.warn(`Cannot make reflected property '${c}' non-reflected.`),u.notify&&!l._hasNotifyEffect(c)?l._createNotifyingProperty(c):u.notify===!1&&l._hasNotifyEffect(c)&&console.warn(`Cannot make notify property '${c}' non-notify.`),u.observer&&l._createPropertyObserver(c,u.observer,d[u.observer]),l._addPropertyToAttributeMap(c)}function r(l,c,u,d){if(!Hs){const h=c.content.querySelectorAll("style"),f=Mn(c),p=Ir(u),g=c.content.firstElementChild;for(let _=0;_<p.length;_++){let y=p[_];y.textContent=l._processStyleText(y.textContent,d),c.content.insertBefore(y,g)}let m=0;for(let _=0;_<f.length;_++){let y=f[_],b=h[m];b!==y?(y=y.cloneNode(!0),b.parentNode.insertBefore(y,b)):m++,y.textContent=l._processStyleText(y.textContent,d)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(c,u),Rr&&Hs&&Cr){const h=c.content.querySelectorAll("style");if(h){let f="";Array.from(h).forEach(p=>{f+=p.textContent,p.parentNode.removeChild(p)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(f)}}}function o(l){let c=null;if(l&&(!Xe||Er)&&(c=Ht.import(l,"template"),Xe&&!c))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return c}class a extends t{static get polymerElementVersion(){return Ko}static _finalizeClass(){t._finalizeClass.call(this);const c=n(this);c&&this.createObservers(c,this._properties),this._prepareTemplate()}static _prepareTemplate(){let c=this.template;c&&(typeof c=="string"?(console.error("template getter must return HTMLTemplateElement"),c=null):Or||(c=c.cloneNode(!0))),this.prototype._template=c}static createProperties(c){for(let u in c)i(this.prototype,u,c[u],c)}static createObservers(c,u){const d=this.prototype;for(let h=0;h<c.length;h++)d._createMethodObserver(c[h],u)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let c=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof c=="function"&&(c=c()),this._template=c!==void 0?c:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&o(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(c){this._template=c}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const c=this.importMeta;if(c)this._importPath=ps(c.url);else{const u=Ht.import(this.is);this._importPath=u&&u.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=Pr,this.importPath=this.constructor.importPath;let c=s(this.constructor);if(c)for(let u in c){let d=c[u];if(this._canApplyPropertyDefault(u)){let h=typeof d.value=="function"?d.value.call(this):d.value;this._hasAccessor(u)?this._setPendingProperty(u,h,!0):this[u]=h}}}_canApplyPropertyDefault(c){return!this.hasOwnProperty(c)}static _processStyleText(c,u){return fs(c,u)}static _finalizeTemplate(c){const u=this.prototype._template;if(u&&!u.__polymerFinalized){u.__polymerFinalized=!0;const d=this.importPath,h=d?Vt(d):"";r(this,u,c,h),this.prototype._bindTemplate(u)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(c){const u=yt(this);if(u.attachShadow)return c?(u.shadowRoot||(u.attachShadow({mode:"open",shadyUpgradeFragment:c}),u.shadowRoot.appendChild(c),this.constructor._styleSheet&&(u.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),Tr&&window.ShadyDOM&&window.ShadyDOM.flushInitial(u.shadowRoot),u.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(c){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,c)}resolveUrl(c,u){return!u&&this.importPath&&(u=Vt(this.importPath)),Vt(c,u)}static _parseTemplateContent(c,u,d){return u.dynamicFns=u.dynamicFns||this._properties,t._parseTemplateContent.call(this,c,u,d)}static _addTemplatePropertyEffect(c,u,d){return $r&&!(u in this._properties)&&!(d.info.part.signature&&d.info.part.signature.static)&&!d.info.part.hostProp&&!c.nestedTemplate&&console.warn(`Property '${u}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,c,u,d)}}return a});window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:e=>e});const Yo=Wo(HTMLElement),x=e=>typeof e=="string",Mt=()=>{let e,t;const s=new Promise((n,i)=>{e=n,t=i});return s.resolve=e,s.reject=t,s},Us=e=>e==null?"":""+e,Jo=(e,t,s)=>{e.forEach(n=>{t[n]&&(s[n]=t[n])})},qo=/###/g,Ks=e=>e&&e.indexOf("###")>-1?e.replace(qo,"."):e,Ws=e=>!e||x(e),Bt=(e,t,s)=>{const n=x(t)?t.split("."):t;let i=0;for(;i<n.length-1;){if(Ws(e))return{};const r=Ks(n[i]);!e[r]&&s&&(e[r]=new s),Object.prototype.hasOwnProperty.call(e,r)?e=e[r]:e={},++i}return Ws(e)?{}:{obj:e,k:Ks(n[i])}},Ys=(e,t,s)=>{const{obj:n,k:i}=Bt(e,t,Object);if(n!==void 0||t.length===1){n[i]=s;return}let r=t[t.length-1],o=t.slice(0,t.length-1),a=Bt(e,o,Object);for(;a.obj===void 0&&o.length;)r=`${o[o.length-1]}.${r}`,o=o.slice(0,o.length-1),a=Bt(e,o,Object),a&&a.obj&&typeof a.obj[`${a.k}.${r}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${r}`]=s},Go=(e,t,s,n)=>{const{obj:i,k:r}=Bt(e,t,Object);i[r]=i[r]||[],i[r].push(s)},me=(e,t)=>{const{obj:s,k:n}=Bt(e,t);if(s)return s[n]},Xo=(e,t,s)=>{const n=me(e,s);return n!==void 0?n:me(t,s)},Xn=(e,t,s)=>{for(const n in t)n!=="__proto__"&&n!=="constructor"&&(n in e?x(e[n])||e[n]instanceof String||x(t[n])||t[n]instanceof String?s&&(e[n]=t[n]):Xn(e[n],t[n],s):e[n]=t[n]);return e},Et=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var Qo={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const Zo=e=>x(e)?e.replace(/[&<>"'\/]/g,t=>Qo[t]):e;class ta{constructor(t){this.capacity=t,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(t){const s=this.regExpMap.get(t);if(s!==void 0)return s;const n=new RegExp(t);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(t,n),this.regExpQueue.push(t),n}}const ea=[" ",",","?","!",";"],sa=new ta(20),na=(e,t,s)=>{t=t||"",s=s||"";const n=ea.filter(o=>t.indexOf(o)<0&&s.indexOf(o)<0);if(n.length===0)return!0;const i=sa.getRegExp(`(${n.map(o=>o==="?"?"\\?":o).join("|")})`);let r=!i.test(e);if(!r){const o=e.indexOf(s);o>0&&!i.test(e.substring(0,o))&&(r=!0)}return r},ss=function(e,t){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!e)return;if(e[t])return e[t];const n=t.split(s);let i=e;for(let r=0;r<n.length;){if(!i||typeof i!="object")return;let o,a="";for(let l=r;l<n.length;++l)if(l!==r&&(a+=s),a+=n[l],o=i[a],o!==void 0){if(["string","number","boolean"].indexOf(typeof o)>-1&&l<n.length-1)continue;r+=l-r+1;break}i=o}return i},_e=e=>e&&e.replace("_","-"),ia={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){console&&console[e]&&console[e].apply(console,t)}};class ye{constructor(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(t,s)}init(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=s.prefix||"i18next:",this.logger=t||ia,this.options=s,this.debug=s.debug}log(){for(var t=arguments.length,s=new Array(t),n=0;n<t;n++)s[n]=arguments[n];return this.forward(s,"log","",!0)}warn(){for(var t=arguments.length,s=new Array(t),n=0;n<t;n++)s[n]=arguments[n];return this.forward(s,"warn","",!0)}error(){for(var t=arguments.length,s=new Array(t),n=0;n<t;n++)s[n]=arguments[n];return this.forward(s,"error","")}deprecate(){for(var t=arguments.length,s=new Array(t),n=0;n<t;n++)s[n]=arguments[n];return this.forward(s,"warn","WARNING DEPRECATED: ",!0)}forward(t,s,n,i){return i&&!this.debug?null:(x(t[0])&&(t[0]=`${n}${this.prefix} ${t[0]}`),this.logger[s](t))}create(t){return new ye(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new ye(this.logger,t)}}var et=new ye;class Ee{constructor(){this.observers={}}on(t,s){return t.split(" ").forEach(n=>{this.observers[n]||(this.observers[n]=new Map);const i=this.observers[n].get(s)||0;this.observers[n].set(s,i+1)}),this}off(t,s){if(this.observers[t]){if(!s){delete this.observers[t];return}this.observers[t].delete(s)}}emit(t){for(var s=arguments.length,n=new Array(s>1?s-1:0),i=1;i<s;i++)n[i-1]=arguments[i];this.observers[t]&&Array.from(this.observers[t].entries()).forEach(o=>{let[a,l]=o;for(let c=0;c<l;c++)a(...n)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(o=>{let[a,l]=o;for(let c=0;c<l;c++)a.apply(a,[t,...n])})}}class Js extends Ee{constructor(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=s,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const s=this.options.ns.indexOf(t);s>-1&&this.options.ns.splice(s,1)}getResource(t,s,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,o=i.ignoreJSONStructure!==void 0?i.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;t.indexOf(".")>-1?a=t.split("."):(a=[t,s],n&&(Array.isArray(n)?a.push(...n):x(n)&&r?a.push(...n.split(r)):a.push(n)));const l=me(this.data,a);return!l&&!s&&!n&&t.indexOf(".")>-1&&(t=a[0],s=a[1],n=a.slice(2).join(".")),l||!o||!x(n)?l:ss(this.data&&this.data[t]&&this.data[t][s],n,r)}addResource(t,s,n,i){let r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const o=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator;let a=[t,s];n&&(a=a.concat(o?n.split(o):n)),t.indexOf(".")>-1&&(a=t.split("."),i=s,s=a[1]),this.addNamespaces(s),Ys(this.data,a,i),r.silent||this.emit("added",t,s,n,i)}addResources(t,s,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const r in n)(x(n[r])||Array.isArray(n[r]))&&this.addResource(t,s,r,n[r],{silent:!0});i.silent||this.emit("added",t,s,n)}addResourceBundle(t,s,n,i,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},a=[t,s];t.indexOf(".")>-1&&(a=t.split("."),i=n,n=s,s=a[1]),this.addNamespaces(s);let l=me(this.data,a)||{};o.skipCopy||(n=JSON.parse(JSON.stringify(n))),i?Xn(l,n,r):l={...l,...n},Ys(this.data,a,l),o.silent||this.emit("added",t,s,n)}removeResourceBundle(t,s){this.hasResourceBundle(t,s)&&delete this.data[t][s],this.removeNamespaces(s),this.emit("removed",t,s)}hasResourceBundle(t,s){return this.getResource(t,s)!==void 0}getResourceBundle(t,s){return s||(s=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(t,s)}:this.getResource(t,s)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const s=this.getDataByLanguage(t);return!!(s&&Object.keys(s)||[]).find(i=>s[i]&&Object.keys(s[i]).length>0)}toJSON(){return this.data}}var Qn={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,s,n,i){return e.forEach(r=>{this.processors[r]&&(t=this.processors[r].process(t,s,n,i))}),t}};const qs={};class be extends Ee{constructor(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Jo(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=s,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=et.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(t==null)return!1;const n=this.resolve(t,s);return n&&n.res!==void 0}extractFromKey(t,s){let n=s.nsSeparator!==void 0?s.nsSeparator:this.options.nsSeparator;n===void 0&&(n=":");const i=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator;let r=s.ns||this.options.defaultNS||[];const o=n&&t.indexOf(n)>-1,a=!this.options.userDefinedKeySeparator&&!s.keySeparator&&!this.options.userDefinedNsSeparator&&!s.nsSeparator&&!na(t,n,i);if(o&&!a){const l=t.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:t,namespaces:x(r)?[r]:r};const c=t.split(n);(n!==i||n===i&&this.options.ns.indexOf(c[0])>-1)&&(r=c.shift()),t=c.join(i)}return{key:t,namespaces:x(r)?[r]:r}}translate(t,s,n){if(typeof s!="object"&&this.options.overloadTranslationOptionHandler&&(s=this.options.overloadTranslationOptionHandler(arguments)),typeof s=="object"&&(s={...s}),s||(s={}),t==null)return"";Array.isArray(t)||(t=[String(t)]);const i=s.returnDetails!==void 0?s.returnDetails:this.options.returnDetails,r=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,{key:o,namespaces:a}=this.extractFromKey(t[t.length-1],s),l=a[a.length-1],c=s.lng||this.language,u=s.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&c.toLowerCase()==="cimode"){if(u){const v=s.nsSeparator||this.options.nsSeparator;return i?{res:`${l}${v}${o}`,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(s)}:`${l}${v}${o}`}return i?{res:o,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(s)}:o}const d=this.resolve(t,s);let h=d&&d.res;const f=d&&d.usedKey||o,p=d&&d.exactUsedKey||o,g=Object.prototype.toString.apply(h),m=["[object Number]","[object Function]","[object RegExp]"],_=s.joinArrays!==void 0?s.joinArrays:this.options.joinArrays,y=!this.i18nFormat||this.i18nFormat.handleAsObject,b=!x(h)&&typeof h!="boolean"&&typeof h!="number";if(y&&h&&b&&m.indexOf(g)<0&&!(x(_)&&Array.isArray(h))){if(!s.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const v=this.options.returnedObjectHandler?this.options.returnedObjectHandler(f,h,{...s,ns:a}):`key '${o} (${this.language})' returned an object instead of string.`;return i?(d.res=v,d.usedParams=this.getUsedParamsDetails(s),d):v}if(r){const v=Array.isArray(h),w=v?[]:{},$=v?p:f;for(const S in h)if(Object.prototype.hasOwnProperty.call(h,S)){const A=`${$}${r}${S}`;w[S]=this.translate(A,{...s,joinArrays:!1,ns:a}),w[S]===A&&(w[S]=h[S])}h=w}}else if(y&&x(_)&&Array.isArray(h))h=h.join(_),h&&(h=this.extendTranslation(h,t,s,n));else{let v=!1,w=!1;const $=s.count!==void 0&&!x(s.count),S=be.hasDefaultValue(s),A=$?this.pluralResolver.getSuffix(c,s.count,s):"",z=s.ordinal&&$?this.pluralResolver.getSuffix(c,s.count,{ordinal:!1}):"",M=$&&!s.ordinal&&s.count===0&&this.pluralResolver.shouldUseIntlApi(),V=M&&s[`defaultValue${this.options.pluralSeparator}zero`]||s[`defaultValue${A}`]||s[`defaultValue${z}`]||s.defaultValue;!this.isValidLookup(h)&&S&&(v=!0,h=V),this.isValidLookup(h)||(w=!0,h=o);const B=(s.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&w?void 0:h,N=S&&V!==h&&this.options.updateMissing;if(w||v||N){if(this.logger.log(N?"updateKey":"missingKey",c,l,o,N?V:h),r){const T=this.resolve(o,{...s,keySeparator:!1});T&&T.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let I=[];const J=this.languageUtils.getFallbackCodes(this.options.fallbackLng,s.lng||this.language);if(this.options.saveMissingTo==="fallback"&&J&&J[0])for(let T=0;T<J.length;T++)I.push(J[T]);else this.options.saveMissingTo==="all"?I=this.languageUtils.toResolveHierarchy(s.lng||this.language):I.push(s.lng||this.language);const L=(T,j,at)=>{const Zt=S&&at!==h?at:B;this.options.missingKeyHandler?this.options.missingKeyHandler(T,l,j,Zt,N,s):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(T,l,j,Zt,N,s),this.emit("missingKey",T,l,j,h)};this.options.saveMissing&&(this.options.saveMissingPlurals&&$?I.forEach(T=>{const j=this.pluralResolver.getSuffixes(T,s);M&&s[`defaultValue${this.options.pluralSeparator}zero`]&&j.indexOf(`${this.options.pluralSeparator}zero`)<0&&j.push(`${this.options.pluralSeparator}zero`),j.forEach(at=>{L([T],o+at,s[`defaultValue${at}`]||V)})}):L(I,o,V))}h=this.extendTranslation(h,t,s,d,n),w&&h===o&&this.options.appendNamespaceToMissingKey&&(h=`${l}:${o}`),(w||v)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?h=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${o}`:o,v?h:void 0):h=this.options.parseMissingKeyHandler(h))}return i?(d.res=h,d.usedParams=this.getUsedParamsDetails(s),d):h}extendTranslation(t,s,n,i,r){var o=this;if(this.i18nFormat&&this.i18nFormat.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...n},n.lng||this.language||i.usedLng,i.usedNS,i.usedKey,{resolved:i});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init({...n,interpolation:{...this.options.interpolation,...n.interpolation}});const c=x(t)&&(n&&n.interpolation&&n.interpolation.skipOnVariables!==void 0?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let u;if(c){const h=t.match(this.interpolator.nestingRegexp);u=h&&h.length}let d=n.replace&&!x(n.replace)?n.replace:n;if(this.options.interpolation.defaultVariables&&(d={...this.options.interpolation.defaultVariables,...d}),t=this.interpolator.interpolate(t,d,n.lng||this.language||i.usedLng,n),c){const h=t.match(this.interpolator.nestingRegexp),f=h&&h.length;u<f&&(n.nest=!1)}!n.lng&&this.options.compatibilityAPI!=="v1"&&i&&i.res&&(n.lng=this.language||i.usedLng),n.nest!==!1&&(t=this.interpolator.nest(t,function(){for(var h=arguments.length,f=new Array(h),p=0;p<h;p++)f[p]=arguments[p];return r&&r[0]===f[0]&&!n.context?(o.logger.warn(`It seems you are nesting recursively key: ${f[0]} in key: ${s[0]}`),null):o.translate(...f,s)},n)),n.interpolation&&this.interpolator.reset()}const a=n.postProcess||this.options.postProcess,l=x(a)?[a]:a;return t!=null&&l&&l.length&&n.applyPostProcessor!==!1&&(t=Qn.handle(l,t,s,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...i,usedParams:this.getUsedParamsDetails(n)},...n}:n,this)),t}resolve(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n,i,r,o,a;return x(t)&&(t=[t]),t.forEach(l=>{if(this.isValidLookup(n))return;const c=this.extractFromKey(l,s),u=c.key;i=u;let d=c.namespaces;this.options.fallbackNS&&(d=d.concat(this.options.fallbackNS));const h=s.count!==void 0&&!x(s.count),f=h&&!s.ordinal&&s.count===0&&this.pluralResolver.shouldUseIntlApi(),p=s.context!==void 0&&(x(s.context)||typeof s.context=="number")&&s.context!=="",g=s.lngs?s.lngs:this.languageUtils.toResolveHierarchy(s.lng||this.language,s.fallbackLng);d.forEach(m=>{this.isValidLookup(n)||(a=m,!qs[`${g[0]}-${m}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(a)&&(qs[`${g[0]}-${m}`]=!0,this.logger.warn(`key "${i}" for languages "${g.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),g.forEach(_=>{if(this.isValidLookup(n))return;o=_;const y=[u];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(y,u,_,m,s);else{let v;h&&(v=this.pluralResolver.getSuffix(_,s.count,s));const w=`${this.options.pluralSeparator}zero`,$=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(h&&(y.push(u+v),s.ordinal&&v.indexOf($)===0&&y.push(u+v.replace($,this.options.pluralSeparator)),f&&y.push(u+w)),p){const S=`${u}${this.options.contextSeparator}${s.context}`;y.push(S),h&&(y.push(S+v),s.ordinal&&v.indexOf($)===0&&y.push(S+v.replace($,this.options.pluralSeparator)),f&&y.push(S+w))}}let b;for(;b=y.pop();)this.isValidLookup(n)||(r=b,n=this.getResource(_,m,b,s))}))})}),{res:n,usedKey:i,exactUsedKey:r,usedLng:o,usedNS:a}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,s,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(t,s,n,i):this.resourceStore.getResource(t,s,n,i)}getUsedParamsDetails(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const s=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],n=t.replace&&!x(t.replace);let i=n?t.replace:t;if(n&&typeof t.count<"u"&&(i.count=t.count),this.options.interpolation.defaultVariables&&(i={...this.options.interpolation.defaultVariables,...i}),!n){i={...i};for(const r of s)delete i[r]}return i}static hasDefaultValue(t){const s="defaultValue";for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&s===n.substring(0,s.length)&&t[n]!==void 0)return!0;return!1}}const Ue=e=>e.charAt(0).toUpperCase()+e.slice(1);class Gs{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=et.create("languageUtils")}getScriptPartFromCode(t){if(t=_e(t),!t||t.indexOf("-")<0)return null;const s=t.split("-");return s.length===2||(s.pop(),s[s.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(s.join("-"))}getLanguagePartFromCode(t){if(t=_e(t),!t||t.indexOf("-")<0)return t;const s=t.split("-");return this.formatLanguageCode(s[0])}formatLanguageCode(t){if(x(t)&&t.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let i=Intl.getCanonicalLocales(t)[0];if(i&&this.options.lowerCaseLng&&(i=i.toLowerCase()),i)return i}catch{}const s=["hans","hant","latn","cyrl","cans","mong","arab"];let n=t.split("-");return this.options.lowerCaseLng?n=n.map(i=>i.toLowerCase()):n.length===2?(n[0]=n[0].toLowerCase(),n[1]=n[1].toUpperCase(),s.indexOf(n[1].toLowerCase())>-1&&(n[1]=Ue(n[1].toLowerCase()))):n.length===3&&(n[0]=n[0].toLowerCase(),n[1].length===2&&(n[1]=n[1].toUpperCase()),n[0]!=="sgn"&&n[2].length===2&&(n[2]=n[2].toUpperCase()),s.indexOf(n[1].toLowerCase())>-1&&(n[1]=Ue(n[1].toLowerCase())),s.indexOf(n[2].toLowerCase())>-1&&(n[2]=Ue(n[2].toLowerCase()))),n.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let s;return t.forEach(n=>{if(s)return;const i=this.formatLanguageCode(n);(!this.options.supportedLngs||this.isSupportedCode(i))&&(s=i)}),!s&&this.options.supportedLngs&&t.forEach(n=>{if(s)return;const i=this.getLanguagePartFromCode(n);if(this.isSupportedCode(i))return s=i;s=this.options.supportedLngs.find(r=>{if(r===i)return r;if(!(r.indexOf("-")<0&&i.indexOf("-")<0)&&(r.indexOf("-")>0&&i.indexOf("-")<0&&r.substring(0,r.indexOf("-"))===i||r.indexOf(i)===0&&i.length>1))return r})}),s||(s=this.getFallbackCodes(this.options.fallbackLng)[0]),s}getFallbackCodes(t,s){if(!t)return[];if(typeof t=="function"&&(t=t(s)),x(t)&&(t=[t]),Array.isArray(t))return t;if(!s)return t.default||[];let n=t[s];return n||(n=t[this.getScriptPartFromCode(s)]),n||(n=t[this.formatLanguageCode(s)]),n||(n=t[this.getLanguagePartFromCode(s)]),n||(n=t.default),n||[]}toResolveHierarchy(t,s){const n=this.getFallbackCodes(s||this.options.fallbackLng||[],t),i=[],r=o=>{o&&(this.isSupportedCode(o)?i.push(o):this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))};return x(t)&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&r(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&r(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&r(this.getLanguagePartFromCode(t))):x(t)&&r(this.formatLanguageCode(t)),n.forEach(o=>{i.indexOf(o)<0&&r(this.formatLanguageCode(o))}),i}}let ra=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],oa={1:e=>+(e>1),2:e=>+(e!=1),3:e=>0,4:e=>e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2,5:e=>e==0?0:e==1?1:e==2?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5,6:e=>e==1?0:e>=2&&e<=4?1:2,7:e=>e==1?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2,8:e=>e==1?0:e==2?1:e!=8&&e!=11?2:3,9:e=>+(e>=2),10:e=>e==1?0:e==2?1:e<7?2:e<11?3:4,11:e=>e==1||e==11?0:e==2||e==12?1:e>2&&e<20?2:3,12:e=>+(e%10!=1||e%100==11),13:e=>+(e!==0),14:e=>e==1?0:e==2?1:e==3?2:3,15:e=>e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2,16:e=>e%10==1&&e%100!=11?0:e!==0?1:2,17:e=>e==1||e%10==1&&e%100!=11?0:1,18:e=>e==0?0:e==1?1:2,19:e=>e==1?0:e==0||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3,20:e=>e==1?0:e==0||e%100>0&&e%100<20?1:2,21:e=>e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0,22:e=>e==1?0:e==2?1:(e<0||e>10)&&e%10==0?2:3};const aa=["v1","v2","v3"],la=["v4"],Xs={zero:0,one:1,two:2,few:3,many:4,other:5},ca=()=>{const e={};return ra.forEach(t=>{t.lngs.forEach(s=>{e[s]={numbers:t.nr,plurals:oa[t.fc]}})}),e};class ua{constructor(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=t,this.options=s,this.logger=et.create("pluralResolver"),(!this.options.compatibilityJSON||la.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=ca(),this.pluralRulesCache={}}addRule(t,s){this.rules[t]=s}clearCache(){this.pluralRulesCache={}}getRule(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const n=_e(t==="dev"?"en":t),i=s.ordinal?"ordinal":"cardinal",r=JSON.stringify({cleanedCode:n,type:i});if(r in this.pluralRulesCache)return this.pluralRulesCache[r];let o;try{o=new Intl.PluralRules(n,{type:i})}catch{if(!t.match(/-|_/))return;const l=this.languageUtils.getLanguagePartFromCode(t);o=this.getRule(l,s)}return this.pluralRulesCache[r]=o,o}return this.rules[t]||this.rules[this.languageUtils.getLanguagePartFromCode(t)]}needsPlural(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=this.getRule(t,s);return this.shouldUseIntlApi()?n&&n.resolvedOptions().pluralCategories.length>1:n&&n.numbers.length>1}getPluralFormsOfKey(t,s){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(t,n).map(i=>`${s}${i}`)}getSuffixes(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=this.getRule(t,s);return n?this.shouldUseIntlApi()?n.resolvedOptions().pluralCategories.sort((i,r)=>Xs[i]-Xs[r]).map(i=>`${this.options.prepend}${s.ordinal?`ordinal${this.options.prepend}`:""}${i}`):n.numbers.map(i=>this.getSuffix(t,i,s)):[]}getSuffix(t,s){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const i=this.getRule(t,n);return i?this.shouldUseIntlApi()?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${i.select(s)}`:this.getSuffixRetroCompatible(i,s):(this.logger.warn(`no plural rule found for: ${t}`),"")}getSuffixRetroCompatible(t,s){const n=t.noAbs?t.plurals(s):t.plurals(Math.abs(s));let i=t.numbers[n];this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1&&(i===2?i="plural":i===1&&(i=""));const r=()=>this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString();return this.options.compatibilityJSON==="v1"?i===1?"":typeof i=="number"?`_plural_${i.toString()}`:r():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1?r():this.options.prepend&&n.toString()?this.options.prepend+n.toString():n.toString()}shouldUseIntlApi(){return!aa.includes(this.options.compatibilityJSON)}}const Qs=function(e,t,s){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,r=Xo(e,t,s);return!r&&i&&x(s)&&(r=ss(e,s,n),r===void 0&&(r=ss(t,s,n))),r},Ke=e=>e.replace(/\$/g,"$$$$");class da{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=et.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||(s=>s),this.init(t)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const{escape:s,escapeValue:n,useRawValueToEscape:i,prefix:r,prefixEscaped:o,suffix:a,suffixEscaped:l,formatSeparator:c,unescapeSuffix:u,unescapePrefix:d,nestingPrefix:h,nestingPrefixEscaped:f,nestingSuffix:p,nestingSuffixEscaped:g,nestingOptionsSeparator:m,maxReplaces:_,alwaysFormat:y}=t.interpolation;this.escape=s!==void 0?s:Zo,this.escapeValue=n!==void 0?n:!0,this.useRawValueToEscape=i!==void 0?i:!1,this.prefix=r?Et(r):o||"{{",this.suffix=a?Et(a):l||"}}",this.formatSeparator=c||",",this.unescapePrefix=u?"":d||"-",this.unescapeSuffix=this.unescapePrefix?"":u||"",this.nestingPrefix=h?Et(h):f||Et("$t("),this.nestingSuffix=p?Et(p):g||Et(")"),this.nestingOptionsSeparator=m||",",this.maxReplaces=_||1e3,this.alwaysFormat=y!==void 0?y:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=(s,n)=>s&&s.source===n?(s.lastIndex=0,s):new RegExp(n,"g");this.regexp=t(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=t(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=t(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(t,s,n,i){let r,o,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=f=>{if(f.indexOf(this.formatSeparator)<0){const _=Qs(s,l,f,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(_,void 0,n,{...i,...s,interpolationkey:f}):_}const p=f.split(this.formatSeparator),g=p.shift().trim(),m=p.join(this.formatSeparator).trim();return this.format(Qs(s,l,g,this.options.keySeparator,this.options.ignoreJSONStructure),m,n,{...i,...s,interpolationkey:g})};this.resetRegExp();const u=i&&i.missingInterpolationHandler||this.options.missingInterpolationHandler,d=i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:f=>Ke(f)},{regex:this.regexp,safeValue:f=>this.escapeValue?Ke(this.escape(f)):Ke(f)}].forEach(f=>{for(a=0;r=f.regex.exec(t);){const p=r[1].trim();if(o=c(p),o===void 0)if(typeof u=="function"){const m=u(t,r,i);o=x(m)?m:""}else if(i&&Object.prototype.hasOwnProperty.call(i,p))o="";else if(d){o=r[0];continue}else this.logger.warn(`missed to pass in variable ${p} for interpolating ${t}`),o="";else!x(o)&&!this.useRawValueToEscape&&(o=Us(o));const g=f.safeValue(o);if(t=t.replace(r[0],g),d?(f.regex.lastIndex+=o.length,f.regex.lastIndex-=r[0].length):f.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),t}nest(t,s){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i,r,o;const a=(l,c)=>{const u=this.nestingOptionsSeparator;if(l.indexOf(u)<0)return l;const d=l.split(new RegExp(`${u}[ ]*{`));let h=`{${d[1]}`;l=d[0],h=this.interpolate(h,o);const f=h.match(/'/g),p=h.match(/"/g);(f&&f.length%2===0&&!p||p.length%2!==0)&&(h=h.replace(/'/g,'"'));try{o=JSON.parse(h),c&&(o={...c,...o})}catch(g){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,g),`${l}${u}${h}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,l};for(;i=this.nestingRegexp.exec(t);){let l=[];o={...n},o=o.replace&&!x(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;let c=!1;if(i[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(i[1])){const u=i[1].split(this.formatSeparator).map(d=>d.trim());i[1]=u.shift(),l=u,c=!0}if(r=s(a.call(this,i[1].trim(),o),o),r&&i[0]===t&&!x(r))return r;x(r)||(r=Us(r)),r||(this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`),r=""),c&&(r=l.reduce((u,d)=>this.format(u,d,n.lng,{...n,interpolationkey:i[1].trim()}),r.trim())),t=t.replace(i[0],r),this.regexp.lastIndex=0}return t}}const ha=e=>{let t=e.toLowerCase().trim();const s={};if(e.indexOf("(")>-1){const n=e.split("(");t=n[0].toLowerCase().trim();const i=n[1].substring(0,n[1].length-1);t==="currency"&&i.indexOf(":")<0?s.currency||(s.currency=i.trim()):t==="relativetime"&&i.indexOf(":")<0?s.range||(s.range=i.trim()):i.split(";").forEach(o=>{if(o){const[a,...l]=o.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,""),u=a.trim();s[u]||(s[u]=c),c==="false"&&(s[u]=!1),c==="true"&&(s[u]=!0),isNaN(c)||(s[u]=parseInt(c,10))}})}return{formatName:t,formatOptions:s}},Ot=e=>{const t={};return(s,n,i)=>{let r=i;i&&i.interpolationkey&&i.formatParams&&i.formatParams[i.interpolationkey]&&i[i.interpolationkey]&&(r={...r,[i.interpolationkey]:void 0});const o=n+JSON.stringify(r);let a=t[o];return a||(a=e(_e(n),i),t[o]=a),a(s)}};class fa{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=et.create("formatter"),this.options=t,this.formats={number:Ot((s,n)=>{const i=new Intl.NumberFormat(s,{...n});return r=>i.format(r)}),currency:Ot((s,n)=>{const i=new Intl.NumberFormat(s,{...n,style:"currency"});return r=>i.format(r)}),datetime:Ot((s,n)=>{const i=new Intl.DateTimeFormat(s,{...n});return r=>i.format(r)}),relativetime:Ot((s,n)=>{const i=new Intl.RelativeTimeFormat(s,{...n});return r=>i.format(r,n.range||"day")}),list:Ot((s,n)=>{const i=new Intl.ListFormat(s,{...n});return r=>i.format(r)})},this.init(t)}init(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=s.interpolation.formatSeparator||","}add(t,s){this.formats[t.toLowerCase().trim()]=s}addCached(t,s){this.formats[t.toLowerCase().trim()]=Ot(s)}format(t,s,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=s.split(this.formatSeparator);if(r.length>1&&r[0].indexOf("(")>1&&r[0].indexOf(")")<0&&r.find(a=>a.indexOf(")")>-1)){const a=r.findIndex(l=>l.indexOf(")")>-1);r[0]=[r[0],...r.splice(1,a)].join(this.formatSeparator)}return r.reduce((a,l)=>{const{formatName:c,formatOptions:u}=ha(l);if(this.formats[c]){let d=a;try{const h=i&&i.formatParams&&i.formatParams[i.interpolationkey]||{},f=h.locale||h.lng||i.locale||i.lng||n;d=this.formats[c](a,f,{...u,...i,...h})}catch(h){this.logger.warn(h)}return d}else this.logger.warn(`there was no format function for ${c}`);return a},t)}}const pa=(e,t)=>{e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)};class ga extends Ee{constructor(t,s,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=t,this.store=s,this.services=n,this.languageUtils=n.languageUtils,this.options=i,this.logger=et.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=i.maxParallelReads||10,this.readingCalls=0,this.maxRetries=i.maxRetries>=0?i.maxRetries:5,this.retryTimeout=i.retryTimeout>=1?i.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(n,i.backend,i)}queueLoad(t,s,n,i){const r={},o={},a={},l={};return t.forEach(c=>{let u=!0;s.forEach(d=>{const h=`${c}|${d}`;!n.reload&&this.store.hasResourceBundle(c,d)?this.state[h]=2:this.state[h]<0||(this.state[h]===1?o[h]===void 0&&(o[h]=!0):(this.state[h]=1,u=!1,o[h]===void 0&&(o[h]=!0),r[h]===void 0&&(r[h]=!0),l[d]===void 0&&(l[d]=!0)))}),u||(a[c]=!0)}),(Object.keys(r).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:i}),{toLoad:Object.keys(r),pending:Object.keys(o),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(t,s,n){const i=t.split("|"),r=i[0],o=i[1];s&&this.emit("failedLoading",r,o,s),!s&&n&&this.store.addResourceBundle(r,o,n,void 0,void 0,{skipCopy:!0}),this.state[t]=s?-1:2,s&&n&&(this.state[t]=0);const a={};this.queue.forEach(l=>{Go(l.loaded,[r],o),pa(l,t),s&&l.errors.push(s),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{a[c]||(a[c]={});const u=l.loaded[c];u.length&&u.forEach(d=>{a[c][d]===void 0&&(a[c][d]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(t,s,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,o=arguments.length>5?arguments[5]:void 0;if(!t.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:s,fcName:n,tried:i,wait:r,callback:o});return}this.readingCalls++;const a=(c,u)=>{if(this.readingCalls--,this.waitingReads.length>0){const d=this.waitingReads.shift();this.read(d.lng,d.ns,d.fcName,d.tried,d.wait,d.callback)}if(c&&u&&i<this.maxRetries){setTimeout(()=>{this.read.call(this,t,s,n,i+1,r*2,o)},r);return}o(c,u)},l=this.backend[n].bind(this.backend);if(l.length===2){try{const c=l(t,s);c&&typeof c.then=="function"?c.then(u=>a(null,u)).catch(a):a(null,c)}catch(c){a(c)}return}return l(t,s,a)}prepareLoading(t,s){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),i&&i();x(t)&&(t=this.languageUtils.toResolveHierarchy(t)),x(s)&&(s=[s]);const r=this.queueLoad(t,s,n,i);if(!r.toLoad.length)return r.pending.length||i(),null;r.toLoad.forEach(o=>{this.loadOne(o)})}load(t,s,n){this.prepareLoading(t,s,{},n)}reload(t,s,n){this.prepareLoading(t,s,{reload:!0},n)}loadOne(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const n=t.split("|"),i=n[0],r=n[1];this.read(i,r,"read",void 0,void 0,(o,a)=>{o&&this.logger.warn(`${s}loading namespace ${r} for language ${i} failed`,o),!o&&a&&this.logger.log(`${s}loaded namespace ${r} for language ${i}`,a),this.loaded(t,o,a)})}saveMissing(t,s,n,i,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(s)){this.logger.warn(`did not save key "${n}" as the namespace "${s}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(n==null||n==="")){if(this.backend&&this.backend.create){const l={...o,isUpdate:r},c=this.backend.create.bind(this.backend);if(c.length<6)try{let u;c.length===5?u=c(t,s,n,i,l):u=c(t,s,n,i),u&&typeof u.then=="function"?u.then(d=>a(null,d)).catch(a):a(null,u)}catch(u){a(u)}else c(t,s,n,i,a,l)}!t||!t[0]||this.store.addResource(t[0],s,n,i)}}}const Zs=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if(typeof e[1]=="object"&&(t=e[1]),x(e[1])&&(t.defaultValue=e[1]),x(e[2])&&(t.tDescription=e[2]),typeof e[2]=="object"||typeof e[3]=="object"){const s=e[3]||e[2];Object.keys(s).forEach(n=>{t[n]=s[n]})}return t},interpolation:{escapeValue:!0,format:e=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),tn=e=>(x(e.ns)&&(e.ns=[e.ns]),x(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),x(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e),ne=()=>{},ma=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(s=>{typeof e[s]=="function"&&(e[s]=e[s].bind(e))})};class Wt extends Ee{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;if(super(),this.options=tn(t),this.services={},this.logger=et,this.modules={external:[]},ma(this),s&&!this.isInitialized&&!t.isClone){if(!this.options.initImmediate)return this.init(t,s),this;setTimeout(()=>{this.init(t,s)},0)}}init(){var t=this;let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof s=="function"&&(n=s,s={}),!s.defaultNS&&s.defaultNS!==!1&&s.ns&&(x(s.ns)?s.defaultNS=s.ns:s.ns.indexOf("translation")<0&&(s.defaultNS=s.ns[0]));const i=Zs();this.options={...i,...this.options,...tn(s)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...i.interpolation,...this.options.interpolation}),s.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=s.keySeparator),s.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=s.nsSeparator);const r=u=>u?typeof u=="function"?new u:u:null;if(!this.options.isClone){this.modules.logger?et.init(r(this.modules.logger),this.options):et.init(null,this.options);let u;this.modules.formatter?u=this.modules.formatter:typeof Intl<"u"&&(u=fa);const d=new Gs(this.options);this.store=new Js(this.options.resources,this.options);const h=this.services;h.logger=et,h.resourceStore=this.store,h.languageUtils=d,h.pluralResolver=new ua(d,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),u&&(!this.options.interpolation.format||this.options.interpolation.format===i.interpolation.format)&&(h.formatter=r(u),h.formatter.init(h,this.options),this.options.interpolation.format=h.formatter.format.bind(h.formatter)),h.interpolator=new da(this.options),h.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},h.backendConnector=new ga(r(this.modules.backend),h.resourceStore,h,this.options),h.backendConnector.on("*",function(f){for(var p=arguments.length,g=new Array(p>1?p-1:0),m=1;m<p;m++)g[m-1]=arguments[m];t.emit(f,...g)}),this.modules.languageDetector&&(h.languageDetector=r(this.modules.languageDetector),h.languageDetector.init&&h.languageDetector.init(h,this.options.detection,this.options)),this.modules.i18nFormat&&(h.i18nFormat=r(this.modules.i18nFormat),h.i18nFormat.init&&h.i18nFormat.init(this)),this.translator=new be(this.services,this.options),this.translator.on("*",function(f){for(var p=arguments.length,g=new Array(p>1?p-1:0),m=1;m<p;m++)g[m-1]=arguments[m];t.emit(f,...g)}),this.modules.external.forEach(f=>{f.init&&f.init(this)})}if(this.format=this.options.interpolation.format,n||(n=ne),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const u=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);u.length>0&&u[0]!=="dev"&&(this.options.lng=u[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(u=>{this[u]=function(){return t.store[u](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(u=>{this[u]=function(){return t.store[u](...arguments),t}});const l=Mt(),c=()=>{const u=(d,h)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(h),n(d,h)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return u(null,this.t.bind(this));this.changeLanguage(this.options.lng,u)};return this.options.resources||!this.options.initImmediate?c():setTimeout(c,0),l}loadResources(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ne;const i=x(t)?t:this.language;if(typeof t=="function"&&(n=t),!this.options.resources||this.options.partialBundledLanguages){if(i&&i.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return n();const r=[],o=a=>{if(!a||a==="cimode")return;this.services.languageUtils.toResolveHierarchy(a).forEach(c=>{c!=="cimode"&&r.indexOf(c)<0&&r.push(c)})};i?o(i):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>o(l)),this.options.preload&&this.options.preload.forEach(a=>o(a)),this.services.backendConnector.load(r,this.options.ns,a=>{!a&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),n(a)})}else n(null)}reloadResources(t,s,n){const i=Mt();return typeof t=="function"&&(n=t,t=void 0),typeof s=="function"&&(n=s,s=void 0),t||(t=this.languages),s||(s=this.options.ns),n||(n=ne),this.services.backendConnector.reload(t,s,r=>{i.resolve(),n(r)}),i}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&Qn.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1))for(let s=0;s<this.languages.length;s++){const n=this.languages[s];if(!(["cimode","dev"].indexOf(n)>-1)&&this.store.hasLanguageSomeTranslations(n)){this.resolvedLanguage=n;break}}}changeLanguage(t,s){var n=this;this.isLanguageChangingTo=t;const i=Mt();this.emit("languageChanging",t);const r=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},o=(l,c)=>{c?(r(c),this.translator.changeLanguage(c),this.isLanguageChangingTo=void 0,this.emit("languageChanged",c),this.logger.log("languageChanged",c)):this.isLanguageChangingTo=void 0,i.resolve(function(){return n.t(...arguments)}),s&&s(l,function(){return n.t(...arguments)})},a=l=>{!t&&!l&&this.services.languageDetector&&(l=[]);const c=x(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);c&&(this.language||r(c),this.translator.language||this.translator.changeLanguage(c),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(c)),this.loadResources(c,u=>{o(u,c)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(t),i}getFixedT(t,s,n){var i=this;const r=function(o,a){let l;if(typeof a!="object"){for(var c=arguments.length,u=new Array(c>2?c-2:0),d=2;d<c;d++)u[d-2]=arguments[d];l=i.options.overloadTranslationOptionHandler([o,a].concat(u))}else l={...a};l.lng=l.lng||r.lng,l.lngs=l.lngs||r.lngs,l.ns=l.ns||r.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||n||r.keyPrefix);const h=i.options.keySeparator||".";let f;return l.keyPrefix&&Array.isArray(o)?f=o.map(p=>`${l.keyPrefix}${h}${p}`):f=l.keyPrefix?`${l.keyPrefix}${h}${o}`:o,i.t(f,l)};return x(t)?r.lng=t:r.lngs=t,r.ns=s,r.keyPrefix=n,r}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const n=s.lng||this.resolvedLanguage||this.languages[0],i=this.options?this.options.fallbackLng:!1,r=this.languages[this.languages.length-1];if(n.toLowerCase()==="cimode")return!0;const o=(a,l)=>{const c=this.services.backendConnector.state[`${a}|${l}`];return c===-1||c===0||c===2};if(s.precheck){const a=s.precheck(this,o);if(a!==void 0)return a}return!!(this.hasResourceBundle(n,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(n,t)&&(!i||o(r,t)))}loadNamespaces(t,s){const n=Mt();return this.options.ns?(x(t)&&(t=[t]),t.forEach(i=>{this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}),this.loadResources(i=>{n.resolve(),s&&s(i)}),n):(s&&s(),Promise.resolve())}loadLanguages(t,s){const n=Mt();x(t)&&(t=[t]);const i=this.options.preload||[],r=t.filter(o=>i.indexOf(o)<0&&this.services.languageUtils.isSupportedCode(o));return r.length?(this.options.preload=i.concat(r),this.loadResources(o=>{n.resolve(),s&&s(o)}),n):(s&&s(),Promise.resolve())}dir(t){if(t||(t=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!t)return"rtl";const s=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],n=this.services&&this.services.languageUtils||new Gs(Zs());return s.indexOf(n.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;return new Wt(t,s)}cloneInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ne;const n=t.forkResourceStore;n&&delete t.forkResourceStore;const i={...this.options,...t,isClone:!0},r=new Wt(i);return(t.debug!==void 0||t.prefix!==void 0)&&(r.logger=r.logger.clone(t)),["store","services","language"].forEach(a=>{r[a]=this[a]}),r.services={...this.services},r.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},n&&(r.store=new Js(this.store.data,i),r.services.resourceStore=r.store),r.translator=new be(r.services,i),r.translator.on("*",function(a){for(var l=arguments.length,c=new Array(l>1?l-1:0),u=1;u<l;u++)c[u-1]=arguments[u];r.emit(a,...c)}),r.init(i,s),r.translator.options=i,r.translator.backendConnector.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},r}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const O=Wt.createInstance();O.createInstance=Wt.createInstance;O.createInstance;O.dir;O.init;O.loadResources;O.reloadResources;O.use;O.changeLanguage;O.getFixedT;O.t;O.exists;O.setDefaultNamespace;O.hasLoadedNamespace;O.loadNamespaces;O.loadLanguages;const le=[],Oe=()=>{O.isInitialized||O.init({lng:"en",resStore:{en:{}},fallbackLng:!1})},$e=e=>e.reduce((t,s,n)=>(t.count===void 0&&typeof s=="number"&&(t.count=s),typeof s=="object"?{...t,...s}:(t[n]=s,t)),{}),Yt=function(e){Oe();const t=$e([...arguments].slice(1));return delete t.count,O.t(e,t)},_a=function(e,t){Oe();const s=$e([...arguments].slice(2)),n=s.count;let i;delete s.count;const r=O.services.pluralResolver.getSuffix(O.language,n);return r?(s.defaultValue=t,i=e+r):(i=e,s.defaultValue=e),O.t(i,s)},ya=function(e,t){Oe();const s=$e([...arguments].slice(2));return s.context=e,delete s.count,O.t(t,s)},ba=function(e,t,s){Oe();const n=$e([...arguments].slice(3)),i=n.count,r=e?"_"+e:"";let o=t;delete n.count;const a=O.services.pluralResolver.getSuffix(O.language,i);return a?(n.defaultValue=s,o=t+r+a):(o=t,n.context=e),O.t(o,n)},va=(e,t,s)=>{O.init({resources:{}}),O.addResourceBundle(e,t,s)};Ct(e=>class extends e{static get properties(){return{t:{type:Object,value(){return{}}}}}_filterT(t){return t.filter(s=>s!==this.t)}_(){return Yt.apply(null,this._filterT([...arguments]))}connectedCallback(){super.connectedCallback(),le.push(this)}disconnectedCallback(){super.disconnectedCallback();const t=le.indexOf(this);t>=0&&le.splice(t,1)}gettext(){return Yt.apply(null,this._filterT([...arguments]))}ngettext(){return _a.apply(null,this._filterT([...arguments]))}pgettext(){return ya.apply(null,this._filterT([...arguments]))}npgettext(){return ba.apply(null,this._filterT([...arguments]))}});class wa extends Yo{static get properties(){return{compatibilityJSON:{type:String,value:"v3"},domain:{type:String,value:"messages"},interpolationPrefix:{type:String,value:"__"},interpolationSuffix:{type:String,value:"__"},language:{type:String,value:"en"},namespace:{type:String,value:"translation"},translations:{type:Object,observer(t){t!=null&&(va(this.language,this.namespace,t),le.forEach(s=>s.set("t",{})))}},keySeparator:{type:String,value:"."},nsSeparator:{type:String,value:":"}}}ready(){super.ready(),O.init({compatibilityJSON:this.compatibilityJSON,interpolation:{escapeValue:!1,prefix:this.interpolationPrefix,suffix:this.interpolationSuffix},keySeparator:this.keySeparator,lng:this.language,nsSeparator:this.nsSeparator,resStore:{}})}}customElements.define("cosmoz-i18next",wa);On(nt,new DocumentFragment).constructor;class xa extends HTMLElement{onDisconnect;disconnectedCallback(){this.onDisconnect?.()}}customElements.define("disconnect-observer",xa);function Sa(e){return()=>e}const Ca=Sa(),Pa=Ca,ve=e=>e,U=(e,...t)=>typeof e=="function"?e(...t):e;class Ea{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}let Oa=class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}};const en=e=>!Fi(e)&&typeof e.then=="function",sn=1073741823;let $a=class extends us{constructor(){super(...arguments),this._$Cwt=sn,this._$Cbt=[],this._$CK=new Ea(this),this._$CX=new Oa}render(...t){return t.find(s=>!en(s))??G}update(t,s){const n=this._$Cbt;let i=n.length;this._$Cbt=s;const r=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<s.length&&!(a>this._$Cwt);a++){const l=s[a];if(!en(l))return this._$Cwt=a,l;a<i&&l===n[a]||(this._$Cwt=sn,i=0,Promise.resolve(l).then(async c=>{for(;o.get();)await o.get();const u=r.deref();if(u!==void 0){const d=u._$Cbt.indexOf(l);d>-1&&d<u._$Cwt&&(u._$Cwt=d,u.setValue(c))}}))}return G}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const we=St($a);const nn=(e,t,s)=>{const n=new Map;for(let i=t;i<=s;i++)n.set(e[i],i);return n},Zn=St(class extends qt{constructor(e){if(super(e),e.type!==tt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,s){let n;s===void 0?s=t:t!==void 0&&(n=t);const i=[],r=[];let o=0;for(const a of e)i[o]=n?n(a,o):o,r[o]=s(a,o),o++;return{values:r,keys:i}}render(e,t,s){return this.dt(e,t,s).values}update(e,[t,s,n]){const i=Di(e),{values:r,keys:o}=this.dt(t,s,n);if(!Array.isArray(i))return this.ut=o,r;const a=this.ut??=[],l=[];let c,u,d=0,h=i.length-1,f=0,p=r.length-1;for(;d<=h&&f<=p;)if(i[d]===null)d++;else if(i[h]===null)h--;else if(a[d]===o[f])l[f]=gt(i[d],r[f]),d++,f++;else if(a[h]===o[p])l[p]=gt(i[h],r[p]),h--,p--;else if(a[d]===o[p])l[p]=gt(i[d],r[p]),kt(e,l[p+1],i[d]),d++,p--;else if(a[h]===o[f])l[f]=gt(i[h],r[f]),kt(e,i[d],i[h]),h--,f++;else if(c===void 0&&(c=nn(o,f,p),u=nn(a,d,h)),c.has(a[d]))if(c.has(a[h])){const g=u.get(o[f]),m=g!==void 0?i[g]:null;if(m===null){const _=kt(e,i[d]);gt(_,r[f]),l[f]=_}else l[f]=gt(m,r[f]),kt(e,i[d],m),i[g]=null;f++}else Ie(i[h]),h--;else Ie(i[d]),d++;for(;f<=p;){const g=kt(e,l[p+1]);gt(g,r[f]),l[f++]=g}for(;d<=h;){const g=i[d++];g!==null&&Ie(g)}return this.ut=o,$n(e,l),G}}),Ta=e=>typeof e=="object"&&e!==null&&Symbol.iterator in e;function ut(e){return e==null?[]:Array.isArray(e)?e:typeof e=="string"?[e]:Ta(e)?Array.from(e):[e]}const We=(e,t=ve)=>s=>{const n=ut(e).map(t);return ut(s).filter(i=>!n.includes(t(i)))};function ti(e){return e?t=>t?.[e]:ve}const La=e=>{const t=ti(e);return s=>typeof s=="string"?s:t(s)?.toString()||""},Aa=e=>t=>{const s={};for(const n in t)e.includes(n)&&(s[n]=t[n]);return s};function rn(e,t,...s){return e?e(t,...s):t}const Te=St(class extends qt{constructor(e){if(super(e),e.type!==tt.PROPERTY&&e.type!==tt.ATTRIBUTE&&e.type!==tt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!En(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===G||t===nt)return t;const s=e.element,n=e.name;if(e.type===tt.PROPERTY){if(t===s[n])return G}else if(e.type===tt.BOOLEAN_ATTRIBUTE){if(!!t===s.hasAttribute(n))return G}else if(e.type===tt.ATTRIBUTE&&s.getAttribute(n)===t+"")return G;return $n(e),t}}),Ye=new WeakMap,Gt=St(class extends us{render(e){return nt}update(e,[t]){const s=t!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),nt}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let s=Ye.get(t);s===void 0&&(s=new WeakMap,Ye.set(t,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?Ye.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),ei=ft(class extends ht{values;constructor(e,t,s,n){super(e,t),Object.assign(t.host,s),this.values=n}update(e,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((t,s)=>this.values[s]!==t)}}),Ra=/([A-Z])/gu,on=(e,t,s)=>{e[t]=s,e.dispatchEvent(new CustomEvent(t.replace(Ra,"-$1").toLowerCase()+"-changed",{detail:{value:s}}))},si=e=>{const t=mt(void 0),s=E(c=>t.current=c,[]),n=e.shadowRoot,i=E(c=>e.dispatchEvent(new Event(c.type,{bubbles:c.bubbles})),[]),r=E(c=>on(e,"value",c.target.value),[]),o=E(c=>on(e,"focused",c.type==="focus"),[]),a=E(()=>t.current?.focus(),[]),l=E(()=>{const c=t.current?.checkValidity();return e.toggleAttribute("invalid",!c),c},[]);return ei({focus:a,validate:l},[a,l]),k(()=>{const c=u=>{u.defaultPrevented||e.disabled||u.target.matches("input, textarea, label")||(u.preventDefault(),e.matches(":focus-within")||a())};return n.addEventListener("mousedown",c),()=>n.removeEventListener("mousedown",c)},[a]),{onChange:i,onFocus:o,onInput:r,onRef:s}},ka=e=>F(()=>{if(e==null)return;const t=new RegExp(e,"u");return s=>{!s.defaultPrevented&&s.data&&!t.test(s.data)&&s.preventDefault()}},[e]),ni=(e,{label:t,invalid:s,errorMessage:n})=>C`
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
		${D(s&&n,()=>C`<div class="error" part="error">${n}</div>`)}
	`,ii=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],Na=({placeholder:e,noLabelFloat:t,label:s})=>(t?s:void 0)||e||" ",an=lt`
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
`,ri=lt`
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
		${an}
	}
	@container style(--focused: focused) {
		${an}
	}
`,za=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...ii],Ma=e=>{const{type:t="text",pattern:s,allowedPattern:n,autocomplete:i,value:r,readonly:o,disabled:a,min:l,max:c,step:u,maxlength:d}=e,{onChange:h,onFocus:f,onInput:p,onRef:g}=si(e),m=ka(n);return ni(C`
			<input
				${Gt(g)}
				style="--chars: ${r?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${R(s)}
				autocomplete=${R(i)}
				placeholder=${Na(e)}
				?readonly=${o}
				?aria-disabled=${a}
				?disabled=${a}
				.value=${Te(r??"")}
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
		`,e)};customElements.define("cosmoz-input",rt(Ma,{observedAttributes:za,styleSheets:[cs(ri)]}));const ln=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},Fa=(e,t=0)=>{if(t>0){const s=e.getAttribute("rows")??"",n=e.style.height;e.style.height="",e.setAttribute("rows",t),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=n,e.setAttribute("rows",s)}},Da=e=>{const{value:t,maxRows:s}=e,n=F(()=>()=>e.shadowRoot.querySelector("#input"),[]);k(()=>Fa(n(),s),[s,n]),k(()=>ln(n()),[n,t]),k(()=>{const i=n(),r=new ResizeObserver(()=>requestAnimationFrame(()=>ln(i)));return r.observe(i),()=>r.unobserve(i)},[n])},Ia=["rows","placeholder",...ii],ja=e=>{const{autocomplete:t,value:s,placeholder:n,readonly:i,disabled:r,rows:o,cols:a,maxlength:l}=e,{onChange:c,onFocus:u,onInput:d,onRef:h}=si(e);return Da(e),ni(C`
			<textarea id="input" part="input"
				${Gt(h)}
				autocomplete=${R(t)}
				placeholder=${n||" "}
				rows=${o??1} cols=${R(a)}
				?readonly=${i} ?aria-disabled=${r} ?disabled=${r}
				.value=${Te(s??"")} maxlength=${R(l)} @input=${d}
				@change=${c} @focus=${u} @blur=${u}>`,e)};customElements.define("cosmoz-textarea",rt(ja,{observedAttributes:Ia,styleSheets:[cs(ri)]}));const Va=e=>{const{label:t,value:s,disabled:n,error:i}=e,r=E(o=>e.dispatchEvent(new CustomEvent("change",{detail:o.target.checked})),[]);return C`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${Te(!!s)}
			?disabled=${n}
			@change=${r}
		/>
		${D(t,()=>C`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${D(i,o=>C`<div class="failure">${o}</div>`)} `},Ba=vt`
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
`,Ha=vt`
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
`;customElements.define("cosmoz-toggle",rt(Va,{styleSheets:[Ha,Ba],observedAttributes:["disabled"]}));const Ua=e=>{if(!e||e===1/0)return;if(typeof e=="number")return e;const t=parseFloat(e.replace(/[\s]/gu,"").replace(/^−/gu,"-").replace(/[,.]/gu,".").replace(/[.](?=.*[.])/gu,""));if(!isNaN(t))return t},Ka=/^[0-9.,e-]+$/u,Wa=e=>e==null||e===""||Number.isNaN(e)||Array.isArray(e)&&e.length<1,cn=e=>Wa(e)&&Yt("Required"),Ya=Symbol("error"),Ja=(e,t,s,n)=>{for(const i of ut(e)){const r=i(t,s,n);if(r)return r}},qa=(e,t)=>e.validate&&Ja(e.validate,t[e.path??e.id],t,e),Ga=(e,t)=>{const s=e.map(n=>({...n,error:qa(n,t)}));return{fields:s,invalid:s.some(({error:n})=>!!n)}},Xa=(e,t)=>t?Ga(e,t):{fields:e,invalid:!0},Qa=(e,t,s,n)=>{n!=null&&Object.is(n[t],s)||e({[t]:s})},Za=e=>Array.isArray(e)?e.some(t=>t===cn):e===cn,oi=e=>({field:t,value:s,values:n,onChange:i,...r})=>{const o=(c,u)=>(t.onChange??Qa)(d=>i(d,u),t.path??t.id,rn(t.value?.[1],c,n,t),n),a=U(t.mandatory??Za(t.validate),s,n,t)?" *":void 0;if(!U(t.hidden,s,n,t))return e({...t,...r,values:n,label:[U(t.label,s,n,t),a].join(""),placeholder:U(t.placeholder,s,n,t),disabled:U(t.disabled,s,n,t),warning:U(t.warning,s,n,t),prefix:U(t.prefix,s,n,t),suffix:U(t.suffix,s,n,t),value:rn(t.value?.[0],s,n,t),onFocus:t.onFocus?.(o,s,n,t),onChange:o})},tl=e=>D(e,()=>C`<span slot="prefix">${e}</span>`),el=e=>D(e,()=>C`<span slot="suffix">${e}</span>`),sl=(e,t="suffix")=>D(e,()=>hr({slot:t,title:e,width:"22",height:"22",styles:"color: var(--paper-amber-500); vertical-align: middle"})),nl=(e,t="suffix")=>D(e,()=>dr({slot:t,title:e,width:"22",height:"22",styles:"color: var(--cz-text-color); vertical-align: middle; cursor: help"})),il=({prefix:e,suffix:t,warning:s,description:n})=>[tl(e),el(t),sl(s),nl(n)],ai=e=>{const{value:t,values:s,onFocus:n,onInput:i,...r}=e,{id:o,type:a="text",label:l,placeholder:c,noLabelFloat:u,alwaysFloatLabel:d,error:h,prefix:f,suffix:p,warning:g,allowedPattern:m,step:_,disabled:y,maxlength:b,min:v,max:w,autosize:$,noSpinner:S,title:A,description:z}=r;return C`<cosmoz-input
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
		min=${R(U(v,t,s,r))}
		max=${R(U(w,t,s,r))}
		@focus=${n}
		@input=${i}
		>${il({prefix:f,suffix:p,warning:g,description:z})}</cosmoz-input
	>`},rl=oi(({onChange:e,...t})=>ai({...t,onInput:s=>e(s.target.value)})),Eu=oi(({onChange:e,allowedPattern:t=Ka,...s})=>ai({...s,type:"number",allowedPattern:t,onInput:n=>e(Ua(n.target.value))})),ns=Symbol("touched");function is(e,t=!0){if(e==null)return;const s=e;return t?s[ns]=!0:delete s[ns],e}const li=e=>is(e,!1),ci=e=>!!e?.[ns],ol=({field:e,values:t,...s})=>{const n=(ci(t)&&(t?.[Ya]?.[e.id]??e.error))??!1,i=t?.[e.path??e.id];return(e.input??rl)({...s,error:n,value:i,field:e,values:t})},al=({fields:e,...t})=>Zn(e??[],({id:s})=>s,s=>ol({field:s,fields:e,...t})),ll=({fields:e,selector:t=""})=>(e??[]).map(({id:s,styles:n})=>n?`${t}[name="${String(s)}"] { ${Object.entries(n).map(([i,r])=>`${i}:${r}`).join(";")} }`:"").join(`
`);class Le extends Event{constructor(t){super(Le.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}Le.eventName="rangeChanged";class Ae extends Event{constructor(t){super(Ae.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}Ae.eventName="visibilityChanged";class Re extends Event{constructor(){super(Re.eventName,{bubbles:!1})}}Re.eventName="unpinned";class cl{constructor(t){this._element=null;const s=t??window;this._node=s,t&&(this._element=t)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class ul extends cl{constructor(t,s){super(s),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const n=this._node;this._originalScrollTo=n.scrollTo,this._originalScrollBy=n.scrollBy,this._originalScroll=n.scroll,this._attach(t)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(t,s){const n=typeof t=="number"&&typeof s=="number"?{left:t,top:s}:t;this._scrollTo(n)}scrollBy(t,s){const n=typeof t=="number"&&typeof s=="number"?{left:t,top:s}:t;n.top!==void 0&&(n.top+=this.scrollTop),n.left!==void 0&&(n.left+=this.scrollLeft),this._scrollTo(n)}_nativeScrollTo(t){this._originalScrollTo.bind(this._element||window)(t)}_scrollTo(t,s=null,n=null){this._end!==null&&this._end(),t.behavior==="smooth"?(this._setDestination(t),this._retarget=s,this._end=n):this._resetScrollState(),this._nativeScrollTo(t)}_setDestination(t){let{top:s,left:n}=t;return s=s===void 0?void 0:Math.max(0,Math.min(s,this.maxScrollTop)),n=n===void 0?void 0:Math.max(0,Math.min(n,this.maxScrollLeft)),this._destination!==null&&n===this._destination.left&&s===this._destination.top?!1:(this.__destination={top:s,left:n,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(t){this._destination&&this._setDestination(t)&&this._nativeScrollTo(this._destination)}managedScrollTo(t,s,n){return this._scrollTo(t,s,n),this._updateManagedScrollTo}correctScrollError(t){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(t),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:t,scrollLeft:s}=this;let{top:n,left:i}=this._destination;n=Math.min(n||0,this.maxScrollTop),i=Math.min(i||0,this.maxScrollLeft);const r=Math.abs(n-t),o=Math.abs(i-s);r<1&&o<1&&(this._end&&this._end(),this._resetScrollState())}}detach(t){return this._clients.delete(t),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(t){this._clients.add(t),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let un=typeof window<"u"?window.ResizeObserver:void 0;const rs=Symbol("virtualizerRef"),ie="virtualizer-sizer";let dn;class dl{constructor(t){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!t)throw new Error("Virtualizer constructor requires a configuration object");if(t.hostElement)this._init(t);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(t){Array.isArray(t)&&t!==this._items&&(this._itemsChanged=!0,this._items=t,this._schedule(this._updateLayout))}_init(t){this._isScroller=!!t.scroller,this._initHostElement(t);const s=t.layout||{};this._layoutInitialized=this._initLayout(s)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new un(()=>this._hostElementSizeChanged()),this._childrenRO=new un(this._childrenSizeChanged.bind(this))}_initHostElement(t){const s=this._hostElement=t.hostElement;this._applyVirtualizerStyles(),s[rs]=this}connected(){this._initObservers();const t=this._isScroller;this._clippingAncestors=pl(this._hostElement,t),this._scrollerController=new ul(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(t=>{t.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(t),this._hostElementRO.observe(t)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(t=>this._childrenRO.observe(t)),this._scrollEventListeners.forEach(t=>t.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(t=>t.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const s=this._hostElement.style;s.display=s.display||"block",s.position=s.position||"relative",s.contain=s.contain||"size layout",this._isScroller&&(s.overflow=s.overflow||"auto",s.minHeight=s.minHeight||"150px")}_getSizer(){const t=this._hostElement;if(!this._sizer){let s=t.querySelector(`[${ie}]`);s||(s=document.createElement("div"),s.setAttribute(ie,""),t.appendChild(s)),Object.assign(s.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),s.textContent="&nbsp;",s.setAttribute(ie,""),this._sizer=s}return this._sizer}async updateLayoutConfig(t){await this._layoutInitialized;const s=t.type||dn;if(typeof s=="function"&&this._layout instanceof s){const n={...t};return delete n.type,this._layout.config=n,!0}return!1}async _initLayout(t){let s,n;if(typeof t.type=="function"){n=t.type;const i={...t};delete i.type,s=i}else s=t;n===void 0&&(dn=n=(await Ii(()=>import("./flow-BqIEBwW6.js"),[],import.meta.url)).FlowLayout),this._layout=new n(i=>this._handleLayoutMessage(i),s),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const t=window.performance.now(),s=t-this._benchmarkStart,i=performance.getEntriesByName("uv-virtualizing","measure").filter(r=>r.startTime>=this._benchmarkStart&&r.startTime<t).reduce((r,o)=>r+o.duration,0);return this._benchmarkStart=null,{timeElapsed:s,virtualizationTime:i}}return null}_measureChildren(){const t={},s=this._children,n=this._measureChildOverride||this._measureChild;for(let i=0;i<s.length;i++){const r=s[i],o=this._first+i;(this._itemsChanged||this._toBeMeasured.has(r))&&(t[o]=n.call(this,r,this._items[o]))}this._childMeasurements=t,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(t){const{width:s,height:n}=t.getBoundingClientRect();return Object.assign({width:s,height:n},hl(t))}async _schedule(t){this._scheduled.has(t)||(this._scheduled.add(t),await Promise.resolve(),this._scheduled.delete(t),t.call(this))}async _updateDOM(t){this._scrollSize=t.scrollSize,this._adjustRange(t.range),this._childrenPos=t.childPositions,this._scrollError=t.scrollError||null;const{_rangeChanged:s,_itemsChanged:n}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(s||n)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(t=>this._childrenRO.observe(t)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(t){console.warn("Error measuring performance data: ",t)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(t){t.type==="scroll"?(t.currentTarget===window||this._clippingAncestors.includes(t.currentTarget))&&this._handleScrollEvent():console.warn("event not handled",t)}_handleLayoutMessage(t){t.type==="stateChanged"?this._updateDOM(t):t.type==="visibilityChanged"?(this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._notifyVisibility()):t.type==="unpinned"&&this._hostElement.dispatchEvent(new Re)}get _children(){const t=[];let s=this._hostElement.firstElementChild;for(;s;)s.hasAttribute(ie)||t.push(s),s=s.nextElementSibling;return t}_updateView(){const t=this._hostElement,s=this._scrollerController?.element,n=this._layout;if(t&&s&&n){let i,r,o,a;const l=t.getBoundingClientRect();i=0,r=0,o=window.innerHeight,a=window.innerWidth;const c=this._clippingAncestors.map(_=>_.getBoundingClientRect());c.unshift(l);for(const _ of c)i=Math.max(i,_.top),r=Math.max(r,_.left),o=Math.min(o,_.bottom),a=Math.min(a,_.right);const u=s.getBoundingClientRect(),d={left:l.left-u.left,top:l.top-u.top},h={width:s.scrollWidth,height:s.scrollHeight},f=i-l.top+t.scrollTop,p=r-l.left+t.scrollLeft,g=Math.max(0,o-i),m=Math.max(0,a-r);n.viewportSize={width:m,height:g},n.viewportScroll={top:f,left:p},n.totalScrollSize=h,n.offsetWithinScroller=d}}_sizeHostElement(t){const n=t&&t.width!==null?Math.min(82e5,t.width):0,i=t&&t.height!==null?Math.min(82e5,t.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${n}px, ${i}px)`;else{const r=this._hostElement.style;r.minWidth=n?`${n}px`:"100%",r.minHeight=i?`${i}px`:"100%"}}_positionChildren(t){t&&t.forEach(({top:s,left:n,width:i,height:r,xOffset:o,yOffset:a},l)=>{const c=this._children[l-this._first];c&&(c.style.position="absolute",c.style.boxSizing="border-box",c.style.transform=`translate(${n}px, ${s}px)`,i!==void 0&&(c.style.width=i+"px"),r!==void 0&&(c.style.height=r+"px"),c.style.left=o===void 0?null:o+"px",c.style.top=a===void 0?null:a+"px")})}async _adjustRange(t){const{_first:s,_last:n,_firstVisible:i,_lastVisible:r}=this;this._first=t.first,this._last=t.last,this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==s||this._last!==n,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==i||this._lastVisible!==r}_correctScrollError(){if(this._scrollError){const{scrollTop:t,scrollLeft:s}=this._scrollerController,{top:n,left:i}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:t-n,left:s-i})}}element(t){return t===1/0&&(t=this._items.length-1),this._items?.[t]===void 0?void 0:{scrollIntoView:(s={})=>this._scrollElementIntoView({...s,index:t})}}_scrollElementIntoView(t){if(t.index>=this._first&&t.index<=this._last)this._children[t.index-this._first].scrollIntoView(t);else if(t.index=Math.min(t.index,this._items.length-1),t.behavior==="smooth"){const s=this._layout.getScrollIntoViewCoordinates(t),{behavior:n}=t;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(s,{behavior:n}),()=>this._layout.getScrollIntoViewCoordinates(t),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=t}else this._layout.pin=t}_checkScrollIntoViewTarget(t){const{index:s}=this._scrollIntoViewTarget||{};s&&t?.has(s)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new Le({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new Ae({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((t,s)=>{this._layoutCompleteResolver=t,this._layoutCompleteRejecter=s})),this._layoutCompletePromise}_rejectLayoutCompletePromise(t){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(t),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(t){if(this._layout?.measureChildren){for(const s of t)this._toBeMeasured.set(s.target,s.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function hl(e){const t=window.getComputedStyle(e);return{marginTop:re(t.marginTop),marginRight:re(t.marginRight),marginBottom:re(t.marginBottom),marginLeft:re(t.marginLeft)}}function re(e){const t=e?parseFloat(e):NaN;return Number.isNaN(t)?0:t}function hn(e){if(e.assignedSlot!==null)return e.assignedSlot;if(e.parentElement!==null)return e.parentElement;const t=e.parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host||null}function fl(e,t=!1){const s=[];let n=t?e:hn(e);for(;n!==null;)s.push(n),n=hn(n);return s}function pl(e,t=!1){let s=!1;return fl(e,t).filter(n=>{if(s)return!1;const i=getComputedStyle(n);return s=i.position==="fixed",i.overflow!=="visible"})}const gl=e=>e,ml=(e,t)=>C`${t}: ${JSON.stringify(e,null,2)}`;class _l extends us{constructor(t){if(super(t),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(s,n)=>ml(s,n+this._first),this._keyFunction=(s,n)=>gl(s,n+this._first),this._items=[],t.type!==tt.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(t){t&&this._setFunctions(t);const s=[];if(this._first>=0&&this._last>=this._first)for(let n=this._first;n<=this._last;n++)s.push(this._items[n]);return Zn(s,this._keyFunction,this._renderItem)}update(t,[s]){this._setFunctions(s);const n=this._items!==s.items;return this._items=s.items||[],this._virtualizer?this._updateVirtualizerConfig(t,s):this._initialize(t,s),n?G:this.render()}async _updateVirtualizerConfig(t,s){if(!await this._virtualizer.updateLayoutConfig(s.layout||{})){const i=t.parentNode;this._makeVirtualizer(i,s)}this._virtualizer.items=this._items}_setFunctions(t){const{renderItem:s,keyFunction:n}=t;s&&(this._renderItem=(i,r)=>s(i,r+this._first)),n&&(this._keyFunction=(i,r)=>n(i,r+this._first))}_makeVirtualizer(t,s){this._virtualizer&&this._virtualizer.disconnected();const{layout:n,scroller:i,items:r}=s;this._virtualizer=new dl({hostElement:t,layout:n,scroller:i}),this._virtualizer.items=r,this._virtualizer.connected()}_initialize(t,s){const n=t.parentNode;n&&n.nodeType===1&&(n.addEventListener("rangeChanged",i=>{this._first=i.first,this._last=i.last,this.setValue(this.render())}),this._makeVirtualizer(n,s))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}}const yl=St(_l);lt`
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
`;const bl=()=>nt,vl=(e,t)=>Promise.resolve(e).then(t,t),wl=e=>we(e?.then(bl,t=>C`<div class="failure">${t.message}</div>`),nt),xl=({save$:e,progress:t,...s})=>{const n=({onSave:i,onClick:r=i,title:o,disabled:a,progress:l,content:c=nt,slot:u})=>C` <button
			class="button save"
			slot=${R(u)}
			?disabled=${a}
			?data-progress=${l}
			@click=${d=>(d.stopPropagation(),r())}
		>
			${c} ${o}
		</button>`;return we(vl(e,()=>n(s)),n({...s,disabled:!0,progress:!0,content:C`<cz-spinner></cz-spinner> ${D(t,i=>i.join("/"))}`}))},Sl=lt`
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
`,Cl=(e,t)=>new Promise((s,n)=>{if(t.aborted){n(new DOMException("Aborted","AbortError"));return}const i=setTimeout(s,e);t.addEventListener("abort",()=>{clearTimeout(i),n(new DOMException("Aborted","AbortError"))},{once:!0})});async function Pl(e,t,s,n){let i;for(;;){if(t.aborted)return await e.return({}),null;const{value:r,done:o}=await e.next(i);if(o)return r;switch(r._tag){case"loading":s(r.patch),i=void 0;break;case"call":i=await r.fn(t,...r.args);break;case"delay":try{await Cl(r.ms,t)}catch(a){if(a instanceof DOMException&&a.name==="AbortError")return await e.return({}),null;throw a}i=void 0;break;case"select":i=r.selector?r.selector(n()):n();break}if(t.aborted)return await e.return({}),null}}const El=()=>{let e=null;return{run:async(t,s,n)=>{e?.abort(),e=new AbortController;try{return await Pl(t,e.signal,s,n)}catch(i){if(i instanceof DOMException&&i.name==="AbortError")return null;throw i}},cancel:()=>{e?.abort(),e=null}}},Ol=(e,t)=>e.length!==t.length||e.some((s,n)=>!Object.is(s,t[n])),$l=e=>{console.error("[cosmoz-form] async rule error:",e)},Tl=(e,t,s)=>{const n=$l,i=mt(e.values);i.current=e.values;const r=mt(new Map),o=mt(new Map),a=mt(new Map),l=mt(0),[c,u]=q(!1);return k(()=>()=>{for(const d of r.current.values())d.cancel()},[]),k(()=>{if(t?.length)for(const d of t){const[h,f,p=El]=d;r.current.has(d)||r.current.set(d,p());const g=f(e.values),m=o.current.get(d);if(m!=null&&!Ol(g,m))continue;const _=a.current.get(d);o.current.set(d,g),a.current.set(d,e.values);const y=r.current.get(d);l.current++,l.current===1&&u(!0),y.run(h(e.values,_,void 0,void 0),b=>e.onChange(b,!1),()=>i.current).then(b=>{b!==null&&e.onChange(b,!1)}).catch(b=>n(b,d)).finally(()=>{l.current--,l.current===0&&u(!1)})}},[e.values]),{...e,processing:c}},Ll=(e,t)=>!t||e.some((s,n)=>!Object.is(t[n],s)),ce=({oldItem:e,newItem:t,rules:s,index:n,oldIndex:i=n})=>s?s.reduce((r,[o,a])=>e&&a&&!Ll(a(r,n),a(e,i))?r:{...r,...o(r,e,n,i)},t):t,Al=(e,t,s)=>{const[,n]=e;return{values:n,onReset:E(()=>t(([i])=>[i,i]),[t]),onValues:E((i,r=!0)=>t(([o,a])=>[o,is(ce({oldItem:a,newItem:U(i,a),rules:s}),r)]),[s,t]),onChange:E((i,r=!0)=>t(([o,a])=>[o,is(ce({oldItem:a,newItem:{...a,...U(i,a)},rules:s}),r)]),[s,t]),load:E((i,r)=>{if(!i){t([i,i]);return}const o=li(ce({oldItem:void 0,newItem:i,rules:r??s}));t([o,o])},[s,t]),touched:F(()=>ci(n),[n])}},Rl=(e,t)=>li(ce({oldItem:void 0,newItem:e,rules:t})),ui=(e,t=[])=>{const s=e.filter(n=>n?.rules!=null).flatMap(n=>n?.rules);return[...t,...s]},kl=(e,t,{fields:s,rules:n})=>{const i=F(()=>U(s)??[],[s]),r=F(()=>ui(i,n),[i,n]),o=Al(e,t,r),{values:a}=o;return{...F(()=>Xa(i,a),[i,a]),...o}},Nl=e=>{const[t,s]=q(()=>{const n=U(e.fields)??[],i=ui(n,e.rules),r=Rl(e.initial,i);return[r,r]});return kl(t,s,e)};function zl({fields:e,initial:t,rules:s,asyncRules:n,onSave:i,allowEmpty:r}){const o=Nl({fields:e,initial:t,rules:s}),{processing:a}=Tl(o,n),{values:l,invalid:c}=o,[u,d]=q(),[h,f]=q(),p=l==null||l===t,g=o.fields?.length>0&&!(p&&r)&&(p||c);return{...o,save$:u,onSave:E(()=>d(i?.(l,t,f)),[i,l,t]),disabled:g,processing:a,progress:h}}const Ml=lt`
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
`,di=e=>{const{description:t,auto:s,uncancelable:n,hideCancelButton:i,saveText:r=Yt("OK")}=e,{onSave:o,disabled:a,save$:l,progress:c,...u}=zl(e);return k(()=>{s&&o()},[s]),C` <style>
			${Sl} ${ll(u)}${Ml}
		</style>
		${D(t,()=>C`<p class="description">${t}</p>`)}
		<div class="form" part="form">${al(u)}</div>
		<div class="buttons">
			${wl(l)}
			${xl({save$:l,onSave:o,disabled:a,title:r,progress:c})}
			${D(!i,()=>C`<button class="button" value="cancel" ?disabled=${n}>
						${Yt("Cancel")}
					</button>`)}
		</div>`};customElements.define("cosmoz-form-dialog",hs(di,{observedAttributes:["allow-empty"]}));customElements.define("cosmoz-form-dialog-next",hs(di,{observedAttributes:["allow-empty"]}));const Lt=Math.min,W=Math.max,xe=Math.round,oe=Math.floor,st=e=>({x:e,y:e}),Fl={left:"right",right:"left",bottom:"top",top:"bottom"},Dl={start:"end",end:"start"};function fn(e,t,s){return W(e,Lt(t,s))}function ke(e,t){return typeof e=="function"?e(t):e}function wt(e){return e.split("-")[0]}function Ne(e){return e.split("-")[1]}function hi(e){return e==="x"?"y":"x"}function fi(e){return e==="y"?"height":"width"}const Il=new Set(["top","bottom"]);function ct(e){return Il.has(wt(e))?"y":"x"}function pi(e){return hi(ct(e))}function jl(e,t,s){s===void 0&&(s=!1);const n=Ne(e),i=pi(e),r=fi(i);let o=i==="x"?n===(s?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(o=Se(o)),[o,Se(o)]}function Vl(e){const t=Se(e);return[os(e),t,os(t)]}function os(e){return e.replace(/start|end/g,t=>Dl[t])}const pn=["left","right"],gn=["right","left"],Bl=["top","bottom"],Hl=["bottom","top"];function Ul(e,t,s){switch(e){case"top":case"bottom":return s?t?gn:pn:t?pn:gn;case"left":case"right":return t?Bl:Hl;default:return[]}}function Kl(e,t,s,n){const i=Ne(e);let r=Ul(wt(e),s==="start",n);return i&&(r=r.map(o=>o+"-"+i),t&&(r=r.concat(r.map(os)))),r}function Se(e){return e.replace(/left|right|bottom|top/g,t=>Fl[t])}function Wl(e){return{top:0,right:0,bottom:0,left:0,...e}}function Yl(e){return typeof e!="number"?Wl(e):{top:e,right:e,bottom:e,left:e}}function Ce(e){const{x:t,y:s,width:n,height:i}=e;return{width:n,height:i,top:s,left:t,right:t+n,bottom:s+i,x:t,y:s}}function mn(e,t,s){let{reference:n,floating:i}=e;const r=ct(t),o=pi(t),a=fi(o),l=wt(t),c=r==="y",u=n.x+n.width/2-i.width/2,d=n.y+n.height/2-i.height/2,h=n[a]/2-i[a]/2;let f;switch(l){case"top":f={x:u,y:n.y-i.height};break;case"bottom":f={x:u,y:n.y+n.height};break;case"right":f={x:n.x+n.width,y:d};break;case"left":f={x:n.x-i.width,y:d};break;default:f={x:n.x,y:n.y}}switch(Ne(t)){case"start":f[o]-=h*(s&&c?-1:1);break;case"end":f[o]+=h*(s&&c?-1:1);break}return f}const Jl=async(e,t,s)=>{const{placement:n="bottom",strategy:i="absolute",middleware:r=[],platform:o}=s,a=r.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(t));let c=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=mn(c,n,l),h=n,f={},p=0;for(let g=0;g<a.length;g++){const{name:m,fn:_}=a[g],{x:y,y:b,data:v,reset:w}=await _({x:u,y:d,initialPlacement:n,placement:h,strategy:i,middlewareData:f,rects:c,platform:o,elements:{reference:e,floating:t}});u=y??u,d=b??d,f={...f,[m]:{...f[m],...v}},w&&p<=50&&(p++,typeof w=="object"&&(w.placement&&(h=w.placement),w.rects&&(c=w.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):w.rects),{x:u,y:d}=mn(c,h,l)),g=-1)}return{x:u,y:d,placement:h,strategy:i,middlewareData:f}};async function _s(e,t){var s;t===void 0&&(t={});const{x:n,y:i,platform:r,rects:o,elements:a,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:h=!1,padding:f=0}=ke(t,e),p=Yl(f),m=a[h?d==="floating"?"reference":"floating":d],_=Ce(await r.getClippingRect({element:(s=await(r.isElement==null?void 0:r.isElement(m)))==null||s?m:m.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),y=d==="floating"?{x:n,y:i,width:o.floating.width,height:o.floating.height}:o.reference,b=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a.floating)),v=await(r.isElement==null?void 0:r.isElement(b))?await(r.getScale==null?void 0:r.getScale(b))||{x:1,y:1}:{x:1,y:1},w=Ce(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:y,offsetParent:b,strategy:l}):y);return{top:(_.top-w.top+p.top)/v.y,bottom:(w.bottom-_.bottom+p.bottom)/v.y,left:(_.left-w.left+p.left)/v.x,right:(w.right-_.right+p.right)/v.x}}const ql=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var s,n;const{placement:i,middlewareData:r,rects:o,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:h,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:g=!0,...m}=ke(e,t);if((s=r.arrow)!=null&&s.alignmentOffset)return{};const _=wt(i),y=ct(a),b=wt(a)===a,v=await(l.isRTL==null?void 0:l.isRTL(c.floating)),w=h||(b||!g?[Se(a)]:Vl(a)),$=p!=="none";!h&&$&&w.push(...Kl(a,g,p,v));const S=[a,...w],A=await _s(t,m),z=[];let M=((n=r.flip)==null?void 0:n.overflows)||[];if(u&&z.push(A[_]),d){const N=jl(i,o,v);z.push(A[N[0]],A[N[1]])}if(M=[...M,{placement:i,overflows:z}],!z.every(N=>N<=0)){var V,Z;const N=(((V=r.flip)==null?void 0:V.index)||0)+1,I=S[N];if(I&&(!(d==="alignment"?y!==ct(I):!1)||M.every(T=>ct(T.placement)===y?T.overflows[0]>0:!0)))return{data:{index:N,overflows:M},reset:{placement:I}};let J=(Z=M.filter(L=>L.overflows[0]<=0).sort((L,T)=>L.overflows[1]-T.overflows[1])[0])==null?void 0:Z.placement;if(!J)switch(f){case"bestFit":{var B;const L=(B=M.filter(T=>{if($){const j=ct(T.placement);return j===y||j==="y"}return!0}).map(T=>[T.placement,T.overflows.filter(j=>j>0).reduce((j,at)=>j+at,0)]).sort((T,j)=>T[1]-j[1])[0])==null?void 0:B[0];L&&(J=L);break}case"initialPlacement":J=a;break}if(i!==J)return{reset:{placement:J}}}return{}}}},Gl=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:s,y:n,placement:i}=t,{mainAxis:r=!0,crossAxis:o=!1,limiter:a={fn:m=>{let{x:_,y}=m;return{x:_,y}}},...l}=ke(e,t),c={x:s,y:n},u=await _s(t,l),d=ct(wt(i)),h=hi(d);let f=c[h],p=c[d];if(r){const m=h==="y"?"top":"left",_=h==="y"?"bottom":"right",y=f+u[m],b=f-u[_];f=fn(y,f,b)}if(o){const m=d==="y"?"top":"left",_=d==="y"?"bottom":"right",y=p+u[m],b=p-u[_];p=fn(y,p,b)}const g=a.fn({...t,[h]:f,[d]:p});return{...g,data:{x:g.x-s,y:g.y-n,enabled:{[h]:r,[d]:o}}}}}},Xl=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var s,n;const{placement:i,rects:r,platform:o,elements:a}=t,{apply:l=()=>{},...c}=ke(e,t),u=await _s(t,c),d=wt(i),h=Ne(i),f=ct(i)==="y",{width:p,height:g}=r.floating;let m,_;d==="top"||d==="bottom"?(m=d,_=h===(await(o.isRTL==null?void 0:o.isRTL(a.floating))?"start":"end")?"left":"right"):(_=d,m=h==="end"?"top":"bottom");const y=g-u.top-u.bottom,b=p-u.left-u.right,v=Lt(g-u[m],y),w=Lt(p-u[_],b),$=!t.middlewareData.shift;let S=v,A=w;if((s=t.middlewareData.shift)!=null&&s.enabled.x&&(A=b),(n=t.middlewareData.shift)!=null&&n.enabled.y&&(S=y),$&&!h){const M=W(u.left,0),V=W(u.right,0),Z=W(u.top,0),B=W(u.bottom,0);f?A=p-2*(M!==0||V!==0?M+V:W(u.left,u.right)):S=g-2*(Z!==0||B!==0?Z+B:W(u.top,u.bottom))}await l({...t,availableWidth:A,availableHeight:S});const z=await o.getDimensions(a.floating);return p!==z.width||g!==z.height?{reset:{rects:!0}}:{}}}};function ze(){return typeof window<"u"}function Rt(e){return gi(e)?(e.nodeName||"").toLowerCase():"#document"}function Y(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function ot(e){var t;return(t=(gi(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function gi(e){return ze()?e instanceof Node||e instanceof Y(e).Node:!1}function X(e){return ze()?e instanceof Element||e instanceof Y(e).Element:!1}function it(e){return ze()?e instanceof HTMLElement||e instanceof Y(e).HTMLElement:!1}function _n(e){return!ze()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Y(e).ShadowRoot}const Ql=new Set(["inline","contents"]);function Xt(e){const{overflow:t,overflowX:s,overflowY:n,display:i}=Q(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+s)&&!Ql.has(i)}const Zl=new Set(["table","td","th"]);function tc(e){return Zl.has(Rt(e))}const ec=[":popover-open",":modal"];function Me(e){return ec.some(t=>{try{return e.matches(t)}catch{return!1}})}const sc=["transform","translate","scale","rotate","perspective"],nc=["transform","translate","scale","rotate","perspective","filter"],ic=["paint","layout","strict","content"];function ys(e){const t=bs(),s=X(e)?Q(e):e;return sc.some(n=>s[n]?s[n]!=="none":!1)||(s.containerType?s.containerType!=="normal":!1)||!t&&(s.backdropFilter?s.backdropFilter!=="none":!1)||!t&&(s.filter?s.filter!=="none":!1)||nc.some(n=>(s.willChange||"").includes(n))||ic.some(n=>(s.contain||"").includes(n))}function rc(e){let t=dt(e);for(;it(t)&&!At(t);){if(ys(t))return t;if(Me(t))return null;t=dt(t)}return null}function bs(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const oc=new Set(["html","body","#document"]);function At(e){return oc.has(Rt(e))}function Q(e){return Y(e).getComputedStyle(e)}function Fe(e){return X(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function dt(e){if(Rt(e)==="html")return e;const t=e.assignedSlot||e.parentNode||_n(e)&&e.host||ot(e);return _n(t)?t.host:t}function mi(e){const t=dt(e);return At(t)?e.ownerDocument?e.ownerDocument.body:e.body:it(t)&&Xt(t)?t:mi(t)}function Jt(e,t,s){var n;t===void 0&&(t=[]),s===void 0&&(s=!0);const i=mi(e),r=i===((n=e.ownerDocument)==null?void 0:n.body),o=Y(i);if(r){const a=as(o);return t.concat(o,o.visualViewport||[],Xt(i)?i:[],a&&s?Jt(a):[])}return t.concat(i,Jt(i,[],s))}function as(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function _i(e){const t=Q(e);let s=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const i=it(e),r=i?e.offsetWidth:s,o=i?e.offsetHeight:n,a=xe(s)!==r||xe(n)!==o;return a&&(s=r,n=o),{width:s,height:n,$:a}}function vs(e){return X(e)?e:e.contextElement}function Tt(e){const t=vs(e);if(!it(t))return st(1);const s=t.getBoundingClientRect(),{width:n,height:i,$:r}=_i(t);let o=(r?xe(s.width):s.width)/n,a=(r?xe(s.height):s.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const ac=st(0);function yi(e){const t=Y(e);return!bs()||!t.visualViewport?ac:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function lc(e,t,s){return t===void 0&&(t=!1),!s||t&&s!==Y(e)?!1:t}function xt(e,t,s,n){t===void 0&&(t=!1),s===void 0&&(s=!1);const i=e.getBoundingClientRect(),r=vs(e);let o=st(1);t&&(n?X(n)&&(o=Tt(n)):o=Tt(e));const a=lc(r,s,n)?yi(r):st(0);let l=(i.left+a.x)/o.x,c=(i.top+a.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(r){const h=Y(r),f=n&&X(n)?Y(n):n;let p=h,g=as(p);for(;g&&n&&f!==p;){const m=Tt(g),_=g.getBoundingClientRect(),y=Q(g),b=_.left+(g.clientLeft+parseFloat(y.paddingLeft))*m.x,v=_.top+(g.clientTop+parseFloat(y.paddingTop))*m.y;l*=m.x,c*=m.y,u*=m.x,d*=m.y,l+=b,c+=v,p=Y(g),g=as(p)}}return Ce({width:u,height:d,x:l,y:c})}function De(e,t){const s=Fe(e).scrollLeft;return t?t.left+s:xt(ot(e)).left+s}function bi(e,t){const s=e.getBoundingClientRect(),n=s.left+t.scrollLeft-De(e,s),i=s.top+t.scrollTop;return{x:n,y:i}}function cc(e){let{elements:t,rect:s,offsetParent:n,strategy:i}=e;const r=i==="fixed",o=ot(n),a=t?Me(t.floating):!1;if(n===o||a&&r)return s;let l={scrollLeft:0,scrollTop:0},c=st(1);const u=st(0),d=it(n);if((d||!d&&!r)&&((Rt(n)!=="body"||Xt(o))&&(l=Fe(n)),it(n))){const f=xt(n);c=Tt(n),u.x=f.x+n.clientLeft,u.y=f.y+n.clientTop}const h=o&&!d&&!r?bi(o,l):st(0);return{width:s.width*c.x,height:s.height*c.y,x:s.x*c.x-l.scrollLeft*c.x+u.x+h.x,y:s.y*c.y-l.scrollTop*c.y+u.y+h.y}}function uc(e){return Array.from(e.getClientRects())}function dc(e){const t=ot(e),s=Fe(e),n=e.ownerDocument.body,i=W(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),r=W(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let o=-s.scrollLeft+De(e);const a=-s.scrollTop;return Q(n).direction==="rtl"&&(o+=W(t.clientWidth,n.clientWidth)-i),{width:i,height:r,x:o,y:a}}const yn=25;function hc(e,t){const s=Y(e),n=ot(e),i=s.visualViewport;let r=n.clientWidth,o=n.clientHeight,a=0,l=0;if(i){r=i.width,o=i.height;const u=bs();(!u||u&&t==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}const c=De(n);if(c<=0){const u=n.ownerDocument,d=u.body,h=getComputedStyle(d),f=u.compatMode==="CSS1Compat"&&parseFloat(h.marginLeft)+parseFloat(h.marginRight)||0,p=Math.abs(n.clientWidth-d.clientWidth-f);p<=yn&&(r-=p)}else c<=yn&&(r+=c);return{width:r,height:o,x:a,y:l}}const fc=new Set(["absolute","fixed"]);function pc(e,t){const s=xt(e,!0,t==="fixed"),n=s.top+e.clientTop,i=s.left+e.clientLeft,r=it(e)?Tt(e):st(1),o=e.clientWidth*r.x,a=e.clientHeight*r.y,l=i*r.x,c=n*r.y;return{width:o,height:a,x:l,y:c}}function bn(e,t,s){let n;if(t==="viewport")n=hc(e,s);else if(t==="document")n=dc(ot(e));else if(X(t))n=pc(t,s);else{const i=yi(e);n={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return Ce(n)}function vi(e,t){const s=dt(e);return s===t||!X(s)||At(s)?!1:Q(s).position==="fixed"||vi(s,t)}function gc(e,t){const s=t.get(e);if(s)return s;let n=Jt(e,[],!1).filter(a=>X(a)&&Rt(a)!=="body"),i=null;const r=Q(e).position==="fixed";let o=r?dt(e):e;for(;X(o)&&!At(o);){const a=Q(o),l=ys(o);!l&&a.position==="fixed"&&(i=null),(r?!l&&!i:!l&&a.position==="static"&&!!i&&fc.has(i.position)||Xt(o)&&!l&&vi(e,o))?n=n.filter(u=>u!==o):i=a,o=dt(o)}return t.set(e,n),n}function mc(e){let{element:t,boundary:s,rootBoundary:n,strategy:i}=e;const o=[...s==="clippingAncestors"?Me(t)?[]:gc(t,this._c):[].concat(s),n],a=o[0],l=o.reduce((c,u)=>{const d=bn(t,u,i);return c.top=W(d.top,c.top),c.right=Lt(d.right,c.right),c.bottom=Lt(d.bottom,c.bottom),c.left=W(d.left,c.left),c},bn(t,a,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function _c(e){const{width:t,height:s}=_i(e);return{width:t,height:s}}function yc(e,t,s){const n=it(t),i=ot(t),r=s==="fixed",o=xt(e,!0,r,t);let a={scrollLeft:0,scrollTop:0};const l=st(0);function c(){l.x=De(i)}if(n||!n&&!r)if((Rt(t)!=="body"||Xt(i))&&(a=Fe(t)),n){const f=xt(t,!0,r,t);l.x=f.x+t.clientLeft,l.y=f.y+t.clientTop}else i&&c();r&&!n&&i&&c();const u=i&&!n&&!r?bi(i,a):st(0),d=o.left+a.scrollLeft-l.x-u.x,h=o.top+a.scrollTop-l.y-u.y;return{x:d,y:h,width:o.width,height:o.height}}function Je(e){return Q(e).position==="static"}function vn(e,t){if(!it(e)||Q(e).position==="fixed")return null;if(t)return t(e);let s=e.offsetParent;return ot(e)===s&&(s=s.ownerDocument.body),s}function wi(e,t){const s=Y(e);if(Me(e))return s;if(!it(e)){let i=dt(e);for(;i&&!At(i);){if(X(i)&&!Je(i))return i;i=dt(i)}return s}let n=vn(e,t);for(;n&&tc(n)&&Je(n);)n=vn(n,t);return n&&At(n)&&Je(n)&&!ys(n)?s:n||rc(e)||s}const bc=async function(e){const t=this.getOffsetParent||wi,s=this.getDimensions,n=await s(e.floating);return{reference:yc(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function vc(e){return Q(e).direction==="rtl"}const wc={convertOffsetParentRelativeRectToViewportRelativeRect:cc,getDocumentElement:ot,getClippingRect:mc,getOffsetParent:wi,getElementRects:bc,getClientRects:uc,getDimensions:_c,getScale:Tt,isElement:X,isRTL:vc};function xi(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function xc(e,t){let s=null,n;const i=ot(e);function r(){var a;clearTimeout(n),(a=s)==null||a.disconnect(),s=null}function o(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),r();const c=e.getBoundingClientRect(),{left:u,top:d,width:h,height:f}=c;if(a||t(),!h||!f)return;const p=oe(d),g=oe(i.clientWidth-(u+h)),m=oe(i.clientHeight-(d+f)),_=oe(u),b={rootMargin:-p+"px "+-g+"px "+-m+"px "+-_+"px",threshold:W(0,Lt(1,l))||1};let v=!0;function w($){const S=$[0].intersectionRatio;if(S!==l){if(!v)return o();S?o(!1,S):n=setTimeout(()=>{o(!1,1e-7)},1e3)}S===1&&!xi(c,e.getBoundingClientRect())&&o(),v=!1}try{s=new IntersectionObserver(w,{...b,root:i.ownerDocument})}catch{s=new IntersectionObserver(w,b)}s.observe(e)}return o(!0),r}function Sc(e,t,s,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,c=vs(e),u=i||r?[...c?Jt(c):[],...Jt(t)]:[];u.forEach(_=>{i&&_.addEventListener("scroll",s,{passive:!0}),r&&_.addEventListener("resize",s)});const d=c&&a?xc(c,s):null;let h=-1,f=null;o&&(f=new ResizeObserver(_=>{let[y]=_;y&&y.target===c&&f&&(f.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var b;(b=f)==null||b.observe(t)})),s()}),c&&!l&&f.observe(c),f.observe(t));let p,g=l?xt(e):null;l&&m();function m(){const _=xt(e);g&&!xi(g,_)&&s(),g=_,p=requestAnimationFrame(m)}return s(),()=>{var _;u.forEach(y=>{i&&y.removeEventListener("scroll",s),r&&y.removeEventListener("resize",s)}),d?.(),(_=f)==null||_.disconnect(),f=null,l&&cancelAnimationFrame(p)}}const Cc=Gl,Pc=ql,Ec=Xl,Oc=(e,t,s)=>{const n=new Map,i={platform:wc,...s},r={...i.platform,_c:n};return Jl(e,t,{...i,platform:r})},Si=[Pc({fallbackAxisSideDirection:"start",crossAxis:!1}),Cc()],$c=({placement:e="bottom-start",strategy:t,middleware:s=Si}={})=>{const[n,i]=q(),[r,o]=q(),[a,l]=q();return k(()=>{if(!n||!(r instanceof HTMLElement)){l(void 0);return}return Sc(n,r,()=>Oc(n,r,{placement:e,strategy:t,middleware:s}).then(l))},[n,r,e,t,s]),{setReference:i,setFloating:o,styles:F(()=>a?{left:`${a.x}px`,top:`${a.y}px`}:{},[a?.x,a?.y])}},Tc=(e=HTMLElement)=>class extends e{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},Lc=(e,t)=>{if(!e||!t)return;const s=Object.keys(t);return Object.fromEntries(Object.keys(e).flatMap(n=>s.includes(n)?[]:[[n,void 0]]))};class Ac extends qt{_props;render(t){return G}update(t,[s]){return this._props!==s&&Object.assign(t.element,Lc(this._props,s),this._props=s),G}}const Rc=St(Ac),kc=e=>{const t=pt(),s=F(()=>new CSSStyleSheet,[]);k(()=>{t.shadowRoot.adoptedStyleSheets=[...t.shadowRoot.adoptedStyleSheets,s]},[]),k(()=>{s.replaceSync(e)},[e])};const Ci="important",Nc=" !"+Ci,zc=St(class extends qt{constructor(e){if(super(e),e.type!==tt.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,s)=>{const n=e[s];return n==null?t:t+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(e,[t]){const{style:s}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const n of this.ft)t[n]==null&&(this.ft.delete(n),n.includes("-")?s.removeProperty(n):s[n]=null);for(const n in t){const i=t[n];if(i!=null){this.ft.add(n);const r=typeof i=="string"&&i.endsWith(Nc);n.includes("-")||r?s.setProperty(n,r?i.slice(0,-11):i,r?Ci:""):s[n]=i}}return G}}),Mc="data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 1L5.20039 7.04766L1.66348 3.46152' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",Fc=vt`
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
`,Dc=({index:e,itemHeight:t,auto:s})=>vt`
	${D(!s,()=>vt`
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
`,Ic=e=>{const t=e==="auto",[s,n]=q(t?40:e);return[s,i=>t?n(i):void 0]},Qt=e=>{const t=F(()=>({}),[]);return F(()=>Object.assign(t,e),[t,...Object.values(e)])},jc=e=>{const t=Qt(e);k(()=>{const s=n=>{if(!(n.ctrlKey&&n.altKey||n.defaultPrevented))switch(n.key){case"Up":case"ArrowUp":n.preventDefault(),t.onUp();break;case"Down":case"ArrowDown":n.preventDefault(),t.onDown();break;case"Enter":n.preventDefault(),t.onEnter();break}};return document.addEventListener("keydown",s,!0),()=>document.removeEventListener("keydown",s,!0)},[t])},Vc=({items:e,onSelect:t,defaultIndex:s=0})=>{const[n,i]=q({index:s}),{index:r}=n,{length:o}=e;return k(()=>{i({index:n.index<0?s:Math.min(n.index,e.length-1),scroll:!0})},[e,s]),jc({onUp:E(()=>i(a=>({index:a.index>0?a.index-1:o-1,scroll:!0})),[o]),onDown:E(()=>i(a=>({index:a.index<o-1?a.index+1:0,scroll:!0})),[o]),onEnter:E(()=>r>-1&&r<o&&t?.(e[r],r),[r,e,t])}),{position:n,highlight:E(a=>i({index:a}),[]),select:E(a=>t?.(a),[t])}},Bc=(e,t)=>t?s=>ut(e).find(n=>n[t]===s[t]):s=>ut(e).includes(s),Hc=(e,t)=>{if(!t||!e)return e;const s=e.toLowerCase().indexOf(t.toLowerCase());if(s<0)return e;const n=s+t.length;return[e.slice(0,s),C`<mark>${e.slice(s,n)}</mark>`,e.slice(n)]},Uc=(e=ve)=>(t,s,{highlight:n,select:i,textual:r=ve,query:o,isSelected:a})=>{const l=r(t),c=Hc(l,o),u=e(c,t,s);return C`<div
				class="item"
				role="option"
				part="option"
				?aria-selected=${a(t)}
				data-index=${s}
				@mouseenter=${()=>n(s)}
				@click=${()=>i(t)}
				@mousedown=${d=>d.preventDefault()}
				title=${l}
			>
				${u}
			</div>
			<div class="sizer" virtualizer-sizer>${u}</div>`},Kc=({itemRenderer:e=Uc(),...t})=>{const s=Qt(t);return E((n,i)=>e(n,i,s),[s,e])},Wc=["query","items","onSelect","textual","anchor","itemHeight","itemLimit","itemRenderer","defaultIndex","value","valueProperty","loading"],Yc=({value:e,valueProperty:t,items:s,onSelect:n,defaultIndex:i,query:r,textual:o,itemRenderer:a,itemHeight:l=40,itemLimit:c=5})=>{const u=F(()=>Bc(e,t),[e,t]),d=F(()=>s.slice(),[s,u]),{position:h,highlight:f,select:p}=Vc({items:d,onSelect:n,defaultIndex:isNaN(i)?void 0:Number(i)}),[g,m]=Ic(l);return{position:h,items:d,height:Math.min(c,d.length)*g,highlight:f,select:p,itemHeight:g,setItemHeight:m,renderItem:Kc({itemRenderer:a,items:d,position:h,highlight:f,select:p,textual:o,query:r,isSelected:u})}},wn=Pa,Jc=e=>{const t=mt(void 0),{position:s,items:n,renderItem:i,height:r,itemHeight:o,setItemHeight:a}=Yc(e);return k(()=>{const l=t.current?.[rs];l&&l.layoutComplete.then(()=>{e.dispatchEvent(new CustomEvent("layout-complete"));const{averageChildSize:c,averageMarginSize:u}=l._layout._metricsCache;return a(c+u*2)},wn)},[n]),k(()=>{if(!s.scroll)return;const l=t.current?.[rs];if(l){if(!l?._layout){l.layoutComplete.then(()=>l.element(s.index)?.scrollIntoView({block:"nearest"}),wn);return}l.element(s.index)?.scrollIntoView({block:"nearest"})}},[s]),kc(Dc({...s,itemHeight:o,auto:e.itemHeight==="auto"})),C`<div
			class="items"
			style="min-height: ${r}px"
			${Gt(l=>t.current=l)}
		>
			<div virtualizer-sizer></div>
			${yl({items:n,renderItem:i,scroller:!0})}
		</div>
		<slot></slot>`};customElements.define("cosmoz-listbox",Tc(rt(Jc,{styleSheets:[ds(Fc)]})));const qc=({multi:e,setFloating:t,styles:s,...n},i)=>C`<cosmoz-listbox
		style="${zc(s)}"
		@connected="${r=>r.target.showPopover?.()}"
		popover="manual"
		part="listbox"
		?multi=${e}
		${Gt(t)}
		...=${Rc(Aa(Wc)(n))}
		>${i}</cosmoz-listbox
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
				@mousedown=${s=>s.preventDefault()}
				@click=${e}
			>
				${Xc}
			</span>`)}
`;customElements.define("cosmoz-autocomplete-chip",rt(Qc,{observedAttributes:["disabled"],styleSheets:[ds(Gc)]}));const Zc=({content:e,onClear:t,disabled:s,hidden:n,className:i="chip",slot:r})=>C`<cosmoz-autocomplete-chip
		class=${R(i)}
		slot=${R(r)}
		part="chip"
		exportparts="chip-text, chip-clear"
		?disabled=${s}
		?hidden=${n}
		.onClear=${t}
		title=${R(typeof e=="string"?e:void 0)}
		>${e}</cosmoz-autocomplete-chip
	>`,tu=({value:e,min:t=0,onDeselect:s,textual:n,disabled:i,chipRenderer:r=Zc})=>[...e.filter(Boolean).map(o=>r({item:o,content:n(o),onClear:e.length>t&&(()=>s(o)),disabled:i,slot:"control"})),r({item:null,content:C`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],eu=vt`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",rt(()=>nt,{styleSheets:[eu]}));const su=lt`
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
`,xn=e=>e.matches(":focus-within"),nu=({disabled:e,onFocus:t})=>{const[s,n]=q(),{focused:i,closed:r}=s||{},o=i&&!e,a=Qt({closed:r,onFocus:t}),l=E(u=>n(d=>({...d,closed:u})),[]),c=E(u=>{const d=u.currentTarget;return xn(d)?n(h=>({focused:!0,closed:!h?.closed})):d.focus()},[]);return k(()=>{if(!o)return;const u=d=>{if(d.defaultPrevented)return;const{closed:h}=a;d.key==="Escape"&&!h?(d.preventDefault(),l(!0)):["ArrowUp","Up"].includes(d.key)&&h&&(d.preventDefault(),l(!1))};return document.addEventListener("keydown",u,!0),()=>document.removeEventListener("keydown",u,!0)},[o]),{focused:o,active:o&&!r,setClosed:l,onToggle:c,onFocus:E(u=>{const d=xn(u.currentTarget);n({focused:d}),a.onFocus?.(d)},[a])}},ws=(e,t=()=>({}))=>{const s={type:e,toString(){return e}};return Object.assign((...i)=>Object.assign(t(...i),s),s)},Sn=e=>e.type||e.toString(),Cn=e=>Array.isArray(e)?e:[e],iu=(e,t)=>{const s=Cn(t),n=(s.every(Array.isArray)?s:[s]).map(([i,r])=>({actions:Cn(i).map(Sn),handle:r}));return(i=e,r)=>{const o=n.find(a=>a.actions.includes(Sn(r)));return o?o.handle(i,r):i}},bt={pending:"pending",rejected:"rejected",resolved:"resolved"},Pi={error:void 0,result:void 0,state:bt.pending},Ei=ws(bt.pending),Oi=ws(bt.resolved,e=>({result:e})),$i=ws(bt.rejected,e=>({error:e})),ru=iu(Pi,[[Ei,()=>({error:void 0,result:void 0,state:bt.pending})],[Oi,(e,{result:t})=>({error:void 0,result:t,state:bt.resolved})],[$i,(e,{error:t})=>({error:t,result:void 0,state:bt.rejected})]]),ou=e=>{const[{error:t,result:s,state:n},i]=tr(ru,Pi);return k(()=>{if(!e)return;let r=!1;return i(Ei()),e.then(o=>!r&&i(Oi(o)),o=>!r&&i($i(o))),()=>{r=!0}},[e]),[s,t,n]},au=({focused:e,empty:t,...s})=>{const n=e&&t&&s.limit!==1,i=Qt(s);k(()=>{if(!n)return;const r=o=>{if(o.defaultPrevented)return;const{key:a}=o,l=ut(i.value),c=i.limit==1;if(l.length>0&&(a==="Backspace"||c&&a.length===1))return i.onChange(l.slice(0,-1))};return document.addEventListener("keydown",r,!0),()=>document.removeEventListener("keydown",r,!0)},[n,i])},Pn=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),lu=(e,t,s)=>{if(!t)return e;const n=Pn(t.toLowerCase()),i=[];for(const r of e){const a=Pn(s(r).toLowerCase()).indexOf(n);a<0||i.push({item:r,index:a})}return i.sort((r,o)=>r.index-o.index).map(({item:r})=>r)},cu=e=>e===!1||e==null?[]:e,Ti=(e,t,s)=>e.dispatchEvent(new CustomEvent(t,{detail:s})),uu=(e,t,s)=>E(n=>{t?.(n),Ti(e,s,n)},[t]),du=[],hu=e=>(...t)=>{let s;const n=()=>{s&&cancelAnimationFrame(s)};return n(),s=requestAnimationFrame(()=>{s=void 0,e(...t)}),n},fu=({value:e,text:t,onChange:s,onText:n,onSelect:i,limit:r,min:o,source:a,textProperty:l,textual:c,valueProperty:u,keepOpened:d,keepQuery:h,preserveOrder:f,defaultIndex:p,externalSearch:g,...m})=>{const _=F(()=>(c??La)(l),[c,l]),{active:y,focused:b,onFocus:v,setClosed:w}=nu(m),$=!t,S=F(()=>t?.trim(),[t]),A=pt(),z=uu(A,n,"text"),M=E(L=>{s?.(L,()=>w(!0)),Ti(A,"value",L)},[s]),[V,Z]=q([]),B=F(()=>Promise.resolve(typeof a=="function"?a({query:S,active:y}):a).then(cu),[a,y,S]),N=F(()=>ut(e),[e]);k(()=>B.then(Z),[B]),au({focused:b,empty:$,limit:r,value:N,onChange:M,onText:z}),k(()=>{!b&&!h&&z("")},[b,h]);const I=Qt({onText:z,onChange:M,value:N,limit:r,min:o,keepQuery:h,keepOpened:d,setClosed:w,onSelect:i}),[,,J]=ou(B);return{active:y,query:S,textual:_,value:N,source$:B,loading:J==="pending",items:F(()=>{if(!y)return du;const L=f?V:[...N,...We(N,ti(u))(V)];return g?L:lu(L,S,_)},[V,y,S,_,$,N,f,u,g]),onClick:E(()=>w(!1),[]),onFocus:v,onText:E(L=>{z(L.target.value),w(!1)},[z,t,w]),onSelect:E(L=>{I.onSelect?.(L,I);const{onChange:T,onText:j,limit:at,min:Zt,value:ki,keepQuery:Ni,keepOpened:zi,setClosed:Mi}=I;Ni||j(""),zi||Mi(!0);const te=ut(ki),xs=te.includes(L);xs&&te.length===Zt||T((xs?We(L)(te):[...te,L]).slice(-at))},[I]),onDeselect:E(L=>I.onChange(We(L)(I.value)),[I]),defaultIndex:S!==void 0&&S?.length>0?0:p}},pu=e=>{const t=e.shadowRoot.querySelectorAll(".chip"),s=e.shadowRoot.querySelector(".badge");s.hidden=!0;for(const a of t)a.hidden=!1;const i=e.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let r;for(r=0;r<t.length;r++){const l=t[r].getBoundingClientRect();if(!(l.x+l.width<=i.x+i.width-24))break}const o=t.length-r;for(s.querySelector("span").textContent="+"+o.toString(),s.hidden=o<1;r<t.length;r++)t[r].hidden=!0},gu=({value:e,active:t,wrap:s,limit:n})=>{const i=pt(),r=!(s||n==1),o=F(()=>hu(()=>pu(i)),[]),[a,l]=q(0);Ge(()=>{if(!r)return;const c=i.shadowRoot.querySelector("cosmoz-input"),u=new ResizeObserver(d=>{l(d[0].contentRect.width)});return u.observe(c),()=>u.disconnect()},[r]),Ge(()=>r?o():void 0,[r,a,t,e])},mu=["input","control","label","line","error","wrap"].map(e=>`${e}: input-${e}`).join(),_u=[Ec({apply({rects:e,elements:t}){Object.assign(t.floating.style,{minWidth:`${Math.max(e.reference.width,e.floating.width)}px`})}}),...Si],yu=({active:e,isSingle:t,showSingle:s})=>e?!(t&&!s):!1,bu=e=>{const{active:t,invalid:s,errorMessage:n,label:i,placeholder:r,disabled:o,noLabelFloat:a,alwaysFloatLabel:l,textual:c,text:u,onText:d,onFocus:h,onClick:f,onDeselect:p,value:g,limit:m,min:_,showSingle:y,items:b,source$:v,placement:w,loading:$,chipRenderer:S}=e,A=pt(),z=m==1,M=z&&g?.[0]!=null,{styles:V,setReference:Z,setFloating:B}=$c({placement:w,middleware:_u});k(()=>(A.addEventListener("focusin",h),A.addEventListener("focusout",h),()=>{A.removeEventListener("focusin",h),A.removeEventListener("focusout",h)}),[h]),ei({focus:()=>A.shadowRoot?.querySelector("#input")?.focus()},[]);const N=$||b.length>0||u!=null&&u.length>0;return C`<cosmoz-input
				id="input"
				part="input"
				${Gt(Z)}
				.label=${i}
				.placeholder=${M?void 0:r}
				?no-label-float=${a}
				?always-float-label=${g?.length>0||l}
				?readonly=${M}
				?disabled=${o}
				?invalid=${we(v.then(()=>s,()=>!0),s)}
				.errorMessage=${we(v.then(()=>n,I=>I.message),n)}
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
				${tu({value:g,min:_,onDeselect:p,textual:c,disabled:o,chipRenderer:S})}
			</cosmoz-input>

			${D(yu({active:t,isSingle:M,showSingle:y}),()=>qc({...e,items:b,multi:!z,setFloating:B,styles:{...V,display:N?void 0:"none"}},D($,()=>C`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>D(u!=null&&u.length>0&&b.length===0,()=>C`<slot name="no-result"></slot>`))))}`},Li=e=>{const t={...e,...fu(e)};return gu(t),bu(t)},Ai=["disabled","invalid","no-label-float","always-float-label","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap"],vu=e=>{const{onChange:t,onText:s,...n}=e,[i,r]=sr("value");return k(()=>{e.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),Li({...n,value:i,onChange:E((o,...a)=>{r(o),t?.(o,...a)},[t]),onText:E(o=>{e.text=o,s?.(o)},[s])})},Ri=[ds(su)];customElements.define("cosmoz-autocomplete-ui",rt(Li,{observedAttributes:Ai,styleSheets:Ri}));customElements.define("cosmoz-autocomplete",rt(vu,{observedAttributes:Ai,styleSheets:Ri}));lt`
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
</svg>`;export{oi as a,Pl as b,rt as c,q as d,St as e,F as f,zl as g,al as h,qt as i,D as j,Te as l,Eu as n,R as o,il as r,mt as u};
