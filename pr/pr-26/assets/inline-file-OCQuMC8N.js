import{r as Xt,D as es,A as G,w as le,b,E as B,n as js,M as Ds,u as oe,v as be,h as Ze,p as ts}from"./iframe-BDuZ46Q0.js";import{_ as Bs}from"./preload-helper-PPVm8Dsz.js";let Me,ss=0;function bt(s){Me=s}function vt(){Me=null,ss=0}function Us(){return ss++}const Qe=Symbol("haunted.phase"),Pe=Symbol("haunted.hook"),yt=Symbol("haunted.update"),xt=Symbol("haunted.commit"),ie=Symbol("haunted.effects"),xe=Symbol("haunted.layoutEffects"),nt="haunted.context";class Hs{update;host;virtual;[Pe];[ie];[xe];constructor(e,t){this.update=e,this.host=t,this[Pe]=new Map,this[ie]=[],this[xe]=[]}run(e){bt(this);let t=e();return vt(),t}_runEffects(e){let t=this[e];bt(this);for(let n of t)n.call(this);vt()}runEffects(){this._runEffects(ie)}runLayoutEffects(){this._runEffects(xe)}teardown(){this[Pe].forEach(t=>{typeof t.teardown=="function"&&t.teardown(!0)})}}const Ks=Promise.resolve().then.bind(Promise.resolve());function ns(){let s=[],e;function t(){e=null;let n=s;s=[];for(var o=0,i=n.length;o<i;o++)n[o]()}return function(n){s.push(n),e==null&&(e=Ks(t))}}const qs=ns(),wt=ns();class Ys{renderer;host;state;[Qe];_updateQueued;_active;constructor(e,t){this.renderer=e,this.host=t,this.state=new Hs(this.update.bind(this),t),this[Qe]=null,this._updateQueued=!1,this._active=!0}update(){this._active&&(this._updateQueued||(qs(()=>{let e=this.handlePhase(yt);wt(()=>{this.handlePhase(xt,e),wt(()=>{this.handlePhase(ie)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,t){switch(this[Qe]=e,e){case xt:this.commit(t),this.runEffects(xe);return;case yt:return this.render();case ie:return this.runEffects(ie)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const Ce=(...s)=>{const e=new CSSStyleSheet;return e.replaceSync(s.join("")),e},Ws=s=>s?.map(e=>typeof e=="string"?Ce(e):e),Js=(s,...e)=>s.flatMap((t,n)=>[t,e[n]||""]).join(""),N=Js,Gs=(s="")=>s.replace(/-+([a-z])?/g,(e,t)=>t?t.toUpperCase():"");function Zs(s){class e extends Ys{frag;renderResult;constructor(o,i,r){super(o,r||i),this.frag=i}commit(o){this.renderResult=s(o,this.frag)}}function t(n,o,i){const r=(i||o||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:l=!0,shadowRootInit:c={},styleSheets:u}=i||o||{},h=Ws(n.styleSheets||u);class d extends r{_scheduler;static get observedAttributes(){return n.observedAttributes||a||[]}constructor(){if(super(),l===!1)this._scheduler=new e(n,this);else{const m=this.attachShadow({mode:"open",...c});h&&(m.adoptedStyleSheets=h),this._scheduler=new e(n,m,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(m,v,z){if(v===z)return;let E=z===""?!0:z;Reflect.set(this,Gs(m),E)}}function p(f){let m=f,v=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return m},set(z){v&&m===z||(v=!0,m=z,this._scheduler&&this._scheduler.update())}})}const g=new Proxy(r.prototype,{getPrototypeOf(f){return f},set(f,m,v,z){let E;return m in f?(E=Object.getOwnPropertyDescriptor(f,m),E&&E.set?(E.set.call(z,v),!0):(Reflect.set(f,m,v,z),!0)):(typeof m=="symbol"||m[0]==="_"?E={enumerable:!0,configurable:!0,writable:!0,value:v}:E=p(v),Object.defineProperty(z,m,E),E.set&&E.set.call(z,v),!0)}});return Object.setPrototypeOf(d.prototype,g),d}return t}class te{id;state;constructor(e,t){this.id=e,this.state=t}}function Qs(s,...e){let t=Us(),n=Me[Pe],o=n.get(t);return o||(o=new s(t,Me,...e),n.set(t,o)),o.update(...e)}function se(s){return Qs.bind(null,s)}function os(s){return se(class extends te{callback;lastValues;values;_teardown;constructor(e,t,n,o){super(e,t),s(t,this)}update(e,t){this.callback=e,this.values=t}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,t)=>this.lastValues[t]!==e)}})}function is(s,e){s[ie].push(e)}const k=os(is),Xs=s=>s instanceof Element?s:s.startNode||s.endNode||s.parentNode,rs=se(class extends te{Context;value;_ranEffect;_unsubscribe;constructor(s,e,t){super(s,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,is(e,this)}update(s){return this.Context!==s&&(this._subscribe(s),this.Context=s),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(s){this.value=s,this.state.update()}_subscribe(s){const e={Context:s,callback:this._updater};Xs(this.state.host).dispatchEvent(new CustomEvent(nt,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:n=null,value:o}=e;this.value=n?o:s.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}});function en(s){return e=>{const t={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(nt,this)}disconnectedCallback(){this.removeEventListener(nt,this)}handleEvent(n){const{detail:o}=n;o.Context===t&&(o.value=this.value,o.unsubscribe=this.unsubscribe.bind(this,o.callback),this.listeners.add(o.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let o of this.listeners)o(n)}get value(){return this._value}},Consumer:s(function({render:n}){const o=rs(t);return n(o)},{useShadowDOM:!1}),defaultValue:e};return t}}const T=se(class extends te{value;values;constructor(s,e,t,n){super(s,e),this.value=t(),this.values=n}update(s,e){return this.hasChanged(e)&&(this.values=e,this.value=s()),this.value}hasChanged(s=[]){return s.some((e,t)=>this.values[t]!==e)}}),_=(s,e)=>T(()=>s,e);function tn(s,e){s[xe].push(e)}const ot=os(tn),X=se(class extends te{args;constructor(s,e,t){super(s,e),this.updater=this.updater.bind(this),typeof t=="function"&&(t=t()),this.makeArgs(t)}update(){return this.args}updater(s){const[e]=this.args;typeof s=="function"&&(s=s(e)),!Object.is(e,s)&&(this.makeArgs(s),this.state.update())}makeArgs(s){this.args=Object.freeze([s,this.updater])}}),sn=se(class extends te{reducer;currentState;constructor(s,e,t,n,o){super(s,e),this.dispatch=this.dispatch.bind(this),this.currentState=o!==void 0?o(n):n}update(s){return this.reducer=s,[this.currentState,this.dispatch]}dispatch(s){this.currentState=this.reducer(this.currentState,s),this.state.update()}}),nn=/([A-Z])/gu,ke=se(class extends te{property;eventName;constructor(s,e,t,n){if(super(s,e),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=t,this.eventName=t.replace(nn,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof n=="function"&&(n=n()),n!=null&&this.updateProp(n))}update(s,e){return[this.state.host[this.property],this.updater]}updater(s){const e=this.state.host[this.property];typeof s=="function"&&(s=s(e)),!Object.is(e,s)&&this.updateProp(s)}updateProp(s){this.notify(s).defaultPrevented||(this.state.host[this.property]=s)}notify(s){const e=new CustomEvent(this.eventName,{detail:{value:s,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(e),e}});function U(s){return T(()=>({current:s}),[])}function on({render:s}){const e=Zs(s),t=en(e);return{component:e,createContext:t}}const Z={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},ce=s=>(...e)=>({_$litDirective$:s,values:e});let Ee=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};const we=(s,e)=>{const t=s._$AN;if(t===void 0)return!1;for(const n of t)n._$AO?.(e,!1),we(n,e);return!0},Fe=s=>{let e,t;do{if((e=s._$AM)===void 0)break;t=e._$AN,t.delete(s),s=e}while(t?.size===0)},as=s=>{for(let e;e=s._$AM;s=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(s))break;t.add(s),ln(e)}};function rn(s){this._$AN!==void 0?(Fe(this),this._$AM=s,as(this)):this._$AM=s}function an(s,e=!1,t=0){const n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(n))for(let i=t;i<n.length;i++)we(n[i],!1),Fe(n[i]);else n!=null&&(we(n,!1),Fe(n));else we(this,s)}const ln=s=>{s.type==Z.CHILD&&(s._$AP??=an,s._$AQ??=rn)};class ct extends Ee{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),as(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(we(this,e),Fe(this))}setValue(e){if(Xt(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const{component:I,createContext:cn}=on({render:es}),un=N`
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
`,dn=()=>G,hn=I(dn,{styleSheets:[un]});customElements.define("cosmoz-spinner",hn);const x=s=>s??G;function C(s,e,t){return s?e(s):t?.(s)}const pn=({slot:s,title:e,className:t,width:n="24",height:o="24",styles:i}={})=>b`
	<svg
		slot=${x(s)}
		class=${`clear-icon ${t??""}`}
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
		width=${n}
		height=${o}
		style=${x(i)}
	>
		${C(e,()=>le`<title>${e}</title>`)}
		<path
			d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
		/>
	</svg>
`,ne=se(class extends te{update(){return this.state.host}}),ue=(s,...e)=>s.flatMap((t,n)=>[t,e[n]??""]).join(""),ls=(...s)=>{const e=new CSSStyleSheet;return e.replaceSync(s.join("")),e},fn=ue`
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
`,gn=()=>{const s=ne(),e=_(()=>{s.dispatchEvent(new Event("close")),s.onClose?.()},[]);return k(()=>{const t=r=>{r.preventDefault(),e()},n=s.shadowRoot,o=r=>r.target.value==="cancel"&&t(r),i=r=>!r.defaultPrevented&&r.key==="Escape"&&t(r);return n.addEventListener("click",o),document.addEventListener("keydown",i,!0),()=>{n.removeEventListener("click",o),document.removeEventListener("keydown",i,!0)}},[]),{close:e}},mn=()=>{const s=ne(),{manualFocus:e}=s;ot(()=>{!e&&!s.matches(":focus-within")&&(s.setAttribute("tabindex","-1"),s.focus(),s.removeAttribute("tabindex"))},[e])},bn=(s,e,t)=>{const n=s.width/3,o=s.height/3,i=Math.min(window.innerWidth-2*n,Math.max(-n,e)),r=Math.min(window.innerHeight-2*o,Math.max(-o,t));return{x:i,y:r}},vn=(s,e,t,n)=>o=>{if(!o.target.closest(e))return;const i=bn,r=s.getBoundingClientRect(),a=o.clientX-r.x,l=o.clientY-r.y,c=(d,p)=>{const g=d-a,f=p-l,m=i(r,g,f);Object.assign(s.style,{left:m.x+"px",top:m.y+"px",transform:"initial"})},u=d=>c(d.clientX,d.clientY),h=d=>{document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",h)};document.addEventListener("mousemove",u),document.addEventListener("mouseup",h)},yn=()=>{const s=ne(),{unmovable:e}=s;k(()=>{if(e)return;const t=s.shadowRoot;if(!t)return;const n=vn(s,".title");return t.addEventListener("mousedown",n),()=>t.removeEventListener("mousedown",n)},[e])},xn=()=>{gn(),yn(),mn()},wn=({title:s,content:e,styles:t,closeable:n=!1})=>{const o=ne();return b`
		<style>
			${fn}${t}
		</style>
		<div class="title" part="title">
			${s}
			${C(n,()=>b`
					<button
						class="close"
						@click=${()=>{o.dispatchEvent(new Event("close")),o.onClose?.()}}
					>
						${pn()}
					</button>
				`)}
		</div>
		<div class="content" part="content">${e}</div>
	`},ut=(s,{observedAttributes:e,styles:t,...n}={})=>I(o=>(xn(),wn({title:o.heading||o.title,content:s(o),styles:t,closeable:o.closeable})),{observedAttributes:["title","heading","manual-focus","unmovable","closeable",...e??[]],...n});customElements.define("cosmoz-dialog-loading",ut(()=>b`
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
		`));function zn(s){return()=>s}const $n=zn(),ge=$n,Ve=s=>s,F=(s,...e)=>typeof s=="function"?s(...e):s,y=s=>typeof s=="string",ve=()=>{let s,e;const t=new Promise((n,o)=>{s=n,e=o});return t.resolve=s,t.reject=e,t},zt=s=>s==null?"":""+s,_n=(s,e,t)=>{s.forEach(n=>{e[n]&&(t[n]=e[n])})},Sn=/###/g,$t=s=>s&&s.indexOf("###")>-1?s.replace(Sn,"."):s,_t=s=>!s||y(s),ze=(s,e,t)=>{const n=y(e)?e.split("."):e;let o=0;for(;o<n.length-1;){if(_t(s))return{};const i=$t(n[o]);!s[i]&&t&&(s[i]=new t),Object.prototype.hasOwnProperty.call(s,i)?s=s[i]:s={},++o}return _t(s)?{}:{obj:s,k:$t(n[o])}},St=(s,e,t)=>{const{obj:n,k:o}=ze(s,e,Object);if(n!==void 0||e.length===1){n[o]=t;return}let i=e[e.length-1],r=e.slice(0,e.length-1),a=ze(s,r,Object);for(;a.obj===void 0&&r.length;)i=`${r[r.length-1]}.${i}`,r=r.slice(0,r.length-1),a=ze(s,r,Object),a&&a.obj&&typeof a.obj[`${a.k}.${i}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${i}`]=t},Cn=(s,e,t,n)=>{const{obj:o,k:i}=ze(s,e,Object);o[i]=o[i]||[],o[i].push(t)},je=(s,e)=>{const{obj:t,k:n}=ze(s,e);if(t)return t[n]},kn=(s,e,t)=>{const n=je(s,t);return n!==void 0?n:je(e,t)},cs=(s,e,t)=>{for(const n in e)n!=="__proto__"&&n!=="constructor"&&(n in s?y(s[n])||s[n]instanceof String||y(e[n])||e[n]instanceof String?t&&(s[n]=e[n]):cs(s[n],e[n],t):s[n]=e[n]);return s},pe=s=>s.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var En={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const Ln=s=>y(s)?s.replace(/[&<>"'\/]/g,e=>En[e]):s;class On{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(t!==void 0)return t;const n=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,n),this.regExpQueue.push(e),n}}const Rn=[" ",",","?","!",";"],An=new On(20),Tn=(s,e,t)=>{e=e||"",t=t||"";const n=Rn.filter(r=>e.indexOf(r)<0&&t.indexOf(r)<0);if(n.length===0)return!0;const o=An.getRegExp(`(${n.map(r=>r==="?"?"\\?":r).join("|")})`);let i=!o.test(s);if(!i){const r=s.indexOf(t);r>0&&!o.test(s.substring(0,r))&&(i=!0)}return i},it=function(s,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!s)return;if(s[e])return s[e];const n=e.split(t);let o=s;for(let i=0;i<n.length;){if(!o||typeof o!="object")return;let r,a="";for(let l=i;l<n.length;++l)if(l!==i&&(a+=t),a+=n[l],r=o[a],r!==void 0){if(["string","number","boolean"].indexOf(typeof r)>-1&&l<n.length-1)continue;i+=l-i+1;break}o=r}return o},De=s=>s&&s.replace("_","-"),Pn={type:"logger",log(s){this.output("log",s)},warn(s){this.output("warn",s)},error(s){this.output("error",s)},output(s,e){console&&console[s]&&console[s].apply(console,e)}};class Be{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,t)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||Pn,this.options=t,this.debug=t.debug}log(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"log","",!0)}warn(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","",!0)}error(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"error","")}deprecate(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,n,o){return o&&!this.debug?null:(y(e[0])&&(e[0]=`${n}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new Be(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new Be(this.logger,e)}}var J=new Be;class He{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(n=>{this.observers[n]||(this.observers[n]=new Map);const o=this.observers[n].get(t)||0;this.observers[n].set(t,o+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}emit(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(r=>{let[a,l]=r;for(let c=0;c<l;c++)a(...n)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(r=>{let[a,l]=r;for(let c=0;c<l;c++)a.apply(a,[e,...n])})}}class Ct extends He{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,n){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const i=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,r=o.ignoreJSONStructure!==void 0?o.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;e.indexOf(".")>-1?a=e.split("."):(a=[e,t],n&&(Array.isArray(n)?a.push(...n):y(n)&&i?a.push(...n.split(i)):a.push(n)));const l=je(this.data,a);return!l&&!t&&!n&&e.indexOf(".")>-1&&(e=a[0],t=a[1],n=a.slice(2).join(".")),l||!r||!y(n)?l:it(this.data&&this.data[e]&&this.data[e][t],n,i)}addResource(e,t,n,o){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const r=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator;let a=[e,t];n&&(a=a.concat(r?n.split(r):n)),e.indexOf(".")>-1&&(a=e.split("."),o=t,t=a[1]),this.addNamespaces(t),St(this.data,a,o),i.silent||this.emit("added",e,t,n,o)}addResources(e,t,n){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const i in n)(y(n[i])||Array.isArray(n[i]))&&this.addResource(e,t,i,n[i],{silent:!0});o.silent||this.emit("added",e,t,n)}addResourceBundle(e,t,n,o,i){let r=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},a=[e,t];e.indexOf(".")>-1&&(a=e.split("."),o=n,n=t,t=a[1]),this.addNamespaces(t);let l=je(this.data,a)||{};r.skipCopy||(n=JSON.parse(JSON.stringify(n))),o?cs(l,n,i):l={...l,...n},St(this.data,a,l),r.silent||this.emit("added",e,t,n)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(e,t)}:this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(o=>t[o]&&Object.keys(t[o]).length>0)}toJSON(){return this.data}}var us={processors:{},addPostProcessor(s){this.processors[s.name]=s},handle(s,e,t,n,o){return s.forEach(i=>{this.processors[i]&&(e=this.processors[i].process(e,t,n,o))}),e}};const kt={};class Ue extends He{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),_n(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=J.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const n=this.resolve(e,t);return n&&n.res!==void 0}extractFromKey(e,t){let n=t.nsSeparator!==void 0?t.nsSeparator:this.options.nsSeparator;n===void 0&&(n=":");const o=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator;let i=t.ns||this.options.defaultNS||[];const r=n&&e.indexOf(n)>-1,a=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!Tn(e,n,o);if(r&&!a){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:y(i)?[i]:i};const c=e.split(n);(n!==o||n===o&&this.options.ns.indexOf(c[0])>-1)&&(i=c.shift()),e=c.join(o)}return{key:e,namespaces:y(i)?[i]:i}}translate(e,t,n){if(typeof t!="object"&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),typeof t=="object"&&(t={...t}),t||(t={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const o=t.returnDetails!==void 0?t.returnDetails:this.options.returnDetails,i=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator,{key:r,namespaces:a}=this.extractFromKey(e[e.length-1],t),l=a[a.length-1],c=t.lng||this.language,u=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&c.toLowerCase()==="cimode"){if(u){const S=t.nsSeparator||this.options.nsSeparator;return o?{res:`${l}${S}${r}`,usedKey:r,exactUsedKey:r,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:`${l}${S}${r}`}return o?{res:r,usedKey:r,exactUsedKey:r,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:r}const h=this.resolve(e,t);let d=h&&h.res;const p=h&&h.usedKey||r,g=h&&h.exactUsedKey||r,f=Object.prototype.toString.apply(d),m=["[object Number]","[object Function]","[object RegExp]"],v=t.joinArrays!==void 0?t.joinArrays:this.options.joinArrays,z=!this.i18nFormat||this.i18nFormat.handleAsObject,E=!y(d)&&typeof d!="boolean"&&typeof d!="number";if(z&&d&&E&&m.indexOf(f)<0&&!(y(v)&&Array.isArray(d))){if(!t.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const S=this.options.returnedObjectHandler?this.options.returnedObjectHandler(p,d,{...t,ns:a}):`key '${r} (${this.language})' returned an object instead of string.`;return o?(h.res=S,h.usedParams=this.getUsedParamsDetails(t),h):S}if(i){const S=Array.isArray(d),L=S?[]:{},R=S?g:p;for(const $ in d)if(Object.prototype.hasOwnProperty.call(d,$)){const A=`${R}${i}${$}`;L[$]=this.translate(A,{...t,joinArrays:!1,ns:a}),L[$]===A&&(L[$]=d[$])}d=L}}else if(z&&y(v)&&Array.isArray(d))d=d.join(v),d&&(d=this.extendTranslation(d,e,t,n));else{let S=!1,L=!1;const R=t.count!==void 0&&!y(t.count),$=Ue.hasDefaultValue(t),A=R?this.pluralResolver.getSuffix(c,t.count,t):"",P=t.ordinal&&R?this.pluralResolver.getSuffix(c,t.count,{ordinal:!1}):"",H=R&&!t.ordinal&&t.count===0&&this.pluralResolver.shouldUseIntlApi(),j=H&&t[`defaultValue${this.options.pluralSeparator}zero`]||t[`defaultValue${A}`]||t[`defaultValue${P}`]||t.defaultValue;!this.isValidLookup(d)&&$&&(S=!0,d=j),this.isValidLookup(d)||(L=!0,d=r);const Je=(t.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&L?void 0:d,q=$&&j!==d&&this.options.updateMissing;if(L||S||q){if(this.logger.log(q?"updateKey":"missingKey",c,l,r,q?j:d),i){const M=this.resolve(r,{...t,keySeparator:!1});M&&M.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let Y=[];const D=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if(this.options.saveMissingTo==="fallback"&&D&&D[0])for(let M=0;M<D.length;M++)Y.push(D[M]);else this.options.saveMissingTo==="all"?Y=this.languageUtils.toResolveHierarchy(t.lng||this.language):Y.push(t.lng||this.language);const K=(M,O,W)=>{const he=$&&W!==d?W:Je;this.options.missingKeyHandler?this.options.missingKeyHandler(M,l,O,he,q,t):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(M,l,O,he,q,t),this.emit("missingKey",M,l,O,d)};this.options.saveMissing&&(this.options.saveMissingPlurals&&R?Y.forEach(M=>{const O=this.pluralResolver.getSuffixes(M,t);H&&t[`defaultValue${this.options.pluralSeparator}zero`]&&O.indexOf(`${this.options.pluralSeparator}zero`)<0&&O.push(`${this.options.pluralSeparator}zero`),O.forEach(W=>{K([M],r+W,t[`defaultValue${W}`]||j)})}):K(Y,r,j))}d=this.extendTranslation(d,e,t,h,n),L&&d===r&&this.options.appendNamespaceToMissingKey&&(d=`${l}:${r}`),(L||S)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?d=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${r}`:r,S?d:void 0):d=this.options.parseMissingKeyHandler(d))}return o?(h.res=d,h.usedParams=this.getUsedParamsDetails(t),h):d}extendTranslation(e,t,n,o,i){var r=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...n},n.lng||this.language||o.usedLng,o.usedNS,o.usedKey,{resolved:o});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init({...n,interpolation:{...this.options.interpolation,...n.interpolation}});const c=y(e)&&(n&&n.interpolation&&n.interpolation.skipOnVariables!==void 0?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let u;if(c){const d=e.match(this.interpolator.nestingRegexp);u=d&&d.length}let h=n.replace&&!y(n.replace)?n.replace:n;if(this.options.interpolation.defaultVariables&&(h={...this.options.interpolation.defaultVariables,...h}),e=this.interpolator.interpolate(e,h,n.lng||this.language||o.usedLng,n),c){const d=e.match(this.interpolator.nestingRegexp),p=d&&d.length;u<p&&(n.nest=!1)}!n.lng&&this.options.compatibilityAPI!=="v1"&&o&&o.res&&(n.lng=this.language||o.usedLng),n.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var d=arguments.length,p=new Array(d),g=0;g<d;g++)p[g]=arguments[g];return i&&i[0]===p[0]&&!n.context?(r.logger.warn(`It seems you are nesting recursively key: ${p[0]} in key: ${t[0]}`),null):r.translate(...p,t)},n)),n.interpolation&&this.interpolator.reset()}const a=n.postProcess||this.options.postProcess,l=y(a)?[a]:a;return e!=null&&l&&l.length&&n.applyPostProcessor!==!1&&(e=us.handle(l,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...o,usedParams:this.getUsedParamsDetails(n)},...n}:n,this)),e}resolve(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n,o,i,r,a;return y(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(n))return;const c=this.extractFromKey(l,t),u=c.key;o=u;let h=c.namespaces;this.options.fallbackNS&&(h=h.concat(this.options.fallbackNS));const d=t.count!==void 0&&!y(t.count),p=d&&!t.ordinal&&t.count===0&&this.pluralResolver.shouldUseIntlApi(),g=t.context!==void 0&&(y(t.context)||typeof t.context=="number")&&t.context!=="",f=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);h.forEach(m=>{this.isValidLookup(n)||(a=m,!kt[`${f[0]}-${m}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(a)&&(kt[`${f[0]}-${m}`]=!0,this.logger.warn(`key "${o}" for languages "${f.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),f.forEach(v=>{if(this.isValidLookup(n))return;r=v;const z=[u];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(z,u,v,m,t);else{let S;d&&(S=this.pluralResolver.getSuffix(v,t.count,t));const L=`${this.options.pluralSeparator}zero`,R=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(d&&(z.push(u+S),t.ordinal&&S.indexOf(R)===0&&z.push(u+S.replace(R,this.options.pluralSeparator)),p&&z.push(u+L)),g){const $=`${u}${this.options.contextSeparator}${t.context}`;z.push($),d&&(z.push($+S),t.ordinal&&S.indexOf(R)===0&&z.push($+S.replace(R,this.options.pluralSeparator)),p&&z.push($+L))}}let E;for(;E=z.pop();)this.isValidLookup(n)||(i=E,n=this.getResource(v,m,E,t))}))})}),{res:n,usedKey:o,exactUsedKey:i,usedLng:r,usedNS:a}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,t,n){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,t,n,o):this.resourceStore.getResource(e,t,n,o)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],n=e.replace&&!y(e.replace);let o=n?e.replace:e;if(n&&typeof e.count<"u"&&(o.count=e.count),this.options.interpolation.defaultVariables&&(o={...this.options.interpolation.defaultVariables,...o}),!n){o={...o};for(const i of t)delete o[i]}return o}static hasDefaultValue(e){const t="defaultValue";for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t===n.substring(0,t.length)&&e[n]!==void 0)return!0;return!1}}const Xe=s=>s.charAt(0).toUpperCase()+s.slice(1);class Et{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=J.create("languageUtils")}getScriptPartFromCode(e){if(e=De(e),!e||e.indexOf("-")<0)return null;const t=e.split("-");return t.length===2||(t.pop(),t[t.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(t.join("-"))}getLanguagePartFromCode(e){if(e=De(e),!e||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(y(e)&&e.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let o=Intl.getCanonicalLocales(e)[0];if(o&&this.options.lowerCaseLng&&(o=o.toLowerCase()),o)return o}catch{}const t=["hans","hant","latn","cyrl","cans","mong","arab"];let n=e.split("-");return this.options.lowerCaseLng?n=n.map(o=>o.toLowerCase()):n.length===2?(n[0]=n[0].toLowerCase(),n[1]=n[1].toUpperCase(),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=Xe(n[1].toLowerCase()))):n.length===3&&(n[0]=n[0].toLowerCase(),n[1].length===2&&(n[1]=n[1].toUpperCase()),n[0]!=="sgn"&&n[2].length===2&&(n[2]=n[2].toUpperCase()),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=Xe(n[1].toLowerCase())),t.indexOf(n[2].toLowerCase())>-1&&(n[2]=Xe(n[2].toLowerCase()))),n.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(n=>{if(t)return;const o=this.formatLanguageCode(n);(!this.options.supportedLngs||this.isSupportedCode(o))&&(t=o)}),!t&&this.options.supportedLngs&&e.forEach(n=>{if(t)return;const o=this.getLanguagePartFromCode(n);if(this.isSupportedCode(o))return t=o;t=this.options.supportedLngs.find(i=>{if(i===o)return i;if(!(i.indexOf("-")<0&&o.indexOf("-")<0)&&(i.indexOf("-")>0&&o.indexOf("-")<0&&i.substring(0,i.indexOf("-"))===o||i.indexOf(o)===0&&o.length>1))return i})}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if(typeof e=="function"&&(e=e(t)),y(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let n=e[t];return n||(n=e[this.getScriptPartFromCode(t)]),n||(n=e[this.formatLanguageCode(t)]),n||(n=e[this.getLanguagePartFromCode(t)]),n||(n=e.default),n||[]}toResolveHierarchy(e,t){const n=this.getFallbackCodes(t||this.options.fallbackLng||[],e),o=[],i=r=>{r&&(this.isSupportedCode(r)?o.push(r):this.logger.warn(`rejecting language code not found in supportedLngs: ${r}`))};return y(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&i(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&i(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&i(this.getLanguagePartFromCode(e))):y(e)&&i(this.formatLanguageCode(e)),n.forEach(r=>{o.indexOf(r)<0&&i(this.formatLanguageCode(r))}),o}}let Nn=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],In={1:s=>+(s>1),2:s=>+(s!=1),3:s=>0,4:s=>s%10==1&&s%100!=11?0:s%10>=2&&s%10<=4&&(s%100<10||s%100>=20)?1:2,5:s=>s==0?0:s==1?1:s==2?2:s%100>=3&&s%100<=10?3:s%100>=11?4:5,6:s=>s==1?0:s>=2&&s<=4?1:2,7:s=>s==1?0:s%10>=2&&s%10<=4&&(s%100<10||s%100>=20)?1:2,8:s=>s==1?0:s==2?1:s!=8&&s!=11?2:3,9:s=>+(s>=2),10:s=>s==1?0:s==2?1:s<7?2:s<11?3:4,11:s=>s==1||s==11?0:s==2||s==12?1:s>2&&s<20?2:3,12:s=>+(s%10!=1||s%100==11),13:s=>+(s!==0),14:s=>s==1?0:s==2?1:s==3?2:3,15:s=>s%10==1&&s%100!=11?0:s%10>=2&&(s%100<10||s%100>=20)?1:2,16:s=>s%10==1&&s%100!=11?0:s!==0?1:2,17:s=>s==1||s%10==1&&s%100!=11?0:1,18:s=>s==0?0:s==1?1:2,19:s=>s==1?0:s==0||s%100>1&&s%100<11?1:s%100>10&&s%100<20?2:3,20:s=>s==1?0:s==0||s%100>0&&s%100<20?1:2,21:s=>s%100==1?1:s%100==2?2:s%100==3||s%100==4?3:0,22:s=>s==1?0:s==2?1:(s<0||s>10)&&s%10==0?2:3};const Mn=["v1","v2","v3"],Fn=["v4"],Lt={zero:0,one:1,two:2,few:3,many:4,other:5},Vn=()=>{const s={};return Nn.forEach(e=>{e.lngs.forEach(t=>{s[t]={numbers:e.nr,plurals:In[e.fc]}})}),s};class jn{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=t,this.logger=J.create("pluralResolver"),(!this.options.compatibilityJSON||Fn.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=Vn(),this.pluralRulesCache={}}addRule(e,t){this.rules[e]=t}clearCache(){this.pluralRulesCache={}}getRule(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const n=De(e==="dev"?"en":e),o=t.ordinal?"ordinal":"cardinal",i=JSON.stringify({cleanedCode:n,type:o});if(i in this.pluralRulesCache)return this.pluralRulesCache[i];let r;try{r=new Intl.PluralRules(n,{type:o})}catch{if(!e.match(/-|_/))return;const l=this.languageUtils.getLanguagePartFromCode(e);r=this.getRule(l,t)}return this.pluralRulesCache[i]=r,r}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=this.getRule(e,t);return this.shouldUseIntlApi()?n&&n.resolvedOptions().pluralCategories.length>1:n&&n.numbers.length>1}getPluralFormsOfKey(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,n).map(o=>`${t}${o}`)}getSuffixes(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=this.getRule(e,t);return n?this.shouldUseIntlApi()?n.resolvedOptions().pluralCategories.sort((o,i)=>Lt[o]-Lt[i]).map(o=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${o}`):n.numbers.map(o=>this.getSuffix(e,o,t)):[]}getSuffix(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const o=this.getRule(e,n);return o?this.shouldUseIntlApi()?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${o.select(t)}`:this.getSuffixRetroCompatible(o,t):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,t){const n=e.noAbs?e.plurals(t):e.plurals(Math.abs(t));let o=e.numbers[n];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(o===2?o="plural":o===1&&(o=""));const i=()=>this.options.prepend&&o.toString()?this.options.prepend+o.toString():o.toString();return this.options.compatibilityJSON==="v1"?o===1?"":typeof o=="number"?`_plural_${o.toString()}`:i():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?i():this.options.prepend&&n.toString()?this.options.prepend+n.toString():n.toString()}shouldUseIntlApi(){return!Mn.includes(this.options.compatibilityJSON)}}const Ot=function(s,e,t){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,i=kn(s,e,t);return!i&&o&&y(t)&&(i=it(s,t,n),i===void 0&&(i=it(e,t,n))),i},et=s=>s.replace(/\$/g,"$$$$");class Dn{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=J.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(t=>t),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:n,useRawValueToEscape:o,prefix:i,prefixEscaped:r,suffix:a,suffixEscaped:l,formatSeparator:c,unescapeSuffix:u,unescapePrefix:h,nestingPrefix:d,nestingPrefixEscaped:p,nestingSuffix:g,nestingSuffixEscaped:f,nestingOptionsSeparator:m,maxReplaces:v,alwaysFormat:z}=e.interpolation;this.escape=t!==void 0?t:Ln,this.escapeValue=n!==void 0?n:!0,this.useRawValueToEscape=o!==void 0?o:!1,this.prefix=i?pe(i):r||"{{",this.suffix=a?pe(a):l||"}}",this.formatSeparator=c||",",this.unescapePrefix=u?"":h||"-",this.unescapeSuffix=this.unescapePrefix?"":u||"",this.nestingPrefix=d?pe(d):p||pe("$t("),this.nestingSuffix=g?pe(g):f||pe(")"),this.nestingOptionsSeparator=m||",",this.maxReplaces=v||1e3,this.alwaysFormat=z!==void 0?z:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(t,n)=>t&&t.source===n?(t.lastIndex=0,t):new RegExp(n,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,t,n,o){let i,r,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=p=>{if(p.indexOf(this.formatSeparator)<0){const v=Ot(t,l,p,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(v,void 0,n,{...o,...t,interpolationkey:p}):v}const g=p.split(this.formatSeparator),f=g.shift().trim(),m=g.join(this.formatSeparator).trim();return this.format(Ot(t,l,f,this.options.keySeparator,this.options.ignoreJSONStructure),m,n,{...o,...t,interpolationkey:f})};this.resetRegExp();const u=o&&o.missingInterpolationHandler||this.options.missingInterpolationHandler,h=o&&o.interpolation&&o.interpolation.skipOnVariables!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:p=>et(p)},{regex:this.regexp,safeValue:p=>this.escapeValue?et(this.escape(p)):et(p)}].forEach(p=>{for(a=0;i=p.regex.exec(e);){const g=i[1].trim();if(r=c(g),r===void 0)if(typeof u=="function"){const m=u(e,i,o);r=y(m)?m:""}else if(o&&Object.prototype.hasOwnProperty.call(o,g))r="";else if(h){r=i[0];continue}else this.logger.warn(`missed to pass in variable ${g} for interpolating ${e}`),r="";else!y(r)&&!this.useRawValueToEscape&&(r=zt(r));const f=p.safeValue(r);if(e=e.replace(i[0],f),h?(p.regex.lastIndex+=r.length,p.regex.lastIndex-=i[0].length):p.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),e}nest(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o,i,r;const a=(l,c)=>{const u=this.nestingOptionsSeparator;if(l.indexOf(u)<0)return l;const h=l.split(new RegExp(`${u}[ ]*{`));let d=`{${h[1]}`;l=h[0],d=this.interpolate(d,r);const p=d.match(/'/g),g=d.match(/"/g);(p&&p.length%2===0&&!g||g.length%2!==0)&&(d=d.replace(/'/g,'"'));try{r=JSON.parse(d),c&&(r={...c,...r})}catch(f){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,f),`${l}${u}${d}`}return r.defaultValue&&r.defaultValue.indexOf(this.prefix)>-1&&delete r.defaultValue,l};for(;o=this.nestingRegexp.exec(e);){let l=[];r={...n},r=r.replace&&!y(r.replace)?r.replace:r,r.applyPostProcessor=!1,delete r.defaultValue;let c=!1;if(o[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(o[1])){const u=o[1].split(this.formatSeparator).map(h=>h.trim());o[1]=u.shift(),l=u,c=!0}if(i=t(a.call(this,o[1].trim(),r),r),i&&o[0]===e&&!y(i))return i;y(i)||(i=zt(i)),i||(this.logger.warn(`missed to resolve ${o[1]} for nesting ${e}`),i=""),c&&(i=l.reduce((u,h)=>this.format(u,h,n.lng,{...n,interpolationkey:o[1].trim()}),i.trim())),e=e.replace(o[0],i),this.regexp.lastIndex=0}return e}}const Bn=s=>{let e=s.toLowerCase().trim();const t={};if(s.indexOf("(")>-1){const n=s.split("(");e=n[0].toLowerCase().trim();const o=n[1].substring(0,n[1].length-1);e==="currency"&&o.indexOf(":")<0?t.currency||(t.currency=o.trim()):e==="relativetime"&&o.indexOf(":")<0?t.range||(t.range=o.trim()):o.split(";").forEach(r=>{if(r){const[a,...l]=r.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,""),u=a.trim();t[u]||(t[u]=c),c==="false"&&(t[u]=!1),c==="true"&&(t[u]=!0),isNaN(c)||(t[u]=parseInt(c,10))}})}return{formatName:e,formatOptions:t}},fe=s=>{const e={};return(t,n,o)=>{let i=o;o&&o.interpolationkey&&o.formatParams&&o.formatParams[o.interpolationkey]&&o[o.interpolationkey]&&(i={...i,[o.interpolationkey]:void 0});const r=n+JSON.stringify(i);let a=e[r];return a||(a=s(De(n),o),e[r]=a),a(t)}};class Un{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=J.create("formatter"),this.options=e,this.formats={number:fe((t,n)=>{const o=new Intl.NumberFormat(t,{...n});return i=>o.format(i)}),currency:fe((t,n)=>{const o=new Intl.NumberFormat(t,{...n,style:"currency"});return i=>o.format(i)}),datetime:fe((t,n)=>{const o=new Intl.DateTimeFormat(t,{...n});return i=>o.format(i)}),relativetime:fe((t,n)=>{const o=new Intl.RelativeTimeFormat(t,{...n});return i=>o.format(i,n.range||"day")}),list:fe((t,n)=>{const o=new Intl.ListFormat(t,{...n});return i=>o.format(i)})},this.init(e)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=t.interpolation.formatSeparator||","}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=fe(t)}format(e,t,n){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const i=t.split(this.formatSeparator);if(i.length>1&&i[0].indexOf("(")>1&&i[0].indexOf(")")<0&&i.find(a=>a.indexOf(")")>-1)){const a=i.findIndex(l=>l.indexOf(")")>-1);i[0]=[i[0],...i.splice(1,a)].join(this.formatSeparator)}return i.reduce((a,l)=>{const{formatName:c,formatOptions:u}=Bn(l);if(this.formats[c]){let h=a;try{const d=o&&o.formatParams&&o.formatParams[o.interpolationkey]||{},p=d.locale||d.lng||o.locale||o.lng||n;h=this.formats[c](a,p,{...u,...o,...d})}catch(d){this.logger.warn(d)}return h}else this.logger.warn(`there was no format function for ${c}`);return a},e)}}const Hn=(s,e)=>{s.pending[e]!==void 0&&(delete s.pending[e],s.pendingCount--)};class Kn extends He{constructor(e,t,n){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=t,this.services=n,this.languageUtils=n.languageUtils,this.options=o,this.logger=J.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=o.maxParallelReads||10,this.readingCalls=0,this.maxRetries=o.maxRetries>=0?o.maxRetries:5,this.retryTimeout=o.retryTimeout>=1?o.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(n,o.backend,o)}queueLoad(e,t,n,o){const i={},r={},a={},l={};return e.forEach(c=>{let u=!0;t.forEach(h=>{const d=`${c}|${h}`;!n.reload&&this.store.hasResourceBundle(c,h)?this.state[d]=2:this.state[d]<0||(this.state[d]===1?r[d]===void 0&&(r[d]=!0):(this.state[d]=1,u=!1,r[d]===void 0&&(r[d]=!0),i[d]===void 0&&(i[d]=!0),l[h]===void 0&&(l[h]=!0)))}),u||(a[c]=!0)}),(Object.keys(i).length||Object.keys(r).length)&&this.queue.push({pending:r,pendingCount:Object.keys(r).length,loaded:{},errors:[],callback:o}),{toLoad:Object.keys(i),pending:Object.keys(r),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(e,t,n){const o=e.split("|"),i=o[0],r=o[1];t&&this.emit("failedLoading",i,r,t),!t&&n&&this.store.addResourceBundle(i,r,n,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&n&&(this.state[e]=0);const a={};this.queue.forEach(l=>{Cn(l.loaded,[i],r),Hn(l,e),t&&l.errors.push(t),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{a[c]||(a[c]={});const u=l.loaded[c];u.length&&u.forEach(h=>{a[c][h]===void 0&&(a[c][h]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(e,t,n){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,r=arguments.length>5?arguments[5]:void 0;if(!e.length)return r(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:n,tried:o,wait:i,callback:r});return}this.readingCalls++;const a=(c,u)=>{if(this.readingCalls--,this.waitingReads.length>0){const h=this.waitingReads.shift();this.read(h.lng,h.ns,h.fcName,h.tried,h.wait,h.callback)}if(c&&u&&o<this.maxRetries){setTimeout(()=>{this.read.call(this,e,t,n,o+1,i*2,r)},i);return}r(c,u)},l=this.backend[n].bind(this.backend);if(l.length===2){try{const c=l(e,t);c&&typeof c.then=="function"?c.then(u=>a(null,u)).catch(a):a(null,c)}catch(c){a(c)}return}return l(e,t,a)}prepareLoading(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();y(e)&&(e=this.languageUtils.toResolveHierarchy(e)),y(t)&&(t=[t]);const i=this.queueLoad(e,t,n,o);if(!i.toLoad.length)return i.pending.length||o(),null;i.toLoad.forEach(r=>{this.loadOne(r)})}load(e,t,n){this.prepareLoading(e,t,{},n)}reload(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}loadOne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const n=e.split("|"),o=n[0],i=n[1];this.read(o,i,"read",void 0,void 0,(r,a)=>{r&&this.logger.warn(`${t}loading namespace ${i} for language ${o} failed`,r),!r&&a&&this.logger.log(`${t}loaded namespace ${i} for language ${o}`,a),this.loaded(e,r,a)})}saveMissing(e,t,n,o,i){let r=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(t)){this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(n==null||n==="")){if(this.backend&&this.backend.create){const l={...r,isUpdate:i},c=this.backend.create.bind(this.backend);if(c.length<6)try{let u;c.length===5?u=c(e,t,n,o,l):u=c(e,t,n,o),u&&typeof u.then=="function"?u.then(h=>a(null,h)).catch(a):a(null,u)}catch(u){a(u)}else c(e,t,n,o,a,l)}!e||!e[0]||this.store.addResource(e[0],t,n,o)}}}const Rt=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:s=>{let e={};if(typeof s[1]=="object"&&(e=s[1]),y(s[1])&&(e.defaultValue=s[1]),y(s[2])&&(e.tDescription=s[2]),typeof s[2]=="object"||typeof s[3]=="object"){const t=s[3]||s[2];Object.keys(t).forEach(n=>{e[n]=t[n]})}return e},interpolation:{escapeValue:!0,format:s=>s,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),At=s=>(y(s.ns)&&(s.ns=[s.ns]),y(s.fallbackLng)&&(s.fallbackLng=[s.fallbackLng]),y(s.fallbackNS)&&(s.fallbackNS=[s.fallbackNS]),s.supportedLngs&&s.supportedLngs.indexOf("cimode")<0&&(s.supportedLngs=s.supportedLngs.concat(["cimode"])),s),Re=()=>{},qn=s=>{Object.getOwnPropertyNames(Object.getPrototypeOf(s)).forEach(t=>{typeof s[t]=="function"&&(s[t]=s[t].bind(s))})};class _e extends He{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(super(),this.options=At(e),this.services={},this.logger=J,this.modules={external:[]},qn(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(){var e=this;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof t=="function"&&(n=t,t={}),!t.defaultNS&&t.defaultNS!==!1&&t.ns&&(y(t.ns)?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));const o=Rt();this.options={...o,...this.options,...At(t)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...o.interpolation,...this.options.interpolation}),t.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=t.keySeparator),t.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=t.nsSeparator);const i=u=>u?typeof u=="function"?new u:u:null;if(!this.options.isClone){this.modules.logger?J.init(i(this.modules.logger),this.options):J.init(null,this.options);let u;this.modules.formatter?u=this.modules.formatter:typeof Intl<"u"&&(u=Un);const h=new Et(this.options);this.store=new Ct(this.options.resources,this.options);const d=this.services;d.logger=J,d.resourceStore=this.store,d.languageUtils=h,d.pluralResolver=new jn(h,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),u&&(!this.options.interpolation.format||this.options.interpolation.format===o.interpolation.format)&&(d.formatter=i(u),d.formatter.init(d,this.options),this.options.interpolation.format=d.formatter.format.bind(d.formatter)),d.interpolator=new Dn(this.options),d.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},d.backendConnector=new Kn(i(this.modules.backend),d.resourceStore,d,this.options),d.backendConnector.on("*",function(p){for(var g=arguments.length,f=new Array(g>1?g-1:0),m=1;m<g;m++)f[m-1]=arguments[m];e.emit(p,...f)}),this.modules.languageDetector&&(d.languageDetector=i(this.modules.languageDetector),d.languageDetector.init&&d.languageDetector.init(d,this.options.detection,this.options)),this.modules.i18nFormat&&(d.i18nFormat=i(this.modules.i18nFormat),d.i18nFormat.init&&d.i18nFormat.init(this)),this.translator=new Ue(this.services,this.options),this.translator.on("*",function(p){for(var g=arguments.length,f=new Array(g>1?g-1:0),m=1;m<g;m++)f[m-1]=arguments[m];e.emit(p,...f)}),this.modules.external.forEach(p=>{p.init&&p.init(this)})}if(this.format=this.options.interpolation.format,n||(n=Re),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const u=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);u.length>0&&u[0]!=="dev"&&(this.options.lng=u[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(u=>{this[u]=function(){return e.store[u](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(u=>{this[u]=function(){return e.store[u](...arguments),e}});const l=ve(),c=()=>{const u=(h,d)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(d),n(h,d)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return u(null,this.t.bind(this));this.changeLanguage(this.options.lng,u)};return this.options.resources||!this.options.initImmediate?c():setTimeout(c,0),l}loadResources(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Re;const o=y(e)?e:this.language;if(typeof e=="function"&&(n=e),!this.options.resources||this.options.partialBundledLanguages){if(o&&o.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return n();const i=[],r=a=>{if(!a||a==="cimode")return;this.services.languageUtils.toResolveHierarchy(a).forEach(c=>{c!=="cimode"&&i.indexOf(c)<0&&i.push(c)})};o?r(o):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>r(l)),this.options.preload&&this.options.preload.forEach(a=>r(a)),this.services.backendConnector.load(i,this.options.ns,a=>{!a&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),n(a)})}else n(null)}reloadResources(e,t,n){const o=ve();return typeof e=="function"&&(n=e,e=void 0),typeof t=="function"&&(n=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),n||(n=Re),this.services.backendConnector.reload(e,t,i=>{o.resolve(),n(i)}),o}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&us.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let t=0;t<this.languages.length;t++){const n=this.languages[t];if(!(["cimode","dev"].indexOf(n)>-1)&&this.store.hasLanguageSomeTranslations(n)){this.resolvedLanguage=n;break}}}changeLanguage(e,t){var n=this;this.isLanguageChangingTo=e;const o=ve();this.emit("languageChanging",e);const i=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},r=(l,c)=>{c?(i(c),this.translator.changeLanguage(c),this.isLanguageChangingTo=void 0,this.emit("languageChanged",c),this.logger.log("languageChanged",c)):this.isLanguageChangingTo=void 0,o.resolve(function(){return n.t(...arguments)}),t&&t(l,function(){return n.t(...arguments)})},a=l=>{!e&&!l&&this.services.languageDetector&&(l=[]);const c=y(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);c&&(this.language||i(c),this.translator.language||this.translator.changeLanguage(c),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(c)),this.loadResources(c,u=>{r(u,c)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),o}getFixedT(e,t,n){var o=this;const i=function(r,a){let l;if(typeof a!="object"){for(var c=arguments.length,u=new Array(c>2?c-2:0),h=2;h<c;h++)u[h-2]=arguments[h];l=o.options.overloadTranslationOptionHandler([r,a].concat(u))}else l={...a};l.lng=l.lng||i.lng,l.lngs=l.lngs||i.lngs,l.ns=l.ns||i.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||n||i.keyPrefix);const d=o.options.keySeparator||".";let p;return l.keyPrefix&&Array.isArray(r)?p=r.map(g=>`${l.keyPrefix}${d}${g}`):p=l.keyPrefix?`${l.keyPrefix}${d}${r}`:r,o.t(p,l)};return y(e)?i.lng=e:i.lngs=e,i.ns=t,i.keyPrefix=n,i}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const n=t.lng||this.resolvedLanguage||this.languages[0],o=this.options?this.options.fallbackLng:!1,i=this.languages[this.languages.length-1];if(n.toLowerCase()==="cimode")return!0;const r=(a,l)=>{const c=this.services.backendConnector.state[`${a}|${l}`];return c===-1||c===0||c===2};if(t.precheck){const a=t.precheck(this,r);if(a!==void 0)return a}return!!(this.hasResourceBundle(n,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||r(n,e)&&(!o||r(i,e)))}loadNamespaces(e,t){const n=ve();return this.options.ns?(y(e)&&(e=[e]),e.forEach(o=>{this.options.ns.indexOf(o)<0&&this.options.ns.push(o)}),this.loadResources(o=>{n.resolve(),t&&t(o)}),n):(t&&t(),Promise.resolve())}loadLanguages(e,t){const n=ve();y(e)&&(e=[e]);const o=this.options.preload||[],i=e.filter(r=>o.indexOf(r)<0&&this.services.languageUtils.isSupportedCode(r));return i.length?(this.options.preload=o.concat(i),this.loadResources(r=>{n.resolve(),t&&t(r)}),n):(t&&t(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const t=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],n=this.services&&this.services.languageUtils||new Et(Rt());return t.indexOf(n.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new _e(e,t)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Re;const n=e.forkResourceStore;n&&delete e.forkResourceStore;const o={...this.options,...e,isClone:!0},i=new _e(o);return(e.debug!==void 0||e.prefix!==void 0)&&(i.logger=i.logger.clone(e)),["store","services","language"].forEach(a=>{i[a]=this[a]}),i.services={...this.services},i.services.utils={hasLoadedNamespace:i.hasLoadedNamespace.bind(i)},n&&(i.store=new Ct(this.store.data,o),i.services.resourceStore=i.store),i.translator=new Ue(i.services,o),i.translator.on("*",function(a){for(var l=arguments.length,c=new Array(l>1?l-1:0),u=1;u<l;u++)c[u-1]=arguments[u];i.emit(a,...c)}),i.init(o,t),i.translator.options=o,i.translator.backendConnector.services.utils={hasLoadedNamespace:i.hasLoadedNamespace.bind(i)},i}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const V=_e.createInstance();V.createInstance=_e.createInstance;V.createInstance;V.dir;V.init;V.loadResources;V.reloadResources;V.use;V.changeLanguage;V.getFixedT;const me=V.t;V.exists;V.setDefaultNamespace;V.hasLoadedNamespace;V.loadNamespaces;V.loadLanguages;class Yn{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}let Wn=class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}};const Tt=s=>!js(s)&&typeof s.then=="function",Pt=1073741823;let Jn=class extends ct{constructor(){super(...arguments),this._$Cwt=Pt,this._$Cbt=[],this._$CK=new Yn(this),this._$CX=new Wn}render(...e){return e.find(t=>!Tt(t))??B}update(e,t){const n=this._$Cbt;let o=n.length;this._$Cbt=t;const i=this._$CK,r=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<t.length&&!(a>this._$Cwt);a++){const l=t[a];if(!Tt(l))return this._$Cwt=a,l;a<o&&l===n[a]||(this._$Cwt=Pt,o=0,Promise.resolve(l).then(async c=>{for(;r.get();)await r.get();const u=i.deref();if(u!==void 0){const h=u._$Cbt.indexOf(l);h>-1&&h<u._$Cwt&&(u._$Cwt=h,u.setValue(c))}}))}return B}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const Se=ce(Jn),Le=Ce(N`
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
`),Gn=N`
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
`,Zn=N`
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

		/* Medium (md) - default size */
		height: 40px;
		padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 4);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);

		/* Primary - default variant */
		${Gn}
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
`,Qn=["variant","size","disabled","full-width","type"],Xn=s=>{const e=s.hasAttribute("disabled"),t=s.getAttribute("type")||"button";return k(()=>{const n=o=>{s.hasAttribute("disabled")&&o.stopImmediatePropagation()};return s.addEventListener("click",n,{capture:!0}),()=>s.removeEventListener("click",n,{capture:!0})},[]),b`
		<button type=${t} class="button" ?disabled=${e} part="button">
			<slot name="prefix"></slot>
			<slot></slot>
			<slot name="suffix"></slot>
		</button>
	`};customElements.define("cosmoz-button",I(Xn,{observedAttributes:Qn,styleSheets:[Le,Zn],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Nt=(s,e,t)=>{const n=new Map;for(let o=e;o<=t;o++)n.set(s[o],o);return n},ds=ce(class extends Ee{constructor(s){if(super(s),s.type!==Z.CHILD)throw Error("repeat() can only be used in text expressions")}dt(s,e,t){let n;t===void 0?t=e:e!==void 0&&(n=e);const o=[],i=[];let r=0;for(const a of s)o[r]=n?n(a,r):r,i[r]=t(a,r),r++;return{values:i,keys:o}}render(s,e,t){return this.dt(s,e,t).values}update(s,[e,t,n]){const o=Ds(s),{values:i,keys:r}=this.dt(e,t,n);if(!Array.isArray(o))return this.ut=r,i;const a=this.ut??=[],l=[];let c,u,h=0,d=o.length-1,p=0,g=i.length-1;for(;h<=d&&p<=g;)if(o[h]===null)h++;else if(o[d]===null)d--;else if(a[h]===r[p])l[p]=oe(o[h],i[p]),h++,p++;else if(a[d]===r[g])l[g]=oe(o[d],i[g]),d--,g--;else if(a[h]===r[g])l[g]=oe(o[h],i[g]),be(s,l[g+1],o[h]),h++,g--;else if(a[d]===r[p])l[p]=oe(o[d],i[p]),be(s,o[h],o[d]),d--,p++;else if(c===void 0&&(c=Nt(r,p,g),u=Nt(a,h,d)),c.has(a[h]))if(c.has(a[d])){const f=u.get(r[p]),m=f!==void 0?o[f]:null;if(m===null){const v=be(s,o[h]);oe(v,i[p]),l[p]=v}else l[p]=oe(m,i[p]),be(s,o[h],m),o[f]=null;p++}else Ze(o[d]),d--;else Ze(o[h]),h++;for(;p<=g;){const f=be(s,l[g+1]);oe(f,i[p]),l[p++]=f}for(;h<=d;){const f=o[h++];f!==null&&Ze(f)}return this.ut=r,ts(s,l),B}}),eo=s=>typeof s=="object"&&s!==null&&Symbol.iterator in s;function Q(s){return s==null?[]:Array.isArray(s)?s:typeof s=="string"?[s]:eo(s)?Array.from(s):[s]}const tt=(s,e=Ve)=>t=>{const n=Q(s).map(e);return Q(t).filter(o=>!n.includes(e(o)))};function Ne(s){return s?e=>e?.[s]:Ve}const to=s=>{const e=Ne(s);return t=>typeof t=="string"?t:e(t)?.toString()||""},so=s=>e=>{const t={};for(const n in e)s.includes(n)&&(t[n]=e[n]);return t};function It(s,e,...t){return s?s(e,...t):e}const Ke=ce(class extends Ee{constructor(s){if(super(s),s.type!==Z.PROPERTY&&s.type!==Z.ATTRIBUTE&&s.type!==Z.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Xt(s))throw Error("`live` bindings can only contain a single expression")}render(s){return s}update(s,[e]){if(e===B||e===G)return e;const t=s.element,n=s.name;if(s.type===Z.PROPERTY){if(e===t[n])return B}else if(s.type===Z.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(n))return B}else if(s.type===Z.ATTRIBUTE&&t.getAttribute(n)===e+"")return B;return ts(s),e}}),st=new WeakMap,re=ce(class extends ct{render(s){return G}update(s,[e]){const t=e!==this.G;return t&&this.G!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.G=e,this.ht=s.options?.host,this.rt(this.ct=s.element)),G}rt(s){if(this.isConnected||(s=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let t=st.get(e);t===void 0&&(t=new WeakMap,st.set(e,t)),t.get(this.G)!==void 0&&this.G.call(this.ht,void 0),t.set(this.G,s),s!==void 0&&this.G.call(this.ht,s)}else this.G.value=s}get lt(){return typeof this.G=="function"?st.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),no=({slot:s,title:e,className:t,width:n="24",height:o="24",styles:i}={})=>b`
  <svg
    slot=${x(s)}
    class=${`alert-circle-icon ${t??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${n}
    height=${o}
    style=${x(i)}
  >
    ${C(e,()=>le`<title>${e}</title>`)}
    <path
      d="M12 8v4m0 4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
`,oo=({slot:s,title:e,className:t,width:n="24",height:o="24",styles:i}={})=>b`
  <svg
    slot=${x(s)}
    class=${`chevron-down-icon ${t??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${n}
    height=${o}
    style=${x(i)}
  >
    ${C(e,()=>le`<title>${e}</title>`)}
    <path d="m6 9 6 6 6-6" />
  </svg>
`,io=({slot:s,title:e,className:t,width:n="24",height:o="24",styles:i}={})=>b`
  <svg
    slot=${x(s)}
    class=${`file-attachment-02-icon ${t??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${n}
    height=${o}
    style=${x(i)}
  >
    ${C(e,()=>le`<title>${e}</title>`)}
    <path
      d="M12.5 2h2.7c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C20 4.28 20 5.12 20 6.8v10.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 22 16.88 22 15.2 22H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 19.72 4 18.88 4 17.2v-.7M16 13h-4.5M16 9h-3.5m3.5 8H8m-2-7V4.5a1.5 1.5 0 1 1 3 0V10a3 3 0 1 1-6 0V6"
    />
  </svg>
`,ro=({slot:s,title:e,className:t,width:n="24",height:o="24",styles:i}={})=>b`
  <svg
    slot=${x(s)}
    class=${`help-circle-icon ${t??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${n}
    height=${o}
    style=${x(i)}
  >
    ${C(e,()=>le`<title>${e}</title>`)}
    <path
      d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
`,ao=({slot:s,title:e,className:t,width:n="24",height:o="24",styles:i}={})=>b`
  <svg
    slot=${x(s)}
    class=${`info-circle-icon ${t??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${n}
    height=${o}
    style=${x(i)}
  >
    ${C(e,()=>le`<title>${e}</title>`)}
    <path
      d="M12 16v-4m0-4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
`,lo=({slot:s,title:e,className:t,width:n="24",height:o="24",styles:i}={})=>b`
  <svg
    slot=${x(s)}
    class=${`x-close-icon ${t??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${n}
    height=${o}
    style=${x(i)}
  >
    ${C(e,()=>le`<title>${e}</title>`)}
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
`,co=N`
	:host {
		display: flex;
		flex-direction: column;
		gap: var(--cosmoz-tooltip-gap, var(--cz-spacing));
		font-family: var(--cz-font-body);
	}

	::slotted([slot='heading']) {
		display: block;
	}

	::slotted([slot='description']) {
		margin: 0;
	}
`;customElements.define("cosmoz-tooltip-content",I(()=>b`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[Le,co]}));const rt=Ce(N`
	.cosmoz-tooltip-popover {
		position: fixed;
		inset: unset;
		pointer-events: none;
		text-align: left;
		margin: calc(var(--cz-spacing) * 2);
		position-try-fallbacks:
			flip-block,
			flip-inline,
			flip-block flip-inline;

		/* Reset popover defaults */
		border: none;
		white-space: normal;
		padding: var(--cosmoz-tooltip-padding, calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 3));
		border-radius: var(--cosmoz-tooltip-border-radius, var(--cz-radius-sm));
		max-width: var(--cosmoz-tooltip-max-width, 20rem);
		box-shadow: var(--cosmoz-tooltip-box-shadow, var(--cz-shadow-lg));
		background: var(--cosmoz-tooltip-bg-color, var(--cz-color-gray-900));
		font-size: var(--cosmoz-tooltip-font-size, var(--cz-text-xs));
		font-weight: var(--cosmoz-tooltip-font-weight, 400);
		line-height: var(--cosmoz-tooltip-line-height, var(--cz-text-xs-line-height));
		color: var(--cosmoz-tooltip-text-color, var(--cz-color-white));

		cosmoz-tooltip-content strong {
			font-weight: var(
	 			--cosmoz-tooltip-heading-font-weight,
	 			var(--cz-font-weight-semibold)
	 		);

			color: var(--cosmoz-tooltip-heading-color);
		}

		/* Animation - open state */
		opacity: 1;
		transform: translateY(0) scale(1);

		transition:
			opacity 150ms ease-out,
			transform 150ms ease-out,
			overlay 150ms ease-out allow-discrete,
			display 150ms ease-out allow-discrete;
	}

	@starting-style {
		.cosmoz-tooltip-popover:popover-open {
			opacity: 0;
			transform: translateY(4px) scale(0.96);
		}
	}

	.cosmoz-tooltip-popover:not(:popover-open) {
		opacity: 0;
		transform: translateY(4px) scale(0.96);
	}

	@media (prefers-reduced-motion: reduce) {
		.cosmoz-tooltip-popover {
			transition: none;
		}
	}
`),Mt=(s,e,t)=>es(b`<cosmoz-tooltip-content>
			${C(e,()=>b`<strong slot="heading">${e}</strong>`)}
			${C(t,()=>b`<p slot="description">${t}</p>`)}
		</cosmoz-tooltip-content>`,s),uo=(s,e)=>{const{for:t,heading:n,description:o,placement:i="top",delay:r=300,disabled:a=!1}=e,l=U(),u=!!(n||o)&&!a;k(()=>{if(!t||!u)return;const h=s.getRootNode(),d=h.adoptedStyleSheets??[];d.includes(rt)||(h.adoptedStyleSheets=[...d,rt]);const p=document.createElement("div");p.setAttribute("popover","manual"),p.setAttribute("role","tooltip"),p.classList.add("cosmoz-tooltip-popover"),s.after(p),l.current=p,Mt(p,n,o);const g=`[name="${t}"]`,f=`--tooltip-anchor-${t}`;let m;const v=$=>{a||(clearTimeout(m),$.style.anchorName=f,p.style.positionAnchor=f,p.style.positionArea=i,m=window.setTimeout(()=>p.showPopover(),r))},z=()=>{clearTimeout(m),p.hidePopover()},E=$=>{const A=$.target.closest?.(g);A&&v(A)},S=$=>{const A=$.target.closest?.(g);if(!A)return;const P=$.relatedTarget;P&&A.contains(P)||z()},L=$=>{const A=$.target.closest?.(g);A&&v(A)},R=$=>{$.target.closest?.(g)&&z()};return h.addEventListener("pointerover",E),h.addEventListener("pointerout",S),h.addEventListener("focusin",L),h.addEventListener("focusout",R),()=>{clearTimeout(m),h.removeEventListener("pointerover",E),h.removeEventListener("pointerout",S),h.removeEventListener("focusin",L),h.removeEventListener("focusout",R),p.hidePopover(),p.remove(),l.current=void 0}},[t,i,r,u]),k(()=>{!t||!l.current||Mt(l.current,n,o)},[n,o,t]),k(()=>{!a||!l.current||l.current.hidePopover()},[a])},ho=s=>{const[e,t]=X(!1);return k(()=>{const n=s.current;if(!n)return;const o=()=>{t(n.assignedElements().length>0)};return o(),n.addEventListener("slotchange",o),()=>n.removeEventListener("slotchange",o)},[s.current]),e},po=N`
	:host {
		display: inline-block;
		anchor-name: --tooltip-anchor;
	}

	:host([for]) {
		display: contents;
		anchor-name: unset;
	}

	.cosmoz-tooltip-popover {
		position-anchor: --tooltip-anchor;
	}
`,fo=s=>{const{heading:e,description:t,for:n,placement:o="top",delay:i=300,disabled:r=!1}=s,a=U(),l=U(),c=U(),u=ho(c),d=!!(e||t||u)&&!r,p=_(()=>{d&&(clearTimeout(l.current),l.current=window.setTimeout(()=>{a.current?.showPopover()},i))},[i,d]);k(()=>{r&&(clearTimeout(l.current),a.current?.hidePopover())},[r]);const g=_(()=>{clearTimeout(l.current),a.current?.hidePopover()},[]);return k(()=>{if(n)return;const f=m=>{const v=m.relatedTarget;v&&s.contains(v)||g()};return s.addEventListener("pointerover",p),s.addEventListener("pointerout",f),()=>{s.removeEventListener("pointerover",p),s.removeEventListener("pointerout",f)}},[n,p,g]),uo(s,{for:n,heading:e,description:t,placement:o,delay:i,disabled:r}),n?G:d?b`
		<slot @focusin=${p} @focusout=${g}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${o}"
			${re(a)}
		>
			<cosmoz-tooltip-content>
				${C(e,()=>b`<strong slot="heading">${e}</strong>`)}
				${C(t,()=>b`<p slot="description">${t}</p>`)}
				<slot name="content" ${re(c)}></slot>
			</cosmoz-tooltip-content>
		</div>
	`:b`
			<slot></slot>
			<slot name="content" ${re(c)} hidden></slot>
		`};customElements.define("cosmoz-tooltip",I(fo,{styleSheets:[Le,rt,po],observedAttributes:["heading","description","for","placement","delay","disabled"]}));const hs=(s,{hint:e,label:t,invalid:n,errorMessage:o,compact:i,required:r})=>b`
		<!-- label: hidden in compact mode -->
		${C(!i&&t,()=>b`<label for="input" part="label"
					>${t}
					${C(r,()=>b`<span class="required">*</span>`)}
				</label>`)}
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${s}
			</div>
			<!-- compact: tooltip always visible, red icon when invalid -->
			${C(i&&n&&o,()=>b`<cosmoz-tooltip
						placement="top"
						description=${o}
						delay="300"
					>
						${ao({width:"16px",height:"16px"})}
					</cosmoz-tooltip>`)}

			<slot name="suffix"></slot>
		</div>
		<!-- hint: visible when valid, hidden when invalid or compact -->
		${C(!i&&e&&!n,()=>b`<span class="hint" part="hint">${e}</span>`)}
		<!-- error: replaces hint when invalid, hidden in compact -->
		${C(!i&&n&&o,()=>b`<span class="error" part="error">${o}</span>`)}
	`,ps=["autocomplete","readonly","disabled","maxlength","invalid"],fs=ue`
	/* === Host === */

	:host {
		display: flex;
		flex-direction: column;
		gap: calc(var(--cz-spacing) * 1.5);
		position: relative;
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
		font-family: var(--cz-font-body);
		margin-bottom: calc(var(--cz-spacing) * 6);
	}

	:host(:focus-within) {
		caret-color: var(--cz-color-text-primary);
	}

	:host([disabled]) .wrap {
		color: var(--cz-color-text-disabled);
		opacity: 0.5;
		cursor: not-allowed;
	}

	:host([disabled]) #input {
		cursor: not-allowed;
	}

	:host([invalid]) {
		caret-color: var(--cz-color-text-error);
	}

	:host([invalid]) .required,
	.error {
		color: var(--cz-color-text-error);
	}

	/* === Layout === */

	.wrap {
		display: flex;
		align-items: center;
		position: relative;
		width: 100%;
		border-radius: var(--cz-radius-md);
		box-shadow: 0 0 0 1px var(--cz-color-border-primary);
		overflow: hidden;
	}

	.wrap:has(#input:focus) {
		box-shadow: var(--cz-focus-ring);
	}

	:host([invalid]) .wrap {
		box-shadow: 0 0 0 1px var(--cz-color-border-error);
	}

	:host([invalid]) .wrap:has(#input:focus) {
		box-shadow: var(--cz-focus-ring-error);
	}

	.control {
		flex: 1;
		position: relative;
	}

	/* === Input === */

	#input {
		box-sizing: border-box;
		margin: 0;
		outline: none;
		border: none;
		width: 100%;
		display: block;
		background: transparent;
		line-height: inherit;
		font-size: inherit;
		font-family: inherit;
		resize: none;
		color: var(--cz-color-text-primary);
		padding-block: calc(var(--cz-spacing) * 2);
		padding-inline: calc(var(--cz-spacing) * 3);
	}

	#input::placeholder {
		color: var(--cz-color-text-placeholder);
	}

	#input::-webkit-inner-spin-button {
		z-index: 1;
	}

	/* === Label === */

	label {
		position: relative;
		font-size: var(--cz-text-sm);
		color: var(--cz-color-text-secondary);
	}

	/* === Hint & Error === */

	.hint {
		font-size: var(--cz-text-xs);
		color: var(--cz-color-text-tertiary);
		position: absolute;
		bottom: calc(var(--cz-spacing) * -6);
	}

	.error {
		font-size: var(--cz-text-xs);
		position: absolute;
		bottom: calc(var(--cz-spacing) * -6);
	}

	/* === Tooltip (fluid error indicator) === */

	cosmoz-tooltip {
		display: flex;
		align-items: center;
		margin-right: calc(var(--cz-spacing) * 2);
	}

	:host([invalid]) cosmoz-tooltip {
		color: var(--cz-color-text-error);
	}

	:host([variant='inline']) cosmoz-tooltip {
		display: none;
	}

	/* === Slots === */

	.wrap:has(#input:not(:placeholder-shown)) {
		slot[name='suffix']::slotted(*),
		slot[name='prefix']::slotted(*) {
			transform: translateY(var(--label-translate-y));
		}
	}

	/* === Variant: inline === */
	:host([variant='inline']) {
		margin-bottom: 0;
	}

	:host([variant='inline']) .wrap {
		margin-top: calc(var(--cz-spacing) * 2.5);
	}

	:host([variant='inline']) #input {
		padding-inline: 0;
	}

	:host([variant='inline']) #input::placeholder {
		color: transparent;
	}

	:host([variant='inline']) .wrap {
		border-radius: 0;
		box-shadow: none;
		padding-inline: 0;
	}

	:host([variant='inline']) .wrap:has(#input:focus) {
		box-shadow: none;
	}

	:host([variant='inline']) .hint,
	:host([variant='inline']) .error {
		display: none;
	}
	:host([variant='inline'][disabled]) label {
		color: var(--cz-color-text-disabled);
		opacity: 0.5;
		cursor: not-allowed;
	}
	:host([variant='inline']) label {
		position: absolute;
		top: 25%;
		left: 0;
		width: 100%;
		transform-origin: left;
		transition:
			transform 0.25s,
			width 0.25s;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		z-index: 1;
	}

	:host([variant='inline']:focus-within) label,
	:host([variant='inline'][has-value]) label {
		transform: translateY(-75%) scale(0.85);
	}

	:host([variant='inline']) {
		slot[name='suffix']::slotted(*),
		slot[name='prefix']::slotted(*) {
			transform: translateY(0);
		}
	}

	/* === Variant: cell === */

	:host([variant='cell']) {
		margin-bottom: 0;
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
	}

	:host([variant='cell']) .wrap:has(#input) {
		border: 0.5px solid var(--cz-color-bg-quaternary);
		border-radius: 0;
		box-shadow: none;
	}

	:host([variant='cell']) .wrap:has(#input:focus) {
		background: var(--cz-color-bg-quaternary);
	}

	:host([variant='cell'][invalid]) .wrap:has(#input) {
		border-color: var(--cz-color-border-error);
		box-shadow: none;
	}

	:host([variant='cell'][invalid]) .wrap:has(#input:focus) {
		background: var(--cz-color-bg-error);
		border: 0.5px solid transparent;
	}

	:host([variant='cell']) label {
		display: none;
	}

	:host([variant='cell']) .error {
		left: calc(var(--cz-spacing) * 3);
		bottom: 50%;
		transform: translateY(50%);
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		max-width: calc(100% - calc(var(--cz-spacing) * 6));
	}

	:host([variant='cell']:focus-within) .error,
	:host([variant='cell'][has-value]) .error {
		visibility: hidden;
	}

	/* === No spinner === */

	:host([no-spinner]) #input::-webkit-inner-spin-button {
		display: none;
	}
	:host([no-spinner]) #input {
		-moz-appearance: textfield;
		appearance: textfield;
	}

	/* === Autosize === */

	:host([autosize]) {
		width: min-content;
	}
	:host([autosize]) #input {
		--_pad: calc(var(--cz-spacing) * 12);
		min-width: calc(2ch + var(--_pad));
		width: calc(var(--chars) + var(--_pad));
	}
	:host([autosize]) .control {
		max-width: 100%;
	}

	:host([autosize][type='number']) #input {
		--width: calc(var(--chars) + 0.25em);
	}
	:host([autosize][type='number']:not([no-spinner])) #input {
		width: calc(var(--width) + 15px + var(--_pad));
		min-width: calc(2ch + 0.25em + 15px + var(--_pad));
	}
	:host([autosize][type='number'][no-spinner]) #input {
		width: calc(var(--width) + var(--_pad));
		min-width: calc(2ch + 0.25em + var(--_pad));
	}
	slot[name='prefix']::slotted(*) {
		padding-inline-start: calc(var(--cz-spacing) * 2);
	}

	slot[name='suffix']::slotted(*) {
		padding-inline-end: calc(var(--cz-spacing) * 2);
	}
`,go=s=>T(()=>{if(s==null)return;const e=new RegExp(s,"u");return t=>{!t.defaultPrevented&&t.data&&!e.test(t.data)&&t.preventDefault()}},[s]),mo=se(class extends te{values;constructor(s,e,t,n){super(s,e),Object.assign(e.host,t),this.values=n}update(s,e){this.hasChanged(e)&&(this.values=e,Object.assign(this.state.host,s))}hasChanged(s=[]){return s.some((e,t)=>this.values[t]!==e)}}),bo=/([A-Z])/gu,Ft=(s,e,t)=>{s[e]=t,s.dispatchEvent(new CustomEvent(e.replace(bo,"-$1").toLowerCase()+"-changed",{detail:{value:t}}))},gs=s=>{const e=U(void 0),t=_(l=>e.current=l,[]),n=s.shadowRoot,o=_(l=>s.dispatchEvent(new Event(l.type,{bubbles:l.bubbles})),[]),i=_(l=>Ft(s,"value",l.target.value),[]),r=_(l=>Ft(s,"focused",l.type==="focus"),[]),a=_(()=>{const l=e.current?.checkValidity();return s.toggleAttribute("invalid",!l),l},[]);return mo({validate:a},[a]),k(()=>{const l=c=>{c.composedPath()[0]?.closest?.("input, textarea")||(c.preventDefault(),e.current?.focus())};return n.addEventListener("mousedown",l),()=>n.removeEventListener("mousedown",l)},[]),{onChange:o,onFocus:r,onInput:i,onRef:t}},vo=({placeholder:s})=>s||" ",yo=(s,e)=>e??(s==="date"?"9999-12-31":void 0),xo=["type","variant","hint","compact","required","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...ps],wo=s=>{const{type:e="text",pattern:t,allowedPattern:n,autocomplete:o,value:i,readonly:r,disabled:a,min:l,max:c,step:u,maxlength:h,required:d}=s,{onChange:p,onFocus:g,onInput:f,onRef:m}=gs(s),v=go(n);return s.toggleAttribute("has-value",!!i),hs(b`
			<input
				${re(m)}
				style="--chars: ${i?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${e}
				pattern=${x(t)}
				autocomplete=${x(o)}
				placeholder=${vo({placeholder:s.placeholder})}
				?readonly=${r}
				aria-disabled=${a?"true":"false"}
				?disabled=${a}
				?required=${d}
				.value=${Ke(i??"")}
				maxlength=${x(h)}
				@beforeinput=${v}
				@input=${f}
				@change=${p}
				@focus=${g}
				@blur=${g}
				min=${x(l)}
				max=${x(yo(e,c))}
				step=${x(u)}
			/>
		`,s)};customElements.define("cosmoz-input",I(wo,{observedAttributes:xo,styleSheets:[Ce(fs)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Vt=s=>{s.style.height="",s.style.height=`${s.scrollHeight}px`},zo=(s,e=0)=>{if(e>0){const t=s.getAttribute("rows")??"",n=s.style.height;s.style.height="",s.setAttribute("rows",e),s.style.maxHeight=s.getBoundingClientRect().height+"px",s.style.height=n,s.setAttribute("rows",t)}},$o=s=>{const{value:e,maxRows:t}=s,n=T(()=>()=>s.shadowRoot.querySelector("#input"),[]);k(()=>zo(n(),t),[t,n]),k(()=>Vt(n()),[n,e]),k(()=>{const o=n(),i=new ResizeObserver(()=>requestAnimationFrame(()=>Vt(o)));return i.observe(o),()=>i.unobserve(o)},[n])},_o=["rows","placeholder","label","hint","required",...ps],So=s=>{const{autocomplete:e,value:t,placeholder:n,readonly:o,disabled:i,rows:r,cols:a,maxlength:l}=s,{onChange:c,onFocus:u,onInput:h,onRef:d}=gs(s);return $o(s),hs(b`
			<textarea id="input" part="input"
				${re(d)}
				autocomplete=${x(e)}
				placeholder=${n||" "}
				rows=${r??1} cols=${x(a)}
				?readonly=${o} ?aria-disabled=${i} ?disabled=${i}
				.value=${Ke(t??"")} maxlength=${x(l)} @input=${h}
				@change=${c} @focus=${u} @blur=${u}>`,s)};customElements.define("cosmoz-textarea",I(So,{observedAttributes:_o,styleSheets:[Ce(fs)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Co=s=>{const{label:e,value:t,disabled:n,error:o}=s,i=_(r=>s.dispatchEvent(new CustomEvent("change",{detail:r.target.checked})),[]);return b`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${Ke(!!t)}
			?disabled=${n}
			@change=${i}
		/>
		${C(e,()=>b`<label for="toggle">${e}</label>`)}
		<slot name="suffix"></slot>
		${C(o,r=>b`<div class="failure">${r}</div>`)} `},ko=N`
	.toggle {
		appearance: none;
		width: calc(var(--cz-spacing) * 9);
		height: calc(var(--cz-spacing) * 4.5);
		display: inline-block;
		position: relative;
		border-radius: var(--cz-radius-3xl);
		overflow: hidden;
		outline: none;
		border: none;
		cursor: pointer;
		background: var(--cz-color-bg-quaternary);
		transition: background-color ease 0.25s;
		margin: 0;
	}
	.toggle::before {
		content: '';
		display: block;
		position: absolute;
		z-index: 2;
		width: calc(var(--cz-spacing) * 3.5);
		height: calc(var(--cz-spacing) * 3.5);
		background: var(--cz-color-brand-25);
		left: calc(var(--cz-spacing) * 0.5);
		top: calc(var(--cz-spacing) * 0.5);
		border-radius: var(--cz-radius-full);
		transition: all cubic-bezier(0.3, 1.5, 0.7, 1) 0.25s;
	}
	.toggle:checked {
		background: var(--cz-color-bg-brand-solid);
	}
	.toggle:checked::before {
		left: calc(var(--cz-spacing) * 5);
	}
	label {
		padding-left: calc(var(--cz-spacing) * 4);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		color: var(--cz-color-text-secondary);
		cursor: pointer;
		user-select: none;
	}

	.failure {
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		color: var(--cz-color-text-secondary);
	}
	.toggle[disabled] {
		opacity: 0.6;
	}
`,Eo=N`
	:host {
		display: block;
	}

	:host > * {
		vertical-align: middle;
		line-height: 0px;
	}

	::slotted(*) {
		margin-left: calc(var(--cz-spacing) * 1);
	}
`;customElements.define("cosmoz-toggle",I(Co,{styleSheets:[Eo,ko],observedAttributes:["label","disabled","error"]}));const Lo=s=>{if(!s||s===1/0)return;if(typeof s=="number")return s;const e=parseFloat(s.replace(/[\s]/gu,"").replace(/^−/gu,"-").replace(/[,.]/gu,".").replace(/[.](?=.*[.])/gu,""));if(!isNaN(e))return e},Oo=/^[0-9.,e-]+$/u,Ro=s=>s==null||s===""||Number.isNaN(s)||Array.isArray(s)&&s.length<1,jt=s=>Ro(s)&&me("Required"),Ao=Symbol("error"),To=(s,e,t,n,o)=>{for(const i of Q(s)){const r=i(e,t,n,o);if(r)return r}},Po=(s,e,t)=>s.validate&&To(s.validate,e[s.path??s.id],e,s,t),No=(s,e,t)=>{const n=s.map(o=>({...o,error:Po(o,e,t)}));return{fields:n,invalid:n.some(({error:o})=>!!o)}},Io=(s,e,t)=>e?No(s,e,t):{fields:s,invalid:!0},Mo=(s,e,t,n)=>{n!=null&&Object.is(n[e],t)||s({[e]:t})},Fo=s=>Array.isArray(s)?s.some(e=>e===jt):s===jt,dt=s=>({field:e,value:t,values:n,onChange:o,context:i,...r})=>{const a=(c,u)=>(e.onChange??Mo)(h=>o(h,u),e.path??e.id,It(e.value?.[1],c,n,e,i),n);if(!F(e.hidden,t,n,e,i))return s({...e,...r,context:i,values:n,required:Fo(e.validate),label:F(e.label,t,n,e,i),placeholder:F(e.placeholder,t,n,e,i),disabled:F(e.disabled,t,n,e,i),warning:F(e.warning,t,n,e,i),prefix:F(e.prefix,t,n,e,i),suffix:F(e.suffix,t,n,e,i),value:It(e.value?.[0],t,n,e,i),onFocus:e.onFocus?.(a,t,n,e),onChange:a})},Vo=s=>C(s,()=>b`<span slot="prefix">${s}</span>`),jo=s=>C(s,()=>b`<span slot="suffix">${s}</span>`),Do=(s,e="suffix")=>C(s,()=>no({slot:e,title:s,width:"22",height:"22",styles:"color: var(--cz-color-text-warning); vertical-align: middle"})),Bo=(s,e="suffix")=>C(s,()=>ro({slot:e,title:s,width:"22",height:"22",styles:"color: var(--cz-color-text-primary); vertical-align: middle; cursor: help"})),Uo=({prefix:s,suffix:e,warning:t,description:n})=>[Vo(s),jo(e),Do(t),Bo(n)],ms=s=>{const{value:e,values:t,onFocus:n,onInput:o,context:i,...r}=s,{id:a,variant:l,type:c="text",label:u,placeholder:h,error:d,prefix:p,suffix:g,warning:f,allowedPattern:m,step:v,disabled:z,required:E,maxlength:S,min:L,max:R,autosize:$,noSpinner:A,autocomplete:P,title:H,description:j,hint:de}=r;return b`<cosmoz-input
		class="input input-common input-${c}"
		variant=${x(l)}
		hint=${x(de)}
		name=${a}
		type=${c}
		?autosize=${$}
		?disabled=${z}
		?required=${E}
		?invalid=${!!d}
		?no-spinner=${!!A}
		.placeholder=${h}
		.errorMessage=${d}
		.allowedPattern=${m}
		.step=${v}
		.label=${u}
		.value=${e}
		title=${x((d??H)||void 0)}
		maxlength=${x(S)}
		min=${x(F(L,e,t,r,i))}
		max=${x(F(R,e,t,r,i))}
		autocomplete=${x(P)}
		@focus=${n}
		@input=${o}
		>${Uo({prefix:p,suffix:g,warning:f,description:j})}</cosmoz-input
	>`},bs=dt(({onChange:s,...e})=>ms({...e,onInput:t=>s(t.target.value)})),kr=dt(({onChange:s,allowedPattern:e=Oo,...t})=>ms({...t,type:"number",allowedPattern:e,onInput:n=>s(Lo(n.target.value))})),Ho=({field:s,values:e,...t})=>{const n=(t.touched&&(e?.[Ao]?.[s.id]??s.error))??!1,o=e?.[s.path??s.id];return(s.input??bs)({...t,error:n,value:o,field:s,values:e})},vs=({fields:s,...e})=>ds(s??[],({id:t})=>t,t=>Ho({field:t,fields:s,...e})),Ko=({fields:s,selector:e=""})=>(s??[]).map(({id:t,styles:n})=>n?`${e}[name="${String(t)}"] { ${Object.entries(n).map(([o,i])=>`${o}:${i}`).join(";")} }`:"").join(`
`);class qe extends Event{constructor(e){super(qe.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}qe.eventName="rangeChanged";class Ye extends Event{constructor(e){super(Ye.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}Ye.eventName="visibilityChanged";class We extends Event{constructor(){super(We.eventName,{bubbles:!1})}}We.eventName="unpinned";class qo{constructor(e){this._element=null;const t=e??window;this._node=t,e&&(this._element=e)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class Yo extends qo{constructor(e,t){super(t),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const n=this._node;this._originalScrollTo=n.scrollTo,this._originalScrollBy=n.scrollBy,this._originalScroll=n.scroll,this._attach(e)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(e,t){const n=typeof e=="number"&&typeof t=="number"?{left:e,top:t}:e;this._scrollTo(n)}scrollBy(e,t){const n=typeof e=="number"&&typeof t=="number"?{left:e,top:t}:e;n.top!==void 0&&(n.top+=this.scrollTop),n.left!==void 0&&(n.left+=this.scrollLeft),this._scrollTo(n)}_nativeScrollTo(e){this._originalScrollTo.bind(this._element||window)(e)}_scrollTo(e,t=null,n=null){this._end!==null&&this._end(),e.behavior==="smooth"?(this._setDestination(e),this._retarget=t,this._end=n):this._resetScrollState(),this._nativeScrollTo(e)}_setDestination(e){let{top:t,left:n}=e;return t=t===void 0?void 0:Math.max(0,Math.min(t,this.maxScrollTop)),n=n===void 0?void 0:Math.max(0,Math.min(n,this.maxScrollLeft)),this._destination!==null&&n===this._destination.left&&t===this._destination.top?!1:(this.__destination={top:t,left:n,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(e){this._destination&&this._setDestination(e)&&this._nativeScrollTo(this._destination)}managedScrollTo(e,t,n){return this._scrollTo(e,t,n),this._updateManagedScrollTo}correctScrollError(e){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(e),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:e,scrollLeft:t}=this;let{top:n,left:o}=this._destination;n=Math.min(n||0,this.maxScrollTop),o=Math.min(o||0,this.maxScrollLeft);const i=Math.abs(n-e),r=Math.abs(o-t);i<1&&r<1&&(this._end&&this._end(),this._resetScrollState())}}detach(e){return this._clients.delete(e),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(e){this._clients.add(e),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let Dt=typeof window<"u"?window.ResizeObserver:void 0;const at=Symbol("virtualizerRef"),Ae="virtualizer-sizer";let Bt;class Wo{constructor(e){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!e)throw new Error("Virtualizer constructor requires a configuration object");if(e.hostElement)this._init(e);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(e){Array.isArray(e)&&e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}_init(e){this._isScroller=!!e.scroller,this._initHostElement(e);const t=e.layout||{};this._layoutInitialized=this._initLayout(t)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new Dt(()=>this._hostElementSizeChanged()),this._childrenRO=new Dt(this._childrenSizeChanged.bind(this))}_initHostElement(e){const t=this._hostElement=e.hostElement;this._applyVirtualizerStyles(),t[at]=this}connected(){this._initObservers();const e=this._isScroller;this._clippingAncestors=Zo(this._hostElement,e),this._scrollerController=new Yo(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(e=>{e.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(e),this._hostElementRO.observe(e)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(e=>this._childrenRO.observe(e)),this._scrollEventListeners.forEach(e=>e.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(e=>e.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const t=this._hostElement.style;t.display=t.display||"block",t.position=t.position||"relative",t.contain=t.contain||"size layout",this._isScroller&&(t.overflow=t.overflow||"auto",t.minHeight=t.minHeight||"150px")}_getSizer(){const e=this._hostElement;if(!this._sizer){let t=e.querySelector(`[${Ae}]`);t||(t=document.createElement("div"),t.setAttribute(Ae,""),e.appendChild(t)),Object.assign(t.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),t.textContent="&nbsp;",t.setAttribute(Ae,""),this._sizer=t}return this._sizer}async updateLayoutConfig(e){await this._layoutInitialized;const t=e.type||Bt;if(typeof t=="function"&&this._layout instanceof t){const n={...e};return delete n.type,this._layout.config=n,!0}return!1}async _initLayout(e){let t,n;if(typeof e.type=="function"){n=e.type;const o={...e};delete o.type,t=o}else t=e;n===void 0&&(Bt=n=(await Bs(()=>import("./flow-BqIEBwW6.js"),[],import.meta.url)).FlowLayout),this._layout=new n(o=>this._handleLayoutMessage(o),t),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const e=window.performance.now(),t=e-this._benchmarkStart,o=performance.getEntriesByName("uv-virtualizing","measure").filter(i=>i.startTime>=this._benchmarkStart&&i.startTime<e).reduce((i,r)=>i+r.duration,0);return this._benchmarkStart=null,{timeElapsed:t,virtualizationTime:o}}return null}_measureChildren(){const e={},t=this._children,n=this._measureChildOverride||this._measureChild;for(let o=0;o<t.length;o++){const i=t[o],r=this._first+o;(this._itemsChanged||this._toBeMeasured.has(i))&&(e[r]=n.call(this,i,this._items[r]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){const{width:t,height:n}=e.getBoundingClientRect();return Object.assign({width:t,height:n},Jo(e))}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(e){this._scrollSize=e.scrollSize,this._adjustRange(e.range),this._childrenPos=e.childPositions,this._scrollError=e.scrollError||null;const{_rangeChanged:t,_itemsChanged:n}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(t||n)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(e=>this._childrenRO.observe(e)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(e){console.warn("Error measuring performance data: ",e)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(e){e.type==="scroll"?(e.currentTarget===window||this._clippingAncestors.includes(e.currentTarget))&&this._handleScrollEvent():console.warn("event not handled",e)}_handleLayoutMessage(e){e.type==="stateChanged"?this._updateDOM(e):e.type==="visibilityChanged"?(this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._notifyVisibility()):e.type==="unpinned"&&this._hostElement.dispatchEvent(new We)}get _children(){const e=[];let t=this._hostElement.firstElementChild;for(;t;)t.hasAttribute(Ae)||e.push(t),t=t.nextElementSibling;return e}_updateView(){const e=this._hostElement,t=this._scrollerController?.element,n=this._layout;if(e&&t&&n){let o,i,r,a;const l=e.getBoundingClientRect();o=0,i=0,r=window.innerHeight,a=window.innerWidth;const c=this._clippingAncestors.map(v=>v.getBoundingClientRect());c.unshift(l);for(const v of c)o=Math.max(o,v.top),i=Math.max(i,v.left),r=Math.min(r,v.bottom),a=Math.min(a,v.right);const u=t.getBoundingClientRect(),h={left:l.left-u.left,top:l.top-u.top},d={width:t.scrollWidth,height:t.scrollHeight},p=o-l.top+e.scrollTop,g=i-l.left+e.scrollLeft,f=Math.max(0,r-o),m=Math.max(0,a-i);n.viewportSize={width:m,height:f},n.viewportScroll={top:p,left:g},n.totalScrollSize=d,n.offsetWithinScroller=h}}_sizeHostElement(e){const n=e&&e.width!==null?Math.min(82e5,e.width):0,o=e&&e.height!==null?Math.min(82e5,e.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${n}px, ${o}px)`;else{const i=this._hostElement.style;i.minWidth=n?`${n}px`:"100%",i.minHeight=o?`${o}px`:"100%"}}_positionChildren(e){e&&e.forEach(({top:t,left:n,width:o,height:i,xOffset:r,yOffset:a},l)=>{const c=this._children[l-this._first];c&&(c.style.position="absolute",c.style.boxSizing="border-box",c.style.transform=`translate(${n}px, ${t}px)`,o!==void 0&&(c.style.width=o+"px"),i!==void 0&&(c.style.height=i+"px"),c.style.left=r===void 0?null:r+"px",c.style.top=a===void 0?null:a+"px")})}async _adjustRange(e){const{_first:t,_last:n,_firstVisible:o,_lastVisible:i}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==t||this._last!==n,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==o||this._lastVisible!==i}_correctScrollError(){if(this._scrollError){const{scrollTop:e,scrollLeft:t}=this._scrollerController,{top:n,left:o}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:e-n,left:t-o})}}element(e){return e===1/0&&(e=this._items.length-1),this._items?.[e]===void 0?void 0:{scrollIntoView:(t={})=>this._scrollElementIntoView({...t,index:e})}}_scrollElementIntoView(e){if(e.index>=this._first&&e.index<=this._last)this._children[e.index-this._first].scrollIntoView(e);else if(e.index=Math.min(e.index,this._items.length-1),e.behavior==="smooth"){const t=this._layout.getScrollIntoViewCoordinates(e),{behavior:n}=e;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(t,{behavior:n}),()=>this._layout.getScrollIntoViewCoordinates(e),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=e}else this._layout.pin=e}_checkScrollIntoViewTarget(e){const{index:t}=this._scrollIntoViewTarget||{};t&&e?.has(t)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new qe({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new Ye({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((e,t)=>{this._layoutCompleteResolver=e,this._layoutCompleteRejecter=t})),this._layoutCompletePromise}_rejectLayoutCompletePromise(e){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(e),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(e){if(this._layout?.measureChildren){for(const t of e)this._toBeMeasured.set(t.target,t.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function Jo(s){const e=window.getComputedStyle(s);return{marginTop:Te(e.marginTop),marginRight:Te(e.marginRight),marginBottom:Te(e.marginBottom),marginLeft:Te(e.marginLeft)}}function Te(s){const e=s?parseFloat(s):NaN;return Number.isNaN(e)?0:e}function Ut(s){if(s.assignedSlot!==null)return s.assignedSlot;if(s.parentElement!==null)return s.parentElement;const e=s.parentNode;return e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host||null}function Go(s,e=!1){const t=[];let n=e?s:Ut(s);for(;n!==null;)t.push(n),n=Ut(n);return t}function Zo(s,e=!1){let t=!1;return Go(s,e).filter(n=>{if(t)return!1;const o=getComputedStyle(n);return t=o.position==="fixed",o.overflow!=="visible"})}const Qo=s=>s,Xo=(s,e)=>b`${e}: ${JSON.stringify(s,null,2)}`;class ei extends ct{constructor(e){if(super(e),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(t,n)=>Xo(t,n+this._first),this._keyFunction=(t,n)=>Qo(t,n+this._first),this._items=[],e.type!==Z.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(e){e&&this._setFunctions(e);const t=[];if(this._first>=0&&this._last>=this._first)for(let n=this._first;n<=this._last;n++)t.push(this._items[n]);return ds(t,this._keyFunction,this._renderItem)}update(e,[t]){this._setFunctions(t);const n=this._items!==t.items;return this._items=t.items||[],this._virtualizer?this._updateVirtualizerConfig(e,t):this._initialize(e,t),n?B:this.render()}async _updateVirtualizerConfig(e,t){if(!await this._virtualizer.updateLayoutConfig(t.layout||{})){const o=e.parentNode;this._makeVirtualizer(o,t)}this._virtualizer.items=this._items}_setFunctions(e){const{renderItem:t,keyFunction:n}=e;t&&(this._renderItem=(o,i)=>t(o,i+this._first)),n&&(this._keyFunction=(o,i)=>n(o,i+this._first))}_makeVirtualizer(e,t){this._virtualizer&&this._virtualizer.disconnected();const{layout:n,scroller:o,items:i}=t;this._virtualizer=new Wo({hostElement:e,layout:n,scroller:o}),this._virtualizer.items=i,this._virtualizer.connected()}_initialize(e,t){const n=e.parentNode;n&&n.nodeType===1&&(n.addEventListener("rangeChanged",o=>{this._first=o.first,this._last=o.last,this.setValue(this.render())}),this._makeVirtualizer(n,t))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}}const ti=ce(ei);ue`
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
`;const si=()=>G,ni=(s,e)=>Promise.resolve(s).then(e,e),Er=({error:s,...e})=>[vs(e),C(s,t=>b`<div class="failure">${t.message}</div>`)],oi=s=>Se(s?.then(si,e=>b`<div class="failure">${e.message}</div>`),G),ii=({save$:s,progress:e,...t})=>{const n=({onSave:o,onClick:i=o,title:r,disabled:a,progress:l,content:c=G,slot:u})=>b` <cosmoz-button
			class="button save"
			slot=${x(u)}
			?disabled=${a}
			?data-progress=${l}
			@click=${h=>(h.stopPropagation(),i())}
		>
			${c} ${r}
		</cosmoz-button>`;return Se(ni(s,()=>n(t)),n({...t,disabled:!0,progress:!0,content:b`<cosmoz-spinner></cosmoz-spinner> ${C(e,o=>o.join("/"))}`}))},ri=ue`
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

	.file::-webkit-file-upload-button:hover,
	.file::file-selector-button:hover {
		background: var(--cosmoz-button-hover-bg-color, #3a3f44);
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
`,ai=()=>{let s=null;return{run:async(e,t,n,o)=>{s?.abort(),s=new AbortController;const i={update:n,signal:s.signal,index:o?.index,context:o?.context};try{return await e(t,i)}catch(r){if(r instanceof DOMException&&r.name==="AbortError")return null;throw r}},cancel:()=>{s?.abort(),s=null}}},li=(s,e)=>s.length!==e.length||s.some((t,n)=>!Object.is(t,e[n])),ci=s=>{console.error("[cosmoz-form] async rule error:",s)},ui=(s,e,t)=>{const n=ci,o=U(new Map),i=U(new Map),r=U(0),[a,l]=X(!1);return k(()=>()=>{for(const c of o.current.values())c.cancel()},[]),k(()=>{if(!e?.length)return;const c=s.context;for(const u of e){const[h,d,p=ai]=u;o.current.has(u)||o.current.set(u,p());const g=d(s.values,void 0,c),f=i.current.get(u);if(f!=null&&!li(g,f))continue;i.current.set(u,g);const m=o.current.get(u);r.current++,r.current===1&&l(!0),m.run(h,s.values,v=>s.onChange(v,!1),{context:c}).then(v=>{v!==null&&s.onChange(v,!1)}).catch(v=>n(v,u)).finally(()=>{r.current--,r.current===0&&l(!1)})}},[s.values,s.context]),{...s,processing:a}},lt=Symbol("touched");function Ie(s,e=!0){if(s==null)return;const t=s;return e?t[lt]=!0:delete t[lt],s}const ys=s=>Ie(s,!1),Ht=s=>!!s?.[lt],di=(s,e)=>!e||s.some((t,n)=>!Object.is(e[n],t)),ye=({oldItem:s,newItem:e,rules:t,index:n,oldIndex:o=n,context:i,oldContext:r=i})=>t?t.reduce((a,[l,c])=>s&&c&&!di(c(a,n,i),c(s,o,r))?a:{...a,...l(a,s,n,o,i)},e):e,hi=(s,e,t,n,o)=>{const[,i]=s,r=U(void 0);return k(()=>{const a=r.current;r.current=n,a!==void 0&&e(([l,c])=>[l,Ie(ye({oldItem:c,newItem:c,rules:t,context:n,oldContext:a}),Ht(c))])},[n]),{values:i,context:n??{},onReset:_(()=>e(([a])=>[a,a]),[e]),onValues:_((a,l=!0)=>e(([c,u])=>[c,Ie(ye({oldItem:u,newItem:F(a,u),rules:t,context:n}),l)]),[t,e,n]),onChange:_((a,l=!0)=>e(([c,u])=>[c,Ie(ye({oldItem:u,newItem:{...u,...F(a,u)},rules:t,context:n}),l)]),[t,e,n]),load:_((a,l)=>{if(!a){e([a,a]);return}const c=ys(ye({oldItem:void 0,newItem:a,rules:l??t,context:n}));e([c,c])},[t,e,n]),touched:T(()=>Ht(i)||(o??!1),[i,o])}},pi=(s,e,t)=>ys(ye({oldItem:void 0,newItem:s,rules:e,context:t})),xs=(s,e=[])=>{const t=s.filter(n=>n?.rules!=null).flatMap(n=>n?.rules);return[...e,...t]},fi=(s,e,{fields:t,rules:n,context:o,touched:i})=>{const r=T(()=>F(t)??[],[t]),a=T(()=>xs(r,n),[r,n]),l=hi(s,e,a,o,i),{values:c}=l;return{...T(()=>Io(r,c,o),[r,c,o]),...l}},gi=s=>{const[e,t]=X(()=>{const n=F(s.fields)??[],o=xs(n,s.rules),i=pi(s.initial,o,s.context);return[i,i]});return fi(e,t,s)};function mi({fields:s,initial:e,rules:t,asyncRules:n,context:o,onSave:i,allowEmpty:r}){const a=gi({fields:s,initial:e,rules:t,context:o}),{processing:l}=ui(a,n),{values:c,invalid:u}=a,[h,d]=X(),[p,g]=X(),f=c==null||c===e,m=a.fields?.length>0&&!(f&&r)&&(f||u);return{...a,save$:h,onSave:_(()=>d(i?.(c,e,g)),[i,c,e]),disabled:m,processing:l,progress:p}}const bi=ue`
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
		color: var(--cz-color-text-error);
		align-self: center;
		flex: 1;
	}
	cz-spinner {
		align-self: center;
	}
`,ws=s=>{const{description:e,auto:t,uncancelable:n,hideCancelButton:o,saveText:i=me("OK")}=s,{onSave:r,disabled:a,save$:l,progress:c,...u}=mi(s);return k(()=>{t&&r()},[t]),b` <style>
			${ri} ${Ko(u)}${bi}
		</style>
		${C(e,()=>b`<p class="description">${e}</p>`)}
		<div class="form" part="form">${vs(u)}</div>
		<div class="buttons">
			${oi(l)}
			${ii({save$:l,onSave:r,disabled:a,title:i,progress:c})}
			${C(!o,()=>b`<button class="button" value="cancel" ?disabled=${n}>
						${me("Cancel")}
					</button>`)}
		</div>`};customElements.define("cosmoz-form-dialog",ut(ws,{observedAttributes:["allow-empty"]}));customElements.define("cosmoz-form-dialog-next",ut(ws,{observedAttributes:["allow-empty"]}));const vi={},Kt=ce(class extends Ee{constructor(){super(...arguments),this.ot=vi}render(s,e){return e()}update(s,[e,t]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((n,o)=>n===this.ot[o]))return B}else if(this.ot===e)return B;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,t)}}),yi=({host:s,popoverRef:e,disabled:t,openOnHover:n,openOnFocus:o,open:i,close:r})=>{const a=U(),l=()=>clearTimeout(a.current),c=()=>{clearTimeout(a.current),a.current=setTimeout(()=>{const h=e.current;n&&(s.matches(":hover")||h?.matches(":hover"))||s.matches(":focus-within")||h?.matches(":focus-within")||r()},100)},u=()=>{t||(l(),i())};return k(()=>{if(!(!n||t))return s.addEventListener("pointerenter",u),s.addEventListener("pointerleave",c),()=>{l(),s.removeEventListener("pointerenter",u),s.removeEventListener("pointerleave",c)}},[n,t,s]),k(()=>{if(!(!o||t))return s.addEventListener("focusin",u),s.addEventListener("focusout",c),()=>{l(),s.removeEventListener("focusin",u),s.removeEventListener("focusout",c)}},[o,t,s]),{scheduleClose:c,cancelClose:l}},xi=s=>{if(s.newState!=="open")return;const n=s.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const o of n){const i=o.matches("[autofocus]")?o:o.querySelector("[autofocus]");if(i instanceof HTMLElement){i.focus();break}}},wi=N`
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
`,zi=s=>{const{placement:e="bottom span-right",disabled:t,openOnHover:n,openOnFocus:o}=s,i=U(),[r,a]=ke("opened",!1),l=_(()=>{t||(a(!0),i.current?.showPopover())},[t]),c=_(()=>{a(!1),i.current?.hidePopover()},[]),u=_(()=>{if(t)return;i.current?.matches(":popover-open")?c():l()},[t]);k(()=>{const f=i.current;f&&(r?f.showPopover():f.hidePopover())},[r]),k(()=>{s.toggleAttribute("opened",!!r)},[r]);const{scheduleClose:h,cancelClose:d}=yi({host:s,popoverRef:i,disabled:t,openOnHover:n,openOnFocus:o,open:l,close:c}),p=o?l:u,g=_(f=>{xi(f),a(f.newState==="open"),s.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:f.newState,oldState:f.oldState,composed:!0}))},[]);return b`
		<slot name="button" @click=${p}></slot>
		<div
			popover
			style="position-area: ${e}"
			@toggle=${g}
			@select=${c}
			@focusout=${h}
			@focusin=${d}
			${re(f=>f&&(i.current=f))}
		>
			<slot></slot>
		</div>
	`};customElements.define("cosmoz-dropdown-next",I(zi,{styleSheets:[wi],observedAttributes:["placement","disabled","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const $i=(s,e)=>{if(!s||!e)return;const t=Object.keys(e);return Object.fromEntries(Object.keys(s).flatMap(n=>t.includes(n)?[]:[[n,void 0]]))};class _i extends Ee{_props;render(e){return B}update(e,[t]){return this._props!==t&&Object.assign(e.element,$i(this._props,t),this._props=t),B}}const Si=ce(_i),Ci=s=>{const e=ne(),t=T(()=>new CSSStyleSheet,[]);k(()=>{e.shadowRoot.adoptedStyleSheets=[...e.shadowRoot.adoptedStyleSheets,t]},[]),k(()=>{t.replaceSync(s)},[s])},ki="data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 1L5.20039 7.04766L1.66348 3.46152' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",Ei=N`
	:host {
		display: block;
		font-family: var(--cz-font-body);
		background: var(--cz-color-bg-primary);
		backdrop-filter: blur(16px) saturate(180%);
		-webkit-backdrop-filter: blur(16px) saturate(180%);
		border-radius: var(--cz-radius-md);
		box-shadow: 0 0 0 1px var(--cz-color-border-primary);
		text-transform: var(--cosmoz-autocomplete-listbox-text-transform, initial);
		overflow: hidden;
		padding-block: var(--cz-spacing);
	}
	.items {
		position: relative;
		overflow-y: auto;
		scrollbar-width: thin;
		contain: layout paint !important;
		padding-inline: calc(var(--cz-spacing) * 1.5);
	}
	:host(:focus-within) {
		outline: none;
		box-shadow: var(--cz-focus-ring);
	}
	.items:focus-visible {
		outline: none;
	}
	.item {
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-weight: var(--cz-font-weight-regular);
		box-sizing: border-box;
		border-radius: var(--cz-radius-sm);
		width: calc(100% - var(--cz-spacing) * 3);
		cursor: pointer;
		text-overflow: ellipsis;
		white-space: nowrap;
		transition: background 0.25s;
		color: var(--cz-color-text-primary);
		overflow: hidden;
		padding-inline: calc(var(--cz-spacing) * 2);
		margin-block: 1px;
	}

	.sizer {
		position: relative;
		visibility: hidden;
		opacity: 0;
		pointer-events: none;
		z-index: -1;
		height: 0;
		width: auto;
		padding: 0 calc(var(--cz-spacing) * 5);
		overflow: hidden;
		max-width: inherit;
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
	}

	:host(:not([multi])) .item[aria-selected] {
		background: rgb(
			from var(--cz-color-bg-brand-solid) r g b / calc(alpha * 0.25)
		);
	}

	:host([multi]) .item::before {
		content: '';
		font-size: 0;
		padding: calc(var(--cz-spacing) * 2);
		margin-right: calc(var(--cz-spacing) * 2);
		background: var(--cz-color-bg-tertiary);
		border: 1px solid var(--cz-color-bg-quaternary);
		border-radius: var(--cz-radius-xs);
		vertical-align: top;
	}

	:host([multi]) .item[aria-selected]::before {
		border-color: var(--cz-color-bg-brand-solid);
		/* prettier-ignore */
		background: url("${ki}") var(--cz-color-bg-brand-solid) no-repeat 50%;
	}

	[virtualizer-sizer]:not(.sizer) {
		line-height: 1;
	}
`,Li=({index:s,itemHeight:e,auto:t})=>N`
	${C(!t,()=>N`
			.item {
				line-height: ${e}px;
				height: ${e}px;
			}
		`)}
	.item[data-index='${s||"0"}'] {
		background: rgb(
			from var(--cz-color-bg-brand-solid) r g b / calc(alpha * 0.15)
		);
	}
	.item[data-index='${s||"0"}'][part~='error'] {
		background: var(--cz-color-bg-error);
	}
`,Oi=s=>{const e=s==="auto",[t,n]=X(e?40:s);return[t,o=>e?n(o):void 0]},zs=cn(()=>ge);customElements.define("cosmoz-keybinding-provider",zs.Provider);const ht=s=>{const e=T(()=>({}),[]);return T(()=>Object.assign(e,s),[e,...Object.values(s)])},$e=(s,e)=>{const t=rs(zs),n=ht(s);k(()=>t(n),e)},Ri=Symbol("listbox.navigate.up"),Ai=Symbol("listbox.navigate.down"),Ti=Symbol("listbox.select"),Pi=({onUp:s,onDown:e,onEnter:t})=>{const n=ne();$e({activity:Ri,callback:s,element:()=>n},[]),$e({activity:Ai,callback:e,element:()=>n},[]),$e({activity:Ti,callback:t,element:()=>n},[])},Ni=({items:s,onSelect:e,defaultIndex:t=0})=>{const[n,o]=X({index:t}),{index:i}=n,{length:r}=s;return k(()=>{o({index:n.index<0?t:Math.min(n.index,s.length-1),scroll:!0})},[s,t]),Pi({onUp:_(()=>o(a=>({index:a.index>0?a.index-1:r-1,scroll:!0})),[r]),onDown:_(()=>o(a=>({index:a.index<r-1?a.index+1:0,scroll:!0})),[r]),onEnter:_(()=>i>-1&&i<r&&e?.(s[i],i),[i,s,e])}),{position:n,highlight:_(a=>o({index:a}),[]),select:_(a=>e?.(a),[e])}},Ii=(s,e)=>e?t=>t!=null&&Q(s).find(n=>n[e]===t[e]):t=>t!=null&&Q(s).includes(t),Mi=(s,e)=>{if(!e||!s)return s;const t=s.toLowerCase().indexOf(e.toLowerCase());if(t<0)return s;const n=t+e.length;return[s.slice(0,t),b`<mark>${s.slice(t,n)}</mark>`,s.slice(n)]},Fi=(s=Ve)=>(e,t,{highlight:n,select:o,textual:i=Ve,query:r,isSelected:a})=>{const l=i(e),c=Mi(l,r),u=s(c,e,t);return b`<div
				class="item"
				role="option"
				part="option"
				?aria-selected=${a(e)}
				data-index=${t}
				@mouseenter=${()=>n(t)}
				@click=${()=>o(e)}
				@mousedown=${h=>h.preventDefault()}
				title=${l}
			>
				${u}
			</div>
			<div class="sizer" virtualizer-sizer>${u}</div>`},Vi=({itemRenderer:s=Fi(),...e})=>{const t=ht(e);return _((n,o)=>s(n,o,t),[t,s])},ji=["query","items","onSelect","textual","anchor","itemHeight","itemLimit","itemRenderer","defaultIndex","value","valueProperty","loading"],Di=({value:s,valueProperty:e,items:t,onSelect:n,defaultIndex:o,query:i,textual:r,itemRenderer:a,itemHeight:l=40,itemLimit:c=5})=>{const u=T(()=>Ii(s,e),[s,e]),h=T(()=>t.slice(),[t,u]),{position:d,highlight:p,select:g}=Ni({items:h,onSelect:n,defaultIndex:isNaN(o)?void 0:Number(o)}),[f,m]=Oi(l);return{position:d,items:h,height:Math.min(c,h.length)*f,highlight:p,select:g,itemHeight:f,setItemHeight:m,renderItem:Vi({itemRenderer:a,items:h,position:d,highlight:p,select:g,textual:r,query:i,isSelected:u})}},qt=ge,Bi=s=>{const e=U(void 0),{position:t,items:n,renderItem:o,height:i,itemHeight:r,setItemHeight:a}=Di(s);return k(()=>{const l=e.current?.[at];l&&l.layoutComplete.then(()=>{s.dispatchEvent(new CustomEvent("layout-complete"));const{averageChildSize:c,averageMarginSize:u}=l._layout._metricsCache;return a(c+u*2)},qt)},[n]),k(()=>{if(!t.scroll)return;const l=e.current?.[at];if(l){if(!l?._layout){l.layoutComplete.then(()=>l.element(t.index)?.scrollIntoView({block:"nearest"}),qt);return}l.element(t.index)?.scrollIntoView({block:"nearest"})}},[t]),Ci(Li({...t,itemHeight:r,auto:s.itemHeight==="auto"})),b`<div
			class="items"
			style="min-height: ${i}px"
			${re(l=>e.current=l)}
		>
			<div virtualizer-sizer></div>
			${ti({items:n,renderItem:o,scroller:!0})}
		</div>
		<slot></slot>`};customElements.define("cosmoz-listbox",I(Bi,{styleSheets:[ls(Ei)]}));const Ui=({multi:s,...e},t)=>b`<cosmoz-listbox
		part="listbox"
		?multi=${s}
		...=${Si(so(ji)(e))}
		>${t}</cosmoz-listbox
	>`,w=s=>`calc(var(--cz-spacing) * ${s})`,Hi=N`
	/* =========================================
	 * HOST
	 * ========================================= */
	:host {
		display: inline-block;
		max-width: 100%;
		min-width: 0;
	}

	/* =========================================
	 * BADGE BASE (default: pill, md)
	 * ========================================= */
	.badge {
		display: inline-flex;
		align-items: center;
		gap: ${w(1.5)};
		max-width: 100%;
		min-width: calc(var(--cz-spacing) * 2);
		white-space: nowrap;
		font-family: var(--cz-font-body);
		font-weight: var(--cz-font-weight-medium);
		border: 1px solid
			var(--cosmoz-badge-border-color, var(--cz-color-border-secondary));
		background-color: var(
			--cosmoz-badge-bg-color,
			var(--cz-color-bg-secondary)
		);
		color: var(--cz-color-text-secondary);
		border-radius: var(--cz-radius-full);
		padding: ${w(.5)} ${w(2)};
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
	}

	.content {
		overflow: hidden;
		text-overflow: ellipsis;
		min-width: 0;
	}

	/* =========================================
	 * COLOR VARIANTS
	 * ========================================= */

	:host([color='brand']) .badge {
		background-color: var(--cz-color-bg-brand);
		color: var(--cz-color-text-secondary);
		border-color: var(--cz-color-brand-200);
	}

	:host([color='error']) .badge {
		background-color: var(--cz-color-bg-error);
		color: var(--cz-color-text-error);
		border-color: var(--cz-color-error-200);
	}

	:host([color='warning']) .badge {
		background-color: var(--cz-color-bg-warning);
		color: var(--cz-color-text-warning);
		border-color: var(--cz-color-warning-200);
	}

	:host([color='success']) .badge {
		background-color: var(--cz-color-bg-success);
		color: var(--cz-color-text-success);
		border-color: var(--cz-color-success-200);
	}

	/* Modern type: neutral bg/text/border regardless of color */
	:host([type='modern']) .badge {
		background-color: var(--cz-color-bg-primary);
		color: var(--cz-color-text-secondary);
		border-color: var(--cz-color-border-primary);
	}

	/* =========================================
	 * TYPE VARIANTS (shape)
	 * ========================================= */
	:host([type='color']) .badge,
	:host([type='modern']) .badge {
		border-radius: var(--cz-radius-sm);
		padding: ${w(.5)} ${w(2)};
	}

	:host([type='modern']) .badge {
		box-shadow: var(--cz-shadow-xs);
	}

	/* =========================================
	 * SIZE VARIANTS
	 * ========================================= */

	/* --- Pill sizes --- */
	:host([size='sm']) .badge {
		padding: ${w(.5)} ${w(2)};
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		gap: ${w(1)};
	}

	:host([size='lg']) .badge {
		padding: ${w(1)} ${w(3)};
	}

	/* --- Badge sizes --- */
	:host([type='color'][size='sm']) .badge,
	:host([type='modern'][size='sm']) .badge {
		padding: ${w(.5)} ${w(1.5)};
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		gap: ${w(1)};
	}

	:host([type='color'][size='lg']) .badge,
	:host([type='modern'][size='lg']) .badge {
		padding: ${w(1)} ${w(2.5)};
		border-radius: var(--cz-radius-md);
	}

	/* =========================================
	 * DOT INDICATOR
	 * ========================================= */
	.dot {
		width: ${w(2)};
		height: ${w(2)};
		border-radius: var(--cz-radius-full);
		background-color: var(--cz-color-fg-quaternary);
		flex-shrink: 0;
	}
	:host(:not([dot])) .dot {
		display: none;
	}
	:host([color='brand']) .dot {
		background-color: var(--cz-color-fg-brand-secondary);
	}
	:host([color='error']) .dot {
		background-color: var(--cz-color-fg-error-secondary);
	}
	:host([color='warning']) .dot {
		background-color: var(--cz-color-fg-warning-secondary);
	}
	:host([color='success']) .dot {
		background-color: var(--cz-color-fg-success-secondary);
	}

	/* Pill + dot: asymmetric padding (tighter left) */
	:host([dot]) .badge {
		padding: ${w(.5)} ${w(2.5)} ${w(.5)} ${w(2)};
	}

	:host([dot][size='sm']) .badge {
		padding: ${w(.5)} ${w(2)} ${w(.5)} ${w(1.5)};
	}

	:host([dot][size='lg']) .badge {
		padding: ${w(1)} ${w(3)} ${w(1)} ${w(2.5)};
	}

	/* Badge + dot: symmetric padding (same as base badge) */
	:host([dot][type='color']) .badge,
	:host([dot][type='modern']) .badge {
		padding: ${w(.5)} ${w(2)};
	}

	:host([dot][type='color'][size='sm']) .badge,
	:host([dot][type='modern'][size='sm']) .badge {
		padding: ${w(.5)} ${w(1.5)};
	}

	:host([dot][type='color'][size='lg']) .badge,
	:host([dot][type='modern'][size='lg']) .badge {
		padding: ${w(1)} ${w(2.5)};
	}

	/* =========================================
	 * ICON-ONLY TYPE
	 * ========================================= */
	:host([type='icon']) .badge {
		padding: ${w(2)};
		gap: 0;
	}

	:host([type='icon'][size='sm']) .badge {
		padding: ${w(1.5)};
	}

	:host([type='icon'][size='lg']) .badge {
		padding: ${w(2.5)};
	}

	:host([type='icon']) .dot,
	:host([type='icon']) slot[name='prefix'],
	:host([type='icon']) slot[name='suffix'] {
		display: none;
	}

	:host([type='icon']) ::slotted(svg) {
		width: ${w(3)};
		height: ${w(3)};
	}

	/* =========================================
	 * SLOTTED CONTENT (icons, images, flags)
	 * ========================================= */
	::slotted(svg) {
		display: block;
		width: ${w(3)};
		height: ${w(3)};
		flex-shrink: 0;
		color: var(--cz-color-fg-quaternary);
	}

	:host([color='brand']) ::slotted(svg) {
		color: var(--cz-color-fg-brand-secondary);
	}
	:host([color='error']) ::slotted(svg) {
		color: var(--cz-color-fg-error-secondary);
	}
	:host([color='warning']) ::slotted(svg) {
		color: var(--cz-color-fg-warning-secondary);
	}
	:host([color='success']) ::slotted(svg) {
		color: var(--cz-color-fg-success-secondary);
	}
`,Ki=()=>b`<span class="badge" part="badge" role="status">
		<span class="dot" part="dot"></span>
		<slot name="prefix"></slot>
		<span class="content"><slot></slot></span>
		<slot name="suffix"></slot>
	</span>`;customElements.define("cosmoz-badge",I(Ki,{styleSheets:[Le,Hi]}));const ee=s=>`calc(var(--cz-spacing) * ${s})`,qi=N`
	/* =========================================
	 * HOST
	 * ========================================= */
	:host {
		display: inline-flex;
	}

	:host([disabled]) {
		opacity: 0.5;
		pointer-events: none;
	}

	/* =========================================
	 * REMOVE BUTTON
	 * ========================================= */
	.close {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0;
		border: none;
		background: none;
		cursor: pointer;
		color: inherit;
		opacity: 0.7;
		transition: opacity 0.1s;
		flex-shrink: 0;
		border-radius: var(--cz-radius-full);
		line-height: 0;
	}

	.close:hover {
		opacity: 1;
	}

	.close:focus-visible {
		outline: 2px solid currentColor;
		outline-offset: 1px;
	}

	.close svg {
		width: ${ee(2.5)};
		height: ${ee(2.5)};
	}

	:host([size='md']) .close svg,
	:host(:not([size])) .close svg {
		width: ${ee(3)};
		height: ${ee(3)};
	}

	:host([size='lg']) .close svg {
		width: ${ee(3.5)};
		height: ${ee(3.5)};
	}

	/* =========================================
	 * SLOTTED CONTENT (icons, images, flags)
	 * ========================================= */
	::slotted(svg) {
		width: ${ee(3.5)};
		height: ${ee(3.5)};
		color: var(--cz-color-fg-quaternary);
	}

	:host([color='brand']) ::slotted(svg) {
		color: var(--cz-color-fg-brand-secondary);
	}
	:host([color='error']) ::slotted(svg) {
		color: var(--cz-color-fg-error-secondary);
	}
	:host([color='warning']) ::slotted(svg) {
		color: var(--cz-color-fg-warning-secondary);
	}
	:host([color='success']) ::slotted(svg) {
		color: var(--cz-color-fg-success-secondary);
	}
`,Yi=s=>{const{color:e,size:t,disabled:n,removable:o}=s,i=()=>{n||s.dispatchEvent(new CustomEvent("remove"))};return b`<cosmoz-badge
		color=${x(e)}
		size=${x(t)}
		?disabled=${n}
		type="color"
	>
		<slot name="prefix" slot="prefix"></slot>
		<slot></slot>
		<slot name="suffix" slot="suffix"></slot>
		${C(o,()=>b` <button
					slot="suffix"
					class="close"
					aria-label="Remove"
					@mousedown=${r=>r.preventDefault()}
					@click=${i}
				>
					${lo()}
				</button>`)}
	</cosmoz-badge>`};customElements.define("cosmoz-tag",I(Yi,{observedAttributes:["color","size","disabled","removable"],styleSheets:[Le,qi]}));const Wi=({content:s,onClear:e,disabled:t,className:n="chip",hidden:o,slot:i})=>b`<cosmoz-tag
		class=${x(n)}
		slot=${x(i)}
		exportparts="chip-text, chip-clear"
		?disabled=${t}
		?hidden=${o}
		?removable=${!!e&&!t}
		@remove=${e}
		title=${x(typeof s=="string"?s:void 0)}
		>${s}</cosmoz-tag
	>`,Ji=({value:s,min:e=0,onDeselect:t,textual:n,disabled:o,chipRenderer:i=Wi})=>[...s.filter(Boolean).map(r=>i({item:r,content:n(r),onClear:s.length>e&&(()=>t(r)),disabled:o,slot:"control"})),i({item:null,content:b`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],Gi=N`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",I(()=>G,{styleSheets:[Gi]}));const $s=ue`
	:host {
		display: block;
		position: relative;
		min-width: calc(var(--cz-spacing) * 9);
	}

	:host([mode='select']) {
		--cosmoz-badge-border-color: transparent;
		--cosmoz-badge-bg-color: transparent;
	}

	cosmoz-dropdown-next {
		display: block;
	}

	:host(:not([variant='inline'])) cosmoz-listbox {
		margin-top: var(--cz-spacing);
	}

	cosmoz-tag {
		align-items: center;
		margin-left: calc(var(--cz-spacing) * 2);
	}

	cosmoz-input::part(control) {
		display: flex;
		min-width: calc(var(--cz-spacing) * 9);
	}

	cosmoz-input[variant='inline']:has(cosmoz-tag[removable])::part(label),
	cosmoz-input[variant='inline'][disabled]:has(cosmoz-tag)::part(label) {
		transform: translate(var(--cz-spacing), -75%) scale(0.85);
	}

	cosmoz-input::part(input) {
		flex: 1 calc(var(--cz-spacing) * 6);
		min-width: 0;
	}

	cosmoz-input:not([data-one])::part(input):focus {
		flex: 4 0.00001 calc(var(--cz-spacing) * 12.5);
		min-width: calc(var(--cz-spacing) * 5);
	}

	.badge {
		min-width: initial;
		flex: none;
		text-align: center;
		padding: 0 var(--cz-spacing);
	}

	[data-single]::part(input) {
		flex: 0;
	}

	[data-one] .badge {
		display: none;
	}

	[hidden] {
		display: none;
	}

	:host([wrap]) cosmoz-input::part(control) {
		flex-wrap: wrap;
		padding-right: calc(var(--cz-spacing) * 2);
	}

	:host([wrap]) cosmoz-tag {
		padding-block: calc(var(--cz-spacing) * 1.5);
	}

	slot {
		display: contents !important;
	}

	.no-result {
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-weight: var(--cz-font-weight-regular);
		padding: 0 calc(var(--cz-spacing) * 3);
		color: var(--cz-color-text-secondary);
	}
`,pt=(s,e=()=>({}))=>{const t={type:s,toString(){return s}};return Object.assign((...o)=>Object.assign(e(...o),t),t)},Yt=s=>s.type||s.toString(),Wt=s=>Array.isArray(s)?s:[s],Zi=(s,e)=>{const t=Wt(e),n=(t.every(Array.isArray)?t:[t]).map(([o,i])=>({actions:Wt(o).map(Yt),handle:i}));return(o=s,i)=>{const r=n.find(a=>a.actions.includes(Yt(i)));return r?r.handle(o,i):o}},ae={pending:"pending",rejected:"rejected",resolved:"resolved"},_s={error:void 0,result:void 0,state:ae.pending},Ss=pt(ae.pending),Cs=pt(ae.resolved,s=>({result:s})),ks=pt(ae.rejected,s=>({error:s})),Qi=Zi(_s,[[Ss,()=>({error:void 0,result:void 0,state:ae.pending})],[Cs,(s,{result:e})=>({error:void 0,result:e,state:ae.resolved})],[ks,(s,{error:e})=>({error:e,result:void 0,state:ae.rejected})]]),Xi=s=>{const[{error:e,result:t,state:n},o]=sn(Qi,_s);return k(()=>{if(!s)return;let i=!1;return o(Ss()),s.then(r=>!i&&o(Cs(r)),r=>!i&&o(ks(r))),()=>{i=!0}},[s]),[t,e,n]},er=Symbol("autocomplete.deselect.last"),tr=Symbol("autocomplete.search.when.selected"),Jt=s=>s.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),sr=(s,e,t)=>{if(!e)return s;const n=Jt(e.toLowerCase()),o=[];for(const i of s){const a=Jt(t(i).toLowerCase()).indexOf(n);a<0||o.push({item:i,index:a})}return o.sort((i,r)=>i.index-r.index).map(({item:i})=>i)},nr=s=>s===!1||s==null?[]:s,or=(s,e,t)=>s.dispatchEvent(new CustomEvent(e,{detail:t})),Gt=[],ir=s=>(...e)=>{let t;const n=()=>{t&&cancelAnimationFrame(t)};return n(),t=requestAnimationFrame(()=>{t=void 0,s(...e)}),n},rr=(s,e,t)=>_(n=>{e?.(n),s.dispatchEvent(new CustomEvent(t,{detail:n}))},[e]),ar=({value:s,text:e,onChange:t,onText:n,onSelect:o,limit:i,min:r,source:a,textProperty:l,textual:c,valueProperty:u,keepOpened:h,keepQuery:d,preserveOrder:p,defaultIndex:g,externalSearch:f,disabled:m,lazyOpen:v})=>{const z=i!=null?Number(i):void 0,E=r!=null?Number(r):void 0,S=T(()=>(c??to)(l),[c,l]),L=ne(),[R,$]=ke("opened",!1),A=!e,P=T(()=>e?.trim(),[e]),H=rr(L,n,"text"),j=_(O=>{t?.(O,()=>$(!1)),or(L,"value",O)},[t]),[de,Je]=X([]),q=!!(v&&!P),Y=T(()=>q?Promise.resolve([]):Promise.resolve(typeof a=="function"?a({query:P,active:R}):a).then(nr),[a,R,P,q]),D=T(()=>Q(s),[s]);k(()=>Y.then(Je),[Y]),$e({activity:er,callback:()=>{const O=Q(D);O.length>(E??0)&&j(O.slice(0,-1))},check:()=>!m&&A&&L.matches(":focus-within"),element:()=>L},[]),$e({activity:tr,callback:O=>{const W=Q(D),he=z===1;W.length>0&&he&&O.key.length===1&&j(W.slice(0,-1))},allowDefault:!0,check:()=>!m&&A&&L.matches(":focus-within"),element:()=>L},[z]),k(()=>{!R&&!d&&H("")},[R,d]),k(()=>{L.toggleAttribute("opened",!!R)},[R]);const K=ht({onText:H,onChange:j,value:D,limit:z,min:E,keepQuery:d,keepOpened:h,setOpened:$,onSelect:o,valueProperty:u}),[,,M]=Xi(Y);return{limit:z,opened:R,query:P,textual:S,value:D,source$:Y,loading:M==="pending",items:T(()=>{if(!R||q)return Gt;const O=p?de:[...D,...tt(D,Ne(u))(de)];return f?O:sr(O,P,S)},[de,R,P,S,A,D,p,u,f,q]),onToggle:_(O=>{m||$(O.newState==="open")},[m]),onText:_(O=>{m||(H(O.target.value),$(!0))},[m,H,e,$]),onSelect:_(O=>{if(m)return;K.onSelect?.(O,K);const{onChange:W,onText:he,limit:As,min:Ts,value:Ps,keepQuery:Ns,keepOpened:Is,setOpened:Ms,valueProperty:Fs}=K;Ns||he(""),Is||Ms(!1);const Oe=Q(Ps),Ge=Ne(Fs),mt=Oe.some(Vs=>Ge(Vs)===Ge(O));mt&&Oe.length===Ts||W((mt?tt(O,Ge)(Oe):[...Oe,O]).slice(-As))},[m,K]),onDeselect:_(O=>{m||K.onChange(tt(O,Ne(K.valueProperty))(K.value))},[m,K]),defaultIndex:P!==void 0&&P?.length>0?0:g}},lr=s=>{const e=s.shadowRoot.querySelectorAll(".chip"),t=s.shadowRoot.querySelector(".badge");if(!t)return;t.hidden=!0;for(const a of e)a.hidden=!1;const o=s.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let i;for(i=0;i<e.length;i++){const l=e[i].getBoundingClientRect();if(!(l.x+l.width<=o.x+o.width-24))break}const r=e.length-i;for(t.querySelector("span").textContent="+"+r.toString(),t.hidden=r<1;i<e.length;i++)e[i].hidden=!0},cr=({value:s,opened:e,wrap:t,limit:n})=>{const o=ne(),i=!(t||n===1),r=T(()=>ir(()=>lr(o)),[]),[a,l]=X(0);ot(()=>{if(!i)return;const c=o.shadowRoot.querySelector("cosmoz-input"),u=new ResizeObserver(h=>{l(h[0].contentRect.width)});return u.observe(c),()=>u.disconnect()},[i]),ot(()=>i?r():void 0,[i,a,e,s])},ur=["input","control","label","line","error","wrap"].map(s=>`${s}: input-${s}`).join(),dr=({opened:s,isSingle:e,showSingle:t,hasResultsOrQuery:n})=>!s||e&&!t?!1:n,hr=s=>{const{variant:e,opened:t,invalid:n,errorMessage:o,hint:i,label:r,placeholder:a,required:l,disabled:c,textual:u,text:h,onText:d,onToggle:p,onDeselect:g,value:f,limit:m,min:v,showSingle:z,items:E,source$:S,loading:L,chipRenderer:R,mode:$}=s,A=m===1,P=A&&f?.[0]!=null,H=L||E.length>0||h!=null&&h.length>0;return b`<cosmoz-dropdown-next
			open-on-focus
			?disabled=${c}
			.opened=${t}
			@dropdown-toggle=${p}
			part="dropdown"
		>
			<cosmoz-input
				slot="button"
				id="input"
				part="input"
				.label=${r}
				.placeholder=${P?void 0:a}
				hint=${x(i)}
				variant=${x(e)}
				?readonly=${P}
				?disabled=${c}
				?required=${l}
				?invalid=${Kt([S,n],()=>Se(S.then(()=>n,()=>!0),n))}
				.errorMessage=${Kt([S,o],()=>Se(S.then(()=>o,j=>j.message),o))}
				.value=${Ke(h)}
				@value-changed=${d}
				autocomplete="off"
				exportparts=${ur}
				?data-one=${A}
				?data-single=${P}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix">
					${C($==="select",()=>oo({styles:"margin-right: calc(var(--cz-spacing) * 2);color: var(--cz-color-text-secondary);",width:"16",height:"16"}))}
				</slot>
				${Ji({value:f,min:v,onDeselect:g,textual:u,disabled:c,chipRenderer:R})}
			</cosmoz-input>

			${C(dr({opened:t,isSingle:P,showSingle:z,hasResultsOrQuery:H}),()=>Ui({...s,items:E,multi:!A},C(L,()=>b`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>C(h!=null&&h.length>0&&E.length===0,()=>b`<slot name="no-result">
											<span class="no-result">${me("No results found")}</span>
										</slot>`))))}
		</cosmoz-dropdown-next>`},ft=s=>{const e={...s,...ar(s)};return cr(e),hr(e)},gt=["variant","disabled","invalid","required","hint","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap","lazy-open","mode"],pr=s=>{const{onChange:e,onText:t,mode:n,...o}=s,i=n==="select",[r,a]=ke("value");return k(()=>{s.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),ft({...o,...i&&{limit:1,min:1,showSingle:!0},mode:n,value:r,onChange:_((l,...c)=>{a(l),e?.(l,...c)},[e]),onText:_(l=>{s.text=l,t?.(l)},[t])})},Es=[ls($s)],Ls={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-ui",I(ft,{observedAttributes:gt,styleSheets:Es,shadowRootInit:Ls}));customElements.define("cosmoz-autocomplete",I(pr,{observedAttributes:gt,styleSheets:Es,shadowRootInit:Ls}));const fr="data:image/svg+xml,%3Csvg width='11' height='11' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.5 2.5L8.5 8.5M8.5 2.5L2.5 8.5' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E",gr=N`
	cosmoz-listbox::part(error)::before {
		border-color: var(--cz-color-border-error);
		/* prettier-ignore */
		background: url("${fr}") var(--cz-color-border-error) no-repeat 50%;
	}

	cosmoz-listbox::part(error):hover {
		background: var(--cz-color-bg-error);
	}
`,Zt=s=>({item:s,excluded:!1}),Os=s=>s.item,mr=s=>{const[e,t]=ke(s),n=_(o=>t(i=>{const r=F(o,i?.map(Os));if(!r)return;if(!i)return r.map(Zt);const a=i.reduce((c,u)=>r.includes(u.item)?[...c,u]:u.excluded?c:[...c,{...u,excluded:!0}],[]),l=r.filter(c=>!i.some(u=>u.item===c)).map(Zt);return[...a,...l]}),[]);return{value:e,setExcludingValue:n,setValue:t}},br=(s,e)=>s?.some(t=>t.item===e&&t.excluded),Rs=(s,e)=>e&&br(s,e)?"error":"gray",vr=s=>(e,t,{highlight:n,select:o,textual:i,isSelected:r})=>{const a=i(e);return b`<div
				class="item"
				role="option"
				part="option ${Rs(s,e)}"
				?aria-selected=${r(e)}
				data-index=${t}
				@mouseenter=${()=>n(t)}
				@click=${()=>o(e)}
				@mousedown=${l=>l.preventDefault()}
			>
				${a}
			</div>
			<div class="sizer" virtualizer-sizer>${a}</div>`},yr=(s,e)=>({item:t,content:n,disabled:o,hidden:i,className:r="chip",slot:a})=>b`<cosmoz-tag
			class=${x(r)}
			slot=${x(a)}
			exportparts="chip-text, chip-clear"
			color=${Rs(s,t)}
			?disabled=${o}
			?hidden=${i}
			?removable=${!!t}
			@remove=${()=>e(t)}
			title=${x(typeof n=="string"?n:void 0)}
		>
			${n}
		</cosmoz-tag>`,xr=s=>{const{value:e,setValue:t,setExcludingValue:n}=mr("value"),[o,i]=ke("text"),r=_(a=>t(l=>l?.filter(c=>c.item!==a)),[]);return ft({...s,value:T(()=>e?.map(Os),[e]),onChange:_(a=>{n(a)},[]),text:o,onText:_(a=>{i(a)},[]),itemRenderer:T(()=>vr(e),[e]),chipRenderer:T(()=>yr(e,r),[e,r])})},wr={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-excluding",I(xr,{observedAttributes:gt,styleSheets:[$s,gr],shadowRootInit:wr}));ue`
	.input-inline-file {
		position: relative;
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
`;const Qt=s=>s?Array.isArray(s)?s.length===1?s[0].name:me("{0} files",{0:s.length}):s.name:me("Choose file"),Lr=dt(({id:s,label:e,value:t,values:n,onChange:o,accept:i,multiple:r,disabled:a})=>b`<div class="input input-inline-file" name=${s}>
			${bs({value:Qt(t),field:{label:e,disabled:a,prefix:io({styles:"vertical-align: middle;"}),id:s},error:!1,invalid:!1,load:ge,onChange:ge,onReset:ge,onValues:ge,touched:!1,values:n,context:{}})}

			<input
				class="file"
				type="file"
				name=${s}
				title=${Qt(t)}
				?multiple=${r}
				?disabled=${x(a)}
				accept=${x(Se(F(i,t,n)))}
				@change=${l=>o(r?Array.from(l.target.files):l.target.files[0])}
			/>
		</div>`);export{Kt as A,ye as B,k as C,Ie as D,Ht as E,_ as F,ds as G,Bo as a,F as b,Uo as c,ri as d,ue as e,I as f,jt as g,bs as h,dt as i,kr as j,Lr as k,Ke as l,Se as m,C as n,x as o,Er as p,X as q,Do as r,ii as s,me as t,gi as u,oi as v,U as w,T as x,mi as y,vs as z};
