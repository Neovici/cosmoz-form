import{r as Yo,D as Js,A as ie,w as Ye,b as x,E as J,n as Zs,M as er,u as Le,v as Ke,h as en,p as Uo}from"./iframe-Cdfx0sMp.js";import{_ as tr}from"./preload-helper-PPVm8Dsz.js";let kt,Ko=0;function In(t){kt=t}function jn(){kt=null,Ko=0}function nr(){return Ko++}const tn=Symbol("haunted.phase"),xt=Symbol("haunted.hook"),Vn=Symbol("haunted.update"),Bn=Symbol("haunted.commit"),Re=Symbol("haunted.effects"),et=Symbol("haunted.layoutEffects"),dn="haunted.context";class or{update;host;virtual;[xt];[Re];[et];constructor(e,n){this.update=e,this.host=n,this[xt]=new Map,this[Re]=[],this[et]=[]}run(e){In(this);let n=e();return jn(),n}_runEffects(e){let n=this[e];In(this);for(let o of n)o.call(this);jn()}runEffects(){this._runEffects(Re)}runLayoutEffects(){this._runEffects(et)}teardown(){this[xt].forEach(n=>{typeof n.teardown=="function"&&n.teardown(!0)})}}const sr=Promise.resolve().then.bind(Promise.resolve());function qo(){let t=[],e;function n(){e=null;let o=t;t=[];for(var s=0,r=o.length;s<r;s++)o[s]()}return function(o){t.push(o),e==null&&(e=sr(n))}}const rr=qo(),Wn=qo();class ir{renderer;host;state;[tn];_updateQueued;_active;constructor(e,n){this.renderer=e,this.host=n,this.state=new or(this.update.bind(this),n),this[tn]=null,this._updateQueued=!1,this._active=!0}update(){this._active&&(this._updateQueued||(rr(()=>{let e=this.handlePhase(Vn);Wn(()=>{this.handlePhase(Bn,e),Wn(()=>{this.handlePhase(Re)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,n){switch(this[tn]=e,e){case Bn:this.commit(n),this.runEffects(et);return;case Vn:return this.render();case Re:return this.runEffects(Re)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const jt=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},ar=t=>t?.map(e=>typeof e=="string"?jt(e):e),lr=(t,...e)=>t.flatMap((n,o)=>[n,e[o]||""]).join(""),G=lr,cr=(t="")=>t.replace(/-+([a-z])?/g,(e,n)=>n?n.toUpperCase():"");function ur(t){class e extends ir{frag;renderResult;constructor(s,r,i){super(s,i||r),this.frag=r}commit(s){this.renderResult=t(s,this.frag)}}function n(o,s,r){const i=(r||s||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:l=!0,shadowRootInit:c={},styleSheets:u}=r||s||{},d=ar(o.styleSheets||u);class f extends i{_scheduler;static get observedAttributes(){return o.observedAttributes||a||[]}constructor(){if(super(),l===!1)this._scheduler=new e(o,this);else{const g=this.attachShadow({mode:"open",...c});d&&(g.adoptedStyleSheets=d),this._scheduler=new e(o,g,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(g,b,y){if(b===y)return;let v=y===""?!0:y;Reflect.set(this,cr(g),v)}}function h(m){let g=m,b=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return g},set(y){b&&g===y||(b=!0,g=y,this._scheduler&&this._scheduler.update())}})}const p=new Proxy(i.prototype,{getPrototypeOf(m){return m},set(m,g,b,y){let v;return g in m?(v=Object.getOwnPropertyDescriptor(m,g),v&&v.set?(v.set.call(y,b),!0):(Reflect.set(m,g,b,y),!0)):(typeof g=="symbol"||g[0]==="_"?v={enumerable:!0,configurable:!0,writable:!0,value:b}:v=h(b),Object.defineProperty(y,g,v),v.set&&v.set.call(y,b),!0)}});return Object.setPrototypeOf(f.prototype,p),f}return n}class $e{id;state;constructor(e,n){this.id=e,this.state=n}}function dr(t,...e){let n=nr(),o=kt[xt],s=o.get(n);return s||(s=new t(n,kt,...e),o.set(n,s)),s.update(...e)}function ze(t){return dr.bind(null,t)}function Go(t){return ze(class extends $e{callback;lastValues;values;_teardown;constructor(e,n,o,s){super(e,n),t(n,this)}update(e,n){this.callback=e,this.values=n}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,n)=>this.lastValues[n]!==e)}})}function Xo(t,e){t[Re].push(e)}const M=Go(Xo),hr=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,Qo=ze(class extends $e{Context;value;_ranEffect;_unsubscribe;constructor(t,e,n){super(t,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Xo(e,this)}update(t){return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const e={Context:t,callback:this._updater};hr(this.state.host).dispatchEvent(new CustomEvent(dn,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:o=null,value:s}=e;this.value=o?s:t.defaultValue,this._unsubscribe=o}teardown(){this._unsubscribe&&this._unsubscribe()}});function fr(t){return e=>{const n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(dn,this)}disconnectedCallback(){this.removeEventListener(dn,this)}handleEvent(o){const{detail:s}=o;s.Context===n&&(s.value=this.value,s.unsubscribe=this.unsubscribe.bind(this,s.callback),this.listeners.add(s.callback),o.stopPropagation())}unsubscribe(o){this.listeners.delete(o)}set value(o){this._value=o;for(let s of this.listeners)s(o)}get value(){return this._value}},Consumer:t(function({render:o}){const s=Qo(n);return o(s)},{useShadowDOM:!1}),defaultValue:e};return n}}const P=ze(class extends $e{value;values;constructor(t,e,n,o){super(t,e),this.value=n(),this.values=o}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some((e,n)=>this.values[n]!==e)}}),S=(t,e)=>P(()=>t,e);function pr(t,e){t[et].push(e)}const hn=Go(pr),U=ze(class extends $e{args;constructor(t,e,n){super(t,e),this.updater=this.updater.bind(this),typeof n=="function"&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(t){const[e]=this.args;typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&(this.makeArgs(t),this.state.update())}makeArgs(t){this.args=Object.freeze([t,this.updater])}}),gr=ze(class extends $e{reducer;currentState;constructor(t,e,n,o,s){super(t,e),this.dispatch=this.dispatch.bind(this),this.currentState=s!==void 0?s(o):o}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}}),mr=/([A-Z])/gu,ke=ze(class extends $e{property;eventName;constructor(t,e,n,o){if(super(t,e),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(mr,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof o=="function"&&(o=o()),o!=null&&this.updateProp(o))}update(t,e){return[this.state.host[this.property],this.updater]}updater(t){const e=this.state.host[this.property];typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&this.updateProp(t)}updateProp(t){this.notify(t).defaultPrevented||(this.state.host[this.property]=t)}notify(t){const e=new CustomEvent(this.eventName,{detail:{value:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(e),e}}),br=t=>e=>{e.preventDefault(),t(e.detail.value)};function ye(t){return P(()=>({current:t}),[])}function yr({render:t}){const e=ur(t),n=fr(e);return{component:e,createContext:n}}const ae={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},ve=t=>(...e)=>({_$litDirective$:t,values:e});let De=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,o){this._$Ct=e,this._$AM=n,this._$Ci=o}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};const tt=(t,e)=>{const n=t._$AN;if(n===void 0)return!1;for(const o of n)o._$AO?.(e,!1),tt(o,e);return!0},Ct=t=>{let e,n;do{if((e=t._$AM)===void 0)break;n=e._$AN,n.delete(t),t=e}while(n?.size===0)},Jo=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(n===void 0)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),xr(e)}};function vr(t){this._$AN!==void 0?(Ct(this),this._$AM=t,Jo(this)):this._$AM=t}function wr(t,e=!1,n=0){const o=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(o))for(let r=n;r<o.length;r++)tt(o[r],!1),Ct(o[r]);else o!=null&&(tt(o,!1),Ct(o));else tt(this,t)}const xr=t=>{t.type==ae.CHILD&&(t._$AP??=wr,t._$AQ??=vr)};class xn extends De{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,n,o){super._$AT(e,n,o),Jo(this),this.isConnected=e._$AU}_$AO(e,n=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),n&&(tt(this,e),Ct(this))}setValue(e){if(Yo(this._$Ct))this._$Ct._$AI(e,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=e,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}const{component:K,createContext:_r}=yr({render:Js}),Sr=G`
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
`,$r=()=>ie,zr=K($r,{styleSheets:[Sr]});customElements.define("cosmoz-spinner",zr);function F(t,e,n){return t?e(t):n?.(t)}const C=t=>t??ie,kr=({slot:t,title:e,className:n,width:o="24",height:s="24",styles:r}={})=>x`
	<svg
		slot=${C(t)}
		class=${`clear-icon ${n??""}`}
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
		width=${o}
		height=${s}
		style=${C(r)}
	>
		${F(e,()=>Ye`<title>${e}</title>`)}
		<path
			d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
		/>
	</svg>
`,Cr=({slot:t,title:e,className:n,width:o="24",height:s="24",styles:r}={})=>x`
	<svg
		slot=${C(t)}
		class=${`help-outline-icon ${n??""}`}
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
		width=${o}
		height=${s}
		style=${C(r)}
	>
		${F(e,()=>Ye`<title>${e}</title>`)}
		<path
			fill="currentColor"
			d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"
		/>
	</svg>
`,Er=({slot:t,title:e,className:n,width:o="24",height:s="24",styles:r}={})=>x`
	<svg
		slot=${C(t)}
		class=${`warning-icon ${n??""}`}
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
		width=${o}
		height=${s}
		style=${C(r)}
	>
		${F(e,()=>Ye`<title>${e}</title>`)}
		<path
			d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
			fill="currentColor"
		/>
	</svg>
`,Ce=ze(class extends $e{update(){return this.state.host}}),Lr={isoBasic:/^\d{4}-\d{2}-\d{2}$/iu},Or=t=>typeof t=="string"&&Lr.isoBasic.test(t)?new Date(`${t}T00:00`):new Date(t),re=t=>{if(t==null)return;if(t instanceof Date&&!isNaN(t.getTime()))return t;if(!(typeof t=="number"||typeof t=="string"))return;const e=Or(t);if(!(e instanceof Date&&isNaN(e.getTime())))return e},we=(t,...e)=>t.flatMap((n,o)=>[n,e[o]??""]).join(""),_n=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},Mr=we`
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
`,Rr=()=>{const t=Ce(),e=S(()=>{t.dispatchEvent(new Event("close")),t.onClose?.()},[]);return M(()=>{const n=i=>{i.preventDefault(),e()},o=t.shadowRoot,s=i=>i.target.value==="cancel"&&n(i),r=i=>!i.defaultPrevented&&i.key==="Escape"&&n(i);return o.addEventListener("click",s),document.addEventListener("keydown",r,!0),()=>{o.removeEventListener("click",s),document.removeEventListener("keydown",r,!0)}},[]),{close:e}},Pr=()=>{const t=Ce(),{manualFocus:e}=t;hn(()=>{!e&&!t.matches(":focus-within")&&(t.setAttribute("tabindex","-1"),t.focus(),t.removeAttribute("tabindex"))},[e])},Tr=(t,e,n)=>{const o=t.width/3,s=t.height/3,r=Math.min(window.innerWidth-2*o,Math.max(-o,e)),i=Math.min(window.innerHeight-2*s,Math.max(-s,n));return{x:r,y:i}},Ar=(t,e,n,o)=>s=>{if(!s.target.closest(e))return;const r=Tr,i=t.getBoundingClientRect(),a=s.clientX-i.x,l=s.clientY-i.y,c=(f,h)=>{const p=f-a,m=h-l,g=r(i,p,m);Object.assign(t.style,{left:g.x+"px",top:g.y+"px",transform:"initial"})},u=f=>c(f.clientX,f.clientY),d=f=>{document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",d)};document.addEventListener("mousemove",u),document.addEventListener("mouseup",d)},Dr=()=>{const t=Ce(),{unmovable:e}=t;M(()=>{if(e)return;const n=t.shadowRoot;if(!n)return;const o=Ar(t,".title");return n.addEventListener("mousedown",o),()=>n.removeEventListener("mousedown",o)},[e])},Fr=()=>{Rr(),Dr(),Pr()},Nr=({title:t,content:e,styles:n,closeable:o=!1})=>{const s=Ce();return x`
		<style>
			${Mr}${n}
		</style>
		<div class="title" part="title">
			${t}
			${F(o,()=>x`
					<button
						class="close"
						@click=${()=>{s.dispatchEvent(new Event("close")),s.onClose?.()}}
					>
						${kr()}
					</button>
				`)}
		</div>
		<div class="content" part="content">${e}</div>
	`},Sn=(t,{observedAttributes:e,styles:n,...o}={})=>K(s=>(Fr(),Nr({title:s.heading||s.title,content:t(s),styles:n,closeable:s.closeable})),{observedAttributes:["title","heading","manual-focus","unmovable","closeable",...e??[]],...o});customElements.define("cosmoz-dialog-loading",Sn(()=>x`
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
		`));function Ir(t){return()=>t}const jr=Ir(),Zo=jr,Et=t=>t,q=(t,...e)=>typeof t=="function"?t(...e):t,k=t=>typeof t=="string",qe=()=>{let t,e;const n=new Promise((o,s)=>{t=o,e=s});return n.resolve=t,n.reject=e,n},Hn=t=>t==null?"":String(t),Vr=(t,e,n)=>{t.forEach(o=>{e[o]&&(n[o]=e[o])})},Br=/###/g,Yn=t=>t&&t.includes("###")?t.replace(Br,"."):t,Un=t=>!t||k(t),nt=(t,e,n)=>{const o=k(e)?e.split("."):e;let s=0;for(;s<o.length-1;){if(Un(t))return{};const r=Yn(o[s]);!t[r]&&n&&(t[r]=new n),Object.prototype.hasOwnProperty.call(t,r)?t=t[r]:t={},++s}return Un(t)?{}:{obj:t,k:Yn(o[s])}},Kn=(t,e,n)=>{const{obj:o,k:s}=nt(t,e,Object);if(o!==void 0||e.length===1){o[s]=n;return}let r=e[e.length-1],i=e.slice(0,e.length-1),a=nt(t,i,Object);for(;a.obj===void 0&&i.length;)r=`${i[i.length-1]}.${r}`,i=i.slice(0,i.length-1),a=nt(t,i,Object),a?.obj&&typeof a.obj[`${a.k}.${r}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${r}`]=n},Wr=(t,e,n,o)=>{const{obj:s,k:r}=nt(t,e,Object);s[r]=s[r]||[],s[r].push(n)},Lt=(t,e)=>{const{obj:n,k:o}=nt(t,e);if(n&&Object.prototype.hasOwnProperty.call(n,o))return n[o]},Hr=(t,e,n)=>{const o=Lt(t,n);return o!==void 0?o:Lt(e,n)},es=(t,e,n)=>{for(const o in e)o!=="__proto__"&&o!=="constructor"&&(Object.prototype.hasOwnProperty.call(t,o)?k(t[o])||t[o]instanceof String||k(e[o])||e[o]instanceof String?n&&(t[o]=e[o]):es(t[o],e[o],n):t[o]=e[o]);return t},ge=t=>t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),Yr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},Ur=t=>k(t)?t.replace(/[&<>"'\/]/g,e=>Yr[e]):t;class Kr{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const n=this.regExpMap.get(e);if(n!==void 0)return n;const o=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,o),this.regExpQueue.push(e),o}}const qr=[" ",",","?","!",";"],Gr=new Kr(20),Xr=(t,e,n)=>{e=e||"",n=n||"";const o=qr.filter(i=>!e.includes(i)&&!n.includes(i));if(o.length===0)return!0;const s=Gr.getRegExp(`(${o.map(i=>i==="?"?"\\?":i).join("|")})`);let r=!s.test(t);if(!r){const i=t.indexOf(n);i>0&&!s.test(t.substring(0,i))&&(r=!0)}return r},fn=(t,e,n=".")=>{if(!t)return;if(t[e])return Object.prototype.hasOwnProperty.call(t,e)?t[e]:void 0;const o=e.split(n);let s=t;for(let r=0;r<o.length;){if(!s||typeof s!="object")return;let i,a="";for(let l=r;l<o.length;++l)if(l!==r&&(a+=n),a+=o[l],i=s[a],i!==void 0){if(["string","number","boolean"].includes(typeof i)&&l<o.length-1)continue;r+=l-r+1;break}s=i}return s},it=t=>t?.replace(/_/g,"-"),Qr={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){console?.[t]?.apply?.(console,e)}};class Ot{constructor(e,n={}){this.init(e,n)}init(e,n={}){this.prefix=n.prefix||"i18next:",this.logger=e||Qr,this.options=n,this.debug=n.debug}log(...e){return this.forward(e,"log","",!0)}warn(...e){return this.forward(e,"warn","",!0)}error(...e){return this.forward(e,"error","")}deprecate(...e){return this.forward(e,"warn","WARNING DEPRECATED: ",!0)}forward(e,n,o,s){return s&&!this.debug?null:(e=e.map(r=>k(r)?r.replace(/[\r\n\x00-\x1F\x7F]/g," "):r),k(e[0])&&(e[0]=`${o}${this.prefix} ${e[0]}`),this.logger[n](e))}create(e){return new Ot(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new Ot(this.logger,e)}}var ue=new Ot;class Vt{constructor(){this.observers={}}on(e,n){return e.split(" ").forEach(o=>{this.observers[o]||(this.observers[o]=new Map);const s=this.observers[o].get(n)||0;this.observers[o].set(n,s+1)}),this}off(e,n){if(this.observers[e]){if(!n){delete this.observers[e];return}this.observers[e].delete(n)}}once(e,n){const o=(...s)=>{n(...s),this.off(e,o)};return this.on(e,o),this}emit(e,...n){this.observers[e]&&Array.from(this.observers[e].entries()).forEach(([s,r])=>{for(let i=0;i<r;i++)s(...n)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(([s,r])=>{for(let i=0;i<r;i++)s(e,...n)})}}class qn extends Vt{constructor(e,n={ns:["translation"],defaultNS:"translation"}){super(),this.data=e||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.includes(e)||this.options.ns.push(e)}removeNamespaces(e){const n=this.options.ns.indexOf(e);n>-1&&this.options.ns.splice(n,1)}getResource(e,n,o,s={}){const r=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,i=s.ignoreJSONStructure!==void 0?s.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;e.includes(".")?a=e.split("."):(a=[e,n],o&&(Array.isArray(o)?a.push(...o):k(o)&&r?a.push(...o.split(r)):a.push(o)));const l=Lt(this.data,a);return!l&&!n&&!o&&e.includes(".")&&(e=a[0],n=a[1],o=a.slice(2).join(".")),l||!i||!k(o)?l:fn(this.data?.[e]?.[n],o,r)}addResource(e,n,o,s,r={silent:!1}){const i=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator;let a=[e,n];o&&(a=a.concat(i?o.split(i):o)),e.includes(".")&&(a=e.split("."),s=n,n=a[1]),this.addNamespaces(n),Kn(this.data,a,s),r.silent||this.emit("added",e,n,o,s)}addResources(e,n,o,s={silent:!1}){for(const r in o)(k(o[r])||Array.isArray(o[r]))&&this.addResource(e,n,r,o[r],{silent:!0});s.silent||this.emit("added",e,n,o)}addResourceBundle(e,n,o,s,r,i={silent:!1,skipCopy:!1}){let a=[e,n];e.includes(".")&&(a=e.split("."),s=o,o=n,n=a[1]),this.addNamespaces(n);let l=Lt(this.data,a)||{};i.skipCopy||(o=JSON.parse(JSON.stringify(o))),s?es(l,o,r):l={...l,...o},Kn(this.data,a,l),i.silent||this.emit("added",e,n,o)}removeResourceBundle(e,n){this.hasResourceBundle(e,n)&&delete this.data[e][n],this.removeNamespaces(n),this.emit("removed",e,n)}hasResourceBundle(e,n){return this.getResource(e,n)!==void 0}getResourceBundle(e,n){return n||(n=this.options.defaultNS),this.getResource(e,n)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const n=this.getDataByLanguage(e);return!!(n&&Object.keys(n)||[]).find(s=>n[s]&&Object.keys(n[s]).length>0)}toJSON(){return this.data}}var ts={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,n,o,s){return t.forEach(r=>{e=this.processors[r]?.process(e,n,o,s)??e}),e}};const ns=Symbol("i18next/PATH_KEY");function Jr(){const t=[],e=Object.create(null);let n;return e.get=(o,s)=>(n?.revoke?.(),s===ns?t:(t.push(s),n=Proxy.revocable(o,e),n.proxy)),Proxy.revocable(Object.create(null),e).proxy}function Ne(t,e){const{[ns]:n}=t(Jr()),o=e?.keySeparator??".",s=e?.nsSeparator??":",r=e?.enableSelector==="strict";if(n.length>1&&s){const i=e?.ns,a=r?Array.isArray(i)?i:i?[i]:null:Array.isArray(i)?i:null;if(a&&(r?a:a.length>1?a.slice(1):[]).includes(n[0]))return`${n[0]}${s}${n.slice(1).join(o)}`}return n.join(o)}const nn=t=>!k(t)&&typeof t!="boolean"&&typeof t!="number";class Mt extends Vt{constructor(e,n={}){super(),Vr(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=ue.create("translator"),this.checkedLoadedFor={}}changeLanguage(e){e&&(this.language=e)}exists(e,n={interpolation:{}}){const o={...n};if(e==null)return!1;const s=this.resolve(e,o);if(s?.res===void 0)return!1;const r=nn(s.res);return!(o.returnObjects===!1&&r)}extractFromKey(e,n){let o=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;o===void 0&&(o=":");const s=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let r=n.ns||this.options.defaultNS||[];const i=o&&e.includes(o),a=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!Xr(e,o,s);if(i&&!a){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:k(r)?[r]:r};const c=e.split(o);(o!==s||o===s&&this.options.ns.includes(c[0]))&&(r=c.shift()),e=c.join(s)}return{key:e,namespaces:k(r)?[r]:r}}translate(e,n,o){let s=typeof n=="object"?{...n}:n;if(typeof s!="object"&&this.options.overloadTranslationOptionHandler&&(s=this.options.overloadTranslationOptionHandler(arguments)),typeof s=="object"&&(s={...s}),s||(s={}),e==null)return"";typeof e=="function"&&(e=Ne(e,{...this.options,...s})),Array.isArray(e)||(e=[String(e)]),e=e.map(V=>typeof V=="function"?Ne(V,{...this.options,...s}):String(V));const r=s.returnDetails!==void 0?s.returnDetails:this.options.returnDetails,i=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,{key:a,namespaces:l}=this.extractFromKey(e[e.length-1],s),c=l[l.length-1];let u=s.nsSeparator!==void 0?s.nsSeparator:this.options.nsSeparator;u===void 0&&(u=":");const d=s.lng||this.language,f=s.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(d?.toLowerCase()==="cimode")return f?r?{res:`${c}${u}${a}`,usedKey:a,exactUsedKey:a,usedLng:d,usedNS:c,usedParams:this.getUsedParamsDetails(s)}:`${c}${u}${a}`:r?{res:a,usedKey:a,exactUsedKey:a,usedLng:d,usedNS:c,usedParams:this.getUsedParamsDetails(s)}:a;const h=this.resolve(e,s);let p=h?.res;const m=h?.usedKey||a,g=h?.exactUsedKey||a,b=["[object Number]","[object Function]","[object RegExp]"],y=s.joinArrays!==void 0?s.joinArrays:this.options.joinArrays,v=!this.i18nFormat||this.i18nFormat.handleAsObject,_=s.count!==void 0&&!k(s.count),$=Mt.hasDefaultValue(s),E=_?this.pluralResolver.getSuffix(d,s.count,s):"",z=s.ordinal&&_?this.pluralResolver.getSuffix(d,s.count,{ordinal:!1}):"",W=_&&!s.ordinal&&s.count===0,O=W&&s[`defaultValue${this.options.pluralSeparator}zero`]||s[`defaultValue${E}`]||s[`defaultValue${z}`]||s.defaultValue;let N=p;v&&!p&&$&&(N=O);const Q=nn(N),X=Object.prototype.toString.apply(N);if(v&&N&&Q&&!b.includes(X)&&!(k(y)&&Array.isArray(N))){if(!s.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const V=this.options.returnedObjectHandler?this.options.returnedObjectHandler(m,N,{...s,ns:l}):`key '${a} (${this.language})' returned an object instead of string.`;return r?(h.res=V,h.usedParams=this.getUsedParamsDetails(s),h):V}if(i){const V=Array.isArray(N),R=V?[]:{},ne=V?g:m;for(const j in N)if(Object.prototype.hasOwnProperty.call(N,j)){const T=`${ne}${i}${j}`;$&&!p?R[j]=this.translate(T,{...s,defaultValue:nn(O)?O[j]:void 0,joinArrays:!1,ns:l}):R[j]=this.translate(T,{...s,joinArrays:!1,ns:l}),R[j]===T&&(R[j]=N[j])}p=R}}else if(v&&k(y)&&Array.isArray(p))p=p.join(y),p&&(p=this.extendTranslation(p,e,s,o));else{let V=!1,R=!1;!this.isValidLookup(p)&&$&&(V=!0,p=O),this.isValidLookup(p)||(R=!0,p=a);const j=(s.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&R?void 0:p,T=$&&O!==p&&this.options.updateMissing;if(R||V||T){if(this.logger.log(T?"updateKey":"missingKey",d,c,_&&!T?`${a}${this.pluralResolver.getSuffix(d,s.count,s)}`:a,T?O:p),i){const I=this.resolve(a,{...s,keySeparator:!1});I&&I.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let H=[];const w=this.languageUtils.getFallbackCodes(this.options.fallbackLng,s.lng||this.language);if(this.options.saveMissingTo==="fallback"&&w&&w[0])for(let I=0;I<w.length;I++)H.push(w[I]);else this.options.saveMissingTo==="all"?H=this.languageUtils.toResolveHierarchy(s.lng||this.language):H.push(s.lng||this.language);const L=(I,se,Ee)=>{const pt=$&&Ee!==p?Ee:j;this.options.missingKeyHandler?this.options.missingKeyHandler(I,c,se,pt,T,s):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(I,c,se,pt,T,s),this.emit("missingKey",I,c,se,p)};this.options.saveMissing&&(this.options.saveMissingPlurals&&_?H.forEach(I=>{const se=this.pluralResolver.getSuffixes(I,s);W&&s[`defaultValue${this.options.pluralSeparator}zero`]&&!se.includes(`${this.options.pluralSeparator}zero`)&&se.push(`${this.options.pluralSeparator}zero`),se.forEach(Ee=>{L([I],a+Ee,s[`defaultValue${Ee}`]||O)})}):L(H,a,O))}p=this.extendTranslation(p,e,s,h,o),R&&p===a&&this.options.appendNamespaceToMissingKey&&(p=`${c}${u}${a}`),(R||V)&&this.options.parseMissingKeyHandler&&(p=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${c}${u}${a}`:a,V?p:void 0,s))}return r?(h.res=p,h.usedParams=this.getUsedParamsDetails(s),h):p}extendTranslation(e,n,o,s,r){if(this.i18nFormat?.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...o},o.lng||this.language||s.usedLng,s.usedNS,s.usedKey,{resolved:s});else if(!o.skipInterpolation){o.interpolation&&this.interpolator.init({...o,interpolation:{...this.options.interpolation,...o.interpolation}});const l=k(e)&&(o?.interpolation?.skipOnVariables!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let c;if(l){const d=e.match(this.interpolator.nestingRegexp);c=d&&d.length}let u=o.replace&&!k(o.replace)?o.replace:o;if(this.options.interpolation.defaultVariables&&(u={...this.options.interpolation.defaultVariables,...u}),e=this.interpolator.interpolate(e,u,o.lng||this.language||s.usedLng,o),l){const d=e.match(this.interpolator.nestingRegexp),f=d&&d.length;c<f&&(o.nest=!1)}!o.lng&&s&&s.res&&(o.lng=this.language||s.usedLng),o.nest!==!1&&(e=this.interpolator.nest(e,(...d)=>r?.[0]===d[0]&&!o.context?(this.logger.warn(`It seems you are nesting recursively key: ${d[0]} in key: ${n[0]}`),null):this.translate(...d,n),o)),o.interpolation&&this.interpolator.reset()}const i=o.postProcess||this.options.postProcess,a=k(i)?[i]:i;return e!=null&&a?.length&&o.applyPostProcessor!==!1&&(e=ts.handle(a,e,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...s,usedParams:this.getUsedParamsDetails(o)},...o}:o,this)),e}resolve(e,n={}){let o,s,r,i,a;return k(e)&&(e=[e]),Array.isArray(e)&&(e=e.map(l=>typeof l=="function"?Ne(l,{...this.options,...n}):l)),e.forEach(l=>{if(this.isValidLookup(o))return;const c=this.extractFromKey(l,n),u=c.key;s=u;let d=c.namespaces;this.options.fallbackNS&&(d=d.concat(this.options.fallbackNS));const f=n.count!==void 0&&!k(n.count),h=f&&!n.ordinal&&n.count===0,p=n.context!==void 0&&(k(n.context)||typeof n.context=="number")&&n.context!=="",m=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);d.forEach(g=>{this.isValidLookup(o)||(a=g,!this.checkedLoadedFor[`${m[0]}-${g}`]&&this.utils?.hasLoadedNamespace&&!this.utils?.hasLoadedNamespace(a)&&(this.checkedLoadedFor[`${m[0]}-${g}`]=!0,this.logger.warn(`key "${s}" for languages "${m.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),m.forEach(b=>{if(this.isValidLookup(o))return;i=b;const y=[u];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(y,u,b,g,n);else{let _;f&&(_=this.pluralResolver.getSuffix(b,n.count,n));const $=`${this.options.pluralSeparator}zero`,E=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(f&&(n.ordinal&&_.startsWith(E)&&y.push(u+_.replace(E,this.options.pluralSeparator)),y.push(u+_),h&&y.push(u+$)),p){const z=`${u}${this.options.contextSeparator||"_"}${n.context}`;y.push(z),f&&(n.ordinal&&_.startsWith(E)&&y.push(z+_.replace(E,this.options.pluralSeparator)),y.push(z+_),h&&y.push(z+$))}}let v;for(;v=y.pop();)this.isValidLookup(o)||(r=v,o=this.getResource(b,g,v,n))}))})}),{res:o,usedKey:s,exactUsedKey:r,usedLng:i,usedNS:a}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,n,o,s={}){return this.i18nFormat?.getResource?this.i18nFormat.getResource(e,n,o,s):this.resourceStore.getResource(e,n,o,s)}getUsedParamsDetails(e={}){const n=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],o=e.replace&&!k(e.replace);let s=o?e.replace:e;if(o&&typeof e.count<"u"&&(s={...s,count:e.count}),this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),!o){s={...s};for(const r of n)delete s[r]}return s}static hasDefaultValue(e){const n="defaultValue";for(const o in e)if(Object.prototype.hasOwnProperty.call(e,o)&&o.startsWith(n)&&e[o]!==void 0)return!0;return!1}}class Gn{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=ue.create("languageUtils"),this.resolveHierarchyCache={}}clearCache(){this.resolveHierarchyCache={}}getScriptPartFromCode(e){if(e=it(e),!e||!e.includes("-"))return null;const n=e.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(e){if(e=it(e),!e||!e.includes("-"))return e;const n=e.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(e){if(k(e)&&e.includes("-")){let n;try{n=Intl.getCanonicalLocales(e)[0]}catch{}return n&&this.options.lowerCaseLng&&(n=n.toLowerCase()),n||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.includes(e)}getBestMatchFromCodes(e){if(!e)return null;let n;return e.forEach(o=>{if(n)return;const s=this.formatLanguageCode(o);(!this.options.supportedLngs||this.isSupportedCode(s))&&(n=s)}),!n&&this.options.supportedLngs&&e.forEach(o=>{if(n)return;const s=this.getScriptPartFromCode(o);if(this.isSupportedCode(s))return n=s;const r=this.getLanguagePartFromCode(o);if(this.isSupportedCode(r))return n=r;n=this.options.supportedLngs.find(i=>i===r?!0:!i.includes("-")&&!r.includes("-")?!1:!!(i.includes("-")&&!r.includes("-")&&i.slice(0,i.indexOf("-"))===r||i.startsWith(r)&&r.length>1))}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(e,n){if(!e)return[];if(typeof e=="function"&&(e=e(n)),k(e)&&(e=[e]),Array.isArray(e))return e;if(!n)return e.default||[];let o=e[n];return o||(o=e[this.getScriptPartFromCode(n)]),o||(o=e[this.formatLanguageCode(n)]),o||(o=e[this.getLanguagePartFromCode(n)]),o||(o=e.default),o||[]}toResolveHierarchy(e,n){const o=this.options.fallbackLng,s=Array.isArray(o)?o.join("|"):o;s!==this._cachedFallbackLng&&(this.resolveHierarchyCache={},this._cachedFallbackLng=s);const r=n===void 0||n===!1||k(n),i=n===void 0&&typeof this.options.fallbackLng=="function",a=k(e)&&r&&!i;let l=null;if(a){let f;n===void 0?f="undefined":n===!1?f="boolean:false":f=`string:${n}`,l=`${e.length}:${e}|${f}`}if(l!==null){const f=this.resolveHierarchyCache[l];if(f!==void 0)return f.slice()}const c=this.getFallbackCodes((n===!1?[]:n)||this.options.fallbackLng||[],e),u=[],d=f=>{f&&(this.isSupportedCode(f)?u.push(f):this.logger.warn(`rejecting language code not found in supportedLngs: ${f}`))};return k(e)&&(e.includes("-")||e.includes("_"))?(this.options.load!=="languageOnly"&&d(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&d(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&d(this.getLanguagePartFromCode(e))):k(e)&&d(this.formatLanguageCode(e)),c.forEach(f=>{u.includes(f)||d(this.formatLanguageCode(f))}),l!==null?(this.resolveHierarchyCache[l]=u,u.slice()):u}}const Xn={zero:0,one:1,two:2,few:3,many:4,other:5},Qn={select:t=>t===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class Zr{constructor(e,n={}){this.languageUtils=e,this.options=n,this.logger=ue.create("pluralResolver"),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(e,n={}){const o=it(e==="dev"?"en":e),s=n.ordinal?"ordinal":"cardinal",r=JSON.stringify({cleanedCode:o,type:s});if(r in this.pluralRulesCache)return this.pluralRulesCache[r];let i;try{i=new Intl.PluralRules(o,{type:s})}catch{if(typeof Intl>"u")return this.logger.error("No Intl support, please use an Intl polyfill!"),Qn;if(!e.match(/-|_/))return Qn;const l=this.languageUtils.getLanguagePartFromCode(e);i=this.getRule(l,n)}return this.pluralRulesCache[r]=i,i}needsPlural(e,n={}){let o=this.getRule(e,n);return o||(o=this.getRule("dev",n)),o?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(e,n,o={}){return this.getSuffixes(e,o).map(s=>`${n}${s}`)}getSuffixes(e,n={}){let o=this.getRule(e,n);return o||(o=this.getRule("dev",n)),o?o.resolvedOptions().pluralCategories.sort((s,r)=>Xn[s]-Xn[r]).map(s=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${s}`):[]}getSuffix(e,n,o={}){const s=this.getRule(e,o);return s?`${this.options.prepend}${o.ordinal?`ordinal${this.options.prepend}`:""}${s.select(n)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",n,o))}}const Jn=(t,e,n,o=".",s=!0)=>{let r=Hr(t,e,n);return!r&&s&&k(n)&&(r=fn(t,n,o),r===void 0&&(r=fn(e,n,o))),r},ei=t=>t.replace(/\$/g,"$$$$");class Zn{constructor(e={}){this.logger=ue.create("interpolator"),this.options=e,this.format=e?.interpolation?.format||(n=>n),this.init(e)}init(e={}){e.interpolation||(e.interpolation={escapeValue:!0});const{escape:n,escapeValue:o,useRawValueToEscape:s,prefix:r,prefixEscaped:i,suffix:a,suffixEscaped:l,formatSeparator:c,unescapeSuffix:u,unescapePrefix:d,nestingPrefix:f,nestingPrefixEscaped:h,nestingSuffix:p,nestingSuffixEscaped:m,nestingOptionsSeparator:g,maxReplaces:b,alwaysFormat:y}=e.interpolation;this.escape=n!==void 0?n:Ur,this.escapeValue=o!==void 0?o:!0,this.useRawValueToEscape=s!==void 0?s:!1,this.prefix=r?ge(r):i||"{{",this.suffix=a?ge(a):l||"}}",this.formatSeparator=c||",",this.unescapePrefix=u?"":d?ge(d):"-",this.unescapeSuffix=this.unescapePrefix?"":u?ge(u):"",this.nestingPrefix=f?ge(f):h||ge("$t("),this.nestingSuffix=p?ge(p):m||ge(")"),this.nestingOptionsSeparator=g||",",this.maxReplaces=b||1e3,this.alwaysFormat=y!==void 0?y:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(n,o)=>n?.source===o?(n.lastIndex=0,n):new RegExp(o,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,n,o,s){let r,i,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=h=>{if(!h.includes(this.formatSeparator)){const b=Jn(n,l,h,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(b,void 0,o,{...s,...n,interpolationkey:h}):b}const p=h.split(this.formatSeparator),m=p.shift().trim(),g=p.join(this.formatSeparator).trim();return this.format(Jn(n,l,m,this.options.keySeparator,this.options.ignoreJSONStructure),g,o,{...s,...n,interpolationkey:m})};this.resetRegExp(),!this.escapeValue&&typeof e=="string"&&/\$t\([^)]*\{[^}]*\{\{/.test(e)&&this.logger.warn("nesting options string contains interpolated variables with escapeValue: false — if any of those values are attacker-controlled they can inject additional nesting options (e.g. redirect lng/ns). Sanitise untrusted input before passing it to t(), or keep escapeValue: true.");const u=s?.missingInterpolationHandler||this.options.missingInterpolationHandler,d=s?.interpolation?.skipOnVariables!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:h=>h},{regex:this.regexp,safeValue:h=>this.escapeValue?this.escape(h):h}].forEach(h=>{for(a=0;r=h.regex.exec(e);){const p=r[1].trim();if(i=c(p),i===void 0)if(typeof u=="function"){const g=u(e,r,s);i=k(g)?g:""}else if(s&&Object.prototype.hasOwnProperty.call(s,p))i="";else if(d){i=r[0];continue}else this.logger.warn(`missed to pass in variable ${p} for interpolating ${e}`),i="";else!k(i)&&!this.useRawValueToEscape&&(i=Hn(i));const m=h.safeValue(i);if(e=e.replace(r[0],ei(m)),d?(h.regex.lastIndex+=m.length,h.regex.lastIndex-=r[0].length):h.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),e}nest(e,n,o={}){let s,r,i;const a=(l,c)=>{const u=this.nestingOptionsSeparator;if(!l.includes(u))return l;const d=l.split(new RegExp(`${ge(u)}[ ]*{`));let f=`{${d[1]}`;l=d[0],f=this.interpolate(f,i);const h=f.match(/'/g),p=f.match(/"/g);((h?.length??0)%2===0&&!p||(p?.length??0)%2!==0)&&(f=f.replace(/'/g,'"'));try{i=JSON.parse(f),c&&(i={...c,...i})}catch(m){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,m),`${l}${u}${f}`}return i.defaultValue&&i.defaultValue.includes(this.prefix)&&delete i.defaultValue,l};for(;s=this.nestingRegexp.exec(e);){let l=[];i={...o},i=i.replace&&!k(i.replace)?i.replace:i,i.applyPostProcessor=!1,delete i.defaultValue;const c=/{.*}/s.test(s[1])?s[1].lastIndexOf("}")+1:s[1].indexOf(this.formatSeparator);if(c!==-1&&(l=s[1].slice(c).split(this.formatSeparator).map(u=>u.trim()).filter(Boolean),s[1]=s[1].slice(0,c)),r=n(a.call(this,s[1].trim(),i),i),r&&s[0]===e&&!k(r))return r;k(r)||(r=Hn(r)),r||(this.logger.warn(`missed to resolve ${s[1]} for nesting ${e}`),r=""),l.length&&(r=l.reduce((u,d)=>this.format(u,d,o.lng,{...o,interpolationkey:s[1].trim()}),r.trim())),e=e.replace(s[0],r),this.regexp.lastIndex=0}return e}}const ti=t=>{let e=t.toLowerCase().trim();const n={};if(t.includes("(")){const o=t.split("(");e=o[0].toLowerCase().trim();const s=o[1].slice(0,-1);e==="currency"&&!s.includes(":")?n.currency||(n.currency=s.trim()):e==="relativetime"&&!s.includes(":")?n.range||(n.range=s.trim()):s.split(";").forEach(i=>{if(i){const[a,...l]=i.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,""),u=a.trim();n[u]||(n[u]=c),c==="false"&&(n[u]=!1),c==="true"&&(n[u]=!0),isNaN(c)||(n[u]=parseInt(c,10))}})}return{formatName:e,formatOptions:n}},eo=t=>{const e={};return(n,o,s)=>{let r=s;s&&s.interpolationkey&&s.formatParams&&s.formatParams[s.interpolationkey]&&s[s.interpolationkey]&&(r={...r,[s.interpolationkey]:void 0});const i=o+JSON.stringify(r);let a=e[i];return a||(a=t(it(o),s),e[i]=a),a(n)}},ni=t=>(e,n,o)=>t(it(n),o)(e);class oi{constructor(e={}){this.logger=ue.create("formatter"),this.options=e,this.init(e)}init(e,n={interpolation:{}}){this.formatSeparator=n.interpolation.formatSeparator||",";const o=n.cacheInBuiltFormats?eo:ni;this.formats={number:o((s,r)=>{const i=new Intl.NumberFormat(s,{...r});return a=>i.format(a)}),currency:o((s,r)=>{const i=new Intl.NumberFormat(s,{...r,style:"currency"});return a=>i.format(a)}),datetime:o((s,r)=>{const i=new Intl.DateTimeFormat(s,{...r});return a=>i.format(a)}),relativetime:o((s,r)=>{const i=new Intl.RelativeTimeFormat(s,{...r});return a=>i.format(a,r.range||"day")}),list:o((s,r)=>{const i=new Intl.ListFormat(s,{...r});return a=>i.format(a)})}}add(e,n){this.formats[e.toLowerCase().trim()]=n}addCached(e,n){this.formats[e.toLowerCase().trim()]=eo(n)}format(e,n,o,s={}){if(!n||e==null)return e;const r=n.split(this.formatSeparator),i=[];for(let l=0;l<r.length;l++){let c=r[l];for(;c.indexOf("(")>-1&&!c.includes(")")&&l+1<r.length;)c=`${c}${this.formatSeparator}${r[++l]}`;i.push(c)}return i.reduce((l,c)=>{const{formatName:u,formatOptions:d}=ti(c);if(this.formats[u]){let f=l;try{const h=s?.formatParams?.[s.interpolationkey]||{},p=h.locale||h.lng||s.locale||s.lng||o;f=this.formats[u](l,p,{...d,...s,...h})}catch(h){this.logger.warn(h)}return f}else this.logger.warn(`there was no format function for ${u}`);return l},e)}}const si=(t,e)=>{t.pending[e]!==void 0&&(delete t.pending[e],t.pendingCount--)};class ri extends Vt{constructor(e,n,o,s={}){super(),this.backend=e,this.store=n,this.services=o,this.languageUtils=o.languageUtils,this.options=s,this.logger=ue.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=s.maxParallelReads||10,this.readingCalls=0,this.maxRetries=s.maxRetries>=0?s.maxRetries:5,this.retryTimeout=s.retryTimeout>=1?s.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(o,s.backend,s)}queueLoad(e,n,o,s){const r={},i={},a={},l={};return e.forEach(c=>{let u=!0;n.forEach(d=>{const f=`${c}|${d}`;!o.reload&&this.store.hasResourceBundle(c,d)?this.state[f]=2:this.state[f]<0||(this.state[f]===1?i[f]===void 0&&(i[f]=!0):(this.state[f]=1,u=!1,i[f]===void 0&&(i[f]=!0),r[f]===void 0&&(r[f]=!0),l[d]===void 0&&(l[d]=!0)))}),u||(a[c]=!0)}),(Object.keys(r).length||Object.keys(i).length)&&this.queue.push({pending:i,pendingCount:Object.keys(i).length,loaded:{},errors:[],callback:s}),{toLoad:Object.keys(r),pending:Object.keys(i),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(e,n,o){const s=e.split("|"),r=s[0],i=s[1];n&&this.emit("failedLoading",r,i,n),!n&&o&&this.store.addResourceBundle(r,i,o,void 0,void 0,{skipCopy:!0}),this.state[e]=n?-1:2,n&&o&&(this.state[e]=0);const a={};this.queue.forEach(l=>{Wr(l.loaded,[r],i),si(l,e),n&&l.errors.push(n),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{a[c]||(a[c]={});const u=l.loaded[c];u.length&&u.forEach(d=>{a[c][d]===void 0&&(a[c][d]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(e,n,o,s=0,r=this.retryTimeout,i){if(!e.length)return i(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:n,fcName:o,tried:s,wait:r,callback:i});return}this.readingCalls++;const a=(c,u)=>{if(this.readingCalls--,this.waitingReads.length>0){const d=this.waitingReads.shift();this.read(d.lng,d.ns,d.fcName,d.tried,d.wait,d.callback)}if(c&&u&&s<this.maxRetries){setTimeout(()=>{this.read(e,n,o,s+1,r*2,i)},r);return}i(c,u)},l=this.backend[o].bind(this.backend);if(l.length===2){try{const c=l(e,n);c&&typeof c.then=="function"?c.then(u=>a(null,u)).catch(a):a(null,c)}catch(c){a(c)}return}return l(e,n,a)}prepareLoading(e,n,o={},s){if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),s&&s();k(e)&&(e=this.languageUtils.toResolveHierarchy(e)),k(n)&&(n=[n]);const r=this.queueLoad(e,n,o,s);if(!r.toLoad.length)return r.pending.length||s(),null;r.toLoad.forEach(i=>{this.loadOne(i)})}load(e,n,o){this.prepareLoading(e,n,{},o)}reload(e,n,o){this.prepareLoading(e,n,{reload:!0},o)}loadOne(e,n=""){const o=e.split("|"),s=o[0],r=o[1];this.read(s,r,"read",void 0,void 0,(i,a)=>{i&&this.logger.warn(`${n}loading namespace ${r} for language ${s} failed`,i),!i&&a&&this.logger.log(`${n}loaded namespace ${r} for language ${s}`,a),this.loaded(e,i,a)})}saveMissing(e,n,o,s,r,i={},a=()=>{}){if(this.services?.utils?.hasLoadedNamespace&&!this.services?.utils?.hasLoadedNamespace(n)){this.logger.warn(`did not save key "${o}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(o==null||o==="")){if(this.backend?.create){const l={...i,isUpdate:r},c=this.backend.create.bind(this.backend);if(c.length<6)try{let u;c.length===5?u=c(e,n,o,s,l):u=c(e,n,o,s),u&&typeof u.then=="function"?u.then(d=>a(null,d)).catch(a):a(null,u)}catch(u){a(u)}else c(e,n,o,s,a,l)}!e||!e[0]||this.store.addResource(e[0],n,o,s)}}}const on=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",enableSelector:!1,partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:t=>{let e={};if(typeof t[1]=="object"&&(e=t[1]),k(t[1])&&(e.defaultValue=t[1]),k(t[2])&&(e.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const n=t[3]||t[2];Object.keys(n).forEach(o=>{e[o]=n[o]})}return e},interpolation:{escapeValue:!0,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),to=t=>(k(t.ns)&&(t.ns=[t.ns]),k(t.fallbackLng)&&(t.fallbackLng=[t.fallbackLng]),k(t.fallbackNS)&&(t.fallbackNS=[t.fallbackNS]),t.supportedLngs&&!t.supportedLngs.includes("cimode")&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),t),mt=()=>{},ii=t=>{Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(n=>{typeof t[n]=="function"&&(t[n]=t[n].bind(t))})};class ot extends Vt{constructor(e={},n){if(super(),this.options=to(e),this.services={},this.logger=ue,this.modules={external:[]},ii(this),n&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,n),this;setTimeout(()=>{this.init(e,n)},0)}}init(e={},n){this.isInitializing=!0,typeof e=="function"&&(n=e,e={}),e.defaultNS==null&&e.ns&&(k(e.ns)?e.defaultNS=e.ns:e.ns.includes("translation")||(e.defaultNS=e.ns[0]));const o=on();this.options={...o,...this.options,...to(e)},this.options.interpolation={...o.interpolation,...this.options.interpolation},e.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=e.keySeparator),e.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=e.nsSeparator),typeof this.options.overloadTranslationOptionHandler!="function"&&(this.options.overloadTranslationOptionHandler=o.overloadTranslationOptionHandler);const s=c=>c?typeof c=="function"?new c:c:null;if(!this.options.isClone){this.modules.logger?ue.init(s(this.modules.logger),this.options):ue.init(null,this.options);let c;this.modules.formatter?c=this.modules.formatter:c=oi;const u=new Gn(this.options);this.store=new qn(this.options.resources,this.options);const d=this.services;d.logger=ue,d.resourceStore=this.store,d.languageUtils=u,d.pluralResolver=new Zr(u,{prepend:this.options.pluralSeparator}),c&&(d.formatter=s(c),d.formatter.init&&d.formatter.init(d,this.options),this.options.interpolation.format=d.formatter.format.bind(d.formatter)),d.interpolator=new Zn(this.options),d.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},d.backendConnector=new ri(s(this.modules.backend),d.resourceStore,d,this.options),d.backendConnector.on("*",(f,...h)=>{this.emit(f,...h)}),this.modules.languageDetector&&(d.languageDetector=s(this.modules.languageDetector),d.languageDetector.init&&d.languageDetector.init(d,this.options.detection,this.options)),this.modules.i18nFormat&&(d.i18nFormat=s(this.modules.i18nFormat),d.i18nFormat.init&&d.i18nFormat.init(this)),this.translator=new Mt(this.services,this.options),this.translator.on("*",(f,...h)=>{this.emit(f,...h)}),this.modules.external.forEach(f=>{f.init&&f.init(this)})}if(this.format=this.options.interpolation.format,n||(n=mt),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const c=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);c.length>0&&c[0]!=="dev"&&(this.options.lng=c[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(c=>{this[c]=(...u)=>this.store[c](...u)}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(c=>{this[c]=(...u)=>(this.store[c](...u),this)});const a=qe(),l=()=>{const c=(u,d)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),a.resolve(d),n(u,d)};if((this.languages||this.isLanguageChangingTo)&&!this.isInitialized)return c(null,this.t.bind(this));this.changeLanguage(this.options.lng,c)};return this.options.resources||!this.options.initAsync?l():setTimeout(l,0),a}loadResources(e,n=mt){let o=n;const s=k(e)?e:this.language;if(typeof e=="function"&&(o=e),!this.options.resources||this.options.partialBundledLanguages){if(s?.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return o();const r=[],i=a=>{if(!a||a==="cimode")return;this.services.languageUtils.toResolveHierarchy(a).forEach(c=>{c!=="cimode"&&(r.includes(c)||r.push(c))})};s?i(s):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>i(l)),this.options.preload?.forEach?.(a=>i(a)),this.services.backendConnector.load(r,this.options.ns,a=>{!a&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),o(a)})}else o(null)}reloadResources(e,n,o){const s=qe();return typeof e=="function"&&(o=e,e=void 0),typeof n=="function"&&(o=n,n=void 0),e||(e=this.languages),n||(n=this.options.ns),o||(o=mt),this.services.backendConnector.reload(e,n,r=>{s.resolve(),o(r)}),s}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&ts.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!["cimode","dev"].includes(e)){for(let n=0;n<this.languages.length;n++){const o=this.languages[n];if(!["cimode","dev"].includes(o)&&this.store.hasLanguageSomeTranslations(o)){this.resolvedLanguage=o;break}}!this.resolvedLanguage&&!this.languages.includes(e)&&this.store.hasLanguageSomeTranslations(e)&&(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,n){this.isLanguageChangingTo=e;const o=qe();this.emit("languageChanging",e);const s=a=>{this.language=a,this.languages=this.services.languageUtils.toResolveHierarchy(a),this.resolvedLanguage=void 0,this.setResolvedLanguage(a)},r=(a,l)=>{l?this.isLanguageChangingTo===e&&(s(l),this.translator.changeLanguage(l),this.isLanguageChangingTo=void 0,this.emit("languageChanged",l),this.logger.log("languageChanged",l)):this.isLanguageChangingTo=void 0,o.resolve((...c)=>this.t(...c)),n&&n(a,(...c)=>this.t(...c))},i=a=>{!e&&!a&&this.services.languageDetector&&(a=[]);const l=k(a)?a:a&&a[0],c=this.store.hasLanguageSomeTranslations(l)?l:this.services.languageUtils.getBestMatchFromCodes(k(a)?[a]:a);c&&(this.language||s(c),this.translator.language||this.translator.changeLanguage(c),this.services.languageDetector?.cacheUserLanguage?.(c)),this.loadResources(c,u=>{r(u,c)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?i(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(i):this.services.languageDetector.detect(i):i(e),o}getFixedT(e,n,o,s){const r=s?.scopeNs,i=(a,l,...c)=>{let u;typeof l!="object"?u=this.options.overloadTranslationOptionHandler([a,l].concat(c)):u={...l},u.lng=u.lng||i.lng,u.lngs=u.lngs||i.lngs;const d=u.ns!==void 0&&u.ns!==null;u.ns=u.ns||i.ns,u.keyPrefix!==""&&(u.keyPrefix=u.keyPrefix||o||i.keyPrefix);const f={...this.options,...u};Array.isArray(r)&&!d&&(f.ns=r),typeof u.keyPrefix=="function"&&(u.keyPrefix=Ne(u.keyPrefix,f));const h=this.options.keySeparator||".";let p;return u.keyPrefix&&Array.isArray(a)?p=a.map(m=>(typeof m=="function"&&(m=Ne(m,f)),`${u.keyPrefix}${h}${m}`)):(typeof a=="function"&&(a=Ne(a,f)),p=u.keyPrefix?`${u.keyPrefix}${h}${a}`:a),this.t(p,u)};return k(e)?i.lng=e:i.lngs=e,i.ns=n,i.keyPrefix=o,i}t(...e){return this.translator?.translate(...e)}exists(...e){return this.translator?.exists(...e)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e,n={}){if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const o=n.lng||this.resolvedLanguage||this.languages[0],s=this.options?this.options.fallbackLng:!1,r=this.languages[this.languages.length-1];if(o.toLowerCase()==="cimode")return!0;const i=(a,l)=>{const c=this.services.backendConnector.state[`${a}|${l}`];return c===-1||c===0||c===2};if(n.precheck){const a=n.precheck(this,i);if(a!==void 0)return a}return!!(this.hasResourceBundle(o,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||i(o,e)&&(!s||i(r,e)))}loadNamespaces(e,n){const o=qe();return this.options.ns?(k(e)&&(e=[e]),e.forEach(s=>{this.options.ns.includes(s)||this.options.ns.push(s)}),this.loadResources(s=>{o.resolve(),n&&n(s)}),o):(n&&n(),Promise.resolve())}loadLanguages(e,n){const o=qe();k(e)&&(e=[e]);const s=this.options.preload||[],r=e.filter(i=>!s.includes(i)&&this.services.languageUtils.isSupportedCode(i));return r.length?(this.options.preload=s.concat(r),this.loadResources(i=>{o.resolve(),n&&n(i)}),o):(n&&n(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language)),!e)return"rtl";try{const s=new Intl.Locale(e);if(s&&s.getTextInfo){const r=s.getTextInfo();if(r&&r.direction)return r.direction}}catch{}const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],o=this.services?.languageUtils||new Gn(on());return e.toLowerCase().indexOf("-latn")>1?"ltr":n.includes(o.getLanguagePartFromCode(e))||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(e={},n){const o=new ot(e,n);return o.createInstance=ot.createInstance,o}cloneInstance(e={},n=mt){const o=e.forkResourceStore;o&&delete e.forkResourceStore;const s={...this.options,...e,isClone:!0},r=new ot(s);if((e.debug!==void 0||e.prefix!==void 0)&&(r.logger=r.logger.clone(e)),["store","services","language"].forEach(a=>{r[a]=this[a]}),r.services={...this.services},r.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},o){const a=Object.keys(this.store.data).reduce((l,c)=>(l[c]={...this.store.data[c]},l[c]=Object.keys(l[c]).reduce((u,d)=>(u[d]={...l[c][d]},u),l[c]),l),{});r.store=new qn(a,s),r.services.resourceStore=r.store}if(e.interpolation){const l={...on().interpolation,...this.options.interpolation,...e.interpolation},c={...s,interpolation:l};r.services.interpolator=new Zn(c)}return r.translator=new Mt(r.services,s),r.translator.on("*",(a,...l)=>{r.emit(a,...l)}),r.init(s,n),r.translator.options=s,r.translator.backendConnector.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},r}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const te=ot.createInstance();te.createInstance;te.dir;te.init;te.loadResources;te.reloadResources;te.use;te.changeLanguage;te.getFixedT;const D=te.t;te.exists;te.setDefaultNamespace;te.hasLoadedNamespace;te.loadNamespaces;te.loadLanguages;class ai{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}let li=class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}};const no=t=>!Zs(t)&&typeof t.then=="function",oo=1073741823;let ci=class extends xn{constructor(){super(...arguments),this._$Cwt=oo,this._$Cbt=[],this._$CK=new ai(this),this._$CX=new li}render(...e){return e.find(n=>!no(n))??J}update(e,n){const o=this._$Cbt;let s=o.length;this._$Cbt=n;const r=this._$CK,i=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<n.length&&!(a>this._$Cwt);a++){const l=n[a];if(!no(l))return this._$Cwt=a,l;a<s&&l===o[a]||(this._$Cwt=oo,s=0,Promise.resolve(l).then(async c=>{for(;i.get();)await i.get();const u=r.deref();if(u!==void 0){const d=u._$Cbt.indexOf(l);d>-1&&d<u._$Cwt&&(u._$Cwt=d,u.setValue(c))}}))}return J}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const Rt=ve(ci);const so=(t,e,n)=>{const o=new Map;for(let s=e;s<=n;s++)o.set(t[s],s);return o},_e=ve(class extends De{constructor(t){if(super(t),t.type!==ae.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,n){let o;n===void 0?n=e:e!==void 0&&(o=e);const s=[],r=[];let i=0;for(const a of t)s[i]=o?o(a,i):i,r[i]=n(a,i),i++;return{values:r,keys:s}}render(t,e,n){return this.dt(t,e,n).values}update(t,[e,n,o]){const s=er(t),{values:r,keys:i}=this.dt(e,n,o);if(!Array.isArray(s))return this.ut=i,r;const a=this.ut??=[],l=[];let c,u,d=0,f=s.length-1,h=0,p=r.length-1;for(;d<=f&&h<=p;)if(s[d]===null)d++;else if(s[f]===null)f--;else if(a[d]===i[h])l[h]=Le(s[d],r[h]),d++,h++;else if(a[f]===i[p])l[p]=Le(s[f],r[p]),f--,p--;else if(a[d]===i[p])l[p]=Le(s[d],r[p]),Ke(t,l[p+1],s[d]),d++,p--;else if(a[f]===i[h])l[h]=Le(s[f],r[h]),Ke(t,s[d],s[f]),f--,h++;else if(c===void 0&&(c=so(i,h,p),u=so(a,d,f)),c.has(a[d]))if(c.has(a[f])){const m=u.get(i[h]),g=m!==void 0?s[m]:null;if(g===null){const b=Ke(t,s[d]);Le(b,r[h]),l[h]=b}else l[h]=Le(g,r[h]),Ke(t,s[d],g),s[m]=null;h++}else en(s[f]),f--;else en(s[d]),d++;for(;h<=p;){const m=Ke(t,l[p+1]);Le(m,r[h]),l[h++]=m}for(;d<=f;){const m=s[d++];m!==null&&en(m)}return this.ut=i,Uo(t,l),J}}),ui=t=>typeof t=="object"&&t!==null&&Symbol.iterator in t;function be(t){return t==null?[]:Array.isArray(t)?t:typeof t=="string"?[t]:ui(t)?Array.from(t):[t]}const sn=(t,e=Et)=>n=>{const o=be(t).map(e);return be(n).filter(s=>!o.includes(e(s)))};function _t(t){return t?e=>typeof e=="object"&&e!==null?e[t]:e:Et}const di=t=>{const e=_t(t);return n=>typeof n=="string"?n:e(n)?.toString()||""},hi=t=>e=>{const n={};for(const o in e)t.includes(o)&&(n[o]=e[o]);return n};function ro(t,e,...n){return t?t(e,...n):e}const dt=ve(class extends De{constructor(t){if(super(t),t.type!==ae.PROPERTY&&t.type!==ae.ATTRIBUTE&&t.type!==ae.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Yo(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===J||e===ie)return e;const n=t.element,o=t.name;if(t.type===ae.PROPERTY){if(e===n[o])return J}else if(t.type===ae.BOOLEAN_ATTRIBUTE){if(!!e===n.hasAttribute(o))return J}else if(t.type===ae.ATTRIBUTE&&n.getAttribute(o)===e+"")return J;return Uo(t),e}}),rn=new WeakMap,Ve=ve(class extends xn{render(t){return ie}update(t,[e]){const n=e!==this.G;return n&&this.G!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),ie}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let n=rn.get(e);n===void 0&&(n=new WeakMap,rn.set(e,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?rn.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),os=(t,{label:e,invalid:n,errorMessage:o})=>x`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${t}
				${F(e,()=>x`<label for="input" part="label">${e}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${F(n&&o,()=>x`<div class="error" part="error">${o}</div>`)}
	`,ss=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],io=we`
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
`,rs=we`
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
		cursor: text;
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
		cursor: text;
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
		-moz-appearance: textfield;
		appearance: textfield;
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
		${io}
	}
	@container style(--focused: focused) {
		${io}
	}
`,fi=t=>P(()=>{if(t==null)return;const e=new RegExp(t,"u");return n=>{!n.defaultPrevented&&n.data&&!e.test(n.data)&&n.preventDefault()}},[t]),pi=ze(class extends $e{values;constructor(t,e,n,o){super(t,e),Object.assign(e.host,n),this.values=o}update(t,e){this.hasChanged(e)&&(this.values=e,Object.assign(this.state.host,t))}hasChanged(t=[]){return t.some((e,n)=>this.values[n]!==e)}}),gi=/([A-Z])/gu,ao=(t,e,n)=>{t[e]=n,t.dispatchEvent(new CustomEvent(e.replace(gi,"-$1").toLowerCase()+"-changed",{detail:{value:n}}))},is=t=>{const e=ye(void 0),n=S(l=>e.current=l,[]),o=t.shadowRoot,s=S(l=>t.dispatchEvent(new Event(l.type,{bubbles:l.bubbles})),[]),r=S(l=>ao(t,"value",l.target.value),[]),i=S(l=>ao(t,"focused",l.type==="focus"),[]),a=S(()=>{const l=e.current?.checkValidity();return t.toggleAttribute("invalid",!l),l},[]);return pi({validate:a},[a]),M(()=>{const l=c=>{c.composedPath()[0]?.closest?.("input, textarea")||(c.preventDefault(),e.current?.focus())};return o.addEventListener("mousedown",l),()=>o.removeEventListener("mousedown",l)},[]),{onChange:s,onFocus:i,onInput:r,onRef:n}},mi=({placeholder:t,noLabelFloat:e,label:n})=>(e?n:void 0)||t||" ",bi=(t,e)=>e??(t==="date"?"9999-12-31":void 0),yi=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...ss],vi=t=>{const{type:e="text",pattern:n,allowedPattern:o,autocomplete:s,value:r,readonly:i,disabled:a,min:l,max:c,step:u,maxlength:d}=t,{onChange:f,onFocus:h,onInput:p,onRef:m}=is(t),g=fi(o);return os(x`
			<input
				${Ve(m)}
				style="--chars: ${r?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${e}
				pattern=${C(n)}
				autocomplete=${C(s)}
				placeholder=${mi(t)}
				?readonly=${i}
				?aria-disabled=${a}
				?disabled=${a}
				.value=${dt(r??"")}
				maxlength=${C(d)}
				@beforeinput=${g}
				@input=${p}
				@change=${f}
				@focus=${h}
				@blur=${h}
				min=${C(l)}
				max=${C(bi(e,c))}
				step=${C(u)}
			/>
		`,t)};customElements.define("cosmoz-input",K(vi,{observedAttributes:yi,styleSheets:[jt(rs)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const lo=t=>{t.style.height="",t.style.height=`${t.scrollHeight}px`},wi=(t,e=0)=>{if(e>0){const n=t.getAttribute("rows")??"",o=t.style.height;t.style.height="",t.setAttribute("rows",e),t.style.maxHeight=t.getBoundingClientRect().height+"px",t.style.height=o,t.setAttribute("rows",n)}},xi=t=>{const{value:e,maxRows:n}=t,o=P(()=>()=>t.shadowRoot.querySelector("#input"),[]);M(()=>wi(o(),n),[n,o]),M(()=>lo(o()),[o,e]),M(()=>{const s=o(),r=new ResizeObserver(()=>requestAnimationFrame(()=>lo(s)));return r.observe(s),()=>r.unobserve(s)},[o])},_i=["rows","placeholder",...ss],Si=t=>{const{autocomplete:e,value:n,placeholder:o,readonly:s,disabled:r,rows:i,cols:a,maxlength:l}=t,{onChange:c,onFocus:u,onInput:d,onRef:f}=is(t);return xi(t),os(x`
			<textarea id="input" part="input"
				${Ve(f)}
				autocomplete=${C(e)}
				placeholder=${o||" "}
				rows=${i??1} cols=${C(a)}
				?readonly=${s} ?aria-disabled=${r} ?disabled=${r}
				.value=${dt(n??"")} maxlength=${C(l)} @input=${d}
				@change=${c} @focus=${u} @blur=${u}>`,t)};customElements.define("cosmoz-textarea",K(Si,{observedAttributes:_i,styleSheets:[jt(rs)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const $i=t=>{const{label:e,value:n,disabled:o,error:s}=t,r=S(i=>t.dispatchEvent(new CustomEvent("change",{detail:i.target.checked})),[]);return x`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${dt(!!n)}
			?disabled=${o}
			@change=${r}
		/>
		${F(e,()=>x`<label for="toggle">${e}</label>`)}
		<slot name="suffix"></slot>
		${F(s,i=>x`<div class="failure">${i}</div>`)} `},zi=G`
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
`,ki=G`
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
`;customElements.define("cosmoz-toggle",K($i,{styleSheets:[ki,zi],observedAttributes:["disabled"]}));const Ci=t=>{if(!t||t===1/0)return;if(typeof t=="number")return t;const e=parseFloat(t.replace(/[\s]/gu,"").replace(/^−/gu,"-").replace(/[,.]/gu,".").replace(/[.](?=.*[.])/gu,""));if(!isNaN(e))return e},Ei=/^[0-9.,e-]+$/u,Li={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Oi=(t,e,n)=>{let o;const s=Li[t];return typeof s=="string"?o=s:e===1?o=s.one:o=s.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+o:o+" ago":o};function an(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const Mi={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Ri={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Pi={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ti={date:an({formats:Mi,defaultWidth:"full"}),time:an({formats:Ri,defaultWidth:"full"}),dateTime:an({formats:Pi,defaultWidth:"full"})},Ai={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Di=(t,e,n,o)=>Ai[t];function Ge(t){return(e,n)=>{const o=n?.context?String(n.context):"standalone";let s;if(o==="formatting"&&t.formattingValues){const i=t.defaultFormattingWidth||t.defaultWidth,a=n?.width?String(n.width):i;s=t.formattingValues[a]||t.formattingValues[i]}else{const i=t.defaultWidth,a=n?.width?String(n.width):t.defaultWidth;s=t.values[a]||t.values[i]}const r=t.argumentCallback?t.argumentCallback(e):e;return s[r]}}const Fi={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Ni={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Ii={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},ji={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Vi={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Bi={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Wi=(t,e)=>{const n=Number(t),o=n%100;if(o>20||o<10)switch(o%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},Hi={ordinalNumber:Wi,era:Ge({values:Fi,defaultWidth:"wide"}),quarter:Ge({values:Ni,defaultWidth:"wide",argumentCallback:t=>t-1}),month:Ge({values:Ii,defaultWidth:"wide"}),day:Ge({values:ji,defaultWidth:"wide"}),dayPeriod:Ge({values:Vi,defaultWidth:"wide",formattingValues:Bi,defaultFormattingWidth:"wide"})};function Xe(t){return(e,n={})=>{const o=n.width,s=o&&t.matchPatterns[o]||t.matchPatterns[t.defaultMatchWidth],r=e.match(s);if(!r)return null;const i=r[0],a=o&&t.parsePatterns[o]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(a)?Ui(a,d=>d.test(i)):Yi(a,d=>d.test(i));let c;c=t.valueCallback?t.valueCallback(l):l,c=n.valueCallback?n.valueCallback(c):c;const u=e.slice(i.length);return{value:c,rest:u}}}function Yi(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function Ui(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function Ki(t){return(e,n={})=>{const o=e.match(t.matchPattern);if(!o)return null;const s=o[0],r=e.match(t.parsePattern);if(!r)return null;let i=t.valueCallback?t.valueCallback(r[0]):r[0];i=n.valueCallback?n.valueCallback(i):i;const a=e.slice(s.length);return{value:i,rest:a}}}const qi=/^(\d+)(th|st|nd|rd)?/i,Gi=/\d+/i,Xi={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Qi={any:[/^b/i,/^(a|c)/i]},Ji={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Zi={any:[/1/i,/2/i,/3/i,/4/i]},ea={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},ta={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},na={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},oa={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},sa={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},ra={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},ia={ordinalNumber:Ki({matchPattern:qi,parsePattern:Gi,valueCallback:t=>parseInt(t,10)}),era:Xe({matchPatterns:Xi,defaultMatchWidth:"wide",parsePatterns:Qi,defaultParseWidth:"any"}),quarter:Xe({matchPatterns:Ji,defaultMatchWidth:"wide",parsePatterns:Zi,defaultParseWidth:"any",valueCallback:t=>t+1}),month:Xe({matchPatterns:ea,defaultMatchWidth:"wide",parsePatterns:ta,defaultParseWidth:"any"}),day:Xe({matchPatterns:na,defaultMatchWidth:"wide",parsePatterns:oa,defaultParseWidth:"any"}),dayPeriod:Xe({matchPatterns:sa,defaultMatchWidth:"any",parsePatterns:ra,defaultParseWidth:"any"})},aa={code:"en-US",formatDistance:Oi,formatLong:Ti,formatRelative:Di,localize:Hi,match:ia,options:{weekStartsOn:0,firstWeekContainsDate:1}};let la={};function Bt(){return la}const as=6048e5,ca=864e5,co=Symbol.for("constructDateFrom");function ee(t,e){return typeof t=="function"?t(e):t&&typeof t=="object"&&co in t?t[co](e):t instanceof Date?new t.constructor(e):new Date(e)}function B(t,e){return ee(e||t,t)}function uo(t){const e=B(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function $n(t,...e){const n=ee.bind(null,e.find(o=>typeof o=="object"));return e.map(n)}function Pt(t,e){const n=B(t,e?.in);return n.setHours(0,0,0,0),n}function ua(t,e,n){const[o,s]=$n(n?.in,t,e),r=Pt(o),i=Pt(s),a=+r-uo(r),l=+i-uo(i);return Math.round((a-l)/ca)}function ls(t,e){const n=B(t,e?.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}function da(t,e){const n=B(t,e?.in);return ua(n,ls(n))+1}function at(t,e){const n=Bt(),o=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,s=B(t,e?.in),r=s.getDay(),i=(r<o?7:0)+r-o;return s.setDate(s.getDate()-i),s.setHours(0,0,0,0),s}function Tt(t,e){return at(t,{...e,weekStartsOn:1})}function cs(t,e){const n=B(t,e?.in),o=n.getFullYear(),s=ee(n,0);s.setFullYear(o+1,0,4),s.setHours(0,0,0,0);const r=Tt(s),i=ee(n,0);i.setFullYear(o,0,4),i.setHours(0,0,0,0);const a=Tt(i);return n.getTime()>=r.getTime()?o+1:n.getTime()>=a.getTime()?o:o-1}function ha(t,e){const n=cs(t,e),o=ee(t,0);return o.setFullYear(n,0,4),o.setHours(0,0,0,0),Tt(o)}function fa(t,e){const n=B(t,e?.in),o=+Tt(n)-+ha(n);return Math.round(o/as)+1}function us(t,e){const n=B(t,e?.in),o=n.getFullYear(),s=Bt(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??s.firstWeekContainsDate??s.locale?.options?.firstWeekContainsDate??1,i=ee(e?.in||t,0);i.setFullYear(o+1,0,r),i.setHours(0,0,0,0);const a=at(i,e),l=ee(e?.in||t,0);l.setFullYear(o,0,r),l.setHours(0,0,0,0);const c=at(l,e);return+n>=+a?o+1:+n>=+c?o:o-1}function pa(t,e){const n=Bt(),o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,s=us(t,e),r=ee(e?.in||t,0);return r.setFullYear(s,0,o),r.setHours(0,0,0,0),at(r,e)}function ga(t,e){const n=B(t,e?.in),o=+at(n,e)-+pa(n,e);return Math.round(o/as)+1}function A(t,e){const n=t<0?"-":"",o=Math.abs(t).toString().padStart(e,"0");return n+o}const xe={y(t,e){const n=t.getFullYear(),o=n>0?n:1-n;return A(e==="yy"?o%100:o,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):A(n+1,2)},d(t,e){return A(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return n==="am"?"a.m.":"p.m."}},h(t,e){return A(t.getHours()%12||12,e.length)},H(t,e){return A(t.getHours(),e.length)},m(t,e){return A(t.getMinutes(),e.length)},s(t,e){return A(t.getSeconds(),e.length)},S(t,e){const n=e.length,o=t.getMilliseconds(),s=Math.trunc(o*Math.pow(10,n-3));return A(s,e.length)}},Fe={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},ho={G:function(t,e,n){const o=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(o,{width:"abbreviated"});case"GGGGG":return n.era(o,{width:"narrow"});default:return n.era(o,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const o=t.getFullYear(),s=o>0?o:1-o;return n.ordinalNumber(s,{unit:"year"})}return xe.y(t,e)},Y:function(t,e,n,o){const s=us(t,o),r=s>0?s:1-s;if(e==="YY"){const i=r%100;return A(i,2)}return e==="Yo"?n.ordinalNumber(r,{unit:"year"}):A(r,e.length)},R:function(t,e){const n=cs(t);return A(n,e.length)},u:function(t,e){const n=t.getFullYear();return A(n,e.length)},Q:function(t,e,n){const o=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(o);case"QQ":return A(o,2);case"Qo":return n.ordinalNumber(o,{unit:"quarter"});case"QQQ":return n.quarter(o,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(o,{width:"narrow",context:"formatting"});default:return n.quarter(o,{width:"wide",context:"formatting"})}},q:function(t,e,n){const o=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(o);case"qq":return A(o,2);case"qo":return n.ordinalNumber(o,{unit:"quarter"});case"qqq":return n.quarter(o,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(o,{width:"narrow",context:"standalone"});default:return n.quarter(o,{width:"wide",context:"standalone"})}},M:function(t,e,n){const o=t.getMonth();switch(e){case"M":case"MM":return xe.M(t,e);case"Mo":return n.ordinalNumber(o+1,{unit:"month"});case"MMM":return n.month(o,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(o,{width:"narrow",context:"formatting"});default:return n.month(o,{width:"wide",context:"formatting"})}},L:function(t,e,n){const o=t.getMonth();switch(e){case"L":return String(o+1);case"LL":return A(o+1,2);case"Lo":return n.ordinalNumber(o+1,{unit:"month"});case"LLL":return n.month(o,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(o,{width:"narrow",context:"standalone"});default:return n.month(o,{width:"wide",context:"standalone"})}},w:function(t,e,n,o){const s=ga(t,o);return e==="wo"?n.ordinalNumber(s,{unit:"week"}):A(s,e.length)},I:function(t,e,n){const o=fa(t);return e==="Io"?n.ordinalNumber(o,{unit:"week"}):A(o,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):xe.d(t,e)},D:function(t,e,n){const o=da(t);return e==="Do"?n.ordinalNumber(o,{unit:"dayOfYear"}):A(o,e.length)},E:function(t,e,n){const o=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(o,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(o,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(o,{width:"short",context:"formatting"});default:return n.day(o,{width:"wide",context:"formatting"})}},e:function(t,e,n,o){const s=t.getDay(),r=(s-o.weekStartsOn+8)%7||7;switch(e){case"e":return String(r);case"ee":return A(r,2);case"eo":return n.ordinalNumber(r,{unit:"day"});case"eee":return n.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(s,{width:"short",context:"formatting"});default:return n.day(s,{width:"wide",context:"formatting"})}},c:function(t,e,n,o){const s=t.getDay(),r=(s-o.weekStartsOn+8)%7||7;switch(e){case"c":return String(r);case"cc":return A(r,e.length);case"co":return n.ordinalNumber(r,{unit:"day"});case"ccc":return n.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(s,{width:"narrow",context:"standalone"});case"cccccc":return n.day(s,{width:"short",context:"standalone"});default:return n.day(s,{width:"wide",context:"standalone"})}},i:function(t,e,n){const o=t.getDay(),s=o===0?7:o;switch(e){case"i":return String(s);case"ii":return A(s,e.length);case"io":return n.ordinalNumber(s,{unit:"day"});case"iii":return n.day(o,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(o,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(o,{width:"short",context:"formatting"});default:return n.day(o,{width:"wide",context:"formatting"})}},a:function(t,e,n){const s=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(s,{width:"narrow",context:"formatting"});default:return n.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(t,e,n){const o=t.getHours();let s;switch(o===12?s=Fe.noon:o===0?s=Fe.midnight:s=o/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(s,{width:"narrow",context:"formatting"});default:return n.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(t,e,n){const o=t.getHours();let s;switch(o>=17?s=Fe.evening:o>=12?s=Fe.afternoon:o>=4?s=Fe.morning:s=Fe.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(s,{width:"narrow",context:"formatting"});default:return n.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let o=t.getHours()%12;return o===0&&(o=12),n.ordinalNumber(o,{unit:"hour"})}return xe.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):xe.H(t,e)},K:function(t,e,n){const o=t.getHours()%12;return e==="Ko"?n.ordinalNumber(o,{unit:"hour"}):A(o,e.length)},k:function(t,e,n){let o=t.getHours();return o===0&&(o=24),e==="ko"?n.ordinalNumber(o,{unit:"hour"}):A(o,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):xe.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):xe.s(t,e)},S:function(t,e){return xe.S(t,e)},X:function(t,e,n){const o=t.getTimezoneOffset();if(o===0)return"Z";switch(e){case"X":return po(o);case"XXXX":case"XX":return Oe(o);default:return Oe(o,":")}},x:function(t,e,n){const o=t.getTimezoneOffset();switch(e){case"x":return po(o);case"xxxx":case"xx":return Oe(o);default:return Oe(o,":")}},O:function(t,e,n){const o=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+fo(o,":");default:return"GMT"+Oe(o,":")}},z:function(t,e,n){const o=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+fo(o,":");default:return"GMT"+Oe(o,":")}},t:function(t,e,n){const o=Math.trunc(+t/1e3);return A(o,e.length)},T:function(t,e,n){return A(+t,e.length)}};function fo(t,e=""){const n=t>0?"-":"+",o=Math.abs(t),s=Math.trunc(o/60),r=o%60;return r===0?n+String(s):n+String(s)+e+A(r,2)}function po(t,e){return t%60===0?(t>0?"-":"+")+A(Math.abs(t)/60,2):Oe(t,e)}function Oe(t,e=""){const n=t>0?"-":"+",o=Math.abs(t),s=A(Math.trunc(o/60),2),r=A(o%60,2);return n+s+e+r}const go=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},ds=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},ma=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],o=n[1],s=n[2];if(!s)return go(t,e);let r;switch(o){case"P":r=e.dateTime({width:"short"});break;case"PP":r=e.dateTime({width:"medium"});break;case"PPP":r=e.dateTime({width:"long"});break;default:r=e.dateTime({width:"full"});break}return r.replace("{{date}}",go(o,e)).replace("{{time}}",ds(s,e))},ba={p:ds,P:ma},ya=/^D+$/,va=/^Y+$/,wa=["D","DD","YY","YYYY"];function xa(t){return ya.test(t)}function _a(t){return va.test(t)}function Sa(t,e,n){const o=$a(t,e,n);if(console.warn(o),wa.includes(t))throw new RangeError(o)}function $a(t,e,n){const o=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${o} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}function za(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function ka(t){return!(!za(t)&&typeof t!="number"||isNaN(+B(t)))}const Ca=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Ea=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,La=/^'([^]*?)'?$/,Oa=/''/g,Ma=/[a-zA-Z]/;function Y(t,e,n){const o=Bt(),s=o.locale??aa,r=o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,i=o.weekStartsOn??o.locale?.options?.weekStartsOn??0,a=B(t,n?.in);if(!ka(a))throw new RangeError("Invalid time value");let l=e.match(Ea).map(u=>{const d=u[0];if(d==="p"||d==="P"){const f=ba[d];return f(u,s.formatLong)}return u}).join("").match(Ca).map(u=>{if(u==="''")return{isToken:!1,value:"'"};const d=u[0];if(d==="'")return{isToken:!1,value:Ra(u)};if(ho[d])return{isToken:!0,value:u};if(d.match(Ma))throw new RangeError("Format string contains an unescaped latin alphabet character `"+d+"`");return{isToken:!1,value:u}});s.localize.preprocessor&&(l=s.localize.preprocessor(a,l));const c={firstWeekContainsDate:r,weekStartsOn:i,locale:s};return l.map(u=>{if(!u.isToken)return u.value;const d=u.value;(_a(d)||xa(d))&&Sa(d,e,String(t));const f=ho[d[0]];return f(a,d,s.localize,c)}).join("")}function Ra(t){const e=t.match(La);return e?e[1].replace(Oa,"'"):t}function Be(t,e,n){const o=B(t,n?.in);return isNaN(e)?ee(t,NaN):(e&&o.setDate(o.getDate()+e),o)}const Pa=t=>t==null||t===""||Number.isNaN(t)||Array.isArray(t)&&t.length<1,mo=t=>Pa(t)&&D("Required"),Ta=Symbol("error"),Aa=(t,e,n,o,s)=>{for(const r of be(t)){const i=r(e,n,o,s);if(i)return i}},Da=(t,e,n)=>t.validate&&Aa(t.validate,e[t.path??t.id],e,t,n),Fa=(t,e,n)=>{const o=t.map(s=>({...s,error:Da(s,e,n)}));return{fields:o,invalid:o.some(({error:s})=>!!s)}},Na=(t,e,n)=>e?Fa(t,e,n):{fields:t,invalid:!0},Ia=(t,e,n,o)=>{o!=null&&Object.is(o[e],n)||t({[e]:n})},ja=t=>Array.isArray(t)?t.some(e=>e===mo):t===mo,hs=t=>({field:e,value:n,values:o,onChange:s,context:r,...i})=>{const a=(u,d)=>(e.onChange??Ia)(f=>s(f,d),e.path??e.id,ro(e.value?.[1],u,o,e,r),o),l=q(e.mandatory??ja(e.validate),n,o,e,r)?" *":void 0;if(!q(e.hidden,n,o,e,r))return t({...e,...i,context:r,values:o,label:[q(e.label,n,o,e,r),l].join(""),placeholder:q(e.placeholder,n,o,e,r),disabled:q(e.disabled,n,o,e,r),warning:q(e.warning,n,o,e,r),prefix:q(e.prefix,n,o,e,r),suffix:q(e.suffix,n,o,e,r),value:ro(e.value?.[0],n,o,e,r),onFocus:e.onFocus?.(a,n,o,e),onPaste:e.onPaste?.(a,n,o,e),onChange:a})},Va=t=>F(t,()=>x`<span slot="prefix">${t}</span>`),Ba=t=>F(t,()=>x`<span slot="suffix">${t}</span>`),Wa=(t,e="suffix")=>F(t,()=>Er({slot:e,title:t,width:"22",height:"22",styles:"color: var(--paper-amber-500); vertical-align: middle"})),Ha=(t,e="suffix")=>F(t,()=>Cr({slot:e,title:t,width:"22",height:"22",styles:"color: var(--cz-text-color); vertical-align: middle; cursor: help"})),Ya=({prefix:t,suffix:e,warning:n,description:o})=>[Va(t),Ba(e),Wa(n),Ha(o)],fs=t=>{const{value:e,values:n,onFocus:o,onInput:s,onPaste:r,context:i,...a}=t,{id:l,type:c="text",label:u,placeholder:d,noLabelFloat:f,alwaysFloatLabel:h,error:p,prefix:m,suffix:g,warning:b,allowedPattern:y,step:v,disabled:_,maxlength:$,min:E,max:z,autosize:W,noSpinner:O,autocomplete:N,title:Q,description:X}=a;return x`<cosmoz-input
		class="input input-common input-${c}"
		name=${l}
		type=${c}
		?autosize=${W}
		?disabled=${_}
		?no-label-float=${f}
		?always-float-label=${h}
		?invalid=${!!p}
		?no-spinner=${!!O}
		.placeholder=${d}
		.errorMessage=${p}
		.allowedPattern=${y}
		.step=${v}
		.label=${u}
		.value=${e}
		title=${C((p??Q)||void 0)}
		maxlength=${C($)}
		min=${C(q(E,e,n,a,i))}
		max=${C(q(z,e,n,a,i))}
		autocomplete=${C(N)}
		@focus=${o}
		@paste=${r}
		@input=${s}
		>${Ya({prefix:m,suffix:g,warning:b,description:X})}</cosmoz-input
	>`},Ua=hs(({onChange:t,...e})=>fs({...e,onInput:n=>t(n.target.value)})),Od=hs(({onChange:t,allowedPattern:e=Ei,...n})=>fs({...n,type:"number",allowedPattern:e,onInput:o=>t(Ci(o.target.value))})),Ka=({field:t,values:e,...n})=>{const o=(n.touched&&(e?.[Ta]?.[t.id]??t.error))??!1,s=e?.[t.path??t.id];return(t.input??Ua)({...n,error:o,value:s,field:t,values:e})},qa=({fields:t,...e})=>_e(t??[],({id:n})=>n,n=>Ka({field:n,fields:t,...e})),Ga=({fields:t,selector:e=""})=>(t??[]).map(({id:n,styles:o})=>o?`${e}[name="${String(n)}"] { ${Object.entries(o).map(([s,r])=>`${s}:${r}`).join(";")} }`:"").join(`
`);class Wt extends Event{constructor(e){super(Wt.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}Wt.eventName="rangeChanged";class Ht extends Event{constructor(e){super(Ht.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}Ht.eventName="visibilityChanged";class Yt extends Event{constructor(){super(Yt.eventName,{bubbles:!1})}}Yt.eventName="unpinned";class Xa{constructor(e){this._element=null;const n=e??window;this._node=n,e&&(this._element=e)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class Qa extends Xa{constructor(e,n){super(n),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const o=this._node;this._originalScrollTo=o.scrollTo,this._originalScrollBy=o.scrollBy,this._originalScroll=o.scroll,this._attach(e)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(e,n){const o=typeof e=="number"&&typeof n=="number"?{left:e,top:n}:e;this._scrollTo(o)}scrollBy(e,n){const o=typeof e=="number"&&typeof n=="number"?{left:e,top:n}:e;o.top!==void 0&&(o.top+=this.scrollTop),o.left!==void 0&&(o.left+=this.scrollLeft),this._scrollTo(o)}_nativeScrollTo(e){this._originalScrollTo.bind(this._element||window)(e)}_scrollTo(e,n=null,o=null){this._end!==null&&this._end(),e.behavior==="smooth"?(this._setDestination(e),this._retarget=n,this._end=o):this._resetScrollState(),this._nativeScrollTo(e)}_setDestination(e){let{top:n,left:o}=e;return n=n===void 0?void 0:Math.max(0,Math.min(n,this.maxScrollTop)),o=o===void 0?void 0:Math.max(0,Math.min(o,this.maxScrollLeft)),this._destination!==null&&o===this._destination.left&&n===this._destination.top?!1:(this.__destination={top:n,left:o,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(e){this._destination&&this._setDestination(e)&&this._nativeScrollTo(this._destination)}managedScrollTo(e,n,o){return this._scrollTo(e,n,o),this._updateManagedScrollTo}correctScrollError(e){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(e),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:e,scrollLeft:n}=this;let{top:o,left:s}=this._destination;o=Math.min(o||0,this.maxScrollTop),s=Math.min(s||0,this.maxScrollLeft);const r=Math.abs(o-e),i=Math.abs(s-n);r<1&&i<1&&(this._end&&this._end(),this._resetScrollState())}}detach(e){return this._clients.delete(e),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(e){this._clients.add(e),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let bo=typeof window<"u"?window.ResizeObserver:void 0;const pn=Symbol("virtualizerRef"),bt="virtualizer-sizer";let yo;class Ja{constructor(e){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!e)throw new Error("Virtualizer constructor requires a configuration object");if(e.hostElement)this._init(e);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(e){Array.isArray(e)&&e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}_init(e){this._isScroller=!!e.scroller,this._initHostElement(e);const n=e.layout||{};this._layoutInitialized=this._initLayout(n)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new bo(()=>this._hostElementSizeChanged()),this._childrenRO=new bo(this._childrenSizeChanged.bind(this))}_initHostElement(e){const n=this._hostElement=e.hostElement;this._applyVirtualizerStyles(),n[pn]=this}connected(){this._initObservers();const e=this._isScroller;this._clippingAncestors=tl(this._hostElement,e),this._scrollerController=new Qa(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(e=>{e.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(e),this._hostElementRO.observe(e)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(e=>this._childrenRO.observe(e)),this._scrollEventListeners.forEach(e=>e.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(e=>e.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const n=this._hostElement.style;n.display=n.display||"block",n.position=n.position||"relative",n.contain=n.contain||"size layout",this._isScroller&&(n.overflow=n.overflow||"auto",n.minHeight=n.minHeight||"150px")}_getSizer(){const e=this._hostElement;if(!this._sizer){let n=e.querySelector(`[${bt}]`);n||(n=document.createElement("div"),n.setAttribute(bt,""),e.appendChild(n)),Object.assign(n.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),n.textContent="&nbsp;",n.setAttribute(bt,""),this._sizer=n}return this._sizer}async updateLayoutConfig(e){await this._layoutInitialized;const n=e.type||yo;if(typeof n=="function"&&this._layout instanceof n){const o={...e};return delete o.type,this._layout.config=o,!0}return!1}async _initLayout(e){let n,o;if(typeof e.type=="function"){o=e.type;const s={...e};delete s.type,n=s}else n=e;o===void 0&&(yo=o=(await tr(()=>import("./flow-BqIEBwW6.js"),[],import.meta.url)).FlowLayout),this._layout=new o(s=>this._handleLayoutMessage(s),n),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const e=window.performance.now(),n=e-this._benchmarkStart,s=performance.getEntriesByName("uv-virtualizing","measure").filter(r=>r.startTime>=this._benchmarkStart&&r.startTime<e).reduce((r,i)=>r+i.duration,0);return this._benchmarkStart=null,{timeElapsed:n,virtualizationTime:s}}return null}_measureChildren(){const e={},n=this._children,o=this._measureChildOverride||this._measureChild;for(let s=0;s<n.length;s++){const r=n[s],i=this._first+s;(this._itemsChanged||this._toBeMeasured.has(r))&&(e[i]=o.call(this,r,this._items[i]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){const{width:n,height:o}=e.getBoundingClientRect();return Object.assign({width:n,height:o},Za(e))}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(e){this._scrollSize=e.scrollSize,this._adjustRange(e.range),this._childrenPos=e.childPositions,this._scrollError=e.scrollError||null;const{_rangeChanged:n,_itemsChanged:o}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(n||o)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(e=>this._childrenRO.observe(e)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(e){console.warn("Error measuring performance data: ",e)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(e){e.type==="scroll"?(e.currentTarget===window||this._clippingAncestors.includes(e.currentTarget))&&this._handleScrollEvent():console.warn("event not handled",e)}_handleLayoutMessage(e){e.type==="stateChanged"?this._updateDOM(e):e.type==="visibilityChanged"?(this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._notifyVisibility()):e.type==="unpinned"&&this._hostElement.dispatchEvent(new Yt)}get _children(){const e=[];let n=this._hostElement.firstElementChild;for(;n;)n.hasAttribute(bt)||e.push(n),n=n.nextElementSibling;return e}_updateView(){const e=this._hostElement,n=this._scrollerController?.element,o=this._layout;if(e&&n&&o){let s,r,i,a;const l=e.getBoundingClientRect();s=0,r=0,i=window.innerHeight,a=window.innerWidth;const c=this._clippingAncestors.map(b=>b.getBoundingClientRect());c.unshift(l);for(const b of c)s=Math.max(s,b.top),r=Math.max(r,b.left),i=Math.min(i,b.bottom),a=Math.min(a,b.right);const u=n.getBoundingClientRect(),d={left:l.left-u.left,top:l.top-u.top},f={width:n.scrollWidth,height:n.scrollHeight},h=s-l.top+e.scrollTop,p=r-l.left+e.scrollLeft,m=Math.max(0,i-s),g=Math.max(0,a-r);o.viewportSize={width:g,height:m},o.viewportScroll={top:h,left:p},o.totalScrollSize=f,o.offsetWithinScroller=d}}_sizeHostElement(e){const o=e&&e.width!==null?Math.min(82e5,e.width):0,s=e&&e.height!==null?Math.min(82e5,e.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${o}px, ${s}px)`;else{const r=this._hostElement.style;r.minWidth=o?`${o}px`:"100%",r.minHeight=s?`${s}px`:"100%"}}_positionChildren(e){e&&e.forEach(({top:n,left:o,width:s,height:r,xOffset:i,yOffset:a},l)=>{const c=this._children[l-this._first];c&&(c.style.position="absolute",c.style.boxSizing="border-box",c.style.transform=`translate(${o}px, ${n}px)`,s!==void 0&&(c.style.width=s+"px"),r!==void 0&&(c.style.height=r+"px"),c.style.left=i===void 0?null:i+"px",c.style.top=a===void 0?null:a+"px")})}async _adjustRange(e){const{_first:n,_last:o,_firstVisible:s,_lastVisible:r}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==n||this._last!==o,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==s||this._lastVisible!==r}_correctScrollError(){if(this._scrollError){const{scrollTop:e,scrollLeft:n}=this._scrollerController,{top:o,left:s}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:e-o,left:n-s})}}element(e){return e===1/0&&(e=this._items.length-1),this._items?.[e]===void 0?void 0:{scrollIntoView:(n={})=>this._scrollElementIntoView({...n,index:e})}}_scrollElementIntoView(e){if(e.index>=this._first&&e.index<=this._last)this._children[e.index-this._first].scrollIntoView(e);else if(e.index=Math.min(e.index,this._items.length-1),e.behavior==="smooth"){const n=this._layout.getScrollIntoViewCoordinates(e),{behavior:o}=e;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(n,{behavior:o}),()=>this._layout.getScrollIntoViewCoordinates(e),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=e}else this._layout.pin=e}_checkScrollIntoViewTarget(e){const{index:n}=this._scrollIntoViewTarget||{};n&&e?.has(n)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new Wt({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new Ht({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((e,n)=>{this._layoutCompleteResolver=e,this._layoutCompleteRejecter=n})),this._layoutCompletePromise}_rejectLayoutCompletePromise(e){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(e),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(e){if(this._layout?.measureChildren){for(const n of e)this._toBeMeasured.set(n.target,n.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function Za(t){const e=window.getComputedStyle(t);return{marginTop:yt(e.marginTop),marginRight:yt(e.marginRight),marginBottom:yt(e.marginBottom),marginLeft:yt(e.marginLeft)}}function yt(t){const e=t?parseFloat(t):NaN;return Number.isNaN(e)?0:e}function vo(t){if(t.assignedSlot!==null)return t.assignedSlot;if(t.parentElement!==null)return t.parentElement;const e=t.parentNode;return e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host||null}function el(t,e=!1){const n=[];let o=e?t:vo(t);for(;o!==null;)n.push(o),o=vo(o);return n}function tl(t,e=!1){let n=!1;return el(t,e).filter(o=>{if(n)return!1;const s=getComputedStyle(o);return n=s.position==="fixed",s.overflow!=="visible"})}const nl=t=>t,ol=(t,e)=>x`${e}: ${JSON.stringify(t,null,2)}`;class sl extends xn{constructor(e){if(super(e),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(n,o)=>ol(n,o+this._first),this._keyFunction=(n,o)=>nl(n,o+this._first),this._items=[],e.type!==ae.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(e){e&&this._setFunctions(e);const n=[];if(this._first>=0&&this._last>=this._first)for(let o=this._first;o<=this._last;o++)n.push(this._items[o]);return _e(n,this._keyFunction,this._renderItem)}update(e,[n]){this._setFunctions(n);const o=this._items!==n.items;return this._items=n.items||[],this._virtualizer?this._updateVirtualizerConfig(e,n):this._initialize(e,n),o?J:this.render()}async _updateVirtualizerConfig(e,n){if(!await this._virtualizer.updateLayoutConfig(n.layout||{})){const s=e.parentNode;this._makeVirtualizer(s,n)}this._virtualizer.items=this._items}_setFunctions(e){const{renderItem:n,keyFunction:o}=e;n&&(this._renderItem=(s,r)=>n(s,r+this._first)),o&&(this._keyFunction=(s,r)=>o(s,r+this._first))}_makeVirtualizer(e,n){this._virtualizer&&this._virtualizer.disconnected();const{layout:o,scroller:s,items:r}=n;this._virtualizer=new Ja({hostElement:e,layout:o,scroller:s}),this._virtualizer.items=r,this._virtualizer.connected()}_initialize(e,n){const o=e.parentNode;o&&o.nodeType===1&&(o.addEventListener("rangeChanged",s=>{this._first=s.first,this._last=s.last,this.setValue(this.render())}),this._makeVirtualizer(o,n))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}}const rl=ve(sl),il=({slot:t,title:e,className:n,width:o="24",height:s="24",styles:r}={})=>x`
  <svg
    slot=${C(t)}
    class=${`calendar-icon ${n??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${o}
    height=${s}
    style=${C(r)}
  >
    ${F(e,()=>Ye`<title>${e}</title>`)}
    <path
      d="M21 10H3m13-8v4M8 2v4m-.2 16h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 19.72 21 18.88 21 17.2V8.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 4 17.88 4 16.2 4H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 6.28 3 7.12 3 8.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 22 6.12 22 7.8 22Z"
    />
  </svg>
`,al=({slot:t,title:e,className:n,width:o="24",height:s="24",styles:r}={})=>x`
  <svg
    slot=${C(t)}
    class=${`chevron-left-icon ${n??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${o}
    height=${s}
    style=${C(r)}
  >
    ${F(e,()=>Ye`<title>${e}</title>`)}
    <path d="m15 18-6-6 6-6" />
  </svg>
`,ll=({slot:t,title:e,className:n,width:o="24",height:s="24",styles:r}={})=>x`
  <svg
    slot=${C(t)}
    class=${`chevron-right-icon ${n??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${o}
    height=${s}
    style=${C(r)}
  >
    ${F(e,()=>Ye`<title>${e}</title>`)}
    <path d="m9 18 6-6-6-6" />
  </svg>
`;we`
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
		display: inline-flex;
		align-items: center;
		justify-content: center;
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
	/* Empty stand-in matching the remove button's footprint, so rows without a
	   remove button (the header row and the add row) keep their columns aligned
	   with the removable rows. */
	.remove-placeholder {
		flex: none;
		width: 24px;
		margin: 0 8px;
	}
`;const cl=()=>ie,ul=(t,e)=>Promise.resolve(t).then(e,e),dl=t=>Rt(t?.then(cl,e=>x`<div class="failure">${e.message}</div>`),ie),hl=({save$:t,progress:e,...n})=>{const o=({onSave:s,onClick:r=s,title:i,disabled:a,progress:l,content:c=ie,slot:u})=>x` <button
			class="button save"
			slot=${C(u)}
			?disabled=${a}
			?data-progress=${l}
			@click=${d=>(d.stopPropagation(),r())}
		>
			${c} ${i}
		</button>`;return Rt(ul(t,()=>o(n)),o({...n,disabled:!0,progress:!0,content:x`<cz-spinner></cz-spinner> ${F(e,s=>s.join("/"))}`}))},fl=we`
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
`,pl=()=>{let t=null;return{run:async(e,n,o,s)=>{t?.abort(),t=new AbortController;const r={update:o,signal:t.signal,index:s?.index,context:s?.context};try{return await e(n,r)}catch(i){if(i instanceof DOMException&&i.name==="AbortError")return null;throw i}},cancel:()=>{t?.abort(),t=null}}},gl=(t,e)=>t.length!==e.length||t.some((n,o)=>!Object.is(n,e[o])),ml=t=>{console.error("[cosmoz-form] async rule error:",t)},bl=(t,e,n)=>{const o=ml,s=ye(new Map),r=ye(new Map),i=ye(0),[a,l]=U(!1);return M(()=>()=>{for(const c of s.current.values())c.cancel()},[]),M(()=>{if(!e?.length)return;const c=t.context;for(const u of e){const[d,f,h=pl]=u;s.current.has(u)||s.current.set(u,h());const p=f(t.values,void 0,c),m=r.current.get(u);if(m!=null&&!gl(p,m))continue;r.current.set(u,p);const g=s.current.get(u);i.current++,i.current===1&&l(!0),g.run(d,t.values,b=>t.onChange(b,!1),{context:c}).then(b=>{b!==null&&t.onChange(b,!1)}).catch(b=>o(b,u)).finally(()=>{i.current--,i.current===0&&l(!1)})}},[t.values,t.context]),{...t,processing:a}},gn=Symbol("touched");function St(t,e=!0){if(t==null)return;const n=t;return e?n[gn]=!0:delete n[gn],t}const ps=t=>St(t,!1),wo=t=>!!t?.[gn],yl=(t,e)=>!e||t.some((n,o)=>!Object.is(e[o],n)),Qe=({oldItem:t,newItem:e,rules:n,index:o,oldIndex:s=o,context:r,oldContext:i=r})=>n?n.reduce((a,[l,c])=>t&&c&&!yl(c(a,o,r),c(t,s,i))?a:{...a,...l(a,t,o,s,r)},e):e,vl=(t,e,n,o,s)=>{const[,r]=t,i=ye(void 0);return M(()=>{const a=i.current;i.current=o,a!==void 0&&e(([l,c])=>[l,St(Qe({oldItem:c,newItem:c,rules:n,context:o,oldContext:a}),wo(c))])},[o]),{values:r,context:o??{},onReset:S(()=>e(([a])=>[a,a]),[e]),onValues:S((a,l=!0)=>e(([c,u])=>[c,St(Qe({oldItem:u,newItem:q(a,u),rules:n,context:o}),l)]),[n,e,o]),onChange:S((a,l=!0)=>e(([c,u])=>[c,St(Qe({oldItem:u,newItem:{...u,...q(a,u)},rules:n,context:o}),l)]),[n,e,o]),load:S((a,l)=>{if(!a){e([a,a]);return}const c=ps(Qe({oldItem:void 0,newItem:a,rules:l??n,context:o}));e([c,c])},[n,e,o]),touched:P(()=>wo(r)||(s??!1),[r,s])}},wl=(t,e,n)=>ps(Qe({oldItem:void 0,newItem:t,rules:e,context:n})),gs=(t,e=[])=>{const n=t.filter(o=>o?.rules!=null).flatMap(o=>o?.rules);return[...e,...n]},xl=(t,e,{fields:n,rules:o,context:s,touched:r})=>{const i=P(()=>q(n)??[],[n]),a=P(()=>gs(i,o),[i,o]),l=vl(t,e,a,s,r),{values:c}=l;return{...P(()=>Na(i,c,s),[i,c,s]),...l}},_l=t=>{const[e,n]=U(()=>{const o=q(t.fields)??[],s=gs(o,t.rules),r=wl(t.initial,s,t.context);return[r,r]});return xl(e,n,t)};function Sl({fields:t,initial:e,rules:n,asyncRules:o,context:s,onSave:r,allowEmpty:i}){const a=_l({fields:t,initial:e,rules:n,context:s}),{processing:l}=bl(a,o),{values:c,invalid:u}=a,[d,f]=U(),[h,p]=U(),m=c==null||c===e,g=a.fields?.length>0&&!(m&&i)&&(m||u);return{...a,save$:d,onSave:S(()=>f(r?.(c,e,p)),[r,c,e]),disabled:g,processing:l,progress:h}}const $l=we`
	.description {
		padding: 0 24px;
		/* scrollable, so a long description can't push the buttons out of the
		   dialog's clipped content area */
		overflow-y: auto;
		min-height: 0;
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
	.buttons {
		flex: none;
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
`,ms=t=>{const{description:e,auto:n,uncancelable:o,hideCancelButton:s,saveText:r=D("OK")}=t,{onSave:i,disabled:a,save$:l,progress:c,...u}=Sl(t);return M(()=>{n&&i()},[n]),x` <style>
			${fl} ${Ga(u)}${$l}
		</style>
		${F(e,()=>x`<p class="description">${e}</p>`)}
		<div class="form" part="form">${qa(u)}</div>
		<div class="buttons">
			${dl(l)}
			${hl({save$:l,onSave:i,disabled:a,title:r,progress:c})}
			${F(!s,()=>x`<button class="button" value="cancel" ?disabled=${o}>
						${D("Cancel")}
					</button>`)}
		</div>`};customElements.define("cosmoz-form-dialog",Sn(ms,{observedAttributes:["allow-empty"]}));customElements.define("cosmoz-form-dialog-next",Sn(ms,{observedAttributes:["allow-empty"]}));const zl={},mn=ve(class extends De{constructor(){super(...arguments),this.ot=zl}render(t,e){return e()}update(t,[e,n]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((o,s)=>o===this.ot[s]))return J}else if(this.ot===e)return J;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,n)}}),kl=({host:t,popoverRef:e,disabled:n,openOnHover:o,openOnFocus:s,open:r,close:i})=>{const a=ye(),l=()=>clearTimeout(a.current),c=()=>{clearTimeout(a.current),a.current=setTimeout(()=>{const d=e.current;o&&(t.matches(":hover")||d?.matches(":hover"))||t.matches(":focus-within")||d?.matches(":focus-within")||i()},100)},u=()=>{n||(l(),r())};return M(()=>{if(!(!o||n))return t.addEventListener("pointerenter",u),t.addEventListener("pointerleave",c),()=>{l(),t.removeEventListener("pointerenter",u),t.removeEventListener("pointerleave",c)}},[o,n,t]),M(()=>{if(!(!s||n))return t.addEventListener("focusin",u),t.addEventListener("focusout",c),()=>{l(),t.removeEventListener("focusin",u),t.removeEventListener("focusout",c)}},[s,n,t]),{scheduleClose:c,cancelClose:l}},Cl=t=>{if(t.newState!=="open")return;const o=t.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const s of o){const r=s.matches("[autofocus]")?s:s.querySelector("[autofocus]");if(r instanceof HTMLElement){r.focus();break}}},El=G`
	:host {
		display: inline-block;
		anchor-name: --dropdown-anchor;
	}

	[popover] {
		position: fixed;
		position-anchor: --dropdown-anchor;
		inset: unset;
		margin-block: var(--cz-spacing, 0.25rem);
		position-try-fallbacks:
			flip-block,
			flip-inline,
			flip-block flip-inline;

		border: none;
		padding: 0;
		background: transparent;
		overflow: visible;
		min-width: anchor-size(width);

		/* Animation - open state */
		opacity: 1;
		transform: translateY(0) scale(1);

		/* Transitions for smooth open/close animation */
		transition:
			opacity 150ms ease-out,
			transform 150ms ease-out,
			overlay 150ms ease-out allow-discrete,
			display 150ms ease-out allow-discrete;
	}

	/* Starting state when popover opens */
	@starting-style {
		[popover]:popover-open {
			opacity: 0;
			transform: translateY(-4px) scale(0.96);
		}
	}

	/* Closing state */
	[popover]:not(:popover-open) {
		opacity: 0;
		transform: translateY(-4px) scale(0.96);
	}

	@media (prefers-reduced-motion: reduce) {
		[popover] {
			transition: none;
		}
	}
`,Ll=t=>{const{placement:e="bottom span-right",disabled:n,passthrough:o,openOnHover:s,openOnFocus:r}=t,i=ye(),[a,l]=ke("opened",!1),c=S(()=>{n||(l(!0),i.current?.showPopover?.())},[n]),u=S(()=>{l(!1),i.current?.hidePopover?.()},[]),d=S(()=>{if(n)return;i.current?.matches(":popover-open")?u():c()},[n]);M(()=>{const g=i.current;g&&(a?g.showPopover?.():g.hidePopover?.())},[a]),M(()=>{t.toggleAttribute("opened",!!a)},[a]);const{scheduleClose:f,cancelClose:h}=kl({host:t,popoverRef:i,disabled:n,openOnHover:s,openOnFocus:r,open:c,close:u}),p=r?c:d,m=S(g=>{Cl(g),l(g.newState==="open"),t.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:g.newState,oldState:g.oldState,composed:!0}))},[]);return x`
		<slot name="button" @click=${p}></slot>
		${n&&o?x`<slot></slot>`:x`<div
					popover
					style="position-area: ${e}"
					@toggle=${m}
					@select=${u}
					@focusout=${f}
					@focusin=${h}
					${Ve(g=>g&&(i.current=g))}
				>
					<slot></slot>
				</div>`}
	`};customElements.define("cosmoz-dropdown-next",K(Ll,{styleSheets:[El],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Ol=(t,e)=>{if(!t||!e)return;const n=Object.keys(e);return Object.fromEntries(Object.keys(t).flatMap(o=>n.includes(o)?[]:[[o,void 0]]))};class Ml extends De{_props;render(e){return J}update(e,[n]){return this._props!==n&&Object.assign(e.element,Ol(this._props,n),this._props=n),J}}const bn=ve(Ml),Rl=t=>{const e=Ce(),n=P(()=>new CSSStyleSheet,[]);M(()=>{e.shadowRoot.adoptedStyleSheets=[...e.shadowRoot.adoptedStyleSheets,n]},[]),M(()=>{n.replaceSync(t)},[t])},Pl="data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 1L5.20039 7.04766L1.66348 3.46152' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",Tl=G`
	:host {
		display: block;
		font-family: var(--paper-font-subhead_-_font-family, inherit);
		background: var(
			--cosmoz-autocomplete-listbox-bg,
			rgba(255, 255, 255, 0.75)
		);
		backdrop-filter: blur(16px) saturate(180%);
		-webkit-backdrop-filter: blur(16px) saturate(180%);
		border-radius: 6px;
		box-shadow:
			0 4px 24px 0 rgba(0, 0, 0, 0.18),
			0 1.5px 6px 0 rgba(0, 0, 0, 0.1);
		border: 1px solid rgba(200, 200, 200, 0.25);
		text-transform: var(--cosmoz-autocomplete-listbox-text-transform, initial);
		overflow: hidden;
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
		background: url("${Pl}") #5881f6 no-repeat 50%;
	}

	:host([multi]) .sizer {
		padding-left: 33px;
	}

	[virtualizer-sizer]:not(.sizer) {
		line-height: 1;
	}
`,Al=({index:t,itemHeight:e,auto:n})=>G`
	${F(!n,()=>G`
			.item {
				line-height: ${e}px;
				height: ${e}px;
			}
		`)}

	.item[data-index='${t||"0"}'] {
		background: var(
			--cosmoz-listbox-active-color,
			var(--cosmoz-selection-color, rgba(58, 145, 226, 0.1))
		);
	}
`,Dl=t=>{const e=t==="auto",[n,o]=U(e?40:t);return[n,s=>e?o(s):void 0]},bs=_r(()=>Zo);customElements.define("cosmoz-keybinding-provider",bs.Provider);const Ut=t=>{const e=P(()=>({}),[]);return P(()=>Object.assign(e,t),[e,...Object.values(t)])},st=(t,e)=>{const n=Qo(bs),o=Ut(t);M(()=>n(o),e)},Fl=Symbol("listbox.navigate.up"),Nl=Symbol("listbox.navigate.down"),Il=Symbol("listbox.select"),jl=({onUp:t,onDown:e,onEnter:n})=>{const o=Ce();st({activity:Fl,callback:t,element:()=>o},[]),st({activity:Nl,callback:e,element:()=>o},[]),st({activity:Il,callback:n,element:()=>o},[])},Vl=({items:t,onSelect:e,defaultIndex:n=0})=>{const[o,s]=U({index:n}),{index:r}=o,{length:i}=t;return M(()=>{s({index:o.index<0?n:Math.min(o.index,t.length-1),scroll:!0})},[t,n]),jl({onUp:S(()=>s(a=>({index:a.index>0?a.index-1:i-1,scroll:!0})),[i]),onDown:S(()=>s(a=>({index:a.index<i-1?a.index+1:0,scroll:!0})),[i]),onEnter:S(()=>r>-1&&r<i&&e?.(t[r],r),[r,t,e])}),{position:o,highlight:S(a=>s({index:a}),[]),select:S(a=>e?.(a),[e])}},Bl=(t,e)=>e?n=>n!=null&&be(t).find(o=>o[e]===n[e]):n=>n!=null&&be(t).includes(n),Wl=(t,e)=>{if(!e||!t)return t;const n=t.toLowerCase().indexOf(e.toLowerCase());if(n<0)return t;const o=n+e.length;return[t.slice(0,n),x`<mark>${t.slice(n,o)}</mark>`,t.slice(o)]},Hl=(t=Et)=>(e,n,{highlight:o,select:s,textual:r=Et,query:i,isSelected:a})=>{const l=r(e),c=Wl(l,i),u=t(c,e,n);return x`<div
				class="item"
				role="option"
				part="option"
				?aria-selected=${a(e)}
				data-index=${n}
				@mouseenter=${()=>o(n)}
				@click=${()=>s(e)}
				@mousedown=${d=>d.preventDefault()}
				title=${l}
			>
				${u}
			</div>
			<div class="sizer" virtualizer-sizer>${u}</div>`},Yl=({itemRenderer:t=Hl(),...e})=>{const n=Ut(e);return S((o,s)=>t(o,s,n),[n,t])},Ul=["query","items","onSelect","textual","anchor","itemHeight","itemLimit","itemRenderer","defaultIndex","value","valueProperty","loading"],Kl=({value:t,valueProperty:e,items:n,onSelect:o,defaultIndex:s,query:r,textual:i,itemRenderer:a,itemHeight:l=40,itemLimit:c=5})=>{const u=P(()=>Bl(t,e),[t,e]),d=P(()=>n.slice(),[n,u]),{position:f,highlight:h,select:p}=Vl({items:d,onSelect:o,defaultIndex:isNaN(s)?void 0:Number(s)}),[m,g]=Dl(l);return{position:f,items:d,height:Math.min(c,d.length)*m,highlight:h,select:p,itemHeight:m,setItemHeight:g,renderItem:Yl({itemRenderer:a,items:d,position:f,highlight:h,select:p,textual:i,query:r,isSelected:u})}},xo=Zo,ql=t=>{const e=ye(void 0),{position:n,items:o,renderItem:s,height:r,itemHeight:i,setItemHeight:a}=Kl(t);return M(()=>{const l=e.current?.[pn];l&&l.layoutComplete.then(()=>{t.dispatchEvent(new CustomEvent("layout-complete"));const{averageChildSize:c,averageMarginSize:u}=l._layout._metricsCache;return a(c+u*2)},xo)},[o]),M(()=>{if(!n.scroll)return;const l=e.current?.[pn];if(l){if(!l?._layout){l.layoutComplete.then(()=>l.element(n.index)?.scrollIntoView({block:"nearest"}),xo);return}l.element(n.index)?.scrollIntoView({block:"nearest"})}},[n]),Rl(Al({...n,itemHeight:i,auto:t.itemHeight==="auto"})),x`<div
			class="items"
			style="min-height: ${r}px"
			${Ve(l=>e.current=l)}
		>
			<div virtualizer-sizer></div>
			${rl({items:o,renderItem:s,scroller:!0})}
		</div>
		<slot></slot>`};customElements.define("cosmoz-listbox",K(ql,{styleSheets:[_n(Tl)]}));const Gl=({multi:t,...e},n)=>x`<cosmoz-listbox
		part="listbox"
		?multi=${t}
		...=${bn(hi(Ul)(e))}
		>${n}</cosmoz-listbox
	>`,Xl=we`
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
`,Ql=x`
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
`,Jl=({onClear:t,disabled:e})=>x`
	<div
		class="content"
		part="content chip-text"
		@mousedown=${n=>n.preventDefault()}
	>
		<slot></slot>
	</div>
	${F(t&&!e,()=>x`<span
				class="clear"
				part="clear chip-clear"
				@mousedown=${n=>n.preventDefault()}
				@click=${t}
			>
				${Ql}
			</span>`)}
`;customElements.define("cosmoz-autocomplete-chip",K(Jl,{observedAttributes:["disabled"],styleSheets:[_n(Xl)]}));const Zl=({content:t,onClear:e,disabled:n,hidden:o,className:s="chip",slot:r})=>x`<cosmoz-autocomplete-chip
		class=${C(s)}
		slot=${C(r)}
		part="chip"
		exportparts="chip-text, chip-clear"
		?disabled=${n}
		?hidden=${o}
		.onClear=${e}
		title=${C(typeof t=="string"?t:void 0)}
		>${t}</cosmoz-autocomplete-chip
	>`,ec=({value:t,min:e=0,onDeselect:n,textual:o,disabled:s,chipRenderer:r=Zl})=>[...t.filter(Boolean).map(i=>r({item:i,content:o(i),onClear:t.length>e&&(()=>n(i)),disabled:s,slot:"control"})),r({item:null,content:x`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],tc=G`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",K(()=>ie,{styleSheets:[tc]}));const ys=we`
	:host {
		display: block;
		position: relative;
		min-width: 35px;
	}

	cosmoz-dropdown-next {
		display: block;
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

	.no-result {
		font-size: var(--cosmoz-autocomplete-listbox-font-size, 13px);
		font-weight: var(--cosmoz-autocomplete-listbox-font-weight, 400);
		padding: 0 22px;
		color: var(--cosmoz-listbox-color, #101010);
	}
`,zn=(t,e=()=>({}))=>{const n={type:t,toString(){return t}};return Object.assign((...s)=>Object.assign(e(...s),n),n)},_o=t=>t.type||t.toString(),So=t=>Array.isArray(t)?t:[t],nc=(t,e)=>{const n=So(e),o=(n.every(Array.isArray)?n:[n]).map(([s,r])=>({actions:So(s).map(_o),handle:r}));return(s=t,r)=>{const i=o.find(a=>a.actions.includes(_o(r)));return i?i.handle(s,r):s}},Pe={pending:"pending",rejected:"rejected",resolved:"resolved"},vs={error:void 0,result:void 0,state:Pe.pending},ws=zn(Pe.pending),xs=zn(Pe.resolved,t=>({result:t})),_s=zn(Pe.rejected,t=>({error:t})),oc=nc(vs,[[ws,()=>({error:void 0,result:void 0,state:Pe.pending})],[xs,(t,{result:e})=>({error:void 0,result:e,state:Pe.resolved})],[_s,(t,{error:e})=>({error:e,result:void 0,state:Pe.rejected})]]),sc=t=>{const[{error:e,result:n,state:o},s]=gr(oc,vs);return M(()=>{if(!t)return;let r=!1;return s(ws()),t.then(i=>!r&&s(xs(i)),i=>!r&&s(_s(i))),()=>{r=!0}},[t]),[n,e,o]},rc=Symbol("autocomplete.deselect.last"),ic=Symbol("autocomplete.search.when.selected"),$o=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),ac=(t,e,n)=>{if(!e)return t;const o=$o(e.toLowerCase()),s=[];for(const r of t){const a=$o(n(r).toLowerCase()).indexOf(o);a<0||s.push({item:r,index:a})}return s.sort((r,i)=>r.index-i.index).map(({item:r})=>r)},lc=t=>t===!1||t==null?[]:t,cc=(t,e,n)=>t.dispatchEvent(new CustomEvent(e,{detail:n})),zo=[],uc=t=>(...e)=>{let n;const o=()=>{n&&cancelAnimationFrame(n)};return o(),n=requestAnimationFrame(()=>{n=void 0,t(...e)}),o},dc=(t,e,n)=>S(o=>{e?.(o),t.dispatchEvent(new CustomEvent(n,{detail:o}))},[e]),hc=({value:t,text:e,onChange:n,onText:o,onSelect:s,limit:r,min:i,source:a,textProperty:l,textual:c,valueProperty:u,keepOpened:d,keepQuery:f,preserveOrder:h,defaultIndex:p,externalSearch:m,disabled:g,lazyOpen:b})=>{const y=r!=null?Number(r):void 0,v=i!=null?Number(i):void 0,_=P(()=>(c??di)(l),[c,l]),$=Ce(),[E,z]=ke("opened",!1),W=!e,O=P(()=>e?.trim(),[e]),N=dc($,o,"text"),Q=S(w=>{n?.(w,()=>z(!1)),cc($,"value",w)},[n]),[X,V]=U([]),R=!!(b&&!O),ne=P(()=>R?Promise.resolve([]):Promise.resolve(typeof a=="function"?a({query:O,active:E}):a).then(lc),[a,E,O,R]),j=P(()=>be(t),[t]);M(()=>ne.then(V),[ne]),st({activity:rc,callback:()=>{const w=be(j);w.length>(v??0)&&Q(w.slice(0,-1))},check:()=>!g&&W&&$.matches(":focus-within"),element:()=>$},[]),st({activity:ic,callback:w=>{const L=be(j),I=y===1;L.length>0&&I&&w.key.length===1&&Q(L.slice(0,-1))},allowDefault:!0,check:()=>!g&&W&&$.matches(":focus-within"),element:()=>$},[y]),M(()=>{!E&&!f&&N("")},[E,f]),M(()=>{$.toggleAttribute("opened",!!E)},[E]);const T=Ut({onText:N,onChange:Q,value:j,limit:y,min:v,keepQuery:f,keepOpened:d,setOpened:z,onSelect:s,valueProperty:u}),[,,H]=sc(ne);return{limit:y,opened:E,query:O,textual:_,value:j,source$:ne,loading:H==="pending",items:P(()=>{if(!E||R)return zo;const w=h?X:[...j,...sn(j,_t(u))(X)];return m?w:ac(w,O,_)},[X,E,O,_,W,j,h,u,m,R]),onToggle:S(w=>{g||z(w.newState==="open")},[g]),onText:S(w=>{g||(N(w.target.value),z(!0))},[g,N,e,z]),onSelect:S(w=>{if(g)return;T.onSelect?.(w,T);const{onChange:L,onText:I,limit:se,min:Ee,value:pt,keepQuery:Ks,keepOpened:qs,setOpened:Gs,valueProperty:Xs}=T;Ks||I(""),qs||Gs(!1);const gt=be(pt),Zt=_t(Xs),Nn=gt.some(Qs=>Zt(Qs)===Zt(w));Nn&&gt.length===Ee||L((Nn?sn(w,Zt)(gt):[...gt,w]).slice(-se))},[g,T]),onDeselect:S(w=>{g||T.onChange(sn(w,_t(T.valueProperty))(T.value))},[g,T]),defaultIndex:O!==void 0&&O?.length>0?0:p}},fc=t=>{const e=t.shadowRoot.querySelectorAll(".chip"),n=t.shadowRoot.querySelector(".badge");n.hidden=!0;for(const a of e)a.hidden=!1;const s=t.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let r;for(r=0;r<e.length;r++){const l=e[r].getBoundingClientRect();if(!(l.x+l.width<=s.x+s.width-24))break}const i=e.length-r;for(n.querySelector("span").textContent="+"+i.toString(),n.hidden=i<1;r<e.length;r++)e[r].hidden=!0},pc=({value:t,opened:e,wrap:n,limit:o})=>{const s=Ce(),r=!(n||o===1)&&t.length>0,i=P(()=>uc(()=>fc(s)),[]),[a,l]=U(0);hn(()=>{if(!r)return;const c=s.shadowRoot.querySelector("cosmoz-input"),u=new ResizeObserver(d=>{l(d[0].contentRect.width)});return u.observe(c),()=>u.disconnect()},[r]),hn(()=>r?i():void 0,[r,a,e,t])},gc=["input","control","label","line","error","wrap"].map(t=>`${t}: input-${t}`).join(),mc=({opened:t,isSingle:e,showSingle:n,hasResultsOrQuery:o})=>!t||e&&!n?!1:o,bc=t=>{const{opened:e,invalid:n,errorMessage:o,label:s,placeholder:r,disabled:i,noLabelFloat:a,alwaysFloatLabel:l,textual:c,text:u,onText:d,onToggle:f,onDeselect:h,value:p,limit:m,min:g,showSingle:b,items:y,source$:v,loading:_,chipRenderer:$}=t,E=m===1,z=E&&p?.[0]!=null,W=_||y.length>0||u!=null&&u.length>0;return x`<cosmoz-dropdown-next
			open-on-focus
			?disabled=${i}
			.opened=${e}
			@dropdown-toggle=${f}
			part="dropdown"
		>
			<cosmoz-input
				slot="button"
				id="input"
				part="input"
				.label=${s}
				.placeholder=${z?void 0:r}
				?no-label-float=${a}
				?always-float-label=${p?.length>0||l}
				?readonly=${z}
				?disabled=${i}
				?invalid=${mn([v,n],()=>Rt(v.then(()=>n,()=>!0),n))}
				.errorMessage=${mn([v,o],()=>Rt(v.then(()=>o,O=>O.message),o))}
				.value=${dt(u)}
				@value-changed=${d}
				autocomplete="off"
				exportparts=${gc}
				?data-one=${E}
				?data-single=${z}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${ec({value:p,min:g,onDeselect:h,textual:c,disabled:i,chipRenderer:$})}
			</cosmoz-input>

			${F(mc({opened:e,isSingle:z,showSingle:b,hasResultsOrQuery:W}),()=>Gl({...t,items:y,multi:!E},F(_,()=>x`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>F(u!=null&&u.length>0&&y.length===0,()=>x`<slot name="no-result">
											<p class="no-result">${D("No results found")}</p>
										</slot>`))))}
		</cosmoz-dropdown-next>`},kn=t=>{const e={...t,...hc(t)};return pc(e),bc(e)},Cn=["disabled","invalid","no-label-float","always-float-label","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap","lazy-open"],yc=t=>{const{onChange:e,onText:n,...o}=t,[s,r]=ke("value");return M(()=>{t.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),kn({...o,value:s,onChange:S((i,...a)=>{r(i),e?.(i,...a)},[e]),onText:S(i=>{t.text=i,n?.(i)},[n])})},Ss=[_n(ys)],$s={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-ui",K(kn,{observedAttributes:Cn,styleSheets:Ss,shadowRootInit:$s}));customElements.define("cosmoz-autocomplete",K(yc,{observedAttributes:Cn,styleSheets:Ss,shadowRootInit:$s}));const vc="data:image/svg+xml,%3Csvg width='11' height='11' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.5 2.5L8.5 8.5M8.5 2.5L2.5 8.5' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E",wc=G`
	.chip[data-state='excluded'] {
		background: var(--cosmoz-autocomplete-excluded-bg-color, rgb(244, 67, 54));
	}

	cosmoz-autocomplete-chip[data-state='excluded']::part(content) {
		color: var(--cosmoz-autocomplete-excluded-chip-color, #fff);
	}

	cosmoz-autocomplete-chip[data-state='excluded']::part(clear) {
		background-color: var(
			--cosmoz-autocomplete-excluded-chip-clear-bg-color,
			#fff
		);
		stroke: var(
			--cosmoz-autocomplete-excluded-chip-clear-stroke,
			var(--cosmoz-autocomplete-excluded-bg-color, rgb(244, 67, 54))
		);
	}

	cosmoz-listbox::part(excluded)::before {
		border-color: var(
			--cosmoz-autocomplete-excluded-bg-color,
			rgb(244, 67, 54)
		);
		/* prettier-ignore */
		background: url("${vc}") var(--cosmoz-autocomplete-excluded-bg-color, rgb(244, 67, 54)) no-repeat 50%;
	}

	cosmoz-listbox::part(excluded):hover {
		background: var(
			--cosmoz-listbox-excluded-active-color,
			rgba(244, 67, 54, 0.1)
		);
	}
`,ko=t=>({item:t,excluded:!1}),zs=t=>t.item,xc=t=>{const[e,n]=ke(t),o=S(s=>n(r=>{const i=q(s,r?.map(zs));if(!i)return;if(!r)return i.map(ko);const a=r.reduce((c,u)=>i.includes(u.item)?[...c,u]:u.excluded?c:[...c,{...u,excluded:!0}],[]),l=i.filter(c=>!r.some(u=>u.item===c)).map(ko);return[...a,...l]}),[]);return{value:e,setExcludingValue:o,setValue:n}},_c=(t,e)=>t?.some(n=>n.item===e&&n.excluded),ks=(t,e)=>e&&_c(t,e)?"excluded":ie,Sc=t=>(e,n,{highlight:o,select:s,textual:r,isSelected:i})=>{const a=r(e);return x`<div
				class="item"
				role="option"
				part="option ${ks(t,e)}"
				?aria-selected=${i(e)}
				data-index=${n}
				@mouseenter=${()=>o(n)}
				@click=${()=>s(e)}
				@mousedown=${l=>l.preventDefault()}
			>
				${a}
			</div>
			<div class="sizer" virtualizer-sizer>${a}</div>`},$c=(t,e)=>({item:n,content:o,disabled:s,hidden:r,className:i="chip",slot:a})=>x`<cosmoz-autocomplete-chip
			class=${C(i)}
			slot=${C(a)}
			part="chip"
			exportparts="chip-text, chip-clear"
			data-state=${ks(t,n)}
			?disabled=${s}
			?hidden=${r}
			.onClear=${()=>e(n)}
			title=${C(typeof o=="string"?o:void 0)}
		>
			${o}
		</cosmoz-autocomplete-chip>`,zc=t=>{const{value:e,setValue:n,setExcludingValue:o}=xc("value"),[s,r]=ke("text"),i=S(a=>n(l=>l?.filter(c=>c.item!==a)),[]);return kn({...t,value:P(()=>e?.map(zs),[e]),onChange:S(a=>{o(a)},[]),text:s,onText:S(a=>{r(a)},[]),itemRenderer:P(()=>Sc(e),[e]),chipRenderer:P(()=>$c(e,i),[e,i])})},kc={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-excluding",K(zc,{observedAttributes:Cn,styleSheets:[ys,wc],shadowRootInit:kc}));const Kt=jt(G`
	/*
	 * Use border-box sizing for all elements.
	 * This is safe and doesn't conflict with child component styles.
	 */
	*,
	::before,
	::after,
	::backdrop,
	::file-selector-button {
		box-sizing: border-box;
	}

	/*
	 * Reset margins and padding on elements that typically have browser defaults.
	 * This is more targeted than using * to avoid affecting custom elements.
	 */
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	ul,
	ol,
	li,
	dl,
	dt,
	dd,
	figure,
	figcaption,
	fieldset,
	legend,
	form,
	hr,
	table,
	th,
	td {
		margin: 0;
		padding: 0;
	}

	/*
	 * Reset borders on elements that typically have them.
	 */
	fieldset,
	hr,
	iframe {
		border: 0 solid;
	}

	/*
	 * 1. Use a consistent sensible line-height in all browsers.
	 * 2. Prevent adjustments of font size after orientation changes in iOS.
	 * 3. Use a more readable tab size.
	 * 4. Use the configured font-family.
	 * 5. Disable tap highlights on iOS.
	 */
	:host {
		line-height: 1.5;
		-webkit-text-size-adjust: 100%;
		tab-size: 4;
		font-family: var(--cz-font-body);
		-webkit-tap-highlight-color: transparent;
	}

	/*
	 * Reset links to optimize for opt-in styling.
	 */
	a {
		color: inherit;
		text-decoration: inherit;
	}

	/*
	 * Add the correct font weight in Edge and Safari.
	 */
	b,
	strong {
		font-weight: bolder;
	}

	/*
	 * 1. Use the configured mono font-family.
	 * 2. Correct the odd em font sizing in all browsers.
	 */
	code,
	kbd,
	samp,
	pre {
		font-family: var(--cz-font-mono);
		font-size: 1em;
	}

	/*
	 * Add the correct font size in all browsers.
	 */
	small {
		font-size: 80%;
	}

	/*
	 * Prevent sub and sup from affecting line height.
	 */
	sub,
	sup {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}

	sub {
		bottom: -0.25em;
	}

	sup {
		top: -0.5em;
	}

	/*
	 * 1. Make replaced elements display: block by default.
	 * 2. Add vertical-align: middle for better alignment.
	 */
	img,
	svg,
	video,
	canvas,
	audio,
	iframe,
	embed,
	object {
		display: block;
		vertical-align: middle;
	}

	/*
	 * Constrain images and videos to parent width.
	 */
	img,
	video {
		max-width: 100%;
		height: auto;
	}

	/*
	 * Reset form controls:
	 * 1. Inherit font styles in all browsers.
	 * 2. Remove default margins, padding, and borders.
	 * 3. Remove border radius.
	 * 4. Remove background color.
	 */
	button,
	input,
	select,
	optgroup,
	textarea,
	::file-selector-button {
		margin: 0;
		padding: 0;
		border: 0 solid;
		font: inherit;
		font-feature-settings: inherit;
		font-variation-settings: inherit;
		letter-spacing: inherit;
		color: inherit;
		border-radius: 0;
		background-color: transparent;
	}

	/*
	 * Reset placeholder opacity in Firefox.
	 */
	::placeholder {
		opacity: 1;
		color: var(--cz-color-text-placeholder, currentcolor);
	}

	/*
	 * Prevent horizontal textarea resize.
	 */
	textarea {
		resize: vertical;
	}

	/*
	 * Remove the inner padding in Chrome and Safari on macOS.
	 */
	::-webkit-search-decoration {
		-webkit-appearance: none;
	}

	/*
	 * Correct the inability to style the border radius in iOS Safari.
	 */
	button,
	input:where([type='button'], [type='reset'], [type='submit']),
	::file-selector-button {
		appearance: button;
	}

	/*
	 * Make elements with hidden attribute stay hidden.
	 */
	[hidden]:where(:not([hidden='until-found'])) {
		display: none !important;
	}
`);function me(t,e,n){const o=B(t,n?.in);if(isNaN(e))return ee(t,NaN);if(!e)return o;const s=o.getDate(),r=ee(t,o.getTime());r.setMonth(o.getMonth()+e+1,0);const i=r.getDate();return s>=i?r:(o.setFullYear(r.getFullYear(),r.getMonth(),s),o)}function Cc(t,e,n){return Be(t,e*7,n)}function Ec(t){return ee(t,Date.now())}function he(t,e,n){const[o,s]=$n(n?.in,t,e);return+Pt(o)==+Pt(s)}function Co(t,e,n){const[o,s]=$n(n?.in,t,e),r=o.getFullYear()-s.getFullYear(),i=o.getMonth()-s.getMonth();return r*12+i}function At(t,e){const n=B(t,e?.in),o=n.getMonth();return n.setFullYear(n.getFullYear(),o+1,0),n.setHours(23,59,59,999),n}function lt(t,e){const n=B(t,e?.in);return n.setDate(1),n.setHours(0,0,0,0),n}function Lc(t,e){const n=B(t,e?.in),o=n.getFullYear();return n.setFullYear(o+1,0,0),n.setHours(23,59,59,999),n}function Cs(t,e){const n=B(t,e?.in),o=n.getFullYear(),s=n.getMonth(),r=ee(n,0);return r.setFullYear(o,s+1,0),r.setHours(0,0,0,0),r.getDate()}function qt(t,e){return+B(t)>+B(e)}function ht(t,e){return+B(t)<+B(e)}function Oc(t,e){return he(ee(t,t),Ec(t))}function Eo(t,e,n){const o=+B(t,n?.in),[s,r]=[+B(e.start,n?.in),+B(e.end,n?.in)].sort((i,a)=>i-a);return o>=s&&o<=r}function Ie(t,e,n){return Be(t,-e,n)}function ct(t,e,n){return me(t,-e,n)}function Mc(t,e,n){return Cc(t,-1,n)}const Lo=ve(class extends De{constructor(t){if(super(t),t.type!==ae.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(e)}const n=t.element.classList;for(const o of this.st)o in e||(n.remove(o),this.st.delete(o));for(const o in e){const s=!!e[o];s===this.st.has(o)||this.nt?.has(o)||(s?(n.add(o),this.st.add(o)):(n.remove(o),this.st.delete(o)))}return J}}),Es=t=>(new Intl.Locale(t).getWeekInfo?.()?.firstDay??1)%7,Rc=(t,e)=>{const n=Es(e);return(t.getDay()-n+7)%7},Je=(t,e)=>Ie(t,Rc(t,e)),Pc=(t,e,n,o)=>{const s=re(t),r=re(e),i=new Intl.DateTimeFormat(n,{year:"numeric",month:"short",day:"numeric"});return o?s?i.format(s):D("Select date"):s&&r?`${i.format(s)} – ${i.format(r)}`:D("Select dates")},Tc=t=>t.target?.dispatchEvent(new Event("select",{bubbles:!0})),Ze=(t,e,n)=>e&&ht(t,e)?e:n&&qt(t,n)?n:t,rt=(t,e,n)=>{const o=re(t),s=re(e),r=re(n);return Y(Ze(o,s,r),"yyyy-MM-dd")},Ac=({start:t,end:e},n,o,s)=>{n({start:rt(q(t),o,s),end:rt(q(e),o,s)})},Oo=(t,e,n)=>!!e&&!!n&&e===q(t.start)&&n===q(t.end),Mo=(t,e)=>e!=="single",Dc=t=>{const e=Es(t),n=new Intl.DateTimeFormat(t,{weekday:"short"});return Array.from({length:7},(s,r)=>n.format(new Date(2023,0,1+r+e)))},Fc=(t,e)=>{const n=lt(t),o=Je(n,e),s=6,r=[];for(let i=0;i<s;i++){const a=[];for(let l=0;l<7;l++){const c=Be(o,i*7+l),u={day:c.getDate(),iso:c.toISOString(),isToday:Oc(c),isCurrentMonth:n.getMonth()===c.getMonth()};a.push(u)}r.push(a)}return r},Ls=(t,e,n)=>!!(e&&he(t,e)||n&&he(t,n)),Os=(t,e,n,o)=>!!(n&&e&&Eo(t,{start:e,end:n})||!n&&o&&e&&Eo(t,{start:e,end:o})),$t=(t,e,n)=>!!(e&&ht(t,e)||n&&qt(t,n)),Nc=(t,e,n,o)=>e&&$t(t,n,o)?"true":void 0,En=(t,e)=>e&&he(t,e)?!0:void 0,Ln=(t,e)=>e&&he(t,e)?!0:void 0,ln=(t,e)=>ht(t,lt(e)),cn=(t,e,n)=>qt(t,At(me(e,n-1))),Ic=(t,e)=>({ArrowLeft:Ie(e,1),ArrowRight:Be(e,1),ArrowUp:Ie(e,7),ArrowDown:Be(e,7)})[t.key],vt=t=>re(t.target.dataset.date),Ms=(t,e,n,o,s)=>s?Os(t,e,n,o):Ls(t,e,n),jc=(t,e,n,o,s)=>Ms(t,e,n,o,s)?"true":void 0,Vc=(t,e,n,o,s)=>s&&!n&&!!e&&he(t,o),Bc=(t,e)=>e?he(new Date(t.iso),e):t.isToday&&t.isCurrentMonth,Ro=(t,e,n)=>n&&t&&!e,Wc=(t,e,n,o)=>{const s={weekday:"long",year:"numeric",month:"long",day:"numeric"};return e&&n&&(En(t,e)||Ln(t,n))?[D("Selected range: {startDate} to {endDate}",{startDate:e.toLocaleString(o,s),endDate:n.toLocaleString(o,s)}),t.toLocaleString(o,s)].join(", "):t.toLocaleString(o,s)},Hc=({day:t,date:e,startDate:n,endDate:o,focusedDate:s,locale:r,isRangeMode:i})=>[Ro(n,o,i)&&D("Selecting"),Wc(e,n,o,r),t.isToday&&t.isCurrentMonth&&D("Today"),En(e,n)&&i&&D("Start date"),Ln(e,o)&&D("End date"),!Ro(n,o,i)&&Ms(e,n,o,s,i)&&D("Selected")].filter(Boolean).join(", "),Yc=({day:t,endDate:e,focusedDate:n,locale:o,maxDate:s,minDate:r,isSingleDateMode:i,numberOfMonths:a,onClick:l,onFocus:c,onPointerDown:u,onPointerEnter:d,startDate:f})=>{const h=new Date(t.iso),p=!i,m=!t.isCurrentMonth&&a>1,g=Nc(h,t.isCurrentMonth,r,s),b=g||!t.isCurrentMonth?"true":void 0,y={role:"gridcell",ariaHidden:m?"true":void 0,ariaDisabled:b,ariaSelected:jc(h,f,e,n,p)},v={role:"button",tabIndex:he(h,n)?0:-1,ariaLabel:Hc({day:t,date:h,startDate:f,endDate:e,focusedDate:n,locale:o,isRangeMode:p}),ariaDisabled:b,autofocus:Bc(t,f)};return x`
		<td ?data-hidden=${m} ${bn(y)}>
			<div
				class=${Lo({"date-cell-wrapper":!0,"in-range":p&&Os(h,f,e,n)})}
			>
				<div
					class=${Lo({"date-cell":!0,"selected-cell":Ls(h,f,e),"focused-highlighted-cell":Vc(h,f,e,n,p),"today-cell":t.isToday&&t.isCurrentMonth,"other-month-cell":!t.isCurrentMonth})}
					data-date=${C(t.isCurrentMonth?Y(h,"yyyy-MM-dd"):void 0)}
					data-testid=${C(t.isCurrentMonth?`date-${Y(h,"yyyy-MM-dd")}`:void 0)}
					data-disabled=${C(g)}
					data-start=${C(En(h,f))}
					data-end=${C(Ln(h,e))}
					@pointerdown=${u}
					@click=${l}
					@pointerenter=${d}
					@focus=${c}
					${bn(v)}
				>
					${t.day}
				</div>
			</div>
		</td>
	`},Uc=({endDate:t,focusedDate:e,locale:n,maxDate:o,minDate:s,isSingleDateMode:r,month:i,numberOfMonths:a,onClick:l,onFocus:c,onKeyDown:u,onPointerDown:d,onPointerEnter:f,startDate:h,weekdayNames:p})=>x`
	<table role="grid" @keydown=${u}>
		<thead>
			<tr aria-hidden="true">
				${_e(p,m=>m,m=>x`<th><div class="weekday">${m}</div></th>`)}
			</tr>
		</thead>
		<tbody>
			${_e(i,(m,g)=>`month-${g}`,m=>x`
					<tr>
						${_e(m,g=>g.iso,g=>Yc({day:g,endDate:t,focusedDate:e,locale:n,maxDate:o,minDate:s,isSingleDateMode:r,numberOfMonths:a,onClick:l,onFocus:c,onPointerDown:d,onPointerEnter:f,startDate:h}))}
					</tr>
				`)}
		</tbody>
	</table>
`,Kc=G`
	position: relative;

	&::before {
		content: '';
		position: absolute;
		inset: 1px;
		border: 1px solid var(--skeumorphic-color, rgba(255, 255, 255, 0.12));
		border-radius: var(--skeumorphic-radius, calc(var(--cz-radius-md) - 1px));
		pointer-events: none;
		mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
		-webkit-mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
	}
`,qc=G`
	:host {
		display: inline-flex;
	}

	:host([full-width]) {
		display: flex;
		width: 100%;
	}

	:host([hidden]) {
		display: none;
	}

	/* ========================================
	 * SIZE VARIANTS
	 * ======================================== */

	:host([size='sm']) .button {
		height: 36px;
		padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 3.5);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);
	}

	:host([size='sm']) ::slotted(svg) {
		width: 16px;
		height: 16px;
	}

	:host([size='lg']) .button {
		height: 44px;
		padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 4.5);
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
		border-radius: var(--cz-radius-md);
	}

	:host([size='xl']) .button {
		height: 48px;
		padding: calc(var(--cz-spacing) * 3) calc(var(--cz-spacing) * 5);
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
		border-radius: var(--cz-radius-md);
	}

	/* ========================================
	 * BUTTON BASE STYLES (Primary - default)
	 * ======================================== */

	.button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		cursor: pointer;
		font-family: var(--cz-font-body);
		font-weight: var(--cz-font-weight-semibold);
		text-decoration: none;
		transition:
			background-color 0.15s ease,
			box-shadow 0.15s ease;
		width: 100%;
		white-space: nowrap;
		border: none;
		background: none;
		text-align: center;

		/* Medium (md) - default size */
		height: 40px;
		padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 4);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);

		/* Primary - default variant */
		${Kc}
		background-color: var(--cz-color-bg-brand-solid);
		color: var(--cz-color-text-on-brand);
		box-shadow: var(--cz-shadow-xs-skeumorphic);

		&:hover {
			background-color: var(--cz-color-bg-brand-solid-hover);
		}

		&:active {
			background-color: var(--cz-color-brand-800);
		}

		&:focus-visible {
			outline: none;
			box-shadow: var(--cz-shadow-xs-skeumorphic), var(--cz-focus-ring);
		}
	}

	/* ========================================
	 * STYLE VARIANTS
	 * ======================================== */

	:host([variant='secondary']) .button {
		background-color: var(--cz-color-bg-primary);
		color: var(--cz-color-text-secondary);

		&:hover {
			background-color: var(--cz-color-bg-primary-hover);
			color: var(--cz-color-text-secondary-hover);
		}

		&:active {
			background-color: var(--cz-color-bg-tertiary);
		}

		&:focus-visible {
			box-shadow: var(--cz-shadow-xs-skeumorphic), var(--cz-focus-ring);
		}
	}

	:host([variant='tertiary']) .button {
		background-color: transparent;
		color: var(--cz-color-text-secondary);
		box-shadow: none;

		&::before {
			display: none;
		}

		&:hover {
			background-color: var(--cz-color-bg-primary-hover);
			color: var(--cz-color-text-secondary-hover);
		}

		&:active {
			background-color: var(--cz-color-bg-secondary);
		}

		&:focus-visible {
			box-shadow: var(--cz-focus-ring);
		}
	}

	:host([variant='destructive']) .button {
		background-color: var(--cz-color-bg-error-solid);

		&:hover {
			background-color: var(--cz-color-bg-error-solid-hover);
		}

		&:active {
			background-color: var(--cz-color-error-800);
		}

		&:focus-visible {
			box-shadow: var(--cz-shadow-xs-skeumorphic), var(--cz-focus-ring-error);
		}
	}

	:host([variant='link']) .button {
		background-color: transparent;
		color: var(--cz-color-text-brand);
		box-shadow: none;
		padding: 0;
		height: auto;

		&::before {
			display: none;
		}

		&:hover {
			text-decoration: underline;
			color: var(--cz-color-text-brand-hover);
		}

		&:active {
			color: var(--cz-color-brand-800);
		}

		&:focus-visible {
			text-decoration: underline;
			box-shadow: var(--cz-focus-ring);
			border-radius: var(--cz-radius-xs);
		}
	}

	/* ========================================
	 * DISABLED STATE
	 * ======================================== */

	:host([disabled]) .button {
		cursor: not-allowed;
		pointer-events: none;

		&::before {
			display: none;
		}
	}

	:host([disabled]) .button,
	:host([disabled][variant='primary']) .button {
		background-color: var(--cz-color-bg-disabled);
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	:host([disabled][variant='secondary']) .button {
		background-color: var(--cz-color-bg-primary);
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	:host([disabled][variant='tertiary']) .button {
		background-color: transparent;
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	:host([disabled][variant='destructive']) .button {
		background-color: var(--cz-color-bg-disabled);
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	:host([disabled][variant='link']) .button {
		background-color: transparent;
		color: var(--cz-color-text-disabled);
	}

	/* ========================================
	 * ICON SLOTS
	 * ======================================== */

	::slotted(svg) {
		width: 20px;
		height: 20px;
		flex-shrink: 0;
	}
`,Gc=["variant","size","disabled","full-width","type","value","href","target","rel","download"],Xc=t=>{const e=t.hasAttribute("disabled"),n=t.getAttribute("type")||"button",o=t.getAttribute("href");M(()=>{const r=i=>{t.hasAttribute("disabled")&&i.stopImmediatePropagation()};return t.addEventListener("click",r,{capture:!0}),()=>t.removeEventListener("click",r,{capture:!0})},[]);const s=x`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`;if(o!=null){const r=t.getAttribute("target"),i=t.getAttribute("rel"),a=t.getAttribute("download");return x`
			<a
				href=${o}
				class="button"
				part="button"
				aria-disabled=${e?"true":ie}
				target=${C(r)}
				rel=${C(i)}
				download=${C(a)}
				>${s}</a
			>
		`}return x`
		<button type=${n} class="button" ?disabled=${e} part="button">
			${s}
		</button>
	`};customElements.define("cosmoz-button",K(Xc,{observedAttributes:Gc,styleSheets:[Kt,qc],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Qc=({index:t,locale:e,numberOfMonths:n,selectedMonth:o,setSelectedMonth:s})=>x`
	<header>
		${F(t===0,()=>x`
				<cosmoz-button
					size="sm"
					variant="tertiary"
					class="prev-button"
					aria-label=${D("Previous month")}
					@click=${()=>s(ct(o,n))}
					><span aria-hidden="true">${al()}</span></cosmoz-button
				>
			`)}
		<h2 class="month-label" aria-live="polite" aria-atomic="true">
			${me(o,t).toLocaleString(e,{month:"long",year:"numeric"})}
		</h2>
		${F(t===n-1,()=>x`
				<cosmoz-button
					size="sm"
					variant="tertiary"
					class="next-button"
					aria-label=${D("Next month")}
					@click=${()=>s(me(o,n))}
					><span aria-hidden="true">${ll()}</span></cosmoz-button
				>
			`)}
	</header>
`,Jc=G`
	:host {
		--cell-size: calc(var(--cz-spacing) * 10);
		color: var(--cz-color-text-primary);
	}

	.calendar {
		display: flex;
	}

	.separator {
		width: 1px;
		align-self: stretch;
		background: var(--cz-color-border-secondary);
		flex-shrink: 0;
	}

	.month-wrapper {
		display: flex;
		flex-direction: column;
		gap: calc(var(--cz-spacing) * 3);
	}

	.month-wrapper.padded {
		padding: calc(var(--cz-spacing) * 5) calc(var(--cz-spacing) * 6);
	}

	header {
		display: grid;
		align-items: center;
		grid-template-columns: 36px 1fr 36px;
		grid-template-areas: 'a b c';
	}

	.month-label {
		grid-area: b;
		text-align: center;
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-weight: var(--cz-font-weight-semibold);
		color: var(--cz-color-text-secondary);
		text-transform: capitalize;
	}

	.prev-button {
		grid-area: a;
	}

	.next-button {
		grid-area: c;
	}

	cosmoz-button::part(button) {
		padding: calc(var(--cz-spacing) * 2);
	}

	table {
		border-collapse: collapse;
	}

	tr {
		border-bottom: var(--cz-spacing) solid transparent;
	}

	.weekday {
		width: var(--cell-size);
		height: var(--cell-size);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-weight: var(--cz-font-weight-medium);
		color: var(--cz-color-text-secondary);
		text-transform: capitalize;
	}

	.date-cell-wrapper {
		position: relative;
	}

	td:not([data-hidden]) .date-cell-wrapper.in-range {
		background: var(--cz-color-bg-secondary);
		border-radius: 0;
	}

	.date-cell-wrapper.in-range:has(.date-cell[data-start]),
	td:first-child .date-cell-wrapper.in-range {
		border-top-left-radius: var(--cz-radius-full);
		border-bottom-left-radius: var(--cz-radius-full);
	}

	.date-cell-wrapper.in-range:has(.date-cell[data-end]),
	td:last-child .date-cell-wrapper.in-range {
		border-top-right-radius: var(--cz-radius-full);
		border-bottom-right-radius: var(--cz-radius-full);
	}

	td:not([data-hidden]) + td[data-hidden] .date-cell-wrapper.in-range::after {
		content: '';
		position: absolute;
		inset: 0;

		background: linear-gradient(
			to left,
			transparent,
			var(--cz-color-bg-secondary)
		);
	}

	td[data-hidden]:has(+ td:not([data-hidden]))
		.date-cell-wrapper.in-range::after {
		content: '';
		position: absolute;
		inset: 0;

		background: linear-gradient(
			to right,
			transparent,
			var(--cz-color-bg-secondary)
		);
	}

	.date-cell {
		position: relative;
		width: var(--cell-size);
		height: var(--cell-size);
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: var(--cz-radius-full);
		user-select: none;
		cursor: pointer;
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		color: var(--cz-color-text-secondary);
	}

	.date-cell:not([data-disabled='true'], .other-month-cell):hover {
		background: var(--cz-color-bg-primary-hover);
		color: var(--cz-color-text-primary);
		font-weight: var(--cz-font-weight-medium);
	}

	.date-cell[data-disabled='true'] {
		cursor: not-allowed;
		color: var(--cz-color-text-placeholder-subtle);
	}

	.date-cell:focus-within {
		outline: none;
		box-shadow: var(--cz-focus-ring);
	}

	.date-cell.today-cell {
		background: var(--cz-color-bg-secondary);
	}

	.date-cell.today-cell::after {
		content: '';
		width: 4px;
		height: 4px;
		border-radius: var(--cz-radius-full);
		position: absolute;
		bottom: 4px;
		left: 50%;
		transform: translateX(-50%);
		background: var(--cz-color-bg-brand-solid);
	}

	.date-cell.selected-cell.today-cell::after,
	.date-cell.focused-highlighted-cell.today-cell::after {
		background: var(--cz-color-text-on-brand);
	}

	.date-cell.today-cell:hover {
		background: var(--cz-color-bg-secondary-hover);
	}

	.in-range .date-cell:hover {
		background: var(--cz-color-bg-secondary-hover);
	}

	.date-cell.selected-cell,
	.date-cell.focused-highlighted-cell {
		color: var(--cz-color-text-on-brand);
		background: var(--cz-color-bg-brand-solid);
	}

	.date-cell.selected-cell:hover,
	.date-cell.focused-highlighted-cell:hover {
		color: var(--cz-color-text-on-brand);
		background: var(--cz-color-bg-brand-solid-hover);
	}

	.date-cell.other-month-cell {
		cursor: default;
		color: var(--cz-color-text-placeholder-subtle);
	}

	td[data-hidden] .date-cell {
		visibility: hidden;
	}
`,Rs=(t,e)=>{const n=Mo(t,e)?t?.start:t,o=Mo(t,e)?t?.end:void 0;return{start:n,end:o}},Zc=t=>{const{locale:e,mode:n="range",numberOfMonths:o,min:s,max:r}=t,i=n==="single",a=e??navigator.language,l=Number(o??1),[c,u]=ke("value"),{start:d,end:f}=Rs(c,n),h=P(()=>re(d),[d]),[p,m]=U(h),g=P(()=>re(f),[f]),b=P(()=>re(s),[s]),y=P(()=>re(r),[r]),v=P(()=>Ze(h??new Date,b,y),[h,b,y]),[_,$]=U(v),[E,z]=U(!1),[W,O]=U(v),N=P(()=>Dc(a),[a]);M(()=>{E&&t.shadowRoot?.querySelector(`[data-date="${Y(W,"yyyy-MM-dd")}"]`)?.focus()},[W,t,E]);const Q=P(()=>{const w=[];for(let L=0;L<l;L++)w.push(Fc(me(_,L),a));return w},[_,a,l]),X=S(w=>{const L=Y(w,"yyyy-MM-dd");if(i){u(L);return}if(!h&&!g){u({start:L,end:void 0});return}if(h&&!g&&ht(w,h)){u({start:L,end:Y(h,"yyyy-MM-dd")});return}if(h&&!g){u({start:d,end:L});return}h&&g&&u({start:L,end:void 0})},[i,h,g,d,u]),V=S(w=>{const L=Ze(w,b,y);ln(L,_)&&$(I=>ct(I,l)),cn(L,_,l)&&$(I=>me(I,l)),O(L)},[b,y,l,_,O,$]);M(()=>{if(!(!h||he(p,h))){if(m(h),h&&ln(h,_)){const w=Co(h,_),L=Math.ceil(Math.abs(w)/l);$(I=>ct(I,L*l))}if(h&&cn(h,_,l)){const w=Co(h,me(_,l-1)),L=Math.ceil(w/l);$(I=>me(I,L*l))}}},[h,p,m,_,$,l]),M(()=>{if(ln(W,_)){const w=Ze(lt(_),b,y);z(!1),O(w)}if(cn(W,_,l)){const w=Ze(At(me(_,l-1)),b,y);z(!1),O(w)}},[W,y,b,l,_,O,z]);const R=S(w=>{if(!(w.target instanceof Element))return;const L=w.target.closest("[data-date]");if(!L?.dataset.date||L.dataset.disabled==="true")return;const I=re(L.dataset.date);if(w.key==="Enter"||w.key===" "){w.preventDefault(),X(I);return}const se=Ic(w,I);se&&(w.preventDefault(),V(se))},[V,X]),ne=S(w=>{const L=vt(w);!L||$t(L,b,y)||X(L)},[X,b,y]),j=S(w=>{const L=vt(w);(!L||$t(L,b,y))&&w.preventDefault()},[b,y]),T=S(w=>{const L=vt(w);!i&&L&&h&&!g&&!$t(L,b,y)&&O(L)},[i,h,g,b,y,O]),H=S(w=>{const L=vt(w);L&&(O(L),z(!0))},[h,g,O,z]);return{endDate:g,focusedDate:W,isSingleDateMode:i,locale:a,maxDate:y,minDate:b,monthMatrices:Q,numberOfMonths:l,onClick:ne,onKeyDown:R,selectedMonth:_,setSelectedMonth:$,startDate:h,weekdayNames:N,onPointerEnter:T,onFocus:H,onPointerDown:j}},eu=t=>{const{endDate:e,focusedDate:n,isSingleDateMode:o,locale:s,maxDate:r,minDate:i,monthMatrices:a,numberOfMonths:l,onClick:c,onFocus:u,onKeyDown:d,onPointerDown:f,onPointerEnter:h,selectedMonth:p,setSelectedMonth:m,startDate:g,weekdayNames:b}=Zc(t);return x`<div class="calendar">
		${_e(a,(y,v)=>`cal-${v}`,(y,v)=>[x`
					<div class="month-wrapper ${l>1?"padded":""}">
						${[Qc({index:v,locale:s,numberOfMonths:l,selectedMonth:p,setSelectedMonth:m}),Uc({endDate:e,focusedDate:n,locale:s,maxDate:r,minDate:i,isSingleDateMode:o,month:y,numberOfMonths:l,onClick:c,onFocus:u,onKeyDown:d,onPointerDown:f,onPointerEnter:h,startDate:g,weekdayNames:b})]}
					</div>
				`,F(v<l-1,()=>x`<div class="separator"></div>`)])}
	</div> `};customElements.define("cosmoz-calendar",K(eu,{observedAttributes:["locale","mode","number-of-months"],styleSheets:[Kt,Jc],shadowRootInit:{delegatesFocus:!0,mode:"open"}}));const Ps="important",tu=" !"+Ps,nu=ve(class extends De{constructor(t){if(super(t),t.type!==ae.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,n)=>{const o=t[n];return o==null?e:e+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(t,[e]){const{style:n}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const o of this.ft)e[o]==null&&(this.ft.delete(o),o.includes("-")?n.removeProperty(o):n[o]=null);for(const o in e){const s=e[o];if(s!=null){this.ft.add(o);const r=typeof s=="string"&&s.endsWith(tu);o.includes("-")||r?n.setProperty(o,r?s.slice(0,-11):s,r?Ps:""):n[o]=s}}return J}}),ou=(t=HTMLElement)=>class extends t{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},su=G`
	:host {
		position: fixed;
		left: -9999999999px;
		min-width: 72px;
		box-sizing: border-box;
		padding: var(--cosmoz-dropdown-spacing, 0px);
		z-index: var(--cosmoz-dropdown-z-index, 2);
		border-radius: var(--cosmoz-dropdown-border-radius, 15px);
	}
	:host(:popover-open) {
		margin: 0;
		border: 0;
		padding: 0;
		overflow: visible;
	}
	.wrap {
		background: var(--cosmoz-dropdown-bg-color, #fff);
		box-shadow: var(
			--cosmoz-dropdown-box-shadow,
			0px 3px 4px 2px rgba(0, 0, 0, 0.1)
		);
		border-radius: var(--cosmoz-dropdown-border-radius, 15px);
	}
	::slotted(*) {
		display: block;
	}
`,ru=()=>x`<div class="wrap" part="wrap"><slot></slot></div>`;customElements.define("cosmoz-dropdown-content",ou(K(ru,{styleSheets:[su]})));const Dt=Math.min,Te=Math.max,Ft=Math.round,wt=Math.floor,de=t=>({x:t,y:t}),iu={left:"right",right:"left",bottom:"top",top:"bottom"},au={start:"end",end:"start"};function Po(t,e,n){return Te(t,Dt(e,n))}function On(t,e){return typeof t=="function"?t(e):t}function We(t){return t.split("-")[0]}function Mn(t){return t.split("-")[1]}function Ts(t){return t==="x"?"y":"x"}function As(t){return t==="y"?"height":"width"}const lu=new Set(["top","bottom"]);function Me(t){return lu.has(We(t))?"y":"x"}function Ds(t){return Ts(Me(t))}function cu(t,e,n){n===void 0&&(n=!1);const o=Mn(t),s=Ds(t),r=As(s);let i=s==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(i=Nt(i)),[i,Nt(i)]}function uu(t){const e=Nt(t);return[yn(t),e,yn(e)]}function yn(t){return t.replace(/start|end/g,e=>au[e])}const To=["left","right"],Ao=["right","left"],du=["top","bottom"],hu=["bottom","top"];function fu(t,e,n){switch(t){case"top":case"bottom":return n?e?Ao:To:e?To:Ao;case"left":case"right":return e?du:hu;default:return[]}}function pu(t,e,n,o){const s=Mn(t);let r=fu(We(t),n==="start",o);return s&&(r=r.map(i=>i+"-"+s),e&&(r=r.concat(r.map(yn)))),r}function Nt(t){return t.replace(/left|right|bottom|top/g,e=>iu[e])}function gu(t){return{top:0,right:0,bottom:0,left:0,...t}}function mu(t){return typeof t!="number"?gu(t):{top:t,right:t,bottom:t,left:t}}function It(t){const{x:e,y:n,width:o,height:s}=t;return{width:o,height:s,top:n,left:e,right:e+o,bottom:n+s,x:e,y:n}}function Do(t,e,n){let{reference:o,floating:s}=t;const r=Me(e),i=Ds(e),a=As(i),l=We(e),c=r==="y",u=o.x+o.width/2-s.width/2,d=o.y+o.height/2-s.height/2,f=o[a]/2-s[a]/2;let h;switch(l){case"top":h={x:u,y:o.y-s.height};break;case"bottom":h={x:u,y:o.y+o.height};break;case"right":h={x:o.x+o.width,y:d};break;case"left":h={x:o.x-s.width,y:d};break;default:h={x:o.x,y:o.y}}switch(Mn(e)){case"start":h[i]-=f*(n&&c?-1:1);break;case"end":h[i]+=f*(n&&c?-1:1);break}return h}const bu=async(t,e,n)=>{const{placement:o="bottom",strategy:s="absolute",middleware:r=[],platform:i}=n,a=r.filter(Boolean),l=await(i.isRTL==null?void 0:i.isRTL(e));let c=await i.getElementRects({reference:t,floating:e,strategy:s}),{x:u,y:d}=Do(c,o,l),f=o,h={},p=0;for(let m=0;m<a.length;m++){const{name:g,fn:b}=a[m],{x:y,y:v,data:_,reset:$}=await b({x:u,y:d,initialPlacement:o,placement:f,strategy:s,middlewareData:h,rects:c,platform:i,elements:{reference:t,floating:e}});u=y??u,d=v??d,h={...h,[g]:{...h[g],..._}},$&&p<=50&&(p++,typeof $=="object"&&($.placement&&(f=$.placement),$.rects&&(c=$.rects===!0?await i.getElementRects({reference:t,floating:e,strategy:s}):$.rects),{x:u,y:d}=Do(c,f,l)),m=-1)}return{x:u,y:d,placement:f,strategy:s,middlewareData:h}};async function Fs(t,e){var n;e===void 0&&(e={});const{x:o,y:s,platform:r,rects:i,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:h=0}=On(e,t),p=mu(h),g=a[f?d==="floating"?"reference":"floating":d],b=It(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(g)))==null||n?g:g.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),y=d==="floating"?{x:o,y:s,width:i.floating.width,height:i.floating.height}:i.reference,v=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a.floating)),_=await(r.isElement==null?void 0:r.isElement(v))?await(r.getScale==null?void 0:r.getScale(v))||{x:1,y:1}:{x:1,y:1},$=It(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:y,offsetParent:v,strategy:l}):y);return{top:(b.top-$.top+p.top)/_.y,bottom:($.bottom-b.bottom+p.bottom)/_.y,left:(b.left-$.left+p.left)/_.x,right:($.right-b.right+p.right)/_.x}}const yu=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:s,middlewareData:r,rects:i,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:m=!0,...g}=On(t,e);if((n=r.arrow)!=null&&n.alignmentOffset)return{};const b=We(s),y=Me(a),v=We(a)===a,_=await(l.isRTL==null?void 0:l.isRTL(c.floating)),$=f||(v||!m?[Nt(a)]:uu(a)),E=p!=="none";!f&&E&&$.push(...pu(a,m,p,_));const z=[a,...$],W=await Fs(e,g),O=[];let N=((o=r.flip)==null?void 0:o.overflows)||[];if(u&&O.push(W[b]),d){const R=cu(s,i,_);O.push(W[R[0]],W[R[1]])}if(N=[...N,{placement:s,overflows:O}],!O.every(R=>R<=0)){var Q,X;const R=(((Q=r.flip)==null?void 0:Q.index)||0)+1,ne=z[R];if(ne&&(!(d==="alignment"?y!==Me(ne):!1)||N.every(H=>Me(H.placement)===y?H.overflows[0]>0:!0)))return{data:{index:R,overflows:N},reset:{placement:ne}};let j=(X=N.filter(T=>T.overflows[0]<=0).sort((T,H)=>T.overflows[1]-H.overflows[1])[0])==null?void 0:X.placement;if(!j)switch(h){case"bestFit":{var V;const T=(V=N.filter(H=>{if(E){const w=Me(H.placement);return w===y||w==="y"}return!0}).map(H=>[H.placement,H.overflows.filter(w=>w>0).reduce((w,L)=>w+L,0)]).sort((H,w)=>H[1]-w[1])[0])==null?void 0:V[0];T&&(j=T);break}case"initialPlacement":j=a;break}if(s!==j)return{reset:{placement:j}}}return{}}}},vu=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:s}=e,{mainAxis:r=!0,crossAxis:i=!1,limiter:a={fn:g=>{let{x:b,y}=g;return{x:b,y}}},...l}=On(t,e),c={x:n,y:o},u=await Fs(e,l),d=Me(We(s)),f=Ts(d);let h=c[f],p=c[d];if(r){const g=f==="y"?"top":"left",b=f==="y"?"bottom":"right",y=h+u[g],v=h-u[b];h=Po(y,h,v)}if(i){const g=d==="y"?"top":"left",b=d==="y"?"bottom":"right",y=p+u[g],v=p-u[b];p=Po(y,p,v)}const m=a.fn({...e,[f]:h,[d]:p});return{...m,data:{x:m.x-n,y:m.y-o,enabled:{[f]:r,[d]:i}}}}}};function Gt(){return typeof window<"u"}function Ue(t){return Ns(t)?(t.nodeName||"").toLowerCase():"#document"}function oe(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function pe(t){var e;return(e=(Ns(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Ns(t){return Gt()?t instanceof Node||t instanceof oe(t).Node:!1}function le(t){return Gt()?t instanceof Element||t instanceof oe(t).Element:!1}function fe(t){return Gt()?t instanceof HTMLElement||t instanceof oe(t).HTMLElement:!1}function Fo(t){return!Gt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof oe(t).ShadowRoot}const wu=new Set(["inline","contents"]);function ft(t){const{overflow:e,overflowX:n,overflowY:o,display:s}=ce(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!wu.has(s)}const xu=new Set(["table","td","th"]);function _u(t){return xu.has(Ue(t))}const Su=[":popover-open",":modal"];function Xt(t){return Su.some(e=>{try{return t.matches(e)}catch{return!1}})}const $u=["transform","translate","scale","rotate","perspective"],zu=["transform","translate","scale","rotate","perspective","filter"],ku=["paint","layout","strict","content"];function Rn(t){const e=Pn(),n=le(t)?ce(t):t;return $u.some(o=>n[o]?n[o]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||zu.some(o=>(n.willChange||"").includes(o))||ku.some(o=>(n.contain||"").includes(o))}function Cu(t){let e=Se(t);for(;fe(e)&&!He(e);){if(Rn(e))return e;if(Xt(e))return null;e=Se(e)}return null}function Pn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Eu=new Set(["html","body","#document"]);function He(t){return Eu.has(Ue(t))}function ce(t){return oe(t).getComputedStyle(t)}function Qt(t){return le(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Se(t){if(Ue(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Fo(t)&&t.host||pe(t);return Fo(e)?e.host:e}function Is(t){const e=Se(t);return He(e)?t.ownerDocument?t.ownerDocument.body:t.body:fe(e)&&ft(e)?e:Is(e)}function ut(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const s=Is(t),r=s===((o=t.ownerDocument)==null?void 0:o.body),i=oe(s);if(r){const a=vn(i);return e.concat(i,i.visualViewport||[],ft(s)?s:[],a&&n?ut(a):[])}return e.concat(s,ut(s,[],n))}function vn(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function js(t){const e=ce(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const s=fe(t),r=s?t.offsetWidth:n,i=s?t.offsetHeight:o,a=Ft(n)!==r||Ft(o)!==i;return a&&(n=r,o=i),{width:n,height:o,$:a}}function Tn(t){return le(t)?t:t.contextElement}function je(t){const e=Tn(t);if(!fe(e))return de(1);const n=e.getBoundingClientRect(),{width:o,height:s,$:r}=js(e);let i=(r?Ft(n.width):n.width)/o,a=(r?Ft(n.height):n.height)/s;return(!i||!Number.isFinite(i))&&(i=1),(!a||!Number.isFinite(a))&&(a=1),{x:i,y:a}}const Lu=de(0);function Vs(t){const e=oe(t);return!Pn()||!e.visualViewport?Lu:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Ou(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==oe(t)?!1:e}function Ae(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const s=t.getBoundingClientRect(),r=Tn(t);let i=de(1);e&&(o?le(o)&&(i=je(o)):i=je(t));const a=Ou(r,n,o)?Vs(r):de(0);let l=(s.left+a.x)/i.x,c=(s.top+a.y)/i.y,u=s.width/i.x,d=s.height/i.y;if(r){const f=oe(r),h=o&&le(o)?oe(o):o;let p=f,m=vn(p);for(;m&&o&&h!==p;){const g=je(m),b=m.getBoundingClientRect(),y=ce(m),v=b.left+(m.clientLeft+parseFloat(y.paddingLeft))*g.x,_=b.top+(m.clientTop+parseFloat(y.paddingTop))*g.y;l*=g.x,c*=g.y,u*=g.x,d*=g.y,l+=v,c+=_,p=oe(m),m=vn(p)}}return It({width:u,height:d,x:l,y:c})}function Jt(t,e){const n=Qt(t).scrollLeft;return e?e.left+n:Ae(pe(t)).left+n}function Bs(t,e){const n=t.getBoundingClientRect(),o=n.left+e.scrollLeft-Jt(t,n),s=n.top+e.scrollTop;return{x:o,y:s}}function Mu(t){let{elements:e,rect:n,offsetParent:o,strategy:s}=t;const r=s==="fixed",i=pe(o),a=e?Xt(e.floating):!1;if(o===i||a&&r)return n;let l={scrollLeft:0,scrollTop:0},c=de(1);const u=de(0),d=fe(o);if((d||!d&&!r)&&((Ue(o)!=="body"||ft(i))&&(l=Qt(o)),fe(o))){const h=Ae(o);c=je(o),u.x=h.x+o.clientLeft,u.y=h.y+o.clientTop}const f=i&&!d&&!r?Bs(i,l):de(0);return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-l.scrollLeft*c.x+u.x+f.x,y:n.y*c.y-l.scrollTop*c.y+u.y+f.y}}function Ru(t){return Array.from(t.getClientRects())}function Pu(t){const e=pe(t),n=Qt(t),o=t.ownerDocument.body,s=Te(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=Te(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let i=-n.scrollLeft+Jt(t);const a=-n.scrollTop;return ce(o).direction==="rtl"&&(i+=Te(e.clientWidth,o.clientWidth)-s),{width:s,height:r,x:i,y:a}}const No=25;function Tu(t,e){const n=oe(t),o=pe(t),s=n.visualViewport;let r=o.clientWidth,i=o.clientHeight,a=0,l=0;if(s){r=s.width,i=s.height;const u=Pn();(!u||u&&e==="fixed")&&(a=s.offsetLeft,l=s.offsetTop)}const c=Jt(o);if(c<=0){const u=o.ownerDocument,d=u.body,f=getComputedStyle(d),h=u.compatMode==="CSS1Compat"&&parseFloat(f.marginLeft)+parseFloat(f.marginRight)||0,p=Math.abs(o.clientWidth-d.clientWidth-h);p<=No&&(r-=p)}else c<=No&&(r+=c);return{width:r,height:i,x:a,y:l}}const Au=new Set(["absolute","fixed"]);function Du(t,e){const n=Ae(t,!0,e==="fixed"),o=n.top+t.clientTop,s=n.left+t.clientLeft,r=fe(t)?je(t):de(1),i=t.clientWidth*r.x,a=t.clientHeight*r.y,l=s*r.x,c=o*r.y;return{width:i,height:a,x:l,y:c}}function Io(t,e,n){let o;if(e==="viewport")o=Tu(t,n);else if(e==="document")o=Pu(pe(t));else if(le(e))o=Du(e,n);else{const s=Vs(t);o={x:e.x-s.x,y:e.y-s.y,width:e.width,height:e.height}}return It(o)}function Ws(t,e){const n=Se(t);return n===e||!le(n)||He(n)?!1:ce(n).position==="fixed"||Ws(n,e)}function Fu(t,e){const n=e.get(t);if(n)return n;let o=ut(t,[],!1).filter(a=>le(a)&&Ue(a)!=="body"),s=null;const r=ce(t).position==="fixed";let i=r?Se(t):t;for(;le(i)&&!He(i);){const a=ce(i),l=Rn(i);!l&&a.position==="fixed"&&(s=null),(r?!l&&!s:!l&&a.position==="static"&&!!s&&Au.has(s.position)||ft(i)&&!l&&Ws(t,i))?o=o.filter(u=>u!==i):s=a,i=Se(i)}return e.set(t,o),o}function Nu(t){let{element:e,boundary:n,rootBoundary:o,strategy:s}=t;const i=[...n==="clippingAncestors"?Xt(e)?[]:Fu(e,this._c):[].concat(n),o],a=i[0],l=i.reduce((c,u)=>{const d=Io(e,u,s);return c.top=Te(d.top,c.top),c.right=Dt(d.right,c.right),c.bottom=Dt(d.bottom,c.bottom),c.left=Te(d.left,c.left),c},Io(e,a,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Iu(t){const{width:e,height:n}=js(t);return{width:e,height:n}}function ju(t,e,n){const o=fe(e),s=pe(e),r=n==="fixed",i=Ae(t,!0,r,e);let a={scrollLeft:0,scrollTop:0};const l=de(0);function c(){l.x=Jt(s)}if(o||!o&&!r)if((Ue(e)!=="body"||ft(s))&&(a=Qt(e)),o){const h=Ae(e,!0,r,e);l.x=h.x+e.clientLeft,l.y=h.y+e.clientTop}else s&&c();r&&!o&&s&&c();const u=s&&!o&&!r?Bs(s,a):de(0),d=i.left+a.scrollLeft-l.x-u.x,f=i.top+a.scrollTop-l.y-u.y;return{x:d,y:f,width:i.width,height:i.height}}function un(t){return ce(t).position==="static"}function jo(t,e){if(!fe(t)||ce(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return pe(t)===n&&(n=n.ownerDocument.body),n}function Hs(t,e){const n=oe(t);if(Xt(t))return n;if(!fe(t)){let s=Se(t);for(;s&&!He(s);){if(le(s)&&!un(s))return s;s=Se(s)}return n}let o=jo(t,e);for(;o&&_u(o)&&un(o);)o=jo(o,e);return o&&He(o)&&un(o)&&!Rn(o)?n:o||Cu(t)||n}const Vu=async function(t){const e=this.getOffsetParent||Hs,n=this.getDimensions,o=await n(t.floating);return{reference:ju(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Bu(t){return ce(t).direction==="rtl"}const Wu={convertOffsetParentRelativeRectToViewportRelativeRect:Mu,getDocumentElement:pe,getClippingRect:Nu,getOffsetParent:Hs,getElementRects:Vu,getClientRects:Ru,getDimensions:Iu,getScale:je,isElement:le,isRTL:Bu};function Ys(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Hu(t,e){let n=null,o;const s=pe(t);function r(){var a;clearTimeout(o),(a=n)==null||a.disconnect(),n=null}function i(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),r();const c=t.getBoundingClientRect(),{left:u,top:d,width:f,height:h}=c;if(a||e(),!f||!h)return;const p=wt(d),m=wt(s.clientWidth-(u+f)),g=wt(s.clientHeight-(d+h)),b=wt(u),v={rootMargin:-p+"px "+-m+"px "+-g+"px "+-b+"px",threshold:Te(0,Dt(1,l))||1};let _=!0;function $(E){const z=E[0].intersectionRatio;if(z!==l){if(!_)return i();z?i(!1,z):o=setTimeout(()=>{i(!1,1e-7)},1e3)}z===1&&!Ys(c,t.getBoundingClientRect())&&i(),_=!1}try{n=new IntersectionObserver($,{...v,root:s.ownerDocument})}catch{n=new IntersectionObserver($,v)}n.observe(t)}return i(!0),r}function Yu(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:s=!0,ancestorResize:r=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,c=Tn(t),u=s||r?[...c?ut(c):[],...ut(e)]:[];u.forEach(b=>{s&&b.addEventListener("scroll",n,{passive:!0}),r&&b.addEventListener("resize",n)});const d=c&&a?Hu(c,n):null;let f=-1,h=null;i&&(h=new ResizeObserver(b=>{let[y]=b;y&&y.target===c&&h&&(h.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var v;(v=h)==null||v.observe(e)})),n()}),c&&!l&&h.observe(c),h.observe(e));let p,m=l?Ae(t):null;l&&g();function g(){const b=Ae(t);m&&!Ys(m,b)&&n(),m=b,p=requestAnimationFrame(g)}return n(),()=>{var b;u.forEach(y=>{s&&y.removeEventListener("scroll",n),r&&y.removeEventListener("resize",n)}),d?.(),(b=h)==null||b.disconnect(),h=null,l&&cancelAnimationFrame(p)}}const Uu=vu,Ku=yu,qu=(t,e,n)=>{const o=new Map,s={platform:Wu,...n},r={...s.platform,_c:o};return bu(t,e,{...s,platform:r})},Gu=[Ku({fallbackAxisSideDirection:"start",crossAxis:!1}),Uu()],Xu=({placement:t="bottom-start",strategy:e,middleware:n=Gu}={})=>{const[o,s]=U(),[r,i]=U(),[a,l]=U();return M(()=>{if(!o||!(r instanceof HTMLElement)){l(void 0);return}return Yu(o,r,()=>qu(o,r,{placement:t,strategy:e,middleware:n}).then(l))},[o,r,t,e,n]),{setReference:s,setFloating:i,styles:P(()=>a?{left:`${a.x}px`,top:`${a.y}px`}:{},[a?.x,a?.y])}},Vo=t=>t.matches(":focus-within")?!0:t.shadowRoot?.querySelector("[popover]")?.matches(":focus-within")??!1,Qu=({disabled:t,onFocus:e})=>{const[n,o]=U(),{focused:s,closed:r}=n||{},i=s&&!t,a=Ut({closed:r,onFocus:e}),l=S(u=>o(d=>({...d,closed:u})),[]),c=S(u=>{const d=u.currentTarget;return Vo(d)?o(f=>({focused:!0,closed:!f?.closed})):d.focus()},[]);return M(()=>{if(!i)return;const u=d=>{if(d.defaultPrevented)return;const{closed:f}=a;d.key==="Escape"&&!f?(d.preventDefault(),l(!0)):["ArrowUp","Up"].includes(d.key)&&f&&(d.preventDefault(),l(!1))};return document.addEventListener("keydown",u,!0),()=>document.removeEventListener("keydown",u,!0)},[i]),{focused:i,active:i&&!r,setClosed:l,onToggle:c,onFocus:S(u=>{const d=Vo(u.currentTarget);o({focused:d}),a.onFocus?.(d)},[a])}},Ju=t=>{const e=Qu(t),{onFocus:n}=e,o=ye();return M(()=>{t.setAttribute("tabindex","0");const s=i=>{clearTimeout(o.current),n(i)},r=i=>{clearTimeout(o.current);const a=i.currentTarget;o.current=setTimeout(()=>n({currentTarget:a}),30)};return t.addEventListener("focusin",s),t.addEventListener("focusout",r),()=>{clearTimeout(o.current),t.removeEventListener("focusin",s),t.removeEventListener("focusout",r)}},[n]),e},Zu=t=>t.preventDefault(),ed=G`
	.anchor {
		pointer-events: none;
		padding: var(--cosmoz-dropdown-anchor-spacing);
	}
	button {
		pointer-events: auto;
		border: none;
		cursor: pointer;
		background: transparent;
		padding: 0;
	}
	::slotted(svg) {
		pointer-events: none;
	}
	@-moz-document url-prefix() {
		#content {
			left: auto;
		}
	}
`,td=t=>{const{placement:e,strategy:n,middleware:o,render:s}=t,{active:r,onToggle:i}=Ju(t),{styles:a,setReference:l,setFloating:c}=Xu({placement:e,strategy:n,middleware:o});return x` <div class="anchor" part="anchor" ${Ve(l)}>
			<button
				@mousedown=${Zu}
				@click=${i}
				part="button"
				id="dropdownButton"
			>
				<slot name="button">...</slot>
			</button>
		</div>
		${F(r,()=>x`<cosmoz-dropdown-content
					popover
					id="content"
					part="content"
					exportparts="wrap, content"
					style="${nu(a)}"
					@connected=${u=>u.target.showPopover?.()}
					${Ve(c)}
					><slot></slot>${mn([s],()=>s?.()||ie)}</cosmoz-dropdown-content
				> `)}`};customElements.define("cosmoz-dropdown",K(td,{styleSheets:[ed]}));const nd=G`
	:host {
		display: contents;
		max-height: var(--cosmoz-dropdown-menu-max-height, calc(96vh - 64px));
		overflow-y: auto;
		border-radius: var(--cosmoz-dropdown-border-radius, 15px);
	}
	::slotted(:not(slot)) {
		display: block;
		--paper-button_-_display: block;
		box-sizing: border-box;
		padding: 10px 24px;
		background: var(--cosmoz-dropdown-menu-bg-color, transparent);
		color: var(--cosmoz-dropdown-menu-color, #101010);
		transition:
			background 0.25s,
			color 0.25s;
		border: none;
		cursor: pointer;
		font-size: 14px;
		line-height: 20px;
		text-align: left;
		margin: 0;
		width: 100%;
	}

	::slotted(:not(slot):hover) {
		background: var(
			--cosmoz-dropdown-menu-hover-color,
			var(--cosmoz-selection-color, rgba(58, 145, 226, 0.1))
		);
	}

	::slotted(:not(slot)[disabled]) {
		opacity: 0.5;
		pointer-events: none;
	}
`,od=()=>x` <slot></slot> `;customElements.define("cosmoz-dropdown-list",K(od,{styleSheets:[nd]}));const sd=({placement:t})=>x` <cosmoz-dropdown
		.placement=${t}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`;customElements.define("cosmoz-dropdown-menu",K(sd));const rd=G`
	:host {
		display: flex;
		align-items: center;
		gap: calc(var(--cz-spacing) * 0.5);
		position: relative;
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
		font-family: var(--cz-font-body);
		color: var(--cz-color-text-primary);
		padding: calc(var(--cz-spacing) * 2);
		border-radius: var(--cz-radius-md);
		box-shadow: 0 0 0 1px var(--cz-color-border-primary);
		width: min-content;
	}

	:host(:focus-within) {
		box-shadow: var(--cz-focus-ring);
	}

	.date-input-part {
		display: grid;
		padding: 0 calc(var(--cz-spacing) * 1);
	}

	.date-input-part:focus-within {
		background: var(--cz-color-bg-brand-solid);
		color: var(--cz-color-text-on-brand);
		border-radius: var(--cz-radius-sm);
	}

	.date-input-part > * {
		grid-area: 1 / 1;
	}

	.date-input-sizer {
		font: inherit;
		visibility: hidden;
	}

	input {
		appearance: none;
		box-shadow: none;
		caret-color: transparent;
		min-width: 0;
		outline: 0;
		width: 100%;
	}

	input::selection {
		background-color: rgba(0, 0, 0, 0.01);
	}

	input::placeholder {
		color: currentColor;
	}
`,Z="",id=t=>["year","month","day"].includes(t),An=({year:t,month:e})=>e===Z||t===Z?31:Cs(new Date(Number(t),Number(e)-1)),ad=(t,e)=>t>e,Dn=({input:t,max:e,previous:n})=>{if(t===Z)return Z;if(isNaN(Number(t)))return n;const o=Number(t);return ad(o,e)?String(o).slice(-1):String(o)},ld=(t,e)=>Dn({input:t,max:An(e),previous:e.day}),cd=(t,e)=>Dn({input:t,max:12,previous:e.month}),ud=(t,e)=>Dn({input:t,max:9999,previous:e.year}),Fn=({value:t,offset:e,min:n,max:o})=>{const s=Number(t)+e;return s>o?String(n):s<n?String(o):String(s)},dd=(t,e)=>Fn({value:t.day,offset:e,min:1,max:An(t)}),hd=(t,e)=>Fn({value:t.month,offset:e,min:1,max:12}),fd=(t,e)=>Fn({value:t.year,offset:e,min:1,max:9999}),wn=(t,e)=>{if(t===Z)return Z;const n=Number(t);if(n===0)return String(n);const o=new Date(2e3,n-1,1);return Intl.DateTimeFormat(e,{numberingSystem:"latn",calendar:"gregory"}).formatToParts(o).find(i=>i.type==="month").value},zt=(t,e)=>{if(t===Z)return Z;const n=Number(t);if(n===0)return String(n);const o=new Date(2e3,0,n);return Intl.DateTimeFormat(e,{numberingSystem:"latn",calendar:"gregory"}).formatToParts(o).find(i=>i.type==="day").value},Bo=t=>{switch(t){case"year":return"YYYY";case"month":return"MM";case"day":return"DD"}},Wo=({day:t,month:e,year:n})=>Y(new Date(Number(n),Number(e)-1,Number(t)),"yyyy-MM-dd"),pd=t=>t.year.length===4&&Number(t.year)>=1&&Number(t.year)<=9999&&Number(t.month)>=1&&Number(t.month)<=12&&Number(t.day)>=1&&Number(t.day)<=Cs(new Date(Number(t.year),Number(t.month)-1))&&Object.values(t).every(e=>e!==Z),gd={year:"numeric",month:"numeric",day:"numeric",numberingSystem:"latn",calendar:"gregory"},md=(t,e)=>{const n=t.shadowRoot?.activeElement;if(!n)return;const o=[...t.shadowRoot?.querySelectorAll("input[data-type]")],s=o.indexOf(n);o[s+(e==="ArrowLeft"?-1:1)]?.focus()},Ho=(t,e)=>t?{year:String(t.getFullYear()),month:wn(t.getMonth()+1,e),day:zt(t.getDate(),e)}:{year:Z,month:Z,day:Z},bd=t=>{const{locale:e,ariaLabel:n}=t,o=e??navigator.language,[s,r]=ke("value"),i=P(()=>re(s),[s]),[a,l]=U(Ho(i,o)),c=P(()=>Intl.DateTimeFormat(o,gd).formatToParts(i),[i,o]);M(()=>{(!i||!he(i,Wo(a)))&&l(Ho(i,o))},[i,o,l]),M(()=>{pd(a)&&r(Wo(a))},[a,r]);const u=S(p=>{const g=p.target.value,b=p.target.dataset.type;l(y=>{if(b==="year"){const _=ud(g,y);return{...y,year:_}}if(b==="month"){const _=cd(g,y);return{...y,month:wn(_,o)}}const v=ld(g,y);return{...y,day:zt(v,o)}})},[o,l]),d=S(p=>{const m=p.target.dataset.type;(p.key==="ArrowDown"||p.key==="ArrowUp")&&(p.preventDefault(),l(g=>{const b=p.key==="ArrowUp"?1:-1;if(m==="year"){const v=fd(g,b);return{...g,year:v}}if(m==="month"){const v=hd(g,b);return{...g,month:wn(v,o)}}const y=dd(g,b);return{...g,day:zt(y,o)}})),(p.key==="ArrowLeft"||p.key==="ArrowRight")&&(p.preventDefault(),md(t,p.key))},[t,o,l]),f=S(()=>{const p=An(a);l(m=>Number(a.day)>p?{...m,day:zt(p,o)}:m)},[a,l,o]),h=S(p=>{p.target.select()},[]);return{inputState:a,onChange:u,onKeyDown:d,onBlur:f,onClick:h,localeDateParts:c,hostAriaLabel:n}},Us={year:{getLabel:()=>D("Year"),valuemax:"9999"},month:{getLabel:()=>D("Month"),valuemax:"12"},day:{getLabel:()=>D("Day"),valuemax:"31"}},yd=(t,e)=>[Us[t].getLabel(),e].filter(Boolean).join(", "),vd=t=>{const{inputState:e,onChange:n,onKeyDown:o,onBlur:s,onClick:r,localeDateParts:i,hostAriaLabel:a}=bd(t);return _e(i,(l,c)=>c,({value:l,type:c})=>{if(id(c)){const u=e[c];return x`
					<span class="date-input-part">
						<span class="date-input-sizer" aria-hidden="true"
							>${u||Bo(c)}</span
						>
						<input
							role="spinbutton"
							aria-label=${yd(c,a)}
							aria-valuemin="1"
							aria-valuemax=${Us[c].valuemax}
							aria-valuenow=${C(u!==Z?u:void 0)}
							aria-valuetext=${u!==Z?u:D("Empty")}
							type="text"
							inputmode="numeric"
							autocomplete="off"
							spellcheck="false"
							data-type=${c}
							placeholder=${Bo(c)}
							.value=${dt(u)}
							@click=${r}
							@blur=${s}
							@input=${n}
							@keydown=${o}
						/>
					</span>
				`}if(c==="literal")return x`<span>${l}</span>`})};customElements.define("cosmoz-date-input",K(vd,{observedAttributes:["locale"],styleSheets:[Kt,rd],shadowRootInit:{delegatesFocus:!0,mode:"open"}}));const wd=G`
	.content {
		display: flex;
		background: var(--cz-color-bg-primary);
		border: 1px solid var(--cz-color-border-secondary);
		border-radius: var(--cz-radius-2xl);
		box-shadow: var(--cz-shadow-xl);
		color: var(--cz-color-text-primary);
		font-size: var(--cz-text-base);
	}

	.range-presets {
		width: calc(var(--cz-spacing) * 38);
		padding: calc(var(--cz-spacing) * 3);
		flex-shrink: 0;
		border-right: 1px solid var(--cz-color-border-secondary);
		overflow: auto;
		contain: size;
	}

	@media (max-width: 1023px) {
		.range-presets {
			display: none;
		}
	}

	.range-presets cosmoz-button::part(button) {
		justify-content: flex-start;
		font-weight: var(--cz-font-weight-medium);
		overflow: hidden;
	}

	.range-presets cosmoz-button[active]::part(button) {
		background: var(--cz-color-bg-secondary);
	}

	footer {
		display: flex;
		justify-content: space-between;
		gap: calc(var(--cz-spacing) * 3);
		padding: calc(var(--cz-spacing) * 4);
		border-top: 1px solid var(--cz-color-border-secondary);
	}

	.footer-left {
		display: flex;
		gap: calc(var(--cz-spacing) * 2);
		align-items: center;
		justify-content: space-evenly;
	}

	:host([mode='single']),
	:host([single-calendar]) {
		.range-presets {
			display: none;
		}

		cosmoz-calendar {
			display: flex;
			justify-content: center;
			padding: calc(var(--cz-spacing) * 4) calc(var(--cz-spacing) * 3);
		}
	}

	:host([single-calendar]):not([mode='single']) {
		cosmoz-calendar {
			padding: calc(var(--cz-spacing) * 5) calc(var(--cz-spacing) * 8);
		}

		footer {
			flex-direction: column;
		}
	}

	@media (max-width: 734px) {
		:host(:not([mode='single'])) {
			cosmoz-calendar {
				display: flex;
				justify-content: center;
				padding: calc(var(--cz-spacing) * 5) calc(var(--cz-spacing) * 8);
			}

			footer {
				flex-direction: column;
			}
		}
	}
`,xd=t=>[{label:D("Today"),start:()=>Y(new Date,"yyyy-MM-dd"),end:()=>Y(new Date,"yyyy-MM-dd")},{label:D("Yesterday"),start:()=>Y(Ie(new Date,1),"yyyy-MM-dd"),end:()=>Y(Ie(new Date,1),"yyyy-MM-dd")},{label:D("This week"),start:()=>Y(Je(new Date,t),"yyyy-MM-dd"),end:()=>Y(Be(Je(new Date,t),6),"yyyy-MM-dd")},{label:D("Last week"),start:()=>Y(Mc(Je(new Date,t)),"yyyy-MM-dd"),end:()=>Y(Ie(Je(new Date,t),1),"yyyy-MM-dd")},{label:D("This month"),start:()=>Y(lt(new Date),"yyyy-MM-dd"),end:()=>Y(At(new Date),"yyyy-MM-dd")},{label:D("Last month"),start:()=>Y(ct(lt(new Date),1),"yyyy-MM-dd"),end:()=>Y(ct(At(new Date),1),"yyyy-MM-dd")},{label:D("This year"),start:()=>Y(ls(new Date),"yyyy-MM-dd"),end:()=>Y(Lc(new Date),"yyyy-MM-dd")}],_d=t=>{const e=P(()=>matchMedia(t),[t]),[n,o]=U(e.matches);return M(()=>{const s=r=>o(i=>i!==r.matches?r.matches:i);return e.addEventListener("change",s),()=>e.removeEventListener("change",s)},[e]),n},Sd=t=>{const{mode:e="range",locale:n,min:o,max:s,presets:r,singleCalendar:i=!1,disabled:a,noPresets:l,triggerSize:c,triggerVariant:u}=t,d=e==="single",f=n??navigator.language,[h,p]=ke("value"),[m,g]=U(h),b=_d("(width < 735px)"),y=i||b||d,v=y?1:2,[_,$]=U(!1),{start:E,end:z}=Rs(m,e),W=P(()=>r??xd(f),[f,r]),O=S(({newState:R})=>{R==="closed"?p(m):g(h),$(R==="open")},[m,h,$,p,g]),N=S(R=>{if(d){g(rt(R.detail.value,o,s));return}g({start:rt(R.detail.value,o,s),end:z})},[d,o,s,z,g]),Q=S(R=>g({start:E,end:rt(R.detail.value,o,s)}),[o,s,E,g]),X=S(()=>{!d&&E&&z&&qt(new Date(E),new Date(z))&&g({start:E,end:E})},[d,E,z,g]),V=S(()=>{E&&z&&ht(new Date(z),new Date(E))&&g({start:z,end:z})},[E,z,g]);return{end:z,isSingleCalendar:y,locale:f,mode:e,isSingleDateMode:d,numberOfMonths:v,onEndInput:Q,onStartInput:N,rangePresets:W,setValue:g,start:E,value:m,disabled:a,noPresets:l,min:o,max:s,triggerSize:c,triggerVariant:u,onStartInputBlur:X,onEndInputBlur:V,isOpen:_,onDropdownToggle:O}},$d=t=>{const{end:e,isSingleCalendar:n,locale:o,mode:s,isSingleDateMode:r,numberOfMonths:i,onEndInput:a,onStartInput:l,rangePresets:c,setValue:u,start:d,value:f,min:h,max:p,disabled:m,noPresets:g,triggerSize:b,triggerVariant:y="secondary",onStartInputBlur:v,onEndInputBlur:_,isOpen:$,onDropdownToggle:E}=Sd(t);return x`
		<cosmoz-dropdown-next
			?disabled=${m}
			@dropdown-toggle=${E}
			aria-disabled=${C(m?"true":void 0)}
		>
			<cosmoz-button
				slot="button"
				type="button"
				exportparts="button:trigger"
				variant=${y}
				size=${C(b)}
				aria-label=${D("Date picker")}
				aria-disabled=${C(m?"true":void 0)}
				aria-haspopup="dialog"
				aria-expanded=${$?"true":"false"}
				?disabled=${m}
			>
				${il()}
				${Pc(d,e,o,r)}
			</cosmoz-button>

			<div class="content" role="dialog">
				${F(!(g||n||r),()=>x`
						<div class="range-presets">
							${_e(c,z=>z.label,z=>x`
									<cosmoz-button
										variant="tertiary"
										full-width
										?active=${Oo(z,d,e)}
										aria-pressed=${Oo(z,d,e)?"true":"false"}
										@click=${()=>Ac(z,u,h,p)}
										>${z.label}</cosmoz-button
									>
								`)}
						</div>
					`)}

				<div class="main">
					<cosmoz-calendar
						autofocus
						mode=${s}
						locale=${o}
						number-of-months=${i}
						.min=${C(h)}
						.max=${C(p)}
						.value=${f}
						@value-changed=${br(u)}
					></cosmoz-calendar>

					<footer>
						<div class="footer-left">
							<cosmoz-date-input
								aria-label=${C(r?void 0:D("Start date"))}
								locale=${o}
								.value=${d}
								@value-changed=${l}
								@blur=${v}
							></cosmoz-date-input>
							${F(!r,()=>x`
									<span>–</span>
									<cosmoz-date-input
										aria-label=${D("End date")}
										locale=${o}
										.value=${e}
										@value-changed=${a}
										@blur=${_}
									></cosmoz-date-input>
								`)}
						</div>
						<div>
							<cosmoz-button
								?full-width=${n}
								@click=${Tc}
								>${D("OK")}</cosmoz-button
							>
						</div>
					</footer>
				</div>
			</div>
		</cosmoz-dropdown-next>
	`};customElements.define("cosmoz-datepicker",K($d,{observedAttributes:["locale","min","max","disabled","mode","no-presets","single-calendar","trigger-size","trigger-variant"],styleSheets:[Kt,wd],shadowRootInit:{delegatesFocus:!0,mode:"open"}}));we`
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
`;x`<svg
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
</svg>`;export{mn as a,U as b,K as c,P as d,Sl as e,qa as f,F as g,Qe as h,hs as i,M as j,wo as k,dt as l,S as m,Od as n,C as o,q as p,_l as q,Ya as r,Ua as s,St as t,ye as u,_e as v};
