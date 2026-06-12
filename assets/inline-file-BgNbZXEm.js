import{r as kn,D as xs,A as it,w as Oe,b as C,E as Y,n as ws,M as _s,u as dt,v as Et,h as pe,p as On}from"./iframe-CV1XXvf8.js";import{_ as Ss}from"./preload-helper-PPVm8Dsz.js";let Wt,Rn=0;function Ve(e){Wt=e}function je(){Wt=null,Rn=0}function Cs(){return Rn++}const ge=Symbol("haunted.phase"),Ut=Symbol("haunted.hook"),Be=Symbol("haunted.update"),He=Symbol("haunted.commit"),ft=Symbol("haunted.effects"),Ot=Symbol("haunted.layoutEffects"),we="haunted.context";class $s{update;host;virtual;[Ut];[ft];[Ot];constructor(t,n){this.update=t,this.host=n,this[Ut]=new Map,this[ft]=[],this[Ot]=[]}run(t){Ve(this);let n=t();return je(),n}_runEffects(t){let n=this[t];Ve(this);for(let s of n)s.call(this);je()}runEffects(){this._runEffects(ft)}runLayoutEffects(){this._runEffects(Ot)}teardown(){this[Ut].forEach(n=>{typeof n.teardown=="function"&&n.teardown(!0)})}}const Es=Promise.resolve().then.bind(Promise.resolve());function zn(){let e=[],t;function n(){t=null;let s=e;e=[];for(var i=0,o=s.length;i<o;i++)s[i]()}return function(s){e.push(s),t==null&&(t=Es(n))}}const Ls=zn(),Ue=zn();class ks{renderer;host;state;[ge];_updateQueued;_active;constructor(t,n){this.renderer=t,this.host=n,this.state=new $s(this.update.bind(this),n),this[ge]=null,this._updateQueued=!1,this._active=!0}update(){this._active&&(this._updateQueued||(Ls(()=>{let t=this.handlePhase(Be);Ue(()=>{this.handlePhase(He,t),Ue(()=>{this.handlePhase(ft)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(t,n){switch(this[ge]=t,t){case He:this.commit(n),this.runEffects(Ot);return;case Be:return this.render();case ft:return this.runEffects(ft)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(t){this.state._runEffects(t)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const Re=(...e)=>{const t=new CSSStyleSheet;return t.replaceSync(e.join("")),t},Os=e=>e?.map(t=>typeof t=="string"?Re(t):t),Rs=(e,...t)=>e.flatMap((n,s)=>[n,t[s]||""]).join(""),gt=Rs,zs=(e="")=>e.replace(/-+([a-z])?/g,(t,n)=>n?n.toUpperCase():"");function As(e){class t extends ks{frag;renderResult;constructor(i,o,r){super(i,r||o),this.frag=o}commit(i){this.renderResult=e(i,this.frag)}}function n(s,i,o){const r=(o||i||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:l=!0,shadowRootInit:c={},styleSheets:u}=o||i||{},d=Os(s.styleSheets||u);class h extends r{_scheduler;static get observedAttributes(){return s.observedAttributes||a||[]}constructor(){if(super(),l===!1)this._scheduler=new t(s,this);else{const m=this.attachShadow({mode:"open",...c});d&&(m.adoptedStyleSheets=d),this._scheduler=new t(s,m,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(m,b,v){if(b===v)return;let y=v===""?!0:v;Reflect.set(this,zs(m),y)}}function f(g){let m=g,b=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return m},set(v){b&&m===v||(b=!0,m=v,this._scheduler&&this._scheduler.update())}})}const p=new Proxy(r.prototype,{getPrototypeOf(g){return g},set(g,m,b,v){let y;return m in g?(y=Object.getOwnPropertyDescriptor(g,m),y&&y.set?(y.set.call(v,b),!0):(Reflect.set(g,m,b,v),!0)):(typeof m=="symbol"||m[0]==="_"?y={enumerable:!0,configurable:!0,writable:!0,value:b}:y=f(b),Object.defineProperty(v,m,y),y.set&&y.set.call(v,b),!0)}});return Object.setPrototypeOf(h.prototype,p),h}return n}class ct{id;state;constructor(t,n){this.id=t,this.state=n}}function Ps(e,...t){let n=Cs(),s=Wt[Ut],i=s.get(n);return i||(i=new e(n,Wt,...t),s.set(n,i)),i.update(...t)}function ut(e){return Ps.bind(null,e)}function An(e){return ut(class extends ct{callback;lastValues;values;_teardown;constructor(t,n,s,i){super(t,n),e(n,this)}update(t,n){this.callback=t,this.values=n}call(){const t=!this.values||this.hasChanged();this.lastValues=this.values,t&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(t){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),t&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((t,n)=>this.lastValues[n]!==t)}})}function Pn(e,t){e[ft].push(t)}const R=An(Pn),Ts=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,Ns=ut(class extends ct{Context;value;_ranEffect;_unsubscribe;constructor(e,t,n){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Pn(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const t={Context:e,callback:this._updater};Ts(this.state.host).dispatchEvent(new CustomEvent(we,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:s=null,value:i}=t;this.value=s?i:e.defaultValue,this._unsubscribe=s}teardown(){this._unsubscribe&&this._unsubscribe()}});function Fs(e){return t=>{const n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(we,this)}disconnectedCallback(){this.removeEventListener(we,this)}handleEvent(s){const{detail:i}=s;i.Context===n&&(i.value=this.value,i.unsubscribe=this.unsubscribe.bind(this,i.callback),this.listeners.add(i.callback),s.stopPropagation())}unsubscribe(s){this.listeners.delete(s)}set value(s){this._value=s;for(let i of this.listeners)i(s)}get value(){return this._value}},Consumer:e(function({render:s}){const i=Ns(n);return s(i)},{useShadowDOM:!1}),defaultValue:t};return n}}const N=ut(class extends ct{value;values;constructor(e,t,n,s){super(e,t),this.value=n(),this.values=s}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((t,n)=>this.values[n]!==t)}}),$=(e,t)=>N(()=>e,t);function Ms(e,t){e[Ot].push(t)}const _e=An(Ms),W=ut(class extends ct{args;constructor(e,t,n){super(e,t),this.updater=this.updater.bind(this),typeof n=="function"&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){const[t]=this.args;typeof e=="function"&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}}),Is=ut(class extends ct{reducer;currentState;constructor(e,t,n,s,i){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=i!==void 0?i(s):s}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}}),Ds=/([A-Z])/gu,Vs=ut(class extends ct{property;eventName;constructor(e,t,n,s){if(super(e,t),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(Ds,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof s=="function"&&(s=s()),s!=null&&this.updateProp(s))}update(e,t){return[this.state.host[this.property],this.updater]}updater(e){const t=this.state.host[this.property];typeof e=="function"&&(e=e(t)),!Object.is(t,e)&&this.updateProp(e)}updateProp(e){this.notify(e).defaultPrevented||(this.state.host[this.property]=e)}notify(e){const t=new CustomEvent(this.eventName,{detail:{value:e,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(t),t}});function wt(e){return N(()=>({current:e}),[])}function js({render:e}){const t=As(e),n=Fs(t);return{component:t,createContext:n}}const X={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},vt=e=>(...t)=>({_$litDirective$:e,values:t});let Tt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,s){this._$Ct=t,this._$AM=n,this._$Ci=s}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};const Rt=(e,t)=>{const n=e._$AN;if(n===void 0)return!1;for(const s of n)s._$AO?.(t,!1),Rt(s,t);return!0},Yt=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},Tn=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Us(t)}};function Bs(e){this._$AN!==void 0?(Yt(this),this._$AM=e,Tn(this)):this._$AM=e}function Hs(e,t=!1,n=0){const s=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(s))for(let o=n;o<s.length;o++)Rt(s[o],!1),Yt(s[o]);else s!=null&&(Rt(s,!1),Yt(s));else Rt(this,e)}const Us=e=>{e.type==X.CHILD&&(e._$AP??=Hs,e._$AQ??=Bs)};class ze extends Tt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,n,s){super._$AT(t,n,s),Tn(this),this.isConnected=t._$AU}_$AO(t,n=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),n&&(Rt(this,t),Yt(this))}setValue(t){if(kn(this._$Ct))this._$Ct._$AI(t,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=t,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}const{component:et}=js({render:xs}),Ks=gt`
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
`,Ws=()=>it,Ys=et(Ws,{styleSheets:[Ks]});customElements.define("cosmoz-spinner",Ys);function F(e,t,n){return e?t(e):n?.(e)}const O=e=>e??it,Js=({slot:e,title:t,className:n,width:s="24",height:i="24",styles:o}={})=>C`
	<svg
		slot=${O(e)}
		class=${`clear-icon ${n??""}`}
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
		width=${s}
		height=${i}
		style=${O(o)}
	>
		${F(t,()=>Oe`<title>${t}</title>`)}
		<path
			d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
		/>
	</svg>
`,qs=({slot:e,title:t,className:n,width:s="24",height:i="24",styles:o}={})=>C`
	<svg
		slot=${O(e)}
		class=${`help-outline-icon ${n??""}`}
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
		width=${s}
		height=${i}
		style=${O(o)}
	>
		${F(t,()=>Oe`<title>${t}</title>`)}
		<path
			fill="currentColor"
			d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"
		/>
	</svg>
`,Gs=({slot:e,title:t,className:n,width:s="24",height:i="24",styles:o}={})=>C`
	<svg
		slot=${O(e)}
		class=${`warning-icon ${n??""}`}
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
		width=${s}
		height=${i}
		style=${O(o)}
	>
		${F(t,()=>Oe`<title>${t}</title>`)}
		<path
			d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
			fill="currentColor"
		/>
	</svg>
`,ht=ut(class extends ct{update(){return this.state.host}}),ot=(e,...t)=>e.flatMap((n,s)=>[n,t[s]??""]).join(""),Ae=(...e)=>{const t=new CSSStyleSheet;return t.replaceSync(e.join("")),t},Xs=ot`
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
`,Qs=()=>{const e=ht(),t=$(()=>{e.dispatchEvent(new Event("close")),e.onClose?.()},[]);return R(()=>{const n=r=>{r.preventDefault(),t()},s=e.shadowRoot,i=r=>r.target.value==="cancel"&&n(r),o=r=>!r.defaultPrevented&&r.key==="Escape"&&n(r);return s.addEventListener("click",i),document.addEventListener("keydown",o,!0),()=>{s.removeEventListener("click",i),document.removeEventListener("keydown",o,!0)}},[]),{close:t}},Zs=()=>{const e=ht(),{manualFocus:t}=e;_e(()=>{!t&&!e.matches(":focus-within")&&(e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex"))},[t])},ti=(e,t,n)=>{const s=e.width/3,i=e.height/3,o=Math.min(window.innerWidth-2*s,Math.max(-s,t)),r=Math.min(window.innerHeight-2*i,Math.max(-i,n));return{x:o,y:r}},ei=(e,t,n,s)=>i=>{if(!i.target.closest(t))return;const o=ti,r=e.getBoundingClientRect(),a=i.clientX-r.x,l=i.clientY-r.y,c=(h,f)=>{const p=h-a,g=f-l,m=o(r,p,g);Object.assign(e.style,{left:m.x+"px",top:m.y+"px",transform:"initial"})},u=h=>c(h.clientX,h.clientY),d=h=>{document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",d)};document.addEventListener("mousemove",u),document.addEventListener("mouseup",d)},ni=()=>{const e=ht(),{unmovable:t}=e;R(()=>{if(t)return;const n=e.shadowRoot;if(!n)return;const s=ei(e,".title");return n.addEventListener("mousedown",s),()=>n.removeEventListener("mousedown",s)},[t])},si=()=>{Qs(),ni(),Zs()},ii=({title:e,content:t,styles:n,closeable:s=!1})=>{const i=ht();return C`
		<style>
			${Xs}${n}
		</style>
		<div class="title" part="title">
			${e}
			${F(s,()=>C`
					<button
						class="close"
						@click=${()=>{i.dispatchEvent(new Event("close")),i.onClose?.()}}
					>
						${Js()}
					</button>
				`)}
		</div>
		<div class="content" part="content">${t}</div>
	`},Pe=(e,{observedAttributes:t,styles:n,...s}={})=>et(i=>(si(),ii({title:i.heading||i.title,content:e(i),styles:n,closeable:i.closeable})),{observedAttributes:["title","heading","manual-focus","unmovable","closeable",...t??[]],...s});customElements.define("cosmoz-dialog-loading",Pe(()=>C`
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
		`));function oi(e){return()=>e}const ri=oi(),ai=ri,Jt=e=>e,B=(e,...t)=>typeof e=="function"?e(...t):e,w=e=>typeof e=="string",Lt=()=>{let e,t;const n=new Promise((s,i)=>{e=s,t=i});return n.resolve=e,n.reject=t,n},Ke=e=>e==null?"":""+e,li=(e,t,n)=>{e.forEach(s=>{t[s]&&(n[s]=t[s])})},ci=/###/g,We=e=>e&&e.indexOf("###")>-1?e.replace(ci,"."):e,Ye=e=>!e||w(e),zt=(e,t,n)=>{const s=w(t)?t.split("."):t;let i=0;for(;i<s.length-1;){if(Ye(e))return{};const o=We(s[i]);!e[o]&&n&&(e[o]=new n),Object.prototype.hasOwnProperty.call(e,o)?e=e[o]:e={},++i}return Ye(e)?{}:{obj:e,k:We(s[i])}},Je=(e,t,n)=>{const{obj:s,k:i}=zt(e,t,Object);if(s!==void 0||t.length===1){s[i]=n;return}let o=t[t.length-1],r=t.slice(0,t.length-1),a=zt(e,r,Object);for(;a.obj===void 0&&r.length;)o=`${r[r.length-1]}.${o}`,r=r.slice(0,r.length-1),a=zt(e,r,Object),a&&a.obj&&typeof a.obj[`${a.k}.${o}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${o}`]=n},ui=(e,t,n,s)=>{const{obj:i,k:o}=zt(e,t,Object);i[o]=i[o]||[],i[o].push(n)},qt=(e,t)=>{const{obj:n,k:s}=zt(e,t);if(n)return n[s]},hi=(e,t,n)=>{const s=qt(e,n);return s!==void 0?s:qt(t,n)},Nn=(e,t,n)=>{for(const s in t)s!=="__proto__"&&s!=="constructor"&&(s in e?w(e[s])||e[s]instanceof String||w(t[s])||t[s]instanceof String?n&&(e[s]=t[s]):Nn(e[s],t[s],n):e[s]=t[s]);return e},yt=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var di={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const fi=e=>w(e)?e.replace(/[&<>"'\/]/g,t=>di[t]):e;class pi{constructor(t){this.capacity=t,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(t){const n=this.regExpMap.get(t);if(n!==void 0)return n;const s=new RegExp(t);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(t,s),this.regExpQueue.push(t),s}}const gi=[" ",",","?","!",";"],mi=new pi(20),bi=(e,t,n)=>{t=t||"",n=n||"";const s=gi.filter(r=>t.indexOf(r)<0&&n.indexOf(r)<0);if(s.length===0)return!0;const i=mi.getRegExp(`(${s.map(r=>r==="?"?"\\?":r).join("|")})`);let o=!i.test(e);if(!o){const r=e.indexOf(n);r>0&&!i.test(e.substring(0,r))&&(o=!0)}return o},Se=function(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!e)return;if(e[t])return e[t];const s=t.split(n);let i=e;for(let o=0;o<s.length;){if(!i||typeof i!="object")return;let r,a="";for(let l=o;l<s.length;++l)if(l!==o&&(a+=n),a+=s[l],r=i[a],r!==void 0){if(["string","number","boolean"].indexOf(typeof r)>-1&&l<s.length-1)continue;o+=l-o+1;break}i=r}return i},Gt=e=>e&&e.replace("_","-"),vi={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){console&&console[e]&&console[e].apply(console,t)}};class Xt{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(t,n)}init(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=n.prefix||"i18next:",this.logger=t||vi,this.options=n,this.debug=n.debug}log(){for(var t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return this.forward(n,"log","",!0)}warn(){for(var t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return this.forward(n,"warn","",!0)}error(){for(var t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return this.forward(n,"error","")}deprecate(){for(var t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return this.forward(n,"warn","WARNING DEPRECATED: ",!0)}forward(t,n,s,i){return i&&!this.debug?null:(w(t[0])&&(t[0]=`${s}${this.prefix} ${t[0]}`),this.logger[n](t))}create(t){return new Xt(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new Xt(this.logger,t)}}var Q=new Xt;class se{constructor(){this.observers={}}on(t,n){return t.split(" ").forEach(s=>{this.observers[s]||(this.observers[s]=new Map);const i=this.observers[s].get(n)||0;this.observers[s].set(n,i+1)}),this}off(t,n){if(this.observers[t]){if(!n){delete this.observers[t];return}this.observers[t].delete(n)}}emit(t){for(var n=arguments.length,s=new Array(n>1?n-1:0),i=1;i<n;i++)s[i-1]=arguments[i];this.observers[t]&&Array.from(this.observers[t].entries()).forEach(r=>{let[a,l]=r;for(let c=0;c<l;c++)a(...s)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(r=>{let[a,l]=r;for(let c=0;c<l;c++)a.apply(a,[t,...s])})}}class qe extends se{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const n=this.options.ns.indexOf(t);n>-1&&this.options.ns.splice(n,1)}getResource(t,n,s){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const o=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,r=i.ignoreJSONStructure!==void 0?i.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;t.indexOf(".")>-1?a=t.split("."):(a=[t,n],s&&(Array.isArray(s)?a.push(...s):w(s)&&o?a.push(...s.split(o)):a.push(s)));const l=qt(this.data,a);return!l&&!n&&!s&&t.indexOf(".")>-1&&(t=a[0],n=a[1],s=a.slice(2).join(".")),l||!r||!w(s)?l:Se(this.data&&this.data[t]&&this.data[t][n],s,o)}addResource(t,n,s,i){let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const r=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator;let a=[t,n];s&&(a=a.concat(r?s.split(r):s)),t.indexOf(".")>-1&&(a=t.split("."),i=n,n=a[1]),this.addNamespaces(n),Je(this.data,a,i),o.silent||this.emit("added",t,n,s,i)}addResources(t,n,s){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const o in s)(w(s[o])||Array.isArray(s[o]))&&this.addResource(t,n,o,s[o],{silent:!0});i.silent||this.emit("added",t,n,s)}addResourceBundle(t,n,s,i,o){let r=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},a=[t,n];t.indexOf(".")>-1&&(a=t.split("."),i=s,s=n,n=a[1]),this.addNamespaces(n);let l=qt(this.data,a)||{};r.skipCopy||(s=JSON.parse(JSON.stringify(s))),i?Nn(l,s,o):l={...l,...s},Je(this.data,a,l),r.silent||this.emit("added",t,n,s)}removeResourceBundle(t,n){this.hasResourceBundle(t,n)&&delete this.data[t][n],this.removeNamespaces(n),this.emit("removed",t,n)}hasResourceBundle(t,n){return this.getResource(t,n)!==void 0}getResourceBundle(t,n){return n||(n=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(t,n)}:this.getResource(t,n)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const n=this.getDataByLanguage(t);return!!(n&&Object.keys(n)||[]).find(i=>n[i]&&Object.keys(n[i]).length>0)}toJSON(){return this.data}}var Fn={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,s,i){return e.forEach(o=>{this.processors[o]&&(t=this.processors[o].process(t,n,s,i))}),t}};const Ge={};class Qt extends se{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),li(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Q.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(t==null)return!1;const s=this.resolve(t,n);return s&&s.res!==void 0}extractFromKey(t,n){let s=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;s===void 0&&(s=":");const i=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let o=n.ns||this.options.defaultNS||[];const r=s&&t.indexOf(s)>-1,a=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!bi(t,s,i);if(r&&!a){const l=t.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:t,namespaces:w(o)?[o]:o};const c=t.split(s);(s!==i||s===i&&this.options.ns.indexOf(c[0])>-1)&&(o=c.shift()),t=c.join(i)}return{key:t,namespaces:w(o)?[o]:o}}translate(t,n,s){if(typeof n!="object"&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),typeof n=="object"&&(n={...n}),n||(n={}),t==null)return"";Array.isArray(t)||(t=[String(t)]);const i=n.returnDetails!==void 0?n.returnDetails:this.options.returnDetails,o=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,{key:r,namespaces:a}=this.extractFromKey(t[t.length-1],n),l=a[a.length-1],c=n.lng||this.language,u=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&c.toLowerCase()==="cimode"){if(u){const x=n.nsSeparator||this.options.nsSeparator;return i?{res:`${l}${x}${r}`,usedKey:r,exactUsedKey:r,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(n)}:`${l}${x}${r}`}return i?{res:r,usedKey:r,exactUsedKey:r,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(n)}:r}const d=this.resolve(t,n);let h=d&&d.res;const f=d&&d.usedKey||r,p=d&&d.exactUsedKey||r,g=Object.prototype.toString.apply(h),m=["[object Number]","[object Function]","[object RegExp]"],b=n.joinArrays!==void 0?n.joinArrays:this.options.joinArrays,v=!this.i18nFormat||this.i18nFormat.handleAsObject,y=!w(h)&&typeof h!="boolean"&&typeof h!="number";if(v&&h&&y&&m.indexOf(g)<0&&!(w(b)&&Array.isArray(h))){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const x=this.options.returnedObjectHandler?this.options.returnedObjectHandler(f,h,{...n,ns:a}):`key '${r} (${this.language})' returned an object instead of string.`;return i?(d.res=x,d.usedParams=this.getUsedParamsDetails(n),d):x}if(o){const x=Array.isArray(h),_=x?[]:{},E=x?p:f;for(const S in h)if(Object.prototype.hasOwnProperty.call(h,S)){const z=`${E}${o}${S}`;_[S]=this.translate(z,{...n,joinArrays:!1,ns:a}),_[S]===z&&(_[S]=h[S])}h=_}}else if(v&&w(b)&&Array.isArray(h))h=h.join(b),h&&(h=this.extendTranslation(h,t,n,s));else{let x=!1,_=!1;const E=n.count!==void 0&&!w(n.count),S=Qt.hasDefaultValue(n),z=E?this.pluralResolver.getSuffix(c,n.count,n):"",T=n.ordinal&&E?this.pluralResolver.getSuffix(c,n.count,{ordinal:!1}):"",A=E&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),M=A&&n[`defaultValue${this.options.pluralSeparator}zero`]||n[`defaultValue${z}`]||n[`defaultValue${T}`]||n.defaultValue;!this.isValidLookup(h)&&S&&(x=!0,h=M),this.isValidLookup(h)||(_=!0,h=r);const j=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&_?void 0:h,P=S&&M!==h&&this.options.updateMissing;if(_||x||P){if(this.logger.log(P?"updateKey":"missingKey",c,l,r,P?M:h),o){const L=this.resolve(r,{...n,keySeparator:!1});L&&L.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let I=[];const K=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo==="fallback"&&K&&K[0])for(let L=0;L<K.length;L++)I.push(K[L]);else this.options.saveMissingTo==="all"?I=this.languageUtils.toResolveHierarchy(n.lng||this.language):I.push(n.lng||this.language);const k=(L,D,st)=>{const It=S&&st!==h?st:j;this.options.missingKeyHandler?this.options.missingKeyHandler(L,l,D,It,P,n):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(L,l,D,It,P,n),this.emit("missingKey",L,l,D,h)};this.options.saveMissing&&(this.options.saveMissingPlurals&&E?I.forEach(L=>{const D=this.pluralResolver.getSuffixes(L,n);A&&n[`defaultValue${this.options.pluralSeparator}zero`]&&D.indexOf(`${this.options.pluralSeparator}zero`)<0&&D.push(`${this.options.pluralSeparator}zero`),D.forEach(st=>{k([L],r+st,n[`defaultValue${st}`]||M)})}):k(I,r,M))}h=this.extendTranslation(h,t,n,d,s),_&&h===r&&this.options.appendNamespaceToMissingKey&&(h=`${l}:${r}`),(_||x)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?h=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${r}`:r,x?h:void 0):h=this.options.parseMissingKeyHandler(h))}return i?(d.res=h,d.usedParams=this.getUsedParamsDetails(n),d):h}extendTranslation(t,n,s,i,o){var r=this;if(this.i18nFormat&&this.i18nFormat.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...s},s.lng||this.language||i.usedLng,i.usedNS,i.usedKey,{resolved:i});else if(!s.skipInterpolation){s.interpolation&&this.interpolator.init({...s,interpolation:{...this.options.interpolation,...s.interpolation}});const c=w(t)&&(s&&s.interpolation&&s.interpolation.skipOnVariables!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let u;if(c){const h=t.match(this.interpolator.nestingRegexp);u=h&&h.length}let d=s.replace&&!w(s.replace)?s.replace:s;if(this.options.interpolation.defaultVariables&&(d={...this.options.interpolation.defaultVariables,...d}),t=this.interpolator.interpolate(t,d,s.lng||this.language||i.usedLng,s),c){const h=t.match(this.interpolator.nestingRegexp),f=h&&h.length;u<f&&(s.nest=!1)}!s.lng&&this.options.compatibilityAPI!=="v1"&&i&&i.res&&(s.lng=this.language||i.usedLng),s.nest!==!1&&(t=this.interpolator.nest(t,function(){for(var h=arguments.length,f=new Array(h),p=0;p<h;p++)f[p]=arguments[p];return o&&o[0]===f[0]&&!s.context?(r.logger.warn(`It seems you are nesting recursively key: ${f[0]} in key: ${n[0]}`),null):r.translate(...f,n)},s)),s.interpolation&&this.interpolator.reset()}const a=s.postProcess||this.options.postProcess,l=w(a)?[a]:a;return t!=null&&l&&l.length&&s.applyPostProcessor!==!1&&(t=Fn.handle(l,t,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...i,usedParams:this.getUsedParamsDetails(s)},...s}:s,this)),t}resolve(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s,i,o,r,a;return w(t)&&(t=[t]),t.forEach(l=>{if(this.isValidLookup(s))return;const c=this.extractFromKey(l,n),u=c.key;i=u;let d=c.namespaces;this.options.fallbackNS&&(d=d.concat(this.options.fallbackNS));const h=n.count!==void 0&&!w(n.count),f=h&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),p=n.context!==void 0&&(w(n.context)||typeof n.context=="number")&&n.context!=="",g=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);d.forEach(m=>{this.isValidLookup(s)||(a=m,!Ge[`${g[0]}-${m}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(a)&&(Ge[`${g[0]}-${m}`]=!0,this.logger.warn(`key "${i}" for languages "${g.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),g.forEach(b=>{if(this.isValidLookup(s))return;r=b;const v=[u];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(v,u,b,m,n);else{let x;h&&(x=this.pluralResolver.getSuffix(b,n.count,n));const _=`${this.options.pluralSeparator}zero`,E=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(h&&(v.push(u+x),n.ordinal&&x.indexOf(E)===0&&v.push(u+x.replace(E,this.options.pluralSeparator)),f&&v.push(u+_)),p){const S=`${u}${this.options.contextSeparator}${n.context}`;v.push(S),h&&(v.push(S+x),n.ordinal&&x.indexOf(E)===0&&v.push(S+x.replace(E,this.options.pluralSeparator)),f&&v.push(S+_))}}let y;for(;y=v.pop();)this.isValidLookup(s)||(o=y,s=this.getResource(b,m,y,n))}))})}),{res:s,usedKey:i,exactUsedKey:o,usedLng:r,usedNS:a}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,n,s){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(t,n,s,i):this.resourceStore.getResource(t,n,s,i)}getUsedParamsDetails(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],s=t.replace&&!w(t.replace);let i=s?t.replace:t;if(s&&typeof t.count<"u"&&(i.count=t.count),this.options.interpolation.defaultVariables&&(i={...this.options.interpolation.defaultVariables,...i}),!s){i={...i};for(const o of n)delete i[o]}return i}static hasDefaultValue(t){const n="defaultValue";for(const s in t)if(Object.prototype.hasOwnProperty.call(t,s)&&n===s.substring(0,n.length)&&t[s]!==void 0)return!0;return!1}}const me=e=>e.charAt(0).toUpperCase()+e.slice(1);class Xe{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Q.create("languageUtils")}getScriptPartFromCode(t){if(t=Gt(t),!t||t.indexOf("-")<0)return null;const n=t.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(t){if(t=Gt(t),!t||t.indexOf("-")<0)return t;const n=t.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(t){if(w(t)&&t.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let i=Intl.getCanonicalLocales(t)[0];if(i&&this.options.lowerCaseLng&&(i=i.toLowerCase()),i)return i}catch{}const n=["hans","hant","latn","cyrl","cans","mong","arab"];let s=t.split("-");return this.options.lowerCaseLng?s=s.map(i=>i.toLowerCase()):s.length===2?(s[0]=s[0].toLowerCase(),s[1]=s[1].toUpperCase(),n.indexOf(s[1].toLowerCase())>-1&&(s[1]=me(s[1].toLowerCase()))):s.length===3&&(s[0]=s[0].toLowerCase(),s[1].length===2&&(s[1]=s[1].toUpperCase()),s[0]!=="sgn"&&s[2].length===2&&(s[2]=s[2].toUpperCase()),n.indexOf(s[1].toLowerCase())>-1&&(s[1]=me(s[1].toLowerCase())),n.indexOf(s[2].toLowerCase())>-1&&(s[2]=me(s[2].toLowerCase()))),s.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let n;return t.forEach(s=>{if(n)return;const i=this.formatLanguageCode(s);(!this.options.supportedLngs||this.isSupportedCode(i))&&(n=i)}),!n&&this.options.supportedLngs&&t.forEach(s=>{if(n)return;const i=this.getLanguagePartFromCode(s);if(this.isSupportedCode(i))return n=i;n=this.options.supportedLngs.find(o=>{if(o===i)return o;if(!(o.indexOf("-")<0&&i.indexOf("-")<0)&&(o.indexOf("-")>0&&i.indexOf("-")<0&&o.substring(0,o.indexOf("-"))===i||o.indexOf(i)===0&&i.length>1))return o})}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(t,n){if(!t)return[];if(typeof t=="function"&&(t=t(n)),w(t)&&(t=[t]),Array.isArray(t))return t;if(!n)return t.default||[];let s=t[n];return s||(s=t[this.getScriptPartFromCode(n)]),s||(s=t[this.formatLanguageCode(n)]),s||(s=t[this.getLanguagePartFromCode(n)]),s||(s=t.default),s||[]}toResolveHierarchy(t,n){const s=this.getFallbackCodes(n||this.options.fallbackLng||[],t),i=[],o=r=>{r&&(this.isSupportedCode(r)?i.push(r):this.logger.warn(`rejecting language code not found in supportedLngs: ${r}`))};return w(t)&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&o(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&o(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&o(this.getLanguagePartFromCode(t))):w(t)&&o(this.formatLanguageCode(t)),s.forEach(r=>{i.indexOf(r)<0&&o(this.formatLanguageCode(r))}),i}}let yi=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],xi={1:e=>+(e>1),2:e=>+(e!=1),3:e=>0,4:e=>e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2,5:e=>e==0?0:e==1?1:e==2?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5,6:e=>e==1?0:e>=2&&e<=4?1:2,7:e=>e==1?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2,8:e=>e==1?0:e==2?1:e!=8&&e!=11?2:3,9:e=>+(e>=2),10:e=>e==1?0:e==2?1:e<7?2:e<11?3:4,11:e=>e==1||e==11?0:e==2||e==12?1:e>2&&e<20?2:3,12:e=>+(e%10!=1||e%100==11),13:e=>+(e!==0),14:e=>e==1?0:e==2?1:e==3?2:3,15:e=>e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2,16:e=>e%10==1&&e%100!=11?0:e!==0?1:2,17:e=>e==1||e%10==1&&e%100!=11?0:1,18:e=>e==0?0:e==1?1:2,19:e=>e==1?0:e==0||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3,20:e=>e==1?0:e==0||e%100>0&&e%100<20?1:2,21:e=>e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0,22:e=>e==1?0:e==2?1:(e<0||e>10)&&e%10==0?2:3};const wi=["v1","v2","v3"],_i=["v4"],Qe={zero:0,one:1,two:2,few:3,many:4,other:5},Si=()=>{const e={};return yi.forEach(t=>{t.lngs.forEach(n=>{e[n]={numbers:t.nr,plurals:xi[t.fc]}})}),e};class Ci{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=t,this.options=n,this.logger=Q.create("pluralResolver"),(!this.options.compatibilityJSON||_i.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=Si(),this.pluralRulesCache={}}addRule(t,n){this.rules[t]=n}clearCache(){this.pluralRulesCache={}}getRule(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const s=Gt(t==="dev"?"en":t),i=n.ordinal?"ordinal":"cardinal",o=JSON.stringify({cleanedCode:s,type:i});if(o in this.pluralRulesCache)return this.pluralRulesCache[o];let r;try{r=new Intl.PluralRules(s,{type:i})}catch{if(!t.match(/-|_/))return;const l=this.languageUtils.getLanguagePartFromCode(t);r=this.getRule(l,n)}return this.pluralRulesCache[o]=r,r}return this.rules[t]||this.rules[this.languageUtils.getLanguagePartFromCode(t)]}needsPlural(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const s=this.getRule(t,n);return this.shouldUseIntlApi()?s&&s.resolvedOptions().pluralCategories.length>1:s&&s.numbers.length>1}getPluralFormsOfKey(t,n){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(t,s).map(i=>`${n}${i}`)}getSuffixes(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const s=this.getRule(t,n);return s?this.shouldUseIntlApi()?s.resolvedOptions().pluralCategories.sort((i,o)=>Qe[i]-Qe[o]).map(i=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${i}`):s.numbers.map(i=>this.getSuffix(t,i,n)):[]}getSuffix(t,n){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const i=this.getRule(t,s);return i?this.shouldUseIntlApi()?`${this.options.prepend}${s.ordinal?`ordinal${this.options.prepend}`:""}${i.select(n)}`:this.getSuffixRetroCompatible(i,n):(this.logger.warn(`no plural rule found for: ${t}`),"")}getSuffixRetroCompatible(t,n){const s=t.noAbs?t.plurals(n):t.plurals(Math.abs(n));let i=t.numbers[s];this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1&&(i===2?i="plural":i===1&&(i=""));const o=()=>this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString();return this.options.compatibilityJSON==="v1"?i===1?"":typeof i=="number"?`_plural_${i.toString()}`:o():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1?o():this.options.prepend&&s.toString()?this.options.prepend+s.toString():s.toString()}shouldUseIntlApi(){return!wi.includes(this.options.compatibilityJSON)}}const Ze=function(e,t,n){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,o=hi(e,t,n);return!o&&i&&w(n)&&(o=Se(e,n,s),o===void 0&&(o=Se(t,n,s))),o},be=e=>e.replace(/\$/g,"$$$$");class $i{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Q.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||(n=>n),this.init(t)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const{escape:n,escapeValue:s,useRawValueToEscape:i,prefix:o,prefixEscaped:r,suffix:a,suffixEscaped:l,formatSeparator:c,unescapeSuffix:u,unescapePrefix:d,nestingPrefix:h,nestingPrefixEscaped:f,nestingSuffix:p,nestingSuffixEscaped:g,nestingOptionsSeparator:m,maxReplaces:b,alwaysFormat:v}=t.interpolation;this.escape=n!==void 0?n:fi,this.escapeValue=s!==void 0?s:!0,this.useRawValueToEscape=i!==void 0?i:!1,this.prefix=o?yt(o):r||"{{",this.suffix=a?yt(a):l||"}}",this.formatSeparator=c||",",this.unescapePrefix=u?"":d||"-",this.unescapeSuffix=this.unescapePrefix?"":u||"",this.nestingPrefix=h?yt(h):f||yt("$t("),this.nestingSuffix=p?yt(p):g||yt(")"),this.nestingOptionsSeparator=m||",",this.maxReplaces=b||1e3,this.alwaysFormat=v!==void 0?v:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=(n,s)=>n&&n.source===s?(n.lastIndex=0,n):new RegExp(s,"g");this.regexp=t(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=t(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=t(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(t,n,s,i){let o,r,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=f=>{if(f.indexOf(this.formatSeparator)<0){const b=Ze(n,l,f,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(b,void 0,s,{...i,...n,interpolationkey:f}):b}const p=f.split(this.formatSeparator),g=p.shift().trim(),m=p.join(this.formatSeparator).trim();return this.format(Ze(n,l,g,this.options.keySeparator,this.options.ignoreJSONStructure),m,s,{...i,...n,interpolationkey:g})};this.resetRegExp();const u=i&&i.missingInterpolationHandler||this.options.missingInterpolationHandler,d=i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:f=>be(f)},{regex:this.regexp,safeValue:f=>this.escapeValue?be(this.escape(f)):be(f)}].forEach(f=>{for(a=0;o=f.regex.exec(t);){const p=o[1].trim();if(r=c(p),r===void 0)if(typeof u=="function"){const m=u(t,o,i);r=w(m)?m:""}else if(i&&Object.prototype.hasOwnProperty.call(i,p))r="";else if(d){r=o[0];continue}else this.logger.warn(`missed to pass in variable ${p} for interpolating ${t}`),r="";else!w(r)&&!this.useRawValueToEscape&&(r=Ke(r));const g=f.safeValue(r);if(t=t.replace(o[0],g),d?(f.regex.lastIndex+=r.length,f.regex.lastIndex-=o[0].length):f.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),t}nest(t,n){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i,o,r;const a=(l,c)=>{const u=this.nestingOptionsSeparator;if(l.indexOf(u)<0)return l;const d=l.split(new RegExp(`${u}[ ]*{`));let h=`{${d[1]}`;l=d[0],h=this.interpolate(h,r);const f=h.match(/'/g),p=h.match(/"/g);(f&&f.length%2===0&&!p||p.length%2!==0)&&(h=h.replace(/'/g,'"'));try{r=JSON.parse(h),c&&(r={...c,...r})}catch(g){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,g),`${l}${u}${h}`}return r.defaultValue&&r.defaultValue.indexOf(this.prefix)>-1&&delete r.defaultValue,l};for(;i=this.nestingRegexp.exec(t);){let l=[];r={...s},r=r.replace&&!w(r.replace)?r.replace:r,r.applyPostProcessor=!1,delete r.defaultValue;let c=!1;if(i[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(i[1])){const u=i[1].split(this.formatSeparator).map(d=>d.trim());i[1]=u.shift(),l=u,c=!0}if(o=n(a.call(this,i[1].trim(),r),r),o&&i[0]===t&&!w(o))return o;w(o)||(o=Ke(o)),o||(this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`),o=""),c&&(o=l.reduce((u,d)=>this.format(u,d,s.lng,{...s,interpolationkey:i[1].trim()}),o.trim())),t=t.replace(i[0],o),this.regexp.lastIndex=0}return t}}const Ei=e=>{let t=e.toLowerCase().trim();const n={};if(e.indexOf("(")>-1){const s=e.split("(");t=s[0].toLowerCase().trim();const i=s[1].substring(0,s[1].length-1);t==="currency"&&i.indexOf(":")<0?n.currency||(n.currency=i.trim()):t==="relativetime"&&i.indexOf(":")<0?n.range||(n.range=i.trim()):i.split(";").forEach(r=>{if(r){const[a,...l]=r.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,""),u=a.trim();n[u]||(n[u]=c),c==="false"&&(n[u]=!1),c==="true"&&(n[u]=!0),isNaN(c)||(n[u]=parseInt(c,10))}})}return{formatName:t,formatOptions:n}},xt=e=>{const t={};return(n,s,i)=>{let o=i;i&&i.interpolationkey&&i.formatParams&&i.formatParams[i.interpolationkey]&&i[i.interpolationkey]&&(o={...o,[i.interpolationkey]:void 0});const r=s+JSON.stringify(o);let a=t[r];return a||(a=e(Gt(s),i),t[r]=a),a(n)}};class Li{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Q.create("formatter"),this.options=t,this.formats={number:xt((n,s)=>{const i=new Intl.NumberFormat(n,{...s});return o=>i.format(o)}),currency:xt((n,s)=>{const i=new Intl.NumberFormat(n,{...s,style:"currency"});return o=>i.format(o)}),datetime:xt((n,s)=>{const i=new Intl.DateTimeFormat(n,{...s});return o=>i.format(o)}),relativetime:xt((n,s)=>{const i=new Intl.RelativeTimeFormat(n,{...s});return o=>i.format(o,s.range||"day")}),list:xt((n,s)=>{const i=new Intl.ListFormat(n,{...s});return o=>i.format(o)})},this.init(t)}init(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=n.interpolation.formatSeparator||","}add(t,n){this.formats[t.toLowerCase().trim()]=n}addCached(t,n){this.formats[t.toLowerCase().trim()]=xt(n)}format(t,n,s){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const o=n.split(this.formatSeparator);if(o.length>1&&o[0].indexOf("(")>1&&o[0].indexOf(")")<0&&o.find(a=>a.indexOf(")")>-1)){const a=o.findIndex(l=>l.indexOf(")")>-1);o[0]=[o[0],...o.splice(1,a)].join(this.formatSeparator)}return o.reduce((a,l)=>{const{formatName:c,formatOptions:u}=Ei(l);if(this.formats[c]){let d=a;try{const h=i&&i.formatParams&&i.formatParams[i.interpolationkey]||{},f=h.locale||h.lng||i.locale||i.lng||s;d=this.formats[c](a,f,{...u,...i,...h})}catch(h){this.logger.warn(h)}return d}else this.logger.warn(`there was no format function for ${c}`);return a},t)}}const ki=(e,t)=>{e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)};class Oi extends se{constructor(t,n,s){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=t,this.store=n,this.services=s,this.languageUtils=s.languageUtils,this.options=i,this.logger=Q.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=i.maxParallelReads||10,this.readingCalls=0,this.maxRetries=i.maxRetries>=0?i.maxRetries:5,this.retryTimeout=i.retryTimeout>=1?i.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(s,i.backend,i)}queueLoad(t,n,s,i){const o={},r={},a={},l={};return t.forEach(c=>{let u=!0;n.forEach(d=>{const h=`${c}|${d}`;!s.reload&&this.store.hasResourceBundle(c,d)?this.state[h]=2:this.state[h]<0||(this.state[h]===1?r[h]===void 0&&(r[h]=!0):(this.state[h]=1,u=!1,r[h]===void 0&&(r[h]=!0),o[h]===void 0&&(o[h]=!0),l[d]===void 0&&(l[d]=!0)))}),u||(a[c]=!0)}),(Object.keys(o).length||Object.keys(r).length)&&this.queue.push({pending:r,pendingCount:Object.keys(r).length,loaded:{},errors:[],callback:i}),{toLoad:Object.keys(o),pending:Object.keys(r),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(t,n,s){const i=t.split("|"),o=i[0],r=i[1];n&&this.emit("failedLoading",o,r,n),!n&&s&&this.store.addResourceBundle(o,r,s,void 0,void 0,{skipCopy:!0}),this.state[t]=n?-1:2,n&&s&&(this.state[t]=0);const a={};this.queue.forEach(l=>{ui(l.loaded,[o],r),ki(l,t),n&&l.errors.push(n),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{a[c]||(a[c]={});const u=l.loaded[c];u.length&&u.forEach(d=>{a[c][d]===void 0&&(a[c][d]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(t,n,s){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,r=arguments.length>5?arguments[5]:void 0;if(!t.length)return r(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:n,fcName:s,tried:i,wait:o,callback:r});return}this.readingCalls++;const a=(c,u)=>{if(this.readingCalls--,this.waitingReads.length>0){const d=this.waitingReads.shift();this.read(d.lng,d.ns,d.fcName,d.tried,d.wait,d.callback)}if(c&&u&&i<this.maxRetries){setTimeout(()=>{this.read.call(this,t,n,s,i+1,o*2,r)},o);return}r(c,u)},l=this.backend[s].bind(this.backend);if(l.length===2){try{const c=l(t,n);c&&typeof c.then=="function"?c.then(u=>a(null,u)).catch(a):a(null,c)}catch(c){a(c)}return}return l(t,n,a)}prepareLoading(t,n){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),i&&i();w(t)&&(t=this.languageUtils.toResolveHierarchy(t)),w(n)&&(n=[n]);const o=this.queueLoad(t,n,s,i);if(!o.toLoad.length)return o.pending.length||i(),null;o.toLoad.forEach(r=>{this.loadOne(r)})}load(t,n,s){this.prepareLoading(t,n,{},s)}reload(t,n,s){this.prepareLoading(t,n,{reload:!0},s)}loadOne(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const s=t.split("|"),i=s[0],o=s[1];this.read(i,o,"read",void 0,void 0,(r,a)=>{r&&this.logger.warn(`${n}loading namespace ${o} for language ${i} failed`,r),!r&&a&&this.logger.log(`${n}loaded namespace ${o} for language ${i}`,a),this.loaded(t,r,a)})}saveMissing(t,n,s,i,o){let r=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(n)){this.logger.warn(`did not save key "${s}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(s==null||s==="")){if(this.backend&&this.backend.create){const l={...r,isUpdate:o},c=this.backend.create.bind(this.backend);if(c.length<6)try{let u;c.length===5?u=c(t,n,s,i,l):u=c(t,n,s,i),u&&typeof u.then=="function"?u.then(d=>a(null,d)).catch(a):a(null,u)}catch(u){a(u)}else c(t,n,s,i,a,l)}!t||!t[0]||this.store.addResource(t[0],n,s,i)}}}const tn=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if(typeof e[1]=="object"&&(t=e[1]),w(e[1])&&(t.defaultValue=e[1]),w(e[2])&&(t.tDescription=e[2]),typeof e[2]=="object"||typeof e[3]=="object"){const n=e[3]||e[2];Object.keys(n).forEach(s=>{t[s]=n[s]})}return t},interpolation:{escapeValue:!0,format:e=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),en=e=>(w(e.ns)&&(e.ns=[e.ns]),w(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),w(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e),Vt=()=>{},Ri=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(n=>{typeof e[n]=="function"&&(e[n]=e[n].bind(e))})};class At extends se{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(super(),this.options=en(t),this.services={},this.logger=Q,this.modules={external:[]},Ri(this),n&&!this.isInitialized&&!t.isClone){if(!this.options.initImmediate)return this.init(t,n),this;setTimeout(()=>{this.init(t,n)},0)}}init(){var t=this;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof n=="function"&&(s=n,n={}),!n.defaultNS&&n.defaultNS!==!1&&n.ns&&(w(n.ns)?n.defaultNS=n.ns:n.ns.indexOf("translation")<0&&(n.defaultNS=n.ns[0]));const i=tn();this.options={...i,...this.options,...en(n)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...i.interpolation,...this.options.interpolation}),n.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=n.keySeparator),n.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=n.nsSeparator);const o=u=>u?typeof u=="function"?new u:u:null;if(!this.options.isClone){this.modules.logger?Q.init(o(this.modules.logger),this.options):Q.init(null,this.options);let u;this.modules.formatter?u=this.modules.formatter:typeof Intl<"u"&&(u=Li);const d=new Xe(this.options);this.store=new qe(this.options.resources,this.options);const h=this.services;h.logger=Q,h.resourceStore=this.store,h.languageUtils=d,h.pluralResolver=new Ci(d,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),u&&(!this.options.interpolation.format||this.options.interpolation.format===i.interpolation.format)&&(h.formatter=o(u),h.formatter.init(h,this.options),this.options.interpolation.format=h.formatter.format.bind(h.formatter)),h.interpolator=new $i(this.options),h.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},h.backendConnector=new Oi(o(this.modules.backend),h.resourceStore,h,this.options),h.backendConnector.on("*",function(f){for(var p=arguments.length,g=new Array(p>1?p-1:0),m=1;m<p;m++)g[m-1]=arguments[m];t.emit(f,...g)}),this.modules.languageDetector&&(h.languageDetector=o(this.modules.languageDetector),h.languageDetector.init&&h.languageDetector.init(h,this.options.detection,this.options)),this.modules.i18nFormat&&(h.i18nFormat=o(this.modules.i18nFormat),h.i18nFormat.init&&h.i18nFormat.init(this)),this.translator=new Qt(this.services,this.options),this.translator.on("*",function(f){for(var p=arguments.length,g=new Array(p>1?p-1:0),m=1;m<p;m++)g[m-1]=arguments[m];t.emit(f,...g)}),this.modules.external.forEach(f=>{f.init&&f.init(this)})}if(this.format=this.options.interpolation.format,s||(s=Vt),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const u=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);u.length>0&&u[0]!=="dev"&&(this.options.lng=u[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(u=>{this[u]=function(){return t.store[u](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(u=>{this[u]=function(){return t.store[u](...arguments),t}});const l=Lt(),c=()=>{const u=(d,h)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(h),s(d,h)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return u(null,this.t.bind(this));this.changeLanguage(this.options.lng,u)};return this.options.resources||!this.options.initImmediate?c():setTimeout(c,0),l}loadResources(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Vt;const i=w(t)?t:this.language;if(typeof t=="function"&&(s=t),!this.options.resources||this.options.partialBundledLanguages){if(i&&i.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return s();const o=[],r=a=>{if(!a||a==="cimode")return;this.services.languageUtils.toResolveHierarchy(a).forEach(c=>{c!=="cimode"&&o.indexOf(c)<0&&o.push(c)})};i?r(i):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>r(l)),this.options.preload&&this.options.preload.forEach(a=>r(a)),this.services.backendConnector.load(o,this.options.ns,a=>{!a&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),s(a)})}else s(null)}reloadResources(t,n,s){const i=Lt();return typeof t=="function"&&(s=t,t=void 0),typeof n=="function"&&(s=n,n=void 0),t||(t=this.languages),n||(n=this.options.ns),s||(s=Vt),this.services.backendConnector.reload(t,n,o=>{i.resolve(),s(o)}),i}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&Fn.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1))for(let n=0;n<this.languages.length;n++){const s=this.languages[n];if(!(["cimode","dev"].indexOf(s)>-1)&&this.store.hasLanguageSomeTranslations(s)){this.resolvedLanguage=s;break}}}changeLanguage(t,n){var s=this;this.isLanguageChangingTo=t;const i=Lt();this.emit("languageChanging",t);const o=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},r=(l,c)=>{c?(o(c),this.translator.changeLanguage(c),this.isLanguageChangingTo=void 0,this.emit("languageChanged",c),this.logger.log("languageChanged",c)):this.isLanguageChangingTo=void 0,i.resolve(function(){return s.t(...arguments)}),n&&n(l,function(){return s.t(...arguments)})},a=l=>{!t&&!l&&this.services.languageDetector&&(l=[]);const c=w(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);c&&(this.language||o(c),this.translator.language||this.translator.changeLanguage(c),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(c)),this.loadResources(c,u=>{r(u,c)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(t),i}getFixedT(t,n,s){var i=this;const o=function(r,a){let l;if(typeof a!="object"){for(var c=arguments.length,u=new Array(c>2?c-2:0),d=2;d<c;d++)u[d-2]=arguments[d];l=i.options.overloadTranslationOptionHandler([r,a].concat(u))}else l={...a};l.lng=l.lng||o.lng,l.lngs=l.lngs||o.lngs,l.ns=l.ns||o.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||s||o.keyPrefix);const h=i.options.keySeparator||".";let f;return l.keyPrefix&&Array.isArray(r)?f=r.map(p=>`${l.keyPrefix}${h}${p}`):f=l.keyPrefix?`${l.keyPrefix}${h}${r}`:r,i.t(f,l)};return w(t)?o.lng=t:o.lngs=t,o.ns=n,o.keyPrefix=s,o}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const s=n.lng||this.resolvedLanguage||this.languages[0],i=this.options?this.options.fallbackLng:!1,o=this.languages[this.languages.length-1];if(s.toLowerCase()==="cimode")return!0;const r=(a,l)=>{const c=this.services.backendConnector.state[`${a}|${l}`];return c===-1||c===0||c===2};if(n.precheck){const a=n.precheck(this,r);if(a!==void 0)return a}return!!(this.hasResourceBundle(s,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||r(s,t)&&(!i||r(o,t)))}loadNamespaces(t,n){const s=Lt();return this.options.ns?(w(t)&&(t=[t]),t.forEach(i=>{this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}),this.loadResources(i=>{s.resolve(),n&&n(i)}),s):(n&&n(),Promise.resolve())}loadLanguages(t,n){const s=Lt();w(t)&&(t=[t]);const i=this.options.preload||[],o=t.filter(r=>i.indexOf(r)<0&&this.services.languageUtils.isSupportedCode(r));return o.length?(this.options.preload=i.concat(o),this.loadResources(r=>{s.resolve(),n&&n(r)}),s):(n&&n(),Promise.resolve())}dir(t){if(t||(t=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!t)return"rtl";const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],s=this.services&&this.services.languageUtils||new Xe(tn());return n.indexOf(s.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new At(t,n)}cloneInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Vt;const s=t.forkResourceStore;s&&delete t.forkResourceStore;const i={...this.options,...t,isClone:!0},o=new At(i);return(t.debug!==void 0||t.prefix!==void 0)&&(o.logger=o.logger.clone(t)),["store","services","language"].forEach(a=>{o[a]=this[a]}),o.services={...this.services},o.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},s&&(o.store=new qe(this.store.data,i),o.services.resourceStore=o.store),o.translator=new Qt(o.services,i),o.translator.on("*",function(a){for(var l=arguments.length,c=new Array(l>1?l-1:0),u=1;u<l;u++)c[u-1]=arguments[u];o.emit(a,...c)}),o.init(i,n),o.translator.options=i,o.translator.backendConnector.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},o}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const V=At.createInstance();V.createInstance=At.createInstance;V.createInstance;V.dir;V.init;V.loadResources;V.reloadResources;V.use;V.changeLanguage;V.getFixedT;const Ce=V.t;V.exists;V.setDefaultNamespace;V.hasLoadedNamespace;V.loadNamespaces;V.loadLanguages;class zi{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}let Ai=class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}};const nn=e=>!ws(e)&&typeof e.then=="function",sn=1073741823;let Pi=class extends ze{constructor(){super(...arguments),this._$Cwt=sn,this._$Cbt=[],this._$CK=new zi(this),this._$CX=new Ai}render(...t){return t.find(n=>!nn(n))??Y}update(t,n){const s=this._$Cbt;let i=s.length;this._$Cbt=n;const o=this._$CK,r=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<n.length&&!(a>this._$Cwt);a++){const l=n[a];if(!nn(l))return this._$Cwt=a,l;a<i&&l===s[a]||(this._$Cwt=sn,i=0,Promise.resolve(l).then(async c=>{for(;r.get();)await r.get();const u=o.deref();if(u!==void 0){const d=u._$Cbt.indexOf(l);d>-1&&d<u._$Cwt&&(u._$Cwt=d,u.setValue(c))}}))}return Y}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const Zt=vt(Pi);const on=(e,t,n)=>{const s=new Map;for(let i=t;i<=n;i++)s.set(e[i],i);return s},Mn=vt(class extends Tt{constructor(e){if(super(e),e.type!==X.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let s;n===void 0?n=t:t!==void 0&&(s=t);const i=[],o=[];let r=0;for(const a of e)i[r]=s?s(a,r):r,o[r]=n(a,r),r++;return{values:o,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,s]){const i=_s(e),{values:o,keys:r}=this.dt(t,n,s);if(!Array.isArray(i))return this.ut=r,o;const a=this.ut??=[],l=[];let c,u,d=0,h=i.length-1,f=0,p=o.length-1;for(;d<=h&&f<=p;)if(i[d]===null)d++;else if(i[h]===null)h--;else if(a[d]===r[f])l[f]=dt(i[d],o[f]),d++,f++;else if(a[h]===r[p])l[p]=dt(i[h],o[p]),h--,p--;else if(a[d]===r[p])l[p]=dt(i[d],o[p]),Et(e,l[p+1],i[d]),d++,p--;else if(a[h]===r[f])l[f]=dt(i[h],o[f]),Et(e,i[d],i[h]),h--,f++;else if(c===void 0&&(c=on(r,f,p),u=on(a,d,h)),c.has(a[d]))if(c.has(a[h])){const g=u.get(r[f]),m=g!==void 0?i[g]:null;if(m===null){const b=Et(e,i[d]);dt(b,o[f]),l[f]=b}else l[f]=dt(m,o[f]),Et(e,i[d],m),i[g]=null;f++}else pe(i[h]),h--;else pe(i[d]),d++;for(;f<=p;){const g=Et(e,l[p+1]);dt(g,o[f]),l[f++]=g}for(;d<=h;){const g=i[d++];g!==null&&pe(g)}return this.ut=r,On(e,l),Y}}),Ti=e=>typeof e=="object"&&e!==null&&Symbol.iterator in e;function at(e){return e==null?[]:Array.isArray(e)?e:typeof e=="string"?[e]:Ti(e)?Array.from(e):[e]}const ve=(e,t=Jt)=>n=>{const s=at(e).map(t);return at(n).filter(i=>!s.includes(t(i)))};function In(e){return e?t=>typeof t=="object"&&t!==null?t[e]:t:Jt}const Ni=e=>{const t=In(e);return n=>typeof n=="string"?n:t(n)?.toString()||""},Fi=e=>t=>{const n={};for(const s in t)e.includes(s)&&(n[s]=t[s]);return n};function rn(e,t,...n){return e?e(t,...n):t}const ie=vt(class extends Tt{constructor(e){if(super(e),e.type!==X.PROPERTY&&e.type!==X.ATTRIBUTE&&e.type!==X.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!kn(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Y||t===it)return t;const n=e.element,s=e.name;if(e.type===X.PROPERTY){if(t===n[s])return Y}else if(e.type===X.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(s))return Y}else if(e.type===X.ATTRIBUTE&&n.getAttribute(s)===t+"")return Y;return On(e),t}}),ye=new WeakMap,Nt=vt(class extends ze{render(e){return it}update(e,[t]){const n=t!==this.G;return n&&this.G!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),it}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let n=ye.get(t);n===void 0&&(n=new WeakMap,ye.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?ye.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Dn=ut(class extends ct{values;constructor(e,t,n,s){super(e,t),Object.assign(t.host,n),this.values=s}update(e,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((t,n)=>this.values[n]!==t)}}),Mi=/([A-Z])/gu,an=(e,t,n)=>{e[t]=n,e.dispatchEvent(new CustomEvent(t.replace(Mi,"-$1").toLowerCase()+"-changed",{detail:{value:n}}))},Vn=e=>{const t=wt(void 0),n=$(c=>t.current=c,[]),s=e.shadowRoot,i=$(c=>e.dispatchEvent(new Event(c.type,{bubbles:c.bubbles})),[]),o=$(c=>an(e,"value",c.target.value),[]),r=$(c=>an(e,"focused",c.type==="focus"),[]),a=$(()=>t.current?.focus(),[]),l=$(()=>{const c=t.current?.checkValidity();return e.toggleAttribute("invalid",!c),c},[]);return Dn({focus:a,validate:l},[a,l]),R(()=>{const c=u=>{u.defaultPrevented||e.disabled||u.target.matches("input, textarea, label")||(u.preventDefault(),e.matches(":focus-within")||a())};return s.addEventListener("mousedown",c),()=>s.removeEventListener("mousedown",c)},[a]),{onChange:i,onFocus:r,onInput:o,onRef:n}},Ii=e=>N(()=>{if(e==null)return;const t=new RegExp(e,"u");return n=>{!n.defaultPrevented&&n.data&&!t.test(n.data)&&n.preventDefault()}},[e]),jn=(e,{label:t,invalid:n,errorMessage:s})=>C`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${e}
				${F(t,()=>C`<label for="input" part="label">${t}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${F(n&&s,()=>C`<div class="error" part="error">${s}</div>`)}
	`,Bn=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],Di=({placeholder:e,noLabelFloat:t,label:n})=>(t?n:void 0)||e||" ",ln=ot`
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
`,Hn=ot`
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
		${ln}
	}
	@container style(--focused: focused) {
		${ln}
	}
`,Vi=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...Bn],ji=e=>{const{type:t="text",pattern:n,allowedPattern:s,autocomplete:i,value:o,readonly:r,disabled:a,min:l,max:c,step:u,maxlength:d}=e,{onChange:h,onFocus:f,onInput:p,onRef:g}=Vn(e),m=Ii(s);return jn(C`
			<input
				${Nt(g)}
				style="--chars: ${o?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${O(n)}
				autocomplete=${O(i)}
				placeholder=${Di(e)}
				?readonly=${r}
				?aria-disabled=${a}
				?disabled=${a}
				.value=${ie(o??"")}
				maxlength=${O(d)}
				@beforeinput=${m}
				@input=${p}
				@change=${h}
				@focus=${f}
				@blur=${f}
				min=${O(l)}
				max=${O(c)}
				step=${O(u)}
			/>
		`,e)};customElements.define("cosmoz-input",et(ji,{observedAttributes:Vi,styleSheets:[Re(Hn)]}));const cn=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},Bi=(e,t=0)=>{if(t>0){const n=e.getAttribute("rows")??"",s=e.style.height;e.style.height="",e.setAttribute("rows",t),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=s,e.setAttribute("rows",n)}},Hi=e=>{const{value:t,maxRows:n}=e,s=N(()=>()=>e.shadowRoot.querySelector("#input"),[]);R(()=>Bi(s(),n),[n,s]),R(()=>cn(s()),[s,t]),R(()=>{const i=s(),o=new ResizeObserver(()=>requestAnimationFrame(()=>cn(i)));return o.observe(i),()=>o.unobserve(i)},[s])},Ui=["rows","placeholder",...Bn],Ki=e=>{const{autocomplete:t,value:n,placeholder:s,readonly:i,disabled:o,rows:r,cols:a,maxlength:l}=e,{onChange:c,onFocus:u,onInput:d,onRef:h}=Vn(e);return Hi(e),jn(C`
			<textarea id="input" part="input"
				${Nt(h)}
				autocomplete=${O(t)}
				placeholder=${s||" "}
				rows=${r??1} cols=${O(a)}
				?readonly=${i} ?aria-disabled=${o} ?disabled=${o}
				.value=${ie(n??"")} maxlength=${O(l)} @input=${d}
				@change=${c} @focus=${u} @blur=${u}>`,e)};customElements.define("cosmoz-textarea",et(Ki,{observedAttributes:Ui,styleSheets:[Re(Hn)]}));const Wi=e=>{const{label:t,value:n,disabled:s,error:i}=e,o=$(r=>e.dispatchEvent(new CustomEvent("change",{detail:r.target.checked})),[]);return C`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${ie(!!n)}
			?disabled=${s}
			@change=${o}
		/>
		${F(t,()=>C`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${F(i,r=>C`<div class="failure">${r}</div>`)} `},Yi=gt`
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
`,Ji=gt`
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
`;customElements.define("cosmoz-toggle",et(Wi,{styleSheets:[Ji,Yi],observedAttributes:["disabled"]}));const qi=e=>{if(!e||e===1/0)return;if(typeof e=="number")return e;const t=parseFloat(e.replace(/[\s]/gu,"").replace(/^−/gu,"-").replace(/[,.]/gu,".").replace(/[.](?=.*[.])/gu,""));if(!isNaN(t))return t},Gi=/^[0-9.,e-]+$/u,Xi=e=>e==null||e===""||Number.isNaN(e)||Array.isArray(e)&&e.length<1,un=e=>Xi(e)&&Ce("Required"),Qi=Symbol("error"),Zi=(e,t,n,s,i)=>{for(const o of at(e)){const r=o(t,n,s,i);if(r)return r}},to=(e,t,n)=>e.validate&&Zi(e.validate,t[e.path??e.id],t,e,n),eo=(e,t,n)=>{const s=e.map(i=>({...i,error:to(i,t,n)}));return{fields:s,invalid:s.some(({error:i})=>!!i)}},no=(e,t,n)=>t?eo(e,t,n):{fields:e,invalid:!0},so=(e,t,n,s)=>{s!=null&&Object.is(s[t],n)||e({[t]:n})},io=e=>Array.isArray(e)?e.some(t=>t===un):e===un,Un=e=>({field:t,value:n,values:s,onChange:i,context:o,...r})=>{const a=(u,d)=>(t.onChange??so)(h=>i(h,d),t.path??t.id,rn(t.value?.[1],u,s,t,o),s),l=B(t.mandatory??io(t.validate),n,s,t,o)?" *":void 0;if(!B(t.hidden,n,s,t,o))return e({...t,...r,context:o,values:s,label:[B(t.label,n,s,t,o),l].join(""),placeholder:B(t.placeholder,n,s,t,o),disabled:B(t.disabled,n,s,t,o),warning:B(t.warning,n,s,t,o),prefix:B(t.prefix,n,s,t,o),suffix:B(t.suffix,n,s,t,o),value:rn(t.value?.[0],n,s,t,o),onFocus:t.onFocus?.(a,n,s,t),onChange:a})},oo=e=>F(e,()=>C`<span slot="prefix">${e}</span>`),ro=e=>F(e,()=>C`<span slot="suffix">${e}</span>`),ao=(e,t="suffix")=>F(e,()=>Gs({slot:t,title:e,width:"22",height:"22",styles:"color: var(--paper-amber-500); vertical-align: middle"})),lo=(e,t="suffix")=>F(e,()=>qs({slot:t,title:e,width:"22",height:"22",styles:"color: var(--cz-text-color); vertical-align: middle; cursor: help"})),co=({prefix:e,suffix:t,warning:n,description:s})=>[oo(e),ro(t),ao(n),lo(s)],Kn=e=>{const{value:t,values:n,onFocus:s,onInput:i,context:o,...r}=e,{id:a,type:l="text",label:c,placeholder:u,noLabelFloat:d,alwaysFloatLabel:h,error:f,prefix:p,suffix:g,warning:m,allowedPattern:b,step:v,disabled:y,maxlength:x,min:_,max:E,autosize:S,noSpinner:z,autocomplete:T,title:A,description:M}=r;return C`<cosmoz-input
		class="input input-common input-${l}"
		name=${a}
		type=${l}
		?autosize=${S}
		?disabled=${y}
		?no-label-float=${d}
		?always-float-label=${h}
		?invalid=${!!f}
		?no-spinner=${!!z}
		.placeholder=${u}
		.errorMessage=${f}
		.allowedPattern=${b}
		.step=${v}
		.label=${c}
		.value=${t}
		title=${O((f??A)||void 0)}
		maxlength=${O(x)}
		min=${O(B(_,t,n,r,o))}
		max=${O(B(E,t,n,r,o))}
		autocomplete=${O(T)}
		@focus=${s}
		@input=${i}
		>${co({prefix:p,suffix:g,warning:m,description:M})}</cosmoz-input
	>`},uo=Un(({onChange:e,...t})=>Kn({...t,onInput:n=>e(n.target.value)})),Ra=Un(({onChange:e,allowedPattern:t=Gi,...n})=>Kn({...n,type:"number",allowedPattern:t,onInput:s=>e(qi(s.target.value))})),ho=({field:e,values:t,...n})=>{const s=(n.touched&&(t?.[Qi]?.[e.id]??e.error))??!1,i=t?.[e.path??e.id];return(e.input??uo)({...n,error:s,value:i,field:e,values:t})},fo=({fields:e,...t})=>Mn(e??[],({id:n})=>n,n=>ho({field:n,fields:e,...t})),po=({fields:e,selector:t=""})=>(e??[]).map(({id:n,styles:s})=>s?`${t}[name="${String(n)}"] { ${Object.entries(s).map(([i,o])=>`${i}:${o}`).join(";")} }`:"").join(`
`);class oe extends Event{constructor(t){super(oe.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}oe.eventName="rangeChanged";class re extends Event{constructor(t){super(re.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}re.eventName="visibilityChanged";class ae extends Event{constructor(){super(ae.eventName,{bubbles:!1})}}ae.eventName="unpinned";class go{constructor(t){this._element=null;const n=t??window;this._node=n,t&&(this._element=t)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class mo extends go{constructor(t,n){super(n),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const s=this._node;this._originalScrollTo=s.scrollTo,this._originalScrollBy=s.scrollBy,this._originalScroll=s.scroll,this._attach(t)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(t,n){const s=typeof t=="number"&&typeof n=="number"?{left:t,top:n}:t;this._scrollTo(s)}scrollBy(t,n){const s=typeof t=="number"&&typeof n=="number"?{left:t,top:n}:t;s.top!==void 0&&(s.top+=this.scrollTop),s.left!==void 0&&(s.left+=this.scrollLeft),this._scrollTo(s)}_nativeScrollTo(t){this._originalScrollTo.bind(this._element||window)(t)}_scrollTo(t,n=null,s=null){this._end!==null&&this._end(),t.behavior==="smooth"?(this._setDestination(t),this._retarget=n,this._end=s):this._resetScrollState(),this._nativeScrollTo(t)}_setDestination(t){let{top:n,left:s}=t;return n=n===void 0?void 0:Math.max(0,Math.min(n,this.maxScrollTop)),s=s===void 0?void 0:Math.max(0,Math.min(s,this.maxScrollLeft)),this._destination!==null&&s===this._destination.left&&n===this._destination.top?!1:(this.__destination={top:n,left:s,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(t){this._destination&&this._setDestination(t)&&this._nativeScrollTo(this._destination)}managedScrollTo(t,n,s){return this._scrollTo(t,n,s),this._updateManagedScrollTo}correctScrollError(t){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(t),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:t,scrollLeft:n}=this;let{top:s,left:i}=this._destination;s=Math.min(s||0,this.maxScrollTop),i=Math.min(i||0,this.maxScrollLeft);const o=Math.abs(s-t),r=Math.abs(i-n);o<1&&r<1&&(this._end&&this._end(),this._resetScrollState())}}detach(t){return this._clients.delete(t),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(t){this._clients.add(t),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let hn=typeof window<"u"?window.ResizeObserver:void 0;const $e=Symbol("virtualizerRef"),jt="virtualizer-sizer";let dn;class bo{constructor(t){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!t)throw new Error("Virtualizer constructor requires a configuration object");if(t.hostElement)this._init(t);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(t){Array.isArray(t)&&t!==this._items&&(this._itemsChanged=!0,this._items=t,this._schedule(this._updateLayout))}_init(t){this._isScroller=!!t.scroller,this._initHostElement(t);const n=t.layout||{};this._layoutInitialized=this._initLayout(n)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new hn(()=>this._hostElementSizeChanged()),this._childrenRO=new hn(this._childrenSizeChanged.bind(this))}_initHostElement(t){const n=this._hostElement=t.hostElement;this._applyVirtualizerStyles(),n[$e]=this}connected(){this._initObservers();const t=this._isScroller;this._clippingAncestors=xo(this._hostElement,t),this._scrollerController=new mo(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(t=>{t.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(t),this._hostElementRO.observe(t)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(t=>this._childrenRO.observe(t)),this._scrollEventListeners.forEach(t=>t.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(t=>t.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const n=this._hostElement.style;n.display=n.display||"block",n.position=n.position||"relative",n.contain=n.contain||"size layout",this._isScroller&&(n.overflow=n.overflow||"auto",n.minHeight=n.minHeight||"150px")}_getSizer(){const t=this._hostElement;if(!this._sizer){let n=t.querySelector(`[${jt}]`);n||(n=document.createElement("div"),n.setAttribute(jt,""),t.appendChild(n)),Object.assign(n.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),n.textContent="&nbsp;",n.setAttribute(jt,""),this._sizer=n}return this._sizer}async updateLayoutConfig(t){await this._layoutInitialized;const n=t.type||dn;if(typeof n=="function"&&this._layout instanceof n){const s={...t};return delete s.type,this._layout.config=s,!0}return!1}async _initLayout(t){let n,s;if(typeof t.type=="function"){s=t.type;const i={...t};delete i.type,n=i}else n=t;s===void 0&&(dn=s=(await Ss(()=>import("./flow-BqIEBwW6.js"),[],import.meta.url)).FlowLayout),this._layout=new s(i=>this._handleLayoutMessage(i),n),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const t=window.performance.now(),n=t-this._benchmarkStart,i=performance.getEntriesByName("uv-virtualizing","measure").filter(o=>o.startTime>=this._benchmarkStart&&o.startTime<t).reduce((o,r)=>o+r.duration,0);return this._benchmarkStart=null,{timeElapsed:n,virtualizationTime:i}}return null}_measureChildren(){const t={},n=this._children,s=this._measureChildOverride||this._measureChild;for(let i=0;i<n.length;i++){const o=n[i],r=this._first+i;(this._itemsChanged||this._toBeMeasured.has(o))&&(t[r]=s.call(this,o,this._items[r]))}this._childMeasurements=t,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(t){const{width:n,height:s}=t.getBoundingClientRect();return Object.assign({width:n,height:s},vo(t))}async _schedule(t){this._scheduled.has(t)||(this._scheduled.add(t),await Promise.resolve(),this._scheduled.delete(t),t.call(this))}async _updateDOM(t){this._scrollSize=t.scrollSize,this._adjustRange(t.range),this._childrenPos=t.childPositions,this._scrollError=t.scrollError||null;const{_rangeChanged:n,_itemsChanged:s}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(n||s)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(t=>this._childrenRO.observe(t)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(t){console.warn("Error measuring performance data: ",t)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(t){t.type==="scroll"?(t.currentTarget===window||this._clippingAncestors.includes(t.currentTarget))&&this._handleScrollEvent():console.warn("event not handled",t)}_handleLayoutMessage(t){t.type==="stateChanged"?this._updateDOM(t):t.type==="visibilityChanged"?(this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._notifyVisibility()):t.type==="unpinned"&&this._hostElement.dispatchEvent(new ae)}get _children(){const t=[];let n=this._hostElement.firstElementChild;for(;n;)n.hasAttribute(jt)||t.push(n),n=n.nextElementSibling;return t}_updateView(){const t=this._hostElement,n=this._scrollerController?.element,s=this._layout;if(t&&n&&s){let i,o,r,a;const l=t.getBoundingClientRect();i=0,o=0,r=window.innerHeight,a=window.innerWidth;const c=this._clippingAncestors.map(b=>b.getBoundingClientRect());c.unshift(l);for(const b of c)i=Math.max(i,b.top),o=Math.max(o,b.left),r=Math.min(r,b.bottom),a=Math.min(a,b.right);const u=n.getBoundingClientRect(),d={left:l.left-u.left,top:l.top-u.top},h={width:n.scrollWidth,height:n.scrollHeight},f=i-l.top+t.scrollTop,p=o-l.left+t.scrollLeft,g=Math.max(0,r-i),m=Math.max(0,a-o);s.viewportSize={width:m,height:g},s.viewportScroll={top:f,left:p},s.totalScrollSize=h,s.offsetWithinScroller=d}}_sizeHostElement(t){const s=t&&t.width!==null?Math.min(82e5,t.width):0,i=t&&t.height!==null?Math.min(82e5,t.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${s}px, ${i}px)`;else{const o=this._hostElement.style;o.minWidth=s?`${s}px`:"100%",o.minHeight=i?`${i}px`:"100%"}}_positionChildren(t){t&&t.forEach(({top:n,left:s,width:i,height:o,xOffset:r,yOffset:a},l)=>{const c=this._children[l-this._first];c&&(c.style.position="absolute",c.style.boxSizing="border-box",c.style.transform=`translate(${s}px, ${n}px)`,i!==void 0&&(c.style.width=i+"px"),o!==void 0&&(c.style.height=o+"px"),c.style.left=r===void 0?null:r+"px",c.style.top=a===void 0?null:a+"px")})}async _adjustRange(t){const{_first:n,_last:s,_firstVisible:i,_lastVisible:o}=this;this._first=t.first,this._last=t.last,this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==n||this._last!==s,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==i||this._lastVisible!==o}_correctScrollError(){if(this._scrollError){const{scrollTop:t,scrollLeft:n}=this._scrollerController,{top:s,left:i}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:t-s,left:n-i})}}element(t){return t===1/0&&(t=this._items.length-1),this._items?.[t]===void 0?void 0:{scrollIntoView:(n={})=>this._scrollElementIntoView({...n,index:t})}}_scrollElementIntoView(t){if(t.index>=this._first&&t.index<=this._last)this._children[t.index-this._first].scrollIntoView(t);else if(t.index=Math.min(t.index,this._items.length-1),t.behavior==="smooth"){const n=this._layout.getScrollIntoViewCoordinates(t),{behavior:s}=t;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(n,{behavior:s}),()=>this._layout.getScrollIntoViewCoordinates(t),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=t}else this._layout.pin=t}_checkScrollIntoViewTarget(t){const{index:n}=this._scrollIntoViewTarget||{};n&&t?.has(n)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new oe({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new re({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((t,n)=>{this._layoutCompleteResolver=t,this._layoutCompleteRejecter=n})),this._layoutCompletePromise}_rejectLayoutCompletePromise(t){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(t),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(t){if(this._layout?.measureChildren){for(const n of t)this._toBeMeasured.set(n.target,n.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function vo(e){const t=window.getComputedStyle(e);return{marginTop:Bt(t.marginTop),marginRight:Bt(t.marginRight),marginBottom:Bt(t.marginBottom),marginLeft:Bt(t.marginLeft)}}function Bt(e){const t=e?parseFloat(e):NaN;return Number.isNaN(t)?0:t}function fn(e){if(e.assignedSlot!==null)return e.assignedSlot;if(e.parentElement!==null)return e.parentElement;const t=e.parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host||null}function yo(e,t=!1){const n=[];let s=t?e:fn(e);for(;s!==null;)n.push(s),s=fn(s);return n}function xo(e,t=!1){let n=!1;return yo(e,t).filter(s=>{if(n)return!1;const i=getComputedStyle(s);return n=i.position==="fixed",i.overflow!=="visible"})}const wo=e=>e,_o=(e,t)=>C`${t}: ${JSON.stringify(e,null,2)}`;class So extends ze{constructor(t){if(super(t),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(n,s)=>_o(n,s+this._first),this._keyFunction=(n,s)=>wo(n,s+this._first),this._items=[],t.type!==X.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(t){t&&this._setFunctions(t);const n=[];if(this._first>=0&&this._last>=this._first)for(let s=this._first;s<=this._last;s++)n.push(this._items[s]);return Mn(n,this._keyFunction,this._renderItem)}update(t,[n]){this._setFunctions(n);const s=this._items!==n.items;return this._items=n.items||[],this._virtualizer?this._updateVirtualizerConfig(t,n):this._initialize(t,n),s?Y:this.render()}async _updateVirtualizerConfig(t,n){if(!await this._virtualizer.updateLayoutConfig(n.layout||{})){const i=t.parentNode;this._makeVirtualizer(i,n)}this._virtualizer.items=this._items}_setFunctions(t){const{renderItem:n,keyFunction:s}=t;n&&(this._renderItem=(i,o)=>n(i,o+this._first)),s&&(this._keyFunction=(i,o)=>s(i,o+this._first))}_makeVirtualizer(t,n){this._virtualizer&&this._virtualizer.disconnected();const{layout:s,scroller:i,items:o}=n;this._virtualizer=new bo({hostElement:t,layout:s,scroller:i}),this._virtualizer.items=o,this._virtualizer.connected()}_initialize(t,n){const s=t.parentNode;s&&s.nodeType===1&&(s.addEventListener("rangeChanged",i=>{this._first=i.first,this._last=i.last,this.setValue(this.render())}),this._makeVirtualizer(s,n))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}}const Co=vt(So);ot`
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
`;const $o=()=>it,Eo=(e,t)=>Promise.resolve(e).then(t,t),Lo=e=>Zt(e?.then($o,t=>C`<div class="failure">${t.message}</div>`),it),ko=({save$:e,progress:t,...n})=>{const s=({onSave:i,onClick:o=i,title:r,disabled:a,progress:l,content:c=it,slot:u})=>C` <button
			class="button save"
			slot=${O(u)}
			?disabled=${a}
			?data-progress=${l}
			@click=${d=>(d.stopPropagation(),o())}
		>
			${c} ${r}
		</button>`;return Zt(Eo(e,()=>s(n)),s({...n,disabled:!0,progress:!0,content:C`<cz-spinner></cz-spinner> ${F(t,i=>i.join("/"))}`}))},Oo=ot`
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
`,Ro=()=>{let e=null;return{run:async(t,n,s,i)=>{e?.abort(),e=new AbortController;const o={update:s,signal:e.signal,index:i?.index,context:i?.context};try{return await t(n,o)}catch(r){if(r instanceof DOMException&&r.name==="AbortError")return null;throw r}},cancel:()=>{e?.abort(),e=null}}},zo=(e,t)=>e.length!==t.length||e.some((n,s)=>!Object.is(n,t[s])),Ao=e=>{console.error("[cosmoz-form] async rule error:",e)},Po=(e,t,n)=>{const s=Ao,i=wt(new Map),o=wt(new Map),r=wt(0),[a,l]=W(!1);return R(()=>()=>{for(const c of i.current.values())c.cancel()},[]),R(()=>{if(!t?.length)return;const c=e.context;for(const u of t){const[d,h,f=Ro]=u;i.current.has(u)||i.current.set(u,f());const p=h(e.values,void 0,c),g=o.current.get(u);if(g!=null&&!zo(p,g))continue;o.current.set(u,p);const m=i.current.get(u);r.current++,r.current===1&&l(!0),m.run(d,e.values,b=>e.onChange(b,!1),{context:c}).then(b=>{b!==null&&e.onChange(b,!1)}).catch(b=>s(b,u)).finally(()=>{r.current--,r.current===0&&l(!1)})}},[e.values,e.context]),{...e,processing:a}},Ee=Symbol("touched");function Kt(e,t=!0){if(e==null)return;const n=e;return t?n[Ee]=!0:delete n[Ee],e}const Wn=e=>Kt(e,!1),pn=e=>!!e?.[Ee],To=(e,t)=>!t||e.some((n,s)=>!Object.is(t[s],n)),kt=({oldItem:e,newItem:t,rules:n,index:s,oldIndex:i=s,context:o,oldContext:r=o})=>n?n.reduce((a,[l,c])=>e&&c&&!To(c(a,s,o),c(e,i,r))?a:{...a,...l(a,e,s,i,o)},t):t,No=(e,t,n,s,i)=>{const[,o]=e,r=wt(void 0);return R(()=>{const a=r.current;r.current=s,a!==void 0&&t(([l,c])=>[l,Kt(kt({oldItem:c,newItem:c,rules:n,context:s,oldContext:a}),pn(c))])},[s]),{values:o,context:s??{},onReset:$(()=>t(([a])=>[a,a]),[t]),onValues:$((a,l=!0)=>t(([c,u])=>[c,Kt(kt({oldItem:u,newItem:B(a,u),rules:n,context:s}),l)]),[n,t,s]),onChange:$((a,l=!0)=>t(([c,u])=>[c,Kt(kt({oldItem:u,newItem:{...u,...B(a,u)},rules:n,context:s}),l)]),[n,t,s]),load:$((a,l)=>{if(!a){t([a,a]);return}const c=Wn(kt({oldItem:void 0,newItem:a,rules:l??n,context:s}));t([c,c])},[n,t,s]),touched:N(()=>pn(o)||(i??!1),[o,i])}},Fo=(e,t,n)=>Wn(kt({oldItem:void 0,newItem:e,rules:t,context:n})),Yn=(e,t=[])=>{const n=e.filter(s=>s?.rules!=null).flatMap(s=>s?.rules);return[...t,...n]},Mo=(e,t,{fields:n,rules:s,context:i,touched:o})=>{const r=N(()=>B(n)??[],[n]),a=N(()=>Yn(r,s),[r,s]),l=No(e,t,a,i,o),{values:c}=l;return{...N(()=>no(r,c,i),[r,c,i]),...l}},Io=e=>{const[t,n]=W(()=>{const s=B(e.fields)??[],i=Yn(s,e.rules),o=Fo(e.initial,i,e.context);return[o,o]});return Mo(t,n,e)};function Do({fields:e,initial:t,rules:n,asyncRules:s,context:i,onSave:o,allowEmpty:r}){const a=Io({fields:e,initial:t,rules:n,context:i}),{processing:l}=Po(a,s),{values:c,invalid:u}=a,[d,h]=W(),[f,p]=W(),g=c==null||c===t,m=a.fields?.length>0&&!(g&&r)&&(g||u);return{...a,save$:d,onSave:$(()=>h(o?.(c,t,p)),[o,c,t]),disabled:m,processing:l,progress:f}}const Vo=ot`
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
`,Jn=e=>{const{description:t,auto:n,uncancelable:s,hideCancelButton:i,saveText:o=Ce("OK")}=e,{onSave:r,disabled:a,save$:l,progress:c,...u}=Do(e);return R(()=>{n&&r()},[n]),C` <style>
			${Oo} ${po(u)}${Vo}
		</style>
		${F(t,()=>C`<p class="description">${t}</p>`)}
		<div class="form" part="form">${fo(u)}</div>
		<div class="buttons">
			${Lo(l)}
			${ko({save$:l,onSave:r,disabled:a,title:o,progress:c})}
			${F(!i,()=>C`<button class="button" value="cancel" ?disabled=${s}>
						${Ce("Cancel")}
					</button>`)}
		</div>`};customElements.define("cosmoz-form-dialog",Pe(Jn,{observedAttributes:["allow-empty"]}));customElements.define("cosmoz-form-dialog-next",Pe(Jn,{observedAttributes:["allow-empty"]}));const St=Math.min,H=Math.max,te=Math.round,Ht=Math.floor,Z=e=>({x:e,y:e}),jo={left:"right",right:"left",bottom:"top",top:"bottom"},Bo={start:"end",end:"start"};function gn(e,t,n){return H(e,St(t,n))}function le(e,t){return typeof e=="function"?e(t):e}function mt(e){return e.split("-")[0]}function ce(e){return e.split("-")[1]}function qn(e){return e==="x"?"y":"x"}function Gn(e){return e==="y"?"height":"width"}const Ho=new Set(["top","bottom"]);function rt(e){return Ho.has(mt(e))?"y":"x"}function Xn(e){return qn(rt(e))}function Uo(e,t,n){n===void 0&&(n=!1);const s=ce(e),i=Xn(e),o=Gn(i);let r=i==="x"?s===(n?"end":"start")?"right":"left":s==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(r=ee(r)),[r,ee(r)]}function Ko(e){const t=ee(e);return[Le(e),t,Le(t)]}function Le(e){return e.replace(/start|end/g,t=>Bo[t])}const mn=["left","right"],bn=["right","left"],Wo=["top","bottom"],Yo=["bottom","top"];function Jo(e,t,n){switch(e){case"top":case"bottom":return n?t?bn:mn:t?mn:bn;case"left":case"right":return t?Wo:Yo;default:return[]}}function qo(e,t,n,s){const i=ce(e);let o=Jo(mt(e),n==="start",s);return i&&(o=o.map(r=>r+"-"+i),t&&(o=o.concat(o.map(Le)))),o}function ee(e){return e.replace(/left|right|bottom|top/g,t=>jo[t])}function Go(e){return{top:0,right:0,bottom:0,left:0,...e}}function Xo(e){return typeof e!="number"?Go(e):{top:e,right:e,bottom:e,left:e}}function ne(e){const{x:t,y:n,width:s,height:i}=e;return{width:s,height:i,top:n,left:t,right:t+s,bottom:n+i,x:t,y:n}}function vn(e,t,n){let{reference:s,floating:i}=e;const o=rt(t),r=Xn(t),a=Gn(r),l=mt(t),c=o==="y",u=s.x+s.width/2-i.width/2,d=s.y+s.height/2-i.height/2,h=s[a]/2-i[a]/2;let f;switch(l){case"top":f={x:u,y:s.y-i.height};break;case"bottom":f={x:u,y:s.y+s.height};break;case"right":f={x:s.x+s.width,y:d};break;case"left":f={x:s.x-i.width,y:d};break;default:f={x:s.x,y:s.y}}switch(ce(t)){case"start":f[r]-=h*(n&&c?-1:1);break;case"end":f[r]+=h*(n&&c?-1:1);break}return f}const Qo=async(e,t,n)=>{const{placement:s="bottom",strategy:i="absolute",middleware:o=[],platform:r}=n,a=o.filter(Boolean),l=await(r.isRTL==null?void 0:r.isRTL(t));let c=await r.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=vn(c,s,l),h=s,f={},p=0;for(let g=0;g<a.length;g++){const{name:m,fn:b}=a[g],{x:v,y,data:x,reset:_}=await b({x:u,y:d,initialPlacement:s,placement:h,strategy:i,middlewareData:f,rects:c,platform:r,elements:{reference:e,floating:t}});u=v??u,d=y??d,f={...f,[m]:{...f[m],...x}},_&&p<=50&&(p++,typeof _=="object"&&(_.placement&&(h=_.placement),_.rects&&(c=_.rects===!0?await r.getElementRects({reference:e,floating:t,strategy:i}):_.rects),{x:u,y:d}=vn(c,h,l)),g=-1)}return{x:u,y:d,placement:h,strategy:i,middlewareData:f}};async function Te(e,t){var n;t===void 0&&(t={});const{x:s,y:i,platform:o,rects:r,elements:a,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:h=!1,padding:f=0}=le(t,e),p=Xo(f),m=a[h?d==="floating"?"reference":"floating":d],b=ne(await o.getClippingRect({element:(n=await(o.isElement==null?void 0:o.isElement(m)))==null||n?m:m.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),v=d==="floating"?{x:s,y:i,width:r.floating.width,height:r.floating.height}:r.reference,y=await(o.getOffsetParent==null?void 0:o.getOffsetParent(a.floating)),x=await(o.isElement==null?void 0:o.isElement(y))?await(o.getScale==null?void 0:o.getScale(y))||{x:1,y:1}:{x:1,y:1},_=ne(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:v,offsetParent:y,strategy:l}):v);return{top:(b.top-_.top+p.top)/x.y,bottom:(_.bottom-b.bottom+p.bottom)/x.y,left:(b.left-_.left+p.left)/x.x,right:(_.right-b.right+p.right)/x.x}}const Zo=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,s;const{placement:i,middlewareData:o,rects:r,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:h,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:g=!0,...m}=le(e,t);if((n=o.arrow)!=null&&n.alignmentOffset)return{};const b=mt(i),v=rt(a),y=mt(a)===a,x=await(l.isRTL==null?void 0:l.isRTL(c.floating)),_=h||(y||!g?[ee(a)]:Ko(a)),E=p!=="none";!h&&E&&_.push(...qo(a,g,p,x));const S=[a,..._],z=await Te(t,m),T=[];let A=((s=o.flip)==null?void 0:s.overflows)||[];if(u&&T.push(z[b]),d){const P=Uo(i,r,x);T.push(z[P[0]],z[P[1]])}if(A=[...A,{placement:i,overflows:T}],!T.every(P=>P<=0)){var M,G;const P=(((M=o.flip)==null?void 0:M.index)||0)+1,I=S[P];if(I&&(!(d==="alignment"?v!==rt(I):!1)||A.every(L=>rt(L.placement)===v?L.overflows[0]>0:!0)))return{data:{index:P,overflows:A},reset:{placement:I}};let K=(G=A.filter(k=>k.overflows[0]<=0).sort((k,L)=>k.overflows[1]-L.overflows[1])[0])==null?void 0:G.placement;if(!K)switch(f){case"bestFit":{var j;const k=(j=A.filter(L=>{if(E){const D=rt(L.placement);return D===v||D==="y"}return!0}).map(L=>[L.placement,L.overflows.filter(D=>D>0).reduce((D,st)=>D+st,0)]).sort((L,D)=>L[1]-D[1])[0])==null?void 0:j[0];k&&(K=k);break}case"initialPlacement":K=a;break}if(i!==K)return{reset:{placement:K}}}return{}}}},tr=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:s,placement:i}=t,{mainAxis:o=!0,crossAxis:r=!1,limiter:a={fn:m=>{let{x:b,y:v}=m;return{x:b,y:v}}},...l}=le(e,t),c={x:n,y:s},u=await Te(t,l),d=rt(mt(i)),h=qn(d);let f=c[h],p=c[d];if(o){const m=h==="y"?"top":"left",b=h==="y"?"bottom":"right",v=f+u[m],y=f-u[b];f=gn(v,f,y)}if(r){const m=d==="y"?"top":"left",b=d==="y"?"bottom":"right",v=p+u[m],y=p-u[b];p=gn(v,p,y)}const g=a.fn({...t,[h]:f,[d]:p});return{...g,data:{x:g.x-n,y:g.y-s,enabled:{[h]:o,[d]:r}}}}}},er=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,s;const{placement:i,rects:o,platform:r,elements:a}=t,{apply:l=()=>{},...c}=le(e,t),u=await Te(t,c),d=mt(i),h=ce(i),f=rt(i)==="y",{width:p,height:g}=o.floating;let m,b;d==="top"||d==="bottom"?(m=d,b=h===(await(r.isRTL==null?void 0:r.isRTL(a.floating))?"start":"end")?"left":"right"):(b=d,m=h==="end"?"top":"bottom");const v=g-u.top-u.bottom,y=p-u.left-u.right,x=St(g-u[m],v),_=St(p-u[b],y),E=!t.middlewareData.shift;let S=x,z=_;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(z=y),(s=t.middlewareData.shift)!=null&&s.enabled.y&&(S=v),E&&!h){const A=H(u.left,0),M=H(u.right,0),G=H(u.top,0),j=H(u.bottom,0);f?z=p-2*(A!==0||M!==0?A+M:H(u.left,u.right)):S=g-2*(G!==0||j!==0?G+j:H(u.top,u.bottom))}await l({...t,availableWidth:z,availableHeight:S});const T=await r.getDimensions(a.floating);return p!==T.width||g!==T.height?{reset:{rects:!0}}:{}}}};function ue(){return typeof window<"u"}function $t(e){return Qn(e)?(e.nodeName||"").toLowerCase():"#document"}function U(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function nt(e){var t;return(t=(Qn(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Qn(e){return ue()?e instanceof Node||e instanceof U(e).Node:!1}function J(e){return ue()?e instanceof Element||e instanceof U(e).Element:!1}function tt(e){return ue()?e instanceof HTMLElement||e instanceof U(e).HTMLElement:!1}function yn(e){return!ue()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof U(e).ShadowRoot}const nr=new Set(["inline","contents"]);function Ft(e){const{overflow:t,overflowX:n,overflowY:s,display:i}=q(e);return/auto|scroll|overlay|hidden|clip/.test(t+s+n)&&!nr.has(i)}const sr=new Set(["table","td","th"]);function ir(e){return sr.has($t(e))}const or=[":popover-open",":modal"];function he(e){return or.some(t=>{try{return e.matches(t)}catch{return!1}})}const rr=["transform","translate","scale","rotate","perspective"],ar=["transform","translate","scale","rotate","perspective","filter"],lr=["paint","layout","strict","content"];function Ne(e){const t=Fe(),n=J(e)?q(e):e;return rr.some(s=>n[s]?n[s]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||ar.some(s=>(n.willChange||"").includes(s))||lr.some(s=>(n.contain||"").includes(s))}function cr(e){let t=lt(e);for(;tt(t)&&!Ct(t);){if(Ne(t))return t;if(he(t))return null;t=lt(t)}return null}function Fe(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const ur=new Set(["html","body","#document"]);function Ct(e){return ur.has($t(e))}function q(e){return U(e).getComputedStyle(e)}function de(e){return J(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function lt(e){if($t(e)==="html")return e;const t=e.assignedSlot||e.parentNode||yn(e)&&e.host||nt(e);return yn(t)?t.host:t}function Zn(e){const t=lt(e);return Ct(t)?e.ownerDocument?e.ownerDocument.body:e.body:tt(t)&&Ft(t)?t:Zn(t)}function Pt(e,t,n){var s;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=Zn(e),o=i===((s=e.ownerDocument)==null?void 0:s.body),r=U(i);if(o){const a=ke(r);return t.concat(r,r.visualViewport||[],Ft(i)?i:[],a&&n?Pt(a):[])}return t.concat(i,Pt(i,[],n))}function ke(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function ts(e){const t=q(e);let n=parseFloat(t.width)||0,s=parseFloat(t.height)||0;const i=tt(e),o=i?e.offsetWidth:n,r=i?e.offsetHeight:s,a=te(n)!==o||te(s)!==r;return a&&(n=o,s=r),{width:n,height:s,$:a}}function Me(e){return J(e)?e:e.contextElement}function _t(e){const t=Me(e);if(!tt(t))return Z(1);const n=t.getBoundingClientRect(),{width:s,height:i,$:o}=ts(t);let r=(o?te(n.width):n.width)/s,a=(o?te(n.height):n.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!a||!Number.isFinite(a))&&(a=1),{x:r,y:a}}const hr=Z(0);function es(e){const t=U(e);return!Fe()||!t.visualViewport?hr:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function dr(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==U(e)?!1:t}function bt(e,t,n,s){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=Me(e);let r=Z(1);t&&(s?J(s)&&(r=_t(s)):r=_t(e));const a=dr(o,n,s)?es(o):Z(0);let l=(i.left+a.x)/r.x,c=(i.top+a.y)/r.y,u=i.width/r.x,d=i.height/r.y;if(o){const h=U(o),f=s&&J(s)?U(s):s;let p=h,g=ke(p);for(;g&&s&&f!==p;){const m=_t(g),b=g.getBoundingClientRect(),v=q(g),y=b.left+(g.clientLeft+parseFloat(v.paddingLeft))*m.x,x=b.top+(g.clientTop+parseFloat(v.paddingTop))*m.y;l*=m.x,c*=m.y,u*=m.x,d*=m.y,l+=y,c+=x,p=U(g),g=ke(p)}}return ne({width:u,height:d,x:l,y:c})}function fe(e,t){const n=de(e).scrollLeft;return t?t.left+n:bt(nt(e)).left+n}function ns(e,t){const n=e.getBoundingClientRect(),s=n.left+t.scrollLeft-fe(e,n),i=n.top+t.scrollTop;return{x:s,y:i}}function fr(e){let{elements:t,rect:n,offsetParent:s,strategy:i}=e;const o=i==="fixed",r=nt(s),a=t?he(t.floating):!1;if(s===r||a&&o)return n;let l={scrollLeft:0,scrollTop:0},c=Z(1);const u=Z(0),d=tt(s);if((d||!d&&!o)&&(($t(s)!=="body"||Ft(r))&&(l=de(s)),tt(s))){const f=bt(s);c=_t(s),u.x=f.x+s.clientLeft,u.y=f.y+s.clientTop}const h=r&&!d&&!o?ns(r,l):Z(0);return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-l.scrollLeft*c.x+u.x+h.x,y:n.y*c.y-l.scrollTop*c.y+u.y+h.y}}function pr(e){return Array.from(e.getClientRects())}function gr(e){const t=nt(e),n=de(e),s=e.ownerDocument.body,i=H(t.scrollWidth,t.clientWidth,s.scrollWidth,s.clientWidth),o=H(t.scrollHeight,t.clientHeight,s.scrollHeight,s.clientHeight);let r=-n.scrollLeft+fe(e);const a=-n.scrollTop;return q(s).direction==="rtl"&&(r+=H(t.clientWidth,s.clientWidth)-i),{width:i,height:o,x:r,y:a}}const xn=25;function mr(e,t){const n=U(e),s=nt(e),i=n.visualViewport;let o=s.clientWidth,r=s.clientHeight,a=0,l=0;if(i){o=i.width,r=i.height;const u=Fe();(!u||u&&t==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}const c=fe(s);if(c<=0){const u=s.ownerDocument,d=u.body,h=getComputedStyle(d),f=u.compatMode==="CSS1Compat"&&parseFloat(h.marginLeft)+parseFloat(h.marginRight)||0,p=Math.abs(s.clientWidth-d.clientWidth-f);p<=xn&&(o-=p)}else c<=xn&&(o+=c);return{width:o,height:r,x:a,y:l}}const br=new Set(["absolute","fixed"]);function vr(e,t){const n=bt(e,!0,t==="fixed"),s=n.top+e.clientTop,i=n.left+e.clientLeft,o=tt(e)?_t(e):Z(1),r=e.clientWidth*o.x,a=e.clientHeight*o.y,l=i*o.x,c=s*o.y;return{width:r,height:a,x:l,y:c}}function wn(e,t,n){let s;if(t==="viewport")s=mr(e,n);else if(t==="document")s=gr(nt(e));else if(J(t))s=vr(t,n);else{const i=es(e);s={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return ne(s)}function ss(e,t){const n=lt(e);return n===t||!J(n)||Ct(n)?!1:q(n).position==="fixed"||ss(n,t)}function yr(e,t){const n=t.get(e);if(n)return n;let s=Pt(e,[],!1).filter(a=>J(a)&&$t(a)!=="body"),i=null;const o=q(e).position==="fixed";let r=o?lt(e):e;for(;J(r)&&!Ct(r);){const a=q(r),l=Ne(r);!l&&a.position==="fixed"&&(i=null),(o?!l&&!i:!l&&a.position==="static"&&!!i&&br.has(i.position)||Ft(r)&&!l&&ss(e,r))?s=s.filter(u=>u!==r):i=a,r=lt(r)}return t.set(e,s),s}function xr(e){let{element:t,boundary:n,rootBoundary:s,strategy:i}=e;const r=[...n==="clippingAncestors"?he(t)?[]:yr(t,this._c):[].concat(n),s],a=r[0],l=r.reduce((c,u)=>{const d=wn(t,u,i);return c.top=H(d.top,c.top),c.right=St(d.right,c.right),c.bottom=St(d.bottom,c.bottom),c.left=H(d.left,c.left),c},wn(t,a,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function wr(e){const{width:t,height:n}=ts(e);return{width:t,height:n}}function _r(e,t,n){const s=tt(t),i=nt(t),o=n==="fixed",r=bt(e,!0,o,t);let a={scrollLeft:0,scrollTop:0};const l=Z(0);function c(){l.x=fe(i)}if(s||!s&&!o)if(($t(t)!=="body"||Ft(i))&&(a=de(t)),s){const f=bt(t,!0,o,t);l.x=f.x+t.clientLeft,l.y=f.y+t.clientTop}else i&&c();o&&!s&&i&&c();const u=i&&!s&&!o?ns(i,a):Z(0),d=r.left+a.scrollLeft-l.x-u.x,h=r.top+a.scrollTop-l.y-u.y;return{x:d,y:h,width:r.width,height:r.height}}function xe(e){return q(e).position==="static"}function _n(e,t){if(!tt(e)||q(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return nt(e)===n&&(n=n.ownerDocument.body),n}function is(e,t){const n=U(e);if(he(e))return n;if(!tt(e)){let i=lt(e);for(;i&&!Ct(i);){if(J(i)&&!xe(i))return i;i=lt(i)}return n}let s=_n(e,t);for(;s&&ir(s)&&xe(s);)s=_n(s,t);return s&&Ct(s)&&xe(s)&&!Ne(s)?n:s||cr(e)||n}const Sr=async function(e){const t=this.getOffsetParent||is,n=this.getDimensions,s=await n(e.floating);return{reference:_r(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}};function Cr(e){return q(e).direction==="rtl"}const $r={convertOffsetParentRelativeRectToViewportRelativeRect:fr,getDocumentElement:nt,getClippingRect:xr,getOffsetParent:is,getElementRects:Sr,getClientRects:pr,getDimensions:wr,getScale:_t,isElement:J,isRTL:Cr};function os(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Er(e,t){let n=null,s;const i=nt(e);function o(){var a;clearTimeout(s),(a=n)==null||a.disconnect(),n=null}function r(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),o();const c=e.getBoundingClientRect(),{left:u,top:d,width:h,height:f}=c;if(a||t(),!h||!f)return;const p=Ht(d),g=Ht(i.clientWidth-(u+h)),m=Ht(i.clientHeight-(d+f)),b=Ht(u),y={rootMargin:-p+"px "+-g+"px "+-m+"px "+-b+"px",threshold:H(0,St(1,l))||1};let x=!0;function _(E){const S=E[0].intersectionRatio;if(S!==l){if(!x)return r();S?r(!1,S):s=setTimeout(()=>{r(!1,1e-7)},1e3)}S===1&&!os(c,e.getBoundingClientRect())&&r(),x=!1}try{n=new IntersectionObserver(_,{...y,root:i.ownerDocument})}catch{n=new IntersectionObserver(_,y)}n.observe(e)}return r(!0),o}function Lr(e,t,n,s){s===void 0&&(s={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=s,c=Me(e),u=i||o?[...c?Pt(c):[],...Pt(t)]:[];u.forEach(b=>{i&&b.addEventListener("scroll",n,{passive:!0}),o&&b.addEventListener("resize",n)});const d=c&&a?Er(c,n):null;let h=-1,f=null;r&&(f=new ResizeObserver(b=>{let[v]=b;v&&v.target===c&&f&&(f.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var y;(y=f)==null||y.observe(t)})),n()}),c&&!l&&f.observe(c),f.observe(t));let p,g=l?bt(e):null;l&&m();function m(){const b=bt(e);g&&!os(g,b)&&n(),g=b,p=requestAnimationFrame(m)}return n(),()=>{var b;u.forEach(v=>{i&&v.removeEventListener("scroll",n),o&&v.removeEventListener("resize",n)}),d?.(),(b=f)==null||b.disconnect(),f=null,l&&cancelAnimationFrame(p)}}const kr=tr,Or=Zo,Rr=er,zr=(e,t,n)=>{const s=new Map,i={platform:$r,...n},o={...i.platform,_c:s};return Qo(e,t,{...i,platform:o})},rs=[Or({fallbackAxisSideDirection:"start",crossAxis:!1}),kr()],Ar=({placement:e="bottom-start",strategy:t,middleware:n=rs}={})=>{const[s,i]=W(),[o,r]=W(),[a,l]=W();return R(()=>{if(!s||!(o instanceof HTMLElement)){l(void 0);return}return Lr(s,o,()=>zr(s,o,{placement:e,strategy:t,middleware:n}).then(l))},[s,o,e,t,n]),{setReference:i,setFloating:r,styles:N(()=>a?{left:`${a.x}px`,top:`${a.y}px`}:{},[a?.x,a?.y])}},Pr=(e=HTMLElement)=>class extends e{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},Tr=(e,t)=>{if(!e||!t)return;const n=Object.keys(t);return Object.fromEntries(Object.keys(e).flatMap(s=>n.includes(s)?[]:[[s,void 0]]))};class Nr extends Tt{_props;render(t){return Y}update(t,[n]){return this._props!==n&&Object.assign(t.element,Tr(this._props,n),this._props=n),Y}}const Fr=vt(Nr),Mr=e=>{const t=ht(),n=N(()=>new CSSStyleSheet,[]);R(()=>{t.shadowRoot.adoptedStyleSheets=[...t.shadowRoot.adoptedStyleSheets,n]},[]),R(()=>{n.replaceSync(e)},[e])};const as="important",Ir=" !"+as,Dr=vt(class extends Tt{constructor(e){if(super(e),e.type!==X.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{const s=e[n];return s==null?t:t+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(e,[t]){const{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const s of this.ft)t[s]==null&&(this.ft.delete(s),s.includes("-")?n.removeProperty(s):n[s]=null);for(const s in t){const i=t[s];if(i!=null){this.ft.add(s);const o=typeof i=="string"&&i.endsWith(Ir);s.includes("-")||o?n.setProperty(s,o?i.slice(0,-11):i,o?as:""):n[s]=i}}return Y}}),Vr="data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 1L5.20039 7.04766L1.66348 3.46152' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",jr=gt`
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
		background: url("${Vr}") #5881f6 no-repeat 50%;
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
`,Br=({index:e,itemHeight:t,auto:n})=>gt`
	${F(!n,()=>gt`
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
`,Hr=e=>{const t=e==="auto",[n,s]=W(t?40:e);return[n,i=>t?s(i):void 0]},Mt=e=>{const t=N(()=>({}),[]);return N(()=>Object.assign(t,e),[t,...Object.values(e)])},Ur=e=>{const t=Mt(e);R(()=>{const n=s=>{if(!(s.ctrlKey&&s.altKey||s.defaultPrevented))switch(s.key){case"Up":case"ArrowUp":s.preventDefault(),t.onUp();break;case"Down":case"ArrowDown":s.preventDefault(),t.onDown();break;case"Enter":s.preventDefault(),t.onEnter();break}};return document.addEventListener("keydown",n,!0),()=>document.removeEventListener("keydown",n,!0)},[t])},Kr=({items:e,onSelect:t,defaultIndex:n=0})=>{const[s,i]=W({index:n}),{index:o}=s,{length:r}=e;return R(()=>{i({index:s.index<0?n:Math.min(s.index,e.length-1),scroll:!0})},[e,n]),Ur({onUp:$(()=>i(a=>({index:a.index>0?a.index-1:r-1,scroll:!0})),[r]),onDown:$(()=>i(a=>({index:a.index<r-1?a.index+1:0,scroll:!0})),[r]),onEnter:$(()=>o>-1&&o<r&&t?.(e[o],o),[o,e,t])}),{position:s,highlight:$(a=>i({index:a}),[]),select:$(a=>t?.(a),[t])}},Wr=(e,t)=>t?n=>at(e).find(s=>s[t]===n[t]):n=>at(e).includes(n),Yr=(e,t)=>{if(!t||!e)return e;const n=e.toLowerCase().indexOf(t.toLowerCase());if(n<0)return e;const s=n+t.length;return[e.slice(0,n),C`<mark>${e.slice(n,s)}</mark>`,e.slice(s)]},Jr=(e=Jt)=>(t,n,{highlight:s,select:i,textual:o=Jt,query:r,isSelected:a})=>{const l=o(t),c=Yr(l,r),u=e(c,t,n);return C`<div
				class="item"
				role="option"
				part="option"
				?aria-selected=${a(t)}
				data-index=${n}
				@mouseenter=${()=>s(n)}
				@click=${()=>i(t)}
				@mousedown=${d=>d.preventDefault()}
				title=${l}
			>
				${u}
			</div>
			<div class="sizer" virtualizer-sizer>${u}</div>`},qr=({itemRenderer:e=Jr(),...t})=>{const n=Mt(t);return $((s,i)=>e(s,i,n),[n,e])},Gr=["query","items","onSelect","textual","anchor","itemHeight","itemLimit","itemRenderer","defaultIndex","value","valueProperty","loading"],Xr=({value:e,valueProperty:t,items:n,onSelect:s,defaultIndex:i,query:o,textual:r,itemRenderer:a,itemHeight:l=40,itemLimit:c=5})=>{const u=N(()=>Wr(e,t),[e,t]),d=N(()=>n.slice(),[n,u]),{position:h,highlight:f,select:p}=Kr({items:d,onSelect:s,defaultIndex:isNaN(i)?void 0:Number(i)}),[g,m]=Hr(l);return{position:h,items:d,height:Math.min(c,d.length)*g,highlight:f,select:p,itemHeight:g,setItemHeight:m,renderItem:qr({itemRenderer:a,items:d,position:h,highlight:f,select:p,textual:r,query:o,isSelected:u})}},Sn=ai,Qr=e=>{const t=wt(void 0),{position:n,items:s,renderItem:i,height:o,itemHeight:r,setItemHeight:a}=Xr(e);return R(()=>{const l=t.current?.[$e];l&&l.layoutComplete.then(()=>{e.dispatchEvent(new CustomEvent("layout-complete"));const{averageChildSize:c,averageMarginSize:u}=l._layout._metricsCache;return a(c+u*2)},Sn)},[s]),R(()=>{if(!n.scroll)return;const l=t.current?.[$e];if(l){if(!l?._layout){l.layoutComplete.then(()=>l.element(n.index)?.scrollIntoView({block:"nearest"}),Sn);return}l.element(n.index)?.scrollIntoView({block:"nearest"})}},[n]),Mr(Br({...n,itemHeight:r,auto:e.itemHeight==="auto"})),C`<div
			class="items"
			style="min-height: ${o}px"
			${Nt(l=>t.current=l)}
		>
			<div virtualizer-sizer></div>
			${Co({items:s,renderItem:i,scroller:!0})}
		</div>
		<slot></slot>`};customElements.define("cosmoz-listbox",Pr(et(Qr,{styleSheets:[Ae(jr)]})));const Zr=({multi:e,setFloating:t,styles:n,...s},i)=>C`<cosmoz-listbox
		style="${Dr(n)}"
		@connected="${o=>o.target.showPopover?.()}"
		popover="manual"
		part="listbox"
		?multi=${e}
		${Nt(t)}
		...=${Fr(Fi(Gr)(s))}
		>${i}</cosmoz-listbox
	>`,ta=ot`
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
`,ea=C`
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
`,na=({onClear:e,disabled:t})=>C`
	<div class="content" part="content chip-text"><slot></slot></div>
	${F(e&&!t,()=>C`<span
				class="clear"
				part="clear chip-clear"
				@mousedown=${n=>n.preventDefault()}
				@click=${e}
			>
				${ea}
			</span>`)}
`;customElements.define("cosmoz-autocomplete-chip",et(na,{observedAttributes:["disabled"],styleSheets:[Ae(ta)]}));const sa=({content:e,onClear:t,disabled:n,hidden:s,className:i="chip",slot:o})=>C`<cosmoz-autocomplete-chip
		class=${O(i)}
		slot=${O(o)}
		part="chip"
		exportparts="chip-text, chip-clear"
		?disabled=${n}
		?hidden=${s}
		.onClear=${t}
		title=${O(typeof e=="string"?e:void 0)}
		>${e}</cosmoz-autocomplete-chip
	>`,ia=({value:e,min:t=0,onDeselect:n,textual:s,disabled:i,chipRenderer:o=sa})=>[...e.filter(Boolean).map(r=>o({item:r,content:s(r),onClear:e.length>t&&(()=>n(r)),disabled:i,slot:"control"})),o({item:null,content:C`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],oa=gt`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",et(()=>it,{styleSheets:[oa]}));const ra=ot`
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
`,Cn=e=>e.matches(":focus-within"),aa=({disabled:e,onFocus:t})=>{const[n,s]=W(),{focused:i,closed:o}=n||{},r=i&&!e,a=Mt({closed:o,onFocus:t}),l=$(u=>s(d=>({...d,closed:u})),[]),c=$(u=>{const d=u.currentTarget;return Cn(d)?s(h=>({focused:!0,closed:!h?.closed})):d.focus()},[]);return R(()=>{if(!r)return;const u=d=>{if(d.defaultPrevented)return;const{closed:h}=a;d.key==="Escape"&&!h?(d.preventDefault(),l(!0)):["ArrowUp","Up"].includes(d.key)&&h&&(d.preventDefault(),l(!1))};return document.addEventListener("keydown",u,!0),()=>document.removeEventListener("keydown",u,!0)},[r]),{focused:r,active:r&&!o,setClosed:l,onToggle:c,onFocus:$(u=>{const d=Cn(u.currentTarget);s({focused:d}),a.onFocus?.(d)},[a])}},Ie=(e,t=()=>({}))=>{const n={type:e,toString(){return e}};return Object.assign((...i)=>Object.assign(t(...i),n),n)},$n=e=>e.type||e.toString(),En=e=>Array.isArray(e)?e:[e],la=(e,t)=>{const n=En(t),s=(n.every(Array.isArray)?n:[n]).map(([i,o])=>({actions:En(i).map($n),handle:o}));return(i=e,o)=>{const r=s.find(a=>a.actions.includes($n(o)));return r?r.handle(i,o):i}},pt={pending:"pending",rejected:"rejected",resolved:"resolved"},ls={error:void 0,result:void 0,state:pt.pending},cs=Ie(pt.pending),us=Ie(pt.resolved,e=>({result:e})),hs=Ie(pt.rejected,e=>({error:e})),ca=la(ls,[[cs,()=>({error:void 0,result:void 0,state:pt.pending})],[us,(e,{result:t})=>({error:void 0,result:t,state:pt.resolved})],[hs,(e,{error:t})=>({error:t,result:void 0,state:pt.rejected})]]),ua=e=>{const[{error:t,result:n,state:s},i]=Is(ca,ls);return R(()=>{if(!e)return;let o=!1;return i(cs()),e.then(r=>!o&&i(us(r)),r=>!o&&i(hs(r))),()=>{o=!0}},[e]),[n,t,s]},ha=({focused:e,empty:t,...n})=>{const s=e&&t&&n.limit!==1,i=Mt(n);R(()=>{if(!s)return;const o=r=>{if(r.defaultPrevented)return;const{key:a}=r,l=at(i.value),c=i.limit==1;if(l.length>0&&(a==="Backspace"||c&&a.length===1))return i.onChange(l.slice(0,-1))};return document.addEventListener("keydown",o,!0),()=>document.removeEventListener("keydown",o,!0)},[s,i])},Ln=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),da=(e,t,n)=>{if(!t)return e;const s=Ln(t.toLowerCase()),i=[];for(const o of e){const a=Ln(n(o).toLowerCase()).indexOf(s);a<0||i.push({item:o,index:a})}return i.sort((o,r)=>o.index-r.index).map(({item:o})=>o)},fa=e=>e===!1||e==null?[]:e,ds=(e,t,n)=>e.dispatchEvent(new CustomEvent(t,{detail:n})),pa=(e,t,n)=>$(s=>{t?.(s),ds(e,n,s)},[t]),ga=[],ma=e=>(...t)=>{let n;const s=()=>{n&&cancelAnimationFrame(n)};return s(),n=requestAnimationFrame(()=>{n=void 0,e(...t)}),s},ba=({value:e,text:t,onChange:n,onText:s,onSelect:i,limit:o,min:r,source:a,textProperty:l,textual:c,valueProperty:u,keepOpened:d,keepQuery:h,preserveOrder:f,defaultIndex:p,externalSearch:g,...m})=>{const b=N(()=>(c??Ni)(l),[c,l]),{active:v,focused:y,onFocus:x,setClosed:_}=aa(m),E=!t,S=N(()=>t?.trim(),[t]),z=ht(),T=pa(z,s,"text"),A=$(k=>{n?.(k,()=>_(!0)),ds(z,"value",k)},[n]),[M,G]=W([]),j=N(()=>Promise.resolve(typeof a=="function"?a({query:S,active:v}):a).then(fa),[a,v,S]),P=N(()=>at(e),[e]);R(()=>j.then(G),[j]),ha({focused:y,empty:E,limit:o,value:P,onChange:A,onText:T}),R(()=>{!y&&!h&&T("")},[y,h]);const I=Mt({onText:T,onChange:A,value:P,limit:o,min:r,keepQuery:h,keepOpened:d,setClosed:_,onSelect:i}),[,,K]=ua(j);return{active:v,query:S,textual:b,value:P,source$:j,loading:K==="pending",items:N(()=>{if(!v)return ga;const k=f?M:[...P,...ve(P,In(u))(M)];return g?k:da(k,S,b)},[M,v,S,b,E,P,f,u,g]),onClick:$(()=>_(!1),[]),onFocus:x,onText:$(k=>{T(k.target.value),_(!1)},[T,t,_]),onSelect:$(k=>{I.onSelect?.(k,I);const{onChange:L,onText:D,limit:st,min:It,value:ms,keepQuery:bs,keepOpened:vs,setClosed:ys}=I;bs||D(""),vs||ys(!0);const Dt=at(ms),De=Dt.includes(k);De&&Dt.length===It||L((De?ve(k)(Dt):[...Dt,k]).slice(-st))},[I]),onDeselect:$(k=>I.onChange(ve(k)(I.value)),[I]),defaultIndex:S!==void 0&&S?.length>0?0:p}},va=e=>{const t=e.shadowRoot.querySelectorAll(".chip"),n=e.shadowRoot.querySelector(".badge");n.hidden=!0;for(const a of t)a.hidden=!1;const i=e.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let o;for(o=0;o<t.length;o++){const l=t[o].getBoundingClientRect();if(!(l.x+l.width<=i.x+i.width-24))break}const r=t.length-o;for(n.querySelector("span").textContent="+"+r.toString(),n.hidden=r<1;o<t.length;o++)t[o].hidden=!0},ya=({value:e,active:t,wrap:n,limit:s})=>{const i=ht(),o=!(n||s==1),r=N(()=>ma(()=>va(i)),[]),[a,l]=W(0);_e(()=>{if(!o)return;const c=i.shadowRoot.querySelector("cosmoz-input"),u=new ResizeObserver(d=>{l(d[0].contentRect.width)});return u.observe(c),()=>u.disconnect()},[o]),_e(()=>o?r():void 0,[o,a,t,e])},xa=["input","control","label","line","error","wrap"].map(e=>`${e}: input-${e}`).join(),wa=[Rr({apply({rects:e,elements:t}){Object.assign(t.floating.style,{minWidth:`${Math.max(e.reference.width,e.floating.width)}px`})}}),...rs],_a=({active:e,isSingle:t,showSingle:n})=>e?!(t&&!n):!1,Sa=e=>{const{active:t,invalid:n,errorMessage:s,label:i,placeholder:o,disabled:r,noLabelFloat:a,alwaysFloatLabel:l,textual:c,text:u,onText:d,onFocus:h,onClick:f,onDeselect:p,value:g,limit:m,min:b,showSingle:v,items:y,source$:x,placement:_,loading:E,chipRenderer:S}=e,z=ht(),T=m==1,A=T&&g?.[0]!=null,{styles:M,setReference:G,setFloating:j}=Ar({placement:_,middleware:wa});R(()=>(z.addEventListener("focusin",h),z.addEventListener("focusout",h),()=>{z.removeEventListener("focusin",h),z.removeEventListener("focusout",h)}),[h]),Dn({focus:()=>z.shadowRoot?.querySelector("#input")?.focus()},[]);const P=E||y.length>0||u!=null&&u.length>0;return C`<cosmoz-input
				id="input"
				part="input"
				${Nt(G)}
				.label=${i}
				.placeholder=${A?void 0:o}
				?no-label-float=${a}
				?always-float-label=${g?.length>0||l}
				?readonly=${A}
				?disabled=${r}
				?invalid=${Zt(x.then(()=>n,()=>!0),n)}
				.errorMessage=${Zt(x.then(()=>s,I=>I.message),s)}
				.value=${ie(u)}
				@value-changed=${d}
				@click=${f}
				autocomplete="off"
				exportparts=${xa}
				?data-one=${T}
				?data-single=${A}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${ia({value:g,min:b,onDeselect:p,textual:c,disabled:r,chipRenderer:S})}
			</cosmoz-input>

			${F(_a({active:t,isSingle:A,showSingle:v}),()=>Zr({...e,items:y,multi:!T,setFloating:j,styles:{...M,display:P?void 0:"none"}},F(E,()=>C`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>F(u!=null&&u.length>0&&y.length===0,()=>C`<slot name="no-result"></slot>`))))}`},fs=e=>{const t={...e,...ba(e)};return ya(t),Sa(t)},ps=["disabled","invalid","no-label-float","always-float-label","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap"],Ca=e=>{const{onChange:t,onText:n,...s}=e,[i,o]=Vs("value");return R(()=>{e.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),fs({...s,value:i,onChange:$((r,...a)=>{o(r),t?.(r,...a)},[t]),onText:$(r=>{e.text=r,n?.(r)},[n])})},gs=[Ae(ra)];customElements.define("cosmoz-autocomplete-ui",et(fs,{observedAttributes:ps,styleSheets:gs}));customElements.define("cosmoz-autocomplete",et(Ca,{observedAttributes:ps,styleSheets:gs}));ot`
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
</svg>`;export{Un as a,W as b,et as c,N as d,vt as e,Do as f,fo as g,F as h,Tt as i,kt as j,R as k,ie as l,pn as m,Ra as n,O as o,$ as p,B as q,co as r,Io as s,Kt as t,wt as u,uo as v,Mn as w};
